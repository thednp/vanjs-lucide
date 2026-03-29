// VanJS Lucide - Forward
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Forward = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m15 17 5-5-5-5" }),
    path({ "d": "M4 18v-2a4 4 0 0 1 4-4h12" }),
  );
};
