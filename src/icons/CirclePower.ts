// VanJS Lucide - CirclePower
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const CirclePower = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    circle({
      cx: "12",
      cy: "12",
      "r": "10",
    }),
    path({ "d": "M12 7v4" }),
    path({ "d": "M7.998 9.003a5 5 0 1 0 8-.005" }),
  );
};
