// VanJS Lucide - Ellipsis
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Ellipsis = (props: Partial<SVGProps> = {}) => {
  const { circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "1" }),
    circle({ cx: "19", cy: "12", "r": "1" }),
    circle({ cx: "5", cy: "12", "r": "1" }),
  );
};
