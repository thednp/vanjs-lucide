// VanJS Lucide - InspectionPanel
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const InspectionPanel = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M7 7h.01" }),
    path({ "d": "M17 7h.01" }),
    path({ "d": "M7 17h.01" }),
    path({ "d": "M17 17h.01" }),
  );
};
