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

        function s(t) {
            var e = dt[t] = {};
            return K.each(t.match(ft) || [], function(t, i) {
                e[i] = !0
            }), e
        }

        function o() {
            Z.removeEventListener("DOMContentLoaded", o, !1), t.removeEventListener("load", o, !1), K.ready()
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
                if (n = "data-" + e.replace(bt, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : yt.test(i) ? K.parseJSON(i) : i
                    } catch (r) {}
                    _t.set(t, e, i)
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
            return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function f(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function d(t) {
            var e = Lt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function m(t, e) {
            for (var i = 0, n = t.length; n > i; i++) vt.set(t[i], "globalEval", !e || vt.get(e[i], "globalEval"))
        }

        function g(t, e) {
            var i, n, r, s, o, a, l, h;
            if (1 === e.nodeType) {
                if (vt.hasData(t) && (s = vt.access(t), o = vt.set(e, s), h = s.events)) {
                    delete o.handle, o.events = {};
                    for (r in h)
                        for (i = 0, n = h[r].length; n > i; i++) K.event.add(e, r, h[r][i])
                }
                _t.hasData(t) && (a = _t.access(t), l = K.extend({}, a), _t.set(e, l))
            }
        }

        function v(t, e) {
            var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && K.nodeName(t, e) ? K.merge([t], i) : i
        }

        function _(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && Ct.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function y(e, i) {
            var n, r = K(i.createElement(e)).appendTo(i.body),
                s = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : K.css(r[0], "display");
            return r.detach(), s
        }

        function b(t) {
            var e = Z,
                i = zt[t];
            return i || (i = y(t, e), "none" !== i && i || (Ft = (Ft || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ft[0].contentDocument, e.write(), e.close(), i = y(t, e), Ft.detach()), zt[t] = i), i
        }

        function x(t, e, i) {
            var n, r, s, o, a = t.style;
            return i = i || Xt(t), i && (o = i.getPropertyValue(e) || i[e]), i && ("" !== o || K.contains(t.ownerDocument, t) || (o = K.style(t, e)), Ht.test(o) && qt.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
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

        function C(t, e, i) {
            var n = Wt.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }

        function S(t, e, i, n, r) {
            for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === i && (o += K.css(t, i + wt[s], !0, r)), n ? ("content" === i && (o -= K.css(t, "padding" + wt[s], !0, r)), "margin" !== i && (o -= K.css(t, "border" + wt[s] + "Width", !0, r))) : (o += K.css(t, "padding" + wt[s], !0, r), "padding" !== i && (o += K.css(t, "border" + wt[s] + "Width", !0, r)));
            return o
        }

        function k(t, e, i) {
            var n = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                s = Xt(t),
                o = "border-box" === K.css(t, "boxSizing", !1, s);
            if (0 >= r || null == r) {
                if (r = x(t, e, s), (0 > r || null == r) && (r = t.style[e]), Ht.test(r)) return r;
                n = o && (G.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + S(t, e, i || (o ? "border" : "content"), n, s) + "px"
        }

        function P(t, e) {
            for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++) n = t[o], n.style && (s[o] = vt.get(n, "olddisplay"), i = n.style.display, e ? (s[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Tt(n) && (s[o] = vt.access(n, "olddisplay", b(n.nodeName)))) : (r = Tt(n), "none" === i && r || vt.set(n, "olddisplay", r ? i : K.css(n, "display"))));
            for (o = 0; a > o; o++) n = t[o], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[o] || "" : "none"));
            return t
        }

        function E(t, e, i, n, r) {
            return new E.prototype.init(t, e, i, n, r)
        }

        function A() {
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
            for (var n, r = (ie[e] || []).concat(ie["*"]), s = 0, o = r.length; o > s; s++)
                if (n = r[s].call(i, e, t)) return n
        }

        function R(t, e, i) {
            var n, r, s, o, a, l, h, c, u = this,
                p = {},
                f = t.style,
                d = t.nodeType && Tt(t),
                m = vt.get(t, "fxshow");
            i.queue || (a = K._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, u.always(function() {
                u.always(function() {
                    a.unqueued--, K.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [f.overflow, f.overflowX, f.overflowY], h = K.css(t, "display"), c = "none" === h ? vt.get(t, "olddisplay") || b(t.nodeName) : h, "inline" === c && "none" === K.css(t, "float") && (f.display = "inline-block")), i.overflow && (f.overflow = "hidden", u.always(function() {
                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (r = e[n], Jt.exec(r)) {
                    if (delete e[n], s = s || "toggle" === r, r === (d ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[n]) continue;
                        d = !0
                    }
                    p[n] = m && m[n] || K.style(t, n)
                } else h = void 0;
            if (K.isEmptyObject(p)) "inline" === ("none" === h ? b(t.nodeName) : h) && (f.display = h);
            else {
                m ? "hidden" in m && (d = m.hidden) : m = vt.access(t, "fxshow", {}), s && (m.hidden = !d), d ? K(t).show() : u.done(function() {
                    K(t).hide()
                }), u.done(function() {
                    var e;
                    vt.remove(t, "fxshow");
                    for (e in p) K.style(t, e, p[e])
                });
                for (n in p) o = O(d ? m[n] : 0, n, u), n in m || (m[n] = o.start, d && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function N(t, e) {
            var i, n, r, s, o;
            for (i in t)
                if (n = K.camelCase(i), r = e[n], s = t[i], K.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), o = K.cssHooks[n], o && "expand" in o) {
                    s = o.expand(s), delete t[n];
                    for (i in s) i in t || (t[i] = s[i], e[i] = r)
                } else e[n] = r
        }

        function $(t, e, i) {
            var n, r, s = 0,
                o = ee.length,
                a = K.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = Gt || A(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, s = 1 - n, o = 0, l = h.tweens.length; l > o; o++) h.tweens[o].run(s);
                    return a.notifyWith(t, [h, s, i]), 1 > s && l ? i : (a.resolveWith(t, [h]), !1)
                },
                h = a.promise({
                    elem: t,
                    props: K.extend({}, e),
                    opts: K.extend(!0, {
                        specialEasing: {}
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Gt || A(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = K.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
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
            for (N(c, h.opts.specialEasing); o > s; s++)
                if (n = ee[s].call(h, t, c, h.opts)) return n;
            return K.map(c, O, h), K.isFunction(h.opts.start) && h.opts.start.call(t, h), K.fx.timer(K.extend(l, {
                elem: t,
                anim: h,
                queue: h.opts.queue
            })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
        }

        function j(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, r = 0,
                    s = e.toLowerCase().match(ft) || [];
                if (K.isFunction(i))
                    for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function L(t, e, i, n) {
            function r(a) {
                var l;
                return s[a] = !0, K.each(t[a] || [], function(t, a) {
                    var h = a(e, i, n);
                    return "string" != typeof h || o || s[h] ? o ? !(l = h) : void 0 : (e.dataTypes.unshift(h), r(h), !1)
                }), l
            }
            var s = {},
                o = t === ye;
            return r(e.dataTypes[0]) || !s["*"] && r("*")
        }

        function I(t, e) {
            var i, n, r = K.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && K.extend(!0, t, n), t
        }

        function M(t, e, i) {
            for (var n, r, s, o, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (r in a)
                    if (a[r] && a[r].test(n)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in i) s = l[0];
            else {
                for (r in i) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        s = r;
                        break
                    }
                    o || (o = r)
                }
                s = s || o
            }
            return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
        }

        function F(t, e, i, n) {
            var r, s, o, a, l, h = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (o in t.converters) h[o.toLowerCase()] = t.converters[o];
            for (s = c.shift(); s;)
                if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (o = h[l + " " + s] || h["* " + s], !o)
                    for (r in h)
                        if (a = r.split(" "), a[1] === s && (o = h[l + " " + a[0]] || h["* " + a[0]])) {
                            o === !0 ? o = h[r] : h[r] !== !0 && (s = a[0], c.unshift(a[1]));
                            break
                        }
                if (o !== !0)
                    if (o && t["throws"]) e = o(e);
                    else try {
                        e = o(e)
                    } catch (u) {
                        return {
                            state: "parsererror",
                            error: o ? u : "No conversion from " + l + " to " + s
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
                i || Ce.test(t) ? n(t, r) : z(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
            });
            else if (i || "object" !== K.type(e)) n(t, e);
            else
                for (r in e) z(t + "[" + r + "]", e[r], i, n)
        }

        function q(t) {
            return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var H = [],
            X = H.slice,
            B = H.concat,
            W = H.push,
            U = H.indexOf,
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
                return X.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : X.call(this)
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
                return this.pushStack(X.apply(this, arguments))
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
            push: W,
            sort: H.sort,
            splice: H.splice
        }, K.extend = K.fn.extend = function() {
            var t, e, i, n, r, s, o = arguments[0] || {},
                a = 1,
                l = arguments.length,
                h = !1;
            for ("boolean" == typeof o && (h = o, o = arguments[a] || {}, a++), "object" == typeof o || K.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = o[e], n = t[e], o !== n && (h && n && (K.isPlainObject(n) || (r = K.isArray(n))) ? (r ? (r = !1, s = i && K.isArray(i) ? i : []) : s = i && K.isPlainObject(i) ? i : {}, o[e] = K.extend(h, s, n)) : void 0 !== n && (o[e] = n));
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
                var r, s = 0,
                    o = t.length,
                    a = i(t);
                if (n) {
                    if (a)
                        for (; o > s && (r = e.apply(t[s], n), r !== !1); s++);
                    else
                        for (s in t)
                            if (r = e.apply(t[s], n), r === !1) break
                } else if (a)
                    for (; o > s && (r = e.call(t[s], s, t[s]), r !== !1); s++);
                else
                    for (s in t)
                        if (r = e.call(t[s], s, t[s]), r === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(tt, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? K.merge(n, "string" == typeof t ? [t] : t) : W.call(n, t)), n
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : U.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, r = t.length; i > n; n++) t[r++] = e[n];
                return t.length = r, t
            },
            grep: function(t, e, i) {
                for (var n, r = [], s = 0, o = t.length, a = !i; o > s; s++) n = !e(t[s], s), n !== a && r.push(t[s]);
                return r
            },
            map: function(t, e, n) {
                var r, s = 0,
                    o = t.length,
                    a = i(t),
                    l = [];
                if (a)
                    for (; o > s; s++) r = e(t[s], s, n), null != r && l.push(r);
                else
                    for (s in t) r = e(t[s], s, n), null != r && l.push(r);
                return B.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, r;
                return "string" == typeof e && (i = t[e], e = t, t = i), K.isFunction(t) ? (n = X.call(arguments, 2), r = function() {
                    return t.apply(e || this, n.concat(X.call(arguments)))
                }, r.guid = t.guid = t.guid || K.guid++, r) : void 0
            },
            now: Date.now,
            support: G
        }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            Y["[object " + e + "]"] = e.toLowerCase()
        });
        var rt = function(t) {
            function e(t, e, i, n) {
                var r, s, o, a, l, h, u, f, d, m;
                if ((e ? e.ownerDocument || e : z) !== R && O(e), e = e || R, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
                if (!n && $) {
                    if (11 !== a && (r = _t.exec(t)))
                        if (o = r[1]) {
                            if (9 === a) {
                                if (s = e.getElementById(o), !s || !s.parentNode) return i;
                                if (s.id === o) return i.push(s), i
                            } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(o)) && M(e, s) && s.id === o) return i.push(s), i
                        } else {
                            if (r[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                            if ((o = r[3]) && x.getElementsByClassName) return J.apply(i, e.getElementsByClassName(o)), i
                        }
                    if (x.qsa && (!j || !j.test(t))) {
                        if (f = u = F, d = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (h = S(t), (u = e.getAttribute("id")) ? f = u.replace(bt, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = h.length; l--;) h[l] = f + p(h[l]);
                            d = yt.test(t) && c(e.parentNode) || e, m = h.join(",")
                        }
                        if (m) try {
                            return J.apply(i, d.querySelectorAll(m)), i
                        } catch (g) {} finally {
                            u || e.removeAttribute("id")
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
                var e = R.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) w.attrHandle[i[n]] = e
            }

            function o(t, e) {
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
                        for (var r, s = t([], i.length, e), o = s.length; o--;) i[r = s[o]] && (i[r] = !(n[r] = i[r]))
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
                    s = H++;
                return e.first ? function(e, i, s) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) return t(e, i, s)
                } : function(e, i, o) {
                    var a, l, h = [q, s];
                    if (o) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || r) && t(e, i, o)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || r) {
                                if (l = e[F] || (e[F] = {}), (a = l[n]) && a[0] === q && a[1] === s) return h[2] = a[2];
                                if (l[n] = h, h[2] = t(e, i, o)) return !0
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
                for (var r = 0, s = i.length; s > r; r++) e(t, i[r], n);
                return n
            }

            function g(t, e, i, n, r) {
                for (var s, o = [], a = 0, l = t.length, h = null != e; l > a; a++)(s = t[a]) && (i && !i(s, n, r) || (o.push(s), h && e.push(a)));
                return o
            }

            function v(t, e, i, r, s, o) {
                return r && !r[F] && (r = v(r)), s && !s[F] && (s = v(s, o)), n(function(n, o, a, l) {
                    var h, c, u, p = [],
                        f = [],
                        d = o.length,
                        v = n || m(e || "*", a.nodeType ? [a] : a, []),
                        _ = !t || !n && e ? v : g(v, p, t, a, l),
                        y = i ? s || (n ? t : d || r) ? [] : o : _;
                    if (i && i(_, y, a, l), r)
                        for (h = g(y, f), r(h, [], a, l), c = h.length; c--;)(u = h[c]) && (y[f[c]] = !(_[f[c]] = u));
                    if (n) {
                        if (s || t) {
                            if (s) {
                                for (h = [], c = y.length; c--;)(u = y[c]) && h.push(_[c] = u);
                                s(null, y = [], h, l)
                            }
                            for (c = y.length; c--;)(u = y[c]) && (h = s ? tt(n, u) : p[c]) > -1 && (n[h] = !(o[h] = u))
                        }
                    } else y = g(y === o ? y.splice(d, y.length) : y), s ? s(null, o, y, l) : J.apply(o, y)
                })
            }

            function _(t) {
                for (var e, i, n, r = t.length, s = w.relative[t[0].type], o = s || w.relative[" "], a = s ? 1 : 0, l = f(function(t) {
                        return t === e
                    }, o, !0), h = f(function(t) {
                        return tt(e, t) > -1
                    }, o, !0), c = [function(t, i, n) {
                        var r = !s && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                        return e = null, r
                    }]; r > a; a++)
                    if (i = w.relative[t[a].type]) c = [f(d(c), i)];
                    else {
                        if (i = w.filter[t[a].type].apply(null, t[a].matches), i[F]) {
                            for (n = ++a; r > n && !w.relative[t[n].type]; n++);
                            return v(a > 1 && d(c), a > 1 && p(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(lt, "$1"), i, n > a && _(t.slice(a, n)), r > n && _(t = t.slice(n)), r > n && p(t))
                        }
                        c.push(i)
                    }
                return d(c)
            }

            function y(t, i) {
                var r = i.length > 0,
                    s = t.length > 0,
                    o = function(n, o, a, l, h) {
                        var c, u, p, f = 0,
                            d = "0",
                            m = n && [],
                            v = [],
                            _ = E,
                            y = n || s && w.find.TAG("*", h),
                            b = q += null == _ ? 1 : Math.random() || .1,
                            x = y.length;
                        for (h && (E = o !== R && o); d !== x && null != (c = y[d]); d++) {
                            if (s && c) {
                                for (u = 0; p = t[u++];)
                                    if (p(c, o, a)) {
                                        l.push(c);
                                        break
                                    }
                                h && (q = b)
                            }
                            r && ((c = !p && c) && f--, n && m.push(c))
                        }
                        if (f += d, r && d !== f) {
                            for (u = 0; p = i[u++];) p(m, v, o, a);
                            if (n) {
                                if (f > 0)
                                    for (; d--;) m[d] || v[d] || (v[d] = G.call(l));
                                v = g(v)
                            }
                            J.apply(l, v), h && !n && v.length > 0 && f + i.length > 1 && e.uniqueSort(l)
                        }
                        return h && (q = b, E = _), m
                    };
                return r ? n(o) : o
            }
            var b, x, w, T, C, S, k, P, E, A, D, O, R, N, $, j, L, I, M, F = "sizzle" + 1 * new Date,
                z = t.document,
                q = 0,
                H = 0,
                X = i(),
                B = i(),
                W = i(),
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
                st = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]",
                ot = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
                at = new RegExp(it + "+", "g"),
                lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                ht = new RegExp("^" + it + "*," + it + "*"),
                ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                ut = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                pt = new RegExp(ot),
                ft = new RegExp("^" + rt + "$"),
                dt = {
                    ID: new RegExp("^#(" + nt + ")"),
                    CLASS: new RegExp("^\\.(" + nt + ")"),
                    TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + st),
                    PSEUDO: new RegExp("^" + ot),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                mt = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                _t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                bt = /'|\\/g,
                xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                wt = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                Tt = function() {
                    O()
                };
            try {
                J.apply(Q = K.call(z.childNodes), z.childNodes), Q[z.childNodes.length].nodeType
            } catch (Ct) {
                J = {
                    apply: Q.length ? function(t, e) {
                        Z.apply(t, K.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            x = e.support = {}, C = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, O = e.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : z;
                return n !== R && 9 === n.nodeType && n.documentElement ? (R = n, N = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), $ = !C(n), x.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = r(function(t) {
                    return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = vt.test(n.getElementsByClassName), x.getById = r(function(t) {
                    return N.appendChild(t).id = F, !n.getElementsByName || !n.getElementsByName(F).length
                }), x.getById ? (w.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && $) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, w.filter.ID = function(t) {
                    var e = t.replace(xt, wt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete w.find.ID, w.filter.ID = function(t) {
                    var e = t.replace(xt, wt);
                    return function(t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), w.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        r = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, w.find.CLASS = x.getElementsByClassName && function(t, e) {
                    return $ ? e.getElementsByClassName(t) : void 0
                }, L = [], j = [], (x.qsa = vt.test(n.querySelectorAll)) && (r(function(t) {
                    N.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || j.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + F + "-]").length || j.push("~="), t.querySelectorAll(":checked").length || j.push(":checked"), t.querySelectorAll("a#" + F + "+*").length || j.push(".#.+[+~]")
                }), r(function(t) {
                    var e = n.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && j.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), j.push(",.*:")
                })), (x.matchesSelector = vt.test(I = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(t) {
                    x.disconnectedMatch = I.call(t, "div"), I.call(t, "[s!='']:x"), L.push("!=", ot)
                }), j = j.length && new RegExp(j.join("|")), L = L.length && new RegExp(L.join("|")), e = vt.test(N.compareDocumentPosition), M = e || vt.test(N.contains) ? function(t, e) {
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
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === z && M(z, t) ? -1 : e === n || e.ownerDocument === z && M(z, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return D = !0, 0;
                    var i, r = 0,
                        s = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        h = [e];
                    if (!s || !a) return t === n ? -1 : e === n ? 1 : s ? -1 : a ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                    if (s === a) return o(t, e);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (i = e; i = i.parentNode;) h.unshift(i);
                    for (; l[r] === h[r];) r++;
                    return r ? o(l[r], h[r]) : l[r] === z ? -1 : h[r] === z ? 1 : 0
                }, n) : R
            }, e.matches = function(t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== R && O(t), i = i.replace(ut, "='$1']"), x.matchesSelector && $ && (!L || !L.test(i)) && (!j || !j.test(i))) try {
                    var n = I.call(t, i);
                    if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (r) {}
                return e(i, R, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== R && O(t), M(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== R && O(t);
                var i = w.attrHandle[e.toLowerCase()],
                    n = i && V.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !$) : void 0;
                return void 0 !== n ? n : x.attributes || !$ ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    r = 0;
                if (D = !x.detectDuplicates, A = !x.sortStable && t.slice(0), t.sort(U), D) {
                    for (; e = t[r++];) e === t[r] && (n = i.push(r));
                    for (; n--;) t.splice(i[n], 1)
                }
                return A = null, t
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
                        return t[1] = t[1].replace(xt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && pt.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(xt, wt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = X[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && X(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, i, n) {
                        return function(r) {
                            var s = e.attr(r, t);
                            return null == s ? "!=" === i : i ? (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(at, " ") + " ").indexOf(n) > -1 : "|=" === i ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, i, n, r) {
                        var s = "nth" !== t.slice(0, 3),
                            o = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var h, c, u, p, f, d, m = s !== o ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                _ = !l && !a;
                            if (g) {
                                if (s) {
                                    for (; m;) {
                                        for (u = e; u = u[m];)
                                            if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        d = m = "only" === t && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [o ? g.firstChild : g.lastChild], o && _) {
                                    for (c = g[F] || (g[F] = {}), h = c[t] || [], f = h[0] === q && h[1], p = h[0] === q && h[2], u = f && g.childNodes[f]; u = ++f && u && u[m] || (p = f = 0) || d.pop();)
                                        if (1 === u.nodeType && ++p && u === e) {
                                            c[t] = [q, f, p];
                                            break
                                        }
                                } else if (_ && (h = (e[F] || (e[F] = {}))[t]) && h[0] === q) p = h[1];
                                else
                                    for (;
                                        (u = ++f && u && u[m] || (p = f = 0) || d.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++p || (_ && ((u[F] || (u[F] = {}))[t] = [q, p]), u !== e)););
                                return p -= r, p === n || p % n === 0 && p / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) {
                        var r, s = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return s[F] ? s(i) : s.length > 1 ? (r = [t, t, "", i], w.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, r = s(t, i), o = r.length; o--;) n = tt(t, r[o]), t[n] = !(e[n] = r[o])
                        }) : function(t) {
                            return s(t, 0, r)
                        }) : s
                    }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            r = k(t.replace(lt, "$1"));
                        return r[F] ? n(function(t, e, i, n) {
                            for (var s, o = r(t, null, n, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                        }) : function(t, n, s) {
                            return e[0] = t, r(e, null, s, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function(t) {
                        return t = t.replace(xt, wt),
                            function(e) {
                                return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                            }
                    }),
                    lang: n(function(t) {
                        return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, wt).toLowerCase(),
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
                        return t === N
                    },
                    focus: function(t) {
                        return t === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
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
            }, w.pseudos.nth = w.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[b] = a(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[b] = l(b);
            return u.prototype = w.filters = w.pseudos, w.setFilters = new u, S = e.tokenize = function(t, i) {
                var n, r, s, o, a, l, h, c = B[t + " "];
                if (c) return i ? 0 : c.slice(0);
                for (a = t, l = [], h = w.preFilter; a;) {
                    n && !(r = ht.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = ct.exec(a)) && (n = r.shift(), s.push({
                        value: n,
                        type: r[0].replace(lt, " ")
                    }), a = a.slice(n.length));
                    for (o in w.filter) !(r = dt[o].exec(a)) || h[o] && !(r = h[o](r)) || (n = r.shift(), s.push({
                        value: n,
                        type: o,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : B(t, l).slice(0)
            }, k = e.compile = function(t, e) {
                var i, n = [],
                    r = [],
                    s = W[t + " "];
                if (!s) {
                    for (e || (e = S(t)), i = e.length; i--;) s = _(e[i]), s[F] ? n.push(s) : r.push(s);
                    s = W(t, y(r, n)), s.selector = t
                }
                return s
            }, P = e.select = function(t, e, i, n) {
                var r, s, o, a, l, h = "function" == typeof t && t,
                    u = !n && S(t = h.selector || t);
                if (i = i || [], 1 === u.length) {
                    if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && x.getById && 9 === e.nodeType && $ && w.relative[s[1].type]) {
                        if (e = (w.find.ID(o.matches[0].replace(xt, wt), e) || [])[0], !e) return i;
                        h && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (r = dt.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !w.relative[a = o.type]);)
                        if ((l = w.find[a]) && (n = l(o.matches[0].replace(xt, wt), yt.test(s[0].type) && c(e.parentNode) || e))) {
                            if (s.splice(r, 1), t = n.length && p(s), !t) return J.apply(i, n), i;
                            break
                        }
                }
                return (h || k(t, u))(n, e, !$, i, yt.test(t) && c(e.parentNode) || e), i
            }, x.sortStable = F.split("").sort(U).join("") === F, x.detectDuplicates = !!D, O(), x.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(R.createElement("div"))
            }), r(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && r(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), r(function(t) {
                return null == t.getAttribute("disabled")
            }) || s(et, function(t, e, i) {
                var n;
                return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        K.find = rt, K.expr = rt.selectors, K.expr[":"] = K.expr.pseudos, K.unique = rt.uniqueSort, K.text = rt.getText, K.isXMLDoc = rt.isXML, K.contains = rt.contains;
        var st = K.expr.match.needsContext,
            ot = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
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
                return !!n(this, "string" == typeof t && st.test(t) ? K(t) : t || [], !1).length
            }
        });
        var lt, ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ct = K.fn.init = function(t, e) {
                var i, n;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ht.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof K ? e[0] : e, K.merge(this, K.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), ot.test(i[1]) && K.isPlainObject(e))
                            for (i in e) K.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    return n = Z.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = Z, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : K.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), K.makeArray(t, this))
            };
        ct.prototype = K.fn, lt = K(Z);
        var ut = /^(?:parents|prev(?:Until|All))/,
            pt = {
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
                for (var i, n = 0, r = this.length, s = [], o = st.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; r > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && K.find.matchesSelector(i, t))) {
                            s.push(i);
                            break
                        }
                return this.pushStack(s.length > 1 ? K.unique(s) : s)
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
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = K.filter(n, r)), this.length > 1 && (pt[t] || K.unique(r), ut.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var ft = /\S+/g,
            dt = {};
        K.Callbacks = function(t) {
            t = "string" == typeof t ? dt[t] || s(t) : K.extend({}, t);
            var e, i, n, r, o, a, l = [],
                h = !t.once && [],
                c = function(s) {
                    for (e = t.memory && s, i = !0, a = r || 0, r = 0, o = l.length, n = !0; l && o > a; a++)
                        if (l[a].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
                            e = !1;
                            break
                        }
                    n = !1, l && (h ? h.length && c(h.shift()) : e ? l = [] : u.disable())
                },
                u = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function s(e) {
                                K.each(e, function(e, i) {
                                    var n = K.type(i);
                                    "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && s(i)
                                })
                            }(arguments), n ? o = l.length : e && (r = i, c(e))
                        }
                        return this
                    },
                    remove: function() {
                        return l && K.each(arguments, function(t, e) {
                            for (var i;
                                (i = K.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (o >= i && o--, a >= i && a--)
                        }), this
                    },
                    has: function(t) {
                        return t ? K.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], o = 0, this
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
                                K.each(e, function(e, s) {
                                    var o = K.isFunction(t[e]) && t[e];
                                    r[s[1]](function() {
                                        var t = o && o.apply(this, arguments);
                                        t && K.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? K.extend(t, n) : n
                        }
                    },
                    r = {};
                return n.pipe = n.then, K.each(e, function(t, s) {
                    var o = s[2],
                        a = s[3];
                    n[s[1]] = o.add, a && o.add(function() {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() {
                        return r[s[0] + "With"](this === r ? n : this, arguments), this
                    }, r[s[0] + "With"] = o.fireWith
                }), n.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, i, n, r = 0,
                    s = X.call(arguments),
                    o = s.length,
                    a = 1 !== o || t && K.isFunction(t.promise) ? o : 0,
                    l = 1 === a ? t : K.Deferred(),
                    h = function(t, i, n) {
                        return function(r) {
                            i[t] = this, n[t] = arguments.length > 1 ? X.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (o > 1)
                    for (e = new Array(o), i = new Array(o), n = new Array(o); o > r; r++) s[r] && K.isFunction(s[r].promise) ? s[r].promise().done(h(r, n, s)).fail(l.reject).progress(h(r, i, e)) : --a;
                return a || l.resolveWith(n, s), l.promise()
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
            return mt || (mt = K.Deferred(), "complete" === Z.readyState ? setTimeout(K.ready) : (Z.addEventListener("DOMContentLoaded", o, !1), t.addEventListener("load", o, !1))), mt.promise(e)
        }, K.ready.promise();
        var gt = K.access = function(t, e, i, n, r, s, o) {
            var a = 0,
                l = t.length,
                h = null == i;
            if ("object" === K.type(i)) {
                r = !0;
                for (a in i) K.access(t, e, a, i[a], !0, s, o)
            } else if (void 0 !== n && (r = !0, K.isFunction(n) || (o = !0), h && (o ? (e.call(t, n), e = null) : (h = e, e = function(t, e, i) {
                    return h.call(K(t), i)
                })), e))
                for (; l > a; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
            return r ? t : h ? e.call(t) : l ? e(t[0], i) : s
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
                    s = this.cache[r];
                if ("string" == typeof e) s[e] = i;
                else if (K.isEmptyObject(s)) K.extend(this.cache[r], e);
                else
                    for (n in e) s[n] = e[n];
                return s
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
                var i, n, r, s = this.key(t),
                    o = this.cache[s];
                if (void 0 === e) this.cache[s] = {};
                else {
                    K.isArray(e) ? n = e.concat(e.map(K.camelCase)) : (r = K.camelCase(e), e in o ? n = [e, r] : (n = r, n = n in o ? [n] : n.match(ft) || [])), i = n.length;
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
        var vt = new a,
            _t = new a,
            yt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            bt = /([A-Z])/g;
        K.extend({
            hasData: function(t) {
                return _t.hasData(t) || vt.hasData(t)
            },
            data: function(t, e, i) {
                return _t.access(t, e, i)
            },
            removeData: function(t, e) {
                _t.remove(t, e)
            },
            _data: function(t, e, i) {
                return vt.access(t, e, i)
            },
            _removeData: function(t, e) {
                vt.remove(t, e)
            }
        }), K.fn.extend({
            data: function(t, e) {
                var i, n, r, s = this[0],
                    o = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (r = _t.get(s), 1 === s.nodeType && !vt.get(s, "hasDataAttrs"))) {
                        for (i = o.length; i--;) o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = K.camelCase(n.slice(5)), l(s, n, r[n])));
                        vt.set(s, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    _t.set(this, t)
                }) : gt(this, function(e) {
                    var i, n = K.camelCase(t);
                    if (s && void 0 === e) {
                        if (i = _t.get(s, t), void 0 !== i) return i;
                        if (i = _t.get(s, n), void 0 !== i) return i;
                        if (i = l(s, n, void 0), void 0 !== i) return i
                    } else this.each(function() {
                        var i = _t.get(this, n);
                        _t.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && _t.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    _t.remove(this, t)
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
                    s = K._queueHooks(t, e),
                    o = function() {
                        K.dequeue(t, e)
                    };
                "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !n && s && s.empty.fire()
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
                    s = this,
                    o = this.length,
                    a = function() {
                        --n || r.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) i = vt.get(s[o], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var xt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            wt = ["Top", "Right", "Bottom", "Left"],
            Tt = function(t, e) {
                return t = e || t, "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
            },
            Ct = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = Z.createDocumentFragment(),
                e = t.appendChild(Z.createElement("div")),
                i = Z.createElement("input");
            i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var St = "undefined";
        G.focusinBubbles = "onfocusin" in t;
        var kt = /^key/,
            Pt = /^(?:mouse|pointer|contextmenu)|click/,
            Et = /^(?:focusinfocus|focusoutblur)$/,
            At = /^([^.]*)(?:\.(.+)|)$/;
        K.event = {
            global: {},
            add: function(t, e, i, n, r) {
                var s, o, a, l, h, c, u, p, f, d, m, g = vt.get(t);
                if (g)
                    for (i.handler && (s = i, i = s.handler, r = s.selector), i.guid || (i.guid = K.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(e) {
                            return typeof K !== St && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(ft) || [""], h = e.length; h--;) a = At.exec(e[h]) || [], f = m = a[1], d = (a[2] || "").split(".").sort(), f && (u = K.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = K.event.special[f] || {}, c = K.extend({
                        type: f,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && K.expr.match.needsContext.test(r),
                        namespace: d.join(".")
                    }, s), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, u.setup && u.setup.call(t, n, d, o) !== !1 || t.addEventListener && t.addEventListener(f, o, !1)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), K.event.global[f] = !0)
            },
            remove: function(t, e, i, n, r) {
                var s, o, a, l, h, c, u, p, f, d, m, g = vt.hasData(t) && vt.get(t);
                if (g && (l = g.events)) {
                    for (e = (e || "").match(ft) || [""], h = e.length; h--;)
                        if (a = At.exec(e[h]) || [], f = m = a[1], d = (a[2] || "").split(".").sort(), f) {
                            for (u = K.event.special[f] || {}, f = (n ? u.delegateType : u.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = p.length; s--;) c = p[s], !r && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (p.splice(s, 1), c.selector && p.delegateCount--, u.remove && u.remove.call(t, c));
                            o && !p.length && (u.teardown && u.teardown.call(t, d, g.handle) !== !1 || K.removeEvent(t, f, g.handle), delete l[f])
                        } else
                            for (f in l) K.event.remove(t, f + e[h], i, n, !0);
                    K.isEmptyObject(l) && (delete g.handle, vt.remove(t, "events"))
                }
            },
            trigger: function(e, i, n, r) {
                var s, o, a, l, h, c, u, p = [n || Z],
                    f = Q.call(e, "type") ? e.type : e,
                    d = Q.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = a = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !Et.test(f + K.event.triggered) && (f.indexOf(".") >= 0 && (d = f.split("."), f = d.shift(), d.sort()), h = f.indexOf(":") < 0 && "on" + f, e = e[K.expando] ? e : new K.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : K.makeArray(i, [e]), u = K.event.special[f] || {}, r || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                    if (!r && !u.noBubble && !K.isWindow(n)) {
                        for (l = u.delegateType || f, Et.test(l + f) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                        a === (n.ownerDocument || Z) && p.push(a.defaultView || a.parentWindow || t)
                    }
                    for (s = 0;
                        (o = p[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : u.bindType || f, c = (vt.get(o, "events") || {})[e.type] && vt.get(o, "handle"), c && c.apply(o, i), c = h && o[h], c && c.apply && K.acceptData(o) && (e.result = c.apply(o, i), e.result === !1 && e.preventDefault());
                    return e.type = f, r || e.isDefaultPrevented() || u._default && u._default.apply(p.pop(), i) !== !1 || !K.acceptData(n) || h && K.isFunction(n[f]) && !K.isWindow(n) && (a = n[h], a && (n[h] = null), K.event.triggered = f, n[f](), K.event.triggered = void 0, a && (n[h] = a)), e.result
                }
            },
            dispatch: function(t) {
                t = K.event.fix(t);
                var e, i, n, r, s, o = [],
                    a = X.call(arguments),
                    l = (vt.get(this, "events") || {})[t.type] || [],
                    h = K.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
                    for (o = K.event.handlers.call(this, t, l), e = 0;
                        (r = o[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, i = 0;
                            (s = r.handlers[i++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(s.namespace) || (t.handleObj = s, t.data = s.data, n = ((K.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return h.postDispatch && h.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, r, s, o = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (l.disabled !== !0 || "click" !== t.type) {
                            for (n = [], i = 0; a > i; i++) s = e[i], r = s.selector + " ", void 0 === n[r] && (n[r] = s.needsContext ? K(r, this).index(l) >= 0 : K.find(r, this, null, [l]).length), n[r] && n.push(s);
                            n.length && o.push({
                                elem: l,
                                handlers: n
                            })
                        }
                return a < e.length && o.push({
                    elem: this,
                    handlers: e.slice(a)
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
                    var i, n, r, s = e.button;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Z, n = i.documentElement, r = i.body, t.pageX = e.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[K.expando]) return t;
                var e, i, n, r = t.type,
                    s = t,
                    o = this.fixHooks[r];
                for (o || (this.fixHooks[r] = o = Pt.test(r) ? this.mouseHooks : kt.test(r) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new K.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
                return t.target || (t.target = Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), o.filter ? o.filter(t, s) : t
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
            return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : c) : this.type = t, e && K.extend(this, e), this.timeStamp = t && t.timeStamp || K.now(), void(this[K.expando] = !0)) : new K.Event(t, e)
        }, K.Event.prototype = {
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
                        s = t.handleObj;
                    return r && (r === n || K.contains(n, r)) || (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
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
                var s, o;
                if ("object" == typeof t) {
                    "string" != typeof e && (i = i || e, e = void 0);
                    for (o in t) this.on(o, e, i, t[o], r);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = c;
                else if (!n) return this;
                return 1 === r && (s = n, n = function(t) {
                    return K().off(t), s.apply(this, arguments)
                }, n.guid = s.guid || (s.guid = K.guid++)), this.each(function() {
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
                return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = c), this.each(function() {
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
            Rt = /<|&#?\w+;/,
            Nt = /<(?:script|style|link)/i,
            $t = /checked\s*(?:[^=]|=\s*.checked.)/i,
            jt = /^$|\/(?:java|ecma)script/i,
            Lt = /^true\/(.*)/,
            It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Mt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Mt.optgroup = Mt.option, Mt.tbody = Mt.tfoot = Mt.colgroup = Mt.caption = Mt.thead, Mt.th = Mt.td, K.extend({
            clone: function(t, e, i) {
                var n, r, s, o, a = t.cloneNode(!0),
                    l = K.contains(t.ownerDocument, t);
                if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t)))
                    for (o = v(a), s = v(t), n = 0, r = s.length; r > n; n++) _(s[n], o[n]);
                if (e)
                    if (i)
                        for (s = s || v(t), o = o || v(a), n = 0, r = s.length; r > n; n++) g(s[n], o[n]);
                    else g(t, a);
                return o = v(a, "script"), o.length > 0 && m(o, !l && v(t, "script")), a
            },
            buildFragment: function(t, e, i, n) {
                for (var r, s, o, a, l, h, c = e.createDocumentFragment(), u = [], p = 0, f = t.length; f > p; p++)
                    if (r = t[p], r || 0 === r)
                        if ("object" === K.type(r)) K.merge(u, r.nodeType ? [r] : r);
                        else if (Rt.test(r)) {
                    for (s = s || c.appendChild(e.createElement("div")), o = (Ot.exec(r) || ["", ""])[1].toLowerCase(), a = Mt[o] || Mt._default, s.innerHTML = a[1] + r.replace(Dt, "<$1></$2>") + a[2], h = a[0]; h--;) s = s.lastChild;
                    K.merge(u, s.childNodes), s = c.firstChild, s.textContent = ""
                } else u.push(e.createTextNode(r));
                for (c.textContent = "", p = 0; r = u[p++];)
                    if ((!n || -1 === K.inArray(r, n)) && (l = K.contains(r.ownerDocument, r), s = v(c.appendChild(r), "script"), l && m(s), i))
                        for (h = 0; r = s[h++];) jt.test(r.type || "") && i.push(r);
                return c
            },
            cleanData: function(t) {
                for (var e, i, n, r, s = K.event.special, o = 0; void 0 !== (i = t[o]); o++) {
                    if (K.acceptData(i) && (r = i[vt.expando], r && (e = vt.cache[r]))) {
                        if (e.events)
                            for (n in e.events) s[n] ? K.event.remove(i, n) : K.removeEvent(i, n, e.handle);
                        vt.cache[r] && delete vt.cache[r]
                    }
                    delete _t.cache[i[_t.expando]]
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
                    if ("string" == typeof t && !Nt.test(t) && !Mt[(Ot.exec(t) || ["", ""])[1].toLowerCase()]) {
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
                var i, n, r, s, o, a, l = 0,
                    h = this.length,
                    c = this,
                    u = h - 1,
                    p = t[0],
                    m = K.isFunction(p);
                if (m || h > 1 && "string" == typeof p && !G.checkClone && $t.test(p)) return this.each(function(i) {
                    var n = c.eq(i);
                    m && (t[0] = p.call(this, i, n.html())), n.domManip(t, e)
                });
                if (h && (i = K.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                    for (r = K.map(v(i, "script"), f), s = r.length; h > l; l++) o = i, l !== u && (o = K.clone(o, !0, !0), s && K.merge(r, v(o, "script"))), e.call(this[l], o, l);
                    if (s)
                        for (a = r[r.length - 1].ownerDocument, K.map(r, d), l = 0; s > l; l++) o = r[l], jt.test(o.type || "") && !vt.access(o, "globalEval") && K.contains(a, o) && (o.src ? K._evalUrl && K._evalUrl(o.src) : K.globalEval(o.textContent.replace(It, "")))
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
                for (var i, n = [], r = K(t), s = r.length - 1, o = 0; s >= o; o++) i = o === s ? this : this.clone(!0), K(r[o])[e](i), W.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var Ft, zt = {},
            qt = /^margin/,
            Ht = new RegExp("^(" + xt + ")(?!px)[a-z%]+$", "i"),
            Xt = function(e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
            };
        ! function() {
            function e() {
                o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", r.appendChild(s);
                var e = t.getComputedStyle(o, null);
                i = "1%" !== e.top, n = "4px" === e.width, r.removeChild(s)
            }
            var i, n, r = Z.documentElement,
                s = Z.createElement("div"),
                o = Z.createElement("div");
            o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", s.appendChild(o), t.getComputedStyle && K.extend(G, {
                pixelPosition: function() {
                    return e(), i
                },
                boxSizingReliable: function() {
                    return null == n && e(), n
                },
                reliableMarginRight: function() {
                    var e, i = o.appendChild(Z.createElement("div"));
                    return i.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", o.style.width = "1px", r.appendChild(s), e = !parseFloat(t.getComputedStyle(i, null).marginRight), r.removeChild(s), o.removeChild(i), e
                }
            }))
        }(), K.swap = function(t, e, i, n) {
            var r, s, o = {};
            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            r = i.apply(t, n || []);
            for (s in e) t.style[s] = o[s];
            return r
        };
        var Bt = /^(none|table(?!-c[ea]).+)/,
            Wt = new RegExp("^(" + xt + ")(.*)$", "i"),
            Ut = new RegExp("^([+-])=(" + xt + ")", "i"),
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
                            var i = x(t, "opacity");
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
                    var r, s, o, a = K.camelCase(e),
                        l = t.style;
                    return e = K.cssProps[a] || (K.cssProps[a] = T(l, a)), o = K.cssHooks[e] || K.cssHooks[a], void 0 === i ? o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : l[e] : (s = typeof i, "string" === s && (r = Ut.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(K.css(t, e)), s = "number"), null != i && i === i && ("number" !== s || K.cssNumber[a] || (i += "px"), G.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (l[e] = i)), void 0)
                }
            },
            css: function(t, e, i, n) {
                var r, s, o, a = K.camelCase(e);
                return e = K.cssProps[a] || (K.cssProps[a] = T(t.style, a)), o = K.cssHooks[e] || K.cssHooks[a], o && "get" in o && (r = o.get(t, !0, i)), void 0 === r && (r = x(t, e, n)), "normal" === r && e in Vt && (r = Vt[e]), "" === i || i ? (s = parseFloat(r), i === !0 || K.isNumeric(s) ? s || 0 : r) : r
            }
        }), K.each(["height", "width"], function(t, e) {
            K.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? Bt.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, Yt, function() {
                        return k(t, e, n)
                    }) : k(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var r = n && Xt(t);
                    return C(t, i, n ? S(t, e, n, "border-box" === K.css(t, "boxSizing", !1, r), r) : 0)
                }
            }
        }), K.cssHooks.marginRight = w(G.reliableMarginRight, function(t, e) {
            return e ? K.swap(t, {
                display: "inline-block"
            }, x, [t, "marginRight"]) : void 0
        }), K.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            K.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + wt[n] + e] = s[n] || s[n - 2] || s[0];
                    return r
                }
            }, qt.test(t) || (K.cssHooks[t + e].set = C)
        }), K.fn.extend({
            css: function(t, e) {
                return gt(this, function(t, e, i) {
                    var n, r, s = {},
                        o = 0;
                    if (K.isArray(e)) {
                        for (n = Xt(t), r = e.length; r > o; o++) s[e[o]] = K.css(t, e[o], !1, n);
                        return s
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
        }), K.Tween = E, E.prototype = {
            constructor: E,
            init: function(t, e, i, n, r, s) {
                this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (K.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = E.propHooks[this.prop];
                return t && t.get ? t.get(this) : E.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = E.propHooks[this.prop];
                return this.options.duration ? this.pos = e = K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : E.propHooks._default.set(this), this
            }
        }, E.prototype.init.prototype = E.prototype, E.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, E.propHooks.scrollTop = E.propHooks.scrollLeft = {
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
        }, K.fx = E.prototype.init, K.fx.step = {};
        var Gt, Zt, Jt = /^(?:toggle|show|hide)$/,
            Kt = new RegExp("^(?:([+-])=|)(" + xt + ")([a-z%]*)$", "i"),
            te = /queueHooks$/,
            ee = [R],
            ie = {
                "*": [function(t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        r = Kt.exec(e),
                        s = r && r[3] || (K.cssNumber[t] ? "" : "px"),
                        o = (K.cssNumber[t] || "px" !== s && +n) && Kt.exec(K.css(i.elem, t)),
                        a = 1,
                        l = 20;
                    if (o && o[3] !== s) {
                        s = s || o[3], r = r || [], o = +n || 1;
                        do a = a || ".5", o /= a, K.style(i.elem, t, o + s); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                    }
                    return r && (o = i.start = +o || +n || 0, i.unit = s, i.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2]), i
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
                        s = K.speed(e, i, n),
                        o = function() {
                            var e = $(this, K.extend({}, t), s);
                            (r || vt.get(this, "finish")) && e.stop(!0)
                        };
                    return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            s = K.timers,
                            o = vt.get(this);
                        if (r) o[r] && o[r].stop && n(o[r]);
                        else
                            for (r in o) o[r] && o[r].stop && te.test(r) && n(o[r]);
                        for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));
                        !e && i || K.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, i = vt.get(this),
                            n = i[t + "queue"],
                            r = i[t + "queueHooks"],
                            s = K.timers,
                            o = n ? n.length : 0;
                        for (i.finish = !0, K.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0),
                            s.splice(e, 1));
                        for (e = 0; o > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
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
        var ne, re, se = K.expr.attrHandle;
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
                var n, r, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === St ? K.prop(t, e, i) : (1 === s && K.isXMLDoc(t) || (e = e.toLowerCase(), n = K.attrHooks[e] || (K.expr.match.bool.test(e) ? re : ne)), void 0 === i ? n && "get" in n && null !== (r = n.get(t, e)) ? r : (r = K.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(t, i, e)) ? r : (t.setAttribute(e, i + ""), i) : void K.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var i, n, r = 0,
                    s = e && e.match(ft);
                if (s && 1 === t.nodeType)
                    for (; i = s[r++];) n = K.propFix[i] || i, K.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
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
            var i = se[e] || K.find.attr;
            se[e] = function(t, e, n) {
                var r, s;
                return n || (s = se[e], se[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, se[e] = s), r
            }
        });
        var oe = /^(?:input|select|textarea|button)$/i;
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
                var n, r, s, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !K.isXMLDoc(t), s && (e = K.propFix[e] || e, r = K.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        return t.hasAttribute("tabindex") || oe.test(t.nodeName) || t.href ? t.tabIndex : -1
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
                var e, i, n, r, s, o, a = "string" == typeof t && t,
                    l = 0,
                    h = this.length;
                if (K.isFunction(t)) return this.each(function(e) {
                    K(this).addClass(t.call(this, e, this.className))
                });
                if (a)
                    for (e = (t || "").match(ft) || []; h > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : " ")) {
                            for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                            o = K.trim(n), i.className !== o && (i.className = o)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, r, s, o, a = 0 === arguments.length || "string" == typeof t && t,
                    l = 0,
                    h = this.length;
                if (K.isFunction(t)) return this.each(function(e) {
                    K(this).removeClass(t.call(this, e, this.className))
                });
                if (a)
                    for (e = (t || "").match(ft) || []; h > l; l++)
                        if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : "")) {
                            for (s = 0; r = e[s++];)
                                for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
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
                        for (var e, n = 0, r = K(this), s = t.match(ft) || []; e = s[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else i !== St && "boolean" !== i || (this.className && vt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : vt.get(this, "__className__") || "")
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
                        for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : n.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
                            if (i = n[l], (i.selected || l === r) && (G.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !K.nodeName(i.parentNode, "optgroup"))) {
                                if (e = K(i).val(), s) return e;
                                o.push(e)
                            }
                        return o
                    },
                    set: function(t, e) {
                        for (var i, n, r = t.options, s = K.makeArray(e), o = r.length; o--;) n = r[o], (n.selected = K.inArray(n.value, s) >= 0) && (i = !0);
                        return i || (t.selectedIndex = -1), s
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
        var he = K.now(),
            ce = /\?/;
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
        var ue = /#.*$/,
            pe = /([?&])_=[^&]*/,
            fe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            de = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            me = /^(?:GET|HEAD)$/,
            ge = /^\/\//,
            ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            _e = {},
            ye = {},
            be = "*/".concat("*"),
            xe = t.location.href,
            we = ve.exec(xe.toLowerCase()) || [];
        K.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xe,
                type: "GET",
                isLocal: de.test(we[1]),
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
                return e ? I(I(t, K.ajaxSettings), e) : I(K.ajaxSettings, t)
            },
            ajaxPrefilter: j(_e),
            ajaxTransport: j(ye),
            ajax: function(t, e) {
                function i(t, e, i, o) {
                    var l, c, v, _, b, w = e;
                    2 !== y && (y = 2, a && clearTimeout(a), n = void 0, s = o || "", x.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (_ = M(u, x, i)), _ = F(u, _, x, l), l ? (u.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (K.lastModified[r] = b), b = x.getResponseHeader("etag"), b && (K.etag[r] = b)), 204 === t || "HEAD" === u.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = _.state, c = _.data, v = _.error, l = !v)) : (v = w, !t && w || (w = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || w) + "", l ? d.resolveWith(p, [c, w, x]) : d.rejectWith(p, [x, w, v]), x.statusCode(g), g = void 0, h && f.trigger(l ? "ajaxSuccess" : "ajaxError", [x, u, l ? c : v]), m.fireWith(p, [x, w]), h && (f.trigger("ajaxComplete", [x, u]), --K.active || K.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, r, s, o, a, l, h, c, u = K.ajaxSetup({}, e),
                    p = u.context || u,
                    f = u.context && (p.nodeType || p.jquery) ? K(p) : K.event,
                    d = K.Deferred(),
                    m = K.Callbacks("once memory"),
                    g = u.statusCode || {},
                    v = {},
                    _ = {},
                    y = 0,
                    b = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === y) {
                                if (!o)
                                    for (o = {}; e = fe.exec(s);) o[e[1].toLowerCase()] = e[2];
                                e = o[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === y ? s : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return y || (t = _[i] = _[i] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return y || (u.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > y)
                                    for (e in t) g[e] = [g[e], t[e]];
                                else x.always(t[x.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || b;
                            return n && n.abort(e), i(0, e), this
                        }
                    };
                if (d.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, u.url = ((t || u.url || xe) + "").replace(ue, "").replace(ge, we[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = K.trim(u.dataType || "*").toLowerCase().match(ft) || [""], null == u.crossDomain && (l = ve.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === we[1] && l[2] === we[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (we[3] || ("http:" === we[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = K.param(u.data, u.traditional)), L(_e, u, e, x), 2 === y) return x;
                h = K.event && u.global, h && 0 === K.active++ && K.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !me.test(u.type), r = u.url, u.hasContent || (u.data && (r = u.url += (ce.test(r) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = pe.test(r) ? r.replace(pe, "$1_=" + he++) : r + (ce.test(r) ? "&" : "?") + "_=" + he++)), u.ifModified && (K.lastModified[r] && x.setRequestHeader("If-Modified-Since", K.lastModified[r]), K.etag[r] && x.setRequestHeader("If-None-Match", K.etag[r])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + be + "; q=0.01" : "") : u.accepts["*"]);
                for (c in u.headers) x.setRequestHeader(c, u.headers[c]);
                if (u.beforeSend && (u.beforeSend.call(p, x, u) === !1 || 2 === y)) return x.abort();
                b = "abort";
                for (c in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[c](u[c]);
                if (n = L(ye, u, e, x)) {
                    x.readyState = 1, h && f.trigger("ajaxSend", [x, u]), u.async && u.timeout > 0 && (a = setTimeout(function() {
                        x.abort("timeout")
                    }, u.timeout));
                    try {
                        y = 1, n.send(v, i)
                    } catch (w) {
                        if (!(2 > y)) throw w;
                        i(-1, w)
                    }
                } else i(-1, "No Transport");
                return x
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
            Ce = /\[\]$/,
            Se = /\r?\n/g,
            ke = /^(?:submit|button|image|reset|file)$/i,
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
                    return this.name && !K(this).is(":disabled") && Pe.test(this.nodeName) && !ke.test(t) && (this.checked || !Ct.test(t))
                }).map(function(t, e) {
                    var i = K(this).val();
                    return null == i ? null : K.isArray(i) ? K.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Se, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Se, "\r\n")
                    }
                }).get()
            }
        }), K.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (t) {}
        };
        var Ee = 0,
            Ae = {},
            De = {
                0: 200,
                1223: 204
            },
            Oe = K.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() {
            for (var t in Ae) Ae[t]()
        }), G.cors = !!Oe && "withCredentials" in Oe, G.ajax = Oe = !!Oe, K.ajaxTransport(function(t) {
            var e;
            return G.cors || Oe && !t.crossDomain ? {
                send: function(i, n) {
                    var r, s = t.xhr(),
                        o = ++Ee;
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (r in t.xhrFields) s[r] = t.xhrFields[r];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (r in i) s.setRequestHeader(r, i[r]);
                    e = function(t) {
                        return function() {
                            e && (delete Ae[o], e = s.onload = s.onerror = null, "abort" === t ? s.abort() : "error" === t ? n(s.status, s.statusText) : n(De[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                                text: s.responseText
                            } : void 0, s.getAllResponseHeaders()))
                        }
                    }, s.onload = e(), s.onerror = e("error"), e = Ae[o] = e("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
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
        var Re = [],
            Ne = /(=)\?(?=&|$)|\?\?/;
        K.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Re.pop() || K.expando + "_" + he++;
                return this[t] = !0, t
            }
        }), K.ajaxPrefilter("json jsonp", function(e, i, n) {
            var r, s, o, a = e.jsonp !== !1 && (Ne.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ne.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ne, "$1" + r) : e.jsonp !== !1 && (e.url += (ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return o || K.error(r + " was not called"), o[0]
            }, e.dataTypes[0] = "json", s = t[r], t[r] = function() {
                o = arguments
            }, n.always(function() {
                t[r] = s, e[r] && (e.jsonpCallback = i.jsonpCallback, Re.push(r)), o && K.isFunction(s) && s(o[0]), o = s = void 0
            }), "script") : void 0
        }), K.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || Z;
            var n = ot.exec(t),
                r = !i && [];
            return n ? [e.createElement(n[1])] : (n = K.buildFragment([t], e, r), r && r.length && K(r).remove(), K.merge([], n.childNodes))
        };
        var $e = K.fn.load;
        K.fn.load = function(t, e, i) {
            if ("string" != typeof t && $e) return $e.apply(this, arguments);
            var n, r, s, o = this,
                a = t.indexOf(" ");
            return a >= 0 && (n = K.trim(t.slice(a)), t = t.slice(0, a)), K.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && K.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e
            }).done(function(t) {
                s = arguments, o.html(n ? K("<div>").append(K.parseHTML(t)).find(n) : t)
            }).complete(i && function(t, e) {
                o.each(i, s || [t.responseText, e, t])
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
        var je = t.document.documentElement;
        K.offset = {
            setOffset: function(t, e, i) {
                var n, r, s, o, a, l, h, c = K.css(t, "position"),
                    u = K(t),
                    p = {};
                "static" === c && (t.style.position = "relative"), a = u.offset(), s = K.css(t, "top"), l = K.css(t, "left"), h = ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1, h ? (n = u.position(), o = n.top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), K.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (p.top = e.top - a.top + o), null != e.left && (p.left = e.left - a.left + r), "using" in e ? e.using.call(t, p) : u.css(p)
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
                    s = n && n.ownerDocument;
                if (s) return e = s.documentElement, K.contains(e, n) ? (typeof n.getBoundingClientRect !== St && (r = n.getBoundingClientRect()), i = q(s), {
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
                    for (var t = this.offsetParent || je; t && !K.nodeName(t, "html") && "static" === K.css(t, "position");) t = t.offsetParent;
                    return t || je
                })
            }
        }), K.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, i) {
            var n = "pageYOffset" === i;
            K.fn[e] = function(r) {
                return gt(this, function(e, r, s) {
                    var o = q(e);
                    return void 0 === s ? o ? o[i] : e[r] : void(o ? o.scrollTo(n ? t.pageXOffset : s, n ? s : t.pageYOffset) : e[r] = s)
                }, e, r, arguments.length, null)
            }
        }), K.each(["top", "left"], function(t, e) {
            K.cssHooks[e] = w(G.pixelPosition, function(t, i) {
                return i ? (i = x(t, e), Ht.test(i) ? K(t).position()[e] + "px" : i) : void 0
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
                    var s = arguments.length && (i || "boolean" != typeof n),
                        o = i || (n === !0 || r === !0 ? "margin" : "border");
                    return gt(this, function(e, i, n) {
                        var r;
                        return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? K.css(e, i, o) : K.style(e, i, n, o)
                    }, e, s ? n : void 0, s, null)
                }
            })
        }), K.fn.size = function() {
            return this.length
        }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return K
        });
        var Le = t.jQuery,
            Ie = t.$;
        return K.noConflict = function(e) {
            return t.$ === K && (t.$ = Ie), e && t.jQuery === K && (t.jQuery = Le), K
        }, typeof e === St && (t.jQuery = t.$ = K), K
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
            o.detach().trigger("closed.bs.alert").remove()
        }
        var r = t(this),
            s = r.attr("data-target");
        s || (s = r.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(s);
        e && e.preventDefault(), o.length || (o = r.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
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
                s = "object" == typeof e && e;
            r || n.data("bs.button", r = new i(this, s)), "toggle" == e ? r.toggle() : e && r.setState(e)
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
            s = n.data();
        e += "Text", null == s.resetText && n.data("resetText", n[r]()), setTimeout(t.proxy(function() {
            n[r](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
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
                s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                o = "string" == typeof e ? e : s.slide;
            r || n.data("bs.carousel", r = new i(this, s)), "number" == typeof e ? r.to(e) : o ? r[o]() : s.interval && r.pause().cycle()
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
            s = (i + r) % this.$items.length;
        return this.$items.eq(s)
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
            s = n || this.getItemForDirection(e, r),
            o = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var h = s[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: a
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = t(this.$indicators.children()[this.getItemIndex(s)]);
                u && u.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, r.addClass(a), s.addClass(a), r.one("bsTransitionEnd", function() {
                s.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (r.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(p)), o && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this
    };
    var r = function(i) {
        var n, r = t(this),
            s = t(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var o = t.extend({}, s.data(), r.data()),
                a = r.attr("data-slide-to");
            a && (o.interval = !1), e.call(s, o), a && s.data("bs.carousel").to(a), i.preventDefault()
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
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !r && s.toggle && /show|hide/.test(e) && (s.toggle = !1), r || i.data("bs.collapse", r = new n(this, s)), "string" == typeof e && r[e]()
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
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    r && r.length && (i.call(r, "hide"), e || r.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[o](this.$element[0][l])
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
        var s = e(r),
            o = s.data("bs.collapse"),
            a = o ? "toggle" : r.data();
        i.call(s, a)
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
        i && 3 === i.which || (t(r).remove(), t(s).each(function() {
            var n = t(this),
                r = e(n),
                s = {
                    relatedTarget: this
                };
            r.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(r[0], i.target) || (r.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), r.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
        }))
    }

    function n(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var r = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        o = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    o.VERSION = "3.3.6", o.prototype.toggle = function(n) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var s = e(r),
                o = s.hasClass("open");
            if (i(), !o) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {
                    relatedTarget: this
                };
                if (s.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, o.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var n = t(this);
            if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                var r = e(n),
                    o = r.hasClass("open");
                if (!o && 27 != i.which || o && 27 == i.which) return 27 == i.which && r.find(s).trigger("focus"), n.trigger("click");
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
    t.fn.dropdown = n, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, n) {
        return this.each(function() {
            var r = t(this),
                s = r.data("bs.modal"),
                o = t.extend({}, i.DEFAULTS, r.data(), "object" == typeof e && e);
            s || r.data("bs.modal", s = new i(this, o)), "string" == typeof e ? s[e](n) : o.show && s.show(n)
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
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            r ? n.$dialog.one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
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
            var s = t.support.transition && r;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
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
            r = n.attr("href"),
            s = t(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            o = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(r) && r
            }, s.data(), n.data());
        n.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(s, o, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.tooltip"),
                s = "object" == typeof e && e;
            !r && /destroy|hide/.test(e) || (r || n.data("bs.tooltip", r = new i(this, s)), "string" == typeof e && r[e]())
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
        for (var r = this.options.trigger.split(" "), s = r.length; s--;) {
            var o = r[s];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != o) {
                var a = "hover" == o ? "mouseenter" : "focusin",
                    l = "hover" == o ? "mouseleave" : "focusout";
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
                s = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), s.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(a);
            h && (a = a.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                u = s[0].offsetWidth,
                p = s[0].offsetHeight;
            if (h) {
                var f = a,
                    d = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + p > d.bottom ? "top" : "top" == a && c.top - p < d.top ? "bottom" : "right" == a && c.right + u > d.width ? "left" : "left" == a && c.left - u < d.left ? "right" : a, s.removeClass(f).addClass(a)
            }
            var m = this.getCalculatedOffset(a, c, u, p);
            this.applyPlacement(m, a);
            var g = function() {
                var t = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            r = n[0].offsetWidth,
            s = n[0].offsetHeight,
            o = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(a) && (a = 0), e.top += o, e.left += a, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            h = n[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var c = this.getViewportAdjustedDelta(i, e, l, h);
        c.left ? e.left += c.left : e.top += c.top;
        var u = /top|bottom/.test(i),
            p = u ? 2 * c.left - r + l : 2 * c.top - s + h,
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
            "in" != r.hoverState && s.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e()
        }
        var r = this,
            s = t(this.$tip),
            o = t.Event("hide.bs." + this.type);
        return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
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
        var s = n ? {
                top: 0,
                left: 0
            } : e.offset(),
            o = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = n ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, r, o, a, s)
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
        var s = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - o.scroll,
                l = e.top + s - o.scroll + n;
            a < o.top ? r.top = o.top - a : l > o.top + o.height && (r.top = o.top + o.height - l)
        } else {
            var h = e.left - s,
                c = e.left + s + i;
            h < o.left ? r.left = o.left - h : c > o.right && (r.left = o.left + o.width - c)
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
                s = "object" == typeof e && e;
            !r && /destroy|hide/.test(e) || (r || n.data("bs.popover", r = new i(this, s)), "string" == typeof e && r[e]())
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
                s = "object" == typeof i && i;
            r || n.data("bs.scrollspy", r = new e(this, s)), "string" == typeof i && r[i]()
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
                s = /^#./.test(r) && t(r);
            return s && s.length && s.is(":visible") && [
                [s[i]().top + n, r]
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
            s = this.targets,
            o = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return o != (t = s[s.length - 1]) && this.activate(t);
        if (o && e < r[0]) return this.activeTarget = null, this.clear();
        for (t = r.length; t--;) o != s[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(s[t])
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
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                o = t.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            if (r.trigger(s), e.trigger(o), !o.isDefaultPrevented() && !s.isDefaultPrevented()) {
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
        function s() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }
        var o = n.find("> .active"),
            a = r && t.support.transition && (o.length && o.hasClass("fade") || !!n.find("> .fade").length);
        o.length && a ? o.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), o.removeClass("in")
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
                s = "object" == typeof e && e;
            r || n.data("bs.affix", r = new i(this, s)), "string" == typeof e && r[e]()
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
            s = this.$element.offset(),
            o = this.$target.height();
        if (null != i && "top" == this.affixed) return i > r ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? r + this.unpin <= s.top ? !1 : "bottom" : t - n >= r + o ? !1 : "bottom";
        var a = null == this.affixed,
            l = a ? r : s.top,
            h = a ? o : e;
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
                s = n.bottom,
                o = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (s = r = n), "function" == typeof r && (r = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
            var a = this.getState(o, e, r, s);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: o - e - s
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
        var s;
        if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = e, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !t.notNeeded(e)) {
            for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, l = 0, h = o.length; h > l; l++) a[o[l]] = r(a[o[l]], a);
            i && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, i, n) {
                var r = Node.prototype.removeEventListener;
                "click" === t ? r.call(e, t, i.hijacked || i, n) : r.call(e, t, i, n)
            }, e.addEventListener = function(t, i, n) {
                var r = Node.prototype.addEventListener;
                "click" === t ? r.call(e, t, i.hijacked || (i.hijacked = function(t) {
                    t.propagationStopped || i(t)
                }), n) : r.call(e, t, i, n)
            }), "function" == typeof e.onclick && (s = e.onclick, e.addEventListener("click", function(t) {
                s(t)
            }, !1), e.onclick = null)
        }
    }
    var e = navigator.userAgent.indexOf("Windows Phone") >= 0,
        i = navigator.userAgent.indexOf("Android") > 0 && !e,
        n = /iP(ad|hone|od)/.test(navigator.userAgent) && !e,
        r = n && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        s = n && /OS [6-7]_\d/.test(navigator.userAgent),
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
        var e, i, s;
        if (t.targetTouches.length > 1) return !0;
        if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], n) {
            if (s = window.getSelection(), s.rangeCount && !s.isCollapsed) return !0;
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
        var e, o, a, l, h, c = this.targetElement;
        if (!this.trackingClick) return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, o = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, s && (h = t.changedTouches[0], c = document.elementFromPoint(h.pageX - window.pageXOffset, h.pageY - window.pageYOffset) || c, c.fastClickScrollParent = this.targetElement.fastClickScrollParent), a = c.tagName.toLowerCase(), "label" === a) {
            if (e = this.findControl(c)) {
                if (this.focus(c), i) return !1;
                c = e
            }
        } else if (this.needsFocus(c)) return t.timeStamp - o > 100 || n && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(c), this.sendClick(c, t), n && "select" === a || (this.targetElement = null, t.preventDefault()), !1);
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
        var e, n, r, s;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!i) return !0;
            if (e = document.querySelector("meta[name=viewport]")) {
                if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (o && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && r[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
            if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0;
        }
        return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction ? !0 : (s = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], s >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === t.style.touchAction || "manipulation" === t.style.touchAction)
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
                    s = 1e-10,
                    o = i._internals,
                    a = o.isSelector,
                    l = o.isArray,
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
                        var s = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var o, a = 1 / (1 - r), l = this._firstPT; l;) o = l.s + l.c, l.c *= a, l.s = o - l.c, l = l._next
                    }
                    return this
                }, h.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, r, a, l, h, u, p, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        g = this._totalTime,
                        v = this._cycle,
                        _ = this._duration,
                        y = this._rawPrevTime;
                    if (t >= d ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = _, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete"), 0 === _ && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === s) && y !== t && (i = !0, y > s && (r = "onReverseComplete")), this._rawPrevTime = f = !e || t || y === t ? t : s)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === _ && y > 0 && y !== s) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === _ && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = f = !e || t || y === t ? t : s)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = _ + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? this._time = _ : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / _, u = this._easeType, p = this._easePower, (1 === u || 3 === u && h >= .5) && (h = 1 - h), 3 === u && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), this.ratio = 1 === u ? 1 - h : 2 === u ? h : .5 > this._time / _ ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / _)), m === this._time && !i && v === this._cycle) return void(g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = g, this._rawPrevTime = y, this._cycle = v, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / _) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === _) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== g || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || c)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || c), 0 === _ && this._rawPrevTime === s && f !== s && (this._rawPrevTime = 0))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
                }, r.staggerTo = r.allTo = function(t, e, s, o, h, u, p) {
                    o = o || 0;
                    var f, d, m, g, v = s.delay || 0,
                        _ = [],
                        y = function() {
                            s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), h.apply(p || this, u || c)
                        };
                    for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], 0 > o && (t = n(t), t.reverse(), o *= -1), f = t.length - 1, m = 0; f >= m; m++) {
                        d = {};
                        for (g in s) d[g] = s[g];
                        d.delay = v, m === f && h && (d.onComplete = y), _[m] = new r(t[m], e, d), v += o
                    }
                    return _
                }, r.staggerFrom = r.allFrom = function(t, e, i, n, s, o, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, n, s, o, a)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, n, s, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, s, o, a, l)
                }, r.delayedCall = function(t, e, i, n, s) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        onCompleteScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: n,
                        immediateRender: !1,
                        useFrames: s,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var u = function(t, e) {
                        for (var n = [], r = 0, s = t._first; s;) s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(u(s, e)), r = n.length), s = s._next;
                        return n
                    },
                    p = r.getAllTweens = function(e) {
                        return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var s, o, a, l = p(0 != r),
                        h = l.length,
                        c = i && n && r;
                    for (a = 0; h > a; a++) o = l[a], (c || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var s, h, c, u, p, f = o.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))
                            for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                        else {
                            s = [];
                            for (c in f)
                                for (h = f[c].target.parentNode; h;) h === t && (s = s.concat(f[c].tweens)), h = h.parentNode;
                            for (p = s.length, u = 0; p > u; u++) e && s[u].totalTime(s[u].totalDuration()), s[u]._enabled(!1, !1)
                        }
                    }
                };
                var f = function(t, i, n, r) {
                    i = i !== !1, n = n !== !1, r = r !== !1;
                    for (var s, o, a = p(r), l = i && n && r, h = a.length; --h > -1;) o = a[h], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    f(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    f(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || s, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
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
                    s = i._internals,
                    o = s.isSelector,
                    a = s.isArray,
                    l = s.lazyTweens,
                    h = s.lazyRender,
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
                    m = n.prototype = new e;
                return n.version = "1.14.0", m.constructor = n, m.kill()._gc = m._forcingPlayhead = !1, m.to = function(t, e, n, r) {
                    var s = n.repeat && u.TweenMax || i;
                    return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
                }, m.from = function(t, e, n, r) {
                    return this.add((n.repeat && u.TweenMax || i).from(t, e, n), r)
                }, m.fromTo = function(t, e, n, r, s) {
                    var o = r.repeat && u.TweenMax || i;
                    return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
                }, m.staggerTo = function(t, e, r, s, a, l, h, c) {
                    var u, f = new n({
                        onComplete: l,
                        onCompleteParams: h,
                        onCompleteScope: c,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = d(t)), s = s || 0, 0 > s && (t = d(t), t.reverse(), s *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = p(r.startAt)), f.to(t[u], e, p(r), u * s);
                    return this.add(f, a)
                }, m.staggerFrom = function(t, e, i, n, r, s, o, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
                }, m.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
                }, m.call = function(t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, m.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, s, o = new n(t),
                        a = o._timeline;
                    for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) s = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
                    return a.add(o, 0), o
                }, m.add = function(r, s, o, l) {
                    var h, c, u, p, f, d;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && a(r)) {
                            for (o = o || "normal", l = l || 0, h = s, c = r.length, u = 0; c > u; u++) a(p = r[u]) && (p = new n({
                                tweens: p
                            })), this.add(p, h), "string" != typeof p && "function" != typeof p && ("sequence" === o ? h = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), h += l;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, s);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, d = f.rawTime() > r._startTime; f._timeline;) d && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
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
                    return this.call(f, ["{self}", e, i, n], this, t)
                }, m.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, m.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, m._parseTimeOrLabel = function(e, i, n, r) {
                    var s;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && a(r)))
                        for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (s = e.indexOf("="), -1 === s) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
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
                    var n, s, o, a, u, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        d = this._startTime,
                        m = this._timeScale,
                        g = this._paused;
                    if (t >= p ? (this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (u = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== f && this._first || i || u) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c)), this._time >= f)
                            for (n = this._first; n && (o = n._next, !this._paused || g);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                        else
                            for (n = this._last; n && (o = n._prev, !this._paused || g);)(n._active || f >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                        this._onUpdate && (e || (l.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c))), a && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (s && (l.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this.vars[a].apply(this.vars[a + "Scope"] || this, this.vars[a + "Params"] || c)))
                    }
                }, m._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, m.getChildren = function(t, e, n, r) {
                    r = r || -9999999999;
                    for (var s = [], o = this._first, a = 0; o;) r > o._startTime || (o instanceof i ? e !== !1 && (s[a++] = o) : (n !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next;
                    return s
                }, m.getTweensOf = function(t, e) {
                    var n, r, s = this._gc,
                        o = [],
                        a = 0;
                    for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
                    return s && this._enabled(!1, !0), o
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
                    for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in s) s[n] >= i && (s[n] += t);
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
                            for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, 0 > r._startTime && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
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
                    s = [],
                    o = e._internals,
                    a = o.lazyTweens,
                    l = o.lazyRender,
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
                    var n, r, o, a = {
                        ease: h,
                        overwrite: i.delay ? 2 : 1,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) a[r] = i[r];
                    return a.time = this._parseTimeOrLabel(t), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, o = new e(this, n, a), a.onStart = function() {
                        o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || o, i.onStartParams || s)
                    }, o
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
                    var n, o, h, c, u, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._duration,
                        m = this._time,
                        g = this._totalTime,
                        v = this._startTime,
                        _ = this._timeScale,
                        y = this._rawPrevTime,
                        b = this._paused,
                        x = this._cycle;
                    if (t >= f ? (this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, c = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (u = !0, y > r && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (c = "onReverseComplete", o = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : (0 === d && 0 > y && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = d + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 !== (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== x && !this._locked) {
                        var w = this._yoyo && 0 !== (1 & x),
                            T = w === (this._yoyo && 0 !== (1 & this._cycle)),
                            C = this._totalTime,
                            S = this._cycle,
                            k = this._rawPrevTime,
                            P = this._time;
                        if (this._totalTime = x * d, x > this._cycle ? w = !w : this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? y - 1e-4 : y, this._cycle = x, this._locked = !0, m = w ? 0 : d, this.render(m, e, 0 === d), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s), T && (m = w ? d + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !b) return;
                        this._time = P, this._totalTime = C, this._cycle = S, this._rawPrevTime = k
                    }
                    if (!(this._time !== m && this._first || i || u)) return void(g !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= m)
                        for (n = this._first; n && (h = n._next, !this._paused || b);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = h;
                    else
                        for (n = this._last; n && (h = n._prev, !this._paused || b);)(n._active || m >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = h;
                    this._onUpdate && (e || (a.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s))), c && (this._locked || this._gc || (v === this._startTime || _ !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (o && (a.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[c] && this.vars[c].apply(this.vars[c + "Scope"] || this, this.vars[c + "Params"] || s)))
                }, c.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, s = [],
                        o = this.getChildren(t, e, i),
                        a = 0,
                        l = o.length;
                    for (n = 0; l > n; n++) r = o[n], r.isActive() && (s[a++] = r);
                    return s
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
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
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
                    s = function(t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    a = function(t, e, i, n) {
                        var r = {
                                a: t
                            },
                            s = {},
                            o = {},
                            a = {
                                c: n
                            },
                            l = (t + e) / 2,
                            h = (e + i) / 2,
                            c = (i + n) / 2,
                            u = (l + h) / 2,
                            p = (h + c) / 2,
                            f = (p - u) / 8;
                        return r.b = l + (t - l) / 4, s.b = u + f, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (u + p) / 2, o.b = p - f, a.b = c + (n - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
                    },
                    l = function(t, r, s, o, l) {
                        var h, c, u, p, f, d, m, g, v, _, y, b, x, w = t.length - 1,
                            T = 0,
                            C = t[0].a;
                        for (h = 0; w > h; h++) f = t[T], c = f.a, u = f.d, p = t[T + 1].d, l ? (y = e[h], b = i[h], x = .25 * (b + y) * r / (o ? .5 : n[h] || .5), d = u - (u - c) * (o ? .5 * r : 0 !== y ? x / y : 0), m = u + (p - u) * (o ? .5 * r : 0 !== b ? x / b : 0), g = u - (d + ((m - d) * (3 * y / (y + b) + .5) / 4 || 0))) : (d = u - .5 * (u - c) * r, m = u + .5 * (p - u) * r, g = u - (d + m) / 2), d += g, m += g, f.c = v = d, f.b = 0 !== h ? C : C = f.a + .6 * (f.c - f.a), f.da = u - c, f.ca = v - c, f.ba = C - c, s ? (_ = a(c, C, v, u), t.splice(T, 1, _[0], _[1], _[2], _[3]), T += 4) : T++, C = m;
                        f = t[T], f.b = C, f.c = C + .4 * (f.d - C), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = C - f.a, s && (_ = a(f.a, C, f.c, f.d), t.splice(T, 1, _[0], _[1], _[2], _[3]))
                    },
                    h = function(t, n, r, o) {
                        var a, l, h, c, u, p, f = [];
                        if (o)
                            for (t = [o].concat(t), l = t.length; --l > -1;) "string" == typeof(p = t[l][n]) && "=" === p.charAt(1) && (t[l][n] = o[n] + Number(p.charAt(0) + p.substr(2)));
                        if (a = t.length - 2, 0 > a) return f[0] = new s(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), f;
                        for (l = 0; a > l; l++) h = t[l][n], c = t[l + 1][n], f[l] = new s(h, 0, 0, c), r && (u = t[l + 2][n], e[l] = (e[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (u - c) * (u - c));
                        return f[l] = new s(t[l][n], 0, 0, t[l + 1][n]), f
                    },
                    c = function(t, s, a, c, u, p) {
                        var f, d, m, g, v, _, y, b, x = {},
                            w = [],
                            T = p || t[0];
                        u = "string" == typeof u ? "," + u + "," : o, null == s && (s = 1);
                        for (d in t[0]) w.push(d);
                        if (t.length > 1) {
                            for (b = t[t.length - 1], y = !0, f = w.length; --f > -1;)
                                if (d = w[f], Math.abs(T[d] - b[d]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, f = w.length; --f > -1;) d = w[f], r[d] = -1 !== u.indexOf("," + d + ","), x[d] = h(t, d, r[d], p);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!c) {
                            for (f = w.length; --f > -1;)
                                if (r[d])
                                    for (m = x[w[f]], _ = m.length - 1, g = 0; _ > g; g++) v = m[g + 1].da / i[g] + m[g].da / e[g], n[g] = (n[g] || 0) + v * v;
                            for (f = n.length; --f > -1;) n[f] = Math.sqrt(n[f])
                        }
                        for (f = w.length, g = a ? 4 : 1; --f > -1;) d = w[f], m = x[d], l(m, s, a, c, r[d]), y && (m.splice(0, g), m.splice(m.length - g, g));
                        return x
                    },
                    u = function(t, e, i) {
                        e = e || "soft";
                        var n, r, o, a, l, h, c, u, p, f, d, m = {},
                            g = "cubic" === e ? 3 : 2,
                            v = "soft" === e,
                            _ = [];
                        if (v && i && (t = [i].concat(t)), null == t || g + 1 > t.length) throw "invalid Bezier data";
                        for (p in t[0]) _.push(p);
                        for (h = _.length; --h > -1;) {
                            for (p = _[h], m[p] = l = [], f = 0, u = t.length, c = 0; u > c; c++) n = null == i ? t[c][p] : "string" == typeof(d = t[c][p]) && "=" === d.charAt(1) ? i[p] + Number(d.charAt(0) + d.substr(2)) : Number(d), v && c > 1 && u - 1 > c && (l[f++] = (n + l[f - 2]) / 2), l[f++] = n;
                            for (u = f - g + 1, f = 0, c = 0; u > c; c += g) n = l[c], r = l[c + 1], o = l[c + 2], a = 2 === g ? 0 : l[c + 3], l[f++] = d = 3 === g ? new s(n, r, o, a) : new s(n, (2 * r + n) / 3, (2 * r + o) / 3, o);
                            l.length = f
                        }
                        return m
                    },
                    p = function(t, e, i) {
                        for (var n, r, s, o, a, l, h, c, u, p, f, d = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m], s = p.a, o = p.d - s, a = p.c - s, l = p.b - s, n = r = 0, c = 1; i >= c; c++) h = d * c,
                                u = 1 - h, n = r - (r = (h * h * o + 3 * u * (h * a + u * l)) * h), f = m * i + c - 1, e[f] = (e[f] || 0) + n * n
                    },
                    f = function(t, e) {
                        e = e >> 0 || 6;
                        var i, n, r, s, o = [],
                            a = [],
                            l = 0,
                            h = 0,
                            c = e - 1,
                            u = [],
                            f = [];
                        for (i in t) p(t[i], o, e);
                        for (r = o.length, n = 0; r > n; n++) l += Math.sqrt(o[n]), s = n % e, f[s] = l, s === c && (h += l, s = n / e >> 0, u[s] = f, a[s] = h, l = 0, f = []);
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
                            var n, r, s, o, a, l = e.values || [],
                                h = {},
                                p = l[0],
                                d = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = d ? d instanceof Array ? d : [
                                ["x", "y", "rotation", d === !0 ? 0 : Number(d) || 0]
                            ] : null;
                            for (n in p) this._props.push(n);
                            for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], h[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || h[n] !== l[0][n] && (a = h);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : u(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = f(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (d = this._autoRotate)
                                for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), s = d.length; --s > -1;) {
                                    for (o = 0; 3 > o; o++) n = d[s][o], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                                    n = d[s][2], this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, r, s, o, a, l, h, c, u, p = this._segCount,
                                f = this._func,
                                d = this._target,
                                m = e !== this._startRatio;
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
                            for (n = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], o = this._beziers[s][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._round[s] && (l = Math.round(l)), f[s] ? d[s](l) : d[s] = l;
                            if (this._autoRotate) {
                                var g, v, _, y, b, x, w, T = this._autoRotate;
                                for (r = T.length; --r > -1;) s = T[r][2], x = T[r][3] || 0, w = T[r][4] === !0 ? 1 : t, o = this._beziers[T[r][0]], g = this._beziers[T[r][1]], o && g && (o = o[i], g = g[i], v = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, v += (y - v) * a, y += (o.c + (o.d - o.c) * a - y) * a, _ = g.a + (g.b - g.a) * a, b = g.b + (g.c - g.b) * a, _ += (b - _) * a, b += (g.c + (g.d - g.c) * a - b) * a, l = m ? Math.atan2(b - _, y - v) * w + x : this._initialRotations[r], f[s] ? d[s](l) : d[s] = l)
                            }
                        }
                    }),
                    m = d.prototype;
                d.bezierThrough = c, d.cubicToQuadratic = a, d._autoCSS = !0, d.quadraticToCubic = function(t, e, i) {
                    return new s(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, d._cssRegister = function() {
                    var t = _gsScope._gsDefine.globals.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, s, o, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new d;
                                var h, c, u, p = e.values,
                                    f = p.length - 1,
                                    m = [],
                                    g = {};
                                if (0 > f) return a;
                                for (h = 0; f >= h; h++) u = i(t, p[h], o, a, l, f !== h), m[h] = u.end;
                                for (c in e) g[c] = e[c];
                                return g.values = m, a = new r(t, "bezier", 0, 0, u.pt, 2), a.data = u, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (h = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", h, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", "rotation", h, !1]
                                ] : !1), g.autoRotate && (o._transform || o._enableTransforms(!1), u.autoRotate = o._target._gsTransform), l._onInitTween(u.proxy, g, o._tween), a
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
                var i, n, r, s, o = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                    },
                    a = {},
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
                var h, c, u, p, f, d, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    _ = /[^\d\-\.]/g,
                    y = /(?:\d|\-|\+|=|#|\.)*/g,
                    b = /opacity *= *([^)]*)/i,
                    x = /opacity:([^;]*)/i,
                    w = /alpha\(opacity *=.+?\)/i,
                    T = /^(rgb|hsl)/,
                    C = /([A-Z])/g,
                    S = /-([a-z])/gi,
                    k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    P = function(t, e) {
                        return e.toUpperCase()
                    },
                    E = /(?:Left|Right|Width)/i,
                    A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    O = /,(?=[^\)]*(?:\(|$))/gi,
                    R = Math.PI / 180,
                    N = 180 / Math.PI,
                    $ = {},
                    j = document,
                    L = (j.documentElement, j.createElement("div")),
                    I = j.createElement("img"),
                    M = o._internals = {
                        _specialProps: a
                    },
                    F = navigator.userAgent,
                    z = function() {
                        var t, e = F.indexOf("Android"),
                            i = j.createElement("div");
                        return u = -1 !== F.indexOf("Safari") && -1 === F.indexOf("Chrome") && (-1 === e || Number(F.substr(e + 8, 1)) > 3), f = u && 6 > Number(F.substr(F.indexOf("Version/") + 8, 1)), p = -1 !== F.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(F)) && (d = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
                    }(),
                    q = function(t) {
                        return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    H = function(t) {
                        window.console && console.log(t)
                    },
                    X = "",
                    B = "",
                    W = function(t, e) {
                        e = e || L;
                        var i, n, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (B = 3 === n ? "ms" : i[n], X = "-" + B.toLowerCase() + "-", B + t) : null
                    },
                    U = j.defaultView ? j.defaultView.getComputedStyle : function() {},
                    Y = o.getStyle = function(t, e, i, n, r) {
                        var s;
                        return z || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || U(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : q(t)
                    },
                    V = M.convertToPixels = function(t, i, n, r, s) {
                        if ("px" === r || !r) return n;
                        if ("auto" === r || !n) return 0;
                        var a, l, h, c = E.test(i),
                            u = t,
                            p = L.style,
                            f = 0 > n;
                        if (f && (n = -n), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (c ? t.clientWidth : t.clientHeight);
                        else {
                            if (p.cssText = "border:0 solid red;position:" + Y(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) p[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (u = t.parentNode || j.body, l = u._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * n / 100;
                                p[c ? "width" : "height"] = n + r
                            }
                            u.appendChild(L), a = parseFloat(L[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), c && "%" === r && o.cacheWidths !== !1 && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = 100 * (a / n)), 0 !== a || s || (a = V(t, i, n, r, !0))
                        }
                        return f ? -a : a
                    },
                    Q = M.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Y(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = Y(t, "margin" + n, i);
                        return t["offset" + n] - (V(t, e, parseFloat(r), r.replace(y, "")) || 0)
                    },
                    G = function(t, e) {
                        var i, n, r = {};
                        if (e = e || U(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r[e[i].replace(S, P)] = e.getPropertyValue(e[i]);
                            else
                                for (i in e) r[i] = e[i];
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(S, P)] = e[i]);
                        return z || (r.opacity = q(t)), n = Pt(t, e, !1), r.rotation = n.rotation, r.skewX = n.skewX, r.scaleX = n.scaleX, r.scaleY = n.scaleY, r.x = n.x, r.y = n.y, wt && (r.z = n.z, r.rotationX = n.rotationX, r.rotationY = n.rotationY, r.scaleZ = n.scaleZ), r.filters && delete r.filters, r
                    },
                    Z = function(t, e, i, n, r) {
                        var s, o, a, l = {},
                            h = t.style;
                        for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(_, "") ? s : 0 : Q(t, o), void 0 !== h[o] && (a = new ut(h, o, h[o], a)));
                        if (n)
                            for (o in n) "className" !== o && (l[o] = n[o]);
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
                            s = r.length;
                        for (i = i || U(t, null); --s > -1;) n -= parseFloat(Y(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(Y(t, "border" + r[s] + "Width", i, !0)) || 0;
                        return n
                    },
                    et = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(_, "")), e.oy = parseFloat(r.replace(_, ""))), n + " " + r + (i.length > 2 ? " " + i[2] : "")
                    },
                    it = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    nt = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    rt = function(t, e, i, n) {
                        var r, s, o, a, l = 1e-6;
                        return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), o = Number(s[0].replace(_, "")) * (-1 === t.indexOf("rad") ? 1 : N) - ("=" === t.charAt(1) ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r, o !== o % (r / 2) && (o = 0 > o ? o + r : o - r)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (0 | o / r) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (0 | o / r) * r)), a = e + o), l > a && a > -l && (a = 0), a
                    },
                    st = {
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
                    at = function(t) {
                        var e, i, n, r, s, o;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), st[t] ? st[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, s = Number(t[1]) / 100, o = Number(t[2]) / 100, i = .5 >= o ? o * (s + 1) : o + s - o * s, e = 2 * o - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ot(r + 1 / 3, e, i), t[1] = ot(r, e, i), t[2] = ot(r - 1 / 3, e, i), t) : (t = t.match(m) || st.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : st.black
                    },
                    lt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (l in st) lt += "|" + l + "\\b";
                lt = RegExp(lt + ")", "gi");
                var ht = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, s = e ? (t.match(lt) || [""])[0] : "",
                            o = t.split(s).join("").match(v) || [],
                            a = t.substr(0, t.indexOf(o[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            c = o.length,
                            u = c > 0 ? o[0].replace(m, "") : "";
                        return c ? r = e ? function(t) {
                            var e, p, f, d;
                            if ("number" == typeof t) t += u;
                            else if (n && O.test(t)) {
                                for (d = t.replace(O, "|").split("|"), f = 0; d.length > f; f++) d[f] = r(d[f]);
                                return d.join(",")
                            }
                            if (e = (t.match(lt) || [s])[0], p = t.split(e).join("").match(v) || [], f = p.length, c > f--)
                                for (; c > ++f;) p[f] = i ? p[0 | (f - 1) / 2] : o[f];
                            return a + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, s, p;
                            if ("number" == typeof t) t += u;
                            else if (n && O.test(t)) {
                                for (s = t.replace(O, "|").split("|"), p = 0; s.length > p; p++) s[p] = r(s[p]);
                                return s.join(",")
                            }
                            if (e = t.match(v) || [], p = e.length, c > p--)
                                for (; c > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : o[p];
                            return a + e.join(h) + l
                        } : function(t) {
                            return t
                        }
                    },
                    ct = function(t) {
                        return t = t.split(","),
                            function(e, i, n, r, s, o, a) {
                                var l, h = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return r.parse(e, a, s, o)
                            }
                    },
                    ut = (M._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, s = this.data, o = s.proxy, a = s.firstMPT, l = 1e-6; a;) e = o[a.v], a.r ? e = Math.round(e) : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
                        if (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === t)
                            for (a = s.firstMPT; a;) {
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
                    pt = (M._parseToProxy = function(t, e, i, n, r, s) {
                        var o, a, l, h, c, u = n,
                            p = {},
                            f = {},
                            d = i._transform,
                            m = $;
                        for (i._transform = null, $ = e, n = c = i.parse(t, e, n, r), $ = m, s && (i._transform = d, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                            if (1 >= n.type && (a = n.p, f[a] = n.s + n.c, p[a] = n.s, s || (h = new ut(n, "s", a, h, n.r), n.c = 0), 1 === n.type))
                                for (o = n.l; --o > 0;) l = "xn" + o, a = n.p + "_" + l, f[a] = n.data[l], p[a] = n[l], s || (h = new ut(n, l, a, h, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: p,
                            end: f,
                            firstMPT: h,
                            pt: c
                        }
                    }, M.CSSPropTween = function(t, e, n, r, o, a, l, h, c, u, p) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof pt || s.push(this.n), this.r = h, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === p ? n + r : p, o && (this._next = o, o._prev = this)
                    }),
                    ft = o.parseComplex = function(t, e, i, n, r, s, o, a, l, c) {
                        i = i || s || "", o = new pt(t, e, 0, 0, o, c ? 2 : 1, null, !1, a, i, n), n += "";
                        var u, p, f, d, v, _, y, b, x, w, C, S, k = i.split(", ").join(",").split(" "),
                            P = n.split(", ").join(",").split(" "),
                            E = k.length,
                            A = h !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(O, ", ").split(" "), P = P.join(" ").replace(O, ", ").split(" "), E = k.length), E !== P.length && (k = (s || "").split(" "), E = k.length), o.plugin = l, o.setRatio = c, u = 0; E > u; u++)
                            if (d = k[u], v = P[u], b = parseFloat(d), b || 0 === b) o.appendXtra("", b, it(v, b), v.replace(g, ""), A && -1 !== v.indexOf("px"), !0);
                            else if (r && ("#" === d.charAt(0) || st[d] || T.test(d))) S = "," === v.charAt(v.length - 1) ? ")," : ")", d = at(d), v = at(v), x = d.length + v.length > 6, x && !z && 0 === v[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(P[u]).join("transparent")) : (z || (x = !1), o.appendXtra(x ? "rgba(" : "rgb(", d[0], v[0] - d[0], ",", !0, !0).appendXtra("", d[1], v[1] - d[1], ",", !0).appendXtra("", d[2], v[2] - d[2], x ? "," : S, !0), x && (d = 4 > d.length ? 1 : d[3], o.appendXtra("", d, (4 > v.length ? 1 : v[3]) - d, S, !1)));
                        else if (_ = d.match(m)) {
                            if (y = v.match(g), !y || y.length !== _.length) return o;
                            for (f = 0, p = 0; _.length > p; p++) C = _[p], w = d.indexOf(C, f), o.appendXtra(d.substr(f, w - f), Number(C), it(y[p], C), "", A && "px" === d.substr(w + C.length, 2), 0 === p), f = w + C.length;
                            o["xs" + o.l] += d.substr(f)
                        } else o["xs" + o.l] += o.l ? " " + d : d;
                        if (-1 !== n.indexOf("=") && o.data) {
                            for (S = o.xs0 + o.data.s, u = 1; o.l > u; u++) S += o["xs" + u] + o.data["xn" + u];
                            o.e = S + o["xs" + u]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    dt = 9;
                for (l = pt.prototype, l.l = l.pr = 0; --dt > 0;) l["xn" + dt] = 0, l["xs" + dt] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, n, r, s) {
                    var o = this,
                        a = o.l;
                    return o["xs" + a] += s && a ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new pt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                        s: e + i
                    }, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
                };
                var mt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? W(t) || t : t, a[t] = a[this.p] = this, this.format = e.formatter || ht(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    gt = M._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r, s = t.split(","),
                            o = e.defaultValue;
                        for (i = i || [o], n = 0; s.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, r = new mt(s[n], e)
                    },
                    vt = function(t) {
                        if (!a[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            gt(t, {
                                parser: function(t, i, n, r, s, o, l) {
                                    var h = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[e];
                                    return h ? (h._cssRegister(), a[n].parse(t, i, n, r, s, o, l)) : (H("Error: " + e + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                l = mt.prototype, l.parseComplex = function(t, e, i, n, r, s) {
                    var o, a, l, h, c, u, p = this.keyword;
                    if (this.multi && (O.test(i) || O.test(e) ? (a = e.replace(O, "|").split("|"), l = i.replace(O, "|").split("|")) : p && (a = [e], l = [i])), l) {
                        for (h = l.length > a.length ? l.length : a.length, o = 0; h > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, p && (c = e.indexOf(p), u = i.indexOf(p), c !== u && (i = -1 === u ? l : a, i[o] += " " + p));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return ft(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                }, l.parse = function(t, e, i, n, s, o) {
                    return this.parseComplex(t.style, this.format(Y(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
                }, o.registerSpecialProp = function(t, e, i) {
                    gt(t, {
                        parser: function(t, n, r, s, o, a) {
                            var l = new pt(t, r, 0, 0, o, 2, r, !1, i);
                            return l.plugin = a, l.setRatio = e(t, n, s._tween, r), l
                        },
                        priority: i
                    })
                };
                var _t = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    yt = W("transform"),
                    bt = X + "transform",
                    xt = W("transformOrigin"),
                    wt = null !== W("perspective"),
                    Tt = M.Transform = function() {
                        this.skewY = 0
                    },
                    Ct = window.SVGElement,
                    St = Ct && (d || /Android/i.test(F) && !window.chrome),
                    kt = function(t, e, i) {
                        var n = t.getBBox();
                        e = et(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * n.width : parseFloat(e[0])) + n.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * n.height : parseFloat(e[1])) + n.y
                    },
                    Pt = M.getTransform = function(t, e, i, n) {
                        if (t._gsTransform && i && !n) return t._gsTransform;
                        var s, a, l, h, c, u, p, f, d, m, g, v, _, y = i ? t._gsTransform || new Tt : new Tt,
                            b = 0 > y.scaleX,
                            x = 2e-5,
                            w = 1e5,
                            T = 179.99,
                            C = T * R,
                            S = wt ? parseFloat(Y(t, xt, e, !1, "0 0 0").split(" ")[2]) || y.zOrigin || 0 : 0,
                            k = parseFloat(o.defaultTransformPerspective) || 0;
                        if (yt ? s = Y(t, bt, e, !0) : t.currentStyle && (s = t.currentStyle.filter.match(A), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), s && "none" !== s && "matrix(1, 0, 0, 1, 0, 0)" !== s) {
                            for (a = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = a.length; --l > -1;) h = Number(a[l]), a[l] = (c = h - (h |= 0)) ? (0 | c * w + (0 > c ? -.5 : .5)) / w + h : h;
                            if (16 === a.length) {
                                var P = a[8],
                                    E = a[9],
                                    D = a[10],
                                    O = a[12],
                                    $ = a[13],
                                    j = a[14];
                                if (y.zOrigin && (j = -y.zOrigin, O = P * j - a[12], $ = E * j - a[13], j = D * j + y.zOrigin - a[14]), !i || n || null == y.rotationX) {
                                    var L, I, M, F, z, q, H, X = a[0],
                                        B = a[1],
                                        W = a[2],
                                        U = a[3],
                                        V = a[4],
                                        Q = a[5],
                                        G = a[6],
                                        Z = a[7],
                                        J = a[11],
                                        K = Math.atan2(G, D),
                                        tt = -C > K || K > C;
                                    y.rotationX = K * N, K && (F = Math.cos(-K), z = Math.sin(-K), L = V * F + P * z, I = Q * F + E * z, M = G * F + D * z, P = V * -z + P * F, E = Q * -z + E * F, D = G * -z + D * F, J = Z * -z + J * F, V = L, Q = I, G = M), K = Math.atan2(P, X), y.rotationY = K * N, K && (q = -C > K || K > C, F = Math.cos(-K), z = Math.sin(-K), L = X * F - P * z, I = B * F - E * z, M = W * F - D * z, E = B * z + E * F, D = W * z + D * F, J = U * z + J * F, X = L, B = I, W = M), K = Math.atan2(B, Q), y.rotation = K * N, K && (H = -C > K || K > C, F = Math.cos(-K), z = Math.sin(-K), X = X * F + V * z, I = B * F + Q * z, Q = B * -z + Q * F, G = W * -z + G * F, B = I), H && tt ? y.rotation = y.rotationX = 0 : H && q ? y.rotation = y.rotationY = 0 : q && tt && (y.rotationY = y.rotationX = 0), y.scaleX = (0 | Math.sqrt(X * X + B * B) * w + .5) / w, y.scaleY = (0 | Math.sqrt(Q * Q + E * E) * w + .5) / w, y.scaleZ = (0 | Math.sqrt(G * G + D * D) * w + .5) / w, y.skewX = 0, y.perspective = J ? 1 / (0 > J ? -J : J) : 0, y.x = O, y.y = $, y.z = j
                                }
                            } else if (!(wt && !n && a.length && y.x === a[4] && y.y === a[5] && (y.rotationX || y.rotationY) || void 0 !== y.x && "none" === Y(t, "display", e))) {
                                var et = a.length >= 6,
                                    it = et ? a[0] : 1,
                                    nt = a[1] || 0,
                                    rt = a[2] || 0,
                                    st = et ? a[3] : 1;
                                y.x = a[4] || 0, y.y = a[5] || 0, u = Math.sqrt(it * it + nt * nt), p = Math.sqrt(st * st + rt * rt), f = it || nt ? Math.atan2(nt, it) * N : y.rotation || 0, d = rt || st ? Math.atan2(rt, st) * N + f : y.skewX || 0, m = u - Math.abs(y.scaleX || 0), g = p - Math.abs(y.scaleY || 0), Math.abs(d) > 90 && 270 > Math.abs(d) && (b ? (u *= -1, d += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (p *= -1, d += 0 >= d ? 180 : -180)), v = (f - y.rotation) % 180, _ = (d - y.skewX) % 180, (void 0 === y.skewX || m > x || -x > m || g > x || -x > g || v > -T && T > v && !1 | v * w || _ > -T && T > _ && !1 | _ * w) && (y.scaleX = u, y.scaleY = p, y.rotation = f, y.skewX = d), wt && (y.rotationX = y.rotationY = y.z = 0, y.perspective = k, y.scaleZ = 1)
                            }
                            y.zOrigin = S;
                            for (l in y) x > y[l] && y[l] > -x && (y[l] = 0)
                        } else y = {
                            x: 0,
                            y: 0,
                            z: 0,
                            scaleX: 1,
                            scaleY: 1,
                            scaleZ: 1,
                            skewX: 0,
                            skewY: 0,
                            perspective: k,
                            rotation: 0,
                            rotationX: 0,
                            rotationY: 0,
                            zOrigin: 0
                        };
                        return i && (t._gsTransform = y), y.svg = Ct && t instanceof Ct, y.svg && kt(t, Y(t, xt, r, !1, "50% 50%") + "", y), y.xPercent = y.yPercent = 0, y
                    },
                    Et = function(t) {
                        var e, i, n = this.data,
                            r = -n.rotation * R,
                            s = r + n.skewX * R,
                            o = 1e5,
                            a = (0 | Math.cos(r) * n.scaleX * o) / o,
                            l = (0 | Math.sin(r) * n.scaleX * o) / o,
                            h = (0 | Math.sin(s) * -n.scaleY * o) / o,
                            c = (0 | Math.cos(s) * n.scaleY * o) / o,
                            u = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = l, l = -h, h = -i, e = p.filter, u.filter = "";
                            var f, m, g = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                _ = "absolute" !== p.position,
                                x = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + c,
                                w = n.x + g * n.xPercent / 100,
                                T = n.y + v * n.yPercent / 100;
                            if (null != n.ox && (f = (n.oxp ? .01 * g * n.ox : n.ox) - g / 2, m = (n.oyp ? .01 * v * n.oy : n.oy) - v / 2, w += f - (f * a + m * l), T += m - (f * h + m * c)), _ ? (f = g / 2, m = v / 2, x += ", Dx=" + (f - (f * a + m * l) + w) + ", Dy=" + (m - (f * h + m * c) + T) + ")") : x += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, x) : x + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === c && (_ && -1 === x.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !_) {
                                var C, S, k, P = 8 > d ? 1 : -1;
                                for (f = n.ieOffsetX || 0, m = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + w), n.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > h ? -h : h) * g)) / 2 + T), dt = 0; 4 > dt; dt++) S = K[dt], C = p[S], i = -1 !== C.indexOf("px") ? parseFloat(C) : V(this.t, S, parseFloat(C), C.replace(y, "")) || 0, k = i !== n[S] ? 2 > dt ? -n.ieOffsetX : -n.ieOffsetY : 2 > dt ? f - n.ieOffsetX : m - n.ieOffsetY, u[S] = (n[S] = Math.round(i - k * (0 === dt || 2 === dt ? 1 : P))) + "px"
                            }
                        }
                    },
                    At = M.set3DTransformRatio = function(t) {
                        var e, i, n, r, s, o, a, l, h, c, u, f, d, m, g, v, _, y, b, x, w, T, C, S = this.data,
                            k = this.t.style,
                            P = S.rotation * R,
                            E = S.scaleX,
                            A = S.scaleY,
                            D = S.scaleZ,
                            O = S.x,
                            N = S.y,
                            $ = S.z,
                            j = S.perspective;
                        if (!(1 !== t && 0 !== t || "auto" !== S.force3D || S.rotationY || S.rotationX || 1 !== D || j || $)) return void Dt.call(this, t);
                        if (p) {
                            var L = 1e-4;
                            L > E && E > -L && (E = D = 2e-5), L > A && A > -L && (A = D = 2e-5), !j || S.z || S.rotationX || S.rotationY || (j = 0)
                        }
                        if (P || S.skewX) y = Math.cos(P), b = Math.sin(P), e = y, s = b, S.skewX && (P -= S.skewX * R, y = Math.cos(P), b = Math.sin(P), "simple" === S.skewType && (x = Math.tan(S.skewX * R), x = Math.sqrt(1 + x * x), y *= x, b *= x)), i = -b, o = y;
                        else {
                            if (!(S.rotationY || S.rotationX || 1 !== D || j || S.svg)) return void(k[yt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + O + "px," + N + "px," + $ + "px)" + (1 !== E || 1 !== A ? " scale(" + E + "," + A + ")" : ""));
                            e = o = 1, i = s = 0
                        }
                        u = 1, n = r = a = l = h = c = f = d = m = 0, g = j ? -1 / j : 0, v = S.zOrigin, _ = 1e5, P = S.rotationY * R, P && (y = Math.cos(P), b = Math.sin(P), h = u * -b, d = g * -b, n = e * b, a = s * b, u *= y, g *= y, e *= y, s *= y), P = S.rotationX * R, P && (y = Math.cos(P), b = Math.sin(P), x = i * y + n * b, w = o * y + a * b, T = c * y + u * b, C = m * y + g * b, n = i * -b + n * y, a = o * -b + a * y, u = c * -b + u * y, g = m * -b + g * y, i = x, o = w, c = T, m = C), 1 !== D && (n *= D, a *= D, u *= D, g *= D), 1 !== A && (i *= A, o *= A, c *= A, m *= A), 1 !== E && (e *= E, s *= E, h *= E, d *= E), v && (f -= v, r = n * f, l = a * f, f = u * f + v), r = (x = (r += O) - (r |= 0)) ? (0 | x * _ + (0 > x ? -.5 : .5)) / _ + r : r, l = (x = (l += N) - (l |= 0)) ? (0 | x * _ + (0 > x ? -.5 : .5)) / _ + l : l, f = (x = (f += $) - (f |= 0)) ? (0 | x * _ + (0 > x ? -.5 : .5)) / _ + f : f, S.svg && (r += S.xOrigin - (S.xOrigin * e + S.yOrigin * i), l += S.yOrigin - (S.xOrigin * s + S.yOrigin * o)), k[yt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | e * _) / _, (0 | s * _) / _, (0 | h * _) / _, (0 | d * _) / _, (0 | i * _) / _, (0 | o * _) / _, (0 | c * _) / _, (0 | m * _) / _, (0 | n * _) / _, (0 | a * _) / _, (0 | u * _) / _, (0 | g * _) / _, r, l, f, j ? 1 + -f / j : 1].join(",") + ")"
                    },
                    Dt = M.set2DTransformRatio = function(t) {
                        var e, i, n, r, s, o, a, l, h, c, u = this.data,
                            p = this.t,
                            f = p.style,
                            d = u.x,
                            m = u.y;
                        return !(u.rotationX || u.rotationY || u.z || u.force3D === !0 || "auto" === u.force3D && 1 !== t && 0 !== t) || u.svg && St || !wt ? (r = u.scaleX, s = u.scaleY, void(u.rotation || u.skewX || u.svg ? (e = u.rotation * R, i = e - u.skewX * R, n = 1e5, o = Math.cos(e) * r, a = Math.sin(e) * r, l = Math.sin(i) * -s, h = Math.cos(i) * s, u.svg && (d += u.xOrigin - (u.xOrigin * o + u.yOrigin * l), m += u.yOrigin - (u.xOrigin * a + u.yOrigin * h)), c = (0 | o * n) / n + "," + (0 | a * n) / n + "," + (0 | l * n) / n + "," + (0 | h * n) / n + "," + d + "," + m + ")", u.svg && St ? p.setAttribute("transform", "matrix(" + c) : f[yt] = (u.xPercent || u.yPercent ? "translate(" + u.xPercent + "%," + u.yPercent + "%) matrix(" : "matrix(") + c) : f[yt] = (u.xPercent || u.yPercent ? "translate(" + u.xPercent + "%," + u.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + s + "," + d + "," + m + ")")) : (this.setRatio = At, void At.call(this, t))
                    };
                gt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                    parser: function(t, e, i, n, s, a, l) {
                        if (n._transform) return s;
                        var h, c, u, p, f, d, m, g = n._transform = Pt(t, r, !0, l.parseTransform),
                            v = t.style,
                            _ = 1e-6,
                            y = _t.length,
                            b = l,
                            x = {};
                        if ("string" == typeof b.transform && yt) u = L.style, u[yt] = b.transform, u.display = "block", u.position = "absolute", j.body.appendChild(L), h = Pt(L, null, !1), j.body.removeChild(L);
                        else if ("object" == typeof b) {
                            if (h = {
                                    scaleX: nt(null != b.scaleX ? b.scaleX : b.scale, g.scaleX),
                                    scaleY: nt(null != b.scaleY ? b.scaleY : b.scale, g.scaleY),
                                    scaleZ: nt(b.scaleZ, g.scaleZ),
                                    x: nt(b.x, g.x),
                                    y: nt(b.y, g.y),
                                    z: nt(b.z, g.z),
                                    xPercent: nt(b.xPercent, g.xPercent),
                                    yPercent: nt(b.yPercent, g.yPercent),
                                    perspective: nt(b.transformPerspective, g.perspective)
                                }, m = b.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (u in m) b[u] = m[u];
                                else b.rotation = m;
                                "string" == typeof b.x && -1 !== b.x.indexOf("%") && (h.x = 0, h.xPercent = nt(b.x, g.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (h.y = 0, h.yPercent = nt(b.y, g.yPercent)), h.rotation = rt("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : g.rotation, g.rotation, "rotation", x), wt && (h.rotationX = rt("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : g.rotationX || 0, g.rotationX, "rotationX", x), h.rotationY = rt("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : g.rotationY || 0, g.rotationY, "rotationY", x)), h.skewX = null == b.skewX ? g.skewX : rt(b.skewX, g.skewX), h.skewY = null == b.skewY ? g.skewY : rt(b.skewY, g.skewY), (c = h.skewY - g.skewY) && (h.skewX += c, h.rotation += c)
                        }
                        for (wt && null != b.force3D && (g.force3D = b.force3D, d = !0), g.skewType = b.skewType || g.skewType || o.defaultSkewType, f = g.force3D || g.z || g.rotationX || g.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, f || null == b.scale || (h.scaleZ = 1); --y > -1;) i = _t[y], p = h[i] - g[i], (p > _ || -_ > p || null != b[i] || null != $[i]) && (d = !0, s = new pt(g, i, g[i], p, s), i in x && (s.e = x[i]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                        return p = b.transformOrigin, p && g.svg ? (kt(t, p, h), s = new pt(g, "xOrigin", g.xOrigin, h.xOrigin - g.xOrigin, s, -1, "transformOrigin"), s.b = g.xOrigin, s.e = s.xs0 = h.xOrigin, s = new pt(g, "yOrigin", g.yOrigin, h.yOrigin - g.yOrigin, s, -1, "transformOrigin"), s.b = g.yOrigin, s.e = s.xs0 = h.yOrigin, Rt(v, xt)) : (p || wt && f && g.zOrigin) && (yt ? (d = !0, i = xt, p = (p || Y(t, i, r, !1, "50% 50%")) + "", s = new pt(v, i, 0, 0, s, -1, "transformOrigin"), s.b = v[i], s.plugin = a, wt ? (u = g.zOrigin, p = p.split(" "), g.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0, s.xs0 = s.e = p[0] + " " + (p[1] || "50%") + " 0px", s = new pt(g, "zOrigin", 0, 0, s, -1, s.n), s.b = u, s.xs0 = s.e = g.zOrigin) : s.xs0 = s.e = p) : et(p + "", g)), d && (n._transformType = g.svg && St || !f && 3 !== this._transformType ? 2 : 3), s
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
                    parser: function(t, e, i, s, o) {
                        e = this.format(e);
                        var a, l, h, c, u, p, f, d, m, g, v, _, y, b, x, w, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            C = t.style;
                        for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = W(T[l])), u = c = Y(t, T[l], r, !1, "0px"), -1 !== u.indexOf(" ") && (c = u.split(" "), u = c[0], c = c[1]), p = h = a[l], f = parseFloat(u), _ = u.substr((f + "").length), y = "=" === p.charAt(1), y ? (d = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), d *= parseFloat(p), v = p.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(p), v = p.substr((d + "").length)), "" === v && (v = n[i] || _), v !== _ && (b = V(t, "borderLeft", f, _), x = V(t, "borderTop", f, _), "%" === v ? (u = 100 * (b / m) + "%", c = 100 * (x / g) + "%") : "em" === v ? (w = V(t, "borderLeft", 1, "em"), u = b / w + "em", c = x / w + "em") : (u = b + "px", c = x + "px"), y && (p = parseFloat(u) + d + v, h = parseFloat(c) + d + v)), o = ft(C, T[l], u + " " + c, p + " " + h, !1, "0px", o);
                        return o
                    },
                    prefix: !0,
                    formatter: ht("0px 0px 0px 0px", !1, !0)
                }), gt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, s, o) {
                        var a, l, h, c, u, p, f = "background-position",
                            m = r || U(t, null),
                            g = this.format((m ? d ? m.getPropertyValue(f + "-x") + " " + m.getPropertyValue(f + "-y") : m.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (p = Y(t, "backgroundImage").replace(k, ""), p && "none" !== p)) {
                            for (a = g.split(" "), l = v.split(" "), I.setAttribute("src", p), h = 2; --h > -1;) g = a[h], c = -1 !== g.indexOf("%"), c !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - I.width : t.offsetHeight - I.height, a[h] = c ? parseFloat(g) / 100 * u + "px" : 100 * (parseFloat(g) / u) + "%");
                            g = a.join(" ")
                        }
                        return this.parseComplex(t.style, g, v, s, o)
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
                    parser: ct("marginTop,marginRight,marginBottom,marginLeft")
                }), gt("padding", {
                    parser: ct("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), gt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, s, o) {
                        var a, l, h;
                        return 9 > d ? (l = t.currentStyle, h = 8 > d ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(Y(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
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
                    parser: function(t, e, i, n, s, o) {
                        return this.parseComplex(t.style, this.format(Y(t, "borderTopWidth", r, !1, "0px") + " " + Y(t, "borderTopStyle", r, !1, "solid") + " " + Y(t, "borderTopColor", r, !1, "#000")), this.format(e), s, o)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(lt) || ["#000"])[0]
                    }
                }), gt("borderWidth", {
                    parser: ct("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), gt("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, r) {
                        var s = t.style,
                            o = "cssFloat" in s ? "cssFloat" : "styleFloat";
                        return new pt(s, o, 0, 0, r, -1, i, !1, 0, s[o], e)
                    }
                });
                var Ot = function(t) {
                    var e, i = this.t,
                        n = i.filter || Y(this.data, "filter") || "",
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Y(this.data, "filter")) : (i.filter = n.replace(w, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(b, "opacity=" + r))
                };
                gt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, s, o) {
                        var a = parseFloat(Y(t, "opacity", r, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === Y(t, "visibility", r) && 0 !== e && (a = 0), z ? s = new pt(l, "opacity", a, e - a, s) : (s = new pt(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = h ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = Ot), h && (s = new pt(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit",
                            n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                    }
                });
                var Rt = function(t, e) {
                        e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Nt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Rt(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                gt("className", {
                    parser: function(t, e, n, s, o, a, l) {
                        var h, c, u, p, f, d = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (o = s._classNamePT = new pt(t, n, 0, 0, o, 2), o.setRatio = Nt, o.pr = -11, i = !0, o.b = d, c = G(t, r), u = t._gsClassPT) {
                            for (p = {}, f = u.data; f;) p[f.p] = 1, f = f._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : d.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), s._tween._duration && (t.setAttribute("class", o.e), h = Z(t, c, G(t), l, p), t.setAttribute("class", d), o.data = h.firstMPT, t.style.cssText = m, o = o.xfirst = s.parse(t, h.difs, o, a)), o
                    }
                });
                var $t = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, s = this.t.style,
                            o = a.transform.parse;
                        if ("all" === this.e) s.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], a[i] && (a[i].parse === o ? r = !0 : i = "transformOrigin" === i ? xt : a[i].p), Rt(s, i);
                        r && (Rt(s, yt), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (gt("clearProps", {
                        parser: function(t, e, n, r, s) {
                            return s = new pt(t, n, 0, 0, s, 2), s.setRatio = $t, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
                        }
                    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), dt = l.length; dt--;) vt(l[dt]);
                l = o.prototype, l._firstPT = null, l._onInitTween = function(t, e, a) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = a, this._vars = e, h = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, r = U(t, ""), s = this._overwriteProps;
                    var l, p, d, m, g, v, _, y, b, w = t.style;
                    if (c && "" === w.zIndex && (l = Y(t, "zIndex", r), ("auto" === l || "" === l) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (m = w.cssText, l = G(t, r), w.cssText = m + ";" + e, l = Z(t, l, G(t)).difs, !z && x.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, w.cssText = m), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                        for (b = 3 === this._transformType, yt ? u && (c = !0, "" === w.zIndex && (_ = Y(t, "zIndex", r), ("auto" === _ || "" === _) && this._addLazySet(w, "zIndex", 0)), f && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : w.zoom = 1, d = p; d && d._next;) d = d._next;
                        y = new pt(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, d), y.setRatio = b && wt ? At : yt ? Dt : Et, y.data = this._transform || Pt(t, r, !0), s.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (v = p._next, d = m; d && d.pr > p.pr;) d = d._next;
                            (p._prev = d ? d._prev : g) ? p._prev._next = p: m = p, (p._next = d) ? d._prev = p : g = p, p = v
                        }
                        this._firstPT = m
                    }
                    return !0
                }, l.parse = function(t, e, i, s) {
                    var o, l, c, u, p, f, d, m, g, v, _ = t.style;
                    for (o in e) f = e[o], l = a[o], l ? i = l.parse(t, f, o, this, i, s, e) : (p = Y(t, o, r) + "", g = "string" == typeof f, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || g && T.test(f) ? (g || (f = at(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = ft(_, o, p, f, !0, "transparent", i, 0, s)) : !g || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (c = parseFloat(p), d = c || 0 === c ? p.substr((c + "").length) : "", ("" === p || "auto" === p) && ("width" === o || "height" === o ? (c = tt(t, o, r), d = "px") : "left" === o || "top" === o ? (c = Q(t, o, r), d = "px") : (c = "opacity" !== o ? 0 : 1, d = "")), v = g && "=" === f.charAt(1), v ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(y, "")) : (u = parseFloat(f), m = g ? f.substr((u + "").length) || "" : ""), "" === m && (m = o in n ? n[o] : d), f = u || 0 === u ? (v ? u + c : u) + m : e[o], d !== m && "" !== m && (u || 0 === u) && c && (c = V(t, o, c, d), "%" === m ? (c /= V(t, o, 100, "%") / 100, e.strictUnits !== !0 && (p = c + "%")) : "em" === m ? c /= V(t, o, 1, "em") : "px" !== m && (u = V(t, o, u, m), m = "px"), v && (u || 0 === u) && (f = u + c + m)), v && (u += c), !c && 0 !== c || !u && 0 !== u ? void 0 !== _[o] && (f || "NaN" != f + "" && null != f) ? (i = new pt(_, o, u || c || 0, 0, i, -1, o, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== o && -1 === o.indexOf("Style") ? f : p) : H("invalid " + o + " tween value: " + e[o]) : (i = new pt(_, o, c, u - c, i, 0, o, h !== !1 && ("px" === m || "zIndex" === o), 0, p, f), i.xs0 = m)) : i = ft(_, o, p, f, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
                    return i
                }, l.setRatio = function(t) {
                    var e, i, n, r = this._firstPT,
                        s = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)
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
                    this._transform = this._transform || Pt(this._target, r, !0), this._transformType = this._transform.svg && St || !t && 3 !== this._transformType ? 2 : 3
                };
                var jt = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                l._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new pt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = jt, n.data = this
                }, l._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, l._kill = function(e) {
                    var i, n, r, s = e;
                    if (e.autoAlpha || e.alpha) {
                        s = {};
                        for (n in e) s[n] = e[n];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
                };
                var Lt = function(t, e, i) {
                    var n, r, s, o;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Lt(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], o = s.type, s.style && (e.push(G(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Lt(s, e, i)
                };
                return o.cascadeTo = function(t, i, n) {
                    var r, s, o, a = e.to(t, i, n),
                        l = [a],
                        h = [],
                        c = [],
                        u = [],
                        p = e._internals.reservedProps;
                    for (t = a._targets || a.target, Lt(t, h, u), a.render(i, !0), Lt(t, c), a.render(0, !0), a._enabled(!0), r = u.length; --r > -1;)
                        if (s = Z(u[r], h[r], c[r]), s.firstMPT) {
                            s = s.difs;
                            for (o in n) p[o] && (s[o] = n[o]);
                            l.push(e.to(u[r], i, s))
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
                    for (var t, e, i, n = this._tween, r = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), s = r.length, o = {}, a = n._propLookup.roundProps; --s > -1;) o[r[s]] = 1;
                    for (s = r.length; --s > -1;)
                        for (t = r[s], e = n._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(o, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a), e = i;
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
                    var i, n, r, s, o, a, l = e.useRadians === !0 ? 2 * Math.PI : 360,
                        h = 1e-6;
                    for (i in e) "useRadians" !== i && (a = (e[i] + "").split("_"), n = a[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), s = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, o = s - r, a.length && (n = a.join("_"), -1 !== n.indexOf("short") && (o %= l, o !== o % (l / 2) && (o = 0 > o ? o + l : o - l)), -1 !== n.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * l) % l - (0 | o / l) * l : -1 !== n.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * l) % l - (0 | o / l) * l)), (o > h || -h > o) && (this._addTween(t, i, r, r + o, i), this._overwriteProps.push(i)));
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
                    s = r.com.greensock,
                    o = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = s._class,
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
                    for (var i, n, r, s, o, a, l = e.taper || "none", h = [], c = 0, u = 0 | (e.points || 20), f = u, d = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = d ? Math.random() : 1 / u * f, n = g ? g.getRatio(i) : i, "none" === l ? r = v : "out" === l ? (s = 1 - i, r = s * s * v) : "in" === l ? r = i * i * v : .5 > i ? (s = 2 * i, r = .5 * s * s * v) : (s = 2 * (1 - i), r = .5 * s * s * v), d ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), h[c++] = {
                        x: i,
                        y: n
                    };
                    for (h.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new p(1, 1, null), f = u; --f > -1;) o = h[f], a = new p(o.x, o.y, a);
                    this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
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
                            this._p1 = t || 1, this._p2 = e || n, this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        s = r.prototype = new t;
                    return s.constructor = r, s.getRatio = i, s.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * o / this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2))
                }, .3), n("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2) + 1
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
            var n, r, s, o, a, l = function(t) {
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
                m = function(n, r, s, o) {
                    this.sc = d[n] ? d[n].sc : [], d[n] = this, this.gsClass = null, this.func = s;
                    var a = [];
                    this.check = function(h) {
                        for (var c, u, p, f, g = r.length, v = g; --g > -1;)(c = d[r[g]] || new m(r[g], [])).gsClass ? (a[g] = c.gsClass, v--) : h && c.sc.push(this);
                        if (0 === v && s)
                            for (u = ("com.greensock." + n).split("."), p = u.pop(), f = l(u.join("."))[p] = this.gsClass = s.apply(s, a), o && (i[p] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return f
                                }) : n === e && "undefined" != typeof module && module.exports && (module.exports = f)), g = 0; this.sc.length > g; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                g = t._gsDefine = function(t, e, i, n) {
                    return new m(t, e, i, n)
                },
                v = h._class = function(t, e, i) {
                    return e = e || function() {}, g(t, [], function() {
                        return e
                    }, i), e
                };
            g.globals = i;
            var _ = [0, 0, 1, 1],
                y = [],
                b = v("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? _.concat(e) : _
                }, !0),
                x = b.map = {},
                w = b.register = function(t, e, i, n) {
                    for (var r, s, o, a, l = e.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (s = l[c], r = n ? v("easing." + s, null, !0) : h.easing[s] || {}, o = u.length; --o > -1;) a = u[o], x[s + "." + a] = x[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for (s = b.prototype, s._calcEnd = !1, s.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) s = n[r] + ",Power" + r, w(new b(null, null, 1, r), s, "easeOut", !0), w(new b(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), w(new b(null, null, 3, r), s, "easeInOut");
            x.linear = h.easing.Linear.easeIn, x.swing = h.easing.Quad.easeInOut;
            var T = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            s = T.prototype, s.addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var s, l, h = this._listeners[t],
                    c = 0;
                for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) s = h[l], s.c === e && s.s === i ? h.splice(l, 1) : 0 === c && r > s.pr && (c = l + 1);
                h.splice(c, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                }), this !== o || a || o.wake()
            }, s.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, s.dispatchEvent = function(t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var C = t.requestAnimationFrame,
                S = t.cancelAnimationFrame,
                k = Date.now || function() {
                    return (new Date).getTime()
                },
                P = k();
            for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !C;) C = t[n[r] + "RequestAnimationFrame"], S = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, n, r, s, l, h = this,
                    u = k(),
                    f = e !== !1 && C,
                    d = 500,
                    m = 33,
                    g = function(t) {
                        var e, o, a = k() - P;
                        a > d && (u += a - m), P += a, h.time = (P - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= s ? .004 : s - e), o = !0), t !== !0 && (r = n(g)), o && h.dispatchEvent("tick")
                    };
                T.call(h), h.time = h.frame = 0, h.tick = function() {
                    g(!0)
                }, h.lagSmoothing = function(t, e) {
                    d = t || 1 / c, m = Math.min(e, d, 0)
                }, h.sleep = function() {
                    null != r && (f && S ? S(r) : clearTimeout(r), n = p, r = null, h === o && (a = !1))
                }, h.wake = function() {
                    null !== r ? h.sleep() : h.frame > 10 && (P = k() - d + 5), n = 0 === i ? p : f && C ? C : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                    }, h === o && (a = !0), g(2)
                }, h.fps = function(t) {
                    return arguments.length ? (i = t, s = 1 / (i || 60), l = this.time + s, void h.wake()) : i
                }, h.useRAF = function(t) {
                    return arguments.length ? (h.sleep(), f = t, void h.fps(i)) : f
                }, h.fps(t), setTimeout(function() {
                    f && (!r || 5 > h.frame) && h.useRAF(!1)
                }, 1500)
            }), s = h.Ticker.prototype = new h.events.EventDispatcher, s.constructor = h.Ticker;
            var E = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, X) {
                    a || o.wake();
                    var i = this.vars.useFrames ? H : X;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            o = E.ticker = new h.Ticker, s = E.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
            var A = function() {
                a && k() - P > 2e3 && o.wake(), setTimeout(A, 2e3)
            };
            A(), s.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, s.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, s.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, s.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, s.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, s.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, s.render = function() {}, s.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, s.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, s._enabled = function(t, e) {
                return a || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, s._kill = function() {
                return this._enabled(!1, !1)
            }, s.kill = function(t, e) {
                return this._kill(t, e), this
            }, s._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, s._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, s.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, s.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, s.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, s.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, s.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, s.totalTime = function(t, e, i) {
                if (a || o.wake(), !arguments.length) return this._totalTime;
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
            }, s.progress = s.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, s.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, s.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, s.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, s.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, s.paused = function(t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    a || t || o.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        n = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var D = v("core.SimpleTimeline", function(t) {
                E.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            s = D.prototype = new E, s.constructor = D, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(t, e) {
                var i, n;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = t._startTime; i && i._startTime > n;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, s._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, s.render = function(t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, s.rawTime = function() {
                return a || o.wake(), this._totalTime
            };
            var O = v("TweenLite", function(e, i, n) {
                    if (E.call(this, i, n), this.render = O.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : O.selector(e) || e;
                    var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? q[O.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (a || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = o = u(e), this._propLookup = [], this._siblings = [], r = 0; o.length > r; r++) s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(u(s))) : (this._siblings[r] = W(s, this, !1), 1 === l && this._siblings[r].length > 1 && Y(s, this, null, 1, this._siblings[r])) : (s = o[r--] = O.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = W(e, this, !1), 1 === l && this._siblings.length > 1 && Y(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
                }, !0),
                R = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                N = function(t, e) {
                    var i, n = {};
                    for (i in t) z[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!I[i] || I[i] && I[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            s = O.prototype = new E, s.constructor = O, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, O.version = "1.14.0", O.defaultEase = s._ease = new b(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = o, O.autoSleep = !0, O.lagSmoothing = function(t, e) {
                o.lagSmoothing(t, e)
            }, O.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (O.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var $ = [],
                j = {},
                L = O._internals = {
                    isArray: f,
                    isSelector: R,
                    lazyTweens: $
                },
                I = O._plugins = {},
                M = L.tweenLookup = {},
                F = 0,
                z = L.reservedProps = {
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
                q = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                H = E._rootFramesTimeline = new D,
                X = E._rootTimeline = new D,
                B = L.lazyRender = function() {
                    var t, e = $.length;
                    for (j = {}; --e > -1;) t = $[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    $.length = 0
                };
            X._startTime = o.time, H._startTime = o.frame, X._active = H._active = !0, setTimeout(B, 1), E._updateRoot = O.render = function() {
                var t, e, i;
                if ($.length && B(), X.render((o.time - X._startTime) * X._timeScale, !1, !1), H.render((o.frame - H._startTime) * H._timeScale, !1, !1), $.length && B(), !(o.frame % 120)) {
                    for (i in M) {
                        for (e = M[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete M[i]
                    }
                    if (i = X._first, (!i || i._paused) && O.autoSleep && !H._first && 1 === o._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || o.sleep()
                    }
                }
            }, o.addEventListener("tick", E._updateRoot);
            var W = function(t, e, i) {
                    var n, r, s = t._gsTweenID;
                    if (M[s || (t._gsTweenID = s = "t" + F++)] || (M[s] = {
                            target: t,
                            tweens: []
                        }), e && (n = M[s].tweens, n[r = n.length] = e, i))
                        for (; --r > -1;) n[r] === e && n.splice(r, 1);
                    return M[s].tweens
                },
                U = function(t, e, i, n) {
                    var r = t.vars.onOverwrite;
                    r && r(t, e, i, n), r = O.onOverwrite, r && r(t, e, i, n)
                },
                Y = function(t, e, i, n, r) {
                    var s, o, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, s = 0; l > s; s++)
                            if ((a = r[s]) !== e) a._gc || (a._enabled(!1, !1) && (o = !0), U(a, e));
                            else if (5 === n) break;
                        return o
                    }
                    var h, u = e._startTime + c,
                        p = [],
                        f = 0,
                        d = 0 === e._duration;
                    for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || V(e, 0, d), 0 === V(a, h, d) && (p[f++] = a)) : u >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > u && ((d || !a._initted) && 2e-10 >= u - a._startTime || (p[f++] = a)));
                    for (s = f; --s > -1;) a = p[s], 2 === n && a._kill(i, t, e) && (o = !0), (2 !== n || !a._firstPT && a._initted) && (a._enabled(!1, !1) && (o = !0), 2 !== n && U(a, e));
                    return o
                },
                V = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                        if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * c > s - e ? c : (s += t.totalDuration() / t._timeScale / r) > e + c ? 0 : s - e - c
                };
            s._init = function() {
                var t, e, i, n, r, s = this.vars,
                    o = this._overwrittenProps,
                    a = this._duration,
                    l = !!s.immediateRender,
                    h = s.ease;
                if (s.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in s.startAt) r[n] = s.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = O.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (s.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in s) z[n] && "autoCSS" !== n || (i[n] = s[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = O.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = h = h ? h instanceof b ? h : "function" == typeof h ? new b(h, s.easeParams) : x[h] || O.defaultEase : O.defaultEase, s.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, o);
                if (e && O._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = s.onUpdate, this._initted = !0
            }, s._initProps = function(e, i, n, r) {
                var s, o, a, l, h, c;
                if (null == e) return !1;
                j[e._gsTweenID] && B(), this.vars.css || e.style && e !== t && e.nodeType && I.css && this.vars.autoCSS !== !1 && N(this.vars, e);
                for (s in this.vars) {
                    if (c = this.vars[s], z[s]) c && (c instanceof Array || c.push && f(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
                    else if (I[s] && (l = new I[s])._onInitTween(e, this.vars[s], this)) {
                        for (this._firstPT = h = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: s,
                                pg: !0,
                                pr: l._priority
                            }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[s] = h = {
                        _next: this._firstPT,
                        t: e,
                        p: s,
                        f: "function" == typeof e[s],
                        n: s,
                        pg: !1,
                        pr: 0
                    }, h.s = h.f ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), h.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - h.s || 0;
                    h && h._next && (h._next._prev = h)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && Y(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (j[e._gsTweenID] = !0), a)
            }, s.render = function(t, e, i) {
                var n, r, s, o, a = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === c) && h !== t && (i = !0, h > c && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : c);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0 && h !== c) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1,
                    0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : c)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l,
                        p = this._easeType,
                        f = this._easePower;
                    (1 === p || 3 === p && u >= .5) && (u = 1 - u), 3 === p && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === p ? 1 - u : 2 === p ? u : .5 > t / l ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, $.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === l && this._rawPrevTime === c && o !== c && (this._rawPrevTime = 0))
                }
            }, s._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
                var n, r, s, o, a, l, h, c, u;
                if ((f(e) || R(e)) && "number" != typeof e[0])
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
                        for (s in h)(o = a[s]) && (u || (u = []), u.push(s), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1), u && i && U(this, i, e, u)
                    }
                }
                return l
            }, s.invalidate = function() {
                return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], E.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
            }, s._enabled = function(t, e) {
                if (a || o.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = W(n[i], this, !0);
                    else this._siblings = W(this.target, this, !0)
                }
                return E.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
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
                var i, n, r, s;
                if ((f(t) || R(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(O.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                } else
                    for (n = W(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, O.killTweensOf = O.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = O.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
            };
            var Q = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype
            }, !0);
            if (s = Q.prototype, Q.version = "1.10.1", Q.API = 2, s._firstPT = null, s._addTween = function(t, e, i, n, r, s) {
                    var o, a;
                    return null != n && (o = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: o,
                        f: "function" == typeof t[e],
                        n: r || e,
                        r: s
                    }, a._next && (a._next._prev = a), a) : void 0
                }, s.setRatio = function(t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, s._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, s._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, O._onPluginEvent = function(t, e) {
                    var i, n, r, s, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
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
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        o = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            Q.call(this, i, n), this._overwriteProps = r || []
                        }, t.global === !0),
                        a = o.prototype = new Q(i);
                    a.constructor = o, o.API = t.API;
                    for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                    return o.version = t.version, Q.activate([o]), o
                }, n = t._gsQueue) {
                for (r = 0; n.length > r; r++) n[r]();
                for (s in d) d[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
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
            var r, s, o, a, l, h, c, u, p, f, d, m, g, v, _, y;
            return r = i(n), u = t.call(n, "ontouchstart") >= 0, a = {
                horizontal: {},
                vertical: {}
            }, l = 1, c = {}, h = "waypoints-context-id", d = "resize.waypoints", m = "scroll.waypoints", g = 1, v = "waypoints-waypoint-ids", _ = "waypoint", y = "waypoints", s = function() {
                function t(t) {
                    var e = this;
                    this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
                        x: t.scrollLeft(),
                        y: t.scrollTop()
                    }, this.waypoints = {
                        horizontal: {},
                        vertical: {}
                    }, t.data(h, this.id), c[this.id] = this, t.bind(m, function() {
                        var t;
                        return e.didScroll || u ? void 0 : (e.didScroll = !0, t = function() {
                            return e.doScroll(), e.didScroll = !1
                        }, n.setTimeout(t, i[y].settings.scrollThrottle))
                    }), t.bind(d, function() {
                        var t;
                        return e.didResize ? void 0 : (e.didResize = !0, t = function() {
                            return i[y]("refresh"), e.didResize = !1
                        }, n.setTimeout(t, i[y].settings.resizeThrottle))
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
                    }, !u || t.vertical.oldScroll && t.vertical.newScroll || i[y]("refresh"), i.each(t, function(t, n) {
                        var r, s, o;
                        return o = [], s = n.newScroll > n.oldScroll, r = s ? n.forward : n.backward, i.each(e.waypoints[t], function(t, e) {
                            var i, r;
                            return n.oldScroll < (i = e.offset) && i <= n.newScroll ? o.push(e) : n.newScroll < (r = e.offset) && r <= n.oldScroll ? o.push(e) : void 0
                        }), o.sort(function(t, e) {
                            return t.offset - e.offset
                        }), s || o.reverse(), i.each(o, function(t, e) {
                            return e.options.continuous || t === o.length - 1 ? e.trigger([r]) : void 0
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
                            contextDimension: n ? i[y]("viewportHeight") : this.$element.height(),
                            oldScroll: this.oldScroll.y,
                            forward: "down",
                            backward: "up",
                            offsetProp: "top"
                        }
                    }, i.each(t, function(t, e) {
                        return i.each(r.waypoints[t], function(t, n) {
                            var r, s, o, a, l;
                            return r = n.options.offset, o = n.offset, s = i.isWindow(n.element) ? 0 : n.$element.offset()[e.offsetProp], i.isFunction(r) ? r = r.apply(n.element) : "string" == typeof r && (r = parseFloat(r), n.options.offset.indexOf("%") > -1 && (r = Math.ceil(e.contextDimension * r / 100))), n.offset = s - e.contextOffset + e.contextScroll - r, n.options.onlyOnScroll && null != o || !n.enabled ? void 0 : null !== o && o < (a = e.oldScroll) && a <= n.offset ? n.trigger([e.backward]) : null !== o && o > (l = e.oldScroll) && l >= n.offset ? n.trigger([e.forward]) : null === o && e.oldScroll >= n.offset ? n.trigger([e.forward]) : void 0
                        })
                    })
                }, t.prototype.checkEmpty = function() {
                    return i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([d, m].join(" ")), delete c[this.id]) : void 0
                }, t
            }(), o = function() {
                function t(t, e, n) {
                    var r, s;
                    n = i.extend({}, i.fn[_].defaults, n), "bottom-in-view" === n.offset && (n.offset = function() {
                        var t;
                        return t = i[y]("viewportHeight"), i.isWindow(e.element) || (t = e.$element.height()), t - i(this).outerHeight()
                    }), this.$element = t, this.element = t[0], this.axis = n.horizontal ? "horizontal" : "vertical", this.callback = n.handler, this.context = e, this.enabled = n.enabled, this.id = "waypoints" + g++, this.offset = null, this.options = n, e.waypoints[this.axis][this.id] = this, a[this.axis][this.id] = this, r = null != (s = t.data(v)) ? s : [], r.push(this.id), t.data(v, r)
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
            }(), f = {
                init: function(t, e) {
                    var n;
                    return null == e && (e = {}), null == (n = e.handler) && (e.handler = t), this.each(function() {
                        var t, n, r, a;
                        return t = i(this), r = null != (a = e.context) ? a : i.fn[_].defaults.context, i.isWindow(r) || (r = t.closest(r)), r = i(r), n = c[r.data(h)], n || (n = new s(r)), new o(t, n, e)
                    }), i[y]("refresh"), this
                },
                disable: function() {
                    return f._invoke(this, "disable")
                },
                enable: function() {
                    return f._invoke(this, "enable")
                },
                destroy: function() {
                    return f._invoke(this, "destroy")
                },
                prev: function(t, e) {
                    return f._traverse.call(this, t, e, function(t, e, i) {
                        return e > 0 ? t.push(i[e - 1]) : void 0
                    })
                },
                next: function(t, e) {
                    return f._traverse.call(this, t, e, function(t, e, i) {
                        return e < i.length - 1 ? t.push(i[e + 1]) : void 0
                    })
                },
                _traverse: function(t, e, r) {
                    var s, o;
                    return null == t && (t = "vertical"), null == e && (e = n), o = p.aggregate(e), s = [], this.each(function() {
                        var e;
                        return e = i.inArray(this, o[t]), r(s, e, o[t])
                    }), this.pushStack(s)
                },
                _invoke: function(t, e) {
                    return t.each(function() {
                        var t;
                        return t = o.getWaypointsByElement(this), i.each(t, function(t, i) {
                            return i[e](), !0
                        })
                    }), this
                }
            }, i.fn[_] = function() {
                var t, n;
                return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], f[n] ? f[n].apply(this, t) : i.isFunction(n) ? f.init.apply(this, arguments) : i.isPlainObject(n) ? f.init.apply(this, [null, n]) : n ? i.error("The " + n + " method does not exist in jQuery Waypoints.") : i.error("jQuery Waypoints needs a callback function or handler option.")
            }, i.fn[_].defaults = {
                context: n,
                continuous: !0,
                enabled: !0,
                horizontal: !1,
                offset: 0,
                triggerOnce: !1
            }, p = {
                refresh: function() {
                    return i.each(c, function(t, e) {
                        return e.refresh()
                    })
                },
                viewportHeight: function() {
                    var t;
                    return null != (t = n.innerHeight) ? t : r.height()
                },
                aggregate: function(t) {
                    var e, n, r;
                    return e = a, t && (e = null != (r = c[i(t).data(h)]) ? r.waypoints : void 0), e ? (n = {
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
                    return null == t && (t = n), p._filter(t, "vertical", function(t, e) {
                        return e.offset <= t.oldScroll.y
                    })
                },
                below: function(t) {
                    return null == t && (t = n), p._filter(t, "vertical", function(t, e) {
                        return e.offset > t.oldScroll.y
                    })
                },
                left: function(t) {
                    return null == t && (t = n), p._filter(t, "horizontal", function(t, e) {
                        return e.offset <= t.oldScroll.x
                    })
                },
                right: function(t) {
                    return null == t && (t = n), p._filter(t, "horizontal", function(t, e) {
                        return e.offset > t.oldScroll.x
                    })
                },
                enable: function() {
                    return p._invoke("enable")
                },
                disable: function() {
                    return p._invoke("disable")
                },
                destroy: function() {
                    return p._invoke("destroy")
                },
                extendFn: function(t, e) {
                    return f[t] = e
                },
                _invoke: function(t) {
                    var e;
                    return e = i.extend({}, a.vertical, a.horizontal), i.each(e, function(e, i) {
                        return i[t](), !0
                    })
                },
                _filter: function(t, e, n) {
                    var r, s;
                    return (r = c[i(t).data(h)]) ? (s = [], i.each(r.waypoints[e], function(t, e) {
                        return n(r, e) ? s.push(e) : void 0
                    }), s.sort(function(t, e) {
                        return t.offset - e.offset
                    }), i.map(s, function(t) {
                        return t.element
                    })) : []
                }
            }, i[y] = function() {
                var t, i;
                return i = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], p[i] ? p[i].apply(null, t) : p.aggregate.call(null, i)
            }, i[y].settings = {
                resizeThrottle: 100,
                scrollThrottle: 30
            }, r.load(function() {
                return i[y]("refresh")
            })
        })
    }.call(this),
    function(t) {
        var e = new Array,
            i = new Array,
            n = function() {},
            r = 0,
            s = {
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
                if (s.onetimeLoad) {
                    for (var t, e = document.cookie.split("; "), i = 0; t = e[i] && e[i].split("="); i++)
                        if ("jpreLoader" === t.shift()) return t.join("=");
                    return !1
                }
                return !1
            },
            a = function(t) {
                if (s.onetimeLoad) {
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
                    }).appendTo("body"), s.showSplash) {
                    jContent = t("<div></div>").attr("id", "jpreSlide").appendTo(jOverlay);
                    var e = t(window).width() - t(jContent).width();
                    t(jContent).css({
                        position: "absolute",
                        top: s.splashVPos,
                        left: Math.round(50 / t(window).width() * e) + "%"
                    }), t(jContent).html(t(s.splashID).wrap("<div/>").parent().html()), t(s.splashID).remove(), s.splashFunction()
                }
                jLoader = t("<div></div>").attr("id", "jpreLoader").appendTo(jOverlay);
                var i = t(window).width() - t(jLoader).width();
                t(jLoader).css({
                    position: "absolute",
                    top: s.loaderVPos,
                    left: Math.round(50 / t(window).width() * i) + "%"
                }), jBar = t("<div></div>").attr("id", "jpreBar").css({
                    width: "0%",
                    height: "100%"
                }).appendTo(jLoader), s.showPercentage && (jPer = t("<div></div>").attr("id", "jprePercentage").css({
                    position: "relative",
                    height: "100%"
                }).appendTo(jLoader).html("Loading...")), s.autoclose || (jButton = t("<div></div>").attr("id", "jpreButton").on("click", function() {
                    f()
                }).css({
                    position: "relative",
                    height: "100%"
                }).appendTo(jLoader).text(s.closeBtnText).hide())
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
                    }, 500, "linear"), s.showPercentage && t(jPer).text(i + "%"), r >= e.length) {
                    if (r = e.length, a(), s.showPercentage && t(jPer).text("100%"), s.debugMode) {
                        d()
                    }
                    t(jBar).stop().animate({
                        width: "100%"
                    }, 500, "linear", function() {
                        s.autoClose ? f() : t(jButton).fadeIn(1e3)
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
            return e && t.extend(s, e), "function" == typeof i && (n = i), t("body").css({
                display: "block"
            }), this.each(function() {
                o() ? (t(s.splashID).remove(), n()) : (l(), h(this), c())
            })
        }
    }(jQuery);
var $wrapper = $(".wrapper"),
    $loading = $("#loading"),
    $window = $(window),
    $header = $(".header-fixed .header-sticky"),
    $recruitInfoArea = $("#recruit-info"),
    $recruitInfo = $(".service");
$wrapper.jpreLoader({
    loaderVPos: "50%",
    autoClose: !0
}, function() {
    handleFastClick(), handleHeader(), handleModal(), handleAnimation(), TweenMax.to($wrapper, .7, {
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
    handleModal = function() {
        $("#btn-download-resume").click(function() {
            window.location.href = "/resume-template", $("#privacy-modal").modal("hide")
        })
    },
    handleAnimation = function() {
        TweenMax.set($recruitInfoArea, {
            perspective: 800
        }), TweenMax.set($recruitInfo, {
            transformPerspective: 800,
            rotationX: 90,
            autoAlpha: 0
        })
    },
    startAnimation = function() {
        $recruitInfoArea.waypoint(function() {
            TweenMax.staggerTo($recruitInfo, .5, {
                rotationX: 0,
                autoAlpha: 1
            }, .3)
        }, {
            offset: "100%",
            triggerOnce: !0
        })
    };
