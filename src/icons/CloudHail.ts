// VanJS Lucide - CloudHail
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CloudHail = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }),
    path({ "d": "M16 14v2" }),
    path({ "d": "M8 14v2" }),
    path({ "d": "M16 20h.01" }),
    path({ "d": "M8 20h.01" }),
    path({ "d": "M12 16v2" }),
    path({ "d": "M12 22h.01" }),
  );
};
