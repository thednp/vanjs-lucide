// VanJS Lucide - CaseSensitive
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const CaseSensitive = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }),
    path({ "d": "M22 9v7" }),
    path({ "d": "M3.304 13h6.392" }),
    circle({
      cx: "18.5",
      cy: "12.5",
      "r": "3.5",
    }),
  );
};
