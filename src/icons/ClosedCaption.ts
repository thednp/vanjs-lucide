// VanJS Lucide - ClosedCaption
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ClosedCaption = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M10 9.17a3 3 0 1 0 0 5.66" }),
    path({ "d": "M17 9.17a3 3 0 1 0 0 5.66" }),
    rect({
      "x": "2",
      "y": "5",
      width: "20",
      height: "14",
      rx: "2",
    }),
  );
};
