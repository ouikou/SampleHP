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
                if (at.test(e)) return K.filter(e, t, i);
                e = K.filter(e, t)
            }
            return K.grep(t, function(t) {
                return U.call(e, t) >= 0 !== i
            })
        }

        function r(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function o(t) {
            var e = dt[t] = {};
            return K.each(t.match(pt) || [], function(t, i) {
                e[i] = !0
            }), e
        }

        function s() {
            Z.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), K.ready()
        }

        function a() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = K.expando + a.uid++
        }

        function l(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(xt, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : _t.test(i) ? K.parseJSON(i) : i
                    } catch (r) {}
                    yt.set(t, e, i)
                } else i = void 0;
            return i
        }

        function c() {
            return !0
        }

        function u() {
            return !1
        }

        function h() {
            try {
                return Z.activeElement
            } catch (t) {}
        }

        function f(t, e) {
            return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function p(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function d(t) {
            var e = jt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function m(t, e) {
            for (var i = 0, n = t.length; n > i; i++) vt.set(t[i], "globalEval", !e || vt.get(e[i], "globalEval"))
        }

        function g(t, e) {
            var i, n, r, o, s, a, l, c;
            if (1 === e.nodeType) {
                if (vt.hasData(t) && (o = vt.access(t), s = vt.set(e, o), c = o.events)) {
                    delete s.handle, s.events = {};
                    for (r in c)
                        for (i = 0, n = c[r].length; n > i; i++) K.event.add(e, r, c[r][i])
                }
                yt.hasData(t) && (a = yt.access(t), l = K.extend({}, a), yt.set(e, l))
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

        function _(e, i) {
            var n, r = K(i.createElement(e)).appendTo(i.body),
                o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : K.css(r[0], "display");
            return r.detach(), o
        }

        function x(t) {
            var e = Z,
                i = zt[t];
            return i || (i = _(t, e), "none" !== i && i || (Ft = (Ft || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ft[0].contentDocument, e.write(), e.close(), i = _(t, e), Ft.detach()), zt[t] = i), i
        }

        function b(t, e, i) {
            var n, r, o, s, a = t.style;
            return i = i || Ht(t), i && (s = i.getPropertyValue(e) || i[e]), i && ("" !== s || K.contains(t.ownerDocument, t) || (s = K.style(t, e)), qt.test(s) && Wt.test(e) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
        }

        function w(t, e) {
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
            var n = Xt.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }

        function C(t, e, i, n, r) {
            for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === i && (s += K.css(t, i + wt[o], !0, r)), n ? ("content" === i && (s -= K.css(t, "padding" + wt[o], !0, r)), "margin" !== i && (s -= K.css(t, "border" + wt[o] + "Width", !0, r))) : (s += K.css(t, "padding" + wt[o], !0, r), "padding" !== i && (s += K.css(t, "border" + wt[o] + "Width", !0, r)));
            return s
        }

        function S(t, e, i) {
            var n = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = Ht(t),
                s = "border-box" === K.css(t, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = b(t, e, o), (0 > r || null == r) && (r = t.style[e]), qt.test(r)) return r;
                n = s && (G.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + C(t, e, i || (s ? "border" : "content"), n, o) + "px"
        }

        function P(t, e) {
            for (var i, n, r, o = [], s = 0, a = t.length; a > s; s++) n = t[s], n.style && (o[s] = vt.get(n, "olddisplay"), i = n.style.display, e ? (o[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Tt(n) && (o[s] = vt.access(n, "olddisplay", x(n.nodeName)))) : (r = Tt(n), "none" === i && r || vt.set(n, "olddisplay", r ? i : K.css(n, "display"))));
            for (s = 0; a > s; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[s] || "" : "none"));
            return t
        }

        function A(t, e, i, n, r) {
            return new A.prototype.init(t, e, i, n, r)
        }

        function E() {
            return setTimeout(function() {
                Gt = void 0
            }), Gt = K.now()
        }

        function D(t, e) {
            var i, n = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = wt[n], r["margin" + i] = r["padding" + i] = t;
            return e && (r.opacity = r.width = t), r
        }

        function O(t, e, i) {
            for (var n, r = (ie[e] || []).concat(ie["*"]), o = 0, s = r.length; s > o; o++)
                if (n = r[o].call(i, e, t)) return n
        }

        function N(t, e, i) {
            var n, r, o, s, a, l, c, u, h = this,
                f = {},
                p = t.style,
                d = t.nodeType && Tt(t),
                m = vt.get(t, "fxshow");
            i.queue || (a = K._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, h.always(function() {
                h.always(function() {
                    a.unqueued--, K.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = K.css(t, "display"), u = "none" === c ? vt.get(t, "olddisplay") || x(t.nodeName) : c, "inline" === u && "none" === K.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", h.always(function() {
                p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (r = e[n], Jt.exec(r)) {
                    if (delete e[n], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[n]) continue;
                        d = !0
                    }
                    f[n] = m && m[n] || K.style(t, n)
                } else c = void 0;
            if (K.isEmptyObject(f)) "inline" === ("none" === c ? x(t.nodeName) : c) && (p.display = c);
            else {
                m ? "hidden" in m && (d = m.hidden) : m = vt.access(t, "fxshow", {}), o && (m.hidden = !d), d ? K(t).show() : h.done(function() {
                    K(t).hide()
                }), h.done(function() {
                    var e;
                    vt.remove(t, "fxshow");
                    for (e in f) K.style(t, e, f[e])
                });
                for (n in f) s = O(d ? m[n] : 0, n, h), n in m || (m[n] = s.start, d && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function R(t, e) {
            var i, n, r, o, s;
            for (i in t)
                if (n = K.camelCase(i), r = e[n], o = t[i], K.isArray(o) && (r = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), s = K.cssHooks[n], s && "expand" in s) {
                    o = s.expand(o), delete t[n];
                    for (i in o) i in t || (t[i] = o[i], e[i] = r)
                } else e[n] = r
        }

        function $(t, e, i) {
            var n, r, o = 0,
                s = ee.length,
                a = K.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = Gt || E(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, o = 1 - n, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(o);
                    return a.notifyWith(t, [c, o, i]), 1 > o && l ? i : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: K.extend({}, e),
                    opts: K.extend(!0, {
                        specialEasing: {}
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Gt || E(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = K.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? c.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n > i; i++) c.tweens[i].run(1);
                        return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (R(u, c.opts.specialEasing); s > o; o++)
                if (n = ee[o].call(c, t, u, c.opts)) return n;
            return K.map(u, O, c), K.isFunction(c.opts.start) && c.opts.start.call(t, c), K.fx.timer(K.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function M(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, r = 0,
                    o = e.toLowerCase().match(pt) || [];
                if (K.isFunction(i))
                    for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function j(t, e, i, n) {
            function r(a) {
                var l;
                return o[a] = !0, K.each(t[a] || [], function(t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), r(c), !1)
                }), l
            }
            var o = {},
                s = t === _e;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }

        function I(t, e) {
            var i, n, r = K.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && K.extend(!0, t, n), t
        }

        function L(t, e, i) {
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
            var r, o, s, a, l, c = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
            for (o = u.shift(); o;)
                if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = u.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (s = c[l + " " + o] || c["* " + o], !s)
                    for (r in c)
                        if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                            s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
                            break
                        }
                if (s !== !0)
                    if (s && t["throws"]) e = s(e);
                    else try {
                        e = s(e)
                    } catch (h) {
                        return {
                            state: "parsererror",
                            error: s ? h : "No conversion from " + l + " to " + o
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
            if (K.isArray(e)) K.each(e, function(e, r) {
                i || ke.test(t) ? n(t, r) : z(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
            });
            else if (i || "object" !== K.type(e)) n(t, e);
            else
                for (r in e) z(t + "[" + r + "]", e[r], i, n)
        }

        function W(t) {
            return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var q = [],
            H = q.slice,
            B = q.concat,
            X = q.push,
            U = q.indexOf,
            Y = {},
            V = Y.toString,
            Q = Y.hasOwnProperty,
            G = {},
            Z = t.document,
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
                return H.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : H.call(this)
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
                return this.pushStack(H.apply(this, arguments))
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
            push: X,
            sort: q.sort,
            splice: q.splice
        }, K.extend = K.fn.extend = function() {
            var t, e, i, n, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || K.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = s[e], n = t[e], s !== n && (c && n && (K.isPlainObject(n) || (r = K.isArray(n))) ? (r ? (r = !1, o = i && K.isArray(i) ? i : []) : o = i && K.isPlainObject(i) ? i : {}, s[e] = K.extend(c, o, n)) : void 0 !== n && (s[e] = n));
            return s
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
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Y[V.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, i = eval;
                t = K.trim(t), t && (1 === t.indexOf("use strict") ? (e = Z.createElement("script"), e.text = t, Z.head.appendChild(e).parentNode.removeChild(e)) : i(t))
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
                return null != t && (i(Object(t)) ? K.merge(n, "string" == typeof t ? [t] : t) : X.call(n, t)), n
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : U.call(e, t, i)
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
                return B.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, r;
                return "string" == typeof e && (i = t[e], e = t, t = i), K.isFunction(t) ? (n = H.call(arguments, 2), r = function() {
                    return t.apply(e || this, n.concat(H.call(arguments)))
                }, r.guid = t.guid = t.guid || K.guid++, r) : void 0
            },
            now: Date.now,
            support: G
        }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            Y["[object " + e + "]"] = e.toLowerCase()
        });
        var rt = function(t) {
            function e(t, e, i, n) {
                var r, o, s, a, l, c, h, p, d, m;
                if ((e ? e.ownerDocument || e : z) !== N && O(e), e = e || N, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
                if (!n && $) {
                    if (11 !== a && (r = yt.exec(t)))
                        if (s = r[1]) {
                            if (9 === a) {
                                if (o = e.getElementById(s), !o || !o.parentNode) return i;
                                if (o.id === s) return i.push(o), i
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && L(e, o) && o.id === s) return i.push(o), i
                        } else {
                            if (r[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                            if ((s = r[3]) && b.getElementsByClassName) return J.apply(i, e.getElementsByClassName(s)), i
                        }
                    if (b.qsa && (!M || !M.test(t))) {
                        if (p = h = F, d = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (c = C(t), (h = e.getAttribute("id")) ? p = h.replace(xt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + f(c[l]);
                            d = _t.test(t) && u(e.parentNode) || e, m = c.join(",")
                        }
                        if (m) try {
                            return J.apply(i, d.querySelectorAll(m)), i
                        } catch (g) {} finally {
                            h || e.removeAttribute("id")
                        }
                    }
                }
                return P(t.replace(lt, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > w.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[F] = !0, t
            }

            function r(t) {
                var e = N.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) w.attrHandle[i[n]] = e
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

            function c(t) {
                return n(function(e) {
                    return e = +e, n(function(i, n) {
                        for (var r, o = t([], i.length, e), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                    })
                })
            }

            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function h() {}

            function f(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function p(t, e, i) {
                var n = e.dir,
                    r = i && "parentNode" === n,
                    o = q++;
                return e.first ? function(e, i, o) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) return t(e, i, o)
                } : function(e, i, s) {
                    var a, l, c = [W, o];
                    if (s) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || r) && t(e, i, s)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || r) {
                                if (l = e[F] || (e[F] = {}), (a = l[n]) && a[0] === W && a[1] === o) return c[2] = a[2];
                                if (l[n] = c, c[2] = t(e, i, s)) return !0
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

            function m(t, i, n) {
                for (var r = 0, o = i.length; o > r; r++) e(t, i[r], n);
                return n
            }

            function g(t, e, i, n, r) {
                for (var o, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(o = t[a]) && (i && !i(o, n, r) || (s.push(o), c && e.push(a)));
                return s
            }

            function v(t, e, i, r, o, s) {
                return r && !r[F] && (r = v(r)), o && !o[F] && (o = v(o, s)), n(function(n, s, a, l) {
                    var c, u, h, f = [],
                        p = [],
                        d = s.length,
                        v = n || m(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !n && e ? v : g(v, f, t, a, l),
                        _ = i ? o || (n ? t : d || r) ? [] : s : y;
                    if (i && i(y, _, a, l), r)
                        for (c = g(_, p), r(c, [], a, l), u = c.length; u--;)(h = c[u]) && (_[p[u]] = !(y[p[u]] = h));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (c = [], u = _.length; u--;)(h = _[u]) && c.push(y[u] = h);
                                o(null, _ = [], c, l)
                            }
                            for (u = _.length; u--;)(h = _[u]) && (c = o ? tt(n, h) : f[u]) > -1 && (n[c] = !(s[c] = h))
                        }
                    } else _ = g(_ === s ? _.splice(d, _.length) : _), o ? o(null, s, _, l) : J.apply(s, _)
                })
            }

            function y(t) {
                for (var e, i, n, r = t.length, o = w.relative[t[0].type], s = o || w.relative[" "], a = o ? 1 : 0, l = p(function(t) {
                        return t === e
                    }, s, !0), c = p(function(t) {
                        return tt(e, t) > -1
                    }, s, !0), u = [function(t, i, n) {
                        var r = !o && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                        return e = null, r
                    }]; r > a; a++)
                    if (i = w.relative[t[a].type]) u = [p(d(u), i)];
                    else {
                        if (i = w.filter[t[a].type].apply(null, t[a].matches), i[F]) {
                            for (n = ++a; r > n && !w.relative[t[n].type]; n++);
                            return v(a > 1 && d(u), a > 1 && f(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(lt, "$1"), i, n > a && y(t.slice(a, n)), r > n && y(t = t.slice(n)), r > n && f(t))
                        }
                        u.push(i)
                    }
                return d(u)
            }

            function _(t, i) {
                var r = i.length > 0,
                    o = t.length > 0,
                    s = function(n, s, a, l, c) {
                        var u, h, f, p = 0,
                            d = "0",
                            m = n && [],
                            v = [],
                            y = A,
                            _ = n || o && w.find.TAG("*", c),
                            x = W += null == y ? 1 : Math.random() || .1,
                            b = _.length;
                        for (c && (A = s !== N && s); d !== b && null != (u = _[d]); d++) {
                            if (o && u) {
                                for (h = 0; f = t[h++];)
                                    if (f(u, s, a)) {
                                        l.push(u);
                                        break
                                    }
                                c && (W = x)
                            }
                            r && ((u = !f && u) && p--, n && m.push(u))
                        }
                        if (p += d, r && d !== p) {
                            for (h = 0; f = i[h++];) f(m, v, s, a);
                            if (n) {
                                if (p > 0)
                                    for (; d--;) m[d] || v[d] || (v[d] = G.call(l));
                                v = g(v)
                            }
                            J.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                        }
                        return c && (W = x, A = y), m
                    };
                return r ? n(s) : s
            }
            var x, b, w, T, k, C, S, P, A, E, D, O, N, R, $, M, j, I, L, F = "sizzle" + 1 * new Date,
                z = t.document,
                W = 0,
                q = 0,
                H = i(),
                B = i(),
                X = i(),
                U = function(t, e) {
                    return t === e && (D = !0), 0
                },
                Y = 1 << 31,
                V = {}.hasOwnProperty,
                Q = [],
                G = Q.pop,
                Z = Q.push,
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
                rt = nt.replace("w", "w#"),
                ot = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]",
                st = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                at = new RegExp(it + "+", "g"),
                lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                ct = new RegExp("^" + it + "*," + it + "*"),
                ut = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                ft = new RegExp(st),
                pt = new RegExp("^" + rt + "$"),
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
                mt = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                _t = /[+~]/,
                xt = /'|\\/g,
                bt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                wt = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                Tt = function() {
                    O()
                };
            try {
                J.apply(Q = K.call(z.childNodes), z.childNodes), Q[z.childNodes.length].nodeType
            } catch (kt) {
                J = {
                    apply: Q.length ? function(t, e) {
                        Z.apply(t, K.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            b = e.support = {}, k = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, O = e.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : z;
                return n !== N && 9 === n.nodeType && n.documentElement ? (N = n, R = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), $ = !k(n), b.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), b.getElementsByTagName = r(function(t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), b.getElementsByClassName = vt.test(n.getElementsByClassName), b.getById = r(function(t) {
                    return R.appendChild(t).id = F, !n.getElementsByName || !n.getElementsByName(F).length
                }), b.getById ? (w.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && $) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, w.filter.ID = function(t) {
                    var e = t.replace(bt, wt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete w.find.ID, w.filter.ID = function(t) {
                    var e = t.replace(bt, wt);
                    return function(t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), w.find.TAG = b.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, w.find.CLASS = b.getElementsByClassName && function(t, e) {
                    return $ ? e.getElementsByClassName(t) : void 0
                }, j = [], M = [], (b.qsa = vt.test(n.querySelectorAll)) && (r(function(t) {
                    R.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + F + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || M.push(".#.+[+~]")
                }), r(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
                })), (b.matchesSelector = vt.test(I = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && r(function(t) {
                    b.disconnectedMatch = I.call(t, "div"), I.call(t, "[s!='']:x"), j.push("!=", st)
                }), M = M.length && new RegExp(M.join("|")), j = j.length && new RegExp(j.join("|")), e = vt.test(R.compareDocumentPosition), L = e || vt.test(R.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function(t, e) {
                    if (t === e) return D = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === z && L(z, t) ? -1 : e === n || e.ownerDocument === z && L(z, e) ? 1 : E ? tt(E, t) - tt(E, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return D = !0, 0;
                    var i, r = 0,
                        o = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        c = [e];
                    if (!o || !a) return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : E ? tt(E, t) - tt(E, e) : 0;
                    if (o === a) return s(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) c.unshift(i);
                    for (; l[r] === c[r];) r++;
                    return r ? s(l[r], c[r]) : l[r] === z ? -1 : c[r] === z ? 1 : 0
                }, n) : N
            }, e.matches = function(t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== N && O(t), i = i.replace(ht, "='$1']"), b.matchesSelector && $ && (!j || !j.test(i)) && (!M || !M.test(i))) try {
                    var n = I.call(t, i);
                    if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (r) {}
                return e(i, N, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== N && O(t), L(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== N && O(t);
                var i = w.attrHandle[e.toLowerCase()],
                    n = i && V.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !$) : void 0;
                return void 0 !== n ? n : b.attributes || !$ ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    r = 0;
                if (D = !b.detectDuplicates, E = !b.sortStable && t.slice(0), t.sort(U), D) {
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
            }, w = e.selectors = {
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
                        return t[1] = t[1].replace(bt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ft.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(bt, wt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = H[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && H(t, function(t) {
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
                            var c, u, h, f, p, d, m = o !== s ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (h = e; h = h[m];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        d = m = "only" === t && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (u = g[F] || (g[F] = {}), c = u[t] || [], p = c[0] === W && c[1], f = c[0] === W && c[2], h = p && g.childNodes[p]; h = ++p && h && h[m] || (f = p = 0) || d.pop();)
                                        if (1 === h.nodeType && ++f && h === e) {
                                            u[t] = [W, p, f];
                                            break
                                        }
                                } else if (y && (c = (e[F] || (e[F] = {}))[t]) && c[0] === W) f = c[1];
                                else
                                    for (;
                                        (h = ++p && h && h[m] || (f = p = 0) || d.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++f || (y && ((h[F] || (h[F] = {}))[t] = [W, f]), h !== e)););
                                return f -= r, f === n || f % n === 0 && f / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) {
                        var r, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[F] ? o(i) : o.length > 1 ? (r = [t, t, "", i], w.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
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
                        return t = t.replace(bt, wt),
                            function(e) {
                                return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                            }
                    }),
                    lang: n(function(t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, wt).toLowerCase(),
                            function(e) {
                                var i;
                                do
                                    if (i = $ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
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
                        return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
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
                        return !w.pseudos.empty(t)
                    },
                    header: function(t) {
                        return gt.test(t.nodeName)
                    },
                    input: function(t) {
                        return mt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: c(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: c(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: c(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[x] = a(x);
            for (x in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[x] = l(x);
            return h.prototype = w.filters = w.pseudos, w.setFilters = new h, C = e.tokenize = function(t, i) {
                var n, r, o, s, a, l, c, u = B[t + " "];
                if (u) return i ? 0 : u.slice(0);
                for (a = t, l = [], c = w.preFilter; a;) {
                    n && !(r = ct.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = ut.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(lt, " ")
                    }), a = a.slice(n.length));
                    for (s in w.filter) !(r = dt[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: s,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : B(t, l).slice(0)
            }, S = e.compile = function(t, e) {
                var i, n = [],
                    r = [],
                    o = X[t + " "];
                if (!o) {
                    for (e || (e = C(t)), i = e.length; i--;) o = y(e[i]), o[F] ? n.push(o) : r.push(o);
                    o = X(t, _(r, n)), o.selector = t
                }
                return o
            }, P = e.select = function(t, e, i, n) {
                var r, o, s, a, l, c = "function" == typeof t && t,
                    h = !n && C(t = c.selector || t);
                if (i = i || [], 1 === h.length) {
                    if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && b.getById && 9 === e.nodeType && $ && w.relative[o[1].type]) {
                        if (e = (w.find.ID(s.matches[0].replace(bt, wt), e) || [])[0], !e) return i;
                        c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (r = dt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !w.relative[a = s.type]);)
                        if ((l = w.find[a]) && (n = l(s.matches[0].replace(bt, wt), _t.test(o[0].type) && u(e.parentNode) || e))) {
                            if (o.splice(r, 1), t = n.length && f(o), !t) return J.apply(i, n), i;
                            break
                        }
                }
                return (c || S(t, h))(n, e, !$, i, _t.test(t) && u(e.parentNode) || e), i
            }, b.sortStable = F.split("").sort(U).join("") === F, b.detectDuplicates = !!D, O(), b.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(N.createElement("div"))
            }), r(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), b.attributes && r(function(t) {
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
        K.find = rt, K.expr = rt.selectors, K.expr[":"] = K.expr.pseudos, K.unique = rt.uniqueSort, K.text = rt.getText, K.isXMLDoc = rt.isXML, K.contains = rt.contains;
        var ot = K.expr.match.needsContext,
            st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            at = /^.[^:#\[\.,]*$/;
        K.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? K.find.matchesSelector(n, t) ? [n] : [] : K.find.matches(t, K.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, K.fn.extend({
            find: function(t) {
                var e, i = this.length,
                    n = [],
                    r = this;
                if ("string" != typeof t) return this.pushStack(K(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (K.contains(r[e], this)) return !0
                }));
                for (e = 0; i > e; e++) K.find(t, r[e], n);
                return n = this.pushStack(i > 1 ? K.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function(t) {
                return !!n(this, "string" == typeof t && ot.test(t) ? K(t) : t || [], !1).length
            }
        });
        var lt, ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ut = K.fn.init = function(t, e) {
                var i, n;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ct.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof K ? e[0] : e, K.merge(this, K.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), st.test(i[1]) && K.isPlainObject(e))
                            for (i in e) K.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    return n = Z.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = Z, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : K.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), K.makeArray(t, this))
            };
        ut.prototype = K.fn, lt = K(Z);
        var ht = /^(?:parents|prev(?:Until|All))/,
            ft = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        K.extend({
            dir: function(t, e, i) {
                for (var n = [], r = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && K(t).is(i)) break;
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
                for (var i, n = 0, r = this.length, o = [], s = ot.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; r > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && K.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        }
                return this.pushStack(o.length > 1 ? K.unique(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? U.call(K(t), this[0]) : U.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
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
                return r(t, "nextSibling")
            },
            prev: function(t) {
                return r(t, "previousSibling")
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
                var r = K.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = K.filter(n, r)), this.length > 1 && (ft[t] || K.unique(r), ht.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var pt = /\S+/g,
            dt = {};
        K.Callbacks = function(t) {
            t = "string" == typeof t ? dt[t] || o(t) : K.extend({}, t);
            var e, i, n, r, s, a, l = [],
                c = !t.once && [],
                u = function(o) {
                    for (e = t.memory && o, i = !0, a = r || 0, r = 0, s = l.length, n = !0; l && s > a; a++)
                        if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                            e = !1;
                            break
                        }
                    n = !1, l && (c ? c.length && u(c.shift()) : e ? l = [] : h.disable())
                },
                h = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function o(e) {
                                K.each(e, function(e, i) {
                                    var n = K.type(i);
                                    "function" === n ? t.unique && h.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                                })
                            }(arguments), n ? s = l.length : e && (r = i, u(e))
                        }
                        return this
                    },
                    remove: function() {
                        return l && K.each(arguments, function(t, e) {
                            for (var i;
                                (i = K.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (s >= i && s--, a >= i && a--)
                        }), this
                    },
                    has: function(t) {
                        return t ? K.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], s = 0, this
                    },
                    disable: function() {
                        return l = c = e = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = void 0, e || h.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(t, e) {
                        return !l || i && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? c.push(e) : u(e)), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return h
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
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return K.Deferred(function(i) {
                                K.each(e, function(e, o) {
                                    var s = K.isFunction(t[e]) && t[e];
                                    r[o[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && K.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? K.extend(t, n) : n
                        }
                    },
                    r = {};
                return n.pipe = n.then, K.each(e, function(t, o) {
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
                    o = H.call(arguments),
                    s = o.length,
                    a = 1 !== s || t && K.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : K.Deferred(),
                    c = function(t, i, n) {
                        return function(r) {
                            i[t] = this, n[t] = arguments.length > 1 ? H.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (s > 1)
                    for (e = new Array(s), i = new Array(s), n = new Array(s); s > r; r++) o[r] && K.isFunction(o[r].promise) ? o[r].promise().done(c(r, n, o)).fail(l.reject).progress(c(r, i, e)) : --a;
                return a || l.resolveWith(n, o), l.promise()
            }
        });
        var mt;
        K.fn.ready = function(t) {
            return K.ready.promise().done(t), this
        }, K.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? K.readyWait++ : K.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --K.readyWait : K.isReady) || (K.isReady = !0, t !== !0 && --K.readyWait > 0 || (mt.resolveWith(Z, [K]), K.fn.triggerHandler && (K(Z).triggerHandler("ready"), K(Z).off("ready"))))
            }
        }), K.ready.promise = function(e) {
            return mt || (mt = K.Deferred(), "complete" === Z.readyState ? setTimeout(K.ready) : (Z.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), mt.promise(e)
        }, K.ready.promise();
        var gt = K.access = function(t, e, i, n, r, o, s) {
            var a = 0,
                l = t.length,
                c = null == i;
            if ("object" === K.type(i)) {
                r = !0;
                for (a in i) K.access(t, e, a, i[a], !0, o, s)
            } else if (void 0 !== n && (r = !0, K.isFunction(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                    return c.call(K(t), i)
                })), e))
                for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
            return r ? t : c ? e.call(t) : l ? e(t[0], i) : o
        };
        K.acceptData = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        }, a.uid = 1, a.accepts = K.acceptData, a.prototype = {
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
                        e[this.expando] = i, K.extend(t, e)
                    }
                }
                return this.cache[i] || (this.cache[i] = {}), i
            },
            set: function(t, e, i) {
                var n, r = this.key(t),
                    o = this.cache[r];
                if ("string" == typeof e) o[e] = i;
                else if (K.isEmptyObject(o)) K.extend(this.cache[r], e);
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
                return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, K.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n, r, o = this.key(t),
                    s = this.cache[o];
                if (void 0 === e) this.cache[o] = {};
                else {
                    K.isArray(e) ? n = e.concat(e.map(K.camelCase)) : (r = K.camelCase(e), e in s ? n = [e, r] : (n = r, n = n in s ? [n] : n.match(pt) || [])), i = n.length;
                    for (; i--;) delete s[n[i]]
                }
            },
            hasData: function(t) {
                return !K.isEmptyObject(this.cache[t[this.expando]] || {})
            },
            discard: function(t) {
                t[this.expando] && delete this.cache[t[this.expando]]
            }
        };
        var vt = new a,
            yt = new a,
            _t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            xt = /([A-Z])/g;
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
                var i, n, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = yt.get(o), 1 === o.nodeType && !vt.get(o, "hasDataAttrs"))) {
                        for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = K.camelCase(n.slice(5)), l(o, n, r[n])));
                        vt.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    yt.set(this, t)
                }) : gt(this, function(e) {
                    var i, n = K.camelCase(t);
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
        }), K.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = vt.get(t, e), i && (!n || K.isArray(i) ? n = vt.access(t, e, K.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = K.queue(t, e),
                    n = i.length,
                    r = i.shift(),
                    o = K._queueHooks(t, e),
                    s = function() {
                        K.dequeue(t, e)
                    };
                "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !n && o && o.empty.fire()
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
                    r = K.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --n || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = vt.get(o[s], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var bt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            wt = ["Top", "Right", "Bottom", "Left"],
            Tt = function(t, e) {
                return t = e || t, "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
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
            At = /^(?:focusinfocus|focusoutblur)$/,
            Et = /^([^.]*)(?:\.(.+)|)$/;
        K.event = {
            global: {},
            add: function(t, e, i, n, r) {
                var o, s, a, l, c, u, h, f, p, d, m, g = vt.get(t);
                if (g)
                    for (i.handler && (o = i, i = o.handler, r = o.selector), i.guid || (i.guid = K.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                            return typeof K !== Ct && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(pt) || [""], c = e.length; c--;) a = Et.exec(e[c]) || [], p = m = a[1], d = (a[2] || "").split(".").sort(), p && (h = K.event.special[p] || {}, p = (r ? h.delegateType : h.bindType) || p, h = K.event.special[p] || {}, u = K.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && K.expr.match.needsContext.test(r),
                        namespace: d.join(".")
                    }, o), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, h.setup && h.setup.call(t, n, d, s) !== !1 || t.addEventListener && t.addEventListener(p, s, !1)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), K.event.global[p] = !0)
            },
            remove: function(t, e, i, n, r) {
                var o, s, a, l, c, u, h, f, p, d, m, g = vt.hasData(t) && vt.get(t);
                if (g && (l = g.events)) {
                    for (e = (e || "").match(pt) || [""], c = e.length; c--;)
                        if (a = Et.exec(e[c]) || [], p = m = a[1], d = (a[2] || "").split(".").sort(), p) {
                            for (h = K.event.special[p] || {}, p = (n ? h.delegateType : h.bindType) || p, f = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) u = f[o], !r && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, h.remove && h.remove.call(t, u));
                            s && !f.length && (h.teardown && h.teardown.call(t, d, g.handle) !== !1 || K.removeEvent(t, p, g.handle), delete l[p])
                        } else
                            for (p in l) K.event.remove(t, p + e[c], i, n, !0);
                    K.isEmptyObject(l) && (delete g.handle, vt.remove(t, "events"))
                }
            },
            trigger: function(e, i, n, r) {
                var o, s, a, l, c, u, h, f = [n || Z],
                    p = Q.call(e, "type") ? e.type : e,
                    d = Q.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = a = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !At.test(p + K.event.triggered) && (p.indexOf(".") >= 0 && (d = p.split("."), p = d.shift(), d.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[K.expando] ? e : new K.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : K.makeArray(i, [e]), h = K.event.special[p] || {}, r || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                    if (!r && !h.noBubble && !K.isWindow(n)) {
                        for (l = h.delegateType || p, At.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
                        a === (n.ownerDocument || Z) && f.push(a.defaultView || a.parentWindow || t)
                    }
                    for (o = 0;
                        (s = f[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : h.bindType || p, u = (vt.get(s, "events") || {})[e.type] && vt.get(s, "handle"), u && u.apply(s, i), u = c && s[c], u && u.apply && K.acceptData(s) && (e.result = u.apply(s, i), e.result === !1 && e.preventDefault());
                    return e.type = p, r || e.isDefaultPrevented() || h._default && h._default.apply(f.pop(), i) !== !1 || !K.acceptData(n) || c && K.isFunction(n[p]) && !K.isWindow(n) && (a = n[c], a && (n[c] = null), K.event.triggered = p, n[p](), K.event.triggered = void 0, a && (n[c] = a)), e.result
                }
            },
            dispatch: function(t) {
                t = K.event.fix(t);
                var e, i, n, r, o, s = [],
                    a = H.call(arguments),
                    l = (vt.get(this, "events") || {})[t.type] || [],
                    c = K.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (s = K.event.handlers.call(this, t, l), e = 0;
                        (r = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, i = 0;
                            (o = r.handlers[i++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(o.namespace) || (t.handleObj = o, t.data = o.data, n = ((K.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, r, o, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (l.disabled !== !0 || "click" !== t.type) {
                            for (n = [], i = 0; a > i; i++) o = e[i], r = o.selector + " ", void 0 === n[r] && (n[r] = o.needsContext ? K(r, this).index(l) >= 0 : K.find(r, this, null, [l]).length), n[r] && n.push(o);
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
                if (t[K.expando]) return t;
                var e, i, n, r = t.type,
                    o = t,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Pt.test(r) ? this.mouseHooks : St.test(r) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new K.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
                return t.target || (t.target = Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== h() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === h() && this.blur ? (this.blur(), !1) : void 0
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
                var r = K.extend(new K.Event, i, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? K.event.trigger(r, null, e) : K.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
            }
        }, K.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        }, K.Event = function(t, e) {
            return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? c : u) : this.type = t, e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(t, e)
        }, K.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = c, t && t.preventDefault && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = c, t && t.stopPropagation && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = c, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
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
                        r = t.relatedTarget,
                        o = t.handleObj;
                    return r && (r === n || K.contains(n, r)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), G.focusinBubbles || K.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                K.event.simulate(e, t.target, K.event.fix(t), !0)
            };
            K.event.special[e] = {
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
        }), K.fn.extend({
            on: function(t, e, i, n, r) {
                var o, s;
                if ("object" == typeof t) {
                    "string" != typeof e && (i = i || e, e = void 0);
                    for (s in t) this.on(s, e, i, t[s], r);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = u;
                else if (!n) return this;
                return 1 === r && (o = n, n = function(t) {
                    return K().off(t), o.apply(this, arguments)
                }, n.guid = o.guid || (o.guid = K.guid++)), this.each(function() {
                    K.event.add(this, t, n, i, e)
                })
            },
            one: function(t, e, i, n) {
                return this.on(t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, r;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, K(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = u), this.each(function() {
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
        var Dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ot = /<([\w:]+)/,
            Nt = /<|&#?\w+;/,
            Rt = /<(?:script|style|link)/i,
            $t = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Mt = /^$|\/(?:java|ecma)script/i,
            jt = /^true\/(.*)/,
            It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Lt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, K.extend({
            clone: function(t, e, i) {
                var n, r, o, s, a = t.cloneNode(!0),
                    l = K.contains(t.ownerDocument, t);
                if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t)))
                    for (s = v(a), o = v(t), n = 0, r = o.length; r > n; n++) y(o[n], s[n]);
                if (e)
                    if (i)
                        for (o = o || v(t), s = s || v(a), n = 0, r = o.length; r > n; n++) g(o[n], s[n]);
                    else g(t, a);
                return s = v(a, "script"), s.length > 0 && m(s, !l && v(t, "script")), a
            },
            buildFragment: function(t, e, i, n) {
                for (var r, o, s, a, l, c, u = e.createDocumentFragment(), h = [], f = 0, p = t.length; p > f; f++)
                    if (r = t[f], r || 0 === r)
                        if ("object" === K.type(r)) K.merge(h, r.nodeType ? [r] : r);
                        else if (Nt.test(r)) {
                    for (o = o || u.appendChild(e.createElement("div")), s = (Ot.exec(r) || ["", ""])[1].toLowerCase(), a = Lt[s] || Lt._default, o.innerHTML = a[1] + r.replace(Dt, "<$1></$2>") + a[2], c = a[0]; c--;) o = o.lastChild;
                    K.merge(h, o.childNodes), o = u.firstChild, o.textContent = ""
                } else h.push(e.createTextNode(r));
                for (u.textContent = "", f = 0; r = h[f++];)
                    if ((!n || -1 === K.inArray(r, n)) && (l = K.contains(r.ownerDocument, r), o = v(u.appendChild(r), "script"), l && m(o), i))
                        for (c = 0; r = o[c++];) Mt.test(r.type || "") && i.push(r);
                return u
            },
            cleanData: function(t) {
                for (var e, i, n, r, o = K.event.special, s = 0; void 0 !== (i = t[s]); s++) {
                    if (K.acceptData(i) && (r = i[vt.expando], r && (e = vt.cache[r]))) {
                        if (e.events)
                            for (n in e.events) o[n] ? K.event.remove(i, n) : K.removeEvent(i, n, e.handle);
                        vt.cache[r] && delete vt.cache[r]
                    }
                    delete yt.cache[i[yt.expando]]
                }
            }
        }), K.fn.extend({
            text: function(t) {
                return gt(this, function(t) {
                    return void 0 === t ? K.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = f(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = f(this, t);
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
                for (var i, n = t ? K.filter(t, this) : this, r = 0; null != (i = n[r]); r++) e || 1 !== i.nodeType || K.cleanData(v(i)), i.parentNode && (e && K.contains(i.ownerDocument, i) && m(v(i, "script")), i.parentNode.removeChild(i));
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
                return gt(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Rt.test(t) && !Lt[(Ot.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(Dt, "<$1></$2>");
                        try {
                            for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (K.cleanData(v(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (r) {}
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
                t = B.apply([], t);
                var i, n, r, o, s, a, l = 0,
                    c = this.length,
                    u = this,
                    h = c - 1,
                    f = t[0],
                    m = K.isFunction(f);
                if (m || c > 1 && "string" == typeof f && !G.checkClone && $t.test(f)) return this.each(function(i) {
                    var n = u.eq(i);
                    m && (t[0] = f.call(this, i, n.html())), n.domManip(t, e)
                });
                if (c && (i = K.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                    for (r = K.map(v(i, "script"), p), o = r.length; c > l; l++) s = i, l !== h && (s = K.clone(s, !0, !0), o && K.merge(r, v(s, "script"))), e.call(this[l], s, l);
                    if (o)
                        for (a = r[r.length - 1].ownerDocument, K.map(r, d), l = 0; o > l; l++) s = r[l], Mt.test(s.type || "") && !vt.access(s, "globalEval") && K.contains(a, s) && (s.src ? K._evalUrl && K._evalUrl(s.src) : K.globalEval(s.textContent.replace(It, "")))
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
                for (var i, n = [], r = K(t), o = r.length - 1, s = 0; o >= s; s++) i = s === o ? this : this.clone(!0), K(r[s])[e](i), X.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var Ft, zt = {},
            Wt = /^margin/,
            qt = new RegExp("^(" + bt + ")(?!px)[a-z%]+$", "i"),
            Ht = function(e) {
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
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), t.getComputedStyle && K.extend(G, {
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
        }(), K.swap = function(t, e, i, n) {
            var r, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            r = i.apply(t, n || []);
            for (o in e) t.style[o] = s[o];
            return r
        };
        var Bt = /^(none|table(?!-c[ea]).+)/,
            Xt = new RegExp("^(" + bt + ")(.*)$", "i"),
            Ut = new RegExp("^([+-])=(" + bt + ")", "i"),
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
        K.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = b(t, "opacity");
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
                    var r, o, s, a = K.camelCase(e),
                        l = t.style;
                    return e = K.cssProps[a] || (K.cssProps[a] = T(l, a)), s = K.cssHooks[e] || K.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (r = s.get(t, !1, n)) ? r : l[e] : (o = typeof i, "string" === o && (r = Ut.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(K.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || K.cssNumber[a] || (i += "px"), G.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i)), void 0)
                }
            },
            css: function(t, e, i, n) {
                var r, o, s, a = K.camelCase(e);
                return e = K.cssProps[a] || (K.cssProps[a] = T(t.style, a)), s = K.cssHooks[e] || K.cssHooks[a], s && "get" in s && (r = s.get(t, !0, i)), void 0 === r && (r = b(t, e, n)), "normal" === r && e in Vt && (r = Vt[e]), "" === i || i ? (o = parseFloat(r), i === !0 || K.isNumeric(o) ? o || 0 : r) : r
            }
        }), K.each(["height", "width"], function(t, e) {
            K.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? Bt.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, Yt, function() {
                        return S(t, e, n)
                    }) : S(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var r = n && Ht(t);
                    return k(t, i, n ? C(t, e, n, "border-box" === K.css(t, "boxSizing", !1, r), r) : 0)
                }
            }
        }), K.cssHooks.marginRight = w(G.reliableMarginRight, function(t, e) {
            return e ? K.swap(t, {
                display: "inline-block"
            }, b, [t, "marginRight"]) : void 0
        }), K.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            K.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + wt[n] + e] = o[n] || o[n - 2] || o[0];
                    return r
                }
            }, Wt.test(t) || (K.cssHooks[t + e].set = k)
        }), K.fn.extend({
            css: function(t, e) {
                return gt(this, function(t, e, i) {
                    var n, r, o = {},
                        s = 0;
                    if (K.isArray(e)) {
                        for (n = Ht(t), r = e.length; r > s; s++) o[e[s]] = K.css(t, e[s], !1, n);
                        return o
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
        }), K.Tween = A, A.prototype = {
            constructor: A,
            init: function(t, e, i, n, r, o) {
                this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (K.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = A.propHooks[this.prop];
                return t && t.get ? t.get(this) : A.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = A.propHooks[this.prop];
                return this.options.duration ? this.pos = e = K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : A.propHooks._default.set(this), this
            }
        }, A.prototype.init.prototype = A.prototype, A.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
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
        }, K.fx = A.prototype.init, K.fx.step = {};
        var Gt, Zt, Jt = /^(?:toggle|show|hide)$/,
            Kt = new RegExp("^(?:([+-])=|)(" + bt + ")([a-z%]*)$", "i"),
            te = /queueHooks$/,
            ee = [N],
            ie = {
                "*": [function(t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        r = Kt.exec(e),
                        o = r && r[3] || (K.cssNumber[t] ? "" : "px"),
                        s = (K.cssNumber[t] || "px" !== o && +n) && Kt.exec(K.css(i.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== o) {
                        o = o || s[3], r = r || [], s = +n || 1;
                        do a = a || ".5", s /= a, K.style(i.elem, t, s + o); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                    }
                    return r && (s = i.start = +s || +n || 0, i.unit = o, i.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), i
                }]
            };
        K.Animation = K.extend($, {
                tweener: function(t, e) {
                    K.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var i, n = 0, r = t.length; r > n; n++) i = t[n], ie[i] = ie[i] || [], ie[i].unshift(e)
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
                    var r = K.isEmptyObject(t),
                        o = K.speed(e, i, n),
                        s = function() {
                            var e = $(this, K.extend({}, t), o);
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
                            o = K.timers,
                            s = vt.get(this);
                        if (r) s[r] && s[r].stop && n(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && te.test(r) && n(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(i), e = !1, o.splice(r, 1));
                        !e && i || K.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, i = vt.get(this),
                            n = i[t + "queue"],
                            r = i[t + "queueHooks"],
                            o = K.timers,
                            s = n ? n.length : 0;
                        for (i.finish = !0, K.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0),
                            o.splice(e, 1));
                        for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), K.each(["toggle", "show", "hide"], function(t, e) {
                var i = K.fn[e];
                K.fn[e] = function(t, n, r) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(D(e, !0), t, n, r)
                }
            }), K.each({
                slideDown: D("show"),
                slideUp: D("hide"),
                slideToggle: D("toggle"),
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
                for (Gt = K.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
                i.length || K.fx.stop(), Gt = void 0
            }, K.fx.timer = function(t) {
                K.timers.push(t), t() ? K.fx.start() : K.timers.pop()
            }, K.fx.interval = 13, K.fx.start = function() {
                Zt || (Zt = setInterval(K.fx.tick, K.fx.interval))
            }, K.fx.stop = function() {
                clearInterval(Zt), Zt = null
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
                var t = Z.createElement("input"),
                    e = Z.createElement("select"),
                    i = e.appendChild(Z.createElement("option"));
                t.type = "checkbox", G.checkOn = "" !== t.value, G.optSelected = i.selected, e.disabled = !0, G.optDisabled = !i.disabled, t = Z.createElement("input"), t.value = "t", t.type = "radio", G.radioValue = "t" === t.value
            }();
        var ne, re, oe = K.expr.attrHandle;
        K.fn.extend({
            attr: function(t, e) {
                return gt(this, K.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    K.removeAttr(this, t)
                })
            }
        }), K.extend({
            attr: function(t, e, i) {
                var n, r, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Ct ? K.prop(t, e, i) : (1 === o && K.isXMLDoc(t) || (e = e.toLowerCase(), n = K.attrHooks[e] || (K.expr.match.bool.test(e) ? re : ne)), void 0 === i ? n && "get" in n && null !== (r = n.get(t, e)) ? r : (r = K.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(t, i, e)) ? r : (t.setAttribute(e, i + ""), i) : void K.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var i, n, r = 0,
                    o = e && e.match(pt);
                if (o && 1 === t.nodeType)
                    for (; i = o[r++];) n = K.propFix[i] || i, K.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!G.radioValue && "radio" === e && K.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            }
        }), re = {
            set: function(t, e, i) {
                return e === !1 ? K.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, K.each(K.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = oe[e] || K.find.attr;
            oe[e] = function(t, e, n) {
                var r, o;
                return n || (o = oe[e], oe[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, oe[e] = o), r
            }
        });
        var se = /^(?:input|select|textarea|button)$/i;
        K.fn.extend({
            prop: function(t, e) {
                return gt(this, K.prop, t, e, arguments.length > 1)
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
                var n, r, o, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !K.isXMLDoc(t), o && (e = K.propFix[e] || e, r = K.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        return t.hasAttribute("tabindex") || se.test(t.nodeName) || t.href ? t.tabIndex : -1
                    }
                }
            }
        }), G.optSelected || (K.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }
        }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            K.propFix[this.toLowerCase()] = this
        });
        var ae = /[\t\r\n\f]/g;
        K.fn.extend({
            addClass: function(t) {
                var e, i, n, r, o, s, a = "string" == typeof t && t,
                    l = 0,
                    c = this.length;
                if (K.isFunction(t)) return this.each(function(e) {
                    K(this).addClass(t.call(this, e, this.className))
                });
                if (a)
                    for (e = (t || "").match(pt) || []; c > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : " ")) {
                            for (o = 0; r = e[o++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                            s = K.trim(n), i.className !== s && (i.className = s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, r, o, s, a = 0 === arguments.length || "string" == typeof t && t,
                    l = 0,
                    c = this.length;
                if (K.isFunction(t)) return this.each(function(e) {
                    K(this).removeClass(t.call(this, e, this.className))
                });
                if (a)
                    for (e = (t || "").match(pt) || []; c > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : "")) {
                            for (o = 0; r = e[o++];)
                                for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                            s = t ? K.trim(n) : "", i.className !== s && (i.className = s)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : K.isFunction(t) ? this.each(function(i) {
                    K(this).toggleClass(t.call(this, i, this.className, e), e)
                }) : this.each(function() {
                    if ("string" === i)
                        for (var e, n = 0, r = K(this), o = t.match(pt) || []; e = o[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
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
        K.fn.extend({
            val: function(t) {
                var e, i, n, r = this[0]; {
                    if (arguments.length) return n = K.isFunction(t), this.each(function(i) {
                        var r;
                        1 === this.nodeType && (r = n ? t.call(this, i, K(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : K.isArray(r) && (r = K.map(r, function(t) {
                            return null == t ? "" : t + ""
                        })), e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return e = K.valHooks[r.type] || K.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(le, "") : null == i ? "" : i)
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
                        for (var e, i, n = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : n.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                            if (i = n[l], (i.selected || l === r) && (G.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !K.nodeName(i.parentNode, "optgroup"))) {
                                if (e = K(i).val(), o) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var i, n, r = t.options, o = K.makeArray(e), s = r.length; s--;) n = r[s], (n.selected = K.inArray(n.value, o) >= 0) && (i = !0);
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), K.each(["radio", "checkbox"], function() {
            K.valHooks[this] = {
                set: function(t, e) {
                    return K.isArray(e) ? t.checked = K.inArray(K(t).val(), e) >= 0 : void 0
                }
            }, G.checkOn || (K.valHooks[this].get = function(t) {
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
        var ce = K.now(),
            ue = /\?/;
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
        var he = /#.*$/,
            fe = /([?&])_=[^&]*/,
            pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            de = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            me = /^(?:GET|HEAD)$/,
            ge = /^\/\//,
            ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            ye = {},
            _e = {},
            xe = "*/".concat("*"),
            be = t.location.href,
            we = ve.exec(be.toLowerCase()) || [];
        K.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: be,
                type: "GET",
                isLocal: de.test(we[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": xe,
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
                return e ? I(I(t, K.ajaxSettings), e) : I(K.ajaxSettings, t)
            },
            ajaxPrefilter: M(ye),
            ajaxTransport: M(_e),
            ajax: function(t, e) {
                function i(t, e, i, s) {
                    var l, u, v, y, x, w = e;
                    2 !== _ && (_ = 2, a && clearTimeout(a), n = void 0, o = s || "", b.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (y = L(h, b, i)), y = F(h, y, b, l), l ? (h.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (K.lastModified[r] = x), x = b.getResponseHeader("etag"), x && (K.etag[r] = x)), 204 === t || "HEAD" === h.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, u = y.data, v = y.error, l = !v)) : (v = w, !t && w || (w = "error", 0 > t && (t = 0))), b.status = t, b.statusText = (e || w) + "", l ? d.resolveWith(f, [u, w, b]) : d.rejectWith(f, [b, w, v]), b.statusCode(g), g = void 0, c && p.trigger(l ? "ajaxSuccess" : "ajaxError", [b, h, l ? u : v]), m.fireWith(f, [b, w]), c && (p.trigger("ajaxComplete", [b, h]), --K.active || K.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, r, o, s, a, l, c, u, h = K.ajaxSetup({}, e),
                    f = h.context || h,
                    p = h.context && (f.nodeType || f.jquery) ? K(f) : K.event,
                    d = K.Deferred(),
                    m = K.Callbacks("once memory"),
                    g = h.statusCode || {},
                    v = {},
                    y = {},
                    _ = 0,
                    x = "canceled",
                    b = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === _) {
                                if (!s)
                                    for (s = {}; e = pe.exec(o);) s[e[1].toLowerCase()] = e[2];
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
                            return _ || (h.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > _)
                                    for (e in t) g[e] = [g[e], t[e]];
                                else b.always(t[b.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || x;
                            return n && n.abort(e), i(0, e), this
                        }
                    };
                if (d.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, h.url = ((t || h.url || be) + "").replace(he, "").replace(ge, we[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = K.trim(h.dataType || "*").toLowerCase().match(pt) || [""], null == h.crossDomain && (l = ve.exec(h.url.toLowerCase()), h.crossDomain = !(!l || l[1] === we[1] && l[2] === we[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (we[3] || ("http:" === we[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = K.param(h.data, h.traditional)), j(ye, h, e, b), 2 === _) return b;
                c = K.event && h.global, c && 0 === K.active++ && K.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !me.test(h.type), r = h.url, h.hasContent || (h.data && (r = h.url += (ue.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = fe.test(r) ? r.replace(fe, "$1_=" + ce++) : r + (ue.test(r) ? "&" : "?") + "_=" + ce++)), h.ifModified && (K.lastModified[r] && b.setRequestHeader("If-Modified-Since", K.lastModified[r]), K.etag[r] && b.setRequestHeader("If-None-Match", K.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + xe + "; q=0.01" : "") : h.accepts["*"]);
                for (u in h.headers) b.setRequestHeader(u, h.headers[u]);
                if (h.beforeSend && (h.beforeSend.call(f, b, h) === !1 || 2 === _)) return b.abort();
                x = "abort";
                for (u in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) b[u](h[u]);
                if (n = j(_e, h, e, b)) {
                    b.readyState = 1, c && p.trigger("ajaxSend", [b, h]), h.async && h.timeout > 0 && (a = setTimeout(function() {
                        b.abort("timeout")
                    }, h.timeout));
                    try {
                        _ = 1, n.send(v, i)
                    } catch (w) {
                        if (!(2 > _)) throw w;
                        i(-1, w)
                    }
                } else i(-1, "No Transport");
                return b
            },
            getJSON: function(t, e, i) {
                return K.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return K.get(t, void 0, e, "script")
            }
        }), K.each(["get", "post"], function(t, e) {
            K[e] = function(t, i, n, r) {
                return K.isFunction(i) && (r = r || n, n = i, i = void 0), K.ajax({
                    url: t,
                    type: e,
                    dataType: r,
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
                r = function(t, e) {
                    e = K.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(t) || t.jquery && !K.isPlainObject(t)) K.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (i in t) z(i, t[i], e, r);
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
        var Ae = 0,
            Ee = {},
            De = {
                0: 200,
                1223: 204
            },
            Oe = K.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() {
            for (var t in Ee) Ee[t]()
        }), G.cors = !!Oe && "withCredentials" in Oe, G.ajax = Oe = !!Oe, K.ajaxTransport(function(t) {
            var e;
            return G.cors || Oe && !t.crossDomain ? {
                send: function(i, n) {
                    var r, o = t.xhr(),
                        s = ++Ae;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (r in t.xhrFields) o[r] = t.xhrFields[r];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (r in i) o.setRequestHeader(r, i[r]);
                    e = function(t) {
                        return function() {
                            e && (delete Ee[s], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? n(o.status, o.statusText) : n(De[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
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
                    send: function(n, r) {
                        e = K("<script>").prop({
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
        var Ne = [],
            Re = /(=)\?(?=&|$)|\?\?/;
        K.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ne.pop() || K.expando + "_" + ce++;
                return this[t] = !0, t
            }
        }), K.ajaxPrefilter("json jsonp", function(e, i, n) {
            var r, o, s, a = e.jsonp !== !1 && (Re.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Re.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Re, "$1" + r) : e.jsonp !== !1 && (e.url += (ue.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return s || K.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
                s = arguments
            }, n.always(function() {
                t[r] = o, e[r] && (e.jsonpCallback = i.jsonpCallback, Ne.push(r)), s && K.isFunction(o) && o(s[0]), s = o = void 0
            }), "script") : void 0
        }), K.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || Z;
            var n = st.exec(t),
                r = !i && [];
            return n ? [e.createElement(n[1])] : (n = K.buildFragment([t], e, r), r && r.length && K(r).remove(), K.merge([], n.childNodes))
        };
        var $e = K.fn.load;
        K.fn.load = function(t, e, i) {
            if ("string" != typeof t && $e) return $e.apply(this, arguments);
            var n, r, o, s = this,
                a = t.indexOf(" ");
            return a >= 0 && (n = K.trim(t.slice(a)), t = t.slice(0, a)), K.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && K.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, s.html(n ? K("<div>").append(K.parseHTML(t)).find(n) : t)
            }).complete(i && function(t, e) {
                s.each(i, o || [t.responseText, e, t])
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
                var n, r, o, s, a, l, c, u = K.css(t, "position"),
                    h = K(t),
                    f = {};
                "static" === u && (t.style.position = "relative"), a = h.offset(), o = K.css(t, "top"), l = K.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1, c ? (n = h.position(), s = n.top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), K.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (f.top = e.top - a.top + s), null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : h.css(f)
            }
        }, K.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    K.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = n && n.ownerDocument;
                if (o) return e = o.documentElement, K.contains(e, n) ? (typeof n.getBoundingClientRect !== Ct && (r = n.getBoundingClientRect()), i = W(o), {
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
            K.fn[e] = function(r) {
                return gt(this, function(e, r, o) {
                    var s = W(e);
                    return void 0 === o ? s ? s[i] : e[r] : void(s ? s.scrollTo(n ? t.pageXOffset : o, n ? o : t.pageYOffset) : e[r] = o)
                }, e, r, arguments.length, null)
            }
        }), K.each(["top", "left"], function(t, e) {
            K.cssHooks[e] = w(G.pixelPosition, function(t, i) {
                return i ? (i = b(t, e), qt.test(i) ? K(t).position()[e] + "px" : i) : void 0
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
                K.fn[n] = function(n, r) {
                    var o = arguments.length && (i || "boolean" != typeof n),
                        s = i || (n === !0 || r === !0 ? "margin" : "border");
                    return gt(this, function(e, i, n) {
                        var r;
                        return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? K.css(e, i, s) : K.style(e, i, n, s)
                    }, e, o ? n : void 0, o, null)
                }
            })
        }), K.fn.size = function() {
            return this.length
        }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return K
        });
        var je = t.jQuery,
            Ie = t.$;
        return K.noConflict = function(e) {
            return t.$ === K && (t.$ = Ie), e && t.jQuery === K && (t.jQuery = je), K
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
        var c = o[0],
            u = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = t(this.$indicators.children()[this.getItemIndex(o)]);
                h && h.addClass("active")
            }
            var f = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, r.addClass(a), o.addClass(a), r.one("bsTransitionEnd", function() {
                o.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(f)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(f)), s && this.cycle(), this
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
                    var c = l.index(i.target);
                    38 == i.which && c > 0 && c--, 40 == i.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
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
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                h = o[0].offsetWidth,
                f = o[0].offsetHeight;
            if (c) {
                var p = a,
                    d = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + f > d.bottom ? "top" : "top" == a && u.top - f < d.top ? "bottom" : "right" == a && u.right + h > d.width ? "left" : "left" == a && u.left - h < d.left ? "right" : a, o.removeClass(p).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, h, f);
            this.applyPlacement(m, a);
            var g = function() {
                var t = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
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
            c = n[0].offsetHeight;
        "top" == i && c != o && (e.top = e.top + o - c);
        var u = this.getViewportAdjustedDelta(i, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var h = /top|bottom/.test(i),
            f = h ? 2 * u.left - r + l : 2 * u.top - o + c,
            p = h ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(f, n[0][p], h)
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
            var c = e.left - o,
                u = e.left + o + i;
            c < s.left ? r.left = s.left - c : u > s.right && (r.left = s.left + s.width - u)
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
            c = a ? s : e;
        return null != i && i >= r ? "top" : null != n && l + c >= t - n ? "bottom" : !1
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
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
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
            for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, l = 0, c = s.length; c > l; l++) a[s[l]] = r(a[s[l]], a);
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
        var e, s, a, l, c, u = this.targetElement;
        if (!this.trackingClick) return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, s = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, o && (c = t.changedTouches[0], u = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent), a = u.tagName.toLowerCase(), "label" === a) {
            if (e = this.findControl(u)) {
                if (this.focus(u), i) return !1;
                u = e
            }
        } else if (this.needsFocus(u)) return t.timeStamp - s > 100 || n && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, t), n && "select" === a || (this.targetElement = null, t.preventDefault()), !1);
        return n && !r && (l = u.fastClickScrollParent, l && l.fastClickLastScrollTop !== l.scrollTop) ? !0 : (this.needsClick(u) || (t.preventDefault(), this.sendClick(u, t)), !1)
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
}();
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
                    c = r.prototype = i.to({}, .1, {}),
                    u = [];
                r.version = "1.14.0", c.constructor = r, c.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, c.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, c.updateTo = function(t, e) {
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
                }, c.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, r, a, l, c, h, f, p, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        g = this._totalTime,
                        v = this._cycle,
                        y = this._duration,
                        _ = this._rawPrevTime;
                    if (t >= d ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete"), 0 === y && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > _ || _ === o) && _ !== t && (i = !0, _ > o && (r = "onReverseComplete")), this._rawPrevTime = p = !e || t || _ === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === y && _ > 0 && _ !== o) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || i) && (_ >= 0 && (i = !0), this._rawPrevTime = p = !e || t || _ === t ? t : o)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = y - this._time), this._time > y ? this._time = y : 0 > this._time && (this._time = 0)), this._easeType ? (c = this._time / y, h = this._easeType, f = this._easePower, (1 === h || 3 === h && c >= .5) && (c = 1 - c), 3 === h && (c *= 2), 1 === f ? c *= c : 2 === f ? c *= c * c : 3 === f ? c *= c * c * c : 4 === f && (c *= c * c * c * c), this.ratio = 1 === h ? 1 - c : 2 === h ? c : .5 > this._time / y ? c / 2 : 1 - c / 2) : this.ratio = this._ease.getRatio(this._time / y)), m === this._time && !i && v === this._cycle) return void(g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = g, this._rawPrevTime = _, this._cycle = v, s.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / y) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== g || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u)), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || u)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || u), 0 === y && this._rawPrevTime === o && p !== o && (this._rawPrevTime = 0))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
                }, r.staggerTo = r.allTo = function(t, e, o, s, c, h, f) {
                    s = s || 0;
                    var p, d, m, g, v = o.delay || 0,
                        y = [],
                        _ = function() {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(f || this, h || u)
                        };
                    for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], 0 > s && (t = n(t), t.reverse(), s *= -1), p = t.length - 1, m = 0; p >= m; m++) {
                        d = {};
                        for (g in o) d[g] = o[g];
                        d.delay = v, m === p && c && (d.onComplete = _), y[m] = new r(t[m], e, d), v += s
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
                var h = function(t, e) {
                        for (var n = [], r = 0, o = t._first; o;) o instanceof i ? n[r++] = o : (e && (n[r++] = o), n = n.concat(h(o, e)), r = n.length), o = o._next;
                        return n
                    },
                    f = r.getAllTweens = function(e) {
                        return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var o, s, a, l = f(0 != r),
                        c = l.length,
                        u = i && n && r;
                    for (a = 0; c > a; a++) s = l[a], (u || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var o, c, u, h, f, p = s.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))
                            for (h = t.length; --h > -1;) r.killChildTweensOf(t[h], e);
                        else {
                            o = [];
                            for (u in p)
                                for (c = p[u].target.parentNode; c;) c === t && (o = o.concat(p[u].tweens)), c = c.parentNode;
                            for (f = o.length, h = 0; f > h; h++) e && o[h].totalTime(o[h].totalDuration()), o[h]._enabled(!1, !1)
                        }
                    }
                };
                var p = function(t, i, n, r) {
                    i = i !== !1, n = n !== !1, r = r !== !1;
                    for (var o, s, a = f(r), l = i && n && r, c = a.length; --c > -1;) s = a[c], (l || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && s.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    p(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    p(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || o, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, c.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, c.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, c.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
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
                    c = o.lazyRender,
                    u = [],
                    h = _gsScope._gsDefine.globals,
                    f = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    p = function(t, e, i, n) {
                        var r = t._timeline._totalTime;
                        (e || !this._forcingPlayhead) && (t._timeline.pause(t._startTime), e && e.apply(n || t._timeline, i || u), this._forcingPlayhead && t._timeline.seek(r))
                    },
                    d = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    m = n.prototype = new e;
                return n.version = "1.14.0", m.constructor = n, m.kill()._gc = m._forcingPlayhead = !1, m.to = function(t, e, n, r) {
                    var o = n.repeat && h.TweenMax || i;
                    return e ? this.add(new o(t, e, n), r) : this.set(t, n, r)
                }, m.from = function(t, e, n, r) {
                    return this.add((n.repeat && h.TweenMax || i).from(t, e, n), r)
                }, m.fromTo = function(t, e, n, r, o) {
                    var s = r.repeat && h.TweenMax || i;
                    return e ? this.add(s.fromTo(t, e, n, r), o) : this.set(t, r, o)
                }, m.staggerTo = function(t, e, r, o, a, l, c, u) {
                    var h, p = new n({
                        onComplete: l,
                        onCompleteParams: c,
                        onCompleteScope: u,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], s(t) && (t = d(t)), o = o || 0, 0 > o && (t = d(t), t.reverse(), o *= -1), h = 0; t.length > h; h++) r.startAt && (r.startAt = f(r.startAt)), p.to(t[h], e, f(r), h * o);
                    return this.add(p, a)
                }, m.staggerFrom = function(t, e, i, n, r, o, s, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, o, s, a)
                }, m.staggerFromTo = function(t, e, i, n, r, o, s, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, o, s, a, l)
                }, m.call = function(t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, m.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, o, s = new n(t),
                        a = s._timeline;
                    for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, r = a._first; r;) o = r._next, e && r instanceof i && r.target === r.vars.onComplete || s.add(r, r._startTime - r._delay), r = o;
                    return a.add(s, 0), s
                }, m.add = function(r, o, s, l) {
                    var c, u, h, f, p, d;
                    if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && a(r)) {
                            for (s = s || "normal", l = l || 0, c = o, u = r.length, h = 0; u > h; h++) a(f = r[h]) && (f = new n({
                                tweens: f
                            })), this.add(f, c), "string" != typeof f && "function" != typeof f && ("sequence" === s ? c = f._startTime + f.totalDuration() / f._timeScale : "start" === s && (f._startTime -= f.delay())), c += l;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, o);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, d = p.rawTime() > r._startTime; p._timeline;) d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, m.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && a(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, m._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, m.insert = m.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, m.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, m.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, m.addPause = function(t, e, i, n) {
                    return this.call(p, ["{self}", e, i, n], this, t)
                }, m.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, m.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, m._parseTimeOrLabel = function(e, i, n, r) {
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
                }, m.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, m.stop = function() {
                    return this.paused(!0)
                }, m.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, m.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, m.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, o, s, a, h, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        d = this._startTime,
                        m = this._timeScale,
                        g = this._paused;
                    if (t >= f ? (this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (o = !0, a = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = f + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", o = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (h = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== p && this._first || i || h) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)), this._time >= p)
                            for (n = this._first; n && (s = n._next, !this._paused || g);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                        else
                            for (n = this._last; n && (s = n._prev, !this._paused || g);)(n._active || p >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                        this._onUpdate && (e || (l.length && c(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u))), a && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (o && (l.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || u)))
                    }
                }, m._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, m.getChildren = function(t, e, n, r) {
                    r = r || -9999999999;
                    for (var o = [], s = this._first, a = 0; s;) r > s._startTime || (s instanceof i ? e !== !1 && (o[a++] = s) : (n !== !1 && (o[a++] = s), t !== !1 && (o = o.concat(s.getChildren(!0, e, n)), a = o.length))), s = s._next;
                    return o
                }, m.getTweensOf = function(t, e) {
                    var n, r, o = this._gc,
                        s = [],
                        a = 0;
                    for (o && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (s[a++] = n[r]);
                    return o && this._enabled(!1, !0), s
                }, m.recent = function() {
                    return this._recent
                }, m._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, m.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, r = this._first, o = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in o) o[n] >= i && (o[n] += t);
                    return this._uncache(!0)
                }, m._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                    return r
                }, m.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, m._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, m.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, m.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime, 0 > r._startTime && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, m.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, m.rawTime = function() {
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
                    c = new i(null, null, 1, 0),
                    u = n.prototype = new t;
                return u.constructor = n, u.kill()._gc = !1, n.version = "1.14.0", u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, u.addCallback = function(t, i, n, r) {
                    return this.add(e.delayedCall(0, t, n, r), i)
                }, u.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, u.tweenTo = function(t, i) {
                    i = i || {};
                    var n, r, s, a = {
                        ease: c,
                        overwrite: i.delay ? 2 : 1,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) a[r] = i[r];
                    return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, s = new e(this, n, a), a.onStart = function() {
                        s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || s, i.onStartParams || o)
                    }, s
                }, u.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        onCompleteScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, u.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, c, u, h, f, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._duration,
                        m = this._time,
                        g = this._totalTime,
                        v = this._startTime,
                        y = this._timeScale,
                        _ = this._rawPrevTime,
                        x = this._paused,
                        b = this._cycle;
                    if (t >= p ? (this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, u = "onComplete", 0 === this._duration && (0 === t || 0 > _ || _ === r) && _ !== t && this._first && (h = !0, _ > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && _ !== r && (_ > 0 || 0 > t && _ >= 0) && !this._locked) && (u = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, _ >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (h = !0))) : (0 === d && 0 > _ && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (f = d + this._repeatDelay, this._cycle = this._totalTime / f >> 0, 0 !== this._cycle && this._cycle === this._totalTime / f && this._cycle--, this._time = this._totalTime - this._cycle * f, this._yoyo && 0 !== (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== b && !this._locked) {
                        var w = this._yoyo && 0 !== (1 & b),
                            T = w === (this._yoyo && 0 !== (1 & this._cycle)),
                            k = this._totalTime,
                            C = this._cycle,
                            S = this._rawPrevTime,
                            P = this._time;
                        if (this._totalTime = b * d, b > this._cycle ? w = !w : this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? _ - 1e-4 : _, this._cycle = b, this._locked = !0, m = w ? 0 : d, this.render(m, e, 0 === d), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || o), T && (m = w ? d + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !x) return;
                        this._time = P, this._totalTime = k, this._cycle = C, this._rawPrevTime = S
                    }
                    if (!(this._time !== m && this._first || i || h)) return void(g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o)));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || o)), this._time >= m)
                        for (n = this._first; n && (c = n._next, !this._paused || x);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = c;
                    else
                        for (n = this._last; n && (c = n._prev, !this._paused || x);)(n._active || m >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = c;
                    this._onUpdate && (e || (a.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || o))), u && (this._locked || this._gc || (v === this._startTime || y !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (s && (a.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this.vars[u].apply(this.vars[u + "Scope"] || this, this.vars[u + "Params"] || o)))
                }, u.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, o = [],
                        s = this.getChildren(t, e, i),
                        a = 0,
                        l = s.length;
                    for (n = 0; l > n; n++) r = s[n], r.isActive() && (o[a++] = r);
                    return o
                }, u.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, u.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, u.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, u.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, u.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, u.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, u.currentLabel = function(t) {
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
                            c = (e + i) / 2,
                            u = (i + n) / 2,
                            h = (l + c) / 2,
                            f = (c + u) / 2,
                            p = (f - h) / 8;
                        return r.b = l + (t - l) / 4, o.b = h + p, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (h + f) / 2, s.b = f - p, a.b = u + (n - u) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
                    },
                    l = function(t, r, o, s, l) {
                        var c, u, h, f, p, d, m, g, v, y, _, x, b, w = t.length - 1,
                            T = 0,
                            k = t[0].a;
                        for (c = 0; w > c; c++) p = t[T], u = p.a, h = p.d, f = t[T + 1].d, l ? (_ = e[c], x = i[c], b = .25 * (x + _) * r / (s ? .5 : n[c] || .5), d = h - (h - u) * (s ? .5 * r : 0 !== _ ? b / _ : 0), m = h + (f - h) * (s ? .5 * r : 0 !== x ? b / x : 0), g = h - (d + ((m - d) * (3 * _ / (_ + x) + .5) / 4 || 0))) : (d = h - .5 * (h - u) * r, m = h + .5 * (f - h) * r, g = h - (d + m) / 2), d += g, m += g, p.c = v = d, p.b = 0 !== c ? k : k = p.a + .6 * (p.c - p.a), p.da = h - u, p.ca = v - u, p.ba = k - u, o ? (y = a(u, k, v, h), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, k = m;
                        p = t[T], p.b = k, p.c = k + .4 * (p.d - k), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = k - p.a, o && (y = a(p.a, k, p.c, p.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
                    },
                    c = function(t, n, r, s) {
                        var a, l, c, u, h, f, p = [];
                        if (s)
                            for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof(f = t[l][n]) && "=" === f.charAt(1) && (t[l][n] = s[n] + Number(f.charAt(0) + f.substr(2)));
                        if (a = t.length - 2, 0 > a) return p[0] = new o(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), p;
                        for (l = 0; a > l; l++) c = t[l][n], u = t[l + 1][n], p[l] = new o(c, 0, 0, u), r && (h = t[l + 2][n], e[l] = (e[l] || 0) + (u - c) * (u - c), i[l] = (i[l] || 0) + (h - u) * (h - u));
                        return p[l] = new o(t[l][n], 0, 0, t[l + 1][n]), p
                    },
                    u = function(t, o, a, u, h, f) {
                        var p, d, m, g, v, y, _, x, b = {},
                            w = [],
                            T = f || t[0];
                        h = "string" == typeof h ? "," + h + "," : s, null == o && (o = 1);
                        for (d in t[0]) w.push(d);
                        if (t.length > 1) {
                            for (x = t[t.length - 1], _ = !0, p = w.length; --p > -1;)
                                if (d = w[p], Math.abs(T[d] - x[d]) > .05) {
                                    _ = !1;
                                    break
                                }
                            _ && (t = t.concat(), f && t.unshift(f), t.push(t[1]), f = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, p = w.length; --p > -1;) d = w[p], r[d] = -1 !== h.indexOf("," + d + ","), b[d] = c(t, d, r[d], f);
                        for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                        if (!u) {
                            for (p = w.length; --p > -1;)
                                if (r[d])
                                    for (m = b[w[p]], y = m.length - 1, g = 0; y > g; g++) v = m[g + 1].da / i[g] + m[g].da / e[g], n[g] = (n[g] || 0) + v * v;
                            for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                        }
                        for (p = w.length, g = a ? 4 : 1; --p > -1;) d = w[p], m = b[d], l(m, o, a, u, r[d]), _ && (m.splice(0, g), m.splice(m.length - g, g));
                        return b
                    },
                    h = function(t, e, i) {
                        e = e || "soft";
                        var n, r, s, a, l, c, u, h, f, p, d, m = {},
                            g = "cubic" === e ? 3 : 2,
                            v = "soft" === e,
                            y = [];
                        if (v && i && (t = [i].concat(t)), null == t || g + 1 > t.length) throw "invalid Bezier data";
                        for (f in t[0]) y.push(f);
                        for (c = y.length; --c > -1;) {
                            for (f = y[c], m[f] = l = [], p = 0, h = t.length, u = 0; h > u; u++) n = null == i ? t[u][f] : "string" == typeof(d = t[u][f]) && "=" === d.charAt(1) ? i[f] + Number(d.charAt(0) + d.substr(2)) : Number(d), v && u > 1 && h - 1 > u && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                            for (h = p - g + 1, p = 0, u = 0; h > u; u += g) n = l[u], r = l[u + 1], s = l[u + 2], a = 2 === g ? 0 : l[u + 3], l[p++] = d = 3 === g ? new o(n, r, s, a) : new o(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                            l.length = p
                        }
                        return m
                    },
                    f = function(t, e, i) {
                        for (var n, r, o, s, a, l, c, u, h, f, p, d = 1 / i, m = t.length; --m > -1;)
                            for (f = t[m], o = f.a, s = f.d - o, a = f.c - o, l = f.b - o, n = r = 0, u = 1; i >= u; u++) c = d * u,
                                h = 1 - c, n = r - (r = (c * c * s + 3 * h * (c * a + h * l)) * c), p = m * i + u - 1, e[p] = (e[p] || 0) + n * n
                    },
                    p = function(t, e) {
                        e = e >> 0 || 6;
                        var i, n, r, o, s = [],
                            a = [],
                            l = 0,
                            c = 0,
                            u = e - 1,
                            h = [],
                            p = [];
                        for (i in t) f(t[i], s, e);
                        for (r = s.length, n = 0; r > n; n++) l += Math.sqrt(s[n]), o = n % e, p[o] = l, o === u && (c += l, o = n / e >> 0, h[o] = p, a[o] = c, l = 0, p = []);
                        return {
                            length: c,
                            lengths: a,
                            segments: h
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
                                c = {},
                                f = l[0],
                                d = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = d ? d instanceof Array ? d : [
                                ["x", "y", "rotation", d === !0 ? 0 : Number(d) || 0]
                            ] : null;
                            for (n in f) this._props.push(n);
                            for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], c[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || c[n] !== l[0][n] && (a = c);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : h(l, e.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = p(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (d = this._autoRotate)
                                for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), o = d.length; --o > -1;) {
                                    for (s = 0; 3 > s; s++) n = d[o][s], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                                    n = d[o][2], this._initialRotations[o] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, r, o, s, a, l, c, u, h, f = this._segCount,
                                p = this._func,
                                d = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (u = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
                                    for (c = f - 1; c > r && e >= (this._l2 = u[++r]););
                                    this._l1 = u[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = u[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && h.length - 1 > r) {
                                    for (c = h.length - 1; c > r && e >= (this._s2 = h[++r]););
                                    this._s1 = h[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = h[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                                }
                                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0, a = (e - i * (1 / f)) * f;
                            for (n = 1 - a, r = this._props.length; --r > -1;) o = this._props[r], s = this._beziers[o][i], l = (a * a * s.da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a, this._round[o] && (l = Math.round(l)), p[o] ? d[o](l) : d[o] = l;
                            if (this._autoRotate) {
                                var g, v, y, _, x, b, w, T = this._autoRotate;
                                for (r = T.length; --r > -1;) o = T[r][2], b = T[r][3] || 0, w = T[r][4] === !0 ? 1 : t, s = this._beziers[T[r][0]], g = this._beziers[T[r][1]], s && g && (s = s[i], g = g[i], v = s.a + (s.b - s.a) * a, _ = s.b + (s.c - s.b) * a, v += (_ - v) * a, _ += (s.c + (s.d - s.c) * a - _) * a, y = g.a + (g.b - g.a) * a, x = g.b + (g.c - g.b) * a, y += (x - y) * a, x += (g.c + (g.d - g.c) * a - x) * a, l = m ? Math.atan2(x - y, _ - v) * w + b : this._initialRotations[r], p[o] ? d[o](l) : d[o] = l)
                            }
                        }
                    }),
                    m = d.prototype;
                d.bezierThrough = u, d.cubicToQuadratic = a, d._autoCSS = !0, d.quadraticToCubic = function(t, e, i) {
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
                                var c, u, h, f = e.values,
                                    p = f.length - 1,
                                    m = [],
                                    g = {};
                                if (0 > p) return a;
                                for (c = 0; p >= c; c++) h = i(t, f[c], s, a, l, p !== c), m[c] = h.end;
                                for (u in e) g[u] = e[u];
                                return g.values = m, a = new r(t, "bezier", 0, 0, h.pt, 2), a.data = h, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (c = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != h.end.left ? [
                                    ["left", "top", "rotation", c, !1]
                                ] : null != h.end.x ? [
                                    ["x", "y", "rotation", c, !1]
                                ] : !1), g.autoRotate && (s._transform || s._enableTransforms(!1), h.autoRotate = s._target._gsTransform), l._onInitTween(h.proxy, g, s._tween), a
                            }
                        })
                    }
                }, m._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                }, m._kill = function(t) {
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
                var c, u, h, f, p, d, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /[^\d\-\.]/g,
                    _ = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/i,
                    b = /opacity:([^;]*)/i,
                    w = /alpha\(opacity *=.+?\)/i,
                    T = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    S = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    P = function(t, e) {
                        return e.toUpperCase()
                    },
                    A = /(?:Left|Right|Width)/i,
                    E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    O = /,(?=[^\)]*(?:\(|$))/gi,
                    N = Math.PI / 180,
                    R = 180 / Math.PI,
                    $ = {},
                    M = document,
                    j = (M.documentElement, M.createElement("div")),
                    I = M.createElement("img"),
                    L = s._internals = {
                        _specialProps: a
                    },
                    F = navigator.userAgent,
                    z = function() {
                        var t, e = F.indexOf("Android"),
                            i = M.createElement("div");
                        return h = -1 !== F.indexOf("Safari") && -1 === F.indexOf("Chrome") && (-1 === e || Number(F.substr(e + 8, 1)) > 3), p = h && 6 > Number(F.substr(F.indexOf("Version/") + 8, 1)), f = -1 !== F.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(F)) && (d = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
                    }(),
                    W = function(t) {
                        return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    q = function(t) {
                        window.console && console.log(t)
                    },
                    H = "",
                    B = "",
                    X = function(t, e) {
                        e = e || j;
                        var i, n, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (B = 3 === n ? "ms" : i[n], H = "-" + B.toLowerCase() + "-", B + t) : null
                    },
                    U = M.defaultView ? M.defaultView.getComputedStyle : function() {},
                    Y = s.getStyle = function(t, e, i, n, r) {
                        var o;
                        return z || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || U(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : W(t)
                    },
                    V = L.convertToPixels = function(t, i, n, r, o) {
                        if ("px" === r || !r) return n;
                        if ("auto" === r || !n) return 0;
                        var a, l, c, u = A.test(i),
                            h = t,
                            f = j.style,
                            p = 0 > n;
                        if (p && (n = -n), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (u ? t.clientWidth : t.clientHeight);
                        else {
                            if (f.cssText = "border:0 solid red;position:" + Y(t, "position") + ";line-height:0;", "%" !== r && h.appendChild) f[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (h = t.parentNode || M.body, l = h._gsCache, c = e.ticker.frame, l && u && l.time === c) return l.width * n / 100;
                                f[u ? "width" : "height"] = n + r
                            }
                            h.appendChild(j), a = parseFloat(j[u ? "offsetWidth" : "offsetHeight"]), h.removeChild(j), u && "%" === r && s.cacheWidths !== !1 && (l = h._gsCache = h._gsCache || {}, l.time = c, l.width = 100 * (a / n)), 0 !== a || o || (a = V(t, i, n, r, !0))
                        }
                        return p ? -a : a
                    },
                    Q = L.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Y(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = Y(t, "margin" + n, i);
                        return t["offset" + n] - (V(t, e, parseFloat(r), r.replace(_, "")) || 0)
                    },
                    G = function(t, e) {
                        var i, n, r = {};
                        if (e = e || U(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r[e[i].replace(C, P)] = e.getPropertyValue(e[i]);
                            else
                                for (i in e) r[i] = e[i];
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(C, P)] = e[i]);
                        return z || (r.opacity = W(t)), n = Pt(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, wt && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
                    },
                    Z = function(t, e, i, n, r) {
                        var o, s, a, l = {},
                            c = t.style;
                        for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(y, "") ? o : 0 : Q(t, s), void 0 !== c[s] && (a = new ht(c, s, c[s], a)));
                        if (n)
                            for (s in n) "className" !== s && (l[s] = n[s]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    J = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    K = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    tt = function(t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = J[e],
                            o = r.length;
                        for (i = i || U(t, null); --o > -1;) n -= parseFloat(Y(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat(Y(t, "border" + r[o] + "Width", i, !0)) || 0;
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
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ot[t] ? ot[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, o = Number(t[1]) / 100, s = Number(t[2]) / 100, i = .5 >= s ? s * (o + 1) : s + o - s * o, e = 2 * s - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = st(r + 1 / 3, e, i), t[1] = st(r, e, i), t[2] = st(r - 1 / 3, e, i), t) : (t = t.match(m) || ot.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ot.black
                    },
                    lt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (l in ot) lt += "|" + l + "\\b";
                lt = RegExp(lt + ")", "gi");
                var ct = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, o = e ? (t.match(lt) || [""])[0] : "",
                            s = t.split(o).join("").match(v) || [],
                            a = t.substr(0, t.indexOf(s[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            c = -1 !== t.indexOf(" ") ? " " : ",",
                            u = s.length,
                            h = u > 0 ? s[0].replace(m, "") : "";
                        return u ? r = e ? function(t) {
                            var e, f, p, d;
                            if ("number" == typeof t) t += h;
                            else if (n && O.test(t)) {
                                for (d = t.replace(O, "|").split("|"), p = 0; d.length > p; p++) d[p] = r(d[p]);
                                return d.join(",")
                            }
                            if (e = (t.match(lt) || [o])[0], f = t.split(e).join("").match(v) || [], p = f.length, u > p--)
                                for (; u > ++p;) f[p] = i ? f[0 | (p - 1) / 2] : s[p];
                            return a + f.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, o, f;
                            if ("number" == typeof t) t += h;
                            else if (n && O.test(t)) {
                                for (o = t.replace(O, "|").split("|"), f = 0; o.length > f; f++) o[f] = r(o[f]);
                                return o.join(",")
                            }
                            if (e = t.match(v) || [], f = e.length, u > f--)
                                for (; u > ++f;) e[f] = i ? e[0 | (f - 1) / 2] : s[f];
                            return a + e.join(c) + l
                        } : function(t) {
                            return t
                        }
                    },
                    ut = function(t) {
                        return t = t.split(","),
                            function(e, i, n, r, o, s, a) {
                                var l, c = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                                return r.parse(e, a, o, s)
                            }
                    },
                    ht = (L._setPluginRatio = function(t) {
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
                    ft = (L._parseToProxy = function(t, e, i, n, r, o) {
                        var s, a, l, c, u, h = n,
                            f = {},
                            p = {},
                            d = i._transform,
                            m = $;
                        for (i._transform = null, $ = e, n = u = i.parse(t, e, n, r), $ = m, o && (i._transform = d, h && (h._prev = null, h._prev && (h._prev._next = null))); n && n !== h;) {
                            if (1 >= n.type && (a = n.p, p[a] = n.s + n.c, f[a] = n.s, o || (c = new ht(n, "s", a, c, n.r), n.c = 0), 1 === n.type))
                                for (s = n.l; --s > 0;) l = "xn" + s, a = n.p + "_" + l, p[a] = n.data[l], f[a] = n[l], o || (c = new ht(n, l, a, c, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: f,
                            end: p,
                            firstMPT: c,
                            pt: u
                        }
                    }, L.CSSPropTween = function(t, e, n, r, s, a, l, c, u, h, f) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof ft || o.push(this.n), this.r = c, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === h ? n : h, this.e = void 0 === f ? n + r : f, s && (this._next = s, s._prev = this)
                    }),
                    pt = s.parseComplex = function(t, e, i, n, r, o, s, a, l, u) {
                        i = i || o || "", s = new ft(t, e, 0, 0, s, u ? 2 : 1, null, !1, a, i, n), n += "";
                        var h, f, p, d, v, y, _, x, b, w, k, C, S = i.split(", ").join(",").split(" "),
                            P = n.split(", ").join(",").split(" "),
                            A = S.length,
                            E = c !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (S = S.join(" ").replace(O, ", ").split(" "), P = P.join(" ").replace(O, ", ").split(" "), A = S.length), A !== P.length && (S = (o || "").split(" "), A = S.length), s.plugin = l, s.setRatio = u, h = 0; A > h; h++)
                            if (d = S[h], v = P[h], x = parseFloat(d), x || 0 === x) s.appendXtra("", x, it(v, x), v.replace(g, ""), E && -1 !== v.indexOf("px"), !0);
                            else if (r && ("#" === d.charAt(0) || ot[d] || T.test(d))) C = "," === v.charAt(v.length - 1) ? ")," : ")", d = at(d), v = at(v), b = d.length + v.length > 6, b && !z && 0 === v[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(P[h]).join("transparent")) : (z || (b = !1), s.appendXtra(b ? "rgba(" : "rgb(", d[0], v[0] - d[0], ",", !0, !0).appendXtra("", d[1], v[1] - d[1], ",", !0).appendXtra("", d[2], v[2] - d[2], b ? "," : C, !0), b && (d = 4 > d.length ? 1 : d[3], s.appendXtra("", d, (4 > v.length ? 1 : v[3]) - d, C, !1)));
                        else if (y = d.match(m)) {
                            if (_ = v.match(g), !_ || _.length !== y.length) return s;
                            for (p = 0, f = 0; y.length > f; f++) k = y[f], w = d.indexOf(k, p), s.appendXtra(d.substr(p, w - p), Number(k), it(_[f], k), "", E && "px" === d.substr(w + k.length, 2), 0 === f), p = w + k.length;
                            s["xs" + s.l] += d.substr(p)
                        } else s["xs" + s.l] += s.l ? " " + d : d;
                        if (-1 !== n.indexOf("=") && s.data) {
                            for (C = s.xs0 + s.data.s, h = 1; s.l > h; h++) C += s["xs" + h] + s.data["xn" + h];
                            s.e = C + s["xs" + h]
                        }
                        return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                    },
                    dt = 9;
                for (l = ft.prototype, l.l = l.pr = 0; --dt > 0;) l["xn" + dt] = 0, l["xs" + dt] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, n, r, o) {
                    var s = this,
                        a = s.l;
                    return s["xs" + a] += o && a ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", a > 0 ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new ft(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                        s: e + i
                    }, s.rxp = {}, s.s = e, s.c = i, s.r = r, s)) : (s["xs" + a] += e + (n || ""), s)
                };
                var mt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? X(t) || t : t, a[t] = a[this.p] = this, this.format = e.formatter || ct(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    gt = L._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r, o = t.split(","),
                            s = e.defaultValue;
                        for (i = i || [s], n = 0; o.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, r = new mt(o[n], e)
                    },
                    vt = function(t) {
                        if (!a[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            gt(t, {
                                parser: function(t, i, n, r, o, s, l) {
                                    var c = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[e];
                                    return c ? (c._cssRegister(), a[n].parse(t, i, n, r, o, s, l)) : (q("Error: " + e + " js file not loaded."), o)
                                }
                            })
                        }
                    };
                l = mt.prototype, l.parseComplex = function(t, e, i, n, r, o) {
                    var s, a, l, c, u, h, f = this.keyword;
                    if (this.multi && (O.test(i) || O.test(e) ? (a = e.replace(O, "|").split("|"), l = i.replace(O, "|").split("|")) : f && (a = [e], l = [i])), l) {
                        for (c = l.length > a.length ? l.length : a.length, s = 0; c > s; s++) e = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, f && (u = e.indexOf(f), h = i.indexOf(f), u !== h && (i = -1 === h ? l : a, i[s] += " " + f));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return pt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o)
                }, l.parse = function(t, e, i, n, o, s) {
                    return this.parseComplex(t.style, this.format(Y(t, this.p, r, !1, this.dflt)), this.format(e), o, s)
                }, s.registerSpecialProp = function(t, e, i) {
                    gt(t, {
                        parser: function(t, n, r, o, s, a) {
                            var l = new ft(t, r, 0, 0, s, 2, r, !1, i);
                            return l.plugin = a, l.setRatio = e(t, n, o._tween, r), l
                        },
                        priority: i
                    })
                };
                var yt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    _t = X("transform"),
                    xt = H + "transform",
                    bt = X("transformOrigin"),
                    wt = null !== X("perspective"),
                    Tt = L.Transform = function() {
                        this.skewY = 0
                    },
                    kt = window.SVGElement,
                    Ct = kt && (d || /Android/i.test(F) && !window.chrome),
                    St = function(t, e, i) {
                        var n = t.getBBox();
                        e = et(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * n.width : parseFloat(e[0])) + n.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * n.height : parseFloat(e[1])) + n.y
                    },
                    Pt = L.getTransform = function(t, e, i, n) {
                        if (t._gsTransform && i && !n) return t._gsTransform;
                        var o, a, l, c, u, h, f, p, d, m, g, v, y, _ = i ? t._gsTransform || new Tt : new Tt,
                            x = 0 > _.scaleX,
                            b = 2e-5,
                            w = 1e5,
                            T = 179.99,
                            k = T * N,
                            C = wt ? parseFloat(Y(t, bt, e, !1, "0 0 0").split(" ")[2]) || _.zOrigin || 0 : 0,
                            S = parseFloat(s.defaultTransformPerspective) || 0;
                        if (_t ? o = Y(t, xt, e, !0) : t.currentStyle && (o = t.currentStyle.filter.match(E), o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), _.x || 0, _.y || 0].join(",") : ""), o && "none" !== o && "matrix(1, 0, 0, 1, 0, 0)" !== o) {
                            for (a = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = a.length; --l > -1;) c = Number(a[l]), a[l] = (u = c - (c |= 0)) ? (0 | u * w + (0 > u ? -.5 : .5)) / w + c : c;
                            if (16 === a.length) {
                                var P = a[8],
                                    A = a[9],
                                    D = a[10],
                                    O = a[12],
                                    $ = a[13],
                                    M = a[14];
                                if (_.zOrigin && (M = -_.zOrigin, O = P * M - a[12], $ = A * M - a[13], M = D * M + _.zOrigin - a[14]), !i || n || null == _.rotationX) {
                                    var j, I, L, F, z, W, q, H = a[0],
                                        B = a[1],
                                        X = a[2],
                                        U = a[3],
                                        V = a[4],
                                        Q = a[5],
                                        G = a[6],
                                        Z = a[7],
                                        J = a[11],
                                        K = Math.atan2(G, D),
                                        tt = -k > K || K > k;
                                    _.rotationX = K * R, K && (F = Math.cos(-K), z = Math.sin(-K), j = V * F + P * z, I = Q * F + A * z, L = G * F + D * z, P = V * -z + P * F, A = Q * -z + A * F, D = G * -z + D * F, J = Z * -z + J * F, V = j, Q = I, G = L), K = Math.atan2(P, H), _.rotationY = K * R, K && (W = -k > K || K > k, F = Math.cos(-K), z = Math.sin(-K), j = H * F - P * z, I = B * F - A * z, L = X * F - D * z, A = B * z + A * F, D = X * z + D * F, J = U * z + J * F, H = j, B = I, X = L), K = Math.atan2(B, Q), _.rotation = K * R, K && (q = -k > K || K > k, F = Math.cos(-K), z = Math.sin(-K), H = H * F + V * z, I = B * F + Q * z, Q = B * -z + Q * F, G = X * -z + G * F, B = I), q && tt ? _.rotation = _.rotationX = 0 : q && W ? _.rotation = _.rotationY = 0 : W && tt && (_.rotationY = _.rotationX = 0), _.scaleX = (0 | Math.sqrt(H * H + B * B) * w + .5) / w, _.scaleY = (0 | Math.sqrt(Q * Q + A * A) * w + .5) / w, _.scaleZ = (0 | Math.sqrt(G * G + D * D) * w + .5) / w, _.skewX = 0, _.perspective = J ? 1 / (0 > J ? -J : J) : 0, _.x = O, _.y = $, _.z = M
                                }
                            } else if (!(wt && !n && a.length && _.x === a[4] && _.y === a[5] && (_.rotationX || _.rotationY) || void 0 !== _.x && "none" === Y(t, "display", e))) {
                                var et = a.length >= 6,
                                    it = et ? a[0] : 1,
                                    nt = a[1] || 0,
                                    rt = a[2] || 0,
                                    ot = et ? a[3] : 1;
                                _.x = a[4] || 0, _.y = a[5] || 0, h = Math.sqrt(it * it + nt * nt), f = Math.sqrt(ot * ot + rt * rt), p = it || nt ? Math.atan2(nt, it) * R : _.rotation || 0, d = rt || ot ? Math.atan2(rt, ot) * R + p : _.skewX || 0, m = h - Math.abs(_.scaleX || 0), g = f - Math.abs(_.scaleY || 0), Math.abs(d) > 90 && 270 > Math.abs(d) && (x ? (h *= -1, d += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (f *= -1, d += 0 >= d ? 180 : -180)), v = (p - _.rotation) % 180, y = (d - _.skewX) % 180, (void 0 === _.skewX || m > b || -b > m || g > b || -b > g || v > -T && T > v && !1 | v * w || y > -T && T > y && !1 | y * w) && (_.scaleX = h, _.scaleY = f, _.rotation = p, _.skewX = d), wt && (_.rotationX = _.rotationY = _.z = 0, _.perspective = S, _.scaleZ = 1)
                            }
                            _.zOrigin = C;
                            for (l in _) b > _[l] && _[l] > -b && (_[l] = 0)
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
                        return i && (t._gsTransform = _), _.svg = kt && t instanceof kt, _.svg && St(t, Y(t, bt, r, !1, "50% 50%") + "", _), _.xPercent = _.yPercent = 0, _
                    },
                    At = function(t) {
                        var e, i, n = this.data,
                            r = -n.rotation * N,
                            o = r + n.skewX * N,
                            s = 1e5,
                            a = (0 | Math.cos(r) * n.scaleX * s) / s,
                            l = (0 | Math.sin(r) * n.scaleX * s) / s,
                            c = (0 | Math.sin(o) * -n.scaleY * s) / s,
                            u = (0 | Math.cos(o) * n.scaleY * s) / s,
                            h = this.t.style,
                            f = this.t.currentStyle;
                        if (f) {
                            i = l, l = -c, c = -i, e = f.filter, h.filter = "";
                            var p, m, g = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                y = "absolute" !== f.position,
                                b = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + u,
                                w = n.x + g * n.xPercent / 100,
                                T = n.y + v * n.yPercent / 100;
                            if (null != n.ox && (p = (n.oxp ? .01 * g * n.ox : n.ox) - g / 2, m = (n.oyp ? .01 * v * n.oy : n.oy) - v / 2, w += p - (p * a + m * l), T += m - (p * c + m * u)), y ? (p = g / 2, m = v / 2, b += ", Dx=" + (p - (p * a + m * l) + w) + ", Dy=" + (m - (p * c + m * u) + T) + ")") : b += ", sizingMethod='auto expand')", h.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, b) : b + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === c && 1 === u && (y && -1 === b.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && h.removeAttribute("filter")), !y) {
                                var k, C, S, P = 8 > d ? 1 : -1;
                                for (p = n.ieOffsetX || 0, m = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + w), n.ieOffsetY = Math.round((v - ((0 > u ? -u : u) * v + (0 > c ? -c : c) * g)) / 2 + T), dt = 0; 4 > dt; dt++) C = K[dt], k = f[C], i = -1 !== k.indexOf("px") ? parseFloat(k) : V(this.t, C, parseFloat(k), k.replace(_, "")) || 0, S = i !== n[C] ? 2 > dt ? -n.ieOffsetX : -n.ieOffsetY : 2 > dt ? p - n.ieOffsetX : m - n.ieOffsetY, h[C] = (n[C] = Math.round(i - S * (0 === dt || 2 === dt ? 1 : P))) + "px"
                            }
                        }
                    },
                    Et = L.set3DTransformRatio = function(t) {
                        var e, i, n, r, o, s, a, l, c, u, h, p, d, m, g, v, y, _, x, b, w, T, k, C = this.data,
                            S = this.t.style,
                            P = C.rotation * N,
                            A = C.scaleX,
                            E = C.scaleY,
                            D = C.scaleZ,
                            O = C.x,
                            R = C.y,
                            $ = C.z,
                            M = C.perspective;
                        if (!(1 !== t && 0 !== t || "auto" !== C.force3D || C.rotationY || C.rotationX || 1 !== D || M || $)) return void Dt.call(this, t);
                        if (f) {
                            var j = 1e-4;
                            j > A && A > -j && (A = D = 2e-5), j > E && E > -j && (E = D = 2e-5), !M || C.z || C.rotationX || C.rotationY || (M = 0)
                        }
                        if (P || C.skewX) _ = Math.cos(P), x = Math.sin(P), e = _, o = x, C.skewX && (P -= C.skewX * N, _ = Math.cos(P), x = Math.sin(P), "simple" === C.skewType && (b = Math.tan(C.skewX * N), b = Math.sqrt(1 + b * b), _ *= b, x *= b)), i = -x, s = _;
                        else {
                            if (!(C.rotationY || C.rotationX || 1 !== D || M || C.svg)) return void(S[_t] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + O + "px," + R + "px," + $ + "px)" + (1 !== A || 1 !== E ? " scale(" + A + "," + E + ")" : ""));
                            e = s = 1, i = o = 0
                        }
                        h = 1, n = r = a = l = c = u = p = d = m = 0, g = M ? -1 / M : 0, v = C.zOrigin, y = 1e5, P = C.rotationY * N, P && (_ = Math.cos(P), x = Math.sin(P), c = h * -x, d = g * -x, n = e * x, a = o * x, h *= _, g *= _, e *= _, o *= _), P = C.rotationX * N, P && (_ = Math.cos(P), x = Math.sin(P), b = i * _ + n * x, w = s * _ + a * x, T = u * _ + h * x, k = m * _ + g * x, n = i * -x + n * _, a = s * -x + a * _, h = u * -x + h * _, g = m * -x + g * _, i = b, s = w, u = T, m = k), 1 !== D && (n *= D, a *= D, h *= D, g *= D), 1 !== E && (i *= E, s *= E, u *= E, m *= E), 1 !== A && (e *= A, o *= A, c *= A, d *= A), v && (p -= v, r = n * p, l = a * p, p = h * p + v), r = (b = (r += O) - (r |= 0)) ? (0 | b * y + (0 > b ? -.5 : .5)) / y + r : r, l = (b = (l += R) - (l |= 0)) ? (0 | b * y + (0 > b ? -.5 : .5)) / y + l : l, p = (b = (p += $) - (p |= 0)) ? (0 | b * y + (0 > b ? -.5 : .5)) / y + p : p, C.svg && (r += C.xOrigin - (C.xOrigin * e + C.yOrigin * i), l += C.yOrigin - (C.xOrigin * o + C.yOrigin * s)), S[_t] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | e * y) / y, (0 | o * y) / y, (0 | c * y) / y, (0 | d * y) / y, (0 | i * y) / y, (0 | s * y) / y, (0 | u * y) / y, (0 | m * y) / y, (0 | n * y) / y, (0 | a * y) / y, (0 | h * y) / y, (0 | g * y) / y, r, l, p, M ? 1 + -p / M : 1].join(",") + ")"
                    },
                    Dt = L.set2DTransformRatio = function(t) {
                        var e, i, n, r, o, s, a, l, c, u, h = this.data,
                            f = this.t,
                            p = f.style,
                            d = h.x,
                            m = h.y;
                        return !(h.rotationX || h.rotationY || h.z || h.force3D === !0 || "auto" === h.force3D && 1 !== t && 0 !== t) || h.svg && Ct || !wt ? (r = h.scaleX, o = h.scaleY, void(h.rotation || h.skewX || h.svg ? (e = h.rotation * N, i = e - h.skewX * N, n = 1e5, s = Math.cos(e) * r, a = Math.sin(e) * r, l = Math.sin(i) * -o, c = Math.cos(i) * o, h.svg && (d += h.xOrigin - (h.xOrigin * s + h.yOrigin * l), m += h.yOrigin - (h.xOrigin * a + h.yOrigin * c)), u = (0 | s * n) / n + "," + (0 | a * n) / n + "," + (0 | l * n) / n + "," + (0 | c * n) / n + "," + d + "," + m + ")", h.svg && Ct ? f.setAttribute("transform", "matrix(" + u) : p[_t] = (h.xPercent || h.yPercent ? "translate(" + h.xPercent + "%," + h.yPercent + "%) matrix(" : "matrix(") + u) : p[_t] = (h.xPercent || h.yPercent ? "translate(" + h.xPercent + "%," + h.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + o + "," + d + "," + m + ")")) : (this.setRatio = Et, void Et.call(this, t))
                    };
                gt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                    parser: function(t, e, i, n, o, a, l) {
                        if (n._transform) return o;
                        var c, u, h, f, p, d, m, g = n._transform = Pt(t, r, !0, l.parseTransform),
                            v = t.style,
                            y = 1e-6,
                            _ = yt.length,
                            x = l,
                            b = {};
                        if ("string" == typeof x.transform && _t) h = j.style, h[_t] = x.transform, h.display = "block", h.position = "absolute", M.body.appendChild(j), c = Pt(j, null, !1), M.body.removeChild(j);
                        else if ("object" == typeof x) {
                            if (c = {
                                    scaleX: nt(null != x.scaleX ? x.scaleX : x.scale, g.scaleX),
                                    scaleY: nt(null != x.scaleY ? x.scaleY : x.scale, g.scaleY),
                                    scaleZ: nt(x.scaleZ, g.scaleZ),
                                    x: nt(x.x, g.x),
                                    y: nt(x.y, g.y),
                                    z: nt(x.z, g.z),
                                    xPercent: nt(x.xPercent, g.xPercent),
                                    yPercent: nt(x.yPercent, g.yPercent),
                                    perspective: nt(x.transformPerspective, g.perspective)
                                }, m = x.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (h in m) x[h] = m[h];
                                else x.rotation = m;
                                "string" == typeof x.x && -1 !== x.x.indexOf("%") && (c.x = 0, c.xPercent = nt(x.x, g.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (c.y = 0, c.yPercent = nt(x.y, g.yPercent)), c.rotation = rt("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : g.rotation, g.rotation, "rotation", b), wt && (c.rotationX = rt("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : g.rotationX || 0, g.rotationX, "rotationX", b), c.rotationY = rt("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : g.rotationY || 0, g.rotationY, "rotationY", b)), c.skewX = null == x.skewX ? g.skewX : rt(x.skewX, g.skewX), c.skewY = null == x.skewY ? g.skewY : rt(x.skewY, g.skewY), (u = c.skewY - g.skewY) && (c.skewX += u, c.rotation += u)
                        }
                        for (wt && null != x.force3D && (g.force3D = x.force3D, d = !0), g.skewType = x.skewType || g.skewType || s.defaultSkewType, p = g.force3D || g.z || g.rotationX || g.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, p || null == x.scale || (c.scaleZ = 1); --_ > -1;) i = yt[_], f = c[i] - g[i], (f > y || -y > f || null != x[i] || null != $[i]) && (d = !0, o = new ft(g, i, g[i], f, o), i in b && (o.e = b[i]), o.xs0 = 0, o.plugin = a, n._overwriteProps.push(o.n));
                        return f = x.transformOrigin, f && g.svg ? (St(t, f, c), o = new ft(g, "xOrigin", g.xOrigin, c.xOrigin - g.xOrigin, o, -1, "transformOrigin"), o.b = g.xOrigin, o.e = o.xs0 = c.xOrigin, o = new ft(g, "yOrigin", g.yOrigin, c.yOrigin - g.yOrigin, o, -1, "transformOrigin"), o.b = g.yOrigin, o.e = o.xs0 = c.yOrigin, Nt(v, bt)) : (f || wt && p && g.zOrigin) && (_t ? (d = !0, i = bt, f = (f || Y(t, i, r, !1, "50% 50%")) + "", o = new ft(v, i, 0, 0, o, -1, "transformOrigin"), o.b = v[i], o.plugin = a, wt ? (h = g.zOrigin, f = f.split(" "), g.zOrigin = (f.length > 2 && (0 === h || "0px" !== f[2]) ? parseFloat(f[2]) : h) || 0, o.xs0 = o.e = f[0] + " " + (f[1] || "50%") + " 0px", o = new ft(g, "zOrigin", 0, 0, o, -1, o.n), o.b = h, o.xs0 = o.e = g.zOrigin) : o.xs0 = o.e = f) : et(f + "", g)), d && (n._transformType = g.svg && Ct || !p && 3 !== this._transformType ? 2 : 3), o
                    },
                    prefix: !0
                }), gt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), gt("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, o, s) {
                        e = this.format(e);
                        var a, l, c, u, h, f, p, d, m, g, v, y, _, x, b, w, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            k = t.style;
                        for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = X(T[l])), h = u = Y(t, T[l], r, !1, "0px"), -1 !== h.indexOf(" ") && (u = h.split(" "), h = u[0], u = u[1]), f = c = a[l], p = parseFloat(h), y = h.substr((p + "").length), _ = "=" === f.charAt(1), _ ? (d = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), d *= parseFloat(f), v = f.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(f), v = f.substr((d + "").length)), "" === v && (v = n[i] || y), v !== y && (x = V(t, "borderLeft", p, y), b = V(t, "borderTop", p, y), "%" === v ? (h = 100 * (x / m) + "%", u = 100 * (b / g) + "%") : "em" === v ? (w = V(t, "borderLeft", 1, "em"), h = x / w + "em", u = b / w + "em") : (h = x + "px", u = b + "px"), _ && (f = parseFloat(h) + d + v, c = parseFloat(u) + d + v)), s = pt(k, T[l], h + " " + u, f + " " + c, !1, "0px", s);
                        return s
                    },
                    prefix: !0,
                    formatter: ct("0px 0px 0px 0px", !1, !0)
                }), gt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, o, s) {
                        var a, l, c, u, h, f, p = "background-position",
                            m = r || U(t, null),
                            g = this.format((m ? d ? m.getPropertyValue(p + "-x") + " " + m.getPropertyValue(p + "-y") : m.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (f = Y(t, "backgroundImage").replace(S, ""), f && "none" !== f)) {
                            for (a = g.split(" "), l = v.split(" "), I.setAttribute("src", f), c = 2; --c > -1;) g = a[c], u = -1 !== g.indexOf("%"), u !== (-1 !== l[c].indexOf("%")) && (h = 0 === c ? t.offsetWidth - I.width : t.offsetHeight - I.height, a[c] = u ? parseFloat(g) / 100 * h + "px" : 100 * (parseFloat(g) / h) + "%");
                            g = a.join(" ")
                        }
                        return this.parseComplex(t.style, g, v, o, s)
                    },
                    formatter: et
                }), gt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: et
                }), gt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), gt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), gt("transformStyle", {
                    prefix: !0
                }), gt("backfaceVisibility", {
                    prefix: !0
                }), gt("userSelect", {
                    prefix: !0
                }), gt("margin", {
                    parser: ut("marginTop,marginRight,marginBottom,marginLeft")
                }), gt("padding", {
                    parser: ut("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), gt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, o, s) {
                        var a, l, c;
                        return 9 > d ? (l = t.currentStyle, c = 8 > d ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", e = this.format(e).split(",").join(c)) : (a = this.format(Y(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
                    }
                }), gt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), gt("autoRound,strictUnits", {
                    parser: function(t, e, i, n, r) {
                        return r
                    }
                }), gt("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, o, s) {
                        return this.parseComplex(t.style, this.format(Y(t, "borderTopWidth", r, !1, "0px") + " " + Y(t, "borderTopStyle", r, !1, "solid") + " " + Y(t, "borderTopColor", r, !1, "#000")), this.format(e), o, s)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(lt) || ["#000"])[0]
                    }
                }), gt("borderWidth", {
                    parser: ut("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), gt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, r) {
                        var o = t.style,
                            s = "cssFloat" in o ? "cssFloat" : "styleFloat";
                        return new ft(o, s, 0, 0, r, -1, i, !1, 0, o[s], e)
                    }
                });
                var Ot = function(t) {
                    var e, i = this.t,
                        n = i.filter || Y(this.data, "filter") || "",
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Y(this.data, "filter")) : (i.filter = n.replace(w, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(x, "opacity=" + r))
                };
                gt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, o, s) {
                        var a = parseFloat(Y(t, "opacity", r, !1, "1")),
                            l = t.style,
                            c = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), c && 1 === a && "hidden" === Y(t, "visibility", r) && 0 !== e && (a = 0), z ? o = new ft(l, "opacity", a, e - a, o) : (o = new ft(l, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = c ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = Ot), c && (o = new ft(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit",
                            n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
                    }
                });
                var Nt = function(t, e) {
                        e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Rt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Nt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                gt("className", {
                    parser: function(t, e, n, o, s, a, l) {
                        var c, u, h, f, p, d = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (s = o._classNamePT = new ft(t, n, 0, 0, s, 2), s.setRatio = Rt, s.pr = -11, i = !0, s.b = d, u = G(t, r), h = t._gsClassPT) {
                            for (f = {}, p = h.data; p;) f[p.p] = 1, p = p._next;
                            h.setRatio(1)
                        }
                        return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : d.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), o._tween._duration && (t.setAttribute("class", s.e), c = Z(t, u, G(t), l, f), t.setAttribute("class", d), s.data = c.firstMPT, t.style.cssText = m, s = s.xfirst = o.parse(t, c.difs, s, a)), s
                    }
                });
                var $t = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, o = this.t.style,
                            s = a.transform.parse;
                        if ("all" === this.e) o.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], a[i] && (a[i].parse === s ? r = !0 : i = "transformOrigin" === i ? bt : a[i].p), Nt(o, i);
                        r && (Nt(o, _t), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (gt("clearProps", {
                        parser: function(t, e, n, r, o) {
                            return o = new ft(t, n, 0, 0, o, 2), o.setRatio = $t, o.e = e, o.pr = -10, o.data = r._tween, i = !0, o
                        }
                    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), dt = l.length; dt--;) vt(l[dt]);
                l = s.prototype, l._firstPT = null, l._onInitTween = function(t, e, a) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = a, this._vars = e, c = e.autoRound, i = !1, n = e.suffixMap || s.suffixMap, r = U(t, ""), o = this._overwriteProps;
                    var l, f, d, m, g, v, y, _, x, w = t.style;
                    if (u && "" === w.zIndex && (l = Y(t, "zIndex", r), ("auto" === l || "" === l) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (m = w.cssText, l = G(t, r), w.cssText = m + ";" + e, l = Z(t, l, G(t)).difs, !z && b.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, w.cssText = m), this._firstPT = f = this.parse(t, e, null), this._transformType) {
                        for (x = 3 === this._transformType, _t ? h && (u = !0, "" === w.zIndex && (y = Y(t, "zIndex", r), ("auto" === y || "" === y) && this._addLazySet(w, "zIndex", 0)), p && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : w.zoom = 1, d = f; d && d._next;) d = d._next;
                        _ = new ft(t, "transform", 0, 0, null, 2), this._linkCSSP(_, null, d), _.setRatio = x && wt ? Et : _t ? Dt : At, _.data = this._transform || Pt(t, r, !0), o.pop()
                    }
                    if (i) {
                        for (; f;) {
                            for (v = f._next, d = m; d && d.pr > f.pr;) d = d._next;
                            (f._prev = d ? d._prev : g) ? f._prev._next = f: m = f, (f._next = d) ? d._prev = f : g = f, f = v
                        }
                        this._firstPT = m
                    }
                    return !0
                }, l.parse = function(t, e, i, o) {
                    var s, l, u, h, f, p, d, m, g, v, y = t.style;
                    for (s in e) p = e[s], l = a[s], l ? i = l.parse(t, p, s, this, i, o, e) : (f = Y(t, s, r) + "", g = "string" == typeof p, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || g && T.test(p) ? (g || (p = at(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = pt(y, s, f, p, !0, "transparent", i, 0, o)) : !g || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (u = parseFloat(f), d = u || 0 === u ? f.substr((u + "").length) : "", ("" === f || "auto" === f) && ("width" === s || "height" === s ? (u = tt(t, s, r), d = "px") : "left" === s || "top" === s ? (u = Q(t, s, r), d = "px") : (u = "opacity" !== s ? 0 : 1, d = "")), v = g && "=" === p.charAt(1), v ? (h = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), h *= parseFloat(p), m = p.replace(_, "")) : (h = parseFloat(p), m = g ? p.substr((h + "").length) || "" : ""), "" === m && (m = s in n ? n[s] : d), p = h || 0 === h ? (v ? h + u : h) + m : e[s], d !== m && "" !== m && (h || 0 === h) && u && (u = V(t, s, u, d), "%" === m ? (u /= V(t, s, 100, "%") / 100, e.strictUnits !== !0 && (f = u + "%")) : "em" === m ? u /= V(t, s, 1, "em") : "px" !== m && (h = V(t, s, h, m), m = "px"), v && (h || 0 === h) && (p = h + u + m)), v && (h += u), !u && 0 !== u || !h && 0 !== h ? void 0 !== y[s] && (p || "NaN" != p + "" && null != p) ? (i = new ft(y, s, h || u || 0, 0, i, -1, s, !1, 0, f, p), i.xs0 = "none" !== p || "display" !== s && -1 === s.indexOf("Style") ? p : f) : q("invalid " + s + " tween value: " + e[s]) : (i = new ft(y, s, u, h - u, i, 0, s, c !== !1 && ("px" === m || "zIndex" === s), 0, f, p), i.xs0 = m)) : i = pt(y, s, f, p, !0, null, i, 0, o)), o && i && !i.plugin && (i.plugin = o);
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
                    var n = this._firstPT = new ft(t, e, 0, 0, this._firstPT, 2);
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
                var jt = function(t, e, i) {
                    var n, r, o, s;
                    if (t.slice)
                        for (r = t.length; --r > -1;) jt(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) o = n[r], s = o.type, o.style && (e.push(G(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || jt(o, e, i)
                };
                return s.cascadeTo = function(t, i, n) {
                    var r, o, s, a = e.to(t, i, n),
                        l = [a],
                        c = [],
                        u = [],
                        h = [],
                        f = e._internals.reservedProps;
                    for (t = a._targets || a.target, jt(t, c, h), a.render(i, !0), jt(t, u), a.render(0, !0), a._enabled(!0), r = h.length; --r > -1;)
                        if (o = Z(h[r], c[r], u[r]), o.firstMPT) {
                            o = o.difs;
                            for (s in n) f[s] && (o[s] = n[s]);
                            l.push(e.to(h[r], i, o))
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
                        c = 1e-6;
                    for (i in e) "useRadians" !== i && (a = (e[i] + "").split("_"), n = a[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), o = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, s = o - r, a.length && (n = a.join("_"), -1 !== n.indexOf("short") && (s %= l, s !== s % (l / 2) && (s = 0 > s ? s + l : s - l)), -1 !== n.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * l) % l - (0 | s / l) * l : -1 !== n.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * l) % l - (0 | s / l) * l)), (s > c || -c > s) && (this._addTween(t, i, r, r + s, i), this._overwriteProps.push(i)));
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
                    c = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    u = t.register || function() {},
                    h = function(t, e, i, n) {
                        var r = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return u(r, t), r
                    },
                    f = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    p = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    d = h("Back", p("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), p("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), p("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    g = m.prototype = new t;
                return g.constructor = m, g.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, g.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, n, r, o, s, a, l = e.taper || "none", c = [], u = 0, h = 0 | (e.points || 20), p = h, d = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = d ? Math.random() : 1 / h * p, n = g ? g.getRatio(i) : i, "none" === l ? r = v : "out" === l ? (o = 1 - i, r = o * o * v) : "in" === l ? r = i * i * v : .5 > i ? (o = 2 * i, r = .5 * o * o * v) : (o = 2 * (1 - i), r = .5 * o * o * v), d ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), c[u++] = {
                        x: i,
                        y: n
                    };
                    for (c.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new f(1, 1, null), p = h; --p > -1;) s = c[p], a = new f(s.x, s.y, a);
                    this._prev = new f(0, 0, 0 !== a.t ? a : a.next)
                }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function(t) {
                    return new i(t)
                }, i.ease = new i, h("Bounce", c("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), c("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), c("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), h("Circ", c("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), c("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), c("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t || 1, this._p2 = e || n, this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        o = r.prototype = new t;
                    return o.constructor = r, o.getRatio = i, o.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, h("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * s / this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2))
                }, .3), n("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * s / this._p2) + 1
                }, .45)), h("Expo", c("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), c("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), c("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), h("Sine", c("SineOut", function(t) {
                    return Math.sin(t * a)
                }), c("SineIn", function(t) {
                    return -Math.cos(t * a) + 1
                }), c("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), u(r.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), d
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
                c = l("com.greensock"),
                u = 1e-10,
                h = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                f = function() {},
                p = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                d = {},
                m = function(n, r, o, s) {
                    this.sc = d[n] ? d[n].sc : [], d[n] = this, this.gsClass = null, this.func = o;
                    var a = [];
                    this.check = function(c) {
                        for (var u, h, f, p, g = r.length, v = g; --g > -1;)(u = d[r[g]] || new m(r[g], [])).gsClass ? (a[g] = u.gsClass, v--) : c && u.sc.push(this);
                        if (0 === v && o)
                            for (h = ("com.greensock." + n).split("."), f = h.pop(), p = l(h.join("."))[f] = this.gsClass = o.apply(o, a), s && (i[f] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return p
                                }) : n === e && "undefined" != typeof module && module.exports && (module.exports = p)), g = 0; this.sc.length > g; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                g = t._gsDefine = function(t, e, i, n) {
                    return new m(t, e, i, n)
                },
                v = c._class = function(t, e, i) {
                    return e = e || function() {}, g(t, [], function() {
                        return e
                    }, i), e
                };
            g.globals = i;
            var y = [0, 0, 1, 1],
                _ = [],
                x = v("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? y.concat(e) : y
                }, !0),
                b = x.map = {},
                w = x.register = function(t, e, i, n) {
                    for (var r, o, s, a, l = e.split(","), u = l.length, h = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                        for (o = l[u], r = n ? v("easing." + o, null, !0) : c.easing[o] || {}, s = h.length; --s > -1;) a = h[s], b[o + "." + a] = b[a + o] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for (o = x.prototype, o._calcEnd = !1, o.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) o = n[r] + ",Power" + r, w(new x(null, null, 1, r), o, "easeOut", !0), w(new x(null, null, 2, r), o, "easeIn" + (0 === r ? ",easeNone" : "")), w(new x(null, null, 3, r), o, "easeInOut");
            b.linear = c.easing.Linear.easeIn, b.swing = c.easing.Quad.easeInOut;
            var T = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            o = T.prototype, o.addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var o, l, c = this._listeners[t],
                    u = 0;
                for (null == c && (this._listeners[t] = c = []), l = c.length; --l > -1;) o = c[l], o.c === e && o.s === i ? c.splice(l, 1) : 0 === u && r > o.pr && (u = l + 1);
                c.splice(u, 0, {
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
                var i, n, r, o, l, c = this,
                    h = S(),
                    p = e !== !1 && k,
                    d = 500,
                    m = 33,
                    g = function(t) {
                        var e, s, a = S() - P;
                        a > d && (h += a - m), P += a, c.time = (P - h) / 1e3, e = c.time - l, (!i || e > 0 || t === !0) && (c.frame++, l += e + (e >= o ? .004 : o - e), s = !0), t !== !0 && (r = n(g)), s && c.dispatchEvent("tick")
                    };
                T.call(c), c.time = c.frame = 0, c.tick = function() {
                    g(!0)
                }, c.lagSmoothing = function(t, e) {
                    d = t || 1 / u, m = Math.min(e, d, 0)
                }, c.sleep = function() {
                    null != r && (p && C ? C(r) : clearTimeout(r), n = f, r = null, c === s && (a = !1))
                }, c.wake = function() {
                    null !== r ? c.sleep() : c.frame > 10 && (P = S() - d + 5), n = 0 === i ? f : p && k ? k : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - c.time) + 1)
                    }, c === s && (a = !0), g(2)
                }, c.fps = function(t) {
                    return arguments.length ? (i = t, o = 1 / (i || 60), l = this.time + o, void c.wake()) : i
                }, c.useRAF = function(t) {
                    return arguments.length ? (c.sleep(), p = t, void c.fps(i)) : p
                }, c.fps(t), setTimeout(function() {
                    p && (!r || 5 > c.frame) && c.useRAF(!1)
                }, 1500)
            }), o = c.Ticker.prototype = new c.events.EventDispatcher, o.constructor = c.Ticker;
            var A = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, H) {
                    a || s.wake();
                    var i = this.vars.useFrames ? q : H;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            s = A.ticker = new c.Ticker, o = A.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
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
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
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
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), $.length && B())
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
                if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
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
            var D = v("core.SimpleTimeline", function(t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            o = D.prototype = new A, o.constructor = D, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e) {
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
            var O = v("TweenLite", function(e, i, n) {
                    if (A.call(this, i, n), this.render = O.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : O.selector(e) || e;
                    var r, o, s, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? W[O.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (a || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                        for (this._targets = s = h(e), this._propLookup = [], this._siblings = [], r = 0; s.length > r; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(h(o))) : (this._siblings[r] = X(o, this, !1), 1 === l && this._siblings[r].length > 1 && Y(o, this, null, 1, this._siblings[r])) : (o = s[r--] = O.selector(o), "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = X(e, this, !1), 1 === l && this._siblings.length > 1 && Y(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(-this._delay))
                }, !0),
                N = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                R = function(t, e) {
                    var i, n = {};
                    for (i in t) z[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!I[i] || I[i] && I[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            o = O.prototype = new A, o.constructor = O, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, O.version = "1.14.0", O.defaultEase = o._ease = new x(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = s, O.autoSleep = !0, O.lagSmoothing = function(t, e) {
                s.lagSmoothing(t, e)
            }, O.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (O.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var $ = [],
                M = {},
                j = O._internals = {
                    isArray: p,
                    isSelector: N,
                    lazyTweens: $
                },
                I = O._plugins = {},
                L = j.tweenLookup = {},
                F = 0,
                z = j.reservedProps = {
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
                q = A._rootFramesTimeline = new D,
                H = A._rootTimeline = new D,
                B = j.lazyRender = function() {
                    var t, e = $.length;
                    for (M = {}; --e > -1;) t = $[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    $.length = 0
                };
            H._startTime = s.time, q._startTime = s.frame, H._active = q._active = !0, setTimeout(B, 1), A._updateRoot = O.render = function() {
                var t, e, i;
                if ($.length && B(), H.render((s.time - H._startTime) * H._timeScale, !1, !1), q.render((s.frame - q._startTime) * q._timeScale, !1, !1), $.length && B(), !(s.frame % 120)) {
                    for (i in L) {
                        for (e = L[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete L[i]
                    }
                    if (i = H._first, (!i || i._paused) && O.autoSleep && !q._first && 1 === s._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || s.sleep()
                    }
                }
            }, s.addEventListener("tick", A._updateRoot);
            var X = function(t, e, i) {
                    var n, r, o = t._gsTweenID;
                    if (L[o || (t._gsTweenID = o = "t" + F++)] || (L[o] = {
                            target: t,
                            tweens: []
                        }), e && (n = L[o].tweens, n[r = n.length] = e, i))
                        for (; --r > -1;) n[r] === e && n.splice(r, 1);
                    return L[o].tweens
                },
                U = function(t, e, i, n) {
                    var r = t.vars.onOverwrite;
                    r && r(t, e, i, n), r = O.onOverwrite, r && r(t, e, i, n)
                },
                Y = function(t, e, i, n, r) {
                    var o, s, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, o = 0; l > o; o++)
                            if ((a = r[o]) !== e) a._gc || (a._enabled(!1, !1) && (s = !0), U(a, e));
                            else if (5 === n) break;
                        return s
                    }
                    var c, h = e._startTime + u,
                        f = [],
                        p = 0,
                        d = 0 === e._duration;
                    for (o = r.length; --o > -1;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || V(e, 0, d), 0 === V(a, c, d) && (f[p++] = a)) : h >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > h && ((d || !a._initted) && 2e-10 >= h - a._startTime || (f[p++] = a)));
                    for (o = p; --o > -1;) a = f[o], 2 === n && a._kill(i, t, e) && (s = !0), (2 !== n || !a._firstPT && a._initted) && (a._enabled(!1, !1) && (s = !0), 2 !== n && U(a, e));
                    return s
                },
                V = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) {
                        if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return o /= r, o > e ? o - e : i && o === e || !t._initted && 2 * u > o - e ? u : (o += t.totalDuration() / t._timeScale / r) > e + u ? 0 : o - e - u
                };
            o._init = function() {
                var t, e, i, n, r, o = this.vars,
                    s = this._overwrittenProps,
                    a = this._duration,
                    l = !!o.immediateRender,
                    c = o.ease;
                if (o.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in o.startAt) r[n] = o.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && o.lazy !== !1, r.startAt = r.delay = null, this._startAt = O.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (o.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in o) z[n] && "autoCSS" !== n || (i[n] = o[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && o.lazy !== !1, i.immediateRender = l, this._startAt = O.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = c = c ? c instanceof x ? c : "function" == typeof c ? new x(c, o.easeParams) : b[c] || O.defaultEase : O.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, s);
                if (e && O._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, o._initProps = function(e, i, n, r) {
                var o, s, a, l, c, u;
                if (null == e) return !1;
                M[e._gsTweenID] && B(), this.vars.css || e.style && e !== t && e.nodeType && I.css && this.vars.autoCSS !== !1 && R(this.vars, e);
                for (o in this.vars) {
                    if (u = this.vars[o], z[o]) u && (u instanceof Array || u.push && p(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[o] = u = this._swapSelfInParams(u, this));
                    else if (I[o] && (l = new I[o])._onInitTween(e, this.vars[o], this)) {
                        for (this._firstPT = c = {
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
                    } else this._firstPT = i[o] = c = {
                        _next: this._firstPT,
                        t: e,
                        p: o,
                        f: "function" == typeof e[o],
                        n: o,
                        pg: !1,
                        pr: 0
                    }, c.s = c.f ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(e[o]), c.c = "string" == typeof u && "=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2)) : Number(u) - c.s || 0;
                    c && c._next && (c._next._prev = c)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && Y(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (M[e._gsTweenID] = !0), a)
            }, o.render = function(t, e, i) {
                var n, r, o, s, a = this._time,
                    l = this._duration,
                    c = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > c || c === u) && c !== t && (i = !0, c > u && (r = "onReverseComplete")), this._rawPrevTime = s = !e || t || c === t ? t : u);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && c > 0 && c !== u) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1,
                    0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (i = !0), this._rawPrevTime = s = !e || t || c === t ? t : u)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var h = t / l,
                        f = this._easeType,
                        p = this._easePower;
                    (1 === f || 3 === f && h >= .5) && (h = 1 - h), 3 === f && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), this.ratio = 1 === f ? 1 - h : 2 === f ? h : .5 > t / l ? h / 2 : 1 - h / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = c, $.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _), 0 === l && this._rawPrevTime === u && s !== u && (this._rawPrevTime = 0))
                }
            }, o._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
                var n, r, o, s, a, l, c, u, h;
                if ((p(e) || N(e)) && "number" != typeof e[0])
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
                        c = t || a, u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill);
                        for (o in c)(s = a[o]) && (h || (h = []), h.push(o), s.pg && s.t._kill(c) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), u && (r[o] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1), h && i && U(this, i, e, h)
                    }
                }
                return l
            }, o.invalidate = function() {
                return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, this.render(-this._delay)), this
            }, o._enabled = function(t, e) {
                if (a || s.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = X(n[i], this, !0);
                    else this._siblings = X(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, O.to = function(t, e, i) {
                return new O(t, e, i)
            }, O.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new O(t, e, i)
            }, O.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new O(t, e, n)
            }, O.delayedCall = function(t, e, i, n, r) {
                return new O(e, 0, {
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
            }, O.set = function(t, e) {
                return new O(t, 0, e)
            }, O.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : O.selector(t) || t;
                var i, n, r, o;
                if ((p(t) || N(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(O.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
                } else
                    for (n = X(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, O.killTweensOf = O.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = O.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
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
                }, O._onPluginEvent = function(t, e) {
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
                    for (var e = t.length; --e > -1;) t[e].API === Q.API && (I[(new t[e])._propName] = t[e]);
                    return !0
                }, g.plugin = function(t) {
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
            var r, o, s, a, l, c, u, h, f, p, d, m, g, v, y, _;
            return r = i(n), h = t.call(n, "ontouchstart") >= 0, a = {
                horizontal: {},
                vertical: {}
            }, l = 1, u = {}, c = "waypoints-context-id", d = "resize.waypoints", m = "scroll.waypoints", g = 1, v = "waypoints-waypoint-ids", y = "waypoint", _ = "waypoints", o = function() {
                function t(t) {
                    var e = this;
                    this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
                        x: t.scrollLeft(),
                        y: t.scrollTop()
                    }, this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    }, t.data(c, this.id), u[this.id] = this, t.bind(m, function() {
                        var t;
                        return e.didScroll || h ? void 0 : (e.didScroll = !0, t = function() {
                            return e.doScroll(), e.didScroll = !1
                        }, n.setTimeout(t, i[_].settings.scrollThrottle))
                    }), t.bind(d, function() {
                        var t;
                        return e.didResize ? void 0 : (e.didResize = !0, t = function() {
                            return i[_]("refresh"), e.didResize = !1
                        }, n.setTimeout(t, i[_].settings.resizeThrottle))
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
                    }, !h || t.vertical.oldScroll && t.vertical.newScroll || i[_]("refresh"), i.each(t, function(t, n) {
                        var r, o, s;
                        return s = [], o = n.newScroll > n.oldScroll, r = o ? n.forward : n.backward, i.each(e.waypoints[t], function(t, e) {
                            var i, r;
                            return n.oldScroll < (i = e.offset) && i <= n.newScroll ? s.push(e) : n.newScroll < (r = e.offset) && r <= n.oldScroll ? s.push(e) : void 0
                        }), s.sort(function(t, e) {
                            return t.offset - e.offset
                        }), o || s.reverse(), i.each(s, function(t, e) {
                            return e.options.continuous || t === s.length - 1 ? e.trigger([r]) : void 0
                        })
                    }), this.oldScroll = {
                        x: t.horizontal.newScroll,
                        y: t.vertical.newScroll
                    }
                }, t.prototype.refresh = function() {
                    var t, e, n, r = this;
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
                            contextDimension: n ? i[_]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }, i.each(t, function(t, e) {
                        return i.each(r.waypoints[t], function(t, n) {
                            var r, o, s, a, l;
                            return r = n.options.offset, s = n.offset, o = i.isWindow(n.element) ? 0 : n.$element.offset()[e.offsetProp], i.isFunction(r) ? r = r.apply(n.element) : "string" == typeof r && (r = parseFloat(r), n.options.offset.indexOf("%") > -1 && (r = Math.ceil(e.contextDimension * r / 100))), n.offset = o - e.contextOffset + e.contextScroll - r, n.options.onlyOnScroll && null != s || !n.enabled ? void 0 : null !== s && s < (a = e.oldScroll) && a <= n.offset ? n.trigger([e.backward]) : null !== s && s > (l = e.oldScroll) && l >= n.offset ? n.trigger([e.forward]) : null === s && e.oldScroll >= n.offset ? n.trigger([e.forward]) : void 0
                        })
                    })
                }, t.prototype.checkEmpty = function() {
                    return i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([d, m].join(" ")), delete u[this.id]) : void 0
                }, t
            }(), s = function() {
                function t(t, e, n) {
                    var r, o;
                    n = i.extend({}, i.fn[y].defaults, n), "bottom-in-view" === n.offset && (n.offset = function() {
                        var t;
                        return t = i[_]("viewportHeight"), i.isWindow(e.element) || (t = e.$element.height()), t - i(this).outerHeight()
                    }), this.$element = t, this.element = t[0], this.axis = n.horizontal ? "horizontal" : "vertical", this.callback = n.handler, this.context = e, this.enabled = n.enabled, this.id = "waypoints" + g++, this.offset = null, this.options = n, e.waypoints[this.axis][this.id] = this, a[this.axis][this.id] = this, r = null != (o = t.data(v)) ? o : [], r.push(this.id), t.data(v, r)
                }
                return t.prototype.trigger = function(t) {
                    return this.enabled ? (null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0) : void 0
                }, t.prototype.disable = function() {
                    return this.enabled = !1
                }, t.prototype.enable = function() {
                    return this.context.refresh(), this.enabled = !0
                }, t.prototype.destroy = function() {
                    return delete a[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
                }, t.getWaypointsByElement = function(t) {
                    var e, n;
                    return (n = i(t).data(v)) ? (e = i.extend({}, a.horizontal, a.vertical), i.map(n, function(t) {
                        return e[t]
                    })) : []
                }, t
            }(), p = {
                init: function(t, e) {
                    var n;
                    return null == e && (e = {}), null == (n = e.handler) && (e.handler = t), this.each(function() {
                        var t, n, r, a;
                        return t = i(this), r = null != (a = e.context) ? a : i.fn[y].defaults.context, i.isWindow(r) || (r = t.closest(r)), r = i(r), n = u[r.data(c)], n || (n = new o(r)), new s(t, n, e)
                    }), i[_]("refresh"), this
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
                _traverse: function(t, e, r) {
                    var o, s;
                    return null == t && (t = "vertical"), null == e && (e = n), s = f.aggregate(e), o = [], this.each(function() {
                        var e;
                        return e = i.inArray(this, s[t]), r(o, e, s[t])
                    }), this.pushStack(o)
                },
                _invoke: function(t, e) {
                    return t.each(function() {
                        var t;
                        return t = s.getWaypointsByElement(this), i.each(t, function(t, i) {
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
            }, f = {
                refresh: function() {
                    return i.each(u, function(t, e) {
                        return e.refresh()
                    })
                },
                viewportHeight: function() {
                    var t;
                    return null != (t = n.innerHeight) ? t : r.height()
                },
                aggregate: function(t) {
                    var e, n, r;
                    return e = a, t && (e = null != (r = u[i(t).data(c)]) ? r.waypoints : void 0), e ? (n = {
                        horizontal: [],
                        vertical: []
                    }, i.each(n, function(t, r) {
                        return i.each(e[t], function(t, e) {
                            return r.push(e)
                        }), r.sort(function(t, e) {
                            return t.offset - e.offset
                        }), n[t] = i.map(r, function(t) {
                            return t.element
                        }), n[t] = i.unique(n[t])
                    }), n) : []
                },
                above: function(t) {
                    return null == t && (t = n), f._filter(t, "vertical", function(t, e) {
                        return e.offset <= t.oldScroll.y
                    })
                },
                below: function(t) {
                    return null == t && (t = n), f._filter(t, "vertical", function(t, e) {
                        return e.offset > t.oldScroll.y
                    })
                },
                left: function(t) {
                    return null == t && (t = n), f._filter(t, "horizontal", function(t, e) {
                        return e.offset <= t.oldScroll.x
                    })
                },
                right: function(t) {
                    return null == t && (t = n), f._filter(t, "horizontal", function(t, e) {
                        return e.offset > t.oldScroll.x
                    })
                },
                enable: function() {
                    return f._invoke("enable")
                },
                disable: function() {
                    return f._invoke("disable")
                },
                destroy: function() {
                    return f._invoke("destroy")
                },
                extendFn: function(t, e) {
                    return p[t] = e
                },
                _invoke: function(t) {
                    var e;
                    return e = i.extend({}, a.vertical, a.horizontal), i.each(e, function(e, i) {
                        return i[t](), !0
                    })
                },
                _filter: function(t, e, n) {
                    var r, o;
                    return (r = u[i(t).data(c)]) ? (o = [], i.each(r.waypoints[e], function(t, e) {
                        return n(r, e) ? o.push(e) : void 0
                    }), o.sort(function(t, e) {
                        return t.offset - e.offset
                    }), i.map(o, function(t) {
                        return t.element
                    })) : []
                }
            }, i[_] = function() {
                var t, i;
                return i = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], f[i] ? f[i].apply(null, t) : f.aggregate.call(null, i)
            }, i[_].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, r.load(function() {
                return i[_]("refresh")
            })
        })
    }.call(this),
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
                    p()
                }).css({
                    position: "relative",
                    height: "100%"
                }).appendTo(jLoader).text(o.closeBtnText).hide())
            },
            c = function(i) {
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
            u = function() {
                for (var t = 0; t < e.length; t++) h(e[t])
            },
            h = function(e) {
                var n = new Image;
                t(n).load(function() {
                    f()
                }).error(function() {
                    i.push(t(this).attr("src")), f()
                }).attr("src", e)
            },
            f = function() {
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
                        o.autoClose ? p() : t(jButton).fadeIn(1e3)
                    })
                }
            },
            p = function() {
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
                s() ? (t(o.splashID).remove(), n()) : (l(), c(this), u())
            })
        }
    }(jQuery), window.Modernizr = function(t, e, i) {
        function n(t) {
            _.cssText = t
        }

        function r(t, e) {
            return n(T.join(t + ";") + (e || ""))
        }

        function o(t, e) {
            return typeof t === e
        }

        function s(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function a(t, e) {
            for (var n in t) {
                var r = t[n];
                if (!s(r, "-") && _[r] !== i) return "pfx" == e ? r : !0
            }
            return !1
        }

        function l(t, e, n) {
            for (var r in t) {
                var s = e[t[r]];
                if (s !== i) return n === !1 ? t[r] : o(s, "function") ? s.bind(n || e) : s
            }
            return !1
        }

        function c(t, e, i) {
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                r = (t + " " + C.join(n + " ") + n).split(" ");
            return o(e, "string") || o(e, "undefined") ? a(r, e) : (r = (t + " " + S.join(n + " ") + n).split(" "), l(r, e, i))
        }

        function u() {
            d.input = function(i) {
                for (var n = 0, r = i.length; r > n; n++) D[i[n]] = !!(i[n] in x);
                return D.list && (D.list = !(!e.createElement("datalist") || !t.HTMLDataListElement)), D
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), d.inputtypes = function(t) {
                for (var n, r, o, s = 0, a = t.length; a > s; s++) x.setAttribute("type", r = t[s]), n = "text" !== x.type, n && (x.value = b, x.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && x.style.WebkitAppearance !== i ? (g.appendChild(x), o = e.defaultView, n = o.getComputedStyle && "textfield" !== o.getComputedStyle(x, null).WebkitAppearance && 0 !== x.offsetHeight, g.removeChild(x)) : /^(search|tel)$/.test(r) || (n = /^(url|email)$/.test(r) ? x.checkValidity && x.checkValidity() === !1 : x.value != b)), E[t[s]] = !!n;
                return E
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var h, f, p = "2.8.3",
            d = {},
            m = !0,
            g = e.documentElement,
            v = "modernizr",
            y = e.createElement(v),
            _ = y.style,
            x = e.createElement("input"),
            b = ":)",
            w = {}.toString,
            T = " -webkit- -moz- -o- -ms- ".split(" "),
            k = "Webkit Moz O ms",
            C = k.split(" "),
            S = k.toLowerCase().split(" "),
            P = {
                svg: "http://www.w3.org/2000/svg"
            },
            A = {},
            E = {},
            D = {},
            O = [],
            N = O.slice,
            R = function(t, i, n, r) {
                var o, s, a, l, c = e.createElement("div"),
                    u = e.body,
                    h = u || e.createElement("body");
                if (parseInt(n, 10))
                    for (; n--;) a = e.createElement("div"), a.id = r ? r[n] : v + (n + 1), c.appendChild(a);
                return o = ["&#173;", '<style id="s', v, '">', t, "</style>"].join(""), c.id = v, (u ? c : h).innerHTML += o, h.appendChild(c), u || (h.style.background = "", h.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(h)), s = i(c, t), u ? c.parentNode.removeChild(c) : (h.parentNode.removeChild(h), g.style.overflow = l), !!s
            },
            $ = function(e) {
                var i = t.matchMedia || t.msMatchMedia;
                if (i) return i(e) && i(e).matches || !1;
                var n;
                return R("@media " + e + " { #" + v + " { position: absolute; } }", function(e) {
                    n = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
                }), n
            },
            M = function() {
                function t(t, r) {
                    r = r || e.createElement(n[t] || "div"), t = "on" + t;
                    var s = t in r;
                    return s || (r.setAttribute || (r = e.createElement("div")), r.setAttribute && r.removeAttribute && (r.setAttribute(t, ""), s = o(r[t], "function"), o(r[t], "undefined") || (r[t] = i), r.removeAttribute(t))), r = null, s
                }
                var n = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return t
            }(),
            j = {}.hasOwnProperty;
        f = o(j, "undefined") || o(j.call, "undefined") ? function(t, e) {
            return e in t && o(t.constructor.prototype[e], "undefined")
        } : function(t, e) {
            return j.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var i = N.call(arguments, 1),
                n = function() {
                    if (this instanceof n) {
                        var r = function() {};
                        r.prototype = e.prototype;
                        var o = new r,
                            s = e.apply(o, i.concat(N.call(arguments)));
                        return Object(s) === s ? s : o
                    }
                    return e.apply(t, i.concat(N.call(arguments)))
                };
            return n
        }), A.flexbox = function() {
            return c("flexWrap")
        }, A.flexboxlegacy = function() {
            return c("boxDirection")
        }, A.canvas = function() {
            var t = e.createElement("canvas");
            return !(!t.getContext || !t.getContext("2d"))
        }, A.canvastext = function() {
            return !(!d.canvas || !o(e.createElement("canvas").getContext("2d").fillText, "function"))
        }, A.webgl = function() {
            return !!t.WebGLRenderingContext
        }, A.touch = function() {
            var i;
            return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? i = !0 : R(["@media (", T.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                i = 9 === t.offsetTop
            }), i
        }, A.geolocation = function() {
            return "geolocation" in navigator
        }, A.postmessage = function() {
            return !!t.postMessage
        }, A.websqldatabase = function() {
            return !!t.openDatabase
        }, A.indexedDB = function() {
            return !!c("indexedDB", t)
        }, A.hashchange = function() {
            return M("hashchange", t) && (e.documentMode === i || e.documentMode > 7)
        }, A.history = function() {
            return !(!t.history || !history.pushState)
        }, A.draganddrop = function() {
            var t = e.createElement("div");
            return "draggable" in t || "ondragstart" in t && "ondrop" in t
        }, A.websockets = function() {
            return "WebSocket" in t || "MozWebSocket" in t
        }, A.rgba = function() {
            return n("background-color:rgba(150,255,150,.5)"), s(_.backgroundColor, "rgba")
        }, A.hsla = function() {
            return n("background-color:hsla(120,40%,100%,.5)"), s(_.backgroundColor, "rgba") || s(_.backgroundColor, "hsla")
        }, A.multiplebgs = function() {
            return n("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(_.background)
        }, A.backgroundsize = function() {
            return c("backgroundSize")
        }, A.borderimage = function() {
            return c("borderImage")
        }, A.borderradius = function() {
            return c("borderRadius")
        }, A.boxshadow = function() {
            return c("boxShadow")
        }, A.textshadow = function() {
            return "" === e.createElement("div").style.textShadow
        }, A.opacity = function() {
            return r("opacity:.55"), /^0.55$/.test(_.opacity)
        }, A.cssanimations = function() {
            return c("animationName")
        }, A.csscolumns = function() {
            return c("columnCount")
        }, A.cssgradients = function() {
            var t = "background-image:",
                e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                i = "linear-gradient(left top,#9f9, white);";
            return n((t + "-webkit- ".split(" ").join(e + t) + T.join(i + t)).slice(0, -t.length)), s(_.backgroundImage, "gradient")
        }, A.cssreflections = function() {
            return c("boxReflect")
        }, A.csstransforms = function() {
            return !!c("transform")
        }, A.csstransforms3d = function() {
            var t = !!c("perspective");
            return t && "webkitPerspective" in g.style && R("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, i) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }), t
        }, A.csstransitions = function() {
            return c("transition")
        }, A.fontface = function() {
            var t;
            return R('@font-face {font-family:"font";src:url("https://")}', function(i, n) {
                var r = e.getElementById("smodernizr"),
                    o = r.sheet || r.styleSheet,
                    s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
                t = /src/i.test(s) && 0 === s.indexOf(n.split(" ")[0])
            }), t
        }, A.generatedcontent = function() {
            var t;
            return R(["#", v, "{font:0/0 a}#", v, ':after{content:"', b, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
                t = e.offsetHeight >= 3
            }), t
        }, A.video = function() {
            var t = e.createElement("video"),
                i = !1;
            try {
                (i = !!t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), i.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (n) {}
            return i
        }, A.audio = function() {
            var t = e.createElement("audio"),
                i = !1;
            try {
                (i = !!t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), i.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), i.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (n) {}
            return i
        }, A.localstorage = function() {
            try {
                return localStorage.setItem(v, v), localStorage.removeItem(v), !0
            } catch (t) {
                return !1
            }
        }, A.sessionstorage = function() {
            try {
                return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
            } catch (t) {
                return !1
            }
        }, A.webworkers = function() {
            return !!t.Worker
        }, A.applicationcache = function() {
            return !!t.applicationCache
        }, A.svg = function() {
            return !!e.createElementNS && !!e.createElementNS(P.svg, "svg").createSVGRect
        }, A.inlinesvg = function() {
            var t = e.createElement("div");
            return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == P.svg
        }, A.smil = function() {
            return !!e.createElementNS && /SVGAnimate/.test(w.call(e.createElementNS(P.svg, "animate")))
        }, A.svgclippaths = function() {
            return !!e.createElementNS && /SVGClipPath/.test(w.call(e.createElementNS(P.svg, "clipPath")))
        };
        for (var I in A) f(A, I) && (h = I.toLowerCase(), d[h] = A[I](), O.push((d[h] ? "" : "no-") + h));
        return d.input || u(), d.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var n in t) f(t, n) && d.addTest(n, t[n]);
                else {
                    if (t = t.toLowerCase(), d[t] !== i) return d;
                    e = "function" == typeof e ? e() : e, "undefined" != typeof m && m && (g.className += " " + (e ? "" : "no-") + t), d[t] = e
                }
                return d
            }, n(""), y = x = null,
            function(t, e) {
                function i(t, e) {
                    var i = t.createElement("p"),
                        n = t.getElementsByTagName("head")[0] || t.documentElement;
                    return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
                }

                function n() {
                    var t = y.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function r(t) {
                    var e = v[t[m]];
                    return e || (e = {}, g++, t[m] = g, v[g] = e), e
                }

                function o(t, i, n) {
                    if (i || (i = e), u) return i.createElement(t);
                    n || (n = r(i));
                    var o;
                    return o = n.cache[t] ? n.cache[t].cloneNode() : d.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t), !o.canHaveChildren || p.test(t) || o.tagUrn ? o : n.frag.appendChild(o)
                }

                function s(t, i) {
                    if (t || (t = e), u) return t.createDocumentFragment();
                    i = i || r(t);
                    for (var o = i.frag.cloneNode(), s = 0, a = n(), l = a.length; l > s; s++) o.createElement(a[s]);
                    return o
                }

                function a(t, e) {
                    e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(i) {
                        return y.shivMethods ? o(i, t, e) : e.createElem(i)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function(t) {
                        return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(y, e.frag)
                }

                function l(t) {
                    t || (t = e);
                    var n = r(t);
                    return !y.shivCSS || c || n.hasCSS || (n.hasCSS = !!i(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || a(t, n), t
                }
                var c, u, h = "3.7.0",
                    f = t.html5 || {},
                    p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    m = "_html5shiv",
                    g = 0,
                    v = {};
                ! function() {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", c = "hidden" in t, u = 1 == t.childNodes.length || function() {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                        }()
                    } catch (i) {
                        c = !0, u = !0
                    }
                }();
                var y = {
                    elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: h,
                    shivCSS: f.shivCSS !== !1,
                    supportsUnknownElements: u,
                    shivMethods: f.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: o,
                    createDocumentFragment: s
                };
                t.html5 = y, l(e)
            }(this, e), d._version = p, d._prefixes = T, d._domPrefixes = S, d._cssomPrefixes = C, d.mq = $, d.hasEvent = M, d.testProp = function(t) {
                return a([t])
            }, d.testAllProps = c, d.testStyles = R, d.prefixed = function(t, e, i) {
                return e ? c(t, e, i) : c(t, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + O.join(" ") : ""), d
    }(this, this.document),
    function(t) {
        t.color = {}, t.color.make = function(e, i, n, r) {
            var o = {};
            return o.r = e || 0, o.g = i || 0, o.b = n || 0, o.a = null != r ? r : 1, o.add = function(t, e) {
                for (var i = 0; i < t.length; ++i) o[t.charAt(i)] += e;
                return o.normalize()
            }, o.scale = function(t, e) {
                for (var i = 0; i < t.length; ++i) o[t.charAt(i)] *= e;
                return o.normalize()
            }, o.toString = function() {
                return o.a >= 1 ? "rgb(" + [o.r, o.g, o.b].join(",") + ")" : "rgba(" + [o.r, o.g, o.b, o.a].join(",") + ")"
            }, o.normalize = function() {
                function t(t, e, i) {
                    return t > e ? t : e > i ? i : e
                }
                return o.r = t(0, parseInt(o.r), 255), o.g = t(0, parseInt(o.g), 255), o.b = t(0, parseInt(o.b), 255), o.a = t(0, o.a, 1), o
            }, o.clone = function() {
                return t.color.make(o.r, o.b, o.g, o.a)
            }, o.normalize()
        }, t.color.extract = function(e, i) {
            var n;
            do {
                if (n = e.css(i).toLowerCase(), "" != n && "transparent" != n) break;
                e = e.parent()
            } while (e.length && !t.nodeName(e.get(0), "body"));
            return "rgba(0, 0, 0, 0)" == n && (n = "transparent"), t.color.parse(n)
        }, t.color.parse = function(i) {
            var n, r = t.color.make;
            if (n = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(i)) return r(parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10));
            if (n = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i)) return r(parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10), parseFloat(n[4]));
            if (n = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(i)) return r(2.55 * parseFloat(n[1]), 2.55 * parseFloat(n[2]), 2.55 * parseFloat(n[3]));
            if (n = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i)) return r(2.55 * parseFloat(n[1]), 2.55 * parseFloat(n[2]), 2.55 * parseFloat(n[3]), parseFloat(n[4]));
            if (n = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(i)) return r(parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16));
            if (n = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(i)) return r(parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16));
            var o = t.trim(i).toLowerCase();
            return "transparent" == o ? r(255, 255, 255, 0) : (n = e[o] || [0, 0, 0], r(n[0], n[1], n[2]))
        };
        var e = {
            aqua: [0, 255, 255],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            black: [0, 0, 0],
            blue: [0, 0, 255],
            brown: [165, 42, 42],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgrey: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkviolet: [148, 0, 211],
            fuchsia: [255, 0, 255],
            gold: [255, 215, 0],
            green: [0, 128, 0],
            indigo: [75, 0, 130],
            khaki: [240, 230, 140],
            lightblue: [173, 216, 230],
            lightcyan: [224, 255, 255],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            navy: [0, 0, 128],
            olive: [128, 128, 0],
            orange: [255, 165, 0],
            pink: [255, 192, 203],
            purple: [128, 0, 128],
            violet: [128, 0, 128],
            red: [255, 0, 0],
            silver: [192, 192, 192],
            white: [255, 255, 255],
            yellow: [255, 255, 0]
        }
    }(jQuery),
    function(t) {
        function e(e, i) {
            var n = i.children("." + e)[0];
            if (null == n && (n = document.createElement("canvas"), n.className = e, t(n).css({
                    direction: "ltr",
                    position: "absolute",
                    left: 0,
                    top: 0
                }).appendTo(i), !n.getContext)) {
                if (!window.G_vmlCanvasManager) throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
                n = window.G_vmlCanvasManager.initElement(n)
            }
            this.element = n;
            var r = this.context = n.getContext("2d"),
                o = window.devicePixelRatio || 1,
                s = r.webkitBackingStorePixelRatio || r.mozBackingStorePixelRatio || r.msBackingStorePixelRatio || r.oBackingStorePixelRatio || r.backingStorePixelRatio || 1;
            this.pixelRatio = o / s, this.resize(i.width(), i.height()), this.textContainer = null, this.text = {}, this._textCache = {}
        }

        function i(i, r, o, s) {
            function a(t, e) {
                e = [gt].concat(e);
                for (var i = 0; i < t.length; ++i) t[i].apply(this, e)
            }

            function l() {
                for (var i = {
                        Canvas: e
                    }, n = 0; n < s.length; ++n) {
                    var r = s[n];
                    r.init(gt, i), r.options && t.extend(!0, rt, r.options)
                }
            }

            function c(e) {
                t.extend(!0, rt, e), e && e.colors && (rt.colors = e.colors), null == rt.xaxis.color && (rt.xaxis.color = t.color.parse(rt.grid.color).scale("a", .22).toString()), null == rt.yaxis.color && (rt.yaxis.color = t.color.parse(rt.grid.color).scale("a", .22).toString()), null == rt.xaxis.tickColor && (rt.xaxis.tickColor = rt.grid.tickColor || rt.xaxis.color), null == rt.yaxis.tickColor && (rt.yaxis.tickColor = rt.grid.tickColor || rt.yaxis.color), null == rt.grid.borderColor && (rt.grid.borderColor = rt.grid.color), null == rt.grid.tickColor && (rt.grid.tickColor = t.color.parse(rt.grid.color).scale("a", .22).toString());
                var n, r, o, s = i.css("font-size"),
                    l = s ? +s.replace("px", "") : 13,
                    c = {
                        style: i.css("font-style"),
                        size: Math.round(.8 * l),
                        variant: i.css("font-variant"),
                        weight: i.css("font-weight"),
                        family: i.css("font-family")
                    };
                for (o = rt.xaxes.length || 1, n = 0; o > n; ++n) r = rt.xaxes[n], r && !r.tickColor && (r.tickColor = r.color), r = t.extend(!0, {}, rt.xaxis, r), rt.xaxes[n] = r, r.font && (r.font = t.extend({}, c, r.font), r.font.color || (r.font.color = r.color), r.font.lineHeight || (r.font.lineHeight = Math.round(1.15 * r.font.size)));
                for (o = rt.yaxes.length || 1, n = 0; o > n; ++n) r = rt.yaxes[n], r && !r.tickColor && (r.tickColor = r.color), r = t.extend(!0, {}, rt.yaxis, r), rt.yaxes[n] = r, r.font && (r.font = t.extend({}, c, r.font), r.font.color || (r.font.color = r.color), r.font.lineHeight || (r.font.lineHeight = Math.round(1.15 * r.font.size)));
                for (rt.xaxis.noTicks && null == rt.xaxis.ticks && (rt.xaxis.ticks = rt.xaxis.noTicks), rt.yaxis.noTicks && null == rt.yaxis.ticks && (rt.yaxis.ticks = rt.yaxis.noTicks), rt.x2axis && (rt.xaxes[1] = t.extend(!0, {}, rt.xaxis, rt.x2axis), rt.xaxes[1].position = "top", null == rt.x2axis.min && (rt.xaxes[1].min = null), null == rt.x2axis.max && (rt.xaxes[1].max = null)), rt.y2axis && (rt.yaxes[1] = t.extend(!0, {}, rt.yaxis, rt.y2axis), rt.yaxes[1].position = "right", null == rt.y2axis.min && (rt.yaxes[1].min = null), null == rt.y2axis.max && (rt.yaxes[1].max = null)), rt.grid.coloredAreas && (rt.grid.markings = rt.grid.coloredAreas), rt.grid.coloredAreasColor && (rt.grid.markingsColor = rt.grid.coloredAreasColor), rt.lines && t.extend(!0, rt.series.lines, rt.lines), rt.points && t.extend(!0, rt.series.points, rt.points), rt.bars && t.extend(!0, rt.series.bars, rt.bars), null != rt.shadowSize && (rt.series.shadowSize = rt.shadowSize), null != rt.highlightColor && (rt.series.highlightColor = rt.highlightColor), n = 0; n < rt.xaxes.length; ++n) g(ut, n + 1).options = rt.xaxes[n];
                for (n = 0; n < rt.yaxes.length; ++n) g(ht, n + 1).options = rt.yaxes[n];
                for (var u in mt) rt.hooks[u] && rt.hooks[u].length && (mt[u] = mt[u].concat(rt.hooks[u]));
                a(mt.processOptions, [rt])
            }

            function u(t) {
                nt = h(t), v(), y()
            }

            function h(e) {
                for (var i = [], n = 0; n < e.length; ++n) {
                    var r = t.extend(!0, {}, rt.series);
                    null != e[n].data ? (r.data = e[n].data, delete e[n].data, t.extend(!0, r, e[n]), e[n].data = r.data) : r.data = e[n], i.push(r)
                }
                return i
            }

            function f(t, e) {
                var i = t[e + "axis"];
                return "object" == typeof i && (i = i.n), "number" != typeof i && (i = 1), i
            }

            function p() {
                return t.grep(ut.concat(ht), function(t) {
                    return t
                })
            }

            function d(t) {
                var e, i, n = {};
                for (e = 0; e < ut.length; ++e) i = ut[e], i && i.used && (n["x" + i.n] = i.c2p(t.left));
                for (e = 0; e < ht.length; ++e) i = ht[e], i && i.used && (n["y" + i.n] = i.c2p(t.top));
                return void 0 !== n.x1 && (n.x = n.x1), void 0 !== n.y1 && (n.y = n.y1), n
            }

            function m(t) {
                var e, i, n, r = {};
                for (e = 0; e < ut.length; ++e)
                    if (i = ut[e], i && i.used && (n = "x" + i.n, null == t[n] && 1 == i.n && (n = "x"), null != t[n])) {
                        r.left = i.p2c(t[n]);
                        break
                    }
                for (e = 0; e < ht.length; ++e)
                    if (i = ht[e], i && i.used && (n = "y" + i.n, null == t[n] && 1 == i.n && (n = "y"), null != t[n])) {
                        r.top = i.p2c(t[n]);
                        break
                    }
                return r
            }

            function g(e, i) {
                return e[i - 1] || (e[i - 1] = {
                    n: i,
                    direction: e == ut ? "x" : "y",
                    options: t.extend(!0, {}, e == ut ? rt.xaxis : rt.yaxis)
                }), e[i - 1]
            }

            function v() {
                var e, i = nt.length,
                    n = -1;
                for (e = 0; e < nt.length; ++e) {
                    var r = nt[e].color;
                    null != r && (i--, "number" == typeof r && r > n && (n = r))
                }
                n >= i && (i = n + 1);
                var o, s = [],
                    a = rt.colors,
                    l = a.length,
                    c = 0;
                for (e = 0; i > e; e++) o = t.color.parse(a[e % l] || "#666"), e % l == 0 && e && (c = c >= 0 ? .5 > c ? -c - .2 : 0 : -c), s[e] = o.scale("rgb", 1 + c);
                var u, h = 0;
                for (e = 0; e < nt.length; ++e) {
                    if (u = nt[e], null == u.color ? (u.color = s[h].toString(), ++h) : "number" == typeof u.color && (u.color = s[u.color].toString()), null == u.lines.show) {
                        var p, d = !0;
                        for (p in u)
                            if (u[p] && u[p].show) {
                                d = !1;
                                break
                            }
                        d && (u.lines.show = !0)
                    }
                    null == u.lines.zero && (u.lines.zero = !!u.lines.fill), u.xaxis = g(ut, f(u, "x")), u.yaxis = g(ht, f(u, "y"))
                }
            }

            function y() {
                function e(t, e, i) {
                    e < t.datamin && e != -y && (t.datamin = e), i > t.datamax && i != y && (t.datamax = i)
                }
                var i, n, r, o, s, l, c, u, h, f, d, m, g = Number.POSITIVE_INFINITY,
                    v = Number.NEGATIVE_INFINITY,
                    y = Number.MAX_VALUE;
                for (t.each(p(), function(t, e) {
                        e.datamin = g, e.datamax = v, e.used = !1
                    }), i = 0; i < nt.length; ++i) s = nt[i], s.datapoints = {
                    points: []
                }, a(mt.processRawData, [s, s.data, s.datapoints]);
                for (i = 0; i < nt.length; ++i) {
                    if (s = nt[i], d = s.data, m = s.datapoints.format, !m) {
                        if (m = [], m.push({
                                x: !0,
                                number: !0,
                                required: !0
                            }), m.push({
                                y: !0,
                                number: !0,
                                required: !0
                            }), s.bars.show || s.lines.show && s.lines.fill) {
                            var _ = !!(s.bars.show && s.bars.zero || s.lines.show && s.lines.zero);
                            m.push({
                                y: !0,
                                number: !0,
                                required: !1,
                                defaultValue: 0,
                                autoscale: _
                            }), s.bars.horizontal && (delete m[m.length - 1].y, m[m.length - 1].x = !0)
                        }
                        s.datapoints.format = m
                    }
                    if (null == s.datapoints.pointsize) {
                        s.datapoints.pointsize = m.length, c = s.datapoints.pointsize, l = s.datapoints.points;
                        var x = s.lines.show && s.lines.steps;
                        for (s.xaxis.used = s.yaxis.used = !0, n = r = 0; n < d.length; ++n, r += c) {
                            f = d[n];
                            var b = null == f;
                            if (!b)
                                for (o = 0; c > o; ++o) u = f[o], h = m[o], h && (h.number && null != u && (u = +u, isNaN(u) ? u = null : u == 1 / 0 ? u = y : u == -(1 / 0) && (u = -y)), null == u && (h.required && (b = !0), null != h.defaultValue && (u = h.defaultValue))), l[r + o] = u;
                            if (b)
                                for (o = 0; c > o; ++o) u = l[r + o], null != u && (h = m[o], h.autoscale !== !1 && (h.x && e(s.xaxis, u, u), h.y && e(s.yaxis, u, u))), l[r + o] = null;
                            else if (x && r > 0 && null != l[r - c] && l[r - c] != l[r] && l[r - c + 1] != l[r + 1]) {
                                for (o = 0; c > o; ++o) l[r + c + o] = l[r + o];
                                l[r + 1] = l[r - c + 1], r += c
                            }
                        }
                    }
                }
                for (i = 0; i < nt.length; ++i) s = nt[i], a(mt.processDatapoints, [s, s.datapoints]);
                for (i = 0; i < nt.length; ++i) {
                    s = nt[i], l = s.datapoints.points, c = s.datapoints.pointsize, m = s.datapoints.format;
                    var w = g,
                        T = g,
                        k = v,
                        C = v;
                    for (n = 0; n < l.length; n += c)
                        if (null != l[n])
                            for (o = 0; c > o; ++o) u = l[n + o], h = m[o], h && h.autoscale !== !1 && u != y && u != -y && (h.x && (w > u && (w = u), u > k && (k = u)), h.y && (T > u && (T = u), u > C && (C = u)));
                    if (s.bars.show) {
                        var S;
                        switch (s.bars.align) {
                            case "left":
                                S = 0;
                                break;
                            case "right":
                                S = -s.bars.barWidth;
                                break;
                            default:
                                S = -s.bars.barWidth / 2
                        }
                        s.bars.horizontal ? (T += S, C += S + s.bars.barWidth) : (w += S, k += S + s.bars.barWidth)
                    }
                    e(s.xaxis, w, k), e(s.yaxis, T, C)
                }
                t.each(p(), function(t, e) {
                    e.datamin == g && (e.datamin = null), e.datamax == v && (e.datamax = null)
                })
            }

            function _() {
                i.css("padding", 0).children().filter(function() {
                    return !t(this).hasClass("flot-overlay") && !t(this).hasClass("flot-base")
                }).remove(), "static" == i.css("position") && i.css("position", "relative"), ot = new e("flot-base", i), st = new e("flot-overlay", i), lt = ot.context, ct = st.context, at = t(st.element).unbind();
                var n = i.data("plot");
                n && (n.shutdown(), st.clear()), i.data("plot", gt)
            }

            function x() {
                rt.grid.hoverable && (at.mousemove(X), at.bind("mouseleave", U)), rt.grid.clickable && at.click(Y), a(mt.bindEvents, [at])
            }

            function b() {
                yt && clearTimeout(yt), at.unbind("mousemove", X), at.unbind("mouseleave", U), at.unbind("click", Y), a(mt.shutdown, [at])
            }

            function w(t) {
                function e(t) {
                    return t
                }
                var i, n, r = t.options.transform || e,
                    o = t.options.inverseTransform;
                "x" == t.direction ? (i = t.scale = pt / Math.abs(r(t.max) - r(t.min)), n = Math.min(r(t.max), r(t.min))) : (i = t.scale = dt / Math.abs(r(t.max) - r(t.min)), i = -i, n = Math.max(r(t.max), r(t.min))), r == e ? t.p2c = function(t) {
                    return (t - n) * i
                } : t.p2c = function(t) {
                    return (r(t) - n) * i
                }, o ? t.c2p = function(t) {
                    return o(n + t / i)
                } : t.c2p = function(t) {
                    return n + t / i
                }
            }

            function T(t) {
                for (var e = t.options, i = t.ticks || [], n = e.labelWidth || 0, r = e.labelHeight || 0, o = n || ("x" == t.direction ? Math.floor(ot.width / (i.length || 1)) : null), s = t.direction + "Axis " + t.direction + t.n + "Axis", a = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + s, l = e.font || "flot-tick-label tickLabel", c = 0; c < i.length; ++c) {
                    var u = i[c];
                    if (u.label) {
                        var h = ot.getTextInfo(a, u.label, l, null, o);
                        n = Math.max(n, h.width), r = Math.max(r, h.height)
                    }
                }
                t.labelWidth = e.labelWidth || n, t.labelHeight = e.labelHeight || r
            }

            function k(e) {
                var i = e.labelWidth,
                    n = e.labelHeight,
                    r = e.options.position,
                    o = "x" === e.direction,
                    s = e.options.tickLength,
                    a = rt.grid.axisMargin,
                    l = rt.grid.labelMargin,
                    c = !0,
                    u = !0,
                    h = !0,
                    f = !1;
                t.each(o ? ut : ht, function(t, i) {
                    i && (i.show || i.reserveSpace) && (i === e ? f = !0 : i.options.position === r && (f ? u = !1 : c = !1), f || (h = !1))
                }), u && (a = 0), null == s && (s = h ? "full" : 5), isNaN(+s) || (l += +s), o ? (n += l, "bottom" == r ? (ft.bottom += n + a, e.box = {
                    top: ot.height - ft.bottom,
                    height: n
                }) : (e.box = {
                    top: ft.top + a,
                    height: n
                }, ft.top += n + a)) : (i += l, "left" == r ? (e.box = {
                    left: ft.left + a,
                    width: i
                }, ft.left += i + a) : (ft.right += i + a, e.box = {
                    left: ot.width - ft.right,
                    width: i
                })), e.position = r, e.tickLength = s, e.box.padding = l, e.innermost = c
            }

            function C(t) {
                "x" == t.direction ? (t.box.left = ft.left - t.labelWidth / 2, t.box.width = ot.width - ft.left - ft.right + t.labelWidth) : (t.box.top = ft.top - t.labelHeight / 2, t.box.height = ot.height - ft.bottom - ft.top + t.labelHeight)
            }

            function S() {
                var e, i = rt.grid.minBorderMargin;
                if (null == i)
                    for (i = 0, e = 0; e < nt.length; ++e) i = Math.max(i, 2 * (nt[e].points.radius + nt[e].points.lineWidth / 2));
                var n = {
                    left: i,
                    right: i,
                    top: i,
                    bottom: i
                };
                t.each(p(), function(t, e) {
                    e.reserveSpace && e.ticks && e.ticks.length && ("x" === e.direction ? (n.left = Math.max(n.left, e.labelWidth / 2), n.right = Math.max(n.right, e.labelWidth / 2)) : (n.bottom = Math.max(n.bottom, e.labelHeight / 2), n.top = Math.max(n.top, e.labelHeight / 2)))
                }), ft.left = Math.ceil(Math.max(n.left, ft.left)), ft.right = Math.ceil(Math.max(n.right, ft.right)), ft.top = Math.ceil(Math.max(n.top, ft.top)), ft.bottom = Math.ceil(Math.max(n.bottom, ft.bottom))
            }

            function P() {
                var e, i = p(),
                    n = rt.grid.show;
                for (var r in ft) {
                    var o = rt.grid.margin || 0;
                    ft[r] = "number" == typeof o ? o : o[r] || 0
                }
                a(mt.processOffset, [ft]);
                for (var r in ft) "object" == typeof rt.grid.borderWidth ? ft[r] += n ? rt.grid.borderWidth[r] : 0 : ft[r] += n ? rt.grid.borderWidth : 0;
                if (t.each(i, function(t, e) {
                        var i = e.options;
                        e.show = null == i.show ? e.used : i.show, e.reserveSpace = null == i.reserveSpace ? e.show : i.reserveSpace, A(e)
                    }), n) {
                    var s = t.grep(i, function(t) {
                        return t.show || t.reserveSpace
                    });
                    for (t.each(s, function(t, e) {
                            E(e), D(e), O(e, e.ticks), T(e)
                        }), e = s.length - 1; e >= 0; --e) k(s[e]);
                    S(), t.each(s, function(t, e) {
                        C(e)
                    })
                }
                pt = ot.width - ft.left - ft.right, dt = ot.height - ft.bottom - ft.top, t.each(i, function(t, e) {
                    w(e)
                }), n && j(), H()
            }

            function A(t) {
                var e = t.options,
                    i = +(null != e.min ? e.min : t.datamin),
                    n = +(null != e.max ? e.max : t.datamax),
                    r = n - i;
                if (0 == r) {
                    var o = 0 == n ? 1 : .01;
                    null == e.min && (i -= o), null != e.max && null == e.min || (n += o)
                } else {
                    var s = e.autoscaleMargin;
                    null != s && (null == e.min && (i -= r * s, 0 > i && null != t.datamin && t.datamin >= 0 && (i = 0)), null == e.max && (n += r * s, n > 0 && null != t.datamax && t.datamax <= 0 && (n = 0)))
                }
                t.min = i, t.max = n
            }

            function E(e) {
                var i, r = e.options;
                i = "number" == typeof r.ticks && r.ticks > 0 ? r.ticks : .3 * Math.sqrt("x" == e.direction ? ot.width : ot.height);
                var o = (e.max - e.min) / i,
                    s = -Math.floor(Math.log(o) / Math.LN10),
                    a = r.tickDecimals;
                null != a && s > a && (s = a);
                var l, c = Math.pow(10, -s),
                    u = o / c;
                if (1.5 > u ? l = 1 : 3 > u ? (l = 2, u > 2.25 && (null == a || a >= s + 1) && (l = 2.5, ++s)) : l = 7.5 > u ? 5 : 10, l *= c, null != r.minTickSize && l < r.minTickSize && (l = r.minTickSize), e.delta = o, e.tickDecimals = Math.max(0, null != a ? a : s), e.tickSize = r.tickSize || l, "time" == r.mode && !e.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");
                if (e.tickGenerator || (e.tickGenerator = function(t) {
                        var e, i = [],
                            r = n(t.min, t.tickSize),
                            o = 0,
                            s = Number.NaN;
                        do e = s, s = r + o * t.tickSize, i.push(s), ++o; while (s < t.max && s != e);
                        return i
                    }, e.tickFormatter = function(t, e) {
                        var i = e.tickDecimals ? Math.pow(10, e.tickDecimals) : 1,
                            n = "" + Math.round(t * i) / i;
                        if (null != e.tickDecimals) {
                            var r = n.indexOf("."),
                                o = -1 == r ? 0 : n.length - r - 1;
                            if (o < e.tickDecimals) return (o ? n : n + ".") + ("" + i).substr(1, e.tickDecimals - o)
                        }
                        return n
                    }), t.isFunction(r.tickFormatter) && (e.tickFormatter = function(t, e) {
                        return "" + r.tickFormatter(t, e)
                    }), null != r.alignTicksWithAxis) {
                    var h = ("x" == e.direction ? ut : ht)[r.alignTicksWithAxis - 1];
                    if (h && h.used && h != e) {
                        var f = e.tickGenerator(e);
                        if (f.length > 0 && (null == r.min && (e.min = Math.min(e.min, f[0])), null == r.max && f.length > 1 && (e.max = Math.max(e.max, f[f.length - 1]))), e.tickGenerator = function(t) {
                                var e, i, n = [];
                                for (i = 0; i < h.ticks.length; ++i) e = (h.ticks[i].v - h.min) / (h.max - h.min), e = t.min + e * (t.max - t.min), n.push(e);
                                return n
                            }, !e.mode && null == r.tickDecimals) {
                            var p = Math.max(0, -Math.floor(Math.log(e.delta) / Math.LN10) + 1),
                                d = e.tickGenerator(e);
                            d.length > 1 && /\..*0$/.test((d[1] - d[0]).toFixed(p)) || (e.tickDecimals = p)
                        }
                    }
                }
            }

            function D(e) {
                var i = e.options.ticks,
                    n = [];
                null == i || "number" == typeof i && i > 0 ? n = e.tickGenerator(e) : i && (n = t.isFunction(i) ? i(e) : i);
                var r, o;
                for (e.ticks = [], r = 0; r < n.length; ++r) {
                    var s = null,
                        a = n[r];
                    "object" == typeof a ? (o = +a[0], a.length > 1 && (s = a[1])) : o = +a, null == s && (s = e.tickFormatter(o, e)), isNaN(o) || e.ticks.push({
                        v: o,
                        label: s
                    })
                }
            }

            function O(t, e) {
                t.options.autoscaleMargin && e.length > 0 && (null == t.options.min && (t.min = Math.min(t.min, e[0].v)), null == t.options.max && e.length > 1 && (t.max = Math.max(t.max, e[e.length - 1].v)))
            }

            function N() {
                ot.clear(), a(mt.drawBackground, [lt]);
                var t = rt.grid;
                t.show && t.backgroundColor && $(), t.show && !t.aboveData && M();
                for (var e = 0; e < nt.length; ++e) a(mt.drawSeries, [lt, nt[e]]), I(nt[e]);
                a(mt.draw, [lt]), t.show && t.aboveData && M(), ot.render(), Q()
            }

            function R(t, e) {
                for (var i, n, r, o, s = p(), a = 0; a < s.length; ++a)
                    if (i = s[a], i.direction == e && (o = e + i.n + "axis", t[o] || 1 != i.n || (o = e + "axis"), t[o])) {
                        n = t[o].from, r = t[o].to;
                        break
                    }
                if (t[o] || (i = "x" == e ? ut[0] : ht[0], n = t[e + "1"], r = t[e + "2"]), null != n && null != r && n > r) {
                    var l = n;
                    n = r, r = l
                }
                return {
                    from: n,
                    to: r,
                    axis: i
                }
            }

            function $() {
                lt.save(), lt.translate(ft.left, ft.top), lt.fillStyle = it(rt.grid.backgroundColor, dt, 0, "rgba(255, 255, 255, 0)"), lt.fillRect(0, 0, pt, dt), lt.restore()
            }

            function M() {
                var e, i, n, r;
                lt.save(), lt.translate(ft.left, ft.top);
                var o = rt.grid.markings;
                if (o)
                    for (t.isFunction(o) && (i = gt.getAxes(), i.xmin = i.xaxis.min, i.xmax = i.xaxis.max, i.ymin = i.yaxis.min, i.ymax = i.yaxis.max, o = o(i)), e = 0; e < o.length; ++e) {
                        var s = o[e],
                            a = R(s, "x"),
                            l = R(s, "y");
                        if (null == a.from && (a.from = a.axis.min), null == a.to && (a.to = a.axis.max), null == l.from && (l.from = l.axis.min), null == l.to && (l.to = l.axis.max), !(a.to < a.axis.min || a.from > a.axis.max || l.to < l.axis.min || l.from > l.axis.max)) {
                            a.from = Math.max(a.from, a.axis.min), a.to = Math.min(a.to, a.axis.max), l.from = Math.max(l.from, l.axis.min), l.to = Math.min(l.to, l.axis.max);
                            var c = a.from === a.to,
                                u = l.from === l.to;
                            if (!c || !u)
                                if (a.from = Math.floor(a.axis.p2c(a.from)), a.to = Math.floor(a.axis.p2c(a.to)), l.from = Math.floor(l.axis.p2c(l.from)), l.to = Math.floor(l.axis.p2c(l.to)), c || u) {
                                    var h = s.lineWidth || rt.grid.markingsLineWidth,
                                        f = h % 2 ? .5 : 0;
                                    lt.beginPath(), lt.strokeStyle = s.color || rt.grid.markingsColor, lt.lineWidth = h, c ? (lt.moveTo(a.to + f, l.from), lt.lineTo(a.to + f, l.to)) : (lt.moveTo(a.from, l.to + f), lt.lineTo(a.to, l.to + f)), lt.stroke()
                                } else lt.fillStyle = s.color || rt.grid.markingsColor, lt.fillRect(a.from, l.to, a.to - a.from, l.from - l.to)
                        }
                    }
                i = p(), n = rt.grid.borderWidth;
                for (var d = 0; d < i.length; ++d) {
                    var m, g, v, y, _ = i[d],
                        x = _.box,
                        b = _.tickLength;
                    if (_.show && 0 != _.ticks.length) {
                        for (lt.lineWidth = 1, "x" == _.direction ? (m = 0, g = "full" == b ? "top" == _.position ? 0 : dt : x.top - ft.top + ("top" == _.position ? x.height : 0)) : (g = 0, m = "full" == b ? "left" == _.position ? 0 : pt : x.left - ft.left + ("left" == _.position ? x.width : 0)), _.innermost || (lt.strokeStyle = _.options.color, lt.beginPath(), v = y = 0, "x" == _.direction ? v = pt + 1 : y = dt + 1, 1 == lt.lineWidth && ("x" == _.direction ? g = Math.floor(g) + .5 : m = Math.floor(m) + .5), lt.moveTo(m, g), lt.lineTo(m + v, g + y), lt.stroke()), lt.strokeStyle = _.options.tickColor, lt.beginPath(), e = 0; e < _.ticks.length; ++e) {
                            var w = _.ticks[e].v;
                            v = y = 0, isNaN(w) || w < _.min || w > _.max || "full" == b && ("object" == typeof n && n[_.position] > 0 || n > 0) && (w == _.min || w == _.max) || ("x" == _.direction ? (m = _.p2c(w), y = "full" == b ? -dt : b, "top" == _.position && (y = -y)) : (g = _.p2c(w), v = "full" == b ? -pt : b, "left" == _.position && (v = -v)), 1 == lt.lineWidth && ("x" == _.direction ? m = Math.floor(m) + .5 : g = Math.floor(g) + .5), lt.moveTo(m, g), lt.lineTo(m + v, g + y))
                        }
                        lt.stroke()
                    }
                }
                n && (r = rt.grid.borderColor, "object" == typeof n || "object" == typeof r ? ("object" != typeof n && (n = {
                    top: n,
                    right: n,
                    bottom: n,
                    left: n
                }), "object" != typeof r && (r = {
                    top: r,
                    right: r,
                    bottom: r,
                    left: r
                }), n.top > 0 && (lt.strokeStyle = r.top, lt.lineWidth = n.top, lt.beginPath(), lt.moveTo(0 - n.left, 0 - n.top / 2), lt.lineTo(pt, 0 - n.top / 2), lt.stroke()), n.right > 0 && (lt.strokeStyle = r.right, lt.lineWidth = n.right, lt.beginPath(), lt.moveTo(pt + n.right / 2, 0 - n.top), lt.lineTo(pt + n.right / 2, dt), lt.stroke()), n.bottom > 0 && (lt.strokeStyle = r.bottom, lt.lineWidth = n.bottom, lt.beginPath(), lt.moveTo(pt + n.right, dt + n.bottom / 2), lt.lineTo(0, dt + n.bottom / 2), lt.stroke()), n.left > 0 && (lt.strokeStyle = r.left, lt.lineWidth = n.left, lt.beginPath(), lt.moveTo(0 - n.left / 2, dt + n.bottom), lt.lineTo(0 - n.left / 2, 0), lt.stroke())) : (lt.lineWidth = n, lt.strokeStyle = rt.grid.borderColor, lt.strokeRect(-n / 2, -n / 2, pt + n, dt + n))), lt.restore()
            }

            function j() {
                t.each(p(), function(t, e) {
                    var i, n, r, o, s, a = e.box,
                        l = e.direction + "Axis " + e.direction + e.n + "Axis",
                        c = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + l,
                        u = e.options.font || "flot-tick-label tickLabel";
                    if (ot.removeText(c), e.show && 0 != e.ticks.length)
                        for (var h = 0; h < e.ticks.length; ++h) i = e.ticks[h], !i.label || i.v < e.min || i.v > e.max || ("x" == e.direction ? (o = "center", n = ft.left + e.p2c(i.v), "bottom" == e.position ? r = a.top + a.padding : (r = a.top + a.height - a.padding, s = "bottom")) : (s = "middle", r = ft.top + e.p2c(i.v), "left" == e.position ? (n = a.left + a.width - a.padding, o = "right") : n = a.left + a.padding), ot.addText(c, n, r, i.label, u, null, null, o, s))
                })
            }

            function I(t) {
                t.lines.show && L(t), t.bars.show && W(t), t.points.show && F(t)
            }

            function L(t) {
                function e(t, e, i, n, r) {
                    var o = t.points,
                        s = t.pointsize,
                        a = null,
                        l = null;
                    lt.beginPath();
                    for (var c = s; c < o.length; c += s) {
                        var u = o[c - s],
                            h = o[c - s + 1],
                            f = o[c],
                            p = o[c + 1];
                        if (null != u && null != f) {
                            if (p >= h && h < r.min) {
                                if (p < r.min) continue;
                                u = (r.min - h) / (p - h) * (f - u) + u, h = r.min
                            } else if (h >= p && p < r.min) {
                                if (h < r.min) continue;
                                f = (r.min - h) / (p - h) * (f - u) + u, p = r.min
                            }
                            if (h >= p && h > r.max) {
                                if (p > r.max) continue;
                                u = (r.max - h) / (p - h) * (f - u) + u, h = r.max
                            } else if (p >= h && p > r.max) {
                                if (h > r.max) continue;
                                f = (r.max - h) / (p - h) * (f - u) + u, p = r.max
                            }
                            if (f >= u && u < n.min) {
                                if (f < n.min) continue;
                                h = (n.min - u) / (f - u) * (p - h) + h, u = n.min
                            } else if (u >= f && f < n.min) {
                                if (u < n.min) continue;
                                p = (n.min - u) / (f - u) * (p - h) + h, f = n.min
                            }
                            if (u >= f && u > n.max) {
                                if (f > n.max) continue;
                                h = (n.max - u) / (f - u) * (p - h) + h, u = n.max
                            } else if (f >= u && f > n.max) {
                                if (u > n.max) continue;
                                p = (n.max - u) / (f - u) * (p - h) + h, f = n.max
                            }
                            u == a && h == l || lt.moveTo(n.p2c(u) + e, r.p2c(h) + i), a = f, l = p, lt.lineTo(n.p2c(f) + e, r.p2c(p) + i)
                        }
                    }
                    lt.stroke()
                }

                function i(t, e, i) {
                    for (var n = t.points, r = t.pointsize, o = Math.min(Math.max(0, i.min), i.max), s = 0, a = !1, l = 1, c = 0, u = 0;;) {
                        if (r > 0 && s > n.length + r) break;
                        s += r;
                        var h = n[s - r],
                            f = n[s - r + l],
                            p = n[s],
                            d = n[s + l];
                        if (a) {
                            if (r > 0 && null != h && null == p) {
                                u = s, r = -r, l = 2;
                                continue
                            }
                            if (0 > r && s == c + r) {
                                lt.fill(), a = !1, r = -r, l = 1, s = c = u + r;
                                continue
                            }
                        }
                        if (null != h && null != p) {
                            if (p >= h && h < e.min) {
                                if (p < e.min) continue;
                                f = (e.min - h) / (p - h) * (d - f) + f, h = e.min
                            } else if (h >= p && p < e.min) {
                                if (h < e.min) continue;
                                d = (e.min - h) / (p - h) * (d - f) + f, p = e.min
                            }
                            if (h >= p && h > e.max) {
                                if (p > e.max) continue;
                                f = (e.max - h) / (p - h) * (d - f) + f, h = e.max
                            } else if (p >= h && p > e.max) {
                                if (h > e.max) continue;
                                d = (e.max - h) / (p - h) * (d - f) + f, p = e.max
                            }
                            if (a || (lt.beginPath(), lt.moveTo(e.p2c(h), i.p2c(o)), a = !0), f >= i.max && d >= i.max) lt.lineTo(e.p2c(h), i.p2c(i.max)), lt.lineTo(e.p2c(p), i.p2c(i.max));
                            else if (f <= i.min && d <= i.min) lt.lineTo(e.p2c(h), i.p2c(i.min)), lt.lineTo(e.p2c(p), i.p2c(i.min));
                            else {
                                var m = h,
                                    g = p;
                                d >= f && f < i.min && d >= i.min ? (h = (i.min - f) / (d - f) * (p - h) + h, f = i.min) : f >= d && d < i.min && f >= i.min && (p = (i.min - f) / (d - f) * (p - h) + h, d = i.min), f >= d && f > i.max && d <= i.max ? (h = (i.max - f) / (d - f) * (p - h) + h, f = i.max) : d >= f && d > i.max && f <= i.max && (p = (i.max - f) / (d - f) * (p - h) + h, d = i.max), h != m && lt.lineTo(e.p2c(m), i.p2c(f)), lt.lineTo(e.p2c(h), i.p2c(f)), lt.lineTo(e.p2c(p), i.p2c(d)), p != g && (lt.lineTo(e.p2c(p), i.p2c(d)), lt.lineTo(e.p2c(g), i.p2c(d)))
                            }
                        }
                    }
                }
                lt.save(), lt.translate(ft.left, ft.top), lt.lineJoin = "round";
                var n = t.lines.lineWidth,
                    r = t.shadowSize;
                if (n > 0 && r > 0) {
                    lt.lineWidth = r, lt.strokeStyle = "rgba(0,0,0,0.1)";
                    var o = Math.PI / 18;
                    e(t.datapoints, Math.sin(o) * (n / 2 + r / 2), Math.cos(o) * (n / 2 + r / 2), t.xaxis, t.yaxis), lt.lineWidth = r / 2, e(t.datapoints, Math.sin(o) * (n / 2 + r / 4), Math.cos(o) * (n / 2 + r / 4), t.xaxis, t.yaxis)
                }
                lt.lineWidth = n, lt.strokeStyle = t.color;
                var s = q(t.lines, t.color, 0, dt);
                s && (lt.fillStyle = s, i(t.datapoints, t.xaxis, t.yaxis)), n > 0 && e(t.datapoints, 0, 0, t.xaxis, t.yaxis), lt.restore()
            }

            function F(t) {
                function e(t, e, i, n, r, o, s, a) {
                    for (var l = t.points, c = t.pointsize, u = 0; u < l.length; u += c) {
                        var h = l[u],
                            f = l[u + 1];
                        null == h || h < o.min || h > o.max || f < s.min || f > s.max || (lt.beginPath(), h = o.p2c(h), f = s.p2c(f) + n, "circle" == a ? lt.arc(h, f, e, 0, r ? Math.PI : 2 * Math.PI, !1) : a(lt, h, f, e, r), lt.closePath(), i && (lt.fillStyle = i, lt.fill()), lt.stroke())
                    }
                }
                lt.save(), lt.translate(ft.left, ft.top);
                var i = t.points.lineWidth,
                    n = t.shadowSize,
                    r = t.points.radius,
                    o = t.points.symbol;
                if (0 == i && (i = 1e-4), i > 0 && n > 0) {
                    var s = n / 2;
                    lt.lineWidth = s, lt.strokeStyle = "rgba(0,0,0,0.1)", e(t.datapoints, r, null, s + s / 2, !0, t.xaxis, t.yaxis, o), lt.strokeStyle = "rgba(0,0,0,0.2)", e(t.datapoints, r, null, s / 2, !0, t.xaxis, t.yaxis, o)
                }
                lt.lineWidth = i, lt.strokeStyle = t.color, e(t.datapoints, r, q(t.points, t.color), 0, !1, t.xaxis, t.yaxis, o), lt.restore()
            }

            function z(t, e, i, n, r, o, s, a, l, c, u) {
                var h, f, p, d, m, g, v, y, _;
                c ? (y = g = v = !0, m = !1, h = i, f = t, d = e + n, p = e + r, h > f && (_ = f, f = h, h = _, m = !0, g = !1)) : (m = g = v = !0, y = !1, h = t + n, f = t + r, p = i, d = e, p > d && (_ = d, d = p, p = _, y = !0, v = !1)), f < s.min || h > s.max || d < a.min || p > a.max || (h < s.min && (h = s.min, m = !1), f > s.max && (f = s.max, g = !1), p < a.min && (p = a.min, y = !1), d > a.max && (d = a.max, v = !1), h = s.p2c(h), p = a.p2c(p), f = s.p2c(f), d = a.p2c(d), o && (l.fillStyle = o(p, d), l.fillRect(h, d, f - h, p - d)), u > 0 && (m || g || v || y) && (l.beginPath(), l.moveTo(h, p), m ? l.lineTo(h, d) : l.moveTo(h, d), v ? l.lineTo(f, d) : l.moveTo(f, d), g ? l.lineTo(f, p) : l.moveTo(f, p), y ? l.lineTo(h, p) : l.moveTo(h, p), l.stroke()))
            }

            function W(t) {
                function e(e, i, n, r, o, s) {
                    for (var a = e.points, l = e.pointsize, c = 0; c < a.length; c += l) null != a[c] && z(a[c], a[c + 1], a[c + 2], i, n, r, o, s, lt, t.bars.horizontal, t.bars.lineWidth)
                }
                lt.save(), lt.translate(ft.left, ft.top), lt.lineWidth = t.bars.lineWidth, lt.strokeStyle = t.color;
                var i;
                switch (t.bars.align) {
                    case "left":
                        i = 0;
                        break;
                    case "right":
                        i = -t.bars.barWidth;
                        break;
                    default:
                        i = -t.bars.barWidth / 2
                }
                var n = t.bars.fill ? function(e, i) {
                    return q(t.bars, t.color, e, i)
                } : null;
                e(t.datapoints, i, i + t.bars.barWidth, n, t.xaxis, t.yaxis), lt.restore()
            }

            function q(e, i, n, r) {
                var o = e.fill;
                if (!o) return null;
                if (e.fillColor) return it(e.fillColor, n, r, i);
                var s = t.color.parse(i);
                return s.a = "number" == typeof o ? o : .4, s.normalize(), s.toString()
            }

            function H() {
                if (null != rt.legend.container ? t(rt.legend.container).html("") : i.find(".legend").remove(), rt.legend.show) {
                    for (var e, n, r = [], o = [], s = !1, a = rt.legend.labelFormatter, l = 0; l < nt.length; ++l) e = nt[l], e.label && (n = a ? a(e.label, e) : e.label, n && o.push({
                        label: n,
                        color: e.color
                    }));
                    if (rt.legend.sorted)
                        if (t.isFunction(rt.legend.sorted)) o.sort(rt.legend.sorted);
                        else if ("reverse" == rt.legend.sorted) o.reverse();
                    else {
                        var c = "descending" != rt.legend.sorted;
                        o.sort(function(t, e) {
                            return t.label == e.label ? 0 : t.label < e.label != c ? 1 : -1
                        })
                    }
                    for (var l = 0; l < o.length; ++l) {
                        var u = o[l];
                        l % rt.legend.noColumns == 0 && (s && r.push("</tr>"), r.push("<tr>"), s = !0), r.push('<td class="legendColorBox"><div style="border:1px solid ' + rt.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + u.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + u.label + "</td>")
                    }
                    if (s && r.push("</tr>"), 0 != r.length) {
                        var h = '<table style="font-size:smaller;color:' + rt.grid.color + '">' + r.join("") + "</table>";
                        if (null != rt.legend.container) t(rt.legend.container).html(h);
                        else {
                            var f = "",
                                p = rt.legend.position,
                                d = rt.legend.margin;
                            null == d[0] && (d = [d, d]), "n" == p.charAt(0) ? f += "top:" + (d[1] + ft.top) + "px;" : "s" == p.charAt(0) && (f += "bottom:" + (d[1] + ft.bottom) + "px;"), "e" == p.charAt(1) ? f += "right:" + (d[0] + ft.right) + "px;" : "w" == p.charAt(1) && (f += "left:" + (d[0] + ft.left) + "px;");
                            var m = t('<div class="legend">' + h.replace('style="', 'style="position:absolute;' + f + ";") + "</div>").appendTo(i);
                            if (0 != rt.legend.backgroundOpacity) {
                                var g = rt.legend.backgroundColor;
                                null == g && (g = rt.grid.backgroundColor, g = g && "string" == typeof g ? t.color.parse(g) : t.color.extract(m, "background-color"), g.a = 1, g = g.toString());
                                var v = m.children();
                                t('<div style="position:absolute;width:' + v.width() + "px;height:" + v.height() + "px;" + f + "background-color:" + g + ';"> </div>').prependTo(m).css("opacity", rt.legend.backgroundOpacity)
                            }
                        }
                    }
                }
            }

            function B(t, e, i) {
                var n, r, o, s = rt.grid.mouseActiveRadius,
                    a = s * s + 1,
                    l = null;
                for (n = nt.length - 1; n >= 0; --n)
                    if (i(nt[n])) {
                        var c = nt[n],
                            u = c.xaxis,
                            h = c.yaxis,
                            f = c.datapoints.points,
                            p = u.c2p(t),
                            d = h.c2p(e),
                            m = s / u.scale,
                            g = s / h.scale;
                        if (o = c.datapoints.pointsize, u.options.inverseTransform && (m = Number.MAX_VALUE), h.options.inverseTransform && (g = Number.MAX_VALUE), c.lines.show || c.points.show)
                            for (r = 0; r < f.length; r += o) {
                                var v = f[r],
                                    y = f[r + 1];
                                if (null != v && !(v - p > m || -m > v - p || y - d > g || -g > y - d)) {
                                    var _ = Math.abs(u.p2c(v) - t),
                                        x = Math.abs(h.p2c(y) - e),
                                        b = _ * _ + x * x;
                                    a > b && (a = b, l = [n, r / o])
                                }
                            }
                        if (c.bars.show && !l) {
                            var w, T;
                            switch (c.bars.align) {
                                case "left":
                                    w = 0;
                                    break;
                                case "right":
                                    w = -c.bars.barWidth;
                                    break;
                                default:
                                    w = -c.bars.barWidth / 2
                            }
                            for (T = w + c.bars.barWidth, r = 0; r < f.length; r += o) {
                                var v = f[r],
                                    y = f[r + 1],
                                    k = f[r + 2];
                                null != v && (nt[n].bars.horizontal ? p <= Math.max(k, v) && p >= Math.min(k, v) && d >= y + w && y + T >= d : p >= v + w && v + T >= p && d >= Math.min(k, y) && d <= Math.max(k, y)) && (l = [n, r / o])
                            }
                        }
                    }
                return l ? (n = l[0], r = l[1], o = nt[n].datapoints.pointsize, {
                    datapoint: nt[n].datapoints.points.slice(r * o, (r + 1) * o),
                    dataIndex: r,
                    series: nt[n],
                    seriesIndex: n
                }) : null
            }

            function X(t) {
                rt.grid.hoverable && V("plothover", t, function(t) {
                    return 0 != t.hoverable
                })
            }

            function U(t) {
                rt.grid.hoverable && V("plothover", t, function(t) {
                    return !1
                })
            }

            function Y(t) {
                V("plotclick", t, function(t) {
                    return 0 != t.clickable
                })
            }

            function V(t, e, n) {
                var r = at.offset(),
                    o = e.pageX - r.left - ft.left,
                    s = e.pageY - r.top - ft.top,
                    a = d({
                        left: o,
                        top: s
                    });
                a.pageX = e.pageX, a.pageY = e.pageY;
                var l = B(o, s, n);
                if (l && (l.pageX = parseInt(l.series.xaxis.p2c(l.datapoint[0]) + r.left + ft.left, 10), l.pageY = parseInt(l.series.yaxis.p2c(l.datapoint[1]) + r.top + ft.top, 10)), rt.grid.autoHighlight) {
                    for (var c = 0; c < vt.length; ++c) {
                        var u = vt[c];
                        u.auto != t || l && u.series == l.series && u.point[0] == l.datapoint[0] && u.point[1] == l.datapoint[1] || J(u.series, u.point)
                    }
                    l && Z(l.series, l.datapoint, t)
                }
                i.trigger(t, [a, l])
            }

            function Q() {
                var t = rt.interaction.redrawOverlayInterval;
                return -1 == t ? void G() : void(yt || (yt = setTimeout(G, t)))
            }

            function G() {
                yt = null, ct.save(), st.clear(), ct.translate(ft.left, ft.top);
                var t, e;
                for (t = 0; t < vt.length; ++t) e = vt[t], e.series.bars.show ? et(e.series, e.point) : tt(e.series, e.point);
                ct.restore(), a(mt.drawOverlay, [ct])
            }

            function Z(t, e, i) {
                if ("number" == typeof t && (t = nt[t]), "number" == typeof e) {
                    var n = t.datapoints.pointsize;
                    e = t.datapoints.points.slice(n * e, n * (e + 1))
                }
                var r = K(t, e); - 1 == r ? (vt.push({
                    series: t,
                    point: e,
                    auto: i
                }), Q()) : i || (vt[r].auto = !1)
            }

            function J(t, e) {
                if (null == t && null == e) return vt = [], void Q();
                if ("number" == typeof t && (t = nt[t]), "number" == typeof e) {
                    var i = t.datapoints.pointsize;
                    e = t.datapoints.points.slice(i * e, i * (e + 1))
                }
                var n = K(t, e); - 1 != n && (vt.splice(n, 1), Q())
            }

            function K(t, e) {
                for (var i = 0; i < vt.length; ++i) {
                    var n = vt[i];
                    if (n.series == t && n.point[0] == e[0] && n.point[1] == e[1]) return i
                }
                return -1
            }

            function tt(e, i) {
                var n = i[0],
                    r = i[1],
                    o = e.xaxis,
                    s = e.yaxis,
                    a = "string" == typeof e.highlightColor ? e.highlightColor : t.color.parse(e.color).scale("a", .5).toString();
                if (!(n < o.min || n > o.max || r < s.min || r > s.max)) {
                    var l = e.points.radius + e.points.lineWidth / 2;
                    ct.lineWidth = l, ct.strokeStyle = a;
                    var c = 1.5 * l;
                    n = o.p2c(n), r = s.p2c(r), ct.beginPath(), "circle" == e.points.symbol ? ct.arc(n, r, c, 0, 2 * Math.PI, !1) : e.points.symbol(ct, n, r, c, !1), ct.closePath(), ct.stroke()
                }
            }

            function et(e, i) {
                var n, r = "string" == typeof e.highlightColor ? e.highlightColor : t.color.parse(e.color).scale("a", .5).toString(),
                    o = r;
                switch (e.bars.align) {
                    case "left":
                        n = 0;
                        break;
                    case "right":
                        n = -e.bars.barWidth;
                        break;
                    default:
                        n = -e.bars.barWidth / 2
                }
                ct.lineWidth = e.bars.lineWidth, ct.strokeStyle = r, z(i[0], i[1], i[2] || 0, n, n + e.bars.barWidth, function() {
                    return o
                }, e.xaxis, e.yaxis, ct, e.bars.horizontal, e.bars.lineWidth)
            }

            function it(e, i, n, r) {
                if ("string" == typeof e) return e;
                for (var o = lt.createLinearGradient(0, n, 0, i), s = 0, a = e.colors.length; a > s; ++s) {
                    var l = e.colors[s];
                    if ("string" != typeof l) {
                        var c = t.color.parse(r);
                        null != l.brightness && (c = c.scale("rgb", l.brightness)), null != l.opacity && (c.a *= l.opacity), l = c.toString()
                    }
                    o.addColorStop(s / (a - 1), l)
                }
                return o
            }
            var nt = [],
                rt = {
                    colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                    legend: {
                        show: !0,
                        noColumns: 1,
                        labelFormatter: null,
                        labelBoxBorderColor: "#ccc",
                        container: null,
                        position: "ne",
                        margin: 5,
                        backgroundColor: null,
                        backgroundOpacity: .85,
                        sorted: null
                    },
                    xaxis: {
                        show: null,
                        position: "bottom",
                        mode: null,
                        font: null,
                        color: null,
                        tickColor: null,
                        transform: null,
                        inverseTransform: null,
                        min: null,
                        max: null,
                        autoscaleMargin: null,
                        ticks: null,
                        tickFormatter: null,
                        labelWidth: null,
                        labelHeight: null,
                        reserveSpace: null,
                        tickLength: null,
                        alignTicksWithAxis: null,
                        tickDecimals: null,
                        tickSize: null,
                        minTickSize: null
                    },
                    yaxis: {
                        autoscaleMargin: .02,
                        position: "left"
                    },
                    xaxes: [],
                    yaxes: [],
                    series: {
                        points: {
                            show: !1,
                            radius: 3,
                            lineWidth: 2,
                            fill: !0,
                            fillColor: "#ffffff",
                            symbol: "circle"
                        },
                        lines: {
                            lineWidth: 2,
                            fill: !1,
                            fillColor: null,
                            steps: !1
                        },
                        bars: {
                            show: !1,
                            lineWidth: 2,
                            barWidth: 1,
                            fill: !0,
                            fillColor: null,
                            align: "left",
                            horizontal: !1,
                            zero: !0
                        },
                        shadowSize: 3,
                        highlightColor: null
                    },
                    grid: {
                        show: !0,
                        aboveData: !1,
                        color: "#545454",
                        backgroundColor: null,
                        borderColor: null,
                        tickColor: null,
                        margin: 0,
                        labelMargin: 5,
                        axisMargin: 8,
                        borderWidth: 2,
                        minBorderMargin: null,
                        markings: null,
                        markingsColor: "#f4f4f4",
                        markingsLineWidth: 2,
                        clickable: !1,
                        hoverable: !1,
                        autoHighlight: !0,
                        mouseActiveRadius: 10
                    },
                    interaction: {
                        redrawOverlayInterval: 1e3 / 60
                    },
                    hooks: {}
                },
                ot = null,
                st = null,
                at = null,
                lt = null,
                ct = null,
                ut = [],
                ht = [],
                ft = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                pt = 0,
                dt = 0,
                mt = {
                    processOptions: [],
                    processRawData: [],
                    processDatapoints: [],
                    processOffset: [],
                    drawBackground: [],
                    drawSeries: [],
                    draw: [],
                    bindEvents: [],
                    drawOverlay: [],
                    shutdown: []
                },
                gt = this;
            gt.setData = u, gt.setupGrid = P, gt.draw = N, gt.getPlaceholder = function() {
                return i
            }, gt.getCanvas = function() {
                return ot.element
            }, gt.getPlotOffset = function() {
                return ft
            }, gt.width = function() {
                return pt
            }, gt.height = function() {
                return dt
            }, gt.offset = function() {
                var t = at.offset();
                return t.left += ft.left, t.top += ft.top, t
            }, gt.getData = function() {
                return nt
            }, gt.getAxes = function() {
                var e = {};
                return t.each(ut.concat(ht), function(t, i) {
                    i && (e[i.direction + (1 != i.n ? i.n : "") + "axis"] = i)
                }), e
            }, gt.getXAxes = function() {
                return ut
            }, gt.getYAxes = function() {
                return ht
            }, gt.c2p = d, gt.p2c = m, gt.getOptions = function() {
                return rt
            }, gt.highlight = Z, gt.unhighlight = J, gt.triggerRedrawOverlay = Q, gt.pointOffset = function(t) {
                return {
                    left: parseInt(ut[f(t, "x") - 1].p2c(+t.x) + ft.left, 10),
                    top: parseInt(ht[f(t, "y") - 1].p2c(+t.y) + ft.top, 10)
                }
            }, gt.shutdown = b, gt.destroy = function() {
                b(), i.removeData("plot").empty(), nt = [], rt = null, ot = null, st = null, at = null, lt = null, ct = null, ut = [], ht = [], mt = null, vt = [], gt = null
            }, gt.resize = function() {
                var t = i.width(),
                    e = i.height();
                ot.resize(t, e), st.resize(t, e)
            }, gt.hooks = mt, l(gt), c(o), _(), u(r), P(), N(), x();
            var vt = [],
                yt = null
        }

        function n(t, e) {
            return e * Math.floor(t / e)
        }
        var r = Object.prototype.hasOwnProperty;
        t.fn.detach || (t.fn.detach = function() {
            return this.each(function() {
                this.parentNode && this.parentNode.removeChild(this)
            })
        }), e.prototype.resize = function(t, e) {
            if (0 >= t || 0 >= e) throw new Error("Invalid dimensions for plot, width = " + t + ", height = " + e);
            var i = this.element,
                n = this.context,
                r = this.pixelRatio;
            this.width != t && (i.width = t * r, i.style.width = t + "px", this.width = t), this.height != e && (i.height = e * r, i.style.height = e + "px", this.height = e), n.restore(), n.save(), n.scale(r, r)
        }, e.prototype.clear = function() {
            this.context.clearRect(0, 0, this.width, this.height)
        }, e.prototype.render = function() {
            var t = this._textCache;
            for (var e in t)
                if (r.call(t, e)) {
                    var i = this.getTextLayer(e),
                        n = t[e];
                    i.hide();
                    for (var o in n)
                        if (r.call(n, o)) {
                            var s = n[o];
                            for (var a in s)
                                if (r.call(s, a)) {
                                    for (var l, c = s[a].positions, u = 0; l = c[u]; u++) l.active ? l.rendered || (i.append(l.element), l.rendered = !0) : (c.splice(u--, 1), l.rendered && l.element.detach());
                                    0 == c.length && delete s[a]
                                }
                        }
                    i.show()
                }
        }, e.prototype.getTextLayer = function(e) {
            var i = this.text[e];
            return null == i && (null == this.textContainer && (this.textContainer = t("<div class='flot-text'></div>").css({
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                "font-size": "smaller",
                color: "#545454"
            }).insertAfter(this.element)), i = this.text[e] = t("<div></div>").addClass(e).css({
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            }).appendTo(this.textContainer)), i
        }, e.prototype.getTextInfo = function(e, i, n, r, o) {
            var s, a, l, c;
            if (i = "" + i, s = "object" == typeof n ? n.style + " " + n.variant + " " + n.weight + " " + n.size + "px/" + n.lineHeight + "px " + n.family : n, a = this._textCache[e],
                null == a && (a = this._textCache[e] = {}), l = a[s], null == l && (l = a[s] = {}), c = l[i], null == c) {
                var u = t("<div></div>").html(i).css({
                    position: "absolute",
                    "max-width": o,
                    top: -9999
                }).appendTo(this.getTextLayer(e));
                "object" == typeof n ? u.css({
                    font: s,
                    color: n.color
                }) : "string" == typeof n && u.addClass(n), c = l[i] = {
                    width: u.outerWidth(!0),
                    height: u.outerHeight(!0),
                    element: u,
                    positions: []
                }, u.detach()
            }
            return c
        }, e.prototype.addText = function(t, e, i, n, r, o, s, a, l) {
            var c = this.getTextInfo(t, n, r, o, s),
                u = c.positions;
            "center" == a ? e -= c.width / 2 : "right" == a && (e -= c.width), "middle" == l ? i -= c.height / 2 : "bottom" == l && (i -= c.height);
            for (var h, f = 0; h = u[f]; f++)
                if (h.x == e && h.y == i) return void(h.active = !0);
            h = {
                active: !0,
                rendered: !1,
                element: u.length ? c.element.clone() : c.element,
                x: e,
                y: i
            }, u.push(h), h.element.css({
                top: Math.round(i),
                left: Math.round(e),
                "text-align": a
            })
        }, e.prototype.removeText = function(t, e, i, n, o, s) {
            if (null == n) {
                var a = this._textCache[t];
                if (null != a)
                    for (var l in a)
                        if (r.call(a, l)) {
                            var c = a[l];
                            for (var u in c)
                                if (r.call(c, u))
                                    for (var h, f = c[u].positions, p = 0; h = f[p]; p++) h.active = !1
                        }
            } else
                for (var h, f = this.getTextInfo(t, n, o, s).positions, p = 0; h = f[p]; p++) h.x == e && h.y == i && (h.active = !1)
        }, t.plot = function(e, n, r) {
            var o = new i(t(e), n, r, t.plot.plugins);
            return o
        }, t.plot.version = "0.8.3", t.plot.plugins = [], t.fn.plot = function(e, i) {
            return this.each(function() {
                t.plot(this, e, i)
            })
        }
    }(jQuery),
    function(t, e, i) {
        "$:nomunge";

        function n(i) {
            a === !0 && (a = i || 1);
            for (var l = o.length - 1; l >= 0; l--) {
                var f = t(o[l]);
                if (f[0] == e || f.is(":visible")) {
                    var p = f.width(),
                        d = f.height(),
                        m = f.data(u);
                    !m || p === m.w && d === m.h || (f.trigger(c, [m.w = p, m.h = d]), a = i || !0)
                } else m = f.data(u), m.w = 0, m.h = 0
            }
            null !== r && (a && (null == i || 1e3 > i - a) ? r = e.requestAnimationFrame(n) : (r = setTimeout(n, s[h]), a = !1))
        }
        var r, o = [],
            s = t.resize = t.extend(t.resize, {}),
            a = !1,
            l = "setTimeout",
            c = "resize",
            u = c + "-special-event",
            h = "pendingDelay",
            f = "activeDelay",
            p = "throttleWindow";
        s[h] = 200, s[f] = 20, s[p] = !0, t.event.special[c] = {
            setup: function() {
                if (!s[p] && this[l]) return !1;
                var e = t(this);
                o.push(this), e.data(u, {
                    w: e.width(),
                    h: e.height()
                }), 1 === o.length && (r = i, n())
            },
            teardown: function() {
                if (!s[p] && this[l]) return !1;
                for (var e = t(this), i = o.length - 1; i >= 0; i--)
                    if (o[i] == this) {
                        o.splice(i, 1);
                        break
                    }
                e.removeData(u), o.length || (a ? cancelAnimationFrame(r) : clearTimeout(r), r = null)
            },
            add: function(e) {
                function n(e, n, o) {
                    var s = t(this),
                        a = s.data(u) || {};
                    a.w = n !== i ? n : s.width(), a.h = o !== i ? o : s.height(), r.apply(this, arguments)
                }
                if (!s[p] && this[l]) return !1;
                var r;
                return t.isFunction(e) ? (r = e, n) : (r = e.handler, void(e.handler = n))
            }
        }, e.requestAnimationFrame || (e.requestAnimationFrame = function() {
            return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t, i) {
                return e.setTimeout(function() {
                    t((new Date).getTime())
                }, s[f])
            }
        }()), e.cancelAnimationFrame || (e.cancelAnimationFrame = function() {
            return e.webkitCancelRequestAnimationFrame || e.mozCancelRequestAnimationFrame || e.oCancelRequestAnimationFrame || e.msCancelRequestAnimationFrame || clearTimeout
        }())
    }(jQuery, this),
    function(t) {
        function e(t) {
            function e() {
                var e = t.getPlaceholder();
                0 != e.width() && 0 != e.height() && (t.resize(), t.setupGrid(), t.draw())
            }

            function i(t, i) {
                t.getPlaceholder().resize(e)
            }

            function n(t, i) {
                t.getPlaceholder().unbind("resize", e)
            }
            t.hooks.bindEvents.push(i), t.hooks.shutdown.push(n)
        }
        var i = {};
        t.plot.plugins.push({
            init: e,
            options: i,
            name: "resize",
            version: "1.0"
        })
    }(jQuery),
    function(t) {
        "use strict";
        t.fn.counterUp = function(e) {
            var i = t.extend({
                time: 400,
                delay: 10
            }, e);
            return this.each(function() {
                var e = t(this),
                    n = i,
                    r = function() {
                        var t = [],
                            i = n.time / n.delay,
                            r = e.text(),
                            o = /[0-9]+,[0-9]+/.test(r);
                        r = r.replace(/,/g, "");
                        for (var s = (/^[0-9]+$/.test(r), /^[0-9]+\.[0-9]+$/.test(r)), a = s ? (r.split(".")[1] || []).length : 0, l = i; l >= 1; l--) {
                            var c = parseInt(r / i * l);
                            if (s && (c = parseFloat(r / i * l).toFixed(a)), o)
                                for (;
                                    /(\d+)(\d{3})/.test(c.toString());) c = c.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                            t.unshift(c)
                        }
                        e.data("counterup-nums", t), e.text("0");
                        var u = function() {
                            e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), n.delay) : (delete e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null))
                        };
                        e.data("counterup-func", u), setTimeout(e.data("counterup-func"), n.delay)
                    };
                e.waypoint(r, {
                    offset: "100%",
                    triggerOnce: !0
                })
            })
        }
    }(jQuery);
var $wrapper = $(".wrapper"),
    $loading = $("#loading"),
    $window = $(window),
    $header = $(".header-fixed .header-sticky"),
    $counter = $(".counter"),
    $companyInfoArea = $("#company-info"),
    $companyInfo = $(".service"),
    $organizationArea = $("#organization"),
    $organization = $("#organization-chart"),
    $barGraphArea = $("#graph"),
    $barGraph = $("#bar-graph"),
    $clinetsArea = $(".job-partners"),
    $clinets = $(".our-clients li"),
    $history = $(".timeline-v1 li");
$wrapper.jpreLoader({
    loaderVPos: "50%",
    autoClose: !0
}, function() {
    handleFastClick(), handleHeader(), handleCounter(), handleHover(), handleFlot(), handleAnimation(), TweenMax.to($wrapper, .7, {
        opacity: 1
    }), $loading.fadeOut("fast", startAnimation)
});
var handleFastClick = function() {
        FastClick.attach(document.body)
    },
    handleHeader = function() {
        $window.scroll(function() {
            $window.scrollTop() > 100 ? $header.addClass("header-fixed-shrink") : $header.removeClass("header-fixed-shrink")
        })
    },
    handleCounter = function() {
        $counter.counterUp({
            delay: 10,
            time: 1e3
        })
    },
    handleHover = function() {
        Modernizr.touch && [].slice.call(document.querySelectorAll("figure")).forEach(function(t, e) {
            var i = !1;
            t.addEventListener("touchmove", function(t) {
                t.stopPropagation(), i = !0
            }), t.addEventListener("touchstart", function(t) {
                t.stopPropagation(), i = !1
            }), t.addEventListener("touchend", function(e) {
                e.stopPropagation(), 0 == i && ($(t).addClass("hover"), setTimeout(function() {
                    $(t).removeClass("hover")
                }, 3e3))
            })
        })
    },
    handleFlot = function() {
        $.plot($("#bar-graph"), [{
            label: "　社員数（人）",
            data: [
                [19, 5],
                [20, 22],
                [21, 14],
                [22, 30],
                [23, 60],
                [24, 90],
                [25, 135],
                [26, 185]
            ],
            lines: {
                show: !0
            },
            points: {
                show: !0
            },
            yaxis: 1
        }, {
            label: "　売上（百万円）",
            data: [
                [19, 30],
                [20, 160],
                [21, 80],
                [22, 200],
                [23, 360],
                [24, 630],
                [25, 1070],
                [26, 1700]
            ],
            bars: {
                show: !0,
                barWidth: .6,
                align: "center"
            },
            yaxis: 2
        }], {
            yaxes: [{
                min: 0,
                max: 200,
                position: "right"
            }, {
                min: 0,
                max: 2e3,
                position: "left"
            }],
            xaxis: {
                tickDecimals: 0,
                tickFormatter: function(t, e) {
                    return "H" + t.toFixed(e.tickDecimals) + "年度"
                }
            },
            grid: {
                hoverable: !0,
                clickable: !0
            },
            legend: {
                noColumns: 1,
                position: "nw"
            }
        })
    },
    handleAnimation = function() {
        TweenMax.set([$companyInfoArea, $organizationArea, $barGraphArea, $clinetsArea], {
            perspective: 800
        }), TweenMax.set($companyInfo, {
            transformPerspective: 800,
            rotationX: 90,
            autoAlpha: 0
        }), TweenMax.set($organization, {
            transformPerspective: 800,
            rotationX: 90,
            autoAlpha: 0
        }), TweenMax.set($barGraph, {
            transformPerspective: 800,
            rotationX: 90,
            autoAlpha: 0
        }), TweenMax.set($clinets, {
            transformPerspective: 800,
            rotationY: 180,
            autoAlpha: 0
        }), TweenMax.set($history, {
            y: "+=80",
            autoAlpha: 0
        })
    },
    startAnimation = function() {
        $companyInfoArea.waypoint(function() {
            TweenMax.staggerTo($companyInfo, .5, {
                rotationX: 0,
                autoAlpha: 1
            }, .3)
        }, {
            offset: "100%",
            triggerOnce: !0
        }), $organizationArea.waypoint(function() {
            TweenMax.to($organization, .5, {
                rotationX: 0,
                autoAlpha: 1
            })
        }, {
            offset: "70%",
            triggerOnce: !0
        }), $barGraphArea.waypoint(function() {
            TweenMax.to($barGraph, .5, {
                rotationX: 0,
                autoAlpha: 1
            })
        }, {
            offset: "70%",
            triggerOnce: !0
        }), $clinetsArea.waypoint(function() {
            TweenMax.staggerTo($clinets, .5, {
                rotationY: 0,
                autoAlpha: 1
            }, .3)
        }, {
            offset: "70%",
            triggerOnce: !0
        }), $history.each(function() {
            var t = $(this);
            t.waypoint(function() {
                TweenMax.to(t, 1, {
                    y: 0,
                    autoAlpha: 1
                })
            }, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    };
