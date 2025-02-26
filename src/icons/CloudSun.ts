// VanJS Lucide - CloudSun
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CloudSun = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v2" }),
    path({ "d": "m4.93 4.93 1.41 1.41" }),
    path({ "d": "M20 12h2" }),
    path({ "d": "m19.07 4.93-1.41 1.41" }),
    path({ "d": "M15.947 12.65a4 4 0 0 0-5.925-4.128" }),
    path({ "d": "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" }),
  );
};
