// VanJS Lucide - Trello
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Trello = (props: Partial<SVGProps> = {}) => {
  const { rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    rect({ width: "3", height: "9", "x": "7", "y": "7" }),
    rect({ width: "3", height: "5", "x": "14", "y": "7" }),
  );
};
