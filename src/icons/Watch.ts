// VanJS Lucide - Watch
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Watch = (props: Partial<SVGProps> = {}) => {
  const { circle, polyline, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "6" }),
    polyline({ points: "12 10 12 12 13 13" }),
    path({
      "d":
        "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",
    }),
    path({
      "d": "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",
    }),
  );
};
