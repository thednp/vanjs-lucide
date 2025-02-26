// VanJS Lucide - Aperture
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Aperture = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "m14.31 8 5.74 9.94" }),
    path({ "d": "M9.69 8h11.48" }),
    path({ "d": "m7.38 12 5.74-9.94" }),
    path({ "d": "M9.69 16 3.95 6.06" }),
    path({ "d": "M14.31 16H2.83" }),
    path({ "d": "m16.62 12-5.74 9.94" }),
  );
};
