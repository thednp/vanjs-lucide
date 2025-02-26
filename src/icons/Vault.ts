// VanJS Lucide - Vault
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Vault = (props: Partial<SVGProps> = {}) => {
  const { rect, circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    circle({ cx: "7.5", cy: "7.5", "r": ".5", fill: "currentColor" }),
    path({ "d": "m7.9 7.9 2.7 2.7" }),
    circle({ cx: "16.5", cy: "7.5", "r": ".5", fill: "currentColor" }),
    path({ "d": "m13.4 10.6 2.7-2.7" }),
    circle({ cx: "7.5", cy: "16.5", "r": ".5", fill: "currentColor" }),
    path({ "d": "m7.9 16.1 2.7-2.7" }),
    circle({ cx: "16.5", cy: "16.5", "r": ".5", fill: "currentColor" }),
    path({ "d": "m13.4 13.4 2.7 2.7" }),
    circle({ cx: "12", cy: "12", "r": "2" }),
  );
};
