// VanJS Lucide - GitFork
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GitFork = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "18", "r": "3" }),
    circle({ cx: "6", cy: "6", "r": "3" }),
    circle({ cx: "18", cy: "6", "r": "3" }),
    path({ "d": "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" }),
    path({ "d": "M12 12v3" }),
  );
};
