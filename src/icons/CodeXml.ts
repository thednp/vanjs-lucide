// VanJS Lucide - CodeXml
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CodeXml = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m18 16 4-4-4-4" }),
    path({ "d": "m6 8-4 4 4 4" }),
    path({ "d": "m14.5 4-5 16" }),
  );
};
