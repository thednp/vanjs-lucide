// VanJS Lucide - Cylinder
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Cylinder = (props: Partial<SVGProps> = {}) => {
  const { ellipse, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    ellipse({ cx: "12", cy: "5", rx: "9", ry: "3" }),
    path({ "d": "M3 5v14a9 3 0 0 0 18 0V5" }),
  );
};
