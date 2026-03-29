// VanJS Lucide - LineDotRightHorizontal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const LineDotRightHorizontal = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M 3 12 L 15 12" }),
    circle({
      cx: "18",
      cy: "12",
      "r": "3",
    }),
  );
};
