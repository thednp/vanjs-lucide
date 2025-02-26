// VanJS Lucide - MessageCircleOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MessageCircleOff = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20.5 14.9A9 9 0 0 0 9.1 3.5" }),
    path({ "d": "m2 2 20 20" }),
    path({
      "d": "M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",
    }),
  );
};
