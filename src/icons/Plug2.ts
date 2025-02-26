// VanJS Lucide - Plug2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Plug2 = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 2v6" }),
    path({ "d": "M15 2v6" }),
    path({ "d": "M12 17v5" }),
    path({ "d": "M5 8h14" }),
    path({ "d": "M6 11V8h12v3a6 6 0 1 1-12 0Z" }),
  );
};
