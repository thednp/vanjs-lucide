// VanJS Lucide - Smartphone
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Smartphone = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "20", "x": "5", "y": "2", rx: "2", ry: "2" }),
    path({ "d": "M12 18h.01" }),
  );
};
