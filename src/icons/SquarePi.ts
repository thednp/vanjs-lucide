// VanJS Lucide - SquarePi
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquarePi = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M7 7h10" }),
    path({ "d": "M10 7v10" }),
    path({ "d": "M16 17a2 2 0 0 1-2-2V7" }),
  );
};
