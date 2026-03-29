// VanJS Lucide - CornerDownLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const CornerDownLeft = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M20 4v7a4 4 0 0 1-4 4H4" }),
    path({ "d": "m9 10-5 5 5 5" }),
  );
};
