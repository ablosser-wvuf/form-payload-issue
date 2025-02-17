import * as X from "react/jsx-runtime";
import * as F from "react";
import { forwardRef as lr, useContext as mr, useRef as hr, useEffect as vr } from "react";
import { number as $e, define as yr, string as ge, color as pe, oneOf as oe } from "@react-form-builder/core";
import br, { SvgOptions as gr, qr_svg as pr } from "fast_qr";
import xr from "fast_qr/fast_qr_bg.wasm?url";
var Sr = !1;
function Er(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Cr(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var wr = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(a) {
      var o;
      n.tags.length === 0 ? n.insertionPoint ? o = n.insertionPoint.nextSibling : n.prepend ? o = n.container.firstChild : o = n.before : o = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, o), n.tags.push(a);
    }, this.isSpeedy = t.speedy === void 0 ? !Sr : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Cr(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = Er(a);
      try {
        o.insertRule(n, o.cssRules.length);
      } catch {
      }
    } else
      a.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      var a;
      return (a = n.parentNode) == null ? void 0 : a.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), P = "-ms-", J = "-moz-", h = "-webkit-", Ae = "comm", le = "rule", me = "decl", Tr = "@import", Pe = "@keyframes", _r = "@layer", Rr = Math.abs, ee = String.fromCharCode, $r = Object.assign;
function Ar(e, r) {
  return $(e, 0) ^ 45 ? (((r << 2 ^ $(e, 0)) << 2 ^ $(e, 1)) << 2 ^ $(e, 2)) << 2 ^ $(e, 3) : 0;
}
function ke(e) {
  return e.trim();
}
function Pr(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function v(e, r, t) {
  return e.replace(r, t);
}
function ce(e, r) {
  return e.indexOf(r);
}
function $(e, r) {
  return e.charCodeAt(r) | 0;
}
function W(e, r, t) {
  return e.slice(r, t);
}
function N(e) {
  return e.length;
}
function he(e) {
  return e.length;
}
function G(e, r) {
  return r.push(e), e;
}
function kr(e, r) {
  return e.map(r).join("");
}
var re = 1, H = 1, Me = 0, k = 0, T = 0, V = "";
function te(e, r, t, n, a, o, s) {
  return { value: e, root: r, parent: t, type: n, props: a, children: o, line: re, column: H, length: s, return: "" };
}
function D(e, r) {
  return $r(te("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Mr() {
  return T;
}
function Or() {
  return T = k > 0 ? $(V, --k) : 0, H--, T === 10 && (H = 1, re--), T;
}
function O() {
  return T = k < Me ? $(V, k++) : 0, H++, T === 10 && (H = 1, re++), T;
}
function L() {
  return $(V, k);
}
function U() {
  return k;
}
function q(e, r) {
  return W(V, e, r);
}
function j(e) {
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
function Oe(e) {
  return re = H = 1, Me = N(V = e), k = 0, [];
}
function Ne(e) {
  return V = "", e;
}
function Z(e) {
  return ke(q(k - 1, fe(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Nr(e) {
  for (; (T = L()) && T < 33; )
    O();
  return j(e) > 2 || j(T) > 3 ? "" : " ";
}
function Ir(e, r) {
  for (; --r && O() && !(T < 48 || T > 102 || T > 57 && T < 65 || T > 70 && T < 97); )
    ;
  return q(e, U() + (r < 6 && L() == 32 && O() == 32));
}
function fe(e) {
  for (; O(); )
    switch (T) {
      case e:
        return k;
      case 34:
      case 39:
        e !== 34 && e !== 39 && fe(T);
        break;
      case 40:
        e === 41 && fe(e);
        break;
      case 92:
        O();
        break;
    }
  return k;
}
function Lr(e, r) {
  for (; O() && e + T !== 47 + 10; )
    if (e + T === 42 + 42 && L() === 47)
      break;
  return "/*" + q(r, k - 1) + "*" + ee(e === 47 ? e : O());
}
function Fr(e) {
  for (; !j(L()); )
    O();
  return q(e, k);
}
function Yr(e) {
  return Ne(K("", null, null, null, [""], e = Oe(e), 0, [0], e));
}
function K(e, r, t, n, a, o, s, f, u) {
  for (var d = 0, l = 0, m = s, M = 0, _ = 0, E = 0, p = 1, R = 1, S = 1, w = 0, x = "", C = a, i = o, A = n, g = x; R; )
    switch (E = w, w = O()) {
      case 40:
        if (E != 108 && $(g, m - 1) == 58) {
          ce(g += v(Z(w), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        g += Z(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        g += Nr(E);
        break;
      case 92:
        g += Ir(U() - 1, 7);
        continue;
      case 47:
        switch (L()) {
          case 42:
          case 47:
            G(Hr(Lr(O(), U()), r, t), u);
            break;
          default:
            g += "/";
        }
        break;
      case 123 * p:
        f[d++] = N(g) * S;
      case 125 * p:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            R = 0;
          case 59 + l:
            S == -1 && (g = v(g, /\f/g, "")), _ > 0 && N(g) - m && G(_ > 32 ? Se(g + ";", n, t, m - 1) : Se(v(g, " ", "") + ";", n, t, m - 2), u);
            break;
          case 59:
            g += ";";
          default:
            if (G(A = xe(g, r, t, d, l, a, f, x, C = [], i = [], m), o), w === 123)
              if (l === 0)
                K(g, r, A, A, C, o, m, f, i);
              else
                switch (M === 99 && $(g, 3) === 110 ? 100 : M) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    K(e, A, A, n && G(xe(e, A, A, 0, 0, a, f, x, a, C = [], m), i), a, i, m, f, n ? C : i);
                    break;
                  default:
                    K(g, A, A, A, [""], i, 0, f, i);
                }
        }
        d = l = _ = 0, p = S = 1, x = g = "", m = s;
        break;
      case 58:
        m = 1 + N(g), _ = E;
      default:
        if (p < 1) {
          if (w == 123)
            --p;
          else if (w == 125 && p++ == 0 && Or() == 125)
            continue;
        }
        switch (g += ee(w), w * p) {
          case 38:
            S = l > 0 ? 1 : (g += "\f", -1);
            break;
          case 44:
            f[d++] = (N(g) - 1) * S, S = 1;
            break;
          case 64:
            L() === 45 && (g += Z(O())), M = L(), l = m = N(x = g += Fr(U())), w++;
            break;
          case 45:
            E === 45 && N(g) == 2 && (p = 0);
        }
    }
  return o;
}
function xe(e, r, t, n, a, o, s, f, u, d, l) {
  for (var m = a - 1, M = a === 0 ? o : [""], _ = he(M), E = 0, p = 0, R = 0; E < n; ++E)
    for (var S = 0, w = W(e, m + 1, m = Rr(p = s[E])), x = e; S < _; ++S)
      (x = ke(p > 0 ? M[S] + " " + w : v(w, /&\f/g, M[S]))) && (u[R++] = x);
  return te(e, r, t, a === 0 ? le : f, u, d, l);
}
function Hr(e, r, t) {
  return te(e, r, t, Ae, ee(Mr()), W(e, 2, -2), 0);
}
function Se(e, r, t, n) {
  return te(e, r, t, me, W(e, 0, n), W(e, n + 1, -1), n);
}
function Y(e, r) {
  for (var t = "", n = he(e), a = 0; a < n; a++)
    t += r(e[a], a, e, r) || "";
  return t;
}
function Vr(e, r, t, n) {
  switch (e.type) {
    case _r:
      if (e.children.length)
        break;
    case Tr:
    case me:
      return e.return = e.return || e.value;
    case Ae:
      return "";
    case Pe:
      return e.return = e.value + "{" + Y(e.children, n) + "}";
    case le:
      e.value = e.props.join(",");
  }
  return N(t = Y(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Dr(e) {
  var r = he(e);
  return function(t, n, a, o) {
    for (var s = "", f = 0; f < r; f++)
      s += e[f](t, n, a, o) || "";
    return s;
  };
}
function zr(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function Wr(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var jr = function(r, t, n) {
  for (var a = 0, o = 0; a = o, o = L(), a === 38 && o === 12 && (t[n] = 1), !j(o); )
    O();
  return q(r, k);
}, Qr = function(r, t) {
  var n = -1, a = 44;
  do
    switch (j(a)) {
      case 0:
        a === 38 && L() === 12 && (t[n] = 1), r[n] += jr(k - 1, t, n);
        break;
      case 2:
        r[n] += Z(a);
        break;
      case 4:
        if (a === 44) {
          r[++n] = L() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += ee(a);
    }
  while (a = O());
  return r;
}, qr = function(r, t) {
  return Ne(Qr(Oe(r), t));
}, Ee = /* @__PURE__ */ new WeakMap(), Br = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, a = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Ee.get(n)) && !a) {
      Ee.set(r, !0);
      for (var o = [], s = qr(t, o), f = n.props, u = 0, d = 0; u < s.length; u++)
        for (var l = 0; l < f.length; l++, d++)
          r.props[d] = o[u] ? s[u].replace(/&\f/g, f[l]) : f[l] + " " + s[u];
    }
  }
}, Gr = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function Ie(e, r) {
  switch (Ar(e, r)) {
    case 5103:
      return h + "print-" + e + e;
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
      return h + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return h + e + J + e + P + e + e;
    case 6828:
    case 4268:
      return h + e + P + e + e;
    case 6165:
      return h + e + P + "flex-" + e + e;
    case 5187:
      return h + e + v(e, /(\w+).+(:[^]+)/, h + "box-$1$2" + P + "flex-$1$2") + e;
    case 5443:
      return h + e + P + "flex-item-" + v(e, /flex-|-self/, "") + e;
    case 4675:
      return h + e + P + "flex-line-pack" + v(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return h + e + P + v(e, "shrink", "negative") + e;
    case 5292:
      return h + e + P + v(e, "basis", "preferred-size") + e;
    case 6060:
      return h + "box-" + v(e, "-grow", "") + h + e + P + v(e, "grow", "positive") + e;
    case 4554:
      return h + v(e, /([^-])(transform)/g, "$1" + h + "$2") + e;
    case 6187:
      return v(v(v(e, /(zoom-|grab)/, h + "$1"), /(image-set)/, h + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return v(e, /(image-set\([^]*)/, h + "$1$`$1");
    case 4968:
      return v(v(e, /(.+:)(flex-)?(.*)/, h + "box-pack:$3" + P + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + h + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return v(e, /(.+)-inline(.+)/, h + "$1$2") + e;
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
      if (N(e) - 1 - r > 6)
        switch ($(e, r + 1)) {
          case 109:
            if ($(e, r + 4) !== 45)
              break;
          case 102:
            return v(e, /(.+:)(.+)-([^]+)/, "$1" + h + "$2-$3$1" + J + ($(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ce(e, "stretch") ? Ie(v(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if ($(e, r + 1) !== 115)
        break;
    case 6444:
      switch ($(e, N(e) - 3 - (~ce(e, "!important") && 10))) {
        case 107:
          return v(e, ":", ":" + h) + e;
        case 101:
          return v(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + h + ($(e, 14) === 45 ? "inline-" : "") + "box$3$1" + h + "$2$3$1" + P + "$2box$3") + e;
      }
      break;
    case 5936:
      switch ($(e, r + 11)) {
        case 114:
          return h + e + P + v(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return h + e + P + v(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return h + e + P + v(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return h + e + P + e + e;
  }
  return e;
}
var Ur = function(r, t, n, a) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case me:
        r.return = Ie(r.value, r.length);
        break;
      case Pe:
        return Y([D(r, {
          value: v(r.value, "@", "@" + h)
        })], a);
      case le:
        if (r.length)
          return kr(r.props, function(o) {
            switch (Pr(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Y([D(r, {
                  props: [v(o, /:(read-\w+)/, ":" + J + "$1")]
                })], a);
              case "::placeholder":
                return Y([D(r, {
                  props: [v(o, /:(plac\w+)/, ":" + h + "input-$1")]
                }), D(r, {
                  props: [v(o, /:(plac\w+)/, ":" + J + "$1")]
                }), D(r, {
                  props: [v(o, /:(plac\w+)/, P + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, Zr = [Ur], Kr = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(p) {
      var R = p.getAttribute("data-emotion");
      R.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var a = r.stylisPlugins || Zr, o = {}, s, f = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(p) {
      for (var R = p.getAttribute("data-emotion").split(" "), S = 1; S < R.length; S++)
        o[R[S]] = !0;
      f.push(p);
    }
  );
  var u, d = [Br, Gr];
  {
    var l, m = [Vr, zr(function(p) {
      l.insert(p);
    })], M = Dr(d.concat(a, m)), _ = function(R) {
      return Y(Yr(R), M);
    };
    u = function(R, S, w, x) {
      l = w, _(R ? R + "{" + S.styles + "}" : S.styles), x && (E.inserted[S.name] = !0);
    };
  }
  var E = {
    key: t,
    sheet: new wr({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: o,
    registered: {},
    insert: u
  };
  return E.sheet.hydrate(f), E;
}, ue = { exports: {} }, y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function Xr() {
  if (Ce)
    return y;
  Ce = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, M = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function x(i) {
    if (typeof i == "object" && i !== null) {
      var A = i.$$typeof;
      switch (A) {
        case r:
          switch (i = i.type, i) {
            case u:
            case d:
            case n:
            case o:
            case a:
            case m:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case f:
                case l:
                case E:
                case _:
                case s:
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
  function C(i) {
    return x(i) === d;
  }
  return y.AsyncMode = u, y.ConcurrentMode = d, y.ContextConsumer = f, y.ContextProvider = s, y.Element = r, y.ForwardRef = l, y.Fragment = n, y.Lazy = E, y.Memo = _, y.Portal = t, y.Profiler = o, y.StrictMode = a, y.Suspense = m, y.isAsyncMode = function(i) {
    return C(i) || x(i) === u;
  }, y.isConcurrentMode = C, y.isContextConsumer = function(i) {
    return x(i) === f;
  }, y.isContextProvider = function(i) {
    return x(i) === s;
  }, y.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === r;
  }, y.isForwardRef = function(i) {
    return x(i) === l;
  }, y.isFragment = function(i) {
    return x(i) === n;
  }, y.isLazy = function(i) {
    return x(i) === E;
  }, y.isMemo = function(i) {
    return x(i) === _;
  }, y.isPortal = function(i) {
    return x(i) === t;
  }, y.isProfiler = function(i) {
    return x(i) === o;
  }, y.isStrictMode = function(i) {
    return x(i) === a;
  }, y.isSuspense = function(i) {
    return x(i) === m;
  }, y.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === n || i === d || i === o || i === a || i === m || i === M || typeof i == "object" && i !== null && (i.$$typeof === E || i.$$typeof === _ || i.$$typeof === s || i.$$typeof === f || i.$$typeof === l || i.$$typeof === R || i.$$typeof === S || i.$$typeof === w || i.$$typeof === p);
  }, y.typeOf = x, y;
}
var b = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function Jr() {
  return we || (we = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, M = e ? Symbol.for("react.suspense_list") : 60120, _ = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function x(c) {
      return typeof c == "string" || typeof c == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      c === n || c === d || c === o || c === a || c === m || c === M || typeof c == "object" && c !== null && (c.$$typeof === E || c.$$typeof === _ || c.$$typeof === s || c.$$typeof === f || c.$$typeof === l || c.$$typeof === R || c.$$typeof === S || c.$$typeof === w || c.$$typeof === p);
    }
    function C(c) {
      if (typeof c == "object" && c !== null) {
        var ae = c.$$typeof;
        switch (ae) {
          case r:
            var B = c.type;
            switch (B) {
              case u:
              case d:
              case n:
              case o:
              case a:
              case m:
                return B;
              default:
                var be = B && B.$$typeof;
                switch (be) {
                  case f:
                  case l:
                  case E:
                  case _:
                  case s:
                    return be;
                  default:
                    return ae;
                }
            }
          case t:
            return ae;
        }
      }
    }
    var i = u, A = d, g = f, je = s, Qe = r, qe = l, Be = n, Ge = E, Ue = _, Ze = t, Ke = o, Xe = a, Je = m, ve = !1;
    function er(c) {
      return ve || (ve = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ye(c) || C(c) === u;
    }
    function ye(c) {
      return C(c) === d;
    }
    function rr(c) {
      return C(c) === f;
    }
    function tr(c) {
      return C(c) === s;
    }
    function nr(c) {
      return typeof c == "object" && c !== null && c.$$typeof === r;
    }
    function ar(c) {
      return C(c) === l;
    }
    function or(c) {
      return C(c) === n;
    }
    function ir(c) {
      return C(c) === E;
    }
    function sr(c) {
      return C(c) === _;
    }
    function cr(c) {
      return C(c) === t;
    }
    function fr(c) {
      return C(c) === o;
    }
    function ur(c) {
      return C(c) === a;
    }
    function dr(c) {
      return C(c) === m;
    }
    b.AsyncMode = i, b.ConcurrentMode = A, b.ContextConsumer = g, b.ContextProvider = je, b.Element = Qe, b.ForwardRef = qe, b.Fragment = Be, b.Lazy = Ge, b.Memo = Ue, b.Portal = Ze, b.Profiler = Ke, b.StrictMode = Xe, b.Suspense = Je, b.isAsyncMode = er, b.isConcurrentMode = ye, b.isContextConsumer = rr, b.isContextProvider = tr, b.isElement = nr, b.isForwardRef = ar, b.isFragment = or, b.isLazy = ir, b.isMemo = sr, b.isPortal = cr, b.isProfiler = fr, b.isStrictMode = ur, b.isSuspense = dr, b.isValidElementType = x, b.typeOf = C;
  }()), b;
}
process.env.NODE_ENV === "production" ? ue.exports = Xr() : ue.exports = Jr();
var et = ue.exports, Le = et, rt = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, tt = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Fe = {};
Fe[Le.ForwardRef] = rt;
Fe[Le.Memo] = tt;
var nt = !0;
function at(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(a) {
    e[a] !== void 0 ? r.push(e[a] + ";") : a && (n += a + " ");
  }), n;
}
var Ye = function(r, t, n) {
  var a = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  nt === !1) && r.registered[a] === void 0 && (r.registered[a] = t.styles);
}, ot = function(r, t, n) {
  Ye(r, t, n);
  var a = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var o = t;
    do
      r.insert(t === o ? "." + a : "", o, r.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function it(e) {
  for (var r = 0, t, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (a) {
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
var st = {
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
}, ct = !1, ft = /[A-Z]|^ms/g, ut = /_EMO_([^_]+?)_([^]*?)_EMO_/g, He = function(r) {
  return r.charCodeAt(1) === 45;
}, Te = function(r) {
  return r != null && typeof r != "boolean";
}, ie = /* @__PURE__ */ Wr(function(e) {
  return He(e) ? e : e.replace(ft, "-$&").toLowerCase();
}), _e = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(ut, function(n, a, o) {
          return I = {
            name: a,
            styles: o,
            next: I
          }, a;
        });
  }
  return st[r] !== 1 && !He(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, dt = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Q(e, r, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var a = t;
      if (a.anim === 1)
        return I = {
          name: a.name,
          styles: a.styles,
          next: I
        }, a.name;
      var o = t;
      if (o.styles !== void 0) {
        var s = o.next;
        if (s !== void 0)
          for (; s !== void 0; )
            I = {
              name: s.name,
              styles: s.styles,
              next: I
            }, s = s.next;
        var f = o.styles + ";";
        return f;
      }
      return lt(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var u = I, d = t(e);
        return I = u, Q(e, r, d);
      }
      break;
    }
  }
  var l = t;
  if (r == null)
    return l;
  var m = r[l];
  return m !== void 0 ? m : l;
}
function lt(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++)
      n += Q(e, r, t[a]) + ";";
  else
    for (var o in t) {
      var s = t[o];
      if (typeof s != "object") {
        var f = s;
        r != null && r[f] !== void 0 ? n += o + "{" + r[f] + "}" : Te(f) && (n += ie(o) + ":" + _e(o, f) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && ct)
          throw new Error(dt);
        if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
          for (var u = 0; u < s.length; u++)
            Te(s[u]) && (n += ie(o) + ":" + _e(o, s[u]) + ";");
        else {
          var d = Q(e, r, s);
          switch (o) {
            case "animation":
            case "animationName": {
              n += ie(o) + ":" + d + ";";
              break;
            }
            default:
              n += o + "{" + d + "}";
          }
        }
      }
    }
  return n;
}
var Re = /label:\s*([^\s;{]+)\s*(;|$)/g, I;
function mt(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, a = "";
  I = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    n = !1, a += Q(t, r, o);
  else {
    var s = o;
    a += s[0];
  }
  for (var f = 1; f < e.length; f++)
    if (a += Q(t, r, e[f]), n) {
      var u = o;
      a += u[f];
    }
  Re.lastIndex = 0;
  for (var d = "", l; (l = Re.exec(a)) !== null; )
    d += "-" + l[1];
  var m = it(a) + d;
  return {
    name: m,
    styles: a,
    next: I
  };
}
var ht = function(r) {
  return r();
}, vt = F["useInsertionEffect"] ? F["useInsertionEffect"] : !1, yt = vt || ht, bt = !1, Ve = /* @__PURE__ */ F.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Kr({
    key: "css"
  }) : null
);
Ve.Provider;
var gt = function(r) {
  return /* @__PURE__ */ lr(function(t, n) {
    var a = mr(Ve);
    return r(t, a, n);
  });
}, pt = /* @__PURE__ */ F.createContext({}), ne = {}.hasOwnProperty, de = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", De = function(r, t) {
  var n = {};
  for (var a in t)
    ne.call(t, a) && (n[a] = t[a]);
  return n[de] = r, n;
}, xt = function(r) {
  var t = r.cache, n = r.serialized, a = r.isStringTag;
  return Ye(t, n, a), yt(function() {
    return ot(t, n, a);
  }), null;
}, St = /* @__PURE__ */ gt(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var a = e[de], o = [n], s = "";
  typeof e.className == "string" ? s = at(r.registered, o, e.className) : e.className != null && (s = e.className + " ");
  var f = mt(o, void 0, F.useContext(pt));
  s += r.key + "-" + f.name;
  var u = {};
  for (var d in e)
    ne.call(e, d) && d !== "css" && d !== de && !bt && (u[d] = e[d]);
  return u.className = s, t && (u.ref = t), /* @__PURE__ */ F.createElement(F.Fragment, null, /* @__PURE__ */ F.createElement(xt, {
    cache: r,
    serialized: f,
    isStringTag: typeof a == "string"
  }), /* @__PURE__ */ F.createElement(a, u));
}), ze = St, z = function(r, t, n) {
  return ne.call(t, "css") ? X.jsx(ze, De(r, t), n) : X.jsx(r, t, n);
}, Et = function(r, t, n) {
  return ne.call(t, "css") ? X.jsxs(ze, De(r, t), n) : X.jsxs(r, t, n);
};
const Ct = () => /* @__PURE__ */ Et("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ z(
    "path",
    {
      d: "M20 18V20H18M20 14H19L17 16M16 18H14V20M4 4H10V10H4V4ZM14 4H20V10H14V4ZM4 14H10V20H4V14ZM14 14V15H15V14H14Z",
      stroke: "#9CA3AF",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1"
    }
  ),
  /* @__PURE__ */ z("path", { d: "M17 7H17.001", stroke: "#9CA3AF", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
  /* @__PURE__ */ z("path", { d: "M7 7H7.001", stroke: "#9CA3AF", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }),
  /* @__PURE__ */ z("path", { d: "M7 17H7.001", stroke: "#9CA3AF", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" })
] }), wt = (e) => e % 1 === 0 ? (e | 256).toString(16).slice(1) : Math.trunc(e * 255 | 256).toString(16).slice(1), se = (e) => {
  if (!e)
    return;
  const r = e.indexOf(")");
  if (e.startsWith("rgba(") && r >= 0)
    return `#${e.substring(5, r).split(",").map((n) => n.trim()).map((n) => Number(n)).map(wt).join("")}`;
}, Tt = async (e, r) => {
  if (await br(xr), !r.current)
    return;
  let t = new gr();
  e.margin && (t = t.margin(e.margin));
  const n = se(e.backgroundColor);
  n && (t = t.background_color(n));
  const a = se(e.moduleColor);
  a && (t = t.module_color(a)), e.shape && (t = t.shape(e.shape)), e.image && (t = t.image(e.image));
  const o = se(e.imageBackgroundColor);
  if (o && (t = t.image_background_color(o)), e.imageBackgroundShape && (t = t.image_background_shape(e.imageBackgroundShape)), e.imageSize !== void 0 && e.imageGap !== void 0 && (t = t.image_size(e.imageSize, e.imageGap)), e.imagePositionX && e.imagePositionY) {
    const s = new Float64Array([e.imagePositionX, e.imagePositionY]);
    t = t.image_position(s);
  }
  e.errorCorrectionLevel && (t = t.ecl(e.errorCorrectionLevel)), e.version && (t = t.version(e.version)), r.current.innerHTML = pr(e.content, t);
}, _t = (e) => {
  const r = hr(null);
  return vr(() => {
    Tt(e, r).catch(console.error);
  }, [e]), /* @__PURE__ */ z("div", { className: e.className, style: { width: e.width }, ref: r });
}, Rt = $e.withEditorProps({ min: 0 }), We = yr(_t, "FastQR").name("QR Code").category("static").icon(Ct).props({
  width: Rt.default(300).hinted("The QR code width"),
  content: ge.default("https://formengine.io").hinted("The QR code content"),
  moduleColor: pe.hinted("The module color"),
  shape: oe(0, 1, 2, 3, 4, 5).default(0).labeled("Square", "Circle", "RoundedSquare", "Vertical", "Horizontal", "Diamond").withEditorProps({ creatable: !1 }).hinted("The different possible shapes to represent modules"),
  errorCorrectionLevel: oe(0, 1, 2, 3).default(0).labeled("Low, 7%", "Medium, 15%", "Quartile, 25%", "High, 30%").withEditorProps({ creatable: !1 }).hinted("The error correction coding level"),
  version: $e.withEditorProps({ min: 0, max: 39 }).named("QR version").hinted("The QR code version"),
  image: ge.hinted("The image, base64 or URL"),
  imageBackgroundColor: pe.hinted("The image background color"),
  imageBackgroundShape: oe(0, 1, 2).default(0).labeled("Square", "Circle", "RoundedSquare").withEditorProps({ creatable: !1 }).hinted("The image background shape")
}), Mt = We, Ot = We.build().model;
export {
  Mt as fastQrComponent,
  Ot as fastQrModel
};
//# sourceMappingURL=index.js.map
