// VanJS Lucide - AArrowUp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const AArrowUp = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m14 11 4-4 4 4" }),
    path({ "d": "M18 16V7" }),
    path({ "d": "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }),
    path({ "d": "M3.304 13h6.392" }),
  );
};
