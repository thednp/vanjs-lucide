// VanJS Lucide - NonBinary
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const NonBinary = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v10" }),
    path({ "d": "m9 4 6 4" }),
    path({ "d": "m9 8 6-4" }),
    circle({ cx: "12", cy: "17", "r": "5" }),
  );
};
