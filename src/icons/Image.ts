// VanJS Lucide - Image
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Image = (props: Partial<SVGProps> = {}) => {
  const { rect, circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    circle({ cx: "9", cy: "9", "r": "2" }),
    path({ "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }),
  );
};
