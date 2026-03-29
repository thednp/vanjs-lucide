// VanJS Lucide - Hd
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Hd = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M10 12H6" }),
    path({ "d": "M10 15V9" }),
    path({
      "d":
        "M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z",
    }),
    path({ "d": "M6 15V9" }),
    rect({
      "x": "2",
      "y": "5",
      width: "20",
      height: "14",
      rx: "2",
    }),
  );
};
