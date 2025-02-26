// VanJS Lucide - Usb
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Usb = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "10", cy: "7", "r": "1" }),
    circle({ cx: "4", cy: "20", "r": "1" }),
    path({ "d": "M4.7 19.3 19 5" }),
    path({ "d": "m21 3-3 1 2 2Z" }),
    path({ "d": "M9.26 7.68 5 12l2 5" }),
    path({ "d": "m10 14 5 2 3.5-3.5" }),
    path({ "d": "m18 12 1-1 1 1-1 1Z" }),
  );
};
