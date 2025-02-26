// VanJS Lucide - CalendarArrowUp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CalendarArrowUp = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m14 18 4-4 4 4" }),
    path({ "d": "M16 2v4" }),
    path({ "d": "M18 22v-8" }),
    path({
      "d": "M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9",
    }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M8 2v4" }),
  );
};
