// VanJS Lucide - Ligature
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Ligature = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M14 12h2v8" }),
    path({ "d": "M14 20h4" }),
    path({ "d": "M6 12h4" }),
    path({ "d": "M6 20h4" }),
    path({ "d": "M8 20V8a4 4 0 0 1 7.464-2" }),
  );
};
