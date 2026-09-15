/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/SunDim.ts
const SunDim = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}), path({ "d": "M12 4h.01" }), path({ "d": "M20 12h.01" }), path({ "d": "M12 20h.01" }), path({ "d": "M4 12h.01" }), path({ "d": "M17.657 6.343h.01" }), path({ "d": "M17.657 17.657h.01" }), path({ "d": "M6.343 17.657h.01" }), path({ "d": "M6.343 6.343h.01" }));
};
//#endregion
export { SunDim };

//# sourceMappingURL=SunDim.js.map