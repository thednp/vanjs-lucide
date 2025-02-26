import { State } from 'vanjs-core';

type PropValueOrDerived<T> = T | State<T>;

interface EventHandler<T, E extends Event> {
  (
    e: E & {
      currentTarget: T;
      target: EventTarget & Element;
    },
  ): void;
}
interface BoundEventHandler<
  T,
  E extends Event,
  EHandler extends EventHandler<T, unknown> = EventHandler<T, E>,
> {
  0: (data: unknown, ...e: Parameters<EHandler>) => void;
  1: unknown;
}

type EventHandlerUnion<
  T,
  E extends Event,
  EHandler extends EventHandler<T, unknown> = EventHandler<T, E>,
> = EHandler | BoundEventHandler<T, E, EHandler>;

interface DOMAttributes<T> {
  oncopy?: EventHandlerUnion<T, ClipboardEvent> | undefined;
  oncut?: EventHandlerUnion<T, ClipboardEvent> | undefined;
  onpaste?: EventHandlerUnion<T, ClipboardEvent> | undefined;
  oncompositionend?: EventHandlerUnion<T, CompositionEvent> | undefined;
  oncompositionstart?: EventHandlerUnion<T, CompositionEvent> | undefined;
  oncompositionupdate?: EventHandlerUnion<T, CompositionEvent> | undefined;
  onfocusout?: FocusEventHandlerUnion<T, FocusEvent> | undefined;
  onfocusin?: FocusEventHandlerUnion<T, FocusEvent> | undefined;
  onencrypted?: EventHandlerUnion<T, Event> | undefined;
  ondragexit?: EventHandlerUnion<T, DragEvent> | undefined;
}

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
interface AriaAttributes {
  /**
   * Identifies the currently active element when DOM focus is on a composite widget, textbox,
   * group, or application.
   */
  "aria-activedescendant"?: string | undefined;
  /**
   * Indicates whether assistive technologies will present all, or only parts of, the changed
   * region based on the change notifications defined by the aria-relevant attribute.
   */
  "aria-atomic"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the
   * user's intended value for an input and specifies how predictions would be presented if they
   * are made.
   */
  "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
  /**
   * Indicates an element is being modified and that assistive technologies MAY want to wait until
   * the modifications are complete before exposing them to the user.
   */
  "aria-busy"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   *
   * @see aria-pressed @see aria-selected.
   */
  "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   *
   * @see aria-colindex.
   */
  "aria-colcount"?: number | string | undefined;
  /**
   * Defines an element's column index or position with respect to the total number of columns
   * within a table, grid, or treegrid.
   *
   * @see aria-colcount @see aria-colspan.
   */
  "aria-colindex"?: number | string | undefined;
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or
   * treegrid.
   *
   * @see aria-colindex @see aria-rowspan.
   */
  "aria-colspan"?: number | string | undefined;
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current
   * element.
   *
   * @see aria-owns.
   */
  "aria-controls"?: string | undefined;
  /**
   * Indicates the element that represents the current item within a container or set of related
   * elements.
   */
  "aria-current"?:
    | boolean
    | "false"
    | "true"
    | "page"
    | "step"
    | "location"
    | "date"
    | "time"
    | undefined;
  /**
   * Identifies the element (or elements) that describes the object.
   *
   * @see aria-labelledby
   */
  "aria-describedby"?: string | undefined;
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   *
   * @see aria-describedby.
   */
  "aria-details"?: string | undefined;
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise
   * operable.
   *
   * @see aria-hidden @see aria-readonly.
   */
  "aria-disabled"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop
   * target.
   *
   * @deprecated In ARIA 1.1
   */
  "aria-dropeffect"?:
    | "none"
    | "copy"
    | "execute"
    | "link"
    | "move"
    | "popup"
    | undefined;
  /**
   * Identifies the element that provides an error message for the object.
   *
   * @see aria-invalid @see aria-describedby.
   */
  "aria-errormessage"?: string | undefined;
  /**
   * Indicates whether the element, or another grouping element it controls, is currently expanded
   * or collapsed.
   */
  "aria-expanded"?: boolean | "false" | "true" | undefined;
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at
   * the user's discretion, allows assistive technology to override the general default of reading
   * in document source order.
   */
  "aria-flowto"?: string | undefined;
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   *
   * @deprecated In ARIA 1.1
   */
  "aria-grabbed"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates the availability and type of interactive popup element, such as menu or dialog,
   * that can be triggered by an element.
   */
  "aria-haspopup"?:
    | boolean
    | "false"
    | "true"
    | "menu"
    | "listbox"
    | "tree"
    | "grid"
    | "dialog"
    | undefined;
  /**
   * Indicates whether the element is exposed to an accessibility API.
   *
   * @see aria-disabled.
   */
  "aria-hidden"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   *
   * @see aria-errormessage.
   */
  "aria-invalid"?:
    | boolean
    | "false"
    | "true"
    | "grammar"
    | "spelling"
    | undefined;
  /**
   * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an
   * element.
   */
  "aria-keyshortcuts"?: string | undefined;
  /**
   * Defines a string value that labels the current element.
   *
   * @see aria-labelledby.
   */
  "aria-label"?: string | undefined;
  /**
   * Identifies the element (or elements) that labels the current element.
   *
   * @see aria-describedby.
   */
  "aria-labelledby"?: string | undefined;
  /** Defines the hierarchical level of an element within a structure. */
  "aria-level"?: number | string | undefined;
  /**
   * Indicates that an element will be updated, and describes the types of updates the user
   * agents, assistive technologies, and user can expect from the live region.
   */
  "aria-live"?: "off" | "assertive" | "polite" | undefined;
  /** Indicates whether an element is modal when displayed. */
  "aria-modal"?: boolean | "false" | "true" | undefined;
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  "aria-multiline"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates that the user may select more than one item from the current selectable
   * descendants.
   */
  "aria-multiselectable"?: boolean | "false" | "true" | undefined;
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  "aria-orientation"?: "horizontal" | "vertical" | undefined;
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual
   * parent/child relationship between DOM elements where the DOM hierarchy cannot be used to
   * represent the relationship.
   *
   * @see aria-controls.
   */
  "aria-owns"?: string | undefined;
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when
   * the control has no value. A hint could be a sample value or a brief description of the
   * expected format.
   */
  "aria-placeholder"?: string | undefined;
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not
   * required if all elements in the set are present in the DOM.
   *
   * @see aria-setsize.
   */
  "aria-posinset"?: number | string | undefined;
  /**
   * Indicates the current "pressed" state of toggle buttons.
   *
   * @see aria-checked @see aria-selected.
   */
  "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   *
   * @see aria-disabled.
   */
  "aria-readonly"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a
   * live region is modified.
   *
   * @see aria-atomic.
   */
  "aria-relevant"?:
    | "additions"
    | "additions removals"
    | "additions text"
    | "all"
    | "removals"
    | "removals additions"
    | "removals text"
    | "text"
    | "text additions"
    | "text removals"
    | undefined;
  /** Indicates that user input is required on the element before a form may be submitted. */
  "aria-required"?: boolean | "false" | "true" | undefined;
  /** Defines a human-readable, author-localized description for the role of an element. */
  "aria-roledescription"?: string | undefined;
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   *
   * @see aria-rowindex.
   */
  "aria-rowcount"?: number | string | undefined;
  /**
   * Defines an element's row index or position with respect to the total number of rows within a
   * table, grid, or treegrid.
   *
   * @see aria-rowcount @see aria-rowspan.
   */
  "aria-rowindex"?: number | string | undefined;
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   *
   * @see aria-rowindex @see aria-colspan.
   */
  "aria-rowspan"?: number | string | undefined;
  /**
   * Indicates the current "selected" state of various widgets.
   *
   * @see aria-checked @see aria-pressed.
   */
  "aria-selected"?: boolean | "false" | "true" | undefined;
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all
   * elements in the set are present in the DOM.
   *
   * @see aria-posinset.
   */
  "aria-setsize"?: number | string | undefined;
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
  /** Defines the maximum allowed value for a range widget. */
  "aria-valuemax"?: number | string | undefined;
  /** Defines the minimum allowed value for a range widget. */
  "aria-valuemin"?: number | string | undefined;
  /**
   * Defines the current value for a range widget.
   *
   * @see aria-valuetext.
   */
  "aria-valuenow"?: number | string | undefined;
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  "aria-valuetext"?: string | undefined;
  role?:
    | "alert"
    | "alertdialog"
    | "application"
    | "article"
    | "banner"
    | "button"
    | "cell"
    | "checkbox"
    | "columnheader"
    | "combobox"
    | "complementary"
    | "contentinfo"
    | "definition"
    | "dialog"
    | "directory"
    | "document"
    | "feed"
    | "figure"
    | "form"
    | "grid"
    | "gridcell"
    | "group"
    | "heading"
    | "img"
    | "link"
    | "list"
    | "listbox"
    | "listitem"
    | "log"
    | "main"
    | "marquee"
    | "math"
    | "menu"
    | "menubar"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "meter"
    | "navigation"
    | "none"
    | "note"
    | "option"
    | "presentation"
    | "progressbar"
    | "radio"
    | "radiogroup"
    | "region"
    | "row"
    | "rowgroup"
    | "rowheader"
    | "scrollbar"
    | "search"
    | "searchbox"
    | "separator"
    | "slider"
    | "spinbutton"
    | "status"
    | "switch"
    | "tab"
    | "table"
    | "tablist"
    | "tabpanel"
    | "term"
    | "textbox"
    | "timer"
    | "toolbar"
    | "tooltip"
    | "tree"
    | "treegrid"
    | "treeitem"
    | undefined;
}

interface TransformableSVGAttributes {
  transform?: string | undefined;
}

interface ContainerElementSVGAttributes<T> extends
  CoreSVGAttributes<T>,
  Pick<
    PresentationSVGAttributes,
    | "clip-path"
    | "mask"
    | "cursor"
    | "opacity"
    | "filter"
    | "enable-background"
    | "color-interpolation"
    | "color-rendering"
  > {}
interface FilterPrimitiveElementSVGAttributes<T>
  extends
    CoreSVGAttributes<T>,
    Pick<PresentationSVGAttributes, "color-interpolation-filters"> {
  x?: number | string | undefined;
  y?: number | string | undefined;
  width?: number | string | undefined;
  height?: number | string | undefined;
  result?: string | undefined;
}
interface StylableSVGAttributes {
  class?: string | undefined;
  style?: string | undefined;
}
interface FitToViewBoxSVGAttributes {
  viewBox?: string | undefined;
  preserveAspectRatio?: SVGPreserveAspectRatio | undefined;
}

interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  id?: string | undefined;
  lang?: string | undefined;
  tabIndex?: number | string | undefined;
  tabindex?: number | string | undefined;
}
interface PresentationSVGAttributes {
  "alignment-baseline"?:
    | "auto"
    | "baseline"
    | "before-edge"
    | "text-before-edge"
    | "middle"
    | "central"
    | "after-edge"
    | "text-after-edge"
    | "ideographic"
    | "alphabetic"
    | "hanging"
    | "mathematical"
    | "inherit"
    | undefined;
  "baseline-shift"?: number | string | undefined;
  clip?: string | undefined;
  "clip-path"?: string | undefined;
  "clip-rule"?: "nonzero" | "evenodd" | "inherit" | undefined;
  color?: string | undefined;
  "color-interpolation"?:
    | "auto"
    | "sRGB"
    | "linearRGB"
    | "inherit"
    | undefined;
  "color-interpolation-filters"?:
    | "auto"
    | "sRGB"
    | "linearRGB"
    | "inherit"
    | undefined;
  "color-profile"?: string | undefined;
  "color-rendering"?:
    | "auto"
    | "optimizeSpeed"
    | "optimizeQuality"
    | "inherit"
    | undefined;
  cursor?: string | undefined;
  direction?: "ltr" | "rtl" | "inherit" | undefined;
  display?: string | undefined;
  "dominant-baseline"?:
    | "auto"
    | "text-bottom"
    | "alphabetic"
    | "ideographic"
    | "middle"
    | "central"
    | "mathematical"
    | "hanging"
    | "text-top"
    | "inherit"
    | undefined;
  "enable-background"?: string | undefined;
  fill?: string | undefined;
  "fill-opacity"?: number | string | "inherit" | undefined;
  "fill-rule"?: "nonzero" | "evenodd" | "inherit" | undefined;
  filter?: string | undefined;
  "flood-color"?: string | undefined;
  "flood-opacity"?: number | string | "inherit" | undefined;
  "font-family"?: string | undefined;
  "font-size"?: string | undefined;
  "font-size-adjust"?: number | string | undefined;
  "font-stretch"?: string | undefined;
  "font-style"?: "normal" | "italic" | "oblique" | "inherit" | undefined;
  "font-variant"?: string | undefined;
  "font-weight"?: number | string | undefined;
  "glyph-orientation-horizontal"?: string | undefined;
  "glyph-orientation-vertical"?: string | undefined;
  "image-rendering"?:
    | "auto"
    | "optimizeQuality"
    | "optimizeSpeed"
    | "inherit"
    | undefined;
  kerning?: string | undefined;
  "letter-spacing"?: number | string | undefined;
  "lighting-color"?: string | undefined;
  "marker-end"?: string | undefined;
  "marker-mid"?: string | undefined;
  "marker-start"?: string | undefined;
  mask?: string | undefined;
  opacity?: number | string | "inherit" | undefined;
  overflow?: "visible" | "hidden" | "scroll" | "auto" | "inherit" | undefined;
  pathLength?: string | number | undefined;
  "pointer-events"?:
    | "bounding-box"
    | "visiblePainted"
    | "visibleFill"
    | "visibleStroke"
    | "visible"
    | "painted"
    | "color"
    | "fill"
    | "stroke"
    | "all"
    | "none"
    | "inherit"
    | undefined;
  "shape-rendering"?:
    | "auto"
    | "optimizeSpeed"
    | "crispEdges"
    | "geometricPrecision"
    | "inherit"
    | undefined;
  "stop-color"?: string | undefined;
  "stop-opacity"?: number | string | "inherit" | undefined;
  stroke?: string | undefined;
  "stroke-dasharray"?: string | undefined;
  "stroke-dashoffset"?: number | string | undefined;
  "stroke-linecap"?: "butt" | "round" | "square" | "inherit" | undefined;
  "stroke-linejoin"?:
    | "arcs"
    | "bevel"
    | "miter"
    | "miter-clip"
    | "round"
    | "inherit"
    | undefined;
  "stroke-miterlimit"?: number | string | "inherit" | undefined;
  "stroke-opacity"?: number | string | "inherit" | undefined;
  "stroke-width"?: number | string | undefined;
  "text-anchor"?: "start" | "middle" | "end" | "inherit" | undefined;
  "text-decoration"?:
    | "none"
    | "underline"
    | "overline"
    | "line-through"
    | "blink"
    | "inherit"
    | undefined;
  "text-rendering"?:
    | "auto"
    | "optimizeSpeed"
    | "optimizeLegibility"
    | "geometricPrecision"
    | "inherit"
    | undefined;
  "unicode-bidi"?: string | undefined;
  visibility?: "visible" | "hidden" | "collapse" | "inherit" | undefined;
  "word-spacing"?: number | string | undefined;
  "writing-mode"?:
    | "lr-tb"
    | "rl-tb"
    | "tb-rl"
    | "lr"
    | "rl"
    | "tb"
    | "inherit"
    | undefined;
}

interface NewViewportSVGAttributes<T>
  extends
    CoreSVGAttributes<T>,
    Pick<PresentationSVGAttributes, "overflow" | "clip"> {
  viewBox?: string | undefined;
}
interface NewViewportSVGAttributes<T>
  extends
    CoreSVGAttributes<T>,
    Pick<PresentationSVGAttributes, "overflow" | "clip"> {
  viewBox?: string | undefined;
}
interface ZoomAndPanSVGAttributes {
  zoomAndPan?: "disable" | "magnify" | undefined;
}

interface SvgSVGAttributes<T>
  extends
    ContainerElementSVGAttributes<T>,
    NewViewportSVGAttributes<T>,
    FilterPrimitiveElementSVGAttributes<T>,
    StylableSVGAttributes,
    TransformableSVGAttributes,
    FitToViewBoxSVGAttributes,
    ZoomAndPanSVGAttributes,
    PresentationSVGAttributes {
  /** @deprecated */
  version?: string | undefined;
  baseProfile?: string | undefined;
  x?: number | string | undefined;
  y?: number | string | undefined;
  width?: number | string | undefined;
  height?: number | string | undefined;
  contentScriptType?: string | undefined;
  contentStyleType?: string | undefined;
  xmlns?: string | undefined;
  "xmlns:xlink"?: string | undefined;
}

type SVGProps = {
  [K in keyof SvgSVGAttributes<SVGSVGElement>]:
    | PropValueOrDerived<SvgSVGAttributes<SVGSVGElement>[K]>
    | undefined;
};

declare const AArrowDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AArrowUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ALargeSmall: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Accessibility: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Activity: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AirVent: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Airplay: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlarmClockCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlarmClockMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlarmClockOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlarmClockPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlarmClock: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlarmSmoke: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Album: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignCenterHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignCenterVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignCenter: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignEndHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignEndVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignHorizontalDistributeCenter: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignHorizontalDistributeEnd: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignHorizontalDistributeStart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignHorizontalJustifyCenter: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignHorizontalJustifyEnd: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignHorizontalJustifyStart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignHorizontalSpaceAround: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignHorizontalSpaceBetween: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignJustify: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignStartHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignStartVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignVerticalDistributeCenter: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignVerticalDistributeEnd: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignVerticalDistributeStart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignVerticalJustifyCenter: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignVerticalJustifyEnd: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignVerticalJustifyStart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignVerticalSpaceAround: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AlignVerticalSpaceBetween: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Ambulance: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Ampersand: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Ampersands: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Amphora: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Anchor: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Angry: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Annoyed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Antenna: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Anvil: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Aperture: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AppWindowMac: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AppWindow: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Apple: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArchiveRestore: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArchiveX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Archive: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Armchair: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowBigDownDash: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowBigDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowBigLeftDash: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowBigLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowBigRightDash: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowBigRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowBigUpDash: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowBigUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDown01: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDown10: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDownAZ: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDownFromLine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDownLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDownNarrowWide: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDownRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDownToDot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDownToLine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDownUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDownWideNarrow: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDownZA: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowLeftFromLine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowLeftRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowLeftToLine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowRightFromLine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowRightLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowRightToLine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUp01: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUp10: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUpAZ: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUpDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUpFromDot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUpFromLine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUpLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUpNarrowWide: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUpRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUpToLine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUpWideNarrow: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUpZA: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ArrowsUpFromLine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Asterisk: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AtSign: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Atom: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AudioLines: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const AudioWaveform: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Award: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Axe: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Axis3d: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Baby: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Backpack: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BadgeAlert: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BadgeCent: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BadgeCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BadgeDollarSign: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BadgeEuro: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BadgeHelp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BadgeIndianRupee: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BadgeInfo: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BadgeJapaneseYen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BadgeMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BadgePercent: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BadgePlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BadgePoundSterling: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BadgeRussianRuble: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BadgeSwissFranc: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BadgeX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Badge: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BaggageClaim: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Ban: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Banana: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bandage: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Banknote: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Barcode: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Baseline: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bath: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BatteryCharging: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BatteryFull: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BatteryLow: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BatteryMedium: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BatteryPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BatteryWarning: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Battery: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Beaker: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BeanOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bean: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BedDouble: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BedSingle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Beef: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BeerOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Beer: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BellDot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BellElectric: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BellMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BellOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BellPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BellRing: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bell: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BetweenHorizontalEnd: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BetweenHorizontalStart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BetweenVerticalEnd: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BetweenVerticalStart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BicepsFlexed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bike: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Binary: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Binoculars: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Biohazard: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bird: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bitcoin: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Blend: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Blinds: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Blocks: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BluetoothConnected: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BluetoothOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BluetoothSearching: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bluetooth: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bold: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bolt: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bomb: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bone: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookA: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookAudio: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookCopy: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookDashed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookHeadphones: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookHeart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookImage: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookKey: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookLock: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookMarked: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookOpenCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookOpenText: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookOpen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookText: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookType: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookUp2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookUser: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Book: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookmarkCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookmarkMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookmarkPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BookmarkX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bookmark: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BoomBox: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BotMessageSquare: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BotOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Box: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Boxes: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Braces: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Brackets: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BrainCircuit: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BrainCog: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Brain: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BrickWall: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BriefcaseBusiness: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BriefcaseConveyorBelt: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BriefcaseMedical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Briefcase: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BringToFront: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Brush: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BugOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BugPlay: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bug: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Building2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Building: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const BusFront: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Bus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CableCar: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cable: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CakeSlice: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cake: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Calculator: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Calendar1: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarArrowDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarArrowUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarCheck2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarClock: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarCog: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarDays: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarFold: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarHeart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarMinus2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarPlus2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarRange: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarSearch: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarSync: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarX2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CalendarX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Calendar: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CameraOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Camera: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CandyCane: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CandyOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Candy: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cannabis: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CaptionsOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Captions: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CarFront: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CarTaxiFront: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Car: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Caravan: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Carrot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CaseLower: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CaseSensitive: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CaseUpper: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CassetteTape: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cast: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Castle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cat: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cctv: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartArea: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartBarBig: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartBarDecreasing: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartBarIncreasing: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartBarStacked: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartBar: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartCandlestick: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartColumnBig: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartColumnDecreasing: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartColumnIncreasing: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartColumnStacked: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartColumn: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartGantt: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartLine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartNetwork: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartNoAxesColumnDecreasing: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartNoAxesColumnIncreasing: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartNoAxesColumn: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartNoAxesCombined: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartNoAxesGantt: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartPie: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartScatter: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChartSpline: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CheckCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Check: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChefHat: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cherry: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronFirst: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronLast: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronsDownUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronsDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronsLeftRightEllipsis: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronsLeftRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronsLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronsRightLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronsRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronsUpDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ChevronsUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Chrome: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Church: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CigaretteOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cigarette: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleAlert: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleArrowDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleArrowLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleArrowOutDownLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleArrowOutDownRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleArrowOutUpLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleArrowOutUpRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleArrowRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleArrowUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleCheckBig: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleChevronDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleChevronLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleChevronRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleChevronUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleDashed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleDivide: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleDollarSign: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleDotDashed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleDot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleEllipsis: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleEqual: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleFadingArrowUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleFadingPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleGauge: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleHelp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleParkingOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleParking: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CirclePause: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CirclePercent: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CirclePlay: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CirclePlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CirclePower: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleSlash2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleSlash: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleSmall: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleStop: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleUserRound: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleUser: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircleX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Circle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CircuitBoard: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Citrus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clapperboard: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ClipboardCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ClipboardCopy: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ClipboardList: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ClipboardMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ClipboardPaste: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ClipboardPenLine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ClipboardPen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ClipboardPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ClipboardType: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ClipboardX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clipboard: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clock1: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clock10: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clock11: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clock12: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clock2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clock3: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clock4: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clock5: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clock6: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clock7: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clock8: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clock9: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ClockAlert: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ClockArrowDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ClockArrowUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clock: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudAlert: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudCog: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudDownload: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudDrizzle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudFog: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudHail: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudLightning: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudMoonRain: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudMoon: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudRainWind: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudRain: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudSnow: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudSunRain: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudSun: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CloudUpload: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cloud: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cloudy: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Clover: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Club: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CodeXml: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Code: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Codepen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Codesandbox: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Coffee: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cog: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Coins: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Columns2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Columns3: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Columns4: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Combine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Command: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Compass: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Component: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Computer: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ConciergeBell: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cone: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Construction: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ContactRound: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Contact: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Container: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Contrast: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cookie: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CookingPot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CopyCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CopyMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CopyPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CopySlash: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CopyX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Copy: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Copyleft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Copyright: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CornerDownLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CornerDownRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CornerLeftDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CornerLeftUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CornerRightDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CornerRightUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CornerUpLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CornerUpRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cpu: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CreativeCommons: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CreditCard: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Croissant: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Crop: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cross: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Crosshair: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Crown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cuboid: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const CupSoda: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Currency: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Cylinder: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Dam: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const DatabaseBackup: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const DatabaseZap: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Database: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Delete: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Dessert: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Diameter: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const DiamondMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const DiamondPercent: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const DiamondPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Diamond: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Dice1: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Dice2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Dice3: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Dice4: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Dice5: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Dice6: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Dices: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Diff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Disc2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Disc3: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const DiscAlbum: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Disc: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Divide: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const DnaOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Dna: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Dock: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Dog: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const DollarSign: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Donut: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const DoorClosed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const DoorOpen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Dot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Download: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const DraftingCompass: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Drama: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Dribbble: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Drill: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const DropletOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Droplet: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Droplets: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Drum: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Drumstick: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Dumbbell: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const EarOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Ear: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const EarthLock: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Earth: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Eclipse: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const EggFried: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const EggOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Egg: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const EllipsisVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Ellipsis: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const EqualApproximately: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const EqualNot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Equal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Eraser: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const EthernetPort: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Euro: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Expand: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ExternalLink: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const EyeClosed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const EyeOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Eye: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Facebook: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Factory: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Fan: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FastForward: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Feather: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Fence: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FerrisWheel: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Figma: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileArchive: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileAudio2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileAudio: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileAxis3d: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileBadge2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileBadge: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileBox: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileChartColumnIncreasing: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileChartColumn: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileChartLine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileChartPie: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileCheck2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileClock: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileCode2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileCode: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileCog: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileDiff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileDigit: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileHeart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileImage: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileInput: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileJson2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileJson: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileKey2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileKey: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileLock2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileLock: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileMinus2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileMusic: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileOutput: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FilePenLine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FilePen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FilePlus2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FilePlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileQuestion: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileScan: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileSearch2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileSearch: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileSliders: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileSpreadsheet: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileStack: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileSymlink: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileTerminal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileText: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileType2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileType: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileUser: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileVideo2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileVideo: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileVolume2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileVolume: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileWarning: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileX2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FileX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const File: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Files: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Film: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FilterX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Filter: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Fingerprint: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FireExtinguisher: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FishOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FishSymbol: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Fish: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FlagOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FlagTriangleLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FlagTriangleRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Flag: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FlameKindling: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Flame: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FlashlightOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Flashlight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FlaskConicalOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FlaskConical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FlaskRound: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FlipHorizontal2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FlipHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FlipVertical2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FlipVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Flower2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Flower: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Focus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FoldHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FoldVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderArchive: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderClock: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderClosed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderCode: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderCog: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderDot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderGit2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderGit: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderHeart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderInput: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderKanban: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderKey: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderLock: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderOpenDot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderOpen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderOutput: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderPen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderRoot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderSearch2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderSearch: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderSymlink: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderSync: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderTree: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const FolderX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Folder: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Folders: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Footprints: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Forklift: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Forward: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Frame: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Framer: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Frown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Fuel: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Fullscreen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GalleryHorizontalEnd: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GalleryHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GalleryThumbnails: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GalleryVerticalEnd: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GalleryVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Gamepad2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Gamepad: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Gauge: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Gavel: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Gem: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Ghost: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Gift: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitBranchPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitBranch: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitCommitHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitCommitVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitCompareArrows: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitCompare: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitFork: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitGraph: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitMerge: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitPullRequestArrow: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitPullRequestClosed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitPullRequestCreateArrow: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitPullRequestCreate: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitPullRequestDraft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GitPullRequest: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Github: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Gitlab: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GlassWater: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Glasses: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GlobeLock: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Globe: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Goal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Grab: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GraduationCap: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Grape: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Grid2x2Check: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Grid2x2Plus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Grid2x2X: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Grid2x2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Grid3x3: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GripHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const GripVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Grip: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Group: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Guitar: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Ham: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Hammer: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HandCoins: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HandHeart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HandHelping: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HandMetal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HandPlatter: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Hand: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Handshake: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HardDriveDownload: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HardDriveUpload: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HardDrive: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HardHat: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Hash: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Haze: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HdmiPort: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Heading1: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Heading2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Heading3: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Heading4: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Heading5: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Heading6: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Heading: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HeadphoneOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Headphones: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Headset: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HeartCrack: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HeartHandshake: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HeartOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HeartPulse: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Heart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Heater: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Hexagon: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Highlighter: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const History: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HopOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Hop: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Hospital: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Hotel: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Hourglass: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HousePlug: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HousePlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const HouseWifi: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const House: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const IceCreamBowl: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const IceCreamCone: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const IdCard: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ImageDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ImageMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ImageOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ImagePlay: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ImagePlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ImageUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ImageUpscale: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Image: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Images: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Import: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Inbox: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const IndentDecrease: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const IndentIncrease: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const IndianRupee: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const InfinityIcon: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Info: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const InspectionPanel: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Instagram: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Italic: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const IterationCcw: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const IterationCw: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const JapaneseYen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Joystick: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Kanban: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const KeyRound: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const KeySquare: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Key: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const KeyboardMusic: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const KeyboardOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Keyboard: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LampCeiling: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LampDesk: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LampFloor: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LampWallDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LampWallUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Lamp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LandPlot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Landmark: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Languages: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LaptopMinimalCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LaptopMinimal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Laptop: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LassoSelect: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Lasso: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Laugh: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Layers2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Layers: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LayoutDashboard: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LayoutGrid: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LayoutList: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LayoutPanelLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LayoutPanelTop: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LayoutTemplate: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Leaf: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LeafyGreen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Lectern: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LetterText: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LibraryBig: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Library: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LifeBuoy: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Ligature: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LightbulbOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Lightbulb: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Link2Off: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Link2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Link: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Linkedin: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ListCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ListChecks: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ListCollapse: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ListEnd: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ListFilterPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ListFilter: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ListMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ListMusic: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ListOrdered: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ListPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ListRestart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ListStart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ListTodo: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ListTree: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ListVideo: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ListX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const List: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LoaderCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LoaderPinwheel: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Loader: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LocateFixed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LocateOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Locate: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LockKeyholeOpen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LockKeyhole: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LockOpen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Lock: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LogIn: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const LogOut: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Logs: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Lollipop: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Luggage: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Magnet: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MailCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MailMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MailOpen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MailPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MailQuestion: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MailSearch: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MailWarning: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MailX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Mail: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Mailbox: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Mails: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MapPinCheckInside: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MapPinCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MapPinHouse: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MapPinMinusInside: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MapPinMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MapPinOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MapPinPlusInside: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MapPinPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MapPinXInside: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MapPinX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MapPin: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MapPinned: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MapPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Map: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MarsStroke: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Mars: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Martini: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Maximize2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Maximize: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Medal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MegaphoneOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Megaphone: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Meh: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MemoryStick: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Menu: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Merge: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageCircleCode: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageCircleDashed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageCircleHeart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageCircleMore: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageCircleOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageCirclePlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageCircleQuestion: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageCircleReply: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageCircleWarning: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageCircleX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageCircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquareCode: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquareDashed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquareDiff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquareDot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquareHeart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquareLock: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquareMore: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquareOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquarePlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquareQuote: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquareReply: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquareShare: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquareText: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquareWarning: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquareX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessageSquare: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MessagesSquare: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MicOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MicVocal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Mic: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Microchip: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Microscope: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Microwave: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Milestone: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MilkOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Milk: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Minimize2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Minimize: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Minus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MonitorCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MonitorCog: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MonitorDot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MonitorDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MonitorOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MonitorPause: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MonitorPlay: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MonitorSmartphone: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MonitorSpeaker: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MonitorStop: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MonitorUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MonitorX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Monitor: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MoonStar: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Moon: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MountainSnow: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Mountain: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MouseOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MousePointer2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MousePointerBan: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MousePointerClick: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MousePointer: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Mouse: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Move3d: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MoveDiagonal2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MoveDiagonal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MoveDownLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MoveDownRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MoveDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MoveHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MoveLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MoveRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MoveUpLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MoveUpRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MoveUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const MoveVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Move: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Music2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Music3: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Music4: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Music: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Navigation2Off: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Navigation2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const NavigationOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Navigation: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Network: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Newspaper: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Nfc: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const NonBinary: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const NotebookPen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const NotebookTabs: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const NotebookText: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Notebook: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const NotepadTextDashed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const NotepadText: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const NutOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Nut: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const OctagonAlert: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const OctagonMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const OctagonPause: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const OctagonX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Octagon: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Omega: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Option: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Orbit: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Origami: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Package2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PackageCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PackageMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PackageOpen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PackagePlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PackageSearch: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PackageX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Package: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PaintBucket: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PaintRoller: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PaintbrushVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Paintbrush: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Palette: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelBottomClose: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelBottomDashed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelBottomOpen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelBottom: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelLeftClose: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelLeftDashed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelLeftOpen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelRightClose: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelRightDashed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelRightOpen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelTopClose: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelTopDashed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelTopOpen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelTop: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelsLeftBottom: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelsRightBottom: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PanelsTopLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Paperclip: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Parentheses: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ParkingMeter: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PartyPopper: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Pause: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PawPrint: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PcCase: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PenLine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PenOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PenTool: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Pen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PencilLine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PencilOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PencilRuler: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Pencil: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Pentagon: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Percent: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PersonStanding: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PhilippinePeso: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PhoneCall: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PhoneForwarded: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PhoneIncoming: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PhoneMissed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PhoneOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PhoneOutgoing: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Phone: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Pi: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Piano: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Pickaxe: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PictureInPicture2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PictureInPicture: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PiggyBank: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PilcrowLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PilcrowRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Pilcrow: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PillBottle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Pill: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PinOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Pin: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Pipette: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Pizza: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PlaneLanding: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PlaneTakeoff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Plane: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Play: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Plug2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PlugZap: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Plug: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Plus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PocketKnife: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Pocket: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Podcast: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PointerOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Pointer: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Popcorn: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Popsicle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PoundSterling: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PowerOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Power: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Presentation: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const PrinterCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Printer: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Projector: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Proportions: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Puzzle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Pyramid: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const QrCode: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Quote: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Rabbit: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Radar: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Radiation: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Radical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RadioReceiver: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RadioTower: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Radio: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Radius: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RailSymbol: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Rainbow: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Rat: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Ratio: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ReceiptCent: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ReceiptEuro: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ReceiptIndianRupee: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ReceiptJapaneseYen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ReceiptPoundSterling: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ReceiptRussianRuble: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ReceiptSwissFranc: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ReceiptText: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Receipt: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RectangleEllipsis: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RectangleHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RectangleVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Recycle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Redo2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RedoDot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Redo: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RefreshCcwDot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RefreshCcw: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RefreshCwOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RefreshCw: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Refrigerator: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Regex: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RemoveFormatting: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Repeat1: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Repeat2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Repeat: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ReplaceAll: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Replace: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ReplyAll: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Reply: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Rewind: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Ribbon: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Rocket: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RockingChair: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RollerCoaster: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Rotate3d: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RotateCcwSquare: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RotateCcw: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RotateCwSquare: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RotateCw: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RouteOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Route: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Router: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Rows2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Rows3: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Rows4: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Rss: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Ruler: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const RussianRuble: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sailboat: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Salad: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sandwich: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SatelliteDish: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Satellite: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SaveAll: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SaveOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Save: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Scale3d: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Scale: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Scaling: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ScanBarcode: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ScanEye: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ScanFace: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ScanHeart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ScanLine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ScanQrCode: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ScanSearch: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ScanText: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Scan: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const School: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ScissorsLineDashed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Scissors: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ScreenShareOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ScreenShare: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ScrollText: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Scroll: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SearchCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SearchCode: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SearchSlash: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SearchX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Search: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Section: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SendHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SendToBack: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Send: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SeparatorHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SeparatorVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ServerCog: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ServerCrash: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ServerOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Server: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Settings2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Settings: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Shapes: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Share2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Share: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sheet: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Shell: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShieldAlert: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShieldBan: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShieldCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShieldEllipsis: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShieldHalf: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShieldMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShieldOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShieldPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShieldQuestion: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShieldUser: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShieldX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Shield: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShipWheel: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Ship: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Shirt: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShoppingBag: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShoppingBasket: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShoppingCart: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Shovel: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ShowerHead: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Shrink: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Shrub: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Shuffle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sigma: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SignalHigh: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SignalLow: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SignalMedium: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SignalZero: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Signal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Signature: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SignpostBig: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Signpost: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Siren: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SkipBack: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SkipForward: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Skull: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Slack: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Slash: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Slice: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SlidersHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SlidersVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SmartphoneCharging: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SmartphoneNfc: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Smartphone: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SmilePlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Smile: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Snail: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Snowflake: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sofa: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Soup: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Space: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Spade: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sparkle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sparkles: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Speaker: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Speech: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SpellCheck2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SpellCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Spline: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Split: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SprayCan: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sprout: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareActivity: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareArrowDownLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareArrowDownRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareArrowDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareArrowLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareArrowOutDownLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareArrowOutDownRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareArrowOutUpLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareArrowOutUpRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareArrowRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareArrowUpLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareArrowUpRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareArrowUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareAsterisk: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareBottomDashedScissors: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareChartGantt: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareCheckBig: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareChevronDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareChevronLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareChevronRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareChevronUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareCode: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareDashedBottomCode: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareDashedBottom: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareDashedKanban: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareDashedMousePointer: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareDashed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareDivide: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareDot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareEqual: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareFunction: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareKanban: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareLibrary: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareM: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareMenu: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareMousePointer: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareParkingOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareParking: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquarePen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquarePercent: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquarePi: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquarePilcrow: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquarePlay: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquarePlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquarePower: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareRadical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareScissors: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareSigma: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareSlash: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareSplitHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareSplitVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareSquare: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareStack: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareTerminal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareUserRound: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareUser: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SquareX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Square: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Squircle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Squirrel: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Stamp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const StarHalf: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const StarOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Star: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const StepBack: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const StepForward: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Stethoscope: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sticker: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const StickyNote: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Store: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const StretchHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const StretchVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Strikethrough: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Subscript: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SunDim: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SunMedium: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SunMoon: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SunSnow: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sun: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sunrise: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sunset: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Superscript: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SwatchBook: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SwissFranc: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const SwitchCamera: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Sword: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Swords: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Syringe: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Table2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TableCellsMerge: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TableCellsSplit: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TableColumnsSplit: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TableOfContents: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TableProperties: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TableRowsSplit: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Table: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TabletSmartphone: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tablet: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tablets: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tag: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tags: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tally1: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tally2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tally3: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tally4: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tally5: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tangent: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Target: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Telescope: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TentTree: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tent: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Terminal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TestTubeDiagonal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TestTube: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TestTubes: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TextCursorInput: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TextCursor: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TextQuote: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TextSearch: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TextSelect: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Text: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Theater: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ThermometerSnowflake: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ThermometerSun: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Thermometer: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ThumbsDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ThumbsUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TicketCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TicketMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TicketPercent: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TicketPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TicketSlash: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TicketX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Ticket: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TicketsPlane: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tickets: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TimerOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TimerReset: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Timer: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ToggleLeft: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ToggleRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Toilet: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tornado: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Torus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TouchpadOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Touchpad: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TowerControl: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ToyBrick: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tractor: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TrafficCone: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TrainFrontTunnel: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TrainFront: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TrainTrack: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TramFront: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Transgender: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Trash2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Trash: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TreeDeciduous: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TreePalm: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TreePine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Trees: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Trello: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TrendingDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TrendingUpDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TrendingUp: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TriangleAlert: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TriangleDashed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TriangleRight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Triangle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Trophy: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Truck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Turtle: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TvMinimalPlay: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TvMinimal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Tv: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Twitch: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Twitter: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const TypeOutline: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Type: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UmbrellaOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Umbrella: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Underline: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Undo2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UndoDot: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Undo: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UnfoldHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UnfoldVertical: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Ungroup: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const University: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Unlink2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Unlink: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Unplug: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Upload: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Usb: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserCog: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserPen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserRoundCheck: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserRoundCog: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserRoundMinus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserRoundPen: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserRoundPlus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserRoundSearch: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserRoundX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserRound: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserSearch: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UserX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const User: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UsersRound: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Users: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UtensilsCrossed: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Utensils: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const UtilityPole: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Variable: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Vault: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Vegan: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const VenetianMask: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const VenusAndMars: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Venus: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const VibrateOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Vibrate: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const VideoOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Video: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Videotape: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const View: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Voicemail: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Volleyball: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Volume1: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Volume2: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const VolumeOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const VolumeX: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Volume: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Vote: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const WalletCards: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const WalletMinimal: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Wallet: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Wallpaper: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const WandSparkles: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Wand: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Warehouse: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const WashingMachine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Watch: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const WavesLadder: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Waves: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Waypoints: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Webcam: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const WebhookOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Webhook: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Weight: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const WheatOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Wheat: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const WholeWord: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const WifiHigh: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const WifiLow: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const WifiOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const WifiZero: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Wifi: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const WindArrowDown: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Wind: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const WineOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Wine: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Workflow: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Worm: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const WrapText: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Wrench: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const X: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Youtube: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ZapOff: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const Zap: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ZoomIn: (props?: Partial<SVGProps>) => SVGSVGElement;

declare const ZoomOut: (props?: Partial<SVGProps>) => SVGSVGElement;

export { AArrowDown, AArrowUp, ALargeSmall, Accessibility, Activity, AirVent, Airplay, AlarmClock, AlarmClockCheck, AlarmClockMinus, AlarmClockOff, AlarmClockPlus, AlarmSmoke, Album, AlignCenter, AlignCenterHorizontal, AlignCenterVertical, AlignEndHorizontal, AlignEndVertical, AlignHorizontalDistributeCenter, AlignHorizontalDistributeEnd, AlignHorizontalDistributeStart, AlignHorizontalJustifyCenter, AlignHorizontalJustifyEnd, AlignHorizontalJustifyStart, AlignHorizontalSpaceAround, AlignHorizontalSpaceBetween, AlignJustify, AlignLeft, AlignRight, AlignStartHorizontal, AlignStartVertical, AlignVerticalDistributeCenter, AlignVerticalDistributeEnd, AlignVerticalDistributeStart, AlignVerticalJustifyCenter, AlignVerticalJustifyEnd, AlignVerticalJustifyStart, AlignVerticalSpaceAround, AlignVerticalSpaceBetween, Ambulance, Ampersand, Ampersands, Amphora, Anchor, Angry, Annoyed, Antenna, Anvil, Aperture, AppWindow, AppWindowMac, Apple, Archive, ArchiveRestore, ArchiveX, Armchair, ArrowBigDown, ArrowBigDownDash, ArrowBigLeft, ArrowBigLeftDash, ArrowBigRight, ArrowBigRightDash, ArrowBigUp, ArrowBigUpDash, ArrowDown, ArrowDown01, ArrowDown10, ArrowDownAZ, ArrowDownFromLine, ArrowDownLeft, ArrowDownNarrowWide, ArrowDownRight, ArrowDownToDot, ArrowDownToLine, ArrowDownUp, ArrowDownWideNarrow, ArrowDownZA, ArrowLeft, ArrowLeftFromLine, ArrowLeftRight, ArrowLeftToLine, ArrowRight, ArrowRightFromLine, ArrowRightLeft, ArrowRightToLine, ArrowUp, ArrowUp01, ArrowUp10, ArrowUpAZ, ArrowUpDown, ArrowUpFromDot, ArrowUpFromLine, ArrowUpLeft, ArrowUpNarrowWide, ArrowUpRight, ArrowUpToLine, ArrowUpWideNarrow, ArrowUpZA, ArrowsUpFromLine, Asterisk, AtSign, Atom, AudioLines, AudioWaveform, Award, Axe, Axis3d, Baby, Backpack, Badge, BadgeAlert, BadgeCent, BadgeCheck, BadgeDollarSign, BadgeEuro, BadgeHelp, BadgeIndianRupee, BadgeInfo, BadgeJapaneseYen, BadgeMinus, BadgePercent, BadgePlus, BadgePoundSterling, BadgeRussianRuble, BadgeSwissFranc, BadgeX, BaggageClaim, Ban, Banana, Bandage, Banknote, Barcode, Baseline, Bath, Battery, BatteryCharging, BatteryFull, BatteryLow, BatteryMedium, BatteryPlus, BatteryWarning, Beaker, Bean, BeanOff, Bed, BedDouble, BedSingle, Beef, Beer, BeerOff, Bell, BellDot, BellElectric, BellMinus, BellOff, BellPlus, BellRing, BetweenHorizontalEnd, BetweenHorizontalStart, BetweenVerticalEnd, BetweenVerticalStart, BicepsFlexed, Bike, Binary, Binoculars, Biohazard, Bird, Bitcoin, Blend, Blinds, Blocks, Bluetooth, BluetoothConnected, BluetoothOff, BluetoothSearching, Bold, Bolt, Bomb, Bone, Book, BookA, BookAudio, BookCheck, BookCopy, BookDashed, BookDown, BookHeadphones, BookHeart, BookImage, BookKey, BookLock, BookMarked, BookMinus, BookOpen, BookOpenCheck, BookOpenText, BookPlus, BookText, BookType, BookUp, BookUp2, BookUser, BookX, Bookmark, BookmarkCheck, BookmarkMinus, BookmarkPlus, BookmarkX, BoomBox, Bot, BotMessageSquare, BotOff, Box, Boxes, Braces, Brackets, Brain, BrainCircuit, BrainCog, BrickWall, Briefcase, BriefcaseBusiness, BriefcaseConveyorBelt, BriefcaseMedical, BringToFront, Brush, Bug, BugOff, BugPlay, Building, Building2, Bus, BusFront, Cable, CableCar, Cake, CakeSlice, Calculator, Calendar, Calendar1, CalendarArrowDown, CalendarArrowUp, CalendarCheck, CalendarCheck2, CalendarClock, CalendarCog, CalendarDays, CalendarFold, CalendarHeart, CalendarMinus, CalendarMinus2, CalendarOff, CalendarPlus, CalendarPlus2, CalendarRange, CalendarSearch, CalendarSync, CalendarX, CalendarX2, Camera, CameraOff, Candy, CandyCane, CandyOff, Cannabis, Captions, CaptionsOff, Car, CarFront, CarTaxiFront, Caravan, Carrot, CaseLower, CaseSensitive, CaseUpper, CassetteTape, Cast, Castle, Cat, Cctv, ChartArea, ChartBar, ChartBarBig, ChartBarDecreasing, ChartBarIncreasing, ChartBarStacked, ChartCandlestick, ChartColumn, ChartColumnBig, ChartColumnDecreasing, ChartColumnIncreasing, ChartColumnStacked, ChartGantt, ChartLine, ChartNetwork, ChartNoAxesColumn, ChartNoAxesColumnDecreasing, ChartNoAxesColumnIncreasing, ChartNoAxesCombined, ChartNoAxesGantt, ChartPie, ChartScatter, ChartSpline, Check, CheckCheck, ChefHat, Cherry, ChevronDown, ChevronFirst, ChevronLast, ChevronLeft, ChevronRight, ChevronUp, ChevronsDown, ChevronsDownUp, ChevronsLeft, ChevronsLeftRight, ChevronsLeftRightEllipsis, ChevronsRight, ChevronsRightLeft, ChevronsUp, ChevronsUpDown, Chrome, Church, Cigarette, CigaretteOff, Circle, CircleAlert, CircleArrowDown, CircleArrowLeft, CircleArrowOutDownLeft, CircleArrowOutDownRight, CircleArrowOutUpLeft, CircleArrowOutUpRight, CircleArrowRight, CircleArrowUp, CircleCheck, CircleCheckBig, CircleChevronDown, CircleChevronLeft, CircleChevronRight, CircleChevronUp, CircleDashed, CircleDivide, CircleDollarSign, CircleDot, CircleDotDashed, CircleEllipsis, CircleEqual, CircleFadingArrowUp, CircleFadingPlus, CircleGauge, CircleHelp, CircleMinus, CircleOff, CircleParking, CircleParkingOff, CirclePause, CirclePercent, CirclePlay, CirclePlus, CirclePower, CircleSlash, CircleSlash2, CircleSmall, CircleStop, CircleUser, CircleUserRound, CircleX, CircuitBoard, Citrus, Clapperboard, Clipboard, ClipboardCheck, ClipboardCopy, ClipboardList, ClipboardMinus, ClipboardPaste, ClipboardPen, ClipboardPenLine, ClipboardPlus, ClipboardType, ClipboardX, Clock, Clock1, Clock10, Clock11, Clock12, Clock2, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, ClockAlert, ClockArrowDown, ClockArrowUp, Cloud, CloudAlert, CloudCog, CloudDownload, CloudDrizzle, CloudFog, CloudHail, CloudLightning, CloudMoon, CloudMoonRain, CloudOff, CloudRain, CloudRainWind, CloudSnow, CloudSun, CloudSunRain, CloudUpload, Cloudy, Clover, Club, Code, CodeXml, Codepen, Codesandbox, Coffee, Cog, Coins, Columns2, Columns3, Columns4, Combine, Command, Compass, Component, Computer, ConciergeBell, Cone, Construction, Contact, ContactRound, Container, Contrast, Cookie, CookingPot, Copy, CopyCheck, CopyMinus, CopyPlus, CopySlash, CopyX, Copyleft, Copyright, CornerDownLeft, CornerDownRight, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft, CornerUpRight, Cpu, CreativeCommons, CreditCard, Croissant, Crop, Cross, Crosshair, Crown, Cuboid, CupSoda, Currency, Cylinder, Dam, Database, DatabaseBackup, DatabaseZap, Delete, Dessert, Diameter, Diamond, DiamondMinus, DiamondPercent, DiamondPlus, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Dices, Diff, Disc, Disc2, Disc3, DiscAlbum, Divide, Dna, DnaOff, Dock, Dog, DollarSign, Donut, DoorClosed, DoorOpen, Dot, Download, DraftingCompass, Drama, Dribbble, Drill, Droplet, DropletOff, Droplets, Drum, Drumstick, Dumbbell, Ear, EarOff, Earth, EarthLock, Eclipse, Egg, EggFried, EggOff, Ellipsis, EllipsisVertical, Equal, EqualApproximately, EqualNot, Eraser, EthernetPort, Euro, Expand, ExternalLink, Eye, EyeClosed, EyeOff, Facebook, Factory, Fan, FastForward, Feather, Fence, FerrisWheel, Figma, File, FileArchive, FileAudio, FileAudio2, FileAxis3d, FileBadge, FileBadge2, FileBox, FileChartColumn, FileChartColumnIncreasing, FileChartLine, FileChartPie, FileCheck, FileCheck2, FileClock, FileCode, FileCode2, FileCog, FileDiff, FileDigit, FileDown, FileHeart, FileImage, FileInput, FileJson, FileJson2, FileKey, FileKey2, FileLock, FileLock2, FileMinus, FileMinus2, FileMusic, FileOutput, FilePen, FilePenLine, FilePlus, FilePlus2, FileQuestion, FileScan, FileSearch, FileSearch2, FileSliders, FileSpreadsheet, FileStack, FileSymlink, FileTerminal, FileText, FileType, FileType2, FileUp, FileUser, FileVideo, FileVideo2, FileVolume, FileVolume2, FileWarning, FileX, FileX2, Files, Film, Filter, FilterX, Fingerprint, FireExtinguisher, Fish, FishOff, FishSymbol, Flag, FlagOff, FlagTriangleLeft, FlagTriangleRight, Flame, FlameKindling, Flashlight, FlashlightOff, FlaskConical, FlaskConicalOff, FlaskRound, FlipHorizontal, FlipHorizontal2, FlipVertical, FlipVertical2, Flower, Flower2, Focus, FoldHorizontal, FoldVertical, Folder, FolderArchive, FolderCheck, FolderClock, FolderClosed, FolderCode, FolderCog, FolderDot, FolderDown, FolderGit, FolderGit2, FolderHeart, FolderInput, FolderKanban, FolderKey, FolderLock, FolderMinus, FolderOpen, FolderOpenDot, FolderOutput, FolderPen, FolderPlus, FolderRoot, FolderSearch, FolderSearch2, FolderSymlink, FolderSync, FolderTree, FolderUp, FolderX, Folders, Footprints, Forklift, Forward, Frame, Framer, Frown, Fuel, Fullscreen, GalleryHorizontal, GalleryHorizontalEnd, GalleryThumbnails, GalleryVertical, GalleryVerticalEnd, Gamepad, Gamepad2, Gauge, Gavel, Gem, Ghost, Gift, GitBranch, GitBranchPlus, GitCommitHorizontal, GitCommitVertical, GitCompare, GitCompareArrows, GitFork, GitGraph, GitMerge, GitPullRequest, GitPullRequestArrow, GitPullRequestClosed, GitPullRequestCreate, GitPullRequestCreateArrow, GitPullRequestDraft, Github, Gitlab, GlassWater, Glasses, Globe, GlobeLock, Goal, Grab, GraduationCap, Grape, Grid2x2, Grid2x2Check, Grid2x2Plus, Grid2x2X, Grid3x3, Grip, GripHorizontal, GripVertical, Group, Guitar, Ham, Hammer, Hand, HandCoins, HandHeart, HandHelping, HandMetal, HandPlatter, Handshake, HardDrive, HardDriveDownload, HardDriveUpload, HardHat, Hash, Haze, HdmiPort, Heading, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, HeadphoneOff, Headphones, Headset, Heart, HeartCrack, HeartHandshake, HeartOff, HeartPulse, Heater, Hexagon, Highlighter, History, Hop, HopOff, Hospital, Hotel, Hourglass, House, HousePlug, HousePlus, HouseWifi, IceCreamBowl, IceCreamCone, IdCard, Image, ImageDown, ImageMinus, ImageOff, ImagePlay, ImagePlus, ImageUp, ImageUpscale, Images, Import, Inbox, IndentDecrease, IndentIncrease, IndianRupee, InfinityIcon, Info, InspectionPanel, Instagram, Italic, IterationCcw, IterationCw, JapaneseYen, Joystick, Kanban, Key, KeyRound, KeySquare, Keyboard, KeyboardMusic, KeyboardOff, Lamp, LampCeiling, LampDesk, LampFloor, LampWallDown, LampWallUp, LandPlot, Landmark, Languages, Laptop, LaptopMinimal, LaptopMinimalCheck, Lasso, LassoSelect, Laugh, Layers, Layers2, LayoutDashboard, LayoutGrid, LayoutList, LayoutPanelLeft, LayoutPanelTop, LayoutTemplate, Leaf, LeafyGreen, Lectern, LetterText, Library, LibraryBig, LifeBuoy, Ligature, Lightbulb, LightbulbOff, Link, Link2, Link2Off, Linkedin, List, ListCheck, ListChecks, ListCollapse, ListEnd, ListFilter, ListFilterPlus, ListMinus, ListMusic, ListOrdered, ListPlus, ListRestart, ListStart, ListTodo, ListTree, ListVideo, ListX, Loader, LoaderCircle, LoaderPinwheel, Locate, LocateFixed, LocateOff, Lock, LockKeyhole, LockKeyholeOpen, LockOpen, LogIn, LogOut, Logs, Lollipop, Luggage, Magnet, Mail, MailCheck, MailMinus, MailOpen, MailPlus, MailQuestion, MailSearch, MailWarning, MailX, Mailbox, Mails, Map, MapPin, MapPinCheck, MapPinCheckInside, MapPinHouse, MapPinMinus, MapPinMinusInside, MapPinOff, MapPinPlus, MapPinPlusInside, MapPinX, MapPinXInside, MapPinned, MapPlus, Mars, MarsStroke, Martini, Maximize, Maximize2, Medal, Megaphone, MegaphoneOff, Meh, MemoryStick, Menu, Merge, MessageCircle, MessageCircleCode, MessageCircleDashed, MessageCircleHeart, MessageCircleMore, MessageCircleOff, MessageCirclePlus, MessageCircleQuestion, MessageCircleReply, MessageCircleWarning, MessageCircleX, MessageSquare, MessageSquareCode, MessageSquareDashed, MessageSquareDiff, MessageSquareDot, MessageSquareHeart, MessageSquareLock, MessageSquareMore, MessageSquareOff, MessageSquarePlus, MessageSquareQuote, MessageSquareReply, MessageSquareShare, MessageSquareText, MessageSquareWarning, MessageSquareX, MessagesSquare, Mic, MicOff, MicVocal, Microchip, Microscope, Microwave, Milestone, Milk, MilkOff, Minimize, Minimize2, Minus, Monitor, MonitorCheck, MonitorCog, MonitorDot, MonitorDown, MonitorOff, MonitorPause, MonitorPlay, MonitorSmartphone, MonitorSpeaker, MonitorStop, MonitorUp, MonitorX, Moon, MoonStar, Mountain, MountainSnow, Mouse, MouseOff, MousePointer, MousePointer2, MousePointerBan, MousePointerClick, Move, Move3d, MoveDiagonal, MoveDiagonal2, MoveDown, MoveDownLeft, MoveDownRight, MoveHorizontal, MoveLeft, MoveRight, MoveUp, MoveUpLeft, MoveUpRight, MoveVertical, Music, Music2, Music3, Music4, Navigation, Navigation2, Navigation2Off, NavigationOff, Network, Newspaper, Nfc, NonBinary, Notebook, NotebookPen, NotebookTabs, NotebookText, NotepadText, NotepadTextDashed, Nut, NutOff, Octagon, OctagonAlert, OctagonMinus, OctagonPause, OctagonX, Omega, Option, Orbit, Origami, Package, Package2, PackageCheck, PackageMinus, PackageOpen, PackagePlus, PackageSearch, PackageX, PaintBucket, PaintRoller, Paintbrush, PaintbrushVertical, Palette, PanelBottom, PanelBottomClose, PanelBottomDashed, PanelBottomOpen, PanelLeft, PanelLeftClose, PanelLeftDashed, PanelLeftOpen, PanelRight, PanelRightClose, PanelRightDashed, PanelRightOpen, PanelTop, PanelTopClose, PanelTopDashed, PanelTopOpen, PanelsLeftBottom, PanelsRightBottom, PanelsTopLeft, Paperclip, Parentheses, ParkingMeter, PartyPopper, Pause, PawPrint, PcCase, Pen, PenLine, PenOff, PenTool, Pencil, PencilLine, PencilOff, PencilRuler, Pentagon, Percent, PersonStanding, PhilippinePeso, Phone, PhoneCall, PhoneForwarded, PhoneIncoming, PhoneMissed, PhoneOff, PhoneOutgoing, Pi, Piano, Pickaxe, PictureInPicture, PictureInPicture2, PiggyBank, Pilcrow, PilcrowLeft, PilcrowRight, Pill, PillBottle, Pin, PinOff, Pipette, Pizza, Plane, PlaneLanding, PlaneTakeoff, Play, Plug, Plug2, PlugZap, Plus, Pocket, PocketKnife, Podcast, Pointer, PointerOff, Popcorn, Popsicle, PoundSterling, Power, PowerOff, Presentation, Printer, PrinterCheck, Projector, Proportions, Puzzle, Pyramid, QrCode, Quote, Rabbit, Radar, Radiation, Radical, Radio, RadioReceiver, RadioTower, Radius, RailSymbol, Rainbow, Rat, Ratio, Receipt, ReceiptCent, ReceiptEuro, ReceiptIndianRupee, ReceiptJapaneseYen, ReceiptPoundSterling, ReceiptRussianRuble, ReceiptSwissFranc, ReceiptText, RectangleEllipsis, RectangleHorizontal, RectangleVertical, Recycle, Redo, Redo2, RedoDot, RefreshCcw, RefreshCcwDot, RefreshCw, RefreshCwOff, Refrigerator, Regex, RemoveFormatting, Repeat, Repeat1, Repeat2, Replace, ReplaceAll, Reply, ReplyAll, Rewind, Ribbon, Rocket, RockingChair, RollerCoaster, Rotate3d, RotateCcw, RotateCcwSquare, RotateCw, RotateCwSquare, Route, RouteOff, Router, Rows2, Rows3, Rows4, Rss, Ruler, RussianRuble, Sailboat, Salad, Sandwich, Satellite, SatelliteDish, Save, SaveAll, SaveOff, Scale, Scale3d, Scaling, Scan, ScanBarcode, ScanEye, ScanFace, ScanHeart, ScanLine, ScanQrCode, ScanSearch, ScanText, School, Scissors, ScissorsLineDashed, ScreenShare, ScreenShareOff, Scroll, ScrollText, Search, SearchCheck, SearchCode, SearchSlash, SearchX, Section, Send, SendHorizontal, SendToBack, SeparatorHorizontal, SeparatorVertical, Server, ServerCog, ServerCrash, ServerOff, Settings, Settings2, Shapes, Share, Share2, Sheet, Shell, Shield, ShieldAlert, ShieldBan, ShieldCheck, ShieldEllipsis, ShieldHalf, ShieldMinus, ShieldOff, ShieldPlus, ShieldQuestion, ShieldUser, ShieldX, Ship, ShipWheel, Shirt, ShoppingBag, ShoppingBasket, ShoppingCart, Shovel, ShowerHead, Shrink, Shrub, Shuffle, Sigma, Signal, SignalHigh, SignalLow, SignalMedium, SignalZero, Signature, Signpost, SignpostBig, Siren, SkipBack, SkipForward, Skull, Slack, Slash, Slice, SlidersHorizontal, SlidersVertical, Smartphone, SmartphoneCharging, SmartphoneNfc, Smile, SmilePlus, Snail, Snowflake, Sofa, Soup, Space, Spade, Sparkle, Sparkles, Speaker, Speech, SpellCheck, SpellCheck2, Spline, Split, SprayCan, Sprout, Square, SquareActivity, SquareArrowDown, SquareArrowDownLeft, SquareArrowDownRight, SquareArrowLeft, SquareArrowOutDownLeft, SquareArrowOutDownRight, SquareArrowOutUpLeft, SquareArrowOutUpRight, SquareArrowRight, SquareArrowUp, SquareArrowUpLeft, SquareArrowUpRight, SquareAsterisk, SquareBottomDashedScissors, SquareChartGantt, SquareCheck, SquareCheckBig, SquareChevronDown, SquareChevronLeft, SquareChevronRight, SquareChevronUp, SquareCode, SquareDashed, SquareDashedBottom, SquareDashedBottomCode, SquareDashedKanban, SquareDashedMousePointer, SquareDivide, SquareDot, SquareEqual, SquareFunction, SquareKanban, SquareLibrary, SquareM, SquareMenu, SquareMinus, SquareMousePointer, SquareParking, SquareParkingOff, SquarePen, SquarePercent, SquarePi, SquarePilcrow, SquarePlay, SquarePlus, SquarePower, SquareRadical, SquareScissors, SquareSigma, SquareSlash, SquareSplitHorizontal, SquareSplitVertical, SquareSquare, SquareStack, SquareTerminal, SquareUser, SquareUserRound, SquareX, Squircle, Squirrel, Stamp, Star, StarHalf, StarOff, StepBack, StepForward, Stethoscope, Sticker, StickyNote, Store, StretchHorizontal, StretchVertical, Strikethrough, Subscript, Sun, SunDim, SunMedium, SunMoon, SunSnow, Sunrise, Sunset, Superscript, SwatchBook, SwissFranc, SwitchCamera, Sword, Swords, Syringe, Table, Table2, TableCellsMerge, TableCellsSplit, TableColumnsSplit, TableOfContents, TableProperties, TableRowsSplit, Tablet, TabletSmartphone, Tablets, Tag, Tags, Tally1, Tally2, Tally3, Tally4, Tally5, Tangent, Target, Telescope, Tent, TentTree, Terminal, TestTube, TestTubeDiagonal, TestTubes, Text, TextCursor, TextCursorInput, TextQuote, TextSearch, TextSelect, Theater, Thermometer, ThermometerSnowflake, ThermometerSun, ThumbsDown, ThumbsUp, Ticket, TicketCheck, TicketMinus, TicketPercent, TicketPlus, TicketSlash, TicketX, Tickets, TicketsPlane, Timer, TimerOff, TimerReset, ToggleLeft, ToggleRight, Toilet, Tornado, Torus, Touchpad, TouchpadOff, TowerControl, ToyBrick, Tractor, TrafficCone, TrainFront, TrainFrontTunnel, TrainTrack, TramFront, Transgender, Trash, Trash2, TreeDeciduous, TreePalm, TreePine, Trees, Trello, TrendingDown, TrendingUp, TrendingUpDown, Triangle, TriangleAlert, TriangleDashed, TriangleRight, Trophy, Truck, Turtle, Tv, TvMinimal, TvMinimalPlay, Twitch, Twitter, Type, TypeOutline, Umbrella, UmbrellaOff, Underline, Undo, Undo2, UndoDot, UnfoldHorizontal, UnfoldVertical, Ungroup, University, Unlink, Unlink2, Unplug, Upload, Usb, User, UserCheck, UserCog, UserMinus, UserPen, UserPlus, UserRound, UserRoundCheck, UserRoundCog, UserRoundMinus, UserRoundPen, UserRoundPlus, UserRoundSearch, UserRoundX, UserSearch, UserX, Users, UsersRound, Utensils, UtensilsCrossed, UtilityPole, Variable, Vault, Vegan, VenetianMask, Venus, VenusAndMars, Vibrate, VibrateOff, Video, VideoOff, Videotape, View, Voicemail, Volleyball, Volume, Volume1, Volume2, VolumeOff, VolumeX, Vote, Wallet, WalletCards, WalletMinimal, Wallpaper, Wand, WandSparkles, Warehouse, WashingMachine, Watch, Waves, WavesLadder, Waypoints, Webcam, Webhook, WebhookOff, Weight, Wheat, WheatOff, WholeWord, Wifi, WifiHigh, WifiLow, WifiOff, WifiZero, Wind, WindArrowDown, Wine, WineOff, Workflow, Worm, WrapText, Wrench, X, Youtube, Zap, ZapOff, ZoomIn, ZoomOut };
