// VanJS Lucide - MonitorCheck
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MonitorCheck = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m9 10 2 2 4-4" }),
    rect({ width: "20", height: "14", "x": "2", "y": "3", rx: "2" }),
    path({ "d": "M12 17v4" }),
    path({ "d": "M8 21h8" }),
  );
};
