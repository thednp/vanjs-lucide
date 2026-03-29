// VanJS Lucide - Coins
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Coins = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M13.744 17.736a6 6 0 1 1-7.48-7.48" }),
    path({ "d": "M15 6h1v4" }),
    path({ "d": "m6.134 14.768.866-.5 2 3.464" }),
    circle({
      cx: "16",
      cy: "8",
      "r": "6",
    }),
  );
};
