// VanJS Lucide - ListRestart
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ListRestart = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 6H3" }),
    path({ "d": "M7 12H3" }),
    path({ "d": "M7 18H3" }),
    path({
      "d":
        "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",
    }),
    path({ "d": "M11 10v4h4" }),
  );
};
