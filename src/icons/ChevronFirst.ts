// VanJS Lucide - ChevronFirst
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ChevronFirst = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m17 18-6-6 6-6" }),
    path({ "d": "M7 6v12" }),
  );
};
