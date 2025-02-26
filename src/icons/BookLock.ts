// VanJS Lucide - BookLock
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BookLock = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 6V4a2 2 0 1 0-4 0v2" }),
    path({ "d": "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }),
    path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" }),
    rect({ "x": "12", "y": "6", width: "8", height: "5", rx: "1" }),
  );
};
