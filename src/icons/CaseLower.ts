// VanJS Lucide - CaseLower
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const CaseLower = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M10 9v7" }),
    path({ "d": "M14 6v10" }),
    circle({
      cx: "17.5",
      cy: "12.5",
      "r": "3.5",
    }),
    circle({
      cx: "6.5",
      cy: "12.5",
      "r": "3.5",
    }),
  );
};
