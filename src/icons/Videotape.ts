// VanJS Lucide - Videotape
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Videotape = (props: Partial<SVGProps> = {}) => {
  const { rect, path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "16", "x": "2", "y": "4", rx: "2" }),
    path({ "d": "M2 8h20" }),
    circle({ cx: "8", cy: "14", "r": "2" }),
    path({ "d": "M8 12h8" }),
    circle({ cx: "16", cy: "14", "r": "2" }),
  );
};
