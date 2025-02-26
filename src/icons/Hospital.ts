// VanJS Lucide - Hospital
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Hospital = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 6v4" }),
    path({ "d": "M14 14h-4" }),
    path({ "d": "M14 18h-4" }),
    path({ "d": "M14 8h-4" }),
    path({
      "d":
        "M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",
    }),
    path({ "d": "M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" }),
  );
};
