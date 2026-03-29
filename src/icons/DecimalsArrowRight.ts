// VanJS Lucide - DecimalsArrowRight
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const DecimalsArrowRight = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M10 18h10" }),
    path({ "d": "m17 21 3-3-3-3" }),
    path({ "d": "M3 11h.01" }),
    rect({
      "x": "15",
      "y": "3",
      width: "5",
      height: "8",
      rx: "2.5",
    }),
    rect({
      "x": "6",
      "y": "3",
      width: "5",
      height: "8",
      rx: "2.5",
    }),
  );
};
