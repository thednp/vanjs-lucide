// VanJS Lucide - UtilityPole
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const UtilityPole = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v20" }),
    path({ "d": "M2 5h20" }),
    path({ "d": "M3 3v2" }),
    path({ "d": "M7 3v2" }),
    path({ "d": "M17 3v2" }),
    path({ "d": "M21 3v2" }),
    path({ "d": "m19 5-7 7-7-7" }),
  );
};
