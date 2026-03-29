// VanJS Lucide - CornerRightDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const CornerRightDown = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m10 15 5 5 5-5" }),
    path({ "d": "M4 4h7a4 4 0 0 1 4 4v12" }),
  );
};
