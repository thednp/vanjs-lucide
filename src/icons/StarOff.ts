// VanJS Lucide - StarOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const StarOff = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",
    }),
    path({ "d": "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91" }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" }),
  );
};
