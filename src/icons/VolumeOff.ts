// VanJS Lucide - VolumeOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const VolumeOff = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 9a5 5 0 0 1 .95 2.293" }),
    path({ "d": "M19.364 5.636a9 9 0 0 1 1.889 9.96" }),
    path({ "d": "m2 2 20 20" }),
    path({
      "d":
        "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11",
    }),
    path({ "d": "M9.828 4.172A.686.686 0 0 1 11 4.657v.686" }),
  );
};
