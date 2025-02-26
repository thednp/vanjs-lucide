// VanJS Lucide - MessageCircleMore
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MessageCircleMore = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }),
    path({ "d": "M8 12h.01" }),
    path({ "d": "M12 12h.01" }),
    path({ "d": "M16 12h.01" }),
  );
};
