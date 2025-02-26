// VanJS Lucide - Annoyed
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Annoyed = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M8 15h8" }),
    path({ "d": "M8 9h2" }),
    path({ "d": "M14 9h2" }),
  );
};
