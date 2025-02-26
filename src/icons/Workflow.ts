// VanJS Lucide - Workflow
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Workflow = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "8", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M7 11v4a2 2 0 0 0 2 2h4" }),
    rect({ width: "8", height: "8", "x": "13", "y": "13", rx: "2" }),
  );
};
