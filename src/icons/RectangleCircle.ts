// VanJS Lucide - RectangleCircle
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const RectangleCircle = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" }),
    circle({
      cx: "14",
      cy: "12",
      "r": "8",
    }),
  );
};
