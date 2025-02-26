// VanJS Lucide - Computer
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Computer = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "8", "x": "5", "y": "2", rx: "2" }),
    rect({ width: "20", height: "8", "x": "2", "y": "14", rx: "2" }),
    path({ "d": "M6 18h2" }),
    path({ "d": "M12 18h6" }),
  );
};
