// VanJS Lucide - BookHeadphones
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BookHeadphones = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
    }),
    path({ "d": "M8 12v-2a4 4 0 0 1 8 0v2" }),
    circle({ cx: "15", cy: "12", "r": "1" }),
    circle({ cx: "9", cy: "12", "r": "1" }),
  );
};
