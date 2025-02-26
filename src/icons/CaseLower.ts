// VanJS Lucide - CaseLower
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CaseLower = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "7", cy: "12", "r": "3" }),
    path({ "d": "M10 9v6" }),
    circle({ cx: "17", cy: "12", "r": "3" }),
    path({ "d": "M14 7v8" }),
  );
};
