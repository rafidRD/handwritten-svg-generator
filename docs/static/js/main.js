(this["webpackJsonptext-animation"] = this["webpackJsonptext-animation"] || []).push([
    [0],
    {
        21: function (e, t, n) {
            e.exports = n(42);
        },
        26: function (e, t, n) {},
        42: function (e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                l = n(4),
                o = n.n(l),
                c = (n(26), n(6), n(3)),
                i = n.n(c),
                s = n(2),
                u = function (e) {
                    var t = "",
                        n = "";
                    return (
                        e.split(/>\s*</).forEach(function (e) {
                            e.match(/^\/\w/) && (n = n.substring("\t".length)), (t += n + "<" + e + ">\r\n"), e.match(/^<?\w[^>]*[^/]$/) && (n += "\t");
                        }),
                        t.substring(1, t.length - 3)
                    );
                },
                m = function (e, t) {
                    var n = document.createElement("a");
                    n.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)), n.setAttribute("download", e), (n.style.display = "none"), document.body.appendChild(n), n.click(), document.body.removeChild(n);
                },
                d = function (e) {
                    var t = e.css;
                    return (
                        Object(a.useEffect)(
                            function () {
                                i.a.highlightAll();
                            },
                            [t]
                        ),
                        r.a.createElement(
                            "div",
                            { id: "output-css" },
                            r.a.createElement(
                                "div",
                                { className: "context" },
                                r.a.createElement("h2", { className: "code-heading" }, "CSS Snippet"),
                                r.a.createElement(
                                    "button",
                                    {
                                        className: "download-btn",
                                        onClick: function () {
                                            m("text-animation.css", t);
                                        },
                                    },
                                    "Download CSS"
                                )
                            ),
                            r.a.createElement("pre", null, r.a.createElement("code", { className: "language-css" }, t))
                        )
                    );
                },
                h = (d = Object(s.b)(function (e) {
                    return { css: e.output.css };
                }, null)(d)),
                p = n(1);
            function E(e, t) {
                return { type: e, value: t };
            }
            var f = n(5),
                g = {
                    settings: {
                        fontFamily: "Roboto",
                        fontVariant: "",
                        text: "Chatgpt loots",
                        size: 100,
                        unionCheckbox: !1,
                        separateCheckbox: !0,
                        bezierAccuracy: "",
                        delay: 0.099,
                        duration: "",
                        strokeWidth: 3,
                        fillColor: "#164B60",
                        strokeColor: "#ffffff",
                        timingFunction: "linear",
                        repeat: !0,
                    },
                    output: { svg: "", css: "", js: "" },
                    meta: { initialized: !1 },
                };
            var v = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = Object(p.a)({}, e),
                        a = n.settings,
                        r = n.output,
                        l = n.meta,
                        o = t.value;
                    switch (t.type) {
                        case "SET_TEXT":
                            return (a.text = o), Object(p.a)({}, e, { settings: a });
                        case "SET_FONT_FAMILY":
                            return (a.fontFamily = o), Object(p.a)({}, e, { settings: a });
                        case "SET_FONT_VARIANT":
                            return (a.fontVariant = o), Object(p.a)({}, e, { settings: a });
                        case "SET_SIZE":
                            return (a.size = null !== o && void 0 !== o ? o : 0), Object(p.a)({}, e, { settings: a });
                        case "SET_DELAY":
                            return (a.delay = isNaN(o) ? "" : o), Object(p.a)({}, e, { settings: a });
                        case "SET_TIMING_FUNCTION":
                            return (a.timingFunction = o), Object(p.a)({}, e, { settings: a });
                        case "SET_DURATION":
                            return (a.duration = isNaN(o) ? "" : o), Object(p.a)({}, e, { settings: a });
                        case "SET_STROKE_WIDTH":
                            return (a.strokeWidth = isNaN(o) ? "" : o), Object(p.a)({}, e, { settings: a });
                        case "SET_REPEAT":
                            return (a.repeat = isNaN(o) ? "" : o), Object(p.a)({}, e, { settings: a });
                        case "SET_FILL_COLOR":
                            return (a.fillColor = o), Object(p.a)({}, e, { settings: a });
                        case "SET_STROKE_COLOR":
                            return (a.strokeColor = o), Object(p.a)({}, e, { settings: a });
                        case "SET_CSS":
                            return (r.css = o), Object(p.a)({}, e, { output: r });
                        case "SET_JS":
                            return (r.js = o), Object(p.a)({}, e, { output: r });
                        case "SET_SVG":
                            return (r.svg = o), Object(p.a)({}, e, { output: r });
                        case "SET_INITIALIZED":
                            return (l.initialized = o), Object(p.a)({}, e, { meta: l });
                        default:
                            return e;
                    }
                },
                b = Object(f.b)(v, g, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
            function y(e, t, n, a, r, l) {
                for (var o = document.querySelectorAll("path"), c = l ? "infinite" : "forwards", i = 0; i < o.length; i++) {
                    var s = o[i],
                        u = s.getTotalLength();
                    (s.style["stroke-dashoffset"] = "".concat(u, "px")),
                        (s.style["stroke-dasharray"] = "".concat(u, "px")),
                        (s.style["stroke-width"] = "".concat(n, "px")),
                        (s.style.stroke = "".concat(r)),
                        (s.style.animation = "".concat(t, "s svg-text-anim ").concat(c, " ").concat(a)),
                        (s.style["animation-delay"] = "".concat(i * e, "s"));
                }
            }
            var S = n(12),
                T = n.n(S),
                N = n(19),
                k = n(13),
                O = n.n(k),
                x = n(20);
            var _ = new (function () {
                    var e = b.getState().settings;
                    (this.initialized = !1),
                        (this.fontList = {}),
                        (this.init = function () {
                            this.bind(),
                                this.loadFonts().then(function (e) {
                                    b.dispatch({ type: "SET_INITIALIZED", value: !0 });
                                });
                        }),
                        (this.bind = function () {
                            (this.selectFamily = this.$("#font-select")), (this.selectVariant = this.$("#font-variant"));
                        }),
                        (this.loadFonts = Object(N.a)(
                            T.a.mark(function e() {
                                var t,
                                    n = this;
                                return T.a.wrap(
                                    function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        "AIzaSyDedkw4Dr7wPMbTcUfTpXBLgyoncPygzDU",
                                                        (e.next = 3),
                                                        fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=".concat("AIzaSyDedkw4Dr7wPMbTcUfTpXBLgyoncPygzDU")).then(function (e) {
                                                            return e.json();
                                                        })
                                                    );
                                                case 3:
                                                    return (
                                                        (t = e.sent),
                                                        (this.fontList = t),
                                                        this.fontList.items.forEach(function (e) {
                                                            return n.addOption(n.selectFamily, e.family);
                                                        }),
                                                        this.loadVariants(),
                                                        e.abrupt("return", 1)
                                                    );
                                                case 8:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    this
                                );
                            })
                        )),
                        (this.renderCurrent = function () {
                            var t = e.size;
                            t || (t = parseFloat(e.size)), t || (t = 100);
                            var n = this.selectFamily.selectedIndex,
                                a = this.selectVariant.selectedIndex,
                                r = e.text,
                                l = this.fontList.items[n],
                                o = l.variants[a],
                                c = l.files[o].substring(5);
                            x.a.load(c, function (e, n) {
                                var a = new O.a.models.Text(n, r, t, !1, !1, "");
                                for (var l in a.models) a.models[l].layer = l;
                                var o = O.a.exporter.toSVG(a);
                                b.dispatch(E("SET_SVG", o)),
                                    (function () {
                                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                        var e,
                                            t = "";
                                        t =
                                            'function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {\n            let paths = document.querySelectorAll("path");\n            let mode=repeat?\'infinite\':\'forwards\'\n            for (let i = 0; i < paths.length; i++) {\n                const path = paths[i];\n                const length = path.getTotalLength();\n                path.style["stroke-dashoffset"] = `${length}px`;\n                path.style["stroke-dasharray"] = `${length}px`;\n                path.style["stroke-width"] = `${strokeWidth}px`;\n                path.style["stroke"] = `${strokeColor}`;\n                path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;\n                path.style["animation-delay"] = `${i * delay}s`;\n            }\n        }';
                                        var n = b.getState(),
                                            a = n.settings,
                                            r = a.delay,
                                            l = a.duration,
                                            o = a.strokeWidth,
                                            c = a.timingFunction,
                                            i = a.strokeColor,
                                            s = a.repeat,
                                            u = document.querySelectorAll("path");
                                        (r = "" === r || null === r ? 0.1 : r),
                                            (l = "" === l || null === l ? u.length * r + 2 : l),
                                            (o = "" === o || null === o ? 2 : o),
                                            (c = null !== (e = c) && void 0 !== e ? e : "linear"),
                                            y((r = parseFloat(r.toPrecision(2))), (l = parseFloat(l.toPrecision(2))), (o = parseFloat(o.toPrecision(2))), c, i, s);
                                        var m = "setTextAnimation(".concat(r, ",").concat(l, ",").concat(o, ",'").concat(c, "','").concat(i, "',").concat(s, ");"),
                                            d = "".concat(t, "\n ").concat(m);
                                        b.dispatch(E("SET_JS", d));
                                    })(),
                                    (function () {
                                        var e = document.getElementById("animation-keyframes"),
                                            t = b.getState().settings.fillColor;
                                        e && e.remove();
                                        var n = document.createElement("style");
                                        (n.type = "text/css"), (n.id = "animation-keyframes");
                                        var a = "   40% {\n          stroke-dashoffset: 0;\n          fill: transparent;\n        }\n        60% {\n          stroke-dashoffset: 0;\n          fill: "
                                                .concat(t, ";\n        }\n        100% {\n          stroke-dashoffset: 0;\n          fill: ")
                                                .concat(t, ";\n        }\n        "),
                                            r = "     /* Google chrome */\n      @-webkit-keyframes svg-text-anim {\n    ".concat(a, "\n    }\n    /* Most browsers */\n    @keyframes svg-text-anim {\n    ").concat(a, "\n    }");
                                        (n.innerHTML = r), document.getElementsByTagName("head")[0].appendChild(n), b.dispatch(E("SET_CSS", r));
                                    })();
                            });
                        }),
                        (this.loadVariants = function () {
                            var e = this;
                            (this.selectVariant.options.length = 0),
                                this.fontList.items[this.selectFamily.selectedIndex].variants.forEach(function (t) {
                                    return e.addOption(e.selectVariant, t);
                                }),
                                this.renderCurrent();
                        }),
                        (this.$ = function (e) {
                            return document.querySelector(e);
                        }),
                        (this.addOption = function (e, t) {
                            var n = document.createElement("option");
                            (n.text = t), (n.value = t), e.options.add(n);
                        });
                })(),
                w = function (e) {
                    var t = e.dispatch,
                        n = e.fontFamily,
                        l = e.fontVariant,
                        o = e.text,
                        c = e.size,
                        i = (e.unionCheckbox, e.separateCheckbox, e.bezierAccuracy, e.delay),
                        s = e.duration,
                        u = e.strokeWidth,
                        m = e.fillColor,
                        d = e.timingFunction,
                        h = e.strokeColor,
                        p = e.repeat,
                        E = e.initialized;
                    Object(a.useEffect)(
                        function () {
                            E && _.renderCurrent();
                        },
                        [o, c, i, s, u, m, l, d, h, p, E]
                    ),
                        Object(a.useEffect)(
                            function () {
                                E && _.loadVariants();
                            },
                            [n, E]
                        );
                    var f = function (e, n) {
                        t({ type: e, value: n });
                    };
                    return r.a.createElement(
                        "div",
                        { className: "settings" },
                        r.a.createElement(
                            "div",
                            { className: "text-holder" },
                            r.a.createElement(
                                "div",
                                { className: "input-group text-center " },
                                r.a.createElement("input", {
                                    className: "input-text text-center ",
                                    type: "text",
                                    id: "input-text",
                                    value: o,
                                    placeholder: "Input Text Here",
                                    onChange: function (e) {
                                        return f("SET_TEXT", e.target.value);
                                    },
                                })
                            )
                        ),
                        r.a.createElement(
                            "div",
                            { className: "tuners-holder" },
                            r.a.createElement(
                                "div",
                                null,
                                r.a.createElement(
                                    "div",
                                    { className: "input-group" },
                                    r.a.createElement(
                                        "label",
                                        null,
                                        "Font: ",
                                        r.a.createElement(
                                            "span",
                                            { className: "fonts-info" },
                                            "( ",
                                            r.a.createElement("a", { className: "fonts-link", href: "https://fonts.google.com/?sort=alpha", target: "_blank", rel: "noopener noreferrer" }, "All fonts"),
                                            ")"
                                        ),
                                        " "
                                    ),
                                    r.a.createElement("select", {
                                        id: "font-select",
                                        value: n,
                                        onChange: function (e) {
                                            return f("SET_FONT_FAMILY", e.target.value);
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    "div",
                                    { className: "input-group" },
                                    r.a.createElement("label", null, "Variant:"),
                                    r.a.createElement("select", {
                                        id: "font-variant",
                                        value: l,
                                        onChange: function (e) {
                                            return f("SET_FONT_VARIANT", e.target.value);
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                "div",
                                null,
                                r.a.createElement(
                                    "div",
                                    { className: "input-group" },
                                    r.a.createElement("label", null, "Size:"),
                                    r.a.createElement("input", {
                                        type: "number",
                                        id: "input-size",
                                        value: c,
                                        placeholder: 100,
                                        onChange: function (e) {
                                            return f("SET_SIZE", e.target.value);
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    "div",
                                    { className: "input-group" },
                                    r.a.createElement("label", null, "Stroke Width(px):"),
                                    r.a.createElement("input", {
                                        type: "number",
                                        id: "input-width",
                                        value: u,
                                        placeholder: "2px",
                                        onChange: function (e) {
                                            return f("SET_STROKE_WIDTH", e.target.valueAsNumber);
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                "div",
                                null,
                                r.a.createElement(
                                    "div",
                                    { className: "input-group" },
                                    r.a.createElement("label", null, "Delay(s):"),
                                    r.a.createElement("input", {
                                        type: "number",
                                        id: "input-delay",
                                        placeholder: "0.1s",
                                        value: i,
                                        onChange: function (e) {
                                            return f("SET_DELAY", e.target.valueAsNumber);
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    "div",
                                    { className: "input-group" },
                                    r.a.createElement("label", null, "Animation duration(s):"),
                                    r.a.createElement("input", {
                                        type: "number",
                                        id: "input-duration",
                                        placeholder: "auto",
                                        value: s,
                                        onChange: function (e) {
                                            return f("SET_DURATION", e.target.valueAsNumber);
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    "div",
                                    { className: "input-group " },
                                    r.a.createElement("label", { className: "inline" }, "Repeat:"),
                                    r.a.createElement("input", {
                                        type: "checkbox",
                                        id: "input-duration",
                                        placeholder: "auto",
                                        checked: p,
                                        onChange: function (e) {
                                            return f("SET_REPEAT", e.target.checked);
                                        },
                                    })
                                )
                            ),
                            r.a.createElement(
                                "div",
                                null,
                                r.a.createElement(
                                    "div",
                                    { className: "input-group" },
                                    r.a.createElement("label", null, "Timing:"),
                                    r.a.createElement(
                                        "select",
                                        {
                                            id: "timing-function",
                                            value: d,
                                            onChange: function (e) {
                                                return f("SET_TIMING_FUNCTION", e.target.value);
                                            },
                                        },
                                        r.a.createElement("option", { value: "ease" }, "ease"),
                                        r.a.createElement("option", { value: "ease-in" }, "ease-in"),
                                        r.a.createElement("option", { value: "ease-out" }, "ease-out"),
                                        r.a.createElement("option", { value: "ease-in-out" }, "ease-in-out"),
                                        r.a.createElement("option", { value: "linear" }, "linear"),
                                        r.a.createElement("option", { value: "step-start" }, "step-start"),
                                        r.a.createElement("option", { value: "step-end" }, "step-end")
                                    )
                                ),
                                r.a.createElement(
                                    "div",
                                    { className: "input-group" },
                                    r.a.createElement("label", null, "Fill Color:"),
                                    r.a.createElement("input", {
                                        type: "color",
                                        id: "input-color",
                                        value: m,
                                        onChange: function (e) {
                                            return f("SET_FILL_COLOR", e.target.value);
                                        },
                                    })
                                ),
                                r.a.createElement(
                                    "div",
                                    { className: "input-group" },
                                    r.a.createElement("label", null, "Stroke Color:"),
                                    r.a.createElement("input", {
                                        type: "color",
                                        id: "input-color",
                                        value: h,
                                        onChange: function (e) {
                                            return f("SET_STROKE_COLOR", e.target.value);
                                        },
                                    })
                                )
                            ),
                            r.a.createElement("div", null)
                        )
                    );
                },
                j = (w = Object(s.b)(function (e) {
                    var t = e.settings,
                        n = e.meta;
                    return Object(p.a)({}, t, {}, n);
                }, null)(w)),
                C = function (e) {
                    var t = e.svg;
                    return r.a.createElement("div", { id: "svg-holder", dangerouslySetInnerHTML: { __html: t } });
                },
                I = (C = Object(s.b)(function (e) {
                    return { svg: e.output.svg };
                }, null)(C)),
                F = function () {
                    return r.a.createElement(
                        "div",
                    );
                },
                A = function () {
                    return r.a.createElement(
                        a.Fragment,
                        null,
                        r.a.createElement("div", null, r.a.createElement("h1", { className: "title" }, "Handwritten SVG Generator"), r.a.createElement("h4", { className: "subtitle" }, " (Ad free AI tool)")),
                        r.a.createElement("div", { className: "extras" }),
                        r.a.createElement(F, null)
                    );
                },
                L = function (e) {
                    var t = e.children;
                    return r.a.createElement(a.Fragment, null, r.a.createElement("code", { className: "code-holder" }, t));
                },
                D = function (e) {
                    var t = e.js;
                    return (
                        Object(a.useEffect)(
                            function () {
                                i.a.highlightAll();
                            },
                            [t]
                        ),
                        r.a.createElement(
                            "div",
                            { id: "output-js" },
                            r.a.createElement(
                                "div",
                                { className: "context" },
                                r.a.createElement("h2", { className: "code-heading" }, "JS Snippet"),
                                r.a.createElement(
                                    "button",
                                    {
                                        className: "download-btn",
                                        onClick: function () {
                                            m("text-animation.js", t);
                                        },
                                    },
                                    "Download JS"
                                )
                            ),
                            r.a.createElement("pre", null, r.a.createElement("code", { className: "language-js" }, t))
                        )
                    );
                },
                z = (D = Object(s.b)(function (e) {
                    return { js: e.output.js };
                }, null)(D)),
                R = function (e) {
                    var t = e.svg;
                    return (
                        Object(a.useEffect)(
                            function () {
                                i.a.highlightAll();
                            },
                            [t]
                        ),
                        r.a.createElement(
                            "div",
                            { id: "output-svg" },
                            r.a.createElement(
                                "div",
                                { className: "context" },
                                r.a.createElement("h2", { className: "code-heading" }, "SVG Snippet"),
                                r.a.createElement(
                                    "button",
                                    {
                                        className: "download-btn",
                                        onClick: function () {
                                            m("text.svg", u(t));
                                        },
                                    },
                                    "Download SVG"
                                )
                            ),
                            r.a.createElement("pre", null, r.a.createElement("code", { className: "language-html" }, u(t)))
                        )
                    );
                },
                V = (R = Object(s.b)(function (e) {
                    return { svg: e.output.svg };
                }, null)(R));
            var G = function () {
                return r.a.createElement(
                    "div",
                    { className: "gitIcons" },
                    
                );
            };
            var $ = function () {
                    return r.a.createElement(
                        "footer",
                        null,
                        r.a.createElement(G, null),
                        r.a.createElement("span", { className: "footer-text" }, "Made with ", r.a.createElement("span", { className: "heart" }, "\u2764"), " by ", r.a.createElement("a", { href: "https://github.com/Rafid-009" }, "Rafid"))
                    );
                },
                U = function (e) {
                    var t = e.svg,
                        n = e.css,
                        a = e.js,
                        l = e.text,
                        o = '\n                <!DOCTYPE html>\n                <html lang="en">\n                <head>\n                    <meta charset="UTF-8">\n                    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n                    <title>'
                            .concat(l, " | Animation</title>\n                    <style>\n                        ")
                            .concat(n, "\n                    </style>\n                </head>\n                <body style='background:mediumseagreen'>\n                    <div class=\"svg-holder\">\n                        ")
                            .concat(t, "\n                    </div>\n                </body>\n                <script>\n                    ")
                            .concat(a, "\n                </script>\n                </html>\n            ");
                    return r.a.createElement(
                        "div",
                        { className: "context text-center my-1" },
                        r.a.createElement(
                            "button",
                            {
                                className: "download-btn",
                                onClick: function () {
                                    m("".concat(l, "-animation.html"), o);
                                },
                            },
                            "Download Source"
                        )
                    );
                },
                W = (U = Object(s.b)(function (e) {
                    var t = e.output,
                        n = e.settings;
                    return Object(p.a)({}, t, { text: n.text });
                }, null)(U));
            function M() {
                return (
                    Object(a.useEffect)(function () {
                        document.getElementById("font-select") && _.init();
                    }, []),
                    r.a.createElement(
                        a.Fragment,
                        null,
                        r.a.createElement(A, null),
                        r.a.createElement(j, null),
                        r.a.createElement(W, null),
                        r.a.createElement(I, null),
                        r.a.createElement(L, null, r.a.createElement(V, null), r.a.createElement(h, null), r.a.createElement(z, null)),
                        r.a.createElement($, null)
                    )
                );
            }
            var P = function () {
                return r.a.createElement(s.a, { store: b }, r.a.createElement("div", { className: "App" }, r.a.createElement(M, null)));
            };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            o.a.render(r.a.createElement(r.a.StrictMode, null, r.a.createElement(P, null)), document.getElementById("root")),
                "serviceWorker" in navigator &&
                    navigator.serviceWorker.ready
                        .then(function (e) {
                            e.unregister();
                        })
                        .catch(function (e) {
                            console.error(e.message);
                        });
        },
        8: function (e, t) {},
    },
    [[21, 1, 2]],
]);
//# sourceMappingURL=main.js.map
