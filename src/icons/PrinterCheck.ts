// VanJS Lucide - PrinterCheck
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const PrinterCheck = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5",
    }),
    path({ "d": "m16 19 2 2 4-4" }),
    path({ "d": "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" }),
    path({ "d": "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }),
  );
};
