// VanJS Lucide - MoveHorizontal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const MoveHorizontal = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m18 8 4 4-4 4" }),
    path({ "d": "M2 12h20" }),
    path({ "d": "m6 8-4 4 4 4" }),
  );
};
