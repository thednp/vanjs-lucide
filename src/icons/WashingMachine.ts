// VanJS Lucide - WashingMachine
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const WashingMachine = (props: Partial<SVGProps> = {}) => {
  const { path, rect, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 6h3" }),
    path({ "d": "M17 6h.01" }),
    rect({ width: "18", height: "20", "x": "3", "y": "2", rx: "2" }),
    circle({ cx: "12", cy: "13", "r": "5" }),
    path({ "d": "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" }),
  );
};
