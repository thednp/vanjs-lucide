// VanJS Lucide - CalendarRange
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CalendarRange = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "4", rx: "2" }),
    path({ "d": "M16 2v4" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M8 2v4" }),
    path({ "d": "M17 14h-6" }),
    path({ "d": "M13 18H7" }),
    path({ "d": "M7 14h.01" }),
    path({ "d": "M17 18h.01" }),
  );
};
