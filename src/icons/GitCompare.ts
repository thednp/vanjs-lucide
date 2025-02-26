// VanJS Lucide - GitCompare
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GitCompare = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "18", cy: "18", "r": "3" }),
    circle({ cx: "6", cy: "6", "r": "3" }),
    path({ "d": "M13 6h3a2 2 0 0 1 2 2v7" }),
    path({ "d": "M11 18H8a2 2 0 0 1-2-2V9" }),
  );
};
