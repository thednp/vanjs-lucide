// VanJS Lucide - VenusAndMars
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const VenusAndMars = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 20h4" }),
    path({ "d": "M12 16v6" }),
    path({ "d": "M17 2h4v4" }),
    path({ "d": "m21 2-5.46 5.46" }),
    circle({ cx: "12", cy: "11", "r": "5" }),
  );
};
