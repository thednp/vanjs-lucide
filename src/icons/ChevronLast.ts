// VanJS Lucide - ChevronLast
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChevronLast = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 18 6-6-6-6" }),
    path({ "d": "M17 6v12" }),
  );
};
