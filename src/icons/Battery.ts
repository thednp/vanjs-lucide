// VanJS Lucide - Battery
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Battery = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M 22 14 L 22 10" }),
    rect({
      "x": "2",
      "y": "6",
      width: "16",
      height: "12",
      rx: "2",
    }),
  );
};
