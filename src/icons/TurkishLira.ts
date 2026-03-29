// VanJS Lucide - TurkishLira
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const TurkishLira = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M15 4 5 9" }),
    path({ "d": "m15 8.5-10 5" }),
    path({ "d": "M18 12a9 9 0 0 1-9 9V3" }),
  );
};
