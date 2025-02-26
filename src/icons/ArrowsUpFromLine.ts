// VanJS Lucide - ArrowsUpFromLine
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowsUpFromLine = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m4 6 3-3 3 3" }),
    path({ "d": "M7 17V3" }),
    path({ "d": "m14 6 3-3 3 3" }),
    path({ "d": "M17 17V3" }),
    path({ "d": "M4 21h16" }),
  );
};
