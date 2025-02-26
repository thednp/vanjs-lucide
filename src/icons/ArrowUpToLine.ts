// VanJS Lucide - ArrowUpToLine
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowUpToLine = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 3h14" }),
    path({ "d": "m18 13-6-6-6 6" }),
    path({ "d": "M12 7v14" }),
  );
};
