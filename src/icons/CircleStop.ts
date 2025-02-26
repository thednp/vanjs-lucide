// VanJS Lucide - CircleStop
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleStop = (props: Partial<SVGProps> = {}) => {
  const { circle, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    rect({ "x": "9", "y": "9", width: "6", height: "6", rx: "1" }),
  );
};
