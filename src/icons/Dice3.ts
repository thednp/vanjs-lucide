// VanJS Lucide - Dice3
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Dice3 = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    path({ "d": "M16 8h.01" }),
    path({ "d": "M12 12h.01" }),
    path({ "d": "M8 16h.01" }),
  );
};
