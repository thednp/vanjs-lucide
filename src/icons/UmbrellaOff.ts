// VanJS Lucide - UmbrellaOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const UmbrellaOff = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v1" }),
    path({
      "d": "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",
    }),
    path({ "d": "M17.5 12H22A10 10 0 0 0 9.004 3.455" }),
    path({ "d": "m2 2 20 20" }),
  );
};
