// VanJS Lucide - SunMoon
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SunMoon = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" }),
    path({ "d": "M12 2v2" }),
    path({ "d": "M12 20v2" }),
    path({ "d": "m4.9 4.9 1.4 1.4" }),
    path({ "d": "m17.7 17.7 1.4 1.4" }),
    path({ "d": "M2 12h2" }),
    path({ "d": "M20 12h2" }),
    path({ "d": "m6.3 17.7-1.4 1.4" }),
    path({ "d": "m19.1 4.9-1.4 1.4" }),
  );
};
