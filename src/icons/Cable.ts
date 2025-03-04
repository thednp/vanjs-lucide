// VanJS Lucide - Cable
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Cable = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",
    }),
    path({ "d": "M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" }),
    path({ "d": "M21 21v-2h-4" }),
    path({ "d": "M3 5h4V3" }),
    path({
      "d":
        "M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",
    }),
  );
};
