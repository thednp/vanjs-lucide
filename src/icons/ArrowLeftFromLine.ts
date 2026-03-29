// VanJS Lucide - ArrowLeftFromLine
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ArrowLeftFromLine = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m9 6-6 6 6 6" }),
    path({ "d": "M3 12h14" }),
    path({ "d": "M21 19V5" }),
  );
};
