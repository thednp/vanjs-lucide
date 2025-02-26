// VanJS Lucide - ArrowDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowDown = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 5v14" }),
    path({ "d": "m19 12-7 7-7-7" }),
  );
};
