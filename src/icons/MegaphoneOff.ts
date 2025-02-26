// VanJS Lucide - MegaphoneOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MegaphoneOff = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9.26 9.26 3 11v3l14.14 3.14" }),
    path({ "d": "M21 15.34V6l-7.31 2.03" }),
    path({ "d": "M11.6 16.8a3 3 0 1 1-5.8-1.6" }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" }),
  );
};
