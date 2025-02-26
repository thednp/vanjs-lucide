// VanJS Lucide - MessageSquareLock
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MessageSquareLock = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19 15v-2a2 2 0 1 0-4 0v2" }),
    path({ "d": "M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5" }),
    rect({ "x": "13", "y": "15", width: "8", height: "5", rx: "1" }),
  );
};
