// VanJS Lucide - SquareLibrary
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareLibrary = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M7 7v10" }),
    path({ "d": "M11 7v10" }),
    path({ "d": "m15 7 2 10" }),
  );
};
