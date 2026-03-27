// VanJS Lucide - Pause
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Pause = (props: Partial<SVGProps> = {}) => {
  const { rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "14", "y": "4", width: "4", height: "16", rx: "1" }),
    rect({ "x": "6", "y": "4", width: "4", height: "16", rx: "1" }),
  );
};
