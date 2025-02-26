// VanJS Lucide - Lock
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Lock = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "11", "x": "3", "y": "11", rx: "2", ry: "2" }),
    path({ "d": "M7 11V7a5 5 0 0 1 10 0v4" }),
  );
};
