// VanJS Lucide - Axis3d
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Axis3d = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M13.5 10.5 15 9" }),
    path({ "d": "M4 4v15a1 1 0 0 0 1 1h15" }),
    path({ "d": "M4.293 19.707 6 18" }),
    path({ "d": "m9 15 1.5-1.5" }),
  );
};
