// VanJS Lucide - MessageCircleQuestion
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MessageCircleQuestion = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }),
    path({ "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
    path({ "d": "M12 17h.01" }),
  );
};
