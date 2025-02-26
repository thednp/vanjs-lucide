// VanJS Lucide - NotebookText
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const NotebookText = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 6h4" }),
    path({ "d": "M2 10h4" }),
    path({ "d": "M2 14h4" }),
    path({ "d": "M2 18h4" }),
    rect({ width: "16", height: "20", "x": "4", "y": "2", rx: "2" }),
    path({ "d": "M9.5 8h5" }),
    path({ "d": "M9.5 12H16" }),
    path({ "d": "M9.5 16H14" }),
  );
};
