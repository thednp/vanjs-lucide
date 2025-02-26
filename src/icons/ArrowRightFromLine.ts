// VanJS Lucide - ArrowRightFromLine
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowRightFromLine = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 5v14" }),
    path({ "d": "M21 12H7" }),
    path({ "d": "m15 18 6-6-6-6" }),
  );
};
