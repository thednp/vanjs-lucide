/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/CreditCard.ts
const CreditCard = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "5",
		rx: "2"
	}), line({
		x1: "2",
		x2: "22",
		y1: "10",
		y2: "10"
	}));
};
//#endregion
export { CreditCard };

//# sourceMappingURL=CreditCard.js.map