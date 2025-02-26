// VanJS Lucide - MoveRight
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MoveRight = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 8L22 12L18 16" }),
    path({ "d": "M2 12H22" }),
  );
};
