// VanJS Lucide - CalendarCheck2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CalendarCheck2 = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2v4" }),
    path({ "d": "M16 2v4" }),
    path({ "d": "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "m16 20 2 2 4-4" }),
  );
};
