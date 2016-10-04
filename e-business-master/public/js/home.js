function revslider_showDoubleJqueryError(t) {
    var e = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    e += "<br> This includes make eliminates the revolution slider libraries, and make it not work.", e += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.", e += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.", e = "<span style='font-size:16px;color:#BC0C06;'>" + e + "</span>", jQuery(t).show().html(e)
}
if (function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) {
            var e = "length" in t && t.length,
                i = K.type(t);
            return "function" === i || K.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function n(t, e, i) {
            if (K.isFunction(e)) return K.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return K.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (st.test(e)) return K.filter(e, t, i);
                e = K.filter(e, t)
            }
            return K.grep(t, function(t) {
                return Y.call(e, t) >= 0 !== i
            })
        }

        function a(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function r(t) {
            var e = ft[t] = {};
            return K.each(t.match(pt) || [], function(t, i) {
                e[i] = !0
            }), e
        }

        function o() {
            G.removeEventListener("DOMContentLoaded", o, !1), t.removeEventListener("load", o, !1), K.ready()
        }

        function s() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = K.expando + s.uid++
        }

        function l(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(bt, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : wt.test(i) ? K.parseJSON(i) : i
                    } catch (a) {}
                    yt.set(t, e, i)
                } else i = void 0;
            return i
        }

        function d() {
            return !0
        }

        function h() {
            return !1
        }

        function c() {
            try {
                return G.activeElement
            } catch (t) {}
        }

        function u(t, e) {
            return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function p(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function f(t) {
            var e = Nt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function g(t, e) {
            for (var i = 0, n = t.length; n > i; i++) vt.set(t[i], "globalEval", !e || vt.get(e[i], "globalEval"))
        }

        function m(t, e) {
            var i, n, a, r, o, s, l, d;
            if (1 === e.nodeType) {
                if (vt.hasData(t) && (r = vt.access(t), o = vt.set(e, r), d = r.events)) {
                    delete o.handle, o.events = {};
                    for (a in d)
                        for (i = 0, n = d[a].length; n > i; i++) K.event.add(e, a, d[a][i])
                }
                yt.hasData(t) && (s = yt.access(t), l = K.extend({}, s), yt.set(e, l))
            }
        }

        function v(t, e) {
            var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && K.nodeName(t, e) ? K.merge([t], i) : i
        }

        function y(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && kt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function w(e, i) {
            var n, a = K(i.createElement(e)).appendTo(i.body),
                r = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(a[0])) ? n.display : K.css(a[0], "display");
            return a.detach(), r
        }

        function b(t) {
            var e = G,
                i = Ft[t];
            return i || (i = w(t, e), "none" !== i && i || (jt = (jt || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = jt[0].contentDocument, e.write(), e.close(), i = w(t, e), jt.detach()), Ft[t] = i), i
        }

        function _(t, e, i) {
            var n, a, r, o, s = t.style;
            return i = i || qt(t), i && (o = i.getPropertyValue(e) || i[e]), i && ("" !== o || K.contains(t.ownerDocument, t) || (o = K.style(t, e)), Wt.test(o) && Ht.test(e) && (n = s.width, a = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = i.width, s.width = n, s.minWidth = a, s.maxWidth = r)), void 0 !== o ? o + "" : o
        }

        function x(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function T(t, e) {
            if (e in t) return e;
            for (var i = e[0].toUpperCase() + e.slice(1), n = e, a = Qt.length; a--;)
                if (e = Qt[a] + i, e in t) return e;
            return n
        }

        function k(t, e, i) {
            var n = Bt.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }

        function C(t, e, i, n, a) {
            for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === i && (o += K.css(t, i + xt[r], !0, a)), n ? ("content" === i && (o -= K.css(t, "padding" + xt[r], !0, a)), "margin" !== i && (o -= K.css(t, "border" + xt[r] + "Width", !0, a))) : (o += K.css(t, "padding" + xt[r], !0, a), "padding" !== i && (o += K.css(t, "border" + xt[r] + "Width", !0, a)));
            return o
        }

        function S(t, e, i) {
            var n = !0,
                a = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = qt(t),
                o = "border-box" === K.css(t, "boxSizing", !1, r);
            if (0 >= a || null == a) {
                if (a = _(t, e, r), (0 > a || null == a) && (a = t.style[e]), Wt.test(a)) return a;
                n = o && (Z.boxSizingReliable() || a === t.style[e]), a = parseFloat(a) || 0
            }
            return a + C(t, e, i || (o ? "border" : "content"), n, r) + "px"
        }

        function P(t, e) {
            for (var i, n, a, r = [], o = 0, s = t.length; s > o; o++) n = t[o], n.style && (r[o] = vt.get(n, "olddisplay"), i = n.style.display, e ? (r[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Tt(n) && (r[o] = vt.access(n, "olddisplay", b(n.nodeName)))) : (a = Tt(n), "none" === i && a || vt.set(n, "olddisplay", a ? i : K.css(n, "display"))));
            for (o = 0; s > o; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[o] || "" : "none"));
            return t
        }

        function O(t, e, i, n, a) {
            return new O.prototype.init(t, e, i, n, a)
        }

        function A() {
            return setTimeout(function() {
                Zt = void 0
            }), Zt = K.now()
        }

        function L(t, e) {
            var i, n = 0,
                a = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = xt[n], a["margin" + i] = a["padding" + i] = t;
            return e && (a.opacity = a.width = t), a
        }

        function D(t, e, i) {
            for (var n, a = (ie[e] || []).concat(ie["*"]), r = 0, o = a.length; o > r; r++)
                if (n = a[r].call(i, e, t)) return n
        }

        function E(t, e, i) {
            var n, a, r, o, s, l, d, h, c = this,
                u = {},
                p = t.style,
                f = t.nodeType && Tt(t),
                g = vt.get(t, "fxshow");
            i.queue || (s = K._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, c.always(function() {
                c.always(function() {
                    s.unqueued--, K.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], d = K.css(t, "display"), h = "none" === d ? vt.get(t, "olddisplay") || b(t.nodeName) : d, "inline" === h && "none" === K.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", c.always(function() {
                p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (a = e[n], Jt.exec(a)) {
                    if (delete e[n], r = r || "toggle" === a, a === (f ? "hide" : "show")) {
                        if ("show" !== a || !g || void 0 === g[n]) continue;
                        f = !0
                    }
                    u[n] = g && g[n] || K.style(t, n)
                } else d = void 0;
            if (K.isEmptyObject(u)) "inline" === ("none" === d ? b(t.nodeName) : d) && (p.display = d);
            else {
                g ? "hidden" in g && (f = g.hidden) : g = vt.access(t, "fxshow", {}), r && (g.hidden = !f), f ? K(t).show() : c.done(function() {
                    K(t).hide()
                }), c.done(function() {
                    var e;
                    vt.remove(t, "fxshow");
                    for (e in u) K.style(t, e, u[e])
                });
                for (n in u) o = D(f ? g[n] : 0, n, c), n in g || (g[n] = o.start, f && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function I(t, e) {
            var i, n, a, r, o;
            for (i in t)
                if (n = K.camelCase(i), a = e[n], r = t[i], K.isArray(r) && (a = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), o = K.cssHooks[n], o && "expand" in o) {
                    r = o.expand(r), delete t[n];
                    for (i in r) i in t || (t[i] = r[i], e[i] = a)
                } else e[n] = a
        }

        function R(t, e, i) {
            var n, a, r = 0,
                o = ee.length,
                s = K.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (a) return !1;
                    for (var e = Zt || A(), i = Math.max(0, d.startTime + d.duration - e), n = i / d.duration || 0, r = 1 - n, o = 0, l = d.tweens.length; l > o; o++) d.tweens[o].run(r);
                    return s.notifyWith(t, [d, r, i]), 1 > r && l ? i : (s.resolveWith(t, [d]), !1)
                },
                d = s.promise({
                    elem: t,
                    props: K.extend({}, e),
                    opts: K.extend(!0, {
                        specialEasing: {}
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Zt || A(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = K.Tween(t, d.opts, e, i, d.opts.specialEasing[e] || d.opts.easing);
                        return d.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? d.tweens.length : 0;
                        if (a) return this;
                        for (a = !0; n > i; i++) d.tweens[i].run(1);
                        return e ? s.resolveWith(t, [d, e]) : s.rejectWith(t, [d, e]), this
                    }
                }),
                h = d.props;
            for (I(h, d.opts.specialEasing); o > r; r++)
                if (n = ee[r].call(d, t, h, d.opts)) return n;
            return K.map(h, D, d), K.isFunction(d.opts.start) && d.opts.start.call(t, d), K.fx.timer(K.extend(l, {
                elem: t,
                anim: d,
                queue: d.opts.queue
            })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
        }

        function M(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, a = 0,
                    r = e.toLowerCase().match(pt) || [];
                if (K.isFunction(i))
                    for (; n = r[a++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function N(t, e, i, n) {
            function a(s) {
                var l;
                return r[s] = !0, K.each(t[s] || [], function(t, s) {
                    var d = s(e, i, n);
                    return "string" != typeof d || o || r[d] ? o ? !(l = d) : void 0 : (e.dataTypes.unshift(d), a(d), !1)
                }), l
            }
            var r = {},
                o = t === we;
            return a(e.dataTypes[0]) || !r["*"] && a("*")
        }

        function z(t, e) {
            var i, n, a = K.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((a[i] ? t : n || (n = {}))[i] = e[i]);
            return n && K.extend(!0, t, n), t
        }

        function $(t, e, i) {
            for (var n, a, r, o, s = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (a in s)
                    if (s[a] && s[a].test(n)) {
                        l.unshift(a);
                        break
                    }
            if (l[0] in i) r = l[0];
            else {
                for (a in i) {
                    if (!l[0] || t.converters[a + " " + l[0]]) {
                        r = a;
                        break
                    }
                    o || (o = a)
                }
                r = r || o
            }
            return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
        }

        function j(t, e, i, n) {
            var a, r, o, s, l, d = {},
                h = t.dataTypes.slice();
            if (h[1])
                for (o in t.converters) d[o.toLowerCase()] = t.converters[o];
            for (r = h.shift(); r;)
                if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = h.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (o = d[l + " " + r] || d["* " + r], !o)
                    for (a in d)
                        if (s = a.split(" "), s[1] === r && (o = d[l + " " + s[0]] || d["* " + s[0]])) {
                            o === !0 ? o = d[a] : d[a] !== !0 && (r = s[0], h.unshift(s[1]));
                            break
                        }
                if (o !== !0)
                    if (o && t["throws"]) e = o(e);
                    else try {
                        e = o(e)
                    } catch (c) {
                        return {
                            state: "parsererror",
                            error: o ? c : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function F(t, e, i, n) {
            var a;
            if (K.isArray(e)) K.each(e, function(e, a) {
                i || ke.test(t) ? n(t, a) : F(t + "[" + ("object" == typeof a ? e : "") + "]", a, i, n)
            });
            else if (i || "object" !== K.type(e)) n(t, e);
            else
                for (a in e) F(t + "[" + a + "]", e[a], i, n)
        }

        function H(t) {
            return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var W = [],
            q = W.slice,
            X = W.concat,
            B = W.push,
            Y = W.indexOf,
            U = {},
            V = U.toString,
            Q = U.hasOwnProperty,
            Z = {},
            G = t.document,
            J = "2.1.4",
            K = function(t, e) {
                return new K.fn.init(t, e)
            },
            tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            et = /^-ms-/,
            it = /-([\da-z])/gi,
            nt = function(t, e) {
                return e.toUpperCase()
            };
        K.fn = K.prototype = {
            jquery: J,
            constructor: K,
            selector: "",
            length: 0,
            toArray: function() {
                return q.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : q.call(this)
            },
            pushStack: function(t) {
                var e = K.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return K.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(K.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(q.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: B,
            sort: W.sort,
            splice: W.splice
        }, K.extend = K.fn.extend = function() {
            var t, e, i, n, a, r, o = arguments[0] || {},
                s = 1,
                l = arguments.length,
                d = !1;
            for ("boolean" == typeof o && (d = o, o = arguments[s] || {}, s++), "object" == typeof o || K.isFunction(o) || (o = {}), s === l && (o = this, s--); l > s; s++)
                if (null != (t = arguments[s]))
                    for (e in t) i = o[e], n = t[e], o !== n && (d && n && (K.isPlainObject(n) || (a = K.isArray(n))) ? (a ? (a = !1, r = i && K.isArray(i) ? i : []) : r = i && K.isPlainObject(i) ? i : {}, o[e] = K.extend(d, r, n)) : void 0 !== n && (o[e] = n));
            return o
        }, K.extend({
            expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === K.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                return !K.isArray(t) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function(t) {
                return "object" !== K.type(t) || t.nodeType || K.isWindow(t) ? !1 : !t.constructor || Q.call(t.constructor.prototype, "isPrototypeOf")
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? U[V.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, i = eval;
                t = K.trim(t), t && (1 === t.indexOf("use strict") ? (e = G.createElement("script"), e.text = t, G.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function(t) {
                return t.replace(et, "ms-").replace(it, nt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, n) {
                var a, r = 0,
                    o = t.length,
                    s = i(t);
                if (n) {
                    if (s)
                        for (; o > r && (a = e.apply(t[r], n), a !== !1); r++);
                    else
                        for (r in t)
                            if (a = e.apply(t[r], n), a === !1) break
                } else if (s)
                    for (; o > r && (a = e.call(t[r], r, t[r]), a !== !1); r++);
                else
                    for (r in t)
                        if (a = e.call(t[r], r, t[r]), a === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(tt, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? K.merge(n, "string" == typeof t ? [t] : t) : B.call(n, t)), n
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : Y.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, a = t.length; i > n; n++) t[a++] = e[n];
                return t.length = a, t
            },
            grep: function(t, e, i) {
                for (var n, a = [], r = 0, o = t.length, s = !i; o > r; r++) n = !e(t[r], r), n !== s && a.push(t[r]);
                return a
            },
            map: function(t, e, n) {
                var a, r = 0,
                    o = t.length,
                    s = i(t),
                    l = [];
                if (s)
                    for (; o > r; r++) a = e(t[r], r, n), null != a && l.push(a);
                else
                    for (r in t) a = e(t[r], r, n), null != a && l.push(a);
                return X.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, a;
                return "string" == typeof e && (i = t[e], e = t, t = i), K.isFunction(t) ? (n = q.call(arguments, 2), a = function() {
                    return t.apply(e || this, n.concat(q.call(arguments)))
                }, a.guid = t.guid = t.guid || K.guid++, a) : void 0
            },
            now: Date.now,
            support: Z
        }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            U["[object " + e + "]"] = e.toLowerCase()
        });
        var at = function(t) {
            function e(t, e, i, n) {
                var a, r, o, s, l, d, c, p, f, g;
                if ((e ? e.ownerDocument || e : F) !== E && D(e), e = e || E, i = i || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s) return i;
                if (!n && R) {
                    if (11 !== s && (a = yt.exec(t)))
                        if (o = a[1]) {
                            if (9 === s) {
                                if (r = e.getElementById(o), !r || !r.parentNode) return i;
                                if (r.id === o) return i.push(r), i
                            } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(o)) && $(e, r) && r.id === o) return i.push(r), i
                        } else {
                            if (a[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                            if ((o = a[3]) && _.getElementsByClassName) return J.apply(i, e.getElementsByClassName(o)), i
                        }
                    if (_.qsa && (!M || !M.test(t))) {
                        if (p = c = j, f = e, g = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                            for (d = C(t), (c = e.getAttribute("id")) ? p = c.replace(bt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = d.length; l--;) d[l] = p + u(d[l]);
                            f = wt.test(t) && h(e.parentNode) || e, g = d.join(",")
                        }
                        if (g) try {
                            return J.apply(i, f.querySelectorAll(g)), i
                        } catch (m) {} finally {
                            c || e.removeAttribute("id")
                        }
                    }
                }
                return P(t.replace(lt, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[j] = !0, t
            }

            function a(t) {
                var e = E.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) x.attrHandle[i[n]] = e
            }

            function o(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function s(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function d(t) {
                return n(function(e) {
                    return e = +e, n(function(i, n) {
                        for (var a, r = t([], i.length, e), o = r.length; o--;) i[a = r[o]] && (i[a] = !(n[a] = i[a]))
                    })
                })
            }

            function h(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function c() {}

            function u(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function p(t, e, i) {
                var n = e.dir,
                    a = i && "parentNode" === n,
                    r = W++;
                return e.first ? function(e, i, r) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || a) return t(e, i, r)
                } : function(e, i, o) {
                    var s, l, d = [H, r];
                    if (o) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || a) && t(e, i, o)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || a) {
                                if (l = e[j] || (e[j] = {}), (s = l[n]) && s[0] === H && s[1] === r) return d[2] = s[2];
                                if (l[n] = d, d[2] = t(e, i, o)) return !0
                            }
                }
            }

            function f(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var a = t.length; a--;)
                        if (!t[a](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function g(t, i, n) {
                for (var a = 0, r = i.length; r > a; a++) e(t, i[a], n);
                return n
            }

            function m(t, e, i, n, a) {
                for (var r, o = [], s = 0, l = t.length, d = null != e; l > s; s++)(r = t[s]) && (i && !i(r, n, a) || (o.push(r), d && e.push(s)));
                return o
            }

            function v(t, e, i, a, r, o) {
                return a && !a[j] && (a = v(a)), r && !r[j] && (r = v(r, o)), n(function(n, o, s, l) {
                    var d, h, c, u = [],
                        p = [],
                        f = o.length,
                        v = n || g(e || "*", s.nodeType ? [s] : s, []),
                        y = !t || !n && e ? v : m(v, u, t, s, l),
                        w = i ? r || (n ? t : f || a) ? [] : o : y;
                    if (i && i(y, w, s, l), a)
                        for (d = m(w, p), a(d, [], s, l), h = d.length; h--;)(c = d[h]) && (w[p[h]] = !(y[p[h]] = c));
                    if (n) {
                        if (r || t) {
                            if (r) {
                                for (d = [], h = w.length; h--;)(c = w[h]) && d.push(y[h] = c);
                                r(null, w = [], d, l)
                            }
                            for (h = w.length; h--;)(c = w[h]) && (d = r ? tt(n, c) : u[h]) > -1 && (n[d] = !(o[d] = c))
                        }
                    } else w = m(w === o ? w.splice(f, w.length) : w), r ? r(null, o, w, l) : J.apply(o, w)
                })
            }

            function y(t) {
                for (var e, i, n, a = t.length, r = x.relative[t[0].type], o = r || x.relative[" "], s = r ? 1 : 0, l = p(function(t) {
                        return t === e
                    }, o, !0), d = p(function(t) {
                        return tt(e, t) > -1
                    }, o, !0), h = [function(t, i, n) {
                        var a = !r && (n || i !== O) || ((e = i).nodeType ? l(t, i, n) : d(t, i, n));
                        return e = null, a
                    }]; a > s; s++)
                    if (i = x.relative[t[s].type]) h = [p(f(h), i)];
                    else {
                        if (i = x.filter[t[s].type].apply(null, t[s].matches), i[j]) {
                            for (n = ++s; a > n && !x.relative[t[n].type]; n++);
                            return v(s > 1 && f(h), s > 1 && u(t.slice(0, s - 1).concat({
                                value: " " === t[s - 2].type ? "*" : ""
                            })).replace(lt, "$1"), i, n > s && y(t.slice(s, n)), a > n && y(t = t.slice(n)), a > n && u(t))
                        }
                        h.push(i)
                    }
                return f(h)
            }

            function w(t, i) {
                var a = i.length > 0,
                    r = t.length > 0,
                    o = function(n, o, s, l, d) {
                        var h, c, u, p = 0,
                            f = "0",
                            g = n && [],
                            v = [],
                            y = O,
                            w = n || r && x.find.TAG("*", d),
                            b = H += null == y ? 1 : Math.random() || .1,
                            _ = w.length;
                        for (d && (O = o !== E && o); f !== _ && null != (h = w[f]); f++) {
                            if (r && h) {
                                for (c = 0; u = t[c++];)
                                    if (u(h, o, s)) {
                                        l.push(h);
                                        break
                                    }
                                d && (H = b)
                            }
                            a && ((h = !u && h) && p--, n && g.push(h))
                        }
                        if (p += f, a && f !== p) {
                            for (c = 0; u = i[c++];) u(g, v, o, s);
                            if (n) {
                                if (p > 0)
                                    for (; f--;) g[f] || v[f] || (v[f] = Z.call(l));
                                v = m(v)
                            }
                            J.apply(l, v), d && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                        }
                        return d && (H = b, O = y), g
                    };
                return a ? n(o) : o
            }
            var b, _, x, T, k, C, S, P, O, A, L, D, E, I, R, M, N, z, $, j = "sizzle" + 1 * new Date,
                F = t.document,
                H = 0,
                W = 0,
                q = i(),
                X = i(),
                B = i(),
                Y = function(t, e) {
                    return t === e && (L = !0), 0
                },
                U = 1 << 31,
                V = {}.hasOwnProperty,
                Q = [],
                Z = Q.pop,
                G = Q.push,
                J = Q.push,
                K = Q.slice,
                tt = function(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                at = nt.replace("w", "w#"),
                rt = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + at + "))|)" + it + "*\\]",
                ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                st = new RegExp(it + "+", "g"),
                lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                dt = new RegExp("^" + it + "*," + it + "*"),
                ht = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                ct = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                ut = new RegExp(ot),
                pt = new RegExp("^" + at + "$"),
                ft = {
                    ID: new RegExp("^#(" + nt + ")"),
                    CLASS: new RegExp("^\\.(" + nt + ")"),
                    TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + rt),
                    PSEUDO: new RegExp("^" + ot),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                gt = /^(?:input|select|textarea|button)$/i,
                mt = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                wt = /[+~]/,
                bt = /'|\\/g,
                _t = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                xt = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                Tt = function() {
                    D()
                };
            try {
                J.apply(Q = K.call(F.childNodes), F.childNodes), Q[F.childNodes.length].nodeType
            } catch (kt) {
                J = {
                    apply: Q.length ? function(t, e) {
                        G.apply(t, K.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            _ = e.support = {}, k = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, D = e.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : F;
                return n !== E && 9 === n.nodeType && n.documentElement ? (E = n, I = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), R = !k(n), _.attributes = a(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), _.getElementsByTagName = a(function(t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), _.getElementsByClassName = vt.test(n.getElementsByClassName), _.getById = a(function(t) {
                    return I.appendChild(t).id = j, !n.getElementsByName || !n.getElementsByName(j).length
                }), _.getById ? (x.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && R) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, x.filter.ID = function(t) {
                    var e = t.replace(_t, xt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete x.find.ID, x.filter.ID = function(t) {
                    var e = t.replace(_t, xt);
                    return function(t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), x.find.TAG = _.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        a = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = r[a++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return r
                }, x.find.CLASS = _.getElementsByClassName && function(t, e) {
                    return R ? e.getElementsByClassName(t) : void 0
                }, N = [], M = [], (_.qsa = vt.test(n.querySelectorAll)) && (a(function(t) {
                    I.appendChild(t).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + j + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + j + "+*").length || M.push(".#.+[+~]")
                }), a(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
                })), (_.matchesSelector = vt.test(z = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && a(function(t) {
                    _.disconnectedMatch = z.call(t, "div"), z.call(t, "[s!='']:x"), N.push("!=", ot)
                }), M = M.length && new RegExp(M.join("|")), N = N.length && new RegExp(N.join("|")), e = vt.test(I.compareDocumentPosition), $ = e || vt.test(I.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, Y = e ? function(t, e) {
                    if (t === e) return L = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !_.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === F && $(F, t) ? -1 : e === n || e.ownerDocument === F && $(F, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return L = !0, 0;
                    var i, a = 0,
                        r = t.parentNode,
                        s = e.parentNode,
                        l = [t],
                        d = [e];
                    if (!r || !s) return t === n ? -1 : e === n ? 1 : r ? -1 : s ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                    if (r === s) return o(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) d.unshift(i);
                    for (; l[a] === d[a];) a++;
                    return a ? o(l[a], d[a]) : l[a] === F ? -1 : d[a] === F ? 1 : 0
                }, n) : E
            }, e.matches = function(t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== E && D(t), i = i.replace(ct, "='$1']"), _.matchesSelector && R && (!N || !N.test(i)) && (!M || !M.test(i))) try {
                    var n = z.call(t, i);
                    if (n || _.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (a) {}
                return e(i, E, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== E && D(t), $(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== E && D(t);
                var i = x.attrHandle[e.toLowerCase()],
                    n = i && V.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !R) : void 0;
                return void 0 !== n ? n : _.attributes || !R ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    a = 0;
                if (L = !_.detectDuplicates, A = !_.sortStable && t.slice(0), t.sort(Y), L) {
                    for (; e = t[a++];) e === t[a] && (n = i.push(a));
                    for (; n--;) t.splice(i[n], 1)
                }
                return A = null, t
            }, T = e.getText = function(t) {
                var e, i = "",
                    n = 0,
                    a = t.nodeType;
                if (a) {
                    if (1 === a || 9 === a || 11 === a) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                    } else if (3 === a || 4 === a) return t.nodeValue
                } else
                    for (; e = t[n++];) i += T(e);
                return i
            }, x = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(_t, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(_t, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ut.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(_t, xt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = q[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && q(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, i, n) {
                        return function(a) {
                            var r = e.attr(a, t);
                            return null == r ? "!=" === i : i ? (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(st, " ") + " ").indexOf(n) > -1 : "|=" === i ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, i, n, a) {
                        var r = "nth" !== t.slice(0, 3),
                            o = "last" !== t.slice(-4),
                            s = "of-type" === e;
                        return 1 === n && 0 === a ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var d, h, c, u, p, f, g = r !== o ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = s && e.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (c = e; c = c[g];)
                                            if (s ? c.nodeName.toLowerCase() === v : 1 === c.nodeType) return !1;
                                        f = g = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [o ? m.firstChild : m.lastChild], o && y) {
                                    for (h = m[j] || (m[j] = {}), d = h[t] || [], p = d[0] === H && d[1], u = d[0] === H && d[2], c = p && m.childNodes[p]; c = ++p && c && c[g] || (u = p = 0) || f.pop();)
                                        if (1 === c.nodeType && ++u && c === e) {
                                            h[t] = [H, p, u];
                                            break
                                        }
                                } else if (y && (d = (e[j] || (e[j] = {}))[t]) && d[0] === H) u = d[1];
                                else
                                    for (;
                                        (c = ++p && c && c[g] || (u = p = 0) || f.pop()) && ((s ? c.nodeName.toLowerCase() !== v : 1 !== c.nodeType) || !++u || (y && ((c[j] || (c[j] = {}))[t] = [H, u]), c !== e)););
                                return u -= a, u === n || u % n === 0 && u / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) {
                        var a, r = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[j] ? r(i) : r.length > 1 ? (a = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, a = r(t, i), o = a.length; o--;) n = tt(t, a[o]), t[n] = !(e[n] = a[o])
                        }) : function(t) {
                            return r(t, 0, a)
                        }) : r
                    }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            a = S(t.replace(lt, "$1"));
                        return a[j] ? n(function(t, e, i, n) {
                            for (var r, o = a(t, null, n, []), s = t.length; s--;)(r = o[s]) && (t[s] = !(e[s] = r))
                        }) : function(t, n, r) {
                            return e[0] = t, a(e, null, r, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function(t) {
                        return t = t.replace(_t, xt),
                            function(e) {
                                return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                            }
                    }),
                    lang: n(function(t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(_t, xt).toLowerCase(),
                            function(e) {
                                var i;
                                do
                                    if (i = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === I
                    },
                    focus: function(t) {
                        return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !x.pseudos.empty(t)
                    },
                    header: function(t) {
                        return mt.test(t.nodeName)
                    },
                    input: function(t) {
                        return gt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: d(function() {
                        return [0]
                    }),
                    last: d(function(t, e) {
                        return [e - 1]
                    }),
                    eq: d(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: d(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: d(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: d(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: d(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[b] = s(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[b] = l(b);
            return c.prototype = x.filters = x.pseudos, x.setFilters = new c, C = e.tokenize = function(t, i) {
                var n, a, r, o, s, l, d, h = X[t + " "];
                if (h) return i ? 0 : h.slice(0);
                for (s = t, l = [], d = x.preFilter; s;) {
                    n && !(a = dt.exec(s)) || (a && (s = s.slice(a[0].length) || s), l.push(r = [])), n = !1, (a = ht.exec(s)) && (n = a.shift(), r.push({
                        value: n,
                        type: a[0].replace(lt, " ")
                    }), s = s.slice(n.length));
                    for (o in x.filter) !(a = ft[o].exec(s)) || d[o] && !(a = d[o](a)) || (n = a.shift(), r.push({
                        value: n,
                        type: o,
                        matches: a
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return i ? s.length : s ? e.error(t) : X(t, l).slice(0)
            }, S = e.compile = function(t, e) {
                var i, n = [],
                    a = [],
                    r = B[t + " "];
                if (!r) {
                    for (e || (e = C(t)), i = e.length; i--;) r = y(e[i]), r[j] ? n.push(r) : a.push(r);
                    r = B(t, w(a, n)), r.selector = t
                }
                return r
            }, P = e.select = function(t, e, i, n) {
                var a, r, o, s, l, d = "function" == typeof t && t,
                    c = !n && C(t = d.selector || t);
                if (i = i || [], 1 === c.length) {
                    if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (o = r[0]).type && _.getById && 9 === e.nodeType && R && x.relative[r[1].type]) {
                        if (e = (x.find.ID(o.matches[0].replace(_t, xt), e) || [])[0], !e) return i;
                        d && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (a = ft.needsContext.test(t) ? 0 : r.length; a-- && (o = r[a], !x.relative[s = o.type]);)
                        if ((l = x.find[s]) && (n = l(o.matches[0].replace(_t, xt), wt.test(r[0].type) && h(e.parentNode) || e))) {
                            if (r.splice(a, 1), t = n.length && u(r), !t) return J.apply(i, n), i;
                            break
                        }
                }
                return (d || S(t, c))(n, e, !R, i, wt.test(t) && h(e.parentNode) || e), i
            }, _.sortStable = j.split("").sort(Y).join("") === j, _.detectDuplicates = !!L, D(), _.sortDetached = a(function(t) {
                return 1 & t.compareDocumentPosition(E.createElement("div"))
            }), a(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), _.attributes && a(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), a(function(t) {
                return null == t.getAttribute("disabled")
            }) || r(et, function(t, e, i) {
                var n;
                return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        K.find = at, K.expr = at.selectors, K.expr[":"] = K.expr.pseudos, K.unique = at.uniqueSort, K.text = at.getText, K.isXMLDoc = at.isXML, K.contains = at.contains;
        var rt = K.expr.match.needsContext,
            ot = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            st = /^.[^:#\[\.,]*$/;
        K.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? K.find.matchesSelector(n, t) ? [n] : [] : K.find.matches(t, K.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, K.fn.extend({
            find: function(t) {
                var e, i = this.length,
                    n = [],
                    a = this;
                if ("string" != typeof t) return this.pushStack(K(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (K.contains(a[e], this)) return !0
                }));
                for (e = 0; i > e; e++) K.find(t, a[e], n);
                return n = this.pushStack(i > 1 ? K.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function(t) {
                return !!n(this, "string" == typeof t && rt.test(t) ? K(t) : t || [], !1).length
            }
        });
        var lt, dt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ht = K.fn.init = function(t, e) {
                var i, n;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : dt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof K ? e[0] : e, K.merge(this, K.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), ot.test(i[1]) && K.isPlainObject(e))
                            for (i in e) K.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    return n = G.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = G, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : K.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), K.makeArray(t, this))
            };
        ht.prototype = K.fn, lt = K(G);
        var ct = /^(?:parents|prev(?:Until|All))/,
            ut = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        K.extend({
            dir: function(t, e, i) {
                for (var n = [], a = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (a && K(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            sibling: function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        }), K.fn.extend({
            has: function(t) {
                var e = K(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; i > t; t++)
                        if (K.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, a = this.length, r = [], o = rt.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; a > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && K.find.matchesSelector(i, t))) {
                            r.push(i);
                            break
                        }
                return this.pushStack(r.length > 1 ? K.unique(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? Y.call(K(t), this[0]) : Y.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(K.unique(K.merge(this.get(), K(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), K.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return K.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return K.dir(t, "parentNode", i)
            },
            next: function(t) {
                return a(t, "nextSibling")
            },
            prev: function(t) {
                return a(t, "previousSibling")
            },
            nextAll: function(t) {
                return K.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return K.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return K.dir(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return K.dir(t, "previousSibling", i)
            },
            siblings: function(t) {
                return K.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return K.sibling(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || K.merge([], t.childNodes)
            }
        }, function(t, e) {
            K.fn[t] = function(i, n) {
                var a = K.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (a = K.filter(n, a)), this.length > 1 && (ut[t] || K.unique(a), ct.test(t) && a.reverse()), this.pushStack(a)
            }
        });
        var pt = /\S+/g,
            ft = {};
        K.Callbacks = function(t) {
            t = "string" == typeof t ? ft[t] || r(t) : K.extend({}, t);
            var e, i, n, a, o, s, l = [],
                d = !t.once && [],
                h = function(r) {
                    for (e = t.memory && r, i = !0, s = a || 0, a = 0, o = l.length, n = !0; l && o > s; s++)
                        if (l[s].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                            e = !1;
                            break
                        }
                    n = !1, l && (d ? d.length && h(d.shift()) : e ? l = [] : c.disable())
                },
                c = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function r(e) {
                                K.each(e, function(e, i) {
                                    var n = K.type(i);
                                    "function" === n ? t.unique && c.has(i) || l.push(i) : i && i.length && "string" !== n && r(i)
                                })
                            }(arguments), n ? o = l.length : e && (a = i, h(e))
                        }
                        return this
                    },
                    remove: function() {
                        return l && K.each(arguments, function(t, e) {
                            for (var i;
                                (i = K.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (o >= i && o--, s >= i && s--)
                        }), this
                    },
                    has: function(t) {
                        return t ? K.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], o = 0, this
                    },
                    disable: function() {
                        return l = d = e = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return d = void 0, e || c.disable(), this
                    },
                    locked: function() {
                        return !d
                    },
                    fireWith: function(t, e) {
                        return !l || i && !d || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? d.push(e) : h(e)), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return c
        }, K.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", K.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", K.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", K.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return K.Deferred(function(i) {
                                K.each(e, function(e, r) {
                                    var o = K.isFunction(t[e]) && t[e];
                                    a[r[1]](function() {
                                        var t = o && o.apply(this, arguments);
                                        t && K.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? K.extend(t, n) : n
                        }
                    },
                    a = {};
                return n.pipe = n.then, K.each(e, function(t, r) {
                    var o = r[2],
                        s = r[3];
                    n[r[1]] = o.add, s && o.add(function() {
                        i = s
                    }, e[1 ^ t][2].disable, e[2][2].lock), a[r[0]] = function() {
                        return a[r[0] + "With"](this === a ? n : this, arguments), this
                    }, a[r[0] + "With"] = o.fireWith
                }), n.promise(a), t && t.call(a, a), a
            },
            when: function(t) {
                var e, i, n, a = 0,
                    r = q.call(arguments),
                    o = r.length,
                    s = 1 !== o || t && K.isFunction(t.promise) ? o : 0,
                    l = 1 === s ? t : K.Deferred(),
                    d = function(t, i, n) {
                        return function(a) {
                            i[t] = this, n[t] = arguments.length > 1 ? q.call(arguments) : a, n === e ? l.notifyWith(i, n) : --s || l.resolveWith(i, n)
                        }
                    };
                if (o > 1)
                    for (e = new Array(o), i = new Array(o), n = new Array(o); o > a; a++) r[a] && K.isFunction(r[a].promise) ? r[a].promise().done(d(a, n, r)).fail(l.reject).progress(d(a, i, e)) : --s;
                return s || l.resolveWith(n, r), l.promise()
            }
        });
        var gt;
        K.fn.ready = function(t) {
            return K.ready.promise().done(t), this
        }, K.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? K.readyWait++ : K.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --K.readyWait : K.isReady) || (K.isReady = !0, t !== !0 && --K.readyWait > 0 || (gt.resolveWith(G, [K]), K.fn.triggerHandler && (K(G).triggerHandler("ready"), K(G).off("ready"))))
            }
        }), K.ready.promise = function(e) {
            return gt || (gt = K.Deferred(), "complete" === G.readyState ? setTimeout(K.ready) : (G.addEventListener("DOMContentLoaded", o, !1), t.addEventListener("load", o, !1))), gt.promise(e)
        }, K.ready.promise();
        var mt = K.access = function(t, e, i, n, a, r, o) {
            var s = 0,
                l = t.length,
                d = null == i;
            if ("object" === K.type(i)) {
                a = !0;
                for (s in i) K.access(t, e, s, i[s], !0, r, o)
            } else if (void 0 !== n && (a = !0, K.isFunction(n) || (o = !0), d && (o ? (e.call(t, n), e = null) : (d = e, e = function(t, e, i) {
                    return d.call(K(t), i)
                })), e))
                for (; l > s; s++) e(t[s], i, o ? n : n.call(t[s], s, e(t[s], i)));
            return a ? t : d ? e.call(t) : l ? e(t[0], i) : r
        };
        K.acceptData = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        }, s.uid = 1, s.accepts = K.acceptData, s.prototype = {
            key: function(t) {
                if (!s.accepts(t)) return 0;
                var e = {},
                    i = t[this.expando];
                if (!i) {
                    i = s.uid++;
                    try {
                        e[this.expando] = {
                            value: i
                        }, Object.defineProperties(t, e)
                    } catch (n) {
                        e[this.expando] = i, K.extend(t, e)
                    }
                }
                return this.cache[i] || (this.cache[i] = {}), i
            },
            set: function(t, e, i) {
                var n, a = this.key(t),
                    r = this.cache[a];
                if ("string" == typeof e) r[e] = i;
                else if (K.isEmptyObject(r)) K.extend(this.cache[a], e);
                else
                    for (n in e) r[n] = e[n];
                return r
            },
            get: function(t, e) {
                var i = this.cache[this.key(t)];
                return void 0 === e ? i : i[e]
            },
            access: function(t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, K.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n, a, r = this.key(t),
                    o = this.cache[r];
                if (void 0 === e) this.cache[r] = {};
                else {
                    K.isArray(e) ? n = e.concat(e.map(K.camelCase)) : (a = K.camelCase(e), e in o ? n = [e, a] : (n = a, n = n in o ? [n] : n.match(pt) || [])), i = n.length;
                    for (; i--;) delete o[n[i]]
                }
            },
            hasData: function(t) {
                return !K.isEmptyObject(this.cache[t[this.expando]] || {})
            },
            discard: function(t) {
                t[this.expando] && delete this.cache[t[this.expando]]
            }
        };
        var vt = new s,
            yt = new s,
            wt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            bt = /([A-Z])/g;
        K.extend({
            hasData: function(t) {
                return yt.hasData(t) || vt.hasData(t)
            },
            data: function(t, e, i) {
                return yt.access(t, e, i)
            },
            removeData: function(t, e) {
                yt.remove(t, e)
            },
            _data: function(t, e, i) {
                return vt.access(t, e, i)
            },
            _removeData: function(t, e) {
                vt.remove(t, e)
            }
        }), K.fn.extend({
            data: function(t, e) {
                var i, n, a, r = this[0],
                    o = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (a = yt.get(r), 1 === r.nodeType && !vt.get(r, "hasDataAttrs"))) {
                        for (i = o.length; i--;) o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = K.camelCase(n.slice(5)), l(r, n, a[n])));
                        vt.set(r, "hasDataAttrs", !0)
                    }
                    return a
                }
                return "object" == typeof t ? this.each(function() {
                    yt.set(this, t)
                }) : mt(this, function(e) {
                    var i, n = K.camelCase(t);
                    if (r && void 0 === e) {
                        if (i = yt.get(r, t), void 0 !== i) return i;
                        if (i = yt.get(r, n), void 0 !== i) return i;
                        if (i = l(r, n, void 0), void 0 !== i) return i
                    } else this.each(function() {
                        var i = yt.get(this, n);
                        yt.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && yt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    yt.remove(this, t)
                })
            }
        }), K.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = vt.get(t, e), i && (!n || K.isArray(i) ? n = vt.access(t, e, K.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = K.queue(t, e),
                    n = i.length,
                    a = i.shift(),
                    r = K._queueHooks(t, e),
                    o = function() {
                        K.dequeue(t, e)
                    };
                "inprogress" === a && (a = i.shift(), n--), a && ("fx" === e && i.unshift("inprogress"), delete r.stop, a.call(t, o, r)), !n && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return vt.get(t, i) || vt.access(t, i, {
                    empty: K.Callbacks("once memory").add(function() {
                        vt.remove(t, [e + "queue", i])
                    })
                })
            }
        }), K.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? K.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = K.queue(this, t, e);
                    K._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && K.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    K.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    a = K.Deferred(),
                    r = this,
                    o = this.length,
                    s = function() {
                        --n || a.resolveWith(r, [r])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) i = vt.get(r[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(s));
                return s(), a.promise(e)
            }
        });
        var _t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            xt = ["Top", "Right", "Bottom", "Left"],
            Tt = function(t, e) {
                return t = e || t, "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
            },
            kt = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = G.createDocumentFragment(),
                e = t.appendChild(G.createElement("div")),
                i = G.createElement("input");
            i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), Z.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", Z.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Ct = "undefined";
        Z.focusinBubbles = "onfocusin" in t;
        var St = /^key/,
            Pt = /^(?:mouse|pointer|contextmenu)|click/,
            Ot = /^(?:focusinfocus|focusoutblur)$/,
            At = /^([^.]*)(?:\.(.+)|)$/;
        K.event = {
            global: {},
            add: function(t, e, i, n, a) {
                var r, o, s, l, d, h, c, u, p, f, g, m = vt.get(t);
                if (m)
                    for (i.handler && (r = i, i = r.handler, a = r.selector), i.guid || (i.guid = K.guid++), (l = m.events) || (l = m.events = {}), (o = m.handle) || (o = m.handle = function(e) {
                            return typeof K !== Ct && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(pt) || [""], d = e.length; d--;) s = At.exec(e[d]) || [], p = g = s[1], f = (s[2] || "").split(".").sort(), p && (c = K.event.special[p] || {}, p = (a ? c.delegateType : c.bindType) || p, c = K.event.special[p] || {}, h = K.extend({
                        type: p,
                        origType: g,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: a,
                        needsContext: a && K.expr.match.needsContext.test(a),
                        namespace: f.join(".")
                    }, r), (u = l[p]) || (u = l[p] = [], u.delegateCount = 0, c.setup && c.setup.call(t, n, f, o) !== !1 || t.addEventListener && t.addEventListener(p, o, !1)), c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), a ? u.splice(u.delegateCount++, 0, h) : u.push(h), K.event.global[p] = !0)
            },
            remove: function(t, e, i, n, a) {
                var r, o, s, l, d, h, c, u, p, f, g, m = vt.hasData(t) && vt.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(pt) || [""], d = e.length; d--;)
                        if (s = At.exec(e[d]) || [], p = g = s[1], f = (s[2] || "").split(".").sort(), p) {
                            for (c = K.event.special[p] || {}, p = (n ? c.delegateType : c.bindType) || p, u = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = u.length; r--;) h = u[r], !a && g !== h.origType || i && i.guid !== h.guid || s && !s.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (u.splice(r, 1), h.selector && u.delegateCount--, c.remove && c.remove.call(t, h));
                            o && !u.length && (c.teardown && c.teardown.call(t, f, m.handle) !== !1 || K.removeEvent(t, p, m.handle), delete l[p])
                        } else
                            for (p in l) K.event.remove(t, p + e[d], i, n, !0);
                    K.isEmptyObject(l) && (delete m.handle, vt.remove(t, "events"))
                }
            },
            trigger: function(e, i, n, a) {
                var r, o, s, l, d, h, c, u = [n || G],
                    p = Q.call(e, "type") ? e.type : e,
                    f = Q.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = s = n = n || G, 3 !== n.nodeType && 8 !== n.nodeType && !Ot.test(p + K.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), d = p.indexOf(":") < 0 && "on" + p, e = e[K.expando] ? e : new K.Event(p, "object" == typeof e && e), e.isTrigger = a ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : K.makeArray(i, [e]), c = K.event.special[p] || {}, a || !c.trigger || c.trigger.apply(n, i) !== !1)) {
                    if (!a && !c.noBubble && !K.isWindow(n)) {
                        for (l = c.delegateType || p, Ot.test(l + p) || (o = o.parentNode); o; o = o.parentNode) u.push(o), s = o;
                        s === (n.ownerDocument || G) && u.push(s.defaultView || s.parentWindow || t)
                    }
                    for (r = 0;
                        (o = u[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : c.bindType || p, h = (vt.get(o, "events") || {})[e.type] && vt.get(o, "handle"), h && h.apply(o, i), h = d && o[d], h && h.apply && K.acceptData(o) && (e.result = h.apply(o, i), e.result === !1 && e.preventDefault());
                    return e.type = p, a || e.isDefaultPrevented() || c._default && c._default.apply(u.pop(), i) !== !1 || !K.acceptData(n) || d && K.isFunction(n[p]) && !K.isWindow(n) && (s = n[d], s && (n[d] = null), K.event.triggered = p, n[p](), K.event.triggered = void 0, s && (n[d] = s)), e.result
                }
            },
            dispatch: function(t) {
                t = K.event.fix(t);
                var e, i, n, a, r, o = [],
                    s = q.call(arguments),
                    l = (vt.get(this, "events") || {})[t.type] || [],
                    d = K.event.special[t.type] || {};
                if (s[0] = t, t.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, t) !== !1) {
                    for (o = K.event.handlers.call(this, t, l), e = 0;
                        (a = o[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = a.elem, i = 0;
                            (r = a.handlers[i++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(r.namespace) || (t.handleObj = r, t.data = r.data, n = ((K.event.special[r.origType] || {}).handle || r.handler).apply(a.elem, s), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return d.postDispatch && d.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, a, r, o = [],
                    s = e.delegateCount,
                    l = t.target;
                if (s && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (l.disabled !== !0 || "click" !== t.type) {
                            for (n = [], i = 0; s > i; i++) r = e[i], a = r.selector + " ", void 0 === n[a] && (n[a] = r.needsContext ? K(a, this).index(l) >= 0 : K.find(a, this, null, [l]).length), n[a] && n.push(r);
                            n.length && o.push({
                                elem: l,
                                handlers: n
                            })
                        }
                return s < e.length && o.push({
                    elem: this,
                    handlers: e.slice(s)
                }), o
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, n, a, r = e.button;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || G, n = i.documentElement, a = i.body, t.pageX = e.clientX + (n && n.scrollLeft || a && a.scrollLeft || 0) - (n && n.clientLeft || a && a.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || a && a.scrollTop || 0) - (n && n.clientTop || a && a.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[K.expando]) return t;
                var e, i, n, a = t.type,
                    r = t,
                    o = this.fixHooks[a];
                for (o || (this.fixHooks[a] = o = Pt.test(a) ? this.mouseHooks : St.test(a) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new K.Event(r), e = n.length; e--;) i = n[e], t[i] = r[i];
                return t.target || (t.target = G), 3 === t.target.nodeType && (t.target = t.target.parentNode), o.filter ? o.filter(t, r) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== c() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === c() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return K.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, i, n) {
                var a = K.extend(new K.Event, i, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? K.event.trigger(a, null, e) : K.event.dispatch.call(e, a), a.isDefaultPrevented() && i.preventDefault()
            }
        }, K.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        }, K.Event = function(t, e) {
            return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : h) : this.type = t, e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(t, e)
        }, K.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = d, t && t.preventDefault && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = d, t && t.stopPropagation && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, K.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            K.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        a = t.relatedTarget,
                        r = t.handleObj;
                    return a && (a === n || K.contains(n, a)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), Z.focusinBubbles || K.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                K.event.simulate(e, t.target, K.event.fix(t), !0)
            };
            K.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        a = vt.access(n, e);
                    a || n.addEventListener(t, i, !0), vt.access(n, e, (a || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        a = vt.access(n, e) - 1;
                    a ? vt.access(n, e, a) : (n.removeEventListener(t, i, !0), vt.remove(n, e))
                }
            }
        }), K.fn.extend({
            on: function(t, e, i, n, a) {
                var r, o;
                if ("object" == typeof t) {
                    "string" != typeof e && (i = i || e, e = void 0);
                    for (o in t) this.on(o, e, i, t[o], a);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = h;
                else if (!n) return this;
                return 1 === a && (r = n, n = function(t) {
                    return K().off(t), r.apply(this, arguments)
                }, n.guid = r.guid || (r.guid = K.guid++)), this.each(function() {
                    K.event.add(this, t, n, i, e)
                })
            },
            one: function(t, e, i, n) {
                return this.on(t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, a;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, K(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (a in t) this.off(a, e, t[a]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = h), this.each(function() {
                    K.event.remove(this, t, i, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    K.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? K.event.trigger(t, e, i, !0) : void 0
            }
        });
        var Lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Dt = /<([\w:]+)/,
            Et = /<|&#?\w+;/,
            It = /<(?:script|style|link)/i,
            Rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Mt = /^$|\/(?:java|ecma)script/i,
            Nt = /^true\/(.*)/,
            zt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            $t = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        $t.optgroup = $t.option, $t.tbody = $t.tfoot = $t.colgroup = $t.caption = $t.thead, $t.th = $t.td, K.extend({
            clone: function(t, e, i) {
                var n, a, r, o, s = t.cloneNode(!0),
                    l = K.contains(t.ownerDocument, t);
                if (!(Z.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t)))
                    for (o = v(s), r = v(t), n = 0, a = r.length; a > n; n++) y(r[n], o[n]);
                if (e)
                    if (i)
                        for (r = r || v(t), o = o || v(s), n = 0, a = r.length; a > n; n++) m(r[n], o[n]);
                    else m(t, s);
                return o = v(s, "script"), o.length > 0 && g(o, !l && v(t, "script")), s
            },
            buildFragment: function(t, e, i, n) {
                for (var a, r, o, s, l, d, h = e.createDocumentFragment(), c = [], u = 0, p = t.length; p > u; u++)
                    if (a = t[u], a || 0 === a)
                        if ("object" === K.type(a)) K.merge(c, a.nodeType ? [a] : a);
                        else if (Et.test(a)) {
                    for (r = r || h.appendChild(e.createElement("div")), o = (Dt.exec(a) || ["", ""])[1].toLowerCase(), s = $t[o] || $t._default, r.innerHTML = s[1] + a.replace(Lt, "<$1></$2>") + s[2], d = s[0]; d--;) r = r.lastChild;
                    K.merge(c, r.childNodes), r = h.firstChild, r.textContent = ""
                } else c.push(e.createTextNode(a));
                for (h.textContent = "", u = 0; a = c[u++];)
                    if ((!n || -1 === K.inArray(a, n)) && (l = K.contains(a.ownerDocument, a), r = v(h.appendChild(a), "script"), l && g(r), i))
                        for (d = 0; a = r[d++];) Mt.test(a.type || "") && i.push(a);
                return h
            },
            cleanData: function(t) {
                for (var e, i, n, a, r = K.event.special, o = 0; void 0 !== (i = t[o]); o++) {
                    if (K.acceptData(i) && (a = i[vt.expando], a && (e = vt.cache[a]))) {
                        if (e.events)
                            for (n in e.events) r[n] ? K.event.remove(i, n) : K.removeEvent(i, n, e.handle);
                        vt.cache[a] && delete vt.cache[a]
                    }
                    delete yt.cache[i[yt.expando]]
                }
            }
        }), K.fn.extend({
            text: function(t) {
                return mt(this, function(t) {
                    return void 0 === t ? K.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = u(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = u(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var i, n = t ? K.filter(t, this) : this, a = 0; null != (i = n[a]); a++) e || 1 !== i.nodeType || K.cleanData(v(i)), i.parentNode && (e && K.contains(i.ownerDocument, i) && g(v(i, "script")), i.parentNode.removeChild(i));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (K.cleanData(v(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return K.clone(this, t, e)
                })
            },
            html: function(t) {
                return mt(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !It.test(t) && !$t[(Dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(Lt, "<$1></$2>");
                        try {
                            for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (K.cleanData(v(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (a) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, K.cleanData(v(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = X.apply([], t);
                var i, n, a, r, o, s, l = 0,
                    d = this.length,
                    h = this,
                    c = d - 1,
                    u = t[0],
                    g = K.isFunction(u);
                if (g || d > 1 && "string" == typeof u && !Z.checkClone && Rt.test(u)) return this.each(function(i) {
                    var n = h.eq(i);
                    g && (t[0] = u.call(this, i, n.html())), n.domManip(t, e)
                });
                if (d && (i = K.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                    for (a = K.map(v(i, "script"), p), r = a.length; d > l; l++) o = i, l !== c && (o = K.clone(o, !0, !0), r && K.merge(a, v(o, "script"))), e.call(this[l], o, l);
                    if (r)
                        for (s = a[a.length - 1].ownerDocument, K.map(a, f), l = 0; r > l; l++) o = a[l], Mt.test(o.type || "") && !vt.access(o, "globalEval") && K.contains(s, o) && (o.src ? K._evalUrl && K._evalUrl(o.src) : K.globalEval(o.textContent.replace(zt, "")))
                }
                return this
            }
        }), K.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            K.fn[t] = function(t) {
                for (var i, n = [], a = K(t), r = a.length - 1, o = 0; r >= o; o++) i = o === r ? this : this.clone(!0), K(a[o])[e](i), B.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var jt, Ft = {},
            Ht = /^margin/,
            Wt = new RegExp("^(" + _t + ")(?!px)[a-z%]+$", "i"),
            qt = function(e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
            };
        ! function() {
            function e() {
                o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", a.appendChild(r);
                var e = t.getComputedStyle(o, null);
                i = "1%" !== e.top, n = "4px" === e.width, a.removeChild(r)
            }
            var i, n, a = G.documentElement,
                r = G.createElement("div"),
                o = G.createElement("div");
            o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", Z.clearCloneStyle = "content-box" === o.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(o), t.getComputedStyle && K.extend(Z, {
                pixelPosition: function() {
                    return e(), i
                },
                boxSizingReliable: function() {
                    return null == n && e(), n
                },
                reliableMarginRight: function() {
                    var e, i = o.appendChild(G.createElement("div"));
                    return i.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", o.style.width = "1px", a.appendChild(r), e = !parseFloat(t.getComputedStyle(i, null).marginRight), a.removeChild(r), o.removeChild(i), e
                }
            }))
        }(), K.swap = function(t, e, i, n) {
            var a, r, o = {};
            for (r in e) o[r] = t.style[r], t.style[r] = e[r];
            a = i.apply(t, n || []);
            for (r in e) t.style[r] = o[r];
            return a
        };
        var Xt = /^(none|table(?!-c[ea]).+)/,
            Bt = new RegExp("^(" + _t + ")(.*)$", "i"),
            Yt = new RegExp("^([+-])=(" + _t + ")", "i"),
            Ut = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Vt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Qt = ["Webkit", "O", "Moz", "ms"];
        K.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = _(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var a, r, o, s = K.camelCase(e),
                        l = t.style;
                    return e = K.cssProps[s] || (K.cssProps[s] = T(l, s)), o = K.cssHooks[e] || K.cssHooks[s], void 0 === i ? o && "get" in o && void 0 !== (a = o.get(t, !1, n)) ? a : l[e] : (r = typeof i, "string" === r && (a = Yt.exec(i)) && (i = (a[1] + 1) * a[2] + parseFloat(K.css(t, e)), r = "number"), null != i && i === i && ("number" !== r || K.cssNumber[s] || (i += "px"), Z.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (l[e] = i)), void 0)
                }
            },
            css: function(t, e, i, n) {
                var a, r, o, s = K.camelCase(e);
                return e = K.cssProps[s] || (K.cssProps[s] = T(t.style, s)), o = K.cssHooks[e] || K.cssHooks[s], o && "get" in o && (a = o.get(t, !0, i)), void 0 === a && (a = _(t, e, n)), "normal" === a && e in Vt && (a = Vt[e]), "" === i || i ? (r = parseFloat(a), i === !0 || K.isNumeric(r) ? r || 0 : a) : a
            }
        }), K.each(["height", "width"], function(t, e) {
            K.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? Xt.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, Ut, function() {
                        return S(t, e, n)
                    }) : S(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var a = n && qt(t);
                    return k(t, i, n ? C(t, e, n, "border-box" === K.css(t, "boxSizing", !1, a), a) : 0)
                }
            }
        }), K.cssHooks.marginRight = x(Z.reliableMarginRight, function(t, e) {
            return e ? K.swap(t, {
                display: "inline-block"
            }, _, [t, "marginRight"]) : void 0
        }), K.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            K.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, a = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) a[t + xt[n] + e] = r[n] || r[n - 2] || r[0];
                    return a
                }
            }, Ht.test(t) || (K.cssHooks[t + e].set = k)
        }), K.fn.extend({
            css: function(t, e) {
                return mt(this, function(t, e, i) {
                    var n, a, r = {},
                        o = 0;
                    if (K.isArray(e)) {
                        for (n = qt(t), a = e.length; a > o; o++) r[e[o]] = K.css(t, e[o], !1, n);
                        return r
                    }
                    return void 0 !== i ? K.style(t, e, i) : K.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return P(this, !0)
            },
            hide: function() {
                return P(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Tt(this) ? K(this).show() : K(this).hide()
                })
            }
        }), K.Tween = O, O.prototype = {
            constructor: O,
            init: function(t, e, i, n, a, r) {
                this.elem = t, this.prop = i, this.easing = a || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (K.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = O.propHooks[this.prop];
                return t && t.get ? t.get(this) : O.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = O.propHooks[this.prop];
                return this.options.duration ? this.pos = e = K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : O.propHooks._default.set(this), this
            }
        }, O.prototype.init.prototype = O.prototype, O.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, K.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, K.fx = O.prototype.init, K.fx.step = {};
        var Zt, Gt, Jt = /^(?:toggle|show|hide)$/,
            Kt = new RegExp("^(?:([+-])=|)(" + _t + ")([a-z%]*)$", "i"),
            te = /queueHooks$/,
            ee = [E],
            ie = {
                "*": [function(t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        a = Kt.exec(e),
                        r = a && a[3] || (K.cssNumber[t] ? "" : "px"),
                        o = (K.cssNumber[t] || "px" !== r && +n) && Kt.exec(K.css(i.elem, t)),
                        s = 1,
                        l = 20;
                    if (o && o[3] !== r) {
                        r = r || o[3], a = a || [], o = +n || 1;
                        do s = s || ".5", o /= s, K.style(i.elem, t, o + r); while (s !== (s = i.cur() / n) && 1 !== s && --l)
                    }
                    return a && (o = i.start = +o || +n || 0, i.unit = r, i.end = a[1] ? o + (a[1] + 1) * a[2] : +a[2]), i
                }]
            };
        K.Animation = K.extend(R, {
                tweener: function(t, e) {
                    K.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var i, n = 0, a = t.length; a > n; n++) i = t[n], ie[i] = ie[i] || [], ie[i].unshift(e)
                },
                prefilter: function(t, e) {
                    e ? ee.unshift(t) : ee.push(t)
                }
            }), K.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? K.extend({}, t) : {
                    complete: i || !i && e || K.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !K.isFunction(e) && e
                };
                return n.duration = K.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in K.fx.speeds ? K.fx.speeds[n.duration] : K.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    K.isFunction(n.old) && n.old.call(this), n.queue && K.dequeue(this, n.queue)
                }, n
            }, K.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(Tt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(t, e, i, n) {
                    var a = K.isEmptyObject(t),
                        r = K.speed(e, i, n),
                        o = function() {
                            var e = R(this, K.extend({}, t), r);
                            (a || vt.get(this, "finish")) && e.stop(!0)
                        };
                    return o.finish = o, a || r.queue === !1 ? this.each(o) : this.queue(r.queue, o)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            a = null != t && t + "queueHooks",
                            r = K.timers,
                            o = vt.get(this);
                        if (a) o[a] && o[a].stop && n(o[a]);
                        else
                            for (a in o) o[a] && o[a].stop && te.test(a) && n(o[a]);
                        for (a = r.length; a--;) r[a].elem !== this || null != t && r[a].queue !== t || (r[a].anim.stop(i), e = !1, r.splice(a, 1));
                        !e && i || K.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, i = vt.get(this),
                            n = i[t + "queue"],
                            a = i[t + "queueHooks"],
                            r = K.timers,
                            o = n ? n.length : 0;
                        for (i.finish = !0, K.queue(this, t, []), a && a.stop && a.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; o > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), K.each(["toggle", "show", "hide"], function(t, e) {
                var i = K.fn[e];
                K.fn[e] = function(t, n, a) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(L(e, !0), t, n, a)
                }
            }), K.each({
                slideDown: L("show"),
                slideUp: L("hide"),
                slideToggle: L("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                K.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), K.timers = [], K.fx.tick = function() {
                var t, e = 0,
                    i = K.timers;
                for (Zt = K.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
                i.length || K.fx.stop(), Zt = void 0
            }, K.fx.timer = function(t) {
                K.timers.push(t), t() ? K.fx.start() : K.timers.pop()
            }, K.fx.interval = 13, K.fx.start = function() {
                Gt || (Gt = setInterval(K.fx.tick, K.fx.interval))
            }, K.fx.stop = function() {
                clearInterval(Gt), Gt = null
            }, K.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, K.fn.delay = function(t, e) {
                return t = K.fx ? K.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var n = setTimeout(e, t);
                    i.stop = function() {
                        clearTimeout(n)
                    }
                })
            },
            function() {
                var t = G.createElement("input"),
                    e = G.createElement("select"),
                    i = e.appendChild(G.createElement("option"));
                t.type = "checkbox", Z.checkOn = "" !== t.value, Z.optSelected = i.selected, e.disabled = !0, Z.optDisabled = !i.disabled, t = G.createElement("input"), t.value = "t", t.type = "radio", Z.radioValue = "t" === t.value
            }();
        var ne, ae, re = K.expr.attrHandle;
        K.fn.extend({
            attr: function(t, e) {
                return mt(this, K.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    K.removeAttr(this, t)
                })
            }
        }), K.extend({
            attr: function(t, e, i) {
                var n, a, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === Ct ? K.prop(t, e, i) : (1 === r && K.isXMLDoc(t) || (e = e.toLowerCase(), n = K.attrHooks[e] || (K.expr.match.bool.test(e) ? ae : ne)), void 0 === i ? n && "get" in n && null !== (a = n.get(t, e)) ? a : (a = K.find.attr(t, e), null == a ? void 0 : a) : null !== i ? n && "set" in n && void 0 !== (a = n.set(t, i, e)) ? a : (t.setAttribute(e, i + ""), i) : void K.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var i, n, a = 0,
                    r = e && e.match(pt);
                if (r && 1 === t.nodeType)
                    for (; i = r[a++];) n = K.propFix[i] || i, K.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!Z.radioValue && "radio" === e && K.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            }
        }), ae = {
            set: function(t, e, i) {
                return e === !1 ? K.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, K.each(K.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = re[e] || K.find.attr;
            re[e] = function(t, e, n) {
                var a, r;
                return n || (r = re[e], re[e] = a, a = null != i(t, e, n) ? e.toLowerCase() : null, re[e] = r), a
            }
        });
        var oe = /^(?:input|select|textarea|button)$/i;
        K.fn.extend({
            prop: function(t, e) {
                return mt(this, K.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[K.propFix[t] || t]
                })
            }
        }), K.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, i) {
                var n, a, r, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o) return r = 1 !== o || !K.isXMLDoc(t), r && (e = K.propFix[e] || e, a = K.propHooks[e]), void 0 !== i ? a && "set" in a && void 0 !== (n = a.set(t, i, e)) ? n : t[e] = i : a && "get" in a && null !== (n = a.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        return t.hasAttribute("tabindex") || oe.test(t.nodeName) || t.href ? t.tabIndex : -1
                    }
                }
            }
        }), Z.optSelected || (K.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }
        }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            K.propFix[this.toLowerCase()] = this
        });
        var se = /[\t\r\n\f]/g;
        K.fn.extend({
            addClass: function(t) {
                var e, i, n, a, r, o, s = "string" == typeof t && t,
                    l = 0,
                    d = this.length;
                if (K.isFunction(t)) return this.each(function(e) {
                    K(this).addClass(t.call(this, e, this.className))
                });
                if (s)
                    for (e = (t || "").match(pt) || []; d > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(se, " ") : " ")) {
                            for (r = 0; a = e[r++];) n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                            o = K.trim(n), i.className !== o && (i.className = o)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, a, r, o, s = 0 === arguments.length || "string" == typeof t && t,
                    l = 0,
                    d = this.length;
                if (K.isFunction(t)) return this.each(function(e) {
                    K(this).removeClass(t.call(this, e, this.className))
                });
                if (s)
                    for (e = (t || "").match(pt) || []; d > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(se, " ") : "")) {
                            for (r = 0; a = e[r++];)
                                for (; n.indexOf(" " + a + " ") >= 0;) n = n.replace(" " + a + " ", " ");
                            o = t ? K.trim(n) : "", i.className !== o && (i.className = o)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : K.isFunction(t) ? this.each(function(i) {
                    K(this).toggleClass(t.call(this, i, this.className, e), e)
                }) : this.each(function() {
                    if ("string" === i)
                        for (var e, n = 0, a = K(this), r = t.match(pt) || []; e = r[n++];) a.hasClass(e) ? a.removeClass(e) : a.addClass(e);
                    else i !== Ct && "boolean" !== i || (this.className && vt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : vt.get(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(se, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        });
        var le = /\r/g;
        K.fn.extend({
            val: function(t) {
                var e, i, n, a = this[0]; {
                    if (arguments.length) return n = K.isFunction(t), this.each(function(i) {
                        var a;
                        1 === this.nodeType && (a = n ? t.call(this, i, K(this).val()) : t, null == a ? a = "" : "number" == typeof a ? a += "" : K.isArray(a) && (a = K.map(a, function(t) {
                            return null == t ? "" : t + ""
                        })), e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, a, "value") || (this.value = a))
                    });
                    if (a) return e = K.valHooks[a.type] || K.valHooks[a.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(a, "value")) ? i : (i = a.value, "string" == typeof i ? i.replace(le, "") : null == i ? "" : i)
                }
            }
        }), K.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = K.find.attr(t, "value");
                        return null != e ? e : K.trim(K.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, a = t.selectedIndex, r = "select-one" === t.type || 0 > a, o = r ? null : [], s = r ? a + 1 : n.length, l = 0 > a ? s : r ? a : 0; s > l; l++)
                            if (i = n[l], (i.selected || l === a) && (Z.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !K.nodeName(i.parentNode, "optgroup"))) {
                                if (e = K(i).val(), r) return e;
                                o.push(e)
                            }
                        return o
                    },
                    set: function(t, e) {
                        for (var i, n, a = t.options, r = K.makeArray(e), o = a.length; o--;) n = a[o], (n.selected = K.inArray(n.value, r) >= 0) && (i = !0);
                        return i || (t.selectedIndex = -1), r
                    }
                }
            }
        }), K.each(["radio", "checkbox"], function() {
            K.valHooks[this] = {
                set: function(t, e) {
                    return K.isArray(e) ? t.checked = K.inArray(K(t).val(), e) >= 0 : void 0
                }
            }, Z.checkOn || (K.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            K.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), K.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        });
        var de = K.now(),
            he = /\?/;
        K.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, K.parseXML = function(t) {
            var e, i;
            if (!t || "string" != typeof t) return null;
            try {
                i = new DOMParser, e = i.parseFromString(t, "text/xml")
            } catch (n) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || K.error("Invalid XML: " + t), e
        };
        var ce = /#.*$/,
            ue = /([?&])_=[^&]*/,
            pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            ge = /^(?:GET|HEAD)$/,
            me = /^\/\//,
            ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            ye = {},
            we = {},
            be = "*/".concat("*"),
            _e = t.location.href,
            xe = ve.exec(_e.toLowerCase()) || [];
        K.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: _e,
                type: "GET",
                isLocal: fe.test(xe[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": be,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": K.parseJSON,
                    "text xml": K.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? z(z(t, K.ajaxSettings), e) : z(K.ajaxSettings, t)
            },
            ajaxPrefilter: M(ye),
            ajaxTransport: M(we),
            ajax: function(t, e) {
                function i(t, e, i, o) {
                    var l, h, v, y, b, x = e;
                    2 !== w && (w = 2, s && clearTimeout(s), n = void 0, r = o || "", _.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (y = $(c, _, i)), y = j(c, y, _, l), l ? (c.ifModified && (b = _.getResponseHeader("Last-Modified"), b && (K.lastModified[a] = b), b = _.getResponseHeader("etag"), b && (K.etag[a] = b)), 204 === t || "HEAD" === c.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = y.state, h = y.data, v = y.error, l = !v)) : (v = x, !t && x || (x = "error", 0 > t && (t = 0))), _.status = t, _.statusText = (e || x) + "", l ? f.resolveWith(u, [h, x, _]) : f.rejectWith(u, [_, x, v]), _.statusCode(m), m = void 0, d && p.trigger(l ? "ajaxSuccess" : "ajaxError", [_, c, l ? h : v]), g.fireWith(u, [_, x]), d && (p.trigger("ajaxComplete", [_, c]), --K.active || K.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, a, r, o, s, l, d, h, c = K.ajaxSetup({}, e),
                    u = c.context || c,
                    p = c.context && (u.nodeType || u.jquery) ? K(u) : K.event,
                    f = K.Deferred(),
                    g = K.Callbacks("once memory"),
                    m = c.statusCode || {},
                    v = {},
                    y = {},
                    w = 0,
                    b = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === w) {
                                if (!o)
                                    for (o = {}; e = pe.exec(r);) o[e[1].toLowerCase()] = e[2];
                                e = o[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? r : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return w || (t = y[i] = y[i] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return w || (c.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > w)
                                    for (e in t) m[e] = [m[e], t[e]];
                                else _.always(t[_.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || b;
                            return n && n.abort(e), i(0, e), this
                        }
                    };
                if (f.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, c.url = ((t || c.url || _e) + "").replace(ce, "").replace(me, xe[1] + "//"), c.type = e.method || e.type || c.method || c.type, c.dataTypes = K.trim(c.dataType || "*").toLowerCase().match(pt) || [""], null == c.crossDomain && (l = ve.exec(c.url.toLowerCase()), c.crossDomain = !(!l || l[1] === xe[1] && l[2] === xe[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (xe[3] || ("http:" === xe[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = K.param(c.data, c.traditional)), N(ye, c, e, _), 2 === w) return _;
                d = K.event && c.global, d && 0 === K.active++ && K.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !ge.test(c.type), a = c.url, c.hasContent || (c.data && (a = c.url += (he.test(a) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = ue.test(a) ? a.replace(ue, "$1_=" + de++) : a + (he.test(a) ? "&" : "?") + "_=" + de++)), c.ifModified && (K.lastModified[a] && _.setRequestHeader("If-Modified-Since", K.lastModified[a]), K.etag[a] && _.setRequestHeader("If-None-Match", K.etag[a])), (c.data && c.hasContent && c.contentType !== !1 || e.contentType) && _.setRequestHeader("Content-Type", c.contentType), _.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + be + "; q=0.01" : "") : c.accepts["*"]);
                for (h in c.headers) _.setRequestHeader(h, c.headers[h]);
                if (c.beforeSend && (c.beforeSend.call(u, _, c) === !1 || 2 === w)) return _.abort();
                b = "abort";
                for (h in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) _[h](c[h]);
                if (n = N(we, c, e, _)) {
                    _.readyState = 1, d && p.trigger("ajaxSend", [_, c]), c.async && c.timeout > 0 && (s = setTimeout(function() {
                        _.abort("timeout")
                    }, c.timeout));
                    try {
                        w = 1, n.send(v, i)
                    } catch (x) {
                        if (!(2 > w)) throw x;
                        i(-1, x)
                    }
                } else i(-1, "No Transport");
                return _
            },
            getJSON: function(t, e, i) {
                return K.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return K.get(t, void 0, e, "script")
            }
        }), K.each(["get", "post"], function(t, e) {
            K[e] = function(t, i, n, a) {
                return K.isFunction(i) && (a = a || n, n = i, i = void 0), K.ajax({
                    url: t,
                    type: e,
                    dataType: a,
                    data: i,
                    success: n
                })
            }
        }), K._evalUrl = function(t) {
            return K.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, K.fn.extend({
            wrapAll: function(t) {
                var e;
                return K.isFunction(t) ? this.each(function(e) {
                    K(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return K.isFunction(t) ? this.each(function(e) {
                    K(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = K(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = K.isFunction(t);
                return this.each(function(i) {
                    K(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
                }).end()
            }
        }), K.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0
        }, K.expr.filters.visible = function(t) {
            return !K.expr.filters.hidden(t)
        };
        var Te = /%20/g,
            ke = /\[\]$/,
            Ce = /\r?\n/g,
            Se = /^(?:submit|button|image|reset|file)$/i,
            Pe = /^(?:input|select|textarea|keygen)/i;
        K.param = function(t, e) {
            var i, n = [],
                a = function(t, e) {
                    e = K.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(t) || t.jquery && !K.isPlainObject(t)) K.each(t, function() {
                a(this.name, this.value)
            });
            else
                for (i in t) F(i, t[i], e, a);
            return n.join("&").replace(Te, "+")
        }, K.fn.extend({
            serialize: function() {
                return K.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = K.prop(this, "elements");
                    return t ? K.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !K(this).is(":disabled") && Pe.test(this.nodeName) && !Se.test(t) && (this.checked || !kt.test(t))
                }).map(function(t, e) {
                    var i = K(this).val();
                    return null == i ? null : K.isArray(i) ? K.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ce, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Ce, "\r\n")
                    }
                }).get()
            }
        }), K.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (t) {}
        };
        var Oe = 0,
            Ae = {},
            Le = {
                0: 200,
                1223: 204
            },
            De = K.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() {
            for (var t in Ae) Ae[t]()
        }), Z.cors = !!De && "withCredentials" in De, Z.ajax = De = !!De, K.ajaxTransport(function(t) {
            var e;
            return Z.cors || De && !t.crossDomain ? {
                send: function(i, n) {
                    var a, r = t.xhr(),
                        o = ++Oe;
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) r[a] = t.xhrFields[a];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i) r.setRequestHeader(a, i[a]);
                    e = function(t) {
                        return function() {
                            e && (delete Ae[o], e = r.onload = r.onerror = null, "abort" === t ? r.abort() : "error" === t ? n(r.status, r.statusText) : n(Le[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                                text: r.responseText
                            } : void 0, r.getAllResponseHeaders()))
                        }
                    }, r.onload = e(), r.onerror = e("error"), e = Ae[o] = e("abort");
                    try {
                        r.send(t.hasContent && t.data || null)
                    } catch (s) {
                        if (e) throw s
                    }
                },
                abort: function() {
                    e && e()
                }
            } : void 0
        }), K.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return K.globalEval(t), t
                }
            }
        }), K.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), K.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i;
                return {
                    send: function(n, a) {
                        e = K("<script>").prop({
                            async: !0,
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function(t) {
                            e.remove(), i = null, t && a("error" === t.type ? 404 : 200, t.type)
                        }), G.head.appendChild(e[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
            }
        });
        var Ee = [],
            Ie = /(=)\?(?=&|$)|\?\?/;
        K.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ee.pop() || K.expando + "_" + de++;
                return this[t] = !0, t
            }
        }), K.ajaxPrefilter("json jsonp", function(e, i, n) {
            var a, r, o, s = e.jsonp !== !1 && (Ie.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ie.test(e.data) && "data");
            return s || "jsonp" === e.dataTypes[0] ? (a = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ie, "$1" + a) : e.jsonp !== !1 && (e.url += (he.test(e.url) ? "&" : "?") + e.jsonp + "=" + a), e.converters["script json"] = function() {
                return o || K.error(a + " was not called"), o[0]
            }, e.dataTypes[0] = "json", r = t[a], t[a] = function() {
                o = arguments
            }, n.always(function() {
                t[a] = r, e[a] && (e.jsonpCallback = i.jsonpCallback, Ee.push(a)), o && K.isFunction(r) && r(o[0]), o = r = void 0
            }), "script") : void 0
        }), K.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || G;
            var n = ot.exec(t),
                a = !i && [];
            return n ? [e.createElement(n[1])] : (n = K.buildFragment([t], e, a), a && a.length && K(a).remove(), K.merge([], n.childNodes))
        };
        var Re = K.fn.load;
        K.fn.load = function(t, e, i) {
            if ("string" != typeof t && Re) return Re.apply(this, arguments);
            var n, a, r, o = this,
                s = t.indexOf(" ");
            return s >= 0 && (n = K.trim(t.slice(s)), t = t.slice(0, s)), K.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (a = "POST"), o.length > 0 && K.ajax({
                url: t,
                type: a,
                dataType: "html",
                data: e
            }).done(function(t) {
                r = arguments, o.html(n ? K("<div>").append(K.parseHTML(t)).find(n) : t)
            }).complete(i && function(t, e) {
                o.each(i, r || [t.responseText, e, t])
            }), this
        }, K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            K.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), K.expr.filters.animated = function(t) {
            return K.grep(K.timers, function(e) {
                return t === e.elem
            }).length
        };
        var Me = t.document.documentElement;
        K.offset = {
            setOffset: function(t, e, i) {
                var n, a, r, o, s, l, d, h = K.css(t, "position"),
                    c = K(t),
                    u = {};
                "static" === h && (t.style.position = "relative"), s = c.offset(), r = K.css(t, "top"), l = K.css(t, "left"), d = ("absolute" === h || "fixed" === h) && (r + l).indexOf("auto") > -1, d ? (n = c.position(), o = n.top, a = n.left) : (o = parseFloat(r) || 0, a = parseFloat(l) || 0), K.isFunction(e) && (e = e.call(t, i, s)), null != e.top && (u.top = e.top - s.top + o), null != e.left && (u.left = e.left - s.left + a), "using" in e ? e.using.call(t, u) : c.css(u)
            }
        }, K.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    K.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0],
                    a = {
                        top: 0,
                        left: 0
                    },
                    r = n && n.ownerDocument;
                if (r) return e = r.documentElement, K.contains(e, n) ? (typeof n.getBoundingClientRect !== Ct && (a = n.getBoundingClientRect()), i = H(r), {
                    top: a.top + i.pageYOffset - e.clientTop,
                    left: a.left + i.pageXOffset - e.clientLeft
                }) : a
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === K.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), K.nodeName(t[0], "html") || (n = t.offset()), n.top += K.css(t[0], "borderTopWidth", !0), n.left += K.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - K.css(i, "marginTop", !0),
                        left: e.left - n.left - K.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || Me; t && !K.nodeName(t, "html") && "static" === K.css(t, "position");) t = t.offsetParent;
                    return t || Me
                })
            }
        }), K.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, i) {
            var n = "pageYOffset" === i;
            K.fn[e] = function(a) {
                return mt(this, function(e, a, r) {
                    var o = H(e);
                    return void 0 === r ? o ? o[i] : e[a] : void(o ? o.scrollTo(n ? t.pageXOffset : r, n ? r : t.pageYOffset) : e[a] = r)
                }, e, a, arguments.length, null)
            }
        }), K.each(["top", "left"], function(t, e) {
            K.cssHooks[e] = x(Z.pixelPosition, function(t, i) {
                return i ? (i = _(t, e), Wt.test(i) ? K(t).position()[e] + "px" : i) : void 0
            })
        }), K.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            K.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                K.fn[n] = function(n, a) {
                    var r = arguments.length && (i || "boolean" != typeof n),
                        o = i || (n === !0 || a === !0 ? "margin" : "border");
                    return mt(this, function(e, i, n) {
                        var a;
                        return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (a = e.documentElement, Math.max(e.body["scroll" + t], a["scroll" + t], e.body["offset" + t], a["offset" + t], a["client" + t])) : void 0 === n ? K.css(e, i, o) : K.style(e, i, n, o)
                    }, e, r ? n : void 0, r, null)
                }
            })
        }), K.fn.size = function() {
            return this.length
        }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return K
        });
        var Ne = t.jQuery,
            ze = t.$;
        return K.noConflict = function(e) {
            return t.$ === K && (t.$ = ze), e && t.jQuery === K && (t.jQuery = Ne), K
        }, typeof e === Ct && (t.jQuery = t.$ = K), K
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var a = function() {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(a, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                a = i.data("bs.alert");
            a || i.data("bs.alert", a = new n(this)), "string" == typeof e && a[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        n = function(e) {
            t(e).on("click", i, this.close)
        };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        function i() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var a = t(this),
            r = a.attr("data-target");
        r || (r = a.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(r);
        e && e.preventDefault(), o.length || (o = a.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var a = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = a, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                a = n.data("bs.button"),
                r = "object" == typeof e && e;
            a || n.data("bs.button", a = new i(this, r)), "toggle" == e ? a.toggle() : e && a.setState(e)
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.3.6", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            n = this.$element,
            a = n.is("input") ? "val" : "html",
            r = n.data();
        e += "Text", null == r.resetText && n.data("resetText", n[a]()), setTimeout(t.proxy(function() {
            n[a](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var n = t(i.target);
        n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                a = n.data("bs.carousel"),
                r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                o = "string" == typeof e ? e : r.slide;
            a || n.data("bs.carousel", a = new i(this, r)), "number" == typeof e ? a.to(e) : o ? a[o]() : r.interval && a.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (n && !this.options.wrap) return e;
        var a = "prev" == t ? -1 : 1,
            r = (i + a) % this.$items.length;
        return this.$items.eq(r)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, n) {
        var a = this.$element.find(".item.active"),
            r = n || this.getItemForDirection(e, a),
            o = this.interval,
            s = "next" == e ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var d = r[0],
            h = t.Event("slide.bs.carousel", {
                relatedTarget: d,
                direction: s
            });
        if (this.$element.trigger(h), !h.isDefaultPrevented()) {
            if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = t(this.$indicators.children()[this.getItemIndex(r)]);
                c && c.addClass("active")
            }
            var u = t.Event("slid.bs.carousel", {
                relatedTarget: d,
                direction: s
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, a.addClass(s), r.addClass(s), a.one("bsTransitionEnd", function() {
                r.removeClass([e, s].join(" ")).addClass("active"), a.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(u)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (a.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(u)), o && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this
    };
    var a = function(i) {
        var n, a = t(this),
            r = t(a.attr("data-target") || (n = a.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var o = t.extend({}, r.data(), a.data()),
                s = a.attr("data-slide-to");
            s && (o.interval = !1), e.call(r, o), s && r.data("bs.carousel").to(s), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", a).on("click.bs.carousel.data-api", "[data-slide-to]", a), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                a = i.data("bs.collapse"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !a && r.toggle && /show|hide/.test(e) && (r.toggle = !1), a || i.data("bs.collapse", a = new n(this, r)), "string" == typeof e && a[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, a = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(a && a.length && (e = a.data("bs.collapse"), e && e.transitioning))) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    a && a.length && (i.call(a, "hide"), e || a.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return s.call(this);
                    var l = t.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[o](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var a = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : a.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
            var a = t(n);
            this.addAriaAndCollapsedClass(e(a), a)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var a = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = a, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var a = t(this);
        a.attr("data-target") || n.preventDefault();
        var r = e(a),
            o = r.data("bs.collapse"),
            s = o ? "toggle" : a.data();
        i.call(r, s)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(a).remove(), t(r).each(function() {
            var n = t(this),
                a = e(n),
                r = {
                    relatedTarget: this
                };
            a.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(a[0], i.target) || (a.trigger(i = t.Event("hide.bs.dropdown", r)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), a.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function n(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var a = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        o = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    o.VERSION = "3.3.6", o.prototype.toggle = function(n) {
        var a = t(this);
        if (!a.is(".disabled, :disabled")) {
            var r = e(a),
                o = r.hasClass("open");
            if (i(), !o) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var s = {
                    relatedTarget: this
                };
                if (r.trigger(n = t.Event("show.bs.dropdown", s)), n.isDefaultPrevented()) return;
                a.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, o.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var n = t(this);
            if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                var a = e(n),
                    o = a.hasClass("open");
                if (!o && 27 != i.which || o && 27 == i.which) return 27 == i.which && a.find(r).trigger("focus"), n.trigger("click");
                var s = " li:not(.disabled):visible a",
                    l = a.find(".dropdown-menu" + s);
                if (l.length) {
                    var d = l.index(i.target);
                    38 == i.which && d > 0 && d--, 40 == i.which && d < l.length - 1 && d++, ~d || (d = 0), l.eq(d).trigger("focus")
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = s, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, n) {
        return this.each(function() {
            var a = t(this),
                r = a.data("bs.modal"),
                o = t.extend({}, i.DEFAULTS, a.data(), "object" == typeof e && e);
            r || a.data("bs.modal", r = new i(this, o)), "string" == typeof e ? r[e](n) : o.show && r.show(n)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var n = this,
            a = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(a), this.isShown || a.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var a = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), a && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            a ? n.$dialog.one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var n = this,
            a = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && a;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + a).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : o()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var n = t(this),
            a = n.attr("href"),
            r = t(n.attr("data-target") || a && a.replace(/.*(?=#[^\s]+$)/, "")),
            o = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(a) && a
            }, r.data(), n.data());
        n.is("a") && i.preventDefault(), r.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(r, o, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                a = n.data("bs.tooltip"),
                r = "object" == typeof e && e;
            !a && /destroy|hide/.test(e) || (a || n.data("bs.tooltip", a = new i(this, r)), "string" == typeof e && a[e]())
        })
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function(e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var a = this.options.trigger.split(" "), r = a.length; r--;) {
            var o = a[r];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != o) {
                var s = "hover" == o ? "mouseenter" : "focusin",
                    l = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var a = this,
                r = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), r.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && r.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                d = l.test(s);
            d && (s = s.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var h = this.getPosition(),
                c = r[0].offsetWidth,
                u = r[0].offsetHeight;
            if (d) {
                var p = s,
                    f = this.getPosition(this.$viewport);
                s = "bottom" == s && h.bottom + u > f.bottom ? "top" : "top" == s && h.top - u < f.top ? "bottom" : "right" == s && h.right + c > f.width ? "left" : "left" == s && h.left - c < f.left ? "right" : s, r.removeClass(p).addClass(s)
            }
            var g = this.getCalculatedOffset(s, h, c, u);
            this.applyPlacement(g, s);
            var m = function() {
                var t = a.hoverState;
                a.$element.trigger("shown.bs." + a.type), a.hoverState = null, "out" == t && a.leave(a)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            a = n[0].offsetWidth,
            r = n[0].offsetHeight,
            o = parseInt(n.css("margin-top"), 10),
            s = parseInt(n.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(s) && (s = 0), e.top += o, e.left += s, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            d = n[0].offsetHeight;
        "top" == i && d != r && (e.top = e.top + r - d);
        var h = this.getViewportAdjustedDelta(i, e, l, d);
        h.left ? e.left += h.left : e.top += h.top;
        var c = /top|bottom/.test(i),
            u = c ? 2 * h.left - a + l : 2 * h.top - r + d,
            p = c ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(u, n[0][p], c)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function n() {
            "in" != a.hoverState && r.detach(), a.$element.removeAttr("aria-describedby").trigger("hidden.bs." + a.type), e && e()
        }
        var a = this,
            r = t(this.$tip),
            o = t.Event("hide.bs." + this.type);
        return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            n = "BODY" == i.tagName,
            a = i.getBoundingClientRect();
        null == a.width && (a = t.extend({}, a, {
            width: a.right - a.left,
            height: a.bottom - a.top
        }));
        var r = n ? {
                top: 0,
                left: 0
            } : e.offset(),
            o = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            s = n ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, a, o, s, r)
    }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var a = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return a;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - r - o.scroll,
                l = e.top + r - o.scroll + n;
            s < o.top ? a.top = o.top - s : l > o.top + o.height && (a.top = o.top + o.height - l)
        } else {
            var d = e.left - r,
                h = e.left + r + i;
            d < o.left ? a.left = o.left - d : h > o.right && (a.left = o.left + o.width - h)
        }
        return a
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                a = n.data("bs.popover"),
                r = "object" == typeof e && e;
            !a && /destroy|hide/.test(e) || (a || n.data("bs.popover", a = new i(this, r)), "string" == typeof e && a[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var n = t(this),
                a = n.data("bs.scrollspy"),
                r = "object" == typeof i && i;
            a || n.data("bs.scrollspy", a = new e(this, r)), "string" == typeof i && a[i]()
        })
    }
    e.VERSION = "3.3.6", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                a = e.data("target") || e.attr("href"),
                r = /^#./.test(a) && t(a);
            return r && r.length && r.is(":visible") && [
                [r[i]().top + n, a]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            a = this.offsets,
            r = this.targets,
            o = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return o != (t = r[r.length - 1]) && this.activate(t);
        if (o && e < a[0]) return this.activeTarget = null, this.clear();
        for (t = a.length; t--;) o != r[t] && e >= a[t] && (void 0 === a[t + 1] || e < a[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                a = n.data("bs.tab");
            a || n.data("bs.tab", a = new i(this)), "string" == typeof e && a[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var a = i.find(".active:last a"),
                r = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                o = t.Event("show.bs.tab", {
                    relatedTarget: a[0]
                });
            if (a.trigger(r), e.trigger(o), !o.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var s = t(n);
                this.activate(e.closest("li"), i), this.activate(s, s.parent(), function() {
                    a.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: a[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, n, a) {
        function r() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), a && a()
        }
        var o = n.find("> .active"),
            s = a && t.support.transition && (o.length && o.hasClass("fade") || !!n.find("> .fade").length);
        o.length && s ? o.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r(), o.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    };
    var a = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', a).on("click.bs.tab.data-api", '[data-toggle="pill"]', a)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                a = n.data("bs.affix"),
                r = "object" == typeof e && e;
            a || n.data("bs.affix", a = new i(this, r)), "string" == typeof e && a[e]()
        })
    }
    var i = function(e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, n) {
        var a = this.$target.scrollTop(),
            r = this.$element.offset(),
            o = this.$target.height();
        if (null != i && "top" == this.affixed) return i > a ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? a + this.unpin <= r.top ? !1 : "bottom" : t - n >= a + o ? !1 : "bottom";
        var s = null == this.affixed,
            l = s ? a : r.top,
            d = s ? o : e;
        return null != i && i >= a ? "top" : null != n && l + d >= t - n ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                n = this.options.offset,
                a = n.top,
                r = n.bottom,
                o = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (r = a = n), "function" == typeof a && (a = n.top(this.$element)), "function" == typeof r && (r = n.bottom(this.$element));
            var s = this.getState(o, e, a, r);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                    d = t.Event(l + ".bs.affix");
                if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: o - e - r
            })
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = n, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery),
function() {
    "use strict";

    function t(e, n) {
        function a(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        var r;
        if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = e, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !t.notNeeded(e)) {
            for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], s = this, l = 0, d = o.length; d > l; l++) s[o[l]] = a(s[o[l]], s);
            i && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, i, n) {
                var a = Node.prototype.removeEventListener;
                "click" === t ? a.call(e, t, i.hijacked || i, n) : a.call(e, t, i, n)
            }, e.addEventListener = function(t, i, n) {
                var a = Node.prototype.addEventListener;
                "click" === t ? a.call(e, t, i.hijacked || (i.hijacked = function(t) {
                    t.propagationStopped || i(t)
                }), n) : a.call(e, t, i, n)
            }), "function" == typeof e.onclick && (r = e.onclick, e.addEventListener("click", function(t) {
                r(t)
            }, !1), e.onclick = null)
        }
    }
    var e = navigator.userAgent.indexOf("Windows Phone") >= 0,
        i = navigator.userAgent.indexOf("Android") > 0 && !e,
        n = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
        a = n && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        r = n && /OS [6-7]_\d/.test(navigator.userAgent),
        o = navigator.userAgent.indexOf("BB10") > 0;
    t.prototype.needsClick = function(t) {
        switch (t.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (t.disabled) return !0;
                break;
            case "input":
                if (n && "file" === t.type || t.disabled) return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(t.className)
    }, t.prototype.needsFocus = function(t) {
        switch (t.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !i;
            case "input":
                switch (t.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !t.disabled && !t.readOnly;
            default:
                return /\bneedsfocus\b/.test(t.className)
        }
    }, t.prototype.sendClick = function(t, e) {
        var i, n;
        document.activeElement && document.activeElement !== t && document.activeElement.blur(), n = e.changedTouches[0], i = document.createEvent("MouseEvents"), i.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, t.dispatchEvent(i)
    }, t.prototype.determineEventType = function(t) {
        return i && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
    }, t.prototype.focus = function(t) {
        var e;
        n && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
    }, t.prototype.updateScrollParent = function(t) {
        var e, i;
        if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
            i = t;
            do {
                if (i.scrollHeight > i.offsetHeight) {
                    e = i, t.fastClickScrollParent = i;
                    break
                }
                i = i.parentElement
            } while (i)
        }
        e && (e.fastClickLastScrollTop = e.scrollTop)
    }, t.prototype.getTargetElementFromEventTarget = function(t) {
        return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
    }, t.prototype.onTouchStart = function(t) {
        var e, i, r;
        if (t.targetTouches.length > 1) return !0;
        if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], n) {
            if (r = window.getSelection(), r.rangeCount && !r.isCollapsed) return !0;
            if (!a) {
                if (i.identifier && i.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                this.lastTouchIdentifier = i.identifier, this.updateScrollParent(e)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = i.pageX, this.touchStartY = i.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
    }, t.prototype.touchHasMoved = function(t) {
        var e = t.changedTouches[0],
            i = this.touchBoundary;
        return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i
    }, t.prototype.onTouchMove = function(t) {
        return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0
    }, t.prototype.findControl = function(t) {
        return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, t.prototype.onTouchEnd = function(t) {
        var e, o, s, l, d, h = this.targetElement;
        if (!this.trackingClick) return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, o = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, r && (d = t.changedTouches[0], h = document.elementFromPoint(d.pageX - window.pageXOffset, d.pageY - window.pageYOffset) || h, h.fastClickScrollParent = this.targetElement.fastClickScrollParent), s = h.tagName.toLowerCase(), "label" === s) {
            if (e = this.findControl(h)) {
                if (this.focus(h), i) return !1;
                h = e
            }
        } else if (this.needsFocus(h)) return t.timeStamp - o > 100 || n && window.top !== window && "input" === s ? (this.targetElement = null, !1) : (this.focus(h), this.sendClick(h, t), n && "select" === s || (this.targetElement = null, t.preventDefault()), !1);
        return n && !a && (l = h.fastClickScrollParent, l && l.fastClickLastScrollTop !== l.scrollTop) ? !0 : (this.needsClick(h) || (t.preventDefault(), this.sendClick(h, t)), !1)
    }, t.prototype.onTouchCancel = function() {
        this.trackingClick = !1, this.targetElement = null
    }, t.prototype.onMouse = function(t) {
        return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0
    }, t.prototype.onClick = function(t) {
        var e;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (e = this.onMouse(t), e || (this.targetElement = null), e)
    }, t.prototype.destroy = function() {
        var t = this.layer;
        i && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1),
            t.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, t.notNeeded = function(t) {
        var e, n, a, r;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!i) return !0;
            if (e = document.querySelector("meta[name=viewport]")) {
                if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (o && (a = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), a[1] >= 10 && a[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction ? !0 : (r = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], r >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === t.style.touchAction || "manipulation" === t.style.touchAction)
    }, t.attach = function(e, i) {
        return new t(e, i)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return t
    }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t
}(),
function(t) {
    var e = new Array,
        i = new Array,
        n = function() {},
        a = 0,
        r = {
            splashVPos: "35%",
            loaderVPos: "75%",
            splashID: "#jpreContent",
            showSplash: !0,
            showPercentage: !0,
            autoClose: !0,
            closeBtnText: "Start!",
            onetimeLoad: !1,
            debugMode: !1,
            splashFunction: function() {}
        },
        o = function() {
            if (r.onetimeLoad) {
                for (var t, e = document.cookie.split("; "), i = 0; t = e[i] && e[i].split("="); i++)
                    if ("jpreLoader" === t.shift()) return t.join("=");
                return !1
            }
            return !1
        },
        s = function(t) {
            if (r.onetimeLoad) {
                var e = new Date;
                e.setDate(e.getDate() + t);
                var i = null == t ? "" : "expires=" + e.toUTCString();
                document.cookie = "jpreLoader=loaded; " + i
            }
        },
        l = function() {
            if (jOverlay = t("<div></div>").attr("id", "jpreOverlay").css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 9999999
                }).appendTo("body"), r.showSplash) {
                jContent = t("<div></div>").attr("id", "jpreSlide").appendTo(jOverlay);
                var e = t(window).width() - t(jContent).width();
                t(jContent).css({
                    position: "absolute",
                    top: r.splashVPos,
                    left: Math.round(50 / t(window).width() * e) + "%"
                }), t(jContent).html(t(r.splashID).wrap("<div/>").parent().html()), t(r.splashID).remove(), r.splashFunction()
            }
            jLoader = t("<div></div>").attr("id", "jpreLoader").appendTo(jOverlay);
            var i = t(window).width() - t(jLoader).width();
            t(jLoader).css({
                position: "absolute",
                top: r.loaderVPos,
                left: Math.round(50 / t(window).width() * i) + "%"
            }), jBar = t("<div></div>").attr("id", "jpreBar").css({
                width: "0%",
                height: "100%"
            }).appendTo(jLoader), r.showPercentage && (jPer = t("<div></div>").attr("id", "jprePercentage").css({
                position: "relative",
                height: "100%"
            }).appendTo(jLoader).html("Loading...")), r.autoclose || (jButton = t("<div></div>").attr("id", "jpreButton").on("click", function() {
                p()
            }).css({
                position: "relative",
                height: "100%"
            }).appendTo(jLoader).text(r.closeBtnText).hide())
        },
        d = function(i) {
            t(i).find("*:not(script)").each(function() {
                var i = "";
                if (-1 == t(this).css("background-image").indexOf("none") && -1 == t(this).css("background-image").indexOf("-gradient")) {
                    if (i = t(this).css("background-image"), -1 != i.indexOf("url")) {
                        var n = i.match(/url\((.*?)\)/);
                        i = n[1].replace(/\"/g, "")
                    }
                } else "img" == t(this).get(0).nodeName.toLowerCase() && "undefined" != typeof t(this).attr("src") && (i = t(this).attr("src"));
                i.length > 0 && e.push(i)
            })
        },
        h = function() {
            for (var t = 0; t < e.length; t++) c(e[t])
        },
        c = function(e) {
            var n = new Image;
            t(n).load(function() {
                u()
            }).error(function() {
                i.push(t(this).attr("src")), u()
            }).attr("src", e)
        },
        u = function() {
            a++;
            var i = Math.round(a / e.length * 100);
            if (t(jBar).stop().animate({
                    width: i + "%"
                }, 500, "linear"), r.showPercentage && t(jPer).text(i + "%"), a >= e.length) {
                if (a = e.length, s(), r.showPercentage && t(jPer).text("100%"), r.debugMode) {
                    f()
                }
                t(jBar).stop().animate({
                    width: "100%"
                }, 500, "linear", function() {
                    r.autoClose ? p() : t(jButton).fadeIn(1e3)
                })
            }
        },
        p = function() {
            t(jOverlay).fadeOut(800, function() {
                t(jOverlay).remove(), n()
            })
        },
        f = function() {
            if (i.length > 0) {
                var t = "ERROR - IMAGE FILES MISSING!!!\n\r";
                t += i.length + " image files cound not be found. \n\r", t += "Please check your image paths and filenames:\n\r";
                for (var e = 0; e < i.length; e++) t += "- " + i[e] + "\n\r";
                return !0
            }
            return !1
        };
    t.fn.jpreLoader = function(e, i) {
        return e && t.extend(r, e), "function" == typeof i && (n = i), t("body").css({
            display: "block"
        }), this.each(function() {
            o() ? (t(r.splashID).remove(), n()) : (l(), d(this), h())
        })
    }
}(jQuery);
var scrolltotop = {
    setting: {
        startline: 100,
        scrollto: 0,
        scrollduration: 1e3,
        fadeduration: [500, 100]
    },
    controlHTML: "",
    controlattrs: {
        offsetx: 5,
        offsety: 5
    },
    anchorkeyword: "#top",
    state: {
        isvisible: !1,
        shouldvisible: !1
    },
    scrollup: function() {
        this.cssfixedsupport || this.$control.css({
            opacity: 0
        });
        var t = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
        t = "string" == typeof t && 1 == jQuery("#" + t).length ? jQuery("#" + t).offset().top : 0, this.$body.animate({
            scrollTop: t
        }, this.setting.scrollduration)
    },
    keepfixed: function() {
        var t = jQuery(window),
            e = t.scrollLeft() + t.width() - this.$control.width() - this.controlattrs.offsetx,
            i = t.scrollTop() + t.height() - this.$control.height() - this.controlattrs.offsety;
        this.$control.css({
            left: e + "px",
            top: i + "px"
        })
    },
    togglecontrol: function() {
        var t = jQuery(window).scrollTop();
        this.cssfixedsupport || this.keepfixed(), this.state.shouldvisible = t >= this.setting.startline, this.state.shouldvisible && !this.state.isvisible ? (this.$control.stop().animate({
            opacity: 1
        }, this.setting.fadeduration[0]), this.state.isvisible = !0) : 0 == this.state.shouldvisible && this.state.isvisible && (this.$control.stop().animate({
            opacity: 0
        }, this.setting.fadeduration[1]), this.state.isvisible = !1)
    },
    init: function() {
        jQuery(document).ready(function(t) {
            var e = scrolltotop,
                i = document.all;
            e.cssfixedsupport = !i || i && "CSS1Compat" == document.compatMode && window.XMLHttpRequest, e.$body = t(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body"), e.$control = t('<div id="topcontrol">' + e.controlHTML + "</div>").css({
                position: e.cssfixedsupport ? "fixed" : "absolute",
                bottom: e.controlattrs.offsety,
                right: e.controlattrs.offsetx,
                opacity: 0,
                cursor: "pointer"
            }).attr({
                title: "Scroll Back to Top"
            }).click(function() {
                return e.scrollup(), !1
            }).appendTo("body"), document.all && !window.XMLHttpRequest && "" != e.$control.text() && e.$control.css({
                width: e.$control.width()
            }), e.togglecontrol(), t('a[href="' + e.anchorkeyword + '"]').click(function() {
                return e.scrollup(), !1
            }), t(window).bind("scroll resize", function(t) {
                e.togglecontrol()
            })
        })
    }
};
scrolltotop.init();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    a = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = a.prototype.render
                    },
                    r = 1e-10,
                    o = i._internals,
                    s = o.isSelector,
                    l = o.isArray,
                    d = a.prototype = i.to({}, .1, {}),
                    h = [];
                a.version = "1.14.0", d.constructor = a, d.kill()._gc = !1, a.killTweensOf = a.killDelayedCallsTo = i.killTweensOf, a.getTweensOf = i.getTweensOf, a.lagSmoothing = i.lagSmoothing, a.ticker = i.ticker, a.render = i.render, d.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, d.updateTo = function(t, e) {
                    var n, a = this.ratio;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted)
                        if (e) this._initted = !1;
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var r = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(r, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var o, s = 1 / (1 - a), l = this._firstPT; l;) o = l.s + l.c, l.c *= s, l.s = o - l.c, l = l._next
                    }
                    return this
                }, d.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, a, s, l, d, c, u, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        g = this._time,
                        m = this._totalTime,
                        v = this._cycle,
                        y = this._duration,
                        w = this._rawPrevTime;
                    if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, a = "onComplete"), 0 === y && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > w || w === r) && w !== t && (i = !0, w > r && (a = "onReverseComplete")), this._rawPrevTime = p = !e || t || w === t ? t : r)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === y && w > 0 && w !== r) && (a = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || i) && (w >= 0 && (i = !0), this._rawPrevTime = p = !e || t || w === t ? t : r)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = y - this._time), this._time > y ? this._time = y : 0 > this._time && (this._time = 0)), this._easeType ? (d = this._time / y, c = this._easeType, u = this._easePower, (1 === c || 3 === c && d >= .5) && (d = 1 - d), 3 === c && (d *= 2), 1 === u ? d *= d : 2 === u ? d *= d * d : 3 === u ? d *= d * d * d : 4 === u && (d *= d * d * d * d), this.ratio = 1 === c ? 1 - d : 2 === c ? d : .5 > this._time / y ? d / 2 : 1 - d / 2) : this.ratio = this._ease.getRatio(this._time / y)), g === this._time && !i && v === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = g, this._totalTime = m, this._rawPrevTime = w, this._cycle = v, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / y) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== g && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : a || (a = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h)), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || h)), a && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || h), 0 === y && this._rawPrevTime === r && p !== r && (this._rawPrevTime = 0))
                }, a.to = function(t, e, i) {
                    return new a(t, e, i)
                }, a.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new a(t, e, i)
                }, a.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new a(t, e, n)
                }, a.staggerTo = a.allTo = function(t, e, r, o, d, c, u) {
                    o = o || 0;
                    var p, f, g, m, v = r.delay || 0,
                        y = [],
                        w = function() {
                            r.onComplete && r.onComplete.apply(r.onCompleteScope || this, arguments), d.apply(u || this, c || h)
                        };
                    for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), s(t) && (t = n(t))), t = t || [], 0 > o && (t = n(t), t.reverse(), o *= -1), p = t.length - 1, g = 0; p >= g; g++) {
                        f = {};
                        for (m in r) f[m] = r[m];
                        f.delay = v, g === p && d && (f.onComplete = w), y[g] = new a(t[g], e, f), v += o
                    }
                    return y
                }, a.staggerFrom = a.allFrom = function(t, e, i, n, r, o, s) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, a.staggerTo(t, e, i, n, r, o, s)
                }, a.staggerFromTo = a.allFromTo = function(t, e, i, n, r, o, s, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, a.staggerTo(t, e, n, r, o, s, l)
                }, a.delayedCall = function(t, e, i, n, r) {
                    return new a(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        onCompleteScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: n,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, a.set = function(t, e) {
                    return new a(t, 0, e)
                }, a.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var c = function(t, e) {
                        for (var n = [], a = 0, r = t._first; r;) r instanceof i ? n[a++] = r : (e && (n[a++] = r), n = n.concat(c(r, e)), a = n.length), r = r._next;
                        return n
                    },
                    u = a.getAllTweens = function(e) {
                        return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
                    };
                a.killAll = function(t, i, n, a) {
                    null == i && (i = !0), null == n && (n = !0);
                    var r, o, s, l = u(0 != a),
                        d = l.length,
                        h = i && n && a;
                    for (s = 0; d > s; s++) o = l[s], (h || o instanceof e || (r = o.target === o.vars.onComplete) && n || i && !r) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                }, a.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, d, h, c, u, p = o.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), s(t) && (t = n(t)), l(t))
                            for (c = t.length; --c > -1;) a.killChildTweensOf(t[c], e);
                        else {
                            r = [];
                            for (h in p)
                                for (d = p[h].target.parentNode; d;) d === t && (r = r.concat(p[h].tweens)), d = d.parentNode;
                            for (u = r.length, c = 0; u > c; c++) e && r[c].totalTime(r[c].totalDuration()), r[c]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(t, i, n, a) {
                    i = i !== !1, n = n !== !1, a = a !== !1;
                    for (var r, o, s = u(a), l = i && n && a, d = s.length; --d > -1;) o = s[d], (l || o instanceof e || (r = o.target === o.vars.onComplete) && n || i && !r) && o.paused(t)
                };
                return a.pauseAll = function(t, e, i) {
                    p(!0, t, e, i)
                }, a.resumeAll = function(t, e, i) {
                    p(!1, t, e, i)
                }, a.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        a = i.ticker.time;
                    return arguments.length ? (e = e || r, n._startTime = a - (a - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, a = i.ticker.frame, n._startTime = a - (a - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, d.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, d.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, d.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, d.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, d.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, d.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, d.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, d.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, a
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, a = this.vars;
                        for (n in a) i = a[n], s(i) && -1 !== i.join("").indexOf("{self}") && (a[n] = this._swapSelfInParams(i));
                        s(a.tweens) && this.add(a.tweens, 0, a.align, a.stagger)
                    },
                    a = 1e-10,
                    r = i._internals,
                    o = r.isSelector,
                    s = r.isArray,
                    l = r.lazyTweens,
                    d = r.lazyRender,
                    h = [],
                    c = _gsScope._gsDefine.globals,
                    u = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    p = function(t, e, i, n) {
                        var a = t._timeline._totalTime;
                        (e || !this._forcingPlayhead) && (t._timeline.pause(t._startTime), e && e.apply(n || t._timeline, i || h), this._forcingPlayhead && t._timeline.seek(a))
                    },
                    f = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    g = n.prototype = new e;
                return n.version = "1.14.0", g.constructor = n, g.kill()._gc = g._forcingPlayhead = !1, g.to = function(t, e, n, a) {
                    var r = n.repeat && c.TweenMax || i;
                    return e ? this.add(new r(t, e, n), a) : this.set(t, n, a)
                }, g.from = function(t, e, n, a) {
                    return this.add((n.repeat && c.TweenMax || i).from(t, e, n), a)
                }, g.fromTo = function(t, e, n, a, r) {
                    var o = a.repeat && c.TweenMax || i;
                    return e ? this.add(o.fromTo(t, e, n, a), r) : this.set(t, a, r)
                }, g.staggerTo = function(t, e, a, r, s, l, d, h) {
                    var c, p = new n({
                        onComplete: l,
                        onCompleteParams: d,
                        onCompleteScope: h,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = f(t)), r = r || 0, 0 > r && (t = f(t), t.reverse(), r *= -1), c = 0; t.length > c; c++) a.startAt && (a.startAt = u(a.startAt)), p.to(t[c], e, u(a), c * r);
                    return this.add(p, s)
                }, g.staggerFrom = function(t, e, i, n, a, r, o, s) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, a, r, o, s)
                }, g.staggerFromTo = function(t, e, i, n, a, r, o, s, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, a, r, o, s, l)
                }, g.call = function(t, e, n, a) {
                    return this.add(i.delayedCall(0, t, e, n), a)
                }, g.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var a, r, o = new n(t),
                        s = o._timeline;
                    for (null == e && (e = !0), s._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = s._time, a = s._first; a;) r = a._next, e && a instanceof i && a.target === a.vars.onComplete || o.add(a, a._startTime - a._delay), a = r;
                    return s.add(o, 0), o
                }, g.add = function(a, r, o, l) {
                    var d, h, c, u, p, f;
                    if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, a)), !(a instanceof t)) {
                        if (a instanceof Array || a && a.push && s(a)) {
                            for (o = o || "normal", l = l || 0, d = r, h = a.length, c = 0; h > c; c++) s(u = a[c]) && (u = new n({
                                tweens: u
                            })), this.add(u, d), "string" != typeof u && "function" != typeof u && ("sequence" === o ? d = u._startTime + u.totalDuration() / u._timeScale : "start" === o && (u._startTime -= u.delay())), d += l;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof a) return this.addLabel(a, r);
                        if ("function" != typeof a) throw "Cannot add " + a + " into the timeline; it is not a tween, timeline, function, or string.";
                        a = i.delayedCall(0, a)
                    }
                    if (e.prototype.add.call(this, a, r), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, f = p.rawTime() > a._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, g.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && s(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, g._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, g.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, g.insert = g.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, g.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, g.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, g.addPause = function(t, e, i, n) {
                    return this.call(p, ["{self}", e, i, n], this, t)
                }, g.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, g.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, g._parseTimeOrLabel = function(e, i, n, a) {
                    var r;
                    if (a instanceof t && a.timeline === this) this.remove(a);
                    else if (a && (a instanceof Array || a.push && s(a)))
                        for (r = a.length; --r > -1;) a[r] instanceof t && a[r].timeline === this && this.remove(a[r]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (r = e.indexOf("="), -1 === r) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)), e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, n) : this.duration()
                    }
                    return Number(e) + i
                }, g.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, g.stop = function() {
                    return this.paused(!0)
                }, g.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, g.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, g.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, r, o, s, c, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        f = this._startTime,
                        g = this._timeScale,
                        m = this._paused;
                    if (t >= u ? (this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (r = !0, s = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === a) && this._rawPrevTime !== t && this._first && (c = !0, this._rawPrevTime > a && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : a, t = u + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== a && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (s = "onReverseComplete", r = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (c = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : a, t = 0, this._initted || (c = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== p && this._first || i || c) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || h)), this._time >= p)
                            for (n = this._first; n && (o = n._next, !this._paused || m);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                        else
                            for (n = this._last; n && (o = n._prev, !this._paused || m);)(n._active || p >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                        this._onUpdate && (e || (l.length && d(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || h))), s && (this._gc || (f === this._startTime || g !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (r && (l.length && d(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || h)))
                    }
                }, g._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, g.getChildren = function(t, e, n, a) {
                    a = a || -9999999999;
                    for (var r = [], o = this._first, s = 0; o;) a > o._startTime || (o instanceof i ? e !== !1 && (r[s++] = o) : (n !== !1 && (r[s++] = o), t !== !1 && (r = r.concat(o.getChildren(!0, e, n)), s = r.length))), o = o._next;
                    return r
                }, g.getTweensOf = function(t, e) {
                    var n, a, r = this._gc,
                        o = [],
                        s = 0;
                    for (r && this._enabled(!0, !0), n = i.getTweensOf(t), a = n.length; --a > -1;)(n[a].timeline === this || e && this._contains(n[a])) && (o[s++] = n[a]);
                    return r && this._enabled(!1, !0), o
                }, g.recent = function() {
                    return this._recent
                }, g._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, g.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, a = this._first, r = this._labels; a;) a._startTime >= i && (a._startTime += t), a = a._next;
                    if (e)
                        for (n in r) r[n] >= i && (r[n] += t);
                    return this._uncache(!0)
                }, g._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, a = !1; --n > -1;) i[n]._kill(t, e) && (a = !0);
                    return a
                }, g.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, g.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, g._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, g.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, g.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, g.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, a = this._last, r = 999999999999; a;) e = a._prev, a._dirty && a.totalDuration(), a._startTime > r && this._sortChildren && !a._paused ? this.add(a, a._startTime - a._delay) : r = a._startTime, 0 > a._startTime && !a._paused && (n -= a._startTime, this._timeline.smoothChildTiming && (this._startTime += a._startTime / this._timeScale), this.shiftChildren(-a._startTime, !1, -9999999999), r = 0), i = a._startTime + a._totalDuration / a._timeScale, i > n && (n = i), a = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, g.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, g.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    a = 1e-10,
                    r = [],
                    o = e._internals,
                    s = o.lazyTweens,
                    l = o.lazyRender,
                    d = new i(null, null, 1, 0),
                    h = n.prototype = new t;
                return h.constructor = n, h.kill()._gc = !1, n.version = "1.14.0", h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, h.addCallback = function(t, i, n, a) {
                    return this.add(e.delayedCall(0, t, n, a), i)
                }, h.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, a = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === a && i[n]._enabled(!1, !1);
                    return this
                }, h.tweenTo = function(t, i) {
                    i = i || {};
                    var n, a, o, s = {
                        ease: d,
                        overwrite: i.delay ? 2 : 1,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (a in i) s[a] = i[a];
                    return s.time = this._parseTimeOrLabel(t), n = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, o = new e(this, n, s), s.onStart = function() {
                        o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || o, i.onStartParams || r)
                    }, o
                }, h.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        onCompleteScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, h.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, o, d, h, c, u, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._duration,
                        g = this._time,
                        m = this._totalTime,
                        v = this._startTime,
                        y = this._timeScale,
                        w = this._rawPrevTime,
                        b = this._paused,
                        _ = this._cycle;
                    if (t >= p ? (this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, h = "onComplete", 0 === this._duration && (0 === t || 0 > w || w === a) && w !== t && this._first && (c = !0, w > a && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : a, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === f && w !== a && (w > 0 || 0 > t && w >= 0) && !this._locked) && (h = "onReverseComplete", o = this._reversed), 0 > t ? (this._active = !1, w >= 0 && this._first && (c = !0), this._rawPrevTime = t) : (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : a, t = 0, this._initted || (c = !0))) : (0 === f && 0 > w && (c = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = f + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== _ && !this._locked) {
                        var x = this._yoyo && 0 !== (1 & _),
                            T = x === (this._yoyo && 0 !== (1 & this._cycle)),
                            k = this._totalTime,
                            C = this._cycle,
                            S = this._rawPrevTime,
                            P = this._time;
                        if (this._totalTime = _ * f, _ > this._cycle ? x = !x : this._totalTime += f, this._time = g, this._rawPrevTime = 0 === f ? w - 1e-4 : w, this._cycle = _, this._locked = !0, g = x ? 0 : f, this.render(g, e, 0 === f), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || r), T && (g = x ? f + 1e-4 : -1e-4, this.render(g, !0, !1)), this._locked = !1, this._paused && !b) return;
                        this._time = P, this._totalTime = k, this._cycle = C, this._rawPrevTime = S
                    }
                    if (!(this._time !== g && this._first || i || c)) return void(m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= g)
                        for (n = this._first; n && (d = n._next, !this._paused || b);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = d;
                    else
                        for (n = this._last; n && (d = n._prev, !this._paused || b);)(n._active || g >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = d;
                    this._onUpdate && (e || (s.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r))), h && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (s.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || r)))
                }, h.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, a, r = [],
                        o = this.getChildren(t, e, i),
                        s = 0,
                        l = o.length;
                    for (n = 0; l > n; n++) a = o[n], a.isActive() && (r[s++] = a);
                    return r
                }, h.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, h.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, h.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, h.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, h.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, h.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
                        this._totalDuration)
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, h.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    a = {},
                    r = function(t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    s = function(t, e, i, n) {
                        var a = {
                                a: t
                            },
                            r = {},
                            o = {},
                            s = {
                                c: n
                            },
                            l = (t + e) / 2,
                            d = (e + i) / 2,
                            h = (i + n) / 2,
                            c = (l + d) / 2,
                            u = (d + h) / 2,
                            p = (u - c) / 8;
                        return a.b = l + (t - l) / 4, r.b = c + p, a.c = r.a = (a.b + r.b) / 2, r.c = o.a = (c + u) / 2, o.b = u - p, s.b = h + (n - h) / 4, o.c = s.a = (o.b + s.b) / 2, [a, r, o, s]
                    },
                    l = function(t, a, r, o, l) {
                        var d, h, c, u, p, f, g, m, v, y, w, b, _, x = t.length - 1,
                            T = 0,
                            k = t[0].a;
                        for (d = 0; x > d; d++) p = t[T], h = p.a, c = p.d, u = t[T + 1].d, l ? (w = e[d], b = i[d], _ = .25 * (b + w) * a / (o ? .5 : n[d] || .5), f = c - (c - h) * (o ? .5 * a : 0 !== w ? _ / w : 0), g = c + (u - c) * (o ? .5 * a : 0 !== b ? _ / b : 0), m = c - (f + ((g - f) * (3 * w / (w + b) + .5) / 4 || 0))) : (f = c - .5 * (c - h) * a, g = c + .5 * (u - c) * a, m = c - (f + g) / 2), f += m, g += m, p.c = v = f, p.b = 0 !== d ? k : k = p.a + .6 * (p.c - p.a), p.da = c - h, p.ca = v - h, p.ba = k - h, r ? (y = s(h, k, v, c), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, k = g;
                        p = t[T], p.b = k, p.c = k + .4 * (p.d - k), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = k - p.a, r && (y = s(p.a, k, p.c, p.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
                    },
                    d = function(t, n, a, o) {
                        var s, l, d, h, c, u, p = [];
                        if (o)
                            for (t = [o].concat(t), l = t.length; --l > -1;) "string" == typeof(u = t[l][n]) && "=" === u.charAt(1) && (t[l][n] = o[n] + Number(u.charAt(0) + u.substr(2)));
                        if (s = t.length - 2, 0 > s) return p[0] = new r(t[0][n], 0, 0, t[-1 > s ? 0 : 1][n]), p;
                        for (l = 0; s > l; l++) d = t[l][n], h = t[l + 1][n], p[l] = new r(d, 0, 0, h), a && (c = t[l + 2][n], e[l] = (e[l] || 0) + (h - d) * (h - d), i[l] = (i[l] || 0) + (c - h) * (c - h));
                        return p[l] = new r(t[l][n], 0, 0, t[l + 1][n]), p
                    },
                    h = function(t, r, s, h, c, u) {
                        var p, f, g, m, v, y, w, b, _ = {},
                            x = [],
                            T = u || t[0];
                        c = "string" == typeof c ? "," + c + "," : o, null == r && (r = 1);
                        for (f in t[0]) x.push(f);
                        if (t.length > 1) {
                            for (b = t[t.length - 1], w = !0, p = x.length; --p > -1;)
                                if (f = x[p], Math.abs(T[f] - b[f]) > .05) {
                                    w = !1;
                                    break
                                }
                            w && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, p = x.length; --p > -1;) f = x[p], a[f] = -1 !== c.indexOf("," + f + ","), _[f] = d(t, f, a[f], u);
                        for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                        if (!h) {
                            for (p = x.length; --p > -1;)
                                if (a[f])
                                    for (g = _[x[p]], y = g.length - 1, m = 0; y > m; m++) v = g[m + 1].da / i[m] + g[m].da / e[m], n[m] = (n[m] || 0) + v * v;
                            for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                        }
                        for (p = x.length, m = s ? 4 : 1; --p > -1;) f = x[p], g = _[f], l(g, r, s, h, a[f]), w && (g.splice(0, m), g.splice(g.length - m, m));
                        return _
                    },
                    c = function(t, e, i) {
                        e = e || "soft";
                        var n, a, o, s, l, d, h, c, u, p, f, g = {},
                            m = "cubic" === e ? 3 : 2,
                            v = "soft" === e,
                            y = [];
                        if (v && i && (t = [i].concat(t)), null == t || m + 1 > t.length) throw "invalid Bezier data";
                        for (u in t[0]) y.push(u);
                        for (d = y.length; --d > -1;) {
                            for (u = y[d], g[u] = l = [], p = 0, c = t.length, h = 0; c > h; h++) n = null == i ? t[h][u] : "string" == typeof(f = t[h][u]) && "=" === f.charAt(1) ? i[u] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && h > 1 && c - 1 > h && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                            for (c = p - m + 1, p = 0, h = 0; c > h; h += m) n = l[h], a = l[h + 1], o = l[h + 2], s = 2 === m ? 0 : l[h + 3], l[p++] = f = 3 === m ? new r(n, a, o, s) : new r(n, (2 * a + n) / 3, (2 * a + o) / 3, o);
                            l.length = p
                        }
                        return g
                    },
                    u = function(t, e, i) {
                        for (var n, a, r, o, s, l, d, h, c, u, p, f = 1 / i, g = t.length; --g > -1;)
                            for (u = t[g], r = u.a, o = u.d - r, s = u.c - r, l = u.b - r, n = a = 0, h = 1; i >= h; h++) d = f * h, c = 1 - d, n = a - (a = (d * d * o + 3 * c * (d * s + c * l)) * d), p = g * i + h - 1, e[p] = (e[p] || 0) + n * n
                    },
                    p = function(t, e) {
                        e = e >> 0 || 6;
                        var i, n, a, r, o = [],
                            s = [],
                            l = 0,
                            d = 0,
                            h = e - 1,
                            c = [],
                            p = [];
                        for (i in t) u(t[i], o, e);
                        for (a = o.length, n = 0; a > n; n++) l += Math.sqrt(o[n]), r = n % e, p[r] = l, r === h && (d += l, r = n / e >> 0, c[r] = p, s[r] = d, l = 0, p = []);
                        return {
                            length: d,
                            lengths: s,
                            segments: c
                        }
                    },
                    f = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.3",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, a, r, o, s, l = e.values || [],
                                d = {},
                                u = l[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (n in u) this._props.push(n);
                            for (r = this._props.length; --r > -1;) n = this._props[r], this._overwriteProps.push(n), a = this._func[n] = "function" == typeof t[n], d[n] = a ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), s || d[n] !== l[0][n] && (s = d);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? h(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, s) : c(l, e.type, d), this._segCount = this._beziers[n].length, this._timeRes) {
                                var g = p(this._beziers, this._timeRes);
                                this._length = g.length, this._lengths = g.lengths, this._segments = g.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), r = f.length; --r > -1;) {
                                    for (o = 0; 3 > o; o++) n = f[r][o], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                                    n = f[r][2], this._initialRotations[r] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, a, r, o, s, l, d, h, c, u = this._segCount,
                                p = this._func,
                                f = this._target,
                                g = e !== this._startRatio;
                            if (this._timeRes) {
                                if (h = this._lengths, c = this._curSeg, e *= this._length, a = this._li, e > this._l2 && u - 1 > a) {
                                    for (d = u - 1; d > a && e >= (this._l2 = h[++a]););
                                    this._l1 = h[a - 1], this._li = a, this._curSeg = c = this._segments[a], this._s2 = c[this._s1 = this._si = 0]
                                } else if (this._l1 > e && a > 0) {
                                    for (; a > 0 && (this._l1 = h[--a]) >= e;);
                                    0 === a && this._l1 > e ? this._l1 = 0 : a++, this._l2 = h[a], this._li = a, this._curSeg = c = this._segments[a], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                                }
                                if (i = a, e -= this._l1, a = this._si, e > this._s2 && c.length - 1 > a) {
                                    for (d = c.length - 1; d > a && e >= (this._s2 = c[++a]););
                                    this._s1 = c[a - 1], this._si = a
                                } else if (this._s1 > e && a > 0) {
                                    for (; a > 0 && (this._s1 = c[--a]) >= e;);
                                    0 === a && this._s1 > e ? this._s1 = 0 : a++, this._s2 = c[a], this._si = a
                                }
                                s = (a + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? u - 1 : u * e >> 0, s = (e - i * (1 / u)) * u;
                            for (n = 1 - s, a = this._props.length; --a > -1;) r = this._props[a], o = this._beziers[r][i], l = (s * s * o.da + 3 * n * (s * o.ca + n * o.ba)) * s + o.a, this._round[r] && (l = Math.round(l)), p[r] ? f[r](l) : f[r] = l;
                            if (this._autoRotate) {
                                var m, v, y, w, b, _, x, T = this._autoRotate;
                                for (a = T.length; --a > -1;) r = T[a][2], _ = T[a][3] || 0, x = T[a][4] === !0 ? 1 : t, o = this._beziers[T[a][0]], m = this._beziers[T[a][1]], o && m && (o = o[i], m = m[i], v = o.a + (o.b - o.a) * s, w = o.b + (o.c - o.b) * s, v += (w - v) * s, w += (o.c + (o.d - o.c) * s - w) * s, y = m.a + (m.b - m.a) * s, b = m.b + (m.c - m.b) * s, y += (b - y) * s, b += (m.c + (m.d - m.c) * s - b) * s, l = g ? Math.atan2(b - y, w - v) * x + _ : this._initialRotations[a], p[r] ? f[r](l) : f[r] = l)
                            }
                        }
                    }),
                    g = f.prototype;
                f.bezierThrough = h, f.cubicToQuadratic = s, f._autoCSS = !0, f.quadraticToCubic = function(t, e, i) {
                    return new r(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, f._cssRegister = function() {
                    var t = _gsScope._gsDefine.globals.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            a = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, r, o, s, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new f;
                                var d, h, c, u = e.values,
                                    p = u.length - 1,
                                    g = [],
                                    m = {};
                                if (0 > p) return s;
                                for (d = 0; p >= d; d++) c = i(t, u[d], o, s, l, p !== d), g[d] = c.end;
                                for (h in e) m[h] = e[h];
                                return m.values = g, s = new a(t, "bezier", 0, 0, c.pt, 2), s.data = c, s.plugin = l, s.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (d = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != c.end.left ? [
                                    ["left", "top", "rotation", d, !1]
                                ] : null != c.end.x ? [
                                    ["x", "y", "rotation", d, !1]
                                ] : !1), m.autoRotate && (o._transform || o._enableTransforms(!1), c.autoRotate = o._target._gsTransform), l._onInitTween(c.proxy, m, o._tween), s
                            }
                        })
                    }
                }, g._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                }, g._kill = function(t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, a, r, o = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                    },
                    s = {},
                    l = o.prototype = new t("css");
                l.constructor = o, o.version = "1.14.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", l = "px", o.suffixMap = {
                    top: l,
                    right: l,
                    bottom: l,
                    left: l,
                    width: l,
                    height: l,
                    fontSize: l,
                    padding: l,
                    margin: l,
                    perspective: l,
                    lineHeight: ""
                };
                var d, h, c, u, p, f, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /[^\d\-\.]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    b = /opacity *= *([^)]*)/i,
                    _ = /opacity:([^;]*)/i,
                    x = /alpha\(opacity *=.+?\)/i,
                    T = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    S = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    P = function(t, e) {
                        return e.toUpperCase()
                    },
                    O = /(?:Left|Right|Width)/i,
                    A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    D = /,(?=[^\)]*(?:\(|$))/gi,
                    E = Math.PI / 180,
                    I = 180 / Math.PI,
                    R = {},
                    M = document,
                    N = (M.documentElement, M.createElement("div")),
                    z = M.createElement("img"),
                    $ = o._internals = {
                        _specialProps: s
                    },
                    j = navigator.userAgent,
                    F = function() {
                        var t, e = j.indexOf("Android"),
                            i = M.createElement("div");
                        return c = -1 !== j.indexOf("Safari") && -1 === j.indexOf("Chrome") && (-1 === e || Number(j.substr(e + 8, 1)) > 3), p = c && 6 > Number(j.substr(j.indexOf("Version/") + 8, 1)), u = -1 !== j.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(j)) && (f = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
                    }(),
                    H = function(t) {
                        return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    W = function(t) {
                        window.console && console.log(t)
                    },
                    q = "",
                    X = "",
                    B = function(t, e) {
                        e = e || N;
                        var i, n, a = e.style;
                        if (void 0 !== a[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === a[i[n] + t];);
                        return n >= 0 ? (X = 3 === n ? "ms" : i[n], q = "-" + X.toLowerCase() + "-", X + t) : null
                    },
                    Y = M.defaultView ? M.defaultView.getComputedStyle : function() {},
                    U = o.getStyle = function(t, e, i, n, a) {
                        var r;
                        return F || "opacity" !== e ? (!n && t.style[e] ? r = t.style[e] : (i = i || Y(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]), null == a || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : a) : H(t)
                    },
                    V = $.convertToPixels = function(t, i, n, a, r) {
                        if ("px" === a || !a) return n;
                        if ("auto" === a || !n) return 0;
                        var s, l, d, h = O.test(i),
                            c = t,
                            u = N.style,
                            p = 0 > n;
                        if (p && (n = -n), "%" === a && -1 !== i.indexOf("border")) s = n / 100 * (h ? t.clientWidth : t.clientHeight);
                        else {
                            if (u.cssText = "border:0 solid red;position:" + U(t, "position") + ";line-height:0;", "%" !== a && c.appendChild) u[h ? "borderLeftWidth" : "borderTopWidth"] = n + a;
                            else {
                                if (c = t.parentNode || M.body, l = c._gsCache, d = e.ticker.frame, l && h && l.time === d) return l.width * n / 100;
                                u[h ? "width" : "height"] = n + a
                            }
                            c.appendChild(N), s = parseFloat(N[h ? "offsetWidth" : "offsetHeight"]), c.removeChild(N), h && "%" === a && o.cacheWidths !== !1 && (l = c._gsCache = c._gsCache || {}, l.time = d, l.width = 100 * (s / n)), 0 !== s || r || (s = V(t, i, n, a, !0))
                        }
                        return p ? -s : s
                    },
                    Q = $.calculateOffset = function(t, e, i) {
                        if ("absolute" !== U(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            a = U(t, "margin" + n, i);
                        return t["offset" + n] - (V(t, e, parseFloat(a), a.replace(w, "")) || 0)
                    },
                    Z = function(t, e) {
                        var i, n, a = {};
                        if (e = e || Y(t, null))
                            if (i = e.length)
                                for (; --i > -1;) a[e[i].replace(C, P)] = e.getPropertyValue(e[i]);
                            else
                                for (i in e) a[i] = e[i];
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === a[i] && (a[i.replace(C, P)] = e[i]);
                        return F || (a.opacity = H(t)), n = Pt(t, e, !1), a.rotation = n.rotation, a.skewX = n.skewX, a.scaleX = n.scaleX, a.scaleY = n.scaleY, a.x = n.x, a.y = n.y, xt && (a.z = n.z, a.rotationX = n.rotationX, a.rotationY = n.rotationY, a.scaleZ = n.scaleZ), a.filters && delete a.filters, a
                    },
                    G = function(t, e, i, n, a) {
                        var r, o, s, l = {},
                            d = t.style;
                        for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (r = i[o]) || a && a[o]) && -1 === o.indexOf("Origin") && ("number" == typeof r || "string" == typeof r) && (l[o] = "auto" !== r || "left" !== o && "top" !== o ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[o] || "" === e[o].replace(y, "") ? r : 0 : Q(t, o), void 0 !== d[o] && (s = new ct(d, o, d[o], s)));
                        if (n)
                            for (o in n) "className" !== o && (l[o] = n[o]);
                        return {
                            difs: l,
                            firstMPT: s
                        }
                    },
                    J = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    K = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    tt = function(t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            a = J[e],
                            r = a.length;
                        for (i = i || Y(t, null); --r > -1;) n -= parseFloat(U(t, "padding" + a[r], i, !0)) || 0, n -= parseFloat(U(t, "border" + a[r] + "Width", i, !0)) || 0;
                        return n
                    },
                    et = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            a = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == a ? a = "0" : "center" === a && (a = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== a.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === a.charAt(1), e.ox = parseFloat(n.replace(y, "")), e.oy = parseFloat(a.replace(y, ""))), n + " " + a + (i.length > 2 ? " " + i[2] : "")
                    },
                    it = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    nt = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    at = function(t, e, i, n) {
                        var a, r, o, s, l = 1e-6;
                        return null == t ? s = e : "number" == typeof t ? s = t : (a = 360, r = t.split("_"), o = Number(r[0].replace(y, "")) * (-1 === t.indexOf("rad") ? 1 : I) - ("=" === t.charAt(1) ? 0 : e), r.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= a, o !== o % (a / 2) && (o = 0 > o ? o + a : o - a)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * a) % a - (0 | o / a) * a : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * a) % a - (0 | o / a) * a)), s = e + o), l > s && s > -l && (s = 0), s
                    },
                    rt = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ot = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    st = function(t) {
                        var e, i, n, a, r, o;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), rt[t] ? rt[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(g), a = Number(t[0]) % 360 / 360, r = Number(t[1]) / 100, o = Number(t[2]) / 100, i = .5 >= o ? o * (r + 1) : o + r - o * r, e = 2 * o - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ot(a + 1 / 3, e, i), t[1] = ot(a, e, i), t[2] = ot(a - 1 / 3, e, i), t) : (t = t.match(g) || rt.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : rt.black
                    },
                    lt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (l in rt) lt += "|" + l + "\\b";
                lt = RegExp(lt + ")", "gi");
                var dt = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var a, r = e ? (t.match(lt) || [""])[0] : "",
                            o = t.split(r).join("").match(v) || [],
                            s = t.substr(0, t.indexOf(o[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            d = -1 !== t.indexOf(" ") ? " " : ",",
                            h = o.length,
                            c = h > 0 ? o[0].replace(g, "") : "";
                        return h ? a = e ? function(t) {
                            var e, u, p, f;
                            if ("number" == typeof t) t += c;
                            else if (n && D.test(t)) {
                                for (f = t.replace(D, "|").split("|"), p = 0; f.length > p; p++) f[p] = a(f[p]);
                                return f.join(",")
                            }
                            if (e = (t.match(lt) || [r])[0], u = t.split(e).join("").match(v) || [], p = u.length, h > p--)
                                for (; h > ++p;) u[p] = i ? u[0 | (p - 1) / 2] : o[p];
                            return s + u.join(d) + d + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, r, u;
                            if ("number" == typeof t) t += c;
                            else if (n && D.test(t)) {
                                for (r = t.replace(D, "|").split("|"), u = 0; r.length > u; u++) r[u] = a(r[u]);
                                return r.join(",")
                            }
                            if (e = t.match(v) || [], u = e.length, h > u--)
                                for (; h > ++u;) e[u] = i ? e[0 | (u - 1) / 2] : o[u];
                            return s + e.join(d) + l
                        } : function(t) {
                            return t
                        }
                    },
                    ht = function(t) {
                        return t = t.split(","),
                            function(e, i, n, a, r, o, s) {
                                var l, d = (i + "").split(" ");
                                for (s = {}, l = 0; 4 > l; l++) s[t[l]] = d[l] = d[l] || d[(l - 1) / 2 >> 0];
                                return a.parse(e, s, r, o)
                            }
                    },
                    ct = ($._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, a, r = this.data, o = r.proxy, s = r.firstMPT, l = 1e-6; s;) e = o[s.v], s.r ? e = Math.round(e) : l > e && e > -l && (e = 0), s.t[s.p] = e, s = s._next;
                        if (r.autoRotate && (r.autoRotate.rotation = o.rotation), 1 === t)
                            for (s = r.firstMPT; s;) {
                                if (i = s.t, i.type) {
                                    if (1 === i.type) {
                                        for (a = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) a += i["xn" + n] + i["xs" + (n + 1)];
                                        i.e = a
                                    }
                                } else i.e = i.s + i.xs0;
                                s = s._next
                            }
                    }, function(t, e, i, n, a) {
                        this.t = t, this.p = e, this.v = i, this.r = a, n && (n._prev = this, this._next = n)
                    }),
                    ut = ($._parseToProxy = function(t, e, i, n, a, r) {
                        var o, s, l, d, h, c = n,
                            u = {},
                            p = {},
                            f = i._transform,
                            g = R;
                        for (i._transform = null, R = e, n = h = i.parse(t, e, n, a), R = g, r && (i._transform = f, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) {
                            if (1 >= n.type && (s = n.p, p[s] = n.s + n.c, u[s] = n.s, r || (d = new ct(n, "s", s, d, n.r), n.c = 0), 1 === n.type))
                                for (o = n.l; --o > 0;) l = "xn" + o, s = n.p + "_" + l, p[s] = n.data[l], u[s] = n[l], r || (d = new ct(n, l, s, d, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: u,
                            end: p,
                            firstMPT: d,
                            pt: h
                        }
                    }, $.CSSPropTween = function(t, e, n, a, o, s, l, d, h, c, u) {
                        this.t = t, this.p = e, this.s = n, this.c = a, this.n = l || e, t instanceof ut || r.push(this.n), this.r = d, this.type = s || 0, h && (this.pr = h, i = !0), this.b = void 0 === c ? n : c, this.e = void 0 === u ? n + a : u, o && (this._next = o, o._prev = this)
                    }),
                    pt = o.parseComplex = function(t, e, i, n, a, r, o, s, l, h) {
                        i = i || r || "", o = new ut(t, e, 0, 0, o, h ? 2 : 1, null, !1, s, i, n), n += "";
                        var c, u, p, f, v, y, w, b, _, x, k, C, S = i.split(", ").join(",").split(" "),
                            P = n.split(", ").join(",").split(" "),
                            O = S.length,
                            A = d !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(D, ", ").split(" "), P = P.join(" ").replace(D, ", ").split(" "), O = S.length), O !== P.length && (S = (r || "").split(" "), O = S.length), o.plugin = l, o.setRatio = h, c = 0; O > c; c++)
                            if (f = S[c], v = P[c], b = parseFloat(f), b || 0 === b) o.appendXtra("", b, it(v, b), v.replace(m, ""), A && -1 !== v.indexOf("px"), !0);
                            else if (a && ("#" === f.charAt(0) || rt[f] || T.test(f))) C = "," === v.charAt(v.length - 1) ? ")," : ")", f = st(f), v = st(v), _ = f.length + v.length > 6, _ && !F && 0 === v[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(P[c]).join("transparent")) : (F || (_ = !1), o.appendXtra(_ ? "rgba(" : "rgb(", f[0], v[0] - f[0], ",", !0, !0).appendXtra("", f[1], v[1] - f[1], ",", !0).appendXtra("", f[2], v[2] - f[2], _ ? "," : C, !0), _ && (f = 4 > f.length ? 1 : f[3], o.appendXtra("", f, (4 > v.length ? 1 : v[3]) - f, C, !1)));
                        else if (y = f.match(g)) {
                            if (w = v.match(m), !w || w.length !== y.length) return o;
                            for (p = 0, u = 0; y.length > u; u++) k = y[u], x = f.indexOf(k, p), o.appendXtra(f.substr(p, x - p), Number(k), it(w[u], k), "", A && "px" === f.substr(x + k.length, 2), 0 === u), p = x + k.length;
                            o["xs" + o.l] += f.substr(p)
                        } else o["xs" + o.l] += o.l ? " " + f : f;
                        if (-1 !== n.indexOf("=") && o.data) {
                            for (C = o.xs0 + o.data.s, c = 1; o.l > c; c++) C += o["xs" + c] + o.data["xn" + c];
                            o.e = C + o["xs" + c]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    ft = 9;
                for (l = ut.prototype, l.l = l.pr = 0; --ft > 0;) l["xn" + ft] = 0, l["xs" + ft] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, n, a, r) {
                    var o = this,
                        s = o.l;
                    return o["xs" + s] += r && s ? " " + t : t || "", i || 0 === s || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", s > 0 ? (o.data["xn" + s] = e + i, o.rxp["xn" + s] = a, o["xn" + s] = e, o.plugin || (o.xfirst = new ut(o, "xn" + s, e, i, o.xfirst || o, 0, o.n, a, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                        s: e + i
                    }, o.rxp = {}, o.s = e, o.c = i, o.r = a, o)) : (o["xs" + s] += e + (n || ""), o)
                };
                var gt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? B(t) || t : t, s[t] = s[this.p] = this, this.format = e.formatter || dt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    mt = $._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, a, r = t.split(","),
                            o = e.defaultValue;
                        for (i = i || [o], n = 0; r.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, a = new gt(r[n], e)
                    },
                    vt = function(t) {
                        if (!s[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            mt(t, {
                                parser: function(t, i, n, a, r, o, l) {
                                    var d = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[e];
                                    return d ? (d._cssRegister(), s[n].parse(t, i, n, a, r, o, l)) : (W("Error: " + e + " js file not loaded."), r)
                                }
                            })
                        }
                    };
                l = gt.prototype, l.parseComplex = function(t, e, i, n, a, r) {
                    var o, s, l, d, h, c, u = this.keyword;
                    if (this.multi && (D.test(i) || D.test(e) ? (s = e.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : u && (s = [e], l = [i])), l) {
                        for (d = l.length > s.length ? l.length : s.length, o = 0; d > o; o++) e = s[o] = s[o] || this.dflt, i = l[o] = l[o] || this.dflt, u && (h = e.indexOf(u), c = i.indexOf(u), h !== c && (i = -1 === c ? l : s, i[o] += " " + u));
                        e = s.join(", "), i = l.join(", ")
                    }
                    return pt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, a, r)
                }, l.parse = function(t, e, i, n, r, o) {
                    return this.parseComplex(t.style, this.format(U(t, this.p, a, !1, this.dflt)), this.format(e), r, o)
                }, o.registerSpecialProp = function(t, e, i) {
                    mt(t, {
                        parser: function(t, n, a, r, o, s) {
                            var l = new ut(t, a, 0, 0, o, 2, a, !1, i);
                            return l.plugin = s, l.setRatio = e(t, n, r._tween, a), l
                        },
                        priority: i
                    })
                };
                var yt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    wt = B("transform"),
                    bt = q + "transform",
                    _t = B("transformOrigin"),
                    xt = null !== B("perspective"),
                    Tt = $.Transform = function() {
                        this.skewY = 0
                    },
                    kt = window.SVGElement,
                    Ct = kt && (f || /Android/i.test(j) && !window.chrome),
                    St = function(t, e, i) {
                        var n = t.getBBox();
                        e = et(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * n.width : parseFloat(e[0])) + n.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * n.height : parseFloat(e[1])) + n.y
                    },
                    Pt = $.getTransform = function(t, e, i, n) {
                        if (t._gsTransform && i && !n) return t._gsTransform;
                        var r, s, l, d, h, c, u, p, f, g, m, v, y, w = i ? t._gsTransform || new Tt : new Tt,
                            b = 0 > w.scaleX,
                            _ = 2e-5,
                            x = 1e5,
                            T = 179.99,
                            k = T * E,
                            C = xt ? parseFloat(U(t, _t, e, !1, "0 0 0").split(" ")[2]) || w.zOrigin || 0 : 0,
                            S = parseFloat(o.defaultTransformPerspective) || 0;
                        if (wt ? r = U(t, bt, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(A), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), w.x || 0, w.y || 0].join(",") : ""), r && "none" !== r && "matrix(1, 0, 0, 1, 0, 0)" !== r) {
                            for (s = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = s.length; --l > -1;) d = Number(s[l]), s[l] = (h = d - (d |= 0)) ? (0 | h * x + (0 > h ? -.5 : .5)) / x + d : d;
                            if (16 === s.length) {
                                var P = s[8],
                                    O = s[9],
                                    L = s[10],
                                    D = s[12],
                                    R = s[13],
                                    M = s[14];
                                if (w.zOrigin && (M = -w.zOrigin, D = P * M - s[12], R = O * M - s[13], M = L * M + w.zOrigin - s[14]), !i || n || null == w.rotationX) {
                                    var N, z, $, j, F, H, W, q = s[0],
                                        X = s[1],
                                        B = s[2],
                                        Y = s[3],
                                        V = s[4],
                                        Q = s[5],
                                        Z = s[6],
                                        G = s[7],
                                        J = s[11],
                                        K = Math.atan2(Z, L),
                                        tt = -k > K || K > k;
                                    w.rotationX = K * I, K && (j = Math.cos(-K), F = Math.sin(-K), N = V * j + P * F, z = Q * j + O * F, $ = Z * j + L * F, P = V * -F + P * j, O = Q * -F + O * j, L = Z * -F + L * j, J = G * -F + J * j, V = N, Q = z, Z = $), K = Math.atan2(P, q), w.rotationY = K * I, K && (H = -k > K || K > k, j = Math.cos(-K), F = Math.sin(-K), N = q * j - P * F, z = X * j - O * F, $ = B * j - L * F, O = X * F + O * j, L = B * F + L * j, J = Y * F + J * j, q = N, X = z, B = $), K = Math.atan2(X, Q), w.rotation = K * I, K && (W = -k > K || K > k, j = Math.cos(-K), F = Math.sin(-K), q = q * j + V * F, z = X * j + Q * F, Q = X * -F + Q * j, Z = B * -F + Z * j, X = z), W && tt ? w.rotation = w.rotationX = 0 : W && H ? w.rotation = w.rotationY = 0 : H && tt && (w.rotationY = w.rotationX = 0), w.scaleX = (0 | Math.sqrt(q * q + X * X) * x + .5) / x, w.scaleY = (0 | Math.sqrt(Q * Q + O * O) * x + .5) / x, w.scaleZ = (0 | Math.sqrt(Z * Z + L * L) * x + .5) / x, w.skewX = 0, w.perspective = J ? 1 / (0 > J ? -J : J) : 0, w.x = D, w.y = R, w.z = M
                                }
                            } else if (!(xt && !n && s.length && w.x === s[4] && w.y === s[5] && (w.rotationX || w.rotationY) || void 0 !== w.x && "none" === U(t, "display", e))) {
                                var et = s.length >= 6,
                                    it = et ? s[0] : 1,
                                    nt = s[1] || 0,
                                    at = s[2] || 0,
                                    rt = et ? s[3] : 1;
                                w.x = s[4] || 0, w.y = s[5] || 0, c = Math.sqrt(it * it + nt * nt), u = Math.sqrt(rt * rt + at * at), p = it || nt ? Math.atan2(nt, it) * I : w.rotation || 0, f = at || rt ? Math.atan2(at, rt) * I + p : w.skewX || 0, g = c - Math.abs(w.scaleX || 0), m = u - Math.abs(w.scaleY || 0), Math.abs(f) > 90 && 270 > Math.abs(f) && (b ? (c *= -1, f += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (u *= -1, f += 0 >= f ? 180 : -180)), v = (p - w.rotation) % 180, y = (f - w.skewX) % 180, (void 0 === w.skewX || g > _ || -_ > g || m > _ || -_ > m || v > -T && T > v && !1 | v * x || y > -T && T > y && !1 | y * x) && (w.scaleX = c, w.scaleY = u, w.rotation = p, w.skewX = f), xt && (w.rotationX = w.rotationY = w.z = 0, w.perspective = S, w.scaleZ = 1)
                            }
                            w.zOrigin = C;
                            for (l in w) _ > w[l] && w[l] > -_ && (w[l] = 0)
                        } else w = {
                            x: 0,
                            y: 0,
                            z: 0,
                            scaleX: 1,
                            scaleY: 1,
                            scaleZ: 1,
                            skewX: 0,
                            skewY: 0,
                            perspective: S,
                            rotation: 0,
                            rotationX: 0,
                            rotationY: 0,
                            zOrigin: 0
                        };
                        return i && (t._gsTransform = w), w.svg = kt && t instanceof kt, w.svg && St(t, U(t, _t, a, !1, "50% 50%") + "", w), w.xPercent = w.yPercent = 0, w
                    },
                    Ot = function(t) {
                        var e, i, n = this.data,
                            a = -n.rotation * E,
                            r = a + n.skewX * E,
                            o = 1e5,
                            s = (0 | Math.cos(a) * n.scaleX * o) / o,
                            l = (0 | Math.sin(a) * n.scaleX * o) / o,
                            d = (0 | Math.sin(r) * -n.scaleY * o) / o,
                            h = (0 | Math.cos(r) * n.scaleY * o) / o,
                            c = this.t.style,
                            u = this.t.currentStyle;
                        if (u) {
                            i = l, l = -d, d = -i, e = u.filter, c.filter = "";
                            var p, g, m = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                y = "absolute" !== u.position,
                                _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + l + ", M21=" + d + ", M22=" + h,
                                x = n.x + m * n.xPercent / 100,
                                T = n.y + v * n.yPercent / 100;
                            if (null != n.ox && (p = (n.oxp ? .01 * m * n.ox : n.ox) - m / 2, g = (n.oyp ? .01 * v * n.oy : n.oy) - v / 2, x += p - (p * s + g * l), T += g - (p * d + g * h)), y ? (p = m / 2, g = v / 2, _ += ", Dx=" + (p - (p * s + g * l) + x) + ", Dy=" + (g - (p * d + g * h) + T) + ")") : _ += ", sizingMethod='auto expand')", c.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(L, _) : _ + " " + e, (0 === t || 1 === t) && 1 === s && 0 === l && 0 === d && 1 === h && (y && -1 === _.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !y) {
                                var k, C, S, P = 8 > f ? 1 : -1;
                                for (p = n.ieOffsetX || 0, g = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > s ? -s : s) * m + (0 > l ? -l : l) * v)) / 2 + x), n.ieOffsetY = Math.round((v - ((0 > h ? -h : h) * v + (0 > d ? -d : d) * m)) / 2 + T), ft = 0; 4 > ft; ft++) C = K[ft], k = u[C], i = -1 !== k.indexOf("px") ? parseFloat(k) : V(this.t, C, parseFloat(k), k.replace(w, "")) || 0, S = i !== n[C] ? 2 > ft ? -n.ieOffsetX : -n.ieOffsetY : 2 > ft ? p - n.ieOffsetX : g - n.ieOffsetY, c[C] = (n[C] = Math.round(i - S * (0 === ft || 2 === ft ? 1 : P))) + "px"
                            }
                        }
                    },
                    At = $.set3DTransformRatio = function(t) {
                        var e, i, n, a, r, o, s, l, d, h, c, p, f, g, m, v, y, w, b, _, x, T, k, C = this.data,
                            S = this.t.style,
                            P = C.rotation * E,
                            O = C.scaleX,
                            A = C.scaleY,
                            L = C.scaleZ,
                            D = C.x,
                            I = C.y,
                            R = C.z,
                            M = C.perspective;
                        if (!(1 !== t && 0 !== t || "auto" !== C.force3D || C.rotationY || C.rotationX || 1 !== L || M || R)) return void Lt.call(this, t);
                        if (u) {
                            var N = 1e-4;
                            N > O && O > -N && (O = L = 2e-5), N > A && A > -N && (A = L = 2e-5), !M || C.z || C.rotationX || C.rotationY || (M = 0)
                        }
                        if (P || C.skewX) w = Math.cos(P), b = Math.sin(P), e = w, r = b, C.skewX && (P -= C.skewX * E, w = Math.cos(P), b = Math.sin(P), "simple" === C.skewType && (_ = Math.tan(C.skewX * E), _ = Math.sqrt(1 + _ * _), w *= _, b *= _)), i = -b, o = w;
                        else {
                            if (!(C.rotationY || C.rotationX || 1 !== L || M || C.svg)) return void(S[wt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + I + "px," + R + "px)" + (1 !== O || 1 !== A ? " scale(" + O + "," + A + ")" : ""));
                            e = o = 1, i = r = 0
                        }
                        c = 1, n = a = s = l = d = h = p = f = g = 0, m = M ? -1 / M : 0, v = C.zOrigin, y = 1e5, P = C.rotationY * E, P && (w = Math.cos(P), b = Math.sin(P), d = c * -b, f = m * -b, n = e * b, s = r * b, c *= w, m *= w, e *= w, r *= w), P = C.rotationX * E, P && (w = Math.cos(P), b = Math.sin(P), _ = i * w + n * b, x = o * w + s * b, T = h * w + c * b, k = g * w + m * b, n = i * -b + n * w, s = o * -b + s * w, c = h * -b + c * w, m = g * -b + m * w, i = _, o = x, h = T, g = k), 1 !== L && (n *= L, s *= L, c *= L, m *= L), 1 !== A && (i *= A, o *= A, h *= A, g *= A), 1 !== O && (e *= O, r *= O, d *= O, f *= O), v && (p -= v, a = n * p, l = s * p, p = c * p + v), a = (_ = (a += D) - (a |= 0)) ? (0 | _ * y + (0 > _ ? -.5 : .5)) / y + a : a, l = (_ = (l += I) - (l |= 0)) ? (0 | _ * y + (0 > _ ? -.5 : .5)) / y + l : l, p = (_ = (p += R) - (p |= 0)) ? (0 | _ * y + (0 > _ ? -.5 : .5)) / y + p : p, C.svg && (a += C.xOrigin - (C.xOrigin * e + C.yOrigin * i), l += C.yOrigin - (C.xOrigin * r + C.yOrigin * o)), S[wt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | e * y) / y, (0 | r * y) / y, (0 | d * y) / y, (0 | f * y) / y, (0 | i * y) / y, (0 | o * y) / y, (0 | h * y) / y, (0 | g * y) / y, (0 | n * y) / y, (0 | s * y) / y, (0 | c * y) / y, (0 | m * y) / y, a, l, p, M ? 1 + -p / M : 1].join(",") + ")"
                    },
                    Lt = $.set2DTransformRatio = function(t) {
                        var e, i, n, a, r, o, s, l, d, h, c = this.data,
                            u = this.t,
                            p = u.style,
                            f = c.x,
                            g = c.y;
                        return !(c.rotationX || c.rotationY || c.z || c.force3D === !0 || "auto" === c.force3D && 1 !== t && 0 !== t) || c.svg && Ct || !xt ? (a = c.scaleX, r = c.scaleY, void(c.rotation || c.skewX || c.svg ? (e = c.rotation * E, i = e - c.skewX * E, n = 1e5, o = Math.cos(e) * a, s = Math.sin(e) * a, l = Math.sin(i) * -r, d = Math.cos(i) * r, c.svg && (f += c.xOrigin - (c.xOrigin * o + c.yOrigin * l), g += c.yOrigin - (c.xOrigin * s + c.yOrigin * d)), h = (0 | o * n) / n + "," + (0 | s * n) / n + "," + (0 | l * n) / n + "," + (0 | d * n) / n + "," + f + "," + g + ")", c.svg && Ct ? u.setAttribute("transform", "matrix(" + h) : p[wt] = (c.xPercent || c.yPercent ? "translate(" + c.xPercent + "%," + c.yPercent + "%) matrix(" : "matrix(") + h) : p[wt] = (c.xPercent || c.yPercent ? "translate(" + c.xPercent + "%," + c.yPercent + "%) matrix(" : "matrix(") + a + ",0,0," + r + "," + f + "," + g + ")")) : (this.setRatio = At, void At.call(this, t))
                    };
                mt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                    parser: function(t, e, i, n, r, s, l) {
                        if (n._transform) return r;
                        var d, h, c, u, p, f, g, m = n._transform = Pt(t, a, !0, l.parseTransform),
                            v = t.style,
                            y = 1e-6,
                            w = yt.length,
                            b = l,
                            _ = {};
                        if ("string" == typeof b.transform && wt) c = N.style, c[wt] = b.transform, c.display = "block", c.position = "absolute", M.body.appendChild(N), d = Pt(N, null, !1), M.body.removeChild(N);
                        else if ("object" == typeof b) {
                            if (d = {
                                    scaleX: nt(null != b.scaleX ? b.scaleX : b.scale, m.scaleX),
                                    scaleY: nt(null != b.scaleY ? b.scaleY : b.scale, m.scaleY),
                                    scaleZ: nt(b.scaleZ, m.scaleZ),
                                    x: nt(b.x, m.x),
                                    y: nt(b.y, m.y),
                                    z: nt(b.z, m.z),
                                    xPercent: nt(b.xPercent, m.xPercent),
                                    yPercent: nt(b.yPercent, m.yPercent),
                                    perspective: nt(b.transformPerspective, m.perspective)
                                }, g = b.directionalRotation, null != g)
                                if ("object" == typeof g)
                                    for (c in g) b[c] = g[c];
                                else b.rotation = g;
                                "string" == typeof b.x && -1 !== b.x.indexOf("%") && (d.x = 0, d.xPercent = nt(b.x, m.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (d.y = 0, d.yPercent = nt(b.y, m.yPercent)), d.rotation = at("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : m.rotation, m.rotation, "rotation", _), xt && (d.rotationX = at("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : m.rotationX || 0, m.rotationX, "rotationX", _), d.rotationY = at("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : m.rotationY || 0, m.rotationY, "rotationY", _)), d.skewX = null == b.skewX ? m.skewX : at(b.skewX, m.skewX), d.skewY = null == b.skewY ? m.skewY : at(b.skewY, m.skewY), (h = d.skewY - m.skewY) && (d.skewX += h, d.rotation += h)
                        }
                        for (xt && null != b.force3D && (m.force3D = b.force3D, f = !0), m.skewType = b.skewType || m.skewType || o.defaultSkewType, p = m.force3D || m.z || m.rotationX || m.rotationY || d.z || d.rotationX || d.rotationY || d.perspective, p || null == b.scale || (d.scaleZ = 1); --w > -1;) i = yt[w], u = d[i] - m[i], (u > y || -y > u || null != b[i] || null != R[i]) && (f = !0, r = new ut(m, i, m[i], u, r), i in _ && (r.e = _[i]), r.xs0 = 0, r.plugin = s, n._overwriteProps.push(r.n));
                        return u = b.transformOrigin, u && m.svg ? (St(t, u, d), r = new ut(m, "xOrigin", m.xOrigin, d.xOrigin - m.xOrigin, r, -1, "transformOrigin"), r.b = m.xOrigin, r.e = r.xs0 = d.xOrigin, r = new ut(m, "yOrigin", m.yOrigin, d.yOrigin - m.yOrigin, r, -1, "transformOrigin"), r.b = m.yOrigin, r.e = r.xs0 = d.yOrigin, Et(v, _t)) : (u || xt && p && m.zOrigin) && (wt ? (f = !0, i = _t, u = (u || U(t, i, a, !1, "50% 50%")) + "", r = new ut(v, i, 0, 0, r, -1, "transformOrigin"), r.b = v[i], r.plugin = s, xt ? (c = m.zOrigin, u = u.split(" "), m.zOrigin = (u.length > 2 && (0 === c || "0px" !== u[2]) ? parseFloat(u[2]) : c) || 0, r.xs0 = r.e = u[0] + " " + (u[1] || "50%") + " 0px", r = new ut(m, "zOrigin", 0, 0, r, -1, r.n), r.b = c, r.xs0 = r.e = m.zOrigin) : r.xs0 = r.e = u) : et(u + "", m)), f && (n._transformType = m.svg && Ct || !p && 3 !== this._transformType ? 2 : 3), r
                    },
                    prefix: !0
                }), mt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), mt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, r, o) {
                        e = this.format(e);
                        var s, l, d, h, c, u, p, f, g, m, v, y, w, b, _, x, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            k = t.style;
                        for (g = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), s = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = B(T[l])), c = h = U(t, T[l], a, !1, "0px"), -1 !== c.indexOf(" ") && (h = c.split(" "), c = h[0], h = h[1]), u = d = s[l], p = parseFloat(c), y = c.substr((p + "").length), w = "=" === u.charAt(1), w ? (f = parseInt(u.charAt(0) + "1", 10), u = u.substr(2),
                            f *= parseFloat(u), v = u.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(u), v = u.substr((f + "").length)), "" === v && (v = n[i] || y), v !== y && (b = V(t, "borderLeft", p, y), _ = V(t, "borderTop", p, y), "%" === v ? (c = 100 * (b / g) + "%", h = 100 * (_ / m) + "%") : "em" === v ? (x = V(t, "borderLeft", 1, "em"), c = b / x + "em", h = _ / x + "em") : (c = b + "px", h = _ + "px"), w && (u = parseFloat(c) + f + v, d = parseFloat(h) + f + v)), o = pt(k, T[l], c + " " + h, u + " " + d, !1, "0px", o);
                        return o
                    },
                    prefix: !0,
                    formatter: dt("0px 0px 0px 0px", !1, !0)
                }), mt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, r, o) {
                        var s, l, d, h, c, u, p = "background-position",
                            g = a || Y(t, null),
                            m = this.format((g ? f ? g.getPropertyValue(p + "-x") + " " + g.getPropertyValue(p + "-y") : g.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && (u = U(t, "backgroundImage").replace(S, ""), u && "none" !== u)) {
                            for (s = m.split(" "), l = v.split(" "), z.setAttribute("src", u), d = 2; --d > -1;) m = s[d], h = -1 !== m.indexOf("%"), h !== (-1 !== l[d].indexOf("%")) && (c = 0 === d ? t.offsetWidth - z.width : t.offsetHeight - z.height, s[d] = h ? parseFloat(m) / 100 * c + "px" : 100 * (parseFloat(m) / c) + "%");
                            m = s.join(" ")
                        }
                        return this.parseComplex(t.style, m, v, r, o)
                    },
                    formatter: et
                }), mt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: et
                }), mt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), mt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), mt("transformStyle", {
                    prefix: !0
                }), mt("backfaceVisibility", {
                    prefix: !0
                }), mt("userSelect", {
                    prefix: !0
                }), mt("margin", {
                    parser: ht("marginTop,marginRight,marginBottom,marginLeft")
                }), mt("padding", {
                    parser: ht("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), mt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, r, o) {
                        var s, l, d;
                        return 9 > f ? (l = t.currentStyle, d = 8 > f ? " " : ",", s = "rect(" + l.clipTop + d + l.clipRight + d + l.clipBottom + d + l.clipLeft + ")", e = this.format(e).split(",").join(d)) : (s = this.format(U(t, this.p, a, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, s, e, r, o)
                    }
                }), mt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), mt("autoRound,strictUnits", {
                    parser: function(t, e, i, n, a) {
                        return a
                    }
                }), mt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, r, o) {
                        return this.parseComplex(t.style, this.format(U(t, "borderTopWidth", a, !1, "0px") + " " + U(t, "borderTopStyle", a, !1, "solid") + " " + U(t, "borderTopColor", a, !1, "#000")), this.format(e), r, o)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(lt) || ["#000"])[0]
                    }
                }), mt("borderWidth", {
                    parser: ht("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), mt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, a) {
                        var r = t.style,
                            o = "cssFloat" in r ? "cssFloat" : "styleFloat";
                        return new ut(r, o, 0, 0, a, -1, i, !1, 0, r[o], e)
                    }
                });
                var Dt = function(t) {
                    var e, i = this.t,
                        n = i.filter || U(this.data, "filter") || "",
                        a = 0 | this.s + this.c * t;
                    100 === a && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !U(this.data, "filter")) : (i.filter = n.replace(x, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + a + ")"), -1 === n.indexOf("pacity") ? 0 === a && this.xn1 || (i.filter = n + " alpha(opacity=" + a + ")") : i.filter = n.replace(b, "opacity=" + a))
                };
                mt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, r, o) {
                        var s = parseFloat(U(t, "opacity", a, !1, "1")),
                            l = t.style,
                            d = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + s), d && 1 === s && "hidden" === U(t, "visibility", a) && 0 !== e && (s = 0), F ? r = new ut(l, "opacity", s, e - s, r) : (r = new ut(l, "opacity", 100 * s, 100 * (e - s), r), r.xn1 = d ? 1 : 0, l.zoom = 1, r.type = 2, r.b = "alpha(opacity=" + r.s + ")", r.e = "alpha(opacity=" + (r.s + r.c) + ")", r.data = t, r.plugin = o, r.setRatio = Dt), d && (r = new ut(l, "visibility", 0, 0, r, -1, null, !1, 0, 0 !== s ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), r.xs0 = "inherit", n._overwriteProps.push(r.n), n._overwriteProps.push(i)), r
                    }
                });
                var Et = function(t, e) {
                        e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    It = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Et(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                mt("className", {
                    parser: function(t, e, n, r, o, s, l) {
                        var d, h, c, u, p, f = t.getAttribute("class") || "",
                            g = t.style.cssText;
                        if (o = r._classNamePT = new ut(t, n, 0, 0, o, 2), o.setRatio = It, o.pr = -11, i = !0, o.b = f, h = Z(t, a), c = t._gsClassPT) {
                            for (u = {}, p = c.data; p;) u[p.p] = 1, p = p._next;
                            c.setRatio(1)
                        }
                        return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), r._tween._duration && (t.setAttribute("class", o.e), d = G(t, h, Z(t), l, u), t.setAttribute("class", f), o.data = d.firstMPT, t.style.cssText = g, o = o.xfirst = r.parse(t, d.difs, o, s)), o
                    }
                });
                var Rt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, a, r = this.t.style,
                            o = s.transform.parse;
                        if ("all" === this.e) r.cssText = "", a = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], s[i] && (s[i].parse === o ? a = !0 : i = "transformOrigin" === i ? _t : s[i].p), Et(r, i);
                        a && (Et(r, wt), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (mt("clearProps", {
                        parser: function(t, e, n, a, r) {
                            return r = new ut(t, n, 0, 0, r, 2), r.setRatio = Rt, r.e = e, r.pr = -10, r.data = a._tween, i = !0, r
                        }
                    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), ft = l.length; ft--;) vt(l[ft]);
                l = o.prototype, l._firstPT = null, l._onInitTween = function(t, e, s) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = s, this._vars = e, d = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, a = Y(t, ""), r = this._overwriteProps;
                    var l, u, f, g, m, v, y, w, b, x = t.style;
                    if (h && "" === x.zIndex && (l = U(t, "zIndex", a), ("auto" === l || "" === l) && this._addLazySet(x, "zIndex", 0)), "string" == typeof e && (g = x.cssText, l = Z(t, a), x.cssText = g + ";" + e, l = G(t, l, Z(t)).difs, !F && _.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, x.cssText = g), this._firstPT = u = this.parse(t, e, null), this._transformType) {
                        for (b = 3 === this._transformType, wt ? c && (h = !0, "" === x.zIndex && (y = U(t, "zIndex", a), ("auto" === y || "" === y) && this._addLazySet(x, "zIndex", 0)), p && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : x.zoom = 1, f = u; f && f._next;) f = f._next;
                        w = new ut(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, f), w.setRatio = b && xt ? At : wt ? Lt : Ot, w.data = this._transform || Pt(t, a, !0), r.pop()
                    }
                    if (i) {
                        for (; u;) {
                            for (v = u._next, f = g; f && f.pr > u.pr;) f = f._next;
                            (u._prev = f ? f._prev : m) ? u._prev._next = u: g = u, (u._next = f) ? f._prev = u : m = u, u = v
                        }
                        this._firstPT = g
                    }
                    return !0
                }, l.parse = function(t, e, i, r) {
                    var o, l, h, c, u, p, f, g, m, v, y = t.style;
                    for (o in e) p = e[o], l = s[o], l ? i = l.parse(t, p, o, this, i, r, e) : (u = U(t, o, a) + "", m = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || m && T.test(p) ? (m || (p = st(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = pt(y, o, u, p, !0, "transparent", i, 0, r)) : !m || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (h = parseFloat(u), f = h || 0 === h ? u.substr((h + "").length) : "", ("" === u || "auto" === u) && ("width" === o || "height" === o ? (h = tt(t, o, a), f = "px") : "left" === o || "top" === o ? (h = Q(t, o, a), f = "px") : (h = "opacity" !== o ? 0 : 1, f = "")), v = m && "=" === p.charAt(1), v ? (c = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), c *= parseFloat(p), g = p.replace(w, "")) : (c = parseFloat(p), g = m ? p.substr((c + "").length) || "" : ""), "" === g && (g = o in n ? n[o] : f), p = c || 0 === c ? (v ? c + h : c) + g : e[o], f !== g && "" !== g && (c || 0 === c) && h && (h = V(t, o, h, f), "%" === g ? (h /= V(t, o, 100, "%") / 100, e.strictUnits !== !0 && (u = h + "%")) : "em" === g ? h /= V(t, o, 1, "em") : "px" !== g && (c = V(t, o, c, g), g = "px"), v && (c || 0 === c) && (p = c + h + g)), v && (c += h), !h && 0 !== h || !c && 0 !== c ? void 0 !== y[o] && (p || "NaN" != p + "" && null != p) ? (i = new ut(y, o, c || h || 0, 0, i, -1, o, !1, 0, u, p), i.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : u) : W("invalid " + o + " tween value: " + e[o]) : (i = new ut(y, o, h, c - h, i, 0, o, d !== !1 && ("px" === g || "zIndex" === o), 0, u, p), i.xs0 = g)) : i = pt(y, o, u, p, !0, null, i, 0, r)), r && i && !i.plugin && (i.plugin = r);
                    return i
                }, l.setRatio = function(t) {
                    var e, i, n, a = this._firstPT,
                        r = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; a;) {
                                if (e = a.c * t + a.s, a.r ? e = Math.round(e) : r > e && e > -r && (e = 0), a.type)
                                    if (1 === a.type)
                                        if (n = a.l, 2 === n) a.t[a.p] = a.xs0 + e + a.xs1 + a.xn1 + a.xs2;
                                        else if (3 === n) a.t[a.p] = a.xs0 + e + a.xs1 + a.xn1 + a.xs2 + a.xn2 + a.xs3;
                                else if (4 === n) a.t[a.p] = a.xs0 + e + a.xs1 + a.xn1 + a.xs2 + a.xn2 + a.xs3 + a.xn3 + a.xs4;
                                else if (5 === n) a.t[a.p] = a.xs0 + e + a.xs1 + a.xn1 + a.xs2 + a.xn2 + a.xs3 + a.xn3 + a.xs4 + a.xn4 + a.xs5;
                                else {
                                    for (i = a.xs0 + e + a.xs1, n = 1; a.l > n; n++) i += a["xn" + n] + a["xs" + (n + 1)];
                                    a.t[a.p] = i
                                } else -1 === a.type ? a.t[a.p] = a.xs0 : a.setRatio && a.setRatio(t);
                                else a.t[a.p] = e + a.xs0;
                                a = a._next
                            } else
                                for (; a;) 2 !== a.type ? a.t[a.p] = a.b : a.setRatio(t), a = a._next;
                        else
                            for (; a;) 2 !== a.type ? a.t[a.p] = a.e : a.setRatio(t), a = a._next
                }, l._enableTransforms = function(t) {
                    this._transform = this._transform || Pt(this._target, a, !0), this._transformType = this._transform.svg && Ct || !t && 3 !== this._transformType ? 2 : 3
                };
                var Mt = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                l._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new ut(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Mt, n.data = this
                }, l._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, l._kill = function(e) {
                    var i, n, a, r = e;
                    if (e.autoAlpha || e.alpha) {
                        r = {};
                        for (n in e) r[n] = e[n];
                        r.opacity = 1, r.autoAlpha && (r.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (a = i.xfirst, a && a._prev ? this._linkCSSP(a._prev, i._next, a._prev._prev) : a === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, a._prev), this._classNamePT = null), t.prototype._kill.call(this, r)
                };
                var Nt = function(t, e, i) {
                    var n, a, r, o;
                    if (t.slice)
                        for (a = t.length; --a > -1;) Nt(t[a], e, i);
                    else
                        for (n = t.childNodes, a = n.length; --a > -1;) r = n[a], o = r.type, r.style && (e.push(Z(r)), i && i.push(r)), 1 !== o && 9 !== o && 11 !== o || !r.childNodes.length || Nt(r, e, i)
                };
                return o.cascadeTo = function(t, i, n) {
                    var a, r, o, s = e.to(t, i, n),
                        l = [s],
                        d = [],
                        h = [],
                        c = [],
                        u = e._internals.reservedProps;
                    for (t = s._targets || s.target, Nt(t, d, c), s.render(i, !0), Nt(t, h), s.render(0, !0), s._enabled(!0), a = c.length; --a > -1;)
                        if (r = G(c[a], d[a], h[a]), r.firstMPT) {
                            r = r.difs;
                            for (o in n) u[o] && (r[o] = n[o]);
                            l.push(e.to(c[a], i, r))
                        }
                    return l
                }, t.activate([o]), o
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, n = this._tween, a = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), r = a.length, o = {}, s = n._propLookup.roundProps; --r > -1;) o[a[r]] = 1;
                    for (r = a.length; --r > -1;)
                        for (t = a[r], e = n._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(o, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = s), e = i;
                    return !1
                }, e._add = function(t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.3.3",
                init: function(t, e) {
                    var i, n, a;
                    if ("function" != typeof t.setAttribute) return !1;
                    this._target = t, this._proxy = {}, this._start = {}, this._end = {};
                    for (i in e) this._start[i] = this._proxy[i] = n = t.getAttribute(i), a = this._addTween(this._proxy, i, parseFloat(n), e[i], i), this._end[i] = a ? a.s + a.c : e[i], this._overwriteProps.push(i);
                    return !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    for (var e, i = this._overwriteProps, n = i.length, a = 1 === t ? this._end : t ? this._proxy : this._start; --n > -1;) e = i[n], this._target.setAttribute(e, a[e] + "")
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, n, a, r, o, s, l = e.useRadians === !0 ? 2 * Math.PI : 360,
                        d = 1e-6;
                    for (i in e) "useRadians" !== i && (s = (e[i] + "").split("_"), n = s[0], a = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), r = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? a + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, o = r - a, s.length && (n = s.join("_"), -1 !== n.indexOf("short") && (o %= l, o !== o % (l / 2) && (o = 0 > o ? o + l : o - l)), -1 !== n.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * l) % l - (0 | o / l) * l : -1 !== n.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * l) % l - (0 | o / l) * l)), (o > d || -d > o) && (this._addTween(t, i, a, a + o, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, a = _gsScope.GreenSockGlobals || _gsScope,
                    r = a.com.greensock,
                    o = 2 * Math.PI,
                    s = Math.PI / 2,
                    l = r._class,
                    d = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            a = n.prototype = new t;
                        return a.constructor = n, a.getRatio = i, n
                    },
                    h = t.register || function() {},
                    c = function(t, e, i, n) {
                        var a = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return h(a, t), a
                    },
                    u = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    p = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            a = n.prototype = new t;
                        return a.constructor = n, a.getRatio = i, a.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    f = c("Back", p("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), p("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), p("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    g = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    m = g.prototype = new t;
                return m.constructor = g, m.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, g.ease = new g(.7, .7), m.config = g.config = function(t, e, i) {
                    return new g(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, m.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, n, a, r, o, s, l = e.taper || "none", d = [], h = 0, c = 0 | (e.points || 20), p = c, f = e.randomize !== !1, g = e.clamp === !0, m = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / c * p, n = m ? m.getRatio(i) : i, "none" === l ? a = v : "out" === l ? (r = 1 - i, a = r * r * v) : "in" === l ? a = i * i * v : .5 > i ? (r = 2 * i, a = .5 * r * r * v) : (r = 2 * (1 - i), a = .5 * r * r * v), f ? n += Math.random() * a - .5 * a : p % 2 ? n += .5 * a : n -= .5 * a, g && (n > 1 ? n = 1 : 0 > n && (n = 0)), d[h++] = {
                        x: i,
                        y: n
                    };
                    for (d.sort(function(t, e) {
                            return t.x - e.x
                        }), s = new u(1, 1, null), p = c; --p > -1;) o = d[p], s = new u(o.x, o.y, s);
                    this._prev = new u(0, 0, 0 !== s.t ? s : s.next)
                }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, m.config = function(t) {
                    return new i(t)
                }, i.ease = new i, c("Bounce", d("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), d("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), d("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), c("Circ", d("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), d("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), d("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var a = l("easing." + e, function(t, e) {
                            this._p1 = t || 1, this._p2 = e || n, this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        r = a.prototype = new t;
                    return r.constructor = a, r.getRatio = i, r.config = function(t, e) {
                        return new a(t, e)
                    }, a
                }, c("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * o / this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2))
                }, .3), n("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2) + 1
                }, .45)), c("Expo", d("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), d("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), d("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), c("Sine", d("SineOut", function(t) {
                    return Math.sin(t * s)
                }), d("SineIn", function(t) {
                    return -Math.cos(t * s) + 1
                }), d("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), h(a.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), f
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, a, r, o, s, l = function(t) {
                    var e, n = t.split("."),
                        a = i;
                    for (e = 0; n.length > e; e++) a[n[e]] = a = a[n[e]] || {};
                    return a
                },
                d = l("com.greensock"),
                h = 1e-10,
                c = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                u = function() {},
                p = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                f = {},
                g = function(n, a, r, o) {
                    this.sc = f[n] ? f[n].sc : [], f[n] = this, this.gsClass = null, this.func = r;
                    var s = [];
                    this.check = function(d) {
                        for (var h, c, u, p, m = a.length, v = m; --m > -1;)(h = f[a[m]] || new g(a[m], [])).gsClass ? (s[m] = h.gsClass, v--) : d && h.sc.push(this);
                        if (0 === v && r)
                            for (c = ("com.greensock." + n).split("."), u = c.pop(), p = l(c.join("."))[u] = this.gsClass = r.apply(r, s), o && (i[u] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return p
                                }) : n === e && "undefined" != typeof module && module.exports && (module.exports = p)), m = 0; this.sc.length > m; m++) this.sc[m].check()
                    }, this.check(!0)
                },
                m = t._gsDefine = function(t, e, i, n) {
                    return new g(t, e, i, n)
                },
                v = d._class = function(t, e, i) {
                    return e = e || function() {}, m(t, [], function() {
                        return e
                    }, i), e
                };
            m.globals = i;
            var y = [0, 0, 1, 1],
                w = [],
                b = v("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? y.concat(e) : y
                }, !0),
                _ = b.map = {},
                x = b.register = function(t, e, i, n) {
                    for (var a, r, o, s, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (r = l[h], a = n ? v("easing." + r, null, !0) : d.easing[r] || {}, o = c.length; --o > -1;) s = c[o], _[r + "." + s] = _[s + r] = a[s] = t.getRatio ? t : t[s] || new t
                };
            for (r = b.prototype, r._calcEnd = !1, r.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], a = n.length; --a > -1;) r = n[a] + ",Power" + a, x(new b(null, null, 1, a), r, "easeOut", !0), x(new b(null, null, 2, a), r, "easeIn" + (0 === a ? ",easeNone" : "")), x(new b(null, null, 3, a), r, "easeInOut");
            _.linear = d.easing.Linear.easeIn, _.swing = d.easing.Quad.easeInOut;
            var T = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            r = T.prototype, r.addEventListener = function(t, e, i, n, a) {
                a = a || 0;
                var r, l, d = this._listeners[t],
                    h = 0;
                for (null == d && (this._listeners[t] = d = []), l = d.length; --l > -1;) r = d[l], r.c === e && r.s === i ? d.splice(l, 1) : 0 === h && a > r.pr && (h = l + 1);
                d.splice(h, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: a
                }), this !== o || s || o.wake()
            }, r.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, r.dispatchEvent = function(t) {
                var e, i, n, a = this._listeners[t];
                if (a)
                    for (e = a.length, i = this._eventTarget; --e > -1;) n = a[e], n && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var k = t.requestAnimationFrame,
                C = t.cancelAnimationFrame,
                S = Date.now || function() {
                    return (new Date).getTime()
                },
                P = S();
            for (n = ["ms", "moz", "webkit", "o"], a = n.length; --a > -1 && !k;) k = t[n[a] + "RequestAnimationFrame"], C = t[n[a] + "CancelAnimationFrame"] || t[n[a] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, n, a, r, l, d = this,
                    c = S(),
                    p = e !== !1 && k,
                    f = 500,
                    g = 33,
                    m = function(t) {
                        var e, o, s = S() - P;
                        s > f && (c += s - g), P += s, d.time = (P - c) / 1e3, e = d.time - l, (!i || e > 0 || t === !0) && (d.frame++, l += e + (e >= r ? .004 : r - e), o = !0), t !== !0 && (a = n(m)), o && d.dispatchEvent("tick")
                    };
                T.call(d), d.time = d.frame = 0, d.tick = function() {
                    m(!0)
                }, d.lagSmoothing = function(t, e) {
                    f = t || 1 / h, g = Math.min(e, f, 0)
                }, d.sleep = function() {
                    null != a && (p && C ? C(a) : clearTimeout(a), n = u, a = null, d === o && (s = !1))
                }, d.wake = function() {
                    null !== a ? d.sleep() : d.frame > 10 && (P = S() - f + 5), n = 0 === i ? u : p && k ? k : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - d.time) + 1)
                    }, d === o && (s = !0), m(2)
                }, d.fps = function(t) {
                    return arguments.length ? (i = t, r = 1 / (i || 60), l = this.time + r, void d.wake()) : i
                }, d.useRAF = function(t) {
                    return arguments.length ? (d.sleep(), p = t, void d.fps(i)) : p
                }, d.fps(t), setTimeout(function() {
                    p && (!a || 5 > d.frame) && d.useRAF(!1)
                }, 1500)
            }), r = d.Ticker.prototype = new d.events.EventDispatcher, r.constructor = d.Ticker;
            var O = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, q) {
                    s || o.wake();
                    var i = this.vars.useFrames ? W : q;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            o = O.ticker = new d.Ticker, r = O.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
            var A = function() {
                s && S() - P > 2e3 && o.wake(), setTimeout(A, 2e3)
            };
            A(), r.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, r.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, r.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, r.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, r.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, r.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, r.render = function() {}, r.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, r.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, r._enabled = function(t, e) {
                return s || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, r._kill = function() {
                return this._enabled(!1, !1)
            }, r.kill = function(t, e) {
                return this._kill(t, e), this
            }, r._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, r._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, r.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var a = this.vars;
                    if (1 === arguments.length) return a[t];
                    null == e ? delete a[t] : (a[t] = e, a[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, a[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, r.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, r.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, r.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, r.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, r.totalTime = function(t, e, i) {
                if (s || o.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            a = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : a._time) - (this._reversed ? n - t : t) / this._timeScale, a._dirty || this._uncache(!1), a._timeline)
                            for (; a._timeline;) a._timeline._time !== (a._startTime + a._totalTime) / a._timeScale && a.totalTime(a._totalTime, !0), a = a._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), R.length && X())
                }
                return this
            }, r.progress = r.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, r.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, r.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, r.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, r.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, r.paused = function(t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    s || t || o.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        n = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var L = v("core.SimpleTimeline", function(t) {
                O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            r = L.prototype = new O, r.constructor = L, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function(t, e) {
                var i, n;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = t._startTime; i && i._startTime > n;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, r._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, r.render = function(t, e, i) {
                var n, a = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; a;) n = a._next, (a._active || t >= a._startTime && !a._paused) && (a._reversed ? a.render((a._dirty ? a.totalDuration() : a._totalDuration) - (t - a._startTime) * a._timeScale, e, i) : a.render((t - a._startTime) * a._timeScale, e, i)), a = n
            }, r.rawTime = function() {
                return s || o.wake(), this._totalTime
            };
            var D = v("TweenLite", function(e, i, n) {
                    if (O.call(this, i, n), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var a, r, o, s = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? H[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : H[l], (s || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                        for (this._targets = o = c(e), this._propLookup = [], this._siblings = [], a = 0; o.length > a; a++) r = o[a], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (o.splice(a--, 1), this._targets = o = o.concat(c(r))) : (this._siblings[a] = B(r, this, !1), 1 === l && this._siblings[a].length > 1 && U(r, this, null, 1, this._siblings[a])) : (r = o[a--] = D.selector(r), "string" == typeof r && o.splice(a + 1, 1)) : o.splice(a--, 1);
                    else this._propLookup = {}, this._siblings = B(e, this, !1), 1 === l && this._siblings.length > 1 && U(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render(-this._delay))
                }, !0),
                E = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                I = function(t, e) {
                    var i, n = {};
                    for (i in t) F[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!z[i] || z[i] && z[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            r = D.prototype = new O, r.constructor = D, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, D.version = "1.14.0", D.defaultEase = r._ease = new b(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = o, D.autoSleep = !0, D.lagSmoothing = function(t, e) {
                o.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var R = [],
                M = {},
                N = D._internals = {
                    isArray: p,
                    isSelector: E,
                    lazyTweens: R
                },
                z = D._plugins = {},
                $ = N.tweenLookup = {},
                j = 0,
                F = N.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1
                },
                H = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                W = O._rootFramesTimeline = new L,
                q = O._rootTimeline = new L,
                X = N.lazyRender = function() {
                    var t, e = R.length;
                    for (M = {}; --e > -1;) t = R[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    R.length = 0
                };
            q._startTime = o.time, W._startTime = o.frame, q._active = W._active = !0, setTimeout(X, 1), O._updateRoot = D.render = function() {
                var t, e, i;
                if (R.length && X(), q.render((o.time - q._startTime) * q._timeScale, !1, !1), W.render((o.frame - W._startTime) * W._timeScale, !1, !1), R.length && X(), !(o.frame % 120)) {
                    for (i in $) {
                        for (e = $[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete $[i]
                    }
                    if (i = q._first, (!i || i._paused) && D.autoSleep && !W._first && 1 === o._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || o.sleep()
                    }
                }
            }, o.addEventListener("tick", O._updateRoot);
            var B = function(t, e, i) {
                    var n, a, r = t._gsTweenID;
                    if ($[r || (t._gsTweenID = r = "t" + j++)] || ($[r] = {
                            target: t,
                            tweens: []
                        }), e && (n = $[r].tweens, n[a = n.length] = e, i))
                        for (; --a > -1;) n[a] === e && n.splice(a, 1);
                    return $[r].tweens
                },
                Y = function(t, e, i, n) {
                    var a = t.vars.onOverwrite;
                    a && a(t, e, i, n), a = D.onOverwrite, a && a(t, e, i, n)
                },
                U = function(t, e, i, n, a) {
                    var r, o, s, l;
                    if (1 === n || n >= 4) {
                        for (l = a.length, r = 0; l > r; r++)
                            if ((s = a[r]) !== e) s._gc || (s._enabled(!1, !1) && (o = !0), Y(s, e));
                            else if (5 === n) break;
                        return o
                    }
                    var d, c = e._startTime + h,
                        u = [],
                        p = 0,
                        f = 0 === e._duration;
                    for (r = a.length; --r > -1;)(s = a[r]) === e || s._gc || s._paused || (s._timeline !== e._timeline ? (d = d || V(e, 0, f), 0 === V(s, d, f) && (u[p++] = s)) : c >= s._startTime && s._startTime + s.totalDuration() / s._timeScale > c && ((f || !s._initted) && 2e-10 >= c - s._startTime || (u[p++] = s)));
                    for (r = p; --r > -1;) s = u[r], 2 === n && s._kill(i, t, e) && (o = !0), (2 !== n || !s._firstPT && s._initted) && (s._enabled(!1, !1) && (o = !0), 2 !== n && Y(s, e));
                    return o
                },
                V = function(t, e, i) {
                    for (var n = t._timeline, a = n._timeScale, r = t._startTime; n._timeline;) {
                        if (r += n._startTime, a *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return r /= a, r > e ? r - e : i && r === e || !t._initted && 2 * h > r - e ? h : (r += t.totalDuration() / t._timeScale / a) > e + h ? 0 : r - e - h
                };
            r._init = function() {
                var t, e, i, n, a, r = this.vars,
                    o = this._overwrittenProps,
                    s = this._duration,
                    l = !!r.immediateRender,
                    d = r.ease;
                if (r.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), a = {};
                    for (n in r.startAt) a[n] = r.startAt[n];
                    if (a.overwrite = !1, a.immediateRender = !0, a.lazy = l && r.lazy !== !1, a.startAt = a.delay = null, this._startAt = D.to(this.target, 0, a), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== s) return
                } else if (r.runBackwards && 0 !== s)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in r) F[n] && "autoCSS" !== n || (i[n] = r[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && r.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = d = d ? d instanceof b ? d : "function" == typeof d ? new b(d, r.easeParams) : _[d] || D.defaultEase : D.defaultEase, r.easeParams instanceof Array && d.config && (this._ease = d.config.apply(d, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, o);
                if (e && D._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = r.onUpdate, this._initted = !0
            }, r._initProps = function(e, i, n, a) {
                var r, o, s, l, d, h;
                if (null == e) return !1;
                M[e._gsTweenID] && X(), this.vars.css || e.style && e !== t && e.nodeType && z.css && this.vars.autoCSS !== !1 && I(this.vars, e);
                for (r in this.vars) {
                    if (h = this.vars[r], F[r]) h && (h instanceof Array || h.push && p(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[r] = h = this._swapSelfInParams(h, this));
                    else if (z[r] && (l = new z[r])._onInitTween(e, this.vars[r], this)) {
                        for (this._firstPT = d = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: r,
                                pg: !0,
                                pr: l._priority
                            }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (s = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[r] = d = {
                        _next: this._firstPT,
                        t: e,
                        p: r,
                        f: "function" == typeof e[r],
                        n: r,
                        pg: !1,
                        pr: 0
                    }, d.s = d.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), d.c = "string" == typeof h && "=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2)) : Number(h) - d.s || 0;
                    d && d._next && (d._next._prev = d)
                }
                return a && this._kill(a, e) ? this._initProps(e, i, n, a) : this._overwrite > 1 && this._firstPT && n.length > 1 && U(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, a)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (M[e._gsTweenID] = !0), s)
            }, r.render = function(t, e, i) {
                var n, a, r, o, s = this._time,
                    l = this._duration,
                    d = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, a = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > d || d === h) && d !== t && (i = !0, d > h && (a = "onReverseComplete")), this._rawPrevTime = o = !e || t || d === t ? t : h);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== s || 0 === l && d > 0 && d !== h) && (a = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (d >= 0 && (i = !0), this._rawPrevTime = o = !e || t || d === t ? t : h)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var c = t / l,
                        u = this._easeType,
                        p = this._easePower;
                    (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === u ? 1 - c : 2 === u ? c : .5 > t / l ? c / 2 : 1 - c / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== s || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = s, this._rawPrevTime = d, R.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== s && t >= 0 && (this._active = !0), 0 === s && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : a || (a = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || w))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== s || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || w)), a && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || w), 0 === l && this._rawPrevTime === h && o !== h && (this._rawPrevTime = 0))
                }
            }, r._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var n, a, r, o, s, l, d, h, c;
                if ((p(e) || E(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n]) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                s = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], a = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        s = this._propLookup, a = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (s) {
                        d = t || s, h = t !== a && "all" !== a && t !== s && ("object" != typeof t || !t._tempKill);
                        for (r in d)(o = s[r]) && (c || (c = []), c.push(r), o.pg && o.t._kill(d) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete s[r]), h && (a[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1), c && i && Y(this, i, e, c)
                    }
                }
                return l
            }, r.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -h, this.render(-this._delay)), this
            }, r._enabled = function(t, e) {
                if (s || o.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = B(n[i], this, !0);
                    else this._siblings = B(this.target, this, !0)
                }
                return O.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new D(t, e, n)
            }, D.delayedCall = function(t, e, i, n, a) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: n,
                    immediateRender: !1,
                    useFrames: a,
                    overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, n, a, r;
                if ((p(t) || E(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(D.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (r = n[i], a = i; --a > -1;) r === n[a] && n.splice(i, 1)
                } else
                    for (n = B(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = D.getTweensOf(t, e), a = n.length; --a > -1;) n[a]._kill(i, t)
            };
            var Q = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype
            }, !0);
            if (r = Q.prototype, Q.version = "1.10.1", Q.API = 2, r._firstPT = null, r._addTween = function(t, e, i, n, a, r) {
                    var o, s;
                    return null != n && (o = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = s = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: o,
                        f: "function" == typeof t[e],
                        n: a || e,
                        r: r
                    }, s._next && (s._next._prev = s), s) : void 0
                }, r.setRatio = function(t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, r._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, r._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, n, a, r, o, s = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; s;) {
                            for (o = s._next, n = a; n && n.pr > s.pr;) n = n._next;
                            (s._prev = n ? n._prev : r) ? s._prev._next = s: a = s, (s._next = n) ? n._prev = s : r = s, s = o
                        }
                        s = e._firstPT = a
                    }
                    for (; s;) s.pg && "function" == typeof s.t[t] && s.t[t]() && (i = !0), s = s._next;
                    return i
                }, Q.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === Q.API && (z[(new t[e])._propName] = t[e]);
                    return !0
                }, m.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        a = t.overwriteProps,
                        r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        o = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            Q.call(this, i, n), this._overwriteProps = a || []
                        }, t.global === !0),
                        s = o.prototype = new Q(i);
                    s.constructor = o, o.API = t.API;
                    for (e in r) "function" == typeof t[e] && (s[r[e]] = t[e]);
                    return o.version = t.version, Q.activate([o]), o
                }, n = t._gsQueue) {
                for (a = 0; n.length > a; a++) n[a]();
                for (r in f) f[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
            }
            s = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function() {
        var t = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            },
            e = [].slice;
        ! function(t, e) {
            return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(i) {
                return e(i, t)
            }) : e(t.jQuery, t)
        }(this, function(i, n) {
            var a, r, o, s, l, d, h, c, u, p, f, g, m, v, y, w;
            return a = i(n), c = t.call(n, "ontouchstart") >= 0, s = {
                horizontal: {},
                vertical: {}
            }, l = 1, h = {}, d = "waypoints-context-id", f = "resize.waypoints", g = "scroll.waypoints", m = 1, v = "waypoints-waypoint-ids", y = "waypoint", w = "waypoints", r = function() {
                function t(t) {
                    var e = this;
                    this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
                        x: t.scrollLeft(),
                        y: t.scrollTop()
                    }, this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    }, t.data(d, this.id), h[this.id] = this, t.bind(g, function() {
                        var t;
                        return e.didScroll || c ? void 0 : (e.didScroll = !0, t = function() {
                            return e.doScroll(), e.didScroll = !1
                        }, n.setTimeout(t, i[w].settings.scrollThrottle))
                    }), t.bind(f, function() {
                        var t;
                        return e.didResize ? void 0 : (e.didResize = !0, t = function() {
                            return i[w]("refresh"), e.didResize = !1
                        }, n.setTimeout(t, i[w].settings.resizeThrottle))
                    })
                }
                return t.prototype.doScroll = function() {
                    var t, e = this;
                    return t = {
                        horizontal: {
                            newScroll: this.$element.scrollLeft(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left"
                        },
                        vertical: {
                            newScroll: this.$element.scrollTop(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up"
                        }
                    }, !c || t.vertical.oldScroll && t.vertical.newScroll || i[w]("refresh"), i.each(t, function(t, n) {
                        var a, r, o;
                        return o = [], r = n.newScroll > n.oldScroll, a = r ? n.forward : n.backward, i.each(e.waypoints[t], function(t, e) {
                            var i, a;
                            return n.oldScroll < (i = e.offset) && i <= n.newScroll ? o.push(e) : n.newScroll < (a = e.offset) && a <= n.oldScroll ? o.push(e) : void 0
                        }), o.sort(function(t, e) {
                            return t.offset - e.offset
                        }), r || o.reverse(), i.each(o, function(t, e) {
                            return e.options.continuous || t === o.length - 1 ? e.trigger([a]) : void 0
                        })
                    }), this.oldScroll = {
                        x: t.horizontal.newScroll,
                        y: t.vertical.newScroll
                    }
                }, t.prototype.refresh = function() {
                    var t, e, n, a = this;
                    return n = i.isWindow(this.element), e = this.$element.offset(), this.doScroll(), t = {
                        horizontal: {
                            contextOffset: n ? 0 : e.left,
                            contextScroll: n ? 0 : this.oldScroll.x,
                            contextDimension: this.$element.width(),
                            oldScroll: this.oldScroll.x,
                            forward: "right",
                            backward: "left",
                            offsetProp: "left"
                        },
                        vertical: {
                            contextOffset: n ? 0 : e.top,
                            contextScroll: n ? 0 : this.oldScroll.y,
                            contextDimension: n ? i[w]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }, i.each(t, function(t, e) {
                        return i.each(a.waypoints[t], function(t, n) {
                            var a, r, o, s, l;
                            return a = n.options.offset, o = n.offset, r = i.isWindow(n.element) ? 0 : n.$element.offset()[e.offsetProp], i.isFunction(a) ? a = a.apply(n.element) : "string" == typeof a && (a = parseFloat(a), n.options.offset.indexOf("%") > -1 && (a = Math.ceil(e.contextDimension * a / 100))), n.offset = r - e.contextOffset + e.contextScroll - a, n.options.onlyOnScroll && null != o || !n.enabled ? void 0 : null !== o && o < (s = e.oldScroll) && s <= n.offset ? n.trigger([e.backward]) : null !== o && o > (l = e.oldScroll) && l >= n.offset ? n.trigger([e.forward]) : null === o && e.oldScroll >= n.offset ? n.trigger([e.forward]) : void 0
                        })
                    })
                }, t.prototype.checkEmpty = function() {
                    return i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([f, g].join(" ")), delete h[this.id]) : void 0
                }, t
            }(), o = function() {
                function t(t, e, n) {
                    var a, r;
                    n = i.extend({}, i.fn[y].defaults, n), "bottom-in-view" === n.offset && (n.offset = function() {
                        var t;
                        return t = i[w]("viewportHeight"), i.isWindow(e.element) || (t = e.$element.height()), t - i(this).outerHeight()
                    }), this.$element = t, this.element = t[0], this.axis = n.horizontal ? "horizontal" : "vertical", this.callback = n.handler, this.context = e, this.enabled = n.enabled, this.id = "waypoints" + m++, this.offset = null, this.options = n, e.waypoints[this.axis][this.id] = this, s[this.axis][this.id] = this, a = null != (r = t.data(v)) ? r : [], a.push(this.id), t.data(v, a)
                }
                return t.prototype.trigger = function(t) {
                    return this.enabled ? (null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0) : void 0
                }, t.prototype.disable = function() {
                    return this.enabled = !1
                }, t.prototype.enable = function() {
                    return this.context.refresh(), this.enabled = !0
                }, t.prototype.destroy = function() {
                    return delete s[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
                }, t.getWaypointsByElement = function(t) {
                    var e, n;
                    return (n = i(t).data(v)) ? (e = i.extend({}, s.horizontal, s.vertical), i.map(n, function(t) {
                        return e[t]
                    })) : []
                }, t
            }(), p = {
                init: function(t, e) {
                    var n;
                    return null == e && (e = {}), null == (n = e.handler) && (e.handler = t), this.each(function() {
                        var t, n, a, s;
                        return t = i(this), a = null != (s = e.context) ? s : i.fn[y].defaults.context, i.isWindow(a) || (a = t.closest(a)), a = i(a), n = h[a.data(d)], n || (n = new r(a)), new o(t, n, e)
                    }), i[w]("refresh"), this
                },
                disable: function() {
                    return p._invoke(this, "disable")
                },
                enable: function() {
                    return p._invoke(this, "enable")
                },
                destroy: function() {
                    return p._invoke(this, "destroy")
                },
                prev: function(t, e) {
                    return p._traverse.call(this, t, e, function(t, e, i) {
                        return e > 0 ? t.push(i[e - 1]) : void 0
                    })
                },
                next: function(t, e) {
                    return p._traverse.call(this, t, e, function(t, e, i) {
                        return e < i.length - 1 ? t.push(i[e + 1]) : void 0
                    })
                },
                _traverse: function(t, e, a) {
                    var r, o;
                    return null == t && (t = "vertical"), null == e && (e = n), o = u.aggregate(e), r = [], this.each(function() {
                        var e;
                        return e = i.inArray(this, o[t]), a(r, e, o[t])
                    }), this.pushStack(r)
                },
                _invoke: function(t, e) {
                    return t.each(function() {
                        var t;
                        return t = o.getWaypointsByElement(this), i.each(t, function(t, i) {
                            return i[e](), !0
                        })
                    }), this
                }
            }, i.fn[y] = function() {
                var t, n;
                return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], p[n] ? p[n].apply(this, t) : i.isFunction(n) ? p.init.apply(this, arguments) : i.isPlainObject(n) ? p.init.apply(this, [null, n]) : n ? i.error("The " + n + " method does not exist in jQuery Waypoints.") : i.error("jQuery Waypoints needs a callback function or handler option.")
            }, i.fn[y].defaults = {
                context: n,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            }, u = {
                refresh: function() {
                    return i.each(h, function(t, e) {
                        return e.refresh()
                    })
                },
                viewportHeight: function() {
                    var t;
                    return null != (t = n.innerHeight) ? t : a.height()
                },
                aggregate: function(t) {
                    var e, n, a;
                    return e = s, t && (e = null != (a = h[i(t).data(d)]) ? a.waypoints : void 0), e ? (n = {
                        horizontal: [],
                        vertical: []
                    }, i.each(n, function(t, a) {
                        return i.each(e[t], function(t, e) {
                            return a.push(e)
                        }), a.sort(function(t, e) {
                            return t.offset - e.offset
                        }), n[t] = i.map(a, function(t) {
                            return t.element
                        }), n[t] = i.unique(n[t])
                    }), n) : []
                },
                above: function(t) {
                    return null == t && (t = n), u._filter(t, "vertical", function(t, e) {
                        return e.offset <= t.oldScroll.y
                    })
                },
                below: function(t) {
                    return null == t && (t = n), u._filter(t, "vertical", function(t, e) {
                        return e.offset > t.oldScroll.y
                    })
                },
                left: function(t) {
                    return null == t && (t = n), u._filter(t, "horizontal", function(t, e) {
                        return e.offset <= t.oldScroll.x
                    })
                },
                right: function(t) {
                    return null == t && (t = n), u._filter(t, "horizontal", function(t, e) {
                        return e.offset > t.oldScroll.x
                    })
                },
                enable: function() {
                    return u._invoke("enable")
                },
                disable: function() {
                    return u._invoke("disable")
                },
                destroy: function() {
                    return u._invoke("destroy")
                },
                extendFn: function(t, e) {
                    return p[t] = e
                },
                _invoke: function(t) {
                    var e;
                    return e = i.extend({}, s.vertical, s.horizontal), i.each(e, function(e, i) {
                        return i[t](), !0
                    })
                },
                _filter: function(t, e, n) {
                    var a, r;
                    return (a = h[i(t).data(d)]) ? (r = [], i.each(a.waypoints[e], function(t, e) {
                        return n(a, e) ? r.push(e) : void 0
                    }), r.sort(function(t, e) {
                        return t.offset - e.offset
                    }), i.map(r, function(t) {
                        return t.element
                    })) : []
                }
            }, i[w] = function() {
                var t, i;
                return i = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], u[i] ? u[i].apply(null, t) : u.aggregate.call(null, i)
            }, i[w].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, a.load(function() {
                return i[w]("refresh")
            })
        })
    }.call(this),
    function(t) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
    }(function(t) {
        "use strict";

        function e(e) {
            return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = h), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = t.extend({}, t.fn.swipe.defaults, e), this.each(function() {
                var n = t(this),
                    a = n.data(O);
                a || (a = new i(this, e), n.data(O, a))
            })
        }

        function i(e, i) {
            function n(e) {
                if (!(dt() || t(e.target).closest(i.excludedElements, Bt).length > 0)) {
                    var n = e.originalEvent ? e.originalEvent : e;
                    if (!n.pointerType || "mouse" != n.pointerType || 0 != i.fallbackToMouseEvents) {
                        var a, r = n.touches,
                            o = r ? r[0] : n;
                        return Yt = _, r ? Ut = r.length : i.preventDefaultEvents !== !1 && e.preventDefault(), Mt = 0, Nt = null, zt = null, qt = null, $t = 0, jt = 0, Ft = 0, Ht = 1, Wt = 0, Xt = mt(), st(), ct(0, o), !r || Ut === i.fingers || i.fingers === w || q() ? (Qt = Ct(), 2 == Ut && (ct(1, r[1]), jt = Ft = wt(Vt[0].start, Vt[1].start)), (i.swipeStatus || i.pinchStatus) && (a = M(n, Yt))) : a = !1, a === !1 ? (Yt = k, M(n, Yt), a) : (i.hold && (ee = setTimeout(t.proxy(function() {
                            Bt.trigger("hold", [n.target]), i.hold && (a = i.hold.call(Bt, n, n.target))
                        }, this), i.longTapThreshold)), ht(!0), null)
                    }
                }
            }

            function A(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                if (Yt !== T && Yt !== k && !lt()) {
                    var n, a = e.touches,
                        r = a ? a[0] : e,
                        o = ut(r);
                    if (Zt = Ct(), a && (Ut = a.length), i.hold && clearTimeout(ee), Yt = x, 2 == Ut && (0 == jt ? (ct(1, a[1]), jt = Ft = wt(Vt[0].start, Vt[1].start)) : (ut(a[1]), Ft = wt(Vt[0].end, Vt[1].end), qt = _t(Vt[0].end, Vt[1].end)), Ht = bt(jt, Ft), Wt = Math.abs(jt - Ft)), Ut === i.fingers || i.fingers === w || !a || q()) {
                        if (Nt = kt(o.start, o.end), zt = kt(o.last, o.end), H(t, zt), Mt = xt(o.start, o.end), $t = yt(), ft(Nt, Mt), n = M(e, Yt), !i.triggerOnTouchEnd || i.triggerOnTouchLeave) {
                            var s = !0;
                            if (i.triggerOnTouchLeave) {
                                var l = St(this);
                                s = Pt(o.end, l)
                            }!i.triggerOnTouchEnd && s ? Yt = R(x) : i.triggerOnTouchLeave && !s && (Yt = R(T)), Yt != k && Yt != T || M(e, Yt)
                        }
                    } else Yt = k, M(e, Yt);
                    n === !1 && (Yt = k, M(e, Yt))
                }
            }

            function L(t) {
                var e = t.originalEvent ? t.originalEvent : t,
                    n = e.touches;
                if (n) {
                    if (n.length && !lt()) return ot(e), !0;
                    if (n.length && lt()) return !0
                }
                return lt() && (Ut = Jt), Zt = Ct(), $t = yt(), $() || !z() ? (Yt = k, M(e, Yt)) : i.triggerOnTouchEnd || i.triggerOnTouchEnd === !1 && Yt === x ? (i.preventDefaultEvents !== !1 && t.preventDefault(), Yt = T, M(e, Yt)) : !i.triggerOnTouchEnd && Z() ? (Yt = T, N(e, Yt, f)) : Yt === x && (Yt = k, M(e, Yt)), ht(!1), null
            }

            function D() {
                Ut = 0, Zt = 0, Qt = 0, jt = 0, Ft = 0, Ht = 1, st(), ht(!1)
            }

            function E(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                i.triggerOnTouchLeave && (Yt = R(T), M(e, Yt))
            }

            function I() {
                Bt.unbind(Lt, n), Bt.unbind(Rt, D), Bt.unbind(Dt, A), Bt.unbind(Et, L), It && Bt.unbind(It, E), ht(!1)
            }

            function R(t) {
                var e = t,
                    n = F(),
                    a = z(),
                    r = $();
                return !n || r ? e = k : !a || t != x || i.triggerOnTouchEnd && !i.triggerOnTouchLeave ? !a && t == T && i.triggerOnTouchLeave && (e = k) : e = T, e
            }

            function M(t, e) {
                var i, n = t.touches;
                return (U() || Y()) && (i = N(t, e, u)), (X() || q()) && i !== !1 && (i = N(t, e, p)), at() && i !== !1 ? i = N(t, e, g) : rt() && i !== !1 ? i = N(t, e, m) : nt() && i !== !1 && (i = N(t, e, f)), e === k && D(t), e === T && (n ? n.length || D(t) : D(t)), i
            }

            function N(e, n, h) {
                var c;
                if (h == u) {
                    if (Bt.trigger("swipeStatus", [n, Nt || null, Mt || 0, $t || 0, Ut, Vt, zt]), i.swipeStatus && (c = i.swipeStatus.call(Bt, e, n, Nt || null, Mt || 0, $t || 0, Ut, Vt, zt), c === !1)) return !1;
                    if (n == T && B()) {
                        if (clearTimeout(te), clearTimeout(ee), Bt.trigger("swipe", [Nt, Mt, $t, Ut, Vt, zt]), i.swipe && (c = i.swipe.call(Bt, e, Nt, Mt, $t, Ut, Vt, zt), c === !1)) return !1;
                        switch (Nt) {
                            case a:
                                Bt.trigger("swipeLeft", [Nt, Mt, $t, Ut, Vt, zt]), i.swipeLeft && (c = i.swipeLeft.call(Bt, e, Nt, Mt, $t, Ut, Vt, zt));
                                break;
                            case r:
                                Bt.trigger("swipeRight", [Nt, Mt, $t, Ut, Vt, zt]), i.swipeRight && (c = i.swipeRight.call(Bt, e, Nt, Mt, $t, Ut, Vt, zt));
                                break;
                            case o:
                                Bt.trigger("swipeUp", [Nt, Mt, $t, Ut, Vt, zt]), i.swipeUp && (c = i.swipeUp.call(Bt, e, Nt, Mt, $t, Ut, Vt, zt));
                                break;
                            case s:
                                Bt.trigger("swipeDown", [Nt, Mt, $t, Ut, Vt, zt]), i.swipeDown && (c = i.swipeDown.call(Bt, e, Nt, Mt, $t, Ut, Vt, zt))
                        }
                    }
                }
                if (h == p) {
                    if (Bt.trigger("pinchStatus", [n, qt || null, Wt || 0, $t || 0, Ut, Ht, Vt]), i.pinchStatus && (c = i.pinchStatus.call(Bt, e, n, qt || null, Wt || 0, $t || 0, Ut, Ht, Vt), c === !1)) return !1;
                    if (n == T && W()) switch (qt) {
                        case l:
                            Bt.trigger("pinchIn", [qt || null, Wt || 0, $t || 0, Ut, Ht, Vt]), i.pinchIn && (c = i.pinchIn.call(Bt, e, qt || null, Wt || 0, $t || 0, Ut, Ht, Vt));
                            break;
                        case d:
                            Bt.trigger("pinchOut", [qt || null, Wt || 0, $t || 0, Ut, Ht, Vt]), i.pinchOut && (c = i.pinchOut.call(Bt, e, qt || null, Wt || 0, $t || 0, Ut, Ht, Vt))
                    }
                }
                return h == f ? n !== k && n !== T || (clearTimeout(te), clearTimeout(ee), G() && !tt() ? (Kt = Ct(), te = setTimeout(t.proxy(function() {
                    Kt = null, Bt.trigger("tap", [e.target]), i.tap && (c = i.tap.call(Bt, e, e.target))
                }, this), i.doubleTapThreshold)) : (Kt = null, Bt.trigger("tap", [e.target]), i.tap && (c = i.tap.call(Bt, e, e.target)))) : h == g ? n !== k && n !== T || (clearTimeout(te), clearTimeout(ee), Kt = null, Bt.trigger("doubletap", [e.target]), i.doubleTap && (c = i.doubleTap.call(Bt, e, e.target))) : h == m && (n !== k && n !== T || (clearTimeout(te), Kt = null, Bt.trigger("longtap", [e.target]), i.longTap && (c = i.longTap.call(Bt, e, e.target)))), c
            }

            function z() {
                var t = !0;
                return null !== i.threshold && (t = Mt >= i.threshold), t
            }

            function $() {
                var t = !1;
                return null !== i.cancelThreshold && null !== Nt && (t = gt(Nt) - Mt >= i.cancelThreshold), t
            }

            function j() {
                return null !== i.pinchThreshold ? Wt >= i.pinchThreshold : !0
            }

            function F() {
                var t;
                return t = i.maxTimeThreshold ? !($t >= i.maxTimeThreshold) : !0
            }

            function H(t, e) {
                if (i.preventDefaultEvents !== !1)
                    if (i.allowPageScroll === h) t.preventDefault();
                    else {
                        var n = i.allowPageScroll === c;
                        switch (e) {
                            case a:
                                (i.swipeLeft && n || !n && i.allowPageScroll != v) && t.preventDefault();
                                break;
                            case r:
                                (i.swipeRight && n || !n && i.allowPageScroll != v) && t.preventDefault();
                                break;
                            case o:
                                (i.swipeUp && n || !n && i.allowPageScroll != y) && t.preventDefault();
                                break;
                            case s:
                                (i.swipeDown && n || !n && i.allowPageScroll != y) && t.preventDefault();
                                break;
                            case h:
                        }
                    }
            }

            function W() {
                var t = V(),
                    e = Q(),
                    i = j();
                return t && e && i
            }

            function q() {
                return !!(i.pinchStatus || i.pinchIn || i.pinchOut)
            }

            function X() {
                return !(!W() || !q())
            }

            function B() {
                var t = F(),
                    e = z(),
                    i = V(),
                    n = Q(),
                    a = $(),
                    r = !a && n && i && e && t;
                return r
            }

            function Y() {
                return !!(i.swipe || i.swipeStatus || i.swipeLeft || i.swipeRight || i.swipeUp || i.swipeDown)
            }

            function U() {
                return !(!B() || !Y())
            }

            function V() {
                return Ut === i.fingers || i.fingers === w || !C
            }

            function Q() {
                return 0 !== Vt[0].end.x
            }

            function Z() {
                return !!i.tap
            }

            function G() {
                return !!i.doubleTap
            }

            function J() {
                return !!i.longTap
            }

            function K() {
                if (null == Kt) return !1;
                var t = Ct();
                return G() && t - Kt <= i.doubleTapThreshold
            }

            function tt() {
                return K()
            }

            function et() {
                return (1 === Ut || !C) && (isNaN(Mt) || Mt < i.threshold)
            }

            function it() {
                return $t > i.longTapThreshold && b > Mt
            }

            function nt() {
                return !(!et() || !Z())
            }

            function at() {
                return !(!K() || !G())
            }

            function rt() {
                return !(!it() || !J())
            }

            function ot(t) {
                Gt = Ct(), Jt = t.touches.length + 1
            }

            function st() {
                Gt = 0, Jt = 0
            }

            function lt() {
                var t = !1;
                if (Gt) {
                    var e = Ct() - Gt;
                    e <= i.fingerReleaseThreshold && (t = !0)
                }
                return t
            }

            function dt() {
                return !(Bt.data(O + "_intouch") !== !0)
            }

            function ht(t) {
                Bt && (t === !0 ? (Bt.bind(Dt, A), Bt.bind(Et, L), It && Bt.bind(It, E)) : (Bt.unbind(Dt, A, !1), Bt.unbind(Et, L, !1), It && Bt.unbind(It, E, !1)), Bt.data(O + "_intouch", t === !0))
            }

            function ct(t, e) {
                var i = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    last: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                };
                return i.start.x = i.last.x = i.end.x = e.pageX || e.clientX, i.start.y = i.last.y = i.end.y = e.pageY || e.clientY, Vt[t] = i, i
            }

            function ut(t) {
                var e = void 0 !== t.identifier ? t.identifier : 0,
                    i = pt(e);
                return null === i && (i = ct(e, t)), i.last.x = i.end.x, i.last.y = i.end.y, i.end.x = t.pageX || t.clientX, i.end.y = t.pageY || t.clientY, i
            }

            function pt(t) {
                return Vt[t] || null
            }

            function ft(t, e) {
                t != h && (e = Math.max(e, gt(t)), Xt[t].distance = e)
            }

            function gt(t) {
                return Xt[t] ? Xt[t].distance : void 0
            }

            function mt() {
                var t = {};
                return t[a] = vt(a), t[r] = vt(r), t[o] = vt(o), t[s] = vt(s), t
            }

            function vt(t) {
                return {
                    direction: t,
                    distance: 0
                }
            }

            function yt() {
                return Zt - Qt
            }

            function wt(t, e) {
                var i = Math.abs(t.x - e.x),
                    n = Math.abs(t.y - e.y);
                return Math.round(Math.sqrt(i * i + n * n))
            }

            function bt(t, e) {
                var i = e / t * 1;
                return i.toFixed(2)
            }

            function _t() {
                return 1 > Ht ? d : l
            }

            function xt(t, e) {
                return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)))
            }

            function Tt(t, e) {
                var i = t.x - e.x,
                    n = e.y - t.y,
                    a = Math.atan2(n, i),
                    r = Math.round(180 * a / Math.PI);
                return 0 > r && (r = 360 - Math.abs(r)), r
            }

            function kt(t, e) {
                if (Ot(t, e)) return h;
                var i = Tt(t, e);
                return 45 >= i && i >= 0 ? a : 360 >= i && i >= 315 ? a : i >= 135 && 225 >= i ? r : i > 45 && 135 > i ? s : o
            }

            function Ct() {
                var t = new Date;
                return t.getTime()
            }

            function St(e) {
                e = t(e);
                var i = e.offset(),
                    n = {
                        left: i.left,
                        right: i.left + e.outerWidth(),
                        top: i.top,
                        bottom: i.top + e.outerHeight()
                    };
                return n
            }

            function Pt(t, e) {
                return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom
            }

            function Ot(t, e) {
                return t.x == e.x && t.y == e.y
            }
            var i = t.extend({}, i),
                At = C || P || !i.fallbackToMouseEvents,
                Lt = At ? P ? S ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                Dt = At ? P ? S ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                Et = At ? P ? S ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                It = At ? P ? "mouseleave" : null : "mouseleave",
                Rt = P ? S ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                Mt = 0,
                Nt = null,
                zt = null,
                $t = 0,
                jt = 0,
                Ft = 0,
                Ht = 1,
                Wt = 0,
                qt = 0,
                Xt = null,
                Bt = t(e),
                Yt = "start",
                Ut = 0,
                Vt = {},
                Qt = 0,
                Zt = 0,
                Gt = 0,
                Jt = 0,
                Kt = 0,
                te = null,
                ee = null;
            try {
                Bt.bind(Lt, n), Bt.bind(Rt, D)
            } catch (ie) {
                t.error("events not supported " + Lt + "," + Rt + " on jQuery.swipe")
            }
            this.enable = function() {
                return this.disable(), Bt.bind(Lt, n), Bt.bind(Rt, D), Bt
            }, this.disable = function() {
                return I(), Bt
            }, this.destroy = function() {
                I(), Bt.data(O, null), Bt = null
            }, this.option = function(e, n) {
                if ("object" == typeof e) i = t.extend(i, e);
                else if (void 0 !== i[e]) {
                    if (void 0 === n) return i[e];
                    i[e] = n
                } else {
                    if (!e) return i;
                    t.error("Option " + e + " does not exist on jQuery.swipe.options")
                }
                return null
            }
        }
        var n = "1.6.18",
            a = "left",
            r = "right",
            o = "up",
            s = "down",
            l = "in",
            d = "out",
            h = "none",
            c = "auto",
            u = "swipe",
            p = "pinch",
            f = "tap",
            g = "doubletap",
            m = "longtap",
            v = "horizontal",
            y = "vertical",
            w = "all",
            b = 10,
            _ = "start",
            x = "move",
            T = "end",
            k = "cancel",
            C = "ontouchstart" in window,
            S = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !C,
            P = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !C,
            O = "TouchSwipe",
            A = {
                fingers: 1,
                threshold: 75,
                cancelThreshold: null,
                pinchThreshold: 20,
                maxTimeThreshold: null,
                fingerReleaseThreshold: 250,
                longTapThreshold: 500,
                doubleTapThreshold: 200,
                swipe: null,
                swipeLeft: null,
                swipeRight: null,
                swipeUp: null,
                swipeDown: null,
                swipeStatus: null,
                pinchIn: null,
                pinchOut: null,
                pinchStatus: null,
                click: null,
                tap: null,
                doubleTap: null,
                longTap: null,
                hold: null,
                triggerOnTouchEnd: !0,
                triggerOnTouchLeave: !1,
                allowPageScroll: "auto",
                fallbackToMouseEvents: !0,
                excludedElements: ".noSwipe",
                preventDefaultEvents: !0
            };
        t.fn.swipe = function(i) {
            var n = t(this),
                a = n.data(O);
            if (a && "string" == typeof i) {
                if (a[i]) return a[i].apply(a, Array.prototype.slice.call(arguments, 1));
                t.error("Method " + i + " does not exist on jQuery.swipe")
            } else if (a && "object" == typeof i) a.option.apply(a, arguments);
            else if (!(a || "object" != typeof i && i)) return e.apply(this, arguments);
            return n
        }, t.fn.swipe.version = n, t.fn.swipe.defaults = A, t.fn.swipe.phases = {
            PHASE_START: _,
            PHASE_MOVE: x,
            PHASE_END: T,
            PHASE_CANCEL: k
        }, t.fn.swipe.directions = {
            LEFT: a,
            RIGHT: r,
            UP: o,
            DOWN: s,
            IN: l,
            OUT: d
        }, t.fn.swipe.pageScroll = {
            NONE: h,
            HORIZONTAL: v,
            VERTICAL: y,
            AUTO: c
        }, t.fn.swipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            FOUR: 4,
            FIVE: 5,
            ALL: w
        }
    });
var punchgs = window.GreenSockGlobals;
! function(t, e) {
    function i() {
        var t = !1;
        return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (t = !0) : t = !1, t
    }

    function n(n, l) {
        if (n == e) return !1;
        if (n.data("aimg") != e && ("enabled" == n.data("aie8") && s(8) || "enabled" == n.data("amobile") && Y()) && n.html('<img class="tp-slider-alternative-image" src="' + n.data("aimg") + '">'), "preview1" != l.navigationStyle && "preview3" != l.navigationStyle && "preview4" != l.navigationStyle || (l.soloArrowLeftHalign = "left", l.soloArrowLeftValign = "center", l.soloArrowLeftHOffset = 0, l.soloArrowLeftVOffset = 0, l.soloArrowRightHalign = "right", l.soloArrowRightValign = "center", l.soloArrowRightHOffset = 0, l.soloArrowRightVOffset = 0, l.navigationArrows = "solo"), "on" == l.simplifyAll && (s(8) || i()) && (n.find(".tp-caption").each(function() {
                var e = t(this);
                e.removeClass("customin").removeClass("customout").addClass("fadein").addClass("fadeout"), e.data("splitin", ""), e.data("speed", 400)
            }), n.find(">ul>li").each(function() {
                var e = t(this);
                e.data("transition", "fade"), e.data("masterspeed", 500), e.data("slotamount", 1);
                var i = e.find(">img").first();
                i.data("kenburns", "off")
            })), l.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), "on" != l.fullWidth && "on" != l.fullScreen && (l.autoHeight = "off"), "on" == l.fullScreen && (l.autoHeight = "on"), "on" != l.fullWidth && "on" != l.fullScreen && (forceFulWidth = "off"), "on" == l.fullWidth && "off" == l.autoHeight && n.css({
                maxHeight: l.startheight + "px"
            }), Y() && "on" == l.hideThumbsOnMobile && "thumb" == l.navigationType && (l.navigationType = "none"), Y() && "on" == l.hideBulletsOnMobile && "bullet" == l.navigationType && (l.navigationType = "none"), Y() && "on" == l.hideBulletsOnMobile && "both" == l.navigationType && (l.navigationType = "none"), Y() && "on" == l.hideArrowsOnMobile && (l.navigationArrows = "none"), "on" == l.forceFullWidth && 0 == n.closest(".forcefullwidth_wrapper_tp_banner").length) {
            var f = n.parent().offset().left,
                g = n.parent().css("marginBottom"),
                m = n.parent().css("marginTop");
            g == e && (g = 0), m == e && (m = 0), n.parent().wrap('<div style="position:relative;width:100%;height:auto;margin-top:' + m + ";margin-bottom:" + g + '" class="forcefullwidth_wrapper_tp_banner"></div>'), n.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + n.height() + 'px"></div>'), n.css({
                backgroundColor: n.parent().css("backgroundColor"),
                backgroundImage: n.parent().css("backgroundImage")
            }), n.parent().css({
                left: 0 - f + "px",
                position: "absolute",
                width: t(window).width()
            }), l.width = t(window).width()
        }
        try {
            l.hideThumbsUnderResolution > t(window).width() && 0 != l.hideThumbsUnderResolution ? n.parent().find(".tp-bullets.tp-thumbs").css({
                display: "none"
            }) : n.parent().find(".tp-bullets.tp-thumbs").css({
                display: "block"
            })
        } catch (y) {}
        if (!n.hasClass("revslider-initialised")) {
            n.addClass("revslider-initialised"), n.attr("id") == e && n.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), l.firefox13 = !1, l.ie = !t.support.opacity, l.ie9 = 9 == document.documentMode, l.origcd = l.delay;
            var w = t.fn.jquery.split("."),
                b = parseFloat(w[0]),
                _ = parseFloat(w[1]);
            parseFloat(w[2] || "0");
            1 == b && 7 > _ && n.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + w + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), b > 1 && (l.ie = !1), t.support.transition || (t.fn.transition = t.fn.animate), n.find(".caption").each(function() {
                t(this).addClass("tp-caption")
            }), Y() && n.find(".tp-caption").each(function() {
                var e = t(this);
                1 != e.data("autoplayonlyfirsttime") && "true" != e.data("autoplayonlyfirsttime") || e.data("autoplayonlyfirsttime", "false"), 1 != e.data("autoplay") && "true" != e.data("autoplay") || e.data("autoplay", !1)
            });
            var x = 0,
                T = 0,
                C = "http";
            if ("https:" === location.protocol && (C = "https"), n.find(".tp-caption").each(function(i) {
                    try {
                        if ((t(this).data("ytid") != e || t(this).find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && 0 == x) {
                            x = 1;
                            var n = document.createElement("script"),
                                a = "https";
                            n.src = a + "://www.youtube.com/iframe_api";
                            var r = document.getElementsByTagName("script")[0],
                                o = !0;
                            t("head").find("*").each(function() {
                                t(this).attr("src") == a + "://www.youtube.com/iframe_api" && (o = !1)
                            }), o && r.parentNode.insertBefore(n, r)
                        }
                    } catch (s) {}
                    try {
                        if ((t(this).data("vimeoid") != e || t(this).find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && 0 == T) {
                            T = 1;
                            var l = document.createElement("script");
                            l.src = C + "://a.vimeocdn.com/js/froogaloop2.min.js";
                            var r = document.getElementsByTagName("script")[0],
                                o = !0;
                            t("head").find("*").each(function() {
                                t(this).attr("src") == C + "://a.vimeocdn.com/js/froogaloop2.min.js" && (o = !1)
                            }), o && r.parentNode.insertBefore(l, r)
                        }
                    } catch (s) {}
                    try {
                        t(this).data("videomp4") != e || t(this).data("videowebm") != e
                    } catch (s) {}
                }), n.find(".tp-caption video").each(function(e) {
                    t(this).removeClass("video-js").removeClass("vjs-default-skin"), t(this).attr("preload", ""), t(this).css({
                        display: "none"
                    })
                }), n.find(">ul:first-child >li").each(function() {
                    var e = t(this);
                    e.data("origindex", e.index())
                }), "on" == l.shuffle) {
                var S = new Object,
                    P = n.find(">ul:first-child >li:first-child");
                S.fstransition = P.data("fstransition"), S.fsmasterspeed = P.data("fsmasterspeed"), S.fsslotamount = P.data("fsslotamount");
                for (var O = 0; O < n.find(">ul:first-child >li").length; O++) {
                    var A = Math.round(Math.random() * n.find(">ul:first-child >li").length);
                    n.find(">ul:first-child >li:eq(" + A + ")").prependTo(n.find(">ul:first-child"))
                }
                var L = n.find(">ul:first-child >li:first-child");
                L.data("fstransition", S.fstransition), L.data("fsmasterspeed", S.fsmasterspeed), L.data("fsslotamount", S.fsslotamount)
            }
            l.slots = 4, l.act = -1, l.next = 0, l.startWithSlide != e && (l.next = l.startWithSlide);
            var D = r("#")[0];
            if (D.length < 9 && D.split("slide").length > 1) {
                var E = parseInt(D.split("slide")[1], 0);
                1 > E && (E = 1), E > n.find(">ul:first >li").length && (E = n.find(">ul:first >li").length), l.next = E - 1
            }
            l.firststart = 1, l.navigationHOffset == e && (l.navOffsetHorizontal = 0), l.navigationVOffset == e && (l.navOffsetVertical = 0), n.append('<div class="tp-loader ' + l.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 == n.find(".tp-bannertimer").length && n.append('<div class="tp-bannertimer" style="visibility:hidden"></div>');
            var I = n.find(".tp-bannertimer");
            if (I.length > 0 && I.css({
                    width: "0%"
                }), n.addClass("tp-simpleresponsive"), l.container = n, l.slideamount = n.find(">ul:first >li").length, 0 == n.height() && n.height(l.startheight), l.startwidth != e && 0 != l.startwidth || (l.startwidth = n.width()), l.startheight != e && 0 != l.startheight || (l.startheight = n.height()), l.width = n.width(), l.height = n.height(), l.bw = l.startwidth / n.width(), l.bh = l.startheight / n.height(), l.width != l.startwidth && (l.height = Math.round(l.startheight * (l.width / l.startwidth)), n.height(l.height)), 0 != l.shadow) {
                n.parent().append('<div class="tp-bannershadow tp-shadow' + l.shadow + '"></div>');
                var f = 0;
                "on" == l.forceFullWidth && (f = 0 - l.container.parent().offset().left), n.parent().find(".tp-bannershadow").css({
                    width: l.width,
                    left: f
                })
            }
            n.find("ul").css({
                display: "none"
            });
            n.find("ul").css({
                display: "block"
            }), v(n, l), "off" != l.parallax && J(n, l), l.slideamount > 1 && d(n, l), l.slideamount > 1 && "thumb" == l.navigationType && tt(n, l), l.slideamount > 1 && h(n, l), "on" == l.keyboardNavigation && c(n, l), u(n, l), l.hideThumbs > 0 && p(n, l), setTimeout(function() {
                k(n, l)
            }, l.startDelay), l.startDelay = 0, l.slideamount > 1 && B(n, l), setTimeout(function() {
                n.trigger("revolution.slide.onloaded")
            }, 500), t("body").data("rs-fullScreenMode", !1), t(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
                t("body").data("rs-fullScreenMode", !t("body").data("rs-fullScreenMode")), t("body").data("rs-fullScreenMode") && setTimeout(function() {
                    t(window).trigger("resize")
                }, 200)
            });
            var R = "resize.revslider-" + n.attr("id");
            t(window).on(R, function() {
                if (n == e) return !1;
                if (0 != t("body").find(n) && "on" == l.forceFullWidth) {
                    var i = l.container.closest(".forcefullwidth_wrapper_tp_banner").offset().left;
                    l.container.parent().css({
                        left: 0 - i + "px",
                        width: t(window).width()
                    })
                }(n.outerWidth(!0) != l.width || n.is(":hidden")) && o(n, l)
            });
            try {
                0 != l.hideThumbsUnderResoluition && "thumb" == l.navigationType && (l.hideThumbsUnderResoluition > t(window).width() ? t(".tp-bullets").css({
                    display: "none"
                }) : t(".tp-bullets").css({
                    display: "block"
                }))
            } catch (y) {}
            n.find(".tp-scrollbelowslider").on("click", function() {
                var e = 0;
                try {
                    e = t("body").find(l.fullScreenOffsetContainer).height()
                } catch (i) {}
                try {
                    e -= parseInt(t(this).data("scrolloffset"), 0)
                } catch (i) {}
                t("body,html").animate({
                    scrollTop: n.offset().top + n.find(">ul >li").height() - e + "px"
                }, {
                    duration: 400
                })
            });
            var M = n.parent();
            t(window).width() < l.hideSliderAtLimit && (n.trigger("stoptimer"), "none" != M.css("display") && M.data("olddisplay", M.css("display")), M.css({
                display: "none"
            })), a(n, l)
        }
    }
    t.fn.extend({
        revolution: function(i) {
            var a = {
                delay: 9e3,
                startheight: 500,
                startwidth: 960,
                fullScreenAlignForce: "off",
                autoHeight: "off",
                hideTimerBar: "off",
                hideThumbs: 200,
                hideNavDelayOnMobile: 1500,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 3,
                navigationType: "bullet",
                navigationArrows: "solo",
                navigationInGrid: "off",
                hideThumbsOnMobile: "off",
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResoluition: 0,
                navigationStyle: "round",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                keyboardNavigation: "on",
                touchenabled: "on",
                onHoverStop: "on",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "off",
                minFullScreenHeight: 0,
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                dottedOverlay: "none",
                forceFullWidth: "off",
                spinner: "spinner0",
                swipe_treshold: 75,
                swipe_min_touches: 1,
                drag_block_vertical: !1,
                isJoomla: !1,
                parallax: "off",
                parallaxLevels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                parallaxBgFreeze: "off",
                parallaxOpacity: "on",
                parallaxDisableOnMobile: "off",
                panZoomDisableOnMobile: "off",
                simplifyAll: "on",
                minHeight: 0,
                nextSlideOnWindowFocus: "off",
                startDelay: 0
            };
            return i = t.extend({}, a, i), this.each(function() {
                if (1 == window.tplogs) try {
                    console.groupCollapsed("Slider Revolution 4.6.3 Initialisation on " + t(this).attr("id")), console.groupCollapsed("Used Options:"), console.info(i), console.groupEnd(), console.groupCollapsed("Tween Engine:")
                } catch (a) {}
                if (punchgs.TweenLite == e) {
                    if (1 == window.tplogs) try {
                        console.error("GreenSock Engine Does not Exist!")
                    } catch (a) {}
                    return !1
                }
                if (punchgs.force3D = !0, 1 == window.tplogs) try {
                    console.info("GreenSock Engine Version in Slider Revolution:" + punchgs.TweenLite.version)
                } catch (a) {}
                if ("on" == i.simplifyAll || (punchgs.TweenLite.lagSmoothing(1e3, 16), punchgs.force3D = "true"), 1 == window.tplogs) try {
                    console.groupEnd(), console.groupEnd()
                } catch (a) {}
                n(t(this), i)
            })
        },
        revscroll: function(i) {
            return this.each(function() {
                var n = t(this);
                n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0 && t("body,html").animate({
                    scrollTop: n.offset().top + n.find(">ul >li").height() - i + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function(i) {
            return this.each(function() {
                var i = t(this);
                if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                    var n = i.parent().find(".tp-bannertimer"),
                        a = n.data("opt");
                    o(i, a)
                }
            })
        },
        revkill: function(i) {
            var n = this,
                a = t(this);
            if (a != e && a.length > 0 && t("body").find("#" + a.attr("id")).length > 0) {
                a.data("conthover", 1), a.data("conthover-changed", 1), a.trigger("revolution.slide.onpause");
                var r = a.parent().find(".tp-bannertimer"),
                    o = r.data("opt");
                o.bannertimeronpause = !0, a.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(a.find("*"), !1), punchgs.TweenLite.killTweensOf(a, !1), a.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                var s = "resize.revslider-" + a.attr("id");
                t(window).off(s), a.find("*").each(function() {
                    var i = t(this);
                    i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), i.off("on, hover, mouseenter,mouseleave,mouseover, resize"), i.data("mySplitText", null), i.data("ctl", null), i.data("tween") != e && i.data("tween").kill(), i.data("kenburn") != e && i.data("kenburn").kill(), i.remove(), i.empty(), i = null
                }), punchgs.TweenLite.killTweensOf(a.find("*"), !1), punchgs.TweenLite.killTweensOf(a, !1), r.remove();
                try {
                    a.closest(".forcefullwidth_wrapper_tp_banner").remove()
                } catch (l) {}
                try {
                    a.closest(".rev_slider_wrapper").remove()
                } catch (l) {}
                try {
                    a.remove()
                } catch (l) {}
                return a.empty(), a.html(), a = null, o = null, delete n.container, delete n.opt, !0
            }
            return !1
        },
        revpause: function(i) {
            return this.each(function() {
                var i = t(this);
                if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                    i.data("conthover", 1), i.data("conthover-changed", 1), i.trigger("revolution.slide.onpause");
                    var n = i.parent().find(".tp-bannertimer"),
                        a = n.data("opt");
                    a.bannertimeronpause = !0, i.trigger("stoptimer")
                }
            })
        },
        revresume: function(i) {
            return this.each(function() {
                var i = t(this);
                if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                    i.data("conthover", 0), i.data("conthover-changed", 1), i.trigger("revolution.slide.onresume");
                    var n = i.parent().find(".tp-bannertimer"),
                        a = n.data("opt");
                    a.bannertimeronpause = !1, i.trigger("starttimer")
                }
            })
        },
        revnext: function(i) {
            return this.each(function() {
                var i = t(this);
                i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0 && i.parent().find(".tp-rightarrow").click()
            })
        },
        revprev: function(i) {
            return this.each(function() {
                var i = t(this);
                i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0 && i.parent().find(".tp-leftarrow").click()
            })
        },
        revmaxslide: function(e) {
            return t(this).find(">ul:first-child >li").length
        },
        revcurrentslide: function(i) {
            var n = t(this);
            if (n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0) {
                var a = n.parent().find(".tp-bannertimer"),
                    r = a.data("opt");
                return r.act
            }
        },
        revlastslide: function(i) {
            var n = t(this);
            if (n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0) {
                var a = n.parent().find(".tp-bannertimer"),
                    r = a.data("opt");
                return r.lastslide
            }
        },
        revshowslide: function(i) {
            return this.each(function() {
                var n = t(this);
                n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0 && (n.data("showus", i), n.parent().find(".tp-rightarrow").click())
            })
        }
    });
    var a = (function() {
            var t, e, i = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
            };
            for (t in i)
                if (t in document) {
                    e = i[t];
                    break
                }
            return function(i) {
                return i && document.addEventListener(e, i), !document[t]
            }
        }(), function(i, n) {
            var a = document.documentMode === e,
                r = window.chrome;
            a && !r ? t(window).on("focusin", function() {
                return i == e ? !1 : void setTimeout(function() {
                    "on" == n.nextSlideOnWindowFocus && i.revnext(), i.revredraw()
                }, 300)
            }).on("focusout", function() {}) : window.addEventListener ? (window.addEventListener("focus", function(t) {
                return i == e ? !1 : void setTimeout(function() {
                    "on" == n.nextSlideOnWindowFocus && i.revnext(), i.revredraw()
                }, 300)
            }, !1), window.addEventListener("blur", function(t) {}, !1)) : (window.attachEvent("focus", function(t) {
                setTimeout(function() {
                    return i == e ? !1 : ("on" == n.nextSlideOnWindowFocus && i.revnext(), void i.revredraw())
                }, 300)
            }), window.attachEvent("blur", function(t) {}))
        }),
        r = function(t) {
            for (var e, i = [], n = window.location.href.slice(window.location.href.indexOf(t) + 1).split("_"), a = 0; a < n.length; a++) n[a] = n[a].replace("%3D", "="), e = n[a].split("="), i.push(e[0]), i[e[0]] = e[1];
            return i
        },
        o = function(i, n) {
            if (i == e) return !1;
            try {
                0 != n.hideThumbsUnderResoluition && "thumb" == n.navigationType && (n.hideThumbsUnderResoluition > t(window).width() ? t(".tp-bullets").css({
                    display: "none"
                }) : t(".tp-bullets").css({
                    display: "block"
                }))
            } catch (a) {}
            i.find(".defaultimg").each(function(e) {
                m(t(this), n)
            });
            var r = i.parent();
            t(window).width() < n.hideSliderAtLimit ? (i.trigger("stoptimer"), "none" != r.css("display") && r.data("olddisplay", r.css("display")), r.css({
                display: "none"
            })) : i.is(":hidden") && (r.data("olddisplay") != e && "undefined" != r.data("olddisplay") && "none" != r.data("olddisplay") ? r.css({
                display: r.data("olddisplay")
            }) : r.css({
                display: "block"
            }), i.trigger("restarttimer"), setTimeout(function() {
                o(i, n)
            }, 150));
            var s = 0;
            "on" == n.forceFullWidth && (s = 0 - n.container.parent().offset().left);
            try {
                i.parent().find(".tp-bannershadow").css({
                    width: n.width,
                    left: s
                })
            } catch (a) {}
            var l = i.find(">ul >li:eq(" + n.act + ") .slotholder"),
                d = i.find(">ul >li:eq(" + n.next + ") .slotholder");
            b(i, n, i), punchgs.TweenLite.set(d.find(".defaultimg"), {
                opacity: 0
            }), l.find(".defaultimg").css({
                opacity: 1
            }), d.find(".defaultimg").each(function() {
                var a = t(this);
                "on" == n.panZoomDisableOnMobile || a.data("kenburn") != e && (a.data("kenburn").restart(), V(i, n, !0))
            });
            var h = i.find(">ul >li:eq(" + n.next + ")"),
                c = i.parent().find(".tparrows");
            c.hasClass("preview2") && c.css({
                width: parseInt(c.css("minWidth"), 0)
            }), N(h, n, !0), f(i, n)
        },
        s = function(e, i) {
            var n = t('<div style="display:none;"/>').appendTo(t("body"));
            n.html("<!--[if " + (i || "") + " IE " + (e || "") + "]><a>&nbsp;</a><![endif]-->");
            var a = n.find("a").length;
            return n.remove(), a
        },
        l = function(t, e) {
            t.next == e.find(">ul >li").length - 1 && (t.looptogo = t.looptogo - 1, t.looptogo <= 0 && (t.stopLoop = "on")), k(e, t)
        },
        d = function(e, i) {
            var n = "hidebullets";
            0 == i.hideThumbs && (n = ""), "bullet" != i.navigationType && "both" != i.navigationType || e.parent().append('<div class="tp-bullets ' + n + " simplebullets " + i.navigationStyle + '"></div>');
            var a = e.parent().find(".tp-bullets");
            e.find(">ul:first >li").each(function(t) {
                e.find(">ul:first >li:eq(" + t + ") img:first").attr("src");
                a.append('<div class="bullet"></div>');
                a.find(".bullet:first")
            }), a.find(".bullet").each(function(n) {
                var a = t(this);
                n == i.slideamount - 1 && a.addClass("last"), 0 == n && a.addClass("first"), a.click(function() {
                    var t = !1,
                        n = a.index();
                    "withbullet" != i.navigationArrows && "nexttobullets" != i.navigationArrows || (n = a.index() - 1), n == i.act && (t = !0), 0 != i.transition || t || (i.next = n, l(i, e))
                })
            }), a.append('<div class="tpclear"></div>'), f(e, i)
        },
        h = function(t, i) {
            function n(e) {
                t.parent().append('<div style="' + a + '" class="tp-' + e + "arrow " + r + " tparrows " + o + '"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>')
            }
            var a = (t.find(".tp-bullets"), ""),
                r = "hidearrows",
                o = i.navigationStyle;
            0 == i.hideThumbs && (r = ""), "none" == i.navigationArrows && (a = "visibility:hidden;display:none"), i.soloArrowStyle = "default " + i.navigationStyle, "none" != i.navigationArrows && "nexttobullets" != i.navigationArrows && (o = i.soloArrowStyle), n("left"), n("right"), t.parent().find(".tp-rightarrow").click(function() {
                0 == i.transition && (t.data("showus") != e && -1 != t.data("showus") ? i.next = t.data("showus") - 1 : i.next = i.next + 1, t.data("showus", -1), i.next >= i.slideamount && (i.next = 0), i.next < 0 && (i.next = 0), i.act != i.next && l(i, t))
            }), t.parent().find(".tp-leftarrow").click(function() {
                0 == i.transition && (i.next = i.next - 1, i.leftarrowpressed = 1, i.next < 0 && (i.next = i.slideamount - 1), l(i, t))
            }), f(t, i)
        },
        c = function(i, n) {
            t(document).keydown(function(t) {
                0 == n.transition && 39 == t.keyCode && (i.data("showus") != e && -1 != i.data("showus") ? n.next = i.data("showus") - 1 : n.next = n.next + 1, i.data("showus", -1), n.next >= n.slideamount && (n.next = 0), n.next < 0 && (n.next = 0), n.act != n.next && l(n, i)), 0 == n.transition && 37 == t.keyCode && (n.next = n.next - 1, n.leftarrowpressed = 1, n.next < 0 && (n.next = n.slideamount - 1), l(n, i))
            }), f(i, n)
        },
        u = function(e, i) {
            var n = "vertical";
            "on" == i.touchenabled && (1 == i.drag_block_vertical && (n = "none"), e.swipe({
                allowPageScroll: n,
                fingers: i.swipe_min_touches,
                treshold: i.swipe_treshold,
                swipe: function(a, r, o, s, d, h) {
                    switch (r) {
                        case "left":
                            0 == i.transition && (i.next = i.next + 1, i.next == i.slideamount && (i.next = 0), l(i, e));
                            break;
                        case "right":
                            0 == i.transition && (i.next = i.next - 1, i.leftarrowpressed = 1, i.next < 0 && (i.next = i.slideamount - 1), l(i, e));
                            break;
                        case "up":
                            "none" == n && t("html, body").animate({
                                scrollTop: e.offset().top + e.height() + "px"
                            });
                            break;
                        case "down":
                            "none" == n && t("html, body").animate({
                                scrollTop: e.offset().top - t(window).height() + "px"
                            })
                    }
                }
            }))
        },
        p = function(t, e) {
            var i = t.parent().find(".tp-bullets"),
                n = t.parent().find(".tparrows");
            if (null == i) {
                t.append('<div class=".tp-bullets"></div>');
                var i = t.parent().find(".tp-bullets")
            }
            if (null == n) {
                t.append('<div class=".tparrows"></div>');
                var n = t.parent().find(".tparrows")
            }
            if (t.data("hideThumbs", e.hideThumbs), i.addClass("hidebullets"), n.addClass("hidearrows"), Y()) try {
                t.hammer().on("touch", function() {
                    t.addClass("hovered"), "on" == e.onHoverStop && t.trigger("stoptimer"), clearTimeout(t.data("hideThumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
                }), t.hammer().on("release", function() {
                    t.removeClass("hovered"), t.trigger("starttimer"), t.hasClass("hovered") || i.hasClass("hovered") || t.data("hideThumbs", setTimeout(function() {
                        i.addClass("hidebullets"), n.addClass("hidearrows"), t.trigger("starttimer")
                    }, e.hideNavDelayOnMobile))
                })
            } catch (a) {} else i.hover(function() {
                e.overnav = !0, "on" == e.onHoverStop && t.trigger("stoptimer"), i.addClass("hovered"), clearTimeout(t.data("hideThumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
            }, function() {
                e.overnav = !1, t.trigger("starttimer"), i.removeClass("hovered"), t.hasClass("hovered") || i.hasClass("hovered") || t.data("hideThumbs", setTimeout(function() {
                    i.addClass("hidebullets"), n.addClass("hidearrows")
                }, e.hideThumbs))
            }), n.hover(function() {
                e.overnav = !0, "on" == e.onHoverStop && t.trigger("stoptimer"), i.addClass("hovered"), clearTimeout(t.data("hideThumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
            }, function() {
                e.overnav = !1, t.trigger("starttimer"), i.removeClass("hovered")
            }), t.on("mouseenter", function() {
                t.addClass("hovered"), "on" == e.onHoverStop && t.trigger("stoptimer"), clearTimeout(t.data("hideThumbs")), i.removeClass("hidebullets"), n.removeClass("hidearrows")
            }), t.on("mouseleave", function() {
                t.removeClass("hovered"), t.trigger("starttimer"), t.hasClass("hovered") || i.hasClass("hovered") || t.data("hideThumbs", setTimeout(function() {
                    i.addClass("hidebullets"), n.addClass("hidearrows")
                }, e.hideThumbs))
            })
        },
        f = function(e, i) {
            var n = e.parent(),
                a = n.find(".tp-bullets");
            if ("thumb" == i.navigationType) {
                a.find(".thumb").each(function(e) {
                    var n = t(this);
                    n.css({
                        width: i.thumbWidth * i.bw + "px",
                        height: i.thumbHeight * i.bh + "px"
                    })
                });
                var r = a.find(".tp-mask");
                r.width(i.thumbWidth * i.thumbAmount * i.bw), r.height(i.thumbHeight * i.bh), r.parent().width(i.thumbWidth * i.thumbAmount * i.bw), r.parent().height(i.thumbHeight * i.bh)
            }
            var o = n.find(".tp-leftarrow"),
                s = n.find(".tp-rightarrow");
            "thumb" == i.navigationType && "nexttobullets" == i.navigationArrows && (i.navigationArrows = "solo"), "nexttobullets" == i.navigationArrows && (o.prependTo(a).css({
                "float": "left"
            }), s.insertBefore(a.find(".tpclear")).css({
                "float": "left"
            }));
            var l = 0;
            "on" == i.forceFullWidth && (l = 0 - i.container.parent().offset().left);
            var d = 0,
                h = 0;
            if ("on" == i.navigationInGrid && (d = e.width() > i.startwidth ? (e.width() - i.startwidth) / 2 : 0, h = e.height() > i.startheight ? (e.height() - i.startheight) / 2 : 0), "none" != i.navigationArrows && "nexttobullets" != i.navigationArrows) {
                var c = i.soloArrowLeftValign,
                    u = i.soloArrowLeftHalign,
                    p = i.soloArrowRightValign,
                    f = i.soloArrowRightHalign,
                    g = i.soloArrowLeftVOffset,
                    m = i.soloArrowLeftHOffset,
                    v = i.soloArrowRightVOffset,
                    y = i.soloArrowRightHOffset;
                o.css({
                    position: "absolute"
                }), s.css({
                    position: "absolute"
                }), "center" == c ? o.css({
                    top: "50%",
                    marginTop: g - Math.round(o.innerHeight() / 2) + "px"
                }) : "bottom" == c ? o.css({
                    top: "auto",
                    bottom: 0 + g + "px"
                }) : "top" == c && o.css({
                    bottom: "auto",
                    top: 0 + g + "px"
                }), "center" == u ? o.css({
                    left: "50%",
                    marginLeft: l + m - Math.round(o.innerWidth() / 2) + "px"
                }) : "left" == u ? o.css({
                    left: d + m + l + "px"
                }) : "right" == u && o.css({
                    right: d + m - l + "px"
                }), "center" == p ? s.css({
                    top: "50%",
                    marginTop: v - Math.round(s.innerHeight() / 2) + "px"
                }) : "bottom" == p ? s.css({
                    top: "auto",
                    bottom: 0 + v + "px"
                }) : "top" == p && s.css({
                    bottom: "auto",
                    top: 0 + v + "px"
                }), "center" == f ? s.css({
                    left: "50%",
                    marginLeft: l + y - Math.round(s.innerWidth() / 2) + "px"
                }) : "left" == f ? s.css({
                    left: d + y + l + "px"
                }) : "right" == f && s.css({
                    right: d + y - l + "px"
                }), null != o.position() && o.css({
                    top: Math.round(parseInt(o.position().top, 0)) + "px"
                }), null != s.position() && s.css({
                    top: Math.round(parseInt(s.position().top, 0)) + "px"
                })
            }
            "none" == i.navigationArrows && (o.css({
                visibility: "hidden"
            }), s.css({
                visibility: "hidden"
            }));
            var w = i.navigationVAlign,
                b = i.navigationHAlign,
                _ = i.navigationVOffset * i.bh,
                x = i.navigationHOffset * i.bw;
            "center" == w && a.css({
                top: "50%",
                marginTop: _ - Math.round(a.innerHeight() / 2) + "px"
            }), "bottom" == w && a.css({
                bottom: 0 + _ + "px"
            }), "top" == w && a.css({
                top: 0 + _ + "px"
            }), "center" == b && a.css({
                left: "50%",
                marginLeft: l + x - Math.round(a.innerWidth() / 2) + "px"
            }), "left" == b && a.css({
                left: 0 + x + l + "px"
            }), "right" == b && a.css({
                right: 0 + x - l + "px"
            })
        },
        g = function(i) {
            var n = i.container;
            i.beforli = i.next - 1, i.comingli = i.next + 1, i.beforli < 0 && (i.beforli = i.slideamount - 1), i.comingli >= i.slideamount && (i.comingli = 0);
            var a = n.find(">ul:first-child >li:eq(" + i.comingli + ")"),
                r = n.find(">ul:first-child >li:eq(" + i.beforli + ")"),
                o = r.find(".defaultimg").attr("src"),
                s = a.find(".defaultimg").attr("src");
            i.arr == e && (i.arr = n.parent().find(".tparrows"), i.rar = n.parent().find(".tp-rightarrow"), i.lar = n.parent().find(".tp-leftarrow"), i.raimg = i.rar.find(".tp-arr-imgholder"), i.laimg = i.lar.find(".tp-arr-imgholder"), i.raimg_b = i.rar.find(".tp-arr-imgholder2"), i.laimg_b = i.lar.find(".tp-arr-imgholder2"), i.ratit = i.rar.find(".tp-arr-titleholder"), i.latit = i.lar.find(".tp-arr-titleholder"));
            var l = i.arr,
                d = i.rar,
                h = i.lar,
                c = i.raimg,
                u = i.laimg,
                p = i.raimg_b,
                f = i.laimg_b,
                g = i.ratit,
                m = i.latit;
            if (a.data("title") != e && g.html(a.data("title")), r.data("title") != e && m.html(r.data("title")), d.hasClass("itishovered") && d.width(g.outerWidth(!0) + parseInt(d.css("minWidth"), 0)), h.hasClass("itishovered") && h.width(m.outerWidth(!0) + parseInt(h.css("minWidth"), 0)), l.hasClass("preview2") && !l.hasClass("hashoveralready"))
                if (l.addClass("hashoveralready"), Y()) {
                    var l = t(this),
                        v = l.find(".tp-arr-titleholder");
                    v.addClass("alwayshidden"), punchgs.TweenLite.set(v, {
                        autoAlpha: 0
                    })
                } else l.hover(function() {
                    var e = t(this),
                        i = e.find(".tp-arr-titleholder");
                    t(window).width() > 767 && e.width(i.outerWidth(!0) + parseInt(e.css("minWidth"), 0)), e.addClass("itishovered")
                }, function() {
                    var e = t(this);
                    e.find(".tp-arr-titleholder");
                    e.css({
                        width: parseInt(e.css("minWidth"), 0)
                    }), e.removeClass("itishovered")
                });
            r.data("thumb") != e && (o = r.data("thumb")), a.data("thumb") != e && (s = a.data("thumb")), l.hasClass("preview4") ? (p.css({
                backgroundImage: "url(" + s + ")"
            }), f.css({
                backgroundImage: "url(" + o + ")"
            }), punchgs.TweenLite.fromTo(p, .8, {
                force3D: punchgs.force3d,
                x: 0
            }, {
                x: -c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    c.css({
                        backgroundImage: "url(" + s + ")"
                    }), punchgs.TweenLite.set(p, {
                        x: 0
                    })
                }
            }), punchgs.TweenLite.fromTo(f, .8, {
                force3D: punchgs.force3d,
                x: 0
            }, {
                x: c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    u.css({
                        backgroundImage: "url(" + o + ")"
                    }), punchgs.TweenLite.set(f, {
                        x: 0
                    })
                }
            }), punchgs.TweenLite.fromTo(c, .8, {
                x: 0
            }, {
                force3D: punchgs.force3d,
                x: -c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    punchgs.TweenLite.set(c, {
                        x: 0
                    })
                }
            }), punchgs.TweenLite.fromTo(u, .8, {
                x: 0
            }, {
                force3D: punchgs.force3d,
                x: c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    punchgs.TweenLite.set(u, {
                        x: 0
                    })
                }
            })) : (punchgs.TweenLite.to(c, .5, {
                autoAlpha: 0,
                onComplete: function() {
                    c.css({
                        backgroundImage: "url(" + s + ")"
                    }), u.css({
                        backgroundImage: "url(" + o + ")"
                    })
                }
            }), punchgs.TweenLite.to(u, .5, {
                autoAlpha: 0,
                onComplete: function() {
                    punchgs.TweenLite.to(c, .5, {
                        autoAlpha: 1,
                        delay: .2
                    }), punchgs.TweenLite.to(u, .5, {
                        autoAlpha: 1,
                        delay: .2
                    })
                }
            })), d.hasClass("preview4") && !d.hasClass("hashoveralready") && (d.addClass("hashoveralready"), d.hover(function() {
                var e = t(this).find(".tp-arr-iwrapper"),
                    i = t(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.fromTo(e, .4, {
                    x: e.width()
                }, {
                    x: 0,
                    delay: .3,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "all"
                }), punchgs.TweenLite.to(i, .2, {
                    autoAlpha: 1,
                    overwrite: "all"
                })
            }, function() {
                var e = t(this).find(".tp-arr-iwrapper"),
                    i = t(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.to(e, .4, {
                    x: e.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: .2,
                    overwrite: "all"
                }), punchgs.TweenLite.to(i, .2, {
                    delay: .6,
                    autoAlpha: 0,
                    overwrite: "all"
                })
            }), h.hover(function() {
                var e = t(this).find(".tp-arr-iwrapper"),
                    i = t(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.fromTo(e, .4, {
                    x: 0 - e.width()
                }, {
                    x: 0,
                    delay: .3,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "all"
                }), punchgs.TweenLite.to(i, .2, {
                    autoAlpha: 1,
                    overwrite: "all"
                })
            }, function() {
                var e = t(this).find(".tp-arr-iwrapper"),
                    i = t(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.to(e, .4, {
                    x: 0 - e.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: .2,
                    overwrite: "all"
                }), punchgs.TweenLite.to(i, .2, {
                    delay: .6,
                    autoAlpha: 0,
                    overwrite: "all"
                })
            }))
        },
        m = function(i, n) {
            if (n.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css({
                    height: n.container.height()
                }), n.container.closest(".rev_slider_wrapper").css({
                    height: n.container.height()
                }), n.width = parseInt(n.container.width(), 0), n.height = parseInt(n.container.height(), 0), n.bw = n.width / n.startwidth, n.bh = n.height / n.startheight, n.bh > n.bw && (n.bh = n.bw), n.bh < n.bw && (n.bw = n.bh), n.bw < n.bh && (n.bh = n.bw), n.bh > 1 && (n.bw = 1, n.bh = 1), n.bw > 1 && (n.bw = 1, n.bh = 1), n.height = Math.round(n.startheight * (n.width / n.startwidth)), n.height > n.startheight && "on" != n.autoHeight && (n.height = n.startheight), "on" == n.fullScreen) {
                n.height = n.bw * n.startheight;
                var a = (n.container.parent().width(), t(window).height());
                if (n.fullScreenOffsetContainer != e) {
                    try {
                        var r = n.fullScreenOffsetContainer.split(",");
                        t.each(r, function(e, i) {
                            a -= t(i).outerHeight(!0), a < n.minFullScreenHeight && (a = n.minFullScreenHeight)
                        })
                    } catch (o) {}
                    try {
                        n.fullScreenOffset.split("%").length > 1 && n.fullScreenOffset != e && n.fullScreenOffset.length > 0 ? a -= t(window).height() * parseInt(n.fullScreenOffset, 0) / 100 : n.fullScreenOffset != e && n.fullScreenOffset.length > 0 && (a -= parseInt(n.fullScreenOffset, 0)), a < n.minFullScreenHeight && (a = n.minFullScreenHeight)
                    } catch (o) {}
                }
                n.container.parent().height(a), n.container.closest(".rev_slider_wrapper").height(a), n.container.css({
                    height: "100%"
                }), n.height = a, n.minHeight != e && n.height < n.minHeight && (n.height = n.minHeight)
            } else n.minHeight != e && n.height < n.minHeight && (n.height = n.minHeight), n.container.height(n.height);
            n.slotw = Math.ceil(n.width / n.slots), "on" == n.fullScreen ? n.sloth = Math.ceil(t(window).height() / n.slots) : n.sloth = Math.ceil(n.height / n.slots), "on" == n.autoHeight && (n.sloth = Math.ceil(i.height() / n.slots))
        },
        v = function(i, n) {
            i.find(".tp-caption").each(function() {
                t(this).addClass(t(this).data("transition")), t(this).addClass("start")
            }), i.find(">ul:first").css({
                overflow: "hidden",
                width: "100%",
                height: "100%",
                maxHeight: i.parent().css("maxHeight")
            }).addClass("tp-revslider-mainul"), "on" == n.autoHeight && (i.find(">ul:first").css({
                overflow: "hidden",
                width: "100%",
                height: "100%",
                maxHeight: "none"
            }), i.css({
                maxHeight: "none"
            }), i.parent().css({
                maxHeight: "none"
            })), i.find(">ul:first >li").each(function(n) {
                var a = t(this);
                if (a.addClass("tp-revslider-slidesli"), a.css({
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    }), a.data("link") != e) {
                    var r = a.data("link"),
                        o = "_self",
                        s = 60;
                    "back" == a.data("slideindex") && (s = 0);
                    var l = checksl = a.data("linktoslide");
                    l != e && "next" != l && "prev" != l && i.find(">ul:first-child >li").each(function() {
                        var e = t(this);
                        e.data("origindex") + 1 == checksl && (l = e.index() + 1)
                    }), a.data("target") != e && (o = a.data("target")), "slide" != r && (l = "no");
                    var d = '<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' + s + ';" data-x="center" data-y="center" data-linktoslide="' + l + '" data-start="0"><a style="width:100%;height:100%;display:block"';
                    "slide" != r && (d = d + ' target="' + o + '" href="' + r + '"'), d += '><span style="width:100%;height:100%;display:block"></span></a></div>', a.append(d)
                }
            }), i.parent().css({
                overflow: "visible"
            }), i.find(">ul:first >li >img").each(function(i) {
                var a = t(this);
                a.addClass("defaultimg"), a.data("lazyload") != e && 1 != a.data("lazydone") || m(a, n), s(8) && a.data("kenburns", "off"), "on" == n.panZoomDisableOnMobile && Y() && (a.data("kenburns", "off"), a.data("bgfit", "cover")), a.wrap('<div class="slotholder" style="width:100%;height:100%;"data-duration="' + a.data("duration") + '"data-zoomstart="' + a.data("zoomstart") + '"data-zoomend="' + a.data("zoomend") + '"data-rotationstart="' + a.data("rotationstart") + '"data-rotationend="' + a.data("rotationend") + '"data-ease="' + a.data("ease") + '"data-duration="' + a.data("duration") + '"data-bgpositionend="' + a.data("bgpositionend") + '"data-bgposition="' + a.data("bgposition") + '"data-duration="' + a.data("duration") + '"data-kenburns="' + a.data("kenburns") + '"data-easeme="' + a.data("ease") + '"data-bgfit="' + a.data("bgfit") + '"data-bgfitend="' + a.data("bgfitend") + '"data-owidth="' + a.data("owidth") + '"data-oheight="' + a.data("oheight") + '"></div>'), "none" != n.dottedOverlay && n.dottedOverlay != e && a.closest(".slotholder").append('<div class="tp-dottedoverlay ' + n.dottedOverlay + '"></div>');
                var r = a.attr("src"),
                    o = (a.data("lazyload"), a.data("bgfit")),
                    l = a.data("bgrepeat"),
                    d = a.data("bgposition");
                o == e && (o = "cover"), l == e && (l = "no-repeat"), d == e && (d = "center center");
                var h = a.closest(".slotholder");
                a.replaceWith('<div class="tp-bgimg defaultimg" data-lazyload="' + a.data("lazyload") + '" data-bgfit="' + o + '"data-bgposition="' + d + '" data-bgrepeat="' + l + '" data-lazydone="' + a.data("lazydone") + '" src="' + r + '" data-src="' + r + '" style="background-color:' + a.css("backgroundColor") + ";background-repeat:" + l + ";background-image:url(" + r + ");background-size:" + o + ";background-position:" + d + ';width:100%;height:100%;"></div>'), s(8) && (h.find(".tp-bgimg").css({
                    backgroundImage: "none",
                    "background-image": "none"
                }), h.find(".tp-bgimg").append('<img class="ieeightfallbackimage defaultimg" src="' + r + '" style="width:100%">')), a.css({
                    opacity: 0
                }), a.data("li-id", i)
            })
        },
        y = function(t, i, n, a) {
            var r = t,
                o = r.find(".defaultimg"),
                l = r.data("zoomstart"),
                d = r.data("rotationstart");
            o.data("currotate") != e && (d = o.data("currotate")), o.data("curscale") != e && "box" == a ? l = 100 * o.data("curscale") : o.data("curscale") != e && (l = o.data("curscale")), m(o, i);
            var h = o.data("src"),
                c = o.css("backgroundColor"),
                u = i.width,
                p = i.height,
                f = o.data("fxof"),
                g = 0;
            "on" == i.autoHeight && (p = i.container.height()), f == e && (f = 0);
            var v = 0,
                y = o.data("bgfit"),
                b = o.data("bgrepeat"),
                _ = o.data("bgposition");
            if (y == e && (y = "cover"), b == e && (b = "no-repeat"), _ == e && (_ = "center center"), s(8)) {
                r.data("kenburns", "off");
                var x = h;
                h = ""
            }
            switch (a) {
                case "box":
                    var T = 0,
                        k = 0,
                        C = 0;
                    if (T = i.sloth > i.slotw ? i.sloth : i.slotw, !n) var v = 0 - T;
                    i.slotw = T, i.sloth = T;
                    var k = 0,
                        C = 0;
                    "on" == r.data("kenburns") && (y = l, y.toString().length < 4 && (y = U(y, r, i)));
                    for (var S = 0; S < i.slots; S++) {
                        C = 0;
                        for (var P = 0; P < i.slots; P++) r.append('<div class="slot" style="position:absolute;top:' + (g + C) + "px;left:" + (f + k) + "px;width:" + T + "px;height:" + T + 'px;overflow:hidden;"><div class="slotslide" data-x="' + k + '" data-y="' + C + '" style="position:absolute;top:0px;left:0px;width:' + T + "px;height:" + T + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - C) + "px;left:" + (0 - k) + "px;width:" + u + "px;height:" + p + "px;background-color:" + c + ";background-image:url(" + h + ");background-repeat:" + b + ";background-size:" + y + ";background-position:" + _ + ';"></div></div></div>'), C += T, s(8) && (r.find(".slot ").last().find(".slotslide").append('<img src="' + x + '">'), w(r, i)), l != e && d != e && punchgs.TweenLite.set(r.find(".slot").last(), {
                            rotationZ: d
                        });
                        k += T
                    }
                    break;
                case "vertical":
                case "horizontal":
                    if ("on" == r.data("kenburns") && (y = l, y.toString().length < 4 && (y = U(y, r, i))), "horizontal" == a) {
                        if (!n) var v = 0 - i.slotw;
                        for (var P = 0; P < i.slots; P++) r.append('<div class="slot" style="position:absolute;top:' + (0 + g) + "px;left:" + (f + P * i.slotw) + "px;overflow:hidden;width:" + (i.slotw + .6) + "px;height:" + p + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + v + "px;width:" + (i.slotw + .6) + "px;height:" + p + 'px;overflow:hidden;"><div style="background-color:' + c + ";position:absolute;top:0px;left:" + (0 - P * i.slotw) + "px;width:" + u + "px;height:" + p + "px;background-image:url(" + h + ");background-repeat:" + b + ";background-size:" + y + ";background-position:" + _ + ';"></div></div></div>'),
                            l != e && d != e && punchgs.TweenLite.set(r.find(".slot").last(), {
                                rotationZ: d
                            }), s(8) && (r.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + x + '" style="width:100%;height:auto">'), w(r, i))
                    } else {
                        if (!n) var v = 0 - i.sloth;
                        for (var P = 0; P < i.slots + 2; P++) r.append('<div class="slot" style="position:absolute;top:' + (g + P * i.sloth) + "px;left:" + f + "px;overflow:hidden;width:" + u + "px;height:" + i.sloth + 'px"><div class="slotslide" style="position:absolute;top:' + v + "px;left:0px;width:" + u + "px;height:" + i.sloth + 'px;overflow:hidden;"><div style="background-color:' + c + ";position:absolute;top:" + (0 - P * i.sloth) + "px;left:0px;width:" + u + "px;height:" + p + "px;background-image:url(" + h + ");background-repeat:" + b + ";background-size:" + y + ";background-position:" + _ + ';"></div></div></div>'), l != e && d != e && punchgs.TweenLite.set(r.find(".slot").last(), {
                            rotationZ: d
                        }), s(8) && (r.find(".slot ").last().find(".slotslide").append('<img class="ieeightfallbackimage" src="' + x + '" style="width:100%;height:auto;">'), w(r, i))
                    }
            }
        },
        w = function(t, e) {
            if (s(8)) {
                var i = t.find(".ieeightfallbackimage");
                i.width(), i.height();
                e.startwidth / e.startheight < t.data("owidth") / t.data("oheight") ? i.css({
                    width: "auto",
                    height: "100%"
                }) : i.css({
                    width: "100%",
                    height: "auto"
                }), setTimeout(function() {
                    var n = i.width(),
                        a = i.height(),
                        r = t.data("bgposition");
                    "center center" == r && i.css({
                        position: "absolute",
                        top: e.height / 2 - a / 2 + "px",
                        left: e.width / 2 - n / 2 + "px"
                    }), "center top" != r && "top center" != r || i.css({
                        position: "absolute",
                        top: "0px",
                        left: e.width / 2 - n / 2 + "px"
                    }), "center bottom" != r && "bottom center" != r || i.css({
                        position: "absolute",
                        bottom: "0px",
                        left: e.width / 2 - n / 2 + "px"
                    }), "right top" != r && "top right" != r || i.css({
                        position: "absolute",
                        top: "0px",
                        right: "0px"
                    }), "right bottom" != r && "bottom right" != r || i.css({
                        position: "absolute",
                        bottom: "0px",
                        right: "0px"
                    }), "right center" != r && "center right" != r || i.css({
                        position: "absolute",
                        top: e.height / 2 - a / 2 + "px",
                        right: "0px"
                    }), "left bottom" != r && "bottom left" != r || i.css({
                        position: "absolute",
                        bottom: "0px",
                        left: "0px"
                    }), "left center" != r && "center left" != r || i.css({
                        position: "absolute",
                        top: e.height / 2 - a / 2 + "px",
                        left: "0px"
                    })
                }, 20)
            }
        },
        b = function(e, i, n) {
            n.find(".slot").each(function() {
                t(this).remove()
            }), i.transition = 0
        },
        _ = function(i, n) {
            i.find("img, .defaultimg").each(function(i) {
                var a = t(this),
                    r = a.data("lazyload");
                if (r != a.attr("src") && 3 > n && r != e && "undefined" != r) {
                    if (r != e && "undefined" != r) {
                        a.attr("src", r);
                        var o = new Image;
                        o.onload = function(t) {
                            a.data("lazydone", 1), a.hasClass("defaultimg") && x(a, o)
                        }, o.error = function() {
                            a.data("lazydone", 1)
                        }, o.src = a.attr("src"), o.complete && (a.hasClass("defaultimg") && x(a, o), a.data("lazydone", 1))
                    }
                } else if ((r === e || "undefined" === r) && 1 != a.data("lazydone")) {
                    var o = new Image;
                    o.onload = function() {
                        a.hasClass("defaultimg") && x(a, o), a.data("lazydone", 1)
                    }, o.error = function() {
                        a.data("lazydone", 1)
                    }, a.attr("src") != e && "undefined" != a.attr("src") ? o.src = a.attr("src") : o.src = a.data("src"), o.complete && (a.hasClass("defaultimg") && x(a, o), a.data("lazydone", 1))
                }
            })
        },
        x = function(t, e) {
            var i = t.closest("li"),
                n = e.width,
                a = e.height;
            i.data("owidth", n), i.data("oheight", a), i.find(".slotholder").data("owidth", n), i.find(".slotholder").data("oheight", a), i.data("loadeddone", 1)
        },
        T = function(i, n, a) {
            _(i, 0);
            var r = setInterval(function() {
                a.bannertimeronpause = !0, a.container.trigger("stoptimer"), a.cd = 0;
                var o = 0;
                i.find("img, .defaultimg").each(function(e) {
                    1 != t(this).data("lazydone") && o++
                }), o > 0 ? _(i, o) : (clearInterval(r), n != e && n())
            }, 100)
        },
        k = function(t, i) {
            try {
                t.find(">ul:first-child >li:eq(" + i.act + ")")
            } catch (n) {
                t.find(">ul:first-child >li:eq(1)")
            }
            i.lastslide = i.act;
            var a = t.find(">ul:first-child >li:eq(" + i.next + ")"),
                r = a.find(".defaultimg");
            i.bannertimeronpause = !0, t.trigger("stoptimer"), i.cd = 0, r.data("lazyload") != e && "undefined" != r.data("lazyload") && 1 != r.data("lazydone") ? (s(8) ? r.attr("src", a.find(".defaultimg").data("lazyload")) : r.css({
                backgroundImage: 'url("' + a.find(".defaultimg").data("lazyload") + '")'
            }), r.data("src", a.find(".defaultimg").data("lazyload")), r.data("lazydone", 1), r.data("orgw", 0), a.data("loadeddone", 1), t.find(".tp-loader").css({
                display: "block"
            }), T(t.find(".tp-static-layers"), function() {
                T(a, function() {
                    var e = a.find(".slotholder");
                    if ("on" == e.data("kenburns")) var n = setInterval(function() {
                        var a = e.data("owidth");
                        a >= 0 && (clearInterval(n), C(i, r, t))
                    }, 10);
                    else C(i, r, t)
                }, i)
            }, i)) : a.data("loadeddone") === e ? (a.data("loadeddone", 1), T(a, function() {
                C(i, r, t)
            }, i)) : C(i, r, t)
        },
        C = function(t, e, i) {
            t.bannertimeronpause = !1, t.cd = 0, i.trigger("nulltimer"), i.find(".tp-loader").css({
                display: "none"
            }), m(e, t), f(i, t), m(e, t), S(i, t)
        },
        S = function(t, i) {
            t.trigger("revolution.slide.onbeforeswap"), i.transition = 1, i.videoplaying = !1;
            try {
                var n = t.find(">ul:first-child >li:eq(" + i.act + ")")
            } catch (a) {
                var n = t.find(">ul:first-child >li:eq(1)")
            }
            i.lastslide = i.act;
            var r = t.find(">ul:first-child >li:eq(" + i.next + ")");
            setTimeout(function() {
                g(i)
            }, 200);
            var o = n.find(".slotholder"),
                s = r.find(".slotholder");
            "on" != s.data("kenburns") && "on" != o.data("kenburns") || (G(t, i), t.find(".kenburnimg").remove()), r.data("delay") != e ? (i.cd = 0, i.delay = r.data("delay")) : i.delay = i.origcd, 1 == i.firststart && punchgs.TweenLite.set(n, {
                autoAlpha: 0
            }), punchgs.TweenLite.set(n, {
                zIndex: 18
            }), punchgs.TweenLite.set(r, {
                autoAlpha: 0,
                zIndex: 20
            });
            var l = 0;
            n.index() != r.index() && 1 != i.firststart && (l = H(n, i)), "on" != n.data("saveperformance") && (l = 0), setTimeout(function() {
                t.trigger("restarttimer"), P(t, i, r, n, o, s)
            }, l)
        },
        P = function(i, n, a, r, o, l) {
            function d() {
                t.each(g, function(t, e) {
                    e[0] != p && e[8] != p || (h = e[1], f = e[2], w = b), b += 1
                })
            }
            "prepared" == a.data("differentissplayed") && (a.data("differentissplayed", "done"), a.data("transition", a.data("savedtransition")), a.data("slotamount", a.data("savedslotamount")), a.data("masterspeed", a.data("savedmasterspeed"))), a.data("fstransition") != e && "done" != a.data("differentissplayed") && (a.data("savedtransition", a.data("transition")), a.data("savedslotamount", a.data("slotamount")), a.data("savedmasterspeed", a.data("masterspeed")), a.data("transition", a.data("fstransition")), a.data("slotamount", a.data("fsslotamount")), a.data("masterspeed", a.data("fsmasterspeed")), a.data("differentissplayed", "prepared")), i.find(".active-revslide").removeClass(".active-revslide"), a.addClass("active-revslide"), a.data("transition") == e && a.data("transition", "random");
            var h = 0,
                c = a.data("transition").split(","),
                u = a.data("nexttransid") == e ? -1 : a.data("nexttransid");
            "on" == a.data("randomtransition") ? u = Math.round(Math.random() * c.length) : u += 1, u == c.length && (u = 0), a.data("nexttransid", u);
            var p = c[u];
            n.ie && ("boxfade" == p && (p = "boxslide"), "slotfade-vertical" == p && (p = "slotzoom-vertical"), "slotfade-horizontal" == p && (p = "slotzoom-horizontal")), s(8) && (p = 11);
            var f = 0;
            "scroll" == n.parallax && n.parallaxFirstGo == e && (n.parallaxFirstGo = !0, K(i, n), setTimeout(function() {
                K(i, n)
            }, 210), setTimeout(function() {
                K(i, n)
            }, 420)), "slidehorizontal" == p && (p = "slideleft", 1 == n.leftarrowpressed && (p = "slideright")), "slidevertical" == p && (p = "slideup", 1 == n.leftarrowpressed && (p = "slidedown")), "parallaxhorizontal" == p && (p = "parallaxtoleft", 1 == n.leftarrowpressed && (p = "parallaxtoright")), "parallaxvertical" == p && (p = "parallaxtotop", 1 == n.leftarrowpressed && (p = "parallaxtobottom"));
            var g = [
                    ["boxslide", 0, 1, 10, 0, "box", !1, null, 0],
                    ["boxfade", 1, 0, 10, 0, "box", !1, null, 1],
                    ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2],
                    ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3],
                    ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4],
                    ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5],
                    ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6],
                    ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7],
                    ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8],
                    ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", !0, null, 9],
                    ["slotfade-vertical", 10, 0, 0, 500, "vertical", !0, null, 10],
                    ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11],
                    ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12],
                    ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13],
                    ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14],
                    ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15],
                    ["papercut", 16, 0, 0, 600, "", null, null, 16],
                    ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17],
                    ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18],
                    ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19],
                    ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20],
                    ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21],
                    ["turnoff", 21, 0, 1, 1600, "horizontal", !1, !0, 22],
                    ["incube", 22, 0, 20, 200, "horizontal", !1, !0, 23],
                    ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24],
                    ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25],
                    ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26],
                    ["turnoff-vertical", 25, 0, 1, 200, "horizontal", !1, !0, 27],
                    ["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28],
                    ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29],
                    ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30],
                    ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31],
                    ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32],
                    ["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal", !0, !0, 33],
                    ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34],
                    ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35],
                    ["parallaxtoright", 12, 3, 1, 0, "horizontal", !0, !0, 36],
                    ["parallaxtoleft", 15, 3, 1, 0, "horizontal", !0, !0, 37],
                    ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38],
                    ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39],
                    ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40],
                    ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41],
                    ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42],
                    ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43],
                    ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44],
                    ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45],
                    ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46]
                ],
                m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                v = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                h = 0,
                f = 1,
                w = 0,
                b = 0,
                _ = new Array;
            "on" == l.data("kenburns") && ("boxslide" != p && 0 != p && "boxfade" != p && 1 != p && "papercut" != p && 16 != p || (p = 11), V(i, n, !0, !0)), "random" == p && (p = Math.round(Math.random() * g.length - 1), p > g.length - 1 && (p = g.length - 1)), "random-static" == p && (p = Math.round(Math.random() * m.length - 1), p > m.length - 1 && (p = m.length - 1), p = m[p]), "random-premium" == p && (p = Math.round(Math.random() * v.length - 1), p > v.length - 1 && (p = v.length - 1), p = v[p]);
            var x = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
            if (1 == n.isJoomla && window.MooTools != e && -1 != x.indexOf(p)) {
                var T = Math.round(Math.random() * (v.length - 2)) + 1;
                T > v.length - 1 && (T = v.length - 1), 0 == T && (T = 1), p = v[T]
            }
            d(), s(8) && h > 15 && 28 > h && (p = Math.round(Math.random() * m.length - 1), p > m.length - 1 && (p = m.length - 1), p = m[p], b = 0, d());
            var k = -1;
            (1 == n.leftarrowpressed || n.act > n.next) && (k = 1), n.leftarrowpressed = 0, h > 26 && (h = 26), 0 > h && (h = 0);
            var C = 300;
            a.data("masterspeed") != e && a.data("masterspeed") > 99 && a.data("masterspeed") < n.delay && (C = a.data("masterspeed")), a.data("masterspeed") != e && a.data("masterspeed") > n.delay && (C = n.delay), _ = g[w], i.parent().find(".bullet").each(function() {
                var e = t(this),
                    i = e.index();
                e.removeClass("selected"), "withbullet" != n.navigationArrows && "nexttobullets" != n.navigationArrows || (i = e.index() - 1), i == n.next && e.addClass("selected")
            });
            var S = new punchgs.TimelineLite({
                onComplete: function() {
                    O(i, n, l, o, a, r, S)
                }
            });
            if (S.add(punchgs.TweenLite.set(l.find(".defaultimg"), {
                    opacity: 0
                })), S.pause(), a.data("slotamount") == e || a.data("slotamount") < 1 ? (n.slots = Math.round(12 * Math.random() + 4), "boxslide" == p ? n.slots = Math.round(6 * Math.random() + 3) : "flyin" == p && (n.slots = Math.round(4 * Math.random() + 1))) : n.slots = a.data("slotamount"), a.data("rotate") == e ? n.rotate = 0 : 999 == a.data("rotate") ? n.rotate = Math.round(360 * Math.random()) : n.rotate = a.data("rotate"), (!t.support.transition || n.ie || n.ie9) && (n.rotate = 0), 1 == n.firststart && (n.firststart = 0), C += _[4], (4 == h || 5 == h || 6 == h) && n.slots < 3 && (n.slots = 3), 0 != _[3] && (n.slots = Math.min(n.slots, _[3])), 9 == h && (n.slots = n.width / 20), 10 == h && (n.slots = n.height / 20), null != _[7] && y(o, n, _[7], _[5]), null != _[6] && y(l, n, _[6], _[5]), 0 == h) {
                var P = Math.ceil(n.height / n.sloth),
                    A = 0;
                l.find(".slotslide").each(function(e) {
                    var i = t(this);
                    A += 1, A == P && (A = 0), S.add(punchgs.TweenLite.from(i, C / 600, {
                        opacity: 0,
                        top: 0 - n.sloth,
                        left: 0 - n.slotw,
                        rotation: n.rotate,
                        force3D: "auto",
                        ease: punchgs.Power2.easeOut
                    }), (15 * e + 30 * A) / 1500)
                })
            }
            if (1 == h) {
                var L, D = 0;
                l.find(".slotslide").each(function(e) {
                    var i = t(this),
                        a = Math.random() * C + 300,
                        r = 500 * Math.random() + 200;
                    a + r > L && (L = r + r, D = e), S.add(punchgs.TweenLite.from(i, a / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        rotation: n.rotate,
                        ease: punchgs.Power2.easeInOut
                    }), r / 1e3)
                })
            }
            if (2 == h) {
                var E = new punchgs.TimelineLite;
                o.find(".slotslide").each(function() {
                    var e = t(this);
                    E.add(punchgs.TweenLite.to(e, C / 1e3, {
                        left: n.slotw,
                        force3D: "auto",
                        rotation: 0 - n.rotate
                    }), 0), S.add(E, 0)
                }), l.find(".slotslide").each(function() {
                    var e = t(this);
                    E.add(punchgs.TweenLite.from(e, C / 1e3, {
                        left: 0 - n.slotw,
                        force3D: "auto",
                        rotation: n.rotate
                    }), 0), S.add(E, 0)
                })
            }
            if (3 == h) {
                var E = new punchgs.TimelineLite;
                o.find(".slotslide").each(function() {
                    var e = t(this);
                    E.add(punchgs.TweenLite.to(e, C / 1e3, {
                        top: n.sloth,
                        rotation: n.rotate,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), S.add(E, 0)
                }), l.find(".slotslide").each(function() {
                    var e = t(this);
                    E.add(punchgs.TweenLite.from(e, C / 1e3, {
                        top: 0 - n.sloth,
                        rotation: n.rotate,
                        ease: punchgs.Power2.easeOut,
                        force3D: "auto",
                        transformPerspective: 600
                    }), 0), S.add(E, 0)
                })
            }
            if (4 == h || 5 == h) {
                setTimeout(function() {
                    o.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var I = C / 1e3,
                    E = new punchgs.TimelineLite;
                o.find(".slotslide").each(function(e) {
                    var i = t(this),
                        a = e * I / n.slots;
                    5 == h && (a = (n.slots - e - 1) * I / n.slots / 1.5), E.add(punchgs.TweenLite.to(i, 3 * I, {
                        transformPerspective: 600,
                        force3D: "auto",
                        top: 0 + n.height,
                        opacity: .5,
                        rotation: n.rotate,
                        ease: punchgs.Power2.easeInOut,
                        delay: a
                    }), 0), S.add(E, 0)
                }), l.find(".slotslide").each(function(e) {
                    var i = t(this),
                        a = e * I / n.slots;
                    5 == h && (a = (n.slots - e - 1) * I / n.slots / 1.5), E.add(punchgs.TweenLite.from(i, 3 * I, {
                        top: 0 - n.height,
                        opacity: .5,
                        rotation: n.rotate,
                        force3D: "auto",
                        ease: punchgs.Power2.easeInOut,
                        delay: a
                    }), 0), S.add(E, 0)
                })
            }
            if (6 == h) {
                n.slots < 2 && (n.slots = 2), n.slots % 2 && (n.slots = n.slots + 1);
                var E = new punchgs.TimelineLite;
                setTimeout(function() {
                    o.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), o.find(".slotslide").each(function(e) {
                    var i = t(this);
                    if (e + 1 < n.slots / 2) var a = 90 * (e + 2);
                    else var a = 90 * (2 + n.slots - e);
                    E.add(punchgs.TweenLite.to(i, (C + a) / 1e3, {
                        top: 0 + n.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: n.rotate,
                        ease: punchgs.Power2.easeInOut
                    }), 0), S.add(E, 0)
                }), l.find(".slotslide").each(function(e) {
                    var i = t(this);
                    if (e + 1 < n.slots / 2) var a = 90 * (e + 2);
                    else var a = 90 * (2 + n.slots - e);
                    E.add(punchgs.TweenLite.from(i, (C + a) / 1e3, {
                        top: 0 - n.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: n.rotate,
                        ease: punchgs.Power2.easeInOut
                    }), 0), S.add(E, 0)
                })
            }
            if (7 == h) {
                C = 2 * C, C > n.delay && (C = n.delay);
                var E = new punchgs.TimelineLite;
                setTimeout(function() {
                    o.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100), o.find(".slotslide").each(function() {
                    var e = t(this).find("div");
                    E.add(punchgs.TweenLite.to(e, C / 1e3, {
                        left: 0 - n.slotw / 2 + "px",
                        top: 0 - n.height / 2 + "px",
                        width: 2 * n.slotw + "px",
                        height: 2 * n.height + "px",
                        opacity: 0,
                        rotation: n.rotate,
                        force3D: "auto",
                        ease: punchgs.Power2.easeOut
                    }), 0), S.add(E, 0)
                }), l.find(".slotslide").each(function(e) {
                    var i = t(this).find("div");
                    E.add(punchgs.TweenLite.fromTo(i, C / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        transformPerspective: 600
                    }, {
                        left: 0 - e * n.slotw + "px",
                        ease: punchgs.Power2.easeOut,
                        force3D: "auto",
                        top: "0px",
                        width: n.width,
                        height: n.height,
                        opacity: 1,
                        rotation: 0,
                        delay: .1
                    }), 0), S.add(E, 0)
                })
            }
            if (8 == h) {
                C = 3 * C, C > n.delay && (C = n.delay);
                var E = new punchgs.TimelineLite;
                o.find(".slotslide").each(function() {
                    var e = t(this).find("div");
                    E.add(punchgs.TweenLite.to(e, C / 1e3, {
                        left: 0 - n.width / 2 + "px",
                        top: 0 - n.sloth / 2 + "px",
                        width: 2 * n.width + "px",
                        height: 2 * n.sloth + "px",
                        force3D: "auto",
                        opacity: 0,
                        rotation: n.rotate
                    }), 0), S.add(E, 0)
                }), l.find(".slotslide").each(function(e) {
                    var i = t(this).find("div");
                    E.add(punchgs.TweenLite.fromTo(i, C / 1e3, {
                        left: 0,
                        top: 0,
                        opacity: 0,
                        force3D: "auto"
                    }, {
                        left: "0px",
                        top: 0 - e * n.sloth + "px",
                        width: l.find(".defaultimg").data("neww") + "px",
                        height: l.find(".defaultimg").data("newh") + "px",
                        opacity: 1,
                        rotation: 0
                    }), 0), S.add(E, 0)
                })
            }
            if (9 == h || 10 == h) {
                var R = 0;
                l.find(".slotslide").each(function(e) {
                    var i = t(this);
                    R++, S.add(punchgs.TweenLite.fromTo(i, C / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        transformPerspective: 600
                    }, {
                        autoAlpha: 1,
                        ease: punchgs.Power2.easeInOut,
                        delay: 5 * e / 1e3
                    }), 0)
                })
            }
            if (11 == h || 26 == h) {
                var R = 0;
                26 == h && (C = 0), l.find(".slotslide").each(function(e) {
                    var i = t(this);
                    S.add(punchgs.TweenLite.from(i, C / 1e3, {
                        autoAlpha: 0,
                        force3D: "auto",
                        ease: punchgs.Power2.easeInOut
                    }), 0)
                })
            }
            if (12 == h || 13 == h || 14 == h || 15 == h) {
                C = C, C > n.delay && (C = n.delay), setTimeout(function() {
                    punchgs.TweenLite.set(o.find(".defaultimg"), {
                        autoAlpha: 0
                    })
                }, 100);
                var M = n.width,
                    z = n.height,
                    $ = l.find(".slotslide"),
                    j = 0,
                    F = 0,
                    H = 1,
                    W = 1,
                    q = 1,
                    X = punchgs.Power2.easeInOut,
                    B = punchgs.Power2.easeInOut,
                    Y = C / 1e3,
                    U = Y;
                "on" != n.fullWidth && "on" != n.fullScreen || (M = $.width(), z = $.height()), 12 == h ? j = M : 15 == h ? j = 0 - M : 13 == h ? F = z : 14 == h && (F = 0 - z), 1 == f && (H = 0), 2 == f && (H = 0), 3 == f && (X = punchgs.Power2.easeInOut, B = punchgs.Power1.easeInOut, Y = C / 1200), 4 != f && 5 != f || (W = .6), 6 == f && (W = 1.4), 5 != f && 6 != f || (q = 1.4, H = 0, M = 0, z = 0, j = 0, F = 0), 6 == f && (q = .6);
                S.add(punchgs.TweenLite.from($, Y, {
                    left: j,
                    top: F,
                    scale: q,
                    opacity: H,
                    rotation: n.rotate,
                    ease: B,
                    force3D: "auto"
                }), 0);
                var Q = o.find(".slotslide");
                if (4 != f && 5 != f || (M = 0, z = 0), 1 != f) switch (h) {
                    case 12:
                        S.add(punchgs.TweenLite.to(Q, U, {
                            left: 0 - M + "px",
                            force3D: "auto",
                            scale: W,
                            opacity: H,
                            rotation: n.rotate,
                            ease: X
                        }), 0);
                        break;
                    case 15:
                        S.add(punchgs.TweenLite.to(Q, U, {
                            left: M + "px",
                            force3D: "auto",
                            scale: W,
                            opacity: H,
                            rotation: n.rotate,
                            ease: X
                        }), 0);
                        break;
                    case 13:
                        S.add(punchgs.TweenLite.to(Q, U, {
                            top: 0 - z + "px",
                            force3D: "auto",
                            scale: W,
                            opacity: H,
                            rotation: n.rotate,
                            ease: X
                        }), 0);
                        break;
                    case 14:
                        S.add(punchgs.TweenLite.to(Q, U, {
                            top: z + "px",
                            force3D: "auto",
                            scale: W,
                            opacity: H,
                            rotation: n.rotate,
                            ease: X
                        }), 0)
                }
            }
            if (16 == h) {
                var E = new punchgs.TimelineLite;
                S.add(punchgs.TweenLite.set(r, {
                    position: "absolute",
                    "z-index": 20
                }), 0), S.add(punchgs.TweenLite.set(a, {
                    position: "absolute",
                    "z-index": 15
                }), 0), r.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), r.find(".tp-half-one").clone(!0).appendTo(r).addClass("tp-half-two"), r.find(".tp-half-two").removeClass("tp-half-one");
                var M = n.width,
                    z = n.height;
                "on" == n.autoHeight && (z = i.height()), r.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + M + "px;height:" + z + 'px;"></div>'), r.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + M + "px;height:" + z + 'px;"></div>'), r.find(".tp-half-two .defaultimg").css({
                    position: "absolute",
                    top: "-50%"
                }), r.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'), S.add(punchgs.TweenLite.set(r.find(".tp-half-two"), {
                    width: M,
                    height: z,
                    overflow: "hidden",
                    zIndex: 15,
                    position: "absolute",
                    top: z / 2,
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center bottom"
                }), 0), S.add(punchgs.TweenLite.set(r.find(".tp-half-one"), {
                    width: M,
                    height: z / 2,
                    overflow: "visible",
                    zIndex: 10,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    transformPerspective: 600,
                    transformOrigin: "center top"
                }), 0);
                var Z = (r.find(".defaultimg"), Math.round(20 * Math.random() - 10)),
                    G = Math.round(20 * Math.random() - 10),
                    J = Math.round(20 * Math.random() - 10),
                    tt = .4 * Math.random() - .2,
                    et = .4 * Math.random() - .2,
                    it = 1 * Math.random() + 1,
                    nt = 1 * Math.random() + 1,
                    at = .3 * Math.random() + .3;
                S.add(punchgs.TweenLite.set(r.find(".tp-half-one"), {
                    overflow: "hidden"
                }), 0), S.add(punchgs.TweenLite.fromTo(r.find(".tp-half-one"), C / 800, {
                    width: M,
                    height: z / 2,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center top"
                }, {
                    scale: it,
                    rotation: Z,
                    y: 0 - z - z / 4,
                    autoAlpha: 0,
                    ease: punchgs.Power2.easeInOut
                }), 0), S.add(punchgs.TweenLite.fromTo(r.find(".tp-half-two"), C / 800, {
                    width: M,
                    height: z,
                    overflow: "hidden",
                    position: "absolute",
                    top: z / 2,
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center bottom"
                }, {
                    scale: nt,
                    rotation: G,
                    y: z + z / 4,
                    ease: punchgs.Power2.easeInOut,
                    autoAlpha: 0,
                    onComplete: function() {
                        punchgs.TweenLite.set(r, {
                            position: "absolute",
                            "z-index": 15
                        }), punchgs.TweenLite.set(a, {
                            position: "absolute",
                            "z-index": 20
                        }), r.find(".tp-half-one").length > 0 && (r.find(".tp-half-one .defaultimg").unwrap(), r.find(".tp-half-one .slotholder").unwrap()), r.find(".tp-half-two").remove()
                    }
                }), 0), E.add(punchgs.TweenLite.set(l.find(".defaultimg"), {
                    autoAlpha: 1
                }), 0), null != r.html() && S.add(punchgs.TweenLite.fromTo(a, (C - 200) / 1e3, {
                    scale: at,
                    x: n.width / 4 * tt,
                    y: z / 4 * et,
                    rotation: J,
                    force3D: "auto",
                    transformOrigin: "center center",
                    ease: punchgs.Power2.easeOut
                }, {
                    autoAlpha: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    rotation: 0
                }), 0), S.add(E, 0)
            }
            if (17 == h && l.find(".slotslide").each(function(e) {
                    var i = t(this);
                    S.add(punchgs.TweenLite.fromTo(i, C / 800, {
                        opacity: 0,
                        rotationY: 0,
                        scale: .9,
                        rotationX: -110,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        opacity: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: punchgs.Power3.easeOut,
                        delay: .06 * e
                    }), 0)
                }), 18 == h && l.find(".slotslide").each(function(e) {
                    var i = t(this);
                    S.add(punchgs.TweenLite.fromTo(i, C / 500, {
                        autoAlpha: 0,
                        rotationY: 310,
                        scale: .9,
                        rotationX: 10,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: "center center"
                    }, {
                        autoAlpha: 1,
                        top: 0,
                        left: 0,
                        scale: 1,
                        rotation: 0,
                        rotationX: 0,
                        force3D: "auto",
                        rotationY: 0,
                        ease: punchgs.Power3.easeOut,
                        delay: .06 * e
                    }), 0)
                }), 19 == h || 22 == h) {
                var E = new punchgs.TimelineLite;
                S.add(punchgs.TweenLite.set(r, {
                    zIndex: 20
                }), 0), S.add(punchgs.TweenLite.set(a, {
                    zIndex: 20
                }), 0), setTimeout(function() {
                    o.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var rt = (a.css("z-index"), r.css("z-index"), 90),
                    H = 1,
                    ot = "center center ";
                1 == k && (rt = -90), 19 == h ? (ot = ot + "-" + n.height / 2, H = 0) : ot += n.height / 2, punchgs.TweenLite.set(i, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    transformPerspective: 600
                }), l.find(".slotslide").each(function(e) {
                    var i = t(this);
                    E.add(punchgs.TweenLite.fromTo(i, C / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        left: 0,
                        rotationY: n.rotate,
                        z: 10,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: ot,
                        rotationX: rt
                    }, {
                        left: 0,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        rotationX: 0,
                        delay: 50 * e / 1e3,
                        ease: punchgs.Power2.easeInOut
                    }), 0), E.add(punchgs.TweenLite.to(i, .1, {
                        autoAlpha: 1,
                        delay: 50 * e / 1e3
                    }), 0), S.add(E)
                }), o.find(".slotslide").each(function(e) {
                    var i = t(this),
                        a = -90;
                    1 == k && (a = 90), E.add(punchgs.TweenLite.fromTo(i, C / 1e3, {
                        transformStyle: "flat",
                        backfaceVisibility: "hidden",
                        autoAlpha: 1,
                        rotationY: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: ot,
                        rotationX: 0
                    }, {
                        autoAlpha: 1,
                        rotationY: n.rotate,
                        top: 0,
                        z: 10,
                        scale: 1,
                        rotationX: a,
                        delay: 50 * e / 1e3,
                        force3D: "auto",
                        ease: punchgs.Power2.easeInOut
                    }), 0), S.add(E)
                })
            }
            if (20 == h) {
                setTimeout(function() {
                    o.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                a.css("z-index"), r.css("z-index");
                if (1 == k) var st = -n.width,
                    rt = 70,
                    ot = "left center -" + n.height / 2;
                else var st = n.width,
                    rt = -70,
                    ot = "right center -" + n.height / 2;
                l.find(".slotslide").each(function(e) {
                    var i = t(this);
                    S.add(punchgs.TweenLite.fromTo(i, C / 1500, {
                        left: st,
                        rotationX: 40,
                        z: -600,
                        opacity: H,
                        top: 0,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: ot,
                        rotationY: rt
                    }, {
                        left: 0,
                        delay: 50 * e / 1e3,
                        ease: punchgs.Power2.easeInOut
                    }), 0), S.add(punchgs.TweenLite.fromTo(i, C / 1e3, {
                        rotationX: 40,
                        z: -600,
                        opacity: H,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: ot,
                        rotationY: rt
                    }, {
                        rotationX: 0,
                        opacity: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: 50 * e / 1e3,
                        ease: punchgs.Power2.easeInOut
                    }), 0), S.add(punchgs.TweenLite.to(i, .1, {
                        opacity: 1,
                        force3D: "auto",
                        delay: 50 * e / 1e3 + C / 2e3
                    }), 0)
                }), o.find(".slotslide").each(function(e) {
                    var i = t(this);
                    if (1 != k) var a = -n.width,
                        r = 70,
                        o = "left center -" + n.height / 2;
                    else var a = n.width,
                        r = -70,
                        o = "right center -" + n.height / 2;
                    S.add(punchgs.TweenLite.fromTo(i, C / 1e3, {
                        opacity: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        left: 0,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: o,
                        rotationY: 0
                    }, {
                        opacity: 1,
                        rotationX: 40,
                        top: 0,
                        z: -600,
                        left: a,
                        force3D: "auto",
                        scale: .8,
                        rotationY: r,
                        delay: 50 * e / 1e3,
                        ease: punchgs.Power2.easeInOut
                    }), 0), S.add(punchgs.TweenLite.to(i, .1, {
                        force3D: "auto",
                        opacity: 0,
                        delay: 50 * e / 1e3 + (C / 1e3 - C / 1e4)
                    }), 0)
                })
            }
            if (21 == h || 25 == h) {
                setTimeout(function() {
                    o.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var rt = (a.css("z-index"), r.css("z-index"), 90),
                    st = -n.width,
                    lt = -rt;
                if (1 == k)
                    if (25 == h) {
                        var ot = "center top 0";
                        rt = n.rotate
                    } else {
                        var ot = "left center 0";
                        lt = n.rotate
                    }
                else if (st = n.width, rt = -90, 25 == h) {
                    var ot = "center bottom 0";
                    lt = -rt, rt = n.rotate
                } else {
                    var ot = "right center 0";
                    lt = n.rotate
                }
                l.find(".slotslide").each(function(e) {
                    var i = t(this);
                    S.add(punchgs.TweenLite.fromTo(i, C / 1e3, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: lt,
                        z: 0,
                        autoAlpha: 0,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: ot,
                        rotationY: rt
                    }, {
                        left: 0,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        autoAlpha: 1,
                        scale: 1,
                        rotationY: 0,
                        force3D: "auto",
                        ease: punchgs.Power3.easeInOut
                    }), 0)
                }), 1 != k ? (st = -n.width, rt = 90, 25 == h ? (ot = "center top 0", lt = -rt, rt = n.rotate) : (ot = "left center 0", lt = n.rotate)) : (st = n.width, rt = -90, 25 == h ? (ot = "center bottom 0", lt = -rt, rt = n.rotate) : (ot = "right center 0", lt = n.rotate)), o.find(".slotslide").each(function(e) {
                    var i = t(this);
                    S.add(punchgs.TweenLite.fromTo(i, C / 1e3, {
                        left: 0,
                        transformStyle: "flat",
                        rotationX: 0,
                        z: 0,
                        autoAlpha: 1,
                        top: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: ot,
                        rotationY: 0
                    }, {
                        left: 0,
                        rotationX: lt,
                        top: 0,
                        z: 0,
                        autoAlpha: 1,
                        force3D: "auto",
                        scale: 1,
                        rotationY: rt,
                        ease: punchgs.Power1.easeInOut
                    }), 0)
                })
            }
            if (23 == h || 24 == h) {
                setTimeout(function() {
                    o.find(".defaultimg").css({
                        opacity: 0
                    })
                }, 100);
                var rt = (a.css("z-index"), r.css("z-index"), -90),
                    H = 1,
                    dt = 0;
                if (1 == k && (rt = 90), 23 == h) {
                    var ot = "center center -" + n.width / 2;
                    H = 0
                } else var ot = "center center " + n.width / 2;
                punchgs.TweenLite.set(i, {
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    perspective: 2500
                }), l.find(".slotslide").each(function(e) {
                    var i = t(this);
                    S.add(punchgs.TweenLite.fromTo(i, C / 1e3, {
                        left: dt,
                        rotationX: n.rotate,
                        force3D: "auto",
                        opacity: H,
                        top: 0,
                        scale: 1,
                        transformPerspective: 600,
                        transformOrigin: ot,
                        rotationY: rt
                    }, {
                        left: 0,
                        rotationX: 0,
                        autoAlpha: 1,
                        top: 0,
                        z: 0,
                        scale: 1,
                        rotationY: 0,
                        delay: 50 * e / 500,
                        ease: punchgs.Power2.easeInOut
                    }), 0)
                }), rt = 90, 1 == k && (rt = -90), o.find(".slotslide").each(function(e) {
                    var i = t(this);
                    S.add(punchgs.TweenLite.fromTo(i, C / 1e3, {
                        left: 0,
                        autoAlpha: 1,
                        rotationX: 0,
                        top: 0,
                        z: 0,
                        scale: 1,
                        force3D: "auto",
                        transformPerspective: 600,
                        transformOrigin: ot,
                        rotationY: 0
                    }, {
                        left: dt,
                        autoAlpha: 1,
                        rotationX: n.rotate,
                        top: 0,
                        scale: 1,
                        rotationY: rt,
                        delay: 50 * e / 500,
                        ease: punchgs.Power2.easeInOut
                    }), 0)
                })
            }
            S.pause(), N(a, n, null, S), punchgs.TweenLite.to(a, .001, {
                autoAlpha: 1
            });
            var ht = {};
            ht.slideIndex = n.next + 1, ht.slide = a, i.trigger("revolution.slide.onchange", ht), setTimeout(function() {
                i.trigger("revolution.slide.onafterswap")
            }, C), i.trigger("revolution.slide.onvideostop")
        },
        O = function(t, e, i, n, a, r, o) {
            punchgs.TweenLite.to(i.find(".defaultimg"), .001, {
                autoAlpha: 1,
                onComplete: function() {
                    b(t, e, a)
                }
            }), a.index() != r.index() && punchgs.TweenLite.to(r, .2, {
                autoAlpha: 0,
                onComplete: function() {
                    b(t, e, r)
                }
            }), e.act = e.next, "thumb" == e.navigationType && et(t), "on" == i.data("kenburns") && V(t, e), t.find(".current-sr-slide-visible").removeClass("current-sr-slide-visible"), a.addClass("current-sr-slide-visible"), "scroll" != e.parallax && "scroll+mouse" != e.parallax && "mouse+scroll" != e.parallax || K(t, e), o.clear()
        },
        A = function(e) {
            var i = e.target.getVideoEmbedCode(),
                n = t("#" + i.split('id="')[1].split('"')[0]),
                a = n.closest(".tp-simpleresponsive"),
                r = n.parent().data("player");
            if (e.data == YT.PlayerState.PLAYING) {
                var o = a.find(".tp-bannertimer"),
                    s = o.data("opt");
                "mute" == n.closest(".tp-caption").data("volume") && r.mute(), s.videoplaying = !0, a.trigger("stoptimer"), a.trigger("revolution.slide.onvideoplay")
            } else {
                var o = a.find(".tp-bannertimer"),
                    s = o.data("opt"); - 1 != e.data && 3 != e.data && (s.videoplaying = !1, a.trigger("starttimer"), a.trigger("revolution.slide.onvideostop")), 0 == e.data && 1 == s.nextslideatend ? s.container.revnext() : (s.videoplaying = !1, a.trigger("starttimer"), a.trigger("revolution.slide.onvideostop"))
            }
        },
        L = function(t, e, i) {
            t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent(e, i, !1)
        },
        D = function(e, i) {
            var n = $f(e),
                a = t("#" + e),
                r = a.closest(".tp-simpleresponsive"),
                o = a.closest(".tp-caption");
            setTimeout(function() {
                n.addEvent("ready", function(e) {
                    i && n.api("play"), n.addEvent("play", function(t) {
                        var e = r.find(".tp-bannertimer"),
                            i = e.data("opt");
                        i.videoplaying = !0, r.trigger("stoptimer"), "mute" == o.data("volume") && n.api("setVolume", "0")
                    }), n.addEvent("finish", function(t) {
                        var e = r.find(".tp-bannertimer"),
                            i = e.data("opt");
                        i.videoplaying = !1, r.trigger("starttimer"), r.trigger("revolution.slide.onvideoplay"), 1 == i.nextslideatend && i.container.revnext()
                    }), n.addEvent("pause", function(t) {
                        var e = r.find(".tp-bannertimer"),
                            i = e.data("opt");
                        i.videoplaying = !1, r.trigger("starttimer"), r.trigger("revolution.slide.onvideostop")
                    }), o.find(".tp-thumb-image").click(function() {
                        punchgs.TweenLite.to(t(this), .3, {
                            autoAlpha: 0,
                            force3D: "auto",
                            ease: punchgs.Power3.easeInOut
                        }), n.api("play")
                    })
                })
            }, 150)
        },
        E = function(t, i) {
            var n = i.width(),
                a = i.height(),
                r = t.data("mediaAspect");
            r == e && (r = 1);
            var o = n / a;
            t.css({
                position: "absolute"
            });
            t.find("video");
            r > o ? punchgs.TweenLite.to(t, 1e-4, {
                width: a * r,
                force3D: "auto",
                top: 0,
                left: 0 - (a * r - n) / 2,
                height: a
            }) : punchgs.TweenLite.to(t, 1e-4, {
                width: n,
                force3D: "auto",
                top: 0 - (n / r - a) / 2,
                left: 0,
                height: n / r
            })
        },
        I = function() {
            var t = new Object;
            return t.x = 0, t.y = 0, t.rotationX = 0, t.rotationY = 0, t.rotationZ = 0, t.scale = 1, t.scaleX = 1, t.scaleY = 1, t.skewX = 0, t.skewY = 0, t.opacity = 0, t.transformOrigin = "center, center", t.transformPerspective = 400, t.rotation = 0, t
        },
        R = function(e, i) {
            var n = i.split(";");
            return t.each(n, function(t, i) {
                i = i.split(":");
                var n = i[0],
                    a = i[1];
                "rotationX" == n && (e.rotationX = parseInt(a, 0)), "rotationY" == n && (e.rotationY = parseInt(a, 0)), "rotationZ" == n && (e.rotationZ = parseInt(a, 0)), "rotationZ" == n && (e.rotation = parseInt(a, 0)), "scaleX" == n && (e.scaleX = parseFloat(a)), "scaleY" == n && (e.scaleY = parseFloat(a)), "opacity" == n && (e.opacity = parseFloat(a)), "skewX" == n && (e.skewX = parseInt(a, 0)), "skewY" == n && (e.skewY = parseInt(a, 0)), "x" == n && (e.x = parseInt(a, 0)), "y" == n && (e.y = parseInt(a, 0)), "z" == n && (e.z = parseInt(a, 0)), "transformOrigin" == n && (e.transformOrigin = a.toString()), "transformPerspective" == n && (e.transformPerspective = parseInt(a, 0))
            }), e
        },
        M = function(e) {
            var i = e.split("animation:"),
                n = new Object;
            n.animation = R(I(), i[1]);
            var a = i[0].split(";");
            return t.each(a, function(t, e) {
                e = e.split(":");
                var i = e[0],
                    a = e[1];
                "typ" == i && (n.typ = a), "speed" == i && (n.speed = parseInt(a, 0) / 1e3), "start" == i && (n.start = parseInt(a, 0) / 1e3), "elementdelay" == i && (n.elementdelay = parseFloat(a)), "ease" == i && (n.ease = a)
            }), n
        },
        N = function(i, n, a, r) {
            function o() {}

            function l() {}
            i.data("ctl") == e && i.data("ctl", new punchgs.TimelineLite);
            var d = i.data("ctl"),
                h = 0,
                c = 0,
                u = i.find(".tp-caption"),
                p = n.container.find(".tp-static-layers").find(".tp-caption");
            d.pause(), t.each(p, function(t, e) {
                u.push(e)
            }), u.each(function(i) {
                var r = a,
                    d = -1,
                    u = t(this);
                if (u.hasClass("tp-static-layer")) {
                    var p = u.data("startslide"),
                        f = u.data("endslide"); - 1 != p && "-1" != p || u.data("startslide", 0), -1 != f && "-1" != f || u.data("endslide", n.slideamount), 0 == p && f == n.slideamount - 1 && u.data("endslide", n.slideamount + 1), p = u.data("startslide"), f = u.data("endslide"), u.hasClass("tp-is-shown") ? d = f == n.next || p > n.next || f < n.next ? 2 : 0 : p <= n.next && f >= n.next || p == n.next || f == n.next ? (u.addClass("tp-is-shown"), d = 1) : d = 0
                }
                h = n.width / 2 - n.startwidth * n.bw / 2;
                var g = n.bw;
                n.bh;
                "on" == n.fullScreen && (c = n.height / 2 - n.startheight * n.bh / 2), ("on" == n.autoHeight || n.minHeight != e && n.minHeight > 0) && (c = n.container.height() / 2 - n.startheight * n.bh / 2), 0 > c && (c = 0);
                var m = 0;
                if (n.width < n.hideCaptionAtLimit && "on" == u.data("captionhidden") ? (u.addClass("tp-hidden-caption"), m = 1) : n.width < n.hideAllCaptionAtLimit || n.width < n.hideAllCaptionAtLilmit ? (u.addClass("tp-hidden-caption"), m = 1) : u.removeClass("tp-hidden-caption"), 0 == m) {
                    if (u.data("linktoslide") == e || u.hasClass("hasclicklistener") || (u.addClass("hasclicklistener"), u.css({
                            cursor: "pointer"
                        }), "no" != u.data("linktoslide") && u.click(function() {
                            var e = t(this),
                                i = e.data("linktoslide");
                            "next" != i && "prev" != i ? (n.container.data("showus", i), n.container.parent().find(".tp-rightarrow").click()) : "next" == i ? n.container.parent().find(".tp-rightarrow").click() : "prev" == i && n.container.parent().find(".tp-leftarrow").click()
                        })), 0 > h && (h = 0), u.hasClass("tp-videolayer") || u.find("iframe").length > 0 || u.find("video").length > 0) {
                        var v = "iframe" + Math.round(1e5 * Math.random() + 1),
                            y = u.data("videowidth"),
                            w = u.data("videoheight"),
                            b = u.data("videoattributes"),
                            _ = u.data("ytid"),
                            x = u.data("vimeoid"),
                            T = u.data("videpreload"),
                            k = u.data("videomp4"),
                            C = u.data("videowebm"),
                            S = u.data("videoogv"),
                            P = u.data("videocontrols"),
                            O = "http",
                            N = "loop" == u.data("videoloop") ? "loop" : "loopandnoslidestop" == u.data("videoloop") ? "loop" : "";
                        if (u.data("thumbimage") != e && u.data("videoposter") == e && u.data("videoposter", u.data("thumbimage")), _ != e && String(_).length > 1 && 0 == u.find("iframe").length && (O = "https", "none" == P && (b = b.replace("controls=1", "controls=0"), -1 == b.toLowerCase().indexOf("controls") && (b += "&controls=0")), u.append('<iframe style="visible:hidden" src="' + O + "://www.youtube.com/embed/" + _ + "?" + b + '" width="' + y + '" height="' + w + '" style="width:' + y + "px;height:" + w + 'px"></iframe>')), x != e && String(x).length > 1 && 0 == u.find("iframe").length && ("https:" === location.protocol && (O = "https"),
                                u.append('<iframe style="visible:hidden" src="' + O + "://player.vimeo.com/video/" + x + "?" + b + '" width="' + y + '" height="' + w + '" style="width:' + y + "px;height:" + w + 'px"></iframe>')), (k != e || C != e) && 0 == u.find("video").length) {
                            "controls" != P && (P = "");
                            var H = '<video style="visible:hidden" class="" ' + N + ' preload="' + T + '" width="' + y + '" height="' + w + '"';
                            u.data("videoposter") != e && u.data("videoposter") != e && (H = H + 'poster="' + u.data("videoposter") + '">'), C != e && "firefox" == z().toLowerCase() && (H = H + '<source src="' + C + '" type="video/webm" />'), k != e && (H = H + '<source src="' + k + '" type="video/mp4" />'), S != e && (H = H + '<source src="' + S + '" type="video/ogg" />'), H += "</video>", u.append(H), "controls" == P && u.append('<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div></div>')
                        }
                        var X = !1;
                        1 != u.data("autoplayonlyfirsttime") && "true" != u.data("autoplayonlyfirsttime") && 1 != u.data("autoplay") || (u.data("autoplay", !0), X = !0), u.find("iframe").each(function() {
                            var i = t(this);
                            if (punchgs.TweenLite.to(i, .1, {
                                    autoAlpha: 1,
                                    zIndex: 0,
                                    transformStyle: "preserve-3d",
                                    z: 0,
                                    rotationX: 0,
                                    force3D: "auto"
                                }), Y()) {
                                var o = i.attr("src");
                                i.attr("src", ""), i.attr("src", o)
                            }
                            if (n.nextslideatend = u.data("nextslideatend"), u.data("videoposter") != e && u.data("videoposter").length > 2 && 1 != u.data("autoplay") && !r && (0 == u.find(".tp-thumb-image").length ? u.append('<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' + u.data("videoposter") + '); background-size:cover"></div>') : punchgs.TweenLite.set(u.find(".tp-thumb-image"), {
                                    autoAlpha: 1
                                })), i.attr("src").toLowerCase().indexOf("youtube") >= 0)
                                if (i.hasClass("HasListener")) {
                                    if (!a) {
                                        var s = u.data("player");
                                        "on" != u.data("forcerewind") || Y() || s.seekTo(0), (!Y() && 1 == u.data("autoplay") || X) && u.data("timerplay", setTimeout(function() {
                                            s.playVideo()
                                        }, u.data("start")))
                                    }
                                } else try {
                                    i.attr("id", v);
                                    var s, l = setInterval(function() {
                                        YT != e && typeof YT.Player != e && "undefined" != typeof YT.Player && (s = new YT.Player(v, {
                                            events: {
                                                onStateChange: A,
                                                onReady: function(i) {
                                                    var n = i.target.getVideoEmbedCode(),
                                                        a = t("#" + n.split('id="')[1].split('"')[0]),
                                                        r = a.closest(".tp-caption"),
                                                        o = r.data("videorate");
                                                    r.data("videostart");
                                                    o != e && i.target.setPlaybackRate(parseFloat(o)), (!Y() && 1 == r.data("autoplay") || X) && r.data("timerplay", setTimeout(function() {
                                                        i.target.playVideo()
                                                    }, r.data("start"))), r.find(".tp-thumb-image").click(function() {
                                                        punchgs.TweenLite.to(t(this), .3, {
                                                            autoAlpha: 0,
                                                            force3D: "auto",
                                                            ease: punchgs.Power3.easeInOut
                                                        }), Y() || s.playVideo()
                                                    })
                                                }
                                            }
                                        })), i.addClass("HasListener"), u.data("player", s), clearInterval(l)
                                    }, 100)
                                } catch (d) {} else if (i.attr("src").toLowerCase().indexOf("vimeo") >= 0)
                                    if (i.hasClass("HasListener")) {
                                        if (!(a || Y() || 1 != u.data("autoplay") && "on" != u.data("forcerewind"))) {
                                            var i = u.find("iframe"),
                                                h = i.attr("id"),
                                                c = $f(h);
                                            "on" == u.data("forcerewind") && c.api("seekTo", 0), u.data("timerplay", setTimeout(function() {
                                                1 == u.data("autoplay") && c.api("play")
                                            }, u.data("start")))
                                        }
                                    } else {
                                        i.addClass("HasListener"), i.attr("id", v);
                                        for (var p, f = i.attr("src"), g = {}, m = f, y = /([^&=]+)=([^&]*)/g; p = y.exec(m);) g[decodeURIComponent(p[1])] = decodeURIComponent(p[2]);
                                        f = g.player_id != e ? f.replace(g.player_id, v) : f + "&player_id=" + v;
                                        try {
                                            f = f.replace("api=0", "api=1")
                                        } catch (d) {}
                                        f += "&api=1", i.attr("src", f);
                                        var s = u.find("iframe")[0],
                                            w = setInterval(function() {
                                                $f != e && typeof $f(v).api != e && "undefined" != typeof $f(v).api && ($f(s).addEvent("ready", function() {
                                                    D(v, X)
                                                }), clearInterval(w))
                                            }, 100)
                                    }
                        }), (Y() && 1 == u.data("disablevideoonmobile") || s(8)) && u.find("video").remove(), u.find("video").length > 0 && u.find("video").each(function(i) {
                            var a = this,
                                r = t(this);
                            r.parent().hasClass("html5vid") || r.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>');
                            var o = r.parent();
                            L(a, "loadedmetadata", function(t) {
                                t.data("metaloaded", 1)
                            }(o)), clearInterval(o.data("interval")), o.data("interval", setInterval(function() {
                                if (1 == o.data("metaloaded") || NaN != a.duration) {
                                    if (clearInterval(o.data("interval")), !o.hasClass("HasListener")) {
                                        o.addClass("HasListener"), "none" != u.data("dottedoverlay") && u.data("dottedoverlay") != e && 1 != u.find(".tp-dottedoverlay").length && o.append('<div class="tp-dottedoverlay ' + u.data("dottedoverlay") + '"></div>'), r.attr("control") == e && (0 == o.find(".tp-video-play-button").length && o.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>'), o.find("video, .tp-poster, .tp-video-play-button").click(function() {
                                            o.hasClass("videoisplaying") ? a.pause() : a.play()
                                        })), (1 == u.data("forcecover") || u.hasClass("fullscreenvideo")) && (1 == u.data("forcecover") && (E(o, n.container), o.addClass("fullcoveredvideo"), u.addClass("fullcoveredvideo")), o.css({
                                            width: "100%",
                                            height: "100%"
                                        }));
                                        var t = u.find(".tp-vid-play-pause")[0],
                                            i = u.find(".tp-vid-mute")[0],
                                            s = u.find(".tp-vid-full-screen")[0],
                                            l = u.find(".tp-seek-bar")[0],
                                            d = u.find(".tp-volume-bar")[0];
                                        t != e && (L(t, "click", function() {
                                            1 == a.paused ? a.play() : a.pause()
                                        }), L(i, "click", function() {
                                            0 == a.muted ? (a.muted = !0, i.innerHTML = "Unmute") : (a.muted = !1, i.innerHTML = "Mute")
                                        }), L(s, "click", function() {
                                            a.requestFullscreen ? a.requestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
                                        }), L(l, "change", function() {
                                            var t = a.duration * (l.value / 100);
                                            a.currentTime = t
                                        }), L(a, "timeupdate", function() {
                                            var t = 100 / a.duration * a.currentTime;
                                            l.value = t
                                        }), L(l, "mousedown", function() {
                                            a.pause()
                                        }), L(l, "mouseup", function() {
                                            a.play()
                                        }), L(d, "change", function() {
                                            a.volume = d.value
                                        })), L(a, "play", function() {
                                            "mute" == u.data("volume") && (a.muted = !0), o.addClass("videoisplaying"), "loopandnoslidestop" == u.data("videoloop") ? (n.videoplaying = !1, n.container.trigger("starttimer"), n.container.trigger("revolution.slide.onvideostop")) : (n.videoplaying = !0, n.container.trigger("stoptimer"), n.container.trigger("revolution.slide.onvideoplay"));
                                            var t = u.find(".tp-vid-play-pause")[0],
                                                i = u.find(".tp-vid-mute")[0];
                                            t != e && (t.innerHTML = "Pause"), i != e && a.muted && (i.innerHTML = "Unmute")
                                        }), L(a, "pause", function() {
                                            o.removeClass("videoisplaying"), n.videoplaying = !1, n.container.trigger("starttimer"), n.container.trigger("revolution.slide.onvideostop");
                                            var t = u.find(".tp-vid-play-pause")[0];
                                            t != e && (t.innerHTML = "Play")
                                        }), L(a, "ended", function() {
                                            o.removeClass("videoisplaying"), n.videoplaying = !1, n.container.trigger("starttimer"), n.container.trigger("revolution.slide.onvideostop"), 1 == n.nextslideatend && n.container.revnext()
                                        })
                                    }
                                    var h = !1;
                                    1 != u.data("autoplayonlyfirsttime") && "true" != u.data("autoplayonlyfirsttime") || (h = !0);
                                    var c = 16 / 9;
                                    if ("4:3" == u.data("aspectratio") && (c = 4 / 3), o.data("mediaAspect", c), 1 == o.closest(".tp-caption").data("forcecover") && (E(o, n.container), o.addClass("fullcoveredvideo")), r.css({
                                            display: "block"
                                        }), n.nextslideatend = u.data("nextslideatend"), 1 != u.data("autoplay") && 1 != h || ("loopandnoslidestop" == u.data("videoloop") ? (n.videoplaying = !1, n.container.trigger("starttimer"), n.container.trigger("revolution.slide.onvideostop")) : (n.videoplaying = !0, n.container.trigger("stoptimer"), n.container.trigger("revolution.slide.onvideoplay")), "on" != u.data("forcerewind") || o.hasClass("videoisplaying") || a.currentTime > 0 && (a.currentTime = 0), "mute" == u.data("volume") && (a.muted = !0), o.data("timerplay", setTimeout(function() {
                                            "on" != u.data("forcerewind") || o.hasClass("videoisplaying") || a.currentTime > 0 && (a.currentTime = 0), "mute" == u.data("volume") && (a.muted = !0), a.play()
                                        }, 10 + u.data("start")))), o.data("ww") == e && o.data("ww", r.attr("width")), o.data("hh") == e && o.data("hh", r.attr("height")), !u.hasClass("fullscreenvideo") && 1 == u.data("forcecover")) try {
                                        o.width(o.data("ww") * n.bw), o.height(o.data("hh") * n.bh)
                                    } catch (p) {}
                                    clearInterval(o.data("interval"))
                                }
                            }), 100)
                        }), 1 == u.data("autoplay") && (setTimeout(function() {
                            "loopandnoslidestop" != u.data("videoloop") && (n.videoplaying = !0, n.container.trigger("stoptimer"))
                        }, 200), "loopandnoslidestop" != u.data("videoloop") && (n.videoplaying = !0, n.container.trigger("stoptimer")), 1 != u.data("autoplayonlyfirsttime") && "true" != u.data("autoplayonlyfirsttime") || (u.data("autoplay", !1), u.data("autoplayonlyfirsttime", !1)))
                    }
                    var B = 0,
                        U = 0;
                    if (u.find("img").length > 0) {
                        var V = u.find("img");
                        0 == V.width() && V.css({
                            width: "auto"
                        }), 0 == V.height() && V.css({
                            height: "auto"
                        }), V.data("ww") == e && V.width() > 0 && V.data("ww", V.width()), V.data("hh") == e && V.height() > 0 && V.data("hh", V.height());
                        var Q = V.data("ww"),
                            Z = V.data("hh");
                        Q == e && (Q = 0), Z == e && (Z = 0), V.width(Q * n.bw), V.height(Z * n.bh), B = V.width(), U = V.height()
                    } else if (u.find("iframe").length > 0 || u.find("video").length > 0) {
                        var G = !1,
                            V = u.find("iframe");
                        0 == V.length && (V = u.find("video"), G = !0), V.css({
                            display: "block"
                        }), u.data("ww") == e && u.data("ww", V.width()), u.data("hh") == e && u.data("hh", V.height());
                        var Q = u.data("ww"),
                            Z = u.data("hh"),
                            J = u;
                        J.data("fsize") == e && J.data("fsize", parseInt(J.css("font-size"), 0) || 0), J.data("pt") == e && J.data("pt", parseInt(J.css("paddingTop"), 0) || 0), J.data("pb") == e && J.data("pb", parseInt(J.css("paddingBottom"), 0) || 0), J.data("pl") == e && J.data("pl", parseInt(J.css("paddingLeft"), 0) || 0), J.data("pr") == e && J.data("pr", parseInt(J.css("paddingRight"), 0) || 0), J.data("mt") == e && J.data("mt", parseInt(J.css("marginTop"), 0) || 0), J.data("mb") == e && J.data("mb", parseInt(J.css("marginBottom"), 0) || 0), J.data("ml") == e && J.data("ml", parseInt(J.css("marginLeft"), 0) || 0), J.data("mr") == e && J.data("mr", parseInt(J.css("marginRight"), 0) || 0), J.data("bt") == e && J.data("bt", parseInt(J.css("borderTop"), 0) || 0), J.data("bb") == e && J.data("bb", parseInt(J.css("borderBottom"), 0) || 0), J.data("bl") == e && J.data("bl", parseInt(J.css("borderLeft"), 0) || 0), J.data("br") == e && J.data("br", parseInt(J.css("borderRight"), 0) || 0), J.data("lh") == e && J.data("lh", parseInt(J.css("lineHeight"), 0) || 0), "auto" == J.data("lh") && J.data("lh", J.data("fsize") + 4);
                        var K = n.width,
                            tt = n.height;
                        if (K > n.startwidth && (K = n.startwidth), tt > n.startheight && (tt = n.startheight), u.hasClass("fullscreenvideo")) {
                            h = 0, c = 0, u.data("x", 0), u.data("y", 0);
                            var et = n.height;
                            "on" == n.autoHeight && (et = n.container.height()), u.css({
                                width: n.width,
                                height: et
                            })
                        } else u.css({
                            "font-size": J.data("fsize") * n.bw + "px",
                            "padding-top": J.data("pt") * n.bh + "px",
                            "padding-bottom": J.data("pb") * n.bh + "px",
                            "padding-left": J.data("pl") * n.bw + "px",
                            "padding-right": J.data("pr") * n.bw + "px",
                            "margin-top": J.data("mt") * n.bh + "px",
                            "margin-bottom": J.data("mb") * n.bh + "px",
                            "margin-left": J.data("ml") * n.bw + "px",
                            "margin-right": J.data("mr") * n.bw + "px",
                            "border-top": J.data("bt") * n.bh + "px",
                            "border-bottom": J.data("bb") * n.bh + "px",
                            "border-left": J.data("bl") * n.bw + "px",
                            "border-right": J.data("br") * n.bw + "px",
                            "line-height": J.data("lh") * n.bh + "px",
                            height: Z * n.bh + "px"
                        });
                        0 == G ? (V.width(Q * n.bw), V.height(Z * n.bh)) : 1 == u.data("forcecover") || u.hasClass("fullscreenvideo") || (V.width(Q * n.bw), V.height(Z * n.bh)), B = V.width(), U = V.height()
                    } else {
                        u.find(".tp-resizeme, .tp-resizeme *").each(function() {
                            $(t(this), n)
                        }), u.hasClass("tp-resizeme") && u.find("*").each(function() {
                            $(t(this), n)
                        }), $(u, n), U = u.outerHeight(!0), B = u.outerWidth(!0);
                        var it = u.outerHeight(),
                            nt = u.css("backgroundColor");
                        u.find(".frontcorner").css({
                            borderWidth: it + "px",
                            left: 0 - it + "px",
                            borderRight: "0px solid transparent",
                            borderTopColor: nt
                        }), u.find(".frontcornertop").css({
                            borderWidth: it + "px",
                            left: 0 - it + "px",
                            borderRight: "0px solid transparent",
                            borderBottomColor: nt
                        }), u.find(".backcorner").css({
                            borderWidth: it + "px",
                            right: 0 - it + "px",
                            borderLeft: "0px solid transparent",
                            borderBottomColor: nt
                        }), u.find(".backcornertop").css({
                            borderWidth: it + "px",
                            right: 0 - it + "px",
                            borderLeft: "0px solid transparent",
                            borderTopColor: nt
                        })
                    }
                    "on" == n.fullScreenAlignForce && (h = 0, c = 0), u.data("voffset") == e && u.data("voffset", 0), u.data("hoffset") == e && u.data("hoffset", 0);
                    var at = u.data("voffset") * g,
                        rt = u.data("hoffset") * g,
                        ot = n.startwidth * g,
                        st = n.startheight * g;
                    "on" == n.fullScreenAlignForce && (ot = n.container.width(), st = n.container.height()), "center" != u.data("x") && "center" != u.data("xcenter") || (u.data("xcenter", "center"), u.data("x", ot / 2 - u.outerWidth(!0) / 2 + rt)), "left" != u.data("x") && "left" != u.data("xleft") || (u.data("xleft", "left"), u.data("x", 0 / g + rt)), "right" != u.data("x") && "right" != u.data("xright") || (u.data("xright", "right"), u.data("x", (ot - u.outerWidth(!0) + rt) / g)), "center" != u.data("y") && "center" != u.data("ycenter") || (u.data("ycenter", "center"), u.data("y", st / 2 - u.outerHeight(!0) / 2 + at)), "top" != u.data("y") && "top" != u.data("ytop") || (u.data("ytop", "top"), u.data("y", 0 / n.bh + at)), "bottom" != u.data("y") && "bottom" != u.data("ybottom") || (u.data("ybottom", "bottom"), u.data("y", (st - u.outerHeight(!0) + at) / g)), u.data("start") == e && u.data("start", 1e3);
                    var lt = u.data("easing");
                    lt == e && (lt = "punchgs.Power1.easeOut");
                    var dt = u.data("start") / 1e3,
                        ht = u.data("speed") / 1e3;
                    if ("center" == u.data("x") || "center" == u.data("xcenter")) var ct = u.data("x") + h;
                    else var ct = g * u.data("x") + h;
                    if ("center" == u.data("y") || "center" == u.data("ycenter")) var ut = u.data("y") + c;
                    else var ut = n.bh * u.data("y") + c;
                    if (punchgs.TweenLite.set(u, {
                            top: ut,
                            left: ct,
                            overwrite: "auto"
                        }), 0 == d && (r = !0), u.data("timeline") == e || r || (2 != d && u.data("timeline").gotoAndPlay(0), r = !0), !r) {
                        u.data("timeline") != e;
                        var pt = new punchgs.TimelineLite({
                            smoothChildTiming: !0,
                            onStart: l
                        });
                        pt.pause(), "on" == n.fullScreenAlignForce;
                        var ft = u;
                        u.data("mySplitText") != e && u.data("mySplitText").revert(), "chars" != u.data("splitin") && "words" != u.data("splitin") && "lines" != u.data("splitin") && "chars" != u.data("splitout") && "words" != u.data("splitout") && "lines" != u.data("splitout") || (u.find("a").length > 0 ? u.data("mySplitText", new punchgs.SplitText(u.find("a"), {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })) : u.find(".tp-layer-inner-rotation").length > 0 ? u.data("mySplitText", new punchgs.SplitText(u.find(".tp-layer-inner-rotation"), {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })) : u.data("mySplitText", new punchgs.SplitText(u, {
                            type: "lines,words,chars",
                            charsClass: "tp-splitted",
                            wordsClass: "tp-splitted",
                            linesClass: "tp-splitted"
                        })), u.addClass("splitted")), "chars" == u.data("splitin") && (ft = u.data("mySplitText").chars), "words" == u.data("splitin") && (ft = u.data("mySplitText").words), "lines" == u.data("splitin") && (ft = u.data("mySplitText").lines);
                        var gt = I(),
                            mt = I();
                        u.data("repeat") != e && (repeatV = u.data("repeat")), u.data("yoyo") != e && (yoyoV = u.data("yoyo")), u.data("repeatdelay") != e && (repeatdelayV = u.data("repeatdelay"));
                        var vt = u.attr("class");
                        vt.match("customin") ? gt = R(gt, u.data("customin")) : vt.match("randomrotate") ? (gt.scale = 3 * Math.random() + 1, gt.rotation = Math.round(200 * Math.random() - 100), gt.x = Math.round(200 * Math.random() - 100), gt.y = Math.round(200 * Math.random() - 100)) : vt.match("lfr") || vt.match("skewfromright") ? gt.x = 15 + n.width : vt.match("lfl") || vt.match("skewfromleft") ? gt.x = -15 - B : vt.match("sfl") || vt.match("skewfromleftshort") ? gt.x = -50 : vt.match("sfr") || vt.match("skewfromrightshort") ? gt.x = 50 : vt.match("lft") ? gt.y = -25 - U : vt.match("lfb") ? gt.y = 25 + n.height : vt.match("sft") ? gt.y = -50 : vt.match("sfb") && (gt.y = 50), vt.match("skewfromright") || u.hasClass("skewfromrightshort") ? gt.skewX = -85 : (vt.match("skewfromleft") || u.hasClass("skewfromleftshort")) && (gt.skewX = 85), (vt.match("fade") || vt.match("sft") || vt.match("sfl") || vt.match("sfb") || vt.match("skewfromleftshort") || vt.match("sfr") || vt.match("skewfromrightshort")) && (gt.opacity = 0), "safari" == z().toLowerCase();
                        var yt = u.data("elementdelay") == e ? 0 : u.data("elementdelay");
                        mt.ease = gt.ease = u.data("easing") == e ? punchgs.Power1.easeInOut : u.data("easing"), gt.data = new Object, gt.data.oldx = gt.x, gt.data.oldy = gt.y, mt.data = new Object, mt.data.oldx = mt.x, mt.data.oldy = mt.y, gt.x = gt.x * g, gt.y = gt.y * g;
                        var wt = new punchgs.TimelineLite;
                        if (2 != d)
                            if (vt.match("customin")) ft != u && pt.add(punchgs.TweenLite.set(u, {
                                force3D: "auto",
                                opacity: 1,
                                scaleX: 1,
                                scaleY: 1,
                                rotationX: 0,
                                rotationY: 0,
                                rotationZ: 0,
                                skewX: 0,
                                skewY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                visibility: "visible",
                                delay: 0,
                                overwrite: "all"
                            })), gt.visibility = "hidden", mt.visibility = "visible", mt.overwrite = "all", mt.opacity = 1, mt.onComplete = o(), mt.delay = dt, mt.force3D = "auto", pt.add(wt.staggerFromTo(ft, ht, gt, mt, yt), "frame0");
                            else if (gt.visibility = "visible", gt.transformPerspective = 600, ft != u && pt.add(punchgs.TweenLite.set(u, {
                                force3D: "auto",
                                opacity: 1,
                                scaleX: 1,
                                scaleY: 1,
                                rotationX: 0,
                                rotationY: 0,
                                rotationZ: 0,
                                skewX: 0,
                                skewY: 0,
                                z: 0,
                                x: 0,
                                y: 0,
                                visibility: "visible",
                                delay: 0,
                                overwrite: "all"
                            })), mt.visibility = "visible", mt.delay = dt, mt.onComplete = o(), mt.opacity = 1, mt.force3D = "auto", vt.match("randomrotate") && ft != u)
                            for (var i = 0; i < ft.length; i++) {
                                var bt = new Object,
                                    _t = new Object;
                                t.extend(bt, gt), t.extend(_t, mt), gt.scale = 3 * Math.random() + 1, gt.rotation = Math.round(200 * Math.random() - 100), gt.x = Math.round(200 * Math.random() - 100), gt.y = Math.round(200 * Math.random() - 100), 0 != i && (_t.delay = dt + i * yt), pt.append(punchgs.TweenLite.fromTo(ft[i], ht, bt, _t), "frame0")
                            } else pt.add(wt.staggerFromTo(ft, ht, gt, mt, yt), "frame0");
                        u.data("timeline", pt);
                        new Array;
                        if (u.data("frames") != e) {
                            var xt = u.data("frames");
                            xt = xt.replace(/\s+/g, ""), xt = xt.replace("{", "");
                            var Tt = xt.split("}");
                            t.each(Tt, function(t, e) {
                                if (e.length > 0) {
                                    var i = M(e);
                                    W(u, n, i, "frame" + (t + 10), g)
                                }
                            })
                        }
                        pt = u.data("timeline"), u.data("end") == e || -1 != d && 2 != d ? -1 == d || 2 == d ? q(u, n, 999999, gt, "frame99", g) : q(u, n, 200, gt, "frame99", g) : q(u, n, u.data("end") / 1e3, gt, "frame99", g), pt = u.data("timeline"), u.data("timeline", pt), j(u, g), pt.resume()
                    }
                }
                if (r && (F(u), j(u, g), u.data("timeline") != e)) {
                    var kt = u.data("timeline").getTweensOf();
                    t.each(kt, function(t, i) {
                        if (i.vars.data != e) {
                            var n = i.vars.data.oldx * g,
                                a = i.vars.data.oldy * g;
                            if (1 != i.progress() && 0 != i.progress()) try {
                                i.vars.x = n, i.vary.y = a
                            } catch (r) {} else 1 == i.progress() && punchgs.TweenLite.set(i.target, {
                                x: n,
                                y: a
                            })
                        }
                    })
                }
            });
            var f = t("body").find("#" + n.container.attr("id")).find(".tp-bannertimer");
            f.data("opt", n), r != e && setTimeout(function() {
                r.resume()
            }, 30)
        },
        z = function() {
            var t, e = navigator.appName,
                i = navigator.userAgent,
                n = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return n && null != (t = i.match(/version\/([\.\d]+)/i)) && (n[2] = t[1]), n = n ? [n[1], n[2]] : [e, navigator.appVersion, "-?"], n[0]
        },
        $ = function(t, i) {
            t.data("fsize") == e && t.data("fsize", parseInt(t.css("font-size"), 0) || 0), t.data("pt") == e && t.data("pt", parseInt(t.css("paddingTop"), 0) || 0), t.data("pb") == e && t.data("pb", parseInt(t.css("paddingBottom"), 0) || 0), t.data("pl") == e && t.data("pl", parseInt(t.css("paddingLeft"), 0) || 0), t.data("pr") == e && t.data("pr", parseInt(t.css("paddingRight"), 0) || 0), t.data("mt") == e && t.data("mt", parseInt(t.css("marginTop"), 0) || 0), t.data("mb") == e && t.data("mb", parseInt(t.css("marginBottom"), 0) || 0), t.data("ml") == e && t.data("ml", parseInt(t.css("marginLeft"), 0) || 0), t.data("mr") == e && t.data("mr", parseInt(t.css("marginRight"), 0) || 0), t.data("bt") == e && t.data("bt", parseInt(t.css("borderTopWidth"), 0) || 0), t.data("bb") == e && t.data("bb", parseInt(t.css("borderBottomWidth"), 0) || 0), t.data("bl") == e && t.data("bl", parseInt(t.css("borderLeftWidth"), 0) || 0), t.data("br") == e && t.data("br", parseInt(t.css("borderRightWidth"), 0) || 0), t.data("ls") == e && t.data("ls", parseInt(t.css("letterSpacing"), 0) || 0), t.data("lh") == e && t.data("lh", parseInt(t.css("lineHeight"), 0) || "auto"), t.data("minwidth") == e && t.data("minwidth", parseInt(t.css("minWidth"), 0) || 0), t.data("minheight") == e && t.data("minheight", parseInt(t.css("minHeight"), 0) || 0), t.data("maxwidth") == e && t.data("maxwidth", parseInt(t.css("maxWidth"), 0) || "none"), t.data("maxheight") == e && t.data("maxheight", parseInt(t.css("maxHeight"), 0) || "none"), t.data("wii") == e && t.data("wii", parseInt(t.css("width"), 0) || 0), t.data("hii") == e && t.data("hii", parseInt(t.css("height"), 0) || 0), t.data("wan") == e && t.data("wan", t.css("-webkit-transition")), t.data("moan") == e && t.data("moan", t.css("-moz-animation-transition")), t.data("man") == e && t.data("man", t.css("-ms-animation-transition")), t.data("ani") == e && t.data("ani", t.css("transition")), "auto" == t.data("lh") && t.data("lh", t.data("fsize") + 4), t.hasClass("tp-splitted") || (t.css("-webkit-transition", "none"), t.css("-moz-transition", "none"), t.css("-ms-transition", "none"), t.css("transition", "none"), punchgs.TweenLite.set(t, {
                fontSize: Math.round(t.data("fsize") * i.bw) + "px",
                letterSpacing: Math.floor(t.data("ls") * i.bw) + "px",
                paddingTop: Math.round(t.data("pt") * i.bh) + "px",
                paddingBottom: Math.round(t.data("pb") * i.bh) + "px",
                paddingLeft: Math.round(t.data("pl") * i.bw) + "px",
                paddingRight: Math.round(t.data("pr") * i.bw) + "px",
                marginTop: t.data("mt") * i.bh + "px",
                marginBottom: t.data("mb") * i.bh + "px",
                marginLeft: t.data("ml") * i.bw + "px",
                marginRight: t.data("mr") * i.bw + "px",
                borderTopWidth: Math.round(t.data("bt") * i.bh) + "px",
                borderBottomWidth: Math.round(t.data("bb") * i.bh) + "px",
                borderLeftWidth: Math.round(t.data("bl") * i.bw) + "px",
                borderRightWidth: Math.round(t.data("br") * i.bw) + "px",
                lineHeight: Math.round(t.data("lh") * i.bh) + "px",
                minWidth: t.data("minwidth") * i.bw + "px",
                minHeight: t.data("minheight") * i.bh + "px",
                overwrite: "auto"
            }), setTimeout(function() {
                t.css("-webkit-transition", t.data("wan")), t.css("-moz-transition", t.data("moan")), t.css("-ms-transition", t.data("man")), t.css("transition", t.data("ani"))
            }, 30), "none" != t.data("maxheight") && t.css({
                maxHeight: t.data("maxheight") * i.bh + "px"
            }), "none" != t.data("maxwidth") && t.css({
                maxWidth: t.data("maxwidth") * i.bw + "px"
            }))
        },
        j = function(i, n) {
            i.find(".rs-pendulum").each(function() {
                var i = t(this);
                if (i.data("timeline") == e) {
                    i.data("timeline", new punchgs.TimelineLite);
                    var a = i.data("startdeg") == e ? -20 : i.data("startdeg"),
                        r = i.data("enddeg") == e ? 20 : i.data("enddeg"),
                        o = i.data("speed") == e ? 2 : i.data("speed"),
                        s = i.data("origin") == e ? "50% 50%" : i.data("origin"),
                        l = i.data("easing") == e ? punchgs.Power2.easeInOut : i.data("ease");
                    a *= n, r *= n, i.data("timeline").append(new punchgs.TweenLite.fromTo(i, o, {
                        force3D: "auto",
                        rotation: a,
                        transformOrigin: s
                    }, {
                        rotation: r,
                        ease: l
                    })), i.data("timeline").append(new punchgs.TweenLite.fromTo(i, o, {
                        force3D: "auto",
                        rotation: r,
                        transformOrigin: s
                    }, {
                        rotation: a,
                        ease: l,
                        onComplete: function() {
                            i.data("timeline").restart()
                        }
                    }))
                }
            }), i.find(".rs-rotate").each(function() {
                var i = t(this);
                if (i.data("timeline") == e) {
                    i.data("timeline", new punchgs.TimelineLite);
                    var a = i.data("startdeg") == e ? 0 : i.data("startdeg"),
                        r = i.data("enddeg") == e ? 360 : i.data("enddeg");
                    speed = i.data("speed") == e ? 2 : i.data("speed"), origin = i.data("origin") == e ? "50% 50%" : i.data("origin"), easing = i.data("easing") == e ? punchgs.Power2.easeInOut : i.data("easing"), a *= n, r *= n, i.data("timeline").append(new punchgs.TweenLite.fromTo(i, speed, {
                        force3D: "auto",
                        rotation: a,
                        transformOrigin: origin
                    }, {
                        rotation: r,
                        ease: easing,
                        onComplete: function() {
                            i.data("timeline").restart()
                        }
                    }))
                }
            }), i.find(".rs-slideloop").each(function() {
                var i = t(this);
                if (i.data("timeline") == e) {
                    i.data("timeline", new punchgs.TimelineLite);
                    var a = i.data("xs") == e ? 0 : i.data("xs"),
                        r = i.data("ys") == e ? 0 : i.data("ys"),
                        o = i.data("xe") == e ? 0 : i.data("xe"),
                        s = i.data("ye") == e ? 0 : i.data("ye"),
                        l = i.data("speed") == e ? 2 : i.data("speed"),
                        d = i.data("easing") == e ? punchgs.Power2.easeInOut : i.data("easing");
                    a *= n, r *= n, o *= n, s *= n, i.data("timeline").append(new punchgs.TweenLite.fromTo(i, l, {
                        force3D: "auto",
                        x: a,
                        y: r
                    }, {
                        x: o,
                        y: s,
                        ease: d
                    })), i.data("timeline").append(new punchgs.TweenLite.fromTo(i, l, {
                        force3D: "auto",
                        x: o,
                        y: s
                    }, {
                        x: a,
                        y: r,
                        onComplete: function() {
                            i.data("timeline").restart()
                        }
                    }))
                }
            }), i.find(".rs-pulse").each(function() {
                var i = t(this);
                if (i.data("timeline") == e) {
                    i.data("timeline", new punchgs.TimelineLite);
                    var n = i.data("zoomstart") == e ? 0 : i.data("zoomstart"),
                        a = i.data("zoomend") == e ? 0 : i.data("zoomend"),
                        r = i.data("speed") == e ? 2 : i.data("speed"),
                        o = i.data("easing") == e ? punchgs.Power2.easeInOut : i.data("easing");
                    i.data("timeline").append(new punchgs.TweenLite.fromTo(i, r, {
                        force3D: "auto",
                        scale: n
                    }, {
                        scale: a,
                        ease: o
                    })), i.data("timeline").append(new punchgs.TweenLite.fromTo(i, r, {
                        force3D: "auto",
                        scale: a
                    }, {
                        scale: n,
                        onComplete: function() {
                            i.data("timeline").restart()
                        }
                    }))
                }
            }), i.find(".rs-wave").each(function() {
                var i = t(this);
                if (i.data("timeline") == e) {
                    i.data("timeline", new punchgs.TimelineLite);
                    var a = i.data("angle") == e ? 10 : i.data("angle"),
                        r = i.data("radius") == e ? 10 : i.data("radius"),
                        o = i.data("speed") == e ? -20 : i.data("speed");
                    i.data("origin") == e ? -20 : i.data("origin");
                    a *= n, r *= n;
                    var s = {
                        a: 0,
                        ang: a,
                        element: i,
                        unit: r
                    };
                    i.data("timeline").append(new punchgs.TweenLite.fromTo(s, o, {
                        a: 360
                    }, {
                        a: 0,
                        force3D: "auto",
                        ease: punchgs.Linear.easeNone,
                        onUpdate: function() {
                            var t = s.a * (Math.PI / 180);
                            punchgs.TweenLite.to(s.element, .1, {
                                force3D: "auto",
                                x: Math.cos(t) * s.unit,
                                y: s.unit * (1 - Math.sin(t))
                            })
                        },
                        onComplete: function() {
                            i.data("timeline").restart()
                        }
                    }))
                }
            })
        },
        F = function(i) {
            i.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
                var i = t(this);
                i.data("timeline") != e && (i.data("timeline").pause(), i.data("timeline", null))
            })
        },
        H = function(i, n) {
            var a = 0,
                r = i.find(".tp-caption"),
                o = n.container.find(".tp-static-layers").find(".tp-caption");
            return t.each(o, function(t, e) {
                r.push(e)
            }), r.each(function(i) {
                var r = -1,
                    o = t(this);
                if (o.hasClass("tp-static-layer") && (-1 != o.data("startslide") && "-1" != o.data("startslide") || o.data("startslide", 0), -1 != o.data("endslide") && "-1" != o.data("endslide") || o.data("endslide", n.slideamount), o.hasClass("tp-is-shown") ? o.data("startslide") > n.next || o.data("endslide") < n.next ? (r = 2, o.removeClass("tp-is-shown")) : r = 0 : r = 2), 0 != r) {
                    if (F(o), o.find("iframe").length > 0) {
                        punchgs.TweenLite.to(o.find("iframe"), .2, {
                            autoAlpha: 0
                        }), Y() && o.find("iframe").remove();
                        try {
                            var s = o.find("iframe"),
                                l = s.attr("id"),
                                d = $f(l);
                            d.api("pause"), clearTimeout(o.data("timerplay"))
                        } catch (h) {}
                        try {
                            var c = o.data("player");
                            c.stopVideo(), clearTimeout(o.data("timerplay"))
                        } catch (h) {}
                    }
                    if (o.find("video").length > 0) try {
                        o.find("video").each(function(e) {
                            var i = t(this).parent();
                            i.attr("id");
                            clearTimeout(i.data("timerplay"));
                            var n = this;
                            n.pause()
                        })
                    } catch (h) {}
                    try {
                        var u = o.data("timeline"),
                            p = u.getLabelTime("frame99"),
                            f = u.time();
                        if (p > f) {
                            var g = u.getTweensOf(o);
                            if (t.each(g, function(t, e) {
                                    0 != t && e.pause()
                                }), 0 != o.css("opacity")) {
                                var m = o.data("endspeed") == e ? o.data("speed") : o.data("endspeed");
                                m > a && (a = m), u.play("frame99")
                            } else u.progress(1, !1)
                        }
                    } catch (h) {}
                }
            }), a
        },
        W = function(t, i, n, a, r) {
            var o = t.data("timeline"),
                s = new punchgs.TimelineLite,
                l = t;
            "chars" == n.typ ? l = t.data("mySplitText").chars : "words" == n.typ ? l = t.data("mySplitText").words : "lines" == n.typ && (l = t.data("mySplitText").lines), n.animation.ease = n.ease, n.animation.rotationZ != e && (n.animation.rotation = n.animation.rotationZ), n.animation.data = new Object, n.animation.data.oldx = n.animation.x, n.animation.data.oldy = n.animation.y, n.animation.x = n.animation.x * r, n.animation.y = n.animation.y * r, o.add(s.staggerTo(l, n.speed, n.animation, n.elementdelay), n.start), o.addLabel(a, n.start), t.data("timeline", o)
        },
        q = function(t, i, n, a, r, o) {
            var s = t.data("timeline"),
                l = new punchgs.TimelineLite,
                d = I(),
                h = t.data("endspeed") == e ? t.data("speed") : t.data("endspeed"),
                c = t.attr("class");
            if (d.ease = t.data("endeasing") == e ? punchgs.Power1.easeInOut : t.data("endeasing"), h /= 1e3, c.match("ltr") || c.match("ltl") || c.match("str") || c.match("stl") || c.match("ltt") || c.match("ltb") || c.match("stt") || c.match("stb") || c.match("skewtoright") || c.match("skewtorightshort") || c.match("skewtoleft") || c.match("skewtoleftshort") || c.match("fadeout") || c.match("randomrotateout")) {
                c.match("skewtoright") || c.match("skewtorightshort") ? d.skewX = 35 : (c.match("skewtoleft") || c.match("skewtoleftshort")) && (d.skewX = -35), c.match("ltr") || c.match("skewtoright") ? d.x = i.width + 60 : c.match("ltl") || c.match("skewtoleft") ? d.x = 0 - (i.width + 60) : c.match("ltt") ? d.y = 0 - (i.height + 60) : c.match("ltb") ? d.y = i.height + 60 : c.match("str") || c.match("skewtorightshort") ? (d.x = 50, d.opacity = 0) : c.match("stl") || c.match("skewtoleftshort") ? (d.x = -50, d.opacity = 0) : c.match("stt") ? (d.y = -50, d.opacity = 0) : c.match("stb") ? (d.y = 50, d.opacity = 0) : c.match("randomrotateout") ? (d.x = Math.random() * i.width, d.y = Math.random() * i.height, d.scale = 2 * Math.random() + .3, d.rotation = 360 * Math.random() - 180, d.opacity = 0) : c.match("fadeout") && (d.opacity = 0), c.match("skewtorightshort") ? d.x = 270 : c.match("skewtoleftshort") && (d.x = -270), d.data = new Object, d.data.oldx = d.x, d.data.oldy = d.y, d.x = d.x * o, d.y = d.y * o, d.overwrite = "auto";
                var u = t,
                    u = t;
                "chars" == t.data("splitout") ? u = t.data("mySplitText").chars : "words" == t.data("splitout") ? u = t.data("mySplitText").words : "lines" == t.data("splitout") && (u = t.data("mySplitText").lines);
                var p = t.data("endelementdelay") == e ? 0 : t.data("endelementdelay");
                s.add(l.staggerTo(u, h, d, p), n)
            } else if (t.hasClass("customout")) {
                d = R(d, t.data("customout"));
                var u = t;
                "chars" == t.data("splitout") ? u = t.data("mySplitText").chars : "words" == t.data("splitout") ? u = t.data("mySplitText").words : "lines" == t.data("splitout") && (u = t.data("mySplitText").lines);
                var p = t.data("endelementdelay") == e ? 0 : t.data("endelementdelay");
                d.onStart = function() {
                    punchgs.TweenLite.set(t, {
                        transformPerspective: d.transformPerspective,
                        transformOrigin: d.transformOrigin,
                        overwrite: "auto"
                    })
                }, d.data = new Object, d.data.oldx = d.x, d.data.oldy = d.y, d.x = d.x * o, d.y = d.y * o, s.add(l.staggerTo(u, h, d, p), n)
            } else a.delay = 0, s.add(punchgs.TweenLite.to(t, h, a), n);
            s.addLabel(r, n), t.data("timeline", s)
        },
        X = function(e, i) {
            e.children().each(function() {
                try {
                    t(this).die("click")
                } catch (e) {}
                try {
                    t(this).die("mouseenter")
                } catch (e) {}
                try {
                    t(this).die("mouseleave")
                } catch (e) {}
                try {
                    t(this).unbind("hover")
                } catch (e) {}
            });
            try {
                e.die("click", "mouseenter", "mouseleave")
            } catch (n) {}
            clearInterval(i.cdint), e = null
        },
        B = function(i, n) {
            if (n.cd = 0, n.loop = 0, n.stopAfterLoops != e && n.stopAfterLoops > -1 ? n.looptogo = n.stopAfterLoops : n.looptogo = 9999999, n.stopAtSlide != e && n.stopAtSlide > -1 ? n.lastslidetoshow = n.stopAtSlide : n.lastslidetoshow = 999, n.stopLoop = "off", 0 == n.looptogo && (n.stopLoop = "on"), n.slideamount > 1 && (0 != n.stopAfterLoops || 1 != n.stopAtSlide)) {
                var a = i.find(".tp-bannertimer");
                i.on("stoptimer", function() {
                    var e = t(this).find(".tp-bannertimer");
                    e.data("tween").pause(), "on" == n.hideTimerBar && e.css({
                        visibility: "hidden"
                    })
                }), i.on("starttimer", function() {
                    1 != n.conthover && 1 != n.videoplaying && n.width > n.hideSliderAtLimit && 1 != n.bannertimeronpause && 1 != n.overnav && ("on" == n.stopLoop && n.next == n.lastslidetoshow - 1 || 1 == n.noloopanymore ? n.noloopanymore = 1 : (a.css({
                        visibility: "visible"
                    }), a.data("tween").resume())), "on" == n.hideTimerBar && a.css({
                        visibility: "hidden"
                    })
                }), i.on("restarttimer", function() {
                    var e = t(this).find(".tp-bannertimer");
                    "on" == n.stopLoop && n.next == n.lastslidetoshow - 1 || 1 == n.noloopanymore ? n.noloopanymore = 1 : (e.css({
                        visibility: "visible"
                    }), e.data("tween").kill(), e.data("tween", punchgs.TweenLite.fromTo(e, n.delay / 1e3, {
                        width: "0%"
                    }, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: r,
                        delay: 1
                    }))), "on" == n.hideTimerBar && e.css({
                        visibility: "hidden"
                    })
                }), i.on("nulltimer", function() {
                    a.data("tween").pause(0), "on" == n.hideTimerBar && a.css({
                        visibility: "hidden"
                    })
                });
                var r = function() {
                    0 == t("body").find(i).length && (X(i, n), clearInterval(n.cdint)), i.trigger("revolution.slide.slideatend"), 1 == i.data("conthover-changed") && (n.conthover = i.data("conthover"), i.data("conthover-changed", 0)), n.act = n.next, n.next = n.next + 1, n.next > i.find(">ul >li").length - 1 && (n.next = 0, n.looptogo = n.looptogo - 1, n.looptogo <= 0 && (n.stopLoop = "on")), "on" == n.stopLoop && n.next == n.lastslidetoshow - 1 ? (i.find(".tp-bannertimer").css({
                        visibility: "hidden"
                    }), i.trigger("revolution.slide.onstop"), n.noloopanymore = 1) : a.data("tween").restart(), k(i, n)
                };
                a.data("tween", punchgs.TweenLite.fromTo(a, n.delay / 1e3, {
                    width: "0%"
                }, {
                    force3D: "auto",
                    width: "100%",
                    ease: punchgs.Linear.easeNone,
                    onComplete: r,
                    delay: 1
                })), a.data("opt", n), i.hover(function() {
                    if ("on" == n.onHoverStop && !Y()) {
                        i.trigger("stoptimer"), i.trigger("revolution.slide.onpause");
                        var a = i.find(">ul >li:eq(" + n.next + ") .slotholder");
                        a.find(".defaultimg").each(function() {
                            var i = t(this);
                            i.data("kenburn") != e && i.data("kenburn").pause()
                        })
                    }
                }, function() {
                    if (1 != i.data("conthover")) {
                        i.trigger("revolution.slide.onresume"), i.trigger("starttimer");
                        var a = i.find(">ul >li:eq(" + n.next + ") .slotholder");
                        a.find(".defaultimg").each(function() {
                            var i = t(this);
                            i.data("kenburn") != e && i.data("kenburn").play()
                        })
                    }
                })
            }
        },
        Y = function() {
            var t = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                e = !1;
            for (var i in t) navigator.userAgent.split(t[i]).length > 1 && (e = !0);
            return e
        },
        U = function(t, e, i) {
            var n = e.data("owidth"),
                a = e.data("oheight");
            if (n / a > i.width / i.height) {
                var r = i.container.width() / n,
                    o = a * r,
                    s = o / i.container.height() * t;
                return t *= 100 / s, s = 100, t = t, t + "% " + s + "% 1"
            }
            var r = i.container.width() / n,
                o = a * r,
                s = o / i.container.height() * t;
            return t + "% " + s + "%"
        },
        V = function(i, n, a, r) {
            try {
                i.find(">ul:first-child >li:eq(" + n.act + ")")
            } catch (o) {
                i.find(">ul:first-child >li:eq(1)");
            }
            n.lastslide = n.act;
            var l = i.find(">ul:first-child >li:eq(" + n.next + ")"),
                d = l.find(".slotholder"),
                h = d.data("bgposition"),
                c = d.data("bgpositionend"),
                u = d.data("zoomstart") / 100,
                p = d.data("zoomend") / 100,
                f = d.data("rotationstart"),
                g = d.data("rotationend"),
                m = d.data("bgfit"),
                v = d.data("bgfitend"),
                y = d.data("easeme"),
                w = d.data("duration") / 1e3,
                b = 100;
            m == e && (m = 100), v == e && (v = 100);
            var _ = m,
                x = v;
            m = U(m, d, n), v = U(v, d, n), b = U(100, d, n), u == e && (u = 1), p == e && (p = 1), f == e && (f = 0), g == e && (g = 0), 1 > u && (u = 1), 1 > p && (p = 1);
            var T = new Object;
            T.w = parseInt(b.split(" ")[0], 0), T.h = parseInt(b.split(" ")[1], 0);
            var k = !1;
            "1" == b.split(" ")[2] && (k = !0), d.find(".defaultimg").each(function() {
                var e = t(this);
                0 == d.find(".kenburnimg").length ? d.append('<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="' + e.attr("src") + '" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:' + T.w + "%;height:" + T.h + '%;"></div>') : d.find(".kenburnimg img").css({
                    width: T.w + "%",
                    height: T.h + "%"
                });
                var i = d.find(".kenburnimg img"),
                    a = Q(n, h, m, i, k),
                    o = Q(n, c, v, i, k);
                if (k && (a.w = _ / 100, o.w = x / 100), r) {
                    punchgs.TweenLite.set(i, {
                        autoAlpha: 0,
                        transformPerspective: 1200,
                        transformOrigin: "0% 0%",
                        top: 0,
                        left: 0,
                        scale: a.w,
                        x: a.x,
                        y: a.y
                    });
                    var l = a.w,
                        u = l * i.width() - n.width,
                        p = l * i.height() - n.height,
                        f = Math.abs(a.x / u * 100),
                        b = Math.abs(a.y / p * 100);
                    0 == p && (b = 0), 0 == u && (f = 0), e.data("bgposition", f + "% " + b + "%"), s(8) || e.data("currotate", Z(i)), s(8) || e.data("curscale", T.w * l + "%  " + (T.h * l + "%")), d.find(".kenburnimg").remove()
                } else e.data("kenburn", punchgs.TweenLite.fromTo(i, w, {
                    autoAlpha: 1,
                    force3D: punchgs.force3d,
                    transformOrigin: "0% 0%",
                    top: 0,
                    left: 0,
                    scale: a.w,
                    x: a.x,
                    y: a.y
                }, {
                    autoAlpha: 1,
                    rotationZ: g,
                    ease: y,
                    x: o.x,
                    y: o.y,
                    scale: o.w,
                    onUpdate: function() {
                        var t = i[0]._gsTransform.scaleX,
                            a = t * i.width() - n.width,
                            r = t * i.height() - n.height,
                            o = Math.abs(i[0]._gsTransform.x / a * 100),
                            l = Math.abs(i[0]._gsTransform.y / r * 100);
                        0 == r && (l = 0), 0 == a && (o = 0), e.data("bgposition", o + "% " + l + "%"), s(8) || e.data("currotate", Z(i)), s(8) || e.data("curscale", T.w * t + "%  " + (T.h * t + "%"))
                    }
                }))
            })
        },
        Q = function(t, e, i, n, a) {
            var r = new Object;
            switch (a ? r.w = parseInt(i.split(" ")[1], 0) / 100 : r.w = parseInt(i.split(" ")[0], 0) / 100, e) {
                case "left top":
                case "top left":
                    r.x = 0, r.y = 0;
                    break;
                case "center top":
                case "top center":
                    r.x = ((0 - n.width()) * r.w + parseInt(t.width, 0)) / 2, r.y = 0;
                    break;
                case "top right":
                case "right top":
                    r.x = (0 - n.width()) * r.w + parseInt(t.width, 0), r.y = 0;
                    break;
                case "center left":
                case "left center":
                    r.x = 0, r.y = ((0 - n.height()) * r.w + parseInt(t.height, 0)) / 2;
                    break;
                case "center center":
                    r.x = ((0 - n.width()) * r.w + parseInt(t.width, 0)) / 2, r.y = ((0 - n.height()) * r.w + parseInt(t.height, 0)) / 2;
                    break;
                case "center right":
                case "right center":
                    r.x = (0 - n.width()) * r.w + parseInt(t.width, 0), r.y = ((0 - n.height()) * r.w + parseInt(t.height, 0)) / 2;
                    break;
                case "bottom left":
                case "left bottom":
                    r.x = 0, r.y = (0 - n.height()) * r.w + parseInt(t.height, 0);
                    break;
                case "bottom center":
                case "center bottom":
                    r.x = ((0 - n.width()) * r.w + parseInt(t.width, 0)) / 2, r.y = (0 - n.height()) * r.w + parseInt(t.height, 0);
                    break;
                case "bottom right":
                case "right bottom":
                    r.x = (0 - n.width()) * r.w + parseInt(t.width, 0), r.y = (0 - n.height()) * r.w + parseInt(t.height, 0)
            }
            return r
        },
        Z = function(t) {
            var e = t.css("-webkit-transform") || t.css("-moz-transform") || t.css("-ms-transform") || t.css("-o-transform") || t.css("transform");
            if ("none" !== e) var i = e.split("(")[1].split(")")[0].split(","),
                n = i[0],
                a = i[1],
                r = Math.round(Math.atan2(a, n) * (180 / Math.PI));
            else var r = 0;
            return 0 > r ? r += 360 : r
        },
        G = function(i, n) {
            try {
                var a = i.find(">ul:first-child >li:eq(" + n.act + ")")
            } catch (r) {
                var a = i.find(">ul:first-child >li:eq(1)")
            }
            n.lastslide = n.act;
            var o = i.find(">ul:first-child >li:eq(" + n.next + ")");
            a.find(".slotholder"), o.find(".slotholder");
            i.find(".defaultimg").each(function() {
                var i = t(this);
                punchgs.TweenLite.killTweensOf(i, !1), punchgs.TweenLite.set(i, {
                    scale: 1,
                    rotationZ: 0
                }), punchgs.TweenLite.killTweensOf(i.data("kenburn img"), !1), i.data("kenburn") != e && i.data("kenburn").pause(), i.data("currotate") != e && i.data("bgposition") != e && i.data("curscale") != e && punchgs.TweenLite.set(i, {
                    rotation: i.data("currotate"),
                    backgroundPosition: i.data("bgposition"),
                    backgroundSize: i.data("curscale")
                }), i != e && i.data("kenburn img") != e && i.data("kenburn img").length > 0 && punchgs.TweenLite.set(i.data("kenburn img"), {
                    autoAlpha: 0
                })
            })
        },
        J = function(e, i) {
            return Y() && "on" == i.parallaxDisableOnMobile ? !1 : (e.find(">ul:first-child >li").each(function() {
                for (var e = t(this), n = 1; 10 >= n; n++) e.find(".rs-parallaxlevel-" + n).each(function() {
                    var e = t(this);
                    e.wrap('<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:' + e.css("zIndex") + '" class="tp-parallax-container" data-parallaxlevel="' + i.parallaxLevels[n - 1] + '"></div>')
                })
            }), "mouse" != i.parallax && "scroll+mouse" != i.parallax && "mouse+scroll" != i.parallax || (e.mouseenter(function(t) {
                var i = e.find(".current-sr-slide-visible"),
                    n = e.offset().top,
                    a = e.offset().left,
                    r = t.pageX - a,
                    o = t.pageY - n;
                i.data("enterx", r), i.data("entery", o)
            }), e.on("mousemove.hoverdir, mouseleave.hoverdir", function(n) {
                var a = e.find(".current-sr-slide-visible");
                switch (n.type) {
                    case "mousemove":
                        var r = e.offset().top,
                            o = e.offset().left,
                            s = a.data("enterx"),
                            l = a.data("entery"),
                            d = s - (n.pageX - o),
                            h = l - (n.pageY - r);
                        a.find(".tp-parallax-container").each(function() {
                            var e = t(this),
                                n = parseInt(e.data("parallaxlevel"), 0) / 100,
                                a = d * n,
                                r = h * n;
                            "scroll+mouse" == i.parallax || "mouse+scroll" == i.parallax ? punchgs.TweenLite.to(e, .4, {
                                force3D: "auto",
                                x: a,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            }) : punchgs.TweenLite.to(e, .4, {
                                force3D: "auto",
                                x: a,
                                y: r,
                                ease: punchgs.Power3.easeOut,
                                overwrite: "all"
                            })
                        });
                        break;
                    case "mouseleave":
                        a.find(".tp-parallax-container").each(function() {
                            var e = t(this);
                            "scroll+mouse" == i.parallax || "mouse+scroll" == i.parallax ? punchgs.TweenLite.to(e, 1.5, {
                                force3D: "auto",
                                x: 0,
                                ease: punchgs.Power3.easeOut
                            }) : punchgs.TweenLite.to(e, 1.5, {
                                force3D: "auto",
                                x: 0,
                                y: 0,
                                ease: punchgs.Power3.easeOut
                            })
                        })
                }
            }), Y() && (window.ondeviceorientation = function(i) {
                var n = Math.round(i.beta || 0),
                    a = Math.round(i.gamma || 0),
                    r = e.find(".current-sr-slide-visible");
                if (t(window).width() > t(window).height()) {
                    var o = a;
                    a = n, n = o
                }
                var s = 360 / e.width() * a,
                    l = 180 / e.height() * n;
                r.find(".tp-parallax-container").each(function() {
                    var e = t(this),
                        i = parseInt(e.data("parallaxlevel"), 0) / 100,
                        n = s * i,
                        a = l * i;
                    punchgs.TweenLite.to(e, .2, {
                        force3D: "auto",
                        x: n,
                        y: a,
                        ease: punchgs.Power3.easeOut
                    })
                })
            })), void("scroll" != i.parallax && "scroll+mouse" != i.parallax && "mouse+scroll" != i.parallax || t(window).on("scroll", function(t) {
                K(e, i)
            })))
        },
        K = function(e, i) {
            if (Y() && "on" == i.parallaxDisableOnMobile) return !1;
            var n = e.offset().top,
                a = t(window).scrollTop(),
                r = n + e.height() / 2,
                o = n + e.height() / 2 - a,
                s = t(window).height() / 2,
                l = s - o;
            s > r && (l -= s - r);
            e.find(".current-sr-slide-visible");
            if (e.find(".tp-parallax-container").each(function(e) {
                    var i = t(this),
                        n = parseInt(i.data("parallaxlevel"), 0) / 100,
                        a = l * n;
                    i.data("parallaxoffset", a), punchgs.TweenLite.to(i, .2, {
                        force3D: "auto",
                        y: a,
                        ease: punchgs.Power3.easeOut
                    })
                }), "on" != i.parallaxBgFreeze) {
                var d = i.parallaxLevels[0] / 100,
                    h = l * d;
                punchgs.TweenLite.to(e, .2, {
                    force3D: "auto",
                    y: h,
                    ease: punchgs.Power3.easeOut
                })
            }
        },
        tt = function(i, n) {
            var a = i.parent();
            "thumb" != n.navigationType && "both" != n.navsecond || a.append('<div class="tp-bullets tp-thumbs ' + n.navigationStyle + '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>');
            var r = a.find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
                o = r.parent();
            o.width(n.thumbWidth * n.thumbAmount), o.height(n.thumbHeight), o.parent().width(n.thumbWidth * n.thumbAmount), o.parent().height(n.thumbHeight), i.find(">ul:first >li").each(function(t) {
                var a = i.find(">ul:first >li:eq(" + t + ")"),
                    o = a.find(".defaultimg").css("backgroundColor");
                if (a.data("thumb") != e) var s = a.data("thumb");
                else var s = a.find("img:first").attr("src");
                r.append('<div class="bullet thumb" style="background-color:' + o + ";position:relative;width:" + n.thumbWidth + "px;height:" + n.thumbHeight + "px;background-image:url(" + s + ') !important;background-size:cover;background-position:center center;"></div>');
                r.find(".bullet:first")
            });
            var s = 10;
            r.find(".bullet").each(function(e) {
                var a = t(this);
                e == n.slideamount - 1 && a.addClass("last"), 0 == e && a.addClass("first"), a.width(n.thumbWidth), a.height(n.thumbHeight), s < a.outerWidth(!0) && (s = a.outerWidth(!0)), a.click(function() {
                    0 == n.transition && a.index() != n.act && (n.next = a.index(), l(n, i))
                })
            });
            var d = s * i.find(">ul:first >li").length,
                h = r.parent().width();
            n.thumbWidth = s, d > h && (t(document).mousemove(function(e) {
                t("body").data("mousex", e.pageX)
            }), r.parent().mouseenter(function() {
                var e = t(this),
                    n = e.offset(),
                    a = t("body").data("mousex") - n.left,
                    r = e.width(),
                    o = e.find(".bullet:first").outerWidth(!0),
                    s = o * i.find(">ul:first >li").length,
                    l = s - r + 15,
                    d = l / r;
                e.addClass("over"), a -= 30;
                var h = 0 - a * d;
                h > 0 && (h = 0), 0 - s + r > h && (h = 0 - s + r), it(e, h, 200)
            }), r.parent().mousemove(function() {
                var e = t(this),
                    n = e.offset(),
                    a = t("body").data("mousex") - n.left,
                    r = e.width(),
                    o = e.find(".bullet:first").outerWidth(!0),
                    s = o * i.find(">ul:first >li").length - 1,
                    l = s - r + 15,
                    d = l / r;
                a -= 3, 6 > a && (a = 0), a + 3 > r - 6 && (a = r);
                var h = 0 - a * d;
                h > 0 && (h = 0), 0 - s + r > h && (h = 0 - s + r), it(e, h, 0)
            }), r.parent().mouseleave(function() {
                var e = t(this);
                e.removeClass("over"), et(i)
            }))
        },
        et = function(t) {
            var e = t.parent().find(".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"),
                i = e.parent(),
                n = (i.offset(), i.find(".bullet:first").outerWidth(!0)),
                a = i.find(".bullet.selected").index() * n,
                r = i.width(),
                n = i.find(".bullet:first").outerWidth(!0),
                o = n * t.find(">ul:first >li").length,
                s = 0 - a;
            s > 0 && (s = 0), 0 - o + r > s && (s = 0 - o + r), i.hasClass("over") || it(i, s, 200)
        },
        it = function(t, e, i) {
            punchgs.TweenLite.to(t.find(".tp-thumbcontainer"), .2, {
                force3D: "auto",
                left: e,
                ease: punchgs.Power3.easeOut,
                overwrite: "auto"
            })
        }
}(jQuery);
// element reference
var $wrapper = $('.wrapper');
var $loading = $('#loading');
var $window = $(window);
var $header = $(".header-fixed .header-sticky");

var $banner = $('.tp-banner');
var $thumbnails = $('.thumbnails');
var $subcate = $('#sub-cate');

// start proloader
$wrapper.jpreLoader({
  loaderVPos: '50%',
  autoClose: true
}, function() {

  // setup page
  handleFastClick();
  handleHeader();
  handleSlider();
  handleAnimation();

  // display content
  TweenMax.to($wrapper, 0.7, {
    opacity: 1
  });

  // hide loader then start animation
  $loading.fadeOut('fast', startAnimation);

});

// Fast Click
var handleFastClick = function() {
  FastClick.attach(document.body);
};

// Fixed Header
var handleHeader = function() {

  $window.scroll(function() {
    if ($window.scrollTop() > 100) {
      $header.addClass("header-fixed-shrink");
    } else {
      $header.removeClass("header-fixed-shrink");
    }
  });
};

// Slider
var handleSlider = function() {

  $banner.revolution({
    delay: 9000,
    startwidth: 870,
    startheight: 400,
    hideThumbs: 10,
    navigationStyle: "preview4"
  });
};

// Animation initialize
var handleAnimation = function() {

  // init tween
  TweenMax.set($subcate, {
    perspective: 800,
  });

  // init tween
  TweenMax.set($thumbnails, {
    transformPerspective: 800,
    backfaceVisibility: "hidden",
    transformStyle: "preserve-3d",
    rotationY: 90,
    autoAlpha: 0
  });
};

// Animation
var startAnimation = function() {

  // setup waypoints
  $subcate.waypoint(function() {
    TweenMax.staggerTo($thumbnails, 1, {
      rotationY: 0,
      autoAlpha: 1
    }, 0.3);
  }, {
    offset: '100%',
    triggerOnce: true
  });
};
