import * as J from "react/jsx-runtime";
import * as L from "react";
import { forwardRef as dr, useContext as mr, useState as hr, useRef as pr, useMemo as ye, useEffect as yr } from "react";
import { define as vr, string as K, boolean as br, someOf as xr, object as Er, event as Sr } from "@react-form-builder/core";
import { uniqueId as ve } from "lodash-es";
import gr from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import $e from "@emotion/styled";
var Cr = !1;
function wr(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Rr(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Tr = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(a) {
      var o;
      n.tags.length === 0 ? n.insertionPoint ? o = n.insertionPoint.nextSibling : n.prepend ? o = n.container.firstChild : o = n.before : o = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, o), n.tags.push(a);
    }, this.isSpeedy = t.speedy === void 0 ? !Cr : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Rr(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = wr(a);
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
}(), P = "-ms-", Q = "-moz-", h = "-webkit-", _e = "comm", ue = "rule", le = "decl", $r = "@import", Ae = "@keyframes", _r = "@layer", Ar = Math.abs, ee = String.fromCharCode, Pr = Object.assign;
function Mr(e, r) {
  return _(e, 0) ^ 45 ? (((r << 2 ^ _(e, 0)) << 2 ^ _(e, 1)) << 2 ^ _(e, 2)) << 2 ^ _(e, 3) : 0;
}
function Pe(e) {
  return e.trim();
}
function kr(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function p(e, r, t) {
  return e.replace(r, t);
}
function ie(e, r) {
  return e.indexOf(r);
}
function _(e, r) {
  return e.charCodeAt(r) | 0;
}
function j(e, r, t) {
  return e.slice(r, t);
}
function I(e) {
  return e.length;
}
function de(e) {
  return e.length;
}
function B(e, r) {
  return r.push(e), e;
}
function Or(e, r) {
  return e.map(r).join("");
}
var re = 1, D = 1, Me = 0, k = 0, T = 0, z = "";
function te(e, r, t, n, a, o, s) {
  return { value: e, root: r, parent: t, type: n, props: a, children: o, line: re, column: D, length: s, return: "" };
}
function W(e, r) {
  return Pr(te("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Ir() {
  return T;
}
function Nr() {
  return T = k > 0 ? _(z, --k) : 0, D--, T === 10 && (D = 1, re--), T;
}
function O() {
  return T = k < Me ? _(z, k++) : 0, D++, T === 10 && (D = 1, re++), T;
}
function F() {
  return _(z, k);
}
function H() {
  return k;
}
function G(e, r) {
  return j(z, e, r);
}
function V(e) {
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
function ke(e) {
  return re = D = 1, Me = I(z = e), k = 0, [];
}
function Oe(e) {
  return z = "", e;
}
function Z(e) {
  return Pe(G(k - 1, se(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Fr(e) {
  for (; (T = F()) && T < 33; )
    O();
  return V(e) > 2 || V(T) > 3 ? "" : " ";
}
function Lr(e, r) {
  for (; --r && O() && !(T < 48 || T > 102 || T > 57 && T < 65 || T > 70 && T < 97); )
    ;
  return G(e, H() + (r < 6 && F() == 32 && O() == 32));
}
function se(e) {
  for (; O(); )
    switch (T) {
      case e:
        return k;
      case 34:
      case 39:
        e !== 34 && e !== 39 && se(T);
        break;
      case 40:
        e === 41 && se(e);
        break;
      case 92:
        O();
        break;
    }
  return k;
}
function Yr(e, r) {
  for (; O() && e + T !== 47 + 10; )
    if (e + T === 42 + 42 && F() === 47)
      break;
  return "/*" + G(r, k - 1) + "*" + ee(e === 47 ? e : O());
}
function Dr(e) {
  for (; !V(F()); )
    O();
  return G(e, k);
}
function zr(e) {
  return Oe(X("", null, null, null, [""], e = ke(e), 0, [0], e));
}
function X(e, r, t, n, a, o, s, f, u) {
  for (var l = 0, d = 0, m = s, M = 0, w = 0, g = 0, x = 1, $ = 1, S = 1, R = 0, E = "", C = a, i = o, A = n, b = E; $; )
    switch (g = R, R = O()) {
      case 40:
        if (g != 108 && _(b, m - 1) == 58) {
          ie(b += p(Z(R), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        b += Z(R);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        b += Fr(g);
        break;
      case 92:
        b += Lr(H() - 1, 7);
        continue;
      case 47:
        switch (F()) {
          case 42:
          case 47:
            B(Wr(Yr(O(), H()), r, t), u);
            break;
          default:
            b += "/";
        }
        break;
      case 123 * x:
        f[l++] = I(b) * S;
      case 125 * x:
      case 59:
      case 0:
        switch (R) {
          case 0:
          case 125:
            $ = 0;
          case 59 + d:
            S == -1 && (b = p(b, /\f/g, "")), w > 0 && I(b) - m && B(w > 32 ? xe(b + ";", n, t, m - 1) : xe(p(b, " ", "") + ";", n, t, m - 2), u);
            break;
          case 59:
            b += ";";
          default:
            if (B(A = be(b, r, t, l, d, a, f, E, C = [], i = [], m), o), R === 123)
              if (d === 0)
                X(b, r, A, A, C, o, m, f, i);
              else
                switch (M === 99 && _(b, 3) === 110 ? 100 : M) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    X(e, A, A, n && B(be(e, A, A, 0, 0, a, f, E, a, C = [], m), i), a, i, m, f, n ? C : i);
                    break;
                  default:
                    X(b, A, A, A, [""], i, 0, f, i);
                }
        }
        l = d = w = 0, x = S = 1, E = b = "", m = s;
        break;
      case 58:
        m = 1 + I(b), w = g;
      default:
        if (x < 1) {
          if (R == 123)
            --x;
          else if (R == 125 && x++ == 0 && Nr() == 125)
            continue;
        }
        switch (b += ee(R), R * x) {
          case 38:
            S = d > 0 ? 1 : (b += "\f", -1);
            break;
          case 44:
            f[l++] = (I(b) - 1) * S, S = 1;
            break;
          case 64:
            F() === 45 && (b += Z(O())), M = F(), d = m = I(E = b += Dr(H())), R++;
            break;
          case 45:
            g === 45 && I(b) == 2 && (x = 0);
        }
    }
  return o;
}
function be(e, r, t, n, a, o, s, f, u, l, d) {
  for (var m = a - 1, M = a === 0 ? o : [""], w = de(M), g = 0, x = 0, $ = 0; g < n; ++g)
    for (var S = 0, R = j(e, m + 1, m = Ar(x = s[g])), E = e; S < w; ++S)
      (E = Pe(x > 0 ? M[S] + " " + R : p(R, /&\f/g, M[S]))) && (u[$++] = E);
  return te(e, r, t, a === 0 ? ue : f, u, l, d);
}
function Wr(e, r, t) {
  return te(e, r, t, _e, ee(Ir()), j(e, 2, -2), 0);
}
function xe(e, r, t, n) {
  return te(e, r, t, le, j(e, 0, n), j(e, n + 1, -1), n);
}
function Y(e, r) {
  for (var t = "", n = de(e), a = 0; a < n; a++)
    t += r(e[a], a, e, r) || "";
  return t;
}
function jr(e, r, t, n) {
  switch (e.type) {
    case _r:
      if (e.children.length)
        break;
    case $r:
    case le:
      return e.return = e.return || e.value;
    case _e:
      return "";
    case Ae:
      return e.return = e.value + "{" + Y(e.children, n) + "}";
    case ue:
      e.value = e.props.join(",");
  }
  return I(t = Y(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Vr(e) {
  var r = de(e);
  return function(t, n, a, o) {
    for (var s = "", f = 0; f < r; f++)
      s += e[f](t, n, a, o) || "";
    return s;
  };
}
function qr(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function Gr(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Ur = function(r, t, n) {
  for (var a = 0, o = 0; a = o, o = F(), a === 38 && o === 12 && (t[n] = 1), !V(o); )
    O();
  return G(r, k);
}, Kr = function(r, t) {
  var n = -1, a = 44;
  do
    switch (V(a)) {
      case 0:
        a === 38 && F() === 12 && (t[n] = 1), r[n] += Ur(k - 1, t, n);
        break;
      case 2:
        r[n] += Z(a);
        break;
      case 4:
        if (a === 44) {
          r[++n] = F() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += ee(a);
    }
  while (a = O());
  return r;
}, Br = function(r, t) {
  return Oe(Kr(ke(r), t));
}, Ee = /* @__PURE__ */ new WeakMap(), Hr = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, a = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Ee.get(n)) && !a) {
      Ee.set(r, !0);
      for (var o = [], s = Br(t, o), f = n.props, u = 0, l = 0; u < s.length; u++)
        for (var d = 0; d < f.length; d++, l++)
          r.props[l] = o[u] ? s[u].replace(/&\f/g, f[d]) : f[d] + " " + s[u];
    }
  }
}, Zr = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function Ie(e, r) {
  switch (Mr(e, r)) {
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
      return h + e + Q + e + P + e + e;
    case 6828:
    case 4268:
      return h + e + P + e + e;
    case 6165:
      return h + e + P + "flex-" + e + e;
    case 5187:
      return h + e + p(e, /(\w+).+(:[^]+)/, h + "box-$1$2" + P + "flex-$1$2") + e;
    case 5443:
      return h + e + P + "flex-item-" + p(e, /flex-|-self/, "") + e;
    case 4675:
      return h + e + P + "flex-line-pack" + p(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return h + e + P + p(e, "shrink", "negative") + e;
    case 5292:
      return h + e + P + p(e, "basis", "preferred-size") + e;
    case 6060:
      return h + "box-" + p(e, "-grow", "") + h + e + P + p(e, "grow", "positive") + e;
    case 4554:
      return h + p(e, /([^-])(transform)/g, "$1" + h + "$2") + e;
    case 6187:
      return p(p(p(e, /(zoom-|grab)/, h + "$1"), /(image-set)/, h + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return p(e, /(image-set\([^]*)/, h + "$1$`$1");
    case 4968:
      return p(p(e, /(.+:)(flex-)?(.*)/, h + "box-pack:$3" + P + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + h + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return p(e, /(.+)-inline(.+)/, h + "$1$2") + e;
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
      if (I(e) - 1 - r > 6)
        switch (_(e, r + 1)) {
          case 109:
            if (_(e, r + 4) !== 45)
              break;
          case 102:
            return p(e, /(.+:)(.+)-([^]+)/, "$1" + h + "$2-$3$1" + Q + (_(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ie(e, "stretch") ? Ie(p(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (_(e, r + 1) !== 115)
        break;
    case 6444:
      switch (_(e, I(e) - 3 - (~ie(e, "!important") && 10))) {
        case 107:
          return p(e, ":", ":" + h) + e;
        case 101:
          return p(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + h + (_(e, 14) === 45 ? "inline-" : "") + "box$3$1" + h + "$2$3$1" + P + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (_(e, r + 11)) {
        case 114:
          return h + e + P + p(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return h + e + P + p(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return h + e + P + p(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return h + e + P + e + e;
  }
  return e;
}
var Xr = function(r, t, n, a) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case le:
        r.return = Ie(r.value, r.length);
        break;
      case Ae:
        return Y([W(r, {
          value: p(r.value, "@", "@" + h)
        })], a);
      case ue:
        if (r.length)
          return Or(r.props, function(o) {
            switch (kr(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Y([W(r, {
                  props: [p(o, /:(read-\w+)/, ":" + Q + "$1")]
                })], a);
              case "::placeholder":
                return Y([W(r, {
                  props: [p(o, /:(plac\w+)/, ":" + h + "input-$1")]
                }), W(r, {
                  props: [p(o, /:(plac\w+)/, ":" + Q + "$1")]
                }), W(r, {
                  props: [p(o, /:(plac\w+)/, P + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, Jr = [Xr], Qr = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(x) {
      var $ = x.getAttribute("data-emotion");
      $.indexOf(" ") !== -1 && (document.head.appendChild(x), x.setAttribute("data-s", ""));
    });
  }
  var a = r.stylisPlugins || Jr, o = {}, s, f = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(x) {
      for (var $ = x.getAttribute("data-emotion").split(" "), S = 1; S < $.length; S++)
        o[$[S]] = !0;
      f.push(x);
    }
  );
  var u, l = [Hr, Zr];
  {
    var d, m = [jr, qr(function(x) {
      d.insert(x);
    })], M = Vr(l.concat(a, m)), w = function($) {
      return Y(zr($), M);
    };
    u = function($, S, R, E) {
      d = R, w($ ? $ + "{" + S.styles + "}" : S.styles), E && (g.inserted[S.name] = !0);
    };
  }
  var g = {
    key: t,
    sheet: new Tr({
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
  return g.sheet.hydrate(f), g;
}, ce = { exports: {} }, y = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function et() {
  if (Se)
    return y;
  Se = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, M = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function E(i) {
    if (typeof i == "object" && i !== null) {
      var A = i.$$typeof;
      switch (A) {
        case r:
          switch (i = i.type, i) {
            case u:
            case l:
            case n:
            case o:
            case a:
            case m:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case f:
                case d:
                case g:
                case w:
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
    return E(i) === l;
  }
  return y.AsyncMode = u, y.ConcurrentMode = l, y.ContextConsumer = f, y.ContextProvider = s, y.Element = r, y.ForwardRef = d, y.Fragment = n, y.Lazy = g, y.Memo = w, y.Portal = t, y.Profiler = o, y.StrictMode = a, y.Suspense = m, y.isAsyncMode = function(i) {
    return C(i) || E(i) === u;
  }, y.isConcurrentMode = C, y.isContextConsumer = function(i) {
    return E(i) === f;
  }, y.isContextProvider = function(i) {
    return E(i) === s;
  }, y.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === r;
  }, y.isForwardRef = function(i) {
    return E(i) === d;
  }, y.isFragment = function(i) {
    return E(i) === n;
  }, y.isLazy = function(i) {
    return E(i) === g;
  }, y.isMemo = function(i) {
    return E(i) === w;
  }, y.isPortal = function(i) {
    return E(i) === t;
  }, y.isProfiler = function(i) {
    return E(i) === o;
  }, y.isStrictMode = function(i) {
    return E(i) === a;
  }, y.isSuspense = function(i) {
    return E(i) === m;
  }, y.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === n || i === l || i === o || i === a || i === m || i === M || typeof i == "object" && i !== null && (i.$$typeof === g || i.$$typeof === w || i.$$typeof === s || i.$$typeof === f || i.$$typeof === d || i.$$typeof === $ || i.$$typeof === S || i.$$typeof === R || i.$$typeof === x);
  }, y.typeOf = E, y;
}
var v = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function rt() {
  return ge || (ge = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, M = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function E(c) {
      return typeof c == "string" || typeof c == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      c === n || c === l || c === o || c === a || c === m || c === M || typeof c == "object" && c !== null && (c.$$typeof === g || c.$$typeof === w || c.$$typeof === s || c.$$typeof === f || c.$$typeof === d || c.$$typeof === $ || c.$$typeof === S || c.$$typeof === R || c.$$typeof === x);
    }
    function C(c) {
      if (typeof c == "object" && c !== null) {
        var ae = c.$$typeof;
        switch (ae) {
          case r:
            var U = c.type;
            switch (U) {
              case u:
              case l:
              case n:
              case o:
              case a:
              case m:
                return U;
              default:
                var pe = U && U.$$typeof;
                switch (pe) {
                  case f:
                  case d:
                  case g:
                  case w:
                  case s:
                    return pe;
                  default:
                    return ae;
                }
            }
          case t:
            return ae;
        }
      }
    }
    var i = u, A = l, b = f, qe = s, Ge = r, Ue = d, Ke = n, Be = g, He = w, Ze = t, Xe = o, Je = a, Qe = m, me = !1;
    function er(c) {
      return me || (me = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), he(c) || C(c) === u;
    }
    function he(c) {
      return C(c) === l;
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
      return C(c) === d;
    }
    function or(c) {
      return C(c) === n;
    }
    function ir(c) {
      return C(c) === g;
    }
    function sr(c) {
      return C(c) === w;
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
    function lr(c) {
      return C(c) === m;
    }
    v.AsyncMode = i, v.ConcurrentMode = A, v.ContextConsumer = b, v.ContextProvider = qe, v.Element = Ge, v.ForwardRef = Ue, v.Fragment = Ke, v.Lazy = Be, v.Memo = He, v.Portal = Ze, v.Profiler = Xe, v.StrictMode = Je, v.Suspense = Qe, v.isAsyncMode = er, v.isConcurrentMode = he, v.isContextConsumer = rr, v.isContextProvider = tr, v.isElement = nr, v.isForwardRef = ar, v.isFragment = or, v.isLazy = ir, v.isMemo = sr, v.isPortal = cr, v.isProfiler = fr, v.isStrictMode = ur, v.isSuspense = lr, v.isValidElementType = E, v.typeOf = C;
  }()), v;
}
process.env.NODE_ENV === "production" ? ce.exports = et() : ce.exports = rt();
var tt = ce.exports, Ne = tt, nt = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, at = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Fe = {};
Fe[Ne.ForwardRef] = nt;
Fe[Ne.Memo] = at;
var ot = !0;
function it(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(a) {
    e[a] !== void 0 ? r.push(e[a] + ";") : a && (n += a + " ");
  }), n;
}
var Le = function(r, t, n) {
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
  ot === !1) && r.registered[a] === void 0 && (r.registered[a] = t.styles);
}, st = function(r, t, n) {
  Le(r, t, n);
  var a = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var o = t;
    do
      r.insert(t === o ? "." + a : "", o, r.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function ct(e) {
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
var ft = {
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
}, ut = !1, lt = /[A-Z]|^ms/g, dt = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ye = function(r) {
  return r.charCodeAt(1) === 45;
}, Ce = function(r) {
  return r != null && typeof r != "boolean";
}, oe = /* @__PURE__ */ Gr(function(e) {
  return Ye(e) ? e : e.replace(lt, "-$&").toLowerCase();
}), we = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(dt, function(n, a, o) {
          return N = {
            name: a,
            styles: o,
            next: N
          }, a;
        });
  }
  return ft[r] !== 1 && !Ye(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, mt = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function q(e, r, t) {
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
        return N = {
          name: a.name,
          styles: a.styles,
          next: N
        }, a.name;
      var o = t;
      if (o.styles !== void 0) {
        var s = o.next;
        if (s !== void 0)
          for (; s !== void 0; )
            N = {
              name: s.name,
              styles: s.styles,
              next: N
            }, s = s.next;
        var f = o.styles + ";";
        return f;
      }
      return ht(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var u = N, l = t(e);
        return N = u, q(e, r, l);
      }
      break;
    }
  }
  var d = t;
  if (r == null)
    return d;
  var m = r[d];
  return m !== void 0 ? m : d;
}
function ht(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++)
      n += q(e, r, t[a]) + ";";
  else
    for (var o in t) {
      var s = t[o];
      if (typeof s != "object") {
        var f = s;
        r != null && r[f] !== void 0 ? n += o + "{" + r[f] + "}" : Ce(f) && (n += oe(o) + ":" + we(o, f) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && ut)
          throw new Error(mt);
        if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
          for (var u = 0; u < s.length; u++)
            Ce(s[u]) && (n += oe(o) + ":" + we(o, s[u]) + ";");
        else {
          var l = q(e, r, s);
          switch (o) {
            case "animation":
            case "animationName": {
              n += oe(o) + ":" + l + ";";
              break;
            }
            default:
              n += o + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var Re = /label:\s*([^\s;{]+)\s*(;|$)/g, N;
function pt(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, a = "";
  N = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    n = !1, a += q(t, r, o);
  else {
    var s = o;
    a += s[0];
  }
  for (var f = 1; f < e.length; f++)
    if (a += q(t, r, e[f]), n) {
      var u = o;
      a += u[f];
    }
  Re.lastIndex = 0;
  for (var l = "", d; (d = Re.exec(a)) !== null; )
    l += "-" + d[1];
  var m = ct(a) + l;
  return {
    name: m,
    styles: a,
    next: N
  };
}
var yt = function(r) {
  return r();
}, vt = L["useInsertionEffect"] ? L["useInsertionEffect"] : !1, bt = vt || yt, xt = !1, De = /* @__PURE__ */ L.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Qr({
    key: "css"
  }) : null
);
De.Provider;
var Et = function(r) {
  return /* @__PURE__ */ dr(function(t, n) {
    var a = mr(De);
    return r(t, a, n);
  });
}, St = /* @__PURE__ */ L.createContext({}), ne = {}.hasOwnProperty, fe = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ze = function(r, t) {
  var n = {};
  for (var a in t)
    ne.call(t, a) && (n[a] = t[a]);
  return n[fe] = r, n;
}, gt = function(r) {
  var t = r.cache, n = r.serialized, a = r.isStringTag;
  return Le(t, n, a), bt(function() {
    return st(t, n, a);
  }), null;
}, Ct = /* @__PURE__ */ Et(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var a = e[fe], o = [n], s = "";
  typeof e.className == "string" ? s = it(r.registered, o, e.className) : e.className != null && (s = e.className + " ");
  var f = pt(o, void 0, L.useContext(St));
  s += r.key + "-" + f.name;
  var u = {};
  for (var l in e)
    ne.call(e, l) && l !== "css" && l !== fe && !xt && (u[l] = e[l]);
  return u.className = s, t && (u.ref = t), /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement(gt, {
    cache: r,
    serialized: f,
    isStringTag: typeof a == "string"
  }), /* @__PURE__ */ L.createElement(a, u));
}), We = Ct, Te = function(r, t, n) {
  return ne.call(t, "css") ? J.jsx(We, ze(r, t), n) : J.jsx(r, t, n);
}, wt = function(r, t, n) {
  return ne.call(t, "css") ? J.jsxs(We, ze(r, t), n) : J.jsxs(r, t, n);
};
const Rt = $e.label`
  text-align: left;
`, Tt = $e.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  label {
    margin-inline-start: 5px;
    margin-bottom: 2px;
  }
`, je = {
  font: [{ font: [] }],
  header: [{ header: [] }],
  align: [{ align: [] }],
  direction: [{ direction: "rtl" }],
  decoration: ["bold", "italic", "underline", "strike"],
  color: [{ color: [] }, { background: [] }],
  script: [{ script: "super" }, { script: "sub" }],
  block: ["blockquote", "code-block"],
  list: [{ list: "ordered" }, { list: "bullet" }],
  indent: [{ indent: "-1" }, { indent: "+1" }],
  insert: ["link", "image", "video"],
  size: [{ size: ["small", !1, "large", "huge"] }],
  clean: ["clean"]
}, $t = [
  "header",
  "decoration",
  "align",
  "insert"
], _t = {
  display: "flex",
  flexDirection: "column",
  flex: 1
}, At = ({
  value: e,
  initialValue: r,
  label: t,
  style: n,
  toolbarOptions: a,
  placeholder: o,
  modules: s,
  ...f
}) => {
  const [u, l] = hr(ve()), d = pr(e);
  d.current = e;
  const m = ye(() => d.current ?? r, [r]);
  yr(() => {
    l(ve());
  }, [o, a, s, r]);
  const M = ye(() => ({
    toolbar: a == null ? void 0 : a.map((w) => je[w]),
    ...s ?? {}
  }), [s, a]);
  return /* @__PURE__ */ wt(Tt, { style: n, children: [
    /* @__PURE__ */ Te(Rt, { children: t }),
    /* @__PURE__ */ Te(
      gr,
      {
        defaultValue: m,
        modules: M,
        placeholder: o,
        style: {
          ..._t,
          ...n
        },
        ...f
      },
      u
    )
  ] });
}, Ve = vr(At, "RichTextEditor").name("Rich text editor").category("fields").props({
  value: K.valued.hideEditor(),
  initialValue: K,
  label: K.default("Rich text editor"),
  placeholder: K,
  readOnly: br.default(!1),
  toolbarOptions: xr(...Object.keys(je)).withEditorProps({
    creatable: !1
  }).default($t),
  modules: Er,
  onChange: Sr
}), Ft = Ve, Lt = Ve.build().model;
export {
  Ft as richTextComponent,
  Lt as richTextModel
};
//# sourceMappingURL=index.js.map
