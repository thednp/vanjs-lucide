// VanJS Lucide - CakeSlice
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CakeSlice = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "9", cy: "7", "r": "2" }),
    path({
      "d":
        "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",
    }),
    path({ "d": "M16 13H3" }),
    path({ "d": "M16 17H3" }),
  );
};
