// VanJS Lucide - Captions
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Captions = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "14", "x": "3", "y": "5", rx: "2", ry: "2" }),
    path({ "d": "M7 15h4M15 15h2M7 11h2M13 11h4" }),
  );
};
