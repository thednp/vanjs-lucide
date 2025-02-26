// VanJS Lucide - Radius
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Radius = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20.34 17.52a10 10 0 1 0-2.82 2.82" }),
    circle({ cx: "19", cy: "19", "r": "2" }),
    path({ "d": "m13.41 13.41 4.18 4.18" }),
    circle({ cx: "12", cy: "12", "r": "2" }),
  );
};
