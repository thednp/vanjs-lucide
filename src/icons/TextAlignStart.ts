// VanJS Lucide - TextAlignStart
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const TextAlignStart = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M21 5H3" }),
    path({ "d": "M15 12H3" }),
    path({ "d": "M17 19H3" }),
  );
};
