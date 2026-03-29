// VanJS Lucide - Kanban
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Kanban = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M5 3v14" }),
    path({ "d": "M12 3v8" }),
    path({ "d": "M19 3v18" }),
  );
};
