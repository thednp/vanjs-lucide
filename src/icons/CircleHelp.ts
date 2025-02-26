// VanJS Lucide - CircleHelp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleHelp = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
    path({ "d": "M12 17h.01" }),
  );
};
