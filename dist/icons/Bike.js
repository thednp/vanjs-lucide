/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Bike.ts
const Bike = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "18.5",
		cy: "17.5",
		"r": "3.5"
	}), circle({
		cx: "5.5",
		cy: "17.5",
		"r": "3.5"
	}), circle({
		cx: "15",
		cy: "5",
		"r": "1"
	}), path({ "d": "M12 17.5V14l-3-3 4-3 2 3h2" }));
};
//#endregion
export { Bike };

//# sourceMappingURL=Bike.js.map