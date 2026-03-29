// VanJS Lucide - TextWrap
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const TextWrap = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m16 16-3 3 3 3" }),
    path({ "d": "M3 12h14.5a1 1 0 0 1 0 7H13" }),
    path({ "d": "M3 19h6" }),
    path({ "d": "M3 5h18" }),
  );
};
