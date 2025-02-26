// VanJS Lucide - Keyboard
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Keyboard = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 8h.01" }),
    path({ "d": "M12 12h.01" }),
    path({ "d": "M14 8h.01" }),
    path({ "d": "M16 12h.01" }),
    path({ "d": "M18 8h.01" }),
    path({ "d": "M6 8h.01" }),
    path({ "d": "M7 16h10" }),
    path({ "d": "M8 12h.01" }),
    rect({ width: "20", height: "16", "x": "2", "y": "4", rx: "2" }),
  );
};
