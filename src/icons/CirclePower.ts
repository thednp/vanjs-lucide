// VanJS Lucide - CirclePower
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CirclePower = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 7v4" }),
    path({ "d": "M7.998 9.003a5 5 0 1 0 8-.005" }),
    circle({ cx: "12", cy: "12", "r": "10" }),
  );
};
