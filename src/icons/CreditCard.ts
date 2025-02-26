// VanJS Lucide - CreditCard
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CreditCard = (props: Partial<SVGProps> = {}) => {
  const { rect, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "14", "x": "2", "y": "5", rx: "2" }),
    line({ x1: "2", x2: "22", y1: "10", y2: "10" }),
  );
};
