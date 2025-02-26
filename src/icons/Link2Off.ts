// VanJS Lucide - Link2Off
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Link2Off = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 17H7A5 5 0 0 1 7 7" }),
    path({ "d": "M15 7h2a5 5 0 0 1 4 8" }),
    line({ x1: "8", x2: "12", y1: "12", y2: "12" }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" }),
  );
};
