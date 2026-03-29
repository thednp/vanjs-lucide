// VanJS Lucide - Code
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Code = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m16 18 6-6-6-6" }),
    path({ "d": "m8 6-6 6 6 6" }),
  );
};
