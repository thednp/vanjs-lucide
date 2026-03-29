// VanJS Lucide - LineStyle
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const LineStyle = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M11 5h2" }),
    path({ "d": "M15 12h6" }),
    path({ "d": "M19 5h2" }),
    path({ "d": "M3 12h6" }),
    path({ "d": "M3 19h18" }),
    path({ "d": "M3 5h2" }),
  );
};
