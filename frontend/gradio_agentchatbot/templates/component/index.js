var t1 = Object.defineProperty;
var n1 = (a, n, s) => n in a ? t1(a, n, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[n] = s;
var He = (a, n, s) => (n1(a, typeof n != "symbol" ? n + "" : n, s), s), r1 = (a, n, s) => {
  if (!n.has(a))
    throw TypeError("Cannot " + s);
};
var ds = (a, n, s) => {
  if (n.has(a))
    throw TypeError("Cannot add the same private member more than once");
  n instanceof WeakSet ? n.add(a) : n.set(a, s);
};
var rr = (a, n, s) => (r1(a, n, "access private method"), s);
const s1 = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], wl = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
s1.reduce(
  (a, { color: n, primary: s, secondary: i }) => ({
    ...a,
    [n]: {
      primary: wl[n][s],
      secondary: wl[n][i]
    }
  }),
  {}
);
class pr extends Error {
  constructor(n) {
    super(n), this.name = "ShareError";
  }
}
async function yl(a, n) {
  var b;
  if (window.__gradio_space__ == null)
    throw new pr("Must be on Spaces to share.");
  let s, i, u;
  {
    const y = await fetch(a);
    s = await y.blob(), i = y.headers.get("content-type") || "", u = y.headers.get("content-disposition") || "";
  }
  const o = new File([s], u, { type: i }), f = await fetch("https://huggingface.co/uploads", {
    method: "POST",
    body: o,
    headers: {
      "Content-Type": o.type,
      "X-Requested-With": "XMLHttpRequest"
    }
  });
  if (!f.ok) {
    if ((b = f.headers.get("content-type")) != null && b.includes("application/json")) {
      const y = await f.json();
      throw new pr(`Upload failed: ${y.error}`);
    }
    throw new pr("Upload failed.");
  }
  return await f.text();
}
function i1(a) {
  a.addEventListener("click", n);
  async function n(s) {
    const i = s.composedPath(), [u] = i.filter(
      (o) => (o == null ? void 0 : o.tagName) === "BUTTON" && o.classList.contains("copy_code_button")
    );
    if (u) {
      let o = function(y) {
        y.style.opacity = "1", setTimeout(() => {
          y.style.opacity = "0";
        }, 2e3);
      };
      s.stopImmediatePropagation();
      const f = u.parentElement.innerText.trim(), p = Array.from(
        u.children
      )[1];
      await l1(f) && o(p);
    }
  }
  return {
    destroy() {
      a.removeEventListener("click", n);
    }
  };
}
async function l1(a) {
  let n = !1;
  if ("clipboard" in navigator)
    await navigator.clipboard.writeText(a), n = !0;
  else {
    const s = document.createElement("textarea");
    s.value = a, s.style.position = "absolute", s.style.left = "-999999px", document.body.prepend(s), s.select();
    try {
      document.execCommand("copy"), n = !0;
    } catch (i) {
      console.error(i), n = !1;
    } finally {
      s.remove();
    }
  }
  return n;
}
const a1 = async (a) => (await Promise.all(a.map(async (s) => await Promise.all(s.map(async (i, u) => {
  var p, b, y;
  if (i === null)
    return "";
  let o = u === 0 ? "😃" : "🤖", f = "";
  if (typeof i == "string") {
    const x = {
      audio: /<audio.*?src="(\/file=.*?)"/g,
      video: /<video.*?src="(\/file=.*?)"/g,
      image: /<img.*?src="(\/file=.*?)".*?\/>|!\[.*?\]\((\/file=.*?)\)/g
    };
    f = i;
    for (let [C, B] of Object.entries(x)) {
      let q;
      for (; (q = B.exec(i)) !== null; ) {
        const W = q[1] || q[2], j = await yl(W);
        f = f.replace(W, j);
      }
    }
  } else {
    if (!(i != null && i.url))
      return "";
    const x = await yl(i.url);
    (p = i.mime_type) != null && p.includes("audio") ? f = `<audio controls src="${x}"></audio>` : (b = i.mime_type) != null && b.includes("video") ? f = x : (y = i.mime_type) != null && y.includes("image") && (f = `<img src="${x}" />`);
  }
  return `${o}: ${f}`;
}))))).map((s) => s.join(s[0] !== "" && s[1] !== "" ? `
` : "")).join(`
`);
var _l = Object.prototype.hasOwnProperty;
function Bs(a, n) {
  var s, i;
  if (a === n)
    return !0;
  if (a && n && (s = a.constructor) === n.constructor) {
    if (s === Date)
      return a.getTime() === n.getTime();
    if (s === RegExp)
      return a.toString() === n.toString();
    if (s === Array) {
      if ((i = a.length) === n.length)
        for (; i-- && Bs(a[i], n[i]); )
          ;
      return i === -1;
    }
    if (!s || typeof a == "object") {
      i = 0;
      for (s in a)
        if (_l.call(a, s) && ++i && !_l.call(n, s) || !(s in n) || !Bs(a[s], n[s]))
          return !1;
      return Object.keys(n).length === i;
    }
  }
  return a !== a && n !== n;
}
const {
  SvelteComponent: o1,
  assign: u1,
  create_slot: c1,
  detach: h1,
  element: f1,
  get_all_dirty_from_scope: d1,
  get_slot_changes: m1,
  get_spread_update: p1,
  init: g1,
  insert: b1,
  safe_not_equal: w1,
  set_dynamic_element_data: kl,
  set_style: Ft,
  toggle_class: o0,
  transition_in: eo,
  transition_out: to,
  update_slot_base: y1
} = window.__gradio__svelte__internal;
function _1(a) {
  let n, s, i;
  const u = (
    /*#slots*/
    a[18].default
  ), o = c1(
    u,
    a,
    /*$$scope*/
    a[17],
    null
  );
  let f = [
    { "data-testid": (
      /*test_id*/
      a[7]
    ) },
    { id: (
      /*elem_id*/
      a[2]
    ) },
    {
      class: s = "block " + /*elem_classes*/
      a[3].join(" ") + " svelte-nl1om8"
    }
  ], p = {};
  for (let b = 0; b < f.length; b += 1)
    p = u1(p, f[b]);
  return {
    c() {
      n = f1(
        /*tag*/
        a[14]
      ), o && o.c(), kl(
        /*tag*/
        a[14]
      )(n, p), o0(
        n,
        "hidden",
        /*visible*/
        a[10] === !1
      ), o0(
        n,
        "padded",
        /*padding*/
        a[6]
      ), o0(
        n,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), o0(
        n,
        "border_contrast",
        /*border_mode*/
        a[5] === "contrast"
      ), o0(n, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), Ft(
        n,
        "height",
        /*get_dimension*/
        a[15](
          /*height*/
          a[0]
        )
      ), Ft(n, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : (
        /*get_dimension*/
        a[15](
          /*width*/
          a[1]
        )
      )), Ft(
        n,
        "border-style",
        /*variant*/
        a[4]
      ), Ft(
        n,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), Ft(
        n,
        "flex-grow",
        /*scale*/
        a[12]
      ), Ft(n, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`), Ft(n, "border-width", "var(--block-border-width)");
    },
    m(b, y) {
      b1(b, n, y), o && o.m(n, null), i = !0;
    },
    p(b, y) {
      o && o.p && (!i || y & /*$$scope*/
      131072) && y1(
        o,
        u,
        b,
        /*$$scope*/
        b[17],
        i ? m1(
          u,
          /*$$scope*/
          b[17],
          y,
          null
        ) : d1(
          /*$$scope*/
          b[17]
        ),
        null
      ), kl(
        /*tag*/
        b[14]
      )(n, p = p1(f, [
        (!i || y & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          b[7]
        ) },
        (!i || y & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          b[2]
        ) },
        (!i || y & /*elem_classes*/
        8 && s !== (s = "block " + /*elem_classes*/
        b[3].join(" ") + " svelte-nl1om8")) && { class: s }
      ])), o0(
        n,
        "hidden",
        /*visible*/
        b[10] === !1
      ), o0(
        n,
        "padded",
        /*padding*/
        b[6]
      ), o0(
        n,
        "border_focus",
        /*border_mode*/
        b[5] === "focus"
      ), o0(
        n,
        "border_contrast",
        /*border_mode*/
        b[5] === "contrast"
      ), o0(n, "hide-container", !/*explicit_call*/
      b[8] && !/*container*/
      b[9]), y & /*height*/
      1 && Ft(
        n,
        "height",
        /*get_dimension*/
        b[15](
          /*height*/
          b[0]
        )
      ), y & /*width*/
      2 && Ft(n, "width", typeof /*width*/
      b[1] == "number" ? `calc(min(${/*width*/
      b[1]}px, 100%))` : (
        /*get_dimension*/
        b[15](
          /*width*/
          b[1]
        )
      )), y & /*variant*/
      16 && Ft(
        n,
        "border-style",
        /*variant*/
        b[4]
      ), y & /*allow_overflow*/
      2048 && Ft(
        n,
        "overflow",
        /*allow_overflow*/
        b[11] ? "visible" : "hidden"
      ), y & /*scale*/
      4096 && Ft(
        n,
        "flex-grow",
        /*scale*/
        b[12]
      ), y & /*min_width*/
      8192 && Ft(n, "min-width", `calc(min(${/*min_width*/
      b[13]}px, 100%))`);
    },
    i(b) {
      i || (eo(o, b), i = !0);
    },
    o(b) {
      to(o, b), i = !1;
    },
    d(b) {
      b && h1(n), o && o.d(b);
    }
  };
}
function k1(a) {
  let n, s = (
    /*tag*/
    a[14] && _1(a)
  );
  return {
    c() {
      s && s.c();
    },
    m(i, u) {
      s && s.m(i, u), n = !0;
    },
    p(i, [u]) {
      /*tag*/
      i[14] && s.p(i, u);
    },
    i(i) {
      n || (eo(s, i), n = !0);
    },
    o(i) {
      to(s, i), n = !1;
    },
    d(i) {
      s && s.d(i);
    }
  };
}
function D1(a, n, s) {
  let { $$slots: i = {}, $$scope: u } = n, { height: o = void 0 } = n, { width: f = void 0 } = n, { elem_id: p = "" } = n, { elem_classes: b = [] } = n, { variant: y = "solid" } = n, { border_mode: x = "base" } = n, { padding: C = !0 } = n, { type: B = "normal" } = n, { test_id: q = void 0 } = n, { explicit_call: W = !1 } = n, { container: j = !0 } = n, { visible: G = !0 } = n, { allow_overflow: U = !0 } = n, { scale: A = null } = n, { min_width: S = 0 } = n, M = B === "fieldset" ? "fieldset" : "div";
  const I = (O) => {
    if (O !== void 0) {
      if (typeof O == "number")
        return O + "px";
      if (typeof O == "string")
        return O;
    }
  };
  return a.$$set = (O) => {
    "height" in O && s(0, o = O.height), "width" in O && s(1, f = O.width), "elem_id" in O && s(2, p = O.elem_id), "elem_classes" in O && s(3, b = O.elem_classes), "variant" in O && s(4, y = O.variant), "border_mode" in O && s(5, x = O.border_mode), "padding" in O && s(6, C = O.padding), "type" in O && s(16, B = O.type), "test_id" in O && s(7, q = O.test_id), "explicit_call" in O && s(8, W = O.explicit_call), "container" in O && s(9, j = O.container), "visible" in O && s(10, G = O.visible), "allow_overflow" in O && s(11, U = O.allow_overflow), "scale" in O && s(12, A = O.scale), "min_width" in O && s(13, S = O.min_width), "$$scope" in O && s(17, u = O.$$scope);
  }, [
    o,
    f,
    p,
    b,
    y,
    x,
    C,
    q,
    W,
    j,
    G,
    U,
    A,
    S,
    M,
    I,
    B,
    u,
    i
  ];
}
class x1 extends o1 {
  constructor(n) {
    super(), g1(this, n, D1, k1, w1, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 16,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: v1,
  append: ms,
  attr: sr,
  create_component: A1,
  destroy_component: S1,
  detach: E1,
  element: Dl,
  init: F1,
  insert: T1,
  mount_component: C1,
  safe_not_equal: M1,
  set_data: z1,
  space: B1,
  text: N1,
  toggle_class: B0,
  transition_in: R1,
  transition_out: I1
} = window.__gradio__svelte__internal;
function L1(a) {
  let n, s, i, u, o, f;
  return i = new /*Icon*/
  a[1]({}), {
    c() {
      n = Dl("label"), s = Dl("span"), A1(i.$$.fragment), u = B1(), o = N1(
        /*label*/
        a[0]
      ), sr(s, "class", "svelte-9gxdi0"), sr(n, "for", ""), sr(n, "data-testid", "block-label"), sr(n, "class", "svelte-9gxdi0"), B0(n, "hide", !/*show_label*/
      a[2]), B0(n, "sr-only", !/*show_label*/
      a[2]), B0(
        n,
        "float",
        /*float*/
        a[4]
      ), B0(
        n,
        "hide-label",
        /*disable*/
        a[3]
      );
    },
    m(p, b) {
      T1(p, n, b), ms(n, s), C1(i, s, null), ms(n, u), ms(n, o), f = !0;
    },
    p(p, [b]) {
      (!f || b & /*label*/
      1) && z1(
        o,
        /*label*/
        p[0]
      ), (!f || b & /*show_label*/
      4) && B0(n, "hide", !/*show_label*/
      p[2]), (!f || b & /*show_label*/
      4) && B0(n, "sr-only", !/*show_label*/
      p[2]), (!f || b & /*float*/
      16) && B0(
        n,
        "float",
        /*float*/
        p[4]
      ), (!f || b & /*disable*/
      8) && B0(
        n,
        "hide-label",
        /*disable*/
        p[3]
      );
    },
    i(p) {
      f || (R1(i.$$.fragment, p), f = !0);
    },
    o(p) {
      I1(i.$$.fragment, p), f = !1;
    },
    d(p) {
      p && E1(n), S1(i);
    }
  };
}
function O1(a, n, s) {
  let { label: i = null } = n, { Icon: u } = n, { show_label: o = !0 } = n, { disable: f = !1 } = n, { float: p = !0 } = n;
  return a.$$set = (b) => {
    "label" in b && s(0, i = b.label), "Icon" in b && s(1, u = b.Icon), "show_label" in b && s(2, o = b.show_label), "disable" in b && s(3, f = b.disable), "float" in b && s(4, p = b.float);
  }, [i, u, o, f, p];
}
class q1 extends v1 {
  constructor(n) {
    super(), F1(this, n, O1, L1, M1, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: P1,
  append: Ns,
  attr: x0,
  bubble: H1,
  create_component: U1,
  destroy_component: G1,
  detach: no,
  element: Rs,
  init: V1,
  insert: ro,
  listen: W1,
  mount_component: j1,
  safe_not_equal: X1,
  set_data: Y1,
  set_style: nn,
  space: Z1,
  text: K1,
  toggle_class: kt,
  transition_in: Q1,
  transition_out: J1
} = window.__gradio__svelte__internal;
function xl(a) {
  let n, s;
  return {
    c() {
      n = Rs("span"), s = K1(
        /*label*/
        a[1]
      ), x0(n, "class", "svelte-1lrphxw");
    },
    m(i, u) {
      ro(i, n, u), Ns(n, s);
    },
    p(i, u) {
      u & /*label*/
      2 && Y1(
        s,
        /*label*/
        i[1]
      );
    },
    d(i) {
      i && no(n);
    }
  };
}
function $1(a) {
  let n, s, i, u, o, f, p, b = (
    /*show_label*/
    a[2] && xl(a)
  );
  return u = new /*Icon*/
  a[0]({}), {
    c() {
      n = Rs("button"), b && b.c(), s = Z1(), i = Rs("div"), U1(u.$$.fragment), x0(i, "class", "svelte-1lrphxw"), kt(
        i,
        "small",
        /*size*/
        a[4] === "small"
      ), kt(
        i,
        "large",
        /*size*/
        a[4] === "large"
      ), kt(
        i,
        "medium",
        /*size*/
        a[4] === "medium"
      ), n.disabled = /*disabled*/
      a[7], x0(
        n,
        "aria-label",
        /*label*/
        a[1]
      ), x0(
        n,
        "aria-haspopup",
        /*hasPopup*/
        a[8]
      ), x0(
        n,
        "title",
        /*label*/
        a[1]
      ), x0(n, "class", "svelte-1lrphxw"), kt(
        n,
        "pending",
        /*pending*/
        a[3]
      ), kt(
        n,
        "padded",
        /*padded*/
        a[5]
      ), kt(
        n,
        "highlight",
        /*highlight*/
        a[6]
      ), kt(
        n,
        "transparent",
        /*transparent*/
        a[9]
      ), nn(n, "color", !/*disabled*/
      a[7] && /*_color*/
      a[12] ? (
        /*_color*/
        a[12]
      ) : "var(--block-label-text-color)"), nn(n, "--bg-color", /*disabled*/
      a[7] ? "auto" : (
        /*background*/
        a[10]
      )), nn(
        n,
        "margin-left",
        /*offset*/
        a[11] + "px"
      );
    },
    m(y, x) {
      ro(y, n, x), b && b.m(n, null), Ns(n, s), Ns(n, i), j1(u, i, null), o = !0, f || (p = W1(
        n,
        "click",
        /*click_handler*/
        a[14]
      ), f = !0);
    },
    p(y, [x]) {
      /*show_label*/
      y[2] ? b ? b.p(y, x) : (b = xl(y), b.c(), b.m(n, s)) : b && (b.d(1), b = null), (!o || x & /*size*/
      16) && kt(
        i,
        "small",
        /*size*/
        y[4] === "small"
      ), (!o || x & /*size*/
      16) && kt(
        i,
        "large",
        /*size*/
        y[4] === "large"
      ), (!o || x & /*size*/
      16) && kt(
        i,
        "medium",
        /*size*/
        y[4] === "medium"
      ), (!o || x & /*disabled*/
      128) && (n.disabled = /*disabled*/
      y[7]), (!o || x & /*label*/
      2) && x0(
        n,
        "aria-label",
        /*label*/
        y[1]
      ), (!o || x & /*hasPopup*/
      256) && x0(
        n,
        "aria-haspopup",
        /*hasPopup*/
        y[8]
      ), (!o || x & /*label*/
      2) && x0(
        n,
        "title",
        /*label*/
        y[1]
      ), (!o || x & /*pending*/
      8) && kt(
        n,
        "pending",
        /*pending*/
        y[3]
      ), (!o || x & /*padded*/
      32) && kt(
        n,
        "padded",
        /*padded*/
        y[5]
      ), (!o || x & /*highlight*/
      64) && kt(
        n,
        "highlight",
        /*highlight*/
        y[6]
      ), (!o || x & /*transparent*/
      512) && kt(
        n,
        "transparent",
        /*transparent*/
        y[9]
      ), x & /*disabled, _color*/
      4224 && nn(n, "color", !/*disabled*/
      y[7] && /*_color*/
      y[12] ? (
        /*_color*/
        y[12]
      ) : "var(--block-label-text-color)"), x & /*disabled, background*/
      1152 && nn(n, "--bg-color", /*disabled*/
      y[7] ? "auto" : (
        /*background*/
        y[10]
      )), x & /*offset*/
      2048 && nn(
        n,
        "margin-left",
        /*offset*/
        y[11] + "px"
      );
    },
    i(y) {
      o || (Q1(u.$$.fragment, y), o = !0);
    },
    o(y) {
      J1(u.$$.fragment, y), o = !1;
    },
    d(y) {
      y && no(n), b && b.d(), G1(u), f = !1, p();
    }
  };
}
function ec(a, n, s) {
  let i, { Icon: u } = n, { label: o = "" } = n, { show_label: f = !1 } = n, { pending: p = !1 } = n, { size: b = "small" } = n, { padded: y = !0 } = n, { highlight: x = !1 } = n, { disabled: C = !1 } = n, { hasPopup: B = !1 } = n, { color: q = "var(--block-label-text-color)" } = n, { transparent: W = !1 } = n, { background: j = "var(--background-fill-primary)" } = n, { offset: G = 0 } = n;
  function U(A) {
    H1.call(this, a, A);
  }
  return a.$$set = (A) => {
    "Icon" in A && s(0, u = A.Icon), "label" in A && s(1, o = A.label), "show_label" in A && s(2, f = A.show_label), "pending" in A && s(3, p = A.pending), "size" in A && s(4, b = A.size), "padded" in A && s(5, y = A.padded), "highlight" in A && s(6, x = A.highlight), "disabled" in A && s(7, C = A.disabled), "hasPopup" in A && s(8, B = A.hasPopup), "color" in A && s(13, q = A.color), "transparent" in A && s(9, W = A.transparent), "background" in A && s(10, j = A.background), "offset" in A && s(11, G = A.offset);
  }, a.$$.update = () => {
    a.$$.dirty & /*highlight, color*/
    8256 && s(12, i = x ? "var(--color-accent)" : q);
  }, [
    u,
    o,
    f,
    p,
    b,
    y,
    x,
    C,
    B,
    W,
    j,
    G,
    i,
    q,
    U
  ];
}
class so extends P1 {
  constructor(n) {
    super(), V1(this, n, ec, $1, X1, {
      Icon: 0,
      label: 1,
      show_label: 2,
      pending: 3,
      size: 4,
      padded: 5,
      highlight: 6,
      disabled: 7,
      hasPopup: 8,
      color: 13,
      transparent: 9,
      background: 10,
      offset: 11
    });
  }
}
const {
  SvelteComponent: tc,
  append: vl,
  attr: Tt,
  detach: nc,
  init: rc,
  insert: sc,
  noop: ps,
  safe_not_equal: ic,
  svg_element: gs
} = window.__gradio__svelte__internal;
function lc(a) {
  let n, s, i;
  return {
    c() {
      n = gs("svg"), s = gs("path"), i = gs("path"), Tt(s, "fill", "currentColor"), Tt(s, "d", "M17.74 30L16 29l4-7h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.84Z"), Tt(i, "fill", "currentColor"), Tt(i, "d", "M8 10h16v2H8zm0 6h10v2H8z"), Tt(n, "xmlns", "http://www.w3.org/2000/svg"), Tt(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Tt(n, "aria-hidden", "true"), Tt(n, "role", "img"), Tt(n, "class", "iconify iconify--carbon"), Tt(n, "width", "100%"), Tt(n, "height", "100%"), Tt(n, "preserveAspectRatio", "xMidYMid meet"), Tt(n, "viewBox", "0 0 32 32");
    },
    m(u, o) {
      sc(u, n, o), vl(n, s), vl(n, i);
    },
    p: ps,
    i: ps,
    o: ps,
    d(u) {
      u && nc(n);
    }
  };
}
class ac extends tc {
  constructor(n) {
    super(), rc(this, n, null, lc, ic, {});
  }
}
const {
  SvelteComponent: oc,
  append: bs,
  attr: Kt,
  detach: uc,
  init: cc,
  insert: hc,
  noop: ws,
  safe_not_equal: fc,
  set_style: u0,
  svg_element: ir
} = window.__gradio__svelte__internal;
function dc(a) {
  let n, s, i, u;
  return {
    c() {
      n = ir("svg"), s = ir("g"), i = ir("path"), u = ir("path"), Kt(i, "d", "M18,6L6.087,17.913"), u0(i, "fill", "none"), u0(i, "fill-rule", "nonzero"), u0(i, "stroke-width", "2px"), Kt(s, "transform", "matrix(1.14096,-0.140958,-0.140958,1.14096,-0.0559523,0.0559523)"), Kt(u, "d", "M4.364,4.364L19.636,19.636"), u0(u, "fill", "none"), u0(u, "fill-rule", "nonzero"), u0(u, "stroke-width", "2px"), Kt(n, "width", "100%"), Kt(n, "height", "100%"), Kt(n, "viewBox", "0 0 24 24"), Kt(n, "version", "1.1"), Kt(n, "xmlns", "http://www.w3.org/2000/svg"), Kt(n, "xmlns:xlink", "http://www.w3.org/1999/xlink"), Kt(n, "xml:space", "preserve"), Kt(n, "stroke", "currentColor"), u0(n, "fill-rule", "evenodd"), u0(n, "clip-rule", "evenodd"), u0(n, "stroke-linecap", "round"), u0(n, "stroke-linejoin", "round");
    },
    m(o, f) {
      hc(o, n, f), bs(n, s), bs(s, i), bs(n, u);
    },
    p: ws,
    i: ws,
    o: ws,
    d(o) {
      o && uc(n);
    }
  };
}
class mc extends oc {
  constructor(n) {
    super(), cc(this, n, null, dc, fc, {});
  }
}
const {
  SvelteComponent: pc,
  append: gc,
  attr: yn,
  detach: bc,
  init: wc,
  insert: yc,
  noop: ys,
  safe_not_equal: _c,
  svg_element: Al
} = window.__gradio__svelte__internal;
function kc(a) {
  let n, s;
  return {
    c() {
      n = Al("svg"), s = Al("path"), yn(s, "d", "M23,20a5,5,0,0,0-3.89,1.89L11.8,17.32a4.46,4.46,0,0,0,0-2.64l7.31-4.57A5,5,0,1,0,18,7a4.79,4.79,0,0,0,.2,1.32l-7.31,4.57a5,5,0,1,0,0,6.22l7.31,4.57A4.79,4.79,0,0,0,18,25a5,5,0,1,0,5-5ZM23,4a3,3,0,1,1-3,3A3,3,0,0,1,23,4ZM7,19a3,3,0,1,1,3-3A3,3,0,0,1,7,19Zm16,9a3,3,0,1,1,3-3A3,3,0,0,1,23,28Z"), yn(s, "fill", "currentColor"), yn(n, "id", "icon"), yn(n, "xmlns", "http://www.w3.org/2000/svg"), yn(n, "viewBox", "0 0 32 32");
    },
    m(i, u) {
      yc(i, n, u), gc(n, s);
    },
    p: ys,
    i: ys,
    o: ys,
    d(i) {
      i && bc(n);
    }
  };
}
class Dc extends pc {
  constructor(n) {
    super(), wc(this, n, null, kc, _c, {});
  }
}
const {
  SvelteComponent: xc,
  create_component: vc,
  destroy_component: Ac,
  init: Sc,
  mount_component: Ec,
  safe_not_equal: Fc,
  transition_in: Tc,
  transition_out: Cc
} = window.__gradio__svelte__internal, { createEventDispatcher: Mc } = window.__gradio__svelte__internal;
function zc(a) {
  let n, s;
  return n = new so({
    props: {
      Icon: Dc,
      label: (
        /*i18n*/
        a[2]("common.share")
      ),
      pending: (
        /*pending*/
        a[3]
      )
    }
  }), n.$on(
    "click",
    /*click_handler*/
    a[5]
  ), {
    c() {
      vc(n.$$.fragment);
    },
    m(i, u) {
      Ec(n, i, u), s = !0;
    },
    p(i, [u]) {
      const o = {};
      u & /*i18n*/
      4 && (o.label = /*i18n*/
      i[2]("common.share")), u & /*pending*/
      8 && (o.pending = /*pending*/
      i[3]), n.$set(o);
    },
    i(i) {
      s || (Tc(n.$$.fragment, i), s = !0);
    },
    o(i) {
      Cc(n.$$.fragment, i), s = !1;
    },
    d(i) {
      Ac(n, i);
    }
  };
}
function Bc(a, n, s) {
  const i = Mc();
  let { formatter: u } = n, { value: o } = n, { i18n: f } = n, p = !1;
  const b = async () => {
    try {
      s(3, p = !0);
      const y = await u(o);
      i("share", { description: y });
    } catch (y) {
      console.error(y);
      let x = y instanceof pr ? y.message : "Share failed.";
      i("error", x);
    } finally {
      s(3, p = !1);
    }
  };
  return a.$$set = (y) => {
    "formatter" in y && s(0, u = y.formatter), "value" in y && s(1, o = y.value), "i18n" in y && s(2, f = y.i18n);
  }, [u, o, f, p, i, b];
}
class Nc extends xc {
  constructor(n) {
    super(), Sc(this, n, Bc, zc, Fc, { formatter: 0, value: 1, i18n: 2 });
  }
}
const { setContext: Od, getContext: Rc } = window.__gradio__svelte__internal, Ic = "WORKER_PROXY_CONTEXT_KEY";
function Lc() {
  return Rc(Ic);
}
function Oc(a) {
  return a.host === window.location.host || a.host === "localhost:7860" || a.host === "127.0.0.1:7860" || // Ref: https://github.com/gradio-app/gradio/blob/v3.32.0/js/app/src/Index.svelte#L194
  a.host === "lite.local";
}
function qc(a, n) {
  const s = n.toLowerCase();
  for (const [i, u] of Object.entries(a))
    if (i.toLowerCase() === s)
      return u;
}
function Pc(a) {
  if (a == null)
    return !1;
  const n = new URL(a, window.location.href);
  return !(!Oc(n) || n.protocol !== "http:" && n.protocol !== "https:");
}
async function Xs(a) {
  if (a == null || !Pc(a))
    return a;
  const n = Lc();
  if (n == null)
    return a;
  const i = new URL(a, window.location.href).pathname;
  return n.httpRequest({
    method: "GET",
    path: i,
    headers: {},
    query_string: ""
  }).then((u) => {
    if (u.status !== 200)
      throw new Error(`Failed to get file ${i} from the Wasm worker.`);
    const o = new Blob([u.body], {
      type: qc(u.headers, "content-type")
    });
    return URL.createObjectURL(o);
  });
}
const {
  SvelteComponent: Hc,
  assign: Is,
  compute_rest_props: Sl,
  detach: Uc,
  element: Gc,
  exclude_internal_props: Vc,
  get_spread_update: Wc,
  init: jc,
  insert: Xc,
  listen: _s,
  noop: El,
  run_all: Yc,
  safe_not_equal: Zc,
  set_attributes: Fl,
  src_url_equal: Kc
} = window.__gradio__svelte__internal, { createEventDispatcher: Qc } = window.__gradio__svelte__internal;
function Jc(a) {
  let n, s, i, u, o = [
    {
      src: s = /*resolved_src*/
      a[0]
    },
    /*$$restProps*/
    a[2]
  ], f = {};
  for (let p = 0; p < o.length; p += 1)
    f = Is(f, o[p]);
  return {
    c() {
      n = Gc("audio"), Fl(n, f);
    },
    m(p, b) {
      Xc(p, n, b), i || (u = [
        _s(
          n,
          "play",
          /*dispatch*/
          a[1].bind(null, "play")
        ),
        _s(
          n,
          "pause",
          /*dispatch*/
          a[1].bind(null, "pause")
        ),
        _s(
          n,
          "ended",
          /*dispatch*/
          a[1].bind(null, "ended")
        )
      ], i = !0);
    },
    p(p, [b]) {
      Fl(n, f = Wc(o, [
        b & /*resolved_src*/
        1 && !Kc(n.src, s = /*resolved_src*/
        p[0]) && { src: s },
        b & /*$$restProps*/
        4 && /*$$restProps*/
        p[2]
      ]));
    },
    i: El,
    o: El,
    d(p) {
      p && Uc(n), i = !1, Yc(u);
    }
  };
}
function $c(a, n, s) {
  const i = ["src"];
  let u = Sl(n, i), { src: o = void 0 } = n, f, p;
  const b = Qc();
  return a.$$set = (y) => {
    n = Is(Is({}, n), Vc(y)), s(2, u = Sl(n, i)), "src" in y && s(3, o = y.src);
  }, a.$$.update = () => {
    if (a.$$.dirty & /*src, latest_src*/
    24) {
      s(0, f = o), s(4, p = o);
      const y = o;
      Xs(y).then((x) => {
        p === y && s(0, f = x);
      });
    }
  }, [f, b, u, o, p];
}
class e4 extends Hc {
  constructor(n) {
    super(), jc(this, n, $c, Jc, Zc, { src: 3 });
  }
}
const {
  SvelteComponent: t4,
  assign: Ls,
  compute_rest_props: Tl,
  detach: n4,
  element: r4,
  exclude_internal_props: s4,
  get_spread_update: i4,
  init: l4,
  insert: a4,
  noop: Cl,
  safe_not_equal: o4,
  set_attributes: Ml,
  src_url_equal: u4,
  toggle_class: zl
} = window.__gradio__svelte__internal;
function c4(a) {
  let n, s, i = [
    {
      src: s = /*resolved_src*/
      a[0]
    },
    /*$$restProps*/
    a[1]
  ], u = {};
  for (let o = 0; o < i.length; o += 1)
    u = Ls(u, i[o]);
  return {
    c() {
      n = r4("img"), Ml(n, u), zl(n, "svelte-kxeri3", !0);
    },
    m(o, f) {
      a4(o, n, f);
    },
    p(o, [f]) {
      Ml(n, u = i4(i, [
        f & /*resolved_src*/
        1 && !u4(n.src, s = /*resolved_src*/
        o[0]) && { src: s },
        f & /*$$restProps*/
        2 && /*$$restProps*/
        o[1]
      ])), zl(n, "svelte-kxeri3", !0);
    },
    i: Cl,
    o: Cl,
    d(o) {
      o && n4(n);
    }
  };
}
function h4(a, n, s) {
  const i = ["src"];
  let u = Tl(n, i), { src: o = void 0 } = n, f, p;
  return a.$$set = (b) => {
    n = Ls(Ls({}, n), s4(b)), s(1, u = Tl(n, i)), "src" in b && s(2, o = b.src);
  }, a.$$.update = () => {
    if (a.$$.dirty & /*src, latest_src*/
    12) {
      s(0, f = o), s(3, p = o);
      const b = o;
      Xs(b).then((y) => {
        p === b && s(0, f = y);
      });
    }
  }, [f, u, o, p];
}
class io extends t4 {
  constructor(n) {
    super(), l4(this, n, h4, c4, o4, { src: 2 });
  }
}
var Bl;
(function(a) {
  a.LOAD = "LOAD", a.EXEC = "EXEC", a.WRITE_FILE = "WRITE_FILE", a.READ_FILE = "READ_FILE", a.DELETE_FILE = "DELETE_FILE", a.RENAME = "RENAME", a.CREATE_DIR = "CREATE_DIR", a.LIST_DIR = "LIST_DIR", a.DELETE_DIR = "DELETE_DIR", a.ERROR = "ERROR", a.DOWNLOAD = "DOWNLOAD", a.PROGRESS = "PROGRESS", a.LOG = "LOG", a.MOUNT = "MOUNT", a.UNMOUNT = "UNMOUNT";
})(Bl || (Bl = {}));
function f4(a, { autoplay: n }) {
  async function s() {
    n && await a.play();
  }
  return a.addEventListener("loadeddata", s), {
    destroy() {
      a.removeEventListener("loadeddata", s);
    }
  };
}
const {
  SvelteComponent: d4,
  action_destroyer: m4,
  add_render_callback: p4,
  assign: Nl,
  attr: N0,
  binding_callbacks: g4,
  create_slot: b4,
  detach: ks,
  element: Rl,
  exclude_internal_props: Il,
  get_all_dirty_from_scope: w4,
  get_slot_changes: y4,
  init: _4,
  insert: Ds,
  is_function: k4,
  listen: Ct,
  raf: D4,
  run_all: x4,
  safe_not_equal: v4,
  space: A4,
  src_url_equal: Ll,
  toggle_class: Ol,
  transition_in: S4,
  transition_out: E4,
  update_slot_base: F4
} = window.__gradio__svelte__internal, { createEventDispatcher: T4 } = window.__gradio__svelte__internal;
function C4(a) {
  let n, s, i, u, o, f = !1, p, b = !0, y, x, C, B;
  const q = (
    /*#slots*/
    a[16].default
  ), W = b4(
    q,
    a,
    /*$$scope*/
    a[15],
    null
  );
  function j() {
    cancelAnimationFrame(p), i.paused || (p = D4(j), f = !0), a[17].call(i);
  }
  return {
    c() {
      n = Rl("div"), n.innerHTML = '<span class="load-wrap svelte-1pwzuub"><span class="loader svelte-1pwzuub"></span></span>', s = A4(), i = Rl("video"), W && W.c(), N0(n, "class", "overlay svelte-1pwzuub"), Ol(n, "hidden", !/*processingVideo*/
      a[9]), Ll(i.src, u = /*resolved_src*/
      a[10]) || N0(i, "src", u), i.muted = /*muted*/
      a[4], i.playsInline = /*playsinline*/
      a[5], N0(
        i,
        "preload",
        /*preload*/
        a[6]
      ), i.autoplay = /*autoplay*/
      a[7], i.controls = /*controls*/
      a[8], N0(i, "data-testid", o = /*$$props*/
      a[12]["data-testid"]), N0(i, "crossorigin", "anonymous"), /*duration*/
      a[1] === void 0 && p4(() => (
        /*video_durationchange_handler*/
        a[18].call(i)
      ));
    },
    m(G, U) {
      Ds(G, n, U), Ds(G, s, U), Ds(G, i, U), W && W.m(i, null), a[20](i), x = !0, C || (B = [
        Ct(
          i,
          "loadeddata",
          /*dispatch*/
          a[11].bind(null, "loadeddata")
        ),
        Ct(
          i,
          "click",
          /*dispatch*/
          a[11].bind(null, "click")
        ),
        Ct(
          i,
          "play",
          /*dispatch*/
          a[11].bind(null, "play")
        ),
        Ct(
          i,
          "pause",
          /*dispatch*/
          a[11].bind(null, "pause")
        ),
        Ct(
          i,
          "ended",
          /*dispatch*/
          a[11].bind(null, "ended")
        ),
        Ct(
          i,
          "mouseover",
          /*dispatch*/
          a[11].bind(null, "mouseover")
        ),
        Ct(
          i,
          "mouseout",
          /*dispatch*/
          a[11].bind(null, "mouseout")
        ),
        Ct(
          i,
          "focus",
          /*dispatch*/
          a[11].bind(null, "focus")
        ),
        Ct(
          i,
          "blur",
          /*dispatch*/
          a[11].bind(null, "blur")
        ),
        Ct(i, "timeupdate", j),
        Ct(
          i,
          "durationchange",
          /*video_durationchange_handler*/
          a[18]
        ),
        Ct(
          i,
          "play",
          /*video_play_pause_handler*/
          a[19]
        ),
        Ct(
          i,
          "pause",
          /*video_play_pause_handler*/
          a[19]
        ),
        m4(y = f4.call(null, i, { autoplay: (
          /*autoplay*/
          a[7] ?? !1
        ) }))
      ], C = !0);
    },
    p(G, [U]) {
      (!x || U & /*processingVideo*/
      512) && Ol(n, "hidden", !/*processingVideo*/
      G[9]), W && W.p && (!x || U & /*$$scope*/
      32768) && F4(
        W,
        q,
        G,
        /*$$scope*/
        G[15],
        x ? y4(
          q,
          /*$$scope*/
          G[15],
          U,
          null
        ) : w4(
          /*$$scope*/
          G[15]
        ),
        null
      ), (!x || U & /*resolved_src*/
      1024 && !Ll(i.src, u = /*resolved_src*/
      G[10])) && N0(i, "src", u), (!x || U & /*muted*/
      16) && (i.muted = /*muted*/
      G[4]), (!x || U & /*playsinline*/
      32) && (i.playsInline = /*playsinline*/
      G[5]), (!x || U & /*preload*/
      64) && N0(
        i,
        "preload",
        /*preload*/
        G[6]
      ), (!x || U & /*autoplay*/
      128) && (i.autoplay = /*autoplay*/
      G[7]), (!x || U & /*controls*/
      256) && (i.controls = /*controls*/
      G[8]), (!x || U & /*$$props*/
      4096 && o !== (o = /*$$props*/
      G[12]["data-testid"])) && N0(i, "data-testid", o), !f && U & /*currentTime*/
      1 && !isNaN(
        /*currentTime*/
        G[0]
      ) && (i.currentTime = /*currentTime*/
      G[0]), f = !1, U & /*paused*/
      4 && b !== (b = /*paused*/
      G[2]) && i[b ? "pause" : "play"](), y && k4(y.update) && U & /*autoplay*/
      128 && y.update.call(null, { autoplay: (
        /*autoplay*/
        G[7] ?? !1
      ) });
    },
    i(G) {
      x || (S4(W, G), x = !0);
    },
    o(G) {
      E4(W, G), x = !1;
    },
    d(G) {
      G && (ks(n), ks(s), ks(i)), W && W.d(G), a[20](null), C = !1, x4(B);
    }
  };
}
function M4(a, n, s) {
  let { $$slots: i = {}, $$scope: u } = n, { src: o = void 0 } = n, { muted: f = void 0 } = n, { playsinline: p = void 0 } = n, { preload: b = void 0 } = n, { autoplay: y = void 0 } = n, { controls: x = void 0 } = n, { currentTime: C = void 0 } = n, { duration: B = void 0 } = n, { paused: q = void 0 } = n, { node: W = void 0 } = n, { processingVideo: j = !1 } = n, G, U;
  const A = T4();
  function S() {
    C = this.currentTime, s(0, C);
  }
  function M() {
    B = this.duration, s(1, B);
  }
  function I() {
    q = this.paused, s(2, q);
  }
  function O(H) {
    g4[H ? "unshift" : "push"](() => {
      W = H, s(3, W);
    });
  }
  return a.$$set = (H) => {
    s(12, n = Nl(Nl({}, n), Il(H))), "src" in H && s(13, o = H.src), "muted" in H && s(4, f = H.muted), "playsinline" in H && s(5, p = H.playsinline), "preload" in H && s(6, b = H.preload), "autoplay" in H && s(7, y = H.autoplay), "controls" in H && s(8, x = H.controls), "currentTime" in H && s(0, C = H.currentTime), "duration" in H && s(1, B = H.duration), "paused" in H && s(2, q = H.paused), "node" in H && s(3, W = H.node), "processingVideo" in H && s(9, j = H.processingVideo), "$$scope" in H && s(15, u = H.$$scope);
  }, a.$$.update = () => {
    if (a.$$.dirty & /*src, latest_src*/
    24576) {
      s(10, G = o), s(14, U = o);
      const H = o;
      Xs(H).then((J) => {
        U === H && s(10, G = J);
      });
    }
  }, n = Il(n), [
    C,
    B,
    q,
    W,
    f,
    p,
    b,
    y,
    x,
    j,
    G,
    A,
    n,
    o,
    U,
    u,
    i,
    S,
    M,
    I,
    O
  ];
}
class z4 extends d4 {
  constructor(n) {
    super(), _4(this, n, M4, C4, v4, {
      src: 13,
      muted: 4,
      playsinline: 5,
      preload: 6,
      autoplay: 7,
      controls: 8,
      currentTime: 0,
      duration: 1,
      paused: 2,
      node: 3,
      processingVideo: 9
    });
  }
}
/*! @license DOMPurify 3.1.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.3/LICENSE */
const {
  entries: lo,
  setPrototypeOf: ql,
  isFrozen: B4,
  getPrototypeOf: N4,
  getOwnPropertyDescriptor: R4
} = Object;
let {
  freeze: dt,
  seal: Vt,
  create: ao
} = Object, {
  apply: Os,
  construct: qs
} = typeof Reflect < "u" && Reflect;
dt || (dt = function(n) {
  return n;
});
Vt || (Vt = function(n) {
  return n;
});
Os || (Os = function(n, s, i) {
  return n.apply(s, i);
});
qs || (qs = function(n, s) {
  return new n(...s);
});
const lr = Dt(Array.prototype.forEach), Pl = Dt(Array.prototype.pop), _n = Dt(Array.prototype.push), gr = Dt(String.prototype.toLowerCase), xs = Dt(String.prototype.toString), Hl = Dt(String.prototype.match), kn = Dt(String.prototype.replace), I4 = Dt(String.prototype.indexOf), L4 = Dt(String.prototype.trim), $t = Dt(Object.prototype.hasOwnProperty), ft = Dt(RegExp.prototype.test), Dn = O4(TypeError), Ul = Dt(Number.isNaN);
function Dt(a) {
  return function(n) {
    for (var s = arguments.length, i = new Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++)
      i[u - 1] = arguments[u];
    return Os(a, n, i);
  };
}
function O4(a) {
  return function() {
    for (var n = arguments.length, s = new Array(n), i = 0; i < n; i++)
      s[i] = arguments[i];
    return qs(a, s);
  };
}
function we(a, n) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : gr;
  ql && ql(a, null);
  let i = n.length;
  for (; i--; ) {
    let u = n[i];
    if (typeof u == "string") {
      const o = s(u);
      o !== u && (B4(n) || (n[i] = o), u = o);
    }
    a[u] = !0;
  }
  return a;
}
function q4(a) {
  for (let n = 0; n < a.length; n++)
    $t(a, n) || (a[n] = null);
  return a;
}
function V0(a) {
  const n = ao(null);
  for (const [s, i] of lo(a))
    $t(a, s) && (Array.isArray(i) ? n[s] = q4(i) : i && typeof i == "object" && i.constructor === Object ? n[s] = V0(i) : n[s] = i);
  return n;
}
function ar(a, n) {
  for (; a !== null; ) {
    const i = R4(a, n);
    if (i) {
      if (i.get)
        return Dt(i.get);
      if (typeof i.value == "function")
        return Dt(i.value);
    }
    a = N4(a);
  }
  function s() {
    return null;
  }
  return s;
}
const Gl = dt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), vs = dt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), As = dt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), P4 = dt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ss = dt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), H4 = dt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Vl = dt(["#text"]), Wl = dt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Es = dt(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), jl = dt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), or = dt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), U4 = Vt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), G4 = Vt(/<%[\w\W]*|[\w\W]*%>/gm), V4 = Vt(/\${[\w\W]*}/gm), W4 = Vt(/^data-[\-\w.\u00B7-\uFFFF]/), j4 = Vt(/^aria-[\-\w]+$/), oo = Vt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), X4 = Vt(/^(?:\w+script|data):/i), Y4 = Vt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), uo = Vt(/^html$/i), Z4 = Vt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Xl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: U4,
  ERB_EXPR: G4,
  TMPLIT_EXPR: V4,
  DATA_ATTR: W4,
  ARIA_ATTR: j4,
  IS_ALLOWED_URI: oo,
  IS_SCRIPT_OR_DATA: X4,
  ATTR_WHITESPACE: Y4,
  DOCTYPE_NAME: uo,
  CUSTOM_ELEMENT: Z4
});
const G0 = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, K4 = function() {
  return typeof window > "u" ? null : window;
}, Q4 = function(n, s) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let i = null;
  const u = "data-tt-policy-suffix";
  s && s.hasAttribute(u) && (i = s.getAttribute(u));
  const o = "dompurify" + (i ? "#" + i : "");
  try {
    return n.createPolicy(o, {
      createHTML(f) {
        return f;
      },
      createScriptURL(f) {
        return f;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
};
function co() {
  let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : K4();
  const n = (re) => co(re);
  if (n.version = "3.1.3", n.removed = [], !a || !a.document || a.document.nodeType !== G0.document)
    return n.isSupported = !1, n;
  let {
    document: s
  } = a;
  const i = s, u = i.currentScript, {
    DocumentFragment: o,
    HTMLTemplateElement: f,
    Node: p,
    Element: b,
    NodeFilter: y,
    NamedNodeMap: x = a.NamedNodeMap || a.MozNamedAttrMap,
    HTMLFormElement: C,
    DOMParser: B,
    trustedTypes: q
  } = a, W = b.prototype, j = ar(W, "cloneNode"), G = ar(W, "nextSibling"), U = ar(W, "childNodes"), A = ar(W, "parentNode");
  if (typeof f == "function") {
    const re = s.createElement("template");
    re.content && re.content.ownerDocument && (s = re.content.ownerDocument);
  }
  let S, M = "";
  const {
    implementation: I,
    createNodeIterator: O,
    createDocumentFragment: H,
    getElementsByTagName: J
  } = s, {
    importNode: K
  } = i;
  let le = {};
  n.isSupported = typeof lo == "function" && typeof A == "function" && I && I.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: ce,
    ERB_EXPR: pe,
    TMPLIT_EXPR: ve,
    DATA_ATTR: Ie,
    ARIA_ATTR: ut,
    IS_SCRIPT_OR_DATA: st,
    ATTR_WHITESPACE: mt,
    CUSTOM_ELEMENT: Oe
  } = Xl;
  let {
    IS_ALLOWED_URI: $
  } = Xl, Fe = null;
  const V = we({}, [...Gl, ...vs, ...As, ...Ss, ...Vl]);
  let he = null;
  const Ke = we({}, [...Wl, ...Es, ...jl, ...or]);
  let be = Object.seal(ao(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), ie = null, at = null, pt = !0, gt = !0, m0 = !1, bt = !0, it = !1, p0 = !0, ct = !1, g0 = !1, xt = !1, vt = !1, K0 = !1, r0 = !1, At = !0, O0 = !1;
  const Nn = "user-content-";
  let un = !0, b0 = !1, s0 = {}, S0 = null;
  const Rn = we({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let cn = null;
  const hn = we({}, ["audio", "video", "img", "source", "image", "track"]);
  let St = null;
  const In = we({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), E0 = "http://www.w3.org/1998/Math/MathML", Q0 = "http://www.w3.org/2000/svg", Nt = "http://www.w3.org/1999/xhtml";
  let Ce = Nt, Q = !1, Rt = null;
  const Ln = we({}, [E0, Q0, Nt], xs);
  let F0 = null;
  const On = ["application/xhtml+xml", "text/html"], q0 = "text/html";
  let je = null, T0 = null;
  const qn = 255, wt = s.createElement("form"), It = function(z) {
    return z instanceof RegExp || z instanceof Function;
  }, Lt = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(T0 && T0 === z)) {
      if ((!z || typeof z != "object") && (z = {}), z = V0(z), F0 = // eslint-disable-next-line unicorn/prefer-includes
      On.indexOf(z.PARSER_MEDIA_TYPE) === -1 ? q0 : z.PARSER_MEDIA_TYPE, je = F0 === "application/xhtml+xml" ? xs : gr, Fe = $t(z, "ALLOWED_TAGS") ? we({}, z.ALLOWED_TAGS, je) : V, he = $t(z, "ALLOWED_ATTR") ? we({}, z.ALLOWED_ATTR, je) : Ke, Rt = $t(z, "ALLOWED_NAMESPACES") ? we({}, z.ALLOWED_NAMESPACES, xs) : Ln, St = $t(z, "ADD_URI_SAFE_ATTR") ? we(
        V0(In),
        // eslint-disable-line indent
        z.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        je
        // eslint-disable-line indent
      ) : In, cn = $t(z, "ADD_DATA_URI_TAGS") ? we(
        V0(hn),
        // eslint-disable-line indent
        z.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        je
        // eslint-disable-line indent
      ) : hn, S0 = $t(z, "FORBID_CONTENTS") ? we({}, z.FORBID_CONTENTS, je) : Rn, ie = $t(z, "FORBID_TAGS") ? we({}, z.FORBID_TAGS, je) : {}, at = $t(z, "FORBID_ATTR") ? we({}, z.FORBID_ATTR, je) : {}, s0 = $t(z, "USE_PROFILES") ? z.USE_PROFILES : !1, pt = z.ALLOW_ARIA_ATTR !== !1, gt = z.ALLOW_DATA_ATTR !== !1, m0 = z.ALLOW_UNKNOWN_PROTOCOLS || !1, bt = z.ALLOW_SELF_CLOSE_IN_ATTR !== !1, it = z.SAFE_FOR_TEMPLATES || !1, p0 = z.SAFE_FOR_XML !== !1, ct = z.WHOLE_DOCUMENT || !1, vt = z.RETURN_DOM || !1, K0 = z.RETURN_DOM_FRAGMENT || !1, r0 = z.RETURN_TRUSTED_TYPE || !1, xt = z.FORCE_BODY || !1, At = z.SANITIZE_DOM !== !1, O0 = z.SANITIZE_NAMED_PROPS || !1, un = z.KEEP_CONTENT !== !1, b0 = z.IN_PLACE || !1, $ = z.ALLOWED_URI_REGEXP || oo, Ce = z.NAMESPACE || Nt, be = z.CUSTOM_ELEMENT_HANDLING || {}, z.CUSTOM_ELEMENT_HANDLING && It(z.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (be.tagNameCheck = z.CUSTOM_ELEMENT_HANDLING.tagNameCheck), z.CUSTOM_ELEMENT_HANDLING && It(z.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (be.attributeNameCheck = z.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), z.CUSTOM_ELEMENT_HANDLING && typeof z.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (be.allowCustomizedBuiltInElements = z.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), it && (gt = !1), K0 && (vt = !0), s0 && (Fe = we({}, Vl), he = [], s0.html === !0 && (we(Fe, Gl), we(he, Wl)), s0.svg === !0 && (we(Fe, vs), we(he, Es), we(he, or)), s0.svgFilters === !0 && (we(Fe, As), we(he, Es), we(he, or)), s0.mathMl === !0 && (we(Fe, Ss), we(he, jl), we(he, or))), z.ADD_TAGS && (Fe === V && (Fe = V0(Fe)), we(Fe, z.ADD_TAGS, je)), z.ADD_ATTR && (he === Ke && (he = V0(he)), we(he, z.ADD_ATTR, je)), z.ADD_URI_SAFE_ATTR && we(St, z.ADD_URI_SAFE_ATTR, je), z.FORBID_CONTENTS && (S0 === Rn && (S0 = V0(S0)), we(S0, z.FORBID_CONTENTS, je)), un && (Fe["#text"] = !0), ct && we(Fe, ["html", "head", "body"]), Fe.table && (we(Fe, ["tbody"]), delete ie.tbody), z.TRUSTED_TYPES_POLICY) {
        if (typeof z.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Dn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof z.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Dn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        S = z.TRUSTED_TYPES_POLICY, M = S.createHTML("");
      } else
        S === void 0 && (S = Q4(q, u)), S !== null && typeof M == "string" && (M = S.createHTML(""));
      dt && dt(z), T0 = z;
    }
  }, J0 = we({}, ["mi", "mo", "mn", "ms", "mtext"]), fn = we({}, ["foreignobject", "annotation-xml"]), Nr = we({}, ["title", "style", "font", "a", "script"]), Pn = we({}, [...vs, ...As, ...P4]), Hn = we({}, [...Ss, ...H4]), $0 = function(z) {
    let D = A(z);
    (!D || !D.tagName) && (D = {
      namespaceURI: Ce,
      tagName: "template"
    });
    const ne = gr(z.tagName), F = gr(D.tagName);
    return Rt[z.namespaceURI] ? z.namespaceURI === Q0 ? D.namespaceURI === Nt ? ne === "svg" : D.namespaceURI === E0 ? ne === "svg" && (F === "annotation-xml" || J0[F]) : !!Pn[ne] : z.namespaceURI === E0 ? D.namespaceURI === Nt ? ne === "math" : D.namespaceURI === Q0 ? ne === "math" && fn[F] : !!Hn[ne] : z.namespaceURI === Nt ? D.namespaceURI === Q0 && !fn[F] || D.namespaceURI === E0 && !J0[F] ? !1 : !Hn[ne] && (Nr[ne] || !Pn[ne]) : !!(F0 === "application/xhtml+xml" && Rt[z.namespaceURI]) : !1;
  }, ye = function(z) {
    _n(n.removed, {
      element: z
    });
    try {
      z.parentNode.removeChild(z);
    } catch {
      z.remove();
    }
  }, h = function(z, D) {
    try {
      _n(n.removed, {
        attribute: D.getAttributeNode(z),
        from: D
      });
    } catch {
      _n(n.removed, {
        attribute: null,
        from: D
      });
    }
    if (D.removeAttribute(z), z === "is" && !he[z])
      if (vt || K0)
        try {
          ye(D);
        } catch {
        }
      else
        try {
          D.setAttribute(z, "");
        } catch {
        }
  }, d = function(z) {
    let D = null, ne = null;
    if (xt)
      z = "<remove></remove>" + z;
    else {
      const Qe = Hl(z, /^[\r\n\t ]+/);
      ne = Qe && Qe[0];
    }
    F0 === "application/xhtml+xml" && Ce === Nt && (z = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + z + "</body></html>");
    const F = S ? S.createHTML(z) : z;
    if (Ce === Nt)
      try {
        D = new B().parseFromString(F, F0);
      } catch {
      }
    if (!D || !D.documentElement) {
      D = I.createDocument(Ce, "template", null);
      try {
        D.documentElement.innerHTML = Q ? M : F;
      } catch {
      }
    }
    const Je = D.body || D.documentElement;
    return z && ne && Je.insertBefore(s.createTextNode(ne), Je.childNodes[0] || null), Ce === Nt ? J.call(D, ct ? "html" : "body")[0] : ct ? D.documentElement : Je;
  }, X = function(z) {
    return O.call(
      z.ownerDocument || z,
      z,
      // eslint-disable-next-line no-bitwise
      y.SHOW_ELEMENT | y.SHOW_COMMENT | y.SHOW_TEXT | y.SHOW_PROCESSING_INSTRUCTION | y.SHOW_CDATA_SECTION,
      null
    );
  }, w = function(z) {
    return z instanceof C && // eslint-disable-next-line unicorn/no-typeof-undefined
    (typeof z.__depth < "u" && typeof z.__depth != "number" || // eslint-disable-next-line unicorn/no-typeof-undefined
    typeof z.__removalCount < "u" && typeof z.__removalCount != "number" || typeof z.nodeName != "string" || typeof z.textContent != "string" || typeof z.removeChild != "function" || !(z.attributes instanceof x) || typeof z.removeAttribute != "function" || typeof z.setAttribute != "function" || typeof z.namespaceURI != "string" || typeof z.insertBefore != "function" || typeof z.hasChildNodes != "function");
  }, E = function(z) {
    return typeof p == "function" && z instanceof p;
  }, De = function(z, D, ne) {
    le[z] && lr(le[z], (F) => {
      F.call(n, D, ne, T0);
    });
  }, te = function(z) {
    let D = null;
    if (De("beforeSanitizeElements", z, null), w(z))
      return ye(z), !0;
    const ne = je(z.nodeName);
    if (De("uponSanitizeElement", z, {
      tagName: ne,
      allowedTags: Fe
    }), z.hasChildNodes() && !E(z.firstElementChild) && ft(/<[/\w]/g, z.innerHTML) && ft(/<[/\w]/g, z.textContent) || z.nodeType === G0.progressingInstruction || p0 && z.nodeType === G0.comment && ft(/<[/\w]/g, z.data))
      return ye(z), !0;
    if (!Fe[ne] || ie[ne]) {
      if (!ie[ne] && w0(ne) && (be.tagNameCheck instanceof RegExp && ft(be.tagNameCheck, ne) || be.tagNameCheck instanceof Function && be.tagNameCheck(ne)))
        return !1;
      if (un && !S0[ne]) {
        const F = A(z) || z.parentNode, Je = U(z) || z.childNodes;
        if (Je && F) {
          const Qe = Je.length;
          for (let ot = Qe - 1; ot >= 0; --ot) {
            const $e = j(Je[ot], !0);
            $e.__removalCount = (z.__removalCount || 0) + 1, F.insertBefore($e, G(z));
          }
        }
      }
      return ye(z), !0;
    }
    return z instanceof b && !$0(z) || (ne === "noscript" || ne === "noembed" || ne === "noframes") && ft(/<\/no(script|embed|frames)/i, z.innerHTML) ? (ye(z), !0) : (it && z.nodeType === G0.text && (D = z.textContent, lr([ce, pe, ve], (F) => {
      D = kn(D, F, " ");
    }), z.textContent !== D && (_n(n.removed, {
      element: z.cloneNode()
    }), z.textContent = D)), De("afterSanitizeElements", z, null), !1);
  }, lt = function(z, D, ne) {
    if (At && (D === "id" || D === "name") && (ne in s || ne in wt || ne === "__depth" || ne === "__removalCount"))
      return !1;
    if (!(gt && !at[D] && ft(Ie, D))) {
      if (!(pt && ft(ut, D))) {
        if (!he[D] || at[D]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(w0(z) && (be.tagNameCheck instanceof RegExp && ft(be.tagNameCheck, z) || be.tagNameCheck instanceof Function && be.tagNameCheck(z)) && (be.attributeNameCheck instanceof RegExp && ft(be.attributeNameCheck, D) || be.attributeNameCheck instanceof Function && be.attributeNameCheck(D)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            D === "is" && be.allowCustomizedBuiltInElements && (be.tagNameCheck instanceof RegExp && ft(be.tagNameCheck, ne) || be.tagNameCheck instanceof Function && be.tagNameCheck(ne)))
          )
            return !1;
        } else if (!St[D]) {
          if (!ft($, kn(ne, mt, ""))) {
            if (!((D === "src" || D === "xlink:href" || D === "href") && z !== "script" && I4(ne, "data:") === 0 && cn[z])) {
              if (!(m0 && !ft(st, kn(ne, mt, "")))) {
                if (ne)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, w0 = function(z) {
    return z !== "annotation-xml" && Hl(z, Oe);
  }, oe = function(z) {
    De("beforeSanitizeAttributes", z, null);
    const {
      attributes: D
    } = z;
    if (!D)
      return;
    const ne = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: he
    };
    let F = D.length;
    for (; F--; ) {
      const Je = D[F], {
        name: Qe,
        namespaceURI: ot,
        value: $e
      } = Je, ue = je(Qe);
      let et = Qe === "value" ? $e : L4($e);
      if (ne.attrName = ue, ne.attrValue = et, ne.keepAttr = !0, ne.forceKeepAttr = void 0, De("uponSanitizeAttribute", z, ne), et = ne.attrValue, ne.forceKeepAttr || (h(Qe, z), !ne.keepAttr))
        continue;
      if (!bt && ft(/\/>/i, et)) {
        h(Qe, z);
        continue;
      }
      if (p0 && ft(/((--!?|])>)|<\/(style|title)/i, et)) {
        h(Qe, z);
        continue;
      }
      it && lr([ce, pe, ve], (dn) => {
        et = kn(et, dn, " ");
      });
      const P0 = je(z.nodeName);
      if (lt(P0, ue, et)) {
        if (O0 && (ue === "id" || ue === "name") && (h(Qe, z), et = Nn + et), S && typeof q == "object" && typeof q.getAttributeType == "function" && !ot)
          switch (q.getAttributeType(P0, ue)) {
            case "TrustedHTML": {
              et = S.createHTML(et);
              break;
            }
            case "TrustedScriptURL": {
              et = S.createScriptURL(et);
              break;
            }
          }
        try {
          ot ? z.setAttributeNS(ot, Qe, et) : z.setAttribute(Qe, et), w(z) ? ye(z) : Pl(n.removed);
        } catch {
        }
      }
    }
    De("afterSanitizeAttributes", z, null);
  }, Xe = function re(z) {
    let D = null;
    const ne = X(z);
    for (De("beforeSanitizeShadowDOM", z, null); D = ne.nextNode(); ) {
      if (De("uponSanitizeShadowNode", D, null), te(D))
        continue;
      const F = A(D);
      D.nodeType === G0.element && (F && F.__depth ? D.__depth = (D.__removalCount || 0) + F.__depth + 1 : D.__depth = 1), (D.__depth >= qn || D.__depth < 0 || Ul(D.__depth)) && ye(D), D.content instanceof o && (D.content.__depth = D.__depth, re(D.content)), oe(D);
    }
    De("afterSanitizeShadowDOM", z, null);
  };
  return n.sanitize = function(re) {
    let z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, D = null, ne = null, F = null, Je = null;
    if (Q = !re, Q && (re = "<!-->"), typeof re != "string" && !E(re))
      if (typeof re.toString == "function") {
        if (re = re.toString(), typeof re != "string")
          throw Dn("dirty is not a string, aborting");
      } else
        throw Dn("toString is not a function");
    if (!n.isSupported)
      return re;
    if (g0 || Lt(z), n.removed = [], typeof re == "string" && (b0 = !1), b0) {
      if (re.nodeName) {
        const $e = je(re.nodeName);
        if (!Fe[$e] || ie[$e])
          throw Dn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (re instanceof p)
      D = d("<!---->"), ne = D.ownerDocument.importNode(re, !0), ne.nodeType === G0.element && ne.nodeName === "BODY" || ne.nodeName === "HTML" ? D = ne : D.appendChild(ne);
    else {
      if (!vt && !it && !ct && // eslint-disable-next-line unicorn/prefer-includes
      re.indexOf("<") === -1)
        return S && r0 ? S.createHTML(re) : re;
      if (D = d(re), !D)
        return vt ? null : r0 ? M : "";
    }
    D && xt && ye(D.firstChild);
    const Qe = X(b0 ? re : D);
    for (; F = Qe.nextNode(); ) {
      if (te(F))
        continue;
      const $e = A(F);
      F.nodeType === G0.element && ($e && $e.__depth ? F.__depth = (F.__removalCount || 0) + $e.__depth + 1 : F.__depth = 1), (F.__depth >= qn || F.__depth < 0 || Ul(F.__depth)) && ye(F), F.content instanceof o && (F.content.__depth = F.__depth, Xe(F.content)), oe(F);
    }
    if (b0)
      return re;
    if (vt) {
      if (K0)
        for (Je = H.call(D.ownerDocument); D.firstChild; )
          Je.appendChild(D.firstChild);
      else
        Je = D;
      return (he.shadowroot || he.shadowrootmode) && (Je = K.call(i, Je, !0)), Je;
    }
    let ot = ct ? D.outerHTML : D.innerHTML;
    return ct && Fe["!doctype"] && D.ownerDocument && D.ownerDocument.doctype && D.ownerDocument.doctype.name && ft(uo, D.ownerDocument.doctype.name) && (ot = "<!DOCTYPE " + D.ownerDocument.doctype.name + `>
` + ot), it && lr([ce, pe, ve], ($e) => {
      ot = kn(ot, $e, " ");
    }), S && r0 ? S.createHTML(ot) : ot;
  }, n.setConfig = function() {
    let re = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Lt(re), g0 = !0;
  }, n.clearConfig = function() {
    T0 = null, g0 = !1;
  }, n.isValidAttribute = function(re, z, D) {
    T0 || Lt({});
    const ne = je(re), F = je(z);
    return lt(ne, F, D);
  }, n.addHook = function(re, z) {
    typeof z == "function" && (le[re] = le[re] || [], _n(le[re], z));
  }, n.removeHook = function(re) {
    if (le[re])
      return Pl(le[re]);
  }, n.removeHooks = function(re) {
    le[re] && (le[re] = []);
  }, n.removeAllHooks = function() {
    le = {};
  }, n;
}
var Yl = co(), Dr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ho(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var fo = { exports: {} }, Fs = { exports: {} }, Zl;
function J4() {
  return Zl || (Zl = 1, function(a, n) {
    (function(i, u) {
      a.exports = u();
    })(typeof self < "u" ? self : Dr, function() {
      return (
        /******/
        function() {
          var s = {};
          (function() {
            s.d = function(t, e) {
              for (var r in e)
                s.o(e, r) && !s.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
            };
          })(), function() {
            s.o = function(t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            };
          }();
          var i = {};
          s.d(i, {
            default: function() {
              return (
                /* binding */
                Ju
              );
            }
          });
          class u {
            // Error start position based on passed-in Token or ParseNode.
            // Length of affected text based on passed-in Token or ParseNode.
            // The underlying error message without any context added.
            constructor(e, r) {
              this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
              let l = "KaTeX parse error: " + e, c, m;
              const g = r && r.loc;
              if (g && g.start <= g.end) {
                const v = g.lexer.input;
                c = g.start, m = g.end, c === v.length ? l += " at end of input: " : l += " at position " + (c + 1) + ": ";
                const T = v.slice(c, m).replace(/[^]/g, "$&̲");
                let N;
                c > 15 ? N = "…" + v.slice(c - 15, c) : N = v.slice(0, c);
                let R;
                m + 15 < v.length ? R = v.slice(m, m + 15) + "…" : R = v.slice(m), l += N + T + R;
              }
              const _ = new Error(l);
              return _.name = "ParseError", _.__proto__ = u.prototype, _.position = c, c != null && m != null && (_.length = m - c), _.rawMessage = e, _;
            }
          }
          u.prototype.__proto__ = Error.prototype;
          var o = u;
          const f = function(t, e) {
            return t.indexOf(e) !== -1;
          }, p = function(t, e) {
            return t === void 0 ? e : t;
          }, b = /([A-Z])/g, y = function(t) {
            return t.replace(b, "-$1").toLowerCase();
          }, x = {
            "&": "&amp;",
            ">": "&gt;",
            "<": "&lt;",
            '"': "&quot;",
            "'": "&#x27;"
          }, C = /[&><"']/g;
          function B(t) {
            return String(t).replace(C, (e) => x[e]);
          }
          const q = function(t) {
            return t.type === "ordgroup" || t.type === "color" ? t.body.length === 1 ? q(t.body[0]) : t : t.type === "font" ? q(t.body) : t;
          }, W = function(t) {
            const e = q(t);
            return e.type === "mathord" || e.type === "textord" || e.type === "atom";
          }, j = function(t) {
            if (!t)
              throw new Error("Expected non-null, but got " + String(t));
            return t;
          };
          var U = {
            contains: f,
            deflt: p,
            escape: B,
            hyphenate: y,
            getBaseElem: q,
            isCharacterBox: W,
            protocolFromUrl: function(t) {
              const e = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(t);
              return e ? e[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1]) ? null : e[1].toLowerCase() : "_relative";
            }
          };
          const A = {
            displayMode: {
              type: "boolean",
              description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
              cli: "-d, --display-mode"
            },
            output: {
              type: {
                enum: ["htmlAndMathml", "html", "mathml"]
              },
              description: "Determines the markup language of the output.",
              cli: "-F, --format <type>"
            },
            leqno: {
              type: "boolean",
              description: "Render display math in leqno style (left-justified tags)."
            },
            fleqn: {
              type: "boolean",
              description: "Render display math flush left."
            },
            throwOnError: {
              type: "boolean",
              default: !0,
              cli: "-t, --no-throw-on-error",
              cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
            },
            errorColor: {
              type: "string",
              default: "#cc0000",
              cli: "-c, --error-color <color>",
              cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
              cliProcessor: (t) => "#" + t
            },
            macros: {
              type: "object",
              cli: "-m, --macro <def>",
              cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
              cliDefault: [],
              cliProcessor: (t, e) => (e.push(t), e)
            },
            minRuleThickness: {
              type: "number",
              description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
              processor: (t) => Math.max(0, t),
              cli: "--min-rule-thickness <size>",
              cliProcessor: parseFloat
            },
            colorIsTextColor: {
              type: "boolean",
              description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
              cli: "-b, --color-is-text-color"
            },
            strict: {
              type: [{
                enum: ["warn", "ignore", "error"]
              }, "boolean", "function"],
              description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
              cli: "-S, --strict",
              cliDefault: !1
            },
            trust: {
              type: ["boolean", "function"],
              description: "Trust the input, enabling all HTML features such as \\url.",
              cli: "-T, --trust"
            },
            maxSize: {
              type: "number",
              default: 1 / 0,
              description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
              processor: (t) => Math.max(0, t),
              cli: "-s, --max-size <n>",
              cliProcessor: parseInt
            },
            maxExpand: {
              type: "number",
              default: 1e3,
              description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
              processor: (t) => Math.max(0, t),
              cli: "-e, --max-expand <n>",
              cliProcessor: (t) => t === "Infinity" ? 1 / 0 : parseInt(t)
            },
            globalGroup: {
              type: "boolean",
              cli: !1
            }
          };
          function S(t) {
            if (t.default)
              return t.default;
            const e = t.type, r = Array.isArray(e) ? e[0] : e;
            if (typeof r != "string")
              return r.enum[0];
            switch (r) {
              case "boolean":
                return !1;
              case "string":
                return "";
              case "number":
                return 0;
              case "object":
                return {};
            }
          }
          class M {
            constructor(e) {
              this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
              for (const r in A)
                if (A.hasOwnProperty(r)) {
                  const l = A[r];
                  this[r] = e[r] !== void 0 ? l.processor ? l.processor(e[r]) : e[r] : S(l);
                }
            }
            /**
             * Report nonstrict (non-LaTeX-compatible) input.
             * Can safely not be called if `this.strict` is false in JavaScript.
             */
            reportNonstrict(e, r, l) {
              let c = this.strict;
              if (typeof c == "function" && (c = c(e, r, l)), !(!c || c === "ignore")) {
                if (c === !0 || c === "error")
                  throw new o("LaTeX-incompatible input and strict mode is set to 'error': " + (r + " [" + e + "]"), l);
                c === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (r + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + c + "': " + r + " [" + e + "]"));
              }
            }
            /**
             * Check whether to apply strict (LaTeX-adhering) behavior for unusual
             * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
             * instead, "error" translates to a return value of `true`, while "ignore"
             * translates to a return value of `false`.  May still print a warning:
             * "warn" prints a warning and returns `false`.
             * This is for the second category of `errorCode`s listed in the README.
             */
            useStrictBehavior(e, r, l) {
              let c = this.strict;
              if (typeof c == "function")
                try {
                  c = c(e, r, l);
                } catch {
                  c = "error";
                }
              return !c || c === "ignore" ? !1 : c === !0 || c === "error" ? !0 : c === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (r + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + c + "': " + r + " [" + e + "]")), !1);
            }
            /**
             * Check whether to test potentially dangerous input, and return
             * `true` (trusted) or `false` (untrusted).  The sole argument `context`
             * should be an object with `command` field specifying the relevant LaTeX
             * command (as a string starting with `\`), and any other arguments, etc.
             * If `context` has a `url` field, a `protocol` field will automatically
             * get added by this function (changing the specified object).
             */
            isTrusted(e) {
              if (e.url && !e.protocol) {
                const l = U.protocolFromUrl(e.url);
                if (l == null)
                  return !1;
                e.protocol = l;
              }
              return !!(typeof this.trust == "function" ? this.trust(e) : this.trust);
            }
          }
          class I {
            constructor(e, r, l) {
              this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = r, this.cramped = l;
            }
            /**
             * Get the style of a superscript given a base in the current style.
             */
            sup() {
              return Ie[ut[this.id]];
            }
            /**
             * Get the style of a subscript given a base in the current style.
             */
            sub() {
              return Ie[st[this.id]];
            }
            /**
             * Get the style of a fraction numerator given the fraction in the current
             * style.
             */
            fracNum() {
              return Ie[mt[this.id]];
            }
            /**
             * Get the style of a fraction denominator given the fraction in the current
             * style.
             */
            fracDen() {
              return Ie[Oe[this.id]];
            }
            /**
             * Get the cramped version of a style (in particular, cramping a cramped style
             * doesn't change the style).
             */
            cramp() {
              return Ie[$[this.id]];
            }
            /**
             * Get a text or display version of this style.
             */
            text() {
              return Ie[Fe[this.id]];
            }
            /**
             * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
             */
            isTight() {
              return this.size >= 2;
            }
          }
          const O = 0, H = 1, J = 2, K = 3, le = 4, ce = 5, pe = 6, ve = 7, Ie = [new I(O, 0, !1), new I(H, 0, !0), new I(J, 1, !1), new I(K, 1, !0), new I(le, 2, !1), new I(ce, 2, !0), new I(pe, 3, !1), new I(ve, 3, !0)], ut = [le, ce, le, ce, pe, ve, pe, ve], st = [ce, ce, ce, ce, ve, ve, ve, ve], mt = [J, K, le, ce, pe, ve, pe, ve], Oe = [K, K, ce, ce, ve, ve, ve, ve], $ = [H, H, K, K, ce, ce, ve, ve], Fe = [O, H, J, K, J, K, J, K];
          var V = {
            DISPLAY: Ie[O],
            TEXT: Ie[J],
            SCRIPT: Ie[le],
            SCRIPTSCRIPT: Ie[pe]
          };
          const he = [{
            // Latin characters beyond the Latin-1 characters we have metrics for.
            // Needed for Czech, Hungarian and Turkish text, for example.
            name: "latin",
            blocks: [
              [256, 591],
              // Latin Extended-A and Latin Extended-B
              [768, 879]
              // Combining Diacritical marks
            ]
          }, {
            // The Cyrillic script used by Russian and related languages.
            // A Cyrillic subset used to be supported as explicitly defined
            // symbols in symbols.js
            name: "cyrillic",
            blocks: [[1024, 1279]]
          }, {
            // Armenian
            name: "armenian",
            blocks: [[1328, 1423]]
          }, {
            // The Brahmic scripts of South and Southeast Asia
            // Devanagari (0900–097F)
            // Bengali (0980–09FF)
            // Gurmukhi (0A00–0A7F)
            // Gujarati (0A80–0AFF)
            // Oriya (0B00–0B7F)
            // Tamil (0B80–0BFF)
            // Telugu (0C00–0C7F)
            // Kannada (0C80–0CFF)
            // Malayalam (0D00–0D7F)
            // Sinhala (0D80–0DFF)
            // Thai (0E00–0E7F)
            // Lao (0E80–0EFF)
            // Tibetan (0F00–0FFF)
            // Myanmar (1000–109F)
            name: "brahmic",
            blocks: [[2304, 4255]]
          }, {
            name: "georgian",
            blocks: [[4256, 4351]]
          }, {
            // Chinese and Japanese.
            // The "k" in cjk is for Korean, but we've separated Korean out
            name: "cjk",
            blocks: [
              [12288, 12543],
              // CJK symbols and punctuation, Hiragana, Katakana
              [19968, 40879],
              // CJK ideograms
              [65280, 65376]
              // Fullwidth punctuation
              // TODO: add halfwidth Katakana and Romanji glyphs
            ]
          }, {
            // Korean
            name: "hangul",
            blocks: [[44032, 55215]]
          }];
          function Ke(t) {
            for (let e = 0; e < he.length; e++) {
              const r = he[e];
              for (let l = 0; l < r.blocks.length; l++) {
                const c = r.blocks[l];
                if (t >= c[0] && t <= c[1])
                  return r.name;
              }
            }
            return null;
          }
          const be = [];
          he.forEach((t) => t.blocks.forEach((e) => be.push(...e)));
          function ie(t) {
            for (let e = 0; e < be.length; e += 2)
              if (t >= be[e] && t <= be[e + 1])
                return !0;
            return !1;
          }
          const at = 80, pt = function(t, e) {
            return "M95," + (622 + t + e) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + t / 2.075 + " -" + t + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + t) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z";
          }, gt = function(t, e) {
            return "M263," + (601 + t + e) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + t / 2.084 + " -" + t + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + t) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z";
          }, m0 = function(t, e) {
            return "M983 " + (10 + t + e) + `
l` + t / 3.13 + " -" + t + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + t) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + t) + " " + e + "h400000v" + (40 + t) + "h-400000z";
          }, bt = function(t, e) {
            return "M424," + (2398 + t + e) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + t / 4.223 + " -" + t + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + t) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + t) + " " + e + `
h400000v` + (40 + t) + "h-400000z";
          }, it = function(t, e) {
            return "M473," + (2713 + t + e) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + t / 5.298 + " -" + t + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + t) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + t) + " " + e + "h400000v" + (40 + t) + "H1017.7z";
          }, p0 = function(t) {
            const e = t / 2;
            return "M400000 " + t + " H0 L" + e + " 0 l65 45 L145 " + (t - 80) + " H400000z";
          }, ct = function(t, e, r) {
            const l = r - 54 - e - t;
            return "M702 " + (t + e) + "H400000" + (40 + t) + `
H742v` + l + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + e + "H400000v" + (40 + t) + "H742z";
          }, g0 = function(t, e, r) {
            e = 1e3 * e;
            let l = "";
            switch (t) {
              case "sqrtMain":
                l = pt(e, at);
                break;
              case "sqrtSize1":
                l = gt(e, at);
                break;
              case "sqrtSize2":
                l = m0(e, at);
                break;
              case "sqrtSize3":
                l = bt(e, at);
                break;
              case "sqrtSize4":
                l = it(e, at);
                break;
              case "sqrtTall":
                l = ct(e, at, r);
            }
            return l;
          }, xt = function(t, e) {
            switch (t) {
              case "⎜":
                return "M291 0 H417 V" + e + " H291z M291 0 H417 V" + e + " H291z";
              case "∣":
                return "M145 0 H188 V" + e + " H145z M145 0 H188 V" + e + " H145z";
              case "∥":
                return "M145 0 H188 V" + e + " H145z M145 0 H188 V" + e + " H145z" + ("M367 0 H410 V" + e + " H367z M367 0 H410 V" + e + " H367z");
              case "⎟":
                return "M457 0 H583 V" + e + " H457z M457 0 H583 V" + e + " H457z";
              case "⎢":
                return "M319 0 H403 V" + e + " H319z M319 0 H403 V" + e + " H319z";
              case "⎥":
                return "M263 0 H347 V" + e + " H263z M263 0 H347 V" + e + " H263z";
              case "⎪":
                return "M384 0 H504 V" + e + " H384z M384 0 H504 V" + e + " H384z";
              case "⏐":
                return "M312 0 H355 V" + e + " H312z M312 0 H355 V" + e + " H312z";
              case "‖":
                return "M257 0 H300 V" + e + " H257z M257 0 H300 V" + e + " H257z" + ("M478 0 H521 V" + e + " H478z M478 0 H521 V" + e + " H478z");
              default:
                return "";
            }
          }, vt = {
            // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
            doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
            // doublerightarrow is from glyph U+21D2 in font KaTeX Main
            doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
            // leftarrow is from glyph U+2190 in font KaTeX Main
            leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
            // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
            leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
            leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
            // overgroup is from the MnSymbol package (public domain)
            leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
            leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
            // Harpoons are from glyph U+21BD in font KaTeX Main
            leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
            leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
            leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
            leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
            // hook is from glyph U+21A9 in font KaTeX Main
            lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
            leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
            leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
            // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
            leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
            longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
            midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
            midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
            oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
            oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
            oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
            oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
            rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
            rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
            rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
            rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
            rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
            rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
            rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
            rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
            rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
            righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
            rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
            rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
            // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
            twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
            twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
            // tilde1 is a modified version of a glyph from the MnSymbol package
            tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
            // ditto tilde2, tilde3, & tilde4
            tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
            tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
            tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
            // vec is from glyph U+20D7 in font KaTeX Main
            vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
            // widehat1 is a modified version of a glyph from the MnSymbol package
            widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
            // ditto widehat2, widehat3, & widehat4
            widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
            widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
            widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
            // widecheck paths are all inverted versions of widehat
            widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
            widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
            widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
            widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
            // The next ten paths support reaction arrows from the mhchem package.
            // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
            // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
            baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
            // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
            rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
            // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
            // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
            baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
            rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
            shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
            shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
          }, K0 = function(t, e) {
            switch (t) {
              case "lbrack":
                return "M403 1759 V84 H666 V0 H319 V1759 v" + e + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + e + " v1759 h84z";
              case "rbrack":
                return "M347 1759 V0 H0 V84 H263 V1759 v" + e + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + e + " v1759 h84z";
              case "vert":
                return "M145 15 v585 v" + e + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -e + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + e + " v585 h43z";
              case "doublevert":
                return "M145 15 v585 v" + e + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -e + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + e + ` v585 h43z
M367 15 v585 v` + e + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -e + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + e + " v585 h43z";
              case "lfloor":
                return "M319 602 V0 H403 V602 v" + e + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + e + " v1715 H319z";
              case "rfloor":
                return "M319 602 V0 H403 V602 v" + e + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + e + " v1715 H319z";
              case "lceil":
                return "M403 1759 V84 H666 V0 H319 V1759 v" + e + ` v602 h84z
M403 1759 V0 H319 V1759 v` + e + " v602 h84z";
              case "rceil":
                return "M347 1759 V0 H0 V84 H263 V1759 v" + e + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + e + " v602 h84z";
              case "lparen":
                return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (e + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (e + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
              case "rparen":
                return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (e + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (e + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
              default:
                throw new Error("Unknown stretchy delimiter.");
            }
          };
          class r0 {
            // HtmlDomNode
            // Never used; needed for satisfying interface.
            constructor(e) {
              this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
            }
            hasClass(e) {
              return U.contains(this.classes, e);
            }
            /** Convert the fragment into a node. */
            toNode() {
              const e = document.createDocumentFragment();
              for (let r = 0; r < this.children.length; r++)
                e.appendChild(this.children[r].toNode());
              return e;
            }
            /** Convert the fragment into HTML markup. */
            toMarkup() {
              let e = "";
              for (let r = 0; r < this.children.length; r++)
                e += this.children[r].toMarkup();
              return e;
            }
            /**
             * Converts the math node into a string, similar to innerText. Applies to
             * MathDomNode's only.
             */
            toText() {
              const e = (r) => r.toText();
              return this.children.map(e).join("");
            }
          }
          var At = {
            "AMS-Regular": {
              32: [0, 0, 0, 0, 0.25],
              65: [0, 0.68889, 0, 0, 0.72222],
              66: [0, 0.68889, 0, 0, 0.66667],
              67: [0, 0.68889, 0, 0, 0.72222],
              68: [0, 0.68889, 0, 0, 0.72222],
              69: [0, 0.68889, 0, 0, 0.66667],
              70: [0, 0.68889, 0, 0, 0.61111],
              71: [0, 0.68889, 0, 0, 0.77778],
              72: [0, 0.68889, 0, 0, 0.77778],
              73: [0, 0.68889, 0, 0, 0.38889],
              74: [0.16667, 0.68889, 0, 0, 0.5],
              75: [0, 0.68889, 0, 0, 0.77778],
              76: [0, 0.68889, 0, 0, 0.66667],
              77: [0, 0.68889, 0, 0, 0.94445],
              78: [0, 0.68889, 0, 0, 0.72222],
              79: [0.16667, 0.68889, 0, 0, 0.77778],
              80: [0, 0.68889, 0, 0, 0.61111],
              81: [0.16667, 0.68889, 0, 0, 0.77778],
              82: [0, 0.68889, 0, 0, 0.72222],
              83: [0, 0.68889, 0, 0, 0.55556],
              84: [0, 0.68889, 0, 0, 0.66667],
              85: [0, 0.68889, 0, 0, 0.72222],
              86: [0, 0.68889, 0, 0, 0.72222],
              87: [0, 0.68889, 0, 0, 1],
              88: [0, 0.68889, 0, 0, 0.72222],
              89: [0, 0.68889, 0, 0, 0.72222],
              90: [0, 0.68889, 0, 0, 0.66667],
              107: [0, 0.68889, 0, 0, 0.55556],
              160: [0, 0, 0, 0, 0.25],
              165: [0, 0.675, 0.025, 0, 0.75],
              174: [0.15559, 0.69224, 0, 0, 0.94666],
              240: [0, 0.68889, 0, 0, 0.55556],
              295: [0, 0.68889, 0, 0, 0.54028],
              710: [0, 0.825, 0, 0, 2.33334],
              732: [0, 0.9, 0, 0, 2.33334],
              770: [0, 0.825, 0, 0, 2.33334],
              771: [0, 0.9, 0, 0, 2.33334],
              989: [0.08167, 0.58167, 0, 0, 0.77778],
              1008: [0, 0.43056, 0.04028, 0, 0.66667],
              8245: [0, 0.54986, 0, 0, 0.275],
              8463: [0, 0.68889, 0, 0, 0.54028],
              8487: [0, 0.68889, 0, 0, 0.72222],
              8498: [0, 0.68889, 0, 0, 0.55556],
              8502: [0, 0.68889, 0, 0, 0.66667],
              8503: [0, 0.68889, 0, 0, 0.44445],
              8504: [0, 0.68889, 0, 0, 0.66667],
              8513: [0, 0.68889, 0, 0, 0.63889],
              8592: [-0.03598, 0.46402, 0, 0, 0.5],
              8594: [-0.03598, 0.46402, 0, 0, 0.5],
              8602: [-0.13313, 0.36687, 0, 0, 1],
              8603: [-0.13313, 0.36687, 0, 0, 1],
              8606: [0.01354, 0.52239, 0, 0, 1],
              8608: [0.01354, 0.52239, 0, 0, 1],
              8610: [0.01354, 0.52239, 0, 0, 1.11111],
              8611: [0.01354, 0.52239, 0, 0, 1.11111],
              8619: [0, 0.54986, 0, 0, 1],
              8620: [0, 0.54986, 0, 0, 1],
              8621: [-0.13313, 0.37788, 0, 0, 1.38889],
              8622: [-0.13313, 0.36687, 0, 0, 1],
              8624: [0, 0.69224, 0, 0, 0.5],
              8625: [0, 0.69224, 0, 0, 0.5],
              8630: [0, 0.43056, 0, 0, 1],
              8631: [0, 0.43056, 0, 0, 1],
              8634: [0.08198, 0.58198, 0, 0, 0.77778],
              8635: [0.08198, 0.58198, 0, 0, 0.77778],
              8638: [0.19444, 0.69224, 0, 0, 0.41667],
              8639: [0.19444, 0.69224, 0, 0, 0.41667],
              8642: [0.19444, 0.69224, 0, 0, 0.41667],
              8643: [0.19444, 0.69224, 0, 0, 0.41667],
              8644: [0.1808, 0.675, 0, 0, 1],
              8646: [0.1808, 0.675, 0, 0, 1],
              8647: [0.1808, 0.675, 0, 0, 1],
              8648: [0.19444, 0.69224, 0, 0, 0.83334],
              8649: [0.1808, 0.675, 0, 0, 1],
              8650: [0.19444, 0.69224, 0, 0, 0.83334],
              8651: [0.01354, 0.52239, 0, 0, 1],
              8652: [0.01354, 0.52239, 0, 0, 1],
              8653: [-0.13313, 0.36687, 0, 0, 1],
              8654: [-0.13313, 0.36687, 0, 0, 1],
              8655: [-0.13313, 0.36687, 0, 0, 1],
              8666: [0.13667, 0.63667, 0, 0, 1],
              8667: [0.13667, 0.63667, 0, 0, 1],
              8669: [-0.13313, 0.37788, 0, 0, 1],
              8672: [-0.064, 0.437, 0, 0, 1.334],
              8674: [-0.064, 0.437, 0, 0, 1.334],
              8705: [0, 0.825, 0, 0, 0.5],
              8708: [0, 0.68889, 0, 0, 0.55556],
              8709: [0.08167, 0.58167, 0, 0, 0.77778],
              8717: [0, 0.43056, 0, 0, 0.42917],
              8722: [-0.03598, 0.46402, 0, 0, 0.5],
              8724: [0.08198, 0.69224, 0, 0, 0.77778],
              8726: [0.08167, 0.58167, 0, 0, 0.77778],
              8733: [0, 0.69224, 0, 0, 0.77778],
              8736: [0, 0.69224, 0, 0, 0.72222],
              8737: [0, 0.69224, 0, 0, 0.72222],
              8738: [0.03517, 0.52239, 0, 0, 0.72222],
              8739: [0.08167, 0.58167, 0, 0, 0.22222],
              8740: [0.25142, 0.74111, 0, 0, 0.27778],
              8741: [0.08167, 0.58167, 0, 0, 0.38889],
              8742: [0.25142, 0.74111, 0, 0, 0.5],
              8756: [0, 0.69224, 0, 0, 0.66667],
              8757: [0, 0.69224, 0, 0, 0.66667],
              8764: [-0.13313, 0.36687, 0, 0, 0.77778],
              8765: [-0.13313, 0.37788, 0, 0, 0.77778],
              8769: [-0.13313, 0.36687, 0, 0, 0.77778],
              8770: [-0.03625, 0.46375, 0, 0, 0.77778],
              8774: [0.30274, 0.79383, 0, 0, 0.77778],
              8776: [-0.01688, 0.48312, 0, 0, 0.77778],
              8778: [0.08167, 0.58167, 0, 0, 0.77778],
              8782: [0.06062, 0.54986, 0, 0, 0.77778],
              8783: [0.06062, 0.54986, 0, 0, 0.77778],
              8785: [0.08198, 0.58198, 0, 0, 0.77778],
              8786: [0.08198, 0.58198, 0, 0, 0.77778],
              8787: [0.08198, 0.58198, 0, 0, 0.77778],
              8790: [0, 0.69224, 0, 0, 0.77778],
              8791: [0.22958, 0.72958, 0, 0, 0.77778],
              8796: [0.08198, 0.91667, 0, 0, 0.77778],
              8806: [0.25583, 0.75583, 0, 0, 0.77778],
              8807: [0.25583, 0.75583, 0, 0, 0.77778],
              8808: [0.25142, 0.75726, 0, 0, 0.77778],
              8809: [0.25142, 0.75726, 0, 0, 0.77778],
              8812: [0.25583, 0.75583, 0, 0, 0.5],
              8814: [0.20576, 0.70576, 0, 0, 0.77778],
              8815: [0.20576, 0.70576, 0, 0, 0.77778],
              8816: [0.30274, 0.79383, 0, 0, 0.77778],
              8817: [0.30274, 0.79383, 0, 0, 0.77778],
              8818: [0.22958, 0.72958, 0, 0, 0.77778],
              8819: [0.22958, 0.72958, 0, 0, 0.77778],
              8822: [0.1808, 0.675, 0, 0, 0.77778],
              8823: [0.1808, 0.675, 0, 0, 0.77778],
              8828: [0.13667, 0.63667, 0, 0, 0.77778],
              8829: [0.13667, 0.63667, 0, 0, 0.77778],
              8830: [0.22958, 0.72958, 0, 0, 0.77778],
              8831: [0.22958, 0.72958, 0, 0, 0.77778],
              8832: [0.20576, 0.70576, 0, 0, 0.77778],
              8833: [0.20576, 0.70576, 0, 0, 0.77778],
              8840: [0.30274, 0.79383, 0, 0, 0.77778],
              8841: [0.30274, 0.79383, 0, 0, 0.77778],
              8842: [0.13597, 0.63597, 0, 0, 0.77778],
              8843: [0.13597, 0.63597, 0, 0, 0.77778],
              8847: [0.03517, 0.54986, 0, 0, 0.77778],
              8848: [0.03517, 0.54986, 0, 0, 0.77778],
              8858: [0.08198, 0.58198, 0, 0, 0.77778],
              8859: [0.08198, 0.58198, 0, 0, 0.77778],
              8861: [0.08198, 0.58198, 0, 0, 0.77778],
              8862: [0, 0.675, 0, 0, 0.77778],
              8863: [0, 0.675, 0, 0, 0.77778],
              8864: [0, 0.675, 0, 0, 0.77778],
              8865: [0, 0.675, 0, 0, 0.77778],
              8872: [0, 0.69224, 0, 0, 0.61111],
              8873: [0, 0.69224, 0, 0, 0.72222],
              8874: [0, 0.69224, 0, 0, 0.88889],
              8876: [0, 0.68889, 0, 0, 0.61111],
              8877: [0, 0.68889, 0, 0, 0.61111],
              8878: [0, 0.68889, 0, 0, 0.72222],
              8879: [0, 0.68889, 0, 0, 0.72222],
              8882: [0.03517, 0.54986, 0, 0, 0.77778],
              8883: [0.03517, 0.54986, 0, 0, 0.77778],
              8884: [0.13667, 0.63667, 0, 0, 0.77778],
              8885: [0.13667, 0.63667, 0, 0, 0.77778],
              8888: [0, 0.54986, 0, 0, 1.11111],
              8890: [0.19444, 0.43056, 0, 0, 0.55556],
              8891: [0.19444, 0.69224, 0, 0, 0.61111],
              8892: [0.19444, 0.69224, 0, 0, 0.61111],
              8901: [0, 0.54986, 0, 0, 0.27778],
              8903: [0.08167, 0.58167, 0, 0, 0.77778],
              8905: [0.08167, 0.58167, 0, 0, 0.77778],
              8906: [0.08167, 0.58167, 0, 0, 0.77778],
              8907: [0, 0.69224, 0, 0, 0.77778],
              8908: [0, 0.69224, 0, 0, 0.77778],
              8909: [-0.03598, 0.46402, 0, 0, 0.77778],
              8910: [0, 0.54986, 0, 0, 0.76042],
              8911: [0, 0.54986, 0, 0, 0.76042],
              8912: [0.03517, 0.54986, 0, 0, 0.77778],
              8913: [0.03517, 0.54986, 0, 0, 0.77778],
              8914: [0, 0.54986, 0, 0, 0.66667],
              8915: [0, 0.54986, 0, 0, 0.66667],
              8916: [0, 0.69224, 0, 0, 0.66667],
              8918: [0.0391, 0.5391, 0, 0, 0.77778],
              8919: [0.0391, 0.5391, 0, 0, 0.77778],
              8920: [0.03517, 0.54986, 0, 0, 1.33334],
              8921: [0.03517, 0.54986, 0, 0, 1.33334],
              8922: [0.38569, 0.88569, 0, 0, 0.77778],
              8923: [0.38569, 0.88569, 0, 0, 0.77778],
              8926: [0.13667, 0.63667, 0, 0, 0.77778],
              8927: [0.13667, 0.63667, 0, 0, 0.77778],
              8928: [0.30274, 0.79383, 0, 0, 0.77778],
              8929: [0.30274, 0.79383, 0, 0, 0.77778],
              8934: [0.23222, 0.74111, 0, 0, 0.77778],
              8935: [0.23222, 0.74111, 0, 0, 0.77778],
              8936: [0.23222, 0.74111, 0, 0, 0.77778],
              8937: [0.23222, 0.74111, 0, 0, 0.77778],
              8938: [0.20576, 0.70576, 0, 0, 0.77778],
              8939: [0.20576, 0.70576, 0, 0, 0.77778],
              8940: [0.30274, 0.79383, 0, 0, 0.77778],
              8941: [0.30274, 0.79383, 0, 0, 0.77778],
              8994: [0.19444, 0.69224, 0, 0, 0.77778],
              8995: [0.19444, 0.69224, 0, 0, 0.77778],
              9416: [0.15559, 0.69224, 0, 0, 0.90222],
              9484: [0, 0.69224, 0, 0, 0.5],
              9488: [0, 0.69224, 0, 0, 0.5],
              9492: [0, 0.37788, 0, 0, 0.5],
              9496: [0, 0.37788, 0, 0, 0.5],
              9585: [0.19444, 0.68889, 0, 0, 0.88889],
              9586: [0.19444, 0.74111, 0, 0, 0.88889],
              9632: [0, 0.675, 0, 0, 0.77778],
              9633: [0, 0.675, 0, 0, 0.77778],
              9650: [0, 0.54986, 0, 0, 0.72222],
              9651: [0, 0.54986, 0, 0, 0.72222],
              9654: [0.03517, 0.54986, 0, 0, 0.77778],
              9660: [0, 0.54986, 0, 0, 0.72222],
              9661: [0, 0.54986, 0, 0, 0.72222],
              9664: [0.03517, 0.54986, 0, 0, 0.77778],
              9674: [0.11111, 0.69224, 0, 0, 0.66667],
              9733: [0.19444, 0.69224, 0, 0, 0.94445],
              10003: [0, 0.69224, 0, 0, 0.83334],
              10016: [0, 0.69224, 0, 0, 0.83334],
              10731: [0.11111, 0.69224, 0, 0, 0.66667],
              10846: [0.19444, 0.75583, 0, 0, 0.61111],
              10877: [0.13667, 0.63667, 0, 0, 0.77778],
              10878: [0.13667, 0.63667, 0, 0, 0.77778],
              10885: [0.25583, 0.75583, 0, 0, 0.77778],
              10886: [0.25583, 0.75583, 0, 0, 0.77778],
              10887: [0.13597, 0.63597, 0, 0, 0.77778],
              10888: [0.13597, 0.63597, 0, 0, 0.77778],
              10889: [0.26167, 0.75726, 0, 0, 0.77778],
              10890: [0.26167, 0.75726, 0, 0, 0.77778],
              10891: [0.48256, 0.98256, 0, 0, 0.77778],
              10892: [0.48256, 0.98256, 0, 0, 0.77778],
              10901: [0.13667, 0.63667, 0, 0, 0.77778],
              10902: [0.13667, 0.63667, 0, 0, 0.77778],
              10933: [0.25142, 0.75726, 0, 0, 0.77778],
              10934: [0.25142, 0.75726, 0, 0, 0.77778],
              10935: [0.26167, 0.75726, 0, 0, 0.77778],
              10936: [0.26167, 0.75726, 0, 0, 0.77778],
              10937: [0.26167, 0.75726, 0, 0, 0.77778],
              10938: [0.26167, 0.75726, 0, 0, 0.77778],
              10949: [0.25583, 0.75583, 0, 0, 0.77778],
              10950: [0.25583, 0.75583, 0, 0, 0.77778],
              10955: [0.28481, 0.79383, 0, 0, 0.77778],
              10956: [0.28481, 0.79383, 0, 0, 0.77778],
              57350: [0.08167, 0.58167, 0, 0, 0.22222],
              57351: [0.08167, 0.58167, 0, 0, 0.38889],
              57352: [0.08167, 0.58167, 0, 0, 0.77778],
              57353: [0, 0.43056, 0.04028, 0, 0.66667],
              57356: [0.25142, 0.75726, 0, 0, 0.77778],
              57357: [0.25142, 0.75726, 0, 0, 0.77778],
              57358: [0.41951, 0.91951, 0, 0, 0.77778],
              57359: [0.30274, 0.79383, 0, 0, 0.77778],
              57360: [0.30274, 0.79383, 0, 0, 0.77778],
              57361: [0.41951, 0.91951, 0, 0, 0.77778],
              57366: [0.25142, 0.75726, 0, 0, 0.77778],
              57367: [0.25142, 0.75726, 0, 0, 0.77778],
              57368: [0.25142, 0.75726, 0, 0, 0.77778],
              57369: [0.25142, 0.75726, 0, 0, 0.77778],
              57370: [0.13597, 0.63597, 0, 0, 0.77778],
              57371: [0.13597, 0.63597, 0, 0, 0.77778]
            },
            "Caligraphic-Regular": {
              32: [0, 0, 0, 0, 0.25],
              65: [0, 0.68333, 0, 0.19445, 0.79847],
              66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
              67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
              68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
              69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
              70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
              71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
              72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
              73: [0, 0.68333, 0.07382, 0, 0.54452],
              74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
              75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
              76: [0, 0.68333, 0, 0.13889, 0.68972],
              77: [0, 0.68333, 0, 0.13889, 1.2009],
              78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
              79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
              80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
              81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
              82: [0, 0.68333, 0, 0.08334, 0.8475],
              83: [0, 0.68333, 0.075, 0.13889, 0.60556],
              84: [0, 0.68333, 0.25417, 0, 0.54464],
              85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
              86: [0, 0.68333, 0.08222, 0, 0.61278],
              87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
              88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
              89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
              90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
              160: [0, 0, 0, 0, 0.25]
            },
            "Fraktur-Regular": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69141, 0, 0, 0.29574],
              34: [0, 0.69141, 0, 0, 0.21471],
              38: [0, 0.69141, 0, 0, 0.73786],
              39: [0, 0.69141, 0, 0, 0.21201],
              40: [0.24982, 0.74947, 0, 0, 0.38865],
              41: [0.24982, 0.74947, 0, 0, 0.38865],
              42: [0, 0.62119, 0, 0, 0.27764],
              43: [0.08319, 0.58283, 0, 0, 0.75623],
              44: [0, 0.10803, 0, 0, 0.27764],
              45: [0.08319, 0.58283, 0, 0, 0.75623],
              46: [0, 0.10803, 0, 0, 0.27764],
              47: [0.24982, 0.74947, 0, 0, 0.50181],
              48: [0, 0.47534, 0, 0, 0.50181],
              49: [0, 0.47534, 0, 0, 0.50181],
              50: [0, 0.47534, 0, 0, 0.50181],
              51: [0.18906, 0.47534, 0, 0, 0.50181],
              52: [0.18906, 0.47534, 0, 0, 0.50181],
              53: [0.18906, 0.47534, 0, 0, 0.50181],
              54: [0, 0.69141, 0, 0, 0.50181],
              55: [0.18906, 0.47534, 0, 0, 0.50181],
              56: [0, 0.69141, 0, 0, 0.50181],
              57: [0.18906, 0.47534, 0, 0, 0.50181],
              58: [0, 0.47534, 0, 0, 0.21606],
              59: [0.12604, 0.47534, 0, 0, 0.21606],
              61: [-0.13099, 0.36866, 0, 0, 0.75623],
              63: [0, 0.69141, 0, 0, 0.36245],
              65: [0, 0.69141, 0, 0, 0.7176],
              66: [0, 0.69141, 0, 0, 0.88397],
              67: [0, 0.69141, 0, 0, 0.61254],
              68: [0, 0.69141, 0, 0, 0.83158],
              69: [0, 0.69141, 0, 0, 0.66278],
              70: [0.12604, 0.69141, 0, 0, 0.61119],
              71: [0, 0.69141, 0, 0, 0.78539],
              72: [0.06302, 0.69141, 0, 0, 0.7203],
              73: [0, 0.69141, 0, 0, 0.55448],
              74: [0.12604, 0.69141, 0, 0, 0.55231],
              75: [0, 0.69141, 0, 0, 0.66845],
              76: [0, 0.69141, 0, 0, 0.66602],
              77: [0, 0.69141, 0, 0, 1.04953],
              78: [0, 0.69141, 0, 0, 0.83212],
              79: [0, 0.69141, 0, 0, 0.82699],
              80: [0.18906, 0.69141, 0, 0, 0.82753],
              81: [0.03781, 0.69141, 0, 0, 0.82699],
              82: [0, 0.69141, 0, 0, 0.82807],
              83: [0, 0.69141, 0, 0, 0.82861],
              84: [0, 0.69141, 0, 0, 0.66899],
              85: [0, 0.69141, 0, 0, 0.64576],
              86: [0, 0.69141, 0, 0, 0.83131],
              87: [0, 0.69141, 0, 0, 1.04602],
              88: [0, 0.69141, 0, 0, 0.71922],
              89: [0.18906, 0.69141, 0, 0, 0.83293],
              90: [0.12604, 0.69141, 0, 0, 0.60201],
              91: [0.24982, 0.74947, 0, 0, 0.27764],
              93: [0.24982, 0.74947, 0, 0, 0.27764],
              94: [0, 0.69141, 0, 0, 0.49965],
              97: [0, 0.47534, 0, 0, 0.50046],
              98: [0, 0.69141, 0, 0, 0.51315],
              99: [0, 0.47534, 0, 0, 0.38946],
              100: [0, 0.62119, 0, 0, 0.49857],
              101: [0, 0.47534, 0, 0, 0.40053],
              102: [0.18906, 0.69141, 0, 0, 0.32626],
              103: [0.18906, 0.47534, 0, 0, 0.5037],
              104: [0.18906, 0.69141, 0, 0, 0.52126],
              105: [0, 0.69141, 0, 0, 0.27899],
              106: [0, 0.69141, 0, 0, 0.28088],
              107: [0, 0.69141, 0, 0, 0.38946],
              108: [0, 0.69141, 0, 0, 0.27953],
              109: [0, 0.47534, 0, 0, 0.76676],
              110: [0, 0.47534, 0, 0, 0.52666],
              111: [0, 0.47534, 0, 0, 0.48885],
              112: [0.18906, 0.52396, 0, 0, 0.50046],
              113: [0.18906, 0.47534, 0, 0, 0.48912],
              114: [0, 0.47534, 0, 0, 0.38919],
              115: [0, 0.47534, 0, 0, 0.44266],
              116: [0, 0.62119, 0, 0, 0.33301],
              117: [0, 0.47534, 0, 0, 0.5172],
              118: [0, 0.52396, 0, 0, 0.5118],
              119: [0, 0.52396, 0, 0, 0.77351],
              120: [0.18906, 0.47534, 0, 0, 0.38865],
              121: [0.18906, 0.47534, 0, 0, 0.49884],
              122: [0.18906, 0.47534, 0, 0, 0.39054],
              160: [0, 0, 0, 0, 0.25],
              8216: [0, 0.69141, 0, 0, 0.21471],
              8217: [0, 0.69141, 0, 0, 0.21471],
              58112: [0, 0.62119, 0, 0, 0.49749],
              58113: [0, 0.62119, 0, 0, 0.4983],
              58114: [0.18906, 0.69141, 0, 0, 0.33328],
              58115: [0.18906, 0.69141, 0, 0, 0.32923],
              58116: [0.18906, 0.47534, 0, 0, 0.50343],
              58117: [0, 0.69141, 0, 0, 0.33301],
              58118: [0, 0.62119, 0, 0, 0.33409],
              58119: [0, 0.47534, 0, 0, 0.50073]
            },
            "Main-Bold": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0, 0, 0.35],
              34: [0, 0.69444, 0, 0, 0.60278],
              35: [0.19444, 0.69444, 0, 0, 0.95833],
              36: [0.05556, 0.75, 0, 0, 0.575],
              37: [0.05556, 0.75, 0, 0, 0.95833],
              38: [0, 0.69444, 0, 0, 0.89444],
              39: [0, 0.69444, 0, 0, 0.31944],
              40: [0.25, 0.75, 0, 0, 0.44722],
              41: [0.25, 0.75, 0, 0, 0.44722],
              42: [0, 0.75, 0, 0, 0.575],
              43: [0.13333, 0.63333, 0, 0, 0.89444],
              44: [0.19444, 0.15556, 0, 0, 0.31944],
              45: [0, 0.44444, 0, 0, 0.38333],
              46: [0, 0.15556, 0, 0, 0.31944],
              47: [0.25, 0.75, 0, 0, 0.575],
              48: [0, 0.64444, 0, 0, 0.575],
              49: [0, 0.64444, 0, 0, 0.575],
              50: [0, 0.64444, 0, 0, 0.575],
              51: [0, 0.64444, 0, 0, 0.575],
              52: [0, 0.64444, 0, 0, 0.575],
              53: [0, 0.64444, 0, 0, 0.575],
              54: [0, 0.64444, 0, 0, 0.575],
              55: [0, 0.64444, 0, 0, 0.575],
              56: [0, 0.64444, 0, 0, 0.575],
              57: [0, 0.64444, 0, 0, 0.575],
              58: [0, 0.44444, 0, 0, 0.31944],
              59: [0.19444, 0.44444, 0, 0, 0.31944],
              60: [0.08556, 0.58556, 0, 0, 0.89444],
              61: [-0.10889, 0.39111, 0, 0, 0.89444],
              62: [0.08556, 0.58556, 0, 0, 0.89444],
              63: [0, 0.69444, 0, 0, 0.54305],
              64: [0, 0.69444, 0, 0, 0.89444],
              65: [0, 0.68611, 0, 0, 0.86944],
              66: [0, 0.68611, 0, 0, 0.81805],
              67: [0, 0.68611, 0, 0, 0.83055],
              68: [0, 0.68611, 0, 0, 0.88194],
              69: [0, 0.68611, 0, 0, 0.75555],
              70: [0, 0.68611, 0, 0, 0.72361],
              71: [0, 0.68611, 0, 0, 0.90416],
              72: [0, 0.68611, 0, 0, 0.9],
              73: [0, 0.68611, 0, 0, 0.43611],
              74: [0, 0.68611, 0, 0, 0.59444],
              75: [0, 0.68611, 0, 0, 0.90138],
              76: [0, 0.68611, 0, 0, 0.69166],
              77: [0, 0.68611, 0, 0, 1.09166],
              78: [0, 0.68611, 0, 0, 0.9],
              79: [0, 0.68611, 0, 0, 0.86388],
              80: [0, 0.68611, 0, 0, 0.78611],
              81: [0.19444, 0.68611, 0, 0, 0.86388],
              82: [0, 0.68611, 0, 0, 0.8625],
              83: [0, 0.68611, 0, 0, 0.63889],
              84: [0, 0.68611, 0, 0, 0.8],
              85: [0, 0.68611, 0, 0, 0.88472],
              86: [0, 0.68611, 0.01597, 0, 0.86944],
              87: [0, 0.68611, 0.01597, 0, 1.18888],
              88: [0, 0.68611, 0, 0, 0.86944],
              89: [0, 0.68611, 0.02875, 0, 0.86944],
              90: [0, 0.68611, 0, 0, 0.70277],
              91: [0.25, 0.75, 0, 0, 0.31944],
              92: [0.25, 0.75, 0, 0, 0.575],
              93: [0.25, 0.75, 0, 0, 0.31944],
              94: [0, 0.69444, 0, 0, 0.575],
              95: [0.31, 0.13444, 0.03194, 0, 0.575],
              97: [0, 0.44444, 0, 0, 0.55902],
              98: [0, 0.69444, 0, 0, 0.63889],
              99: [0, 0.44444, 0, 0, 0.51111],
              100: [0, 0.69444, 0, 0, 0.63889],
              101: [0, 0.44444, 0, 0, 0.52708],
              102: [0, 0.69444, 0.10903, 0, 0.35139],
              103: [0.19444, 0.44444, 0.01597, 0, 0.575],
              104: [0, 0.69444, 0, 0, 0.63889],
              105: [0, 0.69444, 0, 0, 0.31944],
              106: [0.19444, 0.69444, 0, 0, 0.35139],
              107: [0, 0.69444, 0, 0, 0.60694],
              108: [0, 0.69444, 0, 0, 0.31944],
              109: [0, 0.44444, 0, 0, 0.95833],
              110: [0, 0.44444, 0, 0, 0.63889],
              111: [0, 0.44444, 0, 0, 0.575],
              112: [0.19444, 0.44444, 0, 0, 0.63889],
              113: [0.19444, 0.44444, 0, 0, 0.60694],
              114: [0, 0.44444, 0, 0, 0.47361],
              115: [0, 0.44444, 0, 0, 0.45361],
              116: [0, 0.63492, 0, 0, 0.44722],
              117: [0, 0.44444, 0, 0, 0.63889],
              118: [0, 0.44444, 0.01597, 0, 0.60694],
              119: [0, 0.44444, 0.01597, 0, 0.83055],
              120: [0, 0.44444, 0, 0, 0.60694],
              121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
              122: [0, 0.44444, 0, 0, 0.51111],
              123: [0.25, 0.75, 0, 0, 0.575],
              124: [0.25, 0.75, 0, 0, 0.31944],
              125: [0.25, 0.75, 0, 0, 0.575],
              126: [0.35, 0.34444, 0, 0, 0.575],
              160: [0, 0, 0, 0, 0.25],
              163: [0, 0.69444, 0, 0, 0.86853],
              168: [0, 0.69444, 0, 0, 0.575],
              172: [0, 0.44444, 0, 0, 0.76666],
              176: [0, 0.69444, 0, 0, 0.86944],
              177: [0.13333, 0.63333, 0, 0, 0.89444],
              184: [0.17014, 0, 0, 0, 0.51111],
              198: [0, 0.68611, 0, 0, 1.04166],
              215: [0.13333, 0.63333, 0, 0, 0.89444],
              216: [0.04861, 0.73472, 0, 0, 0.89444],
              223: [0, 0.69444, 0, 0, 0.59722],
              230: [0, 0.44444, 0, 0, 0.83055],
              247: [0.13333, 0.63333, 0, 0, 0.89444],
              248: [0.09722, 0.54167, 0, 0, 0.575],
              305: [0, 0.44444, 0, 0, 0.31944],
              338: [0, 0.68611, 0, 0, 1.16944],
              339: [0, 0.44444, 0, 0, 0.89444],
              567: [0.19444, 0.44444, 0, 0, 0.35139],
              710: [0, 0.69444, 0, 0, 0.575],
              711: [0, 0.63194, 0, 0, 0.575],
              713: [0, 0.59611, 0, 0, 0.575],
              714: [0, 0.69444, 0, 0, 0.575],
              715: [0, 0.69444, 0, 0, 0.575],
              728: [0, 0.69444, 0, 0, 0.575],
              729: [0, 0.69444, 0, 0, 0.31944],
              730: [0, 0.69444, 0, 0, 0.86944],
              732: [0, 0.69444, 0, 0, 0.575],
              733: [0, 0.69444, 0, 0, 0.575],
              915: [0, 0.68611, 0, 0, 0.69166],
              916: [0, 0.68611, 0, 0, 0.95833],
              920: [0, 0.68611, 0, 0, 0.89444],
              923: [0, 0.68611, 0, 0, 0.80555],
              926: [0, 0.68611, 0, 0, 0.76666],
              928: [0, 0.68611, 0, 0, 0.9],
              931: [0, 0.68611, 0, 0, 0.83055],
              933: [0, 0.68611, 0, 0, 0.89444],
              934: [0, 0.68611, 0, 0, 0.83055],
              936: [0, 0.68611, 0, 0, 0.89444],
              937: [0, 0.68611, 0, 0, 0.83055],
              8211: [0, 0.44444, 0.03194, 0, 0.575],
              8212: [0, 0.44444, 0.03194, 0, 1.14999],
              8216: [0, 0.69444, 0, 0, 0.31944],
              8217: [0, 0.69444, 0, 0, 0.31944],
              8220: [0, 0.69444, 0, 0, 0.60278],
              8221: [0, 0.69444, 0, 0, 0.60278],
              8224: [0.19444, 0.69444, 0, 0, 0.51111],
              8225: [0.19444, 0.69444, 0, 0, 0.51111],
              8242: [0, 0.55556, 0, 0, 0.34444],
              8407: [0, 0.72444, 0.15486, 0, 0.575],
              8463: [0, 0.69444, 0, 0, 0.66759],
              8465: [0, 0.69444, 0, 0, 0.83055],
              8467: [0, 0.69444, 0, 0, 0.47361],
              8472: [0.19444, 0.44444, 0, 0, 0.74027],
              8476: [0, 0.69444, 0, 0, 0.83055],
              8501: [0, 0.69444, 0, 0, 0.70277],
              8592: [-0.10889, 0.39111, 0, 0, 1.14999],
              8593: [0.19444, 0.69444, 0, 0, 0.575],
              8594: [-0.10889, 0.39111, 0, 0, 1.14999],
              8595: [0.19444, 0.69444, 0, 0, 0.575],
              8596: [-0.10889, 0.39111, 0, 0, 1.14999],
              8597: [0.25, 0.75, 0, 0, 0.575],
              8598: [0.19444, 0.69444, 0, 0, 1.14999],
              8599: [0.19444, 0.69444, 0, 0, 1.14999],
              8600: [0.19444, 0.69444, 0, 0, 1.14999],
              8601: [0.19444, 0.69444, 0, 0, 1.14999],
              8636: [-0.10889, 0.39111, 0, 0, 1.14999],
              8637: [-0.10889, 0.39111, 0, 0, 1.14999],
              8640: [-0.10889, 0.39111, 0, 0, 1.14999],
              8641: [-0.10889, 0.39111, 0, 0, 1.14999],
              8656: [-0.10889, 0.39111, 0, 0, 1.14999],
              8657: [0.19444, 0.69444, 0, 0, 0.70277],
              8658: [-0.10889, 0.39111, 0, 0, 1.14999],
              8659: [0.19444, 0.69444, 0, 0, 0.70277],
              8660: [-0.10889, 0.39111, 0, 0, 1.14999],
              8661: [0.25, 0.75, 0, 0, 0.70277],
              8704: [0, 0.69444, 0, 0, 0.63889],
              8706: [0, 0.69444, 0.06389, 0, 0.62847],
              8707: [0, 0.69444, 0, 0, 0.63889],
              8709: [0.05556, 0.75, 0, 0, 0.575],
              8711: [0, 0.68611, 0, 0, 0.95833],
              8712: [0.08556, 0.58556, 0, 0, 0.76666],
              8715: [0.08556, 0.58556, 0, 0, 0.76666],
              8722: [0.13333, 0.63333, 0, 0, 0.89444],
              8723: [0.13333, 0.63333, 0, 0, 0.89444],
              8725: [0.25, 0.75, 0, 0, 0.575],
              8726: [0.25, 0.75, 0, 0, 0.575],
              8727: [-0.02778, 0.47222, 0, 0, 0.575],
              8728: [-0.02639, 0.47361, 0, 0, 0.575],
              8729: [-0.02639, 0.47361, 0, 0, 0.575],
              8730: [0.18, 0.82, 0, 0, 0.95833],
              8733: [0, 0.44444, 0, 0, 0.89444],
              8734: [0, 0.44444, 0, 0, 1.14999],
              8736: [0, 0.69224, 0, 0, 0.72222],
              8739: [0.25, 0.75, 0, 0, 0.31944],
              8741: [0.25, 0.75, 0, 0, 0.575],
              8743: [0, 0.55556, 0, 0, 0.76666],
              8744: [0, 0.55556, 0, 0, 0.76666],
              8745: [0, 0.55556, 0, 0, 0.76666],
              8746: [0, 0.55556, 0, 0, 0.76666],
              8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
              8764: [-0.10889, 0.39111, 0, 0, 0.89444],
              8768: [0.19444, 0.69444, 0, 0, 0.31944],
              8771: [222e-5, 0.50222, 0, 0, 0.89444],
              8773: [0.027, 0.638, 0, 0, 0.894],
              8776: [0.02444, 0.52444, 0, 0, 0.89444],
              8781: [222e-5, 0.50222, 0, 0, 0.89444],
              8801: [222e-5, 0.50222, 0, 0, 0.89444],
              8804: [0.19667, 0.69667, 0, 0, 0.89444],
              8805: [0.19667, 0.69667, 0, 0, 0.89444],
              8810: [0.08556, 0.58556, 0, 0, 1.14999],
              8811: [0.08556, 0.58556, 0, 0, 1.14999],
              8826: [0.08556, 0.58556, 0, 0, 0.89444],
              8827: [0.08556, 0.58556, 0, 0, 0.89444],
              8834: [0.08556, 0.58556, 0, 0, 0.89444],
              8835: [0.08556, 0.58556, 0, 0, 0.89444],
              8838: [0.19667, 0.69667, 0, 0, 0.89444],
              8839: [0.19667, 0.69667, 0, 0, 0.89444],
              8846: [0, 0.55556, 0, 0, 0.76666],
              8849: [0.19667, 0.69667, 0, 0, 0.89444],
              8850: [0.19667, 0.69667, 0, 0, 0.89444],
              8851: [0, 0.55556, 0, 0, 0.76666],
              8852: [0, 0.55556, 0, 0, 0.76666],
              8853: [0.13333, 0.63333, 0, 0, 0.89444],
              8854: [0.13333, 0.63333, 0, 0, 0.89444],
              8855: [0.13333, 0.63333, 0, 0, 0.89444],
              8856: [0.13333, 0.63333, 0, 0, 0.89444],
              8857: [0.13333, 0.63333, 0, 0, 0.89444],
              8866: [0, 0.69444, 0, 0, 0.70277],
              8867: [0, 0.69444, 0, 0, 0.70277],
              8868: [0, 0.69444, 0, 0, 0.89444],
              8869: [0, 0.69444, 0, 0, 0.89444],
              8900: [-0.02639, 0.47361, 0, 0, 0.575],
              8901: [-0.02639, 0.47361, 0, 0, 0.31944],
              8902: [-0.02778, 0.47222, 0, 0, 0.575],
              8968: [0.25, 0.75, 0, 0, 0.51111],
              8969: [0.25, 0.75, 0, 0, 0.51111],
              8970: [0.25, 0.75, 0, 0, 0.51111],
              8971: [0.25, 0.75, 0, 0, 0.51111],
              8994: [-0.13889, 0.36111, 0, 0, 1.14999],
              8995: [-0.13889, 0.36111, 0, 0, 1.14999],
              9651: [0.19444, 0.69444, 0, 0, 1.02222],
              9657: [-0.02778, 0.47222, 0, 0, 0.575],
              9661: [0.19444, 0.69444, 0, 0, 1.02222],
              9667: [-0.02778, 0.47222, 0, 0, 0.575],
              9711: [0.19444, 0.69444, 0, 0, 1.14999],
              9824: [0.12963, 0.69444, 0, 0, 0.89444],
              9825: [0.12963, 0.69444, 0, 0, 0.89444],
              9826: [0.12963, 0.69444, 0, 0, 0.89444],
              9827: [0.12963, 0.69444, 0, 0, 0.89444],
              9837: [0, 0.75, 0, 0, 0.44722],
              9838: [0.19444, 0.69444, 0, 0, 0.44722],
              9839: [0.19444, 0.69444, 0, 0, 0.44722],
              10216: [0.25, 0.75, 0, 0, 0.44722],
              10217: [0.25, 0.75, 0, 0, 0.44722],
              10815: [0, 0.68611, 0, 0, 0.9],
              10927: [0.19667, 0.69667, 0, 0, 0.89444],
              10928: [0.19667, 0.69667, 0, 0, 0.89444],
              57376: [0.19444, 0.69444, 0, 0, 0]
            },
            "Main-BoldItalic": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0.11417, 0, 0.38611],
              34: [0, 0.69444, 0.07939, 0, 0.62055],
              35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
              37: [0.05556, 0.75, 0.12861, 0, 0.94444],
              38: [0, 0.69444, 0.08528, 0, 0.88555],
              39: [0, 0.69444, 0.12945, 0, 0.35555],
              40: [0.25, 0.75, 0.15806, 0, 0.47333],
              41: [0.25, 0.75, 0.03306, 0, 0.47333],
              42: [0, 0.75, 0.14333, 0, 0.59111],
              43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
              44: [0.19444, 0.14722, 0, 0, 0.35555],
              45: [0, 0.44444, 0.02611, 0, 0.41444],
              46: [0, 0.14722, 0, 0, 0.35555],
              47: [0.25, 0.75, 0.15806, 0, 0.59111],
              48: [0, 0.64444, 0.13167, 0, 0.59111],
              49: [0, 0.64444, 0.13167, 0, 0.59111],
              50: [0, 0.64444, 0.13167, 0, 0.59111],
              51: [0, 0.64444, 0.13167, 0, 0.59111],
              52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
              53: [0, 0.64444, 0.13167, 0, 0.59111],
              54: [0, 0.64444, 0.13167, 0, 0.59111],
              55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
              56: [0, 0.64444, 0.13167, 0, 0.59111],
              57: [0, 0.64444, 0.13167, 0, 0.59111],
              58: [0, 0.44444, 0.06695, 0, 0.35555],
              59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
              61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
              63: [0, 0.69444, 0.11472, 0, 0.59111],
              64: [0, 0.69444, 0.09208, 0, 0.88555],
              65: [0, 0.68611, 0, 0, 0.86555],
              66: [0, 0.68611, 0.0992, 0, 0.81666],
              67: [0, 0.68611, 0.14208, 0, 0.82666],
              68: [0, 0.68611, 0.09062, 0, 0.87555],
              69: [0, 0.68611, 0.11431, 0, 0.75666],
              70: [0, 0.68611, 0.12903, 0, 0.72722],
              71: [0, 0.68611, 0.07347, 0, 0.89527],
              72: [0, 0.68611, 0.17208, 0, 0.8961],
              73: [0, 0.68611, 0.15681, 0, 0.47166],
              74: [0, 0.68611, 0.145, 0, 0.61055],
              75: [0, 0.68611, 0.14208, 0, 0.89499],
              76: [0, 0.68611, 0, 0, 0.69777],
              77: [0, 0.68611, 0.17208, 0, 1.07277],
              78: [0, 0.68611, 0.17208, 0, 0.8961],
              79: [0, 0.68611, 0.09062, 0, 0.85499],
              80: [0, 0.68611, 0.0992, 0, 0.78721],
              81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
              82: [0, 0.68611, 0.02559, 0, 0.85944],
              83: [0, 0.68611, 0.11264, 0, 0.64999],
              84: [0, 0.68611, 0.12903, 0, 0.7961],
              85: [0, 0.68611, 0.17208, 0, 0.88083],
              86: [0, 0.68611, 0.18625, 0, 0.86555],
              87: [0, 0.68611, 0.18625, 0, 1.15999],
              88: [0, 0.68611, 0.15681, 0, 0.86555],
              89: [0, 0.68611, 0.19803, 0, 0.86555],
              90: [0, 0.68611, 0.14208, 0, 0.70888],
              91: [0.25, 0.75, 0.1875, 0, 0.35611],
              93: [0.25, 0.75, 0.09972, 0, 0.35611],
              94: [0, 0.69444, 0.06709, 0, 0.59111],
              95: [0.31, 0.13444, 0.09811, 0, 0.59111],
              97: [0, 0.44444, 0.09426, 0, 0.59111],
              98: [0, 0.69444, 0.07861, 0, 0.53222],
              99: [0, 0.44444, 0.05222, 0, 0.53222],
              100: [0, 0.69444, 0.10861, 0, 0.59111],
              101: [0, 0.44444, 0.085, 0, 0.53222],
              102: [0.19444, 0.69444, 0.21778, 0, 0.4],
              103: [0.19444, 0.44444, 0.105, 0, 0.53222],
              104: [0, 0.69444, 0.09426, 0, 0.59111],
              105: [0, 0.69326, 0.11387, 0, 0.35555],
              106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
              107: [0, 0.69444, 0.11111, 0, 0.53222],
              108: [0, 0.69444, 0.10861, 0, 0.29666],
              109: [0, 0.44444, 0.09426, 0, 0.94444],
              110: [0, 0.44444, 0.09426, 0, 0.64999],
              111: [0, 0.44444, 0.07861, 0, 0.59111],
              112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
              113: [0.19444, 0.44444, 0.105, 0, 0.53222],
              114: [0, 0.44444, 0.11111, 0, 0.50167],
              115: [0, 0.44444, 0.08167, 0, 0.48694],
              116: [0, 0.63492, 0.09639, 0, 0.385],
              117: [0, 0.44444, 0.09426, 0, 0.62055],
              118: [0, 0.44444, 0.11111, 0, 0.53222],
              119: [0, 0.44444, 0.11111, 0, 0.76777],
              120: [0, 0.44444, 0.12583, 0, 0.56055],
              121: [0.19444, 0.44444, 0.105, 0, 0.56166],
              122: [0, 0.44444, 0.13889, 0, 0.49055],
              126: [0.35, 0.34444, 0.11472, 0, 0.59111],
              160: [0, 0, 0, 0, 0.25],
              168: [0, 0.69444, 0.11473, 0, 0.59111],
              176: [0, 0.69444, 0, 0, 0.94888],
              184: [0.17014, 0, 0, 0, 0.53222],
              198: [0, 0.68611, 0.11431, 0, 1.02277],
              216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
              223: [0.19444, 0.69444, 0.09736, 0, 0.665],
              230: [0, 0.44444, 0.085, 0, 0.82666],
              248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
              305: [0, 0.44444, 0.09426, 0, 0.35555],
              338: [0, 0.68611, 0.11431, 0, 1.14054],
              339: [0, 0.44444, 0.085, 0, 0.82666],
              567: [0.19444, 0.44444, 0.04611, 0, 0.385],
              710: [0, 0.69444, 0.06709, 0, 0.59111],
              711: [0, 0.63194, 0.08271, 0, 0.59111],
              713: [0, 0.59444, 0.10444, 0, 0.59111],
              714: [0, 0.69444, 0.08528, 0, 0.59111],
              715: [0, 0.69444, 0, 0, 0.59111],
              728: [0, 0.69444, 0.10333, 0, 0.59111],
              729: [0, 0.69444, 0.12945, 0, 0.35555],
              730: [0, 0.69444, 0, 0, 0.94888],
              732: [0, 0.69444, 0.11472, 0, 0.59111],
              733: [0, 0.69444, 0.11472, 0, 0.59111],
              915: [0, 0.68611, 0.12903, 0, 0.69777],
              916: [0, 0.68611, 0, 0, 0.94444],
              920: [0, 0.68611, 0.09062, 0, 0.88555],
              923: [0, 0.68611, 0, 0, 0.80666],
              926: [0, 0.68611, 0.15092, 0, 0.76777],
              928: [0, 0.68611, 0.17208, 0, 0.8961],
              931: [0, 0.68611, 0.11431, 0, 0.82666],
              933: [0, 0.68611, 0.10778, 0, 0.88555],
              934: [0, 0.68611, 0.05632, 0, 0.82666],
              936: [0, 0.68611, 0.10778, 0, 0.88555],
              937: [0, 0.68611, 0.0992, 0, 0.82666],
              8211: [0, 0.44444, 0.09811, 0, 0.59111],
              8212: [0, 0.44444, 0.09811, 0, 1.18221],
              8216: [0, 0.69444, 0.12945, 0, 0.35555],
              8217: [0, 0.69444, 0.12945, 0, 0.35555],
              8220: [0, 0.69444, 0.16772, 0, 0.62055],
              8221: [0, 0.69444, 0.07939, 0, 0.62055]
            },
            "Main-Italic": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0.12417, 0, 0.30667],
              34: [0, 0.69444, 0.06961, 0, 0.51444],
              35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
              37: [0.05556, 0.75, 0.13639, 0, 0.81777],
              38: [0, 0.69444, 0.09694, 0, 0.76666],
              39: [0, 0.69444, 0.12417, 0, 0.30667],
              40: [0.25, 0.75, 0.16194, 0, 0.40889],
              41: [0.25, 0.75, 0.03694, 0, 0.40889],
              42: [0, 0.75, 0.14917, 0, 0.51111],
              43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
              44: [0.19444, 0.10556, 0, 0, 0.30667],
              45: [0, 0.43056, 0.02826, 0, 0.35778],
              46: [0, 0.10556, 0, 0, 0.30667],
              47: [0.25, 0.75, 0.16194, 0, 0.51111],
              48: [0, 0.64444, 0.13556, 0, 0.51111],
              49: [0, 0.64444, 0.13556, 0, 0.51111],
              50: [0, 0.64444, 0.13556, 0, 0.51111],
              51: [0, 0.64444, 0.13556, 0, 0.51111],
              52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
              53: [0, 0.64444, 0.13556, 0, 0.51111],
              54: [0, 0.64444, 0.13556, 0, 0.51111],
              55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
              56: [0, 0.64444, 0.13556, 0, 0.51111],
              57: [0, 0.64444, 0.13556, 0, 0.51111],
              58: [0, 0.43056, 0.0582, 0, 0.30667],
              59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
              61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
              63: [0, 0.69444, 0.1225, 0, 0.51111],
              64: [0, 0.69444, 0.09597, 0, 0.76666],
              65: [0, 0.68333, 0, 0, 0.74333],
              66: [0, 0.68333, 0.10257, 0, 0.70389],
              67: [0, 0.68333, 0.14528, 0, 0.71555],
              68: [0, 0.68333, 0.09403, 0, 0.755],
              69: [0, 0.68333, 0.12028, 0, 0.67833],
              70: [0, 0.68333, 0.13305, 0, 0.65277],
              71: [0, 0.68333, 0.08722, 0, 0.77361],
              72: [0, 0.68333, 0.16389, 0, 0.74333],
              73: [0, 0.68333, 0.15806, 0, 0.38555],
              74: [0, 0.68333, 0.14028, 0, 0.525],
              75: [0, 0.68333, 0.14528, 0, 0.76888],
              76: [0, 0.68333, 0, 0, 0.62722],
              77: [0, 0.68333, 0.16389, 0, 0.89666],
              78: [0, 0.68333, 0.16389, 0, 0.74333],
              79: [0, 0.68333, 0.09403, 0, 0.76666],
              80: [0, 0.68333, 0.10257, 0, 0.67833],
              81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
              82: [0, 0.68333, 0.03868, 0, 0.72944],
              83: [0, 0.68333, 0.11972, 0, 0.56222],
              84: [0, 0.68333, 0.13305, 0, 0.71555],
              85: [0, 0.68333, 0.16389, 0, 0.74333],
              86: [0, 0.68333, 0.18361, 0, 0.74333],
              87: [0, 0.68333, 0.18361, 0, 0.99888],
              88: [0, 0.68333, 0.15806, 0, 0.74333],
              89: [0, 0.68333, 0.19383, 0, 0.74333],
              90: [0, 0.68333, 0.14528, 0, 0.61333],
              91: [0.25, 0.75, 0.1875, 0, 0.30667],
              93: [0.25, 0.75, 0.10528, 0, 0.30667],
              94: [0, 0.69444, 0.06646, 0, 0.51111],
              95: [0.31, 0.12056, 0.09208, 0, 0.51111],
              97: [0, 0.43056, 0.07671, 0, 0.51111],
              98: [0, 0.69444, 0.06312, 0, 0.46],
              99: [0, 0.43056, 0.05653, 0, 0.46],
              100: [0, 0.69444, 0.10333, 0, 0.51111],
              101: [0, 0.43056, 0.07514, 0, 0.46],
              102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
              103: [0.19444, 0.43056, 0.08847, 0, 0.46],
              104: [0, 0.69444, 0.07671, 0, 0.51111],
              105: [0, 0.65536, 0.1019, 0, 0.30667],
              106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
              107: [0, 0.69444, 0.10764, 0, 0.46],
              108: [0, 0.69444, 0.10333, 0, 0.25555],
              109: [0, 0.43056, 0.07671, 0, 0.81777],
              110: [0, 0.43056, 0.07671, 0, 0.56222],
              111: [0, 0.43056, 0.06312, 0, 0.51111],
              112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
              113: [0.19444, 0.43056, 0.08847, 0, 0.46],
              114: [0, 0.43056, 0.10764, 0, 0.42166],
              115: [0, 0.43056, 0.08208, 0, 0.40889],
              116: [0, 0.61508, 0.09486, 0, 0.33222],
              117: [0, 0.43056, 0.07671, 0, 0.53666],
              118: [0, 0.43056, 0.10764, 0, 0.46],
              119: [0, 0.43056, 0.10764, 0, 0.66444],
              120: [0, 0.43056, 0.12042, 0, 0.46389],
              121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
              122: [0, 0.43056, 0.12292, 0, 0.40889],
              126: [0.35, 0.31786, 0.11585, 0, 0.51111],
              160: [0, 0, 0, 0, 0.25],
              168: [0, 0.66786, 0.10474, 0, 0.51111],
              176: [0, 0.69444, 0, 0, 0.83129],
              184: [0.17014, 0, 0, 0, 0.46],
              198: [0, 0.68333, 0.12028, 0, 0.88277],
              216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
              223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
              230: [0, 0.43056, 0.07514, 0, 0.71555],
              248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
              338: [0, 0.68333, 0.12028, 0, 0.98499],
              339: [0, 0.43056, 0.07514, 0, 0.71555],
              710: [0, 0.69444, 0.06646, 0, 0.51111],
              711: [0, 0.62847, 0.08295, 0, 0.51111],
              713: [0, 0.56167, 0.10333, 0, 0.51111],
              714: [0, 0.69444, 0.09694, 0, 0.51111],
              715: [0, 0.69444, 0, 0, 0.51111],
              728: [0, 0.69444, 0.10806, 0, 0.51111],
              729: [0, 0.66786, 0.11752, 0, 0.30667],
              730: [0, 0.69444, 0, 0, 0.83129],
              732: [0, 0.66786, 0.11585, 0, 0.51111],
              733: [0, 0.69444, 0.1225, 0, 0.51111],
              915: [0, 0.68333, 0.13305, 0, 0.62722],
              916: [0, 0.68333, 0, 0, 0.81777],
              920: [0, 0.68333, 0.09403, 0, 0.76666],
              923: [0, 0.68333, 0, 0, 0.69222],
              926: [0, 0.68333, 0.15294, 0, 0.66444],
              928: [0, 0.68333, 0.16389, 0, 0.74333],
              931: [0, 0.68333, 0.12028, 0, 0.71555],
              933: [0, 0.68333, 0.11111, 0, 0.76666],
              934: [0, 0.68333, 0.05986, 0, 0.71555],
              936: [0, 0.68333, 0.11111, 0, 0.76666],
              937: [0, 0.68333, 0.10257, 0, 0.71555],
              8211: [0, 0.43056, 0.09208, 0, 0.51111],
              8212: [0, 0.43056, 0.09208, 0, 1.02222],
              8216: [0, 0.69444, 0.12417, 0, 0.30667],
              8217: [0, 0.69444, 0.12417, 0, 0.30667],
              8220: [0, 0.69444, 0.1685, 0, 0.51444],
              8221: [0, 0.69444, 0.06961, 0, 0.51444],
              8463: [0, 0.68889, 0, 0, 0.54028]
            },
            "Main-Regular": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0, 0, 0.27778],
              34: [0, 0.69444, 0, 0, 0.5],
              35: [0.19444, 0.69444, 0, 0, 0.83334],
              36: [0.05556, 0.75, 0, 0, 0.5],
              37: [0.05556, 0.75, 0, 0, 0.83334],
              38: [0, 0.69444, 0, 0, 0.77778],
              39: [0, 0.69444, 0, 0, 0.27778],
              40: [0.25, 0.75, 0, 0, 0.38889],
              41: [0.25, 0.75, 0, 0, 0.38889],
              42: [0, 0.75, 0, 0, 0.5],
              43: [0.08333, 0.58333, 0, 0, 0.77778],
              44: [0.19444, 0.10556, 0, 0, 0.27778],
              45: [0, 0.43056, 0, 0, 0.33333],
              46: [0, 0.10556, 0, 0, 0.27778],
              47: [0.25, 0.75, 0, 0, 0.5],
              48: [0, 0.64444, 0, 0, 0.5],
              49: [0, 0.64444, 0, 0, 0.5],
              50: [0, 0.64444, 0, 0, 0.5],
              51: [0, 0.64444, 0, 0, 0.5],
              52: [0, 0.64444, 0, 0, 0.5],
              53: [0, 0.64444, 0, 0, 0.5],
              54: [0, 0.64444, 0, 0, 0.5],
              55: [0, 0.64444, 0, 0, 0.5],
              56: [0, 0.64444, 0, 0, 0.5],
              57: [0, 0.64444, 0, 0, 0.5],
              58: [0, 0.43056, 0, 0, 0.27778],
              59: [0.19444, 0.43056, 0, 0, 0.27778],
              60: [0.0391, 0.5391, 0, 0, 0.77778],
              61: [-0.13313, 0.36687, 0, 0, 0.77778],
              62: [0.0391, 0.5391, 0, 0, 0.77778],
              63: [0, 0.69444, 0, 0, 0.47222],
              64: [0, 0.69444, 0, 0, 0.77778],
              65: [0, 0.68333, 0, 0, 0.75],
              66: [0, 0.68333, 0, 0, 0.70834],
              67: [0, 0.68333, 0, 0, 0.72222],
              68: [0, 0.68333, 0, 0, 0.76389],
              69: [0, 0.68333, 0, 0, 0.68056],
              70: [0, 0.68333, 0, 0, 0.65278],
              71: [0, 0.68333, 0, 0, 0.78472],
              72: [0, 0.68333, 0, 0, 0.75],
              73: [0, 0.68333, 0, 0, 0.36111],
              74: [0, 0.68333, 0, 0, 0.51389],
              75: [0, 0.68333, 0, 0, 0.77778],
              76: [0, 0.68333, 0, 0, 0.625],
              77: [0, 0.68333, 0, 0, 0.91667],
              78: [0, 0.68333, 0, 0, 0.75],
              79: [0, 0.68333, 0, 0, 0.77778],
              80: [0, 0.68333, 0, 0, 0.68056],
              81: [0.19444, 0.68333, 0, 0, 0.77778],
              82: [0, 0.68333, 0, 0, 0.73611],
              83: [0, 0.68333, 0, 0, 0.55556],
              84: [0, 0.68333, 0, 0, 0.72222],
              85: [0, 0.68333, 0, 0, 0.75],
              86: [0, 0.68333, 0.01389, 0, 0.75],
              87: [0, 0.68333, 0.01389, 0, 1.02778],
              88: [0, 0.68333, 0, 0, 0.75],
              89: [0, 0.68333, 0.025, 0, 0.75],
              90: [0, 0.68333, 0, 0, 0.61111],
              91: [0.25, 0.75, 0, 0, 0.27778],
              92: [0.25, 0.75, 0, 0, 0.5],
              93: [0.25, 0.75, 0, 0, 0.27778],
              94: [0, 0.69444, 0, 0, 0.5],
              95: [0.31, 0.12056, 0.02778, 0, 0.5],
              97: [0, 0.43056, 0, 0, 0.5],
              98: [0, 0.69444, 0, 0, 0.55556],
              99: [0, 0.43056, 0, 0, 0.44445],
              100: [0, 0.69444, 0, 0, 0.55556],
              101: [0, 0.43056, 0, 0, 0.44445],
              102: [0, 0.69444, 0.07778, 0, 0.30556],
              103: [0.19444, 0.43056, 0.01389, 0, 0.5],
              104: [0, 0.69444, 0, 0, 0.55556],
              105: [0, 0.66786, 0, 0, 0.27778],
              106: [0.19444, 0.66786, 0, 0, 0.30556],
              107: [0, 0.69444, 0, 0, 0.52778],
              108: [0, 0.69444, 0, 0, 0.27778],
              109: [0, 0.43056, 0, 0, 0.83334],
              110: [0, 0.43056, 0, 0, 0.55556],
              111: [0, 0.43056, 0, 0, 0.5],
              112: [0.19444, 0.43056, 0, 0, 0.55556],
              113: [0.19444, 0.43056, 0, 0, 0.52778],
              114: [0, 0.43056, 0, 0, 0.39167],
              115: [0, 0.43056, 0, 0, 0.39445],
              116: [0, 0.61508, 0, 0, 0.38889],
              117: [0, 0.43056, 0, 0, 0.55556],
              118: [0, 0.43056, 0.01389, 0, 0.52778],
              119: [0, 0.43056, 0.01389, 0, 0.72222],
              120: [0, 0.43056, 0, 0, 0.52778],
              121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
              122: [0, 0.43056, 0, 0, 0.44445],
              123: [0.25, 0.75, 0, 0, 0.5],
              124: [0.25, 0.75, 0, 0, 0.27778],
              125: [0.25, 0.75, 0, 0, 0.5],
              126: [0.35, 0.31786, 0, 0, 0.5],
              160: [0, 0, 0, 0, 0.25],
              163: [0, 0.69444, 0, 0, 0.76909],
              167: [0.19444, 0.69444, 0, 0, 0.44445],
              168: [0, 0.66786, 0, 0, 0.5],
              172: [0, 0.43056, 0, 0, 0.66667],
              176: [0, 0.69444, 0, 0, 0.75],
              177: [0.08333, 0.58333, 0, 0, 0.77778],
              182: [0.19444, 0.69444, 0, 0, 0.61111],
              184: [0.17014, 0, 0, 0, 0.44445],
              198: [0, 0.68333, 0, 0, 0.90278],
              215: [0.08333, 0.58333, 0, 0, 0.77778],
              216: [0.04861, 0.73194, 0, 0, 0.77778],
              223: [0, 0.69444, 0, 0, 0.5],
              230: [0, 0.43056, 0, 0, 0.72222],
              247: [0.08333, 0.58333, 0, 0, 0.77778],
              248: [0.09722, 0.52778, 0, 0, 0.5],
              305: [0, 0.43056, 0, 0, 0.27778],
              338: [0, 0.68333, 0, 0, 1.01389],
              339: [0, 0.43056, 0, 0, 0.77778],
              567: [0.19444, 0.43056, 0, 0, 0.30556],
              710: [0, 0.69444, 0, 0, 0.5],
              711: [0, 0.62847, 0, 0, 0.5],
              713: [0, 0.56778, 0, 0, 0.5],
              714: [0, 0.69444, 0, 0, 0.5],
              715: [0, 0.69444, 0, 0, 0.5],
              728: [0, 0.69444, 0, 0, 0.5],
              729: [0, 0.66786, 0, 0, 0.27778],
              730: [0, 0.69444, 0, 0, 0.75],
              732: [0, 0.66786, 0, 0, 0.5],
              733: [0, 0.69444, 0, 0, 0.5],
              915: [0, 0.68333, 0, 0, 0.625],
              916: [0, 0.68333, 0, 0, 0.83334],
              920: [0, 0.68333, 0, 0, 0.77778],
              923: [0, 0.68333, 0, 0, 0.69445],
              926: [0, 0.68333, 0, 0, 0.66667],
              928: [0, 0.68333, 0, 0, 0.75],
              931: [0, 0.68333, 0, 0, 0.72222],
              933: [0, 0.68333, 0, 0, 0.77778],
              934: [0, 0.68333, 0, 0, 0.72222],
              936: [0, 0.68333, 0, 0, 0.77778],
              937: [0, 0.68333, 0, 0, 0.72222],
              8211: [0, 0.43056, 0.02778, 0, 0.5],
              8212: [0, 0.43056, 0.02778, 0, 1],
              8216: [0, 0.69444, 0, 0, 0.27778],
              8217: [0, 0.69444, 0, 0, 0.27778],
              8220: [0, 0.69444, 0, 0, 0.5],
              8221: [0, 0.69444, 0, 0, 0.5],
              8224: [0.19444, 0.69444, 0, 0, 0.44445],
              8225: [0.19444, 0.69444, 0, 0, 0.44445],
              8230: [0, 0.123, 0, 0, 1.172],
              8242: [0, 0.55556, 0, 0, 0.275],
              8407: [0, 0.71444, 0.15382, 0, 0.5],
              8463: [0, 0.68889, 0, 0, 0.54028],
              8465: [0, 0.69444, 0, 0, 0.72222],
              8467: [0, 0.69444, 0, 0.11111, 0.41667],
              8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
              8476: [0, 0.69444, 0, 0, 0.72222],
              8501: [0, 0.69444, 0, 0, 0.61111],
              8592: [-0.13313, 0.36687, 0, 0, 1],
              8593: [0.19444, 0.69444, 0, 0, 0.5],
              8594: [-0.13313, 0.36687, 0, 0, 1],
              8595: [0.19444, 0.69444, 0, 0, 0.5],
              8596: [-0.13313, 0.36687, 0, 0, 1],
              8597: [0.25, 0.75, 0, 0, 0.5],
              8598: [0.19444, 0.69444, 0, 0, 1],
              8599: [0.19444, 0.69444, 0, 0, 1],
              8600: [0.19444, 0.69444, 0, 0, 1],
              8601: [0.19444, 0.69444, 0, 0, 1],
              8614: [0.011, 0.511, 0, 0, 1],
              8617: [0.011, 0.511, 0, 0, 1.126],
              8618: [0.011, 0.511, 0, 0, 1.126],
              8636: [-0.13313, 0.36687, 0, 0, 1],
              8637: [-0.13313, 0.36687, 0, 0, 1],
              8640: [-0.13313, 0.36687, 0, 0, 1],
              8641: [-0.13313, 0.36687, 0, 0, 1],
              8652: [0.011, 0.671, 0, 0, 1],
              8656: [-0.13313, 0.36687, 0, 0, 1],
              8657: [0.19444, 0.69444, 0, 0, 0.61111],
              8658: [-0.13313, 0.36687, 0, 0, 1],
              8659: [0.19444, 0.69444, 0, 0, 0.61111],
              8660: [-0.13313, 0.36687, 0, 0, 1],
              8661: [0.25, 0.75, 0, 0, 0.61111],
              8704: [0, 0.69444, 0, 0, 0.55556],
              8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
              8707: [0, 0.69444, 0, 0, 0.55556],
              8709: [0.05556, 0.75, 0, 0, 0.5],
              8711: [0, 0.68333, 0, 0, 0.83334],
              8712: [0.0391, 0.5391, 0, 0, 0.66667],
              8715: [0.0391, 0.5391, 0, 0, 0.66667],
              8722: [0.08333, 0.58333, 0, 0, 0.77778],
              8723: [0.08333, 0.58333, 0, 0, 0.77778],
              8725: [0.25, 0.75, 0, 0, 0.5],
              8726: [0.25, 0.75, 0, 0, 0.5],
              8727: [-0.03472, 0.46528, 0, 0, 0.5],
              8728: [-0.05555, 0.44445, 0, 0, 0.5],
              8729: [-0.05555, 0.44445, 0, 0, 0.5],
              8730: [0.2, 0.8, 0, 0, 0.83334],
              8733: [0, 0.43056, 0, 0, 0.77778],
              8734: [0, 0.43056, 0, 0, 1],
              8736: [0, 0.69224, 0, 0, 0.72222],
              8739: [0.25, 0.75, 0, 0, 0.27778],
              8741: [0.25, 0.75, 0, 0, 0.5],
              8743: [0, 0.55556, 0, 0, 0.66667],
              8744: [0, 0.55556, 0, 0, 0.66667],
              8745: [0, 0.55556, 0, 0, 0.66667],
              8746: [0, 0.55556, 0, 0, 0.66667],
              8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
              8764: [-0.13313, 0.36687, 0, 0, 0.77778],
              8768: [0.19444, 0.69444, 0, 0, 0.27778],
              8771: [-0.03625, 0.46375, 0, 0, 0.77778],
              8773: [-0.022, 0.589, 0, 0, 0.778],
              8776: [-0.01688, 0.48312, 0, 0, 0.77778],
              8781: [-0.03625, 0.46375, 0, 0, 0.77778],
              8784: [-0.133, 0.673, 0, 0, 0.778],
              8801: [-0.03625, 0.46375, 0, 0, 0.77778],
              8804: [0.13597, 0.63597, 0, 0, 0.77778],
              8805: [0.13597, 0.63597, 0, 0, 0.77778],
              8810: [0.0391, 0.5391, 0, 0, 1],
              8811: [0.0391, 0.5391, 0, 0, 1],
              8826: [0.0391, 0.5391, 0, 0, 0.77778],
              8827: [0.0391, 0.5391, 0, 0, 0.77778],
              8834: [0.0391, 0.5391, 0, 0, 0.77778],
              8835: [0.0391, 0.5391, 0, 0, 0.77778],
              8838: [0.13597, 0.63597, 0, 0, 0.77778],
              8839: [0.13597, 0.63597, 0, 0, 0.77778],
              8846: [0, 0.55556, 0, 0, 0.66667],
              8849: [0.13597, 0.63597, 0, 0, 0.77778],
              8850: [0.13597, 0.63597, 0, 0, 0.77778],
              8851: [0, 0.55556, 0, 0, 0.66667],
              8852: [0, 0.55556, 0, 0, 0.66667],
              8853: [0.08333, 0.58333, 0, 0, 0.77778],
              8854: [0.08333, 0.58333, 0, 0, 0.77778],
              8855: [0.08333, 0.58333, 0, 0, 0.77778],
              8856: [0.08333, 0.58333, 0, 0, 0.77778],
              8857: [0.08333, 0.58333, 0, 0, 0.77778],
              8866: [0, 0.69444, 0, 0, 0.61111],
              8867: [0, 0.69444, 0, 0, 0.61111],
              8868: [0, 0.69444, 0, 0, 0.77778],
              8869: [0, 0.69444, 0, 0, 0.77778],
              8872: [0.249, 0.75, 0, 0, 0.867],
              8900: [-0.05555, 0.44445, 0, 0, 0.5],
              8901: [-0.05555, 0.44445, 0, 0, 0.27778],
              8902: [-0.03472, 0.46528, 0, 0, 0.5],
              8904: [5e-3, 0.505, 0, 0, 0.9],
              8942: [0.03, 0.903, 0, 0, 0.278],
              8943: [-0.19, 0.313, 0, 0, 1.172],
              8945: [-0.1, 0.823, 0, 0, 1.282],
              8968: [0.25, 0.75, 0, 0, 0.44445],
              8969: [0.25, 0.75, 0, 0, 0.44445],
              8970: [0.25, 0.75, 0, 0, 0.44445],
              8971: [0.25, 0.75, 0, 0, 0.44445],
              8994: [-0.14236, 0.35764, 0, 0, 1],
              8995: [-0.14236, 0.35764, 0, 0, 1],
              9136: [0.244, 0.744, 0, 0, 0.412],
              9137: [0.244, 0.745, 0, 0, 0.412],
              9651: [0.19444, 0.69444, 0, 0, 0.88889],
              9657: [-0.03472, 0.46528, 0, 0, 0.5],
              9661: [0.19444, 0.69444, 0, 0, 0.88889],
              9667: [-0.03472, 0.46528, 0, 0, 0.5],
              9711: [0.19444, 0.69444, 0, 0, 1],
              9824: [0.12963, 0.69444, 0, 0, 0.77778],
              9825: [0.12963, 0.69444, 0, 0, 0.77778],
              9826: [0.12963, 0.69444, 0, 0, 0.77778],
              9827: [0.12963, 0.69444, 0, 0, 0.77778],
              9837: [0, 0.75, 0, 0, 0.38889],
              9838: [0.19444, 0.69444, 0, 0, 0.38889],
              9839: [0.19444, 0.69444, 0, 0, 0.38889],
              10216: [0.25, 0.75, 0, 0, 0.38889],
              10217: [0.25, 0.75, 0, 0, 0.38889],
              10222: [0.244, 0.744, 0, 0, 0.412],
              10223: [0.244, 0.745, 0, 0, 0.412],
              10229: [0.011, 0.511, 0, 0, 1.609],
              10230: [0.011, 0.511, 0, 0, 1.638],
              10231: [0.011, 0.511, 0, 0, 1.859],
              10232: [0.024, 0.525, 0, 0, 1.609],
              10233: [0.024, 0.525, 0, 0, 1.638],
              10234: [0.024, 0.525, 0, 0, 1.858],
              10236: [0.011, 0.511, 0, 0, 1.638],
              10815: [0, 0.68333, 0, 0, 0.75],
              10927: [0.13597, 0.63597, 0, 0, 0.77778],
              10928: [0.13597, 0.63597, 0, 0, 0.77778],
              57376: [0.19444, 0.69444, 0, 0, 0]
            },
            "Math-BoldItalic": {
              32: [0, 0, 0, 0, 0.25],
              48: [0, 0.44444, 0, 0, 0.575],
              49: [0, 0.44444, 0, 0, 0.575],
              50: [0, 0.44444, 0, 0, 0.575],
              51: [0.19444, 0.44444, 0, 0, 0.575],
              52: [0.19444, 0.44444, 0, 0, 0.575],
              53: [0.19444, 0.44444, 0, 0, 0.575],
              54: [0, 0.64444, 0, 0, 0.575],
              55: [0.19444, 0.44444, 0, 0, 0.575],
              56: [0, 0.64444, 0, 0, 0.575],
              57: [0.19444, 0.44444, 0, 0, 0.575],
              65: [0, 0.68611, 0, 0, 0.86944],
              66: [0, 0.68611, 0.04835, 0, 0.8664],
              67: [0, 0.68611, 0.06979, 0, 0.81694],
              68: [0, 0.68611, 0.03194, 0, 0.93812],
              69: [0, 0.68611, 0.05451, 0, 0.81007],
              70: [0, 0.68611, 0.15972, 0, 0.68889],
              71: [0, 0.68611, 0, 0, 0.88673],
              72: [0, 0.68611, 0.08229, 0, 0.98229],
              73: [0, 0.68611, 0.07778, 0, 0.51111],
              74: [0, 0.68611, 0.10069, 0, 0.63125],
              75: [0, 0.68611, 0.06979, 0, 0.97118],
              76: [0, 0.68611, 0, 0, 0.75555],
              77: [0, 0.68611, 0.11424, 0, 1.14201],
              78: [0, 0.68611, 0.11424, 0, 0.95034],
              79: [0, 0.68611, 0.03194, 0, 0.83666],
              80: [0, 0.68611, 0.15972, 0, 0.72309],
              81: [0.19444, 0.68611, 0, 0, 0.86861],
              82: [0, 0.68611, 421e-5, 0, 0.87235],
              83: [0, 0.68611, 0.05382, 0, 0.69271],
              84: [0, 0.68611, 0.15972, 0, 0.63663],
              85: [0, 0.68611, 0.11424, 0, 0.80027],
              86: [0, 0.68611, 0.25555, 0, 0.67778],
              87: [0, 0.68611, 0.15972, 0, 1.09305],
              88: [0, 0.68611, 0.07778, 0, 0.94722],
              89: [0, 0.68611, 0.25555, 0, 0.67458],
              90: [0, 0.68611, 0.06979, 0, 0.77257],
              97: [0, 0.44444, 0, 0, 0.63287],
              98: [0, 0.69444, 0, 0, 0.52083],
              99: [0, 0.44444, 0, 0, 0.51342],
              100: [0, 0.69444, 0, 0, 0.60972],
              101: [0, 0.44444, 0, 0, 0.55361],
              102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
              103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
              104: [0, 0.69444, 0, 0, 0.66759],
              105: [0, 0.69326, 0, 0, 0.4048],
              106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
              107: [0, 0.69444, 0.01852, 0, 0.6037],
              108: [0, 0.69444, 88e-4, 0, 0.34815],
              109: [0, 0.44444, 0, 0, 1.0324],
              110: [0, 0.44444, 0, 0, 0.71296],
              111: [0, 0.44444, 0, 0, 0.58472],
              112: [0.19444, 0.44444, 0, 0, 0.60092],
              113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
              114: [0, 0.44444, 0.03194, 0, 0.5287],
              115: [0, 0.44444, 0, 0, 0.53125],
              116: [0, 0.63492, 0, 0, 0.41528],
              117: [0, 0.44444, 0, 0, 0.68102],
              118: [0, 0.44444, 0.03704, 0, 0.56666],
              119: [0, 0.44444, 0.02778, 0, 0.83148],
              120: [0, 0.44444, 0, 0, 0.65903],
              121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
              122: [0, 0.44444, 0.04213, 0, 0.55509],
              160: [0, 0, 0, 0, 0.25],
              915: [0, 0.68611, 0.15972, 0, 0.65694],
              916: [0, 0.68611, 0, 0, 0.95833],
              920: [0, 0.68611, 0.03194, 0, 0.86722],
              923: [0, 0.68611, 0, 0, 0.80555],
              926: [0, 0.68611, 0.07458, 0, 0.84125],
              928: [0, 0.68611, 0.08229, 0, 0.98229],
              931: [0, 0.68611, 0.05451, 0, 0.88507],
              933: [0, 0.68611, 0.15972, 0, 0.67083],
              934: [0, 0.68611, 0, 0, 0.76666],
              936: [0, 0.68611, 0.11653, 0, 0.71402],
              937: [0, 0.68611, 0.04835, 0, 0.8789],
              945: [0, 0.44444, 0, 0, 0.76064],
              946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
              947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
              948: [0, 0.69444, 0.03819, 0, 0.52222],
              949: [0, 0.44444, 0, 0, 0.52882],
              950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
              951: [0.19444, 0.44444, 0.03704, 0, 0.6],
              952: [0, 0.69444, 0.03194, 0, 0.5618],
              953: [0, 0.44444, 0, 0, 0.41204],
              954: [0, 0.44444, 0, 0, 0.66759],
              955: [0, 0.69444, 0, 0, 0.67083],
              956: [0.19444, 0.44444, 0, 0, 0.70787],
              957: [0, 0.44444, 0.06898, 0, 0.57685],
              958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
              959: [0, 0.44444, 0, 0, 0.58472],
              960: [0, 0.44444, 0.03704, 0, 0.68241],
              961: [0.19444, 0.44444, 0, 0, 0.6118],
              962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
              963: [0, 0.44444, 0.03704, 0, 0.68588],
              964: [0, 0.44444, 0.13472, 0, 0.52083],
              965: [0, 0.44444, 0.03704, 0, 0.63055],
              966: [0.19444, 0.44444, 0, 0, 0.74722],
              967: [0.19444, 0.44444, 0, 0, 0.71805],
              968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
              969: [0, 0.44444, 0.03704, 0, 0.71782],
              977: [0, 0.69444, 0, 0, 0.69155],
              981: [0.19444, 0.69444, 0, 0, 0.7125],
              982: [0, 0.44444, 0.03194, 0, 0.975],
              1009: [0.19444, 0.44444, 0, 0, 0.6118],
              1013: [0, 0.44444, 0, 0, 0.48333],
              57649: [0, 0.44444, 0, 0, 0.39352],
              57911: [0.19444, 0.44444, 0, 0, 0.43889]
            },
            "Math-Italic": {
              32: [0, 0, 0, 0, 0.25],
              48: [0, 0.43056, 0, 0, 0.5],
              49: [0, 0.43056, 0, 0, 0.5],
              50: [0, 0.43056, 0, 0, 0.5],
              51: [0.19444, 0.43056, 0, 0, 0.5],
              52: [0.19444, 0.43056, 0, 0, 0.5],
              53: [0.19444, 0.43056, 0, 0, 0.5],
              54: [0, 0.64444, 0, 0, 0.5],
              55: [0.19444, 0.43056, 0, 0, 0.5],
              56: [0, 0.64444, 0, 0, 0.5],
              57: [0.19444, 0.43056, 0, 0, 0.5],
              65: [0, 0.68333, 0, 0.13889, 0.75],
              66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
              67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
              68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
              69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
              70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
              71: [0, 0.68333, 0, 0.08334, 0.78625],
              72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
              73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
              74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
              75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
              76: [0, 0.68333, 0, 0.02778, 0.68056],
              77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
              78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
              79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
              80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
              81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
              82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
              83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
              84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
              85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
              86: [0, 0.68333, 0.22222, 0, 0.58333],
              87: [0, 0.68333, 0.13889, 0, 0.94445],
              88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
              89: [0, 0.68333, 0.22222, 0, 0.58056],
              90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
              97: [0, 0.43056, 0, 0, 0.52859],
              98: [0, 0.69444, 0, 0, 0.42917],
              99: [0, 0.43056, 0, 0.05556, 0.43276],
              100: [0, 0.69444, 0, 0.16667, 0.52049],
              101: [0, 0.43056, 0, 0.05556, 0.46563],
              102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
              103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
              104: [0, 0.69444, 0, 0, 0.57616],
              105: [0, 0.65952, 0, 0, 0.34451],
              106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
              107: [0, 0.69444, 0.03148, 0, 0.5206],
              108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
              109: [0, 0.43056, 0, 0, 0.87801],
              110: [0, 0.43056, 0, 0, 0.60023],
              111: [0, 0.43056, 0, 0.05556, 0.48472],
              112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
              113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
              114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
              115: [0, 0.43056, 0, 0.05556, 0.46875],
              116: [0, 0.61508, 0, 0.08334, 0.36111],
              117: [0, 0.43056, 0, 0.02778, 0.57246],
              118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
              119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
              120: [0, 0.43056, 0, 0.02778, 0.57153],
              121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
              122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
              160: [0, 0, 0, 0, 0.25],
              915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
              916: [0, 0.68333, 0, 0.16667, 0.83334],
              920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
              923: [0, 0.68333, 0, 0.16667, 0.69445],
              926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
              928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
              931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
              933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
              934: [0, 0.68333, 0, 0.08334, 0.66667],
              936: [0, 0.68333, 0.11, 0.05556, 0.61222],
              937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
              945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
              946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
              947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
              948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
              949: [0, 0.43056, 0, 0.08334, 0.46632],
              950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
              951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
              952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
              953: [0, 0.43056, 0, 0.05556, 0.35394],
              954: [0, 0.43056, 0, 0, 0.57616],
              955: [0, 0.69444, 0, 0, 0.58334],
              956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
              957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
              958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
              959: [0, 0.43056, 0, 0.05556, 0.48472],
              960: [0, 0.43056, 0.03588, 0, 0.57003],
              961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
              962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
              963: [0, 0.43056, 0.03588, 0, 0.57141],
              964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
              965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
              966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
              967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
              968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
              969: [0, 0.43056, 0.03588, 0, 0.62245],
              977: [0, 0.69444, 0, 0.08334, 0.59144],
              981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
              982: [0, 0.43056, 0.02778, 0, 0.82813],
              1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
              1013: [0, 0.43056, 0, 0.05556, 0.4059],
              57649: [0, 0.43056, 0, 0.02778, 0.32246],
              57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
            },
            "SansSerif-Bold": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0, 0, 0.36667],
              34: [0, 0.69444, 0, 0, 0.55834],
              35: [0.19444, 0.69444, 0, 0, 0.91667],
              36: [0.05556, 0.75, 0, 0, 0.55],
              37: [0.05556, 0.75, 0, 0, 1.02912],
              38: [0, 0.69444, 0, 0, 0.83056],
              39: [0, 0.69444, 0, 0, 0.30556],
              40: [0.25, 0.75, 0, 0, 0.42778],
              41: [0.25, 0.75, 0, 0, 0.42778],
              42: [0, 0.75, 0, 0, 0.55],
              43: [0.11667, 0.61667, 0, 0, 0.85556],
              44: [0.10556, 0.13056, 0, 0, 0.30556],
              45: [0, 0.45833, 0, 0, 0.36667],
              46: [0, 0.13056, 0, 0, 0.30556],
              47: [0.25, 0.75, 0, 0, 0.55],
              48: [0, 0.69444, 0, 0, 0.55],
              49: [0, 0.69444, 0, 0, 0.55],
              50: [0, 0.69444, 0, 0, 0.55],
              51: [0, 0.69444, 0, 0, 0.55],
              52: [0, 0.69444, 0, 0, 0.55],
              53: [0, 0.69444, 0, 0, 0.55],
              54: [0, 0.69444, 0, 0, 0.55],
              55: [0, 0.69444, 0, 0, 0.55],
              56: [0, 0.69444, 0, 0, 0.55],
              57: [0, 0.69444, 0, 0, 0.55],
              58: [0, 0.45833, 0, 0, 0.30556],
              59: [0.10556, 0.45833, 0, 0, 0.30556],
              61: [-0.09375, 0.40625, 0, 0, 0.85556],
              63: [0, 0.69444, 0, 0, 0.51945],
              64: [0, 0.69444, 0, 0, 0.73334],
              65: [0, 0.69444, 0, 0, 0.73334],
              66: [0, 0.69444, 0, 0, 0.73334],
              67: [0, 0.69444, 0, 0, 0.70278],
              68: [0, 0.69444, 0, 0, 0.79445],
              69: [0, 0.69444, 0, 0, 0.64167],
              70: [0, 0.69444, 0, 0, 0.61111],
              71: [0, 0.69444, 0, 0, 0.73334],
              72: [0, 0.69444, 0, 0, 0.79445],
              73: [0, 0.69444, 0, 0, 0.33056],
              74: [0, 0.69444, 0, 0, 0.51945],
              75: [0, 0.69444, 0, 0, 0.76389],
              76: [0, 0.69444, 0, 0, 0.58056],
              77: [0, 0.69444, 0, 0, 0.97778],
              78: [0, 0.69444, 0, 0, 0.79445],
              79: [0, 0.69444, 0, 0, 0.79445],
              80: [0, 0.69444, 0, 0, 0.70278],
              81: [0.10556, 0.69444, 0, 0, 0.79445],
              82: [0, 0.69444, 0, 0, 0.70278],
              83: [0, 0.69444, 0, 0, 0.61111],
              84: [0, 0.69444, 0, 0, 0.73334],
              85: [0, 0.69444, 0, 0, 0.76389],
              86: [0, 0.69444, 0.01528, 0, 0.73334],
              87: [0, 0.69444, 0.01528, 0, 1.03889],
              88: [0, 0.69444, 0, 0, 0.73334],
              89: [0, 0.69444, 0.0275, 0, 0.73334],
              90: [0, 0.69444, 0, 0, 0.67223],
              91: [0.25, 0.75, 0, 0, 0.34306],
              93: [0.25, 0.75, 0, 0, 0.34306],
              94: [0, 0.69444, 0, 0, 0.55],
              95: [0.35, 0.10833, 0.03056, 0, 0.55],
              97: [0, 0.45833, 0, 0, 0.525],
              98: [0, 0.69444, 0, 0, 0.56111],
              99: [0, 0.45833, 0, 0, 0.48889],
              100: [0, 0.69444, 0, 0, 0.56111],
              101: [0, 0.45833, 0, 0, 0.51111],
              102: [0, 0.69444, 0.07639, 0, 0.33611],
              103: [0.19444, 0.45833, 0.01528, 0, 0.55],
              104: [0, 0.69444, 0, 0, 0.56111],
              105: [0, 0.69444, 0, 0, 0.25556],
              106: [0.19444, 0.69444, 0, 0, 0.28611],
              107: [0, 0.69444, 0, 0, 0.53056],
              108: [0, 0.69444, 0, 0, 0.25556],
              109: [0, 0.45833, 0, 0, 0.86667],
              110: [0, 0.45833, 0, 0, 0.56111],
              111: [0, 0.45833, 0, 0, 0.55],
              112: [0.19444, 0.45833, 0, 0, 0.56111],
              113: [0.19444, 0.45833, 0, 0, 0.56111],
              114: [0, 0.45833, 0.01528, 0, 0.37222],
              115: [0, 0.45833, 0, 0, 0.42167],
              116: [0, 0.58929, 0, 0, 0.40417],
              117: [0, 0.45833, 0, 0, 0.56111],
              118: [0, 0.45833, 0.01528, 0, 0.5],
              119: [0, 0.45833, 0.01528, 0, 0.74445],
              120: [0, 0.45833, 0, 0, 0.5],
              121: [0.19444, 0.45833, 0.01528, 0, 0.5],
              122: [0, 0.45833, 0, 0, 0.47639],
              126: [0.35, 0.34444, 0, 0, 0.55],
              160: [0, 0, 0, 0, 0.25],
              168: [0, 0.69444, 0, 0, 0.55],
              176: [0, 0.69444, 0, 0, 0.73334],
              180: [0, 0.69444, 0, 0, 0.55],
              184: [0.17014, 0, 0, 0, 0.48889],
              305: [0, 0.45833, 0, 0, 0.25556],
              567: [0.19444, 0.45833, 0, 0, 0.28611],
              710: [0, 0.69444, 0, 0, 0.55],
              711: [0, 0.63542, 0, 0, 0.55],
              713: [0, 0.63778, 0, 0, 0.55],
              728: [0, 0.69444, 0, 0, 0.55],
              729: [0, 0.69444, 0, 0, 0.30556],
              730: [0, 0.69444, 0, 0, 0.73334],
              732: [0, 0.69444, 0, 0, 0.55],
              733: [0, 0.69444, 0, 0, 0.55],
              915: [0, 0.69444, 0, 0, 0.58056],
              916: [0, 0.69444, 0, 0, 0.91667],
              920: [0, 0.69444, 0, 0, 0.85556],
              923: [0, 0.69444, 0, 0, 0.67223],
              926: [0, 0.69444, 0, 0, 0.73334],
              928: [0, 0.69444, 0, 0, 0.79445],
              931: [0, 0.69444, 0, 0, 0.79445],
              933: [0, 0.69444, 0, 0, 0.85556],
              934: [0, 0.69444, 0, 0, 0.79445],
              936: [0, 0.69444, 0, 0, 0.85556],
              937: [0, 0.69444, 0, 0, 0.79445],
              8211: [0, 0.45833, 0.03056, 0, 0.55],
              8212: [0, 0.45833, 0.03056, 0, 1.10001],
              8216: [0, 0.69444, 0, 0, 0.30556],
              8217: [0, 0.69444, 0, 0, 0.30556],
              8220: [0, 0.69444, 0, 0, 0.55834],
              8221: [0, 0.69444, 0, 0, 0.55834]
            },
            "SansSerif-Italic": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0.05733, 0, 0.31945],
              34: [0, 0.69444, 316e-5, 0, 0.5],
              35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
              36: [0.05556, 0.75, 0.11156, 0, 0.5],
              37: [0.05556, 0.75, 0.03126, 0, 0.83334],
              38: [0, 0.69444, 0.03058, 0, 0.75834],
              39: [0, 0.69444, 0.07816, 0, 0.27778],
              40: [0.25, 0.75, 0.13164, 0, 0.38889],
              41: [0.25, 0.75, 0.02536, 0, 0.38889],
              42: [0, 0.75, 0.11775, 0, 0.5],
              43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
              44: [0.125, 0.08333, 0, 0, 0.27778],
              45: [0, 0.44444, 0.01946, 0, 0.33333],
              46: [0, 0.08333, 0, 0, 0.27778],
              47: [0.25, 0.75, 0.13164, 0, 0.5],
              48: [0, 0.65556, 0.11156, 0, 0.5],
              49: [0, 0.65556, 0.11156, 0, 0.5],
              50: [0, 0.65556, 0.11156, 0, 0.5],
              51: [0, 0.65556, 0.11156, 0, 0.5],
              52: [0, 0.65556, 0.11156, 0, 0.5],
              53: [0, 0.65556, 0.11156, 0, 0.5],
              54: [0, 0.65556, 0.11156, 0, 0.5],
              55: [0, 0.65556, 0.11156, 0, 0.5],
              56: [0, 0.65556, 0.11156, 0, 0.5],
              57: [0, 0.65556, 0.11156, 0, 0.5],
              58: [0, 0.44444, 0.02502, 0, 0.27778],
              59: [0.125, 0.44444, 0.02502, 0, 0.27778],
              61: [-0.13, 0.37, 0.05087, 0, 0.77778],
              63: [0, 0.69444, 0.11809, 0, 0.47222],
              64: [0, 0.69444, 0.07555, 0, 0.66667],
              65: [0, 0.69444, 0, 0, 0.66667],
              66: [0, 0.69444, 0.08293, 0, 0.66667],
              67: [0, 0.69444, 0.11983, 0, 0.63889],
              68: [0, 0.69444, 0.07555, 0, 0.72223],
              69: [0, 0.69444, 0.11983, 0, 0.59722],
              70: [0, 0.69444, 0.13372, 0, 0.56945],
              71: [0, 0.69444, 0.11983, 0, 0.66667],
              72: [0, 0.69444, 0.08094, 0, 0.70834],
              73: [0, 0.69444, 0.13372, 0, 0.27778],
              74: [0, 0.69444, 0.08094, 0, 0.47222],
              75: [0, 0.69444, 0.11983, 0, 0.69445],
              76: [0, 0.69444, 0, 0, 0.54167],
              77: [0, 0.69444, 0.08094, 0, 0.875],
              78: [0, 0.69444, 0.08094, 0, 0.70834],
              79: [0, 0.69444, 0.07555, 0, 0.73611],
              80: [0, 0.69444, 0.08293, 0, 0.63889],
              81: [0.125, 0.69444, 0.07555, 0, 0.73611],
              82: [0, 0.69444, 0.08293, 0, 0.64584],
              83: [0, 0.69444, 0.09205, 0, 0.55556],
              84: [0, 0.69444, 0.13372, 0, 0.68056],
              85: [0, 0.69444, 0.08094, 0, 0.6875],
              86: [0, 0.69444, 0.1615, 0, 0.66667],
              87: [0, 0.69444, 0.1615, 0, 0.94445],
              88: [0, 0.69444, 0.13372, 0, 0.66667],
              89: [0, 0.69444, 0.17261, 0, 0.66667],
              90: [0, 0.69444, 0.11983, 0, 0.61111],
              91: [0.25, 0.75, 0.15942, 0, 0.28889],
              93: [0.25, 0.75, 0.08719, 0, 0.28889],
              94: [0, 0.69444, 0.0799, 0, 0.5],
              95: [0.35, 0.09444, 0.08616, 0, 0.5],
              97: [0, 0.44444, 981e-5, 0, 0.48056],
              98: [0, 0.69444, 0.03057, 0, 0.51667],
              99: [0, 0.44444, 0.08336, 0, 0.44445],
              100: [0, 0.69444, 0.09483, 0, 0.51667],
              101: [0, 0.44444, 0.06778, 0, 0.44445],
              102: [0, 0.69444, 0.21705, 0, 0.30556],
              103: [0.19444, 0.44444, 0.10836, 0, 0.5],
              104: [0, 0.69444, 0.01778, 0, 0.51667],
              105: [0, 0.67937, 0.09718, 0, 0.23889],
              106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
              107: [0, 0.69444, 0.08336, 0, 0.48889],
              108: [0, 0.69444, 0.09483, 0, 0.23889],
              109: [0, 0.44444, 0.01778, 0, 0.79445],
              110: [0, 0.44444, 0.01778, 0, 0.51667],
              111: [0, 0.44444, 0.06613, 0, 0.5],
              112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
              113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
              114: [0, 0.44444, 0.10836, 0, 0.34167],
              115: [0, 0.44444, 0.0778, 0, 0.38333],
              116: [0, 0.57143, 0.07225, 0, 0.36111],
              117: [0, 0.44444, 0.04169, 0, 0.51667],
              118: [0, 0.44444, 0.10836, 0, 0.46111],
              119: [0, 0.44444, 0.10836, 0, 0.68334],
              120: [0, 0.44444, 0.09169, 0, 0.46111],
              121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
              122: [0, 0.44444, 0.08752, 0, 0.43472],
              126: [0.35, 0.32659, 0.08826, 0, 0.5],
              160: [0, 0, 0, 0, 0.25],
              168: [0, 0.67937, 0.06385, 0, 0.5],
              176: [0, 0.69444, 0, 0, 0.73752],
              184: [0.17014, 0, 0, 0, 0.44445],
              305: [0, 0.44444, 0.04169, 0, 0.23889],
              567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
              710: [0, 0.69444, 0.0799, 0, 0.5],
              711: [0, 0.63194, 0.08432, 0, 0.5],
              713: [0, 0.60889, 0.08776, 0, 0.5],
              714: [0, 0.69444, 0.09205, 0, 0.5],
              715: [0, 0.69444, 0, 0, 0.5],
              728: [0, 0.69444, 0.09483, 0, 0.5],
              729: [0, 0.67937, 0.07774, 0, 0.27778],
              730: [0, 0.69444, 0, 0, 0.73752],
              732: [0, 0.67659, 0.08826, 0, 0.5],
              733: [0, 0.69444, 0.09205, 0, 0.5],
              915: [0, 0.69444, 0.13372, 0, 0.54167],
              916: [0, 0.69444, 0, 0, 0.83334],
              920: [0, 0.69444, 0.07555, 0, 0.77778],
              923: [0, 0.69444, 0, 0, 0.61111],
              926: [0, 0.69444, 0.12816, 0, 0.66667],
              928: [0, 0.69444, 0.08094, 0, 0.70834],
              931: [0, 0.69444, 0.11983, 0, 0.72222],
              933: [0, 0.69444, 0.09031, 0, 0.77778],
              934: [0, 0.69444, 0.04603, 0, 0.72222],
              936: [0, 0.69444, 0.09031, 0, 0.77778],
              937: [0, 0.69444, 0.08293, 0, 0.72222],
              8211: [0, 0.44444, 0.08616, 0, 0.5],
              8212: [0, 0.44444, 0.08616, 0, 1],
              8216: [0, 0.69444, 0.07816, 0, 0.27778],
              8217: [0, 0.69444, 0.07816, 0, 0.27778],
              8220: [0, 0.69444, 0.14205, 0, 0.5],
              8221: [0, 0.69444, 316e-5, 0, 0.5]
            },
            "SansSerif-Regular": {
              32: [0, 0, 0, 0, 0.25],
              33: [0, 0.69444, 0, 0, 0.31945],
              34: [0, 0.69444, 0, 0, 0.5],
              35: [0.19444, 0.69444, 0, 0, 0.83334],
              36: [0.05556, 0.75, 0, 0, 0.5],
              37: [0.05556, 0.75, 0, 0, 0.83334],
              38: [0, 0.69444, 0, 0, 0.75834],
              39: [0, 0.69444, 0, 0, 0.27778],
              40: [0.25, 0.75, 0, 0, 0.38889],
              41: [0.25, 0.75, 0, 0, 0.38889],
              42: [0, 0.75, 0, 0, 0.5],
              43: [0.08333, 0.58333, 0, 0, 0.77778],
              44: [0.125, 0.08333, 0, 0, 0.27778],
              45: [0, 0.44444, 0, 0, 0.33333],
              46: [0, 0.08333, 0, 0, 0.27778],
              47: [0.25, 0.75, 0, 0, 0.5],
              48: [0, 0.65556, 0, 0, 0.5],
              49: [0, 0.65556, 0, 0, 0.5],
              50: [0, 0.65556, 0, 0, 0.5],
              51: [0, 0.65556, 0, 0, 0.5],
              52: [0, 0.65556, 0, 0, 0.5],
              53: [0, 0.65556, 0, 0, 0.5],
              54: [0, 0.65556, 0, 0, 0.5],
              55: [0, 0.65556, 0, 0, 0.5],
              56: [0, 0.65556, 0, 0, 0.5],
              57: [0, 0.65556, 0, 0, 0.5],
              58: [0, 0.44444, 0, 0, 0.27778],
              59: [0.125, 0.44444, 0, 0, 0.27778],
              61: [-0.13, 0.37, 0, 0, 0.77778],
              63: [0, 0.69444, 0, 0, 0.47222],
              64: [0, 0.69444, 0, 0, 0.66667],
              65: [0, 0.69444, 0, 0, 0.66667],
              66: [0, 0.69444, 0, 0, 0.66667],
              67: [0, 0.69444, 0, 0, 0.63889],
              68: [0, 0.69444, 0, 0, 0.72223],
              69: [0, 0.69444, 0, 0, 0.59722],
              70: [0, 0.69444, 0, 0, 0.56945],
              71: [0, 0.69444, 0, 0, 0.66667],
              72: [0, 0.69444, 0, 0, 0.70834],
              73: [0, 0.69444, 0, 0, 0.27778],
              74: [0, 0.69444, 0, 0, 0.47222],
              75: [0, 0.69444, 0, 0, 0.69445],
              76: [0, 0.69444, 0, 0, 0.54167],
              77: [0, 0.69444, 0, 0, 0.875],
              78: [0, 0.69444, 0, 0, 0.70834],
              79: [0, 0.69444, 0, 0, 0.73611],
              80: [0, 0.69444, 0, 0, 0.63889],
              81: [0.125, 0.69444, 0, 0, 0.73611],
              82: [0, 0.69444, 0, 0, 0.64584],
              83: [0, 0.69444, 0, 0, 0.55556],
              84: [0, 0.69444, 0, 0, 0.68056],
              85: [0, 0.69444, 0, 0, 0.6875],
              86: [0, 0.69444, 0.01389, 0, 0.66667],
              87: [0, 0.69444, 0.01389, 0, 0.94445],
              88: [0, 0.69444, 0, 0, 0.66667],
              89: [0, 0.69444, 0.025, 0, 0.66667],
              90: [0, 0.69444, 0, 0, 0.61111],
              91: [0.25, 0.75, 0, 0, 0.28889],
              93: [0.25, 0.75, 0, 0, 0.28889],
              94: [0, 0.69444, 0, 0, 0.5],
              95: [0.35, 0.09444, 0.02778, 0, 0.5],
              97: [0, 0.44444, 0, 0, 0.48056],
              98: [0, 0.69444, 0, 0, 0.51667],
              99: [0, 0.44444, 0, 0, 0.44445],
              100: [0, 0.69444, 0, 0, 0.51667],
              101: [0, 0.44444, 0, 0, 0.44445],
              102: [0, 0.69444, 0.06944, 0, 0.30556],
              103: [0.19444, 0.44444, 0.01389, 0, 0.5],
              104: [0, 0.69444, 0, 0, 0.51667],
              105: [0, 0.67937, 0, 0, 0.23889],
              106: [0.19444, 0.67937, 0, 0, 0.26667],
              107: [0, 0.69444, 0, 0, 0.48889],
              108: [0, 0.69444, 0, 0, 0.23889],
              109: [0, 0.44444, 0, 0, 0.79445],
              110: [0, 0.44444, 0, 0, 0.51667],
              111: [0, 0.44444, 0, 0, 0.5],
              112: [0.19444, 0.44444, 0, 0, 0.51667],
              113: [0.19444, 0.44444, 0, 0, 0.51667],
              114: [0, 0.44444, 0.01389, 0, 0.34167],
              115: [0, 0.44444, 0, 0, 0.38333],
              116: [0, 0.57143, 0, 0, 0.36111],
              117: [0, 0.44444, 0, 0, 0.51667],
              118: [0, 0.44444, 0.01389, 0, 0.46111],
              119: [0, 0.44444, 0.01389, 0, 0.68334],
              120: [0, 0.44444, 0, 0, 0.46111],
              121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
              122: [0, 0.44444, 0, 0, 0.43472],
              126: [0.35, 0.32659, 0, 0, 0.5],
              160: [0, 0, 0, 0, 0.25],
              168: [0, 0.67937, 0, 0, 0.5],
              176: [0, 0.69444, 0, 0, 0.66667],
              184: [0.17014, 0, 0, 0, 0.44445],
              305: [0, 0.44444, 0, 0, 0.23889],
              567: [0.19444, 0.44444, 0, 0, 0.26667],
              710: [0, 0.69444, 0, 0, 0.5],
              711: [0, 0.63194, 0, 0, 0.5],
              713: [0, 0.60889, 0, 0, 0.5],
              714: [0, 0.69444, 0, 0, 0.5],
              715: [0, 0.69444, 0, 0, 0.5],
              728: [0, 0.69444, 0, 0, 0.5],
              729: [0, 0.67937, 0, 0, 0.27778],
              730: [0, 0.69444, 0, 0, 0.66667],
              732: [0, 0.67659, 0, 0, 0.5],
              733: [0, 0.69444, 0, 0, 0.5],
              915: [0, 0.69444, 0, 0, 0.54167],
              916: [0, 0.69444, 0, 0, 0.83334],
              920: [0, 0.69444, 0, 0, 0.77778],
              923: [0, 0.69444, 0, 0, 0.61111],
              926: [0, 0.69444, 0, 0, 0.66667],
              928: [0, 0.69444, 0, 0, 0.70834],
              931: [0, 0.69444, 0, 0, 0.72222],
              933: [0, 0.69444, 0, 0, 0.77778],
              934: [0, 0.69444, 0, 0, 0.72222],
              936: [0, 0.69444, 0, 0, 0.77778],
              937: [0, 0.69444, 0, 0, 0.72222],
              8211: [0, 0.44444, 0.02778, 0, 0.5],
              8212: [0, 0.44444, 0.02778, 0, 1],
              8216: [0, 0.69444, 0, 0, 0.27778],
              8217: [0, 0.69444, 0, 0, 0.27778],
              8220: [0, 0.69444, 0, 0, 0.5],
              8221: [0, 0.69444, 0, 0, 0.5]
            },
            "Script-Regular": {
              32: [0, 0, 0, 0, 0.25],
              65: [0, 0.7, 0.22925, 0, 0.80253],
              66: [0, 0.7, 0.04087, 0, 0.90757],
              67: [0, 0.7, 0.1689, 0, 0.66619],
              68: [0, 0.7, 0.09371, 0, 0.77443],
              69: [0, 0.7, 0.18583, 0, 0.56162],
              70: [0, 0.7, 0.13634, 0, 0.89544],
              71: [0, 0.7, 0.17322, 0, 0.60961],
              72: [0, 0.7, 0.29694, 0, 0.96919],
              73: [0, 0.7, 0.19189, 0, 0.80907],
              74: [0.27778, 0.7, 0.19189, 0, 1.05159],
              75: [0, 0.7, 0.31259, 0, 0.91364],
              76: [0, 0.7, 0.19189, 0, 0.87373],
              77: [0, 0.7, 0.15981, 0, 1.08031],
              78: [0, 0.7, 0.3525, 0, 0.9015],
              79: [0, 0.7, 0.08078, 0, 0.73787],
              80: [0, 0.7, 0.08078, 0, 1.01262],
              81: [0, 0.7, 0.03305, 0, 0.88282],
              82: [0, 0.7, 0.06259, 0, 0.85],
              83: [0, 0.7, 0.19189, 0, 0.86767],
              84: [0, 0.7, 0.29087, 0, 0.74697],
              85: [0, 0.7, 0.25815, 0, 0.79996],
              86: [0, 0.7, 0.27523, 0, 0.62204],
              87: [0, 0.7, 0.27523, 0, 0.80532],
              88: [0, 0.7, 0.26006, 0, 0.94445],
              89: [0, 0.7, 0.2939, 0, 0.70961],
              90: [0, 0.7, 0.24037, 0, 0.8212],
              160: [0, 0, 0, 0, 0.25]
            },
            "Size1-Regular": {
              32: [0, 0, 0, 0, 0.25],
              40: [0.35001, 0.85, 0, 0, 0.45834],
              41: [0.35001, 0.85, 0, 0, 0.45834],
              47: [0.35001, 0.85, 0, 0, 0.57778],
              91: [0.35001, 0.85, 0, 0, 0.41667],
              92: [0.35001, 0.85, 0, 0, 0.57778],
              93: [0.35001, 0.85, 0, 0, 0.41667],
              123: [0.35001, 0.85, 0, 0, 0.58334],
              125: [0.35001, 0.85, 0, 0, 0.58334],
              160: [0, 0, 0, 0, 0.25],
              710: [0, 0.72222, 0, 0, 0.55556],
              732: [0, 0.72222, 0, 0, 0.55556],
              770: [0, 0.72222, 0, 0, 0.55556],
              771: [0, 0.72222, 0, 0, 0.55556],
              8214: [-99e-5, 0.601, 0, 0, 0.77778],
              8593: [1e-5, 0.6, 0, 0, 0.66667],
              8595: [1e-5, 0.6, 0, 0, 0.66667],
              8657: [1e-5, 0.6, 0, 0, 0.77778],
              8659: [1e-5, 0.6, 0, 0, 0.77778],
              8719: [0.25001, 0.75, 0, 0, 0.94445],
              8720: [0.25001, 0.75, 0, 0, 0.94445],
              8721: [0.25001, 0.75, 0, 0, 1.05556],
              8730: [0.35001, 0.85, 0, 0, 1],
              8739: [-599e-5, 0.606, 0, 0, 0.33333],
              8741: [-599e-5, 0.606, 0, 0, 0.55556],
              8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
              8748: [0.306, 0.805, 0.19445, 0, 0.47222],
              8749: [0.306, 0.805, 0.19445, 0, 0.47222],
              8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
              8896: [0.25001, 0.75, 0, 0, 0.83334],
              8897: [0.25001, 0.75, 0, 0, 0.83334],
              8898: [0.25001, 0.75, 0, 0, 0.83334],
              8899: [0.25001, 0.75, 0, 0, 0.83334],
              8968: [0.35001, 0.85, 0, 0, 0.47222],
              8969: [0.35001, 0.85, 0, 0, 0.47222],
              8970: [0.35001, 0.85, 0, 0, 0.47222],
              8971: [0.35001, 0.85, 0, 0, 0.47222],
              9168: [-99e-5, 0.601, 0, 0, 0.66667],
              10216: [0.35001, 0.85, 0, 0, 0.47222],
              10217: [0.35001, 0.85, 0, 0, 0.47222],
              10752: [0.25001, 0.75, 0, 0, 1.11111],
              10753: [0.25001, 0.75, 0, 0, 1.11111],
              10754: [0.25001, 0.75, 0, 0, 1.11111],
              10756: [0.25001, 0.75, 0, 0, 0.83334],
              10758: [0.25001, 0.75, 0, 0, 0.83334]
            },
            "Size2-Regular": {
              32: [0, 0, 0, 0, 0.25],
              40: [0.65002, 1.15, 0, 0, 0.59722],
              41: [0.65002, 1.15, 0, 0, 0.59722],
              47: [0.65002, 1.15, 0, 0, 0.81111],
              91: [0.65002, 1.15, 0, 0, 0.47222],
              92: [0.65002, 1.15, 0, 0, 0.81111],
              93: [0.65002, 1.15, 0, 0, 0.47222],
              123: [0.65002, 1.15, 0, 0, 0.66667],
              125: [0.65002, 1.15, 0, 0, 0.66667],
              160: [0, 0, 0, 0, 0.25],
              710: [0, 0.75, 0, 0, 1],
              732: [0, 0.75, 0, 0, 1],
              770: [0, 0.75, 0, 0, 1],
              771: [0, 0.75, 0, 0, 1],
              8719: [0.55001, 1.05, 0, 0, 1.27778],
              8720: [0.55001, 1.05, 0, 0, 1.27778],
              8721: [0.55001, 1.05, 0, 0, 1.44445],
              8730: [0.65002, 1.15, 0, 0, 1],
              8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
              8748: [0.862, 1.36, 0.44445, 0, 0.55556],
              8749: [0.862, 1.36, 0.44445, 0, 0.55556],
              8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
              8896: [0.55001, 1.05, 0, 0, 1.11111],
              8897: [0.55001, 1.05, 0, 0, 1.11111],
              8898: [0.55001, 1.05, 0, 0, 1.11111],
              8899: [0.55001, 1.05, 0, 0, 1.11111],
              8968: [0.65002, 1.15, 0, 0, 0.52778],
              8969: [0.65002, 1.15, 0, 0, 0.52778],
              8970: [0.65002, 1.15, 0, 0, 0.52778],
              8971: [0.65002, 1.15, 0, 0, 0.52778],
              10216: [0.65002, 1.15, 0, 0, 0.61111],
              10217: [0.65002, 1.15, 0, 0, 0.61111],
              10752: [0.55001, 1.05, 0, 0, 1.51112],
              10753: [0.55001, 1.05, 0, 0, 1.51112],
              10754: [0.55001, 1.05, 0, 0, 1.51112],
              10756: [0.55001, 1.05, 0, 0, 1.11111],
              10758: [0.55001, 1.05, 0, 0, 1.11111]
            },
            "Size3-Regular": {
              32: [0, 0, 0, 0, 0.25],
              40: [0.95003, 1.45, 0, 0, 0.73611],
              41: [0.95003, 1.45, 0, 0, 0.73611],
              47: [0.95003, 1.45, 0, 0, 1.04445],
              91: [0.95003, 1.45, 0, 0, 0.52778],
              92: [0.95003, 1.45, 0, 0, 1.04445],
              93: [0.95003, 1.45, 0, 0, 0.52778],
              123: [0.95003, 1.45, 0, 0, 0.75],
              125: [0.95003, 1.45, 0, 0, 0.75],
              160: [0, 0, 0, 0, 0.25],
              710: [0, 0.75, 0, 0, 1.44445],
              732: [0, 0.75, 0, 0, 1.44445],
              770: [0, 0.75, 0, 0, 1.44445],
              771: [0, 0.75, 0, 0, 1.44445],
              8730: [0.95003, 1.45, 0, 0, 1],
              8968: [0.95003, 1.45, 0, 0, 0.58334],
              8969: [0.95003, 1.45, 0, 0, 0.58334],
              8970: [0.95003, 1.45, 0, 0, 0.58334],
              8971: [0.95003, 1.45, 0, 0, 0.58334],
              10216: [0.95003, 1.45, 0, 0, 0.75],
              10217: [0.95003, 1.45, 0, 0, 0.75]
            },
            "Size4-Regular": {
              32: [0, 0, 0, 0, 0.25],
              40: [1.25003, 1.75, 0, 0, 0.79167],
              41: [1.25003, 1.75, 0, 0, 0.79167],
              47: [1.25003, 1.75, 0, 0, 1.27778],
              91: [1.25003, 1.75, 0, 0, 0.58334],
              92: [1.25003, 1.75, 0, 0, 1.27778],
              93: [1.25003, 1.75, 0, 0, 0.58334],
              123: [1.25003, 1.75, 0, 0, 0.80556],
              125: [1.25003, 1.75, 0, 0, 0.80556],
              160: [0, 0, 0, 0, 0.25],
              710: [0, 0.825, 0, 0, 1.8889],
              732: [0, 0.825, 0, 0, 1.8889],
              770: [0, 0.825, 0, 0, 1.8889],
              771: [0, 0.825, 0, 0, 1.8889],
              8730: [1.25003, 1.75, 0, 0, 1],
              8968: [1.25003, 1.75, 0, 0, 0.63889],
              8969: [1.25003, 1.75, 0, 0, 0.63889],
              8970: [1.25003, 1.75, 0, 0, 0.63889],
              8971: [1.25003, 1.75, 0, 0, 0.63889],
              9115: [0.64502, 1.155, 0, 0, 0.875],
              9116: [1e-5, 0.6, 0, 0, 0.875],
              9117: [0.64502, 1.155, 0, 0, 0.875],
              9118: [0.64502, 1.155, 0, 0, 0.875],
              9119: [1e-5, 0.6, 0, 0, 0.875],
              9120: [0.64502, 1.155, 0, 0, 0.875],
              9121: [0.64502, 1.155, 0, 0, 0.66667],
              9122: [-99e-5, 0.601, 0, 0, 0.66667],
              9123: [0.64502, 1.155, 0, 0, 0.66667],
              9124: [0.64502, 1.155, 0, 0, 0.66667],
              9125: [-99e-5, 0.601, 0, 0, 0.66667],
              9126: [0.64502, 1.155, 0, 0, 0.66667],
              9127: [1e-5, 0.9, 0, 0, 0.88889],
              9128: [0.65002, 1.15, 0, 0, 0.88889],
              9129: [0.90001, 0, 0, 0, 0.88889],
              9130: [0, 0.3, 0, 0, 0.88889],
              9131: [1e-5, 0.9, 0, 0, 0.88889],
              9132: [0.65002, 1.15, 0, 0, 0.88889],
              9133: [0.90001, 0, 0, 0, 0.88889],
              9143: [0.88502, 0.915, 0, 0, 1.05556],
              10216: [1.25003, 1.75, 0, 0, 0.80556],
              10217: [1.25003, 1.75, 0, 0, 0.80556],
              57344: [-499e-5, 0.605, 0, 0, 1.05556],
              57345: [-499e-5, 0.605, 0, 0, 1.05556],
              57680: [0, 0.12, 0, 0, 0.45],
              57681: [0, 0.12, 0, 0, 0.45],
              57682: [0, 0.12, 0, 0, 0.45],
              57683: [0, 0.12, 0, 0, 0.45]
            },
            "Typewriter-Regular": {
              32: [0, 0, 0, 0, 0.525],
              33: [0, 0.61111, 0, 0, 0.525],
              34: [0, 0.61111, 0, 0, 0.525],
              35: [0, 0.61111, 0, 0, 0.525],
              36: [0.08333, 0.69444, 0, 0, 0.525],
              37: [0.08333, 0.69444, 0, 0, 0.525],
              38: [0, 0.61111, 0, 0, 0.525],
              39: [0, 0.61111, 0, 0, 0.525],
              40: [0.08333, 0.69444, 0, 0, 0.525],
              41: [0.08333, 0.69444, 0, 0, 0.525],
              42: [0, 0.52083, 0, 0, 0.525],
              43: [-0.08056, 0.53055, 0, 0, 0.525],
              44: [0.13889, 0.125, 0, 0, 0.525],
              45: [-0.08056, 0.53055, 0, 0, 0.525],
              46: [0, 0.125, 0, 0, 0.525],
              47: [0.08333, 0.69444, 0, 0, 0.525],
              48: [0, 0.61111, 0, 0, 0.525],
              49: [0, 0.61111, 0, 0, 0.525],
              50: [0, 0.61111, 0, 0, 0.525],
              51: [0, 0.61111, 0, 0, 0.525],
              52: [0, 0.61111, 0, 0, 0.525],
              53: [0, 0.61111, 0, 0, 0.525],
              54: [0, 0.61111, 0, 0, 0.525],
              55: [0, 0.61111, 0, 0, 0.525],
              56: [0, 0.61111, 0, 0, 0.525],
              57: [0, 0.61111, 0, 0, 0.525],
              58: [0, 0.43056, 0, 0, 0.525],
              59: [0.13889, 0.43056, 0, 0, 0.525],
              60: [-0.05556, 0.55556, 0, 0, 0.525],
              61: [-0.19549, 0.41562, 0, 0, 0.525],
              62: [-0.05556, 0.55556, 0, 0, 0.525],
              63: [0, 0.61111, 0, 0, 0.525],
              64: [0, 0.61111, 0, 0, 0.525],
              65: [0, 0.61111, 0, 0, 0.525],
              66: [0, 0.61111, 0, 0, 0.525],
              67: [0, 0.61111, 0, 0, 0.525],
              68: [0, 0.61111, 0, 0, 0.525],
              69: [0, 0.61111, 0, 0, 0.525],
              70: [0, 0.61111, 0, 0, 0.525],
              71: [0, 0.61111, 0, 0, 0.525],
              72: [0, 0.61111, 0, 0, 0.525],
              73: [0, 0.61111, 0, 0, 0.525],
              74: [0, 0.61111, 0, 0, 0.525],
              75: [0, 0.61111, 0, 0, 0.525],
              76: [0, 0.61111, 0, 0, 0.525],
              77: [0, 0.61111, 0, 0, 0.525],
              78: [0, 0.61111, 0, 0, 0.525],
              79: [0, 0.61111, 0, 0, 0.525],
              80: [0, 0.61111, 0, 0, 0.525],
              81: [0.13889, 0.61111, 0, 0, 0.525],
              82: [0, 0.61111, 0, 0, 0.525],
              83: [0, 0.61111, 0, 0, 0.525],
              84: [0, 0.61111, 0, 0, 0.525],
              85: [0, 0.61111, 0, 0, 0.525],
              86: [0, 0.61111, 0, 0, 0.525],
              87: [0, 0.61111, 0, 0, 0.525],
              88: [0, 0.61111, 0, 0, 0.525],
              89: [0, 0.61111, 0, 0, 0.525],
              90: [0, 0.61111, 0, 0, 0.525],
              91: [0.08333, 0.69444, 0, 0, 0.525],
              92: [0.08333, 0.69444, 0, 0, 0.525],
              93: [0.08333, 0.69444, 0, 0, 0.525],
              94: [0, 0.61111, 0, 0, 0.525],
              95: [0.09514, 0, 0, 0, 0.525],
              96: [0, 0.61111, 0, 0, 0.525],
              97: [0, 0.43056, 0, 0, 0.525],
              98: [0, 0.61111, 0, 0, 0.525],
              99: [0, 0.43056, 0, 0, 0.525],
              100: [0, 0.61111, 0, 0, 0.525],
              101: [0, 0.43056, 0, 0, 0.525],
              102: [0, 0.61111, 0, 0, 0.525],
              103: [0.22222, 0.43056, 0, 0, 0.525],
              104: [0, 0.61111, 0, 0, 0.525],
              105: [0, 0.61111, 0, 0, 0.525],
              106: [0.22222, 0.61111, 0, 0, 0.525],
              107: [0, 0.61111, 0, 0, 0.525],
              108: [0, 0.61111, 0, 0, 0.525],
              109: [0, 0.43056, 0, 0, 0.525],
              110: [0, 0.43056, 0, 0, 0.525],
              111: [0, 0.43056, 0, 0, 0.525],
              112: [0.22222, 0.43056, 0, 0, 0.525],
              113: [0.22222, 0.43056, 0, 0, 0.525],
              114: [0, 0.43056, 0, 0, 0.525],
              115: [0, 0.43056, 0, 0, 0.525],
              116: [0, 0.55358, 0, 0, 0.525],
              117: [0, 0.43056, 0, 0, 0.525],
              118: [0, 0.43056, 0, 0, 0.525],
              119: [0, 0.43056, 0, 0, 0.525],
              120: [0, 0.43056, 0, 0, 0.525],
              121: [0.22222, 0.43056, 0, 0, 0.525],
              122: [0, 0.43056, 0, 0, 0.525],
              123: [0.08333, 0.69444, 0, 0, 0.525],
              124: [0.08333, 0.69444, 0, 0, 0.525],
              125: [0.08333, 0.69444, 0, 0, 0.525],
              126: [0, 0.61111, 0, 0, 0.525],
              127: [0, 0.61111, 0, 0, 0.525],
              160: [0, 0, 0, 0, 0.525],
              176: [0, 0.61111, 0, 0, 0.525],
              184: [0.19445, 0, 0, 0, 0.525],
              305: [0, 0.43056, 0, 0, 0.525],
              567: [0.22222, 0.43056, 0, 0, 0.525],
              711: [0, 0.56597, 0, 0, 0.525],
              713: [0, 0.56555, 0, 0, 0.525],
              714: [0, 0.61111, 0, 0, 0.525],
              715: [0, 0.61111, 0, 0, 0.525],
              728: [0, 0.61111, 0, 0, 0.525],
              730: [0, 0.61111, 0, 0, 0.525],
              770: [0, 0.61111, 0, 0, 0.525],
              771: [0, 0.61111, 0, 0, 0.525],
              776: [0, 0.61111, 0, 0, 0.525],
              915: [0, 0.61111, 0, 0, 0.525],
              916: [0, 0.61111, 0, 0, 0.525],
              920: [0, 0.61111, 0, 0, 0.525],
              923: [0, 0.61111, 0, 0, 0.525],
              926: [0, 0.61111, 0, 0, 0.525],
              928: [0, 0.61111, 0, 0, 0.525],
              931: [0, 0.61111, 0, 0, 0.525],
              933: [0, 0.61111, 0, 0, 0.525],
              934: [0, 0.61111, 0, 0, 0.525],
              936: [0, 0.61111, 0, 0, 0.525],
              937: [0, 0.61111, 0, 0, 0.525],
              8216: [0, 0.61111, 0, 0, 0.525],
              8217: [0, 0.61111, 0, 0, 0.525],
              8242: [0, 0.61111, 0, 0, 0.525],
              9251: [0.11111, 0.21944, 0, 0, 0.525]
            }
          };
          const O0 = {
            slant: [0.25, 0.25, 0.25],
            // sigma1
            space: [0, 0, 0],
            // sigma2
            stretch: [0, 0, 0],
            // sigma3
            shrink: [0, 0, 0],
            // sigma4
            xHeight: [0.431, 0.431, 0.431],
            // sigma5
            quad: [1, 1.171, 1.472],
            // sigma6
            extraSpace: [0, 0, 0],
            // sigma7
            num1: [0.677, 0.732, 0.925],
            // sigma8
            num2: [0.394, 0.384, 0.387],
            // sigma9
            num3: [0.444, 0.471, 0.504],
            // sigma10
            denom1: [0.686, 0.752, 1.025],
            // sigma11
            denom2: [0.345, 0.344, 0.532],
            // sigma12
            sup1: [0.413, 0.503, 0.504],
            // sigma13
            sup2: [0.363, 0.431, 0.404],
            // sigma14
            sup3: [0.289, 0.286, 0.294],
            // sigma15
            sub1: [0.15, 0.143, 0.2],
            // sigma16
            sub2: [0.247, 0.286, 0.4],
            // sigma17
            supDrop: [0.386, 0.353, 0.494],
            // sigma18
            subDrop: [0.05, 0.071, 0.1],
            // sigma19
            delim1: [2.39, 1.7, 1.98],
            // sigma20
            delim2: [1.01, 1.157, 1.42],
            // sigma21
            axisHeight: [0.25, 0.25, 0.25],
            // sigma22
            // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
            // they correspond to the font parameters of the extension fonts (family 3).
            // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
            // match cmex7, we'd use cmex7.tfm values for script and scriptscript
            // values.
            defaultRuleThickness: [0.04, 0.049, 0.049],
            // xi8; cmex7: 0.049
            bigOpSpacing1: [0.111, 0.111, 0.111],
            // xi9
            bigOpSpacing2: [0.166, 0.166, 0.166],
            // xi10
            bigOpSpacing3: [0.2, 0.2, 0.2],
            // xi11
            bigOpSpacing4: [0.6, 0.611, 0.611],
            // xi12; cmex7: 0.611
            bigOpSpacing5: [0.1, 0.143, 0.143],
            // xi13; cmex7: 0.143
            // The \sqrt rule width is taken from the height of the surd character.
            // Since we use the same font at all sizes, this thickness doesn't scale.
            sqrtRuleThickness: [0.04, 0.04, 0.04],
            // This value determines how large a pt is, for metrics which are defined
            // in terms of pts.
            // This value is also used in katex.less; if you change it make sure the
            // values match.
            ptPerEm: [10, 10, 10],
            // The space between adjacent `|` columns in an array definition. From
            // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
            doubleRuleSep: [0.2, 0.2, 0.2],
            // The width of separator lines in {array} environments. From
            // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
            arrayRuleWidth: [0.04, 0.04, 0.04],
            // Two values from LaTeX source2e:
            fboxsep: [0.3, 0.3, 0.3],
            //        3 pt / ptPerEm
            fboxrule: [0.04, 0.04, 0.04]
            // 0.4 pt / ptPerEm
          }, Nn = {
            // Latin-1
            Å: "A",
            Ð: "D",
            Þ: "o",
            å: "a",
            ð: "d",
            þ: "o",
            // Cyrillic
            А: "A",
            Б: "B",
            В: "B",
            Г: "F",
            Д: "A",
            Е: "E",
            Ж: "K",
            З: "3",
            И: "N",
            Й: "N",
            К: "K",
            Л: "N",
            М: "M",
            Н: "H",
            О: "O",
            П: "N",
            Р: "P",
            С: "C",
            Т: "T",
            У: "y",
            Ф: "O",
            Х: "X",
            Ц: "U",
            Ч: "h",
            Ш: "W",
            Щ: "W",
            Ъ: "B",
            Ы: "X",
            Ь: "B",
            Э: "3",
            Ю: "X",
            Я: "R",
            а: "a",
            б: "b",
            в: "a",
            г: "r",
            д: "y",
            е: "e",
            ж: "m",
            з: "e",
            и: "n",
            й: "n",
            к: "n",
            л: "n",
            м: "m",
            н: "n",
            о: "o",
            п: "n",
            р: "p",
            с: "c",
            т: "o",
            у: "y",
            ф: "b",
            х: "x",
            ц: "n",
            ч: "n",
            ш: "w",
            щ: "w",
            ъ: "a",
            ы: "m",
            ь: "a",
            э: "e",
            ю: "m",
            я: "r"
          };
          function un(t, e) {
            At[t] = e;
          }
          function b0(t, e, r) {
            if (!At[e])
              throw new Error("Font metrics not found for font: " + e + ".");
            let l = t.charCodeAt(0), c = At[e][l];
            if (!c && t[0] in Nn && (l = Nn[t[0]].charCodeAt(0), c = At[e][l]), !c && r === "text" && ie(l) && (c = At[e][77]), c)
              return {
                depth: c[0],
                height: c[1],
                italic: c[2],
                skew: c[3],
                width: c[4]
              };
          }
          const s0 = {};
          function S0(t) {
            let e;
            if (t >= 5 ? e = 0 : t >= 3 ? e = 1 : e = 2, !s0[e]) {
              const r = s0[e] = {
                cssEmPerMu: O0.quad[e] / 18
              };
              for (const l in O0)
                O0.hasOwnProperty(l) && (r[l] = O0[l][e]);
            }
            return s0[e];
          }
          const Rn = [
            // Each element contains [textsize, scriptsize, scriptscriptsize].
            // The size mappings are taken from TeX with \normalsize=10pt.
            [1, 1, 1],
            // size1: [5, 5, 5]              \tiny
            [2, 1, 1],
            // size2: [6, 5, 5]
            [3, 1, 1],
            // size3: [7, 5, 5]              \scriptsize
            [4, 2, 1],
            // size4: [8, 6, 5]              \footnotesize
            [5, 2, 1],
            // size5: [9, 6, 5]              \small
            [6, 3, 1],
            // size6: [10, 7, 5]             \normalsize
            [7, 4, 2],
            // size7: [12, 8, 6]             \large
            [8, 6, 3],
            // size8: [14.4, 10, 7]          \Large
            [9, 7, 6],
            // size9: [17.28, 12, 10]        \LARGE
            [10, 8, 7],
            // size10: [20.74, 14.4, 12]     \huge
            [11, 10, 9]
            // size11: [24.88, 20.74, 17.28] \HUGE
          ], cn = [
            // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
            // you change size indexes, change that function.
            0.5,
            0.6,
            0.7,
            0.8,
            0.9,
            1,
            1.2,
            1.44,
            1.728,
            2.074,
            2.488
          ], hn = function(t, e) {
            return e.size < 2 ? t : Rn[t - 1][e.size - 1];
          };
          class St {
            // A font family applies to a group of fonts (i.e. SansSerif), while a font
            // represents a specific font (i.e. SansSerif Bold).
            // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
            /**
             * The base size index.
             */
            constructor(e) {
              this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || St.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = cn[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
            }
            /**
             * Returns a new options object with the same properties as "this".  Properties
             * from "extension" will be copied to the new options object.
             */
            extend(e) {
              const r = {
                style: this.style,
                size: this.size,
                textSize: this.textSize,
                color: this.color,
                phantom: this.phantom,
                font: this.font,
                fontFamily: this.fontFamily,
                fontWeight: this.fontWeight,
                fontShape: this.fontShape,
                maxSize: this.maxSize,
                minRuleThickness: this.minRuleThickness
              };
              for (const l in e)
                e.hasOwnProperty(l) && (r[l] = e[l]);
              return new St(r);
            }
            /**
             * Return an options object with the given style. If `this.style === style`,
             * returns `this`.
             */
            havingStyle(e) {
              return this.style === e ? this : this.extend({
                style: e,
                size: hn(this.textSize, e)
              });
            }
            /**
             * Return an options object with a cramped version of the current style. If
             * the current style is cramped, returns `this`.
             */
            havingCrampedStyle() {
              return this.havingStyle(this.style.cramp());
            }
            /**
             * Return an options object with the given size and in at least `\textstyle`.
             * Returns `this` if appropriate.
             */
            havingSize(e) {
              return this.size === e && this.textSize === e ? this : this.extend({
                style: this.style.text(),
                size: e,
                textSize: e,
                sizeMultiplier: cn[e - 1]
              });
            }
            /**
             * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
             * changes to at least `\textstyle`.
             */
            havingBaseStyle(e) {
              e = e || this.style.text();
              const r = hn(St.BASESIZE, e);
              return this.size === r && this.textSize === St.BASESIZE && this.style === e ? this : this.extend({
                style: e,
                size: r
              });
            }
            /**
             * Remove the effect of sizing changes such as \Huge.
             * Keep the effect of the current style, such as \scriptstyle.
             */
            havingBaseSizing() {
              let e;
              switch (this.style.id) {
                case 4:
                case 5:
                  e = 3;
                  break;
                case 6:
                case 7:
                  e = 1;
                  break;
                default:
                  e = 6;
              }
              return this.extend({
                style: this.style.text(),
                size: e
              });
            }
            /**
             * Create a new options object with the given color.
             */
            withColor(e) {
              return this.extend({
                color: e
              });
            }
            /**
             * Create a new options object with "phantom" set to true.
             */
            withPhantom() {
              return this.extend({
                phantom: !0
              });
            }
            /**
             * Creates a new options object with the given math font or old text font.
             * @type {[type]}
             */
            withFont(e) {
              return this.extend({
                font: e
              });
            }
            /**
             * Create a new options objects with the given fontFamily.
             */
            withTextFontFamily(e) {
              return this.extend({
                fontFamily: e,
                font: ""
              });
            }
            /**
             * Creates a new options object with the given font weight
             */
            withTextFontWeight(e) {
              return this.extend({
                fontWeight: e,
                font: ""
              });
            }
            /**
             * Creates a new options object with the given font weight
             */
            withTextFontShape(e) {
              return this.extend({
                fontShape: e,
                font: ""
              });
            }
            /**
             * Return the CSS sizing classes required to switch from enclosing options
             * `oldOptions` to `this`. Returns an array of classes.
             */
            sizingClasses(e) {
              return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
            }
            /**
             * Return the CSS sizing classes required to switch to the base size. Like
             * `this.havingSize(BASESIZE).sizingClasses(this)`.
             */
            baseSizingClasses() {
              return this.size !== St.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + St.BASESIZE] : [];
            }
            /**
             * Return the font metrics for this size.
             */
            fontMetrics() {
              return this._fontMetrics || (this._fontMetrics = S0(this.size)), this._fontMetrics;
            }
            /**
             * Gets the CSS color of the current options object
             */
            getColor() {
              return this.phantom ? "transparent" : this.color;
            }
          }
          St.BASESIZE = 6;
          var In = St;
          const E0 = {
            // https://en.wikibooks.org/wiki/LaTeX/Lengths and
            // https://tex.stackexchange.com/a/8263
            pt: 1,
            // TeX point
            mm: 7227 / 2540,
            // millimeter
            cm: 7227 / 254,
            // centimeter
            in: 72.27,
            // inch
            bp: 803 / 800,
            // big (PostScript) points
            pc: 12,
            // pica
            dd: 1238 / 1157,
            // didot
            cc: 14856 / 1157,
            // cicero (12 didot)
            nd: 685 / 642,
            // new didot
            nc: 1370 / 107,
            // new cicero (12 new didot)
            sp: 1 / 65536,
            // scaled point (TeX's internal smallest unit)
            // https://tex.stackexchange.com/a/41371
            px: 803 / 800
            // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
          }, Q0 = {
            ex: !0,
            em: !0,
            mu: !0
          }, Nt = function(t) {
            return typeof t != "string" && (t = t.unit), t in E0 || t in Q0 || t === "ex";
          }, Ce = function(t, e) {
            let r;
            if (t.unit in E0)
              r = E0[t.unit] / e.fontMetrics().ptPerEm / e.sizeMultiplier;
            else if (t.unit === "mu")
              r = e.fontMetrics().cssEmPerMu;
            else {
              let l;
              if (e.style.isTight() ? l = e.havingStyle(e.style.text()) : l = e, t.unit === "ex")
                r = l.fontMetrics().xHeight;
              else if (t.unit === "em")
                r = l.fontMetrics().quad;
              else
                throw new o("Invalid unit: '" + t.unit + "'");
              l !== e && (r *= l.sizeMultiplier / e.sizeMultiplier);
            }
            return Math.min(t.number * r, e.maxSize);
          }, Q = function(t) {
            return +t.toFixed(4) + "em";
          }, Rt = function(t) {
            return t.filter((e) => e).join(" ");
          }, Ln = function(t, e, r) {
            if (this.classes = t || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, e) {
              e.style.isTight() && this.classes.push("mtight");
              const l = e.getColor();
              l && (this.style.color = l);
            }
          }, F0 = function(t) {
            const e = document.createElement(t);
            e.className = Rt(this.classes);
            for (const r in this.style)
              this.style.hasOwnProperty(r) && (e.style[r] = this.style[r]);
            for (const r in this.attributes)
              this.attributes.hasOwnProperty(r) && e.setAttribute(r, this.attributes[r]);
            for (let r = 0; r < this.children.length; r++)
              e.appendChild(this.children[r].toNode());
            return e;
          }, On = function(t) {
            let e = "<" + t;
            this.classes.length && (e += ' class="' + U.escape(Rt(this.classes)) + '"');
            let r = "";
            for (const l in this.style)
              this.style.hasOwnProperty(l) && (r += U.hyphenate(l) + ":" + this.style[l] + ";");
            r && (e += ' style="' + U.escape(r) + '"');
            for (const l in this.attributes)
              this.attributes.hasOwnProperty(l) && (e += " " + l + '="' + U.escape(this.attributes[l]) + '"');
            e += ">";
            for (let l = 0; l < this.children.length; l++)
              e += this.children[l].toMarkup();
            return e += "</" + t + ">", e;
          };
          class q0 {
            constructor(e, r, l, c) {
              this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, Ln.call(this, e, l, c), this.children = r || [];
            }
            /**
             * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
             * all browsers support attributes the same, and having too many custom
             * attributes is probably bad.
             */
            setAttribute(e, r) {
              this.attributes[e] = r;
            }
            hasClass(e) {
              return U.contains(this.classes, e);
            }
            toNode() {
              return F0.call(this, "span");
            }
            toMarkup() {
              return On.call(this, "span");
            }
          }
          class je {
            constructor(e, r, l, c) {
              this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Ln.call(this, r, c), this.children = l || [], this.setAttribute("href", e);
            }
            setAttribute(e, r) {
              this.attributes[e] = r;
            }
            hasClass(e) {
              return U.contains(this.classes, e);
            }
            toNode() {
              return F0.call(this, "a");
            }
            toMarkup() {
              return On.call(this, "a");
            }
          }
          class T0 {
            constructor(e, r, l) {
              this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = r, this.src = e, this.classes = ["mord"], this.style = l;
            }
            hasClass(e) {
              return U.contains(this.classes, e);
            }
            toNode() {
              const e = document.createElement("img");
              e.src = this.src, e.alt = this.alt, e.className = "mord";
              for (const r in this.style)
                this.style.hasOwnProperty(r) && (e.style[r] = this.style[r]);
              return e;
            }
            toMarkup() {
              let e = '<img src="' + U.escape(this.src) + '"' + (' alt="' + U.escape(this.alt) + '"'), r = "";
              for (const l in this.style)
                this.style.hasOwnProperty(l) && (r += U.hyphenate(l) + ":" + this.style[l] + ";");
              return r && (e += ' style="' + U.escape(r) + '"'), e += "'/>", e;
            }
          }
          const qn = {
            î: "ı̂",
            ï: "ı̈",
            í: "ı́",
            // 'ī': '\u0131\u0304', // enable when we add Extended Latin
            ì: "ı̀"
          };
          class wt {
            constructor(e, r, l, c, m, g, _, v) {
              this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = r || 0, this.depth = l || 0, this.italic = c || 0, this.skew = m || 0, this.width = g || 0, this.classes = _ || [], this.style = v || {}, this.maxFontSize = 0;
              const T = Ke(this.text.charCodeAt(0));
              T && this.classes.push(T + "_fallback"), /[îïíì]/.test(this.text) && (this.text = qn[this.text]);
            }
            hasClass(e) {
              return U.contains(this.classes, e);
            }
            /**
             * Creates a text node or span from a symbol node. Note that a span is only
             * created if it is needed.
             */
            toNode() {
              const e = document.createTextNode(this.text);
              let r = null;
              this.italic > 0 && (r = document.createElement("span"), r.style.marginRight = Q(this.italic)), this.classes.length > 0 && (r = r || document.createElement("span"), r.className = Rt(this.classes));
              for (const l in this.style)
                this.style.hasOwnProperty(l) && (r = r || document.createElement("span"), r.style[l] = this.style[l]);
              return r ? (r.appendChild(e), r) : e;
            }
            /**
             * Creates markup for a symbol node.
             */
            toMarkup() {
              let e = !1, r = "<span";
              this.classes.length && (e = !0, r += ' class="', r += U.escape(Rt(this.classes)), r += '"');
              let l = "";
              this.italic > 0 && (l += "margin-right:" + this.italic + "em;");
              for (const m in this.style)
                this.style.hasOwnProperty(m) && (l += U.hyphenate(m) + ":" + this.style[m] + ";");
              l && (e = !0, r += ' style="' + U.escape(l) + '"');
              const c = U.escape(this.text);
              return e ? (r += ">", r += c, r += "</span>", r) : c;
            }
          }
          class It {
            constructor(e, r) {
              this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = r || {};
            }
            toNode() {
              const r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
              for (const l in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, l) && r.setAttribute(l, this.attributes[l]);
              for (let l = 0; l < this.children.length; l++)
                r.appendChild(this.children[l].toNode());
              return r;
            }
            toMarkup() {
              let e = '<svg xmlns="http://www.w3.org/2000/svg"';
              for (const r in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, r) && (e += " " + r + '="' + U.escape(this.attributes[r]) + '"');
              e += ">";
              for (let r = 0; r < this.children.length; r++)
                e += this.children[r].toMarkup();
              return e += "</svg>", e;
            }
          }
          class Lt {
            constructor(e, r) {
              this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = r;
            }
            toNode() {
              const r = document.createElementNS("http://www.w3.org/2000/svg", "path");
              return this.alternate ? r.setAttribute("d", this.alternate) : r.setAttribute("d", vt[this.pathName]), r;
            }
            toMarkup() {
              return this.alternate ? '<path d="' + U.escape(this.alternate) + '"/>' : '<path d="' + U.escape(vt[this.pathName]) + '"/>';
            }
          }
          class J0 {
            constructor(e) {
              this.attributes = void 0, this.attributes = e || {};
            }
            toNode() {
              const r = document.createElementNS("http://www.w3.org/2000/svg", "line");
              for (const l in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, l) && r.setAttribute(l, this.attributes[l]);
              return r;
            }
            toMarkup() {
              let e = "<line";
              for (const r in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, r) && (e += " " + r + '="' + U.escape(this.attributes[r]) + '"');
              return e += "/>", e;
            }
          }
          function fn(t) {
            if (t instanceof wt)
              return t;
            throw new Error("Expected symbolNode but got " + String(t) + ".");
          }
          function Nr(t) {
            if (t instanceof q0)
              return t;
            throw new Error("Expected span<HtmlDomNode> but got " + String(t) + ".");
          }
          const Pn = {
            bin: 1,
            close: 1,
            inner: 1,
            open: 1,
            punct: 1,
            rel: 1
          }, Hn = {
            "accent-token": 1,
            mathord: 1,
            "op-token": 1,
            spacing: 1,
            textord: 1
          }, $0 = {
            math: {},
            text: {}
          };
          var ye = $0;
          function h(t, e, r, l, c, m) {
            $0[t][c] = {
              font: e,
              group: r,
              replace: l
            }, m && l && ($0[t][l] = $0[t][c]);
          }
          const d = "math", X = "text", w = "main", E = "ams", De = "accent-token", te = "bin", lt = "close", w0 = "inner", oe = "mathord", Xe = "op-token", re = "open", z = "punct", D = "rel", ne = "spacing", F = "textord";
          h(d, w, D, "≡", "\\equiv", !0), h(d, w, D, "≺", "\\prec", !0), h(d, w, D, "≻", "\\succ", !0), h(d, w, D, "∼", "\\sim", !0), h(d, w, D, "⊥", "\\perp"), h(d, w, D, "⪯", "\\preceq", !0), h(d, w, D, "⪰", "\\succeq", !0), h(d, w, D, "≃", "\\simeq", !0), h(d, w, D, "∣", "\\mid", !0), h(d, w, D, "≪", "\\ll", !0), h(d, w, D, "≫", "\\gg", !0), h(d, w, D, "≍", "\\asymp", !0), h(d, w, D, "∥", "\\parallel"), h(d, w, D, "⋈", "\\bowtie", !0), h(d, w, D, "⌣", "\\smile", !0), h(d, w, D, "⊑", "\\sqsubseteq", !0), h(d, w, D, "⊒", "\\sqsupseteq", !0), h(d, w, D, "≐", "\\doteq", !0), h(d, w, D, "⌢", "\\frown", !0), h(d, w, D, "∋", "\\ni", !0), h(d, w, D, "∝", "\\propto", !0), h(d, w, D, "⊢", "\\vdash", !0), h(d, w, D, "⊣", "\\dashv", !0), h(d, w, D, "∋", "\\owns"), h(d, w, z, ".", "\\ldotp"), h(d, w, z, "⋅", "\\cdotp"), h(d, w, F, "#", "\\#"), h(X, w, F, "#", "\\#"), h(d, w, F, "&", "\\&"), h(X, w, F, "&", "\\&"), h(d, w, F, "ℵ", "\\aleph", !0), h(d, w, F, "∀", "\\forall", !0), h(d, w, F, "ℏ", "\\hbar", !0), h(d, w, F, "∃", "\\exists", !0), h(d, w, F, "∇", "\\nabla", !0), h(d, w, F, "♭", "\\flat", !0), h(d, w, F, "ℓ", "\\ell", !0), h(d, w, F, "♮", "\\natural", !0), h(d, w, F, "♣", "\\clubsuit", !0), h(d, w, F, "℘", "\\wp", !0), h(d, w, F, "♯", "\\sharp", !0), h(d, w, F, "♢", "\\diamondsuit", !0), h(d, w, F, "ℜ", "\\Re", !0), h(d, w, F, "♡", "\\heartsuit", !0), h(d, w, F, "ℑ", "\\Im", !0), h(d, w, F, "♠", "\\spadesuit", !0), h(d, w, F, "§", "\\S", !0), h(X, w, F, "§", "\\S"), h(d, w, F, "¶", "\\P", !0), h(X, w, F, "¶", "\\P"), h(d, w, F, "†", "\\dag"), h(X, w, F, "†", "\\dag"), h(X, w, F, "†", "\\textdagger"), h(d, w, F, "‡", "\\ddag"), h(X, w, F, "‡", "\\ddag"), h(X, w, F, "‡", "\\textdaggerdbl"), h(d, w, lt, "⎱", "\\rmoustache", !0), h(d, w, re, "⎰", "\\lmoustache", !0), h(d, w, lt, "⟯", "\\rgroup", !0), h(d, w, re, "⟮", "\\lgroup", !0), h(d, w, te, "∓", "\\mp", !0), h(d, w, te, "⊖", "\\ominus", !0), h(d, w, te, "⊎", "\\uplus", !0), h(d, w, te, "⊓", "\\sqcap", !0), h(d, w, te, "∗", "\\ast"), h(d, w, te, "⊔", "\\sqcup", !0), h(d, w, te, "◯", "\\bigcirc", !0), h(d, w, te, "∙", "\\bullet", !0), h(d, w, te, "‡", "\\ddagger"), h(d, w, te, "≀", "\\wr", !0), h(d, w, te, "⨿", "\\amalg"), h(d, w, te, "&", "\\And"), h(d, w, D, "⟵", "\\longleftarrow", !0), h(d, w, D, "⇐", "\\Leftarrow", !0), h(d, w, D, "⟸", "\\Longleftarrow", !0), h(d, w, D, "⟶", "\\longrightarrow", !0), h(d, w, D, "⇒", "\\Rightarrow", !0), h(d, w, D, "⟹", "\\Longrightarrow", !0), h(d, w, D, "↔", "\\leftrightarrow", !0), h(d, w, D, "⟷", "\\longleftrightarrow", !0), h(d, w, D, "⇔", "\\Leftrightarrow", !0), h(d, w, D, "⟺", "\\Longleftrightarrow", !0), h(d, w, D, "↦", "\\mapsto", !0), h(d, w, D, "⟼", "\\longmapsto", !0), h(d, w, D, "↗", "\\nearrow", !0), h(d, w, D, "↩", "\\hookleftarrow", !0), h(d, w, D, "↪", "\\hookrightarrow", !0), h(d, w, D, "↘", "\\searrow", !0), h(d, w, D, "↼", "\\leftharpoonup", !0), h(d, w, D, "⇀", "\\rightharpoonup", !0), h(d, w, D, "↙", "\\swarrow", !0), h(d, w, D, "↽", "\\leftharpoondown", !0), h(d, w, D, "⇁", "\\rightharpoondown", !0), h(d, w, D, "↖", "\\nwarrow", !0), h(d, w, D, "⇌", "\\rightleftharpoons", !0), h(d, E, D, "≮", "\\nless", !0), h(d, E, D, "", "\\@nleqslant"), h(d, E, D, "", "\\@nleqq"), h(d, E, D, "⪇", "\\lneq", !0), h(d, E, D, "≨", "\\lneqq", !0), h(d, E, D, "", "\\@lvertneqq"), h(d, E, D, "⋦", "\\lnsim", !0), h(d, E, D, "⪉", "\\lnapprox", !0), h(d, E, D, "⊀", "\\nprec", !0), h(d, E, D, "⋠", "\\npreceq", !0), h(d, E, D, "⋨", "\\precnsim", !0), h(d, E, D, "⪹", "\\precnapprox", !0), h(d, E, D, "≁", "\\nsim", !0), h(d, E, D, "", "\\@nshortmid"), h(d, E, D, "∤", "\\nmid", !0), h(d, E, D, "⊬", "\\nvdash", !0), h(d, E, D, "⊭", "\\nvDash", !0), h(d, E, D, "⋪", "\\ntriangleleft"), h(d, E, D, "⋬", "\\ntrianglelefteq", !0), h(d, E, D, "⊊", "\\subsetneq", !0), h(d, E, D, "", "\\@varsubsetneq"), h(d, E, D, "⫋", "\\subsetneqq", !0), h(d, E, D, "", "\\@varsubsetneqq"), h(d, E, D, "≯", "\\ngtr", !0), h(d, E, D, "", "\\@ngeqslant"), h(d, E, D, "", "\\@ngeqq"), h(d, E, D, "⪈", "\\gneq", !0), h(d, E, D, "≩", "\\gneqq", !0), h(d, E, D, "", "\\@gvertneqq"), h(d, E, D, "⋧", "\\gnsim", !0), h(d, E, D, "⪊", "\\gnapprox", !0), h(d, E, D, "⊁", "\\nsucc", !0), h(d, E, D, "⋡", "\\nsucceq", !0), h(d, E, D, "⋩", "\\succnsim", !0), h(d, E, D, "⪺", "\\succnapprox", !0), h(d, E, D, "≆", "\\ncong", !0), h(d, E, D, "", "\\@nshortparallel"), h(d, E, D, "∦", "\\nparallel", !0), h(d, E, D, "⊯", "\\nVDash", !0), h(d, E, D, "⋫", "\\ntriangleright"), h(d, E, D, "⋭", "\\ntrianglerighteq", !0), h(d, E, D, "", "\\@nsupseteqq"), h(d, E, D, "⊋", "\\supsetneq", !0), h(d, E, D, "", "\\@varsupsetneq"), h(d, E, D, "⫌", "\\supsetneqq", !0), h(d, E, D, "", "\\@varsupsetneqq"), h(d, E, D, "⊮", "\\nVdash", !0), h(d, E, D, "⪵", "\\precneqq", !0), h(d, E, D, "⪶", "\\succneqq", !0), h(d, E, D, "", "\\@nsubseteqq"), h(d, E, te, "⊴", "\\unlhd"), h(d, E, te, "⊵", "\\unrhd"), h(d, E, D, "↚", "\\nleftarrow", !0), h(d, E, D, "↛", "\\nrightarrow", !0), h(d, E, D, "⇍", "\\nLeftarrow", !0), h(d, E, D, "⇏", "\\nRightarrow", !0), h(d, E, D, "↮", "\\nleftrightarrow", !0), h(d, E, D, "⇎", "\\nLeftrightarrow", !0), h(d, E, D, "△", "\\vartriangle"), h(d, E, F, "ℏ", "\\hslash"), h(d, E, F, "▽", "\\triangledown"), h(d, E, F, "◊", "\\lozenge"), h(d, E, F, "Ⓢ", "\\circledS"), h(d, E, F, "®", "\\circledR"), h(X, E, F, "®", "\\circledR"), h(d, E, F, "∡", "\\measuredangle", !0), h(d, E, F, "∄", "\\nexists"), h(d, E, F, "℧", "\\mho"), h(d, E, F, "Ⅎ", "\\Finv", !0), h(d, E, F, "⅁", "\\Game", !0), h(d, E, F, "‵", "\\backprime"), h(d, E, F, "▲", "\\blacktriangle"), h(d, E, F, "▼", "\\blacktriangledown"), h(d, E, F, "■", "\\blacksquare"), h(d, E, F, "⧫", "\\blacklozenge"), h(d, E, F, "★", "\\bigstar"), h(d, E, F, "∢", "\\sphericalangle", !0), h(d, E, F, "∁", "\\complement", !0), h(d, E, F, "ð", "\\eth", !0), h(X, w, F, "ð", "ð"), h(d, E, F, "╱", "\\diagup"), h(d, E, F, "╲", "\\diagdown"), h(d, E, F, "□", "\\square"), h(d, E, F, "□", "\\Box"), h(d, E, F, "◊", "\\Diamond"), h(d, E, F, "¥", "\\yen", !0), h(X, E, F, "¥", "\\yen", !0), h(d, E, F, "✓", "\\checkmark", !0), h(X, E, F, "✓", "\\checkmark"), h(d, E, F, "ℶ", "\\beth", !0), h(d, E, F, "ℸ", "\\daleth", !0), h(d, E, F, "ℷ", "\\gimel", !0), h(d, E, F, "ϝ", "\\digamma", !0), h(d, E, F, "ϰ", "\\varkappa"), h(d, E, re, "┌", "\\@ulcorner", !0), h(d, E, lt, "┐", "\\@urcorner", !0), h(d, E, re, "└", "\\@llcorner", !0), h(d, E, lt, "┘", "\\@lrcorner", !0), h(d, E, D, "≦", "\\leqq", !0), h(d, E, D, "⩽", "\\leqslant", !0), h(d, E, D, "⪕", "\\eqslantless", !0), h(d, E, D, "≲", "\\lesssim", !0), h(d, E, D, "⪅", "\\lessapprox", !0), h(d, E, D, "≊", "\\approxeq", !0), h(d, E, te, "⋖", "\\lessdot"), h(d, E, D, "⋘", "\\lll", !0), h(d, E, D, "≶", "\\lessgtr", !0), h(d, E, D, "⋚", "\\lesseqgtr", !0), h(d, E, D, "⪋", "\\lesseqqgtr", !0), h(d, E, D, "≑", "\\doteqdot"), h(d, E, D, "≓", "\\risingdotseq", !0), h(d, E, D, "≒", "\\fallingdotseq", !0), h(d, E, D, "∽", "\\backsim", !0), h(d, E, D, "⋍", "\\backsimeq", !0), h(d, E, D, "⫅", "\\subseteqq", !0), h(d, E, D, "⋐", "\\Subset", !0), h(d, E, D, "⊏", "\\sqsubset", !0), h(d, E, D, "≼", "\\preccurlyeq", !0), h(d, E, D, "⋞", "\\curlyeqprec", !0), h(d, E, D, "≾", "\\precsim", !0), h(d, E, D, "⪷", "\\precapprox", !0), h(d, E, D, "⊲", "\\vartriangleleft"), h(d, E, D, "⊴", "\\trianglelefteq"), h(d, E, D, "⊨", "\\vDash", !0), h(d, E, D, "⊪", "\\Vvdash", !0), h(d, E, D, "⌣", "\\smallsmile"), h(d, E, D, "⌢", "\\smallfrown"), h(d, E, D, "≏", "\\bumpeq", !0), h(d, E, D, "≎", "\\Bumpeq", !0), h(d, E, D, "≧", "\\geqq", !0), h(d, E, D, "⩾", "\\geqslant", !0), h(d, E, D, "⪖", "\\eqslantgtr", !0), h(d, E, D, "≳", "\\gtrsim", !0), h(d, E, D, "⪆", "\\gtrapprox", !0), h(d, E, te, "⋗", "\\gtrdot"), h(d, E, D, "⋙", "\\ggg", !0), h(d, E, D, "≷", "\\gtrless", !0), h(d, E, D, "⋛", "\\gtreqless", !0), h(d, E, D, "⪌", "\\gtreqqless", !0), h(d, E, D, "≖", "\\eqcirc", !0), h(d, E, D, "≗", "\\circeq", !0), h(d, E, D, "≜", "\\triangleq", !0), h(d, E, D, "∼", "\\thicksim"), h(d, E, D, "≈", "\\thickapprox"), h(d, E, D, "⫆", "\\supseteqq", !0), h(d, E, D, "⋑", "\\Supset", !0), h(d, E, D, "⊐", "\\sqsupset", !0), h(d, E, D, "≽", "\\succcurlyeq", !0), h(d, E, D, "⋟", "\\curlyeqsucc", !0), h(d, E, D, "≿", "\\succsim", !0), h(d, E, D, "⪸", "\\succapprox", !0), h(d, E, D, "⊳", "\\vartriangleright"), h(d, E, D, "⊵", "\\trianglerighteq"), h(d, E, D, "⊩", "\\Vdash", !0), h(d, E, D, "∣", "\\shortmid"), h(d, E, D, "∥", "\\shortparallel"), h(d, E, D, "≬", "\\between", !0), h(d, E, D, "⋔", "\\pitchfork", !0), h(d, E, D, "∝", "\\varpropto"), h(d, E, D, "◀", "\\blacktriangleleft"), h(d, E, D, "∴", "\\therefore", !0), h(d, E, D, "∍", "\\backepsilon"), h(d, E, D, "▶", "\\blacktriangleright"), h(d, E, D, "∵", "\\because", !0), h(d, E, D, "⋘", "\\llless"), h(d, E, D, "⋙", "\\gggtr"), h(d, E, te, "⊲", "\\lhd"), h(d, E, te, "⊳", "\\rhd"), h(d, E, D, "≂", "\\eqsim", !0), h(d, w, D, "⋈", "\\Join"), h(d, E, D, "≑", "\\Doteq", !0), h(d, E, te, "∔", "\\dotplus", !0), h(d, E, te, "∖", "\\smallsetminus"), h(d, E, te, "⋒", "\\Cap", !0), h(d, E, te, "⋓", "\\Cup", !0), h(d, E, te, "⩞", "\\doublebarwedge", !0), h(d, E, te, "⊟", "\\boxminus", !0), h(d, E, te, "⊞", "\\boxplus", !0), h(d, E, te, "⋇", "\\divideontimes", !0), h(d, E, te, "⋉", "\\ltimes", !0), h(d, E, te, "⋊", "\\rtimes", !0), h(d, E, te, "⋋", "\\leftthreetimes", !0), h(d, E, te, "⋌", "\\rightthreetimes", !0), h(d, E, te, "⋏", "\\curlywedge", !0), h(d, E, te, "⋎", "\\curlyvee", !0), h(d, E, te, "⊝", "\\circleddash", !0), h(d, E, te, "⊛", "\\circledast", !0), h(d, E, te, "⋅", "\\centerdot"), h(d, E, te, "⊺", "\\intercal", !0), h(d, E, te, "⋒", "\\doublecap"), h(d, E, te, "⋓", "\\doublecup"), h(d, E, te, "⊠", "\\boxtimes", !0), h(d, E, D, "⇢", "\\dashrightarrow", !0), h(d, E, D, "⇠", "\\dashleftarrow", !0), h(d, E, D, "⇇", "\\leftleftarrows", !0), h(d, E, D, "⇆", "\\leftrightarrows", !0), h(d, E, D, "⇚", "\\Lleftarrow", !0), h(d, E, D, "↞", "\\twoheadleftarrow", !0), h(d, E, D, "↢", "\\leftarrowtail", !0), h(d, E, D, "↫", "\\looparrowleft", !0), h(d, E, D, "⇋", "\\leftrightharpoons", !0), h(d, E, D, "↶", "\\curvearrowleft", !0), h(d, E, D, "↺", "\\circlearrowleft", !0), h(d, E, D, "↰", "\\Lsh", !0), h(d, E, D, "⇈", "\\upuparrows", !0), h(d, E, D, "↿", "\\upharpoonleft", !0), h(d, E, D, "⇃", "\\downharpoonleft", !0), h(d, w, D, "⊶", "\\origof", !0), h(d, w, D, "⊷", "\\imageof", !0), h(d, E, D, "⊸", "\\multimap", !0), h(d, E, D, "↭", "\\leftrightsquigarrow", !0), h(d, E, D, "⇉", "\\rightrightarrows", !0), h(d, E, D, "⇄", "\\rightleftarrows", !0), h(d, E, D, "↠", "\\twoheadrightarrow", !0), h(d, E, D, "↣", "\\rightarrowtail", !0), h(d, E, D, "↬", "\\looparrowright", !0), h(d, E, D, "↷", "\\curvearrowright", !0), h(d, E, D, "↻", "\\circlearrowright", !0), h(d, E, D, "↱", "\\Rsh", !0), h(d, E, D, "⇊", "\\downdownarrows", !0), h(d, E, D, "↾", "\\upharpoonright", !0), h(d, E, D, "⇂", "\\downharpoonright", !0), h(d, E, D, "⇝", "\\rightsquigarrow", !0), h(d, E, D, "⇝", "\\leadsto"), h(d, E, D, "⇛", "\\Rrightarrow", !0), h(d, E, D, "↾", "\\restriction"), h(d, w, F, "‘", "`"), h(d, w, F, "$", "\\$"), h(X, w, F, "$", "\\$"), h(X, w, F, "$", "\\textdollar"), h(d, w, F, "%", "\\%"), h(X, w, F, "%", "\\%"), h(d, w, F, "_", "\\_"), h(X, w, F, "_", "\\_"), h(X, w, F, "_", "\\textunderscore"), h(d, w, F, "∠", "\\angle", !0), h(d, w, F, "∞", "\\infty", !0), h(d, w, F, "′", "\\prime"), h(d, w, F, "△", "\\triangle"), h(d, w, F, "Γ", "\\Gamma", !0), h(d, w, F, "Δ", "\\Delta", !0), h(d, w, F, "Θ", "\\Theta", !0), h(d, w, F, "Λ", "\\Lambda", !0), h(d, w, F, "Ξ", "\\Xi", !0), h(d, w, F, "Π", "\\Pi", !0), h(d, w, F, "Σ", "\\Sigma", !0), h(d, w, F, "Υ", "\\Upsilon", !0), h(d, w, F, "Φ", "\\Phi", !0), h(d, w, F, "Ψ", "\\Psi", !0), h(d, w, F, "Ω", "\\Omega", !0), h(d, w, F, "A", "Α"), h(d, w, F, "B", "Β"), h(d, w, F, "E", "Ε"), h(d, w, F, "Z", "Ζ"), h(d, w, F, "H", "Η"), h(d, w, F, "I", "Ι"), h(d, w, F, "K", "Κ"), h(d, w, F, "M", "Μ"), h(d, w, F, "N", "Ν"), h(d, w, F, "O", "Ο"), h(d, w, F, "P", "Ρ"), h(d, w, F, "T", "Τ"), h(d, w, F, "X", "Χ"), h(d, w, F, "¬", "\\neg", !0), h(d, w, F, "¬", "\\lnot"), h(d, w, F, "⊤", "\\top"), h(d, w, F, "⊥", "\\bot"), h(d, w, F, "∅", "\\emptyset"), h(d, E, F, "∅", "\\varnothing"), h(d, w, oe, "α", "\\alpha", !0), h(d, w, oe, "β", "\\beta", !0), h(d, w, oe, "γ", "\\gamma", !0), h(d, w, oe, "δ", "\\delta", !0), h(d, w, oe, "ϵ", "\\epsilon", !0), h(d, w, oe, "ζ", "\\zeta", !0), h(d, w, oe, "η", "\\eta", !0), h(d, w, oe, "θ", "\\theta", !0), h(d, w, oe, "ι", "\\iota", !0), h(d, w, oe, "κ", "\\kappa", !0), h(d, w, oe, "λ", "\\lambda", !0), h(d, w, oe, "μ", "\\mu", !0), h(d, w, oe, "ν", "\\nu", !0), h(d, w, oe, "ξ", "\\xi", !0), h(d, w, oe, "ο", "\\omicron", !0), h(d, w, oe, "π", "\\pi", !0), h(d, w, oe, "ρ", "\\rho", !0), h(d, w, oe, "σ", "\\sigma", !0), h(d, w, oe, "τ", "\\tau", !0), h(d, w, oe, "υ", "\\upsilon", !0), h(d, w, oe, "ϕ", "\\phi", !0), h(d, w, oe, "χ", "\\chi", !0), h(d, w, oe, "ψ", "\\psi", !0), h(d, w, oe, "ω", "\\omega", !0), h(d, w, oe, "ε", "\\varepsilon", !0), h(d, w, oe, "ϑ", "\\vartheta", !0), h(d, w, oe, "ϖ", "\\varpi", !0), h(d, w, oe, "ϱ", "\\varrho", !0), h(d, w, oe, "ς", "\\varsigma", !0), h(d, w, oe, "φ", "\\varphi", !0), h(d, w, te, "∗", "*", !0), h(d, w, te, "+", "+"), h(d, w, te, "−", "-", !0), h(d, w, te, "⋅", "\\cdot", !0), h(d, w, te, "∘", "\\circ", !0), h(d, w, te, "÷", "\\div", !0), h(d, w, te, "±", "\\pm", !0), h(d, w, te, "×", "\\times", !0), h(d, w, te, "∩", "\\cap", !0), h(d, w, te, "∪", "\\cup", !0), h(d, w, te, "∖", "\\setminus", !0), h(d, w, te, "∧", "\\land"), h(d, w, te, "∨", "\\lor"), h(d, w, te, "∧", "\\wedge", !0), h(d, w, te, "∨", "\\vee", !0), h(d, w, F, "√", "\\surd"), h(d, w, re, "⟨", "\\langle", !0), h(d, w, re, "∣", "\\lvert"), h(d, w, re, "∥", "\\lVert"), h(d, w, lt, "?", "?"), h(d, w, lt, "!", "!"), h(d, w, lt, "⟩", "\\rangle", !0), h(d, w, lt, "∣", "\\rvert"), h(d, w, lt, "∥", "\\rVert"), h(d, w, D, "=", "="), h(d, w, D, ":", ":"), h(d, w, D, "≈", "\\approx", !0), h(d, w, D, "≅", "\\cong", !0), h(d, w, D, "≥", "\\ge"), h(d, w, D, "≥", "\\geq", !0), h(d, w, D, "←", "\\gets"), h(d, w, D, ">", "\\gt", !0), h(d, w, D, "∈", "\\in", !0), h(d, w, D, "", "\\@not"), h(d, w, D, "⊂", "\\subset", !0), h(d, w, D, "⊃", "\\supset", !0), h(d, w, D, "⊆", "\\subseteq", !0), h(d, w, D, "⊇", "\\supseteq", !0), h(d, E, D, "⊈", "\\nsubseteq", !0), h(d, E, D, "⊉", "\\nsupseteq", !0), h(d, w, D, "⊨", "\\models"), h(d, w, D, "←", "\\leftarrow", !0), h(d, w, D, "≤", "\\le"), h(d, w, D, "≤", "\\leq", !0), h(d, w, D, "<", "\\lt", !0), h(d, w, D, "→", "\\rightarrow", !0), h(d, w, D, "→", "\\to"), h(d, E, D, "≱", "\\ngeq", !0), h(d, E, D, "≰", "\\nleq", !0), h(d, w, ne, " ", "\\ "), h(d, w, ne, " ", "\\space"), h(d, w, ne, " ", "\\nobreakspace"), h(X, w, ne, " ", "\\ "), h(X, w, ne, " ", " "), h(X, w, ne, " ", "\\space"), h(X, w, ne, " ", "\\nobreakspace"), h(d, w, ne, null, "\\nobreak"), h(d, w, ne, null, "\\allowbreak"), h(d, w, z, ",", ","), h(d, w, z, ";", ";"), h(d, E, te, "⊼", "\\barwedge", !0), h(d, E, te, "⊻", "\\veebar", !0), h(d, w, te, "⊙", "\\odot", !0), h(d, w, te, "⊕", "\\oplus", !0), h(d, w, te, "⊗", "\\otimes", !0), h(d, w, F, "∂", "\\partial", !0), h(d, w, te, "⊘", "\\oslash", !0), h(d, E, te, "⊚", "\\circledcirc", !0), h(d, E, te, "⊡", "\\boxdot", !0), h(d, w, te, "△", "\\bigtriangleup"), h(d, w, te, "▽", "\\bigtriangledown"), h(d, w, te, "†", "\\dagger"), h(d, w, te, "⋄", "\\diamond"), h(d, w, te, "⋆", "\\star"), h(d, w, te, "◃", "\\triangleleft"), h(d, w, te, "▹", "\\triangleright"), h(d, w, re, "{", "\\{"), h(X, w, F, "{", "\\{"), h(X, w, F, "{", "\\textbraceleft"), h(d, w, lt, "}", "\\}"), h(X, w, F, "}", "\\}"), h(X, w, F, "}", "\\textbraceright"), h(d, w, re, "{", "\\lbrace"), h(d, w, lt, "}", "\\rbrace"), h(d, w, re, "[", "\\lbrack", !0), h(X, w, F, "[", "\\lbrack", !0), h(d, w, lt, "]", "\\rbrack", !0), h(X, w, F, "]", "\\rbrack", !0), h(d, w, re, "(", "\\lparen", !0), h(d, w, lt, ")", "\\rparen", !0), h(X, w, F, "<", "\\textless", !0), h(X, w, F, ">", "\\textgreater", !0), h(d, w, re, "⌊", "\\lfloor", !0), h(d, w, lt, "⌋", "\\rfloor", !0), h(d, w, re, "⌈", "\\lceil", !0), h(d, w, lt, "⌉", "\\rceil", !0), h(d, w, F, "\\", "\\backslash"), h(d, w, F, "∣", "|"), h(d, w, F, "∣", "\\vert"), h(X, w, F, "|", "\\textbar", !0), h(d, w, F, "∥", "\\|"), h(d, w, F, "∥", "\\Vert"), h(X, w, F, "∥", "\\textbardbl"), h(X, w, F, "~", "\\textasciitilde"), h(X, w, F, "\\", "\\textbackslash"), h(X, w, F, "^", "\\textasciicircum"), h(d, w, D, "↑", "\\uparrow", !0), h(d, w, D, "⇑", "\\Uparrow", !0), h(d, w, D, "↓", "\\downarrow", !0), h(d, w, D, "⇓", "\\Downarrow", !0), h(d, w, D, "↕", "\\updownarrow", !0), h(d, w, D, "⇕", "\\Updownarrow", !0), h(d, w, Xe, "∐", "\\coprod"), h(d, w, Xe, "⋁", "\\bigvee"), h(d, w, Xe, "⋀", "\\bigwedge"), h(d, w, Xe, "⨄", "\\biguplus"), h(d, w, Xe, "⋂", "\\bigcap"), h(d, w, Xe, "⋃", "\\bigcup"), h(d, w, Xe, "∫", "\\int"), h(d, w, Xe, "∫", "\\intop"), h(d, w, Xe, "∬", "\\iint"), h(d, w, Xe, "∭", "\\iiint"), h(d, w, Xe, "∏", "\\prod"), h(d, w, Xe, "∑", "\\sum"), h(d, w, Xe, "⨂", "\\bigotimes"), h(d, w, Xe, "⨁", "\\bigoplus"), h(d, w, Xe, "⨀", "\\bigodot"), h(d, w, Xe, "∮", "\\oint"), h(d, w, Xe, "∯", "\\oiint"), h(d, w, Xe, "∰", "\\oiiint"), h(d, w, Xe, "⨆", "\\bigsqcup"), h(d, w, Xe, "∫", "\\smallint"), h(X, w, w0, "…", "\\textellipsis"), h(d, w, w0, "…", "\\mathellipsis"), h(X, w, w0, "…", "\\ldots", !0), h(d, w, w0, "…", "\\ldots", !0), h(d, w, w0, "⋯", "\\@cdots", !0), h(d, w, w0, "⋱", "\\ddots", !0), h(d, w, F, "⋮", "\\varvdots"), h(d, w, De, "ˊ", "\\acute"), h(d, w, De, "ˋ", "\\grave"), h(d, w, De, "¨", "\\ddot"), h(d, w, De, "~", "\\tilde"), h(d, w, De, "ˉ", "\\bar"), h(d, w, De, "˘", "\\breve"), h(d, w, De, "ˇ", "\\check"), h(d, w, De, "^", "\\hat"), h(d, w, De, "⃗", "\\vec"), h(d, w, De, "˙", "\\dot"), h(d, w, De, "˚", "\\mathring"), h(d, w, oe, "", "\\@imath"), h(d, w, oe, "", "\\@jmath"), h(d, w, F, "ı", "ı"), h(d, w, F, "ȷ", "ȷ"), h(X, w, F, "ı", "\\i", !0), h(X, w, F, "ȷ", "\\j", !0), h(X, w, F, "ß", "\\ss", !0), h(X, w, F, "æ", "\\ae", !0), h(X, w, F, "œ", "\\oe", !0), h(X, w, F, "ø", "\\o", !0), h(X, w, F, "Æ", "\\AE", !0), h(X, w, F, "Œ", "\\OE", !0), h(X, w, F, "Ø", "\\O", !0), h(X, w, De, "ˊ", "\\'"), h(X, w, De, "ˋ", "\\`"), h(X, w, De, "ˆ", "\\^"), h(X, w, De, "˜", "\\~"), h(X, w, De, "ˉ", "\\="), h(X, w, De, "˘", "\\u"), h(X, w, De, "˙", "\\."), h(X, w, De, "¸", "\\c"), h(X, w, De, "˚", "\\r"), h(X, w, De, "ˇ", "\\v"), h(X, w, De, "¨", '\\"'), h(X, w, De, "˝", "\\H"), h(X, w, De, "◯", "\\textcircled");
          const Je = {
            "--": !0,
            "---": !0,
            "``": !0,
            "''": !0
          };
          h(X, w, F, "–", "--", !0), h(X, w, F, "–", "\\textendash"), h(X, w, F, "—", "---", !0), h(X, w, F, "—", "\\textemdash"), h(X, w, F, "‘", "`", !0), h(X, w, F, "‘", "\\textquoteleft"), h(X, w, F, "’", "'", !0), h(X, w, F, "’", "\\textquoteright"), h(X, w, F, "“", "``", !0), h(X, w, F, "“", "\\textquotedblleft"), h(X, w, F, "”", "''", !0), h(X, w, F, "”", "\\textquotedblright"), h(d, w, F, "°", "\\degree", !0), h(X, w, F, "°", "\\degree"), h(X, w, F, "°", "\\textdegree", !0), h(d, w, F, "£", "\\pounds"), h(d, w, F, "£", "\\mathsterling", !0), h(X, w, F, "£", "\\pounds"), h(X, w, F, "£", "\\textsterling", !0), h(d, E, F, "✠", "\\maltese"), h(X, E, F, "✠", "\\maltese");
          const Qe = '0123456789/@."';
          for (let t = 0; t < Qe.length; t++) {
            const e = Qe.charAt(t);
            h(d, w, F, e, e);
          }
          const ot = '0123456789!@*()-=+";:?/.,';
          for (let t = 0; t < ot.length; t++) {
            const e = ot.charAt(t);
            h(X, w, F, e, e);
          }
          const $e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
          for (let t = 0; t < $e.length; t++) {
            const e = $e.charAt(t);
            h(d, w, oe, e, e), h(X, w, F, e, e);
          }
          h(d, E, F, "C", "ℂ"), h(X, E, F, "C", "ℂ"), h(d, E, F, "H", "ℍ"), h(X, E, F, "H", "ℍ"), h(d, E, F, "N", "ℕ"), h(X, E, F, "N", "ℕ"), h(d, E, F, "P", "ℙ"), h(X, E, F, "P", "ℙ"), h(d, E, F, "Q", "ℚ"), h(X, E, F, "Q", "ℚ"), h(d, E, F, "R", "ℝ"), h(X, E, F, "R", "ℝ"), h(d, E, F, "Z", "ℤ"), h(X, E, F, "Z", "ℤ"), h(d, w, oe, "h", "ℎ"), h(X, w, oe, "h", "ℎ");
          let ue = "";
          for (let t = 0; t < $e.length; t++) {
            const e = $e.charAt(t);
            ue = String.fromCharCode(55349, 56320 + t), h(d, w, oe, e, ue), h(X, w, F, e, ue), ue = String.fromCharCode(55349, 56372 + t), h(d, w, oe, e, ue), h(X, w, F, e, ue), ue = String.fromCharCode(55349, 56424 + t), h(d, w, oe, e, ue), h(X, w, F, e, ue), ue = String.fromCharCode(55349, 56580 + t), h(d, w, oe, e, ue), h(X, w, F, e, ue), ue = String.fromCharCode(55349, 56684 + t), h(d, w, oe, e, ue), h(X, w, F, e, ue), ue = String.fromCharCode(55349, 56736 + t), h(d, w, oe, e, ue), h(X, w, F, e, ue), ue = String.fromCharCode(55349, 56788 + t), h(d, w, oe, e, ue), h(X, w, F, e, ue), ue = String.fromCharCode(55349, 56840 + t), h(d, w, oe, e, ue), h(X, w, F, e, ue), ue = String.fromCharCode(55349, 56944 + t), h(d, w, oe, e, ue), h(X, w, F, e, ue), t < 26 && (ue = String.fromCharCode(55349, 56632 + t), h(d, w, oe, e, ue), h(X, w, F, e, ue), ue = String.fromCharCode(55349, 56476 + t), h(d, w, oe, e, ue), h(X, w, F, e, ue));
          }
          ue = "𝕜", h(d, w, oe, "k", ue), h(X, w, F, "k", ue);
          for (let t = 0; t < 10; t++) {
            const e = t.toString();
            ue = String.fromCharCode(55349, 57294 + t), h(d, w, oe, e, ue), h(X, w, F, e, ue), ue = String.fromCharCode(55349, 57314 + t), h(d, w, oe, e, ue), h(X, w, F, e, ue), ue = String.fromCharCode(55349, 57324 + t), h(d, w, oe, e, ue), h(X, w, F, e, ue), ue = String.fromCharCode(55349, 57334 + t), h(d, w, oe, e, ue), h(X, w, F, e, ue);
          }
          const et = "ÐÞþ";
          for (let t = 0; t < et.length; t++) {
            const e = et.charAt(t);
            h(d, w, oe, e, e), h(X, w, F, e, e);
          }
          const P0 = [
            ["mathbf", "textbf", "Main-Bold"],
            // A-Z bold upright
            ["mathbf", "textbf", "Main-Bold"],
            // a-z bold upright
            ["mathnormal", "textit", "Math-Italic"],
            // A-Z italic
            ["mathnormal", "textit", "Math-Italic"],
            // a-z italic
            ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
            // A-Z bold italic
            ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
            // a-z bold italic
            // Map fancy A-Z letters to script, not calligraphic.
            // This aligns with unicode-math and math fonts (except Cambria Math).
            ["mathscr", "textscr", "Script-Regular"],
            // A-Z script
            ["", "", ""],
            // a-z script.  No font
            ["", "", ""],
            // A-Z bold script. No font
            ["", "", ""],
            // a-z bold script. No font
            ["mathfrak", "textfrak", "Fraktur-Regular"],
            // A-Z Fraktur
            ["mathfrak", "textfrak", "Fraktur-Regular"],
            // a-z Fraktur
            ["mathbb", "textbb", "AMS-Regular"],
            // A-Z double-struck
            ["mathbb", "textbb", "AMS-Regular"],
            // k double-struck
            // Note that we are using a bold font, but font metrics for regular Fraktur.
            ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
            // A-Z bold Fraktur
            ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
            // a-z bold Fraktur
            ["mathsf", "textsf", "SansSerif-Regular"],
            // A-Z sans-serif
            ["mathsf", "textsf", "SansSerif-Regular"],
            // a-z sans-serif
            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
            // A-Z bold sans-serif
            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
            // a-z bold sans-serif
            ["mathitsf", "textitsf", "SansSerif-Italic"],
            // A-Z italic sans-serif
            ["mathitsf", "textitsf", "SansSerif-Italic"],
            // a-z italic sans-serif
            ["", "", ""],
            // A-Z bold italic sans. No font
            ["", "", ""],
            // a-z bold italic sans. No font
            ["mathtt", "texttt", "Typewriter-Regular"],
            // A-Z monospace
            ["mathtt", "texttt", "Typewriter-Regular"]
            // a-z monospace
          ], dn = [
            ["mathbf", "textbf", "Main-Bold"],
            // 0-9 bold
            ["", "", ""],
            // 0-9 double-struck. No KaTeX font.
            ["mathsf", "textsf", "SansSerif-Regular"],
            // 0-9 sans-serif
            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
            // 0-9 bold sans-serif
            ["mathtt", "texttt", "Typewriter-Regular"]
            // 0-9 monospace
          ], jo = function(t, e) {
            const r = t.charCodeAt(0), l = t.charCodeAt(1), c = (r - 55296) * 1024 + (l - 56320) + 65536, m = e === "math" ? 0 : 1;
            if (119808 <= c && c < 120484) {
              const g = Math.floor((c - 119808) / 26);
              return [P0[g][2], P0[g][m]];
            } else if (120782 <= c && c <= 120831) {
              const g = Math.floor((c - 120782) / 10);
              return [dn[g][2], dn[g][m]];
            } else {
              if (c === 120485 || c === 120486)
                return [P0[0][2], P0[0][m]];
              if (120486 < c && c < 120782)
                return ["", ""];
              throw new o("Unsupported character: " + t);
            }
          }, Un = function(t, e, r) {
            return ye[r][t] && ye[r][t].replace && (t = ye[r][t].replace), {
              value: t,
              metrics: b0(t, e, r)
            };
          }, Zt = function(t, e, r, l, c) {
            const m = Un(t, e, r), g = m.metrics;
            t = m.value;
            let _;
            if (g) {
              let v = g.italic;
              (r === "text" || l && l.font === "mathit") && (v = 0), _ = new wt(t, g.height, g.depth, v, g.skew, g.width, c);
            } else
              typeof console < "u" && console.warn("No character metrics " + ("for '" + t + "' in style '" + e + "' and mode '" + r + "'")), _ = new wt(t, 0, 0, 0, 0, 0, c);
            if (l) {
              _.maxFontSize = l.sizeMultiplier, l.style.isTight() && _.classes.push("mtight");
              const v = l.getColor();
              v && (_.style.color = v);
            }
            return _;
          }, Xo = function(t, e, r, l) {
            return l === void 0 && (l = []), r.font === "boldsymbol" && Un(t, "Main-Bold", e).metrics ? Zt(t, "Main-Bold", e, r, l.concat(["mathbf"])) : t === "\\" || ye[e][t].font === "main" ? Zt(t, "Main-Regular", e, r, l) : Zt(t, "AMS-Regular", e, r, l.concat(["amsrm"]));
          }, Yo = function(t, e, r, l, c) {
            return c !== "textord" && Un(t, "Math-BoldItalic", e).metrics ? {
              fontName: "Math-BoldItalic",
              fontClass: "boldsymbol"
            } : {
              fontName: "Main-Bold",
              fontClass: "mathbf"
            };
          }, Zo = function(t, e, r) {
            const l = t.mode, c = t.text, m = ["mord"], g = l === "math" || l === "text" && e.font, _ = g ? e.font : e.fontFamily;
            let v = "", T = "";
            if (c.charCodeAt(0) === 55349 && ([v, T] = jo(c, l)), v.length > 0)
              return Zt(c, v, l, e, m.concat(T));
            if (_) {
              let N, R;
              if (_ === "boldsymbol") {
                const P = Yo(c, l, e, m, r);
                N = P.fontName, R = [P.fontClass];
              } else
                g ? (N = ai[_].fontName, R = [_]) : (N = Gn(_, e.fontWeight, e.fontShape), R = [_, e.fontWeight, e.fontShape]);
              if (Un(c, N, l).metrics)
                return Zt(c, N, l, e, m.concat(R));
              if (Je.hasOwnProperty(c) && N.slice(0, 10) === "Typewriter") {
                const P = [];
                for (let Y = 0; Y < c.length; Y++)
                  P.push(Zt(c[Y], N, l, e, m.concat(R)));
                return li(P);
              }
            }
            if (r === "mathord")
              return Zt(c, "Math-Italic", l, e, m.concat(["mathnormal"]));
            if (r === "textord") {
              const N = ye[l][c] && ye[l][c].font;
              if (N === "ams") {
                const R = Gn("amsrm", e.fontWeight, e.fontShape);
                return Zt(c, R, l, e, m.concat("amsrm", e.fontWeight, e.fontShape));
              } else if (N === "main" || !N) {
                const R = Gn("textrm", e.fontWeight, e.fontShape);
                return Zt(c, R, l, e, m.concat(e.fontWeight, e.fontShape));
              } else {
                const R = Gn(N, e.fontWeight, e.fontShape);
                return Zt(c, R, l, e, m.concat(R, e.fontWeight, e.fontShape));
              }
            } else
              throw new Error("unexpected type: " + r + " in makeOrd");
          }, Ko = (t, e) => {
            if (Rt(t.classes) !== Rt(e.classes) || t.skew !== e.skew || t.maxFontSize !== e.maxFontSize)
              return !1;
            if (t.classes.length === 1) {
              const r = t.classes[0];
              if (r === "mbin" || r === "mord")
                return !1;
            }
            for (const r in t.style)
              if (t.style.hasOwnProperty(r) && t.style[r] !== e.style[r])
                return !1;
            for (const r in e.style)
              if (e.style.hasOwnProperty(r) && t.style[r] !== e.style[r])
                return !1;
            return !0;
          }, Qo = (t) => {
            for (let e = 0; e < t.length - 1; e++) {
              const r = t[e], l = t[e + 1];
              r instanceof wt && l instanceof wt && Ko(r, l) && (r.text += l.text, r.height = Math.max(r.height, l.height), r.depth = Math.max(r.depth, l.depth), r.italic = l.italic, t.splice(e + 1, 1), e--);
            }
            return t;
          }, Rr = function(t) {
            let e = 0, r = 0, l = 0;
            for (let c = 0; c < t.children.length; c++) {
              const m = t.children[c];
              m.height > e && (e = m.height), m.depth > r && (r = m.depth), m.maxFontSize > l && (l = m.maxFontSize);
            }
            t.height = e, t.depth = r, t.maxFontSize = l;
          }, yt = function(t, e, r, l) {
            const c = new q0(t, e, r, l);
            return Rr(c), c;
          }, ii = (t, e, r, l) => new q0(t, e, r, l), Jo = function(t, e, r) {
            const l = yt([t], [], e);
            return l.height = Math.max(r || e.fontMetrics().defaultRuleThickness, e.minRuleThickness), l.style.borderBottomWidth = Q(l.height), l.maxFontSize = 1, l;
          }, $o = function(t, e, r, l) {
            const c = new je(t, e, r, l);
            return Rr(c), c;
          }, li = function(t) {
            const e = new r0(t);
            return Rr(e), e;
          }, eu = function(t, e) {
            return t instanceof r0 ? yt([], [t], e) : t;
          }, tu = function(t) {
            if (t.positionType === "individualShift") {
              const r = t.children, l = [r[0]], c = -r[0].shift - r[0].elem.depth;
              let m = c;
              for (let g = 1; g < r.length; g++) {
                const _ = -r[g].shift - m - r[g].elem.depth, v = _ - (r[g - 1].elem.height + r[g - 1].elem.depth);
                m = m + _, l.push({
                  type: "kern",
                  size: v
                }), l.push(r[g]);
              }
              return {
                children: l,
                depth: c
              };
            }
            let e;
            if (t.positionType === "top") {
              let r = t.positionData;
              for (let l = 0; l < t.children.length; l++) {
                const c = t.children[l];
                r -= c.type === "kern" ? c.size : c.elem.height + c.elem.depth;
              }
              e = r;
            } else if (t.positionType === "bottom")
              e = -t.positionData;
            else {
              const r = t.children[0];
              if (r.type !== "elem")
                throw new Error('First child must have type "elem".');
              if (t.positionType === "shift")
                e = -r.elem.depth - t.positionData;
              else if (t.positionType === "firstBaseline")
                e = -r.elem.depth;
              else
                throw new Error("Invalid positionType " + t.positionType + ".");
            }
            return {
              children: t.children,
              depth: e
            };
          }, nu = function(t, e) {
            const {
              children: r,
              depth: l
            } = tu(t);
            let c = 0;
            for (let Y = 0; Y < r.length; Y++) {
              const se = r[Y];
              if (se.type === "elem") {
                const ae = se.elem;
                c = Math.max(c, ae.maxFontSize, ae.height);
              }
            }
            c += 2;
            const m = yt(["pstrut"], []);
            m.style.height = Q(c);
            const g = [];
            let _ = l, v = l, T = l;
            for (let Y = 0; Y < r.length; Y++) {
              const se = r[Y];
              if (se.type === "kern")
                T += se.size;
              else {
                const ae = se.elem, ke = se.wrapperClasses || [], ge = se.wrapperStyle || {}, xe = yt(ke, [m, ae], void 0, ge);
                xe.style.top = Q(-c - T - ae.depth), se.marginLeft && (xe.style.marginLeft = se.marginLeft), se.marginRight && (xe.style.marginRight = se.marginRight), g.push(xe), T += ae.height + ae.depth;
              }
              _ = Math.min(_, T), v = Math.max(v, T);
            }
            const N = yt(["vlist"], g);
            N.style.height = Q(v);
            let R;
            if (_ < 0) {
              const Y = yt([], []), se = yt(["vlist"], [Y]);
              se.style.height = Q(-_);
              const ae = yt(["vlist-s"], [new wt("​")]);
              R = [yt(["vlist-r"], [N, ae]), yt(["vlist-r"], [se])];
            } else
              R = [yt(["vlist-r"], [N])];
            const P = yt(["vlist-t"], R);
            return R.length === 2 && P.classes.push("vlist-t2"), P.height = v, P.depth = -_, P;
          }, ru = (t, e) => {
            const r = yt(["mspace"], [], e), l = Ce(t, e);
            return r.style.marginRight = Q(l), r;
          }, Gn = function(t, e, r) {
            let l = "";
            switch (t) {
              case "amsrm":
                l = "AMS";
                break;
              case "textrm":
                l = "Main";
                break;
              case "textsf":
                l = "SansSerif";
                break;
              case "texttt":
                l = "Typewriter";
                break;
              default:
                l = t;
            }
            let c;
            return e === "textbf" && r === "textit" ? c = "BoldItalic" : e === "textbf" ? c = "Bold" : e === "textit" ? c = "Italic" : c = "Regular", l + "-" + c;
          }, ai = {
            // styles
            mathbf: {
              variant: "bold",
              fontName: "Main-Bold"
            },
            mathrm: {
              variant: "normal",
              fontName: "Main-Regular"
            },
            textit: {
              variant: "italic",
              fontName: "Main-Italic"
            },
            mathit: {
              variant: "italic",
              fontName: "Main-Italic"
            },
            mathnormal: {
              variant: "italic",
              fontName: "Math-Italic"
            },
            // "boldsymbol" is missing because they require the use of multiple fonts:
            // Math-BoldItalic and Main-Bold.  This is handled by a special case in
            // makeOrd which ends up calling boldsymbol.
            // families
            mathbb: {
              variant: "double-struck",
              fontName: "AMS-Regular"
            },
            mathcal: {
              variant: "script",
              fontName: "Caligraphic-Regular"
            },
            mathfrak: {
              variant: "fraktur",
              fontName: "Fraktur-Regular"
            },
            mathscr: {
              variant: "script",
              fontName: "Script-Regular"
            },
            mathsf: {
              variant: "sans-serif",
              fontName: "SansSerif-Regular"
            },
            mathtt: {
              variant: "monospace",
              fontName: "Typewriter-Regular"
            }
          }, oi = {
            //   path, width, height
            vec: ["vec", 0.471, 0.714],
            // values from the font glyph
            oiintSize1: ["oiintSize1", 0.957, 0.499],
            // oval to overlay the integrand
            oiintSize2: ["oiintSize2", 1.472, 0.659],
            oiiintSize1: ["oiiintSize1", 1.304, 0.499],
            oiiintSize2: ["oiiintSize2", 1.98, 0.659]
          };
          var L = {
            fontMap: ai,
            makeSymbol: Zt,
            mathsym: Xo,
            makeSpan: yt,
            makeSvgSpan: ii,
            makeLineSpan: Jo,
            makeAnchor: $o,
            makeFragment: li,
            wrapFragment: eu,
            makeVList: nu,
            makeOrd: Zo,
            makeGlue: ru,
            staticSvg: function(t, e) {
              const [r, l, c] = oi[t], m = new Lt(r), g = new It([m], {
                width: Q(l),
                height: Q(c),
                // Override CSS rule `.katex svg { width: 100% }`
                style: "width:" + Q(l),
                viewBox: "0 0 " + 1e3 * l + " " + 1e3 * c,
                preserveAspectRatio: "xMinYMin"
              }), _ = ii(["overlay"], [g], e);
              return _.height = c, _.style.height = Q(c), _.style.width = Q(l), _;
            },
            svgData: oi,
            tryCombineChars: Qo
          };
          const Ge = {
            number: 3,
            unit: "mu"
          }, H0 = {
            number: 4,
            unit: "mu"
          }, y0 = {
            number: 5,
            unit: "mu"
          }, su = {
            mord: {
              mop: Ge,
              mbin: H0,
              mrel: y0,
              minner: Ge
            },
            mop: {
              mord: Ge,
              mop: Ge,
              mrel: y0,
              minner: Ge
            },
            mbin: {
              mord: H0,
              mop: H0,
              mopen: H0,
              minner: H0
            },
            mrel: {
              mord: y0,
              mop: y0,
              mopen: y0,
              minner: y0
            },
            mopen: {},
            mclose: {
              mop: Ge,
              mbin: H0,
              mrel: y0,
              minner: Ge
            },
            mpunct: {
              mord: Ge,
              mop: Ge,
              mrel: y0,
              mopen: Ge,
              mclose: Ge,
              mpunct: Ge,
              minner: Ge
            },
            minner: {
              mord: Ge,
              mop: Ge,
              mbin: H0,
              mrel: y0,
              mopen: Ge,
              mpunct: Ge,
              minner: Ge
            }
          }, iu = {
            mord: {
              mop: Ge
            },
            mop: {
              mord: Ge,
              mop: Ge
            },
            mbin: {},
            mrel: {},
            mopen: {},
            mclose: {
              mop: Ge
            },
            mpunct: {},
            minner: {
              mop: Ge
            }
          }, ui = {}, Vn = {}, Wn = {};
          function ee(t) {
            let {
              type: e,
              names: r,
              props: l,
              handler: c,
              htmlBuilder: m,
              mathmlBuilder: g
            } = t;
            const _ = {
              type: e,
              numArgs: l.numArgs,
              argTypes: l.argTypes,
              allowedInArgument: !!l.allowedInArgument,
              allowedInText: !!l.allowedInText,
              allowedInMath: l.allowedInMath === void 0 ? !0 : l.allowedInMath,
              numOptionalArgs: l.numOptionalArgs || 0,
              infix: !!l.infix,
              primitive: !!l.primitive,
              handler: c
            };
            for (let v = 0; v < r.length; ++v)
              ui[r[v]] = _;
            e && (m && (Vn[e] = m), g && (Wn[e] = g));
          }
          function U0(t) {
            let {
              type: e,
              htmlBuilder: r,
              mathmlBuilder: l
            } = t;
            ee({
              type: e,
              names: [],
              props: {
                numArgs: 0
              },
              handler() {
                throw new Error("Should never be called.");
              },
              htmlBuilder: r,
              mathmlBuilder: l
            });
          }
          const jn = function(t) {
            return t.type === "ordgroup" && t.body.length === 1 ? t.body[0] : t;
          }, Ze = function(t) {
            return t.type === "ordgroup" ? t.body : [t];
          }, _0 = L.makeSpan, lu = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], au = ["rightmost", "mrel", "mclose", "mpunct"], ou = {
            display: V.DISPLAY,
            text: V.TEXT,
            script: V.SCRIPT,
            scriptscript: V.SCRIPTSCRIPT
          }, uu = {
            mord: "mord",
            mop: "mop",
            mbin: "mbin",
            mrel: "mrel",
            mopen: "mopen",
            mclose: "mclose",
            mpunct: "mpunct",
            minner: "minner"
          }, tt = function(t, e, r, l) {
            l === void 0 && (l = [null, null]);
            const c = [];
            for (let T = 0; T < t.length; T++) {
              const N = Ae(t[T], e);
              if (N instanceof r0) {
                const R = N.children;
                c.push(...R);
              } else
                c.push(N);
            }
            if (L.tryCombineChars(c), !r)
              return c;
            let m = e;
            if (t.length === 1) {
              const T = t[0];
              T.type === "sizing" ? m = e.havingSize(T.size) : T.type === "styling" && (m = e.havingStyle(ou[T.style]));
            }
            const g = _0([l[0] || "leftmost"], [], e), _ = _0([l[1] || "rightmost"], [], e), v = r === "root";
            return Ir(c, (T, N) => {
              const R = N.classes[0], P = T.classes[0];
              R === "mbin" && U.contains(au, P) ? N.classes[0] = "mord" : P === "mbin" && U.contains(lu, R) && (T.classes[0] = "mord");
            }, {
              node: g
            }, _, v), Ir(c, (T, N) => {
              const R = Or(N), P = Or(T), Y = R && P ? T.hasClass("mtight") ? iu[R][P] : su[R][P] : null;
              if (Y)
                return L.makeGlue(Y, m);
            }, {
              node: g
            }, _, v), c;
          }, Ir = function(t, e, r, l, c) {
            l && t.push(l);
            let m = 0;
            for (; m < t.length; m++) {
              const g = t[m], _ = ci(g);
              if (_) {
                Ir(_.children, e, r, null, c);
                continue;
              }
              const v = !g.hasClass("mspace");
              if (v) {
                const T = e(g, r.node);
                T && (r.insertAfter ? r.insertAfter(T) : (t.unshift(T), m++));
              }
              v ? r.node = g : c && g.hasClass("newline") && (r.node = _0(["leftmost"])), r.insertAfter = /* @__PURE__ */ ((T) => (N) => {
                t.splice(T + 1, 0, N), m++;
              })(m);
            }
            l && t.pop();
          }, ci = function(t) {
            return t instanceof r0 || t instanceof je || t instanceof q0 && t.hasClass("enclosing") ? t : null;
          }, Lr = function(t, e) {
            const r = ci(t);
            if (r) {
              const l = r.children;
              if (l.length) {
                if (e === "right")
                  return Lr(l[l.length - 1], "right");
                if (e === "left")
                  return Lr(l[0], "left");
              }
            }
            return t;
          }, Or = function(t, e) {
            return t ? (e && (t = Lr(t, e)), uu[t.classes[0]] || null) : null;
          }, mn = function(t, e) {
            const r = ["nulldelimiter"].concat(t.baseSizingClasses());
            return _0(e.concat(r));
          }, Ae = function(t, e, r) {
            if (!t)
              return _0();
            if (Vn[t.type]) {
              let l = Vn[t.type](t, e);
              if (r && e.size !== r.size) {
                l = _0(e.sizingClasses(r), [l], e);
                const c = e.sizeMultiplier / r.sizeMultiplier;
                l.height *= c, l.depth *= c;
              }
              return l;
            } else
              throw new o("Got group of unknown type: '" + t.type + "'");
          };
          function Xn(t, e) {
            const r = _0(["base"], t, e), l = _0(["strut"]);
            return l.style.height = Q(r.height + r.depth), r.depth && (l.style.verticalAlign = Q(-r.depth)), r.children.unshift(l), r;
          }
          function qr(t, e) {
            let r = null;
            t.length === 1 && t[0].type === "tag" && (r = t[0].tag, t = t[0].body);
            const l = tt(t, e, "root");
            let c;
            l.length === 2 && l[1].hasClass("tag") && (c = l.pop());
            const m = [];
            let g = [];
            for (let T = 0; T < l.length; T++)
              if (g.push(l[T]), l[T].hasClass("mbin") || l[T].hasClass("mrel") || l[T].hasClass("allowbreak")) {
                let N = !1;
                for (; T < l.length - 1 && l[T + 1].hasClass("mspace") && !l[T + 1].hasClass("newline"); )
                  T++, g.push(l[T]), l[T].hasClass("nobreak") && (N = !0);
                N || (m.push(Xn(g, e)), g = []);
              } else
                l[T].hasClass("newline") && (g.pop(), g.length > 0 && (m.push(Xn(g, e)), g = []), m.push(l[T]));
            g.length > 0 && m.push(Xn(g, e));
            let _;
            r ? (_ = Xn(tt(r, e, !0)), _.classes = ["tag"], m.push(_)) : c && m.push(c);
            const v = _0(["katex-html"], m);
            if (v.setAttribute("aria-hidden", "true"), _) {
              const T = _.children[0];
              T.style.height = Q(v.height + v.depth), v.depth && (T.style.verticalAlign = Q(-v.depth));
            }
            return v;
          }
          function hi(t) {
            return new r0(t);
          }
          class Ot {
            constructor(e, r, l) {
              this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = r || [], this.classes = l || [];
            }
            /**
             * Sets an attribute on a MathML node. MathML depends on attributes to convey a
             * semantic content, so this is used heavily.
             */
            setAttribute(e, r) {
              this.attributes[e] = r;
            }
            /**
             * Gets an attribute on a MathML node.
             */
            getAttribute(e) {
              return this.attributes[e];
            }
            /**
             * Converts the math node into a MathML-namespaced DOM element.
             */
            toNode() {
              const e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
              for (const r in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, r) && e.setAttribute(r, this.attributes[r]);
              this.classes.length > 0 && (e.className = Rt(this.classes));
              for (let r = 0; r < this.children.length; r++)
                e.appendChild(this.children[r].toNode());
              return e;
            }
            /**
             * Converts the math node into an HTML markup string.
             */
            toMarkup() {
              let e = "<" + this.type;
              for (const r in this.attributes)
                Object.prototype.hasOwnProperty.call(this.attributes, r) && (e += " " + r + '="', e += U.escape(this.attributes[r]), e += '"');
              this.classes.length > 0 && (e += ' class ="' + U.escape(Rt(this.classes)) + '"'), e += ">";
              for (let r = 0; r < this.children.length; r++)
                e += this.children[r].toMarkup();
              return e += "</" + this.type + ">", e;
            }
            /**
             * Converts the math node into a string, similar to innerText, but escaped.
             */
            toText() {
              return this.children.map((e) => e.toText()).join("");
            }
          }
          class pn {
            constructor(e) {
              this.text = void 0, this.text = e;
            }
            /**
             * Converts the text node into a DOM text node.
             */
            toNode() {
              return document.createTextNode(this.text);
            }
            /**
             * Converts the text node into escaped HTML markup
             * (representing the text itself).
             */
            toMarkup() {
              return U.escape(this.toText());
            }
            /**
             * Converts the text node into a string
             * (representing the text itself).
             */
            toText() {
              return this.text;
            }
          }
          class cu {
            /**
             * Create a Space node with width given in CSS ems.
             */
            constructor(e) {
              this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
            }
            /**
             * Converts the math node into a MathML-namespaced DOM element.
             */
            toNode() {
              if (this.character)
                return document.createTextNode(this.character);
              {
                const e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
                return e.setAttribute("width", Q(this.width)), e;
              }
            }
            /**
             * Converts the math node into an HTML markup string.
             */
            toMarkup() {
              return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + Q(this.width) + '"/>';
            }
            /**
             * Converts the math node into a string, similar to innerText.
             */
            toText() {
              return this.character ? this.character : " ";
            }
          }
          var Z = {
            MathNode: Ot,
            TextNode: pn,
            SpaceNode: cu,
            newDocumentFragment: hi
          };
          const qt = function(t, e, r) {
            return ye[e][t] && ye[e][t].replace && t.charCodeAt(0) !== 55349 && !(Je.hasOwnProperty(t) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (t = ye[e][t].replace), new Z.TextNode(t);
          }, Pr = function(t) {
            return t.length === 1 ? t[0] : new Z.MathNode("mrow", t);
          }, Hr = function(t, e) {
            if (e.fontFamily === "texttt")
              return "monospace";
            if (e.fontFamily === "textsf")
              return e.fontShape === "textit" && e.fontWeight === "textbf" ? "sans-serif-bold-italic" : e.fontShape === "textit" ? "sans-serif-italic" : e.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
            if (e.fontShape === "textit" && e.fontWeight === "textbf")
              return "bold-italic";
            if (e.fontShape === "textit")
              return "italic";
            if (e.fontWeight === "textbf")
              return "bold";
            const r = e.font;
            if (!r || r === "mathnormal")
              return null;
            const l = t.mode;
            if (r === "mathit")
              return "italic";
            if (r === "boldsymbol")
              return t.type === "textord" ? "bold" : "bold-italic";
            if (r === "mathbf")
              return "bold";
            if (r === "mathbb")
              return "double-struck";
            if (r === "mathfrak")
              return "fraktur";
            if (r === "mathscr" || r === "mathcal")
              return "script";
            if (r === "mathsf")
              return "sans-serif";
            if (r === "mathtt")
              return "monospace";
            let c = t.text;
            if (U.contains(["\\imath", "\\jmath"], c))
              return null;
            ye[l][c] && ye[l][c].replace && (c = ye[l][c].replace);
            const m = L.fontMap[r].fontName;
            return b0(c, m, l) ? L.fontMap[r].variant : null;
          }, _t = function(t, e, r) {
            if (t.length === 1) {
              const m = Le(t[0], e);
              return r && m instanceof Ot && m.type === "mo" && (m.setAttribute("lspace", "0em"), m.setAttribute("rspace", "0em")), [m];
            }
            const l = [];
            let c;
            for (let m = 0; m < t.length; m++) {
              const g = Le(t[m], e);
              if (g instanceof Ot && c instanceof Ot) {
                if (g.type === "mtext" && c.type === "mtext" && g.getAttribute("mathvariant") === c.getAttribute("mathvariant")) {
                  c.children.push(...g.children);
                  continue;
                } else if (g.type === "mn" && c.type === "mn") {
                  c.children.push(...g.children);
                  continue;
                } else if (g.type === "mi" && g.children.length === 1 && c.type === "mn") {
                  const _ = g.children[0];
                  if (_ instanceof pn && _.text === ".") {
                    c.children.push(...g.children);
                    continue;
                  }
                } else if (c.type === "mi" && c.children.length === 1) {
                  const _ = c.children[0];
                  if (_ instanceof pn && _.text === "̸" && (g.type === "mo" || g.type === "mi" || g.type === "mn")) {
                    const v = g.children[0];
                    v instanceof pn && v.text.length > 0 && (v.text = v.text.slice(0, 1) + "̸" + v.text.slice(1), l.pop());
                  }
                }
              }
              l.push(g), c = g;
            }
            return l;
          }, C0 = function(t, e, r) {
            return Pr(_t(t, e, r));
          }, Le = function(t, e) {
            if (!t)
              return new Z.MathNode("mrow");
            if (Wn[t.type])
              return Wn[t.type](t, e);
            throw new o("Got group of unknown type: '" + t.type + "'");
          };
          function fi(t, e, r, l, c) {
            const m = _t(t, r);
            let g;
            m.length === 1 && m[0] instanceof Ot && U.contains(["mrow", "mtable"], m[0].type) ? g = m[0] : g = new Z.MathNode("mrow", m);
            const _ = new Z.MathNode("annotation", [new Z.TextNode(e)]);
            _.setAttribute("encoding", "application/x-tex");
            const v = new Z.MathNode("semantics", [g, _]), T = new Z.MathNode("math", [v]);
            T.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), l && T.setAttribute("display", "block");
            const N = c ? "katex" : "katex-mathml";
            return L.makeSpan([N], [T]);
          }
          const di = function(t) {
            return new In({
              style: t.displayMode ? V.DISPLAY : V.TEXT,
              maxSize: t.maxSize,
              minRuleThickness: t.minRuleThickness
            });
          }, mi = function(t, e) {
            if (e.displayMode) {
              const r = ["katex-display"];
              e.leqno && r.push("leqno"), e.fleqn && r.push("fleqn"), t = L.makeSpan(r, [t]);
            }
            return t;
          }, hu = function(t, e, r) {
            const l = di(r);
            let c;
            if (r.output === "mathml")
              return fi(t, e, l, r.displayMode, !0);
            if (r.output === "html") {
              const m = qr(t, l);
              c = L.makeSpan(["katex"], [m]);
            } else {
              const m = fi(t, e, l, r.displayMode, !1), g = qr(t, l);
              c = L.makeSpan(["katex"], [m, g]);
            }
            return mi(c, r);
          }, fu = function(t, e, r) {
            const l = di(r), c = qr(t, l), m = L.makeSpan(["katex"], [c]);
            return mi(m, r);
          }, du = {
            widehat: "^",
            widecheck: "ˇ",
            widetilde: "~",
            utilde: "~",
            overleftarrow: "←",
            underleftarrow: "←",
            xleftarrow: "←",
            overrightarrow: "→",
            underrightarrow: "→",
            xrightarrow: "→",
            underbrace: "⏟",
            overbrace: "⏞",
            overgroup: "⏠",
            undergroup: "⏡",
            overleftrightarrow: "↔",
            underleftrightarrow: "↔",
            xleftrightarrow: "↔",
            Overrightarrow: "⇒",
            xRightarrow: "⇒",
            overleftharpoon: "↼",
            xleftharpoonup: "↼",
            overrightharpoon: "⇀",
            xrightharpoonup: "⇀",
            xLeftarrow: "⇐",
            xLeftrightarrow: "⇔",
            xhookleftarrow: "↩",
            xhookrightarrow: "↪",
            xmapsto: "↦",
            xrightharpoondown: "⇁",
            xleftharpoondown: "↽",
            xrightleftharpoons: "⇌",
            xleftrightharpoons: "⇋",
            xtwoheadleftarrow: "↞",
            xtwoheadrightarrow: "↠",
            xlongequal: "=",
            xtofrom: "⇄",
            xrightleftarrows: "⇄",
            xrightequilibrium: "⇌",
            // Not a perfect match.
            xleftequilibrium: "⇋",
            // None better available.
            "\\cdrightarrow": "→",
            "\\cdleftarrow": "←",
            "\\cdlongequal": "="
          }, mu = function(t) {
            const e = new Z.MathNode("mo", [new Z.TextNode(du[t.replace(/^\\/, "")])]);
            return e.setAttribute("stretchy", "true"), e;
          }, pu = {
            //   path(s), minWidth, height, align
            overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
            overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
            underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
            underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
            xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
            "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
            // CD minwwidth2.5pc
            xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
            "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
            Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
            xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
            xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
            overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
            xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
            xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
            overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
            xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
            xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
            xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
            "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
            xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
            xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
            overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
            overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
            underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
            underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
            xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
            xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
            xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
            xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
            xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
            xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
            overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
            underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
            overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
            undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
            xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
            xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
            // The next three arrows are from the mhchem package.
            // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
            // document as \xrightarrow or \xrightleftharpoons. Those have
            // min-length = 1.75em, so we set min-length on these next three to match.
            xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
            xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
            xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
          }, gu = function(t) {
            return t.type === "ordgroup" ? t.body.length : 1;
          };
          var k0 = {
            encloseSpan: function(t, e, r, l, c) {
              let m;
              const g = t.height + t.depth + r + l;
              if (/fbox|color|angl/.test(e)) {
                if (m = L.makeSpan(["stretchy", e], [], c), e === "fbox") {
                  const _ = c.color && c.getColor();
                  _ && (m.style.borderColor = _);
                }
              } else {
                const _ = [];
                /^[bx]cancel$/.test(e) && _.push(new J0({
                  x1: "0",
                  y1: "0",
                  x2: "100%",
                  y2: "100%",
                  "stroke-width": "0.046em"
                })), /^x?cancel$/.test(e) && _.push(new J0({
                  x1: "0",
                  y1: "100%",
                  x2: "100%",
                  y2: "0",
                  "stroke-width": "0.046em"
                }));
                const v = new It(_, {
                  width: "100%",
                  height: Q(g)
                });
                m = L.makeSvgSpan([], [v], c);
              }
              return m.height = g, m.style.height = Q(g), m;
            },
            mathMLnode: mu,
            svgSpan: function(t, e) {
              function r() {
                let g = 4e5;
                const _ = t.label.slice(1);
                if (U.contains(["widehat", "widecheck", "widetilde", "utilde"], _)) {
                  const T = gu(t.base);
                  let N, R, P;
                  if (T > 5)
                    _ === "widehat" || _ === "widecheck" ? (N = 420, g = 2364, P = 0.42, R = _ + "4") : (N = 312, g = 2340, P = 0.34, R = "tilde4");
                  else {
                    const ae = [1, 1, 2, 2, 3, 3][T];
                    _ === "widehat" || _ === "widecheck" ? (g = [0, 1062, 2364, 2364, 2364][ae], N = [0, 239, 300, 360, 420][ae], P = [0, 0.24, 0.3, 0.3, 0.36, 0.42][ae], R = _ + ae) : (g = [0, 600, 1033, 2339, 2340][ae], N = [0, 260, 286, 306, 312][ae], P = [0, 0.26, 0.286, 0.3, 0.306, 0.34][ae], R = "tilde" + ae);
                  }
                  const Y = new Lt(R), se = new It([Y], {
                    width: "100%",
                    height: Q(P),
                    viewBox: "0 0 " + g + " " + N,
                    preserveAspectRatio: "none"
                  });
                  return {
                    span: L.makeSvgSpan([], [se], e),
                    minWidth: 0,
                    height: P
                  };
                } else {
                  const v = [], T = pu[_], [N, R, P] = T, Y = P / 1e3, se = N.length;
                  let ae, ke;
                  if (se === 1) {
                    const ge = T[3];
                    ae = ["hide-tail"], ke = [ge];
                  } else if (se === 2)
                    ae = ["halfarrow-left", "halfarrow-right"], ke = ["xMinYMin", "xMaxYMin"];
                  else if (se === 3)
                    ae = ["brace-left", "brace-center", "brace-right"], ke = ["xMinYMin", "xMidYMin", "xMaxYMin"];
                  else
                    throw new Error(`Correct katexImagesData or update code here to support
                    ` + se + " children.");
                  for (let ge = 0; ge < se; ge++) {
                    const xe = new Lt(N[ge]), Te = new It([xe], {
                      width: "400em",
                      height: Q(Y),
                      viewBox: "0 0 " + g + " " + P,
                      preserveAspectRatio: ke[ge] + " slice"
                    }), qe = L.makeSvgSpan([ae[ge]], [Te], e);
                    if (se === 1)
                      return {
                        span: qe,
                        minWidth: R,
                        height: Y
                      };
                    qe.style.height = Q(Y), v.push(qe);
                  }
                  return {
                    span: L.makeSpan(["stretchy"], v, e),
                    minWidth: R,
                    height: Y
                  };
                }
              }
              const {
                span: l,
                minWidth: c,
                height: m
              } = r();
              return l.height = m, l.style.height = Q(m), c > 0 && (l.style.minWidth = Q(c)), l;
            }
          };
          function me(t, e) {
            if (!t || t.type !== e)
              throw new Error("Expected node of type " + e + ", but got " + (t ? "node of type " + t.type : String(t)));
            return t;
          }
          function Ur(t) {
            const e = Yn(t);
            if (!e)
              throw new Error("Expected node of symbol group type, but got " + (t ? "node of type " + t.type : String(t)));
            return e;
          }
          function Yn(t) {
            return t && (t.type === "atom" || Hn.hasOwnProperty(t.type)) ? t : null;
          }
          const Gr = (t, e) => {
            let r, l, c;
            t && t.type === "supsub" ? (l = me(t.base, "accent"), r = l.base, t.base = r, c = Nr(Ae(t, e)), t.base = l) : (l = me(t, "accent"), r = l.base);
            const m = Ae(r, e.havingCrampedStyle()), g = l.isShifty && U.isCharacterBox(r);
            let _ = 0;
            if (g) {
              const P = U.getBaseElem(r), Y = Ae(P, e.havingCrampedStyle());
              _ = fn(Y).skew;
            }
            const v = l.label === "\\c";
            let T = v ? m.height + m.depth : Math.min(m.height, e.fontMetrics().xHeight), N;
            if (l.isStretchy)
              N = k0.svgSpan(l, e), N = L.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: m
                }, {
                  type: "elem",
                  elem: N,
                  wrapperClasses: ["svg-align"],
                  wrapperStyle: _ > 0 ? {
                    width: "calc(100% - " + Q(2 * _) + ")",
                    marginLeft: Q(2 * _)
                  } : void 0
                }]
              }, e);
            else {
              let P, Y;
              l.label === "\\vec" ? (P = L.staticSvg("vec", e), Y = L.svgData.vec[1]) : (P = L.makeOrd({
                mode: l.mode,
                text: l.label
              }, e, "textord"), P = fn(P), P.italic = 0, Y = P.width, v && (T += P.depth)), N = L.makeSpan(["accent-body"], [P]);
              const se = l.label === "\\textcircled";
              se && (N.classes.push("accent-full"), T = m.height);
              let ae = _;
              se || (ae -= Y / 2), N.style.left = Q(ae), l.label === "\\textcircled" && (N.style.top = ".2em"), N = L.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: m
                }, {
                  type: "kern",
                  size: -T
                }, {
                  type: "elem",
                  elem: N
                }]
              }, e);
            }
            const R = L.makeSpan(["mord", "accent"], [N], e);
            return c ? (c.children[0] = R, c.height = Math.max(R.height, c.height), c.classes[0] = "mord", c) : R;
          }, pi = (t, e) => {
            const r = t.isStretchy ? k0.mathMLnode(t.label) : new Z.MathNode("mo", [qt(t.label, t.mode)]), l = new Z.MathNode("mover", [Le(t.base, e), r]);
            return l.setAttribute("accent", "true"), l;
          }, bu = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((t) => "\\" + t).join("|"));
          ee({
            type: "accent",
            names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
            props: {
              numArgs: 1
            },
            handler: (t, e) => {
              const r = jn(e[0]), l = !bu.test(t.funcName), c = !l || t.funcName === "\\widehat" || t.funcName === "\\widetilde" || t.funcName === "\\widecheck";
              return {
                type: "accent",
                mode: t.parser.mode,
                label: t.funcName,
                isStretchy: l,
                isShifty: c,
                base: r
              };
            },
            htmlBuilder: Gr,
            mathmlBuilder: pi
          }), ee({
            type: "accent",
            names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
            props: {
              numArgs: 1,
              allowedInText: !0,
              allowedInMath: !0,
              // unless in strict mode
              argTypes: ["primitive"]
            },
            handler: (t, e) => {
              const r = e[0];
              let l = t.parser.mode;
              return l === "math" && (t.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + t.funcName + " works only in text mode"), l = "text"), {
                type: "accent",
                mode: l,
                label: t.funcName,
                isStretchy: !1,
                isShifty: !0,
                base: r
              };
            },
            htmlBuilder: Gr,
            mathmlBuilder: pi
          }), ee({
            type: "accentUnder",
            names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
            props: {
              numArgs: 1
            },
            handler: (t, e) => {
              let {
                parser: r,
                funcName: l
              } = t;
              const c = e[0];
              return {
                type: "accentUnder",
                mode: r.mode,
                label: l,
                base: c
              };
            },
            htmlBuilder: (t, e) => {
              const r = Ae(t.base, e), l = k0.svgSpan(t, e), c = t.label === "\\utilde" ? 0.12 : 0, m = L.makeVList({
                positionType: "top",
                positionData: r.height,
                children: [{
                  type: "elem",
                  elem: l,
                  wrapperClasses: ["svg-align"]
                }, {
                  type: "kern",
                  size: c
                }, {
                  type: "elem",
                  elem: r
                }]
              }, e);
              return L.makeSpan(["mord", "accentunder"], [m], e);
            },
            mathmlBuilder: (t, e) => {
              const r = k0.mathMLnode(t.label), l = new Z.MathNode("munder", [Le(t.base, e), r]);
              return l.setAttribute("accentunder", "true"), l;
            }
          });
          const Zn = (t) => {
            const e = new Z.MathNode("mpadded", t ? [t] : []);
            return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
          };
          ee({
            type: "xArrow",
            names: [
              "\\xleftarrow",
              "\\xrightarrow",
              "\\xLeftarrow",
              "\\xRightarrow",
              "\\xleftrightarrow",
              "\\xLeftrightarrow",
              "\\xhookleftarrow",
              "\\xhookrightarrow",
              "\\xmapsto",
              "\\xrightharpoondown",
              "\\xrightharpoonup",
              "\\xleftharpoondown",
              "\\xleftharpoonup",
              "\\xrightleftharpoons",
              "\\xleftrightharpoons",
              "\\xlongequal",
              "\\xtwoheadrightarrow",
              "\\xtwoheadleftarrow",
              "\\xtofrom",
              // The next 3 functions are here to support the mhchem extension.
              // Direct use of these functions is discouraged and may break someday.
              "\\xrightleftarrows",
              "\\xrightequilibrium",
              "\\xleftequilibrium",
              // The next 3 functions are here only to support the {CD} environment.
              "\\\\cdrightarrow",
              "\\\\cdleftarrow",
              "\\\\cdlongequal"
            ],
            props: {
              numArgs: 1,
              numOptionalArgs: 1
            },
            handler(t, e, r) {
              let {
                parser: l,
                funcName: c
              } = t;
              return {
                type: "xArrow",
                mode: l.mode,
                label: c,
                body: e[0],
                below: r[0]
              };
            },
            // Flow is unable to correctly infer the type of `group`, even though it's
            // unambiguously determined from the passed-in `type` above.
            htmlBuilder(t, e) {
              const r = e.style;
              let l = e.havingStyle(r.sup());
              const c = L.wrapFragment(Ae(t.body, l, e), e), m = t.label.slice(0, 2) === "\\x" ? "x" : "cd";
              c.classes.push(m + "-arrow-pad");
              let g;
              t.below && (l = e.havingStyle(r.sub()), g = L.wrapFragment(Ae(t.below, l, e), e), g.classes.push(m + "-arrow-pad"));
              const _ = k0.svgSpan(t, e), v = -e.fontMetrics().axisHeight + 0.5 * _.height;
              let T = -e.fontMetrics().axisHeight - 0.5 * _.height - 0.111;
              (c.depth > 0.25 || t.label === "\\xleftequilibrium") && (T -= c.depth);
              let N;
              if (g) {
                const R = -e.fontMetrics().axisHeight + g.height + 0.5 * _.height + 0.111;
                N = L.makeVList({
                  positionType: "individualShift",
                  children: [{
                    type: "elem",
                    elem: c,
                    shift: T
                  }, {
                    type: "elem",
                    elem: _,
                    shift: v
                  }, {
                    type: "elem",
                    elem: g,
                    shift: R
                  }]
                }, e);
              } else
                N = L.makeVList({
                  positionType: "individualShift",
                  children: [{
                    type: "elem",
                    elem: c,
                    shift: T
                  }, {
                    type: "elem",
                    elem: _,
                    shift: v
                  }]
                }, e);
              return N.children[0].children[0].children[1].classes.push("svg-align"), L.makeSpan(["mrel", "x-arrow"], [N], e);
            },
            mathmlBuilder(t, e) {
              const r = k0.mathMLnode(t.label);
              r.setAttribute("minsize", t.label.charAt(0) === "x" ? "1.75em" : "3.0em");
              let l;
              if (t.body) {
                const c = Zn(Le(t.body, e));
                if (t.below) {
                  const m = Zn(Le(t.below, e));
                  l = new Z.MathNode("munderover", [r, m, c]);
                } else
                  l = new Z.MathNode("mover", [r, c]);
              } else if (t.below) {
                const c = Zn(Le(t.below, e));
                l = new Z.MathNode("munder", [r, c]);
              } else
                l = Zn(), l = new Z.MathNode("mover", [r, l]);
              return l;
            }
          });
          const wu = L.makeSpan;
          function gi(t, e) {
            const r = tt(t.body, e, !0);
            return wu([t.mclass], r, e);
          }
          function bi(t, e) {
            let r;
            const l = _t(t.body, e);
            return t.mclass === "minner" ? r = new Z.MathNode("mpadded", l) : t.mclass === "mord" ? t.isCharacterBox ? (r = l[0], r.type = "mi") : r = new Z.MathNode("mi", l) : (t.isCharacterBox ? (r = l[0], r.type = "mo") : r = new Z.MathNode("mo", l), t.mclass === "mbin" ? (r.attributes.lspace = "0.22em", r.attributes.rspace = "0.22em") : t.mclass === "mpunct" ? (r.attributes.lspace = "0em", r.attributes.rspace = "0.17em") : t.mclass === "mopen" || t.mclass === "mclose" ? (r.attributes.lspace = "0em", r.attributes.rspace = "0em") : t.mclass === "minner" && (r.attributes.lspace = "0.0556em", r.attributes.width = "+0.1111em")), r;
          }
          ee({
            type: "mclass",
            names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
            props: {
              numArgs: 1,
              primitive: !0
            },
            handler(t, e) {
              let {
                parser: r,
                funcName: l
              } = t;
              const c = e[0];
              return {
                type: "mclass",
                mode: r.mode,
                mclass: "m" + l.slice(5),
                // TODO(kevinb): don't prefix with 'm'
                body: Ze(c),
                isCharacterBox: U.isCharacterBox(c)
              };
            },
            htmlBuilder: gi,
            mathmlBuilder: bi
          });
          const Kn = (t) => {
            const e = t.type === "ordgroup" && t.body.length ? t.body[0] : t;
            return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
          };
          ee({
            type: "mclass",
            names: ["\\@binrel"],
            props: {
              numArgs: 2
            },
            handler(t, e) {
              let {
                parser: r
              } = t;
              return {
                type: "mclass",
                mode: r.mode,
                mclass: Kn(e[0]),
                body: Ze(e[1]),
                isCharacterBox: U.isCharacterBox(e[1])
              };
            }
          }), ee({
            type: "mclass",
            names: ["\\stackrel", "\\overset", "\\underset"],
            props: {
              numArgs: 2
            },
            handler(t, e) {
              let {
                parser: r,
                funcName: l
              } = t;
              const c = e[1], m = e[0];
              let g;
              l !== "\\stackrel" ? g = Kn(c) : g = "mrel";
              const _ = {
                type: "op",
                mode: c.mode,
                limits: !0,
                alwaysHandleSupSub: !0,
                parentIsSupSub: !1,
                symbol: !1,
                suppressBaseShift: l !== "\\stackrel",
                body: Ze(c)
              }, v = {
                type: "supsub",
                mode: m.mode,
                base: _,
                sup: l === "\\underset" ? null : m,
                sub: l === "\\underset" ? m : null
              };
              return {
                type: "mclass",
                mode: r.mode,
                mclass: g,
                body: [v],
                isCharacterBox: U.isCharacterBox(v)
              };
            },
            htmlBuilder: gi,
            mathmlBuilder: bi
          }), ee({
            type: "pmb",
            names: ["\\pmb"],
            props: {
              numArgs: 1,
              allowedInText: !0
            },
            handler(t, e) {
              let {
                parser: r
              } = t;
              return {
                type: "pmb",
                mode: r.mode,
                mclass: Kn(e[0]),
                body: Ze(e[0])
              };
            },
            htmlBuilder(t, e) {
              const r = tt(t.body, e, !0), l = L.makeSpan([t.mclass], r, e);
              return l.style.textShadow = "0.02em 0.01em 0.04px", l;
            },
            mathmlBuilder(t, e) {
              const r = _t(t.body, e), l = new Z.MathNode("mstyle", r);
              return l.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), l;
            }
          });
          const yu = {
            ">": "\\\\cdrightarrow",
            "<": "\\\\cdleftarrow",
            "=": "\\\\cdlongequal",
            A: "\\uparrow",
            V: "\\downarrow",
            "|": "\\Vert",
            ".": "no arrow"
          }, wi = () => ({
            type: "styling",
            body: [],
            mode: "math",
            style: "display"
          }), yi = (t) => t.type === "textord" && t.text === "@", _u = (t, e) => (t.type === "mathord" || t.type === "atom") && t.text === e;
          function ku(t, e, r) {
            const l = yu[t];
            switch (l) {
              case "\\\\cdrightarrow":
              case "\\\\cdleftarrow":
                return r.callFunction(l, [e[0]], [e[1]]);
              case "\\uparrow":
              case "\\downarrow": {
                const c = r.callFunction("\\\\cdleft", [e[0]], []), m = {
                  type: "atom",
                  text: l,
                  mode: "math",
                  family: "rel"
                }, g = r.callFunction("\\Big", [m], []), _ = r.callFunction("\\\\cdright", [e[1]], []), v = {
                  type: "ordgroup",
                  mode: "math",
                  body: [c, g, _]
                };
                return r.callFunction("\\\\cdparent", [v], []);
              }
              case "\\\\cdlongequal":
                return r.callFunction("\\\\cdlongequal", [], []);
              case "\\Vert": {
                const c = {
                  type: "textord",
                  text: "\\Vert",
                  mode: "math"
                };
                return r.callFunction("\\Big", [c], []);
              }
              default:
                return {
                  type: "textord",
                  text: " ",
                  mode: "math"
                };
            }
          }
          function Du(t) {
            const e = [];
            for (t.gullet.beginGroup(), t.gullet.macros.set("\\cr", "\\\\\\relax"), t.gullet.beginGroup(); ; ) {
              e.push(t.parseExpression(!1, "\\\\")), t.gullet.endGroup(), t.gullet.beginGroup();
              const m = t.fetch().text;
              if (m === "&" || m === "\\\\")
                t.consume();
              else if (m === "\\end") {
                e[e.length - 1].length === 0 && e.pop();
                break;
              } else
                throw new o("Expected \\\\ or \\cr or \\end", t.nextToken);
            }
            let r = [];
            const l = [r];
            for (let m = 0; m < e.length; m++) {
              const g = e[m];
              let _ = wi();
              for (let v = 0; v < g.length; v++)
                if (!yi(g[v]))
                  _.body.push(g[v]);
                else {
                  r.push(_), v += 1;
                  const T = Ur(g[v]).text, N = new Array(2);
                  if (N[0] = {
                    type: "ordgroup",
                    mode: "math",
                    body: []
                  }, N[1] = {
                    type: "ordgroup",
                    mode: "math",
                    body: []
                  }, !("=|.".indexOf(T) > -1))
                    if ("<>AV".indexOf(T) > -1)
                      for (let Y = 0; Y < 2; Y++) {
                        let se = !0;
                        for (let ae = v + 1; ae < g.length; ae++) {
                          if (_u(g[ae], T)) {
                            se = !1, v = ae;
                            break;
                          }
                          if (yi(g[ae]))
                            throw new o("Missing a " + T + " character to complete a CD arrow.", g[ae]);
                          N[Y].body.push(g[ae]);
                        }
                        if (se)
                          throw new o("Missing a " + T + " character to complete a CD arrow.", g[v]);
                      }
                    else
                      throw new o('Expected one of "<>AV=|." after @', g[v]);
                  const P = {
                    type: "styling",
                    body: [ku(T, N, t)],
                    mode: "math",
                    style: "display"
                    // CD is always displaystyle.
                  };
                  r.push(P), _ = wi();
                }
              m % 2 === 0 ? r.push(_) : r.shift(), r = [], l.push(r);
            }
            t.gullet.endGroup(), t.gullet.endGroup();
            const c = new Array(l[0].length).fill({
              type: "align",
              align: "c",
              pregap: 0.25,
              // CD package sets \enskip between columns.
              postgap: 0.25
              // So pre and post each get half an \enskip, i.e. 0.25em.
            });
            return {
              type: "array",
              mode: "math",
              body: l,
              arraystretch: 1,
              addJot: !0,
              rowGaps: [null],
              cols: c,
              colSeparationType: "CD",
              hLinesBeforeRow: new Array(l.length + 1).fill([])
            };
          }
          ee({
            type: "cdlabel",
            names: ["\\\\cdleft", "\\\\cdright"],
            props: {
              numArgs: 1
            },
            handler(t, e) {
              let {
                parser: r,
                funcName: l
              } = t;
              return {
                type: "cdlabel",
                mode: r.mode,
                side: l.slice(4),
                label: e[0]
              };
            },
            htmlBuilder(t, e) {
              const r = e.havingStyle(e.style.sup()), l = L.wrapFragment(Ae(t.label, r, e), e);
              return l.classes.push("cd-label-" + t.side), l.style.bottom = Q(0.8 - l.depth), l.height = 0, l.depth = 0, l;
            },
            mathmlBuilder(t, e) {
              let r = new Z.MathNode("mrow", [Le(t.label, e)]);
              return r = new Z.MathNode("mpadded", [r]), r.setAttribute("width", "0"), t.side === "left" && r.setAttribute("lspace", "-1width"), r.setAttribute("voffset", "0.7em"), r = new Z.MathNode("mstyle", [r]), r.setAttribute("displaystyle", "false"), r.setAttribute("scriptlevel", "1"), r;
            }
          }), ee({
            type: "cdlabelparent",
            names: ["\\\\cdparent"],
            props: {
              numArgs: 1
            },
            handler(t, e) {
              let {
                parser: r
              } = t;
              return {
                type: "cdlabelparent",
                mode: r.mode,
                fragment: e[0]
              };
            },
            htmlBuilder(t, e) {
              const r = L.wrapFragment(Ae(t.fragment, e), e);
              return r.classes.push("cd-vert-arrow"), r;
            },
            mathmlBuilder(t, e) {
              return new Z.MathNode("mrow", [Le(t.fragment, e)]);
            }
          }), ee({
            type: "textord",
            names: ["\\@char"],
            props: {
              numArgs: 1,
              allowedInText: !0
            },
            handler(t, e) {
              let {
                parser: r
              } = t;
              const c = me(e[0], "ordgroup").body;
              let m = "";
              for (let v = 0; v < c.length; v++) {
                const T = me(c[v], "textord");
                m += T.text;
              }
              let g = parseInt(m), _;
              if (isNaN(g))
                throw new o("\\@char has non-numeric argument " + m);
              if (g < 0 || g >= 1114111)
                throw new o("\\@char with invalid code point " + m);
              return g <= 65535 ? _ = String.fromCharCode(g) : (g -= 65536, _ = String.fromCharCode((g >> 10) + 55296, (g & 1023) + 56320)), {
                type: "textord",
                mode: r.mode,
                text: _
              };
            }
          });
          const _i = (t, e) => {
            const r = tt(t.body, e.withColor(t.color), !1);
            return L.makeFragment(r);
          }, ki = (t, e) => {
            const r = _t(t.body, e.withColor(t.color)), l = new Z.MathNode("mstyle", r);
            return l.setAttribute("mathcolor", t.color), l;
          };
          ee({
            type: "color",
            names: ["\\textcolor"],
            props: {
              numArgs: 2,
              allowedInText: !0,
              argTypes: ["color", "original"]
            },
            handler(t, e) {
              let {
                parser: r
              } = t;
              const l = me(e[0], "color-token").color, c = e[1];
              return {
                type: "color",
                mode: r.mode,
                color: l,
                body: Ze(c)
              };
            },
            htmlBuilder: _i,
            mathmlBuilder: ki
          }), ee({
            type: "color",
            names: ["\\color"],
            props: {
              numArgs: 1,
              allowedInText: !0,
              argTypes: ["color"]
            },
            handler(t, e) {
              let {
                parser: r,
                breakOnTokenText: l
              } = t;
              const c = me(e[0], "color-token").color;
              r.gullet.macros.set("\\current@color", c);
              const m = r.parseExpression(!0, l);
              return {
                type: "color",
                mode: r.mode,
                color: c,
                body: m
              };
            },
            htmlBuilder: _i,
            mathmlBuilder: ki
          }), ee({
            type: "cr",
            names: ["\\\\"],
            props: {
              numArgs: 0,
              numOptionalArgs: 0,
              allowedInText: !0
            },
            handler(t, e, r) {
              let {
                parser: l
              } = t;
              const c = l.gullet.future().text === "[" ? l.parseSizeGroup(!0) : null, m = !l.settings.displayMode || !l.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
              return {
                type: "cr",
                mode: l.mode,
                newLine: m,
                size: c && me(c, "size").value
              };
            },
            // The following builders are called only at the top level,
            // not within tabular/array environments.
            htmlBuilder(t, e) {
              const r = L.makeSpan(["mspace"], [], e);
              return t.newLine && (r.classes.push("newline"), t.size && (r.style.marginTop = Q(Ce(t.size, e)))), r;
            },
            mathmlBuilder(t, e) {
              const r = new Z.MathNode("mspace");
              return t.newLine && (r.setAttribute("linebreak", "newline"), t.size && r.setAttribute("height", Q(Ce(t.size, e)))), r;
            }
          });
          const Vr = {
            "\\global": "\\global",
            "\\long": "\\\\globallong",
            "\\\\globallong": "\\\\globallong",
            "\\def": "\\gdef",
            "\\gdef": "\\gdef",
            "\\edef": "\\xdef",
            "\\xdef": "\\xdef",
            "\\let": "\\\\globallet",
            "\\futurelet": "\\\\globalfuture"
          }, Di = (t) => {
            const e = t.text;
            if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
              throw new o("Expected a control sequence", t);
            return e;
          }, xu = (t) => {
            let e = t.gullet.popToken();
            return e.text === "=" && (e = t.gullet.popToken(), e.text === " " && (e = t.gullet.popToken())), e;
          }, xi = (t, e, r, l) => {
            let c = t.gullet.macros.get(r.text);
            c == null && (r.noexpand = !0, c = {
              tokens: [r],
              numArgs: 0,
              // reproduce the same behavior in expansion
              unexpandable: !t.gullet.isExpandable(r.text)
            }), t.gullet.macros.set(e, c, l);
          };
          ee({
            type: "internal",
            names: [
              "\\global",
              "\\long",
              "\\\\globallong"
              // can’t be entered directly
            ],
            props: {
              numArgs: 0,
              allowedInText: !0
            },
            handler(t) {
              let {
                parser: e,
                funcName: r
              } = t;
              e.consumeSpaces();
              const l = e.fetch();
              if (Vr[l.text])
                return (r === "\\global" || r === "\\\\globallong") && (l.text = Vr[l.text]), me(e.parseFunction(), "internal");
              throw new o("Invalid token after macro prefix", l);
            }
          }), ee({
            type: "internal",
            names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
            props: {
              numArgs: 0,
              allowedInText: !0,
              primitive: !0
            },
            handler(t) {
              let {
                parser: e,
                funcName: r
              } = t, l = e.gullet.popToken();
              const c = l.text;
              if (/^(?:[\\{}$&#^_]|EOF)$/.test(c))
                throw new o("Expected a control sequence", l);
              let m = 0, g;
              const _ = [[]];
              for (; e.gullet.future().text !== "{"; )
                if (l = e.gullet.popToken(), l.text === "#") {
                  if (e.gullet.future().text === "{") {
                    g = e.gullet.future(), _[m].push("{");
                    break;
                  }
                  if (l = e.gullet.popToken(), !/^[1-9]$/.test(l.text))
                    throw new o('Invalid argument number "' + l.text + '"');
                  if (parseInt(l.text) !== m + 1)
                    throw new o('Argument number "' + l.text + '" out of order');
                  m++, _.push([]);
                } else {
                  if (l.text === "EOF")
                    throw new o("Expected a macro definition");
                  _[m].push(l.text);
                }
              let {
                tokens: v
              } = e.gullet.consumeArg();
              return g && v.unshift(g), (r === "\\edef" || r === "\\xdef") && (v = e.gullet.expandTokens(v), v.reverse()), e.gullet.macros.set(c, {
                tokens: v,
                numArgs: m,
                delimiters: _
              }, r === Vr[r]), {
                type: "internal",
                mode: e.mode
              };
            }
          }), ee({
            type: "internal",
            names: [
              "\\let",
              "\\\\globallet"
              // can’t be entered directly
            ],
            props: {
              numArgs: 0,
              allowedInText: !0,
              primitive: !0
            },
            handler(t) {
              let {
                parser: e,
                funcName: r
              } = t;
              const l = Di(e.gullet.popToken());
              e.gullet.consumeSpaces();
              const c = xu(e);
              return xi(e, l, c, r === "\\\\globallet"), {
                type: "internal",
                mode: e.mode
              };
            }
          }), ee({
            type: "internal",
            names: [
              "\\futurelet",
              "\\\\globalfuture"
              // can’t be entered directly
            ],
            props: {
              numArgs: 0,
              allowedInText: !0,
              primitive: !0
            },
            handler(t) {
              let {
                parser: e,
                funcName: r
              } = t;
              const l = Di(e.gullet.popToken()), c = e.gullet.popToken(), m = e.gullet.popToken();
              return xi(e, l, m, r === "\\\\globalfuture"), e.gullet.pushToken(m), e.gullet.pushToken(c), {
                type: "internal",
                mode: e.mode
              };
            }
          });
          const gn = function(t, e, r) {
            const l = ye.math[t] && ye.math[t].replace, c = b0(l || t, e, r);
            if (!c)
              throw new Error("Unsupported symbol " + t + " and font size " + e + ".");
            return c;
          }, Wr = function(t, e, r, l) {
            const c = r.havingBaseStyle(e), m = L.makeSpan(l.concat(c.sizingClasses(r)), [t], r), g = c.sizeMultiplier / r.sizeMultiplier;
            return m.height *= g, m.depth *= g, m.maxFontSize = c.sizeMultiplier, m;
          }, vi = function(t, e, r) {
            const l = e.havingBaseStyle(r), c = (1 - e.sizeMultiplier / l.sizeMultiplier) * e.fontMetrics().axisHeight;
            t.classes.push("delimcenter"), t.style.top = Q(c), t.height -= c, t.depth += c;
          }, vu = function(t, e, r, l, c, m) {
            const g = L.makeSymbol(t, "Main-Regular", c, l), _ = Wr(g, e, l, m);
            return r && vi(_, l, e), _;
          }, Au = function(t, e, r, l) {
            return L.makeSymbol(t, "Size" + e + "-Regular", r, l);
          }, Ai = function(t, e, r, l, c, m) {
            const g = Au(t, e, c, l), _ = Wr(L.makeSpan(["delimsizing", "size" + e], [g], l), V.TEXT, l, m);
            return r && vi(_, l, V.TEXT), _;
          }, jr = function(t, e, r) {
            let l;
            return e === "Size1-Regular" ? l = "delim-size1" : l = "delim-size4", {
              type: "elem",
              elem: L.makeSpan(["delimsizinginner", l], [L.makeSpan([], [L.makeSymbol(t, e, r)])])
            };
          }, Xr = function(t, e, r) {
            const l = At["Size4-Regular"][t.charCodeAt(0)] ? At["Size4-Regular"][t.charCodeAt(0)][4] : At["Size1-Regular"][t.charCodeAt(0)][4], c = new Lt("inner", xt(t, Math.round(1e3 * e))), m = new It([c], {
              width: Q(l),
              height: Q(e),
              // Override CSS rule `.katex svg { width: 100% }`
              style: "width:" + Q(l),
              viewBox: "0 0 " + 1e3 * l + " " + Math.round(1e3 * e),
              preserveAspectRatio: "xMinYMin"
            }), g = L.makeSvgSpan([], [m], r);
            return g.height = e, g.style.height = Q(e), g.style.width = Q(l), {
              type: "elem",
              elem: g
            };
          }, Yr = 8e-3, Qn = {
            type: "kern",
            size: -1 * Yr
          }, Su = ["|", "\\lvert", "\\rvert", "\\vert"], Eu = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Si = function(t, e, r, l, c, m) {
            let g, _, v, T, N = "", R = 0;
            g = v = T = t, _ = null;
            let P = "Size1-Regular";
            t === "\\uparrow" ? v = T = "⏐" : t === "\\Uparrow" ? v = T = "‖" : t === "\\downarrow" ? g = v = "⏐" : t === "\\Downarrow" ? g = v = "‖" : t === "\\updownarrow" ? (g = "\\uparrow", v = "⏐", T = "\\downarrow") : t === "\\Updownarrow" ? (g = "\\Uparrow", v = "‖", T = "\\Downarrow") : U.contains(Su, t) ? (v = "∣", N = "vert", R = 333) : U.contains(Eu, t) ? (v = "∥", N = "doublevert", R = 556) : t === "[" || t === "\\lbrack" ? (g = "⎡", v = "⎢", T = "⎣", P = "Size4-Regular", N = "lbrack", R = 667) : t === "]" || t === "\\rbrack" ? (g = "⎤", v = "⎥", T = "⎦", P = "Size4-Regular", N = "rbrack", R = 667) : t === "\\lfloor" || t === "⌊" ? (v = g = "⎢", T = "⎣", P = "Size4-Regular", N = "lfloor", R = 667) : t === "\\lceil" || t === "⌈" ? (g = "⎡", v = T = "⎢", P = "Size4-Regular", N = "lceil", R = 667) : t === "\\rfloor" || t === "⌋" ? (v = g = "⎥", T = "⎦", P = "Size4-Regular", N = "rfloor", R = 667) : t === "\\rceil" || t === "⌉" ? (g = "⎤", v = T = "⎥", P = "Size4-Regular", N = "rceil", R = 667) : t === "(" || t === "\\lparen" ? (g = "⎛", v = "⎜", T = "⎝", P = "Size4-Regular", N = "lparen", R = 875) : t === ")" || t === "\\rparen" ? (g = "⎞", v = "⎟", T = "⎠", P = "Size4-Regular", N = "rparen", R = 875) : t === "\\{" || t === "\\lbrace" ? (g = "⎧", _ = "⎨", T = "⎩", v = "⎪", P = "Size4-Regular") : t === "\\}" || t === "\\rbrace" ? (g = "⎫", _ = "⎬", T = "⎭", v = "⎪", P = "Size4-Regular") : t === "\\lgroup" || t === "⟮" ? (g = "⎧", T = "⎩", v = "⎪", P = "Size4-Regular") : t === "\\rgroup" || t === "⟯" ? (g = "⎫", T = "⎭", v = "⎪", P = "Size4-Regular") : t === "\\lmoustache" || t === "⎰" ? (g = "⎧", T = "⎭", v = "⎪", P = "Size4-Regular") : (t === "\\rmoustache" || t === "⎱") && (g = "⎫", T = "⎩", v = "⎪", P = "Size4-Regular");
            const Y = gn(g, P, c), se = Y.height + Y.depth, ae = gn(v, P, c), ke = ae.height + ae.depth, ge = gn(T, P, c), xe = ge.height + ge.depth;
            let Te = 0, qe = 1;
            if (_ !== null) {
              const Ye = gn(_, P, c);
              Te = Ye.height + Ye.depth, qe = 2;
            }
            const ht = se + xe + Te, nt = Math.max(0, Math.ceil((e - ht) / (qe * ke))), Ht = ht + nt * qe * ke;
            let tn = l.fontMetrics().axisHeight;
            r && (tn *= l.sizeMultiplier);
            const Se = Ht / 2 - tn, ze = [];
            if (N.length > 0) {
              const Ye = Ht - se - xe, Ve = Math.round(Ht * 1e3), Ut = K0(N, Math.round(Ye * 1e3)), $u = new Lt(N, Ut), gl = (R / 1e3).toFixed(3) + "em", bl = (Ve / 1e3).toFixed(3) + "em", e1 = new It([$u], {
                width: gl,
                height: bl,
                viewBox: "0 0 " + R + " " + Ve
              }), nr = L.makeSvgSpan([], [e1], l);
              nr.height = Ve / 1e3, nr.style.width = gl, nr.style.height = bl, ze.push({
                type: "elem",
                elem: nr
              });
            } else {
              if (ze.push(jr(T, P, c)), ze.push(Qn), _ === null) {
                const Ye = Ht - se - xe + 2 * Yr;
                ze.push(Xr(v, Ye, l));
              } else {
                const Ye = (Ht - se - xe - Te) / 2 + 2 * Yr;
                ze.push(Xr(v, Ye, l)), ze.push(Qn), ze.push(jr(_, P, c)), ze.push(Qn), ze.push(Xr(v, Ye, l));
              }
              ze.push(Qn), ze.push(jr(g, P, c));
            }
            const Pe = l.havingBaseStyle(V.TEXT), Ue = L.makeVList({
              positionType: "bottom",
              positionData: Se,
              children: ze
            }, Pe);
            return Wr(L.makeSpan(["delimsizing", "mult"], [Ue], Pe), V.TEXT, l, m);
          }, Zr = 80, Kr = 0.08, Qr = function(t, e, r, l, c) {
            const m = g0(t, l, r), g = new Lt(t, m), _ = new It([g], {
              // Note: 1000:1 ratio of viewBox to document em width.
              width: "400em",
              height: Q(e),
              viewBox: "0 0 400000 " + r,
              preserveAspectRatio: "xMinYMin slice"
            });
            return L.makeSvgSpan(["hide-tail"], [_], c);
          }, Fu = function(t, e) {
            const r = e.havingBaseSizing(), l = Ci("\\surd", t * r.sizeMultiplier, Ti, r);
            let c = r.sizeMultiplier;
            const m = Math.max(0, e.minRuleThickness - e.fontMetrics().sqrtRuleThickness);
            let g, _ = 0, v = 0, T = 0, N;
            return l.type === "small" ? (T = 1e3 + 1e3 * m + Zr, t < 1 ? c = 1 : t < 1.4 && (c = 0.7), _ = (1 + m + Kr) / c, v = (1 + m) / c, g = Qr("sqrtMain", _, T, m, e), g.style.minWidth = "0.853em", N = 0.833 / c) : l.type === "large" ? (T = (1e3 + Zr) * bn[l.size], v = (bn[l.size] + m) / c, _ = (bn[l.size] + m + Kr) / c, g = Qr("sqrtSize" + l.size, _, T, m, e), g.style.minWidth = "1.02em", N = 1 / c) : (_ = t + m + Kr, v = t + m, T = Math.floor(1e3 * t + m) + Zr, g = Qr("sqrtTall", _, T, m, e), g.style.minWidth = "0.742em", N = 1.056), g.height = v, g.style.height = Q(_), {
              span: g,
              advanceWidth: N,
              // Calculate the actual line width.
              // This actually should depend on the chosen font -- e.g. \boldmath
              // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
              // have thicker rules.
              ruleWidth: (e.fontMetrics().sqrtRuleThickness + m) * c
            };
          }, Ei = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], Tu = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], Fi = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], bn = [0, 1.2, 1.8, 2.4, 3], Cu = function(t, e, r, l, c) {
            if (t === "<" || t === "\\lt" || t === "⟨" ? t = "\\langle" : (t === ">" || t === "\\gt" || t === "⟩") && (t = "\\rangle"), U.contains(Ei, t) || U.contains(Fi, t))
              return Ai(t, e, !1, r, l, c);
            if (U.contains(Tu, t))
              return Si(t, bn[e], !1, r, l, c);
            throw new o("Illegal delimiter: '" + t + "'");
          }, Mu = [{
            type: "small",
            style: V.SCRIPTSCRIPT
          }, {
            type: "small",
            style: V.SCRIPT
          }, {
            type: "small",
            style: V.TEXT
          }, {
            type: "large",
            size: 1
          }, {
            type: "large",
            size: 2
          }, {
            type: "large",
            size: 3
          }, {
            type: "large",
            size: 4
          }], zu = [{
            type: "small",
            style: V.SCRIPTSCRIPT
          }, {
            type: "small",
            style: V.SCRIPT
          }, {
            type: "small",
            style: V.TEXT
          }, {
            type: "stack"
          }], Ti = [{
            type: "small",
            style: V.SCRIPTSCRIPT
          }, {
            type: "small",
            style: V.SCRIPT
          }, {
            type: "small",
            style: V.TEXT
          }, {
            type: "large",
            size: 1
          }, {
            type: "large",
            size: 2
          }, {
            type: "large",
            size: 3
          }, {
            type: "large",
            size: 4
          }, {
            type: "stack"
          }], Bu = function(t) {
            if (t.type === "small")
              return "Main-Regular";
            if (t.type === "large")
              return "Size" + t.size + "-Regular";
            if (t.type === "stack")
              return "Size4-Regular";
            throw new Error("Add support for delim type '" + t.type + "' here.");
          }, Ci = function(t, e, r, l) {
            const c = Math.min(2, 3 - l.style.size);
            for (let m = c; m < r.length && r[m].type !== "stack"; m++) {
              const g = gn(t, Bu(r[m]), "math");
              let _ = g.height + g.depth;
              if (r[m].type === "small") {
                const v = l.havingBaseStyle(r[m].style);
                _ *= v.sizeMultiplier;
              }
              if (_ > e)
                return r[m];
            }
            return r[r.length - 1];
          }, Mi = function(t, e, r, l, c, m) {
            t === "<" || t === "\\lt" || t === "⟨" ? t = "\\langle" : (t === ">" || t === "\\gt" || t === "⟩") && (t = "\\rangle");
            let g;
            U.contains(Fi, t) ? g = Mu : U.contains(Ei, t) ? g = Ti : g = zu;
            const _ = Ci(t, e, g, l);
            return _.type === "small" ? vu(t, _.style, r, l, c, m) : _.type === "large" ? Ai(t, _.size, r, l, c, m) : Si(t, e, r, l, c, m);
          };
          var D0 = {
            sqrtImage: Fu,
            sizedDelim: Cu,
            sizeToMaxHeight: bn,
            customSizedDelim: Mi,
            leftRightDelim: function(t, e, r, l, c, m) {
              const g = l.fontMetrics().axisHeight * l.sizeMultiplier, _ = 901, v = 5 / l.fontMetrics().ptPerEm, T = Math.max(e - g, r + g), N = Math.max(
                // In real TeX, calculations are done using integral values which are
                // 65536 per pt, or 655360 per em. So, the division here truncates in
                // TeX but doesn't here, producing different results. If we wanted to
                // exactly match TeX's calculation, we could do
                //   Math.floor(655360 * maxDistFromAxis / 500) *
                //    delimiterFactor / 655360
                // (To see the difference, compare
                //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
                // in TeX and KaTeX)
                T / 500 * _,
                2 * T - v
              );
              return Mi(t, N, !0, l, c, m);
            }
          };
          const zi = {
            "\\bigl": {
              mclass: "mopen",
              size: 1
            },
            "\\Bigl": {
              mclass: "mopen",
              size: 2
            },
            "\\biggl": {
              mclass: "mopen",
              size: 3
            },
            "\\Biggl": {
              mclass: "mopen",
              size: 4
            },
            "\\bigr": {
              mclass: "mclose",
              size: 1
            },
            "\\Bigr": {
              mclass: "mclose",
              size: 2
            },
            "\\biggr": {
              mclass: "mclose",
              size: 3
            },
            "\\Biggr": {
              mclass: "mclose",
              size: 4
            },
            "\\bigm": {
              mclass: "mrel",
              size: 1
            },
            "\\Bigm": {
              mclass: "mrel",
              size: 2
            },
            "\\biggm": {
              mclass: "mrel",
              size: 3
            },
            "\\Biggm": {
              mclass: "mrel",
              size: 4
            },
            "\\big": {
              mclass: "mord",
              size: 1
            },
            "\\Big": {
              mclass: "mord",
              size: 2
            },
            "\\bigg": {
              mclass: "mord",
              size: 3
            },
            "\\Bigg": {
              mclass: "mord",
              size: 4
            }
          }, Nu = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
          function Jn(t, e) {
            const r = Yn(t);
            if (r && U.contains(Nu, r.text))
              return r;
            throw r ? new o("Invalid delimiter '" + r.text + "' after '" + e.funcName + "'", t) : new o("Invalid delimiter type '" + t.type + "'", t);
          }
          ee({
            type: "delimsizing",
            names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
            props: {
              numArgs: 1,
              argTypes: ["primitive"]
            },
            handler: (t, e) => {
              const r = Jn(e[0], t);
              return {
                type: "delimsizing",
                mode: t.parser.mode,
                size: zi[t.funcName].size,
                mclass: zi[t.funcName].mclass,
                delim: r.text
              };
            },
            htmlBuilder: (t, e) => t.delim === "." ? L.makeSpan([t.mclass]) : D0.sizedDelim(t.delim, t.size, e, t.mode, [t.mclass]),
            mathmlBuilder: (t) => {
              const e = [];
              t.delim !== "." && e.push(qt(t.delim, t.mode));
              const r = new Z.MathNode("mo", e);
              t.mclass === "mopen" || t.mclass === "mclose" ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r.setAttribute("stretchy", "true");
              const l = Q(D0.sizeToMaxHeight[t.size]);
              return r.setAttribute("minsize", l), r.setAttribute("maxsize", l), r;
            }
          });
          function Bi(t) {
            if (!t.body)
              throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
          }
          ee({
            type: "leftright-right",
            names: ["\\right"],
            props: {
              numArgs: 1,
              primitive: !0
            },
            handler: (t, e) => {
              const r = t.parser.gullet.macros.get("\\current@color");
              if (r && typeof r != "string")
                throw new o("\\current@color set to non-string in \\right");
              return {
                type: "leftright-right",
                mode: t.parser.mode,
                delim: Jn(e[0], t).text,
                color: r
                // undefined if not set via \color
              };
            }
          }), ee({
            type: "leftright",
            names: ["\\left"],
            props: {
              numArgs: 1,
              primitive: !0
            },
            handler: (t, e) => {
              const r = Jn(e[0], t), l = t.parser;
              ++l.leftrightDepth;
              const c = l.parseExpression(!1);
              --l.leftrightDepth, l.expect("\\right", !1);
              const m = me(l.parseFunction(), "leftright-right");
              return {
                type: "leftright",
                mode: l.mode,
                body: c,
                left: r.text,
                right: m.delim,
                rightColor: m.color
              };
            },
            htmlBuilder: (t, e) => {
              Bi(t);
              const r = tt(t.body, e, !0, ["mopen", "mclose"]);
              let l = 0, c = 0, m = !1;
              for (let v = 0; v < r.length; v++)
                r[v].isMiddle ? m = !0 : (l = Math.max(r[v].height, l), c = Math.max(r[v].depth, c));
              l *= e.sizeMultiplier, c *= e.sizeMultiplier;
              let g;
              if (t.left === "." ? g = mn(e, ["mopen"]) : g = D0.leftRightDelim(t.left, l, c, e, t.mode, ["mopen"]), r.unshift(g), m)
                for (let v = 1; v < r.length; v++) {
                  const N = r[v].isMiddle;
                  N && (r[v] = D0.leftRightDelim(N.delim, l, c, N.options, t.mode, []));
                }
              let _;
              if (t.right === ".")
                _ = mn(e, ["mclose"]);
              else {
                const v = t.rightColor ? e.withColor(t.rightColor) : e;
                _ = D0.leftRightDelim(t.right, l, c, v, t.mode, ["mclose"]);
              }
              return r.push(_), L.makeSpan(["minner"], r, e);
            },
            mathmlBuilder: (t, e) => {
              Bi(t);
              const r = _t(t.body, e);
              if (t.left !== ".") {
                const l = new Z.MathNode("mo", [qt(t.left, t.mode)]);
                l.setAttribute("fence", "true"), r.unshift(l);
              }
              if (t.right !== ".") {
                const l = new Z.MathNode("mo", [qt(t.right, t.mode)]);
                l.setAttribute("fence", "true"), t.rightColor && l.setAttribute("mathcolor", t.rightColor), r.push(l);
              }
              return Pr(r);
            }
          }), ee({
            type: "middle",
            names: ["\\middle"],
            props: {
              numArgs: 1,
              primitive: !0
            },
            handler: (t, e) => {
              const r = Jn(e[0], t);
              if (!t.parser.leftrightDepth)
                throw new o("\\middle without preceding \\left", r);
              return {
                type: "middle",
                mode: t.parser.mode,
                delim: r.text
              };
            },
            htmlBuilder: (t, e) => {
              let r;
              if (t.delim === ".")
                r = mn(e, []);
              else {
                r = D0.sizedDelim(t.delim, 1, e, t.mode, []);
                const l = {
                  delim: t.delim,
                  options: e
                };
                r.isMiddle = l;
              }
              return r;
            },
            mathmlBuilder: (t, e) => {
              const r = t.delim === "\\vert" || t.delim === "|" ? qt("|", "text") : qt(t.delim, t.mode), l = new Z.MathNode("mo", [r]);
              return l.setAttribute("fence", "true"), l.setAttribute("lspace", "0.05em"), l.setAttribute("rspace", "0.05em"), l;
            }
          });
          const Jr = (t, e) => {
            const r = L.wrapFragment(Ae(t.body, e), e), l = t.label.slice(1);
            let c = e.sizeMultiplier, m, g = 0;
            const _ = U.isCharacterBox(t.body);
            if (l === "sout")
              m = L.makeSpan(["stretchy", "sout"]), m.height = e.fontMetrics().defaultRuleThickness / c, g = -0.5 * e.fontMetrics().xHeight;
            else if (l === "phase") {
              const T = Ce({
                number: 0.6,
                unit: "pt"
              }, e), N = Ce({
                number: 0.35,
                unit: "ex"
              }, e), R = e.havingBaseSizing();
              c = c / R.sizeMultiplier;
              const P = r.height + r.depth + T + N;
              r.style.paddingLeft = Q(P / 2 + T);
              const Y = Math.floor(1e3 * P * c), se = p0(Y), ae = new It([new Lt("phase", se)], {
                width: "400em",
                height: Q(Y / 1e3),
                viewBox: "0 0 400000 " + Y,
                preserveAspectRatio: "xMinYMin slice"
              });
              m = L.makeSvgSpan(["hide-tail"], [ae], e), m.style.height = Q(P), g = r.depth + T + N;
            } else {
              /cancel/.test(l) ? _ || r.classes.push("cancel-pad") : l === "angl" ? r.classes.push("anglpad") : r.classes.push("boxpad");
              let T = 0, N = 0, R = 0;
              /box/.test(l) ? (R = Math.max(
                e.fontMetrics().fboxrule,
                // default
                e.minRuleThickness
                // User override.
              ), T = e.fontMetrics().fboxsep + (l === "colorbox" ? 0 : R), N = T) : l === "angl" ? (R = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), T = 4 * R, N = Math.max(0, 0.25 - r.depth)) : (T = _ ? 0.2 : 0, N = T), m = k0.encloseSpan(r, l, T, N, e), /fbox|boxed|fcolorbox/.test(l) ? (m.style.borderStyle = "solid", m.style.borderWidth = Q(R)) : l === "angl" && R !== 0.049 && (m.style.borderTopWidth = Q(R), m.style.borderRightWidth = Q(R)), g = r.depth + N, t.backgroundColor && (m.style.backgroundColor = t.backgroundColor, t.borderColor && (m.style.borderColor = t.borderColor));
            }
            let v;
            if (t.backgroundColor)
              v = L.makeVList({
                positionType: "individualShift",
                children: [
                  // Put the color background behind inner;
                  {
                    type: "elem",
                    elem: m,
                    shift: g
                  },
                  {
                    type: "elem",
                    elem: r,
                    shift: 0
                  }
                ]
              }, e);
            else {
              const T = /cancel|phase/.test(l) ? ["svg-align"] : [];
              v = L.makeVList({
                positionType: "individualShift",
                children: [
                  // Write the \cancel stroke on top of inner.
                  {
                    type: "elem",
                    elem: r,
                    shift: 0
                  },
                  {
                    type: "elem",
                    elem: m,
                    shift: g,
                    wrapperClasses: T
                  }
                ]
              }, e);
            }
            return /cancel/.test(l) && (v.height = r.height, v.depth = r.depth), /cancel/.test(l) && !_ ? L.makeSpan(["mord", "cancel-lap"], [v], e) : L.makeSpan(["mord"], [v], e);
          }, $r = (t, e) => {
            let r = 0;
            const l = new Z.MathNode(t.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [Le(t.body, e)]);
            switch (t.label) {
              case "\\cancel":
                l.setAttribute("notation", "updiagonalstrike");
                break;
              case "\\bcancel":
                l.setAttribute("notation", "downdiagonalstrike");
                break;
              case "\\phase":
                l.setAttribute("notation", "phasorangle");
                break;
              case "\\sout":
                l.setAttribute("notation", "horizontalstrike");
                break;
              case "\\fbox":
                l.setAttribute("notation", "box");
                break;
              case "\\angl":
                l.setAttribute("notation", "actuarial");
                break;
              case "\\fcolorbox":
              case "\\colorbox":
                if (r = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, l.setAttribute("width", "+" + 2 * r + "pt"), l.setAttribute("height", "+" + 2 * r + "pt"), l.setAttribute("lspace", r + "pt"), l.setAttribute("voffset", r + "pt"), t.label === "\\fcolorbox") {
                  const c = Math.max(
                    e.fontMetrics().fboxrule,
                    // default
                    e.minRuleThickness
                    // user override
                  );
                  l.setAttribute("style", "border: " + c + "em solid " + String(t.borderColor));
                }
                break;
              case "\\xcancel":
                l.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
                break;
            }
            return t.backgroundColor && l.setAttribute("mathbackground", t.backgroundColor), l;
          };
          ee({
            type: "enclose",
            names: ["\\colorbox"],
            props: {
              numArgs: 2,
              allowedInText: !0,
              argTypes: ["color", "text"]
            },
            handler(t, e, r) {
              let {
                parser: l,
                funcName: c
              } = t;
              const m = me(e[0], "color-token").color, g = e[1];
              return {
                type: "enclose",
                mode: l.mode,
                label: c,
                backgroundColor: m,
                body: g
              };
            },
            htmlBuilder: Jr,
            mathmlBuilder: $r
          }), ee({
            type: "enclose",
            names: ["\\fcolorbox"],
            props: {
              numArgs: 3,
              allowedInText: !0,
              argTypes: ["color", "color", "text"]
            },
            handler(t, e, r) {
              let {
                parser: l,
                funcName: c
              } = t;
              const m = me(e[0], "color-token").color, g = me(e[1], "color-token").color, _ = e[2];
              return {
                type: "enclose",
                mode: l.mode,
                label: c,
                backgroundColor: g,
                borderColor: m,
                body: _
              };
            },
            htmlBuilder: Jr,
            mathmlBuilder: $r
          }), ee({
            type: "enclose",
            names: ["\\fbox"],
            props: {
              numArgs: 1,
              argTypes: ["hbox"],
              allowedInText: !0
            },
            handler(t, e) {
              let {
                parser: r
              } = t;
              return {
                type: "enclose",
                mode: r.mode,
                label: "\\fbox",
                body: e[0]
              };
            }
          }), ee({
            type: "enclose",
            names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
            props: {
              numArgs: 1
            },
            handler(t, e) {
              let {
                parser: r,
                funcName: l
              } = t;
              const c = e[0];
              return {
                type: "enclose",
                mode: r.mode,
                label: l,
                body: c
              };
            },
            htmlBuilder: Jr,
            mathmlBuilder: $r
          }), ee({
            type: "enclose",
            names: ["\\angl"],
            props: {
              numArgs: 1,
              argTypes: ["hbox"],
              allowedInText: !1
            },
            handler(t, e) {
              let {
                parser: r
              } = t;
              return {
                type: "enclose",
                mode: r.mode,
                label: "\\angl",
                body: e[0]
              };
            }
          });
          const Ni = {};
          function i0(t) {
            let {
              type: e,
              names: r,
              props: l,
              handler: c,
              htmlBuilder: m,
              mathmlBuilder: g
            } = t;
            const _ = {
              type: e,
              numArgs: l.numArgs || 0,
              allowedInText: !1,
              numOptionalArgs: 0,
              handler: c
            };
            for (let v = 0; v < r.length; ++v)
              Ni[r[v]] = _;
            m && (Vn[e] = m), g && (Wn[e] = g);
          }
          const Ri = {};
          function k(t, e) {
            Ri[t] = e;
          }
          class Et {
            // The + prefix indicates that these fields aren't writeable
            // Lexer holding the input string.
            // Start offset, zero-based inclusive.
            // End offset, zero-based exclusive.
            constructor(e, r, l) {
              this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = r, this.end = l;
            }
            /**
             * Merges two `SourceLocation`s from location providers, given they are
             * provided in order of appearance.
             * - Returns the first one's location if only the first is provided.
             * - Returns a merged range of the first and the last if both are provided
             *   and their lexers match.
             * - Otherwise, returns null.
             */
            static range(e, r) {
              return r ? !e || !e.loc || !r.loc || e.loc.lexer !== r.loc.lexer ? null : new Et(e.loc.lexer, e.loc.start, r.loc.end) : e && e.loc;
            }
          }
          class Pt {
            // don't expand the token
            // used in \noexpand
            constructor(e, r) {
              this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = r;
            }
            /**
             * Given a pair of tokens (this and endToken), compute a `Token` encompassing
             * the whole input range enclosed by these two.
             */
            range(e, r) {
              return new Pt(r, Et.range(this, e));
            }
          }
          function Ii(t) {
            const e = [];
            t.consumeSpaces();
            let r = t.fetch().text;
            for (r === "\\relax" && (t.consume(), t.consumeSpaces(), r = t.fetch().text); r === "\\hline" || r === "\\hdashline"; )
              t.consume(), e.push(r === "\\hdashline"), t.consumeSpaces(), r = t.fetch().text;
            return e;
          }
          const $n = (t) => {
            if (!t.parser.settings.displayMode)
              throw new o("{" + t.envName + "} can be used only in display mode.");
          };
          function es(t) {
            if (t.indexOf("ed") === -1)
              return t.indexOf("*") === -1;
          }
          function M0(t, e, r) {
            let {
              hskipBeforeAndAfter: l,
              addJot: c,
              cols: m,
              arraystretch: g,
              colSeparationType: _,
              autoTag: v,
              singleRow: T,
              emptySingleRow: N,
              maxNumCols: R,
              leqno: P
            } = e;
            if (t.gullet.beginGroup(), T || t.gullet.macros.set("\\cr", "\\\\\\relax"), !g) {
              const qe = t.gullet.expandMacroAsText("\\arraystretch");
              if (qe == null)
                g = 1;
              else if (g = parseFloat(qe), !g || g < 0)
                throw new o("Invalid \\arraystretch: " + qe);
            }
            t.gullet.beginGroup();
            let Y = [];
            const se = [Y], ae = [], ke = [], ge = v != null ? [] : void 0;
            function xe() {
              v && t.gullet.macros.set("\\@eqnsw", "1", !0);
            }
            function Te() {
              ge && (t.gullet.macros.get("\\df@tag") ? (ge.push(t.subparse([new Pt("\\df@tag")])), t.gullet.macros.set("\\df@tag", void 0, !0)) : ge.push(!!v && t.gullet.macros.get("\\@eqnsw") === "1"));
            }
            for (xe(), ke.push(Ii(t)); ; ) {
              let qe = t.parseExpression(!1, T ? "\\end" : "\\\\");
              t.gullet.endGroup(), t.gullet.beginGroup(), qe = {
                type: "ordgroup",
                mode: t.mode,
                body: qe
              }, r && (qe = {
                type: "styling",
                mode: t.mode,
                style: r,
                body: [qe]
              }), Y.push(qe);
              const ht = t.fetch().text;
              if (ht === "&") {
                if (R && Y.length === R) {
                  if (T || _)
                    throw new o("Too many tab characters: &", t.nextToken);
                  t.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
                }
                t.consume();
              } else if (ht === "\\end") {
                Te(), Y.length === 1 && qe.type === "styling" && qe.body[0].body.length === 0 && (se.length > 1 || !N) && se.pop(), ke.length < se.length + 1 && ke.push([]);
                break;
              } else if (ht === "\\\\") {
                t.consume();
                let nt;
                t.gullet.future().text !== " " && (nt = t.parseSizeGroup(!0)), ae.push(nt ? nt.value : null), Te(), ke.push(Ii(t)), Y = [], se.push(Y), xe();
              } else
                throw new o("Expected & or \\\\ or \\cr or \\end", t.nextToken);
            }
            return t.gullet.endGroup(), t.gullet.endGroup(), {
              type: "array",
              mode: t.mode,
              addJot: c,
              arraystretch: g,
              body: se,
              cols: m,
              rowGaps: ae,
              hskipBeforeAndAfter: l,
              hLinesBeforeRow: ke,
              colSeparationType: _,
              tags: ge,
              leqno: P
            };
          }
          function ts(t) {
            return t.slice(0, 1) === "d" ? "display" : "text";
          }
          const l0 = function(t, e) {
            let r, l;
            const c = t.body.length, m = t.hLinesBeforeRow;
            let g = 0, _ = new Array(c);
            const v = [], T = Math.max(
              // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
              e.fontMetrics().arrayRuleWidth,
              e.minRuleThickness
              // User override.
            ), N = 1 / e.fontMetrics().ptPerEm;
            let R = 5 * N;
            t.colSeparationType && t.colSeparationType === "small" && (R = 0.2778 * (e.havingStyle(V.SCRIPT).sizeMultiplier / e.sizeMultiplier));
            const P = t.colSeparationType === "CD" ? Ce({
              number: 3,
              unit: "ex"
            }, e) : 12 * N, Y = 3 * N, se = t.arraystretch * P, ae = 0.7 * se, ke = 0.3 * se;
            let ge = 0;
            function xe(Se) {
              for (let ze = 0; ze < Se.length; ++ze)
                ze > 0 && (ge += 0.25), v.push({
                  pos: ge,
                  isDashed: Se[ze]
                });
            }
            for (xe(m[0]), r = 0; r < t.body.length; ++r) {
              const Se = t.body[r];
              let ze = ae, Pe = ke;
              g < Se.length && (g = Se.length);
              const Ue = new Array(Se.length);
              for (l = 0; l < Se.length; ++l) {
                const Ut = Ae(Se[l], e);
                Pe < Ut.depth && (Pe = Ut.depth), ze < Ut.height && (ze = Ut.height), Ue[l] = Ut;
              }
              const Ye = t.rowGaps[r];
              let Ve = 0;
              Ye && (Ve = Ce(Ye, e), Ve > 0 && (Ve += ke, Pe < Ve && (Pe = Ve), Ve = 0)), t.addJot && (Pe += Y), Ue.height = ze, Ue.depth = Pe, ge += ze, Ue.pos = ge, ge += Pe + Ve, _[r] = Ue, xe(m[r + 1]);
            }
            const Te = ge / 2 + e.fontMetrics().axisHeight, qe = t.cols || [], ht = [];
            let nt, Ht;
            const tn = [];
            if (t.tags && t.tags.some((Se) => Se))
              for (r = 0; r < c; ++r) {
                const Se = _[r], ze = Se.pos - Te, Pe = t.tags[r];
                let Ue;
                Pe === !0 ? Ue = L.makeSpan(["eqn-num"], [], e) : Pe === !1 ? Ue = L.makeSpan([], [], e) : Ue = L.makeSpan([], tt(Pe, e, !0), e), Ue.depth = Se.depth, Ue.height = Se.height, tn.push({
                  type: "elem",
                  elem: Ue,
                  shift: ze
                });
              }
            for (
              l = 0, Ht = 0;
              // Continue while either there are more columns or more column
              // descriptions, so trailing separators don't get lost.
              l < g || Ht < qe.length;
              ++l, ++Ht
            ) {
              let Se = qe[Ht] || {}, ze = !0;
              for (; Se.type === "separator"; ) {
                if (ze || (nt = L.makeSpan(["arraycolsep"], []), nt.style.width = Q(e.fontMetrics().doubleRuleSep), ht.push(nt)), Se.separator === "|" || Se.separator === ":") {
                  const Ye = Se.separator === "|" ? "solid" : "dashed", Ve = L.makeSpan(["vertical-separator"], [], e);
                  Ve.style.height = Q(ge), Ve.style.borderRightWidth = Q(T), Ve.style.borderRightStyle = Ye, Ve.style.margin = "0 " + Q(-T / 2);
                  const Ut = ge - Te;
                  Ut && (Ve.style.verticalAlign = Q(-Ut)), ht.push(Ve);
                } else
                  throw new o("Invalid separator type: " + Se.separator);
                Ht++, Se = qe[Ht] || {}, ze = !1;
              }
              if (l >= g)
                continue;
              let Pe;
              (l > 0 || t.hskipBeforeAndAfter) && (Pe = U.deflt(Se.pregap, R), Pe !== 0 && (nt = L.makeSpan(["arraycolsep"], []), nt.style.width = Q(Pe), ht.push(nt)));
              let Ue = [];
              for (r = 0; r < c; ++r) {
                const Ye = _[r], Ve = Ye[l];
                if (!Ve)
                  continue;
                const Ut = Ye.pos - Te;
                Ve.depth = Ye.depth, Ve.height = Ye.height, Ue.push({
                  type: "elem",
                  elem: Ve,
                  shift: Ut
                });
              }
              Ue = L.makeVList({
                positionType: "individualShift",
                children: Ue
              }, e), Ue = L.makeSpan(["col-align-" + (Se.align || "c")], [Ue]), ht.push(Ue), (l < g - 1 || t.hskipBeforeAndAfter) && (Pe = U.deflt(Se.postgap, R), Pe !== 0 && (nt = L.makeSpan(["arraycolsep"], []), nt.style.width = Q(Pe), ht.push(nt)));
            }
            if (_ = L.makeSpan(["mtable"], ht), v.length > 0) {
              const Se = L.makeLineSpan("hline", e, T), ze = L.makeLineSpan("hdashline", e, T), Pe = [{
                type: "elem",
                elem: _,
                shift: 0
              }];
              for (; v.length > 0; ) {
                const Ue = v.pop(), Ye = Ue.pos - Te;
                Ue.isDashed ? Pe.push({
                  type: "elem",
                  elem: ze,
                  shift: Ye
                }) : Pe.push({
                  type: "elem",
                  elem: Se,
                  shift: Ye
                });
              }
              _ = L.makeVList({
                positionType: "individualShift",
                children: Pe
              }, e);
            }
            if (tn.length === 0)
              return L.makeSpan(["mord"], [_], e);
            {
              let Se = L.makeVList({
                positionType: "individualShift",
                children: tn
              }, e);
              return Se = L.makeSpan(["tag"], [Se], e), L.makeFragment([_, Se]);
            }
          }, Ru = {
            c: "center ",
            l: "left ",
            r: "right "
          }, a0 = function(t, e) {
            const r = [], l = new Z.MathNode("mtd", [], ["mtr-glue"]), c = new Z.MathNode("mtd", [], ["mml-eqn-num"]);
            for (let R = 0; R < t.body.length; R++) {
              const P = t.body[R], Y = [];
              for (let se = 0; se < P.length; se++)
                Y.push(new Z.MathNode("mtd", [Le(P[se], e)]));
              t.tags && t.tags[R] && (Y.unshift(l), Y.push(l), t.leqno ? Y.unshift(c) : Y.push(c)), r.push(new Z.MathNode("mtr", Y));
            }
            let m = new Z.MathNode("mtable", r);
            const g = t.arraystretch === 0.5 ? 0.1 : 0.16 + t.arraystretch - 1 + (t.addJot ? 0.09 : 0);
            m.setAttribute("rowspacing", Q(g));
            let _ = "", v = "";
            if (t.cols && t.cols.length > 0) {
              const R = t.cols;
              let P = "", Y = !1, se = 0, ae = R.length;
              R[0].type === "separator" && (_ += "top ", se = 1), R[R.length - 1].type === "separator" && (_ += "bottom ", ae -= 1);
              for (let ke = se; ke < ae; ke++)
                R[ke].type === "align" ? (v += Ru[R[ke].align], Y && (P += "none "), Y = !0) : R[ke].type === "separator" && Y && (P += R[ke].separator === "|" ? "solid " : "dashed ", Y = !1);
              m.setAttribute("columnalign", v.trim()), /[sd]/.test(P) && m.setAttribute("columnlines", P.trim());
            }
            if (t.colSeparationType === "align") {
              const R = t.cols || [];
              let P = "";
              for (let Y = 1; Y < R.length; Y++)
                P += Y % 2 ? "0em " : "1em ";
              m.setAttribute("columnspacing", P.trim());
            } else
              t.colSeparationType === "alignat" || t.colSeparationType === "gather" ? m.setAttribute("columnspacing", "0em") : t.colSeparationType === "small" ? m.setAttribute("columnspacing", "0.2778em") : t.colSeparationType === "CD" ? m.setAttribute("columnspacing", "0.5em") : m.setAttribute("columnspacing", "1em");
            let T = "";
            const N = t.hLinesBeforeRow;
            _ += N[0].length > 0 ? "left " : "", _ += N[N.length - 1].length > 0 ? "right " : "";
            for (let R = 1; R < N.length - 1; R++)
              T += N[R].length === 0 ? "none " : N[R][0] ? "dashed " : "solid ";
            return /[sd]/.test(T) && m.setAttribute("rowlines", T.trim()), _ !== "" && (m = new Z.MathNode("menclose", [m]), m.setAttribute("notation", _.trim())), t.arraystretch && t.arraystretch < 1 && (m = new Z.MathNode("mstyle", [m]), m.setAttribute("scriptlevel", "1")), m;
          }, Li = function(t, e) {
            t.envName.indexOf("ed") === -1 && $n(t);
            const r = [], l = t.envName.indexOf("at") > -1 ? "alignat" : "align", c = t.envName === "split", m = M0(t.parser, {
              cols: r,
              addJot: !0,
              autoTag: c ? void 0 : es(t.envName),
              emptySingleRow: !0,
              colSeparationType: l,
              maxNumCols: c ? 2 : void 0,
              leqno: t.parser.settings.leqno
            }, "display");
            let g, _ = 0;
            const v = {
              type: "ordgroup",
              mode: t.mode,
              body: []
            };
            if (e[0] && e[0].type === "ordgroup") {
              let N = "";
              for (let R = 0; R < e[0].body.length; R++) {
                const P = me(e[0].body[R], "textord");
                N += P.text;
              }
              g = Number(N), _ = g * 2;
            }
            const T = !_;
            m.body.forEach(function(N) {
              for (let R = 1; R < N.length; R += 2) {
                const P = me(N[R], "styling");
                me(P.body[0], "ordgroup").body.unshift(v);
              }
              if (T)
                _ < N.length && (_ = N.length);
              else {
                const R = N.length / 2;
                if (g < R)
                  throw new o("Too many math in a row: " + ("expected " + g + ", but got " + R), N[0]);
              }
            });
            for (let N = 0; N < _; ++N) {
              let R = "r", P = 0;
              N % 2 === 1 ? R = "l" : N > 0 && T && (P = 1), r[N] = {
                type: "align",
                align: R,
                pregap: P,
                postgap: 0
              };
            }
            return m.colSeparationType = T ? "align" : "alignat", m;
          };
          i0({
            type: "array",
            names: ["array", "darray"],
            props: {
              numArgs: 1
            },
            handler(t, e) {
              const c = (Yn(e[0]) ? [e[0]] : me(e[0], "ordgroup").body).map(function(g) {
                const v = Ur(g).text;
                if ("lcr".indexOf(v) !== -1)
                  return {
                    type: "align",
                    align: v
                  };
                if (v === "|")
                  return {
                    type: "separator",
                    separator: "|"
                  };
                if (v === ":")
                  return {
                    type: "separator",
                    separator: ":"
                  };
                throw new o("Unknown column alignment: " + v, g);
              }), m = {
                cols: c,
                hskipBeforeAndAfter: !0,
                // \@preamble in lttab.dtx
                maxNumCols: c.length
              };
              return M0(t.parser, m, ts(t.envName));
            },
            htmlBuilder: l0,
            mathmlBuilder: a0
          }), i0({
            type: "array",
            names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
            props: {
              numArgs: 0
            },
            handler(t) {
              const e = {
                matrix: null,
                pmatrix: ["(", ")"],
                bmatrix: ["[", "]"],
                Bmatrix: ["\\{", "\\}"],
                vmatrix: ["|", "|"],
                Vmatrix: ["\\Vert", "\\Vert"]
              }[t.envName.replace("*", "")];
              let r = "c";
              const l = {
                hskipBeforeAndAfter: !1,
                cols: [{
                  type: "align",
                  align: r
                }]
              };
              if (t.envName.charAt(t.envName.length - 1) === "*") {
                const g = t.parser;
                if (g.consumeSpaces(), g.fetch().text === "[") {
                  if (g.consume(), g.consumeSpaces(), r = g.fetch().text, "lcr".indexOf(r) === -1)
                    throw new o("Expected l or c or r", g.nextToken);
                  g.consume(), g.consumeSpaces(), g.expect("]"), g.consume(), l.cols = [{
                    type: "align",
                    align: r
                  }];
                }
              }
              const c = M0(t.parser, l, ts(t.envName)), m = Math.max(0, ...c.body.map((g) => g.length));
              return c.cols = new Array(m).fill({
                type: "align",
                align: r
              }), e ? {
                type: "leftright",
                mode: t.mode,
                body: [c],
                left: e[0],
                right: e[1],
                rightColor: void 0
                // \right uninfluenced by \color in array
              } : c;
            },
            htmlBuilder: l0,
            mathmlBuilder: a0
          }), i0({
            type: "array",
            names: ["smallmatrix"],
            props: {
              numArgs: 0
            },
            handler(t) {
              const e = {
                arraystretch: 0.5
              }, r = M0(t.parser, e, "script");
              return r.colSeparationType = "small", r;
            },
            htmlBuilder: l0,
            mathmlBuilder: a0
          }), i0({
            type: "array",
            names: ["subarray"],
            props: {
              numArgs: 1
            },
            handler(t, e) {
              const c = (Yn(e[0]) ? [e[0]] : me(e[0], "ordgroup").body).map(function(g) {
                const v = Ur(g).text;
                if ("lc".indexOf(v) !== -1)
                  return {
                    type: "align",
                    align: v
                  };
                throw new o("Unknown column alignment: " + v, g);
              });
              if (c.length > 1)
                throw new o("{subarray} can contain only one column");
              let m = {
                cols: c,
                hskipBeforeAndAfter: !1,
                arraystretch: 0.5
              };
              if (m = M0(t.parser, m, "script"), m.body.length > 0 && m.body[0].length > 1)
                throw new o("{subarray} can contain only one column");
              return m;
            },
            htmlBuilder: l0,
            mathmlBuilder: a0
          }), i0({
            type: "array",
            names: ["cases", "dcases", "rcases", "drcases"],
            props: {
              numArgs: 0
            },
            handler(t) {
              const e = {
                arraystretch: 1.2,
                cols: [{
                  type: "align",
                  align: "l",
                  pregap: 0,
                  // TODO(kevinb) get the current style.
                  // For now we use the metrics for TEXT style which is what we were
                  // doing before.  Before attempting to get the current style we
                  // should look at TeX's behavior especially for \over and matrices.
                  postgap: 1
                  /* 1em quad */
                }, {
                  type: "align",
                  align: "l",
                  pregap: 0,
                  postgap: 0
                }]
              }, r = M0(t.parser, e, ts(t.envName));
              return {
                type: "leftright",
                mode: t.mode,
                body: [r],
                left: t.envName.indexOf("r") > -1 ? "." : "\\{",
                right: t.envName.indexOf("r") > -1 ? "\\}" : ".",
                rightColor: void 0
              };
            },
            htmlBuilder: l0,
            mathmlBuilder: a0
          }), i0({
            type: "array",
            names: ["align", "align*", "aligned", "split"],
            props: {
              numArgs: 0
            },
            handler: Li,
            htmlBuilder: l0,
            mathmlBuilder: a0
          }), i0({
            type: "array",
            names: ["gathered", "gather", "gather*"],
            props: {
              numArgs: 0
            },
            handler(t) {
              U.contains(["gather", "gather*"], t.envName) && $n(t);
              const e = {
                cols: [{
                  type: "align",
                  align: "c"
                }],
                addJot: !0,
                colSeparationType: "gather",
                autoTag: es(t.envName),
                emptySingleRow: !0,
                leqno: t.parser.settings.leqno
              };
              return M0(t.parser, e, "display");
            },
            htmlBuilder: l0,
            mathmlBuilder: a0
          }), i0({
            type: "array",
            names: ["alignat", "alignat*", "alignedat"],
            props: {
              numArgs: 1
            },
            handler: Li,
            htmlBuilder: l0,
            mathmlBuilder: a0
          }), i0({
            type: "array",
            names: ["equation", "equation*"],
            props: {
              numArgs: 0
            },
            handler(t) {
              $n(t);
              const e = {
                autoTag: es(t.envName),
                emptySingleRow: !0,
                singleRow: !0,
                maxNumCols: 1,
                leqno: t.parser.settings.leqno
              };
              return M0(t.parser, e, "display");
            },
            htmlBuilder: l0,
            mathmlBuilder: a0
          }), i0({
            type: "array",
            names: ["CD"],
            props: {
              numArgs: 0
            },
            handler(t) {
              return $n(t), Du(t.parser);
            },
            htmlBuilder: l0,
            mathmlBuilder: a0
          }), k("\\nonumber", "\\gdef\\@eqnsw{0}"), k("\\notag", "\\nonumber"), ee({
            type: "text",
            // Doesn't matter what this is.
            names: ["\\hline", "\\hdashline"],
            props: {
              numArgs: 0,
              allowedInText: !0,
              allowedInMath: !0
            },
            handler(t, e) {
              throw new o(t.funcName + " valid only within array environment");
            }
          });
          var Oi = Ni;
          ee({
            type: "environment",
            names: ["\\begin", "\\end"],
            props: {
              numArgs: 1,
              argTypes: ["text"]
            },
            handler(t, e) {
              let {
                parser: r,
                funcName: l
              } = t;
              const c = e[0];
              if (c.type !== "ordgroup")
                throw new o("Invalid environment name", c);
              let m = "";
              for (let g = 0; g < c.body.length; ++g)
                m += me(c.body[g], "textord").text;
              if (l === "\\begin") {
                if (!Oi.hasOwnProperty(m))
                  throw new o("No such environment: " + m, c);
                const g = Oi[m], {
                  args: _,
                  optArgs: v
                } = r.parseArguments("\\begin{" + m + "}", g), T = {
                  mode: r.mode,
                  envName: m,
                  parser: r
                }, N = g.handler(T, _, v);
                r.expect("\\end", !1);
                const R = r.nextToken, P = me(r.parseFunction(), "environment");
                if (P.name !== m)
                  throw new o("Mismatch: \\begin{" + m + "} matched by \\end{" + P.name + "}", R);
                return N;
              }
              return {
                type: "environment",
                mode: r.mode,
                name: m,
                nameGroup: c
              };
            }
          });
          const qi = (t, e) => {
            const r = t.font, l = e.withFont(r);
            return Ae(t.body, l);
          }, Pi = (t, e) => {
            const r = t.font, l = e.withFont(r);
            return Le(t.body, l);
          }, Hi = {
            "\\Bbb": "\\mathbb",
            "\\bold": "\\mathbf",
            "\\frak": "\\mathfrak",
            "\\bm": "\\boldsymbol"
          };
          ee({
            type: "font",
            names: [
              // styles, except \boldsymbol defined below
              "\\mathrm",
              "\\mathit",
              "\\mathbf",
              "\\mathnormal",
              // families
              "\\mathbb",
              "\\mathcal",
              "\\mathfrak",
              "\\mathscr",
              "\\mathsf",
              "\\mathtt",
              // aliases, except \bm defined below
              "\\Bbb",
              "\\bold",
              "\\frak"
            ],
            props: {
              numArgs: 1,
              allowedInArgument: !0
            },
            handler: (t, e) => {
              let {
                parser: r,
                funcName: l
              } = t;
              const c = jn(e[0]);
              let m = l;
              return m in Hi && (m = Hi[m]), {
                type: "font",
                mode: r.mode,
                font: m.slice(1),
                body: c
              };
            },
            htmlBuilder: qi,
            mathmlBuilder: Pi
          }), ee({
            type: "mclass",
            names: ["\\boldsymbol", "\\bm"],
            props: {
              numArgs: 1
            },
            handler: (t, e) => {
              let {
                parser: r
              } = t;
              const l = e[0], c = U.isCharacterBox(l);
              return {
                type: "mclass",
                mode: r.mode,
                mclass: Kn(l),
                body: [{
                  type: "font",
                  mode: r.mode,
                  font: "boldsymbol",
                  body: l
                }],
                isCharacterBox: c
              };
            }
          }), ee({
            type: "font",
            names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
            props: {
              numArgs: 0,
              allowedInText: !0
            },
            handler: (t, e) => {
              let {
                parser: r,
                funcName: l,
                breakOnTokenText: c
              } = t;
              const {
                mode: m
              } = r, g = r.parseExpression(!0, c), _ = "math" + l.slice(1);
              return {
                type: "font",
                mode: m,
                font: _,
                body: {
                  type: "ordgroup",
                  mode: r.mode,
                  body: g
                }
              };
            },
            htmlBuilder: qi,
            mathmlBuilder: Pi
          });
          const Ui = (t, e) => {
            let r = e;
            return t === "display" ? r = r.id >= V.SCRIPT.id ? r.text() : V.DISPLAY : t === "text" && r.size === V.DISPLAY.size ? r = V.TEXT : t === "script" ? r = V.SCRIPT : t === "scriptscript" && (r = V.SCRIPTSCRIPT), r;
          }, ns = (t, e) => {
            const r = Ui(t.size, e.style), l = r.fracNum(), c = r.fracDen();
            let m;
            m = e.havingStyle(l);
            const g = Ae(t.numer, m, e);
            if (t.continued) {
              const xe = 8.5 / e.fontMetrics().ptPerEm, Te = 3.5 / e.fontMetrics().ptPerEm;
              g.height = g.height < xe ? xe : g.height, g.depth = g.depth < Te ? Te : g.depth;
            }
            m = e.havingStyle(c);
            const _ = Ae(t.denom, m, e);
            let v, T, N;
            t.hasBarLine ? (t.barSize ? (T = Ce(t.barSize, e), v = L.makeLineSpan("frac-line", e, T)) : v = L.makeLineSpan("frac-line", e), T = v.height, N = v.height) : (v = null, T = 0, N = e.fontMetrics().defaultRuleThickness);
            let R, P, Y;
            r.size === V.DISPLAY.size || t.size === "display" ? (R = e.fontMetrics().num1, T > 0 ? P = 3 * N : P = 7 * N, Y = e.fontMetrics().denom1) : (T > 0 ? (R = e.fontMetrics().num2, P = N) : (R = e.fontMetrics().num3, P = 3 * N), Y = e.fontMetrics().denom2);
            let se;
            if (v) {
              const xe = e.fontMetrics().axisHeight;
              R - g.depth - (xe + 0.5 * T) < P && (R += P - (R - g.depth - (xe + 0.5 * T))), xe - 0.5 * T - (_.height - Y) < P && (Y += P - (xe - 0.5 * T - (_.height - Y)));
              const Te = -(xe - 0.5 * T);
              se = L.makeVList({
                positionType: "individualShift",
                children: [{
                  type: "elem",
                  elem: _,
                  shift: Y
                }, {
                  type: "elem",
                  elem: v,
                  shift: Te
                }, {
                  type: "elem",
                  elem: g,
                  shift: -R
                }]
              }, e);
            } else {
              const xe = R - g.depth - (_.height - Y);
              xe < P && (R += 0.5 * (P - xe), Y += 0.5 * (P - xe)), se = L.makeVList({
                positionType: "individualShift",
                children: [{
                  type: "elem",
                  elem: _,
                  shift: Y
                }, {
                  type: "elem",
                  elem: g,
                  shift: -R
                }]
              }, e);
            }
            m = e.havingStyle(r), se.height *= m.sizeMultiplier / e.sizeMultiplier, se.depth *= m.sizeMultiplier / e.sizeMultiplier;
            let ae;
            r.size === V.DISPLAY.size ? ae = e.fontMetrics().delim1 : r.size === V.SCRIPTSCRIPT.size ? ae = e.havingStyle(V.SCRIPT).fontMetrics().delim2 : ae = e.fontMetrics().delim2;
            let ke, ge;
            return t.leftDelim == null ? ke = mn(e, ["mopen"]) : ke = D0.customSizedDelim(t.leftDelim, ae, !0, e.havingStyle(r), t.mode, ["mopen"]), t.continued ? ge = L.makeSpan([]) : t.rightDelim == null ? ge = mn(e, ["mclose"]) : ge = D0.customSizedDelim(t.rightDelim, ae, !0, e.havingStyle(r), t.mode, ["mclose"]), L.makeSpan(["mord"].concat(m.sizingClasses(e)), [ke, L.makeSpan(["mfrac"], [se]), ge], e);
          }, rs = (t, e) => {
            let r = new Z.MathNode("mfrac", [Le(t.numer, e), Le(t.denom, e)]);
            if (!t.hasBarLine)
              r.setAttribute("linethickness", "0px");
            else if (t.barSize) {
              const c = Ce(t.barSize, e);
              r.setAttribute("linethickness", Q(c));
            }
            const l = Ui(t.size, e.style);
            if (l.size !== e.style.size) {
              r = new Z.MathNode("mstyle", [r]);
              const c = l.size === V.DISPLAY.size ? "true" : "false";
              r.setAttribute("displaystyle", c), r.setAttribute("scriptlevel", "0");
            }
            if (t.leftDelim != null || t.rightDelim != null) {
              const c = [];
              if (t.leftDelim != null) {
                const m = new Z.MathNode("mo", [new Z.TextNode(t.leftDelim.replace("\\", ""))]);
                m.setAttribute("fence", "true"), c.push(m);
              }
              if (c.push(r), t.rightDelim != null) {
                const m = new Z.MathNode("mo", [new Z.TextNode(t.rightDelim.replace("\\", ""))]);
                m.setAttribute("fence", "true"), c.push(m);
              }
              return Pr(c);
            }
            return r;
          };
          ee({
            type: "genfrac",
            names: [
              "\\dfrac",
              "\\frac",
              "\\tfrac",
              "\\dbinom",
              "\\binom",
              "\\tbinom",
              "\\\\atopfrac",
              // can’t be entered directly
              "\\\\bracefrac",
              "\\\\brackfrac"
              // ditto
            ],
            props: {
              numArgs: 2,
              allowedInArgument: !0
            },
            handler: (t, e) => {
              let {
                parser: r,
                funcName: l
              } = t;
              const c = e[0], m = e[1];
              let g, _ = null, v = null, T = "auto";
              switch (l) {
                case "\\dfrac":
                case "\\frac":
                case "\\tfrac":
                  g = !0;
                  break;
                case "\\\\atopfrac":
                  g = !1;
                  break;
                case "\\dbinom":
                case "\\binom":
                case "\\tbinom":
                  g = !1, _ = "(", v = ")";
                  break;
                case "\\\\bracefrac":
                  g = !1, _ = "\\{", v = "\\}";
                  break;
                case "\\\\brackfrac":
                  g = !1, _ = "[", v = "]";
                  break;
                default:
                  throw new Error("Unrecognized genfrac command");
              }
              switch (l) {
                case "\\dfrac":
                case "\\dbinom":
                  T = "display";
                  break;
                case "\\tfrac":
                case "\\tbinom":
                  T = "text";
                  break;
              }
              return {
                type: "genfrac",
                mode: r.mode,
                continued: !1,
                numer: c,
                denom: m,
                hasBarLine: g,
                leftDelim: _,
                rightDelim: v,
                size: T,
                barSize: null
              };
            },
            htmlBuilder: ns,
            mathmlBuilder: rs
          }), ee({
            type: "genfrac",
            names: ["\\cfrac"],
            props: {
              numArgs: 2
            },
            handler: (t, e) => {
              let {
                parser: r,
                funcName: l
              } = t;
              const c = e[0], m = e[1];
              return {
                type: "genfrac",
                mode: r.mode,
                continued: !0,
                numer: c,
                denom: m,
                hasBarLine: !0,
                leftDelim: null,
                rightDelim: null,
                size: "display",
                barSize: null
              };
            }
          }), ee({
            type: "infix",
            names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
            props: {
              numArgs: 0,
              infix: !0
            },
            handler(t) {
              let {
                parser: e,
                funcName: r,
                token: l
              } = t, c;
              switch (r) {
                case "\\over":
                  c = "\\frac";
                  break;
                case "\\choose":
                  c = "\\binom";
                  break;
                case "\\atop":
                  c = "\\\\atopfrac";
                  break;
                case "\\brace":
                  c = "\\\\bracefrac";
                  break;
                case "\\brack":
                  c = "\\\\brackfrac";
                  break;
                default:
                  throw new Error("Unrecognized infix genfrac command");
              }
              return {
                type: "infix",
                mode: e.mode,
                replaceWith: c,
                token: l
              };
            }
          });
          const Gi = ["display", "text", "script", "scriptscript"], Vi = function(t) {
            let e = null;
            return t.length > 0 && (e = t, e = e === "." ? null : e), e;
          };
          ee({
            type: "genfrac",
            names: ["\\genfrac"],
            props: {
              numArgs: 6,
              allowedInArgument: !0,
              argTypes: ["math", "math", "size", "text", "math", "math"]
            },
            handler(t, e) {
              let {
                parser: r
              } = t;
              const l = e[4], c = e[5], m = jn(e[0]), g = m.type === "atom" && m.family === "open" ? Vi(m.text) : null, _ = jn(e[1]), v = _.type === "atom" && _.family === "close" ? Vi(_.text) : null, T = me(e[2], "size");
              let N, R = null;
              T.isBlank ? N = !0 : (R = T.value, N = R.number > 0);
              let P = "auto", Y = e[3];
              if (Y.type === "ordgroup") {
                if (Y.body.length > 0) {
                  const se = me(Y.body[0], "textord");
                  P = Gi[Number(se.text)];
                }
              } else
                Y = me(Y, "textord"), P = Gi[Number(Y.text)];
              return {
                type: "genfrac",
                mode: r.mode,
                numer: l,
                denom: c,
                continued: !1,
                hasBarLine: N,
                barSize: R,
                leftDelim: g,
                rightDelim: v,
                size: P
              };
            },
            htmlBuilder: ns,
            mathmlBuilder: rs
          }), ee({
            type: "infix",
            names: ["\\above"],
            props: {
              numArgs: 1,
              argTypes: ["size"],
              infix: !0
            },
            handler(t, e) {
              let {
                parser: r,
                funcName: l,
                token: c
              } = t;
              return {
                type: "infix",
                mode: r.mode,
                replaceWith: "\\\\abovefrac",
                size: me(e[0], "size").value,
                token: c
              };
            }
          }), ee({
            type: "genfrac",
            names: ["\\\\abovefrac"],
            props: {
              numArgs: 3,
              argTypes: ["math", "size", "math"]
            },
            handler: (t, e) => {
              let {
                parser: r,
                funcName: l
              } = t;
              const c = e[0], m = j(me(e[1], "infix").size), g = e[2], _ = m.number > 0;
              return {
                type: "genfrac",
                mode: r.mode,
                numer: c,
                denom: g,
                continued: !1,
                hasBarLine: _,
                barSize: m,
                leftDelim: null,
                rightDelim: null,
                size: "auto"
              };
            },
            htmlBuilder: ns,
            mathmlBuilder: rs
          });
          const Wi = (t, e) => {
            const r = e.style;
            let l, c;
            t.type === "supsub" ? (l = t.sup ? Ae(t.sup, e.havingStyle(r.sup()), e) : Ae(t.sub, e.havingStyle(r.sub()), e), c = me(t.base, "horizBrace")) : c = me(t, "horizBrace");
            const m = Ae(c.base, e.havingBaseStyle(V.DISPLAY)), g = k0.svgSpan(c, e);
            let _;
            if (c.isOver ? (_ = L.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: m
              }, {
                type: "kern",
                size: 0.1
              }, {
                type: "elem",
                elem: g
              }]
            }, e), _.children[0].children[0].children[1].classes.push("svg-align")) : (_ = L.makeVList({
              positionType: "bottom",
              positionData: m.depth + 0.1 + g.height,
              children: [{
                type: "elem",
                elem: g
              }, {
                type: "kern",
                size: 0.1
              }, {
                type: "elem",
                elem: m
              }]
            }, e), _.children[0].children[0].children[0].classes.push("svg-align")), l) {
              const v = L.makeSpan(["mord", c.isOver ? "mover" : "munder"], [_], e);
              c.isOver ? _ = L.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: v
                }, {
                  type: "kern",
                  size: 0.2
                }, {
                  type: "elem",
                  elem: l
                }]
              }, e) : _ = L.makeVList({
                positionType: "bottom",
                positionData: v.depth + 0.2 + l.height + l.depth,
                children: [{
                  type: "elem",
                  elem: l
                }, {
                  type: "kern",
                  size: 0.2
                }, {
                  type: "elem",
                  elem: v
                }]
              }, e);
            }
            return L.makeSpan(["mord", c.isOver ? "mover" : "munder"], [_], e);
          };
          ee({
            type: "horizBrace",
            names: ["\\overbrace", "\\underbrace"],
            props: {
              numArgs: 1
            },
            handler(t, e) {
              let {
                parser: r,
                funcName: l
              } = t;
              return {
                type: "horizBrace",
                mode: r.mode,
                label: l,
                isOver: /^\\over/.test(l),
                base: e[0]
              };
            },
            htmlBuilder: Wi,
            mathmlBuilder: (t, e) => {
              const r = k0.mathMLnode(t.label);
              return new Z.MathNode(t.isOver ? "mover" : "munder", [Le(t.base, e), r]);
            }
          }), ee({
            type: "href",
            names: ["\\href"],
            props: {
              numArgs: 2,
              argTypes: ["url", "original"],
              allowedInText: !0
            },
            handler: (t, e) => {
              let {
                parser: r
              } = t;
              const l = e[1], c = me(e[0], "url").url;
              return r.settings.isTrusted({
                command: "\\href",
                url: c
              }) ? {
                type: "href",
                mode: r.mode,
                href: c,
                body: Ze(l)
              } : r.formatUnsupportedCmd("\\href");
            },
            htmlBuilder: (t, e) => {
              const r = tt(t.body, e, !1);
              return L.makeAnchor(t.href, [], r, e);
            },
            mathmlBuilder: (t, e) => {
              let r = C0(t.body, e);
              return r instanceof Ot || (r = new Ot("mrow", [r])), r.setAttribute("href", t.href), r;
            }
          }), ee({
            type: "href",
            names: ["\\url"],
            props: {
              numArgs: 1,
              argTypes: ["url"],
              allowedInText: !0
            },
            handler: (t, e) => {
              let {
                parser: r
              } = t;
              const l = me(e[0], "url").url;
              if (!r.settings.isTrusted({
                command: "\\url",
                url: l
              }))
                return r.formatUnsupportedCmd("\\url");
              const c = [];
              for (let g = 0; g < l.length; g++) {
                let _ = l[g];
                _ === "~" && (_ = "\\textasciitilde"), c.push({
                  type: "textord",
                  mode: "text",
                  text: _
                });
              }
              const m = {
                type: "text",
                mode: r.mode,
                font: "\\texttt",
                body: c
              };
              return {
                type: "href",
                mode: r.mode,
                href: l,
                body: Ze(m)
              };
            }
          }), ee({
            type: "hbox",
            names: ["\\hbox"],
            props: {
              numArgs: 1,
              argTypes: ["text"],
              allowedInText: !0,
              primitive: !0
            },
            handler(t, e) {
              let {
                parser: r
              } = t;
              return {
                type: "hbox",
                mode: r.mode,
                body: Ze(e[0])
              };
            },
            htmlBuilder(t, e) {
              const r = tt(t.body, e, !1);
              return L.makeFragment(r);
            },
            mathmlBuilder(t, e) {
              return new Z.MathNode("mrow", _t(t.body, e));
            }
          }), ee({
            type: "html",
            names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
            props: {
              numArgs: 2,
              argTypes: ["raw", "original"],
              allowedInText: !0
            },
            handler: (t, e) => {
              let {
                parser: r,
                funcName: l,
                token: c
              } = t;
              const m = me(e[0], "raw").string, g = e[1];
              r.settings.strict && r.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
              let _;
              const v = {};
              switch (l) {
                case "\\htmlClass":
                  v.class = m, _ = {
                    command: "\\htmlClass",
                    class: m
                  };
                  break;
                case "\\htmlId":
                  v.id = m, _ = {
                    command: "\\htmlId",
                    id: m
                  };
                  break;
                case "\\htmlStyle":
                  v.style = m, _ = {
                    command: "\\htmlStyle",
                    style: m
                  };
                  break;
                case "\\htmlData": {
                  const T = m.split(",");
                  for (let N = 0; N < T.length; N++) {
                    const R = T[N].split("=");
                    if (R.length !== 2)
                      throw new o("Error parsing key-value for \\htmlData");
                    v["data-" + R[0].trim()] = R[1].trim();
                  }
                  _ = {
                    command: "\\htmlData",
                    attributes: v
                  };
                  break;
                }
                default:
                  throw new Error("Unrecognized html command");
              }
              return r.settings.isTrusted(_) ? {
                type: "html",
                mode: r.mode,
                attributes: v,
                body: Ze(g)
              } : r.formatUnsupportedCmd(l);
            },
            htmlBuilder: (t, e) => {
              const r = tt(t.body, e, !1), l = ["enclosing"];
              t.attributes.class && l.push(...t.attributes.class.trim().split(/\s+/));
              const c = L.makeSpan(l, r, e);
              for (const m in t.attributes)
                m !== "class" && t.attributes.hasOwnProperty(m) && c.setAttribute(m, t.attributes[m]);
              return c;
            },
            mathmlBuilder: (t, e) => C0(t.body, e)
          }), ee({
            type: "htmlmathml",
            names: ["\\html@mathml"],
            props: {
              numArgs: 2,
              allowedInText: !0
            },
            handler: (t, e) => {
              let {
                parser: r
              } = t;
              return {
                type: "htmlmathml",
                mode: r.mode,
                html: Ze(e[0]),
                mathml: Ze(e[1])
              };
            },
            htmlBuilder: (t, e) => {
              const r = tt(t.html, e, !1);
              return L.makeFragment(r);
            },
            mathmlBuilder: (t, e) => C0(t.mathml, e)
          });
          const ss = function(t) {
            if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))
              return {
                number: +t,
                unit: "bp"
              };
            {
              const e = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);
              if (!e)
                throw new o("Invalid size: '" + t + "' in \\includegraphics");
              const r = {
                number: +(e[1] + e[2]),
                // sign + magnitude, cast to number
                unit: e[3]
              };
              if (!Nt(r))
                throw new o("Invalid unit: '" + r.unit + "' in \\includegraphics.");
              return r;
            }
          };
          ee({
            type: "includegraphics",
            names: ["\\includegraphics"],
            props: {
              numArgs: 1,
              numOptionalArgs: 1,
              argTypes: ["raw", "url"],
              allowedInText: !1
            },
            handler: (t, e, r) => {
              let {
                parser: l
              } = t, c = {
                number: 0,
                unit: "em"
              }, m = {
                number: 0.9,
                unit: "em"
              }, g = {
                number: 0,
                unit: "em"
              }, _ = "";
              if (r[0]) {
                const N = me(r[0], "raw").string.split(",");
                for (let R = 0; R < N.length; R++) {
                  const P = N[R].split("=");
                  if (P.length === 2) {
                    const Y = P[1].trim();
                    switch (P[0].trim()) {
                      case "alt":
                        _ = Y;
                        break;
                      case "width":
                        c = ss(Y);
                        break;
                      case "height":
                        m = ss(Y);
                        break;
                      case "totalheight":
                        g = ss(Y);
                        break;
                      default:
                        throw new o("Invalid key: '" + P[0] + "' in \\includegraphics.");
                    }
                  }
                }
              }
              const v = me(e[0], "url").url;
              return _ === "" && (_ = v, _ = _.replace(/^.*[\\/]/, ""), _ = _.substring(0, _.lastIndexOf("."))), l.settings.isTrusted({
                command: "\\includegraphics",
                url: v
              }) ? {
                type: "includegraphics",
                mode: l.mode,
                alt: _,
                width: c,
                height: m,
                totalheight: g,
                src: v
              } : l.formatUnsupportedCmd("\\includegraphics");
            },
            htmlBuilder: (t, e) => {
              const r = Ce(t.height, e);
              let l = 0;
              t.totalheight.number > 0 && (l = Ce(t.totalheight, e) - r);
              let c = 0;
              t.width.number > 0 && (c = Ce(t.width, e));
              const m = {
                height: Q(r + l)
              };
              c > 0 && (m.width = Q(c)), l > 0 && (m.verticalAlign = Q(-l));
              const g = new T0(t.src, t.alt, m);
              return g.height = r, g.depth = l, g;
            },
            mathmlBuilder: (t, e) => {
              const r = new Z.MathNode("mglyph", []);
              r.setAttribute("alt", t.alt);
              const l = Ce(t.height, e);
              let c = 0;
              if (t.totalheight.number > 0 && (c = Ce(t.totalheight, e) - l, r.setAttribute("valign", Q(-c))), r.setAttribute("height", Q(l + c)), t.width.number > 0) {
                const m = Ce(t.width, e);
                r.setAttribute("width", Q(m));
              }
              return r.setAttribute("src", t.src), r;
            }
          }), ee({
            type: "kern",
            names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
            props: {
              numArgs: 1,
              argTypes: ["size"],
              primitive: !0,
              allowedInText: !0
            },
            handler(t, e) {
              let {
                parser: r,
                funcName: l
              } = t;
              const c = me(e[0], "size");
              if (r.settings.strict) {
                const m = l[1] === "m", g = c.value.unit === "mu";
                m ? (g || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + l + " supports only mu units, " + ("not " + c.value.unit + " units")), r.mode !== "math" && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + l + " works only in math mode")) : g && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + l + " doesn't support mu units");
              }
              return {
                type: "kern",
                mode: r.mode,
                dimension: c.value
              };
            },
            htmlBuilder(t, e) {
              return L.makeGlue(t.dimension, e);
            },
            mathmlBuilder(t, e) {
              const r = Ce(t.dimension, e);
              return new Z.SpaceNode(r);
            }
          }), ee({
            type: "lap",
            names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
            props: {
              numArgs: 1,
              allowedInText: !0
            },
            handler: (t, e) => {
              let {
                parser: r,
                funcName: l
              } = t;
              const c = e[0];
              return {
                type: "lap",
                mode: r.mode,
                alignment: l.slice(5),
                body: c
              };
            },
            htmlBuilder: (t, e) => {
              let r;
              t.alignment === "clap" ? (r = L.makeSpan([], [Ae(t.body, e)]), r = L.makeSpan(["inner"], [r], e)) : r = L.makeSpan(["inner"], [Ae(t.body, e)]);
              const l = L.makeSpan(["fix"], []);
              let c = L.makeSpan([t.alignment], [r, l], e);
              const m = L.makeSpan(["strut"]);
              return m.style.height = Q(c.height + c.depth), c.depth && (m.style.verticalAlign = Q(-c.depth)), c.children.unshift(m), c = L.makeSpan(["thinbox"], [c], e), L.makeSpan(["mord", "vbox"], [c], e);
            },
            mathmlBuilder: (t, e) => {
              const r = new Z.MathNode("mpadded", [Le(t.body, e)]);
              if (t.alignment !== "rlap") {
                const l = t.alignment === "llap" ? "-1" : "-0.5";
                r.setAttribute("lspace", l + "width");
              }
              return r.setAttribute("width", "0px"), r;
            }
          }), ee({
            type: "styling",
            names: ["\\(", "$"],
            props: {
              numArgs: 0,
              allowedInText: !0,
              allowedInMath: !1
            },
            handler(t, e) {
              let {
                funcName: r,
                parser: l
              } = t;
              const c = l.mode;
              l.switchMode("math");
              const m = r === "\\(" ? "\\)" : "$", g = l.parseExpression(!1, m);
              return l.expect(m), l.switchMode(c), {
                type: "styling",
                mode: l.mode,
                style: "text",
                body: g
              };
            }
          }), ee({
            type: "text",
            // Doesn't matter what this is.
            names: ["\\)", "\\]"],
            props: {
              numArgs: 0,
              allowedInText: !0,
              allowedInMath: !1
            },
            handler(t, e) {
              throw new o("Mismatched " + t.funcName);
            }
          });
          const ji = (t, e) => {
            switch (e.style.size) {
              case V.DISPLAY.size:
                return t.display;
              case V.TEXT.size:
                return t.text;
              case V.SCRIPT.size:
                return t.script;
              case V.SCRIPTSCRIPT.size:
                return t.scriptscript;
              default:
                return t.text;
            }
          };
          ee({
            type: "mathchoice",
            names: ["\\mathchoice"],
            props: {
              numArgs: 4,
              primitive: !0
            },
            handler: (t, e) => {
              let {
                parser: r
              } = t;
              return {
                type: "mathchoice",
                mode: r.mode,
                display: Ze(e[0]),
                text: Ze(e[1]),
                script: Ze(e[2]),
                scriptscript: Ze(e[3])
              };
            },
            htmlBuilder: (t, e) => {
              const r = ji(t, e), l = tt(r, e, !1);
              return L.makeFragment(l);
            },
            mathmlBuilder: (t, e) => {
              const r = ji(t, e);
              return C0(r, e);
            }
          });
          const Xi = (t, e, r, l, c, m, g) => {
            t = L.makeSpan([], [t]);
            const _ = r && U.isCharacterBox(r);
            let v, T;
            if (e) {
              const P = Ae(e, l.havingStyle(c.sup()), l);
              T = {
                elem: P,
                kern: Math.max(l.fontMetrics().bigOpSpacing1, l.fontMetrics().bigOpSpacing3 - P.depth)
              };
            }
            if (r) {
              const P = Ae(r, l.havingStyle(c.sub()), l);
              v = {
                elem: P,
                kern: Math.max(l.fontMetrics().bigOpSpacing2, l.fontMetrics().bigOpSpacing4 - P.height)
              };
            }
            let N;
            if (T && v) {
              const P = l.fontMetrics().bigOpSpacing5 + v.elem.height + v.elem.depth + v.kern + t.depth + g;
              N = L.makeVList({
                positionType: "bottom",
                positionData: P,
                children: [{
                  type: "kern",
                  size: l.fontMetrics().bigOpSpacing5
                }, {
                  type: "elem",
                  elem: v.elem,
                  marginLeft: Q(-m)
                }, {
                  type: "kern",
                  size: v.kern
                }, {
                  type: "elem",
                  elem: t
                }, {
                  type: "kern",
                  size: T.kern
                }, {
                  type: "elem",
                  elem: T.elem,
                  marginLeft: Q(m)
                }, {
                  type: "kern",
                  size: l.fontMetrics().bigOpSpacing5
                }]
              }, l);
            } else if (v) {
              const P = t.height - g;
              N = L.makeVList({
                positionType: "top",
                positionData: P,
                children: [{
                  type: "kern",
                  size: l.fontMetrics().bigOpSpacing5
                }, {
                  type: "elem",
                  elem: v.elem,
                  marginLeft: Q(-m)
                }, {
                  type: "kern",
                  size: v.kern
                }, {
                  type: "elem",
                  elem: t
                }]
              }, l);
            } else if (T) {
              const P = t.depth + g;
              N = L.makeVList({
                positionType: "bottom",
                positionData: P,
                children: [{
                  type: "elem",
                  elem: t
                }, {
                  type: "kern",
                  size: T.kern
                }, {
                  type: "elem",
                  elem: T.elem,
                  marginLeft: Q(m)
                }, {
                  type: "kern",
                  size: l.fontMetrics().bigOpSpacing5
                }]
              }, l);
            } else
              return t;
            const R = [N];
            if (v && m !== 0 && !_) {
              const P = L.makeSpan(["mspace"], [], l);
              P.style.marginRight = Q(m), R.unshift(P);
            }
            return L.makeSpan(["mop", "op-limits"], R, l);
          }, Yi = ["\\smallint"], en = (t, e) => {
            let r, l, c = !1, m;
            t.type === "supsub" ? (r = t.sup, l = t.sub, m = me(t.base, "op"), c = !0) : m = me(t, "op");
            const g = e.style;
            let _ = !1;
            g.size === V.DISPLAY.size && m.symbol && !U.contains(Yi, m.name) && (_ = !0);
            let v;
            if (m.symbol) {
              const R = _ ? "Size2-Regular" : "Size1-Regular";
              let P = "";
              if ((m.name === "\\oiint" || m.name === "\\oiiint") && (P = m.name.slice(1), m.name = P === "oiint" ? "\\iint" : "\\iiint"), v = L.makeSymbol(m.name, R, "math", e, ["mop", "op-symbol", _ ? "large-op" : "small-op"]), P.length > 0) {
                const Y = v.italic, se = L.staticSvg(P + "Size" + (_ ? "2" : "1"), e);
                v = L.makeVList({
                  positionType: "individualShift",
                  children: [{
                    type: "elem",
                    elem: v,
                    shift: 0
                  }, {
                    type: "elem",
                    elem: se,
                    shift: _ ? 0.08 : 0
                  }]
                }, e), m.name = "\\" + P, v.classes.unshift("mop"), v.italic = Y;
              }
            } else if (m.body) {
              const R = tt(m.body, e, !0);
              R.length === 1 && R[0] instanceof wt ? (v = R[0], v.classes[0] = "mop") : v = L.makeSpan(["mop"], R, e);
            } else {
              const R = [];
              for (let P = 1; P < m.name.length; P++)
                R.push(L.mathsym(m.name[P], m.mode, e));
              v = L.makeSpan(["mop"], R, e);
            }
            let T = 0, N = 0;
            return (v instanceof wt || m.name === "\\oiint" || m.name === "\\oiiint") && !m.suppressBaseShift && (T = (v.height - v.depth) / 2 - e.fontMetrics().axisHeight, N = v.italic), c ? Xi(v, r, l, e, g, N, T) : (T && (v.style.position = "relative", v.style.top = Q(T)), v);
          }, wn = (t, e) => {
            let r;
            if (t.symbol)
              r = new Ot("mo", [qt(t.name, t.mode)]), U.contains(Yi, t.name) && r.setAttribute("largeop", "false");
            else if (t.body)
              r = new Ot("mo", _t(t.body, e));
            else {
              r = new Ot("mi", [new pn(t.name.slice(1))]);
              const l = new Ot("mo", [qt("⁡", "text")]);
              t.parentIsSupSub ? r = new Ot("mrow", [r, l]) : r = hi([r, l]);
            }
            return r;
          }, Iu = {
            "∏": "\\prod",
            "∐": "\\coprod",
            "∑": "\\sum",
            "⋀": "\\bigwedge",
            "⋁": "\\bigvee",
            "⋂": "\\bigcap",
            "⋃": "\\bigcup",
            "⨀": "\\bigodot",
            "⨁": "\\bigoplus",
            "⨂": "\\bigotimes",
            "⨄": "\\biguplus",
            "⨆": "\\bigsqcup"
          };
          ee({
            type: "op",
            names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
            props: {
              numArgs: 0
            },
            handler: (t, e) => {
              let {
                parser: r,
                funcName: l
              } = t, c = l;
              return c.length === 1 && (c = Iu[c]), {
                type: "op",
                mode: r.mode,
                limits: !0,
                parentIsSupSub: !1,
                symbol: !0,
                name: c
              };
            },
            htmlBuilder: en,
            mathmlBuilder: wn
          }), ee({
            type: "op",
            names: ["\\mathop"],
            props: {
              numArgs: 1,
              primitive: !0
            },
            handler: (t, e) => {
              let {
                parser: r
              } = t;
              const l = e[0];
              return {
                type: "op",
                mode: r.mode,
                limits: !1,
                parentIsSupSub: !1,
                symbol: !1,
                body: Ze(l)
              };
            },
            htmlBuilder: en,
            mathmlBuilder: wn
          });
          const Lu = {
            "∫": "\\int",
            "∬": "\\iint",
            "∭": "\\iiint",
            "∮": "\\oint",
            "∯": "\\oiint",
            "∰": "\\oiiint"
          };
          ee({
            type: "op",
            names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
            props: {
              numArgs: 0
            },
            handler(t) {
              let {
                parser: e,
                funcName: r
              } = t;
              return {
                type: "op",
                mode: e.mode,
                limits: !1,
                parentIsSupSub: !1,
                symbol: !1,
                name: r
              };
            },
            htmlBuilder: en,
            mathmlBuilder: wn
          }), ee({
            type: "op",
            names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
            props: {
              numArgs: 0
            },
            handler(t) {
              let {
                parser: e,
                funcName: r
              } = t;
              return {
                type: "op",
                mode: e.mode,
                limits: !0,
                parentIsSupSub: !1,
                symbol: !1,
                name: r
              };
            },
            htmlBuilder: en,
            mathmlBuilder: wn
          }), ee({
            type: "op",
            names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
            props: {
              numArgs: 0
            },
            handler(t) {
              let {
                parser: e,
                funcName: r
              } = t, l = r;
              return l.length === 1 && (l = Lu[l]), {
                type: "op",
                mode: e.mode,
                limits: !1,
                parentIsSupSub: !1,
                symbol: !0,
                name: l
              };
            },
            htmlBuilder: en,
            mathmlBuilder: wn
          });
          const Zi = (t, e) => {
            let r, l, c = !1, m;
            t.type === "supsub" ? (r = t.sup, l = t.sub, m = me(t.base, "operatorname"), c = !0) : m = me(t, "operatorname");
            let g;
            if (m.body.length > 0) {
              const _ = m.body.map((T) => {
                const N = T.text;
                return typeof N == "string" ? {
                  type: "textord",
                  mode: T.mode,
                  text: N
                } : T;
              }), v = tt(_, e.withFont("mathrm"), !0);
              for (let T = 0; T < v.length; T++) {
                const N = v[T];
                N instanceof wt && (N.text = N.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
              }
              g = L.makeSpan(["mop"], v, e);
            } else
              g = L.makeSpan(["mop"], [], e);
            return c ? Xi(g, r, l, e, e.style, 0, 0) : g;
          };
          ee({
            type: "operatorname",
            names: ["\\operatorname@", "\\operatornamewithlimits"],
            props: {
              numArgs: 1
            },
            handler: (t, e) => {
              let {
                parser: r,
                funcName: l
              } = t;
              const c = e[0];
              return {
                type: "operatorname",
                mode: r.mode,
                body: Ze(c),
                alwaysHandleSupSub: l === "\\operatornamewithlimits",
                limits: !1,
                parentIsSupSub: !1
              };
            },
            htmlBuilder: Zi,
            mathmlBuilder: (t, e) => {
              let r = _t(t.body, e.withFont("mathrm")), l = !0;
              for (let g = 0; g < r.length; g++) {
                const _ = r[g];
                if (!(_ instanceof Z.SpaceNode))
                  if (_ instanceof Z.MathNode)
                    switch (_.type) {
                      case "mi":
                      case "mn":
                      case "ms":
                      case "mspace":
                      case "mtext":
                        break;
                      case "mo": {
                        const v = _.children[0];
                        _.children.length === 1 && v instanceof Z.TextNode ? v.text = v.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : l = !1;
                        break;
                      }
                      default:
                        l = !1;
                    }
                  else
                    l = !1;
              }
              if (l) {
                const g = r.map((_) => _.toText()).join("");
                r = [new Z.TextNode(g)];
              }
              const c = new Z.MathNode("mi", r);
              c.setAttribute("mathvariant", "normal");
              const m = new Z.MathNode("mo", [qt("⁡", "text")]);
              return t.parentIsSupSub ? new Z.MathNode("mrow", [c, m]) : Z.newDocumentFragment([c, m]);
            }
          }), k("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@"), U0({
            type: "ordgroup",
            htmlBuilder(t, e) {
              return t.semisimple ? L.makeFragment(tt(t.body, e, !1)) : L.makeSpan(["mord"], tt(t.body, e, !0), e);
            },
            mathmlBuilder(t, e) {
              return C0(t.body, e, !0);
            }
          }), ee({
            type: "overline",
            names: ["\\overline"],
            props: {
              numArgs: 1
            },
            handler(t, e) {
              let {
                parser: r
              } = t;
              const l = e[0];
              return {
                type: "overline",
                mode: r.mode,
                body: l
              };
            },
            htmlBuilder(t, e) {
              const r = Ae(t.body, e.havingCrampedStyle()), l = L.makeLineSpan("overline-line", e), c = e.fontMetrics().defaultRuleThickness, m = L.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: r
                }, {
                  type: "kern",
                  size: 3 * c
                }, {
                  type: "elem",
                  elem: l
                }, {
                  type: "kern",
                  size: c
                }]
              }, e);
              return L.makeSpan(["mord", "overline"], [m], e);
            },
            mathmlBuilder(t, e) {
              const r = new Z.MathNode("mo", [new Z.TextNode("‾")]);
              r.setAttribute("stretchy", "true");
              const l = new Z.MathNode("mover", [Le(t.body, e), r]);
              return l.setAttribute("accent", "true"), l;
            }
          }), ee({
            type: "phantom",
            names: ["\\phantom"],
            props: {
              numArgs: 1,
              allowedInText: !0
            },
            handler: (t, e) => {
              let {
                parser: r
              } = t;
              const l = e[0];
              return {
                type: "phantom",
                mode: r.mode,
                body: Ze(l)
              };
            },
            htmlBuilder: (t, e) => {
              const r = tt(t.body, e.withPhantom(), !1);
              return L.makeFragment(r);
            },
            mathmlBuilder: (t, e) => {
              const r = _t(t.body, e);
              return new Z.MathNode("mphantom", r);
            }
          }), ee({
            type: "hphantom",
            names: ["\\hphantom"],
            props: {
              numArgs: 1,
              allowedInText: !0
            },
            handler: (t, e) => {
              let {
                parser: r
              } = t;
              const l = e[0];
              return {
                type: "hphantom",
                mode: r.mode,
                body: l
              };
            },
            htmlBuilder: (t, e) => {
              let r = L.makeSpan([], [Ae(t.body, e.withPhantom())]);
              if (r.height = 0, r.depth = 0, r.children)
                for (let l = 0; l < r.children.length; l++)
                  r.children[l].height = 0, r.children[l].depth = 0;
              return r = L.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: r
                }]
              }, e), L.makeSpan(["mord"], [r], e);
            },
            mathmlBuilder: (t, e) => {
              const r = _t(Ze(t.body), e), l = new Z.MathNode("mphantom", r), c = new Z.MathNode("mpadded", [l]);
              return c.setAttribute("height", "0px"), c.setAttribute("depth", "0px"), c;
            }
          }), ee({
            type: "vphantom",
            names: ["\\vphantom"],
            props: {
              numArgs: 1,
              allowedInText: !0
            },
            handler: (t, e) => {
              let {
                parser: r
              } = t;
              const l = e[0];
              return {
                type: "vphantom",
                mode: r.mode,
                body: l
              };
            },
            htmlBuilder: (t, e) => {
              const r = L.makeSpan(["inner"], [Ae(t.body, e.withPhantom())]), l = L.makeSpan(["fix"], []);
              return L.makeSpan(["mord", "rlap"], [r, l], e);
            },
            mathmlBuilder: (t, e) => {
              const r = _t(Ze(t.body), e), l = new Z.MathNode("mphantom", r), c = new Z.MathNode("mpadded", [l]);
              return c.setAttribute("width", "0px"), c;
            }
          }), ee({
            type: "raisebox",
            names: ["\\raisebox"],
            props: {
              numArgs: 2,
              argTypes: ["size", "hbox"],
              allowedInText: !0
            },
            handler(t, e) {
              let {
                parser: r
              } = t;
              const l = me(e[0], "size").value, c = e[1];
              return {
                type: "raisebox",
                mode: r.mode,
                dy: l,
                body: c
              };
            },
            htmlBuilder(t, e) {
              const r = Ae(t.body, e), l = Ce(t.dy, e);
              return L.makeVList({
                positionType: "shift",
                positionData: -l,
                children: [{
                  type: "elem",
                  elem: r
                }]
              }, e);
            },
            mathmlBuilder(t, e) {
              const r = new Z.MathNode("mpadded", [Le(t.body, e)]), l = t.dy.number + t.dy.unit;
              return r.setAttribute("voffset", l), r;
            }
          }), ee({
            type: "internal",
            names: ["\\relax"],
            props: {
              numArgs: 0,
              allowedInText: !0
            },
            handler(t) {
              let {
                parser: e
              } = t;
              return {
                type: "internal",
                mode: e.mode
              };
            }
          }), ee({
            type: "rule",
            names: ["\\rule"],
            props: {
              numArgs: 2,
              numOptionalArgs: 1,
              argTypes: ["size", "size", "size"]
            },
            handler(t, e, r) {
              let {
                parser: l
              } = t;
              const c = r[0], m = me(e[0], "size"), g = me(e[1], "size");
              return {
                type: "rule",
                mode: l.mode,
                shift: c && me(c, "size").value,
                width: m.value,
                height: g.value
              };
            },
            htmlBuilder(t, e) {
              const r = L.makeSpan(["mord", "rule"], [], e), l = Ce(t.width, e), c = Ce(t.height, e), m = t.shift ? Ce(t.shift, e) : 0;
              return r.style.borderRightWidth = Q(l), r.style.borderTopWidth = Q(c), r.style.bottom = Q(m), r.width = l, r.height = c + m, r.depth = -m, r.maxFontSize = c * 1.125 * e.sizeMultiplier, r;
            },
            mathmlBuilder(t, e) {
              const r = Ce(t.width, e), l = Ce(t.height, e), c = t.shift ? Ce(t.shift, e) : 0, m = e.color && e.getColor() || "black", g = new Z.MathNode("mspace");
              g.setAttribute("mathbackground", m), g.setAttribute("width", Q(r)), g.setAttribute("height", Q(l));
              const _ = new Z.MathNode("mpadded", [g]);
              return c >= 0 ? _.setAttribute("height", Q(c)) : (_.setAttribute("height", Q(c)), _.setAttribute("depth", Q(-c))), _.setAttribute("voffset", Q(c)), _;
            }
          });
          function Ki(t, e, r) {
            const l = tt(t, e, !1), c = e.sizeMultiplier / r.sizeMultiplier;
            for (let m = 0; m < l.length; m++) {
              const g = l[m].classes.indexOf("sizing");
              g < 0 ? Array.prototype.push.apply(l[m].classes, e.sizingClasses(r)) : l[m].classes[g + 1] === "reset-size" + e.size && (l[m].classes[g + 1] = "reset-size" + r.size), l[m].height *= c, l[m].depth *= c;
            }
            return L.makeFragment(l);
          }
          const Qi = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
          ee({
            type: "sizing",
            names: Qi,
            props: {
              numArgs: 0,
              allowedInText: !0
            },
            handler: (t, e) => {
              let {
                breakOnTokenText: r,
                funcName: l,
                parser: c
              } = t;
              const m = c.parseExpression(!1, r);
              return {
                type: "sizing",
                mode: c.mode,
                // Figure out what size to use based on the list of functions above
                size: Qi.indexOf(l) + 1,
                body: m
              };
            },
            htmlBuilder: (t, e) => {
              const r = e.havingSize(t.size);
              return Ki(t.body, r, e);
            },
            mathmlBuilder: (t, e) => {
              const r = e.havingSize(t.size), l = _t(t.body, r), c = new Z.MathNode("mstyle", l);
              return c.setAttribute("mathsize", Q(r.sizeMultiplier)), c;
            }
          }), ee({
            type: "smash",
            names: ["\\smash"],
            props: {
              numArgs: 1,
              numOptionalArgs: 1,
              allowedInText: !0
            },
            handler: (t, e, r) => {
              let {
                parser: l
              } = t, c = !1, m = !1;
              const g = r[0] && me(r[0], "ordgroup");
              if (g) {
                let v = "";
                for (let T = 0; T < g.body.length; ++T)
                  if (v = g.body[T].text, v === "t")
                    c = !0;
                  else if (v === "b")
                    m = !0;
                  else {
                    c = !1, m = !1;
                    break;
                  }
              } else
                c = !0, m = !0;
              const _ = e[0];
              return {
                type: "smash",
                mode: l.mode,
                body: _,
                smashHeight: c,
                smashDepth: m
              };
            },
            htmlBuilder: (t, e) => {
              const r = L.makeSpan([], [Ae(t.body, e)]);
              if (!t.smashHeight && !t.smashDepth)
                return r;
              if (t.smashHeight && (r.height = 0, r.children))
                for (let c = 0; c < r.children.length; c++)
                  r.children[c].height = 0;
              if (t.smashDepth && (r.depth = 0, r.children))
                for (let c = 0; c < r.children.length; c++)
                  r.children[c].depth = 0;
              const l = L.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: r
                }]
              }, e);
              return L.makeSpan(["mord"], [l], e);
            },
            mathmlBuilder: (t, e) => {
              const r = new Z.MathNode("mpadded", [Le(t.body, e)]);
              return t.smashHeight && r.setAttribute("height", "0px"), t.smashDepth && r.setAttribute("depth", "0px"), r;
            }
          }), ee({
            type: "sqrt",
            names: ["\\sqrt"],
            props: {
              numArgs: 1,
              numOptionalArgs: 1
            },
            handler(t, e, r) {
              let {
                parser: l
              } = t;
              const c = r[0], m = e[0];
              return {
                type: "sqrt",
                mode: l.mode,
                body: m,
                index: c
              };
            },
            htmlBuilder(t, e) {
              let r = Ae(t.body, e.havingCrampedStyle());
              r.height === 0 && (r.height = e.fontMetrics().xHeight), r = L.wrapFragment(r, e);
              const c = e.fontMetrics().defaultRuleThickness;
              let m = c;
              e.style.id < V.TEXT.id && (m = e.fontMetrics().xHeight);
              let g = c + m / 4;
              const _ = r.height + r.depth + g + c, {
                span: v,
                ruleWidth: T,
                advanceWidth: N
              } = D0.sqrtImage(_, e), R = v.height - T;
              R > r.height + r.depth + g && (g = (g + R - r.height - r.depth) / 2);
              const P = v.height - r.height - g - T;
              r.style.paddingLeft = Q(N);
              const Y = L.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: r,
                  wrapperClasses: ["svg-align"]
                }, {
                  type: "kern",
                  size: -(r.height + P)
                }, {
                  type: "elem",
                  elem: v
                }, {
                  type: "kern",
                  size: T
                }]
              }, e);
              if (t.index) {
                const se = e.havingStyle(V.SCRIPTSCRIPT), ae = Ae(t.index, se, e), ke = 0.6 * (Y.height - Y.depth), ge = L.makeVList({
                  positionType: "shift",
                  positionData: -ke,
                  children: [{
                    type: "elem",
                    elem: ae
                  }]
                }, e), xe = L.makeSpan(["root"], [ge]);
                return L.makeSpan(["mord", "sqrt"], [xe, Y], e);
              } else
                return L.makeSpan(["mord", "sqrt"], [Y], e);
            },
            mathmlBuilder(t, e) {
              const {
                body: r,
                index: l
              } = t;
              return l ? new Z.MathNode("mroot", [Le(r, e), Le(l, e)]) : new Z.MathNode("msqrt", [Le(r, e)]);
            }
          });
          const Ji = {
            display: V.DISPLAY,
            text: V.TEXT,
            script: V.SCRIPT,
            scriptscript: V.SCRIPTSCRIPT
          };
          ee({
            type: "styling",
            names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
            props: {
              numArgs: 0,
              allowedInText: !0,
              primitive: !0
            },
            handler(t, e) {
              let {
                breakOnTokenText: r,
                funcName: l,
                parser: c
              } = t;
              const m = c.parseExpression(!0, r), g = l.slice(1, l.length - 5);
              return {
                type: "styling",
                mode: c.mode,
                // Figure out what style to use by pulling out the style from
                // the function name
                style: g,
                body: m
              };
            },
            htmlBuilder(t, e) {
              const r = Ji[t.style], l = e.havingStyle(r).withFont("");
              return Ki(t.body, l, e);
            },
            mathmlBuilder(t, e) {
              const r = Ji[t.style], l = e.havingStyle(r), c = _t(t.body, l), m = new Z.MathNode("mstyle", c), _ = {
                display: ["0", "true"],
                text: ["0", "false"],
                script: ["1", "false"],
                scriptscript: ["2", "false"]
              }[t.style];
              return m.setAttribute("scriptlevel", _[0]), m.setAttribute("displaystyle", _[1]), m;
            }
          });
          const Ou = function(t, e) {
            const r = t.base;
            return r ? r.type === "op" ? r.limits && (e.style.size === V.DISPLAY.size || r.alwaysHandleSupSub) ? en : null : r.type === "operatorname" ? r.alwaysHandleSupSub && (e.style.size === V.DISPLAY.size || r.limits) ? Zi : null : r.type === "accent" ? U.isCharacterBox(r.base) ? Gr : null : r.type === "horizBrace" && !t.sub === r.isOver ? Wi : null : null;
          };
          U0({
            type: "supsub",
            htmlBuilder(t, e) {
              const r = Ou(t, e);
              if (r)
                return r(t, e);
              const {
                base: l,
                sup: c,
                sub: m
              } = t, g = Ae(l, e);
              let _, v;
              const T = e.fontMetrics();
              let N = 0, R = 0;
              const P = l && U.isCharacterBox(l);
              if (c) {
                const Te = e.havingStyle(e.style.sup());
                _ = Ae(c, Te, e), P || (N = g.height - Te.fontMetrics().supDrop * Te.sizeMultiplier / e.sizeMultiplier);
              }
              if (m) {
                const Te = e.havingStyle(e.style.sub());
                v = Ae(m, Te, e), P || (R = g.depth + Te.fontMetrics().subDrop * Te.sizeMultiplier / e.sizeMultiplier);
              }
              let Y;
              e.style === V.DISPLAY ? Y = T.sup1 : e.style.cramped ? Y = T.sup3 : Y = T.sup2;
              const se = e.sizeMultiplier, ae = Q(0.5 / T.ptPerEm / se);
              let ke = null;
              if (v) {
                const Te = t.base && t.base.type === "op" && t.base.name && (t.base.name === "\\oiint" || t.base.name === "\\oiiint");
                (g instanceof wt || Te) && (ke = Q(-g.italic));
              }
              let ge;
              if (_ && v) {
                N = Math.max(N, Y, _.depth + 0.25 * T.xHeight), R = Math.max(R, T.sub2);
                const qe = 4 * T.defaultRuleThickness;
                if (N - _.depth - (v.height - R) < qe) {
                  R = qe - (N - _.depth) + v.height;
                  const nt = 0.8 * T.xHeight - (N - _.depth);
                  nt > 0 && (N += nt, R -= nt);
                }
                const ht = [{
                  type: "elem",
                  elem: v,
                  shift: R,
                  marginRight: ae,
                  marginLeft: ke
                }, {
                  type: "elem",
                  elem: _,
                  shift: -N,
                  marginRight: ae
                }];
                ge = L.makeVList({
                  positionType: "individualShift",
                  children: ht
                }, e);
              } else if (v) {
                R = Math.max(R, T.sub1, v.height - 0.8 * T.xHeight);
                const Te = [{
                  type: "elem",
                  elem: v,
                  marginLeft: ke,
                  marginRight: ae
                }];
                ge = L.makeVList({
                  positionType: "shift",
                  positionData: R,
                  children: Te
                }, e);
              } else if (_)
                N = Math.max(N, Y, _.depth + 0.25 * T.xHeight), ge = L.makeVList({
                  positionType: "shift",
                  positionData: -N,
                  children: [{
                    type: "elem",
                    elem: _,
                    marginRight: ae
                  }]
                }, e);
              else
                throw new Error("supsub must have either sup or sub.");
              const xe = Or(g, "right") || "mord";
              return L.makeSpan([xe], [g, L.makeSpan(["msupsub"], [ge])], e);
            },
            mathmlBuilder(t, e) {
              let r = !1, l, c;
              t.base && t.base.type === "horizBrace" && (c = !!t.sup, c === t.base.isOver && (r = !0, l = t.base.isOver)), t.base && (t.base.type === "op" || t.base.type === "operatorname") && (t.base.parentIsSupSub = !0);
              const m = [Le(t.base, e)];
              t.sub && m.push(Le(t.sub, e)), t.sup && m.push(Le(t.sup, e));
              let g;
              if (r)
                g = l ? "mover" : "munder";
              else if (t.sub)
                if (t.sup) {
                  const _ = t.base;
                  _ && _.type === "op" && _.limits && e.style === V.DISPLAY || _ && _.type === "operatorname" && _.alwaysHandleSupSub && (e.style === V.DISPLAY || _.limits) ? g = "munderover" : g = "msubsup";
                } else {
                  const _ = t.base;
                  _ && _.type === "op" && _.limits && (e.style === V.DISPLAY || _.alwaysHandleSupSub) || _ && _.type === "operatorname" && _.alwaysHandleSupSub && (_.limits || e.style === V.DISPLAY) ? g = "munder" : g = "msub";
                }
              else {
                const _ = t.base;
                _ && _.type === "op" && _.limits && (e.style === V.DISPLAY || _.alwaysHandleSupSub) || _ && _.type === "operatorname" && _.alwaysHandleSupSub && (_.limits || e.style === V.DISPLAY) ? g = "mover" : g = "msup";
              }
              return new Z.MathNode(g, m);
            }
          }), U0({
            type: "atom",
            htmlBuilder(t, e) {
              return L.mathsym(t.text, t.mode, e, ["m" + t.family]);
            },
            mathmlBuilder(t, e) {
              const r = new Z.MathNode("mo", [qt(t.text, t.mode)]);
              if (t.family === "bin") {
                const l = Hr(t, e);
                l === "bold-italic" && r.setAttribute("mathvariant", l);
              } else
                t.family === "punct" ? r.setAttribute("separator", "true") : (t.family === "open" || t.family === "close") && r.setAttribute("stretchy", "false");
              return r;
            }
          });
          const $i = {
            mi: "italic",
            mn: "normal",
            mtext: "normal"
          };
          U0({
            type: "mathord",
            htmlBuilder(t, e) {
              return L.makeOrd(t, e, "mathord");
            },
            mathmlBuilder(t, e) {
              const r = new Z.MathNode("mi", [qt(t.text, t.mode, e)]), l = Hr(t, e) || "italic";
              return l !== $i[r.type] && r.setAttribute("mathvariant", l), r;
            }
          }), U0({
            type: "textord",
            htmlBuilder(t, e) {
              return L.makeOrd(t, e, "textord");
            },
            mathmlBuilder(t, e) {
              const r = qt(t.text, t.mode, e), l = Hr(t, e) || "normal";
              let c;
              return t.mode === "text" ? c = new Z.MathNode("mtext", [r]) : /[0-9]/.test(t.text) ? c = new Z.MathNode("mn", [r]) : t.text === "\\prime" ? c = new Z.MathNode("mo", [r]) : c = new Z.MathNode("mi", [r]), l !== $i[c.type] && c.setAttribute("mathvariant", l), c;
            }
          });
          const is = {
            "\\nobreak": "nobreak",
            "\\allowbreak": "allowbreak"
          }, ls = {
            " ": {},
            "\\ ": {},
            "~": {
              className: "nobreak"
            },
            "\\space": {},
            "\\nobreakspace": {
              className: "nobreak"
            }
          };
          U0({
            type: "spacing",
            htmlBuilder(t, e) {
              if (ls.hasOwnProperty(t.text)) {
                const r = ls[t.text].className || "";
                if (t.mode === "text") {
                  const l = L.makeOrd(t, e, "textord");
                  return l.classes.push(r), l;
                } else
                  return L.makeSpan(["mspace", r], [L.mathsym(t.text, t.mode, e)], e);
              } else {
                if (is.hasOwnProperty(t.text))
                  return L.makeSpan(["mspace", is[t.text]], [], e);
                throw new o('Unknown type of space "' + t.text + '"');
              }
            },
            mathmlBuilder(t, e) {
              let r;
              if (ls.hasOwnProperty(t.text))
                r = new Z.MathNode("mtext", [new Z.TextNode(" ")]);
              else {
                if (is.hasOwnProperty(t.text))
                  return new Z.MathNode("mspace");
                throw new o('Unknown type of space "' + t.text + '"');
              }
              return r;
            }
          });
          const el = () => {
            const t = new Z.MathNode("mtd", []);
            return t.setAttribute("width", "50%"), t;
          };
          U0({
            type: "tag",
            mathmlBuilder(t, e) {
              const r = new Z.MathNode("mtable", [new Z.MathNode("mtr", [el(), new Z.MathNode("mtd", [C0(t.body, e)]), el(), new Z.MathNode("mtd", [C0(t.tag, e)])])]);
              return r.setAttribute("width", "100%"), r;
            }
          });
          const tl = {
            "\\text": void 0,
            "\\textrm": "textrm",
            "\\textsf": "textsf",
            "\\texttt": "texttt",
            "\\textnormal": "textrm"
          }, nl = {
            "\\textbf": "textbf",
            "\\textmd": "textmd"
          }, qu = {
            "\\textit": "textit",
            "\\textup": "textup"
          }, rl = (t, e) => {
            const r = t.font;
            return r ? tl[r] ? e.withTextFontFamily(tl[r]) : nl[r] ? e.withTextFontWeight(nl[r]) : e.withTextFontShape(qu[r]) : e;
          };
          ee({
            type: "text",
            names: [
              // Font families
              "\\text",
              "\\textrm",
              "\\textsf",
              "\\texttt",
              "\\textnormal",
              // Font weights
              "\\textbf",
              "\\textmd",
              // Font Shapes
              "\\textit",
              "\\textup"
            ],
            props: {
              numArgs: 1,
              argTypes: ["text"],
              allowedInArgument: !0,
              allowedInText: !0
            },
            handler(t, e) {
              let {
                parser: r,
                funcName: l
              } = t;
              const c = e[0];
              return {
                type: "text",
                mode: r.mode,
                body: Ze(c),
                font: l
              };
            },
            htmlBuilder(t, e) {
              const r = rl(t, e), l = tt(t.body, r, !0);
              return L.makeSpan(["mord", "text"], l, r);
            },
            mathmlBuilder(t, e) {
              const r = rl(t, e);
              return C0(t.body, r);
            }
          }), ee({
            type: "underline",
            names: ["\\underline"],
            props: {
              numArgs: 1,
              allowedInText: !0
            },
            handler(t, e) {
              let {
                parser: r
              } = t;
              return {
                type: "underline",
                mode: r.mode,
                body: e[0]
              };
            },
            htmlBuilder(t, e) {
              const r = Ae(t.body, e), l = L.makeLineSpan("underline-line", e), c = e.fontMetrics().defaultRuleThickness, m = L.makeVList({
                positionType: "top",
                positionData: r.height,
                children: [{
                  type: "kern",
                  size: c
                }, {
                  type: "elem",
                  elem: l
                }, {
                  type: "kern",
                  size: 3 * c
                }, {
                  type: "elem",
                  elem: r
                }]
              }, e);
              return L.makeSpan(["mord", "underline"], [m], e);
            },
            mathmlBuilder(t, e) {
              const r = new Z.MathNode("mo", [new Z.TextNode("‾")]);
              r.setAttribute("stretchy", "true");
              const l = new Z.MathNode("munder", [Le(t.body, e), r]);
              return l.setAttribute("accentunder", "true"), l;
            }
          }), ee({
            type: "vcenter",
            names: ["\\vcenter"],
            props: {
              numArgs: 1,
              argTypes: ["original"],
              // In LaTeX, \vcenter can act only on a box.
              allowedInText: !1
            },
            handler(t, e) {
              let {
                parser: r
              } = t;
              return {
                type: "vcenter",
                mode: r.mode,
                body: e[0]
              };
            },
            htmlBuilder(t, e) {
              const r = Ae(t.body, e), l = e.fontMetrics().axisHeight, c = 0.5 * (r.height - l - (r.depth + l));
              return L.makeVList({
                positionType: "shift",
                positionData: c,
                children: [{
                  type: "elem",
                  elem: r
                }]
              }, e);
            },
            mathmlBuilder(t, e) {
              return new Z.MathNode("mpadded", [Le(t.body, e)], ["vcenter"]);
            }
          }), ee({
            type: "verb",
            names: ["\\verb"],
            props: {
              numArgs: 0,
              allowedInText: !0
            },
            handler(t, e, r) {
              throw new o("\\verb ended by end of line instead of matching delimiter");
            },
            htmlBuilder(t, e) {
              const r = sl(t), l = [], c = e.havingStyle(e.style.text());
              for (let m = 0; m < r.length; m++) {
                let g = r[m];
                g === "~" && (g = "\\textasciitilde"), l.push(L.makeSymbol(g, "Typewriter-Regular", t.mode, c, ["mord", "texttt"]));
              }
              return L.makeSpan(["mord", "text"].concat(c.sizingClasses(e)), L.tryCombineChars(l), c);
            },
            mathmlBuilder(t, e) {
              const r = new Z.TextNode(sl(t)), l = new Z.MathNode("mtext", [r]);
              return l.setAttribute("mathvariant", "monospace"), l;
            }
          });
          const sl = (t) => t.body.replace(/ /g, t.star ? "␣" : " ");
          var z0 = ui;
          const il = `[ \r
	]`, Pu = "\\\\[a-zA-Z@]+", Hu = "\\\\[^\uD800-\uDFFF]", Uu = "(" + Pu + ")" + il + "*", Gu = `\\\\(
|[ \r	]+
?)[ \r	]*`, as = "[̀-ͯ]", Vu = new RegExp(as + "+$"), Wu = "(" + il + "+)|" + // whitespace
          (Gu + "|") + // \whitespace
          "([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
          (as + "*") + // ...plus accents
          "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
          (as + "*") + // ...plus accents
          "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
          ("|" + Uu) + // \macroName + spaces
          ("|" + Hu + ")");
          class ll {
            // Category codes. The lexer only supports comment characters (14) for now.
            // MacroExpander additionally distinguishes active (13).
            constructor(e, r) {
              this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = r, this.tokenRegex = new RegExp(Wu, "g"), this.catcodes = {
                "%": 14,
                // comment character
                "~": 13
                // active character
              };
            }
            setCatcode(e, r) {
              this.catcodes[e] = r;
            }
            /**
             * This function lexes a single token.
             */
            lex() {
              const e = this.input, r = this.tokenRegex.lastIndex;
              if (r === e.length)
                return new Pt("EOF", new Et(this, r, r));
              const l = this.tokenRegex.exec(e);
              if (l === null || l.index !== r)
                throw new o("Unexpected character: '" + e[r] + "'", new Pt(e[r], new Et(this, r, r + 1)));
              const c = l[6] || l[3] || (l[2] ? "\\ " : " ");
              if (this.catcodes[c] === 14) {
                const m = e.indexOf(`
`, this.tokenRegex.lastIndex);
                return m === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = m + 1, this.lex();
              }
              return new Pt(c, new Et(this, r, this.tokenRegex.lastIndex));
            }
          }
          class ju {
            /**
             * Both arguments are optional.  The first argument is an object of
             * built-in mappings which never change.  The second argument is an object
             * of initial (global-level) mappings, which will constantly change
             * according to any global/top-level `set`s done.
             */
            constructor(e, r) {
              e === void 0 && (e = {}), r === void 0 && (r = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = r, this.builtins = e, this.undefStack = [];
            }
            /**
             * Start a new nested group, affecting future local `set`s.
             */
            beginGroup() {
              this.undefStack.push({});
            }
            /**
             * End current nested group, restoring values before the group began.
             */
            endGroup() {
              if (this.undefStack.length === 0)
                throw new o("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
              const e = this.undefStack.pop();
              for (const r in e)
                e.hasOwnProperty(r) && (e[r] == null ? delete this.current[r] : this.current[r] = e[r]);
            }
            /**
             * Ends all currently nested groups (if any), restoring values before the
             * groups began.  Useful in case of an error in the middle of parsing.
             */
            endGroups() {
              for (; this.undefStack.length > 0; )
                this.endGroup();
            }
            /**
             * Detect whether `name` has a definition.  Equivalent to
             * `get(name) != null`.
             */
            has(e) {
              return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
            }
            /**
             * Get the current value of a name, or `undefined` if there is no value.
             *
             * Note: Do not use `if (namespace.get(...))` to detect whether a macro
             * is defined, as the definition may be the empty string which evaluates
             * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
             * `if (namespace.has(...))`.
             */
            get(e) {
              return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
            }
            /**
             * Set the current value of a name, and optionally set it globally too.
             * Local set() sets the current value and (when appropriate) adds an undo
             * operation to the undo stack.  Global set() may change the undo
             * operation at every level, so takes time linear in their number.
             * A value of undefined means to delete existing definitions.
             */
            set(e, r, l) {
              if (l === void 0 && (l = !1), l) {
                for (let c = 0; c < this.undefStack.length; c++)
                  delete this.undefStack[c][e];
                this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = r);
              } else {
                const c = this.undefStack[this.undefStack.length - 1];
                c && !c.hasOwnProperty(e) && (c[e] = this.current[e]);
              }
              r == null ? delete this.current[e] : this.current[e] = r;
            }
          }
          var Xu = Ri;
          k("\\noexpand", function(t) {
            const e = t.popToken();
            return t.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
              tokens: [e],
              numArgs: 0
            };
          }), k("\\expandafter", function(t) {
            const e = t.popToken();
            return t.expandOnce(!0), {
              tokens: [e],
              numArgs: 0
            };
          }), k("\\@firstoftwo", function(t) {
            return {
              tokens: t.consumeArgs(2)[0],
              numArgs: 0
            };
          }), k("\\@secondoftwo", function(t) {
            return {
              tokens: t.consumeArgs(2)[1],
              numArgs: 0
            };
          }), k("\\@ifnextchar", function(t) {
            const e = t.consumeArgs(3);
            t.consumeSpaces();
            const r = t.future();
            return e[0].length === 1 && e[0][0].text === r.text ? {
              tokens: e[1],
              numArgs: 0
            } : {
              tokens: e[2],
              numArgs: 0
            };
          }), k("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), k("\\TextOrMath", function(t) {
            const e = t.consumeArgs(2);
            return t.mode === "text" ? {
              tokens: e[0],
              numArgs: 0
            } : {
              tokens: e[1],
              numArgs: 0
            };
          });
          const al = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            a: 10,
            A: 10,
            b: 11,
            B: 11,
            c: 12,
            C: 12,
            d: 13,
            D: 13,
            e: 14,
            E: 14,
            f: 15,
            F: 15
          };
          k("\\char", function(t) {
            let e = t.popToken(), r, l = "";
            if (e.text === "'")
              r = 8, e = t.popToken();
            else if (e.text === '"')
              r = 16, e = t.popToken();
            else if (e.text === "`")
              if (e = t.popToken(), e.text[0] === "\\")
                l = e.text.charCodeAt(1);
              else {
                if (e.text === "EOF")
                  throw new o("\\char` missing argument");
                l = e.text.charCodeAt(0);
              }
            else
              r = 10;
            if (r) {
              if (l = al[e.text], l == null || l >= r)
                throw new o("Invalid base-" + r + " digit " + e.text);
              let c;
              for (; (c = al[t.future().text]) != null && c < r; )
                l *= r, l += c, t.popToken();
            }
            return "\\@char{" + l + "}";
          });
          const os = (t, e, r) => {
            let l = t.consumeArg().tokens;
            if (l.length !== 1)
              throw new o("\\newcommand's first argument must be a macro name");
            const c = l[0].text, m = t.isDefined(c);
            if (m && !e)
              throw new o("\\newcommand{" + c + "} attempting to redefine " + (c + "; use \\renewcommand"));
            if (!m && !r)
              throw new o("\\renewcommand{" + c + "} when command " + c + " does not yet exist; use \\newcommand");
            let g = 0;
            if (l = t.consumeArg().tokens, l.length === 1 && l[0].text === "[") {
              let _ = "", v = t.expandNextToken();
              for (; v.text !== "]" && v.text !== "EOF"; )
                _ += v.text, v = t.expandNextToken();
              if (!_.match(/^\s*[0-9]+\s*$/))
                throw new o("Invalid number of arguments: " + _);
              g = parseInt(_), l = t.consumeArg().tokens;
            }
            return t.macros.set(c, {
              tokens: l,
              numArgs: g
            }), "";
          };
          k("\\newcommand", (t) => os(t, !1, !0)), k("\\renewcommand", (t) => os(t, !0, !1)), k("\\providecommand", (t) => os(t, !0, !0)), k("\\message", (t) => {
            const e = t.consumeArgs(1)[0];
            return console.log(e.reverse().map((r) => r.text).join("")), "";
          }), k("\\errmessage", (t) => {
            const e = t.consumeArgs(1)[0];
            return console.error(e.reverse().map((r) => r.text).join("")), "";
          }), k("\\show", (t) => {
            const e = t.popToken(), r = e.text;
            return console.log(e, t.macros.get(r), z0[r], ye.math[r], ye.text[r]), "";
          }), k("\\bgroup", "{"), k("\\egroup", "}"), k("~", "\\nobreakspace"), k("\\lq", "`"), k("\\rq", "'"), k("\\aa", "\\r a"), k("\\AA", "\\r A"), k("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}"), k("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"), k("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"), k("ℬ", "\\mathscr{B}"), k("ℰ", "\\mathscr{E}"), k("ℱ", "\\mathscr{F}"), k("ℋ", "\\mathscr{H}"), k("ℐ", "\\mathscr{I}"), k("ℒ", "\\mathscr{L}"), k("ℳ", "\\mathscr{M}"), k("ℛ", "\\mathscr{R}"), k("ℭ", "\\mathfrak{C}"), k("ℌ", "\\mathfrak{H}"), k("ℨ", "\\mathfrak{Z}"), k("\\Bbbk", "\\Bbb{k}"), k("·", "\\cdotp"), k("\\llap", "\\mathllap{\\textrm{#1}}"), k("\\rlap", "\\mathrlap{\\textrm{#1}}"), k("\\clap", "\\mathclap{\\textrm{#1}}"), k("\\mathstrut", "\\vphantom{(}"), k("\\underbar", "\\underline{\\text{#1}}"), k("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}'), k("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"), k("\\ne", "\\neq"), k("≠", "\\neq"), k("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"), k("∉", "\\notin"), k("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"), k("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"), k("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"), k("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"), k("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"), k("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"), k("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"), k("⟂", "\\perp"), k("‼", "\\mathclose{!\\mkern-0.8mu!}"), k("∌", "\\notni"), k("⌜", "\\ulcorner"), k("⌝", "\\urcorner"), k("⌞", "\\llcorner"), k("⌟", "\\lrcorner"), k("©", "\\copyright"), k("®", "\\textregistered"), k("️", "\\textregistered"), k("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'), k("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'), k("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'), k("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'), k("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"), k("⋮", "\\vdots"), k("\\varGamma", "\\mathit{\\Gamma}"), k("\\varDelta", "\\mathit{\\Delta}"), k("\\varTheta", "\\mathit{\\Theta}"), k("\\varLambda", "\\mathit{\\Lambda}"), k("\\varXi", "\\mathit{\\Xi}"), k("\\varPi", "\\mathit{\\Pi}"), k("\\varSigma", "\\mathit{\\Sigma}"), k("\\varUpsilon", "\\mathit{\\Upsilon}"), k("\\varPhi", "\\mathit{\\Phi}"), k("\\varPsi", "\\mathit{\\Psi}"), k("\\varOmega", "\\mathit{\\Omega}"), k("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"), k("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax"), k("\\boxed", "\\fbox{$\\displaystyle{#1}$}"), k("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), k("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), k("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
          const ol = {
            ",": "\\dotsc",
            "\\not": "\\dotsb",
            // \keybin@ checks for the following:
            "+": "\\dotsb",
            "=": "\\dotsb",
            "<": "\\dotsb",
            ">": "\\dotsb",
            "-": "\\dotsb",
            "*": "\\dotsb",
            ":": "\\dotsb",
            // Symbols whose definition starts with \DOTSB:
            "\\DOTSB": "\\dotsb",
            "\\coprod": "\\dotsb",
            "\\bigvee": "\\dotsb",
            "\\bigwedge": "\\dotsb",
            "\\biguplus": "\\dotsb",
            "\\bigcap": "\\dotsb",
            "\\bigcup": "\\dotsb",
            "\\prod": "\\dotsb",
            "\\sum": "\\dotsb",
            "\\bigotimes": "\\dotsb",
            "\\bigoplus": "\\dotsb",
            "\\bigodot": "\\dotsb",
            "\\bigsqcup": "\\dotsb",
            "\\And": "\\dotsb",
            "\\longrightarrow": "\\dotsb",
            "\\Longrightarrow": "\\dotsb",
            "\\longleftarrow": "\\dotsb",
            "\\Longleftarrow": "\\dotsb",
            "\\longleftrightarrow": "\\dotsb",
            "\\Longleftrightarrow": "\\dotsb",
            "\\mapsto": "\\dotsb",
            "\\longmapsto": "\\dotsb",
            "\\hookrightarrow": "\\dotsb",
            "\\doteq": "\\dotsb",
            // Symbols whose definition starts with \mathbin:
            "\\mathbin": "\\dotsb",
            // Symbols whose definition starts with \mathrel:
            "\\mathrel": "\\dotsb",
            "\\relbar": "\\dotsb",
            "\\Relbar": "\\dotsb",
            "\\xrightarrow": "\\dotsb",
            "\\xleftarrow": "\\dotsb",
            // Symbols whose definition starts with \DOTSI:
            "\\DOTSI": "\\dotsi",
            "\\int": "\\dotsi",
            "\\oint": "\\dotsi",
            "\\iint": "\\dotsi",
            "\\iiint": "\\dotsi",
            "\\iiiint": "\\dotsi",
            "\\idotsint": "\\dotsi",
            // Symbols whose definition starts with \DOTSX:
            "\\DOTSX": "\\dotsx"
          };
          k("\\dots", function(t) {
            let e = "\\dotso";
            const r = t.expandAfterFuture().text;
            return r in ol ? e = ol[r] : (r.slice(0, 4) === "\\not" || r in ye.math && U.contains(["bin", "rel"], ye.math[r].group)) && (e = "\\dotsb"), e;
          });
          const us = {
            // \rightdelim@ checks for the following:
            ")": !0,
            "]": !0,
            "\\rbrack": !0,
            "\\}": !0,
            "\\rbrace": !0,
            "\\rangle": !0,
            "\\rceil": !0,
            "\\rfloor": !0,
            "\\rgroup": !0,
            "\\rmoustache": !0,
            "\\right": !0,
            "\\bigr": !0,
            "\\biggr": !0,
            "\\Bigr": !0,
            "\\Biggr": !0,
            // \extra@ also tests for the following:
            $: !0,
            // \extrap@ checks for the following:
            ";": !0,
            ".": !0,
            ",": !0
          };
          k("\\dotso", function(t) {
            return t.future().text in us ? "\\ldots\\," : "\\ldots";
          }), k("\\dotsc", function(t) {
            const e = t.future().text;
            return e in us && e !== "," ? "\\ldots\\," : "\\ldots";
          }), k("\\cdots", function(t) {
            return t.future().text in us ? "\\@cdots\\," : "\\@cdots";
          }), k("\\dotsb", "\\cdots"), k("\\dotsm", "\\cdots"), k("\\dotsi", "\\!\\cdots"), k("\\dotsx", "\\ldots\\,"), k("\\DOTSI", "\\relax"), k("\\DOTSB", "\\relax"), k("\\DOTSX", "\\relax"), k("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"), k("\\,", "\\tmspace+{3mu}{.1667em}"), k("\\thinspace", "\\,"), k("\\>", "\\mskip{4mu}"), k("\\:", "\\tmspace+{4mu}{.2222em}"), k("\\medspace", "\\:"), k("\\;", "\\tmspace+{5mu}{.2777em}"), k("\\thickspace", "\\;"), k("\\!", "\\tmspace-{3mu}{.1667em}"), k("\\negthinspace", "\\!"), k("\\negmedspace", "\\tmspace-{4mu}{.2222em}"), k("\\negthickspace", "\\tmspace-{5mu}{.277em}"), k("\\enspace", "\\kern.5em "), k("\\enskip", "\\hskip.5em\\relax"), k("\\quad", "\\hskip1em\\relax"), k("\\qquad", "\\hskip2em\\relax"), k("\\tag", "\\@ifstar\\tag@literal\\tag@paren"), k("\\tag@paren", "\\tag@literal{({#1})}"), k("\\tag@literal", (t) => {
            if (t.macros.get("\\df@tag"))
              throw new o("Multiple \\tag");
            return "\\gdef\\df@tag{\\text{#1}}";
          }), k("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"), k("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"), k("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"), k("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"), k("\\newline", "\\\\\\relax"), k("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
          const ul = Q(At["Main-Regular"][84][1] - 0.7 * At["Main-Regular"][65][1]);
          k("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + ul + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}"), k("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + ul + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}"), k("\\hspace", "\\@ifstar\\@hspacer\\@hspace"), k("\\@hspace", "\\hskip #1\\relax"), k("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"), k("\\ordinarycolon", ":"), k("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), k("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'), k("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'), k("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'), k("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'), k("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'), k("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'), k("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'), k("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'), k("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'), k("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'), k("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'), k("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'), k("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'), k("∷", "\\dblcolon"), k("∹", "\\eqcolon"), k("≔", "\\coloneqq"), k("≕", "\\eqqcolon"), k("⩴", "\\Coloneqq"), k("\\ratio", "\\vcentcolon"), k("\\coloncolon", "\\dblcolon"), k("\\colonequals", "\\coloneqq"), k("\\coloncolonequals", "\\Coloneqq"), k("\\equalscolon", "\\eqqcolon"), k("\\equalscoloncolon", "\\Eqqcolon"), k("\\colonminus", "\\coloneq"), k("\\coloncolonminus", "\\Coloneq"), k("\\minuscolon", "\\eqcolon"), k("\\minuscoloncolon", "\\Eqcolon"), k("\\coloncolonapprox", "\\Colonapprox"), k("\\coloncolonsim", "\\Colonsim"), k("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), k("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"), k("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), k("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"), k("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"), k("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"), k("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"), k("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}"), k("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}"), k("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}"), k("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}"), k("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}"), k("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}"), k("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}"), k("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}"), k("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}"), k("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}"), k("\\nleqq", "\\html@mathml{\\@nleqq}{≰}"), k("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}"), k("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}"), k("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}"), k("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}"), k("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}"), k("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}"), k("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}"), k("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}"), k("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}"), k("\\imath", "\\html@mathml{\\@imath}{ı}"), k("\\jmath", "\\html@mathml{\\@jmath}{ȷ}"), k("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"), k("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"), k("⟦", "\\llbracket"), k("⟧", "\\rrbracket"), k("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"), k("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"), k("⦃", "\\lBrace"), k("⦄", "\\rBrace"), k("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"), k("⦵", "\\minuso"), k("\\darr", "\\downarrow"), k("\\dArr", "\\Downarrow"), k("\\Darr", "\\Downarrow"), k("\\lang", "\\langle"), k("\\rang", "\\rangle"), k("\\uarr", "\\uparrow"), k("\\uArr", "\\Uparrow"), k("\\Uarr", "\\Uparrow"), k("\\N", "\\mathbb{N}"), k("\\R", "\\mathbb{R}"), k("\\Z", "\\mathbb{Z}"), k("\\alef", "\\aleph"), k("\\alefsym", "\\aleph"), k("\\Alpha", "\\mathrm{A}"), k("\\Beta", "\\mathrm{B}"), k("\\bull", "\\bullet"), k("\\Chi", "\\mathrm{X}"), k("\\clubs", "\\clubsuit"), k("\\cnums", "\\mathbb{C}"), k("\\Complex", "\\mathbb{C}"), k("\\Dagger", "\\ddagger"), k("\\diamonds", "\\diamondsuit"), k("\\empty", "\\emptyset"), k("\\Epsilon", "\\mathrm{E}"), k("\\Eta", "\\mathrm{H}"), k("\\exist", "\\exists"), k("\\harr", "\\leftrightarrow"), k("\\hArr", "\\Leftrightarrow"), k("\\Harr", "\\Leftrightarrow"), k("\\hearts", "\\heartsuit"), k("\\image", "\\Im"), k("\\infin", "\\infty"), k("\\Iota", "\\mathrm{I}"), k("\\isin", "\\in"), k("\\Kappa", "\\mathrm{K}"), k("\\larr", "\\leftarrow"), k("\\lArr", "\\Leftarrow"), k("\\Larr", "\\Leftarrow"), k("\\lrarr", "\\leftrightarrow"), k("\\lrArr", "\\Leftrightarrow"), k("\\Lrarr", "\\Leftrightarrow"), k("\\Mu", "\\mathrm{M}"), k("\\natnums", "\\mathbb{N}"), k("\\Nu", "\\mathrm{N}"), k("\\Omicron", "\\mathrm{O}"), k("\\plusmn", "\\pm"), k("\\rarr", "\\rightarrow"), k("\\rArr", "\\Rightarrow"), k("\\Rarr", "\\Rightarrow"), k("\\real", "\\Re"), k("\\reals", "\\mathbb{R}"), k("\\Reals", "\\mathbb{R}"), k("\\Rho", "\\mathrm{P}"), k("\\sdot", "\\cdot"), k("\\sect", "\\S"), k("\\spades", "\\spadesuit"), k("\\sub", "\\subset"), k("\\sube", "\\subseteq"), k("\\supe", "\\supseteq"), k("\\Tau", "\\mathrm{T}"), k("\\thetasym", "\\vartheta"), k("\\weierp", "\\wp"), k("\\Zeta", "\\mathrm{Z}"), k("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"), k("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"), k("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"), k("\\bra", "\\mathinner{\\langle{#1}|}"), k("\\ket", "\\mathinner{|{#1}\\rangle}"), k("\\braket", "\\mathinner{\\langle{#1}\\rangle}"), k("\\Bra", "\\left\\langle#1\\right|"), k("\\Ket", "\\left|#1\\right\\rangle");
          const cl = (t) => (e) => {
            const r = e.consumeArg().tokens, l = e.consumeArg().tokens, c = e.consumeArg().tokens, m = e.consumeArg().tokens, g = e.macros.get("|"), _ = e.macros.get("\\|");
            e.macros.beginGroup();
            const v = (R) => (P) => {
              t && (P.macros.set("|", g), c.length && P.macros.set("\\|", _));
              let Y = R;
              return !R && c.length && P.future().text === "|" && (P.popToken(), Y = !0), {
                tokens: Y ? c : l,
                numArgs: 0
              };
            };
            e.macros.set("|", v(!1)), c.length && e.macros.set("\\|", v(!0));
            const T = e.consumeArg().tokens, N = e.expandTokens([
              ...m,
              ...T,
              ...r
              // reversed
            ]);
            return e.macros.endGroup(), {
              tokens: N.reverse(),
              numArgs: 0
            };
          };
          k("\\bra@ket", cl(!1)), k("\\bra@set", cl(!0)), k("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}"), k("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}"), k("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}"), k("\\angln", "{\\angl n}"), k("\\blue", "\\textcolor{##6495ed}{#1}"), k("\\orange", "\\textcolor{##ffa500}{#1}"), k("\\pink", "\\textcolor{##ff00af}{#1}"), k("\\red", "\\textcolor{##df0030}{#1}"), k("\\green", "\\textcolor{##28ae7b}{#1}"), k("\\gray", "\\textcolor{gray}{#1}"), k("\\purple", "\\textcolor{##9d38bd}{#1}"), k("\\blueA", "\\textcolor{##ccfaff}{#1}"), k("\\blueB", "\\textcolor{##80f6ff}{#1}"), k("\\blueC", "\\textcolor{##63d9ea}{#1}"), k("\\blueD", "\\textcolor{##11accd}{#1}"), k("\\blueE", "\\textcolor{##0c7f99}{#1}"), k("\\tealA", "\\textcolor{##94fff5}{#1}"), k("\\tealB", "\\textcolor{##26edd5}{#1}"), k("\\tealC", "\\textcolor{##01d1c1}{#1}"), k("\\tealD", "\\textcolor{##01a995}{#1}"), k("\\tealE", "\\textcolor{##208170}{#1}"), k("\\greenA", "\\textcolor{##b6ffb0}{#1}"), k("\\greenB", "\\textcolor{##8af281}{#1}"), k("\\greenC", "\\textcolor{##74cf70}{#1}"), k("\\greenD", "\\textcolor{##1fab54}{#1}"), k("\\greenE", "\\textcolor{##0d923f}{#1}"), k("\\goldA", "\\textcolor{##ffd0a9}{#1}"), k("\\goldB", "\\textcolor{##ffbb71}{#1}"), k("\\goldC", "\\textcolor{##ff9c39}{#1}"), k("\\goldD", "\\textcolor{##e07d10}{#1}"), k("\\goldE", "\\textcolor{##a75a05}{#1}"), k("\\redA", "\\textcolor{##fca9a9}{#1}"), k("\\redB", "\\textcolor{##ff8482}{#1}"), k("\\redC", "\\textcolor{##f9685d}{#1}"), k("\\redD", "\\textcolor{##e84d39}{#1}"), k("\\redE", "\\textcolor{##bc2612}{#1}"), k("\\maroonA", "\\textcolor{##ffbde0}{#1}"), k("\\maroonB", "\\textcolor{##ff92c6}{#1}"), k("\\maroonC", "\\textcolor{##ed5fa6}{#1}"), k("\\maroonD", "\\textcolor{##ca337c}{#1}"), k("\\maroonE", "\\textcolor{##9e034e}{#1}"), k("\\purpleA", "\\textcolor{##ddd7ff}{#1}"), k("\\purpleB", "\\textcolor{##c6b9fc}{#1}"), k("\\purpleC", "\\textcolor{##aa87ff}{#1}"), k("\\purpleD", "\\textcolor{##7854ab}{#1}"), k("\\purpleE", "\\textcolor{##543b78}{#1}"), k("\\mintA", "\\textcolor{##f5f9e8}{#1}"), k("\\mintB", "\\textcolor{##edf2df}{#1}"), k("\\mintC", "\\textcolor{##e0e5cc}{#1}"), k("\\grayA", "\\textcolor{##f6f7f7}{#1}"), k("\\grayB", "\\textcolor{##f0f1f2}{#1}"), k("\\grayC", "\\textcolor{##e3e5e6}{#1}"), k("\\grayD", "\\textcolor{##d6d8da}{#1}"), k("\\grayE", "\\textcolor{##babec2}{#1}"), k("\\grayF", "\\textcolor{##888d93}{#1}"), k("\\grayG", "\\textcolor{##626569}{#1}"), k("\\grayH", "\\textcolor{##3b3e40}{#1}"), k("\\grayI", "\\textcolor{##21242c}{#1}"), k("\\kaBlue", "\\textcolor{##314453}{#1}"), k("\\kaGreen", "\\textcolor{##71B307}{#1}");
          const hl = {
            "^": !0,
            // Parser.js
            _: !0,
            // Parser.js
            "\\limits": !0,
            // Parser.js
            "\\nolimits": !0
            // Parser.js
          };
          class Yu {
            constructor(e, r, l) {
              this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = r, this.expansionCount = 0, this.feed(e), this.macros = new ju(Xu, r.macros), this.mode = l, this.stack = [];
            }
            /**
             * Feed a new input string to the same MacroExpander
             * (with existing macros etc.).
             */
            feed(e) {
              this.lexer = new ll(e, this.settings);
            }
            /**
             * Switches between "text" and "math" modes.
             */
            switchMode(e) {
              this.mode = e;
            }
            /**
             * Start a new group nesting within all namespaces.
             */
            beginGroup() {
              this.macros.beginGroup();
            }
            /**
             * End current group nesting within all namespaces.
             */
            endGroup() {
              this.macros.endGroup();
            }
            /**
             * Ends all currently nested groups (if any), restoring values before the
             * groups began.  Useful in case of an error in the middle of parsing.
             */
            endGroups() {
              this.macros.endGroups();
            }
            /**
             * Returns the topmost token on the stack, without expanding it.
             * Similar in behavior to TeX's `\futurelet`.
             */
            future() {
              return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
            }
            /**
             * Remove and return the next unexpanded token.
             */
            popToken() {
              return this.future(), this.stack.pop();
            }
            /**
             * Add a given token to the token stack.  In particular, this get be used
             * to put back a token returned from one of the other methods.
             */
            pushToken(e) {
              this.stack.push(e);
            }
            /**
             * Append an array of tokens to the token stack.
             */
            pushTokens(e) {
              this.stack.push(...e);
            }
            /**
             * Find an macro argument without expanding tokens and append the array of
             * tokens to the token stack. Uses Token as a container for the result.
             */
            scanArgument(e) {
              let r, l, c;
              if (e) {
                if (this.consumeSpaces(), this.future().text !== "[")
                  return null;
                r = this.popToken(), {
                  tokens: c,
                  end: l
                } = this.consumeArg(["]"]);
              } else
                ({
                  tokens: c,
                  start: r,
                  end: l
                } = this.consumeArg());
              return this.pushToken(new Pt("EOF", l.loc)), this.pushTokens(c), r.range(l, "");
            }
            /**
             * Consume all following space tokens, without expansion.
             */
            consumeSpaces() {
              for (; this.future().text === " "; )
                this.stack.pop();
            }
            /**
             * Consume an argument from the token stream, and return the resulting array
             * of tokens and start/end token.
             */
            consumeArg(e) {
              const r = [], l = e && e.length > 0;
              l || this.consumeSpaces();
              const c = this.future();
              let m, g = 0, _ = 0;
              do {
                if (m = this.popToken(), r.push(m), m.text === "{")
                  ++g;
                else if (m.text === "}") {
                  if (--g, g === -1)
                    throw new o("Extra }", m);
                } else if (m.text === "EOF")
                  throw new o("Unexpected end of input in a macro argument, expected '" + (e && l ? e[_] : "}") + "'", m);
                if (e && l)
                  if ((g === 0 || g === 1 && e[_] === "{") && m.text === e[_]) {
                    if (++_, _ === e.length) {
                      r.splice(-_, _);
                      break;
                    }
                  } else
                    _ = 0;
              } while (g !== 0 || l);
              return c.text === "{" && r[r.length - 1].text === "}" && (r.pop(), r.shift()), r.reverse(), {
                tokens: r,
                start: c,
                end: m
              };
            }
            /**
             * Consume the specified number of (delimited) arguments from the token
             * stream and return the resulting array of arguments.
             */
            consumeArgs(e, r) {
              if (r) {
                if (r.length !== e + 1)
                  throw new o("The length of delimiters doesn't match the number of args!");
                const c = r[0];
                for (let m = 0; m < c.length; m++) {
                  const g = this.popToken();
                  if (c[m] !== g.text)
                    throw new o("Use of the macro doesn't match its definition", g);
                }
              }
              const l = [];
              for (let c = 0; c < e; c++)
                l.push(this.consumeArg(r && r[c + 1]).tokens);
              return l;
            }
            /**
             * Increment `expansionCount` by the specified amount.
             * Throw an error if it exceeds `maxExpand`.
             */
            countExpansion(e) {
              if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand)
                throw new o("Too many expansions: infinite loop or need to increase maxExpand setting");
            }
            /**
             * Expand the next token only once if possible.
             *
             * If the token is expanded, the resulting tokens will be pushed onto
             * the stack in reverse order, and the number of such tokens will be
             * returned.  This number might be zero or positive.
             *
             * If not, the return value is `false`, and the next token remains at the
             * top of the stack.
             *
             * In either case, the next token will be on the top of the stack,
             * or the stack will be empty (in case of empty expansion
             * and no other tokens).
             *
             * Used to implement `expandAfterFuture` and `expandNextToken`.
             *
             * If expandableOnly, only expandable tokens are expanded and
             * an undefined control sequence results in an error.
             */
            expandOnce(e) {
              const r = this.popToken(), l = r.text, c = r.noexpand ? null : this._getExpansion(l);
              if (c == null || e && c.unexpandable) {
                if (e && c == null && l[0] === "\\" && !this.isDefined(l))
                  throw new o("Undefined control sequence: " + l);
                return this.pushToken(r), !1;
              }
              this.countExpansion(1);
              let m = c.tokens;
              const g = this.consumeArgs(c.numArgs, c.delimiters);
              if (c.numArgs) {
                m = m.slice();
                for (let _ = m.length - 1; _ >= 0; --_) {
                  let v = m[_];
                  if (v.text === "#") {
                    if (_ === 0)
                      throw new o("Incomplete placeholder at end of macro body", v);
                    if (v = m[--_], v.text === "#")
                      m.splice(_ + 1, 1);
                    else if (/^[1-9]$/.test(v.text))
                      m.splice(_, 2, ...g[+v.text - 1]);
                    else
                      throw new o("Not a valid argument number", v);
                  }
                }
              }
              return this.pushTokens(m), m.length;
            }
            /**
             * Expand the next token only once (if possible), and return the resulting
             * top token on the stack (without removing anything from the stack).
             * Similar in behavior to TeX's `\expandafter\futurelet`.
             * Equivalent to expandOnce() followed by future().
             */
            expandAfterFuture() {
              return this.expandOnce(), this.future();
            }
            /**
             * Recursively expand first token, then return first non-expandable token.
             */
            expandNextToken() {
              for (; ; )
                if (this.expandOnce() === !1) {
                  const e = this.stack.pop();
                  return e.treatAsRelax && (e.text = "\\relax"), e;
                }
              throw new Error();
            }
            /**
             * Fully expand the given macro name and return the resulting list of
             * tokens, or return `undefined` if no such macro is defined.
             */
            expandMacro(e) {
              return this.macros.has(e) ? this.expandTokens([new Pt(e)]) : void 0;
            }
            /**
             * Fully expand the given token stream and return the resulting list of
             * tokens.  Note that the input tokens are in reverse order, but the
             * output tokens are in forward order.
             */
            expandTokens(e) {
              const r = [], l = this.stack.length;
              for (this.pushTokens(e); this.stack.length > l; )
                if (this.expandOnce(!0) === !1) {
                  const c = this.stack.pop();
                  c.treatAsRelax && (c.noexpand = !1, c.treatAsRelax = !1), r.push(c);
                }
              return this.countExpansion(r.length), r;
            }
            /**
             * Fully expand the given macro name and return the result as a string,
             * or return `undefined` if no such macro is defined.
             */
            expandMacroAsText(e) {
              const r = this.expandMacro(e);
              return r && r.map((l) => l.text).join("");
            }
            /**
             * Returns the expanded macro as a reversed array of tokens and a macro
             * argument count.  Or returns `null` if no such macro.
             */
            _getExpansion(e) {
              const r = this.macros.get(e);
              if (r == null)
                return r;
              if (e.length === 1) {
                const c = this.lexer.catcodes[e];
                if (c != null && c !== 13)
                  return;
              }
              const l = typeof r == "function" ? r(this) : r;
              if (typeof l == "string") {
                let c = 0;
                if (l.indexOf("#") !== -1) {
                  const T = l.replace(/##/g, "");
                  for (; T.indexOf("#" + (c + 1)) !== -1; )
                    ++c;
                }
                const m = new ll(l, this.settings), g = [];
                let _ = m.lex();
                for (; _.text !== "EOF"; )
                  g.push(_), _ = m.lex();
                return g.reverse(), {
                  tokens: g,
                  numArgs: c
                };
              }
              return l;
            }
            /**
             * Determine whether a command is currently "defined" (has some
             * functionality), meaning that it's a macro (in the current group),
             * a function, a symbol, or one of the special commands listed in
             * `implicitCommands`.
             */
            isDefined(e) {
              return this.macros.has(e) || z0.hasOwnProperty(e) || ye.math.hasOwnProperty(e) || ye.text.hasOwnProperty(e) || hl.hasOwnProperty(e);
            }
            /**
             * Determine whether a command is expandable.
             */
            isExpandable(e) {
              const r = this.macros.get(e);
              return r != null ? typeof r == "string" || typeof r == "function" || !r.unexpandable : z0.hasOwnProperty(e) && !z0[e].primitive;
            }
          }
          const fl = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, er = Object.freeze({
            "₊": "+",
            "₋": "-",
            "₌": "=",
            "₍": "(",
            "₎": ")",
            "₀": "0",
            "₁": "1",
            "₂": "2",
            "₃": "3",
            "₄": "4",
            "₅": "5",
            "₆": "6",
            "₇": "7",
            "₈": "8",
            "₉": "9",
            "ₐ": "a",
            "ₑ": "e",
            "ₕ": "h",
            "ᵢ": "i",
            "ⱼ": "j",
            "ₖ": "k",
            "ₗ": "l",
            "ₘ": "m",
            "ₙ": "n",
            "ₒ": "o",
            "ₚ": "p",
            "ᵣ": "r",
            "ₛ": "s",
            "ₜ": "t",
            "ᵤ": "u",
            "ᵥ": "v",
            "ₓ": "x",
            "ᵦ": "β",
            "ᵧ": "γ",
            "ᵨ": "ρ",
            "ᵩ": "ϕ",
            "ᵪ": "χ",
            "⁺": "+",
            "⁻": "-",
            "⁼": "=",
            "⁽": "(",
            "⁾": ")",
            "⁰": "0",
            "¹": "1",
            "²": "2",
            "³": "3",
            "⁴": "4",
            "⁵": "5",
            "⁶": "6",
            "⁷": "7",
            "⁸": "8",
            "⁹": "9",
            "ᴬ": "A",
            "ᴮ": "B",
            "ᴰ": "D",
            "ᴱ": "E",
            "ᴳ": "G",
            "ᴴ": "H",
            "ᴵ": "I",
            "ᴶ": "J",
            "ᴷ": "K",
            "ᴸ": "L",
            "ᴹ": "M",
            "ᴺ": "N",
            "ᴼ": "O",
            "ᴾ": "P",
            "ᴿ": "R",
            "ᵀ": "T",
            "ᵁ": "U",
            "ⱽ": "V",
            "ᵂ": "W",
            "ᵃ": "a",
            "ᵇ": "b",
            "ᶜ": "c",
            "ᵈ": "d",
            "ᵉ": "e",
            "ᶠ": "f",
            "ᵍ": "g",
            ʰ: "h",
            "ⁱ": "i",
            ʲ: "j",
            "ᵏ": "k",
            ˡ: "l",
            "ᵐ": "m",
            ⁿ: "n",
            "ᵒ": "o",
            "ᵖ": "p",
            ʳ: "r",
            ˢ: "s",
            "ᵗ": "t",
            "ᵘ": "u",
            "ᵛ": "v",
            ʷ: "w",
            ˣ: "x",
            ʸ: "y",
            "ᶻ": "z",
            "ᵝ": "β",
            "ᵞ": "γ",
            "ᵟ": "δ",
            "ᵠ": "ϕ",
            "ᵡ": "χ",
            "ᶿ": "θ"
          }), cs = {
            "́": {
              text: "\\'",
              math: "\\acute"
            },
            "̀": {
              text: "\\`",
              math: "\\grave"
            },
            "̈": {
              text: '\\"',
              math: "\\ddot"
            },
            "̃": {
              text: "\\~",
              math: "\\tilde"
            },
            "̄": {
              text: "\\=",
              math: "\\bar"
            },
            "̆": {
              text: "\\u",
              math: "\\breve"
            },
            "̌": {
              text: "\\v",
              math: "\\check"
            },
            "̂": {
              text: "\\^",
              math: "\\hat"
            },
            "̇": {
              text: "\\.",
              math: "\\dot"
            },
            "̊": {
              text: "\\r",
              math: "\\mathring"
            },
            "̋": {
              text: "\\H"
            },
            "̧": {
              text: "\\c"
            }
          }, dl = {
            á: "á",
            à: "à",
            ä: "ä",
            ǟ: "ǟ",
            ã: "ã",
            ā: "ā",
            ă: "ă",
            ắ: "ắ",
            ằ: "ằ",
            ẵ: "ẵ",
            ǎ: "ǎ",
            â: "â",
            ấ: "ấ",
            ầ: "ầ",
            ẫ: "ẫ",
            ȧ: "ȧ",
            ǡ: "ǡ",
            å: "å",
            ǻ: "ǻ",
            ḃ: "ḃ",
            ć: "ć",
            ḉ: "ḉ",
            č: "č",
            ĉ: "ĉ",
            ċ: "ċ",
            ç: "ç",
            ď: "ď",
            ḋ: "ḋ",
            ḑ: "ḑ",
            é: "é",
            è: "è",
            ë: "ë",
            ẽ: "ẽ",
            ē: "ē",
            ḗ: "ḗ",
            ḕ: "ḕ",
            ĕ: "ĕ",
            ḝ: "ḝ",
            ě: "ě",
            ê: "ê",
            ế: "ế",
            ề: "ề",
            ễ: "ễ",
            ė: "ė",
            ȩ: "ȩ",
            ḟ: "ḟ",
            ǵ: "ǵ",
            ḡ: "ḡ",
            ğ: "ğ",
            ǧ: "ǧ",
            ĝ: "ĝ",
            ġ: "ġ",
            ģ: "ģ",
            ḧ: "ḧ",
            ȟ: "ȟ",
            ĥ: "ĥ",
            ḣ: "ḣ",
            ḩ: "ḩ",
            í: "í",
            ì: "ì",
            ï: "ï",
            ḯ: "ḯ",
            ĩ: "ĩ",
            ī: "ī",
            ĭ: "ĭ",
            ǐ: "ǐ",
            î: "î",
            ǰ: "ǰ",
            ĵ: "ĵ",
            ḱ: "ḱ",
            ǩ: "ǩ",
            ķ: "ķ",
            ĺ: "ĺ",
            ľ: "ľ",
            ļ: "ļ",
            ḿ: "ḿ",
            ṁ: "ṁ",
            ń: "ń",
            ǹ: "ǹ",
            ñ: "ñ",
            ň: "ň",
            ṅ: "ṅ",
            ņ: "ņ",
            ó: "ó",
            ò: "ò",
            ö: "ö",
            ȫ: "ȫ",
            õ: "õ",
            ṍ: "ṍ",
            ṏ: "ṏ",
            ȭ: "ȭ",
            ō: "ō",
            ṓ: "ṓ",
            ṑ: "ṑ",
            ŏ: "ŏ",
            ǒ: "ǒ",
            ô: "ô",
            ố: "ố",
            ồ: "ồ",
            ỗ: "ỗ",
            ȯ: "ȯ",
            ȱ: "ȱ",
            ő: "ő",
            ṕ: "ṕ",
            ṗ: "ṗ",
            ŕ: "ŕ",
            ř: "ř",
            ṙ: "ṙ",
            ŗ: "ŗ",
            ś: "ś",
            ṥ: "ṥ",
            š: "š",
            ṧ: "ṧ",
            ŝ: "ŝ",
            ṡ: "ṡ",
            ş: "ş",
            ẗ: "ẗ",
            ť: "ť",
            ṫ: "ṫ",
            ţ: "ţ",
            ú: "ú",
            ù: "ù",
            ü: "ü",
            ǘ: "ǘ",
            ǜ: "ǜ",
            ǖ: "ǖ",
            ǚ: "ǚ",
            ũ: "ũ",
            ṹ: "ṹ",
            ū: "ū",
            ṻ: "ṻ",
            ŭ: "ŭ",
            ǔ: "ǔ",
            û: "û",
            ů: "ů",
            ű: "ű",
            ṽ: "ṽ",
            ẃ: "ẃ",
            ẁ: "ẁ",
            ẅ: "ẅ",
            ŵ: "ŵ",
            ẇ: "ẇ",
            ẘ: "ẘ",
            ẍ: "ẍ",
            ẋ: "ẋ",
            ý: "ý",
            ỳ: "ỳ",
            ÿ: "ÿ",
            ỹ: "ỹ",
            ȳ: "ȳ",
            ŷ: "ŷ",
            ẏ: "ẏ",
            ẙ: "ẙ",
            ź: "ź",
            ž: "ž",
            ẑ: "ẑ",
            ż: "ż",
            Á: "Á",
            À: "À",
            Ä: "Ä",
            Ǟ: "Ǟ",
            Ã: "Ã",
            Ā: "Ā",
            Ă: "Ă",
            Ắ: "Ắ",
            Ằ: "Ằ",
            Ẵ: "Ẵ",
            Ǎ: "Ǎ",
            Â: "Â",
            Ấ: "Ấ",
            Ầ: "Ầ",
            Ẫ: "Ẫ",
            Ȧ: "Ȧ",
            Ǡ: "Ǡ",
            Å: "Å",
            Ǻ: "Ǻ",
            Ḃ: "Ḃ",
            Ć: "Ć",
            Ḉ: "Ḉ",
            Č: "Č",
            Ĉ: "Ĉ",
            Ċ: "Ċ",
            Ç: "Ç",
            Ď: "Ď",
            Ḋ: "Ḋ",
            Ḑ: "Ḑ",
            É: "É",
            È: "È",
            Ë: "Ë",
            Ẽ: "Ẽ",
            Ē: "Ē",
            Ḗ: "Ḗ",
            Ḕ: "Ḕ",
            Ĕ: "Ĕ",
            Ḝ: "Ḝ",
            Ě: "Ě",
            Ê: "Ê",
            Ế: "Ế",
            Ề: "Ề",
            Ễ: "Ễ",
            Ė: "Ė",
            Ȩ: "Ȩ",
            Ḟ: "Ḟ",
            Ǵ: "Ǵ",
            Ḡ: "Ḡ",
            Ğ: "Ğ",
            Ǧ: "Ǧ",
            Ĝ: "Ĝ",
            Ġ: "Ġ",
            Ģ: "Ģ",
            Ḧ: "Ḧ",
            Ȟ: "Ȟ",
            Ĥ: "Ĥ",
            Ḣ: "Ḣ",
            Ḩ: "Ḩ",
            Í: "Í",
            Ì: "Ì",
            Ï: "Ï",
            Ḯ: "Ḯ",
            Ĩ: "Ĩ",
            Ī: "Ī",
            Ĭ: "Ĭ",
            Ǐ: "Ǐ",
            Î: "Î",
            İ: "İ",
            Ĵ: "Ĵ",
            Ḱ: "Ḱ",
            Ǩ: "Ǩ",
            Ķ: "Ķ",
            Ĺ: "Ĺ",
            Ľ: "Ľ",
            Ļ: "Ļ",
            Ḿ: "Ḿ",
            Ṁ: "Ṁ",
            Ń: "Ń",
            Ǹ: "Ǹ",
            Ñ: "Ñ",
            Ň: "Ň",
            Ṅ: "Ṅ",
            Ņ: "Ņ",
            Ó: "Ó",
            Ò: "Ò",
            Ö: "Ö",
            Ȫ: "Ȫ",
            Õ: "Õ",
            Ṍ: "Ṍ",
            Ṏ: "Ṏ",
            Ȭ: "Ȭ",
            Ō: "Ō",
            Ṓ: "Ṓ",
            Ṑ: "Ṑ",
            Ŏ: "Ŏ",
            Ǒ: "Ǒ",
            Ô: "Ô",
            Ố: "Ố",
            Ồ: "Ồ",
            Ỗ: "Ỗ",
            Ȯ: "Ȯ",
            Ȱ: "Ȱ",
            Ő: "Ő",
            Ṕ: "Ṕ",
            Ṗ: "Ṗ",
            Ŕ: "Ŕ",
            Ř: "Ř",
            Ṙ: "Ṙ",
            Ŗ: "Ŗ",
            Ś: "Ś",
            Ṥ: "Ṥ",
            Š: "Š",
            Ṧ: "Ṧ",
            Ŝ: "Ŝ",
            Ṡ: "Ṡ",
            Ş: "Ş",
            Ť: "Ť",
            Ṫ: "Ṫ",
            Ţ: "Ţ",
            Ú: "Ú",
            Ù: "Ù",
            Ü: "Ü",
            Ǘ: "Ǘ",
            Ǜ: "Ǜ",
            Ǖ: "Ǖ",
            Ǚ: "Ǚ",
            Ũ: "Ũ",
            Ṹ: "Ṹ",
            Ū: "Ū",
            Ṻ: "Ṻ",
            Ŭ: "Ŭ",
            Ǔ: "Ǔ",
            Û: "Û",
            Ů: "Ů",
            Ű: "Ű",
            Ṽ: "Ṽ",
            Ẃ: "Ẃ",
            Ẁ: "Ẁ",
            Ẅ: "Ẅ",
            Ŵ: "Ŵ",
            Ẇ: "Ẇ",
            Ẍ: "Ẍ",
            Ẋ: "Ẋ",
            Ý: "Ý",
            Ỳ: "Ỳ",
            Ÿ: "Ÿ",
            Ỹ: "Ỹ",
            Ȳ: "Ȳ",
            Ŷ: "Ŷ",
            Ẏ: "Ẏ",
            Ź: "Ź",
            Ž: "Ž",
            Ẑ: "Ẑ",
            Ż: "Ż",
            ά: "ά",
            ὰ: "ὰ",
            ᾱ: "ᾱ",
            ᾰ: "ᾰ",
            έ: "έ",
            ὲ: "ὲ",
            ή: "ή",
            ὴ: "ὴ",
            ί: "ί",
            ὶ: "ὶ",
            ϊ: "ϊ",
            ΐ: "ΐ",
            ῒ: "ῒ",
            ῑ: "ῑ",
            ῐ: "ῐ",
            ό: "ό",
            ὸ: "ὸ",
            ύ: "ύ",
            ὺ: "ὺ",
            ϋ: "ϋ",
            ΰ: "ΰ",
            ῢ: "ῢ",
            ῡ: "ῡ",
            ῠ: "ῠ",
            ώ: "ώ",
            ὼ: "ὼ",
            Ύ: "Ύ",
            Ὺ: "Ὺ",
            Ϋ: "Ϋ",
            Ῡ: "Ῡ",
            Ῠ: "Ῠ",
            Ώ: "Ώ",
            Ὼ: "Ὼ"
          };
          class tr {
            constructor(e, r) {
              this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new Yu(e, r, this.mode), this.settings = r, this.leftrightDepth = 0;
            }
            /**
             * Checks a result to make sure it has the right type, and throws an
             * appropriate error otherwise.
             */
            expect(e, r) {
              if (r === void 0 && (r = !0), this.fetch().text !== e)
                throw new o("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
              r && this.consume();
            }
            /**
             * Discards the current lookahead token, considering it consumed.
             */
            consume() {
              this.nextToken = null;
            }
            /**
             * Return the current lookahead token, or if there isn't one (at the
             * beginning, or if the previous lookahead token was consume()d),
             * fetch the next token as the new lookahead token and return it.
             */
            fetch() {
              return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
            }
            /**
             * Switches between "text" and "math" modes.
             */
            switchMode(e) {
              this.mode = e, this.gullet.switchMode(e);
            }
            /**
             * Main parsing function, which parses an entire input.
             */
            parse() {
              this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
              try {
                const e = this.parseExpression(!1);
                return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
              } finally {
                this.gullet.endGroups();
              }
            }
            /**
             * Fully parse a separate sequence of tokens as a separate job.
             * Tokens should be specified in reverse order, as in a MacroDefinition.
             */
            subparse(e) {
              const r = this.nextToken;
              this.consume(), this.gullet.pushToken(new Pt("}")), this.gullet.pushTokens(e);
              const l = this.parseExpression(!1);
              return this.expect("}"), this.nextToken = r, l;
            }
            /**
             * Parses an "expression", which is a list of atoms.
             *
             * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
             *                 happens when functions have higher precedence han infix
             *                 nodes in implicit parses.
             *
             * `breakOnTokenText`: The text of the token that the expression should end
             *                     with, or `null` if something else should end the
             *                     expression.
             */
            parseExpression(e, r) {
              const l = [];
              for (; ; ) {
                this.mode === "math" && this.consumeSpaces();
                const c = this.fetch();
                if (tr.endOfExpression.indexOf(c.text) !== -1 || r && c.text === r || e && z0[c.text] && z0[c.text].infix)
                  break;
                const m = this.parseAtom(r);
                if (m) {
                  if (m.type === "internal")
                    continue;
                } else
                  break;
                l.push(m);
              }
              return this.mode === "text" && this.formLigatures(l), this.handleInfixNodes(l);
            }
            /**
             * Rewrites infix operators such as \over with corresponding commands such
             * as \frac.
             *
             * There can only be one infix operator per group.  If there's more than one
             * then the expression is ambiguous.  This can be resolved by adding {}.
             */
            handleInfixNodes(e) {
              let r = -1, l;
              for (let c = 0; c < e.length; c++)
                if (e[c].type === "infix") {
                  if (r !== -1)
                    throw new o("only one infix operator per group", e[c].token);
                  r = c, l = e[c].replaceWith;
                }
              if (r !== -1 && l) {
                let c, m;
                const g = e.slice(0, r), _ = e.slice(r + 1);
                g.length === 1 && g[0].type === "ordgroup" ? c = g[0] : c = {
                  type: "ordgroup",
                  mode: this.mode,
                  body: g
                }, _.length === 1 && _[0].type === "ordgroup" ? m = _[0] : m = {
                  type: "ordgroup",
                  mode: this.mode,
                  body: _
                };
                let v;
                return l === "\\\\abovefrac" ? v = this.callFunction(l, [c, e[r], m], []) : v = this.callFunction(l, [c, m], []), [v];
              } else
                return e;
            }
            /**
             * Handle a subscript or superscript with nice errors.
             */
            handleSupSubscript(e) {
              const r = this.fetch(), l = r.text;
              this.consume(), this.consumeSpaces();
              const c = this.parseGroup(e);
              if (!c)
                throw new o("Expected group after '" + l + "'", r);
              return c;
            }
            /**
             * Converts the textual input of an unsupported command into a text node
             * contained within a color node whose color is determined by errorColor
             */
            formatUnsupportedCmd(e) {
              const r = [];
              for (let m = 0; m < e.length; m++)
                r.push({
                  type: "textord",
                  mode: "text",
                  text: e[m]
                });
              const l = {
                type: "text",
                mode: this.mode,
                body: r
              };
              return {
                type: "color",
                mode: this.mode,
                color: this.settings.errorColor,
                body: [l]
              };
            }
            /**
             * Parses a group with optional super/subscripts.
             */
            parseAtom(e) {
              const r = this.parseGroup("atom", e);
              if (this.mode === "text")
                return r;
              let l, c;
              for (; ; ) {
                this.consumeSpaces();
                const m = this.fetch();
                if (m.text === "\\limits" || m.text === "\\nolimits") {
                  if (r && r.type === "op") {
                    const g = m.text === "\\limits";
                    r.limits = g, r.alwaysHandleSupSub = !0;
                  } else if (r && r.type === "operatorname")
                    r.alwaysHandleSupSub && (r.limits = m.text === "\\limits");
                  else
                    throw new o("Limit controls must follow a math operator", m);
                  this.consume();
                } else if (m.text === "^") {
                  if (l)
                    throw new o("Double superscript", m);
                  l = this.handleSupSubscript("superscript");
                } else if (m.text === "_") {
                  if (c)
                    throw new o("Double subscript", m);
                  c = this.handleSupSubscript("subscript");
                } else if (m.text === "'") {
                  if (l)
                    throw new o("Double superscript", m);
                  const g = {
                    type: "textord",
                    mode: this.mode,
                    text: "\\prime"
                  }, _ = [g];
                  for (this.consume(); this.fetch().text === "'"; )
                    _.push(g), this.consume();
                  this.fetch().text === "^" && _.push(this.handleSupSubscript("superscript")), l = {
                    type: "ordgroup",
                    mode: this.mode,
                    body: _
                  };
                } else if (er[m.text]) {
                  const g = fl.test(m.text), _ = [];
                  for (_.push(new Pt(er[m.text])), this.consume(); ; ) {
                    const T = this.fetch().text;
                    if (!er[T] || fl.test(T) !== g)
                      break;
                    _.unshift(new Pt(er[T])), this.consume();
                  }
                  const v = this.subparse(_);
                  g ? c = {
                    type: "ordgroup",
                    mode: "math",
                    body: v
                  } : l = {
                    type: "ordgroup",
                    mode: "math",
                    body: v
                  };
                } else
                  break;
              }
              return l || c ? {
                type: "supsub",
                mode: this.mode,
                base: r,
                sup: l,
                sub: c
              } : r;
            }
            /**
             * Parses an entire function, including its base and all of its arguments.
             */
            parseFunction(e, r) {
              const l = this.fetch(), c = l.text, m = z0[c];
              if (!m)
                return null;
              if (this.consume(), r && r !== "atom" && !m.allowedInArgument)
                throw new o("Got function '" + c + "' with no arguments" + (r ? " as " + r : ""), l);
              if (this.mode === "text" && !m.allowedInText)
                throw new o("Can't use function '" + c + "' in text mode", l);
              if (this.mode === "math" && m.allowedInMath === !1)
                throw new o("Can't use function '" + c + "' in math mode", l);
              const {
                args: g,
                optArgs: _
              } = this.parseArguments(c, m);
              return this.callFunction(c, g, _, l, e);
            }
            /**
             * Call a function handler with a suitable context and arguments.
             */
            callFunction(e, r, l, c, m) {
              const g = {
                funcName: e,
                parser: this,
                token: c,
                breakOnTokenText: m
              }, _ = z0[e];
              if (_ && _.handler)
                return _.handler(g, r, l);
              throw new o("No function handler for " + e);
            }
            /**
             * Parses the arguments of a function or environment
             */
            parseArguments(e, r) {
              const l = r.numArgs + r.numOptionalArgs;
              if (l === 0)
                return {
                  args: [],
                  optArgs: []
                };
              const c = [], m = [];
              for (let g = 0; g < l; g++) {
                let _ = r.argTypes && r.argTypes[g];
                const v = g < r.numOptionalArgs;
                (r.primitive && _ == null || // \sqrt expands into primitive if optional argument doesn't exist
                r.type === "sqrt" && g === 1 && m[0] == null) && (_ = "primitive");
                const T = this.parseGroupOfType("argument to '" + e + "'", _, v);
                if (v)
                  m.push(T);
                else if (T != null)
                  c.push(T);
                else
                  throw new o("Null argument, please report this as a bug");
              }
              return {
                args: c,
                optArgs: m
              };
            }
            /**
             * Parses a group when the mode is changing.
             */
            parseGroupOfType(e, r, l) {
              switch (r) {
                case "color":
                  return this.parseColorGroup(l);
                case "size":
                  return this.parseSizeGroup(l);
                case "url":
                  return this.parseUrlGroup(l);
                case "math":
                case "text":
                  return this.parseArgumentGroup(l, r);
                case "hbox": {
                  const c = this.parseArgumentGroup(l, "text");
                  return c != null ? {
                    type: "styling",
                    mode: c.mode,
                    body: [c],
                    style: "text"
                    // simulate \textstyle
                  } : null;
                }
                case "raw": {
                  const c = this.parseStringGroup("raw", l);
                  return c != null ? {
                    type: "raw",
                    mode: "text",
                    string: c.text
                  } : null;
                }
                case "primitive": {
                  if (l)
                    throw new o("A primitive argument cannot be optional");
                  const c = this.parseGroup(e);
                  if (c == null)
                    throw new o("Expected group as " + e, this.fetch());
                  return c;
                }
                case "original":
                case null:
                case void 0:
                  return this.parseArgumentGroup(l);
                default:
                  throw new o("Unknown group type as " + e, this.fetch());
              }
            }
            /**
             * Discard any space tokens, fetching the next non-space token.
             */
            consumeSpaces() {
              for (; this.fetch().text === " "; )
                this.consume();
            }
            /**
             * Parses a group, essentially returning the string formed by the
             * brace-enclosed tokens plus some position information.
             */
            parseStringGroup(e, r) {
              const l = this.gullet.scanArgument(r);
              if (l == null)
                return null;
              let c = "", m;
              for (; (m = this.fetch()).text !== "EOF"; )
                c += m.text, this.consume();
              return this.consume(), l.text = c, l;
            }
            /**
             * Parses a regex-delimited group: the largest sequence of tokens
             * whose concatenated strings match `regex`. Returns the string
             * formed by the tokens plus some position information.
             */
            parseRegexGroup(e, r) {
              const l = this.fetch();
              let c = l, m = "", g;
              for (; (g = this.fetch()).text !== "EOF" && e.test(m + g.text); )
                c = g, m += c.text, this.consume();
              if (m === "")
                throw new o("Invalid " + r + ": '" + l.text + "'", l);
              return l.range(c, m);
            }
            /**
             * Parses a color description.
             */
            parseColorGroup(e) {
              const r = this.parseStringGroup("color", e);
              if (r == null)
                return null;
              const l = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);
              if (!l)
                throw new o("Invalid color: '" + r.text + "'", r);
              let c = l[0];
              return /^[0-9a-f]{6}$/i.test(c) && (c = "#" + c), {
                type: "color-token",
                mode: this.mode,
                color: c
              };
            }
            /**
             * Parses a size specification, consisting of magnitude and unit.
             */
            parseSizeGroup(e) {
              let r, l = !1;
              if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? r = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : r = this.parseStringGroup("size", e), !r)
                return null;
              !e && r.text.length === 0 && (r.text = "0pt", l = !0);
              const c = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);
              if (!c)
                throw new o("Invalid size: '" + r.text + "'", r);
              const m = {
                number: +(c[1] + c[2]),
                // sign + magnitude, cast to number
                unit: c[3]
              };
              if (!Nt(m))
                throw new o("Invalid unit: '" + m.unit + "'", r);
              return {
                type: "size",
                mode: this.mode,
                value: m,
                isBlank: l
              };
            }
            /**
             * Parses an URL, checking escaped letters and allowed protocols,
             * and setting the catcode of % as an active character (as in \hyperref).
             */
            parseUrlGroup(e) {
              this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
              const r = this.parseStringGroup("url", e);
              if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), r == null)
                return null;
              const l = r.text.replace(/\\([#$%&~_^{}])/g, "$1");
              return {
                type: "url",
                mode: this.mode,
                url: l
              };
            }
            /**
             * Parses an argument with the mode specified.
             */
            parseArgumentGroup(e, r) {
              const l = this.gullet.scanArgument(e);
              if (l == null)
                return null;
              const c = this.mode;
              r && this.switchMode(r), this.gullet.beginGroup();
              const m = this.parseExpression(!1, "EOF");
              this.expect("EOF"), this.gullet.endGroup();
              const g = {
                type: "ordgroup",
                mode: this.mode,
                loc: l.loc,
                body: m
              };
              return r && this.switchMode(c), g;
            }
            /**
             * Parses an ordinary group, which is either a single nucleus (like "x")
             * or an expression in braces (like "{x+y}") or an implicit group, a group
             * that starts at the current position, and ends right before a higher explicit
             * group ends, or at EOF.
             */
            parseGroup(e, r) {
              const l = this.fetch(), c = l.text;
              let m;
              if (c === "{" || c === "\\begingroup") {
                this.consume();
                const g = c === "{" ? "}" : "\\endgroup";
                this.gullet.beginGroup();
                const _ = this.parseExpression(!1, g), v = this.fetch();
                this.expect(g), this.gullet.endGroup(), m = {
                  type: "ordgroup",
                  mode: this.mode,
                  loc: Et.range(l, v),
                  body: _,
                  // A group formed by \begingroup...\endgroup is a semi-simple group
                  // which doesn't affect spacing in math mode, i.e., is transparent.
                  // https://tex.stackexchange.com/questions/1930/when-should-one-
                  // use-begingroup-instead-of-bgroup
                  semisimple: c === "\\begingroup" || void 0
                };
              } else if (m = this.parseFunction(r, e) || this.parseSymbol(), m == null && c[0] === "\\" && !hl.hasOwnProperty(c)) {
                if (this.settings.throwOnError)
                  throw new o("Undefined control sequence: " + c, l);
                m = this.formatUnsupportedCmd(c), this.consume();
              }
              return m;
            }
            /**
             * Form ligature-like combinations of characters for text mode.
             * This includes inputs like "--", "---", "``" and "''".
             * The result will simply replace multiple textord nodes with a single
             * character in each value by a single textord node having multiple
             * characters in its value.  The representation is still ASCII source.
             * The group will be modified in place.
             */
            formLigatures(e) {
              let r = e.length - 1;
              for (let l = 0; l < r; ++l) {
                const c = e[l], m = c.text;
                m === "-" && e[l + 1].text === "-" && (l + 1 < r && e[l + 2].text === "-" ? (e.splice(l, 3, {
                  type: "textord",
                  mode: "text",
                  loc: Et.range(c, e[l + 2]),
                  text: "---"
                }), r -= 2) : (e.splice(l, 2, {
                  type: "textord",
                  mode: "text",
                  loc: Et.range(c, e[l + 1]),
                  text: "--"
                }), r -= 1)), (m === "'" || m === "`") && e[l + 1].text === m && (e.splice(l, 2, {
                  type: "textord",
                  mode: "text",
                  loc: Et.range(c, e[l + 1]),
                  text: m + m
                }), r -= 1);
              }
            }
            /**
             * Parse a single symbol out of the string. Here, we handle single character
             * symbols and special functions like \verb.
             */
            parseSymbol() {
              const e = this.fetch();
              let r = e.text;
              if (/^\\verb[^a-zA-Z]/.test(r)) {
                this.consume();
                let m = r.slice(5);
                const g = m.charAt(0) === "*";
                if (g && (m = m.slice(1)), m.length < 2 || m.charAt(0) !== m.slice(-1))
                  throw new o(`\\verb assertion failed --
                    please report what input caused this bug`);
                return m = m.slice(1, -1), {
                  type: "verb",
                  mode: "text",
                  body: m,
                  star: g
                };
              }
              dl.hasOwnProperty(r[0]) && !ye[this.mode][r[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + r[0] + '" used in math mode', e), r = dl[r[0]] + r.slice(1));
              const l = Vu.exec(r);
              l && (r = r.substring(0, l.index), r === "i" ? r = "ı" : r === "j" && (r = "ȷ"));
              let c;
              if (ye[this.mode][r]) {
                this.settings.strict && this.mode === "math" && et.indexOf(r) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + r[0] + '" used in math mode', e);
                const m = ye[this.mode][r].group, g = Et.range(e);
                let _;
                if (Pn.hasOwnProperty(m)) {
                  const v = m;
                  _ = {
                    type: "atom",
                    mode: this.mode,
                    family: v,
                    loc: g,
                    text: r
                  };
                } else
                  _ = {
                    type: m,
                    mode: this.mode,
                    loc: g,
                    text: r
                  };
                c = _;
              } else if (r.charCodeAt(0) >= 128)
                this.settings.strict && (ie(r.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + r[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + r[0] + '"' + (" (" + r.charCodeAt(0) + ")"), e)), c = {
                  type: "textord",
                  mode: "text",
                  loc: Et.range(e),
                  text: r
                };
              else
                return null;
              if (this.consume(), l)
                for (let m = 0; m < l[0].length; m++) {
                  const g = l[0][m];
                  if (!cs[g])
                    throw new o("Unknown accent ' " + g + "'", e);
                  const _ = cs[g][this.mode] || cs[g].text;
                  if (!_)
                    throw new o("Accent " + g + " unsupported in " + this.mode + " mode", e);
                  c = {
                    type: "accent",
                    mode: this.mode,
                    loc: Et.range(e),
                    label: _,
                    isStretchy: !1,
                    isShifty: !0,
                    // $FlowFixMe
                    base: c
                  };
                }
              return c;
            }
          }
          tr.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
          var hs = function(t, e) {
            if (!(typeof t == "string" || t instanceof String))
              throw new TypeError("KaTeX can only parse string typed expression");
            const r = new tr(t, e);
            delete r.gullet.macros.current["\\df@tag"];
            let l = r.parse();
            if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
              if (!e.displayMode)
                throw new o("\\tag works only in display equations");
              l = [{
                type: "tag",
                mode: "text",
                body: l,
                tag: r.subparse([new Pt("\\df@tag")])
              }];
            }
            return l;
          };
          let ml = function(t, e, r) {
            e.textContent = "";
            const l = fs(t, r).toNode();
            e.appendChild(l);
          };
          typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), ml = function() {
            throw new o("KaTeX doesn't work in quirks mode.");
          });
          const Zu = function(t, e) {
            return fs(t, e).toMarkup();
          }, Ku = function(t, e) {
            const r = new M(e);
            return hs(t, r);
          }, pl = function(t, e, r) {
            if (r.throwOnError || !(t instanceof o))
              throw t;
            const l = L.makeSpan(["katex-error"], [new wt(e)]);
            return l.setAttribute("title", t.toString()), l.setAttribute("style", "color:" + r.errorColor), l;
          }, fs = function(t, e) {
            const r = new M(e);
            try {
              const l = hs(t, r);
              return hu(l, t, r);
            } catch (l) {
              return pl(l, t, r);
            }
          };
          var Qu = {
            /**
             * Current KaTeX version
             */
            version: "0.16.10",
            /**
             * Renders the given LaTeX into an HTML+MathML combination, and adds
             * it as a child to the specified DOM node.
             */
            render: ml,
            /**
             * Renders the given LaTeX into an HTML+MathML combination string,
             * for sending to the client.
             */
            renderToString: Zu,
            /**
             * KaTeX error, usually during parsing.
             */
            ParseError: o,
            /**
             * The shema of Settings
             */
            SETTINGS_SCHEMA: A,
            /**
             * Parses the given LaTeX into KaTeX's internal parse tree structure,
             * without rendering to HTML or MathML.
             *
             * NOTE: This method is not currently recommended for public use.
             * The internal tree representation is unstable and is very likely
             * to change. Use at your own risk.
             */
            __parse: Ku,
            /**
             * Renders the given LaTeX into an HTML+MathML internal DOM tree
             * representation, without flattening that representation to a string.
             *
             * NOTE: This method is not currently recommended for public use.
             * The internal tree representation is unstable and is very likely
             * to change. Use at your own risk.
             */
            __renderToDomTree: fs,
            /**
             * Renders the given LaTeX into an HTML internal DOM tree representation,
             * without MathML and without flattening that representation to a string.
             *
             * NOTE: This method is not currently recommended for public use.
             * The internal tree representation is unstable and is very likely
             * to change. Use at your own risk.
             */
            __renderToHTMLTree: function(t, e) {
              const r = new M(e);
              try {
                const l = hs(t, r);
                return fu(l, t, r);
              } catch (l) {
                return pl(l, t, r);
              }
            },
            /**
             * extends internal font metrics object with a new object
             * each key in the new object represents a font name
            */
            __setFontMetrics: un,
            /**
             * adds a new symbol to builtin symbols table
             */
            __defineSymbol: h,
            /**
             * adds a new function to builtin function list,
             * which directly produce parse tree elements
             * and have their own html/mathml builders
             */
            __defineFunction: ee,
            /**
             * adds a new macro to builtin macro list
             */
            __defineMacro: k,
            /**
             * Expose the dom tree node types, which can be useful for type checking nodes.
             *
             * NOTE: This method is not currently recommended for public use.
             * The internal tree representation is unstable and is very likely
             * to change. Use at your own risk.
             */
            __domTree: {
              Span: q0,
              Anchor: je,
              SymbolNode: wt,
              SvgNode: It,
              PathNode: Lt,
              LineNode: J0
            }
          }, Ju = Qu;
          return i = i.default, i;
        }()
      );
    });
  }(Fs)), Fs.exports;
}
(function(a, n) {
  (function(i, u) {
    a.exports = u(J4());
  })(typeof self < "u" ? self : Dr, function(s) {
    return (
      /******/
      function() {
        var i = {
          /***/
          771: (
            /***/
            function(p) {
              p.exports = s;
            }
          )
          /******/
        }, u = {};
        function o(p) {
          var b = u[p];
          if (b !== void 0)
            return b.exports;
          var y = u[p] = {
            /******/
            // no module.id needed
            /******/
            // no module.loaded needed
            /******/
            exports: {}
            /******/
          };
          return i[p](y, y.exports, o), y.exports;
        }
        (function() {
          o.n = function(p) {
            var b = p && p.__esModule ? (
              /******/
              function() {
                return p.default;
              }
            ) : (
              /******/
              function() {
                return p;
              }
            );
            return o.d(b, { a: b }), b;
          };
        })(), function() {
          o.d = function(p, b) {
            for (var y in b)
              o.o(b, y) && !o.o(p, y) && Object.defineProperty(p, y, { enumerable: !0, get: b[y] });
          };
        }(), function() {
          o.o = function(p, b) {
            return Object.prototype.hasOwnProperty.call(p, b);
          };
        }();
        var f = {};
        return function() {
          o.d(f, {
            default: function() {
              return (
                /* binding */
                U
              );
            }
          });
          var p = o(771), b = /* @__PURE__ */ o.n(p);
          const y = function(A, S, M) {
            let I = M, O = 0;
            const H = A.length;
            for (; I < S.length; ) {
              const J = S[I];
              if (O <= 0 && S.slice(I, I + H) === A)
                return I;
              J === "\\" ? I++ : J === "{" ? O++ : J === "}" && O--, I++;
            }
            return -1;
          }, x = function(A) {
            return A.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
          }, C = /^\\begin{/;
          var q = function(A, S) {
            let M;
            const I = [], O = new RegExp("(" + S.map((H) => x(H.left)).join("|") + ")");
            for (; M = A.search(O), M !== -1; ) {
              M > 0 && (I.push({
                type: "text",
                data: A.slice(0, M)
              }), A = A.slice(M));
              const H = S.findIndex((le) => A.startsWith(le.left));
              if (M = y(S[H].right, A, S[H].left.length), M === -1)
                break;
              const J = A.slice(0, M + S[H].right.length), K = C.test(J) ? J : A.slice(S[H].left.length, M);
              I.push({
                type: "math",
                data: K,
                rawData: J,
                display: S[H].display
              }), A = A.slice(M + S[H].right.length);
            }
            return A !== "" && I.push({
              type: "text",
              data: A
            }), I;
          };
          const W = function(A, S) {
            const M = q(A, S.delimiters);
            if (M.length === 1 && M[0].type === "text")
              return null;
            const I = document.createDocumentFragment();
            for (let O = 0; O < M.length; O++)
              if (M[O].type === "text")
                I.appendChild(document.createTextNode(M[O].data));
              else {
                const H = document.createElement("span");
                let J = M[O].data;
                S.displayMode = M[O].display;
                try {
                  S.preProcess && (J = S.preProcess(J)), b().render(J, H, S);
                } catch (K) {
                  if (!(K instanceof b().ParseError))
                    throw K;
                  S.errorCallback("KaTeX auto-render: Failed to parse `" + M[O].data + "` with ", K), I.appendChild(document.createTextNode(M[O].rawData));
                  continue;
                }
                I.appendChild(H);
              }
            return I;
          }, j = function(A, S) {
            for (let M = 0; M < A.childNodes.length; M++) {
              const I = A.childNodes[M];
              if (I.nodeType === 3) {
                let O = I.textContent, H = I.nextSibling, J = 0;
                for (; H && H.nodeType === Node.TEXT_NODE; )
                  O += H.textContent, H = H.nextSibling, J++;
                const K = W(O, S);
                if (K) {
                  for (let le = 0; le < J; le++)
                    I.nextSibling.remove();
                  M += K.childNodes.length - 1, A.replaceChild(K, I);
                } else
                  M += J;
              } else if (I.nodeType === 1) {
                const O = " " + I.className + " ";
                S.ignoredTags.indexOf(I.nodeName.toLowerCase()) === -1 && S.ignoredClasses.every((J) => O.indexOf(" " + J + " ") === -1) && j(I, S);
              }
            }
          };
          var U = function(A, S) {
            if (!A)
              throw new Error("No element provided to render");
            const M = {};
            for (const I in S)
              S.hasOwnProperty(I) && (M[I] = S[I]);
            M.delimiters = M.delimiters || [
              {
                left: "$$",
                right: "$$",
                display: !0
              },
              {
                left: "\\(",
                right: "\\)",
                display: !1
              },
              // LaTeX uses $…$, but it ruins the display of normal `$` in text:
              // {left: "$", right: "$", display: false},
              // $ must come after $$
              // Render AMS environments even if outside $$…$$ delimiters.
              {
                left: "\\begin{equation}",
                right: "\\end{equation}",
                display: !0
              },
              {
                left: "\\begin{align}",
                right: "\\end{align}",
                display: !0
              },
              {
                left: "\\begin{alignat}",
                right: "\\end{alignat}",
                display: !0
              },
              {
                left: "\\begin{gather}",
                right: "\\end{gather}",
                display: !0
              },
              {
                left: "\\begin{CD}",
                right: "\\end{CD}",
                display: !0
              },
              {
                left: "\\[",
                right: "\\]",
                display: !0
              }
            ], M.ignoredTags = M.ignoredTags || ["script", "noscript", "style", "textarea", "pre", "code", "option"], M.ignoredClasses = M.ignoredClasses || [], M.errorCallback = M.errorCallback || console.error, M.macros = M.macros || {}, j(A, M);
          };
        }(), f = f.default, f;
      }()
    );
  });
})(fo);
var $4 = fo.exports;
const eh = /* @__PURE__ */ ho($4);
function Ys() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let Z0 = Ys();
function mo(a) {
  Z0 = a;
}
const po = /[&<>"']/, th = new RegExp(po.source, "g"), go = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, nh = new RegExp(go.source, "g"), rh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Kl = (a) => rh[a];
function Mt(a, n) {
  if (n) {
    if (po.test(a))
      return a.replace(th, Kl);
  } else if (go.test(a))
    return a.replace(nh, Kl);
  return a;
}
const sh = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function ih(a) {
  return a.replace(sh, (n, s) => (s = s.toLowerCase(), s === "colon" ? ":" : s.charAt(0) === "#" ? s.charAt(1) === "x" ? String.fromCharCode(parseInt(s.substring(2), 16)) : String.fromCharCode(+s.substring(1)) : ""));
}
const lh = /(^|[^\[])\^/g;
function Re(a, n) {
  let s = typeof a == "string" ? a : a.source;
  n = n || "";
  const i = {
    replace: (u, o) => {
      let f = typeof o == "string" ? o : o.source;
      return f = f.replace(lh, "$1"), s = s.replace(u, f), i;
    },
    getRegex: () => new RegExp(s, n)
  };
  return i;
}
function Ql(a) {
  try {
    a = encodeURI(a).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return a;
}
const Fn = { exec: () => null };
function Jl(a, n) {
  const s = a.replace(/\|/g, (o, f, p) => {
    let b = !1, y = f;
    for (; --y >= 0 && p[y] === "\\"; )
      b = !b;
    return b ? "|" : " |";
  }), i = s.split(/ \|/);
  let u = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i[i.length - 1].trim() && i.pop(), n)
    if (i.length > n)
      i.splice(n);
    else
      for (; i.length < n; )
        i.push("");
  for (; u < i.length; u++)
    i[u] = i[u].trim().replace(/\\\|/g, "|");
  return i;
}
function ur(a, n, s) {
  const i = a.length;
  if (i === 0)
    return "";
  let u = 0;
  for (; u < i; ) {
    const o = a.charAt(i - u - 1);
    if (o === n && !s)
      u++;
    else if (o !== n && s)
      u++;
    else
      break;
  }
  return a.slice(0, i - u);
}
function ah(a, n) {
  if (a.indexOf(n[1]) === -1)
    return -1;
  let s = 0;
  for (let i = 0; i < a.length; i++)
    if (a[i] === "\\")
      i++;
    else if (a[i] === n[0])
      s++;
    else if (a[i] === n[1] && (s--, s < 0))
      return i;
  return -1;
}
function $l(a, n, s, i) {
  const u = n.href, o = n.title ? Mt(n.title) : null, f = a[1].replace(/\\([\[\]])/g, "$1");
  if (a[0].charAt(0) !== "!") {
    i.state.inLink = !0;
    const p = {
      type: "link",
      raw: s,
      href: u,
      title: o,
      text: f,
      tokens: i.inlineTokens(f)
    };
    return i.state.inLink = !1, p;
  }
  return {
    type: "image",
    raw: s,
    href: u,
    title: o,
    text: Mt(f)
  };
}
function oh(a, n) {
  const s = a.match(/^(\s+)(?:```)/);
  if (s === null)
    return n;
  const i = s[1];
  return n.split(`
`).map((u) => {
    const o = u.match(/^\s+/);
    if (o === null)
      return u;
    const [f] = o;
    return f.length >= i.length ? u.slice(i.length) : u;
  }).join(`
`);
}
class xr {
  // set by the lexer
  constructor(n) {
    He(this, "options");
    He(this, "rules");
    // set by the lexer
    He(this, "lexer");
    this.options = n || Z0;
  }
  space(n) {
    const s = this.rules.block.newline.exec(n);
    if (s && s[0].length > 0)
      return {
        type: "space",
        raw: s[0]
      };
  }
  code(n) {
    const s = this.rules.block.code.exec(n);
    if (s) {
      const i = s[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: s[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? i : ur(i, `
`)
      };
    }
  }
  fences(n) {
    const s = this.rules.block.fences.exec(n);
    if (s) {
      const i = s[0], u = oh(i, s[3] || "");
      return {
        type: "code",
        raw: i,
        lang: s[2] ? s[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : s[2],
        text: u
      };
    }
  }
  heading(n) {
    const s = this.rules.block.heading.exec(n);
    if (s) {
      let i = s[2].trim();
      if (/#$/.test(i)) {
        const u = ur(i, "#");
        (this.options.pedantic || !u || / $/.test(u)) && (i = u.trim());
      }
      return {
        type: "heading",
        raw: s[0],
        depth: s[1].length,
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  hr(n) {
    const s = this.rules.block.hr.exec(n);
    if (s)
      return {
        type: "hr",
        raw: s[0]
      };
  }
  blockquote(n) {
    const s = this.rules.block.blockquote.exec(n);
    if (s) {
      let i = s[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      i = ur(i.replace(/^ *>[ \t]?/gm, ""), `
`);
      const u = this.lexer.state.top;
      this.lexer.state.top = !0;
      const o = this.lexer.blockTokens(i);
      return this.lexer.state.top = u, {
        type: "blockquote",
        raw: s[0],
        tokens: o,
        text: i
      };
    }
  }
  list(n) {
    let s = this.rules.block.list.exec(n);
    if (s) {
      let i = s[1].trim();
      const u = i.length > 1, o = {
        type: "list",
        raw: "",
        ordered: u,
        start: u ? +i.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      i = u ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = u ? i : "[*+-]");
      const f = new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let p = "", b = "", y = !1;
      for (; n; ) {
        let x = !1;
        if (!(s = f.exec(n)) || this.rules.block.hr.test(n))
          break;
        p = s[0], n = n.substring(p.length);
        let C = s[2].split(`
`, 1)[0].replace(/^\t+/, (U) => " ".repeat(3 * U.length)), B = n.split(`
`, 1)[0], q = 0;
        this.options.pedantic ? (q = 2, b = C.trimStart()) : (q = s[2].search(/[^ ]/), q = q > 4 ? 1 : q, b = C.slice(q), q += s[1].length);
        let W = !1;
        if (!C && /^ *$/.test(B) && (p += B + `
`, n = n.substring(B.length + 1), x = !0), !x) {
          const U = new RegExp(`^ {0,${Math.min(3, q - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), A = new RegExp(`^ {0,${Math.min(3, q - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), S = new RegExp(`^ {0,${Math.min(3, q - 1)}}(?:\`\`\`|~~~)`), M = new RegExp(`^ {0,${Math.min(3, q - 1)}}#`);
          for (; n; ) {
            const I = n.split(`
`, 1)[0];
            if (B = I, this.options.pedantic && (B = B.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), S.test(B) || M.test(B) || U.test(B) || A.test(n))
              break;
            if (B.search(/[^ ]/) >= q || !B.trim())
              b += `
` + B.slice(q);
            else {
              if (W || C.search(/[^ ]/) >= 4 || S.test(C) || M.test(C) || A.test(C))
                break;
              b += `
` + B;
            }
            !W && !B.trim() && (W = !0), p += I + `
`, n = n.substring(I.length + 1), C = B.slice(q);
          }
        }
        o.loose || (y ? o.loose = !0 : /\n *\n *$/.test(p) && (y = !0));
        let j = null, G;
        this.options.gfm && (j = /^\[[ xX]\] /.exec(b), j && (G = j[0] !== "[ ] ", b = b.replace(/^\[[ xX]\] +/, ""))), o.items.push({
          type: "list_item",
          raw: p,
          task: !!j,
          checked: G,
          loose: !1,
          text: b,
          tokens: []
        }), o.raw += p;
      }
      o.items[o.items.length - 1].raw = p.trimEnd(), o.items[o.items.length - 1].text = b.trimEnd(), o.raw = o.raw.trimEnd();
      for (let x = 0; x < o.items.length; x++)
        if (this.lexer.state.top = !1, o.items[x].tokens = this.lexer.blockTokens(o.items[x].text, []), !o.loose) {
          const C = o.items[x].tokens.filter((q) => q.type === "space"), B = C.length > 0 && C.some((q) => /\n.*\n/.test(q.raw));
          o.loose = B;
        }
      if (o.loose)
        for (let x = 0; x < o.items.length; x++)
          o.items[x].loose = !0;
      return o;
    }
  }
  html(n) {
    const s = this.rules.block.html.exec(n);
    if (s)
      return {
        type: "html",
        block: !0,
        raw: s[0],
        pre: s[1] === "pre" || s[1] === "script" || s[1] === "style",
        text: s[0]
      };
  }
  def(n) {
    const s = this.rules.block.def.exec(n);
    if (s) {
      const i = s[1].toLowerCase().replace(/\s+/g, " "), u = s[2] ? s[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", o = s[3] ? s[3].substring(1, s[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : s[3];
      return {
        type: "def",
        tag: i,
        raw: s[0],
        href: u,
        title: o
      };
    }
  }
  table(n) {
    const s = this.rules.block.table.exec(n);
    if (!s || !/[:|]/.test(s[2]))
      return;
    const i = Jl(s[1]), u = s[2].replace(/^\||\| *$/g, "").split("|"), o = s[3] && s[3].trim() ? s[3].replace(/\n[ \t]*$/, "").split(`
`) : [], f = {
      type: "table",
      raw: s[0],
      header: [],
      align: [],
      rows: []
    };
    if (i.length === u.length) {
      for (const p of u)
        /^ *-+: *$/.test(p) ? f.align.push("right") : /^ *:-+: *$/.test(p) ? f.align.push("center") : /^ *:-+ *$/.test(p) ? f.align.push("left") : f.align.push(null);
      for (const p of i)
        f.header.push({
          text: p,
          tokens: this.lexer.inline(p)
        });
      for (const p of o)
        f.rows.push(Jl(p, f.header.length).map((b) => ({
          text: b,
          tokens: this.lexer.inline(b)
        })));
      return f;
    }
  }
  lheading(n) {
    const s = this.rules.block.lheading.exec(n);
    if (s)
      return {
        type: "heading",
        raw: s[0],
        depth: s[2].charAt(0) === "=" ? 1 : 2,
        text: s[1],
        tokens: this.lexer.inline(s[1])
      };
  }
  paragraph(n) {
    const s = this.rules.block.paragraph.exec(n);
    if (s) {
      const i = s[1].charAt(s[1].length - 1) === `
` ? s[1].slice(0, -1) : s[1];
      return {
        type: "paragraph",
        raw: s[0],
        text: i,
        tokens: this.lexer.inline(i)
      };
    }
  }
  text(n) {
    const s = this.rules.block.text.exec(n);
    if (s)
      return {
        type: "text",
        raw: s[0],
        text: s[0],
        tokens: this.lexer.inline(s[0])
      };
  }
  escape(n) {
    const s = this.rules.inline.escape.exec(n);
    if (s)
      return {
        type: "escape",
        raw: s[0],
        text: Mt(s[1])
      };
  }
  tag(n) {
    const s = this.rules.inline.tag.exec(n);
    if (s)
      return !this.lexer.state.inLink && /^<a /i.test(s[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(s[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(s[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: s[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: s[0]
      };
  }
  link(n) {
    const s = this.rules.inline.link.exec(n);
    if (s) {
      const i = s[2].trim();
      if (!this.options.pedantic && /^</.test(i)) {
        if (!/>$/.test(i))
          return;
        const f = ur(i.slice(0, -1), "\\");
        if ((i.length - f.length) % 2 === 0)
          return;
      } else {
        const f = ah(s[2], "()");
        if (f > -1) {
          const b = (s[0].indexOf("!") === 0 ? 5 : 4) + s[1].length + f;
          s[2] = s[2].substring(0, f), s[0] = s[0].substring(0, b).trim(), s[3] = "";
        }
      }
      let u = s[2], o = "";
      if (this.options.pedantic) {
        const f = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(u);
        f && (u = f[1], o = f[3]);
      } else
        o = s[3] ? s[3].slice(1, -1) : "";
      return u = u.trim(), /^</.test(u) && (this.options.pedantic && !/>$/.test(i) ? u = u.slice(1) : u = u.slice(1, -1)), $l(s, {
        href: u && u.replace(this.rules.inline.anyPunctuation, "$1"),
        title: o && o.replace(this.rules.inline.anyPunctuation, "$1")
      }, s[0], this.lexer);
    }
  }
  reflink(n, s) {
    let i;
    if ((i = this.rules.inline.reflink.exec(n)) || (i = this.rules.inline.nolink.exec(n))) {
      const u = (i[2] || i[1]).replace(/\s+/g, " "), o = s[u.toLowerCase()];
      if (!o) {
        const f = i[0].charAt(0);
        return {
          type: "text",
          raw: f,
          text: f
        };
      }
      return $l(i, o, i[0], this.lexer);
    }
  }
  emStrong(n, s, i = "") {
    let u = this.rules.inline.emStrongLDelim.exec(n);
    if (!u || u[3] && i.match(/[\p{L}\p{N}]/u))
      return;
    if (!(u[1] || u[2] || "") || !i || this.rules.inline.punctuation.exec(i)) {
      const f = [...u[0]].length - 1;
      let p, b, y = f, x = 0;
      const C = u[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (C.lastIndex = 0, s = s.slice(-1 * n.length + f); (u = C.exec(s)) != null; ) {
        if (p = u[1] || u[2] || u[3] || u[4] || u[5] || u[6], !p)
          continue;
        if (b = [...p].length, u[3] || u[4]) {
          y += b;
          continue;
        } else if ((u[5] || u[6]) && f % 3 && !((f + b) % 3)) {
          x += b;
          continue;
        }
        if (y -= b, y > 0)
          continue;
        b = Math.min(b, b + y + x);
        const B = [...u[0]][0].length, q = n.slice(0, f + u.index + B + b);
        if (Math.min(f, b) % 2) {
          const j = q.slice(1, -1);
          return {
            type: "em",
            raw: q,
            text: j,
            tokens: this.lexer.inlineTokens(j)
          };
        }
        const W = q.slice(2, -2);
        return {
          type: "strong",
          raw: q,
          text: W,
          tokens: this.lexer.inlineTokens(W)
        };
      }
    }
  }
  codespan(n) {
    const s = this.rules.inline.code.exec(n);
    if (s) {
      let i = s[2].replace(/\n/g, " ");
      const u = /[^ ]/.test(i), o = /^ /.test(i) && / $/.test(i);
      return u && o && (i = i.substring(1, i.length - 1)), i = Mt(i, !0), {
        type: "codespan",
        raw: s[0],
        text: i
      };
    }
  }
  br(n) {
    const s = this.rules.inline.br.exec(n);
    if (s)
      return {
        type: "br",
        raw: s[0]
      };
  }
  del(n) {
    const s = this.rules.inline.del.exec(n);
    if (s)
      return {
        type: "del",
        raw: s[0],
        text: s[2],
        tokens: this.lexer.inlineTokens(s[2])
      };
  }
  autolink(n) {
    const s = this.rules.inline.autolink.exec(n);
    if (s) {
      let i, u;
      return s[2] === "@" ? (i = Mt(s[1]), u = "mailto:" + i) : (i = Mt(s[1]), u = i), {
        type: "link",
        raw: s[0],
        text: i,
        href: u,
        tokens: [
          {
            type: "text",
            raw: i,
            text: i
          }
        ]
      };
    }
  }
  url(n) {
    var i;
    let s;
    if (s = this.rules.inline.url.exec(n)) {
      let u, o;
      if (s[2] === "@")
        u = Mt(s[0]), o = "mailto:" + u;
      else {
        let f;
        do
          f = s[0], s[0] = ((i = this.rules.inline._backpedal.exec(s[0])) == null ? void 0 : i[0]) ?? "";
        while (f !== s[0]);
        u = Mt(s[0]), s[1] === "www." ? o = "http://" + s[0] : o = s[0];
      }
      return {
        type: "link",
        raw: s[0],
        text: u,
        href: o,
        tokens: [
          {
            type: "text",
            raw: u,
            text: u
          }
        ]
      };
    }
  }
  inlineText(n) {
    const s = this.rules.inline.text.exec(n);
    if (s) {
      let i;
      return this.lexer.state.inRawBlock ? i = s[0] : i = Mt(s[0]), {
        type: "text",
        raw: s[0],
        text: i
      };
    }
  }
}
const uh = /^(?: *(?:\n|$))+/, ch = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, hh = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, zn = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, fh = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, bo = /(?:[*+-]|\d{1,9}[.)])/, wo = Re(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bo).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Zs = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, dh = /^[^\n]+/, Ks = /(?!\s*\])(?:\\.|[^\[\]\\])+/, mh = Re(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Ks).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), ph = Re(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bo).getRegex(), Tr = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Qs = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, gh = Re("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", Qs).replace("tag", Tr).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), yo = Re(Zs).replace("hr", zn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Tr).getRegex(), bh = Re(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", yo).getRegex(), Js = {
  blockquote: bh,
  code: ch,
  def: mh,
  fences: hh,
  heading: fh,
  hr: zn,
  html: gh,
  lheading: wo,
  list: ph,
  newline: uh,
  paragraph: yo,
  table: Fn,
  text: dh
}, ea = Re("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", zn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Tr).getRegex(), wh = {
  ...Js,
  table: ea,
  paragraph: Re(Zs).replace("hr", zn).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ea).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Tr).getRegex()
}, yh = {
  ...Js,
  html: Re(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Qs).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: Fn,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: Re(Zs).replace("hr", zn).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", wo).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, _o = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, _h = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, ko = /^( {2,}|\\)\n(?!\s*$)/, kh = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Bn = "\\p{P}\\p{S}", Dh = Re(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, Bn).getRegex(), xh = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, vh = Re(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, Bn).getRegex(), Ah = Re("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, Bn).getRegex(), Sh = Re("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, Bn).getRegex(), Eh = Re(/\\([punct])/, "gu").replace(/punct/g, Bn).getRegex(), Fh = Re(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Th = Re(Qs).replace("(?:-->|$)", "-->").getRegex(), Ch = Re("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Th).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), vr = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Mh = Re(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", vr).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Do = Re(/^!?\[(label)\]\[(ref)\]/).replace("label", vr).replace("ref", Ks).getRegex(), xo = Re(/^!?\[(ref)\](?:\[\])?/).replace("ref", Ks).getRegex(), zh = Re("reflink|nolink(?!\\()", "g").replace("reflink", Do).replace("nolink", xo).getRegex(), $s = {
  _backpedal: Fn,
  // only used for GFM url
  anyPunctuation: Eh,
  autolink: Fh,
  blockSkip: xh,
  br: ko,
  code: _h,
  del: Fn,
  emStrongLDelim: vh,
  emStrongRDelimAst: Ah,
  emStrongRDelimUnd: Sh,
  escape: _o,
  link: Mh,
  nolink: xo,
  punctuation: Dh,
  reflink: Do,
  reflinkSearch: zh,
  tag: Ch,
  text: kh,
  url: Fn
}, Bh = {
  ...$s,
  link: Re(/^!?\[(label)\]\((.*?)\)/).replace("label", vr).getRegex(),
  reflink: Re(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", vr).getRegex()
}, Ps = {
  ...$s,
  escape: Re(_o).replace("])", "~|])").getRegex(),
  url: Re(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Nh = {
  ...Ps,
  br: Re(ko).replace("{2,}", "*").getRegex(),
  text: Re(Ps.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, cr = {
  normal: Js,
  gfm: wh,
  pedantic: yh
}, xn = {
  normal: $s,
  gfm: Ps,
  breaks: Nh,
  pedantic: Bh
};
class h0 {
  constructor(n) {
    He(this, "tokens");
    He(this, "options");
    He(this, "state");
    He(this, "tokenizer");
    He(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = n || Z0, this.options.tokenizer = this.options.tokenizer || new xr(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const s = {
      block: cr.normal,
      inline: xn.normal
    };
    this.options.pedantic ? (s.block = cr.pedantic, s.inline = xn.pedantic) : this.options.gfm && (s.block = cr.gfm, this.options.breaks ? s.inline = xn.breaks : s.inline = xn.gfm), this.tokenizer.rules = s;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: cr,
      inline: xn
    };
  }
  /**
   * Static Lex Method
   */
  static lex(n, s) {
    return new h0(s).lex(n);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(n, s) {
    return new h0(s).inlineTokens(n);
  }
  /**
   * Preprocessing
   */
  lex(n) {
    n = n.replace(/\r\n|\r/g, `
`), this.blockTokens(n, this.tokens);
    for (let s = 0; s < this.inlineQueue.length; s++) {
      const i = this.inlineQueue[s];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(n, s = []) {
    this.options.pedantic ? n = n.replace(/\t/g, "    ").replace(/^ +$/gm, "") : n = n.replace(/^( *)(\t+)/gm, (p, b, y) => b + "    ".repeat(y.length));
    let i, u, o, f;
    for (; n; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((p) => (i = p.call({ lexer: this }, n, s)) ? (n = n.substring(i.raw.length), s.push(i), !0) : !1))) {
        if (i = this.tokenizer.space(n)) {
          n = n.substring(i.raw.length), i.raw.length === 1 && s.length > 0 ? s[s.length - 1].raw += `
` : s.push(i);
          continue;
        }
        if (i = this.tokenizer.code(n)) {
          n = n.substring(i.raw.length), u = s[s.length - 1], u && (u.type === "paragraph" || u.type === "text") ? (u.raw += `
` + i.raw, u.text += `
` + i.text, this.inlineQueue[this.inlineQueue.length - 1].src = u.text) : s.push(i);
          continue;
        }
        if (i = this.tokenizer.fences(n)) {
          n = n.substring(i.raw.length), s.push(i);
          continue;
        }
        if (i = this.tokenizer.heading(n)) {
          n = n.substring(i.raw.length), s.push(i);
          continue;
        }
        if (i = this.tokenizer.hr(n)) {
          n = n.substring(i.raw.length), s.push(i);
          continue;
        }
        if (i = this.tokenizer.blockquote(n)) {
          n = n.substring(i.raw.length), s.push(i);
          continue;
        }
        if (i = this.tokenizer.list(n)) {
          n = n.substring(i.raw.length), s.push(i);
          continue;
        }
        if (i = this.tokenizer.html(n)) {
          n = n.substring(i.raw.length), s.push(i);
          continue;
        }
        if (i = this.tokenizer.def(n)) {
          n = n.substring(i.raw.length), u = s[s.length - 1], u && (u.type === "paragraph" || u.type === "text") ? (u.raw += `
` + i.raw, u.text += `
` + i.raw, this.inlineQueue[this.inlineQueue.length - 1].src = u.text) : this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
            href: i.href,
            title: i.title
          });
          continue;
        }
        if (i = this.tokenizer.table(n)) {
          n = n.substring(i.raw.length), s.push(i);
          continue;
        }
        if (i = this.tokenizer.lheading(n)) {
          n = n.substring(i.raw.length), s.push(i);
          continue;
        }
        if (o = n, this.options.extensions && this.options.extensions.startBlock) {
          let p = 1 / 0;
          const b = n.slice(1);
          let y;
          this.options.extensions.startBlock.forEach((x) => {
            y = x.call({ lexer: this }, b), typeof y == "number" && y >= 0 && (p = Math.min(p, y));
          }), p < 1 / 0 && p >= 0 && (o = n.substring(0, p + 1));
        }
        if (this.state.top && (i = this.tokenizer.paragraph(o))) {
          u = s[s.length - 1], f && u.type === "paragraph" ? (u.raw += `
` + i.raw, u.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = u.text) : s.push(i), f = o.length !== n.length, n = n.substring(i.raw.length);
          continue;
        }
        if (i = this.tokenizer.text(n)) {
          n = n.substring(i.raw.length), u = s[s.length - 1], u && u.type === "text" ? (u.raw += `
` + i.raw, u.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = u.text) : s.push(i);
          continue;
        }
        if (n) {
          const p = "Infinite loop on byte: " + n.charCodeAt(0);
          if (this.options.silent) {
            console.error(p);
            break;
          } else
            throw new Error(p);
        }
      }
    return this.state.top = !0, s;
  }
  inline(n, s = []) {
    return this.inlineQueue.push({ src: n, tokens: s }), s;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(n, s = []) {
    let i, u, o, f = n, p, b, y;
    if (this.tokens.links) {
      const x = Object.keys(this.tokens.links);
      if (x.length > 0)
        for (; (p = this.tokenizer.rules.inline.reflinkSearch.exec(f)) != null; )
          x.includes(p[0].slice(p[0].lastIndexOf("[") + 1, -1)) && (f = f.slice(0, p.index) + "[" + "a".repeat(p[0].length - 2) + "]" + f.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (p = this.tokenizer.rules.inline.blockSkip.exec(f)) != null; )
      f = f.slice(0, p.index) + "[" + "a".repeat(p[0].length - 2) + "]" + f.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (p = this.tokenizer.rules.inline.anyPunctuation.exec(f)) != null; )
      f = f.slice(0, p.index) + "++" + f.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; n; )
      if (b || (y = ""), b = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((x) => (i = x.call({ lexer: this }, n, s)) ? (n = n.substring(i.raw.length), s.push(i), !0) : !1))) {
        if (i = this.tokenizer.escape(n)) {
          n = n.substring(i.raw.length), s.push(i);
          continue;
        }
        if (i = this.tokenizer.tag(n)) {
          n = n.substring(i.raw.length), u = s[s.length - 1], u && i.type === "text" && u.type === "text" ? (u.raw += i.raw, u.text += i.text) : s.push(i);
          continue;
        }
        if (i = this.tokenizer.link(n)) {
          n = n.substring(i.raw.length), s.push(i);
          continue;
        }
        if (i = this.tokenizer.reflink(n, this.tokens.links)) {
          n = n.substring(i.raw.length), u = s[s.length - 1], u && i.type === "text" && u.type === "text" ? (u.raw += i.raw, u.text += i.text) : s.push(i);
          continue;
        }
        if (i = this.tokenizer.emStrong(n, f, y)) {
          n = n.substring(i.raw.length), s.push(i);
          continue;
        }
        if (i = this.tokenizer.codespan(n)) {
          n = n.substring(i.raw.length), s.push(i);
          continue;
        }
        if (i = this.tokenizer.br(n)) {
          n = n.substring(i.raw.length), s.push(i);
          continue;
        }
        if (i = this.tokenizer.del(n)) {
          n = n.substring(i.raw.length), s.push(i);
          continue;
        }
        if (i = this.tokenizer.autolink(n)) {
          n = n.substring(i.raw.length), s.push(i);
          continue;
        }
        if (!this.state.inLink && (i = this.tokenizer.url(n))) {
          n = n.substring(i.raw.length), s.push(i);
          continue;
        }
        if (o = n, this.options.extensions && this.options.extensions.startInline) {
          let x = 1 / 0;
          const C = n.slice(1);
          let B;
          this.options.extensions.startInline.forEach((q) => {
            B = q.call({ lexer: this }, C), typeof B == "number" && B >= 0 && (x = Math.min(x, B));
          }), x < 1 / 0 && x >= 0 && (o = n.substring(0, x + 1));
        }
        if (i = this.tokenizer.inlineText(o)) {
          n = n.substring(i.raw.length), i.raw.slice(-1) !== "_" && (y = i.raw.slice(-1)), b = !0, u = s[s.length - 1], u && u.type === "text" ? (u.raw += i.raw, u.text += i.text) : s.push(i);
          continue;
        }
        if (n) {
          const x = "Infinite loop on byte: " + n.charCodeAt(0);
          if (this.options.silent) {
            console.error(x);
            break;
          } else
            throw new Error(x);
        }
      }
    return s;
  }
}
class Ar {
  constructor(n) {
    He(this, "options");
    this.options = n || Z0;
  }
  code(n, s, i) {
    var o;
    const u = (o = (s || "").match(/^\S*/)) == null ? void 0 : o[0];
    return n = n.replace(/\n$/, "") + `
`, u ? '<pre><code class="language-' + Mt(u) + '">' + (i ? n : Mt(n, !0)) + `</code></pre>
` : "<pre><code>" + (i ? n : Mt(n, !0)) + `</code></pre>
`;
  }
  blockquote(n) {
    return `<blockquote>
${n}</blockquote>
`;
  }
  html(n, s) {
    return n;
  }
  heading(n, s, i) {
    return `<h${s}>${n}</h${s}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(n, s, i) {
    const u = s ? "ol" : "ul", o = s && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + u + o + `>
` + n + "</" + u + `>
`;
  }
  listitem(n, s, i) {
    return `<li>${n}</li>
`;
  }
  checkbox(n) {
    return "<input " + (n ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(n) {
    return `<p>${n}</p>
`;
  }
  table(n, s) {
    return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + n + `</thead>
` + s + `</table>
`;
  }
  tablerow(n) {
    return `<tr>
${n}</tr>
`;
  }
  tablecell(n, s) {
    const i = s.header ? "th" : "td";
    return (s.align ? `<${i} align="${s.align}">` : `<${i}>`) + n + `</${i}>
`;
  }
  /**
   * span level renderer
   */
  strong(n) {
    return `<strong>${n}</strong>`;
  }
  em(n) {
    return `<em>${n}</em>`;
  }
  codespan(n) {
    return `<code>${n}</code>`;
  }
  br() {
    return "<br>";
  }
  del(n) {
    return `<del>${n}</del>`;
  }
  link(n, s, i) {
    const u = Ql(n);
    if (u === null)
      return i;
    n = u;
    let o = '<a href="' + n + '"';
    return s && (o += ' title="' + s + '"'), o += ">" + i + "</a>", o;
  }
  image(n, s, i) {
    const u = Ql(n);
    if (u === null)
      return i;
    n = u;
    let o = `<img src="${n}" alt="${i}"`;
    return s && (o += ` title="${s}"`), o += ">", o;
  }
  text(n) {
    return n;
  }
}
class ei {
  // no need for block level renderers
  strong(n) {
    return n;
  }
  em(n) {
    return n;
  }
  codespan(n) {
    return n;
  }
  del(n) {
    return n;
  }
  html(n) {
    return n;
  }
  text(n) {
    return n;
  }
  link(n, s, i) {
    return "" + i;
  }
  image(n, s, i) {
    return "" + i;
  }
  br() {
    return "";
  }
}
class f0 {
  constructor(n) {
    He(this, "options");
    He(this, "renderer");
    He(this, "textRenderer");
    this.options = n || Z0, this.options.renderer = this.options.renderer || new Ar(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new ei();
  }
  /**
   * Static Parse Method
   */
  static parse(n, s) {
    return new f0(s).parse(n);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(n, s) {
    return new f0(s).parseInline(n);
  }
  /**
   * Parse Loop
   */
  parse(n, s = !0) {
    let i = "";
    for (let u = 0; u < n.length; u++) {
      const o = n[u];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
        const f = o, p = this.options.extensions.renderers[f.type].call({ parser: this }, f);
        if (p !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(f.type)) {
          i += p || "";
          continue;
        }
      }
      switch (o.type) {
        case "space":
          continue;
        case "hr": {
          i += this.renderer.hr();
          continue;
        }
        case "heading": {
          const f = o;
          i += this.renderer.heading(this.parseInline(f.tokens), f.depth, ih(this.parseInline(f.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const f = o;
          i += this.renderer.code(f.text, f.lang, !!f.escaped);
          continue;
        }
        case "table": {
          const f = o;
          let p = "", b = "";
          for (let x = 0; x < f.header.length; x++)
            b += this.renderer.tablecell(this.parseInline(f.header[x].tokens), { header: !0, align: f.align[x] });
          p += this.renderer.tablerow(b);
          let y = "";
          for (let x = 0; x < f.rows.length; x++) {
            const C = f.rows[x];
            b = "";
            for (let B = 0; B < C.length; B++)
              b += this.renderer.tablecell(this.parseInline(C[B].tokens), { header: !1, align: f.align[B] });
            y += this.renderer.tablerow(b);
          }
          i += this.renderer.table(p, y);
          continue;
        }
        case "blockquote": {
          const f = o, p = this.parse(f.tokens);
          i += this.renderer.blockquote(p);
          continue;
        }
        case "list": {
          const f = o, p = f.ordered, b = f.start, y = f.loose;
          let x = "";
          for (let C = 0; C < f.items.length; C++) {
            const B = f.items[C], q = B.checked, W = B.task;
            let j = "";
            if (B.task) {
              const G = this.renderer.checkbox(!!q);
              y ? B.tokens.length > 0 && B.tokens[0].type === "paragraph" ? (B.tokens[0].text = G + " " + B.tokens[0].text, B.tokens[0].tokens && B.tokens[0].tokens.length > 0 && B.tokens[0].tokens[0].type === "text" && (B.tokens[0].tokens[0].text = G + " " + B.tokens[0].tokens[0].text)) : B.tokens.unshift({
                type: "text",
                text: G + " "
              }) : j += G + " ";
            }
            j += this.parse(B.tokens, y), x += this.renderer.listitem(j, W, !!q);
          }
          i += this.renderer.list(x, p, b);
          continue;
        }
        case "html": {
          const f = o;
          i += this.renderer.html(f.text, f.block);
          continue;
        }
        case "paragraph": {
          const f = o;
          i += this.renderer.paragraph(this.parseInline(f.tokens));
          continue;
        }
        case "text": {
          let f = o, p = f.tokens ? this.parseInline(f.tokens) : f.text;
          for (; u + 1 < n.length && n[u + 1].type === "text"; )
            f = n[++u], p += `
` + (f.tokens ? this.parseInline(f.tokens) : f.text);
          i += s ? this.renderer.paragraph(p) : p;
          continue;
        }
        default: {
          const f = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent)
            return console.error(f), "";
          throw new Error(f);
        }
      }
    }
    return i;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(n, s) {
    s = s || this.renderer;
    let i = "";
    for (let u = 0; u < n.length; u++) {
      const o = n[u];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
        const f = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (f !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          i += f || "";
          continue;
        }
      }
      switch (o.type) {
        case "escape": {
          const f = o;
          i += s.text(f.text);
          break;
        }
        case "html": {
          const f = o;
          i += s.html(f.text);
          break;
        }
        case "link": {
          const f = o;
          i += s.link(f.href, f.title, this.parseInline(f.tokens, s));
          break;
        }
        case "image": {
          const f = o;
          i += s.image(f.href, f.title, f.text);
          break;
        }
        case "strong": {
          const f = o;
          i += s.strong(this.parseInline(f.tokens, s));
          break;
        }
        case "em": {
          const f = o;
          i += s.em(this.parseInline(f.tokens, s));
          break;
        }
        case "codespan": {
          const f = o;
          i += s.codespan(f.text);
          break;
        }
        case "br": {
          i += s.br();
          break;
        }
        case "del": {
          const f = o;
          i += s.del(this.parseInline(f.tokens, s));
          break;
        }
        case "text": {
          const f = o;
          i += s.text(f.text);
          break;
        }
        default: {
          const f = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent)
            return console.error(f), "";
          throw new Error(f);
        }
      }
    }
    return i;
  }
}
class Tn {
  constructor(n) {
    He(this, "options");
    this.options = n || Z0;
  }
  /**
   * Process markdown before marked
   */
  preprocess(n) {
    return n;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(n) {
    return n;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(n) {
    return n;
  }
}
He(Tn, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var Mn, Hs, Fr, Ao;
class vo {
  constructor(...n) {
    ds(this, Mn);
    ds(this, Fr);
    He(this, "defaults", Ys());
    He(this, "options", this.setOptions);
    He(this, "parse", rr(this, Mn, Hs).call(this, h0.lex, f0.parse));
    He(this, "parseInline", rr(this, Mn, Hs).call(this, h0.lexInline, f0.parseInline));
    He(this, "Parser", f0);
    He(this, "Renderer", Ar);
    He(this, "TextRenderer", ei);
    He(this, "Lexer", h0);
    He(this, "Tokenizer", xr);
    He(this, "Hooks", Tn);
    this.use(...n);
  }
  /**
   * Run callback for every token
   */
  walkTokens(n, s) {
    var u, o;
    let i = [];
    for (const f of n)
      switch (i = i.concat(s.call(this, f)), f.type) {
        case "table": {
          const p = f;
          for (const b of p.header)
            i = i.concat(this.walkTokens(b.tokens, s));
          for (const b of p.rows)
            for (const y of b)
              i = i.concat(this.walkTokens(y.tokens, s));
          break;
        }
        case "list": {
          const p = f;
          i = i.concat(this.walkTokens(p.items, s));
          break;
        }
        default: {
          const p = f;
          (o = (u = this.defaults.extensions) == null ? void 0 : u.childTokens) != null && o[p.type] ? this.defaults.extensions.childTokens[p.type].forEach((b) => {
            const y = p[b].flat(1 / 0);
            i = i.concat(this.walkTokens(y, s));
          }) : p.tokens && (i = i.concat(this.walkTokens(p.tokens, s)));
        }
      }
    return i;
  }
  use(...n) {
    const s = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return n.forEach((i) => {
      const u = { ...i };
      if (u.async = this.defaults.async || u.async || !1, i.extensions && (i.extensions.forEach((o) => {
        if (!o.name)
          throw new Error("extension name required");
        if ("renderer" in o) {
          const f = s.renderers[o.name];
          f ? s.renderers[o.name] = function(...p) {
            let b = o.renderer.apply(this, p);
            return b === !1 && (b = f.apply(this, p)), b;
          } : s.renderers[o.name] = o.renderer;
        }
        if ("tokenizer" in o) {
          if (!o.level || o.level !== "block" && o.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const f = s[o.level];
          f ? f.unshift(o.tokenizer) : s[o.level] = [o.tokenizer], o.start && (o.level === "block" ? s.startBlock ? s.startBlock.push(o.start) : s.startBlock = [o.start] : o.level === "inline" && (s.startInline ? s.startInline.push(o.start) : s.startInline = [o.start]));
        }
        "childTokens" in o && o.childTokens && (s.childTokens[o.name] = o.childTokens);
      }), u.extensions = s), i.renderer) {
        const o = this.defaults.renderer || new Ar(this.defaults);
        for (const f in i.renderer) {
          if (!(f in o))
            throw new Error(`renderer '${f}' does not exist`);
          if (f === "options")
            continue;
          const p = f, b = i.renderer[p], y = o[p];
          o[p] = (...x) => {
            let C = b.apply(o, x);
            return C === !1 && (C = y.apply(o, x)), C || "";
          };
        }
        u.renderer = o;
      }
      if (i.tokenizer) {
        const o = this.defaults.tokenizer || new xr(this.defaults);
        for (const f in i.tokenizer) {
          if (!(f in o))
            throw new Error(`tokenizer '${f}' does not exist`);
          if (["options", "rules", "lexer"].includes(f))
            continue;
          const p = f, b = i.tokenizer[p], y = o[p];
          o[p] = (...x) => {
            let C = b.apply(o, x);
            return C === !1 && (C = y.apply(o, x)), C;
          };
        }
        u.tokenizer = o;
      }
      if (i.hooks) {
        const o = this.defaults.hooks || new Tn();
        for (const f in i.hooks) {
          if (!(f in o))
            throw new Error(`hook '${f}' does not exist`);
          if (f === "options")
            continue;
          const p = f, b = i.hooks[p], y = o[p];
          Tn.passThroughHooks.has(f) ? o[p] = (x) => {
            if (this.defaults.async)
              return Promise.resolve(b.call(o, x)).then((B) => y.call(o, B));
            const C = b.call(o, x);
            return y.call(o, C);
          } : o[p] = (...x) => {
            let C = b.apply(o, x);
            return C === !1 && (C = y.apply(o, x)), C;
          };
        }
        u.hooks = o;
      }
      if (i.walkTokens) {
        const o = this.defaults.walkTokens, f = i.walkTokens;
        u.walkTokens = function(p) {
          let b = [];
          return b.push(f.call(this, p)), o && (b = b.concat(o.call(this, p))), b;
        };
      }
      this.defaults = { ...this.defaults, ...u };
    }), this;
  }
  setOptions(n) {
    return this.defaults = { ...this.defaults, ...n }, this;
  }
  lexer(n, s) {
    return h0.lex(n, s ?? this.defaults);
  }
  parser(n, s) {
    return f0.parse(n, s ?? this.defaults);
  }
}
Mn = new WeakSet(), Hs = function(n, s) {
  return (i, u) => {
    const o = { ...u }, f = { ...this.defaults, ...o };
    this.defaults.async === !0 && o.async === !1 && (f.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), f.async = !0);
    const p = rr(this, Fr, Ao).call(this, !!f.silent, !!f.async);
    if (typeof i > "u" || i === null)
      return p(new Error("marked(): input parameter is undefined or null"));
    if (typeof i != "string")
      return p(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(i) + ", string expected"));
    if (f.hooks && (f.hooks.options = f), f.async)
      return Promise.resolve(f.hooks ? f.hooks.preprocess(i) : i).then((b) => n(b, f)).then((b) => f.hooks ? f.hooks.processAllTokens(b) : b).then((b) => f.walkTokens ? Promise.all(this.walkTokens(b, f.walkTokens)).then(() => b) : b).then((b) => s(b, f)).then((b) => f.hooks ? f.hooks.postprocess(b) : b).catch(p);
    try {
      f.hooks && (i = f.hooks.preprocess(i));
      let b = n(i, f);
      f.hooks && (b = f.hooks.processAllTokens(b)), f.walkTokens && this.walkTokens(b, f.walkTokens);
      let y = s(b, f);
      return f.hooks && (y = f.hooks.postprocess(y)), y;
    } catch (b) {
      return p(b);
    }
  };
}, Fr = new WeakSet(), Ao = function(n, s) {
  return (i) => {
    if (i.message += `
Please report this to https://github.com/markedjs/marked.`, n) {
      const u = "<p>An error occurred:</p><pre>" + Mt(i.message + "", !0) + "</pre>";
      return s ? Promise.resolve(u) : u;
    }
    if (s)
      return Promise.reject(i);
    throw i;
  };
};
const j0 = new vo();
function Ne(a, n) {
  return j0.parse(a, n);
}
Ne.options = Ne.setOptions = function(a) {
  return j0.setOptions(a), Ne.defaults = j0.defaults, mo(Ne.defaults), Ne;
};
Ne.getDefaults = Ys;
Ne.defaults = Z0;
Ne.use = function(...a) {
  return j0.use(...a), Ne.defaults = j0.defaults, mo(Ne.defaults), Ne;
};
Ne.walkTokens = function(a, n) {
  return j0.walkTokens(a, n);
};
Ne.parseInline = j0.parseInline;
Ne.Parser = f0;
Ne.parser = f0.parse;
Ne.Renderer = Ar;
Ne.TextRenderer = ei;
Ne.Lexer = h0;
Ne.lexer = h0.lex;
Ne.Tokenizer = xr;
Ne.Hooks = Tn;
Ne.parse = Ne;
Ne.options;
Ne.setOptions;
Ne.use;
Ne.walkTokens;
Ne.parseInline;
f0.parse;
h0.lex;
function Rh(a) {
  if (typeof a == "function" && (a = {
    highlight: a
  }), !a || typeof a.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof a.langPrefix != "string" && (a.langPrefix = "language-"), {
    async: !!a.async,
    walkTokens(n) {
      if (n.type !== "code")
        return;
      const s = ta(n.lang);
      if (a.async)
        return Promise.resolve(a.highlight(n.text, s, n.lang || "")).then(na(n));
      const i = a.highlight(n.text, s, n.lang || "");
      if (i instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      na(n)(i);
    },
    renderer: {
      code(n, s, i) {
        const u = ta(s), o = u ? ` class="${a.langPrefix}${sa(u)}"` : "";
        return n = n.replace(/\n$/, ""), `<pre><code${o}>${i ? n : sa(n, !0)}
</code></pre>`;
      }
    }
  };
}
function ta(a) {
  return (a || "").match(/\S*/)[0];
}
function na(a) {
  return (n) => {
    typeof n == "string" && n !== a.text && (a.escaped = !0, a.text = n);
  };
}
const So = /[&<>"']/, Ih = new RegExp(So.source, "g"), Eo = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Lh = new RegExp(Eo.source, "g"), Oh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ra = (a) => Oh[a];
function sa(a, n) {
  if (n) {
    if (So.test(a))
      return a.replace(Ih, ra);
  } else if (Eo.test(a))
    return a.replace(Lh, ra);
  return a;
}
const qh = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, Ph = Object.hasOwnProperty;
class Fo {
  /**
   * Create a new slug class.
   */
  constructor() {
    this.occurrences, this.reset();
  }
  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug(n, s) {
    const i = this;
    let u = Hh(n, s === !0);
    const o = u;
    for (; Ph.call(i.occurrences, u); )
      i.occurrences[o]++, u = o + "-" + i.occurrences[o];
    return i.occurrences[u] = 0, u;
  }
  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
}
function Hh(a, n) {
  return typeof a != "string" ? "" : (n || (a = a.toLowerCase()), a.replace(qh, "").replace(/ /g, "-"));
}
let ia, la = [];
function Uh({ prefix: a = "" } = {}) {
  return {
    headerIds: !1,
    // prevent deprecation warning; remove this once headerIds option is removed
    hooks: {
      preprocess(n) {
        return la = [], ia = new Fo(), n;
      }
    },
    renderer: {
      heading(n, s, i) {
        i = i.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "");
        const u = `${a}${ia.slug(i)}`, o = { level: s, text: n, id: u };
        return la.push(o), `<h${s} id="${u}">${n}</h${s}>
`;
      }
    }
  };
}
var To = { exports: {} };
(function(a) {
  var n = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */
  var s = function(i) {
    var u = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, o = 0, f = {}, p = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: i.Prism && i.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: i.Prism && i.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: function A(S) {
          return S instanceof b ? new b(S.type, A(S.content), S.alias) : Array.isArray(S) ? S.map(A) : S.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        },
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: function(A) {
          return Object.prototype.toString.call(A).slice(8, -1);
        },
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: function(A) {
          return A.__id || Object.defineProperty(A, "__id", { value: ++o }), A.__id;
        },
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: function A(S, M) {
          M = M || {};
          var I, O;
          switch (p.util.type(S)) {
            case "Object":
              if (O = p.util.objId(S), M[O])
                return M[O];
              I = /** @type {Record<string, any>} */
              {}, M[O] = I;
              for (var H in S)
                S.hasOwnProperty(H) && (I[H] = A(S[H], M));
              return (
                /** @type {any} */
                I
              );
            case "Array":
              return O = p.util.objId(S), M[O] ? M[O] : (I = [], M[O] = I, /** @type {Array} */
              /** @type {any} */
              S.forEach(function(J, K) {
                I[K] = A(J, M);
              }), /** @type {any} */
              I);
            default:
              return S;
          }
        },
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: function(A) {
          for (; A; ) {
            var S = u.exec(A.className);
            if (S)
              return S[1].toLowerCase();
            A = A.parentElement;
          }
          return "none";
        },
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: function(A, S) {
          A.className = A.className.replace(RegExp(u, "gi"), ""), A.classList.add("language-" + S);
        },
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (I) {
            var A = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(I.stack) || [])[1];
            if (A) {
              var S = document.getElementsByTagName("script");
              for (var M in S)
                if (S[M].src == A)
                  return S[M];
            }
            return null;
          }
        },
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: function(A, S, M) {
          for (var I = "no-" + S; A; ) {
            var O = A.classList;
            if (O.contains(S))
              return !0;
            if (O.contains(I))
              return !1;
            A = A.parentElement;
          }
          return !!M;
        }
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: f,
        plaintext: f,
        text: f,
        txt: f,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: function(A, S) {
          var M = p.util.clone(p.languages[A]);
          for (var I in S)
            M[I] = S[I];
          return M;
        },
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: function(A, S, M, I) {
          I = I || /** @type {any} */
          p.languages;
          var O = I[A], H = {};
          for (var J in O)
            if (O.hasOwnProperty(J)) {
              if (J == S)
                for (var K in M)
                  M.hasOwnProperty(K) && (H[K] = M[K]);
              M.hasOwnProperty(J) || (H[J] = O[J]);
            }
          var le = I[A];
          return I[A] = H, p.languages.DFS(p.languages, function(ce, pe) {
            pe === le && ce != A && (this[ce] = H);
          }), H;
        },
        // Traverse a language definition with Depth First Search
        DFS: function A(S, M, I, O) {
          O = O || {};
          var H = p.util.objId;
          for (var J in S)
            if (S.hasOwnProperty(J)) {
              M.call(S, J, S[J], I || J);
              var K = S[J], le = p.util.type(K);
              le === "Object" && !O[H(K)] ? (O[H(K)] = !0, A(K, M, null, O)) : le === "Array" && !O[H(K)] && (O[H(K)] = !0, A(K, M, J, O));
            }
        }
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: function(A, S) {
        p.highlightAllUnder(document, A, S);
      },
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: function(A, S, M) {
        var I = {
          callback: M,
          container: A,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        p.hooks.run("before-highlightall", I), I.elements = Array.prototype.slice.apply(I.container.querySelectorAll(I.selector)), p.hooks.run("before-all-elements-highlight", I);
        for (var O = 0, H; H = I.elements[O++]; )
          p.highlightElement(H, S === !0, I.callback);
      },
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: function(A, S, M) {
        var I = p.util.getLanguage(A), O = p.languages[I];
        p.util.setLanguage(A, I);
        var H = A.parentElement;
        H && H.nodeName.toLowerCase() === "pre" && p.util.setLanguage(H, I);
        var J = A.textContent, K = {
          element: A,
          language: I,
          grammar: O,
          code: J
        };
        function le(pe) {
          K.highlightedCode = pe, p.hooks.run("before-insert", K), K.element.innerHTML = K.highlightedCode, p.hooks.run("after-highlight", K), p.hooks.run("complete", K), M && M.call(K.element);
        }
        if (p.hooks.run("before-sanity-check", K), H = K.element.parentElement, H && H.nodeName.toLowerCase() === "pre" && !H.hasAttribute("tabindex") && H.setAttribute("tabindex", "0"), !K.code) {
          p.hooks.run("complete", K), M && M.call(K.element);
          return;
        }
        if (p.hooks.run("before-highlight", K), !K.grammar) {
          le(p.util.encode(K.code));
          return;
        }
        if (S && i.Worker) {
          var ce = new Worker(p.filename);
          ce.onmessage = function(pe) {
            le(pe.data);
          }, ce.postMessage(JSON.stringify({
            language: K.language,
            code: K.code,
            immediateClose: !0
          }));
        } else
          le(p.highlight(K.code, K.grammar, K.language));
      },
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: function(A, S, M) {
        var I = {
          code: A,
          grammar: S,
          language: M
        };
        if (p.hooks.run("before-tokenize", I), !I.grammar)
          throw new Error('The language "' + I.language + '" has no grammar.');
        return I.tokens = p.tokenize(I.code, I.grammar), p.hooks.run("after-tokenize", I), b.stringify(p.util.encode(I.tokens), I.language);
      },
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: function(A, S) {
        var M = S.rest;
        if (M) {
          for (var I in M)
            S[I] = M[I];
          delete S.rest;
        }
        var O = new C();
        return B(O, O.head, A), x(A, O, S, O.head, 0), W(O);
      },
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: function(A, S) {
          var M = p.hooks.all;
          M[A] = M[A] || [], M[A].push(S);
        },
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: function(A, S) {
          var M = p.hooks.all[A];
          if (!(!M || !M.length))
            for (var I = 0, O; O = M[I++]; )
              O(S);
        }
      },
      Token: b
    };
    i.Prism = p;
    function b(A, S, M, I) {
      this.type = A, this.content = S, this.alias = M, this.length = (I || "").length | 0;
    }
    b.stringify = function A(S, M) {
      if (typeof S == "string")
        return S;
      if (Array.isArray(S)) {
        var I = "";
        return S.forEach(function(le) {
          I += A(le, M);
        }), I;
      }
      var O = {
        type: S.type,
        content: A(S.content, M),
        tag: "span",
        classes: ["token", S.type],
        attributes: {},
        language: M
      }, H = S.alias;
      H && (Array.isArray(H) ? Array.prototype.push.apply(O.classes, H) : O.classes.push(H)), p.hooks.run("wrap", O);
      var J = "";
      for (var K in O.attributes)
        J += " " + K + '="' + (O.attributes[K] || "").replace(/"/g, "&quot;") + '"';
      return "<" + O.tag + ' class="' + O.classes.join(" ") + '"' + J + ">" + O.content + "</" + O.tag + ">";
    };
    function y(A, S, M, I) {
      A.lastIndex = S;
      var O = A.exec(M);
      if (O && I && O[1]) {
        var H = O[1].length;
        O.index += H, O[0] = O[0].slice(H);
      }
      return O;
    }
    function x(A, S, M, I, O, H) {
      for (var J in M)
        if (!(!M.hasOwnProperty(J) || !M[J])) {
          var K = M[J];
          K = Array.isArray(K) ? K : [K];
          for (var le = 0; le < K.length; ++le) {
            if (H && H.cause == J + "," + le)
              return;
            var ce = K[le], pe = ce.inside, ve = !!ce.lookbehind, Ie = !!ce.greedy, ut = ce.alias;
            if (Ie && !ce.pattern.global) {
              var st = ce.pattern.toString().match(/[imsuy]*$/)[0];
              ce.pattern = RegExp(ce.pattern.source, st + "g");
            }
            for (var mt = ce.pattern || ce, Oe = I.next, $ = O; Oe !== S.tail && !(H && $ >= H.reach); $ += Oe.value.length, Oe = Oe.next) {
              var Fe = Oe.value;
              if (S.length > A.length)
                return;
              if (!(Fe instanceof b)) {
                var V = 1, he;
                if (Ie) {
                  if (he = y(mt, $, A, ve), !he || he.index >= A.length)
                    break;
                  var at = he.index, Ke = he.index + he[0].length, be = $;
                  for (be += Oe.value.length; at >= be; )
                    Oe = Oe.next, be += Oe.value.length;
                  if (be -= Oe.value.length, $ = be, Oe.value instanceof b)
                    continue;
                  for (var ie = Oe; ie !== S.tail && (be < Ke || typeof ie.value == "string"); ie = ie.next)
                    V++, be += ie.value.length;
                  V--, Fe = A.slice($, be), he.index -= $;
                } else if (he = y(mt, 0, Fe, ve), !he)
                  continue;
                var at = he.index, pt = he[0], gt = Fe.slice(0, at), m0 = Fe.slice(at + pt.length), bt = $ + Fe.length;
                H && bt > H.reach && (H.reach = bt);
                var it = Oe.prev;
                gt && (it = B(S, it, gt), $ += gt.length), q(S, it, V);
                var p0 = new b(J, pe ? p.tokenize(pt, pe) : pt, ut, pt);
                if (Oe = B(S, it, p0), m0 && B(S, Oe, m0), V > 1) {
                  var ct = {
                    cause: J + "," + le,
                    reach: bt
                  };
                  x(A, S, M, Oe.prev, $, ct), H && ct.reach > H.reach && (H.reach = ct.reach);
                }
              }
            }
          }
        }
    }
    function C() {
      var A = { value: null, prev: null, next: null }, S = { value: null, prev: A, next: null };
      A.next = S, this.head = A, this.tail = S, this.length = 0;
    }
    function B(A, S, M) {
      var I = S.next, O = { value: M, prev: S, next: I };
      return S.next = O, I.prev = O, A.length++, O;
    }
    function q(A, S, M) {
      for (var I = S.next, O = 0; O < M && I !== A.tail; O++)
        I = I.next;
      S.next = I, I.prev = S, A.length -= O;
    }
    function W(A) {
      for (var S = [], M = A.head.next; M !== A.tail; )
        S.push(M.value), M = M.next;
      return S;
    }
    if (!i.document)
      return i.addEventListener && (p.disableWorkerMessageHandler || i.addEventListener("message", function(A) {
        var S = JSON.parse(A.data), M = S.language, I = S.code, O = S.immediateClose;
        i.postMessage(p.highlight(I, p.languages[M], M)), O && i.close();
      }, !1)), p;
    var j = p.util.currentScript();
    j && (p.filename = j.src, j.hasAttribute("data-manual") && (p.manual = !0));
    function G() {
      p.manual || p.highlightAll();
    }
    if (!p.manual) {
      var U = document.readyState;
      U === "loading" || U === "interactive" && j && j.defer ? document.addEventListener("DOMContentLoaded", G) : window.requestAnimationFrame ? window.requestAnimationFrame(G) : window.setTimeout(G, 16);
    }
    return p;
  }(n);
  a.exports && (a.exports = s), typeof Dr < "u" && (Dr.Prism = s), s.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      // https://www.w3.org/TR/xml/#NT-doctypedecl
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [
              {
                pattern: /^=/,
                alias: "attr-equals"
              },
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: !0
              }
            ]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [
      {
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
      },
      /&#x?[\da-f]{1,8};/i
    ]
  }, s.languages.markup.tag.inside["attr-value"].inside.entity = s.languages.markup.entity, s.languages.markup.doctype.inside["internal-subset"].inside = s.languages.markup, s.hooks.add("wrap", function(i) {
    i.type === "entity" && (i.attributes.title = i.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(s.languages.markup.tag, "addInlined", {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function(u, o) {
      var f = {};
      f["language-" + o] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: s.languages[o]
      }, f.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var p = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: f
        }
      };
      p["language-" + o] = {
        pattern: /[\s\S]+/,
        inside: s.languages[o]
      };
      var b = {};
      b[u] = {
        pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
          return u;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: p
      }, s.languages.insertBefore("markup", "cdata", b);
    }
  }), Object.defineProperty(s.languages.markup.tag, "addAttribute", {
    /**
     * Adds an pattern to highlight languages embedded in HTML attributes.
     *
     * An example of an inlined language is CSS with `style` attributes.
     *
     * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addAttribute('style', 'css');
     */
    value: function(i, u) {
      s.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source + "(?:" + i + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [u, "language-" + u],
                inside: s.languages[u]
              },
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          }
        }
      });
    }
  }), s.languages.html = s.languages.markup, s.languages.mathml = s.languages.markup, s.languages.svg = s.languages.markup, s.languages.xml = s.languages.extend("markup", {}), s.languages.ssml = s.languages.xml, s.languages.atom = s.languages.xml, s.languages.rss = s.languages.xml, function(i) {
    var u = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    i.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + u.source + ")*?" + /(?:;|(?=\s*\{))/.source),
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
          // See rest below
        }
      },
      url: {
        // https://drafts.csswg.org/css-values-3/#urls
        pattern: RegExp("\\burl\\((?:" + u.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + u.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + u.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: u,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, i.languages.css.atrule.inside.rest = i.languages.css;
    var o = i.languages.markup;
    o && (o.tag.addInlined("style", "css"), o.tag.addAttribute("style", "css"));
  }(s), s.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  }, s.languages.javascript = s.languages.extend("clike", {
    "class-name": [
      s.languages.clike["class-name"],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      {
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
      },
      {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source + "(?:" + // constant
        (/NaN|Infinity/.source + "|" + // binary integer
        /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
        /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
        /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
        /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
        /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), s.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, s.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: RegExp(
        // lookbehind
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
        // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
        // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
        // with the only syntax, so we have to define 2 different regex patterns.
        /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
        /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
        /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
      ),
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: s.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [
      {
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: s.languages.javascript
      },
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: s.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: s.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: s.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), s.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: s.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    },
    "string-property": {
      pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
      lookbehind: !0,
      greedy: !0,
      alias: "property"
    }
  }), s.languages.insertBefore("javascript", "operator", {
    "literal-property": {
      pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
      lookbehind: !0,
      alias: "property"
    }
  }), s.languages.markup && (s.languages.markup.tag.addInlined("script", "javascript"), s.languages.markup.tag.addAttribute(
    /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
    "javascript"
  )), s.languages.js = s.languages.javascript, function() {
    if (typeof s > "u" || typeof document > "u")
      return;
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var i = "Loading…", u = function(j, G) {
      return "✖ Error " + j + " while fetching file: " + G;
    }, o = "✖ Error: File does not exist or is empty", f = {
      js: "javascript",
      py: "python",
      rb: "ruby",
      ps1: "powershell",
      psm1: "powershell",
      sh: "bash",
      bat: "batch",
      h: "c",
      tex: "latex"
    }, p = "data-src-status", b = "loading", y = "loaded", x = "failed", C = "pre[data-src]:not([" + p + '="' + y + '"]):not([' + p + '="' + b + '"])';
    function B(j, G, U) {
      var A = new XMLHttpRequest();
      A.open("GET", j, !0), A.onreadystatechange = function() {
        A.readyState == 4 && (A.status < 400 && A.responseText ? G(A.responseText) : A.status >= 400 ? U(u(A.status, A.statusText)) : U(o));
      }, A.send(null);
    }
    function q(j) {
      var G = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(j || "");
      if (G) {
        var U = Number(G[1]), A = G[2], S = G[3];
        return A ? S ? [U, Number(S)] : [U, void 0] : [U, U];
      }
    }
    s.hooks.add("before-highlightall", function(j) {
      j.selector += ", " + C;
    }), s.hooks.add("before-sanity-check", function(j) {
      var G = (
        /** @type {HTMLPreElement} */
        j.element
      );
      if (G.matches(C)) {
        j.code = "", G.setAttribute(p, b);
        var U = G.appendChild(document.createElement("CODE"));
        U.textContent = i;
        var A = G.getAttribute("data-src"), S = j.language;
        if (S === "none") {
          var M = (/\.(\w+)$/.exec(A) || [, "none"])[1];
          S = f[M] || M;
        }
        s.util.setLanguage(U, S), s.util.setLanguage(G, S);
        var I = s.plugins.autoloader;
        I && I.loadLanguages(S), B(
          A,
          function(O) {
            G.setAttribute(p, y);
            var H = q(G.getAttribute("data-range"));
            if (H) {
              var J = O.split(/\r\n?|\n/g), K = H[0], le = H[1] == null ? J.length : H[1];
              K < 0 && (K += J.length), K = Math.max(0, Math.min(K - 1, J.length)), le < 0 && (le += J.length), le = Math.max(0, Math.min(le, J.length)), O = J.slice(K, le).join(`
`), G.hasAttribute("data-start") || G.setAttribute("data-start", String(K + 1));
            }
            U.textContent = O, s.highlightElement(U);
          },
          function(O) {
            G.setAttribute(p, x), U.textContent = O;
          }
        );
      }
    }), s.plugins.fileHighlight = {
      /**
       * Executes the File Highlight plugin for all matching `pre` elements under the given container.
       *
       * Note: Elements which are already loaded or currently loading will not be touched by this method.
       *
       * @param {ParentNode} [container=document]
       */
      highlight: function(G) {
        for (var U = (G || document).querySelectorAll(C), A = 0, S; S = U[A++]; )
          s.highlightElement(S);
      }
    };
    var W = !1;
    s.fileHighlight = function() {
      W || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), W = !0), s.plugins.fileHighlight.highlight.apply(this, arguments);
    };
  }();
})(To);
var Gh = To.exports;
const Ts = /* @__PURE__ */ ho(Gh);
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: !0,
    greedy: !0
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: !0,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: !0,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: !0
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: !0,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: !0
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: !0
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: !0
  },
  decorator: {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: !0,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:False|None|True)\b/,
  number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
(function(a) {
  var n = /\\(?:[^a-z()[\]]|[a-z*]+)/i, s = {
    "equation-command": {
      pattern: n,
      alias: "regex"
    }
  };
  a.languages.latex = {
    comment: /%.*/,
    // the verbatim environment prints whitespace to the document
    cdata: {
      pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
      lookbehind: !0
    },
    /*
     * equations can be between $$ $$ or $ $ or \( \) or \[ \]
     * (all are multiline)
     */
    equation: [
      {
        pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
        inside: s,
        alias: "string"
      },
      {
        pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: !0,
        inside: s,
        alias: "string"
      }
    ],
    /*
     * arguments which are keywords or references are highlighted
     * as keywords
     */
    keyword: {
      pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    url: {
      pattern: /(\\url\{)[^}]+(?=\})/,
      lookbehind: !0
    },
    /*
     * section or chapter headlines are highlighted as bold so that
     * they stand out more
     */
    headline: {
      pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
      lookbehind: !0,
      alias: "class-name"
    },
    function: {
      pattern: n,
      alias: "selector"
    },
    punctuation: /[[\]{}&]/
  }, a.languages.tex = a.languages.latex, a.languages.context = a.languages.latex;
})(Prism);
(function(a) {
  var n = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", s = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: !0,
    alias: "punctuation",
    // this looks reasonably well in all themes
    inside: null
    // see below
  }, i = {
    bash: s,
    environment: {
      pattern: RegExp("\\$" + n),
      alias: "constant"
    },
    variable: [
      // [0]: Arithmetic Environment
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: !0,
        inside: {
          // If there is a $ sign at the beginning highlight $(( and )) as variable
          variable: [
            {
              pattern: /(^\$\(\([\s\S]+)\)\)/,
              lookbehind: !0
            },
            /^\$\(\(/
          ],
          number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
          operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          // If there is no $ sign at the beginning highlight (( and )) as punctuation
          punctuation: /\(\(?|\)\)?|,|;/
        }
      },
      // [1]: Command Substitution
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: !0,
        inside: {
          variable: /^\$\(|^`|\)$|`$/
        }
      },
      // [2]: Brace expansion
      {
        pattern: /\$\{[^}]+\}/,
        greedy: !0,
        inside: {
          operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          punctuation: /[\[\]]/,
          environment: {
            pattern: RegExp("(\\{)" + n),
            lookbehind: !0,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  a.languages.bash = {
    shebang: {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    comment: {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: !0
    },
    "function-name": [
      // a) function foo {
      // b) foo() {
      // c) function foo() {
      // but not “foo {”
      {
        // a) and c)
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: !0,
        alias: "function"
      },
      {
        // b)
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    // Highlight variable names as variables in for and select beginnings.
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: !0
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
      inside: {
        environment: {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + n),
          lookbehind: !0,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: !0
    },
    // Highlight parameter names as variables
    parameter: {
      pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
      alias: "variable",
      lookbehind: !0
    },
    string: [
      // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: !0,
        greedy: !0,
        inside: i
      },
      // Here-document with quotes around the tag
      // → No expansion (so no “inside”).
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          bash: s
        }
      },
      // “Normal” string
      {
        // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: !0,
        greedy: !0,
        inside: i
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: !0,
        greedy: !0
      },
      {
        // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: !0,
        inside: {
          entity: i.entity
        }
      }
    ],
    environment: {
      pattern: RegExp("\\$?" + n),
      alias: "constant"
    },
    variable: i.variable,
    function: {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    keyword: {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    builtin: {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: !0,
      // Alias added to make those easier to distinguish from strings.
      alias: "class-name"
    },
    boolean: {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: !0
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    operator: {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    number: {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: !0
    }
  }, s.inside = a.languages.bash;
  for (var u = [
    "comment",
    "function-name",
    "for-or-select",
    "assign-left",
    "parameter",
    "string",
    "environment",
    "function",
    "keyword",
    "builtin",
    "boolean",
    "file-descriptor",
    "operator",
    "punctuation",
    "number"
  ], o = i.variable[1].inside, f = 0; f < u.length; f++)
    o[u[f]] = a.languages.bash[u[f]];
  a.languages.sh = a.languages.bash, a.languages.shell = a.languages.bash;
})(Prism);
const Vh = '<svg class="md-link-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg>', Wh = `<svg
xmlns="http://www.w3.org/2000/svg"
width="100%"
height="100%"
viewBox="0 0 32 32"
><path
  fill="currentColor"
  d="M28 10v18H10V10h18m0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Z"
/><path fill="currentColor" d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z" /></svg>`, jh = `<svg
xmlns="http://www.w3.org/2000/svg"
width="100%"
height="100%"
viewBox="0 0 24 24"
fill="none"
stroke="currentColor"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>`, aa = `<button title="copy" class="copy_code_button">
<span class="copy-text">${Wh}</span>
<span class="check">${jh}</span>
</button>`, Co = /[&<>"']/, Xh = new RegExp(Co.source, "g"), Mo = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Yh = new RegExp(Mo.source, "g"), Zh = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, oa = (a) => Zh[a] || "";
function Cs(a, n) {
  if (n) {
    if (Co.test(a))
      return a.replace(Xh, oa);
  } else if (Mo.test(a))
    return a.replace(Yh, oa);
  return a;
}
const Kh = {
  code(a, n, s) {
    var u;
    const i = ((u = (n ?? "").match(/\S*/)) == null ? void 0 : u[0]) ?? "";
    return a = a.replace(/\n$/, "") + `
`, i ? '<div class="code_wrap">' + aa + '<pre><code class="language-' + Cs(i) + '">' + (s ? a : Cs(a, !0)) + `</code></pre></div>
` : '<div class="code_wrap">' + aa + "<pre><code>" + (s ? a : Cs(a, !0)) + `</code></pre></div>
`;
  }
}, Qh = new Fo();
function Jh({
  header_links: a,
  line_breaks: n
}) {
  const s = new vo();
  return s.use(
    {
      gfm: !0,
      pedantic: !1,
      breaks: n
    },
    Rh({
      highlight: (i, u) => Ts.languages[u] ? Ts.highlight(i, Ts.languages[u], u) : i
    }),
    { renderer: Kh }
  ), a && (s.use(Uh()), s.use({
    extensions: [
      {
        name: "heading",
        level: "block",
        renderer(i) {
          const u = i.raw.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, ""), o = "h" + Qh.slug(u), f = i.depth, p = this.parser.parseInline(i.tokens);
          return `<h${f} id="${o}"><a class="md-header-anchor" href="#${o}">${Vh}</a>${p}</h${f}>
`;
        }
      }
    ]
  })), s;
}
const {
  HtmlTag: $h,
  SvelteComponent: e2,
  attr: t2,
  binding_callbacks: n2,
  detach: ti,
  element: r2,
  empty: s2,
  init: i2,
  insert: ni,
  noop: ua,
  safe_not_equal: l2,
  set_data: a2,
  text: o2,
  toggle_class: hr
} = window.__gradio__svelte__internal, { afterUpdate: u2 } = window.__gradio__svelte__internal;
function c2(a) {
  let n;
  return {
    c() {
      n = o2(
        /*html*/
        a[3]
      );
    },
    m(s, i) {
      ni(s, n, i);
    },
    p(s, i) {
      i & /*html*/
      8 && a2(
        n,
        /*html*/
        s[3]
      );
    },
    d(s) {
      s && ti(n);
    }
  };
}
function h2(a) {
  let n, s;
  return {
    c() {
      n = new $h(!1), s = s2(), n.a = s;
    },
    m(i, u) {
      n.m(
        /*html*/
        a[3],
        i,
        u
      ), ni(i, s, u);
    },
    p(i, u) {
      u & /*html*/
      8 && n.p(
        /*html*/
        i[3]
      );
    },
    d(i) {
      i && (ti(s), n.d());
    }
  };
}
function f2(a) {
  let n;
  function s(o, f) {
    return (
      /*render_markdown*/
      o[1] ? h2 : c2
    );
  }
  let i = s(a), u = i(a);
  return {
    c() {
      n = r2("span"), u.c(), t2(n, "class", "md svelte-jhaueu"), hr(
        n,
        "chatbot",
        /*chatbot*/
        a[0]
      ), hr(
        n,
        "prose",
        /*render_markdown*/
        a[1]
      );
    },
    m(o, f) {
      ni(o, n, f), u.m(n, null), a[9](n);
    },
    p(o, [f]) {
      i === (i = s(o)) && u ? u.p(o, f) : (u.d(1), u = i(o), u && (u.c(), u.m(n, null))), f & /*chatbot*/
      1 && hr(
        n,
        "chatbot",
        /*chatbot*/
        o[0]
      ), f & /*render_markdown*/
      2 && hr(
        n,
        "prose",
        /*render_markdown*/
        o[1]
      );
    },
    i: ua,
    o: ua,
    d(o) {
      o && ti(n), u.d(), a[9](null);
    }
  };
}
function d2(a, n, s) {
  var i = this && this.__awaiter || function(A, S, M, I) {
    function O(H) {
      return H instanceof M ? H : new M(function(J) {
        J(H);
      });
    }
    return new (M || (M = Promise))(function(H, J) {
      function K(pe) {
        try {
          ce(I.next(pe));
        } catch (ve) {
          J(ve);
        }
      }
      function le(pe) {
        try {
          ce(I.throw(pe));
        } catch (ve) {
          J(ve);
        }
      }
      function ce(pe) {
        pe.done ? H(pe.value) : O(pe.value).then(K, le);
      }
      ce((I = I.apply(A, S || [])).next());
    });
  };
  let { chatbot: u = !0 } = n, { message: o } = n, { sanitize_html: f = !0 } = n, { latex_delimiters: p = [] } = n, { render_markdown: b = !0 } = n, { line_breaks: y = !0 } = n, { header_links: x = !1 } = n, C, B;
  const q = Jh({ header_links: x, line_breaks: y }), W = (A) => {
    try {
      return !!A && new URL(A, location.href).origin !== location.origin;
    } catch {
      return !1;
    }
  };
  Yl.addHook("afterSanitizeAttributes", function(A) {
    "target" in A && W(A.getAttribute("href")) && (A.setAttribute("target", "_blank"), A.setAttribute("rel", "noopener noreferrer"));
  });
  function j(A) {
    return b && (A = q.parse(A)), f && (A = Yl.sanitize(A)), A;
  }
  function G(A) {
    return i(this, void 0, void 0, function* () {
      p.length > 0 && A && p.some((M) => A.includes(M.left) && A.includes(M.right)) && eh(C, {
        delimiters: p,
        throwOnError: !1
      });
    });
  }
  u2(() => G(o));
  function U(A) {
    n2[A ? "unshift" : "push"](() => {
      C = A, s(2, C);
    });
  }
  return a.$$set = (A) => {
    "chatbot" in A && s(0, u = A.chatbot), "message" in A && s(4, o = A.message), "sanitize_html" in A && s(5, f = A.sanitize_html), "latex_delimiters" in A && s(6, p = A.latex_delimiters), "render_markdown" in A && s(1, b = A.render_markdown), "line_breaks" in A && s(7, y = A.line_breaks), "header_links" in A && s(8, x = A.header_links);
  }, a.$$.update = () => {
    a.$$.dirty & /*message*/
    16 && (o && o.trim() ? s(3, B = j(o)) : s(3, B = ""));
  }, [
    u,
    b,
    C,
    B,
    o,
    f,
    p,
    y,
    x,
    U
  ];
}
class Cr extends e2 {
  constructor(n) {
    super(), i2(this, n, d2, f2, l2, {
      chatbot: 0,
      message: 4,
      sanitize_html: 5,
      latex_delimiters: 6,
      render_markdown: 1,
      line_breaks: 7,
      header_links: 8
    });
  }
}
function ln(a) {
  let n = ["", "k", "M", "G", "T", "P", "E", "Z"], s = 0;
  for (; a > 1e3 && s < n.length - 1; )
    a /= 1e3, s++;
  let i = n[s];
  return (Number.isInteger(a) ? a : a.toFixed(1)) + i;
}
function br() {
}
function m2(a, n) {
  return a != a ? n == n : a !== n || a && typeof a == "object" || typeof a == "function";
}
const zo = typeof window < "u";
let ca = zo ? () => window.performance.now() : () => Date.now(), Bo = zo ? (a) => requestAnimationFrame(a) : br;
const an = /* @__PURE__ */ new Set();
function No(a) {
  an.forEach((n) => {
    n.c(a) || (an.delete(n), n.f());
  }), an.size !== 0 && Bo(No);
}
function p2(a) {
  let n;
  return an.size === 0 && Bo(No), {
    promise: new Promise((s) => {
      an.add(n = {
        c: a,
        f: s
      });
    }),
    abort() {
      an.delete(n);
    }
  };
}
const rn = [];
function g2(a, n = br) {
  let s;
  const i = /* @__PURE__ */ new Set();
  function u(p) {
    if (m2(a, p) && (a = p, s)) {
      const b = !rn.length;
      for (const y of i)
        y[1](), rn.push(y, a);
      if (b) {
        for (let y = 0; y < rn.length; y += 2)
          rn[y][0](rn[y + 1]);
        rn.length = 0;
      }
    }
  }
  function o(p) {
    u(p(a));
  }
  function f(p, b = br) {
    const y = [p, b];
    return i.add(y), i.size === 1 && (s = n(u, o) || br), p(a), () => {
      i.delete(y), i.size === 0 && s && (s(), s = null);
    };
  }
  return {
    set: u,
    update: o,
    subscribe: f
  };
}
function ha(a) {
  return Object.prototype.toString.call(a) === "[object Date]";
}
function Us(a, n, s, i) {
  if (typeof s == "number" || ha(s)) {
    const u = i - s, o = (s - n) / (a.dt || 1 / 60), f = a.opts.stiffness * u, p = a.opts.damping * o, b = (f - p) * a.inv_mass, y = (o + b) * a.dt;
    return Math.abs(y) < a.opts.precision && Math.abs(u) < a.opts.precision ? i : (a.settled = !1, ha(s) ? new Date(s.getTime() + y) : s + y);
  } else {
    if (Array.isArray(s))
      return s.map((u, o) => Us(a, n[o], s[o], i[o]));
    if (typeof s == "object") {
      const u = {};
      for (const o in s)
        u[o] = Us(a, n[o], s[o], i[o]);
      return u;
    } else
      throw new Error(`Cannot spring ${typeof s} values`);
  }
}
function fa(a, n = {}) {
  const s = g2(a), {
    stiffness: i = 0.15,
    damping: u = 0.8,
    precision: o = 0.01
  } = n;
  let f, p, b, y = a, x = a, C = 1, B = 0, q = !1;
  function W(G, U = {}) {
    x = G;
    const A = b = {};
    return a == null || U.hard || j.stiffness >= 1 && j.damping >= 1 ? (q = !0, f = ca(), y = G, s.set(a = x), Promise.resolve()) : (U.soft && (B = 1 / ((U.soft === !0 ? 0.5 : +U.soft) * 60), C = 0), p || (f = ca(), q = !1, p = p2((S) => {
      if (q)
        return q = !1, p = null, !1;
      C = Math.min(C + B, 1);
      const M = {
        inv_mass: C,
        opts: j,
        settled: !0,
        dt: (S - f) * 60 / 1e3
      }, I = Us(M, y, a, x);
      return f = S, y = a, s.set(a = I), M.settled && (p = null), !M.settled;
    })), new Promise((S) => {
      p.promise.then(() => {
        A === b && S();
      });
    }));
  }
  const j = {
    set: W,
    update: (G, U) => W(G(x, a), U),
    subscribe: s.subscribe,
    stiffness: i,
    damping: u,
    precision: o
  };
  return j;
}
const {
  SvelteComponent: b2,
  append: Qt,
  attr: Ee,
  component_subscribe: da,
  detach: w2,
  element: y2,
  init: _2,
  insert: k2,
  noop: ma,
  safe_not_equal: D2,
  set_style: fr,
  svg_element: Jt,
  toggle_class: pa
} = window.__gradio__svelte__internal, { onMount: x2 } = window.__gradio__svelte__internal;
function v2(a) {
  let n, s, i, u, o, f, p, b, y, x, C, B;
  return {
    c() {
      n = y2("div"), s = Jt("svg"), i = Jt("g"), u = Jt("path"), o = Jt("path"), f = Jt("path"), p = Jt("path"), b = Jt("g"), y = Jt("path"), x = Jt("path"), C = Jt("path"), B = Jt("path"), Ee(u, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), Ee(u, "fill", "#FF7C00"), Ee(u, "fill-opacity", "0.4"), Ee(u, "class", "svelte-43sxxs"), Ee(o, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), Ee(o, "fill", "#FF7C00"), Ee(o, "class", "svelte-43sxxs"), Ee(f, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), Ee(f, "fill", "#FF7C00"), Ee(f, "fill-opacity", "0.4"), Ee(f, "class", "svelte-43sxxs"), Ee(p, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), Ee(p, "fill", "#FF7C00"), Ee(p, "class", "svelte-43sxxs"), fr(i, "transform", "translate(" + /*$top*/
      a[1][0] + "px, " + /*$top*/
      a[1][1] + "px)"), Ee(y, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), Ee(y, "fill", "#FF7C00"), Ee(y, "fill-opacity", "0.4"), Ee(y, "class", "svelte-43sxxs"), Ee(x, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), Ee(x, "fill", "#FF7C00"), Ee(x, "class", "svelte-43sxxs"), Ee(C, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), Ee(C, "fill", "#FF7C00"), Ee(C, "fill-opacity", "0.4"), Ee(C, "class", "svelte-43sxxs"), Ee(B, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), Ee(B, "fill", "#FF7C00"), Ee(B, "class", "svelte-43sxxs"), fr(b, "transform", "translate(" + /*$bottom*/
      a[2][0] + "px, " + /*$bottom*/
      a[2][1] + "px)"), Ee(s, "viewBox", "-1200 -1200 3000 3000"), Ee(s, "fill", "none"), Ee(s, "xmlns", "http://www.w3.org/2000/svg"), Ee(s, "class", "svelte-43sxxs"), Ee(n, "class", "svelte-43sxxs"), pa(
        n,
        "margin",
        /*margin*/
        a[0]
      );
    },
    m(q, W) {
      k2(q, n, W), Qt(n, s), Qt(s, i), Qt(i, u), Qt(i, o), Qt(i, f), Qt(i, p), Qt(s, b), Qt(b, y), Qt(b, x), Qt(b, C), Qt(b, B);
    },
    p(q, [W]) {
      W & /*$top*/
      2 && fr(i, "transform", "translate(" + /*$top*/
      q[1][0] + "px, " + /*$top*/
      q[1][1] + "px)"), W & /*$bottom*/
      4 && fr(b, "transform", "translate(" + /*$bottom*/
      q[2][0] + "px, " + /*$bottom*/
      q[2][1] + "px)"), W & /*margin*/
      1 && pa(
        n,
        "margin",
        /*margin*/
        q[0]
      );
    },
    i: ma,
    o: ma,
    d(q) {
      q && w2(n);
    }
  };
}
function A2(a, n, s) {
  let i, u;
  var o = this && this.__awaiter || function(q, W, j, G) {
    function U(A) {
      return A instanceof j ? A : new j(function(S) {
        S(A);
      });
    }
    return new (j || (j = Promise))(function(A, S) {
      function M(H) {
        try {
          O(G.next(H));
        } catch (J) {
          S(J);
        }
      }
      function I(H) {
        try {
          O(G.throw(H));
        } catch (J) {
          S(J);
        }
      }
      function O(H) {
        H.done ? A(H.value) : U(H.value).then(M, I);
      }
      O((G = G.apply(q, W || [])).next());
    });
  };
  let { margin: f = !0 } = n;
  const p = fa([0, 0]);
  da(a, p, (q) => s(1, i = q));
  const b = fa([0, 0]);
  da(a, b, (q) => s(2, u = q));
  let y;
  function x() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([p.set([125, 140]), b.set([-125, -140])]), yield Promise.all([p.set([-125, 140]), b.set([125, -140])]), yield Promise.all([p.set([-125, 0]), b.set([125, -0])]), yield Promise.all([p.set([125, 0]), b.set([-125, 0])]);
    });
  }
  function C() {
    return o(this, void 0, void 0, function* () {
      yield x(), y || C();
    });
  }
  function B() {
    return o(this, void 0, void 0, function* () {
      yield Promise.all([p.set([125, 0]), b.set([-125, 0])]), C();
    });
  }
  return x2(() => (B(), () => y = !0)), a.$$set = (q) => {
    "margin" in q && s(0, f = q.margin);
  }, [f, i, u, p, b];
}
class S2 extends b2 {
  constructor(n) {
    super(), _2(this, n, A2, v2, D2, { margin: 0 });
  }
}
const {
  SvelteComponent: E2,
  append: W0,
  attr: e0,
  binding_callbacks: ga,
  check_outros: Ro,
  create_component: Io,
  create_slot: F2,
  destroy_component: Lo,
  destroy_each: Oo,
  detach: fe,
  element: d0,
  empty: on,
  ensure_array_like: Sr,
  get_all_dirty_from_scope: T2,
  get_slot_changes: C2,
  group_outros: qo,
  init: M2,
  insert: de,
  mount_component: Po,
  noop: Gs,
  safe_not_equal: z2,
  set_data: Wt,
  set_style: L0,
  space: t0,
  text: We,
  toggle_class: Gt,
  transition_in: X0,
  transition_out: Y0,
  update_slot_base: B2
} = window.__gradio__svelte__internal, { tick: N2 } = window.__gradio__svelte__internal, { onDestroy: R2 } = window.__gradio__svelte__internal, { createEventDispatcher: I2 } = window.__gradio__svelte__internal, L2 = (a) => ({}), ba = (a) => ({});
function wa(a, n, s) {
  const i = a.slice();
  return i[41] = n[s], i[43] = s, i;
}
function ya(a, n, s) {
  const i = a.slice();
  return i[41] = n[s], i;
}
function O2(a) {
  let n, s, i, u, o = (
    /*i18n*/
    a[1]("common.error") + ""
  ), f, p, b;
  s = new so({
    props: {
      Icon: mc,
      label: (
        /*i18n*/
        a[1]("common.clear")
      ),
      disabled: !1
    }
  }), s.$on(
    "click",
    /*click_handler*/
    a[32]
  );
  const y = (
    /*#slots*/
    a[30].error
  ), x = F2(
    y,
    a,
    /*$$scope*/
    a[29],
    ba
  );
  return {
    c() {
      n = d0("div"), Io(s.$$.fragment), i = t0(), u = d0("span"), f = We(o), p = t0(), x && x.c(), e0(n, "class", "clear-status svelte-vopvsi"), e0(u, "class", "error svelte-vopvsi");
    },
    m(C, B) {
      de(C, n, B), Po(s, n, null), de(C, i, B), de(C, u, B), W0(u, f), de(C, p, B), x && x.m(C, B), b = !0;
    },
    p(C, B) {
      const q = {};
      B[0] & /*i18n*/
      2 && (q.label = /*i18n*/
      C[1]("common.clear")), s.$set(q), (!b || B[0] & /*i18n*/
      2) && o !== (o = /*i18n*/
      C[1]("common.error") + "") && Wt(f, o), x && x.p && (!b || B[0] & /*$$scope*/
      536870912) && B2(
        x,
        y,
        C,
        /*$$scope*/
        C[29],
        b ? C2(
          y,
          /*$$scope*/
          C[29],
          B,
          L2
        ) : T2(
          /*$$scope*/
          C[29]
        ),
        ba
      );
    },
    i(C) {
      b || (X0(s.$$.fragment, C), X0(x, C), b = !0);
    },
    o(C) {
      Y0(s.$$.fragment, C), Y0(x, C), b = !1;
    },
    d(C) {
      C && (fe(n), fe(i), fe(u), fe(p)), Lo(s), x && x.d(C);
    }
  };
}
function q2(a) {
  let n, s, i, u, o, f, p, b, y, x = (
    /*variant*/
    a[8] === "default" && /*show_eta_bar*/
    a[18] && /*show_progress*/
    a[6] === "full" && _a(a)
  );
  function C(S, M) {
    if (
      /*progress*/
      S[7]
    )
      return U2;
    if (
      /*queue_position*/
      S[2] !== null && /*queue_size*/
      S[3] !== void 0 && /*queue_position*/
      S[2] >= 0
    )
      return H2;
    if (
      /*queue_position*/
      S[2] === 0
    )
      return P2;
  }
  let B = C(a), q = B && B(a), W = (
    /*timer*/
    a[5] && xa(a)
  );
  const j = [j2, W2], G = [];
  function U(S, M) {
    return (
      /*last_progress_level*/
      S[15] != null ? 0 : (
        /*show_progress*/
        S[6] === "full" ? 1 : -1
      )
    );
  }
  ~(o = U(a)) && (f = G[o] = j[o](a));
  let A = !/*timer*/
  a[5] && Ca(a);
  return {
    c() {
      x && x.c(), n = t0(), s = d0("div"), q && q.c(), i = t0(), W && W.c(), u = t0(), f && f.c(), p = t0(), A && A.c(), b = on(), e0(s, "class", "progress-text svelte-vopvsi"), Gt(
        s,
        "meta-text-center",
        /*variant*/
        a[8] === "center"
      ), Gt(
        s,
        "meta-text",
        /*variant*/
        a[8] === "default"
      );
    },
    m(S, M) {
      x && x.m(S, M), de(S, n, M), de(S, s, M), q && q.m(s, null), W0(s, i), W && W.m(s, null), de(S, u, M), ~o && G[o].m(S, M), de(S, p, M), A && A.m(S, M), de(S, b, M), y = !0;
    },
    p(S, M) {
      /*variant*/
      S[8] === "default" && /*show_eta_bar*/
      S[18] && /*show_progress*/
      S[6] === "full" ? x ? x.p(S, M) : (x = _a(S), x.c(), x.m(n.parentNode, n)) : x && (x.d(1), x = null), B === (B = C(S)) && q ? q.p(S, M) : (q && q.d(1), q = B && B(S), q && (q.c(), q.m(s, i))), /*timer*/
      S[5] ? W ? W.p(S, M) : (W = xa(S), W.c(), W.m(s, null)) : W && (W.d(1), W = null), (!y || M[0] & /*variant*/
      256) && Gt(
        s,
        "meta-text-center",
        /*variant*/
        S[8] === "center"
      ), (!y || M[0] & /*variant*/
      256) && Gt(
        s,
        "meta-text",
        /*variant*/
        S[8] === "default"
      );
      let I = o;
      o = U(S), o === I ? ~o && G[o].p(S, M) : (f && (qo(), Y0(G[I], 1, 1, () => {
        G[I] = null;
      }), Ro()), ~o ? (f = G[o], f ? f.p(S, M) : (f = G[o] = j[o](S), f.c()), X0(f, 1), f.m(p.parentNode, p)) : f = null), /*timer*/
      S[5] ? A && (A.d(1), A = null) : A ? A.p(S, M) : (A = Ca(S), A.c(), A.m(b.parentNode, b));
    },
    i(S) {
      y || (X0(f), y = !0);
    },
    o(S) {
      Y0(f), y = !1;
    },
    d(S) {
      S && (fe(n), fe(s), fe(u), fe(p), fe(b)), x && x.d(S), q && q.d(), W && W.d(), ~o && G[o].d(S), A && A.d(S);
    }
  };
}
function _a(a) {
  let n, s = `translateX(${/*eta_level*/
  (a[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      n = d0("div"), e0(n, "class", "eta-bar svelte-vopvsi"), L0(n, "transform", s);
    },
    m(i, u) {
      de(i, n, u);
    },
    p(i, u) {
      u[0] & /*eta_level*/
      131072 && s !== (s = `translateX(${/*eta_level*/
      (i[17] || 0) * 100 - 100}%)`) && L0(n, "transform", s);
    },
    d(i) {
      i && fe(n);
    }
  };
}
function P2(a) {
  let n;
  return {
    c() {
      n = We("processing |");
    },
    m(s, i) {
      de(s, n, i);
    },
    p: Gs,
    d(s) {
      s && fe(n);
    }
  };
}
function H2(a) {
  let n, s = (
    /*queue_position*/
    a[2] + 1 + ""
  ), i, u, o, f;
  return {
    c() {
      n = We("queue: "), i = We(s), u = We("/"), o = We(
        /*queue_size*/
        a[3]
      ), f = We(" |");
    },
    m(p, b) {
      de(p, n, b), de(p, i, b), de(p, u, b), de(p, o, b), de(p, f, b);
    },
    p(p, b) {
      b[0] & /*queue_position*/
      4 && s !== (s = /*queue_position*/
      p[2] + 1 + "") && Wt(i, s), b[0] & /*queue_size*/
      8 && Wt(
        o,
        /*queue_size*/
        p[3]
      );
    },
    d(p) {
      p && (fe(n), fe(i), fe(u), fe(o), fe(f));
    }
  };
}
function U2(a) {
  let n, s = Sr(
    /*progress*/
    a[7]
  ), i = [];
  for (let u = 0; u < s.length; u += 1)
    i[u] = Da(ya(a, s, u));
  return {
    c() {
      for (let u = 0; u < i.length; u += 1)
        i[u].c();
      n = on();
    },
    m(u, o) {
      for (let f = 0; f < i.length; f += 1)
        i[f] && i[f].m(u, o);
      de(u, n, o);
    },
    p(u, o) {
      if (o[0] & /*progress*/
      128) {
        s = Sr(
          /*progress*/
          u[7]
        );
        let f;
        for (f = 0; f < s.length; f += 1) {
          const p = ya(u, s, f);
          i[f] ? i[f].p(p, o) : (i[f] = Da(p), i[f].c(), i[f].m(n.parentNode, n));
        }
        for (; f < i.length; f += 1)
          i[f].d(1);
        i.length = s.length;
      }
    },
    d(u) {
      u && fe(n), Oo(i, u);
    }
  };
}
function ka(a) {
  let n, s = (
    /*p*/
    a[41].unit + ""
  ), i, u, o = " ", f;
  function p(x, C) {
    return (
      /*p*/
      x[41].length != null ? V2 : G2
    );
  }
  let b = p(a), y = b(a);
  return {
    c() {
      y.c(), n = t0(), i = We(s), u = We(" | "), f = We(o);
    },
    m(x, C) {
      y.m(x, C), de(x, n, C), de(x, i, C), de(x, u, C), de(x, f, C);
    },
    p(x, C) {
      b === (b = p(x)) && y ? y.p(x, C) : (y.d(1), y = b(x), y && (y.c(), y.m(n.parentNode, n))), C[0] & /*progress*/
      128 && s !== (s = /*p*/
      x[41].unit + "") && Wt(i, s);
    },
    d(x) {
      x && (fe(n), fe(i), fe(u), fe(f)), y.d(x);
    }
  };
}
function G2(a) {
  let n = ln(
    /*p*/
    a[41].index || 0
  ) + "", s;
  return {
    c() {
      s = We(n);
    },
    m(i, u) {
      de(i, s, u);
    },
    p(i, u) {
      u[0] & /*progress*/
      128 && n !== (n = ln(
        /*p*/
        i[41].index || 0
      ) + "") && Wt(s, n);
    },
    d(i) {
      i && fe(s);
    }
  };
}
function V2(a) {
  let n = ln(
    /*p*/
    a[41].index || 0
  ) + "", s, i, u = ln(
    /*p*/
    a[41].length
  ) + "", o;
  return {
    c() {
      s = We(n), i = We("/"), o = We(u);
    },
    m(f, p) {
      de(f, s, p), de(f, i, p), de(f, o, p);
    },
    p(f, p) {
      p[0] & /*progress*/
      128 && n !== (n = ln(
        /*p*/
        f[41].index || 0
      ) + "") && Wt(s, n), p[0] & /*progress*/
      128 && u !== (u = ln(
        /*p*/
        f[41].length
      ) + "") && Wt(o, u);
    },
    d(f) {
      f && (fe(s), fe(i), fe(o));
    }
  };
}
function Da(a) {
  let n, s = (
    /*p*/
    a[41].index != null && ka(a)
  );
  return {
    c() {
      s && s.c(), n = on();
    },
    m(i, u) {
      s && s.m(i, u), de(i, n, u);
    },
    p(i, u) {
      /*p*/
      i[41].index != null ? s ? s.p(i, u) : (s = ka(i), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null);
    },
    d(i) {
      i && fe(n), s && s.d(i);
    }
  };
}
function xa(a) {
  let n, s = (
    /*eta*/
    a[0] ? `/${/*formatted_eta*/
    a[19]}` : ""
  ), i, u;
  return {
    c() {
      n = We(
        /*formatted_timer*/
        a[20]
      ), i = We(s), u = We("s");
    },
    m(o, f) {
      de(o, n, f), de(o, i, f), de(o, u, f);
    },
    p(o, f) {
      f[0] & /*formatted_timer*/
      1048576 && Wt(
        n,
        /*formatted_timer*/
        o[20]
      ), f[0] & /*eta, formatted_eta*/
      524289 && s !== (s = /*eta*/
      o[0] ? `/${/*formatted_eta*/
      o[19]}` : "") && Wt(i, s);
    },
    d(o) {
      o && (fe(n), fe(i), fe(u));
    }
  };
}
function W2(a) {
  let n, s;
  return n = new S2({
    props: { margin: (
      /*variant*/
      a[8] === "default"
    ) }
  }), {
    c() {
      Io(n.$$.fragment);
    },
    m(i, u) {
      Po(n, i, u), s = !0;
    },
    p(i, u) {
      const o = {};
      u[0] & /*variant*/
      256 && (o.margin = /*variant*/
      i[8] === "default"), n.$set(o);
    },
    i(i) {
      s || (X0(n.$$.fragment, i), s = !0);
    },
    o(i) {
      Y0(n.$$.fragment, i), s = !1;
    },
    d(i) {
      Lo(n, i);
    }
  };
}
function j2(a) {
  let n, s, i, u, o, f = `${/*last_progress_level*/
  a[15] * 100}%`, p = (
    /*progress*/
    a[7] != null && va(a)
  );
  return {
    c() {
      n = d0("div"), s = d0("div"), p && p.c(), i = t0(), u = d0("div"), o = d0("div"), e0(s, "class", "progress-level-inner svelte-vopvsi"), e0(o, "class", "progress-bar svelte-vopvsi"), L0(o, "width", f), e0(u, "class", "progress-bar-wrap svelte-vopvsi"), e0(n, "class", "progress-level svelte-vopvsi");
    },
    m(b, y) {
      de(b, n, y), W0(n, s), p && p.m(s, null), W0(n, i), W0(n, u), W0(u, o), a[31](o);
    },
    p(b, y) {
      /*progress*/
      b[7] != null ? p ? p.p(b, y) : (p = va(b), p.c(), p.m(s, null)) : p && (p.d(1), p = null), y[0] & /*last_progress_level*/
      32768 && f !== (f = `${/*last_progress_level*/
      b[15] * 100}%`) && L0(o, "width", f);
    },
    i: Gs,
    o: Gs,
    d(b) {
      b && fe(n), p && p.d(), a[31](null);
    }
  };
}
function va(a) {
  let n, s = Sr(
    /*progress*/
    a[7]
  ), i = [];
  for (let u = 0; u < s.length; u += 1)
    i[u] = Ta(wa(a, s, u));
  return {
    c() {
      for (let u = 0; u < i.length; u += 1)
        i[u].c();
      n = on();
    },
    m(u, o) {
      for (let f = 0; f < i.length; f += 1)
        i[f] && i[f].m(u, o);
      de(u, n, o);
    },
    p(u, o) {
      if (o[0] & /*progress_level, progress*/
      16512) {
        s = Sr(
          /*progress*/
          u[7]
        );
        let f;
        for (f = 0; f < s.length; f += 1) {
          const p = wa(u, s, f);
          i[f] ? i[f].p(p, o) : (i[f] = Ta(p), i[f].c(), i[f].m(n.parentNode, n));
        }
        for (; f < i.length; f += 1)
          i[f].d(1);
        i.length = s.length;
      }
    },
    d(u) {
      u && fe(n), Oo(i, u);
    }
  };
}
function Aa(a) {
  let n, s, i, u, o = (
    /*i*/
    a[43] !== 0 && X2()
  ), f = (
    /*p*/
    a[41].desc != null && Sa(a)
  ), p = (
    /*p*/
    a[41].desc != null && /*progress_level*/
    a[14] && /*progress_level*/
    a[14][
      /*i*/
      a[43]
    ] != null && Ea()
  ), b = (
    /*progress_level*/
    a[14] != null && Fa(a)
  );
  return {
    c() {
      o && o.c(), n = t0(), f && f.c(), s = t0(), p && p.c(), i = t0(), b && b.c(), u = on();
    },
    m(y, x) {
      o && o.m(y, x), de(y, n, x), f && f.m(y, x), de(y, s, x), p && p.m(y, x), de(y, i, x), b && b.m(y, x), de(y, u, x);
    },
    p(y, x) {
      /*p*/
      y[41].desc != null ? f ? f.p(y, x) : (f = Sa(y), f.c(), f.m(s.parentNode, s)) : f && (f.d(1), f = null), /*p*/
      y[41].desc != null && /*progress_level*/
      y[14] && /*progress_level*/
      y[14][
        /*i*/
        y[43]
      ] != null ? p || (p = Ea(), p.c(), p.m(i.parentNode, i)) : p && (p.d(1), p = null), /*progress_level*/
      y[14] != null ? b ? b.p(y, x) : (b = Fa(y), b.c(), b.m(u.parentNode, u)) : b && (b.d(1), b = null);
    },
    d(y) {
      y && (fe(n), fe(s), fe(i), fe(u)), o && o.d(y), f && f.d(y), p && p.d(y), b && b.d(y);
    }
  };
}
function X2(a) {
  let n;
  return {
    c() {
      n = We(" /");
    },
    m(s, i) {
      de(s, n, i);
    },
    d(s) {
      s && fe(n);
    }
  };
}
function Sa(a) {
  let n = (
    /*p*/
    a[41].desc + ""
  ), s;
  return {
    c() {
      s = We(n);
    },
    m(i, u) {
      de(i, s, u);
    },
    p(i, u) {
      u[0] & /*progress*/
      128 && n !== (n = /*p*/
      i[41].desc + "") && Wt(s, n);
    },
    d(i) {
      i && fe(s);
    }
  };
}
function Ea(a) {
  let n;
  return {
    c() {
      n = We("-");
    },
    m(s, i) {
      de(s, n, i);
    },
    d(s) {
      s && fe(n);
    }
  };
}
function Fa(a) {
  let n = (100 * /*progress_level*/
  (a[14][
    /*i*/
    a[43]
  ] || 0)).toFixed(1) + "", s, i;
  return {
    c() {
      s = We(n), i = We("%");
    },
    m(u, o) {
      de(u, s, o), de(u, i, o);
    },
    p(u, o) {
      o[0] & /*progress_level*/
      16384 && n !== (n = (100 * /*progress_level*/
      (u[14][
        /*i*/
        u[43]
      ] || 0)).toFixed(1) + "") && Wt(s, n);
    },
    d(u) {
      u && (fe(s), fe(i));
    }
  };
}
function Ta(a) {
  let n, s = (
    /*p*/
    (a[41].desc != null || /*progress_level*/
    a[14] && /*progress_level*/
    a[14][
      /*i*/
      a[43]
    ] != null) && Aa(a)
  );
  return {
    c() {
      s && s.c(), n = on();
    },
    m(i, u) {
      s && s.m(i, u), de(i, n, u);
    },
    p(i, u) {
      /*p*/
      i[41].desc != null || /*progress_level*/
      i[14] && /*progress_level*/
      i[14][
        /*i*/
        i[43]
      ] != null ? s ? s.p(i, u) : (s = Aa(i), s.c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null);
    },
    d(i) {
      i && fe(n), s && s.d(i);
    }
  };
}
function Ca(a) {
  let n, s;
  return {
    c() {
      n = d0("p"), s = We(
        /*loading_text*/
        a[9]
      ), e0(n, "class", "loading svelte-vopvsi");
    },
    m(i, u) {
      de(i, n, u), W0(n, s);
    },
    p(i, u) {
      u[0] & /*loading_text*/
      512 && Wt(
        s,
        /*loading_text*/
        i[9]
      );
    },
    d(i) {
      i && fe(n);
    }
  };
}
function Y2(a) {
  let n, s, i, u, o;
  const f = [q2, O2], p = [];
  function b(y, x) {
    return (
      /*status*/
      y[4] === "pending" ? 0 : (
        /*status*/
        y[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(s = b(a)) && (i = p[s] = f[s](a)), {
    c() {
      n = d0("div"), i && i.c(), e0(n, "class", u = "wrap " + /*variant*/
      a[8] + " " + /*show_progress*/
      a[6] + " svelte-vopvsi"), Gt(n, "hide", !/*status*/
      a[4] || /*status*/
      a[4] === "complete" || /*show_progress*/
      a[6] === "hidden"), Gt(
        n,
        "translucent",
        /*variant*/
        a[8] === "center" && /*status*/
        (a[4] === "pending" || /*status*/
        a[4] === "error") || /*translucent*/
        a[11] || /*show_progress*/
        a[6] === "minimal"
      ), Gt(
        n,
        "generating",
        /*status*/
        a[4] === "generating"
      ), Gt(
        n,
        "border",
        /*border*/
        a[12]
      ), L0(
        n,
        "position",
        /*absolute*/
        a[10] ? "absolute" : "static"
      ), L0(
        n,
        "padding",
        /*absolute*/
        a[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(y, x) {
      de(y, n, x), ~s && p[s].m(n, null), a[33](n), o = !0;
    },
    p(y, x) {
      let C = s;
      s = b(y), s === C ? ~s && p[s].p(y, x) : (i && (qo(), Y0(p[C], 1, 1, () => {
        p[C] = null;
      }), Ro()), ~s ? (i = p[s], i ? i.p(y, x) : (i = p[s] = f[s](y), i.c()), X0(i, 1), i.m(n, null)) : i = null), (!o || x[0] & /*variant, show_progress*/
      320 && u !== (u = "wrap " + /*variant*/
      y[8] + " " + /*show_progress*/
      y[6] + " svelte-vopvsi")) && e0(n, "class", u), (!o || x[0] & /*variant, show_progress, status, show_progress*/
      336) && Gt(n, "hide", !/*status*/
      y[4] || /*status*/
      y[4] === "complete" || /*show_progress*/
      y[6] === "hidden"), (!o || x[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && Gt(
        n,
        "translucent",
        /*variant*/
        y[8] === "center" && /*status*/
        (y[4] === "pending" || /*status*/
        y[4] === "error") || /*translucent*/
        y[11] || /*show_progress*/
        y[6] === "minimal"
      ), (!o || x[0] & /*variant, show_progress, status*/
      336) && Gt(
        n,
        "generating",
        /*status*/
        y[4] === "generating"
      ), (!o || x[0] & /*variant, show_progress, border*/
      4416) && Gt(
        n,
        "border",
        /*border*/
        y[12]
      ), x[0] & /*absolute*/
      1024 && L0(
        n,
        "position",
        /*absolute*/
        y[10] ? "absolute" : "static"
      ), x[0] & /*absolute*/
      1024 && L0(
        n,
        "padding",
        /*absolute*/
        y[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(y) {
      o || (X0(i), o = !0);
    },
    o(y) {
      Y0(i), o = !1;
    },
    d(y) {
      y && fe(n), ~s && p[s].d(), a[33](null);
    }
  };
}
var Z2 = function(a, n, s, i) {
  function u(o) {
    return o instanceof s ? o : new s(function(f) {
      f(o);
    });
  }
  return new (s || (s = Promise))(function(o, f) {
    function p(x) {
      try {
        y(i.next(x));
      } catch (C) {
        f(C);
      }
    }
    function b(x) {
      try {
        y(i.throw(x));
      } catch (C) {
        f(C);
      }
    }
    function y(x) {
      x.done ? o(x.value) : u(x.value).then(p, b);
    }
    y((i = i.apply(a, n || [])).next());
  });
};
let dr = [], Ms = !1;
function K2(a) {
  return Z2(this, arguments, void 0, function* (n, s = !0) {
    if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && s !== !0)) {
      if (dr.push(n), !Ms)
        Ms = !0;
      else
        return;
      yield N2(), requestAnimationFrame(() => {
        let i = [0, 0];
        for (let u = 0; u < dr.length; u++) {
          const f = dr[u].getBoundingClientRect();
          (u === 0 || f.top + window.scrollY <= i[0]) && (i[0] = f.top + window.scrollY, i[1] = u);
        }
        window.scrollTo({ top: i[0] - 20, behavior: "smooth" }), Ms = !1, dr = [];
      });
    }
  });
}
function Q2(a, n, s) {
  let i, { $$slots: u = {}, $$scope: o } = n;
  this && this.__awaiter;
  const f = I2();
  let { i18n: p } = n, { eta: b = null } = n, { queue_position: y } = n, { queue_size: x } = n, { status: C } = n, { scroll_to_output: B = !1 } = n, { timer: q = !0 } = n, { show_progress: W = "full" } = n, { message: j = null } = n, { progress: G = null } = n, { variant: U = "default" } = n, { loading_text: A = "Loading..." } = n, { absolute: S = !0 } = n, { translucent: M = !1 } = n, { border: I = !1 } = n, { autoscroll: O } = n, H, J = !1, K = 0, le = 0, ce = null, pe = null, ve = 0, Ie = null, ut, st = null, mt = !0;
  const Oe = () => {
    s(0, b = s(27, ce = s(19, V = null))), s(25, K = performance.now()), s(26, le = 0), J = !0, $();
  };
  function $() {
    requestAnimationFrame(() => {
      s(26, le = (performance.now() - K) / 1e3), J && $();
    });
  }
  function Fe() {
    s(26, le = 0), s(0, b = s(27, ce = s(19, V = null))), J && (J = !1);
  }
  R2(() => {
    J && Fe();
  });
  let V = null;
  function he(ie) {
    ga[ie ? "unshift" : "push"](() => {
      st = ie, s(16, st), s(7, G), s(14, Ie), s(15, ut);
    });
  }
  const Ke = () => {
    f("clear_status");
  };
  function be(ie) {
    ga[ie ? "unshift" : "push"](() => {
      H = ie, s(13, H);
    });
  }
  return a.$$set = (ie) => {
    "i18n" in ie && s(1, p = ie.i18n), "eta" in ie && s(0, b = ie.eta), "queue_position" in ie && s(2, y = ie.queue_position), "queue_size" in ie && s(3, x = ie.queue_size), "status" in ie && s(4, C = ie.status), "scroll_to_output" in ie && s(22, B = ie.scroll_to_output), "timer" in ie && s(5, q = ie.timer), "show_progress" in ie && s(6, W = ie.show_progress), "message" in ie && s(23, j = ie.message), "progress" in ie && s(7, G = ie.progress), "variant" in ie && s(8, U = ie.variant), "loading_text" in ie && s(9, A = ie.loading_text), "absolute" in ie && s(10, S = ie.absolute), "translucent" in ie && s(11, M = ie.translucent), "border" in ie && s(12, I = ie.border), "autoscroll" in ie && s(24, O = ie.autoscroll), "$$scope" in ie && s(29, o = ie.$$scope);
  }, a.$$.update = () => {
    a.$$.dirty[0] & /*eta, old_eta, timer_start, eta_from_start*/
    436207617 && (b === null && s(0, b = ce), b != null && ce !== b && (s(28, pe = (performance.now() - K) / 1e3 + b), s(19, V = pe.toFixed(1)), s(27, ce = b))), a.$$.dirty[0] & /*eta_from_start, timer_diff*/
    335544320 && s(17, ve = pe === null || pe <= 0 || !le ? null : Math.min(le / pe, 1)), a.$$.dirty[0] & /*progress*/
    128 && G != null && s(18, mt = !1), a.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (G != null ? s(14, Ie = G.map((ie) => {
      if (ie.index != null && ie.length != null)
        return ie.index / ie.length;
      if (ie.progress != null)
        return ie.progress;
    })) : s(14, Ie = null), Ie ? (s(15, ut = Ie[Ie.length - 1]), st && (ut === 0 ? s(16, st.style.transition = "0", st) : s(16, st.style.transition = "150ms", st))) : s(15, ut = void 0)), a.$$.dirty[0] & /*status*/
    16 && (C === "pending" ? Oe() : Fe()), a.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && H && B && (C === "pending" || C === "complete") && K2(H, O), a.$$.dirty[0] & /*status, message*/
    8388624, a.$$.dirty[0] & /*timer_diff*/
    67108864 && s(20, i = le.toFixed(1));
  }, [
    b,
    p,
    y,
    x,
    C,
    q,
    W,
    G,
    U,
    A,
    S,
    M,
    I,
    H,
    Ie,
    ut,
    st,
    ve,
    mt,
    V,
    i,
    f,
    B,
    j,
    O,
    K,
    le,
    ce,
    pe,
    o,
    u,
    he,
    Ke,
    be
  ];
}
class J2 extends E2 {
  constructor(n) {
    super(), M2(
      this,
      n,
      Q2,
      Y2,
      z2,
      {
        i18n: 1,
        eta: 0,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: $2,
  attr: mr,
  detach: ef,
  element: tf,
  init: nf,
  insert: rf,
  noop: Ma,
  safe_not_equal: sf,
  set_style: za
} = window.__gradio__svelte__internal;
function lf(a) {
  let n;
  return {
    c() {
      n = tf("div"), n.innerHTML = `<span class="sr-only">Loading content</span> <div class="dot-flashing svelte-1pwlswb"></div>
	 
	<div class="dot-flashing svelte-1pwlswb"></div>
	 
	<div class="dot-flashing svelte-1pwlswb"></div>`, mr(n, "class", "message pending svelte-1pwlswb"), mr(n, "role", "status"), mr(n, "aria-label", "Loading response"), mr(n, "aria-live", "polite"), za(
        n,
        "border-radius",
        /*layout*/
        a[0] === "bubble" ? "var(--radius-xxl)" : "none"
      );
    },
    m(s, i) {
      rf(s, n, i);
    },
    p(s, [i]) {
      i & /*layout*/
      1 && za(
        n,
        "border-radius",
        /*layout*/
        s[0] === "bubble" ? "var(--radius-xxl)" : "none"
      );
    },
    i: Ma,
    o: Ma,
    d(s) {
      s && ef(n);
    }
  };
}
function af(a, n, s) {
  let { layout: i = "bubble" } = n;
  return a.$$set = (u) => {
    "layout" in u && s(0, i = u.layout);
  }, [i];
}
class of extends $2 {
  constructor(n) {
    super(), nf(this, n, af, lf, sf, { layout: 0 });
  }
}
const {
  SvelteComponent: uf,
  append: sn,
  attr: wr,
  check_outros: cf,
  create_slot: hf,
  detach: Ho,
  element: Sn,
  get_all_dirty_from_scope: ff,
  get_slot_changes: df,
  group_outros: mf,
  init: pf,
  insert: Uo,
  listen: gf,
  safe_not_equal: bf,
  set_data: wf,
  space: Ba,
  text: yf,
  transition_in: yr,
  transition_out: Vs,
  update_slot_base: _f
} = window.__gradio__svelte__internal;
function Na(a) {
  let n, s;
  const i = (
    /*#slots*/
    a[4].default
  ), u = hf(
    i,
    a,
    /*$$scope*/
    a[3],
    null
  );
  return {
    c() {
      n = Sn("div"), u && u.c(), wr(n, "class", "content svelte-16mfv8i");
    },
    m(o, f) {
      Uo(o, n, f), u && u.m(n, null), s = !0;
    },
    p(o, f) {
      u && u.p && (!s || f & /*$$scope*/
      8) && _f(
        u,
        i,
        o,
        /*$$scope*/
        o[3],
        s ? df(
          i,
          /*$$scope*/
          o[3],
          f,
          null
        ) : ff(
          /*$$scope*/
          o[3]
        ),
        null
      );
    },
    i(o) {
      s || (yr(u, o), s = !0);
    },
    o(o) {
      Vs(u, o), s = !1;
    },
    d(o) {
      o && Ho(n), u && u.d(o);
    }
  };
}
function kf(a) {
  let n, s, i, u, o, f, p, b, y, x, C = (
    /*expanded*/
    a[1] && Na(a)
  );
  return {
    c() {
      n = Sn("div"), s = Sn("div"), i = Sn("div"), i.textContent = "🛠️", u = Ba(), o = Sn("span"), f = yf(
        /*title*/
        a[0]
      ), p = Ba(), C && C.c(), wr(i, "class", "wrench-icon svelte-16mfv8i"), wr(s, "class", "title svelte-16mfv8i"), wr(n, "class", "box svelte-16mfv8i");
    },
    m(B, q) {
      Uo(B, n, q), sn(n, s), sn(s, i), sn(s, u), sn(s, o), sn(o, f), sn(n, p), C && C.m(n, null), b = !0, y || (x = gf(
        n,
        "click",
        /*toggleExpanded*/
        a[2]
      ), y = !0);
    },
    p(B, [q]) {
      (!b || q & /*title*/
      1) && wf(
        f,
        /*title*/
        B[0]
      ), /*expanded*/
      B[1] ? C ? (C.p(B, q), q & /*expanded*/
      2 && yr(C, 1)) : (C = Na(B), C.c(), yr(C, 1), C.m(n, null)) : C && (mf(), Vs(C, 1, 1, () => {
        C = null;
      }), cf());
    },
    i(B) {
      b || (yr(C), b = !0);
    },
    o(B) {
      Vs(C), b = !1;
    },
    d(B) {
      B && Ho(n), C && C.d(), y = !1, x();
    }
  };
}
function Df(a, n, s) {
  let { $$slots: i = {}, $$scope: u } = n, { title: o } = n, f = !1;
  function p() {
    s(1, f = !f);
  }
  return a.$$set = (b) => {
    "title" in b && s(0, o = b.title), "$$scope" in b && s(3, u = b.$$scope);
  }, [o, f, p, u, i];
}
class xf extends uf {
  constructor(n) {
    super(), pf(this, n, Df, kf, bf, { title: 0 });
  }
}
const {
  SvelteComponent: vf,
  append: vn,
  attr: _r,
  check_outros: Af,
  create_slot: Sf,
  detach: Go,
  element: En,
  get_all_dirty_from_scope: Ef,
  get_slot_changes: Ff,
  group_outros: Tf,
  init: Cf,
  insert: Vo,
  listen: Mf,
  safe_not_equal: zf,
  space: Ra,
  transition_in: kr,
  transition_out: Ws,
  update_slot_base: Bf
} = window.__gradio__svelte__internal;
function Ia(a) {
  let n, s;
  const i = (
    /*#slots*/
    a[3].default
  ), u = Sf(
    i,
    a,
    /*$$scope*/
    a[2],
    null
  );
  return {
    c() {
      n = En("div"), u && u.c(), _r(n, "class", "content svelte-17eh19o");
    },
    m(o, f) {
      Vo(o, n, f), u && u.m(n, null), s = !0;
    },
    p(o, f) {
      u && u.p && (!s || f & /*$$scope*/
      4) && Bf(
        u,
        i,
        o,
        /*$$scope*/
        o[2],
        s ? Ff(
          i,
          /*$$scope*/
          o[2],
          f,
          null
        ) : Ef(
          /*$$scope*/
          o[2]
        ),
        null
      );
    },
    i(o) {
      s || (kr(u, o), s = !0);
    },
    o(o) {
      Ws(u, o), s = !1;
    },
    d(o) {
      o && Go(n), u && u.d(o);
    }
  };
}
function Nf(a) {
  let n, s, i, u, o, f, p, b, y, x = (
    /*expanded*/
    a[0] && Ia(a)
  );
  return {
    c() {
      n = En("div"), s = En("div"), i = En("div"), i.textContent = "💥", u = Ra(), o = En("span"), o.textContent = "Error", f = Ra(), x && x.c(), _r(i, "class", "icon svelte-17eh19o"), _r(s, "class", "title svelte-17eh19o"), _r(n, "class", "box svelte-17eh19o");
    },
    m(C, B) {
      Vo(C, n, B), vn(n, s), vn(s, i), vn(s, u), vn(s, o), vn(n, f), x && x.m(n, null), p = !0, b || (y = Mf(
        n,
        "click",
        /*toggleExpanded*/
        a[1]
      ), b = !0);
    },
    p(C, [B]) {
      /*expanded*/
      C[0] ? x ? (x.p(C, B), B & /*expanded*/
      1 && kr(x, 1)) : (x = Ia(C), x.c(), kr(x, 1), x.m(n, null)) : x && (Tf(), Ws(x, 1, 1, () => {
        x = null;
      }), Af());
    },
    i(C) {
      p || (kr(x), p = !0);
    },
    o(C) {
      Ws(x), p = !1;
    },
    d(C) {
      C && Go(n), x && x.d(), b = !1, y();
    }
  };
}
function Rf(a, n, s) {
  let { $$slots: i = {}, $$scope: u } = n, o = !1;
  function f() {
    s(0, o = !o);
  }
  return a.$$set = (p) => {
    "$$scope" in p && s(2, u = p.$$scope);
  }, [o, f, u, i];
}
class If extends vf {
  constructor(n) {
    super(), Cf(this, n, Rf, Nf, zf, {});
  }
}
const {
  SvelteComponent: Lf,
  action_destroyer: Of,
  append: Cn,
  attr: Be,
  binding_callbacks: qf,
  bubble: R0,
  check_outros: v0,
  create_component: jt,
  destroy_component: Xt,
  destroy_each: Wo,
  detach: zt,
  element: n0,
  empty: ri,
  ensure_array_like: Er,
  group_outros: A0,
  init: Pf,
  insert: Bt,
  listen: La,
  mount_component: Yt,
  noop: js,
  null_to_empty: Oa,
  run_all: Hf,
  safe_not_equal: Uf,
  set_data: Gf,
  set_style: An,
  space: si,
  text: Vf,
  toggle_class: rt,
  transition_in: _e,
  transition_out: Me
} = window.__gradio__svelte__internal, { beforeUpdate: Wf, afterUpdate: jf, createEventDispatcher: Xf } = window.__gradio__svelte__internal;
function qa(a, n, s) {
  const i = a.slice();
  return i[36] = n[s], i[38] = s, i;
}
function Pa(a, n, s) {
  const i = a.slice();
  return i[41] = n[s], i[43] = s, i;
}
function zs(a) {
  const n = a.slice(), s = (
    /*messages*/
    n[36][0].role === "user" ? "user" : "bot"
  );
  n[39] = s;
  const i = (
    /*avatar_images*/
    n[6][
      /*role*/
      n[39] === "user" ? 0 : 1
    ]
  );
  return n[40] = i, n;
}
function Yf(a) {
  const n = a.slice(), s = cd(
    /*value*/
    n[0]
  );
  return n[35] = s, n;
}
function Ha(a) {
  let n, s, i;
  return s = new Nc({
    props: {
      i18n: (
        /*i18n*/
        a[11]
      ),
      formatter: a1,
      value: (
        /*value*/
        a[0]
      )
    }
  }), s.$on(
    "error",
    /*error_handler*/
    a[21]
  ), s.$on(
    "share",
    /*share_handler*/
    a[22]
  ), {
    c() {
      n = n0("div"), jt(s.$$.fragment), Be(n, "class", "share-button svelte-kqrm1b");
    },
    m(u, o) {
      Bt(u, n, o), Yt(s, n, null), i = !0;
    },
    p(u, o) {
      const f = {};
      o[0] & /*i18n*/
      2048 && (f.i18n = /*i18n*/
      u[11]), o[0] & /*value*/
      1 && (f.value = /*value*/
      u[0]), s.$set(f);
    },
    i(u) {
      i || (_e(s.$$.fragment, u), i = !0);
    },
    o(u) {
      Me(s.$$.fragment, u), i = !1;
    },
    d(u) {
      u && zt(n), Xt(s);
    }
  };
}
function Zf(a) {
  let n, s, i;
  return s = new Cr({
    props: {
      message: (
        /*placeholder*/
        a[13]
      ),
      latex_delimiters: (
        /*latex_delimiters*/
        a[1]
      )
    }
  }), {
    c() {
      n = n0("center"), jt(s.$$.fragment), Be(n, "class", "svelte-kqrm1b");
    },
    m(u, o) {
      Bt(u, n, o), Yt(s, n, null), i = !0;
    },
    p(u, o) {
      const f = {};
      o[0] & /*placeholder*/
      8192 && (f.message = /*placeholder*/
      u[13]), o[0] & /*latex_delimiters*/
      2 && (f.latex_delimiters = /*latex_delimiters*/
      u[1]), s.$set(f);
    },
    i(u) {
      i || (_e(s.$$.fragment, u), i = !0);
    },
    o(u) {
      Me(s.$$.fragment, u), i = !1;
    },
    d(u) {
      u && zt(n), Xt(s);
    }
  };
}
function Kf(a) {
  let n, s, i, u = Er(
    /*groupedMessages*/
    a[35]
  ), o = [];
  for (let b = 0; b < u.length; b += 1)
    o[b] = Wa(qa(a, u, b));
  const f = (b) => Me(o[b], 1, 1, () => {
    o[b] = null;
  });
  let p = (
    /*pending_message*/
    a[2] && ja(a)
  );
  return {
    c() {
      for (let b = 0; b < o.length; b += 1)
        o[b].c();
      n = si(), p && p.c(), s = ri();
    },
    m(b, y) {
      for (let x = 0; x < o.length; x += 1)
        o[x] && o[x].m(b, y);
      Bt(b, n, y), p && p.m(b, y), Bt(b, s, y), i = !0;
    },
    p(b, y) {
      if (y[0] & /*layout, value, bubble_full_width, render_markdown, rtl, selectable, handle_select, latex_delimiters, sanitize_html, line_breaks, scroll, avatar_images*/
      104427) {
        u = Er(
          /*groupedMessages*/
          b[35]
        );
        let x;
        for (x = 0; x < u.length; x += 1) {
          const C = qa(b, u, x);
          o[x] ? (o[x].p(C, y), _e(o[x], 1)) : (o[x] = Wa(C), o[x].c(), _e(o[x], 1), o[x].m(n.parentNode, n));
        }
        for (A0(), x = u.length; x < o.length; x += 1)
          f(x);
        v0();
      }
      /*pending_message*/
      b[2] ? p ? (p.p(b, y), y[0] & /*pending_message*/
      4 && _e(p, 1)) : (p = ja(b), p.c(), _e(p, 1), p.m(s.parentNode, s)) : p && (A0(), Me(p, 1, 1, () => {
        p = null;
      }), v0());
    },
    i(b) {
      if (!i) {
        for (let y = 0; y < u.length; y += 1)
          _e(o[y]);
        _e(p), i = !0;
      }
    },
    o(b) {
      o = o.filter(Boolean);
      for (let y = 0; y < o.length; y += 1)
        Me(o[y]);
      Me(p), i = !1;
    },
    d(b) {
      b && (zt(n), zt(s)), Wo(o, b), p && p.d(b);
    }
  };
}
function Ua(a) {
  let n, s, i, u, o, f, p, b, y, x, C, B = (
    /*avatar_img*/
    a[40] && Ga(a)
  ), q = Er(
    /*messages*/
    a[36]
  ), W = [];
  for (let A = 0; A < q.length; A += 1)
    W[A] = Va(Pa(a, q, A));
  const j = (A) => Me(W[A], 1, 1, () => {
    W[A] = null;
  });
  function G() {
    return (
      /*click_handler*/
      a[29](
        /*i*/
        a[38],
        /*messages*/
        a[36]
      )
    );
  }
  function U(...A) {
    return (
      /*keydown_handler*/
      a[30](
        /*i*/
        a[38],
        /*messages*/
        a[36],
        ...A
      )
    );
  }
  return {
    c() {
      n = n0("div"), B && B.c(), s = si(), i = n0("div"), u = n0("button");
      for (let A = 0; A < W.length; A += 1)
        W[A].c();
      Be(u, "data-testid", o = /*role*/
      a[39]), Be(u, "dir", f = /*rtl*/
      a[5] ? "rtl" : "ltr"), Be(u, "class", "svelte-kqrm1b"), rt(
        u,
        "latest",
        /*i*/
        a[38] === /*groupedMessages*/
        a[35].length - 1
      ), rt(u, "message-markdown-disabled", !/*render_markdown*/
      a[9]), rt(
        u,
        "selectable",
        /*selectable*/
        a[3]
      ), An(u, "user-select", "text"), An(
        u,
        "text-align",
        /*rtl*/
        a[5] ? "right" : "left"
      ), Be(i, "class", p = "message " + /*role*/
      (a[39] === "user" ? "user" : "bot") + " svelte-kqrm1b"), rt(
        i,
        "message-fit",
        /*layout*/
        a[12] === "bubble" && !/*bubble_full_width*/
        a[8]
      ), rt(
        i,
        "panel-full-width",
        /*layout*/
        a[12] === "panel"
      ), rt(
        i,
        "message-bubble-border",
        /*layout*/
        a[12] === "bubble"
      ), rt(i, "message-markdown-disabled", !/*render_markdown*/
      a[9]), An(
        i,
        "text-align",
        /*rtl*/
        a[5] && /*role*/
        a[39] == "bot" ? "left" : "right"
      ), Be(n, "class", b = "message-row " + /*layout*/
      a[12] + " " + /*role*/
      (a[39] === "user" ? "user-row" : "bot-row") + " svelte-kqrm1b");
    },
    m(A, S) {
      Bt(A, n, S), B && B.m(n, null), Cn(n, s), Cn(n, i), Cn(i, u);
      for (let M = 0; M < W.length; M += 1)
        W[M] && W[M].m(u, null);
      y = !0, x || (C = [
        La(u, "click", G),
        La(u, "keydown", U)
      ], x = !0);
    },
    p(A, S) {
      if (a = A, /*avatar_img*/
      a[40] ? B ? (B.p(a, S), S[0] & /*avatar_images, value*/
      65 && _e(B, 1)) : (B = Ga(a), B.c(), _e(B, 1), B.m(n, s)) : B && (A0(), Me(B, 1, 1, () => {
        B = null;
      }), v0()), S[0] & /*value, latex_delimiters, sanitize_html, render_markdown, line_breaks, scroll*/
      34435) {
        q = Er(
          /*messages*/
          a[36]
        );
        let M;
        for (M = 0; M < q.length; M += 1) {
          const I = Pa(a, q, M);
          W[M] ? (W[M].p(I, S), _e(W[M], 1)) : (W[M] = Va(I), W[M].c(), _e(W[M], 1), W[M].m(u, null));
        }
        for (A0(), M = q.length; M < W.length; M += 1)
          j(M);
        v0();
      }
      (!y || S[0] & /*value*/
      1 && o !== (o = /*role*/
      a[39])) && Be(u, "data-testid", o), (!y || S[0] & /*rtl*/
      32 && f !== (f = /*rtl*/
      a[5] ? "rtl" : "ltr")) && Be(u, "dir", f), (!y || S[0] & /*value*/
      1) && rt(
        u,
        "latest",
        /*i*/
        a[38] === /*groupedMessages*/
        a[35].length - 1
      ), (!y || S[0] & /*render_markdown*/
      512) && rt(u, "message-markdown-disabled", !/*render_markdown*/
      a[9]), (!y || S[0] & /*selectable*/
      8) && rt(
        u,
        "selectable",
        /*selectable*/
        a[3]
      ), S[0] & /*rtl*/
      32 && An(
        u,
        "text-align",
        /*rtl*/
        a[5] ? "right" : "left"
      ), (!y || S[0] & /*value*/
      1 && p !== (p = "message " + /*role*/
      (a[39] === "user" ? "user" : "bot") + " svelte-kqrm1b")) && Be(i, "class", p), (!y || S[0] & /*value, layout, bubble_full_width*/
      4353) && rt(
        i,
        "message-fit",
        /*layout*/
        a[12] === "bubble" && !/*bubble_full_width*/
        a[8]
      ), (!y || S[0] & /*value, layout*/
      4097) && rt(
        i,
        "panel-full-width",
        /*layout*/
        a[12] === "panel"
      ), (!y || S[0] & /*value, layout*/
      4097) && rt(
        i,
        "message-bubble-border",
        /*layout*/
        a[12] === "bubble"
      ), (!y || S[0] & /*value, render_markdown*/
      513) && rt(i, "message-markdown-disabled", !/*render_markdown*/
      a[9]), S[0] & /*rtl, value*/
      33 && An(
        i,
        "text-align",
        /*rtl*/
        a[5] && /*role*/
        a[39] == "bot" ? "left" : "right"
      ), (!y || S[0] & /*layout, value*/
      4097 && b !== (b = "message-row " + /*layout*/
      a[12] + " " + /*role*/
      (a[39] === "user" ? "user-row" : "bot-row") + " svelte-kqrm1b")) && Be(n, "class", b);
    },
    i(A) {
      if (!y) {
        _e(B);
        for (let S = 0; S < q.length; S += 1)
          _e(W[S]);
        y = !0;
      }
    },
    o(A) {
      Me(B), W = W.filter(Boolean);
      for (let S = 0; S < W.length; S += 1)
        Me(W[S]);
      y = !1;
    },
    d(A) {
      A && zt(n), B && B.d(), Wo(W, A), x = !1, Hf(C);
    }
  };
}
function Ga(a) {
  let n, s, i;
  return s = new io({
    props: {
      class: "avatar-image",
      src: (
        /*avatar_img*/
        a[40].url
      ),
      alt: (
        /*role*/
        a[39] + " avatar"
      )
    }
  }), {
    c() {
      n = n0("div"), jt(s.$$.fragment), Be(n, "class", "avatar-container svelte-kqrm1b");
    },
    m(u, o) {
      Bt(u, n, o), Yt(s, n, null), i = !0;
    },
    p(u, o) {
      const f = {};
      o[0] & /*avatar_images, value*/
      65 && (f.src = /*avatar_img*/
      u[40].url), o[0] & /*value*/
      1 && (f.alt = /*role*/
      u[39] + " avatar"), s.$set(f);
    },
    i(u) {
      i || (_e(s.$$.fragment, u), i = !0);
    },
    o(u) {
      Me(s.$$.fragment, u), i = !1;
    },
    d(u) {
      u && zt(n), Xt(s);
    }
  };
}
function Qf(a) {
  var f, p;
  let n, s = (
    /*message*/
    (((f = a[41].file) == null ? void 0 : f.orig_name) || /*message*/
    ((p = a[41].file) == null ? void 0 : p.path)) + ""
  ), i, u, o;
  return {
    c() {
      var b, y, x;
      n = n0("a"), i = Vf(s), Be(n, "data-testid", "chatbot-file"), Be(n, "href", u = /*message*/
      (b = a[41].file) == null ? void 0 : b.url), Be(n, "target", "_blank"), Be(n, "download", o = window.__is_colab__ ? null : (
        /*message*/
        ((y = a[41].file) == null ? void 0 : y.orig_name) || /*message*/
        ((x = a[41].file) == null ? void 0 : x.path)
      )), Be(n, "class", "svelte-kqrm1b");
    },
    m(b, y) {
      Bt(b, n, y), Cn(n, i);
    },
    p(b, y) {
      var x, C, B, q, W;
      y[0] & /*value*/
      1 && s !== (s = /*message*/
      (((x = b[41].file) == null ? void 0 : x.orig_name) || /*message*/
      ((C = b[41].file) == null ? void 0 : C.path)) + "") && Gf(i, s), y[0] & /*value*/
      1 && u !== (u = /*message*/
      (B = b[41].file) == null ? void 0 : B.url) && Be(n, "href", u), y[0] & /*value*/
      1 && o !== (o = window.__is_colab__ ? null : (
        /*message*/
        ((q = b[41].file) == null ? void 0 : q.orig_name) || /*message*/
        ((W = b[41].file) == null ? void 0 : W.path)
      )) && Be(n, "download", o);
    },
    i: js,
    o: js,
    d(b) {
      b && zt(n);
    }
  };
}
function Jf(a) {
  var i;
  let n, s;
  return n = new io({
    props: {
      "data-testid": "chatbot-image",
      src: (
        /*message*/
        (i = a[41].file) == null ? void 0 : i.url
      ),
      alt: (
        /*message*/
        a[41].alt_text
      )
    }
  }), {
    c() {
      jt(n.$$.fragment);
    },
    m(u, o) {
      Yt(n, u, o), s = !0;
    },
    p(u, o) {
      var p;
      const f = {};
      o[0] & /*value*/
      1 && (f.src = /*message*/
      (p = u[41].file) == null ? void 0 : p.url), o[0] & /*value*/
      1 && (f.alt = /*message*/
      u[41].alt_text), n.$set(f);
    },
    i(u) {
      s || (_e(n.$$.fragment, u), s = !0);
    },
    o(u) {
      Me(n.$$.fragment, u), s = !1;
    },
    d(u) {
      Xt(n, u);
    }
  };
}
function $f(a) {
  var i;
  let n, s;
  return n = new z4({
    props: {
      "data-testid": "chatbot-video",
      controls: !0,
      src: (
        /*message*/
        (i = a[41].file) == null ? void 0 : i.url
      ),
      title: (
        /*message*/
        a[41].alt_text
      ),
      preload: "auto",
      $$slots: { default: [nd] },
      $$scope: { ctx: a }
    }
  }), n.$on(
    "play",
    /*play_handler_1*/
    a[26]
  ), n.$on(
    "pause",
    /*pause_handler_1*/
    a[27]
  ), n.$on(
    "ended",
    /*ended_handler_1*/
    a[28]
  ), {
    c() {
      jt(n.$$.fragment);
    },
    m(u, o) {
      Yt(n, u, o), s = !0;
    },
    p(u, o) {
      var p;
      const f = {};
      o[0] & /*value*/
      1 && (f.src = /*message*/
      (p = u[41].file) == null ? void 0 : p.url), o[0] & /*value*/
      1 && (f.title = /*message*/
      u[41].alt_text), o[1] & /*$$scope*/
      8192 && (f.$$scope = { dirty: o, ctx: u }), n.$set(f);
    },
    i(u) {
      s || (_e(n.$$.fragment, u), s = !0);
    },
    o(u) {
      Me(n.$$.fragment, u), s = !1;
    },
    d(u) {
      Xt(n, u);
    }
  };
}
function ed(a) {
  var i;
  let n, s;
  return n = new e4({
    props: {
      "data-testid": "chatbot-audio",
      controls: !0,
      preload: "metadata",
      src: (
        /*message*/
        (i = a[41].file) == null ? void 0 : i.url
      ),
      title: (
        /*message*/
        a[41].alt_text
      )
    }
  }), n.$on(
    "play",
    /*play_handler*/
    a[23]
  ), n.$on(
    "pause",
    /*pause_handler*/
    a[24]
  ), n.$on(
    "ended",
    /*ended_handler*/
    a[25]
  ), {
    c() {
      jt(n.$$.fragment);
    },
    m(u, o) {
      Yt(n, u, o), s = !0;
    },
    p(u, o) {
      var p;
      const f = {};
      o[0] & /*value*/
      1 && (f.src = /*message*/
      (p = u[41].file) == null ? void 0 : p.url), o[0] & /*value*/
      1 && (f.title = /*message*/
      u[41].alt_text), n.$set(f);
    },
    i(u) {
      s || (_e(n.$$.fragment, u), s = !0);
    },
    o(u) {
      Me(n.$$.fragment, u), s = !1;
    },
    d(u) {
      Xt(n, u);
    }
  };
}
function td(a) {
  let n, s, i, u;
  const o = [id, sd, rd], f = [];
  function p(b, y) {
    return (
      /*message*/
      b[41].thought_metadata.tool_name ? 0 : (
        /*message*/
        b[41].thought_metadata.error ? 1 : 2
      )
    );
  }
  return s = p(a), i = f[s] = o[s](a), {
    c() {
      n = n0("div"), i.c(), Be(n, "class", "svelte-kqrm1b"), rt(
        n,
        "thought",
        /*thought_index*/
        a[43] > 0
      );
    },
    m(b, y) {
      Bt(b, n, y), f[s].m(n, null), u = !0;
    },
    p(b, y) {
      let x = s;
      s = p(b), s === x ? f[s].p(b, y) : (A0(), Me(f[x], 1, 1, () => {
        f[x] = null;
      }), v0(), i = f[s], i ? i.p(b, y) : (i = f[s] = o[s](b), i.c()), _e(i, 1), i.m(n, null));
    },
    i(b) {
      u || (_e(i), u = !0);
    },
    o(b) {
      Me(i), u = !1;
    },
    d(b) {
      b && zt(n), f[s].d();
    }
  };
}
function nd(a) {
  let n;
  return {
    c() {
      n = n0("track"), Be(n, "kind", "captions"), Be(n, "class", "svelte-kqrm1b");
    },
    m(s, i) {
      Bt(s, n, i);
    },
    p: js,
    d(s) {
      s && zt(n);
    }
  };
}
function rd(a) {
  let n, s;
  return n = new Cr({
    props: {
      message: (
        /*message*/
        a[41].content
      ),
      latex_delimiters: (
        /*latex_delimiters*/
        a[1]
      ),
      sanitize_html: (
        /*sanitize_html*/
        a[7]
      ),
      render_markdown: (
        /*render_markdown*/
        a[9]
      ),
      line_breaks: (
        /*line_breaks*/
        a[10]
      )
    }
  }), n.$on(
    "load",
    /*scroll*/
    a[15]
  ), {
    c() {
      jt(n.$$.fragment);
    },
    m(i, u) {
      Yt(n, i, u), s = !0;
    },
    p(i, u) {
      const o = {};
      u[0] & /*value*/
      1 && (o.message = /*message*/
      i[41].content), u[0] & /*latex_delimiters*/
      2 && (o.latex_delimiters = /*latex_delimiters*/
      i[1]), u[0] & /*sanitize_html*/
      128 && (o.sanitize_html = /*sanitize_html*/
      i[7]), u[0] & /*render_markdown*/
      512 && (o.render_markdown = /*render_markdown*/
      i[9]), u[0] & /*line_breaks*/
      1024 && (o.line_breaks = /*line_breaks*/
      i[10]), n.$set(o);
    },
    i(i) {
      s || (_e(n.$$.fragment, i), s = !0);
    },
    o(i) {
      Me(n.$$.fragment, i), s = !1;
    },
    d(i) {
      Xt(n, i);
    }
  };
}
function sd(a) {
  let n, s;
  return n = new If({
    props: {
      $$slots: { default: [ld] },
      $$scope: { ctx: a }
    }
  }), {
    c() {
      jt(n.$$.fragment);
    },
    m(i, u) {
      Yt(n, i, u), s = !0;
    },
    p(i, u) {
      const o = {};
      u[0] & /*value, latex_delimiters, sanitize_html, render_markdown, line_breaks*/
      1667 | u[1] & /*$$scope*/
      8192 && (o.$$scope = { dirty: u, ctx: i }), n.$set(o);
    },
    i(i) {
      s || (_e(n.$$.fragment, i), s = !0);
    },
    o(i) {
      Me(n.$$.fragment, i), s = !1;
    },
    d(i) {
      Xt(n, i);
    }
  };
}
function id(a) {
  let n, s;
  return n = new xf({
    props: {
      title: `Tool call: ${/*message*/
      a[41].thought_metadata.tool_name}`,
      $$slots: { default: [ad] },
      $$scope: { ctx: a }
    }
  }), {
    c() {
      jt(n.$$.fragment);
    },
    m(i, u) {
      Yt(n, i, u), s = !0;
    },
    p(i, u) {
      const o = {};
      u[0] & /*value*/
      1 && (o.title = `Tool call: ${/*message*/
      i[41].thought_metadata.tool_name}`), u[0] & /*value, latex_delimiters, sanitize_html, render_markdown, line_breaks*/
      1667 | u[1] & /*$$scope*/
      8192 && (o.$$scope = { dirty: u, ctx: i }), n.$set(o);
    },
    i(i) {
      s || (_e(n.$$.fragment, i), s = !0);
    },
    o(i) {
      Me(n.$$.fragment, i), s = !1;
    },
    d(i) {
      Xt(n, i);
    }
  };
}
function ld(a) {
  let n, s;
  return n = new Cr({
    props: {
      message: (
        /*message*/
        a[41].content
      ),
      latex_delimiters: (
        /*latex_delimiters*/
        a[1]
      ),
      sanitize_html: (
        /*sanitize_html*/
        a[7]
      ),
      render_markdown: (
        /*render_markdown*/
        a[9]
      ),
      line_breaks: (
        /*line_breaks*/
        a[10]
      )
    }
  }), n.$on(
    "load",
    /*scroll*/
    a[15]
  ), {
    c() {
      jt(n.$$.fragment);
    },
    m(i, u) {
      Yt(n, i, u), s = !0;
    },
    p(i, u) {
      const o = {};
      u[0] & /*value*/
      1 && (o.message = /*message*/
      i[41].content), u[0] & /*latex_delimiters*/
      2 && (o.latex_delimiters = /*latex_delimiters*/
      i[1]), u[0] & /*sanitize_html*/
      128 && (o.sanitize_html = /*sanitize_html*/
      i[7]), u[0] & /*render_markdown*/
      512 && (o.render_markdown = /*render_markdown*/
      i[9]), u[0] & /*line_breaks*/
      1024 && (o.line_breaks = /*line_breaks*/
      i[10]), n.$set(o);
    },
    i(i) {
      s || (_e(n.$$.fragment, i), s = !0);
    },
    o(i) {
      Me(n.$$.fragment, i), s = !1;
    },
    d(i) {
      Xt(n, i);
    }
  };
}
function ad(a) {
  let n, s;
  return n = new Cr({
    props: {
      message: (
        /*message*/
        a[41].content
      ),
      latex_delimiters: (
        /*latex_delimiters*/
        a[1]
      ),
      sanitize_html: (
        /*sanitize_html*/
        a[7]
      ),
      render_markdown: (
        /*render_markdown*/
        a[9]
      ),
      line_breaks: (
        /*line_breaks*/
        a[10]
      )
    }
  }), n.$on(
    "load",
    /*scroll*/
    a[15]
  ), {
    c() {
      jt(n.$$.fragment);
    },
    m(i, u) {
      Yt(n, i, u), s = !0;
    },
    p(i, u) {
      const o = {};
      u[0] & /*value*/
      1 && (o.message = /*message*/
      i[41].content), u[0] & /*latex_delimiters*/
      2 && (o.latex_delimiters = /*latex_delimiters*/
      i[1]), u[0] & /*sanitize_html*/
      128 && (o.sanitize_html = /*sanitize_html*/
      i[7]), u[0] & /*render_markdown*/
      512 && (o.render_markdown = /*render_markdown*/
      i[9]), u[0] & /*line_breaks*/
      1024 && (o.line_breaks = /*line_breaks*/
      i[10]), n.$set(o);
    },
    i(i) {
      s || (_e(n.$$.fragment, i), s = !0);
    },
    o(i) {
      Me(n.$$.fragment, i), s = !1;
    },
    d(i) {
      Xt(n, i);
    }
  };
}
function Va(a) {
  let n, s, i, u, o, f, p, b;
  const y = [
    td,
    ed,
    $f,
    Jf,
    Qf
  ], x = [];
  function C(B, q) {
    var W, j, G, U, A, S;
    return q[0] & /*value*/
    1 && (n = null), q[0] & /*value*/
    1 && (s = null), q[0] & /*value*/
    1 && (i = null), q[0] & /*value*/
    1 && (u = null), n == null && (n = !ud(
      /*message*/
      B[41]
    )), n ? 0 : (s == null && (s = !!/*message*/
    ((W = B[41].file.mime_type) != null && W.includes("audio"))), s ? 1 : (i == null && (i = !!/*message*/
    (B[41] !== null && /*message*/
    ((G = (j = B[41].file) == null ? void 0 : j.mime_type) != null && G.includes("video")))), i ? 2 : (u == null && (u = !!/*message*/
    (B[41] !== null && /*message*/
    ((A = (U = B[41].file) == null ? void 0 : U.mime_type) != null && A.includes("image")))), u ? 3 : (
      /*message*/
      B[41] !== null && /*message*/
      ((S = B[41].file) == null ? void 0 : S.url) !== null ? 4 : -1
    ))));
  }
  return ~(o = C(a, [-1, -1])) && (f = x[o] = y[o](a)), {
    c() {
      f && f.c(), p = ri();
    },
    m(B, q) {
      ~o && x[o].m(B, q), Bt(B, p, q), b = !0;
    },
    p(B, q) {
      let W = o;
      o = C(B, q), o === W ? ~o && x[o].p(B, q) : (f && (A0(), Me(x[W], 1, 1, () => {
        x[W] = null;
      }), v0()), ~o ? (f = x[o], f ? f.p(B, q) : (f = x[o] = y[o](B), f.c()), _e(f, 1), f.m(p.parentNode, p)) : f = null);
    },
    i(B) {
      b || (_e(f), b = !0);
    },
    o(B) {
      Me(f), b = !1;
    },
    d(B) {
      B && zt(p), ~o && x[o].d(B);
    }
  };
}
function Wa(a) {
  let n, s, i = (
    /*messages*/
    a[36].length && Ua(zs(a))
  );
  return {
    c() {
      i && i.c(), n = ri();
    },
    m(u, o) {
      i && i.m(u, o), Bt(u, n, o), s = !0;
    },
    p(u, o) {
      /*messages*/
      u[36].length ? i ? (i.p(zs(u), o), o[0] & /*value*/
      1 && _e(i, 1)) : (i = Ua(zs(u)), i.c(), _e(i, 1), i.m(n.parentNode, n)) : i && (A0(), Me(i, 1, 1, () => {
        i = null;
      }), v0());
    },
    i(u) {
      s || (_e(i), s = !0);
    },
    o(u) {
      Me(i), s = !1;
    },
    d(u) {
      u && zt(n), i && i.d(u);
    }
  };
}
function ja(a) {
  let n, s;
  return n = new of({ props: { layout: (
    /*layout*/
    a[12]
  ) } }), {
    c() {
      jt(n.$$.fragment);
    },
    m(i, u) {
      Yt(n, i, u), s = !0;
    },
    p(i, u) {
      const o = {};
      u[0] & /*layout*/
      4096 && (o.layout = /*layout*/
      i[12]), n.$set(o);
    },
    i(i) {
      s || (_e(n.$$.fragment, i), s = !0);
    },
    o(i) {
      Me(n.$$.fragment, i), s = !1;
    },
    d(i) {
      Xt(n, i);
    }
  };
}
function od(a) {
  let n, s, i, u, o, f, p, b, y, x = (
    /*show_share_button*/
    a[4] && /*value*/
    a[0] !== null && /*value*/
    a[0].length > 0 && Ha(a)
  );
  const C = [Kf, Zf], B = [];
  function q(j, G) {
    return (
      /*value*/
      j[0] !== null && /*value*/
      j[0].length > 0 ? 0 : (
        /*placeholder*/
        j[13] !== null ? 1 : -1
      )
    );
  }
  function W(j, G) {
    return G === 0 ? Yf(j) : j;
  }
  return ~(u = q(a)) && (o = B[u] = C[u](W(a, u))), {
    c() {
      x && x.c(), n = si(), s = n0("div"), i = n0("div"), o && o.c(), Be(i, "class", "message-wrap svelte-kqrm1b"), rt(
        i,
        "bubble-gap",
        /*layout*/
        a[12] === "bubble"
      ), Be(s, "class", f = Oa(
        /*layout*/
        a[12] === "bubble" ? "bubble-wrap" : "panel-wrap"
      ) + " svelte-kqrm1b"), Be(s, "role", "log"), Be(s, "aria-label", "chatbot conversation"), Be(s, "aria-live", "polite"), rt(
        s,
        "placeholder-container",
        /*value*/
        a[0] === null || /*value*/
        a[0].length === 0
      );
    },
    m(j, G) {
      x && x.m(j, G), Bt(j, n, G), Bt(j, s, G), Cn(s, i), ~u && B[u].m(i, null), a[31](s), p = !0, b || (y = Of(i1.call(null, i)), b = !0);
    },
    p(j, G) {
      /*show_share_button*/
      j[4] && /*value*/
      j[0] !== null && /*value*/
      j[0].length > 0 ? x ? (x.p(j, G), G[0] & /*show_share_button, value*/
      17 && _e(x, 1)) : (x = Ha(j), x.c(), _e(x, 1), x.m(n.parentNode, n)) : x && (A0(), Me(x, 1, 1, () => {
        x = null;
      }), v0());
      let U = u;
      u = q(j), u === U ? ~u && B[u].p(W(j, u), G) : (o && (A0(), Me(B[U], 1, 1, () => {
        B[U] = null;
      }), v0()), ~u ? (o = B[u], o ? o.p(W(j, u), G) : (o = B[u] = C[u](W(j, u)), o.c()), _e(o, 1), o.m(i, null)) : o = null), (!p || G[0] & /*layout*/
      4096) && rt(
        i,
        "bubble-gap",
        /*layout*/
        j[12] === "bubble"
      ), (!p || G[0] & /*layout*/
      4096 && f !== (f = Oa(
        /*layout*/
        j[12] === "bubble" ? "bubble-wrap" : "panel-wrap"
      ) + " svelte-kqrm1b")) && Be(s, "class", f), (!p || G[0] & /*layout, value*/
      4097) && rt(
        s,
        "placeholder-container",
        /*value*/
        j[0] === null || /*value*/
        j[0].length === 0
      );
    },
    i(j) {
      p || (_e(x), _e(o), p = !0);
    },
    o(j) {
      Me(x), Me(o), p = !1;
    },
    d(j) {
      j && (zt(n), zt(s)), x && x.d(j), ~u && B[u].d(), a[31](null), b = !1, y();
    }
  };
}
function ud(a) {
  return "file" in a;
}
function cd(a) {
  const n = [];
  let s = [], i = null;
  for (const u of a)
    u.role === i ? s.push(u) : (s.length > 0 && n.push(s), s = [u], i = u.role);
  return s.length > 0 && n.push(s), n;
}
function hd(a, n, s) {
  let i, { value: u = [] } = n, o = null, { latex_delimiters: f } = n, { pending_message: p = !1 } = n, { selectable: b = !1 } = n, { likeable: y = !1 } = n, { show_share_button: x = !1 } = n, { rtl: C = !1 } = n, { show_copy_button: B = !1 } = n, { avatar_images: q = [null, null] } = n, { sanitize_html: W = !0 } = n, { bubble_full_width: j = !0 } = n, { render_markdown: G = !0 } = n, { line_breaks: U = !0 } = n, { i18n: A } = n, { layout: S = "bubble" } = n, { placeholder: M = null } = n, I, O;
  const H = Xf();
  Wf(() => {
    O = I && I.offsetHeight + I.scrollTop > I.scrollHeight - 100;
  });
  const J = () => {
    O && I.scrollTo(0, I.scrollHeight);
  };
  jf(() => {
    O && (J(), I.querySelectorAll("img").forEach((V) => {
      V.addEventListener("load", () => {
        J();
      });
    }));
  });
  function K(V, he) {
    var Ke;
    H("select", {
      index: V,
      value: he.content || ((Ke = he.file) === null || Ke === void 0 ? void 0 : Ke.url)
    });
  }
  function le(V) {
    R0.call(this, a, V);
  }
  function ce(V) {
    R0.call(this, a, V);
  }
  function pe(V) {
    R0.call(this, a, V);
  }
  function ve(V) {
    R0.call(this, a, V);
  }
  function Ie(V) {
    R0.call(this, a, V);
  }
  function ut(V) {
    R0.call(this, a, V);
  }
  function st(V) {
    R0.call(this, a, V);
  }
  function mt(V) {
    R0.call(this, a, V);
  }
  const Oe = (V, he) => K(V, he[0]), $ = (V, he, Ke) => {
    Ke.key === "Enter" && K(V, he[0]);
  };
  function Fe(V) {
    qf[V ? "unshift" : "push"](() => {
      I = V, s(14, I);
    });
  }
  return a.$$set = (V) => {
    "value" in V && s(0, u = V.value), "latex_delimiters" in V && s(1, f = V.latex_delimiters), "pending_message" in V && s(2, p = V.pending_message), "selectable" in V && s(3, b = V.selectable), "likeable" in V && s(17, y = V.likeable), "show_share_button" in V && s(4, x = V.show_share_button), "rtl" in V && s(5, C = V.rtl), "show_copy_button" in V && s(18, B = V.show_copy_button), "avatar_images" in V && s(6, q = V.avatar_images), "sanitize_html" in V && s(7, W = V.sanitize_html), "bubble_full_width" in V && s(8, j = V.bubble_full_width), "render_markdown" in V && s(9, G = V.render_markdown), "line_breaks" in V && s(10, U = V.line_breaks), "i18n" in V && s(11, A = V.i18n), "layout" in V && s(12, S = V.layout), "placeholder" in V && s(13, M = V.placeholder);
  }, a.$$.update = () => {
    a.$$.dirty[0] & /*adjust_text_size*/
    1048576 && i(), a.$$.dirty[0] & /*value, old_value*/
    524289 && (Bs(u, o) || (s(19, o = u), H("change")));
  }, s(20, i = () => {
    let he = getComputedStyle(document.body).getPropertyValue("--body-text-size"), Ke;
    switch (he) {
      case "13px":
        Ke = 14;
        break;
      case "14px":
        Ke = 16;
        break;
      case "16px":
        Ke = 20;
        break;
      default:
        Ke = 14;
        break;
    }
    document.body.style.setProperty("--chatbot-body-text-size", Ke + "px");
  }), [
    u,
    f,
    p,
    b,
    x,
    C,
    q,
    W,
    j,
    G,
    U,
    A,
    S,
    M,
    I,
    J,
    K,
    y,
    B,
    o,
    i,
    le,
    ce,
    pe,
    ve,
    Ie,
    ut,
    st,
    mt,
    Oe,
    $,
    Fe
  ];
}
class fd extends Lf {
  constructor(n) {
    super(), Pf(
      this,
      n,
      hd,
      od,
      Uf,
      {
        value: 0,
        latex_delimiters: 1,
        pending_message: 2,
        selectable: 3,
        likeable: 17,
        show_share_button: 4,
        rtl: 5,
        show_copy_button: 18,
        avatar_images: 6,
        sanitize_html: 7,
        bubble_full_width: 8,
        render_markdown: 9,
        line_breaks: 10,
        i18n: 11,
        layout: 12,
        placeholder: 13
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: dd,
  append: md,
  assign: pd,
  attr: gd,
  check_outros: Xa,
  create_component: Mr,
  destroy_component: zr,
  detach: Ya,
  element: bd,
  get_spread_object: wd,
  get_spread_update: yd,
  group_outros: Za,
  init: _d,
  insert: Ka,
  mount_component: Br,
  safe_not_equal: kd,
  space: Qa,
  transition_in: c0,
  transition_out: I0
} = window.__gradio__svelte__internal;
function Ja(a) {
  let n, s;
  const i = [
    {
      autoscroll: (
        /*gradio*/
        a[19].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      a[19].i18n
    ) },
    /*loading_status*/
    a[21],
    {
      show_progress: (
        /*loading_status*/
        a[21].show_progress === "hidden" ? "hidden" : "minimal"
      )
    }
  ];
  let u = {};
  for (let o = 0; o < i.length; o += 1)
    u = pd(u, i[o]);
  return n = new J2({ props: u }), n.$on(
    "clear_status",
    /*clear_status_handler*/
    a[26]
  ), {
    c() {
      Mr(n.$$.fragment);
    },
    m(o, f) {
      Br(n, o, f), s = !0;
    },
    p(o, f) {
      const p = f[0] & /*gradio, loading_status*/
      2621440 ? yd(i, [
        f[0] & /*gradio*/
        524288 && {
          autoscroll: (
            /*gradio*/
            o[19].autoscroll
          )
        },
        f[0] & /*gradio*/
        524288 && { i18n: (
          /*gradio*/
          o[19].i18n
        ) },
        f[0] & /*loading_status*/
        2097152 && wd(
          /*loading_status*/
          o[21]
        ),
        f[0] & /*loading_status*/
        2097152 && {
          show_progress: (
            /*loading_status*/
            o[21].show_progress === "hidden" ? "hidden" : "minimal"
          )
        }
      ]) : {};
      n.$set(p);
    },
    i(o) {
      s || (c0(n.$$.fragment, o), s = !0);
    },
    o(o) {
      I0(n.$$.fragment, o), s = !1;
    },
    d(o) {
      zr(n, o);
    }
  };
}
function $a(a) {
  let n, s;
  return n = new q1({
    props: {
      show_label: (
        /*show_label*/
        a[7]
      ),
      Icon: ac,
      float: !1,
      label: (
        /*label*/
        a[6] || "Chatbot"
      )
    }
  }), {
    c() {
      Mr(n.$$.fragment);
    },
    m(i, u) {
      Br(n, i, u), s = !0;
    },
    p(i, u) {
      const o = {};
      u[0] & /*show_label*/
      128 && (o.show_label = /*show_label*/
      i[7]), u[0] & /*label*/
      64 && (o.label = /*label*/
      i[6] || "Chatbot"), n.$set(o);
    },
    i(i) {
      s || (c0(n.$$.fragment, i), s = !0);
    },
    o(i) {
      I0(n.$$.fragment, i), s = !1;
    },
    d(i) {
      zr(n, i);
    }
  };
}
function Dd(a) {
  var b;
  let n, s, i, u, o, f = (
    /*loading_status*/
    a[21] && Ja(a)
  ), p = (
    /*show_label*/
    a[7] && $a(a)
  );
  return u = new fd({
    props: {
      i18n: (
        /*gradio*/
        a[19].i18n
      ),
      selectable: (
        /*_selectable*/
        a[8]
      ),
      likeable: (
        /*likeable*/
        a[9]
      ),
      show_share_button: (
        /*show_share_button*/
        a[10]
      ),
      value: (
        /*_value*/
        a[24]
      ),
      latex_delimiters: (
        /*latex_delimiters*/
        a[18]
      ),
      render_markdown: (
        /*render_markdown*/
        a[16]
      ),
      pending_message: (
        /*loading_status*/
        ((b = a[21]) == null ? void 0 : b.status) === "pending"
      ),
      rtl: (
        /*rtl*/
        a[11]
      ),
      show_copy_button: (
        /*show_copy_button*/
        a[12]
      ),
      avatar_images: (
        /*avatar_images*/
        a[20]
      ),
      sanitize_html: (
        /*sanitize_html*/
        a[13]
      ),
      bubble_full_width: (
        /*bubble_full_width*/
        a[14]
      ),
      line_breaks: (
        /*line_breaks*/
        a[17]
      ),
      layout: (
        /*layout*/
        a[15]
      ),
      placeholder: (
        /*placeholder*/
        a[23]
      )
    }
  }), u.$on(
    "change",
    /*change_handler*/
    a[27]
  ), u.$on(
    "select",
    /*select_handler*/
    a[28]
  ), u.$on(
    "like",
    /*like_handler*/
    a[29]
  ), u.$on(
    "share",
    /*share_handler*/
    a[30]
  ), u.$on(
    "error",
    /*error_handler*/
    a[31]
  ), {
    c() {
      f && f.c(), n = Qa(), s = bd("div"), p && p.c(), i = Qa(), Mr(u.$$.fragment), gd(s, "class", "wrapper svelte-r8zcdo");
    },
    m(y, x) {
      f && f.m(y, x), Ka(y, n, x), Ka(y, s, x), p && p.m(s, null), md(s, i), Br(u, s, null), o = !0;
    },
    p(y, x) {
      var B;
      /*loading_status*/
      y[21] ? f ? (f.p(y, x), x[0] & /*loading_status*/
      2097152 && c0(f, 1)) : (f = Ja(y), f.c(), c0(f, 1), f.m(n.parentNode, n)) : f && (Za(), I0(f, 1, 1, () => {
        f = null;
      }), Xa()), /*show_label*/
      y[7] ? p ? (p.p(y, x), x[0] & /*show_label*/
      128 && c0(p, 1)) : (p = $a(y), p.c(), c0(p, 1), p.m(s, i)) : p && (Za(), I0(p, 1, 1, () => {
        p = null;
      }), Xa());
      const C = {};
      x[0] & /*gradio*/
      524288 && (C.i18n = /*gradio*/
      y[19].i18n), x[0] & /*_selectable*/
      256 && (C.selectable = /*_selectable*/
      y[8]), x[0] & /*likeable*/
      512 && (C.likeable = /*likeable*/
      y[9]), x[0] & /*show_share_button*/
      1024 && (C.show_share_button = /*show_share_button*/
      y[10]), x[0] & /*_value*/
      16777216 && (C.value = /*_value*/
      y[24]), x[0] & /*latex_delimiters*/
      262144 && (C.latex_delimiters = /*latex_delimiters*/
      y[18]), x[0] & /*render_markdown*/
      65536 && (C.render_markdown = /*render_markdown*/
      y[16]), x[0] & /*loading_status*/
      2097152 && (C.pending_message = /*loading_status*/
      ((B = y[21]) == null ? void 0 : B.status) === "pending"), x[0] & /*rtl*/
      2048 && (C.rtl = /*rtl*/
      y[11]), x[0] & /*show_copy_button*/
      4096 && (C.show_copy_button = /*show_copy_button*/
      y[12]), x[0] & /*avatar_images*/
      1048576 && (C.avatar_images = /*avatar_images*/
      y[20]), x[0] & /*sanitize_html*/
      8192 && (C.sanitize_html = /*sanitize_html*/
      y[13]), x[0] & /*bubble_full_width*/
      16384 && (C.bubble_full_width = /*bubble_full_width*/
      y[14]), x[0] & /*line_breaks*/
      131072 && (C.line_breaks = /*line_breaks*/
      y[17]), x[0] & /*layout*/
      32768 && (C.layout = /*layout*/
      y[15]), x[0] & /*placeholder*/
      8388608 && (C.placeholder = /*placeholder*/
      y[23]), u.$set(C);
    },
    i(y) {
      o || (c0(f), c0(p), c0(u.$$.fragment, y), o = !0);
    },
    o(y) {
      I0(f), I0(p), I0(u.$$.fragment, y), o = !1;
    },
    d(y) {
      y && (Ya(n), Ya(s)), f && f.d(y), p && p.d(), zr(u);
    }
  };
}
function xd(a) {
  let n, s;
  return n = new x1({
    props: {
      elem_id: (
        /*elem_id*/
        a[0]
      ),
      elem_classes: (
        /*elem_classes*/
        a[1]
      ),
      visible: (
        /*visible*/
        a[2]
      ),
      padding: !1,
      scale: (
        /*scale*/
        a[4]
      ),
      min_width: (
        /*min_width*/
        a[5]
      ),
      height: (
        /*height*/
        a[22]
      ),
      allow_overflow: !1,
      $$slots: { default: [Dd] },
      $$scope: { ctx: a }
    }
  }), {
    c() {
      Mr(n.$$.fragment);
    },
    m(i, u) {
      Br(n, i, u), s = !0;
    },
    p(i, u) {
      const o = {};
      u[0] & /*elem_id*/
      1 && (o.elem_id = /*elem_id*/
      i[0]), u[0] & /*elem_classes*/
      2 && (o.elem_classes = /*elem_classes*/
      i[1]), u[0] & /*visible*/
      4 && (o.visible = /*visible*/
      i[2]), u[0] & /*scale*/
      16 && (o.scale = /*scale*/
      i[4]), u[0] & /*min_width*/
      32 && (o.min_width = /*min_width*/
      i[5]), u[0] & /*height*/
      4194304 && (o.height = /*height*/
      i[22]), u[0] & /*gradio, _selectable, likeable, show_share_button, _value, latex_delimiters, render_markdown, loading_status, rtl, show_copy_button, avatar_images, sanitize_html, bubble_full_width, line_breaks, layout, placeholder, value, show_label, label*/
      29360072 | u[1] & /*$$scope*/
      4 && (o.$$scope = { dirty: u, ctx: i }), n.$set(o);
    },
    i(i) {
      s || (c0(n.$$.fragment, i), s = !0);
    },
    o(i) {
      I0(n.$$.fragment, i), s = !1;
    },
    d(i) {
      zr(n, i);
    }
  };
}
function vd(a, n, s) {
  let { elem_id: i = "" } = n, { elem_classes: u = [] } = n, { visible: o = !0 } = n, { value: f = [] } = n, { scale: p = null } = n, { min_width: b = void 0 } = n, { label: y } = n, { show_label: x = !0 } = n, { root: C } = n, { _selectable: B = !1 } = n, { likeable: q = !1 } = n, { show_share_button: W = !1 } = n, { rtl: j = !1 } = n, { show_copy_button: G = !1 } = n, { sanitize_html: U = !0 } = n, { bubble_full_width: A = !0 } = n, { layout: S = "bubble" } = n, { render_markdown: M = !0 } = n, { line_breaks: I = !0 } = n, { latex_delimiters: O } = n, { gradio: H } = n, { avatar_images: J = [null, null] } = n, K, { loading_status: le = void 0 } = n, { height: ce = 400 } = n, { placeholder: pe = null } = n;
  const ve = () => H.dispatch("clear_status", le), Ie = () => H.dispatch("change", f), ut = ($) => H.dispatch("select", $.detail), st = ($) => H.dispatch("like", $.detail), mt = ($) => H.dispatch("share", $.detail), Oe = ($) => H.dispatch("error", $.detail);
  return a.$$set = ($) => {
    "elem_id" in $ && s(0, i = $.elem_id), "elem_classes" in $ && s(1, u = $.elem_classes), "visible" in $ && s(2, o = $.visible), "value" in $ && s(3, f = $.value), "scale" in $ && s(4, p = $.scale), "min_width" in $ && s(5, b = $.min_width), "label" in $ && s(6, y = $.label), "show_label" in $ && s(7, x = $.show_label), "root" in $ && s(25, C = $.root), "_selectable" in $ && s(8, B = $._selectable), "likeable" in $ && s(9, q = $.likeable), "show_share_button" in $ && s(10, W = $.show_share_button), "rtl" in $ && s(11, j = $.rtl), "show_copy_button" in $ && s(12, G = $.show_copy_button), "sanitize_html" in $ && s(13, U = $.sanitize_html), "bubble_full_width" in $ && s(14, A = $.bubble_full_width), "layout" in $ && s(15, S = $.layout), "render_markdown" in $ && s(16, M = $.render_markdown), "line_breaks" in $ && s(17, I = $.line_breaks), "latex_delimiters" in $ && s(18, O = $.latex_delimiters), "gradio" in $ && s(19, H = $.gradio), "avatar_images" in $ && s(20, J = $.avatar_images), "loading_status" in $ && s(21, le = $.loading_status), "height" in $ && s(22, ce = $.height), "placeholder" in $ && s(23, pe = $.placeholder);
  }, a.$$.update = () => {
    a.$$.dirty[0] & /*value*/
    8 && s(24, K = f);
  }, [
    i,
    u,
    o,
    f,
    p,
    b,
    y,
    x,
    B,
    q,
    W,
    j,
    G,
    U,
    A,
    S,
    M,
    I,
    O,
    H,
    J,
    le,
    ce,
    pe,
    K,
    C,
    ve,
    Ie,
    ut,
    st,
    mt,
    Oe
  ];
}
class qd extends dd {
  constructor(n) {
    super(), _d(
      this,
      n,
      vd,
      xd,
      kd,
      {
        elem_id: 0,
        elem_classes: 1,
        visible: 2,
        value: 3,
        scale: 4,
        min_width: 5,
        label: 6,
        show_label: 7,
        root: 25,
        _selectable: 8,
        likeable: 9,
        show_share_button: 10,
        rtl: 11,
        show_copy_button: 12,
        sanitize_html: 13,
        bubble_full_width: 14,
        layout: 15,
        render_markdown: 16,
        line_breaks: 17,
        latex_delimiters: 18,
        gradio: 19,
        avatar_images: 20,
        loading_status: 21,
        height: 22,
        placeholder: 23
      },
      null,
      [-1, -1]
    );
  }
}
export {
  fd as BaseChatBot,
  qd as default
};
