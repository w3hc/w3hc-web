// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rURT7PSYpAQNuaCGHJDPZg
// Component: U9_ketn8GVz

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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
import Footer from "../../Footer"; // plasmic-import: VnNBHcpuRiqHc/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_w_3_hc_web.module.css"; // plasmic-import: rURT7PSYpAQNuaCGHJDPZg/projectcss
import sty from "./PlasmicProjects.module.css"; // plasmic-import: U9_ketn8GVz/css

createPlasmicElementProxy;

export type PlasmicProjects__VariantMembers = {};
export type PlasmicProjects__VariantsArgs = {};
type VariantPropType = keyof PlasmicProjects__VariantsArgs;
export const PlasmicProjects__VariantProps = new Array<VariantPropType>();

export type PlasmicProjects__ArgsType = {};
type ArgPropType = keyof PlasmicProjects__ArgsType;
export const PlasmicProjects__ArgProps = new Array<ArgPropType>();

export type PlasmicProjects__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  block4?: p.Flex<"div">;
  block5?: p.Flex<"div">;
  block6?: p.Flex<"div">;
  block?: p.Flex<"div">;
  block2?: p.Flex<"div">;
  block8?: p.Flex<"div">;
  block3?: p.Flex<"div">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultProjectsProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProjects__RenderFunc(props: {
  variants: PlasmicProjects__VariantsArgs;
  args: PlasmicProjects__ArgsType;
  overrides: PlasmicProjects__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

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
        <title key="title">{PlasmicProjects.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicProjects.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicProjects.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicProjects.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicProjects.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicProjects.pageMetadata.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={PlasmicProjects.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicProjects.pageMetadata.ogImageSrc}
        />
        <link ref="canonical" href={PlasmicProjects.pageMetadata.canonical} />
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

          <div className={classNames(projectcss.all, sty.freeBox__je67)}>
            <div className={classNames(projectcss.all, sty.freeBox__oGkwK)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fby3J
                )}
              >
                <React.Fragment>
                  <React.Fragment>{'Our mission is to "'}</React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"build integrations through mentoring and education"}
                  </span>
                  <React.Fragment>
                    {
                      "\". So wherever it's relevant, we would integrate with existing Web3 apps, tools, protocols and networks, which gives us the opportunity to train apprentice hackers: mutual aid is something we value a lot. \n\nWe try to be a bit strict when it comes to open source project development best practices. We believe that's the only way to build a healthy and strong Web3 ecosystem. Standardization is essential.\n\nYou're invited to "
                    }
                  </React.Fragment>
                  {
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        projectcss.plasmic_default__inline,
                        sty.link__vdTrM
                      )}
                      component={Link}
                      href={"https://discord.com/invite/uSxzJp3J76" as const}
                      platform={"nextjs"}
                      target={"_blank" as const}
                    >
                      {"join us in Discord"}
                    </p.PlasmicLink>
                  }
                  <React.Fragment>{" or "}</React.Fragment>
                  {
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        projectcss.plasmic_default__inline,
                        sty.link__vhN0E
                      )}
                      component={Link}
                      href={"https://t.me/+5ih-ivs0VVM0NWU0" as const}
                      platform={"nextjs"}
                      target={"_blank" as const}
                    >
                      {"Telegram"}
                    </p.PlasmicLink>
                  }
                  <React.Fragment>{", "}</React.Fragment>
                  {
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        projectcss.plasmic_default__inline,
                        sty.link__gdqgb
                      )}
                      component={Link}
                      href={"https://forms.gle/MYAfygPm5GD95HQ19" as const}
                      platform={"nextjs"}
                    >
                      {"apply to become a member of the DAO"}
                    </p.PlasmicLink>
                  }
                  <React.Fragment>
                    {
                      " if you feel like you're motivated and want to learn, or "
                    }
                  </React.Fragment>
                  {
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        projectcss.plasmic_default__inline,
                        sty.link__rtDBg
                      )}
                      component={Link}
                      href={"https://github.com/w3hc" as const}
                      platform={"nextjs"}
                    >
                      {"contribute directly via Github"}
                    </p.PlasmicLink>
                  }
                  <React.Fragment>{"."}</React.Fragment>
                </React.Fragment>
              </div>
              {true ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rd4Fe
                  )}
                >
                  {"Integrations"}
                </div>
              ) : null}
              {true ? (
                <div
                  data-plasmic-name={"block4"}
                  data-plasmic-override={overrides.block4}
                  className={classNames(projectcss.all, sty.block4)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kWyHr
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <p.PlasmicLink
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            projectcss.__wab_text,
                            projectcss.plasmic_default__inline,
                            sty.link__iNjKc
                          )}
                          component={Link}
                          href={`/soon`}
                          platform={"nextjs"}
                        >
                          {"Medusa <> Gov"}
                        </p.PlasmicLink>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                </div>
              ) : null}
              {true ? (
                <div
                  data-plasmic-name={"block5"}
                  data-plasmic-override={overrides.block5}
                  className={classNames(projectcss.all, sty.block5)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___912C4
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <p.PlasmicLink
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            projectcss.__wab_text,
                            projectcss.plasmic_default__inline,
                            sty.link___2U90Z
                          )}
                          component={Link}
                          href={`/soon`}
                          platform={"nextjs"}
                        >
                          {"Lens <> Celo"}
                        </p.PlasmicLink>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                </div>
              ) : null}
              {true ? (
                <div
                  data-plasmic-name={"block6"}
                  data-plasmic-override={overrides.block6}
                  className={classNames(projectcss.all, sty.block6)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___1Xk72
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <p.PlasmicLink
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            projectcss.__wab_text,
                            projectcss.plasmic_default__inline,
                            sty.link___3YrLu
                          )}
                          component={Link}
                          href={`/soon`}
                          platform={"nextjs"}
                        >
                          {"Superfluid <> FEVM"}
                        </p.PlasmicLink>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                </div>
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0CYdq
                )}
              >
                {"In-house projects"}
              </div>
              <div
                data-plasmic-name={"block"}
                data-plasmic-override={overrides.block}
                className={classNames(projectcss.all, sty.block)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ojCyE
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__ythbV
                        )}
                        component={Link}
                        href={"https://github.com/w3hc/gov" as const}
                        platform={"nextjs"}
                        target={"_blank" as const}
                      >
                        {"Gov"}
                      </p.PlasmicLink>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6EsYu
                  )}
                >
                  {
                    "Gov is a DAO framework built with Open Zeppelin\u2019s Governor contract in combination with NFTs. It provides a coordination tool that fits the needs of everyday people."
                  }
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__yZyB
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__ushDq
                        )}
                        component={Link}
                        href={"https://github.com/w3hc/gov" as const}
                        platform={"nextjs"}
                        target={"_blank" as const}
                      >
                        {"Github repo"}
                      </p.PlasmicLink>
                    }
                    <React.Fragment>{" | "}</React.Fragment>
                    {
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__qIbvb
                        )}
                        component={Link}
                        href={
                          "https://github.com/orgs/w3hc/projects/8/views/6" as const
                        }
                        platform={"nextjs"}
                        target={"_blank" as const}
                      >
                        {"Task board"}
                      </p.PlasmicLink>
                    }
                    <React.Fragment>{" | "}</React.Fragment>
                    {
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__ti2Al
                        )}
                        component={Link}
                        href={"https://w3hc.github.io/gov-docs/" as const}
                        platform={"nextjs"}
                        target={"_blank" as const}
                      >
                        {"Docs"}
                      </p.PlasmicLink>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
              <div
                data-plasmic-name={"block2"}
                data-plasmic-override={overrides.block2}
                className={classNames(projectcss.all, sty.block2)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ymgWl
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__sLgJt
                        )}
                        component={Link}
                        href={"https://github.com/w3hc/gcfa-contracts" as const}
                        platform={"nextjs"}
                        target={"_blank" as const}
                      >
                        {"Good CFA"}
                      </p.PlasmicLink>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__kopEd
                  )}
                >
                  {
                    "gCFA is the one and only crypto version of the CFA Franc (XAF and XOF), a currency used in 16 countries in Africa. "
                  }
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__u12Ys
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__f0KkU
                        )}
                        component={Link}
                        href={"https://github.com/w3hc/gcfa-contracts" as const}
                        platform={"nextjs"}
                        target={"_blank" as const}
                      >
                        {"Github repo"}
                      </p.PlasmicLink>
                    }
                    <React.Fragment>{" | "}</React.Fragment>
                    {
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__sjpWl
                        )}
                        component={Link}
                        href={
                          "https://github.com/orgs/w3hc/projects/5/views/5" as const
                        }
                        platform={"nextjs"}
                        target={"_blank" as const}
                      >
                        {"Task board"}
                      </p.PlasmicLink>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
              <div
                data-plasmic-name={"block8"}
                data-plasmic-override={overrides.block8}
                className={classNames(projectcss.all, sty.block8)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__gMIaW
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link___63Y9
                        )}
                        component={Link}
                        href={`/projects`}
                        platform={"nextjs"}
                      >
                        {"Disk On-chain"}
                      </p.PlasmicLink>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__m6EJe
                  )}
                >
                  {
                    "A decentralized storage solution that provides on-chain data management and access control."
                  }
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__rgQor
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__uBkmf
                        )}
                        component={Link}
                        href={`/projects`}
                        platform={"nextjs"}
                      >
                        {"Github repo"}
                      </p.PlasmicLink>
                    }
                    <React.Fragment>{" | "}</React.Fragment>
                    {
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__j3Lgh
                        )}
                        component={Link}
                        href={`/projects`}
                        platform={"nextjs"}
                      >
                        {"Task board"}
                      </p.PlasmicLink>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
              {true ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__f5JW2
                  )}
                >
                  {"Hackathons"}
                </div>
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__t3Ha
                )}
              >
                {"Integrations"}
              </div>
              <div
                data-plasmic-name={"block3"}
                data-plasmic-override={overrides.block3}
                className={classNames(projectcss.all, sty.block3)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xnsKq
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link___9Pu8C
                        )}
                        component={Link}
                        href={
                          "https://github.com/w3hc/uniswap-v3-deploy" as const
                        }
                        platform={"nextjs"}
                        target={"_blank" as const}
                      >
                        {"Uniswap V3 Deploy"}
                      </p.PlasmicLink>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ztSCg
                  )}
                >
                  {
                    "This package includes a CLI script for deploying the latest Uniswap V3 smart contracts to any EVM (Ethereum Virtual Machine) compatible network."
                  }
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6DQrq
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <p.PlasmicLink
                        className={classNames(
                          projectcss.all,
                          projectcss.a,
                          projectcss.__wab_text,
                          projectcss.plasmic_default__inline,
                          sty.link__oBecx
                        )}
                        component={Link}
                        href={
                          "https://github.com/w3hc/uniswap-v3-deploy" as const
                        }
                        platform={"nextjs"}
                        target={"_blank" as const}
                      >
                        {"Github repo"}
                      </p.PlasmicLink>
                    }
                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
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
  root: [
    "root",
    "header",
    "block4",
    "block5",
    "block6",
    "block",
    "block2",
    "block8",
    "block3",
    "footer"
  ],
  header: ["header"],
  block4: ["block4"],
  block5: ["block5"],
  block6: ["block6"],
  block: ["block"],
  block2: ["block2"],
  block8: ["block8"],
  block3: ["block3"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  block4: "div";
  block5: "div";
  block6: "div";
  block: "div";
  block2: "div";
  block8: "div";
  block3: "div";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProjects__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProjects__VariantsArgs;
    args?: PlasmicProjects__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProjects__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProjects__ArgsType,
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
          internalArgPropNames: PlasmicProjects__ArgProps,
          internalVariantPropNames: PlasmicProjects__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProjects__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjects";
  } else {
    func.displayName = `PlasmicProjects.${nodeName}`;
  }
  return func;
}

export const PlasmicProjects = Object.assign(
  // Top-level PlasmicProjects renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    block4: makeNodeComponent("block4"),
    block5: makeNodeComponent("block5"),
    block6: makeNodeComponent("block6"),
    block: makeNodeComponent("block"),
    block2: makeNodeComponent("block2"),
    block8: makeNodeComponent("block8"),
    block3: makeNodeComponent("block3"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicProjects
    internalVariantProps: PlasmicProjects__VariantProps,
    internalArgProps: PlasmicProjects__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "W3HC - Projects",
      description:
        "We want to build integrations through mentoring and learning.",
      ogImageSrc:
        "https://site-assets.plasmic.app/16913ee9842ff1d4b5c32ddeb18c5be8.png",
      canonical: "https://w3hc.org/projects"
    }
  }
);

export default PlasmicProjects;
/* prettier-ignore-end */
