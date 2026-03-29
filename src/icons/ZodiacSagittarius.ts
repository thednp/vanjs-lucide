// VanJS Lucide - ZodiacSagittarius
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ZodiacSagittarius = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M15 3h6v6" }),
    path({ "d": "M21 3 3 21" }),
    path({ "d": "m9 9 6 6" }),
  );
};
