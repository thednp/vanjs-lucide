// VanJS Lucide - ServerCog
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ServerCog = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "3" }),
    path({
      "d":
        "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",
    }),
    path({
      "d":
        "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",
    }),
    path({ "d": "M6 6h.01" }),
    path({ "d": "M6 18h.01" }),
    path({ "d": "m15.7 13.4-.9-.3" }),
    path({ "d": "m9.2 10.9-.9-.3" }),
    path({ "d": "m10.6 15.7.3-.9" }),
    path({ "d": "m13.6 15.7-.4-1" }),
    path({ "d": "m10.8 9.3-.4-1" }),
    path({ "d": "m8.3 13.6 1-.4" }),
    path({ "d": "m14.7 10.8 1-.4" }),
    path({ "d": "m13.4 8.3-.3.9" }),
  );
};
