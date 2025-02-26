// VanJS Lucide - PilcrowLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const PilcrowLeft = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 3v11" }),
    path({ "d": "M14 9h-3a3 3 0 0 1 0-6h9" }),
    path({ "d": "M18 3v11" }),
    path({ "d": "M22 18H2l4-4" }),
    path({ "d": "m6 22-4-4" }),
  );
};
