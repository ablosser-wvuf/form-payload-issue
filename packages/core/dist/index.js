var An = Object.defineProperty;
var On = (r, e, t) => e in r ? An(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var a = (r, e, t) => (On(r, typeof e != "symbol" ? e + "" : e, t), t), ht = (r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
};
var h = (r, e, t) => (ht(r, e, "read from private field"), t ? t.call(r) : e.get(r)), v = (r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, D = (r, e, t, n) => (ht(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t);
var b = (r, e, t) => (ht(r, e, "access private method"), t);
import { jsx as u, jsxs as fe, Fragment as ct } from "@emotion/react/jsx-runtime";
import { css as me, cx as ye } from "@emotion/css";
import { observer as Dr } from "mobx-react";
import { assign as Z, clone as pt, startCase as Vr, reduce as Nn, camelCase as jn, isEmpty as Xt, isArray as $n, merge as er, isUndefined as zn, keysIn as Mn, forIn as Ln, isObject as Et, upperFirst as In } from "lodash-es";
import * as Bn from "react";
import { createContext as Wn, useContext as xr, useRef as Pe, useState as kt, useEffect as j, useCallback as Y, useMemo as K, createElement as Sr, Fragment as Kn, useImperativeHandle as Jn, forwardRef as Hn } from "react";
import { makeAutoObservable as J, reaction as Un, makeObservable as Tr, observable as P, autorun as Ye, untracked as Rr, runInAction as Zn, configure as qn } from "mobx";
import { CacheProvider as Yn } from "@emotion/react";
import tr from "@emotion/cache";
import Qn from "stylis-plugin-rtl";
import { filter as Ce, Subject as Fr, debounceTime as _n, map as Pt, switchMap as Gn, catchError as Xn } from "rxjs";
import { FluentResource as kr, FluentBundle as Ar } from "@fluent/bundle";
import { z as N } from "zod";
const fa = () => (Math.random() * 1e18).toString(36).slice(0, 5).toUpperCase() + "";
function eo(r, e) {
  return r.reduce((t, n, o, i) => {
    var s;
    return (t[s = e(n, o, i)] || (t[s] = [])).push(n), t;
  }, {});
}
var Ve;
class M {
  /**
   * Creates component metadata for the form viewer.
   * @param component the React component.
   * @param name the component name.
   * @param actionsInitializer the function to initialize actions in the component.
   * @param valued the name of the component property where the component value is stored.
   * @param valueType the type of the component value.
   * @param defaultProps the component's default property values.
   * @param css the component's CSS values.
   * @param wrapperCss the component's wrapper CSS values.
   * @param typeName the component type name.
   * @param kind the component kind.
   * @param readOnly the name of the component property that stores the read-only flag.
   * @param propsBindingTypes the component property binding types.
   * @template T the type of React component properties.
   */
  constructor(e, t, n, o, i, s, c, l, d, f = "component", p, g = {}) {
    v(this, Ve, void 0);
    /**
     * The React component.
     */
    a(this, "component");
    this.actionsInitializer = n, this.valued = o, this.valueType = i, this.defaultProps = s, this.css = c, this.wrapperCss = l, this.typeName = d, this.kind = f, this.readOnly = p, this.propsBindingTypes = g, this.component = Dr(e), this.component.displayName = e.displayName || e.name, D(this, Ve, t);
  }
  /**
   * @returns the component name, or type if there is no component name.
   */
  get name() {
    return h(this, Ve) ?? this.type;
  }
  /**
   * @returns the component type name.
   */
  get type() {
    return this.typeName || this.component.displayName || this.component.name;
  }
}
Ve = new WeakMap();
var ee = /* @__PURE__ */ ((r) => (r.LTR = "ltr", r.RTL = "rtl", r))(ee || {});
function te(r, e = null) {
  const t = Wn(e);
  t.displayName = r;
  const n = to(t), o = ro(t);
  return [n, o, t];
}
function to(r) {
  return () => {
    const e = xr(r);
    if (!e)
      throw new Error(`The context ${r.displayName} didn't found!`);
    return e;
  };
}
function ro(r) {
  return r.Provider;
}
const [
  /**
   * **Internal use only.**
   */
  no,
  /**
   * **Internal use only.**
   */
  oo
] = te("RepeaterPropsContext"), At = (r) => {
  const { className: e } = no();
  return /* @__PURE__ */ u("div", { className: e, children: r.children });
};
At.displayName = "RepeaterItem";
const io = new M(At, "RepeaterItem"), [
  /**
   * @returns the {@link BuilderContext} value.
   */
  so,
  /**
   * The FormBuilder context provider.
   */
  ma,
  /**
   * The FormBuilder context.
   */
  ya
] = te("BuilderContext", {
  builderMode: "viewer"
}), [
  /**
   * **Internal use only.**
   */
  A,
  /**
   * **Internal use only.**
   */
  Ot,
  /**
   * **Internal use only.**
   */
  ao
] = te("StoreContext");
class Ie {
  /**
   * Creates metadata for a React component property.
   * @param key the property name.
   * @param name the human-readable property name.
   */
  constructor(e, t) {
    /**
     * The component property key.
     */
    a(this, "key");
    /**
     * The component property name.
     */
    a(this, "name");
    /**
     * The name of the component's property editor.
     */
    a(this, "editor");
    /**
     * The hint for the component property.
     */
    a(this, "hint");
    /**
     * True if the property value can be localized, false otherwise.
     */
    a(this, "localizable", !1);
    /**
     * True if the property value is bound to form data, false otherwise.
     */
    a(this, "valued", !1);
    /**
     * True if the property value controls a read-only flag, false otherwise.
     */
    a(this, "readOnly", !1);
    /**
     * Additional properties for the component property editor.
     */
    a(this, "editorProps");
    /**
     * The default property value.
     */
    a(this, "default");
    /**
     * The data type for the value of the property.
     */
    a(this, "type");
    /**
     * True if the component property is required, false otherwise.
     */
    a(this, "required", !1);
    /**
     * The function for validating the property value.
     */
    a(this, "validator");
    /**
     * Message and/or error code for the validation function.
     */
    a(this, "errorMap");
    /**
     * True if the property value can be a calculated property, false otherwise.
     */
    a(this, "calculable", !0);
    /**
     * A function that returns a string containing the source code of the function to bind child components.
     * @param props the properties of the component, which are available only inside Form Builder Designer.
     */
    a(this, "slotConditionBuilder");
    /**
     *  The component property binding type.
     */
    a(this, "bindingType");
    this.key = e, this.name = t;
  }
  /**
   * @returns the metadata clone.
   */
  clone() {
    return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
  }
}
class Or extends Ie {
}
class co extends Ie {
}
class lo extends Ie {
}
class Nr extends Ie {
  constructor() {
    super(...arguments);
    /**
     * Possible values for the property.
     */
    a(this, "data");
  }
}
const ga = (r) => r instanceof Nr;
class uo extends Ie {
}
const va = "HH:mm:ss", ho = {
  Property: Nr,
  Container: Or,
  Event: co,
  Module: lo,
  Style: uo
};
class po {
  constructor() {
    /**
     * Type of component property description in the form builder.
     */
    a(this, "annotationType", "Module");
    /**
     * Flag if true, the property name will be automatically converted in the designer from a camel case string to a human-readable string.
     */
    a(this, "autoName", !0);
  }
}
class jr {
  constructor() {
    /**
     * Partial metadata for a component property.
     */
    a(this, "annotation");
    /**
     * Options for building an annotation.
     */
    a(this, "options", new po());
  }
  /**
   * @returns the main component property that is used as form data and for validation rules.
   */
  get valued() {
    return this.setup({ valued: !0 });
  }
  /**
   * @returns the component property that can be localized.
   */
  get localize() {
    return this.setup({ localizable: !0 });
  }
  /**
   * @returns the non-localizable component property.
   */
  get notLocalize() {
    return this.setup({ localizable: !1 });
  }
  /**
   * Specifies the name of the component property.
   * @param name the property name.
   * @returns the modified instance of the builder.
   */
  named(e) {
    return this.setup({ name: e });
  }
  /**
   * Adds the hint to the property name of the component.
   * @param hint the hint.
   * @returns the modified instance of the builder.
   */
  hinted(e) {
    return this.setup({ hint: e });
  }
  /**
   * Marks the component property as calculable.
   * @param calculable true if the property is calculable.
   * @returns the modified instance of the builder.
   */
  calculable(e) {
    return this.setup({ calculable: e });
  }
  /**
   * Modifies the component property metadata builder with custom options.
   * @param options the custom options.
   * @returns the modified instance of the builder.
   */
  setup(e) {
    const { annotationType: t, autoName: n, ...o } = e, i = this.clone();
    return i.options.annotationType = t ?? i.options.annotationType, i.options.autoName = n ?? i.options.autoName, Z(i.annotation, o), i;
  }
  /**
   * Clones the instance of the builder.
   * @returns the cloned instance of the builder.
   */
  clone() {
    const e = pt(this);
    return e.options = pt(this.options), e.annotation = pt(this.annotation), e.annotation ?? (e.annotation = {}), e;
  }
  /**
   * Creates component property metadata for the form builder.
   * @param key the unique key of the component property.
   * @returns the instance of the component property metadata for the form builder.
   */
  build(e) {
    const t = this.getName(e), n = new ho[this.options.annotationType](e, t);
    return Z(n, this.annotation), n;
  }
  /**
   * Sets custom properties for the component's property editor.
   * @param props the custom properties
   * @returns the modified instance of the builder.
   */
  withEditorProps(e) {
    const t = this.clone();
    return Z(t.annotation, { editorProps: e }), t;
  }
  /**
   * Hides the component property editor.
   * @returns the modified instance of the builder.
   */
  hideEditor() {
    const e = this.clone();
    return Z(e.annotation, { editor: void 0 }), e;
  }
  /**
   * Returns the annotation name.
   * @param key the property name
   * @returns the annotation name.
   */
  getName(e) {
    return this.annotation.name ?? (this.options.autoName ? Vr(e) : e);
  }
}
class Nt extends jr {
  /**
   * Marks the component property as required.
   * @returns the modified instance of the builder.
   */
  get required() {
    return this.setup({ required: !0 });
  }
  /**
   * Sets the default value for the component property.
   * @param value the default value.
   * @returns the modified instance of the builder.
   */
  default(e) {
    return this.setup({ default: e });
  }
  /**
   * Modifies the component property metadata builder with validation properties.
   * @param validator the validation function.
   * @param errorMap the validation error settings.
   * @returns the modified instance of the builder.
   */
  validated(e, t) {
    return this.setup({ validator: e, errorMap: t });
  }
}
class Qe extends Nt {
  constructor() {
    super(...arguments);
    a(this, "subType");
  }
  /**
   * Sets the component's value type to an array of strings.
   * @returns the modified instance of the builder.
   */
  get ofString() {
    const t = new Qe().setup({ ...this.options, ...this.annotation, type: "array", editor: "arrayOfString" });
    return t.subType = "string", t;
  }
  /**
   * Sets the component's value type to an array of objects.
   * @returns the modified instance of the builder.
   */
  get ofObject() {
    const t = new Qe().setup({ ...this.options, ...this.annotation, type: "array" });
    return t.subType = "object", t;
  }
}
class $r extends Nt {
  constructor() {
    super(...arguments);
    /**
     * Possible values for the property.
     */
    a(this, "values");
    /**
     * Labels for the possible values of the property.
     */
    a(this, "labels");
  }
  /**
   * Marks the component property as required.
   * @returns the modified instance of the builder.
   */
  get required() {
    return super.required;
  }
  /**
   * Sets the labels for predefined values.
   * @param labels the labels.
   * @returns the modified instance of the builder.
   */
  labeled(...t) {
    const n = this.clone();
    return n.labels = t, n;
  }
  /**
   * Creates component property metadata for the form builder.
   * @param key the unique key of the component property.
   * @returns the instance of the component property metadata for the form builder.
   */
  build(t) {
    const n = super.build(t);
    return n.data = this.values.map((o, i) => {
      var c;
      return { label: ((c = this.labels) == null ? void 0 : c[i]) ?? Vr(o.toString()), value: o };
    }), n;
  }
  /**
   * Sets the default value for the component property.
   * @param value the default value, can be an array of values.
   * @returns the modified instance of the builder.
   */
  default(t) {
    return this.setup({ default: t });
  }
}
class fo extends $r {
  /**
   * Sets the radio buttons as the component's property editor.
   * @returns the modified instance of the builder.
   */
  radio() {
    return this.setup({ editor: "radio" });
  }
  /**
   * Sets the default value for the component property.
   * @param value the default value.
   * @returns the modified instance of the builder.
   */
  default(e) {
    return super.default(e);
  }
}
class mo extends $r {
  /**
   * Sets the default value for the component property.
   * @param value the default value.
   * @returns the modified instance of the builder.
   */
  default(e) {
    return super.default(e);
  }
}
const ot = class ot extends jr {
  /**
   * Creates a component property metadata builder.
   * @param editor the property editor type.
   * @template T the property type.
   */
  constructor(e) {
    super(), this.annotation = { editor: e };
  }
  /**
   * Sets the property as a "array" property.
   * @returns the instance of the metadata property builder.
   */
  get array() {
    return new Qe().setup({ ...this.options, ...this.annotation, type: "array" });
  }
  /**
   * Sets the field type for the component property.
   * @param type the field type.
   * @returns the instance of the metadata property builder.
   */
  typed(e) {
    return new Nt().setup({ ...this.options, ...this.annotation, type: e });
  }
  /**
   * Sets the property as a "single select" property.
   * @param values the possible values for the property.
   * @returns the instance of the metadata property builder.
   */
  oneOf(...e) {
    const t = new fo().setup({ ...this.options, ...this.annotation, type: "enum" });
    return t.values = e, t;
  }
  /**
   * Sets the property as a "multiple select" property.
   * @param values the possible values for the property.
   * @returns the instance of the metadata property builder.
   */
  someOf(...e) {
    const t = new mo().setup({ ...this.options, ...this.annotation, type: "enum" });
    return t.values = e, t;
  }
};
/**
 * Creates a component property metadata builder.
 * @param editor the property editor type.
 * @template T the property type.
 * @returns the component property metadata builder.
 */
a(ot, "create", (e) => new ot(e));
let _e = ot;
const wa = (r) => r instanceof Or, I = _e.create;
function R(r) {
  return I(r).setup({ annotationType: "Property" });
}
function zr(r) {
  return r.reduce((e, t) => (e[t.key] = t.default, e), {});
}
function he(r) {
  return {
    any: {
      object: zr(r)
    }
  };
}
class yo extends _e {
  /**
   * Creates a component property metadata builder.
   * @param editor the property editor type.
   * @template T the property type.
   */
  constructor(e) {
    super(e);
  }
  /**
   * Specifies a function that will create conditions that check if a child component can be bound to a parent slot.
   * @param slotConditionBuilder the function that returns a string containing the source code of the function to bind child components.
   * @returns the instance of the metadata property builder.
   */
  withSlotConditionBuilder(e) {
    return this.setup({ slotConditionBuilder: e });
  }
}
function Mr(r) {
  return new yo(r);
}
const go = (r, e) => e.reduceScreen((t, n) => n.key === r ? t + 1 : t, 0) === 1, ba = I("key").typed("string").required.hinted("Unique component key").calculable(!1).validated(go, { code: "unique_key", message: "The key must be unique!" }).build("key"), vo = I("htmlAttributes"), wo = I("validation"), Be = R("string").typed("string").localize, Ca = R("object").typed("object"), Lr = R("boolean").typed("boolean"), Ea = Lr.setup({ readOnly: !0 }), Pa = R("number").typed("number"), bo = R("size").typed("string"), Da = R("date").typed("date"), Va = R("time").typed("time"), Co = R("array").array, xa = R("color").typed("string"), Sa = I("tooltipType").typed("string"), oe = I("size").setup({ calculable: !1 }), rr = I("color").setup({ calculable: !1 }), Ta = R("string").calculable(!0).build("className"), nr = I("event").setup({ annotationType: "Event" }), Ir = Mr("node").setup({ annotationType: "Container" }), Ra = Mr("nodeArray").setup({ annotationType: "Container", bindingType: "array" }), He = R("oneOf").oneOf.bind(R("oneOf")), Fa = R("someOf").someOf.bind(R("someOf")), Eo = I("tooltipProps"), Po = I("renderWhen").typed("boolean"), lt = {
  width: oe.setup({ default: "100%" }),
  height: oe,
  marginTop: oe,
  marginRight: oe,
  marginBottom: oe,
  marginLeft: oe,
  color: rr,
  backgroundColor: rr
}, jt = {
  flexDirection: He("column", "row", "column-reverse", "row-reverse"),
  gap: bo,
  alignItems: He("start", "center", "baseline", "end", "stretch"),
  justifyContent: He(
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "start",
    "end",
    "left",
    "right"
  ),
  flexWrap: He("wrap", "nowrap", "wrap-reverse")
};
function ge(r, e = {}) {
  return Nn(r, (t, n, o) => {
    var i;
    return t.push(((i = n == null ? void 0 : n.setup(e)) == null ? void 0 : i.build(o)) ?? Be.setup(e).build(o)), t;
  }, []);
}
function pe(r) {
  return ge(r, { annotationType: "Style", calculable: !1 });
}
const Do = (r) => {
  const e = so().builderMode === "viewer", n = A().parentStore;
  return e && !r.children ? null : /* @__PURE__ */ u("div", { className: r.wrapperClassName, children: e || n ? r.children : /* @__PURE__ */ u(At, { children: r.children }) });
}, Br = (r) => /* @__PURE__ */ u(oo, { value: r, children: /* @__PURE__ */ u(Do, { wrapperClassName: r.wrapperClassName, children: r.children }) });
Br.displayName = "Repeater";
const Wr = Co.valued.setup({ editor: "arrayOfObject" }), Kr = ge({
  itemRenderWhen: Be.notLocalize.hinted("The expression or function to conditionally render a repeater item."),
  value: Wr,
  children: Ir
}), { flexDirection: Jr, gap: Hr } = jt, Ur = pe({
  display: Be.default("flex").hideEditor(),
  flexDirection: Jr.default("column").named("Item direction").hinted("Item direction"),
  gap: Hr.default("20px").named("Item gap").hinted("Item gap")
}), Vo = he(Ur), Zr = pe({
  display: Be.default("flex").hideEditor(),
  flexDirection: Jr.default("column").hinted("Repeater direction"),
  gap: Hr.default("20px").hinted("Repeater gap")
}), xo = he(Zr), So = Kr.filter((r) => typeof r.default < "u").reduce((r, e) => (r[e.key] = e.default, r), {}), Ge = new M(
  Br,
  "Repeater",
  void 0,
  "value",
  "array",
  So,
  Vo,
  xo,
  "Repeater",
  "repeater"
), Q = (async function() {
}).constructor;
class T {
  /**
   * Creates a new instance of the ActionDefinition class.
   * @param func the function of an action.
   * @param body the source code of the Action.
   * @param params the parameters of the Action.
   */
  constructor(e, t, n = {}) {
    this.func = e, this.body = t, this.params = n;
  }
  /**
   * Creates an action from the function.
   * @param func the function of an action.
   * @param params the parameters of the Action.
   * @returns the new instance of the ActionDefinition class.
   */
  static functionalAction(e, t = {}) {
    return new T(e, void 0, t);
  }
  /**
   * Creates an action from the source code.
   * @param body the source code of the Action.
   * @param params the parameters of the Action.
   * @returns the new instance of the ActionDefinition class.
   */
  static sourceAction(e, t = {}) {
    const n = Q("e, args", e);
    return new T(n, e, t);
  }
  /**
   * Correctly creates the {@link ActionDefinition} from deserialized data.
   * @param value the deserialized data.
   * @returns the ActionDefinition instance.
   */
  static createFromObject(e) {
    return T.sourceAction(e.body, e.params);
  }
}
const To = (r) => {
  const e = {};
  return r && Object.keys(r).forEach((t) => {
    const n = r[t];
    e[t] = T.createFromObject(n);
  }), e;
}, $t = "onDidMount", zt = "onWillUnmount";
function ft(r) {
  return new Proxy(r, {
    get(e, t) {
      return t === "toJSON" ? () => e.data : e.data[t];
    },
    set(e, t, n) {
      var o;
      return (o = e.fields.get(t)) == null || o.setValue(n), !0;
    }
  });
}
var xe, Se, Te, Re, it;
class Dt {
  /**
   * Creates arguments for the event handler.
   * @param type the event type.
   * @param sender the component that triggered the event.
   * @param store the form viewer settings.
   * @param args the event arguments.
   * @param state the {@link ComponentState} instance.
   */
  constructor(e, t, n, o, i) {
    v(this, xe, void 0);
    v(this, Se, void 0);
    v(this, Te, void 0);
    /**
     * The component properties that were used to render the sender component.
     */
    a(this, "renderedProps");
    /**
     * The index of the component in the array, if the component is in the array.
     */
    a(this, "index");
    /**
     * Sets user-defined properties for the React component that override other properties of the component.
     * @param props the component properties.
     */
    a(this, "setUserDefinedProps", (e) => {
      this.sender.userDefinedProps = e;
    });
    v(this, Re, (e) => !!(e && e.target && e.type && e.preventDefault));
    v(this, it, (e) => !h(this, Re).call(this, e));
    var l;
    this.type = e, this.sender = t, this.store = n, this.args = o, this.renderedProps = i.get, this.index = t.nearestIndex;
    const s = typeof this.index !== void 0, c = s ? ((l = t.dataRootProvider) == null ? void 0 : l.dataRoot) ?? this.store.formData : this.store.formData;
    if (D(this, xe, ft(c)), s) {
      const d = c.parent ?? this.store.formData;
      D(this, Se, ft(d));
    }
    D(this, Te, ft(this.store.formData));
  }
  /**
   * @returns the event handled by the event handler.
   */
  get event() {
    return this.args.find(h(this, Re));
  }
  /**
   * @returns the first element of the event argument array, which is treated as a value.
   */
  get value() {
    return this.args.filter((e) => typeof e < "u").find(h(this, it));
  }
  /**
   * @returns the object for reading and changing form data.
   */
  get data() {
    return h(this, xe);
  }
  /**
   * @returns the object to read and modify parent data (available for array elements).
   */
  get parentData() {
    return h(this, Se);
  }
  /**
   * @returns the object to read and modify root form data.
   */
  get rootData() {
    return h(this, Te);
  }
}
xe = new WeakMap(), Se = new WeakMap(), Te = new WeakMap(), Re = new WeakMap(), it = new WeakMap();
const ka = `
/**
 * Arguments passed to the event handler.
 */
declare class ActionEventArgs {

  /**
   * The event type.
   */
  readonly type: string

  /**
   * The component that triggered the event.
   */
  readonly sender: ComponentData
  
  /**
   * The component properties that were used to render the sender component.
   */
  readonly renderedProps: Record<string, any>

  /**
   * The index of the component in the array, if the component is in the array.
   */
  readonly index?: number

  /**
   * Sets current props of component.
   */
  readonly setUserDefinedProps: (props: Record<string, any>) => void

  /**
   * The form viewer settings.
   */
  readonly store: Store

  /**
   * The event arguments.
   */
  readonly args: any[]

  /**
   * @returns the event handled by the event handler.
   */
  get event(): SyntheticEvent | null

  /**
   * @returns the first element of the event argument array, which is treated as a value.
   */
  get value(): any
  
  /**
   * @returns the object for reading and changing form data.
   */
  get data(): Record<string, unknown>
  
  /**
   * @returns the object to read and modify parent data (available for array elements).
   */
  get parentData(): Record<string, unknown> | undefined

  /**
   * @returns the object to read and modify root form data.
   */
  get rootData(): Record<string, unknown>
}
`, We = [
  Eo.build("tooltipProps"),
  Po.build("renderWhen"),
  vo.build("htmlAttributes"),
  wo.build("validation"),
  nr.build($t),
  nr.build(zt)
];
class re {
  /**
   * Creates the component metadata for the form builder.
   * @param type the component type name.
   * @param properties the component's properties metadata.
   * @param css the component's CSS metadata.
   * @param wrapperCss the component's wrapper CSS metadata.
   * @param modules common metadata for the component.
   * @param customPreview the custom ReactNode to be drawn on the toolbar.
   * @param valuedAn the metadata for the component value.
   * @param kind the component kind.
   * @param initialJson the JSON source for the component (instance of {@link ComponentStore} class serialised to JSON).
   * @param eventListeners the component metadata event listeners.
   * @param icon the component icon.
   */
  constructor(e, t, n, o, i, s, c, l = "component", d, f, p) {
    this.type = e, this.properties = t, this.css = n, this.wrapperCss = o, this.modules = i, this.customPreview = s, this.valuedAn = c, this.kind = l, this.initialJson = d, this.eventListeners = f, this.icon = p;
  }
}
const or = Symbol("key");
function Xe(r, e, t = {}) {
  return qr("autorun", r, e, t);
}
function B(r, e = {}) {
  return qr("observable", r, void 0, e);
}
function qr(r, e, t, n = {}) {
  const o = Object.keys(n).map((i) => `${i}=${n[i]}`).join("_");
  return `${r}_${e}_${t ? `${t}_` : ""}${o}`;
}
let ir = 0;
function Yr(r) {
  r[or] || (++ir, r[or] = `actionData_${ir}`);
}
function Qr(r) {
  var t;
  const e = r.events;
  e && Object.values(e).forEach((n) => n.forEach(Yr)), (t = r.children) == null || t.forEach(Qr);
}
function dt(r) {
  return (r == null ? void 0 : r.computeType) === "function";
}
function _r(r) {
  return (r == null ? void 0 : r.computeType) === "localization";
}
class k {
  /**
   * Creates the component settings.
   * @param key the React component key.
   * @param type the component type of the form viewer.
   */
  constructor(e, t) {
    /**
     * The React component key.
     */
    a(this, "key", "");
    /**
     * The component type of the form viewer.
     */
    a(this, "type", "");
    /**
     * The component properties.
     */
    a(this, "props", {});
    /**
     * The component CSS styles.
     */
    a(this, "css");
    /**
     * The component wrapper CSS styles.
     */
    a(this, "wrapperCss");
    /**
     * The set of event handlers.
     */
    a(this, "events");
    /**
     * The array of child components.
     */
    a(this, "children");
    /**
     * The component value validation settings.
     */
    a(this, "schema");
    /**
     * The set of arbitrary HTML attributes added to the component.
     */
    a(this, "htmlAttributes");
    /**
     * The tooltip settings.
     */
    a(this, "tooltipProps");
    /**
     * The name of the occupied component property in the parent component.
     */
    a(this, "slot");
    /**
     * The condition for binding a child element to a parent element.
     */
    a(this, "slotCondition");
    /**
     * The expression or function to conditionally render a component.
     */
    a(this, "renderWhen");
    this.key = e, this.type = t, J(this, void 0, { name: B("ComponentStore", { key: e }) });
  }
  /**
   * Correctly creates the {@link ComponentStore} from deserialized data.
   * @param value the deserialized data.
   * @returns the component Store.
   */
  static createFromObject(e) {
    const t = Z(new k(e.key, e.type), e);
    return Qr(t), t;
  }
  /**
   * Adds the event handler for component.
   * @param store the target {@link ComponentStore}.
   * @param eventName the target event name.
   * @param data the {@link ActionData}.
   */
  static addEventHandler(e, t, n) {
    var o;
    Yr(n), e.events ?? (e.events = {}), (o = e.events)[t] ?? (o[t] = []), e.events[t].push(n);
  }
}
function Gr(r) {
  return typeof r == "string";
}
function Xr(r) {
  return typeof r == "number";
}
function Mt(r) {
  return typeof r == "object" && typeof r.then == "function";
}
function Lt(r) {
  return typeof r == "object";
}
function V(r, e) {
  const t = Dr(e);
  return t.displayName = r, t;
}
const Aa = new k("", ""), en = ".", It = "__DOT__";
function Ro(r) {
  return r.replace(new RegExp(`\\${It}`, "g"), en);
}
function tn(r) {
  return r.replace(new RegExp(`\\${en}`, "g"), It);
}
const E = (r) => r.replace(new RegExp(" ", "g"), "_"), Fo = (r) => typeof r == "string" || typeof r == "number" || r instanceof Date ? !0 : typeof (r == null ? void 0 : r.value) < "u", rn = (r, e = "") => {
  const t = {};
  for (const [n, o] of Object.entries(r)) {
    const i = e ? `${e}${It}${n}` : n;
    Fo(o) ? t[E(i)] = o : typeof o == "boolean" ? t[E(i)] = o ? "true" : "false" : typeof o == "object" && o !== null && Object.assign(t, rn(o, i));
  }
  return t;
};
class sr {
  constructor() {
    a(this, "handlers", []);
  }
  /**
   * Adds a handler to the list of subscribers.
   * @param handler the handler function to be added.
   */
  subscribe(e) {
    this.handlers.push(e);
  }
  /**
   * Removes the specified event handler from the list of handlers.
   * @param handler the event handler to remove.
   */
  unsubscribe(e) {
    this.handlers = this.handlers.filter((t) => t !== e);
  }
  /**
   * Returns true if the object has subscribers, false otherwise.
   * @returns true if the object has handlers registered for events, otherwise returns false.
   */
  get isSubscribed() {
    return this.handlers.length > 0;
  }
  /**
   * Invokes the event by calling all registered event handlers.
   * @param sender the sender of the event.
   * @param eventArgs the event arguments.
   */
  invoke(e, t) {
    this.handlers.slice().forEach((n) => n(e, t));
  }
  /**
   * Dispose method to release all handlers.
   */
  dispose() {
    this.handlers = [];
  }
}
function Vt(r, e) {
  var t;
  e(r), (t = r.children) == null || t.forEach((n) => Vt(n, e));
}
function ko(r, e, t = 0) {
  if (r === e)
    return t;
  if (r.children) {
    t = t + 1;
    for (const n of r.children) {
      const o = ko(n, e, t);
      if (o)
        return o;
    }
  }
}
let Ao = 0;
function Oo(r) {
  return `${r}_${++Ao}`;
}
class No {
  /**
   * Constructs a new instance of the ComponentKeyChangedEventArgs class.
   * @param oldKey the old key.
   * @param newKey the new key.
   */
  constructor(e, t) {
    this.oldKey = e, this.newKey = t;
  }
}
class jo {
  constructor() {
    /**
     * An event that occurs after a component key change.
     */
    a(this, "onAfterKeyChanged", new sr());
    /**
     * An event that occurs before a component is removed from the component tree.
     */
    a(this, "onBeforeDelete", new sr());
  }
  /**
   * Unsubscribe from all events.
   */
  dispose() {
    this.onAfterKeyChanged.dispose(), this.onBeforeDelete.dispose();
  }
}
var Fe, z, U;
class $o {
  /**
   * Constructor.
   * @param componentStore the component settings.
   * @param model the component metadata for the form viewer.
   * @param field the field with the form data.
   * @param childFactory the factory function that creates {@link ComponentData} instance.
   * @param formValidators the array of functions that validate the form data.
   */
  constructor(e, t, n, o, i) {
    v(this, Fe, void 0);
    v(this, z, void 0);
    v(this, U, void 0);
    a(this, "_state", {});
    /**
     * The unique identifier.
     */
    a(this, "id");
    /**
     * The component settings.
     */
    a(this, "store");
    /**
     * The component metadata.
     */
    a(this, "model");
    /**
     * The field with the form data.
     */
    a(this, "field");
    /**
     * The parent node in the component data tree.
     */
    a(this, "parent");
    /**
     * The child nodes in the component data tree.
     */
    a(this, "children", []);
    /**
     * User defined properties of the React component.
     */
    a(this, "userDefinedProps");
    /**
     * If true, then validation is in progress.
     */
    a(this, "validating", !1);
    /**
     * Specifies the root component for the data in the component tree. **Internal use only.**
     */
    a(this, "dataRootProvider");
    /**
     * Specifies the index in the array if the component is in the component array.
     * This is not an index in a parent-child structure.
     */
    a(this, "index");
    var c;
    this.store = e, this.model = t, this.field = n, this.id = Oo(this.model.type), D(this, U, i), (c = e.children) == null || c.forEach((l) => {
      o(l).setParent(this);
    }), J(this, void 0, { name: B("ComponentData", { key: e.key }) }), D(this, Fe, [(() => Un(() => this.key, (l, d) => {
      this.invokeOnAfterKeyChanged(this, new No(d, l));
    }))()]);
  }
  /**
   * Sets the new parent for this node.
   * @param newParent the new parent.
   */
  setParent(e) {
    var t;
    (t = this.parent) == null || t.removeChild(this), e.addChild(this), this.parent = e;
  }
  /**
   * Inserts the given node after this node.
   * @param inserted the node to insert.
   */
  insertAfterMe(e) {
    this.insert(e, "after");
  }
  /**
   * Inserts the given node before this node.
   * @param inserted the node to insert.
   */
  insertBeforeMe(e) {
    this.insert(e, "before");
  }
  /**
   * @inheritDoc
   */
  get state() {
    return this._state;
  }
  /**
   * @returns the key of this node (same as the key of the ComponentStore).
   */
  get key() {
    return this.store.key;
  }
  /**
   * @returns the ComponentDataEvents object.
   */
  get events() {
    return h(this, z) || D(this, z, new jo()), h(this, z);
  }
  /**
   * Find the node with the given key.
   * @param key the key to find.
   * @returns the node or undefined if not found.
   */
  findByKey(e) {
    if (this.key === e)
      return this;
    for (let t = 0; t < this.children.length; t++) {
      const o = this.children[t].findByKey(e);
      if (o)
        return o;
    }
  }
  /**
   * Assigns unique keys to the items in the tree.
   * @param root the root of the tree to unify keys. Defaults to the root of this tree.
   * @returns the map of new keys to old keys.
   */
  unifyKeys(e) {
    const t = /* @__PURE__ */ new Map(), n = [];
    return Vt(e, ({ key: o }) => {
      n.push(o);
    }), Vt(this, (o) => {
      let i = 1;
      const s = jn(o.store.type), c = () => `${s}${i}`;
      for (; n.includes(c()); )
        i++;
      const l = c();
      t.set(l, o.key), o.store.key = l, n.push(l);
    }), t;
  }
  /**
   * @returns all the fields in the tree as a map. Starts from this node.
   */
  get fields() {
    return this.collectAllFields(/* @__PURE__ */ new Map());
  }
  /**
   * Deletes this node from the tree.
   */
  delete() {
    var t;
    (t = this.parent) == null || t.removeChild(this);
    const e = this.collectAllNodesAsArray([]);
    this.invokeOnBeforeDeleted(e), this.disposeNodes(e);
  }
  /**
   * @inheritDoc
   */
  get data() {
    const e = {};
    for (const [t, n] of this.fields)
      if (n.storeDataInParentForm) {
        const o = n.value || {};
        Object.keys(o).forEach((i) => e[i] = o[i]);
      } else
        e[t] = n.value;
    return e;
  }
  /**
   * @returns the object to read and modify parent data (available for array elements).
   */
  get parentData() {
    var t;
    if (typeof this.nearestIndex !== void 0)
      return ((t = this.parent) == null ? void 0 : t.data) ?? this.rootData;
  }
  /**
   * @returns the object to read and modify root form data.
   */
  get rootData() {
    return this.root.data;
  }
  /**
   * @returns all the form data that is of the FluentVariable type.
   * Additionally, the keys of the returned object are converted to the snake case.
   */
  get fluentData() {
    const e = zo(this);
    return rn(e);
  }
  /**
   * @inheritDoc
   */
  get errors() {
    const e = {};
    for (const [t, n] of this.fields) {
      n.error && (e[t] = n.error);
      const o = n.errors;
      o && (Array.isArray(o) ? e[t] = o : (n.storeDataInParentForm && Object.keys(o).forEach((i) => e[i] = o[i]), !n.storeDataInParentForm && Object.keys(o).length > 0 && (e[t] = o)));
    }
    return e;
  }
  /**
   * @inheritDoc
   */
  get hasErrors() {
    return Object.keys(this.errors).length > 0;
  }
  /**
   * @inheritDoc
   */
  setAllErrors(e) {
    this.fields.forEach((t) => t.error = e);
  }
  /**
   * @inheritDoc
   */
  async validate() {
    this.validating = !0;
    try {
      if (await Promise.allSettled([...this.fields.values()].map((o) => o.validate())), !h(this, U))
        return;
      const e = this.fields, t = h(this, U).map((o) => o(this.data));
      (await Promise.allSettled(t)).map((o) => {
        if (o.status === "rejected") {
          console.error(o.reason);
          return;
        }
        return o.value;
      }).forEach((o) => {
        o && e.forEach((i, s) => {
          if (o[s])
            return i.setError(o[s]);
          if (i.storeDataInParentForm)
            return i.setError(o);
        });
      });
    } finally {
      this.validating = !1;
    }
  }
  /**
   * @inheritDoc
   */
  async getValidationResult() {
    let e;
    const t = async ([i, s]) => {
      const c = await s.getValidationResult();
      if (Xt(c))
        return;
      e ?? (e = {});
      let l = e;
      if (!s.storeDataInParentForm) {
        const d = $n(c) ? [] : {};
        e[i] ?? (e[i] = d), l = e[i];
      }
      er(l, c);
    }, n = [...this.fields.entries()];
    if (await Promise.allSettled(n.map(t)), !h(this, U))
      return e;
    const o = async (i) => {
      const s = await i(this.data);
      Xt(s) || (e ?? (e = {}), er(e, s));
    };
    return await Promise.allSettled(h(this, U).map(o)), e;
  }
  /**
   * @inheritDoc
   */
  get isValidating() {
    return this.validating;
  }
  /**
   * @inheritDoc
   */
  reset() {
    this.fields.forEach((e) => e.reset());
  }
  /**
   * @inheritDoc
   */
  clear() {
    this.fields.forEach((e) => e.clear());
  }
  /**
   * Dispose method that releases resources used by the object.
   * It disposes the field and all the children objects.
   */
  dispose() {
    const e = this.collectAllNodesAsArray([]);
    this.disposeNodes(e);
  }
  /**
   * @returns true if it has no parent {@link ComponentData}, false otherwise.
   */
  get isRoot() {
    return !this.parent;
  }
  /**
   * @returns the root of the component tree.
   */
  get root() {
    return this.parent ? this.parent.root : this;
  }
  /**
   * @returns the index in the array if the component is in the component array
   * (looks for the nearest index in the component hierarchy).
   */
  get nearestIndex() {
    var e;
    return typeof this.index < "u" ? this.index : (e = this.parent) == null ? void 0 : e.nearestIndex;
  }
  insert(e, t) {
    var l, d;
    const n = t === "before" ? 0 : 1;
    if (!this.parent)
      throw new Error(`Cannot insert without parent. Key = ${this.key}`);
    (l = e.parent) == null || l.removeChild(e), e.parent = this.parent;
    const o = this.parent.children, i = o.indexOf(this);
    if (i < 0)
      throw new Error(`Cannot insert not existing element into ComponentData. Key = ${this.key}`);
    o.splice(i + n, 0, e), (d = this.parent.store).children ?? (d.children = []);
    const s = this.parent.store.children, c = s.indexOf(this.store);
    if (c < 0)
      throw new Error(`Cannot insert not existing element into ComponentStore. Key = ${this.key}`);
    s.splice(c + n, 0, e.store), e.store.slot = this.store.slot, e.store.slotCondition = this.store.slotCondition;
  }
  /**
   * Disposes the nodes by calling the disposers, disposing the field,
   * and resetting the parent and children properties to undefined and an empty array, respectively.
   * @param nodes the array of ComponentData objects representing the nodes to dispose.
   */
  disposeNodes(e) {
    e.forEach((t) => {
      var n, o;
      (n = h(t, z)) == null || n.dispose(), h(t, Fe).forEach((i) => i()), (o = t.field) == null || o.dispose(), t.parent = void 0, t.children = [];
    });
  }
  collectAllNodesAsArray(e) {
    e.push(this);
    for (let t = 0; t < this.children.length; t++)
      this.children[t].collectAllNodesAsArray(e);
    return e;
  }
  collectAllFields(e) {
    var t;
    if (this.field && e.set(this.key, this.field), ((t = this.field) == null ? void 0 : t.fieldType) === "repeater")
      return e;
    for (let n = 0; n < this.children.length; n++)
      this.children[n].collectAllFields(e);
    return e;
  }
  addChild(e) {
    var t;
    this.children.indexOf(e) < 0 && this.children.push(e), (t = this.store).children ?? (t.children = []), this.store.children.indexOf(e.store) < 0 && this.store.children.push(e.store);
  }
  removeChild(e) {
    var o;
    const t = this.children.indexOf(e);
    t > -1 && this.children.splice(t, 1), (o = this.store).children ?? (o.children = []);
    const n = this.store.children.indexOf(e.store);
    n > -1 && this.store.children.splice(n, 1);
  }
  invokeOnAfterKeyChanged(e, t) {
    var n, o;
    (n = h(this, z)) != null && n.onAfterKeyChanged.isSubscribed && h(this, z).onAfterKeyChanged.invoke(e, t), (o = this.parent) == null || o.invokeOnAfterKeyChanged(e, t);
  }
  invokeOnBeforeDeleted(e) {
    var t, n;
    (t = h(this, z)) != null && t.onBeforeDelete.isSubscribed && e.forEach((o) => {
      var i;
      return (i = h(this, z)) == null ? void 0 : i.onBeforeDelete.invoke(o, void 0);
    }), (n = this.parent) == null || n.invokeOnBeforeDeleted(e);
  }
}
Fe = new WeakMap(), z = new WeakMap(), U = new WeakMap();
const zo = (r) => {
  const e = {};
  return r.fields.forEach((t, n) => {
    e[n] = r.data[n] ?? "";
  }), e;
}, [
  /**
   * @returns the instance of the ComponentData of the currently rendered component.
   */
  ne,
  /**
   * Context provider for the useComponentData hook. **Internal use only.**
   */
  nn
] = te("ComponentDataContext"), [
  /**
   * **Internal use only.**
   */
  L,
  /**
   * **Internal use only.**
   */
  on
] = te("FormViewerPropsContext");
function Mo(r) {
  const e = Pe(!1), [t, n] = kt(r);
  j(() => (e.current = !0, () => {
    e.current = !1;
  }), []);
  const o = Y((i) => {
    e.current && n(i);
  }, []);
  return K(() => [t, o], [t, o]);
}
const Lo = /* @__PURE__ */ new Date(1739565676378), ar = ":", cr = "-", Io = `MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEJDKWHzXT9YZw7WDJy4wr/VMXBf+/afNB
  ppCLv1zZFVUQEmDRPhGC5nKux3WQcrtfl18iNFfISjcqN5vplR/kcAvIJd07tacn
  y1l39NGbMLIoPVzPY6GXTNzQpxRbGn99`;
function sn(r) {
  const e = window.atob(r), t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t.buffer;
}
function Bo(r) {
  return window.crypto.subtle.importKey(
    "spki",
    sn(r),
    {
      name: "ECDSA",
      namedCurve: "P-384"
    },
    !0,
    ["verify"]
  );
}
async function Wo(r, e, t) {
  if (!window.crypto.subtle)
    return;
  const n = await Bo(t), o = new TextEncoder().encode(r);
  return await window.crypto.subtle.verify(
    {
      name: "ECDSA",
      hash: { name: "SHA-384" }
    },
    n,
    e,
    o
  );
}
function Ko(r, e) {
  const { licenseEndDate: t, restrictions: n, companyName: o } = JSON.parse(e) ?? {};
  if (r !== o)
    return !1;
  const i = t.split(".");
  if (i.length !== 3)
    return !1;
  const s = `${i[2]}-${i[0]}-${i[1]}`, c = new Date(s), l = /* @__PURE__ */ new Date();
  return n.StrictCheck === !0 && c < l ? !1 : c > Lo;
}
async function Jo(r) {
  if (r)
    try {
      let e = r.indexOf(cr);
      if (e === -1)
        return !1;
      const t = r.slice(0, e), n = r.slice(e + cr.length);
      if (e = n.indexOf(ar), e === -1)
        return !1;
      const o = window.atob(n.slice(0, e)), i = sn(n.slice(e + ar.length));
      return await Wo(o, i, Io) ? Ko(t, o) : !1;
    } catch {
      return !1;
    }
}
const Ho = {
  display: "flex",
  position: "relative",
  backgroundColor: "#72c7ff30",
  borderRadius: 6,
  padding: 10,
  gap: 10
}, Uo = {
  flex: 1
}, Zo = () => {
  const { licenseKey: r } = L(), [e, t] = Mo(!0);
  return j(() => {
    Jo(r).then((n) => {
      t(!!n);
    });
  }, [r, t]), /* @__PURE__ */ u("div", { children: !e && /* @__PURE__ */ u("div", { style: Ho, children: /* @__PURE__ */ fe("label", { style: Uo, children: [
    "This is a trial version of the product. To purchase a license, go to ",
    /* @__PURE__ */ u(
      "a",
      {
        href: "https://formengine.io/pricing",
        children: "https://formengine.io/pricing"
      }
    )
  ] }) }) });
}, lr = {
  LTR: tr({
    key: ee.LTR
  }),
  RTL: tr({
    key: ee.RTL,
    stylisPlugins: [Qn],
    prepend: !0
  })
}, qo = me`
  display: flex;
  width: 100%;
  height: 100%;
`, Yo = "optimajet-formviewer", Qo = ye(Yo, qo), _o = (r) => {
  const e = A(), t = r.language ?? e.displayedLanguage;
  j(() => {
    e.formViewerPropsStore.view.getCssLoaders(t.bidi).forEach((i) => {
      i().catch((s) => console.error(s));
    });
  }, [t, e.formViewerPropsStore.view]);
  const n = t.bidi == ee.RTL ? lr.RTL : lr.LTR;
  return /* @__PURE__ */ u("div", { dir: t.bidi, lang: t.fullCode, className: Qo, children: /* @__PURE__ */ u(Yn, { value: n, children: an(e.formViewerPropsStore.view.viewerWrappers, t, r.children) }) });
}, Go = V("ViewerLocalizationProvider", _o), an = ([r, ...e], t, n) => r ? /* @__PURE__ */ u(r, { language: t, children: an(e, t, n) }) : n, Xo = ({ children: r }) => {
  const [e] = kt(window.onerror);
  return j(() => (window.onerror = (t) => {
    if ((t == null ? void 0 : t.toString().search("ResizeObserver")) !== -1) {
      const n = document.getElementById(
        "webpack-dev-server-client-overlay-div"
      ), o = document.getElementById(
        "webpack-dev-server-client-overlay"
      );
      return o && o.setAttribute("style", "display: none"), n && n.setAttribute("style", "display: none"), !0;
    }
    return !1;
  }, () => {
    window.onerror = e;
  }), [e]), /* @__PURE__ */ u(ct, { children: r });
};
class Ee {
  /**
   * Creates the event stream of the form viewer.
   * @param stream the set of observable events.
   */
  constructor(e) {
    this.stream = e;
  }
  /**
   * Returns the event stream filtered by the specified predicate function.
   * @param predicate the predicate function.
   * @returns the event stream filtered by the specified predicate function.
   */
  filter(e) {
    const t = this.stream.pipe(Ce(e));
    return new Ee(t);
  }
  /**
   * Returns the event stream filtered by the specified sender keys.
   * @param keys the sender key array.
   * @returns the event stream filtered by the specified sender keys.
   */
  keys(...e) {
    const t = this.stream.pipe(Ce((n) => e.includes(n.sender.key)));
    return new Ee(t);
  }
  /**
   * Returns the event stream filtered by the specified event types.
   * @param types the array of event types.
   * @returns the event stream filtered by the specified event types.
   */
  types(...e) {
    const t = this.stream.pipe(Ce((n) => e.includes(n.type)));
    return new Ee(t);
  }
  /**
   * Adds the specified observer to the stream of observed events.
   * @param observerOrNext the observer.
   * @returns the unsubscribe function.
   */
  listen(e) {
    const t = this.stream.subscribe(e);
    return () => t.unsubscribe();
  }
}
const [
  /**
   * **Internal use only.**
   */
  ei,
  /**
   * **Internal use only.**
   */
  ti
] = te("ComponentTreeContext");
class O {
  /**
   * Constructor.
   * @param error the error.
   * @param result the result.
   * @param exceptions the exceptions.
   * @param warning the warning.
   */
  constructor(e = !1, t, n, o) {
    this.error = e, this.result = t, this.exceptions = n, this.warning = o;
  }
  /**
   * Creates a new instance of the CalculableResult class with a successful result.
   * @param result the calculable result.
   * @returns the new instance of CalculableResult class.
   */
  static success(e) {
    return new O(!1, e);
  }
  /**
   * Creates a new instance of CalculableResult class with an error.
   * @param exceptions the exception array.
   * @returns the new instance of CalculableResult class.
   */
  static error(e) {
    return new O(!0, void 0, e);
  }
  /**
   * Creates a new instance of the CalculableResult class with a warning result.
   * @param result the calculable result.
   * @returns the new instance of CalculableResult class.
   */
  static warning(e) {
    return new O(!1, e, void 0, !0);
  }
}
const dr = /* @__PURE__ */ new Map(), ri = (r) => {
  const e = dr.get(r);
  if (e)
    return e;
  const t = new Function("form", r);
  return dr.set(r, t), t;
}, cn = (r, e) => {
  try {
    const n = ri(r)(e);
    return O.success(n);
  } catch (t) {
    return O.error([
      t,
      {
        name: "Function source",
        message: r
      }
    ]);
  }
}, Bt = (r, e) => cn(r.fnSource || "", e), ni = (r, e) => {
  if (dt(r))
    return Bt(r, e).result;
  const t = r.value || "";
  return cn(`return ${t}`, e).result;
}, oi = (r, e) => {
  const t = {};
  return Object.keys(r.props).forEach((n) => {
    const o = r.props[n];
    if (o) {
      if (dt(o)) {
        const { result: i, error: s, exceptions: c } = Bt(o, e);
        if (s) {
          const l = `Error in the calculable field '${n}' of the '${r.key}' component `;
          console.warn(l, c);
          return;
        }
        t[n] = i;
        return;
      }
      zn(o.value) || (t[n] = o.value);
    }
  }), t;
}, ii = (r) => {
  var e;
  return (e = r.htmlAttributes) == null ? void 0 : e.reduce((t, { name: n, value: o }) => {
    try {
      t[n] = JSON.parse(o);
    } catch {
      t[n] = o;
    }
    return t;
  }, {});
}, si = (r, e, t) => {
  const n = {}, o = (s) => {
    var c, l;
    return (l = (c = r.store.events) == null ? void 0 : c[s]) == null ? void 0 : l.length;
  }, i = new Set(Mn(r.store.events).filter(o));
  return i.add("onChange").add("onBlur"), i.delete($t), i.delete(zt), i.forEach((s) => n[s] = (...c) => e.eventSubject.next(new Dt(s, r, e, c, t))), n;
};
class ln {
  /**
   * Creates an instance that calculates the properties of the form viewer component.
   * @param data the data needed to display the component.
   * @param store the form viewer settings.
   * @param localizer the function to localize the properties of a component, returns a Record with localized properties.
   * @param computeChildren the function that calculates all child properties of a component.
   * @param viewerProps the form viewer properties.
   */
  constructor(e, t, n, o, i) {
    this.data = e, this.store = t, this.localizer = n, this.computeChildren = o, this.viewerProps = i, J(this, void 0, { name: B("ComponentState", { key: e.key }) });
  }
  /**
   * @returns combined in order of priority component properties.
   */
  get get() {
    const e = this.propsWithoutChildren;
    return Object.assign({}, e, this.className, this.children(e));
  }
  /**
   * @returns the combined properties of the components in priority order, excluding child components.
   */
  get propsWithoutChildren() {
    const { htmlAttributes: e, ...t } = this.calculatedProps;
    return Object.assign(
      { key: this.data.store.key },
      this.data.model.defaultProps,
      t,
      this.localizedProps,
      this.value,
      this.readOnly,
      this.events,
      e ?? this.htmlAttributes,
      this.data.userDefinedProps
    );
  }
  /**
   * @returns the component's field value data, if the component can have a field value.
   */
  get value() {
    if (this.data.model.kind !== "template" && this.data.field)
      return { [this.data.field.valued]: this.data.field.value };
  }
  /**
   * @returns the component's read-only flag, if the component can have a read-only flag.
   */
  get readOnly() {
    if (this.viewerProps.readOnly && this.data.model.readOnly)
      return { [this.data.model.readOnly]: !0 };
  }
  /**
   * @returns the values for all properties of the component, calculates the values of the calculated properties.
   */
  get calculatedProps() {
    const e = this.data.dataRootProvider ?? this.store.dataContext;
    return oi(this.data.store, e.dataRoot);
  }
  /**
   * @returns component localized properties.
   */
  get localizedProps() {
    return this.localizer(this.data.store);
  }
  /**
   * @returns the component event handlers that send events to the event bus.
   */
  get events() {
    return si(this.data, this.store, this);
  }
  /**
   * Calculates and returns className property.
   * @returns the Record that contains the className property for the component.
   */
  get className() {
    return { className: ye(
      this.propsWithoutChildren.className,
      this.getClassNameFromCssPart("css")
    ) };
  }
  /**
   * Calculates and returns wrapper className property.
   * @returns the Record that contains the className property for the wrapper of component.
   */
  get wrapperClassName() {
    return this.getClassNameFromCssPart("wrapperCss");
  }
  /**
   * @returns all arbitrary HTML attributes of the component.
   */
  get htmlAttributes() {
    return ii(this.data.store);
  }
  /**
   * Calculates and returns all child components.
   * @param props the React component properties.
   * @returns the Record that contains the child components of a component.
   */
  children(e) {
    return this.computeChildren(this.data, e);
  }
  getClassNameFromCssPart(e) {
    var c, l, d, f, p, g, x, _, G, Ke, ve, X;
    const { model: t, store: n } = this.data, { viewMode: o } = this.store, i = Z(
      {},
      (l = (c = t[e]) == null ? void 0 : c.any) == null ? void 0 : l.object,
      (f = (d = n[e]) == null ? void 0 : d.any) == null ? void 0 : f.object
    ), s = Z(
      {},
      (g = (p = t[e]) == null ? void 0 : p[o]) == null ? void 0 : g.object,
      (_ = (x = n[e]) == null ? void 0 : x[o]) == null ? void 0 : _.object
    );
    return me`
      && {
        ${i}
        ${s}
        ${(Ke = (G = n[e]) == null ? void 0 : G.any) == null ? void 0 : Ke.string}
        ${(X = (ve = n[e]) == null ? void 0 : ve[o]) == null ? void 0 : X.string}
      }
    `;
  }
}
function Wt(r, e) {
  if (!r.renderWhen)
    return !0;
  if (!dt(r.renderWhen)) {
    const { value: t } = r.renderWhen;
    if (typeof t == "string" && t.trim() === "")
      return !0;
  }
  return ni(r.renderWhen, e) === !0;
}
const ai = "children";
function ci(r, e, t, n) {
  var f;
  const o = ((f = r.field) == null ? void 0 : f.fieldType) === "repeater" ? r.field.componentData : r.children, i = t, s = {}, c = eo(o, (p) => p.store.slot || ai), l = (p) => di(p.store, n), d = (p) => {
    var g;
    return Wt(p.store, ((g = r.dataRootProvider) == null ? void 0 : g.dataRoot) ?? e);
  };
  for (const [p, g] of Object.entries(c)) {
    const x = g.filter(l).filter(d);
    x.length && (s[p] = r.model.propsBindingTypes[p] === "array" ? x.map((_, G) => /* @__PURE__ */ u(i, { data: [_] }, G)) : /* @__PURE__ */ u(i, { data: x }));
  }
  return s;
}
const ur = /* @__PURE__ */ new Map();
function li(r) {
  const e = ur.get(r);
  if (e)
    return e;
  const t = new Function("parentProps", r);
  return ur.set(r, t), t;
}
function di(r, e) {
  var o;
  const t = (o = r.slotCondition) == null ? void 0 : o.trim();
  if (!t)
    return !0;
  const n = li(t);
  try {
    return n(e);
  } catch (i) {
    return console.warn(i), !1;
  }
}
const ui = () => A().form.tooltipType, dn = (r, e, t, n) => {
  const o = A(), i = L();
  return K(
    () => hi(o, r, e, t, n, i),
    [o, r, e, t, n, i]
  );
}, hi = (r, e, t, n, o, i) => {
  const s = new k(e.key, t.type);
  s.props = n;
  const c = r.createComponentData(s, !1, t);
  return c.dataRootProvider = e.dataRootProvider, new ln(c, r, o, () => ({}), i);
};
function pi() {
  const r = L(), e = ui();
  if (e)
    return r.view.get(e);
}
const fi = ({ children: r }) => {
  const e = pi();
  return e ? /* @__PURE__ */ u(gi, { tooltipDefinition: e, children: r }) : /* @__PURE__ */ u(ct, { children: r });
}, mi = V("TooltipWrapper", fi), yi = ({ tooltipDefinition: r, children: e }) => {
  const t = A(), n = ne(), o = n.store, i = Y((c) => {
    const l = n.dataRootProvider ?? t.dataContext;
    return t.localizeComponent("tooltip", l.dataRoot, c);
  }, [t, n]), s = dn(n, r, o.tooltipProps, i);
  return Sr(r.component, s.get, e);
}, gi = V("ComponentTooltip", yi), vi = () => {
  const r = A(), e = r.form.errorType, t = r.formViewerPropsStore.view, n = L();
  return K(() => {
    const o = n.errorWrapper ? new M(n.errorWrapper) : Ft;
    return (e ? t.find(e) : o) ?? Ft;
  }, [e, t, n.errorWrapper]);
}, hr = (r, e, t) => {
  const { eventSubject: n } = A(), o = Pe(t);
  o.current = t, j(() => {
    const i = n.pipe(Ce((s) => s.type === e && s.sender.id === r)).subscribe((s) => {
      o.current(s);
    });
    return () => i.unsubscribe();
  }, [n, r, e]);
}, wi = ({ children: r }) => {
  var l;
  const e = ne(), t = A(), n = L(), o = vi(), i = Y(() => ({}), []), s = dn(e, o, t.form.errorProps, i);
  if (hr(e.id, "onChange", (d) => {
    var f;
    return (f = e.field) == null ? void 0 : f.setValue(d.value);
  }), hr(e.id, "onBlur", (d) => {
    var f;
    return (f = e.field) == null ? void 0 : f.setTouched();
  }), n.erroneous)
    return /* @__PURE__ */ u(ct, { children: r });
  const c = { ...s.get, error: (l = e.field) == null ? void 0 : l.error };
  return Sr(o.component, c, r);
}, pr = V("Erroneous", wi);
function Kt(r) {
  return r.message ?? `Validation failed: ${r.settings.key}`;
}
function bi(r) {
  if (r)
    return r == null ? void 0 : r.map(Kt).join(" ");
}
var ke, Ae, ie, se;
const st = class st {
  constructor(e, t, n, o) {
    v(this, ke, new Fr());
    v(this, Ae, void 0);
    v(this, ie, void 0);
    v(this, se, void 0);
    /**
     * Generates an event to perform validation.
     * @param value the validated value.
     */
    a(this, "sendValidationEvent", (e) => {
      h(this, ke).next(e);
    });
    /**
     * Performs a validation of the value.
     * @param value the validated value.
     * @returns the Promise with the result of the validation.
     */
    a(this, "validate", (e) => {
      const t = new Promise((n) => {
        const o = h(this, ie).subscribe((i) => {
          n(i), o.unsubscribe();
        });
      });
      return this.sendValidationEvent(e), t;
    });
    /**
     * Returns the validation results without triggering an events and changing the state of the form.
     * @param value the validated value.
     * @returns the validation results.
     */
    a(this, "getValidationResult", (e) => h(this, se).call(this, e));
    /**
     * Releases allocated resources, must be used when destroying an object instance.
     */
    a(this, "dispose", () => {
      h(this, Ae).forEach((e) => e.unsubscribe());
    });
    const i = (s) => {
      if (!(!s || s.length === 0))
        return e.showAllValidationErrors ? (o ?? bi)(s) : (o == null ? void 0 : o([s[0]])) ?? Kt(s[0]);
    };
    D(this, se, (s) => t(s, e)), D(this, ie, h(this, ke).pipe(
      _n(200),
      Pt(h(this, se)),
      Gn((s) => s),
      Pt(i)
    )), D(this, Ae, [
      h(this, ie).subscribe(n)
    ]);
  }
};
ke = new WeakMap(), Ae = new WeakMap(), ie = new WeakMap(), se = new WeakMap(), /**
 * Creates a DataValidator instance.
 * @param store the form viewer settings
 * @param resolver the validation function factory.
 * @param args the validation function factory arguments.
 * @param setter the callback function called to set a validation error.
 * @param localizer the function that localizes validation error messages.
 * @template T the validation function factory arguments.
 * @returns the DataValidator instance.
 */
a(st, "create", (e, t, n, o, i) => new st(e, t(n), o, i));
let et = st;
const Ci = me`
  display: flex;
`, Jt = (r) => {
  const { className: e, children: t, ...n } = r, o = K(() => ye(Ci, e), [e]);
  return /* @__PURE__ */ u("div", { className: o, ...n, children: t });
};
Jt.displayName = "Screen";
function Ei(r, e, t) {
  const n = Pe(e), o = Pe(r);
  n.current = e, o.current = r, j(() => (o.current(), () => {
    n.current();
  }), t);
}
const Pi = (r, e) => {
  const t = A(), n = ne(), o = Pe([]), i = Y(() => {
    o.current.forEach((c) => c.unsubscribe());
  }, []), s = Y(() => {
    const c = [];
    Ln(n.store.events, (l, d) => {
      const f = Di(t, l), p = t.eventSubject.pipe(
        Ce((g) => g.type === d && g.sender.id === n.id),
        Pt(f),
        Xn((g, x) => (console.error(g), x))
      ).subscribe();
      c.push(p);
    }), o.current = c;
  }, [n.store.events, n.id, t]);
  Ei(() => {
    s();
    const c = new Dt($t, n, t, [], r);
    t.eventSubject.next(c);
  }, () => {
    const c = new Dt(zt, n, t, [], r);
    t.eventSubject.next(c), i();
  }, e);
};
function Di(r, e) {
  const t = e.map((n) => ({
    func: r.findAction(n).func,
    args: n.args ? { ...n.args } : {}
  }));
  return async (n) => {
    for (const { func: o, args: i } of t) {
      const s = o(n, i);
      Mt(s) && await s;
    }
  };
}
const Vi = () => {
  const r = ne(), { componentWrapper: e, computeChildren: t } = L(), n = A(), o = Y((X) => {
    const Je = r.dataRootProvider ?? n.dataContext;
    return n.localizeComponent("component", Je.dataRoot, X);
  }, [n, r]), i = ei(), s = L(), c = Y((X, Je) => t ? t(X, Je) : ci(X, n.form.componentTree, i, Je), [t, n.form.componentTree, i]), l = K(
    () => new ln(r, n, o, c, s),
    [r, n, o, c, s]
  );
  Pi(l, [s]);
  const { key: d, ...f } = l.get, { kind: p, component: g } = r.model, x = ye(f.className, l.wrapperClassName), _ = e ?? Jt, G = r.store.tooltipProps ? mi : Kn, Ke = e ?? g, ve = /* @__PURE__ */ u(g, { ...f }, d);
  return p === "container" ? /* @__PURE__ */ u(Ke, { ...f, className: x }, d) : p === "repeater" ? /* @__PURE__ */ u(_, { children: /* @__PURE__ */ u(G, { children: /* @__PURE__ */ u(pr, { children: /* @__PURE__ */ u(g, { ...f, wrapperClassName: x }, d) }) }) }) : /* @__PURE__ */ u(_, { className: p === "template" ? x : l.wrapperClassName, children: p === "template" ? ve : /* @__PURE__ */ u(G, { children: /* @__PURE__ */ u(pr, { children: ve }) }) });
}, xi = V("ComponentViewer", Vi), Si = ({ componentData: r }) => /* @__PURE__ */ u(nn, { value: r, children: /* @__PURE__ */ u(xi, {}) }), Ti = V("ComponentTreeItem", Si), Ri = ({ data: r }) => /* @__PURE__ */ u(ti, { value: un, children: r.map((e) => /* @__PURE__ */ u(Ti, { componentData: e }, e.id)) }), un = V("ComponentTree", Ri), Fi = () => {
  const r = window.innerWidth;
  return r <= 600 ? "mobile" : r <= 900 ? "tablet" : "desktop";
};
function ki() {
  const r = A(), e = L();
  j(() => {
    if (e.viewMode) {
      r.viewMode = e.viewMode;
      return;
    }
    const t = () => r.viewMode = Fi();
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, [e.viewMode, r]);
}
const Ai = ({ event: r }) => {
  const e = A(), { formLoadError: t } = e, n = L(), o = K(() => [e.form.componentTree], [e.form.componentTree]);
  return j(() => {
    r == null || r(new Ee(e.eventSubject));
  }, [r, e.eventSubject]), ki(), j(() => e.loadForm(n.getForm, n.formName), [e, n.getForm, n.formName]), t ? /* @__PURE__ */ u("div", { className: "form-error", children: t }) : /* @__PURE__ */ u(un, { data: o });
}, Oi = V("Viewer", Ai);
function Ni(r) {
  if (!r)
    return;
  const e = {};
  return Object.entries(r).forEach(([t, n]) => {
    e[t] = n instanceof T ? n : T.functionalAction(n);
  }), e;
}
class Ht {
  /**
   * Constructs a new FormViewerPropsStore from the given FormViewerProps.
   * @param formViewerProps the FormViewer props.
   * @returns the FormViewerPropsStore.
   */
  constructor(e) {
    /**
     * The metadata of the form viewer components.
     */
    a(this, "view", new De());
    /**
     * The initial form data.
     */
    a(this, "initialData", {});
    /**
     * The set of metadata of validation rules, grouped by the type of value being validated.
     */
    a(this, "validators");
    /**
     * The set of functions that validate the form data.
     */
    a(this, "formValidators");
    /**
     * The function to localize the properties of a component.
     */
    a(this, "localizer");
    /**
     * Custom actions for the form viewer.
     */
    a(this, "actions");
    /**
     * The full language code passed in the FormViewer properties.
     */
    a(this, "propsLanguage");
    /**
     * The default error wrapper used when errorType is not specified in the form.
     */
    a(this, "errorWrapper");
    /**
     * If true, all validation errors will be displayed.
     */
    a(this, "showAllValidationErrors");
    e && this.applyProps(e), Tr(this, {
      view: P.ref,
      initialData: P.ref,
      validators: P.ref,
      formValidators: P.ref,
      localizer: P.ref,
      actions: P.ref,
      propsLanguage: P.ref,
      errorWrapper: P.ref,
      showAllValidationErrors: P.ref
    }, { name: B("FormViewerPropsStore") });
  }
  /**
   * Applies the given FormViewerProps.
   * @param formViewerProps the properties to apply.
   */
  applyProps(e) {
    this.view = e.view, this.initialData = e.initialData ?? {}, this.validators = e.validators, this.formValidators = e.formValidators, this.localizer = e.localize, this.actions = Ni(e.actions), this.propsLanguage = e.language, this.errorWrapper = e.errorWrapper, this.showAllValidationErrors = e.showAllValidationErrors;
  }
  /**
   * Returns the clone of the FormViewerPropsStore object.
   * @returns the clone of the FormViewerPropsStore object.
   */
  clone() {
    const e = new Ht();
    return e.view = this.view, e.initialData = this.initialData, e.validators = this.validators, e.formValidators = this.formValidators, e.localizer = this.localizer, e.actions = this.actions, e.propsLanguage = this.propsLanguage, e.errorWrapper = this.errorWrapper, e.showAllValidationErrors = this.showAllValidationErrors, e;
  }
}
function hn(r, e, t, n) {
  const o = r.props[e];
  if (dt(o)) {
    const { result: i } = Bt(o, t);
    return [!0, i];
  }
  return _r(o) ? [!0, n("component", r)[e]] : [!1];
}
function Ut(r, e) {
  if (Array.isArray(r) && Xr(e) || Lt(r) && Gr(e))
    return r[e];
}
function pn(r) {
  return function(e) {
    return ji(r, e);
  };
}
function ji(r, e) {
  const t = zi(r, e);
  return async (n, o) => {
    if (!t)
      return;
    const i = [];
    for (const { settings: s, validator: c, params: l } of t) {
      const d = {};
      l == null || l.filter((g) => typeof g.default < "u").map((g) => d[g.key] = g.default), Object.assign(d, s.args);
      const f = c(n, o, d), p = Mt(f) ? await f : f;
      p !== !0 && i.push({
        settings: s,
        message: typeof p == "string" ? p : d.message
      });
    }
    return i;
  };
}
const $i = () => !0;
function zi(r, e) {
  if (!e || !e.validations || !e.validations.length)
    return;
  const t = [...e.validations].sort(Mi), n = (o) => {
    var i;
    if (!o.type) {
      const s = r.internal[o.key], c = s.validatorFactory(o.args ?? {});
      return { settings: o, validator: c, params: s.params };
    }
    if (o.type === "custom") {
      const s = (i = r.custom) == null ? void 0 : i[o.key];
      if (s)
        return { settings: o, validator: s.validate, params: s.params };
    }
    return console.warn(`Cannot find rule, key: '${o.key}', type: '${o.type}'`), { settings: o, validator: $i };
  };
  return t.map(n);
}
function Mi(r, e) {
  return e.key === "code" ? -1 : e.key === "required" ? 1 : 0;
}
var Oe, Ne;
class Li {
  /**
   * Creates the field with repeater data for the component.
   * @param dataContext the context for working with data.
   * @param componentDataFactory the factory for creating ComponentData instances.
   * @param store the form viewer settings.
   * @param getValidationRules the function to get the validation rules.
   * @param componentStore the component settings.
   * @param model the component metadata for the form viewer.
   * @param deferFieldCalculation if true, then the calculated field must be explicitly initialized.
   */
  constructor(e, t, n, o, i, s, c) {
    v(this, Oe, void 0);
    /**
     * @inheritDoc
     */
    a(this, "error");
    /**
     * @inheritDoc
     */
    a(this, "touched", !1);
    /**
     * @inheritDoc
     */
    a(this, "valued");
    /**
     * The type of the field value.
     */
    a(this, "valueType");
    a(this, "dataValidator");
    v(this, Ne, void 0);
    a(this, "initialData");
    /**
     * @inheritDoc
     */
    a(this, "setError", (e) => {
      if (typeof e > "u" || e === null) {
        this.clearError();
        return;
      }
      if (!Lt(e))
        throw new Error(`Expected 'object' type, got '${typeof e}'`);
      this.error = e[this.errorFieldName];
      const t = e[this.componentStore.key];
      this.componentData.forEach((n, o) => {
        const i = t == null ? void 0 : t[o];
        n.fields.forEach((s, c) => s.setError(i == null ? void 0 : i[c]));
      });
    });
    if (this.dataContext = e, this.componentDataFactory = t, this.store = n, this.getValidationRules = o, this.componentStore = i, this.model = s, this.deferFieldCalculation = c, !s.valued)
      throw new Error("'model.valued' is falsy");
    if (!s.valueType)
      throw new Error("'model.typeOfValue' is undefined");
    this.valued = s.valued, this.valueType = s.valueType;
    const l = "RepeaterField";
    J(this, {
      model: !1,
      dataValidator: P.ref
    }, { name: B(l, { key: i.key }), autoBind: !0 }), D(this, Ne, [
      Ye(
        () => {
          this.dataValidator = this.dataContext.createDataValidator(
            i,
            this.valueType,
            (d) => this.error = d
          ), Rr(() => {
            var d;
            (d = h(this, Oe)) == null || d.dispose(), D(this, Oe, this.dataValidator);
          });
        },
        { name: Xe(l, "setValidator", { key: i.key }) }
      ),
      Ye(
        () => {
          const f = Ut(this.dataContext.initialData, i.key) ?? this.initialValue;
          if (this.deferFieldCalculation) {
            this.initialData = f;
            return;
          }
          const [p, g] = this.dataContext.calculateValue(i, this.valued);
          if (p) {
            this.initialData = g;
            return;
          }
          this.initialData = f;
        },
        { name: Xe(l, "setValue", { key: i.key }) }
      ),
      () => {
        var d;
        return (d = this.dataValidator) == null ? void 0 : d.dispose();
      }
    ]);
  }
  /**
   * @inheritDoc
   */
  get fieldType() {
    return "repeater";
  }
  /**
   * @inheritDoc
   */
  init() {
    this.deferFieldCalculation = !1, this.initFields(this.componentData);
  }
  /**
   * @returns the initial value for the field.
   */
  get initialValue() {
    var e;
    return ((e = this.componentStore.props[this.valued]) == null ? void 0 : e.value) ?? this.defaultValue;
  }
  /**
   * @returns the default value for the field.
   */
  get defaultValue() {
    var e;
    return (e = this.model.defaultProps) == null ? void 0 : e[this.valued];
  }
  /**
   * @inheritDoc
   */
  dispose() {
    h(this, Ne).forEach((e) => e());
  }
  /**
   * @inheritDoc
   */
  get value() {
    const e = [];
    return this.componentData.forEach((t) => {
      e.push(t.data);
    }), e;
  }
  /**
   * @inheritDoc
   */
  setValue(e) {
    if (e === null || typeof e > "u" || Array.isArray(e)) {
      this.initialData = e;
      return;
    }
  }
  /**
   * @inheritDoc
   */
  setTouched() {
    this.touched = !0;
  }
  /**
   * @inheritDoc
   */
  async validate() {
    var t, n;
    if (!this.needValidate) {
      this.clearError();
      return;
    }
    const e = this.componentData.map((o) => o.validate());
    await Promise.allSettled(e), await ((n = (t = this.dataValidator) == null ? void 0 : t.validate) == null ? void 0 : n.call(t, this.value));
  }
  /**
   * @inheritDoc
   */
  async getValidationResult() {
    if (!this.needValidate)
      return;
    const e = [];
    for (let t = 0; t < this.componentData.length; t++) {
      const o = await this.componentData[t].getValidationResult();
      e.push(o);
    }
    return e;
  }
  /**
   * @inheritDoc
   */
  reset() {
    this.setValue(this.initialValue), this.componentData.forEach((e) => {
      e.fields.forEach((t) => t.reset());
    }), this.clearError();
  }
  /**
   * @inheritDoc
   */
  clear() {
    this.setValue(this.defaultValue), this.touched = !1, this.clearError();
  }
  /**
   * @returns true if the field should be validated, false otherwise.
   */
  get needValidate() {
    return Wt(this.componentStore, this.dataContext.dataRoot);
  }
  /**
   * Clears the error message for this field.
   */
  clearError() {
    this.error = void 0, this.componentData.forEach((e) => {
      e.fields.forEach((t) => t.setError(void 0));
    });
  }
  /**
   * @inheritDoc
   */
  get errors() {
    let e = !1;
    const t = [];
    if (this.componentData.forEach((n) => {
      t.push(n.errors), e = e || n.hasErrors;
    }), !!e)
      return t;
  }
  /**
   * @returns the component settings for the RepeaterItem component.
   */
  get repeaterItemStore() {
    var n;
    const e = JSON.parse(JSON.stringify(this.componentStore)), t = new k(this.componentStore.key, "RepeaterItem");
    return t.type = "RepeaterItem", t.children = e.children, t.renderWhen = (n = e.props) == null ? void 0 : n.itemRenderWhen, t;
  }
  /**
   * @returns the number of elements in the repeater.
   */
  get itemsCount() {
    return !this.initialData || !Array.isArray(this.initialData) ? 0 : this.initialData.length;
  }
  /**
   * @inheritDoc
   */
  get componentData() {
    const e = this.itemsCount, t = this.repeaterItemStore, n = this.componentStore.key;
    return Zn(() => {
      const o = [];
      for (let i = 0; i < e; i++) {
        const s = new k(`${n}-context-item-${i}`, "Fragment"), c = this.componentDataFactory.createComponentData(s, !1);
        c.index = i, c.parent = this.dataContext.dataRoot;
        const l = new fn(this, this.store, this.getValidationRules, this.dataContext, c, i), d = new k(`${n}-root-item-${i}`, "Fragment"), f = this.componentDataFactory.createComponentData(d, !1, void 0, l);
        f.setParent(c);
        const p = k.createFromObject(t);
        p.key = `${n}-item-${i}`, this.componentDataFactory.createComponentData(p, !0, void 0, l).setParent(f), o.push(c);
      }
      return this.deferFieldCalculation || this.initFields(o), o;
    });
  }
  initFields(e) {
    e.map((t) => {
      t.fields.forEach((n) => n.init());
    });
  }
  get errorFieldName() {
    return `${this.componentStore.key}Error`;
  }
}
Oe = new WeakMap(), Ne = new WeakMap();
class fn {
  /**
   * Creates the context for the RepeaterField.
   * @param repeaterField the RepeaterField instance.
   * @param store the form viewer settings.
   * @param getValidationRules the function to get the validation rules.
   * @param parentContext the parent data context.
   * @param root the root component data.
   * @param index the index of the current item in the repeater.
   */
  constructor(e, t, n, o, i, s) {
    this.repeaterField = e, this.store = t, this.getValidationRules = n, this.parentContext = o, this.root = i, this.index = s;
  }
  /**
   * @inheritDoc
   */
  get initialData() {
    const e = this.repeaterField.initialData;
    if (Array.isArray(e))
      return e[this.index];
  }
  /**
   * @inheritDoc
   */
  calculateValue(e, t) {
    return hn(
      e,
      t,
      this.dataRoot,
      (n, o) => this.store.localizeComponent(n, this.dataRoot, o)
    );
  }
  /**
   * @inheritDoc
   */
  get dataRoot() {
    return this.root;
  }
  /**
   * @inheritDoc
   */
  createDataValidator(e, t, n) {
    const o = this.getValidationRules(t);
    return et.create(
      this.store,
      pn(o),
      e.schema,
      n,
      this.store.localizeErrorMessages.bind(this.store, this.dataRoot, e)
    );
  }
}
const Ii = (r) => {
  if (r)
    try {
      return JSON.parse(r);
    } catch {
      return;
    }
}, fr = (r, e, t, n, o) => {
  const i = r[e] ?? [];
  if (typeof t == "number" && i.length >= t)
    return;
  const s = Ii(n) ?? {}, c = [...i];
  typeof o == "number" ? c.splice(o, 0, s) : c.push(s), r[e] = c;
}, mr = (r, e, t, n) => {
  const o = r[e];
  if (!Array.isArray(o) || typeof n == "number" && o.length <= n)
    return;
  const i = [...o];
  i.splice(t, 1), r[e] = i;
}, mn = (r) => {
  const e = r.dataRootProvider;
  if (e instanceof fn)
    return e.repeaterField.componentStore.key;
}, Bi = T.functionalAction((r, e) => {
  if (e.dataKey) {
    fr(r.data, e.dataKey, e.max, e.rowData, e.index);
    return;
  }
  const t = mn(r.sender);
  t && r.parentData && fr(r.parentData, t, e.max, e.rowData, e.index);
}, {
  dataKey: "string",
  rowData: "string",
  index: "number",
  max: "number"
}), Wi = T.functionalAction((r, e) => {
  const t = e.index ?? r.index ?? -1;
  if (e.dataKey) {
    mr(r.data, e.dataKey, t, e.min);
    return;
  }
  const n = mn(r.sender);
  n && r.parentData && mr(r.parentData, n, t, e.min);
}, {
  dataKey: "string",
  index: "number",
  min: "number"
}), Ki = {
  // eslint-disable-next-line no-console
  log: T.functionalAction(console.log),
  validate: T.functionalAction(async (r) => await r.store.form.componentTree.validate()),
  clear: T.functionalAction((r) => r.store.form.componentTree.clear()),
  reset: T.functionalAction((r) => r.store.form.componentTree.reset()),
  addRow: Bi,
  removeRow: Wi
}, yn = "validator-", Ji = (r) => `${yn}${r}`, Oa = (r) => r.startsWith(yn), Na = (r) => {
  r.localization = tn(r.localization);
  const e = `${r.localizationStringId} = ${r.localization}`, t = new kr(e), n = new Ar(`${r.language.fullCode}`), o = n.addResource(t);
  if (o.length > 0)
    return O.error([...o]);
  const i = n.getMessage(r.localizationStringId);
  if (typeof i > "u")
    return O.error([{ message: "Localization message not found", name: "MessageNotFound" }]);
  if (i.value === null)
    return O.error([{ message: "Localization message is null", name: "MessageIsNull" }]);
  const { result: s, missingProperties: c, fluentErrors: l } = Zt(n, r.data, i.value);
  return l.length > 0 ? O.error(l) : c.length > 0 ? O.warning(`The following variable(s) are not defined: ${c.join(", ")}`) : O.success(s);
}, Hi = (r, e, t, n, o = "component") => {
  const { defaultBundle: i, fluentBundle: s } = vn(r, t), c = {};
  return Object.keys(n.props).forEach((l) => {
    const d = n.props[l];
    if (!_r(d))
      return;
    const f = E(`${n.key}_${o}_${l}`), p = s.getMessage(f) ?? (i == null ? void 0 : i.getMessage(f));
    if (!p) {
      c[l] = "[NOT LOCALIZED]";
      return;
    }
    const { result: g, fluentErrors: x } = Zt(s, e.fluentData, p.value);
    c[l] = g, gn(x);
  }), c;
}, Ui = (r, e, t, n, o) => {
  const i = Ji(o), s = "message", c = E(`${n.key}_${i}_${s}`), { defaultBundle: l, fluentBundle: d } = vn(r, t), f = d.getMessage(c) ?? (l == null ? void 0 : l.getMessage(c));
  if (!f)
    return;
  const { result: p, fluentErrors: g } = Zt(d, e.fluentData, f.value);
  return gn(g), p;
};
function Zi(r, e) {
  return new Proxy(r, {
    get(t, n) {
      return n in t ? t[n] : (e.push(Ro(n)), "");
    },
    getOwnPropertyDescriptor(t, n) {
      return n in t ? Reflect.getOwnPropertyDescriptor(t, n) : {
        value: "",
        writable: !0,
        configurable: !0
      };
    }
  });
}
function Zt(r, e, t) {
  const n = [], o = Zi(e, n), i = [];
  return {
    result: r.formatPattern(t, o, i),
    missingProperties: n,
    fluentErrors: i
  };
}
function gn(r) {
  r.length > 0 && console.warn("Localization errors:", r);
}
const vn = (r, e) => {
  const t = r.defaultLanguage !== e ? r.localization.getFluentBundle(r.defaultLanguage.fullCode) : void 0, n = r.localization.getFluentBundle(e.fullCode);
  return { defaultBundle: t, fluentBundle: n };
};
class ut {
  /**
   * Creates a localization language for the form builder.
   * @param code the language code, for example, 'en'.
   * @param dialect the dialect code, for example, 'US'.
   * @param name the name of the language, for example 'English'.
   * @param description the description of the language, for example 'American English'.
   * @param bidi the type of text layout, for example, BiDi.LTR.
   */
  constructor(e, t, n, o, i = ee.LTR) {
    this.code = e, this.dialect = t, this.name = n, this.description = o, this.bidi = i;
  }
  /**
   * @returns Full code of the Language i.e en-US, en-GB etc.
   */
  get fullCode() {
    return `${this.code}-${this.dialect}`;
  }
  /**
   * Clones an existing instance of the language.
   * @param source the cloning object.
   * @returns the object clone.
   */
  static clone(e) {
    return new ut(e.code, e.dialect, e.name, e.description, e.bidi);
  }
}
const { height: qi } = lt, { flexDirection: Yi, gap: Qi } = jt, wn = pe({
  ...jt,
  ...lt,
  height: qi.setup({ default: "100%" }),
  flexDirection: Yi.default("column"),
  gap: Qi.default("10px")
}), _i = he(wn), q = new M(
  Jt,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  _i,
  void 0,
  void 0,
  "container"
), Gi = {
  color: "red"
}, qt = ({ error: r }) => /* @__PURE__ */ u("h1", { style: Gi, children: (r == null ? void 0 : r.message) ?? JSON.stringify(r) });
qt.displayName = "InternalError";
const tt = new M(qt);
function Xi(r) {
  const e = new k(tt.name, tt.type);
  e.props.error = { value: r };
  const t = new k(q.name, q.type);
  return t.children = [e], t;
}
function es(r) {
  const e = { error: r };
  return new M(qt, void 0, void 0, void 0, void 0, e);
}
const rt = "Template:";
function bn(r) {
  return rt + r;
}
function Cn(r) {
  if (r.startsWith(rt))
    return r.slice(rt.length);
  throw new Error(`Cannot determine template name from '${r}'`);
}
function yr(r) {
  return r.startsWith(rt);
}
function m() {
  return {
    params: [],
    withParameter(e, t, n = !1, o, i) {
      return this.params.push({ key: e, type: t ?? "string", required: n, default: o, editorType: i }), this;
    },
    withValidatorFactory(e) {
      return { ...this, validatorFactory: e };
    }
  }.withParameter("message");
}
function y(r) {
  return async (e) => {
    var n;
    const t = await (r == null ? void 0 : r.safeParseAsync(e));
    return t != null && t.success ? !0 : ((n = t == null ? void 0 : t.error.issues) == null ? void 0 : n[0].message) ?? !1;
  };
}
const we = N.array(N.any()), ts = {
  nonEmpty: m().withValidatorFactory(({ message: r }) => y(we.nonempty(r))),
  length: m().withParameter("length", "number", !0).withValidatorFactory(({ length: r, message: e }) => y(we.length(r, e))),
  min: m().withParameter("limit", "number", !0).withValidatorFactory(({ limit: r, message: e }) => y(we.min(r, e))),
  max: m().withParameter("limit", "number", !0).withValidatorFactory(({ limit: r, message: e }) => y(we.max(r, e))),
  code: m().withParameter("code", "array", !0, void 0, "code").withValidatorFactory(({ code: r, message: e }) => {
    const t = Q("value", r);
    return y(we.refine(t, e));
  })
}, mt = N.boolean(), rs = {
  truthy: m().withValidatorFactory(({ message: r }) => y(mt.refine((e) => e, r))),
  falsy: m().withValidatorFactory(({ message: r }) => y(mt.refine((e) => !e, r))),
  code: m().withParameter("code", "boolean", !0, void 0, "code").withValidatorFactory(({ code: r, message: e }) => {
    const t = Q("value", r);
    return y(mt.refine(t, e));
  })
}, yt = N.date(), ns = {
  min: m().withParameter("value", "date", !0).withValidatorFactory(({ value: r, message: e }) => y(yt.min(new Date(r), e))),
  max: m().withParameter("value", "date", !0).withValidatorFactory(({ value: r, message: e }) => y(yt.max(new Date(r), e))),
  code: m().withParameter("code", "date", !0, void 0, "code").withValidatorFactory(({ code: r, message: e }) => {
    const t = Q("value", r);
    return y(yt.refine(t, e));
  })
}, H = N.number(), os = {
  min: m().withParameter("limit", "number", !0).withValidatorFactory(({ limit: r, message: e }) => y(H.min(r, e))),
  max: m().withParameter("limit", "number", !0).withValidatorFactory(({ limit: r, message: e }) => y(H.max(r, e))),
  lessThan: m().withParameter("value", "number", !0).withValidatorFactory(({ value: r, message: e }) => y(H.lt(r, e))),
  moreThan: m().withParameter("value", "number", !0).withValidatorFactory(({ message: r, value: e }) => y(H.gt(e, r))),
  integer: m().withValidatorFactory(({ message: r }) => y(H.int(r))),
  multipleOf: m().withParameter("value", "number", !0).withValidatorFactory(({ message: r, value: e }) => y(H.multipleOf(e, r))),
  finite: m().withValidatorFactory(({ message: r }) => y(H.finite(r))),
  code: m().withParameter("code", "number", !0, void 0, "code").withValidatorFactory(({ code: r, message: e }) => {
    const t = Q("value", r);
    return y(H.refine(t, e));
  })
}, gr = N.union([N.object({}).passthrough(), N.string()]), is = {
  nonEmpty: m().withValidatorFactory(({ message: r }) => y(gr.refine((e) => e, r))),
  code: m().withParameter("code", "object", !0, void 0, "code").withValidatorFactory(({ code: r, message: e }) => {
    const t = Q("value", r);
    return y(gr.refine(t, e));
  })
}, S = N.string(), ss = {
  required: m().withValidatorFactory(({ message: r }) => y(N.string({ required_error: r }).nonempty(r))),
  nonEmpty: m().withValidatorFactory(({ message: r }) => y(S.nonempty(r))),
  length: m().withParameter("length", "number", !0).withValidatorFactory(({ length: r, message: e }) => y(S.length(r, e))),
  min: m().withParameter("limit", "number", !0).withValidatorFactory(({ limit: r, message: e }) => y(S.min(r, e))),
  max: m().withParameter("limit", "number", !0).withValidatorFactory(({ limit: r, message: e }) => y(S.max(r, e))),
  regex: m().withParameter("regex", "string", !0).withValidatorFactory(({ message: r, regex: e }) => y(S.regex(new RegExp(e), r))),
  email: m().withValidatorFactory(({ message: r }) => y(S.email(r))),
  url: m().withValidatorFactory(({ message: r }) => y(S.url(r))),
  uuid: m().withValidatorFactory(({ message: r }) => y(S.uuid(r))),
  ip: m().withValidatorFactory(({ message: r }) => y(S.ip(r))),
  datetime: m().withParameter("precision", "number").withParameter("offset", "boolean").withValidatorFactory(({ message: r, offset: e, precision: t }) => y(S.datetime({ message: r, offset: e, precision: t }))),
  includes: m().withParameter("value", "string", !0).withParameter("position", "number").withValidatorFactory(({ message: r, value: e, position: t }) => y(S.includes(e, { message: r, position: t }))),
  startsWith: m().withParameter("value", "string", !0).withValidatorFactory(({ message: r, value: e }) => y(S.startsWith(e, r))),
  endsWith: m().withParameter("value", "string", !0).withValidatorFactory(({ message: r, value: e }) => y(S.endsWith(e, r))),
  code: m().withParameter("code", "string", !0, void 0, "code").withValidatorFactory(({ code: r, message: e }) => {
    const t = Q("value", r);
    return y(S.refine(t, e));
  })
}, as = N.string(), cs = {
  required: m().withValidatorFactory(({ message: r }) => y(N.string({ required_error: r }).nonempty(r))),
  code: m().withParameter("code", "string", !0, void 0, "code").withValidatorFactory(({ code: r, message: e }) => {
    const t = Q("value", r);
    return y(as.refine(t, e));
  })
}, ls = {
  string: ss,
  number: os,
  boolean: rs,
  date: ns,
  time: cs,
  object: is,
  array: ts,
  enum: {}
}, C = (r) => r, w = (r) => {
  throw new Error(`Cannot convert from '${r}'`);
}, ds = (r) => JSON.parse(r), vr = (r) => {
  try {
    const e = JSON.parse(r);
    return Et(e) ? e : r;
  } catch (e) {
    return console.warn(e), r;
  }
}, Ue = (r) => JSON.stringify(r), Ze = (r) => r.toString(), be = (r) => (e) => e instanceof r ? e : w(e), us = (r) => {
  const e = Number(r);
  return isNaN(e) && w(r), e;
}, wr = (r) => new Date(r), gt = (r) => r > 9 ? `${r}` : `0${r}`, hs = (r) => {
  const e = gt(r.getHours()), t = gt(r.getMinutes()), n = gt(r.getSeconds());
  return `${e}:${t}:${n}`;
}, ps = {
  string: {
    string: C,
    number: us,
    boolean: (r) => r === "true",
    object: vr,
    array: ds,
    enum: C,
    date: wr,
    time: C
  },
  number: {
    string: Ze,
    number: C,
    boolean: (r) => r === 1,
    object: vr,
    array: w,
    enum: C,
    date: wr,
    time: Ze
  },
  boolean: {
    string: Ze,
    number: (r) => r ? 1 : 0,
    boolean: C,
    object: w,
    array: w,
    enum: C,
    date: w,
    time: w
  },
  object: {
    string: Ue,
    number: w,
    boolean: w,
    object: C,
    array: w,
    enum: C,
    date: w,
    time: w
  },
  array: {
    string: Ue,
    number: w,
    boolean: w,
    object: w,
    array: C,
    enum: C,
    date: w,
    time: w
  },
  enum: {
    string: Ue,
    number: be(Number),
    boolean: be(Boolean),
    object: be(Object),
    array: be(Array),
    enum: C,
    date: be(Date),
    time: Ue
  },
  date: {
    string: Ze,
    number: (r) => r.getTime(),
    boolean: w,
    object: w,
    array: w,
    enum: C,
    date: C,
    time: hs
  },
  time: {
    string: C,
    number: w,
    boolean: w,
    object: w,
    array: w,
    enum: C,
    date: w,
    time: C
  }
}, fs = (r) => typeof r == "string" ? "string" : typeof r == "number" ? "number" : typeof r == "boolean" ? "boolean" : r instanceof Date ? "date" : Array.isArray(r) ? "array" : typeof r == "object" ? "object" : "enum", ms = (r, e) => {
  var o;
  if (r === null || typeof r > "u")
    return;
  const t = fs(r), n = (o = ps[t]) == null ? void 0 : o[e];
  if (!n)
    throw new Error(`Cannot convert ${r} from '${t}' to '${e}'`);
  try {
    return n(r);
  } catch (i) {
    throw new Error(`Cannot convert ${r} from '${t}' to '${e}'. ${i}.`);
  }
};
var je, $e;
class ys {
  /**
   * Creates the field with form data for the component.
   * @param dataContext the data context for this field.
   * @param componentStore the component settings.
   * @param model the component metadata for the form viewer.
   * @param deferFieldCalculation if true, then the calculated field must be explicitly initialized.
   */
  constructor(e, t, n, o) {
    v(this, je, void 0);
    /**
     * @inheritDoc
     */
    a(this, "error");
    /**
     * @inheritDoc
     */
    a(this, "touched", !1);
    /**
     * @inheritDoc
     */
    a(this, "value");
    /**
     * @inheritDoc
     */
    a(this, "valued");
    /**
     * The type of the field value.
     */
    a(this, "valueType");
    a(this, "dataValidator");
    v(this, $e, void 0);
    /**
     * Sets the error value.
     * @param error the error value to be set. If the error is `undefined` or `null`, the error value will be reset to `undefined`.
     * @throws {Error} throws an error if the provided value is not a string, undefined, or null.
     */
    a(this, "setError", (e) => {
      if (typeof e == "string")
        this.error = e;
      else if (typeof e > "u" || e === null)
        this.error = void 0;
      else
        throw new Error(`Expected 'string | undefined | null' type, got '${typeof e}'`);
    });
    if (this.dataContext = e, this.componentStore = t, this.model = n, this.deferFieldCalculation = o, !n.valued)
      throw new Error("'model.valued' is falsy");
    if (!n.valueType)
      throw new Error("'model.typeOfValue' is undefined");
    this.valued = n.valued, this.valueType = n.valueType;
    const i = "SimpleField";
    J(this, {
      model: !1,
      dataValidator: P.ref,
      dataContext: P.ref
    }, { name: B(i, { key: t.key }), autoBind: !0 }), D(this, $e, [
      Ye(
        () => {
          this.dataValidator = this.dataContext.createDataValidator(
            t,
            this.valueType,
            (s) => this.error = s
          ), Rr(() => {
            var s;
            (s = h(this, je)) == null || s.dispose(), D(this, je, this.dataValidator);
          });
        },
        { name: Xe(i, "setValidator", { key: t.key }) }
      ),
      Ye(
        () => {
          const c = Ut(this.dataContext.initialData, t.key) ?? this.initialValue;
          if (this.deferFieldCalculation) {
            this.value = c;
            return;
          }
          const [l, d] = this.dataContext.calculateValue(t, this.valued);
          if (l) {
            this.value = d;
            return;
          }
          this.value = c;
        },
        { name: Xe(i, "setValue", { key: t.key }) }
      ),
      () => {
        var s;
        return (s = this.dataValidator) == null ? void 0 : s.dispose();
      }
    ]);
  }
  /**
   * @inheritDoc
   */
  get fieldType() {
    return "simple";
  }
  /**
   * @inheritDoc
   */
  init() {
    this.deferFieldCalculation = !1;
  }
  /**
   * @returns the initial value for the field.
   */
  get initialValue() {
    var e;
    return ((e = this.componentStore.props[this.valued]) == null ? void 0 : e.value) ?? this.defaultValue;
  }
  /**
   * @returns the default value for the field.
   */
  get defaultValue() {
    var e;
    return (e = this.model.defaultProps) == null ? void 0 : e[this.valued];
  }
  /**
   * @inheritDoc
   */
  dispose() {
    h(this, $e).forEach((e) => e());
  }
  /**
   * @inheritDoc
   */
  setValue(e) {
    var t, n, o;
    if (this.value = ms(e, this.valueType), !this.needValidate) {
      this.clearError();
      return;
    }
    ((t = this.componentStore.schema) == null ? void 0 : t.autoValidate) !== !1 && ((o = (n = this.dataValidator) == null ? void 0 : n.sendValidationEvent) == null || o.call(n, this.value));
  }
  /**
   * @inheritDoc
   */
  setTouched() {
    this.touched = !0;
  }
  /**
   * @inheritDoc
   */
  async validate() {
    var e, t;
    if (!this.needValidate) {
      this.clearError();
      return;
    }
    await ((t = (e = this.dataValidator) == null ? void 0 : e.validate) == null ? void 0 : t.call(e, this.value));
  }
  /**
   * @inheritDoc
   */
  async getValidationResult() {
    var t, n;
    if (!this.needValidate)
      return;
    const e = await ((n = (t = this.dataValidator) == null ? void 0 : t.getValidationResult) == null ? void 0 : n.call(t, this.value));
    return e == null ? void 0 : e.map(({ message: o }) => o);
  }
  /**
   * @inheritDoc
   */
  reset() {
    this.value = this.initialValue ?? this.defaultValue, this.clearError();
  }
  /**
   * @inheritDoc
   */
  clear() {
    this.value = this.defaultValue, this.touched = !1, this.clearError();
  }
  /**
   * @returns true if the field should be validated, false otherwise.
   */
  get needValidate() {
    return Wt(this.componentStore, this.dataContext.dataRoot);
  }
  /**
   * Clears the error message for this field.
   */
  clearError() {
    this.error = void 0;
  }
}
je = new WeakMap(), $e = new WeakMap();
function En(r) {
  var t;
  const e = (t = r.props.storeDataInParentForm) == null ? void 0 : t.value;
  return typeof e > "u" ? !0 : e;
}
class Pn {
  /**
   * Creates the nested form field with form data for the component.
   * @param componentStore the component settings.
   * @param viewerStore viewerStore the form viewer settings.
   */
  constructor(e, t) {
    /**
     * @inheritDoc
     */
    a(this, "valued", "");
    /**
     * @inheritDoc
     */
    a(this, "touched", !1);
    /**
     * @inheritDoc
     */
    a(this, "setError", (e) => {
      if (!e)
        return;
      if (typeof e != "object")
        throw new Error(`Expected 'object' type, got '${typeof e}'`);
      const t = e;
      this.form.fields.forEach((n, o) => {
        if (t[o])
          return n.setError(t[o]);
        if (n.storeDataInParentForm)
          return n.setError(t);
      });
    });
    this.componentStore = e, this.viewerStore = t, J(
      this,
      void 0,
      { name: B("FormField", { key: e.key }), autoBind: !0 }
    );
  }
  /**
   * @inheritDoc
   */
  get fieldType() {
    return "simple";
  }
  /**
   * @inheritDoc
   */
  get storeDataInParentForm() {
    return En(this.componentStore);
  }
  /**
   * @inheritDoc
   */
  get value() {
    return this.form.data;
  }
  /**
   * @inheritDoc
   */
  dispose() {
    this.viewerStore.dispose();
  }
  /**
   * @inheritDoc
   */
  clear() {
    this.form.clear(), this.touched = !1;
  }
  /**
   * @inheritDoc
   */
  reset() {
    this.form.reset();
  }
  /**
   * @inheritDoc
   */
  setTouched() {
    this.touched = !0;
  }
  /**
   * @inheritDoc
   */
  setValue(e) {
    if (!e) {
      this.form.reset();
      return;
    }
    if (typeof e != "object")
      throw new Error(`Expected 'object' type, got '${typeof e}'`);
    const t = e;
    this.form.fields.forEach((n, o) => {
      const i = t[o];
      typeof i > "u" ? n.reset() : n.setValue(i);
    });
  }
  /**
   * @inheritDoc
   */
  async validate() {
    await this.form.validate();
  }
  /**
   * @inheritDoc
   */
  async getValidationResult() {
    return await this.form.getValidationResult();
  }
  /**
   * @inheritDoc
   */
  init() {
    this.form.fields.forEach((e) => e.init());
  }
  /**
   * @returns the form for the field.
   */
  get form() {
    return this.viewerStore.form.componentTree;
  }
  /**
   * @inheritDoc
   */
  get errors() {
    return this.form.errors;
  }
}
function gs(r, e) {
  let t = 1;
  for (; t < 1e4; ) {
    const o = `${r}${t}`;
    if (!e.has(o))
      return o;
    t++;
  }
  const n = (/* @__PURE__ */ new Date()).getTime();
  return `${r}_${n}`;
}
class vt {
  /**
   * Creates a new instance of Form.
   * @param componentTree the root component of the form.
   * @param localization the localization of the form.
   * @param actions the form custom actions.
   * @param languages the localization languages of the form.
   * @param defaultLanguage the default localization language of the form.
   */
  constructor(e, t, n, o, i) {
    /**
     * Root component of the form.
     */
    a(this, "componentTree");
    /**
     * Localization of the form.
     */
    a(this, "localization");
    /**
     * Localization languages of the form.
     */
    a(this, "languages", []);
    /**
     * The set of action definitions.
     */
    a(this, "actions");
    /**
     * Properties of the component displaying the error.
     */
    a(this, "errorProps", {});
    /**
     * The type name of the component displaying the tooltip.
     */
    a(this, "tooltipType");
    /**
     * The type name of the component displaying the error.
     */
    a(this, "errorType");
    /**
     * Default localization language of the form.
     */
    a(this, "defaultLanguage");
    this.componentTree = e, this.localization = t, this.actions = n, this.languages = o, this.defaultLanguage = i, this.componentTree.events.onBeforeDelete.subscribe(this.onComponentDataBeforeDelete.bind(this)), this.componentTree.events.onAfterKeyChanged.subscribe(this.onComponentDataAfterKeyChanged.bind(this)), J(this);
  }
  /**
   * @returns the actions names array.
   */
  get actionNames() {
    return Object.keys(this.actions);
  }
  /**
   * Initializes form fields.
   */
  initFields() {
    this.componentTree.fields.forEach((e) => e.init());
  }
  /**
   * Disposes the form. Disposes all the components and localization.
   */
  dispose() {
    this.componentTree.dispose();
  }
  /**
   * Removes the action from the form.
   * @param name the action name to remove.
   */
  removeAction(e) {
    delete this.actions[e], this.removeCodeActionBinding(e, this.componentTree.store);
  }
  /**
   * Changes the existing action to the new one, adds the action if the existing action is not found.
   * @param oldActionName the existing action name.
   * @param newAction the new named action.
   */
  updateOrAddAction(e, t) {
    this.actions[t.name] = t.actionDefinition, this.rebindActionHandlers(this.componentTree.store, e, t), e !== t.name && delete this.actions[e];
  }
  /**
   * Clones the action.
   * @param namedAction the named action to clone.
   */
  cloneAction(e) {
    if (!this.actions)
      return;
    const t = new Set(this.actionNames), n = JSON.parse(JSON.stringify(e.actionDefinition)), o = gs(`${e.name}_`, t);
    this.actions[o] = T.createFromObject(n);
  }
  rebindActionData(e, t) {
    e.name = t.name;
    const n = e.args;
    if (!n)
      return;
    const o = new Set(Object.keys(t.actionDefinition.params));
    Object.keys(n).forEach((i) => {
      o.has(i) || delete n[i];
    });
  }
  rebindActionHandlers(e, t, n) {
    var i;
    const o = e.events;
    o && Object.keys(o).forEach((s) => {
      const c = o[s];
      c == null || c.filter((l) => l.type === "code" && l.name === t).forEach((l) => this.rebindActionData(l, n));
    }), (i = e.children) == null || i.forEach((s) => {
      this.rebindActionHandlers(s, t, n);
    });
  }
  removeCodeActionBinding(e, t) {
    var o;
    const n = t.events;
    n && Object.keys(n).forEach((i) => {
      const s = n[i];
      s.length && (n[i] = s.filter((c) => !(c.type === "code" && c.name === e)));
    }), (o = t.children) == null || o.forEach((i) => this.removeCodeActionBinding(e, i));
  }
  onComponentDataBeforeDelete(e) {
    this.localization.removeLocalization(e.key);
  }
  onComponentDataAfterKeyChanged(e, { oldKey: t, newKey: n }) {
    this.localization.changeComponentKey(t, n);
  }
}
const vs = "LocalizationStore";
var at, Dn;
class ws {
  constructor(e, t) {
    v(this, at);
    this.languageFullCode = e, this.localizationStore = t, J(this, void 0, { name: B("FluentBundleHolder") });
  }
  get fluentBundle() {
    const e = this.localizationStore.value[this.languageFullCode], t = new Ar(this.languageFullCode);
    return e && b(this, at, Dn).call(this, e).forEach((o) => {
      const i = t.addResource(new kr(o));
      i.length > 0 && (console.error(`Unable to add localization resource: ${o}`), i.forEach(console.error));
    }), t;
  }
}
at = new WeakSet(), Dn = function(e) {
  const t = [];
  return Object.entries(e).forEach(([n, o]) => {
    Object.entries(o ?? {}).forEach(([i, s]) => {
      Object.entries(s ?? {}).forEach(([c, l]) => {
        l && t.push(`${n}_${i}_${c} = ${tn(l)}`);
      });
    });
  }), t;
};
class wt {
  /**
   * The constructor.
   * @param value the initial localization value.
   */
  constructor(e = {}) {
    a(this, "localizationCache", /* @__PURE__ */ new Map());
    /**
     * The localization data.
     */
    a(this, "value", {});
    J(this, void 0, { name: B(vs) }), this.value = e;
  }
  /**
   * Returns value of localization constant.
   * @param languageFullCode the full code (en-US, en-GB etc.) of the language we are looking to localize.
   * @param componentKey the component we are looking to localize.
   * @param propertyName the property name we are looking to localize.
   * @param type the type of localization.
   * @returns the value of localization constant.
   */
  getLocalization(e, t, n, o) {
    var c, l, d;
    const i = E(t), s = E(n);
    return (d = (l = (c = this.value[e]) == null ? void 0 : c[i]) == null ? void 0 : l[o]) == null ? void 0 : d[s];
  }
  /**
   * Sets localization for component property.
   * @param languageFullCode the full code (en-US, en-GB etc.) of the language in which localization will be set.
   * @param componentKey the component key that requires localization.
   * @param propertyName the component's property name to be localized.
   * @param type the type of localization.
   * @param value the localization value.
   */
  setLocalization(e, t, n, o, i) {
    var l, d, f;
    const s = E(t), c = E(n);
    (l = this.value)[e] ?? (l[e] = {}), (d = this.value[e])[s] ?? (d[s] = {}), (f = this.value[e][s])[o] ?? (f[o] = {}), this.value[e][s][o][c] = i;
  }
  /**
   * Removes localization for component.
   * @param componentKey the component key that requires localization removal.
   */
  removeLocalization(e) {
    const t = E(e);
    for (const n in this.value)
      delete this.value[n][t], Object.keys(this.value[n]).length === 0 && delete this.value[n];
  }
  /**
   * Removes localization for component with specified type.
   * @param componentKey the component key that requires localization removal.
   * @param type the localization type.
   */
  removeLocalizationForType(e, t) {
    const n = E(e);
    for (const o in this.value)
      this.value[o][n] && (delete this.value[o][n][t], Object.keys(this.value[o][n]).length === 0 && delete this.value[o][n], Object.keys(this.value[o]).length === 0 && delete this.value[o]);
  }
  /**
   * Checks that the specified language exists in the localization.
   * @param languageFullCode The full code (en-US, en-GB etc.) of the language to be checked.
   * @returns true if the specified language exists in the localization.
   */
  hasLanguage(e) {
    return !!this.value[e];
  }
  /**
   * Checks that the specified property has localization.
   * @param componentKey the component we are looking to localize.
   * @param propertyName the component's property name to be localized.
   * @param type the type of localization.
   * @returns true if the specified property has localization in at least one language.
   */
  hasLocalization(e, t, n) {
    const o = E(e), i = E(t);
    return Object.values(this.value).some((s) => {
      var c, l;
      return (l = (c = s == null ? void 0 : s[o]) == null ? void 0 : c[n]) == null ? void 0 : l[i];
    });
  }
  /**
   * If the FluentBundle for the specified language is found, this function returns it.
   * Otherwise, an empty FluentBundle is returned.
   * @param languageFullCode the full code (en-US, en-GB etc.) of the language to get fluent bundle.
   * @returns the FluentBundle for the specified language.
   */
  getFluentBundle(e) {
    const t = this.localizationCache.get(e) ?? new ws(e, this);
    return this.localizationCache.has(e) || this.localizationCache.set(e, t), t.fluentBundle;
  }
  /**
   * Changes the component key for all languages in the value object.
   * @param oldComponentKey the old component key to be replaced.
   * @param newComponentKey the new component key to replace the old component key.
   */
  changeComponentKey(e, t) {
    const n = E(e), o = E(t);
    for (const i in this.value) {
      const s = this.value[i][n];
      s && (this.value[i][o] = s, delete this.value[i][n]);
    }
  }
  /**
   * Retrieves the localization values for a given component key.
   * @param componentKey the key of the component to retrieve localization for.
   * @returns the object containing the localization values for the component in each supported language.
   */
  getLocalizationForComponent(e) {
    const t = E(e), n = {};
    for (const o in this.value) {
      const i = this.value[o][t];
      i && (n[o] = {}, n[o][e] = i);
    }
    return n;
  }
  /**
   * Inserts the localization values for a given component key. Replaces the old component key with the new component key.
   * @param localization the localization object for insertion.
   * @param oldComponentKey the old component key that needs to be replaced.
   * @param newComponentKey the new component key to be added.
   */
  addLocalizationWithNewKey(e, t, n) {
    const o = E(n);
    for (const i in e) {
      const s = e[i][t];
      s && (this.value[i][o] = s);
    }
  }
}
var xt = /* @__PURE__ */ ((r) => (r.version1 = "1", r))(xt || {});
const bs = {
  RsDatePicker: ["calendarDefaultDate", "defaultValue", "value"],
  RsCalendar: ["defaultValue", "value"]
};
function Vn(r, e, t, n) {
  var i;
  let o = e(t, r);
  return (i = r[n]) == null || i.forEach((s) => {
    o = Vn(s, e, o, n);
  }), o;
}
const bt = new ut("en", "US", "English", "American English");
class Cs {
  /**
   * Create the data context for the store.
   * @param store the store.
   */
  constructor(e) {
    this.store = e;
  }
  /**
   * @inheritDoc
   */
  get dataRoot() {
    return this.store.form.componentTree;
  }
  /**
   * @inheritDoc
   */
  get initialData() {
    return this.store.initialDataSlice;
  }
  /**
   * @inheritDoc
   */
  createDataValidator(e, t, n) {
    const o = this.store.getValidationRules(t);
    return et.create(
      this.store,
      pn(o),
      e.schema,
      n,
      this.store.localizeErrorMessages.bind(this.store, this.dataRoot, e)
    );
  }
  /**
   * @inheritDoc
   */
  calculateValue(e, t) {
    return hn(
      e,
      t,
      this.dataRoot,
      (n, o) => this.store.localizeComponent(n, this.dataRoot, o)
    );
  }
}
var ze, Me, Tt;
const Yt = class Yt {
  /**
   * Creates form viewer settings.
   * @param formViewerPropsStore the form viewer store settings.
   * @param parentStore the form viewer settings, used in templates.
   * @param parentComponentStore the parent component settings.
   * @param parentStoreContext the parent store data context.
   */
  constructor(e, t, n, o) {
    /**
     * Changes the form to the component with an error description.
     * @param e the error.
     */
    v(this, Me);
    /**
     * The currently selected language.
     */
    a(this, "selectedLanguage");
    /**
     * The Subject for submitting form events.
     */
    a(this, "eventSubject", new Fr());
    /**
     * Current display resolution type.
     */
    a(this, "viewMode", "desktop");
    /**
     * The form.
     */
    a(this, "form");
    /**
     * Models for templates that have not been explicitly defined.
     */
    v(this, ze, /* @__PURE__ */ new Map());
    /**
     * The context for working with data. **Internal use only**.
     */
    a(this, "dataContext");
    /**
     * The loading form error.
     */
    a(this, "formLoadError");
    this.formViewerPropsStore = e, this.parentStore = t, this.parentComponentStore = n, this.parentStoreContext = o;
    const i = this.createComponentData(new k(q.name, q.type)), s = new wt();
    this.form = new vt(i, s, {}, [], bt), this.dataContext = new Cs(this), Tr(this, {
      form: P,
      viewMode: !0,
      selectedLanguage: !0,
      clear: !0,
      parentStore: P.ref,
      parentComponentStore: P.ref,
      parentStoreContext: P.ref,
      initialDataSlice: !0,
      formLoadError: !0
    }, { name: B("ViewerStore") });
  }
  /**
   * @returns the Record with the common actions.
   */
  get commonActions() {
    return Ki;
  }
  /**
   * Returns an action by the specified action name and action type.
   * @param name the action name.
   * @param type the action type.
   * @returns the action.
   */
  getAction(e, t) {
    var o;
    let n;
    switch (t) {
      case "common":
        n = this.commonActions[e];
        break;
      case "code":
        n = this.form.actions[e];
        break;
      case "custom":
        n = (o = this.formViewerPropsStore.actions) == null ? void 0 : o[e];
        break;
    }
    if (!n)
      throw Error(`Action '${e}' with type '${t}' not found!`);
    return n;
  }
  /**
   * @inheritDoc
   */
  get formData() {
    return this.form.componentTree;
  }
  /**
   * Clears the form in Form Viewer.
   */
  clear() {
    const e = this.form, t = this.createComponentData(new k(q.name, q.type)), n = new wt();
    this.form = new vt(t, n, {}, e.languages, e.defaultLanguage), e.dispose();
  }
  /**
   * @inheritDoc
   */
  dispose() {
    this.form.dispose();
  }
  /**
   * @inheritDoc
   */
  get initialDataSlice() {
    if (!this.parentStoreContext || !this.parentComponentStore)
      return this.formViewerPropsStore.initialData;
    const e = this.parentStoreContext.initialData;
    if (En(this.parentComponentStore))
      return e;
    const t = Ut(e, this.parentComponentStore.key);
    return Array.isArray(t) || Lt(t) ? t : void 0;
  }
  /**
   * @inheritDoc
   */
  get showAllValidationErrors() {
    var e;
    return (e = this.formViewerPropsStore) == null ? void 0 : e.showAllValidationErrors;
  }
  /**
   * @inheritDoc
   */
  reduceScreen(e, t) {
    return Vn(this.form.componentTree, e, t, "children");
  }
  /**
   * Searches for an action, returns definition for the found action.
   * @param actionData the action's data.
   * @returns the action definition.
   * @throws Error, if action was not found.
   */
  findAction(e) {
    return this.getAction(e.name, e.type);
  }
  /**
   * Returns model for the specified type.
   * @param type the component type.
   * @returns the model for the specified type.
   */
  getModel(e) {
    const t = this.formViewerPropsStore.view.find(e);
    return t || (yr(e) ? h(this, ze).get(e) ?? this.addTemplateModel(e) : es(`Type '${e}' is not found!`));
  }
  addTemplateModel(e) {
    const t = Cn(e), n = Tn(t);
    return h(this, ze).set(n.type, n), n;
  }
  /**
   * Loads a form by form name and sets that form in the form viewer.
   * @param getForm the function that loads the form.
   * @param formName the form name.
   */
  loadForm(e, t) {
    if (e)
      try {
        const n = e(t);
        if (Mt(n)) {
          n.then(this.applyStringForm.bind(this)).catch(b(this, Me, Tt).bind(this));
          return;
        }
        this.applyStringForm(n);
      } catch (n) {
        b(this, Me, Tt).call(this, n);
      }
  }
  /**
   * @inheritDoc
   */
  createComponentData(e, t = !1, n, o) {
    o ?? (o = this.dataContext), n ?? (n = this.getModel(e.type));
    const i = this.createField(e, n, o, t), s = (l) => this.createComponentData(l, t, void 0, o), c = new $o(e, n, i, s, this.formViewerPropsStore.formValidators);
    return c.dataRootProvider = o, c;
  }
  /**
   * Returns the object with validators for the specified value type.
   * @param type the value type.
   * @returns the object with validators for the specified value type.
   */
  getValidationRules(e) {
    var t;
    return {
      custom: (t = this.formViewerPropsStore.validators) == null ? void 0 : t[e],
      internal: ls[e]
    };
  }
  createField(e, t, n, o) {
    if (t.kind === "repeater")
      return new Li(
        n,
        this,
        this,
        this.getValidationRules.bind(this),
        e,
        t,
        o
      );
    if (!t.valued)
      return;
    if (!yr(t.type))
      return new ys(n, e, t, o);
    const i = new Yt(this.formViewerPropsStore.clone(), this, e, n);
    return new Pn(e, i);
  }
  /**
   * Populates the value of this store with the values of the saved form.
   * @param text saved form value.
   */
  applyStringForm(e) {
    try {
      const t = JSON.parse(e);
      this.fixPropertyTypes(t.form), this.applyPersistedForm(t), this.formLoadError = void 0;
    } catch (t) {
      this.formLoadError = (t == null ? void 0 : t.message) ?? t, console.error(t);
    }
  }
  fixPropertyTypes(e) {
    var n;
    e.props || (e.props = {});
    const t = bs[e.type];
    t == null || t.forEach((o) => this.fixDateProperty(e, o)), (n = e.children) == null || n.forEach((o) => this.fixPropertyTypes(o));
  }
  fixDateProperty(e, t) {
    var o;
    const n = (o = e.props[t]) == null ? void 0 : o.value;
    (Gr(n) || Xr(n)) && (e.props[t].value = new Date(n));
  }
  /**
   * Populates the value of this store with the values of the saved form.
   * @param persistedForm saved form value.
   */
  applyPersistedForm(e) {
    var f;
    const t = this.form, n = e.version;
    typeof n < "u" && n !== xt.version1 && console.warn(`An unsupported version of form '${n}' has been detected. An attempt will be made to upload the form as version '${xt.version1}'.`);
    const o = k.createFromObject(e.form), i = this.createComponentData(o, !0), s = new wt(Z({}, e.localization)), c = ((f = e.languages) == null ? void 0 : f.map(ut.clone)) ?? [], l = c.find((p) => p.fullCode === e.defaultLanguage) ?? bt, d = To(e.actions);
    this.form = new vt(i, s, d, c, l), this.form.errorProps = e.errorProps ?? {}, this.form.tooltipType = e.tooltipType, this.form.errorType = e.errorType, this.form.initFields(), t.dispose();
  }
  /**
   * @returns the current display language.
   */
  get displayedLanguage() {
    if (this.parentStore)
      return this.parentStore.displayedLanguage;
    if (this.formViewerPropsStore.propsLanguage) {
      const e = this.form.languages.find((t) => t === this.formViewerPropsStore.propsLanguage);
      if (e)
        return e;
    }
    return this.selectedLanguage ?? this.form.defaultLanguage;
  }
  /**
   * @inheritDoc
   */
  localizeComponent(e, t, n) {
    return this.formViewerPropsStore.localizer ? this.formViewerPropsStore.localizer(n, this.displayedLanguage) : Hi(this.form, t, this.displayedLanguage, n, e);
  }
  /**
   * @inheritDoc
   */
  localizeErrorMessages(e, t, n) {
    if (n)
      return n.map((o) => Ui(this.form, e, this.displayedLanguage, t, o.settings.key) ?? Kt(o)).join(" ");
  }
};
ze = new WeakMap(), Me = new WeakSet(), Tt = function(e) {
  console.error(e), this.formLoadError = (e == null ? void 0 : e.message) ?? e;
  const t = Xi(e);
  this.applyPersistedForm({
    form: t,
    localization: {},
    defaultLanguage: bt.fullCode,
    languages: []
  });
};
let St = Yt;
function Es(r) {
  const [e, t] = kt();
  return j(() => {
    const n = r();
    return t(n), () => n.dispose();
  }, []), e;
}
const Ps = (r) => {
  const { store: e } = r, t = r.props;
  return j(() => {
    var n;
    (n = t.onFormDataChange) == null || n.call(t, e.formData);
  }, [e.formData.data, e.formData.errors]), j(() => {
    e.formViewerPropsStore.applyProps(t);
  }, [
    t.initialData,
    t.view,
    t.validators,
    t.formValidators,
    t.localize,
    t.language,
    t.actions,
    t.errorWrapper
  ]), null;
}, Ds = V("Notifier", Ps), Vs = ({
  children: r,
  props: { viewerRef: e, ...t },
  store: n
}) => (Jn(e, () => n, [n]), /* @__PURE__ */ fe(on, { value: t, children: [
  /* @__PURE__ */ u(Ds, { store: n, props: t }),
  /* @__PURE__ */ u(Ot, { value: n, children: r })
] })), xn = V("ExistingStoreProvider", Vs), xs = ({ children: r, props: e }) => {
  const t = Y(() => new St(new Ht(e)), [e]), n = Es(t);
  return n ? /* @__PURE__ */ u(xn, { children: r, props: e, store: n }) : null;
}, Ss = V("FactoryStoreProvider", xs), Ts = (r) => {
  const e = xr(ao);
  return e ? /* @__PURE__ */ u(xn, { children: r.children, props: r.props, store: e }) : /* @__PURE__ */ u(Ss, { children: r.children, props: r.props });
}, Rs = V("ViewerStoreProvider", Ts);
qn({ enforceActions: "never" });
const Fs = me`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5px;
`, ks = (r) => {
  const { className: e, children: t, ...n } = r, o = K(() => ye(Fs, e), [e]);
  return /* @__PURE__ */ u("div", { className: o, ...n, children: t });
}, As = (r) => /* @__PURE__ */ u(Xo, { children: /* @__PURE__ */ u(Rs, { props: r, children: /* @__PURE__ */ u(Go, { language: r.language, children: /* @__PURE__ */ fe(ks, { children: [
  /* @__PURE__ */ u(Zo, {}),
  /* @__PURE__ */ u(Oi, { event: r.event })
] }) }) }) }), Os = V("FormViewer", As), Ns = {
  fontSize: "xx-large",
  color: "red"
}, js = ({ children: r }) => /* @__PURE__ */ u("span", { style: Ns, children: r }), [
  /**
   * **Internal use only.**
   */
  $s,
  /**
   * **Internal use only.**
   */
  zs
] = te("TemplateContext"), Ms = (r) => {
  const e = L(), t = ne(), n = K(() => {
    const s = {
      formName: Cn(t.store.type),
      onFormDataChange: void 0,
      computeChildren: void 0,
      formValidators: void 0
    };
    return Object.assign({}, e, s);
  }, [t.store.type, e]), o = K(() => ({ templateProps: r, viewerProps: e, data: t }), [r, e, t]);
  if (!n.getForm)
    return /* @__PURE__ */ fe(js, { children: [
      "Please define the ",
      /* @__PURE__ */ u("code", { children: "getForm" }),
      " property!"
    ] });
  if (!(t.field instanceof Pn))
    return null;
  const i = t.field.viewerStore;
  return /* @__PURE__ */ u(zs, { value: o, children: /* @__PURE__ */ u(Ot, { value: i, children: /* @__PURE__ */ u(Os, { ...n }) }) });
}, Sn = pe(lt), Ls = he(Sn);
function Tn(r) {
  const e = bn(r), t = { name: r, storeDataInParentForm: !0 };
  return new M(
    Ms,
    r,
    void 0,
    e,
    "object",
    t,
    Ls,
    void 0,
    e,
    "template"
  );
}
const Rn = () => {
  const { parentStore: r } = A();
  return r ? /* @__PURE__ */ u(Bs, { parentStore: r }) : /* @__PURE__ */ u(Js, {});
};
Rn.displayName = "Slot";
const nt = new M(
  Rn,
  "Slot",
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  "slot"
), Is = ({ parentStore: r }) => {
  const { key: e } = ne(), { viewerProps: t, data: n, templateProps: o } = $s();
  return /* @__PURE__ */ u(Ot, { value: r, children: /* @__PURE__ */ u(on, { value: t, children: /* @__PURE__ */ u(nn, { value: n, children: o[e] }) }) });
}, Bs = V("SlotContent", Is), Ws = {
  backgroundColor: "rgb(150, 150, 150, 25%)",
  padding: 5
}, Ks = () => {
  const { key: r } = ne();
  return /* @__PURE__ */ fe("div", { style: Ws, children: [
    "Slot: '",
    r,
    "'"
  ] });
}, Js = V("SlotPlaceholder", Ks), Hs = new re(
  nt.type,
  [],
  [],
  [],
  We,
  void 0,
  void 0,
  nt.kind
), Us = Lr.default(!0).calculable(!1).hinted("Store data in parent form").named("Store data in parent form");
function Zs(r) {
  const e = bn(r);
  return new re(
    e,
    ge({
      storeDataInParentForm: Us
    }),
    [],
    Sn,
    We,
    void 0,
    void 0,
    "template"
  );
}
const Fn = ({ children: r }) => /* @__PURE__ */ u(ct, { children: r });
Fn.displayName = "Fragment";
const qs = new M(
  Fn,
  "Fragment",
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  void 0,
  "container"
);
var ae, ce, Le, le, qe;
const Qt = class Qt {
  /**
   * Creates an instance of the {@link View}.
   * @param models the components metadata.
   */
  constructor(e = []) {
    /**
     * Sets a CSS loader for the specified BiDi direction.
     * @param biDi the BiDi direction.
     * @param loader the loader function that returns a Promise.
     */
    v(this, le);
    v(this, ae, /* @__PURE__ */ new Map());
    v(this, ce, /* @__PURE__ */ new Map());
    v(this, Le, new Array());
    /**
     * Adds a wrapper to the list of viewers for this viewer wrapper.
     * @param wrapper  the viewer wrapper to be added. The wrapper is a component that wraps the form viewer.
     * @returns the {@link View} instance.
     */
    a(this, "withViewerWrapper", (e) => (h(this, Le).push(e), this));
    this.define(q), this.define(tt), this.define(nt), this.define(qs), this.define(Ge), this.define(io), e.forEach(this.define.bind(this));
  }
  /**
   * Static wrapper for the {@link View} constructor.
   * @param models the components metadata.
   * @returns the {@link View} instance.
   */
  static create(e) {
    return new Qt(e);
  }
  /**
   * Defines the component's metadata for the form viewer.
   * @param model the component's metadata.
   */
  define(e) {
    h(this, ae).set(e.type, e);
  }
  /**
   * Returns the component's metadata for the form viewer for the specified type.
   * @param type the component type.
   * @returns the component metadata for the form viewer for the specified type.
   */
  get(e) {
    const t = this.find(e);
    if (t)
      return t;
    throw new Error(`Type '${e}' is not found!`);
  }
  /**
   * Returns the component's metadata for the form viewer for the specified type.
   * @param type the component type.
   * @returns the component metadata for the form viewer for the specified type or undefined.
   */
  find(e) {
    return h(this, ae).get(e);
  }
  /**
   * @returns all component metadata for the form viewer.
   */
  all() {
    return [...h(this, ae).values()];
  }
  /**
   * Retrieves the viewer wrappers array.
   * @returns the viewer wrappers array.
   */
  get viewerWrappers() {
    return [...h(this, Le)];
  }
  /**
   * Applies the given CSS loader to the component based on the BiDi layout.
   * @param cssLoaderType the BiDi layout type, either 'common', 'ltr', or 'rtl'.
   * @param loader the function that returns a Promise to load CSS or other required localization resources.
   * @returns the {@link View} instance.
   */
  withCssLoader(e, t) {
    return e === "common" ? (b(this, le, qe).call(this, ee.LTR, t), b(this, le, qe).call(this, ee.RTL, t)) : b(this, le, qe).call(this, e, t), this;
  }
  /**
   * Retrieves the CSS loaders for a given BiDi.
   * @param biDi the BiDi object for which to retrieve the CSS loaders.
   * @returns the array containing the CSS loaders for the specified BiDi.
   */
  getCssLoaders(e) {
    return h(this, ce).get(e) ?? [];
  }
};
ae = new WeakMap(), ce = new WeakMap(), Le = new WeakMap(), le = new WeakSet(), qe = function(e, t) {
  h(this, ce).set(e, [...h(this, ce).get(e) ?? [], t]);
};
let De = Qt;
const ja = De.create;
var F, $;
const _t = class _t {
  constructor(e) {
    /**
     * Modifies the component's metadata builder with custom options.
     * @param opts the custom options.
     * @returns the modified instance of the builder.
     */
    v(this, F);
    /**
     * Definer class data.
     * @template T React component property type.
     */
    a(this, "data");
    /**
     * Sets the name of the component.
     * @param name the component name.
     * @returns the modified Definer class instance.
     */
    a(this, "name", (e) => b(this, F, $).call(this, { name: e }));
    /**
     * Sets the kind of the component.
     * @param kind the component kind.
     * @returns the modified Definer class instance.
     */
    a(this, "kind", (e) => b(this, F, $).call(this, { kind: e }));
    /**
     * Sets the icon of the component.
     * @param icon the component icon.
     * @returns the modified Definer class instance.
     */
    a(this, "icon", (e) => b(this, F, $).call(this, { icon: e }));
    /**
     * Sets the category of the component.
     * @param category the component category.
     * @returns the modified Definer class instance.
     */
    a(this, "category", (e) => b(this, F, $).call(this, { category: e }));
    /**
     * Sets the type of the component.
     * @param type the component type.
     * @returns the modified Definer class instance.
     */
    a(this, "type", (e) => (this.data.component.displayName = e, this));
    /**
     * Sets the metadata of the component's properties.
     * @param properties the metadata of the component's properties.
     * @returns the modified Definer class instance.
     */
    a(this, "props", (e) => b(this, F, $).call(this, { properties: e }));
    /**
     * Sets the component CSS metadata.
     * @param css the component CSS metadata.
     * @returns the modified Definer class instance.
     */
    a(this, "css", (e) => b(this, F, $).call(this, { cssObject: e }));
    /**
     * Adds the metadata of the component's actions. **Internal use only.**
     * @param fn the function that initializes an actions on a component.
     * @returns the modified Definer class instance.
     */
    a(this, "actions", (e) => b(this, F, $).call(this, { actionsInitializer: e }));
    /**
     * Adds the custom component to be displayed in the component list. **Internal use only.**
     * @param customPreview the custom component.
     * @returns the modified Definer class instance.
     */
    a(this, "preview", (e) => b(this, F, $).call(this, { customPreview: e }));
    /**
     * Sets initial component JSON.
     * @param initialJson the JSON source for the component (instance of {@link ComponentStore} class serialised to JSON).
     * @returns the modified Definer class instance.
     */
    a(this, "initialJson", (e) => b(this, F, $).call(this, { initialJson: e }));
    /**
     * Sets the component metadata event listeners.
     * @param eventListeners the component metadata event listeners.
     * @returns the modified Definer class instance.
     */
    a(this, "eventListeners", (e) => b(this, F, $).call(this, { eventListeners: e }));
    this.data = { component: e };
  }
  /**
   * Static method to create an instance of the component's metadata builder class.
   * @param component the React component.
   * @param displayName the display name for the anonymous component.
   * @returns the instance of the {@link Definer} class.
   */
  static define(e, t) {
    if (!(t ?? e.displayName ?? e.name))
      throw Error("Anonymous components are not allowed!");
    const o = new _t(e);
    return t && o.type(t), o;
  }
  /**
   * @returns the component type name.
   */
  getType() {
    return this.data.component.displayName || this.data.component.name;
  }
  /**
   * Creates component metadata for the form builder and form viewer.
   * @returns component metadata for the form builder and form viewer.
   */
  build() {
    const e = ge(this.data.properties), t = pe(this.data.cssObject), n = pe(lt), o = e.filter((p) => p.valued === !0), i = o[0];
    o.length > 1 && console.warn(`Several annotations with the "valued" property were found. There should be only one "valued" property in the component description! The annotation with the key "${o[0].key}" will be used.`);
    const s = i ?? e.find((p) => p.name === "value"), c = e.find((p) => p.readOnly), l = e.reduce((p, g) => (g.bindingType && (p[g.key] = g.bindingType), p), {}), d = new M(
      this.data.component,
      this.data.name || this.getType(),
      this.data.actionsInitializer,
      s == null ? void 0 : s.key,
      s == null ? void 0 : s.type,
      zr(e),
      he(t),
      he(n),
      this.getType(),
      this.data.kind,
      c == null ? void 0 : c.key,
      l
    ), f = new re(
      this.getType(),
      e,
      t,
      n,
      We,
      this.data.customPreview,
      s,
      this.data.kind,
      this.data.initialJson,
      this.data.eventListeners,
      this.data.icon
    );
    return { model: d, meta: f, category: this.data.category };
  }
};
F = new WeakSet(), $ = function(e) {
  return Object.assign(this.data, e), this;
};
let Rt = _t;
const $a = Rt.define, Ys = me`
  font-size: 12px;
  color: var(--red-600);
  margin-top: 0.25rem;

  &:before {
    content: "❌ ";
    font-size: 10px;
    padding: 6px;
  }

  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`, Qs = me`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`, kn = ({ children: r, error: e, className: t }) => /* @__PURE__ */ fe("div", { className: Qs, children: [
  r,
  e && /* @__PURE__ */ u("p", { className: ye(t, Ys), children: e })
] });
kn.displayName = "DefaultErrorMessage";
const Ft = new M(kn), Ct = new re(tt.type, [], [], [], []), br = new re(
  q.type,
  ge({ children: Ir }),
  wn,
  [],
  We,
  void 0,
  void 0,
  "container"
), _s = [
  ...We
], Gs = new re(
  Ge.type,
  Kr,
  Ur,
  Zr,
  _s,
  void 0,
  Wr.build("value"),
  Ge.kind
), Cr = new re(
  Ft.type,
  ge({
    className: Be
  }),
  [],
  [],
  []
), Er = "templates", Xs = "structure";
var W, de, ue;
const Gt = class Gt extends De {
  /**
   * Creates metadata for form builder components.
   * @param builderComponents the array of metadata of form builder components.
   */
  constructor(t) {
    super(t.map(({ model: o }) => o));
    v(this, W, /* @__PURE__ */ new Map());
    v(this, de, /* @__PURE__ */ new Map());
    v(this, ue, /* @__PURE__ */ new Map([
      [Cr.type, Cr]
    ]));
    this.builderComponents = t, h(this, W).set(br.type, br), h(this, W).set(Ct.type, Ct), this.builderComponents.push({ meta: Hs, model: nt, category: Er }), this.builderComponents.push({ meta: Gs, model: Ge, category: Xs }), t.map(({ meta: o }) => o).forEach((o) => {
      h(this, W).set(o.type, o);
    });
  }
  /**
   * Returns the component metadata for the specified component type name.
   * @param type the component type name.
   * @returns the component metadata for the specified component type name.
   */
  getMeta(t) {
    const n = h(this, W).get(t);
    return n || Ct;
  }
  /**
   * Returns the component metadata for the specified component type name or undefined.
   * @param type the component type name.
   * @returns the component metadata for the specified component type name or undefined.
   */
  findMeta(t) {
    return h(this, W).get(t);
  }
  /**
   * Returns the array of metadata properties of the tooltip component.
   * @param name the name of the tooltip component type.
   * @returns the array of metadata properties of the tooltip component.
   */
  getTooltipAnnotations(t) {
    var n;
    return (n = h(this, de).get(t)) == null ? void 0 : n.properties;
  }
  /**
   * Returns the array of metadata properties of the error component.
   * @param name the name of the error component type.
   * @returns the array of metadata properties of the error component.
   */
  getErrorAnnotations(t) {
    var n;
    return (n = h(this, ue).get(t)) == null ? void 0 : n.properties;
  }
  /**
   * @returns the array of strings with the names of the component types of the tooltip.
   */
  get tooltips() {
    return Array.from(h(this, de).keys());
  }
  /**
   * @returns the array of strings with the names of the component types of the error.
   */
  get errors() {
    return Array.from(h(this, ue).keys());
  }
  /**
   * Sets the metadata of the component that displays the form's tooltips.
   * @param builderComponent the metadata of the component that displays the form's tooltips.
   * @returns the instance of the {@link BuilderView} class.
   */
  withTooltipMeta(t) {
    const { model: n, meta: o } = t;
    return this.define(n), h(this, de).set(n.type, o), this;
  }
  /**
   * Sets the metadata of the component that displays form's errors.
   * @param builderComponent the metadata of the component that displays the form's errors.
   * @returns the instance of the {@link BuilderView} class.
   */
  withErrorMeta(t) {
    const { model: n, meta: o } = t;
    return this.define(n), h(this, ue).set(n.type, o), this;
  }
  /**
   * Creates metadata for the form builder for templates from the specified template names.
   * @param templates the array of template names.
   * @returns the instance of the {@link BuilderView} class.
   */
  withTemplates(t) {
    return t.forEach((n) => {
      const o = Gt.createTemplateComponent(n);
      this.define(o.model), h(this, W).set(o.meta.type, o.meta), this.builderComponents.push(o);
    }), this;
  }
  /**
   * Creates an instance of BuilderComponent for the specified template name.
   * @param name the template name
   * @returns the BuilderComponent instance.
   */
  static createTemplateComponent(t) {
    const n = Tn(t);
    return { meta: Zs(t), model: n, category: Er };
  }
};
W = new WeakMap(), de = new WeakMap(), ue = new WeakMap();
let Pr = Gt;
const za = `declare interface IFormData {
  /**
   * @returns the {@link Record} with all the form data.
   */
  get data(): Record<string, unknown>

  /**
   * @returns the object to read and modify parent data (available for array elements).
   */
  get parentData(): Record<string, unknown> | undefined

  /**
   * @returns the object to read and modify root form data.
   */
  get rootData(): Record<string, unknown>

  /**
   * @returns the {@link Record} with all validation error messages.
   */
  get errors(): Record<string, unknown>

  /**
   * true if the form contains errors, otherwise false.
   */
  get hasErrors(): boolean

  /**
   * @returns A user-defined key-value observable storage. Utilize it to store and share any custom data.
   */
  get state(): Record<string, unknown>

  /**
   * Sets the validation error message for all form data fields.
   * @param message the validation error message.
   */
  setAllErrors(message?: string): void

  /**
   * Validates the data in the form.
   */
  validate(): Promise<void>
    
  /**
   * Returns the validation results without triggering an events and changing the state of the form.
   * @returns the validation results.
   */
  getValidationResult: () => Promise<ValidationMessages>

  /**
   * If true, then validation is in progress.
   */
  get isValidating(): boolean

  /**
   * Sets the form to its default value.
   */
  reset(): void

  /**
   * Clears the form data.
   */
  clear(): void

  /**
   * @returns the index in the array if the component is in the component array.
   */
  index?: number
}`, Ma = (r, e = !0) => r.map((t) => ({
  value: Et(t) ? t.value : t,
  label: Et(t) ? t.label : e ? In(t) : t
})), La = (r, e, t) => new Promise((n, o) => {
  if (document.getElementById(r))
    return n();
  const i = document.createElement("link");
  i.id = r, i.rel = t, i.href = e, i.onload = () => {
    n();
  }, i.onerror = o, document.head.appendChild(i);
}), Ia = (r) => {
  var t;
  const e = document.getElementById(r);
  (t = e == null ? void 0 : e.parentNode) == null || t.removeChild(e);
}, ea = parseInt(Bn.version, 10), Ba = (r) => ea >= 19 ? (t) => r(t, t.ref ?? null) : Hn(r);
export {
  T as ActionDefinition,
  Dt as ActionEventArgs,
  ka as ActionEventArgsDeclaration,
  Ie as Annotation,
  _e as AnnotationBuilder,
  Qe as ArrayBuilder,
  Q as AsyncFunction,
  jr as BaseBuilder,
  ee as BiDi,
  ya as BuilderContext,
  ma as BuilderContextProvider,
  po as BuilderOptions,
  Pr as BuilderView,
  O as CalculableResult,
  $o as ComponentData,
  jo as ComponentDataEvents,
  nn as ComponentDataProvider,
  No as ComponentKeyChangedEventArgs,
  ln as ComponentState,
  k as ComponentStore,
  un as ComponentTree,
  Or as ContainerAnnotation,
  et as DataValidator,
  Jt as DefaultWrapper,
  $t as DidMountEvent,
  co as EventAnnotation,
  Ee as EventStream,
  vt as Form,
  Os as FormViewer,
  Ht as FormViewerPropsStore,
  za as IFormDataDeclaration,
  or as KeySymbol,
  ut as Language,
  wt as LocalizationStore,
  re as Meta,
  M as Model,
  lo as ModuleAnnotation,
  yo as NodeAnnotationBuilder,
  fo as OneOfBuilder,
  xt as PersistedFormVersion,
  Nr as PropertyAnnotation,
  $r as QuantifierBuilder,
  ks as SDiv,
  mo as SomeOfBuilder,
  St as Store,
  ao as StoreContext,
  Ot as StoreProvider,
  uo as StyleAnnotation,
  Xo as SuppressResizeObserverErrors,
  sr as SyncEvent,
  Pn as TemplateField,
  Nt as TypedBuilder,
  De as View,
  on as ViewerPropsProvider,
  zt as WillUnmountEvent,
  Co as array,
  Lr as boolean,
  Bt as calculatePropertyValue,
  di as checkSlotCondition,
  Ta as className,
  xa as color,
  lt as commonStyles,
  jt as containerStyles,
  To as createActionValuesFromObject,
  I as createAnnotation,
  te as createNonNullableContext,
  R as createProperty,
  ja as createView,
  oe as cssSize,
  Da as date,
  $a as define,
  lr as emotionCache,
  Aa as emptyComponentStore,
  Ft as errorMessageModel,
  nr as event,
  ko as findTreeElementDepth,
  Ba as forwardRef,
  bn as generateTemplateTypeName,
  gs as generateUniqueName,
  zr as getDefault,
  he as getDefaultCss,
  E as getFluentCompatibleId,
  rn as getFluentData,
  fa as getKey,
  Ji as getValidatorPropertyBlockType,
  eo as groupBy,
  vo as htmlAttributes,
  zo as initFormFields,
  tt as internalErrorModel,
  wa as isContainer,
  dt as isFunctionalProperty,
  _r as isLocalizedProperty,
  Mt as isPromise,
  ga as isProperty,
  Gr as isString,
  go as isUniqueKey,
  Oa as isValidatorPropertyBlockType,
  ba as key,
  La as loadResource,
  Xe as nameAutorun,
  B as nameObservable,
  V as namedObserver,
  Ir as node,
  Ra as nodeArray,
  Pa as number,
  Ca as object,
  He as oneOf,
  Ea as readOnly,
  Po as renderWhen,
  q as screenModel,
  bo as size,
  nt as slotModel,
  Fa as someOf,
  Be as string,
  Na as testFluentLocalization,
  Va as time,
  va as timeFormat,
  ge as toArray,
  Ma as toLabeledValues,
  Eo as tooltipProps,
  Sa as tooltipType,
  Vt as treeForEach,
  Ia as unloadResource,
  so as useBuilderContext,
  ne as useComponentData,
  Es as useDisposable,
  vi as useErrorModel,
  A as useStore,
  ui as useTooltipType,
  L as useViewerProps,
  wo as validation
};
//# sourceMappingURL=index.js.map
