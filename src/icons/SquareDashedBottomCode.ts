// VanJS Lucide - SquareDashedBottomCode
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareDashedBottomCode = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 9.5 8 12l2 2.5" }),
    path({ "d": "M14 21h1" }),
    path({ "d": "m14 9.5 2 2.5-2 2.5" }),
    path({
      "d":
        "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",
    }),
    path({ "d": "M9 21h1" }),
  );
};
