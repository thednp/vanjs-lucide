// VanJS Lucide - CalendarClock
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CalendarClock = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",
    }),
    path({ "d": "M16 2v4" }),
    path({ "d": "M8 2v4" }),
    path({ "d": "M3 10h5" }),
    path({ "d": "M17.5 17.5 16 16.3V14" }),
    circle({ cx: "16", cy: "16", "r": "6" }),
  );
};
