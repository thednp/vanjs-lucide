// VanJS Lucide - Voicemail
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Voicemail = (props: Partial<SVGProps> = {}) => {
  const { circle, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "6", cy: "12", "r": "4" }),
    circle({ cx: "18", cy: "12", "r": "4" }),
    line({ x1: "6", x2: "18", y1: "16", y2: "16" }),
  );
};
