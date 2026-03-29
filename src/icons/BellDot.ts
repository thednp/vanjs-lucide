// VanJS Lucide - BellDot
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const BellDot = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M10.268 21a2 2 0 0 0 3.464 0" }),
    path({
      "d":
        "M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348",
    }),
    circle({
      cx: "18",
      cy: "5",
      "r": "3",
    }),
  );
};
