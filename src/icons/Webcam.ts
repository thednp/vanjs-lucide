// VanJS Lucide - Webcam
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Webcam = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "10", "r": "8" }),
    circle({ cx: "12", cy: "10", "r": "3" }),
    path({ "d": "M7 22h10" }),
    path({ "d": "M12 22v-4" }),
  );
};
