// VanJS Lucide - ArrowDownToLine
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowDownToLine = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 17V3" }),
    path({ "d": "m6 11 6 6 6-6" }),
    path({ "d": "M19 21H5" }),
  );
};
