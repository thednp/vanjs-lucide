// VanJS Lucide - TextCursor
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TextCursor = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" }),
    path({ "d": "M7 22h1a4 4 0 0 0 4-4v-1" }),
    path({ "d": "M7 2h1a4 4 0 0 1 4 4v1" }),
  );
};
