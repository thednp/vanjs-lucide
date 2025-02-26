// VanJS Lucide - SquareSquare
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareSquare = (props: Partial<SVGProps> = {}) => {
  const { rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "3", "y": "3", width: "18", height: "18", rx: "2" }),
    rect({ "x": "8", "y": "8", width: "8", height: "8", rx: "1" }),
  );
};
