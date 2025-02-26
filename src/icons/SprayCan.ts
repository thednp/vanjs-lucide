// VanJS Lucide - SprayCan
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SprayCan = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 3h.01" }),
    path({ "d": "M7 5h.01" }),
    path({ "d": "M11 7h.01" }),
    path({ "d": "M3 7h.01" }),
    path({ "d": "M7 9h.01" }),
    path({ "d": "M3 11h.01" }),
    rect({ width: "4", height: "4", "x": "15", "y": "5" }),
    path({ "d": "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" }),
    path({ "d": "m13 14 8-2" }),
    path({ "d": "m13 19 8-2" }),
  );
};
