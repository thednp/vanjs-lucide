// VanJS Lucide - LayoutList
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const LayoutList = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "7", height: "7", "x": "3", "y": "3", rx: "1" }),
    rect({ width: "7", height: "7", "x": "3", "y": "14", rx: "1" }),
    path({ "d": "M14 4h7" }),
    path({ "d": "M14 9h7" }),
    path({ "d": "M14 15h7" }),
    path({ "d": "M14 20h7" }),
  );
};
