// VanJS Lucide - CircleSlash2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleSlash2 = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 2 2 22" }),
    circle({ cx: "12", cy: "12", "r": "10" }),
  );
};
