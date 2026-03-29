// VanJS Lucide - Ellipse
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Ellipse = (props: Partial<SVGProps> = {}) => {
  const { ellipse } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    ellipse({
      cx: "12",
      cy: "12",
      rx: "10",
      ry: "6",
    }),
  );
};
