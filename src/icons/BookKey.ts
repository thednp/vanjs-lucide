// VanJS Lucide - BookKey
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BookKey = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m19 3 1 1" }),
    path({ "d": "m20 2-4.5 4.5" }),
    path({ "d": "M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }),
    path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14" }),
    circle({ cx: "14", cy: "8", "r": "2" }),
  );
};
