// VanJS Lucide - Tally5
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Tally5 = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 4v16" }),
    path({ "d": "M9 4v16" }),
    path({ "d": "M14 4v16" }),
    path({ "d": "M19 4v16" }),
    path({ "d": "M22 6 2 18" }),
  );
};
