// VanJS Lucide - ZodiacOphiuchus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ZodiacOphiuchus = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10" }),
    path({ "d": "M6 3v12a6 6 0 0 0 12 0V3" }),
  );
};
