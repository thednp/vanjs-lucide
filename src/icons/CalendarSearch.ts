// VanJS Lucide - CalendarSearch
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CalendarSearch = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 2v4" }),
    path({
      "d": "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25",
    }),
    path({ "d": "m22 22-1.875-1.875" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M8 2v4" }),
    circle({ cx: "18", cy: "18", "r": "3" }),
  );
};
