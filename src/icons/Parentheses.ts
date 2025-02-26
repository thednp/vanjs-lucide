// VanJS Lucide - Parentheses
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Parentheses = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 21s-4-3-4-9 4-9 4-9" }),
    path({ "d": "M16 3s4 3 4 9-4 9-4 9" }),
  );
};
