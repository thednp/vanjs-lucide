// VanJS Lucide - Move3d
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Move3d = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 3v16h16" }),
    path({ "d": "m5 19 6-6" }),
    path({ "d": "m2 6 3-3 3 3" }),
    path({ "d": "m18 16 3 3-3 3" }),
  );
};
