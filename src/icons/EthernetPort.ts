// VanJS Lucide - EthernetPort
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const EthernetPort = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z",
    }),
    path({ "d": "M6 8v1" }),
    path({ "d": "M10 8v1" }),
    path({ "d": "M14 8v1" }),
    path({ "d": "M18 8v1" }),
  );
};
