// VanJS Lucide - RotateCcwSquare
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const RotateCcwSquare = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20 9V7a2 2 0 0 0-2-2h-6" }),
    path({ "d": "m15 2-3 3 3 3" }),
    path({ "d": "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" }),
  );
};
