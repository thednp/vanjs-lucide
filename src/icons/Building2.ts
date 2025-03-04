// VanJS Lucide - Building2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Building2 = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" }),
    path({ "d": "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }),
    path({ "d": "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M10 6h4" }),
    path({ "d": "M10 10h4" }),
    path({ "d": "M10 14h4" }),
    path({ "d": "M10 18h4" }),
  );
};
