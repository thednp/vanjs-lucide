// VanJS Lucide - Tablets
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Tablets = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "7", cy: "7", "r": "5" }),
    circle({ cx: "17", cy: "17", "r": "5" }),
    path({ "d": "M12 17h10" }),
    path({ "d": "m3.46 10.54 7.08-7.08" }),
  );
};
