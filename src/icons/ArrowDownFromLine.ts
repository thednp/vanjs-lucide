// VanJS Lucide - ArrowDownFromLine
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowDownFromLine = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19 3H5" }),
    path({ "d": "M12 21V7" }),
    path({ "d": "m6 15 6 6 6-6" }),
  );
};
