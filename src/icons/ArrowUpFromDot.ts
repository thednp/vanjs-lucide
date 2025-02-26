// VanJS Lucide - ArrowUpFromDot
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowUpFromDot = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m5 9 7-7 7 7" }),
    path({ "d": "M12 16V2" }),
    circle({ cx: "12", cy: "21", "r": "1" }),
  );
};
