// VanJS Lucide - PanelLeftRightDashed
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const PanelLeftRightDashed = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M15 10V9" }),
    path({ "d": "M15 15v-1" }),
    path({ "d": "M15 21v-2" }),
    path({ "d": "M15 5V3" }),
    path({ "d": "M9 10V9" }),
    path({ "d": "M9 15v-1" }),
    path({ "d": "M9 21v-2" }),
    path({ "d": "M9 5V3" }),
    rect({
      "x": "3",
      "y": "3",
      width: "18",
      height: "18",
      rx: "2",
    }),
  );
};
