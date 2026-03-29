// VanJS Lucide - SeparatorVertical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const SeparatorVertical = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 3v18" }),
    path({ "d": "m16 16 4-4-4-4" }),
    path({ "d": "m8 8-4 4 4 4" }),
  );
};
