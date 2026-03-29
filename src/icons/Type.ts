// VanJS Lucide - Type
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Type = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 4v16" }),
    path({ "d": "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" }),
    path({ "d": "M9 20h6" }),
  );
};
