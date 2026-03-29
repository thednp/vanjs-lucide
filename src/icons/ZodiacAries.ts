// VanJS Lucide - ZodiacAries
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ZodiacAries = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 7.5a4.5 4.5 0 1 1 5 4.5" }),
    path({ "d": "M7 12a4.5 4.5 0 1 1 5-4.5V21" }),
  );
};
