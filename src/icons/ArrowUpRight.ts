// VanJS Lucide - ArrowUpRight
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowUpRight = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 7h10v10" }),
    path({ "d": "M7 17 17 7" }),
  );
};
