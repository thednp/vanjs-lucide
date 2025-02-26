// VanJS Lucide - WavesLadder
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const WavesLadder = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19 5a2 2 0 0 0-2 2v11" }),
    path({
      "d":
        "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
    }),
    path({ "d": "M7 13h10" }),
    path({ "d": "M7 9h10" }),
    path({ "d": "M9 5a2 2 0 0 0-2 2v11" }),
  );
};
