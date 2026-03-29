// VanJS Lucide - Reply
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Reply = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M20 18v-2a4 4 0 0 0-4-4H4" }),
    path({ "d": "m9 17-5-5 5-5" }),
  );
};
