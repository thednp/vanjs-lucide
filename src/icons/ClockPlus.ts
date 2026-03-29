// VanJS Lucide - ClockPlus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ClockPlus = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 6v6l3.644 1.822" }),
    path({ "d": "M16 19h6" }),
    path({ "d": "M19 16v6" }),
    path({ "d": "M21.92 13.267a10 10 0 1 0-8.653 8.653" }),
  );
};
