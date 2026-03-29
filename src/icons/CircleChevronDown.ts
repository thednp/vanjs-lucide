// VanJS Lucide - CircleChevronDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const CircleChevronDown = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      "r": "10",
    }),
    path({ "d": "m16 10-4 4-4-4" }),
  );
};
