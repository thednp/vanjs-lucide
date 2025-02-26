// VanJS Lucide - ArrowUp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowUp = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m5 12 7-7 7 7" }),
    path({ "d": "M12 19V5" }),
  );
};
