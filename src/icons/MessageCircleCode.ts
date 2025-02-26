// VanJS Lucide - MessageCircleCode
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MessageCircleCode = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 9.5 8 12l2 2.5" }),
    path({ "d": "m14 9.5 2 2.5-2 2.5" }),
    path({ "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22z" }),
  );
};
