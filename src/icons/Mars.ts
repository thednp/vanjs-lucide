// VanJS Lucide - Mars
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Mars = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 3h5v5" }),
    path({ "d": "m21 3-6.75 6.75" }),
    circle({ cx: "10", cy: "14", "r": "6" }),
  );
};
