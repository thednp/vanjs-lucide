// VanJS Lucide - Glasses
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Glasses = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "6", cy: "15", "r": "4" }),
    circle({ cx: "18", cy: "15", "r": "4" }),
    path({ "d": "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" }),
    path({ "d": "M2.5 13 5 7c.7-1.3 1.4-2 3-2" }),
    path({ "d": "M21.5 13 19 7c-.7-1.3-1.5-2-3-2" }),
  );
};
