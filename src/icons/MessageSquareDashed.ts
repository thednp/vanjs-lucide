// VanJS Lucide - MessageSquareDashed
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MessageSquareDashed = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 17H7l-4 4v-7" }),
    path({ "d": "M14 17h1" }),
    path({ "d": "M14 3h1" }),
    path({ "d": "M19 3a2 2 0 0 1 2 2" }),
    path({ "d": "M21 14v1a2 2 0 0 1-2 2" }),
    path({ "d": "M21 9v1" }),
    path({ "d": "M3 9v1" }),
    path({ "d": "M5 3a2 2 0 0 0-2 2" }),
    path({ "d": "M9 3h1" }),
  );
};
