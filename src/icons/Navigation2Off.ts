// VanJS Lucide - Navigation2Off
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Navigation2Off = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9.31 9.31 5 21l7-4 7 4-1.17-3.17" }),
    path({ "d": "M14.53 8.88 12 2l-1.17 3.17" }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" }),
  );
};
