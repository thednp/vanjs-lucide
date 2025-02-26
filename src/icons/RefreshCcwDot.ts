// VanJS Lucide - RefreshCcwDot
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const RefreshCcwDot = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 2v6h6" }),
    path({ "d": "M21 12A9 9 0 0 0 6 5.3L3 8" }),
    path({ "d": "M21 22v-6h-6" }),
    path({ "d": "M3 12a9 9 0 0 0 15 6.7l3-2.7" }),
    circle({ cx: "12", cy: "12", "r": "1" }),
  );
};
