// VanJS Lucide - Expand
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Expand = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m15 15 6 6" }),
    path({ "d": "m15 9 6-6" }),
    path({ "d": "M21 16.2V21h-4.8" }),
    path({ "d": "M21 7.8V3h-4.8" }),
    path({ "d": "M3 16.2V21h4.8" }),
    path({ "d": "m3 21 6-6" }),
    path({ "d": "M3 7.8V3h4.8" }),
    path({ "d": "M9 9 3 3" }),
  );
};
