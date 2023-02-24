// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rURT7PSYpAQNuaCGHJDPZg
// Component: UqAN3orjkq
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: 8weNktnDWmJHK/component
import Button from "../../Button"; // plasmic-import: 3c-nMnpAWfnFh/component
import Footer from "../../Footer"; // plasmic-import: VnNBHcpuRiqHc/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_w_3_hc_web.module.css"; // plasmic-import: rURT7PSYpAQNuaCGHJDPZg/projectcss
import sty from "./PlasmicGov.module.css"; // plasmic-import: UqAN3orjkq/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: QSJtYEMVjaEpvn/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: O9O6mz1RdnHmE8/icon

export type PlasmicGov__VariantMembers = {};
export type PlasmicGov__VariantsArgs = {};
type VariantPropType = keyof PlasmicGov__VariantsArgs;
export const PlasmicGov__VariantProps = new Array<VariantPropType>();

export type PlasmicGov__ArgsType = {};
type ArgPropType = keyof PlasmicGov__ArgsType;
export const PlasmicGov__ArgProps = new Array<ArgPropType>();

export type PlasmicGov__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  h1?: p.Flex<"h1">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  button?: p.Flex<typeof Button>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultGovProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicGov__RenderFunc(props: {
  variants: PlasmicGov__VariantsArgs;
  args: PlasmicGov__ArgsType;
  overrides: PlasmicGov__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicGov.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicGov.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicGov.pageMetadata.title}
        />

        <meta
          key="og:image"
          property="og:image"
          content={PlasmicGov.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicGov.pageMetadata.ogImageSrc}
        />
        <link ref="canonical" href={PlasmicGov.pageMetadata.canonical} />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div className={classNames(projectcss.all, sty.freeBox__bFw8)}>
            <div className={classNames(projectcss.all, sty.freeBox__ns1Sy)}>
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                <React.Fragment>
                  <React.Fragment>{""}</React.Fragment>
                  {
                    <p.PlasmicLink
                      data-plasmic-name={"link"}
                      data-plasmic-override={overrides.link}
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        projectcss.plasmic_default__inline,
                        sty.link
                      )}
                      component={Link}
                      href={"https://github.com/w3hc/gov" as const}
                      platform={"nextjs"}
                      target={"_blank" as const}
                    >
                      {"Gov"}
                    </p.PlasmicLink>
                  }
                  <React.Fragment>
                    {" is a DAO framework built for everyday people"}
                  </React.Fragment>
                </React.Fragment>
              </h1>

              <div className={classNames(projectcss.all, sty.freeBox__t96W)}>
                <Button
                  data-plasmic-name={"button"}
                  data-plasmic-override={overrides.button}
                  className={classNames("__wab_instance", sty.button)}
                  link={"https://form.jotform.com/230527850256052" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rcnIs
                    )}
                  >
                    {"Create your DAO"}
                  </div>
                </Button>
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qubCd
                )}
              >
                {
                  "Gov is a DAO framework built with Open Zeppelin’s Governor contract in combination with NFTs. It provides a coordination tool that fits the needs of everyday people.\n\nWe’re inviting orgs, federations of orgs, activists, neighborhoods, stewards of the commons, collectives, and all communities to create their own DAO. The Web3 Hackers Collective has recently released the beta version of Gov. We want to run five different pilots and focus exclusively on the impact evaluation process of each DAO.\n\nGov can be viewed as a retroactive funding tool: people can use it to fund on-the-ground actions that has already been delivered (as opposed to funding actions planned in the future).\n\nGov is fully compatible with Tally (they have the best existing UI in town!)\n\nWe’re currently supporting Optimism Mainnet, Ethereum Goerli Testnet, Optimism Goerli Testnet, and Arbitrum Goerli Testnet.\n\nAlso, we have successfully tested Medusa (Arbitrum Goerli Testnet only for now). This allows anyone to share a document that can only be decrypted by the members of a given DAO."
                }
              </div>

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__vozN5)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/w_3_hc_web/images/contractsExplainedpng.png",
                  fullWidth: 3140,
                  fullHeight: 2236,
                  aspectRatio: undefined
                }}
              />

              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__nuTos)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"auto" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/w_3_hc_web/images/carbon10Png.png",
                  fullWidth: 1870,
                  fullHeight: 4946,
                  aspectRatio: undefined
                }}
              />
            </div>
          </div>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "h1", "link", "button", "footer"],
  header: ["header"],
  h1: ["h1", "link"],
  link: ["link"],
  button: ["button"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  h1: "h1";
  link: "a";
  button: typeof Button;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicGov__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicGov__VariantsArgs;
    args?: PlasmicGov__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicGov__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicGov__ArgsType,
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
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicGov__ArgProps,
          internalVariantPropNames: PlasmicGov__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicGov__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicGov";
  } else {
    func.displayName = `PlasmicGov.${nodeName}`;
  }
  return func;
}

export const PlasmicGov = Object.assign(
  // Top-level PlasmicGov renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    h1: makeNodeComponent("h1"),
    link: makeNodeComponent("link"),
    button: makeNodeComponent("button"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicGov
    internalVariantProps: PlasmicGov__VariantProps,
    internalArgProps: PlasmicGov__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "W3HC - Gov",
      description: "",
      ogImageSrc:
        "https://site-assets.plasmic.app/3c0e347aa4396d77ac50eb8b272d837e.png",
      canonical: "https://w3hc.org/gov"
    }
  }
);

export default PlasmicGov;
/* prettier-ignore-end */
