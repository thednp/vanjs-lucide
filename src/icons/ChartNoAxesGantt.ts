// VanJS Lucide - ChartNoAxesGantt
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ChartNoAxesGantt = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M6 5h12" }),
    path({ "d": "M4 12h10" }),
    path({ "d": "M12 19h8" }),
  );
};
