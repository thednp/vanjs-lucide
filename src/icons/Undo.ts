// VanJS Lucide - Undo
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Undo = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 7v6h6" }),
    path({ "d": "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }),
  );
};
