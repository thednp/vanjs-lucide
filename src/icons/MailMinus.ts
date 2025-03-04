// VanJS Lucide - MailMinus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MailMinus = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }),
    path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }),
    path({ "d": "M16 19h6" }),
  );
};
