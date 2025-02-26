// VanJS Lucide - LampWallUp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const LampWallUp = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 4h6l3 7H8l3-7Z" }),
    path({ "d": "M14 11v5a2 2 0 0 1-2 2H8" }),
    path({ "d": "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z" }),
  );
};
