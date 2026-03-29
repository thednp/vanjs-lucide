// VanJS Lucide - DecimalsArrowLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const DecimalsArrowLeft = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m13 21-3-3 3-3" }),
    path({ "d": "M20 18H10" }),
    path({ "d": "M3 11h.01" }),
    rect({
      "x": "6",
      "y": "3",
      width: "5",
      height: "8",
      rx: "2.5",
    }),
  );
};
