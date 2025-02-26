// VanJS Lucide - CalendarDays
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CalendarDays = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2v4" }),
    path({ "d": "M16 2v4" }),
    rect({ width: "18", height: "18", "x": "3", "y": "4", rx: "2" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M8 14h.01" }),
    path({ "d": "M12 14h.01" }),
    path({ "d": "M16 14h.01" }),
    path({ "d": "M8 18h.01" }),
    path({ "d": "M12 18h.01" }),
    path({ "d": "M16 18h.01" }),
  );
};
