// VanJS Lucide - Asterisk
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Asterisk = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 6v12" }),
    path({ "d": "M17.196 9 6.804 15" }),
    path({ "d": "m6.804 9 10.392 6" }),
  );
};
