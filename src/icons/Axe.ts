// VanJS Lucide - Axe
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Axe = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" }),
    path({ "d": "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z" }),
  );
};
