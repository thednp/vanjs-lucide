// VanJS Lucide - BadgeHelp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BadgeHelp = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
    }),
    path({ "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
    line({ x1: "12", x2: "12.01", y1: "17", y2: "17" }),
  );
};
