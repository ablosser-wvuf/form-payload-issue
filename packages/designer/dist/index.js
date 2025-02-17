var Oo = Object.defineProperty;
var Wo = (e, t, n) => t in e ? Oo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var L = (e, t, n) => (Wo(e, typeof t != "symbol" ? t + "" : t, n), n), ft = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var K = (e, t, n) => (ft(e, t, "read from private field"), n ? n.call(e) : t.get(e)), le = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, be = (e, t, n, o) => (ft(e, t, "write to private field"), o ? o.call(e, n) : t.set(e, n), n);
var Ue = (e, t, n) => (ft(e, t, "access private method"), n);
import { jsx as r, jsxs as m, Fragment as F } from "@emotion/react/jsx-runtime";
import v from "@emotion/styled";
import { createNonNullableContext as Ft, forwardRef as we, namedObserver as b, useStore as $, toLabeledValues as Rt, KeySymbol as Zo, ComponentStore as Ee, timeFormat as vt, ActionEventArgsDeclaration as Uo, IFormDataDeclaration as _o, useComponentData as O, isPromise as Jo, DataValidator as Ko, isProperty as qt, isValidatorPropertyBlockType as wt, className as Go, useTooltipType as Vt, ComponentDataProvider as ze, key as qo, createAnnotation as Xo, getValidatorPropertyBlockType as Yo, boolean as Qo, Language as de, BiDi as he, nameObservable as zt, BuilderView as xn, ActionDefinition as kn, treeForEach as bt, PersistedFormVersion as er, screenModel as Xt, CalculableResult as Le, initFormFields as tr, generateUniqueName as nr, AsyncFunction as Ln, calculatePropertyValue as or, getFluentCompatibleId as rr, testFluentLocalization as ir, getFluentData as sr, nameAutorun as ye, emotionCache as Yt, loadResource as Sn, unloadResource as ar, ViewerPropsProvider as Mn, StoreProvider as cr, useDisposable as lr, Store as dr, FormViewerPropsStore as ur, DefaultWrapper as hr, isContainer as mr, checkSlotCondition as Qt, groupBy as pr, ComponentTree as Xe, ComponentState as gr, TemplateField as Cr, slotModel as fr, node as vr, toArray as wr, findTreeElementDepth as br, useViewerProps as yr, BuilderContextProvider as xr, FormViewer as kr, getKey as Lr, oneOf as En, useErrorModel as Sr, tooltipType as Mr, SuppressResizeObserverErrors as Er } from "@react-form-builder/core";
import { BuilderView as s5 } from "@react-form-builder/core";
import * as g from "react";
import { useCallback as p, useState as A, useEffect as M, cloneElement as An, useRef as _, useMemo as E, useReducer as Tn, createElement as Ar, useImperativeHandle as Tr, Component as Pr, Suspense as Fr } from "react";
import { Checkbox as nt, Table as Be, InputPicker as Ie, IconButton as U, InputNumber as ot, Input as ne, Button as H, Form as te, Whisper as me, Tooltip as De, InputGroup as Y, TagInput as Rr, Popover as Bt, DatePicker as Pn, SelectPicker as Vr, Animation as Fn, ButtonGroup as ie, List as Rn, Dropdown as z, Divider as zr, TagPicker as Br, RadioGroup as Ir, Radio as Dr, Message as rt, Schema as Ye, CustomProvider as Hr, useToaster as $r, Modal as Z, Row as Nr, Col as jr, Nav as Vn, Loader as Or } from "rsuite";
import { cx as G, css as it } from "@emotion/css";
import { observer as Wr } from "mobx-react";
import { Resizable as Zr } from "re-resizable";
import { upperFirst as zn, isObject as Bn, assign as st, isEmpty as In, startCase as Dn, isUndefined as at, cloneDeep as Ur, toUpper as Hn, replace as _r, camelCase as Jr } from "lodash-es";
import { computed as Kr, makeAutoObservable as It, observable as Me, action as Ae, reaction as $n, autorun as xe } from "mobx";
import { debounceTime as Gr, distinctUntilChanged as qr, Subject as Xr } from "rxjs";
import { Close as se, Plus as He, Icon as Dt, Code as Nn, Check as Yr, Copy as Qr, ArrowUpLine as jn, ArrowDownLine as ct, RemindFill as e1, SortUp as t1, SortDown as n1, ArrowRightLine as o1, Danger as r1, Export as i1, Import as s1, FileDownload as a1, FileUpload as c1, Search as l1, ExpandOutline as d1, CollaspedOutline as u1 } from "@rsuite/icons";
import * as On from "@fortawesome/free-solid-svg-icons/faCode.js";
import * as h1 from "@fortawesome/free-solid-svg-icons/faGlobe.js";
import * as _e from "@fortawesome/free-solid-svg-icons/faMarker.js";
import { useTranslation as P, initReactI18next as m1 } from "react-i18next";
import { css as $e, CacheProvider as p1 } from "@emotion/react";
import { RgbaColorPicker as g1 } from "react-colorful";
import { faMarker as C1, faGlobe as f1, faBars as v1 } from "@fortawesome/free-solid-svg-icons";
import en, { t as w1 } from "i18next";
import * as b1 from "@fortawesome/free-solid-svg-icons/faCheck.js";
import { format as y1, parse as x1 } from "date-fns";
import { constrainedEditor as k1 } from "constrained-editor-plugin";
import L1, { loader as S1 } from "@monaco-editor/react";
import "monaco-editor";
import M1 from "i18next-browser-languagedetector";
import E1 from "i18next-resources-to-backend";
import { arEG as A1, deDE as T1, enUS as Wn, itIT as P1, faIR as F1, frFR as R1, esES as V1, zhCN as z1 } from "rsuite/esm/locales/index.js";
import * as Zn from "@fortawesome/free-solid-svg-icons/faPlay.js";
import { useDragLayer as lt, DndProvider as B1, useDrag as I1, useDrop as Un } from "react-dnd";
import { HTML5Backend as D1, getEmptyImage as H1 } from "react-dnd-html5-backend";
import { createPortal as $1 } from "react-dom";
import * as N1 from "@fortawesome/free-regular-svg-icons/faClone.js";
import * as j1 from "@fortawesome/free-regular-svg-icons/faTrashAlt.js";
import _n from "scroll-into-view-if-needed";
import * as O1 from "@fortawesome/free-solid-svg-icons/faRedo.js";
import * as St from "@fortawesome/free-solid-svg-icons/faSave.js";
import * as W1 from "@fortawesome/free-solid-svg-icons/faUndo.js";
import { Column as yt, HeaderCell as xt, Cell as kt } from "rsuite-table";
import * as Z1 from "@fortawesome/free-solid-svg-icons/faTrash.js";
import { saveAs as U1 } from "file-saver";
import Jn from "jszip";
import * as Kn from "@fortawesome/free-solid-svg-icons/faPaintBrush.js";
import * as _1 from "@fortawesome/free-solid-svg-icons/faMoon.js";
import * as J1 from "@fortawesome/free-solid-svg-icons/faSun.js";
import * as K1 from "@fortawesome/free-solid-svg-icons/faDesktop.js";
import * as G1 from "@fortawesome/free-solid-svg-icons/faMobile.js";
import * as q1 from "@fortawesome/free-solid-svg-icons/faTablet.js";
import * as X1 from "@fortawesome/free-solid-svg-icons/faList.js";
import * as Y1 from "@fortawesome/free-solid-svg-icons/faPlusCircle.js";
import * as Q1 from "@fortawesome/free-solid-svg-icons/faSitemap.js";
import * as ei from "@fortawesome/free-solid-svg-icons/faSlidersH.js";
import * as ti from "@fortawesome/free-solid-svg-icons/faBolt.js";
import * as ni from "@fortawesome/free-solid-svg-icons/faCircle.js";
import * as oi from "@fortawesome/free-solid-svg-icons/faSpellCheck.js";
const [
  /**
   * **Internal use only.**
   */
  y,
  /**
   * **Internal use only.**
   */
  ri
] = Ft("BuildStoreContext"), oe = (e, t) => {
  t.displayName = e;
  const n = t;
  return (o) => {
    var u;
    const s = (u = y().props.customization) == null ? void 0 : u[e];
    if (!s)
      return /* @__PURE__ */ r(n, { ...o });
    if (s.hidden)
      return null;
    const { style: a, customRenderer: c } = s, l = G(o == null ? void 0 : o.className, s.className, it`${a}`, e), d = /* @__PURE__ */ r(n, { ...o, className: l });
    return c ? c(d, t, o) : d;
  };
}, W = (e, t) => oe(e, Wr(t)), { Cell: ii } = Be, si = ({ rowData: e, dataKey: t, rowIndex: n, onChange: o, type: i, ...s }) => {
  const a = e[t] ?? "", c = p((d) => {
    e[t] = d, o == null || o(d, t, n);
  }, [t, o, e, n]);
  return /* @__PURE__ */ r(Ne, { ...s, children: /* @__PURE__ */ r(i === "number" ? ot : ne, { value: a, onChange: c, size: "sm" }) });
}, n5 = ({ rowData: e, dataKey: t, rowIndex: n, onChange: o, ...i }) => {
  const s = e[t] ?? !1, a = p((c, l) => {
    e[t] = l, o == null || o(l, t, n);
  }, [t, o, e, n]);
  return /* @__PURE__ */ r(Ne, { ...i, children: /* @__PURE__ */ r(li, { inline: !0, checked: s, onChange: a }) });
}, ai = ({ rowData: e, dataKey: t, rowIndex: n, options: o, onChange: i, ...s }) => {
  const a = e[t] ?? "", c = p((l) => {
    e[t] = l, i == null || i(l, t, n);
  }, [t, i, e, n]);
  return /* @__PURE__ */ r(Ne, { ...s, children: /* @__PURE__ */ r(
    Ie,
    {
      value: a,
      data: o,
      onChange: c,
      cleanable: !1,
      creatable: !0,
      block: !0,
      size: "sm",
      placement: "auto"
    }
  ) });
}, ci = ({ rowData: e, rowIndex: t, onAction: n, icon: o, ...i }) => /* @__PURE__ */ r(Ne, { ...i, children: /* @__PURE__ */ r(
  U,
  {
    appearance: "subtle",
    size: "sm",
    onClick: () => n(t),
    icon: o()
  }
) }), Ne = v(ii)`
  padding: 0;

  & .rs-table-cell-content {
    padding: 9px 3px;
  }
`, li = v(nt)`
  & .rs-checkbox-wrapper {
    left: 4px;
    top: 6px;
  }
`, { ErrorMessage: di } = te, { Column: ui, HeaderCell: hi } = Be, Ht = (e) => {
  const [t, n] = A({}), [o, i] = A(!1), {
    data: s = [],
    onChange: a,
    columns: c,
    label: l,
    errorMessage: d,
    autoAdd: u,
    hideHeader: h,
    onAdd: C,
    onRemove: f,
    ...w
  } = e, { autoHeight: x, maxHeight: k } = t, S = h ? 0 : e.headerHeight ?? 40, B = e.rowHeight ?? 46, J = e.maxRows ?? 5, q = s.length <= J, ae = e.renderEmpty ? S + B : 0, Ct = S + B * J, Ze = s.length > J ? Ct : ae, X = p((ee) => {
    if (u) {
      const Gt = ee[ee.length - 1];
      (!Gt || Object.values(Gt).some((jo) => jo)) && ee.push({});
    }
    a == null || a(ee);
  }, [u, a]), ce = p(() => {
    n({
      autoHeight: q,
      maxHeight: Ze
    });
  }, [Ze, q]), R = p(() => {
    X == null || X([...s, {}]), i(!0), ce(), C == null || C(s.length);
  }, [s, X, ce, C]), V = p((ee) => {
    s.splice(ee, 1), X == null || X(s), ce(), f == null || f(ee);
  }, [s, X, ce, f]), Q = () => c == null ? void 0 : c.map((ee) => An(ee, {
    onChange: () => X == null ? void 0 : X([...s])
  })), No = () => {
    const ee = {};
    return o && (ee.y = Number.MAX_SAFE_INTEGER, i(!1)), ee;
  };
  return M(ce, []), /* @__PURE__ */ m("div", { children: [
    !!l && /* @__PURE__ */ r("label", { children: l }),
    /* @__PURE__ */ m(
      mi,
      {
        data: s,
        headerHeight: S,
        rowHeight: B,
        height: k,
        autoHeight: x,
        shouldUpdateScroll: No,
        className: G({ hideHeader: h }),
        ...w,
        children: [
          Q(),
          /* @__PURE__ */ m(ui, { width: 34, children: [
            /* @__PURE__ */ r(hi, { children: /* @__PURE__ */ r("div", {}) }),
            /* @__PURE__ */ r(ci, { onAction: V, icon: () => /* @__PURE__ */ r(se, {}) })
          ] })
        ]
      }
    ),
    !!d && /* @__PURE__ */ r(di, { show: !!d, placement: "bottomStart", children: d }),
    !u && /* @__PURE__ */ r(H, { appearance: "default", size: "sm", onClick: R, style: { marginTop: 10 }, block: !0, children: /* @__PURE__ */ r(He, {}) })
  ] });
}, mi = v(Be)`
  .rs-table-cell, .rs-table-row {
    background-color: transparent !important;
  }

  &.hideHeader {
    margin-bottom: -40px;

    .rs-table-header-row-wrapper {
      display: none !important;
    }

    .rs-table-body-row-wrapper {
      top: 0 !important;
    }
  }
`, { Column: pi, HeaderCell: gi } = Be, $t = (e) => e.map(({ name: t, input: n, title: o, inputProps: i = {} }) => {
  const s = n ?? si;
  return /* @__PURE__ */ m(pi, { flexGrow: 1, children: [
    /* @__PURE__ */ r(gi, { children: o ?? zn(t) }),
    /* @__PURE__ */ r(s, { dataKey: t, ...i })
  ] }, t);
});
let Ci = 0;
function fi(e) {
  const t = ++Ci;
  return e ? `${e}${t}` : `${t}`;
}
function Gn(e) {
  const t = _(null);
  return t.current || (t.current = fi(e)), t.current;
}
const [
  /**
   * **Internal use only.**
   */
  vi,
  /**
   * **Internal use only.**
   */
  qn
] = Ft("TooltipPlacementContext"), Xn = ({ hint: e, children: t, ...n }) => e ? /* @__PURE__ */ r(ve, { hint: e, children: /* @__PURE__ */ r(tn, { ...n, hinted: !0, children: t }) }) : /* @__PURE__ */ r(tn, { ...n, children: t }), ve = ({ hint: e, children: t, ...n }) => {
  const o = vi(), i = n.placement ?? o;
  return e ? /* @__PURE__ */ r(me, { speaker: /* @__PURE__ */ r(De, { children: e }), placement: i, trigger: "hover", children: t }) : /* @__PURE__ */ r(F, { children: t });
}, dt = ({ hint: e, hintPlacement: t, ...n }) => /* @__PURE__ */ r(ve, { hint: e, placement: t ?? "bottom", children: /* @__PURE__ */ r(U, { ...n, size: "xs" }) }), tn = v.label`
  min-width: 80px;

  ${({ hinted: e }) => e && `
    :hover {
      text-decoration: underline;
      text-decoration-style: dotted;
    }
  `};
`, T = (e) => {
  const [t, { exists: n }] = P();
  return (o) => {
    const i = `${e}.${o}`;
    return n(i) ? t(i) : "";
  };
}, Nt = 5, j = v.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ gap: e }) => e ?? Nt}px;
`, re = v.div`
  display: flex;
  gap: ${({ gap: e }) => e ?? Nt}px;
  ${({ stretchElements: e }) => e && "& > * { flex: 1; }"};
  ${({ spaceBetween: e }) => e && "justify-content: space-between"};
`, Yn = v.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;

  & > label {
    width: 100px;
    min-width: 80px;
  }
`, Qn = $e`
  && {
    display: flex;
    position: relative;
    background-color: var(--rs-btn-default-bg);
    border-radius: 10px;
    padding: 8px;
    padding-inline-start: 12px;
    align-items: center;
    user-select: none;
    justify-content: space-between;
  }
`, eo = $e`
  && {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: ${Nt}px;
  }
`, wi = $e`
  && > * {
    cursor: pointer;

    :hover {
      background-color: var(--rs-btn-default-hover-bg);
    }
  }
`, Te = v.div`
  ${Qn}
`, jt = v.div`
  ${eo}
  ${({ clickable: e = !1 }) => e && wi}
`, bi = we(({ faIcon: e, size: t, ...n }, o) => {
  const { width: i, height: s, svgPathData: a } = yi(e);
  return /* @__PURE__ */ r(
    "svg",
    {
      viewBox: `0 0 ${i} ${s}`,
      width: `${t ?? 1}em`,
      height: `${t ?? 1}em`,
      fill: "currentColor",
      ...n,
      ref: o,
      children: /* @__PURE__ */ r("path", { d: a })
    }
  );
}), yi = (e) => {
  if (e != null && e.icon) {
    const [t, n, , , o] = e.icon;
    return { width: t, height: n, svgPathData: o };
  }
  return e;
}, D = we(({ icon: e, size: t, ...n }, o) => /* @__PURE__ */ r(Dt, { as: bi, ref: o, faIcon: e, size: t, ...n })), xi = it`
  &:after {
    padding-left: 3px;
    content: "*";
    color: red;
  }
`, ki = {
  disabled: {
    hint: "neitherCalculableNorLocalizable",
    icon: _e,
    color: "var(--rs-btn-default-disabled-bg)"
  },
  calculation: {
    hint: "editCalculable",
    color: "var(--rs-btn-primary-bg)",
    icon: On
  },
  localization: {
    hint: "editLocalizable",
    color: "var(--rs-btn-primary-bg)",
    icon: h1
  },
  calculable: {
    hint: "hintCalculable",
    icon: _e
  },
  localizable: {
    hint: "hintLocalizable",
    icon: _e
  },
  calculableAndLocalizable: {
    hint: "hintCalculableAndLocalizable",
    icon: _e
  }
}, Li = (e) => {
  const { annotation: t, getComputeCode: n, setComputeCode: o, disableCompute: i, getComputeType: s, hasComputeCode: a, componentData: c } = e, l = y(), d = !t.calculable && !t.localizable, u = T("propertiesEditor.codeButton"), h = s(), C = E(() => {
    const x = h === "function" && a("function"), k = h === "localization" && a("localization");
    return d ? "disabled" : x ? "calculation" : k ? "localization" : t.calculable && t.localizable ? "calculableAndLocalizable" : t.calculable ? "calculable" : t.localizable ? "localizable" : "disabled";
  }, [t.calculable, t.localizable, d, a, h]), f = E(() => {
    const { hint: x, icon: k, color: S } = ki[C];
    return { icon: k, color: S, hint: u(x) };
  }, [C, u]), w = p(() => l.currentEditable = new uo(
    i,
    o,
    n,
    s,
    a,
    t,
    c.key
  ), [t, c.key, i, n, s, a, o, l]);
  return /* @__PURE__ */ r(ve, { hint: f.hint, children: /* @__PURE__ */ r(
    Pi,
    {
      onClick: w,
      disabled: d,
      icon: /* @__PURE__ */ r(D, { icon: f.icon, color: f.color }),
      size: "xs",
      appearance: "subtle"
    }
  ) });
}, Si = W("PropertyCodeButton", Li), Mi = oe("PropertyLabel", Xn), Ei = (e) => /* @__PURE__ */ r("div", { style: { width: "100%" }, ...e }), Ai = oe("PropertyInput", Ei), Ti = (e) => {
  const { annotation: t, children: n, style: o } = e, { className: i, ...s } = e, a = Gn("id-"), c = e.componentData.model.type, l = T(`annotation.${t.key}`), d = T(`${c}.${t.key}`), u = (C) => d(C) || l(C), h = t.required ? xi : void 0;
  return /* @__PURE__ */ m(Yn, { style: o, className: i, children: [
    /* @__PURE__ */ m(re, { gap: 10, style: { alignItems: "center" }, children: [
      /* @__PURE__ */ r(Si, { ...s }),
      /* @__PURE__ */ r(Mi, { htmlFor: a, hint: t.hint ?? u("hint"), className: h, children: /* @__PURE__ */ r(F, { children: u("name") || t.name }) })
    ] }),
    !!n && /* @__PURE__ */ r(Ai, { children: An(n, { id: a }) })
  ] });
}, N = oe("LabeledProperty", Ti), Pi = v(U)`
  min-width: 24px;
  margin-inline-end: -6px;
`, Fi = [{ name: "value" }, { name: "label" }], Ri = (e) => {
  const { value: t, onChange: n, annotation: o, componentData: i } = e, { onAdd: s, onRemove: a, columns: c, calculateEditorProps: l } = o.editorProps ?? {}, d = $(), u = E(() => $t(c ?? Fi), [c]), h = p((w) => {
    s == null || s(w, i, d);
  }, [d, i, s]), C = p((w) => {
    a == null || a(w, i, d);
  }, [d, i, a]), f = (l == null ? void 0 : l(i, n)) ?? {};
  return /* @__PURE__ */ m(F, { children: [
    /* @__PURE__ */ r(N, { ...e }),
    /* @__PURE__ */ r(
      Ht,
      {
        data: t,
        onChange: n,
        columns: u,
        onRemove: C,
        onAdd: h,
        ...f
      }
    )
  ] });
}, Vi = b("ArrayInput", Ri), nn = (e, t) => {
  try {
    return JSON.stringify(e, null, t);
  } catch {
    return;
  }
}, zi = (e) => {
  const { value: t, onChange: n, onClean: o, onValidate: i, editorKey: s, editorTitle: a } = e, c = y(), l = E(() => (Bn(t) ? nn(t, 2) : t) ?? "", [t]), d = E(() => {
    var h;
    return t ? ((h = nn(t)) == null ? void 0 : h.substring(0, 50)) ?? "Error" : "";
  }, [t]), u = p(() => {
    c.editJsonCode(s, a, l, n, i);
  }, [c, s, a, n, l, i]);
  return /* @__PURE__ */ m(Y, { inside: !0, size: "xs", children: [
    /* @__PURE__ */ r(ne, { value: d, onClick: u, readOnly: !0, color: "var(--rs-btn-ghost-text)" }),
    /* @__PURE__ */ r(Y.Button, { onClick: t ? o : u, children: t ? /* @__PURE__ */ r(se, {}) : /* @__PURE__ */ r(Nn, {}) })
  ] });
}, Bi = (e) => {
  const t = JSON.parse(e);
  if (typeof t != "object" || Array.isArray(t))
    throw new Error("The value must be an object");
}, Ii = ({ rowData: e, dataKey: t, rowIndex: n, onChange: o, editorTitle: i, ...s }) => {
  const a = e[t] ?? {}, c = E(() => `${i}[${n}]`, [i, n]), l = p((u) => {
    e[t] = u, o == null || o(u, t, n);
  }, [t, o, e, n]), d = p(() => {
    l(void 0);
  }, [l]);
  return /* @__PURE__ */ r(Ne, { ...s, children: /* @__PURE__ */ r(
    zi,
    {
      editorKey: `${t}-${n}`,
      editorTitle: c,
      value: a,
      onChange: l,
      onClean: d,
      onValidate: Bi
    }
  ) });
}, Di = [{ name: "item", input: Ii }], Hi = (e) => {
  var s;
  const { value: t, onChange: n, annotation: o } = e, i = E(() => {
    var l;
    const a = ((l = o.editorProps) == null ? void 0 : l.columns) ?? Di, c = a == null ? void 0 : a[0];
    return c && !c.inputProps && (c.inputProps = { editorTitle: `${e.componentData.key}.${o.name}` }), $t(a);
  }, [(s = o.editorProps) == null ? void 0 : s.columns, o.name, e.componentData.key]);
  return /* @__PURE__ */ m(F, { children: [
    /* @__PURE__ */ r(N, { ...e }),
    /* @__PURE__ */ r(Ht, { data: t, onChange: n, columns: i })
  ] });
}, $i = (e) => {
  const { value: t, onChange: n, onClean: o } = e, i = T("propertiesEditor");
  return /* @__PURE__ */ r(N, { ...e, children: /* @__PURE__ */ r(
    Rr,
    {
      value: t ?? "",
      onChange: n,
      onClean: o,
      block: !0,
      size: "xs",
      style: { width: "100%" },
      placeholder: i("setInputHint")
    }
  ) });
}, Ni = [
  "a",
  "abbr",
  "about",
  "accentHeight",
  "accept",
  "acceptCharset",
  "accessKey",
  "accumulate",
  "action",
  "additive",
  "address",
  "alignmentBaseline",
  "allowFullScreen",
  "allowReorder",
  "allowTransparency",
  "alphabetic",
  "alt",
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "amplitude",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "arabicForm",
  "area",
  "article",
  "ascent",
  "aside",
  "async",
  "attributeName",
  "attributeType",
  "audio",
  "autoCapitalize",
  "autoComplete",
  "autoCorrect",
  "autoFocus",
  "autoPlay",
  "autoReverse",
  "autoSave",
  "azimuth",
  "b",
  "base",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "bdi",
  "bdo",
  "begin",
  "bias",
  "blockquote",
  "body",
  "br",
  "button",
  "by",
  "calcMode",
  "canvas",
  "capHeight",
  "caption",
  "capture",
  "cellPadding",
  "cellSpacing",
  "challenge",
  "charSet",
  "checked",
  "circle",
  "cite",
  "classID",
  "className",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "code",
  "col",
  "colgroup",
  "color",
  "color-profile",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "cols",
  "colSpan",
  "content",
  "contentEditable",
  "contentScriptType",
  "contentStyleType",
  "contextMenu",
  "controls",
  "coords",
  "crossOrigin",
  "cursor",
  "cx",
  "cy",
  "d",
  "dangerouslySetInnerHTML",
  "data",
  "datalist",
  "datatype",
  "dateTime",
  "dd",
  "decelerate",
  "default",
  "defaultChecked",
  "defaultValue",
  "defer",
  "defs",
  "del",
  "desc",
  "descent",
  "details",
  "dfn",
  "dialog",
  "diffuseConstant",
  "dir",
  "direction",
  "disabled",
  "display",
  "div",
  "divisor",
  "dl",
  "dominantBaseline",
  "download",
  "draggable",
  "dt",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "ellipse",
  "em",
  "embed",
  "enableBackground",
  "encType",
  "end",
  "exponent",
  "externalResourcesRequired",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "fieldset",
  "figcaption",
  "figure",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "footer",
  "foreignObject",
  "form",
  "formAction",
  "format",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "frameBorder",
  "from",
  "fx",
  "fy",
  "g",
  "g1",
  "g2",
  "glyph",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hanging",
  "head",
  "header",
  "headers",
  "height",
  "hgroup",
  "hidden",
  "high",
  "hkern",
  "horizAdvX",
  "horizOriginX",
  "hr",
  "href",
  "hrefLang",
  "html",
  "htmlFor",
  "httpEquiv",
  "i",
  "icon",
  "id",
  "ideographic",
  "iframe",
  "image",
  "imageRendering",
  "img",
  "in",
  "in2",
  "inlist",
  "input",
  "inputMode",
  "ins",
  "integrity",
  "intercept",
  "is",
  "itemID",
  "itemProp",
  "itemRef",
  "itemScope",
  "itemType",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kbd",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keygen",
  "keyParams",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "keyType",
  "kind",
  "label",
  "lang",
  "legend",
  "lengthAdjust",
  "letterSpacing",
  "li",
  "lightingColor",
  "limitingConeAngle",
  "line",
  "linearGradient",
  "link",
  "list",
  "local",
  "loop",
  "low",
  "main",
  "manifest",
  "map",
  "marginHeight",
  "marginWidth",
  "mark",
  "marker",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "math",
  "mathematical",
  "max",
  "maxLength",
  "media",
  "mediaGroup",
  "menu",
  "menuitem",
  "meta",
  "metadata",
  "meter",
  "method",
  "min",
  "minLength",
  "missing-glyph",
  "mode",
  "mpath",
  "multiple",
  "muted",
  "name",
  "nav",
  "nonce",
  "noscript",
  "noValidate",
  "numOctaves",
  "object",
  "offset",
  "ol",
  "onBlur",
  "onChange",
  "onClick",
  "onFocus",
  "onInput",
  "onInvalid",
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  "onSubmit",
  "opacity",
  "open",
  "operator",
  "optgroup",
  "optimum",
  "option",
  "order",
  "orient",
  "orientation",
  "origin",
  "output",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "p",
  "paintOrder",
  "panose1",
  "param",
  "path",
  "pathLength",
  "pattern",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "picture",
  "placeholder",
  "playsInline",
  "pointerEvents",
  "points",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "polygon",
  "polyline",
  "poster",
  "pre",
  "prefix",
  "preload",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "profile",
  "progress",
  "property",
  "q",
  "r",
  "radialGradient",
  "radioGroup",
  "radius",
  "rb",
  "readOnly",
  "rect",
  "refX",
  "refY",
  "rel",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "required",
  "requiredExtensions",
  "requiredFeatures",
  "resource",
  "restart",
  "result",
  "results",
  "reversed",
  "role",
  "rotate",
  "rows",
  "rowSpan",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "rx",
  "ry",
  "s",
  "samp",
  "sandbox",
  "scale",
  "scope",
  "scoped",
  "script",
  "scrolling",
  "seamless",
  "section",
  "security",
  "seed",
  "select",
  "selected",
  "set",
  "shape",
  "shapeRendering",
  "size",
  "sizes",
  "slope",
  "slot",
  "small",
  "source",
  "spacing",
  "span",
  "specularConstant",
  "specularExponent",
  "speed",
  "spellCheck",
  "spreadMethod",
  "src",
  "srcDoc",
  "srcLang",
  "srcSet",
  "start",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "step",
  "stitchTiles",
  "stop",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "suppressContentEditableWarning",
  "surfaceScale",
  "svg",
  "switch",
  "symbol",
  "systemLanguage",
  "tabIndex",
  "table",
  "tableValues",
  "target",
  "targetX",
  "targetY",
  "tbody",
  "td",
  "template",
  "text",
  "textAnchor",
  "textarea",
  "textDecoration",
  "textLength",
  "textPath",
  "textRendering",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "to",
  "tr",
  "track",
  "transform",
  "tref",
  "tspan",
  "type",
  "typeof",
  "u",
  "u1",
  "u2",
  "ul",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "unselectable",
  "use",
  "useMap",
  "vAlphabetic",
  "value",
  "values",
  "var",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "video",
  "vIdeographic",
  "view",
  "viewBox",
  "viewTarget",
  "visibility",
  "vkern",
  "vMathematical",
  "vocab",
  "wbr",
  "width",
  "widths",
  "wmode",
  "wordSpacing",
  "wrap",
  "writingMode",
  "x",
  "x1",
  "x2",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y",
  "y1",
  "y2",
  "yChannelSelector",
  "z",
  "zoomAndPan"
], ji = $t([
  {
    name: "name",
    input: ai,
    inputProps: { options: Rt(Ni, !1) }
  },
  { name: "value" }
]), Oi = ({ confirm: e }) => {
  const t = T("common");
  return /* @__PURE__ */ r(U, { icon: /* @__PURE__ */ r(Yr, {}), onClick: e, color: "green", appearance: "primary", size: "xs", children: t("apply") });
}, Wi = (e) => {
  const { store: t } = e.componentData, n = !!e.getComputeType(), o = E(
    () => t.htmlAttributes ? [...t.htmlAttributes] : t.htmlAttributes,
    [t]
  ), [i, s] = A(o), [a, c] = A(!1), l = p((u) => {
    s(u), c(!0);
  }, []), d = p(() => {
    t.htmlAttributes = i, c(!1);
  }, [t, i]);
  return M(() => {
    s(o), c(!1);
  }, [o, t]), /* @__PURE__ */ m(F, { children: [
    /* @__PURE__ */ r(N, { ...e, children: a && /* @__PURE__ */ r(Oi, { confirm: d }) }),
    !n && /* @__PURE__ */ r(Ht, { data: i ?? [], onChange: l, columns: ji })
  ] });
}, Zi = b("RawAttributesInput", Wi), on = (e) => {
  const { value: t, onChange: n } = e;
  return /* @__PURE__ */ r(N, { ...e, children: /* @__PURE__ */ r(to, { checked: !!t, onChange: (o, i) => n(i) }) });
}, to = v(nt)`
  && {
    height: 23px;
    display: flex;
    align-items: center;
    width: 100%;

    .rs-checkbox-checker {
      padding-left: 0;
      margin-left: -10px;
    }
  }
`, Ui = (e) => {
  const { value: t, onChange: n, onClean: o } = e, i = Gi(t ?? "rgba(255, 255, 255, 0)");
  return /* @__PURE__ */ r(N, { ...e, children: /* @__PURE__ */ m(Y, { inside: !0, style: { width: "100%" }, size: "xs", children: [
    /* @__PURE__ */ r(me, { placement: "auto", trigger: "hover", speaker: /* @__PURE__ */ r(Bt, { children: /* @__PURE__ */ r(g1, { color: i, onChange: (a) => n(Ki(a)) }) }), enterable: !0, children: /* @__PURE__ */ r(_i, { color: t, readOnly: !0 }) }),
    /* @__PURE__ */ r(Ji, { onClick: o, children: /* @__PURE__ */ r(se, {}) })
  ] }) });
}, _i = v(ne)`
  && {
    background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>');
    background-color: ${({ color: e }) => e ?? "var(--rs-btn-default-bg)"};
  }
`, Ji = v(Y.Button)`
  && {
    background-color: var(--rs-btn-default-bg) !important;
    position: absolute;
    inset-inline-end: 0;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    padding: 6px 8px;
  }
`;
function Ki(e) {
  const { r: t, g: n, b: o, a: i } = e;
  return `rgba(${t}, ${n}, ${o}, ${i})`;
}
function Gi(e) {
  const t = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/, [, n, o, i, s] = t.exec(e) || [];
  return { r: Number(n), g: Number(o), b: Number(i), a: Number(s) };
}
const qi = (e) => {
  const { onChange: t, onClean: n, value: o } = e;
  return /* @__PURE__ */ r(N, { ...e, children: /* @__PURE__ */ r(
    Pn,
    {
      editable: !1,
      cleanable: !0,
      placement: "auto",
      value: o ?? null,
      onChange: t,
      onClean: n,
      size: "xs"
    }
  ) });
}, Ot = (e) => {
  const t = T("common");
  return /* @__PURE__ */ r(dt, { hint: t("edit"), icon: /* @__PURE__ */ r(D, { icon: C1 }), ...e });
}, Xi = (e) => {
  const t = T("common");
  return /* @__PURE__ */ r(dt, { hint: t("clone"), icon: /* @__PURE__ */ r(Qr, {}), ...e });
}, ut = (e) => {
  const t = T("common");
  return /* @__PURE__ */ r(dt, { hint: t("remove"), icon: /* @__PURE__ */ r(se, {}), ...e });
};
function Wt(e) {
  return E(() => Kr(e), [e]).get();
}
const [
  /**
   * **Internal use only.**
   */
  je,
  /**
   * **Internal use only.**
   */
  Yi
] = Ft("ActionDataContext"), Zt = ({ width: e, ...t }) => /* @__PURE__ */ r(Vr, { ...t, style: { width: e } }), Qi = [
  { label: "True", value: !0 },
  { label: "False", value: !1 }
], es = ({ name: e }) => {
  var i;
  const t = je(), n = p((s) => {
    const a = st({}, t.args);
    delete a[e], typeof s < "u" && (a[e] = s), t.args = a;
  }, [t, e]), o = p(() => {
    n(void 0);
  }, [n]);
  return /* @__PURE__ */ r(
    Zt,
    {
      onClean: o,
      data: Qi,
      searchable: !1,
      value: ((i = t.args) == null ? void 0 : i[e]) ?? "",
      onSelect: n,
      size: "sm",
      width: "100%"
    }
  );
}, ts = b("InputBoolean", es), ns = ({ name: e }) => {
  var s;
  const t = je(), n = typeof ((s = t.args) == null ? void 0 : s[e]) < "u" ? Number(t.args[e]) : "", o = p((a) => {
    const c = st({}, t.args);
    delete c[e], (typeof a == "string" || typeof a == "number") && (c[e] = Number(a)), t.args = c;
  }, [t, e]), i = p(() => {
    o(null);
  }, [o]);
  return /* @__PURE__ */ m(Y, { size: "sm", children: [
    /* @__PURE__ */ r(ot, { value: n, onChange: o, onReset: i, size: "sm" }),
    /* @__PURE__ */ r(Y.Button, { onClick: i, children: /* @__PURE__ */ r(se, {}) })
  ] });
}, os = b("InputNumber", ns), rs = ({ name: e }) => {
  var i, s;
  const t = je(), n = ((s = (i = t.args) == null ? void 0 : i[e]) == null ? void 0 : s.toString()) ?? "";
  return /* @__PURE__ */ r(Y, { size: "sm", children: /* @__PURE__ */ r(ne, { value: n, onChange: (a) => t.args = st({}, t.args, { [e]: a }) }) });
}, is = b("InputString", rs), ss = (e) => {
  switch (e) {
    case "string":
      return is;
    case "number":
      return os;
    case "boolean":
      return ts;
  }
}, as = ({ data: e }) => {
  const [t, n] = e, o = ss(n);
  return /* @__PURE__ */ m(j, { children: [
    /* @__PURE__ */ r("label", { children: t }),
    /* @__PURE__ */ r(o, { name: t })
  ] });
}, cs = b("ArgumentItem", as), ls = () => {
  const e = je();
  M(() => () => {
    In(e.args) && delete e.args;
  }, [e.args]);
}, ds = () => {
  const e = $(), t = je(), n = p(() => e.findAction(t), [t, e]), o = Wt(n), [i, s] = Tn((c) => !c, !1), a = i ? jn : ct;
  return ls(), Object.keys(o.params).length ? /* @__PURE__ */ m("div", { onMouseDown: (c) => c.stopPropagation(), children: [
    /* @__PURE__ */ r(Fn.Collapse, { in: i, unmountOnExit: !0, children: /* @__PURE__ */ r(j, { gap: 1, style: { marginBlock: 8, paddingInline: 10 }, children: Object.entries(o.params).map((c, l) => /* @__PURE__ */ r(cs, { data: c }, l)) }) }),
    /* @__PURE__ */ r(hs, { block: !0, onClick: s, children: /* @__PURE__ */ m(F, { children: [
      w1("actions.arguments"),
      /* @__PURE__ */ r(a, { style: { marginTop: -2 } })
    ] }) })
  ] }) : null;
}, us = b("ArgumentList", ds), hs = v(H)`
  padding: 5px !important;
  border-radius: 0 !important;
  outline: 0 !important;
  color: var(--rs-btn-subtle-text) !important;

  &:focus {
    box-shadow: none;
    background-color: initial;
  }
`, ms = ({ data: e, onRemove: t }) => {
  const n = y(), o = $(), i = e.type === "code", s = () => {
    const a = o.form.actions[e.name];
    if (!a) {
      console.error(`Cannot find custom action: '${e.name}'`);
      return;
    }
    const c = { name: e.name, actionDefinition: a };
    n.editCodeAction(c);
  };
  return /* @__PURE__ */ m(Yi, { value: e, children: [
    /* @__PURE__ */ m(re, { style: { justifyContent: "space-between", padding: 8 }, children: [
      /* @__PURE__ */ r("b", { style: { color: "violet", marginLeft: 5 }, children: `${e.name || "Action"}` }),
      /* @__PURE__ */ m(ie, { size: "xs", children: [
        i && /* @__PURE__ */ r(Ot, { onClick: s }),
        /* @__PURE__ */ r(ut, { onClick: t })
      ] })
    ] }),
    /* @__PURE__ */ r(us, {})
  ] });
}, ps = b("ActionItem", ms);
function gs({ data: e, index: t, onRemove: n }) {
  const o = p(() => n(t), [t, n]);
  return /* @__PURE__ */ r(ws, { index: t, children: /* @__PURE__ */ r(ps, { data: e, onRemove: o }) });
}
const Cs = (e) => {
  var s;
  const t = e.annotation.key, n = (s = e.componentData.store.events) == null ? void 0 : s[t], o = p((a) => n == null ? void 0 : n.splice(a, 1), [n]), i = p((a) => {
    if (!n || !(a != null && a.oldIndex || a != null && a.newIndex))
      return;
    const c = n[a.oldIndex];
    n.splice(a.oldIndex, 1), n.splice(a.newIndex, 0, c);
  }, [n]);
  return n != null && n.length ? /* @__PURE__ */ r(vs, { sortable: !0, onSort: i, children: n.map((a, c) => /* @__PURE__ */ r(gs, { index: c, data: a, onRemove: o }, a[Zo])) }) : null;
}, fs = b("ActionList", Cs), vs = v(Rn)`
  ${eo}
  && {
    box-shadow: none;
  }
`, ws = v(Rn.Item)`
  ${Qn}
  && {
    overflow: hidden;
    padding: 0;
    box-shadow: none;
    flex-direction: column;
    align-items: initial;
  }

  &.rs-list-item-helper {
    outline: 2px solid var(--rs-btn-primary-bg);
  }
`, bs = ({ onSelect: e, annotation: t }) => {
  var u;
  const n = $(), o = y(), i = (u = o.oneSelected) == null ? void 0 : u.store, s = t.key, a = n.form.actionNames, c = T("actions"), l = () => {
    e(), i && o.addCodeAction((h) => {
      Ee.addEventHandler(i, s, { name: h.name, type: "code" });
    });
  }, d = (h) => /* @__PURE__ */ r(
    z.Item,
    {
      onClick: () => e({ name: h, type: "code" }),
      style: { position: "relative", display: "flex", justifyContent: "space-between" },
      children: /* @__PURE__ */ r("span", { style: { whiteSpace: "break-spaces" }, children: h })
    },
    h
  );
  return /* @__PURE__ */ m(z.Menu, { title: c("code"), children: [
    a == null ? void 0 : a.map(d),
    !!(a != null && a.length) && /* @__PURE__ */ r(z.Item, { disabled: !0, children: /* @__PURE__ */ r(zr, { style: { marginTop: 0, marginBottom: 0 } }) }),
    /* @__PURE__ */ r(z.Item, { children: c("addCodeAction"), icon: /* @__PURE__ */ r(He, {}), onClick: l })
  ] });
}, ys = b("CodeActionsList", bs), xs = ({ onSelect: e }) => {
  const t = $(), n = T("actions"), o = Object.keys(t.commonActions).map(
    (i) => /* @__PURE__ */ r(z.Item, { children: i, onClick: () => e({ name: i, type: "common" }) }, i)
  );
  return /* @__PURE__ */ r(z.Menu, { title: n("common"), children: o });
}, ks = ({ onSelect: e }) => {
  const t = $(), n = T("actions"), o = t.formViewerPropsStore.actions;
  if (!o)
    return null;
  const i = Object.keys(o).map(
    (s) => /* @__PURE__ */ r(z.Item, { children: s, onClick: () => e({ name: s, type: "custom" }) }, s)
  );
  return /* @__PURE__ */ r(z.Menu, { title: n("custom"), children: i });
}, Ls = (e) => {
  const t = T("actions"), { componentData: n, annotation: o } = e, i = n.store, s = o.key, a = _(null), c = p((l) => {
    var d;
    (d = a.current) == null || d.close(), l && Ee.addEventHandler(i, s, l);
  }, [a, i, s]);
  return /* @__PURE__ */ r(
    me,
    {
      placement: "leftStart",
      ref: a,
      trigger: "click",
      speaker: /* @__PURE__ */ r(Ms, { onSelect: c, annotation: o }),
      children: /* @__PURE__ */ r(U, { icon: /* @__PURE__ */ r(He, {}), size: "sm", children: t("addAction") })
    }
  );
}, Ss = b("AddActionButton", Ls), Ms = we(({ onSelect: e, annotation: t, ...n }, o) => /* @__PURE__ */ r(Bt, { ref: o, ...n, full: !0, children: /* @__PURE__ */ m(z.Menu, { children: [
  /* @__PURE__ */ r(xs, { onSelect: e, annotation: t }),
  /* @__PURE__ */ r(ys, { onSelect: e, annotation: t }),
  /* @__PURE__ */ r(ks, { onSelect: e, annotation: t })
] }) })), Es = v.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`, As = v.h6`
  margin-left: 10px;
`, Ts = (e) => {
  const t = e.annotation.key;
  return /* @__PURE__ */ m(Es, { children: [
    /* @__PURE__ */ r(As, { children: t }),
    /* @__PURE__ */ r(fs, { ...e }),
    /* @__PURE__ */ r(Ss, { ...e })
  ] });
}, Ps = (e) => /* @__PURE__ */ r(N, { ...e, children: /* @__PURE__ */ r(Fs, { ...e }) }), Fs = (e) => {
  const t = $(), { id: n, value: o, onChange: i, showError: s } = e, [a, c] = A(!1), [l, d] = A(o), u = T("propertiesEditor");
  M(() => {
    d(o), c(!1);
  }, [o]);
  const h = p((k) => t.reduceScreen((S, B) => B.key === k ? S + 1 : S, 0) === 0 && k.length > 0, [t]), C = p((k) => {
    const S = h(k);
    let B;
    if (!S && k !== o) {
      const J = k.length > 0 ? "keyMustBeUnique" : "keyMustNotBeEmpty";
      B = u(J);
    }
    s == null || s(B), c(S), d(k);
  }, [o, u, s, h]), f = p(() => {
    a && (i(l), c(!1));
  }, [a, i, l]), w = p((k) => {
    k.key === "Enter" && a && f();
  }, [a, f]), x = E(() => u("applyKey"), [u]);
  return /* @__PURE__ */ m(Y, { size: "xs", children: [
    /* @__PURE__ */ r(ne, { id: n, value: l, onChange: C, onKeyDown: w }),
    /* @__PURE__ */ r(ve, { hint: x, children: /* @__PURE__ */ r(Y.Button, { disabled: !a, onClick: f, children: /* @__PURE__ */ r(
      D,
      {
        icon: b1,
        color: a ? "green" : void 0
      }
    ) }) })
  ] });
}, Rs = b("KeyInput", Ps), Vs = ({ data: e }, t) => {
  const n = e.map((o) => ({
    value: o.value,
    label: o.label
  }));
  return t.forEach((o) => {
    n.find((i) => i.value === o) || n.push({ value: o, label: Dn(o) });
  }), n;
}, zs = (e) => {
  const { value: t, onChange: n, annotation: o, onClean: i } = e, s = Vs(o, t);
  return /* @__PURE__ */ r(N, { ...e, children: /* @__PURE__ */ r(
    Bs,
    {
      value: t ?? [],
      data: s,
      onChange: n,
      onClean: i,
      cleanable: !0,
      creatable: !0,
      size: "xs",
      placement: "auto"
    }
  ) });
}, Bs = v(Br)`
  width: 100%;
`, Is = (e) => {
  const { value: t, onChange: n, onClean: o, annotation: i, componentData: s } = e, a = p((h) => {
    typeof h == "string" && (h = Number(h), h = isNaN(h) ? 0 : h), n(h);
  }, [n]), { calculateEditorProps: c, ...l } = i.editorProps ?? {}, d = {
    ...l ?? {},
    ...(c == null ? void 0 : c(s)) ?? {},
    value: t
  };
  return /* @__PURE__ */ r(N, { ...e, children: /* @__PURE__ */ r(Ds, { ...d, onChange: a, size: "xs", postfix: /* @__PURE__ */ r(se, { onClick: o, style: { cursor: "pointer" } }) }) });
}, Ds = v(ot)`
  .rs-input-group-addon {
    padding: 1px 8px !important;
  }
`, rn = (e, t) => {
  try {
    return JSON.stringify(e, null, t);
  } catch {
    return;
  }
}, Hs = (e) => {
  const { value: t, onChange: n, onClean: o, annotation: i } = e, s = y(), a = E(() => (Bn(t) ? rn(t, 2) : t) ?? "", [t]), c = E(() => {
    var d;
    return t ? ((d = rn(t)) == null ? void 0 : d.substring(0, 50)) ?? "Error" : "";
  }, [t]), l = p(() => {
    const d = `${e.componentData.key}.${i.name}`;
    s.editJsonCode(i.key, d, a, n);
  }, [i.key, i.name, s, n, e.componentData.key, a]);
  return /* @__PURE__ */ r(N, { ...e, children: /* @__PURE__ */ m(Y, { inside: !0, size: "xs", children: [
    /* @__PURE__ */ r(ne, { value: c, onClick: l, readOnly: !0, color: "var(--rs-btn-ghost-text)" }),
    /* @__PURE__ */ r(Y.Button, { onClick: t ? o : l, children: t ? /* @__PURE__ */ r(se, {}) : /* @__PURE__ */ r(Nn, {}) })
  ] }) });
}, $s = b("ObjectInput", Hs), Ns = ({ data: e }, t) => (at(t) || e.find((n) => n.value === t || n.label === t) || e.push({ value: t, label: t }), e), Ut = (e) => {
  const { value: t, onChange: n, annotation: o, onClean: i } = e, s = Ns(o, t);
  return /* @__PURE__ */ r(N, { ...e, children: /* @__PURE__ */ r(
    js,
    {
      value: t ?? e.annotation.default ?? "",
      data: s,
      onChange: n,
      onClean: i,
      block: !0,
      cleanable: !0,
      creatable: !0,
      size: "xs",
      ...e.annotation.editorProps,
      placement: "autoVerticalEnd"
    }
  ) });
}, js = v(Ie)`
  width: 100%;
`, _t = ({ label: e, items: t, style: n, ...o }) => /* @__PURE__ */ m(Os, { style: n, children: [
  !!e && /* @__PURE__ */ r("label", { children: e }),
  /* @__PURE__ */ r(Ir, { ...o, size: "xs", inline: !0, appearance: "picker", children: t == null ? void 0 : t.map(({ value: i, label: s }, a) => /* @__PURE__ */ r(Dr, { value: i, children: s ?? i }, a)) })
] }), Os = v.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  .rs-radio-group {
    width: 100%;
    justify-content: space-evenly;
  }

  .rs-radio-group-picker .rs-radio-inline {
    padding: 0;
  }

  .rs-radio-checker {
    min-height: 27px;
    max-height: 27px;
    margin: 0 7px !important;

    label {
      line-height: 14px !important;
      padding: 4px 0 !important;
    }
  }
`, Ws = (e) => {
  const { value: t, onChange: n, annotation: o } = e;
  return /* @__PURE__ */ r(N, { ...e, children: /* @__PURE__ */ r(_t, { items: o.data, onChange: n, value: t }) });
}, Zs = (e) => {
  var d;
  const t = e.componentData.store, n = (u) => {
    if (!t.renderWhen) {
      t.renderWhen = { value: u };
      return;
    }
    t.renderWhen.value = u;
  }, o = p(() => {
    var u;
    return ((u = t.renderWhen) == null ? void 0 : u.fnSource) ?? "";
  }, [t]), i = p(() => {
    var u;
    return (u = t.renderWhen) == null ? void 0 : u.computeType;
  }, [t]), s = p((u) => u === "function" ? !!o() : !1, [o]), a = p((u) => {
    t.renderWhen ?? (t.renderWhen = {}), t.renderWhen.fnSource = u, t.renderWhen.computeType = "function";
  }, [t]), c = p(() => {
    t.renderWhen && (t.renderWhen.computeType = void 0);
  }, [t]), l = {
    annotation: e.annotation,
    componentData: e.componentData,
    getComputeCode: o,
    getComputeType: i,
    setComputeCode: a,
    disableCompute: c,
    hasComputeCode: s
  };
  return /* @__PURE__ */ r(N, { ...l, children: /* @__PURE__ */ r(ne, { value: ((d = t.renderWhen) == null ? void 0 : d.value) ?? "", onChange: n, size: "xs" }) });
}, Us = b("RenderWhenEditor", Zs), Se = "other", no = ["px", "%", "em", "vw", "vh"], Jt = ["max-content", "min-content", "fit-content", "auto"], _s = Rt([...no, ...Jt, Se], !1), Js = (e) => {
  const { value: t, onChange: n, onClean: o } = e, { value: i, unit: s } = Ks(t), a = (d) => n(sn(d, s)), c = (d) => d && n(sn(i ?? 10, d)), l = s === Se ? /* @__PURE__ */ r(ne, { value: i, size: "xs", onChange: a }) : /* @__PURE__ */ r(ot, { value: i, size: "xs", onChange: a });
  return /* @__PURE__ */ r(N, { ...e, children: /* @__PURE__ */ m(qs, { children: [
    Mt(s) && l,
    /* @__PURE__ */ r(
      Xs,
      {
        value: s ?? "",
        onChange: c,
        data: _s,
        className: G({ withValue: Mt(s) }),
        creatable: !0,
        placement: "bottomEnd",
        size: "xs",
        onClean: o
      }
    )
  ] }) });
};
function Ks(e) {
  if (!e)
    return {};
  if (Jt.includes(e))
    return { unit: e };
  const t = e.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]{2,4}|%)$/i);
  if (!t)
    return { value: e, unit: Se };
  const n = parseFloat(t[1]), o = t[2];
  return no.includes(o) ? { value: n, unit: o } : { value: `${n}${o}`, unit: Se };
}
const Mt = (e) => typeof e < "u" && !Jt.includes(e), sn = (e, t) => {
  const n = Gs(e, t);
  return `${Mt(t) ? n : ""}${t === Se ? "" : t}`;
};
function Gs(e, t) {
  if (t !== Se && typeof e == "string") {
    const n = e.match(/[+-]?\d+(\.\d+)?/);
    return parseFloat((n == null ? void 0 : n[0]) ?? "10");
  }
  return e;
}
const qs = v.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
`, Xs = v(Ie)`
  width: auto;

  &.withValue {
    width: min-content;
    min-width: 78px;
  }
`, Ys = v.div`
  display: inline-grid;
  vertical-align: top;
  align-items: center;
  position: relative;
  width: 100%;

  &::after,
  & > textarea {
    min-width: 1em !important;
    width: auto !important;
    height: 100% !important;
    grid-area: 2 / 1;
    resize: none !important;
    max-height: 6em !important;
  }

  &::after {
    content: attr(data-contents) ' ';
    visibility: hidden;
    // text behaviour must match with textarea
    font-size: inherit !important;
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }
`, Qs = (e) => {
  const { value: t = "", annotation: n, onChange: o } = e, i = _(null), s = _(null);
  return M(() => {
    const a = s.current;
    a && (a.dataset.contents = t);
  }, [t]), M(() => {
    const a = i.current, c = s.current;
    if (a && c) {
      const l = window.getComputedStyle(a);
      c.style.lineHeight = l.lineHeight, c.style.fontSize = l.fontSize;
    }
  }, []), /* @__PURE__ */ r(N, { ...e, children: /* @__PURE__ */ r(Ys, { ref: s, children: /* @__PURE__ */ r(
    ne,
    {
      ref: i,
      rows: 1,
      name: n.key,
      value: t,
      onChange: o,
      size: "xs",
      as: "textarea",
      ...e.annotation.editorProps
    }
  ) }) });
}, ea = (e, t) => {
  if (typeof e == "string") {
    const n = x1(e, t, /* @__PURE__ */ new Date());
    return isNaN(n.getTime()) ? (console.error("Invalid time string:", e), null) : n;
  }
  return e;
}, ta = (e) => {
  const { onChange: t, onClean: n, value: o, annotation: i } = e, s = E(() => i.editorProps ?? {}, [i]), a = E(() => ea(o, vt), [o]), c = p((l) => {
    const d = l && y1(l, vt);
    t == null || t(d);
  }, [t]);
  return /* @__PURE__ */ r(N, { ...e, children: /* @__PURE__ */ r(
    Pn,
    {
      editable: !1,
      cleanable: !0,
      placement: "auto",
      value: a ?? null,
      onChange: c,
      onClean: n,
      ...s,
      format: vt,
      size: "xs"
    }
  ) });
}, Et = "fluent", na = [
  { content: Uo, filePath: "ActionEventArgs" },
  { content: _o, filePath: "Form" }
];
S1.init().then((e) => {
  var C;
  na.forEach(({ content: f, filePath: w }) => {
    var x;
    (x = e == null ? void 0 : e.languages.typescript) == null || x.javascriptDefaults.addExtraLib(f, w);
  }), (C = e == null ? void 0 : e.languages.css) == null || C.scssDefaults.setOptions({ lint: { emptyRules: "ignore" } });
  const t = /[a-zA-Z-][a-zA-Z0-9_-]*/.source, n = /([^{}\s[\]]+)/.source, o = /\s\s|\s\s\s\s/.source, i = /\s|\s\s\s|\s{5,}/.source, s = /(\s*)/.source, a = /$/.source, c = `${s}({${s}[$])${n}${s}}`, l = `${s}({${s}[$])${n}${s}->${s}(${a})`, d = /\*?\[(zero|one|two|few|many|other)]/.source, u = `\\*?\\[${n}]`, h = '(\\s*{\\s*")(.*)("\\s*})';
  e == null || e.languages.register({ id: Et }), e == null || e.languages.setMonarchTokensProvider(Et, {
    tokenizer: {
      root: [
        [`^-?${t}${s}=`, "constant", "@value"],
        [/.*/, "invalid"]
      ],
      value: [
        //https://projectfluent.org/fluent/guide/variables.html
        [c, "variable"],
        //https://projectfluent.org/fluent/guide/selectors.html
        [l, "regexp", "@function"],
        //https://projectfluent.org/fluent/guide/special.html
        [h, ["variable", "string", "variable"]],
        //new line string must be started with tab
        //https://projectfluent.org/fluent/guide/multiline.html
        [`^(${o})${n}`, "string"],
        [`^(${i})(.*)`, "invalid"],
        [`^${n}`, "invalid"],
        //first line string
        [`${s}${n}`, "string"],
        [/.*/, "invalid"]
      ],
      function: [
        //https://projectfluent.org/fluent/guide/variables.html
        [c, "variable"],
        //https://projectfluent.org/fluent/guide/selectors.html
        [l, "regexp", "@function"],
        //https://projectfluent.org/fluent/guide/special.html
        [h, ["variable", "string", "variable"]],
        //https://projectfluent.org/fluent/guide/selectors.html
        [`${s}${d}`, "regexp"],
        [`${s}${u}`, "regexp"],
        [`${s}${n}`, "string"],
        [`${s}}`, "regexp", "@pop"],
        [/.*/, "invalid"]
      ]
    }
  }), e.editor.defineTheme("vs-extended", oa);
});
const oa = {
  base: "vs",
  inherit: !0,
  rules: [
    {
      token: "string.fluent",
      foreground: "008000"
    },
    {
      token: "variable.fluent",
      foreground: "1d087a"
    },
    {
      token: "regexp.fluent",
      foreground: "1d087a"
    },
    {
      token: "constant.fluent",
      foreground: "4978ad"
    }
  ],
  colors: {
    "editor.background": "#f7f7fa"
  }
}, oo = L1, ra = (e) => {
  const t = E(() => {
    const c = e.beginContextLine ?? "", l = e.beginContextLine && e.canEditBeginContextLine ? "" : `
`, d = e.endContextLine ? `
${e.endContextLine}` : "";
    return c + l + e.initialValue + d;
  }, [e.beginContextLine, e.endContextLine, e.initialValue, e.canEditBeginContextLine]), n = _(null), o = _(null), i = p((c) => {
    const l = !!e.endContextLine, [d, u] = an(e.beginContextLine ?? ""), [h] = an(e.endContextLine ?? ""), C = l ? c.getLineCount() - (h - 1) : c.getLineCount(), f = l ? 1 : c.getFullModelRange().endColumn;
    return [{
      label: "body",
      allowMultiline: !0,
      range: [d, u, C, f],
      validate: (w, x, { endLineOfRange: k, startLineOfRange: S }) => S ? w.startsWith(`
`) || e.canEditBeginContextLine : k ? w.endsWith(`
`) || !l : !0
    }];
  }, [e.beginContextLine, e.canEditBeginContextLine, e.endContextLine]);
  M(() => {
    var l;
    if ((l = n.current) == null || l.setValue(t), !o.current)
      return;
    const c = i(o.current);
    o.current.updateRestrictions(c);
  }, [i, t]);
  const { onChange: s } = e, a = p((c, l) => {
    n.current = c;
    const d = c.getModel();
    if (!d)
      return;
    const u = k1(l);
    u.initializeIn(c);
    const h = i(d), C = u.addRestrictionsTo(d, h);
    C.onDidChangeContentInEditableRange((f) => {
      let w = f.body;
      w && (e.beginContextLine && w.startsWith(`
`) && (w = w.substring(1)), e.endContextLine && w.endsWith(`
`) && (w = w.substring(0, w.length - 1)), s(w));
    }), o.current = C;
  }, [e.beginContextLine, e.endContextLine, i, s]);
  return /* @__PURE__ */ r(
    oo,
    {
      onMount: a,
      className: e.className,
      defaultValue: t,
      height: e.height ?? "100%",
      width: e.width ?? "100%",
      language: e.language ?? "javascript",
      options: {
        wordWrap: "on",
        ...e.options
      },
      theme: e.theme
    }
  );
};
function an(e) {
  var o;
  const t = e.split(`
`), n = ((o = t.at(-1)) == null ? void 0 : o.length) ?? 0;
  return [t.length, n + 1];
}
const ia = (e) => {
  const t = _(null);
  return M(() => {
    var o;
    (o = t.current) == null || o.setValue(e.initialValue);
  }, [e.initialValue]), /* @__PURE__ */ r(
    oo,
    {
      onMount: (o) => {
        o.onDidChangeModelContent(() => e.onChange(o.getValue())), t.current = o;
      },
      className: e.className,
      defaultValue: e.initialValue,
      height: e.height ?? "100%",
      width: e.width ?? "100%",
      language: e.language ?? "javascript",
      options: {
        wordWrap: "on",
        ...e.options
      },
      theme: e.theme
    }
  );
}, sa = ({ children: e }) => /* @__PURE__ */ r("div", { dir: "ltr", style: { width: "100%", height: "100%", minHeight: 0 }, children: e }), aa = (e) => {
  const n = y().theme === "light" ? "vs-extended" : "vs-dark", o = e.theme ?? n, i = { ...e, theme: o };
  let s = /* @__PURE__ */ r(ra, { ...i });
  if (!e.beginContextLine && !e.endContextLine) {
    const a = { ...i };
    delete a.beginContextLine, delete a.endContextLine, delete a.canEditBeginContextLine, s = /* @__PURE__ */ r(ia, { ...a });
  }
  return /* @__PURE__ */ r(sa, { children: s });
}, Oe = b("CodeEditor", aa), ca = ({ device: e, useWrapperStyles: t, defaultActiveTab: n }) => {
  const { store: o } = O(), i = T("style"), [s, a] = A(n ?? "css");
  M(() => {
    a(n ?? "css");
  }, [n]);
  const c = E(() => {
    var h, C;
    return ((C = (h = o[s]) == null ? void 0 : h[e]) == null ? void 0 : C.string) ?? "";
  }, [o, e, s]), l = (h) => {
    var C;
    o[s] ?? (o[s] = {}), (C = o[s])[e] ?? (C[e] = {}), o[s][e].string = h;
  }, d = (h) => a(h), u = [
    { value: "css", label: i("component") },
    { value: "wrapperCss", label: i("wrapper") }
  ];
  return /* @__PURE__ */ m(j, { children: [
    t && /* @__PURE__ */ r(_t, { value: s, onChange: d, items: u }),
    /* @__PURE__ */ r(
      da,
      {
        language: "scss",
        beginContextLine: "element.style {",
        endContextLine: "}",
        initialValue: c,
        onChange: l,
        height: "20vh",
        options: {
          contextmenu: !1,
          lineNumbers: "off",
          minimap: { enabled: !1 },
          glyphMargin: !1,
          folding: !1,
          lineDecorationsWidth: 0,
          lineNumbersMinChars: 0,
          autoIndent: "full"
        }
      },
      `${o.key}${s}${e}`
    )
  ] });
}, la = b("CSSEditor", ca), da = v(Oe)`
  .suggest-widget {
    width: 100% !important;
    left: 0 !important;
    overflow: hidden;
  }
`, ua = v.label`
  display: flex;
  flex: 1;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
`, ro = ({ annotation: e, store: t }) => {
  const n = (i) => {
    if (e.required)
      return typeof i == "number" || !In(i) ? void 0 : [{
        settings: { key: "required_property" },
        message: "This property is required!",
        annotation: e
      }];
  }, o = async (i) => {
    var c, l;
    const s = (c = e.validator) == null ? void 0 : c.call(e, i, t);
    if ((Jo(s) ? await s : s) === !1)
      return [{
        settings: { key: "property_validator" },
        message: (l = e.errorMap) == null ? void 0 : l.message,
        annotation: e
      }];
  };
  return async (i) => n(i) ?? await o(i);
};
function ha(e, t, n, o, i) {
  const s = E(
    () => Ko.create(e, t, n, o, i),
    [e, t, n, o, i]
  );
  return M(() => () => s.dispose(), [s]), s;
}
const ma = (e) => {
  const { annotation: t, value: n, children: o } = e, i = y(), [s, a] = A(), [c, l] = A(!0), d = E(
    () => ({ annotation: t, store: i.viewer }),
    [t, i.viewer]
  ), u = ha(
    i.viewer,
    ro,
    d,
    a
  ), h = p(async (C, f) => {
    if (!c)
      return;
    if (f)
      return a(f);
    a(void 0);
    const w = await u.validate(C);
    w && c && a(w);
  }, [c, u]);
  return M(() => (l(!0), () => l(!1)), []), M(() => {
    h(n, e.error).catch(console.error);
  }, [n, e.error, h]), /* @__PURE__ */ r(fa, { error: s, children: o });
}, pa = b("Erroneous", ma), ga = v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`, Ca = v.p`
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
`, fa = ({ children: e, error: t }) => /* @__PURE__ */ m(ga, { children: [
  e,
  t && /* @__PURE__ */ r(Ca, { children: t })
] }), va = ({
  annotation: e,
  context: t,
  initContext: n,
  propertyBlockType: o = "component"
}) => {
  var ce;
  const i = y(), s = O(), a = E(() => i.getPropertyEditor(e.editor), [e, i]), [c, l] = A(!1), [d, u] = A(), h = (qt(e) ? (ce = t[e.key]) == null ? void 0 : ce.value : t[e.key]) ?? e.default, C = p((R) => {
    var Q;
    let V = t;
    if (c || (l(!0), V = (n == null ? void 0 : n()) ?? t), qt(e)) {
      V[Q = e.key] ?? (V[Q] = {}), V[e.key].value = R;
      return;
    }
    V[e.key] = R;
  }, [t, n, e, c]), f = p(() => delete t[e.key], [t, e]), w = p((R) => {
    const V = { computeType: "function", fnSource: R };
    t[e.key] = Object.assign(t[e.key] ?? {}, V);
  }, [t, e]), x = p((R, V) => {
    if (!V || (i.viewer.form.localization.setLocalization(V, s.key, e.key, o, R), wt(o)))
      return;
    const Q = { computeType: "localization" };
    t[e.key] = Object.assign(t[e.key] ?? {}, Q);
  }, [t, e, i, s, o]), k = p((R, V, Q) => {
    switch (V) {
      case "function":
        return w(R);
      case "localization":
        return x(R, Q == null ? void 0 : Q.langCode);
    }
  }, [w, x]), S = p(() => {
    var R;
    return (R = t[e.key]) == null ? void 0 : R.fnSource;
  }, [t, e]), B = p((R) => {
    const V = i.viewer.form.localization.getLocalization(R, s.key, e.key, o), Q = i.viewer.form.localization.getLocalization(i.defaultLanguage.fullCode, s.key, e.key, o);
    return V ?? Q ?? "";
  }, [i, s, e, o]), J = p((R, V) => {
    switch (R) {
      case "function":
        return S();
      case "localization":
        return V != null && V.langCode ? B(V == null ? void 0 : V.langCode) : "";
    }
  }, [S, B]), q = p(() => {
    if (wt(o)) {
      i.viewer.form.localization.removeLocalizationForType(s.key, o);
      return;
    }
    const R = { computeType: void 0 };
    t[e.key] = Object.assign(t[e.key] ?? {}, R);
  }, [o, t, e.key, i.viewer.form.localization, s.key]), ae = p(() => i.viewer.form.localization.hasLocalization(s.key, e.key, o), [i, s, e, o]), Ct = p(() => {
    if (wt(o) && ae())
      return "localization";
    const R = t[e.key];
    return R == null ? void 0 : R.computeType;
  }, [o, ae, t, e.key]), Ze = p((R) => R === "function" ? !!J("function") : ae(), [J, ae]), X = {
    value: h,
    onChange: C,
    onClean: f,
    annotation: e,
    showError: u,
    componentData: s,
    setComputeCode: k,
    getComputeCode: J,
    disableCompute: q,
    getComputeType: Ct,
    hasComputeCode: Ze
  };
  return M(() => {
    l(!1);
  }, [s, n]), M(() => {
    u(void 0);
  }, [t]), !!a && /* @__PURE__ */ r(pa, { ...X, error: d, children: Ar(a, X) });
}, ht = b("PropertyEditorWrapper", va);
var I = /* @__PURE__ */ ((e) => (e.Main = "main", e.Style = "style", e.Actions = "actions", e.Rules = "rules", e))(I || {}), pe = /* @__PURE__ */ ((e) => (e.Additional = "additional", e.Tooltip = "tooltip", e))(pe || {});
const wa = ({ value: e, onChange: t }) => {
  const n = T("style"), i = ["any", "desktop", "mobile", "tablet"].map((s) => ({ value: s, label: n(s) }));
  return /* @__PURE__ */ m(ba, { children: [
    n("forDevice"),
    /* @__PURE__ */ r(
      ya,
      {
        value: e,
        data: i,
        onChange: (s) => t(s),
        appearance: "subtle",
        size: "xs",
        searchable: !1,
        cleanable: !1,
        width: 100
      }
    )
  ] });
}, ba = v.h6`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 28px;
  gap: 10px;
`, ya = v(Zt)`
  margin-inline-end: 4px;

  .rs-picker-toggle-value {
    font-size: 15px;
  }
`, xa = {
  validation: I.Rules,
  event: I.Actions
}, ka = {
  htmlAttributes: pe.Additional,
  tooltipProps: pe.Tooltip,
  useTooltip: pe.Tooltip,
  renderWhen: pe.Additional
}, La = (e) => (t) => (xa[t.editor] ?? I.Main) === e, Lt = (e) => (t) => ka[t.editor] === e, Sa = ({ activeTab: e, ...t }) => {
  const n = y(), o = Vt(), i = T("propertiesEditor"), s = n.oneSelectedComponentData;
  if (!s)
    return /* @__PURE__ */ r(ln, { children: /* @__PURE__ */ r(ua, { style: { height: "40%" }, children: i("selectElementForEdit") }) });
  const a = n.getComponentMetadata(s.store.type), c = a.properties.concat(a.modules).filter(La(e)), l = c.filter(Lt()), d = c.filter(Lt(pe.Additional)), u = c.filter(Lt(pe.Tooltip)), h = a.kind === "component" && !!(u != null && u.length) && !!o, C = a.kind !== "slot";
  return /* @__PURE__ */ r(ze, { value: s, children: /* @__PURE__ */ m(ln, { ...t, children: [
    /* @__PURE__ */ m(Fa, { children: [
      e === I.Main && /* @__PURE__ */ r(ht, { annotation: qo, context: s.store }),
      C && /* @__PURE__ */ r(fe, { annotations: l, context: s.store.props }),
      e === I.Style && C && /* @__PURE__ */ r(Aa, { meta: a, store: s.store })
    ] }),
    h && C && /* @__PURE__ */ r(fe, { annotations: u, context: s.store.props }),
    !!(d != null && d.length) && C && /* @__PURE__ */ r(
      fe,
      {
        annotations: d,
        context: s.store.props,
        header: i("subSection.additionalProperties")
      }
    )
  ] }) });
}, Ma = W("RightPanel_Content", Sa), Ea = ({ meta: e, store: t }) => {
  const n = T("style"), [o, i] = A("any"), s = e.kind === "component", a = e.kind === "template", c = /* @__PURE__ */ r(ht, { annotation: Go, context: t.props });
  return /* @__PURE__ */ m(F, { children: [
    /* @__PURE__ */ r(wa, { value: o, onChange: i }),
    !a && /* @__PURE__ */ r(cn, { meta: e, store: t, device: o, cssPart: "css", header: n("component"), headerHint: n("componentHint") }),
    s && c,
    /* @__PURE__ */ r(cn, { meta: e, store: t, device: o, cssPart: "wrapperCss", header: n("wrapper"), headerHint: n("wrapperHint") }),
    !s && c,
    /* @__PURE__ */ r(la, { device: o, useWrapperStyles: s, defaultActiveTab: a ? "wrapperCss" : "css" })
  ] });
}, Aa = b("Styles", Ea), Ta = ({ meta: e, store: t, device: n, cssPart: o, header: i, headerHint: s }) => {
  var d, u;
  const a = Pa(o, t, n), c = ((u = (d = t[o]) == null ? void 0 : d[n]) == null ? void 0 : u.object) ?? {}, l = e.kind === "component" || e.kind === "repeater";
  return /* @__PURE__ */ r(
    fe,
    {
      header: l ? i : void 0,
      headerHint: l ? s : void 0,
      annotations: e[o],
      context: c,
      initContext: a
    }
  );
}, cn = b("StyleBlock", Ta), Pa = (e, t, n) => p(() => {
  var o, i;
  return t[e] ?? (t[e] = {}), (o = t[e])[n] ?? (o[n] = {}), (i = t[e][n]).object ?? (i.object = {}), t[e][n].object ?? {};
}, [e, t, n]), fe = ({
  annotations: e,
  context: t,
  initContext: n,
  header: o,
  headerHint: i,
  propertyBlockType: s = "component"
}) => t ? /* @__PURE__ */ m(F, { children: [
  !!o && /* @__PURE__ */ r(ve, { hint: i, children: /* @__PURE__ */ r("h6", { children: o }) }),
  e.map((a) => /* @__PURE__ */ r(
    ht,
    {
      propertyBlockType: s,
      annotation: a,
      context: t,
      initContext: n
    },
    a.key
  ))
] }) : null, Fa = v.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`, ln = v.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  padding-right: 5px;
  justify-content: space-between;

  & > * {
    margin-bottom: 5px;
  }
`, Ra = () => {
  var d;
  const e = T("annotation.tooltipProps"), t = Gn("tooltip-"), n = y(), o = (d = n.oneSelected) == null ? void 0 : d.store, i = o == null ? void 0 : o.tooltipProps, s = !!i, a = Vt(), c = a ? n.view.getTooltipAnnotations(a) : null, l = p((u, h) => {
    o && (o.tooltipProps = h ? {} : void 0);
  }, [o]);
  return !a || !c ? null : /* @__PURE__ */ m(F, { children: [
    /* @__PURE__ */ m(Yn, { children: [
      /* @__PURE__ */ r(Xn, { hint: /* @__PURE__ */ r(F, { children: e("hint") }), htmlFor: t, children: /* @__PURE__ */ r("h6", { children: e("tooltip") }) }),
      /* @__PURE__ */ r(to, { checked: s, onChange: l, id: t })
    ] }),
    s && /* @__PURE__ */ r(fe, { propertyBlockType: "tooltip", annotations: c, context: i })
  ] });
}, Va = b("TooltipPropertiesEditor", Ra), za = ({ type: e }) => {
  const { store: t } = O(), { t: n } = P(), i = $().getValidationRules(e), s = (d, u) => {
    var C;
    t.schema ?? (t.schema = { validations: [] });
    const h = u === "internal" ? { key: d } : { key: d, type: u };
    (C = t.schema.validations) == null || C.push(h);
  }, a = (d, u) => {
    var h, C;
    return !((C = (h = t.schema) == null ? void 0 : h.validations) != null && C.find((f) => {
      const w = u === "internal" && !f.type || f.type === u;
      return f.key === d && w;
    }));
  }, c = (d, u, h) => /* @__PURE__ */ r(z.Item, { children: h, eventKey: d, onSelect: (C) => s(C, u) }, d), l = Object.entries(i.internal).filter(([d]) => a(d, "internal")).map(([d]) => c(d, "internal", n(`validation.rule.${d}`)));
  if (i.custom) {
    const d = Object.entries(i.custom).filter(([u]) => a(u, "custom")).map(([u]) => c(u, "custom", n(`validation.rule.${u}`, u)));
    d.length && (l.push(/* @__PURE__ */ r(z.Separator, {}, "separator")), l.push(...d));
  }
  return /* @__PURE__ */ r(F, { children: l });
}, Ba = b("RulesList", za), Ia = () => {
  var a;
  const { t: e } = P(), t = y(), n = O(), o = t.getComponentMetadata(n.model.type), i = (a = o == null ? void 0 : o.valuedAn) == null ? void 0 : a.type;
  return i ? /* @__PURE__ */ r(z, { renderToggle: (c, l) => /* @__PURE__ */ r(H, { ...c, ref: l, block: !0, children: e("validation.addRule") }), children: /* @__PURE__ */ r(Ba, { type: i }) }) : null;
}, Da = b("AddRuleButton", Ia);
function Ha(e) {
  const t = e.editorType === "code" ? "customValidator" : e.type;
  let n = Xo(t).typed(e.type).calculable(!1);
  return e.required && (n = n.required), e.default && (n = n.default(e.default)), n = e.key === "message" ? n.localize : n.notLocalize, n.build(e.key);
}
function $a(e) {
  return e.map(Ha);
}
const Na = (e) => {
  const t = T("validation"), n = /* @__PURE__ */ r(e1, { color: "#f5a623" });
  return /* @__PURE__ */ r(dt, { hint: t("ruleNotFound"), icon: n, ...e });
}, ja = ({ rule: e, onRemove: t }) => {
  const { store: n, model: o } = O(), { t: i } = P(), s = n.schema, a = $(), c = p(() => (e.args ?? (e.args = {}), e.args), [e]), l = o.valueType;
  if (!l || !s)
    return null;
  const d = (C, f) => {
    var x;
    const w = a.getValidationRules(C);
    if (!e.type || e.type === "internal")
      return w.internal[f];
    if (e.type === "custom")
      return (x = w.custom) == null ? void 0 : x[f];
  };
  let u = null;
  const h = d(l, e.key);
  return h && (u = $a(h.params ?? [])), /* @__PURE__ */ m(j, { children: [
    /* @__PURE__ */ m(re, { spaceBetween: !0, children: [
      /* @__PURE__ */ m("div", { children: [
        !u && /* @__PURE__ */ r(Na, { hintPlacement: "autoHorizontal", disabled: !0 }),
        /* @__PURE__ */ r(Wa, { children: i(`validation.rule.${e.key}`, e.key) })
      ] }),
      /* @__PURE__ */ r(ut, { onClick: t, hintPlacement: "autoHorizontal" })
    ] }),
    u && /* @__PURE__ */ r(
      fe,
      {
        annotations: u,
        propertyBlockType: Yo(e.key),
        context: e.args ?? {},
        initContext: c
      }
    )
  ] });
}, Oa = b("ValidationRuleEditor", ja), Wa = v.span`
  font-size: medium;
`, Za = Qo.setup({ annotationType: "Module", calculable: !1 }).hinted("Validate automatically by input change").default(!0).build("autoValidate"), Ua = (e) => {
  var a;
  const { store: t, model: n } = e.componentData, o = n.valueType, i = t.schema ?? {}, s = p(() => {
    var c;
    return t.schema ?? (t.schema = {}), (c = t.schema).validations ?? (c.validations = []), t.schema;
  }, [t]);
  return o ? /* @__PURE__ */ m(j, { children: [
    /* @__PURE__ */ r(Ka, { children: /* @__PURE__ */ r(
      ht,
      {
        annotation: Za,
        context: i,
        initContext: s
      }
    ) }),
    /* @__PURE__ */ r(Da, {}),
    /* @__PURE__ */ r(jt, { children: Ja((a = t.schema) == null ? void 0 : a.validations) })
  ] }) : null;
}, _a = b("ComponentValidationSettingsEditor", Ua), Ja = (e) => e == null ? void 0 : e.map((t, n) => {
  const o = `${t.key}-${t.type ?? "internal"}`;
  return /* @__PURE__ */ r(Te, { children: /* @__PURE__ */ r(Oa, { rule: t, onRemove: () => e == null ? void 0 : e.splice(n, 1) }) }, o);
}), Ka = v.div`
  label {
    min-width: max-content;
  }
`, Ga = (e) => {
  const { annotation: t, componentData: n, value: o, onChange: i } = e, s = y(), a = `${n.key}[${t.key}][${t.type}]`, c = () => s.editCustomValidationCode(a, o, Xa(t.type), i), { t: l } = P(), d = l(`annotation.${t.key}.hint`);
  return /* @__PURE__ */ r(N, { ...e, children: /* @__PURE__ */ r(H, { name: t.key, onClick: c, size: "xs", appearance: "ghost", block: !0, style: { borderStyle: "dashed" }, children: d }) });
}, qa = b("CustomValidatorEditor", Ga), Xa = (e) => `/**
 * @param {${e}} value the validated value.
 * @return {boolean} the validation result.
 */
async (value) => {`, Ya = {
  key: Rs,
  htmlAttributes: Zi,
  validation: _a,
  string: Qs,
  boolean: on,
  number: Is,
  date: qi,
  time: ta,
  size: Js,
  array: Vi,
  object: $s,
  arrayOfString: $i,
  arrayOfObject: Hi,
  color: Ui,
  event: Ts,
  oneOf: Ut,
  someOf: zs,
  radio: Ws,
  tooltipProps: Va,
  useTooltip: on,
  renderWhen: Us,
  customValidator: qa
};
class Qa {
  /**
   * Creates i18n for the form builder.
   * @param defaultLanguage the default language.
   * @param translationResolver the callback function that returns JSON with a translation by the specified language.
   */
  constructor(t, n) {
    en.use(E1((o, i, s) => {
      n(o).then((a) => s(null, a)).catch((a) => s(a, null));
    })).use(M1).use(m1).init(
      {
        fallbackLng: t.fullCode,
        load: "currentOnly",
        interpolation: {
          escapeValue: !1
        }
      },
      this.onLoadError.bind(this)
    ).catch((o) => console.error(o));
  }
  /**
   * Sets the language for the web page.
   * @param language the language.
   * @returns the {@link Promise} with the result of the language setting.
   */
  async changeWebDocumentLanguage(t) {
    await en.changeLanguage(t.fullCode), document.documentElement.lang = t.fullCode, document.documentElement.dir = t.bidi;
  }
  onLoadError(t) {
    t && console.log("An error occurred while initializing the language", t);
  }
}
const ec = (e, t) => {
  const n = e[t];
  return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((o, i) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(i.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
}, tc = {
  "ar-EG": A1,
  "de-DE": T1,
  "en-US": Wn,
  "it-IT": P1,
  "fa-IR": F1,
  "fr-FR": R1,
  "es-ES": V1,
  "zh-CN": z1
}, nc = Wn, oc = {
  languages: [
    new de("en", "US", "English", "American English"),
    new de("de", "DE", "Deutsch", "German"),
    new de("ar", "EG", "عرب", "Arabic (Egypt)", he.RTL),
    new de("it", "IT", "Italiano", "Italian"),
    new de("fa", "IR", "فارسی", "Persian", he.RTL),
    new de("fr", "FR", "Français", "French"),
    new de("es", "ES", "Español", "Spanish"),
    new de("zh", "CN", "中文", "Chinese")
  ],
  getData: async (e) => ({
    data: await ec(/* @__PURE__ */ Object.assign({ "../../../public/locales/ar-EG.json": () => import("./ar-EG-6b90093a.js"), "../../../public/locales/de-DE.json": () => import("./de-DE-fc79f6de.js"), "../../../public/locales/en-US.json": () => import("./en-US-f408e29e.js"), "../../../public/locales/es-ES.json": () => import("./es-ES-0fcd0a5e.js"), "../../../public/locales/fa-IR.json": () => import("./fa-IR-d09f7ac0.js"), "../../../public/locales/fr-FR.json": () => import("./fr-FR-503260a3.js"), "../../../public/locales/it-IT.json": () => import("./it-IT-84185923.js"), "../../../public/locales/zh-CN.json": () => import("./zh-CN-097d0028.js") }), `../../../public/locales/${e}.json`),
    componentsLocale: tc[e]
  })
};
function dn(e, t) {
  return e.find((n) => n.code === t);
}
function rc(e, t) {
  const n = t.split("-");
  if (n.length > 1) {
    const o = n[0], i = n[1], s = e.find((c) => c.code === o && c.dialect === i);
    if (s)
      return s;
    const a = dn(e, o);
    if (a)
      return a;
  }
  return dn(e, t);
}
const Qe = () => {
  var e;
  return (e = window.matchMedia("(prefers-color-scheme: dark)")) != null && e.matches ? "dark" : "light";
}, io = (e) => e === "system" ? Qe() : e ?? Qe();
var ge;
class ic {
  constructor() {
    le(this, ge, "Not implemented");
  }
  /**
   * @inheritDoc
   */
  getForm() {
    return Promise.reject(K(this, ge));
  }
  /**
   * @inheritDoc
   */
  getFormNames() {
    return Promise.reject(K(this, ge));
  }
  /**
   * @inheritDoc
   */
  removeForm() {
    return Promise.reject(K(this, ge));
  }
  /**
   * @inheritDoc
   */
  saveForm() {
    return Promise.reject(K(this, ge));
  }
}
ge = new WeakMap();
var ke, qe;
class sc {
  /**
   * Constructor.
   * @param delegate IFormStorage delegate.
   */
  constructor(t) {
    /**
     * Creates and adds a new value to the cache if the key does not exist in the cache.
     * @param name the cache key.
     */
    le(this, ke);
    L(this, "cache", /* @__PURE__ */ new Map());
    this.delegate = t, It(this, void 0, { name: zt("CachedFormStorage") });
  }
  /**
   * @returns the cached instances of BuilderComponent.
   */
  get builderComponents() {
    return Array.from(this.cache.values());
  }
  /**
   * @inheritDoc
   */
  async getForm(t) {
    const n = await this.delegate.getForm(t);
    return Ue(this, ke, qe).call(this, t), n;
  }
  /**
   * @inheritDoc
   */
  async getFormNames() {
    const t = await this.delegate.getFormNames(), n = [];
    for (const [o] of this.cache)
      t.indexOf(o) < 0 && n.push(o);
    return t.forEach((o) => Ue(this, ke, qe).call(this, o)), n.forEach((o) => this.cache.delete(o)), t;
  }
  /**
   * @inheritDoc
   */
  async removeForm(t) {
    const n = await this.delegate.removeForm(t);
    return this.cache.delete(t), n;
  }
  /**
   * @inheritDoc
   */
  async saveForm(t, n) {
    const o = await this.delegate.saveForm(t, n);
    return Ue(this, ke, qe).call(this, t), o;
  }
}
ke = new WeakSet(), qe = function(t) {
  this.cache.has(t) || this.cache.set(t, xn.createTemplateComponent(t));
};
const so = "desktop", ao = ["left", "right"], co = 380;
function ac(e, t) {
  const n = new FileReader();
  n.readAsText(e, "UTF-8"), n.onload = (o) => {
    var s;
    const i = ((s = o.target) == null ? void 0 : s.result) ?? "";
    t(i);
  };
}
function lo(e) {
  const t = document.createElement("input");
  t.type = "file", t.onchange = (n) => {
    const i = n.target.files[0];
    e(i);
  }, t.click();
}
function cc(e) {
  lo((t) => ac(t, e));
}
function lc(e) {
  lo((t) => e(t.arrayBuffer()));
}
function dc(e, t, n) {
  let o = !1;
  const i = [e()], s = Me.box(i.length - 1);
  let a = () => {
  };
  const c = () => {
    a = $n(e, (l) => {
      if (o)
        throw new Error("Undo already disposed");
      s.set(s.get() + 1), i[s.get()] = l, i.length = s.get() + 1, n && n > 0 && i.length > n && (s.set(s.get() - 1), i.splice(0, 1));
    });
  };
  return c(), Me(
    {
      undo: Ae(() => {
        if (o)
          throw new Error("Undo already disposed");
        s.get() !== 0 && (s.set(s.get() - 1), a(), t(i[s.get()]), c());
      }),
      redo: Ae(() => {
        if (o)
          throw new Error("Undo already disposed");
        s.get() >= i.length - 1 || (s.set(s.get() + 1), a(), t(i[s.get()]), c());
      }),
      get hasUndo() {
        return s.get() !== 0;
      },
      get hasRedo() {
        return s.get() < i.length - 1;
      },
      dispose: () => {
        a(), o = !0;
      }
    }
  );
}
function un(e) {
  return JSON.stringify(e, null, 2);
}
class uo {
  /**
   * Creates the editable property settings.
   * @param disableCompute the function to set the property as not computed.
   * @param setComputeCode the function to set the code value.
   * @param getComputeCode the function to get the code value.
   * @param getComputeType the function to get the computed type of the property.
   * @param hasComputeCode the function for checking the existence of the computed code.
   * @param annotation the annotation object for the property.
   * @param componentKey the key of the component that the property belongs to.
   */
  constructor(t, n, o, i, s, a, c) {
    this.disableCompute = t, this.setComputeCode = n, this.getComputeCode = o, this.getComputeType = i, this.hasComputeCode = s, this.annotation = a, this.componentKey = c;
  }
}
class ho {
  /**
   * Creates the editable custom validation code.
   * @param editorKey the unique code editor key.
   * @param code the custom validation code.
   * @param functionSignature the function signature.
   * @param onSave the callback function called when data should be saved.
   */
  constructor(t, n, o, i) {
    this.editorKey = t, this.code = n, this.functionSignature = o, this.onSave = i;
  }
}
class mo {
  /**
   * Creates an editor for JSON.
   * @param editorKey the unique code editor key.
   * @param editorTitle the editor's title.
   * @param json the editable JSON.
   * @param onSave the callback function called when data should be saved.
   * @param onValidate the optional callback function called when data should be validated.
   */
  constructor(t, n, o, i, s) {
    this.editorKey = t, this.editorTitle = n, this.json = o, this.onSave = i, this.onValidate = s;
  }
}
class po {
  /**
   * Creates the editable action settings.
   * @param namedAction the named custom action.
   * @param onSave the callback function called when data should be saved.
   */
  constructor(t, n) {
    L(this, "codeAction");
    this.namedAction = t, this.onSave = n;
    const o = JSON.parse(JSON.stringify(t.actionDefinition));
    this.codeAction = {
      name: t.name,
      body: o.body ?? "",
      params: o.params
    };
  }
}
var Fe, Re, Ce;
class uc {
  constructor(t, n, o = 1e3) {
    L(this, "serializedForm");
    L(this, "undoer");
    le(this, Fe, new Xr());
    le(this, Re, void 0);
    le(this, Ce, void 0);
    this.builderStore = t, It(this, void 0, { name: zt("BuilderUndoer") });
    const i = () => $n(() => this.builderStore.formAsString, (a) => K(this, Fe).next(a));
    this.serializedForm = this.builderStore.formAsString, be(this, Ce, i()), this.undoer = dc(
      () => this.serializedForm,
      (a) => {
        K(this, Ce).call(this), this.builderStore.parseForm(a), be(this, Ce, i());
      },
      n
    );
    const s = K(this, Fe).pipe(
      Gr(o),
      qr()
    );
    be(this, Re, [
      s.subscribe((a) => this.serializedForm = a)
    ]);
  }
  undo() {
    this.undoer.undo(), this.builderStore.selected.clear();
  }
  redo() {
    this.undoer.redo(), this.builderStore.selected.clear();
  }
  get hasUndo() {
    return this.undoer.hasUndo;
  }
  get hasRedo() {
    return this.undoer.hasRedo;
  }
  /**
   * Releases allocated resources, must be used when destroying an object instance.
   */
  dispose() {
    K(this, Ce).call(this), K(this, Re).forEach((t) => t.unsubscribe()), this.undoer.dispose();
  }
}
Fe = new WeakMap(), Re = new WeakMap(), Ce = new WeakMap();
var ue;
class hc {
  /**
   * Creates the form builder settings.
   * @param viewer the form viewer settings.
   * @param props the form viewer properties.
   */
  constructor(t, n) {
    L(this, "builderMode", "viewer");
    L(this, "viewMode", so);
    L(this, "landscapeMode");
    L(this, "theme", Qe());
    L(this, "openedPanels", ao);
    L(this, "bottomPanelHeight", co);
    L(this, "testingData");
    L(this, "testingAutorun", !0);
    L(this, "builderI18n");
    L(this, "formBuilderLanguage");
    L(this, "localizationLanguage");
    L(this, "loadedLanguages", {});
    L(this, "currentEditable");
    L(this, "lastSaveTime", /* @__PURE__ */ new Date());
    L(this, "componentsModalState", {
      opened: !1,
      onSelect: () => {
      }
    });
    L(this, "promptModalState", {
      opened: !1,
      title: "",
      value: "",
      onOk: () => {
      }
    });
    L(this, "errorMap", /* @__PURE__ */ new Map());
    L(this, "view");
    L(this, "formStorageEnabled");
    L(this, "selected", /* @__PURE__ */ new Set());
    L(this, "expanded", /* @__PURE__ */ new Set());
    L(this, "formStorage");
    le(this, ue, void 0);
    L(this, "undoer");
    L(this, "activeFormName");
    /**
     * Validates all properties of all components on the form.
     */
    L(this, "validate", async () => {
      await Promise.allSettled(this.viewer.reduceScreen((t, n) => (this.getComponentMetadata(n.store.type).properties.forEach((i) => {
        const s = ro({ annotation: i, store: this.viewer });
        this.errorMap.has(n) || this.errorMap.set(n, {});
        const a = this.errorMap.get(n);
        for (const c in n.store.props)
          t.push(s(n.store.props[c].value, this.viewer).then((l) => {
            if (!l)
              return a[i.key] = void 0;
            const d = l.map((u) => u.message).filter((u) => u !== "undefined").join("; ");
            return a[i.key] = d;
          }));
      }), t), []));
    });
    /**
     * Downloads the current form to a file in the browser.
     */
    L(this, "download", () => {
      const t = "data:text/json;charset=utf-8," + encodeURIComponent(this.formAsString), n = document.createElement("a");
      n.setAttribute("href", t), n.setAttribute("download", "form.json"), document.body.appendChild(n), n.onclick = () => {
        document.body.removeChild(n);
      }, n.click();
    });
    /**
     * Loads a form from the file selected in the browser.
     */
    L(this, "upload", () => {
      cc(this.parseForm.bind(this));
    });
    /**
     * Adds a component to the list of selected components.
     * @param target the component to be added to the list.
     * @param multipleSelection true if you need to add the component to the list of components,
     * false if you need to leave only the component you want to add in the list of selected components.
     */
    L(this, "selectNode", (t, n = !1) => {
      const o = this.selected.has(t);
      n && (o ? this.selected.delete(t) : this.addNodeToSelection(t)), !n && !o && (this.selected.clear(), this.addNodeToSelection(t)), o || this.expandParents(t);
    });
    L(this, "addNodeToSelection", (t) => {
      this.selected.add(t), bt(this.viewer.form.componentTree, (n) => {
        var i, s;
        const o = this.view.findMeta(n.model.type);
        (s = (i = o == null ? void 0 : o.eventListeners) == null ? void 0 : i.onSelectNode) == null || s.call(i, t, n);
      });
    });
    this.viewer = t, this.props = n, It(
      this,
      {
        selected: Me,
        formBuilderLanguage: Me.ref,
        localizationLanguage: Me.ref,
        dispose: !1,
        builderMode: !0,
        viewMode: !0,
        openedPanels: !0,
        changeBuilderMode: Ae,
        view: !1
      },
      { name: zt("BuilderStore") }
    ), this.formStorageEnabled = !!n.formStorage, this.formStorage = new sc(n.formStorage ?? new ic()), this.formStorageEnabled && this.formStorage.getFormNames().catch(console.error), be(this, ue, n), this.theme = io(n.theme), this.view = n.view, this.activeFormName = n.formName, this.formBuilderLanguage = this.availableLanguages[0], this.localizationLanguage = this.formBuilderLanguage;
    const o = async (i) => {
      const s = this.loadedLanguages[i];
      if (s)
        return s.data;
      const a = rc(this.availableLanguages, i) ?? this.defaultLanguage, c = await this.i18n.getData(a.fullCode);
      return this.loadedLanguages[i] = c, c.data;
    };
    this.builderI18n = new Qa(this.defaultLanguage, o), this.undoer = new uc(this, 100);
  }
  /**
   * Opens the code action editor to add a new code action.
   * @param afterAdd the callback function called after a new code action added.
   */
  addCodeAction(t) {
    const o = { name: "", actionDefinition: kn.sourceAction("") };
    this.editCodeAction(o, (i) => {
      t == null || t(i);
    });
  }
  /**
   * Opens the code action editor.
   * @param namedAction the named action name.
   * @param afterEdit callback function called after data editing.
   */
  editCodeAction(t, n) {
    this.currentEditable = new po(t, (o) => {
      this.viewer.form.updateOrAddAction(t.name, o), n == null || n(o), this.editCodeAction(o);
    });
  }
  /**
   * Opens the custom validation code editor.
   * @param componentKey the component key.
   * @param code the custom validation code.
   * @param functionSignature the function signature.
   * @param onChange the callback function called when data should be saved.
   */
  editCustomValidationCode(t, n, o, i) {
    this.currentEditable = new ho(t, n, o, i);
  }
  /**
   * Opens the editor for JSON.
   * @param componentKey the component key.
   * @param editorTitle the editor's title.
   * @param json the editable JSON.
   * @param onChange the callback function called when data should be saved.
   * @param onValidate the optional callback function called when data should be validated.
   */
  editJsonCode(t, n, o, i, s) {
    this.currentEditable = new mo(t, n, o, i, s);
  }
  /**
   * Changes the language in the form builder.
   * @param language the language to be set.
   */
  changeLanguage(t) {
    this.builderI18n.changeWebDocumentLanguage(t).then(() => this.formBuilderLanguage = t).catch((n) => console.error(n));
  }
  /**
   * @returns the i18n data of the form builder.
   */
  get i18n() {
    return K(this, ue).i18n && K(this, ue).i18n.languages.length > 0 ? K(this, ue).i18n : oc;
  }
  /**
   * @returns set of languages for translating the Form Builder interface.
   */
  get availableLanguages() {
    return this.i18n.languages;
  }
  /**
   * @returns the default language.
   */
  get defaultLanguage() {
    return this.availableLanguages[0];
  }
  /**
   * @returns the current locale for the components.
   */
  get componentsLocale() {
    var t;
    return (t = this.loadedLanguages[this.formBuilderLanguage.fullCode]) == null ? void 0 : t.componentsLocale;
  }
  /**
   * @returns selected component if only one component is selected in the form builder, otherwise undefined.
   */
  get oneSelected() {
    return this.selected.size === 1 ? Array.from(this.selected)[0] : void 0;
  }
  /**
   * @returns the selected tree element if only one component is selected in the form builder, otherwise undefined.
   */
  get oneSelectedComponentData() {
    const t = this.oneSelected;
    if (t)
      return this.viewer.form.componentTree.findByKey(t.key);
  }
  /**
   * @returns the current form name.
   */
  get formName() {
    return this.activeFormName || "__DefaultForm__";
  }
  /**
   * @returns true if the form builder is in RTL mode, false otherwise.
   */
  get isRTL() {
    return this.formBuilderLanguage.bidi === he.RTL;
  }
  /**
   * Correctly clears allocated resources, the function must be called when destroying an instance of the class.
   */
  dispose() {
    this.undoer.dispose();
  }
  /**
   * Changes the form builder mode.
   * @param value the new form builder mode.
   */
  changeBuilderMode(t) {
    this.builderMode = t, this.currentEditable = void 0;
  }
  /**
   * Expands all elements in the component tree.
   */
  expandAll() {
    bt(this.viewer.form.componentTree, (t) => this.expanded.add(t));
  }
  /**
   * Collapses all elements in the component tree.
   */
  collapseAll() {
    this.expanded.clear();
  }
  /**
   * @inheritDoc
   */
  parseForm(t) {
    this.viewer.applyStringForm(t), this.currentEditable = void 0;
  }
  /**
   * Clones the component and adds the clone to the component tree.
   * @param source the cloning component.
   */
  clone(t) {
    this.add(t, t);
  }
  /**
   * Moves one selected component in the component tree.
   * @param source the selected component.
   * @param target the new parent component for the selected component.
   * @param insertPosition the insertion position relative to the new parent component.
   * @param slot the property name of the parent component where the new component will be added.
   * @param slotCondition the source code of the function that checks if the component can be bound to parent.
   * @returns void
   */
  move(t, n, o = "after", i, s) {
    if (!(t === n || t === this.viewer.form.componentTree)) {
      if (t.store.slot = i, t.store.slotCondition = s, o === "inner" || n.isRoot)
        return t.setParent(n);
      if (o === "before")
        return n.insertBeforeMe(t);
      if (o === "after")
        return n.insertAfterMe(t);
      throw new Error(`Unknown insert position ${o}`);
    }
  }
  /**
   * Moves several selected components in the component tree.
   * @param target the new parent component for relocatable components.
   * @param insertPosition the insertion position relative to the new parent component.
   * @param slot the property name of the parent component where the new component will be added.
   * @param slotCondition the source code of the function that checks if the component can be bound to parent.
   */
  multipleMove(t, n = "after", o, i) {
    this.selected.forEach((s) => {
      const a = this.viewer.form.componentTree.findByKey(s.key);
      if (!a)
        throw Error(`Component with key ${s.key} not found`);
      this.move(a, t, n, o, i);
    });
  }
  /**
   * Adds the new component to the component tree (it's better to use {@link insert} function).
   * @param source the component to be added to the component tree.
   * @param target the parent component for the component to be added.
   * @param insertPosition the insertion position relative to the new parent component.
   * @param slot the property name of the parent component where the new component will be added.
   * @param slotCondition the source code of the function that checks if the component can be bound to parent.
   * @returns the new added component.
   */
  add(t, n, o = "after", i, s) {
    return this.insert({
      source: t,
      target: n,
      insertPosition: o,
      slot: i,
      slotCondition: s,
      selectAfterInsert: !0
    });
  }
  /**
   * Inserts the new component to the component tree.
   * @param options the insert options.
   * @returns the new inserted component.
   */
  insert(t) {
    const { source: n, target: o, insertPosition: i, slot: s, slotCondition: a, selectAfterInsert: c } = t, l = st(new Ee("", ""), Ur(n.store)), d = this.viewer.createComponentData(l), u = d.unifyKeys(this.viewer.form.componentTree);
    return this.move(d, o, i ?? "after", s, a), bt(d, (h) => {
      const C = u.get(h.key);
      if (!C)
        return;
      const f = this.viewer.form.localization.getLocalizationForComponent(C);
      f && this.viewer.form.localization.addLocalizationWithNewKey(f, C, h.key);
    }), c && this.selectNode(d), l;
  }
  /**
   * Removes the component from the component tree.
   * @param source the component for removal.
   */
  remove(t) {
    this.selected.delete(t), this.viewer.form.localization.removeLocalization(t.key), t.delete();
  }
  /**
   * Clears the current form.
   */
  clear() {
    this.viewer.clear(), this.selected.clear();
  }
  /**
   * @inheritDoc
   */
  get formAsString() {
    const t = this.viewer.form.actionNames.length ? this.viewer.form.actions : void 0, n = Object.keys(this.viewer.form.errorProps).length ? this.viewer.form.errorProps : void 0, o = {
      version: er.version1,
      actions: t,
      errorProps: n,
      tooltipType: this.viewer.form.tooltipType,
      errorType: this.viewer.form.errorType,
      form: this.viewer.form.componentTree.store,
      localization: this.viewer.form.localization.value,
      languages: this.formAvailableLanguages,
      defaultLanguage: this.viewer.form.defaultLanguage.fullCode
    };
    return un(o);
  }
  /**
   * @returns the list of available languages for the form.
   */
  get formAvailableLanguages() {
    return this.availableLanguages.filter((t) => t.fullCode === this.defaultLanguage.fullCode || this.viewer.form.localization.hasLanguage(t.fullCode));
  }
  /**
   * Saves the current form in the form storage.
   * @param formName the form name.
   * @returns the {@link Promise} with the result of saving the form.
   */
  async save(t) {
    const n = t || this.activeFormName;
    if (n)
      return await this.saveForm(n, this.formAsString);
  }
  /**
   * Saves the form in the form storage.
   * @param formName the form name.
   * @param formValue the form serialized to JSON.
   * @returns the {@link Promise} with the result of saving the form.
   */
  saveForm(t, n) {
    return this.lastSaveTime = /* @__PURE__ */ new Date(), this.activeFormName = t, this.formStorage.saveForm(t, n);
  }
  /**
   * Creates a new form in the form storage.
   * @param formName the form name.
   * @returns the Promise with the result of the form creation.
   */
  async createForm(t) {
    const n = {
      form: new Ee(Xt.name, Xt.type),
      localization: {},
      languages: [],
      defaultLanguage: this.defaultLanguage.fullCode
    };
    return this.saveForm(t, un(n));
  }
  /**
   * @returns the {@link Promise} with all form names from the form storage.
   */
  async getFormKeys() {
    return (await this.formStorage.getFormNames()).map((n) => `${n}`) || [];
  }
  /**
   * Removes the form from the form storage by form name.
   * @param value the form name.
   * @param onSuccess the callback function that is called when a form is successfully removed.
   */
  removeForm(t, n) {
    this.activeFormName = void 0, this.formStorage.removeForm(t).then(n);
  }
  /**
   * Loads the form from the form storage into the form builder.
   * @param value the form name.
   * @param onSuccess the callback function that is called when the form is loaded successfully.
   * @param onError the callback function that is called if the form fails to load.
   */
  loadForm(t, n, o) {
    this.getStoredFormJson(t).then((i) => {
      this.parseForm(i), this.activeFormName = t, n == null || n();
    }).catch((i) => o == null ? void 0 : o(i));
  }
  /**
   * @param formName the form name.
   * @returns the {@link Promise} with a form serialized in JSON.
   */
  getStoredFormJson(t) {
    return this.formStorage.getForm(t);
  }
  /**
   * Hides or shows the form builder panel.
   * @param placement placement of the form builder panel.
   * @param visible true if you want to show the panel, false otherwise.
   */
  setPanelVisible(t, n) {
    var i;
    const o = ((i = this.openedPanels) == null ? void 0 : i.filter((s) => s !== t)) ?? [];
    this.openedPanels = [
      ...o,
      ...n ? [t] : []
    ];
  }
  /**
   * Expands all the parents of a component in the form builder's component tree.
   * @param target the expanded component.
   * @param componentTree the initial node of the component tree.
   * @returns true if at least one component has been marked as expanded,
   * or if the beginning of the tree matches the component's key, undefined otherwise.
   */
  expandParents(t, n = this.viewer.form.componentTree) {
    var o;
    if (!((o = n.children) != null && o.length))
      return n.key === t.key;
    if (n.children.some((i) => this.expandParents(t, i)))
      return this.expanded.add(n), !0;
  }
  /**
   * Returns the component metadata for the specified component type name.
   * @param type the component type name.
   * @returns the component metadata for the specified component type name.
   */
  getComponentMetadata(t) {
    var n;
    return this.view.findMeta(t) ?? ((n = this.builderComponents.find((o) => o.model.type === t)) == null ? void 0 : n.meta) ?? this.view.getMeta(t);
  }
  /**
   * @returns the array of metadata of form builder components.
   */
  get builderComponents() {
    const t = [...this.view.builderComponents], n = t.map((a) => a.model.type), o = new Set(n), i = xn.createTemplateComponent(this.formName), s = this.formsMetadata.filter((a) => !o.has(a.model.type) && i.model.type !== a.model.type);
    return t.push(...s), t;
  }
  /**
   * @returns form metadata from an external form storage.
   */
  get formsMetadata() {
    return this.formStorageEnabled ? this.formStorage.builderComponents : [];
  }
  /**
   * Returns the property editor for the specified editorType.
   * @param editorType the property editor type.
   * @returns the property editor for the specified editorType.
   */
  getPropertyEditor(t) {
    var o;
    const n = (o = K(this, ue).propertyEditors) == null ? void 0 : o[t];
    return n ? b(n.displayName ?? t, n) : Ya[t];
  }
  /**
   * Displays the modal window of the components.
   * @param onSelect the callback function called when a component is selected.
   */
  showComponentsModal(t) {
    this.componentsModalState.onSelect = t, this.componentsModalState.opened = !0;
  }
  /**
   * Displays the modal window for entering a value.
   * @param props the modal window properties.
   */
  showPromptModal(t) {
    Object.assign(this.promptModalState, t, { opened: !0, errorMessage: void 0 });
  }
  /**
   * Deletes the selected components from the component tree.
   */
  deleteSelectedComponents() {
    const t = Array.from(this.selected);
    if (t.length <= 0)
      return;
    const n = this.viewer.form.componentTree, o = [], i = t[0], s = i.parent;
    if (s) {
      const l = s.children.indexOf(i);
      o.push(...s.children.slice(0, l).reverse()), o.push(...s.children.slice(l + 1));
    }
    let a = s;
    for (; a; )
      o.push(a), a = a.parent;
    t.forEach((l) => {
      l !== n && this.remove(l);
    });
    const c = o.find((l) => !!n.findByKey(l.key));
    c && this.selectNode(c);
  }
}
ue = new WeakMap();
const mc = (e) => {
  const t = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let n = 0;
  for (; e >= 1024; )
    e /= 1024, ++n;
  return [e.toFixed(2), t[n]].join(" ");
}, pc = (e) => e instanceof Date && !Number.isNaN(e.getTime()), hn = (e) => {
  if (!at(e))
    try {
      return JSON.parse(e);
    } catch (t) {
      return t instanceof SyntaxError && console.error(t.name), null;
    }
}, gc = ({ lastModified: e, name: t, type: n, webkitRelativePath: o, size: i }) => ({
  lastModified: new Date(e).toISOString(),
  name: t,
  type: n,
  webkitRelativePath: o,
  size: mc(i)
}), et = (e, t) => {
  if (typeof e != "object" || e === null)
    return e;
  const { previewNativeObjects: n } = t || {}, o = {};
  return Object.entries(e).forEach(([i, s]) => {
    const a = (c) => typeof s == c;
    if (Array.isArray(s)) {
      o[i] = s.map((c) => et(c, t));
      return;
    }
    if (n && s instanceof File) {
      o[i] = gc(s);
      return;
    }
    if (s instanceof Date) {
      const c = pc(s) ? s.toISOString() : "Invalid date";
      o[i] = c;
      return;
    }
    if (a("object")) {
      o[i] = et(s, t);
      return;
    }
    (a("string") || a("number") || a("boolean")) && (o[i] = s);
  }), o;
}, Cc = {
  contextmenu: !1,
  lineNumbers: "off",
  minimap: { enabled: !1 },
  glyphMargin: !1,
  folding: !1,
  lineDecorationsWidth: 0,
  lineNumbersMinChars: 0,
  autoIndent: "full"
}, fc = we(({ testingFunction: e }, t) => {
  const n = T("testingEditor"), o = y(), { formData: i } = $(), [s, a] = A(o.testingData ?? xc(i)), [c] = A(s);
  return M(() => () => {
    o.testingData = s;
  }, [o, s]), /* @__PURE__ */ m(j, { style: { flex: 1, minHeight: 100, minWidth: 0, alignItems: "start", position: "relative" }, children: [
    /* @__PURE__ */ r("span", { style: { marginTop: -40, paddingBlock: 7, opacity: 0.6 }, children: n("testFormData") }),
    /* @__PURE__ */ r("div", { style: { flex: 1, minHeight: 20, width: "100%" }, children: /* @__PURE__ */ r(Oe, { language: "json", initialValue: c, onChange: a, options: Cc }) }),
    /* @__PURE__ */ r(Co, { data: s, testingFunction: e, ref: t })
  ] });
}), go = b("TestingEditor", fc), vc = we(({ data: e, testingFunction: t, compact: n }, o) => {
  const i = T("testingEditor"), s = y(), [a, c] = A(), l = p(() => {
    const h = yc(e ?? "{}", t);
    return c(h), h;
  }, [e, t]);
  M(() => {
    if (o && typeof o == "object" && ((o.current ?? {}).test = l), s.testingAutorun) {
      l();
      return;
    }
    c(void 0);
  }, [l, s.testingAutorun, o]);
  const d = (h, C) => s.testingAutorun = C, u = /* @__PURE__ */ m(
    re,
    {
      style: { justifyContent: n ? "end" : "space-between", paddingInlineEnd: 10, paddingTop: 3, alignItems: "end", flex: 1 },
      children: [
        n && a && /* @__PURE__ */ r(mn, { compact: !0, result: a, onClose: () => c(void 0) }),
        /* @__PURE__ */ m(H, { onClick: l, size: "sm", appearance: "ghost", style: { display: "flex", gap: 10 }, children: [
          /* @__PURE__ */ r(D, { icon: Zn }),
          " ",
          i("run")
        ] }),
        /* @__PURE__ */ r(nt, { checked: s.testingAutorun, onChange: d, style: { height: 32 }, children: i("autorun") })
      ]
    }
  );
  return n ? u : /* @__PURE__ */ m(j, { style: { width: "100%", flex: 0 }, children: [
    a && /* @__PURE__ */ r(mn, { result: a, onClose: () => c(void 0) }),
    u
  ] });
}), Co = b("TestRunner", vc), fo = {
  error: "var(--rs-red-500)",
  warning: "var(--rs-orange-400)",
  success: "var(--rs-green-500)"
}, vo = (e) => $e`
  .rs-theme-dark && {
    background-color: initial !important;

    .rs-message-body, .rs-btn-close {
      color: white;
    }

    .rs-message-icon-wrapper .rs-icon {
      color: ${fo[e]} !important;
    }
  }
`, wc = v(rt)`
  ${({ type: e }) => vo(e)};
  background-color: initial !important;
  flex: 1;

  .rs-message-container {
    padding: 5px;
  }
`, bc = v(rt)`
  ${({ type: e }) => vo(e)};
  border-radius: 6px;
  border: 2px solid ${({ type: e }) => fo[e]};
`, mn = ({ result: e, onClose: t, compact: n }) => {
  const o = n ? wc : bc, i = /* @__PURE__ */ r("div", { style: { maxHeight: 80, overflow: "auto", wordBreak: "break-word" }, children: /* @__PURE__ */ r("pre", { style: { whiteSpace: "pre-wrap", margin: 0 }, children: /* @__PURE__ */ r(pn, { result: e }) }) });
  return /* @__PURE__ */ r(o, { type: kc(e), closable: !n, onClose: t, showIcon: !0, children: n ? /* @__PURE__ */ r(pn, { result: e }) : i });
}, pn = ({ result: e }) => {
  var n;
  const t = T("testingEditor");
  return /* @__PURE__ */ r("div", { children: at(e.result) ? ((n = e.exceptions) == null ? void 0 : n.map((o) => o.message)) ?? t("hasNotReturnedValue") : wo(e == null ? void 0 : e.result) });
};
function yc(e, t) {
  try {
    const { data: n, errors: o } = JSON.parse(e);
    return t(new Lc(n, o));
  } catch (n) {
    return Le.error([n]);
  }
}
const xc = (e) => wo({ data: tr(e), errors: {} }), wo = (e) => typeof e == "string" ? e : JSON.stringify(et(e, { previewNativeObjects: !0 }), null, 2), kc = (e) => !at(e.result) && !e.warning ? "success" : e.warning ? "warning" : e.error || e.exceptions ? "error" : "warning";
class Lc {
  /**
   * Constructor
   * @param data the test form data.
   * @param errors the test form errors.
   */
  constructor(t = {}, n = {}) {
    L(this, "index");
    L(this, "state", {});
    L(this, "hasErrors", !1);
    L(this, "isValidating", !1);
    L(this, "parentData", {});
    L(this, "rootData", {});
    this.data = t, this.errors = n;
  }
  /** @inheritDoc */
  clear() {
    this.data = {};
  }
  /** @inheritDoc */
  validate() {
    return Promise.resolve();
  }
  /** @inheritDoc */
  reset() {
  }
  /** @inheritDoc */
  setAllErrors() {
  }
  /** @inheritDoc */
  getValidationResult() {
    return Promise.resolve(void 0);
  }
  /** @inheritDoc */
  get fluentData() {
    return this.data;
  }
}
const mt = (e) => {
  const { t } = P(), n = t("codeEditor.codePlaceholder"), { onCompile: o, onSave: i } = e, s = E(() => e.source ?? n, [e.source, n]), [a, c] = A(s), [l, d] = A(s), u = _({}), h = p(() => {
    var w, x;
    const f = (x = (w = u.current).test) == null ? void 0 : x.call(w);
    f != null && f.error || (Ae(() => i(a))(), d(a));
  }, [i, a]);
  M(() => {
    d(s), c(s);
  }, [s]);
  const C = p((f) => o(a, f), [a, o]);
  return /* @__PURE__ */ m(re, { style: { minHeight: 0, flex: 1 }, children: [
    /* @__PURE__ */ m(j, { gap: 10, style: { minHeight: 0, flex: 1.5 }, children: [
      /* @__PURE__ */ r(
        Oe,
        {
          beginContextLine: e.beginContextLine,
          endContextLine: e.endContextLine,
          initialValue: l,
          language: e.language,
          onChange: c
        }
      ),
      /* @__PURE__ */ m(Sc, { children: [
        /* @__PURE__ */ m(ie, { size: "sm", children: [
          /* @__PURE__ */ r(H, { appearance: "primary", onClick: h, children: t("common.save") }),
          /* @__PURE__ */ r(H, { appearance: "ghost", onClick: () => e.onClose(), children: t("common.close") })
        ] }),
        e.compact && /* @__PURE__ */ r(Co, { testingFunction: C, ref: u, compact: !0 })
      ] })
    ] }),
    !e.compact && /* @__PURE__ */ r(go, { testingFunction: C, ref: u })
  ] });
}, Sc = v.div`
  display: flex;
  gap: 10px;
  align-items: end;
  justify-content: space-between;
`, pt = v.div`
  display: flex;
  gap: 25px;
  width: 100%;
  align-items: center;
`, Mc = Rt(["string", "number", "boolean"], !1), Ec = /^[A-Za-z_]+[A-Za-z0-9_]*$/, gn = (e) => Ec.test(e), Ac = ({ value: e, collapsed: t, onClick: n }) => {
  const [o, i] = e;
  return /* @__PURE__ */ m(Fc, { onClick: n, children: [
    /* @__PURE__ */ r(t ? ct : jn, {}),
    " ",
    o,
    ": ",
    i
  ] });
}, Tc = ({ value: e, onRemove: t, onChange: n, parameters: o }) => {
  const [i, s] = e, [a, c] = A(!0), { t: l } = P(), [d, u] = A({ name: i, type: s }), h = _(null), C = (k) => k === i || !(o != null && o.find(([S]) => S === k)), f = (k) => C(k.name) && gn(k.name), w = (k) => {
    u(k), f(k) && n([k.name, k.type]);
  }, x = Ye.Model({
    name: Ye.Types.StringType().isRequired(l("codeActionEditor.parameterNameIsRequired")).addRule(C, l("codeActionEditor.parameterNameExists")).addRule(gn, l("codeActionEditor.parameterNameIsNotValid"))
  });
  return /* @__PURE__ */ m("div", { children: [
    /* @__PURE__ */ m(re, { style: { justifyContent: "space-between" }, children: [
      /* @__PURE__ */ r(Ac, { value: [d.name, d.type], collapsed: a, onClick: () => c(!a) }),
      /* @__PURE__ */ r(Pc, { onClick: t })
    ] }),
    /* @__PURE__ */ r(Fn.Collapse, { in: !a, unmountOnExit: !0, children: /* @__PURE__ */ r(j, { gap: 10, children: /* @__PURE__ */ m(
      te,
      {
        model: x,
        checkTrigger: "change",
        formValue: d,
        ref: h,
        onChange: (k) => w({ name: k.name, type: k.type }),
        children: [
          /* @__PURE__ */ m(te.Group, { children: [
            /* @__PURE__ */ r(te.ControlLabel, { children: l("actions.name") }),
            /* @__PURE__ */ r(te.Control, { name: "name", style: { maxWidth: "100%" } })
          ] }),
          /* @__PURE__ */ m(te.Group, { children: [
            /* @__PURE__ */ r(te.ControlLabel, { children: l("actions.type") }),
            /* @__PURE__ */ r(
              te.Control,
              {
                name: "type",
                accepter: Ie,
                data: Mc,
                cleanable: !1,
                creatable: !1
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}, Pc = v(se)`
  margin-top: 5px;
  cursor: pointer;
`, Fc = v.span`
  cursor: pointer;
`, Rc = ({ value: e, onChange: t }) => {
  const n = T("actions"), [o, i] = A(e);
  M(() => {
    i(e);
  }, [e]);
  const s = (u) => {
    i(u), t(u);
  }, a = () => {
    const u = (o == null ? void 0 : o.map((x) => x[0])) ?? [], h = new Set(u), f = [nr("prop", h), "string"], w = o ? [...o, f] : [f];
    s(w);
  }, c = (u) => {
    const h = o ? [...o] : [];
    h == null || h.splice(u, 1), s(h);
  }, l = (u, h) => {
    const C = o ? [...o] : [];
    C[h] = u, s(C);
  }, d = o == null ? void 0 : o.map((u, h) => /* @__PURE__ */ r(
    Tc,
    {
      value: u,
      onRemove: () => c(h),
      parameters: o,
      onChange: (C) => l(C, h)
    },
    h
  ));
  return /* @__PURE__ */ m(j, { style: { maxWidth: 240 }, children: [
    /* @__PURE__ */ m(re, { style: { alignItems: "center", justifyContent: "space-between", height: 34 }, children: [
      /* @__PURE__ */ r("h6", { children: n("parameters") }),
      /* @__PURE__ */ r(H, { onClick: a, appearance: "link", children: /* @__PURE__ */ r("h6", { children: n("add") }) })
    ] }),
    /* @__PURE__ */ r(j, { style: { overflow: "auto" }, children: d })
  ] });
}, Vc = (e) => {
  if (e)
    return Object.entries(e).map(([t, n]) => [t, n]);
}, zc = (e) => {
  if (!e)
    return;
  const t = {};
  return e.forEach(([n, o]) => t[n] = o), t;
}, Bc = ({ codeAction: e, onSave: t }) => {
  const { t: n } = P(), o = $(), i = y(), s = E(
    () => ({ ...e, actionParameters: Vc(e.params) }),
    [e]
  ), [a, c] = A(s), [l, d] = A(e.body), u = _(null), h = E(() => Dc(a.actionParameters), [a.actionParameters]);
  M(() => {
    var S;
    c(s), d(s.body), (S = u.current) == null || S.cleanErrors();
  }, [e, s]);
  const C = Ye.Model({
    name: Ye.Types.StringType().isRequired(n("codeActionEditor.nameIsRequired")).addRule((S) => e.name === a.name || !o.form.actions[S], n("codeActionEditor.actionNameExists"))
  }), f = (S) => {
    c((B) => ({ ...B, ...S }));
  }, w = () => i.currentEditable = void 0, x = (S) => {
    var q;
    if (!((q = u.current) != null && q.check()))
      return;
    const B = kn.sourceAction(S, zc(a.actionParameters)), J = { name: a.name, actionDefinition: B };
    t == null || t(J);
  }, k = (S) => (Ln(S), Le.success(n("testingEditor.compilationOk")));
  return /* @__PURE__ */ m(F, { children: [
    /* @__PURE__ */ r(pt, { children: n("bottomPanel.editCodeAction") }),
    /* @__PURE__ */ m(Ic, { children: [
      /* @__PURE__ */ m(j, { gap: 10, children: [
        /* @__PURE__ */ r(
          te,
          {
            model: C,
            checkTrigger: "change",
            formValue: a,
            ref: u,
            onChange: (S) => f({ name: S.name }),
            children: /* @__PURE__ */ r(te.Control, { name: "name", style: { width: "100%" } })
          }
        ),
        /* @__PURE__ */ r(
          mt,
          {
            beginContextLine: h,
            endContextLine: "}",
            source: l ?? "",
            onSave: x,
            onClose: w,
            onCompile: k,
            compact: !0
          }
        )
      ] }),
      /* @__PURE__ */ r(
        Rc,
        {
          value: a.actionParameters,
          onChange: (S) => f({ actionParameters: S })
        }
      )
    ] })
  ] });
}, Ic = v(re)`
  gap: 20px;
  flex: 1;
  min-height: 0;
`, Dc = (e) => {
  let t = "@param {} args - the action parameters arguments.";
  return e != null && e.length && (t = `@param {{${e.map(([o, i]) => `${o}: ${i}`).join(", ")}}} args - the action parameters arguments.`), `/**
 * @param {ActionEventArgs} e - the action arguments.
 * ${t}
 */
async function Action (e, args) {`;
}, Hc = ({ editableProperty: e, onClose: t }) => {
  const n = (s) => {
    e.setComputeCode(s, "function");
  }, o = `/**
 * @param {IFormData} form
 * @return {${e.annotation.type}}
 */
function Calculation (form) {`, i = (s, a) => or({ fnSource: s }, a);
  return /* @__PURE__ */ r(
    mt,
    {
      beginContextLine: o,
      endContextLine: "}",
      source: e.getComputeCode("function"),
      onSave: n,
      onClose: t,
      onCompile: i
    },
    e.annotation.key
  );
}, $c = ({ value: e, onSelect: t }) => {
  const { availableLanguages: n } = y(), o = E(() => n.reduce((c, l) => (c[l.fullCode] = l, c), {}), [n]), i = E(() => Object.entries(o).map(([c, { code: l }]) => ({ value: c, label: Hn(l) })), [o]), s = p((c) => t(o[c]), [o, t]), a = p((c, { value: l }) => !!l && yo(o[l]), [o]);
  return /* @__PURE__ */ r(
    jc,
    {
      value: e,
      data: i,
      onSelect: s,
      cleanable: !1,
      placement: "autoVerticalEnd",
      size: "sm",
      searchable: !1,
      width: 62,
      renderMenuItem: a
    }
  );
}, bo = b("LocalizationPicker", $c), yo = (e) => {
  const { name: t, code: n } = e;
  return /* @__PURE__ */ m(Nc, { children: [
    /* @__PURE__ */ r("label", { children: Hn(n) }),
    t
  ] });
}, Nc = v.div`
  display: flex;
  gap: 10px;

  label {
    min-width: 20px;
    text-align: center;
    font-weight: bold;
  }
`, jc = v(Zt)`
  .rs-picker-toggle-value {
    color: var(--rs-btn-default-text) !important;
    line-height: 22px;
  }

  .rs-picker-toggle {
    background-color: var(--rs-btn-default-bg) !important;
    border: none;
    min-width: 30px;
  }
`, Oc = ({ editableProperty: e, onClose: t }) => {
  const n = T("common"), o = rr(`${e.componentKey}_${e.annotation.key}`), i = y(), s = _({}), [a, c] = A(i.localizationLanguage), l = E(() => e.getComputeCode("localization", { langCode: a.fullCode }), [e, a]), [d, u] = A(l);
  M(() => {
    u(l);
  }, [l, a, e]);
  const h = () => {
    var k, S;
    const x = (S = (k = s.current).test) == null ? void 0 : S.call(k);
    x != null && x.error || x != null && x.exceptions || Ae(() => e.setComputeCode(d, "localization", { langCode: a.fullCode }))();
  }, C = `${o} =`, f = "", w = p(
    (x) => ir({
      localizationStringId: o,
      localization: d,
      data: sr(x.data),
      language: a
    }),
    [o, d, a]
  );
  return /* @__PURE__ */ m(re, { style: { minHeight: 0, flex: 1 }, children: [
    /* @__PURE__ */ m(j, { gap: 10, style: { minHeight: 0, minWidth: 0, flex: 1.5 }, children: [
      /* @__PURE__ */ r(
        Oe,
        {
          language: Et,
          initialValue: l,
          beginContextLine: C,
          endContextLine: f,
          canEditBeginContextLine: !0,
          onChange: u
        },
        `${e.annotation.key}_${a.fullCode}`
      ),
      /* @__PURE__ */ m(Zc, { children: [
        /* @__PURE__ */ m(ie, { size: "sm", children: [
          /* @__PURE__ */ r(H, { appearance: "primary", onClick: h, children: n("save") }),
          /* @__PURE__ */ r(H, { appearance: "ghost", onClick: t, children: n("close") })
        ] }),
        /* @__PURE__ */ r(bo, { value: a.fullCode, onSelect: c })
      ] })
    ] }),
    /* @__PURE__ */ r(go, { testingFunction: w, ref: s })
  ] });
}, Wc = b("LocalizationEditor", Oc), Zc = v.div`
  display: flex;
  gap: 10px;
  align-items: center;
`, Uc = ({ editableProperty: e, onClose: t }) => {
  const { t: n } = P();
  return /* @__PURE__ */ m(j, { children: [
    /* @__PURE__ */ r(_c, { children: n("bottomPanel.simpleValueHint") }),
    /* @__PURE__ */ m(ie, { size: "sm", children: [
      /* @__PURE__ */ r(H, { appearance: "ghost", onClick: e.disableCompute, children: n("common.save") }),
      /* @__PURE__ */ r(H, { appearance: "ghost", onClick: t, children: n("common.close") })
    ] })
  ] });
}, _c = v.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`, Jc = {
  function: Hc,
  localization: Wc,
  simpleValue: Uc
}, Kc = { flex: 0 }, Gc = ({ property: e }) => {
  const t = y(), { t: n } = P(), o = e.getComputeType() ?? "simpleValue", [i, s] = A(o), { annotation: a, componentKey: c } = e, l = Jc[i], d = Xc(a, n), u = p(() => t.currentEditable = void 0, [t]), h = p((C) => s(C), []);
  return M(() => s(o), [o]), /* @__PURE__ */ m(F, { children: [
    /* @__PURE__ */ m(pt, { children: [
      `${n("bottomPanel.editProperty")}: ${c}.${a.name}`,
      d.length && /* @__PURE__ */ r(_t, { value: i, label: "Use", items: d, style: Kc, onChange: h })
    ] }),
    /* @__PURE__ */ r(l, { editableProperty: e, onClose: u })
  ] });
}, qc = b("ComputedPropertyEditor", Gc), Xc = ({ calculable: e, localizable: t }, n) => [
  ...e ? ["function"] : [],
  ...t ? ["localization"] : [],
  ...e || t ? ["simpleValue"] : []
].map((o) => ({ label: n(`bottomPanel.${o}`), value: o })), Yc = (e) => {
  const { t } = P(), n = y(), o = e.functionSignature, i = "}", s = p(() => n.currentEditable = void 0, [n]), a = p((c) => {
    const l = `${o}
${c}
${i}`;
    try {
      return Ln(l), Le.success(t("testingEditor.compilationOk"));
    } catch (d) {
      return Le.error([d]);
    }
  }, [o, i, t]);
  return /* @__PURE__ */ m(F, { children: [
    /* @__PURE__ */ m(pt, { children: [
      t("validation.editCustomValidationCode"),
      " '",
      e.editorKey,
      "'"
    ] }),
    /* @__PURE__ */ r(
      mt,
      {
        beginContextLine: o,
        endContextLine: i,
        source: e.code,
        onSave: e.onSave,
        onClose: s,
        onCompile: a,
        compact: !0
      },
      e.editorKey
    )
  ] });
}, Qc = b("CustomValidationCodeEditor", Yc), el = (e) => {
  const { editorTitle: t, json: n, editorKey: o, onSave: i, onValidate: s } = e, { t: a } = P(), c = y(), l = p(() => c.currentEditable = void 0, [c]), d = p((h) => {
    try {
      return s ? s(h) : JSON.parse(h), Le.success(a("testingEditor.compilationOk"));
    } catch (C) {
      return Le.error([C]);
    }
  }, [a, s]), u = p((h) => {
    try {
      const C = JSON.parse(h);
      i(C);
    } catch {
    }
  }, [i]);
  return /* @__PURE__ */ m(F, { children: [
    /* @__PURE__ */ r(pt, { children: `${a("codeEditor.generic.json.title")} '${t}'` }),
    /* @__PURE__ */ r(
      mt,
      {
        source: n,
        onSave: u,
        onClose: l,
        onCompile: d,
        language: "json",
        compact: !0
      },
      o
    )
  ] });
}, tl = b("JsonCodeEditor", el), nl = () => {
  const e = y(), { currentEditable: t, bottomPanelHeight: n } = e;
  let o = null;
  return t instanceof po && (o = /* @__PURE__ */ r(Bc, { ...t })), t instanceof uo && (o = /* @__PURE__ */ r(qc, { property: t })), t instanceof ho && (o = /* @__PURE__ */ r(Qc, { ...t })), t instanceof mo && (o = /* @__PURE__ */ r(tl, { ...t })), o ? /* @__PURE__ */ r(Zr, { ...{
    className: rl,
    enable: { top: !0 },
    onResizeStop: (s, a, c, l) => e.bottomPanelHeight += l.height,
    defaultSize: { width: "initial", height: n },
    minHeight: 250,
    maxHeight: "92vh"
  }, children: o }) : null;
}, ol = b("BottomPanel", nl), rl = it`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 980px;
  padding: 10px;
  gap: 10px;
  box-shadow: 0 -5px 20px 0 rgb(0 0 0 / 15%);
`;
var Ve;
class il {
  /**
   * Creates {@LocalStorageSynchronizer}.
   * @param builderStore the form builder settings.
   */
  constructor(t) {
    le(this, Ve, void 0);
    /**
     * Releases allocated resources, must be used when destroying an object instance.
     */
    L(this, "dispose", () => {
      K(this, Ve).forEach((t) => t());
    });
    L(this, "getItem", (t, n) => localStorage.getItem(t) ?? n);
    L(this, "updateItem", (t, n) => {
      if (typeof n > "u") {
        localStorage.removeItem(t);
        return;
      }
      localStorage.setItem(t, n);
    });
    const n = "resolution";
    t.viewMode = this.getItem(n, so);
    const o = "openedPanels";
    t.openedPanels = hn(this.getItem(o)) ?? ao;
    const i = "bottomPanelHeight";
    t.bottomPanelHeight = hn(this.getItem(i)) ?? co;
    const s = "theme";
    t.theme = this.getItem(s, Qe()) === "dark" ? "dark" : "light";
    const a = "testingAutorun";
    t.testingAutorun = this.getItem(a) === "true";
    const c = "LocalStorageSynchronizer", l = "formName", d = this.getItem(l);
    d && (t.activeFormName = d);
    const u = "i18nextLng", h = this.getItem(u);
    if (h) {
      const C = t.availableLanguages.find((f) => f.fullCode === h);
      t.changeLanguage(C ?? t.defaultLanguage);
    }
    be(this, Ve, [
      xe(
        () => this.updateItem(n, t.viewMode),
        { name: ye(c, "saveResolution") }
      ),
      xe(
        () => this.updateItem(o, JSON.stringify(t.openedPanels)),
        { name: ye(c, "saveOpenedPanels") }
      ),
      xe(
        () => this.updateItem(i, t.bottomPanelHeight),
        { name: ye(c, "saveBottomPanelHeight") }
      ),
      xe(
        () => this.updateItem(s, t.theme),
        { name: ye(c, "saveTheme") }
      ),
      xe(
        () => this.updateItem(a, t.testingAutorun),
        { name: ye(c, "saveTestingAutorunSetting") }
      ),
      xe(
        () => this.updateItem(l, t.activeFormName),
        { name: ye(c, "saveFormName") }
      )
    ]);
  }
}
Ve = new WeakMap();
function sl(e, t) {
  if (!e || !t)
    return { display: "none" };
  const { x: n, y: o } = t, i = `translate(${n}px, ${o}px)`;
  return {
    transform: i,
    WebkitTransform: i
  };
}
const al = () => {
  const e = y().selected.size > 1, { isDragging: t, initialOffset: n, currentOffset: o } = lt((i) => ({
    item: i.getItem(),
    initialOffset: i.getInitialSourceClientOffset(),
    currentOffset: i.getClientOffset(),
    isDragging: i.isDragging()
  }));
  return t ? /* @__PURE__ */ r(cl, { children: /* @__PURE__ */ r(ll, { className: G({ isMultiSelection: e }), style: sl(n, o), id: "fb-drag-preview" }) }) : null;
}, cl = v.div`
  position: fixed;
  pointer-events: none;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`, ll = v.div`
  box-shadow: 0 5px 20px 0 rgb(0 0 0 / 35%);
  width: fit-content;

  &, & > *, &::before, &::after {
    background-color: white;
    border-radius: 5px;
  }

  &.isMultiSelection {
    & > *, &::before, &::after {
      box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.15);
    }

    &::before, &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
    }

    &::before {
      left: 7px;
      top: 5px;
      z-index: -1;
    }

    &::after {
      left: 12px;
      top: 10px;
      z-index: -2;
    }
  }

  .rs-theme-dark & {
    &, & > *, &::before, &::after {
      background-color: #414549;
    }
  }
`, dl = (e) => {
  e.preventDefault(), e.stopPropagation();
}, ul = (e, t) => {
  document.activeElement === document.body && (t.deleteSelectedComponents(), dl(e));
}, hl = (e) => {
  const t = p((n) => {
    n.key === "Delete" && ul(n, e);
  }, [e]);
  M(() => (window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t)), [t]);
}, ml = () => {
  const { t: e } = P(), t = y(), n = t.availableLanguages.map((o) => /* @__PURE__ */ r(
    z.Item,
    {
      eventKey: o.fullCode,
      onSelect: () => t.changeLanguage(o),
      children: yo(o)
    },
    o.fullCode
  ));
  return /* @__PURE__ */ r(z.Menu, { title: e("leftMenu.translation"), icon: /* @__PURE__ */ r(D, { icon: f1 }), children: n });
}, pl = b("MenuLanguageSwitch", ml), xo = {
  [he.LTR]: () => import("./rsuite-no-reset.min-c2ac3ca5.js"),
  [he.RTL]: () => import("./rsuite-no-reset-rtl.min-a25850c9.js"),
  common: () => import("./formengine-rsuite-f53f99c6.js")
}, gl = async (e) => {
  const t = (await xo[e]()).default;
  await Sn(`rsuite-${e}-css`, t, "stylesheet");
  const n = e === he.LTR ? he.RTL : he.LTR;
  ar(`rsuite-${n}-css`);
}, Cl = async () => {
  const e = (await xo.common()).default;
  await Sn("form-engine-css", e, "stylesheet");
}, fl = (e) => {
  const t = y(), { bidi: n } = t.formBuilderLanguage, o = t.componentsLocale ?? nc, i = t.isRTL ? Yt.RTL : Yt.LTR;
  return M(() => {
    gl(n).catch(console.error);
  }, [n]), M(() => {
    Cl().catch(console.error);
  }, []), /* @__PURE__ */ r(p1, { value: i, children: /* @__PURE__ */ r(Hr, { rtl: t.isRTL, locale: o, theme: t.theme, children: e.children }) });
}, vl = b("LocalizationProvider", fl), wl = "optimajet-formbuilder", bl = v.div`
  height: 100%;
`, yl = (e) => {
  const { theme: t } = y();
  return /* @__PURE__ */ r(bl, { className: G(wl, t), children: e.children });
}, xl = b("StylesProvider", yl);
class kl {
  constructor(t, n, o) {
    this.store = t, this.builderStore = n, this.localStorageSynchronizer = o;
  }
  dispose() {
    this.localStorageSynchronizer.dispose(), this.builderStore.dispose(), this.store.dispose();
  }
}
const Ll = (e) => p(() => {
  const { builderRef: t, ...n } = e, o = new dr(new ur(n)), i = new hc(o, e);
  i.changeBuilderMode("builder");
  const s = new il(i);
  return new kl(o, i, s);
}, [e]), Sl = ({ children: e, props: t, builderStore: n, store: o }) => {
  const { builderRef: i, ...s } = t;
  return hl(n), Tr(i, () => n, [n]), M(() => {
    n.activeFormName || (n.activeFormName = t.formName);
  }, [n, t.formName]), M(() => {
    o.formViewerPropsStore.applyProps(s);
  }, [
    t.initialData,
    t.view,
    t.validators,
    t.formValidators,
    t.localize,
    t.language,
    t.actions,
    t.errorWrapper
  ]), M(() => {
    var a;
    (a = t.onFormSchemaChange) == null || a.call(t, n.formAsString);
  }, [n.formAsString, t]), M(() => {
    t.theme && (n.theme = io(t.theme));
  }, [n, t.theme]), /* @__PURE__ */ r(Mn, { value: s, children: /* @__PURE__ */ r(ri, { value: n, children: /* @__PURE__ */ r(cr, { value: o, children: /* @__PURE__ */ r(vl, { children: /* @__PURE__ */ r(xl, { children: /* @__PURE__ */ r(qn, { value: "auto", children: /* @__PURE__ */ m(B1, { backend: D1, children: [
    e,
    /* @__PURE__ */ r(al, {})
  ] }) }) }) }) }) }) });
}, Ml = b("Providers", Sl), El = (e) => {
  const t = Ll(e.props), n = lr(t), o = n == null ? void 0 : n.builderStore, i = n == null ? void 0 : n.store;
  return !o || !i ? null : /* @__PURE__ */ r(Ml, { ...e, builderStore: o, store: i });
}, Al = b("BuilderProviders", El);
var Pe = /* @__PURE__ */ ((e) => (e.Component = "Component", e.AddedComponent = "AddedComponent", e))(Pe || {});
const ko = [
  "Component",
  "AddedComponent"
  /* AddedComponent */
], Lo = (e) => {
  const t = O(), [n, o, i] = I1(() => ({
    type: e,
    item: t,
    collect: (s) => ({ isDragging: s.isDragging() })
  }), []);
  return M(() => {
    i(H1());
  }, [n.isDragging, i]), [n, o];
}, Tl = () => document.getElementById("fb-drag-preview") || document.body, So = ({ children: e }) => $1(/* @__PURE__ */ r(Pl, { children: e }), Tl()), Pl = v.div`
  display: flex;
  width: 136px;
  height: 34px;
  align-items: center;
  overflow: hidden;

  .rs-theme-dark & {
    background-color: #414549;
  }
`, Fl = v.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  min-height: 36px;
  z-index: 12;
  align-items: center;
  justify-content: center;
  outline: 1px solid var(--rs-btn-default-disabled-text);

  &.isActive {
    background-color: rgba(0, 116, 255, 0.15);
    outline: 1px solid blue;
  }

  .selected & {
    outline: none !important;
  }
`, Rl = ({ slot: e, slotCondition: t }) => {
  const n = y(), o = O();
  return /* @__PURE__ */ r(F, { children: /* @__PURE__ */ r(
    U,
    {
      onClick: () => {
        n.showComponentsModal((s) => {
          n.add(s, o, "inner", e, t);
        });
      },
      icon: /* @__PURE__ */ r(He, {}),
      color: "green",
      appearance: "primary",
      circle: !0,
      size: "xs"
    }
  ) });
}, Vl = we(({ slot: e, slotCondition: t, className: n }, o) => /* @__PURE__ */ r(Fl, { className: n, ref: o, children: /* @__PURE__ */ r(Rl, { slot: e, slotCondition: t }) })), zl = v.div`
  position: absolute;
  top: -6px;
  height: 2px;
  width: 100%;
  inset-inline-start: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .isTree & {
    top: 0;
  }

  &.isAfter {
    top: initial;
    bottom: -6px;

    .isTree & {
      bottom: 0;
    }
  }

  .horizontal.isContainer > * > & {
    inset-block: 0;
    inset-inline-start: -6px;
    inset-inline-end: initial;
    height: 100%;
    width: 2px;

    &.isAfter {
      inset-inline-start: initial;
      inset-inline-end: -6px;
    }
  }

  &.isActive {
    opacity: 1;
    background-color: blue;

    .isInner & {
      background-color: rgba(0, 116, 255, 0.15);
      outline: 1px solid blue;
    }
  }
`, Bl = ({ isAfter: e, isInner: t, ...n }) => {
  const o = O(), { store: i, isRoot: s } = o, a = !!i.children, c = s || t, [{ isActive: l, isOver: d }, u] = Il(e, c, n.slot, n.slotCondition), h = G({ isAfter: e, isActive: l, isContainer: a, isRoot: s, isInner: t, isOver: d }), C = u;
  return /* @__PURE__ */ m(F, { children: [
    c ? /* @__PURE__ */ r(Vl, { ref: C, className: h, ...n }) : /* @__PURE__ */ r(Dl, { ref: C, className: h }),
    !c && /* @__PURE__ */ r(zl, { className: h })
  ] });
}, Il = (e, t, n, o) => {
  const i = y(), s = O(), a = t ? "inner" : e ? "after" : "before", [{ isActive: c, isOver: l }, d] = Un({
    accept: ko,
    drop: (u, h) => {
      switch (h.getItemType()) {
        case Pe.AddedComponent:
          i.add(u, s, a, n, o);
          break;
        case Pe.Component:
          i.selected.size > 1 ? i.multipleMove(s, a, n, o) : i.move(u, s, a, n, o);
          break;
      }
    },
    collect: (u) => ({
      isOver: u.isOver(),
      isActive: u.isOver() && u.canDrop()
    })
  });
  return [{ isActive: c, isOver: l }, d];
}, Dl = v.div`
  position: absolute;
  top: -5px;
  inset-inline-start: 0;
  height: calc(50% + 5px);
  width: 100%;
  z-index: 10;
  display: flex;

  &.isContainer {
    height: 36px;
    z-index: 9;
  }

  &.isAfter {
    top: initial;
    bottom: -5px;

    &.isRoot {
      position: relative;
      flex: 1;
    }
  }

  .horizontal > * > & {
    top: 0;
    inset-inline-start: -5px;
    height: 100%;
    width: calc(50% + 5px);

    &.isAfter {
      inset-inline-start: initial;
      inset-inline-end: -5px;
    }
  }
`, At = b("DropZone", Bl), Hl = () => {
  var o, i, s, a;
  const { viewMode: e } = y(), { css: t } = O().store, n = ((i = (o = t == null ? void 0 : t[e]) == null ? void 0 : o.object) == null ? void 0 : i.flexDirection) ?? ((a = (s = t == null ? void 0 : t.any) == null ? void 0 : s.object) == null ? void 0 : a.flexDirection) ?? "";
  return ["row", "row-reverse", "initial"].includes(n);
}, $l = ({ children: e, isInner: t, className: n, isTree: o, ...i }) => {
  const { key: s, isRoot: a, model: c, parent: l } = O(), d = c.kind === "container", u = Hl(), h = !o && u, [{ isActive: C, isDragging: f }, w] = Nl(a), { isDragging: x } = lt((q) => ({ isDragging: q.isDragging() })), k = /* @__PURE__ */ r(So, { children: /* @__PURE__ */ r(Ol, { children: s }) }), S = x && !a, B = x && !a && !t, J = E(() => {
    const q = l ? `parent-type-${l == null ? void 0 : l.model.type}` : "", ae = `type-${c.type}`;
    return G(n, { isActive: C, isContainer: d, isRoot: a, isInner: t, isDragging: x, isDraggingCurrent: f, horizontal: h, isTree: o }, q, ae);
  }, [n, h, C, d, x, f, t, a, o, c.type, l]);
  return /* @__PURE__ */ m(F, { children: [
    f && k,
    /* @__PURE__ */ m(Wl, { ref: w, ...i, className: J, children: [
      /* @__PURE__ */ r("label", { className: "containerLabel", children: s }),
      !o && /* @__PURE__ */ r(jl, {}),
      B && /* @__PURE__ */ r(At, {}),
      e,
      S && /* @__PURE__ */ r(At, { isAfter: !t && !0, isInner: t })
    ] })
  ] });
}, Mo = b("Draggable", $l), Nl = (e) => {
  const t = _(null), n = O(), [o, i] = Un({
    accept: ko,
    canDrop: (l) => n.store.key !== l.store.key,
    collect: (l) => ({
      isOver: l.isOver(),
      canDrop: l.canDrop(),
      isActive: l.isOver() && l.canDrop()
    })
  }, []), [s, a] = Lo(Pe.Component), c = E(() => ({ ...o, ...s }), [o, s]);
  return e || a(t), i(t), [c, t];
}, jl = v.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 7;
`, Ol = v.label`
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Wl = v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  transition: padding 200ms ease-in-out;

  .containerLabel {
    display: none;
    position: absolute;
    justify-self: center;
    color: var(--rs-primary-300);
    inset: 2px;
    line-height: 13px;

    .rs-theme-dark & {
      color: var(--rs-primary-400);
      opacity: 0.4;
    }
  }

  &.isDraggingCurrent {
    opacity: 0.4;
  }

  &.hovered {
    outline: 2px dashed #3498ff !important;
    cursor: pointer !important;
  }

  &.selected {
    outline: 2px solid #3498ff !important;
    cursor: move !important;
  }

  &:not(.isRoot):not(.isTree) {
    &.isActive.isContainer {
      outline: 1px dashed rgba(0, 116, 255, 0.25);
    }

    &.isDragging.isContainer {
      padding: 20px 10px;
      background-color: rgb(from var(--rs-primary-200) r g b/20%);
      outline: 1px dashed rgba(0, 116, 255, 0.25);

      .rs-theme-dark & {
        background-color: rgb(from var(--rs-primary-600) r g b/10%);
      }

      & > .containerLabel {
        display: initial;
      }
    }

    .horizontal > &.isDragging.isContainer {
      padding: 10px 20px;
    }
  }

  .horizontal > & {
    flex-direction: row;
  }
`, tt = (e) => {
  e.preventDefault(), e.stopPropagation();
}, gt = () => {
  const e = y(), t = O(), { isDragging: n } = lt((u) => ({ isDragging: u.isDragging() })), [o, i] = A(!1), s = e.selected.has(t), a = p((u) => {
    tt(u), e.selectNode(t, u.ctrlKey || u.shiftKey);
  }, [t, e]), c = p((u) => {
    tt(u), i(!0);
  }, []), l = p(() => {
    i(!1);
  }, []);
  M(() => {
    n || i(!1);
  }, [n]);
  const d = E(() => G({
    hovered: o && !s && !n,
    selected: s && !n
  }), [o, s, n]);
  return [{ hovered: o, selected: s }, { onClick: a, onMouseOver: c, onMouseOut: l }, d];
}, Zl = () => {
  const e = y(), t = O(), n = T("componentToolbar"), o = _(null), i = (a) => {
    var c;
    (c = o.current) == null || c.close(), e.showComponentsModal((l) => {
      e.add(l, t, a);
    });
  }, s = /* @__PURE__ */ r(_l, { arrow: !1, children: /* @__PURE__ */ m(Jl, { children: [
    /* @__PURE__ */ r(Kl, { children: n("add") }),
    /* @__PURE__ */ m(ie, { vertical: !0, children: [
      /* @__PURE__ */ r(
        U,
        {
          onClick: () => i("before"),
          icon: /* @__PURE__ */ r(t1, {}),
          size: "xs",
          appearance: "primary",
          children: n("before")
        }
      ),
      /* @__PURE__ */ r(
        U,
        {
          onClick: () => i("after"),
          icon: /* @__PURE__ */ r(n1, {}),
          size: "xs",
          appearance: "primary",
          children: n("after")
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ r(F, { children: /* @__PURE__ */ r(me, { placement: e.isRTL ? "right" : "left", speaker: s, ref: o, enterable: !0, trigger: "hover", children: /* @__PURE__ */ r(He, { className: "add-button" }) }) });
}, Ul = b("AddButton", Zl), _l = v(Bt)`
  transform: translateX(24px) !important;
  padding: 8px !important;
  border-radius: 14px !important;
`, Jl = v.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`, Kl = v.p`
  width: 48px;
  font-weight: bolder;
  line-height: 1.9;
  text-align: center;
  margin-inline-start: 8px;
  color: var(--rs-text-primary);
`, Gl = ({ compact: e }) => {
  const t = y(), n = O(), [{ selected: o }] = gt(), i = _(null), s = T("toolbar"), a = p((d) => {
    tt(d), t.clone(n);
  }, [n, t]), c = p((d) => {
    tt(d), t.remove(n);
  }, [n, t]);
  M(() => {
    !e && o && i.current && _n(i.current, { scrollMode: "if-needed" });
  }, [o, e]);
  const l = E(() => {
    var h;
    const d = n.parent ? `parent-type-${(h = n.parent) == null ? void 0 : h.model.type}` : "", u = `type-${n.model.type}`;
    return G({ compact: e }, "Toolbar", d, u);
  }, [e, n.model.type, n.parent]);
  return /* @__PURE__ */ m(ql, { ref: i, className: l, children: [
    !e && /* @__PURE__ */ m(Xl, { children: [
      n.store.key,
      /* @__PURE__ */ r("label", { children: ` (${n.store.type})` })
    ] }),
    /* @__PURE__ */ r(Ul, {}),
    !n.isRoot && /* @__PURE__ */ m(F, { children: [
      /* @__PURE__ */ r(ve, { hint: s("cloneComponent"), placement: "autoVertical", children: /* @__PURE__ */ r(D, { onClick: a, icon: N1, className: "clone-button" }) }),
      /* @__PURE__ */ r(ve, { hint: s("removeComponent"), placement: "autoVertical", children: /* @__PURE__ */ r(D, { onClick: c, icon: j1, className: "remove-button" }) })
    ] })
  ] });
}, Eo = b("Toolbar", Gl), ql = v.div`
  inset: initial;
  right: 5px;
  top: -13px;

  &.compact {
    top: 8px;
  }

  position: absolute;
  z-index: 11;
  color: var(--rs-btn-ghost-text);
  cursor: pointer !important;
  white-space: nowrap;
  border-radius: 5px;
  height: 20px;
  width: fit-content;
  padding-inline: 5px;
  font-weight: 400;
  font-size: 14px;
  background-color: white;

  .rs-theme-dark & {
    background-color: #3b3f43;
  }

  display: flex;
  gap: 5px;
  align-items: center;

  & > .rs-icon {
    cursor: pointer;
  }
`, Xl = v.label`
  display: inline;
  cursor: move;
`, Cn = {
  fontSize: "small",
  marginTop: "0",
  marginLeft: 20
}, Yl = (e) => {
  var n, o, i;
  const t = O();
  return /* @__PURE__ */ m("div", { children: [
    /* @__PURE__ */ m("p", { children: [
      "Component ",
      /* @__PURE__ */ r("code", { children: t.key }),
      " render error: "
    ] }),
    /* @__PURE__ */ m("p", { children: [
      /* @__PURE__ */ m("strong", { children: [
        (n = e.error) == null ? void 0 : n.message,
        ":"
      ] }),
      /* @__PURE__ */ r("pre", { style: Cn, children: (o = e.error) == null ? void 0 : o.stack })
    ] }),
    /* @__PURE__ */ m("p", { children: [
      /* @__PURE__ */ r("strong", { children: "Component stack" }),
      ":",
      /* @__PURE__ */ r("pre", { style: Cn, children: (i = e.info) == null ? void 0 : i.componentStack })
    ] })
  ] });
}, Ql = b("ComponentRenderError", Yl);
class e2 extends Pr {
  constructor() {
    super(...arguments);
    L(this, "state", { hasError: !1 });
  }
  /**
   * React method for catching errors.
   * @param error the error that was thrown.
   * @returns the component state.
   */
  static getDerivedStateFromError(n) {
    return { hasError: !0, error: n };
  }
  /**
   * @inheritDoc
   */
  componentDidCatch(n, o) {
    this.setState({ hasError: !0, error: n, info: o });
  }
  /**
   * @inheritDoc
   */
  render() {
    return this.state.hasError ? /* @__PURE__ */ r(Ql, { error: this.state.error, info: this.state.info }) : this.props.children;
  }
}
const Ao = "children";
function fn(e) {
  return e.slot ?? Ao;
}
function t2(e, t, n) {
  var C;
  const o = t.children, i = {}, a = e.getComponentMetadata(t.model.type).properties.filter(mr), c = s2(t);
  a.push(...c);
  const l = ((C = t.store.children) == null ? void 0 : C.filter((f) => Qt(f, n)).map(fn)) ?? [], d = a.filter((f) => !l.includes(f.key)), u = pr(o, (f) => fn(f.store)), h = (f) => Qt(f.store, n);
  for (const [f, w] of Object.entries(u)) {
    const x = w.filter(h);
    x.length && (i[f] = t.model.propsBindingTypes[f] === "array" ? x.map((k, S) => /* @__PURE__ */ r(Xe, { data: [k] }, S)) : /* @__PURE__ */ r(Xe, { data: x }));
  }
  return d.forEach((f) => {
    var q;
    const w = e.viewer, x = t.dataRootProvider ?? w.dataContext, k = w.localizeComponent.bind(w, "component", x.dataRoot), S = new gr(t, w, k, () => ({}), {}), B = (q = f == null ? void 0 : f.slotConditionBuilder) == null ? void 0 : q.call(f, S.propsWithoutChildren), J = f.key === Ao ? void 0 : f.key;
    i[f.key] = /* @__PURE__ */ r(At, { isInner: !0, slot: J, slotCondition: B });
  }), i;
}
const n2 = ({ children: e, ...t }) => {
  const o = $().parentStore ? hr : i2;
  return /* @__PURE__ */ r(o, { children: e, ...t });
}, o2 = b("EditableWrapper", n2), r2 = ({ children: e, className: t }) => {
  const [{ selected: n }, o, i] = gt(), { isDragging: s } = lt((c) => ({ isDragging: c.isDragging() })), a = n && !s && /* @__PURE__ */ r(Eo, {});
  return /* @__PURE__ */ r(e2, { children: /* @__PURE__ */ m(Mo, { ...o, className: G(i, t), children: [
    e,
    a
  ] }) });
}, i2 = b("Editable", r2);
function s2(e) {
  var o;
  if (!(e.field instanceof Cr))
    return [];
  const t = (o = e.field.viewerStore.form.componentTree.store.children) == null ? void 0 : o.filter((i) => i.type === fr.type), n = t == null ? void 0 : t.reduce((i, s) => (i[s.key] = vr, i), {});
  return wr(n);
}
const a2 = ({ className: e }) => {
  var x;
  const t = O(), { expanded: n, viewer: o } = y(), [i, s] = A(!1), [{ selected: a }] = gt(), c = _(null), l = p(
    () => br(o.form.componentTree, t) || 0,
    [t, o.form.componentTree]
  ), d = Wt(l), u = n.has(t), h = p(() => {
    n.has(t) ? n.delete(t) : n.add(t);
  }, [t, n]), C = p(() => s(!0), []), f = p(() => s(!1), []);
  M(() => {
    a && c.current && _n(c.current, { scrollMode: "if-needed" });
  }, [a]);
  const w = (((x = t.store.children) == null ? void 0 : x.length) ?? 0) > 0;
  return /* @__PURE__ */ m(F, { children: [
    /* @__PURE__ */ m(
      d2,
      {
        className: e,
        ref: c,
        onMouseEnter: C,
        onMouseLeave: f,
        children: [
          /* @__PURE__ */ r(l2, { depth: d, children: w && /* @__PURE__ */ r(Dt, { onClick: h, as: u ? ct : o1, style: { cursor: "pointer" } }) }),
          /* @__PURE__ */ r("div", { children: t.key }),
          /* @__PURE__ */ r("label", { children: t.model.name }),
          i && /* @__PURE__ */ r(Eo, { compact: !0 })
        ]
      }
    ),
    u && t.children && /* @__PURE__ */ r(Xe, { data: t.children })
  ] });
}, c2 = b("TreeNode", a2), l2 = v.div`
  min-width: ${({ depth: e }) => 14 * (e + 1) + 14}px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-inline-end: 4px;
`, d2 = v.div`
  display: flex;
  flex: 1;
  justify-content: start;
  flex-direction: row;
  padding-block: 8px;
  padding-right: 8px;

  label {
    opacity: 0.4;
    margin-left: 6px;
  }

  &.hovered {
    background-color: var(--rs-listbox-option-selected-bg);
    cursor: pointer !important;
  }

  &.selected {
    background-color: var(--rs-listbox-option-selected-bg);
    color: var(--rs-listbox-option-selected-text);
  }
`, u2 = () => {
  const [e, t, n] = gt();
  return /* @__PURE__ */ r(Mo, { ...t, isTree: !0, style: { width: "100%" }, children: /* @__PURE__ */ r(c2, { className: n }) });
}, h2 = b("DraggableTreeNode", u2), m2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.7516 18.3516C2.63699 18.4623 2.54557 18.5947 2.48268 18.7411C2.41979 18.8875 2.38668 19.045 2.3853 19.2043C2.38391 19.3637 2.41428 19.5217 2.47461 19.6691C2.53495 19.8166 2.62405 19.9506 2.73673 20.0633C2.8494 20.1759 2.98338 20.265 3.13085 20.3254C3.27833 20.3857 3.43635 20.4161 3.59568 20.4147C3.75502 20.4133 3.91248 20.3802 4.05889 20.3173C4.20529 20.2544 4.3377 20.163 4.4484 20.0484L11.6484 12.8484C11.8734 12.6234 11.9997 12.3182 11.9997 12C11.9997 11.6818 11.8734 11.3766 11.6484 11.1516L4.4484 3.9516C4.22208 3.73301 3.91895 3.61205 3.60432 3.61479C3.28968 3.61752 2.98871 3.74372 2.76622 3.96621C2.54373 4.1887 2.41753 4.48968 2.41479 4.80432C2.41206 5.11895 2.53301 5.42207 2.7516 5.6484L9.1032 12L2.7516 18.3516ZM12.3516 18.3516C12.237 18.4623 12.1456 18.5947 12.0827 18.7411C12.0198 18.8875 11.9867 19.045 11.9853 19.2043C11.9839 19.3637 12.0143 19.5217 12.0746 19.6691C12.135 19.8166 12.2241 19.9506 12.3367 20.0633C12.4494 20.1759 12.5834 20.265 12.7309 20.3254C12.8783 20.3857 13.0363 20.4161 13.1957 20.4147C13.355 20.4133 13.5125 20.3802 13.6589 20.3173C13.8053 20.2544 13.9377 20.163 14.0484 20.0484L21.2484 12.8484C21.4734 12.6234 21.5997 12.3182 21.5997 12C21.5997 11.6818 21.4734 11.3766 21.2484 11.1516L14.0484 3.9516C13.9377 3.83698 13.8053 3.74557 13.6589 3.68268C13.5125 3.61978 13.355 3.58668 13.1957 3.5853C13.0363 3.58391 12.8783 3.61427 12.7309 3.67461C12.5834 3.73495 12.4494 3.82405 12.3367 3.93672C12.2241 4.04939 12.135 4.18338 12.0746 4.33085C12.0143 4.47833 11.9839 4.63634 11.9853 4.79568C11.9867 4.95501 12.0198 5.11248 12.0827 5.25888C12.1456 5.40529 12.237 5.5377 12.3516 5.6484L18.7032 12L12.3516 18.3516Z", fill: "#9CA3AF" })), p2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M11 15L13.7158 12.2842C13.8728 12.1272 13.8728 11.8728 13.7158 11.7158L11 9", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ g.createElement("path", { d: "M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z", stroke: "#9CA3AF", strokeWidth: 2 })), g2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M3 6H3.01919M3.01919 6H20.9809M3.01919 6C3 6.31438 3 6.70191 3 7.2002V16.8002C3 17.9203 3 18.4796 3.21799 18.9074C3.40973 19.2837 3.71547 19.5905 4.0918 19.7822C4.51921 20 5.079 20 6.19694 20H17.8031C18.921 20 19.48 20 19.9074 19.7822C20.2837 19.5905 20.5905 19.2837 20.7822 18.9074C21 18.48 21 17.921 21 16.8031V7.19691C21 6.70021 21 6.31368 20.9809 6M3.01919 6C3.04314 5.60768 3.09697 5.3293 3.21799 5.0918C3.40973 4.71547 3.71547 4.40973 4.0918 4.21799C4.51962 4 5.08009 4 6.2002 4H17.8002C18.9203 4 19.4796 4 19.9074 4.21799C20.2837 4.40973 20.5905 4.71547 20.7822 5.0918C20.9032 5.3293 20.957 5.60768 20.9809 6M20.9809 6H21", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), C2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M8 12L11 15L16 9M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), f2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M4 8L12 4L20 8L12 12L4 8Z", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ g.createElement("path", { d: "M4 12L12 16L20 12", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ g.createElement("path", { d: "M4 16L12 20L20 16", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), v2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z", stroke: "#9CA3AF", strokeWidth: 2 }), /* @__PURE__ */ g.createElement("path", { d: "M12 3V21", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ g.createElement("path", { d: "M21 12H12", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), w2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M20 18H4M20 14H4M20 10H4M20 6H4", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), b2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M11.9995 12.0001H12.0095M15.535 15.5357C10.8488 20.222 5.46685 22.438 3.51423 20.4854C1.56161 18.5328 3.77769 13.1509 8.46398 8.46461C13.1503 3.77832 18.5322 1.56224 20.4848 3.51486C22.4374 5.46748 20.2213 10.8494 15.535 15.5357ZM15.535 8.46443C20.2213 13.1507 22.4374 18.5326 20.4848 20.4852C18.5321 22.4379 13.1502 20.2218 8.46394 15.5355C3.77765 10.8492 1.56157 5.4673 3.51419 3.51468C5.46681 1.56206 10.8487 3.77814 15.535 8.46443ZM12.4995 12.0001C12.4995 12.2763 12.2757 12.5001 11.9995 12.5001C11.7234 12.5001 11.4995 12.2763 11.4995 12.0001C11.4995 11.724 11.7234 11.5001 11.9995 11.5001C12.2757 11.5001 12.4995 11.724 12.4995 12.0001Z", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), y2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), x2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 25, viewBox: "0 0 24 25", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.17969 21.9172H18.8672C20.0297 21.9172 20.9766 20.9704 20.9766 19.8079V6.8938C20.9766 5.7313 20.0297 4.78442 18.8672 4.78442H16.6875V4.43286C16.6875 4.0438 16.3734 3.72974 15.9844 3.72974C15.5953 3.72974 15.2812 4.0438 15.2812 4.43286V4.78442H9.11719V4.43286C9.11719 4.0438 8.80313 3.72974 8.41406 3.72974C8.025 3.72974 7.71094 4.0438 7.71094 4.43286V4.78442H5.17969C4.01719 4.78442 3.07031 5.7313 3.07031 6.8938V19.8079C3.07031 20.9704 4.01719 21.9172 5.17969 21.9172ZM19.5703 19.8079C19.5703 20.1946 19.2539 20.511 18.8672 20.511H5.17969C4.79297 20.511 4.47656 20.1946 4.47656 19.8079L4.5 11.5C4.5 11.1591 4.74836 10.8 5.16467 10.8H18.9C19.2074 10.8 19.5703 11.194 19.5703 11.5V19.8079ZM19.5703 6.8938C19.5703 6.50708 19.2539 6.19067 18.8672 6.19067H16.6875V6.56567C16.6875 6.95474 16.3734 7.2688 15.9844 7.2688C15.5953 7.2688 15.2812 6.95474 15.2812 6.56567V6.19067H9.11719V6.56567C9.11719 6.95474 8.80313 7.2688 8.41406 7.2688C8.025 7.2688 7.71094 6.95474 7.71094 6.56567V6.19067H5.17969C4.79297 6.19067 4.47656 6.50708 4.47656 6.8938L4.5 8.78248C4.5 8.78248 4.52344 9.5 5.16467 9.5H18.9C19.2667 9.5 19.5938 9.16232 19.5938 8.77633L19.5703 6.8938Z", fill: "#9CA3AF" }), /* @__PURE__ */ g.createElement("path", { d: "M19.5703 6.8938C19.5703 6.50708 19.2539 6.19067 18.8672 6.19067H16.6875V6.56567C16.6875 6.95474 16.3734 7.2688 15.9844 7.2688C15.5953 7.2688 15.2812 6.95474 15.2812 6.56567V6.19067H9.11719V6.56567C9.11719 6.95474 8.80313 7.2688 8.41406 7.2688C8.025 7.2688 7.71094 6.95474 7.71094 6.56567V6.19067H5.17969C4.79297 6.19067 4.47656 6.50708 4.47656 6.8938M19.5703 6.8938C19.5703 6.8938 19.5938 8.39034 19.5938 8.77633M19.5703 6.8938L19.5938 8.77633M4.47656 19.8079C4.47656 20.1946 4.79297 20.511 5.17969 20.511H18.8672C19.2539 20.511 19.5703 20.1946 19.5703 19.8079V11.5C19.5703 11.194 19.2074 10.8 18.9 10.8M4.47656 19.8079C4.47656 16.0675 4.5 15.2404 4.5 11.5M4.47656 19.8079C4.47656 16.0439 4.5 11.5 4.5 11.5M4.47656 19.8079C4.47656 16.2901 4.5 11.5 4.5 11.5M4.47656 19.8079L4.5 11.5M4.47656 6.8938L4.5 8.78248M4.47656 6.8938C4.47656 7.3248 4.5 8.78248 4.5 8.78248M18.9 10.8C13.4327 10.8 9.42239 10.8 5.16467 10.8M18.9 10.8H5.16467M4.5 11.5C4.5 11.1591 4.74836 10.8 5.16467 10.8M18.9 9.5C19.2667 9.5 19.5938 9.16232 19.5938 8.77633M18.9 9.5C18.5815 9.5 5.80591 9.5 5.16467 9.5M18.9 9.5H5.16467M5.16467 9.5C4.52344 9.5 4.5 8.78248 4.5 8.78248M5.17969 21.9172H18.8672C20.0297 21.9172 20.9766 20.9704 20.9766 19.8079V6.8938C20.9766 5.7313 20.0297 4.78442 18.8672 4.78442H16.6875V4.43286C16.6875 4.0438 16.3734 3.72974 15.9844 3.72974C15.5953 3.72974 15.2812 4.0438 15.2812 4.43286V4.78442H9.11719V4.43286C9.11719 4.0438 8.80313 3.72974 8.41406 3.72974C8.025 3.72974 7.71094 4.0438 7.71094 4.43286V4.78442H5.17969C4.01719 4.78442 3.07031 5.7313 3.07031 6.8938V19.8079C3.07031 20.9704 4.01719 21.9172 5.17969 21.9172Z", stroke: "#9CA3AF", strokeWidth: 0.3, strokeLinejoin: "round" }), /* @__PURE__ */ g.createElement("path", { d: "M6 13.3C6 12.8582 6.35817 12.5 6.8 12.5H8.2C8.64183 12.5 9 12.8582 9 13.3V14.7C9 15.1418 8.64183 15.5 8.2 15.5H6.8C6.35817 15.5 6 15.1418 6 14.7V13.3Z", fill: "#9CA3AF" }), /* @__PURE__ */ g.createElement("path", { d: "M10.5 13.3C10.5 12.8582 10.8582 12.5 11.3 12.5H12.7C13.1418 12.5 13.5 12.8582 13.5 13.3V14.7C13.5 15.1418 13.1418 15.5 12.7 15.5H11.3C10.8582 15.5 10.5 15.1418 10.5 14.7V13.3Z", fill: "#9CA3AF" }), /* @__PURE__ */ g.createElement("path", { d: "M15 13.3C15 12.8582 15.3582 12.5 15.8 12.5H17.2C17.6418 12.5 18 12.8582 18 13.3V14.7C18 15.1418 17.6418 15.5 17.2 15.5H15.8C15.3582 15.5 15 15.1418 15 14.7V13.3Z", fill: "#9CA3AF" })), k2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M15 7L20 12L15 17M9 17L4 12L9 7", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), L2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M16 10L12 14L8 10", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), S2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M10.5 2.0028C9.82495 2.01194 9.4197 2.05103 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8.05103 3.4197 8.01194 3.82495 8.0028 4.5M19.5 2.0028C20.1751 2.01194 20.5803 2.05103 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C21.949 3.4197 21.9881 3.82494 21.9972 4.49999M21.9972 13.5C21.9881 14.175 21.949 14.5803 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.5803 15.949 20.1751 15.9881 19.5 15.9972M22 7.99999V9.99999M14.0001 2H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), M2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M12 9.00006V13.0001M4.37891 15.1999C3.46947 16.775 3.01489 17.5629 3.08281 18.2092C3.14206 18.7729 3.43792 19.2851 3.89648 19.6182C4.42204 20.0001 5.3309 20.0001 7.14853 20.0001H16.8515C18.6691 20.0001 19.5778 20.0001 20.1034 19.6182C20.5619 19.2851 20.8579 18.7729 20.9172 18.2092C20.9851 17.5629 20.5307 16.775 19.6212 15.1999L14.7715 6.79986C13.8621 5.22468 13.4071 4.43722 12.8135 4.17291C12.2957 3.94236 11.704 3.94236 11.1862 4.17291C10.5928 4.43711 10.1381 5.22458 9.22946 6.79845L4.37891 15.1999ZM12.0508 16.0001V16.1001L11.9502 16.1003V16.0001H12.0508Z", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), E2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M20 15H4M20 15V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2837 4.40973 18.9074 4.21799C18.4796 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V15M20 15V16.8031C20 17.921 20 18.48 19.7822 18.9074C19.5905 19.2837 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2837 4.21799 18.9074C4 18.4796 4 17.9203 4 16.8002V15", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), A2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M14 17.5C14 16.0955 14 15.3933 14.3371 14.8889C14.483 14.6705 14.6705 14.483 14.8889 14.3371C15.3933 14 16.0955 14 17.5 14C18.9045 14 19.6067 14 20.1111 14.3371C20.3295 14.483 20.517 14.6705 20.6629 14.8889C21 15.3933 21 16.0955 21 17.5C21 18.9045 21 19.6067 20.6629 20.1111C20.517 20.3295 20.3295 20.517 20.1111 20.6629C19.6067 21 18.9045 21 17.5 21C16.0955 21 15.3933 21 14.8889 20.6629C14.6705 20.517 14.483 20.3295 14.3371 20.1111C14 19.6067 14 18.9045 14 17.5Z", stroke: "#9CA3AF", strokeWidth: 2 }), /* @__PURE__ */ g.createElement("path", { d: "M3 17.5C3 16.0955 3 15.3933 3.33706 14.8889C3.48298 14.6705 3.67048 14.483 3.88886 14.3371C4.39331 14 5.09554 14 6.5 14C7.90446 14 8.60669 14 9.11114 14.3371C9.32952 14.483 9.51702 14.6705 9.66294 14.8889C10 15.3933 10 16.0955 10 17.5C10 18.9045 10 19.6067 9.66294 20.1111C9.51702 20.3295 9.32952 20.517 9.11114 20.6629C8.60669 21 7.90446 21 6.5 21C5.09554 21 4.39331 21 3.88886 20.6629C3.67048 20.517 3.48298 20.3295 3.33706 20.1111C3 19.6067 3 18.9045 3 17.5Z", stroke: "#9CA3AF", strokeWidth: 2 }), /* @__PURE__ */ g.createElement("path", { d: "M3 6.5C3 5.09554 3 4.39331 3.33706 3.88886C3.48298 3.67048 3.67048 3.48298 3.88886 3.33706C4.39331 3 5.09554 3 6.5 3C7.90446 3 8.60669 3 9.11114 3.33706C9.32952 3.48298 9.51702 3.67048 9.66294 3.88886C10 4.39331 10 5.09554 10 6.5C10 7.90446 10 8.60669 9.66294 9.11114C9.51702 9.32952 9.32952 9.51702 9.11114 9.66294C8.60669 10 7.90446 10 6.5 10C5.09554 10 4.39331 10 3.88886 9.66294C3.67048 9.51702 3.48298 9.32952 3.33706 9.11114C3 8.60669 3 7.90446 3 6.5Z", stroke: "#9CA3AF", strokeWidth: 2 }), /* @__PURE__ */ g.createElement("path", { d: "M14 6.5H21", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ g.createElement("path", { d: "M17.5 3V10", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), T2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.3783 2C5.3905 2 5.40273 2 5.415 2H7.62171C8.01734 1.99998 8.37336 1.99996 8.66942 2.02454C8.98657 2.05088 9.32336 2.11052 9.65244 2.28147C10.109 2.51866 10.4813 2.89096 10.7185 3.34757C10.8895 3.67665 10.9491 4.01343 10.9755 4.33059C11 4.62664 11 4.98265 11 5.37828V9.62172C11 10.0174 11 10.3734 10.9755 10.6694C10.9491 10.9866 10.8895 11.3234 10.7185 11.6524C10.4813 12.109 10.109 12.4813 9.65244 12.7185C9.32336 12.8895 8.98657 12.9491 8.66942 12.9755C8.37337 13 8.01735 13 7.62172 13H5.37828C4.98265 13 4.62664 13 4.33059 12.9755C4.01344 12.9491 3.67665 12.8895 3.34757 12.7185C2.89096 12.4813 2.51866 12.109 2.28147 11.6524C2.11052 11.3234 2.05088 10.9866 2.02454 10.6694C1.99996 10.3734 1.99998 10.0173 2 9.62171V5.415C2 5.40273 2 5.3905 2 5.3783C1.99998 4.98266 1.99996 4.62664 2.02454 4.33059C2.05088 4.01343 2.11052 3.67665 2.28147 3.34757C2.51866 2.89096 2.89096 2.51866 3.34757 2.28147C3.67665 2.11052 4.01343 2.05088 4.33059 2.02454C4.62664 1.99996 4.98266 1.99998 5.3783 2ZM4.27752 4.05297C4.27226 4.05488 4.26952 4.0563 4.26952 4.0563C4.17819 4.10373 4.10373 4.17819 4.0563 4.26952C4.0563 4.26952 4.05488 4.27226 4.05297 4.27752C4.05098 4.28299 4.04767 4.29312 4.04372 4.30961C4.03541 4.34427 4.02554 4.40145 4.01768 4.49611C4.00081 4.69932 4 4.9711 4 5.415V9.585C4 10.0289 4.00081 10.3007 4.01768 10.5039C4.02554 10.5986 4.03541 10.6557 4.04372 10.6904C4.04767 10.7069 4.05098 10.717 4.05297 10.7225C4.05488 10.7277 4.0563 10.7305 4.0563 10.7305C4.10373 10.8218 4.17819 10.8963 4.26952 10.9437C4.26952 10.9437 4.27226 10.9451 4.27752 10.947C4.28299 10.949 4.29312 10.9523 4.30961 10.9563C4.34427 10.9646 4.40145 10.9745 4.49611 10.9823C4.69932 10.9992 4.9711 11 5.415 11H7.585C8.02891 11 8.30068 10.9992 8.5039 10.9823C8.59855 10.9745 8.65574 10.9646 8.6904 10.9563C8.70688 10.9523 8.71701 10.949 8.72249 10.947C8.72775 10.9451 8.73049 10.9437 8.73049 10.9437C8.82181 10.8963 8.89627 10.8218 8.94371 10.7305C8.94371 10.7305 8.94513 10.7277 8.94704 10.7225C8.94903 10.717 8.95234 10.7069 8.95629 10.6904C8.96459 10.6557 8.97446 10.5986 8.98232 10.5039C8.9992 10.3007 9 10.0289 9 9.585V5.415C9 4.9711 8.9992 4.69932 8.98232 4.49611C8.97446 4.40145 8.96459 4.34427 8.95629 4.30961C8.95234 4.29312 8.94903 4.28299 8.94704 4.27752C8.94513 4.27226 8.94371 4.26952 8.94371 4.26952C8.89627 4.17819 8.82181 4.10373 8.73049 4.0563C8.73049 4.0563 8.72775 4.05488 8.72249 4.05297C8.71701 4.05098 8.70688 4.04767 8.6904 4.04372C8.65574 4.03541 8.59855 4.02554 8.5039 4.01768C8.30068 4.00081 8.02891 4 7.585 4H5.415C4.9711 4 4.69932 4.00081 4.49611 4.01768C4.40145 4.02554 4.34427 4.03541 4.30961 4.04372C4.29312 4.04767 4.28299 4.05098 4.27752 4.05297ZM16.3783 2H18.6217C19.0173 1.99998 19.3734 1.99996 19.6694 2.02454C19.9866 2.05088 20.3234 2.11052 20.6524 2.28147C21.109 2.51866 21.4813 2.89096 21.7185 3.34757C21.8895 3.67665 21.9491 4.01343 21.9755 4.33059C22 4.62665 22 4.98267 22 5.37832V5.62168C22 6.01733 22 6.37336 21.9755 6.66942C21.9491 6.98657 21.8895 7.32336 21.7185 7.65244C21.4813 8.10905 21.109 8.48135 20.6524 8.71854C20.3234 8.88948 19.9866 8.94912 19.6694 8.97546C19.3734 9.00005 19.0173 9.00003 18.6217 9H16.3783C15.9827 9.00003 15.6266 9.00005 15.3306 8.97546C15.0134 8.94912 14.6766 8.88948 14.3476 8.71854C13.891 8.48135 13.5187 8.10905 13.2815 7.65244C13.1105 7.32336 13.0509 6.98657 13.0245 6.66942C13 6.37337 13 6.01735 13 5.62172V5.37828C13 4.98265 13 4.62664 13.0245 4.33059C13.0509 4.01344 13.1105 3.67665 13.2815 3.34757C13.5187 2.89096 13.891 2.51866 14.3476 2.28147C14.6766 2.11052 15.0134 2.05088 15.3306 2.02454C15.6266 1.99996 15.9827 1.99998 16.3783 2ZM15.2775 4.05297C15.2723 4.05488 15.2695 4.0563 15.2695 4.0563C15.1782 4.10373 15.1037 4.17819 15.0563 4.26952C15.0563 4.26952 15.0549 4.27226 15.053 4.27752C15.051 4.28299 15.0477 4.29312 15.0437 4.30961C15.0354 4.34427 15.0255 4.40145 15.0177 4.49611C15.0008 4.69932 15 4.9711 15 5.415V5.585C15 6.02891 15.0008 6.30068 15.0177 6.5039C15.0255 6.59855 15.0354 6.65574 15.0437 6.6904C15.0477 6.70688 15.051 6.71701 15.053 6.72249C15.0549 6.72775 15.0563 6.73049 15.0563 6.73049C15.1037 6.82181 15.1782 6.89627 15.2695 6.94371C15.2695 6.94371 15.2723 6.94512 15.2775 6.94704C15.283 6.94903 15.2931 6.95234 15.3096 6.95629C15.3443 6.96459 15.4015 6.97446 15.4961 6.98232C15.6993 6.9992 15.9711 7 16.415 7H18.585C19.0289 7 19.3007 6.9992 19.5039 6.98232C19.5986 6.97446 19.6557 6.96459 19.6904 6.95629C19.7069 6.95234 19.717 6.94903 19.7225 6.94704C19.7277 6.94512 19.7305 6.94371 19.7305 6.94371C19.8218 6.89627 19.8963 6.82181 19.9437 6.73049C19.9437 6.73049 19.9451 6.72775 19.947 6.72249C19.949 6.71701 19.9523 6.70688 19.9563 6.6904C19.9646 6.65573 19.9745 6.59855 19.9823 6.5039C19.9992 6.30068 20 6.02891 20 5.585V5.415C20 4.9711 19.9992 4.69932 19.9823 4.49611C19.9745 4.40145 19.9646 4.34427 19.9563 4.30961C19.9523 4.29312 19.949 4.28299 19.947 4.27752C19.9451 4.27226 19.9437 4.26952 19.9437 4.26952C19.8963 4.17819 19.8218 4.10373 19.7305 4.0563C19.7305 4.0563 19.7277 4.05488 19.7225 4.05297C19.717 4.05098 19.7069 4.04767 19.6904 4.04372C19.6557 4.03541 19.5986 4.02554 19.5039 4.01768C19.3007 4.00081 19.0289 4 18.585 4H16.415C15.9711 4 15.6993 4.00081 15.4961 4.01768C15.4015 4.02554 15.3443 4.03541 15.3096 4.04372C15.2931 4.04767 15.283 4.05098 15.2775 4.05297ZM16.3783 11H18.6217C19.0173 11 19.3734 11 19.6694 11.0245C19.9866 11.0509 20.3234 11.1105 20.6524 11.2815C21.109 11.5187 21.4813 11.891 21.7185 12.3476C21.8895 12.6766 21.9491 13.0134 21.9755 13.3306C22 13.6266 22 13.9827 22 14.3783V18.6217C22 19.0173 22 19.3734 21.9755 19.6694C21.9491 19.9866 21.8895 20.3234 21.7185 20.6524C21.4813 21.109 21.109 21.4813 20.6524 21.7185C20.3234 21.8895 19.9866 21.9491 19.6694 21.9755C19.3734 22 19.0173 22 18.6217 22H16.3783C15.9827 22 15.6266 22 15.3306 21.9755C15.0134 21.9491 14.6766 21.8895 14.3476 21.7185C13.891 21.4813 13.5187 21.109 13.2815 20.6524C13.1105 20.3234 13.0509 19.9866 13.0245 19.6694C13 19.3734 13 19.0174 13 18.6217V14.3783C13 13.9827 13 13.6266 13.0245 13.3306C13.0509 13.0134 13.1105 12.6766 13.2815 12.3476C13.5187 11.891 13.891 11.5187 14.3476 11.2815C14.6766 11.1105 15.0134 11.0509 15.3306 11.0245C15.6266 11 15.9827 11 16.3783 11ZM15.2775 13.053C15.2723 13.0549 15.2695 13.0563 15.2695 13.0563C15.1782 13.1037 15.1037 13.1782 15.0563 13.2695C15.0563 13.2695 15.0549 13.2723 15.053 13.2775C15.051 13.283 15.0477 13.2931 15.0437 13.3096C15.0354 13.3443 15.0255 13.4015 15.0177 13.4961C15.0008 13.6993 15 13.9711 15 14.415V18.585C15 19.0289 15.0008 19.3007 15.0177 19.5039C15.0255 19.5986 15.0354 19.6557 15.0437 19.6904C15.0477 19.7069 15.051 19.717 15.053 19.7225C15.0549 19.7277 15.0563 19.7305 15.0563 19.7305C15.1037 19.8218 15.1782 19.8963 15.2695 19.9437C15.2695 19.9437 15.2723 19.9451 15.2775 19.947C15.283 19.949 15.2931 19.9523 15.3096 19.9563C15.3443 19.9646 15.4015 19.9745 15.4961 19.9823C15.6993 19.9992 15.9711 20 16.415 20H18.585C19.0289 20 19.3007 19.9992 19.5039 19.9823C19.5986 19.9745 19.6557 19.9646 19.6904 19.9563C19.7069 19.9523 19.717 19.949 19.7225 19.947C19.7277 19.9451 19.7305 19.9437 19.7305 19.9437C19.8218 19.8963 19.8963 19.8218 19.9437 19.7305C19.9437 19.7305 19.9451 19.7277 19.947 19.7225C19.949 19.717 19.9523 19.7069 19.9563 19.6904C19.9646 19.6557 19.9745 19.5986 19.9823 19.5039C19.9992 19.3007 20 19.0289 20 18.585V14.415C20 13.9711 19.9992 13.6993 19.9823 13.4961C19.9745 13.4015 19.9646 13.3443 19.9563 13.3096C19.9523 13.2931 19.949 13.283 19.947 13.2775C19.9451 13.2723 19.9437 13.2695 19.9437 13.2695C19.8963 13.1782 19.8218 13.1037 19.7305 13.0563C19.7305 13.0563 19.7277 13.0549 19.7225 13.053C19.717 13.051 19.7069 13.0477 19.6904 13.0437C19.6557 13.0354 19.5986 13.0255 19.5039 13.0177C19.3007 13.0008 19.0289 13 18.585 13H16.415C15.9711 13 15.6993 13.0008 15.4961 13.0177C15.4015 13.0255 15.3443 13.0354 15.3096 13.0437C15.2931 13.0477 15.283 13.051 15.2775 13.053ZM5.37828 15H7.62172C8.01735 15 8.37337 15 8.66942 15.0245C8.98657 15.0509 9.32336 15.1105 9.65244 15.2815C10.109 15.5187 10.4813 15.891 10.7185 16.3476C10.8895 16.6766 10.9491 17.0134 10.9755 17.3306C11 17.6266 11 17.9827 11 18.3783V18.6217C11 19.0174 11 19.3734 10.9755 19.6694C10.9491 19.9866 10.8895 20.3234 10.7185 20.6524C10.4813 21.109 10.109 21.4813 9.65244 21.7185C9.32336 21.8895 8.98657 21.9491 8.66942 21.9755C8.37336 22 8.01733 22 7.62168 22H5.37832C4.98267 22 4.62665 22 4.33059 21.9755C4.01343 21.9491 3.67665 21.8895 3.34757 21.7185C2.89096 21.4813 2.51866 21.109 2.28147 20.6524C2.11052 20.3234 2.05088 19.9866 2.02454 19.6694C1.99996 19.3734 1.99998 19.0173 2 18.6217V18.3783C1.99998 17.9827 1.99996 17.6266 2.02454 17.3306C2.05088 17.0134 2.11052 16.6766 2.28147 16.3476C2.51866 15.891 2.89096 15.5187 3.34757 15.2815C3.67665 15.1105 4.01344 15.0509 4.33059 15.0245C4.62664 15 4.98265 15 5.37828 15ZM4.27752 17.053C4.27226 17.0549 4.26952 17.0563 4.26952 17.0563C4.17819 17.1037 4.10373 17.1782 4.0563 17.2695C4.0563 17.2695 4.05488 17.2723 4.05297 17.2775C4.05098 17.283 4.04767 17.2931 4.04372 17.3096C4.03541 17.3443 4.02554 17.4015 4.01768 17.4961C4.00081 17.6993 4 17.9711 4 18.415V18.585C4 19.0289 4.00081 19.3007 4.01768 19.5039C4.02554 19.5986 4.03541 19.6557 4.04372 19.6904C4.04767 19.7069 4.05098 19.717 4.05297 19.7225C4.05488 19.7277 4.0563 19.7305 4.0563 19.7305C4.10373 19.8218 4.17819 19.8963 4.26952 19.9437C4.26952 19.9437 4.27226 19.9451 4.27752 19.947C4.28299 19.949 4.29312 19.9523 4.30961 19.9563C4.34427 19.9646 4.40145 19.9745 4.49611 19.9823C4.69932 19.9992 4.9711 20 5.415 20H7.585C8.02891 20 8.30068 19.9992 8.5039 19.9823C8.59855 19.9745 8.65573 19.9646 8.6904 19.9563C8.70688 19.9523 8.71701 19.949 8.72249 19.947C8.72775 19.9451 8.73049 19.9437 8.73049 19.9437C8.82181 19.8963 8.89627 19.8218 8.94371 19.7305C8.94371 19.7305 8.94513 19.7277 8.94704 19.7225C8.94903 19.717 8.95234 19.7069 8.95629 19.6904C8.96459 19.6557 8.97446 19.5986 8.98232 19.5039C8.9992 19.3007 9 19.0289 9 18.585V18.415C9 17.9711 8.9992 17.6993 8.98232 17.4961C8.97446 17.4015 8.96459 17.3443 8.95629 17.3096C8.95234 17.2931 8.94903 17.283 8.94704 17.2775C8.94513 17.2723 8.94371 17.2695 8.94371 17.2695C8.89627 17.1782 8.82181 17.1037 8.73049 17.0563C8.73049 17.0563 8.72775 17.0549 8.72249 17.053C8.71701 17.051 8.70688 17.0477 8.6904 17.0437C8.65574 17.0354 8.59855 17.0255 8.5039 17.0177C8.30068 17.0008 8.02891 17 7.585 17H5.415C4.9711 17 4.69932 17.0008 4.49611 17.0177C4.40145 17.0255 4.34427 17.0354 4.30961 17.0437C4.29312 17.0477 4.28299 17.051 4.27752 17.053Z", fill: "#9CA3AF" })), P2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M14 17.5C14 16.0955 14 15.3933 14.3371 14.8889C14.483 14.6705 14.6705 14.483 14.8889 14.3371C15.3933 14 16.0955 14 17.5 14C18.9045 14 19.6067 14 20.1111 14.3371C20.3295 14.483 20.517 14.6705 20.6629 14.8889C21 15.3933 21 16.0955 21 17.5C21 18.9045 21 19.6067 20.6629 20.1111C20.517 20.3295 20.3295 20.517 20.1111 20.6629C19.6067 21 18.9045 21 17.5 21C16.0955 21 15.3933 21 14.8889 20.6629C14.6705 20.517 14.483 20.3295 14.3371 20.1111C14 19.6067 14 18.9045 14 17.5Z", stroke: "#9CA3AF", strokeWidth: 2 }), /* @__PURE__ */ g.createElement("path", { d: "M14 6.5C14 5.0955 14 4.3933 14.3371 3.8889C14.483 3.6705 14.6705 3.483 14.8889 3.3371C15.3933 3 16.0955 3 17.5 3C18.9045 3 19.6067 3 20.1111 3.3371C20.3295 3.483 20.517 3.6705 20.6629 3.8889C21 4.3933 21 5.0955 21 6.5C21 7.9045 21 8.6067 20.6629 9.1111C20.517 9.3295 20.3295 9.517 20.1111 9.6629C19.6067 10 18.9045 10 17.5 10C16.0955 10 15.3933 10 14.8889 9.6629C14.6705 9.517 14.483 9.3295 14.3371 9.1111C14 8.6067 14 7.9045 14 6.5Z", stroke: "#9CA3AF", strokeWidth: 2 }), /* @__PURE__ */ g.createElement("path", { d: "M3 17.5C3 16.0955 3 15.3933 3.33706 14.8889C3.48298 14.6705 3.67048 14.483 3.88886 14.3371C4.39331 14 5.09554 14 6.5 14C7.90446 14 8.60669 14 9.11114 14.3371C9.32952 14.483 9.51702 14.6705 9.66294 14.8889C10 15.3933 10 16.0955 10 17.5C10 18.9045 10 19.6067 9.66294 20.1111C9.51702 20.3295 9.32952 20.517 9.11114 20.6629C8.60669 21 7.90446 21 6.5 21C5.09554 21 4.39331 21 3.88886 20.6629C3.67048 20.517 3.48298 20.3295 3.33706 20.1111C3 19.6067 3 18.9045 3 17.5Z", stroke: "#9CA3AF", strokeWidth: 2 }), /* @__PURE__ */ g.createElement("path", { d: "M3 6.5C3 5.09554 3 4.39331 3.33706 3.88886C3.48298 3.67048 3.67048 3.48298 3.88886 3.33706C4.39331 3 5.09554 3 6.5 3C7.90446 3 8.60669 3 9.11114 3.33706C9.32952 3.48298 9.51702 3.67048 9.66294 3.88886C10 4.39331 10 5.09554 10 6.5C10 7.90446 10 8.60669 9.66294 9.11114C9.51702 9.32952 9.32952 9.51702 9.11114 9.66294C8.60669 10 7.90446 10 6.5 10C5.09554 10 4.39331 10 3.88886 9.66294C3.67048 9.51702 3.48298 9.32952 3.33706 9.11114C3 8.60669 3 7.90446 3 6.5Z", stroke: "#9CA3AF", strokeWidth: 2 })), F2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M10 19H12M12 19H14M12 19V5M12 5H6V6M12 5H18V6", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), R2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M3.00005 18.0001C3 17.9355 3 17.8689 3 17.8002V6.2002C3 5.08009 3 4.51962 3.21799 4.0918C3.40973 3.71547 3.71547 3.40973 4.0918 3.21799C4.51962 3 5.08009 3 6.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21 4.5192 21 5.07899 21 6.19691V17.8031C21 18.2881 21 18.6679 20.9822 18.9774M3.00005 18.0001C3.00082 18.9884 3.01337 19.5058 3.21799 19.9074C3.40973 20.2837 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H17.8036C18.9215 21 19.4805 21 19.9079 20.7822C20.2842 20.5905 20.5905 20.2837 20.7822 19.9074C20.9055 19.6654 20.959 19.3813 20.9822 18.9774M3.00005 18.0001L7.76798 12.4375L7.76939 12.436C8.19227 11.9426 8.40406 11.6955 8.65527 11.6064C8.87594 11.5282 9.11686 11.53 9.33643 11.6113C9.58664 11.704 9.79506 11.9539 10.2119 12.4541L12.8831 15.6595C13.269 16.1226 13.463 16.3554 13.6986 16.4489C13.9065 16.5313 14.1357 16.5406 14.3501 16.4773C14.5942 16.4053 14.8091 16.1904 15.2388 15.7607L15.7358 15.2637C16.1733 14.8262 16.3921 14.6076 16.6397 14.5361C16.8571 14.4734 17.0896 14.4869 17.2988 14.5732C17.537 14.6716 17.7302 14.9124 18.1167 15.3955L20.9822 18.9774M20.9822 18.9774L21 18.9996M15 9C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9Z", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), V2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M10.0002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2839 19.7822 18.9076C20 18.4802 20 17.921 20 16.8031V14M16 5L10 11V14H13L19 8M16 5L19 2L22 5L19 8M16 5L19 8", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), z2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M19.2933 9.95137L16.96 7.15137C16.6073 6.72814 16.43 6.51639 16.2139 6.36426C16.0223 6.22946 15.8084 6.12953 15.5822 6.06868C15.327 6 15.0523 6 14.5014 6H7.2002C6.08009 6 5.51962 6 5.0918 6.21799C4.71547 6.40973 4.40973 6.71547 4.21799 7.0918C4 7.51962 4 8.08009 4 9.2002V14.8002C4 15.9203 4 16.4801 4.21799 16.9079C4.40973 17.2842 4.71547 17.5905 5.0918 17.7822C5.5192 18 6.07899 18 7.19691 18H14.5014C15.0523 18 15.327 17.9998 15.5822 17.9312C15.8084 17.8703 16.0223 17.7702 16.2139 17.6354C16.43 17.4833 16.6073 17.2721 16.96 16.8488L19.2933 14.0488C19.9006 13.32 20.2036 12.9556 20.3197 12.5488C20.422 12.1902 20.422 11.8095 20.3197 11.4509C20.2036 11.0441 19.9006 10.6801 19.2933 9.95137Z", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), B2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M13.7947 5.22057L13.7933 5.22193M13.7933 5.22193C17.3485 1.66675 22.3331 6.65172 18.7782 10.2066L15.7394 13.2455C13.9985 14.9863 11.8768 14.5997 10.6322 13.344C10.5023 13.2129 10.382 13.0724 10.2726 12.9239M13.7933 5.22193L12.8499 6.16536M10.2053 18.3832L10.2067 18.3818M10.2067 18.3818C6.65149 21.937 1.66692 16.952 5.22184 13.3971L8.26066 10.3583C10.0015 8.6175 12.1233 9.00405 13.3678 10.2598C13.4977 10.3908 13.618 10.5313 13.7274 10.6798M10.2067 18.3818L11.1501 17.4384", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), I2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M5 15H19M5 9H19", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), D2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M9.9 19.2L11.36 21.1467C11.5771 21.4362 11.6857 21.5809 11.8188 21.6327C11.9353 21.678 12.0647 21.678 12.1812 21.6327C12.3143 21.5809 12.4229 21.4362 12.64 21.1467L14.1 19.2C14.3931 18.8091 14.5397 18.6137 14.7185 18.4645C14.9569 18.2656 15.2383 18.1248 15.5405 18.0535C15.7671 18 16.0114 18 16.5 18C17.8978 18 18.5967 18 19.1481 17.7716C19.8831 17.4672 20.4672 16.8831 20.7716 16.1481C21 15.5967 21 14.8978 21 13.5V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V13.5C3 14.8978 3 15.5967 3.22836 16.1481C3.53284 16.8831 4.11687 17.4672 4.85195 17.7716C5.40326 18 6.10218 18 7.5 18C7.98858 18 8.23287 18 8.45951 18.0535C8.76169 18.1248 9.04312 18.2656 9.2815 18.4645C9.46028 18.6137 9.60685 18.8091 9.9 19.2ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), H2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M19.5 9H14V12.5H19V16L16.8714 16.8514C16.633 16.9468 16.367 16.9468 16.1286 16.8514L14 16", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ g.createElement("path", { d: "M9.5 16.923H4V13.423H9V9.92297L6.8714 9.07157C6.633 8.97617 6.367 8.97617 6.1286 9.07157L4 9.92297", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), $2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M5 6.5C5.82843 6.5 6.5 5.82843 6.5 5C6.5 4.17157 5.82843 3.5 5 3.5C4.17157 3.5 3.5 4.17157 3.5 5C3.5 5.82843 4.17157 6.5 5 6.5ZM5 6.5V10.5M5 10.5C5.82843 10.5 6.5 11.1716 6.5 12C6.5 12.8284 5.82843 13.5 5 13.5M5 10.5C4.17157 10.5 3.5 11.1716 3.5 12C3.5 12.8284 4.17157 13.5 5 13.5M5 13.5V17.5M5 17.5C4.17157 17.5 3.5 18.1716 3.5 19C3.5 19.8284 4.17157 20.5 5 20.5C5.82843 20.5 6.5 19.8284 6.5 19M5 17.5C5.82843 17.5 6.5 18.1716 6.5 19M6.5 19H10.5M10.5 19C10.5 19.8284 11.1716 20.5 12 20.5C12.8284 20.5 13.5 19.8284 13.5 19M10.5 19C10.5 18.1716 11.1716 17.5 12 17.5C12.8284 17.5 13.5 18.1716 13.5 19M13.5 19H17.5M17.5 19C17.5 19.8284 18.1716 20.5 19 20.5C19.8284 20.5 20.5 19.8284 20.5 19C20.5 18.1716 19.8284 17.5 19 17.5C18.1716 17.5 17.5 18.1716 17.5 19ZM13.5 5C13.5 5.82843 12.8284 6.5 12 6.5C11.1716 6.5 10.5 5.82843 10.5 5C10.5 4.17157 11.1716 3.5 12 3.5C12.8284 3.5 13.5 4.17157 13.5 5ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12ZM20.5 5C20.5 5.82843 19.8284 6.5 19 6.5C18.1716 6.5 17.5 5.82843 17.5 5C17.5 4.17157 18.1716 3.5 19 3.5C19.8284 3.5 20.5 4.17157 20.5 5ZM20.5 12C20.5 12.8284 19.8284 13.5 19 13.5C18.1716 13.5 17.5 12.8284 17.5 12C17.5 11.1716 18.1716 10.5 19 10.5C19.8284 10.5 20.5 11.1716 20.5 12Z", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), N2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M3 14C3 18.9706 7.02944 23 12 23C16.9706 23 21 18.9706 21 14", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ g.createElement("path", { d: "M12 5.00004C7.0294 5.00004 3 9.02948 3 14C3 18.9706 7.0294 23 12 23", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), j2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M20 12H4", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), O2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ g.createElement("path", { d: "M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), W2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M11 2L14 5M14 5L11 8M14 5H6.8C5.11984 5 4.27976 5 3.63803 5.32698C3.07354 5.6146 2.6146 6.07354 2.32698 6.63803C2 7.27976 2 8.11984 2 9.8V15.5C2 15.9644 2 16.1966 2.02567 16.3916C2.2029 17.7378 3.26222 18.7971 4.60842 18.9743C4.80337 19 5.03558 19 5.5 19M10 19H17.2C18.8802 19 19.7202 19 20.362 18.673C20.9265 18.3854 21.3854 17.9265 21.673 17.362C22 16.7202 22 15.8802 22 14.2V8.5C22 8.03558 22 7.80337 21.9743 7.60842C21.7971 6.26222 20.7378 5.2029 19.3916 5.02567C19.1966 5 18.9644 5 18.5 5M10 19L13 22M10 19L13 16", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), Z2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.174 3.5968C13.8663 3.2047 14.6861 3.10369 15.4529 3.31598C15.7929 3.41011 16.0834 3.57409 16.3572 3.7593C16.6173 3.9352 16.9156 4.16808 17.2614 4.43799L17.3118 4.47737C17.6576 4.74728 17.956 4.98016 18.1898 5.18977C18.4359 5.41046 18.6655 5.65248 18.8394 5.95945C19.2315 6.65177 19.3325 7.47151 19.1202 8.23831C19.0261 8.5783 18.8621 8.86883 18.6769 9.14267C18.501 9.40276 18.2681 9.70112 17.9981 10.0469L10.8954 19.1462C10.8774 19.1692 10.8597 19.1919 10.8422 19.2144C10.5088 19.6419 10.2567 19.9651 9.94462 20.2306C9.68048 20.4553 9.38823 20.6447 9.07524 20.794C8.70547 20.9704 8.30745 21.0685 7.78096 21.1983C7.75336 21.2051 7.7254 21.212 7.69708 21.219L5.57226 21.7435C5.42511 21.7799 5.25714 21.8215 5.10897 21.8442C4.94379 21.8696 4.68801 21.8926 4.40551 21.8022C4.06591 21.6934 3.77615 21.4672 3.58821 21.1642C3.43187 20.9121 3.39209 20.6584 3.37662 20.492C3.36274 20.3427 3.36225 20.1697 3.36182 20.0181C3.36179 20.0087 3.36177 19.9994 3.36174 19.9902L3.35487 17.8295C3.35477 17.8003 3.35467 17.7715 3.35457 17.7431C3.35262 17.2009 3.35115 16.7909 3.43252 16.3894C3.5014 16.0495 3.61418 15.72 3.76803 15.4093C3.94979 15.0421 4.20216 14.7191 4.53598 14.2918C4.55348 14.2694 4.57121 14.2467 4.58917 14.2237L11.6919 5.12435C11.9618 4.77856 12.1947 4.48019 12.4043 4.2464C12.625 4.00025 12.867 3.77065 13.174 3.5968ZM14.9192 5.24347C14.6636 5.17271 14.3904 5.20638 14.1596 5.33708C14.1204 5.35928 14.046 5.41135 13.8935 5.5815C13.7349 5.75836 13.5439 6.00211 13.2488 6.38018L16.4019 8.84145C16.6971 8.46338 16.8871 8.21896 17.0202 8.02221C17.1483 7.83291 17.1807 7.74808 17.1927 7.70467C17.2635 7.44907 17.2298 7.17583 17.0991 6.94505C17.0769 6.90586 17.0248 6.83145 16.8547 6.6789C16.6778 6.52033 16.4341 6.32938 16.056 6.03426C15.6779 5.73914 15.4335 5.54904 15.2368 5.41597C15.0475 5.28794 14.9626 5.25549 14.9192 5.24347ZM15.1713 10.418L12.0182 7.95674L6.16573 15.4543C5.75597 15.9792 5.64042 16.135 5.56043 16.2966C5.48351 16.452 5.42711 16.6167 5.39268 16.7866C5.35687 16.9633 5.35274 17.1572 5.35486 17.8231L5.36094 19.7357L7.21772 19.2773C7.86423 19.1177 8.05131 19.0666 8.21403 18.9889C8.37053 18.9143 8.51665 18.8196 8.64873 18.7072C8.78605 18.5904 8.90909 18.4405 9.31884 17.9156L15.1713 10.418ZM12.0001 21C12.0001 20.4477 12.4478 20 13.0001 20H20.0001C20.5524 20 21.0001 20.4477 21.0001 21C21.0001 21.5523 20.5524 22 20.0001 22H13.0001C12.4478 22 12.0001 21.5523 12.0001 21Z", fill: "#9CA3AF" })), U2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), _2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M9 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2837 19.7822 18.9074C20 18.48 20 17.921 20 16.8031V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2837 4.40973 18.9074 4.21799C18.4796 4 17.9203 4 16.8002 4H9M9 20H7.19692C6.07901 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2837 4.21799 18.9074C4 18.4796 4 17.9203 4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H9M9 20V12V4", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), J2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M15.8521 7.66675L9.85205 13.6667V16.6667H12.8521L18.8521 10.6667M15.8521 7.66675L18.8521 4.66675L21.8521 7.66675L18.8521 10.6667M15.8521 7.66675L18.8521 10.6667", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ g.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.67722 6.89865C2.35162 7.35087 2.48468 7.97869 2.9697 8.30386C3.45697 8.62974 4.11274 8.52532 4.43767 8.0752C5.38188 6.75914 6.61983 6.06864 7.59305 6.01863C7.85295 6.00619 8.07471 6.04414 8.23844 6.13312C8.36235 6.20022 8.45908 6.31423 8.51586 6.46881C8.76161 7.13702 5.5537 8.88668 4.43767 10.6667C3.77599 11.7206 5.93213 12.2621 5.22876 13.2379L5.19423 13.2859C4.49122 14.2627 3.87774 15.1151 3.53501 15.7374C2.89406 16.9043 2.33204 18.094 2.06745 19.1141C1.8793 19.837 2.06745 20.5214 2.85194 20.6667C3.35194 20.6667 4.85194 20.1667 4.85194 20.1667L7.35194 19.6667C8.35194 19.6667 8.21488 18.8662 8.85194 18.6667C9.59755 18.4332 8.9829 18.2594 8.85194 18.1667C8.85194 17.932 8.47513 17.8153 8.09816 17.6986C7.6887 17.5718 7.27906 17.4449 7.35194 17.1667C7.45887 16.7548 6.87818 16.8792 6.31369 17.0001C5.70887 17.1297 5.12265 17.2553 5.42075 16.713C5.70712 16.1904 7.16685 14.116 7.85194 13.1667C8.56803 12.1741 6.28762 11.7864 6.98988 10.6667C9.24877 8.89265 10.9429 7.04905 10.5067 5.8644C10.2625 5.199 9.82211 4.70977 9.25038 4.39413C8.71847 4.10038 8.08513 3.97119 7.40488 4.00536C5.86786 4.08711 3.99407 5.05965 2.67722 6.89865Z", fill: "#9CA3AF" })), K2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M20.3873 7.1575L11.9999 12L3.60913 7.14978", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ g.createElement("path", { d: "M12 12V21", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ g.createElement("path", { d: "M11.0001 2.57735C11.6189 2.22008 12.3813 2.22008 13.0001 2.57735L19.6604 6.42266C20.2792 6.77993 20.6604 7.44018 20.6604 8.15471V15.8453C20.6604 16.5598 20.2792 17.2201 19.6604 17.5774L13.0001 21.4226C12.3813 21.7799 11.6189 21.7799 11.0001 21.4226L4.33984 17.5774C3.72103 17.2201 3.33984 16.5598 3.33984 15.8453V8.15471C3.33984 7.44018 3.72103 6.77993 4.33984 6.42266L11.0001 2.57735Z", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), G2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M4 11C4 10.4477 4.44772 10 5 10H9C9.55228 10 10 10.4477 10 11V13C10 13.5523 9.55228 14 9 14H5C4.44772 14 4 13.5523 4 13V11Z", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round" }), /* @__PURE__ */ g.createElement("path", { d: "M13 11C13 10.4477 13.4477 10 14 10H19C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14H14C13.4477 14 13 13.5523 13 13V11Z", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round" })), q2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M3 17H10M15 16H18M18 16H21M18 16V19M18 16V13M3 12H14M3 7H14", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), X2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M15.5392 1.58537C15.7098 1.64553 15.8497 1.77049 15.9288 1.93317C16.0079 2.09584 16.0197 2.28313 15.9616 2.45443C15.9036 2.62574 15.7803 2.76726 15.6186 2.84832C15.4569 2.92938 15.2698 2.94346 15.0978 2.88749C12.9847 2.16922 10.6876 2.20764 8.59963 2.99618C6.51169 3.78473 4.76269 5.27438 3.65191 7.21023C2.54114 9.14607 2.13765 11.4078 2.51049 13.6083C2.88332 15.8088 4.00931 17.8114 5.69577 19.2733C7.38222 20.7352 9.52431 21.5656 11.7555 21.6223C13.9866 21.6791 16.1682 20.9587 17.9268 19.5844C19.6854 18.2101 20.9117 16.2674 21.3959 14.0887C21.8802 11.91 21.5922 9.63068 20.5813 7.64087C20.4989 7.47845 20.4843 7.28996 20.5407 7.1168C20.5971 6.94363 20.72 6.79993 20.8823 6.71724C21.0445 6.63455 21.233 6.61964 21.4063 6.67577C21.5795 6.7319 21.7234 6.85448 21.8064 7.01662C22.962 9.29064 23.2914 11.8956 22.7382 14.3857C22.185 16.8757 20.7836 19.0962 18.7738 20.6669C16.764 22.2377 14.2708 23.0612 11.7208 22.9965C9.17084 22.9317 6.72263 21.9828 4.79515 20.312C2.86767 18.6413 1.58075 16.3526 1.15461 13.8377C0.72847 11.3227 1.18961 8.73785 2.45912 6.52541C3.72862 4.31296 5.72757 2.61049 8.11387 1.70933C10.5002 0.808169 13.1255 0.764351 15.5405 1.58537H15.5392Z", fill: "#9CA3AF" }), /* @__PURE__ */ g.createElement("path", { d: "M11.75 13C11.5511 13 11.3603 12.921 11.2197 12.7803C11.079 12.6397 11 12.4489 11 12.25V6.24997C11 6.05105 11.079 5.86029 11.2197 5.71964C11.3603 5.57898 11.5511 5.49997 11.75 5.49997C11.9489 5.49997 12.1397 5.57898 12.2803 5.71964C12.421 5.86029 12.5 6.05105 12.5 6.24997V11.5H17.75C17.9489 11.5 18.1397 11.579 18.2803 11.7197C18.421 11.8603 18.5 12.0511 18.5 12.25C18.5 12.4489 18.421 12.6397 18.2803 12.7803C18.1397 12.921 17.9489 13 17.75 13H11.75Z", fill: "#9CA3AF" }), /* @__PURE__ */ g.createElement("path", { d: "M15.5392 1.58537C15.7098 1.64553 15.8497 1.77049 15.9288 1.93317C16.0079 2.09584 16.0197 2.28313 15.9616 2.45443C15.9036 2.62574 15.7803 2.76726 15.6186 2.84832C15.4569 2.92938 15.2698 2.94346 15.0978 2.88749C12.9847 2.16922 10.6876 2.20764 8.59963 2.99618C6.51169 3.78473 4.76269 5.27438 3.65191 7.21023C2.54114 9.14607 2.13765 11.4078 2.51049 13.6083C2.88332 15.8088 4.00931 17.8114 5.69577 19.2733C7.38222 20.7352 9.52431 21.5656 11.7555 21.6223C13.9866 21.6791 16.1682 20.9587 17.9268 19.5844C19.6854 18.2101 20.9117 16.2674 21.3959 14.0887C21.8802 11.91 21.5922 9.63068 20.5813 7.64087C20.4989 7.47845 20.4843 7.28996 20.5407 7.1168C20.5971 6.94363 20.72 6.79993 20.8823 6.71724C21.0445 6.63455 21.233 6.61964 21.4063 6.67577C21.5795 6.7319 21.7234 6.85448 21.8064 7.01662C22.962 9.29064 23.2914 11.8956 22.7382 14.3857C22.185 16.8757 20.7836 19.0962 18.7738 20.6669C16.764 22.2377 14.2708 23.0612 11.7208 22.9965C9.17084 22.9317 6.72263 21.9828 4.79515 20.312C2.86767 18.6413 1.58075 16.3526 1.15461 13.8377C0.72847 11.3227 1.18961 8.73785 2.45912 6.52541C3.72862 4.31296 5.72757 2.61049 8.11387 1.70933C10.5002 0.808169 13.1255 0.764351 15.5405 1.58537H15.5392Z", stroke: "#9CA3AF" }), /* @__PURE__ */ g.createElement("path", { d: "M11.75 13C11.5511 13 11.3603 12.921 11.2197 12.7803C11.079 12.6397 11 12.4489 11 12.25V6.24997C11 6.05105 11.079 5.86029 11.2197 5.71964C11.3603 5.57898 11.5511 5.49997 11.75 5.49997C11.9489 5.49997 12.1397 5.57898 12.2803 5.71964C12.421 5.86029 12.5 6.05105 12.5 6.24997V11.5H17.75C17.9489 11.5 18.1397 11.579 18.2803 11.7197C18.421 11.8603 18.5 12.0511 18.5 12.25C18.5 12.4489 18.421 12.6397 18.2803 12.7803C18.1397 12.921 17.9489 13 17.75 13H11.75Z", stroke: "#9CA3AF" })), Y2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M15.6667 7.33333C18.367 7.33333 20.5556 9.4224 20.5556 12C20.5556 14.5776 18.367 16.6667 15.6667 16.6667H8.33333C5.63299 16.6667 3.44444 14.5776 3.44444 12C3.44444 9.4224 5.63299 7.33333 8.33333 7.33333H15.6667ZM23 12C23 8.13542 19.7153 5 15.6667 5H8.33333C4.28472 5 1 8.13542 1 12C1 15.8646 4.28472 19 8.33333 19H15.6667C19.7153 19 23 15.8646 23 12ZM8.33333 15.5C9.30579 15.5 10.2384 15.1313 10.9261 14.4749C11.6137 13.8185 12 12.9283 12 12C12 11.0717 11.6137 10.1815 10.9261 9.52513C10.2384 8.86875 9.30579 8.5 8.33333 8.5C7.36087 8.5 6.42824 8.86875 5.74061 9.52513C5.05298 10.1815 4.66667 11.0717 4.66667 12C4.66667 12.9283 5.05298 13.8185 5.74061 14.4749C6.42824 15.1313 7.36087 15.5 8.33333 15.5Z", fill: "#9CA3AF" })), Q2 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M9.14648 9.07361C9.31728 8.54732 9.63015 8.07896 10.0508 7.71948C10.4714 7.36001 10.9838 7.12378 11.5303 7.03708C12.0768 6.95038 12.6362 7.0164 13.1475 7.22803C13.6587 7.43966 14.1014 7.78875 14.4268 8.23633C14.7521 8.68391 14.9469 9.21256 14.9904 9.76416C15.0339 10.3158 14.9238 10.8688 14.6727 11.3618C14.4215 11.8548 14.0394 12.2685 13.5676 12.5576C13.0958 12.8467 12.5533 12.9998 12 12.9998V14.0002M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12.0498 17V17.1L11.9502 17.1002V17H12.0498Z", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), e0 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M12 6L8 10L4 6", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ g.createElement("path", { d: "M20 14L16 18L12 14", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), t0 = (e) => /* @__PURE__ */ g.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ g.createElement("path", { d: "M12 8V16", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ g.createElement("path", { d: "M15 11L12.087 8.08704C12.039 8.03897 11.961 8.03897 11.913 8.08704L9 11", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ g.createElement("path", { d: "M3 15V16V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V16V15", stroke: "#9CA3AF", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })), vn = {
  Breadcrumb: m2,
  Button: p2,
  Card: g2,
  Checkbox: C2,
  CollectionEditor: f2,
  Container: v2,
  Content: w2,
  CustomBlock: b2,
  CustomControl: y2,
  DatePicker: x2,
  Default: k2,
  Dropdown: L2,
  Dropzone: S2,
  ErrorMessage: M2,
  Grid: A2,
  GridLayout: T2,
  GridView: P2,
  Image: R2,
  Input: V2,
  Label: z2,
  Link: B2,
  Footer: E2,
  Header: F2,
  Sidebar: _2,
  Menu: I2,
  Message: D2,
  NumberFormat: H2,
  PatternFormat: $2,
  ProgressCircle: N2,
  ProgressLine: j2,
  RadioGroup: O2,
  Repeater: W2,
  RichTextEditor: Z2,
  Search: U2,
  Signature: J2,
  StaticContent: K2,
  Tab: G2,
  TextArea: q2,
  TimePicker: X2,
  Toggle: Y2,
  Tooltip: Q2,
  TreePicker: e0,
  Uploader: t0
}, n0 = ({ draggable: e = !0, onAdd: t, onDoubleClick: n }) => {
  const o = O(), { name: i = "" } = o.model, s = y(), { icon: a } = s.getComponentMetadata(o.model.type), c = _r(zn(Jr(i)), " ", ""), l = a ?? vn[c] ?? vn.Default, d = (C) => {
    C.stopPropagation(), t == null || t(o);
  }, u = p((C) => {
    C.stopPropagation(), n == null || n(o);
  }, [n, o]), h = /* @__PURE__ */ m(i0, { onClick: d, onDoubleClick: u, children: [
    /* @__PURE__ */ r(l, { width: 18, height: 18, viewBox: "0 0 24 24" }),
    /* @__PURE__ */ r("label", { children: i })
  ] });
  return e ? /* @__PURE__ */ r(r0, { children: h }) : h;
}, o0 = b("AddedComponent", n0), r0 = ({ children: e }) => {
  const [{ isDragging: t }, n] = Lo(Pe.AddedComponent);
  return /* @__PURE__ */ m(F, { children: [
    /* @__PURE__ */ r(s0, { ref: n, children: e }),
    t && /* @__PURE__ */ r(So, { children: e })
  ] });
}, i0 = v.div`
  display: flex;
  padding: 7px;
  gap: 6px;
  min-width: 150px;
  flex: 1;
  max-width: 125px;
  border-radius: 6px;
  background-color: var(--rs-btn-default-bg);
  font-size: 13px;

  &:hover {
    box-shadow: var(--rs-state-focus-shadow);
  }

  &:active, &:focus {
    outline: 2px solid var(--rs-btn-primary-bg);
  }

  .rs-theme-dark & label {
    opacity: 0.6;
  }
`, s0 = v.div`
  cursor: grab;
  flex: 1;

  & > div {
    height: 100%;
    min-width: 123px;
    max-width: initial;
  }
`, We = () => {
  const [e, t] = A(), n = $r();
  return M(() => {
    if (!e)
      return;
    const o = e.placement || "bottomEnd", i = e.type || "info";
    n.push(/* @__PURE__ */ r(rt, { type: i, title: e.title, children: e.message }), {
      placement: o
    }), t(void 0);
  }, [e, n]), t;
};
function To(e) {
  const t = y(), { t: n } = P(), o = We(), i = p((l) => {
    console.error(l), o({ type: "error", message: l });
  }, [o]), s = p((l) => {
    t.loadForm(l, e, i);
  }, [t, i, e]), a = p((l) => {
    l && t.createForm(l).then(e).then(() => s(l));
  }, [t, s, e]), c = p(async (l) => {
    if ((await t.getFormKeys()).includes(l))
      return n("formsList.formWithNameExists");
  }, [t, n]);
  return p(() => {
    t.showPromptModal({
      value: "",
      onOk: a,
      title: n("leftMenu.enterFormName"),
      placeholder: n("leftMenu.formNamePlaceholder"),
      validate: c
    });
  }, [t, a, n, c]);
}
const a0 = b("ErrorFormPlaceholder", function({ children: e }) {
  const { formLoadError: t } = $(), n = T("formsList"), o = To(), i = /* @__PURE__ */ m(l0, { children: [
    /* @__PURE__ */ r(c0, { type: "info", showIcon: !0, children: e }),
    /* @__PURE__ */ r(H, { onClick: o, block: !0, appearance: "primary", children: n("addNewForm") })
  ] });
  return t ? i : e;
}), c0 = v(rt)`
  font-size: 16px;
  font-weight: bolder;
`, l0 = v.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`, d0 = (e) => {
  const t = y(), n = $(), o = p((i) => {
    n.selectedLanguage = i, t.localizationLanguage = i;
  }, [t, n]);
  return /* @__PURE__ */ r(bo, { ...e, value: t.localizationLanguage.fullCode, onSelect: o });
}, u0 = W("LocalizationSelect", d0), h0 = ({ onClose: e }) => {
  const t = y(), n = p(() => {
    const s = [];
    return t.errorMap.forEach((a, c) => {
      Object.entries(a).forEach(([l, d]) => {
        d && s.push({ component: c, property: l, message: d });
      });
    }), s;
  }, [t.errorMap]), o = Wt(n);
  M(() => {
    t.validate().catch(console.error);
  }, [t]);
  const i = (s) => {
    e(), t.selectNode(s);
  };
  return /* @__PURE__ */ m(Be, { height: 400, data: o, children: [
    /* @__PURE__ */ m(yt, { width: 220, align: "center", fixed: !0, children: [
      /* @__PURE__ */ r(xt, { children: "Component" }),
      /* @__PURE__ */ r(kt, { children: (s) => /* @__PURE__ */ r("a", { onClick: () => i(s.component), children: s.component.key }) })
    ] }),
    /* @__PURE__ */ m(yt, { width: 150, children: [
      /* @__PURE__ */ r(xt, { children: "Property" }),
      /* @__PURE__ */ r(kt, { dataKey: "property" })
    ] }),
    /* @__PURE__ */ m(yt, { width: 450, children: [
      /* @__PURE__ */ r(xt, { children: "Error message" }),
      /* @__PURE__ */ r(kt, { dataKey: "message" })
    ] })
  ] });
}, m0 = b("PropertyErrors", h0), p0 = () => {
  const { t: e } = P(), [t, n] = Tn((o) => !o, !1);
  return /* @__PURE__ */ m(F, { children: [
    /* @__PURE__ */ r(me, { speaker: /* @__PURE__ */ r(De, { children: e("validation.showFormErrors") }), placement: "bottom", children: /* @__PURE__ */ r(g0, { onClick: n, icon: /* @__PURE__ */ r(r1, {}), circle: !0 }) }),
    /* @__PURE__ */ m(Z, { open: t, size: "full", backdrop: !0, children: [
      /* @__PURE__ */ r(Z.Header, { closeButton: !0, onClose: n, children: /* @__PURE__ */ r(Z.Title, { children: e("validation.formErrors") }) }),
      /* @__PURE__ */ r(Z.Body, { children: /* @__PURE__ */ r(Nr, { style: { marginRight: 0 }, children: /* @__PURE__ */ r(jr, { md: 14, children: /* @__PURE__ */ r(m0, { onClose: n }) }) }) })
    ] })
  ] });
};
b("ErrorsPanel", p0);
const g0 = v(U)`
  padding: 5px !important;
`, C0 = (e, t) => {
  const n = y(), { t: o } = P();
  return p(() => {
    n.showPromptModal({
      value: e,
      onOk: t,
      title: o("leftMenu.enterFormName"),
      placeholder: o("leftMenu.formNamePlaceholder")
    });
  }, [n, t, o, e]);
}, Tt = ".json";
async function f0(e, t) {
  const n = await e.getFormKeys(), o = new Jn();
  for (const s of n) {
    const a = await e.getStoredFormJson(s);
    o.file(`${s}${Tt}`, a);
  }
  const i = await o.generateAsync({ type: "blob" });
  U1(i, t);
}
async function v0(e, t) {
  const o = (await Jn.loadAsync(t)).filter((s) => s.endsWith(Tt)), i = [];
  for (const s of o) {
    const a = s.name.slice(0, -Tt.length), c = await s.async("string");
    i.push([a, c]);
  }
  for (const s of i)
    await e.saveForm(s[0], s[1]);
}
const Po = () => {
  const e = y(), { t } = P(), n = We();
  return (o) => {
    e.save(o).then(() => n({ type: "success", message: t("leftMenu.formSaved") })).catch((i) => {
      console.error(i), n({ type: "error", message: t("leftMenu.formSaveError") });
    });
  };
}, w0 = () => {
  const e = y(), { t } = P(), n = We(), o = () => {
    f0(e, "forms.zip").then(() => n({ type: "success", message: t("leftMenu.exportFormsSuccess") })).catch((i) => {
      console.error(i), n({ type: "error", message: t("leftMenu.exportFormsError") });
    });
  };
  return /* @__PURE__ */ r(z.Item, { onSelect: o, icon: /* @__PURE__ */ r(i1, {}), children: t("leftMenu.exportForms") });
}, b0 = b("ExportFormsButton", w0), y0 = () => {
  const e = y(), { t } = P(), n = We(), o = () => {
    lc(
      (i) => {
        i.then((s) => v0(e, s)).then(() => n({ type: "success", message: t("leftMenu.importFormsSuccess") })).catch((s) => {
          console.error(s), n({ type: "error", message: t("leftMenu.importFormsError") });
        });
      }
    );
  };
  return /* @__PURE__ */ r(z.Item, { onSelect: o, icon: /* @__PURE__ */ r(s1, {}), children: t("leftMenu.importForms") });
}, x0 = b("ImportFormsButton", y0), k0 = (e) => /* @__PURE__ */ r("div", { ...e }), L0 = oe("MainMenu_Button", k0), S0 = (e, t) => /* @__PURE__ */ r(L0, { children: /* @__PURE__ */ r(
  U,
  {
    icon: /* @__PURE__ */ r(D, { icon: v1 }),
    ...e,
    ref: t,
    size: "sm",
    appearance: "primary"
  }
) }), M0 = oe("MainMenu_Dropdown", z), E0 = () => {
  const e = y(), { t } = P(), n = Po(), o = p((s) => {
    s && n(s);
  }, [n]), i = C0("", o);
  return /* @__PURE__ */ r(F, { children: /* @__PURE__ */ m(M0, { title: t("leftMenu.menu"), size: "sm", renderToggle: S0, menuStyle: { width: "fit-content" }, children: [
    /* @__PURE__ */ r(z.Item, { onSelect: e.download.bind(e), icon: /* @__PURE__ */ r(a1, {}), children: t("leftMenu.download") }),
    /* @__PURE__ */ r(z.Item, { onSelect: e.upload.bind(e), icon: /* @__PURE__ */ r(c1, {}), children: t("leftMenu.upload") }),
    /* @__PURE__ */ r(pl, {}),
    e.formStorageEnabled && /* @__PURE__ */ m(F, { children: [
      /* @__PURE__ */ r(z.Item, { onSelect: n, icon: /* @__PURE__ */ r(D, { icon: St }), children: t("leftMenu.save") }),
      /* @__PURE__ */ r(z.Item, { onSelect: i, icon: /* @__PURE__ */ r(D, { icon: St }), children: t("leftMenu.saveAs") }),
      /* @__PURE__ */ r(b0, {}),
      /* @__PURE__ */ r(x0, {})
    ] }),
    /* @__PURE__ */ r(z.Item, { onSelect: e.clear.bind(e), icon: /* @__PURE__ */ r(D, { icon: Z1 }), children: t("leftMenu.clear") })
  ] }) });
}, A0 = b("Menu", E0), T0 = {
  viewer: { icon: Kn, toggleTo: "builder" },
  builder: { icon: Zn, toggleTo: "viewer" }
}, P0 = ({ className: e }) => {
  const t = y(), { icon: n, toggleTo: o } = T0[t.builderMode], i = T("rightMenu.modes"), s = p(() => t.changeBuilderMode(o), [t, o]);
  return /* @__PURE__ */ m(
    z0,
    {
      onClick: s,
      appearance: "primary",
      className: G(t.builderMode, e),
      size: "sm",
      children: [
        /* @__PURE__ */ r(D, { icon: n, color: "white" }),
        i(t.builderMode)
      ]
    }
  );
}, F0 = W("ToggleModeButton", P0), R0 = (e = 10) => $e`
  && {
    display: flex;
    align-items: center;
    gap: ${e}px;

    .rs-icon {
      margin-block-start: 2px;
    }
  }
`, V0 = v(H)`
  ${R0()}
`, z0 = v(V0)`
  min-width: 98px;
  display: flex;
  justify-content: center;
  background-size: 200% 100%;
  background-image: linear-gradient(to right, var(--rs-btn-primary-bg) 50%, var(--rs-green-700) 50%);
  transition: background-position 200ms, box-shadow 600ms !important;
  box-shadow: 2px 5px 20px -5px var(--rs-btn-primary-bg);

  &.viewer {
    background-position: 100% 0;
    box-shadow: 2px 5px 20px -5px var(--rs-green-700);
  }
`, B0 = {
  dark: _1,
  light: J1
}, I0 = (e) => {
  const t = y(), n = T("rightMenu"), { theme: o } = t, i = E(() => B0[o], [o]), s = o === "dark", a = E(() => ({
    icon: i,
    color: s ? "var(--rs-yellow-300)" : "white",
    size: 1.4,
    onClick: () => t.theme = s ? "light" : "dark",
    className: t.theme
  }), [i, s, t]), c = /* @__PURE__ */ r(De, { children: n("toggleTheme") });
  return /* @__PURE__ */ r(me, { ...e, speaker: c, placement: "bottom", children: /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(H0, { ...a }) }) });
}, D0 = W("ToggleThemeButton", I0), H0 = v(D)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 3px;
  border-radius: 20px;
  overflow: hidden;

  & path {
    transform: rotate(360deg);
    transform-origin: 50% 200%;
    transition: all 400ms cubic-bezier(1, 0, 0, 1);
  }

  transition: background-color 400ms linear;
  background-color: var(--rs-primary-500);

  &.dark {
    path {
      transform: rotate(0deg);
    }

    background-color: var(--rs-toggle-bg);
  }
`, $0 = () => {
  const e = y(), [t] = A(e.formAsString), n = _(t), o = (i) => n.current = i;
  return M(() => () => e.parseForm(n.current), [e]), /* @__PURE__ */ r(Oe, { language: "json", initialValue: t, onChange: o });
}, N0 = b("JsonView", $0), j0 = /* @__PURE__ */ r(D, { icon: On }), O0 = (e) => {
  const { t } = P(), [n, o] = A(!1), i = () => o(!0), s = () => o(!1), a = /* @__PURE__ */ r(De, { children: t("editJson") });
  return /* @__PURE__ */ m(F, { children: [
    /* @__PURE__ */ r(me, { ...e, speaker: a, placement: "bottom", children: /* @__PURE__ */ r(U, { onClick: i, icon: j0, size: "sm" }) }),
    /* @__PURE__ */ m(Z, { open: n, size: "full", backdrop: !0, children: [
      /* @__PURE__ */ r(Z.Header, { closeButton: !0, onClose: s, children: /* @__PURE__ */ r(Z.Title, { children: t("editJson") }) }),
      /* @__PURE__ */ r(Z.Body, { style: { height: "100vh" }, children: /* @__PURE__ */ r(N0, {}) })
    ] })
  ] });
}, W0 = W("JsonViewButton", O0), Z0 = we((e, t) => /* @__PURE__ */ m("svg", { height: "24px", width: "24px", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e, ref: t, children: [
  /* @__PURE__ */ r("title", {}),
  /* @__PURE__ */ r("desc", {}),
  /* @__PURE__ */ r("defs", {}),
  /* @__PURE__ */ r("g", { fill: "none", fillRule: "evenodd", id: "Page-1", stroke: "none", strokeWidth: "1", children: /* @__PURE__ */ r("g", { fill: "currentColor", id: "Icons-Device", transform: "translate(-210.000000, -124.000000)", children: /* @__PURE__ */ r("g", { id: "screen-rotation", transform: "translate(210.000000, 124.000000)", children: /* @__PURE__ */ r(
    "path",
    {
      d: "M16.5,2.5 C19.8,4 22.1,7.2 22.5,11 L24,11 C23.4,4.8 18.3,0 12,0 L11.3,0 L15.1,3.8 L16.5,2.5 L16.5,2.5 Z M10.2,1.7 C9.6,1.1 8.7,1.1 8.1,1.7 L1.7,8.1 C1.1,8.7 1.1,9.6 1.7,10.2 L13.7,22.2 C14.3,22.8 15.2,22.8 15.8,22.2 L22.2,15.8 C22.8,15.2 22.8,14.3 22.2,13.7 L10.2,1.7 L10.2,1.7 Z M14.8,21.2 L2.8,9.2 L9.2,2.8 L21.2,14.8 L14.8,21.2 L14.8,21.2 Z M7.5,21.5 C4.2,20 1.9,16.8 1.5,13 L0.1,13 C0.6,19.2 5.7,24 12,24 L12.7,24 L8.9,20.2 L7.5,21.5 L7.5,21.5 Z",
      id: "Shape"
    }
  ) }) }) })
] })), U0 = [
  ["desktop", K1],
  ["mobile", G1],
  ["tablet", q1]
], _0 = (e) => {
  const t = y(), n = T("rightMenu.modes"), { viewMode: o, landscapeMode: i } = t, s = (c) => c ? "var(--rs-navs-selected)" : void 0;
  return /* @__PURE__ */ m(K0, { ...e, children: [
    (o === "mobile" || o === "tablet") && /* @__PURE__ */ r(U, { onClick: () => t.landscapeMode = !i, icon: /* @__PURE__ */ r(Dt, { as: Z0, color: s(i) }), size: "sm" }),
    /* @__PURE__ */ m(ie, { size: "sm", children: [
      U0.map(([c, l], d) => /* @__PURE__ */ r(me, { speaker: /* @__PURE__ */ r(De, { children: n(c) }), placement: "bottom", children: /* @__PURE__ */ r(
        U,
        {
          onClick: () => t.viewMode = c,
          icon: /* @__PURE__ */ r(D, { icon: l, color: s(c === o) })
        }
      ) }, d)),
      /* @__PURE__ */ r(W0, {})
    ] })
  ] });
}, J0 = W("ResolutionSelect", _0), K0 = v.div`
  display: flex;
  align-items: center;
  width: max-content;
`, G0 = W("Header_Toolbar", ie), q0 = (e) => {
  const t = y(), n = Po(), o = t.undoer, i = !1;
  return /* @__PURE__ */ m(td, { ...e, children: [
    /* @__PURE__ */ m(Y0, { children: [
      /* @__PURE__ */ r(A0, {}),
      /* @__PURE__ */ m(G0, { size: "sm", children: [
        t.formStorageEnabled && /* @__PURE__ */ r(
          U,
          {
            onClick: () => n(),
            icon: /* @__PURE__ */ r(D, { icon: St }),
            size: "sm"
          }
        ),
        /* @__PURE__ */ r(
          U,
          {
            onClick: () => o.undo(),
            disabled: !o.hasUndo,
            icon: /* @__PURE__ */ r(D, { icon: W1 }),
            size: "sm"
          }
        ),
        /* @__PURE__ */ r(
          U,
          {
            onClick: () => o.redo(),
            disabled: !o.hasRedo,
            icon: /* @__PURE__ */ r(D, { icon: O1 }),
            size: "sm"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ r(ed, { children: /* @__PURE__ */ r(F0, {}) }),
    /* @__PURE__ */ m(Q0, { children: [
      /* @__PURE__ */ r(J0, {}),
      /* @__PURE__ */ r(u0, {}),
      i,
      /* @__PURE__ */ r(D0, {})
    ] })
  ] });
}, X0 = W("Header", q0), Y0 = v.div``, Q0 = v.div`
  justify-content: flex-end;
`, ed = v.div`
  justify-content: center;
  flex: 0;
`, td = v.div`
  display: flex;
  padding: 10px 15px;
  gap: 10px;

  & > * {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px
  }
`, nd = ({
  children: e,
  placement: t = "left",
  hideCollapsed: n = !0,
  className: o,
  onCollapse: i,
  ...s
}) => {
  var h;
  const a = y(), c = !!((h = a.openedPanels) != null && h.includes(t)), l = !c, d = () => a.setPanelVisible(t, !c), u = t === "right" ? "autoHorizontal" : "auto";
  return /* @__PURE__ */ m(Ro, { className: G(o, t, { collapsed: l }), ...s, children: [
    /* @__PURE__ */ r(qn, { value: u, children: /* @__PURE__ */ r(od, { className: G({ collapsed: l, hideCollapsed: n }), children: e }) }),
    /* @__PURE__ */ r(rd, { className: G(t, { collapsed: l }), onClick: d, children: /* @__PURE__ */ r(ct, { className: "icon" }) })
  ] });
}, Fo = b("Panel", nd), Pt = "200ms ease-in-out", od = v.div`
  min-height: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  transition: opacity ${Pt}, width 0ms 200ms;

  .right &, .left & {
    width: 280px;
    overflow: hidden;
  }

  &.collapsed.hideCollapsed {
    opacity: 0;

    .right &, .left & {
      width: 0;
    }
  }
`, rd = v.div`
  position: absolute;
  display: flex;
  overflow: hidden;
  align-items: center;
  cursor: pointer;
  border-radius: 20px;

  .icon {
    font-size: 2em;
    opacity: 0.6;
    position: absolute;
  }

  &.right, &.left {
    width: 20px;
    height: 80px;
    inset-block-start: 50%;
    transform: translateY(-50%);

    .icon {
      inset-inline-end: -5px;
    }
  }

  &.bottom {
    left: 50%;
    width: 80px;
    height: 20px;
    justify-content: center;
    inset-block-start: -10px;
    transform: translateX(-50%);

    .icon {
      inset-block-end: -5px;
    }
  }

  &.left {
    inset-inline-end: -15px;

    .icon {
      transform: rotate(90deg);
    }
  }

  &.right {
    inset-inline-start: -15px;

    .icon {
      transform: rotate(-90deg);
    }
  }


  &.collapsed {
    &.left .icon {
      transform: rotate(-90deg);
    }

    &.right .icon {
      transform: rotate(90deg);
    }

    &.bottom .icon {
      transform: rotate(180deg);
    }
  }
`, Ro = v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 5px;
  transition: width ${Pt}, height ${Pt};

  &.right, &.left {
    max-height: 1200px;
    width: 290px;
  }

  &.right {
    box-shadow: none;
  }

  &.bottom {
    height: 380px;
    width: 100%;
    margin-block: 0;
  }

  &.collapsed {
    &.right, &.left {
      width: ${(e) => e.collapsedSize ?? 5}px;
    }

    &.bottom {
      height: ${(e) => e.collapsedSize ?? 5}px;
    }
  }
`, id = (e) => {
  const t = y(), { formLoadError: n } = $(), { viewMode: o, landscapeMode: i, builderMode: s } = t, a = yr(), { t: c } = P(), l = s === "builder" ? o2 : void 0, d = p((C, f) => t2(t, C, f), [t]), u = s === "builder" ? d : void 0, h = E(() => ({ builderMode: s, translate: c }), [s, c]);
  return /* @__PURE__ */ m(ad, { ...e, children: [
    /* @__PURE__ */ r(X0, {}),
    /* @__PURE__ */ r(cd, { className: G(o, s, { landscapeMode: i, withForm: !n }), children: /* @__PURE__ */ r(xr, { value: h, children: /* @__PURE__ */ r(a0, { children: /* @__PURE__ */ r(
      kr,
      {
        ...a,
        componentWrapper: l,
        viewMode: o,
        computeChildren: u,
        formName: t.activeFormName
      }
    ) }) }) })
  ] });
}, sd = W("CentralPanel", id), ad = v.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  min-width: 550px;
`, cd = oe("FormContainer", v(Ro)`
  flex: 1;
  z-index: 4;
  flex-direction: column;
  width: initial;
  margin-inline: 15px;
  overflow: auto;
  transition: max-width .2s ease, max-height .2s ease, border-radius .2s ease;
  
  &.withForm {
    padding: 12px;
    border: 2px solid var(--rs-gray-500);
    border-radius: 10px;
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 15%);
    background-color: #ffffffa1;

    .rs-theme-dark & {
      background-color: #414549;
    }
  }

  &.mobile {
    width: 400px;
    max-height: 800px;
    align-self: center;

    &.landscapeMode {
      width: 800px;
      max-height: 400px;
    }
  }

  &.tablet {
    width: 800px;
    max-height: 1200px;
    align-self: center;

    &.landscapeMode {
      width: 1200px;
      max-height: 800px;
    }
  }
`), Vo = ({ style: e, className: t, onChange: n }) => {
  const [o, i] = A(""), s = o.length ? se : l1, { t: a } = P(), c = p(() => i(""), []);
  return M(() => n(o), [n, o]), /* @__PURE__ */ m(Y, { className: t, inside: !0, size: "sm", style: e, children: [
    /* @__PURE__ */ r(
      ne,
      {
        onChange: i,
        placeholder: a("searchForm.search"),
        value: o,
        autoFocus: !0
      }
    ),
    /* @__PURE__ */ r(Y.Addon, { style: { cursor: "pointer" }, onClick: c, children: /* @__PURE__ */ r(s, {}) })
  ] });
}, ld = (e) => {
  const t = y(), n = T("componentsList.categories"), { filter: o, ...i } = e, s = o ? (l) => l.name.toLowerCase().includes(o.toLowerCase()) : (l) => !0, a = {};
  t.builderComponents.forEach((l) => {
    if (!s(l.model))
      return;
    const d = l.category || "", u = a[d] ?? [];
    u.push(l.model), a[d] = u.sort((h, C) => h.name.localeCompare(C.name));
  });
  const c = [];
  for (const l in a)
    c.push(
      /* @__PURE__ */ m("div", { children: [
        /* @__PURE__ */ r(Bo, { children: n(l) || l }),
        /* @__PURE__ */ r(hd, { definitions: a[l], ...i })
      ] }, l)
    );
  return c.length === 0 ? null : /* @__PURE__ */ r(Cd, { children: c });
}, dd = b("ControlGroups", ld), zo = (e) => {
  const t = T("toolbar"), [n, o] = A(), i = /* @__PURE__ */ r(dd, { ...e, filter: n });
  return /* @__PURE__ */ m("div", { className: md, children: [
    /* @__PURE__ */ r(gd, { children: /* @__PURE__ */ r(Vo, { style: { maxWidth: 300 }, onChange: o }) }),
    i || /* @__PURE__ */ r(Bo, { children: t("notFound") })
  ] });
}, ud = ({ definitions: e, ...t }) => {
  const n = y(), o = p((i) => {
    const s = new Ee(`${i.type} ${Lr()}`, i.type), a = n.getComponentMetadata(i.type);
    if (a.initialJson)
      try {
        const c = JSON.parse(a.initialJson);
        Object.assign(s, c);
      } catch (c) {
        console.warn(`Failed to parse initialJson '${a.initialJson}'`, c);
      }
    return n.viewer.createComponentData(s);
  }, [n]);
  return /* @__PURE__ */ r(pd, { children: e.map((i) => {
    const s = o(i);
    return /* @__PURE__ */ r(ze, { value: s, children: /* @__PURE__ */ r(o0, { ...t }) }, s.id);
  }) });
}, hd = b("AddedComponents", ud), md = it`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 0;
`, pd = v.div`
  display: flex;
  flex-flow: wrap;
  gap: 4px;
  margin-top: 2px;
`, gd = v.div`
  display: flex;
  flex: 0;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  padding-inline-start: 4px;

  > * {
    flex: 1;
  }
`, Bo = v.label`
  padding-inline: 4px;
  font-size: 16px;
`, Cd = v.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding-inline: 4px 2px;
  overflow-y: auto;
`, fd = () => {
  const { componentsModalState: e } = y(), t = T("componentsModal"), n = p(() => e.opened = !1, [e]), o = p((i) => {
    e.opened && (n(), e.onSelect(i));
  }, [n, e]);
  return /* @__PURE__ */ m(wd, { open: e.opened, onClose: n, size: "lg", children: [
    /* @__PURE__ */ r(Z.Header, { children: /* @__PURE__ */ r("h5", { children: t("clickToAdd") }) }),
    /* @__PURE__ */ r(Z.Body, { children: /* @__PURE__ */ r(zo, { draggable: !1, onAdd: o }) })
  ] });
}, vd = b("ComponentsModal", fd), wd = v(Z)`
  width: 825px !important;

  .rs-modal-content {
    background-color: var(--rs-btn-default-bg);
  }

  .rs-modal-body {
    margin-top: initial !important;
    padding-top: 20px;
    padding-bottom: 0;
  }
`, bd = () => {
  const e = $(), { t } = P(), n = e.form.componentTree.errors, o = e.form.componentTree.data;
  return /* @__PURE__ */ m(F, { children: [
    /* @__PURE__ */ m(wn, { children: [
      /* @__PURE__ */ r("h6", { children: t("errorsPanel.data") }),
      bn(o)
    ] }),
    /* @__PURE__ */ m(wn, { children: [
      /* @__PURE__ */ r("h6", { children: t("errorsPanel.errors") }),
      bn(n)
    ] })
  ] });
}, wn = v.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;

  pre {
    white-space: pre-wrap;
    margin-top: 5px;
    max-width: 100%;
    word-break: break-word;
    overflow: auto;
  }
`, yd = b("FormState", bd), bn = (e) => /* @__PURE__ */ r("pre", { children: JSON.stringify(et(e, { previewNativeObjects: !0 }), null, 2) }), xd = v.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:first-of-type {
    margin-bottom: 2px;
  }

  & label {
      //color: ${(e) => e.color ?? "var(--rs-btn-default-text)"};
  }
`, Io = (e, t, n, o, i) => {
  const s = oe(t, kd);
  return /* @__PURE__ */ r(s, { eventKey: e, color: i == null ? void 0 : i.color, as: "div", children: /* @__PURE__ */ m(xd, { children: [
    o && /* @__PURE__ */ r(D, { icon: o, size: 1.2, ...i, color: void 0 }),
    /* @__PURE__ */ r("label", { children: n })
  ] }) });
}, kd = v(Vn.Item)`
  &:hover, &:active, &:focus, &.rs-nav-item-active {
    color: ${(e) => e.color} !important;
  }

  &:before {
    border-radius: 2px;
    height: 3px !important;
    margin: 0 12px;
    background-color: ${(e) => e.color} !important;
  }
`, Do = v(Vn)`
  margin-bottom: 10px;
  display: flex;
  justify-content: center;

  .rs-nav-item {
    border-radius: 15px;
  }
`;
function Ld({ active: e, onLoadForm: t, onRemoveForm: n, name: o }) {
  const i = E(() => ({ color: e ? "var(--rs-navs-selected)" : "var(--rs-text-secondary)" }), [e]), s = p(() => {
    t(o);
  }, [o, t]), a = p(() => {
    n(o);
  }, [o, n]);
  return /* @__PURE__ */ m(Te, { children: [
    /* @__PURE__ */ r("span", { style: i, children: o }),
    /* @__PURE__ */ m(ie, { children: [
      /* @__PURE__ */ r(Ot, { onClick: s }),
      /* @__PURE__ */ r(ut, { onClick: a })
    ] })
  ] });
}
const Sd = (e) => {
  const t = y(), [n, o] = A([]), [i, s] = A(""), { t: a } = P(), c = We(), l = p((w) => {
    console.error(w), c({ type: "error", message: w });
  }, [c]), d = p(() => {
    t.getFormKeys().then(o);
  }, [t]), u = p((w) => {
    t.loadForm(w, d, l);
  }, [t, l, d]), h = p((w) => {
    t.removeForm(w, d);
  }, [t, d]), C = To(d);
  M(() => {
    d();
  }, [t.lastSaveTime, d]);
  const f = E(
    () => n.filter((w) => w.toLowerCase().includes(i.toLowerCase())),
    [n, i]
  );
  return /* @__PURE__ */ m(jt, { ...e, children: [
    /* @__PURE__ */ r(Vo, { style: { maxWidth: 300 }, onChange: s }),
    /* @__PURE__ */ r(Te, { children: /* @__PURE__ */ r(H, { block: !0, onClick: C, children: a("formsList.addNewForm") }) }),
    f.length ? f.map((w, x) => /* @__PURE__ */ r(Ld, { active: w === t.formName, name: w, onLoadForm: u, onRemoveForm: h }, x)) : /* @__PURE__ */ r(Te, { children: a("formsList.noFormsInFormStorage") })
  ] });
}, Md = W("Forms_Tab_Content", Sd), Ed = () => {
  const e = y(), t = $(), { t: n } = P(), o = Object.entries(t.form.actions).map(([i, s]) => {
    const a = { name: i, actionDefinition: s };
    return /* @__PURE__ */ m(Te, { children: [
      /* @__PURE__ */ r("span", { children: i }),
      /* @__PURE__ */ m(ie, { children: [
        /* @__PURE__ */ r(Ot, { onClick: () => e.editCodeAction(a) }),
        /* @__PURE__ */ r(Xi, { onClick: () => t.form.cloneAction(a) }),
        /* @__PURE__ */ r(ut, { onClick: () => t.form.removeAction(i) })
      ] })
    ] }, i);
  });
  return /* @__PURE__ */ m(j, { children: [
    /* @__PURE__ */ r(H, { block: !0, onClick: () => e.addCodeAction(), children: n("actions.addCodeAction") }),
    /* @__PURE__ */ r(jt, { children: o })
  ] });
}, Ad = b("ActionList", Ed), Td = () => {
  const e = $(), t = y(), n = p((C) => e.form.errorType = C, [e]), o = p(() => e.form.errorType = void 0, [e]), i = p(() => {
  }, []), s = p(() => {
  }, []), a = p(() => "", []), c = p(() => {
  }, []), l = p(() => !1, []), d = t.view.errors, u = En(...d).default(d[0]).calculable(!1).notLocalize.withEditorProps({
    creatable: !1
  }).build("errorType"), h = {
    value: e.form.errorType,
    onChange: n,
    onClean: o,
    annotation: u,
    componentData: t.viewer.form.componentTree,
    disableCompute: i,
    setComputeCode: s,
    getComputeCode: a,
    getComputeType: c,
    hasComputeCode: l
  };
  return /* @__PURE__ */ r(Ut, { ...h });
}, Pd = b("ErrorComponentPicker", Td), Fd = () => {
  const { t: e } = P(), t = y(), [n, o] = A(!1), [i, s] = A("Error message example!"), a = n ? i : void 0;
  M(() => (t.viewer.form.componentTree.setAllErrors(a), () => t.viewer.form.componentTree.setAllErrors()), [a, t.viewer.form.componentTree]);
  const c = Sr(), l = t.view.getErrorAnnotations(c.type), d = (l == null ? void 0 : l.map((h) => Object.assign(h, { localizable: !1, calculable: !1 }))) ?? [], u = t.viewer.form.errorProps;
  return /* @__PURE__ */ m("div", { children: [
    e("annotation.errorConfig.show"),
    ": ",
    /* @__PURE__ */ r(nt, { onChange: (h, C) => o(C), checked: n }),
    n && /* @__PURE__ */ r(ne, { style: { marginTop: 4, marginBottom: 4 }, onChange: s, value: i }),
    /* @__PURE__ */ r(Pd, {}),
    /* @__PURE__ */ r(ze, { value: t.viewer.form.componentTree, children: /* @__PURE__ */ r(fe, { annotations: d, context: u }) })
  ] });
}, Rd = b("ErrorSettings", Fd), Vd = () => {
  const e = y(), t = $(), n = e.formAvailableLanguages, o = E(() => {
    const C = n.map((w) => w.fullCode), f = n.map((w) => w.name);
    return En(...C).labeled(...f).default(e.defaultLanguage.fullCode).notLocalize.calculable(!1).withEditorProps({
      placement: "auto"
    }).build("defaultLanguage");
  }, [n, e.defaultLanguage]), i = p((C) => {
    const f = n.find((w) => w.fullCode === C);
    f && (t.form.defaultLanguage = f);
  }, [n, t.form]), s = p(
    () => t.form.defaultLanguage = e.defaultLanguage,
    [t, e]
  ), a = p(() => {
  }, []), c = p(() => {
  }, []), l = p(() => "", []), d = p(() => {
  }, []), u = p(() => !1, []), h = {
    onChange: i,
    value: t.form.defaultLanguage.fullCode,
    componentData: e.viewer.form.componentTree,
    onClean: s,
    annotation: o,
    disableCompute: a,
    setComputeCode: c,
    getComputeCode: l,
    getComputeType: d,
    hasComputeCode: u
  };
  return /* @__PURE__ */ r(ze, { value: e.viewer.form.componentTree, children: /* @__PURE__ */ r(Ut, { ...h }) });
}, zd = b("FormLanguageSettings", Vd), Bd = (e) => {
  const { value: t, onChange: n, onClean: o } = e, i = y(), s = Vt(), a = i.view.tooltips.map((c) => ({
    value: c,
    label: Dn(c)
  }));
  return /* @__PURE__ */ r(N, { ...e, children: /* @__PURE__ */ r(
    Dd,
    {
      value: t ?? s ?? "",
      data: a,
      onChange: n,
      onClean: o,
      block: !0,
      cleanable: !0,
      size: "xs",
      placement: "auto"
    }
  ) });
}, Id = b("TooltipTypePicker", Bd), Dd = v(Ie)`
  width: 100%;
`, Hd = () => {
  const e = y(), t = p((d) => e.viewer.form.tooltipType = d, [e]), n = p(() => e.viewer.form.tooltipType = void 0, [e]), o = p(() => {
  }, []), i = p(() => {
  }, []), s = p(() => "", []), a = p(() => {
  }, []), c = p(() => !1, []), l = {
    onChange: t,
    value: e.viewer.form.tooltipType,
    componentData: e.viewer.form.componentTree,
    onClean: n,
    annotation: Mr.calculable(!1).notLocalize.build("tooltipType"),
    disableCompute: o,
    setComputeCode: i,
    getComputeCode: s,
    getComputeType: a,
    hasComputeCode: c
  };
  return /* @__PURE__ */ r("div", { children: /* @__PURE__ */ r(ze, { value: e.viewer.form.componentTree, children: /* @__PURE__ */ r(Id, { ...l }) }) });
}, $d = b("TooltipSettings", Hd), Nd = (e) => {
  const t = T("leftPanel.formSettings");
  return /* @__PURE__ */ m("div", { ...e, children: [
    /* @__PURE__ */ r(Je, { marginTop: 0, children: t("actions") }),
    /* @__PURE__ */ r(Ad, {}),
    /* @__PURE__ */ r(Je, { children: t("error") }),
    /* @__PURE__ */ r(Rd, {}),
    /* @__PURE__ */ r(Je, { children: t("tooltip") }),
    /* @__PURE__ */ r($d, {}),
    /* @__PURE__ */ r(Je, { children: t("language") }),
    /* @__PURE__ */ r(zd, {})
  ] });
}, jd = W("Settings_Tab_Content", Nd), Je = v.label`
  padding-inline: 4px;
  font-size: 16px;
  font-weight: bold;
  margin-top: ${({ marginTop: e }) => e ?? "24"}px;
`, Od = { overflow: "hidden", flex: 1 }, Wd = (e) => {
  const { t } = P(), n = y(), { componentTree: o } = n.viewer.form, i = E(() => [o], [o]), s = E(
    () => ({ componentWrapper: h2, view: n.view }),
    [n.view]
  ), a = p(() => n.expandAll(), [n]), c = p(() => n.collapseAll(), [n]);
  return M(() => {
    n.expanded.add(o);
  }, [n.expanded, o]), /* @__PURE__ */ m(j, { gap: 0, style: Od, ...e, children: [
    /* @__PURE__ */ m(re, { children: [
      /* @__PURE__ */ m(yn, { onClick: a, size: "sm", appearance: "subtle", children: [
        /* @__PURE__ */ r(d1, {}),
        t("tree.expand")
      ] }),
      /* @__PURE__ */ m(yn, { onClick: c, size: "sm", appearance: "subtle", children: [
        /* @__PURE__ */ r(u1, {}),
        t("tree.collapse")
      ] })
    ] }),
    /* @__PURE__ */ r(Ud, { children: /* @__PURE__ */ r(Mn, { value: s, children: /* @__PURE__ */ r(Xe, { data: i }) }) })
  ] });
}, Zd = W("Tree_Tab_Content", Wd), Ud = v.div`
  display: flex;
  overflow: auto;
`, yn = v(H)`
  display: flex !important;
  align-items: center;
  gap: 10px;
`, _d = oe("LeftPanel_Nav", Do), Jd = oe("LeftPanel_Content", j), Kd = oe("Components_Tab_Content", zo), Gd = (e) => {
  const t = y(), n = p((o) => {
    const i = t.viewer.form.componentTree, s = t.selected.values().next().value ?? i, a = i === s ? "inner" : "after";
    t.add(o, s, a);
  }, [t]);
  return /* @__PURE__ */ r(Kd, { ...e, draggable: !0, onDoubleClick: n });
}, Kt = {
  components: [/* @__PURE__ */ r(Gd, {}), "Components_Tab", Y1, "var(--rs-green-600)"],
  tree: [/* @__PURE__ */ r(Zd, {}), "Tree_Tab", Q1, "var(--rs-navs-selected)"],
  settings: [/* @__PURE__ */ r(jd, {}), "Settings_Tab", ei, "violet"],
  forms: [/* @__PURE__ */ r(Md, {}), "Forms_Tab", X1, "#f67f1f"]
}, Ke = (e) => {
  const { t } = P();
  return E(() => {
    const n = t("leftPanel.sectionName." + e), [o, i, s, a] = Kt[e];
    return Io(e, i, n, s, { color: a });
  }, [t, e]);
}, Ho = "leftPanelActiveTab", qd = (e) => {
  localStorage.setItem(Ho, e);
}, Xd = () => {
  const e = "components", t = localStorage.getItem(Ho) ?? e;
  return Kt[t] ? t : e;
}, Yd = () => {
  const { formStorageEnabled: e } = y(), [t, n] = A(Xd()), o = Ke("components"), i = Ke("tree"), s = Ke("settings"), a = Ke("forms"), c = p((l) => {
    n(l), qd(l);
  }, []);
  return /* @__PURE__ */ m(F, { children: [
    /* @__PURE__ */ m(_d, { appearance: "subtle", activeKey: t, onSelect: c, children: [
      o,
      i,
      s,
      e && a
    ] }),
    /* @__PURE__ */ r(Jd, { style: { minHeight: 0, overflow: "auto", padding: 4 }, children: Kt[t][0] })
  ] });
}, Qd = b("LeftPanelNav", Yd), e9 = () => /* @__PURE__ */ r(j, { style: { marginTop: 55, paddingInlineStart: 5, minHeight: 80 }, children: /* @__PURE__ */ r(yd, {}) }), t9 = {
  builder: /* @__PURE__ */ r(Qd, {}),
  viewer: /* @__PURE__ */ r(e9, {})
}, n9 = (e) => {
  const t = y(), n = t9[t.builderMode];
  return /* @__PURE__ */ r(Fo, { ...e, placement: "left", children: n });
}, o9 = W("LeftPanel", n9), r9 = { height: 60 }, i9 = () => {
  var C;
  const t = y().promptModalState, n = T("promptDialog"), o = t.okText || n("ok"), i = t.cancelText || n("cancel"), s = !!((C = t.value) != null && C.trim()) && !t.errorMessage, a = p(() => t.opened = !1, [t]), c = p(() => {
    var f;
    a(), (f = t.onClose) == null || f.call(t);
  }, [a, t]), l = p(() => {
    a(), t.onOk(t.value);
  }, [a, t]), d = p(() => {
    var f;
    a(), (f = t.onCancel) == null || f.call(t);
  }, [a, t]), u = p((f) => {
    var w, x;
    t.value = f, (x = (w = t.validate) == null ? void 0 : w.call(t, f)) == null || x.then((k) => {
      t.errorMessage = k;
    });
  }, [t]), h = p(({ key: f }) => {
    switch (f) {
      case "Escape":
        d();
        break;
      case "Enter":
        s && l();
        break;
    }
  }, [d, l, s]);
  return /* @__PURE__ */ m(Z, { backdrop: t.backdrop, keyboard: !0, open: t.opened, onClose: c, children: [
    /* @__PURE__ */ r(Z.Header, { children: /* @__PURE__ */ r(Z.Title, { children: t.title }) }),
    /* @__PURE__ */ r(Z.Body, { children: /* @__PURE__ */ m(te, { style: r9, fluid: !0, children: [
      /* @__PURE__ */ r(
        ne,
        {
          placeholder: t.placeholder,
          autoFocus: !0,
          onKeyDown: h,
          value: t.value,
          onChange: u
        }
      ),
      /* @__PURE__ */ r(te.ErrorMessage, { show: !!t.errorMessage, children: t.errorMessage })
    ] }) }),
    /* @__PURE__ */ m(Z.Footer, { children: [
      /* @__PURE__ */ r(H, { onClick: l, appearance: "primary", active: !0, disabled: !s, children: o }),
      /* @__PURE__ */ r(H, { onClick: d, appearance: "subtle", children: i })
    ] })
  ] });
}, s9 = b("PromptDialog", i9), a9 = {
  [I.Main]: ["Main_Tab", ni, "var(--rs-navs-selected)"],
  [I.Style]: ["Style_Tab", Kn, "#f67f1f"],
  [I.Actions]: ["Actions_Tab", ti, "violet"],
  [I.Rules]: ["Rules_Tab", oi, "var(--rs-green-600)"]
}, Ge = (e) => {
  const { t } = P();
  return E(() => {
    const n = t("propertiesEditor.sectionName." + e), [o, i, s] = a9[e];
    return Io(e, o, n, i, { color: s });
  }, [t, e]);
}, c9 = ({ activeTab: e, setActiveTab: t, ...n }) => /* @__PURE__ */ m(Do, { activeKey: e, onSelect: t, appearance: "subtle", ...n, children: [
  Ge(I.Main),
  Ge(I.Style),
  Ge(I.Actions),
  Ge(I.Rules)
] }), l9 = W("RightPanel_Nav", c9), d9 = {
  [I.Main]: !0,
  [I.Style]: !0,
  [I.Actions]: !0,
  [I.Rules]: !0
}, $o = "propertiesActiveTab", u9 = (e) => {
  localStorage.setItem($o, e);
}, h9 = () => {
  const e = I.Main, t = localStorage.getItem($o) ?? e;
  return d9[t] ? t : e;
}, m9 = () => {
  const [e, t] = A(h9()), n = p((o) => {
    t(o), u9(o);
  }, []);
  return /* @__PURE__ */ m(g9, { children: [
    /* @__PURE__ */ r(l9, { activeTab: e, setActiveTab: n }),
    /* @__PURE__ */ r(Ma, { activeTab: e })
  ] });
}, p9 = b("PropertiesEditor", m9), g9 = v.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  flex: 1;

  .placement-left .rs-popover {
    margin-left: -14px;
  }
`, C9 = {
  builder: /* @__PURE__ */ r(p9, {}),
  viewer: null
}, f9 = (e) => {
  const t = y(), n = C9[t.builderMode];
  return /* @__PURE__ */ r(Fo, { ...e, placement: "right", children: n });
}, v9 = W("RightPanel", f9), w9 = (e) => /* @__PURE__ */ r(Al, { props: e, children: /* @__PURE__ */ r(y9, {}) }), o5 = b("FormBuilder", w9), b9 = (e) => /* @__PURE__ */ r(Er, { children: /* @__PURE__ */ r(Fr, { fallback: /* @__PURE__ */ r(Or, { center: !0, content: "loading" }), children: /* @__PURE__ */ m(x9, { children: [
  /* @__PURE__ */ m(k9, { ...e, children: [
    /* @__PURE__ */ r(o9, {}),
    /* @__PURE__ */ r(sd, {}),
    /* @__PURE__ */ r(v9, {}),
    /* @__PURE__ */ r(vd, {}),
    /* @__PURE__ */ r(s9, {})
  ] }),
  /* @__PURE__ */ r(ol, {})
] }) }) }), y9 = W("MainContainer", b9), x9 = v.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  background-color: white;

  .rs-theme-dark & {
    background-color: #303336;
  }
`, k9 = v.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  min-height: 0;
  padding-bottom: 15px;
`;
export {
  ci as ActionCell,
  s5 as BuilderView,
  n5 as CheckCell,
  Ht as EditableTable,
  o5 as FormBuilder,
  si as InputCell,
  Ne as SCell,
  ai as SelectCell,
  $t as makeColumns
};
//# sourceMappingURL=index.js.map
