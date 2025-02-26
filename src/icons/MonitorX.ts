// VanJS Lucide - MonitorX
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MonitorX = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m14.5 12.5-5-5" }),
    path({ "d": "m9.5 12.5 5-5" }),
    rect({ width: "20", height: "14", "x": "2", "y": "3", rx: "2" }),
    path({ "d": "M12 17v4" }),
    path({ "d": "M8 21h8" }),
  );
};
