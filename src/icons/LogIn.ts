// VanJS Lucide - LogIn
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const LogIn = (props: Partial<SVGProps> = {}) => {
  const { path, polyline, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }),
    polyline({ points: "10 17 15 12 10 7" }),
    line({ x1: "15", x2: "3", y1: "12", y2: "12" }),
  );
};
