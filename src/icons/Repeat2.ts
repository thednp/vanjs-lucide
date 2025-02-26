// VanJS Lucide - Repeat2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Repeat2 = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m2 9 3-3 3 3" }),
    path({ "d": "M13 18H7a2 2 0 0 1-2-2V6" }),
    path({ "d": "m22 15-3 3-3-3" }),
    path({ "d": "M11 6h6a2 2 0 0 1 2 2v10" }),
  );
};
