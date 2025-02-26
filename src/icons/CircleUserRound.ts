// VanJS Lucide - CircleUserRound
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleUserRound = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 20a6 6 0 0 0-12 0" }),
    circle({ cx: "12", cy: "10", "r": "4" }),
    circle({ cx: "12", cy: "12", "r": "10" }),
  );
};
