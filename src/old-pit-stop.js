!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var r = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            i,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/"),
    n((n.s = 11));
})({
  11: function (e, t, n) {
    n("hsMc"), n("s4Lg"), (e.exports = n("vH3L"));
  },
  "76gO": function (e, t, n) {
    var i, r, o;
    (r = [n("EVdn")]),
      void 0 ===
        (o =
          "function" ==
          typeof (i = function (e, t) {
            function n() {
              return new Date(Date.UTC.apply(Date, arguments));
            }
            function i() {
              var e = new Date();
              return n(e.getFullYear(), e.getMonth(), e.getDate());
            }
            function r(e, t) {
              return (
                e.getUTCFullYear() === t.getUTCFullYear() &&
                e.getUTCMonth() === t.getUTCMonth() &&
                e.getUTCDate() === t.getUTCDate()
              );
            }
            function o(n, i) {
              return function () {
                return (
                  i !== t && e.fn.datepicker.deprecated(i),
                  this[n].apply(this, arguments)
                );
              };
            }
            var s,
              a =
                ((s = {
                  get: function (e) {
                    return this.slice(e)[0];
                  },
                  contains: function (e) {
                    for (
                      var t = e && e.valueOf(), n = 0, i = this.length;
                      n < i;
                      n++
                    )
                      if (
                        0 <= this[n].valueOf() - t &&
                        this[n].valueOf() - t < 864e5
                      )
                        return n;
                    return -1;
                  },
                  remove: function (e) {
                    this.splice(e, 1);
                  },
                  replace: function (e) {
                    e &&
                      (Array.isArray(e) || (e = [e]),
                      this.clear(),
                      this.push.apply(this, e));
                  },
                  clear: function () {
                    this.length = 0;
                  },
                  copy: function () {
                    var e = new a();
                    return e.replace(this), e;
                  },
                }),
                function () {
                  var t = [];
                  return t.push.apply(t, arguments), e.extend(t, s), t;
                }),
              l = function (t, n) {
                e.data(t, "datepicker", this),
                  (this._events = []),
                  (this._secondaryEvents = []),
                  this._process_options(n),
                  (this.dates = new a()),
                  (this.viewDate = this.o.defaultViewDate),
                  (this.focusDate = null),
                  (this.element = e(t)),
                  (this.isInput = this.element.is("input")),
                  (this.inputField = this.isInput
                    ? this.element
                    : this.element.find("input")),
                  (this.component =
                    !!this.element.hasClass("date") &&
                    this.element.find(
                      ".add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn"
                    )),
                  this.component &&
                    0 === this.component.length &&
                    (this.component = !1),
                  null === this.o.isInline
                    ? (this.isInline = !this.component && !this.isInput)
                    : (this.isInline = this.o.isInline),
                  (this.picker = e(v.template)),
                  this._check_template(this.o.templates.leftArrow) &&
                    this.picker.find(".prev").html(this.o.templates.leftArrow),
                  this._check_template(this.o.templates.rightArrow) &&
                    this.picker.find(".next").html(this.o.templates.rightArrow),
                  this._buildEvents(),
                  this._attachEvents(),
                  this.isInline
                    ? this.picker
                        .addClass("datepicker-inline")
                        .appendTo(this.element)
                    : this.picker.addClass("datepicker-dropdown dropdown-menu"),
                  this.o.rtl && this.picker.addClass("datepicker-rtl"),
                  this.o.calendarWeeks &&
                    this.picker
                      .find(
                        ".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear"
                      )
                      .attr("colspan", function (e, t) {
                        return Number(t) + 1;
                      }),
                  this._process_options({
                    startDate: this._o.startDate,
                    endDate: this._o.endDate,
                    daysOfWeekDisabled: this.o.daysOfWeekDisabled,
                    daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
                    datesDisabled: this.o.datesDisabled,
                  }),
                  (this._allow_update = !1),
                  this.setViewMode(this.o.startView),
                  (this._allow_update = !0),
                  this.fillDow(),
                  this.fillMonths(),
                  this.update(),
                  this.isInline && this.show();
              };
            l.prototype = {
              constructor: l,
              _resolveViewName: function (t) {
                return (
                  e.each(v.viewModes, function (n, i) {
                    if (t === n || -1 !== e.inArray(t, i.names))
                      return (t = n), !1;
                  }),
                  t
                );
              },
              _resolveDaysOfWeek: function (t) {
                return (
                  Array.isArray(t) || (t = t.split(/[,\s]*/)), e.map(t, Number)
                );
              },
              _check_template: function (n) {
                try {
                  return (
                    n !== t &&
                    "" !== n &&
                    ((n.match(/[<>]/g) || []).length <= 0 || e(n).length > 0)
                  );
                } catch (e) {
                  return !1;
                }
              },
              _process_options: function (t) {
                this._o = e.extend({}, this._o, t);
                var r = (this.o = e.extend({}, this._o)),
                  o = r.language;
                m[o] || ((o = o.split("-")[0]), m[o] || (o = p.language)),
                  (r.language = o),
                  (r.startView = this._resolveViewName(r.startView)),
                  (r.minViewMode = this._resolveViewName(r.minViewMode)),
                  (r.maxViewMode = this._resolveViewName(r.maxViewMode)),
                  (r.startView = Math.max(
                    this.o.minViewMode,
                    Math.min(this.o.maxViewMode, r.startView)
                  )),
                  !0 !== r.multidate &&
                    ((r.multidate = Number(r.multidate) || !1),
                    !1 !== r.multidate &&
                      (r.multidate = Math.max(0, r.multidate))),
                  (r.multidateSeparator = String(r.multidateSeparator)),
                  (r.weekStart %= 7),
                  (r.weekEnd = (r.weekStart + 6) % 7);
                var s = v.parseFormat(r.format);
                r.startDate !== -1 / 0 &&
                  (r.startDate
                    ? r.startDate instanceof Date
                      ? (r.startDate = this._local_to_utc(
                          this._zero_time(r.startDate)
                        ))
                      : (r.startDate = v.parseDate(
                          r.startDate,
                          s,
                          r.language,
                          r.assumeNearbyYear
                        ))
                    : (r.startDate = -1 / 0)),
                  r.endDate !== 1 / 0 &&
                    (r.endDate
                      ? r.endDate instanceof Date
                        ? (r.endDate = this._local_to_utc(
                            this._zero_time(r.endDate)
                          ))
                        : (r.endDate = v.parseDate(
                            r.endDate,
                            s,
                            r.language,
                            r.assumeNearbyYear
                          ))
                      : (r.endDate = 1 / 0)),
                  (r.daysOfWeekDisabled = this._resolveDaysOfWeek(
                    r.daysOfWeekDisabled || []
                  )),
                  (r.daysOfWeekHighlighted = this._resolveDaysOfWeek(
                    r.daysOfWeekHighlighted || []
                  )),
                  (r.datesDisabled = r.datesDisabled || []),
                  Array.isArray(r.datesDisabled) ||
                    (r.datesDisabled = r.datesDisabled.split(",")),
                  (r.datesDisabled = e.map(r.datesDisabled, function (e) {
                    return v.parseDate(e, s, r.language, r.assumeNearbyYear);
                  }));
                var a = String(r.orientation).toLowerCase().split(/\s+/g),
                  l = r.orientation.toLowerCase();
                if (
                  ((a = e.grep(a, function (e) {
                    return /^auto|left|right|top|bottom$/.test(e);
                  })),
                  (r.orientation = { x: "auto", y: "auto" }),
                  l && "auto" !== l)
                )
                  if (1 === a.length)
                    switch (a[0]) {
                      case "top":
                      case "bottom":
                        r.orientation.y = a[0];
                        break;
                      case "left":
                      case "right":
                        r.orientation.x = a[0];
                    }
                  else
                    (l = e.grep(a, function (e) {
                      return /^left|right$/.test(e);
                    })),
                      (r.orientation.x = l[0] || "auto"),
                      (l = e.grep(a, function (e) {
                        return /^top|bottom$/.test(e);
                      })),
                      (r.orientation.y = l[0] || "auto");
                if (
                  r.defaultViewDate instanceof Date ||
                  "string" == typeof r.defaultViewDate
                )
                  r.defaultViewDate = v.parseDate(
                    r.defaultViewDate,
                    s,
                    r.language,
                    r.assumeNearbyYear
                  );
                else if (r.defaultViewDate) {
                  var c = r.defaultViewDate.year || new Date().getFullYear(),
                    u = r.defaultViewDate.month || 0,
                    h = r.defaultViewDate.day || 1;
                  r.defaultViewDate = n(c, u, h);
                } else r.defaultViewDate = i();
              },
              _applyEvents: function (e) {
                for (var n, i, r, o = 0; o < e.length; o++)
                  (n = e[o][0]),
                    2 === e[o].length
                      ? ((i = t), (r = e[o][1]))
                      : 3 === e[o].length && ((i = e[o][1]), (r = e[o][2])),
                    n.on(r, i);
              },
              _unapplyEvents: function (e) {
                for (var n, i, r, o = 0; o < e.length; o++)
                  (n = e[o][0]),
                    2 === e[o].length
                      ? ((r = t), (i = e[o][1]))
                      : 3 === e[o].length && ((r = e[o][1]), (i = e[o][2])),
                    n.off(i, r);
              },
              _buildEvents: function () {
                var t = {
                  keyup: e.proxy(function (t) {
                    -1 ===
                      e.inArray(t.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) &&
                      this.update();
                  }, this),
                  keydown: e.proxy(this.keydown, this),
                  paste: e.proxy(this.paste, this),
                };
                !0 === this.o.showOnFocus &&
                  (t.focus = e.proxy(this.show, this)),
                  this.isInput
                    ? (this._events = [[this.element, t]])
                    : this.component && this.inputField.length
                    ? (this._events = [
                        [this.inputField, t],
                        [this.component, { click: e.proxy(this.show, this) }],
                      ])
                    : (this._events = [
                        [
                          this.element,
                          {
                            click: e.proxy(this.show, this),
                            keydown: e.proxy(this.keydown, this),
                          },
                        ],
                      ]),
                  this._events.push(
                    [
                      this.element,
                      "*",
                      {
                        blur: e.proxy(function (e) {
                          this._focused_from = e.target;
                        }, this),
                      },
                    ],
                    [
                      this.element,
                      {
                        blur: e.proxy(function (e) {
                          this._focused_from = e.target;
                        }, this),
                      },
                    ]
                  ),
                  this.o.immediateUpdates &&
                    this._events.push([
                      this.element,
                      {
                        "changeYear changeMonth": e.proxy(function (e) {
                          this.update(e.date);
                        }, this),
                      },
                    ]),
                  (this._secondaryEvents = [
                    [this.picker, { click: e.proxy(this.click, this) }],
                    [
                      this.picker,
                      ".prev, .next",
                      { click: e.proxy(this.navArrowsClick, this) },
                    ],
                    [
                      this.picker,
                      ".day:not(.disabled)",
                      { click: e.proxy(this.dayCellClick, this) },
                    ],
                    [e(window), { resize: e.proxy(this.place, this) }],
                    [
                      e(document),
                      {
                        "mousedown touchstart": e.proxy(function (e) {
                          this.element.is(e.target) ||
                            this.element.find(e.target).length ||
                            this.picker.is(e.target) ||
                            this.picker.find(e.target).length ||
                            this.isInline ||
                            this.hide();
                        }, this),
                      },
                    ],
                  ]);
              },
              _attachEvents: function () {
                this._detachEvents(), this._applyEvents(this._events);
              },
              _detachEvents: function () {
                this._unapplyEvents(this._events);
              },
              _attachSecondaryEvents: function () {
                this._detachSecondaryEvents(),
                  this._applyEvents(this._secondaryEvents);
              },
              _detachSecondaryEvents: function () {
                this._unapplyEvents(this._secondaryEvents);
              },
              _trigger: function (t, n) {
                var i = n || this.dates.get(-1),
                  r = this._utc_to_local(i);
                this.element.trigger({
                  type: t,
                  date: r,
                  viewMode: this.viewMode,
                  dates: e.map(this.dates, this._utc_to_local),
                  format: e.proxy(function (e, t) {
                    0 === arguments.length
                      ? ((e = this.dates.length - 1), (t = this.o.format))
                      : "string" == typeof e &&
                        ((t = e), (e = this.dates.length - 1)),
                      (t = t || this.o.format);
                    var n = this.dates.get(e);
                    return v.formatDate(n, t, this.o.language);
                  }, this),
                });
              },
              show: function () {
                if (
                  !(
                    this.inputField.is(":disabled") ||
                    (this.inputField.prop("readonly") &&
                      !1 === this.o.enableOnReadonly)
                  )
                )
                  return (
                    this.isInline || this.picker.appendTo(this.o.container),
                    this.place(),
                    this.picker.show(),
                    this._attachSecondaryEvents(),
                    this._trigger("show"),
                    (window.navigator.msMaxTouchPoints ||
                      "ontouchstart" in document) &&
                      this.o.disableTouchKeyboard &&
                      e(this.element).blur(),
                    this
                  );
              },
              hide: function () {
                return (
                  this.isInline ||
                    !this.picker.is(":visible") ||
                    ((this.focusDate = null),
                    this.picker.hide().detach(),
                    this._detachSecondaryEvents(),
                    this.setViewMode(this.o.startView),
                    this.o.forceParse &&
                      this.inputField.val() &&
                      this.setValue(),
                    this._trigger("hide")),
                  this
                );
              },
              destroy: function () {
                return (
                  this.hide(),
                  this._detachEvents(),
                  this._detachSecondaryEvents(),
                  this.picker.remove(),
                  delete this.element.data().datepicker,
                  this.isInput || delete this.element.data().date,
                  this
                );
              },
              paste: function (t) {
                var n;
                if (
                  t.originalEvent.clipboardData &&
                  t.originalEvent.clipboardData.types &&
                  -1 !==
                    e.inArray("text/plain", t.originalEvent.clipboardData.types)
                )
                  n = t.originalEvent.clipboardData.getData("text/plain");
                else {
                  if (!window.clipboardData) return;
                  n = window.clipboardData.getData("Text");
                }
                this.setDate(n), this.update(), t.preventDefault();
              },
              _utc_to_local: function (e) {
                if (!e) return e;
                var t = new Date(e.getTime() + 6e4 * e.getTimezoneOffset());
                return (
                  t.getTimezoneOffset() !== e.getTimezoneOffset() &&
                    (t = new Date(e.getTime() + 6e4 * t.getTimezoneOffset())),
                  t
                );
              },
              _local_to_utc: function (e) {
                return e && new Date(e.getTime() - 6e4 * e.getTimezoneOffset());
              },
              _zero_time: function (e) {
                return (
                  e && new Date(e.getFullYear(), e.getMonth(), e.getDate())
                );
              },
              _zero_utc_time: function (e) {
                return (
                  e && n(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())
                );
              },
              getDates: function () {
                return e.map(this.dates, this._utc_to_local);
              },
              getUTCDates: function () {
                return e.map(this.dates, function (e) {
                  return new Date(e);
                });
              },
              getDate: function () {
                return this._utc_to_local(this.getUTCDate());
              },
              getUTCDate: function () {
                var e = this.dates.get(-1);
                return e !== t ? new Date(e) : null;
              },
              clearDates: function () {
                this.inputField.val(""),
                  this._trigger("changeDate"),
                  this.update(),
                  this.o.autoclose && this.hide();
              },
              setDates: function () {
                var e = Array.isArray(arguments[0]) ? arguments[0] : arguments;
                return (
                  this.update.apply(this, e),
                  this._trigger("changeDate"),
                  this.setValue(),
                  this
                );
              },
              setUTCDates: function () {
                var t = Array.isArray(arguments[0]) ? arguments[0] : arguments;
                return (
                  this.setDates.apply(this, e.map(t, this._utc_to_local)), this
                );
              },
              setDate: o("setDates"),
              setUTCDate: o("setUTCDates"),
              remove: o(
                "destroy",
                "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
              ),
              setValue: function () {
                var e = this.getFormattedDate();
                return this.inputField.val(e), this;
              },
              getFormattedDate: function (n) {
                n === t && (n = this.o.format);
                var i = this.o.language;
                return e
                  .map(this.dates, function (e) {
                    return v.formatDate(e, n, i);
                  })
                  .join(this.o.multidateSeparator);
              },
              getStartDate: function () {
                return this.o.startDate;
              },
              setStartDate: function (e) {
                return (
                  this._process_options({ startDate: e }),
                  this.update(),
                  this.updateNavArrows(),
                  this
                );
              },
              getEndDate: function () {
                return this.o.endDate;
              },
              setEndDate: function (e) {
                return (
                  this._process_options({ endDate: e }),
                  this.update(),
                  this.updateNavArrows(),
                  this
                );
              },
              setDaysOfWeekDisabled: function (e) {
                return (
                  this._process_options({ daysOfWeekDisabled: e }),
                  this.update(),
                  this
                );
              },
              setDaysOfWeekHighlighted: function (e) {
                return (
                  this._process_options({ daysOfWeekHighlighted: e }),
                  this.update(),
                  this
                );
              },
              setDatesDisabled: function (e) {
                return (
                  this._process_options({ datesDisabled: e }),
                  this.update(),
                  this
                );
              },
              place: function () {
                if (this.isInline) return this;
                var t = this.picker.outerWidth(),
                  n = this.picker.outerHeight(),
                  i = e(this.o.container),
                  r = i.width(),
                  o =
                    "body" === this.o.container
                      ? e(document).scrollTop()
                      : i.scrollTop(),
                  s = i.offset(),
                  a = [0];
                this.element.parents().each(function () {
                  var t = e(this).css("z-index");
                  "auto" !== t && 0 !== Number(t) && a.push(Number(t));
                });
                var l = Math.max.apply(Math, a) + this.o.zIndexOffset,
                  c = this.component
                    ? this.component.parent().offset()
                    : this.element.offset(),
                  u = this.component
                    ? this.component.outerHeight(!0)
                    : this.element.outerHeight(!1),
                  h = this.component
                    ? this.component.outerWidth(!0)
                    : this.element.outerWidth(!1),
                  d = c.left - s.left,
                  f = c.top - s.top;
                "body" !== this.o.container && (f += o),
                  this.picker.removeClass(
                    "datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"
                  ),
                  "auto" !== this.o.orientation.x
                    ? (this.picker.addClass(
                        "datepicker-orient-" + this.o.orientation.x
                      ),
                      "right" === this.o.orientation.x && (d -= t - h))
                    : c.left < 0
                    ? (this.picker.addClass("datepicker-orient-left"),
                      (d -= c.left - 10))
                    : d + t > r
                    ? (this.picker.addClass("datepicker-orient-right"),
                      (d += h - t))
                    : this.o.rtl
                    ? this.picker.addClass("datepicker-orient-right")
                    : this.picker.addClass("datepicker-orient-left");
                var p = this.o.orientation.y;
                if (
                  ("auto" === p && (p = -o + f - n < 0 ? "bottom" : "top"),
                  this.picker.addClass("datepicker-orient-" + p),
                  "top" === p
                    ? (f -= n + parseInt(this.picker.css("padding-top")))
                    : (f += u),
                  this.o.rtl)
                ) {
                  var g = r - (d + h);
                  this.picker.css({ top: f, right: g, zIndex: l });
                } else this.picker.css({ top: f, left: d, zIndex: l });
                return this;
              },
              _allow_update: !0,
              update: function () {
                if (!this._allow_update) return this;
                var t = this.dates.copy(),
                  n = [],
                  i = !1;
                return (
                  arguments.length
                    ? (e.each(
                        arguments,
                        e.proxy(function (e, t) {
                          t instanceof Date && (t = this._local_to_utc(t)),
                            n.push(t);
                        }, this)
                      ),
                      (i = !0))
                    : ((n =
                        (n = this.isInput
                          ? this.element.val()
                          : this.element.data("date") ||
                            this.inputField.val()) && this.o.multidate
                          ? n.split(this.o.multidateSeparator)
                          : [n]),
                      delete this.element.data().date),
                  (n = e.map(
                    n,
                    e.proxy(function (e) {
                      return v.parseDate(
                        e,
                        this.o.format,
                        this.o.language,
                        this.o.assumeNearbyYear
                      );
                    }, this)
                  )),
                  (n = e.grep(
                    n,
                    e.proxy(function (e) {
                      return !this.dateWithinRange(e) || !e;
                    }, this),
                    !0
                  )),
                  this.dates.replace(n),
                  this.o.updateViewDate &&
                    (this.dates.length
                      ? (this.viewDate = new Date(this.dates.get(-1)))
                      : this.viewDate < this.o.startDate
                      ? (this.viewDate = new Date(this.o.startDate))
                      : this.viewDate > this.o.endDate
                      ? (this.viewDate = new Date(this.o.endDate))
                      : (this.viewDate = this.o.defaultViewDate)),
                  i
                    ? (this.setValue(), this.element.change())
                    : this.dates.length &&
                      String(t) !== String(this.dates) &&
                      i &&
                      (this._trigger("changeDate"), this.element.change()),
                  !this.dates.length &&
                    t.length &&
                    (this._trigger("clearDate"), this.element.change()),
                  this.fill(),
                  this
                );
              },
              fillDow: function () {
                if (this.o.showWeekDays) {
                  var t = this.o.weekStart,
                    n = "<tr>";
                  for (
                    this.o.calendarWeeks && (n += '<th class="cw">&#160;</th>');
                    t < this.o.weekStart + 7;

                  )
                    (n += '<th class="dow'),
                      -1 !== e.inArray(t, this.o.daysOfWeekDisabled) &&
                        (n += " disabled"),
                      (n +=
                        '">' + m[this.o.language].daysMin[t++ % 7] + "</th>");
                  (n += "</tr>"),
                    this.picker.find(".datepicker-days thead").append(n);
                }
              },
              fillMonths: function () {
                for (
                  var e = this._utc_to_local(this.viewDate), t = "", n = 0;
                  n < 12;
                  n++
                )
                  t +=
                    '<span class="month' +
                    (e && e.getMonth() === n ? " focused" : "") +
                    '">' +
                    m[this.o.language].monthsShort[n] +
                    "</span>";
                this.picker.find(".datepicker-months td").html(t);
              },
              setRange: function (t) {
                t && t.length
                  ? (this.range = e.map(t, function (e) {
                      return e.valueOf();
                    }))
                  : delete this.range,
                  this.fill();
              },
              getClassNames: function (t) {
                var n = [],
                  o = this.viewDate.getUTCFullYear(),
                  s = this.viewDate.getUTCMonth(),
                  a = i();
                return (
                  t.getUTCFullYear() < o ||
                  (t.getUTCFullYear() === o && t.getUTCMonth() < s)
                    ? n.push("old")
                    : (t.getUTCFullYear() > o ||
                        (t.getUTCFullYear() === o && t.getUTCMonth() > s)) &&
                      n.push("new"),
                  this.focusDate &&
                    t.valueOf() === this.focusDate.valueOf() &&
                    n.push("focused"),
                  this.o.todayHighlight && r(t, a) && n.push("today"),
                  -1 !== this.dates.contains(t) && n.push("active"),
                  this.dateWithinRange(t) || n.push("disabled"),
                  this.dateIsDisabled(t) && n.push("disabled", "disabled-date"),
                  -1 !==
                    e.inArray(t.getUTCDay(), this.o.daysOfWeekHighlighted) &&
                    n.push("highlighted"),
                  this.range &&
                    (t > this.range[0] &&
                      t < this.range[this.range.length - 1] &&
                      n.push("range"),
                    -1 !== e.inArray(t.valueOf(), this.range) &&
                      n.push("selected"),
                    t.valueOf() === this.range[0] && n.push("range-start"),
                    t.valueOf() === this.range[this.range.length - 1] &&
                      n.push("range-end")),
                  n
                );
              },
              _fill_yearsView: function (n, i, r, o, s, a, l) {
                for (
                  var c,
                    u,
                    h,
                    d = "",
                    f = r / 10,
                    p = this.picker.find(n),
                    g = Math.floor(o / r) * r,
                    m = g + 9 * f,
                    v = Math.floor(this.viewDate.getFullYear() / f) * f,
                    y = e.map(this.dates, function (e) {
                      return Math.floor(e.getUTCFullYear() / f) * f;
                    }),
                    b = g - f;
                  b <= m + f;
                  b += f
                )
                  (c = [i]),
                    (u = null),
                    b === g - f ? c.push("old") : b === m + f && c.push("new"),
                    -1 !== e.inArray(b, y) && c.push("active"),
                    (b < s || b > a) && c.push("disabled"),
                    b === v && c.push("focused"),
                    l !== e.noop &&
                      ((h = l(new Date(b, 0, 1))) === t
                        ? (h = {})
                        : "boolean" == typeof h
                        ? (h = { enabled: h })
                        : "string" == typeof h && (h = { classes: h }),
                      !1 === h.enabled && c.push("disabled"),
                      h.classes && (c = c.concat(h.classes.split(/\s+/))),
                      h.tooltip && (u = h.tooltip)),
                    (d +=
                      '<span class="' +
                      c.join(" ") +
                      '"' +
                      (u ? ' title="' + u + '"' : "") +
                      ">" +
                      b +
                      "</span>");
                p.find(".datepicker-switch").text(g + "-" + m),
                  p.find("td").html(d);
              },
              fill: function () {
                var r,
                  o,
                  s = new Date(this.viewDate),
                  a = s.getUTCFullYear(),
                  l = s.getUTCMonth(),
                  c =
                    this.o.startDate !== -1 / 0
                      ? this.o.startDate.getUTCFullYear()
                      : -1 / 0,
                  u =
                    this.o.startDate !== -1 / 0
                      ? this.o.startDate.getUTCMonth()
                      : -1 / 0,
                  h =
                    this.o.endDate !== 1 / 0
                      ? this.o.endDate.getUTCFullYear()
                      : 1 / 0,
                  d =
                    this.o.endDate !== 1 / 0
                      ? this.o.endDate.getUTCMonth()
                      : 1 / 0,
                  f = m[this.o.language].today || m.en.today || "",
                  p = m[this.o.language].clear || m.en.clear || "",
                  g = m[this.o.language].titleFormat || m.en.titleFormat,
                  y = i(),
                  b =
                    (!0 === this.o.todayBtn || "linked" === this.o.todayBtn) &&
                    y >= this.o.startDate &&
                    y <= this.o.endDate &&
                    !this.weekOfDateIsDisabled(y);
                if (!isNaN(a) && !isNaN(l)) {
                  this.picker
                    .find(".datepicker-days .datepicker-switch")
                    .text(v.formatDate(s, g, this.o.language)),
                    this.picker
                      .find("tfoot .today")
                      .text(f)
                      .css("display", b ? "table-cell" : "none"),
                    this.picker
                      .find("tfoot .clear")
                      .text(p)
                      .css(
                        "display",
                        !0 === this.o.clearBtn ? "table-cell" : "none"
                      ),
                    this.picker
                      .find("thead .datepicker-title")
                      .text(this.o.title)
                      .css(
                        "display",
                        "string" == typeof this.o.title && "" !== this.o.title
                          ? "table-cell"
                          : "none"
                      ),
                    this.updateNavArrows(),
                    this.fillMonths();
                  var _ = n(a, l, 0),
                    w = _.getUTCDate();
                  _.setUTCDate(
                    w - ((_.getUTCDay() - this.o.weekStart + 7) % 7)
                  );
                  var x = new Date(_);
                  _.getUTCFullYear() < 100 &&
                    x.setUTCFullYear(_.getUTCFullYear()),
                    x.setUTCDate(x.getUTCDate() + 42),
                    (x = x.valueOf());
                  for (var k, C, D = []; _.valueOf() < x; ) {
                    if (
                      (k = _.getUTCDay()) === this.o.weekStart &&
                      (D.push("<tr>"), this.o.calendarWeeks)
                    ) {
                      var T = new Date(
                          +_ + ((this.o.weekStart - k - 7) % 7) * 864e5
                        ),
                        E = new Date(
                          Number(T) + ((11 - T.getUTCDay()) % 7) * 864e5
                        ),
                        A = new Date(
                          Number((A = n(E.getUTCFullYear(), 0, 1))) +
                            ((11 - A.getUTCDay()) % 7) * 864e5
                        ),
                        O = (E - A) / 864e5 / 7 + 1;
                      D.push('<td class="cw">' + O + "</td>");
                    }
                    (C = this.getClassNames(_)).push("day");
                    var S = _.getUTCDate();
                    this.o.beforeShowDay !== e.noop &&
                      ((o = this.o.beforeShowDay(this._utc_to_local(_))) === t
                        ? (o = {})
                        : "boolean" == typeof o
                        ? (o = { enabled: o })
                        : "string" == typeof o && (o = { classes: o }),
                      !1 === o.enabled && C.push("disabled"),
                      o.classes && (C = C.concat(o.classes.split(/\s+/))),
                      o.tooltip && (r = o.tooltip),
                      o.content && (S = o.content)),
                      (C =
                        "function" == typeof e.uniqueSort
                          ? e.uniqueSort(C)
                          : e.unique(C)),
                      D.push(
                        '<td class="' +
                          C.join(" ") +
                          '"' +
                          (r ? ' title="' + r + '"' : "") +
                          ' data-date="' +
                          _.getTime().toString() +
                          '">' +
                          S +
                          "</td>"
                      ),
                      (r = null),
                      k === this.o.weekEnd && D.push("</tr>"),
                      _.setUTCDate(_.getUTCDate() + 1);
                  }
                  this.picker.find(".datepicker-days tbody").html(D.join(""));
                  var M =
                      m[this.o.language].monthsTitle ||
                      m.en.monthsTitle ||
                      "Months",
                    L = this.picker
                      .find(".datepicker-months")
                      .find(".datepicker-switch")
                      .text(this.o.maxViewMode < 2 ? M : a)
                      .end()
                      .find("tbody span")
                      .removeClass("active");
                  if (
                    (e.each(this.dates, function (e, t) {
                      t.getUTCFullYear() === a &&
                        L.eq(t.getUTCMonth()).addClass("active");
                    }),
                    (a < c || a > h) && L.addClass("disabled"),
                    a === c && L.slice(0, u).addClass("disabled"),
                    a === h && L.slice(d + 1).addClass("disabled"),
                    this.o.beforeShowMonth !== e.noop)
                  ) {
                    var N = this;
                    e.each(L, function (n, i) {
                      var r = new Date(a, n, 1),
                        o = N.o.beforeShowMonth(r);
                      o === t
                        ? (o = {})
                        : "boolean" == typeof o
                        ? (o = { enabled: o })
                        : "string" == typeof o && (o = { classes: o }),
                        !1 !== o.enabled ||
                          e(i).hasClass("disabled") ||
                          e(i).addClass("disabled"),
                        o.classes && e(i).addClass(o.classes),
                        o.tooltip && e(i).prop("title", o.tooltip);
                    });
                  }
                  this._fill_yearsView(
                    ".datepicker-years",
                    "year",
                    10,
                    a,
                    c,
                    h,
                    this.o.beforeShowYear
                  ),
                    this._fill_yearsView(
                      ".datepicker-decades",
                      "decade",
                      100,
                      a,
                      c,
                      h,
                      this.o.beforeShowDecade
                    ),
                    this._fill_yearsView(
                      ".datepicker-centuries",
                      "century",
                      1e3,
                      a,
                      c,
                      h,
                      this.o.beforeShowCentury
                    );
                }
              },
              updateNavArrows: function () {
                if (this._allow_update) {
                  var e,
                    t,
                    n = new Date(this.viewDate),
                    i = n.getUTCFullYear(),
                    r = n.getUTCMonth(),
                    o =
                      this.o.startDate !== -1 / 0
                        ? this.o.startDate.getUTCFullYear()
                        : -1 / 0,
                    s =
                      this.o.startDate !== -1 / 0
                        ? this.o.startDate.getUTCMonth()
                        : -1 / 0,
                    a =
                      this.o.endDate !== 1 / 0
                        ? this.o.endDate.getUTCFullYear()
                        : 1 / 0,
                    l =
                      this.o.endDate !== 1 / 0
                        ? this.o.endDate.getUTCMonth()
                        : 1 / 0,
                    c = 1;
                  switch (this.viewMode) {
                    case 4:
                      c *= 10;
                    case 3:
                      c *= 10;
                    case 2:
                      c *= 10;
                    case 1:
                      (e = Math.floor(i / c) * c <= o),
                        (t = Math.floor(i / c) * c + c > a);
                      break;
                    case 0:
                      (e = i <= o && r <= s), (t = i >= a && r >= l);
                  }
                  this.picker.find(".prev").toggleClass("disabled", e),
                    this.picker.find(".next").toggleClass("disabled", t);
                }
              },
              click: function (t) {
                var r, o, s;
                t.preventDefault(),
                  t.stopPropagation(),
                  (r = e(t.target)).hasClass("datepicker-switch") &&
                    this.viewMode !== this.o.maxViewMode &&
                    this.setViewMode(this.viewMode + 1),
                  r.hasClass("today") &&
                    !r.hasClass("day") &&
                    (this.setViewMode(0),
                    this._setDate(
                      i(),
                      "linked" === this.o.todayBtn ? null : "view"
                    )),
                  r.hasClass("clear") && this.clearDates(),
                  r.hasClass("disabled") ||
                    ((r.hasClass("month") ||
                      r.hasClass("year") ||
                      r.hasClass("decade") ||
                      r.hasClass("century")) &&
                      (this.viewDate.setUTCDate(1),
                      1 === this.viewMode
                        ? ((s = r.parent().find("span").index(r)),
                          (o = this.viewDate.getUTCFullYear()),
                          this.viewDate.setUTCMonth(s))
                        : ((s = 0),
                          (o = Number(r.text())),
                          this.viewDate.setUTCFullYear(o)),
                      this._trigger(
                        v.viewModes[this.viewMode - 1].e,
                        this.viewDate
                      ),
                      this.viewMode === this.o.minViewMode
                        ? this._setDate(n(o, s, 1))
                        : (this.setViewMode(this.viewMode - 1), this.fill()))),
                  this.picker.is(":visible") &&
                    this._focused_from &&
                    this._focused_from.focus(),
                  delete this._focused_from;
              },
              dayCellClick: function (t) {
                var n = e(t.currentTarget).data("date"),
                  i = new Date(n);
                this.o.updateViewDate &&
                  (i.getUTCFullYear() !== this.viewDate.getUTCFullYear() &&
                    this._trigger("changeYear", this.viewDate),
                  i.getUTCMonth() !== this.viewDate.getUTCMonth() &&
                    this._trigger("changeMonth", this.viewDate)),
                  this._setDate(i);
              },
              navArrowsClick: function (t) {
                var n = e(t.currentTarget).hasClass("prev") ? -1 : 1;
                0 !== this.viewMode &&
                  (n *= 12 * v.viewModes[this.viewMode].navStep),
                  (this.viewDate = this.moveMonth(this.viewDate, n)),
                  this._trigger(v.viewModes[this.viewMode].e, this.viewDate),
                  this.fill();
              },
              _toggle_multidate: function (e) {
                var t = this.dates.contains(e);
                if (
                  (e || this.dates.clear(),
                  -1 !== t
                    ? (!0 === this.o.multidate ||
                        this.o.multidate > 1 ||
                        this.o.toggleActive) &&
                      this.dates.remove(t)
                    : !1 === this.o.multidate
                    ? (this.dates.clear(), this.dates.push(e))
                    : this.dates.push(e),
                  "number" == typeof this.o.multidate)
                )
                  for (; this.dates.length > this.o.multidate; )
                    this.dates.remove(0);
              },
              _setDate: function (e, t) {
                (t && "date" !== t) || this._toggle_multidate(e && new Date(e)),
                  ((!t && this.o.updateViewDate) || "view" === t) &&
                    (this.viewDate = e && new Date(e)),
                  this.fill(),
                  this.setValue(),
                  (t && "view" === t) || this._trigger("changeDate"),
                  this.inputField.trigger("change"),
                  !this.o.autoclose || (t && "date" !== t) || this.hide();
              },
              moveDay: function (e, t) {
                var n = new Date(e);
                return n.setUTCDate(e.getUTCDate() + t), n;
              },
              moveWeek: function (e, t) {
                return this.moveDay(e, 7 * t);
              },
              moveMonth: function (e, t) {
                if (!(n = e) || isNaN(n.getTime()))
                  return this.o.defaultViewDate;
                var n;
                if (!t) return e;
                var i,
                  r,
                  o = new Date(e.valueOf()),
                  s = o.getUTCDate(),
                  a = o.getUTCMonth(),
                  l = Math.abs(t);
                if (((t = t > 0 ? 1 : -1), 1 === l))
                  (r =
                    -1 === t
                      ? function () {
                          return o.getUTCMonth() === a;
                        }
                      : function () {
                          return o.getUTCMonth() !== i;
                        }),
                    (i = a + t),
                    o.setUTCMonth(i),
                    (i = (i + 12) % 12);
                else {
                  for (var c = 0; c < l; c++) o = this.moveMonth(o, t);
                  (i = o.getUTCMonth()),
                    o.setUTCDate(s),
                    (r = function () {
                      return i !== o.getUTCMonth();
                    });
                }
                for (; r(); ) o.setUTCDate(--s), o.setUTCMonth(i);
                return o;
              },
              moveYear: function (e, t) {
                return this.moveMonth(e, 12 * t);
              },
              moveAvailableDate: function (e, t, n) {
                do {
                  if (((e = this[n](e, t)), !this.dateWithinRange(e)))
                    return !1;
                  n = "moveDay";
                } while (this.dateIsDisabled(e));
                return e;
              },
              weekOfDateIsDisabled: function (t) {
                return (
                  -1 !== e.inArray(t.getUTCDay(), this.o.daysOfWeekDisabled)
                );
              },
              dateIsDisabled: function (t) {
                return (
                  this.weekOfDateIsDisabled(t) ||
                  e.grep(this.o.datesDisabled, function (e) {
                    return r(t, e);
                  }).length > 0
                );
              },
              dateWithinRange: function (e) {
                return e >= this.o.startDate && e <= this.o.endDate;
              },
              keydown: function (e) {
                if (this.picker.is(":visible")) {
                  var t,
                    n,
                    i = !1,
                    r = this.focusDate || this.viewDate;
                  switch (e.keyCode) {
                    case 27:
                      this.focusDate
                        ? ((this.focusDate = null),
                          (this.viewDate = this.dates.get(-1) || this.viewDate),
                          this.fill())
                        : this.hide(),
                        e.preventDefault(),
                        e.stopPropagation();
                      break;
                    case 37:
                    case 38:
                    case 39:
                    case 40:
                      if (
                        !this.o.keyboardNavigation ||
                        7 === this.o.daysOfWeekDisabled.length
                      )
                        break;
                      (t = 37 === e.keyCode || 38 === e.keyCode ? -1 : 1),
                        0 === this.viewMode
                          ? e.ctrlKey
                            ? (n = this.moveAvailableDate(r, t, "moveYear")) &&
                              this._trigger("changeYear", this.viewDate)
                            : e.shiftKey
                            ? (n = this.moveAvailableDate(r, t, "moveMonth")) &&
                              this._trigger("changeMonth", this.viewDate)
                            : 37 === e.keyCode || 39 === e.keyCode
                            ? (n = this.moveAvailableDate(r, t, "moveDay"))
                            : this.weekOfDateIsDisabled(r) ||
                              (n = this.moveAvailableDate(r, t, "moveWeek"))
                          : 1 === this.viewMode
                          ? ((38 !== e.keyCode && 40 !== e.keyCode) || (t *= 4),
                            (n = this.moveAvailableDate(r, t, "moveMonth")))
                          : 2 === this.viewMode &&
                            ((38 !== e.keyCode && 40 !== e.keyCode) || (t *= 4),
                            (n = this.moveAvailableDate(r, t, "moveYear"))),
                        n &&
                          ((this.focusDate = this.viewDate = n),
                          this.setValue(),
                          this.fill(),
                          e.preventDefault());
                      break;
                    case 13:
                      if (!this.o.forceParse) break;
                      (r =
                        this.focusDate || this.dates.get(-1) || this.viewDate),
                        this.o.keyboardNavigation &&
                          (this._toggle_multidate(r), (i = !0)),
                        (this.focusDate = null),
                        (this.viewDate = this.dates.get(-1) || this.viewDate),
                        this.setValue(),
                        this.fill(),
                        this.picker.is(":visible") &&
                          (e.preventDefault(),
                          e.stopPropagation(),
                          this.o.autoclose && this.hide());
                      break;
                    case 9:
                      (this.focusDate = null),
                        (this.viewDate = this.dates.get(-1) || this.viewDate),
                        this.fill(),
                        this.hide();
                  }
                  i &&
                    (this.dates.length
                      ? this._trigger("changeDate")
                      : this._trigger("clearDate"),
                    this.inputField.trigger("change"));
                } else
                  (40 !== e.keyCode && 27 !== e.keyCode) ||
                    (this.show(), e.stopPropagation());
              },
              setViewMode: function (e) {
                (this.viewMode = e),
                  this.picker
                    .children("div")
                    .hide()
                    .filter(".datepicker-" + v.viewModes[this.viewMode].clsName)
                    .show(),
                  this.updateNavArrows(),
                  this._trigger("changeViewMode", new Date(this.viewDate));
              },
            };
            var c = function (t, n) {
              e.data(t, "datepicker", this),
                (this.element = e(t)),
                (this.inputs = e.map(n.inputs, function (e) {
                  return e.jquery ? e[0] : e;
                })),
                delete n.inputs,
                (this.keepEmptyValues = n.keepEmptyValues),
                delete n.keepEmptyValues,
                f
                  .call(e(this.inputs), n)
                  .on("changeDate", e.proxy(this.dateUpdated, this)),
                (this.pickers = e.map(this.inputs, function (t) {
                  return e.data(t, "datepicker");
                })),
                this.updateDates();
            };
            function u(t, n) {
              var i = e(t).data(),
                r = {},
                o = new RegExp("^" + n.toLowerCase() + "([A-Z])");
              function s(e, t) {
                return t.toLowerCase();
              }
              for (var a in ((n = new RegExp("^" + n.toLowerCase())), i))
                n.test(a) && (r[a.replace(o, s)] = i[a]);
              return r;
            }
            function h(t) {
              var n = {};
              if (m[t] || ((t = t.split("-")[0]), m[t])) {
                var i = m[t];
                return (
                  e.each(g, function (e, t) {
                    t in i && (n[t] = i[t]);
                  }),
                  n
                );
              }
            }
            c.prototype = {
              updateDates: function () {
                (this.dates = e.map(this.pickers, function (e) {
                  return e.getUTCDate();
                })),
                  this.updateRanges();
              },
              updateRanges: function () {
                var t = e.map(this.dates, function (e) {
                  return e.valueOf();
                });
                e.each(this.pickers, function (e, n) {
                  n.setRange(t);
                });
              },
              clearDates: function () {
                e.each(this.pickers, function (e, t) {
                  t.clearDates();
                });
              },
              dateUpdated: function (n) {
                if (!this.updating) {
                  this.updating = !0;
                  var i = e.data(n.target, "datepicker");
                  if (i !== t) {
                    var r = i.getUTCDate(),
                      o = this.keepEmptyValues,
                      s = e.inArray(n.target, this.inputs),
                      a = s - 1,
                      l = s + 1,
                      c = this.inputs.length;
                    if (-1 !== s) {
                      if (
                        (e.each(this.pickers, function (e, t) {
                          t.getUTCDate() || (t !== i && o) || t.setUTCDate(r);
                        }),
                        r < this.dates[a])
                      )
                        for (
                          ;
                          a >= 0 &&
                          r < this.dates[a] &&
                          (this.pickers[a].element.val() || "").length > 0;

                        )
                          this.pickers[a--].setUTCDate(r);
                      else if (r > this.dates[l])
                        for (
                          ;
                          l < c &&
                          r > this.dates[l] &&
                          (this.pickers[l].element.val() || "").length > 0;

                        )
                          this.pickers[l++].setUTCDate(r);
                      this.updateDates(), delete this.updating;
                    }
                  }
                }
              },
              destroy: function () {
                e.map(this.pickers, function (e) {
                  e.destroy();
                }),
                  e(this.inputs).off("changeDate", this.dateUpdated),
                  delete this.element.data().datepicker;
              },
              remove: o(
                "destroy",
                "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"
              ),
            };
            var d = e.fn.datepicker,
              f = function (n) {
                var i,
                  r = Array.apply(null, arguments);
                if (
                  (r.shift(),
                  this.each(function () {
                    var t = e(this),
                      o = t.data("datepicker"),
                      s = "object" == typeof n && n;
                    if (!o) {
                      var a = u(this, "date"),
                        d = h(e.extend({}, p, a, s).language),
                        f = e.extend({}, p, d, a, s);
                      t.hasClass("input-daterange") || f.inputs
                        ? (e.extend(f, {
                            inputs: f.inputs || t.find("input").toArray(),
                          }),
                          (o = new c(this, f)))
                        : (o = new l(this, f)),
                        t.data("datepicker", o);
                    }
                    "string" == typeof n &&
                      "function" == typeof o[n] &&
                      (i = o[n].apply(o, r));
                  }),
                  i === t || i instanceof l || i instanceof c)
                )
                  return this;
                if (this.length > 1)
                  throw new Error(
                    "Using only allowed for the collection of a single element (" +
                      n +
                      " function)"
                  );
                return i;
              };
            e.fn.datepicker = f;
            var p = (e.fn.datepicker.defaults = {
                assumeNearbyYear: !1,
                autoclose: !1,
                beforeShowDay: e.noop,
                beforeShowMonth: e.noop,
                beforeShowYear: e.noop,
                beforeShowDecade: e.noop,
                beforeShowCentury: e.noop,
                calendarWeeks: !1,
                clearBtn: !1,
                toggleActive: !1,
                daysOfWeekDisabled: [],
                daysOfWeekHighlighted: [],
                datesDisabled: [],
                endDate: 1 / 0,
                forceParse: !0,
                format: "mm/dd/yyyy",
                isInline: null,
                keepEmptyValues: !1,
                keyboardNavigation: !0,
                language: "en",
                minViewMode: 0,
                maxViewMode: 4,
                multidate: !1,
                multidateSeparator: ",",
                orientation: "auto",
                rtl: !1,
                startDate: -1 / 0,
                startView: 0,
                todayBtn: !1,
                todayHighlight: !1,
                updateViewDate: !0,
                weekStart: 0,
                disableTouchKeyboard: !1,
                enableOnReadonly: !0,
                showOnFocus: !0,
                zIndexOffset: 10,
                container: "body",
                immediateUpdates: !1,
                title: "",
                templates: { leftArrow: "&#x00AB;", rightArrow: "&#x00BB;" },
                showWeekDays: !0,
              }),
              g = (e.fn.datepicker.locale_opts = [
                "format",
                "rtl",
                "weekStart",
              ]);
            e.fn.datepicker.Constructor = l;
            var m = (e.fn.datepicker.dates = {
                en: {
                  days: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                  months: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ],
                  monthsShort: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ],
                  today: "Today",
                  clear: "Clear",
                  titleFormat: "MM yyyy",
                },
              }),
              v = {
                viewModes: [
                  {
                    names: ["days", "month"],
                    clsName: "days",
                    e: "changeMonth",
                  },
                  {
                    names: ["months", "year"],
                    clsName: "months",
                    e: "changeYear",
                    navStep: 1,
                  },
                  {
                    names: ["years", "decade"],
                    clsName: "years",
                    e: "changeDecade",
                    navStep: 10,
                  },
                  {
                    names: ["decades", "century"],
                    clsName: "decades",
                    e: "changeCentury",
                    navStep: 100,
                  },
                  {
                    names: ["centuries", "millennium"],
                    clsName: "centuries",
                    e: "changeMillennium",
                    navStep: 1e3,
                  },
                ],
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
                parseFormat: function (e) {
                  if (
                    "function" == typeof e.toValue &&
                    "function" == typeof e.toDisplay
                  )
                    return e;
                  var t = e.replace(this.validParts, "\0").split("\0"),
                    n = e.match(this.validParts);
                  if (!t || !t.length || !n || 0 === n.length)
                    throw new Error("Invalid date format.");
                  return { separators: t, parts: n };
                },
                parseDate: function (n, r, o, s) {
                  if (!n) return t;
                  if (n instanceof Date) return n;
                  if (
                    ("string" == typeof r && (r = v.parseFormat(r)), r.toValue)
                  )
                    return r.toValue(n, r, o);
                  var a,
                    c,
                    u,
                    h,
                    d,
                    f = {
                      d: "moveDay",
                      m: "moveMonth",
                      w: "moveWeek",
                      y: "moveYear",
                    },
                    p = { yesterday: "-1d", today: "+0d", tomorrow: "+1d" };
                  if (
                    (n in p && (n = p[n]),
                    /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(n))
                  ) {
                    for (
                      a = n.match(/([\-+]\d+)([dmwy])/gi),
                        n = new Date(),
                        h = 0;
                      h < a.length;
                      h++
                    )
                      (c = a[h].match(/([\-+]\d+)([dmwy])/i)),
                        (u = Number(c[1])),
                        (d = f[c[2].toLowerCase()]),
                        (n = l.prototype[d](n, u));
                    return l.prototype._zero_utc_time(n);
                  }
                  a = (n && n.match(this.nonpunctuation)) || [];
                  var g,
                    y,
                    b = {},
                    _ = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                    w = {
                      yyyy: function (e, t) {
                        return e.setUTCFullYear(
                          s
                            ? (!0 === (i = s) && (i = 10),
                              (n = t) < 100 &&
                                (n += 2e3) > new Date().getFullYear() + i &&
                                (n -= 100),
                              n)
                            : t
                        );
                        var n, i;
                      },
                      m: function (e, t) {
                        if (isNaN(e)) return e;
                        for (t -= 1; t < 0; ) t += 12;
                        for (t %= 12, e.setUTCMonth(t); e.getUTCMonth() !== t; )
                          e.setUTCDate(e.getUTCDate() - 1);
                        return e;
                      },
                      d: function (e, t) {
                        return e.setUTCDate(t);
                      },
                    };
                  (w.yy = w.yyyy),
                    (w.M = w.MM = w.mm = w.m),
                    (w.dd = w.d),
                    (n = i());
                  var x = r.parts.slice();
                  function k() {
                    var e = this.slice(0, a[h].length),
                      t = a[h].slice(0, e.length);
                    return e.toLowerCase() === t.toLowerCase();
                  }
                  if (
                    (a.length !== x.length &&
                      (x = e(x)
                        .filter(function (t, n) {
                          return -1 !== e.inArray(n, _);
                        })
                        .toArray()),
                    a.length === x.length)
                  ) {
                    var C, D, T;
                    for (h = 0, C = x.length; h < C; h++) {
                      if (((g = parseInt(a[h], 10)), (c = x[h]), isNaN(g)))
                        switch (c) {
                          case "MM":
                            (y = e(m[o].months).filter(k)),
                              (g = e.inArray(y[0], m[o].months) + 1);
                            break;
                          case "M":
                            (y = e(m[o].monthsShort).filter(k)),
                              (g = e.inArray(y[0], m[o].monthsShort) + 1);
                        }
                      b[c] = g;
                    }
                    for (h = 0; h < _.length; h++)
                      (T = _[h]) in b &&
                        !isNaN(b[T]) &&
                        ((D = new Date(n)), w[T](D, b[T]), isNaN(D) || (n = D));
                  }
                  return n;
                },
                formatDate: function (t, n, i) {
                  if (!t) return "";
                  if (
                    ("string" == typeof n && (n = v.parseFormat(n)),
                    n.toDisplay)
                  )
                    return n.toDisplay(t, n, i);
                  var r = {
                    d: t.getUTCDate(),
                    D: m[i].daysShort[t.getUTCDay()],
                    DD: m[i].days[t.getUTCDay()],
                    m: t.getUTCMonth() + 1,
                    M: m[i].monthsShort[t.getUTCMonth()],
                    MM: m[i].months[t.getUTCMonth()],
                    yy: t.getUTCFullYear().toString().substring(2),
                    yyyy: t.getUTCFullYear(),
                  };
                  (r.dd = (r.d < 10 ? "0" : "") + r.d),
                    (r.mm = (r.m < 10 ? "0" : "") + r.m),
                    (t = []);
                  for (
                    var o = e.extend([], n.separators),
                      s = 0,
                      a = n.parts.length;
                    s <= a;
                    s++
                  )
                    o.length && t.push(o.shift()), t.push(r[n.parts[s]]);
                  return t.join("");
                },
                headTemplate:
                  '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' +
                  p.templates.leftArrow +
                  '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' +
                  p.templates.rightArrow +
                  "</th></tr></thead>",
                contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
                footTemplate:
                  '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>',
              };
            (v.template =
              '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' +
              v.headTemplate +
              "<tbody></tbody>" +
              v.footTemplate +
              '</table></div><div class="datepicker-months"><table class="table-condensed">' +
              v.headTemplate +
              v.contTemplate +
              v.footTemplate +
              '</table></div><div class="datepicker-years"><table class="table-condensed">' +
              v.headTemplate +
              v.contTemplate +
              v.footTemplate +
              '</table></div><div class="datepicker-decades"><table class="table-condensed">' +
              v.headTemplate +
              v.contTemplate +
              v.footTemplate +
              '</table></div><div class="datepicker-centuries"><table class="table-condensed">' +
              v.headTemplate +
              v.contTemplate +
              v.footTemplate +
              "</table></div></div>"),
              (e.fn.datepicker.DPGlobal = v),
              (e.fn.datepicker.noConflict = function () {
                return (e.fn.datepicker = d), this;
              }),
              (e.fn.datepicker.version = "1.10.0"),
              (e.fn.datepicker.deprecated = function (e) {
                var t = window.console;
                t && t.warn && t.warn("DEPRECATED: " + e);
              }),
              e(document).on(
                "focus.datepicker.data-api click.datepicker.data-api",
                '[data-provide="datepicker"]',
                function (t) {
                  var n = e(this);
                  n.data("datepicker") ||
                    (t.preventDefault(), f.call(n, "show"));
                }
              ),
              e(function () {
                f.call(e('[data-provide="datepicker-inline"]'));
              });
          })
            ? i.apply(t, r)
            : i) || (e.exports = o);
  },
  "8L3F": function (e, t, n) {
    "use strict";
    n.r(t),
      function (e) {
        var n =
            "undefined" != typeof window &&
            "undefined" != typeof document &&
            "undefined" != typeof navigator,
          i = (function () {
            for (
              var e = ["Edge", "Trident", "Firefox"], t = 0;
              t < e.length;
              t += 1
            )
              if (n && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
            return 0;
          })();
        var r =
          n && window.Promise
            ? function (e) {
                var t = !1;
                return function () {
                  t ||
                    ((t = !0),
                    window.Promise.resolve().then(function () {
                      (t = !1), e();
                    }));
                };
              }
            : function (e) {
                var t = !1;
                return function () {
                  t ||
                    ((t = !0),
                    setTimeout(function () {
                      (t = !1), e();
                    }, i));
                };
              };
        function o(e) {
          return e && "[object Function]" === {}.toString.call(e);
        }
        function s(e, t) {
          if (1 !== e.nodeType) return [];
          var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
          return t ? n[t] : n;
        }
        function a(e) {
          return "HTML" === e.nodeName ? e : e.parentNode || e.host;
        }
        function l(e) {
          if (!e) return document.body;
          switch (e.nodeName) {
            case "HTML":
            case "BODY":
              return e.ownerDocument.body;
            case "#document":
              return e.body;
          }
          var t = s(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
          return /(auto|scroll|overlay)/.test(n + r + i) ? e : l(a(e));
        }
        function c(e) {
          return e && e.referenceNode ? e.referenceNode : e;
        }
        var u = n && !(!window.MSInputMethodContext || !document.documentMode),
          h = n && /MSIE 10/.test(navigator.userAgent);
        function d(e) {
          return 11 === e ? u : 10 === e ? h : u || h;
        }
        function f(e) {
          if (!e) return document.documentElement;
          for (
            var t = d(10) ? document.body : null, n = e.offsetParent || null;
            n === t && e.nextElementSibling;

          )
            n = (e = e.nextElementSibling).offsetParent;
          var i = n && n.nodeName;
          return i && "BODY" !== i && "HTML" !== i
            ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
              "static" === s(n, "position")
              ? f(n)
              : n
            : e
            ? e.ownerDocument.documentElement
            : document.documentElement;
        }
        function p(e) {
          return null !== e.parentNode ? p(e.parentNode) : e;
        }
        function g(e, t) {
          if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
          var n =
              e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
          o.setStart(i, 0), o.setEnd(r, 0);
          var s,
            a,
            l = o.commonAncestorContainer;
          if ((e !== l && t !== l) || i.contains(r))
            return "BODY" === (a = (s = l).nodeName) ||
              ("HTML" !== a && f(s.firstElementChild) !== s)
              ? f(l)
              : l;
          var c = p(e);
          return c.host ? g(c.host, t) : g(e, p(t).host);
        }
        function m(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "top",
            n = "top" === t ? "scrollTop" : "scrollLeft",
            i = e.nodeName;
          if ("BODY" === i || "HTML" === i) {
            var r = e.ownerDocument.documentElement,
              o = e.ownerDocument.scrollingElement || r;
            return o[n];
          }
          return e[n];
        }
        function v(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = m(t, "top"),
            r = m(t, "left"),
            o = n ? -1 : 1;
          return (
            (e.top += i * o),
            (e.bottom += i * o),
            (e.left += r * o),
            (e.right += r * o),
            e
          );
        }
        function y(e, t) {
          var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
          return (
            parseFloat(e["border" + n + "Width"]) +
            parseFloat(e["border" + i + "Width"])
          );
        }
        function b(e, t, n, i) {
          return Math.max(
            t["offset" + e],
            t["scroll" + e],
            n["client" + e],
            n["offset" + e],
            n["scroll" + e],
            d(10)
              ? parseInt(n["offset" + e]) +
                  parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) +
                  parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")])
              : 0
          );
        }
        function _(e) {
          var t = e.body,
            n = e.documentElement,
            i = d(10) && getComputedStyle(n);
          return { height: b("Height", t, n, i), width: b("Width", t, n, i) };
        }
        var w = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          },
          x = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                  (i.configurable = !0),
                  "value" in i && (i.writable = !0),
                  Object.defineProperty(e, i.key, i);
              }
            }
            return function (t, n, i) {
              return n && e(t.prototype, n), i && e(t, i), t;
            };
          })(),
          k = function (e, t, n) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n),
              e
            );
          },
          C =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            };
        function D(e) {
          return C({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height,
          });
        }
        function T(e) {
          var t = {};
          try {
            if (d(10)) {
              t = e.getBoundingClientRect();
              var n = m(e, "top"),
                i = m(e, "left");
              (t.top += n), (t.left += i), (t.bottom += n), (t.right += i);
            } else t = e.getBoundingClientRect();
          } catch (e) {}
          var r = {
              left: t.left,
              top: t.top,
              width: t.right - t.left,
              height: t.bottom - t.top,
            },
            o = "HTML" === e.nodeName ? _(e.ownerDocument) : {},
            a = o.width || e.clientWidth || r.width,
            l = o.height || e.clientHeight || r.height,
            c = e.offsetWidth - a,
            u = e.offsetHeight - l;
          if (c || u) {
            var h = s(e);
            (c -= y(h, "x")), (u -= y(h, "y")), (r.width -= c), (r.height -= u);
          }
          return D(r);
        }
        function E(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = d(10),
            r = "HTML" === t.nodeName,
            o = T(e),
            a = T(t),
            c = l(e),
            u = s(t),
            h = parseFloat(u.borderTopWidth),
            f = parseFloat(u.borderLeftWidth);
          n &&
            r &&
            ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
          var p = D({
            top: o.top - a.top - h,
            left: o.left - a.left - f,
            width: o.width,
            height: o.height,
          });
          if (((p.marginTop = 0), (p.marginLeft = 0), !i && r)) {
            var g = parseFloat(u.marginTop),
              m = parseFloat(u.marginLeft);
            (p.top -= h - g),
              (p.bottom -= h - g),
              (p.left -= f - m),
              (p.right -= f - m),
              (p.marginTop = g),
              (p.marginLeft = m);
          }
          return (
            (i && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) &&
              (p = v(p, t)),
            p
          );
        }
        function A(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            i = E(e, n),
            r = Math.max(n.clientWidth, window.innerWidth || 0),
            o = Math.max(n.clientHeight, window.innerHeight || 0),
            s = t ? 0 : m(n),
            a = t ? 0 : m(n, "left"),
            l = {
              top: s - i.top + i.marginTop,
              left: a - i.left + i.marginLeft,
              width: r,
              height: o,
            };
          return D(l);
        }
        function O(e) {
          var t = e.nodeName;
          if ("BODY" === t || "HTML" === t) return !1;
          if ("fixed" === s(e, "position")) return !0;
          var n = a(e);
          return !!n && O(n);
        }
        function S(e) {
          if (!e || !e.parentElement || d()) return document.documentElement;
          for (var t = e.parentElement; t && "none" === s(t, "transform"); )
            t = t.parentElement;
          return t || document.documentElement;
        }
        function M(e, t, n, i) {
          var r =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = { top: 0, left: 0 },
            s = r ? S(e) : g(e, c(t));
          if ("viewport" === i) o = A(s, r);
          else {
            var u = void 0;
            "scrollParent" === i
              ? "BODY" === (u = l(a(t))).nodeName &&
                (u = e.ownerDocument.documentElement)
              : (u = "window" === i ? e.ownerDocument.documentElement : i);
            var h = E(u, s, r);
            if ("HTML" !== u.nodeName || O(s)) o = h;
            else {
              var d = _(e.ownerDocument),
                f = d.height,
                p = d.width;
              (o.top += h.top - h.marginTop),
                (o.bottom = f + h.top),
                (o.left += h.left - h.marginLeft),
                (o.right = p + h.left);
            }
          }
          var m = "number" == typeof (n = n || 0);
          return (
            (o.left += m ? n : n.left || 0),
            (o.top += m ? n : n.top || 0),
            (o.right -= m ? n : n.right || 0),
            (o.bottom -= m ? n : n.bottom || 0),
            o
          );
        }
        function L(e) {
          return e.width * e.height;
        }
        function N(e, t, n, i, r) {
          var o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === e.indexOf("auto")) return e;
          var s = M(n, i, o, r),
            a = {
              top: { width: s.width, height: t.top - s.top },
              right: { width: s.right - t.right, height: s.height },
              bottom: { width: s.width, height: s.bottom - t.bottom },
              left: { width: t.left - s.left, height: s.height },
            },
            l = Object.keys(a)
              .map(function (e) {
                return C({ key: e }, a[e], { area: L(a[e]) });
              })
              .sort(function (e, t) {
                return t.area - e.area;
              }),
            c = l.filter(function (e) {
              var t = e.width,
                i = e.height;
              return t >= n.clientWidth && i >= n.clientHeight;
            }),
            u = c.length > 0 ? c[0].key : l[0].key,
            h = e.split("-")[1];
          return u + (h ? "-" + h : "");
        }
        function j(e, t, n) {
          var i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null,
            r = i ? S(t) : g(t, c(n));
          return E(n, r, i);
        }
        function P(e) {
          var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
          return { width: e.offsetWidth + i, height: e.offsetHeight + n };
        }
        function I(e) {
          var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
          };
          return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e];
          });
        }
        function H(e, t, n) {
          n = n.split("-")[0];
          var i = P(e),
            r = { width: i.width, height: i.height },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
          return (
            (r[s] = t[s] + t[l] / 2 - i[l] / 2),
            (r[a] = n === a ? t[a] - i[c] : t[I(a)]),
            r
          );
        }
        function W(e, t) {
          return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function R(e, t, n) {
          return (
            (void 0 === n
              ? e
              : e.slice(
                  0,
                  (function (e, t, n) {
                    if (Array.prototype.findIndex)
                      return e.findIndex(function (e) {
                        return e[t] === n;
                      });
                    var i = W(e, function (e) {
                      return e[t] === n;
                    });
                    return e.indexOf(i);
                  })(e, "name", n)
                )
            ).forEach(function (e) {
              e.function &&
                console.warn(
                  "`modifier.function` is deprecated, use `modifier.fn`!"
                );
              var n = e.function || e.fn;
              e.enabled &&
                o(n) &&
                ((t.offsets.popper = D(t.offsets.popper)),
                (t.offsets.reference = D(t.offsets.reference)),
                (t = n(t, e)));
            }),
            t
          );
        }
        function F() {
          if (!this.state.isDestroyed) {
            var e = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {},
            };
            (e.offsets.reference = j(
              this.state,
              this.popper,
              this.reference,
              this.options.positionFixed
            )),
              (e.placement = N(
                this.options.placement,
                e.offsets.reference,
                this.popper,
                this.reference,
                this.options.modifiers.flip.boundariesElement,
                this.options.modifiers.flip.padding
              )),
              (e.originalPlacement = e.placement),
              (e.positionFixed = this.options.positionFixed),
              (e.offsets.popper = H(
                this.popper,
                e.offsets.reference,
                e.placement
              )),
              (e.offsets.popper.position = this.options.positionFixed
                ? "fixed"
                : "absolute"),
              (e = R(this.modifiers, e)),
              this.state.isCreated
                ? this.options.onUpdate(e)
                : ((this.state.isCreated = !0), this.options.onCreate(e));
          }
        }
        function $(e, t) {
          return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t;
          });
        }
        function U(e) {
          for (
            var t = [!1, "ms", "Webkit", "Moz", "O"],
              n = e.charAt(0).toUpperCase() + e.slice(1),
              i = 0;
            i < t.length;
            i++
          ) {
            var r = t[i],
              o = r ? "" + r + n : e;
            if (void 0 !== document.body.style[o]) return o;
          }
          return null;
        }
        function z() {
          return (
            (this.state.isDestroyed = !0),
            $(this.modifiers, "applyStyle") &&
              (this.popper.removeAttribute("x-placement"),
              (this.popper.style.position = ""),
              (this.popper.style.top = ""),
              (this.popper.style.left = ""),
              (this.popper.style.right = ""),
              (this.popper.style.bottom = ""),
              (this.popper.style.willChange = ""),
              (this.popper.style[U("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy &&
              this.popper.parentNode.removeChild(this.popper),
            this
          );
        }
        function q(e) {
          var t = e.ownerDocument;
          return t ? t.defaultView : window;
        }
        function B(e, t, n, i) {
          (n.updateBound = i),
            q(e).addEventListener("resize", n.updateBound, { passive: !0 });
          var r = l(e);
          return (
            (function e(t, n, i, r) {
              var o = "BODY" === t.nodeName,
                s = o ? t.ownerDocument.defaultView : t;
              s.addEventListener(n, i, { passive: !0 }),
                o || e(l(s.parentNode), n, i, r),
                r.push(s);
            })(r, "scroll", n.updateBound, n.scrollParents),
            (n.scrollElement = r),
            (n.eventsEnabled = !0),
            n
          );
        }
        function V() {
          this.state.eventsEnabled ||
            (this.state = B(
              this.reference,
              this.options,
              this.state,
              this.scheduleUpdate
            ));
        }
        function Y() {
          var e, t;
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state =
              ((e = this.reference),
              (t = this.state),
              q(e).removeEventListener("resize", t.updateBound),
              t.scrollParents.forEach(function (e) {
                e.removeEventListener("scroll", t.updateBound);
              }),
              (t.updateBound = null),
              (t.scrollParents = []),
              (t.scrollElement = null),
              (t.eventsEnabled = !1),
              t)));
        }
        function X(e) {
          return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function K(e, t) {
          Object.keys(t).forEach(function (n) {
            var i = "";
            -1 !==
              ["width", "height", "top", "right", "bottom", "left"].indexOf(
                n
              ) &&
              X(t[n]) &&
              (i = "px"),
              (e.style[n] = t[n] + i);
          });
        }
        var Q = n && /Firefox/i.test(navigator.userAgent);
        function G(e, t, n) {
          var i = W(e, function (e) {
              return e.name === t;
            }),
            r =
              !!i &&
              e.some(function (e) {
                return e.name === n && e.enabled && e.order < i.order;
              });
          if (!r) {
            var o = "`" + t + "`",
              s = "`" + n + "`";
            console.warn(
              s +
                " modifier is required by " +
                o +
                " modifier in order to work, be sure to include it before " +
                o +
                "!"
            );
          }
          return r;
        }
        var Z = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start",
          ],
          J = Z.slice(3);
        function ee(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = J.indexOf(e),
            i = J.slice(n + 1).concat(J.slice(0, n));
          return t ? i.reverse() : i;
        }
        var te = "flip",
          ne = "clockwise",
          ie = "counterclockwise";
        function re(e, t, n, i) {
          var r = [0, 0],
            o = -1 !== ["right", "left"].indexOf(i),
            s = e.split(/(\+|\-)/).map(function (e) {
              return e.trim();
            }),
            a = s.indexOf(
              W(s, function (e) {
                return -1 !== e.search(/,|\s/);
              })
            );
          s[a] &&
            -1 === s[a].indexOf(",") &&
            console.warn(
              "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            );
          var l = /\s*,\s*|\s+/,
            c =
              -1 !== a
                ? [
                    s.slice(0, a).concat([s[a].split(l)[0]]),
                    [s[a].split(l)[1]].concat(s.slice(a + 1)),
                  ]
                : [s];
          return (
            (c = c.map(function (e, i) {
              var r = (1 === i ? !o : o) ? "height" : "width",
                s = !1;
              return e
                .reduce(function (e, t) {
                  return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
                    ? ((e[e.length - 1] = t), (s = !0), e)
                    : s
                    ? ((e[e.length - 1] += t), (s = !1), e)
                    : e.concat(t);
                }, [])
                .map(function (e) {
                  return (function (e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                      o = +r[1],
                      s = r[2];
                    if (!o) return e;
                    if (0 === s.indexOf("%")) {
                      var a = void 0;
                      switch (s) {
                        case "%p":
                          a = n;
                          break;
                        case "%":
                        case "%r":
                        default:
                          a = i;
                      }
                      return (D(a)[t] / 100) * o;
                    }
                    if ("vh" === s || "vw" === s) {
                      return (
                        (("vh" === s
                          ? Math.max(
                              document.documentElement.clientHeight,
                              window.innerHeight || 0
                            )
                          : Math.max(
                              document.documentElement.clientWidth,
                              window.innerWidth || 0
                            )) /
                          100) *
                        o
                      );
                    }
                    return o;
                  })(e, r, t, n);
                });
            })).forEach(function (e, t) {
              e.forEach(function (n, i) {
                X(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1));
              });
            }),
            r
          );
        }
        var oe = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
              shift: {
                order: 100,
                enabled: !0,
                fn: function (e) {
                  var t = e.placement,
                    n = t.split("-")[0],
                    i = t.split("-")[1];
                  if (i) {
                    var r = e.offsets,
                      o = r.reference,
                      s = r.popper,
                      a = -1 !== ["bottom", "top"].indexOf(n),
                      l = a ? "left" : "top",
                      c = a ? "width" : "height",
                      u = {
                        start: k({}, l, o[l]),
                        end: k({}, l, o[l] + o[c] - s[c]),
                      };
                    e.offsets.popper = C({}, s, u[i]);
                  }
                  return e;
                },
              },
              offset: {
                order: 200,
                enabled: !0,
                fn: function (e, t) {
                  var n = t.offset,
                    i = e.placement,
                    r = e.offsets,
                    o = r.popper,
                    s = r.reference,
                    a = i.split("-")[0],
                    l = void 0;
                  return (
                    (l = X(+n) ? [+n, 0] : re(n, o, s, a)),
                    "left" === a
                      ? ((o.top += l[0]), (o.left -= l[1]))
                      : "right" === a
                      ? ((o.top += l[0]), (o.left += l[1]))
                      : "top" === a
                      ? ((o.left += l[0]), (o.top -= l[1]))
                      : "bottom" === a && ((o.left += l[0]), (o.top += l[1])),
                    (e.popper = o),
                    e
                  );
                },
                offset: 0,
              },
              preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function (e, t) {
                  var n = t.boundariesElement || f(e.instance.popper);
                  e.instance.reference === n && (n = f(n));
                  var i = U("transform"),
                    r = e.instance.popper.style,
                    o = r.top,
                    s = r.left,
                    a = r[i];
                  (r.top = ""), (r.left = ""), (r[i] = "");
                  var l = M(
                    e.instance.popper,
                    e.instance.reference,
                    t.padding,
                    n,
                    e.positionFixed
                  );
                  (r.top = o), (r.left = s), (r[i] = a), (t.boundaries = l);
                  var c = t.priority,
                    u = e.offsets.popper,
                    h = {
                      primary: function (e) {
                        var n = u[e];
                        return (
                          u[e] < l[e] &&
                            !t.escapeWithReference &&
                            (n = Math.max(u[e], l[e])),
                          k({}, e, n)
                        );
                      },
                      secondary: function (e) {
                        var n = "right" === e ? "left" : "top",
                          i = u[n];
                        return (
                          u[e] > l[e] &&
                            !t.escapeWithReference &&
                            (i = Math.min(
                              u[n],
                              l[e] - ("right" === e ? u.width : u.height)
                            )),
                          k({}, n, i)
                        );
                      },
                    };
                  return (
                    c.forEach(function (e) {
                      var t =
                        -1 !== ["left", "top"].indexOf(e)
                          ? "primary"
                          : "secondary";
                      u = C({}, u, h[t](e));
                    }),
                    (e.offsets.popper = u),
                    e
                  );
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent",
              },
              keepTogether: {
                order: 400,
                enabled: !0,
                fn: function (e) {
                  var t = e.offsets,
                    n = t.popper,
                    i = t.reference,
                    r = e.placement.split("-")[0],
                    o = Math.floor,
                    s = -1 !== ["top", "bottom"].indexOf(r),
                    a = s ? "right" : "bottom",
                    l = s ? "left" : "top",
                    c = s ? "width" : "height";
                  return (
                    n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]),
                    n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])),
                    e
                  );
                },
              },
              arrow: {
                order: 500,
                enabled: !0,
                fn: function (e, t) {
                  var n;
                  if (!G(e.instance.modifiers, "arrow", "keepTogether"))
                    return e;
                  var i = t.element;
                  if ("string" == typeof i) {
                    if (!(i = e.instance.popper.querySelector(i))) return e;
                  } else if (!e.instance.popper.contains(i))
                    return (
                      console.warn(
                        "WARNING: `arrow.element` must be child of its popper element!"
                      ),
                      e
                    );
                  var r = e.placement.split("-")[0],
                    o = e.offsets,
                    a = o.popper,
                    l = o.reference,
                    c = -1 !== ["left", "right"].indexOf(r),
                    u = c ? "height" : "width",
                    h = c ? "Top" : "Left",
                    d = h.toLowerCase(),
                    f = c ? "left" : "top",
                    p = c ? "bottom" : "right",
                    g = P(i)[u];
                  l[p] - g < a[d] && (e.offsets.popper[d] -= a[d] - (l[p] - g)),
                    l[d] + g > a[p] && (e.offsets.popper[d] += l[d] + g - a[p]),
                    (e.offsets.popper = D(e.offsets.popper));
                  var m = l[d] + l[u] / 2 - g / 2,
                    v = s(e.instance.popper),
                    y = parseFloat(v["margin" + h]),
                    b = parseFloat(v["border" + h + "Width"]),
                    _ = m - e.offsets.popper[d] - y - b;
                  return (
                    (_ = Math.max(Math.min(a[u] - g, _), 0)),
                    (e.arrowElement = i),
                    (e.offsets.arrow =
                      (k((n = {}), d, Math.round(_)), k(n, f, ""), n)),
                    e
                  );
                },
                element: "[x-arrow]",
              },
              flip: {
                order: 600,
                enabled: !0,
                fn: function (e, t) {
                  if ($(e.instance.modifiers, "inner")) return e;
                  if (e.flipped && e.placement === e.originalPlacement)
                    return e;
                  var n = M(
                      e.instance.popper,
                      e.instance.reference,
                      t.padding,
                      t.boundariesElement,
                      e.positionFixed
                    ),
                    i = e.placement.split("-")[0],
                    r = I(i),
                    o = e.placement.split("-")[1] || "",
                    s = [];
                  switch (t.behavior) {
                    case te:
                      s = [i, r];
                      break;
                    case ne:
                      s = ee(i);
                      break;
                    case ie:
                      s = ee(i, !0);
                      break;
                    default:
                      s = t.behavior;
                  }
                  return (
                    s.forEach(function (a, l) {
                      if (i !== a || s.length === l + 1) return e;
                      (i = e.placement.split("-")[0]), (r = I(i));
                      var c = e.offsets.popper,
                        u = e.offsets.reference,
                        h = Math.floor,
                        d =
                          ("left" === i && h(c.right) > h(u.left)) ||
                          ("right" === i && h(c.left) < h(u.right)) ||
                          ("top" === i && h(c.bottom) > h(u.top)) ||
                          ("bottom" === i && h(c.top) < h(u.bottom)),
                        f = h(c.left) < h(n.left),
                        p = h(c.right) > h(n.right),
                        g = h(c.top) < h(n.top),
                        m = h(c.bottom) > h(n.bottom),
                        v =
                          ("left" === i && f) ||
                          ("right" === i && p) ||
                          ("top" === i && g) ||
                          ("bottom" === i && m),
                        y = -1 !== ["top", "bottom"].indexOf(i),
                        b =
                          !!t.flipVariations &&
                          ((y && "start" === o && f) ||
                            (y && "end" === o && p) ||
                            (!y && "start" === o && g) ||
                            (!y && "end" === o && m)),
                        _ =
                          !!t.flipVariationsByContent &&
                          ((y && "start" === o && p) ||
                            (y && "end" === o && f) ||
                            (!y && "start" === o && m) ||
                            (!y && "end" === o && g)),
                        w = b || _;
                      (d || v || w) &&
                        ((e.flipped = !0),
                        (d || v) && (i = s[l + 1]),
                        w &&
                          (o = (function (e) {
                            return "end" === e
                              ? "start"
                              : "start" === e
                              ? "end"
                              : e;
                          })(o)),
                        (e.placement = i + (o ? "-" + o : "")),
                        (e.offsets.popper = C(
                          {},
                          e.offsets.popper,
                          H(e.instance.popper, e.offsets.reference, e.placement)
                        )),
                        (e = R(e.instance.modifiers, e, "flip")));
                    }),
                    e
                  );
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1,
              },
              inner: {
                order: 700,
                enabled: !1,
                fn: function (e) {
                  var t = e.placement,
                    n = t.split("-")[0],
                    i = e.offsets,
                    r = i.popper,
                    o = i.reference,
                    s = -1 !== ["left", "right"].indexOf(n),
                    a = -1 === ["top", "left"].indexOf(n);
                  return (
                    (r[s ? "left" : "top"] =
                      o[n] - (a ? r[s ? "width" : "height"] : 0)),
                    (e.placement = I(t)),
                    (e.offsets.popper = D(r)),
                    e
                  );
                },
              },
              hide: {
                order: 800,
                enabled: !0,
                fn: function (e) {
                  if (!G(e.instance.modifiers, "hide", "preventOverflow"))
                    return e;
                  var t = e.offsets.reference,
                    n = W(e.instance.modifiers, function (e) {
                      return "preventOverflow" === e.name;
                    }).boundaries;
                  if (
                    t.bottom < n.top ||
                    t.left > n.right ||
                    t.top > n.bottom ||
                    t.right < n.left
                  ) {
                    if (!0 === e.hide) return e;
                    (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                  } else {
                    if (!1 === e.hide) return e;
                    (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                  }
                  return e;
                },
              },
              computeStyle: {
                order: 850,
                enabled: !0,
                fn: function (e, t) {
                  var n = t.x,
                    i = t.y,
                    r = e.offsets.popper,
                    o = W(e.instance.modifiers, function (e) {
                      return "applyStyle" === e.name;
                    }).gpuAcceleration;
                  void 0 !== o &&
                    console.warn(
                      "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                    );
                  var s = void 0 !== o ? o : t.gpuAcceleration,
                    a = f(e.instance.popper),
                    l = T(a),
                    c = { position: r.position },
                    u = (function (e, t) {
                      var n = e.offsets,
                        i = n.popper,
                        r = n.reference,
                        o = Math.round,
                        s = Math.floor,
                        a = function (e) {
                          return e;
                        },
                        l = o(r.width),
                        c = o(i.width),
                        u = -1 !== ["left", "right"].indexOf(e.placement),
                        h = -1 !== e.placement.indexOf("-"),
                        d = t ? (u || h || l % 2 == c % 2 ? o : s) : a,
                        f = t ? o : a;
                      return {
                        left: d(
                          l % 2 == 1 && c % 2 == 1 && !h && t
                            ? i.left - 1
                            : i.left
                        ),
                        top: f(i.top),
                        bottom: f(i.bottom),
                        right: d(i.right),
                      };
                    })(e, window.devicePixelRatio < 2 || !Q),
                    h = "bottom" === n ? "top" : "bottom",
                    d = "right" === i ? "left" : "right",
                    p = U("transform"),
                    g = void 0,
                    m = void 0;
                  if (
                    ((m =
                      "bottom" === h
                        ? "HTML" === a.nodeName
                          ? -a.clientHeight + u.bottom
                          : -l.height + u.bottom
                        : u.top),
                    (g =
                      "right" === d
                        ? "HTML" === a.nodeName
                          ? -a.clientWidth + u.right
                          : -l.width + u.right
                        : u.left),
                    s && p)
                  )
                    (c[p] = "translate3d(" + g + "px, " + m + "px, 0)"),
                      (c[h] = 0),
                      (c[d] = 0),
                      (c.willChange = "transform");
                  else {
                    var v = "bottom" === h ? -1 : 1,
                      y = "right" === d ? -1 : 1;
                    (c[h] = m * v),
                      (c[d] = g * y),
                      (c.willChange = h + ", " + d);
                  }
                  var b = { "x-placement": e.placement };
                  return (
                    (e.attributes = C({}, b, e.attributes)),
                    (e.styles = C({}, c, e.styles)),
                    (e.arrowStyles = C({}, e.offsets.arrow, e.arrowStyles)),
                    e
                  );
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right",
              },
              applyStyle: {
                order: 900,
                enabled: !0,
                fn: function (e) {
                  var t, n;
                  return (
                    K(e.instance.popper, e.styles),
                    (t = e.instance.popper),
                    (n = e.attributes),
                    Object.keys(n).forEach(function (e) {
                      !1 !== n[e]
                        ? t.setAttribute(e, n[e])
                        : t.removeAttribute(e);
                    }),
                    e.arrowElement &&
                      Object.keys(e.arrowStyles).length &&
                      K(e.arrowElement, e.arrowStyles),
                    e
                  );
                },
                onLoad: function (e, t, n, i, r) {
                  var o = j(r, t, e, n.positionFixed),
                    s = N(
                      n.placement,
                      o,
                      t,
                      e,
                      n.modifiers.flip.boundariesElement,
                      n.modifiers.flip.padding
                    );
                  return (
                    t.setAttribute("x-placement", s),
                    K(t, { position: n.positionFixed ? "fixed" : "absolute" }),
                    n
                  );
                },
                gpuAcceleration: void 0,
              },
            },
          },
          se = (function () {
            function e(t, n) {
              var i = this,
                s =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              w(this, e),
                (this.scheduleUpdate = function () {
                  return requestAnimationFrame(i.update);
                }),
                (this.update = r(this.update.bind(this))),
                (this.options = C({}, e.Defaults, s)),
                (this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: [],
                }),
                (this.reference = t && t.jquery ? t[0] : t),
                (this.popper = n && n.jquery ? n[0] : n),
                (this.options.modifiers = {}),
                Object.keys(C({}, e.Defaults.modifiers, s.modifiers)).forEach(
                  function (t) {
                    i.options.modifiers[t] = C(
                      {},
                      e.Defaults.modifiers[t] || {},
                      s.modifiers ? s.modifiers[t] : {}
                    );
                  }
                ),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function (e) {
                    return C({ name: e }, i.options.modifiers[e]);
                  })
                  .sort(function (e, t) {
                    return e.order - t.order;
                  })),
                this.modifiers.forEach(function (e) {
                  e.enabled &&
                    o(e.onLoad) &&
                    e.onLoad(i.reference, i.popper, i.options, e, i.state);
                }),
                this.update();
              var a = this.options.eventsEnabled;
              a && this.enableEventListeners(), (this.state.eventsEnabled = a);
            }
            return (
              x(e, [
                {
                  key: "update",
                  value: function () {
                    return F.call(this);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    return z.call(this);
                  },
                },
                {
                  key: "enableEventListeners",
                  value: function () {
                    return V.call(this);
                  },
                },
                {
                  key: "disableEventListeners",
                  value: function () {
                    return Y.call(this);
                  },
                },
              ]),
              e
            );
          })();
        (se.Utils = ("undefined" != typeof window ? window : e).PopperUtils),
          (se.placements = Z),
          (se.Defaults = oe),
          (t.default = se);
      }.call(this, n("yLpj"));
  },
  EVdn: function (e, t, n) {
    var i;
    !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, r) {
      "use strict";
      var o = [],
        s = Object.getPrototypeOf,
        a = o.slice,
        l = o.flat
          ? function (e) {
              return o.flat.call(e);
            }
          : function (e) {
              return o.concat.apply([], e);
            },
        c = o.push,
        u = o.indexOf,
        h = {},
        d = h.toString,
        f = h.hasOwnProperty,
        p = f.toString,
        g = p.call(Object),
        m = {},
        v = function (e) {
          return (
            "function" == typeof e &&
            "number" != typeof e.nodeType &&
            "function" != typeof e.item
          );
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        b = n.document,
        _ = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(e, t, n) {
        var i,
          r,
          o = (n = n || b).createElement("script");
        if (((o.text = e), t))
          for (i in _)
            (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
              o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function x(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? h[d.call(e)] || "object"
          : typeof e;
      }
      var k = /HTML$/i,
        C = function (e, t) {
          return new C.fn.init(e, t);
        };
      function D(e) {
        var t = !!e && "length" in e && e.length,
          n = x(e);
        return (
          !v(e) &&
          !y(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      function T(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      (C.fn = C.prototype =
        {
          jquery: "3.7.1",
          constructor: C,
          length: 0,
          toArray: function () {
            return a.call(this);
          },
          get: function (e) {
            return null == e
              ? a.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = C.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return C.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              C.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(a.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              C.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              C.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: c,
          sort: o.sort,
          splice: o.splice,
        }),
        (C.extend = C.fn.extend =
          function () {
            var e,
              t,
              n,
              i,
              r,
              o,
              s = arguments[0] || {},
              a = 1,
              l = arguments.length,
              c = !1;
            for (
              "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
                "object" == typeof s || v(s) || (s = {}),
                a === l && ((s = this), a--);
              a < l;
              a++
            )
              if (null != (e = arguments[a]))
                for (t in e)
                  (i = e[t]),
                    "__proto__" !== t &&
                      s !== i &&
                      (c && i && (C.isPlainObject(i) || (r = Array.isArray(i)))
                        ? ((n = s[t]),
                          (o =
                            r && !Array.isArray(n)
                              ? []
                              : r || C.isPlainObject(n)
                              ? n
                              : {}),
                          (r = !1),
                          (s[t] = C.extend(c, o, i)))
                        : void 0 !== i && (s[t] = i));
            return s;
          }),
        C.extend({
          expando: "jQuery" + ("3.7.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== d.call(e)) &&
              (!(t = s(e)) ||
                ("function" ==
                  typeof (n = f.call(t, "constructor") && t.constructor) &&
                  p.call(n) === g))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            w(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              i = 0;
            if (D(e))
              for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
          },
          text: function (e) {
            var t,
              n = "",
              i = 0,
              r = e.nodeType;
            if (!r) for (; (t = e[i++]); ) n += C.text(t);
            return 1 === r || 11 === r
              ? e.textContent
              : 9 === r
              ? e.documentElement.textContent
              : 3 === r || 4 === r
              ? e.nodeValue
              : n;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (D(Object(e))
                  ? C.merge(n, "string" == typeof e ? [e] : e)
                  : c.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
          },
          isXMLDoc: function (e) {
            var t = e && e.namespaceURI,
              n = e && (e.ownerDocument || e).documentElement;
            return !k.test(t || (n && n.nodeName) || "HTML");
          },
          merge: function (e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
              e[r++] = t[i];
            return (e.length = r), e;
          },
          grep: function (e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
              !t(e[r], r) !== s && i.push(e[r]);
            return i;
          },
          map: function (e, t, n) {
            var i,
              r,
              o = 0,
              s = [];
            if (D(e))
              for (i = e.length; o < i; o++)
                null != (r = t(e[o], o, n)) && s.push(r);
            else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
            return l(s);
          },
          guid: 1,
          support: m,
        }),
        "function" == typeof Symbol &&
          (C.fn[Symbol.iterator] = o[Symbol.iterator]),
        C.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            h["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var E = o.pop,
        A = o.sort,
        O = o.splice,
        S = "[\\x20\\t\\r\\n\\f]",
        M = new RegExp("^" + S + "+|((?:^|[^\\\\])(?:\\\\.)*)" + S + "+$", "g");
      C.contains = function (e, t) {
        var n = t && t.parentNode;
        return (
          e === n ||
          !(
            !n ||
            1 !== n.nodeType ||
            !(e.contains
              ? e.contains(n)
              : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
          )
        );
      };
      var L = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function N(e, t) {
        return t
          ? "\0" === e
            ? "ï¿½"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      }
      C.escapeSelector = function (e) {
        return (e + "").replace(L, N);
      };
      var j = b,
        P = c;
      !(function () {
        var e,
          t,
          i,
          r,
          s,
          l,
          c,
          h,
          d,
          p,
          g = P,
          v = C.expando,
          y = 0,
          b = 0,
          _ = ee(),
          w = ee(),
          x = ee(),
          k = ee(),
          D = function (e, t) {
            return e === t && (s = !0), 0;
          },
          L =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          N =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            S +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          I =
            "\\[" +
            S +
            "*(" +
            N +
            ")(?:" +
            S +
            "*([*^$|!~]?=)" +
            S +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            N +
            "))|)" +
            S +
            "*\\]",
          H =
            ":(" +
            N +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            I +
            ")*)|.*)\\)|)",
          W = new RegExp(S + "+", "g"),
          R = new RegExp("^" + S + "*," + S + "*"),
          F = new RegExp("^" + S + "*([>+~]|" + S + ")" + S + "*"),
          $ = new RegExp(S + "|>"),
          U = new RegExp(H),
          z = new RegExp("^" + N + "$"),
          q = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N + "|[*])"),
            ATTR: new RegExp("^" + I),
            PSEUDO: new RegExp("^" + H),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                S +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                S +
                "*(?:([+-]|)" +
                S +
                "*(\\d+)|))" +
                S +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + L + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                S +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                S +
                "*((?:-\\d)?\\d*)" +
                S +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          B = /^(?:input|select|textarea|button)$/i,
          V = /^h\d$/i,
          Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          X = /[+~]/,
          K = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + S + "?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          Q = function (e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return (
              t ||
              (n < 0
                ? String.fromCharCode(n + 65536)
                : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
            );
          },
          G = function () {
            le();
          },
          Z = de(
            function (e) {
              return !0 === e.disabled && T(e, "fieldset");
            },
            { dir: "parentNode", next: "legend" }
          );
        try {
          g.apply((o = a.call(j.childNodes)), j.childNodes),
            o[j.childNodes.length].nodeType;
        } catch (e) {
          g = {
            apply: function (e, t) {
              P.apply(e, a.call(t));
            },
            call: function (e) {
              P.apply(e, a.call(arguments, 1));
            },
          };
        }
        function J(e, t, n, i) {
          var r,
            o,
            s,
            a,
            c,
            u,
            f,
            p = t && t.ownerDocument,
            y = t ? t.nodeType : 9;
          if (
            ((n = n || []),
            "string" != typeof e || !e || (1 !== y && 9 !== y && 11 !== y))
          )
            return n;
          if (!i && (le(t), (t = t || l), h)) {
            if (11 !== y && (c = Y.exec(e)))
              if ((r = c[1])) {
                if (9 === y) {
                  if (!(s = t.getElementById(r))) return n;
                  if (s.id === r) return g.call(n, s), n;
                } else if (
                  p &&
                  (s = p.getElementById(r)) &&
                  J.contains(t, s) &&
                  s.id === r
                )
                  return g.call(n, s), n;
              } else {
                if (c[2]) return g.apply(n, t.getElementsByTagName(e)), n;
                if ((r = c[3]) && t.getElementsByClassName)
                  return g.apply(n, t.getElementsByClassName(r)), n;
              }
            if (!(k[e + " "] || (d && d.test(e)))) {
              if (((f = e), (p = t), 1 === y && ($.test(e) || F.test(e)))) {
                for (
                  ((p = (X.test(e) && ae(t.parentNode)) || t) == t &&
                    m.scope) ||
                    ((a = t.getAttribute("id"))
                      ? (a = C.escapeSelector(a))
                      : t.setAttribute("id", (a = v))),
                    o = (u = ue(e)).length;
                  o--;

                )
                  u[o] = (a ? "#" + a : ":scope") + " " + he(u[o]);
                f = u.join(",");
              }
              try {
                return g.apply(n, p.querySelectorAll(f)), n;
              } catch (t) {
                k(e, !0);
              } finally {
                a === v && t.removeAttribute("id");
              }
            }
          }
          return ye(e.replace(M, "$1"), t, n, i);
        }
        function ee() {
          var e = [];
          return function n(i, r) {
            return (
              e.push(i + " ") > t.cacheLength && delete n[e.shift()],
              (n[i + " "] = r)
            );
          };
        }
        function te(e) {
          return (e[v] = !0), e;
        }
        function ne(e) {
          var t = l.createElement("fieldset");
          try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), (t = null);
          }
        }
        function ie(e) {
          return function (t) {
            return T(t, "input") && t.type === e;
          };
        }
        function re(e) {
          return function (t) {
            return (T(t, "input") || T(t, "button")) && t.type === e;
          };
        }
        function oe(e) {
          return function (t) {
            return "form" in t
              ? t.parentNode && !1 === t.disabled
                ? "label" in t
                  ? "label" in t.parentNode
                    ? t.parentNode.disabled === e
                    : t.disabled === e
                  : t.isDisabled === e || (t.isDisabled !== !e && Z(t) === e)
                : t.disabled === e
              : "label" in t && t.disabled === e;
          };
        }
        function se(e) {
          return te(function (t) {
            return (
              (t = +t),
              te(function (n, i) {
                for (var r, o = e([], n.length, t), s = o.length; s--; )
                  n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
              })
            );
          });
        }
        function ae(e) {
          return e && void 0 !== e.getElementsByTagName && e;
        }
        function le(e) {
          var n,
            i = e ? e.ownerDocument || e : j;
          return i != l && 9 === i.nodeType && i.documentElement
            ? ((c = (l = i).documentElement),
              (h = !C.isXMLDoc(l)),
              (p = c.matches || c.webkitMatchesSelector || c.msMatchesSelector),
              c.msMatchesSelector &&
                j != l &&
                (n = l.defaultView) &&
                n.top !== n &&
                n.addEventListener("unload", G),
              (m.getById = ne(function (e) {
                return (
                  (c.appendChild(e).id = C.expando),
                  !l.getElementsByName || !l.getElementsByName(C.expando).length
                );
              })),
              (m.disconnectedMatch = ne(function (e) {
                return p.call(e, "*");
              })),
              (m.scope = ne(function () {
                return l.querySelectorAll(":scope");
              })),
              (m.cssHas = ne(function () {
                try {
                  return l.querySelector(":has(*,:jqfake)"), !1;
                } catch (e) {
                  return !0;
                }
              })),
              m.getById
                ? ((t.filter.ID = function (e) {
                    var t = e.replace(K, Q);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }),
                  (t.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && h) {
                      var n = t.getElementById(e);
                      return n ? [n] : [];
                    }
                  }))
                : ((t.filter.ID = function (e) {
                    var t = e.replace(K, Q);
                    return function (e) {
                      var n =
                        void 0 !== e.getAttributeNode &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  }),
                  (t.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && h) {
                      var n,
                        i,
                        r,
                        o = t.getElementById(e);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                        for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (t.find.TAG = function (e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : t.querySelectorAll(e);
              }),
              (t.find.CLASS = function (e, t) {
                if (void 0 !== t.getElementsByClassName && h)
                  return t.getElementsByClassName(e);
              }),
              (d = []),
              ne(function (e) {
                var t;
                (c.appendChild(e).innerHTML =
                  "<a id='" +
                  v +
                  "' href='' disabled='disabled'></a><select id='" +
                  v +
                  "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                  e.querySelectorAll("[selected]").length ||
                    d.push("\\[" + S + "*(?:value|" + L + ")"),
                  e.querySelectorAll("[id~=" + v + "-]").length || d.push("~="),
                  e.querySelectorAll("a#" + v + "+*").length ||
                    d.push(".#.+[+~]"),
                  e.querySelectorAll(":checked").length || d.push(":checked"),
                  (t = l.createElement("input")).setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  (c.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    d.push(":enabled", ":disabled"),
                  (t = l.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    d.push("\\[" + S + "*name" + S + "*=" + S + "*(?:''|\"\")");
              }),
              m.cssHas || d.push(":has"),
              (d = d.length && new RegExp(d.join("|"))),
              (D = function (e, t) {
                if (e === t) return (s = !0), 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  n ||
                  (1 &
                    (n =
                      (e.ownerDocument || e) == (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!m.sortDetached && t.compareDocumentPosition(e) === n)
                    ? e === l || (e.ownerDocument == j && J.contains(j, e))
                      ? -1
                      : t === l || (t.ownerDocument == j && J.contains(j, t))
                      ? 1
                      : r
                      ? u.call(r, e) - u.call(r, t)
                      : 0
                    : 4 & n
                    ? -1
                    : 1)
                );
              }),
              l)
            : l;
        }
        for (e in ((J.matches = function (e, t) {
          return J(e, null, null, t);
        }),
        (J.matchesSelector = function (e, t) {
          if ((le(e), h && !k[t + " "] && (!d || !d.test(t))))
            try {
              var n = p.call(e, t);
              if (
                n ||
                m.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return n;
            } catch (e) {
              k(t, !0);
            }
          return J(t, l, null, [e]).length > 0;
        }),
        (J.contains = function (e, t) {
          return (e.ownerDocument || e) != l && le(e), C.contains(e, t);
        }),
        (J.attr = function (e, n) {
          (e.ownerDocument || e) != l && le(e);
          var i = t.attrHandle[n.toLowerCase()],
            r =
              i && f.call(t.attrHandle, n.toLowerCase()) ? i(e, n, !h) : void 0;
          return void 0 !== r ? r : e.getAttribute(n);
        }),
        (J.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (C.uniqueSort = function (e) {
          var t,
            n = [],
            i = 0,
            o = 0;
          if (
            ((s = !m.sortStable),
            (r = !m.sortStable && a.call(e, 0)),
            A.call(e, D),
            s)
          ) {
            for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
            for (; i--; ) O.call(e, n[i], 1);
          }
          return (r = null), e;
        }),
        (C.fn.uniqueSort = function () {
          return this.pushStack(C.uniqueSort(a.apply(this)));
        }),
        ((t = C.expr =
          {
            cacheLength: 50,
            createPseudo: te,
            match: q,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(K, Q)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(K, Q)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || J.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && J.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return q.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        U.test(n) &&
                        (t = ue(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(K, Q).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return T(e, t);
                    };
              },
              CLASS: function (e) {
                var t = _[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + S + ")" + e + "(" + S + "|$)")) &&
                    _(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, t, n) {
                return function (i) {
                  var r = J.attr(i, e);
                  return null == r
                    ? "!=" === t
                    : !t ||
                        ((r += ""),
                        "=" === t
                          ? r === n
                          : "!=" === t
                          ? r !== n
                          : "^=" === t
                          ? n && 0 === r.indexOf(n)
                          : "*=" === t
                          ? n && r.indexOf(n) > -1
                          : "$=" === t
                          ? n && r.slice(-n.length) === n
                          : "~=" === t
                          ? (" " + r.replace(W, " ") + " ").indexOf(n) > -1
                          : "|=" === t &&
                            (r === n || r.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (e, t, n, i, r) {
                var o = "nth" !== e.slice(0, 3),
                  s = "last" !== e.slice(-4),
                  a = "of-type" === t;
                return 1 === i && 0 === r
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, l) {
                      var c,
                        u,
                        h,
                        d,
                        f,
                        p = o !== s ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        m = a && t.nodeName.toLowerCase(),
                        b = !l && !a,
                        _ = !1;
                      if (g) {
                        if (o) {
                          for (; p; ) {
                            for (h = t; (h = h[p]); )
                              if (a ? T(h, m) : 1 === h.nodeType) return !1;
                            f = p = "only" === e && !f && "nextSibling";
                          }
                          return !0;
                        }
                        if (((f = [s ? g.firstChild : g.lastChild]), s && b)) {
                          for (
                            _ =
                              (d =
                                (c = (u = g[v] || (g[v] = {}))[e] || [])[0] ===
                                  y && c[1]) && c[2],
                              h = d && g.childNodes[d];
                            (h = (++d && h && h[p]) || (_ = d = 0) || f.pop());

                          )
                            if (1 === h.nodeType && ++_ && h === t) {
                              u[e] = [y, d, _];
                              break;
                            }
                        } else if (
                          (b &&
                            (_ = d =
                              (c = (u = t[v] || (t[v] = {}))[e] || [])[0] ===
                                y && c[1]),
                          !1 === _)
                        )
                          for (
                            ;
                            (h =
                              (++d && h && h[p]) || (_ = d = 0) || f.pop()) &&
                            (!(a ? T(h, m) : 1 === h.nodeType) ||
                              !++_ ||
                              (b && ((u = h[v] || (h[v] = {}))[e] = [y, _]),
                              h !== t));

                          );
                        return (_ -= r) === i || (_ % i == 0 && _ / i >= 0);
                      }
                    };
              },
              PSEUDO: function (e, n) {
                var i,
                  r =
                    t.pseudos[e] ||
                    t.setFilters[e.toLowerCase()] ||
                    J.error("unsupported pseudo: " + e);
                return r[v]
                  ? r(n)
                  : r.length > 1
                  ? ((i = [e, e, "", n]),
                    t.setFilters.hasOwnProperty(e.toLowerCase())
                      ? te(function (e, t) {
                          for (var i, o = r(e, n), s = o.length; s--; )
                            e[(i = u.call(e, o[s]))] = !(t[i] = o[s]);
                        })
                      : function (e) {
                          return r(e, 0, i);
                        })
                  : r;
              },
            },
            pseudos: {
              not: te(function (e) {
                var t = [],
                  n = [],
                  i = ve(e.replace(M, "$1"));
                return i[v]
                  ? te(function (e, t, n, r) {
                      for (var o, s = i(e, null, r, []), a = e.length; a--; )
                        (o = s[a]) && (e[a] = !(t[a] = o));
                    })
                  : function (e, r, o) {
                      return (
                        (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: te(function (e) {
                return function (t) {
                  return J(e, t).length > 0;
                };
              }),
              contains: te(function (e) {
                return (
                  (e = e.replace(K, Q)),
                  function (t) {
                    return (t.textContent || C.text(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: te(function (e) {
                return (
                  z.test(e || "") || J.error("unsupported lang: " + e),
                  (e = e.replace(K, Q).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if (
                        (n = h
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (e) {
                var t = n.location && n.location.hash;
                return t && t.slice(1) === e.id;
              },
              root: function (e) {
                return e === c;
              },
              focus: function (e) {
                return (
                  e ===
                    (function () {
                      try {
                        return l.activeElement;
                      } catch (e) {}
                    })() &&
                  l.hasFocus() &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: oe(!1),
              disabled: oe(!0),
              checked: function (e) {
                return (
                  (T(e, "input") && !!e.checked) ||
                  (T(e, "option") && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !t.pseudos.empty(e);
              },
              header: function (e) {
                return V.test(e.nodeName);
              },
              input: function (e) {
                return B.test(e.nodeName);
              },
              button: function (e) {
                return (T(e, "input") && "button" === e.type) || T(e, "button");
              },
              text: function (e) {
                var t;
                return (
                  T(e, "input") &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: se(function () {
                return [0];
              }),
              last: se(function (e, t) {
                return [t - 1];
              }),
              eq: se(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: se(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: se(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: se(function (e, t, n) {
                var i;
                for (i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
                return e;
              }),
              gt: se(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                return e;
              }),
            },
          }).pseudos.nth = t.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
          t.pseudos[e] = ie(e);
        for (e in { submit: !0, reset: !0 }) t.pseudos[e] = re(e);
        function ce() {}
        function ue(e, n) {
          var i,
            r,
            o,
            s,
            a,
            l,
            c,
            u = w[e + " "];
          if (u) return n ? 0 : u.slice(0);
          for (a = e, l = [], c = t.preFilter; a; ) {
            for (s in ((i && !(r = R.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
            (i = !1),
            (r = F.exec(a)) &&
              ((i = r.shift()),
              o.push({ value: i, type: r[0].replace(M, " ") }),
              (a = a.slice(i.length))),
            t.filter))
              !(r = q[s].exec(a)) ||
                (c[s] && !(r = c[s](r))) ||
                ((i = r.shift()),
                o.push({ value: i, type: s, matches: r }),
                (a = a.slice(i.length)));
            if (!i) break;
          }
          return n ? a.length : a ? J.error(e) : w(e, l).slice(0);
        }
        function he(e) {
          for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
          return i;
        }
        function de(e, t, n) {
          var i = t.dir,
            r = t.next,
            o = r || i,
            s = n && "parentNode" === o,
            a = b++;
          return t.first
            ? function (t, n, r) {
                for (; (t = t[i]); )
                  if (1 === t.nodeType || s) return e(t, n, r);
                return !1;
              }
            : function (t, n, l) {
                var c,
                  u,
                  h = [y, a];
                if (l) {
                  for (; (t = t[i]); )
                    if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                } else
                  for (; (t = t[i]); )
                    if (1 === t.nodeType || s)
                      if (((u = t[v] || (t[v] = {})), r && T(t, r)))
                        t = t[i] || t;
                      else {
                        if ((c = u[o]) && c[0] === y && c[1] === a)
                          return (h[2] = c[2]);
                        if (((u[o] = h), (h[2] = e(t, n, l)))) return !0;
                      }
                return !1;
              };
        }
        function fe(e) {
          return e.length > 1
            ? function (t, n, i) {
                for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                return !0;
              }
            : e[0];
        }
        function pe(e, t, n, i, r) {
          for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
            (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
          return s;
        }
        function ge(e, t, n, i, r, o) {
          return (
            i && !i[v] && (i = ge(i)),
            r && !r[v] && (r = ge(r, o)),
            te(function (o, s, a, l) {
              var c,
                h,
                d,
                f,
                p = [],
                m = [],
                v = s.length,
                y =
                  o ||
                  (function (e, t, n) {
                    for (var i = 0, r = t.length; i < r; i++) J(e, t[i], n);
                    return n;
                  })(t || "*", a.nodeType ? [a] : a, []),
                b = !e || (!o && t) ? y : pe(y, p, e, a, l);
              if (
                (n ? n(b, (f = r || (o ? e : v || i) ? [] : s), a, l) : (f = b),
                i)
              )
                for (c = pe(f, m), i(c, [], a, l), h = c.length; h--; )
                  (d = c[h]) && (f[m[h]] = !(b[m[h]] = d));
              if (o) {
                if (r || e) {
                  if (r) {
                    for (c = [], h = f.length; h--; )
                      (d = f[h]) && c.push((b[h] = d));
                    r(null, (f = []), c, l);
                  }
                  for (h = f.length; h--; )
                    (d = f[h]) &&
                      (c = r ? u.call(o, d) : p[h]) > -1 &&
                      (o[c] = !(s[c] = d));
                }
              } else (f = pe(f === s ? f.splice(v, f.length) : f)), r ? r(null, s, f, l) : g.apply(s, f);
            })
          );
        }
        function me(e) {
          for (
            var n,
              r,
              o,
              s = e.length,
              a = t.relative[e[0].type],
              l = a || t.relative[" "],
              c = a ? 1 : 0,
              h = de(
                function (e) {
                  return e === n;
                },
                l,
                !0
              ),
              d = de(
                function (e) {
                  return u.call(n, e) > -1;
                },
                l,
                !0
              ),
              f = [
                function (e, t, r) {
                  var o =
                    (!a && (r || t != i)) ||
                    ((n = t).nodeType ? h(e, t, r) : d(e, t, r));
                  return (n = null), o;
                },
              ];
            c < s;
            c++
          )
            if ((r = t.relative[e[c].type])) f = [de(fe(f), r)];
            else {
              if ((r = t.filter[e[c].type].apply(null, e[c].matches))[v]) {
                for (o = ++c; o < s && !t.relative[e[o].type]; o++);
                return ge(
                  c > 1 && fe(f),
                  c > 1 &&
                    he(
                      e
                        .slice(0, c - 1)
                        .concat({ value: " " === e[c - 2].type ? "*" : "" })
                    ).replace(M, "$1"),
                  r,
                  c < o && me(e.slice(c, o)),
                  o < s && me((e = e.slice(o))),
                  o < s && he(e)
                );
              }
              f.push(r);
            }
          return fe(f);
        }
        function ve(e, n) {
          var r,
            o = [],
            s = [],
            a = x[e + " "];
          if (!a) {
            for (n || (n = ue(e)), r = n.length; r--; )
              (a = me(n[r]))[v] ? o.push(a) : s.push(a);
            (a = x(
              e,
              (function (e, n) {
                var r = n.length > 0,
                  o = e.length > 0,
                  s = function (s, a, c, u, d) {
                    var f,
                      p,
                      m,
                      v = 0,
                      b = "0",
                      _ = s && [],
                      w = [],
                      x = i,
                      k = s || (o && t.find.TAG("*", d)),
                      D = (y += null == x ? 1 : Math.random() || 0.1),
                      T = k.length;
                    for (
                      d && (i = a == l || a || d);
                      b !== T && null != (f = k[b]);
                      b++
                    ) {
                      if (o && f) {
                        for (
                          p = 0, a || f.ownerDocument == l || (le(f), (c = !h));
                          (m = e[p++]);

                        )
                          if (m(f, a || l, c)) {
                            g.call(u, f);
                            break;
                          }
                        d && (y = D);
                      }
                      r && ((f = !m && f) && v--, s && _.push(f));
                    }
                    if (((v += b), r && b !== v)) {
                      for (p = 0; (m = n[p++]); ) m(_, w, a, c);
                      if (s) {
                        if (v > 0)
                          for (; b--; ) _[b] || w[b] || (w[b] = E.call(u));
                        w = pe(w);
                      }
                      g.apply(u, w),
                        d &&
                          !s &&
                          w.length > 0 &&
                          v + n.length > 1 &&
                          C.uniqueSort(u);
                    }
                    return d && ((y = D), (i = x)), _;
                  };
                return r ? te(s) : s;
              })(s, o)
            )).selector = e;
          }
          return a;
        }
        function ye(e, n, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u = "function" == typeof e && e,
            d = !r && ue((e = u.selector || e));
          if (((i = i || []), 1 === d.length)) {
            if (
              (s = d[0] = d[0].slice(0)).length > 2 &&
              "ID" === (a = s[0]).type &&
              9 === n.nodeType &&
              h &&
              t.relative[s[1].type]
            ) {
              if (!(n = (t.find.ID(a.matches[0].replace(K, Q), n) || [])[0]))
                return i;
              u && (n = n.parentNode), (e = e.slice(s.shift().value.length));
            }
            for (
              o = q.needsContext.test(e) ? 0 : s.length;
              o-- && ((a = s[o]), !t.relative[(l = a.type)]);

            )
              if (
                (c = t.find[l]) &&
                (r = c(
                  a.matches[0].replace(K, Q),
                  (X.test(s[0].type) && ae(n.parentNode)) || n
                ))
              ) {
                if ((s.splice(o, 1), !(e = r.length && he(s))))
                  return g.apply(i, r), i;
                break;
              }
          }
          return (
            (u || ve(e, d))(
              r,
              n,
              !h,
              i,
              !n || (X.test(e) && ae(n.parentNode)) || n
            ),
            i
          );
        }
        (ce.prototype = t.filters = t.pseudos),
          (t.setFilters = new ce()),
          (m.sortStable = v.split("").sort(D).join("") === v),
          le(),
          (m.sortDetached = ne(function (e) {
            return 1 & e.compareDocumentPosition(l.createElement("fieldset"));
          })),
          (C.find = J),
          (C.expr[":"] = C.expr.pseudos),
          (C.unique = C.uniqueSort),
          (J.compile = ve),
          (J.select = ye),
          (J.setDocument = le),
          (J.tokenize = ue),
          (J.escape = C.escapeSelector),
          (J.getText = C.text),
          (J.isXML = C.isXMLDoc),
          (J.selectors = C.expr),
          (J.support = C.support),
          (J.uniqueSort = C.uniqueSort);
      })();
      var I = function (e, t, n) {
          for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (r && C(e).is(n)) break;
              i.push(e);
            }
          return i;
        },
        H = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        W = C.expr.match.needsContext,
        R = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function F(e, t, n) {
        return v(t)
          ? C.grep(e, function (e, i) {
              return !!t.call(e, i, e) !== n;
            })
          : t.nodeType
          ? C.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? C.grep(e, function (e) {
              return u.call(t, e) > -1 !== n;
            })
          : C.filter(t, e, n);
      }
      (C.filter = function (e, t, n) {
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === i.nodeType
            ? C.find.matchesSelector(i, e)
              ? [i]
              : []
            : C.find.matches(
                e,
                C.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        C.fn.extend({
          find: function (e) {
            var t,
              n,
              i = this.length,
              r = this;
            if ("string" != typeof e)
              return this.pushStack(
                C(e).filter(function () {
                  for (t = 0; t < i; t++) if (C.contains(r[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n);
            return i > 1 ? C.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(F(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(F(this, e || [], !0));
          },
          is: function (e) {
            return !!F(
              this,
              "string" == typeof e && W.test(e) ? C(e) : e || [],
              !1
            ).length;
          },
        });
      var $,
        U = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((C.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (((n = n || $), "string" == typeof e)) {
          if (
            !(i =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : U.exec(e)) ||
            (!i[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (i[1]) {
            if (
              ((t = t instanceof C ? t[0] : t),
              C.merge(
                this,
                C.parseHTML(
                  i[1],
                  t && t.nodeType ? t.ownerDocument || t : b,
                  !0
                )
              ),
              R.test(i[1]) && C.isPlainObject(t))
            )
              for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          }
          return (
            (r = b.getElementById(i[2])) && ((this[0] = r), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : v(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(C)
          : C.makeArray(e, this);
      }).prototype = C.fn),
        ($ = C(b));
      var z = /^(?:parents|prev(?:Until|All))/,
        q = { children: !0, contents: !0, next: !0, prev: !0 };
      function B(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      C.fn.extend({
        has: function (e) {
          var t = C(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            i = 0,
            r = this.length,
            o = [],
            s = "string" != typeof e && C(e);
          if (!W.test(e))
            for (; i < r; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && C.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? u.call(C(e), this[0])
              : u.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        C.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return I(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return I(e, "parentNode", n);
            },
            next: function (e) {
              return B(e, "nextSibling");
            },
            prev: function (e) {
              return B(e, "previousSibling");
            },
            nextAll: function (e) {
              return I(e, "nextSibling");
            },
            prevAll: function (e) {
              return I(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return I(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return I(e, "previousSibling", n);
            },
            siblings: function (e) {
              return H((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return H(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && s(e.contentDocument)
                ? e.contentDocument
                : (T(e, "template") && (e = e.content || e),
                  C.merge([], e.childNodes));
            },
          },
          function (e, t) {
            C.fn[e] = function (n, i) {
              var r = C.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (r = C.filter(i, r)),
                this.length > 1 &&
                  (q[e] || C.uniqueSort(r), z.test(e) && r.reverse()),
                this.pushStack(r)
              );
            };
          }
        );
      var V = /[^\x20\t\r\n\f]+/g;
      function Y(e) {
        return e;
      }
      function X(e) {
        throw e;
      }
      function K(e, t, n, i) {
        var r;
        try {
          e && v((r = e.promise))
            ? r.call(e).done(t).fail(n)
            : e && v((r = e.then))
            ? r.call(e, t, n)
            : t.apply(void 0, [e].slice(i));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (C.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  C.each(e.match(V) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : C.extend({}, e);
        var t,
          n,
          i,
          r,
          o = [],
          s = [],
          a = -1,
          l = function () {
            for (r = r || e.once, i = t = !0; s.length; a = -1)
              for (n = s.shift(); ++a < o.length; )
                !1 === o[a].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((a = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
          },
          c = {
            add: function () {
              return (
                o &&
                  (n && !t && ((a = o.length - 1), s.push(n)),
                  (function t(n) {
                    C.each(n, function (n, i) {
                      v(i)
                        ? (e.unique && c.has(i)) || o.push(i)
                        : i && i.length && "string" !== x(i) && t(i);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function () {
              return (
                C.each(arguments, function (e, t) {
                  for (var n; (n = C.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? C.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (r = s = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (r = s = []), n || t || (o = n = ""), this;
            },
            locked: function () {
              return !!r;
            },
            fireWith: function (e, n) {
              return (
                r ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  s.push(n),
                  t || l()),
                this
              );
            },
            fire: function () {
              return c.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return c;
      }),
        C.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  C.Callbacks("memory"),
                  C.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  C.Callbacks("once memory"),
                  C.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  C.Callbacks("once memory"),
                  C.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              i = "pending",
              r = {
                state: function () {
                  return i;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return r.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return C.Deferred(function (n) {
                    C.each(t, function (t, i) {
                      var r = v(e[i[4]]) && e[i[4]];
                      o[i[1]](function () {
                        var e = r && r.apply(this, arguments);
                        e && v(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[i[0] + "With"](this, r ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, i, r) {
                  var o = 0;
                  function s(e, t, i, r) {
                    return function () {
                      var a = this,
                        l = arguments,
                        c = function () {
                          var n, c;
                          if (!(e < o)) {
                            if ((n = i.apply(a, l)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (c =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              v(c)
                                ? r
                                  ? c.call(n, s(o, t, Y, r), s(o, t, X, r))
                                  : (o++,
                                    c.call(
                                      n,
                                      s(o, t, Y, r),
                                      s(o, t, X, r),
                                      s(o, t, Y, t.notifyWith)
                                    ))
                                : (i !== Y && ((a = void 0), (l = [n])),
                                  (r || t.resolveWith)(a, l));
                          }
                        },
                        u = r
                          ? c
                          : function () {
                              try {
                                c();
                              } catch (n) {
                                C.Deferred.exceptionHook &&
                                  C.Deferred.exceptionHook(n, u.error),
                                  e + 1 >= o &&
                                    (i !== X && ((a = void 0), (l = [n])),
                                    t.rejectWith(a, l));
                              }
                            };
                      e
                        ? u()
                        : (C.Deferred.getErrorHook
                            ? (u.error = C.Deferred.getErrorHook())
                            : C.Deferred.getStackHook &&
                              (u.error = C.Deferred.getStackHook()),
                          n.setTimeout(u));
                    };
                  }
                  return C.Deferred(function (n) {
                    t[0][3].add(s(0, n, v(r) ? r : Y, n.notifyWith)),
                      t[1][3].add(s(0, n, v(e) ? e : Y)),
                      t[2][3].add(s(0, n, v(i) ? i : X));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? C.extend(e, r) : r;
                },
              },
              o = {};
            return (
              C.each(t, function (e, n) {
                var s = n[2],
                  a = n[5];
                (r[n[1]] = s.add),
                  a &&
                    s.add(
                      function () {
                        i = a;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  s.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = s.fireWith);
              }),
              r.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              i = Array(n),
              r = a.call(arguments),
              o = C.Deferred(),
              s = function (e) {
                return function (n) {
                  (i[e] = this),
                    (r[e] = arguments.length > 1 ? a.call(arguments) : n),
                    --t || o.resolveWith(i, r);
                };
              };
            if (
              t <= 1 &&
              (K(e, o.done(s(n)).resolve, o.reject, !t),
              "pending" === o.state() || v(r[n] && r[n].then))
            )
              return o.then();
            for (; n--; ) K(r[n], s(n), o.reject);
            return o.promise();
          },
        });
      var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (C.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          Q.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (C.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var G = C.Deferred();
      function Z() {
        b.removeEventListener("DOMContentLoaded", Z),
          n.removeEventListener("load", Z),
          C.ready();
      }
      (C.fn.ready = function (e) {
        return (
          G.then(e).catch(function (e) {
            C.readyException(e);
          }),
          this
        );
      }),
        C.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --C.readyWait : C.isReady) ||
              ((C.isReady = !0),
              (!0 !== e && --C.readyWait > 0) || G.resolveWith(b, [C]));
          },
        }),
        (C.ready.then = G.then),
        "complete" === b.readyState ||
        ("loading" !== b.readyState && !b.documentElement.doScroll)
          ? n.setTimeout(C.ready)
          : (b.addEventListener("DOMContentLoaded", Z),
            n.addEventListener("load", Z));
      var J = function (e, t, n, i, r, o, s) {
          var a = 0,
            l = e.length,
            c = null == n;
          if ("object" === x(n))
            for (a in ((r = !0), n)) J(e, t, a, n[a], !0, o, s);
          else if (
            void 0 !== i &&
            ((r = !0),
            v(i) || (s = !0),
            c &&
              (s
                ? (t.call(e, i), (t = null))
                : ((c = t),
                  (t = function (e, t, n) {
                    return c.call(C(e), n);
                  }))),
            t)
          )
            for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
          return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
        },
        ee = /^-ms-/,
        te = /-([a-z])/g;
      function ne(e, t) {
        return t.toUpperCase();
      }
      function ie(e) {
        return e.replace(ee, "ms-").replace(te, ne);
      }
      var re = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function oe() {
        this.expando = C.expando + oe.uid++;
      }
      (oe.uid = 1),
        (oe.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                re(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var i,
              r = this.cache(e);
            if ("string" == typeof t) r[ie(t)] = n;
            else for (i in t) r[ie(i)] = t[i];
            return r;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][ie(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              i = e[this.expando];
            if (void 0 !== i) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(ie)
                  : (t = ie(t)) in i
                  ? [t]
                  : t.match(V) || []).length;
                for (; n--; ) delete i[t[n]];
              }
              (void 0 === t || C.isEmptyObject(i)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t);
          },
        });
      var se = new oe(),
        ae = new oe(),
        le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ce = /[A-Z]/g;
      function ue(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((i = "data-" + t.replace(ce, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(i)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : le.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            ae.set(e, t, n);
          } else n = void 0;
        return n;
      }
      C.extend({
        hasData: function (e) {
          return ae.hasData(e) || se.hasData(e);
        },
        data: function (e, t, n) {
          return ae.access(e, t, n);
        },
        removeData: function (e, t) {
          ae.remove(e, t);
        },
        _data: function (e, t, n) {
          return se.access(e, t, n);
        },
        _removeData: function (e, t) {
          se.remove(e, t);
        },
      }),
        C.fn.extend({
          data: function (e, t) {
            var n,
              i,
              r,
              o = this[0],
              s = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((r = ae.get(o)),
                1 === o.nodeType && !se.get(o, "hasDataAttrs"))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (i = s[n].name).indexOf("data-") &&
                    ((i = ie(i.slice(5))), ue(o, i, r[i]));
                se.set(o, "hasDataAttrs", !0);
              }
              return r;
            }
            return "object" == typeof e
              ? this.each(function () {
                  ae.set(this, e);
                })
              : J(
                  this,
                  function (t) {
                    var n;
                    if (o && void 0 === t)
                      return void 0 !== (n = ae.get(o, e)) ||
                        void 0 !== (n = ue(o, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      ae.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              ae.remove(this, e);
            });
          },
        }),
        C.extend({
          queue: function (e, t, n) {
            var i;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (i = se.get(e, t)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = se.access(e, t, C.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = C.queue(e, t),
              i = n.length,
              r = n.shift(),
              o = C._queueHooks(e, t);
            "inprogress" === r && ((r = n.shift()), i--),
              r &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                r.call(
                  e,
                  function () {
                    C.dequeue(e, t);
                  },
                  o
                )),
              !i && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              se.get(e, n) ||
              se.access(e, n, {
                empty: C.Callbacks("once memory").add(function () {
                  se.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        C.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? C.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = C.queue(this, e, t);
                    C._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              C.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              i = 1,
              r = C.Deferred(),
              o = this,
              s = this.length,
              a = function () {
                --i || r.resolveWith(o, [o]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              s--;

            )
              (n = se.get(o[s], e + "queueHooks")) &&
                n.empty &&
                (i++, n.empty.add(a));
            return a(), r.promise(t);
          },
        });
      var he = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        de = new RegExp("^(?:([+-])=|)(" + he + ")([a-z%]*)$", "i"),
        fe = ["Top", "Right", "Bottom", "Left"],
        pe = b.documentElement,
        ge = function (e) {
          return C.contains(e.ownerDocument, e);
        },
        me = { composed: !0 };
      pe.getRootNode &&
        (ge = function (e) {
          return (
            C.contains(e.ownerDocument, e) ||
            e.getRootNode(me) === e.ownerDocument
          );
        });
      var ve = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && ge(e) && "none" === C.css(e, "display"))
        );
      };
      function ye(e, t, n, i) {
        var r,
          o,
          s = 20,
          a = i
            ? function () {
                return i.cur();
              }
            : function () {
                return C.css(e, t, "");
              },
          l = a(),
          c = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
          u =
            e.nodeType &&
            (C.cssNumber[t] || ("px" !== c && +l)) &&
            de.exec(C.css(e, t));
        if (u && u[3] !== c) {
          for (l /= 2, c = c || u[3], u = +l || 1; s--; )
            C.style(e, t, u + c),
              (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
              (u /= o);
          (u *= 2), C.style(e, t, u + c), (n = n || []);
        }
        return (
          n &&
            ((u = +u || +l || 0),
            (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = c), (i.start = u), (i.end = r))),
          r
        );
      }
      var be = {};
      function _e(e) {
        var t,
          n = e.ownerDocument,
          i = e.nodeName,
          r = be[i];
        return (
          r ||
          ((t = n.body.appendChild(n.createElement(i))),
          (r = C.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === r && (r = "block"),
          (be[i] = r),
          r)
        );
      }
      function we(e, t) {
        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
          (i = e[o]).style &&
            ((n = i.style.display),
            t
              ? ("none" === n &&
                  ((r[o] = se.get(i, "display") || null),
                  r[o] || (i.style.display = "")),
                "" === i.style.display && ve(i) && (r[o] = _e(i)))
              : "none" !== n && ((r[o] = "none"), se.set(i, "display", n)));
        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
        return e;
      }
      C.fn.extend({
        show: function () {
          return we(this, !0);
        },
        hide: function () {
          return we(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ve(this) ? C(this).show() : C(this).hide();
              });
        },
      });
      var xe,
        ke,
        Ce = /^(?:checkbox|radio)$/i,
        De = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Te = /^$|^module$|\/(?:java|ecma)script/i;
      (xe = b.createDocumentFragment().appendChild(b.createElement("div"))),
        (ke = b.createElement("input")).setAttribute("type", "radio"),
        ke.setAttribute("checked", "checked"),
        ke.setAttribute("name", "t"),
        xe.appendChild(ke),
        (m.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (xe.innerHTML = "<textarea>x</textarea>"),
        (m.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue),
        (xe.innerHTML = "<option></option>"),
        (m.option = !!xe.lastChild);
      var Ee = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function Ae(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && T(e, t)) ? C.merge([e], n) : n
        );
      }
      function Oe(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          se.set(e[n], "globalEval", !t || se.get(t[n], "globalEval"));
      }
      (Ee.tbody = Ee.tfoot = Ee.colgroup = Ee.caption = Ee.thead),
        (Ee.th = Ee.td),
        m.option ||
          (Ee.optgroup = Ee.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var Se = /<|&#?\w+;/;
      function Me(e, t, n, i, r) {
        for (
          var o,
            s,
            a,
            l,
            c,
            u,
            h = t.createDocumentFragment(),
            d = [],
            f = 0,
            p = e.length;
          f < p;
          f++
        )
          if ((o = e[f]) || 0 === o)
            if ("object" === x(o)) C.merge(d, o.nodeType ? [o] : o);
            else if (Se.test(o)) {
              for (
                s = s || h.appendChild(t.createElement("div")),
                  a = (De.exec(o) || ["", ""])[1].toLowerCase(),
                  l = Ee[a] || Ee._default,
                  s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2],
                  u = l[0];
                u--;

              )
                s = s.lastChild;
              C.merge(d, s.childNodes), ((s = h.firstChild).textContent = "");
            } else d.push(t.createTextNode(o));
        for (h.textContent = "", f = 0; (o = d[f++]); )
          if (i && C.inArray(o, i) > -1) r && r.push(o);
          else if (
            ((c = ge(o)), (s = Ae(h.appendChild(o), "script")), c && Oe(s), n)
          )
            for (u = 0; (o = s[u++]); ) Te.test(o.type || "") && n.push(o);
        return h;
      }
      var Le = /^([^.]*)(?:\.(.+)|)/;
      function Ne() {
        return !0;
      }
      function je() {
        return !1;
      }
      function Pe(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
          for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
            Pe(e, a, n, i, t[a], o);
          return e;
        }
        if (
          (null == i && null == r
            ? ((r = n), (i = n = void 0))
            : null == r &&
              ("string" == typeof n
                ? ((r = i), (i = void 0))
                : ((r = i), (i = n), (n = void 0))),
          !1 === r)
        )
          r = je;
        else if (!r) return e;
        return (
          1 === o &&
            ((s = r),
            ((r = function (e) {
              return C().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = C.guid++))),
          e.each(function () {
            C.event.add(this, t, r, i, n);
          })
        );
      }
      function Ie(e, t, n) {
        n
          ? (se.set(e, t, !1),
            C.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var n,
                  i = se.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (i)
                    (C.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((i = a.call(arguments)),
                    se.set(this, t, i),
                    this[t](),
                    (n = se.get(this, t)),
                    se.set(this, t, !1),
                    i !== n)
                  )
                    return e.stopImmediatePropagation(), e.preventDefault(), n;
                } else
                  i &&
                    (se.set(this, t, C.event.trigger(i[0], i.slice(1), this)),
                    e.stopPropagation(),
                    (e.isImmediatePropagationStopped = Ne));
              },
            }))
          : void 0 === se.get(e, t) && C.event.add(e, t, Ne);
      }
      (C.event = {
        global: {},
        add: function (e, t, n, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u,
            h,
            d,
            f,
            p,
            g,
            m = se.get(e);
          if (re(e))
            for (
              n.handler && ((n = (o = n).handler), (r = o.selector)),
                r && C.find.matchesSelector(pe, r),
                n.guid || (n.guid = C.guid++),
                (l = m.events) || (l = m.events = Object.create(null)),
                (s = m.handle) ||
                  (s = m.handle =
                    function (t) {
                      return void 0 !== C && C.event.triggered !== t.type
                        ? C.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                c = (t = (t || "").match(V) || [""]).length;
              c--;

            )
              (f = g = (a = Le.exec(t[c]) || [])[1]),
                (p = (a[2] || "").split(".").sort()),
                f &&
                  ((h = C.event.special[f] || {}),
                  (f = (r ? h.delegateType : h.bindType) || f),
                  (h = C.event.special[f] || {}),
                  (u = C.extend(
                    {
                      type: f,
                      origType: g,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: r,
                      needsContext: r && C.expr.match.needsContext.test(r),
                      namespace: p.join("."),
                    },
                    o
                  )),
                  (d = l[f]) ||
                    (((d = l[f] = []).delegateCount = 0),
                    (h.setup && !1 !== h.setup.call(e, i, p, s)) ||
                      (e.addEventListener && e.addEventListener(f, s))),
                  h.add &&
                    (h.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                  r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                  (C.event.global[f] = !0));
        },
        remove: function (e, t, n, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u,
            h,
            d,
            f,
            p,
            g,
            m = se.hasData(e) && se.get(e);
          if (m && (l = m.events)) {
            for (c = (t = (t || "").match(V) || [""]).length; c--; )
              if (
                ((f = g = (a = Le.exec(t[c]) || [])[1]),
                (p = (a[2] || "").split(".").sort()),
                f)
              ) {
                for (
                  h = C.event.special[f] || {},
                    d = l[(f = (i ? h.delegateType : h.bindType) || f)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    s = o = d.length;
                  o--;

                )
                  (u = d[o]),
                    (!r && g !== u.origType) ||
                      (n && n.guid !== u.guid) ||
                      (a && !a.test(u.namespace)) ||
                      (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                      (d.splice(o, 1),
                      u.selector && d.delegateCount--,
                      h.remove && h.remove.call(e, u));
                s &&
                  !d.length &&
                  ((h.teardown && !1 !== h.teardown.call(e, p, m.handle)) ||
                    C.removeEvent(e, f, m.handle),
                  delete l[f]);
              } else for (f in l) C.event.remove(e, f + t[c], n, i, !0);
            C.isEmptyObject(l) && se.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            i,
            r,
            o,
            s,
            a = new Array(arguments.length),
            l = C.event.fix(e),
            c = (se.get(this, "events") || Object.create(null))[l.type] || [],
            u = C.event.special[l.type] || {};
          for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
          if (
            ((l.delegateTarget = this),
            !u.preDispatch || !1 !== u.preDispatch.call(this, l))
          ) {
            for (
              s = C.event.handlers.call(this, l, c), t = 0;
              (r = s[t++]) && !l.isPropagationStopped();

            )
              for (
                l.currentTarget = r.elem, n = 0;
                (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();

              )
                (l.rnamespace &&
                  !1 !== o.namespace &&
                  !l.rnamespace.test(o.namespace)) ||
                  ((l.handleObj = o),
                  (l.data = o.data),
                  void 0 !==
                    (i = (
                      (C.event.special[o.origType] || {}).handle || o.handler
                    ).apply(r.elem, a)) &&
                    !1 === (l.result = i) &&
                    (l.preventDefault(), l.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function (e, t) {
          var n,
            i,
            r,
            o,
            s,
            a = [],
            l = t.delegateCount,
            c = e.target;
          if (l && c.nodeType && !("click" === e.type && e.button >= 1))
            for (; c !== this; c = c.parentNode || this)
              if (
                1 === c.nodeType &&
                ("click" !== e.type || !0 !== c.disabled)
              ) {
                for (o = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(r = (i = t[n]).selector + " ")] &&
                    (s[r] = i.needsContext
                      ? C(r, this).index(c) > -1
                      : C.find(r, this, null, [c]).length),
                    s[r] && o.push(i);
                o.length && a.push({ elem: c, handlers: o });
              }
          return (
            (c = this),
            l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
            a
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(C.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: v(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[C.expando] ? e : new C.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                Ce.test(t.type) &&
                  t.click &&
                  T(t, "input") &&
                  Ie(t, "click", !0),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                Ce.test(t.type) && t.click && T(t, "input") && Ie(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (Ce.test(t.type) &&
                  t.click &&
                  T(t, "input") &&
                  se.get(t, "click")) ||
                T(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (C.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (C.Event = function (e, t) {
          if (!(this instanceof C.Event)) return new C.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ne
                  : je),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && C.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[C.expando] = !0);
        }),
        (C.Event.prototype = {
          constructor: C.Event,
          isDefaultPrevented: je,
          isPropagationStopped: je,
          isImmediatePropagationStopped: je,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ne),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ne),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ne),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        C.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          C.event.addProp
        ),
        C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          function n(e) {
            if (b.documentMode) {
              var n = se.get(this, "handle"),
                i = C.event.fix(e);
              (i.type = "focusin" === e.type ? "focus" : "blur"),
                (i.isSimulated = !0),
                n(e),
                i.target === i.currentTarget && n(i);
            } else C.event.simulate(t, e.target, C.event.fix(e));
          }
          (C.event.special[e] = {
            setup: function () {
              var i;
              if ((Ie(this, e, !0), !b.documentMode)) return !1;
              (i = se.get(this, t)) || this.addEventListener(t, n),
                se.set(this, t, (i || 0) + 1);
            },
            trigger: function () {
              return Ie(this, e), !0;
            },
            teardown: function () {
              var e;
              if (!b.documentMode) return !1;
              (e = se.get(this, t) - 1)
                ? se.set(this, t, e)
                : (this.removeEventListener(t, n), se.remove(this, t));
            },
            _default: function (t) {
              return se.get(t.target, e);
            },
            delegateType: t,
          }),
            (C.event.special[t] = {
              setup: function () {
                var i = this.ownerDocument || this.document || this,
                  r = b.documentMode ? this : i,
                  o = se.get(r, t);
                o ||
                  (b.documentMode
                    ? this.addEventListener(t, n)
                    : i.addEventListener(e, n, !0)),
                  se.set(r, t, (o || 0) + 1);
              },
              teardown: function () {
                var i = this.ownerDocument || this.document || this,
                  r = b.documentMode ? this : i,
                  o = se.get(r, t) - 1;
                o
                  ? se.set(r, t, o)
                  : (b.documentMode
                      ? this.removeEventListener(t, n)
                      : i.removeEventListener(e, n, !0),
                    se.remove(r, t));
              },
            });
        }),
        C.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            C.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  i = this,
                  r = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (r && (r === i || C.contains(i, r))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        C.fn.extend({
          on: function (e, t, n, i) {
            return Pe(this, e, t, n, i);
          },
          one: function (e, t, n, i) {
            return Pe(this, e, t, n, i, 1);
          },
          off: function (e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                C(e.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (r in e) this.off(r, t, e[r]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = je),
              this.each(function () {
                C.event.remove(this, e, n, t);
              })
            );
          },
        });
      var He = /<script|<style|<link/i,
        We = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Re = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function Fe(e, t) {
        return (
          (T(e, "table") &&
            T(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            C(e).children("tbody")[0]) ||
          e
        );
      }
      function $e(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function Ue(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function ze(e, t) {
        var n, i, r, o, s, a;
        if (1 === t.nodeType) {
          if (se.hasData(e) && (a = se.get(e).events))
            for (r in (se.remove(t, "handle events"), a))
              for (n = 0, i = a[r].length; n < i; n++)
                C.event.add(t, r, a[r][n]);
          ae.hasData(e) &&
            ((o = ae.access(e)), (s = C.extend({}, o)), ae.set(t, s));
        }
      }
      function qe(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ce.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function Be(e, t, n, i) {
        t = l(t);
        var r,
          o,
          s,
          a,
          c,
          u,
          h = 0,
          d = e.length,
          f = d - 1,
          p = t[0],
          g = v(p);
        if (g || (d > 1 && "string" == typeof p && !m.checkClone && We.test(p)))
          return e.each(function (r) {
            var o = e.eq(r);
            g && (t[0] = p.call(this, r, o.html())), Be(o, t, n, i);
          });
        if (
          d &&
          ((o = (r = Me(t, e[0].ownerDocument, !1, e, i)).firstChild),
          1 === r.childNodes.length && (r = o),
          o || i)
        ) {
          for (a = (s = C.map(Ae(r, "script"), $e)).length; h < d; h++)
            (c = r),
              h !== f &&
                ((c = C.clone(c, !0, !0)), a && C.merge(s, Ae(c, "script"))),
              n.call(e[h], c, h);
          if (a)
            for (
              u = s[s.length - 1].ownerDocument, C.map(s, Ue), h = 0;
              h < a;
              h++
            )
              (c = s[h]),
                Te.test(c.type || "") &&
                  !se.access(c, "globalEval") &&
                  C.contains(u, c) &&
                  (c.src && "module" !== (c.type || "").toLowerCase()
                    ? C._evalUrl &&
                      !c.noModule &&
                      C._evalUrl(
                        c.src,
                        { nonce: c.nonce || c.getAttribute("nonce") },
                        u
                      )
                    : w(c.textContent.replace(Re, ""), c, u));
        }
        return e;
      }
      function Ve(e, t, n) {
        for (var i, r = t ? C.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
          n || 1 !== i.nodeType || C.cleanData(Ae(i)),
            i.parentNode &&
              (n && ge(i) && Oe(Ae(i, "script")), i.parentNode.removeChild(i));
        return e;
      }
      C.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var i,
            r,
            o,
            s,
            a = e.cloneNode(!0),
            l = ge(e);
          if (
            !(
              m.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              C.isXMLDoc(e)
            )
          )
            for (s = Ae(a), i = 0, r = (o = Ae(e)).length; i < r; i++)
              qe(o[i], s[i]);
          if (t)
            if (n)
              for (
                o = o || Ae(e), s = s || Ae(a), i = 0, r = o.length;
                i < r;
                i++
              )
                ze(o[i], s[i]);
            else ze(e, a);
          return (
            (s = Ae(a, "script")).length > 0 && Oe(s, !l && Ae(e, "script")), a
          );
        },
        cleanData: function (e) {
          for (
            var t, n, i, r = C.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (re(n)) {
              if ((t = n[se.expando])) {
                if (t.events)
                  for (i in t.events)
                    r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                n[se.expando] = void 0;
              }
              n[ae.expando] && (n[ae.expando] = void 0);
            }
        },
      }),
        C.fn.extend({
          detach: function (e) {
            return Ve(this, e, !0);
          },
          remove: function (e) {
            return Ve(this, e);
          },
          text: function (e) {
            return J(
              this,
              function (e) {
                return void 0 === e
                  ? C.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Be(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Fe(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Be(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Fe(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Be(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Be(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (C.cleanData(Ae(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return C.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return J(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !He.test(e) &&
                  !Ee[(De.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = C.htmlPrefilter(e);
                  try {
                    for (; n < i; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (C.cleanData(Ae(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return Be(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                C.inArray(this, e) < 0 &&
                  (C.cleanData(Ae(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        C.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            C.fn[e] = function (e) {
              for (
                var n, i = [], r = C(e), o = r.length - 1, s = 0;
                s <= o;
                s++
              )
                (n = s === o ? this : this.clone(!0)),
                  C(r[s])[t](n),
                  c.apply(i, n.get());
              return this.pushStack(i);
            };
          }
        );
      var Ye = new RegExp("^(" + he + ")(?!px)[a-z%]+$", "i"),
        Xe = /^--/,
        Ke = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Qe = function (e, t, n) {
          var i,
            r,
            o = {};
          for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
          for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
          return i;
        },
        Ge = new RegExp(fe.join("|"), "i");
      function Ze(e, t, n) {
        var i,
          r,
          o,
          s,
          a = Xe.test(t),
          l = e.style;
        return (
          (n = n || Ke(e)) &&
            ((s = n.getPropertyValue(t) || n[t]),
            a && s && (s = s.replace(M, "$1") || void 0),
            "" !== s || ge(e) || (s = C.style(e, t)),
            !m.pixelBoxStyles() &&
              Ye.test(s) &&
              Ge.test(t) &&
              ((i = l.width),
              (r = l.minWidth),
              (o = l.maxWidth),
              (l.minWidth = l.maxWidth = l.width = s),
              (s = n.width),
              (l.width = i),
              (l.minWidth = r),
              (l.maxWidth = o))),
          void 0 !== s ? s + "" : s
        );
      }
      function Je(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (u) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (u.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              pe.appendChild(c).appendChild(u);
            var e = n.getComputedStyle(u);
            (i = "1%" !== e.top),
              (l = 12 === t(e.marginLeft)),
              (u.style.right = "60%"),
              (s = 36 === t(e.right)),
              (r = 36 === t(e.width)),
              (u.style.position = "absolute"),
              (o = 12 === t(u.offsetWidth / 3)),
              pe.removeChild(c),
              (u = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var i,
          r,
          o,
          s,
          a,
          l,
          c = b.createElement("div"),
          u = b.createElement("div");
        u.style &&
          ((u.style.backgroundClip = "content-box"),
          (u.cloneNode(!0).style.backgroundClip = ""),
          (m.clearCloneStyle = "content-box" === u.style.backgroundClip),
          C.extend(m, {
            boxSizingReliable: function () {
              return e(), r;
            },
            pixelBoxStyles: function () {
              return e(), s;
            },
            pixelPosition: function () {
              return e(), i;
            },
            reliableMarginLeft: function () {
              return e(), l;
            },
            scrollboxSize: function () {
              return e(), o;
            },
            reliableTrDimensions: function () {
              var e, t, i, r;
              return (
                null == a &&
                  ((e = b.createElement("table")),
                  (t = b.createElement("tr")),
                  (i = b.createElement("div")),
                  (e.style.cssText =
                    "position:absolute;left:-11111px;border-collapse:separate"),
                  (t.style.cssText = "box-sizing:content-box;border:1px solid"),
                  (t.style.height = "1px"),
                  (i.style.height = "9px"),
                  (i.style.display = "block"),
                  pe.appendChild(e).appendChild(t).appendChild(i),
                  (r = n.getComputedStyle(t)),
                  (a =
                    parseInt(r.height, 10) +
                      parseInt(r.borderTopWidth, 10) +
                      parseInt(r.borderBottomWidth, 10) ===
                    t.offsetHeight),
                  pe.removeChild(e)),
                a
              );
            },
          }));
      })();
      var et = ["Webkit", "Moz", "ms"],
        tt = b.createElement("div").style,
        nt = {};
      function it(e) {
        var t = C.cssProps[e] || nt[e];
        return (
          t ||
          (e in tt
            ? e
            : (nt[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = et.length;
                    n--;

                  )
                    if ((e = et[n] + t) in tt) return e;
                })(e) || e))
        );
      }
      var rt = /^(none|table(?!-c[ea]).+)/,
        ot = { position: "absolute", visibility: "hidden", display: "block" },
        st = { letterSpacing: "0", fontWeight: "400" };
      function at(e, t, n) {
        var i = de.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
      }
      function lt(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
          a = 0,
          l = 0,
          c = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
          "margin" === n && (c += C.css(e, n + fe[s], !0, r)),
            i
              ? ("content" === n && (l -= C.css(e, "padding" + fe[s], !0, r)),
                "margin" !== n &&
                  (l -= C.css(e, "border" + fe[s] + "Width", !0, r)))
              : ((l += C.css(e, "padding" + fe[s], !0, r)),
                "padding" !== n
                  ? (l += C.css(e, "border" + fe[s] + "Width", !0, r))
                  : (a += C.css(e, "border" + fe[s] + "Width", !0, r)));
        return (
          !i &&
            o >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    l -
                    a -
                    0.5
                )
              ) || 0),
          l + c
        );
      }
      function ct(e, t, n) {
        var i = Ke(e),
          r =
            (!m.boxSizingReliable() || n) &&
            "border-box" === C.css(e, "boxSizing", !1, i),
          o = r,
          s = Ze(e, t, i),
          a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ye.test(s)) {
          if (!n) return s;
          s = "auto";
        }
        return (
          ((!m.boxSizingReliable() && r) ||
            (!m.reliableTrDimensions() && T(e, "tr")) ||
            "auto" === s ||
            (!parseFloat(s) && "inline" === C.css(e, "display", !1, i))) &&
            e.getClientRects().length &&
            ((r = "border-box" === C.css(e, "boxSizing", !1, i)),
            (o = a in e) && (s = e[a])),
          (s = parseFloat(s) || 0) +
            lt(e, t, n || (r ? "border" : "content"), o, i, s) +
            "px"
        );
      }
      function ut(e, t, n, i, r) {
        return new ut.prototype.init(e, t, n, i, r);
      }
      C.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ze(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageSlice: !0,
          columnCount: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var r,
              o,
              s,
              a = ie(t),
              l = Xe.test(t),
              c = e.style;
            if (
              (l || (t = it(a)),
              (s = C.cssHooks[t] || C.cssHooks[a]),
              void 0 === n)
            )
              return s && "get" in s && void 0 !== (r = s.get(e, !1, i))
                ? r
                : c[t];
            "string" === (o = typeof n) &&
              (r = de.exec(n)) &&
              r[1] &&
              ((n = ye(e, t, r)), (o = "number")),
              null != n &&
                n == n &&
                ("number" !== o ||
                  l ||
                  (n += (r && r[3]) || (C.cssNumber[a] ? "" : "px")),
                m.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (c[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                  (l ? c.setProperty(t, n) : (c[t] = n)));
          }
        },
        css: function (e, t, n, i) {
          var r,
            o,
            s,
            a = ie(t);
          return (
            Xe.test(t) || (t = it(a)),
            (s = C.cssHooks[t] || C.cssHooks[a]) &&
              "get" in s &&
              (r = s.get(e, !0, n)),
            void 0 === r && (r = Ze(e, t, i)),
            "normal" === r && t in st && (r = st[t]),
            "" === n || n
              ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
              : r
          );
        },
      }),
        C.each(["height", "width"], function (e, t) {
          C.cssHooks[t] = {
            get: function (e, n, i) {
              if (n)
                return !rt.test(C.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? ct(e, t, i)
                  : Qe(e, ot, function () {
                      return ct(e, t, i);
                    });
            },
            set: function (e, n, i) {
              var r,
                o = Ke(e),
                s = !m.scrollboxSize() && "absolute" === o.position,
                a = (s || i) && "border-box" === C.css(e, "boxSizing", !1, o),
                l = i ? lt(e, t, i, a, o) : 0;
              return (
                a &&
                  s &&
                  (l -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      lt(e, t, "border", !1, o) -
                      0.5
                  )),
                l &&
                  (r = de.exec(n)) &&
                  "px" !== (r[3] || "px") &&
                  ((e.style[t] = n), (n = C.css(e, t))),
                at(0, n, l)
              );
            },
          };
        }),
        (C.cssHooks.marginLeft = Je(m.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ze(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  Qe(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        C.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (C.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var i = 0,
                  r = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                i < 4;
                i++
              )
                r[e + fe[i] + t] = o[i] || o[i - 2] || o[0];
              return r;
            },
          }),
            "margin" !== e && (C.cssHooks[e + t].set = at);
        }),
        C.fn.extend({
          css: function (e, t) {
            return J(
              this,
              function (e, t, n) {
                var i,
                  r,
                  o = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (i = Ke(e), r = t.length; s < r; s++)
                    o[t[s]] = C.css(e, t[s], !1, i);
                  return o;
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (C.Tween = ut),
        (ut.prototype = {
          constructor: ut,
          init: function (e, t, n, i, r, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = r || C.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = o || (C.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = ut.propHooks[this.prop];
            return e && e.get ? e.get(this) : ut.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = ut.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    C.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : ut.propHooks._default.set(this),
              this
            );
          },
        }),
        (ut.prototype.init.prototype = ut.prototype),
        (ut.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = C.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              C.fx.step[e.prop]
                ? C.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!C.cssHooks[e.prop] && null == e.elem.style[it(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : C.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (ut.propHooks.scrollTop = ut.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (C.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (C.fx = ut.prototype.init),
        (C.fx.step = {});
      var ht,
        dt,
        ft = /^(?:toggle|show|hide)$/,
        pt = /queueHooks$/;
      function gt() {
        dt &&
          (!1 === b.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(gt)
            : n.setTimeout(gt, C.fx.interval),
          C.fx.tick());
      }
      function mt() {
        return (
          n.setTimeout(function () {
            ht = void 0;
          }),
          (ht = Date.now())
        );
      }
      function vt(e, t) {
        var n,
          i = 0,
          r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
          r["margin" + (n = fe[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
      }
      function yt(e, t, n) {
        for (
          var i,
            r = (bt.tweeners[t] || []).concat(bt.tweeners["*"]),
            o = 0,
            s = r.length;
          o < s;
          o++
        )
          if ((i = r[o].call(n, t, e))) return i;
      }
      function bt(e, t, n) {
        var i,
          r,
          o = 0,
          s = bt.prefilters.length,
          a = C.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (r) return !1;
            for (
              var t = ht || mt(),
                n = Math.max(0, c.startTime + c.duration - t),
                i = 1 - (n / c.duration || 0),
                o = 0,
                s = c.tweens.length;
              o < s;
              o++
            )
              c.tweens[o].run(i);
            return (
              a.notifyWith(e, [c, i, n]),
              i < 1 && s
                ? n
                : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            );
          },
          c = a.promise({
            elem: e,
            props: C.extend({}, t),
            opts: C.extend(
              !0,
              { specialEasing: {}, easing: C.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: ht || mt(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var i = C.Tween(
                e,
                c.opts,
                t,
                n,
                c.opts.specialEasing[t] || c.opts.easing
              );
              return c.tweens.push(i), i;
            },
            stop: function (t) {
              var n = 0,
                i = t ? c.tweens.length : 0;
              if (r) return this;
              for (r = !0; n < i; n++) c.tweens[n].run(1);
              return (
                t
                  ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                  : a.rejectWith(e, [c, t]),
                this
              );
            },
          }),
          u = c.props;
        for (
          !(function (e, t) {
            var n, i, r, o, s;
            for (n in e)
              if (
                ((r = t[(i = ie(n))]),
                (o = e[n]),
                Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                n !== i && ((e[i] = o), delete e[n]),
                (s = C.cssHooks[i]) && ("expand" in s))
              )
                for (n in ((o = s.expand(o)), delete e[i], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = r));
              else t[i] = r;
          })(u, c.opts.specialEasing);
          o < s;
          o++
        )
          if ((i = bt.prefilters[o].call(c, e, u, c.opts)))
            return (
              v(i.stop) &&
                (C._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          C.map(u, yt, c),
          v(c.opts.start) && c.opts.start.call(e, c),
          c
            .progress(c.opts.progress)
            .done(c.opts.done, c.opts.complete)
            .fail(c.opts.fail)
            .always(c.opts.always),
          C.fx.timer(C.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
          c
        );
      }
      (C.Animation = C.extend(bt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return ye(n.elem, e, de.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          v(e) ? ((t = e), (e = ["*"])) : (e = e.match(V));
          for (var n, i = 0, r = e.length; i < r; i++)
            (n = e[i]),
              (bt.tweeners[n] = bt.tweeners[n] || []),
              bt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              c,
              u,
              h = "width" in t || "height" in t,
              d = this,
              f = {},
              p = e.style,
              g = e.nodeType && ve(e),
              m = se.get(e, "fxshow");
            for (i in (n.queue ||
              (null == (s = C._queueHooks(e, "fx")).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function () {
                  s.unqueued || a();
                })),
              s.unqueued++,
              d.always(function () {
                d.always(function () {
                  s.unqueued--, C.queue(e, "fx").length || s.empty.fire();
                });
              })),
            t))
              if (((r = t[i]), ft.test(r))) {
                if (
                  (delete t[i],
                  (o = o || "toggle" === r),
                  r === (g ? "hide" : "show"))
                ) {
                  if ("show" !== r || !m || void 0 === m[i]) continue;
                  g = !0;
                }
                f[i] = (m && m[i]) || C.style(e, i);
              }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(f))
              for (i in (h &&
                1 === e.nodeType &&
                ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                null == (c = m && m.display) && (c = se.get(e, "display")),
                "none" === (u = C.css(e, "display")) &&
                  (c
                    ? (u = c)
                    : (we([e], !0),
                      (c = e.style.display || c),
                      (u = C.css(e, "display")),
                      we([e]))),
                ("inline" === u || ("inline-block" === u && null != c)) &&
                  "none" === C.css(e, "float") &&
                  (l ||
                    (d.done(function () {
                      p.display = c;
                    }),
                    null == c &&
                      ((u = p.display), (c = "none" === u ? "" : u))),
                  (p.display = "inline-block"))),
              n.overflow &&
                ((p.overflow = "hidden"),
                d.always(function () {
                  (p.overflow = n.overflow[0]),
                    (p.overflowX = n.overflow[1]),
                    (p.overflowY = n.overflow[2]);
                })),
              (l = !1),
              f))
                l ||
                  (m
                    ? "hidden" in m && (g = m.hidden)
                    : (m = se.access(e, "fxshow", { display: c })),
                  o && (m.hidden = !g),
                  g && we([e], !0),
                  d.done(function () {
                    for (i in (g || we([e]), se.remove(e, "fxshow"), f))
                      C.style(e, i, f[i]);
                  })),
                  (l = yt(g ? m[i] : 0, i, d)),
                  i in m ||
                    ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? bt.prefilters.unshift(e) : bt.prefilters.push(e);
        },
      })),
        (C.speed = function (e, t, n) {
          var i =
            e && "object" == typeof e
              ? C.extend({}, e)
              : {
                  complete: n || (!n && t) || (v(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !v(t) && t),
                };
          return (
            C.fx.off
              ? (i.duration = 0)
              : "number" != typeof i.duration &&
                (i.duration in C.fx.speeds
                  ? (i.duration = C.fx.speeds[i.duration])
                  : (i.duration = C.fx.speeds._default)),
            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              v(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue);
            }),
            i
          );
        }),
        C.fn.extend({
          fadeTo: function (e, t, n, i) {
            return this.filter(ve)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, i);
          },
          animate: function (e, t, n, i) {
            var r = C.isEmptyObject(e),
              o = C.speed(t, n, i),
              s = function () {
                var t = bt(this, C.extend({}, e), o);
                (r || se.get(this, "finish")) && t.stop(!0);
              };
            return (
              (s.finish = s),
              r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            );
          },
          stop: function (e, t, n) {
            var i = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  r = null != e && e + "queueHooks",
                  o = C.timers,
                  s = se.get(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else for (r in s) s[r] && s[r].stop && pt.test(r) && i(s[r]);
                for (r = o.length; r--; )
                  o[r].elem !== this ||
                    (null != e && o[r].queue !== e) ||
                    (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                (!t && n) || C.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = se.get(this),
                  i = n[e + "queue"],
                  r = n[e + "queueHooks"],
                  o = C.timers,
                  s = i ? i.length : 0;
                for (
                  n.finish = !0,
                    C.queue(this, e, []),
                    r && r.stop && r.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++)
                  i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        C.each(["toggle", "show", "hide"], function (e, t) {
          var n = C.fn[t];
          C.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(vt(t, !0), e, i, r);
          };
        }),
        C.each(
          {
            slideDown: vt("show"),
            slideUp: vt("hide"),
            slideToggle: vt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            C.fn[e] = function (e, n, i) {
              return this.animate(t, e, n, i);
            };
          }
        ),
        (C.timers = []),
        (C.fx.tick = function () {
          var e,
            t = 0,
            n = C.timers;
          for (ht = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || C.fx.stop(), (ht = void 0);
        }),
        (C.fx.timer = function (e) {
          C.timers.push(e), C.fx.start();
        }),
        (C.fx.interval = 13),
        (C.fx.start = function () {
          dt || ((dt = !0), gt());
        }),
        (C.fx.stop = function () {
          dt = null;
        }),
        (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (C.fn.delay = function (e, t) {
          return (
            (e = (C.fx && C.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, i) {
              var r = n.setTimeout(t, e);
              i.stop = function () {
                n.clearTimeout(r);
              };
            })
          );
        }),
        (function () {
          var e = b.createElement("input"),
            t = b
              .createElement("select")
              .appendChild(b.createElement("option"));
          (e.type = "checkbox"),
            (m.checkOn = "" !== e.value),
            (m.optSelected = t.selected),
            ((e = b.createElement("input")).value = "t"),
            (e.type = "radio"),
            (m.radioValue = "t" === e.value);
        })();
      var _t,
        wt = C.expr.attrHandle;
      C.fn.extend({
        attr: function (e, t) {
          return J(this, C.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            C.removeAttr(this, e);
          });
        },
      }),
        C.extend({
          attr: function (e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? C.prop(e, t, n)
                : ((1 === o && C.isXMLDoc(e)) ||
                    (r =
                      C.attrHooks[t.toLowerCase()] ||
                      (C.expr.match.bool.test(t) ? _t : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void C.removeAttr(e, t)
                      : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                      ? i
                      : (e.setAttribute(t, n + ""), n)
                    : r && "get" in r && null !== (i = r.get(e, t))
                    ? i
                    : null == (i = C.find.attr(e, t))
                    ? void 0
                    : i);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!m.radioValue && "radio" === t && T(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              i = 0,
              r = t && t.match(V);
            if (r && 1 === e.nodeType)
              for (; (n = r[i++]); ) e.removeAttribute(n);
          },
        }),
        (_t = {
          set: function (e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = wt[t] || C.find.attr;
          wt[t] = function (e, t, i) {
            var r,
              o,
              s = t.toLowerCase();
            return (
              i ||
                ((o = wt[s]),
                (wt[s] = r),
                (r = null != n(e, t, i) ? s : null),
                (wt[s] = o)),
              r
            );
          };
        });
      var xt = /^(?:input|select|textarea|button)$/i,
        kt = /^(?:a|area)$/i;
      function Ct(e) {
        return (e.match(V) || []).join(" ");
      }
      function Dt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function Tt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(V)) || [];
      }
      C.fn.extend({
        prop: function (e, t) {
          return J(this, C.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[C.propFix[e] || e];
          });
        },
      }),
        C.extend({
          prop: function (e, t, n) {
            var i,
              r,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && C.isXMLDoc(e)) ||
                  ((t = C.propFix[t] || t), (r = C.propHooks[t])),
                void 0 !== n
                  ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e[t] = n)
                  : r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = C.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : xt.test(e.nodeName) || (kt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        m.optSelected ||
          (C.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        C.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            C.propFix[this.toLowerCase()] = this;
          }
        ),
        C.fn.extend({
          addClass: function (e) {
            var t, n, i, r, o, s;
            return v(e)
              ? this.each(function (t) {
                  C(this).addClass(e.call(this, t, Dt(this)));
                })
              : (t = Tt(e)).length
              ? this.each(function () {
                  if (
                    ((i = Dt(this)),
                    (n = 1 === this.nodeType && " " + Ct(i) + " "))
                  ) {
                    for (o = 0; o < t.length; o++)
                      (r = t[o]),
                        n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                    (s = Ct(n)), i !== s && this.setAttribute("class", s);
                  }
                })
              : this;
          },
          removeClass: function (e) {
            var t, n, i, r, o, s;
            return v(e)
              ? this.each(function (t) {
                  C(this).removeClass(e.call(this, t, Dt(this)));
                })
              : arguments.length
              ? (t = Tt(e)).length
                ? this.each(function () {
                    if (
                      ((i = Dt(this)),
                      (n = 1 === this.nodeType && " " + Ct(i) + " "))
                    ) {
                      for (o = 0; o < t.length; o++)
                        for (r = t[o]; n.indexOf(" " + r + " ") > -1; )
                          n = n.replace(" " + r + " ", " ");
                      (s = Ct(n)), i !== s && this.setAttribute("class", s);
                    }
                  })
                : this
              : this.attr("class", "");
          },
          toggleClass: function (e, t) {
            var n,
              i,
              r,
              o,
              s = typeof e,
              a = "string" === s || Array.isArray(e);
            return v(e)
              ? this.each(function (n) {
                  C(this).toggleClass(e.call(this, n, Dt(this), t), t);
                })
              : "boolean" == typeof t && a
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : ((n = Tt(e)),
                this.each(function () {
                  if (a)
                    for (o = C(this), r = 0; r < n.length; r++)
                      (i = n[r]),
                        o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
                  else
                    (void 0 !== e && "boolean" !== s) ||
                      ((i = Dt(this)) && se.set(this, "__className__", i),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          i || !1 === e
                            ? ""
                            : se.get(this, "__className__") || ""
                        ));
                }));
          },
          hasClass: function (e) {
            var t,
              n,
              i = 0;
            for (t = " " + e + " "; (n = this[i++]); )
              if (1 === n.nodeType && (" " + Ct(Dt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var Et = /\r/g;
      C.fn.extend({
        val: function (e) {
          var t,
            n,
            i,
            r = this[0];
          return arguments.length
            ? ((i = v(e)),
              this.each(function (n) {
                var r;
                1 === this.nodeType &&
                  (null == (r = i ? e.call(this, n, C(this).val()) : e)
                    ? (r = "")
                    : "number" == typeof r
                    ? (r += "")
                    : Array.isArray(r) &&
                      (r = C.map(r, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    C.valHooks[this.type] ||
                    C.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, r, "value")) ||
                    (this.value = r));
              }))
            : r
            ? (t =
                C.valHooks[r.type] || C.valHooks[r.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(r, "value"))
              ? n
              : "string" == typeof (n = r.value)
              ? n.replace(Et, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        C.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = C.find.attr(e, "value");
                return null != t ? t : Ct(C.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  i,
                  r = e.options,
                  o = e.selectedIndex,
                  s = "select-one" === e.type,
                  a = s ? null : [],
                  l = s ? o + 1 : r.length;
                for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                  if (
                    ((n = r[i]).selected || i === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !T(n.parentNode, "optgroup"))
                  ) {
                    if (((t = C(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function (e, t) {
                for (
                  var n, i, r = e.options, o = C.makeArray(t), s = r.length;
                  s--;

                )
                  ((i = r[s]).selected =
                    C.inArray(C.valHooks.option.get(i), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        C.each(["radio", "checkbox"], function () {
          (C.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = C.inArray(C(e).val(), t) > -1);
            },
          }),
            m.checkOn ||
              (C.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        });
      var At = n.location,
        Ot = { guid: Date.now() },
        St = /\?/;
      C.parseXML = function (e) {
        var t, i;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
          (i = t && t.getElementsByTagName("parsererror")[0]),
          (t && !i) ||
            C.error(
              "Invalid XML: " +
                (i
                  ? C.map(i.childNodes, function (e) {
                      return e.textContent;
                    }).join("\n")
                  : e)
            ),
          t
        );
      };
      var Mt = /^(?:focusinfocus|focusoutblur)$/,
        Lt = function (e) {
          e.stopPropagation();
        };
      C.extend(C.event, {
        trigger: function (e, t, i, r) {
          var o,
            s,
            a,
            l,
            c,
            u,
            h,
            d,
            p = [i || b],
            g = f.call(e, "type") ? e.type : e,
            m = f.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((s = d = a = i = i || b),
            3 !== i.nodeType &&
              8 !== i.nodeType &&
              !Mt.test(g + C.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((m = g.split(".")), (g = m.shift()), m.sort()),
              (c = g.indexOf(":") < 0 && "on" + g),
              ((e = e[C.expando]
                ? e
                : new C.Event(g, "object" == typeof e && e)).isTrigger = r
                ? 2
                : 3),
              (e.namespace = m.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = i),
              (t = null == t ? [e] : C.makeArray(t, [e])),
              (h = C.event.special[g] || {}),
              r || !h.trigger || !1 !== h.trigger.apply(i, t)))
          ) {
            if (!r && !h.noBubble && !y(i)) {
              for (
                l = h.delegateType || g, Mt.test(l + g) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                p.push(s), (a = s);
              a === (i.ownerDocument || b) &&
                p.push(a.defaultView || a.parentWindow || n);
            }
            for (o = 0; (s = p[o++]) && !e.isPropagationStopped(); )
              (d = s),
                (e.type = o > 1 ? l : h.bindType || g),
                (u =
                  (se.get(s, "events") || Object.create(null))[e.type] &&
                  se.get(s, "handle")) && u.apply(s, t),
                (u = c && s[c]) &&
                  u.apply &&
                  re(s) &&
                  ((e.result = u.apply(s, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              r ||
                e.isDefaultPrevented() ||
                (h._default && !1 !== h._default.apply(p.pop(), t)) ||
                !re(i) ||
                (c &&
                  v(i[g]) &&
                  !y(i) &&
                  ((a = i[c]) && (i[c] = null),
                  (C.event.triggered = g),
                  e.isPropagationStopped() && d.addEventListener(g, Lt),
                  i[g](),
                  e.isPropagationStopped() && d.removeEventListener(g, Lt),
                  (C.event.triggered = void 0),
                  a && (i[c] = a))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var i = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
          C.event.trigger(i, null, t);
        },
      }),
        C.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              C.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return C.event.trigger(e, t, n, !0);
          },
        });
      var Nt = /\[\]$/,
        jt = /\r?\n/g,
        Pt = /^(?:submit|button|image|reset|file)$/i,
        It = /^(?:input|select|textarea|keygen)/i;
      function Ht(e, t, n, i) {
        var r;
        if (Array.isArray(t))
          C.each(t, function (t, r) {
            n || Nt.test(e)
              ? i(e, r)
              : Ht(
                  e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
                  r,
                  n,
                  i
                );
          });
        else if (n || "object" !== x(t)) i(e, t);
        else for (r in t) Ht(e + "[" + r + "]", t[r], n, i);
      }
      (C.param = function (e, t) {
        var n,
          i = [],
          r = function (e, t) {
            var n = v(t) ? t() : t;
            i[i.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
          C.each(e, function () {
            r(this.name, this.value);
          });
        else for (n in e) Ht(n, e[n], t, r);
        return i.join("&");
      }),
        C.fn.extend({
          serialize: function () {
            return C.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = C.prop(this, "elements");
              return e ? C.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !C(this).is(":disabled") &&
                  It.test(this.nodeName) &&
                  !Pt.test(e) &&
                  (this.checked || !Ce.test(e))
                );
              })
              .map(function (e, t) {
                var n = C(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? C.map(n, function (e) {
                      return { name: t.name, value: e.replace(jt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(jt, "\r\n") };
              })
              .get();
          },
        });
      var Wt = /%20/g,
        Rt = /#.*$/,
        Ft = /([?&])_=[^&]*/,
        $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ut = /^(?:GET|HEAD)$/,
        zt = /^\/\//,
        qt = {},
        Bt = {},
        Vt = "*/".concat("*"),
        Yt = b.createElement("a");
      function Xt(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var i,
            r = 0,
            o = t.toLowerCase().match(V) || [];
          if (v(n))
            for (; (i = o[r++]); )
              "+" === i[0]
                ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                : (e[i] = e[i] || []).push(n);
        };
      }
      function Kt(e, t, n, i) {
        var r = {},
          o = e === Bt;
        function s(a) {
          var l;
          return (
            (r[a] = !0),
            C.each(e[a] || [], function (e, a) {
              var c = a(t, n, i);
              return "string" != typeof c || o || r[c]
                ? o
                  ? !(l = c)
                  : void 0
                : (t.dataTypes.unshift(c), s(c), !1);
            }),
            l
          );
        }
        return s(t.dataTypes[0]) || (!r["*"] && s("*"));
      }
      function Qt(e, t) {
        var n,
          i,
          r = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && C.extend(!0, e, i), e;
      }
      (Yt.href = At.href),
        C.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: At.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                At.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Vt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": C.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Qt(Qt(e, C.ajaxSettings), t) : Qt(C.ajaxSettings, e);
          },
          ajaxPrefilter: Xt(qt),
          ajaxTransport: Xt(Bt),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var i,
              r,
              o,
              s,
              a,
              l,
              c,
              u,
              h,
              d,
              f = C.ajaxSetup({}, t),
              p = f.context || f,
              g = f.context && (p.nodeType || p.jquery) ? C(p) : C.event,
              m = C.Deferred(),
              v = C.Callbacks("once memory"),
              y = f.statusCode || {},
              _ = {},
              w = {},
              x = "canceled",
              k = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (c) {
                    if (!s)
                      for (s = {}; (t = $t.exec(o)); )
                        s[t[1].toLowerCase() + " "] = (
                          s[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = s[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return c ? o : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == c &&
                      ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                      (_[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == c && (f.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (c) k.always(e[k.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || x;
                  return i && i.abort(t), D(0, t), this;
                },
              };
            if (
              (m.promise(k),
              (f.url = ((e || f.url || At.href) + "").replace(
                zt,
                At.protocol + "//"
              )),
              (f.type = t.method || t.type || f.method || f.type),
              (f.dataTypes = (f.dataType || "*").toLowerCase().match(V) || [
                "",
              ]),
              null == f.crossDomain)
            ) {
              l = b.createElement("a");
              try {
                (l.href = f.url),
                  (l.href = l.href),
                  (f.crossDomain =
                    Yt.protocol + "//" + Yt.host != l.protocol + "//" + l.host);
              } catch (e) {
                f.crossDomain = !0;
              }
            }
            if (
              (f.data &&
                f.processData &&
                "string" != typeof f.data &&
                (f.data = C.param(f.data, f.traditional)),
              Kt(qt, f, t, k),
              c)
            )
              return k;
            for (h in ((u = C.event && f.global) &&
              0 == C.active++ &&
              C.event.trigger("ajaxStart"),
            (f.type = f.type.toUpperCase()),
            (f.hasContent = !Ut.test(f.type)),
            (r = f.url.replace(Rt, "")),
            f.hasContent
              ? f.data &&
                f.processData &&
                0 ===
                  (f.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (f.data = f.data.replace(Wt, "+"))
              : ((d = f.url.slice(r.length)),
                f.data &&
                  (f.processData || "string" == typeof f.data) &&
                  ((r += (St.test(r) ? "&" : "?") + f.data), delete f.data),
                !1 === f.cache &&
                  ((r = r.replace(Ft, "$1")),
                  (d = (St.test(r) ? "&" : "?") + "_=" + Ot.guid++ + d)),
                (f.url = r + d)),
            f.ifModified &&
              (C.lastModified[r] &&
                k.setRequestHeader("If-Modified-Since", C.lastModified[r]),
              C.etag[r] && k.setRequestHeader("If-None-Match", C.etag[r])),
            ((f.data && f.hasContent && !1 !== f.contentType) ||
              t.contentType) &&
              k.setRequestHeader("Content-Type", f.contentType),
            k.setRequestHeader(
              "Accept",
              f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                ? f.accepts[f.dataTypes[0]] +
                    ("*" !== f.dataTypes[0] ? ", " + Vt + "; q=0.01" : "")
                : f.accepts["*"]
            ),
            f.headers))
              k.setRequestHeader(h, f.headers[h]);
            if (f.beforeSend && (!1 === f.beforeSend.call(p, k, f) || c))
              return k.abort();
            if (
              ((x = "abort"),
              v.add(f.complete),
              k.done(f.success),
              k.fail(f.error),
              (i = Kt(Bt, f, t, k)))
            ) {
              if (((k.readyState = 1), u && g.trigger("ajaxSend", [k, f]), c))
                return k;
              f.async &&
                f.timeout > 0 &&
                (a = n.setTimeout(function () {
                  k.abort("timeout");
                }, f.timeout));
              try {
                (c = !1), i.send(_, D);
              } catch (e) {
                if (c) throw e;
                D(-1, e);
              }
            } else D(-1, "No Transport");
            function D(e, t, s, l) {
              var h,
                d,
                b,
                _,
                w,
                x = t;
              c ||
                ((c = !0),
                a && n.clearTimeout(a),
                (i = void 0),
                (o = l || ""),
                (k.readyState = e > 0 ? 4 : 0),
                (h = (e >= 200 && e < 300) || 304 === e),
                s &&
                  (_ = (function (e, t, n) {
                    for (
                      var i, r, o, s, a = e.contents, l = e.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === i &&
                          (i =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                      for (r in a)
                        if (a[r] && a[r].test(i)) {
                          l.unshift(r);
                          break;
                        }
                    if (l[0] in n) o = l[0];
                    else {
                      for (r in n) {
                        if (!l[0] || e.converters[r + " " + l[0]]) {
                          o = r;
                          break;
                        }
                        s || (s = r);
                      }
                      o = o || s;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                  })(f, k, s)),
                !h &&
                  C.inArray("script", f.dataTypes) > -1 &&
                  C.inArray("json", f.dataTypes) < 0 &&
                  (f.converters["text script"] = function () {}),
                (_ = (function (e, t, n, i) {
                  var r,
                    o,
                    s,
                    a,
                    l,
                    c = {},
                    u = e.dataTypes.slice();
                  if (u[1])
                    for (s in e.converters)
                      c[s.toLowerCase()] = e.converters[s];
                  for (o = u.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !l &&
                        i &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = o),
                      (o = u.shift()))
                    )
                      if ("*" === o) o = l;
                      else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o]))
                          for (r in c)
                            if (
                              (a = r.split(" "))[1] === o &&
                              (s = c[l + " " + a[0]] || c["* " + a[0]])
                            ) {
                              !0 === s
                                ? (s = c[r])
                                : !0 !== c[r] && ((o = a[0]), u.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else
                            try {
                              t = s(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: s
                                  ? e
                                  : "No conversion from " + l + " to " + o,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(f, _, k, h)),
                h
                  ? (f.ifModified &&
                      ((w = k.getResponseHeader("Last-Modified")) &&
                        (C.lastModified[r] = w),
                      (w = k.getResponseHeader("etag")) && (C.etag[r] = w)),
                    204 === e || "HEAD" === f.type
                      ? (x = "nocontent")
                      : 304 === e
                      ? (x = "notmodified")
                      : ((x = _.state), (d = _.data), (h = !(b = _.error))))
                  : ((b = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
                (k.status = e),
                (k.statusText = (t || x) + ""),
                h ? m.resolveWith(p, [d, x, k]) : m.rejectWith(p, [k, x, b]),
                k.statusCode(y),
                (y = void 0),
                u &&
                  g.trigger(h ? "ajaxSuccess" : "ajaxError", [k, f, h ? d : b]),
                v.fireWith(p, [k, x]),
                u &&
                  (g.trigger("ajaxComplete", [k, f]),
                  --C.active || C.event.trigger("ajaxStop")));
            }
            return k;
          },
          getJSON: function (e, t, n) {
            return C.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return C.get(e, void 0, t, "script");
          },
        }),
        C.each(["get", "post"], function (e, t) {
          C[t] = function (e, n, i, r) {
            return (
              v(n) && ((r = r || i), (i = n), (n = void 0)),
              C.ajax(
                C.extend(
                  { url: e, type: t, dataType: r, data: n, success: i },
                  C.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        C.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (C._evalUrl = function (e, t, n) {
          return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              C.globalEval(e, t, n);
            },
          });
        }),
        C.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (v(e) && (e = e.call(this[0])),
                (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return v(e)
              ? this.each(function (t) {
                  C(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = C(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = v(e);
            return this.each(function (n) {
              C(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  C(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (C.expr.pseudos.hidden = function (e) {
          return !C.expr.pseudos.visible(e);
        }),
        (C.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (C.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Gt = { 0: 200, 1223: 204 },
        Zt = C.ajaxSettings.xhr();
      (m.cors = !!Zt && "withCredentials" in Zt),
        (m.ajax = Zt = !!Zt),
        C.ajaxTransport(function (e) {
          var t, i;
          if (m.cors || (Zt && !e.crossDomain))
            return {
              send: function (r, o) {
                var s,
                  a = e.xhr();
                if (
                  (a.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in (e.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  r["X-Requested-With"] ||
                  (r["X-Requested-With"] = "XMLHttpRequest"),
                r))
                  a.setRequestHeader(s, r[s]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        i =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.ontimeout =
                        a.onreadystatechange =
                          null),
                      "abort" === e
                        ? a.abort()
                        : "error" === e
                        ? "number" != typeof a.status
                          ? o(0, "error")
                          : o(a.status, a.statusText)
                        : o(
                            Gt[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = t()),
                  (i = a.onerror = a.ontimeout = t("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = i)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          n.setTimeout(function () {
                            t && i();
                          });
                      }),
                  (t = t("abort"));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        C.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        C.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return C.globalEval(e), e;
            },
          },
        }),
        C.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        C.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (i, r) {
                (t = C("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && r("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  b.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Jt,
        en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
      C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = en.pop() || C.expando + "_" + Ot.guid++;
          return (this[e] = !0), e;
        },
      }),
        C.ajaxPrefilter("json jsonp", function (e, t, i) {
          var r,
            o,
            s,
            a =
              !1 !== e.jsonp &&
              (tn.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  tn.test(e.data) &&
                  "data");
          if (a || "jsonp" === e.dataTypes[0])
            return (
              (r = e.jsonpCallback =
                v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(tn, "$1" + r))
                : !1 !== e.jsonp &&
                  (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
              (e.converters["script json"] = function () {
                return s || C.error(r + " was not called"), s[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[r]),
              (n[r] = function () {
                s = arguments;
              }),
              i.always(function () {
                void 0 === o ? C(n).removeProp(r) : (n[r] = o),
                  e[r] && ((e.jsonpCallback = t.jsonpCallback), en.push(r)),
                  s && v(o) && o(s[0]),
                  (s = o = void 0);
              }),
              "script"
            );
        }),
        (m.createHTMLDocument =
          (((Jt = b.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Jt.childNodes.length)),
        (C.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (m.createHTMLDocument
                  ? (((i = (t =
                      b.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = b.location.href),
                    t.head.appendChild(i))
                  : (t = b)),
              (o = !n && []),
              (r = R.exec(e))
                ? [t.createElement(r[1])]
                : ((r = Me([e], t, o)),
                  o && o.length && C(o).remove(),
                  C.merge([], r.childNodes)));
          var i, r, o;
        }),
        (C.fn.load = function (e, t, n) {
          var i,
            r,
            o,
            s = this,
            a = e.indexOf(" ");
          return (
            a > -1 && ((i = Ct(e.slice(a))), (e = e.slice(0, a))),
            v(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (r = "POST"),
            s.length > 0 &&
              C.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments),
                    s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      s.each(function () {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (C.expr.pseudos.animated = function (e) {
          return C.grep(C.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (C.offset = {
          setOffset: function (e, t, n) {
            var i,
              r,
              o,
              s,
              a,
              l,
              c = C.css(e, "position"),
              u = C(e),
              h = {};
            "static" === c && (e.style.position = "relative"),
              (a = u.offset()),
              (o = C.css(e, "top")),
              (l = C.css(e, "left")),
              ("absolute" === c || "fixed" === c) &&
              (o + l).indexOf("auto") > -1
                ? ((s = (i = u.position()).top), (r = i.left))
                : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
              v(t) && (t = t.call(e, n, C.extend({}, a))),
              null != t.top && (h.top = t.top - a.top + s),
              null != t.left && (h.left = t.left - a.left + r),
              "using" in t ? t.using.call(e, h) : u.css(h);
          },
        }),
        C.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    C.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              i = this[0];
            return i
              ? i.getClientRects().length
                ? ((t = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                i = this[0],
                r = { top: 0, left: 0 };
              if ("fixed" === C.css(i, "position"))
                t = i.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === C.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== i &&
                  1 === e.nodeType &&
                  (((r = C(e).offset()).top += C.css(e, "borderTopWidth", !0)),
                  (r.left += C.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - r.top - C.css(i, "marginTop", !0),
                left: t.left - r.left - C.css(i, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === C.css(e, "position");

              )
                e = e.offsetParent;
              return e || pe;
            });
          },
        }),
        C.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            C.fn[e] = function (i) {
              return J(
                this,
                function (e, i, r) {
                  var o;
                  if (
                    (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === r)
                  )
                    return o ? o[t] : e[i];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                    : (e[i] = r);
                },
                e,
                i,
                arguments.length
              );
            };
          }
        ),
        C.each(["top", "left"], function (e, t) {
          C.cssHooks[t] = Je(m.pixelPosition, function (e, n) {
            if (n)
              return (n = Ze(e, t)), Ye.test(n) ? C(e).position()[t] + "px" : n;
          });
        }),
        C.each({ Height: "height", Width: "width" }, function (e, t) {
          C.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, i) {
              C.fn[i] = function (r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                  a = n || (!0 === r || !0 === o ? "margin" : "border");
                return J(
                  this,
                  function (t, n, r) {
                    var o;
                    return y(t)
                      ? 0 === i.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          o["scroll" + e],
                          t.body["offset" + e],
                          o["offset" + e],
                          o["client" + e]
                        ))
                      : void 0 === r
                      ? C.css(t, n, a)
                      : C.style(t, n, r, a);
                  },
                  t,
                  s ? r : void 0,
                  s
                );
              };
            }
          );
        }),
        C.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            C.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        C.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e);
          },
        }),
        C.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            C.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        );
      var nn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      (C.proxy = function (e, t) {
        var n, i, r;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
          return (
            (i = a.call(arguments, 2)),
            ((r = function () {
              return e.apply(t || this, i.concat(a.call(arguments)));
            }).guid = e.guid =
              e.guid || C.guid++),
            r
          );
      }),
        (C.holdReady = function (e) {
          e ? C.readyWait++ : C.ready(!0);
        }),
        (C.isArray = Array.isArray),
        (C.parseJSON = JSON.parse),
        (C.nodeName = T),
        (C.isFunction = v),
        (C.isWindow = y),
        (C.camelCase = ie),
        (C.type = x),
        (C.now = Date.now),
        (C.isNumeric = function (e) {
          var t = C.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (C.trim = function (e) {
          return null == e ? "" : (e + "").replace(nn, "$1");
        }),
        void 0 ===
          (i = function () {
            return C;
          }.apply(t, [])) || (e.exports = i);
      var rn = n.jQuery,
        on = n.$;
      return (
        (C.noConflict = function (e) {
          return (
            n.$ === C && (n.$ = on), e && n.jQuery === C && (n.jQuery = rn), C
          );
        }),
        void 0 === r && (n.jQuery = n.$ = C),
        C
      );
    });
  },
  "EjV/": function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "top", function () {
        return i;
      }),
      n.d(t, "bottom", function () {
        return r;
      }),
      n.d(t, "right", function () {
        return o;
      }),
      n.d(t, "left", function () {
        return s;
      }),
      n.d(t, "auto", function () {
        return a;
      }),
      n.d(t, "basePlacements", function () {
        return l;
      }),
      n.d(t, "start", function () {
        return c;
      }),
      n.d(t, "end", function () {
        return u;
      }),
      n.d(t, "clippingParents", function () {
        return h;
      }),
      n.d(t, "viewport", function () {
        return d;
      }),
      n.d(t, "popper", function () {
        return f;
      }),
      n.d(t, "reference", function () {
        return p;
      }),
      n.d(t, "variationPlacements", function () {
        return g;
      }),
      n.d(t, "placements", function () {
        return m;
      }),
      n.d(t, "beforeRead", function () {
        return v;
      }),
      n.d(t, "read", function () {
        return y;
      }),
      n.d(t, "afterRead", function () {
        return b;
      }),
      n.d(t, "beforeMain", function () {
        return _;
      }),
      n.d(t, "main", function () {
        return w;
      }),
      n.d(t, "afterMain", function () {
        return x;
      }),
      n.d(t, "beforeWrite", function () {
        return k;
      }),
      n.d(t, "write", function () {
        return C;
      }),
      n.d(t, "afterWrite", function () {
        return D;
      }),
      n.d(t, "modifierPhases", function () {
        return T;
      }),
      n.d(t, "applyStyles", function () {
        return L;
      }),
      n.d(t, "arrow", function () {
        return Z;
      }),
      n.d(t, "computeStyles", function () {
        return ne;
      }),
      n.d(t, "eventListeners", function () {
        return re;
      }),
      n.d(t, "flip", function () {
        return ye;
      }),
      n.d(t, "hide", function () {
        return we;
      }),
      n.d(t, "offset", function () {
        return xe;
      }),
      n.d(t, "popperOffsets", function () {
        return ke;
      }),
      n.d(t, "preventOverflow", function () {
        return Ce;
      }),
      n.d(t, "popperGenerator", function () {
        return Oe;
      }),
      n.d(t, "detectOverflow", function () {
        return ve;
      }),
      n.d(t, "createPopperBase", function () {
        return Se;
      }),
      n.d(t, "createPopper", function () {
        return Me;
      }),
      n.d(t, "createPopperLite", function () {
        return Le;
      });
    var i = "top",
      r = "bottom",
      o = "right",
      s = "left",
      a = "auto",
      l = [i, r, o, s],
      c = "start",
      u = "end",
      h = "clippingParents",
      d = "viewport",
      f = "popper",
      p = "reference",
      g = l.reduce(function (e, t) {
        return e.concat([t + "-" + c, t + "-" + u]);
      }, []),
      m = [].concat(l, [a]).reduce(function (e, t) {
        return e.concat([t, t + "-" + c, t + "-" + u]);
      }, []),
      v = "beforeRead",
      y = "read",
      b = "afterRead",
      _ = "beforeMain",
      w = "main",
      x = "afterMain",
      k = "beforeWrite",
      C = "write",
      D = "afterWrite",
      T = [v, y, b, _, w, x, k, C, D];
    function E(e) {
      return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function A(e) {
      if (null == e) return window;
      if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument;
        return (t && t.defaultView) || window;
      }
      return e;
    }
    function O(e) {
      return e instanceof A(e).Element || e instanceof Element;
    }
    function S(e) {
      return e instanceof A(e).HTMLElement || e instanceof HTMLElement;
    }
    function M(e) {
      return (
        "undefined" != typeof ShadowRoot &&
        (e instanceof A(e).ShadowRoot || e instanceof ShadowRoot)
      );
    }
    var L = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function (e) {
          var n = t.styles[e] || {},
            i = t.attributes[e] || {},
            r = t.elements[e];
          S(r) &&
            E(r) &&
            (Object.assign(r.style, n),
            Object.keys(i).forEach(function (e) {
              var t = i[e];
              !1 === t
                ? r.removeAttribute(e)
                : r.setAttribute(e, !0 === t ? "" : t);
            }));
        });
      },
      effect: function (e) {
        var t = e.state,
          n = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(t.elements.popper.style, n.popper),
          (t.styles = n),
          t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
          function () {
            Object.keys(t.elements).forEach(function (e) {
              var i = t.elements[e],
                r = t.attributes[e] || {},
                o = Object.keys(
                  t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                ).reduce(function (e, t) {
                  return (e[t] = ""), e;
                }, {});
              S(i) &&
                E(i) &&
                (Object.assign(i.style, o),
                Object.keys(r).forEach(function (e) {
                  i.removeAttribute(e);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    function N(e) {
      return e.split("-")[0];
    }
    var j = Math.max,
      P = Math.min,
      I = Math.round;
    function H() {
      var e = navigator.userAgentData;
      return null != e && e.brands && Array.isArray(e.brands)
        ? e.brands
            .map(function (e) {
              return e.brand + "/" + e.version;
            })
            .join(" ")
        : navigator.userAgent;
    }
    function W() {
      return !/^((?!chrome|android).)*safari/i.test(H());
    }
    function R(e, t, n) {
      void 0 === t && (t = !1), void 0 === n && (n = !1);
      var i = e.getBoundingClientRect(),
        r = 1,
        o = 1;
      t &&
        S(e) &&
        ((r = (e.offsetWidth > 0 && I(i.width) / e.offsetWidth) || 1),
        (o = (e.offsetHeight > 0 && I(i.height) / e.offsetHeight) || 1));
      var s = (O(e) ? A(e) : window).visualViewport,
        a = !W() && n,
        l = (i.left + (a && s ? s.offsetLeft : 0)) / r,
        c = (i.top + (a && s ? s.offsetTop : 0)) / o,
        u = i.width / r,
        h = i.height / o;
      return {
        width: u,
        height: h,
        top: c,
        right: l + u,
        bottom: c + h,
        left: l,
        x: l,
        y: c,
      };
    }
    function F(e) {
      var t = R(e),
        n = e.offsetWidth,
        i = e.offsetHeight;
      return (
        Math.abs(t.width - n) <= 1 && (n = t.width),
        Math.abs(t.height - i) <= 1 && (i = t.height),
        { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
      );
    }
    function $(e, t) {
      var n = t.getRootNode && t.getRootNode();
      if (e.contains(t)) return !0;
      if (n && M(n)) {
        var i = t;
        do {
          if (i && e.isSameNode(i)) return !0;
          i = i.parentNode || i.host;
        } while (i);
      }
      return !1;
    }
    function U(e) {
      return A(e).getComputedStyle(e);
    }
    function z(e) {
      return ["table", "td", "th"].indexOf(E(e)) >= 0;
    }
    function q(e) {
      return ((O(e) ? e.ownerDocument : e.document) || window.document)
        .documentElement;
    }
    function B(e) {
      return "html" === E(e)
        ? e
        : e.assignedSlot || e.parentNode || (M(e) ? e.host : null) || q(e);
    }
    function V(e) {
      return S(e) && "fixed" !== U(e).position ? e.offsetParent : null;
    }
    function Y(e) {
      for (var t = A(e), n = V(e); n && z(n) && "static" === U(n).position; )
        n = V(n);
      return n &&
        ("html" === E(n) || ("body" === E(n) && "static" === U(n).position))
        ? t
        : n ||
            (function (e) {
              var t = /firefox/i.test(H());
              if (/Trident/i.test(H()) && S(e) && "fixed" === U(e).position)
                return null;
              var n = B(e);
              for (
                M(n) && (n = n.host);
                S(n) && ["html", "body"].indexOf(E(n)) < 0;

              ) {
                var i = U(n);
                if (
                  "none" !== i.transform ||
                  "none" !== i.perspective ||
                  "paint" === i.contain ||
                  -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                  (t && "filter" === i.willChange) ||
                  (t && i.filter && "none" !== i.filter)
                )
                  return n;
                n = n.parentNode;
              }
              return null;
            })(e) ||
            t;
    }
    function X(e) {
      return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
    }
    function K(e, t, n) {
      return j(e, P(t, n));
    }
    function Q(e) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
    }
    function G(e, t) {
      return t.reduce(function (t, n) {
        return (t[n] = e), t;
      }, {});
    }
    var Z = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t,
          n = e.state,
          a = e.name,
          c = e.options,
          u = n.elements.arrow,
          h = n.modifiersData.popperOffsets,
          d = N(n.placement),
          f = X(d),
          p = [s, o].indexOf(d) >= 0 ? "height" : "width";
        if (u && h) {
          var g = (function (e, t) {
              return Q(
                "number" !=
                  typeof (e =
                    "function" == typeof e
                      ? e(
                          Object.assign({}, t.rects, { placement: t.placement })
                        )
                      : e)
                  ? e
                  : G(e, l)
              );
            })(c.padding, n),
            m = F(u),
            v = "y" === f ? i : s,
            y = "y" === f ? r : o,
            b =
              n.rects.reference[p] +
              n.rects.reference[f] -
              h[f] -
              n.rects.popper[p],
            _ = h[f] - n.rects.reference[f],
            w = Y(u),
            x = w ? ("y" === f ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
            k = b / 2 - _ / 2,
            C = g[v],
            D = x - m[p] - g[y],
            T = x / 2 - m[p] / 2 + k,
            E = K(C, T, D),
            A = f;
          n.modifiersData[a] = (((t = {})[A] = E), (t.centerOffset = E - T), t);
        }
      },
      effect: function (e) {
        var t = e.state,
          n = e.options.element,
          i = void 0 === n ? "[data-popper-arrow]" : n;
        null != i &&
          ("string" != typeof i || (i = t.elements.popper.querySelector(i))) &&
          $(t.elements.popper, i) &&
          (t.elements.arrow = i);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    };
    function J(e) {
      return e.split("-")[1];
    }
    var ee = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function te(e) {
      var t,
        n = e.popper,
        a = e.popperRect,
        l = e.placement,
        c = e.variation,
        h = e.offsets,
        d = e.position,
        f = e.gpuAcceleration,
        p = e.adaptive,
        g = e.roundOffsets,
        m = e.isFixed,
        v = h.x,
        y = void 0 === v ? 0 : v,
        b = h.y,
        _ = void 0 === b ? 0 : b,
        w = "function" == typeof g ? g({ x: y, y: _ }) : { x: y, y: _ };
      (y = w.x), (_ = w.y);
      var x = h.hasOwnProperty("x"),
        k = h.hasOwnProperty("y"),
        C = s,
        D = i,
        T = window;
      if (p) {
        var E = Y(n),
          O = "clientHeight",
          S = "clientWidth";
        if (
          (E === A(n) &&
            "static" !== U((E = q(n))).position &&
            "absolute" === d &&
            ((O = "scrollHeight"), (S = "scrollWidth")),
          (E = E),
          l === i || ((l === s || l === o) && c === u))
        )
          (D = r),
            (_ -=
              (m && E === T && T.visualViewport
                ? T.visualViewport.height
                : E[O]) - a.height),
            (_ *= f ? 1 : -1);
        if (l === s || ((l === i || l === r) && c === u))
          (C = o),
            (y -=
              (m && E === T && T.visualViewport
                ? T.visualViewport.width
                : E[S]) - a.width),
            (y *= f ? 1 : -1);
      }
      var M,
        L = Object.assign({ position: d }, p && ee),
        N =
          !0 === g
            ? (function (e, t) {
                var n = e.x,
                  i = e.y,
                  r = t.devicePixelRatio || 1;
                return { x: I(n * r) / r || 0, y: I(i * r) / r || 0 };
              })({ x: y, y: _ }, A(n))
            : { x: y, y: _ };
      return (
        (y = N.x),
        (_ = N.y),
        f
          ? Object.assign(
              {},
              L,
              (((M = {})[D] = k ? "0" : ""),
              (M[C] = x ? "0" : ""),
              (M.transform =
                (T.devicePixelRatio || 1) <= 1
                  ? "translate(" + y + "px, " + _ + "px)"
                  : "translate3d(" + y + "px, " + _ + "px, 0)"),
              M)
            )
          : Object.assign(
              {},
              L,
              (((t = {})[D] = k ? _ + "px" : ""),
              (t[C] = x ? y + "px" : ""),
              (t.transform = ""),
              t)
            )
      );
    }
    var ne = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
          var t = e.state,
            n = e.options,
            i = n.gpuAcceleration,
            r = void 0 === i || i,
            o = n.adaptive,
            s = void 0 === o || o,
            a = n.roundOffsets,
            l = void 0 === a || a,
            c = {
              placement: N(t.placement),
              variation: J(t.placement),
              popper: t.elements.popper,
              popperRect: t.rects.popper,
              gpuAcceleration: r,
              isFixed: "fixed" === t.options.strategy,
            };
          null != t.modifiersData.popperOffsets &&
            (t.styles.popper = Object.assign(
              {},
              t.styles.popper,
              te(
                Object.assign({}, c, {
                  offsets: t.modifiersData.popperOffsets,
                  position: t.options.strategy,
                  adaptive: s,
                  roundOffsets: l,
                })
              )
            )),
            null != t.modifiersData.arrow &&
              (t.styles.arrow = Object.assign(
                {},
                t.styles.arrow,
                te(
                  Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l,
                  })
                )
              )),
            (t.attributes.popper = Object.assign({}, t.attributes.popper, {
              "data-popper-placement": t.placement,
            }));
        },
        data: {},
      },
      ie = { passive: !0 };
    var re = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
          var t = e.state,
            n = e.instance,
            i = e.options,
            r = i.scroll,
            o = void 0 === r || r,
            s = i.resize,
            a = void 0 === s || s,
            l = A(t.elements.popper),
            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
          return (
            o &&
              c.forEach(function (e) {
                e.addEventListener("scroll", n.update, ie);
              }),
            a && l.addEventListener("resize", n.update, ie),
            function () {
              o &&
                c.forEach(function (e) {
                  e.removeEventListener("scroll", n.update, ie);
                }),
                a && l.removeEventListener("resize", n.update, ie);
            }
          );
        },
        data: {},
      },
      oe = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function se(e) {
      return e.replace(/left|right|bottom|top/g, function (e) {
        return oe[e];
      });
    }
    var ae = { start: "end", end: "start" };
    function le(e) {
      return e.replace(/start|end/g, function (e) {
        return ae[e];
      });
    }
    function ce(e) {
      var t = A(e);
      return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
    }
    function ue(e) {
      return R(q(e)).left + ce(e).scrollLeft;
    }
    function he(e) {
      var t = U(e),
        n = t.overflow,
        i = t.overflowX,
        r = t.overflowY;
      return /auto|scroll|overlay|hidden/.test(n + r + i);
    }
    function de(e, t) {
      var n;
      void 0 === t && (t = []);
      var i = (function e(t) {
          return ["html", "body", "#document"].indexOf(E(t)) >= 0
            ? t.ownerDocument.body
            : S(t) && he(t)
            ? t
            : e(B(t));
        })(e),
        r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
        o = A(i),
        s = r ? [o].concat(o.visualViewport || [], he(i) ? i : []) : i,
        a = t.concat(s);
      return r ? a : a.concat(de(B(s)));
    }
    function fe(e) {
      return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height,
      });
    }
    function pe(e, t, n) {
      return t === d
        ? fe(
            (function (e, t) {
              var n = A(e),
                i = q(e),
                r = n.visualViewport,
                o = i.clientWidth,
                s = i.clientHeight,
                a = 0,
                l = 0;
              if (r) {
                (o = r.width), (s = r.height);
                var c = W();
                (c || (!c && "fixed" === t)) &&
                  ((a = r.offsetLeft), (l = r.offsetTop));
              }
              return { width: o, height: s, x: a + ue(e), y: l };
            })(e, n)
          )
        : O(t)
        ? (function (e, t) {
            var n = R(e, !1, "fixed" === t);
            return (
              (n.top = n.top + e.clientTop),
              (n.left = n.left + e.clientLeft),
              (n.bottom = n.top + e.clientHeight),
              (n.right = n.left + e.clientWidth),
              (n.width = e.clientWidth),
              (n.height = e.clientHeight),
              (n.x = n.left),
              (n.y = n.top),
              n
            );
          })(t, n)
        : fe(
            (function (e) {
              var t,
                n = q(e),
                i = ce(e),
                r = null == (t = e.ownerDocument) ? void 0 : t.body,
                o = j(
                  n.scrollWidth,
                  n.clientWidth,
                  r ? r.scrollWidth : 0,
                  r ? r.clientWidth : 0
                ),
                s = j(
                  n.scrollHeight,
                  n.clientHeight,
                  r ? r.scrollHeight : 0,
                  r ? r.clientHeight : 0
                ),
                a = -i.scrollLeft + ue(e),
                l = -i.scrollTop;
              return (
                "rtl" === U(r || n).direction &&
                  (a += j(n.clientWidth, r ? r.clientWidth : 0) - o),
                { width: o, height: s, x: a, y: l }
              );
            })(q(e))
          );
    }
    function ge(e, t, n, i) {
      var r =
          "clippingParents" === t
            ? (function (e) {
                var t = de(B(e)),
                  n =
                    ["absolute", "fixed"].indexOf(U(e).position) >= 0 && S(e)
                      ? Y(e)
                      : e;
                return O(n)
                  ? t.filter(function (e) {
                      return O(e) && $(e, n) && "body" !== E(e);
                    })
                  : [];
              })(e)
            : [].concat(t),
        o = [].concat(r, [n]),
        s = o[0],
        a = o.reduce(function (t, n) {
          var r = pe(e, n, i);
          return (
            (t.top = j(r.top, t.top)),
            (t.right = P(r.right, t.right)),
            (t.bottom = P(r.bottom, t.bottom)),
            (t.left = j(r.left, t.left)),
            t
          );
        }, pe(e, s, i));
      return (
        (a.width = a.right - a.left),
        (a.height = a.bottom - a.top),
        (a.x = a.left),
        (a.y = a.top),
        a
      );
    }
    function me(e) {
      var t,
        n = e.reference,
        a = e.element,
        l = e.placement,
        h = l ? N(l) : null,
        d = l ? J(l) : null,
        f = n.x + n.width / 2 - a.width / 2,
        p = n.y + n.height / 2 - a.height / 2;
      switch (h) {
        case i:
          t = { x: f, y: n.y - a.height };
          break;
        case r:
          t = { x: f, y: n.y + n.height };
          break;
        case o:
          t = { x: n.x + n.width, y: p };
          break;
        case s:
          t = { x: n.x - a.width, y: p };
          break;
        default:
          t = { x: n.x, y: n.y };
      }
      var g = h ? X(h) : null;
      if (null != g) {
        var m = "y" === g ? "height" : "width";
        switch (d) {
          case c:
            t[g] = t[g] - (n[m] / 2 - a[m] / 2);
            break;
          case u:
            t[g] = t[g] + (n[m] / 2 - a[m] / 2);
        }
      }
      return t;
    }
    function ve(e, t) {
      void 0 === t && (t = {});
      var n = t,
        s = n.placement,
        a = void 0 === s ? e.placement : s,
        c = n.strategy,
        u = void 0 === c ? e.strategy : c,
        g = n.boundary,
        m = void 0 === g ? h : g,
        v = n.rootBoundary,
        y = void 0 === v ? d : v,
        b = n.elementContext,
        _ = void 0 === b ? f : b,
        w = n.altBoundary,
        x = void 0 !== w && w,
        k = n.padding,
        C = void 0 === k ? 0 : k,
        D = Q("number" != typeof C ? C : G(C, l)),
        T = _ === f ? p : f,
        E = e.rects.popper,
        A = e.elements[x ? T : _],
        S = ge(O(A) ? A : A.contextElement || q(e.elements.popper), m, y, u),
        M = R(e.elements.reference),
        L = me({
          reference: M,
          element: E,
          strategy: "absolute",
          placement: a,
        }),
        N = fe(Object.assign({}, E, L)),
        j = _ === f ? N : M,
        P = {
          top: S.top - j.top + D.top,
          bottom: j.bottom - S.bottom + D.bottom,
          left: S.left - j.left + D.left,
          right: j.right - S.right + D.right,
        },
        I = e.modifiersData.offset;
      if (_ === f && I) {
        var H = I[a];
        Object.keys(P).forEach(function (e) {
          var t = [o, r].indexOf(e) >= 0 ? 1 : -1,
            n = [i, r].indexOf(e) >= 0 ? "y" : "x";
          P[e] += H[n] * t;
        });
      }
      return P;
    }
    var ye = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          n = e.options,
          u = e.name;
        if (!t.modifiersData[u]._skip) {
          for (
            var h = n.mainAxis,
              d = void 0 === h || h,
              f = n.altAxis,
              p = void 0 === f || f,
              v = n.fallbackPlacements,
              y = n.padding,
              b = n.boundary,
              _ = n.rootBoundary,
              w = n.altBoundary,
              x = n.flipVariations,
              k = void 0 === x || x,
              C = n.allowedAutoPlacements,
              D = t.options.placement,
              T = N(D),
              E =
                v ||
                (T === D || !k
                  ? [se(D)]
                  : (function (e) {
                      if (N(e) === a) return [];
                      var t = se(e);
                      return [le(e), t, le(t)];
                    })(D)),
              A = [D].concat(E).reduce(function (e, n) {
                return e.concat(
                  N(n) === a
                    ? (function (e, t) {
                        void 0 === t && (t = {});
                        var n = t,
                          i = n.placement,
                          r = n.boundary,
                          o = n.rootBoundary,
                          s = n.padding,
                          a = n.flipVariations,
                          c = n.allowedAutoPlacements,
                          u = void 0 === c ? m : c,
                          h = J(i),
                          d = h
                            ? a
                              ? g
                              : g.filter(function (e) {
                                  return J(e) === h;
                                })
                            : l,
                          f = d.filter(function (e) {
                            return u.indexOf(e) >= 0;
                          });
                        0 === f.length && (f = d);
                        var p = f.reduce(function (t, n) {
                          return (
                            (t[n] = ve(e, {
                              placement: n,
                              boundary: r,
                              rootBoundary: o,
                              padding: s,
                            })[N(n)]),
                            t
                          );
                        }, {});
                        return Object.keys(p).sort(function (e, t) {
                          return p[e] - p[t];
                        });
                      })(t, {
                        placement: n,
                        boundary: b,
                        rootBoundary: _,
                        padding: y,
                        flipVariations: k,
                        allowedAutoPlacements: C,
                      })
                    : n
                );
              }, []),
              O = t.rects.reference,
              S = t.rects.popper,
              M = new Map(),
              L = !0,
              j = A[0],
              P = 0;
            P < A.length;
            P++
          ) {
            var I = A[P],
              H = N(I),
              W = J(I) === c,
              R = [i, r].indexOf(H) >= 0,
              F = R ? "width" : "height",
              $ = ve(t, {
                placement: I,
                boundary: b,
                rootBoundary: _,
                altBoundary: w,
                padding: y,
              }),
              U = R ? (W ? o : s) : W ? r : i;
            O[F] > S[F] && (U = se(U));
            var z = se(U),
              q = [];
            if (
              (d && q.push($[H] <= 0),
              p && q.push($[U] <= 0, $[z] <= 0),
              q.every(function (e) {
                return e;
              }))
            ) {
              (j = I), (L = !1);
              break;
            }
            M.set(I, q);
          }
          if (L)
            for (
              var B = function (e) {
                  var t = A.find(function (t) {
                    var n = M.get(t);
                    if (n)
                      return n.slice(0, e).every(function (e) {
                        return e;
                      });
                  });
                  if (t) return (j = t), "break";
                },
                V = k ? 3 : 1;
              V > 0;
              V--
            ) {
              if ("break" === B(V)) break;
            }
          t.placement !== j &&
            ((t.modifiersData[u]._skip = !0),
            (t.placement = j),
            (t.reset = !0));
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: !1 },
    };
    function be(e, t, n) {
      return (
        void 0 === n && (n = { x: 0, y: 0 }),
        {
          top: e.top - t.height - n.y,
          right: e.right - t.width + n.x,
          bottom: e.bottom - t.height + n.y,
          left: e.left - t.width - n.x,
        }
      );
    }
    function _e(e) {
      return [i, o, r, s].some(function (t) {
        return e[t] >= 0;
      });
    }
    var we = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (e) {
        var t = e.state,
          n = e.name,
          i = t.rects.reference,
          r = t.rects.popper,
          o = t.modifiersData.preventOverflow,
          s = ve(t, { elementContext: "reference" }),
          a = ve(t, { altBoundary: !0 }),
          l = be(s, i),
          c = be(a, r, o),
          u = _e(l),
          h = _e(c);
        (t.modifiersData[n] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: u,
          hasPopperEscaped: h,
        }),
          (t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-reference-hidden": u,
            "data-popper-escaped": h,
          }));
      },
    };
    var xe = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          n = e.options,
          r = e.name,
          a = n.offset,
          l = void 0 === a ? [0, 0] : a,
          c = m.reduce(function (e, n) {
            return (
              (e[n] = (function (e, t, n) {
                var r = N(e),
                  a = [s, i].indexOf(r) >= 0 ? -1 : 1,
                  l =
                    "function" == typeof n
                      ? n(Object.assign({}, t, { placement: e }))
                      : n,
                  c = l[0],
                  u = l[1];
                return (
                  (c = c || 0),
                  (u = (u || 0) * a),
                  [s, o].indexOf(r) >= 0 ? { x: u, y: c } : { x: c, y: u }
                );
              })(n, t.rects, l)),
              e
            );
          }, {}),
          u = c[t.placement],
          h = u.x,
          d = u.y;
        null != t.modifiersData.popperOffsets &&
          ((t.modifiersData.popperOffsets.x += h),
          (t.modifiersData.popperOffsets.y += d)),
          (t.modifiersData[r] = c);
      },
    };
    var ke = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (e) {
        var t = e.state,
          n = e.name;
        t.modifiersData[n] = me({
          reference: t.rects.reference,
          element: t.rects.popper,
          strategy: "absolute",
          placement: t.placement,
        });
      },
      data: {},
    };
    var Ce = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          n = e.options,
          a = e.name,
          l = n.mainAxis,
          u = void 0 === l || l,
          h = n.altAxis,
          d = void 0 !== h && h,
          f = n.boundary,
          p = n.rootBoundary,
          g = n.altBoundary,
          m = n.padding,
          v = n.tether,
          y = void 0 === v || v,
          b = n.tetherOffset,
          _ = void 0 === b ? 0 : b,
          w = ve(t, {
            boundary: f,
            rootBoundary: p,
            padding: m,
            altBoundary: g,
          }),
          x = N(t.placement),
          k = J(t.placement),
          C = !k,
          D = X(x),
          T = "x" === D ? "y" : "x",
          E = t.modifiersData.popperOffsets,
          A = t.rects.reference,
          O = t.rects.popper,
          S =
            "function" == typeof _
              ? _(Object.assign({}, t.rects, { placement: t.placement }))
              : _,
          M =
            "number" == typeof S
              ? { mainAxis: S, altAxis: S }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
          L = t.modifiersData.offset
            ? t.modifiersData.offset[t.placement]
            : null,
          I = { x: 0, y: 0 };
        if (E) {
          if (u) {
            var H,
              W = "y" === D ? i : s,
              R = "y" === D ? r : o,
              $ = "y" === D ? "height" : "width",
              U = E[D],
              z = U + w[W],
              q = U - w[R],
              B = y ? -O[$] / 2 : 0,
              V = k === c ? A[$] : O[$],
              Q = k === c ? -O[$] : -A[$],
              G = t.elements.arrow,
              Z = y && G ? F(G) : { width: 0, height: 0 },
              ee = t.modifiersData["arrow#persistent"]
                ? t.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              te = ee[W],
              ne = ee[R],
              ie = K(0, A[$], Z[$]),
              re = C
                ? A[$] / 2 - B - ie - te - M.mainAxis
                : V - ie - te - M.mainAxis,
              oe = C
                ? -A[$] / 2 + B + ie + ne + M.mainAxis
                : Q + ie + ne + M.mainAxis,
              se = t.elements.arrow && Y(t.elements.arrow),
              ae = se
                ? "y" === D
                  ? se.clientTop || 0
                  : se.clientLeft || 0
                : 0,
              le = null != (H = null == L ? void 0 : L[D]) ? H : 0,
              ce = U + oe - le,
              ue = K(y ? P(z, U + re - le - ae) : z, U, y ? j(q, ce) : q);
            (E[D] = ue), (I[D] = ue - U);
          }
          if (d) {
            var he,
              de = "x" === D ? i : s,
              fe = "x" === D ? r : o,
              pe = E[T],
              ge = "y" === T ? "height" : "width",
              me = pe + w[de],
              ye = pe - w[fe],
              be = -1 !== [i, s].indexOf(x),
              _e = null != (he = null == L ? void 0 : L[T]) ? he : 0,
              we = be ? me : pe - A[ge] - O[ge] - _e + M.altAxis,
              xe = be ? pe + A[ge] + O[ge] - _e - M.altAxis : ye,
              ke =
                y && be
                  ? (function (e, t, n) {
                      var i = K(e, t, n);
                      return i > n ? n : i;
                    })(we, pe, xe)
                  : K(y ? we : me, pe, y ? xe : ye);
            (E[T] = ke), (I[T] = ke - pe);
          }
          t.modifiersData[a] = I;
        }
      },
      requiresIfExists: ["offset"],
    };
    function De(e, t, n) {
      void 0 === n && (n = !1);
      var i,
        r,
        o = S(t),
        s =
          S(t) &&
          (function (e) {
            var t = e.getBoundingClientRect(),
              n = I(t.width) / e.offsetWidth || 1,
              i = I(t.height) / e.offsetHeight || 1;
            return 1 !== n || 1 !== i;
          })(t),
        a = q(t),
        l = R(e, s, n),
        c = { scrollLeft: 0, scrollTop: 0 },
        u = { x: 0, y: 0 };
      return (
        (o || (!o && !n)) &&
          (("body" !== E(t) || he(a)) &&
            (c =
              (i = t) !== A(i) && S(i)
                ? { scrollLeft: (r = i).scrollLeft, scrollTop: r.scrollTop }
                : ce(i)),
          S(t)
            ? (((u = R(t, !0)).x += t.clientLeft), (u.y += t.clientTop))
            : a && (u.x = ue(a))),
        {
          x: l.left + c.scrollLeft - u.x,
          y: l.top + c.scrollTop - u.y,
          width: l.width,
          height: l.height,
        }
      );
    }
    function Te(e) {
      var t = new Map(),
        n = new Set(),
        i = [];
      return (
        e.forEach(function (e) {
          t.set(e.name, e);
        }),
        e.forEach(function (e) {
          n.has(e.name) ||
            (function e(r) {
              n.add(r.name),
                []
                  .concat(r.requires || [], r.requiresIfExists || [])
                  .forEach(function (i) {
                    if (!n.has(i)) {
                      var r = t.get(i);
                      r && e(r);
                    }
                  }),
                i.push(r);
            })(e);
        }),
        i
      );
    }
    var Ee = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function Ae() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return !t.some(function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect);
      });
    }
    function Oe(e) {
      void 0 === e && (e = {});
      var t = e,
        n = t.defaultModifiers,
        i = void 0 === n ? [] : n,
        r = t.defaultOptions,
        o = void 0 === r ? Ee : r;
      return function (e, t, n) {
        void 0 === n && (n = o);
        var r,
          s,
          a = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, Ee, o),
            modifiersData: {},
            elements: { reference: e, popper: t },
            attributes: {},
            styles: {},
          },
          l = [],
          c = !1,
          u = {
            state: a,
            setOptions: function (n) {
              var r = "function" == typeof n ? n(a.options) : n;
              h(),
                (a.options = Object.assign({}, o, a.options, r)),
                (a.scrollParents = {
                  reference: O(e)
                    ? de(e)
                    : e.contextElement
                    ? de(e.contextElement)
                    : [],
                  popper: de(t),
                });
              var s,
                c,
                d = (function (e) {
                  var t = Te(e);
                  return T.reduce(function (e, n) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === n;
                      })
                    );
                  }, []);
                })(
                  ((s = [].concat(i, a.options.modifiers)),
                  (c = s.reduce(function (e, t) {
                    var n = e[t.name];
                    return (
                      (e[t.name] = n
                        ? Object.assign({}, n, t, {
                            options: Object.assign({}, n.options, t.options),
                            data: Object.assign({}, n.data, t.data),
                          })
                        : t),
                      e
                    );
                  }, {})),
                  Object.keys(c).map(function (e) {
                    return c[e];
                  }))
                );
              return (
                (a.orderedModifiers = d.filter(function (e) {
                  return e.enabled;
                })),
                a.orderedModifiers.forEach(function (e) {
                  var t = e.name,
                    n = e.options,
                    i = void 0 === n ? {} : n,
                    r = e.effect;
                  if ("function" == typeof r) {
                    var o = r({ state: a, name: t, instance: u, options: i });
                    l.push(o || function () {});
                  }
                }),
                u.update()
              );
            },
            forceUpdate: function () {
              if (!c) {
                var e = a.elements,
                  t = e.reference,
                  n = e.popper;
                if (Ae(t, n)) {
                  (a.rects = {
                    reference: De(t, Y(n), "fixed" === a.options.strategy),
                    popper: F(n),
                  }),
                    (a.reset = !1),
                    (a.placement = a.options.placement),
                    a.orderedModifiers.forEach(function (e) {
                      return (a.modifiersData[e.name] = Object.assign(
                        {},
                        e.data
                      ));
                    });
                  for (var i = 0; i < a.orderedModifiers.length; i++)
                    if (!0 !== a.reset) {
                      var r = a.orderedModifiers[i],
                        o = r.fn,
                        s = r.options,
                        l = void 0 === s ? {} : s,
                        h = r.name;
                      "function" == typeof o &&
                        (a =
                          o({ state: a, options: l, name: h, instance: u }) ||
                          a);
                    } else (a.reset = !1), (i = -1);
                }
              }
            },
            update:
              ((r = function () {
                return new Promise(function (e) {
                  u.forceUpdate(), e(a);
                });
              }),
              function () {
                return (
                  s ||
                    (s = new Promise(function (e) {
                      Promise.resolve().then(function () {
                        (s = void 0), e(r());
                      });
                    })),
                  s
                );
              }),
            destroy: function () {
              h(), (c = !0);
            },
          };
        if (!Ae(e, t)) return u;
        function h() {
          l.forEach(function (e) {
            return e();
          }),
            (l = []);
        }
        return (
          u.setOptions(n).then(function (e) {
            !c && n.onFirstUpdate && n.onFirstUpdate(e);
          }),
          u
        );
      };
    }
    var Se = Oe(),
      Me = Oe({ defaultModifiers: [re, ke, ne, L, xe, ye, Ce, Z, we] }),
      Le = Oe({ defaultModifiers: [re, ke, ne, L] });
  },
  hsMc: function (e, t, n) {
    (function (e, t) {
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var i, r, o;
      !(function (e, i, r, o) {
        function s(t, n) {
          (this.settings = null),
            (this.options = e.extend({}, s.Defaults, n)),
            (this.$element = e(t)),
            (this._handlers = {}),
            (this._plugins = {}),
            (this._supress = {}),
            (this._current = null),
            (this._speed = null),
            (this._coordinates = []),
            (this._breakpoint = null),
            (this._width = null),
            (this._items = []),
            (this._clones = []),
            (this._mergers = []),
            (this._widths = []),
            (this._invalidated = {}),
            (this._pipe = []),
            (this._drag = {
              time: null,
              target: null,
              pointer: null,
              stage: { start: null, current: null },
              direction: null,
            }),
            (this._states = {
              current: {},
              tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"],
              },
            }),
            e.each(
              ["onResize", "onThrottledResize"],
              e.proxy(function (t, n) {
                this._handlers[n] = e.proxy(this[n], this);
              }, this)
            ),
            e.each(
              s.Plugins,
              e.proxy(function (e, t) {
                this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(
                  this
                );
              }, this)
            ),
            e.each(
              s.Workers,
              e.proxy(function (t, n) {
                this._pipe.push({
                  filter: n.filter,
                  run: e.proxy(n.run, this),
                });
              }, this)
            ),
            this.setup(),
            this.initialize();
        }
        (s.Defaults = {
          items: 3,
          loop: !1,
          center: !1,
          rewind: !1,
          checkVisibility: !0,
          mouseDrag: !0,
          touchDrag: !0,
          pullDrag: !0,
          freeDrag: !1,
          margin: 0,
          stagePadding: 0,
          merge: !1,
          mergeFit: !0,
          autoWidth: !1,
          startPosition: 0,
          rtl: !1,
          smartSpeed: 250,
          fluidSpeed: !1,
          dragEndSpeed: !1,
          responsive: {},
          responsiveRefreshRate: 200,
          responsiveBaseElement: i,
          fallbackEasing: "swing",
          slideTransition: "",
          info: !1,
          nestedItemSelector: !1,
          itemElement: "div",
          stageElement: "div",
          refreshClass: "owl-refresh",
          loadedClass: "owl-loaded",
          loadingClass: "owl-loading",
          rtlClass: "owl-rtl",
          responsiveClass: "owl-responsive",
          dragClass: "owl-drag",
          itemClass: "owl-item",
          stageClass: "owl-stage",
          stageOuterClass: "owl-stage-outer",
          grabClass: "owl-grab",
        }),
          (s.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
          (s.Type = { Event: "event", State: "state" }),
          (s.Plugins = {}),
          (s.Workers = [
            {
              filter: ["width", "settings"],
              run: function () {
                this._width = this.$element.width();
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function (e) {
                e.current =
                  this._items && this._items[this.relative(this._current)];
              },
            },
            {
              filter: ["items", "settings"],
              run: function () {
                this.$stage.children(".cloned").remove();
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function (e) {
                var t = this.settings.margin || "",
                  n = !this.settings.autoWidth,
                  i = this.settings.rtl,
                  r = {
                    width: "auto",
                    "margin-left": i ? t : "",
                    "margin-right": i ? "" : t,
                  };
                !n && this.$stage.children().css(r), (e.css = r);
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function (e) {
                var t =
                    (this.width() / this.settings.items).toFixed(3) -
                    this.settings.margin,
                  n = null,
                  i = this._items.length,
                  r = !this.settings.autoWidth,
                  o = [];
                for (e.items = { merge: !1, width: t }; i--; )
                  (n = this._mergers[i]),
                    (n =
                      (this.settings.mergeFit &&
                        Math.min(n, this.settings.items)) ||
                      n),
                    (e.items.merge = n > 1 || e.items.merge),
                    (o[i] = r ? t * n : this._items[i].width());
                this._widths = o;
              },
            },
            {
              filter: ["items", "settings"],
              run: function () {
                var t = [],
                  n = this._items,
                  i = this.settings,
                  r = Math.max(2 * i.items, 4),
                  o = 2 * Math.ceil(n.length / 2),
                  s = i.loop && n.length ? (i.rewind ? r : Math.max(r, o)) : 0,
                  a = "",
                  l = "";
                for (s /= 2; s > 0; )
                  t.push(this.normalize(t.length / 2, !0)),
                    (a += n[t[t.length - 1]][0].outerHTML),
                    t.push(
                      this.normalize(n.length - 1 - (t.length - 1) / 2, !0)
                    ),
                    (l = n[t[t.length - 1]][0].outerHTML + l),
                    (s -= 1);
                (this._clones = t),
                  e(a).addClass("cloned").appendTo(this.$stage),
                  e(l).addClass("cloned").prependTo(this.$stage);
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function () {
                for (
                  var e = this.settings.rtl ? 1 : -1,
                    t = this._clones.length + this._items.length,
                    n = -1,
                    i = 0,
                    r = 0,
                    o = [];
                  ++n < t;

                )
                  (i = o[n - 1] || 0),
                    (r = this._widths[this.relative(n)] + this.settings.margin),
                    o.push(i + r * e);
                this._coordinates = o;
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function () {
                var e = this.settings.stagePadding,
                  t = this._coordinates,
                  n = {
                    width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
                    "padding-left": e || "",
                    "padding-right": e || "",
                  };
                this.$stage.css(n);
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function (e) {
                var t = this._coordinates.length,
                  n = !this.settings.autoWidth,
                  i = this.$stage.children();
                if (n && e.items.merge)
                  for (; t--; )
                    (e.css.width = this._widths[this.relative(t)]),
                      i.eq(t).css(e.css);
                else n && ((e.css.width = e.items.width), i.css(e.css));
              },
            },
            {
              filter: ["items"],
              run: function () {
                this._coordinates.length < 1 && this.$stage.removeAttr("style");
              },
            },
            {
              filter: ["width", "items", "settings"],
              run: function (e) {
                (e.current = e.current
                  ? this.$stage.children().index(e.current)
                  : 0),
                  (e.current = Math.max(
                    this.minimum(),
                    Math.min(this.maximum(), e.current)
                  )),
                  this.reset(e.current);
              },
            },
            {
              filter: ["position"],
              run: function () {
                this.animate(this.coordinates(this._current));
              },
            },
            {
              filter: ["width", "position", "items", "settings"],
              run: function () {
                var e,
                  t,
                  n,
                  i,
                  r = this.settings.rtl ? 1 : -1,
                  o = 2 * this.settings.stagePadding,
                  s = this.coordinates(this.current()) + o,
                  a = s + this.width() * r,
                  l = [];
                for (n = 0, i = this._coordinates.length; n < i; n++)
                  (e = this._coordinates[n - 1] || 0),
                    (t = Math.abs(this._coordinates[n]) + o * r),
                    ((this.op(e, "<=", s) && this.op(e, ">", a)) ||
                      (this.op(t, "<", s) && this.op(t, ">", a))) &&
                      l.push(n);
                this.$stage.children(".active").removeClass("active"),
                  this.$stage
                    .children(":eq(" + l.join("), :eq(") + ")")
                    .addClass("active"),
                  this.$stage.children(".center").removeClass("center"),
                  this.settings.center &&
                    this.$stage
                      .children()
                      .eq(this.current())
                      .addClass("center");
              },
            },
          ]),
          (s.prototype.initializeStage = function () {
            (this.$stage = this.$element.find("." + this.settings.stageClass)),
              this.$stage.length ||
                (this.$element.addClass(this.options.loadingClass),
                (this.$stage = e("<" + this.settings.stageElement + ">", {
                  class: this.settings.stageClass,
                }).wrap(e("<div/>", { class: this.settings.stageOuterClass }))),
                this.$element.append(this.$stage.parent()));
          }),
          (s.prototype.initializeItems = function () {
            var t = this.$element.find(".owl-item");
            if (t.length)
              return (
                (this._items = t.get().map(function (t) {
                  return e(t);
                })),
                (this._mergers = this._items.map(function () {
                  return 1;
                })),
                void this.refresh()
              );
            this.replace(this.$element.children().not(this.$stage.parent())),
              this.isVisible() ? this.refresh() : this.invalidate("width"),
              this.$element
                .removeClass(this.options.loadingClass)
                .addClass(this.options.loadedClass);
          }),
          (s.prototype.initialize = function () {
            var e, t, n;
            (this.enter("initializing"),
            this.trigger("initialize"),
            this.$element.toggleClass(
              this.settings.rtlClass,
              this.settings.rtl
            ),
            this.settings.autoWidth && !this.is("pre-loading")) &&
              ((e = this.$element.find("img")),
              (t = this.settings.nestedItemSelector
                ? "." + this.settings.nestedItemSelector
                : o),
              (n = this.$element.children(t).width()),
              e.length && n <= 0 && this.preloadAutoWidthImages(e));
            this.initializeStage(),
              this.initializeItems(),
              this.registerEventHandlers(),
              this.leave("initializing"),
              this.trigger("initialized");
          }),
          (s.prototype.isVisible = function () {
            return (
              !this.settings.checkVisibility || this.$element.is(":visible")
            );
          }),
          (s.prototype.setup = function () {
            var t = this.viewport(),
              n = this.options.responsive,
              i = -1,
              r = null;
            n
              ? (e.each(n, function (e) {
                  e <= t && e > i && (i = Number(e));
                }),
                "function" ==
                  typeof (r = e.extend({}, this.options, n[i])).stagePadding &&
                  (r.stagePadding = r.stagePadding()),
                delete r.responsive,
                r.responsiveClass &&
                  this.$element.attr(
                    "class",
                    this.$element
                      .attr("class")
                      .replace(
                        new RegExp(
                          "(" + this.options.responsiveClass + "-)\\S+\\s",
                          "g"
                        ),
                        "$1" + i
                      )
                  ))
              : (r = e.extend({}, this.options)),
              this.trigger("change", {
                property: { name: "settings", value: r },
              }),
              (this._breakpoint = i),
              (this.settings = r),
              this.invalidate("settings"),
              this.trigger("changed", {
                property: { name: "settings", value: this.settings },
              });
          }),
          (s.prototype.optionsLogic = function () {
            this.settings.autoWidth &&
              ((this.settings.stagePadding = !1), (this.settings.merge = !1));
          }),
          (s.prototype.prepare = function (t) {
            var n = this.trigger("prepare", { content: t });
            return (
              n.data ||
                (n.data = e("<" + this.settings.itemElement + "/>")
                  .addClass(this.options.itemClass)
                  .append(t)),
              this.trigger("prepared", { content: n.data }),
              n.data
            );
          }),
          (s.prototype.update = function () {
            for (
              var t = 0,
                n = this._pipe.length,
                i = e.proxy(function (e) {
                  return this[e];
                }, this._invalidated),
                r = {};
              t < n;

            )
              (this._invalidated.all ||
                e.grep(this._pipe[t].filter, i).length > 0) &&
                this._pipe[t].run(r),
                t++;
            (this._invalidated = {}), !this.is("valid") && this.enter("valid");
          }),
          (s.prototype.width = function (e) {
            switch ((e = e || s.Width.Default)) {
              case s.Width.Inner:
              case s.Width.Outer:
                return this._width;
              default:
                return (
                  this._width -
                  2 * this.settings.stagePadding +
                  this.settings.margin
                );
            }
          }),
          (s.prototype.refresh = function () {
            this.enter("refreshing"),
              this.trigger("refresh"),
              this.setup(),
              this.optionsLogic(),
              this.$element.addClass(this.options.refreshClass),
              this.update(),
              this.$element.removeClass(this.options.refreshClass),
              this.leave("refreshing"),
              this.trigger("refreshed");
          }),
          (s.prototype.onThrottledResize = function () {
            i.clearTimeout(this.resizeTimer),
              (this.resizeTimer = i.setTimeout(
                this._handlers.onResize,
                this.settings.responsiveRefreshRate
              ));
          }),
          (s.prototype.onResize = function () {
            return (
              !!this._items.length &&
              this._width !== this.$element.width() &&
              !!this.isVisible() &&
              (this.enter("resizing"),
              this.trigger("resize").isDefaultPrevented()
                ? (this.leave("resizing"), !1)
                : (this.invalidate("width"),
                  this.refresh(),
                  this.leave("resizing"),
                  void this.trigger("resized")))
            );
          }),
          (s.prototype.registerEventHandlers = function () {
            e.support.transition &&
              this.$stage.on(
                e.support.transition.end + ".owl.core",
                e.proxy(this.onTransitionEnd, this)
              ),
              !1 !== this.settings.responsive &&
                this.on(i, "resize", this._handlers.onThrottledResize),
              this.settings.mouseDrag &&
                (this.$element.addClass(this.options.dragClass),
                this.$stage.on(
                  "mousedown.owl.core",
                  e.proxy(this.onDragStart, this)
                ),
                this.$stage.on(
                  "dragstart.owl.core selectstart.owl.core",
                  function () {
                    return !1;
                  }
                )),
              this.settings.touchDrag &&
                (this.$stage.on(
                  "touchstart.owl.core",
                  e.proxy(this.onDragStart, this)
                ),
                this.$stage.on(
                  "touchcancel.owl.core",
                  e.proxy(this.onDragEnd, this)
                ));
          }),
          (s.prototype.onDragStart = function (t) {
            var n = null;
            3 !== t.which &&
              (e.support.transform
                ? (n = {
                    x: (n = this.$stage
                      .css("transform")
                      .replace(/.*\(|\)| /g, "")
                      .split(","))[16 === n.length ? 12 : 4],
                    y: n[16 === n.length ? 13 : 5],
                  })
                : ((n = this.$stage.position()),
                  (n = {
                    x: this.settings.rtl
                      ? n.left +
                        this.$stage.width() -
                        this.width() +
                        this.settings.margin
                      : n.left,
                    y: n.top,
                  })),
              this.is("animating") &&
                (e.support.transform ? this.animate(n.x) : this.$stage.stop(),
                this.invalidate("position")),
              this.$element.toggleClass(
                this.options.grabClass,
                "mousedown" === t.type
              ),
              this.speed(0),
              (this._drag.time = new Date().getTime()),
              (this._drag.target = e(t.target)),
              (this._drag.stage.start = n),
              (this._drag.stage.current = n),
              (this._drag.pointer = this.pointer(t)),
              e(r).on(
                "mouseup.owl.core touchend.owl.core",
                e.proxy(this.onDragEnd, this)
              ),
              e(r).one(
                "mousemove.owl.core touchmove.owl.core",
                e.proxy(function (t) {
                  var n = this.difference(this._drag.pointer, this.pointer(t));
                  e(r).on(
                    "mousemove.owl.core touchmove.owl.core",
                    e.proxy(this.onDragMove, this)
                  ),
                    (Math.abs(n.x) < Math.abs(n.y) && this.is("valid")) ||
                      (t.preventDefault(),
                      this.enter("dragging"),
                      this.trigger("drag"));
                }, this)
              ));
          }),
          (s.prototype.onDragMove = function (e) {
            var t = null,
              n = null,
              i = null,
              r = this.difference(this._drag.pointer, this.pointer(e)),
              o = this.difference(this._drag.stage.start, r);
            this.is("dragging") &&
              (e.preventDefault(),
              this.settings.loop
                ? ((t = this.coordinates(this.minimum())),
                  (n = this.coordinates(this.maximum() + 1) - t),
                  (o.x = ((((o.x - t) % n) + n) % n) + t))
                : ((t = this.settings.rtl
                    ? this.coordinates(this.maximum())
                    : this.coordinates(this.minimum())),
                  (n = this.settings.rtl
                    ? this.coordinates(this.minimum())
                    : this.coordinates(this.maximum())),
                  (i = this.settings.pullDrag ? (-1 * r.x) / 5 : 0),
                  (o.x = Math.max(Math.min(o.x, t + i), n + i))),
              (this._drag.stage.current = o),
              this.animate(o.x));
          }),
          (s.prototype.onDragEnd = function (t) {
            var n = this.difference(this._drag.pointer, this.pointer(t)),
              i = this._drag.stage.current,
              o = (n.x > 0) ^ this.settings.rtl ? "left" : "right";
            e(r).off(".owl.core"),
              this.$element.removeClass(this.options.grabClass),
              ((0 !== n.x && this.is("dragging")) || !this.is("valid")) &&
                (this.speed(
                  this.settings.dragEndSpeed || this.settings.smartSpeed
                ),
                this.current(
                  this.closest(i.x, 0 !== n.x ? o : this._drag.direction)
                ),
                this.invalidate("position"),
                this.update(),
                (this._drag.direction = o),
                (Math.abs(n.x) > 3 ||
                  new Date().getTime() - this._drag.time > 300) &&
                  this._drag.target.one("click.owl.core", function () {
                    return !1;
                  })),
              this.is("dragging") &&
                (this.leave("dragging"), this.trigger("dragged"));
          }),
          (s.prototype.closest = function (t, n) {
            var i = -1,
              r = this.width(),
              s = this.coordinates();
            return (
              this.settings.freeDrag ||
                e.each(
                  s,
                  e.proxy(function (e, a) {
                    return (
                      "left" === n && t > a - 30 && t < a + 30
                        ? (i = e)
                        : "right" === n && t > a - r - 30 && t < a - r + 30
                        ? (i = e + 1)
                        : this.op(t, "<", a) &&
                          this.op(t, ">", s[e + 1] !== o ? s[e + 1] : a - r) &&
                          (i = "left" === n ? e + 1 : e),
                      -1 === i
                    );
                  }, this)
                ),
              this.settings.loop ||
                (this.op(t, ">", s[this.minimum()])
                  ? (i = t = this.minimum())
                  : this.op(t, "<", s[this.maximum()]) &&
                    (i = t = this.maximum())),
              i
            );
          }),
          (s.prototype.animate = function (t) {
            var n = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
              n && (this.enter("animating"), this.trigger("translate")),
              e.support.transform3d && e.support.transition
                ? this.$stage.css({
                    transform: "translate3d(" + t + "px,0px,0px)",
                    transition:
                      this.speed() / 1e3 +
                      "s" +
                      (this.settings.slideTransition
                        ? " " + this.settings.slideTransition
                        : ""),
                  })
                : n
                ? this.$stage.animate(
                    { left: t + "px" },
                    this.speed(),
                    this.settings.fallbackEasing,
                    e.proxy(this.onTransitionEnd, this)
                  )
                : this.$stage.css({ left: t + "px" });
          }),
          (s.prototype.is = function (e) {
            return this._states.current[e] && this._states.current[e] > 0;
          }),
          (s.prototype.current = function (e) {
            if (e === o) return this._current;
            if (0 === this._items.length) return o;
            if (((e = this.normalize(e)), this._current !== e)) {
              var t = this.trigger("change", {
                property: { name: "position", value: e },
              });
              t.data !== o && (e = this.normalize(t.data)),
                (this._current = e),
                this.invalidate("position"),
                this.trigger("changed", {
                  property: { name: "position", value: this._current },
                });
            }
            return this._current;
          }),
          (s.prototype.invalidate = function (t) {
            return (
              "string" === e.type(t) &&
                ((this._invalidated[t] = !0),
                this.is("valid") && this.leave("valid")),
              e.map(this._invalidated, function (e, t) {
                return t;
              })
            );
          }),
          (s.prototype.reset = function (e) {
            (e = this.normalize(e)) !== o &&
              ((this._speed = 0),
              (this._current = e),
              this.suppress(["translate", "translated"]),
              this.animate(this.coordinates(e)),
              this.release(["translate", "translated"]));
          }),
          (s.prototype.normalize = function (e, t) {
            var n = this._items.length,
              i = t ? 0 : this._clones.length;
            return (
              !this.isNumeric(e) || n < 1
                ? (e = o)
                : (e < 0 || e >= n + i) &&
                  (e = ((((e - i / 2) % n) + n) % n) + i / 2),
              e
            );
          }),
          (s.prototype.relative = function (e) {
            return (e -= this._clones.length / 2), this.normalize(e, !0);
          }),
          (s.prototype.maximum = function (e) {
            var t,
              n,
              i,
              r = this.settings,
              o = this._coordinates.length;
            if (r.loop) o = this._clones.length / 2 + this._items.length - 1;
            else if (r.autoWidth || r.merge) {
              if ((t = this._items.length))
                for (
                  n = this._items[--t].width(), i = this.$element.width();
                  t-- &&
                  !((n += this._items[t].width() + this.settings.margin) > i);

                );
              o = t + 1;
            } else
              o = r.center
                ? this._items.length - 1
                : this._items.length - r.items;
            return e && (o -= this._clones.length / 2), Math.max(o, 0);
          }),
          (s.prototype.minimum = function (e) {
            return e ? 0 : this._clones.length / 2;
          }),
          (s.prototype.items = function (e) {
            return e === o
              ? this._items.slice()
              : ((e = this.normalize(e, !0)), this._items[e]);
          }),
          (s.prototype.mergers = function (e) {
            return e === o
              ? this._mergers.slice()
              : ((e = this.normalize(e, !0)), this._mergers[e]);
          }),
          (s.prototype.clones = function (t) {
            var n = this._clones.length / 2,
              i = n + this._items.length,
              r = function (e) {
                return e % 2 == 0 ? i + e / 2 : n - (e + 1) / 2;
              };
            return t === o
              ? e.map(this._clones, function (e, t) {
                  return r(t);
                })
              : e.map(this._clones, function (e, n) {
                  return e === t ? r(n) : null;
                });
          }),
          (s.prototype.speed = function (e) {
            return e !== o && (this._speed = e), this._speed;
          }),
          (s.prototype.coordinates = function (t) {
            var n,
              i = 1,
              r = t - 1;
            return t === o
              ? e.map(
                  this._coordinates,
                  e.proxy(function (e, t) {
                    return this.coordinates(t);
                  }, this)
                )
              : (this.settings.center
                  ? (this.settings.rtl && ((i = -1), (r = t + 1)),
                    (n = this._coordinates[t]),
                    (n +=
                      ((this.width() - n + (this._coordinates[r] || 0)) / 2) *
                      i))
                  : (n = this._coordinates[r] || 0),
                (n = Math.ceil(n)));
          }),
          (s.prototype.duration = function (e, t, n) {
            return 0 === n
              ? 0
              : Math.min(Math.max(Math.abs(t - e), 1), 6) *
                  Math.abs(n || this.settings.smartSpeed);
          }),
          (s.prototype.to = function (e, t) {
            var n = this.current(),
              i = null,
              r = e - this.relative(n),
              o = (r > 0) - (r < 0),
              s = this._items.length,
              a = this.minimum(),
              l = this.maximum();
            this.settings.loop
              ? (!this.settings.rewind &&
                  Math.abs(r) > s / 2 &&
                  (r += -1 * o * s),
                (i = (((((e = n + r) - a) % s) + s) % s) + a) !== e &&
                  i - r <= l &&
                  i - r > 0 &&
                  ((n = i - r), (e = i), this.reset(n)))
              : this.settings.rewind
              ? (e = ((e % (l += 1)) + l) % l)
              : (e = Math.max(a, Math.min(l, e))),
              this.speed(this.duration(n, e, t)),
              this.current(e),
              this.isVisible() && this.update();
          }),
          (s.prototype.next = function (e) {
            (e = e || !1), this.to(this.relative(this.current()) + 1, e);
          }),
          (s.prototype.prev = function (e) {
            (e = e || !1), this.to(this.relative(this.current()) - 1, e);
          }),
          (s.prototype.onTransitionEnd = function (e) {
            if (
              e !== o &&
              (e.stopPropagation(),
              (e.target || e.srcElement || e.originalTarget) !==
                this.$stage.get(0))
            )
              return !1;
            this.leave("animating"), this.trigger("translated");
          }),
          (s.prototype.viewport = function () {
            var t;
            return (
              this.options.responsiveBaseElement !== i
                ? (t = e(this.options.responsiveBaseElement).width())
                : i.innerWidth
                ? (t = i.innerWidth)
                : r.documentElement && r.documentElement.clientWidth
                ? (t = r.documentElement.clientWidth)
                : console.warn("Can not detect viewport width."),
              t
            );
          }),
          (s.prototype.replace = function (n) {
            this.$stage.empty(),
              (this._items = []),
              n && (n = n instanceof t ? n : e(n)),
              this.settings.nestedItemSelector &&
                (n = n.find("." + this.settings.nestedItemSelector)),
              n
                .filter(function () {
                  return 1 === this.nodeType;
                })
                .each(
                  e.proxy(function (e, t) {
                    (t = this.prepare(t)),
                      this.$stage.append(t),
                      this._items.push(t),
                      this._mergers.push(
                        1 *
                          t
                            .find("[data-merge]")
                            .addBack("[data-merge]")
                            .attr("data-merge") || 1
                      );
                  }, this)
                ),
              this.reset(
                this.isNumeric(this.settings.startPosition)
                  ? this.settings.startPosition
                  : 0
              ),
              this.invalidate("items");
          }),
          (s.prototype.add = function (n, i) {
            var r = this.relative(this._current);
            (i = i === o ? this._items.length : this.normalize(i, !0)),
              (n = n instanceof t ? n : e(n)),
              this.trigger("add", { content: n, position: i }),
              (n = this.prepare(n)),
              0 === this._items.length || i === this._items.length
                ? (0 === this._items.length && this.$stage.append(n),
                  0 !== this._items.length && this._items[i - 1].after(n),
                  this._items.push(n),
                  this._mergers.push(
                    1 *
                      n
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  ))
                : (this._items[i].before(n),
                  this._items.splice(i, 0, n),
                  this._mergers.splice(
                    i,
                    0,
                    1 *
                      n
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  )),
              this._items[r] && this.reset(this._items[r].index()),
              this.invalidate("items"),
              this.trigger("added", { content: n, position: i });
          }),
          (s.prototype.remove = function (e) {
            (e = this.normalize(e, !0)) !== o &&
              (this.trigger("remove", { content: this._items[e], position: e }),
              this._items[e].remove(),
              this._items.splice(e, 1),
              this._mergers.splice(e, 1),
              this.invalidate("items"),
              this.trigger("removed", { content: null, position: e }));
          }),
          (s.prototype.preloadAutoWidthImages = function (t) {
            t.each(
              e.proxy(function (t, n) {
                this.enter("pre-loading"),
                  (n = e(n)),
                  e(new Image())
                    .one(
                      "load",
                      e.proxy(function (e) {
                        n.attr("src", e.target.src),
                          n.css("opacity", 1),
                          this.leave("pre-loading"),
                          !this.is("pre-loading") &&
                            !this.is("initializing") &&
                            this.refresh();
                      }, this)
                    )
                    .attr(
                      "src",
                      n.attr("src") ||
                        n.attr("data-src") ||
                        n.attr("data-src-retina")
                    );
              }, this)
            );
          }),
          (s.prototype.destroy = function () {
            for (var t in (this.$element.off(".owl.core"),
            this.$stage.off(".owl.core"),
            e(r).off(".owl.core"),
            !1 !== this.settings.responsive &&
              (i.clearTimeout(this.resizeTimer),
              this.off(i, "resize", this._handlers.onThrottledResize)),
            this._plugins))
              this._plugins[t].destroy();
            this.$stage.children(".cloned").remove(),
              this.$stage.unwrap(),
              this.$stage.children().contents().unwrap(),
              this.$stage.children().unwrap(),
              this.$stage.remove(),
              this.$element
                .removeClass(this.options.refreshClass)
                .removeClass(this.options.loadingClass)
                .removeClass(this.options.loadedClass)
                .removeClass(this.options.rtlClass)
                .removeClass(this.options.dragClass)
                .removeClass(this.options.grabClass)
                .attr(
                  "class",
                  this.$element
                    .attr("class")
                    .replace(
                      new RegExp(
                        this.options.responsiveClass + "-\\S+\\s",
                        "g"
                      ),
                      ""
                    )
                )
                .removeData("owl.carousel");
          }),
          (s.prototype.op = function (e, t, n) {
            var i = this.settings.rtl;
            switch (t) {
              case "<":
                return i ? e > n : e < n;
              case ">":
                return i ? e < n : e > n;
              case ">=":
                return i ? e <= n : e >= n;
              case "<=":
                return i ? e >= n : e <= n;
            }
          }),
          (s.prototype.on = function (e, t, n, i) {
            e.addEventListener
              ? e.addEventListener(t, n, i)
              : e.attachEvent && e.attachEvent("on" + t, n);
          }),
          (s.prototype.off = function (e, t, n, i) {
            e.removeEventListener
              ? e.removeEventListener(t, n, i)
              : e.detachEvent && e.detachEvent("on" + t, n);
          }),
          (s.prototype.trigger = function (t, n, i, r, o) {
            var a = {
                item: { count: this._items.length, index: this.current() },
              },
              l = e.camelCase(
                e
                  .grep(["on", t, i], function (e) {
                    return e;
                  })
                  .join("-")
                  .toLowerCase()
              ),
              c = e.Event(
                [t, "owl", i || "carousel"].join(".").toLowerCase(),
                e.extend({ relatedTarget: this }, a, n)
              );
            return (
              this._supress[t] ||
                (e.each(this._plugins, function (e, t) {
                  t.onTrigger && t.onTrigger(c);
                }),
                this.register({ type: s.Type.Event, name: t }),
                this.$element.trigger(c),
                this.settings &&
                  "function" == typeof this.settings[l] &&
                  this.settings[l].call(this, c)),
              c
            );
          }),
          (s.prototype.enter = function (t) {
            e.each(
              [t].concat(this._states.tags[t] || []),
              e.proxy(function (e, t) {
                this._states.current[t] === o && (this._states.current[t] = 0),
                  this._states.current[t]++;
              }, this)
            );
          }),
          (s.prototype.leave = function (t) {
            e.each(
              [t].concat(this._states.tags[t] || []),
              e.proxy(function (e, t) {
                this._states.current[t]--;
              }, this)
            );
          }),
          (s.prototype.register = function (t) {
            if (t.type === s.Type.Event) {
              if (
                (e.event.special[t.name] || (e.event.special[t.name] = {}),
                !e.event.special[t.name].owl)
              ) {
                var n = e.event.special[t.name]._default;
                (e.event.special[t.name]._default = function (e) {
                  return !n ||
                    !n.apply ||
                    (e.namespace && -1 !== e.namespace.indexOf("owl"))
                    ? e.namespace && e.namespace.indexOf("owl") > -1
                    : n.apply(this, arguments);
                }),
                  (e.event.special[t.name].owl = !0);
              }
            } else
              t.type === s.Type.State &&
                (this._states.tags[t.name]
                  ? (this._states.tags[t.name] = this._states.tags[
                      t.name
                    ].concat(t.tags))
                  : (this._states.tags[t.name] = t.tags),
                (this._states.tags[t.name] = e.grep(
                  this._states.tags[t.name],
                  e.proxy(function (n, i) {
                    return e.inArray(n, this._states.tags[t.name]) === i;
                  }, this)
                )));
          }),
          (s.prototype.suppress = function (t) {
            e.each(
              t,
              e.proxy(function (e, t) {
                this._supress[t] = !0;
              }, this)
            );
          }),
          (s.prototype.release = function (t) {
            e.each(
              t,
              e.proxy(function (e, t) {
                delete this._supress[t];
              }, this)
            );
          }),
          (s.prototype.pointer = function (e) {
            var t = { x: null, y: null };
            return (
              (e =
                (e = e.originalEvent || e || i.event).touches &&
                e.touches.length
                  ? e.touches[0]
                  : e.changedTouches && e.changedTouches.length
                  ? e.changedTouches[0]
                  : e).pageX
                ? ((t.x = e.pageX), (t.y = e.pageY))
                : ((t.x = e.clientX), (t.y = e.clientY)),
              t
            );
          }),
          (s.prototype.isNumeric = function (e) {
            return !isNaN(parseFloat(e));
          }),
          (s.prototype.difference = function (e, t) {
            return { x: e.x - t.x, y: e.y - t.y };
          }),
          (e.fn.owlCarousel = function (t) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
              var r = e(this),
                o = r.data("owl.carousel");
              o ||
                ((o = new s(this, "object" == n(t) && t)),
                r.data("owl.carousel", o),
                e.each(
                  [
                    "next",
                    "prev",
                    "to",
                    "destroy",
                    "refresh",
                    "replace",
                    "add",
                    "remove",
                  ],
                  function (t, n) {
                    o.register({ type: s.Type.Event, name: n }),
                      o.$element.on(
                        n + ".owl.carousel.core",
                        e.proxy(function (e) {
                          e.namespace &&
                            e.relatedTarget !== this &&
                            (this.suppress([n]),
                            o[n].apply(this, [].slice.call(arguments, 1)),
                            this.release([n]));
                        }, o)
                      );
                  }
                )),
                "string" == typeof t && "_" !== t.charAt(0) && o[t].apply(o, i);
            });
          }),
          (e.fn.owlCarousel.Constructor = s);
      })(window.Zepto || e, window, document),
        (i = window.Zepto || e),
        (r = window),
        document,
        ((o = function (e) {
          (this._core = e),
            (this._interval = null),
            (this._visible = null),
            (this._handlers = {
              "initialized.owl.carousel": i.proxy(function (e) {
                e.namespace && this._core.settings.autoRefresh && this.watch();
              }, this),
            }),
            (this._core.options = i.extend({}, o.Defaults, this._core.options)),
            this._core.$element.on(this._handlers);
        }).Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
        (o.prototype.watch = function () {
          this._interval ||
            ((this._visible = this._core.isVisible()),
            (this._interval = r.setInterval(
              i.proxy(this.refresh, this),
              this._core.settings.autoRefreshInterval
            )));
        }),
        (o.prototype.refresh = function () {
          this._core.isVisible() !== this._visible &&
            ((this._visible = !this._visible),
            this._core.$element.toggleClass("owl-hidden", !this._visible),
            this._visible &&
              this._core.invalidate("width") &&
              this._core.refresh());
        }),
        (o.prototype.destroy = function () {
          var e, t;
          for (e in (r.clearInterval(this._interval), this._handlers))
            this._core.$element.off(e, this._handlers[e]);
          for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null);
        }),
        (i.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o),
        (function (e, t, n, i) {
          var r = function (t) {
            (this._core = t),
              (this._loaded = []),
              (this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
                  e.proxy(function (t) {
                    if (
                      t.namespace &&
                      this._core.settings &&
                      this._core.settings.lazyLoad &&
                      ((t.property && "position" == t.property.name) ||
                        "initialized" == t.type)
                    ) {
                      var n = this._core.settings,
                        i = (n.center && Math.ceil(n.items / 2)) || n.items,
                        r = (n.center && -1 * i) || 0,
                        o =
                          (t.property && void 0 !== t.property.value
                            ? t.property.value
                            : this._core.current()) + r,
                        s = this._core.clones().length,
                        a = e.proxy(function (e, t) {
                          this.load(t);
                        }, this);
                      for (
                        n.lazyLoadEager > 0 &&
                        ((i += n.lazyLoadEager),
                        n.loop && ((o -= n.lazyLoadEager), i++));
                        r++ < i;

                      )
                        this.load(s / 2 + this._core.relative(o)),
                          s &&
                            e.each(
                              this._core.clones(this._core.relative(o)),
                              a
                            ),
                          o++;
                    }
                  }, this),
              }),
              (this._core.options = e.extend(
                {},
                r.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers);
          };
          (r.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
            (r.prototype.load = function (n) {
              var i = this._core.$stage.children().eq(n),
                r = i && i.find(".owl-lazy");
              !r ||
                e.inArray(i.get(0), this._loaded) > -1 ||
                (r.each(
                  e.proxy(function (n, i) {
                    var r,
                      o = e(i),
                      s =
                        (t.devicePixelRatio > 1 && o.attr("data-src-retina")) ||
                        o.attr("data-src") ||
                        o.attr("data-srcset");
                    this._core.trigger("load", { element: o, url: s }, "lazy"),
                      o.is("img")
                        ? o
                            .one(
                              "load.owl.lazy",
                              e.proxy(function () {
                                o.css("opacity", 1),
                                  this._core.trigger(
                                    "loaded",
                                    { element: o, url: s },
                                    "lazy"
                                  );
                              }, this)
                            )
                            .attr("src", s)
                        : o.is("source")
                        ? o
                            .one(
                              "load.owl.lazy",
                              e.proxy(function () {
                                this._core.trigger(
                                  "loaded",
                                  { element: o, url: s },
                                  "lazy"
                                );
                              }, this)
                            )
                            .attr("srcset", s)
                        : (((r = new Image()).onload = e.proxy(function () {
                            o.css({
                              "background-image": 'url("' + s + '")',
                              opacity: "1",
                            }),
                              this._core.trigger(
                                "loaded",
                                { element: o, url: s },
                                "lazy"
                              );
                          }, this)),
                          (r.src = s));
                  }, this)
                ),
                this._loaded.push(i.get(0)));
            }),
            (r.prototype.destroy = function () {
              var e, t;
              for (e in this.handlers)
                this._core.$element.off(e, this.handlers[e]);
              for (t in Object.getOwnPropertyNames(this))
                "function" != typeof this[t] && (this[t] = null);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.Lazy = r);
        })(window.Zepto || e, window, document),
        (function (e, t, n, i) {
          var r = function (n) {
            (this._core = n),
              (this._previousHeight = null),
              (this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": e.proxy(
                  function (e) {
                    e.namespace &&
                      this._core.settings.autoHeight &&
                      this.update();
                  },
                  this
                ),
                "changed.owl.carousel": e.proxy(function (e) {
                  e.namespace &&
                    this._core.settings.autoHeight &&
                    "position" === e.property.name &&
                    this.update();
                }, this),
                "loaded.owl.lazy": e.proxy(function (e) {
                  e.namespace &&
                    this._core.settings.autoHeight &&
                    e.element
                      .closest("." + this._core.settings.itemClass)
                      .index() === this._core.current() &&
                    this.update();
                }, this),
              }),
              (this._core.options = e.extend(
                {},
                r.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers),
              (this._intervalId = null);
            var i = this;
            e(t).on("load", function () {
              i._core.settings.autoHeight && i.update();
            }),
              e(t).resize(function () {
                i._core.settings.autoHeight &&
                  (null != i._intervalId && clearTimeout(i._intervalId),
                  (i._intervalId = setTimeout(function () {
                    i.update();
                  }, 250)));
              });
          };
          (r.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
            (r.prototype.update = function () {
              var t = this._core._current,
                n = t + this._core.settings.items,
                i = this._core.settings.lazyLoad,
                r = this._core.$stage.children().toArray().slice(t, n),
                o = [],
                s = 0;
              e.each(r, function (t, n) {
                o.push(e(n).height());
              }),
                (s = Math.max.apply(null, o)) <= 1 &&
                  i &&
                  this._previousHeight &&
                  (s = this._previousHeight),
                (this._previousHeight = s),
                this._core.$stage
                  .parent()
                  .height(s)
                  .addClass(this._core.settings.autoHeightClass);
            }),
            (r.prototype.destroy = function () {
              var e, t;
              for (e in this._handlers)
                this._core.$element.off(e, this._handlers[e]);
              for (t in Object.getOwnPropertyNames(this))
                "function" != typeof this[t] && (this[t] = null);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.AutoHeight = r);
        })(window.Zepto || e, window, document),
        (function (e, t, n, i) {
          var r = function (t) {
            (this._core = t),
              (this._videos = {}),
              (this._playing = null),
              (this._handlers = {
                "initialized.owl.carousel": e.proxy(function (e) {
                  e.namespace &&
                    this._core.register({
                      type: "state",
                      name: "playing",
                      tags: ["interacting"],
                    });
                }, this),
                "resize.owl.carousel": e.proxy(function (e) {
                  e.namespace &&
                    this._core.settings.video &&
                    this.isInFullScreen() &&
                    e.preventDefault();
                }, this),
                "refreshed.owl.carousel": e.proxy(function (e) {
                  e.namespace &&
                    this._core.is("resizing") &&
                    this._core.$stage.find(".cloned .owl-video-frame").remove();
                }, this),
                "changed.owl.carousel": e.proxy(function (e) {
                  e.namespace &&
                    "position" === e.property.name &&
                    this._playing &&
                    this.stop();
                }, this),
                "prepared.owl.carousel": e.proxy(function (t) {
                  if (t.namespace) {
                    var n = e(t.content).find(".owl-video");
                    n.length &&
                      (n.css("display", "none"), this.fetch(n, e(t.content)));
                  }
                }, this),
              }),
              (this._core.options = e.extend(
                {},
                r.Defaults,
                this._core.options
              )),
              this._core.$element.on(this._handlers),
              this._core.$element.on(
                "click.owl.video",
                ".owl-video-play-icon",
                e.proxy(function (e) {
                  this.play(e);
                }, this)
              );
          };
          (r.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
            (r.prototype.fetch = function (e, t) {
              var n = e.attr("data-vimeo-id")
                  ? "vimeo"
                  : e.attr("data-vzaar-id")
                  ? "vzaar"
                  : "youtube",
                i =
                  e.attr("data-vimeo-id") ||
                  e.attr("data-youtube-id") ||
                  e.attr("data-vzaar-id"),
                r = e.attr("data-width") || this._core.settings.videoWidth,
                o = e.attr("data-height") || this._core.settings.videoHeight,
                s = e.attr("href");
              if (!s) throw new Error("Missing video URL.");
              if (
                (i = s.match(
                  /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                ))[3].indexOf("youtu") > -1
              )
                n = "youtube";
              else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
              else {
                if (!(i[3].indexOf("vzaar") > -1))
                  throw new Error("Video URL not supported.");
                n = "vzaar";
              }
              (i = i[6]),
                (this._videos[s] = { type: n, id: i, width: r, height: o }),
                t.attr("data-video", s),
                this.thumbnail(e, this._videos[s]);
            }),
            (r.prototype.thumbnail = function (t, n) {
              var i,
                r,
                o =
                  n.width && n.height
                    ? "width:" + n.width + "px;height:" + n.height + "px;"
                    : "",
                s = t.find("img"),
                a = "src",
                l = "",
                c = this._core.settings,
                u = function (n) {
                  '<div class="owl-video-play-icon"></div>',
                    (i = c.lazyLoad
                      ? e("<div/>", { class: "owl-video-tn " + l, srcType: n })
                      : e("<div/>", {
                          class: "owl-video-tn",
                          style: "opacity:1;background-image:url(" + n + ")",
                        })),
                    t.after(i),
                    t.after('<div class="owl-video-play-icon"></div>');
                };
              if (
                (t.wrap(e("<div/>", { class: "owl-video-wrapper", style: o })),
                this._core.settings.lazyLoad &&
                  ((a = "data-src"), (l = "owl-lazy")),
                s.length)
              )
                return u(s.attr(a)), s.remove(), !1;
              "youtube" === n.type
                ? ((r = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg"),
                  u(r))
                : "vimeo" === n.type
                ? e.ajax({
                    type: "GET",
                    url: "//vimeo.com/api/v2/video/" + n.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (e) {
                      (r = e[0].thumbnail_large), u(r);
                    },
                  })
                : "vzaar" === n.type &&
                  e.ajax({
                    type: "GET",
                    url: "//vzaar.com/api/videos/" + n.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function (e) {
                      (r = e.framegrab_url), u(r);
                    },
                  });
            }),
            (r.prototype.stop = function () {
              this._core.trigger("stop", null, "video"),
                this._playing.find(".owl-video-frame").remove(),
                this._playing.removeClass("owl-video-playing"),
                (this._playing = null),
                this._core.leave("playing"),
                this._core.trigger("stopped", null, "video");
            }),
            (r.prototype.play = function (t) {
              var n,
                i = e(t.target).closest("." + this._core.settings.itemClass),
                r = this._videos[i.attr("data-video")],
                o = r.width || "100%",
                s = r.height || this._core.$stage.height();
              this._playing ||
                (this._core.enter("playing"),
                this._core.trigger("play", null, "video"),
                (i = this._core.items(this._core.relative(i.index()))),
                this._core.reset(i.index()),
                (n = e(
                  '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
                )).attr("height", s),
                n.attr("width", o),
                "youtube" === r.type
                  ? n.attr(
                      "src",
                      "//www.youtube.com/embed/" +
                        r.id +
                        "?autoplay=1&rel=0&v=" +
                        r.id
                    )
                  : "vimeo" === r.type
                  ? n.attr(
                      "src",
                      "//player.vimeo.com/video/" + r.id + "?autoplay=1"
                    )
                  : "vzaar" === r.type &&
                    n.attr(
                      "src",
                      "//view.vzaar.com/" + r.id + "/player?autoplay=true"
                    ),
                e(n)
                  .wrap('<div class="owl-video-frame" />')
                  .insertAfter(i.find(".owl-video")),
                (this._playing = i.addClass("owl-video-playing")));
            }),
            (r.prototype.isInFullScreen = function () {
              var t =
                n.fullscreenElement ||
                n.mozFullScreenElement ||
                n.webkitFullscreenElement;
              return t && e(t).parent().hasClass("owl-video-frame");
            }),
            (r.prototype.destroy = function () {
              var e, t;
              for (e in (this._core.$element.off("click.owl.video"),
              this._handlers))
                this._core.$element.off(e, this._handlers[e]);
              for (t in Object.getOwnPropertyNames(this))
                "function" != typeof this[t] && (this[t] = null);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.Video = r);
        })(window.Zepto || e, window, document),
        (function (e, t, n, i) {
          var r = function (t) {
            (this.core = t),
              (this.core.options = e.extend({}, r.Defaults, this.core.options)),
              (this.swapping = !0),
              (this.previous = i),
              (this.next = i),
              (this.handlers = {
                "change.owl.carousel": e.proxy(function (e) {
                  e.namespace &&
                    "position" == e.property.name &&
                    ((this.previous = this.core.current()),
                    (this.next = e.property.value));
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
                  e.proxy(function (e) {
                    e.namespace && (this.swapping = "translated" == e.type);
                  }, this),
                "translate.owl.carousel": e.proxy(function (e) {
                  e.namespace &&
                    this.swapping &&
                    (this.core.options.animateOut ||
                      this.core.options.animateIn) &&
                    this.swap();
                }, this),
              }),
              this.core.$element.on(this.handlers);
          };
          (r.Defaults = { animateOut: !1, animateIn: !1 }),
            (r.prototype.swap = function () {
              if (
                1 === this.core.settings.items &&
                e.support.animation &&
                e.support.transition
              ) {
                this.core.speed(0);
                var t,
                  n = e.proxy(this.clear, this),
                  i = this.core.$stage.children().eq(this.previous),
                  r = this.core.$stage.children().eq(this.next),
                  o = this.core.settings.animateIn,
                  s = this.core.settings.animateOut;
                this.core.current() !== this.previous &&
                  (s &&
                    ((t =
                      this.core.coordinates(this.previous) -
                      this.core.coordinates(this.next)),
                    i
                      .one(e.support.animation.end, n)
                      .css({ left: t + "px" })
                      .addClass("animated owl-animated-out")
                      .addClass(s)),
                  o &&
                    r
                      .one(e.support.animation.end, n)
                      .addClass("animated owl-animated-in")
                      .addClass(o));
              }
            }),
            (r.prototype.clear = function (t) {
              e(t.target)
                .css({ left: "" })
                .removeClass("animated owl-animated-out owl-animated-in")
                .removeClass(this.core.settings.animateIn)
                .removeClass(this.core.settings.animateOut),
                this.core.onTransitionEnd();
            }),
            (r.prototype.destroy = function () {
              var e, t;
              for (e in this.handlers)
                this.core.$element.off(e, this.handlers[e]);
              for (t in Object.getOwnPropertyNames(this))
                "function" != typeof this[t] && (this[t] = null);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.Animate = r);
        })(window.Zepto || e, window, document),
        (function (e, t, n, i) {
          var r = function (t) {
            (this._core = t),
              (this._call = null),
              (this._time = 0),
              (this._timeout = 0),
              (this._paused = !0),
              (this._handlers = {
                "changed.owl.carousel": e.proxy(function (e) {
                  e.namespace && "settings" === e.property.name
                    ? this._core.settings.autoplay
                      ? this.play()
                      : this.stop()
                    : e.namespace &&
                      "position" === e.property.name &&
                      this._paused &&
                      (this._time = 0);
                }, this),
                "initialized.owl.carousel": e.proxy(function (e) {
                  e.namespace && this._core.settings.autoplay && this.play();
                }, this),
                "play.owl.autoplay": e.proxy(function (e, t, n) {
                  e.namespace && this.play(t, n);
                }, this),
                "stop.owl.autoplay": e.proxy(function (e) {
                  e.namespace && this.stop();
                }, this),
                "mouseover.owl.autoplay": e.proxy(function () {
                  this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating") &&
                    this.pause();
                }, this),
                "mouseleave.owl.autoplay": e.proxy(function () {
                  this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating") &&
                    this.play();
                }, this),
                "touchstart.owl.core": e.proxy(function () {
                  this._core.settings.autoplayHoverPause &&
                    this._core.is("rotating") &&
                    this.pause();
                }, this),
                "touchend.owl.core": e.proxy(function () {
                  this._core.settings.autoplayHoverPause && this.play();
                }, this),
              }),
              this._core.$element.on(this._handlers),
              (this._core.options = e.extend(
                {},
                r.Defaults,
                this._core.options
              ));
          };
          (r.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1,
          }),
            (r.prototype._next = function (i) {
              (this._call = t.setTimeout(
                e.proxy(this._next, this, i),
                this._timeout * (Math.round(this.read() / this._timeout) + 1) -
                  this.read()
              )),
                this._core.is("interacting") ||
                  n.hidden ||
                  this._core.next(i || this._core.settings.autoplaySpeed);
            }),
            (r.prototype.read = function () {
              return new Date().getTime() - this._time;
            }),
            (r.prototype.play = function (n, i) {
              var r;
              this._core.is("rotating") || this._core.enter("rotating"),
                (n = n || this._core.settings.autoplayTimeout),
                (r = Math.min(this._time % (this._timeout || n), n)),
                this._paused
                  ? ((this._time = this.read()), (this._paused = !1))
                  : t.clearTimeout(this._call),
                (this._time += (this.read() % n) - r),
                (this._timeout = n),
                (this._call = t.setTimeout(
                  e.proxy(this._next, this, i),
                  n - r
                ));
            }),
            (r.prototype.stop = function () {
              this._core.is("rotating") &&
                ((this._time = 0),
                (this._paused = !0),
                t.clearTimeout(this._call),
                this._core.leave("rotating"));
            }),
            (r.prototype.pause = function () {
              this._core.is("rotating") &&
                !this._paused &&
                ((this._time = this.read()),
                (this._paused = !0),
                t.clearTimeout(this._call));
            }),
            (r.prototype.destroy = function () {
              var e, t;
              for (e in (this.stop(), this._handlers))
                this._core.$element.off(e, this._handlers[e]);
              for (t in Object.getOwnPropertyNames(this))
                "function" != typeof this[t] && (this[t] = null);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.autoplay = r);
        })(window.Zepto || e, window, document),
        (function (e, t, n, i) {
          "use strict";
          var r = function (t) {
            (this._core = t),
              (this._initialized = !1),
              (this._pages = []),
              (this._controls = {}),
              (this._templates = []),
              (this.$element = this._core.$element),
              (this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to,
              }),
              (this._handlers = {
                "prepared.owl.carousel": e.proxy(function (t) {
                  t.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.push(
                      '<div class="' +
                        this._core.settings.dotClass +
                        '">' +
                        e(t.content)
                          .find("[data-dot]")
                          .addBack("[data-dot]")
                          .attr("data-dot") +
                        "</div>"
                    );
                }, this),
                "added.owl.carousel": e.proxy(function (e) {
                  e.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.splice(
                      e.position,
                      0,
                      this._templates.pop()
                    );
                }, this),
                "remove.owl.carousel": e.proxy(function (e) {
                  e.namespace &&
                    this._core.settings.dotsData &&
                    this._templates.splice(e.position, 1);
                }, this),
                "changed.owl.carousel": e.proxy(function (e) {
                  e.namespace && "position" == e.property.name && this.draw();
                }, this),
                "initialized.owl.carousel": e.proxy(function (e) {
                  e.namespace &&
                    !this._initialized &&
                    (this._core.trigger("initialize", null, "navigation"),
                    this.initialize(),
                    this.update(),
                    this.draw(),
                    (this._initialized = !0),
                    this._core.trigger("initialized", null, "navigation"));
                }, this),
                "refreshed.owl.carousel": e.proxy(function (e) {
                  e.namespace &&
                    this._initialized &&
                    (this._core.trigger("refresh", null, "navigation"),
                    this.update(),
                    this.draw(),
                    this._core.trigger("refreshed", null, "navigation"));
                }, this),
              }),
              (this._core.options = e.extend(
                {},
                r.Defaults,
                this._core.options
              )),
              this.$element.on(this._handlers);
          };
          (r.Defaults = {
            nav: !1,
            navText: [
              '<span aria-label="Previous">&#x2039;</span>',
              '<span aria-label="Next">&#x203a;</span>',
            ],
            navSpeed: !1,
            navElement: 'button type="button" role="presentation"',
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1,
          }),
            (r.prototype.initialize = function () {
              var t,
                n = this._core.settings;
              for (t in ((this._controls.$relative = (
                n.navContainer
                  ? e(n.navContainer)
                  : e("<div>")
                      .addClass(n.navContainerClass)
                      .appendTo(this.$element)
              ).addClass("disabled")),
              (this._controls.$previous = e("<" + n.navElement + ">")
                .addClass(n.navClass[0])
                .html(n.navText[0])
                .prependTo(this._controls.$relative)
                .on(
                  "click",
                  e.proxy(function (e) {
                    this.prev(n.navSpeed);
                  }, this)
                )),
              (this._controls.$next = e("<" + n.navElement + ">")
                .addClass(n.navClass[1])
                .html(n.navText[1])
                .appendTo(this._controls.$relative)
                .on(
                  "click",
                  e.proxy(function (e) {
                    this.next(n.navSpeed);
                  }, this)
                )),
              n.dotsData ||
                (this._templates = [
                  e('<button role="button">')
                    .addClass(n.dotClass)
                    .append(e("<span>"))
                    .prop("outerHTML"),
                ]),
              (this._controls.$absolute = (
                n.dotsContainer
                  ? e(n.dotsContainer)
                  : e("<div>").addClass(n.dotsClass).appendTo(this.$element)
              ).addClass("disabled")),
              this._controls.$absolute.on(
                "click",
                "button",
                e.proxy(function (t) {
                  var i = e(t.target).parent().is(this._controls.$absolute)
                    ? e(t.target).index()
                    : e(t.target).parent().index();
                  t.preventDefault(), this.to(i, n.dotsSpeed);
                }, this)
              ),
              this._overrides))
                this._core[t] = e.proxy(this[t], this);
            }),
            (r.prototype.destroy = function () {
              var e, t, n, i, r;
              for (e in ((r = this._core.settings), this._handlers))
                this.$element.off(e, this._handlers[e]);
              for (t in this._controls)
                "$relative" === t && r.navContainer
                  ? this._controls[t].html("")
                  : this._controls[t].remove();
              for (i in this.overides) this._core[i] = this._overrides[i];
              for (n in Object.getOwnPropertyNames(this))
                "function" != typeof this[n] && (this[n] = null);
            }),
            (r.prototype.update = function () {
              var e,
                t,
                n = this._core.clones().length / 2,
                i = n + this._core.items().length,
                r = this._core.maximum(!0),
                o = this._core.settings,
                s =
                  o.center || o.autoWidth || o.dotsData
                    ? 1
                    : o.dotsEach || o.items;
              if (
                ("page" !== o.slideBy &&
                  (o.slideBy = Math.min(o.slideBy, o.items)),
                o.dots || "page" == o.slideBy)
              )
                for (this._pages = [], e = n, t = 0, 0; e < i; e++) {
                  if (t >= s || 0 === t) {
                    if (
                      (this._pages.push({
                        start: Math.min(r, e - n),
                        end: e - n + s - 1,
                      }),
                      Math.min(r, e - n) === r)
                    )
                      break;
                    t = 0;
                  }
                  t += this._core.mergers(this._core.relative(e));
                }
            }),
            (r.prototype.draw = function () {
              var t,
                n = this._core.settings,
                i = this._core.items().length <= n.items,
                r = this._core.relative(this._core.current()),
                o = n.loop || n.rewind;
              this._controls.$relative.toggleClass("disabled", !n.nav || i),
                n.nav &&
                  (this._controls.$previous.toggleClass(
                    "disabled",
                    !o && r <= this._core.minimum(!0)
                  ),
                  this._controls.$next.toggleClass(
                    "disabled",
                    !o && r >= this._core.maximum(!0)
                  )),
                this._controls.$absolute.toggleClass("disabled", !n.dots || i),
                n.dots &&
                  ((t =
                    this._pages.length -
                    this._controls.$absolute.children().length),
                  n.dotsData && 0 !== t
                    ? this._controls.$absolute.html(this._templates.join(""))
                    : t > 0
                    ? this._controls.$absolute.append(
                        new Array(t + 1).join(this._templates[0])
                      )
                    : t < 0 &&
                      this._controls.$absolute.children().slice(t).remove(),
                  this._controls.$absolute
                    .find(".active")
                    .removeClass("active"),
                  this._controls.$absolute
                    .children()
                    .eq(e.inArray(this.current(), this._pages))
                    .addClass("active"));
            }),
            (r.prototype.onTrigger = function (t) {
              var n = this._core.settings;
              t.page = {
                index: e.inArray(this.current(), this._pages),
                count: this._pages.length,
                size:
                  n &&
                  (n.center || n.autoWidth || n.dotsData
                    ? 1
                    : n.dotsEach || n.items),
              };
            }),
            (r.prototype.current = function () {
              var t = this._core.relative(this._core.current());
              return e
                .grep(
                  this._pages,
                  e.proxy(function (e, n) {
                    return e.start <= t && e.end >= t;
                  }, this)
                )
                .pop();
            }),
            (r.prototype.getPosition = function (t) {
              var n,
                i,
                r = this._core.settings;
              return (
                "page" == r.slideBy
                  ? ((n = e.inArray(this.current(), this._pages)),
                    (i = this._pages.length),
                    t ? ++n : --n,
                    (n = this._pages[((n % i) + i) % i].start))
                  : ((n = this._core.relative(this._core.current())),
                    (i = this._core.items().length),
                    t ? (n += r.slideBy) : (n -= r.slideBy)),
                n
              );
            }),
            (r.prototype.next = function (t) {
              e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t);
            }),
            (r.prototype.prev = function (t) {
              e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t);
            }),
            (r.prototype.to = function (t, n, i) {
              var r;
              !i && this._pages.length
                ? ((r = this._pages.length),
                  e.proxy(this._overrides.to, this._core)(
                    this._pages[((t % r) + r) % r].start,
                    n
                  ))
                : e.proxy(this._overrides.to, this._core)(t, n);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.Navigation = r);
        })(window.Zepto || e, window, document),
        (function (e, t, n, i) {
          "use strict";
          var r = function (n) {
            (this._core = n),
              (this._hashes = {}),
              (this.$element = this._core.$element),
              (this._handlers = {
                "initialized.owl.carousel": e.proxy(function (n) {
                  n.namespace &&
                    "URLHash" === this._core.settings.startPosition &&
                    e(t).trigger("hashchange.owl.navigation");
                }, this),
                "prepared.owl.carousel": e.proxy(function (t) {
                  if (t.namespace) {
                    var n = e(t.content)
                      .find("[data-hash]")
                      .addBack("[data-hash]")
                      .attr("data-hash");
                    if (!n) return;
                    this._hashes[n] = t.content;
                  }
                }, this),
                "changed.owl.carousel": e.proxy(function (n) {
                  if (n.namespace && "position" === n.property.name) {
                    var i = this._core.items(
                        this._core.relative(this._core.current())
                      ),
                      r = e
                        .map(this._hashes, function (e, t) {
                          return e === i ? t : null;
                        })
                        .join();
                    if (!r || t.location.hash.slice(1) === r) return;
                    t.location.hash = r;
                  }
                }, this),
              }),
              (this._core.options = e.extend(
                {},
                r.Defaults,
                this._core.options
              )),
              this.$element.on(this._handlers),
              e(t).on(
                "hashchange.owl.navigation",
                e.proxy(function (e) {
                  var n = t.location.hash.substring(1),
                    i = this._core.$stage.children(),
                    r = this._hashes[n] && i.index(this._hashes[n]);
                  void 0 !== r &&
                    r !== this._core.current() &&
                    this._core.to(this._core.relative(r), !1, !0);
                }, this)
              );
          };
          (r.Defaults = { URLhashListener: !1 }),
            (r.prototype.destroy = function () {
              var n, i;
              for (n in (e(t).off("hashchange.owl.navigation"), this._handlers))
                this._core.$element.off(n, this._handlers[n]);
              for (i in Object.getOwnPropertyNames(this))
                "function" != typeof this[i] && (this[i] = null);
            }),
            (e.fn.owlCarousel.Constructor.Plugins.Hash = r);
        })(window.Zepto || e, window, document),
        (function (e, t, n, i) {
          function r(t, n) {
            var i = !1,
              r = t.charAt(0).toUpperCase() + t.slice(1);
            return (
              e.each(
                (t + " " + a.join(r + " ") + r).split(" "),
                function (e, t) {
                  if (void 0 !== s[t]) return (i = !n || t), !1;
                }
              ),
              i
            );
          }
          function o(e) {
            return r(e, !0);
          }
          var s = e("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            l = {
              transition: {
                end: {
                  WebkitTransition: "webkitTransitionEnd",
                  MozTransition: "transitionend",
                  OTransition: "oTransitionEnd",
                  transition: "transitionend",
                },
              },
              animation: {
                end: {
                  WebkitAnimation: "webkitAnimationEnd",
                  MozAnimation: "animationend",
                  OAnimation: "oAnimationEnd",
                  animation: "animationend",
                },
              },
            },
            c = function () {
              return !!r("transform");
            },
            u = function () {
              return !!r("perspective");
            },
            h = function () {
              return !!r("animation");
            };
          (function () {
            return !!r("transition");
          })() &&
            ((e.support.transition = new String(o("transition"))),
            (e.support.transition.end =
              l.transition.end[e.support.transition])),
            h() &&
              ((e.support.animation = new String(o("animation"))),
              (e.support.animation.end = l.animation.end[e.support.animation])),
            c() &&
              ((e.support.transform = new String(o("transform"))),
              (e.support.transform3d = u()));
        })(window.Zepto || e, window, document);
    }).call(this, n("EVdn"), n("EVdn"));
  },
  s4Lg: function (e, t, n) {
    (function (i) {
      var r, o, s;
      function a(e, t, n, i) {
        var r = l(p(1 & i ? e.prototype : e), t, n);
        return 2 & i && "function" == typeof r
          ? function (e) {
              return r.apply(n, e);
            }
          : r;
      }
      function l() {
        return (l =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get.bind()
            : function (e, t, n) {
                var i = c(e, t);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, t);
                  return r.get
                    ? r.get.call(arguments.length < 3 ? e : n)
                    : r.value;
                }
              }).apply(null, arguments);
      }
      function c(e, t) {
        for (; !{}.hasOwnProperty.call(e, t) && null !== (e = p(e)); );
        return e;
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                d(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function d(e, t, n) {
        return (
          (t = _(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function f(e, t, n) {
        return (
          (t = p(t)),
          (function (e, t) {
            if (t && ("object" == D(t) || "function" == typeof t)) return t;
            if (void 0 !== t)
              throw new TypeError(
                "Derived constructors may only return object or undefined"
              );
            return (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e);
          })(
            e,
            (function () {
              try {
                var e = !Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                );
              } catch (e) {}
              return (function () {
                return !!e;
              })();
            })()
              ? Reflect.construct(t, n || [], p(e).constructor)
              : t.apply(e, n)
          )
        );
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function g(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && m(e, t);
      }
      function m(e, t) {
        return (m = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function v(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function y(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, _(i.key), i);
        }
      }
      function b(e, t, n) {
        return (
          t && y(e.prototype, t),
          n && y(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function _(e) {
        var t = (function (e, t) {
          if ("object" != D(e) || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t || "default");
            if ("object" != D(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == D(t) ? t : t + "";
      }
      function w(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var i,
                r,
                o,
                s,
                a = [],
                l = !0,
                c = !1;
              try {
                if (((o = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (i = o.call(n)).done) &&
                    (a.push(i.value), a.length !== t);
                    l = !0
                  );
              } catch (e) {
                (c = !0), (r = e);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((s = n.return()), Object(s) !== s)
                  )
                    return;
                } finally {
                  if (c) throw r;
                }
              }
              return a;
            }
          })(e, t) ||
          k(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function x(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return C(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          k(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function k(e, t) {
        if (e) {
          if ("string" == typeof e) return C(e, t);
          var n = {}.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? C(e, t)
              : void 0
          );
        }
      }
      function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function D(e) {
        return (D =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      !(function (i, a) {
        "object" == D(t) && void 0 !== e
          ? (e.exports = a(n("EjV/")))
          : ((o = [n("EjV/")]),
            void 0 === (s = "function" == typeof (r = a) ? r.apply(t, o) : r) ||
              (e.exports = s));
      })(0, function (e) {
        "use strict";
        var t = (function (e) {
            if (e && e.__esModule) return e;
            var t = Object.create(null);
            return (
              e &&
                Object.keys(e).forEach(function (n) {
                  if ("default" !== n) {
                    var i = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(
                      t,
                      n,
                      i.get
                        ? i
                        : {
                            enumerable: !0,
                            get: function () {
                              return e[n];
                            },
                          }
                    );
                  }
                }),
              (t.default = e),
              Object.freeze(t)
            );
          })(e),
          n = function (e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : document.documentElement;
            return (t = []).concat.apply(
              t,
              x(Element.prototype.querySelectorAll.call(n, e))
            );
          },
          r = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : document.documentElement;
            return Element.prototype.querySelector.call(t, e);
          },
          o = function (e, t) {
            var n;
            return (n = []).concat.apply(n, x(e.children)).filter(function (e) {
              return e.matches(t);
            });
          },
          s = function (e, t) {
            for (
              var n = [], i = e.parentNode;
              i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;

            )
              i.matches(t) && n.push(i), (i = i.parentNode);
            return n;
          },
          l = function (e, t) {
            for (var n = e.previousElementSibling; n; ) {
              if (n.matches(t)) return [n];
              n = n.previousElementSibling;
            }
            return [];
          },
          c = function (e, t) {
            for (var n = e.nextElementSibling; n; ) {
              if (n.matches(t)) return [n];
              n = n.nextElementSibling;
            }
            return [];
          },
          u = function (e) {
            do {
              e += Math.floor(1e6 * Math.random());
            } while (document.getElementById(e));
            return e;
          },
          d = function (e) {
            var t = e.getAttribute("data-bs-target");
            if (!t || "#" === t) {
              var n = e.getAttribute("href");
              if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
              n.includes("#") &&
                !n.startsWith("#") &&
                (n = "#" + n.split("#")[1]),
                (t = n && "#" !== n ? n.trim() : null);
            }
            return t;
          },
          p = function (e) {
            var t = d(e);
            return t && document.querySelector(t) ? t : null;
          },
          m = function (e) {
            var t = d(e);
            return t ? document.querySelector(t) : null;
          },
          y = function (e) {
            e.dispatchEvent(new Event("transitionend"));
          },
          _ = function (e) {
            return (
              !(!e || "object" != D(e)) &&
              (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType)
            );
          },
          k = function (e) {
            return _(e)
              ? e.jquery
                ? e[0]
                : e
              : "string" == typeof e && e.length > 0
              ? r(e)
              : null;
          },
          C = function (e, t, n) {
            Object.keys(n).forEach(function (i) {
              var r,
                o = n[i],
                s = t[i],
                a =
                  s && _(s)
                    ? "element"
                    : null == (r = s)
                    ? "" + r
                    : {}.toString
                        .call(r)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase();
              if (!new RegExp(o).test(a))
                throw new TypeError(
                  ""
                    .concat(e.toUpperCase(), ': Option "')
                    .concat(i, '" provided type "')
                    .concat(a, '" but expected type "')
                    .concat(o, '".')
                );
            });
          },
          T = function (e) {
            return (
              !(!_(e) || 0 === e.getClientRects().length) &&
              "visible" === getComputedStyle(e).getPropertyValue("visibility")
            );
          },
          E = function (e) {
            return (
              !e ||
              e.nodeType !== Node.ELEMENT_NODE ||
              !!e.classList.contains("disabled") ||
              (void 0 !== e.disabled
                ? e.disabled
                : e.hasAttribute("disabled") &&
                  "false" !== e.getAttribute("disabled"))
            );
          },
          A = function (e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
              var t = e.getRootNode();
              return t instanceof ShadowRoot ? t : null;
            }
            return e instanceof ShadowRoot
              ? e
              : e.parentNode
              ? A(e.parentNode)
              : null;
          },
          O = function () {},
          S = function (e) {
            return e.offsetHeight;
          },
          M = function () {
            window;
            var e = i;
            return e && !document.body.hasAttribute("data-bs-no-jquery")
              ? e
              : null;
          },
          L = [],
          N = function () {
            return "rtl" === document.documentElement.dir;
          },
          j = function (e) {
            var t;
            (t = function () {
              var t = M();
              if (t) {
                var n = e.NAME,
                  i = t.fn[n];
                (t.fn[n] = e.jQueryInterface),
                  (t.fn[n].Constructor = e),
                  (t.fn[n].noConflict = function () {
                    return (t.fn[n] = i), e.jQueryInterface;
                  });
              }
            }),
              "loading" === document.readyState
                ? (L.length ||
                    document.addEventListener("DOMContentLoaded", function () {
                      L.forEach(function (e) {
                        return e();
                      });
                    }),
                  L.push(t))
                : t();
          },
          P = function (e) {
            "function" == typeof e && e();
          },
          I = function (e, t) {
            var n =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
            if (n) {
              var i =
                  (function (e) {
                    if (!e) return 0;
                    var t = window.getComputedStyle(e),
                      n = t.transitionDuration,
                      i = t.transitionDelay,
                      r = Number.parseFloat(n),
                      o = Number.parseFloat(i);
                    return r || o
                      ? ((n = n.split(",")[0]),
                        (i = i.split(",")[0]),
                        1e3 * (Number.parseFloat(n) + Number.parseFloat(i)))
                      : 0;
                  })(t) + 5,
                r = !1,
                o = function (n) {
                  n.target === t &&
                    ((r = !0), t.removeEventListener("transitionend", o), P(e));
                };
              t.addEventListener("transitionend", o),
                setTimeout(function () {
                  r || y(t);
                }, i);
            } else P(e);
          },
          H = function (e, t, n, i) {
            var r = e.indexOf(t);
            if (-1 === r) return e[!n && i ? e.length - 1 : 0];
            var o = e.length;
            return (
              (r += n ? 1 : -1),
              i && (r = (r + o) % o),
              e[Math.max(0, Math.min(r, o - 1))]
            );
          },
          W = /[^.]*(?=\..*)\.|.*/,
          R = /\..*/,
          F = /::\d+$/,
          $ = {},
          U = 1,
          z = { mouseenter: "mouseover", mouseleave: "mouseout" },
          q = /^(mouseenter|mouseleave)/i,
          B = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
          ]);
        function V(e, t) {
          return (t && "".concat(t, "::").concat(U++)) || e.uidEvent || U++;
        }
        function Y(e) {
          var t = V(e);
          return (e.uidEvent = t), ($[t] = $[t] || {}), $[t];
        }
        function X(e, t) {
          for (
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null,
              i = Object.keys(e),
              r = 0,
              o = i.length;
            r < o;
            r++
          ) {
            var s = e[i[r]];
            if (s.originalHandler === t && s.delegationSelector === n) return s;
          }
          return null;
        }
        function K(e, t, n) {
          var i = "string" == typeof t,
            r = i ? n : t,
            o = Z(e);
          return B.has(o) || (o = e), [i, r, o];
        }
        function Q(e, t, n, i, r) {
          if ("string" == typeof t && e) {
            if ((n || ((n = i), (i = null)), q.test(t))) {
              var o = function (e) {
                return function (t) {
                  if (
                    !t.relatedTarget ||
                    (t.relatedTarget !== t.delegateTarget &&
                      !t.delegateTarget.contains(t.relatedTarget))
                  )
                    return e.call(this, t);
                };
              };
              i ? (i = o(i)) : (n = o(n));
            }
            var s = w(K(t, n, i), 3),
              a = s[0],
              l = s[1],
              c = s[2],
              u = Y(e),
              h = u[c] || (u[c] = {}),
              d = X(h, l, a ? n : null);
            if (d) d.oneOff = d.oneOff && r;
            else {
              var f = V(l, t.replace(W, "")),
                p = a
                  ? (function (e, t, n) {
                      return function i(r) {
                        for (
                          var o = e.querySelectorAll(t), s = r.target;
                          s && s !== this;
                          s = s.parentNode
                        )
                          for (var a = o.length; a--; )
                            if (o[a] === s)
                              return (
                                (r.delegateTarget = s),
                                i.oneOff && J.off(e, r.type, t, n),
                                n.apply(s, [r])
                              );
                        return null;
                      };
                    })(e, n, i)
                  : (function (e, t) {
                      return function n(i) {
                        return (
                          (i.delegateTarget = e),
                          n.oneOff && J.off(e, i.type, t),
                          t.apply(e, [i])
                        );
                      };
                    })(e, n);
              (p.delegationSelector = a ? n : null),
                (p.originalHandler = l),
                (p.oneOff = r),
                (p.uidEvent = f),
                (h[f] = p),
                e.addEventListener(c, p, a);
            }
          }
        }
        function G(e, t, n, i, r) {
          var o = X(t[n], i, r);
          o &&
            (e.removeEventListener(n, o, Boolean(r)), delete t[n][o.uidEvent]);
        }
        function Z(e) {
          return (e = e.replace(R, "")), z[e] || e;
        }
        var J = {
            on: function (e, t, n, i) {
              Q(e, t, n, i, !1);
            },
            one: function (e, t, n, i) {
              Q(e, t, n, i, !0);
            },
            off: function (e, t, n, i) {
              if ("string" == typeof t && e) {
                var r = w(K(t, n, i), 3),
                  o = r[0],
                  s = r[1],
                  a = r[2],
                  l = a !== t,
                  c = Y(e),
                  u = t.startsWith(".");
                if (void 0 === s) {
                  u &&
                    Object.keys(c).forEach(function (n) {
                      !(function (e, t, n, i) {
                        var r = t[n] || {};
                        Object.keys(r).forEach(function (o) {
                          if (o.includes(i)) {
                            var s = r[o];
                            G(e, t, n, s.originalHandler, s.delegationSelector);
                          }
                        });
                      })(e, c, n, t.slice(1));
                    });
                  var h = c[a] || {};
                  Object.keys(h).forEach(function (n) {
                    var i = n.replace(F, "");
                    if (!l || t.includes(i)) {
                      var r = h[n];
                      G(e, c, a, r.originalHandler, r.delegationSelector);
                    }
                  });
                } else {
                  if (!c || !c[a]) return;
                  G(e, c, a, s, o ? n : null);
                }
              }
            },
            trigger: function (e, t, n) {
              if ("string" != typeof t || !e) return null;
              var i,
                r = M(),
                o = Z(t),
                s = t !== o,
                a = B.has(o),
                l = !0,
                c = !0,
                u = !1,
                h = null;
              return (
                s &&
                  r &&
                  ((i = r.Event(t, n)),
                  r(e).trigger(i),
                  (l = !i.isPropagationStopped()),
                  (c = !i.isImmediatePropagationStopped()),
                  (u = i.isDefaultPrevented())),
                a
                  ? (h = document.createEvent("HTMLEvents")).initEvent(o, l, !0)
                  : (h = new CustomEvent(t, { bubbles: l, cancelable: !0 })),
                void 0 !== n &&
                  Object.keys(n).forEach(function (e) {
                    Object.defineProperty(h, e, {
                      get: function () {
                        return n[e];
                      },
                    });
                  }),
                u && h.preventDefault(),
                c && e.dispatchEvent(h),
                h.defaultPrevented && void 0 !== i && i.preventDefault(),
                h
              );
            },
          },
          ee = new Map(),
          te = function (e, t, n) {
            ee.has(e) || ee.set(e, new Map());
            var i = ee.get(e);
            i.has(t) || 0 === i.size
              ? i.set(t, n)
              : console.error(
                  "Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(
                    Array.from(i.keys())[0],
                    "."
                  )
                );
          },
          ne = function (e, t) {
            return (ee.has(e) && ee.get(e).get(t)) || null;
          },
          ie = function (e, t) {
            if (ee.has(e)) {
              var n = ee.get(e);
              n.delete(t), 0 === n.size && ee.delete(e);
            }
          },
          re = (function () {
            return b(
              function e(t) {
                v(this, e),
                  (t = k(t)) &&
                    ((this._element = t),
                    te(this._element, this.constructor.DATA_KEY, this));
              },
              [
                {
                  key: "dispose",
                  value: function () {
                    var e = this;
                    ie(this._element, this.constructor.DATA_KEY),
                      J.off(this._element, this.constructor.EVENT_KEY),
                      Object.getOwnPropertyNames(this).forEach(function (t) {
                        e[t] = null;
                      });
                  },
                },
                {
                  key: "_queueCallback",
                  value: function (e, t) {
                    var n =
                      !(arguments.length > 2 && void 0 !== arguments[2]) ||
                      arguments[2];
                    I(e, t, n);
                  },
                },
              ],
              [
                {
                  key: "getInstance",
                  value: function (e) {
                    return ne(e, this.DATA_KEY);
                  },
                },
                {
                  key: "getOrCreateInstance",
                  value: function (e) {
                    var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    return (
                      this.getInstance(e) ||
                      new this(e, "object" == D(t) ? t : null)
                    );
                  },
                },
                {
                  key: "VERSION",
                  get: function () {
                    return "5.0.2";
                  },
                },
                {
                  key: "NAME",
                  get: function () {
                    throw new Error(
                      'You have to implement the static method "NAME", for each component!'
                    );
                  },
                },
                {
                  key: "DATA_KEY",
                  get: function () {
                    return "bs." + this.NAME;
                  },
                },
                {
                  key: "EVENT_KEY",
                  get: function () {
                    return "." + this.DATA_KEY;
                  },
                },
              ]
            );
          })(),
          oe = (function (e) {
            function t() {
              return v(this, t), f(this, t, arguments);
            }
            return (
              g(t, e),
              b(
                t,
                [
                  {
                    key: "close",
                    value: function (e) {
                      var t = e ? this._getRootElement(e) : this._element,
                        n = this._triggerCloseEvent(t);
                      null === n ||
                        n.defaultPrevented ||
                        this._removeElement(t);
                    },
                  },
                  {
                    key: "_getRootElement",
                    value: function (e) {
                      return m(e) || e.closest(".alert");
                    },
                  },
                  {
                    key: "_triggerCloseEvent",
                    value: function (e) {
                      return J.trigger(e, "close.bs.alert");
                    },
                  },
                  {
                    key: "_removeElement",
                    value: function (e) {
                      var t = this;
                      e.classList.remove("show");
                      var n = e.classList.contains("fade");
                      this._queueCallback(
                        function () {
                          return t._destroyElement(e);
                        },
                        e,
                        n
                      );
                    },
                  },
                  {
                    key: "_destroyElement",
                    value: function (e) {
                      e.remove(), J.trigger(e, "closed.bs.alert");
                    },
                  },
                ],
                [
                  {
                    key: "NAME",
                    get: function () {
                      return "alert";
                    },
                  },
                  {
                    key: "jQueryInterface",
                    value: function (e) {
                      return this.each(function () {
                        var n = t.getOrCreateInstance(this);
                        "close" === e && n[e](this);
                      });
                    },
                  },
                  {
                    key: "handleDismiss",
                    value: function (e) {
                      return function (t) {
                        t && t.preventDefault(), e.close(this);
                      };
                    },
                  },
                ]
              )
            );
          })(re);
        J.on(
          document,
          "click.bs.alert.data-api",
          '[data-bs-dismiss="alert"]',
          oe.handleDismiss(new oe())
        ),
          j(oe);
        var se = (function (e) {
          function t() {
            return v(this, t), f(this, t, arguments);
          }
          return (
            g(t, e),
            b(
              t,
              [
                {
                  key: "toggle",
                  value: function () {
                    this._element.setAttribute(
                      "aria-pressed",
                      this._element.classList.toggle("active")
                    );
                  },
                },
              ],
              [
                {
                  key: "NAME",
                  get: function () {
                    return "button";
                  },
                },
                {
                  key: "jQueryInterface",
                  value: function (e) {
                    return this.each(function () {
                      var n = t.getOrCreateInstance(this);
                      "toggle" === e && n[e]();
                    });
                  },
                },
              ]
            )
          );
        })(re);
        function ae(e) {
          return (
            "true" === e ||
            ("false" !== e &&
              (e === Number(e).toString()
                ? Number(e)
                : "" === e || "null" === e
                ? null
                : e))
          );
        }
        function le(e) {
          return e.replace(/[A-Z]/g, function (e) {
            return "-" + e.toLowerCase();
          });
        }
        J.on(
          document,
          "click.bs.button.data-api",
          '[data-bs-toggle="button"]',
          function (e) {
            e.preventDefault();
            var t = e.target.closest('[data-bs-toggle="button"]');
            se.getOrCreateInstance(t).toggle();
          }
        ),
          j(se);
        var ce = {
            setDataAttribute: function (e, t, n) {
              e.setAttribute("data-bs-" + le(t), n);
            },
            removeDataAttribute: function (e, t) {
              e.removeAttribute("data-bs-" + le(t));
            },
            getDataAttributes: function (e) {
              if (!e) return {};
              var t = {};
              return (
                Object.keys(e.dataset)
                  .filter(function (e) {
                    return e.startsWith("bs");
                  })
                  .forEach(function (n) {
                    var i = n.replace(/^bs/, "");
                    (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                      (t[i] = ae(e.dataset[n]));
                  }),
                t
              );
            },
            getDataAttribute: function (e, t) {
              return ae(e.getAttribute("data-bs-" + le(t)));
            },
            offset: function (e) {
              var t = e.getBoundingClientRect();
              return {
                top: t.top + document.body.scrollTop,
                left: t.left + document.body.scrollLeft,
              };
            },
            position: function (e) {
              return { top: e.offsetTop, left: e.offsetLeft };
            },
          },
          ue = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0,
          },
          he = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean",
          },
          de = "next",
          fe = "prev",
          pe = "left",
          ge = "right",
          me = { ArrowLeft: ge, ArrowRight: pe },
          ve = (function (e) {
            function t(e, n) {
              var i;
              return (
                v(this, t),
                ((i = f(this, t, [e]))._items = null),
                (i._interval = null),
                (i._activeElement = null),
                (i._isPaused = !1),
                (i._isSliding = !1),
                (i.touchTimeout = null),
                (i.touchStartX = 0),
                (i.touchDeltaX = 0),
                (i._config = i._getConfig(n)),
                (i._indicatorsElement = r(".carousel-indicators", i._element)),
                (i._touchSupported =
                  "ontouchstart" in document.documentElement ||
                  navigator.maxTouchPoints > 0),
                (i._pointerEvent = Boolean(window.PointerEvent)),
                i._addEventListeners(),
                i
              );
            }
            return (
              g(t, e),
              b(
                t,
                [
                  {
                    key: "next",
                    value: function () {
                      this._slide(de);
                    },
                  },
                  {
                    key: "nextWhenVisible",
                    value: function () {
                      !document.hidden && T(this._element) && this.next();
                    },
                  },
                  {
                    key: "prev",
                    value: function () {
                      this._slide(fe);
                    },
                  },
                  {
                    key: "pause",
                    value: function (e) {
                      e || (this._isPaused = !0),
                        r(
                          ".carousel-item-next, .carousel-item-prev",
                          this._element
                        ) && (y(this._element), this.cycle(!0)),
                        clearInterval(this._interval),
                        (this._interval = null);
                    },
                  },
                  {
                    key: "cycle",
                    value: function (e) {
                      e || (this._isPaused = !1),
                        this._interval &&
                          (clearInterval(this._interval),
                          (this._interval = null)),
                        this._config &&
                          this._config.interval &&
                          !this._isPaused &&
                          (this._updateInterval(),
                          (this._interval = setInterval(
                            (document.visibilityState
                              ? this.nextWhenVisible
                              : this.next
                            ).bind(this),
                            this._config.interval
                          )));
                    },
                  },
                  {
                    key: "to",
                    value: function (e) {
                      var t = this;
                      this._activeElement = r(
                        ".active.carousel-item",
                        this._element
                      );
                      var n = this._getItemIndex(this._activeElement);
                      if (!(e > this._items.length - 1 || e < 0))
                        if (this._isSliding)
                          J.one(this._element, "slid.bs.carousel", function () {
                            return t.to(e);
                          });
                        else {
                          if (n === e) return this.pause(), void this.cycle();
                          var i = e > n ? de : fe;
                          this._slide(i, this._items[e]);
                        }
                    },
                  },
                  {
                    key: "_getConfig",
                    value: function (e) {
                      return (
                        (e = h(
                          h(h({}, ue), ce.getDataAttributes(this._element)),
                          "object" == D(e) ? e : {}
                        )),
                        C("carousel", e, he),
                        e
                      );
                    },
                  },
                  {
                    key: "_handleSwipe",
                    value: function () {
                      var e = Math.abs(this.touchDeltaX);
                      if (!(e <= 40)) {
                        var t = e / this.touchDeltaX;
                        (this.touchDeltaX = 0),
                          t && this._slide(t > 0 ? ge : pe);
                      }
                    },
                  },
                  {
                    key: "_addEventListeners",
                    value: function () {
                      var e = this;
                      this._config.keyboard &&
                        J.on(
                          this._element,
                          "keydown.bs.carousel",
                          function (t) {
                            return e._keydown(t);
                          }
                        ),
                        "hover" === this._config.pause &&
                          (J.on(
                            this._element,
                            "mouseenter.bs.carousel",
                            function (t) {
                              return e.pause(t);
                            }
                          ),
                          J.on(
                            this._element,
                            "mouseleave.bs.carousel",
                            function (t) {
                              return e.cycle(t);
                            }
                          )),
                        this._config.touch &&
                          this._touchSupported &&
                          this._addTouchEventListeners();
                    },
                  },
                  {
                    key: "_addTouchEventListeners",
                    value: function () {
                      var e = this,
                        t = function (t) {
                          !e._pointerEvent ||
                          ("pen" !== t.pointerType && "touch" !== t.pointerType)
                            ? e._pointerEvent ||
                              (e.touchStartX = t.touches[0].clientX)
                            : (e.touchStartX = t.clientX);
                        },
                        i = function (t) {
                          !e._pointerEvent ||
                            ("pen" !== t.pointerType &&
                              "touch" !== t.pointerType) ||
                            (e.touchDeltaX = t.clientX - e.touchStartX),
                            e._handleSwipe(),
                            "hover" === e._config.pause &&
                              (e.pause(),
                              e.touchTimeout && clearTimeout(e.touchTimeout),
                              (e.touchTimeout = setTimeout(function (t) {
                                return e.cycle(t);
                              }, 500 + e._config.interval)));
                        };
                      n(".carousel-item img", this._element).forEach(function (
                        e
                      ) {
                        J.on(e, "dragstart.bs.carousel", function (e) {
                          return e.preventDefault();
                        });
                      }),
                        this._pointerEvent
                          ? (J.on(
                              this._element,
                              "pointerdown.bs.carousel",
                              function (e) {
                                return t(e);
                              }
                            ),
                            J.on(
                              this._element,
                              "pointerup.bs.carousel",
                              function (e) {
                                return i(e);
                              }
                            ),
                            this._element.classList.add("pointer-event"))
                          : (J.on(
                              this._element,
                              "touchstart.bs.carousel",
                              function (e) {
                                return t(e);
                              }
                            ),
                            J.on(
                              this._element,
                              "touchmove.bs.carousel",
                              function (t) {
                                return (function (t) {
                                  e.touchDeltaX =
                                    t.touches && t.touches.length > 1
                                      ? 0
                                      : t.touches[0].clientX - e.touchStartX;
                                })(t);
                              }
                            ),
                            J.on(
                              this._element,
                              "touchend.bs.carousel",
                              function (e) {
                                return i(e);
                              }
                            ));
                    },
                  },
                  {
                    key: "_keydown",
                    value: function (e) {
                      if (!/input|textarea/i.test(e.target.tagName)) {
                        var t = me[e.key];
                        t && (e.preventDefault(), this._slide(t));
                      }
                    },
                  },
                  {
                    key: "_getItemIndex",
                    value: function (e) {
                      return (
                        (this._items =
                          e && e.parentNode
                            ? n(".carousel-item", e.parentNode)
                            : []),
                        this._items.indexOf(e)
                      );
                    },
                  },
                  {
                    key: "_getItemByOrder",
                    value: function (e, t) {
                      var n = e === de;
                      return H(this._items, t, n, this._config.wrap);
                    },
                  },
                  {
                    key: "_triggerSlideEvent",
                    value: function (e, t) {
                      var n = this._getItemIndex(e),
                        i = this._getItemIndex(
                          r(".active.carousel-item", this._element)
                        );
                      return J.trigger(this._element, "slide.bs.carousel", {
                        relatedTarget: e,
                        direction: t,
                        from: i,
                        to: n,
                      });
                    },
                  },
                  {
                    key: "_setActiveIndicatorElement",
                    value: function (e) {
                      if (this._indicatorsElement) {
                        var t = r(".active", this._indicatorsElement);
                        t.classList.remove("active"),
                          t.removeAttribute("aria-current");
                        for (
                          var i = n(
                              "[data-bs-target]",
                              this._indicatorsElement
                            ),
                            o = 0;
                          o < i.length;
                          o++
                        )
                          if (
                            Number.parseInt(
                              i[o].getAttribute("data-bs-slide-to"),
                              10
                            ) === this._getItemIndex(e)
                          ) {
                            i[o].classList.add("active"),
                              i[o].setAttribute("aria-current", "true");
                            break;
                          }
                      }
                    },
                  },
                  {
                    key: "_updateInterval",
                    value: function () {
                      var e =
                        this._activeElement ||
                        r(".active.carousel-item", this._element);
                      if (e) {
                        var t = Number.parseInt(
                          e.getAttribute("data-bs-interval"),
                          10
                        );
                        t
                          ? ((this._config.defaultInterval =
                              this._config.defaultInterval ||
                              this._config.interval),
                            (this._config.interval = t))
                          : (this._config.interval =
                              this._config.defaultInterval ||
                              this._config.interval);
                      }
                    },
                  },
                  {
                    key: "_slide",
                    value: function (e, t) {
                      var n = this,
                        i = this._directionToOrder(e),
                        o = r(".active.carousel-item", this._element),
                        s = this._getItemIndex(o),
                        a = t || this._getItemByOrder(i, o),
                        l = this._getItemIndex(a),
                        c = Boolean(this._interval),
                        u = i === de,
                        h = u ? "carousel-item-start" : "carousel-item-end",
                        d = u ? "carousel-item-next" : "carousel-item-prev",
                        f = this._orderToDirection(i);
                      if (a && a.classList.contains("active"))
                        this._isSliding = !1;
                      else if (
                        !this._isSliding &&
                        !this._triggerSlideEvent(a, f).defaultPrevented &&
                        o &&
                        a
                      ) {
                        (this._isSliding = !0),
                          c && this.pause(),
                          this._setActiveIndicatorElement(a),
                          (this._activeElement = a);
                        var p = function () {
                          J.trigger(n._element, "slid.bs.carousel", {
                            relatedTarget: a,
                            direction: f,
                            from: s,
                            to: l,
                          });
                        };
                        if (this._element.classList.contains("slide")) {
                          a.classList.add(d),
                            S(a),
                            o.classList.add(h),
                            a.classList.add(h);
                          this._queueCallback(
                            function () {
                              a.classList.remove(h, d),
                                a.classList.add("active"),
                                o.classList.remove("active", d, h),
                                (n._isSliding = !1),
                                setTimeout(p, 0);
                            },
                            o,
                            !0
                          );
                        } else
                          o.classList.remove("active"),
                            a.classList.add("active"),
                            (this._isSliding = !1),
                            p();
                        c && this.cycle();
                      }
                    },
                  },
                  {
                    key: "_directionToOrder",
                    value: function (e) {
                      return [ge, pe].includes(e)
                        ? N()
                          ? e === pe
                            ? fe
                            : de
                          : e === pe
                          ? de
                          : fe
                        : e;
                    },
                  },
                  {
                    key: "_orderToDirection",
                    value: function (e) {
                      return [de, fe].includes(e)
                        ? N()
                          ? e === fe
                            ? pe
                            : ge
                          : e === fe
                          ? ge
                          : pe
                        : e;
                    },
                  },
                ],
                [
                  {
                    key: "Default",
                    get: function () {
                      return ue;
                    },
                  },
                  {
                    key: "NAME",
                    get: function () {
                      return "carousel";
                    },
                  },
                  {
                    key: "carouselInterface",
                    value: function (e, n) {
                      var i = t.getOrCreateInstance(e, n),
                        r = i._config;
                      "object" == D(n) && (r = h(h({}, r), n));
                      var o = "string" == typeof n ? n : r.slide;
                      if ("number" == typeof n) i.to(n);
                      else if ("string" == typeof o) {
                        if (void 0 === i[o])
                          throw new TypeError(
                            'No method named "'.concat(o, '"')
                          );
                        i[o]();
                      } else r.interval && r.ride && (i.pause(), i.cycle());
                    },
                  },
                  {
                    key: "jQueryInterface",
                    value: function (e) {
                      return this.each(function () {
                        t.carouselInterface(this, e);
                      });
                    },
                  },
                  {
                    key: "dataApiClickHandler",
                    value: function (e) {
                      var n = m(this);
                      if (n && n.classList.contains("carousel")) {
                        var i = h(
                            h({}, ce.getDataAttributes(n)),
                            ce.getDataAttributes(this)
                          ),
                          r = this.getAttribute("data-bs-slide-to");
                        r && (i.interval = !1),
                          t.carouselInterface(n, i),
                          r && t.getInstance(n).to(r),
                          e.preventDefault();
                      }
                    },
                  },
                ]
              )
            );
          })(re);
        J.on(
          document,
          "click.bs.carousel.data-api",
          "[data-bs-slide], [data-bs-slide-to]",
          ve.dataApiClickHandler
        ),
          J.on(window, "load.bs.carousel.data-api", function () {
            for (
              var e = n('[data-bs-ride="carousel"]'), t = 0, i = e.length;
              t < i;
              t++
            )
              ve.carouselInterface(e[t], ve.getInstance(e[t]));
          }),
          j(ve);
        var ye = { toggle: !0, parent: "" },
          be = { toggle: "boolean", parent: "(string|element)" },
          _e = (function (e) {
            function t(e, i) {
              var r;
              v(this, t),
                ((r = f(this, t, [e]))._isTransitioning = !1),
                (r._config = r._getConfig(i)),
                (r._triggerArray = n(
                  '[data-bs-toggle="collapse"][href="#'
                    .concat(
                      r._element.id,
                      '"],[data-bs-toggle="collapse"][data-bs-target="#'
                    )
                    .concat(r._element.id, '"]')
                ));
              for (
                var o = n('[data-bs-toggle="collapse"]'), s = 0, a = o.length;
                s < a;
                s++
              ) {
                var l = o[s],
                  c = p(l),
                  u = n(c).filter(function (e) {
                    return e === r._element;
                  });
                null !== c &&
                  u.length &&
                  ((r._selector = c), r._triggerArray.push(l));
              }
              return (
                (r._parent = r._config.parent ? r._getParent() : null),
                r._config.parent ||
                  r._addAriaAndCollapsedClass(r._element, r._triggerArray),
                r._config.toggle && r.toggle(),
                r
              );
            }
            return (
              g(t, e),
              b(
                t,
                [
                  {
                    key: "toggle",
                    value: function () {
                      this._element.classList.contains("show")
                        ? this.hide()
                        : this.show();
                    },
                  },
                  {
                    key: "show",
                    value: function () {
                      var e = this;
                      if (
                        !this._isTransitioning &&
                        !this._element.classList.contains("show")
                      ) {
                        var i, o;
                        this._parent &&
                          0 ===
                            (i = n(".show, .collapsing", this._parent).filter(
                              function (t) {
                                return "string" == typeof e._config.parent
                                  ? t.getAttribute("data-bs-parent") ===
                                      e._config.parent
                                  : t.classList.contains("collapse");
                              }
                            )).length &&
                          (i = null);
                        var s = r(this._selector);
                        if (i) {
                          var a = i.find(function (e) {
                            return s !== e;
                          });
                          if (
                            (o = a ? t.getInstance(a) : null) &&
                            o._isTransitioning
                          )
                            return;
                        }
                        if (
                          !J.trigger(this._element, "show.bs.collapse")
                            .defaultPrevented
                        ) {
                          i &&
                            i.forEach(function (e) {
                              s !== e && t.collapseInterface(e, "hide"),
                                o || te(e, "bs.collapse", null);
                            });
                          var l = this._getDimension();
                          this._element.classList.remove("collapse"),
                            this._element.classList.add("collapsing"),
                            (this._element.style[l] = 0),
                            this._triggerArray.length &&
                              this._triggerArray.forEach(function (e) {
                                e.classList.remove("collapsed"),
                                  e.setAttribute("aria-expanded", !0);
                              }),
                            this.setTransitioning(!0);
                          var c = "scroll" + (l[0].toUpperCase() + l.slice(1));
                          this._queueCallback(
                            function () {
                              e._element.classList.remove("collapsing"),
                                e._element.classList.add("collapse", "show"),
                                (e._element.style[l] = ""),
                                e.setTransitioning(!1),
                                J.trigger(e._element, "shown.bs.collapse");
                            },
                            this._element,
                            !0
                          ),
                            (this._element.style[l] = this._element[c] + "px");
                        }
                      }
                    },
                  },
                  {
                    key: "hide",
                    value: function () {
                      var e = this;
                      if (
                        !this._isTransitioning &&
                        this._element.classList.contains("show") &&
                        !J.trigger(this._element, "hide.bs.collapse")
                          .defaultPrevented
                      ) {
                        var t = this._getDimension();
                        (this._element.style[t] =
                          this._element.getBoundingClientRect()[t] + "px"),
                          S(this._element),
                          this._element.classList.add("collapsing"),
                          this._element.classList.remove("collapse", "show");
                        var n = this._triggerArray.length;
                        if (n > 0)
                          for (var i = 0; i < n; i++) {
                            var r = this._triggerArray[i],
                              o = m(r);
                            o &&
                              !o.classList.contains("show") &&
                              (r.classList.add("collapsed"),
                              r.setAttribute("aria-expanded", !1));
                          }
                        this.setTransitioning(!0),
                          (this._element.style[t] = ""),
                          this._queueCallback(
                            function () {
                              e.setTransitioning(!1),
                                e._element.classList.remove("collapsing"),
                                e._element.classList.add("collapse"),
                                J.trigger(e._element, "hidden.bs.collapse");
                            },
                            this._element,
                            !0
                          );
                      }
                    },
                  },
                  {
                    key: "setTransitioning",
                    value: function (e) {
                      this._isTransitioning = e;
                    },
                  },
                  {
                    key: "_getConfig",
                    value: function (e) {
                      return (
                        ((e = h(h({}, ye), e)).toggle = Boolean(e.toggle)),
                        C("collapse", e, be),
                        e
                      );
                    },
                  },
                  {
                    key: "_getDimension",
                    value: function () {
                      return this._element.classList.contains("width")
                        ? "width"
                        : "height";
                    },
                  },
                  {
                    key: "_getParent",
                    value: function () {
                      var e = this,
                        t = this._config.parent;
                      t = k(t);
                      var i =
                        '[data-bs-toggle="collapse"][data-bs-parent="'.concat(
                          t,
                          '"]'
                        );
                      return (
                        n(i, t).forEach(function (t) {
                          var n = m(t);
                          e._addAriaAndCollapsedClass(n, [t]);
                        }),
                        t
                      );
                    },
                  },
                  {
                    key: "_addAriaAndCollapsedClass",
                    value: function (e, t) {
                      if (e && t.length) {
                        var n = e.classList.contains("show");
                        t.forEach(function (e) {
                          n
                            ? e.classList.remove("collapsed")
                            : e.classList.add("collapsed"),
                            e.setAttribute("aria-expanded", n);
                        });
                      }
                    },
                  },
                ],
                [
                  {
                    key: "Default",
                    get: function () {
                      return ye;
                    },
                  },
                  {
                    key: "NAME",
                    get: function () {
                      return "collapse";
                    },
                  },
                  {
                    key: "collapseInterface",
                    value: function (e, n) {
                      var i = t.getInstance(e),
                        r = h(
                          h(h({}, ye), ce.getDataAttributes(e)),
                          "object" == D(n) && n ? n : {}
                        );
                      if (
                        (!i &&
                          r.toggle &&
                          "string" == typeof n &&
                          /show|hide/.test(n) &&
                          (r.toggle = !1),
                        i || (i = new t(e, r)),
                        "string" == typeof n)
                      ) {
                        if (void 0 === i[n])
                          throw new TypeError(
                            'No method named "'.concat(n, '"')
                          );
                        i[n]();
                      }
                    },
                  },
                  {
                    key: "jQueryInterface",
                    value: function (e) {
                      return this.each(function () {
                        t.collapseInterface(this, e);
                      });
                    },
                  },
                ]
              )
            );
          })(re);
        J.on(
          document,
          "click.bs.collapse.data-api",
          '[data-bs-toggle="collapse"]',
          function (e) {
            ("A" === e.target.tagName ||
              (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
              e.preventDefault();
            var t = ce.getDataAttributes(this),
              i = p(this);
            n(i).forEach(function (e) {
              var n,
                i = _e.getInstance(e);
              i
                ? (null === i._parent &&
                    "string" == typeof t.parent &&
                    ((i._config.parent = t.parent),
                    (i._parent = i._getParent())),
                  (n = "toggle"))
                : (n = t),
                _e.collapseInterface(e, n);
            });
          }
        ),
          j(_e);
        var we = new RegExp("ArrowUp|ArrowDown|Escape"),
          xe = N() ? "top-end" : "top-start",
          ke = N() ? "top-start" : "top-end",
          Ce = N() ? "bottom-end" : "bottom-start",
          De = N() ? "bottom-start" : "bottom-end",
          Te = N() ? "left-start" : "right-start",
          Ee = N() ? "right-start" : "left-start",
          Ae = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0,
          },
          Oe = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)",
          },
          Se = (function (e) {
            function i(e, t) {
              var n;
              return (
                v(this, i),
                ((n = f(this, i, [e]))._popper = null),
                (n._config = n._getConfig(t)),
                (n._menu = n._getMenuElement()),
                (n._inNavbar = n._detectNavbar()),
                n._addEventListeners(),
                n
              );
            }
            return (
              g(i, e),
              b(
                i,
                [
                  {
                    key: "toggle",
                    value: function () {
                      E(this._element) ||
                        (this._element.classList.contains("show")
                          ? this.hide()
                          : this.show());
                    },
                  },
                  {
                    key: "show",
                    value: function () {
                      if (
                        !E(this._element) &&
                        !this._menu.classList.contains("show")
                      ) {
                        var e = i.getParentFromElement(this._element),
                          n = { relatedTarget: this._element };
                        if (
                          !J.trigger(this._element, "show.bs.dropdown", n)
                            .defaultPrevented
                        ) {
                          var r;
                          if (this._inNavbar)
                            ce.setDataAttribute(this._menu, "popper", "none");
                          else {
                            if (void 0 === t)
                              throw new TypeError(
                                "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                              );
                            var o = this._element;
                            "parent" === this._config.reference
                              ? (o = e)
                              : _(this._config.reference)
                              ? (o = k(this._config.reference))
                              : "object" == D(this._config.reference) &&
                                (o = this._config.reference);
                            var s = this._getPopperConfig(),
                              a = s.modifiers.find(function (e) {
                                return (
                                  "applyStyles" === e.name && !1 === e.enabled
                                );
                              });
                            (this._popper = t.createPopper(o, this._menu, s)),
                              a &&
                                ce.setDataAttribute(
                                  this._menu,
                                  "popper",
                                  "static"
                                );
                          }
                          "ontouchstart" in document.documentElement &&
                            !e.closest(".navbar-nav") &&
                            (r = []).concat
                              .apply(r, x(document.body.children))
                              .forEach(function (e) {
                                return J.on(e, "mouseover", O);
                              }),
                            this._element.focus(),
                            this._element.setAttribute("aria-expanded", !0),
                            this._menu.classList.toggle("show"),
                            this._element.classList.toggle("show"),
                            J.trigger(this._element, "shown.bs.dropdown", n);
                        }
                      }
                    },
                  },
                  {
                    key: "hide",
                    value: function () {
                      if (
                        !E(this._element) &&
                        this._menu.classList.contains("show")
                      ) {
                        var e = { relatedTarget: this._element };
                        this._completeHide(e);
                      }
                    },
                  },
                  {
                    key: "dispose",
                    value: function () {
                      this._popper && this._popper.destroy(),
                        a(i, "dispose", this, 3)([]);
                    },
                  },
                  {
                    key: "update",
                    value: function () {
                      (this._inNavbar = this._detectNavbar()),
                        this._popper && this._popper.update();
                    },
                  },
                  {
                    key: "_addEventListeners",
                    value: function () {
                      var e = this;
                      J.on(this._element, "click.bs.dropdown", function (t) {
                        t.preventDefault(), e.toggle();
                      });
                    },
                  },
                  {
                    key: "_completeHide",
                    value: function (e) {
                      var t;
                      J.trigger(this._element, "hide.bs.dropdown", e)
                        .defaultPrevented ||
                        ("ontouchstart" in document.documentElement &&
                          (t = []).concat
                            .apply(t, x(document.body.children))
                            .forEach(function (e) {
                              return J.off(e, "mouseover", O);
                            }),
                        this._popper && this._popper.destroy(),
                        this._menu.classList.remove("show"),
                        this._element.classList.remove("show"),
                        this._element.setAttribute("aria-expanded", "false"),
                        ce.removeDataAttribute(this._menu, "popper"),
                        J.trigger(this._element, "hidden.bs.dropdown", e));
                    },
                  },
                  {
                    key: "_getConfig",
                    value: function (e) {
                      if (
                        ((e = h(
                          h(
                            h({}, this.constructor.Default),
                            ce.getDataAttributes(this._element)
                          ),
                          e
                        )),
                        C("dropdown", e, this.constructor.DefaultType),
                        "object" == D(e.reference) &&
                          !_(e.reference) &&
                          "function" !=
                            typeof e.reference.getBoundingClientRect)
                      )
                        throw new TypeError(
                          "dropdown".toUpperCase() +
                            ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
                        );
                      return e;
                    },
                  },
                  {
                    key: "_getMenuElement",
                    value: function () {
                      return c(this._element, ".dropdown-menu")[0];
                    },
                  },
                  {
                    key: "_getPlacement",
                    value: function () {
                      var e = this._element.parentNode;
                      if (e.classList.contains("dropend")) return Te;
                      if (e.classList.contains("dropstart")) return Ee;
                      var t =
                        "end" ===
                        getComputedStyle(this._menu)
                          .getPropertyValue("--bs-position")
                          .trim();
                      return e.classList.contains("dropup")
                        ? t
                          ? ke
                          : xe
                        : t
                        ? De
                        : Ce;
                    },
                  },
                  {
                    key: "_detectNavbar",
                    value: function () {
                      return null !== this._element.closest(".navbar");
                    },
                  },
                  {
                    key: "_getOffset",
                    value: function () {
                      var e = this,
                        t = this._config.offset;
                      return "string" == typeof t
                        ? t.split(",").map(function (e) {
                            return Number.parseInt(e, 10);
                          })
                        : "function" == typeof t
                        ? function (n) {
                            return t(n, e._element);
                          }
                        : t;
                    },
                  },
                  {
                    key: "_getPopperConfig",
                    value: function () {
                      var e = {
                        placement: this._getPlacement(),
                        modifiers: [
                          {
                            name: "preventOverflow",
                            options: { boundary: this._config.boundary },
                          },
                          {
                            name: "offset",
                            options: { offset: this._getOffset() },
                          },
                        ],
                      };
                      return (
                        "static" === this._config.display &&
                          (e.modifiers = [
                            { name: "applyStyles", enabled: !1 },
                          ]),
                        h(
                          h({}, e),
                          "function" == typeof this._config.popperConfig
                            ? this._config.popperConfig(e)
                            : this._config.popperConfig
                        )
                      );
                    },
                  },
                  {
                    key: "_selectMenuItem",
                    value: function (e) {
                      var t = e.key,
                        i = e.target,
                        r = n(
                          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                          this._menu
                        ).filter(T);
                      r.length &&
                        H(r, i, "ArrowDown" === t, !r.includes(i)).focus();
                    },
                  },
                ],
                [
                  {
                    key: "Default",
                    get: function () {
                      return Ae;
                    },
                  },
                  {
                    key: "DefaultType",
                    get: function () {
                      return Oe;
                    },
                  },
                  {
                    key: "NAME",
                    get: function () {
                      return "dropdown";
                    },
                  },
                  {
                    key: "dropdownInterface",
                    value: function (e, t) {
                      var n = i.getOrCreateInstance(e, t);
                      if ("string" == typeof t) {
                        if (void 0 === n[t])
                          throw new TypeError(
                            'No method named "'.concat(t, '"')
                          );
                        n[t]();
                      }
                    },
                  },
                  {
                    key: "jQueryInterface",
                    value: function (e) {
                      return this.each(function () {
                        i.dropdownInterface(this, e);
                      });
                    },
                  },
                  {
                    key: "clearMenus",
                    value: function (e) {
                      if (
                        !e ||
                        (2 !== e.button &&
                          ("keyup" !== e.type || "Tab" === e.key))
                      )
                        for (
                          var t = n('[data-bs-toggle="dropdown"]'),
                            r = 0,
                            o = t.length;
                          r < o;
                          r++
                        ) {
                          var s = i.getInstance(t[r]);
                          if (
                            s &&
                            !1 !== s._config.autoClose &&
                            s._element.classList.contains("show")
                          ) {
                            var a = { relatedTarget: s._element };
                            if (e) {
                              var l = e.composedPath(),
                                c = l.includes(s._menu);
                              if (
                                l.includes(s._element) ||
                                ("inside" === s._config.autoClose && !c) ||
                                ("outside" === s._config.autoClose && c)
                              )
                                continue;
                              if (
                                s._menu.contains(e.target) &&
                                (("keyup" === e.type && "Tab" === e.key) ||
                                  /input|select|option|textarea|form/i.test(
                                    e.target.tagName
                                  ))
                              )
                                continue;
                              "click" === e.type && (a.clickEvent = e);
                            }
                            s._completeHide(a);
                          }
                        }
                    },
                  },
                  {
                    key: "getParentFromElement",
                    value: function (e) {
                      return m(e) || e.parentNode;
                    },
                  },
                  {
                    key: "dataApiKeydownHandler",
                    value: function (e) {
                      var t = this;
                      if (
                        !(/input|textarea/i.test(e.target.tagName)
                          ? "Space" === e.key ||
                            ("Escape" !== e.key &&
                              (("ArrowDown" !== e.key && "ArrowUp" !== e.key) ||
                                e.target.closest(".dropdown-menu")))
                          : !we.test(e.key))
                      ) {
                        var n = this.classList.contains("show");
                        if (
                          (n || "Escape" !== e.key) &&
                          (e.preventDefault(), e.stopPropagation(), !E(this))
                        ) {
                          var r = function () {
                            return t.matches('[data-bs-toggle="dropdown"]')
                              ? t
                              : l(t, '[data-bs-toggle="dropdown"]')[0];
                          };
                          return "Escape" === e.key
                            ? (r().focus(), void i.clearMenus())
                            : "ArrowUp" === e.key || "ArrowDown" === e.key
                            ? (n || r().click(),
                              void i.getInstance(r())._selectMenuItem(e))
                            : void ((n && "Space" !== e.key) || i.clearMenus());
                        }
                      }
                    },
                  },
                ]
              )
            );
          })(re);
        J.on(
          document,
          "keydown.bs.dropdown.data-api",
          '[data-bs-toggle="dropdown"]',
          Se.dataApiKeydownHandler
        ),
          J.on(
            document,
            "keydown.bs.dropdown.data-api",
            ".dropdown-menu",
            Se.dataApiKeydownHandler
          ),
          J.on(document, "click.bs.dropdown.data-api", Se.clearMenus),
          J.on(document, "keyup.bs.dropdown.data-api", Se.clearMenus),
          J.on(
            document,
            "click.bs.dropdown.data-api",
            '[data-bs-toggle="dropdown"]',
            function (e) {
              e.preventDefault(), Se.dropdownInterface(this);
            }
          ),
          j(Se);
        var Me = (function () {
            return b(
              function e() {
                v(this, e), (this._element = document.body);
              },
              [
                {
                  key: "getWidth",
                  value: function () {
                    var e = document.documentElement.clientWidth;
                    return Math.abs(window.innerWidth - e);
                  },
                },
                {
                  key: "hide",
                  value: function () {
                    var e = this.getWidth();
                    this._disableOverFlow(),
                      this._setElementAttributes(
                        this._element,
                        "paddingRight",
                        function (t) {
                          return t + e;
                        }
                      ),
                      this._setElementAttributes(
                        ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                        "paddingRight",
                        function (t) {
                          return t + e;
                        }
                      ),
                      this._setElementAttributes(
                        ".sticky-top",
                        "marginRight",
                        function (t) {
                          return t - e;
                        }
                      );
                  },
                },
                {
                  key: "_disableOverFlow",
                  value: function () {
                    this._saveInitialAttribute(this._element, "overflow"),
                      (this._element.style.overflow = "hidden");
                  },
                },
                {
                  key: "_setElementAttributes",
                  value: function (e, t, n) {
                    var i = this,
                      r = this.getWidth();
                    this._applyManipulationCallback(e, function (e) {
                      if (
                        !(
                          e !== i._element &&
                          window.innerWidth > e.clientWidth + r
                        )
                      ) {
                        i._saveInitialAttribute(e, t);
                        var o = window.getComputedStyle(e)[t];
                        e.style[t] = n(Number.parseFloat(o)) + "px";
                      }
                    });
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    this._resetElementAttributes(this._element, "overflow"),
                      this._resetElementAttributes(
                        this._element,
                        "paddingRight"
                      ),
                      this._resetElementAttributes(
                        ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                        "paddingRight"
                      ),
                      this._resetElementAttributes(
                        ".sticky-top",
                        "marginRight"
                      );
                  },
                },
                {
                  key: "_saveInitialAttribute",
                  value: function (e, t) {
                    var n = e.style[t];
                    n && ce.setDataAttribute(e, t, n);
                  },
                },
                {
                  key: "_resetElementAttributes",
                  value: function (e, t) {
                    this._applyManipulationCallback(e, function (e) {
                      var n = ce.getDataAttribute(e, t);
                      void 0 === n
                        ? e.style.removeProperty(t)
                        : (ce.removeDataAttribute(e, t), (e.style[t] = n));
                    });
                  },
                },
                {
                  key: "_applyManipulationCallback",
                  value: function (e, t) {
                    _(e) ? t(e) : n(e, this._element).forEach(t);
                  },
                },
                {
                  key: "isOverflowing",
                  value: function () {
                    return this.getWidth() > 0;
                  },
                },
              ]
            );
          })(),
          Le = {
            isVisible: !0,
            isAnimated: !1,
            rootElement: "body",
            clickCallback: null,
          },
          Ne = {
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)",
          },
          je = (function () {
            return b(
              function e(t) {
                v(this, e),
                  (this._config = this._getConfig(t)),
                  (this._isAppended = !1),
                  (this._element = null);
              },
              [
                {
                  key: "show",
                  value: function (e) {
                    this._config.isVisible
                      ? (this._append(),
                        this._config.isAnimated && S(this._getElement()),
                        this._getElement().classList.add("show"),
                        this._emulateAnimation(function () {
                          P(e);
                        }))
                      : P(e);
                  },
                },
                {
                  key: "hide",
                  value: function (e) {
                    var t = this;
                    this._config.isVisible
                      ? (this._getElement().classList.remove("show"),
                        this._emulateAnimation(function () {
                          t.dispose(), P(e);
                        }))
                      : P(e);
                  },
                },
                {
                  key: "_getElement",
                  value: function () {
                    if (!this._element) {
                      var e = document.createElement("div");
                      (e.className = "modal-backdrop"),
                        this._config.isAnimated && e.classList.add("fade"),
                        (this._element = e);
                    }
                    return this._element;
                  },
                },
                {
                  key: "_getConfig",
                  value: function (e) {
                    return (
                      ((e = h(
                        h({}, Le),
                        "object" == D(e) ? e : {}
                      )).rootElement = k(e.rootElement)),
                      C("backdrop", e, Ne),
                      e
                    );
                  },
                },
                {
                  key: "_append",
                  value: function () {
                    var e = this;
                    this._isAppended ||
                      (this._config.rootElement.appendChild(this._getElement()),
                      J.on(
                        this._getElement(),
                        "mousedown.bs.backdrop",
                        function () {
                          P(e._config.clickCallback);
                        }
                      ),
                      (this._isAppended = !0));
                  },
                },
                {
                  key: "dispose",
                  value: function () {
                    this._isAppended &&
                      (J.off(this._element, "mousedown.bs.backdrop"),
                      this._element.remove(),
                      (this._isAppended = !1));
                  },
                },
                {
                  key: "_emulateAnimation",
                  value: function (e) {
                    I(e, this._getElement(), this._config.isAnimated);
                  },
                },
              ]
            );
          })(),
          Pe = { backdrop: !0, keyboard: !0, focus: !0 },
          Ie = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
          },
          He = (function (e) {
            function t(e, n) {
              var i;
              return (
                v(this, t),
                ((i = f(this, t, [e]))._config = i._getConfig(n)),
                (i._dialog = r(".modal-dialog", i._element)),
                (i._backdrop = i._initializeBackDrop()),
                (i._isShown = !1),
                (i._ignoreBackdropClick = !1),
                (i._isTransitioning = !1),
                (i._scrollBar = new Me()),
                i
              );
            }
            return (
              g(t, e),
              b(
                t,
                [
                  {
                    key: "toggle",
                    value: function (e) {
                      return this._isShown ? this.hide() : this.show(e);
                    },
                  },
                  {
                    key: "show",
                    value: function (e) {
                      var t = this;
                      this._isShown ||
                        this._isTransitioning ||
                        J.trigger(this._element, "show.bs.modal", {
                          relatedTarget: e,
                        }).defaultPrevented ||
                        ((this._isShown = !0),
                        this._isAnimated() && (this._isTransitioning = !0),
                        this._scrollBar.hide(),
                        document.body.classList.add("modal-open"),
                        this._adjustDialog(),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        J.on(
                          this._element,
                          "click.dismiss.bs.modal",
                          '[data-bs-dismiss="modal"]',
                          function (e) {
                            return t.hide(e);
                          }
                        ),
                        J.on(
                          this._dialog,
                          "mousedown.dismiss.bs.modal",
                          function () {
                            J.one(
                              t._element,
                              "mouseup.dismiss.bs.modal",
                              function (e) {
                                e.target === t._element &&
                                  (t._ignoreBackdropClick = !0);
                              }
                            );
                          }
                        ),
                        this._showBackdrop(function () {
                          return t._showElement(e);
                        }));
                    },
                  },
                  {
                    key: "hide",
                    value: function (e) {
                      var t = this;
                      if (
                        (e &&
                          ["A", "AREA"].includes(e.target.tagName) &&
                          e.preventDefault(),
                        this._isShown &&
                          !this._isTransitioning &&
                          !J.trigger(this._element, "hide.bs.modal")
                            .defaultPrevented)
                      ) {
                        this._isShown = !1;
                        var n = this._isAnimated();
                        n && (this._isTransitioning = !0),
                          this._setEscapeEvent(),
                          this._setResizeEvent(),
                          J.off(document, "focusin.bs.modal"),
                          this._element.classList.remove("show"),
                          J.off(this._element, "click.dismiss.bs.modal"),
                          J.off(this._dialog, "mousedown.dismiss.bs.modal"),
                          this._queueCallback(
                            function () {
                              return t._hideModal();
                            },
                            this._element,
                            n
                          );
                      }
                    },
                  },
                  {
                    key: "dispose",
                    value: function () {
                      [window, this._dialog].forEach(function (e) {
                        return J.off(e, ".bs.modal");
                      }),
                        this._backdrop.dispose(),
                        a(t, "dispose", this, 3)([]),
                        J.off(document, "focusin.bs.modal");
                    },
                  },
                  {
                    key: "handleUpdate",
                    value: function () {
                      this._adjustDialog();
                    },
                  },
                  {
                    key: "_initializeBackDrop",
                    value: function () {
                      return new je({
                        isVisible: Boolean(this._config.backdrop),
                        isAnimated: this._isAnimated(),
                      });
                    },
                  },
                  {
                    key: "_getConfig",
                    value: function (e) {
                      return (
                        (e = h(
                          h(h({}, Pe), ce.getDataAttributes(this._element)),
                          "object" == D(e) ? e : {}
                        )),
                        C("modal", e, Ie),
                        e
                      );
                    },
                  },
                  {
                    key: "_showElement",
                    value: function (e) {
                      var t = this,
                        n = this._isAnimated(),
                        i = r(".modal-body", this._dialog);
                      (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                          Node.ELEMENT_NODE) ||
                        document.body.appendChild(this._element),
                        (this._element.style.display = "block"),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        (this._element.scrollTop = 0),
                        i && (i.scrollTop = 0),
                        n && S(this._element),
                        this._element.classList.add("show"),
                        this._config.focus && this._enforceFocus(),
                        this._queueCallback(
                          function () {
                            t._config.focus && t._element.focus(),
                              (t._isTransitioning = !1),
                              J.trigger(t._element, "shown.bs.modal", {
                                relatedTarget: e,
                              });
                          },
                          this._dialog,
                          n
                        );
                    },
                  },
                  {
                    key: "_enforceFocus",
                    value: function () {
                      var e = this;
                      J.off(document, "focusin.bs.modal"),
                        J.on(document, "focusin.bs.modal", function (t) {
                          document === t.target ||
                            e._element === t.target ||
                            e._element.contains(t.target) ||
                            e._element.focus();
                        });
                    },
                  },
                  {
                    key: "_setEscapeEvent",
                    value: function () {
                      var e = this;
                      this._isShown
                        ? J.on(
                            this._element,
                            "keydown.dismiss.bs.modal",
                            function (t) {
                              e._config.keyboard && "Escape" === t.key
                                ? (t.preventDefault(), e.hide())
                                : e._config.keyboard ||
                                  "Escape" !== t.key ||
                                  e._triggerBackdropTransition();
                            }
                          )
                        : J.off(this._element, "keydown.dismiss.bs.modal");
                    },
                  },
                  {
                    key: "_setResizeEvent",
                    value: function () {
                      var e = this;
                      this._isShown
                        ? J.on(window, "resize.bs.modal", function () {
                            return e._adjustDialog();
                          })
                        : J.off(window, "resize.bs.modal");
                    },
                  },
                  {
                    key: "_hideModal",
                    value: function () {
                      var e = this;
                      (this._element.style.display = "none"),
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        (this._isTransitioning = !1),
                        this._backdrop.hide(function () {
                          document.body.classList.remove("modal-open"),
                            e._resetAdjustments(),
                            e._scrollBar.reset(),
                            J.trigger(e._element, "hidden.bs.modal");
                        });
                    },
                  },
                  {
                    key: "_showBackdrop",
                    value: function (e) {
                      var t = this;
                      J.on(
                        this._element,
                        "click.dismiss.bs.modal",
                        function (e) {
                          t._ignoreBackdropClick
                            ? (t._ignoreBackdropClick = !1)
                            : e.target === e.currentTarget &&
                              (!0 === t._config.backdrop
                                ? t.hide()
                                : "static" === t._config.backdrop &&
                                  t._triggerBackdropTransition());
                        }
                      ),
                        this._backdrop.show(e);
                    },
                  },
                  {
                    key: "_isAnimated",
                    value: function () {
                      return this._element.classList.contains("fade");
                    },
                  },
                  {
                    key: "_triggerBackdropTransition",
                    value: function () {
                      var e = this;
                      if (
                        !J.trigger(this._element, "hidePrevented.bs.modal")
                          .defaultPrevented
                      ) {
                        var t = this._element,
                          n = t.classList,
                          i = t.scrollHeight,
                          r = t.style,
                          o = i > document.documentElement.clientHeight;
                        (!o && "hidden" === r.overflowY) ||
                          n.contains("modal-static") ||
                          (o || (r.overflowY = "hidden"),
                          n.add("modal-static"),
                          this._queueCallback(function () {
                            n.remove("modal-static"),
                              o ||
                                e._queueCallback(function () {
                                  r.overflowY = "";
                                }, e._dialog);
                          }, this._dialog),
                          this._element.focus());
                      }
                    },
                  },
                  {
                    key: "_adjustDialog",
                    value: function () {
                      var e =
                          this._element.scrollHeight >
                          document.documentElement.clientHeight,
                        t = this._scrollBar.getWidth(),
                        n = t > 0;
                      ((!n && e && !N()) || (n && !e && N())) &&
                        (this._element.style.paddingLeft = t + "px"),
                        ((n && !e && !N()) || (!n && e && N())) &&
                          (this._element.style.paddingRight = t + "px");
                    },
                  },
                  {
                    key: "_resetAdjustments",
                    value: function () {
                      (this._element.style.paddingLeft = ""),
                        (this._element.style.paddingRight = "");
                    },
                  },
                ],
                [
                  {
                    key: "Default",
                    get: function () {
                      return Pe;
                    },
                  },
                  {
                    key: "NAME",
                    get: function () {
                      return "modal";
                    },
                  },
                  {
                    key: "jQueryInterface",
                    value: function (e, n) {
                      return this.each(function () {
                        var i = t.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                          if (void 0 === i[e])
                            throw new TypeError(
                              'No method named "'.concat(e, '"')
                            );
                          i[e](n);
                        }
                      });
                    },
                  },
                ]
              )
            );
          })(re);
        J.on(
          document,
          "click.bs.modal.data-api",
          '[data-bs-toggle="modal"]',
          function (e) {
            var t = this,
              n = m(this);
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
              J.one(n, "show.bs.modal", function (e) {
                e.defaultPrevented ||
                  J.one(n, "hidden.bs.modal", function () {
                    T(t) && t.focus();
                  });
              }),
              He.getOrCreateInstance(n).toggle(this);
          }
        ),
          j(He);
        var We = { backdrop: !0, keyboard: !0, scroll: !1 },
          Re = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
          Fe = (function (e) {
            function t(e, n) {
              var i;
              return (
                v(this, t),
                ((i = f(this, t, [e]))._config = i._getConfig(n)),
                (i._isShown = !1),
                (i._backdrop = i._initializeBackDrop()),
                i._addEventListeners(),
                i
              );
            }
            return (
              g(t, e),
              b(
                t,
                [
                  {
                    key: "toggle",
                    value: function (e) {
                      return this._isShown ? this.hide() : this.show(e);
                    },
                  },
                  {
                    key: "show",
                    value: function (e) {
                      var t = this;
                      this._isShown ||
                        J.trigger(this._element, "show.bs.offcanvas", {
                          relatedTarget: e,
                        }).defaultPrevented ||
                        ((this._isShown = !0),
                        (this._element.style.visibility = "visible"),
                        this._backdrop.show(),
                        this._config.scroll ||
                          (new Me().hide(),
                          this._enforceFocusOnElement(this._element)),
                        this._element.removeAttribute("aria-hidden"),
                        this._element.setAttribute("aria-modal", !0),
                        this._element.setAttribute("role", "dialog"),
                        this._element.classList.add("show"),
                        this._queueCallback(
                          function () {
                            J.trigger(t._element, "shown.bs.offcanvas", {
                              relatedTarget: e,
                            });
                          },
                          this._element,
                          !0
                        ));
                    },
                  },
                  {
                    key: "hide",
                    value: function () {
                      var e = this;
                      this._isShown &&
                        (J.trigger(this._element, "hide.bs.offcanvas")
                          .defaultPrevented ||
                          (J.off(document, "focusin.bs.offcanvas"),
                          this._element.blur(),
                          (this._isShown = !1),
                          this._element.classList.remove("show"),
                          this._backdrop.hide(),
                          this._queueCallback(
                            function () {
                              e._element.setAttribute("aria-hidden", !0),
                                e._element.removeAttribute("aria-modal"),
                                e._element.removeAttribute("role"),
                                (e._element.style.visibility = "hidden"),
                                e._config.scroll || new Me().reset(),
                                J.trigger(e._element, "hidden.bs.offcanvas");
                            },
                            this._element,
                            !0
                          )));
                    },
                  },
                  {
                    key: "dispose",
                    value: function () {
                      this._backdrop.dispose(),
                        a(t, "dispose", this, 3)([]),
                        J.off(document, "focusin.bs.offcanvas");
                    },
                  },
                  {
                    key: "_getConfig",
                    value: function (e) {
                      return (
                        (e = h(
                          h(h({}, We), ce.getDataAttributes(this._element)),
                          "object" == D(e) ? e : {}
                        )),
                        C("offcanvas", e, Re),
                        e
                      );
                    },
                  },
                  {
                    key: "_initializeBackDrop",
                    value: function () {
                      var e = this;
                      return new je({
                        isVisible: this._config.backdrop,
                        isAnimated: !0,
                        rootElement: this._element.parentNode,
                        clickCallback: function () {
                          return e.hide();
                        },
                      });
                    },
                  },
                  {
                    key: "_enforceFocusOnElement",
                    value: function (e) {
                      J.off(document, "focusin.bs.offcanvas"),
                        J.on(document, "focusin.bs.offcanvas", function (t) {
                          document === t.target ||
                            e === t.target ||
                            e.contains(t.target) ||
                            e.focus();
                        }),
                        e.focus();
                    },
                  },
                  {
                    key: "_addEventListeners",
                    value: function () {
                      var e = this;
                      J.on(
                        this._element,
                        "click.dismiss.bs.offcanvas",
                        '[data-bs-dismiss="offcanvas"]',
                        function () {
                          return e.hide();
                        }
                      ),
                        J.on(
                          this._element,
                          "keydown.dismiss.bs.offcanvas",
                          function (t) {
                            e._config.keyboard &&
                              "Escape" === t.key &&
                              e.hide();
                          }
                        );
                    },
                  },
                ],
                [
                  {
                    key: "NAME",
                    get: function () {
                      return "offcanvas";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return We;
                    },
                  },
                  {
                    key: "jQueryInterface",
                    value: function (e) {
                      return this.each(function () {
                        var n = t.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                          if (
                            void 0 === n[e] ||
                            e.startsWith("_") ||
                            "constructor" === e
                          )
                            throw new TypeError(
                              'No method named "'.concat(e, '"')
                            );
                          n[e](this);
                        }
                      });
                    },
                  },
                ]
              )
            );
          })(re);
        J.on(
          document,
          "click.bs.offcanvas.data-api",
          '[data-bs-toggle="offcanvas"]',
          function (e) {
            var t = this,
              n = m(this);
            if (
              (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
              !E(this))
            ) {
              J.one(n, "hidden.bs.offcanvas", function () {
                T(t) && t.focus();
              });
              var i = r(".offcanvas.show");
              i && i !== n && Fe.getInstance(i).hide(),
                Fe.getOrCreateInstance(n).toggle(this);
            }
          }
        ),
          J.on(window, "load.bs.offcanvas.data-api", function () {
            return n(".offcanvas.show").forEach(function (e) {
              return Fe.getOrCreateInstance(e).show();
            });
          }),
          j(Fe);
        var $e = new Set([
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
          ]),
          Ue = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
          ze =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
        function qe(e, t, n) {
          var i;
          if (!e.length) return e;
          if (n && "function" == typeof n) return n(e);
          for (
            var r = new window.DOMParser().parseFromString(e, "text/html"),
              o = Object.keys(t),
              s = (i = []).concat.apply(i, x(r.body.querySelectorAll("*"))),
              a = function () {
                var e,
                  n = s[l],
                  i = n.nodeName.toLowerCase();
                if (!o.includes(i)) return n.remove(), 1;
                var r = (e = []).concat.apply(e, x(n.attributes)),
                  a = [].concat(t["*"] || [], t[i] || []);
                r.forEach(function (e) {
                  (function (e, t) {
                    var n = e.nodeName.toLowerCase();
                    if (t.includes(n))
                      return (
                        !$e.has(n) ||
                        Boolean(Ue.test(e.nodeValue) || ze.test(e.nodeValue))
                      );
                    for (
                      var i = t.filter(function (e) {
                          return e instanceof RegExp;
                        }),
                        r = 0,
                        o = i.length;
                      r < o;
                      r++
                    )
                      if (i[r].test(n)) return !0;
                    return !1;
                  })(e, a) || n.removeAttribute(e.nodeName);
                });
              },
              l = 0,
              c = s.length;
            l < c;
            l++
          )
            a();
          return r.body.innerHTML;
        }
        var Be = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
          Ve = new Set(["sanitize", "allowList", "sanitizeFn"]),
          Ye = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)",
          },
          Xe = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: N() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: N() ? "right" : "left",
          },
          Ke = {
            animation: !0,
            template:
              '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
              "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
              a: ["target", "href", "title", "rel"],
              area: [],
              b: [],
              br: [],
              col: [],
              code: [],
              div: [],
              em: [],
              hr: [],
              h1: [],
              h2: [],
              h3: [],
              h4: [],
              h5: [],
              h6: [],
              i: [],
              img: ["src", "srcset", "alt", "title", "width", "height"],
              li: [],
              ol: [],
              p: [],
              pre: [],
              s: [],
              small: [],
              span: [],
              sub: [],
              sup: [],
              strong: [],
              u: [],
              ul: [],
            },
            popperConfig: null,
          },
          Qe = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip",
          },
          Ge = (function (e) {
            function n(e, i) {
              var r;
              if ((v(this, n), void 0 === t))
                throw new TypeError(
                  "Bootstrap's tooltips require Popper (https://popper.js.org)"
                );
              return (
                ((r = f(this, n, [e]))._isEnabled = !0),
                (r._timeout = 0),
                (r._hoverState = ""),
                (r._activeTrigger = {}),
                (r._popper = null),
                (r._config = r._getConfig(i)),
                (r.tip = null),
                r._setListeners(),
                r
              );
            }
            return (
              g(n, e),
              b(
                n,
                [
                  {
                    key: "enable",
                    value: function () {
                      this._isEnabled = !0;
                    },
                  },
                  {
                    key: "disable",
                    value: function () {
                      this._isEnabled = !1;
                    },
                  },
                  {
                    key: "toggleEnabled",
                    value: function () {
                      this._isEnabled = !this._isEnabled;
                    },
                  },
                  {
                    key: "toggle",
                    value: function (e) {
                      if (this._isEnabled)
                        if (e) {
                          var t = this._initializeOnDelegatedTarget(e);
                          (t._activeTrigger.click = !t._activeTrigger.click),
                            t._isWithActiveTrigger()
                              ? t._enter(null, t)
                              : t._leave(null, t);
                        } else {
                          if (this.getTipElement().classList.contains("show"))
                            return void this._leave(null, this);
                          this._enter(null, this);
                        }
                    },
                  },
                  {
                    key: "dispose",
                    value: function () {
                      clearTimeout(this._timeout),
                        J.off(
                          this._element.closest(".modal"),
                          "hide.bs.modal",
                          this._hideModalHandler
                        ),
                        this.tip && this.tip.remove(),
                        this._popper && this._popper.destroy(),
                        a(n, "dispose", this, 3)([]);
                    },
                  },
                  {
                    key: "show",
                    value: function () {
                      var e,
                        n,
                        i = this;
                      if ("none" === this._element.style.display)
                        throw new Error("Please use show on visible elements");
                      if (this.isWithContent() && this._isEnabled) {
                        var r = J.trigger(
                            this._element,
                            this.constructor.Event.SHOW
                          ),
                          o = A(this._element),
                          s =
                            null === o
                              ? this._element.ownerDocument.documentElement.contains(
                                  this._element
                                )
                              : o.contains(this._element);
                        if (!r.defaultPrevented && s) {
                          var a = this.getTipElement(),
                            l = u(this.constructor.NAME);
                          a.setAttribute("id", l),
                            this._element.setAttribute("aria-describedby", l),
                            this.setContent(),
                            this._config.animation && a.classList.add("fade");
                          var c =
                              "function" == typeof this._config.placement
                                ? this._config.placement.call(
                                    this,
                                    a,
                                    this._element
                                  )
                                : this._config.placement,
                            h = this._getAttachment(c);
                          this._addAttachmentClass(h);
                          var d = this._config.container;
                          te(a, this.constructor.DATA_KEY, this),
                            this._element.ownerDocument.documentElement.contains(
                              this.tip
                            ) ||
                              (d.appendChild(a),
                              J.trigger(
                                this._element,
                                this.constructor.Event.INSERTED
                              )),
                            this._popper
                              ? this._popper.update()
                              : (this._popper = t.createPopper(
                                  this._element,
                                  a,
                                  this._getPopperConfig(h)
                                )),
                            a.classList.add("show");
                          var f =
                            "function" == typeof this._config.customClass
                              ? this._config.customClass()
                              : this._config.customClass;
                          f && (e = a.classList).add.apply(e, x(f.split(" "))),
                            "ontouchstart" in document.documentElement &&
                              (n = []).concat
                                .apply(n, x(document.body.children))
                                .forEach(function (e) {
                                  J.on(e, "mouseover", O);
                                });
                          var p = this.tip.classList.contains("fade");
                          this._queueCallback(
                            function () {
                              var e = i._hoverState;
                              (i._hoverState = null),
                                J.trigger(
                                  i._element,
                                  i.constructor.Event.SHOWN
                                ),
                                "out" === e && i._leave(null, i);
                            },
                            this.tip,
                            p
                          );
                        }
                      }
                    },
                  },
                  {
                    key: "hide",
                    value: function () {
                      var e,
                        t = this;
                      if (this._popper) {
                        var n = this.getTipElement();
                        if (
                          !J.trigger(this._element, this.constructor.Event.HIDE)
                            .defaultPrevented
                        ) {
                          n.classList.remove("show"),
                            "ontouchstart" in document.documentElement &&
                              (e = []).concat
                                .apply(e, x(document.body.children))
                                .forEach(function (e) {
                                  return J.off(e, "mouseover", O);
                                }),
                            (this._activeTrigger.click = !1),
                            (this._activeTrigger.focus = !1),
                            (this._activeTrigger.hover = !1);
                          var i = this.tip.classList.contains("fade");
                          this._queueCallback(
                            function () {
                              t._isWithActiveTrigger() ||
                                ("show" !== t._hoverState && n.remove(),
                                t._cleanTipClass(),
                                t._element.removeAttribute("aria-describedby"),
                                J.trigger(
                                  t._element,
                                  t.constructor.Event.HIDDEN
                                ),
                                t._popper &&
                                  (t._popper.destroy(), (t._popper = null)));
                            },
                            this.tip,
                            i
                          ),
                            (this._hoverState = "");
                        }
                      }
                    },
                  },
                  {
                    key: "update",
                    value: function () {
                      null !== this._popper && this._popper.update();
                    },
                  },
                  {
                    key: "isWithContent",
                    value: function () {
                      return Boolean(this.getTitle());
                    },
                  },
                  {
                    key: "getTipElement",
                    value: function () {
                      if (this.tip) return this.tip;
                      var e = document.createElement("div");
                      return (
                        (e.innerHTML = this._config.template),
                        (this.tip = e.children[0]),
                        this.tip
                      );
                    },
                  },
                  {
                    key: "setContent",
                    value: function () {
                      var e = this.getTipElement();
                      this.setElementContent(
                        r(".tooltip-inner", e),
                        this.getTitle()
                      ),
                        e.classList.remove("fade", "show");
                    },
                  },
                  {
                    key: "setElementContent",
                    value: function (e, t) {
                      if (null !== e)
                        return _(t)
                          ? ((t = k(t)),
                            void (this._config.html
                              ? t.parentNode !== e &&
                                ((e.innerHTML = ""), e.appendChild(t))
                              : (e.textContent = t.textContent)))
                          : void (this._config.html
                              ? (this._config.sanitize &&
                                  (t = qe(
                                    t,
                                    this._config.allowList,
                                    this._config.sanitizeFn
                                  )),
                                (e.innerHTML = t))
                              : (e.textContent = t));
                    },
                  },
                  {
                    key: "getTitle",
                    value: function () {
                      var e = this._element.getAttribute(
                        "data-bs-original-title"
                      );
                      return (
                        e ||
                          (e =
                            "function" == typeof this._config.title
                              ? this._config.title.call(this._element)
                              : this._config.title),
                        e
                      );
                    },
                  },
                  {
                    key: "updateAttachment",
                    value: function (e) {
                      return "right" === e ? "end" : "left" === e ? "start" : e;
                    },
                  },
                  {
                    key: "_initializeOnDelegatedTarget",
                    value: function (e, t) {
                      var n = this.constructor.DATA_KEY;
                      return (
                        (t = t || ne(e.delegateTarget, n)) ||
                          ((t = new this.constructor(
                            e.delegateTarget,
                            this._getDelegateConfig()
                          )),
                          te(e.delegateTarget, n, t)),
                        t
                      );
                    },
                  },
                  {
                    key: "_getOffset",
                    value: function () {
                      var e = this,
                        t = this._config.offset;
                      return "string" == typeof t
                        ? t.split(",").map(function (e) {
                            return Number.parseInt(e, 10);
                          })
                        : "function" == typeof t
                        ? function (n) {
                            return t(n, e._element);
                          }
                        : t;
                    },
                  },
                  {
                    key: "_getPopperConfig",
                    value: function (e) {
                      var t = this,
                        n = {
                          placement: e,
                          modifiers: [
                            {
                              name: "flip",
                              options: {
                                fallbackPlacements:
                                  this._config.fallbackPlacements,
                              },
                            },
                            {
                              name: "offset",
                              options: { offset: this._getOffset() },
                            },
                            {
                              name: "preventOverflow",
                              options: { boundary: this._config.boundary },
                            },
                            {
                              name: "arrow",
                              options: {
                                element: ".".concat(
                                  this.constructor.NAME,
                                  "-arrow"
                                ),
                              },
                            },
                            {
                              name: "onChange",
                              enabled: !0,
                              phase: "afterWrite",
                              fn: function (e) {
                                return t._handlePopperPlacementChange(e);
                              },
                            },
                          ],
                          onFirstUpdate: function (e) {
                            e.options.placement !== e.placement &&
                              t._handlePopperPlacementChange(e);
                          },
                        };
                      return h(
                        h({}, n),
                        "function" == typeof this._config.popperConfig
                          ? this._config.popperConfig(n)
                          : this._config.popperConfig
                      );
                    },
                  },
                  {
                    key: "_addAttachmentClass",
                    value: function (e) {
                      this.getTipElement().classList.add(
                        "bs-tooltip-" + this.updateAttachment(e)
                      );
                    },
                  },
                  {
                    key: "_getAttachment",
                    value: function (e) {
                      return Xe[e.toUpperCase()];
                    },
                  },
                  {
                    key: "_setListeners",
                    value: function () {
                      var e = this;
                      this._config.trigger.split(" ").forEach(function (t) {
                        if ("click" === t)
                          J.on(
                            e._element,
                            e.constructor.Event.CLICK,
                            e._config.selector,
                            function (t) {
                              return e.toggle(t);
                            }
                          );
                        else if ("manual" !== t) {
                          var n =
                              "hover" === t
                                ? e.constructor.Event.MOUSEENTER
                                : e.constructor.Event.FOCUSIN,
                            i =
                              "hover" === t
                                ? e.constructor.Event.MOUSELEAVE
                                : e.constructor.Event.FOCUSOUT;
                          J.on(e._element, n, e._config.selector, function (t) {
                            return e._enter(t);
                          }),
                            J.on(
                              e._element,
                              i,
                              e._config.selector,
                              function (t) {
                                return e._leave(t);
                              }
                            );
                        }
                      }),
                        (this._hideModalHandler = function () {
                          e._element && e.hide();
                        }),
                        J.on(
                          this._element.closest(".modal"),
                          "hide.bs.modal",
                          this._hideModalHandler
                        ),
                        this._config.selector
                          ? (this._config = h(
                              h({}, this._config),
                              {},
                              { trigger: "manual", selector: "" }
                            ))
                          : this._fixTitle();
                    },
                  },
                  {
                    key: "_fixTitle",
                    value: function () {
                      var e = this._element.getAttribute("title"),
                        t = D(
                          this._element.getAttribute("data-bs-original-title")
                        );
                      (e || "string" !== t) &&
                        (this._element.setAttribute(
                          "data-bs-original-title",
                          e || ""
                        ),
                        !e ||
                          this._element.getAttribute("aria-label") ||
                          this._element.textContent ||
                          this._element.setAttribute("aria-label", e),
                        this._element.setAttribute("title", ""));
                    },
                  },
                  {
                    key: "_enter",
                    value: function (e, t) {
                      (t = this._initializeOnDelegatedTarget(e, t)),
                        e &&
                          (t._activeTrigger[
                            "focusin" === e.type ? "focus" : "hover"
                          ] = !0),
                        t.getTipElement().classList.contains("show") ||
                        "show" === t._hoverState
                          ? (t._hoverState = "show")
                          : (clearTimeout(t._timeout),
                            (t._hoverState = "show"),
                            t._config.delay && t._config.delay.show
                              ? (t._timeout = setTimeout(function () {
                                  "show" === t._hoverState && t.show();
                                }, t._config.delay.show))
                              : t.show());
                    },
                  },
                  {
                    key: "_leave",
                    value: function (e, t) {
                      (t = this._initializeOnDelegatedTarget(e, t)),
                        e &&
                          (t._activeTrigger[
                            "focusout" === e.type ? "focus" : "hover"
                          ] = t._element.contains(e.relatedTarget)),
                        t._isWithActiveTrigger() ||
                          (clearTimeout(t._timeout),
                          (t._hoverState = "out"),
                          t._config.delay && t._config.delay.hide
                            ? (t._timeout = setTimeout(function () {
                                "out" === t._hoverState && t.hide();
                              }, t._config.delay.hide))
                            : t.hide());
                    },
                  },
                  {
                    key: "_isWithActiveTrigger",
                    value: function () {
                      for (var e in this._activeTrigger)
                        if (this._activeTrigger[e]) return !0;
                      return !1;
                    },
                  },
                  {
                    key: "_getConfig",
                    value: function (e) {
                      var t = ce.getDataAttributes(this._element);
                      return (
                        Object.keys(t).forEach(function (e) {
                          Ve.has(e) && delete t[e];
                        }),
                        ((e = h(
                          h(h({}, this.constructor.Default), t),
                          "object" == D(e) && e ? e : {}
                        )).container =
                          !1 === e.container ? document.body : k(e.container)),
                        "number" == typeof e.delay &&
                          (e.delay = { show: e.delay, hide: e.delay }),
                        "number" == typeof e.title &&
                          (e.title = e.title.toString()),
                        "number" == typeof e.content &&
                          (e.content = e.content.toString()),
                        C("tooltip", e, this.constructor.DefaultType),
                        e.sanitize &&
                          (e.template = qe(
                            e.template,
                            e.allowList,
                            e.sanitizeFn
                          )),
                        e
                      );
                    },
                  },
                  {
                    key: "_getDelegateConfig",
                    value: function () {
                      var e = {};
                      if (this._config)
                        for (var t in this._config)
                          this.constructor.Default[t] !== this._config[t] &&
                            (e[t] = this._config[t]);
                      return e;
                    },
                  },
                  {
                    key: "_cleanTipClass",
                    value: function () {
                      var e = this.getTipElement(),
                        t = e.getAttribute("class").match(Be);
                      null !== t &&
                        t.length > 0 &&
                        t
                          .map(function (e) {
                            return e.trim();
                          })
                          .forEach(function (t) {
                            return e.classList.remove(t);
                          });
                    },
                  },
                  {
                    key: "_handlePopperPlacementChange",
                    value: function (e) {
                      var t = e.state;
                      t &&
                        ((this.tip = t.elements.popper),
                        this._cleanTipClass(),
                        this._addAttachmentClass(
                          this._getAttachment(t.placement)
                        ));
                    },
                  },
                ],
                [
                  {
                    key: "Default",
                    get: function () {
                      return Ke;
                    },
                  },
                  {
                    key: "NAME",
                    get: function () {
                      return "tooltip";
                    },
                  },
                  {
                    key: "Event",
                    get: function () {
                      return Qe;
                    },
                  },
                  {
                    key: "DefaultType",
                    get: function () {
                      return Ye;
                    },
                  },
                  {
                    key: "jQueryInterface",
                    value: function (e) {
                      return this.each(function () {
                        var t = n.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                          if (void 0 === t[e])
                            throw new TypeError(
                              'No method named "'.concat(e, '"')
                            );
                          t[e]();
                        }
                      });
                    },
                  },
                ]
              )
            );
          })(re);
        j(Ge);
        var Ze = new RegExp("(^|\\s)bs-popover\\S+", "g"),
          Je = h(
            h({}, Ge.Default),
            {},
            {
              placement: "right",
              offset: [0, 8],
              trigger: "click",
              content: "",
              template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            }
          ),
          et = h(
            h({}, Ge.DefaultType),
            {},
            { content: "(string|element|function)" }
          ),
          tt = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover",
          },
          nt = (function (e) {
            function t() {
              return v(this, t), f(this, t, arguments);
            }
            return (
              g(t, e),
              b(
                t,
                [
                  {
                    key: "isWithContent",
                    value: function () {
                      return this.getTitle() || this._getContent();
                    },
                  },
                  {
                    key: "getTipElement",
                    value: function () {
                      return (
                        this.tip ||
                          ((this.tip = a(t, "getTipElement", this, 3)([])),
                          this.getTitle() ||
                            r(".popover-header", this.tip).remove(),
                          this._getContent() ||
                            r(".popover-body", this.tip).remove()),
                        this.tip
                      );
                    },
                  },
                  {
                    key: "setContent",
                    value: function () {
                      var e = this.getTipElement();
                      this.setElementContent(
                        r(".popover-header", e),
                        this.getTitle()
                      );
                      var t = this._getContent();
                      "function" == typeof t && (t = t.call(this._element)),
                        this.setElementContent(r(".popover-body", e), t),
                        e.classList.remove("fade", "show");
                    },
                  },
                  {
                    key: "_addAttachmentClass",
                    value: function (e) {
                      this.getTipElement().classList.add(
                        "bs-popover-" + this.updateAttachment(e)
                      );
                    },
                  },
                  {
                    key: "_getContent",
                    value: function () {
                      return (
                        this._element.getAttribute("data-bs-content") ||
                        this._config.content
                      );
                    },
                  },
                  {
                    key: "_cleanTipClass",
                    value: function () {
                      var e = this.getTipElement(),
                        t = e.getAttribute("class").match(Ze);
                      null !== t &&
                        t.length > 0 &&
                        t
                          .map(function (e) {
                            return e.trim();
                          })
                          .forEach(function (t) {
                            return e.classList.remove(t);
                          });
                    },
                  },
                ],
                [
                  {
                    key: "Default",
                    get: function () {
                      return Je;
                    },
                  },
                  {
                    key: "NAME",
                    get: function () {
                      return "popover";
                    },
                  },
                  {
                    key: "Event",
                    get: function () {
                      return tt;
                    },
                  },
                  {
                    key: "DefaultType",
                    get: function () {
                      return et;
                    },
                  },
                  {
                    key: "jQueryInterface",
                    value: function (e) {
                      return this.each(function () {
                        var n = t.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                          if (void 0 === n[e])
                            throw new TypeError(
                              'No method named "'.concat(e, '"')
                            );
                          n[e]();
                        }
                      });
                    },
                  },
                ]
              )
            );
          })(Ge);
        j(nt);
        var it = { offset: 10, method: "auto", target: "" },
          rt = {
            offset: "number",
            method: "string",
            target: "(string|element)",
          },
          ot = (function (e) {
            function t(e, n) {
              var i;
              return (
                v(this, t),
                ((i = f(this, t, [e]))._scrollElement =
                  "BODY" === i._element.tagName ? window : i._element),
                (i._config = i._getConfig(n)),
                (i._selector = ""
                  .concat(i._config.target, " .nav-link, ")
                  .concat(i._config.target, " .list-group-item, ")
                  .concat(i._config.target, " .dropdown-item")),
                (i._offsets = []),
                (i._targets = []),
                (i._activeTarget = null),
                (i._scrollHeight = 0),
                J.on(i._scrollElement, "scroll.bs.scrollspy", function () {
                  return i._process();
                }),
                i.refresh(),
                i._process(),
                i
              );
            }
            return (
              g(t, e),
              b(
                t,
                [
                  {
                    key: "refresh",
                    value: function () {
                      var e = this,
                        t =
                          this._scrollElement === this._scrollElement.window
                            ? "offset"
                            : "position",
                        i =
                          "auto" === this._config.method
                            ? t
                            : this._config.method,
                        o = "position" === i ? this._getScrollTop() : 0;
                      (this._offsets = []),
                        (this._targets = []),
                        (this._scrollHeight = this._getScrollHeight()),
                        n(this._selector)
                          .map(function (e) {
                            var t = p(e),
                              n = t ? r(t) : null;
                            if (n) {
                              var s = n.getBoundingClientRect();
                              if (s.width || s.height)
                                return [ce[i](n).top + o, t];
                            }
                            return null;
                          })
                          .filter(function (e) {
                            return e;
                          })
                          .sort(function (e, t) {
                            return e[0] - t[0];
                          })
                          .forEach(function (t) {
                            e._offsets.push(t[0]), e._targets.push(t[1]);
                          });
                    },
                  },
                  {
                    key: "dispose",
                    value: function () {
                      J.off(this._scrollElement, ".bs.scrollspy"),
                        a(t, "dispose", this, 3)([]);
                    },
                  },
                  {
                    key: "_getConfig",
                    value: function (e) {
                      if (
                        "string" !=
                          typeof (e = h(
                            h(h({}, it), ce.getDataAttributes(this._element)),
                            "object" == D(e) && e ? e : {}
                          )).target &&
                        _(e.target)
                      ) {
                        var t = e.target.id;
                        t || ((t = u("scrollspy")), (e.target.id = t)),
                          (e.target = "#" + t);
                      }
                      return C("scrollspy", e, rt), e;
                    },
                  },
                  {
                    key: "_getScrollTop",
                    value: function () {
                      return this._scrollElement === window
                        ? this._scrollElement.pageYOffset
                        : this._scrollElement.scrollTop;
                    },
                  },
                  {
                    key: "_getScrollHeight",
                    value: function () {
                      return (
                        this._scrollElement.scrollHeight ||
                        Math.max(
                          document.body.scrollHeight,
                          document.documentElement.scrollHeight
                        )
                      );
                    },
                  },
                  {
                    key: "_getOffsetHeight",
                    value: function () {
                      return this._scrollElement === window
                        ? window.innerHeight
                        : this._scrollElement.getBoundingClientRect().height;
                    },
                  },
                  {
                    key: "_process",
                    value: function () {
                      var e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                      if (
                        (this._scrollHeight !== t && this.refresh(), e >= n)
                      ) {
                        var i = this._targets[this._targets.length - 1];
                        this._activeTarget !== i && this._activate(i);
                      } else {
                        if (
                          this._activeTarget &&
                          e < this._offsets[0] &&
                          this._offsets[0] > 0
                        )
                          return (
                            (this._activeTarget = null), void this._clear()
                          );
                        for (var r = this._offsets.length; r--; )
                          this._activeTarget !== this._targets[r] &&
                            e >= this._offsets[r] &&
                            (void 0 === this._offsets[r + 1] ||
                              e < this._offsets[r + 1]) &&
                            this._activate(this._targets[r]);
                      }
                    },
                  },
                  {
                    key: "_activate",
                    value: function (e) {
                      (this._activeTarget = e), this._clear();
                      var t = this._selector.split(",").map(function (t) {
                          return ""
                            .concat(t, '[data-bs-target="')
                            .concat(e, '"],')
                            .concat(t, '[href="')
                            .concat(e, '"]');
                        }),
                        n = r(t.join(","));
                      n.classList.contains("dropdown-item")
                        ? (r(
                            ".dropdown-toggle",
                            n.closest(".dropdown")
                          ).classList.add("active"),
                          n.classList.add("active"))
                        : (n.classList.add("active"),
                          s(n, ".nav, .list-group").forEach(function (e) {
                            l(e, ".nav-link, .list-group-item").forEach(
                              function (e) {
                                return e.classList.add("active");
                              }
                            ),
                              l(e, ".nav-item").forEach(function (e) {
                                o(e, ".nav-link").forEach(function (e) {
                                  return e.classList.add("active");
                                });
                              });
                          })),
                        J.trigger(
                          this._scrollElement,
                          "activate.bs.scrollspy",
                          { relatedTarget: e }
                        );
                    },
                  },
                  {
                    key: "_clear",
                    value: function () {
                      n(this._selector)
                        .filter(function (e) {
                          return e.classList.contains("active");
                        })
                        .forEach(function (e) {
                          return e.classList.remove("active");
                        });
                    },
                  },
                ],
                [
                  {
                    key: "Default",
                    get: function () {
                      return it;
                    },
                  },
                  {
                    key: "NAME",
                    get: function () {
                      return "scrollspy";
                    },
                  },
                  {
                    key: "jQueryInterface",
                    value: function (e) {
                      return this.each(function () {
                        var n = t.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                          if (void 0 === n[e])
                            throw new TypeError(
                              'No method named "'.concat(e, '"')
                            );
                          n[e]();
                        }
                      });
                    },
                  },
                ]
              )
            );
          })(re);
        J.on(window, "load.bs.scrollspy.data-api", function () {
          n('[data-bs-spy="scroll"]').forEach(function (e) {
            return new ot(e);
          });
        }),
          j(ot);
        var st = (function (e) {
          function t() {
            return v(this, t), f(this, t, arguments);
          }
          return (
            g(t, e),
            b(
              t,
              [
                {
                  key: "show",
                  value: function () {
                    var e = this;
                    if (
                      !this._element.parentNode ||
                      this._element.parentNode.nodeType !== Node.ELEMENT_NODE ||
                      !this._element.classList.contains("active")
                    ) {
                      var t,
                        i = m(this._element),
                        r = this._element.closest(".nav, .list-group");
                      if (r) {
                        var o =
                          "UL" === r.nodeName || "OL" === r.nodeName
                            ? ":scope > li > .active"
                            : ".active";
                        t = (t = n(o, r))[t.length - 1];
                      }
                      var s = t
                        ? J.trigger(t, "hide.bs.tab", {
                            relatedTarget: this._element,
                          })
                        : null;
                      if (
                        !(
                          J.trigger(this._element, "show.bs.tab", {
                            relatedTarget: t,
                          }).defaultPrevented ||
                          (null !== s && s.defaultPrevented)
                        )
                      ) {
                        this._activate(this._element, r);
                        var a = function () {
                          J.trigger(t, "hidden.bs.tab", {
                            relatedTarget: e._element,
                          }),
                            J.trigger(e._element, "shown.bs.tab", {
                              relatedTarget: t,
                            });
                        };
                        i ? this._activate(i, i.parentNode, a) : a();
                      }
                    }
                  },
                },
                {
                  key: "_activate",
                  value: function (e, t, i) {
                    var r = this,
                      s = (
                        !t || ("UL" !== t.nodeName && "OL" !== t.nodeName)
                          ? o(t, ".active")
                          : n(":scope > li > .active", t)
                      )[0],
                      a = i && s && s.classList.contains("fade"),
                      l = function () {
                        return r._transitionComplete(e, s, i);
                      };
                    s && a
                      ? (s.classList.remove("show"),
                        this._queueCallback(l, e, !0))
                      : l();
                  },
                },
                {
                  key: "_transitionComplete",
                  value: function (e, t, i) {
                    if (t) {
                      t.classList.remove("active");
                      var o = r(
                        ":scope > .dropdown-menu .active",
                        t.parentNode
                      );
                      o && o.classList.remove("active"),
                        "tab" === t.getAttribute("role") &&
                          t.setAttribute("aria-selected", !1);
                    }
                    e.classList.add("active"),
                      "tab" === e.getAttribute("role") &&
                        e.setAttribute("aria-selected", !0),
                      S(e),
                      e.classList.contains("fade") && e.classList.add("show");
                    var s = e.parentNode;
                    if (
                      (s && "LI" === s.nodeName && (s = s.parentNode),
                      s && s.classList.contains("dropdown-menu"))
                    ) {
                      var a = e.closest(".dropdown");
                      a &&
                        n(".dropdown-toggle", a).forEach(function (e) {
                          return e.classList.add("active");
                        }),
                        e.setAttribute("aria-expanded", !0);
                    }
                    i && i();
                  },
                },
              ],
              [
                {
                  key: "NAME",
                  get: function () {
                    return "tab";
                  },
                },
                {
                  key: "jQueryInterface",
                  value: function (e) {
                    return this.each(function () {
                      var n = t.getOrCreateInstance(this);
                      if ("string" == typeof e) {
                        if (void 0 === n[e])
                          throw new TypeError(
                            'No method named "'.concat(e, '"')
                          );
                        n[e]();
                      }
                    });
                  },
                },
              ]
            )
          );
        })(re);
        J.on(
          document,
          "click.bs.tab.data-api",
          '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
          function (e) {
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
              E(this) || st.getOrCreateInstance(this).show();
          }
        ),
          j(st);
        var at = { animation: "boolean", autohide: "boolean", delay: "number" },
          lt = { animation: !0, autohide: !0, delay: 5e3 },
          ct = (function (e) {
            function t(e, n) {
              var i;
              return (
                v(this, t),
                ((i = f(this, t, [e]))._config = i._getConfig(n)),
                (i._timeout = null),
                (i._hasMouseInteraction = !1),
                (i._hasKeyboardInteraction = !1),
                i._setListeners(),
                i
              );
            }
            return (
              g(t, e),
              b(
                t,
                [
                  {
                    key: "show",
                    value: function () {
                      var e = this;
                      J.trigger(this._element, "show.bs.toast")
                        .defaultPrevented ||
                        (this._clearTimeout(),
                        this._config.animation &&
                          this._element.classList.add("fade"),
                        this._element.classList.remove("hide"),
                        S(this._element),
                        this._element.classList.add("showing"),
                        this._queueCallback(
                          function () {
                            e._element.classList.remove("showing"),
                              e._element.classList.add("show"),
                              J.trigger(e._element, "shown.bs.toast"),
                              e._maybeScheduleHide();
                          },
                          this._element,
                          this._config.animation
                        ));
                    },
                  },
                  {
                    key: "hide",
                    value: function () {
                      var e = this;
                      this._element.classList.contains("show") &&
                        (J.trigger(this._element, "hide.bs.toast")
                          .defaultPrevented ||
                          (this._element.classList.remove("show"),
                          this._queueCallback(
                            function () {
                              e._element.classList.add("hide"),
                                J.trigger(e._element, "hidden.bs.toast");
                            },
                            this._element,
                            this._config.animation
                          )));
                    },
                  },
                  {
                    key: "dispose",
                    value: function () {
                      this._clearTimeout(),
                        this._element.classList.contains("show") &&
                          this._element.classList.remove("show"),
                        a(t, "dispose", this, 3)([]);
                    },
                  },
                  {
                    key: "_getConfig",
                    value: function (e) {
                      return (
                        (e = h(
                          h(h({}, lt), ce.getDataAttributes(this._element)),
                          "object" == D(e) && e ? e : {}
                        )),
                        C("toast", e, this.constructor.DefaultType),
                        e
                      );
                    },
                  },
                  {
                    key: "_maybeScheduleHide",
                    value: function () {
                      var e = this;
                      this._config.autohide &&
                        (this._hasMouseInteraction ||
                          this._hasKeyboardInteraction ||
                          (this._timeout = setTimeout(function () {
                            e.hide();
                          }, this._config.delay)));
                    },
                  },
                  {
                    key: "_onInteraction",
                    value: function (e, t) {
                      switch (e.type) {
                        case "mouseover":
                        case "mouseout":
                          this._hasMouseInteraction = t;
                          break;
                        case "focusin":
                        case "focusout":
                          this._hasKeyboardInteraction = t;
                      }
                      if (t) this._clearTimeout();
                      else {
                        var n = e.relatedTarget;
                        this._element === n ||
                          this._element.contains(n) ||
                          this._maybeScheduleHide();
                      }
                    },
                  },
                  {
                    key: "_setListeners",
                    value: function () {
                      var e = this;
                      J.on(
                        this._element,
                        "click.dismiss.bs.toast",
                        '[data-bs-dismiss="toast"]',
                        function () {
                          return e.hide();
                        }
                      ),
                        J.on(this._element, "mouseover.bs.toast", function (t) {
                          return e._onInteraction(t, !0);
                        }),
                        J.on(this._element, "mouseout.bs.toast", function (t) {
                          return e._onInteraction(t, !1);
                        }),
                        J.on(this._element, "focusin.bs.toast", function (t) {
                          return e._onInteraction(t, !0);
                        }),
                        J.on(this._element, "focusout.bs.toast", function (t) {
                          return e._onInteraction(t, !1);
                        });
                    },
                  },
                  {
                    key: "_clearTimeout",
                    value: function () {
                      clearTimeout(this._timeout), (this._timeout = null);
                    },
                  },
                ],
                [
                  {
                    key: "DefaultType",
                    get: function () {
                      return at;
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return lt;
                    },
                  },
                  {
                    key: "NAME",
                    get: function () {
                      return "toast";
                    },
                  },
                  {
                    key: "jQueryInterface",
                    value: function (e) {
                      return this.each(function () {
                        var n = t.getOrCreateInstance(this, e);
                        if ("string" == typeof e) {
                          if (void 0 === n[e])
                            throw new TypeError(
                              'No method named "'.concat(e, '"')
                            );
                          n[e](this);
                        }
                      });
                    },
                  },
                ]
              )
            );
          })(re);
        return (
          j(ct),
          {
            Alert: oe,
            Button: se,
            Carousel: ve,
            Collapse: _e,
            Dropdown: Se,
            Modal: He,
            Offcanvas: Fe,
            Popover: nt,
            ScrollSpy: ot,
            Tab: st,
            Toast: ct,
            Tooltip: Ge,
          }
        );
      });
    }).call(this, n("EVdn"));
  },
  vH3L: function (e, t, n) {
    "use strict";
    (function (e, t) {
      (e.$ = e.jQuery = n("EVdn")),
        n("8L3F"),
        n("76gO"),
        t(".page-loader")
          .delay(400)
          .fadeOut(200, function () {
            t("body").fadeIn();
          }),
        t(".menu-icon").on("click", function () {
          t("body").toggleClass("open-menu");
        }),
        t(".close-menu").on("click", function () {
          t("body").toggleClass("open-menu");
        }),
        t(".menu-mobile .has-mega a.main-link").on("click", function () {
          var e = t(this).parent().find("ul");
          return (
            t(e).is(":visible")
              ? (t(e).hide(), t(this).parent().removeClass("active"))
              : (t(e).show(), t(this).parent().addClass("active")),
            !1
          );
        });
      var i = t(".set-height").height();
      t(".show-all-service").on("click", function () {
        t(".show-all-service").hide(),
          t(".show-less-service").show(),
          t(".product-list").animate(
            { height: t(".product-list").get(0).scrollHeight },
            1e3,
            function () {
              t(this).height("auto");
            }
          );
      }),
        t(".show-less-service").on("click", function () {
          t(".show-less-service").hide(),
            t(".show-all-service").show(),
            t(".product-list").animate({ height: i }, 1e3, function () {});
        }),
        t(".hr-cta a").on("click", function (e) {
          return t(this).hasClass("active")
            ? (t(this)
                .removeClass("0800-header-reveal")
                .addClass("0800-header-revealed"),
              !0)
            : (t(this).addClass("active"), e.preventDefault(), !0);
        }),
        t(".phone-mobile a").on("click", function (e) {
          return t(this).hasClass("active")
            ? (t(this)
                .removeClass("0800-header-reveal")
                .addClass("0800-header-revealed"),
              !0)
            : (t(this).addClass("active"), e.preventDefault(), !0);
        }),
        t(".branches").on("click", ".show-phone", function () {
          return (
            !!t(this).hasClass("active") || (t(this).addClass("active"), !1)
          );
        }),
        t(".bm-caption .control a.show-hidden").on("click", function (e) {
          return (
            t(this).hasClass("active") ||
              (t(this).addClass("active"),
              t(this).hasClass("branch-phone-reveal")
                ? t(this)
                    .removeClass("branch-phone-reveal")
                    .addClass("branch-phone-revealed")
                : t(this).hasClass("branch-email-reveal") &&
                  t(this)
                    .removeClass("branch-email-reveal")
                    .addClass("branch-email-revealed"),
              e.preventDefault()),
            !0
          );
        }),
        t(".spa-item").each(function (e) {
          t(this).attr("data-scroll", t(this).position().top),
            console.log(t(this).position().top);
        }),
        t(".pc-des .pc-des-read-more").on("click", function (e) {
          var n = t(this).next();
          t(n).is(":visible")
            ? (t(this).next().hide(),
              t(this).html(
                "<i class='fas fa-plus me-2' aria-hidden='true'></i> Read More"
              ))
            : (t(this).next().show(),
              t(this).html(
                "<i class='fas fa-minus me-2' aria-hidden='true'></i> Show Less"
              ));
        }),
        t(".start-box .read-full").on("click", function () {
          t(this).hide(), t(this).parent().next().show();
        }),
        t(".spa-item .spa-caption").on("click", function (e) {
          t(".pc-des .pc-des-read-more").next().hide(),
            t(".pc-des .pc-des-read-more").html(
              "<i class='fas fa-plus me-2' aria-hidden='true'></i> Read More"
            ),
            t(".spa-item").not(t(this).parent()).removeClass("active");
          var n = t(this).next();
          t(n).is(":visible")
            ? t(this).parent().removeClass("active")
            : t(this).parent().addClass("active");
          var i = t(this).parent().attr("data-scroll");
          t(document).scrollTop(i - 100);
        }),
        t(".rd-item .rdi-cap").on("click", function () {
          var e = t(this).next();
          t(e).is(":visible")
            ? (t(this).parent().removeClass("active"), t(e).hide())
            : (t(this).parent().addClass("active"), t(e).show());
        }),
        t(".region-caption").on("click", function () {
          var e = t(".region-dropdown");
          t(e).is(":visible")
            ? t(this).parent().removeClass("show")
            : t(this).parent().addClass("show");
        }),
        t(".bf-flex .left .item").on("click", function () {
          t(".bf-flex .left .item").removeClass("active"),
            t(".bf-flex .box-right-content").removeClass("active");
          var e = t(this).attr("data-id");
          t(e).addClass("active"), t(this).addClass("active");
        }),
        t(".acc-item  .acc-caption").on("click", function () {
          var e = t(this).next();
          t(e).is(":visible")
            ? t(this).parent().removeClass("active")
            : t(this).parent().addClass("active");
        }),
        t(window).scroll(function () {
          (scroll = t(window).scrollTop()),
            scroll > 100
              ? t(".header").addClass("scrolled")
              : t(".header").removeClass("scrolled");
        }),
        t(".button-show-rd").on("click", function () {
          t(".rd-item-wrap").show(), t(this).hide();
        }),
        t(".owl-review").length &&
          t(".owl-review").owlCarousel({
            loop: !0,
            center: !1,
            margin: 32,
            autoWidth: !1,
            nav: !0,
            dots: !1,
            navText: [
              "<i class='fa-solid fa-angle-left'></i>",
              "<i class='fa-solid fa-angle-right'></i>",
            ],
            responsive: {
              0: { items: 1 },
              992: { items: 2 },
              1200: { items: 3 },
            },
          }),
        t(".owl-ft").length &&
          t(".owl-ft").owlCarousel({
            loop: !0,
            center: !1,
            margin: 32,
            autoWidth: !1,
            nav: !0,
            dots: !1,
            navText: [
              "<i class='fa-solid fa-angle-left'></i>",
              "<i class='fa-solid fa-angle-right'></i>",
            ],
            responsive: {
              0: { items: 1 },
              992: { items: 2 },
              1200: { items: 3 },
            },
          }),
        t(".datepicker").each(function (e, n) {
          var i = t(n).data("input-range");
          if ("all" == i) t(n).datepicker({ format: "dd/mm/yyyy" });
          else if ("future" == i) {
            var r = new Date(),
              o = new Date(r);
            o.setDate(o.getDate() + 1);
            var s = o.getDate(),
              a = o.getMonth(),
              l = s + "/" + (a += 1) + "/" + o.getFullYear();
            t(n).datepicker({ format: "dd/mm/yyyy", startDate: l });
          } else if ("past" == i) {
            var c =
              (s = (r = new Date()).getDate()) +
              "/" +
              (a = r.getMonth()) +
              "/" +
              r.getFullYear();
            t(n).datepicker({ format: "dd/mm/yyyy", endDate: c });
          }
        }),
        t(".db-field input")
          .on("keypress", function () {
            t(this).siblings(".placeholder").hide();
          })
          .on("blur", function () {
            t(this).val()
              ? t(this).siblings(".placeholder").hide()
              : t(this).siblings(".placeholder").show();
          }),
        t(".branch-redirect").on("change", function () {
          var e = t("option:selected", this).attr("data-redirect");
          return "" != e && (window.location.href = e), !0;
        });
    }).call(this, n("yLpj"), n("EVdn"));
  },
  yLpj: function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
});
//# sourceMappingURL=app.min.js.map
