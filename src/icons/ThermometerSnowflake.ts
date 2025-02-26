// VanJS Lucide - ThermometerSnowflake
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ThermometerSnowflake = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m10 20-1.25-2.5L6 18" }),
    path({ "d": "M10 4 8.75 6.5 6 6" }),
    path({ "d": "M10.585 15H10" }),
    path({ "d": "M2 12h6.5L10 9" }),
    path({ "d": "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" }),
    path({ "d": "m4 10 1.5 2L4 14" }),
    path({ "d": "m7 21 3-6-1.5-3" }),
    path({ "d": "m7 3 3 6h2" }),
  );
};
