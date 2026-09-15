/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Sun.ts
const Sun = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}), path({ "d": "M12 2v2" }), path({ "d": "M12 20v2" }), path({ "d": "m4.93 4.93 1.41 1.41" }), path({ "d": "m17.66 17.66 1.41 1.41" }), path({ "d": "M2 12h2" }), path({ "d": "M20 12h2" }), path({ "d": "m6.34 17.66-1.41 1.41" }), path({ "d": "m19.07 4.93-1.41 1.41" }));
};
//#endregion
export { Sun };

//# sourceMappingURL=Sun.js.map