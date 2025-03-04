// VanJS Lucide - BadgeX
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BadgeX = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
    }),
    line({ x1: "15", x2: "9", y1: "9", y2: "15" }),
    line({ x1: "9", x2: "15", y1: "9", y2: "15" }),
  );
};
