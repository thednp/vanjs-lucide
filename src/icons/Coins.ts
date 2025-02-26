// VanJS Lucide - Coins
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Coins = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "8", cy: "8", "r": "6" }),
    path({ "d": "M18.09 10.37A6 6 0 1 1 10.34 18" }),
    path({ "d": "M7 6h1v4" }),
    path({ "d": "m16.71 13.88.7.71-2.82 2.82" }),
  );
};
