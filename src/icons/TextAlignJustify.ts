// VanJS Lucide - TextAlignJustify
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const TextAlignJustify = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M3 5h18" }),
    path({ "d": "M3 12h18" }),
    path({ "d": "M3 19h18" }),
  );
};
