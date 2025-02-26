// VanJS Lucide - CalendarOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CalendarOff = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",
    }),
    path({ "d": "M21 15.5V6a2 2 0 0 0-2-2H9.5" }),
    path({ "d": "M16 2v4" }),
    path({ "d": "M3 10h7" }),
    path({ "d": "M21 10h-5.5" }),
    path({ "d": "m2 2 20 20" }),
  );
};
