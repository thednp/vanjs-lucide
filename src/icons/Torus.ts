// VanJS Lucide - Torus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Torus = (props: Partial<SVGProps> = {}) => {
  const { ellipse } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    ellipse({ cx: "12", cy: "11", rx: "3", ry: "2" }),
    ellipse({ cx: "12", cy: "12.5", rx: "10", ry: "8.5" }),
  );
};
