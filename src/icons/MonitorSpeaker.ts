// VanJS Lucide - MonitorSpeaker
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MonitorSpeaker = (props: Partial<SVGProps> = {}) => {
  const { path, rect, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5.5 20H8" }),
    path({ "d": "M17 9h.01" }),
    rect({ width: "10", height: "16", "x": "12", "y": "4", rx: "2" }),
    path({ "d": "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" }),
    circle({ cx: "17", cy: "15", "r": "1" }),
  );
};
