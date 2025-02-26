// VanJS Lucide - Bike
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Bike = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "18.5", cy: "17.5", "r": "3.5" }),
    circle({ cx: "5.5", cy: "17.5", "r": "3.5" }),
    circle({ cx: "15", cy: "5", "r": "1" }),
    path({ "d": "M12 17.5V14l-3-3 4-3 2 3h2" }),
  );
};
