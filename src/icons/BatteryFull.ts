// VanJS Lucide - BatteryFull
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const BatteryFull = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M10 10v4" }),
    path({ "d": "M14 10v4" }),
    path({ "d": "M22 14v-4" }),
    path({ "d": "M6 10v4" }),
    rect({
      "x": "2",
      "y": "6",
      width: "16",
      height: "12",
      rx: "2",
    }),
  );
};
