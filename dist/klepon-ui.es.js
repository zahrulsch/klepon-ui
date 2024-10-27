import { createRenderEffect as _, getOwner as X, sharedConfig as B, createEffect as re, runWithOwner as fe, createMemo as Q, createSignal as K, createRoot as ce, onCleanup as H, $PROXY as b, $TRACK as Y, getListener as M, batch as se, createContext as U, createComponent as S, useContext as z, children as de, createComputed as ue, untrack as ae, onMount as G, Show as ge } from "solid-js";
import g from "gsap";
function he(e, n, t) {
  let o = t.length, i = n.length, l = o, c = 0, r = 0, f = n[i - 1].nextSibling, d = null;
  for (; c < i || r < l; ) {
    if (n[c] === t[r]) {
      c++, r++;
      continue;
    }
    for (; n[i - 1] === t[l - 1]; )
      i--, l--;
    if (i === c) {
      const s = l < o ? r ? t[r - 1].nextSibling : t[l - r] : f;
      for (; r < l; ) e.insertBefore(t[r++], s);
    } else if (l === r)
      for (; c < i; )
        (!d || !d.has(n[c])) && n[c].remove(), c++;
    else if (n[c] === t[l - 1] && t[r] === n[i - 1]) {
      const s = n[--i].nextSibling;
      e.insertBefore(t[r++], n[c++].nextSibling), e.insertBefore(t[--l], s), n[i] = t[l];
    } else {
      if (!d) {
        d = /* @__PURE__ */ new Map();
        let a = r;
        for (; a < l; ) d.set(t[a], a++);
      }
      const s = d.get(n[c]);
      if (s != null)
        if (r < s && s < l) {
          let a = c, y = 1, m;
          for (; ++a < i && a < l && !((m = d.get(n[a])) == null || m !== s + y); )
            y++;
          if (y > s - r) {
            const w = n[c];
            for (; r < s; ) e.insertBefore(t[r++], w);
          } else e.replaceChild(t[r++], n[c++]);
        } else c++;
      else n[c++].remove();
    }
  }
}
function ye(e, n, t) {
  let o;
  const i = () => {
    const c = document.createElement("template");
    return c.innerHTML = e, c.content.firstChild;
  }, l = () => (o || (o = i())).cloneNode(!0);
  return l.cloneNode = l, l;
}
function L(e, n, t, o) {
  if (t !== void 0 && !o && (o = []), typeof n != "function") return E(e, n, o, t);
  _((i) => E(e, n(), i, t), o);
}
function me(e) {
  return !!B.context && !B.done && (!e || e.isConnected);
}
function E(e, n, t, o, i) {
  const l = me(e);
  if (l) {
    !t && (t = [...e.childNodes]);
    let f = [];
    for (let d = 0; d < t.length; d++) {
      const s = t[d];
      s.nodeType === 8 && s.data.slice(0, 2) === "!$" ? s.remove() : f.push(s);
    }
    t = f;
  }
  for (; typeof t == "function"; ) t = t();
  if (n === t) return t;
  const c = typeof n, r = o !== void 0;
  if (e = r && t[0] && t[0].parentNode || e, c === "string" || c === "number") {
    if (l || c === "number" && (n = n.toString(), n === t))
      return t;
    if (r) {
      let f = t[0];
      f && f.nodeType === 3 ? f.data !== n && (f.data = n) : f = document.createTextNode(n), t = C(e, t, o, f);
    } else
      t !== "" && typeof t == "string" ? t = e.firstChild.data = n : t = e.textContent = n;
  } else if (n == null || c === "boolean") {
    if (l) return t;
    t = C(e, t, o);
  } else {
    if (c === "function")
      return _(() => {
        let f = n();
        for (; typeof f == "function"; ) f = f();
        t = E(e, f, t, o);
      }), () => t;
    if (Array.isArray(n)) {
      const f = [], d = t && Array.isArray(t);
      if (V(f, n, t, i))
        return _(() => t = E(e, f, t, o, !0)), () => t;
      if (l) {
        if (!f.length) return t;
        if (o === void 0) return t = [...e.childNodes];
        let s = f[0];
        if (s.parentNode !== e) return t;
        const a = [s];
        for (; (s = s.nextSibling) !== o; ) a.push(s);
        return t = a;
      }
      if (f.length === 0) {
        if (t = C(e, t, o), r) return t;
      } else d ? t.length === 0 ? J(e, f, o) : he(e, t, f) : (t && C(e), J(e, f));
      t = f;
    } else if (n.nodeType) {
      if (l && n.parentNode) return t = r ? [n] : n;
      if (Array.isArray(t)) {
        if (r) return t = C(e, t, o, n);
        C(e, t, null, n);
      } else t == null || t === "" || !e.firstChild ? e.appendChild(n) : e.replaceChild(n, e.firstChild);
      t = n;
    }
  }
  return t;
}
function V(e, n, t, o) {
  let i = !1;
  for (let l = 0, c = n.length; l < c; l++) {
    let r = n[l], f = t && t[e.length], d;
    if (!(r == null || r === !0 || r === !1)) if ((d = typeof r) == "object" && r.nodeType)
      e.push(r);
    else if (Array.isArray(r))
      i = V(e, r, f) || i;
    else if (d === "function")
      if (o) {
        for (; typeof r == "function"; ) r = r();
        i = V(
          e,
          Array.isArray(r) ? r : [r],
          Array.isArray(f) ? f : [f]
        ) || i;
      } else
        e.push(r), i = !0;
    else {
      const s = String(r);
      f && f.nodeType === 3 && f.data === s ? e.push(f) : e.push(document.createTextNode(s));
    }
  }
  return i;
}
function J(e, n, t = null) {
  for (let o = 0, i = n.length; o < i; o++) e.insertBefore(n[o], t);
}
function C(e, n, t, o) {
  if (t === void 0) return e.textContent = "";
  const i = o || document.createTextNode("");
  if (n.length) {
    let l = !1;
    for (let c = n.length - 1; c >= 0; c--) {
      const r = n[c];
      if (i !== r) {
        const f = r.parentNode === e;
        !l && !c ? f ? e.replaceChild(i, r) : e.insertBefore(i, t) : f && r.remove();
      } else l = !0;
    }
  } else e.insertBefore(i, t);
  return [i];
}
const Se = "http://www.w3.org/2000/svg";
function be(e, n = !1) {
  return n ? document.createElementNS(Se, e) : document.createElement(e);
}
function we(e) {
  const { useShadow: n } = e, t = document.createTextNode(""), o = () => e.mount || document.body, i = X();
  let l, c = !!B.context;
  return re(
    () => {
      c && (X().user = c = !1), l || (l = fe(i, () => Q(() => e.children)));
      const r = o();
      if (r instanceof HTMLHeadElement) {
        const [f, d] = K(!1), s = () => d(!0);
        ce((a) => L(r, () => f() ? a() : l(), null)), H(s);
      } else {
        const f = be(e.isSVG ? "g" : "div", e.isSVG), d = n && f.attachShadow ? f.attachShadow({
          mode: "open"
        }) : f;
        Object.defineProperty(f, "_$host", {
          get() {
            return t.parentNode;
          },
          configurable: !0
        }), L(d, l), r.appendChild(f), e.ref && e.ref(f), H(() => r.removeChild(f));
      }
    },
    void 0,
    {
      render: !c
    }
  ), t;
}
const q = Symbol("store-raw"), A = Symbol("store-node"), h = Symbol("store-has"), p = Symbol("store-self");
function ee(e) {
  let n = e[b];
  if (!n && (Object.defineProperty(e, b, {
    value: n = new Proxy(e, Te)
  }), !Array.isArray(e))) {
    const t = Object.keys(e), o = Object.getOwnPropertyDescriptors(e);
    for (let i = 0, l = t.length; i < l; i++) {
      const c = t[i];
      o[c].get && Object.defineProperty(e, c, {
        enumerable: o[c].enumerable,
        get: o[c].get.bind(n)
      });
    }
  }
  return n;
}
function N(e) {
  let n;
  return e != null && typeof e == "object" && (e[b] || !(n = Object.getPrototypeOf(e)) || n === Object.prototype || Array.isArray(e));
}
function x(e, n = /* @__PURE__ */ new Set()) {
  let t, o, i, l;
  if (t = e != null && e[q]) return t;
  if (!N(e) || n.has(e)) return e;
  if (Array.isArray(e)) {
    Object.isFrozen(e) ? e = e.slice(0) : n.add(e);
    for (let c = 0, r = e.length; c < r; c++)
      i = e[c], (o = x(i, n)) !== i && (e[c] = o);
  } else {
    Object.isFrozen(e) ? e = Object.assign({}, e) : n.add(e);
    const c = Object.keys(e), r = Object.getOwnPropertyDescriptors(e);
    for (let f = 0, d = c.length; f < d; f++)
      l = c[f], !r[l].get && (i = e[l], (o = x(i, n)) !== i && (e[l] = o));
  }
  return e;
}
function j(e, n) {
  let t = e[n];
  return t || Object.defineProperty(e, n, {
    value: t = /* @__PURE__ */ Object.create(null)
  }), t;
}
function F(e, n, t) {
  if (e[n]) return e[n];
  const [o, i] = K(t, {
    equals: !1,
    internal: !0
  });
  return o.$ = i, e[n] = o;
}
function Ce(e, n) {
  const t = Reflect.getOwnPropertyDescriptor(e, n);
  return !t || t.get || !t.configurable || n === b || n === A || (delete t.value, delete t.writable, t.get = () => e[b][n]), t;
}
function ne(e) {
  M() && F(j(e, A), p)();
}
function Ae(e) {
  return ne(e), Reflect.ownKeys(e);
}
const Te = {
  get(e, n, t) {
    if (n === q) return e;
    if (n === b) return t;
    if (n === Y)
      return ne(e), t;
    const o = j(e, A), i = o[n];
    let l = i ? i() : e[n];
    if (n === A || n === h || n === "__proto__") return l;
    if (!i) {
      const c = Object.getOwnPropertyDescriptor(e, n);
      M() && (typeof l != "function" || e.hasOwnProperty(n)) && !(c && c.get) && (l = F(o, n, l)());
    }
    return N(l) ? ee(l) : l;
  },
  has(e, n) {
    return n === q || n === b || n === Y || n === A || n === h || n === "__proto__" ? !0 : (M() && F(j(e, h), n)(), n in e);
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: Ae,
  getOwnPropertyDescriptor: Ce
};
function v(e, n, t, o = !1) {
  if (!o && e[n] === t) return;
  const i = e[n], l = e.length;
  t === void 0 ? (delete e[n], e[h] && e[h][n] && i !== void 0 && e[h][n].$()) : (e[n] = t, e[h] && e[h][n] && i === void 0 && e[h][n].$());
  let c = j(e, A), r;
  if ((r = F(c, n, i)) && r.$(() => t), Array.isArray(e) && e.length !== l) {
    for (let f = e.length; f < l; f++) (r = c[f]) && r.$();
    (r = F(c, "length", l)) && r.$(e.length);
  }
  (r = c[p]) && r.$();
}
function te(e, n) {
  const t = Object.keys(n);
  for (let o = 0; o < t.length; o += 1) {
    const i = t[o];
    v(e, i, n[i]);
  }
}
function Oe(e, n) {
  if (typeof n == "function" && (n = n(e)), n = x(n), Array.isArray(n)) {
    if (e === n) return;
    let t = 0, o = n.length;
    for (; t < o; t++) {
      const i = n[t];
      e[t] !== i && v(e, t, i);
    }
    v(e, "length", o);
  } else te(e, n);
}
function O(e, n, t = []) {
  let o, i = e;
  if (n.length > 1) {
    o = n.shift();
    const c = typeof o, r = Array.isArray(e);
    if (Array.isArray(o)) {
      for (let f = 0; f < o.length; f++)
        O(e, [o[f]].concat(n), t);
      return;
    } else if (r && c === "function") {
      for (let f = 0; f < e.length; f++)
        o(e[f], f) && O(e, [f].concat(n), t);
      return;
    } else if (r && c === "object") {
      const { from: f = 0, to: d = e.length - 1, by: s = 1 } = o;
      for (let a = f; a <= d; a += s)
        O(e, [a].concat(n), t);
      return;
    } else if (n.length > 1) {
      O(e[o], n, [o].concat(t));
      return;
    }
    i = e[o], t = [o].concat(t);
  }
  let l = n[0];
  typeof l == "function" && (l = l(i, t), l === i) || o === void 0 && l == null || (l = x(l), o === void 0 || N(i) && N(l) && !Array.isArray(l) ? te(i, l) : v(e, o, l));
}
function xe(...[e, n]) {
  const t = x(e || {}), o = Array.isArray(t), i = ee(t);
  function l(...c) {
    se(() => {
      o && c.length === 1 ? Oe(t, c[0]) : O(t, c);
    });
  }
  return [i, l];
}
const D = {
  enterFrom: {
    opacity: 0,
    y: -25,
    filter: "blur(5px)"
  },
  enterTo: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)"
  },
  leaveFrom: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)"
  },
  leaveTo: {
    opacity: 0,
    y: 25,
    filter: "blur(5px)"
  }
}, $ = {
  enterFrom: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    backdropFilter: "blur(0px)"
  },
  enterTo: {
    backgroundColor: "rgba(0, 0, 0, 0.125)",
    backdropFilter: "blur(2px)"
  },
  leaveFrom: {
    backgroundColor: "rgba(0, 0, 0, 0.125)",
    backdropFilter: "blur(2px)"
  },
  leaveTo: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    backdropFilter: "blur(0px)"
  }
}, oe = U(null);
function Fe() {
  const e = z(oe);
  if (e === null)
    throw new Error("useDialogForInternal must be used within a DialogProvider");
  return e;
}
function ve(e) {
  var l, c, r, f, d, s, a, y, m, w, u, T, P, k, R, W;
  const [n, t] = xe({
    latestZIndex: 99
  });
  function o(I) {
    var Z;
    return {
      ...I,
      duration: ((Z = e.config) == null ? void 0 : Z.animationInSecond) ?? 0.3
    };
  }
  const i = {
    state: n,
    config: {
      contentSpec: {
        enterFrom: ((c = (l = e.config) == null ? void 0 : l.contentSpec) == null ? void 0 : c.enterFrom) ?? D.enterFrom,
        enterTo: o(((f = (r = e.config) == null ? void 0 : r.contentSpec) == null ? void 0 : f.enterTo) ?? D.enterTo),
        leaveFrom: ((s = (d = e.config) == null ? void 0 : d.contentSpec) == null ? void 0 : s.leaveFrom) ?? D.leaveFrom,
        leaveTo: o(((y = (a = e.config) == null ? void 0 : a.contentSpec) == null ? void 0 : y.leaveTo) ?? D.leaveTo)
      },
      scrimSpec: {
        enterFrom: ((w = (m = e.config) == null ? void 0 : m.scrimSpec) == null ? void 0 : w.enterFrom) ?? $.enterFrom,
        enterTo: o(((T = (u = e.config) == null ? void 0 : u.scrimSpec) == null ? void 0 : T.enterTo) ?? $.enterTo),
        leaveFrom: ((k = (P = e.config) == null ? void 0 : P.scrimSpec) == null ? void 0 : k.leaveFrom) ?? $.leaveFrom,
        leaveTo: o(((W = (R = e.config) == null ? void 0 : R.scrimSpec) == null ? void 0 : W.leaveTo) ?? $.leaveTo)
      }
    },
    requestRender() {
      t("latestZIndex", (I) => I + 1);
    }
  };
  return S(oe.Provider, {
    value: i,
    get children() {
      return e.children;
    }
  });
}
var Pe = (e) => e instanceof Element;
function ie(e) {
  const n = e.ref, t = de(() => e.children);
  let o;
  return ue(() => {
    const i = t.toArray().find(Pe);
    i !== o && ae(() => n(i)), o = i;
  }), H(() => o && n(void 0)), t;
}
const le = U(null);
function De() {
  const e = z(le);
  if (!e) throw new Error("useDialog must be used within a DialogInternalProvider");
  return e;
}
function $e(e) {
  const [n, t] = K(), o = Q(() => {
    var u;
    return (u = n()) == null ? void 0 : u.parentElement;
  }), i = Fe(), l = i.config.scrimSpec, c = i.config.contentSpec;
  let r;
  function f() {
    const u = n();
    u && (g.set(u, c.enterFrom), g.to(u, c.enterTo));
  }
  function d() {
    const u = o();
    u && (g.set(u, {
      inset: 0,
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: i.state.latestZIndex
    }), i.requestRender(), g.set(u, l.enterFrom), r = g.to(u, l.enterTo));
  }
  function s() {
    d(), f();
  }
  G(s);
  function a() {
    const u = o();
    u && (g.set(u, l.leaveFrom), r = g.to(u, l.leaveTo));
  }
  function y() {
    const u = n();
    u && (g.set(u, c.leaveFrom), g.to(u, c.leaveTo));
  }
  function m() {
    y(), a(), r.then(() => {
      var u;
      (u = e.onClose) == null || u.call(e);
    });
  }
  function w() {
    const u = o(), T = n();
    !u || !T || e.closeOnScrimClick == !0 && (u.onclick = function(P) {
      P.target.contains(T) && m();
    });
  }
  return G(w), S(le.Provider, {
    get value() {
      return {
        onClose: m,
        closeOnScrimClick: e.closeOnScrimClick
      };
    },
    get children() {
      return S(ie, {
        ref: t,
        get children() {
          return e.children;
        }
      });
    }
  });
}
var Ee = /* @__PURE__ */ ye("<div>");
function ke(e) {
  return S(ge, {
    get when() {
      return e.show;
    },
    get children() {
      return S(we, {
        get mount() {
          return document.body;
        },
        get children() {
          return S($e, {
            get onClose() {
              return e.onClose;
            },
            get closeOnScrimClick() {
              return e.closeOnScrimClick;
            },
            get children() {
              var n = Ee();
              return n.style.setProperty("margin-inline", "auto"), n.style.setProperty("width", "max-content"), L(n, () => e.children), n;
            }
          });
        }
      });
    }
  });
}
function Re(e) {
  let n;
  const t = De();
  return G(() => {
    n.onclick = function() {
      t.onClose();
    };
  }), S(ie, {
    ref(o) {
      var i = n;
      typeof i == "function" ? i(o) : n = o;
    },
    get children() {
      return e.children;
    }
  });
}
export {
  ke as Dialog,
  Re as DialogCloseButton,
  ve as DialogProvider
};
