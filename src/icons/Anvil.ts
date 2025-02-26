// VanJS Lucide - Anvil
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Anvil = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" }),
    path({
      "d": "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",
    }),
    path({ "d": "M9 12v5" }),
    path({ "d": "M15 12v5" }),
    path({
      "d": "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",
    }),
  );
};
