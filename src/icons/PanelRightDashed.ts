// VanJS Lucide - PanelRightDashed
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const PanelRightDashed = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M15 14v1" }),
    path({ "d": "M15 19v2" }),
    path({ "d": "M15 3v2" }),
    path({ "d": "M15 9v1" }),
  );
};
