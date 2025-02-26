// VanJS Lucide - MonitorStop
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MonitorStop = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 17v4" }),
    path({ "d": "M8 21h8" }),
    rect({ "x": "2", "y": "3", width: "20", height: "14", rx: "2" }),
    rect({ "x": "9", "y": "7", width: "6", height: "6", rx: "1" }),
  );
};
