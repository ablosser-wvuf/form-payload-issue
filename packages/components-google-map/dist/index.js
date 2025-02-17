import * as ae from "react/jsx-runtime";
import * as j from "react";
import { forwardRef as _r, useContext as Pr, useState as q, useRef as ir, useEffect as Ce, useCallback as F, useMemo as Je } from "react";
import { useComponentData as $r, define as Tr, number as ze, string as K, oneOf as re, boolean as pe, array as Ar, event as te, cssSize as Qe, useBuilderContext as Rr } from "@react-form-builder/core";
import { useMapsLibrary as cr, useMap as Ir, MapControl as Or, InfoWindow as Nr, useAdvancedMarkerRef as Lr, AdvancedMarker as Fr, Map as Dr, APIProvider as zr } from "@vis.gl/react-google-maps";
import Se from "@emotion/styled";
var Wr = !1;
function Yr(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Br(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Gr = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var a;
      n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, a), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? !Wr : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Br(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = Yr(o);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), N = "-ms-", xe = "-moz-", v = "-webkit-", fr = "comm", Ve = "rule", Ue = "decl", jr = "@import", lr = "@keyframes", qr = "@layer", Hr = Math.abs, Ee = String.fromCharCode, Vr = Object.assign;
function Ur(e, r) {
  return O(e, 0) ^ 45 ? (((r << 2 ^ O(e, 0)) << 2 ^ O(e, 1)) << 2 ^ O(e, 2)) << 2 ^ O(e, 3) : 0;
}
function ur(e) {
  return e.trim();
}
function Kr(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function b(e, r, t) {
  return e.replace(r, t);
}
function Be(e, r) {
  return e.indexOf(r);
}
function O(e, r) {
  return e.charCodeAt(r) | 0;
}
function se(e, r, t) {
  return e.slice(r, t);
}
function Y(e) {
  return e.length;
}
function Ke(e) {
  return e.length;
}
function ye(e, r) {
  return r.push(e), e;
}
function Zr(e, r) {
  return e.map(r).join("");
}
var we = 1, J = 1, dr = 0, L = 0, T = 0, Q = "";
function ke(e, r, t, n, o, a, c) {
  return { value: e, root: r, parent: t, type: n, props: o, children: a, line: we, column: J, length: c, return: "" };
}
function ne(e, r) {
  return Vr(ke("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Jr() {
  return T;
}
function Qr() {
  return T = L > 0 ? O(Q, --L) : 0, J--, T === 10 && (J = 1, we--), T;
}
function D() {
  return T = L < dr ? O(Q, L++) : 0, J++, T === 10 && (J = 1, we++), T;
}
function G() {
  return O(Q, L);
}
function ve() {
  return L;
}
function fe(e, r) {
  return se(Q, e, r);
}
function ie(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function mr(e) {
  return we = J = 1, dr = Y(Q = e), L = 0, [];
}
function hr(e) {
  return Q = "", e;
}
function be(e) {
  return ur(fe(L - 1, Ge(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Xr(e) {
  for (; (T = G()) && T < 33; )
    D();
  return ie(e) > 2 || ie(T) > 3 ? "" : " ";
}
function et(e, r) {
  for (; --r && D() && !(T < 48 || T > 102 || T > 57 && T < 65 || T > 70 && T < 97); )
    ;
  return fe(e, ve() + (r < 6 && G() == 32 && D() == 32));
}
function Ge(e) {
  for (; D(); )
    switch (T) {
      case e:
        return L;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ge(T);
        break;
      case 40:
        e === 41 && Ge(e);
        break;
      case 92:
        D();
        break;
    }
  return L;
}
function rt(e, r) {
  for (; D() && e + T !== 47 + 10; )
    if (e + T === 42 + 42 && G() === 47)
      break;
  return "/*" + fe(r, L - 1) + "*" + Ee(e === 47 ? e : D());
}
function tt(e) {
  for (; !ie(G()); )
    D();
  return fe(e, L);
}
function nt(e) {
  return hr(ge("", null, null, null, [""], e = mr(e), 0, [0], e));
}
function ge(e, r, t, n, o, a, c, f, l) {
  for (var d = 0, m = 0, u = c, $ = 0, S = 0, g = 0, h = 1, M = 1, p = 1, _ = 0, y = "", k = o, i = a, A = n, E = y; M; )
    switch (g = _, _ = D()) {
      case 40:
        if (g != 108 && O(E, u - 1) == 58) {
          Be(E += b(be(_), "&", "&\f"), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += be(_);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += Xr(g);
        break;
      case 92:
        E += et(ve() - 1, 7);
        continue;
      case 47:
        switch (G()) {
          case 42:
          case 47:
            ye(ot(rt(D(), ve()), r, t), l);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * h:
        f[d++] = Y(E) * p;
      case 125 * h:
      case 59:
      case 0:
        switch (_) {
          case 0:
          case 125:
            M = 0;
          case 59 + m:
            p == -1 && (E = b(E, /\f/g, "")), S > 0 && Y(E) - u && ye(S > 32 ? er(E + ";", n, t, u - 1) : er(b(E, " ", "") + ";", n, t, u - 2), l);
            break;
          case 59:
            E += ";";
          default:
            if (ye(A = Xe(E, r, t, d, m, o, f, y, k = [], i = [], u), a), _ === 123)
              if (m === 0)
                ge(E, r, A, A, k, a, u, f, i);
              else
                switch ($ === 99 && O(E, 3) === 110 ? 100 : $) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ge(e, A, A, n && ye(Xe(e, A, A, 0, 0, o, f, y, o, k = [], u), i), o, i, u, f, n ? k : i);
                    break;
                  default:
                    ge(E, A, A, A, [""], i, 0, f, i);
                }
        }
        d = m = S = 0, h = p = 1, y = E = "", u = c;
        break;
      case 58:
        u = 1 + Y(E), S = g;
      default:
        if (h < 1) {
          if (_ == 123)
            --h;
          else if (_ == 125 && h++ == 0 && Qr() == 125)
            continue;
        }
        switch (E += Ee(_), _ * h) {
          case 38:
            p = m > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            f[d++] = (Y(E) - 1) * p, p = 1;
            break;
          case 64:
            G() === 45 && (E += be(D())), $ = G(), m = u = Y(y = E += tt(ve())), _++;
            break;
          case 45:
            g === 45 && Y(E) == 2 && (h = 0);
        }
    }
  return a;
}
function Xe(e, r, t, n, o, a, c, f, l, d, m) {
  for (var u = o - 1, $ = o === 0 ? a : [""], S = Ke($), g = 0, h = 0, M = 0; g < n; ++g)
    for (var p = 0, _ = se(e, u + 1, u = Hr(h = c[g])), y = e; p < S; ++p)
      (y = ur(h > 0 ? $[p] + " " + _ : b(_, /&\f/g, $[p]))) && (l[M++] = y);
  return ke(e, r, t, o === 0 ? Ve : f, l, d, m);
}
function ot(e, r, t) {
  return ke(e, r, t, fr, Ee(Jr()), se(e, 2, -2), 0);
}
function er(e, r, t, n) {
  return ke(e, r, t, Ue, se(e, 0, n), se(e, n + 1, -1), n);
}
function Z(e, r) {
  for (var t = "", n = Ke(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function at(e, r, t, n) {
  switch (e.type) {
    case qr:
      if (e.children.length)
        break;
    case jr:
    case Ue:
      return e.return = e.return || e.value;
    case fr:
      return "";
    case lr:
      return e.return = e.value + "{" + Z(e.children, n) + "}";
    case Ve:
      e.value = e.props.join(",");
  }
  return Y(t = Z(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function st(e) {
  var r = Ke(e);
  return function(t, n, o, a) {
    for (var c = "", f = 0; f < r; f++)
      c += e[f](t, n, o, a) || "";
    return c;
  };
}
function it(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function ct(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var ft = function(r, t, n) {
  for (var o = 0, a = 0; o = a, a = G(), o === 38 && a === 12 && (t[n] = 1), !ie(a); )
    D();
  return fe(r, L);
}, lt = function(r, t) {
  var n = -1, o = 44;
  do
    switch (ie(o)) {
      case 0:
        o === 38 && G() === 12 && (t[n] = 1), r[n] += ft(L - 1, t, n);
        break;
      case 2:
        r[n] += be(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = G() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += Ee(o);
    }
  while (o = D());
  return r;
}, ut = function(r, t) {
  return hr(lt(mr(r), t));
}, rr = /* @__PURE__ */ new WeakMap(), dt = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !rr.get(n)) && !o) {
      rr.set(r, !0);
      for (var a = [], c = ut(t, a), f = n.props, l = 0, d = 0; l < c.length; l++)
        for (var m = 0; m < f.length; m++, d++)
          r.props[d] = a[l] ? c[l].replace(/&\f/g, f[m]) : f[m] + " " + c[l];
    }
  }
}, mt = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function pr(e, r) {
  switch (Ur(e, r)) {
    case 5103:
      return v + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return v + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return v + e + xe + e + N + e + e;
    case 6828:
    case 4268:
      return v + e + N + e + e;
    case 6165:
      return v + e + N + "flex-" + e + e;
    case 5187:
      return v + e + b(e, /(\w+).+(:[^]+)/, v + "box-$1$2" + N + "flex-$1$2") + e;
    case 5443:
      return v + e + N + "flex-item-" + b(e, /flex-|-self/, "") + e;
    case 4675:
      return v + e + N + "flex-line-pack" + b(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return v + e + N + b(e, "shrink", "negative") + e;
    case 5292:
      return v + e + N + b(e, "basis", "preferred-size") + e;
    case 6060:
      return v + "box-" + b(e, "-grow", "") + v + e + N + b(e, "grow", "positive") + e;
    case 4554:
      return v + b(e, /([^-])(transform)/g, "$1" + v + "$2") + e;
    case 6187:
      return b(b(b(e, /(zoom-|grab)/, v + "$1"), /(image-set)/, v + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return b(e, /(image-set\([^]*)/, v + "$1$`$1");
    case 4968:
      return b(b(e, /(.+:)(flex-)?(.*)/, v + "box-pack:$3" + N + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + v + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return b(e, /(.+)-inline(.+)/, v + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Y(e) - 1 - r > 6)
        switch (O(e, r + 1)) {
          case 109:
            if (O(e, r + 4) !== 45)
              break;
          case 102:
            return b(e, /(.+:)(.+)-([^]+)/, "$1" + v + "$2-$3$1" + xe + (O(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Be(e, "stretch") ? pr(b(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (O(e, r + 1) !== 115)
        break;
    case 6444:
      switch (O(e, Y(e) - 3 - (~Be(e, "!important") && 10))) {
        case 107:
          return b(e, ":", ":" + v) + e;
        case 101:
          return b(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + v + (O(e, 14) === 45 ? "inline-" : "") + "box$3$1" + v + "$2$3$1" + N + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (O(e, r + 11)) {
        case 114:
          return v + e + N + b(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return v + e + N + b(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return v + e + N + b(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return v + e + N + e + e;
  }
  return e;
}
var ht = function(r, t, n, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Ue:
        r.return = pr(r.value, r.length);
        break;
      case lr:
        return Z([ne(r, {
          value: b(r.value, "@", "@" + v)
        })], o);
      case Ve:
        if (r.length)
          return Zr(r.props, function(a) {
            switch (Kr(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Z([ne(r, {
                  props: [b(a, /:(read-\w+)/, ":" + xe + "$1")]
                })], o);
              case "::placeholder":
                return Z([ne(r, {
                  props: [b(a, /:(plac\w+)/, ":" + v + "input-$1")]
                }), ne(r, {
                  props: [b(a, /:(plac\w+)/, ":" + xe + "$1")]
                }), ne(r, {
                  props: [b(a, /:(plac\w+)/, N + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, pt = [ht], yt = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(h) {
      var M = h.getAttribute("data-emotion");
      M.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || pt, a = {}, c, f = [];
  c = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(h) {
      for (var M = h.getAttribute("data-emotion").split(" "), p = 1; p < M.length; p++)
        a[M[p]] = !0;
      f.push(h);
    }
  );
  var l, d = [dt, mt];
  {
    var m, u = [at, it(function(h) {
      m.insert(h);
    })], $ = st(d.concat(o, u)), S = function(M) {
      return Z(nt(M), $);
    };
    l = function(M, p, _, y) {
      m = _, S(M ? M + "{" + p.styles + "}" : p.styles), y && (g.inserted[p.name] = !0);
    };
  }
  var g = {
    key: t,
    sheet: new Gr({
      key: t,
      container: c,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: a,
    registered: {},
    insert: l
  };
  return g.sheet.hydrate(f), g;
}, je = { exports: {} }, C = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr;
function vt() {
  if (tr)
    return C;
  tr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, $ = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, M = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function y(i) {
    if (typeof i == "object" && i !== null) {
      var A = i.$$typeof;
      switch (A) {
        case r:
          switch (i = i.type, i) {
            case l:
            case d:
            case n:
            case a:
            case o:
            case u:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case f:
                case m:
                case g:
                case S:
                case c:
                  return i;
                default:
                  return A;
              }
          }
        case t:
          return A;
      }
    }
  }
  function k(i) {
    return y(i) === d;
  }
  return C.AsyncMode = l, C.ConcurrentMode = d, C.ContextConsumer = f, C.ContextProvider = c, C.Element = r, C.ForwardRef = m, C.Fragment = n, C.Lazy = g, C.Memo = S, C.Portal = t, C.Profiler = a, C.StrictMode = o, C.Suspense = u, C.isAsyncMode = function(i) {
    return k(i) || y(i) === l;
  }, C.isConcurrentMode = k, C.isContextConsumer = function(i) {
    return y(i) === f;
  }, C.isContextProvider = function(i) {
    return y(i) === c;
  }, C.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === r;
  }, C.isForwardRef = function(i) {
    return y(i) === m;
  }, C.isFragment = function(i) {
    return y(i) === n;
  }, C.isLazy = function(i) {
    return y(i) === g;
  }, C.isMemo = function(i) {
    return y(i) === S;
  }, C.isPortal = function(i) {
    return y(i) === t;
  }, C.isProfiler = function(i) {
    return y(i) === a;
  }, C.isStrictMode = function(i) {
    return y(i) === o;
  }, C.isSuspense = function(i) {
    return y(i) === u;
  }, C.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === n || i === d || i === a || i === o || i === u || i === $ || typeof i == "object" && i !== null && (i.$$typeof === g || i.$$typeof === S || i.$$typeof === c || i.$$typeof === f || i.$$typeof === m || i.$$typeof === M || i.$$typeof === p || i.$$typeof === _ || i.$$typeof === h);
  }, C.typeOf = y, C;
}
var x = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function bt() {
  return nr || (nr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, $ = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, M = e ? Symbol.for("react.fundamental") : 60117, p = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function y(s) {
      return typeof s == "string" || typeof s == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      s === n || s === d || s === a || s === o || s === u || s === $ || typeof s == "object" && s !== null && (s.$$typeof === g || s.$$typeof === S || s.$$typeof === c || s.$$typeof === f || s.$$typeof === m || s.$$typeof === M || s.$$typeof === p || s.$$typeof === _ || s.$$typeof === h);
    }
    function k(s) {
      if (typeof s == "object" && s !== null) {
        var w = s.$$typeof;
        switch (w) {
          case r:
            var I = s.type;
            switch (I) {
              case l:
              case d:
              case n:
              case a:
              case o:
              case u:
                return I;
              default:
                var U = I && I.$$typeof;
                switch (U) {
                  case f:
                  case m:
                  case g:
                  case S:
                  case c:
                    return U;
                  default:
                    return w;
                }
            }
          case t:
            return w;
        }
      }
    }
    var i = l, A = d, E = f, z = c, _e = r, le = m, Pe = n, X = g, ue = S, $e = t, de = a, Te = o, me = u, R = !1;
    function W(s) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), H(s) || k(s) === l;
    }
    function H(s) {
      return k(s) === d;
    }
    function Ae(s) {
      return k(s) === f;
    }
    function V(s) {
      return k(s) === c;
    }
    function he(s) {
      return typeof s == "object" && s !== null && s.$$typeof === r;
    }
    function Re(s) {
      return k(s) === m;
    }
    function ee(s) {
      return k(s) === n;
    }
    function Ie(s) {
      return k(s) === g;
    }
    function Oe(s) {
      return k(s) === S;
    }
    function Ne(s) {
      return k(s) === t;
    }
    function Le(s) {
      return k(s) === a;
    }
    function Fe(s) {
      return k(s) === o;
    }
    function De(s) {
      return k(s) === u;
    }
    x.AsyncMode = i, x.ConcurrentMode = A, x.ContextConsumer = E, x.ContextProvider = z, x.Element = _e, x.ForwardRef = le, x.Fragment = Pe, x.Lazy = X, x.Memo = ue, x.Portal = $e, x.Profiler = de, x.StrictMode = Te, x.Suspense = me, x.isAsyncMode = W, x.isConcurrentMode = H, x.isContextConsumer = Ae, x.isContextProvider = V, x.isElement = he, x.isForwardRef = Re, x.isFragment = ee, x.isLazy = Ie, x.isMemo = Oe, x.isPortal = Ne, x.isProfiler = Le, x.isStrictMode = Fe, x.isSuspense = De, x.isValidElementType = y, x.typeOf = k;
  }()), x;
}
process.env.NODE_ENV === "production" ? je.exports = vt() : je.exports = bt();
var gt = je.exports, yr = gt, Ct = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, xt = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, vr = {};
vr[yr.ForwardRef] = Ct;
vr[yr.Memo] = xt;
var St = !0;
function Et(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var br = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  St === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, wt = function(r, t, n) {
  br(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var a = t;
    do
      r.insert(t === a ? "." + o : "", a, r.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function kt(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var Mt = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, _t = !1, Pt = /[A-Z]|^ms/g, $t = /_EMO_([^_]+?)_([^]*?)_EMO_/g, gr = function(r) {
  return r.charCodeAt(1) === 45;
}, or = function(r) {
  return r != null && typeof r != "boolean";
}, We = /* @__PURE__ */ ct(function(e) {
  return gr(e) ? e : e.replace(Pt, "-$&").toLowerCase();
}), ar = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace($t, function(n, o, a) {
          return B = {
            name: o,
            styles: a,
            next: B
          }, o;
        });
  }
  return Mt[r] !== 1 && !gr(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, Tt = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ce(e, r, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var o = t;
      if (o.anim === 1)
        return B = {
          name: o.name,
          styles: o.styles,
          next: B
        }, o.name;
      var a = t;
      if (a.styles !== void 0) {
        var c = a.next;
        if (c !== void 0)
          for (; c !== void 0; )
            B = {
              name: c.name,
              styles: c.styles,
              next: B
            }, c = c.next;
        var f = a.styles + ";";
        return f;
      }
      return At(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var l = B, d = t(e);
        return B = l, ce(e, r, d);
      }
      break;
    }
  }
  var m = t;
  if (r == null)
    return m;
  var u = r[m];
  return u !== void 0 ? u : m;
}
function At(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += ce(e, r, t[o]) + ";";
  else
    for (var a in t) {
      var c = t[a];
      if (typeof c != "object") {
        var f = c;
        r != null && r[f] !== void 0 ? n += a + "{" + r[f] + "}" : or(f) && (n += We(a) + ":" + ar(a, f) + ";");
      } else {
        if (a === "NO_COMPONENT_SELECTOR" && _t)
          throw new Error(Tt);
        if (Array.isArray(c) && typeof c[0] == "string" && (r == null || r[c[0]] === void 0))
          for (var l = 0; l < c.length; l++)
            or(c[l]) && (n += We(a) + ":" + ar(a, c[l]) + ";");
        else {
          var d = ce(e, r, c);
          switch (a) {
            case "animation":
            case "animationName": {
              n += We(a) + ":" + d + ";";
              break;
            }
            default:
              n += a + "{" + d + "}";
          }
        }
      }
    }
  return n;
}
var sr = /label:\s*([^\s;{]+)\s*(;|$)/g, B;
function Rt(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  B = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    n = !1, o += ce(t, r, a);
  else {
    var c = a;
    o += c[0];
  }
  for (var f = 1; f < e.length; f++)
    if (o += ce(t, r, e[f]), n) {
      var l = a;
      o += l[f];
    }
  sr.lastIndex = 0;
  for (var d = "", m; (m = sr.exec(o)) !== null; )
    d += "-" + m[1];
  var u = kt(o) + d;
  return {
    name: u,
    styles: o,
    next: B
  };
}
var It = function(r) {
  return r();
}, Ot = j["useInsertionEffect"] ? j["useInsertionEffect"] : !1, Nt = Ot || It, Lt = !1, Cr = /* @__PURE__ */ j.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ yt({
    key: "css"
  }) : null
);
Cr.Provider;
var Ft = function(r) {
  return /* @__PURE__ */ _r(function(t, n) {
    var o = Pr(Cr);
    return r(t, o, n);
  });
}, Dt = /* @__PURE__ */ j.createContext({}), Me = {}.hasOwnProperty, qe = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", xr = function(r, t) {
  var n = {};
  for (var o in t)
    Me.call(t, o) && (n[o] = t[o]);
  return n[qe] = r, n;
}, zt = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return br(t, n, o), Nt(function() {
    return wt(t, n, o);
  }), null;
}, Wt = /* @__PURE__ */ Ft(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e[qe], a = [n], c = "";
  typeof e.className == "string" ? c = Et(r.registered, a, e.className) : e.className != null && (c = e.className + " ");
  var f = Rt(a, void 0, j.useContext(Dt));
  c += r.key + "-" + f.name;
  var l = {};
  for (var d in e)
    Me.call(e, d) && d !== "css" && d !== qe && !Lt && (l[d] = e[d]);
  return l.className = c, t && (l.ref = t), /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement(zt, {
    cache: r,
    serialized: f,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ j.createElement(o, l));
}), Sr = Wt, He = ae.Fragment, P = function(r, t, n) {
  return Me.call(t, "css") ? ae.jsx(Sr, xr(r, t), n) : ae.jsx(r, t, n);
}, oe = function(r, t, n) {
  return Me.call(t, "css") ? ae.jsxs(Sr, xr(r, t), n) : ae.jsxs(r, t, n);
};
const Yt = Se.div`
  margin: 10px;
`, Bt = Se.input`
  min-width: 250px;
  min-height: 40px;
`, Gt = ({ onPlaceSelect: e, placeholder: r }) => {
  const [t, n] = q(null), o = ir(null), a = cr("places");
  return Ce(() => {
    if (!a || !o.current)
      return;
    const c = {
      fields: ["geometry", "name", "formatted_address", "address_components"]
    };
    n(new a.Autocomplete(o.current, c));
  }, [a]), Ce(() => {
    if (!t)
      return;
    const c = t.addListener("place_changed", () => {
      e(t.getPlace());
    });
    return () => c.remove();
  }, [e, t]), /* @__PURE__ */ P(Yt, { className: "autocomplete-container", children: /* @__PURE__ */ P(Bt, { ref: o, placeholder: r }) });
}, jt = (e) => {
  const { controlPosition: r, onPlaceSelect: t, placeholder: n } = e, [o, a] = q(null), c = Ir(), f = F((l) => {
    a(l), l && (t == null || t(l));
  }, [t]);
  return Ce(() => {
    var l;
    c && ((l = o == null ? void 0 : o.geometry) != null && l.viewport) && c.fitBounds(o.geometry.viewport);
  }, [c, o]), /* @__PURE__ */ P(Or, { position: r, children: /* @__PURE__ */ P("div", { className: "autocomplete-control", children: /* @__PURE__ */ P(Gt, { onPlaceSelect: f, placeholder: n }) }) });
}, qt = (e) => {
  var r, t;
  return e ? {
    lat: (r = Number(e.lat)) == null ? void 0 : r.toFixed(6),
    lng: (t = Number(e.lng)) == null ? void 0 : t.toFixed(6)
  } : {};
}, Ht = Se.button`
  width: 100%;
  margin-top: 10px;
  background-color: white;
  border: none;
  color: #f44336;
  padding: 0;
  cursor: pointer;
`, Vt = Se.div`
  padding-inline: 10px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: max-content;
  border-collapse: collapse;
  margin-left: -10px;
`, Ut = { marginBottom: 10 }, Kt = { backgroundColor: "white" }, Zt = (e) => {
  const { marker: r, markerData: t, onClose: n, onDelete: o, title: a, removeMarkerCaption: c, allowChangingMarkers: f } = e, { lat: l, lng: d } = qt(r.position), { address: m, city: u, postalCode: $, state: S, country: g } = (t == null ? void 0 : t.address) ?? {};
  return /* @__PURE__ */ P(
    Nr,
    {
      anchor: r,
      onCloseClick: n,
      style: Kt,
      headerContent: /* @__PURE__ */ P("b", { children: a }),
      children: /* @__PURE__ */ oe(He, { children: [
        /* @__PURE__ */ oe(Vt, { children: [
          typeof (t == null ? void 0 : t.address) < "u" && /* @__PURE__ */ oe(He, { children: [
            /* @__PURE__ */ P("span", { children: m }),
            /* @__PURE__ */ P("span", { children: `${u}, ${$}, ${S}` }),
            /* @__PURE__ */ P("span", { style: Ut, children: g })
          ] }),
          /* @__PURE__ */ P("span", { children: `${l}, ${d}` })
        ] }),
        f && /* @__PURE__ */ P(Ht, { onClick: o, children: c })
      ] })
    }
  );
}, Jt = (e) => {
  const { children: r, onMarkerClick: t, ...n } = e, [o, a] = Lr(), c = F(() => {
    a && t(a);
  }, [a, t]);
  return /* @__PURE__ */ P(Fr, { ...n, onClick: c, ref: o, children: r });
}, Qt = (e) => {
  const { markers: r, collisionBehavior: t } = e, [n, o] = q(null), [a, c] = q(null), f = F((u, $) => {
    var S;
    c(u), (S = e.onMarkerClick) == null || S.call(e, u, $);
  }, [e]), l = r.length, d = r.length + 1, m = r.map(({ id: u, zIndex: $, position: S, title: g }, h) => {
    let M = $;
    return n === u && (M = d), a === u && (M = l), /* @__PURE__ */ P(
      Jt,
      {
        onMarkerClick: (p) => f(u, p),
        onMouseEnter: () => o(u),
        onMouseLeave: () => o(null),
        zIndex: M,
        position: S,
        collisionBehavior: t,
        title: g
      },
      h
    );
  });
  return /* @__PURE__ */ P(He, { children: m });
};
function Er(e) {
  const r = {
    address: "",
    postalCode: ""
  };
  for (const t of e)
    switch (t.types[0]) {
      case "street_number": {
        r.address = `${t.long_name} ${r.address}`;
        break;
      }
      case "route": {
        r.address += t.short_name;
        break;
      }
      case "postal_code": {
        r.postalCode = `${t.long_name}${r.postalCode}`;
        break;
      }
      case "postal_code_suffix": {
        r.postalCode = `${r.postalCode}-${t.long_name}`;
        break;
      }
      case "locality":
        r.city = t.long_name;
        break;
      case "administrative_area_level_1": {
        r.state = t.short_name;
        break;
      }
      case "country":
        r.country = t.long_name;
        break;
    }
  return r;
}
const Xt = () => {
  const e = cr("geocoding");
  return F((r) => new Promise((t, n) => {
    if (!e)
      return t(void 0);
    new e.Geocoder().geocode({ location: r }).then((a) => {
      var f, l;
      const c = (l = (f = a == null ? void 0 : a.results) == null ? void 0 : f[0]) != null && l.address_components ? Er(a.results[0].address_components) : void 0;
      t({ address: c, geocoderResponse: a });
    }).catch(n);
  }), [e]);
};
let en = 0;
function wr(e) {
  const r = ++en;
  return e ? `${e}${r}` : `${r}`;
}
function rn(e) {
  const r = ir(null);
  return r.current || (r.current = wr(e)), r.current;
}
const tn = (e) => e.lat !== null && e.lng !== null && !isNaN(e.lat) && !isNaN(e.lng), kr = () => wr("m"), nn = (e) => e ? e.filter((r) => r.position && tn(r.position)).map((r) => ({
  id: r.id ?? kr(),
  position: r.position,
  zIndex: r.zIndex ?? 1,
  title: r.title,
  address: r.address
})) : [], on = (e) => {
  const {
    mapId: r,
    className: t,
    colorScheme: n,
    collisionBehavior: o,
    gestureHandling: a,
    mapTypeId: c,
    showMapControl: f,
    mapControlPosition: l,
    searchPlaceholder: d,
    addMarkerOnSearch: m,
    latitude: u,
    longitude: $,
    zoom: S,
    allowMultipleMarkers: g,
    allowChangingMarkers: h,
    markers: M,
    onMarkerAdd: p,
    onMarkerDelete: _,
    onMarkerClick: y,
    onMapClick: k,
    onPlaceSelect: i,
    markerWindowTitle: A,
    removeMarkerCaption: E
  } = e, [z, _e] = q(null), [le, Pe] = q(null), [X, ue] = q(!1), [$e, de] = q({ lat: u, lng: $ }), [Te, me] = q(S), { field: R } = $r(), W = Je(() => nn(M), [M]), H = F((s) => {
    var w;
    (w = R == null ? void 0 : R.setValue) == null || w.call(R, s);
  }, [R]);
  Ce(() => {
    de({ lat: u, lng: $ }), me(S);
  }, [u, $, S]);
  const Ae = F((s, w) => {
    if (w) {
      const I = W.find((U) => U.id === s) ?? null;
      y == null || y(I, w);
    }
    _e(s), Pe(w ?? null), ue(s !== z ? !0 : !X);
  }, [z, X, y, W]), V = F((s, w) => {
    const I = {
      id: kr(),
      position: s,
      zIndex: 1,
      address: w ?? void 0
    };
    h && (H(g ? [...W, I] : [I]), p == null || p(I));
  }, [g, W, H, p, h]), he = Xt(), Re = F((s) => {
    if (k == null || k(s), s.detail.latLng) {
      const w = s.detail.latLng;
      he(w).then((I) => {
        V(w, I == null ? void 0 : I.address);
      }).catch(() => {
        V(w);
      });
    }
  }, [V, he, k]), ee = F(() => {
    ue(!1);
  }, []), Ie = F(() => {
    if (!z || !h)
      return;
    const s = W.find((w) => w.id === z);
    s && (_ == null || _(s)), H(W.filter((w) => w.id !== z)), ee();
  }, [z, ee, _, W, H, h]), Oe = F((s) => {
    me(s.detail.zoom);
  }, []), Ne = F((s) => {
    de(s.detail.center);
  }, []), Le = F((s) => {
    var I, U;
    const w = s.address_components ? Er(s.address_components) : void 0;
    if (i && i(s, w), m) {
      const Ze = (U = (I = s.geometry) == null ? void 0 : I.location) == null ? void 0 : U.toJSON();
      Ze && V(Ze, w);
    }
  }, [V, i, m]), Fe = rn(), De = Je(() => !z || !(R != null && R.value) ? void 0 : (R == null ? void 0 : R.value).find((w) => w.id === z) ?? W.find((w) => w.id === z), [R == null ? void 0 : R.value, z, W]);
  return /* @__PURE__ */ oe(
    Dr,
    {
      id: Fe,
      mapId: r,
      zoom: Te,
      center: $e,
      className: t,
      onClick: Re,
      onZoomChanged: Oe,
      onCameraChanged: Ne,
      colorScheme: n,
      gestureHandling: a,
      mapTypeId: c,
      children: [
        /* @__PURE__ */ P(Qt, { markers: W, collisionBehavior: o, onMarkerClick: Ae }),
        X && le && /* @__PURE__ */ P(
          Zt,
          {
            marker: le,
            markerData: De,
            allowChangingMarkers: h,
            title: A,
            removeMarkerCaption: E,
            onClose: ee,
            onDelete: Ie
          }
        ),
        f && /* @__PURE__ */ P(
          jt,
          {
            controlPosition: l,
            onPlaceSelect: Le,
            placeholder: d
          }
        )
      ]
    }
  );
}, an = () => /* @__PURE__ */ oe(
  "svg",
  {
    width: "18",
    height: "18",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#9CA3AF",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ P("path", { d: "M21 10c0 5.25-9 13-9 13S3 15.25 3 10a9 9 0 1 1 18 0z" }),
      /* @__PURE__ */ P("circle", { cx: "12", cy: "10", r: "3" })
    ]
  }
), sn = ({ className: e }) => /* @__PURE__ */ P("div", { className: e, children: /* @__PURE__ */ P("p", { children: "Google Maps API key is required. Insert the key, save the form and reload the page." }) }), cn = ({ apiKey: e, region: r, language: t, ...n }) => {
  const { builderMode: o } = Rr();
  return e ? /* @__PURE__ */ P(zr, { apiKey: e, region: r, language: t, children: /* @__PURE__ */ P(on, { ...n }) }) : o === "builder" ? /* @__PURE__ */ P(sn, { className: n.className }) : null;
}, Ye = {
  "Top left": 1,
  Top: 2,
  "Top right": 3,
  "Left center": 4,
  Left: 5,
  "Left bottom": 6,
  Right: 7,
  "Right center": 8,
  "Right bottom": 9,
  "Bottom left": 10,
  Bottom: 11,
  "Bottom right": 12,
  Center: 13,
  "Block start inline start": 14,
  "Block start inline center": 15,
  "Block start inline end": 16,
  "Inline start block center": 17,
  "Inline start block start": 18,
  "Inline start block end": 19,
  "Inline end block start": 20,
  "Inline end block center": 21,
  "Inline end block end": 22,
  "Block end inline start": 23,
  "Block end inline center": 24,
  "Block end inline end": 25
}, Mr = Tr(cn, "GoogleMap").name("Google Map").category("fields").icon(an).props({
  latitude: ze.default(-33.860664),
  longitude: ze.default(151.208138),
  zoom: ze.default(13),
  apiKey: K.required,
  mapId: K.withEditorProps({ placeholder: "DEMO_MAP_ID" }),
  language: K,
  region: K,
  colorScheme: re("DARK", "LIGHT", "FOLLOW_SYSTEM").withEditorProps({ creatable: !1 }),
  mapTypeId: re("roadmap", "satellite", "hybrid", "terrain").default("roadmap").withEditorProps({ creatable: !1 }),
  gestureHandling: re("auto", "cooperative", "greedy", "none").withEditorProps({ creatable: !1 }),
  showMapControl: pe.default(!0),
  mapControlPosition: re(...Object.keys(Ye).map((e) => Ye[e])).labeled(...Object.keys(Ye)).withEditorProps({ creatable: !1 }).default(2),
  searchPlaceholder: K,
  addMarkerOnSearch: pe.default(!1),
  allowMultipleMarkers: pe.default(!1),
  allowChangingMarkers: pe.default(!1),
  collisionBehavior: re("REQUIRED", "REQUIRED_AND_HIDES_OPTIONAL", "OPTIONAL_AND_HIDES_LOWER_PRIORITY").withEditorProps({ creatable: !1 }),
  markers: Ar.valued.setup({ editor: "object" }),
  markerWindowTitle: K.default("Marker"),
  removeMarkerCaption: K.default("Delete marker"),
  onMarkerAdd: te,
  onMarkerClick: te,
  onMarkerDelete: te,
  onMapClick: te,
  onPlaceSelect: te
}).css({
  width: Qe.setup({ default: "100%" }).hinted("Width of the map"),
  height: Qe.setup({ default: "400px" }).hinted("Height of the map")
}), mn = Mr, hn = Mr.build().model;
export {
  mn as googleMapComponent,
  hn as googleMapModel,
  Er as toAddress
};
//# sourceMappingURL=index.js.map
