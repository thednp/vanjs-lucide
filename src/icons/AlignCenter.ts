// VanJS Lucide - AlignCenter
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const AlignCenter = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 12H7" }),
    path({ "d": "M19 18H5" }),
    path({ "d": "M21 6H3" }),
  );
};
