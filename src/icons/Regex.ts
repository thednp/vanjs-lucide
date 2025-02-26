// VanJS Lucide - Regex
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Regex = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 3v10" }),
    path({ "d": "m12.67 5.5 8.66 5" }),
    path({ "d": "m12.67 10.5 8.66-5" }),
    path({
      "d":
        "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",
    }),
  );
};
