// VanJS Lucide - Sandwich
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Sandwich = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" }),
    path({ "d": "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" }),
    path({ "d": "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" }),
    path({ "d": "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }),
    rect({ width: "20", height: "4", "x": "2", "y": "11", rx: "1" }),
  );
};
