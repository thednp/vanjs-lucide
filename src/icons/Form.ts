// VanJS Lucide - Form
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Form = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M4 14h6" }),
    path({ "d": "M4 2h10" }),
    rect({
      "x": "4",
      "y": "18",
      width: "16",
      height: "4",
      rx: "1",
    }),
    rect({
      "x": "4",
      "y": "6",
      width: "16",
      height: "4",
      rx: "1",
    }),
  );
};
