// VanJS Lucide - MonitorSmartphone
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MonitorSmartphone = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" }),
    path({ "d": "M10 19v-3.96 3.15" }),
    path({ "d": "M7 19h5" }),
    rect({ width: "6", height: "10", "x": "16", "y": "12", rx: "2" }),
  );
};
