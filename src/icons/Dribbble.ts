// VanJS Lucide - Dribbble
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Dribbble = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" }),
    path({ "d": "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" }),
    path({ "d": "M8.56 2.75c4.37 6 6 9.42 8 17.72" }),
  );
};
