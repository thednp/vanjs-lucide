// VanJS Lucide - RadioReceiver
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const RadioReceiver = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 16v2" }),
    path({ "d": "M19 16v2" }),
    rect({ width: "20", height: "8", "x": "2", "y": "8", rx: "2" }),
    path({ "d": "M18 12h.01" }),
  );
};
