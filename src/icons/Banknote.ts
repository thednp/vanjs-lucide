// VanJS Lucide - Banknote
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Banknote = (props: Partial<SVGProps> = {}) => {
  const { rect, circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "12", "x": "2", "y": "6", rx: "2" }),
    circle({ cx: "12", cy: "12", "r": "2" }),
    path({ "d": "M6 12h.01M18 12h.01" }),
  );
};
