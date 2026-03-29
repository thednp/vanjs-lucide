// VanJS Lucide - CornerRightUp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const CornerRightUp = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m10 9 5-5 5 5" }),
    path({ "d": "M4 20h7a4 4 0 0 0 4-4V4" }),
  );
};
