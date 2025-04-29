import {
    d as oe,
    r,
    o as te,
    n as K,
    S as fe,
    g as u,
    c as E,
    a as S,
    b as xe,
    _ as _e,
    e,
    f as t,
    h as ce,
    i as Be,
    j as Me,
    k as he,
    u as y,
    l as k,
    w as s,
    m as l,
    p as be,
    q as Ye,
    F as Pe,
    s as We,
    t as Yt,
    v as ae,
    x as Kt,
    y as Xt,
    z as Ke,
    A as me,
    B as Ae,
    C as Qt,
    D as el,
    E as H,
    G as Oe,
    H as Fe,
    I as mt,
    J as tl,
    K as dt,
    L as tt,
    M as Ot,
    N as Lt,
    O as St,
    P as Ne,
    Q as Ht,
    R as lt,
    T as Rt,
    U as ve,
    V as $e,
    W as Et,
    X as Re,
    Y as it,
    Z as ut,
    $ as At,
    a0 as Ie,
    a1 as ge,
    a2 as ct,
    a3 as zt,
    a4 as ot,
    a5 as ll,
    a6 as ol,
    a7 as sl
} from "./BYk0vxej.js";
const wt = oe({
        __name: "TextReveal",
        props: {
            delay: {
                type: Number,
                default: 0
            }
        },
        setup($, {
            expose: a
        }) {
            const f = r(null);
            let m;
            const v = $;
            return te(async () => {
                await K();
                const d = new fe(f.value, {
                    type: "lines, chars",
                    linesClass: "line"
                });
                d.lines.forEach((n, p) => {
                    u.set(n.children, {
                        y: -n.getBoundingClientRect().height,
                        opacity: 0
                    })
                }), m = u.timeline({
                    delay: v.delay
                }), m.to(f.value, {
                    opacity: 1,
                    ease: "power2.inOut"
                }), m.to(d.chars, {
                    y: 0,
                    opacity: 1,
                    stagger: .001,
                    duration: .5,
                    ease: "sine.inOut"
                })
            }), a({
                reverse: () => {
                    m == null || m.reverse()
                }
            }), (d, n) => (S(), E("div", {
                ref_key: "root",
                ref: f,
                class: "opacity-0"
            }, [xe(d.$slots, "default")], 512))
        }
    }),
    nl = {},
    rl = {
        class: "@text-[48] font-medium @leading-[50] @tracking-[-0.2] text-white"
    };

function al($, a) {
    return S(), E("div", rl, [xe($.$slots, "default")])
}
const Le = _e(nl, [
        ["render", al]
    ]),
    il = {
        class: "h-full w-full @rounded-[60] overflow-hidden relative"
    },
    ul = {
        class: "absolute w-full h-full flex @p-[30] flex-col justify-between"
    },
    dl = {
        class: "flex justify-between items-end @pr-[10]"
    },
    cl = oe({
        __name: "Hero",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null);
            r(null);
            let i, d;
            return te(async () => {
                var n, p;
                await K(), i = u.timeline({
                    delay: 2
                }), i.addLabel("start"), i.to((n = m.value) == null ? void 0 : n.$el, {
                    scale: 1,
                    duration: 2,
                    ease: "power2.inOut"
                }, "start"), i.to(v.value, {
                    opacity: .6,
                    duration: 2,
                    scale: 1,
                    ease: "power2.inOut"
                }, "start"), d = u.timeline({
                    scrollTrigger: {
                        trigger: a.value,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1
                    }
                }), d.addLabel("start"), d.to((p = m.value) == null ? void 0 : p.$el, {
                    scale: 1.1,
                    ease: "sine.inOut"
                }, "start"), d.to(v.value, {
                    scale: 1.4,
                    ease: "linear"
                }, "start")
            }), (n, p) => {
                const c = ce,
                    o = wt,
                    h = Le,
                    j = be;
                return S(), E("section", {
                    id: "hero",
                    class: "@p-[10] h-svh @mb-[120]",
                    ref_key: "root",
                    ref: a
                }, [e("div", il, [t(c, {
                    src: "/images/cap1.png",
                    class: "object-cover object-center absolute w-full h-full scale-[1.2]",
                    ref_key: "image",
                    ref: m,
                    alt: "Capsules Hero"
                }, null, 512), e("video", {
                    preload: "metadata",
                    class: Be("pointer-events-none absolute object-cover hide-in-safari object-center h-full w-full opacity-0 mix-blend-hard-light  scale-[1.75]"),
                    muted: "",
                    playsinline: "",
                    autoplay: "",
                    loop: "",
                    ref_key: "smoke",
                    ref: v
                }, p[0] || (p[0] = [e("source", {
                    src: Me,
                    type: "video/mp4"
                }, null, -1)]), 512), e("div", ul, [e("div", null, [t(he, {
                    ref_key: "logo",
                    ref: f,
                    class: "overflow-hidden @w-[1030]",
                    color: y(k).white
                }, null, 8, ["color"])]), e("div", dl, [t(h, null, {
                    default: s(() => [t(o, {
                        delay: 2.8
                    }, {
                        default: s(() => p[1] || (p[1] = [l("Closer to"), e("br", null, null, -1), l("Nature—Closer"), e("br", null, null, -1), l("to Yourself")])),
                        _: 1
                    })]),
                    _: 1
                }), t(j, {
                    class: "text-white @mb-[24]",
                    color: y(k).white
                }, {
                    default: s(() => [t(o, {
                        delay: 2.8
                    }, {
                        default: s(() => p[2] || (p[2] = [l("Spend unforgettable and remarkable time"), e("br", null, null, -1), l("in the Californian desert with—Capsules.")])),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["color"])])])])], 512)
            }
        }
    }),
    fl = {},
    pl = {
        class: "@text-[100] @leading-[96] @tracking-[-4]"
    };

function vl($, a) {
    return S(), E("div", pl, [xe($.$slots, "default")])
}
const st = _e(fl, [
        ["render", vl]
    ]),
    ml = {
        id: "welcome"
    },
    wl = {
        class: "flex @px-[40] items-center"
    },
    xl = {
        class: "flex flex-1 @gap-[2]"
    },
    hl = {
        class: "relative overflow-hidden @rounded-[140] @w-[340] @h-[235]"
    },
    bl = {
        class: "relative overflow-hidden @rounded-[140] @w-[340] @h-[235]"
    },
    gl = {
        class: "flex flex-1"
    },
    yl = oe({
        __name: "Welcome",
        setup($) {
            const a = r(null),
                f = r(null);
            return te(async () => {
                var i, d;
                await K(), new fe((i = f.value) == null ? void 0 : i.$el, {
                    type: "lines"
                }).lines.forEach(n => {
                    var h;
                    let p = document.createElement("span");
                    p.classList.add("relative", "block", "@mt-[-20]");
                    let c = document.createElement("span");
                    c.classList.add("relative", "block", "text-darkBrown"), c.innerHTML = n.innerHTML;
                    let o = document.createElement("span");
                    o.classList.add("clip-text-welcome"), o.innerHTML = n.innerHTML, c.appendChild(o), p.appendChild(c), (h = n.parentNode) == null || h.replaceChild(p, n)
                }), await K();
                const v = (d = a.value) == null ? void 0 : d.querySelectorAll(".clip-text-welcome");
                v && u.to(v, {
                    clipPath: "inset(0% 0 0% 0)",
                    stagger: .38,
                    scrollTrigger: {
                        trigger: a.value,
                        start: "top 80%",
                        end: "bottom 50%",
                        scrub: !0
                    }
                })
            }), (m, v) => {
                const i = st,
                    d = ce,
                    n = Le;
                return S(), E("section", ml, [e("div", {
                    class: "@py-[160] @px-[40]",
                    ref_key: "textRoot",
                    ref: a
                }, [t(i, {
                    class: "@max-w-[1600] !leading-[1.2]",
                    ref_key: "text",
                    ref: f
                }, {
                    default: s(() => v[0] || (v[0] = [l("Welcome to a world of wild California desert with Capsules®, where you will discover exquisite nature observing it from capsule houses, nestled in the one of the most breathtaking destination on the United States.")])),
                    _: 1
                }, 512)], 512), e("div", wl, [e("div", xl, [e("div", hl, [t(d, {
                    alt: "Welcome Image 1",
                    src: "/images/welcome-1.png",
                    class: "object-cover object-center absolute w-full h-full"
                })]), e("div", bl, [t(d, {
                    alt: "Welcome Image 2",
                    src: "/images/welcome-2.png",
                    class: "object-cover object-center absolute w-full h-full"
                })])]), e("div", gl, [t(n, {
                    class: "font-normal @max-w-[788] !text-lightBrown"
                }, {
                    default: s(() => v[1] || (v[1] = [l("A place where you can be with yourself and your loved ones."), e("br", null, null, -1), l("A place where you can experience unforgettable desert things.")])),
                    _: 1
                })])])])
            }
        }
    }),
    _l = {},
    Cl = {
        class: "@text-[230] @leading-[200] @tracking-[-4] text-white"
    };

function kl($, a) {
    return S(), E("div", Cl, [xe($.$slots, "default")])
}
const ft = _e(_l, [
        ["render", kl]
    ]),
    $l = {
        class: "flex-1"
    },
    jl = {
        class: "flex-1"
    },
    Hl = {
        class: "flex flex-col @gap-[10]"
    },
    Bl = {
        class: "flex @gap-[10]"
    },
    Ml = {
        class: "@border-[2] border-lightBrown @px-[30] @py-[15] rounded-full"
    },
    Tl = {
        class: "@border-[2] border-white @px-[30] @py-[15] rounded-full"
    },
    Ol = {
        class: "@border-[2] border-lightBrown @px-[30] @py-[15] rounded-full"
    },
    Ll = {
        class: "flex @gap-[10]"
    },
    Sl = {
        class: "@border-[2] border-white @px-[30] @py-[15] rounded-full"
    },
    Rl = {
        class: "@border-[2] border-lightBrown @px-[30] @py-[15] rounded-full"
    },
    El = {
        class: "@border-[2] border-white @px-[30] @py-[15] rounded-full"
    },
    Al = oe({
        __name: "Choose",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(null),
                d = r(null);
            let n;
            return te(async () => {
                var o, h, j;
                await K();
                const p = new fe((o = v.value) == null ? void 0 : o.$el, {
                    type: "lines,words"
                });
                p.lines.forEach(C => {
                    C.classList.add("@mt-[-130]")
                }), p.words.forEach(C => {
                    C.innerHTML = `<span class="relative block translate-y-[-100%] will-change-transform clip-text-choose">${C.innerHTML}</span>`, C.classList.add("relative", "block", "overflow-hidden")
                });
                const c = (h = f.value) == null ? void 0 : h.querySelectorAll(".clip-text-choose");
                c && u.to([...c], {
                    y: 0,
                    scrollTrigger: {
                        trigger: f.value,
                        start: "top 80%",
                        end: "60% 40%",
                        scrub: !0
                    }
                }), n = u.timeline({
                    scrollTrigger: {
                        trigger: a.value,
                        start: "20% bottom",
                        end: "80% bottom",
                        scrub: !0
                    }
                }), n.addLabel("start"), n.to(i.value, {
                    opacity: 1
                }, "start"), n.to((j = d.value) == null ? void 0 : j.$el, {
                    opacity: 1
                }, "start")
            }), (p, c) => {
                const o = be,
                    h = ft,
                    j = Le;
                return S(), E("section", {
                    id: "choose",
                    class: "relative @pt-[70] @mt-[210] @pb-[140]",
                    ref_key: "root",
                    ref: a
                }, [e("div", {
                    ref_key: "gradient",
                    ref: m,
                    class: "absolute z-[-1] top-0 bg-gradient-to-b from-black via-middleBrown to-black min-h-[400vh] w-full"
                }, null, 512), e("div", {
                    class: "@px-[40]",
                    ref_key: "rootText",
                    ref: f
                }, [t(o, {
                    class: "text-white opacity-0",
                    ref_key: "headline",
                    ref: d,
                    color: y(k).white
                }, {
                    default: s(() => c[0] || (c[0] = [l("Discover available Capsules®")])),
                    _: 1
                }, 8, ["color"]), t(h, {
                    class: "@mt-[50] overflow-hidden !leading-[1.2] @pt-[100]",
                    ref_key: "text",
                    ref: v
                }, {
                    default: s(() => c[1] || (c[1] = [l("Choose the one you like best")])),
                    _: 1
                }, 512)], 512), e("div", {
                    class: "flex @px-[40] opacity-0",
                    ref_key: "bottomBar",
                    ref: i
                }, [e("div", $l, [t(j, {
                    class: "font-normal @max-w-[788] !text-lightBrown"
                }, {
                    default: s(() => c[2] || (c[2] = [l("You can choose one of three premium capsule houses in our offer. Each of our capsules provides the highest quality and meets the standards adjusted to your needs. Choose the one you like.")])),
                    _: 1
                })]), e("div", jl, [t(o, {
                    class: "!text-white font-semibold @mb-[50]"
                }, {
                    default: s(() => c[3] || (c[3] = [l("All Capsules® houses—has built"), e("br", null, null, -1), l("based on the same rules:")])),
                    _: 1
                }), e("div", Hl, [e("div", Bl, [e("div", Ml, [t(j, {
                    class: "!text-lightBrown !font-normal"
                }, {
                    default: s(() => c[4] || (c[4] = [l("Sustainable")])),
                    _: 1
                })]), e("div", Tl, [t(j, {
                    class: "!font-normal"
                }, {
                    default: s(() => c[5] || (c[5] = [l("Nature—Care")])),
                    _: 1
                })]), e("div", Ol, [t(j, {
                    class: "!text-lightBrown !font-normal"
                }, {
                    default: s(() => c[6] || (c[6] = [l("Smart")])),
                    _: 1
                })])]), e("div", Ll, [e("div", Sl, [t(j, {
                    class: "!font-normal"
                }, {
                    default: s(() => c[7] || (c[7] = [l("Privacy")])),
                    _: 1
                })]), e("div", Rl, [t(j, {
                    class: "!text-lightBrown !font-normal"
                }, {
                    default: s(() => c[8] || (c[8] = [l("Spacious")])),
                    _: 1
                })]), e("div", El, [t(j, {
                    class: "!font-normal"
                }, {
                    default: s(() => c[9] || (c[9] = [l("Glassed-in")])),
                    _: 1
                })])])])])], 512)], 512)
            }
        }
    }),
    zl = {
        __name: "LogoCarousel",
        setup($) {
            const a = r(["/image1.jpg", "/image2.jpg"]),
                f = r(null),
                m = r(null);
            return r(1), te(async () => {
                await K(), Ye.to(m.value, {
                    x: "-100%",
                    duration: 25,
                    ease: "linear",
                    repeat: -1
                }), Ye.timeline({
                    paused: !0,
                    scrollTrigger: {
                        trigger: f.value,
                        start: "-50% center",
                        end: () => `${window.innerHeight/1.5}px center`,
                        scrub: 1
                    }
                })
            }), (v, i) => {
                const d = he;
                return S(), E("div", {
                    ref_key: "container",
                    ref: f,
                    class: "w-screen overflow-hidden flex items-center absolute"
                }, [e("div", {
                    ref_key: "scrollingWrapper",
                    ref: m,
                    class: "flex w-[200%]"
                }, [(S(!0), E(Pe, null, We(a.value, (n, p) => (S(), E("div", {
                    key: p,
                    class: "w-1/2 flex-shrink-0 flex"
                }, [t(d, {
                    class: "@w-[1030] @mr-[50]",
                    color: y(k).white
                }, null, 8, ["color"]), t(d, {
                    class: "@w-[1030] @mr-[50]",
                    color: y(k).white
                }, null, 8, ["color"])]))), 128)), (S(!0), E(Pe, null, We(a.value, (n, p) => (S(), E("div", {
                    key: "dup-" + p,
                    class: "w-1/2 flex-shrink-0 flex"
                }, [t(d, {
                    class: "@w-[1030] @mr-[50]",
                    color: y(k).white
                }, null, 8, ["color"]), t(d, {
                    class: "@w-[1030] @mr-[50]",
                    color: y(k).white
                }, null, 8, ["color"])]))), 128))], 512)], 512)
            }
        }
    },
    Pl = {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Wl = ["fill"],
    Il = ["fill"],
    Ge = oe({
        __name: "Plus",
        props: {
            color: {}
        },
        setup($) {
            const a = $;
            return (f, m) => (S(), E("svg", Pl, [e("rect", {
                width: "22",
                height: "2",
                transform: "matrix(-1 8.42937e-08 8.42937e-08 1 23 11)",
                fill: a.color
            }, null, 8, Wl), e("rect", {
                width: "22",
                height: "2",
                transform: "translate(12.999 0.999512) rotate(90)",
                fill: a.color
            }, null, 8, Il)]))
        }
    }),
    je = {
        __name: "UnderlineHover",
        props: {
            reverse: {
                type: Boolean,
                default: !1
            },
            color: {
                type: String,
                default: k.lightBrown
            }
        },
        setup($) {
            const a = $,
                f = r(null),
                m = r(null);
            let v = null,
                i = null;
            te(() => {
                a.reverse ? (v = u.timeline({
                    paused: !0
                }), v.fromTo(m.value, {
                    left: "-100%"
                }, {
                    left: "0%",
                    duration: .6,
                    ease: "power2.out"
                }), i = u.timeline({
                    paused: !0
                }), i.fromTo(m.value, {
                    left: "0%"
                }, {
                    left: "100%",
                    duration: .6,
                    ease: "power2.out"
                })) : (v = u.timeline({
                    paused: !0
                }), v.fromTo(m.value, {
                    left: "0%"
                }, {
                    left: "100%",
                    duration: .6,
                    ease: "power2.out"
                }), i = u.timeline({
                    paused: !0
                }), i.fromTo(m.value, {
                    left: "-100%"
                }, {
                    left: "0%",
                    duration: .6,
                    ease: "power2.out"
                })), a.reverse ? u.set(m.value, {
                    left: "-100%"
                }) : u.set(m.value, {
                    left: "0%"
                })
            });
            const d = () => {
                    m.value && (v.isActive() && v.kill(), i.isActive() && i.kill(), v.restart())
                },
                n = () => {
                    m.value && (v.isActive() && v.kill(), i.isActive() && i.kill(), i.restart())
                };
            return (p, c) => (S(), E("span", {
                ref_key: "container",
                ref: f,
                class: "relative inline-flex overflow-hidden",
                onMouseenter: d,
                onMouseleave: n
            }, [xe(p.$slots, "default"), e("div", {
                ref_key: "underlineRef",
                ref: m,
                class: "absolute bottom-0 h-[5%] w-full",
                style: Yt({
                    backgroundColor: $.color
                })
            }, null, 4)], 544))
        }
    };

function xt($) {
    return Kt() ? (Xt($), !0) : !1
}
const Pt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ql = $ => $ != null,
    Dl = Object.prototype.toString,
    Vl = $ => Dl.call($) === "[object Object]",
    Ve = () => {},
    Zl = Fl();

function Fl() {
    var $, a;
    return Pt && (($ = window == null ? void 0 : window.navigator) == null ? void 0 : $.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((a = window == null ? void 0 : window.navigator) == null ? void 0 : a.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent))
}

function at($) {
    return Array.isArray($) ? $ : [$]
}

function Nl($, a, f) {
    return ae($, a, {
        ...f,
        immediate: !0
    })
}
const nt = Pt ? window : void 0;

function Ee($) {
    var a;
    const f = Ae($);
    return (a = f == null ? void 0 : f.$el) != null ? a : f
}

function Ze(...$) {
    const a = [],
        f = () => {
            a.forEach(n => n()), a.length = 0
        },
        m = (n, p, c, o) => (n.addEventListener(p, c, o), () => n.removeEventListener(p, c, o)),
        v = me(() => {
            const n = at(Ae($[0])).filter(p => p != null);
            return n.every(p => typeof p != "string") ? n : void 0
        }),
        i = Nl(() => {
            var n, p;
            return [(p = (n = v.value) == null ? void 0 : n.map(c => Ee(c))) != null ? p : [nt].filter(c => c != null), at(Ae(v.value ? $[1] : $[0])), at(y(v.value ? $[2] : $[1])), Ae(v.value ? $[3] : $[2])]
        }, ([n, p, c, o]) => {
            if (f(), !(n != null && n.length) || !(p != null && p.length) || !(c != null && c.length)) return;
            const h = Vl(o) ? {
                ...o
            } : o;
            a.push(...n.flatMap(j => p.flatMap(C => c.map(O => m(j, C, O, h)))))
        }, {
            flush: "post"
        }),
        d = () => {
            i(), f()
        };
    return xt(f), d
}
let Bt = !1;

function ze($, a, f = {}) {
    const {
        window: m = nt,
        ignore: v = [],
        capture: i = !0,
        detectIframe: d = !1,
        controls: n = !1
    } = f;
    if (!m) return n ? {
        stop: Ve,
        cancel: Ve,
        trigger: Ve
    } : Ve;
    if (Zl && !Bt) {
        Bt = !0;
        const _ = {
            passive: !0
        };
        Array.from(m.document.body.children).forEach(b => Ze(b, "click", Ve, _)), Ze(m.document.documentElement, "click", Ve, _)
    }
    let p = !0;
    const c = _ => Ae(v).some(b => {
        if (typeof b == "string") return Array.from(m.document.querySelectorAll(b)).some(M => M === _.target || _.composedPath().includes(M));
        {
            const M = Ee(b);
            return M && (_.target === M || _.composedPath().includes(M))
        }
    });

    function o(_) {
        const b = Ae(_);
        return b && b.$.subTree.shapeFlag === 16
    }

    function h(_, b) {
        const M = Ae(_),
            I = M.$.subTree && M.$.subTree.children;
        return I == null || !Array.isArray(I) ? !1 : I.some(g => g.el === b.target || b.composedPath().includes(g.el))
    }
    const j = _ => {
        const b = Ee($);
        if (_.target != null && !(!(b instanceof Element) && o($) && h($, _)) && !(!b || b === _.target || _.composedPath().includes(b))) {
            if ("detail" in _ && _.detail === 0 && (p = !c(_)), !p) {
                p = !0;
                return
            }
            a(_)
        }
    };
    let C = !1;
    const O = [Ze(m, "click", _ => {
            C || (C = !0, setTimeout(() => {
                C = !1
            }, 0), j(_))
        }, {
            passive: !0,
            capture: i
        }), Ze(m, "pointerdown", _ => {
            const b = Ee($);
            p = !c(_) && !!(b && !_.composedPath().includes(b))
        }, {
            passive: !0
        }), d && Ze(m, "blur", _ => {
            setTimeout(() => {
                var b;
                const M = Ee($);
                ((b = m.document.activeElement) == null ? void 0 : b.tagName) === "IFRAME" && !(M != null && M.contains(m.document.activeElement)) && a(_)
            }, 0)
        }, {
            passive: !0
        })].filter(Boolean),
        T = () => O.forEach(_ => _());
    return n ? {
        stop: T,
        cancel: () => {
            p = !1
        },
        trigger: _ => {
            p = !0, j(_), p = !1
        }
    } : T
}

function Gl() {
    const $ = Ke(!1),
        a = el();
    return a && te(() => {
        $.value = !0
    }, a), $
}

function Ul($) {
    const a = Gl();
    return me(() => (a.value, !!$()))
}

function Jl($, a, f = {}) {
    const {
        window: m = nt,
        ...v
    } = f;
    let i;
    const d = Ul(() => m && "MutationObserver" in m),
        n = () => {
            i && (i.disconnect(), i = void 0)
        },
        p = me(() => {
            const j = Ae($),
                C = at(j).map(Ee).filter(ql);
            return new Set(C)
        }),
        c = ae(() => p.value, j => {
            n(), d.value && j.size && (i = new MutationObserver(a), j.forEach(C => i.observe(C, v)))
        }, {
            immediate: !0,
            flush: "post"
        }),
        o = () => i == null ? void 0 : i.takeRecords(),
        h = () => {
            c(), n()
        };
    return xt(h), {
        isSupported: d,
        stop: h,
        takeRecords: o
    }
}

function Yl($, a, f = {}) {
    const {
        window: m = nt,
        document: v = m == null ? void 0 : m.document,
        flush: i = "sync"
    } = f;
    if (!m || !v) return Ve;
    let d;
    const n = o => {
            d == null || d(), d = o
        },
        p = Qt(() => {
            const o = Ee($);
            if (o) {
                const {
                    stop: h
                } = Jl(v, j => {
                    j.map(O => [...O.removedNodes]).flat().some(O => O === o || O.contains(o)) && a(j)
                }, {
                    window: m,
                    childList: !0,
                    subtree: !0
                });
                n(h)
            }
        }, {
            flush: i
        }),
        c = () => {
            p(), n()
        };
    return xt(c), c
}

function we($, a = {}) {
    const {
        delayEnter: f = 0,
        delayLeave: m = 0,
        triggerOnRemoval: v = !1,
        window: i = nt
    } = a, d = Ke(!1);
    let n;
    const p = c => {
        const o = c ? f : m;
        n && (clearTimeout(n), n = void 0), o ? n = setTimeout(() => d.value = c, o) : d.value = c
    };
    return i && (Ze($, "mouseenter", () => p(!0), {
        passive: !0
    }), Ze($, "mouseleave", () => p(!1), {
        passive: !0
    }), v && Yl(me(() => Ee($)), () => p(!1))), d
}
const Kl = {
        class: "@px-[30] flex justify-between items-center w-full"
    },
    Xl = {
        class: "absolute @left-[20] @bottom-[48] flex z-[10] items-center"
    },
    Ql = {
        class: "@px-[30] flex justify-between items-center w-full absolute"
    },
    eo = {
        class: "absolute @left-[20] @bottom-[48] flex z-[10] items-center"
    },
    to = {
        class: "@px-[30] flex justify-between items-center w-full absolute"
    },
    lo = {
        class: "absolute @left-[20] @bottom-[48] flex z-[10] items-center"
    },
    oo = {
        class: "flex flex-col opacity-0"
    },
    so = {
        class: "flex justify-between"
    },
    no = {
        class: "flex flex-col"
    },
    ro = {
        class: "flex @w-[161] @h-[82] relative @rounded-[23] overflow-hidden"
    },
    ao = {
        class: "flex justify-between @py-[14] relative"
    },
    io = {
        class: "flex justify-between @py-[14] relative"
    },
    uo = {
        class: "flex justify-between @py-[14] relative"
    },
    co = {
        class: "flex justify-between @py-[14] relative"
    },
    fo = {
        class: "flex justify-between @py-[14] relative"
    },
    po = {
        class: "flex justify-between @py-[14] relative"
    },
    vo = {
        class: "flex bg-black justify-between @rounded-[50] @p-[35] @ml-[-20] w-[20%] @h-[90] opacity-0 origin-left clip-details-bar"
    },
    mo = {
        class: "flex justify-between w-full opacity-0 absolute left-0 right-0 @px-[25]"
    },
    wo = {
        class: "flex flex-col opacity-0"
    },
    xo = {
        class: "flex justify-between"
    },
    ho = {
        class: "flex flex-col"
    },
    bo = {
        class: "flex @w-[161] @h-[82] relative @rounded-[23] overflow-hidden"
    },
    go = {
        class: "flex justify-between @py-[14] relative"
    },
    yo = {
        class: "flex justify-between @py-[14] relative"
    },
    _o = {
        class: "flex justify-between @py-[14] relative"
    },
    Co = {
        class: "flex justify-between @py-[14] relative"
    },
    ko = {
        class: "flex justify-between @py-[14] relative"
    },
    $o = {
        class: "flex justify-between @py-[14] relative"
    },
    jo = {
        class: "flex bg-black justify-between @rounded-[50] @p-[35] @ml-[-20] w-[20%] @h-[90] opacity-0 origin-left clip-details-bar"
    },
    Ho = {
        class: "flex justify-between w-full opacity-0 absolute left-0 right-0 @px-[25]"
    },
    Bo = {
        class: "flex flex-col opacity-0"
    },
    Mo = {
        class: "flex justify-between"
    },
    To = {
        class: "flex flex-col"
    },
    Oo = {
        class: "flex @w-[161] @h-[82] relative @rounded-[23] overflow-hidden"
    },
    Lo = {
        class: "flex justify-between @py-[14] relative"
    },
    So = {
        class: "flex justify-between @py-[14] relative"
    },
    Ro = {
        class: "flex justify-between @py-[14] relative"
    },
    Eo = {
        class: "flex justify-between @py-[14] relative"
    },
    Ao = {
        class: "flex justify-between @py-[14] relative"
    },
    zo = {
        class: "flex justify-between @py-[14] relative"
    },
    Po = {
        class: "flex bg-black justify-between @rounded-[50] @p-[35] @ml-[-20] w-[20%] @h-[90] opacity-0 origin-left clip-details-bar"
    },
    Wo = {
        class: "flex justify-between w-full opacity-0 absolute left-0 right-0 @px-[25]"
    },
    Io = oe({
        __name: "Gallery",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(null),
                d = r(null),
                n = r(null),
                p = r(null),
                c = r(null),
                o = r(null),
                h = r(null),
                j = r(null),
                C = r(null),
                O = r(null),
                T = r(null),
                _ = r(null),
                b = r(null),
                M = r(null),
                I = r(null),
                g = r(null),
                x = r(null),
                q = r(null);
            r(null);
            const A = r(null),
                P = r(null),
                W = r(null),
                ne = r(null),
                ee = r(null),
                X = r(null),
                L = r(null),
                Q = r(null),
                R = r(null),
                G = r(null),
                N = r(null),
                z = r(null),
                le = we(W);
            ae(le, ke => {
                var w, ye;
                ke ? u.to([(w = W.value) == null ? void 0 : w.children[0]], {
                    scale: 1,
                    duration: .3,
                    ease: "power2.inOut"
                }) : u.to([(ye = W.value) == null ? void 0 : ye.children[0]], {
                    scale: 0,
                    duration: .3,
                    ease: "power2.inOut"
                })
            });
            const U = we(ee);
            ae(U, ke => {
                var w, ye;
                ke ? u.to([(w = ee.value) == null ? void 0 : w.children[0]], {
                    scale: 1,
                    duration: .3,
                    ease: "power2.inOut"
                }) : u.to([(ye = ee.value) == null ? void 0 : ye.children[0]], {
                    scale: 0,
                    duration: .3,
                    ease: "power2.inOut"
                })
            });
            const re = we(L);
            ae(re, ke => {
                var w, ye;
                ke ? u.to([(w = L.value) == null ? void 0 : w.children[0]], {
                    scale: 1,
                    duration: .3,
                    ease: "power2.inOut"
                }) : u.to([(ye = L.value) == null ? void 0 : ye.children[0]], {
                    scale: 0,
                    duration: .3,
                    ease: "power2.inOut"
                })
            });
            let ue = !1;
            ze(G, ke => {
                D == null || D.reverse()
            }), ze(N, ke => {
                B == null || B.reverse()
            }), ze(z, ke => {
                Y == null || Y.reverse()
            });
            let F, se, D, B, Y;
            te(async () => {
                var de, Ue, qe, J, De, Je, Xe, Qe, et, _t, Ct, kt, $t, jt;
                await K(), new fe((de = o.value) == null ? void 0 : de.$el, {
                    type: "chars"
                }).chars.forEach(V => {
                    V.innerHTML = `<span class="relative block translate-x-[100%] clip-text-gallery">${V.innerHTML}</span>`, V.classList.add("relative", "block", "overflow-hidden")
                }), new fe((Ue = I.value) == null ? void 0 : Ue.$el, {
                    type: "chars"
                }).chars.forEach(V => {
                    V.innerHTML = `<span class="relative block translate-x-[100%] clip-text-gallery">${V.innerHTML}</span>`, V.classList.add("relative", "block", "overflow-hidden")
                }), new fe((qe = g.value) == null ? void 0 : qe.$el, {
                    type: "chars"
                }).chars.forEach(V => {
                    V.innerHTML = `<span class="relative block translate-x-[100%] clip-text-gallery">${V.innerHTML}</span>`, V.classList.add("relative", "block", "overflow-hidden")
                }), F = u.timeline({
                    scrollTrigger: {
                        trigger: f.value,
                        start: "bottom bottom",
                        end: "200% bottom",
                        scrub: 1,
                        invalidateOnRefresh: !0
                    }
                }), F.addLabel("start"), F.to(d.value, {
                    scale: 1,
                    borderRadius: () => {
                        const Z = window.innerWidth;
                        return `${(60/1920*Z).toFixed(2)}px`
                    },
                    autoRound: !1,
                    ease: "linear"
                }, "start"), F.to((J = p.value) == null ? void 0 : J.$el, {
                    scale: 1,
                    ease: "linear"
                }, "start"), F.to((De = n.value) == null ? void 0 : De.$el, {
                    opacity: 0,
                    ease: "linear"
                }, "start"), F.to(c.value, {
                    opacity: .4,
                    ease: "linear"
                }, "start"), se = u.timeline({
                    scrollTrigger: {
                        trigger: a.value,
                        start: "top top",
                        end: () => `+=${window.innerHeight*6}`,
                        pin: !0,
                        scrub: 1
                    }
                }), se.addLabel("secondCapsule", "+=0.55"), se.to(q.value, {
                    scaleX: .66,
                    transformOrigin: "left"
                }, "secondCapsule"), se.to(v.value, {
                    yPercent: -100,
                    marginTop: () => {
                        const Z = window.innerWidth;
                        return `-${(10/1920*Z).toFixed(2)}px`
                    },
                    borderRadius: () => {
                        const Z = window.innerWidth;
                        return `${(60/1920*Z).toFixed(2)}px`
                    }
                }, "secondCapsule"), se.to(h.value, {
                    opacity: .9
                }, "secondCapsule"), se.to(m.value, {
                    scale: .9
                }, "secondCapsule"), se.to((Je = T.value) == null ? void 0 : Je.$el, {
                    scale: 1
                }, "secondCapsule"), se.to(b.value, {
                    opacity: .4,
                    transform: "translateX(0) translateY(0)",
                    ease: "linear"
                }, "secondCapsule"), se.addLabel("thirdCapsule", "+=0.1"), se.to(q.value, {
                    scaleX: 1,
                    transformOrigin: "left"
                }, "thirdCapsule"), se.to(i.value, {
                    yPercent: -100,
                    marginTop: () => {
                        const Z = window.innerWidth;
                        return `-${(10/1920*Z).toFixed(2)}px`
                    },
                    borderRadius: () => {
                        const Z = window.innerWidth;
                        return `${(60/1920*Z).toFixed(2)}px`
                    }
                }, "thirdCapsule"), se.to(j.value, {
                    opacity: .9
                }, "thirdCapsule"), se.to(v.value, {
                    scale: .9
                }, "thirdCapsule"), se.to((Xe = _.value) == null ? void 0 : Xe.$el, {
                    scale: 1
                }, "thirdCapsule"), se.to(M.value, {
                    opacity: .4,
                    transform: "translateX(0) translateY(0) scaleX(-1)",
                    ease: "linear"
                }, "thirdCapsule"), se.to(x.value, {
                    ease: "linear",
                    duration: .1
                }), u.to([x.value, (Qe = A.value) == null ? void 0 : Qe.$el, (et = P.value) == null ? void 0 : et.$el], {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    transformOrigin: "left",
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: a.value,
                        start: V => {
                            var Z;
                            return (((Z = V.previous()) == null ? void 0 : Z.start) ?? 0) + window.innerHeight * 1.1
                        },
                        end: V => {
                            var Z;
                            return (((Z = V.previous()) == null ? void 0 : Z.start) ?? 0) + window.innerHeight * 1.1
                        },
                        toggleActions: "play none none reverse",
                        invalidateOnRefresh: !0
                    }
                }), u.to([(_t = o.value) == null ? void 0 : _t.$el.querySelectorAll(".clip-text-gallery")], {
                    x: 0,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: a.value,
                        start: V => {
                            var Z;
                            return ((Z = V.previous()) == null ? void 0 : Z.start) ?? 0
                        },
                        end: V => {
                            var Z;
                            return ((Z = V.previous()) == null ? void 0 : Z.start) ?? 0
                        },
                        toggleActions: "play none none reverse",
                        invalidateOnRefresh: !0
                    }
                }), u.to(W.value, {
                    scale: 1,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: a.value,
                        start: V => {
                            var Z;
                            return ((Z = V.previous()) == null ? void 0 : Z.start) ?? 0
                        },
                        end: V => {
                            var Z;
                            return ((Z = V.previous()) == null ? void 0 : Z.start) ?? 0
                        },
                        toggleActions: "play none none reverse",
                        invalidateOnRefresh: !0
                    }
                }), u.to([ee.value, (Ct = ne.value) == null ? void 0 : Ct.$el], {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: a.value,
                        start: V => {
                            var Z;
                            return (((Z = V.previous()) == null ? void 0 : Z.start) ?? 0) + window.innerHeight * 2.3
                        },
                        end: V => {
                            var Z;
                            return (((Z = V.previous()) == null ? void 0 : Z.start) ?? 0) + window.innerHeight * 2.3
                        },
                        toggleActions: "play none none reverse",
                        invalidateOnRefresh: !0
                    }
                }), u.to([(kt = I.value) == null ? void 0 : kt.$el.querySelectorAll(".clip-text-gallery")], {
                    x: 0,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: a.value,
                        start: V => {
                            var Z;
                            return ((Z = V.previous()) == null ? void 0 : Z.start) ?? 0
                        },
                        end: V => {
                            var Z;
                            return ((Z = V.previous()) == null ? void 0 : Z.start) ?? 0
                        },
                        toggleActions: "play none none reverse",
                        invalidateOnRefresh: !0
                    }
                }), u.to([L.value, ($t = X.value) == null ? void 0 : $t.$el], {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: a.value,
                        start: V => {
                            var Z;
                            return (((Z = V.previous()) == null ? void 0 : Z.start) ?? 0) + window.innerHeight * 2
                        },
                        end: V => {
                            var Z;
                            return (((Z = V.previous()) == null ? void 0 : Z.start) ?? 0) + window.innerHeight * 2
                        },
                        toggleActions: "play none none reverse",
                        invalidateOnRefresh: !0
                    }
                }), u.to([(jt = g.value) == null ? void 0 : jt.$el.querySelectorAll(".clip-text-gallery")], {
                    x: 0,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: a.value,
                        start: V => {
                            var Z;
                            return ((Z = V.previous()) == null ? void 0 : Z.start) ?? 0
                        },
                        end: V => {
                            var Z;
                            return ((Z = V.previous()) == null ? void 0 : Z.start) ?? 0
                        },
                        toggleActions: "play none none reverse",
                        invalidateOnRefresh: !0
                    }
                }), D = u.timeline({
                    paused: !0,
                    onStart: () => {
                        var V;
                        (V = H.lenis) == null || V.stop()
                    },
                    onReverseComplete: () => {
                        var V;
                        (V = H.lenis) == null || V.start(), ue && (ue = !1, H.reservationOpenButton = !0)
                    }
                }), D.addLabel("start"), D.to(Q.value, {
                    opacity: 1,
                    duration: .3,
                    pointerEvents: "all",
                    ease: "power2.inOut"
                }, "start"), D.to(R.value, {
                    rotate: 135,
                    ease: "power1.inOut"
                }, "start"), D.to(G.value, {
                    scale: 1,
                    y: 0,
                    x: 0,
                    borderRadius: () => {
                        const Z = window.innerWidth;
                        return `${(60/1920*Z).toFixed(2)}px`
                    },
                    duration: .5,
                    ease: "sine.inOut"
                }, "start"), D.to([G.value.children[1]], {
                    width: () => {
                        const Z = window.innerWidth;
                        return `${(497/1920*Z).toFixed(2)}px`
                    },
                    opacity: 1,
                    transformOrigin: "left center",
                    duration: .5,
                    ease: "sine.inOut"
                }, "start+=0.4"), D.addLabel("end"), D.to(G.value.children[0], {
                    opacity: 1,
                    duration: .5,
                    ease: "sine.inOut"
                }, "end"), D.to([G.value.children[1].children[0]], {
                    opacity: 1,
                    duration: .5,
                    ease: "sine.inOut"
                }, "end"), B = u.timeline({
                    paused: !0,
                    onStart: () => {
                        var V;
                        (V = H.lenis) == null || V.stop()
                    },
                    onReverseComplete: () => {
                        var V;
                        (V = H.lenis) == null || V.start(), ue && (ue = !1, H.reservationOpenButton = !0)
                    }
                }), B.addLabel("start"), B.to(Q.value, {
                    opacity: 1,
                    duration: .3,
                    pointerEvents: "all",
                    ease: "power2.inOut"
                }, "start"), B.to(R.value, {
                    rotate: 135,
                    ease: "power1.inOut"
                }, "start"), B.to(N.value, {
                    scale: 1,
                    y: 0,
                    x: 0,
                    borderRadius: () => {
                        const Z = window.innerWidth;
                        return `${(60/1920*Z).toFixed(2)}px`
                    },
                    duration: .5,
                    ease: "sine.inOut"
                }, "start"), B.to([N.value.children[1]], {
                    width: () => {
                        const Z = window.innerWidth;
                        return `${(497/1920*Z).toFixed(2)}px`
                    },
                    opacity: 1,
                    transformOrigin: "left center",
                    duration: .5,
                    ease: "sine.inOut"
                }, "start+=0.4"), B.addLabel("end"), B.to(N.value.children[0], {
                    opacity: 1,
                    duration: .5,
                    ease: "sine.inOut"
                }, "end"), B.to([N.value.children[1].children[0]], {
                    opacity: 1,
                    duration: .5,
                    ease: "sine.inOut"
                }, "end"), Y = u.timeline({
                    paused: !0,
                    onStart: () => {
                        var V;
                        (V = H.lenis) == null || V.stop()
                    },
                    onReverseComplete: () => {
                        var V;
                        (V = H.lenis) == null || V.start(), ue && (ue = !1, H.reservationOpenButton = !0)
                    }
                }), Y.addLabel("start"), Y.to(Q.value, {
                    opacity: 1,
                    duration: .3,
                    pointerEvents: "all",
                    ease: "power2.inOut"
                }, "start"), Y.to(R.value, {
                    rotate: 135,
                    ease: "power1.inOut"
                }, "start"), Y.to(z.value, {
                    scale: 1,
                    y: 0,
                    x: 0,
                    borderRadius: () => {
                        const Z = window.innerWidth;
                        return `${(60/1920*Z).toFixed(2)}px`
                    },
                    duration: .5,
                    ease: "sine.inOut"
                }, "start"), Y.to([z.value.children[1]], {
                    width: () => {
                        const Z = window.innerWidth;
                        return `${(497/1920*Z).toFixed(2)}px`
                    },
                    opacity: 1,
                    transformOrigin: "left center",
                    duration: .5,
                    ease: "sine.inOut"
                }, "start+=0.4"), Y.addLabel("end"), Y.to(z.value.children[0], {
                    opacity: 1,
                    duration: .5,
                    ease: "sine.inOut"
                }, "end"), Y.to([z.value.children[1].children[0]], {
                    opacity: 1,
                    duration: .5,
                    ease: "sine.inOut"
                }, "end")
            });
            const ie = () => {
                    ue = !0, D == null || D.reverse()
                },
                pe = () => {
                    ue = !0, B == null || B.reverse()
                },
                Ce = () => {
                    ue = !0, Y == null || Y.reverse()
                },
                Se = () => {
                    (D == null ? void 0 : D.progress()) == 0 ? D == null || D.play() : D == null || D.reverse()
                },
                vt = () => {
                    (B == null ? void 0 : B.progress()) == 0 ? B == null || B.play() : B == null || B.reverse()
                },
                rt = () => {
                    (Y == null ? void 0 : Y.progress()) == 0 ? Y == null || Y.play() : Y == null || Y.reverse()
                };
            return (ke, w) => {
                const ye = zl,
                    de = ce,
                    Ue = st,
                    qe = Ge,
                    J = be,
                    De = Le,
                    Je = je;
                return S(), E("section", {
                    id: "gallery",
                    class: "h-screen",
                    ref_key: "containerRoot",
                    ref: a
                }, [e("div", {
                    class: "h-dvh flex flex-col items-center justify-center will-change-[transform]",
                    ref_key: "root",
                    ref: f
                }, [t(ye, {
                    ref_key: "carousel",
                    ref: n
                }, null, 512), e("div", {
                    class: "w-full h-full @p-[10] will-change-[transform]",
                    ref_key: "imageContainer",
                    ref: m
                }, [e("div", {
                    class: "w-full h-full @rounded-[300] scale-[0.45] relative overflow-hidden will-change-[transform] flex items-center",
                    ref_key: "image",
                    ref: d
                }, [t(de, {
                    src: "/images/cap3.png",
                    ref_key: "imageEl",
                    ref: p,
                    alt: "Classic Capsule",
                    class: "object-cover object-center absolute w-full h-full scale-[1.3] z-[-1]"
                }, null, 512), e("video", {
                    preload: "metadata",
                    class: Be("pointer-events-none absolute object-cover bottom-0 object-bottom-center h-[calc(99.3%)] w-full opacity-[0] mix-blend-hard-light hide-in-safari translate-y-[-1px]   scale-x-[-1] z-[-1]"),
                    muted: "",
                    playsinline: "",
                    autoplay: "",
                    loop: "",
                    ref_key: "smoke",
                    ref: c
                }, w[1] || (w[1] = [e("source", {
                    src: Me,
                    type: "video/mp4"
                }, null, -1)]), 512), e("div", Kl, [e("div", null, [t(Ue, {
                    ref_key: "heading",
                    ref: o,
                    class: "!leading-[1.2] !@tracking-[-3]"
                }, {
                    default: s(() => w[2] || (w[2] = [l("Classic Capsule®")])),
                    _: 1
                }, 512)])]), e("div", Xl, [e("button", {
                    id: "classicCapsuleDetails",
                    "aria-label": "Classic Capsule Details",
                    class: "@w-[52] @h-[52] scale-[0] rounded-full bg-lightBrown flex justify-center items-center",
                    ref_key: "bottomButton",
                    ref: W,
                    onClick: Se
                }, [w[3] || (w[3] = e("div", {
                    class: "absolute h-full w-full scale-0 rounded-full will-change-transform bg-white z-[-1]"
                }, null, -1)), t(qe, {
                    color: y(k).darkBrown,
                    class: "@w-[20]"
                }, null, 8, ["color"])], 512), t(J, {
                    class: "font-semibold text-white @ml-[30] opacity-0 translate-x-[10%]",
                    ref_key: "bottomBarText",
                    ref: P,
                    color: y(k).white
                }, {
                    default: s(() => w[4] || (w[4] = [l(" Classic Capsule® boasts refined aesthetics and a modern"), e("br", null, null, -1), l(" interior, creating an intimate retreat in a desert landscape.")])),
                    _: 1
                }, 8, ["color"])]), e("div", {
                    class: "absolute bg-black w-full h-full opacity-0 z-[20] pointer-events-none",
                    ref_key: "backdrop",
                    ref: h
                }, null, 512)], 512)], 512)], 512), e("div", {
                    class: "absolute overflow-hidden @rounded-[140] @left-[10] @right-[10] w-[99%] h-[98%]",
                    ref_key: "imageContainer2",
                    ref: v
                }, [e("div", {
                    class: "h-full w-full flex justify-center items-center",
                    ref_key: "secondCapsule",
                    ref: C
                }, [t(de, {
                    src: "/images/cap2.png",
                    ref_key: "secondImageEl",
                    ref: T,
                    alt: "Terrace Capsule",
                    class: "object-cover object-center absolute w-full h-full scale-[1.4] z-[-1]"
                }, null, 512), e("video", {
                    preload: "metadata",
                    class: Be("pointer-events-none absolute object-cover object-bottom-center h-[calc(99.7%)] w-full opacity-[0] mix-blend-hard-light hide-in-safari  z-[-1]"),
                    muted: "",
                    playsinline: "",
                    autoplay: "",
                    loop: "",
                    ref_key: "smoke2",
                    ref: b
                }, w[5] || (w[5] = [e("source", {
                    src: Me,
                    type: "video/mp4"
                }, null, -1)]), 512), e("div", Ql, [e("div", null, [t(Ue, {
                    ref_key: "heading2",
                    ref: I,
                    class: "!leading-[1.2] !@tracking-[-3]"
                }, {
                    default: s(() => w[6] || (w[6] = [l("Terrace Capsule®")])),
                    _: 1
                }, 512)])]), e("div", eo, [e("button", {
                    id: "terraceCapsuleDetails",
                    "aria-label": "Terrace Capsule Details",
                    class: "@w-[52] @h-[52] hover:opacity-[0.9] scale-[0] rounded-full bg-lightBrown flex justify-center items-center",
                    ref_key: "bottomButton2",
                    ref: ee,
                    onClick: vt
                }, [w[7] || (w[7] = e("div", {
                    class: "absolute h-full w-full scale-0 rounded-full will-change-transform bg-white z-[-1]"
                }, null, -1)), t(qe, {
                    color: y(k).darkBrown,
                    class: "@w-[20]"
                }, null, 8, ["color"])], 512), t(J, {
                    class: "font-semibold text-white @ml-[30] opacity-0 translate-x-[10%]",
                    ref_key: "bottomBarText2",
                    ref: ne,
                    color: y(k).white
                }, {
                    default: s(() => w[8] || (w[8] = [l("The most prestige capsule with the biggest terrace"), e("br", null, null, -1), l(" and jacuzzi with an amazing view of Los Angeles.")])),
                    _: 1
                }, 8, ["color"])]), e("div", {
                    class: "absolute bg-black w-full h-full opacity-0 z-[20] pointer-events-none",
                    ref_key: "secondBackdrop",
                    ref: j
                }, null, 512)], 512)], 512), e("div", {
                    class: "absolute overflow-hidden @rounded-[140] @left-[10] @right-[10] w-[99%] h-[98%]",
                    ref_key: "imageContainer3",
                    ref: i
                }, [e("div", {
                    class: "h-full w-full overflow-hidden flex justify-center items-center",
                    ref_key: "thirdCapsule",
                    ref: O
                }, [t(de, {
                    src: "/images/cap1.png",
                    ref_key: "thirdImageEl",
                    ref: _,
                    alt: "Desert Capsule",
                    class: "object-cover object-center absolute w-full h-full scale-[1.4] z-[-1]"
                }, null, 512), e("video", {
                    preload: "metadata",
                    class: Be("pointer-events-none absolute object-cover object-bottom-center h-[calc(99.7%)] w-full opacity-[0] mix-blend-hard-light hide-in-safari scale-x-[-1] z-[-1]"),
                    muted: "",
                    playsinline: "",
                    autoplay: "",
                    loop: "",
                    ref_key: "smoke3",
                    ref: M
                }, w[9] || (w[9] = [e("source", {
                    src: Me,
                    type: "video/mp4"
                }, null, -1)]), 512), e("div", to, [e("div", null, [t(Ue, {
                    ref_key: "heading3",
                    ref: g,
                    class: "!leading-[1.2] !@tracking-[-3]"
                }, {
                    default: s(() => w[10] || (w[10] = [l("Desert Capsule®")])),
                    _: 1
                }, 512)])]), e("div", lo, [e("button", {
                    id: "desertCapsuleDetails",
                    "aria-label": "Desert Capsule Details",
                    class: "@w-[52] @h-[52] hover:opacity-[0.9] scale-[0] rounded-full bg-lightBrown flex justify-center items-center",
                    ref_key: "bottomButton3",
                    ref: L,
                    onClick: rt
                }, [w[11] || (w[11] = e("div", {
                    class: "absolute h-full w-full scale-0 rounded-full will-change-transform bg-white z-[-1]"
                }, null, -1)), t(qe, {
                    color: y(k).darkBrown,
                    class: "@w-[20]"
                }, null, 8, ["color"])], 512), t(J, {
                    class: "font-semibold text-white @ml-[30] opacity-0 translate-x-[10%]",
                    ref_key: "bottomBarText3",
                    ref: X,
                    color: y(k).white
                }, {
                    default: s(() => w[12] || (w[12] = [l("With its striking architecture and upscale amenities, Desert"), e("br", null, null, -1), l(" Capsule® offers an exclusive retreat in the heart of the desert.")])),
                    _: 1
                }, 8, ["color"])])], 512)], 512), t(De, {
                    class: "font-normal absolute @right-[30] opacity-[0] top-0 bottom-0 flex items-center mix-blend-exclusion",
                    ref_key: "scrollText",
                    ref: A
                }, {
                    default: s(() => w[13] || (w[13] = [l("(Scroll)")])),
                    _: 1
                }, 512), e("div", {
                    class: "@w-[437] scale-x-[0] @h-[2] z-[10] absolute @bottom-[73] @right-[30] opacity-0",
                    ref_key: "loader",
                    ref: x
                }, [w[14] || (w[14] = e("div", {
                    class: "w-full h-full absolute bg-white opacity-[0.2]"
                }, null, -1)), e("div", {
                    class: "w-full scale-x-[0.33] origin-left h-full absolute bg-white",
                    ref_key: "loaderWhite",
                    ref: q
                }, null, 512)], 512), e("div", {
                    class: "fixed w-screen h-dvh z-[10] pointer-events-none inset-0 opacity-0",
                    ref_key: "details",
                    ref: Q
                }, [w[84] || (w[84] = e("div", {
                    class: "w-full h-full absolute bg-black opacity-[0.9]"
                }, null, -1)), e("div", {
                    class: "absolute flex flex-col justify-between @w-[537] h-[82dvh] scale-[0] @translate-y-[20] @translate-x-[15] origin-bottom-left bg-darkBrown z-[9] @left-[30] @bottom-[125] @rounded-[120] @pt-[40] @pb-[20] @px-[40]",
                    ref_key: "details1",
                    ref: G
                }, [e("div", oo, [e("div", so, [e("div", no, [t(De, {
                    class: "!font-medium"
                }, {
                    default: s(() => w[15] || (w[15] = [l("Details")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[16] || (w[16] = [l("(Classic Capsule®)")])),
                    _: 1
                })]), e("div", ro, [t(de, {
                    alt: "Classic Capsule Details Image",
                    src: "/images/cap3.png",
                    class: "object-cover object-center absolute w-full h-full z-[-1]"
                })])]), t(J, {
                    class: "!font-normal @mt-[30] @mb-[16]"
                }, {
                    default: s(() => w[17] || (w[17] = [l("Classic Capsule® boasts refined aesthetics and a modern interior, creating an intimate retreat in a desert landscape.")])),
                    _: 1
                }), e("div", ao, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[18] || (w[18] = [l("Square footage")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[19] || (w[19] = [l("22m2")])),
                    _: 1
                }), w[20] || (w[20] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", io, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[21] || (w[21] = [l("Bed")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[22] || (w[22] = [l("King Size")])),
                    _: 1
                }), w[23] || (w[23] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", uo, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[24] || (w[24] = [l("Shifting Window")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[25] || (w[25] = [l("Available")])),
                    _: 1
                }), w[26] || (w[26] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", co, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[27] || (w[27] = [l("Air Condition")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[28] || (w[28] = [l("Available")])),
                    _: 1
                }), w[29] || (w[29] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", fo, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[30] || (w[30] = [l("Jacuzzi")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[31] || (w[31] = [l("Available")])),
                    _: 1
                }), w[32] || (w[32] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", po, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[33] || (w[33] = [l("Terrace")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[34] || (w[34] = [l("None")])),
                    _: 1
                })]), e("a", {
                    class: "cursor-pointer",
                    onClick: ie
                }, [t(J, {
                    class: "!font-normal !text-white text-left @mt-[20] underline hover:opacity-[0.7] transition-opacity"
                }, {
                    default: s(() => [t(Je, {
                        color: y(k).white
                    }, {
                        default: s(() => w[35] || (w[35] = [l("Ready to reserve?")])),
                        _: 1
                    }, 8, ["color"])]),
                    _: 1
                })])]), e("div", vo, [e("div", mo, [t(J, {
                    class: "!font-normal"
                }, {
                    default: s(() => w[36] || (w[36] = [l("Cost")])),
                    _: 1
                }), e("div", null, [t(J, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => w[37] || (w[37] = [l("2000 USD "), e("span", {
                        class: "!text-lightBrown"
                    }, "/ Night", -1)])),
                    _: 1
                })])])])], 512), e("div", {
                    class: "absolute flex flex-col justify-between @w-[537] h-[82vh] scale-[0] @translate-y-[20] @translate-x-[15] origin-bottom-left bg-darkBrown z-[9] @left-[30] @bottom-[125] @rounded-[120] @pt-[40] @pb-[20] @px-[40]",
                    ref_key: "details2",
                    ref: N
                }, [e("div", wo, [e("div", xo, [e("div", ho, [t(De, {
                    class: "!font-medium"
                }, {
                    default: s(() => w[38] || (w[38] = [l("Details")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[39] || (w[39] = [l("(Terrace Capsule®)")])),
                    _: 1
                })]), e("div", bo, [t(de, {
                    src: "/images/cap2.png",
                    alt: "Terrace Capsule Details Image",
                    class: "object-cover object-center absolute w-full h-full z-[-1]"
                })])]), t(J, {
                    class: "!font-normal @mt-[30] @mb-[16]"
                }, {
                    default: s(() => w[40] || (w[40] = [l("The most prestige capsule with the biggest terrace"), e("br", null, null, -1), l(" and jacuzzi with an amazing view of Los Angeles.")])),
                    _: 1
                }), e("div", go, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[41] || (w[41] = [l("Square footage")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[42] || (w[42] = [l("30m2")])),
                    _: 1
                }), w[43] || (w[43] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", yo, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[44] || (w[44] = [l("Bed")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[45] || (w[45] = [l("King Size")])),
                    _: 1
                }), w[46] || (w[46] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", _o, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[47] || (w[47] = [l("Shifting Window")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[48] || (w[48] = [l("Available")])),
                    _: 1
                }), w[49] || (w[49] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", Co, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[50] || (w[50] = [l("Air Condition")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[51] || (w[51] = [l("Available")])),
                    _: 1
                }), w[52] || (w[52] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", ko, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[53] || (w[53] = [l("Jacuzzi")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[54] || (w[54] = [l("Available")])),
                    _: 1
                }), w[55] || (w[55] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", $o, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[56] || (w[56] = [l("Terrace")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[57] || (w[57] = [l("Available")])),
                    _: 1
                })]), e("a", {
                    class: "cursor-pointer",
                    onClick: pe
                }, [t(J, {
                    class: "!font-normal !text-white text-left @mt-[20] underline hover:opacity-[0.7] transition-opacity"
                }, {
                    default: s(() => [t(Je, {
                        color: y(k).white
                    }, {
                        default: s(() => w[58] || (w[58] = [l("Ready to reserve?")])),
                        _: 1
                    }, 8, ["color"])]),
                    _: 1
                })])]), e("div", jo, [e("div", Ho, [t(J, {
                    class: "!font-normal"
                }, {
                    default: s(() => w[59] || (w[59] = [l("Cost")])),
                    _: 1
                }), e("div", null, [t(J, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => w[60] || (w[60] = [l("2500 USD "), e("span", {
                        class: "!text-lightBrown"
                    }, "/ Night", -1)])),
                    _: 1
                })])])])], 512), e("div", {
                    class: "absolute flex flex-col justify-between @w-[537] h-[82vh] scale-[0] @translate-y-[20] @translate-x-[15] origin-bottom-left bg-darkBrown z-[9] @left-[30] @bottom-[125] @rounded-[120] @pt-[40] @pb-[20] @px-[40]",
                    ref_key: "details3",
                    ref: z
                }, [e("div", Bo, [e("div", Mo, [e("div", To, [t(De, {
                    class: "!font-medium"
                }, {
                    default: s(() => w[61] || (w[61] = [l("Details")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[62] || (w[62] = [l("(Desert Capsule®)")])),
                    _: 1
                })]), e("div", Oo, [t(de, {
                    src: "/images/cap1.png",
                    alt: "Desert Capsule Details Image",
                    class: "object-cover object-center absolute w-full h-full z-[-1]"
                })])]), t(J, {
                    class: "!font-normal @mt-[30] @mb-[16]"
                }, {
                    default: s(() => w[63] || (w[63] = [l("With its striking architecture and upscale amenities, Desert Capsule® offers an exclusive retreat in the heart of the desert.")])),
                    _: 1
                }), e("div", Lo, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[64] || (w[64] = [l("Square footage")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[65] || (w[65] = [l("28m2")])),
                    _: 1
                }), w[66] || (w[66] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", So, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[67] || (w[67] = [l("Bed")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[68] || (w[68] = [l("King Size")])),
                    _: 1
                }), w[69] || (w[69] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", Ro, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[70] || (w[70] = [l("Shifting Window")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[71] || (w[71] = [l("Available")])),
                    _: 1
                }), w[72] || (w[72] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", Eo, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[73] || (w[73] = [l("Air Condition")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[74] || (w[74] = [l("Available")])),
                    _: 1
                }), w[75] || (w[75] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", Ao, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[76] || (w[76] = [l("Jacuzzi")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[77] || (w[77] = [l("Available")])),
                    _: 1
                }), w[78] || (w[78] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", zo, [t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[79] || (w[79] = [l("Terrace")])),
                    _: 1
                }), t(J, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => w[80] || (w[80] = [l("None")])),
                    _: 1
                })]), e("a", {
                    class: "cursor-pointer",
                    onClick: Ce
                }, [t(J, {
                    class: "!font-normal !text-white text-left @mt-[20] underline hover:opacity-[0.7] transition-opacity"
                }, {
                    default: s(() => [t(Je, {
                        color: y(k).white
                    }, {
                        default: s(() => w[81] || (w[81] = [l("Ready to reserve?")])),
                        _: 1
                    }, 8, ["color"])]),
                    _: 1
                })])]), e("div", Po, [e("div", Wo, [t(J, {
                    class: "!font-normal"
                }, {
                    default: s(() => w[82] || (w[82] = [l("Cost")])),
                    _: 1
                }), e("div", null, [t(J, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => w[83] || (w[83] = [l("2250 USD "), e("span", {
                        class: "!text-lightBrown"
                    }, "/ Night", -1)])),
                    _: 1
                })])])])], 512), e("button", {
                    class: "@w-[52] @h-[52] hover:opacity-[0.9] @bottom-[58] @left-[30] absolute rounded-full bg-white flex justify-center items-center z-[10]",
                    ref_key: "detailsButton",
                    ref: R,
                    id: "closeDetails",
                    "aria-label": "Close Capsule Details",
                    onClick: w[0] || (w[0] = () => {
                        var Xe, Qe, et;
                        (Xe = y(D)) == null || Xe.reverse(), (Qe = y(B)) == null || Qe.reverse(), (et = y(Y)) == null || et.reverse()
                    })
                }, [t(qe, {
                    color: y(k).darkBrown,
                    class: "@w-[20]"
                }, null, 8, ["color"])], 512)], 512)], 512)
            }
        }
    }),
    qo = {
        class: "@h-[116] bg-white/80 flex items-center @pr-[20] @pl-[50] @gap-[20] rounded-full backdrop-blur-sm whitespace-nowrap"
    },
    Do = {
        class: "@text-[18]"
    },
    Vo = {
        class: "bg-white rounded-full @w-[76] @h-[76] flex justify-center items-center"
    },
    Zo = {
        __name: "FloatingButton",
        props: {
            icon: {
                type: Object,
                required: !0
            },
            text: {
                type: String,
                default: "Click Me"
            }
        },
        setup($) {
            return (a, f) => (S(), E("div", qo, [e("span", Do, Oe($.text), 1), e("div", Vo, [(S(), Fe(mt($.icon), {
                color: y(k).black,
                class: "@w-[22]"
            }, null, 8, ["color"]))])]))
        }
    };

function ht() {
    return {
        create: (a, f) => {
            const m = document.createElement("div");
            m.style.position = "absolute", m.style.top = "-9999px", document.body.appendChild(m);
            const v = tl(Zo, {
                icon: a,
                text: f
            });
            v.mount(m);
            const i = m.innerHTML;
            return v.unmount(), document.body.removeChild(m), i
        }
    }
}
const Fo = {
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    No = ["fill"],
    bt = {
        __name: "ArrowTopRight",
        props: {
            color: {
                type: String,
                default: k.lightBrown
            }
        },
        setup($) {
            return (a, f) => (S(), E("svg", Fo, [e("path", {
                d: "M15.0232 4.36451L1.66217 17.7255L0.287484 16.3508L13.6485 2.98982L2.09381 2.98982L2.09383 0.974961L17.038 0.974971L17.038 15.8929H15.0494L15.0232 4.36451Z",
                fill: $.color
            }, null, 8, No)]))
        }
    },
    Wt = [{
        elementType: "geometry",
        stylers: [{
            color: "#ebe3cd"
        }]
    }, {
        elementType: "labels.text.fill",
        stylers: [{
            color: "#523735"
        }]
    }, {
        elementType: "labels.text.stroke",
        stylers: [{
            color: "#f5f1e6"
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#c9b2a6"
        }]
    }, {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#dcd2be"
        }]
    }, {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#ae9e90"
        }]
    }, {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{
            color: "#dfd2ae"
        }]
    }, {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
            color: "#dfd2ae"
        }]
    }, {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#93817c"
        }]
    }, {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{
            color: "#a5b076"
        }]
    }, {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#447530"
        }]
    }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
            color: "#f5f1e6"
        }]
    }, {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{
            color: "#fdfcf8"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
            color: "#f8c967"
        }]
    }, {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#e9bc62"
        }]
    }, {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{
            color: "#e98d58"
        }]
    }, {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [{
            color: "#db8555"
        }]
    }, {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#806b63"
        }]
    }, {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{
            color: "#dfd2ae"
        }]
    }, {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#8f7d77"
        }]
    }, {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [{
            color: "#ebe3cd"
        }]
    }, {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{
            color: "#dfd2ae"
        }]
    }, {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{
            color: "#b9d3c2"
        }]
    }, {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{
            color: "#92998d"
        }]
    }],
    Go = {
        class: "h-full w-full @rounded-[60] overflow-hidden relative"
    },
    Uo = {
        class: "opacity-0"
    },
    Jo = {
        class: "flex w-full @mt-[25]"
    },
    Yo = {
        class: "@w-[137] @h-[88] relative w-full h-full @rounded-[20] overflow-hidden"
    },
    Ko = {
        class: "@w-[137] @h-[88] relative w-full h-full @rounded-[20] overflow-hidden @ml-[6]"
    },
    Xo = oe({
        __name: "Map",
        setup($) {
            const a = {
                    lat: 34.6713109,
                    lng: -118.9796942
                },
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(null),
                d = r(null),
                n = r(null),
                p = r(null),
                {
                    $mouseFollower: c
                } = dt(),
                {
                    isMobileOrTablet: o
                } = tt(),
                {
                    create: h
                } = ht(),
                j = Lt();
            let C, O = !1;
            const T = r(!1);
            te(async () => {
                var g;
                u.set(i.value, {
                    clipPath: "circle(0%)"
                }), v.value && !o && (v.value.addEventListener("mouseenter", M), v.value.addEventListener("mouseleave", I)), C = u.timeline({
                    paused: !0,
                    onStart: () => {
                        var x;
                        (x = H.lenis) == null || x.stop()
                    },
                    onComplete: () => {
                        u.set(i.value, {
                            clearProps: "scale",
                            width: "100vw",
                            height: "100vh"
                        })
                    },
                    onReverseComplete: () => {
                        var x;
                        T.value = !1, (x = H.lenis) == null || x.start(), O && (H.reservationOpenButton = !0, O = !1)
                    }
                }), C.addLabel("start"), C.to(i.value, {
                    backgroundColor: k.black,
                    pointerEvents: "all"
                }, "start"), C.to(i.value, {
                    clipPath: "circle(100%)",
                    duration: 1,
                    ease: "sine.inOut"
                }, "start"), C.to(d.value, {
                    scale: 1,
                    transformOrigin: "top left"
                }, "start+=0.2"), C.to((g = d.value) == null ? void 0 : g.children[0], {
                    opacity: 1,
                    ease: "sine.inOut"
                }, "start+=0.7")
            }), ae(() => H.menuOpenButton, g => {
                C && (g || C.reverse())
            });
            const _ = async () => {
                C && (T.value ? (T.value = !1, H.menuOpenButton = !1, C.reverse()) : (T.value = !0, H.menuOpenButton = !0, C.play()))
            }, b = () => {
                O = !0, _()
            }, M = () => {
                if (!v.value) return;
                const g = h(bt, "Show the Map");
                c.setText(g)
            }, I = async () => {
                v.value && c.removeText()
            };
            return (g, x) => {
                const q = be,
                    A = je,
                    P = st,
                    W = ce,
                    ne = he;
                return S(), E("section", {
                    id: "map",
                    ref_key: "root",
                    ref: m,
                    class: "h-screen w-full flex flex-col items-center justify-center text-center"
                }, [t(q, {
                    class: "font-semibold @mb-[40] text-white",
                    ref_key: "headline",
                    ref: p
                }, {
                    default: s(() => x[0] || (x[0] = [l("Closer than you think")])),
                    _: 1
                }, 512), t(P, {
                    ref_key: "text",
                    ref: f
                }, {
                    default: s(() => [x[2] || (x[2] = l("Our Capsules® are located")), x[3] || (x[3] = e("br", null, null, -1)), x[4] || (x[4] = l(" near Los Angeles with easy")), x[5] || (x[5] = e("br", null, null, -1)), e("span", {
                        class: "text-lightBrown underline decoration-from-font decoration-solid underline-offset-[10px] cursor-pointer",
                        onClick: _,
                        ref_key: "button",
                        ref: v
                    }, [t(A, null, {
                        default: s(() => x[1] || (x[1] = [l(" access by road. ")])),
                        _: 1
                    })], 512)]),
                    _: 1
                }, 512), e("div", {
                    class: "fixed w-screen h-screen inset-0 @p-[10] z-[11] pointer-events-none",
                    ref_key: "mapContainer",
                    ref: i
                }, [e("div", Go, [t(y(Ot), {
                    "api-key": y(j).public.googleMapsApiKey,
                    class: "w-full h-full @rounded-[60] overflow-hidden 0",
                    center: a,
                    ref_key: "googleMap",
                    ref: n,
                    styles: y(Wt),
                    zoom: 9,
                    "disable-default-ui": !0
                }, {
                    default: s(() => [t(y(St), {
                        options: {
                            position: a,
                            anchorPoint: "TOP_CENTER"
                        }
                    }, {
                        default: s(() => [t(W, {
                            class: "@w-[53]",
                            src: "/images/pin.png",
                            style: {
                                "margin-top": "8px"
                            },
                            alt: "Map Pin"
                        })]),
                        _: 1
                    }, 8, ["options"])]),
                    _: 1
                }, 8, ["api-key", "styles"]), e("div", {
                    class: "flex flex-col justify-between items-start absolute @left-[30] @top-[30] @rounded-[60] bg-darkBrown @py-[50] @px-[40] scale-[0.1] origin-top-left",
                    ref_key: "square",
                    ref: d
                }, [e("div", Uo, [e("div", null, [e("div", null, [t(ne, {
                    color: y(k).white,
                    class: "@w-[138]"
                }, null, 8, ["color"])]), t(q, {
                    class: "!text-lightBrown !font-normal text-left @mt-[20]"
                }, {
                    default: s(() => x[6] || (x[6] = [l("Maricopa, CA 93252"), e("br", null, null, -1), l(" United States")])),
                    _: 1
                }), e("a", {
                    onClick: b,
                    class: "cursor-pointer"
                }, [t(q, {
                    class: "!font-normal !text-white text-left @mt-[20] underline hover:opacity-[0.7] transition-opacity"
                }, {
                    default: s(() => [t(A, {
                        color: y(k).white
                    }, {
                        default: s(() => x[7] || (x[7] = [l("Ready to reserve?")])),
                        _: 1
                    }, 8, ["color"])]),
                    _: 1
                })])]), e("div", Jo, [e("div", Yo, [t(W, {
                    alt: "Map Capsules Image",
                    src: "/images/cap3.png",
                    class: "object-cover object-center absolute w-full h-full"
                })]), e("div", Ko, [t(W, {
                    alt: "Map Capsules Image 2",
                    src: "/images/activities-2.png",
                    class: "object-cover object-center absolute w-full h-full"
                })])])])], 512)])], 512)], 512)
            }
        }
    }),
    Qo = {
        __name: "WhyCapsules",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(0),
                d = r(-1),
                n = () => {
                    i.value <= -100 && (i.value = 0), i.value > 0 && (i.value = -100), u.set(f.value, {
                        xPercent: i.value
                    }), u.set(m.value, {
                        xPercent: i.value
                    }), i.value += .04 * d.value, requestAnimationFrame(n)
                };
            return te(async () => {
                await K();
                let p = u.timeline({
                    paused: !0,
                    scrollTrigger: {
                        trigger: a.value,
                        start: "-50% center",
                        end: () => `${window.innerHeight/1.5}px center`,
                        scrub: 1,
                        onUpdate: o => d.value = o.direction * -1
                    }
                });
                p.addLabel("start"), p.to(v.value, {
                    x: "-=200px",
                    duration: 1,
                    ease: "linear"
                }, "start"), p.to(v.value.querySelectorAll("span"), {
                    rotate: "+=90deg",
                    duration: 1,
                    transformOrigin: "center center",
                    ease: "linear"
                }, "start"), requestAnimationFrame(n);
                let c = u.timeline({
                    scrollTrigger: {
                        trigger: a.value,
                        start: "top+=100% 80%",
                        end: () => "bottom+=100% 50%",
                        scrub: 1
                    }
                });
                c.addLabel("start"), c.to(a.value, {
                    yPercent: 80,
                    ease: "linear"
                }, "start")
            }), (p, c) => {
                const o = be,
                    h = ft;
                return S(), E("section", {
                    class: "relative overflow-hidden @h-[306]",
                    ref_key: "root",
                    ref: a
                }, [t(o, {
                    class: "font-semibold text-white @px-[40]",
                    color: y(k).white
                }, {
                    default: s(() => c[0] || (c[0] = [l("Want to learn more about"), e("br", null, null, -1), l("the benefits of—Capsules®?")])),
                    _: 1
                }, 8, ["color"]), e("div", {
                    class: "relative flex min-w-max flex-row items-center overflow-x-auto @px-[30] @py-[40]",
                    ref_key: "slider",
                    ref: v
                }, [e("div", {
                    ref_key: "firstItems",
                    ref: f,
                    class: "flex items-center"
                }, [t(h, null, {
                    default: s(() => c[1] || (c[1] = [l("Why Capsules®?"), e("span", {
                        class: "inline-block @h-[100]"
                    }, "*", -1)])),
                    _: 1
                }), t(h, null, {
                    default: s(() => c[2] || (c[2] = [l("Why Capsules®?"), e("span", {
                        class: "inline-block @h-[100]"
                    }, "*", -1)])),
                    _: 1
                }), t(h, null, {
                    default: s(() => c[3] || (c[3] = [l("Why Capsules®?"), e("span", {
                        class: "inline-block @h-[100]"
                    }, "*", -1)])),
                    _: 1
                })], 512), e("div", {
                    ref_key: "secondItems",
                    ref: m,
                    class: "flex items-center"
                }, [t(h, null, {
                    default: s(() => c[4] || (c[4] = [l("Why Capsules®?"), e("span", {
                        class: "inline-block @h-[100]"
                    }, "*", -1)])),
                    _: 1
                }), t(h, null, {
                    default: s(() => c[5] || (c[5] = [l("Why Capsules®?"), e("span", {
                        class: "inline-block @h-[100]"
                    }, "*", -1)])),
                    _: 1
                }), t(h, null, {
                    default: s(() => c[6] || (c[6] = [l("Why Capsules®?"), e("span", {
                        class: "inline-block @h-[100]"
                    }, "*", -1)])),
                    _: 1
                })], 512)], 512)], 512)
            }
        }
    },
    es = {
        class: "h-screen w-screen flex @p-[10] @gap-[10]"
    },
    ts = {
        class: "relative w-full h-full flex-1"
    },
    ls = {
        class: "flex justify-between @pr-[60]"
    },
    os = {
        class: "flex @gap-[1]"
    },
    ss = {
        class: "@border-[2] border-lightBrown @px-[11] @py-[4] flex justify-center items-center rounded-full"
    },
    ns = {
        class: "@border-[2] border-white @px-[11] @py-[4] flex justify-center items-center rounded-full opacity-[0.2]"
    },
    rs = {
        class: "relative w-full h-full flex-1"
    },
    as = {
        class: "flex h-full w-full @gap-[10]"
    },
    is = {
        class: "w-full h-full relative flex-1"
    },
    us = {
        class: "w-full h-full bg-darkBrown @rounded-[60] overflow-hidden @py-[50] @px-[30] justify-between flex flex-col"
    },
    ds = {
        class: "flex justify-between @pl-[60]"
    },
    cs = {
        class: "@border-[2] border-lightBrown @px-[11] @py-[4] flex justify-center items-center rounded-full"
    },
    fs = {
        class: "@border-[2] border-white @px-[11] @py-[4] flex justify-center items-center rounded-full opacity-[0.2]"
    },
    ps = {
        class: "w-full h-full @rounded-[60] overflow-hidden @py-[50] @px-[30] absolute inset-0 justify-between flex flex-col"
    },
    vs = {
        class: "flex justify-between @pr-[60]"
    },
    ms = {
        class: "@border-[2] border-lightBrown @px-[11] @py-[4] flex justify-center items-center rounded-full"
    },
    ws = {
        class: "@border-[2] border-white @px-[11] @py-[4] flex justify-center items-center rounded-full opacity-[0.2]"
    },
    xs = {
        class: "flex h-full w-full @gap-[10]"
    },
    hs = {
        class: "w-full h-full relative flex-1"
    },
    bs = {
        class: "w-full h-full @rounded-[60] relative overflow-hidden"
    },
    gs = oe({
        __name: "Capsules",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(null),
                d = r(null),
                n = r(null),
                p = r(null),
                c = r(null),
                o = r(null),
                h = r(null),
                j = r(null),
                C = r(null),
                O = r(null),
                {
                    isMobileOrTablet: T
                } = tt();
            let _ = null,
                b = null;
            ae(() => H.shouldResetCapsules, I => {
                I && _ && (_.progress(0), H.shouldResetCapsules = !1)
            });
            const M = () => {
                var I, g, x, q, A;
                u.set((I = m.value) == null ? void 0 : I.$el, {
                    clipPath: "inset(0% 0% 100% 0%)"
                }), _ = u.timeline({
                    paused: !0,
                    onStart: () => {
                        u.set(n.value, {
                            zIndex: 0
                        })
                    }
                }), _.addLabel("slide1"), _.to(d.value, {
                    scale: .9,
                    opacity: 0
                }, "slide1"), _.to(i.value, {
                    x: () => {
                        const W = window.innerWidth;
                        let ne = 5 / 1920 * W;
                        return -window.innerWidth / 2 + ne
                    }
                }, "slide1"), _.to((g = m.value) == null ? void 0 : g.$el, {
                    scale: 1.01,
                    clipPath: "inset(0.01% 0.01% 0.01% 0.01%)",
                    autoRound: !1
                }, "slide1"), _.set(n.value, {
                    zIndex: 2
                }), _.to((x = f.value) == null ? void 0 : x.$el, {
                    scale: 1.31,
                    transformOrigin: "center center",
                    autoRound: !1
                }, "slide1"), _.to(n.value, {
                    y: () => 0
                }, "slide1"), _.addLabel("slide2"), _.to(i.value, {
                    scale: .9,
                    opacity: 0
                }, "slide2"), _.to((q = h.value) == null ? void 0 : q.$el.querySelectorAll(".clip-text-capsules1"), {
                    yPercent: -100
                }, "slide2"), _.to(n.value, {
                    x: () => {
                        const W = window.innerWidth;
                        let ne = 5 / 1920 * W;
                        return -window.innerWidth / 2 + ne
                    }
                }, "slide2"), _.to(p.value, {
                    y: () => 0
                }, "slide2"), _.to(c.value, {
                    opacity: 0
                }, "slide2"), _.to(o.value, {
                    opacity: 1
                }, "slide2"), _.to((A = v.value) == null ? void 0 : A.$el, {
                    scale: 1
                }, "slide2")
            };
            return te(async () => {
                var L, Q;
                await K();
                const I = new fe((L = h.value) == null ? void 0 : L.$el, {
                    type: "lines,words"
                });
                I.lines.forEach(R => {
                    R.classList.add("@mt-[-25]")
                }), I.words.forEach(R => {
                    R.innerHTML = `<span class="relative block  clip-text-capsules1">${R.innerHTML}</span>`, R.classList.add("relative", "block", "overflow-hidden")
                });
                const g = new fe((Q = j.value) == null ? void 0 : Q.$el, {
                    type: "lines,words"
                });
                g.lines.forEach(R => {
                    R.classList.add("@mt-[-25]")
                }), g.words.forEach(R => {
                    R.innerHTML = `<span class="relative block translate-y-[-105%] clip-text-capsules2">${R.innerHTML}</span>`, R.classList.add("relative", "block", "overflow-hidden")
                }), new fe(C.value, {
                    type: "lines"
                }).lines.forEach(R => {
                    R.classList.add("overflow-hidden"), R.innerHTML = `<span class="relative block clip-subtitle-capsules1">${R.innerHTML}</span>`
                }), new fe(O.value, {
                    type: "lines"
                }).lines.forEach(R => {
                    R.classList.add("overflow-hidden"), R.innerHTML = `<span class="relative block translate-y-[-110%] clip-subtitle-capsules2">${R.innerHTML}</span>`
                }), M();
                const A = [0, .5, 1];
                let P = 0,
                    W = !1,
                    ne = Ne.create({
                        trigger: a.value,
                        start: "top top",
                        end: () => "15%",
                        scrub: !1,
                        anticipatePin: 0,
                        pin: !0,
                        invalidateOnRefresh: !0,
                        onEnter: () => {
                            var R;
                            P = 0, _.progress(0), (R = H.lenis) == null || R.stop(), b = Ht.create({
                                target: a.value,
                                type: "wheel,touch",
                                wheelSpeed: -1,
                                onDown: () => ee("up"),
                                onUp: () => ee("down"),
                                preventDefault: !0
                            })
                        },
                        onEnterBack: () => {
                            var R;
                            P = 2, (R = H.lenis) == null || R.stop(), b = Ht.create({
                                target: a.value,
                                type: "wheel,touch",
                                wheelSpeed: -1,
                                onDown: () => ee("up"),
                                onUp: () => ee("down"),
                                preventDefault: !0
                            })
                        }
                    });
                const ee = R => {
                        var G, N;
                        !ne || !ne.isActive || W || W || (W = !0, R === "up" && P == 0 && (b == null || b.kill(), (G = H.lenis) == null || G.start()), R === "down" && P == 2 && (b == null || b.kill(), (N = H.lenis) == null || N.start()), R === "down" && P < A.length - 1 ? P++ : R === "up" && P > 0 && P--, u.to(_, {
                            progress: A[P],
                            duration: 1,
                            ease: "sine.inOut",
                            onStart: () => {
                                var z, le, U, re, ue, F;
                                P === 2 && R === "down" && (u.to((z = j.value) == null ? void 0 : z.$el.querySelectorAll(".clip-text-capsules2"), {
                                    y: 0,
                                    delay: .5
                                }), u.to(((le = C.value) == null ? void 0 : le.querySelectorAll(".clip-subtitle-capsules1")) || [], {
                                    y: "-110%"
                                }), u.to(((U = O.value) == null ? void 0 : U.querySelectorAll(".clip-subtitle-capsules2")) || [], {
                                    y: 0,
                                    delay: .5
                                })), P === 1 && R === "up" && (u.to((re = j.value) == null ? void 0 : re.$el.querySelectorAll(".clip-text-capsules2"), {
                                    y: "-105%"
                                }), u.to(((ue = O.value) == null ? void 0 : ue.querySelectorAll(".clip-subtitle-capsules2")) || [], {
                                    y: "-110%"
                                }), u.to(((F = C.value) == null ? void 0 : F.querySelectorAll(".clip-subtitle-capsules1")) || [], {
                                    y: 0,
                                    delay: .5
                                }))
                            },
                            onComplete: () => {
                                W = !1
                            }
                        }))
                    },
                    X = () => {
                        var R;
                        T || (_.progress(0).kill(), M(), P = 0, (R = H.lenis) == null || R.start())
                    };
                window.addEventListener("resize", X)
            }), (I, g) => {
                const x = Le,
                    q = be,
                    A = ce;
                return S(), E("section", {
                    id: "capsules",
                    class: "flex-col h-screen w-screen flex relative bg-black overflow-hidden",
                    ref_key: "root",
                    ref: a
                }, [e("div", es, [e("div", ts, [e("div", {
                    ref_key: "content1",
                    ref: d,
                    class: "bg-darkBrown w-full h-full @rounded-[60] overflow-hidden absolute @py-[50] @px-[30] justify-between flex flex-col"
                }, [t(x, {
                    class: "!text-lightBrown !font-medium"
                }, {
                    default: s(() => g[0] || (g[0] = [l("Enjoy the view "), e("br", null, null, -1), l("through—the wide"), e("br", null, null, -1), l(" panoramic glass"), e("br", null, null, -1), l(" window")])),
                    _: 1
                }), e("div", ls, [e("div", os, [e("div", ss, [t(q, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => g[1] || (g[1] = [l("01")])),
                    _: 1
                })]), e("div", ns, [t(q, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => g[2] || (g[2] = [l("03")])),
                    _: 1
                })])]), g[3] || (g[3] = e("p", {
                    class: "@text-[18] font-semibold text-white @leading-[24]"
                }, [l(" Get closer to the desert nature than ever before "), e("br"), l("and admire this unique, breathtaking landscape. ")], -1))])], 512)]), e("div", rs, [e("div", {
                    class: "@rounded-[60] w-full h-full overflow-hidden z-[1] absolute",
                    ref_key: "imageContainer1",
                    ref: i
                }, [t(A, {
                    src: "/images/cap3-square.jpg",
                    ref_key: "image1",
                    ref: f,
                    alt: "Capsules 1",
                    class: "object-cover object-center scale-[1.01] absolute w-full h-full z-[-1] will-change-[transform, clip-path] backface-hidden"
                }, null, 512), t(A, {
                    src: "/images/cap2-square.jpg",
                    ref_key: "image2",
                    ref: m,
                    alt: "Capsules 2",
                    class: "object-cover absolute w-full scale-[1.5] h-full z-[-1] will-change-[transform, clip-path] backface-hidden"
                }, null, 512)], 512)])]), e("div", {
                    class: "w-screen h-screen flex translate-y-[100vh] absolute @p-[10]",
                    ref_key: "content2",
                    ref: n
                }, [e("div", as, [g[12] || (g[12] = e("div", {
                    class: "w-full h-full relative flex-1"
                }, null, -1)), e("div", is, [e("div", us, [t(x, {
                    class: "!text-lightBrown !leading-[1.2] !font-medium",
                    ref_key: "content2Heading",
                    ref: h
                }, {
                    default: s(() => g[4] || (g[4] = [l("Sound of silence"), e("br", null, null, -1), l("—out of the city"), e("br", null, null, -1), l("rush with completely"), e("br", null, null, -1), l(" privacy")])),
                    _: 1
                }, 512), e("div", ds, [e("div", {
                    class: "flex @gap-[1]",
                    ref_key: "content2Text",
                    ref: c
                }, [e("div", cs, [t(q, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => g[5] || (g[5] = [l("02")])),
                    _: 1
                })]), e("div", fs, [t(q, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => g[6] || (g[6] = [l("03")])),
                    _: 1
                })])], 512), e("p", {
                    class: "@text-[18] font-semibold text-white leading-[1.2]",
                    ref_key: "content2Subtitle",
                    ref: C
                }, g[7] || (g[7] = [l(" Here, every whisper of nature recharges"), e("br", null, null, -1), l(" your soul—your sanctuary of solitude awaits. ")]), 512)])]), e("div", ps, [t(x, {
                    class: "!text-lightBrown !leading-[1.2] !font-medium",
                    ref_key: "content3Heading",
                    ref: j
                }, {
                    default: s(() => g[8] || (g[8] = [l("Relax yourself"), e("br", null, null, -1), l(" in—Wooden"), e("br", null, null, -1), l(" Jacuzzi")])),
                    _: 1
                }, 512), e("div", vs, [e("div", {
                    class: "flex @gap-[1] opacity-0",
                    ref_key: "content3Text",
                    ref: o
                }, [e("div", ms, [t(q, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => g[9] || (g[9] = [l("03")])),
                    _: 1
                })]), e("div", ws, [t(q, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => g[10] || (g[10] = [l("03")])),
                    _: 1
                })])], 512), e("p", {
                    class: "@text-[18] font-semibold text-white leading-[1.2]",
                    ref_key: "content3Subtitle",
                    ref: O
                }, g[11] || (g[11] = [l(" Let the natural textures and gentle bubbles"), e("br", null, null, -1), l("transport you to a realm of pure, handcrafted bliss. ")]), 512)])])])])], 512), e("div", {
                    class: "h-screen w-screen flex absolute translate-y-[100vh] z-[-1] @p-[10]",
                    ref_key: "content3",
                    ref: p
                }, [e("div", xs, [g[13] || (g[13] = e("div", {
                    class: "w-full h-full relative flex-1"
                }, null, -1)), e("div", hs, [e("div", bs, [t(A, {
                    src: "/images/cap1-square.jpg",
                    ref_key: "image3",
                    ref: v,
                    alt: "Capsules 3",
                    class: "object-cover scale-[1.5] absolute w-full h-full z-[-1]"
                }, null, 512)])])])], 512)], 512)
            }
        }
    }),
    ys = {
        class: "h-dvh w-screen flex @p-[10] @gap-[10]"
    },
    _s = {
        class: "relative w-full h-full flex-1"
    },
    Cs = {
        class: "flex justify-between @pr-[60]"
    },
    ks = {
        class: "flex @gap-[1]"
    },
    $s = {
        class: "@border-[2] border-lightBrown @px-[11] @py-[4] flex justify-center items-center rounded-full"
    },
    js = {
        class: "@border-[2] border-white @px-[11] @py-[4] flex justify-center items-center rounded-full opacity-[0.2]"
    },
    Hs = {
        class: "relative w-full h-full flex-1"
    },
    Bs = {
        class: "flex h-full w-full @gap-[10]"
    },
    Ms = {
        class: "w-full h-full relative flex-1"
    },
    Ts = {
        class: "w-full h-full bg-darkBrown @rounded-[60] overflow-hidden @py-[50] @px-[30] justify-between flex flex-col"
    },
    Os = {
        class: "flex @gap-[1]"
    },
    Ls = {
        class: "@border-[2] border-lightBrown @px-[11] @py-[4] flex justify-center items-center rounded-full"
    },
    Ss = {
        class: "@border-[2] border-white @px-[11] @py-[4] flex justify-center items-center rounded-full opacity-[0.2]"
    },
    Rs = {
        class: "w-full h-full @rounded-[60] overflow-hidden @py-[50] @px-[30] absolute inset-0 justify-between flex flex-col"
    },
    Es = {
        class: "flex @gap-[1]"
    },
    As = {
        class: "@border-[2] border-lightBrown @px-[11] @py-[4] flex justify-center items-center rounded-full"
    },
    zs = {
        class: "@border-[2] border-white @px-[11] @py-[4] flex justify-center items-center rounded-full opacity-[0.2]"
    },
    Ps = {
        class: "flex h-full w-full @gap-[10]"
    },
    Ws = {
        class: "w-full h-full relative flex-1"
    },
    Is = {
        class: "w-full h-full @rounded-[60] relative overflow-hidden"
    },
    qs = oe({
        __name: "TouchDevicesCapsules",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(null),
                d = r(null),
                n = r(null),
                p = r(null),
                c = r(null),
                o = r(null),
                h = r(null),
                j = r(null),
                {
                    isMobileOrTablet: C
                } = tt(),
                O = () => {
                    var T;
                    u.set((T = m.value) == null ? void 0 : T.$el, {
                        clipPath: "inset(0% 0% 100% 0%)"
                    })
                };
            return te(async () => {
                var M, I, g, x, q, A, P;
                await K();
                const T = new fe((M = h.value) == null ? void 0 : M.$el, {
                    type: "lines,words"
                });
                T.lines.forEach(W => {
                    W.classList.add("@mt-[-25]")
                }), T.words.forEach(W => {
                    W.innerHTML = `<span class="relative block  clip-text-capsules1">${W.innerHTML}</span>`, W.classList.add("relative", "block", "overflow-hidden")
                });
                const _ = new fe((I = j.value) == null ? void 0 : I.$el, {
                    type: "lines,words"
                });
                _.lines.forEach(W => {
                    W.classList.add("@mt-[-25]")
                }), _.words.forEach(W => {
                    W.innerHTML = `<span class="relative block translate-y-[-105%] clip-text-capsules2">${W.innerHTML}</span>`, W.classList.add("relative", "block", "overflow-hidden")
                }), O();
                let b = u.timeline({
                    scrollTrigger: {
                        trigger: a.value,
                        start: "top top",
                        end: () => "200%",
                        scrub: 1,
                        pin: !0,
                        invalidateOnRefresh: !0
                    }
                });
                b.addLabel("slide1"), b.to(d.value, {
                    scale: .9,
                    opacity: 0
                }, "slide1"), b.to(i.value, {
                    x: () => {
                        const ne = window.innerWidth;
                        let ee = 5 / 1920 * ne;
                        return -window.innerWidth / 2 + ee
                    }
                }, "slide1"), b.to((g = m.value) == null ? void 0 : g.$el, {
                    scale: 1.01,
                    clipPath: "inset(0.01% 0.01% 0.01% 0.01%)",
                    autoRound: !1
                }, "slide1"), b.set(n.value, {
                    zIndex: 2
                }), b.to((x = f.value) == null ? void 0 : x.$el, {
                    scale: 1.31,
                    transformOrigin: "center center",
                    autoRound: !1
                }, "slide1"), b.to(n.value, {
                    y: () => 0
                }, "slide1"), b.addLabel("slide2"), b.to(i.value, {
                    scale: .9,
                    opacity: 0
                }, "slide2"), b.to((q = h.value) == null ? void 0 : q.$el.querySelectorAll(".clip-text-capsules1"), {
                    yPercent: -100
                }, "slide2"), b.to((A = j.value) == null ? void 0 : A.$el.querySelectorAll(".clip-text-capsules2"), {
                    y: 0,
                    delay: .5
                }, "slide2"), b.to(n.value, {
                    x: () => {
                        const ne = window.innerWidth;
                        let ee = 5 / 1920 * ne;
                        return -window.innerWidth / 2 + ee
                    }
                }, "slide2"), b.to(p.value, {
                    y: () => 0
                }, "slide2"), b.to(c.value, {
                    opacity: 0
                }, "slide2"), b.to(o.value, {
                    opacity: 1
                }, "slide2"), b.to((P = v.value) == null ? void 0 : P.$el, {
                    scale: 1
                }, "slide2")
            }), (T, _) => {
                const b = Le,
                    M = be,
                    I = ce;
                return S(), E("div", {
                    class: "flex-col h-screen w-screen flex relative bg-black overflow-hidden",
                    ref_key: "root",
                    ref: a
                }, [e("div", ys, [e("div", _s, [e("div", {
                    ref_key: "content1",
                    ref: d,
                    class: "bg-darkBrown w-full h-full @rounded-[60] overflow-hidden absolute @py-[50] @px-[30] justify-between flex flex-col"
                }, [t(b, {
                    class: "!text-lightBrown !font-medium"
                }, {
                    default: s(() => _[0] || (_[0] = [l("Enjoy the view "), e("br", null, null, -1), l("through—the wide"), e("br", null, null, -1), l(" panoramic glass"), e("br", null, null, -1), l(" window")])),
                    _: 1
                }), e("div", Cs, [e("div", ks, [e("div", $s, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => _[1] || (_[1] = [l("01")])),
                    _: 1
                })]), e("div", js, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => _[2] || (_[2] = [l("03")])),
                    _: 1
                })])]), _[3] || (_[3] = e("p", {
                    class: "@text-[18] font-semibold text-white @leading-[23]"
                }, [l(" Get closer to the desert nature than ever before "), e("br"), l("and admire this unique, breathtaking landscape. ")], -1))])], 512)]), e("div", Hs, [e("div", {
                    class: "@rounded-[60] w-full h-full overflow-hidden z-[1] absolute",
                    ref_key: "imageContainer1",
                    ref: i
                }, [t(I, {
                    src: "/images/cap3-square.jpg",
                    ref_key: "image1",
                    ref: f,
                    class: "object-cover object-center scale-[1.01] absolute w-full h-full z-[-1] will-change-[transform, clip-path] backface-hidden"
                }, null, 512), t(I, {
                    src: "/images/cap2-square.jpg",
                    ref_key: "image2",
                    ref: m,
                    class: "object-cover absolute w-full scale-[1.5] h-full z-[-1] will-change-[transform, clip-path] backface-hidden"
                }, null, 512)], 512)])]), e("div", {
                    class: "w-screen h-dvh flex translate-y-[100vh] absolute @p-[10]",
                    ref_key: "content2",
                    ref: n
                }, [e("div", Bs, [_[12] || (_[12] = e("div", {
                    class: "w-full h-full relative flex-1"
                }, null, -1)), e("div", Ms, [e("div", Ts, [t(b, {
                    class: "!text-lightBrown !leading-[1.2] !font-medium",
                    ref_key: "content2Heading",
                    ref: h
                }, {
                    default: s(() => _[4] || (_[4] = [l("Sound of silence"), e("br", null, null, -1), l("—out of the city"), e("br", null, null, -1), l("rush with completely"), e("br", null, null, -1), l(" privacy")])),
                    _: 1
                }, 512), e("div", {
                    class: "flex justify-between @pl-[60]",
                    ref_key: "content2Text",
                    ref: c
                }, [e("div", Os, [e("div", Ls, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => _[5] || (_[5] = [l("02")])),
                    _: 1
                })]), e("div", Ss, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => _[6] || (_[6] = [l("03")])),
                    _: 1
                })])]), _[7] || (_[7] = e("p", {
                    class: "@text-[18] font-semibold text-white @leading-[23]"
                }, [l(" Here, every whisper of nature recharges"), e("br"), l(" your soul—your sanctuary of solitude awaits. ")], -1))], 512)]), e("div", Rs, [t(b, {
                    class: "!text-lightBrown !leading-[1.2] !font-medium",
                    ref_key: "content3Heading",
                    ref: j
                }, {
                    default: s(() => _[8] || (_[8] = [l("Relax yourself"), e("br", null, null, -1), l(" in—Wooden"), e("br", null, null, -1), l(" Jacuzzi")])),
                    _: 1
                }, 512), e("div", {
                    class: "flex justify-between opacity-0 @pr-[60]",
                    ref_key: "content3Text",
                    ref: o
                }, [e("div", Es, [e("div", As, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => _[9] || (_[9] = [l("03")])),
                    _: 1
                })]), e("div", zs, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => _[10] || (_[10] = [l("03")])),
                    _: 1
                })])]), _[11] || (_[11] = e("p", {
                    class: "@text-[18] font-semibold text-white @leading-[23]"
                }, [l(" Let the natural textures and gentle bubbles"), e("br"), l("transport you to a realm of pure, handcrafted bliss. ")], -1))], 512)])])])], 512), e("div", {
                    class: "h-dvh w-screen flex absolute translate-y-[100vh] z-[-1] @p-[10]",
                    ref_key: "content3",
                    ref: p
                }, [e("div", Ps, [_[13] || (_[13] = e("div", {
                    class: "w-full h-full relative flex-1"
                }, null, -1)), e("div", Ws, [e("div", Is, [t(I, {
                    src: "/images/cap1-square.jpg",
                    ref_key: "image3",
                    ref: v,
                    class: "object-cover scale-[1.5] absolute w-full h-full z-[-1]"
                }, null, 512)])])])], 512)], 512)
            }
        }
    }),
    Ds = {},
    Vs = {
        class: "@text-[34] font-semibold @leading-[38] @tracking-[-0.2] text-lightBrown"
    };

function Zs($, a) {
    return S(), E("div", Vs, [xe($.$slots, "default")])
}
const gt = _e(Ds, [
        ["render", Zs]
    ]),
    Fs = {
        class: "flex flex-col @w-[745]"
    },
    Ns = {
        class: "flex flex-col relative @mb-[34]"
    },
    Gs = {
        class: "flex justify-between"
    },
    Us = {
        class: "w-full @mt-[32]"
    },
    Js = {
        class: "flex flex-col relative @mb-[34]"
    },
    Ys = {
        class: "flex justify-between"
    },
    Ks = {
        class: "w-full @mt-[32]"
    },
    Xs = {
        class: "flex flex-col relative @mb-[34]"
    },
    Qs = {
        class: "flex justify-between"
    },
    en = {
        class: "w-full @mt-[32]"
    },
    tn = {
        class: "flex w-full @ml-[188] @max-w-[907]"
    },
    ln = {
        class: "@w-[1558] h-[calc(100dvh-1.5%)] relative @rounded-[60] overflow-hidden"
    },
    on = {
        class: "absolute w-full h-full"
    },
    sn = {
        class: "w-full h-full flex flex-col justify-between @py-[50] @px-[30] absolute left-0 right-0"
    },
    nn = {
        class: "flex justify-between"
    },
    rn = {
        class: "@border-[2] border-white @px-[11] @py-[10] @h-[34] rounded-full flex justify-center items-center"
    },
    an = {
        class: "flex justify-between"
    },
    un = {
        class: "flex @gap-[1]"
    },
    dn = {
        class: "@border-[2] border-lightBrown @px-[11] @h-[34] @py-[4] flex justify-center items-center rounded-full"
    },
    cn = {
        class: "@border-[2] border-white @px-[11] @py-[4] @h-[34] flex justify-center items-center rounded-full opacity-[0.2]"
    },
    fn = {
        class: "@w-[1558] h-[calc(100dvh-1.5%)] relative @rounded-[60] overflow-hidden"
    },
    pn = {
        class: "absolute w-full h-full"
    },
    vn = {
        class: "w-full h-full flex flex-col justify-between @py-[50] @px-[30] absolute left-0 right-0"
    },
    mn = {
        class: "flex justify-between"
    },
    wn = {
        class: "@border-[2] border-white @px-[11] @py-[10] @h-[34] rounded-full flex justify-center items-center"
    },
    xn = {
        class: "flex justify-between"
    },
    hn = {
        class: "flex @gap-[1]"
    },
    bn = {
        class: "@border-[2] border-lightBrown @px-[11] @h-[34] @py-[4] flex justify-center items-center rounded-full"
    },
    gn = {
        class: "@border-[2] border-white @px-[11] @py-[4] @h-[34] flex justify-center items-center rounded-full opacity-[0.2]"
    },
    yn = {
        class: "@w-[1558] h-[calc(100dvh-1.5%)] relative @rounded-[60] overflow-hidden"
    },
    _n = {
        class: "absolute w-full h-full"
    },
    Cn = {
        class: "w-full h-full flex flex-col justify-between @py-[50] @px-[30] absolute left-0 right-0"
    },
    kn = {
        class: "flex justify-between"
    },
    $n = {
        class: "@border-[2] border-white @px-[11] @py-[10] @h-[34] rounded-full flex justify-center items-center"
    },
    jn = {
        class: "flex justify-between"
    },
    Hn = {
        class: "flex @gap-[1]"
    },
    Bn = {
        class: "@border-[2] border-lightBrown @px-[11] @h-[34] @py-[4] flex justify-center items-center rounded-full"
    },
    Mn = {
        class: "@border-[2] border-white @px-[11] @py-[4] @h-[34] flex justify-center items-center rounded-full opacity-[0.2]"
    },
    Tn = oe({
        __name: "Discover",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(null),
                d = r(null),
                n = r(null),
                p = r(null),
                c = r(null),
                o = r(null),
                h = r(null),
                j = r(null),
                C = r(null);
            let O, T;
            return te(async () => {
                var g, x, q, A;
                await K();
                const _ = new fe((g = v.value) == null ? void 0 : g.$el, {
                    type: "lines,words"
                });
                _.lines.forEach(P => {
                    P.classList.add("@mt-[-130]")
                }), _.words.forEach(P => {
                    P.innerHTML = `<span class="relative block translate-y-[-100%] will-change-transform  clip-text-choose">${P.innerHTML}</span>`, P.classList.add("relative", "block", "overflow-hidden")
                });
                const b = (x = f.value) == null ? void 0 : x.querySelectorAll(".clip-text-choose");
                b && u.to([...b], {
                    y: 0,
                    scrollTrigger: {
                        trigger: f.value,
                        start: "top 80%",
                        end: "60% 40%",
                        scrub: !0
                    }
                }), O = u.timeline({
                    scrollTrigger: {
                        trigger: a.value,
                        start: "top bottom",
                        end: "40% bottom",
                        scrub: !0
                    }
                }), O.addLabel("start"), O.to(i.value, {
                    opacity: 1
                }, "start"), O.to((q = d.value) == null ? void 0 : q.$el, {
                    opacity: 1
                }, "start"), T = u.timeline({
                    scrollTrigger: {
                        trigger: a.value,
                        start: "40% 80%",
                        end: "50% 80%",
                        toggleActions: "play none none reverse"
                    }
                }), T.addLabel("start"), T.to(n.value, {
                    scaleX: 1,
                    duration: .6,
                    ease: "power1.inOut",
                    transformOrigin: "left"
                }, "start"), T.to(p.value, {
                    scaleX: 1,
                    duration: .6,
                    ease: "power1.inOut",
                    transformOrigin: "left"
                }, "start"), T.to(c.value, {
                    scaleX: 1,
                    duration: .6,
                    ease: "power1.inOut",
                    transformOrigin: "left"
                }, "start");
                let M = () => {
                        const W = window.innerWidth;
                        return 1573 / 1920 * W
                    },
                    I = u.timeline({
                        scrollTrigger: {
                            trigger: o.value,
                            start: "top top",
                            end: () => `+=${M()*3-window.innerWidth}px`,
                            pin: !0,
                            scrub: 1,
                            invalidateOnRefresh: !0,
                            onEnter: () => {
                                var P;
                                (P = H.lenis) == null || P.stop(), setTimeout(() => {
                                    var W;
                                    (W = H.lenis) == null || W.start()
                                }, 200)
                            }
                        }
                    });
                I.addLabel("start"), I.to(o.value, {
                    x: () => -(M() * 3 - window.innerWidth),
                    ease: "none"
                }, "start"), I.to(h.value, {
                    xPercent: 10,
                    ease: "none"
                }, "start"), I.to(j.value, {
                    xPercent: -10,
                    ease: "none"
                }, "start"), I.to(C.value, {
                    xPercent: -10,
                    ease: "none"
                }, "start"), I.to((A = h.value) == null ? void 0 : A.$el, {
                    duration: .1
                })
            }), (_, b) => {
                const M = be,
                    I = ft,
                    g = gt,
                    x = Le,
                    q = ce;
                return S(), E("section", {
                    id: "discover",
                    class: "relative @pt-[70] @mt-[210] @pb-[140]",
                    ref_key: "root",
                    ref: a
                }, [e("div", {
                    ref_key: "gradient",
                    ref: m,
                    class: "absolute z-[-1] top-0 bg-gradient-to-b from-black via-middleBrown to-black min-h-[300vh] w-full"
                }, null, 512), e("div", {
                    class: "@px-[40]",
                    ref_key: "rootText",
                    ref: f
                }, [t(M, {
                    class: "text-white opacity-0",
                    ref_key: "headline",
                    ref: d,
                    color: y(k).white
                }, {
                    default: s(() => b[0] || (b[0] = [l("Ready for an adventure?")])),
                    _: 1
                }, 8, ["color"]), t(I, {
                    class: "@mt-[50] overflow-hidden !leading-[1.2] @pt-[100]",
                    ref_key: "text",
                    ref: v
                }, {
                    default: s(() => b[1] || (b[1] = [l("Discover the desert activities")])),
                    _: 1
                }, 512)], 512), e("div", {
                    class: "flex @px-[40] opacity-0",
                    ref_key: "bottomBar",
                    ref: i
                }, [e("div", Fs, [t(M, {
                    class: "!text-white font-semibold @mb-[50]"
                }, {
                    default: s(() => b[2] || (b[2] = [l("Offered Capsules® activities have different levels of difficulty:")])),
                    _: 1
                }), e("div", Ns, [e("div", Gs, [t(g, {
                    class: "!font-normal"
                }, {
                    default: s(() => b[3] || (b[3] = [l("Easy")])),
                    _: 1
                }), t(M, null, {
                    default: s(() => b[4] || (b[4] = [l("3-5h duration")])),
                    _: 1
                })]), e("div", Us, [b[5] || (b[5] = e("div", {
                    class: "absolute w-full @h-[2] bg-white opacity-[0.2]"
                }, null, -1)), e("div", {
                    class: "absolute w-[40%] scale-x-[0] @h-[2] bg-white",
                    ref_key: "easy",
                    ref: n
                }, null, 512)])]), e("div", Js, [e("div", Ys, [t(g, {
                    class: "!font-normal"
                }, {
                    default: s(() => b[6] || (b[6] = [l("Medium")])),
                    _: 1
                }), t(M, null, {
                    default: s(() => b[7] || (b[7] = [l("8-12h duration")])),
                    _: 1
                })]), e("div", Ks, [b[8] || (b[8] = e("div", {
                    class: "absolute w-full @h-[2] bg-white opacity-[0.2]"
                }, null, -1)), e("div", {
                    class: "absolute w-[80%] scale-x-[0] @h-[2] bg-white",
                    ref_key: "medium",
                    ref: p
                }, null, 512)])]), e("div", Xs, [e("div", Qs, [t(g, {
                    class: "!font-normal"
                }, {
                    default: s(() => b[9] || (b[9] = [l("Hard")])),
                    _: 1
                }), t(M, null, {
                    default: s(() => b[10] || (b[10] = [l("24h duration")])),
                    _: 1
                })]), e("div", en, [b[11] || (b[11] = e("div", {
                    class: "absolute w-full @h-[2] bg-white opacity-[0.2]"
                }, null, -1)), e("div", {
                    class: "absolute w-[60%] scale-x-[0] @h-[2] bg-white",
                    ref_key: "hard",
                    ref: c
                }, null, 512)])])]), e("div", tn, [t(x, {
                    class: "font-normal !text-lightBrown"
                }, {
                    default: s(() => b[12] || (b[12] = [l("We want to make sure your stay is exciting and enjoyable. That’s why we"), e("br", null, null, -1), l(" offer a variety of activities with different"), e("br", null, null, -1), l(" levels of engagement. Whether you seek"), e("br", null, null, -1), l(" thrills or tranquility, there’s something for"), e("br", null, null, -1), l(" everyone to make your desert stay truly memorable.")])),
                    _: 1
                })])], 512), e("div", {
                    class: "@mt-[220] pointer-events-none inset-0 flex h-dvh w-max whitespace-nowrap @p-[10] @gap-[10]",
                    ref_key: "activities",
                    ref: o
                }, [e("div", ln, [e("div", {
                    class: "absolute w-full h-full",
                    ref_key: "activity1",
                    ref: h
                }, [t(q, {
                    alt: "Activities Buggy Tours",
                    src: "/images/activities-1.png",
                    class: "object-cover object-center absolute w-full h-full z-[-1]"
                })], 512), e("div", on, [e("div", sn, [e("div", nn, [t(x, {
                    class: "font-medium"
                }, {
                    default: s(() => b[13] || (b[13] = [l("Buggy tours"), e("br", null, null, -1), l("in the desert")])),
                    _: 1
                }), e("div", rn, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => b[14] || (b[14] = [l("Easy")])),
                    _: 1
                })])]), e("div", an, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => b[15] || (b[15] = [l("Explore the terrain on a guided buggy tour that takes"), e("br", null, null, -1), l("you through the desert’s vast and open landscapes.")])),
                    _: 1
                }), e("div", un, [e("div", dn, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => b[16] || (b[16] = [l("01")])),
                    _: 1
                })]), e("div", cn, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => b[17] || (b[17] = [l("03")])),
                    _: 1
                })])])])])])]), e("div", fn, [e("div", {
                    class: "absolute w-[112%] h-[112%]",
                    ref_key: "activity2",
                    ref: j
                }, [t(q, {
                    alt: "Activities Desert Hikes",
                    src: "/images/activities-2.png",
                    class: "object-cover object-center absolute w-full h-full"
                })], 512), e("div", pn, [e("div", vn, [e("div", mn, [t(x, {
                    class: "font-medium"
                }, {
                    default: s(() => b[18] || (b[18] = [l("Breathtaking"), e("br", null, null, -1), l("desert hikes")])),
                    _: 1
                }), e("div", wn, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => b[19] || (b[19] = [l("Medium")])),
                    _: 1
                })])]), e("div", xn, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => b[20] || (b[20] = [l("Set out on a hike that offers clear trails, stunning views, "), e("br", null, null, -1), l("and a closer look at the unique desert environment.")])),
                    _: 1
                }), e("div", hn, [e("div", bn, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => b[21] || (b[21] = [l("02")])),
                    _: 1
                })]), e("div", gn, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => b[22] || (b[22] = [l("03")])),
                    _: 1
                })])])])])])]), e("div", yn, [e("div", {
                    class: "absolute w-[112%] h-[112%]",
                    ref_key: "activity3",
                    ref: C
                }, [t(q, {
                    alt: "Activities Rock Climbing",
                    src: "/images/activities-3.png",
                    class: "object-cover object-center absolute w-full h-full"
                })], 512), e("div", _n, [e("div", Cn, [e("div", kn, [t(x, {
                    class: "font-medium"
                }, {
                    default: s(() => b[23] || (b[23] = [l("Exciting group"), e("br", null, null, -1), l("rock climbing")])),
                    _: 1
                }), e("div", $n, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => b[24] || (b[24] = [l("Hard")])),
                    _: 1
                })])]), e("div", jn, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => b[25] || (b[25] = [l("Climbing session on natural sandstone formations, designed"), e("br", null, null, -1), l(" to be both challenging and safe while fostering teamwork.")])),
                    _: 1
                }), e("div", Hn, [e("div", Bn, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => b[26] || (b[26] = [l("03")])),
                    _: 1
                })]), e("div", Mn, [t(M, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => b[27] || (b[27] = [l("03")])),
                    _: 1
                })])])])])])])], 512)], 512)
            }
        }
    }),
    On = {
        viewBox: "0 0 24 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Ln = ["fill"],
    It = {
        __name: "ArrowLeft",
        props: {
            color: {
                type: String,
                default: k.white
            }
        },
        setup($) {
            return (a, f) => (S(), E("svg", On, [e("path", {
                d: "M4.46308 10.0184L23.3584 10.0184L23.3584 11.9625L4.46308 11.9625L12.6335 20.1329L11.2087 21.5576L0.641602 10.9905L11.1902 0.441866L12.5964 1.84802L4.46308 10.0184Z",
                fill: $.color
            }, null, 8, Ln)]))
        }
    },
    Sn = {
        viewBox: "0 0 24 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Rn = ["fill"],
    qt = {
        __name: "ArrowRight",
        props: {
            color: {
                type: String,
                default: k.white
            }
        },
        setup($) {
            return (a, f) => (S(), E("svg", Sn, [e("path", {
                d: "M19.5369 11.9816L0.641607 11.9816L0.641607 10.0375L19.5369 10.0375L11.3665 1.8671L12.7913 0.442382L23.3584 11.0095L12.8098 21.5581L11.4036 20.152L19.5369 11.9816Z",
                fill: $.color
            }, null, 8, Rn)]))
        }
    },
    En = {
        class: "w-full h-full relative @px-[40] @py-[60]"
    },
    An = {
        class: "relative"
    },
    zn = {
        class: "@w-[90] @h-[78] rounded-full relative overflow-hidden"
    },
    Pn = {
        class: "flex flex-col @pl-[20]"
    },
    Wn = {
        class: "@w-[90] @h-[78] rounded-full scale-0 relative overflow-hidden"
    },
    In = {
        class: "flex flex-col @pl-[20] opacity-0"
    },
    qn = {
        class: "@w-[90] @h-[78] rounded-full scale-0 relative overflow-hidden"
    },
    Dn = {
        class: "flex flex-col @pl-[20] opacity-0"
    },
    Vn = {
        class: "flex justify-between @mt-[100] items-center"
    },
    Zn = {
        class: "flex @gap-[5]"
    },
    Fn = {
        class: "@w-[456] @h-[2] relative"
    },
    Nn = oe({
        __name: "Reviews",
        setup($) {
            let a;
            const f = r(null),
                m = r(null),
                v = r(null),
                i = r(null),
                d = r(null),
                n = r(null),
                p = r(null),
                c = r(null),
                o = r(null),
                h = r(null);
            let j, C, O;
            const T = r(0),
                _ = we(o);
            ae(_, g => {
                var x, q, A, P;
                g ? (u.to([(x = o.value) == null ? void 0 : x.children[0]], {
                    scale: 1.5,
                    duration: .4,
                    ease: "power2.inOut"
                }), u.to([(q = o.value) == null ? void 0 : q.children[1].querySelector("path")], {
                    fill: k.black,
                    duration: .4,
                    ease: "power2.inOut"
                })) : (u.to([(A = o.value) == null ? void 0 : A.children[0]], {
                    scale: 0,
                    duration: .4,
                    ease: "power2.inOut"
                }), u.to([(P = o.value) == null ? void 0 : P.children[1].querySelector("path")], {
                    fill: k.white,
                    duration: .4,
                    ease: "power2.inOut"
                }))
            });
            const b = we(h);
            ae(b, g => {
                var x, q, A, P;
                g ? (u.to([(x = h.value) == null ? void 0 : x.children[0]], {
                    scale: 1.5,
                    duration: .4,
                    ease: "power2.inOut"
                }), u.to([(q = h.value) == null ? void 0 : q.children[1].querySelector("path")], {
                    fill: k.black,
                    duration: .4,
                    ease: "power2.inOut"
                })) : (u.to([(A = h.value) == null ? void 0 : A.children[0]], {
                    scale: 0,
                    duration: .4,
                    ease: "power2.inOut"
                }), u.to([(P = h.value) == null ? void 0 : P.children[1].querySelector("path")], {
                    fill: k.white,
                    duration: .4,
                    ease: "power2.inOut"
                }))
            });
            const M = () => {
                    T.value == 2 ? T.value = 0 : T.value = T.value + 1
                },
                I = () => {
                    T.value == 0 ? T.value = 2 : T.value = T.value - 1
                };
            return ae(T, g => {
                var x, q, A, P, W, ne, ee, X, L, Q, R, G, N, z, le, U, re, ue;
                g === 0 && (u.to([C.lines.map(F => F.children), O.lines.map(F => F.children)], {
                    yPercent: -110,
                    duration: .5
                }), u.to([(x = n.value) == null ? void 0 : x.children[0], (q = p.value) == null ? void 0 : q.children[0]], {
                    scale: 0,
                    duration: .5
                }), u.to([(A = n.value) == null ? void 0 : A.children[1], (P = p.value) == null ? void 0 : P.children[1]], {
                    xPercent: 10,
                    opacity: 0,
                    duration: .5
                }), u.to(j.lines.map(F => F.children), {
                    yPercent: 0,
                    duration: .5,
                    delay: .3
                }), u.to([(W = d.value) == null ? void 0 : W.children[0]], {
                    scale: 1,
                    duration: .5,
                    delay: .3
                }), u.fromTo([(ne = d.value) == null ? void 0 : ne.children[1]], {
                    xPercent: 20,
                    opacity: 0
                }, {
                    xPercent: 0,
                    opacity: 1,
                    duration: .5,
                    delay: .3
                }), u.to(c.value, {
                    width: "33%",
                    duration: .5,
                    delay: .3
                })), g === 1 && (u.to([j.lines.map(F => F.children), O.lines.map(F => F.children)], {
                    yPercent: -110,
                    duration: .5
                }), u.to([(ee = d.value) == null ? void 0 : ee.children[0], (X = p.value) == null ? void 0 : X.children[0]], {
                    scale: 0,
                    duration: .5
                }), u.to([(L = d.value) == null ? void 0 : L.children[1], (Q = p.value) == null ? void 0 : Q.children[1]], {
                    xPercent: 10,
                    opacity: 0,
                    duration: .5
                }), u.to(C.lines.map(F => F.children), {
                    yPercent: 0,
                    duration: .5,
                    delay: .3
                }), u.to([(R = n.value) == null ? void 0 : R.children[0]], {
                    scale: 1,
                    duration: .5,
                    delay: .3
                }), u.fromTo([(G = n.value) == null ? void 0 : G.children[1]], {
                    xPercent: 20,
                    opacity: 0
                }, {
                    xPercent: 0,
                    opacity: 1,
                    duration: .5,
                    delay: .3
                }), u.to(c.value, {
                    width: "66%",
                    duration: .5,
                    delay: .3
                })), g === 2 && (u.to([C.lines.map(F => F.children), j.lines.map(F => F.children)], {
                    yPercent: -110,
                    duration: .5
                }), u.to([(N = d.value) == null ? void 0 : N.children[0], (z = n.value) == null ? void 0 : z.children[0]], {
                    scale: 0,
                    duration: .5
                }), u.to([(le = d.value) == null ? void 0 : le.children[1], (U = n.value) == null ? void 0 : U.children[1]], {
                    xPercent: 10,
                    opacity: 0,
                    duration: .5
                }), u.to(O.lines.map(F => F.children), {
                    yPercent: 0,
                    duration: .5,
                    delay: .3
                }), u.to([(re = p.value) == null ? void 0 : re.children[0]], {
                    scale: 1,
                    duration: .5,
                    delay: .3
                }), u.fromTo([(ue = p.value) == null ? void 0 : ue.children[1]], {
                    xPercent: 20,
                    opacity: 0
                }, {
                    xPercent: 0,
                    opacity: 1,
                    duration: .5,
                    delay: .3
                }), u.to(c.value, {
                    width: "100%",
                    duration: .5,
                    delay: .3
                }))
            }), te(async () => {
                var g, x, q;
                j = new fe((g = m.value) == null ? void 0 : g.$el, {
                    types: "lines"
                }), C = new fe((x = v.value) == null ? void 0 : x.$el, {
                    types: "lines"
                }), j.lines.forEach(A => {
                    A.classList.add("overflow-hidden", "@mt-[-20]")
                }), C.lines.forEach(A => {
                    A.classList.add("overflow-hidden", "@mt-[-20]"), u.set(A.children, {
                        yPercent: -110
                    })
                }), O = new fe((q = i.value) == null ? void 0 : q.$el, {
                    types: "lines"
                }), O.lines.forEach(A => {
                    A.classList.add("overflow-hidden", "@mt-[-20]"), u.set(A.children, {
                        yPercent: -110
                    })
                }), await K(), a = u.timeline({
                    scrollTrigger: {
                        trigger: f.value,
                        start: "60% center",
                        end: "bottom center",
                        scrub: 1
                    }
                }), a.addLabel("start"), a.to(f.value, {
                    opacity: 0
                }, "start")
            }), (g, x) => {
                const q = be,
                    A = st,
                    P = ce,
                    W = It,
                    ne = qt;
                return S(), E("section", {
                    id: "reviews",
                    class: "w-full relative",
                    ref_key: "root",
                    ref: f
                }, [e("div", En, [t(q, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => x[0] || (x[0] = [l("Do people like us?")])),
                    _: 1
                }), t(A, {
                    class: "@max-w-[1400] @py-[50] !leading-[1.2]",
                    ref_key: "review1",
                    ref: m
                }, {
                    default: s(() => x[1] || (x[1] = [l("Staying at Capsules® in the California desert redefined my retreat — modern design meets nature, and every sunset feels like a serene masterpiece. ")])),
                    _: 1
                }, 512), t(A, {
                    class: "@max-w-[1400] @py-[50] !leading-[1.2] absolute @top-[83]",
                    ref_key: "review2",
                    ref: v
                }, {
                    default: s(() => x[2] || (x[2] = [l("Capsules® offered the perfect escape — sleek, modern spaces surrounded by desert stillness. Each moment felt peaceful, grounded, and truly unique. ")])),
                    _: 1
                }, 512), t(A, {
                    class: "@max-w-[1400] @py-[50] !leading-[1.2] absolute @top-[83]",
                    ref_key: "review3",
                    ref: i
                }, {
                    default: s(() => x[3] || (x[3] = [l("Capsules® was the perfect desert hideaway — stylish, peaceful, and fully surrounded by stunning views day and night. ")])),
                    _: 1
                }, 512), e("div", An, [e("div", {
                    class: "flex items-center",
                    ref_key: "review1Image",
                    ref: d
                }, [e("div", zn, [t(P, {
                    alt: "Avatar 1",
                    src: "/images/review1.png",
                    class: "object-cover object-center absolute w-full h-full ] z-[-1]"
                })]), e("div", Pn, [t(q, {
                    class: "!font-normal"
                }, {
                    default: s(() => x[4] || (x[4] = [l("Marcus Simpson"), e("br", null, null, -1), l("(New York)")])),
                    _: 1
                })])], 512), e("div", {
                    class: "flex items-center absolute top-0",
                    ref_key: "review2Image",
                    ref: n
                }, [e("div", Wn, [t(P, {
                    alt: "Avatar 2",
                    src: "/images/review2.png",
                    class: "object-cover object-center absolute w-full h-full ] z-[-1]"
                })]), e("div", In, [t(q, {
                    class: "!font-normal"
                }, {
                    default: s(() => x[5] || (x[5] = [l("Lena Morrison"), e("br", null, null, -1), l("(Los Angeles)")])),
                    _: 1
                })])], 512), e("div", {
                    class: "flex items-center absolute top-0",
                    ref_key: "review3Image",
                    ref: p
                }, [e("div", qn, [t(P, {
                    alt: "Avatar 3",
                    src: "/images/review3.png",
                    class: "object-cover object-center absolute w-full h-full ] z-[-1]"
                })]), e("div", Dn, [t(q, {
                    class: "!font-normal"
                }, {
                    default: s(() => x[6] || (x[6] = [l("Jason Whitaker"), e("br", null, null, -1), l("(San Francisco)")])),
                    _: 1
                })])], 512)]), e("div", Vn, [e("div", Zn, [e("button", {
                    id: "reviewsLeft",
                    "aria-label": "Reviews Left",
                    class: "@w-[52] @h-[52] rounded-full relative border-[1px] border-lightBrown flex justify-center items-center overflow-hidden",
                    onClick: I,
                    ref_key: "prevEl",
                    ref: o
                }, [x[7] || (x[7] = e("div", {
                    class: "absolute h-full w-full scale-[0] rounded-full will-change-transform bg-lightBrown z-[-1]"
                }, null, -1)), t(W, {
                    class: "@h-[22.72]"
                })], 512), e("button", {
                    id: "reviewsRight",
                    "aria-label": "Reviews Right",
                    class: "@w-[52] @h-[52] rounded-full relative border-[1px] border-lightBrown flex justify-center items-center overflow-hidden",
                    onClick: M,
                    ref_key: "nextEl",
                    ref: h
                }, [x[8] || (x[8] = e("div", {
                    class: "absolute h-full w-full scale-0 rounded-full will-change-transform bg-lightBrown z-[-1]"
                }, null, -1)), t(ne, {
                    class: "@h-[22.72]"
                })], 512)]), e("div", Fn, [x[9] || (x[9] = e("div", {
                    class: "absolute w-full bg-white h-full opacity-[0.2]"
                }, null, -1)), e("div", {
                    class: "absolute w-[33%] bg-white h-full",
                    ref_key: "line",
                    ref: c
                }, null, 512)])])])], 512)
            }
        }
    }),
    Gn = {
        class: "flex justify-between items-end w-full absolute @bottom-[40] @px-[40]"
    },
    Un = oe({
        __name: "ReserveNow",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(null),
                d = r(null),
                n = r(null),
                {
                    $mouseFollower: p
                } = dt(),
                {
                    create: c
                } = ht();
            let o;
            te(async () => {
                var C, O;
                await K(), o = u.timeline({
                    scrollTrigger: {
                        trigger: f.value,
                        start: "-50% center",
                        end: "bottom center",
                        scrub: 1
                    }
                }), o.addLabel("start"), o.to(f.value, {
                    borderRadius: () => {
                        const _ = window.innerWidth;
                        return `${(60/1920*_).toFixed(2)}px`
                    },
                    ease: "linear"
                }, "start"), o.to((C = m.value) == null ? void 0 : C.$el, {
                    scale: 1
                }, "start"), o.to((O = v.value) == null ? void 0 : O.$el, {
                    scale: 1
                }, "start"), o.to(i.value, {
                    opacity: .4
                }, "start"), await K(), f.value && (f.value.addEventListener("mouseenter", h), f.value.addEventListener("mouseleave", j))
            });
            const h = () => {
                    if (!f.value) return;
                    const C = c(bt, "Reserve Now");
                    p.setText(C)
                },
                j = async () => {
                    f.value && p.removeText()
                };
            return (C, O) => {
                const T = ce,
                    _ = Le,
                    b = be;
                return S(), E("div", null, [e("div", {
                    class: "@p-[10] h-dvh w-full z-[10]",
                    ref_key: "container",
                    ref: a
                }, [e("div", {
                    class: "h-full @rounded-[140] relative overflow-hidden w-full flex justify-center items-center !cursor-none",
                    ref_key: "root",
                    ref: f,
                    onClick: O[0] || (O[0] = M => ("general" in C ? C.general : y(H)).reservationOpenButton = !0)
                }, [t(T, {
                    src: "/images/cap2.png",
                    ref_key: "image",
                    ref: m,
                    class: "object-cover object-center absolute scale-[1.4] w-full h-full z-[-1]"
                }, null, 512), e("video", {
                    preload: "metadata",
                    class: Be("pointer-events-none absolute object-cover object-center h-full w-full opacity-[0] mix-blend-hard-light z-[-1]"),
                    muted: "",
                    playsinline: "",
                    autoplay: "",
                    loop: "",
                    ref_key: "smoke",
                    ref: i
                }, O[1] || (O[1] = [e("source", {
                    src: Me,
                    type: "video/mp4"
                }, null, -1)]), 512), t(he, {
                    color: y(k).white,
                    class: "@max-w-[1030] w-full scale-[1.2]",
                    ref_key: "logo",
                    ref: v
                }, null, 8, ["color"]), e("div", Gn, [t(_, {
                    ref_key: "heading",
                    ref: d,
                    class: "!leading-[1.2]"
                }, {
                    default: s(() => O[2] || (O[2] = [l("Closer to"), e("br", null, null, -1), l("Nature—Closer"), e("br", null, null, -1), l("to Yourself")])),
                    _: 1
                }, 512), t(b, {
                    class: "text-white !leading-[1.2]",
                    color: y(k).white,
                    ref_key: "subHeading",
                    ref: n
                }, {
                    default: s(() => O[3] || (O[3] = [l(" Spend unforgettable and remarkable time"), e("br", null, null, -1), l("in the Californian desert with—Capsules. ")])),
                    _: 1
                }, 8, ["color"])])], 512)], 512)])
            }
        }
    }),
    Dt = {
        __name: "BookYourCapsule",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(0),
                d = r(-1);
            let n, p = !1;
            const c = () => {
                    p || (i.value <= -100 && (i.value = 0), i.value > 0 && (i.value = -100), u.set(f.value, {
                        xPercent: i.value
                    }), u.set(m.value, {
                        xPercent: i.value
                    }), i.value += .05 * d.value, requestAnimationFrame(c))
                },
                o = () => {
                    p = !0, u.to([f.value.querySelectorAll("div"), m.value.querySelectorAll("div")], {
                        color: k.lightBrown
                    })
                },
                h = () => {
                    p = !1, u.to([f.value.querySelectorAll("div"), m.value.querySelectorAll("div")], {
                        color: k.white
                    }), requestAnimationFrame(c)
                };
            return te(async () => {
                await K(), n = u.timeline({
                    paused: !0,
                    scrollTrigger: {
                        trigger: a.value,
                        start: "-50% center",
                        end: () => `${window.innerHeight/1.5}px center`,
                        scrub: 1,
                        onUpdate: j => d.value = j.direction * -1
                    }
                }), n.addLabel("start"), n.to(v.value, {
                    x: "-=200px",
                    duration: 1,
                    ease: "linear"
                }, "start"), requestAnimationFrame(c), a.value.addEventListener("mouseenter", o), a.value.addEventListener("mouseleave", h)
            }), lt(() => {
                a.value.removeEventListener("mouseenter", o), a.value.removeEventListener("mouseleave", h)
            }), (j, C) => {
                const O = ft;
                return S(), E("div", {
                    class: "relative overflow-hidden @h-[270]",
                    ref_key: "root",
                    ref: a
                }, [e("div", {
                    class: "relative flex min-w-max flex-row items-center overflow-x-auto @px-[30] @py-[40] cursor-pointer",
                    onClick: C[0] || (C[0] = T => ("general" in j ? j.general : y(H)).reservationOpenButton = !0),
                    ref_key: "slider",
                    ref: v
                }, [e("div", {
                    ref_key: "firstItems",
                    ref: f,
                    class: "flex items-center"
                }, [t(O, null, {
                    default: s(() => C[1] || (C[1] = [l("Book your capsule—")])),
                    _: 1
                }), t(O, null, {
                    default: s(() => C[2] || (C[2] = [l("Book your capsule—")])),
                    _: 1
                })], 512), e("div", {
                    ref_key: "secondItems",
                    ref: m,
                    class: "flex items-center"
                }, [t(O, null, {
                    default: s(() => C[3] || (C[3] = [l("Book your capsule—")])),
                    _: 1
                }), t(O, null, {
                    default: s(() => C[4] || (C[4] = [l("Book your capsule—")])),
                    _: 1
                })], 512)], 512)], 512)
            }
        }
    },
    Jn = oe({
        __name: "FooterLink",
        props: {
            text: {
                type: String
            },
            section: {
                type: String
            },
            offset: {
                type: Number,
                default: 0
            },
            shouldResetCapsules: {
                type: Boolean,
                default: !1
            }
        },
        setup($) {
            const a = $,
                f = r(null),
                m = r(null),
                v = r(null);
            let i;
            const d = () => {
                const c = document.querySelector("#" + a.section);
                c && (H.toggleMask = !0, setTimeout(() => {
                    var o;
                    H.hideTopbar = !0, (o = H.lenis) == null || o.scrollTo(c, {
                        duration: .5,
                        offset: -a.offset,
                        force: !0,
                        immediate: !0,
                        onComplete: () => {
                            a.shouldResetCapsules && (H.shouldResetCapsules = !0)
                        }
                    })
                }, 500))
            };
            te(async () => {
                var c, o, h;
                await K(), i = u.timeline({
                    paused: !0
                }), i.addLabel("start"), i.to(m.value, {
                    y: -(((c = m.value) == null ? void 0 : c.getBoundingClientRect().height) || 0) * 1.1,
                    ease: "power3.inOut"
                }, "start"), i.to(v.value, {
                    y: 0,
                    ease: "power3.inOut",
                    color: k.lightBrown
                }, "start"), (o = f.value) == null || o.addEventListener("mouseenter", n), (h = f.value) == null || h.addEventListener("mouseleave", p)
            });
            const n = () => {
                    i == null || i.play()
                },
                p = () => {
                    i == null || i.reverse()
                };
            return lt(() => {
                var c, o;
                (c = f.value) == null || c.removeEventListener("mouseenter", n), (o = f.value) == null || o.removeEventListener("mouseleave", p)
            }), (c, o) => {
                const h = gt;
                return S(), E("div", null, [e("a", {
                    onClick: d,
                    class: "cursor-pointer",
                    ref_key: "root",
                    ref: f
                }, [t(h, {
                    class: "!font-normal text-white relative overflow-hidden"
                }, {
                    default: s(() => [e("div", {
                        ref_key: "text",
                        ref: m
                    }, Oe(a.text), 513), e("div", {
                        class: "absolute translate-y-[100%] top-0 right-0",
                        ref_key: "text2",
                        ref: v
                    }, Oe(a.text), 513)]),
                    _: 1
                })], 512)])
            }
        }
    }),
    Yn = ["href"],
    Kn = {
        class: "absolute top-0 right-0 w-full h-full grid place-items-center"
    },
    Xn = oe({
        __name: "SocialMediaButton",
        props: ["item"],
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = we(a);
            return ae(v, i => {
                i ? (u.to(m.value, {
                    scale: 1,
                    duration: .3,
                    ease: "power2.inOut"
                }), u.to(f.value, {
                    color: k.black,
                    duration: .3,
                    ease: "power2.inOut"
                })) : (u.to(m.value, {
                    scale: 0,
                    duration: .3,
                    ease: "power2.inOut"
                }), u.to(f.value, {
                    color: k.white,
                    duration: .3,
                    ease: "power2.inOut"
                }))
            }), (i, d) => (S(), E("a", {
                href: $.item.href,
                target: "_blank",
                ref_key: "root",
                ref: a,
                "aria-label": "Read more about Moyra",
                class: "relative place-items-center cursor-pointer grid ring-inset ring-[1px] ring-lightBrown rounded-full @w-[64] @h-[64] overflow-hidden"
            }, [e("div", {
                ref_key: "circleRef",
                ref: m,
                class: "absolute h-full w-full scale-0 rounded-full from-caribbeanGreen to-aqua will-change-transform bg-lightBrown"
            }, null, 512), e("div", Kn, [e("div", {
                ref_key: "iconRef",
                ref: f
            }, [(S(), Fe(mt($.item.icon), {
                class: "@w-[22]"
            }))], 512)])], 8, Yn))
        }
    }),
    Qn = {},
    er = {
        viewBox: "0 0 22 14",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg"
    };

function tr($, a) {
    return S(), E("svg", er, a[0] || (a[0] = [e("path", {
        d: "M19.8611 0.70994H14.2886V2.27252H19.8831L19.8611 0.70994ZM18.685 11.4596C18.2623 11.742 17.7631 11.8853 17.2562 11.8697C16.9207 11.9049 16.5815 11.87 16.26 11.767C15.9385 11.664 15.6415 11.4953 15.3877 11.2712C14.9194 10.7341 14.6752 10.0352 14.7062 9.32077H21.9824C22.0343 8.57666 21.9713 7.82894 21.7955 7.10434C21.6245 6.41523 21.3262 5.76481 20.9162 5.18713C20.5023 4.62782 19.9689 4.16954 19.3555 3.84619C18.6719 3.50776 17.9187 3.33689 17.1573 3.34749C16.441 3.3428 15.7311 3.4822 15.0689 3.75753C14.4626 4.01492 13.9133 4.39168 13.4532 4.86575C12.9942 5.34905 12.6388 5.92244 12.4091 6.55023C12.1625 7.22796 12.0396 7.94507 12.0464 8.66692C12.0346 9.39905 12.1537 10.1273 12.3981 10.8169C12.6063 11.4409 12.935 12.0172 13.3653 12.5124C13.8114 12.998 14.3598 13.3767 14.97 13.6206C15.6505 13.882 16.3742 14.0099 17.1023 13.9974C18.1238 14.0295 19.1324 13.7599 20.004 13.2217C20.8849 12.5916 21.5189 11.6701 21.7955 10.6174H19.3665C19.2364 10.9655 18.9972 11.2613 18.685 11.4596ZM14.9151 6.89378C15.0006 6.61748 15.1426 6.36231 15.3319 6.14472C15.5212 5.92712 15.7536 5.75193 16.0142 5.63041C16.3595 5.47453 16.7351 5.39879 17.1133 5.40877C17.3865 5.38524 17.6616 5.42158 17.9196 5.51532C18.1777 5.60905 18.4125 5.75795 18.6081 5.9518C18.9821 6.41244 19.2218 6.96875 19.3005 7.55871H14.7392C14.757 7.3335 14.7975 7.1107 14.8601 6.89378H14.9151ZM9.10071 6.36183C9.66012 6.12696 10.1462 5.74407 10.5076 5.25362C10.8411 4.73336 11.0062 4.12156 10.9802 3.50264C11.0009 2.93844 10.8918 2.37707 10.6615 1.86248C10.4673 1.41689 10.1555 1.03357 9.76018 0.754269C9.34169 0.462658 8.86545 0.266047 8.3643 0.177997C7.77173 0.0523187 7.16723 -0.00714469 6.56174 0.00068316H0V13.942H6.70463C7.31646 13.9419 7.92581 13.8637 8.51818 13.7093C9.07918 13.5618 9.61084 13.3182 10.0899 12.989C10.5544 12.6661 10.932 12.232 11.189 11.7256C11.4752 11.1603 11.615 10.5314 11.5957 9.89704C11.6165 9.11102 11.3979 8.33746 10.9692 7.68061C10.5082 7.02003 9.8245 6.55125 9.04575 6.36183H9.10071ZM3.04456 2.38334H5.89128C6.15285 2.38206 6.41401 2.40431 6.67166 2.44984C6.90931 2.48411 7.13748 2.56709 7.34212 2.69364C7.54034 2.8067 7.70096 2.97636 7.80375 3.18126C7.93205 3.4266 7.99278 3.70213 7.97961 3.97917C8.00009 4.2177 7.96391 4.45772 7.87408 4.67935C7.78424 4.90097 7.64333 5.09783 7.46302 5.25362C7.06967 5.52628 6.59898 5.66243 6.1221 5.6415H3.04456V2.38334ZM8.3643 10.6285C8.2505 10.8537 8.07992 11.0448 7.8697 11.1826C7.65021 11.3202 7.40836 11.4178 7.15527 11.4707C6.87401 11.5345 6.58621 11.5643 6.29796 11.5594H3.0006V7.73602H6.29796C6.8638 7.71104 7.42259 7.87035 7.89168 8.19039C8.1036 8.38214 8.26777 8.62152 8.37088 8.88914C8.47399 9.15675 8.51316 9.44509 8.4852 9.73081C8.51371 10.0354 8.47234 10.3426 8.3643 10.6285Z"
    }, null, -1)]))
}
const Vt = _e(Qn, [
        ["render", tr]
    ]),
    lr = {},
    or = {
        viewBox: "0 0 22 22",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg"
    };

function sr($, a) {
    return S(), E("svg", or, a[0] || (a[0] = [e("path", {
        d: "M10.9997 -0.00195312C17.0758 -0.00195312 22.0013 4.92347 22.0013 10.9997C22.0013 17.0758 17.0758 22.0013 10.9997 22.0013C4.92347 22.0013 -0.00195312 17.0758 -0.00195312 10.9997C-0.00195312 4.92347 4.92347 -0.00195312 10.9997 -0.00195312ZM12.7786 13.1824C9.97429 14.0081 7.52262 15.7398 5.8069 18.1067C7.31292 19.2106 9.13237 19.8043 10.9997 19.8009C12.1419 19.8017 13.2734 19.5801 14.3309 19.1485C13.9836 17.119 13.4643 15.1227 12.7786 13.1813V13.1824ZM14.9547 12.739C15.54 14.4366 16.0109 16.188 16.3563 17.9846C17.9707 16.7472 19.1066 14.9889 19.571 13.0085C18.0598 12.6501 16.4974 12.5589 14.9547 12.739ZM11.3858 9.80268C8.44212 10.8414 5.30398 11.2112 2.19947 10.8852L2.19837 10.9997C2.19837 13.1197 2.94868 15.0647 4.19736 16.5841C6.15137 13.9904 8.87414 12.0796 11.9777 11.124C11.7892 10.68 11.5919 10.2399 11.3858 9.80378V9.80268ZM18.1375 5.8498C16.7129 7.09448 15.1259 8.14002 13.42 8.95776C13.6774 9.50784 13.9224 10.0642 14.1549 10.6267C16.0252 10.3407 17.9505 10.4001 19.7987 10.8038C19.762 9.02191 19.1825 7.29362 18.1375 5.8498ZM7.2305 3.04549C6.08064 3.59198 5.06266 4.38083 4.24645 5.35788C3.43024 6.33494 2.83514 7.47706 2.50201 8.70582C5.15935 8.97471 7.84348 8.67468 10.3759 7.82569C9.45481 6.15202 8.40309 4.55366 7.2305 3.04549ZM10.9997 2.19837C10.4708 2.19837 9.9556 2.24348 9.45393 2.33369C10.5555 3.81351 11.5493 5.37058 12.4277 6.99287C13.9483 6.26903 15.3641 5.34313 16.6369 4.24027C15.0561 2.91838 13.0603 2.19545 10.9997 2.19837Z"
    }, null, -1)]))
}
const Zt = _e(lr, [
        ["render", sr]
    ]),
    nr = {},
    rr = {
        viewBox: "0 0 20 20",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg"
    };

function ar($, a) {
    return S(), E("svg", rr, a[0] || (a[0] = [e("path", {
        d: "M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z"
    }, null, -1)]))
}
const Ft = _e(nr, [
        ["render", ar]
    ]),
    ir = {},
    ur = {
        viewBox: "0 0 22 22",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg"
    };

function dr($, a) {
    return S(), E("svg", ur, a[0] || (a[0] = [e("path", {
        d: "M19.3333 1C19.7416 1.00005 20.1356 1.14993 20.4406 1.42119C20.7457 1.69246 20.9406 2.06625 20.9883 2.47167L21 2.66667V19.3333C20.9999 19.7416 20.8501 20.1356 20.5788 20.4406C20.3075 20.7457 19.9338 20.9406 19.5283 20.9883L19.3333 21H2.66667C2.25844 20.9999 1.86444 20.8501 1.55938 20.5788C1.25432 20.3075 1.05943 19.9338 1.01167 19.5283L1 19.3333V2.66667C1.00005 2.25844 1.14993 1.86444 1.42119 1.55938C1.69246 1.25432 2.06625 1.05943 2.47167 1.01167L2.66667 1H19.3333ZM19.3333 2.66667H2.66667V19.3333H19.3333V2.66667ZM13.9033 8.71667C16.4067 8.71667 16.87 10.3633 16.87 12.505L16.8667 16.8667H14.4L14.395 12.6667C14.3783 11.8167 14.2317 10.8917 13.1133 10.8917C11.9083 10.8917 11.66 11.775 11.6333 12.74L11.63 16.8667H9.16167V8.91667H11.5317V10H11.565C11.8023 9.59453 12.145 9.26094 12.5568 9.03468C12.9685 8.80842 13.4338 8.69961 13.9033 8.71667ZM7.61 8.915V16.8667H5.13667V8.915H7.61ZM6.375 4.96167C6.75514 4.96167 7.11972 5.11268 7.38852 5.38148C7.65732 5.65028 7.80833 6.01486 7.80833 6.395C7.80833 6.77514 7.65732 7.13972 7.38852 7.40852C7.11972 7.67732 6.75514 7.82833 6.375 7.82833C5.99486 7.82833 5.63028 7.67732 5.36148 7.40852C5.09268 7.13972 4.94167 6.77514 4.94167 6.395C4.94167 6.01486 5.09268 5.65028 5.36148 5.38148C5.63028 5.11268 5.99486 4.96167 6.375 4.96167Z"
    }, null, -1)]))
}
const Nt = _e(ir, [
        ["render", dr]
    ]),
    cr = {
        class: "flex"
    },
    Gt = {
        __name: "SocialMedia",
        setup($) {
            const a = Ke([{
                icon: Nt,
                href: "https://www.linkedin.com/company/moyra"
            }, {
                icon: Ft,
                href: "https://www.instagram.com/moyra_lab"
            }, {
                icon: Zt,
                href: "https://dribbble.com/moyra-co"
            }, {
                icon: Vt,
                href: "https://www.behance.net/moyra-co"
            }]);
            Ke([]);
            const f = r(null),
                m = we();
            return ae(m, v => {
                v ? u.to(f.value, {
                    scale: 1,
                    duration: .3,
                    ease: "power2.inOut"
                }) : u.to(f.value, {
                    scale: 0,
                    duration: .3,
                    ease: "power2.inOut"
                })
            }), (v, i) => (S(), E("div", cr, [(S(!0), E(Pe, null, We(y(a), (d, n) => (S(), Fe(Xn, {
                item: d,
                key: n
            }, null, 8, ["item"]))), 128))]))
        }
    },
    fr = {
        class: "flex @px-[40] @mt-[240]"
    },
    pr = {
        class: "flex justify-between items-center @py-[140] @px-[40]"
    },
    vr = {
        href: "https://moyra.co/",
        target: "_blank",
        class: "text-white hover:opacity-[0.5] transition-opacity cursor-pointer"
    },
    mr = {
        class: "flex flex-col text-right"
    },
    wr = {
        class: "flex justify-between items-center @px-[40] @pb-[80]"
    },
    xr = {
        class: "flex items-center @py-[80] @px-[40]"
    },
    hr = {
        class: "flex-1"
    },
    br = {
        href: "https://moyra.co",
        target: "_blank",
        class: "text-white underline hover:opacity-[0.5] transition-opacity cursor-pointer"
    },
    gr = {
        class: "flex-1 flex items-center justify-center"
    },
    yr = {
        class: "flex-1 flex items-center justify-end"
    },
    _r = {
        class: "flex w-full"
    },
    Cr = oe({
        __name: "Footer",
        setup($) {
            let a, f;
            const m = r(null),
                v = r(null);
            return me(() => window.innerHeight * 6), te(async () => {
                var n;
                await K();
                const i = v.value.querySelectorAll("path");
                let d = 0;
                i.forEach(p => {
                    const c = p.getBBox();
                    c.width > d && (d = c.width)
                }), u.set(v.value.querySelectorAll("path"), {
                    clipPath: "inset(0% 0% 0% 100%)",
                    x: d
                }), a = u.timeline({
                    scrollTrigger: {
                        trigger: m.value,
                        start: "-5% 80%",
                        end: "30% 80%",
                        scrub: 1
                    }
                }), a.addLabel("start"), a.to((n = m.value) == null ? void 0 : n.previousElementSibling, {
                    y: "30vh"
                }, "start"), f = u.timeline({
                    scrollTrigger: {
                        trigger: m.value,
                        start: "80% 80%",
                        end: "bottom 80%",
                        toggleActions: "play none none reverse"
                    }
                }), f.addLabel("start"), f.to(v.value.querySelectorAll("path"), {
                    clipPath: "inset(0% 0% 0% 0%)",
                    stagger: .01,
                    x: 0,
                    duration: .9,
                    ease: "power3.inOut"
                }, "start")
            }), (i, d) => {
                const n = Un,
                    p = be,
                    c = Dt,
                    o = gt,
                    h = je,
                    j = Jn,
                    C = Gt;
                return S(), E("footer", {
                    class: "@mt-[140] relative overflow-hidden",
                    ref_key: "root",
                    ref: m
                }, [t(n), e("div", fr, [t(p, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => d[0] || (d[0] = [l(" Interested in an amazing adventure?"), e("br", null, null, -1), l("Reserve one of our Capsules®")])),
                    _: 1
                })]), t(c), e("div", pr, [e("div", null, [t(o, {
                    class: "!font-normal text-lightBrown"
                }, {
                    default: s(() => d[1] || (d[1] = [l("This website is just the concept"), e("br", null, null, -1), l("work done by—Moyra to showcase"), e("br", null, null, -1), l("our capabilities. ")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal text-lightBrown @mt-[30]"
                }, {
                    default: s(() => [d[3] || (d[3] = l("If you would like to outsource a similar")), d[4] || (d[4] = e("br", null, null, -1)), d[5] || (d[5] = l("website project—")), e("a", vr, [t(h, {
                        color: y(k).white
                    }, {
                        default: s(() => d[2] || (d[2] = [l("contact us.")])),
                        _: 1
                    }, 8, ["color"])])]),
                    _: 1
                })]), e("div", mr, [t(j, {
                    text: "Welcome",
                    section: "hero",
                    offset: 0,
                    shouldResetCapsules: !0
                }), t(j, {
                    text: "Introduction",
                    section: "welcome",
                    offset: 0,
                    shouldResetCapsules: !0
                }), t(j, {
                    text: "Houses",
                    section: "choose",
                    offset: 0,
                    shouldResetCapsules: !0
                }), t(j, {
                    text: "Why Capsules®",
                    section: "capsules",
                    shouldResetCapsules: !1,
                    offset: 0
                }), t(j, {
                    text: "Activities",
                    section: "discover",
                    offset: 0,
                    shouldResetCapsules: !1
                }), t(j, {
                    text: "Feedback",
                    section: "reviews",
                    offset: 300,
                    shouldResetCapsules: !1
                })])]), e("div", wr, [t(C), t(p, {
                    class: "!font-semibold text-right"
                }, {
                    default: s(() => d[6] || (d[6] = [l("Meet Capsules®—modern and cozy"), e("br", null, null, -1), l("houses, in the California desert.")])),
                    _: 1
                })]), d[12] || (d[12] = e("div", {
                    class: "h-[1px] w-full bg-lightBrown"
                }, null, -1)), e("div", xr, [e("div", hr, [t(p, {
                    class: "!font-normal"
                }, {
                    default: s(() => [d[8] || (d[8] = l("Website made by—")), e("a", br, [t(h, {
                        color: y(k).white
                    }, {
                        default: s(() => d[7] || (d[7] = [l("Moyra.co")])),
                        _: 1
                    }, 8, ["color"])])]),
                    _: 1
                })]), e("div", gr, [t(p, {
                    class: "!font-normal"
                }, {
                    default: s(() => d[9] || (d[9] = [l("This website is using "), e("span", {
                        class: "text-white"
                    }, "cookies.", -1)])),
                    _: 1
                })]), e("div", yr, [t(p, {
                    class: "!font-normal"
                }, {
                    default: s(() => d[10] || (d[10] = [l("All right reserved © "), e("span", {
                        class: "text-white"
                    }, "2025", -1)])),
                    _: 1
                })])]), e("div", _r, [(S(), E("svg", {
                    class: "@h-[454] w-full",
                    viewBox: "0 0 261 61",
                    fill: "none",
                    ref_key: "logo",
                    ref: v,
                    xmlns: "http://www.w3.org/2000/svg"
                }, d[11] || (d[11] = [Rt('<defs><linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#B3A694"></stop><stop offset="100%" stop-color="#F5EFE6"></stop></linearGradient></defs><path d="M21.5038 47.5021C17.0797 47.5021 13.2511 46.5287 10.0181 44.5819C6.78508 42.5918 4.29651 39.8447 2.55238 36.3404C0.850796 32.7929 0 28.7046 0 24.0755C0 19.4032 0.850796 15.3149 2.55238 11.8106C4.29651 8.26312 6.78508 5.49433 10.0181 3.50426C13.2511 1.51418 17.0797 0.519149 21.5038 0.519149C26.7787 0.519149 31.0752 1.83865 34.3933 4.47766C37.7114 7.0734 39.8171 10.7291 40.7104 15.4447H32.9257C32.3727 12.8057 31.1177 10.7291 29.1609 9.21489C27.2466 7.70071 24.673 6.94362 21.44 6.94362C18.5047 6.94362 15.9736 7.63581 13.8466 9.02021C11.7197 10.3613 10.0606 12.3298 8.8695 14.9255C7.72093 17.478 7.14667 20.528 7.14667 24.0755C7.14667 27.623 7.72093 30.673 8.8695 33.2255C10.0606 35.7347 11.7197 37.6816 13.8466 39.066C15.9736 40.4503 18.5047 41.1426 21.44 41.1426C24.673 41.1426 27.2466 40.4071 29.1609 38.9362C31.0752 37.4652 32.3514 35.367 32.9895 32.6415H40.7743C39.8809 37.3571 37.754 41.0128 34.3933 43.6085C31.0752 46.2043 26.7787 47.5021 21.5038 47.5021Z" fill="url(#gradient)"></path><path d="M53.2565 47.5021C50.7892 47.5021 48.6835 47.0695 46.9394 46.2043C45.2378 45.2957 43.9403 44.106 43.047 42.6351C42.1962 41.1642 41.7708 39.5635 41.7708 37.833C41.7708 34.4152 42.9832 31.7762 45.4079 29.916C47.8327 28.0557 51.0232 27.1255 54.9794 27.1255C56.766 27.1255 58.3612 27.2769 59.765 27.5798C61.1689 27.8394 62.3174 28.1206 63.2108 28.4234V26.9309C63.2108 24.4216 62.5301 22.5613 61.1689 21.35C59.8501 20.1387 58.0848 19.533 55.8727 19.533C54.2136 19.533 52.746 19.8791 51.4698 20.5713C50.1936 21.2635 49.3854 22.4748 49.0451 24.2053H42.2813C42.5365 21.8691 43.3022 19.944 44.5784 18.4298C45.8971 16.8723 47.5349 15.7043 49.4917 14.9255C51.4485 14.1468 53.5755 13.7574 55.8727 13.7574C60.467 13.7574 63.9977 14.9255 66.465 17.2617C68.9749 19.5979 70.2298 22.8209 70.2298 26.9309V35.367C70.2298 37.011 70.3149 38.2007 70.485 38.9362C70.6977 39.6716 71.0168 40.1475 71.4422 40.3638C71.9101 40.5369 72.5269 40.6234 73.2927 40.6234H73.6117V46.7234H72.0803C69.9533 46.7234 68.1666 46.3989 66.7203 45.75C65.3165 45.1011 64.338 43.8032 63.785 41.8564C62.7641 43.4571 61.3816 44.7982 59.6374 45.8798C57.8933 46.9613 55.7663 47.5021 53.2565 47.5021ZM54.6603 41.9213C56.2768 41.9213 57.6593 41.5319 58.8079 40.7532C59.9565 39.9312 60.8711 38.8713 61.5517 37.5734C62.2749 36.2323 62.7216 34.8046 62.8917 33.2904C61.9558 33.0309 60.8498 32.7713 59.5736 32.5117C58.2974 32.2521 57 32.1223 55.6812 32.1223C53.4266 32.1223 51.725 32.5982 50.5765 33.55C49.4279 34.5018 48.8536 35.7564 48.8536 37.3138C48.8536 38.655 49.3641 39.7582 50.3851 40.6234C51.406 41.4886 52.8311 41.9213 54.6603 41.9213Z" fill="url(#gradient)"></path><path d="M76.208 61V14.5362H83.227V19.4681C84.2479 17.9539 85.6518 16.6344 87.4384 15.5096C89.2251 14.3415 91.4797 13.7574 94.2022 13.7574C97.2651 13.7574 99.9664 14.4929 102.306 15.9638C104.646 17.4347 106.475 19.4465 107.794 21.9989C109.155 24.5514 109.836 27.45 109.836 30.6947C109.836 33.8961 109.155 36.773 107.794 39.3255C106.475 41.878 104.646 43.8897 102.306 45.3606C99.9664 46.7883 97.2651 47.5021 94.2022 47.5021C91.7349 47.5021 89.5654 47.0046 87.6937 46.0096C85.8219 45.0145 84.333 43.6518 83.227 41.9213V61H76.208ZM92.926 41.2723C94.8403 41.2723 96.5206 40.8181 97.967 39.9096C99.4558 39.0011 100.604 37.7681 101.413 36.2106C102.263 34.6099 102.689 32.7713 102.689 30.6947C102.689 28.5748 102.263 26.7145 101.413 25.1138C100.604 23.4699 99.4558 22.2152 97.967 21.35C96.5206 20.4415 94.8403 19.9872 92.926 19.9872C91.0118 19.9872 89.3102 20.4415 87.8213 21.35C86.3749 22.2152 85.2264 23.4482 84.3756 25.0489C83.5673 26.6496 83.1632 28.5099 83.1632 30.6298C83.1632 32.7496 83.5673 34.6099 84.3756 36.2106C85.2264 37.7681 86.3749 39.0011 87.8213 39.9096C89.3102 40.8181 91.0118 41.2723 92.926 41.2723Z" fill="url(#gradient)"></path><path d="M124.945 47.5021C120.947 47.5021 117.607 46.5504 114.927 44.6468C112.29 42.7433 110.78 40.061 110.397 36.6H117.607C117.905 38.2007 118.735 39.4769 120.096 40.4287C121.457 41.3805 123.159 41.8564 125.201 41.8564C127.2 41.8564 128.731 41.4454 129.795 40.6234C130.901 39.8014 131.454 38.7847 131.454 37.5734C131.454 36.5784 131.092 35.8213 130.369 35.3021C129.689 34.783 128.412 34.372 126.541 34.0691C125.818 33.9394 124.967 33.8096 123.988 33.6798C123.01 33.5067 122.159 33.3337 121.436 33.1606C119.819 32.8578 118.288 32.3386 116.842 31.6032C115.438 30.8677 114.289 29.8727 113.396 28.6181C112.503 27.3202 112.056 25.6979 112.056 23.7511C112.056 20.939 113.098 18.5812 115.183 16.6777C117.267 14.7308 120.224 13.7574 124.052 13.7574C127.838 13.7574 130.88 14.6227 133.177 16.3532C135.517 18.0404 136.857 20.5713 137.197 23.9457H130.305C130.178 22.3883 129.518 21.2418 128.327 20.5064C127.136 19.7709 125.711 19.4032 124.052 19.4032C122.308 19.4032 120.925 19.7709 119.904 20.5064C118.884 21.2418 118.373 22.1504 118.373 23.2319C118.373 25.222 119.926 26.4982 123.031 27.0606C123.499 27.1472 124.031 27.2553 124.626 27.3851C125.265 27.4716 125.903 27.5798 126.541 27.7096C127.221 27.7961 127.796 27.8826 128.264 27.9691C129.37 28.0989 130.497 28.3585 131.645 28.7479C132.794 29.094 133.858 29.5915 134.836 30.2404C135.814 30.8894 136.601 31.7546 137.197 32.8362C137.792 33.9177 138.09 35.2805 138.09 36.9245C138.09 39.0011 137.558 40.8397 136.495 42.4404C135.474 43.9979 133.985 45.2308 132.028 46.1394C130.071 47.0479 127.711 47.5021 124.945 47.5021Z" fill="url(#gradient)"></path><path d="M152.342 47.5021C148.811 47.5021 145.982 46.2908 143.855 43.8681C141.728 41.4021 140.665 37.7681 140.665 32.966V14.5362H147.684V32.2521C147.684 35.2805 148.258 37.5734 149.407 39.1308C150.598 40.645 152.257 41.4021 154.384 41.4021C156.851 41.4021 158.787 40.5152 160.191 38.7415C161.595 36.9677 162.296 34.4369 162.296 31.1489V14.5362H169.315V46.7234H162.296V41.7266C161.361 43.5436 160.042 44.9713 158.34 46.0096C156.681 47.0046 154.682 47.5021 152.342 47.5021Z" fill="url(#gradient)"></path><path d="M173.66 46.7234V0H180.679V46.7234H173.66Z" fill="url(#gradient)"></path><path d="M199.816 47.5021C196.668 47.5021 193.882 46.8099 191.457 45.4255C189.075 43.9979 187.182 42.0294 185.778 39.5202C184.417 37.011 183.736 34.0908 183.736 30.7596C183.736 27.4284 184.417 24.4865 185.778 21.934C187.14 19.3383 189.033 17.3266 191.457 15.8989C193.882 14.4713 196.69 13.7574 199.88 13.7574C202.986 13.7574 205.687 14.4496 207.984 15.834C210.324 17.2184 212.132 19.0787 213.408 21.4149C214.684 23.7511 215.322 26.3684 215.322 29.267C215.322 29.6996 215.322 30.1755 215.322 30.6947C215.322 31.1706 215.28 31.7113 215.194 32.317H188.905V27.5149H208.303C208.175 25.0922 207.303 23.167 205.687 21.7394C204.113 20.3117 202.177 19.5979 199.88 19.5979C198.221 19.5979 196.69 19.9872 195.286 20.766C193.882 21.5014 192.755 22.6046 191.904 24.0755C191.053 25.5032 190.628 27.3418 190.628 29.5915V31.4085C190.628 33.5716 191.053 35.4319 191.904 36.9894C192.755 38.5035 193.861 39.65 195.222 40.4287C196.626 41.2074 198.157 41.5968 199.816 41.5968C201.688 41.5968 203.262 41.1642 204.538 40.2989C205.814 39.4337 206.75 38.2656 207.346 36.7947H214.429C213.876 38.828 212.919 40.6667 211.557 42.3106C210.239 43.9114 208.58 45.1876 206.58 46.1394C204.623 47.0479 202.369 47.5021 199.816 47.5021Z" fill="url(#gradient)"></path><path d="M229.703 47.5021C225.704 47.5021 222.365 46.5504 219.685 44.6468C217.047 42.7433 215.537 40.061 215.154 36.6H222.365C222.662 38.2007 223.492 39.4769 224.853 40.4287C226.214 41.3805 227.916 41.8564 229.958 41.8564C231.957 41.8564 233.489 41.4454 234.552 40.6234C235.658 39.8014 236.211 38.7847 236.211 37.5734C236.211 36.5784 235.85 35.8213 235.126 35.3021C234.446 34.783 233.17 34.372 231.298 34.0691C230.575 33.9394 229.724 33.8096 228.745 33.6798C227.767 33.5067 226.916 33.3337 226.193 33.1606C224.577 32.8578 223.045 32.3386 221.599 31.6032C220.195 30.8677 219.046 29.8727 218.153 28.6181C217.26 27.3202 216.813 25.6979 216.813 23.7511C216.813 20.939 217.855 18.5812 219.94 16.6777C222.024 14.7308 224.981 13.7574 228.809 13.7574C232.595 13.7574 235.637 14.6227 237.934 16.3532C240.274 18.0404 241.614 20.5713 241.954 23.9457H235.063C234.935 22.3883 234.276 21.2418 233.085 20.5064C231.893 19.7709 230.468 19.4032 228.809 19.4032C227.065 19.4032 225.683 19.7709 224.662 20.5064C223.641 21.2418 223.13 22.1504 223.13 23.2319C223.13 25.222 224.683 26.4982 227.788 27.0606C228.256 27.1472 228.788 27.2553 229.384 27.3851C230.022 27.4716 230.66 27.5798 231.298 27.7096C231.979 27.7961 232.553 27.8826 233.021 27.9691C234.127 28.0989 235.254 28.3585 236.403 28.7479C237.551 29.094 238.615 29.5915 239.593 30.2404C240.572 30.8894 241.359 31.7546 241.954 32.8362C242.55 33.9177 242.847 35.2805 242.847 36.9245C242.847 39.0011 242.316 40.8397 241.252 42.4404C240.231 43.9979 238.742 45.2308 236.786 46.1394C234.829 47.0479 232.468 47.5021 229.703 47.5021Z" fill="url(#gradient)"></path><path d="M253.673 46.8609C252.267 46.8609 251.004 46.5473 249.884 45.92C248.788 45.2685 247.919 44.3758 247.275 43.2418C246.656 42.1078 246.346 40.829 246.346 39.4055C246.346 37.9337 246.656 36.6429 247.275 35.533C247.919 34.4232 248.788 33.5425 249.884 32.8911C251.004 32.2396 252.267 31.9139 253.673 31.9139C255.126 31.9139 256.401 32.2396 257.497 32.8911C258.593 33.5425 259.451 34.4232 260.071 35.533C260.69 36.6429 261 37.9337 261 39.4055C261 40.829 260.69 42.1078 260.071 43.2418C259.451 44.3758 258.593 45.2685 257.497 45.92C256.401 46.5473 255.126 46.8609 253.673 46.8609ZM253.673 45.3409C255.412 45.3409 256.794 44.786 257.819 43.6761C258.867 42.5662 259.392 41.1427 259.392 39.4055C259.392 37.6442 258.867 36.2207 257.819 35.1349C256.794 34.0251 255.412 33.4701 253.673 33.4701C251.934 33.4701 250.54 34.0251 249.491 35.1349C248.467 36.2207 247.954 37.6442 247.954 39.4055C247.954 41.1427 248.467 42.5662 249.491 43.6761C250.54 44.786 251.934 45.3409 253.673 45.3409ZM250.706 43.2056V35.4607H254.316C255.103 35.4607 255.734 35.6778 256.211 36.1121C256.687 36.5464 256.925 37.1255 256.925 37.8493C256.925 38.6455 256.651 39.2728 256.103 39.7312C256.389 39.9243 256.58 40.1776 256.675 40.4913C256.794 40.8049 256.866 41.1427 256.89 41.5046L257.033 43.2056H255.21L255.067 41.9389C254.995 41.2633 254.888 40.817 254.745 40.5998C254.626 40.3827 254.316 40.2741 253.816 40.2741H252.672V43.2056H250.706ZM252.672 38.7903H254.066C254.328 38.7903 254.543 38.7299 254.71 38.6093C254.9 38.4645 254.995 38.2474 254.995 37.9579C254.995 37.6683 254.9 37.4632 254.71 37.3426C254.543 37.222 254.328 37.1616 254.066 37.1616H252.672V38.7903Z" fill="url(#gradient)"></path>', 10)]), 512))]), d[13] || (d[13] = e("div", {
                    class: "absolute z-[-1] bottom-0 bg-gradient-to-b from-black to-middleBrown h-[100vh] w-full"
                }, null, -1))], 512)
            }
        }
    }),
    kr = {
        __name: "MenuCarousel",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(0),
                d = r(-1),
                n = () => {
                    i.value <= -100 && (i.value = 0), i.value > 0 && (i.value = -100), u.set(f.value, {
                        xPercent: i.value
                    }), u.set(m.value, {
                        xPercent: i.value
                    }), i.value += .02 * d.value, requestAnimationFrame(n)
                };
            return te(async () => {
                await K(), requestAnimationFrame(n)
            }), (p, c) => {
                const o = he;
                return S(), E("div", {
                    class: "relative overflow-hidden @h-[316]",
                    ref_key: "root",
                    ref: a
                }, [e("div", {
                    class: "relative flex min-w-max flex-row items-center overflow-x-auto @px-[30] @py-[40]",
                    ref_key: "slider",
                    ref: v
                }, [e("div", {
                    ref_key: "firstItems",
                    ref: f,
                    class: "flex items-center"
                }, [t(o, {
                    color: y(k).white,
                    class: "@w-[1377]"
                }, null, 8, ["color"]), t(o, {
                    color: y(k).white,
                    class: "@w-[1377]"
                }, null, 8, ["color"]), t(o, {
                    color: y(k).white,
                    class: "@w-[1377]"
                }, null, 8, ["color"])], 512), e("div", {
                    ref_key: "secondItems",
                    ref: m,
                    class: "flex items-center"
                }, [t(o, {
                    color: y(k).white,
                    class: "@w-[1377]"
                }, null, 8, ["color"]), t(o, {
                    color: y(k).white,
                    class: "@w-[1377]"
                }, null, 8, ["color"]), t(o, {
                    color: y(k).white,
                    class: "@w-[1377]"
                }, null, 8, ["color"])], 512)], 512)], 512)
            }
        }
    },
    $r = {
        class: "h-full ml-auto aspect-square rounded-full bg-darkBrown @px-[15] items-center justify-center flex flex-col will-change-[transform] translate-z-0"
    },
    jr = {
        viewBox: "0 0 22 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Hr = {
        transform: "translate(0, 8)"
    },
    Br = ["fill"],
    Mr = ["fill"],
    Tr = ["fill"],
    Or = {
        class: "relative w-full h-full @rounded-[60] overflow-hidden"
    },
    Lr = {
        class: "flex-1 @px-[30] @pt-[50] @pb-[30]"
    },
    Sr = {
        class: "flex justify-between h-full flex-col"
    },
    Rr = {
        class: "flex flex-col"
    },
    Er = {
        class: "flex items-center"
    },
    Ar = {
        class: "flex-1 flex justify-end"
    },
    zr = oe({
        __name: "MenuBurger",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(null),
                d = r(null),
                n = r(null),
                p = r(null),
                c = r(null),
                o = r(null),
                h = r(null),
                j = r(null),
                C = r(null),
                O = r(null),
                T = r(null),
                _ = r(null),
                b = r(!1),
                M = r(null),
                I = r(null);
            let g, x, q, A, P, W;
            const ne = r(!1),
                ee = async () => {
                    if (!(!g || !A))
                        if (g.progress() === 1 || (x == null ? void 0 : x.progress()) === 1) {
                            if (H.menuOpenButton == !0) {
                                H.menuOpenButton = !1;
                                return
                            }
                            u.set(o.value, {
                                width: () => {
                                    const z = window.innerWidth;
                                    return `${(155/1920*z).toFixed(2)}px`
                                },
                                height: () => {
                                    const z = window.innerWidth;
                                    return `${(64/1920*z).toFixed(2)}px`
                                },
                                transformOrigin: "center center",
                                scale: () => window.innerHeight / 23
                            }), u.to([c.value, n.value], {
                                opacity: 0,
                                ease: "power3.inOut",
                                duration: .5,
                                onStart: () => {
                                    setTimeout(() => {
                                        g == null || g.reverse(), x == null || x.reverse(), A == null || A.reverse()
                                    }, 200)
                                }
                            })
                        } else b.value = !0, await K(), g.play(), A.play()
                };
            ae(() => H.menuOpenButton, N => {
                !x || !A || (N ? x == null || x.play() : u.to([c.value, n.value], {
                    opacity: 0,
                    ease: "power3.inOut",
                    duration: .5,
                    onStart: () => {
                        setTimeout(() => {
                            x == null || x.reverse()
                        }, 200)
                    }
                }))
            });
            const X = N => {
                var U, re;
                const z = document.querySelector("#" + N);
                let le = !1;
                (N == "welcome" || N == "choose" || N == "gallery" || N == "capsules") && (le = !0), (U = H.lenis) == null || U.start(), (re = H.lenis) == null || re.scrollTo(z, {
                    duration: 0,
                    offset: 0,
                    force: !0,
                    immediate: !0,
                    onComplete: () => {
                        le && (H.shouldResetCapsules = !0), ee()
                    }
                })
            };
            te(async () => {
                var N, z, le, U, re, ue, F, se, D, B;
                await K(), (N = j.value) == null || N.querySelectorAll(".menu-link-text").forEach(Y => {
                    u.set(Y, {
                        yPercent: -110
                    })
                }), (z = M.value) == null || z.$el.querySelectorAll("a").forEach(Y => {
                    u.set(Y, {
                        scale: 0
                    })
                }), u.set([f.value, v.value], {
                    transformOrigin: "center center"
                }), g = u.timeline({
                    paused: !0,
                    onReverseComplete: () => {
                        u.set([n.value, c.value, d.value, p.value], {
                            opacity: 1,
                            clearProps: "all"
                        })
                    }
                }), g.addLabel("start"), g.to(f.value, {
                    rotate: "45deg",
                    y: 5,
                    ease: "power1.inOut"
                }, "start"), g.to(m.value, {
                    opacity: 0,
                    ease: "power1.inOut"
                }, "start"), g.to(v.value, {
                    rotate: "-45deg",
                    y: -5,
                    ease: "power1.inOut"
                }, "start"), g.to(p.value, {
                    yPercent: -80,
                    ease: "power1.inOut"
                }, "start"), g.to(n.value, {
                    y: 0,
                    ease: "power1.inOut"
                }, "start"), x = u.timeline({
                    paused: !0,
                    onReverseComplete: () => {
                        u.set([n.value, c.value, d.value, p.value], {
                            opacity: 1,
                            clearProps: "all"
                        })
                    }
                }), x.addLabel("start"), x.to(f.value, {
                    rotate: "45deg",
                    y: 5,
                    ease: "power1.inOut"
                }, "start"), x.to(m.value, {
                    opacity: 0,
                    ease: "power1.inOut"
                }, "start"), x.to(v.value, {
                    rotate: "-45deg",
                    y: -5,
                    ease: "power1.inOut"
                }, "start"), x.to(d.value, {
                    yPercent: -80,
                    ease: "power1.inOut"
                }, "start"), x.to(n.value, {
                    y: 0,
                    ease: "power1.inOut"
                }, "start"), q = u.timeline({
                    delay: 3.2,
                    onComplete: () => {
                        var Y;
                        u.set(a.value, {
                            clearProps: "width"
                        }), (Y = a.value) == null || Y.classList.add("!@w-[155]"), ne.value = !1
                    }
                }), q.to(a.value, {
                    scale: 1,
                    ease: "power1.inOut"
                }), q.to(a.value, {
                    width: () => {
                        const ie = window.innerWidth;
                        return `${(155/1920*ie).toFixed(2)}px`
                    },
                    duration: .6,
                    autoRound: !1,
                    ease: "power1.inOut"
                }), q.to(i.value, {
                    duration: .3,
                    opacity: 1,
                    position: "relative",
                    ease: "power1.inOut"
                }), A = u.timeline({
                    paused: !0,
                    onStart: () => {
                        var Y;
                        (Y = H.lenis) == null || Y.stop()
                    },
                    onComplete: () => {
                        u.set(h.value, {
                            clearProps: "scale",
                            width: "100vw",
                            height: "100dvh"
                        }), H.hideTopbar = !0
                    },
                    onReverseComplete: () => {
                        var Y;
                        (Y = H.lenis) == null || Y.start(), b.value = !1
                    }
                }), A.addLabel("start"), A.to(h.value, {
                    backgroundColor: k.black,
                    pointerEvents: "all"
                }, "start"), A.to(o.value, {
                    scale: () => window.innerHeight / 23,
                    transformOrigin: "center center",
                    duration: .6,
                    ease: "sine.inOut"
                }, "start"), A.to(j.value, {
                    opacity: 1,
                    duration: .1,
                    ease: "power1.inOut"
                }, "start"), A.addLabel("reveal"), A.to(C.value, {
                    opacity: 1,
                    width: "30vw",
                    ease: "power1.inOut",
                    duration: .6
                }, "start+=0.40"), A.to([(le = O.value) == null ? void 0 : le.$el, _.value], {
                    scale: 1,
                    ease: "power1.inOut",
                    duration: .6
                }, "start+=0.40"), A.to((U = T.value) == null ? void 0 : U.$el, {
                    opacity: 1,
                    ease: "power1.inOut",
                    duration: .6
                }, "start+=0.40"), A.to(j.value ? j.value.querySelectorAll(".menu-link-text") : [], {
                    yPercent: 0,
                    stagger: .04,
                    ease: "power1.inOut",
                    duration: .5
                }, "start+=0.3"), A.to(M.value ? (re = M.value) == null ? void 0 : re.$el.querySelectorAll("a") : [], {
                    scale: 1,
                    stagger: .05,
                    ease: "sine.inOut",
                    duration: .5
                }, "start+=0.35"), A.to((ue = I.value) == null ? void 0 : ue.$el, {
                    opacity: 1,
                    x: 0,
                    ease: "power1.inOut"
                }, "start+=0.40"), P = u.timeline({
                    paused: !0
                }), P.addLabel("start"), P.to(d.value, {
                    yPercent: -80,
                    ease: "power3.inOut"
                }, "start"), P.to(p.value, {
                    y: 0,
                    ease: "power3.inOut"
                }, "start"), W = u.timeline({
                    paused: !0
                }), W.addLabel("start"), W.to(n.value, {
                    yPercent: -80,
                    ease: "power3.inOut"
                }, "start"), W.to(c.value, {
                    y: 0,
                    ease: "power3.inOut"
                }, "start"), (F = a.value) == null || F.addEventListener("mouseenter", L), (se = a.value) == null || se.addEventListener("mouseleave", Q), (D = a.value) == null || D.addEventListener("mouseenter", R), (B = a.value) == null || B.addEventListener("mouseleave", G)
            });
            const L = () => {
                    ((x == null ? void 0 : x.progress()) ?? 0) > 0 || P == null || P.play()
                },
                Q = () => {
                    ((g == null ? void 0 : g.progress()) ?? 0) > 0 || ((x == null ? void 0 : x.progress()) ?? 0) > 0 || P == null || P.reverse()
                },
                R = () => {
                    (x == null ? void 0 : x.progress()) != 1 && (g == null ? void 0 : g.progress()) != 1 || W == null || W.play()
                },
                G = () => {
                    (x == null ? void 0 : x.progress()) != 1 && (g == null ? void 0 : g.progress()) != 1 || W == null || W.reverse()
                };
            return lt(() => {
                var N, z;
                (N = a.value) == null || N.removeEventListener("mouseenter", L), (z = a.value) == null || z.removeEventListener("mouseleave", Q)
            }), (N, z) => {
                const le = st,
                    U = Gt,
                    re = be,
                    ue = ce,
                    F = kr;
                return S(), E("div", null, [e("button", {
                    id: "menu",
                    "aria-label": "Menu Button",
                    onClick: ee,
                    ref_key: "root",
                    ref: a,
                    class: "@w-[63] @h-[64] bg-white @rounded-[50] fixed @bottom-[50] scale-0 left-0 right-0 mx-auto flex justify-between items-center @p-[6] z-[100]"
                }, [e("div", {
                    class: "@ml-[12] text-darkBrown @text-[18] absolute opacity-0 overflow-hidden @mb-[1] w-full",
                    ref_key: "text",
                    ref: i
                }, [e("div", {
                    ref_key: "text1",
                    ref: d
                }, "Menu", 512), e("div", {
                    class: "absolute top-0 translate-y-[80%] w-full text-center",
                    ref_key: "text2",
                    ref: n
                }, " Close ", 512), e("div", {
                    class: "absolute top-0 translate-y-[80%] w-full text-center",
                    ref_key: "text3",
                    ref: p
                }, " Menu ", 512), e("div", {
                    class: "absolute top-0 translate-y-[80%] w-full text-center",
                    ref_key: "text4",
                    ref: c
                }, " Close ", 512)], 512), e("div", $r, [(S(), E("svg", jr, [e("g", Hr, [e("g", {
                    ref_key: "line1",
                    ref: f
                }, [e("rect", {
                    width: "100%",
                    height: "2",
                    transform: "matrix(-1 0 0 1 22 0)",
                    fill: y(k).lightBrown
                }, null, 8, Br)], 512), e("g", {
                    ref_key: "line2",
                    ref: m
                }, [e("rect", {
                    width: "100%",
                    height: "2",
                    transform: "matrix(-1 0 0 1 22 5)",
                    fill: y(k).lightBrown
                }, null, 8, Mr)], 512), e("g", {
                    ref_key: "line3",
                    ref: v
                }, [e("rect", {
                    width: "100%",
                    height: "2",
                    transform: "matrix(-1 0 0 1 22 10)",
                    fill: y(k).lightBrown
                }, null, 8, Tr)], 512)])]))])], 512), e("div", {
                    class: "fixed w-screen h-dvh inset-0 @p-[10] z-[11] pointer-events-none",
                    ref_key: "menuContainer",
                    ref: h
                }, [e("div", Or, [ve(e("div", {
                    class: "@w-[155] @h-[64] @rounded-[60] absolute left-0 right-0 mx-auto flex justify-between items-center @bottom-[40] w-full h-full bg-darkBrown",
                    ref_key: "menu",
                    ref: o
                }, null, 512), [
                    [$e, y(b)]
                ]), ve(e("div", {
                    class: "flex w-full h-full z-[10] absolute @p-[10] overflow-hidden opacity-0",
                    ref_key: "menuContent",
                    ref: j
                }, [e("div", Lr, [e("div", Sr, [e("div", Rr, [e("a", {
                    onClick: z[0] || (z[0] = se => X("hero")),
                    class: "overflow-hidden relative @mt-[-20] cursor-pointer"
                }, [t(le, {
                    class: "hover:text-white transition-colors !leading-[1.2] text-lightBrown duration-300 menu-link-text !text-[9.9dvh]"
                }, {
                    default: s(() => z[6] || (z[6] = [l("Welcome")])),
                    _: 1
                })]), e("a", {
                    onClick: z[1] || (z[1] = se => X("welcome")),
                    class: "overflow-hidden relative @mt-[-20] cursor-pointer"
                }, [t(le, {
                    class: "hover:text-white transition-colors !leading-[1.2] text-lightBrown duration-300 menu-link-text !text-[9.9dvh]"
                }, {
                    default: s(() => z[7] || (z[7] = [l("Introduction")])),
                    _: 1
                })]), e("a", {
                    onClick: z[2] || (z[2] = se => X("choose")),
                    class: "overflow-hidden relative @mt-[-20] cursor-pointer"
                }, [t(le, {
                    class: "hover:text-white transition-colors !leading-[1.2] text-lightBrown duration-300 menu-link-text !text-[9.9dvh]"
                }, {
                    default: s(() => z[8] || (z[8] = [l("Houses")])),
                    _: 1
                })]), e("a", {
                    onClick: z[3] || (z[3] = se => X("capsules")),
                    class: "overflow-hidden relative @mt-[-20] cursor-pointer"
                }, [t(le, {
                    class: "hover:text-white transition-colors !leading-[1.2] text-lightBrown duration-300 menu-link-text !text-[9.9dvh]"
                }, {
                    default: s(() => z[9] || (z[9] = [l("Why Capsules®")])),
                    _: 1
                })]), e("a", {
                    onClick: z[4] || (z[4] = se => X("discover")),
                    class: "overflow-hidden relative @mt-[-20] cursor-pointer"
                }, [t(le, {
                    class: "hover:text-white transition-colors !leading-[1.2] text-lightBrown duration-300 menu-link-text !text-[9.9dvh]"
                }, {
                    default: s(() => z[10] || (z[10] = [l("Activities")])),
                    _: 1
                })]), e("a", {
                    onClick: z[5] || (z[5] = se => X("reviews")),
                    class: "overflow-hidden relative @mt-[-20] cursor-pointer"
                }, [t(le, {
                    class: "hover:text-white transition-colors !leading-[1.2] text-lightBrown duration-300 menu-link-text !text-[9.9dvh]"
                }, {
                    default: s(() => z[11] || (z[11] = [l("Feedback")])),
                    _: 1
                })])]), e("div", Er, [t(U, {
                    ref_key: "social",
                    ref: M
                }, null, 512), t(re, {
                    class: "!font-semibold @ml-[56] translate-x-[10%] opacity-0",
                    ref_key: "socialText",
                    ref: I
                }, {
                    default: s(() => z[12] || (z[12] = [l(" This website is just the concept work "), e("br", null, null, -1), l("done by—Moyra to showcase our capabilities. ")])),
                    _: 1
                }, 512)])])]), e("div", Ar, [e("div", {
                    class: "relative h-full @rounded-[60] @w-[120] opacity-0 overflow-hidden flex justify-center items-center",
                    ref_key: "rightContent",
                    ref: C
                }, [t(ue, {
                    src: "/images/cap2.png",
                    class: "object-cover object-center absolute scale-[1.2] w-full h-full",
                    ref_key: "image",
                    ref: O,
                    alt: "Menu Image"
                }, null, 512), e("video", {
                    preload: "metadata",
                    class: Be("pointer-events-none absolute object-cover object-center h-full w-full opacity-[0.6] mix-blend-hard-light hide-in-safari scale-[1.5]"),
                    muted: "",
                    playsinline: "",
                    autoplay: "",
                    loop: "",
                    ref_key: "smoke",
                    ref: _
                }, z[13] || (z[13] = [e("source", {
                    src: Me,
                    type: "video/mp4"
                }, null, -1)]), 512), t(F, {
                    ref_key: "carousel",
                    ref: T
                }, null, 512)], 512)])], 512), [
                    [$e, y(b)]
                ])])], 512)])
            }
        }
    }),
    Pr = {
        class: "fixed top-0 w-full"
    },
    Wr = {
        class: "@w-[82]"
    },
    Ir = oe({
        __name: "TopBar",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(!1);
            te(async () => {
                await K(), i(), d()
            });
            const i = async () => {
                await K(), f.value = Ne.create({
                    trigger: a.value,
                    start: "top top",
                    end: "max",
                    onUpdate: c => {
                        var o;
                        v.value || (c.direction === -1 ? n() : H.lenis && ((o = H.lenis) == null ? void 0 : o.scroll) > window.innerHeight * .2 && p())
                    }
                })
            };
            ae(() => H.hideTopbar, c => {
                c && p()
            });
            const d = () => {
                    Ne.create({
                        start: "top top",
                        end: `${window.innerHeight}px`,
                        onUpdate: c => {
                            m.value && (c.progress < 1 ? u.to(m.value, {
                                autoAlpha: 0,
                                duration: .3,
                                ease: "power2.out"
                            }) : u.to(m.value, {
                                autoAlpha: 1,
                                duration: .3,
                                ease: "power2.out"
                            }))
                        }
                    })
                },
                n = () => {
                    u.to(a.value, {
                        yPercent: 0,
                        duration: .5,
                        ease: "power2.out",
                        onStart: () => {
                            v.value = !0
                        },
                        onComplete: () => {
                            v.value = !1
                        }
                    })
                },
                p = () => {
                    u.to(a.value, {
                        yPercent: -100,
                        duration: .5,
                        ease: "power2.out",
                        onStart: () => {
                            v.value = !0
                        },
                        onComplete: () => {
                            v.value = !1, H.hideTopbar = !1
                        }
                    })
                };
            return (c, o) => {
                const h = Et;
                return S(), E("div", Pr, [e("div", {
                    class: "w-full flex justify-between items-center @p-[40]",
                    ref_key: "root",
                    ref: a
                }, [e("div", Wr, [(S(), E("svg", {
                    ref_key: "svgRef",
                    ref: m,
                    viewBox: "0 0 82 38",
                    fill: "none",
                    style: {
                        opacity: "0"
                    },
                    xmlns: "http://www.w3.org/2000/svg"
                }, o[1] || (o[1] = [e("path", {
                    d: "M74.7955 37.5C73.4132 37.5 72.1714 37.2062 71.0703 36.6186C69.9925 36.0085 69.1374 35.1723 68.5048 34.1102C67.8956 33.048 67.591 31.8503 67.591 30.517C67.591 29.1384 67.8956 27.9294 68.5048 26.8898C69.1374 25.8503 69.9925 25.0254 71.0703 24.4153C72.1714 23.8051 73.4132 23.5 74.7955 23.5C76.2247 23.5 77.4781 23.8051 78.5559 24.4153C79.6336 25.0254 80.4771 25.8503 81.0862 26.8898C81.6954 27.9294 82 29.1384 82 30.517C82 31.8503 81.6954 33.048 81.0862 34.1102C80.4771 35.1723 79.6336 36.0085 78.5559 36.6186C77.4781 37.2062 76.2247 37.5 74.7955 37.5ZM74.7955 36.0763C76.5058 36.0763 77.8647 35.5565 78.8722 34.517C79.9031 33.4774 80.4185 32.1441 80.4185 30.517C80.4185 28.8672 79.9031 27.5339 78.8722 26.517C77.8647 25.4774 76.5058 24.9576 74.7955 24.9576C73.0852 24.9576 71.7146 25.4774 70.6837 26.517C69.6762 27.5339 69.1725 28.8672 69.1725 30.517C69.1725 32.1441 69.6762 33.4774 70.6837 34.517C71.7146 35.5565 73.0852 36.0763 74.7955 36.0763ZM71.8786 34.0763V26.822H75.4281C76.2013 26.822 76.8222 27.0254 77.2907 27.4322C77.7593 27.839 77.9936 28.3814 77.9936 29.0593C77.9936 29.8051 77.7241 30.3927 77.1853 30.822C77.4664 31.0028 77.6538 31.2401 77.7476 31.5339C77.8647 31.8277 77.935 32.1441 77.9584 32.4831L78.099 34.0763H76.3067L76.1661 32.8898C76.0958 32.2571 75.9904 31.839 75.8498 31.6356C75.7327 31.4322 75.4281 31.3305 74.9361 31.3305H73.8115V34.0763H71.8786ZM73.8115 29.9407H75.1821C75.4398 29.9407 75.6507 29.8842 75.8147 29.7712C76.0021 29.6356 76.0958 29.4322 76.0958 29.161C76.0958 28.8898 76.0021 28.6977 75.8147 28.5848C75.6507 28.4718 75.4398 28.4153 75.1821 28.4153H73.8115V29.9407Z",
                    fill: "#F4EFE7",
                    style: {
                        fill: "color(display-p3 0.9569 0.9373 0.9059)",
                        "fill-opacity": "1"
                    }
                }, null, -1), e("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M46.3144 5H19.555C11.5971 5 5.14605 11.268 5.14605 19C5.14605 26.732 11.5971 33 19.555 33H46.3144C54.2723 33 60.7234 26.732 60.7234 19C60.7234 11.268 54.2723 5 46.3144 5ZM19.555 0C8.75507 0 0 8.50659 0 19C0 29.4934 8.75507 38 19.555 38H46.3144C57.1144 38 65.8694 29.4934 65.8694 19C65.8694 8.50659 57.1144 0 46.3144 0H19.555Z",
                    fill: "#F4EFE7",
                    style: {
                        fill: "color(display-p3 0.9569 0.9373 0.9059)",
                        "fill-opacity": "1"
                    }
                }, null, -1), e("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M11.4006 11.4071C13.5449 9.29764 16.6662 8 20.5842 8H22.6426V12H20.5842C17.6408 12 15.6161 12.9524 14.3297 14.2179C13.0222 15.5041 12.3505 17.237 12.3505 19C12.3505 20.763 13.0222 22.4959 14.3297 23.7821C15.6161 25.0476 17.6408 26 20.5842 26H22.6426V30H20.5842C16.6662 30 13.5449 28.7024 11.4006 26.5929C9.27735 24.5041 8.23368 21.737 8.23368 19C8.23368 16.263 9.27734 13.4959 11.4006 11.4071Z",
                    fill: "#F4EFE7",
                    style: {
                        fill: "color(display-p3 0.9569 0.9373 0.9059)",
                        "fill-opacity": "1"
                    }
                }, null, -1)]), 512))]), t(h, {
                    class: "z-[10] !mx-[0]",
                    ref: "reserveButton",
                    onClick: o[0] || (o[0] = j => ("general" in c ? c.general : y(H)).reservationOpenButton = !0)
                }, {
                    default: s(() => o[2] || (o[2] = [l("Reserve")])),
                    _: 1
                }, 512)], 512)])
            }
        }
    }),
    qr = {
        viewBox: "0 0 19 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Dr = ["fill"],
    Vr = ["fill"],
    Ut = {
        __name: "Calendar",
        props: {
            color: {
                type: String,
                default: k.white
            }
        },
        setup($) {
            const a = $;
            return (f, m) => (S(), E("svg", qr, [e("path", {
                d: "M4.5 9H6.5V11H4.5V9ZM4.5 13H6.5V15H4.5V13ZM8.5 9H10.5V11H8.5V9ZM8.5 13H10.5V15H8.5V13ZM12.5 9H14.5V11H12.5V9ZM12.5 13H14.5V15H12.5V13Z",
                fill: a.color
            }, null, 8, Dr), e("path", {
                d: "M2.5 20H16.5C17.603 20 18.5 19.103 18.5 18V4C18.5 2.897 17.603 2 16.5 2H14.5V0H12.5V2H6.5V0H4.5V2H2.5C1.397 2 0.5 2.897 0.5 4V18C0.5 19.103 1.397 20 2.5 20ZM16.5 6L16.501 18H2.5V6H16.5Z",
                fill: a.color
            }, null, 8, Vr)]))
        }
    },
    Zr = {
        class: "h-full ml-auto aspect-square rounded-full bg-darkBrown @px-[15] items-center justify-center flex flex-col will-change-[transform] translate-z-0"
    },
    Fr = {
        viewBox: "0 0 24 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Nr = ["fill"],
    Gr = oe({
        __name: "SecondaryButton",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null);
            let i, d, n;
            te(async () => {
                var o, h;
                await K(), i = u.timeline({
                    paused: !0
                }), i.addLabel("start"), d = u.timeline({
                    delay: 3.2
                }), d.to(a.value, {
                    scale: 1,
                    ease: "power1.inOut"
                }), d.to(f.value, {
                    duration: .3,
                    opacity: 1,
                    position: "relative",
                    ease: "power1.inOut"
                }), n = u.timeline({
                    paused: !0
                }), n.addLabel("start"), n.to(m.value, {
                    yPercent: -90,
                    ease: "power3.inOut"
                }, "start"), n.to(v.value, {
                    y: 0,
                    opacity: 1,
                    ease: "power3.inOut"
                }, "start"), (o = a.value) == null || o.addEventListener("mouseenter", p), (h = a.value) == null || h.addEventListener("mouseleave", c)
            });
            const p = () => {
                    n == null || n.play()
                },
                c = () => {
                    n == null || n.reverse()
                };
            return lt(() => {
                var o, h;
                (o = a.value) == null || o.removeEventListener("mouseenter", p), (h = a.value) == null || h.removeEventListener("mouseleave", c)
            }), (o, h) => (S(), E("button", {
                ref_key: "root",
                ref: a,
                class: "@h-[64] bg-white @rounded-[50] flex justify-between items-center @p-[6]"
            }, [e("div", {
                class: "@ml-[24] text-darkBrown @text-[18] @mr-[16] overflow-hidden relative @mb-[1] w-full",
                ref_key: "text",
                ref: f
            }, [e("div", {
                ref_key: "text1",
                ref: m
            }, [xe(o.$slots, "default")], 512), e("div", {
                ref_key: "text2",
                ref: v,
                class: "absolute top-0 opacity-0 translate-y-[90%] w-full text-center"
            }, [xe(o.$slots, "default")], 512)], 512), e("div", Zr, [(S(), E("svg", Fr, [e("path", {
                d: "M19.5369 11.9816L0.641607 11.9816L0.641607 10.0375L19.5369 10.0375L11.3665 1.8671L12.7913 0.442382L23.3584 11.0095L12.8098 21.5581L11.4036 20.152L19.5369 11.9816Z",
                fill: y(k).lightBrown
            }, null, 8, Nr)]))])], 512))
        }
    }),
    Ur = {
        class: "opacity-[0]"
    },
    Jr = {
        class: "flex @gap-[7] @mt-[35]"
    },
    Yr = {
        class: "w-full h-[70%] @rounded-[23] relative overflow-hidden flex items-center justify-center"
    },
    Kr = {
        class: "flex h-[30%] relative items-center justify-center"
    },
    Xr = {
        class: "w-full h-[70%] @rounded-[23] relative overflow-hidden"
    },
    Qr = {
        class: "flex h-[30%] relative items-center justify-center"
    },
    ea = {
        class: "w-full h-[70%] @rounded-[23] relative overflow-hidden"
    },
    ta = {
        class: "flex h-[30%] relative items-center justify-center"
    },
    la = {
        class: "flex @mt-[38] @mb-[60]"
    },
    oa = {
        class: "flex-1"
    },
    sa = {
        class: "absolute right-0 top-[2px]"
    },
    na = {
        class: "flex-1"
    },
    ra = {
        class: "absolute right-0 top-[2px]"
    },
    aa = {
        href: "mailto:hello@moyra.co",
        class: "text-white"
    },
    ia = {
        class: "flex @mt-[40] @gap-[10]"
    },
    ua = {
        href: "https://moyra.co/inquiry",
        target: "_blank"
    },
    da = {
        href: "https://moyra.co/",
        target: "_blank"
    },
    ca = {
        class: "relative @mx-[10]"
    },
    fa = {
        class: "opacity-0 flex w-full justify-center items-center"
    },
    pa = {
        class: "flex w-full"
    },
    va = {
        class: "flex flex-col"
    },
    ma = {
        class: "flex flex-col"
    },
    wa = {
        preload: "metadata",
        class: Be("pointer-events-none absolute object-cover object-center hide-in-safari  h-full w-full mix-blend-hard-light opacity-[0.6]"),
        muted: "",
        playsinline: "",
        autoplay: "",
        loop: "",
        ref: "smoke"
    },
    xa = oe({
        __name: "Reservation",
        setup($) {
            r(0);
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(null),
                d = r(null),
                n = r(null),
                p = r(null),
                c = r(null),
                o = r(null),
                h = r(null),
                j = r(!0),
                C = r(null),
                O = r(null),
                T = r(null),
                _ = r(null),
                b = r(null),
                M = r(null),
                I = r(null),
                g = r(!1),
                x = r(!1),
                q = r(null),
                A = r(null),
                P = we(c),
                W = we(o),
                ne = we(h),
                ee = r(0),
                X = r(null),
                L = r(null),
                Q = r(null);
            ze(L, D => {
                g.value = !1
            }), ze(Q, D => {
                x.value = !1
            }), ae(g, D => {
                D ? u.to(q.value, {
                    width: "100%",
                    duration: .3,
                    ease: "power2.inOut"
                }) : u.to(q.value, {
                    width: "0%",
                    duration: .3,
                    ease: "power2.inOut"
                })
            }), ae(x, D => {
                D ? u.to(A.value, {
                    width: "100%",
                    duration: .3,
                    ease: "power2.inOut"
                }) : u.to(A.value, {
                    width: "0%",
                    duration: .3,
                    ease: "power2.inOut"
                })
            });
            const R = we(X);
            ae(R, D => {
                var B, Y, ie, pe;
                D ? (u.to([(B = X.value) == null ? void 0 : B.children[0]], {
                    scale: 1,
                    duration: .3,
                    ease: "power2.inOut"
                }), u.to([(Y = X.value) == null ? void 0 : Y.children[1].querySelectorAll("rect")], {
                    fill: k.black,
                    duration: .3,
                    ease: "power2.inOut"
                })) : (u.to([(ie = X.value) == null ? void 0 : ie.children[0]], {
                    scale: 0,
                    duration: .3,
                    ease: "power2.inOut"
                }), u.to([(pe = X.value) == null ? void 0 : pe.children[1].querySelectorAll("rect")], {
                    fill: k.white,
                    duration: .3,
                    ease: "power2.inOut"
                }))
            });
            const G = me({
                    get() {
                        return M.value ? new Date(M.value).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit"
                        }) : ""
                    },
                    set(D) {}
                }),
                N = me({
                    get() {
                        return I.value ? new Date(I.value).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit"
                        }) : ""
                    },
                    set(D) {}
                }),
                z = me(() => {
                    var D, B, Y, ie, pe, Ce;
                    if (ee.value == 0) return 2e3 * Math.ceil(((((D = I.value) == null ? void 0 : D.getTime()) ?? 0) - (((B = M.value) == null ? void 0 : B.getTime()) ?? 0)) / (1e3 * 60 * 60 * 24));
                    if (ee.value == 1) return 2500 * Math.ceil(((((Y = I.value) == null ? void 0 : Y.getTime()) ?? 0) - (((ie = M.value) == null ? void 0 : ie.getTime()) ?? 0)) / (1e3 * 60 * 60 * 24));
                    if (ee.value == 2) return 2250 * Math.ceil(((((pe = I.value) == null ? void 0 : pe.getTime()) ?? 0) - (((Ce = M.value) == null ? void 0 : Ce.getTime()) ?? 0)) / (1e3 * 60 * 60 * 24))
                }),
                le = () => {
                    se == null || se.play()
                },
                U = me(() => {
                    if (M.value && I.value) {
                        const D = new Date(M.value),
                            B = new Date(I.value),
                            Y = String(D.getMonth() + 1).padStart(2, "0"),
                            ie = String(D.getDate()).padStart(2, "0"),
                            pe = String(B.getMonth() + 1).padStart(2, "0"),
                            Ce = String(B.getDate()).padStart(2, "0");
                        return `${ie}.${Y} - ${Ce}.${pe}`
                    }
                    return ""
                });
            ae(P, D => {
                var B;
                if (D) re(0);
                else {
                    if (ee.value == 0) return;
                    u.to(d.value, {
                        scale: 1,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to((B = C.value) == null ? void 0 : B.$el, {
                        color: `${k.white}`,
                        duration: .5,
                        ease: "power1.inOut"
                    })
                }
            }), ae(W, D => {
                var B;
                if (D) re(1);
                else {
                    if (ee.value == 1) return;
                    u.to(n.value, {
                        scale: 1,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to((B = O.value) == null ? void 0 : B.$el, {
                        color: `${k.white}`,
                        duration: .5,
                        ease: "power1.inOut"
                    })
                }
            }), ae(ne, D => {
                var B;
                if (D) re(2);
                else {
                    if (ee.value == 2) return;
                    u.to(p.value, {
                        scale: 1,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to((B = T.value) == null ? void 0 : B.$el, {
                        color: `${k.white}`,
                        duration: .5,
                        ease: "power1.inOut"
                    })
                }
            }), ze(v, D => {
                H.reservationOpenButton = !1
            });
            const re = D => {
                    var B, Y, ie;
                    D == 0 && (u.to(d.value, {
                        scale: 30,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to((B = C.value) == null ? void 0 : B.$el, {
                        color: `${k.black}`,
                        duration: .5,
                        ease: "power1.inOut"
                    })), D == 1 && (u.to(n.value, {
                        scale: 30,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to((Y = O.value) == null ? void 0 : Y.$el, {
                        color: `${k.black}`,
                        duration: .5,
                        ease: "power1.inOut"
                    })), D == 2 && (u.to(p.value, {
                        scale: 30,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to((ie = T.value) == null ? void 0 : ie.$el, {
                        color: `${k.black}`,
                        duration: .5,
                        ease: "power1.inOut"
                    }))
                },
                ue = D => {
                    var B, Y, ie, pe, Ce, Se;
                    ee.value = D, D == 0 && (u.to([n.value, p.value], {
                        backgroundColor: `${k.lightBrown}`,
                        scale: 1,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to([(B = O.value) == null ? void 0 : B.$el, (Y = T.value) == null ? void 0 : Y.$el], {
                        color: `${k.white}`,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to(d.value, {
                        backgroundColor: `${k.white}`,
                        duration: .5,
                        ease: "power1.inOut"
                    })), D == 1 && (u.to([d.value, p.value], {
                        backgroundColor: `${k.lightBrown}`,
                        scale: 1,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to([(ie = C.value) == null ? void 0 : ie.$el, (pe = T.value) == null ? void 0 : pe.$el], {
                        color: `${k.white}`,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to(n.value, {
                        backgroundColor: `${k.white}`,
                        duration: .5,
                        ease: "power1.inOut"
                    })), D == 2 && (u.to([d.value, n.value], {
                        backgroundColor: `${k.lightBrown}`,
                        scale: 1,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to([(Ce = C.value) == null ? void 0 : Ce.$el, (Se = O.value) == null ? void 0 : Se.$el], {
                        color: `${k.white}`,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to(p.value, {
                        backgroundColor: `${k.white}`,
                        duration: .5,
                        ease: "power1.inOut"
                    }))
                };
            let F, se;
            return ae(() => H.reservationOpenButton, D => {
                var B;
                F && (D ? (ee.value = 0, re(0), ue(0), g.value = !1, x.value = !1, F.play(), (B = H.lenis) == null || B.stop()) : (g.value = !1, x.value = !1, u.to([_.value, b.value], {
                    opacity: 0,
                    duration: .6,
                    onComplete: () => {
                        u.set(_.value, {
                            clearProps: "all"
                        }), u.set(b.value, {
                            clearProps: "all"
                        })
                    }
                }), F.reverse()))
            }), te(async () => {
                M.value = new Date, I.value = new Date, I.value.setDate(M.value.getDate() + 5), await K(), F = u.timeline({
                    paused: !0,
                    onReverseComplete: () => {
                        var D;
                        (D = H.lenis) == null || D.start(), j.value = !0, u.set(i.value, {
                            clearProps: "all"
                        }), se == null || se.pause().progress(0), u.set([f.value.children[0], f.value.children[1], i.value, i.value.children[0]], {
                            clearProps: "all"
                        })
                    }
                }), F.addLabel("start"), F.to(a.value, {
                    opacity: 1,
                    pointerEvents: "all",
                    duration: .3,
                    autoRound: !1,
                    ease: "power1.inOut"
                }, "start"), F.to(f.value, {
                    width: "30vw",
                    duration: .6,
                    autoRound: !1,
                    ease: "power1.inOut"
                }, "start"), F.addLabel("end"), F.to(m.value, {
                    opacity: 1,
                    duration: .6,
                    autoRound: !1,
                    ease: "power1.inOut"
                }, "start+=0.2"), F.to(i.value, {
                    width: "100%",
                    duration: .6,
                    autoRound: !1,
                    ease: "power1.inOut"
                }, "start+=0.4"), F.to([f.value.children[0], i.value.children[0]], {
                    opacity: 1,
                    duration: .6,
                    autoRound: !1,
                    ease: "power1.inOut"
                }, "start+=0.8"), se = u.timeline({
                    paused: !0
                }), se.addLabel("start"), se.to([f.value.children[0], i.value.children[0]], {
                    opacity: 0,
                    duration: .6,
                    autoRound: !1,
                    onComplete: () => {
                        j.value = !1
                    },
                    ease: "power1.inOut"
                }, "start"), se.to(i.value, {
                    width: "0%",
                    duration: .6,
                    autoRound: !1,
                    opacity: 0,
                    ease: "power1.inOut"
                }, "start+=0.4"), se.addLabel("end"), se.to(_.value, {
                    opacity: 1,
                    duration: .6,
                    autoRound: !1,
                    ease: "power1.inOut"
                }, "end"), se.to(b.value, {
                    opacity: 1,
                    duration: .6,
                    autoRound: !1,
                    ease: "power1.inOut"
                }, "end")
            }), (D, B) => {
                const Y = Le,
                    ie = be,
                    pe = ce,
                    Ce = Ut,
                    Se = At,
                    vt = je,
                    rt = Et,
                    ke = Ge,
                    w = Gr,
                    ye = he;
                return S(), E("div", {
                    class: "fixed inset-0 z-[10] flex justify-end pointer-events-none opacity-0",
                    ref_key: "root",
                    ref: a
                }, [B[33] || (B[33] = e("div", {
                    class: "absolute inset-0 bg-black opacity-[0.94]"
                }, null, -1)), e("div", {
                    class: "@p-[10] relative",
                    ref_key: "rootContainer",
                    ref: v
                }, [e("div", {
                    class: "h-full bg-darkBrown @w-[60] z-[11] @rounded-[60] @px-[40] flex flex-col justify-start @pt-[100]",
                    ref_key: "container",
                    ref: f
                }, [ve(e("div", Ur, [t(Y, {
                    class: "!@text-[40] !@leading-[42]"
                }, {
                    default: s(() => B[12] || (B[12] = [l("Make it memorable"), e("br", null, null, -1), l("and reserve one of"), e("br", null, null, -1), l(" our—Capsules®")])),
                    _: 1
                }), t(ie, {
                    class: "!font-semibold @mt-[30]"
                }, {
                    default: s(() => B[13] || (B[13] = [l("Ready to start your journey to a desert adventure? Secure your capsule by filling out the reservation form.We hope to see you soon!")])),
                    _: 1
                }), t(ie, {
                    class: "!font-semibold @mt-[30] !text-white"
                }, {
                    default: s(() => B[14] || (B[14] = [l("(1) Which capsule you would like to reserve?")])),
                    _: 1
                }), e("div", Jr, [e("div", {
                    ref_key: "firstCapsule",
                    ref: c,
                    onClick: B[0] || (B[0] = de => ue(0)),
                    class: "flex-1 aspect-square @min-h-[100] bg-black @rounded-[30] @p-[6] transition-colors cursor-pointer relative overflow-hidden"
                }, [e("div", {
                    class: "absolute w-[10px] h-[10px] rounded-full bg-lightBrown inset-0 m-auto",
                    ref_key: "firstCapsuleCircle",
                    ref: d
                }, null, 512), e("div", Yr, [t(pe, {
                    src: "/images/cap1-mobile.png",
                    alt: "Classic Capsule Map",
                    class: "object-cover object-center absolute w-full h-full"
                })]), e("div", Kr, [t(ie, {
                    class: "!font-normal text-center",
                    ref_key: "firstCapsuleText",
                    ref: C,
                    color: y(k).white
                }, {
                    default: s(() => B[15] || (B[15] = [l("Classic C®")])),
                    _: 1
                }, 8, ["color"])])], 512), e("div", {
                    ref_key: "secondCapsule",
                    ref: o,
                    onClick: B[1] || (B[1] = de => ue(1)),
                    class: "flex-1 aspect-square @min-h-[100] bg-black @rounded-[30] @p-[6] transition-colors cursor-pointer relative overflow-hidden"
                }, [e("div", {
                    class: "absolute w-[10px] h-[10px] rounded-full bg-lightBrown inset-0 m-auto",
                    ref_key: "secondCapsuleCircle",
                    ref: n
                }, null, 512), e("div", Xr, [t(pe, {
                    src: "/images/cap2-mobile.png",
                    alt: "Classic Capsule Map 2",
                    class: "object-cover object-center absolute w-full h-full"
                })]), e("div", Qr, [t(ie, {
                    class: "!font-normal text-center",
                    color: y(k).white,
                    ref_key: "secondCapsuleText",
                    ref: O
                }, {
                    default: s(() => B[16] || (B[16] = [l("Terrace C®")])),
                    _: 1
                }, 8, ["color"])])], 512), e("div", {
                    ref_key: "thirdCapsule",
                    ref: h,
                    onClick: B[2] || (B[2] = de => ue(2)),
                    class: "flex-1 aspect-square @min-h-[100] bg-black @rounded-[30] @p-[6] transition-colors cursor-pointer relative overflow-hidden"
                }, [e("div", {
                    class: "absolute w-[10px] h-[10px] rounded-full bg-lightBrown inset-0 m-auto",
                    ref_key: "thirdCapsuleCircle",
                    ref: p
                }, null, 512), e("div", ea, [t(pe, {
                    src: "/images/cap3-mobile.png",
                    class: "object-cover object-center absolute w-full h-full"
                })]), e("div", ta, [t(ie, {
                    class: "!font-normal text-center",
                    color: y(k).white,
                    ref_key: "thirdCapsuleText",
                    ref: T
                }, {
                    default: s(() => B[17] || (B[17] = [l("Desert C®")])),
                    _: 1
                }, 8, ["color"])])], 512)]), t(ie, {
                    class: "!font-semibold @mt-[30] !text-white"
                }, {
                    default: s(() => B[18] || (B[18] = [l("(2) How long you would like to stay and when? ")])),
                    _: 1
                }), e("div", la, [e("div", oa, [e("div", {
                    class: "relative",
                    ref_key: "checkInInput",
                    ref: L
                }, [ve(e("input", {
                    type: "text",
                    placeholder: "Check-in",
                    "onUpdate:modelValue": B[3] || (B[3] = de => Re(G) ? G.value = de : null),
                    onFocus: B[4] || (B[4] = de => {
                        g.value = !0, x.value = !1
                    }),
                    class: "bg-darkBrown text-lightBrown placeholder-lightBrown ring-0 @text-[18] focus:outline-none @pb-[20] cursor-pointer"
                }, null, 544), [
                    [it, y(G)]
                ]), B[19] || (B[19] = e("div", {
                    class: "absolute w-full h-[1px] bg-lightBrown"
                }, null, -1)), e("div", {
                    class: "absolute w-[0px] h-[1px] bg-white",
                    ref_key: "whiteLine1",
                    ref: q
                }, null, 512), e("div", sa, [t(Ce, {
                    class: "@w-[20] @h-[20]",
                    color: y(k).white
                }, null, 8, ["color"])]), t(ut, {
                    name: "fade"
                }, {
                    default: s(() => [ve(e("div", null, [t(Se, {
                        class: "mobile-left",
                        modelValue: y(M),
                        "onUpdate:modelValue": [B[5] || (B[5] = de => Re(M) ? M.value = de : null), B[6] || (B[6] = de => g.value = !1)],
                        mode: "date",
                        expanded: "",
                        "min-date": Date()
                    }, null, 8, ["modelValue", "min-date"])], 512), [
                        [$e, y(g)]
                    ])]),
                    _: 1
                })], 512)]), B[21] || (B[21] = e("div", {
                    class: "flex items-center justify-center"
                }, [e("span", {
                    class: "@px-[30] text-white @text-[18]"
                }, "—")], -1)), e("div", na, [e("div", {
                    class: "relative",
                    ref_key: "checkOutInput",
                    ref: Q
                }, [ve(e("input", {
                    type: "text",
                    "onUpdate:modelValue": B[7] || (B[7] = de => Re(N) ? N.value = de : null),
                    onFocus: B[8] || (B[8] = de => {
                        x.value = !0, g.value = !1
                    }),
                    placeholder: "Check-out",
                    class: "bg-darkBrown text-lightBrown placeholder-lightBrown ring-0 @text-[18] focus:outline-none @pb-[20] cursor-pointer"
                }, null, 544), [
                    [it, y(N)]
                ]), B[20] || (B[20] = e("div", {
                    class: "absolute w-full h-[1px] bg-lightBrown"
                }, null, -1)), e("div", {
                    class: "absolute w-[0px] h-[1px] bg-white",
                    ref_key: "whiteLine2",
                    ref: A
                }, null, 512), e("div", ra, [t(Ce, {
                    class: "@w-[20] @h-[20]",
                    color: y(k).white
                }, null, 8, ["color"])]), t(ut, {
                    name: "fade"
                }, {
                    default: s(() => [ve(e("div", null, [t(Se, {
                        class: "mobile-right",
                        modelValue: y(I),
                        "onUpdate:modelValue": [B[9] || (B[9] = de => Re(I) ? I.value = de : null), B[10] || (B[10] = de => x.value = !1)],
                        mode: "date",
                        expanded: "",
                        "min-date": Date()
                    }, null, 8, ["modelValue", "min-date"])], 512), [
                        [$e, y(x)]
                    ])]),
                    _: 1
                })], 512)])])], 512), [
                    [$e, y(j)]
                ]), e("div", {
                    class: "opacity-[0]",
                    ref_key: "nextStepContent",
                    ref: _
                }, [t(Y, {
                    class: "!@text-[40] !@leading-[42]"
                }, {
                    default: s(() => B[22] || (B[22] = [l("Thank you for your"), e("br", null, null, -1), l("interest—but you can't"), e("br", null, null, -1), l("go further :(")])),
                    _: 1
                }), t(ie, {
                    class: "!font-semibold @mt-[30]"
                }, {
                    default: s(() => [B[24] || (B[24] = l("This website is just the concept work done by Moyra— a premium digital lab. If you like this project and would like to outsource something similar, don’t hesitate to contact us. Click the below button or use our email: ")), e("a", aa, [t(vt, {
                        color: y(k).white
                    }, {
                        default: s(() => B[23] || (B[23] = [l("hello@moyra.co")])),
                        _: 1
                    }, 8, ["color"])])]),
                    _: 1
                }), e("div", ia, [e("a", ua, [t(rt, {
                    class: "!mx-[0]"
                }, {
                    default: s(() => B[25] || (B[25] = [l("Inquiry")])),
                    _: 1
                })]), e("a", da, [t(rt, {
                    class: "!mx-[0]"
                }, {
                    default: s(() => B[26] || (B[26] = [l("Moyra")])),
                    _: 1
                })])])], 512)], 512), e("div", {
                    class: "opacity-0",
                    ref_key: "bottomBar",
                    ref: m
                }, [e("button", {
                    id: "closeReservation",
                    "aria-label": "Close Reservation",
                    class: "@w-[52] @h-[52] bg-black absolute rounded-full flex justify-center items-center @top-[30] @left-[50]",
                    onClick: B[11] || (B[11] = de => ("general" in D ? D.general : y(H)).reservationOpenButton = !1),
                    ref_key: "closeButton",
                    ref: X
                }, [B[27] || (B[27] = e("div", {
                    class: "absolute h-full w-full scale-0 rounded-full will-change-transform bg-white"
                }, null, -1)), t(ke, {
                    color: y(k).white,
                    class: "@w-[20] rotate-[45deg]"
                }, null, 8, ["color"])], 512), e("div", ca, [e("div", {
                    class: "absolute @bottom-[10] @w-[100] @h-[100] @rounded-[50] bg-black flex justify-between items-center @pl-[40] @pr-[20]",
                    ref_key: "bottomBarContent",
                    ref: i
                }, [e("div", fa, [e("div", pa, [e("div", va, [t(ie, {
                    class: "!font-normal"
                }, {
                    default: s(() => B[28] || (B[28] = [l("Stay")])),
                    _: 1
                }), t(ie, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => [l(Oe(y(U)), 1)]),
                    _: 1
                })]), B[30] || (B[30] = e("div", {
                    class: "flex"
                }, [e("div", {
                    class: "h-full w-[1px] bg-lightBrown @mx-[30] opacity-[0.2]"
                })], -1)), e("div", ma, [t(ie, {
                    class: "!font-normal"
                }, {
                    default: s(() => B[29] || (B[29] = [l("Cost")])),
                    _: 1
                }), t(ie, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => [l(Oe(y(z)) + " USD", 1)]),
                    _: 1
                })])]), t(w, {
                    onClick: le
                }, {
                    default: s(() => B[31] || (B[31] = [l("Next")])),
                    _: 1
                })])], 512), e("div", {
                    class: "w-full @h-[321] bg-white @rounded-[54] absolute @bottom-[10] overflow-hidden flex justify-center items-center opacity-0 pointer-events-none",
                    ref_key: "nextStepImage",
                    ref: b
                }, [t(pe, {
                    src: "/images/cap2.png",
                    ref: "image",
                    class: "object-cover object-center absolute w-full h-full"
                }, null, 512), e("video", wa, B[32] || (B[32] = [e("source", {
                    src: Me,
                    type: "video/mp4"
                }, null, -1)]), 512), t(ye, {
                    color: y(k).white,
                    class: "@max-w-[324] w-full scale-[1]",
                    ref: "logo"
                }, null, 8, ["color"])], 512)])], 512)], 512)], 512)
            }
        }
    }),
    ha = _e(xa, [
        ["__scopeId", "data-v-24094ef2"]
    ]),
    ba = {
        key: 0,
        class: "w-full h-full"
    },
    ga = {
        class: "w-full h-full flex justify-center items-center"
    },
    ya = {
        class: "absolute flex @bottom-[60] justify-center items-center w-full text-center"
    },
    _a = oe({
        __name: "Preloader",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(null),
                d = r(null),
                n = r(!1),
                p = r(!1);
            let c;
            return te(async () => {
                var j, C, O, T;
                await K();
                const o = (j = i.value) == null ? void 0 : j.$el.querySelectorAll("path");
                let h = 0;
                o.forEach(_ => {
                    const b = _.getBBox();
                    b.width > h && (h = b.width)
                }), u.set((C = i.value) == null ? void 0 : C.$el.querySelectorAll("path"), {
                    clipPath: "inset(0% 100% 0% 0%)",
                    x: h
                }), c = u.timeline({
                    onComplete: () => {
                        var _, b, M;
                        u.set(a.value, {
                            position: "relative"
                        }), (_ = f.value) == null || _.classList.remove("preloader", "bg-black", "h-full", "w-full"), (b = H.lenis) == null || b.start(), (M = H.lenis) == null || M.resize(), p.value = !0
                    }
                }), c.to(m.value, {
                    opacity: 1,
                    duration: .3,
                    ease: "power2.inOut"
                }), c.addLabel("logo"), c.to((O = i.value) == null ? void 0 : O.$el.querySelectorAll("path"), {
                    clipPath: "inset(0% 0% 0% 0%)",
                    stagger: .01,
                    x: 0,
                    duration: .6,
                    ease: "power1.inOut"
                }, "logo"), c.to(v.value, {
                    duration: 1,
                    width: "50%",
                    onStart: () => {
                        n.value = !0
                    },
                    ease: "power1.inOut"
                }, "logo"), c.to(v.value, {
                    duration: 1,
                    width: "60%",
                    ease: "power2.inOut"
                }), c.to(v.value, {
                    duration: .6,
                    width: "100%",
                    ease: "power2.inOut"
                }), c.addLabel("dissapear"), c.to((T = i.value) == null ? void 0 : T.$el.querySelectorAll("path"), {
                    clipPath: "inset(0% 100% 0% 0%)",
                    stagger: .01,
                    x: h,
                    duration: .6,
                    ease: "power1.inOut"
                }, "dissapear"), c.to(m.value, {
                    duration: .5,
                    opacity: 0,
                    ease: "power2.inOut"
                }, "dissapear"), c.to(f.value, {
                    duration: .9,
                    "--height": () => window.innerHeight + "px",
                    ease: "power1.inOut",
                    onStart: () => {
                        var _;
                        (_ = d.value) == null || _.reverse()
                    }
                }, "dissapear")
            }), (o, h) => {
                const j = he,
                    C = wt,
                    O = be;
                return S(), E("div", {
                    ref_key: "container",
                    ref: a,
                    class: "absolute w-full h-full z-[10]"
                }, [e("div", {
                    ref_key: "root",
                    ref: f,
                    style: {
                        "--height": "23vh"
                    },
                    class: "flex h-full w-full justify-center items-center bg-black preloader"
                }, [y(n) ? (S(), E("div", ba, [xe(o.$slots, "default")])) : Ie("", !0), y(p) ? Ie("", !0) : (S(), E("div", {
                    key: 1,
                    class: "absolute w-screen h-screen bg-darkBrown opacity-0 flex items-center pointer-events-none",
                    ref_key: "capsule",
                    ref: m
                }, [e("div", ga, [t(j, {
                    ref_key: "logo",
                    ref: i,
                    color: y(k).white,
                    class: "absolute z-[10] mix-blend-exclusion overflow-hidden @h-[50]"
                }, null, 8, ["color"])]), e("div", {
                    class: "absolute bg-white h-full",
                    ref_key: "loader",
                    ref: v
                }, null, 512)], 512))], 512), e("div", ya, [t(O, null, {
                    default: s(() => [t(C, {
                        ref_key: "bottomText",
                        ref: d
                    }, {
                        default: s(() => h[0] || (h[0] = [l("Meet Capsules®—modern and cozy "), e("br", null, null, -1), l("houses, in the California desert.")])),
                        _: 1
                    }, 512)]),
                    _: 1
                })])], 512)
            }
        }
    }),
    Ca = {},
    ka = {
        class: "text-[23px] font-semibold leading-[26px] tracking-[-0.2px] text-white"
    };

function $a($, a) {
    return S(), E("div", ka, [xe($.$slots, "default")])
}
const Te = _e(Ca, [
        ["render", $a]
    ]),
    ja = {
        id: "hero",
        class: "h-screen justify-between w-full relative p-[10px] pb-[100px] pt-[50px] flex flex-col"
    },
    Ha = {
        class: "px-[10px]"
    },
    Ba = {
        class: "flex flex-col"
    },
    Ma = {
        class: "w-full h-[45vh] relative overflow-hidden rounded-[30px] bg-black"
    },
    Ta = oe({
        __name: "MobileHero",
        setup($) {
            let a;
            const f = r(null),
                m = r(null);
            return te(async () => {
                var v;
                await K(), a = u.timeline({
                    delay: 2.7
                }), a.addLabel("start"), a.to((v = f.value) == null ? void 0 : v.$el, {
                    duration: 1.5,
                    scale: 1,
                    opacity: 1,
                    ease: "power2.out"
                }, "start"), a.to(m.value, {
                    duration: 1.5,
                    scale: 1,
                    opacity: 1,
                    ease: "power2.out"
                }, "start")
            }), (v, i) => {
                const d = he,
                    n = Te,
                    p = ge,
                    c = ce;
                return S(), E("div", ja, [e("div", Ha, [t(d, {
                    color: y(k).white,
                    class: "w-full"
                }, null, 8, ["color"]), t(n, {
                    class: "!font-medium mt-[20px] !text-lightBrown"
                }, {
                    default: s(() => i[0] || (i[0] = [l("Closer to"), e("br", null, null, -1), l("Nature—Closer "), e("br", null, null, -1), l("to Yourself")])),
                    _: 1
                })]), e("div", Ba, [t(p, {
                    class: "!text-white px-[10px] mb-[30px]"
                }, {
                    default: s(() => i[1] || (i[1] = [l("Spend unforgettable and remarkable time"), e("br", null, null, -1), l("in the Californian desert with—Capsules.")])),
                    _: 1
                }), e("div", Ma, [t(c, {
                    src: "/images/hero-mobile.png",
                    ref_key: "image",
                    ref: f,
                    class: "object-cover object-center absolute w-full h-full scale-[1.4]"
                }, null, 512), e("video", {
                    preload: "metadata",
                    class: Be("pointer-events-none absolute object-cover hide-in-safari object-center h-full w-full opacity-0 mix-blend-hard-light  scale-[1.75]"),
                    muted: "",
                    playsinline: "",
                    autoplay: "",
                    loop: "",
                    ref_key: "smoke",
                    ref: m
                }, i[2] || (i[2] = [e("source", {
                    src: Me,
                    type: "video/mp4"
                }, null, -1)]), 512)])]), i[3] || (i[3] = e("div", {
                    class: "absolute z-[-1] bottom-0 left-0 bg-gradient-to-b from-black via-middleBrown to-b h-full w-full"
                }, null, -1))])
            }
        }
    }),
    Oa = {
        class: "px-[20px] pb-[80px]",
        id: "welcome"
    },
    La = {
        class: "flex gap-[2px] mt-[50px]"
    },
    Sa = {
        class: "relative overflow-hidden rounded-[70px] w-1/2 h-[123px]"
    },
    Ra = {
        class: "relative overflow-hidden rounded-[70px] w-1/2 h-[123px]"
    },
    Ea = oe({
        __name: "MobileWelcome",
        setup($) {
            const a = r(null),
                f = r(null);
            return te(async () => {
                var i, d;
                await K(), new fe((i = f.value) == null ? void 0 : i.$el, {
                    type: "lines"
                }).lines.forEach(n => {
                    var h;
                    let p = document.createElement("span");
                    p.classList.add("relative", "block", "@mt-[-20]");
                    let c = document.createElement("span");
                    c.classList.add("relative", "block", "text-darkBrown"), c.innerHTML = n.innerHTML;
                    let o = document.createElement("span");
                    o.classList.add("clip-text-welcome"), o.innerHTML = n.innerHTML, c.appendChild(o), p.appendChild(c), (h = n.parentNode) == null || h.replaceChild(p, n)
                }), await K();
                const v = (d = a.value) == null ? void 0 : d.querySelectorAll(".clip-text-welcome");
                v && u.to(v, {
                    clipPath: "inset(0% 0 0% 0)",
                    stagger: .38,
                    scrollTrigger: {
                        trigger: a.value,
                        start: "top 70%",
                        end: "bottom 50%",
                        scrub: !0
                    }
                })
            }), (m, v) => {
                const i = ce,
                    d = Te;
                return S(), E("div", Oa, [e("div", {
                    class: "pt-[80px] pb-[10px]",
                    ref_key: "textRoot",
                    ref: a
                }, [t(ct, {
                    class: "w-full !leading-[1.2] !font-normal",
                    ref_key: "text",
                    ref: f
                }, {
                    default: s(() => v[0] || (v[0] = [l("Welcome to a world of wild California desert with Capsules®, where you will discover exquisite nature observing it from capsule houses, nestled in the one of the most breathtaking destination on the United States.")])),
                    _: 1
                }, 512)], 512), e("div", La, [e("div", Sa, [t(i, {
                    src: "/images/welcome-1.png",
                    alt: "Welcome Image 1",
                    class: "object-cover object-center absolute w-full h-full"
                })]), e("div", Ra, [t(i, {
                    alt: "Welcome Image 2",
                    src: "/images/welcome-2.png",
                    class: "object-cover object-center absolute w-full h-full"
                })])]), t(d, {
                    class: "mt-[40px] !font-normal !text-lightBrown"
                }, {
                    default: s(() => v[1] || (v[1] = [l(" A place where you can be with yourself and your loved ones. A place where you can experie-nce unforgettable desert things.")])),
                    _: 1
                })])
            }
        }
    }),
    Aa = {},
    za = {
        class: "text-[55px] font-normal leading-[50px] tracking-[-0.2px] text-white"
    };

function Pa($, a) {
    return S(), E("div", za, [xe($.$slots, "default")])
}
const yt = _e(Aa, [
        ["render", Pa]
    ]),
    Wa = {
        class: "flex flex-col gap-[7px] mt-[30px]"
    },
    Ia = {
        class: "flex gap-[7px]"
    },
    qa = {
        class: "border-[2px] border-lightBrown px-[20px] py-[12px] rounded-full"
    },
    Da = {
        class: "border-[2px] border-white px-[20px] py-[12px] rounded-full"
    },
    Va = {
        class: "flex gap-[7px]"
    },
    Za = {
        class: "border-[2px] border-lightBrown px-[20px] py-[12px] rounded-full"
    },
    Fa = {
        class: "border-[2px] border-white px-[20px] py-[12px] rounded-full"
    },
    Na = {
        class: "flex gap-[7px]"
    },
    Ga = {
        class: "border-[2px] border-lightBrown px-[20px] py-[12px] rounded-full"
    },
    Ua = {
        class: "border-[2px] border-white px-[20px] py-[12px] rounded-full"
    },
    Ja = oe({
        __name: "MobileChoose",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null);
            let v;
            return te(async () => {
                var n, p, c;
                await K();
                const i = new fe((n = m.value) == null ? void 0 : n.$el, {
                    type: "lines,words"
                });
                i.lines.forEach(o => {
                    o.classList.add("mt-[-30px]")
                }), i.words.forEach(o => {
                    o.innerHTML = `<span class="relative block translate-y-[-100%] clip-text-choose">${o.innerHTML}</span>`, o.classList.add("relative", "block", "overflow-hidden")
                });
                const d = (p = a.value) == null ? void 0 : p.querySelectorAll(".clip-text-choose");
                d && u.to([...d], {
                    transform: "translate(0)",
                    scrollTrigger: {
                        trigger: a.value,
                        start: "top 65%",
                        end: "60% 40%",
                        scrub: !0
                    }
                }), v = u.timeline({
                    scrollTrigger: {
                        trigger: a.value,
                        start: "20% 90%",
                        end: "50% bottom",
                        scrub: !0
                    }
                }), v.addLabel("start"), v.to((c = f.value) == null ? void 0 : c.$el, {
                    opacity: 1
                }, "start")
            }), (i, d) => {
                const n = ge,
                    p = yt,
                    c = Te;
                return S(), E("div", {
                    id: "choose",
                    class: "relative flex flex-col px-[20px] pt-[80px] mb-[50px]",
                    ref_key: "rootText",
                    ref: a
                }, [t(n, {
                    class: "!font-semibold !text-white opacity-0",
                    ref_key: "headline",
                    ref: f
                }, {
                    default: s(() => d[0] || (d[0] = [l("Discover available Capsules®")])),
                    _: 1
                }, 512), t(p, {
                    class: "mt-[60px] !leading-[1.2]",
                    ref_key: "text",
                    ref: m
                }, {
                    default: s(() => d[1] || (d[1] = [l("Choose the one you like best")])),
                    _: 1
                }, 512), t(c, {
                    class: "!font-normal mt-[20px] !text-lightBrown"
                }, {
                    default: s(() => d[2] || (d[2] = [l("You can choose one of three premium capsule houses in our offer. Each of our capsules provides the highest quality and meets the standards adjusted to your needs. Choose the one you like.")])),
                    _: 1
                }), t(n, {
                    class: "!font-semibold !text-white mt-[50px]"
                }, {
                    default: s(() => d[3] || (d[3] = [l("All Capsules® houses—has built"), e("br", null, null, -1), l(" based on the same rules:")])),
                    _: 1
                }), e("div", Wa, [e("div", Ia, [e("div", qa, [t(c, {
                    class: "mb-[2px] !text-lightBrown !font-regular"
                }, {
                    default: s(() => d[4] || (d[4] = [l("Sustainable")])),
                    _: 1
                })]), e("div", Da, [t(c, {
                    class: "mb-[2px] !font-regular"
                }, {
                    default: s(() => d[5] || (d[5] = [l("Nature—Care")])),
                    _: 1
                })])]), e("div", Va, [e("div", Za, [t(c, {
                    class: "mb-[2px] !text-lightBrown !font-regular"
                }, {
                    default: s(() => d[6] || (d[6] = [l("Smart")])),
                    _: 1
                })]), e("div", Fa, [t(c, {
                    class: "mb-[2px] !font-regular"
                }, {
                    default: s(() => d[7] || (d[7] = [l("Privacy")])),
                    _: 1
                })])]), e("div", Na, [e("div", Ga, [t(c, {
                    class: "mb-[2px] !text-lightBrown !font-regular"
                }, {
                    default: s(() => d[8] || (d[8] = [l("Spacious")])),
                    _: 1
                })]), e("div", Ua, [t(c, {
                    class: "mb-[2px] !font-regular"
                }, {
                    default: s(() => d[9] || (d[9] = [l("Glassed-in")])),
                    _: 1
                })])])])], 512)
            }
        }
    }),
    Ya = {
        __name: "MobileLogoCarousel",
        setup($) {
            const a = r(["/image1.jpg", "/image2.jpg"]),
                f = r(null),
                m = r(null);
            return r(1), te(async () => {
                await K(), Ye.to(m.value, {
                    x: "-100%",
                    duration: 25,
                    ease: "linear",
                    repeat: -1
                }), Ye.timeline({
                    paused: !0,
                    scrollTrigger: {
                        trigger: f.value,
                        start: "-50% center",
                        end: () => `${window.innerHeight/1.5}px center`,
                        scrub: 1
                    }
                })
            }), (v, i) => {
                const d = he;
                return S(), E("div", {
                    ref_key: "container",
                    ref: f,
                    class: "w-screen overflow-hidden flex items-center pt-[60px] pb-[60px]"
                }, [e("div", {
                    ref_key: "scrollingWrapper",
                    ref: m,
                    class: "flex w-[200%]"
                }, [(S(!0), E(Pe, null, We(a.value, (n, p) => (S(), E("div", {
                    key: p,
                    class: "flex-shrink-0 flex"
                }, [t(d, {
                    class: "w-[364px] mr-[17px]",
                    color: y(k).white
                }, null, 8, ["color"]), t(d, {
                    class: "w-[364px] mr-[17px]",
                    color: y(k).white
                }, null, 8, ["color"])]))), 128)), (S(!0), E(Pe, null, We(a.value, (n, p) => (S(), E("div", {
                    key: "dup-" + p,
                    class: "flex-shrink-0 flex"
                }, [t(d, {
                    class: "w-[364px] mr-[17px]",
                    color: y(k).white
                }, null, 8, ["color"]), t(d, {
                    class: "w-[364px] mr-[17px]",
                    color: y(k).white
                }, null, 8, ["color"])]))), 128))], 512)], 512)
            }
        }
    },
    Ka = {
        class: "relative"
    },
    Xa = {
        class: "flex flex-col px-[10px] pb-[70px]"
    },
    Qa = {
        class: "relative overflow-hidden w-full aspect-[1.4/1] rounded-[30px]"
    },
    ei = {
        class: "px-[10px]"
    },
    ti = {
        class: "relative overflow-hidden w-full aspect-[1.4/1] rounded-[30px] mt-[70px]"
    },
    li = {
        class: "flex bg-darkBrown h-full w-full rounded-[30px] flex-col justify-between overflow-hidden"
    },
    oi = {
        class: "flex flex-col p-[20px] pt-0"
    },
    si = {
        class: "flex justify-between items-center mt-[20px]"
    },
    ni = {
        class: "w-full h-[160px] relative mt-[30px] rounded-[23px] overflow-hidden"
    },
    ri = {
        class: "flex justify-between py-[14px] relative select-none mt-[30px] pointer-events-none"
    },
    ai = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    ii = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    ui = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    di = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    ci = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    fi = {
        class: "p-[10px]"
    },
    pi = {
        class: "bg-black w-[calc(100%-40px)] h-[72px] rounded-[24px] flex justify-between items-center px-[24px] absolute bottom-[20px] left-[20px]"
    },
    vi = {
        class: "px-[10px]"
    },
    mi = {
        class: "relative overflow-hidden w-full aspect-[1.4/1] rounded-[30px] mt-[70px]"
    },
    wi = {
        class: "flex bg-darkBrown h-full w-full rounded-[30px] flex-col justify-between overflow-hidden"
    },
    xi = {
        class: "flex flex-col p-[20px] pt-0"
    },
    hi = {
        class: "flex justify-between items-center mt-[20px]"
    },
    bi = {
        class: "w-full h-[160px] relative mt-[30px] rounded-[23px] overflow-hidden"
    },
    gi = {
        class: "flex justify-between py-[14px] relative select-none mt-[30px]"
    },
    yi = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    _i = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    Ci = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    ki = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    $i = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    ji = {
        class: "p-[10px]"
    },
    Hi = {
        class: "bg-black w-[calc(100%-40px)] h-[72px] rounded-[24px] flex justify-between items-center px-[24px] absolute bottom-[20px] left-[20px]"
    },
    Bi = {
        class: "px-[10px]"
    },
    Mi = oe({
        __name: "MobileGallery",
        setup($) {
            r(null), r(!1);
            const a = r(null);
            r(!1);
            const f = r(null);
            r(!1), r(null);
            const m = r(null),
                v = r(null),
                i = async () => {
                    await K(), H.firstMobileGalleryDetails = !H.firstMobileGalleryDetails
                }, d = async () => {
                    await K(), H.secondMobileGalleryDetails = !H.secondMobileGalleryDetails
                }, n = async () => {
                    await K(), H.thirdMobileGalleryDetails = !H.thirdMobileGalleryDetails
                }, p = c => {
                    c == 0 ? i() : c == 1 ? d() : c == 2 && n(), setTimeout(() => {
                        H.reservationOpenButton = !0
                    }, 600)
                };
            return (c, o) => {
                const h = Ya,
                    j = ce,
                    C = Ge,
                    O = ct,
                    T = ge,
                    _ = Te,
                    b = je;
                return S(), E("div", Ka, [o[56] || (o[56] = e("div", {
                    class: "absolute z-[-1] left-0 top-[-60%] bg-gradient-to-b from-black via-middleBrown to-b h-[140%] w-full"
                }, null, -1)), t(h), e("div", Xa, [e("div", Qa, [t(j, {
                    src: "/images/cap1-mobile.png",
                    alt: "Classic Capsule Image",
                    class: "object-cover object-center absolute w-full h-full z-[-1]"
                }), e("button", {
                    onClick: i,
                    class: "w-[52px] h-[52px] hover:opacity-[0.9] right-[10px] bottom-[10px] absolute rounded-full bg-lightBrown flex justify-center items-center z-[0]"
                }, [t(C, {
                    color: y(k).darkBrown,
                    class: "w-[20px]"
                }, null, 8, ["color"])])]), e("div", ei, [t(O, {
                    class: "mt-[20px] mb-[15px] !text-white !font-normal"
                }, {
                    default: s(() => o[2] || (o[2] = [l("Classic Capsule®")])),
                    _: 1
                }), t(T, null, {
                    default: s(() => o[3] || (o[3] = [l("Classic Capsule® boasts refined aesthetics and plush interiors, creating an intimate retreat that echoes enduring elegance.")])),
                    _: 1
                })]), e("div", ti, [t(j, {
                    src: "/images/cap2-mobile.png",
                    alt: "Terrace Capsule Image",
                    class: "object-cover object-center absolute w-full h-full z-[-1]"
                }), e("button", {
                    onClick: d,
                    class: "w-[52px] h-[52px] hover:opacity-[0.9] right-[10px] bottom-[10px] absolute rounded-full bg-lightBrown flex justify-center items-center z-[0]"
                }, [t(C, {
                    color: y(k).darkBrown,
                    class: "w-[20px]"
                }, null, 8, ["color"])]), e("div", {
                    class: "fixed inset-0 w-full h-full bg-black p-[10px] z-[101] opacity-0 pointer-events-none",
                    ref_key: "secondGalleryDetails",
                    ref: a
                }, [e("div", li, [e("div", oi, [e("button", {
                    id: "closeReservation",
                    "aria-label": "Close Reservation",
                    onClick: d,
                    class: "w-[52px] h-[52px] bg-black absolute rounded-full flex z-[10] top-[25px] justify-center items-center overflow-hidden"
                }, [o[4] || (o[4] = e("div", {
                    class: "absolute h-full w-full scale-0 rounded-full will-change-transform bg-white"
                }, null, -1)), t(C, {
                    color: y(k).white,
                    class: "w-[20px] rotate-[45deg]"
                }, null, 8, ["color"])]), e("div", {
                    class: "overflow-y-scroll scrollbar-hide bg-darkBrown relative h-[100dvh] pb-[160px] pt-[70px]",
                    ref_key: "secondGalleryDetailsScroll",
                    ref: m
                }, [e("div", si, [t(_, null, {
                    default: s(() => o[5] || (o[5] = [l("Details")])),
                    _: 1
                }), t(T, {
                    class: "!text-white"
                }, {
                    default: s(() => o[6] || (o[6] = [l("(Terrace Capsule®)")])),
                    _: 1
                })]), e("div", ni, [t(j, {
                    alt: "Map Capsules Image",
                    src: "/images/cap2-mobile.png",
                    class: "object-cover object-center absolute w-full h-full"
                })]), t(T, {
                    class: "mt-[30px]"
                }, {
                    default: s(() => o[7] || (o[7] = [l("The most prestige capsule with the biggest terrace and jacuzzi with an amazing view of Los Angeles.")])),
                    _: 1
                }), e("div", ri, [t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[8] || (o[8] = [l("Square footage")])),
                    _: 1
                }), t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[9] || (o[9] = [l("30m2")])),
                    _: 1
                }), o[10] || (o[10] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", ai, [t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[11] || (o[11] = [l("Bed")])),
                    _: 1
                }), t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[12] || (o[12] = [l("King Size")])),
                    _: 1
                }), o[13] || (o[13] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", ii, [t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[14] || (o[14] = [l("Shifting Window")])),
                    _: 1
                }), t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[15] || (o[15] = [l("Available")])),
                    _: 1
                }), o[16] || (o[16] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", ui, [t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[17] || (o[17] = [l("Air Condition")])),
                    _: 1
                }), t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[18] || (o[18] = [l("Available")])),
                    _: 1
                }), o[19] || (o[19] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", di, [t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[20] || (o[20] = [l("Jacuzzi")])),
                    _: 1
                }), t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[21] || (o[21] = [l("Available")])),
                    _: 1
                }), o[22] || (o[22] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", ci, [t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[23] || (o[23] = [l("Terrace")])),
                    _: 1
                }), t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[24] || (o[24] = [l("Available")])),
                    _: 1
                })]), e("a", {
                    class: "cursor-pointer",
                    onClick: o[0] || (o[0] = M => p(1))
                }, [t(T, {
                    class: "!font-normal text-left mt-[18px] underline"
                }, {
                    default: s(() => [t(b, {
                        color: y(k).lightBrown
                    }, {
                        default: s(() => o[25] || (o[25] = [l("Ready to reserve?")])),
                        _: 1
                    }, 8, ["color"])]),
                    _: 1
                })])], 512)]), e("div", fi, [e("div", pi, [e("div", null, [t(T, null, {
                    default: s(() => o[26] || (o[26] = [l("Cost")])),
                    _: 1
                })]), e("div", null, [t(T, null, {
                    default: s(() => o[27] || (o[27] = [e("span", {
                        class: "text-white"
                    }, "2500.00 USD", -1), l(" / Night")])),
                    _: 1
                })])])])])], 512)]), e("div", vi, [t(O, {
                    class: "mt-[20px] mb-[15px] !text-white !font-normal"
                }, {
                    default: s(() => o[28] || (o[28] = [l("Terrace Capsule®")])),
                    _: 1
                }), t(T, null, {
                    default: s(() => o[29] || (o[29] = [l("The most prestige capsule with the biggest terrace and jacuzzi with an amazing view of Los Angeles.")])),
                    _: 1
                })]), e("div", mi, [t(j, {
                    src: "/images/cap3-mobile.png",
                    alt: "Desert Capsule Image",
                    class: "object-cover object-center absolute w-full h-full z-[-1]"
                }), e("button", {
                    onClick: n,
                    class: "w-[52px] h-[52px] hover:opacity-[0.9] right-[10px] bottom-[10px] absolute rounded-full bg-lightBrown flex justify-center items-center z-[0]"
                }, [t(C, {
                    color: y(k).darkBrown,
                    class: "w-[20px]"
                }, null, 8, ["color"])]), e("div", {
                    class: "fixed inset-0 w-full h-full bg-black p-[10px] z-[101] opacity-0 pointer-events-none",
                    ref_key: "thirdGalleryDetails",
                    ref: f
                }, [e("div", wi, [e("div", xi, [e("button", {
                    id: "closeReservation",
                    "aria-label": "Close Reservation",
                    onClick: n,
                    class: "w-[52px] h-[52px] bg-black absolute rounded-full flex z-[10] top-[25px] justify-center items-center overflow-hidden"
                }, [o[30] || (o[30] = e("div", {
                    class: "absolute h-full w-full scale-0 rounded-full will-change-transform bg-white"
                }, null, -1)), t(C, {
                    color: y(k).white,
                    class: "w-[20px] rotate-[45deg]"
                }, null, 8, ["color"])]), e("div", {
                    class: "overflow-y-scroll bg-darkBrown scrollbar-hide relative h-[100dvh] pb-[160px] pt-[70px]",
                    ref_key: "thirdGalleryDetailsScroll",
                    ref: v
                }, [e("div", hi, [t(_, null, {
                    default: s(() => o[31] || (o[31] = [l("Details")])),
                    _: 1
                }), t(T, {
                    class: "!text-white"
                }, {
                    default: s(() => o[32] || (o[32] = [l("(Desert Capsule®)")])),
                    _: 1
                })]), e("div", bi, [t(j, {
                    alt: "Map Capsules Image",
                    src: "/images/cap3-mobile.png",
                    class: "object-cover object-center absolute w-full h-full"
                })]), t(T, {
                    class: "mt-[30px]"
                }, {
                    default: s(() => o[33] || (o[33] = [l("With its striking architecture and upscale amenities, Desert Capsule® offers an exclusive retreat in the heart of the desert.")])),
                    _: 1
                }), e("div", gi, [t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[34] || (o[34] = [l("Square footage")])),
                    _: 1
                }), t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[35] || (o[35] = [l("28m2")])),
                    _: 1
                }), o[36] || (o[36] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", yi, [t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[37] || (o[37] = [l("Bed")])),
                    _: 1
                }), t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[38] || (o[38] = [l("King Size")])),
                    _: 1
                }), o[39] || (o[39] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", _i, [t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[40] || (o[40] = [l("Shifting Window")])),
                    _: 1
                }), t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[41] || (o[41] = [l("Available")])),
                    _: 1
                }), o[42] || (o[42] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", Ci, [t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[43] || (o[43] = [l("Air Condition")])),
                    _: 1
                }), t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[44] || (o[44] = [l("Available")])),
                    _: 1
                }), o[45] || (o[45] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", ki, [t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[46] || (o[46] = [l("Jacuzzi")])),
                    _: 1
                }), t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[47] || (o[47] = [l("Available")])),
                    _: 1
                }), o[48] || (o[48] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", $i, [t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[49] || (o[49] = [l("Terrace")])),
                    _: 1
                }), t(T, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => o[50] || (o[50] = [l("None")])),
                    _: 1
                })]), e("a", {
                    class: "cursor-pointer",
                    onClick: o[1] || (o[1] = M => p(2))
                }, [t(T, {
                    class: "!font-normal text-left mt-[18px] underline"
                }, {
                    default: s(() => [t(b, {
                        color: y(k).lightBrown
                    }, {
                        default: s(() => o[51] || (o[51] = [l("Ready to reserve?")])),
                        _: 1
                    }, 8, ["color"])]),
                    _: 1
                })])], 512)]), e("div", ji, [e("div", Hi, [e("div", null, [t(T, null, {
                    default: s(() => o[52] || (o[52] = [l("Cost")])),
                    _: 1
                })]), e("div", null, [t(T, null, {
                    default: s(() => o[53] || (o[53] = [e("span", {
                        class: "text-white"
                    }, "3000.00 USD", -1), l(" / Night")])),
                    _: 1
                })])])])])], 512)]), e("div", Bi, [t(O, {
                    class: "mt-[20px] mb-[15px] !text-white !font-normal"
                }, {
                    default: s(() => o[54] || (o[54] = [l("Desert Capsule®")])),
                    _: 1
                }), t(T, null, {
                    default: s(() => o[55] || (o[55] = [l("With its striking architecture and upscale amenities, Desert Capsule® offers an exclusive retreat in the heart of the desert.")])),
                    _: 1
                })])])])
            }
        }
    }),
    Ti = {},
    Oi = {
        class: "text-[20px] font-semibold leading-[22px] tracking-[-0.2px] text-white"
    };

function Li($, a) {
    return S(), E("div", Oi, [xe($.$slots, "default")])
}
const pt = _e(Ti, [
        ["render", Li]
    ]),
    Si = {
        class: "h-full w-full rounded-[26px] overflow-hidden relative"
    },
    Ri = {
        class: "m-[5px] absolute top-0 w-full"
    },
    Ei = {
        class: "opacity-0 w-full"
    },
    Ai = {
        class: "flex w-full mt-[30px] gap-[6px]"
    },
    zi = {
        class: "flex-1 h-[78px] relative w-full rounded-[15px] overflow-hidden"
    },
    Pi = {
        class: "flex-1 h-[78px] relative w-full rounded-[15px] overflow-hidden @ml-[6]"
    },
    Wi = oe({
        __name: "MobileMap",
        setup($) {
            const a = {
                    lat: 34.6713109,
                    lng: -118.9796942
                },
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(null),
                d = r(null),
                n = r(null),
                p = r(null),
                {
                    $mouseFollower: c
                } = dt(),
                {
                    isMobileOrTablet: o
                } = tt(),
                {
                    create: h
                } = ht(),
                j = Lt();
            let C, O = !1;
            const T = r(!1);
            te(async () => {
                var g;
                u.set(i.value, {
                    clipPath: "circle(0%)"
                }), v.value && !o && (v.value.addEventListener("mouseenter", M), v.value.addEventListener("mouseleave", I)), C = u.timeline({
                    paused: !0,
                    onStart: () => {
                        var x;
                        (x = H.lenis) == null || x.stop()
                    },
                    onComplete: () => {
                        u.set(i.value, {
                            clearProps: "scale",
                            width: "100vw",
                            height: "100vh"
                        })
                    },
                    onReverseComplete: () => {
                        var x;
                        T.value = !1, (x = H.lenis) == null || x.start(), O && (H.reservationOpenButton = !0, O = !1)
                    }
                }), C.addLabel("start"), C.to(i.value, {
                    backgroundColor: k.black,
                    pointerEvents: "all"
                }, "start"), C.to(i.value, {
                    clipPath: "circle(100%)",
                    duration: 1,
                    ease: "sine.inOut"
                }, "start"), C.to(d.value, {
                    scale: 1,
                    transformOrigin: "top left"
                }, "start+=0.2"), C.to((g = d.value) == null ? void 0 : g.children[0], {
                    opacity: 1,
                    ease: "sine.inOut"
                }, "start+=0.7")
            }), ae(() => H.menuOpenButton, g => {
                C && (g || C.reverse())
            });
            const _ = async () => {
                C && (T.value ? (T.value = !1, H.menuOpenButton = !1, C.reverse()) : (T.value = !0, H.menuOpenButton = !0, C.play()))
            }, b = () => {
                O = !0, _()
            }, M = () => {
                if (!v.value) return;
                const g = h(bt, "Show the Map");
                c.setText(g)
            }, I = async () => {
                v.value && c.removeText()
            };
            return (g, x) => {
                const q = ge,
                    A = je,
                    P = pt,
                    W = ce,
                    ne = he;
                return S(), E("section", {
                    id: "map",
                    ref_key: "root",
                    ref: m,
                    class: "h-[50vh] mb-[10vh] w-full relative flex flex-col justify-center items-center px-[20px]"
                }, [t(q, {
                    class: "text-white tracking-[-0.2px] mb-[20px]",
                    ref_key: "headline",
                    ref: p
                }, {
                    default: s(() => x[0] || (x[0] = [l("Closer than you think")])),
                    _: 1
                }, 512), t(P, {
                    ref_key: "text",
                    ref: f,
                    class: "text-center text-[35px] leading-[40px] !font-normal"
                }, {
                    default: s(() => [x[2] || (x[2] = l("Our Capsules®")), x[3] || (x[3] = e("br", null, null, -1)), x[4] || (x[4] = l(" are located near Los Angeles with easy ")), e("span", {
                        class: "text-lightBrown underline decoration-from-font decoration-solid underline-offset-[10px] cursor-pointer",
                        onClick: _,
                        ref_key: "button",
                        ref: v
                    }, [t(A, null, {
                        default: s(() => x[1] || (x[1] = [l(" access by road. ")])),
                        _: 1
                    })], 512)]),
                    _: 1
                }, 512), e("div", {
                    class: "fixed w-screen h-screen inset-0 @p-[10] z-[11] pointer-events-none",
                    ref_key: "mapContainer",
                    ref: i
                }, [e("div", Si, [t(y(Ot), {
                    "api-key": y(j).public.googleMapsApiKey,
                    class: "w-full h-full rounded-[26px] overflow-hidden 0",
                    center: a,
                    ref_key: "googleMap",
                    ref: n,
                    styles: y(Wt),
                    zoom: 9,
                    "disable-default-ui": !0
                }, {
                    default: s(() => [t(y(St), {
                        options: {
                            position: a,
                            anchorPoint: "TOP_CENTER"
                        }
                    }, {
                        default: s(() => [t(W, {
                            class: "w-[53px]",
                            src: "/images/pin.png",
                            style: {
                                "margin-top": "8px"
                            },
                            alt: "Map Pin"
                        })]),
                        _: 1
                    }, 8, ["options"])]),
                    _: 1
                }, 8, ["api-key", "styles"]), e("div", Ri, [e("div", {
                    class: "flex flex-col justify-between items-start absolute left-0 top-0 rounded-[26px] w-[calc(100%-10px)] bg-darkBrown py-[30px] px-[30px] scale-[1] origin-top-left",
                    ref_key: "square",
                    ref: d
                }, [e("div", Ei, [e("div", null, [e("div", null, [t(ne, {
                    color: y(k).white,
                    class: "w-[120px]"
                }, null, 8, ["color"])]), t(q, {
                    class: "!text-lightBrown !font-normal text-left @mt-[20]"
                }, {
                    default: s(() => x[5] || (x[5] = [l("Maricopa, CA 93252 United States")])),
                    _: 1
                }), e("a", {
                    onClick: b,
                    class: "cursor-pointer"
                }, [t(q, {
                    class: "!font-normal !text-white text-left @mt-[20] underline hover:opacity-[0.7] transition-opacity"
                }, {
                    default: s(() => [t(A, {
                        color: y(k).white
                    }, {
                        default: s(() => x[6] || (x[6] = [l("Ready to reserve?")])),
                        _: 1
                    }, 8, ["color"])]),
                    _: 1
                })])]), e("div", Ai, [e("div", zi, [t(W, {
                    alt: "Map Capsules Image",
                    src: "/images/cap3.png",
                    class: "object-cover object-center absolute w-full h-full"
                })]), e("div", Pi, [t(W, {
                    alt: "Map Capsules Image 2",
                    src: "/images/activities-2.png",
                    class: "object-cover object-center absolute w-full h-full"
                })])])])], 512)])])], 512)], 512)
            }
        }
    }),
    Ii = {
        __name: "MobileWhyCapsulesCarousel",
        setup($) {
            const a = r(["/image1.jpg", "/image2.jpg"]),
                f = r(null),
                m = r(null);
            return r(1), te(async () => {
                await K(), Ye.to(m.value, {
                    x: "-100%",
                    duration: 25,
                    ease: "linear",
                    repeat: -1
                }), Ye.timeline({
                    paused: !0,
                    scrollTrigger: {
                        trigger: f.value,
                        start: "-50% center",
                        end: () => `${window.innerHeight/1.5}px center`,
                        scrub: 1
                    }
                })
            }), (v, i) => {
                const d = yt;
                return S(), E("div", {
                    ref_key: "container",
                    ref: f,
                    class: "w-screen overflow-hidden flex items-center pt-[30px] pb-[50px]"
                }, [e("div", {
                    ref_key: "scrollingWrapper",
                    ref: m,
                    class: "flex w-[200%]"
                }, [(S(!0), E(Pe, null, We(a.value, (n, p) => (S(), E("div", {
                    key: p,
                    class: "w-full flex mr-[100px]"
                }, [t(d, {
                    class: "whitespace-nowrap"
                }, {
                    default: s(() => i[0] || (i[0] = [l("Why Capsules®?"), e("span", {
                        class: "inline-block h-[30px]"
                    }, "*", -1)])),
                    _: 1
                }), t(d, {
                    class: "whitespace-nowrap"
                }, {
                    default: s(() => i[1] || (i[1] = [l("Why Capsules®?"), e("span", {
                        class: "inline-block h-[30px]"
                    }, "*", -1)])),
                    _: 1
                })]))), 128)), (S(!0), E(Pe, null, We(a.value, (n, p) => (S(), E("div", {
                    key: "dup-" + p,
                    class: "w-full flex mr-[100px]"
                }, [t(d, {
                    class: "whitespace-nowrap"
                }, {
                    default: s(() => i[2] || (i[2] = [l("Why Capsules®?"), e("span", {
                        class: "inline-block h-[30px]"
                    }, "*", -1)])),
                    _: 1
                }), t(d, {
                    class: "whitespace-nowrap"
                }, {
                    default: s(() => i[3] || (i[3] = [l("Why Capsules®?"), e("span", {
                        class: "inline-block h-[30px]"
                    }, "*", -1)])),
                    _: 1
                })]))), 128))], 512)], 512)
            }
        }
    },
    qi = {},
    Di = {
        class: "relative flex flex-col pb-[80px]",
        id: "capsules"
    },
    Vi = {
        class: "flex flex-col px-[10px] relative mb-[10px] pb-[10px]"
    },
    Zi = {
        class: "flex flex-col bg-darkBrown rounded-[30px] px-[10px] pt-[30px] h-[580px]"
    },
    Fi = {
        class: "flex items-end mb-[30px]"
    },
    Ni = {
        class: "flex gap-[1px] h-[35px]"
    },
    Gi = {
        class: "border-[2px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full"
    },
    Ui = {
        class: "border-[2px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full opacity-[0.2]"
    },
    Ji = {
        class: "h-[256px] bottom-0 left-[10px] w-[calc(100%-20px)] absolute rounded-[30px] overflow-hidden"
    },
    Yi = {
        class: "flex flex-col px-[10px] relative mb-[10px] pb-[10px]"
    },
    Ki = {
        class: "flex flex-col bg-darkBrown rounded-[30px] px-[10px] pt-[30px] h-[580px]"
    },
    Xi = {
        class: "flex items-end mb-[30px]"
    },
    Qi = {
        class: "flex gap-[1px] h-[35px]"
    },
    e1 = {
        class: "border-[2px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full"
    },
    t1 = {
        class: "border-[2px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full opacity-[0.2]"
    },
    l1 = {
        class: "h-[256px] bottom-0 left-[10px] w-[calc(100%-20px)] absolute rounded-[30px] overflow-hidden"
    },
    o1 = {
        class: "flex flex-col px-[10px] relative mb-[10px] pb-[10px]"
    },
    s1 = {
        class: "flex flex-col bg-darkBrown rounded-[30px] px-[10px] pt-[30px] h-[580px]"
    },
    n1 = {
        class: "flex items-end mb-[30px]"
    },
    r1 = {
        class: "flex gap-[1px] h-[35px]"
    },
    a1 = {
        class: "border-[2px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full"
    },
    i1 = {
        class: "border-[2px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full opacity-[0.2]"
    },
    u1 = {
        class: "h-[256px] bottom-0 left-[10px] w-[calc(100%-20px)] absolute rounded-[30px] overflow-hidden"
    };

function d1($, a) {
    const f = ge,
        m = Ii,
        v = Te,
        i = ce;
    return S(), E("div", Di, [t(f, {
        class: "px-[20px] !text-white"
    }, {
        default: s(() => a[0] || (a[0] = [l("Want to learn more about"), e("br", null, null, -1), l("the benefits of—Capsules®?")])),
        _: 1
    }), t(m), e("div", Vi, [e("div", Zi, [t(v, {
        class: "!text-lightBrown !font-medium mb-[140px] h-[80px]"
    }, {
        default: s(() => a[1] || (a[1] = [l("Enjoy the view"), e("br", null, null, -1), l("through—the wide"), e("br", null, null, -1), l("panoramic glass window")])),
        _: 1
    }), e("div", Fi, [e("div", Ni, [e("div", Gi, [t(f, {
        class: "!font-semibold !text-white"
    }, {
        default: s(() => a[2] || (a[2] = [l("01")])),
        _: 1
    })]), e("div", Ui, [t(f, {
        class: "!font-semibold !text-white"
    }, {
        default: s(() => a[3] || (a[3] = [l("03")])),
        _: 1
    })])]), a[4] || (a[4] = e("p", {
        class: "text-[14px] font-semibold text-white leading-[18px] ml-[20px]"
    }, [l(" Spend unforgettable and"), e("br"), l(" remarkable time in the Californian"), e("br"), l(" desert with—Capsules. ")], -1))]), e("div", Ji, [t(i, {
        src: "/images/cap3-square.jpg",
        ref: "imageEl",
        class: "object-cover object-center absolute w-full scale-[1.4] h-full"
    }, null, 512)])])]), e("div", Yi, [e("div", Ki, [t(v, {
        class: "!text-lightBrown !font-medium mb-[140px] h-[80px]"
    }, {
        default: s(() => a[5] || (a[5] = [l("Sound of silence"), e("br", null, null, -1), l("—out of the city"), e("br", null, null, -1), l("rush with completely"), e("br", null, null, -1), l(" privacy")])),
        _: 1
    }), e("div", Xi, [e("div", Qi, [e("div", e1, [t(f, {
        class: "!font-semibold !text-white"
    }, {
        default: s(() => a[6] || (a[6] = [l("02")])),
        _: 1
    })]), e("div", t1, [t(f, {
        class: "!font-semibold !text-white"
    }, {
        default: s(() => a[7] || (a[7] = [l("03")])),
        _: 1
    })])]), a[8] || (a[8] = e("p", {
        class: "text-[14px] font-semibold text-white leading-[18px] ml-[20px]"
    }, " Here, every whisper of nature recharges your soul—your sanctuary of solitude awaits. ", -1))]), e("div", l1, [t(i, {
        src: "/images/cap2-square.jpg",
        ref: "imageEl",
        class: "object-cover object-center absolute w-full scale-[1.4] h-full"
    }, null, 512)])])]), e("div", o1, [e("div", s1, [t(v, {
        class: "!text-lightBrown !font-medium mb-[140px] h-[80px]"
    }, {
        default: s(() => a[9] || (a[9] = [l("Relax yourself"), e("br", null, null, -1), l(" in—Wooden Jacuzzi")])),
        _: 1
    }), e("div", n1, [e("div", r1, [e("div", a1, [t(f, {
        class: "!font-semibold !text-white"
    }, {
        default: s(() => a[10] || (a[10] = [l("03")])),
        _: 1
    })]), e("div", i1, [t(f, {
        class: "!font-semibold !text-white"
    }, {
        default: s(() => a[11] || (a[11] = [l("03")])),
        _: 1
    })])]), a[12] || (a[12] = e("p", {
        class: "text-[14px] font-semibold text-white leading-[18px] ml-[20px]"
    }, " Let the natural textures and gentle bubbles transport you to a realm of pure, handcrafted bliss. ", -1))]), e("div", u1, [t(i, {
        src: "/images/cap1-square.jpg",
        ref: "imageEl",
        class: "object-cover object-center absolute w-full scale-[1.4] h-full"
    }, null, 512)])])])])
}
const c1 = _e(qi, [
        ["render", d1]
    ]),
    f1 = {
        id: "discover"
    },
    p1 = {
        class: "flex flex-col relative mb-[34px] mt-[30px]"
    },
    v1 = {
        class: "flex justify-between"
    },
    m1 = {
        class: "w-full mt-[22px]"
    },
    w1 = {
        class: "flex flex-col relative mb-[34px]"
    },
    x1 = {
        class: "flex justify-between"
    },
    h1 = {
        class: "w-full mt-[22px]"
    },
    b1 = {
        class: "flex flex-col relative mb-[34px]"
    },
    g1 = {
        class: "flex justify-between"
    },
    y1 = {
        class: "w-full mt-[22px]"
    },
    _1 = {
        class: "inset-0 flex w-screen whitespace-nowrap overflow-x-auto scrollbar-hide px-[10px] gap-[10px]"
    },
    C1 = {
        class: "flex-none w-[80vw]"
    },
    k1 = {
        class: "flex relative flex-col w-full h-[256px] rounded-[30px] overflow-hidden"
    },
    $1 = {
        class: "border-[2px] border-white px-[11px] py-[10px] h-[34px] rounded-full flex justify-center items-center absolute right-[20px] top-[20px]"
    },
    j1 = {
        class: "flex gap-[1px] h-[35px] absolute left-[20px] bottom-[20px]"
    },
    H1 = {
        class: "border-[2px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full"
    },
    B1 = {
        class: "border-[2px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full opacity-[0.5]"
    },
    M1 = {
        class: "flex flex-col px-[10px] mt-[30px] mb-[25px] text-wrap"
    },
    T1 = {
        class: "flex-none w-[80vw]"
    },
    O1 = {
        class: "flex relative flex-col w-full h-[256px] rounded-[30px] overflow-hidden"
    },
    L1 = {
        class: "border-[2px] border-white px-[11px] py-[10px] h-[34px] rounded-full flex justify-center items-center absolute right-[20px] top-[20px]"
    },
    S1 = {
        class: "flex gap-[1px] h-[35px] absolute left-[20px] bottom-[20px]"
    },
    R1 = {
        class: "border-[2px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full"
    },
    E1 = {
        class: "border-[2px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full opacity-[0.5]"
    },
    A1 = {
        class: "flex flex-col px-[10px] mt-[30px] mb-[25px] text-wrap"
    },
    z1 = {
        class: "flex-none w-[80vw]"
    },
    P1 = {
        class: "flex relative flex-col w-full h-[256px] rounded-[30px] overflow-hidden"
    },
    W1 = {
        class: "border-[2px] border-white px-[11px] py-[10px] h-[34px] rounded-full flex justify-center items-center absolute right-[20px] top-[20px]"
    },
    I1 = {
        class: "flex gap-[1px] h-[35px] absolute left-[20px] bottom-[20px]"
    },
    q1 = {
        class: "border-[2px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full"
    },
    D1 = {
        class: "border-[2px] border-lightBrown px-[11px] py-[4px] flex justify-center items-center rounded-full opacity-[0.5]"
    },
    V1 = {
        class: "flex flex-col px-[10px] mt-[30px] mb-[25px] text-wrap"
    },
    Z1 = oe({
        __name: "MobileActivities",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(null),
                d = r(null);
            let n, p;
            return te(async () => {
                var h, j, C;
                await K();
                const c = new fe((h = m.value) == null ? void 0 : h.$el, {
                    type: "lines,words"
                });
                c.lines.forEach(O => {
                    O.classList.add("mt-[-30px]")
                }), c.words.forEach(O => {
                    O.innerHTML = `<span class="relative block translate-y-[-100%] clip-text-choose">${O.innerHTML}</span>`, O.classList.add("relative", "block", "overflow-hidden")
                });
                const o = (j = a.value) == null ? void 0 : j.querySelectorAll(".clip-text-choose");
                o && u.to([...o], {
                    transform: "translate(0)",
                    scrollTrigger: {
                        trigger: a.value,
                        start: "top 65%",
                        end: "60% 40%",
                        scrub: !0
                    }
                }), n = u.timeline({
                    scrollTrigger: {
                        trigger: a.value,
                        start: "20% 90%",
                        end: "50% bottom",
                        scrub: !0
                    }
                }), n.addLabel("start"), n.to((C = f.value) == null ? void 0 : C.$el, {
                    opacity: 1
                }, "start"), p = u.timeline({
                    scrollTrigger: {
                        trigger: a.value,
                        start: "70% 80%",
                        end: "50% 80%",
                        toggleActions: "play none none reverse"
                    }
                }), p.addLabel("start"), p.to(v.value, {
                    scaleX: 1,
                    duration: .6,
                    ease: "power1.inOut",
                    transformOrigin: "left"
                }, "start"), p.to(i.value, {
                    scaleX: 1,
                    duration: .6,
                    ease: "power1.inOut",
                    transformOrigin: "left"
                }, "start"), p.to(d.value, {
                    scaleX: 1,
                    duration: .6,
                    ease: "power1.inOut",
                    transformOrigin: "left"
                }, "start")
            }), (c, o) => {
                const h = ge,
                    j = yt,
                    C = Te,
                    O = pt,
                    T = ce;
                return S(), E("div", f1, [e("div", {
                    class: "relative flex flex-col px-[20px] pt-[80px] mb-[50px]",
                    ref_key: "rootText",
                    ref: a
                }, [o[13] || (o[13] = e("div", {
                    class: "absolute z-[-1] left-0 top-0 bg-gradient-to-b from-black via-middleBrown to-b h-[140%] w-full"
                }, null, -1)), t(h, {
                    class: "!font-semibold !text-white opacity-0",
                    ref_key: "headline",
                    ref: f
                }, {
                    default: s(() => o[0] || (o[0] = [l("Ready for an adventure?")])),
                    _: 1
                }, 512), t(j, {
                    class: "mt-[60px] !leading-[1.2]",
                    ref_key: "text",
                    ref: m
                }, {
                    default: s(() => o[1] || (o[1] = [l("Discover "), e("br", null, null, -1), l(" the desert activities")])),
                    _: 1
                }, 512), t(C, {
                    class: "!font-normal mt-[20px] !text-lightBrown"
                }, {
                    default: s(() => o[2] || (o[2] = [l("We want to make sure your stay is exciting and enjoyable. That’s why we offer a variety of activities with different levels of engagement. Whether you seek thrills or tranquility, there’s something for everyone to make your desert stay truly memorable.")])),
                    _: 1
                }), t(h, {
                    class: "!font-semibold !text-white mt-[50px]"
                }, {
                    default: s(() => o[3] || (o[3] = [l("Offered Capsules® activities"), e("br", null, null, -1), l("have different levels of difficulty:")])),
                    _: 1
                }), e("div", p1, [e("div", v1, [t(O, {
                    class: "!font-normal !text-lightBrown"
                }, {
                    default: s(() => o[4] || (o[4] = [l("Easy")])),
                    _: 1
                }), t(h, null, {
                    default: s(() => o[5] || (o[5] = [l("3-5h duration")])),
                    _: 1
                })]), e("div", m1, [o[6] || (o[6] = e("div", {
                    class: "absolute w-full h-[2px] bg-white opacity-[0.5]"
                }, null, -1)), e("div", {
                    class: "absolute w-[40%] scale-x-[0] h-[2px] bg-white",
                    ref_key: "easy",
                    ref: v
                }, null, 512)])]), e("div", w1, [e("div", x1, [t(O, {
                    class: "!font-normal !text-lightBrown"
                }, {
                    default: s(() => o[7] || (o[7] = [l("Medium")])),
                    _: 1
                }), t(h, null, {
                    default: s(() => o[8] || (o[8] = [l("8-12h duration")])),
                    _: 1
                })]), e("div", h1, [o[9] || (o[9] = e("div", {
                    class: "absolute w-full h-[2px] bg-white opacity-[0.5]"
                }, null, -1)), e("div", {
                    class: "absolute w-[80%] scale-x-[0] h-[2px] bg-white",
                    ref_key: "medium",
                    ref: i
                }, null, 512)])]), e("div", b1, [e("div", g1, [t(O, {
                    class: "!font-normal !text-lightBrown"
                }, {
                    default: s(() => o[10] || (o[10] = [l("Hard")])),
                    _: 1
                }), t(h, null, {
                    default: s(() => o[11] || (o[11] = [l("24h duration")])),
                    _: 1
                })]), e("div", y1, [o[12] || (o[12] = e("div", {
                    class: "absolute w-full h-[2px] bg-white opacity-[0.5]"
                }, null, -1)), e("div", {
                    class: "absolute w-[60%] scale-x-[0] h-[2px] bg-white",
                    ref_key: "hard",
                    ref: d
                }, null, 512)])])], 512), e("div", _1, [e("div", C1, [e("div", k1, [t(T, {
                    src: "/images/activities-1.png",
                    class: "object-cover object-center absolute w-full h-full"
                }), e("div", $1, [t(h, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => o[14] || (o[14] = [l("Easy")])),
                    _: 1
                })]), e("div", j1, [e("div", H1, [t(h, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => o[15] || (o[15] = [l("01")])),
                    _: 1
                })]), e("div", B1, [t(h, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => o[16] || (o[16] = [l("03")])),
                    _: 1
                })])])]), e("div", M1, [t(C, {
                    class: "!font-medium"
                }, {
                    default: s(() => o[17] || (o[17] = [l(" Buggy tours"), e("br", null, null, -1), l("in the desert ")])),
                    _: 1
                }), t(h, {
                    class: "!font-semibold mt-[18px]"
                }, {
                    default: s(() => o[18] || (o[18] = [l("Explore the terrain on a guided buggy tour that takes you through the desert’s vast and open landscapes.")])),
                    _: 1
                })])]), e("div", T1, [e("div", O1, [t(T, {
                    src: "/images/activities-2.png",
                    class: "object-cover object-center absolute w-full h-full"
                }), e("div", L1, [t(h, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => o[19] || (o[19] = [l("Medium")])),
                    _: 1
                })]), e("div", S1, [e("div", R1, [t(h, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => o[20] || (o[20] = [l("02")])),
                    _: 1
                })]), e("div", E1, [t(h, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => o[21] || (o[21] = [l("03")])),
                    _: 1
                })])])]), e("div", A1, [t(C, {
                    class: "!font-medium"
                }, {
                    default: s(() => o[22] || (o[22] = [l(" Breathtaking"), e("br", null, null, -1), l("desert hikes ")])),
                    _: 1
                }), t(h, {
                    class: "!font-semibold mt-[18px]"
                }, {
                    default: s(() => o[23] || (o[23] = [l("Set out on a hike that offers clear trails, stunning views, and a closer look at the unique desert environment.")])),
                    _: 1
                })])]), e("div", z1, [e("div", P1, [t(T, {
                    src: "/images/activities-3.png",
                    class: "object-cover object-center absolute w-full h-full"
                }), e("div", W1, [t(h, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => o[24] || (o[24] = [l("Hard")])),
                    _: 1
                })]), e("div", I1, [e("div", q1, [t(h, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => o[25] || (o[25] = [l("03")])),
                    _: 1
                })]), e("div", D1, [t(h, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => o[26] || (o[26] = [l("03")])),
                    _: 1
                })])])]), e("div", V1, [t(C, {
                    class: "!font-medium"
                }, {
                    default: s(() => o[27] || (o[27] = [l(" Exciting group"), e("br", null, null, -1), l("rock climbing ")])),
                    _: 1
                }), t(h, {
                    class: "!font-semibold mt-[18px]"
                }, {
                    default: s(() => o[28] || (o[28] = [l("Climbing session on natural sandstone formations, designed to be both challenging and safe while fostering teamwork.")])),
                    _: 1
                })])])])])
            }
        }
    }),
    F1 = {
        class: "w-full h-full relative @px-[40] @py-[60]"
    },
    N1 = {
        class: "relative"
    },
    G1 = {
        class: "w-[50px] h-[50px] rounded-full relative overflow-hidden"
    },
    U1 = {
        class: "flex flex-col pl-[20px]"
    },
    J1 = {
        class: "w-[50px] h-[50px] rounded-full scale-0 relative overflow-hidden"
    },
    Y1 = {
        class: "flex flex-col pl-[20px] opacity-0"
    },
    K1 = {
        class: "w-[50px] h-[50px] rounded-full scale-0 relative overflow-hidden"
    },
    X1 = {
        class: "flex flex-col pl-[20px] opacity-0"
    },
    Q1 = {
        class: "flex justify-between mt-[100px] items-center"
    },
    eu = {
        class: "flex @gap-[5]"
    },
    tu = {
        class: "w-full @h-[2] ml-[40px] relative"
    },
    lu = oe({
        __name: "MobileReviews",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(null),
                d = r(null),
                n = r(null),
                p = r(null),
                c = r(null),
                o = r(null);
            let h, j, C;
            const O = r(0);
            we(c);
            const T = () => {
                    O.value == 2 ? O.value = 0 : O.value = O.value + 1
                },
                _ = () => {
                    O.value == 0 ? O.value = 2 : O.value = O.value - 1
                };
            return ae(O, b => {
                var M, I, g, x, q, A, P, W, ne, ee, X, L, Q, R, G, N, z, le;
                b === 0 && (u.to([j.lines.map(U => U.children), C.lines.map(U => U.children)], {
                    yPercent: -110,
                    duration: .5
                }), u.to([(M = d.value) == null ? void 0 : M.children[0], (I = n.value) == null ? void 0 : I.children[0]], {
                    scale: 0,
                    duration: .5
                }), u.to([(g = d.value) == null ? void 0 : g.children[1], (x = n.value) == null ? void 0 : x.children[1]], {
                    xPercent: 10,
                    opacity: 0,
                    duration: .5
                }), u.to(h.lines.map(U => U.children), {
                    yPercent: 0,
                    duration: .5,
                    delay: .3
                }), u.to([(q = i.value) == null ? void 0 : q.children[0]], {
                    scale: 1,
                    duration: .5,
                    delay: .3
                }), u.fromTo([(A = i.value) == null ? void 0 : A.children[1]], {
                    xPercent: 20,
                    opacity: 0
                }, {
                    xPercent: 0,
                    opacity: 1,
                    duration: .5,
                    delay: .3
                }), u.to(p.value, {
                    width: "33%",
                    duration: .5,
                    delay: .3
                })), b === 1 && (u.to([h.lines.map(U => U.children), C.lines.map(U => U.children)], {
                    yPercent: -110,
                    duration: .5
                }), u.to([(P = i.value) == null ? void 0 : P.children[0], (W = n.value) == null ? void 0 : W.children[0]], {
                    scale: 0,
                    duration: .5
                }), u.to([(ne = i.value) == null ? void 0 : ne.children[1], (ee = n.value) == null ? void 0 : ee.children[1]], {
                    xPercent: 10,
                    opacity: 0,
                    duration: .5
                }), u.to(j.lines.map(U => U.children), {
                    yPercent: 0,
                    duration: .5,
                    delay: .3
                }), u.to([(X = d.value) == null ? void 0 : X.children[0]], {
                    scale: 1,
                    duration: .5,
                    delay: .3
                }), u.fromTo([(L = d.value) == null ? void 0 : L.children[1]], {
                    xPercent: 20,
                    opacity: 0
                }, {
                    xPercent: 0,
                    opacity: 1,
                    duration: .5,
                    delay: .3
                }), u.to(p.value, {
                    width: "66%",
                    duration: .5,
                    delay: .3
                })), b === 2 && (u.to([j.lines.map(U => U.children), h.lines.map(U => U.children)], {
                    yPercent: -110,
                    duration: .5
                }), u.to([(Q = i.value) == null ? void 0 : Q.children[0], (R = d.value) == null ? void 0 : R.children[0]], {
                    scale: 0,
                    duration: .5
                }), u.to([(G = i.value) == null ? void 0 : G.children[1], (N = d.value) == null ? void 0 : N.children[1]], {
                    xPercent: 10,
                    opacity: 0,
                    duration: .5
                }), u.to(C.lines.map(U => U.children), {
                    yPercent: 0,
                    duration: .5,
                    delay: .3
                }), u.to([(z = n.value) == null ? void 0 : z.children[0]], {
                    scale: 1,
                    duration: .5,
                    delay: .3
                }), u.fromTo([(le = n.value) == null ? void 0 : le.children[1]], {
                    xPercent: 20,
                    opacity: 0
                }, {
                    xPercent: 0,
                    opacity: 1,
                    duration: .5,
                    delay: .3
                }), u.to(p.value, {
                    width: "100%",
                    duration: .5,
                    delay: .3
                }))
            }), te(async () => {
                var b, M, I;
                h = new fe((b = f.value) == null ? void 0 : b.$el, {
                    types: "lines"
                }), j = new fe((M = m.value) == null ? void 0 : M.$el, {
                    types: "lines"
                }), h.lines.forEach(g => {
                    g.classList.add("overflow-hidden", "@mt-[-20]")
                }), j.lines.forEach(g => {
                    g.classList.add("overflow-hidden", "@mt-[-20]"), u.set(g.children, {
                        yPercent: -110
                    })
                }), C = new fe((I = v.value) == null ? void 0 : I.$el, {
                    types: "lines"
                }), C.lines.forEach(g => {
                    g.classList.add("overflow-hidden", "@mt-[-20]"), u.set(g.children, {
                        yPercent: -110
                    })
                }), await K()
            }), (b, M) => {
                const I = ge,
                    g = ct,
                    x = ce,
                    q = It,
                    A = qt;
                return S(), E("section", {
                    id: "reviews",
                    class: "w-full relative my-[140px] px-[10px]",
                    ref_key: "root",
                    ref: a
                }, [e("div", F1, [t(I, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => M[0] || (M[0] = [l("Do people like us?")])),
                    _: 1
                }), t(g, {
                    class: "py-[30px] pr-[10px] !text-white !leading-[1.2] !font-normal",
                    ref_key: "review1",
                    ref: f
                }, {
                    default: s(() => M[1] || (M[1] = [l("Staying at Capsules® in the California desert redefined my retreat — modern design meets nature, and every sunset feels like a serene masterpiece. ")])),
                    _: 1
                }, 512), t(g, {
                    class: "py-[30px] pr-[10px] !text-white !leading-[1.2] !font-normal absolute @top-[83]",
                    ref_key: "review2",
                    ref: m
                }, {
                    default: s(() => M[2] || (M[2] = [l("Capsules® offered the perfect escape — sleek, modern spaces surrounded by desert stillness. Each moment felt peaceful, grounded, and truly unique. ")])),
                    _: 1
                }, 512), t(g, {
                    class: "py-[30px] pr-[10px] !text-white !leading-[1.2] !font-normal absolute @top-[83]",
                    ref_key: "review3",
                    ref: v
                }, {
                    default: s(() => M[3] || (M[3] = [l("Capsules® was the perfect desert hideaway — stylish, peaceful, and fully surrounded by stunning views day and night. ")])),
                    _: 1
                }, 512), e("div", N1, [e("div", {
                    class: "flex items-center",
                    ref_key: "review1Image",
                    ref: i
                }, [e("div", G1, [t(x, {
                    alt: "Avatar 1",
                    src: "/images/review1.png",
                    class: "object-cover object-center absolute w-full h-full ] z-[-1]"
                })]), e("div", U1, [t(I, {
                    class: "!font-normal"
                }, {
                    default: s(() => M[4] || (M[4] = [l("Marcus Simpson"), e("br", null, null, -1), l("(New York)")])),
                    _: 1
                })])], 512), e("div", {
                    class: "flex items-center absolute top-0",
                    ref_key: "review2Image",
                    ref: d
                }, [e("div", J1, [t(x, {
                    alt: "Avatar 2",
                    src: "/images/review2.png",
                    class: "object-cover object-center absolute w-full h-full ] z-[-1]"
                })]), e("div", Y1, [t(I, {
                    class: "!font-normal"
                }, {
                    default: s(() => M[5] || (M[5] = [l("Lena Morrison"), e("br", null, null, -1), l("(Los Angeles)")])),
                    _: 1
                })])], 512), e("div", {
                    class: "flex items-center absolute top-0",
                    ref_key: "review3Image",
                    ref: n
                }, [e("div", K1, [t(x, {
                    alt: "Avatar 3",
                    src: "/images/review3.png",
                    class: "object-cover object-center absolute w-full h-full ] z-[-1]"
                })]), e("div", X1, [t(I, {
                    class: "!font-normal"
                }, {
                    default: s(() => M[6] || (M[6] = [l("Jason Whitaker"), e("br", null, null, -1), l("(San Francisco)")])),
                    _: 1
                })])], 512)]), e("div", Q1, [e("div", eu, [e("button", {
                    id: "reviewsLeft",
                    "aria-label": "Reviews Left",
                    class: "w-[44px] h-[44px] rounded-full relative border-[1px] border-lightBrown flex justify-center items-center overflow-hidden",
                    onClick: _,
                    ref_key: "prevEl",
                    ref: c
                }, [M[7] || (M[7] = e("div", {
                    class: "absolute h-full w-full scale-[0] rounded-full will-change-transform bg-lightBrown z-[-1]"
                }, null, -1)), t(q, {
                    class: "h-[20px]"
                })], 512), e("button", {
                    id: "reviewsRight",
                    "aria-label": "Reviews Right",
                    class: "w-[44px] h-[44px] rounded-full relative border-[1px] border-lightBrown flex justify-center items-center overflow-hidden",
                    onClick: T,
                    ref_key: "nextEl",
                    ref: o
                }, [M[8] || (M[8] = e("div", {
                    class: "absolute h-full w-full scale-0 rounded-full will-change-transform bg-lightBrown z-[-1]"
                }, null, -1)), t(A, {
                    class: "h-[20px]"
                })], 512)]), e("div", tu, [M[9] || (M[9] = e("div", {
                    class: "absolute w-full bg-white h-full opacity-[0.2]"
                }, null, -1)), e("div", {
                    class: "absolute w-[33%] bg-white h-full",
                    ref_key: "line",
                    ref: p
                }, null, 512)])])])], 512)
            }
        }
    }),
    ou = ["href"],
    su = {
        class: "absolute top-0 right-0 w-full h-full grid place-items-center"
    },
    nu = oe({
        __name: "MobileSocialMediaButton",
        props: ["item"],
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = we(a);
            return ae(v, i => {
                i ? (u.to(m.value, {
                    scale: 1,
                    duration: .3,
                    ease: "power2.inOut"
                }), u.to(f.value, {
                    color: k.black,
                    duration: .3,
                    ease: "power2.inOut"
                })) : (u.to(m.value, {
                    scale: 0,
                    duration: .3,
                    ease: "power2.inOut"
                }), u.to(f.value, {
                    color: k.white,
                    duration: .3,
                    ease: "power2.inOut"
                }))
            }), (i, d) => (S(), E("a", {
                target: "_blank",
                ref_key: "root",
                ref: a,
                href: $.item.href,
                "aria-label": "Read more about Moyra",
                class: "relative place-items-center cursor-pointer grid ring-inset ring-[1px] ring-lightBrown rounded-full w-[54px] h-[54px] overflow-hidden"
            }, [e("div", {
                ref_key: "circleRef",
                ref: m,
                class: "absolute h-full w-full scale-0 rounded-full from-caribbeanGreen to-aqua will-change-transform bg-lightBrown"
            }, null, 512), e("div", su, [e("div", {
                ref_key: "iconRef",
                ref: f
            }, [(S(), Fe(mt($.item.icon), {
                class: "w-[22px]"
            }))], 512)])], 8, ou))
        }
    }),
    ru = {
        class: "flex"
    },
    Jt = {
        __name: "MobileSocialMedia",
        setup($) {
            const a = Ke([{
                icon: Nt,
                href: "https://www.linkedin.com/company/moyra"
            }, {
                icon: Ft,
                href: "https://www.instagram.com/moyra_lab"
            }, {
                icon: Zt,
                href: "https://dribbble.com/moyra-co"
            }, {
                icon: Vt,
                href: "https://www.behance.net/moyra-co"
            }]);
            Ke([]);
            const f = r(null),
                m = we();
            return ae(m, v => {
                v ? u.to(f.value, {
                    scale: 1,
                    duration: .3,
                    ease: "power2.inOut"
                }) : u.to(f.value, {
                    scale: 0,
                    duration: .3,
                    ease: "power2.inOut"
                })
            }), (v, i) => {
                const d = nu;
                return S(), E("div", ru, [(S(!0), E(Pe, null, We(y(a), (n, p) => (S(), Fe(d, {
                    item: n,
                    key: p
                }, null, 8, ["item"]))), 128))])
            }
        }
    },
    au = {
        __name: "MobileMenuCarousel",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(0),
                d = r(-1),
                n = () => {
                    i.value <= -100 && (i.value = 0), i.value > 0 && (i.value = -100), u.set(f.value, {
                        xPercent: i.value
                    }), u.set(m.value, {
                        xPercent: i.value
                    }), i.value += .02 * d.value, requestAnimationFrame(n)
                };
            return te(async () => {
                await K(), requestAnimationFrame(n)
            }), (p, c) => {
                const o = he;
                return S(), E("div", {
                    class: "relative overflow-hidden",
                    ref_key: "root",
                    ref: a
                }, [e("div", {
                    class: "relative flex min-w-max flex-row items-center overflow-x-auto @px-[30] @py-[40]",
                    ref_key: "slider",
                    ref: v
                }, [e("div", {
                    ref_key: "firstItems",
                    ref: f,
                    class: "flex items-center"
                }, [t(o, {
                    color: y(k).white,
                    class: "@w-[1377]"
                }, null, 8, ["color"]), t(o, {
                    color: y(k).white,
                    class: "@w-[1377]"
                }, null, 8, ["color"]), t(o, {
                    color: y(k).white,
                    class: "@w-[1377]"
                }, null, 8, ["color"])], 512), e("div", {
                    ref_key: "secondItems",
                    ref: m,
                    class: "flex items-center"
                }, [t(o, {
                    color: y(k).white,
                    class: "@w-[1377]"
                }, null, 8, ["color"]), t(o, {
                    color: y(k).white,
                    class: "@w-[1377]"
                }, null, 8, ["color"]), t(o, {
                    color: y(k).white,
                    class: "@w-[1377]"
                }, null, 8, ["color"])], 512)], 512)], 512)
            }
        }
    },
    iu = {
        class: "h-full ml-auto aspect-square rounded-full bg-darkBrown px-[15px] items-center justify-center flex flex-col will-change-[transform] translate-z-0"
    },
    uu = {
        viewBox: "0 0 22 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    du = {
        transform: "translate(0, 8)"
    },
    cu = ["fill"],
    fu = ["fill"],
    pu = ["fill"],
    vu = {
        class: "relative w-full h-full rounded-[30px] overflow-hidden"
    },
    mu = {
        class: "pt-[40px] w-full"
    },
    wu = {
        class: "flex justify-between h-full flex-col"
    },
    xu = {
        class: "flex flex-col px-[20px]"
    },
    hu = {
        class: "px-[20px] mb-[40px]"
    },
    bu = {
        class: "relative max-h-[300px] h-full rounded-[30px] w-full overflow-hidden flex justify-center items-center"
    },
    gu = oe({
        __name: "MobileMenuBurger",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(null),
                d = r(null),
                n = r(null),
                p = r(null),
                c = r(null),
                o = r(null),
                h = r(null),
                j = r(null),
                C = r(null),
                O = r(null),
                T = r(null),
                _ = r(null),
                b = r(!1),
                M = r(null),
                I = r(null);
            let g, x, q, A, P, W;
            const ne = r(!1),
                ee = async () => {
                    if (!(!g || !A))
                        if (g.progress() === 1 || (x == null ? void 0 : x.progress()) === 1) {
                            if (H.menuOpenButton == !0) {
                                H.menuOpenButton = !1;
                                return
                            }
                            u.set(o.value, {
                                width: "128px",
                                height: "52px",
                                transformOrigin: "center center",
                                scale: () => window.innerHeight / 23
                            }), u.to([c.value, n.value], {
                                opacity: 0,
                                ease: "power3.inOut",
                                duration: .5,
                                onStart: () => {
                                    setTimeout(() => {
                                        g == null || g.reverse(), x == null || x.reverse(), A == null || A.reverse()
                                    }, 200)
                                }
                            })
                        } else b.value = !0, await K(), g.play(), A.play()
                };
            ae(() => H.menuOpenButton, Q => {
                !x || !A || (Q ? x == null || x.play() : u.to([c.value, n.value], {
                    opacity: 0,
                    ease: "power3.inOut",
                    duration: .5,
                    onStart: () => {
                        setTimeout(() => {
                            x == null || x.reverse()
                        }, 200)
                    }
                }))
            });
            const X = () => {
                    ee(), setTimeout(() => {
                        H.reservationOpenButton = !0
                    }, 1100)
                },
                L = Q => {
                    var N, z;
                    const R = document.querySelector("#" + Q);
                    let G = !1;
                    (Q == "welcome" || Q == "choose" || Q == "gallery" || Q == "capsules") && (G = !0), (N = H.lenis) == null || N.start(), (z = H.lenis) == null || z.scrollTo(R, {
                        duration: 0,
                        offset: 0,
                        force: !0,
                        immediate: !0,
                        onComplete: () => {
                            G && (H.shouldResetCapsules = !0), ee()
                        }
                    })
                };
            return te(async () => {
                var Q, R, G, N, z, le;
                await K(), (Q = j.value) == null || Q.querySelectorAll(".menu-link-text").forEach(U => {
                    u.set(U, {
                        yPercent: -110
                    })
                }), (R = M.value) == null || R.$el.querySelectorAll("a").forEach(U => {
                    u.set(U, {
                        scale: 0
                    })
                }), u.set([f.value, v.value], {
                    transformOrigin: "center center"
                }), g = u.timeline({
                    paused: !0,
                    onReverseComplete: () => {
                        u.set([n.value, c.value, d.value, p.value], {
                            opacity: 1,
                            clearProps: "all"
                        })
                    }
                }), g.addLabel("start"), g.to(f.value, {
                    rotate: "45deg",
                    y: 5,
                    ease: "power1.inOut"
                }, "start"), g.to(m.value, {
                    opacity: 0,
                    ease: "power1.inOut"
                }, "start"), g.to(v.value, {
                    rotate: "-45deg",
                    y: -5,
                    ease: "power1.inOut"
                }, "start"), g.to(p.value, {
                    yPercent: -80,
                    ease: "power1.inOut"
                }, "start"), g.to(d.value, {
                    yPercent: -80,
                    ease: "power1.inOut"
                }, "start"), x = u.timeline({
                    paused: !0,
                    onReverseComplete: () => {
                        u.set([n.value, c.value, d.value, p.value], {
                            opacity: 1,
                            clearProps: "all"
                        })
                    }
                }), x.addLabel("start"), x.to(f.value, {
                    rotate: "45deg",
                    y: 5,
                    ease: "power1.inOut"
                }, "start"), x.to(m.value, {
                    opacity: 0,
                    ease: "power1.inOut"
                }, "start"), x.to(v.value, {
                    rotate: "-45deg",
                    y: -5,
                    ease: "power1.inOut"
                }, "start"), x.to(d.value, {
                    yPercent: -80,
                    ease: "power1.inOut"
                }, "start"), x.to(n.value, {
                    y: 0,
                    ease: "power1.inOut"
                }, "start"), q = u.timeline({
                    delay: 3.2,
                    onComplete: () => {
                        var U;
                        u.set(a.value, {
                            clearProps: "width"
                        }), (U = a.value) == null || U.classList.add("!w-[128px]"), ne.value = !1
                    }
                }), q.to(a.value, {
                    scale: 1,
                    ease: "power1.inOut"
                }), q.to(a.value, {
                    width: "128px",
                    duration: .6,
                    autoRound: !1,
                    ease: "power1.inOut"
                }), q.to(i.value, {
                    duration: .3,
                    opacity: 1,
                    position: "relative",
                    ease: "power1.inOut"
                }), A = u.timeline({
                    paused: !0,
                    onStart: () => {
                        var U;
                        (U = H.lenis) == null || U.stop()
                    },
                    onComplete: () => {
                        u.set(h.value, {
                            clearProps: "scale",
                            width: "100vw",
                            height: "100dvh"
                        }), H.hideTopbar = !0
                    },
                    onReverseComplete: () => {
                        var U;
                        (U = H.lenis) == null || U.start(), b.value = !1
                    }
                }), A.addLabel("start"), A.to(h.value, {
                    backgroundColor: k.black,
                    pointerEvents: "all"
                }, "start"), A.to(o.value, {
                    scale: () => window.innerHeight / 23,
                    transformOrigin: "center center",
                    duration: .6,
                    ease: "sine.inOut"
                }, "start"), A.to(j.value, {
                    opacity: 1,
                    duration: .1,
                    ease: "power1.inOut"
                }, "start"), A.addLabel("reveal"), A.to(C.value, {
                    opacity: 1,
                    ease: "power1.inOut",
                    duration: .6
                }, "start+=0.40"), A.to([(G = O.value) == null ? void 0 : G.$el, _.value], {
                    scale: 1,
                    ease: "power1.inOut",
                    duration: .6
                }, "start+=0.40"), A.to((N = T.value) == null ? void 0 : N.$el, {
                    opacity: 1,
                    ease: "power1.inOut",
                    duration: .6
                }, "start+=0.40"), A.to(j.value ? j.value.querySelectorAll(".menu-link-text") : [], {
                    yPercent: 0,
                    stagger: .04,
                    ease: "power1.inOut",
                    duration: .5
                }, "start+=0.3"), A.to(M.value ? (z = M.value) == null ? void 0 : z.$el.querySelectorAll("a") : [], {
                    scale: 1,
                    stagger: .05,
                    ease: "sine.inOut",
                    duration: .5
                }, "start+=0.35"), A.to((le = I.value) == null ? void 0 : le.$el, {
                    opacity: 1,
                    x: 0,
                    ease: "power1.inOut"
                }, "start+=0.40"), P = u.timeline({
                    paused: !0
                }), P.addLabel("start"), P.to(d.value, {
                    yPercent: -80,
                    ease: "power3.inOut"
                }, "start"), P.to(p.value, {
                    y: 0,
                    ease: "power3.inOut"
                }, "start"), W = u.timeline({
                    paused: !0
                }), W.addLabel("start"), W.to(n.value, {
                    yPercent: -80,
                    ease: "power3.inOut"
                }, "start"), W.to(c.value, {
                    y: 0,
                    ease: "power3.inOut"
                }, "start")
            }), (Q, R) => {
                const G = ct,
                    N = ge,
                    z = Jt,
                    le = ce,
                    U = au;
                return S(), E("div", null, [e("button", {
                    id: "menu",
                    "aria-label": "Menu Button",
                    onClick: ee,
                    ref_key: "root",
                    ref: a,
                    class: "w-[52px] h-[52px] bg-white rounded-[50px] fixed bottom-[32px] scale-0 left-0 right-0 mx-auto flex justify-between items-center p-[3px] z-[100]"
                }, [e("div", {
                    class: "@ml-[12] text-darkBrown text-[14px] absolute opacity-0 overflow-hidden @mb-[1] w-full",
                    ref_key: "text",
                    ref: i
                }, [e("div", {
                    ref_key: "text1",
                    ref: d
                }, "Menu", 512), e("div", {
                    class: "absolute top-0 translate-y-[80%] w-full text-center",
                    ref_key: "text2",
                    ref: n
                }, " Close ", 512), e("div", {
                    class: "absolute top-0 translate-y-[80%] w-full text-center",
                    ref_key: "text3",
                    ref: p
                }, " Close ", 512), e("div", {
                    class: "absolute top-0 translate-y-[80%] w-full text-center",
                    ref_key: "text4",
                    ref: c
                }, " Close ", 512)], 512), e("div", iu, [(S(), E("svg", uu, [e("g", du, [e("g", {
                    ref_key: "line1",
                    ref: f
                }, [e("rect", {
                    width: "100%",
                    height: "2",
                    transform: "matrix(-1 0 0 1 22 0)",
                    fill: y(k).lightBrown
                }, null, 8, cu)], 512), e("g", {
                    ref_key: "line2",
                    ref: m
                }, [e("rect", {
                    width: "100%",
                    height: "2",
                    transform: "matrix(-1 0 0 1 22 5)",
                    fill: y(k).lightBrown
                }, null, 8, fu)], 512), e("g", {
                    ref_key: "line3",
                    ref: v
                }, [e("rect", {
                    width: "100%",
                    height: "2",
                    transform: "matrix(-1 0 0 1 22 10)",
                    fill: y(k).lightBrown
                }, null, 8, pu)], 512)])]))])], 512), e("div", {
                    class: "fixed w-screen h-dvh inset-0 p-[10px] z-[11] pointer-events-none",
                    ref_key: "menuContainer",
                    ref: h
                }, [e("div", vu, [ve(e("div", {
                    class: "w-[128px] h-[52px] rounded-[30px] absolute left-0 right-0 mx-auto flex justify-between items-center bottom-[32px] bg-darkBrown",
                    ref_key: "menu",
                    ref: o
                }, null, 512), [
                    [$e, y(b)]
                ]), ve(e("div", {
                    class: "flex flex-col justify-between w-full h-full z-[10] absolute overflow-hidden opacity-0",
                    ref_key: "menuContent",
                    ref: j
                }, [e("div", mu, [e("div", wu, [e("div", xu, [e("a", {
                    onClick: R[0] || (R[0] = re => L("hero")),
                    class: "overflow-hidden relative @mt-[-20] cursor-pointer"
                }, [t(G, {
                    class: "hover:text-white transition-colors !leading-[1.2] text-lightBrown duration-300 menu-link-text !font-normal"
                }, {
                    default: s(() => R[6] || (R[6] = [l("Welcome")])),
                    _: 1
                })]), e("a", {
                    onClick: R[1] || (R[1] = re => L("welcome")),
                    class: "overflow-hidden relative @mt-[-20] cursor-pointer"
                }, [t(G, {
                    class: "hover:text-white transition-colors !leading-[1.2] text-lightBrown duration-300 menu-link-text !font-normal"
                }, {
                    default: s(() => R[7] || (R[7] = [l("Introduction")])),
                    _: 1
                })]), e("a", {
                    onClick: R[2] || (R[2] = re => L("choose")),
                    class: "overflow-hidden relative @mt-[-20] cursor-pointer"
                }, [t(G, {
                    class: "hover:text-white transition-colors !leading-[1.2] text-lightBrown duration-300 menu-link-text !font-normal"
                }, {
                    default: s(() => R[8] || (R[8] = [l("Houses")])),
                    _: 1
                })]), e("a", {
                    onClick: R[3] || (R[3] = re => L("capsules")),
                    class: "overflow-hidden relative @mt-[-20] cursor-pointer"
                }, [t(G, {
                    class: "hover:text-white transition-colors !leading-[1.2] text-lightBrown duration-300 menu-link-text !font-normal"
                }, {
                    default: s(() => R[9] || (R[9] = [l("Why Capsules®")])),
                    _: 1
                })]), e("a", {
                    onClick: R[4] || (R[4] = re => L("discover")),
                    class: "overflow-hidden relative @mt-[-20] cursor-pointer"
                }, [t(G, {
                    class: "hover:text-white transition-colors !leading-[1.2] text-lightBrown duration-300 menu-link-text !font-normal"
                }, {
                    default: s(() => R[10] || (R[10] = [l("Activities")])),
                    _: 1
                })]), e("a", {
                    onClick: R[5] || (R[5] = re => L("reviews")),
                    class: "overflow-hidden relative @mt-[-20] cursor-pointer"
                }, [t(G, {
                    class: "hover:text-white transition-colors !leading-[1.2] text-lightBrown duration-300 menu-link-text !font-normal"
                }, {
                    default: s(() => R[11] || (R[11] = [l("Feedback")])),
                    _: 1
                })]), e("a", {
                    onClick: X,
                    class: "overflow-hidden relative @mt-[-20] cursor-pointer"
                }, [t(G, {
                    class: "hover:text-white transition-colors !leading-[1.2] text-lightBrown duration-300 menu-link-text !font-normal"
                }, {
                    default: s(() => R[12] || (R[12] = [l("Reserve")])),
                    _: 1
                })])])])]), e("div", {
                    class: "h-full opacity-0 flex flex-col justify-end",
                    ref_key: "rightContent",
                    ref: C
                }, [t(N, {
                    class: "px-[20px] py-[30px] text-white"
                }, {
                    default: s(() => R[13] || (R[13] = [l("Meet Capsules®—modern and cozy "), e("br", null, null, -1), l("houses, in the California desert.")])),
                    _: 1
                }), e("div", hu, [t(z)]), e("div", bu, [t(le, {
                    src: "/images/cap2.png",
                    class: "object-cover object-center absolute scale-[1.2] w-full h-full",
                    ref_key: "image",
                    ref: O,
                    alt: "Menu Image"
                }, null, 512), e("video", {
                    preload: "metadata",
                    class: Be("pointer-events-none absolute object-cover object-center h-full w-full opacity-[0.6] mix-blend-hard-light hide-in-safari scale-[1.5]"),
                    muted: "",
                    playsinline: "",
                    autoplay: "",
                    loop: "",
                    ref_key: "smoke",
                    ref: _
                }, R[14] || (R[14] = [e("source", {
                    src: Me,
                    type: "video/mp4"
                }, null, -1)]), 512), t(U, {
                    ref_key: "carousel",
                    ref: T
                }, null, 512)])], 512)], 512), [
                    [$e, y(b)]
                ])])], 512)])
            }
        }
    }),
    yu = {
        class: "fixed top-[15px] w-full"
    },
    _u = oe({
        __name: "MobileTopBar",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(!1),
                i = r(null);
            te(async () => {
                await K(), setTimeout(() => {
                    d(), n()
                }, 1e3)
            });
            const d = async () => {
                await K(), f.value = Ne.create({
                    trigger: a.value,
                    start: "top top",
                    end: `${window.innerHeight*100}px`,
                    onUpdate: o => {
                        var h;
                        v.value || (o.direction === -1 ? p() : H.lenis && ((h = H.lenis) == null ? void 0 : h.scroll) > window.innerHeight * .2 && c())
                    }
                })
            };
            ae(() => H.hideTopbar, o => {
                o && c()
            });
            const n = () => {
                    Ne.create({
                        start: "top top",
                        end: `${window.innerHeight}px`,
                        onUpdate: o => {
                            var h, j;
                            m.value && (o.progress < 1 ? u.to([m.value, (h = i.value) == null ? void 0 : h.$el], {
                                autoAlpha: 0,
                                duration: .3,
                                ease: "power2.out"
                            }) : u.to([m.value, (j = i.value) == null ? void 0 : j.$el], {
                                autoAlpha: 1,
                                duration: .3,
                                ease: "power2.out"
                            }))
                        }
                    })
                },
                p = () => {
                    u.to(a.value, {
                        yPercent: 0,
                        duration: .5,
                        ease: "power2.out",
                        onStart: () => {
                            v.value = !0
                        },
                        onComplete: () => {
                            v.value = !1
                        }
                    })
                },
                c = () => {
                    u.to(a.value, {
                        yPercent: -130,
                        duration: .5,
                        ease: "power2.out",
                        onStart: () => {
                            v.value = !0
                        },
                        onComplete: () => {
                            v.value = !1
                        }
                    })
                };
            return (o, h) => {
                const j = zt;
                return S(), E("div", yu, [e("div", {
                    class: "w-full flex justify-between items-center px-[20px]",
                    ref_key: "root",
                    ref: a
                }, [e("div", null, [(S(), E("svg", {
                    width: "68",
                    ref_key: "svgRef",
                    ref: m,
                    viewBox: "0 0 82 38",
                    fill: "none",
                    style: {
                        opacity: "0"
                    },
                    xmlns: "http://www.w3.org/2000/svg"
                }, h[1] || (h[1] = [e("path", {
                    d: "M74.7955 37.5C73.4132 37.5 72.1714 37.2062 71.0703 36.6186C69.9925 36.0085 69.1374 35.1723 68.5048 34.1102C67.8956 33.048 67.591 31.8503 67.591 30.517C67.591 29.1384 67.8956 27.9294 68.5048 26.8898C69.1374 25.8503 69.9925 25.0254 71.0703 24.4153C72.1714 23.8051 73.4132 23.5 74.7955 23.5C76.2247 23.5 77.4781 23.8051 78.5559 24.4153C79.6336 25.0254 80.4771 25.8503 81.0862 26.8898C81.6954 27.9294 82 29.1384 82 30.517C82 31.8503 81.6954 33.048 81.0862 34.1102C80.4771 35.1723 79.6336 36.0085 78.5559 36.6186C77.4781 37.2062 76.2247 37.5 74.7955 37.5ZM74.7955 36.0763C76.5058 36.0763 77.8647 35.5565 78.8722 34.517C79.9031 33.4774 80.4185 32.1441 80.4185 30.517C80.4185 28.8672 79.9031 27.5339 78.8722 26.517C77.8647 25.4774 76.5058 24.9576 74.7955 24.9576C73.0852 24.9576 71.7146 25.4774 70.6837 26.517C69.6762 27.5339 69.1725 28.8672 69.1725 30.517C69.1725 32.1441 69.6762 33.4774 70.6837 34.517C71.7146 35.5565 73.0852 36.0763 74.7955 36.0763ZM71.8786 34.0763V26.822H75.4281C76.2013 26.822 76.8222 27.0254 77.2907 27.4322C77.7593 27.839 77.9936 28.3814 77.9936 29.0593C77.9936 29.8051 77.7241 30.3927 77.1853 30.822C77.4664 31.0028 77.6538 31.2401 77.7476 31.5339C77.8647 31.8277 77.935 32.1441 77.9584 32.4831L78.099 34.0763H76.3067L76.1661 32.8898C76.0958 32.2571 75.9904 31.839 75.8498 31.6356C75.7327 31.4322 75.4281 31.3305 74.9361 31.3305H73.8115V34.0763H71.8786ZM73.8115 29.9407H75.1821C75.4398 29.9407 75.6507 29.8842 75.8147 29.7712C76.0021 29.6356 76.0958 29.4322 76.0958 29.161C76.0958 28.8898 76.0021 28.6977 75.8147 28.5848C75.6507 28.4718 75.4398 28.4153 75.1821 28.4153H73.8115V29.9407Z",
                    fill: "#F4EFE7",
                    style: {
                        fill: "color(display-p3 0.9569 0.9373 0.9059)",
                        "fill-opacity": "1"
                    }
                }, null, -1), e("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M46.3144 5H19.555C11.5971 5 5.14605 11.268 5.14605 19C5.14605 26.732 11.5971 33 19.555 33H46.3144C54.2723 33 60.7234 26.732 60.7234 19C60.7234 11.268 54.2723 5 46.3144 5ZM19.555 0C8.75507 0 0 8.50659 0 19C0 29.4934 8.75507 38 19.555 38H46.3144C57.1144 38 65.8694 29.4934 65.8694 19C65.8694 8.50659 57.1144 0 46.3144 0H19.555Z",
                    fill: "#F4EFE7",
                    style: {
                        fill: "color(display-p3 0.9569 0.9373 0.9059)",
                        "fill-opacity": "1"
                    }
                }, null, -1), e("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M11.4006 11.4071C13.5449 9.29764 16.6662 8 20.5842 8H22.6426V12H20.5842C17.6408 12 15.6161 12.9524 14.3297 14.2179C13.0222 15.5041 12.3505 17.237 12.3505 19C12.3505 20.763 13.0222 22.4959 14.3297 23.7821C15.6161 25.0476 17.6408 26 20.5842 26H22.6426V30H20.5842C16.6662 30 13.5449 28.7024 11.4006 26.5929C9.27735 24.5041 8.23368 21.737 8.23368 19C8.23368 16.263 9.27734 13.4959 11.4006 11.4071Z",
                    fill: "#F4EFE7",
                    style: {
                        fill: "color(display-p3 0.9569 0.9373 0.9059)",
                        "fill-opacity": "1"
                    }
                }, null, -1)]), 512))]), t(j, {
                    class: "z-[10] !mx-[0] opacity-0",
                    ref_key: "reserveButton",
                    ref: i,
                    onClick: h[0] || (h[0] = C => ("general" in o ? o.general : y(H)).reservationOpenButton = !0)
                }, {
                    default: s(() => h[2] || (h[2] = [l("Reserve")])),
                    _: 1
                }, 512)], 512)])
            }
        }
    });
if (typeof window < "u") {
    var Mt = {
        get passive() {}
    };
    window.addEventListener("testPassive", null, Mt), window.removeEventListener("testPassive", null, Mt)
}
const Cu = {
        class: "flex bg-darkBrown h-full w-full rounded-[30px] flex-col justify-between overflow-hidden"
    },
    ku = {
        class: "flex flex-col p-[20px] pt-[0]"
    },
    $u = {
        class: "flex justify-between items-center mt-[20px]"
    },
    ju = {
        class: "w-full h-[160px] relative mt-[30px] rounded-[23px] overflow-hidden"
    },
    Hu = {
        class: "flex justify-between py-[14px] relative select-none mt-[30px]"
    },
    Bu = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    Mu = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    Tu = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    Ou = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    Lu = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    Su = {
        class: "p-[10px]"
    },
    Ru = {
        class: "bg-black w-[calc(100%-40px)] h-[72px] rounded-[24px] flex justify-between items-center px-[24px] absolute bottom-[20px] left-[20px]"
    },
    Eu = oe({
        __name: "MobileGalleryFirstDetails",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(0),
                v = r(!1),
                i = () => {
                    f.value, document.documentElement.style.overflow = "", H.lenis && (H.lenis.start(), setTimeout(() => {
                        setTimeout(() => {
                            u.to(a.value, {
                                opacity: 0,
                                duration: .5,
                                onStart: () => {},
                                onComplete: () => {
                                    v.value = !1, H.reservationOpenButton = !0
                                }
                            })
                        }, 100)
                    }, 300))
                };
            return ae(() => H.firstMobileGalleryDetails, async d => {
                var n;
                d ? (v.value = !0, await K(), (n = H.lenis) == null || n.stop(), document.documentElement.style.overflow = "hidden", document.body.style.overflow = "hidden", a.value && f.value && (new ot({
                    autoRaf: !0,
                    wrapper: a.value,
                    content: f.value
                }), u.to(a.value, {
                    opacity: 1,
                    duration: .5,
                    onComplete: () => {
                        var p;
                        f.value && (m.value = ((p = H.lenis) == null ? void 0 : p.animatedScroll) ?? 0)
                    }
                }))) : (f.value, document.documentElement.style.overflow = "", H.lenis && (H.lenis.start(), setTimeout(() => {
                    setTimeout(() => {
                        u.to(a.value, {
                            opacity: 0,
                            duration: .5,
                            onStart: () => {},
                            onComplete: () => {
                                v.value = !1
                            }
                        })
                    }, 100)
                }, 300)))
            }), (d, n) => {
                const p = Ge,
                    c = Te,
                    o = ge,
                    h = ce,
                    j = je;
                return y(v) ? (S(), E("div", {
                    key: 0,
                    class: "fixed inset-0 w-full h-full bg-black p-[10px] z-[101] opacity-0",
                    ref_key: "root",
                    ref: a
                }, [e("div", Cu, [e("div", ku, [e("button", {
                    id: "closeReservation",
                    "aria-label": "Close Reservation",
                    onClick: n[0] || (n[0] = C => ("general" in d ? d.general : y(H)).firstMobileGalleryDetails = !1),
                    class: "w-[52px] h-[52px] bg-black absolute rounded-full flex z-[10] top-[25px] justify-center items-center overflow-hidden"
                }, [n[1] || (n[1] = e("div", {
                    class: "absolute h-full w-full scale-0 rounded-full will-change-transform bg-white"
                }, null, -1)), t(p, {
                    color: y(k).white,
                    class: "w-[20px] rotate-[45deg]"
                }, null, 8, ["color"])]), e("div", {
                    class: "overflow-y-scroll scrollbar-hide relative h-[100dvh] pb-[160px] pt-[70px] bg-darkBrown touch-auto",
                    style: {
                        overflow: "auto",
                        "overscroll-behavior": "contain"
                    },
                    ref_key: "inner",
                    ref: f
                }, [e("div", $u, [t(c, null, {
                    default: s(() => n[2] || (n[2] = [l("Details")])),
                    _: 1
                }), t(o, {
                    class: "!text-white"
                }, {
                    default: s(() => n[3] || (n[3] = [l("(Classic Capsule®)")])),
                    _: 1
                })]), e("div", ju, [t(h, {
                    alt: "Map Capsules Image",
                    src: "/images/cap1-mobile.png",
                    class: "object-cover object-center absolute w-full h-full"
                })]), t(o, {
                    class: "mt-[30px]"
                }, {
                    default: s(() => n[4] || (n[4] = [l("Classic Capsule® boasts refined aesthetics and a modern interior, creating an intimate retreat in a desert landscape.")])),
                    _: 1
                }), e("div", Hu, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[5] || (n[5] = [l("Square footage")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[6] || (n[6] = [l("22m2")])),
                    _: 1
                }), n[7] || (n[7] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", Bu, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[8] || (n[8] = [l("Bed")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[9] || (n[9] = [l("King Size")])),
                    _: 1
                }), n[10] || (n[10] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", Mu, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[11] || (n[11] = [l("Shifting Window")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[12] || (n[12] = [l("Available")])),
                    _: 1
                }), n[13] || (n[13] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", Tu, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[14] || (n[14] = [l("Air Condition")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[15] || (n[15] = [l("Available")])),
                    _: 1
                }), n[16] || (n[16] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", Ou, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[17] || (n[17] = [l("Jacuzzi")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[18] || (n[18] = [l("Available")])),
                    _: 1
                }), n[19] || (n[19] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", Lu, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[20] || (n[20] = [l("Terrace")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[21] || (n[21] = [l("None")])),
                    _: 1
                })]), e("a", {
                    class: "cursor-pointer",
                    onClick: i
                }, [t(o, {
                    class: "!font-normal text-left mt-[18px] underline"
                }, {
                    default: s(() => [t(j, {
                        color: y(k).lightBrown
                    }, {
                        default: s(() => n[22] || (n[22] = [l("Ready to reserve?")])),
                        _: 1
                    }, 8, ["color"])]),
                    _: 1
                })])], 512)]), e("div", Su, [e("div", Ru, [e("div", null, [t(o, null, {
                    default: s(() => n[23] || (n[23] = [l("Cost")])),
                    _: 1
                })]), e("div", null, [t(o, null, {
                    default: s(() => n[24] || (n[24] = [e("span", {
                        class: "text-white"
                    }, "2000.00 USD", -1), l(" / Night")])),
                    _: 1
                })])])])])], 512)) : Ie("", !0)
            }
        }
    }),
    Au = {
        class: "flex bg-darkBrown h-full w-full rounded-[30px] flex-col justify-between overflow-hidden"
    },
    zu = {
        class: "flex flex-col p-[20px] pt-[0]"
    },
    Pu = {
        class: "flex justify-between items-center mt-[20px]"
    },
    Wu = {
        class: "w-full h-[160px] relative mt-[30px] rounded-[23px] overflow-hidden"
    },
    Iu = {
        class: "flex justify-between py-[14px] relative select-none mt-[30px]"
    },
    qu = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    Du = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    Vu = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    Zu = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    Fu = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    Nu = {
        class: "p-[10px]"
    },
    Gu = {
        class: "bg-black w-[calc(100%-40px)] h-[72px] rounded-[24px] flex justify-between items-center px-[24px] absolute bottom-[20px] left-[20px]"
    },
    Uu = oe({
        __name: "MobileGallerySecondDetails",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(0),
                v = r(!1),
                i = () => {
                    f.value, document.documentElement.style.overflow = "", H.lenis && (H.lenis.start(), setTimeout(() => {
                        setTimeout(() => {
                            u.to(a.value, {
                                opacity: 0,
                                duration: .5,
                                onStart: () => {},
                                onComplete: () => {
                                    v.value = !1, H.reservationOpenButton = !0
                                }
                            })
                        }, 100)
                    }, 300))
                };
            return ae(() => H.secondMobileGalleryDetails, async d => {
                var n;
                d ? (v.value = !0, await K(), (n = H.lenis) == null || n.stop(), document.documentElement.style.overflow = "hidden", document.body.style.overflow = "hidden", a.value && f.value && (new ot({
                    autoRaf: !0,
                    wrapper: a.value,
                    content: f.value
                }), u.to(a.value, {
                    opacity: 1,
                    duration: .5,
                    onComplete: () => {
                        var p;
                        f.value && (m.value = ((p = H.lenis) == null ? void 0 : p.animatedScroll) ?? 0)
                    }
                }))) : (f.value, document.documentElement.style.overflow = "", H.lenis && (H.lenis.start(), setTimeout(() => {
                    setTimeout(() => {
                        u.to(a.value, {
                            opacity: 0,
                            duration: .5,
                            onStart: () => {},
                            onComplete: () => {
                                v.value = !1
                            }
                        })
                    }, 100)
                }, 300)))
            }), (d, n) => {
                const p = Ge,
                    c = Te,
                    o = ge,
                    h = ce,
                    j = je;
                return y(v) ? (S(), E("div", {
                    key: 0,
                    class: "fixed inset-0 w-full h-full bg-black p-[10px] z-[101] opacity-0",
                    ref_key: "root",
                    ref: a,
                    style: {
                        overflow: "auto",
                        "overscroll-behavior": "contain"
                    }
                }, [e("div", Au, [e("div", zu, [e("button", {
                    id: "closeReservation",
                    "aria-label": "Close Reservation",
                    onClick: n[0] || (n[0] = C => ("general" in d ? d.general : y(H)).secondMobileGalleryDetails = !1),
                    class: "w-[52px] h-[52px] bg-black absolute rounded-full flex z-[10] top-[25px] justify-center items-center overflow-hidden"
                }, [n[1] || (n[1] = e("div", {
                    class: "absolute h-full w-full scale-0 rounded-full will-change-transform bg-white"
                }, null, -1)), t(p, {
                    color: y(k).white,
                    class: "w-[20px] rotate-[45deg]"
                }, null, 8, ["color"])]), e("div", {
                    class: "overflow-y-scroll scrollbar-hide relative h-[100dvh] pb-[160px] pt-[70px] bg-darkBrown touch-auto",
                    style: {
                        overflow: "auto",
                        "overscroll-behavior": "contain"
                    },
                    ref_key: "inner",
                    ref: f
                }, [e("div", Pu, [t(c, null, {
                    default: s(() => n[2] || (n[2] = [l("Details")])),
                    _: 1
                }), t(o, {
                    class: "!text-white"
                }, {
                    default: s(() => n[3] || (n[3] = [l("(Terrace Capsule®)")])),
                    _: 1
                })]), e("div", Wu, [t(h, {
                    alt: "Map Capsules Image",
                    src: "/images/cap2-mobile.png",
                    class: "object-cover object-center absolute w-full h-full"
                })]), t(o, {
                    class: "mt-[30px]"
                }, {
                    default: s(() => n[4] || (n[4] = [l("The most prestige capsule with the biggest terrace and jacuzzi with an amazing view of Los Angeles.")])),
                    _: 1
                }), e("div", Iu, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[5] || (n[5] = [l("Square footage")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[6] || (n[6] = [l("30m2")])),
                    _: 1
                }), n[7] || (n[7] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", qu, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[8] || (n[8] = [l("Bed")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[9] || (n[9] = [l("King Size")])),
                    _: 1
                }), n[10] || (n[10] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", Du, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[11] || (n[11] = [l("Shifting Window")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[12] || (n[12] = [l("Available")])),
                    _: 1
                }), n[13] || (n[13] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", Vu, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[14] || (n[14] = [l("Air Condition")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[15] || (n[15] = [l("Available")])),
                    _: 1
                }), n[16] || (n[16] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", Zu, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[17] || (n[17] = [l("Jacuzzi")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[18] || (n[18] = [l("Available")])),
                    _: 1
                }), n[19] || (n[19] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", Fu, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[20] || (n[20] = [l("Terrace")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[21] || (n[21] = [l("Available")])),
                    _: 1
                })]), e("a", {
                    class: "cursor-pointer",
                    onClick: i
                }, [t(o, {
                    class: "!font-normal text-left mt-[18px] underline"
                }, {
                    default: s(() => [t(j, {
                        color: y(k).lightBrown
                    }, {
                        default: s(() => n[22] || (n[22] = [l("Ready to reserve?")])),
                        _: 1
                    }, 8, ["color"])]),
                    _: 1
                })])], 512)]), e("div", Nu, [e("div", Gu, [e("div", null, [t(o, null, {
                    default: s(() => n[23] || (n[23] = [l("Cost")])),
                    _: 1
                })]), e("div", null, [t(o, null, {
                    default: s(() => n[24] || (n[24] = [e("span", {
                        class: "text-white"
                    }, "2500.00 USD", -1), l(" / Night")])),
                    _: 1
                })])])])])], 512)) : Ie("", !0)
            }
        }
    }),
    Ju = {
        class: "flex bg-darkBrown h-full w-full rounded-[30px] flex-col justify-between overflow-hidden"
    },
    Yu = {
        class: "flex flex-col p-[20px] pt-[0]"
    },
    Ku = {
        class: "flex justify-between items-center mt-[20px]"
    },
    Xu = {
        class: "w-full h-[160px] relative mt-[30px] rounded-[23px] overflow-hidden"
    },
    Qu = {
        class: "flex justify-between py-[14px] relative select-none mt-[30px]"
    },
    e2 = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    t2 = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    l2 = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    o2 = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    s2 = {
        class: "flex justify-between py-[14px] relative select-none"
    },
    n2 = {
        class: "p-[10px]"
    },
    r2 = {
        class: "bg-black w-[calc(100%-40px)] h-[72px] rounded-[24px] flex justify-between items-center px-[24px] absolute bottom-[20px] left-[20px]"
    },
    a2 = oe({
        __name: "MobileGalleryThirdDetails",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(0),
                v = r(!1),
                i = () => {
                    f.value, document.documentElement.style.overflow = "", H.lenis && (H.lenis.start(), setTimeout(() => {
                        setTimeout(() => {
                            u.to(a.value, {
                                opacity: 0,
                                duration: .5,
                                onStart: () => {},
                                onComplete: () => {
                                    v.value = !1, H.reservationOpenButton = !0
                                }
                            })
                        }, 100)
                    }, 300))
                };
            return ae(() => H.thirdMobileGalleryDetails, async d => {
                var n;
                d ? (v.value = !0, await K(), (n = H.lenis) == null || n.stop(), document.documentElement.style.overflow = "hidden", document.body.style.overflow = "hidden", a.value && f.value && (new ot({
                    autoRaf: !0,
                    wrapper: a.value,
                    content: f.value
                }), u.to(a.value, {
                    opacity: 1,
                    duration: .5,
                    onComplete: () => {
                        var p;
                        f.value && (m.value = ((p = H.lenis) == null ? void 0 : p.animatedScroll) ?? 0)
                    }
                }))) : (f.value, document.documentElement.style.overflow = "", H.lenis && (H.lenis.start(), setTimeout(() => {
                    setTimeout(() => {
                        u.to(a.value, {
                            opacity: 0,
                            duration: .5,
                            onStart: () => {},
                            onComplete: () => {
                                v.value = !1
                            }
                        })
                    }, 100)
                }, 300)))
            }), (d, n) => {
                const p = Ge,
                    c = Te,
                    o = ge,
                    h = ce,
                    j = je;
                return y(v) ? (S(), E("div", {
                    key: 0,
                    class: "fixed inset-0 w-full h-full bg-black p-[10px] z-[101] opacity-0",
                    ref_key: "root",
                    ref: a,
                    style: {
                        overflow: "auto",
                        "overscroll-behavior": "contain"
                    }
                }, [e("div", Ju, [e("div", Yu, [e("button", {
                    id: "closeReservation",
                    "aria-label": "Close Reservation",
                    onClick: n[0] || (n[0] = C => ("general" in d ? d.general : y(H)).thirdMobileGalleryDetails = !1),
                    class: "w-[52px] h-[52px] bg-black absolute rounded-full flex z-[10] top-[25px] justify-center items-center overflow-hidden"
                }, [n[1] || (n[1] = e("div", {
                    class: "absolute h-full w-full scale-0 rounded-full will-change-transform bg-white"
                }, null, -1)), t(p, {
                    color: y(k).white,
                    class: "w-[20px] rotate-[45deg]"
                }, null, 8, ["color"])]), e("div", {
                    class: "overflow-y-scroll scrollbar-hide relative h-[100dvh] pb-[160px] pt-[70px] bg-darkBrown touch-auto",
                    style: {
                        overflow: "auto",
                        "overscroll-behavior": "contain"
                    },
                    ref_key: "inner",
                    ref: f
                }, [e("div", Ku, [t(c, null, {
                    default: s(() => n[2] || (n[2] = [l("Details")])),
                    _: 1
                }), t(o, {
                    class: "!text-white"
                }, {
                    default: s(() => n[3] || (n[3] = [l("(Desert Capsule®)")])),
                    _: 1
                })]), e("div", Xu, [t(h, {
                    alt: "Map Capsules Image",
                    src: "/images/cap3-mobile.png",
                    class: "object-cover object-center absolute w-full h-full"
                })]), t(o, {
                    class: "mt-[30px]"
                }, {
                    default: s(() => n[4] || (n[4] = [l("With its striking architecture and upscale amenities, Desert Capsule® offers an exclusive retreat in the heart of the desert.")])),
                    _: 1
                }), e("div", Qu, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[5] || (n[5] = [l("Square footage")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[6] || (n[6] = [l("28m2")])),
                    _: 1
                }), n[7] || (n[7] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", e2, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[8] || (n[8] = [l("Bed")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[9] || (n[9] = [l("King Size")])),
                    _: 1
                }), n[10] || (n[10] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", t2, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[11] || (n[11] = [l("Shifting Window")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[12] || (n[12] = [l("Available")])),
                    _: 1
                }), n[13] || (n[13] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", l2, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[14] || (n[14] = [l("Air Condition")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[15] || (n[15] = [l("Available")])),
                    _: 1
                }), n[16] || (n[16] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", o2, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[17] || (n[17] = [l("Jacuzzi")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[18] || (n[18] = [l("Available")])),
                    _: 1
                }), n[19] || (n[19] = e("div", {
                    class: "absolute bottom-0 @h-[1] w-full bg-white opacity-[0.2]"
                }, null, -1))]), e("div", s2, [t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[20] || (n[20] = [l("Terrace")])),
                    _: 1
                }), t(o, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => n[21] || (n[21] = [l("None")])),
                    _: 1
                })]), e("a", {
                    class: "cursor-pointer",
                    onClick: i
                }, [t(o, {
                    class: "!font-normal text-left mt-[18px] underline"
                }, {
                    default: s(() => [t(j, {
                        color: y(k).lightBrown
                    }, {
                        default: s(() => n[22] || (n[22] = [l("Ready to reserve?")])),
                        _: 1
                    }, 8, ["color"])]),
                    _: 1
                })])], 512)]), e("div", n2, [e("div", r2, [e("div", null, [t(o, null, {
                    default: s(() => n[23] || (n[23] = [l("Cost")])),
                    _: 1
                })]), e("div", null, [t(o, null, {
                    default: s(() => n[24] || (n[24] = [e("span", {
                        class: "text-white"
                    }, "2250.00 USD", -1), l(" / Night")])),
                    _: 1
                })])])])])], 512)) : Ie("", !0)
            }
        }
    }),
    i2 = {
        class: "flex bg-darkBrown h-full w-full rounded-[30px] flex-col justify-between overflow-hidden"
    },
    u2 = {
        class: "flex flex-col p-[20px] pt-[0]"
    },
    d2 = {
        class: "flex flex-col gap-[5px] mt-[30px]"
    },
    c2 = {
        class: "w-[129px] h-full rounded-[11px] relative overflow-hidden flex items-center justify-center"
    },
    f2 = {
        class: "flex relative items-center justify-center ml-[26px]"
    },
    p2 = {
        class: "w-[129px] h-full rounded-[11px] relative overflow-hidden flex items-center justify-center"
    },
    v2 = {
        class: "flex relative items-center justify-center ml-[26px]"
    },
    m2 = {
        class: "w-[129px] h-full rounded-[11px] relative overflow-hidden flex items-center justify-center"
    },
    w2 = {
        class: "flex relative items-center justify-center ml-[26px]"
    },
    x2 = {
        class: "flex w-full mt-[30px] @mb-[60]"
    },
    h2 = {
        class: "flex-1 mr-[10px]"
    },
    b2 = {
        class: "absolute right-0 top-[4px]"
    },
    g2 = {
        class: "flex-1"
    },
    y2 = {
        class: "absolute right-0 top-[4px]"
    },
    _2 = {
        class: "overflow-y-scroll scrollbar-hide relative h-[100dvh] pb-[160px] pt-[70px] bg-darkBrown touch-auto",
        style: {
            overflow: "auto",
            "overscroll-behavior": "contain"
        }
    },
    C2 = {
        href: "mailto:hello@moyra.co",
        class: "text-white"
    },
    k2 = {
        class: "flex mt-[30px] gap-[10px]"
    },
    $2 = {
        href: "https://moyra.co/inquiry",
        target: "_blank"
    },
    j2 = {
        href: "https://moyra.co/",
        target: "_blank"
    },
    H2 = {
        class: "p-[10px]"
    },
    B2 = {
        key: 0,
        class: "bg-black w-[calc(100%-40px)] h-[72px] rounded-[24px] flex justify-between items-center px-[24px] absolute bottom-[20px] left-[20px]"
    },
    M2 = {
        class: "flex w-full justify-center items-center"
    },
    T2 = {
        class: "flex w-full"
    },
    O2 = {
        class: "flex flex-col"
    },
    L2 = {
        class: "flex flex-col"
    },
    S2 = {
        viewBox: "0 0 24 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    R2 = ["fill"],
    E2 = {
        key: 1,
        class: "w-[calc(100%-40px)] h-[30vh] bg-white rounded-[30px] fixed bottom-[20px] left-[20px] overflow-hidden flex justify-center items-center pointer-events-none"
    },
    A2 = oe({
        __name: "MobileReservation2",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(0),
                v = r(!1),
                i = r(null),
                d = r(null),
                n = r(null),
                p = r(null),
                c = r(null),
                o = r(null),
                h = r(0),
                j = r(null),
                C = r(null),
                O = r(!1),
                T = r(!1),
                _ = r(null),
                b = r(null),
                M = r(null),
                I = r(null),
                g = r(!1);
            ze(M, X => {
                O.value = !1
            }), ze(I, X => {
                T.value = !1
            });
            const x = () => {
                    g.value = !0
                },
                q = me(() => {
                    if (j.value && C.value) {
                        const X = new Date(j.value),
                            L = new Date(C.value),
                            Q = String(X.getMonth() + 1).padStart(2, "0"),
                            R = String(X.getDate()).padStart(2, "0"),
                            G = String(L.getMonth() + 1).padStart(2, "0"),
                            N = String(L.getDate()).padStart(2, "0");
                        return `${R}.${Q} - ${N}.${G}`
                    }
                    return ""
                }),
                A = me(() => {
                    var X, L, Q, R, G, N;
                    if (h.value == 0) return 2e3 * Math.ceil(((((X = C.value) == null ? void 0 : X.getTime()) ?? 0) - (((L = j.value) == null ? void 0 : L.getTime()) ?? 0)) / (1e3 * 60 * 60 * 24));
                    if (h.value == 1) return 2500 * Math.ceil(((((Q = C.value) == null ? void 0 : Q.getTime()) ?? 0) - (((R = j.value) == null ? void 0 : R.getTime()) ?? 0)) / (1e3 * 60 * 60 * 24));
                    if (h.value == 2) return 2250 * Math.ceil(((((G = C.value) == null ? void 0 : G.getTime()) ?? 0) - (((N = j.value) == null ? void 0 : N.getTime()) ?? 0)) / (1e3 * 60 * 60 * 24))
                }),
                P = me({
                    get() {
                        return j.value ? new Date(j.value).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit"
                        }) : ""
                    },
                    set(X) {}
                }),
                W = me({
                    get() {
                        return C.value ? new Date(C.value).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit"
                        }) : ""
                    },
                    set(X) {}
                }),
                ne = X => {
                    var L;
                    u.to(i.value, {
                        scale: 80,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to((L = p.value) == null ? void 0 : L.$el, {
                        color: `${k.black}`,
                        duration: .5,
                        ease: "power1.inOut"
                    })
                },
                ee = X => {
                    var L, Q, R, G, N, z, le, U, re;
                    h.value = X, X == 0 && (u.to([d.value, n.value], {
                        backgroundColor: `${k.lightBrown}`,
                        scale: 1,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to([(L = c.value) == null ? void 0 : L.$el, (Q = o.value) == null ? void 0 : Q.$el], {
                        color: `${k.white}`,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to(i.value, {
                        backgroundColor: `${k.white}`,
                        duration: .5,
                        scale: 80,
                        ease: "power1.inOut"
                    }), u.to([(R = p.value) == null ? void 0 : R.$el], {
                        color: `${k.black}`,
                        duration: .5,
                        ease: "power1.inOut"
                    })), X == 1 && (u.to([i.value, n.value], {
                        backgroundColor: `${k.lightBrown}`,
                        scale: 1,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to([(G = p.value) == null ? void 0 : G.$el, (N = o.value) == null ? void 0 : N.$el], {
                        color: `${k.white}`,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to(d.value, {
                        backgroundColor: `${k.white}`,
                        duration: .5,
                        scale: 80,
                        ease: "power1.inOut"
                    }), u.to([(z = c.value) == null ? void 0 : z.$el], {
                        color: `${k.black}`,
                        duration: .5,
                        ease: "power1.inOut"
                    })), X == 2 && (u.to([i.value, d.value], {
                        backgroundColor: `${k.lightBrown}`,
                        scale: 1,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to([(le = p.value) == null ? void 0 : le.$el, (U = c.value) == null ? void 0 : U.$el], {
                        color: `${k.white}`,
                        duration: .5,
                        ease: "power1.inOut"
                    }), u.to(n.value, {
                        backgroundColor: `${k.white}`,
                        duration: .5,
                        scale: 80,
                        ease: "power1.inOut"
                    }), u.to([(re = o.value) == null ? void 0 : re.$el], {
                        color: `${k.black}`,
                        duration: .5,
                        ease: "power1.inOut"
                    }))
                };
            return ae(() => H.reservationOpenButton, async X => {
                var L;
                X ? (g.value = !1, v.value = !0, await K(), (L = H.lenis) == null || L.stop(), document.documentElement.style.overflow = "hidden", document.body.style.overflow = "hidden", h.value = 0, ne(), a.value && f.value && (new ot({
                    autoRaf: !0,
                    wrapper: a.value,
                    content: f.value
                }), u.to(a.value, {
                    opacity: 1,
                    duration: .5,
                    onComplete: () => {
                        var Q;
                        f.value && (m.value = ((Q = H.lenis) == null ? void 0 : Q.animatedScroll) ?? 0)
                    }
                }))) : (f.value, document.documentElement.style.overflow = "", H.lenis && (H.lenis.start(), setTimeout(() => {
                    setTimeout(() => {
                        u.to(a.value, {
                            opacity: 0,
                            duration: .5,
                            onStart: () => {},
                            onComplete: () => {
                                v.value = !1, g.value = !1
                            }
                        })
                    }, 100)
                }, 300)))
            }), te(() => {
                j.value = new Date, C.value = new Date, C.value.setDate(j.value.getDate() + 5)
            }), (X, L) => {
                const Q = Ge,
                    R = Te,
                    G = ge,
                    N = ce,
                    z = Ut,
                    le = At,
                    U = je,
                    re = zt,
                    ue = he;
                return y(v) ? (S(), E("div", {
                    key: 0,
                    class: "fixed inset-0 w-full h-full bg-black p-[10px] z-[101] opacity-0",
                    ref_key: "root",
                    ref: a
                }, [e("div", i2, [e("div", u2, [e("button", {
                    id: "closeReservation",
                    "aria-label": "Close Reservation",
                    onClick: L[0] || (L[0] = F => ("general" in X ? X.general : y(H)).reservationOpenButton = !1),
                    class: "w-[52px] h-[52px] bg-black absolute rounded-full flex z-[10] top-[25px] justify-center items-center overflow-hidden"
                }, [L[12] || (L[12] = e("div", {
                    class: "absolute h-full w-full scale-0 rounded-full will-change-transform bg-white"
                }, null, -1)), t(Q, {
                    color: y(k).white,
                    class: "w-[20px] rotate-[45deg]"
                }, null, 8, ["color"])]), ve(e("div", {
                    class: "overflow-y-scroll scrollbar-hide relative h-[100dvh] pb-[160px] pt-[70px] bg-darkBrown touch-auto",
                    style: {
                        overflow: "auto",
                        "overscroll-behavior": "contain"
                    },
                    ref_key: "inner",
                    ref: f
                }, [t(R, {
                    class: "mt-[30px]"
                }, {
                    default: s(() => L[13] || (L[13] = [l("Make it memorable and reserve one of our—Capsules®")])),
                    _: 1
                }), t(G, {
                    class: "!font-semibold mt-[30px]"
                }, {
                    default: s(() => L[14] || (L[14] = [l("Ready to start your journey to a desert adventure? Secure your capsule by filling out the reservation form.We hope to see you soon!")])),
                    _: 1
                }), t(G, {
                    class: "!font-semibold mt-[30px] !text-white"
                }, {
                    default: s(() => L[15] || (L[15] = [l("(1) Which capsule you would like to reserve?")])),
                    _: 1
                }), e("div", d2, [e("div", {
                    ref: "firstCapsule",
                    onClick: L[1] || (L[1] = F => ee(0)),
                    class: "bg-black h-[80px] flex rounded-[14px] items-center p-[4px] transition-colors cursor-pointer relative overflow-hidden"
                }, [e("div", {
                    class: "absolute w-[10px] h-[10px] left-[20%] rounded-full bg-white m-auto pointer-events-none",
                    ref_key: "firstCapsuleCircle",
                    ref: i
                }, null, 512), e("div", c2, [t(N, {
                    src: "/images/cap1-mobile.png",
                    alt: "Classic Capsule Map",
                    class: "object-cover object-center absolute w-full h-full"
                })]), e("div", f2, [t(G, {
                    class: "text-center",
                    ref_key: "firstCapsuleText",
                    ref: p,
                    color: y(k).white
                }, {
                    default: s(() => L[16] || (L[16] = [l("Classic C®")])),
                    _: 1
                }, 8, ["color"])])], 512), e("div", {
                    ref: "secondCapsule",
                    onClick: L[2] || (L[2] = F => ee(1)),
                    class: "bg-black h-[80px] flex rounded-[14px] items-center p-[4px] transition-colors cursor-pointer relative overflow-hidden"
                }, [e("div", {
                    class: "absolute w-[10px] h-[10px] left-[20%] rounded-full bg-white m-auto pointer-events-none",
                    ref_key: "secondCapsuleCircle",
                    ref: d
                }, null, 512), e("div", p2, [t(N, {
                    src: "/images/cap2-mobile.png",
                    alt: "Classic Capsule Map 2",
                    class: "object-cover object-center absolute w-full h-full"
                })]), e("div", v2, [t(G, {
                    class: "text-center",
                    color: y(k).white,
                    ref_key: "secondCapsuleText",
                    ref: c
                }, {
                    default: s(() => L[17] || (L[17] = [l("Terrace C®")])),
                    _: 1
                }, 8, ["color"])])], 512), e("div", {
                    ref: "thirdCapsule",
                    onClick: L[3] || (L[3] = F => ee(2)),
                    class: "bg-black h-[80px] flex rounded-[14px] items-center p-[4px] transition-colors cursor-pointer relative overflow-hidden"
                }, [e("div", {
                    class: "absolute w-[10px] h-[10px] left-[20%] rounded-full bg-white m-auto pointer-events-none",
                    ref_key: "thirdCapsuleCircle",
                    ref: n
                }, null, 512), e("div", m2, [t(N, {
                    src: "/images/cap3-mobile.png",
                    class: "object-cover object-center absolute w-full h-full"
                })]), e("div", w2, [t(G, {
                    class: "text-center",
                    color: y(k).white,
                    ref_key: "thirdCapsuleText",
                    ref: o
                }, {
                    default: s(() => L[18] || (L[18] = [l("Desert C®")])),
                    _: 1
                }, 8, ["color"])])], 512)]), t(G, {
                    class: "!font-semibold mt-[30px] !text-white"
                }, {
                    default: s(() => L[19] || (L[19] = [l("(2) How long you would like to stay and when? ")])),
                    _: 1
                }), e("div", x2, [e("div", h2, [e("div", {
                    class: "relative",
                    ref_key: "checkInInput",
                    ref: M,
                    onClick: L[7] || (L[7] = F => {
                        O.value = !0, T.value = !1
                    })
                }, [ve(e("input", {
                    type: "text",
                    placeholder: "Check-in",
                    "onUpdate:modelValue": L[4] || (L[4] = F => Re(P) ? P.value = F : null),
                    disabled: "",
                    class: "bg-darkBrown pointer-events-none text-lightBrown placeholder-lightBrown ring-0 text-[13px] focus:outline-none @pb-[20] cursor-pointer"
                }, null, 512), [
                    [it, y(P)]
                ]), L[20] || (L[20] = e("div", {
                    class: "absolute w-full h-[1px] bg-lightBrown"
                }, null, -1)), e("div", {
                    class: "absolute w-[0px] h-[1px] bg-white",
                    ref_key: "whiteLine1",
                    ref: _
                }, null, 512), e("div", b2, [t(z, {
                    class: "w-[15px] h-[15px]",
                    color: y(k).white
                }, null, 8, ["color"])]), t(ut, {
                    name: "fade"
                }, {
                    default: s(() => [ve(e("div", null, [t(le, {
                        class: "mobile-left",
                        modelValue: y(j),
                        "onUpdate:modelValue": [L[5] || (L[5] = F => Re(j) ? j.value = F : null), L[6] || (L[6] = F => O.value = !1)],
                        mode: "date",
                        expanded: "",
                        "min-date": Date()
                    }, null, 8, ["modelValue", "min-date"])], 512), [
                        [$e, y(O)]
                    ])]),
                    _: 1
                })], 512)]), e("div", g2, [e("div", {
                    class: "relative",
                    ref_key: "checkOutInput",
                    ref: I,
                    onClick: L[11] || (L[11] = F => {
                        T.value = !0, O.value = !1
                    })
                }, [ve(e("input", {
                    type: "text",
                    "onUpdate:modelValue": L[8] || (L[8] = F => Re(W) ? W.value = F : null),
                    placeholder: "Check-out",
                    class: "bg-darkBrown pointer-events-none text-lightBrown placeholder-lightBrown ring-0 text-[13px] focus:outline-none @pb-[20] cursor-pointer"
                }, null, 512), [
                    [it, y(W)]
                ]), L[21] || (L[21] = e("div", {
                    class: "absolute w-full h-[1px] bg-lightBrown"
                }, null, -1)), e("div", {
                    class: "absolute w-[0px] h-[1px] bg-white",
                    ref_key: "whiteLine2",
                    ref: b
                }, null, 512), e("div", y2, [t(z, {
                    class: "w-[15px] h-[15px]",
                    color: y(k).white
                }, null, 8, ["color"])]), t(ut, {
                    name: "fade"
                }, {
                    default: s(() => [ve(e("div", null, [t(le, {
                        class: "mobile-right",
                        modelValue: y(C),
                        "onUpdate:modelValue": [L[9] || (L[9] = F => Re(C) ? C.value = F : null), L[10] || (L[10] = F => T.value = !1)],
                        mode: "date",
                        expanded: "",
                        "min-date": Date()
                    }, null, 8, ["modelValue", "min-date"])], 512), [
                        [$e, y(T)]
                    ])]),
                    _: 1
                })], 512)])])], 512), [
                    [$e, !y(g)]
                ]), ve(e("div", _2, [t(R, {
                    class: "mt-[30px]"
                }, {
                    default: s(() => L[22] || (L[22] = [l("Thank you for your"), e("br", null, null, -1), l("interest—but you can't"), e("br", null, null, -1), l("go further :(")])),
                    _: 1
                }), t(G, {
                    class: "!font-semibold mt-[30px] pr-[20px]"
                }, {
                    default: s(() => [L[24] || (L[24] = l("This website is just the concept work done by Moyra— a premium digital lab. If you like this project and would like to outsource something similar, don’t hesitate to contact us. Click the below button or use our email: ")), e("a", C2, [t(U, {
                        color: y(k).white
                    }, {
                        default: s(() => L[23] || (L[23] = [l("hello@moyra.co")])),
                        _: 1
                    }, 8, ["color"])])]),
                    _: 1
                }), e("div", k2, [e("a", $2, [t(re, {
                    class: "z-[10] !mx-[0]",
                    ref: "reserveButton"
                }, {
                    default: s(() => L[25] || (L[25] = [l("Inquiry")])),
                    _: 1
                }, 512)]), e("a", j2, [t(re, {
                    class: "z-[10] !mx-[0]",
                    ref: "reserveButton"
                }, {
                    default: s(() => L[26] || (L[26] = [l("Moyra")])),
                    _: 1
                }, 512)])])], 512), [
                    [$e, y(g)]
                ])]), e("div", H2, [y(g) ? (S(), E("div", E2, [t(N, {
                    src: "/images/cap2.png",
                    ref: "image",
                    class: "object-cover object-center absolute scale-[1.3] w-full h-full"
                }, null, 512), t(ue, {
                    color: y(k).white,
                    class: "max-w-[225px] w-full scale-[1]",
                    ref: "logo"
                }, null, 8, ["color"])])) : (S(), E("div", B2, [e("div", M2, [e("div", T2, [e("div", O2, [t(G, {
                    class: "!font-normal"
                }, {
                    default: s(() => L[27] || (L[27] = [l("Stay")])),
                    _: 1
                }), t(G, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => [l(Oe(y(q)), 1)]),
                    _: 1
                })]), L[29] || (L[29] = e("div", {
                    class: "flex"
                }, [e("div", {
                    class: "h-full w-[1px] bg-lightBrown mx-[15px] opacity-[0.2]"
                })], -1)), e("div", L2, [t(G, {
                    class: "!font-normal"
                }, {
                    default: s(() => L[28] || (L[28] = [l("Cost")])),
                    _: 1
                }), t(G, {
                    class: "!font-normal !text-white"
                }, {
                    default: s(() => [l(Oe(y(A)) + " USD", 1)]),
                    _: 1
                })])]), e("div", {
                    onClick: x,
                    class: "h-[50px] aspect-square aspect-square rounded-full bg-white px-[15px] items-center justify-center flex flex-col will-change-[transform] translate-z-0"
                }, [(S(), E("svg", S2, [e("path", {
                    d: "M19.5369 11.9816L0.641607 11.9816L0.641607 10.0375L19.5369 10.0375L11.3665 1.8671L12.7913 0.442382L23.3584 11.0095L12.8098 21.5581L11.4036 20.152L19.5369 11.9816Z",
                    fill: y(k).black
                }, null, 8, R2)]))])])]))])])], 512)) : Ie("", !0)
            }
        }
    }),
    z2 = {
        key: 0,
        class: "w-full h-full"
    },
    P2 = {
        class: "w-full h-full flex justify-center items-center"
    },
    W2 = {
        class: "absolute flex bottom-[50px] justify-center items-center w-full text-center"
    },
    I2 = oe({
        __name: "MobilePreloader",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(null),
                d = r(null),
                n = r(!1),
                p = r(!1);
            let c;
            return te(async () => {
                var j, C, O, T;
                await K();
                const o = (j = i.value) == null ? void 0 : j.$el.querySelectorAll("path");
                let h = 0;
                o.forEach(_ => {
                    const b = _.getBBox();
                    b.width > h && (h = b.width)
                }), u.set((C = i.value) == null ? void 0 : C.$el.querySelectorAll("path"), {
                    clipPath: "inset(0% 100% 0% 0%)",
                    x: h
                }), c = u.timeline({
                    onComplete: () => {
                        var _, b, M;
                        u.set(a.value, {
                            position: "relative"
                        }), (_ = f.value) == null || _.classList.remove("preloader", "bg-black", "h-full", "w-full"), (b = H.lenis) == null || b.start(), (M = H.lenis) == null || M.resize(), p.value = !0
                    }
                }), c.to(m.value, {
                    opacity: 1,
                    duration: .3,
                    ease: "power2.inOut"
                }), c.addLabel("logo"), c.to((O = i.value) == null ? void 0 : O.$el.querySelectorAll("path"), {
                    clipPath: "inset(0% 0% 0% 0%)",
                    stagger: .01,
                    x: 0,
                    duration: .6,
                    ease: "power1.inOut"
                }, "logo"), c.to(v.value, {
                    duration: 1,
                    width: "50%",
                    onStart: () => {
                        n.value = !0
                    },
                    ease: "power1.inOut"
                }, "logo"), c.to(v.value, {
                    duration: 1,
                    width: "60%",
                    ease: "power2.inOut"
                }), c.to(v.value, {
                    duration: .6,
                    width: "100%",
                    ease: "power2.inOut"
                }), c.addLabel("dissapear"), c.to((T = i.value) == null ? void 0 : T.$el.querySelectorAll("path"), {
                    clipPath: "inset(0% 100% 0% 0%)",
                    stagger: .01,
                    x: h,
                    duration: .6,
                    ease: "power1.inOut"
                }, "dissapear"), c.to(m.value, {
                    duration: .5,
                    opacity: 0,
                    ease: "power2.inOut"
                }, "dissapear"), c.to(f.value, {
                    duration: .9,
                    "--height": () => window.innerHeight + "px",
                    ease: "power1.inOut",
                    onStart: () => {
                        var _;
                        (_ = d.value) == null || _.reverse()
                    }
                }, "dissapear")
            }), (o, h) => {
                const j = he,
                    C = wt;
                return S(), E("div", {
                    ref_key: "container",
                    ref: a,
                    class: "absolute w-full h-full z-[10]"
                }, [e("div", {
                    ref_key: "root",
                    ref: f,
                    style: {
                        "--height": "10vh"
                    },
                    class: "flex h-full w-full justify-center items-center bg-black preloader"
                }, [y(n) ? (S(), E("div", z2, [xe(o.$slots, "default")])) : Ie("", !0), y(p) ? Ie("", !0) : (S(), E("div", {
                    key: 1,
                    class: "absolute w-screen h-screen bg-darkBrown opacity-0 flex items-center pointer-events-none",
                    ref_key: "capsule",
                    ref: m
                }, [e("div", P2, [t(j, {
                    ref_key: "logo",
                    ref: i,
                    color: y(k).white,
                    class: "absolute z-[10] mix-blend-exclusion overflow-hidden @h-[120]"
                }, null, 8, ["color"])]), e("div", {
                    class: "absolute bg-white h-full",
                    ref_key: "loader",
                    ref: v
                }, null, 512)], 512))], 512), e("div", W2, [t(ge, null, {
                    default: s(() => [t(C, {
                        ref_key: "bottomText",
                        ref: d
                    }, {
                        default: s(() => h[0] || (h[0] = [l("Meet Capsules®—modern and cozy "), e("br", null, null, -1), l("houses, in the California desert.")])),
                        _: 1
                    }, 512)]),
                    _: 1
                })])], 512)
            }
        }
    }),
    q2 = {
        __name: "MobileLenis",
        setup($) {
            const a = r(null);
            return te(() => {
                Ne.defaults({
                    smoothScrolling: !1
                }), H.lenis = new ot({
                    orientation: "vertical",
                    gestureOrientation: "vertical",
                    smoothTouch: !0
                }), H.lenis.on("scroll", Ne.update), u.ticker.add(f => {
                    H.lenis.raf(f * 750)
                }), u.ticker.lagSmoothing(0), H.lenis.stop(), H.lenis.scrollTo(0, {
                    immediate: !0,
                    force: !0
                })
            }), (f, m) => (S(), E("div", null, [e("div", {
                class: "scroll scrollbar-hide",
                ref_key: "root",
                ref: a
            }, [xe(f.$slots, "default")], 512)]))
        }
    },
    Tt = oe({
        __name: "Mask",
        setup($) {
            const a = r(null);
            return ae(() => H.toggleMask, f => {
                f && u.to(a.value, {
                    opacity: 1,
                    duration: .5,
                    ease: "power2.inOut",
                    onComplete: () => {
                        u.to(a.value, {
                            opacity: 0,
                            duration: .5,
                            ease: "power2.inOut",
                            delay: .3,
                            onComplete: () => {
                                H.toggleMask = !1
                            }
                        })
                    }
                })
            }), (f, m) => (S(), E("div", {
                ref_key: "root",
                ref: a,
                class: "fixed inset-0 z-[101] flex items-center justify-center bg-black opacity-0 pointer-events-none"
            }, null, 512))
        }
    }),
    D2 = oe({
        __name: "MobileFooterLink",
        props: {
            text: {
                type: String
            },
            section: {
                type: String
            },
            offset: {
                type: Number,
                default: 0
            },
            shouldResetCapsules: {
                type: Boolean,
                default: !1
            }
        },
        setup($) {
            const a = $,
                f = r(null),
                m = r(null),
                v = r(null);
            let i;
            const d = () => {
                const c = document.querySelector("#" + a.section);
                c && (H.toggleMask = !0, setTimeout(() => {
                    var o;
                    H.hideTopbar = !0, (o = H.lenis) == null || o.scrollTo(c, {
                        duration: .5,
                        offset: -a.offset,
                        force: !0,
                        immediate: !0,
                        onComplete: () => {
                            a.shouldResetCapsules && (H.shouldResetCapsules = !0)
                        }
                    })
                }, 500))
            };
            te(async () => {
                var c, o, h;
                await K(), i = u.timeline({
                    paused: !0
                }), i.addLabel("start"), i.to(m.value, {
                    y: -(((c = m.value) == null ? void 0 : c.getBoundingClientRect().height) || 0) * 1.1,
                    ease: "power3.inOut"
                }, "start"), i.to(v.value, {
                    y: 0,
                    ease: "power3.inOut",
                    color: k.lightBrown
                }, "start"), (o = f.value) == null || o.addEventListener("mouseenter", n), (h = f.value) == null || h.addEventListener("mouseleave", p)
            });
            const n = () => {
                    i == null || i.play()
                },
                p = () => {
                    i == null || i.reverse()
                };
            return lt(() => {
                var c, o;
                (c = f.value) == null || c.removeEventListener("mouseenter", n), (o = f.value) == null || o.removeEventListener("mouseleave", p)
            }), (c, o) => {
                const h = pt;
                return S(), E("div", null, [e("a", {
                    onClick: d,
                    class: "cursor-pointer",
                    ref_key: "root",
                    ref: f
                }, [t(h, {
                    class: "text-white relative overflow-hidden"
                }, {
                    default: s(() => [e("div", {
                        ref_key: "text",
                        ref: m
                    }, Oe(a.text), 513), e("div", {
                        class: "absolute translate-y-[100%] top-0 left-0",
                        ref_key: "text2",
                        ref: v
                    }, Oe(a.text), 513)]),
                    _: 1
                })], 512)])
            }
        }
    }),
    V2 = oe({
        __name: "MobileReserveNow",
        setup($) {
            const a = r(null),
                f = r(null),
                m = r(null),
                v = r(null),
                i = r(null);
            r(null), r(null);
            const {
                $mouseFollower: d
            } = dt();
            let n;
            return te(async () => {
                var p, c;
                await K(), n = u.timeline({
                    scrollTrigger: {
                        trigger: f.value,
                        start: "-50% center",
                        end: "bottom center",
                        scrub: 1
                    }
                }), n.addLabel("start"), n.to(f.value, {
                    borderRadius: () => {
                        const h = window.innerWidth;
                        return `${(60/1920*h).toFixed(2)}px`
                    },
                    ease: "linear"
                }, "start"), n.to((p = m.value) == null ? void 0 : p.$el, {
                    scale: 1
                }, "start"), n.to((c = v.value) == null ? void 0 : c.$el, {
                    scale: 1
                }, "start"), n.to(i.value, {
                    opacity: .4
                }, "start"), await K()
            }), (p, c) => {
                const o = ce;
                return S(), E("div", null, [e("div", {
                    class: "p-[10px] h-[413px] w-full z-[10]",
                    ref_key: "container",
                    ref: a
                }, [e("div", {
                    class: "h-full @rounded-[140] relative overflow-hidden w-full flex justify-center items-center !cursor-none",
                    ref_key: "root",
                    ref: f,
                    onClick: c[0] || (c[0] = h => ("general" in p ? p.general : y(H)).reservationOpenButton = !0)
                }, [t(o, {
                    src: "/images/cap2.png",
                    ref_key: "image",
                    ref: m,
                    class: "object-cover object-center absolute scale-[1.4] w-full h-full"
                }, null, 512), e("video", {
                    preload: "metadata",
                    class: Be("pointer-events-none absolute object-cover object-center h-full w-full opacity-[0] mix-blend-hard-light"),
                    muted: "",
                    playsinline: "",
                    autoplay: "",
                    loop: "",
                    ref_key: "smoke",
                    ref: i
                }, c[1] || (c[1] = [e("source", {
                    src: Me,
                    type: "video/mp4"
                }, null, -1)]), 512), t(he, {
                    color: y(k).white,
                    class: "@max-w-[1030] w-full scale-[1.2]",
                    ref_key: "logo",
                    ref: v
                }, null, 8, ["color"])], 512)], 512)])
            }
        }
    }),
    Z2 = {
        class: "flex @px-[40] mt-[100px] mb-[30px]"
    },
    F2 = {
        class: "px-[20px] mt-[50px] flex flex-col gap-[3px]"
    },
    N2 = {
        class: "flex justify-between items-center @py-[200] px-[20px]"
    },
    G2 = {
        target: "_blank",
        href: "https://moyra.co",
        class: "text-white hover:opacity-[0.5] transition-opacity cursor-pointer"
    },
    U2 = {
        class: "flex justify-between items-center px-[20px] pb-[50px]"
    },
    J2 = {
        class: "flex items-center py-[50px] px-[20px]"
    },
    Y2 = {
        class: "flex-1"
    },
    K2 = {
        href: "https://moyra.co",
        target: "_blank",
        class: "text-white underline hover:opacity-[0.5] transition-opacity cursor-pointer"
    },
    X2 = {
        class: "flex w-full"
    },
    Q2 = oe({
        __name: "MobileFooter",
        setup($) {
            let a;
            const f = r(null),
                m = r(null);
            return me(() => window.innerHeight * 6), te(async () => {
                await K();
                const v = m.value.querySelectorAll("path");
                let i = 0;
                v.forEach(d => {
                    const n = d.getBBox();
                    n.width > i && (i = n.width)
                }), u.set(m.value.querySelectorAll("path"), {
                    clipPath: "inset(0% 0% 0% 100%)",
                    x: i
                }), a = u.timeline({
                    scrollTrigger: {
                        trigger: f.value,
                        start: "80% 80%",
                        end: "bottom 80%",
                        toggleActions: "play none none reverse"
                    }
                }), a.addLabel("start"), a.to(m.value.querySelectorAll("path"), {
                    clipPath: "inset(0% 0% 0% 0%)",
                    stagger: .01,
                    x: 0,
                    duration: .9,
                    ease: "power3.inOut"
                }, "start")
            }), (v, i) => {
                const d = ge,
                    n = Dt,
                    p = D2,
                    c = pt,
                    o = je,
                    h = Jt;
                return S(), E("footer", {
                    class: "mt-[140px] relative overflow-hidden",
                    ref_key: "root",
                    ref: f
                }, [t(V2), e("div", Z2, [t(d, {
                    class: "!font-semibold !text-white"
                }, {
                    default: s(() => i[0] || (i[0] = [l(" Interested in an amazing adventure?"), e("br", null, null, -1), l("Reserve one of our Capsules®")])),
                    _: 1
                })]), t(n), e("div", F2, [t(p, {
                    text: "Welcome",
                    section: "hero",
                    offset: 0,
                    shouldResetCapsules: !0
                }), t(p, {
                    text: "Introduction",
                    section: "welcome",
                    offset: 0,
                    shouldResetCapsules: !0
                }), t(p, {
                    text: "Houses",
                    section: "choose",
                    offset: 0,
                    shouldResetCapsules: !0
                }), t(p, {
                    text: "Why Capsules®",
                    section: "capsules",
                    shouldResetCapsules: !1,
                    offset: 0
                }), t(p, {
                    text: "Activities",
                    section: "discover",
                    offset: 0,
                    shouldResetCapsules: !1
                }), t(p, {
                    text: "Feedback",
                    section: "reviews",
                    offset: 350,
                    shouldResetCapsules: !1
                })]), e("div", N2, [e("div", null, [t(c, {
                    class: "!font-normal !text-lightBrown"
                }, {
                    default: s(() => i[1] || (i[1] = [l("This website is just the concept"), e("br", null, null, -1), l("work done by—Moyra to showcase"), e("br", null, null, -1), l("our capabilities. ")])),
                    _: 1
                }), t(c, {
                    class: "!font-normal !text-lightBrown @mt-[150]"
                }, {
                    default: s(() => [i[3] || (i[3] = l("If you would like to outsource a similar")), i[4] || (i[4] = e("br", null, null, -1)), i[5] || (i[5] = l("website project—")), e("a", G2, [t(o, {
                        color: y(k).white
                    }, {
                        default: s(() => i[2] || (i[2] = [l("contact us.")])),
                        _: 1
                    }, 8, ["color"])])]),
                    _: 1
                })]), i[6] || (i[6] = e("div", {
                    class: "flex flex-col text-right"
                }, null, -1))]), e("div", U2, [t(h)]), i[11] || (i[11] = e("div", {
                    class: "h-[1px] w-full bg-lightBrown"
                }, null, -1)), e("div", J2, [e("div", Y2, [t(d, {
                    class: "!font-normal"
                }, {
                    default: s(() => [i[8] || (i[8] = l("Website made by—")), e("a", K2, [t(o, {
                        color: y(k).white
                    }, {
                        default: s(() => i[7] || (i[7] = [l("Moyra.co")])),
                        _: 1
                    }, 8, ["color"])])]),
                    _: 1
                }), t(d, {
                    class: "!font-normal mt-[2px]"
                }, {
                    default: s(() => i[9] || (i[9] = [l("All right reserved © "), e("span", {
                        class: "text-white"
                    }, "2025", -1)])),
                    _: 1
                })])]), e("div", X2, [(S(), E("svg", {
                    class: "@h-[454] w-full",
                    viewBox: "0 0 261 61",
                    fill: "none",
                    ref_key: "logo",
                    ref: m,
                    xmlns: "http://www.w3.org/2000/svg"
                }, i[10] || (i[10] = [Rt('<defs><linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#B3A694"></stop><stop offset="100%" stop-color="#F5EFE6"></stop></linearGradient></defs><path d="M21.5038 47.5021C17.0797 47.5021 13.2511 46.5287 10.0181 44.5819C6.78508 42.5918 4.29651 39.8447 2.55238 36.3404C0.850796 32.7929 0 28.7046 0 24.0755C0 19.4032 0.850796 15.3149 2.55238 11.8106C4.29651 8.26312 6.78508 5.49433 10.0181 3.50426C13.2511 1.51418 17.0797 0.519149 21.5038 0.519149C26.7787 0.519149 31.0752 1.83865 34.3933 4.47766C37.7114 7.0734 39.8171 10.7291 40.7104 15.4447H32.9257C32.3727 12.8057 31.1177 10.7291 29.1609 9.21489C27.2466 7.70071 24.673 6.94362 21.44 6.94362C18.5047 6.94362 15.9736 7.63581 13.8466 9.02021C11.7197 10.3613 10.0606 12.3298 8.8695 14.9255C7.72093 17.478 7.14667 20.528 7.14667 24.0755C7.14667 27.623 7.72093 30.673 8.8695 33.2255C10.0606 35.7347 11.7197 37.6816 13.8466 39.066C15.9736 40.4503 18.5047 41.1426 21.44 41.1426C24.673 41.1426 27.2466 40.4071 29.1609 38.9362C31.0752 37.4652 32.3514 35.367 32.9895 32.6415H40.7743C39.8809 37.3571 37.754 41.0128 34.3933 43.6085C31.0752 46.2043 26.7787 47.5021 21.5038 47.5021Z" fill="url(#gradient)"></path><path d="M53.2565 47.5021C50.7892 47.5021 48.6835 47.0695 46.9394 46.2043C45.2378 45.2957 43.9403 44.106 43.047 42.6351C42.1962 41.1642 41.7708 39.5635 41.7708 37.833C41.7708 34.4152 42.9832 31.7762 45.4079 29.916C47.8327 28.0557 51.0232 27.1255 54.9794 27.1255C56.766 27.1255 58.3612 27.2769 59.765 27.5798C61.1689 27.8394 62.3174 28.1206 63.2108 28.4234V26.9309C63.2108 24.4216 62.5301 22.5613 61.1689 21.35C59.8501 20.1387 58.0848 19.533 55.8727 19.533C54.2136 19.533 52.746 19.8791 51.4698 20.5713C50.1936 21.2635 49.3854 22.4748 49.0451 24.2053H42.2813C42.5365 21.8691 43.3022 19.944 44.5784 18.4298C45.8971 16.8723 47.5349 15.7043 49.4917 14.9255C51.4485 14.1468 53.5755 13.7574 55.8727 13.7574C60.467 13.7574 63.9977 14.9255 66.465 17.2617C68.9749 19.5979 70.2298 22.8209 70.2298 26.9309V35.367C70.2298 37.011 70.3149 38.2007 70.485 38.9362C70.6977 39.6716 71.0168 40.1475 71.4422 40.3638C71.9101 40.5369 72.5269 40.6234 73.2927 40.6234H73.6117V46.7234H72.0803C69.9533 46.7234 68.1666 46.3989 66.7203 45.75C65.3165 45.1011 64.338 43.8032 63.785 41.8564C62.7641 43.4571 61.3816 44.7982 59.6374 45.8798C57.8933 46.9613 55.7663 47.5021 53.2565 47.5021ZM54.6603 41.9213C56.2768 41.9213 57.6593 41.5319 58.8079 40.7532C59.9565 39.9312 60.8711 38.8713 61.5517 37.5734C62.2749 36.2323 62.7216 34.8046 62.8917 33.2904C61.9558 33.0309 60.8498 32.7713 59.5736 32.5117C58.2974 32.2521 57 32.1223 55.6812 32.1223C53.4266 32.1223 51.725 32.5982 50.5765 33.55C49.4279 34.5018 48.8536 35.7564 48.8536 37.3138C48.8536 38.655 49.3641 39.7582 50.3851 40.6234C51.406 41.4886 52.8311 41.9213 54.6603 41.9213Z" fill="url(#gradient)"></path><path d="M76.208 61V14.5362H83.227V19.4681C84.2479 17.9539 85.6518 16.6344 87.4384 15.5096C89.2251 14.3415 91.4797 13.7574 94.2022 13.7574C97.2651 13.7574 99.9664 14.4929 102.306 15.9638C104.646 17.4347 106.475 19.4465 107.794 21.9989C109.155 24.5514 109.836 27.45 109.836 30.6947C109.836 33.8961 109.155 36.773 107.794 39.3255C106.475 41.878 104.646 43.8897 102.306 45.3606C99.9664 46.7883 97.2651 47.5021 94.2022 47.5021C91.7349 47.5021 89.5654 47.0046 87.6937 46.0096C85.8219 45.0145 84.333 43.6518 83.227 41.9213V61H76.208ZM92.926 41.2723C94.8403 41.2723 96.5206 40.8181 97.967 39.9096C99.4558 39.0011 100.604 37.7681 101.413 36.2106C102.263 34.6099 102.689 32.7713 102.689 30.6947C102.689 28.5748 102.263 26.7145 101.413 25.1138C100.604 23.4699 99.4558 22.2152 97.967 21.35C96.5206 20.4415 94.8403 19.9872 92.926 19.9872C91.0118 19.9872 89.3102 20.4415 87.8213 21.35C86.3749 22.2152 85.2264 23.4482 84.3756 25.0489C83.5673 26.6496 83.1632 28.5099 83.1632 30.6298C83.1632 32.7496 83.5673 34.6099 84.3756 36.2106C85.2264 37.7681 86.3749 39.0011 87.8213 39.9096C89.3102 40.8181 91.0118 41.2723 92.926 41.2723Z" fill="url(#gradient)"></path><path d="M124.945 47.5021C120.947 47.5021 117.607 46.5504 114.927 44.6468C112.29 42.7433 110.78 40.061 110.397 36.6H117.607C117.905 38.2007 118.735 39.4769 120.096 40.4287C121.457 41.3805 123.159 41.8564 125.201 41.8564C127.2 41.8564 128.731 41.4454 129.795 40.6234C130.901 39.8014 131.454 38.7847 131.454 37.5734C131.454 36.5784 131.092 35.8213 130.369 35.3021C129.689 34.783 128.412 34.372 126.541 34.0691C125.818 33.9394 124.967 33.8096 123.988 33.6798C123.01 33.5067 122.159 33.3337 121.436 33.1606C119.819 32.8578 118.288 32.3386 116.842 31.6032C115.438 30.8677 114.289 29.8727 113.396 28.6181C112.503 27.3202 112.056 25.6979 112.056 23.7511C112.056 20.939 113.098 18.5812 115.183 16.6777C117.267 14.7308 120.224 13.7574 124.052 13.7574C127.838 13.7574 130.88 14.6227 133.177 16.3532C135.517 18.0404 136.857 20.5713 137.197 23.9457H130.305C130.178 22.3883 129.518 21.2418 128.327 20.5064C127.136 19.7709 125.711 19.4032 124.052 19.4032C122.308 19.4032 120.925 19.7709 119.904 20.5064C118.884 21.2418 118.373 22.1504 118.373 23.2319C118.373 25.222 119.926 26.4982 123.031 27.0606C123.499 27.1472 124.031 27.2553 124.626 27.3851C125.265 27.4716 125.903 27.5798 126.541 27.7096C127.221 27.7961 127.796 27.8826 128.264 27.9691C129.37 28.0989 130.497 28.3585 131.645 28.7479C132.794 29.094 133.858 29.5915 134.836 30.2404C135.814 30.8894 136.601 31.7546 137.197 32.8362C137.792 33.9177 138.09 35.2805 138.09 36.9245C138.09 39.0011 137.558 40.8397 136.495 42.4404C135.474 43.9979 133.985 45.2308 132.028 46.1394C130.071 47.0479 127.711 47.5021 124.945 47.5021Z" fill="url(#gradient)"></path><path d="M152.342 47.5021C148.811 47.5021 145.982 46.2908 143.855 43.8681C141.728 41.4021 140.665 37.7681 140.665 32.966V14.5362H147.684V32.2521C147.684 35.2805 148.258 37.5734 149.407 39.1308C150.598 40.645 152.257 41.4021 154.384 41.4021C156.851 41.4021 158.787 40.5152 160.191 38.7415C161.595 36.9677 162.296 34.4369 162.296 31.1489V14.5362H169.315V46.7234H162.296V41.7266C161.361 43.5436 160.042 44.9713 158.34 46.0096C156.681 47.0046 154.682 47.5021 152.342 47.5021Z" fill="url(#gradient)"></path><path d="M173.66 46.7234V0H180.679V46.7234H173.66Z" fill="url(#gradient)"></path><path d="M199.816 47.5021C196.668 47.5021 193.882 46.8099 191.457 45.4255C189.075 43.9979 187.182 42.0294 185.778 39.5202C184.417 37.011 183.736 34.0908 183.736 30.7596C183.736 27.4284 184.417 24.4865 185.778 21.934C187.14 19.3383 189.033 17.3266 191.457 15.8989C193.882 14.4713 196.69 13.7574 199.88 13.7574C202.986 13.7574 205.687 14.4496 207.984 15.834C210.324 17.2184 212.132 19.0787 213.408 21.4149C214.684 23.7511 215.322 26.3684 215.322 29.267C215.322 29.6996 215.322 30.1755 215.322 30.6947C215.322 31.1706 215.28 31.7113 215.194 32.317H188.905V27.5149H208.303C208.175 25.0922 207.303 23.167 205.687 21.7394C204.113 20.3117 202.177 19.5979 199.88 19.5979C198.221 19.5979 196.69 19.9872 195.286 20.766C193.882 21.5014 192.755 22.6046 191.904 24.0755C191.053 25.5032 190.628 27.3418 190.628 29.5915V31.4085C190.628 33.5716 191.053 35.4319 191.904 36.9894C192.755 38.5035 193.861 39.65 195.222 40.4287C196.626 41.2074 198.157 41.5968 199.816 41.5968C201.688 41.5968 203.262 41.1642 204.538 40.2989C205.814 39.4337 206.75 38.2656 207.346 36.7947H214.429C213.876 38.828 212.919 40.6667 211.557 42.3106C210.239 43.9114 208.58 45.1876 206.58 46.1394C204.623 47.0479 202.369 47.5021 199.816 47.5021Z" fill="url(#gradient)"></path><path d="M229.703 47.5021C225.704 47.5021 222.365 46.5504 219.685 44.6468C217.047 42.7433 215.537 40.061 215.154 36.6H222.365C222.662 38.2007 223.492 39.4769 224.853 40.4287C226.214 41.3805 227.916 41.8564 229.958 41.8564C231.957 41.8564 233.489 41.4454 234.552 40.6234C235.658 39.8014 236.211 38.7847 236.211 37.5734C236.211 36.5784 235.85 35.8213 235.126 35.3021C234.446 34.783 233.17 34.372 231.298 34.0691C230.575 33.9394 229.724 33.8096 228.745 33.6798C227.767 33.5067 226.916 33.3337 226.193 33.1606C224.577 32.8578 223.045 32.3386 221.599 31.6032C220.195 30.8677 219.046 29.8727 218.153 28.6181C217.26 27.3202 216.813 25.6979 216.813 23.7511C216.813 20.939 217.855 18.5812 219.94 16.6777C222.024 14.7308 224.981 13.7574 228.809 13.7574C232.595 13.7574 235.637 14.6227 237.934 16.3532C240.274 18.0404 241.614 20.5713 241.954 23.9457H235.063C234.935 22.3883 234.276 21.2418 233.085 20.5064C231.893 19.7709 230.468 19.4032 228.809 19.4032C227.065 19.4032 225.683 19.7709 224.662 20.5064C223.641 21.2418 223.13 22.1504 223.13 23.2319C223.13 25.222 224.683 26.4982 227.788 27.0606C228.256 27.1472 228.788 27.2553 229.384 27.3851C230.022 27.4716 230.66 27.5798 231.298 27.7096C231.979 27.7961 232.553 27.8826 233.021 27.9691C234.127 28.0989 235.254 28.3585 236.403 28.7479C237.551 29.094 238.615 29.5915 239.593 30.2404C240.572 30.8894 241.359 31.7546 241.954 32.8362C242.55 33.9177 242.847 35.2805 242.847 36.9245C242.847 39.0011 242.316 40.8397 241.252 42.4404C240.231 43.9979 238.742 45.2308 236.786 46.1394C234.829 47.0479 232.468 47.5021 229.703 47.5021Z" fill="url(#gradient)"></path><path d="M253.673 46.8609C252.267 46.8609 251.004 46.5473 249.884 45.92C248.788 45.2685 247.919 44.3758 247.275 43.2418C246.656 42.1078 246.346 40.829 246.346 39.4055C246.346 37.9337 246.656 36.6429 247.275 35.533C247.919 34.4232 248.788 33.5425 249.884 32.8911C251.004 32.2396 252.267 31.9139 253.673 31.9139C255.126 31.9139 256.401 32.2396 257.497 32.8911C258.593 33.5425 259.451 34.4232 260.071 35.533C260.69 36.6429 261 37.9337 261 39.4055C261 40.829 260.69 42.1078 260.071 43.2418C259.451 44.3758 258.593 45.2685 257.497 45.92C256.401 46.5473 255.126 46.8609 253.673 46.8609ZM253.673 45.3409C255.412 45.3409 256.794 44.786 257.819 43.6761C258.867 42.5662 259.392 41.1427 259.392 39.4055C259.392 37.6442 258.867 36.2207 257.819 35.1349C256.794 34.0251 255.412 33.4701 253.673 33.4701C251.934 33.4701 250.54 34.0251 249.491 35.1349C248.467 36.2207 247.954 37.6442 247.954 39.4055C247.954 41.1427 248.467 42.5662 249.491 43.6761C250.54 44.786 251.934 45.3409 253.673 45.3409ZM250.706 43.2056V35.4607H254.316C255.103 35.4607 255.734 35.6778 256.211 36.1121C256.687 36.5464 256.925 37.1255 256.925 37.8493C256.925 38.6455 256.651 39.2728 256.103 39.7312C256.389 39.9243 256.58 40.1776 256.675 40.4913C256.794 40.8049 256.866 41.1427 256.89 41.5046L257.033 43.2056H255.21L255.067 41.9389C254.995 41.2633 254.888 40.817 254.745 40.5998C254.626 40.3827 254.316 40.2741 253.816 40.2741H252.672V43.2056H250.706ZM252.672 38.7903H254.066C254.328 38.7903 254.543 38.7299 254.71 38.6093C254.9 38.4645 254.995 38.2474 254.995 37.9579C254.995 37.6683 254.9 37.4632 254.71 37.3426C254.543 37.222 254.328 37.1616 254.066 37.1616H252.672V38.7903Z" fill="url(#gradient)"></path>', 10)]), 512))]), i[12] || (i[12] = e("div", {
                    class: "absolute z-[-1] bottom-0 bg-gradient-to-b from-black to-middleBrown h-[100vh] w-full"
                }, null, -1))], 512)
            }
        }
    }),
    ed = {
        key: 0
    },
    td = {
        key: 1
    },
    od = oe({
        __name: "index",
        setup($) {
            const a = r(null),
                {
                    isMobileOrTablet: f
                } = tt(),
                m = ll();
            return ol({
                title: "Closer to Nature—Closer to Yourself",
                titleTemplate: "%s",
                meta: [{
                    name: "description",
                    content: "Welcome to a world of wild California desert with Capsules®, where you willdesert with Capsules®, where you will discover exquisite nature observing itdiscover exquisite nature observing it from capsule houses, nestled in thefrom capsule houses, nestled in the one of the most breathtakingone of the most breathtaking destination on the United States."
                }]
            }), (v, i) => {
                const d = cl,
                    n = yl,
                    p = Al,
                    c = Io,
                    o = Xo,
                    h = Qo,
                    j = gs,
                    C = qs,
                    O = Tn,
                    T = Nn,
                    _ = Cr,
                    b = zr,
                    M = Ir,
                    I = ha,
                    g = _a,
                    x = sl,
                    q = Ta,
                    A = Ea,
                    P = Ja,
                    W = Mi,
                    ne = Wi,
                    ee = c1,
                    X = Z1,
                    L = lu,
                    Q = gu,
                    R = _u,
                    G = Eu,
                    N = Uu,
                    z = a2,
                    le = A2,
                    U = I2,
                    re = q2;
                return !y(f) || y(m).isGreaterThan("md") ? (S(), E("div", ed, [t(x, null, {
                    default: s(() => [t(g, null, {
                        default: s(() => [e("div", {
                            class: "w-full",
                            ref_key: "root",
                            ref: a
                        }, [i[0] || (i[0] = e("div", {
                            id: "awwwards",
                            style: {
                                position: "fixed",
                                "z-index": "999",
                                transform: "translateY(-30%)",
                                top: "30%",
                                right: "0"
                            }
                        }, [e("a", {
                            href: "https://www.awwwards.com/sites/capsules-r",
                            target: "_blank"
                        }, [e("svg", {
                            width: "53.08",
                            height: "171.358"
                        }, [e("path", {
                            class: "js-color-bg",
                            fill: "black",
                            d: "M0 0h53.08v171.358H0z"
                        }), e("g", {
                            class: "js-color-text",
                            fill: "white"
                        }, [e("path", {
                            d: "M20.048 153.585v-2.002l6.752-3.757h-6.752v-1.9h10.23v2.002l-6.752 3.757h6.752v1.9zM29.899 142.382a3.317 3.317 0 0 1-1.359 1.293c-.575.297-1.223.446-1.944.446-.721 0-1.369-.149-1.944-.446a3.317 3.317 0 0 1-1.359-1.293c-.331-.564-.497-1.232-.497-2.003 0-.769.166-1.437.497-2.002a3.332 3.332 0 0 1 1.359-1.294c.575-.297 1.224-.445 1.944-.445.722 0 1.369.148 1.944.445a3.326 3.326 0 0 1 1.359 1.294c.33.565.496 1.233.496 2.002.001.77-.166 1.438-.496 2.003m-1.703-3.348c-.435-.331-.967-.497-1.601-.497s-1.167.166-1.601.497c-.434.332-.65.78-.65 1.345s.217 1.014.65 1.346c.434.33.967.496 1.601.496s1.166-.166 1.601-.496c.434-.332.649-.78.649-1.346.001-.565-.215-1.013-.649-1.345M22.912 134.996v-1.812h1.185c-.43-.283-.752-.593-.973-.929-.219-.336-.329-.732-.329-1.19 0-.479.127-.902.38-1.272.254-.37.635-.633 1.141-.79-.478-.262-.851-.591-1.118-.985a2.221 2.221 0 0 1-.402-1.265c0-.682.2-1.218.599-1.607.4-.391.957-.585 1.668-.585h5.218v1.812H25.37c-.682 0-1.023.303-1.023.907 0 .467.264.85.789 1.146.527.299 1.286.446 2.28.446h2.865v1.813H25.37c-.682 0-1.023.303-1.023.906 0 .468.275.851.826 1.147.551.298 1.352.446 2.404.446h2.704v1.812h-7.369zM21.626 122.457c-.225.224-.502.336-.833.336s-.608-.112-.833-.336a1.128 1.128 0 0 1-.336-.833c0-.331.111-.609.336-.833.225-.225.502-.336.833-.336s.608.111.833.336c.225.224.337.502.337.833 0 .332-.112.608-.337.833m1.286-1.739h7.366v1.813h-7.366v-1.813zM22.912 118.668v-1.812h1.185a3.348 3.348 0 0 1-.951-1.009 2.434 2.434 0 0 1-.351-1.272c0-.681.19-1.229.57-1.644.38-.414.931-.621 1.651-.621h5.263v1.812h-4.722c-.418 0-.727.096-.92.285-.195.19-.293.447-.293.769 0 .302.116.58.351.833.233.254.577.458 1.03.613.453.156.992.234 1.615.234h2.938v1.812h-7.366zM29.833 109.129a3.33 3.33 0 0 1-1.432 1.169 4.535 4.535 0 0 1-1.805.373 4.537 4.537 0 0 1-1.807-.373c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.771.183-1.413.549-1.93a3.28 3.28 0 0 1 1.382-1.141 4.221 4.221 0 0 1 1.709-.364h.746v5.071c.447-.02.838-.183 1.168-.49.332-.307.498-.724.498-1.248 0-.41-.093-.754-.277-1.031-.186-.278-.473-.529-.863-.753l.542-1.462c.69.303 1.224.724 1.592 1.265.371.541.556 1.235.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.574c-.41.088-.746.261-1.009.52-.262.258-.395.61-.395 1.06 0 .428.137.784.409 1.067.272.282.604.458.994.525v-3.172zM29.833 100.878c-.375.531-.852.921-1.432 1.169a4.552 4.552 0 0 1-3.612 0c-.579-.248-1.057-.638-1.432-1.169s-.563-1.196-.563-1.995c0-.77.183-1.412.549-1.93a3.278 3.278 0 0 1 1.382-1.14 4.222 4.222 0 0 1 1.709-.365h.746v5.072a1.794 1.794 0 0 0 1.168-.49c.332-.307.498-.724.498-1.249 0-.41-.093-.753-.277-1.031-.186-.277-.473-.528-.863-.753l.542-1.462c.69.302 1.224.724 1.592 1.265.371.541.556 1.234.556 2.083 0 .799-.188 1.464-.563 1.995m-4.085-3.573c-.41.088-.746.261-1.009.519-.262.258-.395.611-.395 1.06 0 .429.137.784.409 1.067.272.282.604.458.994.526v-3.172zM35.481 16.926l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.781-14.969h3.713l2.673 10.276 2.524-10.276h3.445l2.524 10.276 2.674-10.276zM37.979 27.083c1.426 0 2.495 1.068 2.495 2.495 0 1.425-1.069 2.495-2.495 2.495-1.425 0-2.495-1.07-2.495-2.495-.001-1.427 1.07-2.495 2.495-2.495"
                        })])])])], -1)), t(d), t(n), t(p), t(c), t(o), t(h), y(f) ? (S(), Fe(C, {
                            key: 1
                        })) : (S(), Fe(j, {
                            key: 0
                        })), t(O), t(T), t(_), t(b, {
                            "page-ref": y(a)
                        }, null, 8, ["page-ref"]), t(M), t(I), t(Tt)], 512)]),
                        _: 1
                    })]),
                    _: 1
                })])) : (S(), E("div", td, [t(re, null, {
                    default: s(() => [t(U, null, {
                        default: s(() => [t(q), t(A), t(P), t(W), t(ne), t(ee), t(X), t(L), t(y(Q2)), t(Q, {
                            "page-ref": y(a)
                        }, null, 8, ["page-ref"]), t(R), t(G), t(N), t(z), t(le), t(Tt)]),
                        _: 1
                    })]),
                    _: 1
                })]))
            }
        }
    });
export {
    od as
    default
};