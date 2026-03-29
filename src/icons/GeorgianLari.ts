// VanJS Lucide - GeorgianLari
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const GeorgianLari = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M11.5 21a7.5 7.5 0 1 1 7.35-9" }),
    path({ "d": "M13 12V3" }),
    path({ "d": "M4 21h16" }),
    path({ "d": "M9 12V3" }),
  );
};
