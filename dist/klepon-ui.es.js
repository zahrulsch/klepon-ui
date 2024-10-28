import { createRenderEffect as H, getOwner as Q, sharedConfig as L, createEffect as ue, runWithOwner as de, createMemo as Z, createSignal as U, createRoot as ae, onCleanup as R, $PROXY as b, $TRACK as z, getListener as V, batch as ge, createContext as X, createComponent as m, useContext as Y, children as he, createComputed as me, untrack as ye, onMount as P, Show as ee } from "solid-js";
import h from "gsap";
import { createPopper as Se } from "@popperjs/core";
function we(e, n, t) {
  let i = t.length, r = n.length, c = i, f = 0, l = 0, o = n[r - 1].nextSibling, s = null;
  for (; f < r || l < c; ) {
    if (n[f] === t[l]) {
      f++, l++;
      continue;
    }
    for (; n[r - 1] === t[c - 1]; )
      r--, c--;
    if (r === f) {
      const u = c < i ? l ? t[l - 1].nextSibling : t[c - l] : o;
      for (; l < c; ) e.insertBefore(t[l++], u);
    } else if (c === l)
      for (; f < r; )
        (!s || !s.has(n[f])) && n[f].remove(), f++;
    else if (n[f] === t[c - 1] && t[l] === n[r - 1]) {
      const u = n[--r].nextSibling;
      e.insertBefore(t[l++], n[f++].nextSibling), e.insertBefore(t[--c], u), n[r] = t[c];
    } else {
      if (!s) {
        s = /* @__PURE__ */ new Map();
        let a = l;
        for (; a < c; ) s.set(t[a], a++);
      }
      const u = s.get(n[f]);
      if (u != null)
        if (l < u && u < c) {
          let a = f, g = 1, S;
          for (; ++a < r && a < c && !((S = s.get(n[a])) == null || S !== u + g); )
            g++;
          if (g > u - l) {
            const w = n[f];
            for (; l < u; ) e.insertBefore(t[l++], w);
          } else e.replaceChild(t[l++], n[f++]);
        } else f++;
      else n[f++].remove();
    }
  }
}
function be(e, n, t) {
  let i;
  const r = () => {
    const f = document.createElement("template");
    return f.innerHTML = e, f.content.firstChild;
  }, c = () => (i || (i = r())).cloneNode(!0);
  return c.cloneNode = c, c;
}
function q(e, n, t, i) {
  if (t !== void 0 && !i && (i = []), typeof n != "function") return k(e, n, i, t);
  H((r) => k(e, n(), r, t), i);
}
function Ce(e) {
  return !!L.context && !L.done && (!e || e.isConnected);
}
function k(e, n, t, i, r) {
  const c = Ce(e);
  if (c) {
    !t && (t = [...e.childNodes]);
    let o = [];
    for (let s = 0; s < t.length; s++) {
      const u = t[s];
      u.nodeType === 8 && u.data.slice(0, 2) === "!$" ? u.remove() : o.push(u);
    }
    t = o;
  }
  for (; typeof t == "function"; ) t = t();
  if (n === t) return t;
  const f = typeof n, l = i !== void 0;
  if (e = l && t[0] && t[0].parentNode || e, f === "string" || f === "number") {
    if (c || f === "number" && (n = n.toString(), n === t))
      return t;
    if (l) {
      let o = t[0];
      o && o.nodeType === 3 ? o.data !== n && (o.data = n) : o = document.createTextNode(n), t = C(e, t, i, o);
    } else
      t !== "" && typeof t == "string" ? t = e.firstChild.data = n : t = e.textContent = n;
  } else if (n == null || f === "boolean") {
    if (c) return t;
    t = C(e, t, i);
  } else {
    if (f === "function")
      return H(() => {
        let o = n();
        for (; typeof o == "function"; ) o = o();
        t = k(e, o, t, i);
      }), () => t;
    if (Array.isArray(n)) {
      const o = [], s = t && Array.isArray(t);
      if (K(o, n, t, r))
        return H(() => t = k(e, o, t, i, !0)), () => t;
      if (c) {
        if (!o.length) return t;
        if (i === void 0) return t = [...e.childNodes];
        let u = o[0];
        if (u.parentNode !== e) return t;
        const a = [u];
        for (; (u = u.nextSibling) !== i; ) a.push(u);
        return t = a;
      }
      if (o.length === 0) {
        if (t = C(e, t, i), l) return t;
      } else s ? t.length === 0 ? G(e, o, i) : we(e, t, o) : (t && C(e), G(e, o));
      t = o;
    } else if (n.nodeType) {
      if (c && n.parentNode) return t = l ? [n] : n;
      if (Array.isArray(t)) {
        if (l) return t = C(e, t, i, n);
        C(e, t, null, n);
      } else t == null || t === "" || !e.firstChild ? e.appendChild(n) : e.replaceChild(n, e.firstChild);
      t = n;
    }
  }
  return t;
}
function K(e, n, t, i) {
  let r = !1;
  for (let c = 0, f = n.length; c < f; c++) {
    let l = n[c], o = t && t[e.length], s;
    if (!(l == null || l === !0 || l === !1)) if ((s = typeof l) == "object" && l.nodeType)
      e.push(l);
    else if (Array.isArray(l))
      r = K(e, l, o) || r;
    else if (s === "function")
      if (i) {
        for (; typeof l == "function"; ) l = l();
        r = K(
          e,
          Array.isArray(l) ? l : [l],
          Array.isArray(o) ? o : [o]
        ) || r;
      } else
        e.push(l), r = !0;
    else {
      const u = String(l);
      o && o.nodeType === 3 && o.data === u ? e.push(o) : e.push(document.createTextNode(u));
    }
  }
  return r;
}
function G(e, n, t = null) {
  for (let i = 0, r = n.length; i < r; i++) e.insertBefore(n[i], t);
}
function C(e, n, t, i) {
  if (t === void 0) return e.textContent = "";
  const r = i || document.createTextNode("");
  if (n.length) {
    let c = !1;
    for (let f = n.length - 1; f >= 0; f--) {
      const l = n[f];
      if (r !== l) {
        const o = l.parentNode === e;
        !c && !f ? o ? e.replaceChild(r, l) : e.insertBefore(r, t) : o && l.remove();
      } else c = !0;
    }
  } else e.insertBefore(r, t);
  return [r];
}
const xe = "http://www.w3.org/2000/svg";
function Ae(e, n = !1) {
  return n ? document.createElementNS(xe, e) : document.createElement(e);
}
function Oe(e) {
  const { useShadow: n } = e, t = document.createTextNode(""), i = () => e.mount || document.body, r = Q();
  let c, f = !!L.context;
  return ue(
    () => {
      f && (Q().user = f = !1), c || (c = de(r, () => Z(() => e.children)));
      const l = i();
      if (l instanceof HTMLHeadElement) {
        const [o, s] = U(!1), u = () => s(!0);
        ae((a) => q(l, () => o() ? a() : c(), null)), R(u);
      } else {
        const o = Ae(e.isSVG ? "g" : "div", e.isSVG), s = n && o.attachShadow ? o.attachShadow({
          mode: "open"
        }) : o;
        Object.defineProperty(o, "_$host", {
          get() {
            return t.parentNode;
          },
          configurable: !0
        }), q(s, c), l.appendChild(o), e.ref && e.ref(o), R(() => l.removeChild(o));
      }
    },
    void 0,
    {
      render: !f
    }
  ), t;
}
const W = Symbol("store-raw"), x = Symbol("store-node"), y = Symbol("store-has"), ne = Symbol("store-self");
function te(e) {
  let n = e[b];
  if (!n && (Object.defineProperty(e, b, {
    value: n = new Proxy(e, Fe)
  }), !Array.isArray(e))) {
    const t = Object.keys(e), i = Object.getOwnPropertyDescriptors(e);
    for (let r = 0, c = t.length; r < c; r++) {
      const f = t[r];
      i[f].get && Object.defineProperty(e, f, {
        enumerable: i[f].enumerable,
        get: i[f].get.bind(n)
      });
    }
  }
  return n;
}
function $(e) {
  let n;
  return e != null && typeof e == "object" && (e[b] || !(n = Object.getPrototypeOf(e)) || n === Object.prototype || Array.isArray(e));
}
function T(e, n = /* @__PURE__ */ new Set()) {
  let t, i, r, c;
  if (t = e != null && e[W]) return t;
  if (!$(e) || n.has(e)) return e;
  if (Array.isArray(e)) {
    Object.isFrozen(e) ? e = e.slice(0) : n.add(e);
    for (let f = 0, l = e.length; f < l; f++)
      r = e[f], (i = T(r, n)) !== r && (e[f] = i);
  } else {
    Object.isFrozen(e) ? e = Object.assign({}, e) : n.add(e);
    const f = Object.keys(e), l = Object.getOwnPropertyDescriptors(e);
    for (let o = 0, s = f.length; o < s; o++)
      c = f[o], !l[c].get && (r = e[c], (i = T(r, n)) !== r && (e[c] = i));
  }
  return e;
}
function I(e, n) {
  let t = e[n];
  return t || Object.defineProperty(e, n, {
    value: t = /* @__PURE__ */ Object.create(null)
  }), t;
}
function F(e, n, t) {
  if (e[n]) return e[n];
  const [i, r] = U(t, {
    equals: !1,
    internal: !0
  });
  return i.$ = r, e[n] = i;
}
function Pe(e, n) {
  const t = Reflect.getOwnPropertyDescriptor(e, n);
  return !t || t.get || !t.configurable || n === b || n === x || (delete t.value, delete t.writable, t.get = () => e[b][n]), t;
}
function oe(e) {
  V() && F(I(e, x), ne)();
}
function Te(e) {
  return oe(e), Reflect.ownKeys(e);
}
const Fe = {
  get(e, n, t) {
    if (n === W) return e;
    if (n === b) return t;
    if (n === z)
      return oe(e), t;
    const i = I(e, x), r = i[n];
    let c = r ? r() : e[n];
    if (n === x || n === y || n === "__proto__") return c;
    if (!r) {
      const f = Object.getOwnPropertyDescriptor(e, n);
      V() && (typeof c != "function" || e.hasOwnProperty(n)) && !(f && f.get) && (c = F(i, n, c)());
    }
    return $(c) ? te(c) : c;
  },
  has(e, n) {
    return n === W || n === b || n === z || n === x || n === y || n === "__proto__" ? !0 : (V() && F(I(e, y), n)(), n in e);
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: Te,
  getOwnPropertyDescriptor: Pe
};
function N(e, n, t, i = !1) {
  if (!i && e[n] === t) return;
  const r = e[n], c = e.length;
  t === void 0 ? (delete e[n], e[y] && e[y][n] && r !== void 0 && e[y][n].$()) : (e[n] = t, e[y] && e[y][n] && r === void 0 && e[y][n].$());
  let f = I(e, x), l;
  if ((l = F(f, n, r)) && l.$(() => t), Array.isArray(e) && e.length !== c) {
    for (let o = e.length; o < c; o++) (l = f[o]) && l.$();
    (l = F(f, "length", c)) && l.$(e.length);
  }
  (l = f[ne]) && l.$();
}
function ie(e, n) {
  const t = Object.keys(n);
  for (let i = 0; i < t.length; i += 1) {
    const r = t[i];
    N(e, r, n[r]);
  }
}
function ve(e, n) {
  if (typeof n == "function" && (n = n(e)), n = T(n), Array.isArray(n)) {
    if (e === n) return;
    let t = 0, i = n.length;
    for (; t < i; t++) {
      const r = n[t];
      e[t] !== r && N(e, t, r);
    }
    N(e, "length", i);
  } else ie(e, n);
}
function O(e, n, t = []) {
  let i, r = e;
  if (n.length > 1) {
    i = n.shift();
    const f = typeof i, l = Array.isArray(e);
    if (Array.isArray(i)) {
      for (let o = 0; o < i.length; o++)
        O(e, [i[o]].concat(n), t);
      return;
    } else if (l && f === "function") {
      for (let o = 0; o < e.length; o++)
        i(e[o], o) && O(e, [o].concat(n), t);
      return;
    } else if (l && f === "object") {
      const { from: o = 0, to: s = e.length - 1, by: u = 1 } = i;
      for (let a = o; a <= s; a += u)
        O(e, [a].concat(n), t);
      return;
    } else if (n.length > 1) {
      O(e[i], n, [i].concat(t));
      return;
    }
    r = e[i], t = [i].concat(t);
  }
  let c = n[0];
  typeof c == "function" && (c = c(r, t), c === r) || i === void 0 && c == null || (c = T(c), i === void 0 || $(r) && $(c) && !Array.isArray(c) ? ie(r, c) : N(e, i, c));
}
function re(...[e, n]) {
  const t = T(e || {}), i = Array.isArray(t), r = te(t);
  function c(...f) {
    ge(() => {
      i && f.length === 1 ? ve(t, f[0]) : O(t, f);
    });
  }
  return [r, c];
}
const p = {
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
}, le = X(null);
function De() {
  const e = Y(le);
  if (e === null) throw new Error("useDialogForInternal must be used within a DialogProvider");
  return e;
}
function _e(e) {
  var c, f, l, o, s, u, a, g, S, w, v, d, A, D, _, M;
  const [n, t] = re({
    latestZIndex: 99
  });
  function i(B) {
    var J;
    return {
      ...B,
      duration: ((J = e.config) == null ? void 0 : J.animationInSecond) ?? 0.25
    };
  }
  const r = {
    state: n,
    config: {
      contentSpec: {
        enterFrom: ((f = (c = e.config) == null ? void 0 : c.contentSpec) == null ? void 0 : f.enterFrom) ?? p.enterFrom,
        enterTo: i(((o = (l = e.config) == null ? void 0 : l.contentSpec) == null ? void 0 : o.enterTo) ?? p.enterTo),
        leaveFrom: ((u = (s = e.config) == null ? void 0 : s.contentSpec) == null ? void 0 : u.leaveFrom) ?? p.leaveFrom,
        leaveTo: i(((g = (a = e.config) == null ? void 0 : a.contentSpec) == null ? void 0 : g.leaveTo) ?? p.leaveTo)
      },
      scrimSpec: {
        enterFrom: ((w = (S = e.config) == null ? void 0 : S.scrimSpec) == null ? void 0 : w.enterFrom) ?? E.enterFrom,
        enterTo: i(((d = (v = e.config) == null ? void 0 : v.scrimSpec) == null ? void 0 : d.enterTo) ?? E.enterTo),
        leaveFrom: ((D = (A = e.config) == null ? void 0 : A.scrimSpec) == null ? void 0 : D.leaveFrom) ?? E.leaveFrom,
        leaveTo: i(((M = (_ = e.config) == null ? void 0 : _.scrimSpec) == null ? void 0 : M.leaveTo) ?? E.leaveTo)
      }
    },
    requestRender() {
      t("latestZIndex", (B) => B + 1);
    }
  };
  return m(le.Provider, {
    value: r,
    get children() {
      return e.children;
    }
  });
}
var pe = (e) => e instanceof Element;
function j(e) {
  const n = e.ref, t = he(() => e.children);
  let i;
  return me(() => {
    const r = t.toArray().find(pe);
    r !== i && ye(() => n(r)), i = r;
  }), R(() => i && n(void 0)), t;
}
const ce = X(null);
function Ee() {
  const e = Y(ce);
  if (!e) throw new Error("useDialog must be used within a DialogInternalProvider");
  return e;
}
function Re(e) {
  const [n, t] = U(), i = Z(() => {
    var d;
    return (d = n()) == null ? void 0 : d.parentElement;
  }), r = De(), c = r.config.scrimSpec, f = r.config.contentSpec;
  let l, o;
  function s() {
    const d = n();
    d && (o == null || o.pause(), h.set(d, f.enterFrom), o = h.to(d, f.enterTo));
  }
  function u() {
    const d = i();
    d && (l == null || l.pause(), h.set(d, {
      inset: 0,
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1.25rem",
      overflow: "hidden",
      zIndex: r.state.latestZIndex
    }), r.requestRender(), h.set(d, c.enterFrom), l = h.to(d, c.enterTo));
  }
  function a() {
    u(), s();
  }
  P(a);
  function g() {
    const d = i();
    d && (l == null || l.pause(), h.set(d, c.leaveFrom), l = h.to(d, c.leaveTo));
  }
  function S() {
    const d = n();
    d && (o == null || o.pause(), h.set(d, f.leaveFrom), o = h.to(d, f.leaveTo));
  }
  function w() {
    S(), g(), l == null || l.then(() => {
      var d;
      (d = e.onClose) == null || d.call(e);
    });
  }
  function v() {
    const d = i(), A = n();
    !d || !A || e.closeOnScrimClick == !0 && (d.onclick = function(D) {
      D.target.contains(A) && w();
    });
  }
  return P(v), m(ce.Provider, {
    get value() {
      return {
        onClose: w,
        closeOnScrimClick: e.closeOnScrimClick
      };
    },
    get children() {
      return m(j, {
        ref: t,
        get children() {
          return e.children;
        }
      });
    }
  });
}
var ke = /* @__PURE__ */ be("<div>");
function Me(e) {
  return m(ee, {
    get when() {
      return e.show;
    },
    get children() {
      return m(Oe, {
        get mount() {
          return document.body;
        },
        get children() {
          return m(Re, {
            get onClose() {
              return e.onClose;
            },
            get closeOnScrimClick() {
              return e.closeOnScrimClick;
            },
            get children() {
              var n = ke();
              return n.style.setProperty("margin-inline", "auto"), n.style.setProperty("width", "max-content"), q(n, () => e.children), n;
            }
          });
        }
      });
    }
  });
}
function Be(e) {
  let n;
  const t = Ee();
  return P(() => {
    n.onclick = function() {
      t.onClose();
    };
  }), m(j, {
    ref(i) {
      var r = n;
      typeof r == "function" ? r(i) : n = i;
    },
    get children() {
      return e.children;
    }
  });
}
const fe = X(null);
function se() {
  const e = Y(fe);
  if (!e) throw new Error("usePopup must be called inside PopupProvider");
  return e;
}
function $e(e) {
  const [n, t] = re({
    isOpen: e.defaultOpen ?? !1,
    placement: e.placement ?? "bottom-start",
    animationDurationInMs: e.animationDurationInMs ?? 120
  }), i = {
    state: n,
    setTrigger(o) {
      t("triggerRef", o);
    },
    setContent(o) {
      t("contentRef", o);
    }
  };
  function r() {
    t("isOpen", !0);
    const o = n.contentRef, s = n.triggerRef, u = n.animationDurationInMs / 1e3;
    if (!o || !s) return;
    const a = n.placement;
    Se(s, o, {
      placement: a,
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, 2]
        }
      }],
      onFirstUpdate() {
        const g = o.getBoundingClientRect().width;
        h.set(o, {
          minWidth: g,
          opacity: 0,
          filter: "blur(5px)",
          y: "+=10px"
        }), h.to(o, {
          opacity: 1,
          duration: u,
          filter: "blur(0px)",
          y: "-=10px"
        });
      }
    });
  }
  function c() {
    const o = n.contentRef, s = n.animationDurationInMs / 1e3;
    o && h.to(o, {
      opacity: 0,
      filter: "blur(5px)",
      y: "+=10px",
      delay: 0.05,
      duration: s
    }).then(() => {
      t("isOpen", !1);
    });
  }
  function f() {
    n.isOpen ? c() : r();
  }
  function l(o) {
    const s = o.target, {
      isOpen: u,
      triggerRef: a,
      contentRef: g
    } = n;
    u && !(a != null && a.contains(s) || g != null && g.contains(s)) && c();
  }
  return P(() => {
    const o = n.triggerRef;
    o && (o.addEventListener("click", f), document.addEventListener("click", l), R(() => {
      o == null || o.removeEventListener("click", f), document.removeEventListener("click", l);
    }));
  }), P(() => {
    e.defaultOpen && r();
  }), m(fe.Provider, {
    value: i,
    get children() {
      return e.children;
    }
  });
}
function He(e) {
  return m($e, {
    get animationDurationInMs() {
      return e.animationDurationInMs;
    },
    get placement() {
      return e.placement;
    },
    get defaultOpen() {
      return e.defaultOpen;
    },
    get children() {
      return e.children;
    }
  });
}
function Le(e) {
  const n = se();
  return m(j, {
    ref(t) {
      var i = n.setTrigger;
      typeof i == "function" ? i(t) : n.setTrigger = t;
    },
    get children() {
      return Z(() => typeof e.children == "function")() ? e.children(() => n.state) : e.children;
    }
  });
}
function Ve(e) {
  const n = se();
  return m(ee, {
    get when() {
      return n.state.isOpen;
    },
    get children() {
      return m(j, {
        ref(t) {
          var i = n.setContent;
          typeof i == "function" ? i(t) : n.setContent = t;
        },
        get children() {
          return e.children;
        }
      });
    }
  });
}
export {
  Me as Dialog,
  Be as DialogCloseButton,
  _e as DialogProvider,
  He as Popup,
  Ve as PopupBody,
  Le as PopupTrigger
};
