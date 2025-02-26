// VanJS Lucide - Disc3
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Disc3 = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M6 12c0-1.7.7-3.2 1.8-4.2" }),
    circle({ cx: "12", cy: "12", "r": "2" }),
    path({ "d": "M18 12c0 1.7-.7 3.2-1.8 4.2" }),
  );
};
