// VanJS Lucide - FlaskRound
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FlaskRound = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 2v6.292a7 7 0 1 0 4 0V2" }),
    path({ "d": "M5 15h14" }),
    path({ "d": "M8.5 2h7" }),
  );
};
