// VanJS Lucide - MouseRight
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const MouseRight = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 7.318V10" }),
    path({ "d": "M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7" }),
    circle({
      cx: "17",
      cy: "4",
      "r": "2",
    }),
  );
};
