// VanJS Lucide - HeadphoneOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const HeadphoneOff = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 14h-1.343" }),
    path({ "d": "M9.128 3.47A9 9 0 0 1 21 12v3.343" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" }),
    path({
      "d":
        "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364",
    }),
  );
};
