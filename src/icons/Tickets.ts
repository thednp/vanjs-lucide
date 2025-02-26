// VanJS Lucide - Tickets
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Tickets = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" }),
    path({ "d": "M6 10V8" }),
    path({ "d": "M6 14v1" }),
    path({ "d": "M6 19v2" }),
    rect({ "x": "2", "y": "8", width: "20", height: "13", rx: "2" }),
  );
};
