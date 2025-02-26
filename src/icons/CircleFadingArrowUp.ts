// VanJS Lucide - CircleFadingArrowUp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleFadingArrowUp = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2a10 10 0 0 1 7.38 16.75" }),
    path({ "d": "m16 12-4-4-4 4" }),
    path({ "d": "M12 16V8" }),
    path({ "d": "M2.5 8.875a10 10 0 0 0-.5 3" }),
    path({ "d": "M2.83 16a10 10 0 0 0 2.43 3.4" }),
    path({ "d": "M4.636 5.235a10 10 0 0 1 .891-.857" }),
    path({ "d": "M8.644 21.42a10 10 0 0 0 7.631-.38" }),
  );
};
