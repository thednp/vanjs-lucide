// VanJS Lucide - PhilippinePeso
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const PhilippinePeso = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20 11H4" }),
    path({ "d": "M20 7H4" }),
    path({ "d": "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" }),
  );
};
