// VanJS Lucide - MirrorRound
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const MirrorRound = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M10 6.6 8.6 8" }),
    path({ "d": "M12 18v4" }),
    path({ "d": "M15 7.5 9.5 13" }),
    path({ "d": "M7 22h10" }),
    circle({
      cx: "12",
      cy: "10",
      "r": "8",
    }),
  );
};
