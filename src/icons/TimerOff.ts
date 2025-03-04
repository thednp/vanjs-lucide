// VanJS Lucide - TimerOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TimerOff = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 2h4" }),
    path({ "d": "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" }),
    path({ "d": "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M12 12v-2" }),
  );
};
