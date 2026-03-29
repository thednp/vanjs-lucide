// VanJS Lucide - SeparatorHorizontal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const SeparatorHorizontal = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m16 16-4 4-4-4" }),
    path({ "d": "M3 12h18" }),
    path({ "d": "m8 8 4-4 4 4" }),
  );
};
