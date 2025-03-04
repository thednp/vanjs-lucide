// VanJS Lucide - Mail
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Mail = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "16", "x": "2", "y": "4", rx: "2" }),
    path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }),
  );
};
