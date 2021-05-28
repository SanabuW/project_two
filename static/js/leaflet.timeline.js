!(function (t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var r = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            i,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 5));
})([
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = (function () {
      function t(t) {
        this.value = t;
      }
      return (
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            var t = 1;
            return (
              this.left && (t += this.left.size),
              this.right && (t += this.right.size),
              t
            );
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.withParent = function (t) {
          return (this.parent = t), this;
        }),
        (t.prototype.withoutParent = function () {
          return (this.parent = void 0), this;
        }),
        (t.prototype.setLeft = function (t) {
          this.left = t.withParent(this);
        }),
        (t.prototype.setRight = function (t) {
          this.right = t.withParent(this);
        }),
        Object.defineProperty(t.prototype, "isLeftChild", {
          get: function () {
            return !!this.parent && this.parent.left === this;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "isRightChild", {
          get: function () {
            return !!this.parent && this.parent.right === this;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "leftmostDescendant", {
          get: function () {
            return this.left ? this.left.leftmostDescendant : this;
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "rightmostDescendant", {
          get: function () {
            return this.right ? this.right.rightmostDescendant : this;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.prettyPrintValue = function () {
          return "" + this.value;
        }),
        (t.prototype.prettyPrint = function (t) {
          void 0 === t && (t = "");
          var e =
            t.substr(0, t.length - 1) +
            (this.parent ? (this.isRightChild ? "├" : "└") : "") +
            "─┬─ " +
            this.prettyPrintValue() +
            "\n";
          return (
            this.right
              ? (e += this.right.prettyPrint(t + " │"))
              : (e += t + " ├─── ×\n"),
            this.left
              ? (e += this.left.prettyPrint(t + "  "))
              : (e += t + " └─── ×\n"),
            e
          );
        }),
        (t.prototype.toString = function () {
          return this.prettyPrint();
        }),
        t
      );
    })();
    e.BinaryTree = i;
  },
  function (t, e, n) {
    "use strict";
    var i,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var i,
            r,
            o = n.call(t),
            a = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(i = o.next()).done; )
              a.push(i.value);
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              i && !i.done && (n = o.return) && n.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
          return a;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = n(2),
      s = (function (t) {
        function e(e, n, i) {
          void 0 === n &&
            (n = function (t, e) {
              return t < e;
            }),
            void 0 === i &&
              (i = function (t, e) {
                return t === e;
              });
          var r = t.call(this, e) || this;
          return (r.cmp = n), (r.eq = i), r;
        }
        return (
          r(e, t),
          (e.fromArray = function (t, n, i) {
            if (0 !== t.length) {
              for (var r = new e(t[0], n, i), o = 1; o < t.length; o++)
                r.insert(t[o]);
              return r;
            }
          }),
          (e.prototype.findParentAndSideFor = function (t) {
            for (var e = this; ; )
              if (this.cmp(t, e.value)) {
                if (!e.left) return [e, "left"];
                e = e.left;
              } else {
                if (!e.right) return [e, "right"];
                e = e.right;
              }
          }),
          (e.prototype.insert = function (t) {
            var n = o(this.findParentAndSideFor(t), 2),
              i = n[0];
            return (i[n[1]] = new e(t, this.cmp, this.eq).withParent(i)), this;
          }),
          (e.prototype.search = function (t) {
            for (var e = this; e && void 0 !== e.value; ) {
              if (this.eq(e.value, t)) return e;
              e = this.cmp(t, e.value) ? e.left : e.right;
            }
          }),
          (e.prototype.contains = function (t) {
            return Boolean(this.search(t));
          }),
          (e.prototype.remove = function (t) {
            var n = this.search(t);
            if (!n) return this;
            var i = null;
            if (
              (n !== this ||
                this.parent ||
                ((this.parent = new e(this.value, this.cmp, this.eq)),
                (this.parent.left = this.withParent(this.parent)),
                (i = this.parent)),
              a.assert(void 0 !== n.parent),
              n.left && n.right)
            ) {
              var r = n.right.leftmostDescendant;
              n.value = r.value;
              var o = r.parent;
              (o[(l = o.left === r ? "left" : "right")] = r.right),
                r.right && (r.right.parent = o);
            } else {
              var s = n.parent,
                l = s.left === n ? "left" : "right";
              n.left
                ? ((s[l] = n.left), (n.left.parent = n.parent))
                : ((s[l] = n.right), n.right && (n.right.parent = n.parent));
            }
            return i ? (i.left ? i.left.withoutParent() : void 0) : this;
          }),
          (e.prototype.getPredecessor = function (t) {
            return this.getNeighbor(t, !0);
          }),
          (e.prototype.getSuccessor = function (t) {
            return this.getNeighbor(t, !1);
          }),
          (e.prototype.getNeighbor = function (t, e) {
            var n = this.search(t);
            if (n) {
              var i, r;
              if (
                (e
                  ? ((i = "left"), (r = "rightmostDescendant"))
                  : ((i = "right"), (r = "leftmostDescendant")),
                n[i])
              )
                return n[i][r].value;
              for (; n && n.parent && n.parent[i] === n; ) n = n.parent;
              if (n.parent) return n.parent.value;
            }
          }),
          e
        );
      })(n(0).BinaryTree);
    e.BinarySearchTree = s;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.assert = function (t, e) {
        if (!t) throw new Error(e);
      });
  },
  function (t, e, n) {
    "use strict";
    var i,
      r =
        (this && this.__extends) ||
        ((i = function (t, e) {
          return (i =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            })(t, e);
        }),
        function (t, e) {
          function n() {
            this.constructor = t;
          }
          i(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        }),
      o =
        (this && this.__read) ||
        function (t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var i,
            r,
            o = n.call(t),
            a = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(i = o.next()).done; )
              a.push(i.value);
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              i && !i.done && (n = o.return) && n.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
          return a;
        };
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = n(1),
      s = n(2),
      l = (function (t) {
        function e(e, n, i) {
          void 0 === n &&
            (n = function (t, e) {
              return t < e;
            }),
            void 0 === i &&
              (i = function (t, e) {
                return t === e;
              });
          var r = t.call(this, e, n) || this;
          return (r.cmp = n), (r.eq = i), (r.isRed = !1), r;
        }
        return (
          r(e, t),
          Object.defineProperty(e.prototype, "color", {
            get: function () {
              return this.isRed ? "red" : "black";
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.fromArray = function (t, n) {
            if (0 !== t.length) {
              for (var i = new e(t[0], n), r = 1; r < t.length; r++)
                i.insert(t[r]);
              return i;
            }
          }),
          (e.prototype.prettyPrintValue = function () {
            return this.isRed ? "[31m" + this.value + "[0m" : "" + this.value;
          }),
          (e.prototype.rotateLeft = function (t) {
            s.assert(t.right);
            var e = t.value,
              n = t.isRed,
              i = t.right;
            (t.right = i.right),
              t.right && (t.right.parent = t),
              (i.right = i.left),
              (i.left = t.left),
              i.left && (i.left.parent = i),
              (t.left = i),
              (t.value = i.value),
              (i.value = e),
              (t.isRed = i.isRed),
              (i.isRed = n);
          }),
          (e.prototype.rotateRight = function (t) {
            s.assert(t.left);
            var e = t.value,
              n = t.isRed,
              i = t.left;
            (t.left = i.left),
              t.left && (t.left.parent = t),
              (i.left = i.right),
              (i.right = t.right),
              i.right && (i.right.parent = i),
              (t.right = i.withParent(t)),
              (t.value = i.value),
              (i.value = e),
              (t.isRed = i.isRed),
              (i.isRed = n);
          }),
          (e.prototype.insertFixup = function (t) {
            for (
              var e, n = t, i = t;
              (null === (e = n.parent) || void 0 === e ? void 0 : e.parent) &&
              n.parent.isRed;

            ) {
              var r;
              if (n.parent.isLeftChild)
                (null == (r = n.parent.parent.right) ? void 0 : r.isRed)
                  ? ((n.parent.isRed = !1),
                    (r.isRed = !1),
                    (n.parent.parent.isRed = !0),
                    (n = n.parent.parent))
                  : (n.isRightChild &&
                      ((n = n.parent),
                      this.rotateLeft(n),
                      n.left === i && (i = n),
                      (n = n.left)),
                    s.assert(n.parent),
                    s.assert(n.parent.parent),
                    (n.parent.isRed = !1),
                    (n.parent.parent.isRed = !0),
                    this.rotateRight(n.parent.parent),
                    n.parent.right === i && (i = n.parent));
              else
                (null == (r = n.parent.parent.left) ? void 0 : r.isRed)
                  ? ((n.parent.isRed = !1),
                    (r.isRed = !1),
                    (n.parent.parent.isRed = !0),
                    (n = n.parent.parent))
                  : (n.isLeftChild &&
                      ((n = n.parent),
                      this.rotateRight(n),
                      n.right === i && (i = n),
                      (n = n.right)),
                    s.assert(n.parent),
                    s.assert(n.parent.parent),
                    (n.parent.isRed = !1),
                    (n.parent.parent.isRed = !0),
                    this.rotateLeft(n.parent.parent),
                    n.parent.left === i && (i = n.parent));
            }
            return (this.isRed = !1), i;
          }),
          (e.prototype.insert = function (t) {
            return this.insertAndReturnNode(t), this;
          }),
          (e.prototype.insertAndReturnNode = function (t) {
            var n = o(this.findParentAndSideFor(t), 2),
              i = n[0],
              r = n[1];
            s.assert(i instanceof e, "Mixed tree types");
            var a = new e(t, this.cmp).withParent(i);
            return (a.isRed = !0), (i[r] = a), this.insertFixup(a);
          }),
          (e.prototype.transplant = function (t, e) {
            t.parent
              ? t.isLeftChild
                ? (t.parent.left = null == e ? void 0 : e.withParent(t.parent))
                : (t.parent.right = null == e ? void 0 : e.withParent(t.parent))
              : e &&
                ((this.isRed = e.isRed),
                (this.value = e.value),
                (this.left = e.left),
                (this.right = e.right),
                (e.parent = t.parent));
          }),
          (e.prototype.deleteFixup = function (t, e) {
            for (
              var n, i, r, o, a, l, u, h = t, f = e;
              h && !(null === (n = h[f]) || void 0 === n ? void 0 : n.isRed);

            ) {
              var c;
              if ("left" === f)
                (null == (c = h.right) ? void 0 : c.isRed) &&
                  ((c.isRed = !1),
                  (h.isRed = !0),
                  this.rotateLeft(h),
                  (c = (h = h.left).right)),
                  s.assert(c),
                  (null === (i = c.left) || void 0 === i ? void 0 : i.isRed) ||
                  (null === (r = c.right) || void 0 === r ? void 0 : r.isRed)
                    ? ((null === (o = c.right) || void 0 === o
                        ? void 0
                        : o.isRed) ||
                        (c.left && (c.left.isRed = !1),
                        (c.isRed = !0),
                        this.rotateRight(c),
                        (c = h.right)),
                      s.assert(c),
                      (c.isRed = h.isRed),
                      (h.isRed = !1),
                      c.right && (c.right.isRed = !1),
                      this.rotateLeft(h),
                      (h = void 0),
                      (this.isRed = !1))
                    : ((c.isRed = !0),
                      (f = (null == h ? void 0 : h.isLeftChild)
                        ? "left"
                        : "right"),
                      (h = h.parent));
              else
                (null == (c = h.left) ? void 0 : c.isRed) &&
                  ((c.isRed = !1),
                  (h.isRed = !0),
                  this.rotateRight(h),
                  (c = (h = h.right).left)),
                  s.assert(c, "w must be defined"),
                  (null === (a = c.right) || void 0 === a ? void 0 : a.isRed) ||
                  (null === (l = c.left) || void 0 === l ? void 0 : l.isRed)
                    ? ((null === (u = c.left) || void 0 === u
                        ? void 0
                        : u.isRed) ||
                        (c.right && (c.right.isRed = !1),
                        (c.isRed = !0),
                        this.rotateLeft(c),
                        (c = h.left)),
                      s.assert(c),
                      (c.isRed = h.isRed),
                      (h.isRed = !1),
                      c.left && (c.left.isRed = !1),
                      this.rotateRight(h),
                      (h = void 0),
                      (this.isRed = !1))
                    : ((c.isRed = !0),
                      (f = h.isLeftChild ? "left" : "right"),
                      (h = h.parent));
            }
            if (h) {
              var p = h[f];
              p && (p.isRed = !1);
            } else this.isRed = !1;
          }),
          (e.prototype.remove = function (t) {
            var n = this.search(t);
            if (!(n && n instanceof e)) return this;
            var i,
              r = n.left,
              o = n.right,
              a = n.isRed,
              s = n,
              l = s.isRed,
              u = "left";
            if (r)
              if (o) {
                if (
                  ((l = (s = o.leftmostDescendant).isRed),
                  (i = s),
                  (u = "right"),
                  s.parent === n)
                ) {
                  var h = i[u];
                  h && (h.parent = s);
                } else
                  this.transplant(s, s.right),
                    (i = s.parent),
                    (u = "left"),
                    (s.right = o.withParent(s));
                this.transplant(n, s),
                  n === this
                    ? ((this.left = r.withParent(this)),
                      s.right && (this.right = s.right.withParent(this)),
                      (this.isRed = a),
                      i === s && (i = this))
                    : ((s.left = r.withParent(s)), (s.isRed = a));
              } else
                (i = n === this ? void 0 : n),
                  (u = "left"),
                  this.transplant(n, r);
            else {
              if (
                ((i = n === this ? void 0 : n), (u = "right"), !o && !n.parent)
              )
                return;
              o || ((i = n.parent), (u = n.isLeftChild ? "left" : "right")),
                this.transplant(n, o);
            }
            return l || this.deleteFixup(i, u), this;
          }),
          e
        );
      })(a.BinarySearchTree);
    e.RBTree = l;
  },
  function (t, e) {
    t.exports = L;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 }), n(6), n(11), n(12);
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(7),
      r = n(4);
    (r.Timeline = r.GeoJSON.extend({
      times: null,
      ranges: null,
      initialize: function (t, e) {
        var n = this;
        void 0 === e && (e = {}),
          (this.times = []),
          (this.ranges = new i.IntervalTree());
        r.GeoJSON.prototype.initialize.call(this, null, e),
          r.Util.setOptions(this, { drawOnSetTime: !0 }),
          r.Util.setOptions(this, e),
          this.options.getInterval &&
            (this._getInterval = function (t) {
              return n.options.getInterval(t);
            }),
          t && this._process(t);
      },
      _getInterval: function (t) {
        return (
          !!(
            t.properties &&
            "start" in t.properties &&
            "end" in t.properties
          ) && {
            start: new Date(t.properties.start).getTime(),
            end: new Date(t.properties.end).getTime(),
          }
        );
      },
      _process: function (t) {
        var e = this,
          n = 1 / 0,
          i = -1 / 0;
        t.features.forEach(function (t) {
          var r = e._getInterval(t);
          r &&
            (e.ranges.insert(r.start, r.end, t),
            e.times.push(r.start),
            e.times.push(r.end),
            (n = Math.min(n, r.start)),
            (i = Math.max(i, r.end)));
        }),
          (this.start = this.options.start || n),
          (this.end = this.options.end || i),
          (this.time = this.start),
          0 !== this.times.length &&
            (this.times.sort(function (t, e) {
              return t - e;
            }),
            (this.times = this.times.reduce(
              function (t, e, n) {
                return 0 === n || (t[t.length - 1] !== e && t.push(e)), t;
              },
              [this.times[0]]
            )));
      },
      setTime: function (t) {
        (this.time = "number" == typeof t ? t : new Date(t).getTime()),
          this.options.drawOnSetTime && this.updateDisplayedLayers(),
          this.fire("change");
      },
      updateDisplayedLayers: function () {
        var t = this,
          e = this.ranges.lookup(this.time),
          n = this.getLayers(),
          i = [];
        n.forEach(function (t) {
          for (var n = !1, r = 0; r < e.length; r++)
            if (t.feature === e[r]) {
              (n = !0), e.splice(r, 1);
              break;
            }
          n || i.push(t);
        }),
          i.forEach(function (e) {
            return t.removeLayer(e);
          }),
          e.forEach(function (e) {
            return t.addData(e);
          });
      },
    })),
      (r.timeline = function (t, e) {
        return new r.Timeline(t, e);
      });
  },
  function (t, e, n) {
    "use strict";
    function i(t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      i(n(8)),
      i(n(9)),
      i(n(0)),
      i(n(1)),
      i(n(3)),
      i(n(10));
  },
  function (t, e, n) {
    "use strict";
    var i =
        (this && this.__generator) ||
        function (t, e) {
          var n,
            i,
            r,
            o,
            a = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (o = { next: s(0), throw: s(1), return: s(2) }),
            "function" == typeof Symbol &&
              (o[Symbol.iterator] = function () {
                return this;
              }),
            o
          );
          function s(o) {
            return function (s) {
              return (function (o) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; a; )
                  try {
                    if (
                      ((n = 1),
                      i &&
                        (r =
                          2 & o[0]
                            ? i.return
                            : o[0]
                            ? i.throw || ((r = i.return) && r.call(i), 0)
                            : i.next) &&
                        !(r = r.call(i, o[1])).done)
                    )
                      return r;
                    switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                      case 0:
                      case 1:
                        r = o;
                        break;
                      case 4:
                        return a.label++, { value: o[1], done: !1 };
                      case 5:
                        a.label++, (i = o[1]), (o = [0]);
                        continue;
                      case 7:
                        (o = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          !((r = a.trys),
                          (r = r.length > 0 && r[r.length - 1]) ||
                            (6 !== o[0] && 2 !== o[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === o[0] &&
                          (!r || (o[1] > r[0] && o[1] < r[3]))
                        ) {
                          a.label = o[1];
                          break;
                        }
                        if (6 === o[0] && a.label < r[1]) {
                          (a.label = r[1]), (r = o);
                          break;
                        }
                        if (r && a.label < r[2]) {
                          (a.label = r[2]), a.ops.push(o);
                          break;
                        }
                        r[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    o = e.call(t, a);
                  } catch (t) {
                    (o = [6, t]), (i = 0);
                  } finally {
                    n = r = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, s]);
            };
          }
        },
      r =
        (this && this.__read) ||
        function (t, e) {
          var n = "function" == typeof Symbol && t[Symbol.iterator];
          if (!n) return t;
          var i,
            r,
            o = n.call(t),
            a = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(i = o.next()).done; )
              a.push(i.value);
          } catch (t) {
            r = { error: t };
          } finally {
            try {
              i && !i.done && (n = o.return) && n.call(o);
            } finally {
              if (r) throw r.error;
            }
          }
          return a;
        },
      o =
        (this && this.__values) ||
        function (t) {
          var e = "function" == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            i = 0;
          if (n) return n.call(t);
          if (t && "number" == typeof t.length)
            return {
              next: function () {
                return (
                  t && i >= t.length && (t = void 0),
                  { value: t && t[i++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        };
    function a(t, e) {
      return e ? [t.right, t.left] : [t.left, t.right];
    }
    Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.inorder = function t(e, n) {
        var s, l, u;
        return (
          void 0 === n && (n = !1),
          i(this, function (i) {
            switch (i.label) {
              case 0:
                return e.value
                  ? ((s = r(a(e, n), 2)),
                    (l = s[0]),
                    (u = s[1]),
                    l ? [5, o(t(l, n))] : [3, 2])
                  : [2, void 0];
              case 1:
                i.sent(), (i.label = 2);
              case 2:
                return [4, e.value];
              case 3:
                return i.sent(), u ? [5, o(t(u, n))] : [3, 5];
              case 4:
                i.sent(), (i.label = 5);
              case 5:
                return [2];
            }
          })
        );
      }),
      (e.preorder = function t(e, n) {
        var s, l, u;
        return (
          void 0 === n && (n = !1),
          i(this, function (i) {
            switch (i.label) {
              case 0:
                return e.value
                  ? ((s = r(a(e, n), 2)), (l = s[0]), (u = s[1]), [4, e.value])
                  : [2, void 0];
              case 1:
                return i.sent(), l ? [5, o(t(l, n))] : [3, 3];
              case 2:
                i.sent(), (i.label = 3);
              case 3:
                return u ? [5, o(t(u, n))] : [3, 5];
              case 4:
                i.sent(), (i.label = 5);
              case 5:
                return [2];
            }
          })
        );
      }),
      (e.postorder = function t(e, n) {
        var s, l, u;
        return (
          void 0 === n && (n = !1),
          i(this, function (i) {
            switch (i.label) {
              case 0:
                return e.value
                  ? ((s = r(a(e, n), 2)),
                    (l = s[0]),
                    (u = s[1]),
                    l ? [5, o(t(l, n))] : [3, 2])
                  : [2, void 0];
              case 1:
                i.sent(), (i.label = 2);
              case 2:
                return u ? [5, o(t(u, n))] : [3, 4];
              case 3:
                i.sent(), (i.label = 4);
              case 4:
                return [4, e.value];
              case 5:
                return i.sent(), [2];
            }
          })
        );
      });
  },
  function (t, e, n) {
    "use strict";
    var i =
      (this && this.__read) ||
      function (t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var i,
          r,
          o = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(i = o.next()).done; )
            a.push(i.value);
        } catch (t) {
          r = { error: t };
        } finally {
          try {
            i && !i.done && (n = o.return) && n.call(o);
          } finally {
            if (r) throw r.error;
          }
        }
        return a;
      };
    function r(t) {
      return Math.floor((t - 1) / 2);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = (function () {
      function t(t, e) {
        void 0 === t && (t = []),
          void 0 === e &&
            (e = function (t, e) {
              return t < e;
            }),
          (this.cmp = e),
          (this.heap = t);
        for (var n = Math.floor(this.heap.length / 2) - 1; n >= 0; n--)
          this.heapify(n);
      }
      return (
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.heap.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.push = function (t) {
          for (var e = this.heap.push(t) - 1, n = !0; n; ) {
            var i = r(e);
            i >= 0 && this.cmp(t, this.heap[i])
              ? (this.swap(e, i), (e = i))
              : (n = !1);
          }
          return this.size;
        }),
        (t.prototype.pop = function () {
          var t = this.heap.shift();
          if (void 0 === t) return null;
          var e = this.heap.pop();
          return e && (this.heap.unshift(e), this.heapify()), t;
        }),
        (t.prototype.contains = function (t) {
          return this.heap.indexOf(t) >= 0;
        }),
        (t.prototype.heapify = function (t) {
          var e = this;
          void 0 === t && (t = 0);
          var n,
            i = this.heap.length,
            r = t;
          ((n = t), [2 * n + 1, 2 * n + 2]).forEach(function (t) {
            t < i && e.cmp(e.heap[t], e.heap[r]) && (r = t);
          }),
            r !== t && (this.swap(r, t), this.heapify(r));
        }),
        (t.prototype.swap = function (t, e) {
          var n;
          (n = i([this.heap[e], this.heap[t]], 2)),
            (this.heap[t] = n[0]),
            (this.heap[e] = n[1]);
        }),
        (t.prototype.findMin = function () {
          return this.heap[0];
        }),
        (t.prototype.findMax = function () {
          return this.heap[0];
        }),
        t
      );
    })();
    e.Heap = o;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(3);
    function r(t) {
      var e = t.value.high;
      return (
        t.left && (e = Math.max(e, t.left.value.max)),
        t.right && (e = Math.max(e, t.right.value.max)),
        (t.value.max = e),
        e
      );
    }
    var o = (function () {
      function t(t) {
        void 0 === t &&
          (t = function (t, e) {
            return t === e;
          }),
          (this.eq = t),
          (this._size = 0),
          (this.tree = void 0);
      }
      return (
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this._size;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.insert = function (t, e, n) {
          var o = this,
            a = { low: t, high: e, value: n, max: e };
          if (this.tree) {
            var s = this.tree.insertAndReturnNode(a);
            for (s.left && r(s.left), s.right && r(s.right), r(s); s.parent; )
              r(s.parent), (s = s.parent);
          } else
            this.tree = new i.RBTree(
              a,
              function (t, e) {
                return t.low < e.low;
              },
              function (t, e) {
                return (
                  t.low === e.low && t.high === e.high && o.eq(t.value, e.value)
                );
              }
            );
          return this._size++, this;
        }),
        (t.prototype.remove = function (t, e, n) {
          return (
            this.tree &&
              this.tree.remove({ low: t, high: e, value: n, max: e }),
            this
          );
        }),
        (t.prototype.lookup = function (t) {
          if (!this.tree) return [];
          for (var e = [], n = [this.tree]; n.length; ) {
            var i = n.pop();
            i &&
              (i.value.low <= t && i.value.high >= t && e.push(i.value.value),
              i.left && i.left.value.max >= t && n.push(i.left),
              i.right &&
                i.value.low <= t &&
                i.right.value.max >= t &&
                n.push(i.right));
          }
          return e;
        }),
        (t.prototype.overlap = function (t, e) {
          if (!this.tree) return [];
          for (var n = [], i = [this.tree]; i.length; ) {
            var r = i.pop();
            r &&
              (t <= r.value.high && e >= r.value.low && n.push(r.value.value),
              r.left && r.left.value.max >= t && i.push(r.left),
              r.right && r.right.value.max >= t && i.push(r.right));
          }
          return n;
        }),
        t
      );
    })();
    e.IntervalTree = o;
  },
  function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var i = n(4);
    (i.TimelineSliderControl = i.Control.extend({
      initialize: function (t) {
        void 0 === t && (t = {});
        (this.timelines = []),
          i.Util.setOptions(this, {
            duration: 1e4,
            enableKeyboardControls: !1,
            enablePlayback: !0,
            formatOutput: function (t) {
              return "" + (t || "");
            },
            showTicks: !0,
            waitToUpdateMap: !1,
            position: "bottomleft",
            steps: 1e3,
            autoPlay: !1,
          }),
          i.Util.setOptions(this, t),
          (this.start = t.start || 0),
          (this.end = t.end || 0);
      },
      _getTimes: function () {
        var t = this,
          e = [];
        if (
          (this.timelines.forEach(function (n) {
            var i = n.times.filter(function (e) {
              return e >= t.start && e <= t.end;
            });
            e.push.apply(e, i);
          }),
          e.length)
        ) {
          e.sort(function (t, e) {
            return t - e;
          });
          var n = [e[0]];
          return (
            e.reduce(function (t, e) {
              return t !== e && n.push(e), e;
            }),
            n
          );
        }
        return e;
      },
      _recalculate: function () {
        var t = void 0 !== this.options.start,
          e = void 0 !== this.options.end,
          n = this.options.duration,
          i = 1 / 0,
          r = -1 / 0;
        this.timelines.forEach(function (t) {
          t.start < i && (i = t.start), t.end > r && (r = t.end);
        }),
          t ||
            ((this.start = i),
            (this._timeSlider.min = (i === 1 / 0 ? 0 : i).toString()),
            (this._timeSlider.value = this._timeSlider.min)),
          e ||
            ((this.end = r),
            (this._timeSlider.max = (r === -1 / 0 ? 0 : r).toString())),
          (this._stepSize = Math.max(
            1,
            (this.end - this.start) / this.options.steps
          )),
          (this._stepDuration = Math.max(1, n / this.options.steps));
      },
      _nearestEventTime: function (t, e) {
        void 0 === e && (e = 1);
        for (
          var n = this._getTimes(), i = !1, r = n[0], o = 1;
          o < n.length;
          o++
        ) {
          var a = n[o];
          if (i) return a;
          if (a >= t) {
            if (-1 === e) return r;
            if (a !== t) return a;
            i = !0;
          }
          r = a;
        }
        return r;
      },
      _createDOM: function () {
        var t = i.DomUtil.create(
          "div",
          [
            "leaflet-control-layers",
            "leaflet-control-layers-expanded",
            "leaflet-timeline-control",
          ].join(" ")
        );
        if (((this.container = t), this.options.enablePlayback)) {
          var e = i.DomUtil.create("div", "sldr-ctrl-container", t),
            n = i.DomUtil.create("div", "button-container", e);
          this._makeButtons(n),
            this.options.enableKeyboardControls && this._addKeyListeners(),
            this._makeOutput(e);
        }
        //Addition here to get buttons on new line
        d3.select(".leaflet-control-layers leaflet-control-layers-expanded leaflet-timeline-control leaflet-control").append("br"),
        this._makeSlider(t),
          this.options.showTicks && this._buildDataList(t),
          this.options.autoPlay && this._autoPlay();
      },
      _addKeyListeners: function () {
        var t = this;
        (this._listener = function (e) {
          return t._onKeydown(e);
        }),
          document.addEventListener("keydown", this._listener);
      },
      _removeKeyListeners: function () {
        document.removeEventListener("keydown", this._listener);
      },
      _buildDataList: function (t) {
        this._datalist = i.DomUtil.create("datalist", "", t);
        var e = Math.floor(1e6 * Math.random());
        (this._datalist.id = "timeline-datalist-" + e),
          this._timeSlider.setAttribute("list", this._datalist.id),
          this._rebuildDataList();
      },
      _rebuildDataList: function () {
        var t = this._datalist;
        if (t) {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          var e = i.DomUtil.create("select", "", this._datalist);
          e.setAttribute("aria-label", "List of times"),
            this._getTimes().forEach(function (t) {
              i.DomUtil.create("option", "", e).value = t.toString();
            });
        }
      },
      _makeButton: function (t, e) {
        var n = this,
          r = i.DomUtil.create("button", e, t);
        r.setAttribute("aria-label", e),
          r.addEventListener("click", function () {
            return n[e]();
          }),
          i.DomEvent.disableClickPropagation(r);
      },
      _makeButtons: function (t) {
        this._makeButton(t, "prev"),
          this._makeButton(t, "play"),
          this._makeButton(t, "pause"),
          this._makeButton(t, "next");
      },
      _disableMapDragging: function () {
        this.map.dragging.disable();
      },
      _enableMapDragging: function () {
        this.map.dragging.enable();
      },
      _makeSlider: function (t) {
        var e = i.DomUtil.create("input", "time-slider", t);
        e.setAttribute("aria-label", "Slider"),
          (e.type = "range"),
          (e.min = (this.start || 0).toString()),
          (e.max = (this.end || 0).toString()),
          (e.value = (this.start || 0).toString()),
          (this._timeSlider = e),
          i.DomEvent.on(
            this._timeSlider,
            "mousedown mouseup click touchstart",
            i.DomEvent.stopPropagation
          ),
          i.DomEvent.on(
            this._timeSlider,
            "change input",
            this._sliderChanged,
            this
          ),
          i.DomEvent.on(
            this._timeSlider,
            "mouseenter",
            this._disableMapDragging,
            this
          ),
          i.DomEvent.on(
            this._timeSlider,
            "mouseleave",
            this._enableMapDragging,
            this
          );
      },
      _makeOutput: function (t) {
        (this._output = i.DomUtil.create("output", "time-text", t)),
          (this._output.innerHTML = this.options.formatOutput(this.start));
      },
      _onKeydown: function (t) {
        var e = t.target || t.srcElement;
        if (!/INPUT|TEXTAREA/.test(e.tagName)) {
          switch (t.keyCode || t.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            case 32:
              this.toggle();
              break;
            default:
              return;
          }
          t.preventDefault();
        }
      },
      _sliderChanged: function (t) {
        var e = t.target,
          n = parseFloat(e instanceof HTMLInputElement ? e.value : "0");
        this._setTime(n, t.type);
      },
      _setTime: function (t, e) {
        (this.time = t),
          (this.options.waitToUpdateMap && "change" !== e) ||
            this.timelines.forEach(function (e) {
              return e.setTime(t);
            }),
          this._output &&
            (this._output.innerHTML = this.options.formatOutput(t));
      },
      _resetIfTimelinesChanged: function (t) {
        this.timelines.length !== t &&
          (this._recalculate(),
          this.options.showTicks && this._rebuildDataList(),
          this.setTime(this.start));
      },
      _autoPlay: function () {
        var t = this;
        "loading" === document.readyState
          ? window.addEventListener("load", function () {
              return t._autoPlay();
            })
          : this.play();
      },
      addTimelines: function () {
        for (var t = this, e = [], n = 0; n < arguments.length; n++)
          e[n] = arguments[n];
        this.pause();
        var i = this.timelines.length;
        e.forEach(function (e) {
          -1 === t.timelines.indexOf(e) && t.timelines.push(e);
        }),
          this._resetIfTimelinesChanged(i);
      },
      removeTimelines: function () {
        for (var t = this, e = [], n = 0; n < arguments.length; n++)
          e[n] = arguments[n];
        this.pause();
        var i = this.timelines.length;
        e.forEach(function (e) {
          var n = t.timelines.indexOf(e);
          -1 !== n && t.timelines.splice(n, 1);
        }),
          this._resetIfTimelinesChanged(i);
      },
      toggle: function () {
        this._playing ? this.pause() : this.play();
      },
      prev: function () {
        this.pause();
        var t = this._nearestEventTime(this.time, -1);
        (this._timeSlider.value = t.toString()), this.setTime(t);
      },
      pause: function (t) {
        var e;
        window.clearTimeout(this._timer),
          (this._playing = !1),
          null === (e = this.container) ||
            void 0 === e ||
            e.classList.remove("playing"),
          this.syncedControl &&
            !t &&
            this.syncedControl.map(function (t) {
              t.pause(!0);
            });
      },
      play: function (t) {
        var e,
          n,
          i = this;
        window.clearTimeout(this._timer),
          parseFloat(this._timeSlider.value) === this.end &&
            (this._timeSlider.value = this.start.toString()),
          (this._timeSlider.value = (
            parseFloat(this._timeSlider.value) + this._stepSize
          ).toString()),
          this.setTime(+this._timeSlider.value),
          parseFloat(this._timeSlider.value) === this.end
            ? ((this._playing = !1),
              null === (e = this.container) ||
                void 0 === e ||
                e.classList.remove("playing"))
            : ((this._playing = !0),
              null === (n = this.container) ||
                void 0 === n ||
                n.classList.add("playing"),
              (this._timer = window.setTimeout(function () {
                return i.play(!0);
              }, this._stepDuration))),
          this.syncedControl &&
            !t &&
            this.syncedControl.map(function (t) {
              t.play(!0);
            });
      },
      next: function () {
        this.pause();
        var t = this._nearestEventTime(this.time, 1);
        (this._timeSlider.value = t.toString()), this.setTime(t);
      },
      setTime: function (t) {
        this._timeSlider && (this._timeSlider.value = t.toString()),
          this._setTime(t, "change");
      },
      onAdd: function (t) {
        return (
          (this.map = t),
          this._createDOM(),
          this.setTime(this.start),
          this.container
        );
      },
      onRemove: function () {
        this.options.enableKeyboardControls && this._removeKeyListeners(),
          i.DomEvent.off(
            this._timeSlider,
            "change input",
            this._sliderChanged,
            this
          ),
          i.DomEvent.off(
            this._timeSlider,
            "pointerdown mousedown touchstart",
            this._disableMapDragging,
            this
          ),
          i.DomEvent.off(
            document.body,
            "pointerup mouseup touchend",
            this._enableMapDragging,
            this
          ),
          this._enableMapDragging();
      },
      syncControl: function (t) {
        this.syncedControl || (this.syncedControl = []),
          this.syncedControl.push(t);
      },
    })),
      (i.timelineSliderControl = function (t) {
        return new i.TimelineSliderControl(t);
      });
  },
  function (t, e, n) {
    var i = n(13),
      r = n(14);
    "string" == typeof (r = r.__esModule ? r.default : r) &&
      (r = [[t.i, r, ""]]);
    var o = { insert: "head", singleton: !1 };
    i(r, o);
    t.exports = r.locals || {};
  },
  function (t, e, n) {
    "use strict";
    var i,
      r = function () {
        return (
          void 0 === i &&
            (i = Boolean(window && document && document.all && !window.atob)),
          i
        );
      },
      o = (function () {
        var t = {};
        return function (e) {
          if (void 0 === t[e]) {
            var n = document.querySelector(e);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (t) {
                n = null;
              }
            t[e] = n;
          }
          return t[e];
        };
      })(),
      a = [];
    function s(t) {
      for (var e = -1, n = 0; n < a.length; n++)
        if (a[n].identifier === t) {
          e = n;
          break;
        }
      return e;
    }
    function l(t, e) {
      for (var n = {}, i = [], r = 0; r < t.length; r++) {
        var o = t[r],
          l = e.base ? o[0] + e.base : o[0],
          u = n[l] || 0,
          h = "".concat(l, " ").concat(u);
        n[l] = u + 1;
        var f = s(h),
          c = { css: o[1], media: o[2], sourceMap: o[3] };
        -1 !== f
          ? (a[f].references++, a[f].updater(c))
          : a.push({ identifier: h, updater: m(c, e), references: 1 }),
          i.push(h);
      }
      return i;
    }
    function u(t) {
      var e = document.createElement("style"),
        i = t.attributes || {};
      if (void 0 === i.nonce) {
        var r = n.nc;
        r && (i.nonce = r);
      }
      if (
        (Object.keys(i).forEach(function (t) {
          e.setAttribute(t, i[t]);
        }),
        "function" == typeof t.insert)
      )
        t.insert(e);
      else {
        var a = o(t.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(e);
      }
      return e;
    }
    var h,
      f =
        ((h = []),
        function (t, e) {
          return (h[t] = e), h.filter(Boolean).join("\n");
        });
    function c(t, e, n, i) {
      var r = n
        ? ""
        : i.media
        ? "@media ".concat(i.media, " {").concat(i.css, "}")
        : i.css;
      if (t.styleSheet) t.styleSheet.cssText = f(e, r);
      else {
        var o = document.createTextNode(r),
          a = t.childNodes;
        a[e] && t.removeChild(a[e]),
          a.length ? t.insertBefore(o, a[e]) : t.appendChild(o);
      }
    }
    function p(t, e, n) {
      var i = n.css,
        r = n.media,
        o = n.sourceMap;
      if (
        (r ? t.setAttribute("media", r) : t.removeAttribute("media"),
        o &&
          btoa &&
          (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
            " */"
          )),
        t.styleSheet)
      )
        t.styleSheet.cssText = i;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(i));
      }
    }
    var d = null,
      v = 0;
    function m(t, e) {
      var n, i, r;
      if (e.singleton) {
        var o = v++;
        (n = d || (d = u(e))),
          (i = c.bind(null, n, o, !1)),
          (r = c.bind(null, n, o, !0));
      } else
        (n = u(e)),
          (i = p.bind(null, n, e)),
          (r = function () {
            !(function (t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t);
            })(n);
          });
      return (
        i(t),
        function (e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap
            )
              return;
            i((t = e));
          } else r();
        }
      );
    }
    t.exports = function (t, e) {
      (e = e || {}).singleton ||
        "boolean" == typeof e.singleton ||
        (e.singleton = r());
      var n = l((t = t || []), e);
      return function (t) {
        if (
          ((t = t || []),
          "[object Array]" === Object.prototype.toString.call(t))
        ) {
          for (var i = 0; i < n.length; i++) {
            var r = s(n[i]);
            a[r].references--;
          }
          for (var o = l(t, e), u = 0; u < n.length; u++) {
            var h = s(n[u]);
            0 === a[h].references && (a[h].updater(), a.splice(h, 1));
          }
          n = o;
        }
      };
    };
  },
  function (t, e, n) {
    (e = n(15)(!1)).push([
      t.i,
      '.leaflet-control.leaflet-timeline-control {\n  width: 96%;\n  box-sizing: border-box;\n  margin: 2%;\n  margin-bottom: 20px;\n  text-align: center;\n}\n.leaflet-control.leaflet-timeline-control * {\n  vertical-align: middle;\n}\n.leaflet-control.leaflet-timeline-control input[type="range"] {\n  width: 80%;\n}\n.leaflet-control.leaflet-timeline-control .sldr-ctrl-container {\n  float: left;\n  width: 15%;\n  box-sizing: border-box;\n}\n.leaflet-control.leaflet-timeline-control .button-container button {\n  position: relative;\n  width: 20%;\n  height: 20px;\n}\n.leaflet-control.leaflet-timeline-control .button-container button::before,\n.leaflet-control.leaflet-timeline-control .button-container button::after {\n  content: "";\n  position: absolute;\n}\n.leaflet-control.leaflet-timeline-control\n  .button-container\n  button.play::before {\n  border: 7px solid transparent;\n  border-width: 7px 0 7px 10px;\n  border-left-color: black;\n  margin-top: -7px;\n  background: transparent;\n  margin-left: -5px;\n}\n.leaflet-control.leaflet-timeline-control .button-container button.pause {\n  display: none;\n}\n.leaflet-control.leaflet-timeline-control\n  .button-container\n  button.pause::before {\n  width: 4px;\n  height: 14px;\n  border: 4px solid black;\n  border-width: 0 4px;\n  margin-top: -7px;\n  margin-left: -6px;\n  background: transparent;\n}\n.leaflet-control.leaflet-timeline-control .button-container button.prev::before,\n.leaflet-control.leaflet-timeline-control .button-container button.prev::after {\n  margin: -8px 0 0;\n  background: black;\n}\n.leaflet-control.leaflet-timeline-control\n  .button-container\n  button.prev::before {\n  width: 2px;\n  height: 14px;\n  margin-top: -7px;\n  margin-left: -7px;\n}\n.leaflet-control.leaflet-timeline-control .button-container button.prev::after {\n  border: 7px solid transparent;\n  border-width: 7px 10px 7px 0;\n  border-right-color: black;\n  margin-top: -7px;\n  margin-left: -5px;\n  background: transparent;\n}\n.leaflet-control.leaflet-timeline-control .button-container button.next::before,\n.leaflet-control.leaflet-timeline-control .button-container button.next::after {\n  margin: -8px 0 0;\n  background: black;\n}\n.leaflet-control.leaflet-timeline-control\n  .button-container\n  button.next::before {\n  width: 2px;\n  height: 14px;\n  margin-top: -7px;\n  margin-left: 5px;\n}\n.leaflet-control.leaflet-timeline-control .button-container button.next::after {\n  border: 7px solid transparent;\n  border-width: 7px 0 7px 10px;\n  border-left-color: black;\n  margin-top: -7px;\n  margin-left: -5px;\n  background: transparent;\n}\n.leaflet-control.leaflet-timeline-control.playing button.pause {\n  display: inline-block;\n}\n.leaflet-control.leaflet-timeline-control.playing button.play {\n  display: none;\n}\n',
      "",
    ]),
      (t.exports = e);
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      var e = [];
      return (
        (e.toString = function () {
          return this.map(function (e) {
            var n = (function (t, e) {
              var n = t[1] || "",
                i = t[3];
              if (!i) return n;
              if (e && "function" == typeof btoa) {
                var r =
                    ((a = i),
                    (s = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      s
                    )),
                    "/*# ".concat(l, " */")),
                  o = i.sources.map(function (t) {
                    return "/*# sourceURL="
                      .concat(i.sourceRoot || "")
                      .concat(t, " */");
                  });
                return [n].concat(o).concat([r]).join("\n");
              }
              var a, s, l;
              return [n].join("\n");
            })(e, t);
            return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (e.i = function (t, n, i) {
          "string" == typeof t && (t = [[null, t, ""]]);
          var r = {};
          if (i)
            for (var o = 0; o < this.length; o++) {
              var a = this[o][0];
              null != a && (r[a] = !0);
            }
          for (var s = 0; s < t.length; s++) {
            var l = [].concat(t[s]);
            (i && r[l[0]]) ||
              (n &&
                (l[2]
                  ? (l[2] = "".concat(n, " and ").concat(l[2]))
                  : (l[2] = n)),
              e.push(l));
          }
        }),
        e
      );
    };
  },
]);
