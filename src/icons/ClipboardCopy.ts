// VanJS Lucide - ClipboardCopy
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ClipboardCopy = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "4", "x": "8", "y": "2", rx: "1", ry: "1" }),
    path({ "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" }),
    path({ "d": "M16 4h2a2 2 0 0 1 2 2v4" }),
    path({ "d": "M21 14H11" }),
    path({ "d": "m15 10-4 4 4 4" }),
  );
};
