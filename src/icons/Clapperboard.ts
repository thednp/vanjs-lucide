// VanJS Lucide - Clapperboard
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Clapperboard = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",
    }),
    path({ "d": "m6.2 5.3 3.1 3.9" }),
    path({ "d": "m12.4 3.4 3.1 4" }),
    path({ "d": "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" }),
  );
};
