// VanJS Lucide - SquareBottomDashedScissors
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareBottomDashedScissors = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",
    }),
    path({ "d": "M10 22H8" }),
    path({ "d": "M16 22h-2" }),
    circle({ cx: "8", cy: "8", "r": "2" }),
    path({ "d": "M9.414 9.414 12 12" }),
    path({ "d": "M14.8 14.8 18 18" }),
    circle({ cx: "8", cy: "16", "r": "2" }),
    path({ "d": "m18 6-8.586 8.586" }),
  );
};
