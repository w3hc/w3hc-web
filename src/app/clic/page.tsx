'use client'

import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { brandColors } from '@/theme'
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react'

type GestureType = 'tap' | 'double' | 'hold'

const GESTURE_TYPES: GestureType[] = ['tap', 'double', 'hold']

const LONG_PRESS_MS = 550
const DOUBLE_TAP_WINDOW_MS = 380
const MOVE_CANCEL_PX = 24
const WOW_DURATION_MS = 1100
const WOW_EVERY = 5
const SIZE_MIN = 72
const SIZE_MAX = 132
const IDLE_INVITE_MS = 3500

const TYPE_LABEL: Record<GestureType, string> = {
  tap: 'Clic simple',
  double: 'Double-clic',
  hold: 'Clic long',
}

const TYPE_COLOR: Record<GestureType, string> = {
  tap: brandColors.accent,
  double: brandColors.primary,
  hold: brandColors.white,
}

const TYPE_INK: Record<GestureType, string> = {
  tap: brandColors.white,
  double: brandColors.white,
  hold: brandColors.primary,
}

const CONFETTI_COLORS = [brandColors.accent, brandColors.primary, brandColors.white]

const WOW_MESSAGES = ['Wow !', 'Excellent !', 'Ouiiiiii !', 'Quel talent !', 'Respect total']

function wowMessageForSeries(seriesCount: number) {
  return WOW_MESSAGES[Math.min(seriesCount, WOW_MESSAGES.length) - 1]
}

function timeLimitForStreak(streak: number) {
  return Math.max(1000, 5500 - streak * 150)
}

function pauseForStreak(streak: number) {
  return Math.max(200, 1400 - streak * 30)
}

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomPosition() {
  return { top: 15 + Math.random() * 70, left: 15 + Math.random() * 70 }
}

function randomSize() {
  return Math.round(SIZE_MIN + Math.random() * (SIZE_MAX - SIZE_MIN))
}

interface ConfettiPiece {
  angle: number
  dist: number
  color: string
}

const CONFETTI_COUNT = 36

function randomConfetti(): ConfettiPiece[] {
  return Array.from({ length: CONFETTI_COUNT }, (_, i) => ({
    angle: (360 / CONFETTI_COUNT) * i,
    dist: 70 + Math.round(Math.random() * 60),
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  }))
}

interface Target {
  key: number
  type: GestureType
  size: number
  top: number
  left: number
  timeLimit: number
  hasTimer: boolean
}

function GestureIcon({ type, size = 26 }: { type: GestureType; size?: number }) {
  if (type === 'tap') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3.2" fill="currentColor" />
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
      </svg>
    )
  }
  if (type === 'double') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="8.5" cy="12" r="2.6" fill="currentColor" />
        <circle cx="15.5" cy="12" r="2.6" fill="currentColor" />
      </svg>
    )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 7v5l3.5 2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}

const gameStyles = `
  @keyframes tap-pop-in {
    from { transform: translate(-50%, -50%) scale(0.4); opacity: 0; }
    to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }
  @keyframes tap-wow-text {
    0% { transform: scale(0.5); opacity: 0; }
    45% { transform: scale(1.15); opacity: 1; }
    70% { transform: scale(0.98); }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes tap-confetti {
    from { transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0) scale(1); opacity: 1; }
    to { transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--dist)) scale(0.3); opacity: 0; }
  }
  @keyframes tap-shrink {
    from { width: 100%; }
    to { width: 0%; }
  }
  @keyframes tap-invite {
    0% { transform: rotateY(0deg) scale(1); }
    12% { transform: rotateY(180deg) scale(1.08); }
    24%, 100% { transform: rotateY(360deg) scale(1); }
  }
  .tap-target-shape {
    animation: tap-pop-in 220ms ease-out;
  }
  .tap-target-shape.tap-invite {
    animation: tap-invite 2600ms ease-in-out infinite;
  }
  .tap-progress-bar {
    animation-name: tap-shrink;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
  .tap-ring-progress {
    stroke-dasharray: 289;
    stroke-dashoffset: 289;
  }
  .tap-ring-progress.charging {
    transition: stroke-dashoffset var(--hold-ms) linear;
    stroke-dashoffset: 0;
  }
  @media (prefers-reduced-motion: reduce) {
    .tap-target-shape { animation: none; }
    .tap-target-shape.tap-invite { animation: none; }
    .tap-ring-progress.charging { transition: none; }
  }
`

export default function ClicPage() {
  const [target, setTarget] = useState<Target | null>(null)
  const [flash, setFlash] = useState<'correct' | 'wrong' | null>(null)
  const [streakDisplay, setStreakDisplay] = useState(0)
  const [wowKey, setWowKey] = useState<number | null>(null)
  const [wowMessage, setWowMessage] = useState('')
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])
  const wowIdRef = useRef(0)

  const targetRef = useRef<Target | null>(null)
  const streakRef = useRef(0)
  const roundKeyRef = useRef(0)
  const roundTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const nextTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const wowTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pendingTapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const activePointerIdRef = useRef<number | null>(null)
  const activeRoundKeyRef = useRef<number | null>(null)
  const startPosRef = useRef({ x: 0, y: 0 })
  const longPressFiredRef = useRef(false)
  const ringRef = useRef<SVGCircleElement | null>(null)
  const gameStartedRef = useRef(false)
  const targetElRef = useRef<HTMLDivElement | null>(null)
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function armIdleInvite() {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    targetElRef.current?.classList.remove('tap-invite')
    idleTimerRef.current = setTimeout(() => {
      targetElRef.current?.classList.add('tap-invite')
    }, IDLE_INVITE_MS)
  }

  function clearGestureTimers() {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current)
      holdTimerRef.current = null
    }
    if (pendingTapTimerRef.current) {
      clearTimeout(pendingTapTimerRef.current)
      pendingTapTimerRef.current = null
    }
    activePointerIdRef.current = null
    longPressFiredRef.current = false
    ringRef.current?.classList.remove('charging')
  }

  function spawnRound(currentStreak: number) {
    clearGestureTimers()
    if (roundTimerRef.current) clearTimeout(roundTimerRef.current)
    roundKeyRef.current += 1
    const key = roundKeyRef.current
    const timeLimit = timeLimitForStreak(currentStreak)
    const next: Target = {
      key,
      type: randomFrom(GESTURE_TYPES),
      size: randomSize(),
      ...randomPosition(),
      timeLimit,
      hasTimer: gameStartedRef.current,
    }
    targetRef.current = next
    setTarget(next)
    setFlash(null)
    if (gameStartedRef.current) {
      roundTimerRef.current = setTimeout(() => handleResult('timeout', key), timeLimit)
    }
    armIdleInvite()
  }

  function handleResult(kind: 'correct' | 'wrong' | 'timeout', roundKey: number) {
    if (roundKey !== targetRef.current?.key) return

    // A hold interrupted by the round clock still counts as a win: the
    // player was doing the right gesture, the timer just cut it short.
    if (
      kind === 'timeout' &&
      targetRef.current.type === 'hold' &&
      activePointerIdRef.current !== null
    ) {
      kind = 'correct'
    }

    if (roundTimerRef.current) {
      clearTimeout(roundTimerRef.current)
      roundTimerRef.current = null
    }
    clearGestureTimers()

    if (kind === 'correct') {
      const newStreak = streakRef.current + 1
      streakRef.current = newStreak
      setStreakDisplay(newStreak)
      setFlash('correct')
      let delay = pauseForStreak(newStreak)
      if (newStreak % WOW_EVERY === 0) {
        wowIdRef.current += 1
        setWowKey(wowIdRef.current)
        setWowMessage(wowMessageForSeries(newStreak / WOW_EVERY))
        setConfetti(randomConfetti())
        if (wowTimerRef.current) clearTimeout(wowTimerRef.current)
        wowTimerRef.current = setTimeout(() => setWowKey(null), WOW_DURATION_MS)
        delay = Math.max(delay, WOW_DURATION_MS)
      }
      nextTimerRef.current = setTimeout(() => spawnRound(newStreak), delay)
    } else {
      streakRef.current = 0
      setStreakDisplay(0)
      setFlash(kind === 'wrong' ? 'wrong' : null)
      nextTimerRef.current = setTimeout(() => spawnRound(0), pauseForStreak(0))
    }
  }

  function registerGesture(type: GestureType, roundKey: number) {
    if (roundKey !== targetRef.current?.key) return
    const isCorrect = type === targetRef.current.type
    handleResult(isCorrect ? 'correct' : 'wrong', roundKey)
  }

  function handlePointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    if (!targetRef.current || activePointerIdRef.current !== null) return
    gameStartedRef.current = true
    armIdleInvite()
    activePointerIdRef.current = e.pointerId
    activeRoundKeyRef.current = targetRef.current.key
    startPosRef.current = { x: e.clientX, y: e.clientY }
    longPressFiredRef.current = false
    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {
      // ignore unsupported pointer capture
    }
    const ring = ringRef.current
    if (ring) {
      ring.classList.remove('charging')
      void ring.getBoundingClientRect()
      requestAnimationFrame(() => ring.classList.add('charging'))
    }
    const roundKey = activeRoundKeyRef.current
    holdTimerRef.current = setTimeout(() => {
      longPressFiredRef.current = true
      ringRef.current?.classList.remove('charging')
      registerGesture('hold', roundKey)
    }, LONG_PRESS_MS)
  }

  function handlePointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.pointerId !== activePointerIdRef.current || longPressFiredRef.current) return
    const dx = e.clientX - startPosRef.current.x
    const dy = e.clientY - startPosRef.current.y
    if (Math.sqrt(dx * dx + dy * dy) > MOVE_CANCEL_PX) {
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current)
        holdTimerRef.current = null
      }
      ringRef.current?.classList.remove('charging')
      activePointerIdRef.current = null
    }
  }

  function handlePointerUp(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.pointerId !== activePointerIdRef.current) return
    const wasLongPress = longPressFiredRef.current
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current)
      holdTimerRef.current = null
    }
    ringRef.current?.classList.remove('charging')
    activePointerIdRef.current = null
    if (wasLongPress) return

    const roundKey = activeRoundKeyRef.current
    if (roundKey === null) return

    if (pendingTapTimerRef.current) {
      clearTimeout(pendingTapTimerRef.current)
      pendingTapTimerRef.current = null
      registerGesture('double', roundKey)
    } else {
      pendingTapTimerRef.current = setTimeout(() => {
        pendingTapTimerRef.current = null
        registerGesture('tap', roundKey)
      }, DOUBLE_TAP_WINDOW_MS)
    }
  }

  function handlePointerCancel(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.pointerId !== activePointerIdRef.current) return
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current)
      holdTimerRef.current = null
    }
    ringRef.current?.classList.remove('charging')
    activePointerIdRef.current = null
  }

  function handleKeyDown(e: ReactKeyboardEvent<HTMLDivElement>) {
    if ((e.key === 'Enter' || e.key === ' ') && targetRef.current) {
      e.preventDefault()
      gameStartedRef.current = true
      registerGesture('tap', targetRef.current.key)
    }
  }

  useEffect(() => {
    spawnRound(0)
    return () => {
      if (roundTimerRef.current) clearTimeout(roundTimerRef.current)
      if (nextTimerRef.current) clearTimeout(nextTimerRef.current)
      if (wowTimerRef.current) clearTimeout(wowTimerRef.current)
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current)
      if (pendingTapTimerRef.current) clearTimeout(pendingTapTimerRef.current)
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <VStack gap={8} align="stretch" py={16}>
      <style dangerouslySetInnerHTML={{ __html: gameStyles }} />

      <VStack gap={2}>
        <Heading size="xl" textAlign="center">
          Entraînement tactile
        </Heading>
        <Text color="gray.400" textAlign="center" fontSize="md">
          Touche la forme comme demandé.
        </Text>
      </VStack>

      <Flex justify="center" align="center" gap={2}>
        <Box color={target ? TYPE_COLOR[target.type] : 'gray.500'}>
          <GestureIcon type={target?.type ?? 'tap'} size={24} />
        </Box>
        <Text fontSize="lg" fontWeight="bold">
          Essaie :{' '}
          <Text as="span" color={target ? TYPE_COLOR[target.type] : 'gray.500'}>
            {target ? TYPE_LABEL[target.type] : ''}
          </Text>
        </Text>
      </Flex>

      <VStack gap={0}>
        <Text fontSize="xs" color="gray.500" textTransform="uppercase" letterSpacing="wide">
          Série
        </Text>
        <Text fontSize="3xl" fontWeight="bold" fontFamily="mono">
          {streakDisplay}
        </Text>
      </VStack>

      <Box
        position="relative"
        w="100%"
        h={{ base: '340px', md: '420px' }}
        bg="gray.900"
        borderRadius="2xl"
        borderWidth="1px"
        borderColor="gray.700"
        overflow="hidden"
      >
        {target && (
          <>
            <Box
              key={`bar-${target.key}`}
              className={target.hasTimer ? 'tap-progress-bar' : undefined}
              position="absolute"
              top={0}
              left={0}
              h="4px"
              w={target.hasTimer ? undefined : '0%'}
              bg={brandColors.primary}
              style={target.hasTimer ? { animationDuration: `${target.timeLimit}ms` } : undefined}
            />

            <Box
              key={target.key}
              position="absolute"
              top={`${target.top}%`}
              left={`${target.left}%`}
              transform="translate(-50%, -50%)"
              w={`${target.size}px`}
              h={`${target.size}px`}
              style={{ perspective: '600px' }}
            >
              <svg
                viewBox="0 0 100 100"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  transform: 'rotate(-90deg)',
                  pointerEvents: 'none',
                }}
                aria-hidden="true"
              >
                <circle cx="50" cy="50" r="46" fill="none" stroke="#3a4038" strokeWidth="5" />
                <circle
                  ref={ringRef}
                  className="tap-ring-progress"
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke={brandColors.accent}
                  strokeWidth="5"
                  strokeLinecap="round"
                  style={{ ['--hold-ms' as string]: `${LONG_PRESS_MS}ms` }}
                />
              </svg>

              <Box
                ref={targetElRef}
                className="tap-target-shape"
                role="button"
                tabIndex={0}
                aria-label={TYPE_LABEL[target.type]}
                position="absolute"
                inset="10px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg={TYPE_COLOR[target.type]}
                color={TYPE_INK[target.type]}
                cursor="pointer"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerCancel}
                onContextMenu={e => e.preventDefault()}
                onKeyDown={handleKeyDown}
                style={{
                  touchAction: 'none',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  boxShadow:
                    flash === 'correct'
                      ? '0 0 0 5px #5fbf7a'
                      : flash === 'wrong'
                        ? '0 0 0 5px #d9534f'
                        : '0 8px 20px -8px rgba(0,0,0,0.6)',
                }}
              >
                <GestureIcon type={target.type} size={28} />
              </Box>
            </Box>
          </>
        )}

        {wowKey && (
          <Flex
            key={wowKey}
            position="absolute"
            inset={0}
            align="center"
            justify="center"
            direction="column"
            pointerEvents="none"
          >
            {confetti.map((c, i) => (
              <Box
                key={i}
                position="absolute"
                top="50%"
                left="50%"
                w="10px"
                h="10px"
                borderRadius="2px"
                bg={c.color}
                style={{
                  ['--angle' as string]: `${c.angle}deg`,
                  ['--dist' as string]: `${c.dist}px`,
                  animation: 'tap-confetti 900ms ease-out forwards',
                }}
              />
            ))}
            <Text
              fontSize="4xl"
              fontWeight="extrabold"
              color={brandColors.white}
              style={{ animation: 'tap-wow-text 500ms ease-out' }}
            >
              {wowMessage}
            </Text>
            <Text fontSize="sm" color="gray.300" fontWeight="bold">
              {streakDisplay} d&apos;affilée !
            </Text>
          </Flex>
        )}
      </Box>
    </VStack>
  )
}
