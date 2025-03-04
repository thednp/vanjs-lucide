// VanJS Lucide - GlobeLock
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GlobeLock = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",
    }),
    path({ "d": "M2 12h8.5" }),
    path({ "d": "M20 6V4a2 2 0 1 0-4 0v2" }),
    rect({ width: "8", height: "5", "x": "14", "y": "6", rx: "1" }),
  );
};
