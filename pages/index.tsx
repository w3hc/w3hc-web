import * as React from "react";
import * as ph from "@plasmicapp/host";
import { PlasmicHomepage } from "../components/plasmic/w_3_hc_web/PlasmicHomepage";
import { useRouter } from "next/router";

function Homepage() {
  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicHomepage />
    </ph.PageParamsProvider>
  );
}

export default Homepage;
