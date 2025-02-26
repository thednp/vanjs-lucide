// VanJS Lucide - MessageCircleWarning
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MessageCircleWarning = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }),
    path({ "d": "M12 8v4" }),
    path({ "d": "M12 16h.01" }),
  );
};
