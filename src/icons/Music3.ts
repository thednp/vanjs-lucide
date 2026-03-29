// VanJS Lucide - Music3
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Music3 = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    circle({
      cx: "12",
      cy: "18",
      "r": "4",
    }),
    path({ "d": "M16 18V2" }),
  );
};
