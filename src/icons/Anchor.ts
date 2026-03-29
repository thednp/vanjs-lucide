// VanJS Lucide - Anchor
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Anchor = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 6v16" }),
    path({ "d": "m19 13 2-1a9 9 0 0 1-18 0l2 1" }),
    path({ "d": "M9 11h6" }),
    circle({
      cx: "12",
      cy: "4",
      "r": "2",
    }),
  );
};
