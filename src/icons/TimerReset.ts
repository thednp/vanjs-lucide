// VanJS Lucide - TimerReset
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TimerReset = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 2h4" }),
    path({ "d": "M12 14v-4" }),
    path({ "d": "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" }),
    path({ "d": "M9 17H4v5" }),
  );
};
