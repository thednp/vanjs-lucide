// VanJS Lucide - ArrowDownLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ArrowDownLeft = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M17 7 7 17" }),
    path({ "d": "M17 17H7V7" }),
  );
};
