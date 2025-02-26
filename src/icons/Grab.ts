// VanJS Lucide - Grab
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Grab = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }),
    path({ "d": "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }),
    path({ "d": "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" }),
    path({ "d": "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }),
    path({
      "d":
        "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",
    }),
  );
};
