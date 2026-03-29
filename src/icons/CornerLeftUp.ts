// VanJS Lucide - CornerLeftUp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const CornerLeftUp = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M14 9 9 4 4 9" }),
    path({ "d": "M20 20h-7a4 4 0 0 1-4-4V4" }),
  );
};
