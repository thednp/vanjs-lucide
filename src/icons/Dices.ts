// VanJS Lucide - Dices
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Dices = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "12", height: "12", "x": "2", "y": "10", rx: "2", ry: "2" }),
    path({
      "d":
        "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",
    }),
    path({ "d": "M6 18h.01" }),
    path({ "d": "M10 14h.01" }),
    path({ "d": "M15 6h.01" }),
    path({ "d": "M18 9h.01" }),
  );
};
