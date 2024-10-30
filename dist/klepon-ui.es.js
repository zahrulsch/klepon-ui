import { createRenderEffect as se, getOwner as bt, sharedConfig as $, createEffect as ln, runWithOwner as un, createMemo as _, createSignal as Q, createRoot as dn, onCleanup as fe, splitProps as pn, untrack as tt, $PROXY as te, $TRACK as wt, getListener as ze, batch as vn, createContext as Ve, createComponent as C, useContext as qe, children as gn, createComputed as hn, onMount as ne, Show as nt } from "solid-js";
import k from "gsap";
const mn = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected"
], yn = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...mn
]), bn = /* @__PURE__ */ new Set([
  "innerHTML",
  "textContent",
  "innerText",
  "children"
]), wn = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), xn = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  formnovalidate: {
    $: "formNoValidate",
    BUTTON: 1,
    INPUT: 1
  },
  ismap: {
    $: "isMap",
    IMG: 1
  },
  nomodule: {
    $: "noModule",
    SCRIPT: 1
  },
  playsinline: {
    $: "playsInline",
    VIDEO: 1
  },
  readonly: {
    $: "readOnly",
    INPUT: 1,
    TEXTAREA: 1
  }
});
function On(e, t) {
  const n = xn[e];
  return typeof n == "object" ? n[t] ? n.$ : void 0 : n;
}
const An = /* @__PURE__ */ new Set([
  "beforeinput",
  "click",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
]), En = /* @__PURE__ */ new Set([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "color-profile",
  "cursor",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
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
  "filter",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignObject",
  "g",
  "glyph",
  "glyphRef",
  "hkern",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "missing-glyph",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "set",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tref",
  "tspan",
  "use",
  "view",
  "vkern"
]), Cn = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function Sn(e, t, n) {
  let r = n.length, i = t.length, o = r, c = 0, a = 0, s = t[i - 1].nextSibling, l = null;
  for (; c < i || a < o; ) {
    if (t[c] === n[a]) {
      c++, a++;
      continue;
    }
    for (; t[i - 1] === n[o - 1]; )
      i--, o--;
    if (i === c) {
      const f = o < r ? a ? n[a - 1].nextSibling : n[o - a] : s;
      for (; a < o; ) e.insertBefore(n[a++], f);
    } else if (o === a)
      for (; c < i; )
        (!l || !l.has(t[c])) && t[c].remove(), c++;
    else if (t[c] === n[o - 1] && n[a] === t[i - 1]) {
      const f = t[--i].nextSibling;
      e.insertBefore(n[a++], t[c++].nextSibling), e.insertBefore(n[--o], f), t[i] = n[o];
    } else {
      if (!l) {
        l = /* @__PURE__ */ new Map();
        let u = a;
        for (; u < o; ) l.set(n[u], u++);
      }
      const f = l.get(t[c]);
      if (f != null)
        if (a < f && f < o) {
          let u = c, d = 1, v;
          for (; ++u < i && u < o && !((v = l.get(t[u])) == null || v !== f + d); )
            d++;
          if (d > f - a) {
            const g = t[c];
            for (; a < f; ) e.insertBefore(n[a++], g);
          } else e.replaceChild(n[a++], t[c++]);
        } else c++;
      else t[c++].remove();
    }
  }
}
const xt = "_$DX_DELEGATE";
function Mt(e, t, n) {
  let r;
  const i = () => {
    const c = document.createElement("template");
    return c.innerHTML = e, c.content.firstChild;
  }, o = () => (r || (r = i())).cloneNode(!0);
  return o.cloneNode = o, o;
}
function Pn(e, t = window.document) {
  const n = t[xt] || (t[xt] = /* @__PURE__ */ new Set());
  for (let r = 0, i = e.length; r < i; r++) {
    const o = e[r];
    n.has(o) || (n.add(o), t.addEventListener(o, In));
  }
}
function Ge(e, t, n) {
  ie(e) || (n == null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
function Tn(e, t, n, r) {
  ie(e) || (r == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, r));
}
function Dn(e, t, n) {
  ie(e) || (n ? e.setAttribute(t, "") : e.removeAttribute(t));
}
function $n(e, t) {
  ie(e) || (t == null ? e.removeAttribute("class") : e.className = t);
}
function kn(e, t, n, r) {
  if (r)
    Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
  else if (Array.isArray(n)) {
    const i = n[0];
    e.addEventListener(t, n[0] = (o) => i.call(e, n[1], o));
  } else e.addEventListener(t, n, typeof n != "function" && n);
}
function Ln(e, t, n = {}) {
  const r = Object.keys(t || {}), i = Object.keys(n);
  let o, c;
  for (o = 0, c = i.length; o < c; o++) {
    const a = i[o];
    !a || a === "undefined" || t[a] || (Ot(e, a, !1), delete n[a]);
  }
  for (o = 0, c = r.length; o < c; o++) {
    const a = r[o], s = !!t[a];
    !a || a === "undefined" || n[a] === s || !s || (Ot(e, a, !0), n[a] = s);
  }
  return n;
}
function Rn(e, t, n) {
  if (!t) return n ? Ge(e, "style") : t;
  const r = e.style;
  if (typeof t == "string") return r.cssText = t;
  typeof n == "string" && (r.cssText = n = void 0), n || (n = {}), t || (t = {});
  let i, o;
  for (o in n)
    t[o] == null && r.removeProperty(o), delete n[o];
  for (o in t)
    i = t[o], i !== n[o] && (r.setProperty(o, i), n[o] = i);
  return n;
}
function Mn(e, t = {}, n, r) {
  const i = {};
  return se(
    () => i.children = xe(e, t.children, i.children)
  ), se(() => typeof t.ref == "function" && jn(t.ref, e)), se(() => Nn(e, t, n, !0, i, !0)), i;
}
function jn(e, t, n) {
  return tt(() => e(t, n));
}
function Be(e, t, n, r) {
  if (n !== void 0 && !r && (r = []), typeof t != "function") return xe(e, t, r, n);
  se((i) => xe(e, t(), i, n), r);
}
function Nn(e, t, n, r, i = {}, o = !1) {
  t || (t = {});
  for (const c in i)
    if (!(c in t)) {
      if (c === "children") continue;
      i[c] = At(e, c, null, i[c], n, o, t);
    }
  for (const c in t) {
    if (c === "children")
      continue;
    const a = t[c];
    i[c] = At(e, c, a, i[c], n, o, t);
  }
}
function Bn(e) {
  let t, n;
  return !ie() || !(t = $.registry.get(n = Hn())) ? e() : ($.completed && $.completed.add(t), $.registry.delete(n), t);
}
function ie(e) {
  return !!$.context && !$.done && (!e || e.isConnected);
}
function Fn(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (t, n) => n.toUpperCase());
}
function Ot(e, t, n) {
  const r = t.trim().split(/\s+/);
  for (let i = 0, o = r.length; i < o; i++)
    e.classList.toggle(r[i], n);
}
function At(e, t, n, r, i, o, c) {
  let a, s, l, f, u;
  if (t === "style") return Rn(e, n, r);
  if (t === "classList") return Ln(e, n, r);
  if (n === r) return r;
  if (t === "ref")
    o || n(e);
  else if (t.slice(0, 3) === "on:") {
    const d = t.slice(3);
    r && e.removeEventListener(d, r, typeof r != "function" && r), n && e.addEventListener(d, n, typeof n != "function" && n);
  } else if (t.slice(0, 10) === "oncapture:") {
    const d = t.slice(10);
    r && e.removeEventListener(d, r, !0), n && e.addEventListener(d, n, !0);
  } else if (t.slice(0, 2) === "on") {
    const d = t.slice(2).toLowerCase(), v = An.has(d);
    if (!v && r) {
      const g = Array.isArray(r) ? r[0] : r;
      e.removeEventListener(d, g);
    }
    (v || n) && (kn(e, d, n, v), v && Pn([d]));
  } else if (t.slice(0, 5) === "attr:")
    Ge(e, t.slice(5), n);
  else if (t.slice(0, 5) === "bool:")
    Dn(e, t.slice(5), n);
  else if ((u = t.slice(0, 5) === "prop:") || (l = bn.has(t)) || !i && ((f = On(t, e.tagName)) || (s = yn.has(t))) || (a = e.nodeName.includes("-") || "is" in c)) {
    if (u)
      t = t.slice(5), s = !0;
    else if (ie(e)) return n;
    t === "class" || t === "className" ? $n(e, n) : a && !s && !l ? e[Fn(t)] = n : e[f || t] = n;
  } else {
    const d = i && t.indexOf(":") > -1 && Cn[t.split(":")[0]];
    d ? Tn(e, d, t, n) : Ge(e, wn[t] || t, n);
  }
  return n;
}
function In(e) {
  if ($.registry && $.events && $.events.find(([s, l]) => l === e))
    return;
  let t = e.target;
  const n = `$$${e.type}`, r = e.target, i = e.currentTarget, o = (s) => Object.defineProperty(e, "target", {
    configurable: !0,
    value: s
  }), c = () => {
    const s = t[n];
    if (s && !t.disabled) {
      const l = t[`${n}Data`];
      if (l !== void 0 ? s.call(t, l, e) : s.call(t, e), e.cancelBubble) return;
    }
    return t.host && typeof t.host != "string" && !t.host._$host && t.contains(e.target) && o(t.host), !0;
  }, a = () => {
    for (; c() && (t = t._$host || t.parentNode || t.host); ) ;
  };
  if (Object.defineProperty(e, "currentTarget", {
    configurable: !0,
    get() {
      return t || document;
    }
  }), $.registry && !$.done && ($.done = _$HY.done = !0), e.composedPath) {
    const s = e.composedPath();
    o(s[0]);
    for (let l = 0; l < s.length - 2 && (t = s[l], !!c()); l++) {
      if (t._$host) {
        t = t._$host, a();
        break;
      }
      if (t.parentNode === i)
        break;
    }
  } else a();
  o(r);
}
function xe(e, t, n, r, i) {
  const o = ie(e);
  if (o) {
    !n && (n = [...e.childNodes]);
    let s = [];
    for (let l = 0; l < n.length; l++) {
      const f = n[l];
      f.nodeType === 8 && f.data.slice(0, 2) === "!$" ? f.remove() : s.push(f);
    }
    n = s;
  }
  for (; typeof n == "function"; ) n = n();
  if (t === n) return n;
  const c = typeof t, a = r !== void 0;
  if (e = a && n[0] && n[0].parentNode || e, c === "string" || c === "number") {
    if (o || c === "number" && (t = t.toString(), t === n))
      return n;
    if (a) {
      let s = n[0];
      s && s.nodeType === 3 ? s.data !== t && (s.data = t) : s = document.createTextNode(t), n = ae(e, n, r, s);
    } else
      n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t;
  } else if (t == null || c === "boolean") {
    if (o) return n;
    n = ae(e, n, r);
  } else {
    if (c === "function")
      return se(() => {
        let s = t();
        for (; typeof s == "function"; ) s = s();
        n = xe(e, s, n, r);
      }), () => n;
    if (Array.isArray(t)) {
      const s = [], l = n && Array.isArray(n);
      if (Ze(s, t, n, i))
        return se(() => n = xe(e, s, n, r, !0)), () => n;
      if (o) {
        if (!s.length) return n;
        if (r === void 0) return n = [...e.childNodes];
        let f = s[0];
        if (f.parentNode !== e) return n;
        const u = [f];
        for (; (f = f.nextSibling) !== r; ) u.push(f);
        return n = u;
      }
      if (s.length === 0) {
        if (n = ae(e, n, r), a) return n;
      } else l ? n.length === 0 ? Et(e, s, r) : Sn(e, n, s) : (n && ae(e), Et(e, s));
      n = s;
    } else if (t.nodeType) {
      if (o && t.parentNode) return n = a ? [t] : t;
      if (Array.isArray(n)) {
        if (a) return n = ae(e, n, r, t);
        ae(e, n, null, t);
      } else n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function Ze(e, t, n, r) {
  let i = !1;
  for (let o = 0, c = t.length; o < c; o++) {
    let a = t[o], s = n && n[e.length], l;
    if (!(a == null || a === !0 || a === !1)) if ((l = typeof a) == "object" && a.nodeType)
      e.push(a);
    else if (Array.isArray(a))
      i = Ze(e, a, s) || i;
    else if (l === "function")
      if (r) {
        for (; typeof a == "function"; ) a = a();
        i = Ze(
          e,
          Array.isArray(a) ? a : [a],
          Array.isArray(s) ? s : [s]
        ) || i;
      } else
        e.push(a), i = !0;
    else {
      const f = String(a);
      s && s.nodeType === 3 && s.data === f ? e.push(s) : e.push(document.createTextNode(f));
    }
  }
  return i;
}
function Et(e, t, n = null) {
  for (let r = 0, i = t.length; r < i; r++) e.insertBefore(t[r], n);
}
function ae(e, t, n, r) {
  if (n === void 0) return e.textContent = "";
  const i = r || document.createTextNode("");
  if (t.length) {
    let o = !1;
    for (let c = t.length - 1; c >= 0; c--) {
      const a = t[c];
      if (i !== a) {
        const s = a.parentNode === e;
        !o && !c ? s ? e.replaceChild(i, a) : e.insertBefore(i, n) : s && a.remove();
      } else o = !0;
    }
  } else e.insertBefore(i, n);
  return [i];
}
function Hn() {
  return $.getNextContextId();
}
const Wn = "http://www.w3.org/2000/svg";
function jt(e, t = !1) {
  return t ? document.createElementNS(Wn, e) : document.createElement(e);
}
function Vn(e) {
  const { useShadow: t } = e, n = document.createTextNode(""), r = () => e.mount || document.body, i = bt();
  let o, c = !!$.context;
  return ln(
    () => {
      c && (bt().user = c = !1), o || (o = un(i, () => _(() => e.children)));
      const a = r();
      if (a instanceof HTMLHeadElement) {
        const [s, l] = Q(!1), f = () => l(!0);
        dn((u) => Be(a, () => s() ? u() : o(), null)), fe(f);
      } else {
        const s = jt(e.isSVG ? "g" : "div", e.isSVG), l = t && s.attachShadow ? s.attachShadow({
          mode: "open"
        }) : s;
        Object.defineProperty(s, "_$host", {
          get() {
            return n.parentNode;
          },
          configurable: !0
        }), Be(l, o), a.appendChild(s), e.ref && e.ref(s), fe(() => a.removeChild(s));
      }
    },
    void 0,
    {
      render: !c
    }
  ), n;
}
function qn(e) {
  const [t, n] = pn(e, ["component"]), r = _(() => t.component);
  return _(() => {
    const i = r();
    switch (typeof i) {
      case "function":
        return tt(() => i(n));
      case "string":
        const o = En.has(i), c = $.context ? Bn() : jt(i, o);
        return Mn(c, n, o), c;
    }
  });
}
const Je = Symbol("store-raw"), ce = Symbol("store-node"), q = Symbol("store-has"), Nt = Symbol("store-self");
function Bt(e) {
  let t = e[te];
  if (!t && (Object.defineProperty(e, te, {
    value: t = new Proxy(e, _n)
  }), !Array.isArray(e))) {
    const n = Object.keys(e), r = Object.getOwnPropertyDescriptors(e);
    for (let i = 0, o = n.length; i < o; i++) {
      const c = n[i];
      r[c].get && Object.defineProperty(e, c, {
        enumerable: r[c].enumerable,
        get: r[c].get.bind(t)
      });
    }
  }
  return t;
}
function Fe(e) {
  let t;
  return e != null && typeof e == "object" && (e[te] || !(t = Object.getPrototypeOf(e)) || t === Object.prototype || Array.isArray(e));
}
function Oe(e, t = /* @__PURE__ */ new Set()) {
  let n, r, i, o;
  if (n = e != null && e[Je]) return n;
  if (!Fe(e) || t.has(e)) return e;
  if (Array.isArray(e)) {
    Object.isFrozen(e) ? e = e.slice(0) : t.add(e);
    for (let c = 0, a = e.length; c < a; c++)
      i = e[c], (r = Oe(i, t)) !== i && (e[c] = r);
  } else {
    Object.isFrozen(e) ? e = Object.assign({}, e) : t.add(e);
    const c = Object.keys(e), a = Object.getOwnPropertyDescriptors(e);
    for (let s = 0, l = c.length; s < l; s++)
      o = c[s], !a[o].get && (i = e[o], (r = Oe(i, t)) !== i && (e[o] = r));
  }
  return e;
}
function Ie(e, t) {
  let n = e[t];
  return n || Object.defineProperty(e, t, {
    value: n = /* @__PURE__ */ Object.create(null)
  }), n;
}
function Ae(e, t, n) {
  if (e[t]) return e[t];
  const [r, i] = Q(n, {
    equals: !1,
    internal: !0
  });
  return r.$ = i, e[t] = r;
}
function Un(e, t) {
  const n = Reflect.getOwnPropertyDescriptor(e, t);
  return !n || n.get || !n.configurable || t === te || t === ce || (delete n.value, delete n.writable, n.get = () => e[te][t]), n;
}
function Ft(e) {
  ze() && Ae(Ie(e, ce), Nt)();
}
function Xn(e) {
  return Ft(e), Reflect.ownKeys(e);
}
const _n = {
  get(e, t, n) {
    if (t === Je) return e;
    if (t === te) return n;
    if (t === wt)
      return Ft(e), n;
    const r = Ie(e, ce), i = r[t];
    let o = i ? i() : e[t];
    if (t === ce || t === q || t === "__proto__") return o;
    if (!i) {
      const c = Object.getOwnPropertyDescriptor(e, t);
      ze() && (typeof o != "function" || e.hasOwnProperty(t)) && !(c && c.get) && (o = Ae(r, t, o)());
    }
    return Fe(o) ? Bt(o) : o;
  },
  has(e, t) {
    return t === Je || t === te || t === wt || t === ce || t === q || t === "__proto__" ? !0 : (ze() && Ae(Ie(e, q), t)(), t in e);
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: Xn,
  getOwnPropertyDescriptor: Un
};
function He(e, t, n, r = !1) {
  if (!r && e[t] === n) return;
  const i = e[t], o = e.length;
  n === void 0 ? (delete e[t], e[q] && e[q][t] && i !== void 0 && e[q][t].$()) : (e[t] = n, e[q] && e[q][t] && i === void 0 && e[q][t].$());
  let c = Ie(e, ce), a;
  if ((a = Ae(c, t, i)) && a.$(() => n), Array.isArray(e) && e.length !== o) {
    for (let s = e.length; s < o; s++) (a = c[s]) && a.$();
    (a = Ae(c, "length", o)) && a.$(e.length);
  }
  (a = c[Nt]) && a.$();
}
function It(e, t) {
  const n = Object.keys(t);
  for (let r = 0; r < n.length; r += 1) {
    const i = n[r];
    He(e, i, t[i]);
  }
}
function Yn(e, t) {
  if (typeof t == "function" && (t = t(e)), t = Oe(t), Array.isArray(t)) {
    if (e === t) return;
    let n = 0, r = t.length;
    for (; n < r; n++) {
      const i = t[n];
      e[n] !== i && He(e, n, i);
    }
    He(e, "length", r);
  } else It(e, t);
}
function ye(e, t, n = []) {
  let r, i = e;
  if (t.length > 1) {
    r = t.shift();
    const c = typeof r, a = Array.isArray(e);
    if (Array.isArray(r)) {
      for (let s = 0; s < r.length; s++)
        ye(e, [r[s]].concat(t), n);
      return;
    } else if (a && c === "function") {
      for (let s = 0; s < e.length; s++)
        r(e[s], s) && ye(e, [s].concat(t), n);
      return;
    } else if (a && c === "object") {
      const { from: s = 0, to: l = e.length - 1, by: f = 1 } = r;
      for (let u = s; u <= l; u += f)
        ye(e, [u].concat(t), n);
      return;
    } else if (t.length > 1) {
      ye(e[r], t, [r].concat(n));
      return;
    }
    i = e[r], n = [r].concat(n);
  }
  let o = t[0];
  typeof o == "function" && (o = o(i, n), o === i) || r === void 0 && o == null || (o = Oe(o), r === void 0 || Fe(i) && Fe(o) && !Array.isArray(o) ? It(i, o) : He(e, r, o));
}
function Ht(...[e, t]) {
  const n = Oe(e || {}), r = Array.isArray(n), i = Bt(n);
  function o(...c) {
    vn(() => {
      r && c.length === 1 ? Yn(n, c[0]) : ye(n, c);
    });
  }
  return [i, o];
}
const Re = {
  enterFrom: { opacity: 0, y: -30, filter: "blur(2px)" },
  enterTo: { opacity: 1, y: 0, filter: "blur(0px)" },
  leaveFrom: { opacity: 1, y: 0, filter: "blur(0px)" },
  leaveTo: { opacity: 0, y: 30, filter: "blur(2px)" }
}, Me = {
  enterFrom: { backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" },
  enterTo: {
    backgroundColor: "rgba(0, 0, 0, 0.125)",
    backdropFilter: "blur(3px)"
  },
  leaveFrom: { backgroundColor: "rgba(0, 0, 0, 0.125)", backdropFilter: "blur(3px)" },
  leaveTo: { backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" }
}, Wt = Ve(null);
function Kn() {
  const e = qe(Wt);
  if (e === null) throw new Error("useDialogForInternal must be used within a DialogProvider");
  return e;
}
function zn(e) {
  var o, c, a, s, l, f, u, d, v, g, h, p, y, x, O, m, w;
  const [t, n] = Ht({
    latestZIndex: ((o = e.config) == null ? void 0 : o.initialZIndex) ?? 99
  });
  function r(b) {
    var E;
    const A = ((E = e.config) == null ? void 0 : E.animationInMs) ?? 150;
    return {
      ...b,
      duration: A / 1e3
    };
  }
  const i = {
    state: t,
    config: {
      contentSpec: {
        enterFrom: ((a = (c = e.config) == null ? void 0 : c.contentSpec) == null ? void 0 : a.enterFrom) ?? Re.enterFrom,
        enterTo: r(((l = (s = e.config) == null ? void 0 : s.contentSpec) == null ? void 0 : l.enterTo) ?? Re.enterTo),
        leaveFrom: ((u = (f = e.config) == null ? void 0 : f.contentSpec) == null ? void 0 : u.leaveFrom) ?? Re.leaveFrom,
        leaveTo: r(((v = (d = e.config) == null ? void 0 : d.contentSpec) == null ? void 0 : v.leaveTo) ?? Re.leaveTo)
      },
      scrimSpec: {
        enterFrom: ((h = (g = e.config) == null ? void 0 : g.scrimSpec) == null ? void 0 : h.enterFrom) ?? Me.enterFrom,
        enterTo: r(((y = (p = e.config) == null ? void 0 : p.scrimSpec) == null ? void 0 : y.enterTo) ?? Me.enterTo),
        leaveFrom: ((O = (x = e.config) == null ? void 0 : x.scrimSpec) == null ? void 0 : O.leaveFrom) ?? Me.leaveFrom,
        leaveTo: r(((w = (m = e.config) == null ? void 0 : m.scrimSpec) == null ? void 0 : w.leaveTo) ?? Me.leaveTo)
      }
    },
    requestRender() {
      n("latestZIndex", (b) => b + 1);
    }
  };
  return C(Wt.Provider, {
    value: i,
    get children() {
      return e.children;
    }
  });
}
const Vt = Ve(null);
function qt() {
  const e = qe(Vt);
  if (!e) throw new Error("useTooltip must be called inside TooltipProvider");
  return e;
}
function Gn(e) {
  var n, r, i;
  const t = {
    WrapperElement: (n = e.config) == null ? void 0 : n.WrapperElement,
    hideDelayInMs: ((r = e.config) == null ? void 0 : r.hideDelayInMs) ?? 0,
    placement: ((i = e.config) == null ? void 0 : i.placement) ?? "top"
  };
  return C(Vt.Provider, {
    value: t,
    get children() {
      return e.children;
    }
  });
}
function ui(e) {
  return C(zn, {
    get config() {
      return e.dialogConfig;
    },
    get children() {
      return C(Gn, {
        get config() {
          return e.tooltipConfig;
        },
        get children() {
          return e.children;
        }
      });
    }
  });
}
var Zn = (e) => e instanceof Element;
function ve(e) {
  const t = e.ref, n = gn(() => e.children);
  let r;
  return hn(() => {
    const i = n.toArray().find(Zn);
    i !== r && tt(() => t(i)), r = i;
  }), fe(() => r && t(void 0)), n;
}
const Ut = Ve(null);
function Jn() {
  const e = qe(Ut);
  if (!e) throw new Error("useDialog must be used within a DialogInternalProvider");
  return e;
}
function Qn(e) {
  const [t, n] = Q(), r = _(() => {
    var p;
    return (p = t()) == null ? void 0 : p.parentElement;
  }), i = Kn(), o = i.config.scrimSpec, c = i.config.contentSpec;
  let a, s;
  function l() {
    const p = t();
    p && (s == null || s.pause(), k.set(p, c.enterFrom), s = k.to(p, c.enterTo));
  }
  function f() {
    const p = r();
    p && (a == null || a.pause(), k.set(p, {
      inset: 0,
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1.25rem",
      overflow: "hidden",
      zIndex: i.state.latestZIndex
    }), i.requestRender(), k.set(p, o.enterFrom), a = k.to(p, o.enterTo));
  }
  function u() {
    f(), l();
  }
  ne(u);
  function d() {
    const p = r();
    p && (a == null || a.pause(), k.set(p, o.leaveFrom), a = k.to(p, o.leaveTo));
  }
  function v() {
    const p = t();
    p && (s == null || s.pause(), k.set(p, c.leaveFrom), s = k.to(p, c.leaveTo));
  }
  function g() {
    v(), d(), a == null || a.then(() => {
      var p;
      (p = e.onClose) == null || p.call(e);
    });
  }
  function h() {
    const p = r(), y = t();
    !p || !y || e.closeOnScrimClick == !0 && (p.onclick = function(x) {
      x.target.contains(y) && g();
    });
  }
  return ne(h), C(Ut.Provider, {
    get value() {
      return {
        onClose: g,
        closeOnScrimClick: e.closeOnScrimClick
      };
    },
    get children() {
      return C(ve, {
        ref: n,
        get children() {
          return e.children;
        }
      });
    }
  });
}
var er = /* @__PURE__ */ Mt("<div>");
function di(e) {
  return C(nt, {
    get when() {
      return e.show;
    },
    get children() {
      return C(Vn, {
        get mount() {
          return document.body;
        },
        get children() {
          return C(Qn, {
            get onClose() {
              return e.onClose;
            },
            get closeOnScrimClick() {
              return e.closeOnScrimClick;
            },
            get children() {
              var t = er();
              return t.style.setProperty("margin-inline", "auto"), t.style.setProperty("width", "max-content"), Be(t, () => e.children), t;
            }
          });
        }
      });
    }
  });
}
function pi(e) {
  let t;
  const n = Jn();
  return ne(() => {
    t.onclick = function() {
      n.onClose();
    };
  }), C(ve, {
    ref(r) {
      var i = t;
      typeof i == "function" ? i(r) : t = r;
    },
    get children() {
      return e.children;
    }
  });
}
var L = "top", B = "bottom", F = "right", R = "left", rt = "auto", Se = [L, B, F, R], le = "start", Ee = "end", tr = "clippingParents", Xt = "viewport", me = "popper", nr = "reference", Ct = /* @__PURE__ */ Se.reduce(function(e, t) {
  return e.concat([t + "-" + le, t + "-" + Ee]);
}, []), _t = /* @__PURE__ */ [].concat(Se, [rt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + le, t + "-" + Ee]);
}, []), rr = "beforeRead", ir = "read", or = "afterRead", ar = "beforeMain", sr = "main", cr = "afterMain", fr = "beforeWrite", lr = "write", ur = "afterWrite", dr = [rr, ir, or, ar, sr, cr, fr, lr, ur];
function V(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function j(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function re(e) {
  var t = j(e).Element;
  return e instanceof t || e instanceof Element;
}
function N(e) {
  var t = j(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function it(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = j(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function pr(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, o = t.elements[n];
    !N(o) || !V(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(c) {
      var a = i[c];
      a === !1 ? o.removeAttribute(c) : o.setAttribute(c, a === !0 ? "" : a);
    }));
  });
}
function vr(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var i = t.elements[r], o = t.attributes[r] || {}, c = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), a = c.reduce(function(s, l) {
        return s[l] = "", s;
      }, {});
      !N(i) || !V(i) || (Object.assign(i.style, a), Object.keys(o).forEach(function(s) {
        i.removeAttribute(s);
      }));
    });
  };
}
const gr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: pr,
  effect: vr,
  requires: ["computeStyles"]
};
function W(e) {
  return e.split("-")[0];
}
var ee = Math.max, We = Math.min, ue = Math.round;
function Qe() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Yt() {
  return !/^((?!chrome|android).)*safari/i.test(Qe());
}
function de(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, o = 1;
  t && N(e) && (i = e.offsetWidth > 0 && ue(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && ue(r.height) / e.offsetHeight || 1);
  var c = re(e) ? j(e) : window, a = c.visualViewport, s = !Yt() && n, l = (r.left + (s && a ? a.offsetLeft : 0)) / i, f = (r.top + (s && a ? a.offsetTop : 0)) / o, u = r.width / i, d = r.height / o;
  return {
    width: u,
    height: d,
    top: f,
    right: l + u,
    bottom: f + d,
    left: l,
    x: l,
    y: f
  };
}
function ot(e) {
  var t = de(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Kt(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && it(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function U(e) {
  return j(e).getComputedStyle(e);
}
function hr(e) {
  return ["table", "td", "th"].indexOf(V(e)) >= 0;
}
function Y(e) {
  return ((re(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ue(e) {
  return V(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (it(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Y(e)
  );
}
function St(e) {
  return !N(e) || // https://github.com/popperjs/popper-core/issues/837
  U(e).position === "fixed" ? null : e.offsetParent;
}
function mr(e) {
  var t = /firefox/i.test(Qe()), n = /Trident/i.test(Qe());
  if (n && N(e)) {
    var r = U(e);
    if (r.position === "fixed")
      return null;
  }
  var i = Ue(e);
  for (it(i) && (i = i.host); N(i) && ["html", "body"].indexOf(V(i)) < 0; ) {
    var o = U(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Pe(e) {
  for (var t = j(e), n = St(e); n && hr(n) && U(n).position === "static"; )
    n = St(n);
  return n && (V(n) === "html" || V(n) === "body" && U(n).position === "static") ? t : n || mr(e) || t;
}
function at(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function be(e, t, n) {
  return ee(e, We(t, n));
}
function yr(e, t, n) {
  var r = be(e, t, n);
  return r > n ? n : r;
}
function zt() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Gt(e) {
  return Object.assign({}, zt(), e);
}
function Zt(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var br = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Gt(typeof t != "number" ? t : Zt(t, Se));
};
function wr(e) {
  var t, n = e.state, r = e.name, i = e.options, o = n.elements.arrow, c = n.modifiersData.popperOffsets, a = W(n.placement), s = at(a), l = [R, F].indexOf(a) >= 0, f = l ? "height" : "width";
  if (!(!o || !c)) {
    var u = br(i.padding, n), d = ot(o), v = s === "y" ? L : R, g = s === "y" ? B : F, h = n.rects.reference[f] + n.rects.reference[s] - c[s] - n.rects.popper[f], p = c[s] - n.rects.reference[s], y = Pe(o), x = y ? s === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, O = h / 2 - p / 2, m = u[v], w = x - d[f] - u[g], b = x / 2 - d[f] / 2 + O, A = be(m, b, w), E = s;
    n.modifiersData[r] = (t = {}, t[E] = A, t.centerOffset = A - b, t);
  }
}
function xr(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Kt(t.elements.popper, i) && (t.elements.arrow = i));
}
const Or = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: wr,
  effect: xr,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function pe(e) {
  return e.split("-")[1];
}
var Ar = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Er(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: ue(n * i) / i || 0,
    y: ue(r * i) / i || 0
  };
}
function Pt(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, o = e.variation, c = e.offsets, a = e.position, s = e.gpuAcceleration, l = e.adaptive, f = e.roundOffsets, u = e.isFixed, d = c.x, v = d === void 0 ? 0 : d, g = c.y, h = g === void 0 ? 0 : g, p = typeof f == "function" ? f({
    x: v,
    y: h
  }) : {
    x: v,
    y: h
  };
  v = p.x, h = p.y;
  var y = c.hasOwnProperty("x"), x = c.hasOwnProperty("y"), O = R, m = L, w = window;
  if (l) {
    var b = Pe(n), A = "clientHeight", E = "clientWidth";
    if (b === j(n) && (b = Y(n), U(b).position !== "static" && a === "absolute" && (A = "scrollHeight", E = "scrollWidth")), b = b, i === L || (i === R || i === F) && o === Ee) {
      m = B;
      var P = u && b === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        b[A]
      );
      h -= P - r.height, h *= s ? 1 : -1;
    }
    if (i === R || (i === L || i === B) && o === Ee) {
      O = F;
      var S = u && b === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        b[E]
      );
      v -= S - r.width, v *= s ? 1 : -1;
    }
  }
  var T = Object.assign({
    position: a
  }, l && Ar), I = f === !0 ? Er({
    x: v,
    y: h
  }, j(n)) : {
    x: v,
    y: h
  };
  if (v = I.x, h = I.y, s) {
    var D;
    return Object.assign({}, T, (D = {}, D[m] = x ? "0" : "", D[O] = y ? "0" : "", D.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + h + "px)" : "translate3d(" + v + "px, " + h + "px, 0)", D));
  }
  return Object.assign({}, T, (t = {}, t[m] = x ? h + "px" : "", t[O] = y ? v + "px" : "", t.transform = "", t));
}
function Cr(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, o = n.adaptive, c = o === void 0 ? !0 : o, a = n.roundOffsets, s = a === void 0 ? !0 : a, l = {
    placement: W(t.placement),
    variation: pe(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Pt(Object.assign({}, l, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: s
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Pt(Object.assign({}, l, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Sr = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Cr,
  data: {}
};
var je = {
  passive: !0
};
function Pr(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, o = i === void 0 ? !0 : i, c = r.resize, a = c === void 0 ? !0 : c, s = j(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && l.forEach(function(f) {
    f.addEventListener("scroll", n.update, je);
  }), a && s.addEventListener("resize", n.update, je), function() {
    o && l.forEach(function(f) {
      f.removeEventListener("scroll", n.update, je);
    }), a && s.removeEventListener("resize", n.update, je);
  };
}
const Tr = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Pr,
  data: {}
};
var Dr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ne(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Dr[t];
  });
}
var $r = {
  start: "end",
  end: "start"
};
function Tt(e) {
  return e.replace(/start|end/g, function(t) {
    return $r[t];
  });
}
function st(e) {
  var t = j(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function ct(e) {
  return de(Y(e)).left + st(e).scrollLeft;
}
function kr(e, t) {
  var n = j(e), r = Y(e), i = n.visualViewport, o = r.clientWidth, c = r.clientHeight, a = 0, s = 0;
  if (i) {
    o = i.width, c = i.height;
    var l = Yt();
    (l || !l && t === "fixed") && (a = i.offsetLeft, s = i.offsetTop);
  }
  return {
    width: o,
    height: c,
    x: a + ct(e),
    y: s
  };
}
function Lr(e) {
  var t, n = Y(e), r = st(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, o = ee(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), c = ee(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -r.scrollLeft + ct(e), s = -r.scrollTop;
  return U(i || n).direction === "rtl" && (a += ee(n.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: c,
    x: a,
    y: s
  };
}
function ft(e) {
  var t = U(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Jt(e) {
  return ["html", "body", "#document"].indexOf(V(e)) >= 0 ? e.ownerDocument.body : N(e) && ft(e) ? e : Jt(Ue(e));
}
function we(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Jt(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = j(r), c = i ? [o].concat(o.visualViewport || [], ft(r) ? r : []) : r, a = t.concat(c);
  return i ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(we(Ue(c)))
  );
}
function et(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Rr(e, t) {
  var n = de(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Dt(e, t, n) {
  return t === Xt ? et(kr(e, n)) : re(t) ? Rr(t, n) : et(Lr(Y(e)));
}
function Mr(e) {
  var t = we(Ue(e)), n = ["absolute", "fixed"].indexOf(U(e).position) >= 0, r = n && N(e) ? Pe(e) : e;
  return re(r) ? t.filter(function(i) {
    return re(i) && Kt(i, r) && V(i) !== "body";
  }) : [];
}
function jr(e, t, n, r) {
  var i = t === "clippingParents" ? Mr(e) : [].concat(t), o = [].concat(i, [n]), c = o[0], a = o.reduce(function(s, l) {
    var f = Dt(e, l, r);
    return s.top = ee(f.top, s.top), s.right = We(f.right, s.right), s.bottom = We(f.bottom, s.bottom), s.left = ee(f.left, s.left), s;
  }, Dt(e, c, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Qt(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? W(r) : null, o = r ? pe(r) : null, c = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, s;
  switch (i) {
    case L:
      s = {
        x: c,
        y: t.y - n.height
      };
      break;
    case B:
      s = {
        x: c,
        y: t.y + t.height
      };
      break;
    case F:
      s = {
        x: t.x + t.width,
        y: a
      };
      break;
    case R:
      s = {
        x: t.x - n.width,
        y: a
      };
      break;
    default:
      s = {
        x: t.x,
        y: t.y
      };
  }
  var l = i ? at(i) : null;
  if (l != null) {
    var f = l === "y" ? "height" : "width";
    switch (o) {
      case le:
        s[l] = s[l] - (t[f] / 2 - n[f] / 2);
        break;
      case Ee:
        s[l] = s[l] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return s;
}
function Ce(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, o = n.strategy, c = o === void 0 ? e.strategy : o, a = n.boundary, s = a === void 0 ? tr : a, l = n.rootBoundary, f = l === void 0 ? Xt : l, u = n.elementContext, d = u === void 0 ? me : u, v = n.altBoundary, g = v === void 0 ? !1 : v, h = n.padding, p = h === void 0 ? 0 : h, y = Gt(typeof p != "number" ? p : Zt(p, Se)), x = d === me ? nr : me, O = e.rects.popper, m = e.elements[g ? x : d], w = jr(re(m) ? m : m.contextElement || Y(e.elements.popper), s, f, c), b = de(e.elements.reference), A = Qt({
    reference: b,
    element: O,
    strategy: "absolute",
    placement: i
  }), E = et(Object.assign({}, O, A)), P = d === me ? E : b, S = {
    top: w.top - P.top + y.top,
    bottom: P.bottom - w.bottom + y.bottom,
    left: w.left - P.left + y.left,
    right: P.right - w.right + y.right
  }, T = e.modifiersData.offset;
  if (d === me && T) {
    var I = T[i];
    Object.keys(S).forEach(function(D) {
      var K = [F, B].indexOf(D) >= 0 ? 1 : -1, z = [L, B].indexOf(D) >= 0 ? "y" : "x";
      S[D] += I[z] * K;
    });
  }
  return S;
}
function Nr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, o = n.rootBoundary, c = n.padding, a = n.flipVariations, s = n.allowedAutoPlacements, l = s === void 0 ? _t : s, f = pe(r), u = f ? a ? Ct : Ct.filter(function(g) {
    return pe(g) === f;
  }) : Se, d = u.filter(function(g) {
    return l.indexOf(g) >= 0;
  });
  d.length === 0 && (d = u);
  var v = d.reduce(function(g, h) {
    return g[h] = Ce(e, {
      placement: h,
      boundary: i,
      rootBoundary: o,
      padding: c
    })[W(h)], g;
  }, {});
  return Object.keys(v).sort(function(g, h) {
    return v[g] - v[h];
  });
}
function Br(e) {
  if (W(e) === rt)
    return [];
  var t = Ne(e);
  return [Tt(e), t, Tt(t)];
}
function Fr(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, o = i === void 0 ? !0 : i, c = n.altAxis, a = c === void 0 ? !0 : c, s = n.fallbackPlacements, l = n.padding, f = n.boundary, u = n.rootBoundary, d = n.altBoundary, v = n.flipVariations, g = v === void 0 ? !0 : v, h = n.allowedAutoPlacements, p = t.options.placement, y = W(p), x = y === p, O = s || (x || !g ? [Ne(p)] : Br(p)), m = [p].concat(O).reduce(function(oe, X) {
      return oe.concat(W(X) === rt ? Nr(t, {
        placement: X,
        boundary: f,
        rootBoundary: u,
        padding: l,
        flipVariations: g,
        allowedAutoPlacements: h
      }) : X);
    }, []), w = t.rects.reference, b = t.rects.popper, A = /* @__PURE__ */ new Map(), E = !0, P = m[0], S = 0; S < m.length; S++) {
      var T = m[S], I = W(T), D = pe(T) === le, K = [L, B].indexOf(I) >= 0, z = K ? "width" : "height", M = Ce(t, {
        placement: T,
        boundary: f,
        rootBoundary: u,
        altBoundary: d,
        padding: l
      }), H = K ? D ? F : R : D ? B : L;
      w[z] > b[z] && (H = Ne(H));
      var Te = Ne(H), G = [];
      if (o && G.push(M[I] <= 0), a && G.push(M[H] <= 0, M[Te] <= 0), G.every(function(oe) {
        return oe;
      })) {
        P = T, E = !1;
        break;
      }
      A.set(T, G);
    }
    if (E)
      for (var De = g ? 3 : 1, Xe = function(X) {
        var he = m.find(function(ke) {
          var Z = A.get(ke);
          if (Z)
            return Z.slice(0, X).every(function(_e) {
              return _e;
            });
        });
        if (he)
          return P = he, "break";
      }, ge = De; ge > 0; ge--) {
        var $e = Xe(ge);
        if ($e === "break") break;
      }
    t.placement !== P && (t.modifiersData[r]._skip = !0, t.placement = P, t.reset = !0);
  }
}
const Ir = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Fr,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function $t(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function kt(e) {
  return [L, F, B, R].some(function(t) {
    return e[t] >= 0;
  });
}
function Hr(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, o = t.modifiersData.preventOverflow, c = Ce(t, {
    elementContext: "reference"
  }), a = Ce(t, {
    altBoundary: !0
  }), s = $t(c, r), l = $t(a, i, o), f = kt(s), u = kt(l);
  t.modifiersData[n] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: l,
    isReferenceHidden: f,
    hasPopperEscaped: u
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": u
  });
}
const Wr = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Hr
};
function Vr(e, t, n) {
  var r = W(e), i = [R, L].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, c = o[0], a = o[1];
  return c = c || 0, a = (a || 0) * i, [R, F].indexOf(r) >= 0 ? {
    x: a,
    y: c
  } : {
    x: c,
    y: a
  };
}
function qr(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, o = i === void 0 ? [0, 0] : i, c = _t.reduce(function(f, u) {
    return f[u] = Vr(u, t.rects, o), f;
  }, {}), a = c[t.placement], s = a.x, l = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = c;
}
const Ur = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: qr
};
function Xr(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Qt({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const _r = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Xr,
  data: {}
};
function Yr(e) {
  return e === "x" ? "y" : "x";
}
function Kr(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, o = i === void 0 ? !0 : i, c = n.altAxis, a = c === void 0 ? !1 : c, s = n.boundary, l = n.rootBoundary, f = n.altBoundary, u = n.padding, d = n.tether, v = d === void 0 ? !0 : d, g = n.tetherOffset, h = g === void 0 ? 0 : g, p = Ce(t, {
    boundary: s,
    rootBoundary: l,
    padding: u,
    altBoundary: f
  }), y = W(t.placement), x = pe(t.placement), O = !x, m = at(y), w = Yr(m), b = t.modifiersData.popperOffsets, A = t.rects.reference, E = t.rects.popper, P = typeof h == "function" ? h(Object.assign({}, t.rects, {
    placement: t.placement
  })) : h, S = typeof P == "number" ? {
    mainAxis: P,
    altAxis: P
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, P), T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (b) {
    if (o) {
      var D, K = m === "y" ? L : R, z = m === "y" ? B : F, M = m === "y" ? "height" : "width", H = b[m], Te = H + p[K], G = H - p[z], De = v ? -E[M] / 2 : 0, Xe = x === le ? A[M] : E[M], ge = x === le ? -E[M] : -A[M], $e = t.elements.arrow, oe = v && $e ? ot($e) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : zt(), he = X[K], ke = X[z], Z = be(0, A[M], oe[M]), _e = O ? A[M] / 2 - De - Z - he - S.mainAxis : Xe - Z - he - S.mainAxis, rn = O ? -A[M] / 2 + De + Z + ke + S.mainAxis : ge + Z + ke + S.mainAxis, Ye = t.elements.arrow && Pe(t.elements.arrow), on = Ye ? m === "y" ? Ye.clientTop || 0 : Ye.clientLeft || 0 : 0, lt = (D = T == null ? void 0 : T[m]) != null ? D : 0, an = H + _e - lt - on, sn = H + rn - lt, ut = be(v ? We(Te, an) : Te, H, v ? ee(G, sn) : G);
      b[m] = ut, I[m] = ut - H;
    }
    if (a) {
      var dt, cn = m === "x" ? L : R, fn = m === "x" ? B : F, J = b[w], Le = w === "y" ? "height" : "width", pt = J + p[cn], vt = J - p[fn], Ke = [L, R].indexOf(y) !== -1, gt = (dt = T == null ? void 0 : T[w]) != null ? dt : 0, ht = Ke ? pt : J - A[Le] - E[Le] - gt + S.altAxis, mt = Ke ? J + A[Le] + E[Le] - gt - S.altAxis : vt, yt = v && Ke ? yr(ht, J, mt) : be(v ? ht : pt, J, v ? mt : vt);
      b[w] = yt, I[w] = yt - J;
    }
    t.modifiersData[r] = I;
  }
}
const zr = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Kr,
  requiresIfExists: ["offset"]
};
function Gr(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Zr(e) {
  return e === j(e) || !N(e) ? st(e) : Gr(e);
}
function Jr(e) {
  var t = e.getBoundingClientRect(), n = ue(t.width) / e.offsetWidth || 1, r = ue(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Qr(e, t, n) {
  n === void 0 && (n = !1);
  var r = N(t), i = N(t) && Jr(t), o = Y(t), c = de(e, i, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((V(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ft(o)) && (a = Zr(t)), N(t) ? (s = de(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : o && (s.x = ct(o))), {
    x: c.left + a.scrollLeft - s.x,
    y: c.top + a.scrollTop - s.y,
    width: c.width,
    height: c.height
  };
}
function ei(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function i(o) {
    n.add(o.name);
    var c = [].concat(o.requires || [], o.requiresIfExists || []);
    c.forEach(function(a) {
      if (!n.has(a)) {
        var s = t.get(a);
        s && i(s);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || i(o);
  }), r;
}
function ti(e) {
  var t = ei(e);
  return dr.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function ni(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function ri(e) {
  var t = e.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Lt = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Rt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ii(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, o = i === void 0 ? Lt : i;
  return function(a, s, l) {
    l === void 0 && (l = o);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Lt, o),
      modifiersData: {},
      elements: {
        reference: a,
        popper: s
      },
      attributes: {},
      styles: {}
    }, u = [], d = !1, v = {
      state: f,
      setOptions: function(y) {
        var x = typeof y == "function" ? y(f.options) : y;
        h(), f.options = Object.assign({}, o, f.options, x), f.scrollParents = {
          reference: re(a) ? we(a) : a.contextElement ? we(a.contextElement) : [],
          popper: we(s)
        };
        var O = ti(ri([].concat(r, f.options.modifiers)));
        return f.orderedModifiers = O.filter(function(m) {
          return m.enabled;
        }), g(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!d) {
          var y = f.elements, x = y.reference, O = y.popper;
          if (Rt(x, O)) {
            f.rects = {
              reference: Qr(x, Pe(O), f.options.strategy === "fixed"),
              popper: ot(O)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(S) {
              return f.modifiersData[S.name] = Object.assign({}, S.data);
            });
            for (var m = 0; m < f.orderedModifiers.length; m++) {
              if (f.reset === !0) {
                f.reset = !1, m = -1;
                continue;
              }
              var w = f.orderedModifiers[m], b = w.fn, A = w.options, E = A === void 0 ? {} : A, P = w.name;
              typeof b == "function" && (f = b({
                state: f,
                options: E,
                name: P,
                instance: v
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: ni(function() {
        return new Promise(function(p) {
          v.forceUpdate(), p(f);
        });
      }),
      destroy: function() {
        h(), d = !0;
      }
    };
    if (!Rt(a, s))
      return v;
    v.setOptions(l).then(function(p) {
      !d && l.onFirstUpdate && l.onFirstUpdate(p);
    });
    function g() {
      f.orderedModifiers.forEach(function(p) {
        var y = p.name, x = p.options, O = x === void 0 ? {} : x, m = p.effect;
        if (typeof m == "function") {
          var w = m({
            state: f,
            name: y,
            instance: v,
            options: O
          }), b = function() {
          };
          u.push(w || b);
        }
      });
    }
    function h() {
      u.forEach(function(p) {
        return p();
      }), u = [];
    }
    return v;
  };
}
var oi = [Tr, _r, Sr, gr, Ur, Ir, zr, Or, Wr], en = /* @__PURE__ */ ii({
  defaultModifiers: oi
});
console.log("prod");
const tn = Ve(null);
function nn() {
  const e = qe(tn);
  if (!e) throw new Error("usePopup must be called inside PopupProvider");
  return e;
}
function ai(e) {
  const [t, n] = Ht({
    isOpen: e.defaultOpen ?? !1,
    placement: e.placement ?? "bottom-start",
    animationDurationInMs: e.animationDurationInMs ?? 120
  }), r = {
    state: t,
    setTrigger(u) {
      n("triggerRef", u);
    },
    setContent(u) {
      n("contentRef", u);
    }
  };
  function i() {
    n("isOpen", !0);
    const u = t.contentRef, d = t.triggerRef, v = t.animationDurationInMs / 1e3;
    if (!u || !d) return;
    const g = t.placement;
    en(d, u, {
      placement: g,
      modifiers: [{
        name: "offset",
        options: {
          offset: e.offset ?? [0, 2]
        }
      }],
      onFirstUpdate() {
        const h = u.getBoundingClientRect().width;
        k.set(u, {
          minWidth: h,
          opacity: 0,
          filter: "blur(5px)",
          y: "+=10px"
        }), k.to(u, {
          opacity: 1,
          duration: v,
          filter: "blur(0px)",
          y: "-=10px"
        });
      }
    });
  }
  function o() {
    const u = t.contentRef;
    if (!u) return;
    const d = t.animationDurationInMs / 1e3;
    k.to(u, {
      opacity: 0,
      filter: "blur(5px)",
      y: "+=10px",
      delay: 0,
      duration: d
    }).then(() => {
      n("isOpen", !1);
    });
  }
  function c() {
    t.isOpen ? o() : (i(), document.addEventListener("click", a));
  }
  function a(u) {
    const d = u.target, {
      isOpen: v,
      triggerRef: g,
      contentRef: h
    } = t;
    v && !(g != null && g.contains(d) || h != null && h.contains(d)) && (o(), document.removeEventListener("click", a));
  }
  let s;
  function l() {
    const u = t.contentRef, d = t.triggerRef;
    if (e.keepContentOnHover) {
      let v = function(h) {
        clearTimeout(s), s = setTimeout(() => {
          const p = h.target, y = u == null ? void 0 : u.contains(p), x = d == null ? void 0 : d.contains(p);
          !y && !x && (o(), document.removeEventListener("mousemove", v), d == null || d.addEventListener("mouseenter", f));
        }, g);
      };
      const g = e.unHoverHideToleranceInMs ?? 100;
      document.addEventListener("mousemove", v);
    } else
      o(), d == null || d.addEventListener("mouseenter", f);
  }
  function f() {
    const u = t.triggerRef;
    i(), u == null || u.removeEventListener("mouseenter", f);
  }
  return ne(() => {
    const u = t.triggerRef;
    e.trigger == "click" ? u == null || u.addEventListener("click", c) : (u == null || u.addEventListener("mouseenter", f), u == null || u.addEventListener("mouseleave", l)), fe(() => {
      u == null || u.removeEventListener("click", c), u == null || u.removeEventListener("mouseenter", f), u == null || u.removeEventListener("mouseleave", l);
    });
  }), ne(() => {
    e.defaultOpen && i();
  }), C(tn.Provider, {
    value: r,
    get children() {
      return e.children;
    }
  });
}
function vi(e) {
  return C(ai, {
    get animationDurationInMs() {
      return e.animationDurationInMs;
    },
    get placement() {
      return e.placement;
    },
    get defaultOpen() {
      return e.defaultOpen;
    },
    get trigger() {
      return e.trigger;
    },
    get offset() {
      return e.offset;
    },
    get keepContentOnHover() {
      return e.keepContentOnHover;
    },
    get unHoverHideToleranceInMs() {
      return e.unHoverHideToleranceInMs;
    },
    get children() {
      return e.children;
    }
  });
}
function gi(e) {
  const t = nn();
  return C(ve, {
    ref(n) {
      var r = t.setTrigger;
      typeof r == "function" ? r(n) : t.setTrigger = n;
    },
    get children() {
      return _(() => typeof e.children == "function")() ? e.children(() => t.state) : e.children;
    }
  });
}
function hi(e) {
  const t = nn();
  return C(nt, {
    get when() {
      return t.state.isOpen;
    },
    get children() {
      return C(ve, {
        ref(n) {
          var r = t.setContent;
          typeof r == "function" ? r(n) : t.setContent = n;
        },
        get children() {
          return _(() => typeof e.children == "function")() ? e.children(() => t.state) : e.children;
        }
      });
    }
  });
}
function si(e) {
  let t;
  const n = qt(), r = 99, [i, o] = Q();
  return ne(() => {
    const c = e.trigger, a = i();
    !c || !a || (t = en(c, a, {
      strategy: "fixed",
      placement: e.placement ?? n.placement,
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, 3]
        }
      }],
      onFirstUpdate(s) {
        const l = i();
        l && (k.set(l, {
          opacity: 0,
          y: "+=10px",
          filter: "blur(5px)",
          zIndex: r
        }), k.to(l, {
          opacity: 0.95,
          y: "-=10px",
          filter: "blur(0px)",
          duration: 0.08
        }));
      }
    }), fe(() => t == null ? void 0 : t.destroy()));
  }), C(ve, {
    ref: o,
    get children() {
      return e.children;
    }
  });
}
var ci = /* @__PURE__ */ Mt("<div>");
function mi(e) {
  const t = qt(), n = e.hideDelayInMs ?? t.hideDelayInMs;
  let r;
  const [i, o] = Q(), [c, a] = Q(!1), [s, l] = Q("");
  function f(d) {
    const g = d.target.getAttribute("data-tips") ?? "";
    g && (clearTimeout(r), l(g), a(!0));
  }
  function u(d) {
    n ? (clearTimeout(r), r = setTimeout(() => {
      a(!1);
    }, n)) : a(!1);
  }
  return ne(() => {
    var d, v;
    (d = i()) == null || d.addEventListener("mouseenter", f), (v = i()) == null || v.addEventListener("mouseleave", u), fe(() => {
      var g, h;
      (g = i()) == null || g.removeEventListener("mouseenter", f), (h = i()) == null || h.removeEventListener("mouseleave", u);
    });
  }), [C(nt, {
    get when() {
      return c();
    },
    get children() {
      return C(si, {
        get placement() {
          return e.placement;
        },
        get trigger() {
          return i();
        },
        get children() {
          return _(() => !!t.WrapperElement)() ? C(qn, {
            get children() {
              return s();
            },
            get component() {
              return t.WrapperElement;
            }
          }) : (() => {
            var d = ci();
            return Be(d, s), d;
          })();
        }
      });
    }
  }), C(ve, {
    ref: o,
    get children() {
      return [_(() => e.children), " "];
    }
  })];
}
export {
  di as Dialog,
  pi as DialogCloseButton,
  zn as DialogProvider,
  ui as KleponProvider,
  vi as Popup,
  hi as PopupBody,
  gi as PopupTrigger,
  mi as Tooltip,
  Gn as TooltipProvider
};
