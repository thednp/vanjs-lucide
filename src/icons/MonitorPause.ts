// VanJS Lucide - MonitorPause
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MonitorPause = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 13V7" }),
    path({ "d": "M14 13V7" }),
    rect({ width: "20", height: "14", "x": "2", "y": "3", rx: "2" }),
    path({ "d": "M12 17v4" }),
    path({ "d": "M8 21h8" }),
  );
};
