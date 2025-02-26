// VanJS Lucide - Brackets
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Brackets = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 3h3v18h-3" }),
    path({ "d": "M8 21H5V3h3" }),
  );
};
