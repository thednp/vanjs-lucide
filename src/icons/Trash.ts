// VanJS Lucide - Trash
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Trash = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 6h18" }),
    path({ "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
    path({ "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }),
  );
};
