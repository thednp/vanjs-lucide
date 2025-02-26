// VanJS Lucide - RectangleEllipsis
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const RectangleEllipsis = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "12", "x": "2", "y": "6", rx: "2" }),
    path({ "d": "M12 12h.01" }),
    path({ "d": "M17 12h.01" }),
    path({ "d": "M7 12h.01" }),
  );
};
