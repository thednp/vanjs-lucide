// VanJS Lucide - IdCard
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const IdCard = (props: Partial<SVGProps> = {}) => {
  const { path, circle, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 10h2" }),
    path({ "d": "M16 14h2" }),
    path({ "d": "M6.17 15a3 3 0 0 1 5.66 0" }),
    circle({ cx: "9", cy: "11", "r": "2" }),
    rect({ "x": "2", "y": "5", width: "20", height: "14", rx: "2" }),
  );
};
