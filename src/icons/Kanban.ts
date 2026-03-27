// VanJS Lucide - Kanban
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Kanban = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 5v11" }),
    path({ "d": "M12 5v6" }),
    path({ "d": "M18 5v14" }),
  );
};
