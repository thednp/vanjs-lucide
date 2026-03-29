// VanJS Lucide - TextAlignCenter
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const TextAlignCenter = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M21 5H3" }),
    path({ "d": "M17 12H7" }),
    path({ "d": "M19 19H5" }),
  );
};
