// VanJS Lucide - Calendar1
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Calendar1 = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 14h1v4" }),
    path({ "d": "M16 2v4" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M8 2v4" }),
    rect({ "x": "3", "y": "4", width: "18", height: "18", rx: "2" }),
  );
};
