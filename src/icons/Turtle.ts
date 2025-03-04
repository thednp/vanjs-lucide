// VanJS Lucide - Turtle
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Turtle = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",
    }),
    path({ "d": "M4.82 7.9 8 10" }),
    path({ "d": "M15.18 7.9 12 10" }),
    path({ "d": "M16.93 10H20a2 2 0 0 1 0 4H2" }),
  );
};
