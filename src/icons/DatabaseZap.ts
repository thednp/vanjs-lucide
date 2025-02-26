// VanJS Lucide - DatabaseZap
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const DatabaseZap = (props: Partial<SVGProps> = {}) => {
  const { ellipse, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    ellipse({ cx: "12", cy: "5", rx: "9", ry: "3" }),
    path({ "d": "M3 5V19A9 3 0 0 0 15 21.84" }),
    path({ "d": "M21 5V8" }),
    path({ "d": "M21 12L18 17H22L19 22" }),
    path({ "d": "M3 12A9 3 0 0 0 14.59 14.87" }),
  );
};
