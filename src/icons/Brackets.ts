// VanJS Lucide - Brackets
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Brackets = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" }),
    path({ "d": "M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" }),
  );
};
