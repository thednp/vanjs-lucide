// VanJS Lucide - Mail
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Mail = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }),
    rect({
      "x": "2",
      "y": "4",
      width: "20",
      height: "16",
      rx: "2",
    }),
  );
};
