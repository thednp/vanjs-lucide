// VanJS Lucide - Trash
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Trash = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }),
    path({ "d": "M3 6h18" }),
    path({ "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
  );
};
