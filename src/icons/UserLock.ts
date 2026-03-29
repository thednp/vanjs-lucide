// VanJS Lucide - UserLock
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const UserLock = (props: Partial<SVGProps> = {}) => {
  const { path, circle, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M19 16v-2a2 2 0 0 0-4 0v2" }),
    path({ "d": "M9.5 15H7a4 4 0 0 0-4 4v2" }),
    circle({
      cx: "10",
      cy: "7",
      "r": "4",
    }),
    rect({
      "x": "13",
      "y": "16",
      width: "8",
      height: "5",
      rx: ".899",
    }),
  );
};
