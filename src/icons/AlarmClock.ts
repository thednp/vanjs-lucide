// VanJS Lucide - AlarmClock
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlarmClock = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "13", "r": "8" }),
    path({ "d": "M12 9v4l2 2" }),
    path({ "d": "M5 3 2 6" }),
    path({ "d": "m22 6-3-3" }),
    path({ "d": "M6.38 18.7 4 21" }),
    path({ "d": "M17.64 18.67 20 21" }),
  );
};
