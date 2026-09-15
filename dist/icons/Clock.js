/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Clock.ts
const Clock = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 6v6l4 2" }));
};
//#endregion
export { Clock };

//# sourceMappingURL=Clock.js.map