// VanJS Lucide - Vibrate
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Vibrate = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m2 8 2 2-2 2 2 2-2 2" }),
    path({ "d": "m22 8-2 2 2 2-2 2 2 2" }),
    rect({ width: "8", height: "14", "x": "8", "y": "5", rx: "1" }),
  );
};
