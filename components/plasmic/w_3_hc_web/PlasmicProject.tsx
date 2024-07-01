// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rURT7PSYpAQNuaCGHJDPZg
// Component: jyATwjnQCA

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_w_3_hc_web.module.css"; // plasmic-import: rURT7PSYpAQNuaCGHJDPZg/projectcss
import sty from "./PlasmicProject.module.css"; // plasmic-import: jyATwjnQCA/css

createPlasmicElementProxy;

export type PlasmicProject__VariantMembers = {};
export type PlasmicProject__VariantsArgs = {};
type VariantPropType = keyof PlasmicProject__VariantsArgs;
export const PlasmicProject__VariantProps = new Array<VariantPropType>();

export type PlasmicProject__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicProject__ArgsType;
export const PlasmicProject__ArgProps = new Array<ArgPropType>("children");

export type PlasmicProject__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  no?: Flex__<"div">;
};

export interface DefaultProjectProps {
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProject__RenderFunc(props: {
  variants: PlasmicProject__VariantsArgs;
  args: PlasmicProject__ArgsType;
  overrides: PlasmicProject__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"no"}
          data-plasmic-override={overrides.no}
          className={classNames(projectcss.all, sty.no)}
        >
          {renderPlasmicSlot({
            defaultContents: "e",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "no"],
  freeBox: ["freeBox", "no"],
  no: ["no"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  no: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProject__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProject__VariantsArgs;
    args?: PlasmicProject__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProject__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProject__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProject__ArgProps,
          internalVariantPropNames: PlasmicProject__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProject__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProject";
  } else {
    func.displayName = `PlasmicProject.${nodeName}`;
  }
  return func;
}

export const PlasmicProject = Object.assign(
  // Top-level PlasmicProject renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    no: makeNodeComponent("no"),

    // Metadata about props expected for PlasmicProject
    internalVariantProps: PlasmicProject__VariantProps,
    internalArgProps: PlasmicProject__ArgProps
  }
);

export default PlasmicProject;
/* prettier-ignore-end */
