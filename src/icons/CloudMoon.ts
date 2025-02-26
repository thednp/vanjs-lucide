// VanJS Lucide - CloudMoon
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CloudMoon = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197" }),
    path({ "d": "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z" }),
  );
};
