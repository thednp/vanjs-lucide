// VanJS Lucide - Lasso
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Lasso = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M3.704 14.467a10 8 0 1 1 3.115 2.375" }),
    path({ "d": "M7 22a5 5 0 0 1-2-3.994" }),
    circle({
      cx: "5",
      cy: "16",
      "r": "2",
    }),
  );
};
