/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Globe.ts
const Globe = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }), path({ "d": "M2 12h20" }));
};
//#endregion
export { Globe };

//# sourceMappingURL=Globe.js.map