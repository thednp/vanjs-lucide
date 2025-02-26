// VanJS Lucide - Siren
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Siren = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 18v-6a5 5 0 1 1 10 0v6" }),
    path({
      "d":
        "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",
    }),
    path({ "d": "M21 12h1" }),
    path({ "d": "M18.5 4.5 18 5" }),
    path({ "d": "M2 12h1" }),
    path({ "d": "M12 2v1" }),
    path({ "d": "m4.929 4.929.707.707" }),
    path({ "d": "M12 12v6" }),
  );
};
