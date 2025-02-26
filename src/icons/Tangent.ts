// VanJS Lucide - Tangent
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Tangent = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "17", cy: "4", "r": "2" }),
    path({ "d": "M15.59 5.41 5.41 15.59" }),
    circle({ cx: "4", cy: "17", "r": "2" }),
    path({ "d": "M12 22s-4-9-1.5-11.5S22 12 22 12" }),
  );
};
