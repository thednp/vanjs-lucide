// VanJS Lucide - SquareCode
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareCode = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 9.5 8 12l2 2.5" }),
    path({ "d": "m14 9.5 2 2.5-2 2.5" }),
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
  );
};
