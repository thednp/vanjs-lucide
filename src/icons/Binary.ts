// VanJS Lucide - Binary
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Binary = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "14", "y": "14", width: "4", height: "6", rx: "2" }),
    rect({ "x": "6", "y": "4", width: "4", height: "6", rx: "2" }),
    path({ "d": "M6 20h4" }),
    path({ "d": "M14 10h4" }),
    path({ "d": "M6 14h2v6" }),
    path({ "d": "M14 4h2v6" }),
  );
};
