// VanJS Lucide - ArrowUpFromLine
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowUpFromLine = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m18 9-6-6-6 6" }),
    path({ "d": "M12 3v14" }),
    path({ "d": "M5 21h14" }),
  );
};
