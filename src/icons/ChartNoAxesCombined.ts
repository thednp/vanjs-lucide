// VanJS Lucide - ChartNoAxesCombined
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChartNoAxesCombined = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 16v5" }),
    path({ "d": "M16 14v7" }),
    path({ "d": "M20 10v11" }),
    path({
      "d":
        "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",
    }),
    path({ "d": "M4 18v3" }),
    path({ "d": "M8 14v7" }),
  );
};
