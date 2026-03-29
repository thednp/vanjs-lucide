// VanJS Lucide - BanknoteX
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const BanknoteX = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" }),
    path({ "d": "m17 17 5 5" }),
    path({ "d": "M18 12h.01" }),
    path({ "d": "m22 17-5 5" }),
    path({ "d": "M6 12h.01" }),
    circle({
      cx: "12",
      cy: "12",
      "r": "2",
    }),
  );
};
