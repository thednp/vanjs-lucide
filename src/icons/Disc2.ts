// VanJS Lucide - Disc2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Disc2 = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      "r": "10",
    }),
    circle({
      cx: "12",
      cy: "12",
      "r": "4",
    }),
    path({ "d": "M12 12h.01" }),
  );
};
