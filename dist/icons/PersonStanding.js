/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/PersonStanding.ts
const PersonStanding = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "5",
		"r": "1"
	}), path({ "d": "m9 20 3-6 3 6" }), path({ "d": "m6 8 6 2 6-2" }), path({ "d": "M12 10v4" }));
};
//#endregion
export { PersonStanding };

//# sourceMappingURL=PersonStanding.js.map