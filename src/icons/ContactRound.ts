// VanJS Lucide - ContactRound
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ContactRound = (props: Partial<SVGProps> = {}) => {
  const { path, circle, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 2v2" }),
    path({ "d": "M17.915 22a6 6 0 0 0-12 0" }),
    path({ "d": "M8 2v2" }),
    circle({ cx: "12", cy: "12", "r": "4" }),
    rect({ "x": "3", "y": "4", width: "18", height: "18", rx: "2" }),
  );
};
