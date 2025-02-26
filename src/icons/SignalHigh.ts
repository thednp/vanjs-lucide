// VanJS Lucide - SignalHigh
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SignalHigh = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 20h.01" }),
    path({ "d": "M7 20v-4" }),
    path({ "d": "M12 20v-8" }),
    path({ "d": "M17 20V8" }),
  );
};
