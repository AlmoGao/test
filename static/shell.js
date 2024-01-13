function _instanceof(e, t) {
    return null != t && 'undefined' != typeof Symbol && t[Symbol.hasInstance]
      ? !!t[Symbol.hasInstance](e)
      : e instanceof t
  }
  function _typeof(e) {
    return (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          })(e)
  }
  function _classCallCheck(e, t) {
    if (!_instanceof(e, t))
      throw new TypeError('Cannot call a class as a function')
  }
  function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n]
      ;(r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, _toPropertyKey(r.key), r)
    }
  }
  function _createClass(e, t, n) {
    return (
      t && _defineProperties(e.prototype, t),
      n && _defineProperties(e, n),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      e
    )
  }
  function _toPropertyKey(e) {
    var t = _toPrimitive(e, 'string')
    return 'symbol' === _typeof(t) ? t : t + ''
  }
  function _toPrimitive(e, t) {
    if ('object' !== _typeof(e) || null === e) return e
    var n = e[Symbol.toPrimitive]
    if (void 0 !== n) {
      var r = n.call(e, t || 'default')
      if ('object' !== _typeof(r)) return r
      throw new TypeError('@@toPrimitive must return a primitive value.')
    }
    return ('string' === t ? String : Number)(e)
  }
  var Device = (function () {
    'use strict'
    function e() {
      _classCallCheck(this, e),
        (this.user_agent = navigator.userAgent),
        (this.platform = this.getPlatform()),
        (this.model = this.getModel()),
        (this.fbp = this.getFbp()),
        (this.fbc = this.getFbc()),
        (this.time_zone = this.getTimeZone()),
        (this.language = this.getLanguage()),
        (this.pixel_ratio = this.getPixelRatio()),
        (this.screen_width = this.getScreenWidth()),
        (this.screen_height = this.getScreenHeight()),
        (this.device_memory = this.getDeviceMemory()),
        (this.hardware_concurrency = this.getHardwareConcurrency()),
        (this.gpu = this.getGpu())
    }
    return (
      _createClass(e, [
        {
          key: 'getPlatform',
          value: function () {
            return navigator.userAgent.match(/\(([^)]+)\)/)[1].split(';')[1]
          }
        },
        {
          key: 'getModel',
          value: function () {
            return navigator.userAgent
              .match(/\(([^)]+)\)/)[1]
              .split(';')[2]
              .trim()
              .split(' ')[0]
          }
        },
        {
          key: 'getFbp',
          value: function () {
            var e = document.cookie.match(/_fbp=([^;]+)/)
            return e ? e[1] : void 0
          }
        },
        {
          key: 'getFbc',
          value: function () {
            var e = document.cookie.match(/_fbc=([^;]+)/)
            if (!e) {
              let queryParams = new URL(location.href).searchParams
              if (queryParams.has('fbclid')) {
                return `fb.1.${Date.now()}.${queryParams.get('fbclid')}`
              }
            }
            return e ? e[1] : void 0
          }
        },
        {
          key: 'getTimeZone',
          value: function () {
            return Intl.DateTimeFormat().resolvedOptions().timeZone
          }
        },
        {
          key: 'getLanguage',
          value: function () {
            return navigator.language
          }
        },
        {
          key: 'getPixelRatio',
          value: function () {
            return window.devicePixelRatio
          }
        },
        {
          key: 'getScreenWidth',
          value: function () {
            return window.screen.width
          }
        },
        {
          key: 'getScreenHeight',
          value: function () {
            return window.screen.height
          }
        },
        {
          key: 'getDeviceMemory',
          value: function () {
            return navigator.deviceMemory
          }
        },
        {
          key: 'getHardwareConcurrency',
          value: function () {
            return navigator.hardwareConcurrency
          }
        },
        {
          key: 'getGpu',
          value: function () {
            var e = document.createElement('canvas').getContext('webgl'),
              t = e.getExtension('WEBGL_debug_renderer_info')
            return e.getParameter(t.UNMASKED_RENDERER_WEBGL)
          }
        }
      ]),
      e
    )
  })()
  function awaiter(){return new Promise(function(resolve){let timer;function cleanup(){if(timer){clearInterval(timer)}resolve()}setTimeout(cleanup,600);timer=setInterval(function(){if(document.cookie.includes('fbp')){cleanup()}},30)})}
  