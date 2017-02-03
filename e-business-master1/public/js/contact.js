if (function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) {
            var e = "length" in t && t.length,
                i = J.type(t);
            return "function" === i || J.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function n(t, e, i) {
            if (J.isFunction(e)) return J.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return J.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (at.test(e)) return J.filter(e, t, i);
                e = J.filter(e, t)
            }
            return J.grep(t, function(t) {
                return X.call(e, t) >= 0 !== i
            })
        }

        function r(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function o(t) {
            var e = dt[t] = {};
            return J.each(t.match(ft) || [], function(t, i) {
                e[i] = !0
            }), e
        }

        function s() {
            Z.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), J.ready()
        }

        function a() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = J.expando + a.uid++
        }

        function l(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(bt, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : _t.test(i) ? J.parseJSON(i) : i
                    } catch (r) {}
                    yt.set(t, e, i)
                } else i = void 0;
            return i
        }

        function h() {
            return !0
        }

        function c() {
            return !1
        }

        function u() {
            try {
                return Z.activeElement
            } catch (t) {}
        }

        function p(t, e) {
            return J.nodeName(t, "table") && J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function f(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function d(t) {
            var e = $t.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function g(t, e) {
            for (var i = 0, n = t.length; n > i; i++) vt.set(t[i], "globalEval", !e || vt.get(e[i], "globalEval"))
        }

        function m(t, e) {
            var i, n, r, o, s, a, l, h;
            if (1 === e.nodeType) {
                if (vt.hasData(t) && (o = vt.access(t), s = vt.set(e, o), h = o.events)) {
                    delete s.handle, s.events = {};
                    for (r in h)
                        for (i = 0, n = h[r].length; n > i; i++) J.event.add(e, r, h[r][i])
                }
                yt.hasData(t) && (a = yt.access(t), l = J.extend({}, a), yt.set(e, l))
            }
        }

        function v(t, e) {
            var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && J.nodeName(t, e) ? J.merge([t], i) : i
        }

        function y(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && kt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function _(e, i) {
            var n, r = J(i.createElement(e)).appendTo(i.body),
                o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : J.css(r[0], "display");
            return r.detach(), o
        }

        function b(t) {
            var e = Z,
                i = zt[t];
            return i || (i = _(t, e), "none" !== i && i || (Ft = (Ft || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ft[0].contentDocument, e.write(), e.close(), i = _(t, e), Ft.detach()), zt[t] = i), i
        }

        function w(t, e, i) {
            var n, r, o, s, a = t.style;
            return i = i || Bt(t), i && (s = i.getPropertyValue(e) || i[e]), i && ("" !== s || J.contains(t.ownerDocument, t) || (s = J.style(t, e)), qt.test(s) && Wt.test(e) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
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
            for (var i = e[0].toUpperCase() + e.slice(1), n = e, r = Qt.length; r--;)
                if (e = Qt[r] + i, e in t) return e;
            return n
        }

        function k(t, e, i) {
            var n = Ut.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }

        function C(t, e, i, n, r) {
            for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === i && (s += J.css(t, i + xt[o], !0, r)), n ? ("content" === i && (s -= J.css(t, "padding" + xt[o], !0, r)), "margin" !== i && (s -= J.css(t, "border" + xt[o] + "Width", !0, r))) : (s += J.css(t, "padding" + xt[o], !0, r), "padding" !== i && (s += J.css(t, "border" + xt[o] + "Width", !0, r)));
            return s
        }

        function S(t, e, i) {
            var n = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = Bt(t),
                s = "border-box" === J.css(t, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = w(t, e, o), (0 > r || null == r) && (r = t.style[e]), qt.test(r)) return r;
                n = s && (G.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + C(t, e, i || (s ? "border" : "content"), n, o) + "px"
        }

        function P(t, e) {
            for (var i, n, r, o = [], s = 0, a = t.length; a > s; s++) n = t[s], n.style && (o[s] = vt.get(n, "olddisplay"), i = n.style.display, e ? (o[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Tt(n) && (o[s] = vt.access(n, "olddisplay", b(n.nodeName)))) : (r = Tt(n), "none" === i && r || vt.set(n, "olddisplay", r ? i : J.css(n, "display"))));
            for (s = 0; a > s; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[s] || "" : "none"));
            return t
        }

        function O(t, e, i, n, r) {
            return new O.prototype.init(t, e, i, n, r)
        }

        function E() {
            return setTimeout(function() {
                Gt = void 0
            }), Gt = J.now()
        }

        function A(t, e) {
            var i, n = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = xt[n], r["margin" + i] = r["padding" + i] = t;
            return e && (r.opacity = r.width = t), r
        }

        function D(t, e, i) {
            for (var n, r = (ie[e] || []).concat(ie["*"]), o = 0, s = r.length; s > o; o++)
                if (n = r[o].call(i, e, t)) return n
        }

        function L(t, e, i) {
            var n, r, o, s, a, l, h, c, u = this,
                p = {},
                f = t.style,
                d = t.nodeType && Tt(t),
                g = vt.get(t, "fxshow");
            i.queue || (a = J._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, u.always(function() {
                u.always(function() {
                    a.unqueued--, J.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [f.overflow, f.overflowX, f.overflowY], h = J.css(t, "display"), c = "none" === h ? vt.get(t, "olddisplay") || b(t.nodeName) : h, "inline" === c && "none" === J.css(t, "float") && (f.display = "inline-block")), i.overflow && (f.overflow = "hidden", u.always(function() {
                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (r = e[n], Kt.exec(r)) {
                    if (delete e[n], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                        if ("show" !== r || !g || void 0 === g[n]) continue;
                        d = !0
                    }
                    p[n] = g && g[n] || J.style(t, n)
                } else h = void 0;
            if (J.isEmptyObject(p)) "inline" === ("none" === h ? b(t.nodeName) : h) && (f.display = h);
            else {
                g ? "hidden" in g && (d = g.hidden) : g = vt.access(t, "fxshow", {}), o && (g.hidden = !d), d ? J(t).show() : u.done(function() {
                    J(t).hide()
                }), u.done(function() {
                    var e;
                    vt.remove(t, "fxshow");
                    for (e in p) J.style(t, e, p[e])
                });
                for (n in p) s = D(d ? g[n] : 0, n, u), n in g || (g[n] = s.start, d && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function R(t, e) {
            var i, n, r, o, s;
            for (i in t)
                if (n = J.camelCase(i), r = e[n], o = t[i], J.isArray(o) && (r = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), s = J.cssHooks[n], s && "expand" in s) {
                    o = s.expand(o), delete t[n];
                    for (i in o) i in t || (t[i] = o[i], e[i] = r)
                } else e[n] = r
        }

        function N(t, e, i) {
            var n, r, o = 0,
                s = ee.length,
                a = J.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = Gt || E(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, o = 1 - n, s = 0, l = h.tweens.length; l > s; s++) h.tweens[s].run(o);
                    return a.notifyWith(t, [h, o, i]), 1 > o && l ? i : (a.resolveWith(t, [h]), !1)
                },
                h = a.promise({
                    elem: t,
                    props: J.extend({}, e),
                    opts: J.extend(!0, {
                        specialEasing: {}
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Gt || E(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = J.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                        return h.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? h.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n > i; i++) h.tweens[i].run(1);
                        return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]), this
                    }
                }),
                c = h.props;
            for (R(c, h.opts.specialEasing); s > o; o++)
                if (n = ee[o].call(h, t, c, h.opts)) return n;
            return J.map(c, D, h), J.isFunction(h.opts.start) && h.opts.start.call(t, h), J.fx.timer(J.extend(l, {
                elem: t,
                anim: h,
                queue: h.opts.queue
            })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
        }

        function M(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, r = 0,
                    o = e.toLowerCase().match(ft) || [];
                if (J.isFunction(i))
                    for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function $(t, e, i, n) {
            function r(a) {
                var l;
                return o[a] = !0, J.each(t[a] || [], function(t, a) {
                    var h = a(e, i, n);
                    return "string" != typeof h || s || o[h] ? s ? !(l = h) : void 0 : (e.dataTypes.unshift(h), r(h), !1)
                }), l
            }
            var o = {},
                s = t === _e;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }

        function j(t, e) {
            var i, n, r = J.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && J.extend(!0, t, n), t
        }

        function I(t, e, i) {
            for (var n, r, o, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (r in a)
                    if (a[r] && a[r].test(n)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in i) o = l[0];
            else {
                for (r in i) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    s || (s = r)
                }
                o = o || s
            }
            return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
        }

        function F(t, e, i, n) {
            var r, o, s, a, l, h = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (s in t.converters) h[s.toLowerCase()] = t.converters[s];
            for (o = c.shift(); o;)
                if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (s = h[l + " " + o] || h["* " + o], !s)
                    for (r in h)
                        if (a = r.split(" "), a[1] === o && (s = h[l + " " + a[0]] || h["* " + a[0]])) {
                            s === !0 ? s = h[r] : h[r] !== !0 && (o = a[0], c.unshift(a[1]));
                            break
                        }
                if (s !== !0)
                    if (s && t["throws"]) e = s(e);
                    else try {
                        e = s(e)
                    } catch (u) {
                        return {
                            state: "parsererror",
                            error: s ? u : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function z(t, e, i, n) {
            var r;
            if (J.isArray(e)) J.each(e, function(e, r) {
                i || ke.test(t) ? n(t, r) : z(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
            });
            else if (i || "object" !== J.type(e)) n(t, e);
            else
                for (r in e) z(t + "[" + r + "]", e[r], i, n)
        }

        function W(t) {
            return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var q = [],
            B = q.slice,
            H = q.concat,
            U = q.push,
            X = q.indexOf,
            Y = {},
            V = Y.toString,
            Q = Y.hasOwnProperty,
            G = {},
            Z = t.document,
            K = "2.1.4",
            J = function(t, e) {
                return new J.fn.init(t, e)
            },
            tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            et = /^-ms-/,
            it = /-([\da-z])/gi,
            nt = function(t, e) {
                return e.toUpperCase()
            };
        J.fn = J.prototype = {
            jquery: K,
            constructor: J,
            selector: "",
            length: 0,
            toArray: function() {
                return B.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : B.call(this)
            },
            pushStack: function(t) {
                var e = J.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return J.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(J.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(B.apply(this, arguments))
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
            push: U,
            sort: q.sort,
            splice: q.splice
        }, J.extend = J.fn.extend = function() {
            var t, e, i, n, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                h = !1;
            for ("boolean" == typeof s && (h = s, s = arguments[a] || {}, a++), "object" == typeof s || J.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = s[e], n = t[e], s !== n && (h && n && (J.isPlainObject(n) || (r = J.isArray(n))) ? (r ? (r = !1, o = i && J.isArray(i) ? i : []) : o = i && J.isPlainObject(i) ? i : {}, s[e] = J.extend(h, o, n)) : void 0 !== n && (s[e] = n));
            return s
        }, J.extend({
            expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === J.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                return !J.isArray(t) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function(t) {
                return "object" !== J.type(t) || t.nodeType || J.isWindow(t) ? !1 : !t.constructor || Q.call(t.constructor.prototype, "isPrototypeOf")
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Y[V.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, i = eval;
                t = J.trim(t), t && (1 === t.indexOf("use strict") ? (e = Z.createElement("script"), e.text = t, Z.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function(t) {
                return t.replace(et, "ms-").replace(it, nt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, n) {
                var r, o = 0,
                    s = t.length,
                    a = i(t);
                if (n) {
                    if (a)
                        for (; s > o && (r = e.apply(t[o], n), r !== !1); o++);
                    else
                        for (o in t)
                            if (r = e.apply(t[o], n), r === !1) break
                } else if (a)
                    for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
                else
                    for (o in t)
                        if (r = e.call(t[o], o, t[o]), r === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(tt, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? J.merge(n, "string" == typeof t ? [t] : t) : U.call(n, t)), n
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : X.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, r = t.length; i > n; n++) t[r++] = e[n];
                return t.length = r, t
            },
            grep: function(t, e, i) {
                for (var n, r = [], o = 0, s = t.length, a = !i; s > o; o++) n = !e(t[o], o), n !== a && r.push(t[o]);
                return r
            },
            map: function(t, e, n) {
                var r, o = 0,
                    s = t.length,
                    a = i(t),
                    l = [];
                if (a)
                    for (; s > o; o++) r = e(t[o], o, n), null != r && l.push(r);
                else
                    for (o in t) r = e(t[o], o, n), null != r && l.push(r);
                return H.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, r;
                return "string" == typeof e && (i = t[e], e = t, t = i), J.isFunction(t) ? (n = B.call(arguments, 2), r = function() {
                    return t.apply(e || this, n.concat(B.call(arguments)))
                }, r.guid = t.guid = t.guid || J.guid++, r) : void 0
            },
            now: Date.now,
            support: G
        }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            Y["[object " + e + "]"] = e.toLowerCase()
        });
        var rt = function(t) {
            function e(t, e, i, n) {
                var r, o, s, a, l, h, u, f, d, g;
                if ((e ? e.ownerDocument || e : z) !== L && D(e), e = e || L, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
                if (!n && N) {
                    if (11 !== a && (r = yt.exec(t)))
                        if (s = r[1]) {
                            if (9 === a) {
                                if (o = e.getElementById(s), !o || !o.parentNode) return i;
                                if (o.id === s) return i.push(o), i
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && I(e, o) && o.id === s) return i.push(o), i
                        } else {
                            if (r[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                            if ((s = r[3]) && w.getElementsByClassName) return K.apply(i, e.getElementsByClassName(s)), i
                        }
                    if (w.qsa && (!M || !M.test(t))) {
                        if (f = u = F, d = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (h = C(t), (u = e.getAttribute("id")) ? f = u.replace(bt, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = h.length; l--;) h[l] = f + p(h[l]);
                            d = _t.test(t) && c(e.parentNode) || e, g = h.join(",")
                        }
                        if (g) try {
                            return K.apply(i, d.querySelectorAll(g)), i
                        } catch (m) {} finally {
                            u || e.removeAttribute("id")
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
                return t[F] = !0, t
            }

            function r(t) {
                var e = L.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) x.attrHandle[i[n]] = e
            }

            function s(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
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

            function h(t) {
                return n(function(e) {
                    return e = +e, n(function(i, n) {
                        for (var r, o = t([], i.length, e), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                    })
                })
            }

            function c(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function u() {}

            function p(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function f(t, e, i) {
                var n = e.dir,
                    r = i && "parentNode" === n,
                    o = q++;
                return e.first ? function(e, i, o) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) return t(e, i, o)
                } : function(e, i, s) {
                    var a, l, h = [W, o];
                    if (s) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || r) && t(e, i, s)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || r) {
                                if (l = e[F] || (e[F] = {}), (a = l[n]) && a[0] === W && a[1] === o) return h[2] = a[2];
                                if (l[n] = h, h[2] = t(e, i, s)) return !0
                            }
                }
            }

            function d(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function g(t, i, n) {
                for (var r = 0, o = i.length; o > r; r++) e(t, i[r], n);
                return n
            }

            function m(t, e, i, n, r) {
                for (var o, s = [], a = 0, l = t.length, h = null != e; l > a; a++)(o = t[a]) && (i && !i(o, n, r) || (s.push(o), h && e.push(a)));
                return s
            }

            function v(t, e, i, r, o, s) {
                return r && !r[F] && (r = v(r)), o && !o[F] && (o = v(o, s)), n(function(n, s, a, l) {
                    var h, c, u, p = [],
                        f = [],
                        d = s.length,
                        v = n || g(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !n && e ? v : m(v, p, t, a, l),
                        _ = i ? o || (n ? t : d || r) ? [] : s : y;
                    if (i && i(y, _, a, l), r)
                        for (h = m(_, f), r(h, [], a, l), c = h.length; c--;)(u = h[c]) && (_[f[c]] = !(y[f[c]] = u));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (h = [], c = _.length; c--;)(u = _[c]) && h.push(y[c] = u);
                                o(null, _ = [], h, l)
                            }
                            for (c = _.length; c--;)(u = _[c]) && (h = o ? tt(n, u) : p[c]) > -1 && (n[h] = !(s[h] = u))
                        }
                    } else _ = m(_ === s ? _.splice(d, _.length) : _), o ? o(null, s, _, l) : K.apply(s, _)
                })
            }

            function y(t) {
                for (var e, i, n, r = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = f(function(t) {
                        return t === e
                    }, s, !0), h = f(function(t) {
                        return tt(e, t) > -1
                    }, s, !0), c = [function(t, i, n) {
                        var r = !o && (n || i !== O) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                        return e = null, r
                    }]; r > a; a++)
                    if (i = x.relative[t[a].type]) c = [f(d(c), i)];
                    else {
                        if (i = x.filter[t[a].type].apply(null, t[a].matches), i[F]) {
                            for (n = ++a; r > n && !x.relative[t[n].type]; n++);
                            return v(a > 1 && d(c), a > 1 && p(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(lt, "$1"), i, n > a && y(t.slice(a, n)), r > n && y(t = t.slice(n)), r > n && p(t))
                        }
                        c.push(i)
                    }
                return d(c)
            }

            function _(t, i) {
                var r = i.length > 0,
                    o = t.length > 0,
                    s = function(n, s, a, l, h) {
                        var c, u, p, f = 0,
                            d = "0",
                            g = n && [],
                            v = [],
                            y = O,
                            _ = n || o && x.find.TAG("*", h),
                            b = W += null == y ? 1 : Math.random() || .1,
                            w = _.length;
                        for (h && (O = s !== L && s); d !== w && null != (c = _[d]); d++) {
                            if (o && c) {
                                for (u = 0; p = t[u++];)
                                    if (p(c, s, a)) {
                                        l.push(c);
                                        break
                                    }
                                h && (W = b)
                            }
                            r && ((c = !p && c) && f--, n && g.push(c))
                        }
                        if (f += d, r && d !== f) {
                            for (u = 0; p = i[u++];) p(g, v, s, a);
                            if (n) {
                                if (f > 0)
                                    for (; d--;) g[d] || v[d] || (v[d] = G.call(l));
                                v = m(v)
                            }
                            K.apply(l, v), h && !n && v.length > 0 && f + i.length > 1 && e.uniqueSort(l)
                        }
                        return h && (W = b, O = y), g
                    };
                return r ? n(s) : s
            }
            var b, w, x, T, k, C, S, P, O, E, A, D, L, R, N, M, $, j, I, F = "sizzle" + 1 * new Date,
                z = t.document,
                W = 0,
                q = 0,
                B = i(),
                H = i(),
                U = i(),
                X = function(t, e) {
                    return t === e && (A = !0), 0
                },
                Y = 1 << 31,
                V = {}.hasOwnProperty,
                Q = [],
                G = Q.pop,
                Z = Q.push,
                K = Q.push,
                J = Q.slice,
                tt = function(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                rt = nt.replace("w", "w#"),
                ot = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]",
                st = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                at = new RegExp(it + "+", "g"),
                lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                ht = new RegExp("^" + it + "*," + it + "*"),
                ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                ut = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                pt = new RegExp(st),
                ft = new RegExp("^" + rt + "$"),
                dt = {
                    ID: new RegExp("^#(" + nt + ")"),
                    CLASS: new RegExp("^\\.(" + nt + ")"),
                    TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ot),
                    PSEUDO: new RegExp("^" + st),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                gt = /^(?:input|select|textarea|button)$/i,
                mt = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                _t = /[+~]/,
                bt = /'|\\/g,
                wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                xt = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                Tt = function() {
                    D()
                };
            try {
                K.apply(Q = J.call(z.childNodes), z.childNodes), Q[z.childNodes.length].nodeType
            } catch (kt) {
                K = {
                    apply: Q.length ? function(t, e) {
                        Z.apply(t, J.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            w = e.support = {}, k = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, D = e.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : z;
                return n !== L && 9 === n.nodeType && n.documentElement ? (L = n, R = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), N = !k(n), w.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = r(function(t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = vt.test(n.getElementsByClassName), w.getById = r(function(t) {
                    return R.appendChild(t).id = F, !n.getElementsByName || !n.getElementsByName(F).length
                }), w.getById ? (x.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && N) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, x.filter.ID = function(t) {
                    var e = t.replace(wt, xt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete x.find.ID, x.filter.ID = function(t) {
                    var e = t.replace(wt, xt);
                    return function(t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), x.find.TAG = w.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, x.find.CLASS = w.getElementsByClassName && function(t, e) {
                    return N ? e.getElementsByClassName(t) : void 0
                }, $ = [], M = [], (w.qsa = vt.test(n.querySelectorAll)) && (r(function(t) {
                    R.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + F + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || M.push(".#.+[+~]")
                }), r(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
                })), (w.matchesSelector = vt.test(j = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && r(function(t) {
                    w.disconnectedMatch = j.call(t, "div"), j.call(t, "[s!='']:x"), $.push("!=", st)
                }), M = M.length && new RegExp(M.join("|")), $ = $.length && new RegExp($.join("|")), e = vt.test(R.compareDocumentPosition), I = e || vt.test(R.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, X = e ? function(t, e) {
                    if (t === e) return A = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === z && I(z, t) ? -1 : e === n || e.ownerDocument === z && I(z, e) ? 1 : E ? tt(E, t) - tt(E, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return A = !0, 0;
                    var i, r = 0,
                        o = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        h = [e];
                    if (!o || !a) return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : E ? tt(E, t) - tt(E, e) : 0;
                    if (o === a) return s(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) h.unshift(i);
                    for (; l[r] === h[r];) r++;
                    return r ? s(l[r], h[r]) : l[r] === z ? -1 : h[r] === z ? 1 : 0
                }, n) : L
            }, e.matches = function(t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== L && D(t), i = i.replace(ut, "='$1']"), w.matchesSelector && N && (!$ || !$.test(i)) && (!M || !M.test(i))) try {
                    var n = j.call(t, i);
                    if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (r) {}
                return e(i, L, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== L && D(t), I(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== L && D(t);
                var i = x.attrHandle[e.toLowerCase()],
                    n = i && V.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !N) : void 0;
                return void 0 !== n ? n : w.attributes || !N ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    r = 0;
                if (A = !w.detectDuplicates, E = !w.sortStable && t.slice(0), t.sort(X), A) {
                    for (; e = t[r++];) e === t[r] && (n = i.push(r));
                    for (; n--;) t.splice(i[n], 1)
                }
                return E = null, t
            }, T = e.getText = function(t) {
                var e, i = "",
                    n = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[n++];) i += T(e);
                return i
            }, x = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: dt,
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
                        return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && pt.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(wt, xt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && B(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, i, n) {
                        return function(r) {
                            var o = e.attr(r, t);
                            return null == o ? "!=" === i : i ? (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(at, " ") + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, i, n, r) {
                        var o = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var h, c, u, p, f, d, g = o !== s ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (u = e; u = u[g];)
                                            if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        d = g = "only" === t && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (c = m[F] || (m[F] = {}), h = c[t] || [], f = h[0] === W && h[1], p = h[0] === W && h[2], u = f && m.childNodes[f]; u = ++f && u && u[g] || (p = f = 0) || d.pop();)
                                        if (1 === u.nodeType && ++p && u === e) {
                                            c[t] = [W, f, p];
                                            break
                                        }
                                } else if (y && (h = (e[F] || (e[F] = {}))[t]) && h[0] === W) p = h[1];
                                else
                                    for (;
                                        (u = ++f && u && u[g] || (p = f = 0) || d.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++p || (y && ((u[F] || (u[F] = {}))[t] = [W, p]), u !== e)););
                                return p -= r, p === n || p % n === 0 && p / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) {
                        var r, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[F] ? o(i) : o.length > 1 ? (r = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, r = o(t, i), s = r.length; s--;) n = tt(t, r[s]), t[n] = !(e[n] = r[s])
                        }) : function(t) {
                            return o(t, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            r = S(t.replace(lt, "$1"));
                        return r[F] ? n(function(t, e, i, n) {
                            for (var o, s = r(t, null, n, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, n, o) {
                            return e[0] = t, r(e, null, o, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function(t) {
                        return t = t.replace(wt, xt),
                            function(e) {
                                return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                            }
                    }),
                    lang: n(function(t) {
                        return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                            function(e) {
                                var i;
                                do
                                    if (i = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === R
                    },
                    focus: function(t) {
                        return t === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
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
                    first: h(function() {
                        return [0]
                    }),
                    last: h(function(t, e) {
                        return [e - 1]
                    }),
                    eq: h(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: h(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: h(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: h(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: h(function(t, e, i) {
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
                }) x.pseudos[b] = a(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[b] = l(b);
            return u.prototype = x.filters = x.pseudos, x.setFilters = new u, C = e.tokenize = function(t, i) {
                var n, r, o, s, a, l, h, c = H[t + " "];
                if (c) return i ? 0 : c.slice(0);
                for (a = t, l = [], h = x.preFilter; a;) {
                    n && !(r = ht.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = ct.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(lt, " ")
                    }), a = a.slice(n.length));
                    for (s in x.filter) !(r = dt[s].exec(a)) || h[s] && !(r = h[s](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: s,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : H(t, l).slice(0)
            }, S = e.compile = function(t, e) {
                var i, n = [],
                    r = [],
                    o = U[t + " "];
                if (!o) {
                    for (e || (e = C(t)), i = e.length; i--;) o = y(e[i]), o[F] ? n.push(o) : r.push(o);
                    o = U(t, _(r, n)), o.selector = t
                }
                return o
            }, P = e.select = function(t, e, i, n) {
                var r, o, s, a, l, h = "function" == typeof t && t,
                    u = !n && C(t = h.selector || t);
                if (i = i || [], 1 === u.length) {
                    if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === e.nodeType && N && x.relative[o[1].type]) {
                        if (e = (x.find.ID(s.matches[0].replace(wt, xt), e) || [])[0], !e) return i;
                        h && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (r = dt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                        if ((l = x.find[a]) && (n = l(s.matches[0].replace(wt, xt), _t.test(o[0].type) && c(e.parentNode) || e))) {
                            if (o.splice(r, 1), t = n.length && p(o), !t) return K.apply(i, n), i;
                            break
                        }
                }
                return (h || S(t, u))(n, e, !N, i, _t.test(t) && c(e.parentNode) || e), i
            }, w.sortStable = F.split("").sort(X).join("") === F, w.detectDuplicates = !!A, D(), w.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(L.createElement("div"))
            }), r(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), r(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(et, function(t, e, i) {
                var n;
                return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        J.find = rt, J.expr = rt.selectors, J.expr[":"] = J.expr.pseudos, J.unique = rt.uniqueSort, J.text = rt.getText, J.isXMLDoc = rt.isXML, J.contains = rt.contains;
        var ot = J.expr.match.needsContext,
            st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            at = /^.[^:#\[\.,]*$/;
        J.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? J.find.matchesSelector(n, t) ? [n] : [] : J.find.matches(t, J.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, J.fn.extend({
            find: function(t) {
                var e, i = this.length,
                    n = [],
                    r = this;
                if ("string" != typeof t) return this.pushStack(J(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (J.contains(r[e], this)) return !0
                }));
                for (e = 0; i > e; e++) J.find(t, r[e], n);
                return n = this.pushStack(i > 1 ? J.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function(t) {
                return !!n(this, "string" == typeof t && ot.test(t) ? J(t) : t || [], !1).length
            }
        });
        var lt, ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ct = J.fn.init = function(t, e) {
                var i, n;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ht.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof J ? e[0] : e, J.merge(this, J.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), st.test(i[1]) && J.isPlainObject(e))
                            for (i in e) J.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    return n = Z.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = Z, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : J.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(J) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), J.makeArray(t, this))
            };
        ct.prototype = J.fn, lt = J(Z);
        var ut = /^(?:parents|prev(?:Until|All))/,
            pt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        J.extend({
            dir: function(t, e, i) {
                for (var n = [], r = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && J(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            sibling: function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        }), J.fn.extend({
            has: function(t) {
                var e = J(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; i > t; t++)
                        if (J.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, r = this.length, o = [], s = ot.test(t) || "string" != typeof t ? J(t, e || this.context) : 0; r > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && J.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        }
                return this.pushStack(o.length > 1 ? J.unique(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? X.call(J(t), this[0]) : X.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(J.unique(J.merge(this.get(), J(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), J.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return J.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return J.dir(t, "parentNode", i)
            },
            next: function(t) {
                return r(t, "nextSibling")
            },
            prev: function(t) {
                return r(t, "previousSibling")
            },
            nextAll: function(t) {
                return J.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return J.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return J.dir(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return J.dir(t, "previousSibling", i)
            },
            siblings: function(t) {
                return J.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return J.sibling(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || J.merge([], t.childNodes)
            }
        }, function(t, e) {
            J.fn[t] = function(i, n) {
                var r = J.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = J.filter(n, r)), this.length > 1 && (pt[t] || J.unique(r), ut.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var ft = /\S+/g,
            dt = {};
        J.Callbacks = function(t) {
            t = "string" == typeof t ? dt[t] || o(t) : J.extend({}, t);
            var e, i, n, r, s, a, l = [],
                h = !t.once && [],
                c = function(o) {
                    for (e = t.memory && o, i = !0, a = r || 0, r = 0, s = l.length, n = !0; l && s > a; a++)
                        if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                            e = !1;
                            break
                        }
                    n = !1, l && (h ? h.length && c(h.shift()) : e ? l = [] : u.disable())
                },
                u = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function o(e) {
                                J.each(e, function(e, i) {
                                    var n = J.type(i);
                                    "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                                })
                            }(arguments), n ? s = l.length : e && (r = i, c(e))
                        }
                        return this
                    },
                    remove: function() {
                        return l && J.each(arguments, function(t, e) {
                            for (var i;
                                (i = J.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (s >= i && s--, a >= i && a--)
                        }), this
                    },
                    has: function(t) {
                        return t ? J.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], s = 0, this
                    },
                    disable: function() {
                        return l = h = e = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return h = void 0, e || u.disable(), this
                    },
                    locked: function() {
                        return !h
                    },
                    fireWith: function(t, e) {
                        return !l || i && !h || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? h.push(e) : c(e)), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, J.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", J.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return J.Deferred(function(i) {
                                J.each(e, function(e, o) {
                                    var s = J.isFunction(t[e]) && t[e];
                                    r[o[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && J.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? J.extend(t, n) : n
                        }
                    },
                    r = {};
                return n.pipe = n.then, J.each(e, function(t, o) {
                    var s = o[2],
                        a = o[3];
                    n[o[1]] = s.add, a && s.add(function() {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? n : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), n.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, i, n, r = 0,
                    o = B.call(arguments),
                    s = o.length,
                    a = 1 !== s || t && J.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : J.Deferred(),
                    h = function(t, i, n) {
                        return function(r) {
                            i[t] = this, n[t] = arguments.length > 1 ? B.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (s > 1)
                    for (e = new Array(s), i = new Array(s), n = new Array(s); s > r; r++) o[r] && J.isFunction(o[r].promise) ? o[r].promise().done(h(r, n, o)).fail(l.reject).progress(h(r, i, e)) : --a;
                return a || l.resolveWith(n, o), l.promise()
            }
        });
        var gt;
        J.fn.ready = function(t) {
            return J.ready.promise().done(t), this
        }, J.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? J.readyWait++ : J.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, t !== !0 && --J.readyWait > 0 || (gt.resolveWith(Z, [J]), J.fn.triggerHandler && (J(Z).triggerHandler("ready"), J(Z).off("ready"))))
            }
        }), J.ready.promise = function(e) {
            return gt || (gt = J.Deferred(), "complete" === Z.readyState ? setTimeout(J.ready) : (Z.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), gt.promise(e)
        }, J.ready.promise();
        var mt = J.access = function(t, e, i, n, r, o, s) {
            var a = 0,
                l = t.length,
                h = null == i;
            if ("object" === J.type(i)) {
                r = !0;
                for (a in i) J.access(t, e, a, i[a], !0, o, s)
            } else if (void 0 !== n && (r = !0, J.isFunction(n) || (s = !0), h && (s ? (e.call(t, n), e = null) : (h = e, e = function(t, e, i) {
                    return h.call(J(t), i)
                })), e))
                for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
            return r ? t : h ? e.call(t) : l ? e(t[0], i) : o
        };
        J.acceptData = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        }, a.uid = 1, a.accepts = J.acceptData, a.prototype = {
            key: function(t) {
                if (!a.accepts(t)) return 0;
                var e = {},
                    i = t[this.expando];
                if (!i) {
                    i = a.uid++;
                    try {
                        e[this.expando] = {
                            value: i
                        }, Object.defineProperties(t, e)
                    } catch (n) {
                        e[this.expando] = i, J.extend(t, e)
                    }
                }
                return this.cache[i] || (this.cache[i] = {}), i
            },
            set: function(t, e, i) {
                var n, r = this.key(t),
                    o = this.cache[r];
                if ("string" == typeof e) o[e] = i;
                else if (J.isEmptyObject(o)) J.extend(this.cache[r], e);
                else
                    for (n in e) o[n] = e[n];
                return o
            },
            get: function(t, e) {
                var i = this.cache[this.key(t)];
                return void 0 === e ? i : i[e]
            },
            access: function(t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, J.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n, r, o = this.key(t),
                    s = this.cache[o];
                if (void 0 === e) this.cache[o] = {};
                else {
                    J.isArray(e) ? n = e.concat(e.map(J.camelCase)) : (r = J.camelCase(e), e in s ? n = [e, r] : (n = r, n = n in s ? [n] : n.match(ft) || [])), i = n.length;
                    for (; i--;) delete s[n[i]]
                }
            },
            hasData: function(t) {
                return !J.isEmptyObject(this.cache[t[this.expando]] || {})
            },
            discard: function(t) {
                t[this.expando] && delete this.cache[t[this.expando]]
            }
        };
        var vt = new a,
            yt = new a,
            _t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            bt = /([A-Z])/g;
        J.extend({
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
        }), J.fn.extend({
            data: function(t, e) {
                var i, n, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = yt.get(o), 1 === o.nodeType && !vt.get(o, "hasDataAttrs"))) {
                        for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = J.camelCase(n.slice(5)), l(o, n, r[n])));
                        vt.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    yt.set(this, t)
                }) : mt(this, function(e) {
                    var i, n = J.camelCase(t);
                    if (o && void 0 === e) {
                        if (i = yt.get(o, t), void 0 !== i) return i;
                        if (i = yt.get(o, n), void 0 !== i) return i;
                        if (i = l(o, n, void 0), void 0 !== i) return i
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
        }), J.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = vt.get(t, e), i && (!n || J.isArray(i) ? n = vt.access(t, e, J.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = J.queue(t, e),
                    n = i.length,
                    r = i.shift(),
                    o = J._queueHooks(t, e),
                    s = function() {
                        J.dequeue(t, e)
                    };
                "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return vt.get(t, i) || vt.access(t, i, {
                    empty: J.Callbacks("once memory").add(function() {
                        vt.remove(t, [e + "queue", i])
                    })
                })
            }
        }), J.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? J.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = J.queue(this, t, e);
                    J._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && J.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    J.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    r = J.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --n || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = vt.get(o[s], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            xt = ["Top", "Right", "Bottom", "Left"],
            Tt = function(t, e) {
                return t = e || t, "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t)
            },
            kt = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = Z.createDocumentFragment(),
                e = t.appendChild(Z.createElement("div")),
                i = Z.createElement("input");
            i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Ct = "undefined";
        G.focusinBubbles = "onfocusin" in t;
        var St = /^key/,
            Pt = /^(?:mouse|pointer|contextmenu)|click/,
            Ot = /^(?:focusinfocus|focusoutblur)$/,
            Et = /^([^.]*)(?:\.(.+)|)$/;
        J.event = {
            global: {},
            add: function(t, e, i, n, r) {
                var o, s, a, l, h, c, u, p, f, d, g, m = vt.get(t);
                if (m)
                    for (i.handler && (o = i, i = o.handler, r = o.selector), i.guid || (i.guid = J.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                            return typeof J !== Ct && J.event.triggered !== e.type ? J.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(ft) || [""], h = e.length; h--;) a = Et.exec(e[h]) || [], f = g = a[1], d = (a[2] || "").split(".").sort(), f && (u = J.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = J.event.special[f] || {}, c = J.extend({
                        type: f,
                        origType: g,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && J.expr.match.needsContext.test(r),
                        namespace: d.join(".")
                    }, o), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, u.setup && u.setup.call(t, n, d, s) !== !1 || t.addEventListener && t.addEventListener(f, s, !1)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), J.event.global[f] = !0)
            },
            remove: function(t, e, i, n, r) {
                var o, s, a, l, h, c, u, p, f, d, g, m = vt.hasData(t) && vt.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(ft) || [""], h = e.length; h--;)
                        if (a = Et.exec(e[h]) || [], f = g = a[1], d = (a[2] || "").split(".").sort(), f) {
                            for (u = J.event.special[f] || {}, f = (n ? u.delegateType : u.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !r && g !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, u.remove && u.remove.call(t, c));
                            s && !p.length && (u.teardown && u.teardown.call(t, d, m.handle) !== !1 || J.removeEvent(t, f, m.handle), delete l[f])
                        } else
                            for (f in l) J.event.remove(t, f + e[h], i, n, !0);
                    J.isEmptyObject(l) && (delete m.handle, vt.remove(t, "events"))
                }
            },
            trigger: function(e, i, n, r) {
                var o, s, a, l, h, c, u, p = [n || Z],
                    f = Q.call(e, "type") ? e.type : e,
                    d = Q.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = a = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !Ot.test(f + J.event.triggered) && (f.indexOf(".") >= 0 && (d = f.split("."), f = d.shift(), d.sort()), h = f.indexOf(":") < 0 && "on" + f, e = e[J.expando] ? e : new J.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : J.makeArray(i, [e]), u = J.event.special[f] || {}, r || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                    if (!r && !u.noBubble && !J.isWindow(n)) {
                        for (l = u.delegateType || f, Ot.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                        a === (n.ownerDocument || Z) && p.push(a.defaultView || a.parentWindow || t)
                    }
                    for (o = 0;
                        (s = p[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : u.bindType || f, c = (vt.get(s, "events") || {})[e.type] && vt.get(s, "handle"), c && c.apply(s, i), c = h && s[h], c && c.apply && J.acceptData(s) && (e.result = c.apply(s, i), e.result === !1 && e.preventDefault());
                    return e.type = f, r || e.isDefaultPrevented() || u._default && u._default.apply(p.pop(), i) !== !1 || !J.acceptData(n) || h && J.isFunction(n[f]) && !J.isWindow(n) && (a = n[h], a && (n[h] = null), J.event.triggered = f, n[f](), J.event.triggered = void 0, a && (n[h] = a)), e.result
                }
            },
            dispatch: function(t) {
                t = J.event.fix(t);
                var e, i, n, r, o, s = [],
                    a = B.call(arguments),
                    l = (vt.get(this, "events") || {})[t.type] || [],
                    h = J.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
                    for (s = J.event.handlers.call(this, t, l), e = 0;
                        (r = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, i = 0;
                            (o = r.handlers[i++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(o.namespace) || (t.handleObj = o, t.data = o.data, n = ((J.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return h.postDispatch && h.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, r, o, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (l.disabled !== !0 || "click" !== t.type) {
                            for (n = [], i = 0; a > i; i++) o = e[i], r = o.selector + " ", void 0 === n[r] && (n[r] = o.needsContext ? J(r, this).index(l) >= 0 : J.find(r, this, null, [l]).length), n[r] && n.push(o);
                            n.length && s.push({
                                elem: l,
                                handlers: n
                            })
                        }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
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
                    var i, n, r, o = e.button;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Z, n = i.documentElement, r = i.body, t.pageX = e.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[J.expando]) return t;
                var e, i, n, r = t.type,
                    o = t,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Pt.test(r) ? this.mouseHooks : St.test(r) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new J.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
                return t.target || (t.target = Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== u() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === u() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return J.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, i, n) {
                var r = J.extend(new J.Event, i, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? J.event.trigger(r, null, e) : J.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
            }
        }, J.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        }, J.Event = function(t, e) {
            return this instanceof J.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : c) : this.type = t, e && J.extend(this, e), this.timeStamp = t && t.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(t, e)
        }, J.Event.prototype = {
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = h, t && t.preventDefault && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = h, t && t.stopPropagation && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, J.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            J.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        r = t.relatedTarget,
                        o = t.handleObj;
                    return r && (r === n || J.contains(n, r)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), G.focusinBubbles || J.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                J.event.simulate(e, t.target, J.event.fix(t), !0)
            };
            J.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        r = vt.access(n, e);
                    r || n.addEventListener(t, i, !0), vt.access(n, e, (r || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        r = vt.access(n, e) - 1;
                    r ? vt.access(n, e, r) : (n.removeEventListener(t, i, !0), vt.remove(n, e))
                }
            }
        }), J.fn.extend({
            on: function(t, e, i, n, r) {
                var o, s;
                if ("object" == typeof t) {
                    "string" != typeof e && (i = i || e, e = void 0);
                    for (s in t) this.on(s, e, i, t[s], r);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = c;
                else if (!n) return this;
                return 1 === r && (o = n, n = function(t) {
                    return J().off(t), o.apply(this, arguments)
                }, n.guid = o.guid || (o.guid = J.guid++)), this.each(function() {
                    J.event.add(this, t, n, i, e)
                })
            },
            one: function(t, e, i, n) {
                return this.on(t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, r;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, J(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = c), this.each(function() {
                    J.event.remove(this, t, i, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    J.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? J.event.trigger(t, e, i, !0) : void 0
            }
        });
        var At = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Dt = /<([\w:]+)/,
            Lt = /<|&#?\w+;/,
            Rt = /<(?:script|style|link)/i,
            Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Mt = /^$|\/(?:java|ecma)script/i,
            $t = /^true\/(.*)/,
            jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            It = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        It.optgroup = It.option, It.tbody = It.tfoot = It.colgroup = It.caption = It.thead, It.th = It.td, J.extend({
            clone: function(t, e, i) {
                var n, r, o, s, a = t.cloneNode(!0),
                    l = J.contains(t.ownerDocument, t);
                if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || J.isXMLDoc(t)))
                    for (s = v(a), o = v(t), n = 0, r = o.length; r > n; n++) y(o[n], s[n]);
                if (e)
                    if (i)
                        for (o = o || v(t), s = s || v(a), n = 0, r = o.length; r > n; n++) m(o[n], s[n]);
                    else m(t, a);
                return s = v(a, "script"), s.length > 0 && g(s, !l && v(t, "script")), a
            },
            buildFragment: function(t, e, i, n) {
                for (var r, o, s, a, l, h, c = e.createDocumentFragment(), u = [], p = 0, f = t.length; f > p; p++)
                    if (r = t[p], r || 0 === r)
                        if ("object" === J.type(r)) J.merge(u, r.nodeType ? [r] : r);
                        else if (Lt.test(r)) {
                    for (o = o || c.appendChild(e.createElement("div")), s = (Dt.exec(r) || ["", ""])[1].toLowerCase(), a = It[s] || It._default, o.innerHTML = a[1] + r.replace(At, "<$1></$2>") + a[2], h = a[0]; h--;) o = o.lastChild;
                    J.merge(u, o.childNodes), o = c.firstChild, o.textContent = ""
                } else u.push(e.createTextNode(r));
                for (c.textContent = "", p = 0; r = u[p++];)
                    if ((!n || -1 === J.inArray(r, n)) && (l = J.contains(r.ownerDocument, r), o = v(c.appendChild(r), "script"), l && g(o), i))
                        for (h = 0; r = o[h++];) Mt.test(r.type || "") && i.push(r);
                return c
            },
            cleanData: function(t) {
                for (var e, i, n, r, o = J.event.special, s = 0; void 0 !== (i = t[s]); s++) {
                    if (J.acceptData(i) && (r = i[vt.expando], r && (e = vt.cache[r]))) {
                        if (e.events)
                            for (n in e.events) o[n] ? J.event.remove(i, n) : J.removeEvent(i, n, e.handle);
                        vt.cache[r] && delete vt.cache[r]
                    }
                    delete yt.cache[i[yt.expando]]
                }
            }
        }), J.fn.extend({
            text: function(t) {
                return mt(this, function(t) {
                    return void 0 === t ? J.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = p(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = p(this, t);
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
                for (var i, n = t ? J.filter(t, this) : this, r = 0; null != (i = n[r]); r++) e || 1 !== i.nodeType || J.cleanData(v(i)), i.parentNode && (e && J.contains(i.ownerDocument, i) && g(v(i, "script")), i.parentNode.removeChild(i));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (J.cleanData(v(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return J.clone(this, t, e)
                })
            },
            html: function(t) {
                return mt(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Rt.test(t) && !It[(Dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(At, "<$1></$2>");
                        try {
                            for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (J.cleanData(v(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (r) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, J.cleanData(v(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = H.apply([], t);
                var i, n, r, o, s, a, l = 0,
                    h = this.length,
                    c = this,
                    u = h - 1,
                    p = t[0],
                    g = J.isFunction(p);
                if (g || h > 1 && "string" == typeof p && !G.checkClone && Nt.test(p)) return this.each(function(i) {
                    var n = c.eq(i);
                    g && (t[0] = p.call(this, i, n.html())), n.domManip(t, e)
                });
                if (h && (i = J.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                    for (r = J.map(v(i, "script"), f), o = r.length; h > l; l++) s = i, l !== u && (s = J.clone(s, !0, !0), o && J.merge(r, v(s, "script"))), e.call(this[l], s, l);
                    if (o)
                        for (a = r[r.length - 1].ownerDocument, J.map(r, d), l = 0; o > l; l++) s = r[l], Mt.test(s.type || "") && !vt.access(s, "globalEval") && J.contains(a, s) && (s.src ? J._evalUrl && J._evalUrl(s.src) : J.globalEval(s.textContent.replace(jt, "")))
                }
                return this
            }
        }), J.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            J.fn[t] = function(t) {
                for (var i, n = [], r = J(t), o = r.length - 1, s = 0; o >= s; s++) i = s === o ? this : this.clone(!0), J(r[s])[e](i), U.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var Ft, zt = {},
            Wt = /^margin/,
            qt = new RegExp("^(" + wt + ")(?!px)[a-z%]+$", "i"),
            Bt = function(e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
            };
        ! function() {
            function e() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(o);
                var e = t.getComputedStyle(s, null);
                i = "1%" !== e.top, n = "4px" === e.width, r.removeChild(o)
            }
            var i, n, r = Z.documentElement,
                o = Z.createElement("div"),
                s = Z.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), t.getComputedStyle && J.extend(G, {
                pixelPosition: function() {
                    return e(), i
                },
                boxSizingReliable: function() {
                    return null == n && e(), n
                },
                reliableMarginRight: function() {
                    var e, i = s.appendChild(Z.createElement("div"));
                    return i.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", s.style.width = "1px", r.appendChild(o), e = !parseFloat(t.getComputedStyle(i, null).marginRight), r.removeChild(o), s.removeChild(i), e
                }
            }))
        }(), J.swap = function(t, e, i, n) {
            var r, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            r = i.apply(t, n || []);
            for (o in e) t.style[o] = s[o];
            return r
        };
        var Ht = /^(none|table(?!-c[ea]).+)/,
            Ut = new RegExp("^(" + wt + ")(.*)$", "i"),
            Xt = new RegExp("^([+-])=(" + wt + ")", "i"),
            Yt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Vt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Qt = ["Webkit", "O", "Moz", "ms"];
        J.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = w(t, "opacity");
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
                    var r, o, s, a = J.camelCase(e),
                        l = t.style;
                    return e = J.cssProps[a] || (J.cssProps[a] = T(l, a)), s = J.cssHooks[e] || J.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (r = s.get(t, !1, n)) ? r : l[e] : (o = typeof i, "string" === o && (r = Xt.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(J.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || J.cssNumber[a] || (i += "px"), G.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i)), void 0)
                }
            },
            css: function(t, e, i, n) {
                var r, o, s, a = J.camelCase(e);
                return e = J.cssProps[a] || (J.cssProps[a] = T(t.style, a)), s = J.cssHooks[e] || J.cssHooks[a], s && "get" in s && (r = s.get(t, !0, i)), void 0 === r && (r = w(t, e, n)), "normal" === r && e in Vt && (r = Vt[e]), "" === i || i ? (o = parseFloat(r), i === !0 || J.isNumeric(o) ? o || 0 : r) : r
            }
        }), J.each(["height", "width"], function(t, e) {
            J.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? Ht.test(J.css(t, "display")) && 0 === t.offsetWidth ? J.swap(t, Yt, function() {
                        return S(t, e, n)
                    }) : S(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var r = n && Bt(t);
                    return k(t, i, n ? C(t, e, n, "border-box" === J.css(t, "boxSizing", !1, r), r) : 0)
                }
            }
        }), J.cssHooks.marginRight = x(G.reliableMarginRight, function(t, e) {
            return e ? J.swap(t, {
                display: "inline-block"
            }, w, [t, "marginRight"]) : void 0
        }), J.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            J.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + xt[n] + e] = o[n] || o[n - 2] || o[0];
                    return r
                }
            }, Wt.test(t) || (J.cssHooks[t + e].set = k)
        }), J.fn.extend({
            css: function(t, e) {
                return mt(this, function(t, e, i) {
                    var n, r, o = {},
                        s = 0;
                    if (J.isArray(e)) {
                        for (n = Bt(t), r = e.length; r > s; s++) o[e[s]] = J.css(t, e[s], !1, n);
                        return o
                    }
                    return void 0 !== i ? J.style(t, e, i) : J.css(t, e)
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
                    Tt(this) ? J(this).show() : J(this).hide()
                })
            }
        }), J.Tween = O, O.prototype = {
            constructor: O,
            init: function(t, e, i, n, r, o) {
                this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (J.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = O.propHooks[this.prop];
                return t && t.get ? t.get(this) : O.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = O.propHooks[this.prop];
                return this.options.duration ? this.pos = e = J.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : O.propHooks._default.set(this), this
            }
        }, O.prototype.init.prototype = O.prototype, O.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = J.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    J.fx.step[t.prop] ? J.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop]) ? J.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, J.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, J.fx = O.prototype.init, J.fx.step = {};
        var Gt, Zt, Kt = /^(?:toggle|show|hide)$/,
            Jt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$", "i"),
            te = /queueHooks$/,
            ee = [L],
            ie = {
                "*": [function(t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        r = Jt.exec(e),
                        o = r && r[3] || (J.cssNumber[t] ? "" : "px"),
                        s = (J.cssNumber[t] || "px" !== o && +n) && Jt.exec(J.css(i.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== o) {
                        o = o || s[3], r = r || [], s = +n || 1;
                        do a = a || ".5", s /= a, J.style(i.elem, t, s + o); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                    }
                    return r && (s = i.start = +s || +n || 0, i.unit = o, i.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), i
                }]
            };
        J.Animation = J.extend(N, {
                tweener: function(t, e) {
                    J.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var i, n = 0, r = t.length; r > n; n++) i = t[n], ie[i] = ie[i] || [], ie[i].unshift(e)
                },
                prefilter: function(t, e) {
                    e ? ee.unshift(t) : ee.push(t)
                }
            }), J.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? J.extend({}, t) : {
                    complete: i || !i && e || J.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !J.isFunction(e) && e
                };
                return n.duration = J.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in J.fx.speeds ? J.fx.speeds[n.duration] : J.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    J.isFunction(n.old) && n.old.call(this), n.queue && J.dequeue(this, n.queue)
                }, n
            }, J.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(Tt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(t, e, i, n) {
                    var r = J.isEmptyObject(t),
                        o = J.speed(e, i, n),
                        s = function() {
                            var e = N(this, J.extend({}, t), o);
                            (r || vt.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            o = J.timers,
                            s = vt.get(this);
                        if (r) s[r] && s[r].stop && n(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && te.test(r) && n(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(i), e = !1, o.splice(r, 1));
                        !e && i || J.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, i = vt.get(this),
                            n = i[t + "queue"],
                            r = i[t + "queueHooks"],
                            o = J.timers,
                            s = n ? n.length : 0;
                        for (i.finish = !0, J.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0),
                            o.splice(e, 1));
                        for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), J.each(["toggle", "show", "hide"], function(t, e) {
                var i = J.fn[e];
                J.fn[e] = function(t, n, r) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(A(e, !0), t, n, r)
                }
            }), J.each({
                slideDown: A("show"),
                slideUp: A("hide"),
                slideToggle: A("toggle"),
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
                J.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), J.timers = [], J.fx.tick = function() {
                var t, e = 0,
                    i = J.timers;
                for (Gt = J.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
                i.length || J.fx.stop(), Gt = void 0
            }, J.fx.timer = function(t) {
                J.timers.push(t), t() ? J.fx.start() : J.timers.pop()
            }, J.fx.interval = 13, J.fx.start = function() {
                Zt || (Zt = setInterval(J.fx.tick, J.fx.interval))
            }, J.fx.stop = function() {
                clearInterval(Zt), Zt = null
            }, J.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, J.fn.delay = function(t, e) {
                return t = J.fx ? J.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var n = setTimeout(e, t);
                    i.stop = function() {
                        clearTimeout(n)
                    }
                })
            },
            function() {
                var t = Z.createElement("input"),
                    e = Z.createElement("select"),
                    i = e.appendChild(Z.createElement("option"));
                t.type = "checkbox", G.checkOn = "" !== t.value, G.optSelected = i.selected, e.disabled = !0, G.optDisabled = !i.disabled, t = Z.createElement("input"), t.value = "t", t.type = "radio", G.radioValue = "t" === t.value
            }();
        var ne, re, oe = J.expr.attrHandle;
        J.fn.extend({
            attr: function(t, e) {
                return mt(this, J.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    J.removeAttr(this, t)
                })
            }
        }), J.extend({
            attr: function(t, e, i) {
                var n, r, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Ct ? J.prop(t, e, i) : (1 === o && J.isXMLDoc(t) || (e = e.toLowerCase(), n = J.attrHooks[e] || (J.expr.match.bool.test(e) ? re : ne)), void 0 === i ? n && "get" in n && null !== (r = n.get(t, e)) ? r : (r = J.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(t, i, e)) ? r : (t.setAttribute(e, i + ""), i) : void J.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var i, n, r = 0,
                    o = e && e.match(ft);
                if (o && 1 === t.nodeType)
                    for (; i = o[r++];) n = J.propFix[i] || i, J.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!G.radioValue && "radio" === e && J.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            }
        }), re = {
            set: function(t, e, i) {
                return e === !1 ? J.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, J.each(J.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = oe[e] || J.find.attr;
            oe[e] = function(t, e, n) {
                var r, o;
                return n || (o = oe[e], oe[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, oe[e] = o), r
            }
        });
        var se = /^(?:input|select|textarea|button)$/i;
        J.fn.extend({
            prop: function(t, e) {
                return mt(this, J.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[J.propFix[t] || t]
                })
            }
        }), J.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, i) {
                var n, r, o, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !J.isXMLDoc(t), o && (e = J.propFix[e] || e, r = J.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        return t.hasAttribute("tabindex") || se.test(t.nodeName) || t.href ? t.tabIndex : -1
                    }
                }
            }
        }), G.optSelected || (J.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }
        }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            J.propFix[this.toLowerCase()] = this
        });
        var ae = /[\t\r\n\f]/g;
        J.fn.extend({
            addClass: function(t) {
                var e, i, n, r, o, s, a = "string" == typeof t && t,
                    l = 0,
                    h = this.length;
                if (J.isFunction(t)) return this.each(function(e) {
                    J(this).addClass(t.call(this, e, this.className))
                });
                if (a)
                    for (e = (t || "").match(ft) || []; h > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : " ")) {
                            for (o = 0; r = e[o++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                            s = J.trim(n), i.className !== s && (i.className = s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, r, o, s, a = 0 === arguments.length || "string" == typeof t && t,
                    l = 0,
                    h = this.length;
                if (J.isFunction(t)) return this.each(function(e) {
                    J(this).removeClass(t.call(this, e, this.className))
                });
                if (a)
                    for (e = (t || "").match(ft) || []; h > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : "")) {
                            for (o = 0; r = e[o++];)
                                for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                            s = t ? J.trim(n) : "", i.className !== s && (i.className = s)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : J.isFunction(t) ? this.each(function(i) {
                    J(this).toggleClass(t.call(this, i, this.className, e), e)
                }) : this.each(function() {
                    if ("string" === i)
                        for (var e, n = 0, r = J(this), o = t.match(ft) || []; e = o[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else i !== Ct && "boolean" !== i || (this.className && vt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : vt.get(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(ae, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        });
        var le = /\r/g;
        J.fn.extend({
            val: function(t) {
                var e, i, n, r = this[0]; {
                    if (arguments.length) return n = J.isFunction(t), this.each(function(i) {
                        var r;
                        1 === this.nodeType && (r = n ? t.call(this, i, J(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : J.isArray(r) && (r = J.map(r, function(t) {
                            return null == t ? "" : t + ""
                        })), e = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return e = J.valHooks[r.type] || J.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(le, "") : null == i ? "" : i)
                }
            }
        }), J.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = J.find.attr(t, "value");
                        return null != e ? e : J.trim(J.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : n.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                            if (i = n[l], (i.selected || l === r) && (G.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !J.nodeName(i.parentNode, "optgroup"))) {
                                if (e = J(i).val(), o) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var i, n, r = t.options, o = J.makeArray(e), s = r.length; s--;) n = r[s], (n.selected = J.inArray(n.value, o) >= 0) && (i = !0);
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), J.each(["radio", "checkbox"], function() {
            J.valHooks[this] = {
                set: function(t, e) {
                    return J.isArray(e) ? t.checked = J.inArray(J(t).val(), e) >= 0 : void 0
                }
            }, G.checkOn || (J.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            J.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), J.fn.extend({
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
        var he = J.now(),
            ce = /\?/;
        J.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, J.parseXML = function(t) {
            var e, i;
            if (!t || "string" != typeof t) return null;
            try {
                i = new DOMParser, e = i.parseFromString(t, "text/xml")
            } catch (n) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || J.error("Invalid XML: " + t), e
        };
        var ue = /#.*$/,
            pe = /([?&])_=[^&]*/,
            fe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            de = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            ge = /^(?:GET|HEAD)$/,
            me = /^\/\//,
            ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            ye = {},
            _e = {},
            be = "*/".concat("*"),
            we = t.location.href,
            xe = ve.exec(we.toLowerCase()) || [];
        J.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: we,
                type: "GET",
                isLocal: de.test(xe[1]),
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
                    "text json": J.parseJSON,
                    "text xml": J.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? j(j(t, J.ajaxSettings), e) : j(J.ajaxSettings, t)
            },
            ajaxPrefilter: M(ye),
            ajaxTransport: M(_e),
            ajax: function(t, e) {
                function i(t, e, i, s) {
                    var l, c, v, y, b, x = e;
                    2 !== _ && (_ = 2, a && clearTimeout(a), n = void 0, o = s || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (y = I(u, w, i)), y = F(u, y, w, l), l ? (u.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (J.lastModified[r] = b), b = w.getResponseHeader("etag"), b && (J.etag[r] = b)), 204 === t || "HEAD" === u.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = y.state, c = y.data, v = y.error, l = !v)) : (v = x, !t && x || (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", l ? d.resolveWith(p, [c, x, w]) : d.rejectWith(p, [w, x, v]), w.statusCode(m), m = void 0, h && f.trigger(l ? "ajaxSuccess" : "ajaxError", [w, u, l ? c : v]), g.fireWith(p, [w, x]), h && (f.trigger("ajaxComplete", [w, u]), --J.active || J.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, r, o, s, a, l, h, c, u = J.ajaxSetup({}, e),
                    p = u.context || u,
                    f = u.context && (p.nodeType || p.jquery) ? J(p) : J.event,
                    d = J.Deferred(),
                    g = J.Callbacks("once memory"),
                    m = u.statusCode || {},
                    v = {},
                    y = {},
                    _ = 0,
                    b = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === _) {
                                if (!s)
                                    for (s = {}; e = fe.exec(o);) s[e[1].toLowerCase()] = e[2];
                                e = s[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === _ ? o : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return _ || (t = y[i] = y[i] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return _ || (u.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > _)
                                    for (e in t) m[e] = [m[e], t[e]];
                                else w.always(t[w.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || b;
                            return n && n.abort(e), i(0, e), this
                        }
                    };
                if (d.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, u.url = ((t || u.url || we) + "").replace(ue, "").replace(me, xe[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = J.trim(u.dataType || "*").toLowerCase().match(ft) || [""], null == u.crossDomain && (l = ve.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === xe[1] && l[2] === xe[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (xe[3] || ("http:" === xe[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = J.param(u.data, u.traditional)), $(ye, u, e, w), 2 === _) return w;
                h = J.event && u.global, h && 0 === J.active++ && J.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !ge.test(u.type), r = u.url, u.hasContent || (u.data && (r = u.url += (ce.test(r) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = pe.test(r) ? r.replace(pe, "$1_=" + he++) : r + (ce.test(r) ? "&" : "?") + "_=" + he++)), u.ifModified && (J.lastModified[r] && w.setRequestHeader("If-Modified-Since", J.lastModified[r]), J.etag[r] && w.setRequestHeader("If-None-Match", J.etag[r])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + be + "; q=0.01" : "") : u.accepts["*"]);
                for (c in u.headers) w.setRequestHeader(c, u.headers[c]);
                if (u.beforeSend && (u.beforeSend.call(p, w, u) === !1 || 2 === _)) return w.abort();
                b = "abort";
                for (c in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[c](u[c]);
                if (n = $(_e, u, e, w)) {
                    w.readyState = 1, h && f.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (a = setTimeout(function() {
                        w.abort("timeout")
                    }, u.timeout));
                    try {
                        _ = 1, n.send(v, i)
                    } catch (x) {
                        if (!(2 > _)) throw x;
                        i(-1, x)
                    }
                } else i(-1, "No Transport");
                return w
            },
            getJSON: function(t, e, i) {
                return J.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return J.get(t, void 0, e, "script")
            }
        }), J.each(["get", "post"], function(t, e) {
            J[e] = function(t, i, n, r) {
                return J.isFunction(i) && (r = r || n, n = i, i = void 0), J.ajax({
                    url: t,
                    type: e,
                    dataType: r,
                    data: i,
                    success: n
                })
            }
        }), J._evalUrl = function(t) {
            return J.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, J.fn.extend({
            wrapAll: function(t) {
                var e;
                return J.isFunction(t) ? this.each(function(e) {
                    J(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = J(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return J.isFunction(t) ? this.each(function(e) {
                    J(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = J(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = J.isFunction(t);
                return this.each(function(i) {
                    J(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
                }).end()
            }
        }), J.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0
        }, J.expr.filters.visible = function(t) {
            return !J.expr.filters.hidden(t)
        };
        var Te = /%20/g,
            ke = /\[\]$/,
            Ce = /\r?\n/g,
            Se = /^(?:submit|button|image|reset|file)$/i,
            Pe = /^(?:input|select|textarea|keygen)/i;
        J.param = function(t, e) {
            var i, n = [],
                r = function(t, e) {
                    e = J.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(t) || t.jquery && !J.isPlainObject(t)) J.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (i in t) z(i, t[i], e, r);
            return n.join("&").replace(Te, "+")
        }, J.fn.extend({
            serialize: function() {
                return J.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = J.prop(this, "elements");
                    return t ? J.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !J(this).is(":disabled") && Pe.test(this.nodeName) && !Se.test(t) && (this.checked || !kt.test(t))
                }).map(function(t, e) {
                    var i = J(this).val();
                    return null == i ? null : J.isArray(i) ? J.map(i, function(t) {
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
        }), J.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (t) {}
        };
        var Oe = 0,
            Ee = {},
            Ae = {
                0: 200,
                1223: 204
            },
            De = J.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() {
            for (var t in Ee) Ee[t]()
        }), G.cors = !!De && "withCredentials" in De, G.ajax = De = !!De, J.ajaxTransport(function(t) {
            var e;
            return G.cors || De && !t.crossDomain ? {
                send: function(i, n) {
                    var r, o = t.xhr(),
                        s = ++Oe;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (r in t.xhrFields) o[r] = t.xhrFields[r];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (r in i) o.setRequestHeader(r, i[r]);
                    e = function(t) {
                        return function() {
                            e && (delete Ee[s], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? n(o.status, o.statusText) : n(Ae[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                text: o.responseText
                            } : void 0, o.getAllResponseHeaders()))
                        }
                    }, o.onload = e(), o.onerror = e("error"), e = Ee[s] = e("abort");
                    try {
                        o.send(t.hasContent && t.data || null)
                    } catch (a) {
                        if (e) throw a
                    }
                },
                abort: function() {
                    e && e()
                }
            } : void 0
        }), J.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return J.globalEval(t), t
                }
            }
        }), J.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), J.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i;
                return {
                    send: function(n, r) {
                        e = J("<script>").prop({
                            async: !0,
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function(t) {
                            e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
                        }), Z.head.appendChild(e[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
            }
        });
        var Le = [],
            Re = /(=)\?(?=&|$)|\?\?/;
        J.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Le.pop() || J.expando + "_" + he++;
                return this[t] = !0, t
            }
        }), J.ajaxPrefilter("json jsonp", function(e, i, n) {
            var r, o, s, a = e.jsonp !== !1 && (Re.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Re.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Re, "$1" + r) : e.jsonp !== !1 && (e.url += (ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return s || J.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
                s = arguments
            }, n.always(function() {
                t[r] = o, e[r] && (e.jsonpCallback = i.jsonpCallback, Le.push(r)), s && J.isFunction(o) && o(s[0]), s = o = void 0
            }), "script") : void 0
        }), J.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || Z;
            var n = st.exec(t),
                r = !i && [];
            return n ? [e.createElement(n[1])] : (n = J.buildFragment([t], e, r), r && r.length && J(r).remove(), J.merge([], n.childNodes))
        };
        var Ne = J.fn.load;
        J.fn.load = function(t, e, i) {
            if ("string" != typeof t && Ne) return Ne.apply(this, arguments);
            var n, r, o, s = this,
                a = t.indexOf(" ");
            return a >= 0 && (n = J.trim(t.slice(a)), t = t.slice(0, a)), J.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && J.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, s.html(n ? J("<div>").append(J.parseHTML(t)).find(n) : t)
            }).complete(i && function(t, e) {
                s.each(i, o || [t.responseText, e, t])
            }), this
        }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            J.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), J.expr.filters.animated = function(t) {
            return J.grep(J.timers, function(e) {
                return t === e.elem
            }).length
        };
        var Me = t.document.documentElement;
        J.offset = {
            setOffset: function(t, e, i) {
                var n, r, o, s, a, l, h, c = J.css(t, "position"),
                    u = J(t),
                    p = {};
                "static" === c && (t.style.position = "relative"), a = u.offset(), o = J.css(t, "top"), l = J.css(t, "left"), h = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, h ? (n = u.position(), s = n.top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), J.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + r), "using" in e ? e.using.call(t, p) : u.css(p)
            }
        }, J.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    J.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = n && n.ownerDocument;
                if (o) return e = o.documentElement, J.contains(e, n) ? (typeof n.getBoundingClientRect !== Ct && (r = n.getBoundingClientRect()), i = W(o), {
                    top: r.top + i.pageYOffset - e.clientTop,
                    left: r.left + i.pageXOffset - e.clientLeft
                }) : r
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === J.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), J.nodeName(t[0], "html") || (n = t.offset()), n.top += J.css(t[0], "borderTopWidth", !0), n.left += J.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - J.css(i, "marginTop", !0),
                        left: e.left - n.left - J.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || Me; t && !J.nodeName(t, "html") && "static" === J.css(t, "position");) t = t.offsetParent;
                    return t || Me
                })
            }
        }), J.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, i) {
            var n = "pageYOffset" === i;
            J.fn[e] = function(r) {
                return mt(this, function(e, r, o) {
                    var s = W(e);
                    return void 0 === o ? s ? s[i] : e[r] : void(s ? s.scrollTo(n ? t.pageXOffset : o, n ? o : t.pageYOffset) : e[r] = o)
                }, e, r, arguments.length, null)
            }
        }), J.each(["top", "left"], function(t, e) {
            J.cssHooks[e] = x(G.pixelPosition, function(t, i) {
                return i ? (i = w(t, e), qt.test(i) ? J(t).position()[e] + "px" : i) : void 0
            })
        }), J.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            J.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                J.fn[n] = function(n, r) {
                    var o = arguments.length && (i || "boolean" != typeof n),
                        s = i || (n === !0 || r === !0 ? "margin" : "border");
                    return mt(this, function(e, i, n) {
                        var r;
                        return J.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? J.css(e, i, s) : J.style(e, i, n, s)
                    }, e, o ? n : void 0, o, null)
                }
            })
        }), J.fn.size = function() {
            return this.length
        }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return J
        });
        var $e = t.jQuery,
            je = t.$;
        return J.noConflict = function(e) {
            return t.$ === J && (t.$ = je), e && t.jQuery === J && (t.jQuery = $e), J
        }, typeof e === Ct && (t.jQuery = t.$ = J), J
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
        var r = function() {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
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
                r = i.data("bs.alert");
            r || i.data("bs.alert", r = new n(this)), "string" == typeof e && r[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        n = function(e) {
            t(e).on("click", i, this.close)
        };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        function i() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var r = t(this),
            o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(o);
        e && e.preventDefault(), s.length || (s = r.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var r = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = r, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.button"),
                o = "object" == typeof e && e;
            r || n.data("bs.button", r = new i(this, o)), "toggle" == e ? r.toggle() : e && r.setState(e)
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
            r = n.is("input") ? "val" : "html",
            o = n.data();
        e += "Text", null == o.resetText && n.data("resetText", n[r]()), setTimeout(t.proxy(function() {
            n[r](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
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
                r = n.data("bs.carousel"),
                o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : o.slide;
            r || n.data("bs.carousel", r = new i(this, o)), "number" == typeof e ? r.to(e) : s ? r[s]() : o.interval && r.pause().cycle()
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
        var r = "prev" == t ? -1 : 1,
            o = (i + r) % this.$items.length;
        return this.$items.eq(o)
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
        var r = this.$element.find(".item.active"),
            o = n || this.getItemForDirection(e, r),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var h = o[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: a
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = t(this.$indicators.children()[this.getItemIndex(o)]);
                u && u.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, r.addClass(a), o.addClass(a), r.one("bsTransitionEnd", function() {
                o.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this
    };
    var r = function(i) {
        var n, r = t(this),
            o = t(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var s = t.extend({}, o.data(), r.data()),
                a = r.attr("data-slide-to");
            a && (s.interval = !1), e.call(o, s), a && o.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", function() {
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
                r = i.data("bs.collapse"),
                o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !r && o.toggle && /show|hide/.test(e) && (o.toggle = !1), r || i.data("bs.collapse", r = new n(this, o)), "string" == typeof e && r[e]()
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
            var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (e = r.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    r && r.length && (i.call(r, "hide"), e || r.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : r.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
            var r = t(n);
            this.addAriaAndCollapsedClass(e(r), r)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var r = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = r, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var r = t(this);
        r.attr("data-target") || n.preventDefault();
        var o = e(r),
            s = o.data("bs.collapse"),
            a = s ? "toggle" : r.data();
        i.call(o, a)
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
        i && 3 === i.which || (t(r).remove(), t(o).each(function() {
            var n = t(this),
                r = e(n),
                o = {
                    relatedTarget: this
                };
            r.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(r[0], i.target) || (r.trigger(i = t.Event("hide.bs.dropdown", o)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), r.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
        }))
    }

    function n(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new s(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var r = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.6", s.prototype.toggle = function(n) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var o = e(r),
                s = o.hasClass("open");
            if (i(), !s) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var n = t(this);
            if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                var r = e(n),
                    s = r.hasClass("open");
                if (!s && 27 != i.which || s && 27 == i.which) return 27 == i.which && r.find(o).trigger("focus"), n.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = r.find(".dropdown-menu" + a);
                if (l.length) {
                    var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, n) {
        return this.each(function() {
            var r = t(this),
                o = r.data("bs.modal"),
                s = t.extend({}, i.DEFAULTS, r.data(), "object" == typeof e && e);
            o || r.data("bs.modal", o = new i(this, s)), "string" == typeof e ? o[e](n) : s.show && o.show(n)
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
            r = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var r = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), r && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            r ? n.$dialog.one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(o)
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
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && r;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s()
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
            r = n.attr("href"),
            o = t(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            s = o.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(r) && r
            }, o.data(), n.data());
        n.is("a") && i.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(o, s, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.tooltip"),
                o = "object" == typeof e && e;
            !r && /destroy|hide/.test(e) || (r || n.data("bs.tooltip", r = new i(this, o)), "string" == typeof e && r[e]())
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
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var s = r[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
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
            var r = this,
                o = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(a);
            h && (a = a.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                u = o[0].offsetWidth,
                p = o[0].offsetHeight;
            if (h) {
                var f = a,
                    d = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + p > d.bottom ? "top" : "top" == a && c.top - p < d.top ? "bottom" : "right" == a && c.right + u > d.width ? "left" : "left" == a && c.left - u < d.left ? "right" : a, o.removeClass(f).addClass(a)
            }
            var g = this.getCalculatedOffset(a, c, u, p);
            this.applyPlacement(g, a);
            var m = function() {
                var t = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            r = n[0].offsetWidth,
            o = n[0].offsetHeight,
            s = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            h = n[0].offsetHeight;
        "top" == i && h != o && (e.top = e.top + o - h);
        var c = this.getViewportAdjustedDelta(i, e, l, h);
        c.left ? e.left += c.left : e.top += c.top;
        var u = /top|bottom/.test(i),
            p = u ? 2 * c.left - r + l : 2 * c.top - o + h,
            f = u ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(p, n[0][f], u)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function n() {
            "in" != r.hoverState && o.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e()
        }
        var r = this,
            o = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            n = "BODY" == i.tagName,
            r = i.getBoundingClientRect();
        null == r.width && (r = t.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var o = n ? {
                top: 0,
                left: 0
            } : e.offset(),
            s = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = n ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, r, s, a, o)
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
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - s.scroll,
                l = e.top + o - s.scroll + n;
            a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
        } else {
            var h = e.left - o,
                c = e.left + o + i;
            h < s.left ? r.left = s.left - h : c > s.right && (r.left = s.left + s.width - c)
        }
        return r
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
                r = n.data("bs.popover"),
                o = "object" == typeof e && e;
            !r && /destroy|hide/.test(e) || (r || n.data("bs.popover", r = new i(this, o)), "string" == typeof e && r[e]())
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
                r = n.data("bs.scrollspy"),
                o = "object" == typeof i && i;
            r || n.data("bs.scrollspy", r = new e(this, o)), "string" == typeof i && r[i]()
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
                r = e.data("target") || e.attr("href"),
                o = /^#./.test(r) && t(r);
            return o && o.length && o.is(":visible") && [
                [o[i]().top + n, r]
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
            r = this.offsets,
            o = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return s != (t = o[o.length - 1]) && this.activate(t);
        if (s && e < r[0]) return this.activeTarget = null, this.clear();
        for (t = r.length; t--;) s != o[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(o[t])
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
                r = n.data("bs.tab");
            r || n.data("bs.tab", r = new i(this)), "string" == typeof e && r[e]()
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
            var r = i.find(".active:last a"),
                o = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            if (r.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, n, r) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }
        var s = n.find("> .active"),
            a = r && t.support.transition && (s.length && s.hasClass("fade") || !!n.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), s.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    };
    var r = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.affix"),
                o = "object" == typeof e && e;
            r || n.data("bs.affix", r = new i(this, o)), "string" == typeof e && r[e]()
        })
    }
    var i = function(e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, n) {
        var r = this.$target.scrollTop(),
            o = this.$element.offset(),
            s = this.$target.height();
        if (null != i && "top" == this.affixed) return i > r ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? r + this.unpin <= o.top ? !1 : "bottom" : t - n >= r + s ? !1 : "bottom";
        var a = null == this.affixed,
            l = a ? r : o.top,
            h = a ? s : e;
        return null != i && i >= r ? "top" : null != n && l + h >= t - n ? "bottom" : !1
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
                r = n.top,
                o = n.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (o = r = n), "function" == typeof r && (r = n.top(this.$element)), "function" == typeof o && (o = n.bottom(this.$element));
            var a = this.getState(s, e, r, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - o
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
        function r(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        var o;
        if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = e, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !t.notNeeded(e)) {
            for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, l = 0, h = s.length; h > l; l++) a[s[l]] = r(a[s[l]], a);
            i && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, i, n) {
                var r = Node.prototype.removeEventListener;
                "click" === t ? r.call(e, t, i.hijacked || i, n) : r.call(e, t, i, n)
            }, e.addEventListener = function(t, i, n) {
                var r = Node.prototype.addEventListener;
                "click" === t ? r.call(e, t, i.hijacked || (i.hijacked = function(t) {
                    t.propagationStopped || i(t)
                }), n) : r.call(e, t, i, n)
            }), "function" == typeof e.onclick && (o = e.onclick, e.addEventListener("click", function(t) {
                o(t)
            }, !1), e.onclick = null)
        }
    }
    var e = navigator.userAgent.indexOf("Windows Phone") >= 0,
        i = navigator.userAgent.indexOf("Android") > 0 && !e,
        n = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
        r = n && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        o = n && /OS [6-7]_\d/.test(navigator.userAgent),
        s = navigator.userAgent.indexOf("BB10") > 0;
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
        var e, i, o;
        if (t.targetTouches.length > 1) return !0;
        if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], n) {
            if (o = window.getSelection(), o.rangeCount && !o.isCollapsed) return !0;
            if (!r) {
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
        var e, s, a, l, h, c = this.targetElement;
        if (!this.trackingClick) return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, s = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, o && (h = t.changedTouches[0], c = document.elementFromPoint(h.pageX - window.pageXOffset, h.pageY - window.pageYOffset) || c, c.fastClickScrollParent = this.targetElement.fastClickScrollParent), a = c.tagName.toLowerCase(), "label" === a) {
            if (e = this.findControl(c)) {
                if (this.focus(c), i) return !1;
                c = e
            }
        } else if (this.needsFocus(c)) return t.timeStamp - s > 100 || n && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(c), this.sendClick(c, t), n && "select" === a || (this.targetElement = null, t.preventDefault()), !1);
        return n && !r && (l = c.fastClickScrollParent, l && l.fastClickLastScrollTop !== l.scrollTop) ? !0 : (this.needsClick(c) || (t.preventDefault(), this.sendClick(c, t)), !1)
    }, t.prototype.onTouchCancel = function() {
        this.trackingClick = !1, this.targetElement = null
    }, t.prototype.onMouse = function(t) {
        return this.targetElement ? t.forwardedTouchEvent ? !0 : t.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1) : !0 : !0
    }, t.prototype.onClick = function(t) {
        var e;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail ? !0 : (e = this.onMouse(t), e || (this.targetElement = null), e)
    }, t.prototype.destroy = function() {
        var t = this.layer;
        i && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, t.notNeeded = function(t) {
        var e, n, r, o;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!i) return !0;
            if (e = document.querySelector("meta[name=viewport]")) {
                if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (s && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && r[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0;
        }
        return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction ? !0 : (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], o >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === t.style.touchAction || "manipulation" === t.style.touchAction)
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
        r = 0,
        o = {
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
        s = function() {
            if (o.onetimeLoad) {
                for (var t, e = document.cookie.split("; "), i = 0; t = e[i] && e[i].split("="); i++)
                    if ("jpreLoader" === t.shift()) return t.join("=");
                return !1
            }
            return !1
        },
        a = function(t) {
            if (o.onetimeLoad) {
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
                }).appendTo("body"), o.showSplash) {
                jContent = t("<div></div>").attr("id", "jpreSlide").appendTo(jOverlay);
                var e = t(window).width() - t(jContent).width();
                t(jContent).css({
                    position: "absolute",
                    top: o.splashVPos,
                    left: Math.round(50 / t(window).width() * e) + "%"
                }), t(jContent).html(t(o.splashID).wrap("<div/>").parent().html()), t(o.splashID).remove(), o.splashFunction()
            }
            jLoader = t("<div></div>").attr("id", "jpreLoader").appendTo(jOverlay);
            var i = t(window).width() - t(jLoader).width();
            t(jLoader).css({
                position: "absolute",
                top: o.loaderVPos,
                left: Math.round(50 / t(window).width() * i) + "%"
            }), jBar = t("<div></div>").attr("id", "jpreBar").css({
                width: "0%",
                height: "100%"
            }).appendTo(jLoader), o.showPercentage && (jPer = t("<div></div>").attr("id", "jprePercentage").css({
                position: "relative",
                height: "100%"
            }).appendTo(jLoader).html("Loading...")), o.autoclose || (jButton = t("<div></div>").attr("id", "jpreButton").on("click", function() {
                f()
            }).css({
                position: "relative",
                height: "100%"
            }).appendTo(jLoader).text(o.closeBtnText).hide())
        },
        h = function(i) {
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
        c = function() {
            for (var t = 0; t < e.length; t++) u(e[t])
        },
        u = function(e) {
            var n = new Image;
            t(n).load(function() {
                p()
            }).error(function() {
                i.push(t(this).attr("src")), p()
            }).attr("src", e)
        },
        p = function() {
            r++;
            var i = Math.round(r / e.length * 100);
            if (t(jBar).stop().animate({
                    width: i + "%"
                }, 500, "linear"), o.showPercentage && t(jPer).text(i + "%"), r >= e.length) {
                if (r = e.length, a(), o.showPercentage && t(jPer).text("100%"), o.debugMode) {
                    d()
                }
                t(jBar).stop().animate({
                    width: "100%"
                }, 500, "linear", function() {
                    o.autoClose ? f() : t(jButton).fadeIn(1e3)
                })
            }
        },
        f = function() {
            t(jOverlay).fadeOut(800, function() {
                t(jOverlay).remove(), n()
            })
        },
        d = function() {
            if (i.length > 0) {
                var t = "ERROR - IMAGE FILES MISSING!!!\n\r";
                t += i.length + " image files cound not be found. \n\r", t += "Please check your image paths and filenames:\n\r";
                for (var e = 0; e < i.length; e++) t += "- " + i[e] + "\n\r";
                return !0
            }
            return !1
        };
    t.fn.jpreLoader = function(e, i) {
        return e && t.extend(o, e), "function" == typeof i && (n = i), t("body").css({
            display: "block"
        }), this.each(function() {
            s() ? (t(o.splashID).remove(), n()) : (l(), h(this), c())
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
                    r = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    o = 1e-10,
                    s = i._internals,
                    a = s.isSelector,
                    l = s.isArray,
                    h = r.prototype = i.to({}, .1, {}),
                    c = [];
                r.version = "1.14.0", h.constructor = r, h.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, h.updateTo = function(t, e) {
                    var n, r = this.ratio;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted)
                        if (e) this._initted = !1;
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var o = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var s, a = 1 / (1 - r), l = this._firstPT; l;) s = l.s + l.c, l.c *= a, l.s = s - l.c, l = l._next
                    }
                    return this
                }, h.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, r, a, l, h, u, p, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        g = this._time,
                        m = this._totalTime,
                        v = this._cycle,
                        y = this._duration,
                        _ = this._rawPrevTime;
                    if (t >= d ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete"), 0 === y && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > _ || _ === o) && _ !== t && (i = !0, _ > o && (r = "onReverseComplete")), this._rawPrevTime = f = !e || t || _ === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === y && _ > 0 && _ !== o) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || i) && (_ >= 0 && (i = !0), this._rawPrevTime = f = !e || t || _ === t ? t : o)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = y - this._time), this._time > y ? this._time = y : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / y, u = this._easeType, p = this._easePower, (1 === u || 3 === u && h >= .5) && (h = 1 - h), 3 === u && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), this.ratio = 1 === u ? 1 - h : 2 === u ? h : .5 > this._time / y ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / y)), g === this._time && !i && v === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = g, this._totalTime = m, this._rawPrevTime = _, this._cycle = v, s.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / y) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== g && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || c)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || c), 0 === y && this._rawPrevTime === o && f !== o && (this._rawPrevTime = 0))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
                }, r.staggerTo = r.allTo = function(t, e, o, s, h, u, p) {
                    s = s || 0;
                    var f, d, g, m, v = o.delay || 0,
                        y = [],
                        _ = function() {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), h.apply(p || this, u || c)
                        };
                    for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], 0 > s && (t = n(t), t.reverse(), s *= -1), f = t.length - 1, g = 0; f >= g; g++) {
                        d = {};
                        for (m in o) d[m] = o[m];
                        d.delay = v, g === f && h && (d.onComplete = _), y[g] = new r(t[g], e, d), v += s
                    }
                    return y
                }, r.staggerFrom = r.allFrom = function(t, e, i, n, o, s, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, n, o, s, a)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, n, o, s, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, o, s, a, l)
                }, r.delayedCall = function(t, e, i, n, o) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        onCompleteScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: n,
                        immediateRender: !1,
                        useFrames: o,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var u = function(t, e) {
                        for (var n = [], r = 0, o = t._first; o;) o instanceof i ? n[r++] = o : (e && (n[r++] = o), n = n.concat(u(o, e)), r = n.length), o = o._next;
                        return n
                    },
                    p = r.getAllTweens = function(e) {
                        return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var o, s, a, l = p(0 != r),
                        h = l.length,
                        c = i && n && r;
                    for (a = 0; h > a; a++) s = l[a], (c || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var o, h, c, u, p, f = s.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))
                            for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                        else {
                            o = [];
                            for (c in f)
                                for (h = f[c].target.parentNode; h;) h === t && (o = o.concat(f[c].tweens)), h = h.parentNode;
                            for (p = o.length, u = 0; p > u; u++) e && o[u].totalTime(o[u].totalDuration()), o[u]._enabled(!1, !1)
                        }
                    }
                };
                var f = function(t, i, n, r) {
                    i = i !== !1, n = n !== !1, r = r !== !1;
                    for (var o, s, a = p(r), l = i && n && r, h = a.length; --h > -1;) s = a[h], (l || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && s.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    f(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    f(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || o, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, h.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, h.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, h.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], a(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        a(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    o = i._internals,
                    s = o.isSelector,
                    a = o.isArray,
                    l = o.lazyTweens,
                    h = o.lazyRender,
                    c = [],
                    u = _gsScope._gsDefine.globals,
                    p = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    f = function(t, e, i, n) {
                        var r = t._timeline._totalTime;
                        (e || !this._forcingPlayhead) && (t._timeline.pause(t._startTime), e && e.apply(n || t._timeline, i || c), this._forcingPlayhead && t._timeline.seek(r))
                    },
                    d = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    g = n.prototype = new e;
                return n.version = "1.14.0", g.constructor = n, g.kill()._gc = g._forcingPlayhead = !1, g.to = function(t, e, n, r) {
                    var o = n.repeat && u.TweenMax || i;
                    return e ? this.add(new o(t, e, n), r) : this.set(t, n, r)
                }, g.from = function(t, e, n, r) {
                    return this.add((n.repeat && u.TweenMax || i).from(t, e, n), r)
                }, g.fromTo = function(t, e, n, r, o) {
                    var s = r.repeat && u.TweenMax || i;
                    return e ? this.add(s.fromTo(t, e, n, r), o) : this.set(t, r, o)
                }, g.staggerTo = function(t, e, r, o, a, l, h, c) {
                    var u, f = new n({
                        onComplete: l,
                        onCompleteParams: h,
                        onCompleteScope: c,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], s(t) && (t = d(t)), o = o || 0, 0 > o && (t = d(t), t.reverse(), o *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = p(r.startAt)), f.to(t[u], e, p(r), u * o);
                    return this.add(f, a)
                }, g.staggerFrom = function(t, e, i, n, r, o, s, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, o, s, a)
                }, g.staggerFromTo = function(t, e, i, n, r, o, s, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, o, s, a, l)
                }, g.call = function(t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, g.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, o, s = new n(t),
                        a = s._timeline;
                    for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, r = a._first; r;) o = r._next, e && r instanceof i && r.target === r.vars.onComplete || s.add(r, r._startTime - r._delay), r = o;
                    return a.add(s, 0), s
                }, g.add = function(r, o, s, l) {
                    var h, c, u, p, f, d;
                    if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && a(r)) {
                            for (s = s || "normal", l = l || 0, h = o, c = r.length, u = 0; c > u; u++) a(p = r[u]) && (p = new n({
                                tweens: p
                            })), this.add(p, h), "string" != typeof p && "function" != typeof p && ("sequence" === s ? h = p._startTime + p.totalDuration() / p._timeScale : "start" === s && (p._startTime -= p.delay())), h += l;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, o);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, d = f.rawTime() > r._startTime; f._timeline;) d && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, g.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && a(e)) {
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
                    return this.call(f, ["{self}", e, i, n], this, t)
                }, g.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, g.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, g._parseTimeOrLabel = function(e, i, n, r) {
                    var o;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && a(r)))
                        for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (o = e.indexOf("="), -1 === o) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : this.duration()
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
                    var n, o, s, a, u, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        d = this._startTime,
                        g = this._timeScale,
                        m = this._paused;
                    if (t >= p ? (this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (o = !0, a = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (u = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", o = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== f && this._first || i || u) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c)), this._time >= f)
                            for (n = this._first; n && (s = n._next, !this._paused || m);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                        else
                            for (n = this._last; n && (s = n._prev, !this._paused || m);)(n._active || f >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                        this._onUpdate && (e || (l.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c))), a && (this._gc || (d === this._startTime || g !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (l.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || c)))
                    }
                }, g._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, g.getChildren = function(t, e, n, r) {
                    r = r || -9999999999;
                    for (var o = [], s = this._first, a = 0; s;) r > s._startTime || (s instanceof i ? e !== !1 && (o[a++] = s) : (n !== !1 && (o[a++] = s), t !== !1 && (o = o.concat(s.getChildren(!0, e, n)), a = o.length))), s = s._next;
                    return o
                }, g.getTweensOf = function(t, e) {
                    var n, r, o = this._gc,
                        s = [],
                        a = 0;
                    for (o && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (s[a++] = n[r]);
                    return o && this._enabled(!1, !0), s
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
                    for (var n, r = this._first, o = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in o) o[n] >= i && (o[n] += t);
                    return this._uncache(!0)
                }, g._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                    return r
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
                            for (var e, i, n = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime, 0 > r._startTime && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
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
                    r = 1e-10,
                    o = [],
                    s = e._internals,
                    a = s.lazyTweens,
                    l = s.lazyRender,
                    h = new i(null, null, 1, 0),
                    c = n.prototype = new t;
                return c.constructor = n, c.kill()._gc = !1, n.version = "1.14.0", c.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, c.addCallback = function(t, i, n, r) {
                    return this.add(e.delayedCall(0, t, n, r), i)
                }, c.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, c.tweenTo = function(t, i) {
                    i = i || {};
                    var n, r, s, a = {
                        ease: h,
                        overwrite: i.delay ? 2 : 1,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) a[r] = i[r];
                    return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, s = new e(this, n, a), a.onStart = function() {
                        s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || s, i.onStartParams || o)
                    }, s
                }, c.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        onCompleteScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, c.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, h, c, u, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._duration,
                        g = this._time,
                        m = this._totalTime,
                        v = this._startTime,
                        y = this._timeScale,
                        _ = this._rawPrevTime,
                        b = this._paused,
                        w = this._cycle;
                    if (t >= f ? (this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, c = "onComplete", 0 === this._duration && (0 === t || 0 > _ || _ === r) && _ !== t && this._first && (u = !0, _ > r && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === d && _ !== r && (_ > 0 || 0 > t && _ >= 0) && !this._locked) && (c = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, _ >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : (0 === d && 0 > _ && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = d + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 !== (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== w && !this._locked) {
                        var x = this._yoyo && 0 !== (1 & w),
                            T = x === (this._yoyo && 0 !== (1 & this._cycle)),
                            k = this._totalTime,
                            C = this._cycle,
                            S = this._rawPrevTime,
                            P = this._time;
                        if (this._totalTime = w * d, w > this._cycle ? x = !x : this._totalTime += d, this._time = g, this._rawPrevTime = 0 === d ? _ - 1e-4 : _, this._cycle = w, this._locked = !0, g = x ? 0 : d, this.render(g, e, 0 === d), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || o), T && (g = x ? d + 1e-4 : -1e-4, this.render(g, !0, !1)), this._locked = !1, this._paused && !b) return;
                        this._time = P, this._totalTime = k, this._cycle = C, this._rawPrevTime = S
                    }
                    if (!(this._time !== g && this._first || i || u)) return void(m !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o)), this._time >= g)
                        for (n = this._first; n && (h = n._next, !this._paused || b);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = h;
                    else
                        for (n = this._last; n && (h = n._prev, !this._paused || b);)(n._active || g >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = h;
                    this._onUpdate && (e || (a.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o))), c && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (s && (a.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[c] && this.vars[c].apply(this.vars[c + "Scope"] || this, this.vars[c + "Params"] || o)))
                }, c.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, o = [],
                        s = this.getChildren(t, e, i),
                        a = 0,
                        l = s.length;
                    for (n = 0; l > n; n++) r = s[n], r.isActive() && (o[a++] = r);
                    return o
                }, c.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, c.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, c.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, c.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, c.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, c.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t,
                        this) : this._yoyo
                }, c.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    r = {},
                    o = function(t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    s = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    a = function(t, e, i, n) {
                        var r = {
                                a: t
                            },
                            o = {},
                            s = {},
                            a = {
                                c: n
                            },
                            l = (t + e) / 2,
                            h = (e + i) / 2,
                            c = (i + n) / 2,
                            u = (l + h) / 2,
                            p = (h + c) / 2,
                            f = (p - u) / 8;
                        return r.b = l + (t - l) / 4, o.b = u + f, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (u + p) / 2, s.b = p - f, a.b = c + (n - c) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
                    },
                    l = function(t, r, o, s, l) {
                        var h, c, u, p, f, d, g, m, v, y, _, b, w, x = t.length - 1,
                            T = 0,
                            k = t[0].a;
                        for (h = 0; x > h; h++) f = t[T], c = f.a, u = f.d, p = t[T + 1].d, l ? (_ = e[h], b = i[h], w = .25 * (b + _) * r / (s ? .5 : n[h] || .5), d = u - (u - c) * (s ? .5 * r : 0 !== _ ? w / _ : 0), g = u + (p - u) * (s ? .5 * r : 0 !== b ? w / b : 0), m = u - (d + ((g - d) * (3 * _ / (_ + b) + .5) / 4 || 0))) : (d = u - .5 * (u - c) * r, g = u + .5 * (p - u) * r, m = u - (d + g) / 2), d += m, g += m, f.c = v = d, f.b = 0 !== h ? k : k = f.a + .6 * (f.c - f.a), f.da = u - c, f.ca = v - c, f.ba = k - c, o ? (y = a(c, k, v, u), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, k = g;
                        f = t[T], f.b = k, f.c = k + .4 * (f.d - k), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = k - f.a, o && (y = a(f.a, k, f.c, f.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
                    },
                    h = function(t, n, r, s) {
                        var a, l, h, c, u, p, f = [];
                        if (s)
                            for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof(p = t[l][n]) && "=" === p.charAt(1) && (t[l][n] = s[n] + Number(p.charAt(0) + p.substr(2)));
                        if (a = t.length - 2, 0 > a) return f[0] = new o(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), f;
                        for (l = 0; a > l; l++) h = t[l][n], c = t[l + 1][n], f[l] = new o(h, 0, 0, c), r && (u = t[l + 2][n], e[l] = (e[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (u - c) * (u - c));
                        return f[l] = new o(t[l][n], 0, 0, t[l + 1][n]), f
                    },
                    c = function(t, o, a, c, u, p) {
                        var f, d, g, m, v, y, _, b, w = {},
                            x = [],
                            T = p || t[0];
                        u = "string" == typeof u ? "," + u + "," : s, null == o && (o = 1);
                        for (d in t[0]) x.push(d);
                        if (t.length > 1) {
                            for (b = t[t.length - 1], _ = !0, f = x.length; --f > -1;)
                                if (d = x[f], Math.abs(T[d] - b[d]) > .05) {
                                    _ = !1;
                                    break
                                }
                            _ && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, f = x.length; --f > -1;) d = x[f], r[d] = -1 !== u.indexOf("," + d + ","), w[d] = h(t, d, r[d], p);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!c) {
                            for (f = x.length; --f > -1;)
                                if (r[d])
                                    for (g = w[x[f]], y = g.length - 1, m = 0; y > m; m++) v = g[m + 1].da / i[m] + g[m].da / e[m], n[m] = (n[m] || 0) + v * v;
                            for (f = n.length; --f > -1;) n[f] = Math.sqrt(n[f])
                        }
                        for (f = x.length, m = a ? 4 : 1; --f > -1;) d = x[f], g = w[d], l(g, o, a, c, r[d]), _ && (g.splice(0, m), g.splice(g.length - m, m));
                        return w
                    },
                    u = function(t, e, i) {
                        e = e || "soft";
                        var n, r, s, a, l, h, c, u, p, f, d, g = {},
                            m = "cubic" === e ? 3 : 2,
                            v = "soft" === e,
                            y = [];
                        if (v && i && (t = [i].concat(t)), null == t || m + 1 > t.length) throw "invalid Bezier data";
                        for (p in t[0]) y.push(p);
                        for (h = y.length; --h > -1;) {
                            for (p = y[h], g[p] = l = [], f = 0, u = t.length, c = 0; u > c; c++) n = null == i ? t[c][p] : "string" == typeof(d = t[c][p]) && "=" === d.charAt(1) ? i[p] + Number(d.charAt(0) + d.substr(2)) : Number(d), v && c > 1 && u - 1 > c && (l[f++] = (n + l[f - 2]) / 2), l[f++] = n;
                            for (u = f - m + 1, f = 0, c = 0; u > c; c += m) n = l[c], r = l[c + 1], s = l[c + 2], a = 2 === m ? 0 : l[c + 3], l[f++] = d = 3 === m ? new o(n, r, s, a) : new o(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                            l.length = f
                        }
                        return g
                    },
                    p = function(t, e, i) {
                        for (var n, r, o, s, a, l, h, c, u, p, f, d = 1 / i, g = t.length; --g > -1;)
                            for (p = t[g], o = p.a, s = p.d - o, a = p.c - o, l = p.b - o, n = r = 0, c = 1; i >= c; c++) h = d * c, u = 1 - h, n = r - (r = (h * h * s + 3 * u * (h * a + u * l)) * h), f = g * i + c - 1, e[f] = (e[f] || 0) + n * n
                    },
                    f = function(t, e) {
                        e = e >> 0 || 6;
                        var i, n, r, o, s = [],
                            a = [],
                            l = 0,
                            h = 0,
                            c = e - 1,
                            u = [],
                            f = [];
                        for (i in t) p(t[i], s, e);
                        for (r = s.length, n = 0; r > n; n++) l += Math.sqrt(s[n]), o = n % e, f[o] = l, o === c && (h += l, o = n / e >> 0, u[o] = f, a[o] = h, l = 0, f = []);
                        return {
                            length: h,
                            lengths: a,
                            segments: u
                        }
                    },
                    d = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.3",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, r, o, s, a, l = e.values || [],
                                h = {},
                                p = l[0],
                                d = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = d ? d instanceof Array ? d : [
                                ["x", "y", "rotation", d === !0 ? 0 : Number(d) || 0]
                            ] : null;
                            for (n in p) this._props.push(n);
                            for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], h[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || h[n] !== l[0][n] && (a = h);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : u(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                                var g = f(this._beziers, this._timeRes);
                                this._length = g.length, this._lengths = g.lengths, this._segments = g.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (d = this._autoRotate)
                                for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), o = d.length; --o > -1;) {
                                    for (s = 0; 3 > s; s++) n = d[o][s], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                                    n = d[o][2], this._initialRotations[o] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, r, o, s, a, l, h, c, u, p = this._segCount,
                                f = this._func,
                                d = this._target,
                                g = e !== this._startRatio;
                            if (this._timeRes) {
                                if (c = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                                    for (h = p - 1; h > r && e >= (this._l2 = c[++r]););
                                    this._l1 = c[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = c[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                    for (h = u.length - 1; h > r && e >= (this._s2 = u[++r]););
                                    this._s1 = u[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, a = (e - i * (1 / p)) * p;
                            for (n = 1 - a, r = this._props.length; --r > -1;) o = this._props[r], s = this._beziers[o][i], l = (a * a * s.da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a, this._round[o] && (l = Math.round(l)), f[o] ? d[o](l) : d[o] = l;
                            if (this._autoRotate) {
                                var m, v, y, _, b, w, x, T = this._autoRotate;
                                for (r = T.length; --r > -1;) o = T[r][2], w = T[r][3] || 0, x = T[r][4] === !0 ? 1 : t, s = this._beziers[T[r][0]], m = this._beziers[T[r][1]], s && m && (s = s[i], m = m[i], v = s.a + (s.b - s.a) * a, _ = s.b + (s.c - s.b) * a, v += (_ - v) * a, _ += (s.c + (s.d - s.c) * a - _) * a, y = m.a + (m.b - m.a) * a, b = m.b + (m.c - m.b) * a, y += (b - y) * a, b += (m.c + (m.d - m.c) * a - b) * a, l = g ? Math.atan2(b - y, _ - v) * x + w : this._initialRotations[r], f[o] ? d[o](l) : d[o] = l)
                            }
                        }
                    }),
                    g = d.prototype;
                d.bezierThrough = c, d.cubicToQuadratic = a, d._autoCSS = !0, d.quadraticToCubic = function(t, e, i) {
                    return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, d._cssRegister = function() {
                    var t = _gsScope._gsDefine.globals.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, o, s, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new d;
                                var h, c, u, p = e.values,
                                    f = p.length - 1,
                                    g = [],
                                    m = {};
                                if (0 > f) return a;
                                for (h = 0; f >= h; h++) u = i(t, p[h], s, a, l, f !== h), g[h] = u.end;
                                for (c in e) m[c] = e[c];
                                return m.values = g, a = new r(t, "bezier", 0, 0, u.pt, 2), a.data = u, a.plugin = l, a.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (h = m.autoRotate === !0 ? 0 : Number(m.autoRotate), m.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", h, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", "rotation", h, !1]
                                ] : !1), m.autoRotate && (s._transform || s._enableTransforms(!1), u.autoRotate = s._target._gsTransform), l._onInitTween(u.proxy, m, s._tween), a
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
                var i, n, r, o, s = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
                    },
                    a = {},
                    l = s.prototype = new t("css");
                l.constructor = s, s.version = "1.14.0", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", l = "px", s.suffixMap = {
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
                var h, c, u, p, f, d, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    m = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /[^\d\-\.]/g,
                    _ = /(?:\d|\-|\+|=|#|\.)*/g,
                    b = /opacity *= *([^)]*)/i,
                    w = /opacity:([^;]*)/i,
                    x = /alpha\(opacity *=.+?\)/i,
                    T = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    S = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    P = function(t, e) {
                        return e.toUpperCase()
                    },
                    O = /(?:Left|Right|Width)/i,
                    E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    A = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    D = /,(?=[^\)]*(?:\(|$))/gi,
                    L = Math.PI / 180,
                    R = 180 / Math.PI,
                    N = {},
                    M = document,
                    $ = (M.documentElement, M.createElement("div")),
                    j = M.createElement("img"),
                    I = s._internals = {
                        _specialProps: a
                    },
                    F = navigator.userAgent,
                    z = function() {
                        var t, e = F.indexOf("Android"),
                            i = M.createElement("div");
                        return u = -1 !== F.indexOf("Safari") && -1 === F.indexOf("Chrome") && (-1 === e || Number(F.substr(e + 8, 1)) > 3), f = u && 6 > Number(F.substr(F.indexOf("Version/") + 8, 1)), p = -1 !== F.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(F)) && (d = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
                    }(),
                    W = function(t) {
                        return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    q = function(t) {
                        window.console && console.log(t)
                    },
                    B = "",
                    H = "",
                    U = function(t, e) {
                        e = e || $;
                        var i, n, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (H = 3 === n ? "ms" : i[n], B = "-" + H.toLowerCase() + "-", H + t) : null
                    },
                    X = M.defaultView ? M.defaultView.getComputedStyle : function() {},
                    Y = s.getStyle = function(t, e, i, n, r) {
                        var o;
                        return z || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || X(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : W(t)
                    },
                    V = I.convertToPixels = function(t, i, n, r, o) {
                        if ("px" === r || !r) return n;
                        if ("auto" === r || !n) return 0;
                        var a, l, h, c = O.test(i),
                            u = t,
                            p = $.style,
                            f = 0 > n;
                        if (f && (n = -n), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (c ? t.clientWidth : t.clientHeight);
                        else {
                            if (p.cssText = "border:0 solid red;position:" + Y(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) p[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (u = t.parentNode || M.body, l = u._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * n / 100;
                                p[c ? "width" : "height"] = n + r
                            }
                            u.appendChild($), a = parseFloat($[c ? "offsetWidth" : "offsetHeight"]), u.removeChild($), c && "%" === r && s.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = 100 * (a / n)), 0 !== a || o || (a = V(t, i, n, r, !0))
                        }
                        return f ? -a : a
                    },
                    Q = I.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Y(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = Y(t, "margin" + n, i);
                        return t["offset" + n] - (V(t, e, parseFloat(r), r.replace(_, "")) || 0)
                    },
                    G = function(t, e) {
                        var i, n, r = {};
                        if (e = e || X(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r[e[i].replace(C, P)] = e.getPropertyValue(e[i]);
                            else
                                for (i in e) r[i] = e[i];
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(C, P)] = e[i]);
                        return z || (r.opacity = W(t)), n = Pt(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, xt && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
                    },
                    Z = function(t, e, i, n, r) {
                        var o, s, a, l = {},
                            h = t.style;
                        for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(y, "") ? o : 0 : Q(t, s), void 0 !== h[s] && (a = new ut(h, s, h[s], a)));
                        if (n)
                            for (s in n) "className" !== s && (l[s] = n[s]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    K = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    tt = function(t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = K[e],
                            o = r.length;
                        for (i = i || X(t, null); --o > -1;) n -= parseFloat(Y(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat(Y(t, "border" + r[o] + "Width", i, !0)) || 0;
                        return n
                    },
                    et = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(y, "")), e.oy = parseFloat(r.replace(y, ""))), n + " " + r + (i.length > 2 ? " " + i[2] : "")
                    },
                    it = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    nt = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    rt = function(t, e, i, n) {
                        var r, o, s, a, l = 1e-6;
                        return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, o = t.split("_"), s = Number(o[0].replace(y, "")) * (-1 === t.indexOf("rad") ? 1 : R) - ("=" === t.charAt(1) ? 0 : e), o.length && (n && (n[i] = e + s), -1 !== t.indexOf("short") && (s %= r, s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)), -1 !== t.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (0 | s / r) * r : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (0 | s / r) * r)), a = e + s), l > a && a > -l && (a = 0), a
                    },
                    ot = {
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
                    st = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    at = function(t) {
                        var e, i, n, r, o, s;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ot[t] ? ot[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(g), r = Number(t[0]) % 360 / 360, o = Number(t[1]) / 100, s = Number(t[2]) / 100, i = .5 >= s ? s * (o + 1) : s + o - s * o, e = 2 * s - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = st(r + 1 / 3, e, i), t[1] = st(r, e, i), t[2] = st(r - 1 / 3, e, i), t) : (t = t.match(g) || ot.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ot.black
                    },
                    lt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (l in ot) lt += "|" + l + "\\b";
                lt = RegExp(lt + ")", "gi");
                var ht = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, o = e ? (t.match(lt) || [""])[0] : "",
                            s = t.split(o).join("").match(v) || [],
                            a = t.substr(0, t.indexOf(s[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            c = s.length,
                            u = c > 0 ? s[0].replace(g, "") : "";
                        return c ? r = e ? function(t) {
                            var e, p, f, d;
                            if ("number" == typeof t) t += u;
                            else if (n && D.test(t)) {
                                for (d = t.replace(D, "|").split("|"), f = 0; d.length > f; f++) d[f] = r(d[f]);
                                return d.join(",")
                            }
                            if (e = (t.match(lt) || [o])[0], p = t.split(e).join("").match(v) || [], f = p.length, c > f--)
                                for (; c > ++f;) p[f] = i ? p[0 | (f - 1) / 2] : s[f];
                            return a + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, o, p;
                            if ("number" == typeof t) t += u;
                            else if (n && D.test(t)) {
                                for (o = t.replace(D, "|").split("|"), p = 0; o.length > p; p++) o[p] = r(o[p]);
                                return o.join(",")
                            }
                            if (e = t.match(v) || [], p = e.length, c > p--)
                                for (; c > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : s[p];
                            return a + e.join(h) + l
                        } : function(t) {
                            return t
                        }
                    },
                    ct = function(t) {
                        return t = t.split(","),
                            function(e, i, n, r, o, s, a) {
                                var l, h = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return r.parse(e, a, o, s)
                            }
                    },
                    ut = (I._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, o = this.data, s = o.proxy, a = o.firstMPT, l = 1e-6; a;) e = s[a.v], a.r ? e = Math.round(e) : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
                        if (o.autoRotate && (o.autoRotate.rotation = s.rotation), 1 === t)
                            for (a = o.firstMPT; a;) {
                                if (i = a.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                a = a._next
                            }
                    }, function(t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    pt = (I._parseToProxy = function(t, e, i, n, r, o) {
                        var s, a, l, h, c, u = n,
                            p = {},
                            f = {},
                            d = i._transform,
                            g = N;
                        for (i._transform = null, N = e, n = c = i.parse(t, e, n, r), N = g, o && (i._transform = d, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                            if (1 >= n.type && (a = n.p, f[a] = n.s + n.c, p[a] = n.s, o || (h = new ut(n, "s", a, h, n.r), n.c = 0), 1 === n.type))
                                for (s = n.l; --s > 0;) l = "xn" + s, a = n.p + "_" + l, f[a] = n.data[l], p[a] = n[l], o || (h = new ut(n, l, a, h, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: p,
                            end: f,
                            firstMPT: h,
                            pt: c
                        }
                    }, I.CSSPropTween = function(t, e, n, r, s, a, l, h, c, u, p) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof pt || o.push(this.n), this.r = h, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === p ? n + r : p, s && (this._next = s, s._prev = this)
                    }),
                    ft = s.parseComplex = function(t, e, i, n, r, o, s, a, l, c) {
                        i = i || o || "", s = new pt(t, e, 0, 0, s, c ? 2 : 1, null, !1, a, i, n), n += "";
                        var u, p, f, d, v, y, _, b, w, x, k, C, S = i.split(", ").join(",").split(" "),
                            P = n.split(", ").join(",").split(" "),
                            O = S.length,
                            E = h !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(D, ", ").split(" "), P = P.join(" ").replace(D, ", ").split(" "), O = S.length), O !== P.length && (S = (o || "").split(" "), O = S.length), s.plugin = l, s.setRatio = c, u = 0; O > u; u++)
                            if (d = S[u], v = P[u], b = parseFloat(d), b || 0 === b) s.appendXtra("", b, it(v, b), v.replace(m, ""), E && -1 !== v.indexOf("px"), !0);
                            else if (r && ("#" === d.charAt(0) || ot[d] || T.test(d))) C = "," === v.charAt(v.length - 1) ? ")," : ")", d = at(d), v = at(v), w = d.length + v.length > 6, w && !z && 0 === v[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(P[u]).join("transparent")) : (z || (w = !1), s.appendXtra(w ? "rgba(" : "rgb(", d[0], v[0] - d[0], ",", !0, !0).appendXtra("", d[1], v[1] - d[1], ",", !0).appendXtra("", d[2], v[2] - d[2], w ? "," : C, !0), w && (d = 4 > d.length ? 1 : d[3], s.appendXtra("", d, (4 > v.length ? 1 : v[3]) - d, C, !1)));
                        else if (y = d.match(g)) {
                            if (_ = v.match(m), !_ || _.length !== y.length) return s;
                            for (f = 0, p = 0; y.length > p; p++) k = y[p], x = d.indexOf(k, f), s.appendXtra(d.substr(f, x - f), Number(k), it(_[p], k), "", E && "px" === d.substr(x + k.length, 2), 0 === p), f = x + k.length;
                            s["xs" + s.l] += d.substr(f)
                        } else s["xs" + s.l] += s.l ? " " + d : d;
                        if (-1 !== n.indexOf("=") && s.data) {
                            for (C = s.xs0 + s.data.s, u = 1; s.l > u; u++) C += s["xs" + u] + s.data["xn" + u];
                            s.e = C + s["xs" + u]
                        }
                        return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                    },
                    dt = 9;
                for (l = pt.prototype, l.l = l.pr = 0; --dt > 0;) l["xn" + dt] = 0, l["xs" + dt] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, n, r, o) {
                    var s = this,
                        a = s.l;
                    return s["xs" + a] += o && a ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", a > 0 ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new pt(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                        s: e + i
                    }, s.rxp = {}, s.s = e, s.c = i, s.r = r, s)) : (s["xs" + a] += e + (n || ""), s)
                };
                var gt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? U(t) || t : t, a[t] = a[this.p] = this, this.format = e.formatter || ht(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    mt = I._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r, o = t.split(","),
                            s = e.defaultValue;
                        for (i = i || [s], n = 0; o.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, r = new gt(o[n], e)
                    },
                    vt = function(t) {
                        if (!a[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            mt(t, {
                                parser: function(t, i, n, r, o, s, l) {
                                    var h = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[e];
                                    return h ? (h._cssRegister(), a[n].parse(t, i, n, r, o, s, l)) : (q("Error: " + e + " js file not loaded."), o)
                                }
                            })
                        }
                    };
                l = gt.prototype, l.parseComplex = function(t, e, i, n, r, o) {
                    var s, a, l, h, c, u, p = this.keyword;
                    if (this.multi && (D.test(i) || D.test(e) ? (a = e.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : p && (a = [e], l = [i])), l) {
                        for (h = l.length > a.length ? l.length : a.length, s = 0; h > s; s++) e = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, p && (c = e.indexOf(p), u = i.indexOf(p), c !== u && (i = -1 === u ? l : a, i[s] += " " + p));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return ft(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o)
                }, l.parse = function(t, e, i, n, o, s) {
                    return this.parseComplex(t.style, this.format(Y(t, this.p, r, !1, this.dflt)), this.format(e), o, s)
                }, s.registerSpecialProp = function(t, e, i) {
                    mt(t, {
                        parser: function(t, n, r, o, s, a) {
                            var l = new pt(t, r, 0, 0, s, 2, r, !1, i);
                            return l.plugin = a, l.setRatio = e(t, n, o._tween, r), l
                        },
                        priority: i
                    })
                };
                var yt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    _t = U("transform"),
                    bt = B + "transform",
                    wt = U("transformOrigin"),
                    xt = null !== U("perspective"),
                    Tt = I.Transform = function() {
                        this.skewY = 0
                    },
                    kt = window.SVGElement,
                    Ct = kt && (d || /Android/i.test(F) && !window.chrome),
                    St = function(t, e, i) {
                        var n = t.getBBox();
                        e = et(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * n.width : parseFloat(e[0])) + n.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * n.height : parseFloat(e[1])) + n.y
                    },
                    Pt = I.getTransform = function(t, e, i, n) {
                        if (t._gsTransform && i && !n) return t._gsTransform;
                        var o, a, l, h, c, u, p, f, d, g, m, v, y, _ = i ? t._gsTransform || new Tt : new Tt,
                            b = 0 > _.scaleX,
                            w = 2e-5,
                            x = 1e5,
                            T = 179.99,
                            k = T * L,
                            C = xt ? parseFloat(Y(t, wt, e, !1, "0 0 0").split(" ")[2]) || _.zOrigin || 0 : 0,
                            S = parseFloat(s.defaultTransformPerspective) || 0;
                        if (_t ? o = Y(t, bt, e, !0) : t.currentStyle && (o = t.currentStyle.filter.match(E), o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), _.x || 0, _.y || 0].join(",") : ""), o && "none" !== o && "matrix(1, 0, 0, 1, 0, 0)" !== o) {
                            for (a = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = a.length; --l > -1;) h = Number(a[l]), a[l] = (c = h - (h |= 0)) ? (0 | c * x + (0 > c ? -.5 : .5)) / x + h : h;
                            if (16 === a.length) {
                                var P = a[8],
                                    O = a[9],
                                    A = a[10],
                                    D = a[12],
                                    N = a[13],
                                    M = a[14];
                                if (_.zOrigin && (M = -_.zOrigin, D = P * M - a[12], N = O * M - a[13], M = A * M + _.zOrigin - a[14]), !i || n || null == _.rotationX) {
                                    var $, j, I, F, z, W, q, B = a[0],
                                        H = a[1],
                                        U = a[2],
                                        X = a[3],
                                        V = a[4],
                                        Q = a[5],
                                        G = a[6],
                                        Z = a[7],
                                        K = a[11],
                                        J = Math.atan2(G, A),
                                        tt = -k > J || J > k;
                                    _.rotationX = J * R, J && (F = Math.cos(-J), z = Math.sin(-J), $ = V * F + P * z, j = Q * F + O * z, I = G * F + A * z, P = V * -z + P * F, O = Q * -z + O * F, A = G * -z + A * F, K = Z * -z + K * F, V = $, Q = j, G = I), J = Math.atan2(P, B), _.rotationY = J * R, J && (W = -k > J || J > k, F = Math.cos(-J), z = Math.sin(-J), $ = B * F - P * z, j = H * F - O * z, I = U * F - A * z, O = H * z + O * F, A = U * z + A * F, K = X * z + K * F, B = $, H = j, U = I), J = Math.atan2(H, Q), _.rotation = J * R, J && (q = -k > J || J > k, F = Math.cos(-J), z = Math.sin(-J), B = B * F + V * z, j = H * F + Q * z, Q = H * -z + Q * F, G = U * -z + G * F, H = j), q && tt ? _.rotation = _.rotationX = 0 : q && W ? _.rotation = _.rotationY = 0 : W && tt && (_.rotationY = _.rotationX = 0), _.scaleX = (0 | Math.sqrt(B * B + H * H) * x + .5) / x, _.scaleY = (0 | Math.sqrt(Q * Q + O * O) * x + .5) / x, _.scaleZ = (0 | Math.sqrt(G * G + A * A) * x + .5) / x, _.skewX = 0, _.perspective = K ? 1 / (0 > K ? -K : K) : 0, _.x = D, _.y = N, _.z = M
                                }
                            } else if (!(xt && !n && a.length && _.x === a[4] && _.y === a[5] && (_.rotationX || _.rotationY) || void 0 !== _.x && "none" === Y(t, "display", e))) {
                                var et = a.length >= 6,
                                    it = et ? a[0] : 1,
                                    nt = a[1] || 0,
                                    rt = a[2] || 0,
                                    ot = et ? a[3] : 1;
                                _.x = a[4] || 0, _.y = a[5] || 0, u = Math.sqrt(it * it + nt * nt), p = Math.sqrt(ot * ot + rt * rt), f = it || nt ? Math.atan2(nt, it) * R : _.rotation || 0, d = rt || ot ? Math.atan2(rt, ot) * R + f : _.skewX || 0, g = u - Math.abs(_.scaleX || 0), m = p - Math.abs(_.scaleY || 0), Math.abs(d) > 90 && 270 > Math.abs(d) && (b ? (u *= -1, d += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (p *= -1, d += 0 >= d ? 180 : -180)), v = (f - _.rotation) % 180, y = (d - _.skewX) % 180, (void 0 === _.skewX || g > w || -w > g || m > w || -w > m || v > -T && T > v && !1 | v * x || y > -T && T > y && !1 | y * x) && (_.scaleX = u, _.scaleY = p, _.rotation = f, _.skewX = d), xt && (_.rotationX = _.rotationY = _.z = 0, _.perspective = S, _.scaleZ = 1)
                            }
                            _.zOrigin = C;
                            for (l in _) w > _[l] && _[l] > -w && (_[l] = 0)
                        } else _ = {
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
                        return i && (t._gsTransform = _), _.svg = kt && t instanceof kt, _.svg && St(t, Y(t, wt, r, !1, "50% 50%") + "", _), _.xPercent = _.yPercent = 0, _
                    },
                    Ot = function(t) {
                        var e, i, n = this.data,
                            r = -n.rotation * L,
                            o = r + n.skewX * L,
                            s = 1e5,
                            a = (0 | Math.cos(r) * n.scaleX * s) / s,
                            l = (0 | Math.sin(r) * n.scaleX * s) / s,
                            h = (0 | Math.sin(o) * -n.scaleY * s) / s,
                            c = (0 | Math.cos(o) * n.scaleY * s) / s,
                            u = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = l, l = -h, h = -i, e = p.filter, u.filter = "";
                            var f, g, m = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                y = "absolute" !== p.position,
                                w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + c,
                                x = n.x + m * n.xPercent / 100,
                                T = n.y + v * n.yPercent / 100;
                            if (null != n.ox && (f = (n.oxp ? .01 * m * n.ox : n.ox) - m / 2, g = (n.oyp ? .01 * v * n.oy : n.oy) - v / 2, x += f - (f * a + g * l), T += g - (f * h + g * c)), y ? (f = m / 2, g = v / 2, w += ", Dx=" + (f - (f * a + g * l) + x) + ", Dy=" + (g - (f * h + g * c) + T) + ")") : w += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(A, w) : w + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === c && (y && -1 === w.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !y) {
                                var k, C, S, P = 8 > d ? 1 : -1;
                                for (f = n.ieOffsetX || 0, g = n.ieOffsetY || 0, n.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * v)) / 2 + x), n.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > h ? -h : h) * m)) / 2 + T), dt = 0; 4 > dt; dt++) C = J[dt], k = p[C], i = -1 !== k.indexOf("px") ? parseFloat(k) : V(this.t, C, parseFloat(k), k.replace(_, "")) || 0, S = i !== n[C] ? 2 > dt ? -n.ieOffsetX : -n.ieOffsetY : 2 > dt ? f - n.ieOffsetX : g - n.ieOffsetY, u[C] = (n[C] = Math.round(i - S * (0 === dt || 2 === dt ? 1 : P))) + "px"
                            }
                        }
                    },
                    Et = I.set3DTransformRatio = function(t) {
                        var e, i, n, r, o, s, a, l, h, c, u, f, d, g, m, v, y, _, b, w, x, T, k, C = this.data,
                            S = this.t.style,
                            P = C.rotation * L,
                            O = C.scaleX,
                            E = C.scaleY,
                            A = C.scaleZ,
                            D = C.x,
                            R = C.y,
                            N = C.z,
                            M = C.perspective;
                        if (!(1 !== t && 0 !== t || "auto" !== C.force3D || C.rotationY || C.rotationX || 1 !== A || M || N)) return void At.call(this, t);
                        if (p) {
                            var $ = 1e-4;
                            $ > O && O > -$ && (O = A = 2e-5), $ > E && E > -$ && (E = A = 2e-5), !M || C.z || C.rotationX || C.rotationY || (M = 0)
                        }
                        if (P || C.skewX) _ = Math.cos(P), b = Math.sin(P), e = _, o = b, C.skewX && (P -= C.skewX * L, _ = Math.cos(P), b = Math.sin(P), "simple" === C.skewType && (w = Math.tan(C.skewX * L), w = Math.sqrt(1 + w * w), _ *= w, b *= w)), i = -b, s = _;
                        else {
                            if (!(C.rotationY || C.rotationX || 1 !== A || M || C.svg)) return void(S[_t] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + R + "px," + N + "px)" + (1 !== O || 1 !== E ? " scale(" + O + "," + E + ")" : ""));
                            e = s = 1, i = o = 0
                        }
                        u = 1, n = r = a = l = h = c = f = d = g = 0, m = M ? -1 / M : 0, v = C.zOrigin, y = 1e5, P = C.rotationY * L, P && (_ = Math.cos(P), b = Math.sin(P), h = u * -b, d = m * -b, n = e * b, a = o * b, u *= _, m *= _, e *= _, o *= _), P = C.rotationX * L, P && (_ = Math.cos(P), b = Math.sin(P), w = i * _ + n * b, x = s * _ + a * b, T = c * _ + u * b, k = g * _ + m * b, n = i * -b + n * _, a = s * -b + a * _, u = c * -b + u * _, m = g * -b + m * _, i = w, s = x, c = T, g = k), 1 !== A && (n *= A, a *= A, u *= A, m *= A), 1 !== E && (i *= E, s *= E, c *= E, g *= E), 1 !== O && (e *= O, o *= O, h *= O, d *= O), v && (f -= v, r = n * f, l = a * f, f = u * f + v), r = (w = (r += D) - (r |= 0)) ? (0 | w * y + (0 > w ? -.5 : .5)) / y + r : r, l = (w = (l += R) - (l |= 0)) ? (0 | w * y + (0 > w ? -.5 : .5)) / y + l : l, f = (w = (f += N) - (f |= 0)) ? (0 | w * y + (0 > w ? -.5 : .5)) / y + f : f, C.svg && (r += C.xOrigin - (C.xOrigin * e + C.yOrigin * i), l += C.yOrigin - (C.xOrigin * o + C.yOrigin * s)), S[_t] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | e * y) / y, (0 | o * y) / y, (0 | h * y) / y, (0 | d * y) / y, (0 | i * y) / y, (0 | s * y) / y, (0 | c * y) / y, (0 | g * y) / y, (0 | n * y) / y, (0 | a * y) / y, (0 | u * y) / y, (0 | m * y) / y, r, l, f, M ? 1 + -f / M : 1].join(",") + ")"
                    },
                    At = I.set2DTransformRatio = function(t) {
                        var e, i, n, r, o, s, a, l, h, c, u = this.data,
                            p = this.t,
                            f = p.style,
                            d = u.x,
                            g = u.y;
                        return !(u.rotationX || u.rotationY || u.z || u.force3D === !0 || "auto" === u.force3D && 1 !== t && 0 !== t) || u.svg && Ct || !xt ? (r = u.scaleX, o = u.scaleY, void(u.rotation || u.skewX || u.svg ? (e = u.rotation * L, i = e - u.skewX * L, n = 1e5, s = Math.cos(e) * r, a = Math.sin(e) * r, l = Math.sin(i) * -o, h = Math.cos(i) * o, u.svg && (d += u.xOrigin - (u.xOrigin * s + u.yOrigin * l), g += u.yOrigin - (u.xOrigin * a + u.yOrigin * h)), c = (0 | s * n) / n + "," + (0 | a * n) / n + "," + (0 | l * n) / n + "," + (0 | h * n) / n + "," + d + "," + g + ")", u.svg && Ct ? p.setAttribute("transform", "matrix(" + c) : f[_t] = (u.xPercent || u.yPercent ? "translate(" + u.xPercent + "%," + u.yPercent + "%) matrix(" : "matrix(") + c) : f[_t] = (u.xPercent || u.yPercent ? "translate(" + u.xPercent + "%," + u.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + o + "," + d + "," + g + ")")) : (this.setRatio = Et, void Et.call(this, t))
                    };
                mt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                    parser: function(t, e, i, n, o, a, l) {
                        if (n._transform) return o;
                        var h, c, u, p, f, d, g, m = n._transform = Pt(t, r, !0, l.parseTransform),
                            v = t.style,
                            y = 1e-6,
                            _ = yt.length,
                            b = l,
                            w = {};
                        if ("string" == typeof b.transform && _t) u = $.style, u[_t] = b.transform, u.display = "block", u.position = "absolute", M.body.appendChild($), h = Pt($, null, !1), M.body.removeChild($);
                        else if ("object" == typeof b) {
                            if (h = {
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
                                    for (u in g) b[u] = g[u];
                                else b.rotation = g;
                                "string" == typeof b.x && -1 !== b.x.indexOf("%") && (h.x = 0, h.xPercent = nt(b.x, m.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (h.y = 0, h.yPercent = nt(b.y, m.yPercent)), h.rotation = rt("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : m.rotation, m.rotation, "rotation", w), xt && (h.rotationX = rt("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : m.rotationX || 0, m.rotationX, "rotationX", w), h.rotationY = rt("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : m.rotationY || 0, m.rotationY, "rotationY", w)), h.skewX = null == b.skewX ? m.skewX : rt(b.skewX, m.skewX), h.skewY = null == b.skewY ? m.skewY : rt(b.skewY, m.skewY), (c = h.skewY - m.skewY) && (h.skewX += c, h.rotation += c)
                        }
                        for (xt && null != b.force3D && (m.force3D = b.force3D, d = !0), m.skewType = b.skewType || m.skewType || s.defaultSkewType, f = m.force3D || m.z || m.rotationX || m.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, f || null == b.scale || (h.scaleZ = 1); --_ > -1;) i = yt[_], p = h[i] - m[i], (p > y || -y > p || null != b[i] || null != N[i]) && (d = !0, o = new pt(m, i, m[i], p, o), i in w && (o.e = w[i]), o.xs0 = 0, o.plugin = a, n._overwriteProps.push(o.n));
                        return p = b.transformOrigin, p && m.svg ? (St(t, p, h), o = new pt(m, "xOrigin", m.xOrigin, h.xOrigin - m.xOrigin, o, -1, "transformOrigin"), o.b = m.xOrigin, o.e = o.xs0 = h.xOrigin, o = new pt(m, "yOrigin", m.yOrigin, h.yOrigin - m.yOrigin, o, -1, "transformOrigin"), o.b = m.yOrigin, o.e = o.xs0 = h.yOrigin, Lt(v, wt)) : (p || xt && f && m.zOrigin) && (_t ? (d = !0, i = wt, p = (p || Y(t, i, r, !1, "50% 50%")) + "", o = new pt(v, i, 0, 0, o, -1, "transformOrigin"), o.b = v[i], o.plugin = a, xt ? (u = m.zOrigin, p = p.split(" "), m.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0, o.xs0 = o.e = p[0] + " " + (p[1] || "50%") + " 0px", o = new pt(m, "zOrigin", 0, 0, o, -1, o.n), o.b = u, o.xs0 = o.e = m.zOrigin) : o.xs0 = o.e = p) : et(p + "", m)), d && (n._transformType = m.svg && Ct || !f && 3 !== this._transformType ? 2 : 3), o
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
                    parser: function(t, e, i, o, s) {
                        e = this.format(e);
                        var a, l, h, c, u, p, f, d, g, m, v, y, _, b, w, x, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            k = t.style;
                        for (g = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = U(T[l])), u = c = Y(t, T[l], r, !1, "0px"), -1 !== u.indexOf(" ") && (c = u.split(" "), u = c[0], c = c[1]), p = h = a[l], f = parseFloat(u), y = u.substr((f + "").length), _ = "=" === p.charAt(1), _ ? (d = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), d *= parseFloat(p), v = p.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(p), v = p.substr((d + "").length)), "" === v && (v = n[i] || y), v !== y && (b = V(t, "borderLeft", f, y), w = V(t, "borderTop", f, y), "%" === v ? (u = 100 * (b / g) + "%", c = 100 * (w / m) + "%") : "em" === v ? (x = V(t, "borderLeft", 1, "em"), u = b / x + "em", c = w / x + "em") : (u = b + "px", c = w + "px"), _ && (p = parseFloat(u) + d + v, h = parseFloat(c) + d + v)), s = ft(k, T[l], u + " " + c, p + " " + h, !1, "0px", s);
                        return s
                    },
                    prefix: !0,
                    formatter: ht("0px 0px 0px 0px", !1, !0)
                }), mt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, o, s) {
                        var a, l, h, c, u, p, f = "background-position",
                            g = r || X(t, null),
                            m = this.format((g ? d ? g.getPropertyValue(f + "-x") + " " + g.getPropertyValue(f + "-y") : g.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && (p = Y(t, "backgroundImage").replace(S, ""), p && "none" !== p)) {
                            for (a = m.split(" "), l = v.split(" "), j.setAttribute("src", p), h = 2; --h > -1;) m = a[h], c = -1 !== m.indexOf("%"), c !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - j.width : t.offsetHeight - j.height, a[h] = c ? parseFloat(m) / 100 * u + "px" : 100 * (parseFloat(m) / u) + "%");
                            m = a.join(" ")
                        }
                        return this.parseComplex(t.style, m, v, o, s)
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
                    parser: ct("marginTop,marginRight,marginBottom,marginLeft")
                }), mt("padding", {
                    parser: ct("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), mt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, o, s) {
                        var a, l, h;
                        return 9 > d ? (l = t.currentStyle, h = 8 > d ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(Y(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
                    }
                }), mt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), mt("autoRound,strictUnits", {
                    parser: function(t, e, i, n, r) {
                        return r
                    }
                }), mt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, o, s) {
                        return this.parseComplex(t.style, this.format(Y(t, "borderTopWidth", r, !1, "0px") + " " + Y(t, "borderTopStyle", r, !1, "solid") + " " + Y(t, "borderTopColor", r, !1, "#000")), this.format(e), o, s)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(lt) || ["#000"])[0]
                    }
                }), mt("borderWidth", {
                    parser: ct("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), mt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, r) {
                        var o = t.style,
                            s = "cssFloat" in o ? "cssFloat" : "styleFloat";
                        return new pt(o, s, 0, 0, r, -1, i, !1, 0, o[s], e)
                    }
                });
                var Dt = function(t) {
                    var e, i = this.t,
                        n = i.filter || Y(this.data, "filter") || "",
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Y(this.data, "filter")) : (i.filter = n.replace(x, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(b, "opacity=" + r))
                };
                mt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, o, s) {
                        var a = parseFloat(Y(t, "opacity", r, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === Y(t, "visibility", r) && 0 !== e && (a = 0), z ? o = new pt(l, "opacity", a, e - a, o) : (o = new pt(l, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = h ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = Dt), h && (o = new pt(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
                    }
                });
                var Lt = function(t, e) {
                        e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Rt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Lt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                mt("className", {
                    parser: function(t, e, n, o, s, a, l) {
                        var h, c, u, p, f, d = t.getAttribute("class") || "",
                            g = t.style.cssText;
                        if (s = o._classNamePT = new pt(t, n, 0, 0, s, 2), s.setRatio = Rt, s.pr = -11, i = !0, s.b = d, c = G(t, r), u = t._gsClassPT) {
                            for (p = {}, f = u.data; f;) p[f.p] = 1, f = f._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : d.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), o._tween._duration && (t.setAttribute("class", s.e), h = Z(t, c, G(t), l, p), t.setAttribute("class", d), s.data = h.firstMPT, t.style.cssText = g, s = s.xfirst = o.parse(t, h.difs, s, a)), s
                    }
                });
                var Nt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, o = this.t.style,
                            s = a.transform.parse;
                        if ("all" === this.e) o.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], a[i] && (a[i].parse === s ? r = !0 : i = "transformOrigin" === i ? wt : a[i].p), Lt(o, i);
                        r && (Lt(o, _t), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (mt("clearProps", {
                        parser: function(t, e, n, r, o) {
                            return o = new pt(t, n, 0, 0, o, 2), o.setRatio = Nt, o.e = e, o.pr = -10, o.data = r._tween, i = !0, o
                        }
                    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), dt = l.length; dt--;) vt(l[dt]);
                l = s.prototype, l._firstPT = null, l._onInitTween = function(t, e, a) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = a, this._vars = e, h = e.autoRound, i = !1, n = e.suffixMap || s.suffixMap, r = X(t, ""), o = this._overwriteProps;
                    var l, p, d, g, m, v, y, _, b, x = t.style;
                    if (c && "" === x.zIndex && (l = Y(t, "zIndex", r), ("auto" === l || "" === l) && this._addLazySet(x, "zIndex", 0)), "string" == typeof e && (g = x.cssText, l = G(t, r), x.cssText = g + ";" + e, l = Z(t, l, G(t)).difs, !z && w.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, x.cssText = g), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                        for (b = 3 === this._transformType, _t ? u && (c = !0, "" === x.zIndex && (y = Y(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(x, "zIndex", 0)), f && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : x.zoom = 1, d = p; d && d._next;) d = d._next;
                        _ = new pt(t, "transform", 0, 0, null, 2), this._linkCSSP(_, null, d), _.setRatio = b && xt ? Et : _t ? At : Ot, _.data = this._transform || Pt(t, r, !0), o.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (v = p._next, d = g; d && d.pr > p.pr;) d = d._next;
                            (p._prev = d ? d._prev : m) ? p._prev._next = p: g = p, (p._next = d) ? d._prev = p : m = p, p = v
                        }
                        this._firstPT = g
                    }
                    return !0
                }, l.parse = function(t, e, i, o) {
                    var s, l, c, u, p, f, d, g, m, v, y = t.style;
                    for (s in e) f = e[s], l = a[s], l ? i = l.parse(t, f, s, this, i, o, e) : (p = Y(t, s, r) + "", m = "string" == typeof f, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || m && T.test(f) ? (m || (f = at(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = ft(y, s, p, f, !0, "transparent", i, 0, o)) : !m || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (c = parseFloat(p), d = c || 0 === c ? p.substr((c + "").length) : "", ("" === p || "auto" === p) && ("width" === s || "height" === s ? (c = tt(t, s, r), d = "px") : "left" === s || "top" === s ? (c = Q(t, s, r), d = "px") : (c = "opacity" !== s ? 0 : 1, d = "")), v = m && "=" === f.charAt(1), v ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), g = f.replace(_, "")) : (u = parseFloat(f), g = m ? f.substr((u + "").length) || "" : ""), "" === g && (g = s in n ? n[s] : d), f = u || 0 === u ? (v ? u + c : u) + g : e[s], d !== g && "" !== g && (u || 0 === u) && c && (c = V(t, s, c, d), "%" === g ? (c /= V(t, s, 100, "%") / 100, e.strictUnits !== !0 && (p = c + "%")) : "em" === g ? c /= V(t, s, 1, "em") : "px" !== g && (u = V(t, s, u, g), g = "px"), v && (u || 0 === u) && (f = u + c + g)), v && (u += c), !c && 0 !== c || !u && 0 !== u ? void 0 !== y[s] && (f || "NaN" != f + "" && null != f) ? (i = new pt(y, s, u || c || 0, 0, i, -1, s, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== s && -1 === s.indexOf("Style") ? f : p) : q("invalid " + s + " tween value: " + e[s]) : (i = new pt(y, s, c, u - c, i, 0, s, h !== !1 && ("px" === g || "zIndex" === s), 0, p, f), i.xs0 = g)) : i = ft(y, s, p, f, !0, null, i, 0, o)), o && i && !i.plugin && (i.plugin = o);
                    return i
                }, l.setRatio = function(t) {
                    var e, i, n, r = this._firstPT,
                        o = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : o > e && e > -o && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
                }, l._enableTransforms = function(t) {
                    this._transform = this._transform || Pt(this._target, r, !0), this._transformType = this._transform.svg && Ct || !t && 3 !== this._transformType ? 2 : 3
                };
                var Mt = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                l._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new pt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Mt, n.data = this
                }, l._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, l._kill = function(e) {
                    var i, n, r, o = e;
                    if (e.autoAlpha || e.alpha) {
                        o = {};
                        for (n in e) o[n] = e[n];
                        o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, o)
                };
                var $t = function(t, e, i) {
                    var n, r, o, s;
                    if (t.slice)
                        for (r = t.length; --r > -1;) $t(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) o = n[r], s = o.type, o.style && (e.push(G(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || $t(o, e, i)
                };
                return s.cascadeTo = function(t, i, n) {
                    var r, o, s, a = e.to(t, i, n),
                        l = [a],
                        h = [],
                        c = [],
                        u = [],
                        p = e._internals.reservedProps;
                    for (t = a._targets || a.target, $t(t, h, u), a.render(i, !0), $t(t, c), a.render(0, !0), a._enabled(!0), r = u.length; --r > -1;)
                        if (o = Z(u[r], h[r], c[r]), o.firstMPT) {
                            o = o.difs;
                            for (s in n) p[s] && (o[s] = n[s]);
                            l.push(e.to(u[r], i, o))
                        }
                    return l
                }, t.activate([s]), s
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
                    for (var t, e, i, n = this._tween, r = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), o = r.length, s = {}, a = n._propLookup.roundProps; --o > -1;) s[r[o]] = 1;
                    for (o = r.length; --o > -1;)
                        for (t = r[o], e = n._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(s, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a), e = i;
                    return !1
                }, e._add = function(t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.3.3",
                init: function(t, e) {
                    var i, n, r;
                    if ("function" != typeof t.setAttribute) return !1;
                    this._target = t, this._proxy = {}, this._start = {}, this._end = {};
                    for (i in e) this._start[i] = this._proxy[i] = n = t.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(n), e[i], i), this._end[i] = r ? r.s + r.c : e[i], this._overwriteProps.push(i);
                    return !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    for (var e, i = this._overwriteProps, n = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --n > -1;) e = i[n], this._target.setAttribute(e, r[e] + "")
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, n, r, o, s, a, l = e.useRadians === !0 ? 2 * Math.PI : 360,
                        h = 1e-6;
                    for (i in e) "useRadians" !== i && (a = (e[i] + "").split("_"), n = a[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), o = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, s = o - r, a.length && (n = a.join("_"), -1 !== n.indexOf("short") && (s %= l, s !== s % (l / 2) && (s = 0 > s ? s + l : s - l)), -1 !== n.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * l) % l - (0 | s / l) * l : -1 !== n.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * l) % l - (0 | s / l) * l)), (s > h || -h > s) && (this._addTween(t, i, r, r + s, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                    o = r.com.greensock,
                    s = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = o._class,
                    h = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    c = t.register || function() {},
                    u = function(t, e, i, n) {
                        var r = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return c(r, t), r
                    },
                    p = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    d = u("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
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
                    for (var i, n, r, o, s, a, l = e.taper || "none", h = [], c = 0, u = 0 | (e.points || 20), f = u, d = e.randomize !== !1, g = e.clamp === !0, m = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = d ? Math.random() : 1 / u * f, n = m ? m.getRatio(i) : i, "none" === l ? r = v : "out" === l ? (o = 1 - i, r = o * o * v) : "in" === l ? r = i * i * v : .5 > i ? (o = 2 * i, r = .5 * o * o * v) : (o = 2 * (1 - i), r = .5 * o * o * v), d ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, g && (n > 1 ? n = 1 : 0 > n && (n = 0)), h[c++] = {
                        x: i,
                        y: n
                    };
                    for (h.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new p(1, 1, null), f = u; --f > -1;) s = h[f], a = new p(s.x, s.y, a);
                    this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
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
                }, i.ease = new i, u("Bounce", h("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), h("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), h("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", h("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), h("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), h("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t || 1, this._p2 = e || n, this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        o = r.prototype = new t;
                    return o.constructor = r, o.getRatio = i, o.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * s / this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2))
                }, .3), n("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) + 1
                }, .45)), u("Expo", h("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), h("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), h("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", h("SineOut", function(t) {
                    return Math.sin(t * a)
                }), h("SineIn", function(t) {
                    return -Math.cos(t * a) + 1
                }), h("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), d
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, r, o, s, a, l = function(t) {
                    var e, n = t.split("."),
                        r = i;
                    for (e = 0; n.length > e; e++) r[n[e]] = r = r[n[e]] || {};
                    return r
                },
                h = l("com.greensock"),
                c = 1e-10,
                u = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                p = function() {},
                f = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                d = {},
                g = function(n, r, o, s) {
                    this.sc = d[n] ? d[n].sc : [], d[n] = this, this.gsClass = null, this.func = o;
                    var a = [];
                    this.check = function(h) {
                        for (var c, u, p, f, m = r.length, v = m; --m > -1;)(c = d[r[m]] || new g(r[m], [])).gsClass ? (a[m] = c.gsClass, v--) : h && c.sc.push(this);
                        if (0 === v && o)
                            for (u = ("com.greensock." + n).split("."), p = u.pop(), f = l(u.join("."))[p] = this.gsClass = o.apply(o, a), s && (i[p] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return f
                                }) : n === e && "undefined" != typeof module && module.exports && (module.exports = f)), m = 0; this.sc.length > m; m++) this.sc[m].check()
                    }, this.check(!0)
                },
                m = t._gsDefine = function(t, e, i, n) {
                    return new g(t, e, i, n)
                },
                v = h._class = function(t, e, i) {
                    return e = e || function() {}, m(t, [], function() {
                        return e
                    }, i), e
                };
            m.globals = i;
            var y = [0, 0, 1, 1],
                _ = [],
                b = v("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? y.concat(e) : y
                }, !0),
                w = b.map = {},
                x = b.register = function(t, e, i, n) {
                    for (var r, o, s, a, l = e.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (o = l[c], r = n ? v("easing." + o, null, !0) : h.easing[o] || {}, s = u.length; --s > -1;) a = u[s], w[o + "." + a] = w[a + o] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for (o = b.prototype, o._calcEnd = !1, o.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) o = n[r] + ",Power" + r, x(new b(null, null, 1, r), o, "easeOut", !0), x(new b(null, null, 2, r), o, "easeIn" + (0 === r ? ",easeNone" : "")), x(new b(null, null, 3, r), o, "easeInOut");
            w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
            var T = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            o = T.prototype, o.addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var o, l, h = this._listeners[t],
                    c = 0;
                for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) o = h[l], o.c === e && o.s === i ? h.splice(l, 1) : 0 === c && r > o.pr && (c = l + 1);
                h.splice(c, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                }), this !== s || a || s.wake()
            }, o.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, o.dispatchEvent = function(t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
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
            for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !k;) k = t[n[r] + "RequestAnimationFrame"], C = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, n, r, o, l, h = this,
                    u = S(),
                    f = e !== !1 && k,
                    d = 500,
                    g = 33,
                    m = function(t) {
                        var e, s, a = S() - P;
                        a > d && (u += a - g), P += a, h.time = (P - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= o ? .004 : o - e), s = !0), t !== !0 && (r = n(m)), s && h.dispatchEvent("tick")
                    };
                T.call(h), h.time = h.frame = 0, h.tick = function() {
                    m(!0)
                }, h.lagSmoothing = function(t, e) {
                    d = t || 1 / c, g = Math.min(e, d, 0)
                }, h.sleep = function() {
                    null != r && (f && C ? C(r) : clearTimeout(r), n = p, r = null, h === s && (a = !1))
                }, h.wake = function() {
                    null !== r ? h.sleep() : h.frame > 10 && (P = S() - d + 5), n = 0 === i ? p : f && k ? k : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                    }, h === s && (a = !0), m(2)
                }, h.fps = function(t) {
                    return arguments.length ? (i = t, o = 1 / (i || 60), l = this.time + o, void h.wake()) : i
                }, h.useRAF = function(t) {
                    return arguments.length ? (h.sleep(), f = t, void h.fps(i)) : f
                }, h.fps(t), setTimeout(function() {
                    f && (!r || 5 > h.frame) && h.useRAF(!1)
                }, 1500)
            }), o = h.Ticker.prototype = new h.events.EventDispatcher, o.constructor = h.Ticker;
            var O = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
                    a || s.wake();
                    var i = this.vars.useFrames ? q : B;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            s = O.ticker = new h.Ticker, o = O.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
            var E = function() {
                a && S() - P > 2e3 && s.wake(), setTimeout(E, 2e3)
            };
            E(), o.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, o.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, o.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, o.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, o.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, o.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, o.render = function() {}, o.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, o.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, o._enabled = function(t, e) {
                return a || s.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, o._kill = function() {
                return this._enabled(!1, !1)
            }, o.kill = function(t, e) {
                return this._kill(t, e), this
            }, o._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, o._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, o.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, o.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, o.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, o.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, o.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, o.totalTime = function(t, e, i) {
                if (a || s.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), N.length && H())
                }
                return this
            }, o.progress = o.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, o.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, o.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, o.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, o.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, o.paused = function(t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    a || t || s.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        n = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var A = v("core.SimpleTimeline", function(t) {
                O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            o = A.prototype = new O, o.constructor = A, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e) {
                var i, n;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = t._startTime; i && i._startTime > n;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, o._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, o.render = function(t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, o.rawTime = function() {
                return a || s.wake(), this._totalTime
            };
            var D = v("TweenLite", function(e, i, n) {
                    if (O.call(this, i, n), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, o, s, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? W[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (a || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = s = u(e), this._propLookup = [], this._siblings = [], r = 0; s.length > r; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(u(o))) : (this._siblings[r] = U(o, this, !1), 1 === l && this._siblings[r].length > 1 && Y(o, this, null, 1, this._siblings[r])) : (o = s[r--] = D.selector(o), "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = U(e, this, !1), 1 === l && this._siblings.length > 1 && Y(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
                }, !0),
                L = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                R = function(t, e) {
                    var i, n = {};
                    for (i in t) z[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            o = D.prototype = new O, o.constructor = D, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, D.version = "1.14.0", D.defaultEase = o._ease = new b(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = s, D.autoSleep = !0, D.lagSmoothing = function(t, e) {
                s.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var N = [],
                M = {},
                $ = D._internals = {
                    isArray: f,
                    isSelector: L,
                    lazyTweens: N
                },
                j = D._plugins = {},
                I = $.tweenLookup = {},
                F = 0,
                z = $.reservedProps = {
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
                W = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                q = O._rootFramesTimeline = new A,
                B = O._rootTimeline = new A,
                H = $.lazyRender = function() {
                    var t, e = N.length;
                    for (M = {}; --e > -1;) t = N[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    N.length = 0
                };
            B._startTime = s.time, q._startTime = s.frame, B._active = q._active = !0, setTimeout(H, 1), O._updateRoot = D.render = function() {
                var t, e, i;
                if (N.length && H(), B.render((s.time - B._startTime) * B._timeScale, !1, !1), q.render((s.frame - q._startTime) * q._timeScale, !1, !1), N.length && H(), !(s.frame % 120)) {
                    for (i in I) {
                        for (e = I[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete I[i]
                    }
                    if (i = B._first, (!i || i._paused) && D.autoSleep && !q._first && 1 === s._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || s.sleep()
                    }
                }
            }, s.addEventListener("tick", O._updateRoot);
            var U = function(t, e, i) {
                    var n, r, o = t._gsTweenID;
                    if (I[o || (t._gsTweenID = o = "t" + F++)] || (I[o] = {
                            target: t,
                            tweens: []
                        }), e && (n = I[o].tweens, n[r = n.length] = e, i))
                        for (; --r > -1;) n[r] === e && n.splice(r, 1);
                    return I[o].tweens
                },
                X = function(t, e, i, n) {
                    var r = t.vars.onOverwrite;
                    r && r(t, e, i, n), r = D.onOverwrite, r && r(t, e, i, n)
                },
                Y = function(t, e, i, n, r) {
                    var o, s, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, o = 0; l > o; o++)
                            if ((a = r[o]) !== e) a._gc || (a._enabled(!1, !1) && (s = !0), X(a, e));
                            else if (5 === n) break;
                        return s
                    }
                    var h, u = e._startTime + c,
                        p = [],
                        f = 0,
                        d = 0 === e._duration;
                    for (o = r.length; --o > -1;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || V(e, 0, d), 0 === V(a, h, d) && (p[f++] = a)) : u >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > u && ((d || !a._initted) && 2e-10 >= u - a._startTime || (p[f++] = a)));
                    for (o = f; --o > -1;) a = p[o], 2 === n && a._kill(i, t, e) && (s = !0), (2 !== n || !a._firstPT && a._initted) && (a._enabled(!1, !1) && (s = !0), 2 !== n && X(a, e));
                    return s
                },
                V = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) {
                        if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return o /= r, o > e ? o - e : i && o === e || !t._initted && 2 * c > o - e ? c : (o += t.totalDuration() / t._timeScale / r) > e + c ? 0 : o - e - c
                };
            o._init = function() {
                var t, e, i, n, r, o = this.vars,
                    s = this._overwrittenProps,
                    a = this._duration,
                    l = !!o.immediateRender,
                    h = o.ease;
                if (o.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in o.startAt) r[n] = o.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && o.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (o.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(),
                        this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in o) z[n] && "autoCSS" !== n || (i[n] = o[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && o.lazy !== !1, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = h = h ? h instanceof b ? h : "function" == typeof h ? new b(h, o.easeParams) : w[h] || D.defaultEase : D.defaultEase, o.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, s);
                if (e && D._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, o._initProps = function(e, i, n, r) {
                var o, s, a, l, h, c;
                if (null == e) return !1;
                M[e._gsTweenID] && H(), this.vars.css || e.style && e !== t && e.nodeType && j.css && this.vars.autoCSS !== !1 && R(this.vars, e);
                for (o in this.vars) {
                    if (c = this.vars[o], z[o]) c && (c instanceof Array || c.push && f(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
                    else if (j[o] && (l = new j[o])._onInitTween(e, this.vars[o], this)) {
                        for (this._firstPT = h = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: o,
                                pg: !0,
                                pr: l._priority
                            }, s = l._overwriteProps.length; --s > -1;) i[l._overwriteProps[s]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[o] = h = {
                        _next: this._firstPT,
                        t: e,
                        p: o,
                        f: "function" == typeof e[o],
                        n: o,
                        pg: !1,
                        pr: 0
                    }, h.s = h.f ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(e[o]), h.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - h.s || 0;
                    h && h._next && (h._next._prev = h)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && Y(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (M[e._gsTweenID] = !0), a)
            }, o.render = function(t, e, i) {
                var n, r, o, s, a = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === c) && h !== t && (i = !0, h > c && (r = "onReverseComplete")), this._rawPrevTime = s = !e || t || h === t ? t : c);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0 && h !== c) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (i = !0), this._rawPrevTime = s = !e || t || h === t ? t : c)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l,
                        p = this._easeType,
                        f = this._easePower;
                    (1 === p || 3 === p && u >= .5) && (u = 1 - u), 3 === p && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === p ? 1 - u : 2 === p ? u : .5 > t / l ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, N.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _), 0 === l && this._rawPrevTime === c && s !== c && (this._rawPrevTime = 0))
                }
            }, o._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var n, r, o, s, a, l, h, c, u;
                if ((f(e) || L(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n]) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        h = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill);
                        for (o in h)(s = a[o]) && (u || (u = []), u.push(o), s.pg && s.t._kill(h) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), c && (r[o] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1), u && i && X(this, i, e, u)
                    }
                }
                return l
            }, o.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
            }, o._enabled = function(t, e) {
                if (a || s.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = U(n[i], this, !0);
                    else this._siblings = U(this.target, this, !0)
                }
                return O.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new D(t, e, n)
            }, D.delayedCall = function(t, e, i, n, r) {
                return new D(e, 0, {
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
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, n, r, o;
                if ((f(t) || L(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(D.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
                } else
                    for (n = U(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = D.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
            };
            var Q = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype
            }, !0);
            if (o = Q.prototype, Q.version = "1.10.1", Q.API = 2, o._firstPT = null, o._addTween = function(t, e, i, n, r, o) {
                    var s, a;
                    return null != n && (s = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: s,
                        f: "function" == typeof t[e],
                        n: r || e,
                        r: o
                    }, a._next && (a._next._prev = a), a) : void 0
                }, o.setRatio = function(t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, o._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, o._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, n, r, o, s, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (s = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : o) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : o = a, a = s
                        }
                        a = e._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, Q.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === Q.API && (j[(new t[e])._propName] = t[e]);
                    return !0
                }, m.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        r = t.overwriteProps,
                        o = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        s = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            Q.call(this, i, n), this._overwriteProps = r || []
                        }, t.global === !0),
                        a = s.prototype = new Q(i);
                    a.constructor = s, s.API = t.API;
                    for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                    return s.version = t.version, Q.activate([s]), s
                }, n = t._gsQueue) {
                for (r = 0; n.length > r; r++) n[r]();
                for (o in d) d[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o)
            }
            a = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(t, e) {
        "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(["jquery", "googlemaps!"], e) : t.GMaps = e()
    }(this, function() {
        var t = function(t, e) {
                var i;
                if (t === e) return t;
                for (i in e) void 0 !== e[i] && (t[i] = e[i]);
                return t
            },
            i = function(t, e) {
                var i, n = Array.prototype.slice.call(arguments, 2),
                    r = [],
                    o = t.length;
                if (Array.prototype.map && t.map === Array.prototype.map) r = Array.prototype.map.call(t, function(t) {
                    var i = n.slice(0);
                    return i.splice(0, 0, t), e.apply(this, i)
                });
                else
                    for (i = 0; o > i; i++) callback_params = n, callback_params.splice(0, 0, t[i]), r.push(e.apply(this, callback_params));
                return r
            },
            n = function(t) {
                var e, i = [];
                for (e = 0; e < t.length; e++) i = i.concat(t[e]);
                return i
            },
            r = function(t, e) {
                var i = t[0],
                    n = t[1];
                return e && (i = t[1], n = t[0]), new google.maps.LatLng(i, n)
            },
            o = function(t, e) {
                var i;
                for (i = 0; i < t.length; i++) t[i] instanceof google.maps.LatLng || (t[i].length > 0 && "object" == typeof t[i][0] ? t[i] = o(t[i], e) : t[i] = r(t[i], e));
                return t
            },
            s = function(t, e) {
                var i, n = t.replace(".", "");
                return i = "jQuery" in this && e ? $("." + n, e)[0] : document.getElementsByClassName(n)[0]
            },
            a = function(t, e) {
                var i, t = t.replace("#", "");
                return i = "jQuery" in window && e ? $("#" + t, e)[0] : document.getElementById(t)
            },
            l = function(t) {
                var e = 0,
                    i = 0;
                if (t.offsetParent)
                    do e += t.offsetLeft, i += t.offsetTop; while (t = t.offsetParent);
                return [e, i]
            },
            h = function(e) {
                "use strict";
                var i = document,
                    n = function(e) {
                        if ("object" != typeof window.google || !window.google.maps) return "object" == typeof window.console && window.console.error && console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."),
                            function() {};
                        if (!this) return new n(e);
                        e.zoom = e.zoom || 15, e.mapType = e.mapType || "roadmap";
                        var r, o = function(t, e) {
                                return void 0 === t ? e : t
                            },
                            h = this,
                            c = ["bounds_changed", "center_changed", "click", "dblclick", "drag", "dragend", "dragstart", "idle", "maptypeid_changed", "projection_changed", "resize", "tilesloaded", "zoom_changed"],
                            u = ["mousemove", "mouseout", "mouseover"],
                            p = ["el", "lat", "lng", "mapType", "width", "height", "markerClusterer", "enableNewStyle"],
                            f = e.el || e.div,
                            d = e.markerClusterer,
                            g = google.maps.MapTypeId[e.mapType.toUpperCase()],
                            m = new google.maps.LatLng(e.lat, e.lng),
                            v = o(e.zoomControl, !0),
                            y = e.zoomControlOpt || {
                                style: "DEFAULT",
                                position: "TOP_LEFT"
                            },
                            _ = y.style || "DEFAULT",
                            b = y.position || "TOP_LEFT",
                            w = o(e.panControl, !0),
                            x = o(e.mapTypeControl, !0),
                            T = o(e.scaleControl, !0),
                            k = o(e.streetViewControl, !0),
                            C = o(C, !0),
                            S = {},
                            P = {
                                zoom: this.zoom,
                                center: m,
                                mapTypeId: g
                            },
                            O = {
                                panControl: w,
                                zoomControl: v,
                                zoomControlOptions: {
                                    style: google.maps.ZoomControlStyle[_],
                                    position: google.maps.ControlPosition[b]
                                },
                                mapTypeControl: x,
                                scaleControl: T,
                                streetViewControl: k,
                                overviewMapControl: C
                            };
                        if ("string" == typeof e.el || "string" == typeof e.div ? f.indexOf("#") > -1 ? this.el = a(f, e.context) : this.el = s.apply(this, [f, e.context]) : this.el = f, "undefined" == typeof this.el || null === this.el) throw "No element defined.";
                        for (window.context_menu = window.context_menu || {}, window.context_menu[h.el.id] = {}, this.controls = [], this.overlays = [], this.layers = [], this.singleLayers = {}, this.markers = [], this.polylines = [], this.routes = [], this.polygons = [], this.infoWindow = null, this.overlay_el = null, this.zoom = e.zoom, this.registered_events = {}, this.el.style.width = e.width || this.el.scrollWidth || this.el.offsetWidth, this.el.style.height = e.height || this.el.scrollHeight || this.el.offsetHeight, google.maps.visualRefresh = e.enableNewStyle, r = 0; r < p.length; r++) delete e[p[r]];
                        for (1 != e.disableDefaultUI && (P = t(P, O)), S = t(P, e), r = 0; r < c.length; r++) delete S[c[r]];
                        for (r = 0; r < u.length; r++) delete S[u[r]];
                        this.map = new google.maps.Map(this.el, S), d && (this.markerClusterer = d.apply(this, [this.map]));
                        var E = function(t, e) {
                            var i = "",
                                n = window.context_menu[h.el.id][t];
                            for (var r in n)
                                if (n.hasOwnProperty(r)) {
                                    var o = n[r];
                                    i += '<li><a id="' + t + "_" + r + '" href="#">' + o.title + "</a></li>"
                                }
                            if (a("gmaps_context_menu")) {
                                var s = a("gmaps_context_menu");
                                s.innerHTML = i;
                                var r, c = s.getElementsByTagName("a"),
                                    u = c.length;
                                for (r = 0; u > r; r++) {
                                    var p = c[r],
                                        f = function(i) {
                                            i.preventDefault(), n[this.id.replace(t + "_", "")].action.apply(h, [e]), h.hideContextMenu()
                                        };
                                    google.maps.event.clearListeners(p, "click"), google.maps.event.addDomListenerOnce(p, "click", f, !1)
                                }
                                var d = l.apply(this, [h.el]),
                                    g = d[0] + e.pixel.x - 15,
                                    m = d[1] + e.pixel.y - 15;
                                s.style.left = g + "px", s.style.top = m + "px"
                            }
                        };
                        this.buildContextMenu = function(t, e) {
                            if ("marker" === t) {
                                e.pixel = {};
                                var i = new google.maps.OverlayView;
                                i.setMap(h.map), i.draw = function() {
                                    var n = i.getProjection(),
                                        r = e.marker.getPosition();
                                    e.pixel = n.fromLatLngToContainerPixel(r), E(t, e)
                                }
                            } else E(t, e);
                            var n = a("gmaps_context_menu");
                            setTimeout(function() {
                                n.style.display = "block"
                            }, 0)
                        }, this.setContextMenu = function(t) {
                            window.context_menu[h.el.id][t.control] = {};
                            var e, n = i.createElement("ul");
                            for (e in t.options)
                                if (t.options.hasOwnProperty(e)) {
                                    var r = t.options[e];
                                    window.context_menu[h.el.id][t.control][r.name] = {
                                        title: r.title,
                                        action: r.action
                                    }
                                }
                            n.id = "gmaps_context_menu", n.style.display = "none", n.style.position = "absolute", n.style.minWidth = "100px", n.style.background = "white", n.style.listStyle = "none", n.style.padding = "8px", n.style.boxShadow = "2px 2px 6px #ccc", a("gmaps_context_menu") || i.body.appendChild(n);
                            var o = a("gmaps_context_menu");
                            google.maps.event.addDomListener(o, "mouseout", function(t) {
                                t.relatedTarget && this.contains(t.relatedTarget) || window.setTimeout(function() {
                                    o.style.display = "none"
                                }, 400)
                            }, !1)
                        }, this.hideContextMenu = function() {
                            var t = a("gmaps_context_menu");
                            t && (t.style.display = "none")
                        };
                        var A = function(t, i) {
                            google.maps.event.addListener(t, i, function(t) {
                                void 0 == t && (t = this), e[i].apply(this, [t]), h.hideContextMenu()
                            })
                        };
                        google.maps.event.addListener(this.map, "zoom_changed", this.hideContextMenu);
                        for (var D = 0; D < c.length; D++) {
                            var L = c[D];
                            L in e && A(this.map, L)
                        }
                        for (var D = 0; D < u.length; D++) {
                            var L = u[D];
                            L in e && A(this.map, L)
                        }
                        google.maps.event.addListener(this.map, "rightclick", function(t) {
                            e.rightclick && e.rightclick.apply(this, [t]), void 0 != window.context_menu[h.el.id].map && h.buildContextMenu("map", t)
                        }), this.refresh = function() {
                            google.maps.event.trigger(this.map, "resize")
                        }, this.fitZoom = function() {
                            var t, e = [],
                                i = this.markers.length;
                            for (t = 0; i > t; t++) "boolean" == typeof this.markers[t].visible && this.markers[t].visible && e.push(this.markers[t].getPosition());
                            this.fitLatLngBounds(e)
                        }, this.fitLatLngBounds = function(t) {
                            var e, i = t.length,
                                n = new google.maps.LatLngBounds;
                            for (e = 0; i > e; e++) n.extend(t[e]);
                            this.map.fitBounds(n)
                        }, this.setCenter = function(t, e, i) {
                            this.map.panTo(new google.maps.LatLng(t, e)), i && i()
                        }, this.getElement = function() {
                            return this.el
                        }, this.zoomIn = function(t) {
                            t = t || 1, this.zoom = this.map.getZoom() + t, this.map.setZoom(this.zoom)
                        }, this.zoomOut = function(t) {
                            t = t || 1, this.zoom = this.map.getZoom() - t, this.map.setZoom(this.zoom)
                        };
                        var R, N = [];
                        for (R in this.map) "function" != typeof this.map[R] || this[R] || N.push(R);
                        for (r = 0; r < N.length; r++) ! function(t, e, i) {
                            t[i] = function() {
                                return e[i].apply(e, arguments)
                            }
                        }(this, this.map, N[r])
                    };
                return n
            }(this);
        h.prototype.createControl = function(t) {
            var e = document.createElement("div");
            e.style.cursor = "pointer", t.disableDefaultStyles !== !0 && (e.style.fontFamily = "Roboto, Arial, sans-serif", e.style.fontSize = "11px", e.style.boxShadow = "rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px");
            for (var i in t.style) e.style[i] = t.style[i];
            t.id && (e.id = t.id), t.title && (e.title = t.title), t.classes && (e.className = t.classes), t.content && ("string" == typeof t.content ? e.innerHTML = t.content : t.content instanceof HTMLElement && e.appendChild(t.content)), t.position && (e.position = google.maps.ControlPosition[t.position.toUpperCase()]);
            for (var n in t.events) ! function(e, i) {
                google.maps.event.addDomListener(e, i, function() {
                    t.events[i].apply(this, [this])
                })
            }(e, n);
            return e.index = 1, e
        }, h.prototype.addControl = function(t) {
            var e = this.createControl(t);
            return this.controls.push(e), this.map.controls[e.position].push(e), e
        }, h.prototype.removeControl = function(t) {
            var e, i = null;
            for (e = 0; e < this.controls.length; e++) this.controls[e] == t && (i = this.controls[e].position, this.controls.splice(e, 1));
            if (i)
                for (e = 0; e < this.map.controls.length; e++) {
                    var n = this.map.controls[t.position];
                    if (n.getAt(e) == t) {
                        n.removeAt(e);
                        break
                    }
                }
            return t
        }, h.prototype.createMarker = function(e) {
            if (void 0 == e.lat && void 0 == e.lng && void 0 == e.position) throw "No latitude or longitude defined.";
            var i = this,
                n = e.details,
                r = e.fences,
                o = e.outside,
                s = {
                    position: new google.maps.LatLng(e.lat, e.lng),
                    map: null
                },
                a = t(s, e);
            delete a.lat, delete a.lng, delete a.fences, delete a.outside;
            var l = new google.maps.Marker(a);
            if (l.fences = r, e.infoWindow) {
                l.infoWindow = new google.maps.InfoWindow(e.infoWindow);
                for (var h = ["closeclick", "content_changed", "domready", "position_changed", "zindex_changed"], c = 0; c < h.length; c++) ! function(t, i) {
                    e.infoWindow[i] && google.maps.event.addListener(t, i, function(t) {
                        e.infoWindow[i].apply(this, [t])
                    })
                }(l.infoWindow, h[c])
            }
            for (var u = ["animation_changed", "clickable_changed", "cursor_changed", "draggable_changed", "flat_changed", "icon_changed", "position_changed", "shadow_changed", "shape_changed", "title_changed", "visible_changed", "zindex_changed"], p = ["dblclick", "drag", "dragend", "dragstart", "mousedown", "mouseout", "mouseover", "mouseup"], c = 0; c < u.length; c++) ! function(t, i) {
                e[i] && google.maps.event.addListener(t, i, function() {
                    e[i].apply(this, [this])
                })
            }(l, u[c]);
            for (var c = 0; c < p.length; c++) ! function(t, i, n) {
                e[n] && google.maps.event.addListener(i, n, function(i) {
                    i.pixel || (i.pixel = t.getProjection().fromLatLngToPoint(i.latLng)), e[n].apply(this, [i])
                })
            }(this.map, l, p[c]);
            return google.maps.event.addListener(l, "click", function() {
                this.details = n, e.click && e.click.apply(this, [this]), l.infoWindow && (i.hideInfoWindows(), l.infoWindow.open(i.map, l))
            }), google.maps.event.addListener(l, "rightclick", function(t) {
                t.marker = this, e.rightclick && e.rightclick.apply(this, [t]), void 0 != window.context_menu[i.el.id].marker && i.buildContextMenu("marker", t)
            }), l.fences && google.maps.event.addListener(l, "dragend", function() {
                i.checkMarkerGeofence(l, function(t, e) {
                    o(t, e)
                })
            }), l
        }, h.prototype.addMarker = function(t) {
            var e;
            if (t.hasOwnProperty("gm_accessors_")) e = t;
            else {
                if (!(t.hasOwnProperty("lat") && t.hasOwnProperty("lng") || t.position)) throw "No latitude or longitude defined.";
                e = this.createMarker(t)
            }
            return e.setMap(this.map), this.markerClusterer && this.markerClusterer.addMarker(e), this.markers.push(e), h.fire("marker_added", e, this), e
        }, h.prototype.addMarkers = function(t) {
            for (var e, i = 0; e = t[i]; i++) this.addMarker(e);
            return this.markers
        }, h.prototype.hideInfoWindows = function() {
            for (var t, e = 0; t = this.markers[e]; e++) t.infoWindow && t.infoWindow.close()
        }, h.prototype.removeMarker = function(t) {
            for (var e = 0; e < this.markers.length; e++)
                if (this.markers[e] === t) {
                    this.markers[e].setMap(null), this.markers.splice(e, 1), this.markerClusterer && this.markerClusterer.removeMarker(t), h.fire("marker_removed", t, this);
                    break
                }
            return t
        }, h.prototype.removeMarkers = function(t) {
            var e = [];
            if ("undefined" == typeof t) {
                for (var i = 0; i < this.markers.length; i++) {
                    var n = this.markers[i];
                    n.setMap(null), h.fire("marker_removed", n, this)
                }
                this.markerClusterer && this.markerClusterer.clearMarkers && this.markerClusterer.clearMarkers(), this.markers = e
            } else {
                for (var i = 0; i < t.length; i++) {
                    var r = this.markers.indexOf(t[i]);
                    if (r > -1) {
                        var n = this.markers[r];
                        n.setMap(null), this.markerClusterer && this.markerClusterer.removeMarker(n), h.fire("marker_removed", n, this)
                    }
                }
                for (var i = 0; i < this.markers.length; i++) {
                    var n = this.markers[i];
                    null != n.getMap() && e.push(n)
                }
                this.markers = e
            }
        }, h.prototype.drawOverlay = function(t) {
            var e = new google.maps.OverlayView,
                i = !0;
            return e.setMap(this.map), null != t.auto_show && (i = t.auto_show), e.onAdd = function() {
                var i = document.createElement("div");
                i.style.borderStyle = "none", i.style.borderWidth = "0px", i.style.position = "absolute", i.style.zIndex = 100, i.innerHTML = t.content, e.el = i, t.layer || (t.layer = "overlayLayer");
                var n = this.getPanes(),
                    r = n[t.layer],
                    o = ["contextmenu", "DOMMouseScroll", "dblclick", "mousedown"];
                r.appendChild(i);
                for (var s = 0; s < o.length; s++) ! function(t, e) {
                    google.maps.event.addDomListener(t, e, function(t) {
                        -1 != navigator.userAgent.toLowerCase().indexOf("msie") && document.all ? (t.cancelBubble = !0, t.returnValue = !1) : t.stopPropagation()
                    })
                }(i, o[s]);
                t.click && (n.overlayMouseTarget.appendChild(e.el), google.maps.event.addDomListener(e.el, "click", function() {
                    t.click.apply(e, [e])
                })), google.maps.event.trigger(this, "ready")
            }, e.draw = function() {
                var n = this.getProjection(),
                    r = n.fromLatLngToDivPixel(new google.maps.LatLng(t.lat, t.lng));
                t.horizontalOffset = t.horizontalOffset || 0, t.verticalOffset = t.verticalOffset || 0;
                var o = e.el,
                    s = o.children[0],
                    a = s.clientHeight,
                    l = s.clientWidth;
                switch (t.verticalAlign) {
                    case "top":
                        o.style.top = r.y - a + t.verticalOffset + "px";
                        break;
                    default:
                    case "middle":
                        o.style.top = r.y - a / 2 + t.verticalOffset + "px";
                        break;
                    case "bottom":
                        o.style.top = r.y + t.verticalOffset + "px"
                }
                switch (t.horizontalAlign) {
                    case "left":
                        o.style.left = r.x - l + t.horizontalOffset + "px";
                        break;
                    default:
                    case "center":
                        o.style.left = r.x - l / 2 + t.horizontalOffset + "px";
                        break;
                    case "right":
                        o.style.left = r.x + t.horizontalOffset + "px"
                }
                o.style.display = i ? "block" : "none", i || t.show.apply(this, [o])
            }, e.onRemove = function() {
                var i = e.el;
                t.remove ? t.remove.apply(this, [i]) : (e.el.parentNode.removeChild(e.el), e.el = null)
            }, this.overlays.push(e), e
        }, h.prototype.removeOverlay = function(t) {
            for (var e = 0; e < this.overlays.length; e++)
                if (this.overlays[e] === t) {
                    this.overlays[e].setMap(null), this.overlays.splice(e, 1);
                    break
                }
        }, h.prototype.removeOverlays = function() {
            for (var t, e = 0; t = this.overlays[e]; e++) t.setMap(null);
            this.overlays = []
        }, h.prototype.drawPolyline = function(t) {
            var e = [],
                i = t.path;
            if (i.length)
                if (void 0 === i[0][0]) e = i;
                else
                    for (var n, r = 0; n = i[r]; r++) e.push(new google.maps.LatLng(n[0], n[1]));
            var o = {
                map: this.map,
                path: e,
                strokeColor: t.strokeColor,
                strokeOpacity: t.strokeOpacity,
                strokeWeight: t.strokeWeight,
                geodesic: t.geodesic,
                clickable: !0,
                editable: !1,
                visible: !0
            };
            t.hasOwnProperty("clickable") && (o.clickable = t.clickable), t.hasOwnProperty("editable") && (o.editable = t.editable), t.hasOwnProperty("icons") && (o.icons = t.icons), t.hasOwnProperty("zIndex") && (o.zIndex = t.zIndex);
            for (var s = new google.maps.Polyline(o), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], l = 0; l < a.length; l++) ! function(e, i) {
                t[i] && google.maps.event.addListener(e, i, function(e) {
                    t[i].apply(this, [e])
                })
            }(s, a[l]);
            return this.polylines.push(s), h.fire("polyline_added", s, this), s
        }, h.prototype.removePolyline = function(t) {
            for (var e = 0; e < this.polylines.length; e++)
                if (this.polylines[e] === t) {
                    this.polylines[e].setMap(null), this.polylines.splice(e, 1), h.fire("polyline_removed", t, this);
                    break
                }
        }, h.prototype.removePolylines = function() {
            for (var t, e = 0; t = this.polylines[e]; e++) t.setMap(null);
            this.polylines = []
        }, h.prototype.drawCircle = function(e) {
            e = t({
                map: this.map,
                center: new google.maps.LatLng(e.lat, e.lng)
            }, e), delete e.lat, delete e.lng;
            for (var i = new google.maps.Circle(e), n = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], r = 0; r < n.length; r++) ! function(t, i) {
                e[i] && google.maps.event.addListener(t, i, function(t) {
                    e[i].apply(this, [t])
                })
            }(i, n[r]);
            return this.polygons.push(i), i
        }, h.prototype.drawRectangle = function(e) {
            e = t({
                map: this.map
            }, e);
            var i = new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0], e.bounds[0][1]), new google.maps.LatLng(e.bounds[1][0], e.bounds[1][1]));
            e.bounds = i;
            for (var n = new google.maps.Rectangle(e), r = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], o = 0; o < r.length; o++) ! function(t, i) {
                e[i] && google.maps.event.addListener(t, i, function(t) {
                    e[i].apply(this, [t])
                })
            }(n, r[o]);
            return this.polygons.push(n), n
        }, h.prototype.drawPolygon = function(e) {
            var r = !1;
            e.hasOwnProperty("useGeoJSON") && (r = e.useGeoJSON), delete e.useGeoJSON, e = t({
                map: this.map
            }, e), 0 == r && (e.paths = [e.paths.slice(0)]), e.paths.length > 0 && e.paths[0].length > 0 && (e.paths = n(i(e.paths, o, r)));
            for (var s = new google.maps.Polygon(e), a = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "rightclick"], l = 0; l < a.length; l++) ! function(t, i) {
                e[i] && google.maps.event.addListener(t, i, function(t) {
                    e[i].apply(this, [t])
                })
            }(s, a[l]);
            return this.polygons.push(s), h.fire("polygon_added", s, this), s
        }, h.prototype.removePolygon = function(t) {
            for (var e = 0; e < this.polygons.length; e++)
                if (this.polygons[e] === t) {
                    this.polygons[e].setMap(null), this.polygons.splice(e, 1), h.fire("polygon_removed", t, this);
                    break
                }
        }, h.prototype.removePolygons = function() {
            for (var t, e = 0; t = this.polygons[e]; e++) t.setMap(null);
            this.polygons = []
        }, h.prototype.getFromFusionTables = function(t) {
            var e = t.events;
            delete t.events;
            var i = t,
                n = new google.maps.FusionTablesLayer(i);
            for (var r in e) ! function(t, i) {
                google.maps.event.addListener(t, i, function(t) {
                    e[i].apply(this, [t])
                })
            }(n, r);
            return this.layers.push(n), n
        }, h.prototype.loadFromFusionTables = function(t) {
            var e = this.getFromFusionTables(t);
            return e.setMap(this.map), e
        }, h.prototype.getFromKML = function(t) {
            var e = t.url,
                i = t.events;
            delete t.url, delete t.events;
            var n = t,
                r = new google.maps.KmlLayer(e, n);
            for (var o in i) ! function(t, e) {
                google.maps.event.addListener(t, e, function(t) {
                    i[e].apply(this, [t])
                })
            }(r, o);
            return this.layers.push(r), r
        }, h.prototype.loadFromKML = function(t) {
            var e = this.getFromKML(t);
            return e.setMap(this.map), e
        }, h.prototype.addLayer = function(t, e) {
            e = e || {};
            var i;
            switch (t) {
                case "weather":
                    this.singleLayers.weather = i = new google.maps.weather.WeatherLayer;
                    break;
                case "clouds":
                    this.singleLayers.clouds = i = new google.maps.weather.CloudLayer;
                    break;
                case "traffic":
                    this.singleLayers.traffic = i = new google.maps.TrafficLayer;
                    break;
                case "transit":
                    this.singleLayers.transit = i = new google.maps.TransitLayer;
                    break;
                case "bicycling":
                    this.singleLayers.bicycling = i = new google.maps.BicyclingLayer;
                    break;
                case "panoramio":
                    this.singleLayers.panoramio = i = new google.maps.panoramio.PanoramioLayer, i.setTag(e.filter), delete e.filter, e.click && google.maps.event.addListener(i, "click", function(t) {
                        e.click(t), delete e.click
                    });
                    break;
                case "places":
                    if (this.singleLayers.places = i = new google.maps.places.PlacesService(this.map), e.search || e.nearbySearch || e.radarSearch) {
                        var n = {
                            bounds: e.bounds || null,
                            keyword: e.keyword || null,
                            location: e.location || null,
                            name: e.name || null,
                            radius: e.radius || null,
                            rankBy: e.rankBy || null,
                            types: e.types || null
                        };
                        e.radarSearch && i.radarSearch(n, e.radarSearch), e.search && i.search(n, e.search), e.nearbySearch && i.nearbySearch(n, e.nearbySearch)
                    }
                    if (e.textSearch) {
                        var r = {
                            bounds: e.bounds || null,
                            location: e.location || null,
                            query: e.query || null,
                            radius: e.radius || null
                        };
                        i.textSearch(r, e.textSearch)
                    }
            }
            return void 0 !== i ? ("function" == typeof i.setOptions && i.setOptions(e), "function" == typeof i.setMap && i.setMap(this.map), i) : void 0
        }, h.prototype.removeLayer = function(t) {
            if ("string" == typeof t && void 0 !== this.singleLayers[t]) this.singleLayers[t].setMap(null), delete this.singleLayers[t];
            else
                for (var e = 0; e < this.layers.length; e++)
                    if (this.layers[e] === t) {
                        this.layers[e].setMap(null), this.layers.splice(e, 1);
                        break
                    }
        };
        var c, u;
        return h.prototype.getRoutes = function(e) {
            switch (e.travelMode) {
                case "bicycling":
                    c = google.maps.TravelMode.BICYCLING;
                    break;
                case "transit":
                    c = google.maps.TravelMode.TRANSIT;
                    break;
                case "driving":
                    c = google.maps.TravelMode.DRIVING;
                    break;
                default:
                    c = google.maps.TravelMode.WALKING
            }
            u = "imperial" === e.unitSystem ? google.maps.UnitSystem.IMPERIAL : google.maps.UnitSystem.METRIC;
            var i = {
                    avoidHighways: !1,
                    avoidTolls: !1,
                    optimizeWaypoints: !1,
                    waypoints: []
                },
                n = t(i, e);
            n.origin = /string/.test(typeof e.origin) ? e.origin : new google.maps.LatLng(e.origin[0], e.origin[1]), n.destination = /string/.test(typeof e.destination) ? e.destination : new google.maps.LatLng(e.destination[0], e.destination[1]), n.travelMode = c, n.unitSystem = u, delete n.callback, delete n.error;
            var r = [],
                o = new google.maps.DirectionsService;
            o.route(n, function(t, i) {
                if (i === google.maps.DirectionsStatus.OK) {
                    for (var n in t.routes) t.routes.hasOwnProperty(n) && r.push(t.routes[n]);
                    e.callback && e.callback(r, t, i)
                } else e.error && e.error(t, i)
            })
        }, h.prototype.removeRoutes = function() {
            this.routes.length = 0
        }, h.prototype.getElevations = function(e) {
            e = t({
                locations: [],
                path: !1,
                samples: 256
            }, e), e.locations.length > 0 && e.locations[0].length > 0 && (e.locations = n(i([e.locations], o, !1)));
            var r = e.callback;
            delete e.callback;
            var s = new google.maps.ElevationService;
            if (e.path) {
                var a = {
                    path: e.locations,
                    samples: e.samples
                };
                s.getElevationAlongPath(a, function(t, e) {
                    r && "function" == typeof r && r(t, e)
                })
            } else delete e.path, delete e.samples, s.getElevationForLocations(e, function(t, e) {
                r && "function" == typeof r && r(t, e)
            })
        }, h.prototype.cleanRoute = h.prototype.removePolylines, h.prototype.renderRoute = function(e, i) {
            var n, r = "string" == typeof i.panel ? document.getElementById(i.panel.replace("#", "")) : i.panel;
            i.panel = r, i = t({
                map: this.map
            }, i), n = new google.maps.DirectionsRenderer(i), this.getRoutes({
                origin: e.origin,
                destination: e.destination,
                travelMode: e.travelMode,
                waypoints: e.waypoints,
                unitSystem: e.unitSystem,
                error: e.error,
                avoidHighways: e.avoidHighways,
                avoidTolls: e.avoidTolls,
                optimizeWaypoints: e.optimizeWaypoints,
                callback: function(t, e, i) {
                    i === google.maps.DirectionsStatus.OK && n.setDirections(e)
                }
            })
        }, h.prototype.drawRoute = function(t) {
            var e = this;
            this.getRoutes({
                origin: t.origin,
                destination: t.destination,
                travelMode: t.travelMode,
                waypoints: t.waypoints,
                unitSystem: t.unitSystem,
                error: t.error,
                avoidHighways: t.avoidHighways,
                avoidTolls: t.avoidTolls,
                optimizeWaypoints: t.optimizeWaypoints,
                callback: function(i) {
                    if (i.length > 0) {
                        var n = {
                            path: i[i.length - 1].overview_path,
                            strokeColor: t.strokeColor,
                            strokeOpacity: t.strokeOpacity,
                            strokeWeight: t.strokeWeight
                        };
                        t.hasOwnProperty("icons") && (n.icons = t.icons), e.drawPolyline(n), t.callback && t.callback(i[i.length - 1])
                    }
                }
            })
        }, h.prototype.travelRoute = function(t) {
            if (t.origin && t.destination) this.getRoutes({
                origin: t.origin,
                destination: t.destination,
                travelMode: t.travelMode,
                waypoints: t.waypoints,
                unitSystem: t.unitSystem,
                error: t.error,
                callback: function(e) {
                    if (e.length > 0 && t.start && t.start(e[e.length - 1]), e.length > 0 && t.step) {
                        var i = e[e.length - 1];
                        if (i.legs.length > 0)
                            for (var n, r = i.legs[0].steps, o = 0; n = r[o]; o++) n.step_number = o, t.step(n, i.legs[0].steps.length - 1)
                    }
                    e.length > 0 && t.end && t.end(e[e.length - 1])
                }
            });
            else if (t.route && t.route.legs.length > 0)
                for (var e, i = t.route.legs[0].steps, n = 0; e = i[n]; n++) e.step_number = n, t.step(e)
        }, h.prototype.drawSteppedRoute = function(t) {
            var e = this;
            if (t.origin && t.destination) this.getRoutes({
                origin: t.origin,
                destination: t.destination,
                travelMode: t.travelMode,
                waypoints: t.waypoints,
                error: t.error,
                callback: function(i) {
                    if (i.length > 0 && t.start && t.start(i[i.length - 1]), i.length > 0 && t.step) {
                        var n = i[i.length - 1];
                        if (n.legs.length > 0)
                            for (var r, o = n.legs[0].steps, s = 0; r = o[s]; s++) {
                                r.step_number = s;
                                var a = {
                                    path: r.path,
                                    strokeColor: t.strokeColor,
                                    strokeOpacity: t.strokeOpacity,
                                    strokeWeight: t.strokeWeight
                                };
                                t.hasOwnProperty("icons") && (a.icons = t.icons), e.drawPolyline(a), t.step(r, n.legs[0].steps.length - 1);
                            }
                    }
                    i.length > 0 && t.end && t.end(i[i.length - 1])
                }
            });
            else if (t.route && t.route.legs.length > 0)
                for (var i, n = t.route.legs[0].steps, r = 0; i = n[r]; r++) {
                    i.step_number = r;
                    var o = {
                        path: i.path,
                        strokeColor: t.strokeColor,
                        strokeOpacity: t.strokeOpacity,
                        strokeWeight: t.strokeWeight
                    };
                    t.hasOwnProperty("icons") && (o.icons = t.icons), e.drawPolyline(o), t.step(i)
                }
        }, h.Route = function(t) {
            this.origin = t.origin, this.destination = t.destination, this.waypoints = t.waypoints, this.map = t.map, this.route = t.route, this.step_count = 0, this.steps = this.route.legs[0].steps, this.steps_length = this.steps.length;
            var e = {
                path: new google.maps.MVCArray,
                strokeColor: t.strokeColor,
                strokeOpacity: t.strokeOpacity,
                strokeWeight: t.strokeWeight
            };
            t.hasOwnProperty("icons") && (e.icons = t.icons), this.polyline = this.map.drawPolyline(e).getPath()
        }, h.Route.prototype.getRoute = function(t) {
            var i = this;
            this.map.getRoutes({
                origin: this.origin,
                destination: this.destination,
                travelMode: t.travelMode,
                waypoints: this.waypoints || [],
                error: t.error,
                callback: function() {
                    i.route = e[0], t.callback && t.callback.call(i)
                }
            })
        }, h.Route.prototype.back = function() {
            if (this.step_count > 0) {
                this.step_count--;
                var t = this.route.legs[0].steps[this.step_count].path;
                for (var e in t) t.hasOwnProperty(e) && this.polyline.pop()
            }
        }, h.Route.prototype.forward = function() {
            if (this.step_count < this.steps_length) {
                var t = this.route.legs[0].steps[this.step_count].path;
                for (var e in t) t.hasOwnProperty(e) && this.polyline.push(t[e]);
                this.step_count++
            }
        }, h.prototype.checkGeofence = function(t, e, i) {
            return i.containsLatLng(new google.maps.LatLng(t, e))
        }, h.prototype.checkMarkerGeofence = function(t, e) {
            if (t.fences)
                for (var i, n = 0; i = t.fences[n]; n++) {
                    var r = t.getPosition();
                    this.checkGeofence(r.lat(), r.lng(), i) || e(t, i)
                }
        }, h.prototype.toImage = function(t) {
            var t = t || {},
                e = {};
            if (e.size = t.size || [this.el.clientWidth, this.el.clientHeight], e.lat = this.getCenter().lat(), e.lng = this.getCenter().lng(), this.markers.length > 0) {
                e.markers = [];
                for (var i = 0; i < this.markers.length; i++) e.markers.push({
                    lat: this.markers[i].getPosition().lat(),
                    lng: this.markers[i].getPosition().lng()
                })
            }
            if (this.polylines.length > 0) {
                var n = this.polylines[0];
                e.polyline = {}, e.polyline.path = google.maps.geometry.encoding.encodePath(n.getPath()), e.polyline.strokeColor = n.strokeColor, e.polyline.strokeOpacity = n.strokeOpacity, e.polyline.strokeWeight = n.strokeWeight
            }
            return h.staticMapURL(e)
        }, h.staticMapURL = function(t) {
            function e(t, e) {
                if ("#" === t[0] && (t = t.replace("#", "0x"), e)) {
                    if (e = parseFloat(e), e = Math.min(1, Math.max(e, 0)), 0 === e) return "0x00000000";
                    e = (255 * e).toString(16), 1 === e.length && (e += e), t = t.slice(0, 8) + e
                }
                return t
            }
            var i, n = [],
                r = ("file:" === location.protocol ? "http:" : location.protocol) + "//maps.googleapis.com/maps/api/staticmap";
            t.url && (r = t.url, delete t.url), r += "?";
            var o = t.markers;
            delete t.markers, !o && t.marker && (o = [t.marker], delete t.marker);
            var s = t.styles;
            delete t.styles;
            var a = t.polyline;
            if (delete t.polyline, t.center) n.push("center=" + t.center), delete t.center;
            else if (t.address) n.push("center=" + t.address), delete t.address;
            else if (t.lat) n.push(["center=", t.lat, ",", t.lng].join("")), delete t.lat, delete t.lng;
            else if (t.visible) {
                var l = encodeURI(t.visible.join("|"));
                n.push("visible=" + l)
            }
            var h = t.size;
            h ? (h.join && (h = h.join("x")), delete t.size) : h = "630x300", n.push("size=" + h), t.zoom || t.zoom === !1 || (t.zoom = 15);
            var c = t.hasOwnProperty("sensor") ? !!t.sensor : !0;
            delete t.sensor, n.push("sensor=" + c);
            for (var u in t) t.hasOwnProperty(u) && n.push(u + "=" + t[u]);
            if (o)
                for (var p, f, d = 0; i = o[d]; d++) {
                    p = [], i.size && "normal" !== i.size ? (p.push("size:" + i.size), delete i.size) : i.icon && (p.push("icon:" + encodeURI(i.icon)), delete i.icon), i.color && (p.push("color:" + i.color.replace("#", "0x")), delete i.color), i.label && (p.push("label:" + i.label[0].toUpperCase()), delete i.label), f = i.address ? i.address : i.lat + "," + i.lng, delete i.address, delete i.lat, delete i.lng;
                    for (var u in i) i.hasOwnProperty(u) && p.push(u + ":" + i[u]);
                    p.length || 0 === d ? (p.push(f), p = p.join("|"), n.push("markers=" + encodeURI(p))) : (p = n.pop() + encodeURI("|" + f), n.push(p))
                }
            if (s)
                for (var d = 0; d < s.length; d++) {
                    var g = [];
                    s[d].featureType && g.push("feature:" + s[d].featureType.toLowerCase()), s[d].elementType && g.push("element:" + s[d].elementType.toLowerCase());
                    for (var m = 0; m < s[d].stylers.length; m++)
                        for (var v in s[d].stylers[m]) {
                            var y = s[d].stylers[m][v];
                            "hue" != v && "color" != v || (y = "0x" + y.substring(1)), g.push(v + ":" + y)
                        }
                    var _ = g.join("|");
                    "" != _ && n.push("style=" + _)
                }
            if (a) {
                if (i = a, a = [], i.strokeWeight && a.push("weight:" + parseInt(i.strokeWeight, 10)), i.strokeColor) {
                    var b = e(i.strokeColor, i.strokeOpacity);
                    a.push("color:" + b)
                }
                if (i.fillColor) {
                    var w = e(i.fillColor, i.fillOpacity);
                    a.push("fillcolor:" + w)
                }
                var x = i.path;
                if (x.join)
                    for (var T, m = 0; T = x[m]; m++) a.push(T.join(","));
                else a.push("enc:" + x);
                a = a.join("|"), n.push("path=" + encodeURI(a))
            }
            var k = window.devicePixelRatio || 1;
            return n.push("scale=" + k), n = n.join("&"), r + n
        }, h.prototype.addMapType = function(t, e) {
            if (!e.hasOwnProperty("getTileUrl") || "function" != typeof e.getTileUrl) throw "'getTileUrl' function required.";
            e.tileSize = e.tileSize || new google.maps.Size(256, 256);
            var i = new google.maps.ImageMapType(e);
            this.map.mapTypes.set(t, i)
        }, h.prototype.addOverlayMapType = function(t) {
            if (!t.hasOwnProperty("getTile") || "function" != typeof t.getTile) throw "'getTile' function required.";
            var e = t.index;
            delete t.index, this.map.overlayMapTypes.insertAt(e, t)
        }, h.prototype.removeOverlayMapType = function(t) {
            this.map.overlayMapTypes.removeAt(t)
        }, h.prototype.addStyle = function(t) {
            var e = new google.maps.StyledMapType(t.styles, {
                name: t.styledMapName
            });
            this.map.mapTypes.set(t.mapTypeId, e)
        }, h.prototype.setStyle = function(t) {
            this.map.setMapTypeId(t)
        }, h.prototype.createPanorama = function(t) {
            return t.hasOwnProperty("lat") && t.hasOwnProperty("lng") || (t.lat = this.getCenter().lat(), t.lng = this.getCenter().lng()), this.panorama = h.createPanorama(t), this.map.setStreetView(this.panorama), this.panorama
        }, h.createPanorama = function(e) {
            var i = a(e.el, e.context);
            e.position = new google.maps.LatLng(e.lat, e.lng), delete e.el, delete e.context, delete e.lat, delete e.lng;
            for (var n = ["closeclick", "links_changed", "pano_changed", "position_changed", "pov_changed", "resize", "visible_changed"], r = t({
                    visible: !0
                }, e), o = 0; o < n.length; o++) delete r[n[o]];
            for (var s = new google.maps.StreetViewPanorama(i, r), o = 0; o < n.length; o++) ! function(t, i) {
                e[i] && google.maps.event.addListener(t, i, function() {
                    e[i].apply(this)
                })
            }(s, n[o]);
            return s
        }, h.prototype.on = function(t, e) {
            return h.on(t, this, e)
        }, h.prototype.off = function(t) {
            h.off(t, this)
        }, h.prototype.once = function(t, e) {
            return h.once(t, this, e)
        }, h.custom_events = ["marker_added", "marker_removed", "polyline_added", "polyline_removed", "polygon_added", "polygon_removed", "geolocated", "geolocation_failed"], h.on = function(t, e, i) {
            if (-1 == h.custom_events.indexOf(t)) return e instanceof h && (e = e.map), google.maps.event.addListener(e, t, i);
            var n = {
                handler: i,
                eventName: t
            };
            return e.registered_events[t] = e.registered_events[t] || [], e.registered_events[t].push(n), n
        }, h.off = function(t, e) {
            -1 == h.custom_events.indexOf(t) ? (e instanceof h && (e = e.map), google.maps.event.clearListeners(e, t)) : e.registered_events[t] = []
        }, h.once = function(t, e, i) {
            return -1 == h.custom_events.indexOf(t) ? (e instanceof h && (e = e.map), google.maps.event.addListenerOnce(e, t, i)) : void 0
        }, h.fire = function(t, e, i) {
            if (-1 == h.custom_events.indexOf(t)) google.maps.event.trigger(e, t, Array.prototype.slice.apply(arguments).slice(2));
            else if (t in i.registered_events)
                for (var n = i.registered_events[t], r = 0; r < n.length; r++) ! function(t, e, i) {
                    t.apply(e, [i])
                }(n[r].handler, i, e)
        }, h.geolocate = function(t) {
            var e = t.always || t.complete;
            navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(i) {
                t.success(i), e && e()
            }, function(i) {
                t.error(i), e && e()
            }, t.options) : (t.not_supported(), e && e())
        }, h.geocode = function(t) {
            this.geocoder = new google.maps.Geocoder;
            var e = t.callback;
            t.hasOwnProperty("lat") && t.hasOwnProperty("lng") && (t.latLng = new google.maps.LatLng(t.lat, t.lng)), delete t.lat, delete t.lng, delete t.callback, this.geocoder.geocode(t, function(t, i) {
                e(t, i)
            })
        }, "object" == typeof window.google && window.google.maps && (google.maps.Polygon.prototype.getBounds || (google.maps.Polygon.prototype.getBounds = function(t) {
            for (var e, i = new google.maps.LatLngBounds, n = this.getPaths(), r = 0; r < n.getLength(); r++) {
                e = n.getAt(r);
                for (var o = 0; o < e.getLength(); o++) i.extend(e.getAt(o))
            }
            return i
        }), google.maps.Polygon.prototype.containsLatLng || (google.maps.Polygon.prototype.containsLatLng = function(t) {
            var e = this.getBounds();
            if (null !== e && !e.contains(t)) return !1;
            for (var i = !1, n = this.getPaths().getLength(), r = 0; n > r; r++)
                for (var o = this.getPaths().getAt(r), s = o.getLength(), a = s - 1, l = 0; s > l; l++) {
                    var h = o.getAt(l),
                        c = o.getAt(a);
                    (h.lng() < t.lng() && c.lng() >= t.lng() || c.lng() < t.lng() && h.lng() >= t.lng()) && h.lat() + (t.lng() - h.lng()) / (c.lng() - h.lng()) * (c.lat() - h.lat()) < t.lat() && (i = !i), a = l
                }
            return i
        }), google.maps.Circle.prototype.containsLatLng || (google.maps.Circle.prototype.containsLatLng = function(t) {
            return google.maps.geometry ? google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), t) <= this.getRadius() : !0
        }), google.maps.Rectangle.prototype.containsLatLng = function(t) {
            return this.getBounds().contains(t)
        }, google.maps.LatLngBounds.prototype.containsLatLng = function(t) {
            return this.contains(t)
        }, google.maps.Marker.prototype.setFences = function(t) {
            this.fences = t
        }, google.maps.Marker.prototype.addFence = function(t) {
            this.fences.push(t)
        }, google.maps.Marker.prototype.getId = function() {
            return this.__gm_id
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
            "use strict";
            if (null == this) throw new TypeError;
            var e = Object(this),
                i = e.length >>> 0;
            if (0 === i) return -1;
            var n = 0;
            if (arguments.length > 1 && (n = Number(arguments[1]), n != n ? n = 0 : 0 != n && n != 1 / 0 && n != -(1 / 0) && (n = (n > 0 || -1) * Math.floor(Math.abs(n)))), n >= i) return -1;
            for (var r = n >= 0 ? n : Math.max(i - Math.abs(n), 0); i > r; r++)
                if (r in e && e[r] === t) return r;
            return -1
        }), h
    });
var $wrapper = $(".wrapper"),
    $loading = $("#loading"),
    $window = $(window),
    $header = $(".header-fixed .header-sticky"),
    map = new GMaps({
        div: "#map",
        scrollwheel: !1,
        lat: 35.6501828,
        lng: 139.7531093,
        zoom: 17
    });
$wrapper.jpreLoader({
    loaderVPos: "50%",
    autoClose: !0
}, function() {
    handleFastClick(), handleHeader(), handleMap(), TweenMax.to($wrapper, .7, {
        opacity: 1
    }), $loading.fadeOut("fast")
});
var handleFastClick = function() {
        FastClick.attach(document.body)
    },
    handleHeader = function() {
        $window.scroll(function() {
            $window.scrollTop() > 100 ? $header.addClass("header-fixed-shrink") : $header.removeClass("header-fixed-shrink")
        })
    },
    handleMap = function() {
        var t = map.addMarker({
            lat: 35.6501828,
            lng: 139.7531093,
            animation: google.maps.Animation.DROP,
            title: "E-Business Inc.",
            infoWindow: {
                content: "東京都港区芝2-28-8芝2丁目ビル10階"
            }
        });
        t.infoWindow.open(map, t)
    };
