// VanJS Lucide - Archive
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Archive = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "5", "x": "2", "y": "3", rx: "1" }),
    path({ "d": "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }),
    path({ "d": "M10 12h4" }),
  );
};
