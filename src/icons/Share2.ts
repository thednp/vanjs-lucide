// VanJS Lucide - Share2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Share2 = (props: Partial<SVGProps> = {}) => {
  const { circle, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "18", cy: "5", "r": "3" }),
    circle({ cx: "6", cy: "12", "r": "3" }),
    circle({ cx: "18", cy: "19", "r": "3" }),
    line({ x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49" }),
    line({ x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49" }),
  );
};
