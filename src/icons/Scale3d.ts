// VanJS Lucide - Scale3d
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Scale3d = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 7v11a1 1 0 0 0 1 1h11" }),
    path({ "d": "M5.293 18.707 11 13" }),
    circle({ cx: "19", cy: "19", "r": "2" }),
    circle({ cx: "5", cy: "5", "r": "2" }),
  );
};
