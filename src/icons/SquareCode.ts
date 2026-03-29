// VanJS Lucide - SquareCode
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const SquareCode = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m10 9-3 3 3 3" }),
    path({ "d": "m14 15 3-3-3-3" }),
    rect({
      "x": "3",
      "y": "3",
      width: "18",
      height: "18",
      rx: "2",
    }),
  );
};
