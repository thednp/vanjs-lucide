/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/ContactRound.ts
const ContactRound = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 2v2" }), path({ "d": "M17.915 22a6 6 0 0 0-12 0" }), path({ "d": "M8 2v2" }), circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}), rect({
		"x": "3",
		"y": "4",
		width: "18",
		height: "18",
		rx: "2"
	}));
};
//#endregion
export { ContactRound };

//# sourceMappingURL=ContactRound.js.map