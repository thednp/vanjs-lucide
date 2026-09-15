/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/IdCard.ts
const IdCard = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 10h2" }), path({ "d": "M16 14h2" }), path({ "d": "M6.17 15a3 3 0 0 1 5.66 0" }), circle({
		cx: "9",
		cy: "11",
		"r": "2"
	}), rect({
		"x": "2",
		"y": "5",
		width: "20",
		height: "14",
		rx: "2"
	}));
};
//#endregion
export { IdCard };

//# sourceMappingURL=IdCard.js.map