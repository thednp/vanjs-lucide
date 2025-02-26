// VanJS Lucide - LockKeyhole
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const LockKeyhole = (props: Partial<SVGProps> = {}) => {
  const { circle, rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "16", "r": "1" }),
    rect({ "x": "3", "y": "10", width: "18", height: "12", rx: "2" }),
    path({ "d": "M7 10V7a5 5 0 0 1 10 0v3" }),
  );
};
