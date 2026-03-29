// VanJS Lucide - MoveLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const MoveLeft = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M6 8L2 12L6 16" }),
    path({ "d": "M2 12H22" }),
  );
};
