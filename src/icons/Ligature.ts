// VanJS Lucide - Ligature
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Ligature = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2" }),
    path({ "d": "M6 12h4" }),
    path({ "d": "M14 12h2v8" }),
    path({ "d": "M6 20h4" }),
    path({ "d": "M14 20h4" }),
  );
};
