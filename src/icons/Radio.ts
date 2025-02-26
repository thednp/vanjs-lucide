// VanJS Lucide - Radio
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Radio = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4.9 19.1C1 15.2 1 8.8 4.9 4.9" }),
    path({ "d": "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" }),
    circle({ cx: "12", cy: "12", "r": "2" }),
    path({ "d": "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" }),
    path({ "d": "M19.1 4.9C23 8.8 23 15.1 19.1 19" }),
  );
};
