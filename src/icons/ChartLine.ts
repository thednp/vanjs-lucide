// VanJS Lucide - ChartLine
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChartLine = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    path({ "d": "m19 9-5 5-4-4-3 3" }),
  );
};
