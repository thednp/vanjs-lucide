// VanJS Lucide - SquareTerminal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareTerminal = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 11 2-2-2-2" }),
    path({ "d": "M11 13h4" }),
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
  );
};
