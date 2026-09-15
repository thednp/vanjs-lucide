/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/PawPrint.ts
const PawPrint = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "11",
		cy: "4",
		"r": "2"
	}), circle({
		cx: "18",
		cy: "8",
		"r": "2"
	}), circle({
		cx: "20",
		cy: "16",
		"r": "2"
	}), path({ "d": "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" }));
};
//#endregion
export { PawPrint };

//# sourceMappingURL=PawPrint.js.map