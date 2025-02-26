// VanJS Lucide - IndentIncrease
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const IndentIncrease = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 12H11" }),
    path({ "d": "M21 18H11" }),
    path({ "d": "M21 6H11" }),
    path({ "d": "m3 8 4 4-4 4" }),
  );
};
