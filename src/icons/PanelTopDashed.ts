// VanJS Lucide - PanelTopDashed
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const PanelTopDashed = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M14 9h1" }),
    path({ "d": "M19 9h2" }),
    path({ "d": "M3 9h2" }),
    path({ "d": "M9 9h1" }),
  );
};
