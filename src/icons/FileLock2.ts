// VanJS Lucide - FileLock2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FileLock2 = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    rect({ width: "8", height: "5", "x": "2", "y": "13", rx: "1" }),
    path({ "d": "M8 13v-2a2 2 0 1 0-4 0v2" }),
  );
};
