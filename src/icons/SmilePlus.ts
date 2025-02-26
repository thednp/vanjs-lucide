// VanJS Lucide - SmilePlus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SmilePlus = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 11v1a10 10 0 1 1-9-10" }),
    path({ "d": "M8 14s1.5 2 4 2 4-2 4-2" }),
    line({ x1: "9", x2: "9.01", y1: "9", y2: "9" }),
    line({ x1: "15", x2: "15.01", y1: "9", y2: "9" }),
    path({ "d": "M16 5h6" }),
    path({ "d": "M19 2v6" }),
  );
};
