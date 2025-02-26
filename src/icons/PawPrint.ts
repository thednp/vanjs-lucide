// VanJS Lucide - PawPrint
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const PawPrint = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "11", cy: "4", "r": "2" }),
    circle({ cx: "18", cy: "8", "r": "2" }),
    circle({ cx: "20", cy: "16", "r": "2" }),
    path({
      "d":
        "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",
    }),
  );
};
