// VanJS Lucide - TextCursorInput
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TextCursorInput = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1" }),
    path({ "d": "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5" }),
    path({ "d": "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" }),
    path({ "d": "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" }),
    path({ "d": "M9 7v10" }),
  );
};
