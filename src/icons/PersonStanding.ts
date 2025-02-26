// VanJS Lucide - PersonStanding
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const PersonStanding = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "5", "r": "1" }),
    path({ "d": "m9 20 3-6 3 6" }),
    path({ "d": "m6 8 6 2 6-2" }),
    path({ "d": "M12 10v4" }),
  );
};
