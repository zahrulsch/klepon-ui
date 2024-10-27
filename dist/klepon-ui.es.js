import { createRenderEffect as B, getOwner as Y, sharedConfig as H, createEffect as re, runWithOwner as fe, createMemo as U, createSignal as Z, createRoot as ce, onCleanup as M, $PROXY as b, $TRACK as J, getListener as L, batch as se, createContext as z, createComponent as w, useContext as G, children as de, createComputed as ue, untrack as ae, onMount as V, Show as ge } from "solid-js";
import g from "gsap";
function he(e, n, t) {
  let o = t.length, i = n.length, f = o, c = 0, l = 0, r = n[i - 1].nextSibling, d = null;
  for (; c < i || l < f; ) {
    if (n[c] === t[l]) {
      c++, l++;
      continue;
    }
    for (; n[i - 1] === t[f - 1]; )
      i--, f--;
    if (i === c) {
      const s = f < o ? l ? t[l - 1].nextSibling : t[f - l] : r;
      for (; l < f; ) e.insertBefore(t[l++], s);
    } else if (f === l)
      for (; c < i; )
        (!d || !d.has(n[c])) && n[c].remove(), c++;
    else if (n[c] === t[f - 1] && t[l] === n[i - 1]) {
      const s = n[--i].nextSibling;
      e.insertBefore(t[l++], n[c++].nextSibling), e.insertBefore(t[--f], s), n[i] = t[f];
    } else {
      if (!d) {
        d = /* @__PURE__ */ new Map();
        let a = l;
        for (; a < f; ) d.set(t[a], a++);
      }
      const s = d.get(n[c]);
      if (s != null)
        if (l < s && s < f) {
          let a = c, y = 1, S;
          for (; ++a < i && a < f && !((S = d.get(n[a])) == null || S !== s + y); )
            y++;
          if (y > s - l) {
            const m = n[c];
            for (; l < s; ) e.insertBefore(t[l++], m);
          } else e.replaceChild(t[l++], n[c++]);
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
  }, f = () => (o || (o = i())).cloneNode(!0);
  return f.cloneNode = f, f;
}
function q(e, n, t, o) {
  if (t !== void 0 && !o && (o = []), typeof n != "function") return N(e, n, o, t);
  B((i) => N(e, n(), i, t), o);
}
function Se(e) {
  return !!H.context && !H.done && (!e || e.isConnected);
}
function N(e, n, t, o, i) {
  const f = Se(e);
  if (f) {
    !t && (t = [...e.childNodes]);
    let r = [];
    for (let d = 0; d < t.length; d++) {
      const s = t[d];
      s.nodeType === 8 && s.data.slice(0, 2) === "!$" ? s.remove() : r.push(s);
    }
    t = r;
  }
  for (; typeof t == "function"; ) t = t();
  if (n === t) return t;
  const c = typeof n, l = o !== void 0;
  if (e = l && t[0] && t[0].parentNode || e, c === "string" || c === "number") {
    if (f || c === "number" && (n = n.toString(), n === t))
      return t;
    if (l) {
      let r = t[0];
      r && r.nodeType === 3 ? r.data !== n && (r.data = n) : r = document.createTextNode(n), t = C(e, t, o, r);
    } else
      t !== "" && typeof t == "string" ? t = e.firstChild.data = n : t = e.textContent = n;
  } else if (n == null || c === "boolean") {
    if (f) return t;
    t = C(e, t, o);
  } else {
    if (c === "function")
      return B(() => {
        let r = n();
        for (; typeof r == "function"; ) r = r();
        t = N(e, r, t, o);
      }), () => t;
    if (Array.isArray(n)) {
      const r = [], d = t && Array.isArray(t);
      if (K(r, n, t, i))
        return B(() => t = N(e, r, t, o, !0)), () => t;
      if (f) {
        if (!r.length) return t;
        if (o === void 0) return t = [...e.childNodes];
        let s = r[0];
        if (s.parentNode !== e) return t;
        const a = [s];
        for (; (s = s.nextSibling) !== o; ) a.push(s);
        return t = a;
      }
      if (r.length === 0) {
        if (t = C(e, t, o), l) return t;
      } else d ? t.length === 0 ? Q(e, r, o) : he(e, t, r) : (t && C(e), Q(e, r));
      t = r;
    } else if (n.nodeType) {
      if (f && n.parentNode) return t = l ? [n] : n;
      if (Array.isArray(t)) {
        if (l) return t = C(e, t, o, n);
        C(e, t, null, n);
      } else t == null || t === "" || !e.firstChild ? e.appendChild(n) : e.replaceChild(n, e.firstChild);
      t = n;
    }
  }
  return t;
}
function K(e, n, t, o) {
  let i = !1;
  for (let f = 0, c = n.length; f < c; f++) {
    let l = n[f], r = t && t[e.length], d;
    if (!(l == null || l === !0 || l === !1)) if ((d = typeof l) == "object" && l.nodeType)
      e.push(l);
    else if (Array.isArray(l))
      i = K(e, l, r) || i;
    else if (d === "function")
      if (o) {
        for (; typeof l == "function"; ) l = l();
        i = K(
          e,
          Array.isArray(l) ? l : [l],
          Array.isArray(r) ? r : [r]
        ) || i;
      } else
        e.push(l), i = !0;
    else {
      const s = String(l);
      r && r.nodeType === 3 && r.data === s ? e.push(r) : e.push(document.createTextNode(s));
    }
  }
  return i;
}
function Q(e, n, t = null) {
  for (let o = 0, i = n.length; o < i; o++) e.insertBefore(n[o], t);
}
function C(e, n, t, o) {
  if (t === void 0) return e.textContent = "";
  const i = o || document.createTextNode("");
  if (n.length) {
    let f = !1;
    for (let c = n.length - 1; c >= 0; c--) {
      const l = n[c];
      if (i !== l) {
        const r = l.parentNode === e;
        !f && !c ? r ? e.replaceChild(i, l) : e.insertBefore(i, t) : r && l.remove();
      } else f = !0;
    }
  } else e.insertBefore(i, t);
  return [i];
}
const me = "http://www.w3.org/2000/svg";
function we(e, n = !1) {
  return n ? document.createElementNS(me, e) : document.createElement(e);
}
function be(e) {
  const { useShadow: n } = e, t = document.createTextNode(""), o = () => e.mount || document.body, i = Y();
  let f, c = !!H.context;
  return re(
    () => {
      c && (Y().user = c = !1), f || (f = fe(i, () => U(() => e.children)));
      const l = o();
      if (l instanceof HTMLHeadElement) {
        const [r, d] = Z(!1), s = () => d(!0);
        ce((a) => q(l, () => r() ? a() : f(), null)), M(s);
      } else {
        const r = we(e.isSVG ? "g" : "div", e.isSVG), d = n && r.attachShadow ? r.attachShadow({
          mode: "open"
        }) : r;
        Object.defineProperty(r, "_$host", {
          get() {
            return t.parentNode;
          },
          configurable: !0
        }), q(d, f), l.appendChild(r), e.ref && e.ref(r), M(() => l.removeChild(r));
      }
    },
    void 0,
    {
      render: !c
    }
  ), t;
}
const W = Symbol("store-raw"), A = Symbol("store-node"), h = Symbol("store-has"), p = Symbol("store-self");
function ee(e) {
  let n = e[b];
  if (!n && (Object.defineProperty(e, b, {
    value: n = new Proxy(e, Te)
  }), !Array.isArray(e))) {
    const t = Object.keys(e), o = Object.getOwnPropertyDescriptors(e);
    for (let i = 0, f = t.length; i < f; i++) {
      const c = t[i];
      o[c].get && Object.defineProperty(e, c, {
        enumerable: o[c].enumerable,
        get: o[c].get.bind(n)
      });
    }
  }
  return n;
}
function v(e) {
  let n;
  return e != null && typeof e == "object" && (e[b] || !(n = Object.getPrototypeOf(e)) || n === Object.prototype || Array.isArray(e));
}
function x(e, n = /* @__PURE__ */ new Set()) {
  let t, o, i, f;
  if (t = e != null && e[W]) return t;
  if (!v(e) || n.has(e)) return e;
  if (Array.isArray(e)) {
    Object.isFrozen(e) ? e = e.slice(0) : n.add(e);
    for (let c = 0, l = e.length; c < l; c++)
      i = e[c], (o = x(i, n)) !== i && (e[c] = o);
  } else {
    Object.isFrozen(e) ? e = Object.assign({}, e) : n.add(e);
    const c = Object.keys(e), l = Object.getOwnPropertyDescriptors(e);
    for (let r = 0, d = c.length; r < d; r++)
      f = c[r], !l[f].get && (i = e[f], (o = x(i, n)) !== i && (e[f] = o));
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
  const [o, i] = Z(t, {
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
  L() && F(j(e, A), p)();
}
function Ae(e) {
  return ne(e), Reflect.ownKeys(e);
}
const Te = {
  get(e, n, t) {
    if (n === W) return e;
    if (n === b) return t;
    if (n === J)
      return ne(e), t;
    const o = j(e, A), i = o[n];
    let f = i ? i() : e[n];
    if (n === A || n === h || n === "__proto__") return f;
    if (!i) {
      const c = Object.getOwnPropertyDescriptor(e, n);
      L() && (typeof f != "function" || e.hasOwnProperty(n)) && !(c && c.get) && (f = F(o, n, f)());
    }
    return v(f) ? ee(f) : f;
  },
  has(e, n) {
    return n === W || n === b || n === J || n === A || n === h || n === "__proto__" ? !0 : (L() && F(j(e, h), n)(), n in e);
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
function k(e, n, t, o = !1) {
  if (!o && e[n] === t) return;
  const i = e[n], f = e.length;
  t === void 0 ? (delete e[n], e[h] && e[h][n] && i !== void 0 && e[h][n].$()) : (e[n] = t, e[h] && e[h][n] && i === void 0 && e[h][n].$());
  let c = j(e, A), l;
  if ((l = F(c, n, i)) && l.$(() => t), Array.isArray(e) && e.length !== f) {
    for (let r = e.length; r < f; r++) (l = c[r]) && l.$();
    (l = F(c, "length", f)) && l.$(e.length);
  }
  (l = c[p]) && l.$();
}
function te(e, n) {
  const t = Object.keys(n);
  for (let o = 0; o < t.length; o += 1) {
    const i = t[o];
    k(e, i, n[i]);
  }
}
function Oe(e, n) {
  if (typeof n == "function" && (n = n(e)), n = x(n), Array.isArray(n)) {
    if (e === n) return;
    let t = 0, o = n.length;
    for (; t < o; t++) {
      const i = n[t];
      e[t] !== i && k(e, t, i);
    }
    k(e, "length", o);
  } else te(e, n);
}
function O(e, n, t = []) {
  let o, i = e;
  if (n.length > 1) {
    o = n.shift();
    const c = typeof o, l = Array.isArray(e);
    if (Array.isArray(o)) {
      for (let r = 0; r < o.length; r++)
        O(e, [o[r]].concat(n), t);
      return;
    } else if (l && c === "function") {
      for (let r = 0; r < e.length; r++)
        o(e[r], r) && O(e, [r].concat(n), t);
      return;
    } else if (l && c === "object") {
      const { from: r = 0, to: d = e.length - 1, by: s = 1 } = o;
      for (let a = r; a <= d; a += s)
        O(e, [a].concat(n), t);
      return;
    } else if (n.length > 1) {
      O(e[o], n, [o].concat(t));
      return;
    }
    i = e[o], t = [o].concat(t);
  }
  let f = n[0];
  typeof f == "function" && (f = f(i, t), f === i) || o === void 0 && f == null || (f = x(f), o === void 0 || v(i) && v(f) && !Array.isArray(f) ? te(i, f) : k(e, o, f));
}
function xe(...[e, n]) {
  const t = x(e || {}), o = Array.isArray(t), i = ee(t);
  function f(...c) {
    se(() => {
      o && c.length === 1 ? Oe(t, c[0]) : O(t, c);
    });
  }
  return [i, f];
}
const $ = {
  enterFrom: { opacity: 0, y: -30, filter: "blur(2px)" },
  enterTo: { opacity: 1, y: 0, filter: "blur(0px)" },
  leaveFrom: { opacity: 1, y: 0, filter: "blur(0px)" },
  leaveTo: { opacity: 0, y: 30, filter: "blur(2px)" }
}, E = {
  enterFrom: { backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" },
  enterTo: {
    backgroundColor: "rgba(0, 0, 0, 0.125)",
    backdropFilter: "blur(3px)"
  },
  leaveFrom: { backgroundColor: "rgba(0, 0, 0, 0.125)", backdropFilter: "blur(3px)" },
  leaveTo: { backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" }
}, oe = z(null);
function Fe() {
  const e = G(oe);
  if (e === null) throw new Error("useDialogForInternal must be used within a DialogProvider");
  return e;
}
function je(e) {
  var f, c, l, r, d, s, a, y, S, m, P, u, T, D, R, I;
  const [n, t] = xe({
    latestZIndex: 99
  });
  function o(_) {
    var X;
    return {
      ..._,
      duration: ((X = e.config) == null ? void 0 : X.animationInSecond) ?? 0.25
    };
  }
  const i = {
    state: n,
    config: {
      contentSpec: {
        enterFrom: ((c = (f = e.config) == null ? void 0 : f.contentSpec) == null ? void 0 : c.enterFrom) ?? $.enterFrom,
        enterTo: o(((r = (l = e.config) == null ? void 0 : l.contentSpec) == null ? void 0 : r.enterTo) ?? $.enterTo),
        leaveFrom: ((s = (d = e.config) == null ? void 0 : d.contentSpec) == null ? void 0 : s.leaveFrom) ?? $.leaveFrom,
        leaveTo: o(((y = (a = e.config) == null ? void 0 : a.contentSpec) == null ? void 0 : y.leaveTo) ?? $.leaveTo)
      },
      scrimSpec: {
        enterFrom: ((m = (S = e.config) == null ? void 0 : S.scrimSpec) == null ? void 0 : m.enterFrom) ?? E.enterFrom,
        enterTo: o(((u = (P = e.config) == null ? void 0 : P.scrimSpec) == null ? void 0 : u.enterTo) ?? E.enterTo),
        leaveFrom: ((D = (T = e.config) == null ? void 0 : T.scrimSpec) == null ? void 0 : D.leaveFrom) ?? E.leaveFrom,
        leaveTo: o(((I = (R = e.config) == null ? void 0 : R.scrimSpec) == null ? void 0 : I.leaveTo) ?? E.leaveTo)
      }
    },
    requestRender() {
      t("latestZIndex", (_) => _ + 1);
    }
  };
  return w(oe.Provider, {
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
  }), M(() => o && n(void 0)), t;
}
const le = z(null);
function De() {
  const e = G(le);
  if (!e) throw new Error("useDialog must be used within a DialogInternalProvider");
  return e;
}
function $e(e) {
  const [n, t] = Z(), o = U(() => {
    var u;
    return (u = n()) == null ? void 0 : u.parentElement;
  }), i = Fe(), f = i.config.scrimSpec, c = i.config.contentSpec;
  let l, r;
  function d() {
    const u = n();
    u && (r == null || r.pause(), g.set(u, c.enterFrom), r = g.to(u, c.enterTo));
  }
  function s() {
    const u = o();
    u && (l == null || l.pause(), g.set(u, {
      inset: 0,
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1.25rem",
      overflow: "hidden",
      zIndex: i.state.latestZIndex
    }), i.requestRender(), g.set(u, f.enterFrom), l = g.to(u, f.enterTo));
  }
  function a() {
    s(), d();
  }
  V(a);
  function y() {
    const u = o();
    u && (l == null || l.pause(), g.set(u, f.leaveFrom), l = g.to(u, f.leaveTo));
  }
  function S() {
    const u = n();
    u && (r == null || r.pause(), g.set(u, c.leaveFrom), r = g.to(u, c.leaveTo));
  }
  function m() {
    S(), y(), l == null || l.then(() => {
      var u;
      (u = e.onClose) == null || u.call(e);
    });
  }
  function P() {
    const u = o(), T = n();
    !u || !T || e.closeOnScrimClick == !0 && (u.onclick = function(D) {
      D.target.contains(T) && m();
    });
  }
  return V(P), w(le.Provider, {
    get value() {
      return {
        onClose: m,
        closeOnScrimClick: e.closeOnScrimClick
      };
    },
    get children() {
      return w(ie, {
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
  return w(ge, {
    get when() {
      return e.show;
    },
    get children() {
      return w(be, {
        get mount() {
          return document.body;
        },
        get children() {
          return w($e, {
            get onClose() {
              return e.onClose;
            },
            get closeOnScrimClick() {
              return e.closeOnScrimClick;
            },
            get children() {
              var n = Ee();
              return n.style.setProperty("margin-inline", "auto"), n.style.setProperty("width", "max-content"), q(n, () => e.children), n;
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
  return V(() => {
    n.onclick = function() {
      t.onClose();
    };
  }), w(ie, {
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
  je as DialogProvider
};
