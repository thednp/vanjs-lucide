// VanJS Lucide - MouseLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const MouseLeft = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 7.318V10" }),
    path({ "d": "M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7" }),
    circle({
      cx: "7",
      cy: "4",
      "r": "2",
    }),
  );
};
