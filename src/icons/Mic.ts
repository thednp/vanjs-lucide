// VanJS Lucide - Mic
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Mic = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }),
    path({ "d": "M19 10v2a7 7 0 0 1-14 0v-2" }),
    line({ x1: "12", x2: "12", y1: "19", y2: "22" }),
  );
};
