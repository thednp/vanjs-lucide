// VanJS Lucide - Gem
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Gem = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 3h12l4 6-10 13L2 9Z" }),
    path({ "d": "M11 3 8 9l4 13 4-13-3-6" }),
    path({ "d": "M2 9h20" }),
  );
};
