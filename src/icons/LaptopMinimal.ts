// VanJS Lucide - LaptopMinimal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const LaptopMinimal = (props: Partial<SVGProps> = {}) => {
  const { rect, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "12", "x": "3", "y": "4", rx: "2", ry: "2" }),
    line({ x1: "2", x2: "22", y1: "20", y2: "20" }),
  );
};
