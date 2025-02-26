// VanJS Lucide - WholeWord
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const WholeWord = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "7", cy: "12", "r": "3" }),
    path({ "d": "M10 9v6" }),
    circle({ cx: "17", cy: "12", "r": "3" }),
    path({ "d": "M14 7v8" }),
    path({ "d": "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }),
  );
};
