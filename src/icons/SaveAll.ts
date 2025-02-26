// VanJS Lucide - SaveAll
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SaveAll = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 2v3a1 1 0 0 0 1 1h5" }),
    path({ "d": "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" }),
    path({ "d": "M18 22H4a2 2 0 0 1-2-2V6" }),
    path({
      "d":
        "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z",
    }),
  );
};
