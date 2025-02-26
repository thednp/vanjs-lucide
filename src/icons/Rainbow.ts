// VanJS Lucide - Rainbow
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Rainbow = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 17a10 10 0 0 0-20 0" }),
    path({ "d": "M6 17a6 6 0 0 1 12 0" }),
    path({ "d": "M10 17a2 2 0 0 1 4 0" }),
  );
};
