'use client'

import { Box, Link as ChakraLink, Text, VStack } from '@chakra-ui/react'
import { ListRoot, ListItem } from '@/components/ui/list'
import { useTranslation } from '@/hooks/useTranslation'
import { brandColors } from '@/theme'

const GOV_DOCS_URL = 'https://github.com/w3hc/gov'

export default function Home() {
  const t = useTranslation()
  const about = t.aboutDao

  return (
    <Box as="section" maxW="2xl" mx="auto" px={4} py={20}>
      <VStack gap={5} align="stretch">
        <Text color="white">{about.intro}</Text>

        <Box borderLeftWidth="3px" borderLeftColor={brandColors.accent} pl={4} py={1}>
          <Text fontSize="sm" color="white" mb={1}>
            {about.missionIntro}
          </Text>
          <Text fontSize="2xl" fontWeight="bold" fontStyle="italic" color="white">
            &ldquo;{about.missionStatement}&rdquo;
          </Text>
        </Box>

        <Text color="white">{about.description}</Text>

        <Box>
          <Text color="white" mb={3}>
            {about.criteriaIntro}
          </Text>
          <ListRoot
            gap={2}
            pl={4}
            color="white"
            css={{ '& li::marker': { color: brandColors.primary } }}
          >
            <ListItem>{about.criteria1}</ListItem>
            <ListItem>{about.criteria2}</ListItem>
            <ListItem>
              {about.criteria3Before}
              <ChakraLink
                href={GOV_DOCS_URL}
                color={brandColors.accent}
                target="_blank"
                rel="noopener noreferrer"
              >
                {about.criteria3Link}
              </ChakraLink>
              {about.criteria3After}
            </ListItem>
            <ListItem>{about.criteria4}</ListItem>
          </ListRoot>
        </Box>
      </VStack>
    </Box>
  )
}
