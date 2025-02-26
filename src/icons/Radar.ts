// VanJS Lucide - Radar
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Radar = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19.07 4.93A10 10 0 0 0 6.99 3.34" }),
    path({ "d": "M4 6h.01" }),
    path({ "d": "M2.29 9.62A10 10 0 1 0 21.31 8.35" }),
    path({ "d": "M16.24 7.76A6 6 0 1 0 8.23 16.67" }),
    path({ "d": "M12 18h.01" }),
    path({ "d": "M17.99 11.66A6 6 0 0 1 15.77 16.67" }),
    circle({ cx: "12", cy: "12", "r": "2" }),
    path({ "d": "m13.41 10.59 5.66-5.66" }),
  );
};
