// VanJS Lucide - ListStart
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ListStart = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 12H3" }),
    path({ "d": "M16 18H3" }),
    path({ "d": "M10 6H3" }),
    path({ "d": "M21 18V8a2 2 0 0 0-2-2h-5" }),
    path({ "d": "m16 8-2-2 2-2" }),
  );
};
