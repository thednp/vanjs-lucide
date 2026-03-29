// VanJS Lucide - NonBinary
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const NonBinary = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 2v10" }),
    path({ "d": "m8.5 4 7 4" }),
    path({ "d": "m8.5 8 7-4" }),
    circle({
      cx: "12",
      cy: "17",
      "r": "5",
    }),
  );
};
