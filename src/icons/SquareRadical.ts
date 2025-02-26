// VanJS Lucide - SquareRadical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareRadical = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 12h2l2 5 2-10h4" }),
    rect({ "x": "3", "y": "3", width: "18", height: "18", rx: "2" }),
  );
};
