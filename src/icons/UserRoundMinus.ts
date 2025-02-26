// VanJS Lucide - UserRoundMinus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const UserRoundMinus = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 21a8 8 0 0 1 13.292-6" }),
    circle({ cx: "10", cy: "8", "r": "5" }),
    path({ "d": "M22 19h-6" }),
  );
};
