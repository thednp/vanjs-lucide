/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Swords.ts
const Swords = (props = {}) => {
	const { polyline, line } = van.tags(svgNamespace);
	return LucideIcon(props, polyline({ points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }), line({
		x1: "13",
		x2: "19",
		y1: "19",
		y2: "13"
	}), line({
		x1: "16",
		x2: "20",
		y1: "16",
		y2: "20"
	}), line({
		x1: "19",
		x2: "21",
		y1: "21",
		y2: "19"
	}), polyline({ points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5" }), line({
		x1: "5",
		x2: "9",
		y1: "14",
		y2: "18"
	}), line({
		x1: "7",
		x2: "4",
		y1: "17",
		y2: "20"
	}), line({
		x1: "3",
		x2: "5",
		y1: "19",
		y2: "21"
	}));
};
//#endregion
export { Swords };

//# sourceMappingURL=Swords.js.map