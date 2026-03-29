// VanJS Lucide - MonitorDot
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const MonitorDot = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 17v4" }),
    path({
      "d": "M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693",
    }),
    path({ "d": "M8 21h8" }),
    circle({
      cx: "19",
      cy: "6",
      "r": "3",
    }),
  );
};
