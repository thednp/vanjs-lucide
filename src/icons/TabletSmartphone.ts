// VanJS Lucide - TabletSmartphone
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TabletSmartphone = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "10", height: "14", "x": "3", "y": "8", rx: "2" }),
    path({ "d": "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" }),
    path({ "d": "M8 18h.01" }),
  );
};
