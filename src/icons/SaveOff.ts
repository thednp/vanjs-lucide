// VanJS Lucide - SaveOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SaveOff = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 13H8a1 1 0 0 0-1 1v7" }),
    path({ "d": "M14 8h1" }),
    path({ "d": "M17 21v-4" }),
    path({ "d": "m2 2 20 20" }),
    path({
      "d": "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41",
    }),
    path({ "d": "M29.5 11.5s5 5 4 5" }),
    path({ "d": "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" }),
  );
};
