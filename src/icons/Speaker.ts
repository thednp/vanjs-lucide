// VanJS Lucide - Speaker
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Speaker = (props: Partial<SVGProps> = {}) => {
  const { rect, path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "20", "x": "4", "y": "2", rx: "2" }),
    path({ "d": "M12 6h.01" }),
    circle({ cx: "12", cy: "14", "r": "4" }),
    path({ "d": "M12 14h.01" }),
  );
};
