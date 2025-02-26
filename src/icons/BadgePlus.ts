// VanJS Lucide - BadgePlus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BadgePlus = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
    }),
    line({ x1: "12", x2: "12", y1: "8", y2: "16" }),
    line({ x1: "8", x2: "16", y1: "12", y2: "12" }),
  );
};
