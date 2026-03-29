// VanJS Lucide - Balloon
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Balloon = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" }),
    path({ "d": "M12 6a2 2 0 0 1 2 2" }),
    path({ "d": "M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0" }),
  );
};
