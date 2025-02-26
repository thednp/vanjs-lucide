// VanJS Lucide - Axis3d
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Axis3d = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 4v16h16" }),
    path({ "d": "m4 20 7-7" }),
  );
};
