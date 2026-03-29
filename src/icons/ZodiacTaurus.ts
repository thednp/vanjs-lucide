// VanJS Lucide - ZodiacTaurus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ZodiacTaurus = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    circle({
      cx: "12",
      cy: "15",
      "r": "6",
    }),
    path({ "d": "M18 3A6 6 0 0 1 6 3" }),
  );
};
