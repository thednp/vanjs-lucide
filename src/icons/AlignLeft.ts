// VanJS Lucide - AlignLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlignLeft = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 12H3" }),
    path({ "d": "M17 18H3" }),
    path({ "d": "M21 6H3" }),
  );
};
