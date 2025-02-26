// VanJS Lucide - GitCommitVertical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GitCommitVertical = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 3v6" }),
    circle({ cx: "12", cy: "12", "r": "3" }),
    path({ "d": "M12 15v6" }),
  );
};
