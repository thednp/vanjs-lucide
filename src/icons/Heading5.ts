// VanJS Lucide - Heading5
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Heading5 = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 12h8" }),
    path({ "d": "M4 18V6" }),
    path({ "d": "M12 18V6" }),
    path({ "d": "M17 13v-3h4" }),
    path({
      "d": "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",
    }),
  );
};
