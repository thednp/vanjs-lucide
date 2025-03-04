// VanJS Lucide - Bath
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Bath = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 4 8 6" }),
    path({ "d": "M17 19v2" }),
    path({ "d": "M2 12h20" }),
    path({ "d": "M7 19v2" }),
    path({
      "d":
        "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
    }),
  );
};
