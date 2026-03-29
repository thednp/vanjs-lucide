// VanJS Lucide - ReplyAll
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ReplyAll = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m12 17-5-5 5-5" }),
    path({ "d": "M22 18v-2a4 4 0 0 0-4-4H7" }),
    path({ "d": "m7 17-5-5 5-5" }),
  );
};
