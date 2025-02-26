// VanJS Lucide - Upload
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Upload = (props: Partial<SVGProps> = {}) => {
  const { path, polyline, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    polyline({ points: "17 8 12 3 7 8" }),
    line({ x1: "12", x2: "12", y1: "3", y2: "15" }),
  );
};
