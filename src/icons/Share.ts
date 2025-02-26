// VanJS Lucide - Share
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Share = (props: Partial<SVGProps> = {}) => {
  const { path, polyline, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }),
    polyline({ points: "16 6 12 2 8 6" }),
    line({ x1: "12", x2: "12", y1: "2", y2: "15" }),
  );
};
