// VanJS Lucide - CornerDownRight
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const CornerDownRight = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m15 10 5 5-5 5" }),
    path({ "d": "M4 4v7a4 4 0 0 0 4 4h12" }),
  );
};
