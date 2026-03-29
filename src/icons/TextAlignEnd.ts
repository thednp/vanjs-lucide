// VanJS Lucide - TextAlignEnd
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const TextAlignEnd = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M21 5H3" }),
    path({ "d": "M21 12H9" }),
    path({ "d": "M21 19H7" }),
  );
};
