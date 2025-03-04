// VanJS Lucide - FileLock
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FileLock = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    rect({ width: "8", height: "6", "x": "8", "y": "12", rx: "1" }),
    path({ "d": "M10 12v-2a2 2 0 1 1 4 0v2" }),
  );
};
