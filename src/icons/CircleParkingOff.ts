// VanJS Lucide - CircleParkingOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleParkingOff = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "m5 5 14 14" }),
    path({ "d": "M13 13a3 3 0 1 0 0-6H9v2" }),
    path({ "d": "M9 17v-2.34" }),
  );
};
