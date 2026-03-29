// VanJS Lucide - ChevronsRightLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ChevronsRightLeft = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m20 17-5-5 5-5" }),
    path({ "d": "m4 17 5-5-5-5" }),
  );
};
