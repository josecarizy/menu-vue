(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1217:function(e,t,r){"use strict";r.r(t);r(8),r(3),r(4),r(10),r(11),r(9),r(5),r(43);var o=r(15),n=r(0),c=r(269);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var h={layout:"sellerFunnel",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.d)({expiredCotation:function(e){return e.vehicle.quotation.quotation.expiredCotation}})),mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.commit("vehicle/vehicle/resetAll"),e.$store.commit("vehicle/meeting/resetAll"),e.$store.commit("client/contact/resetAll"),t.next=5,e.$store.dispatch("vehicle/quotation/getQuotation",{params:{id:e.$route.params.id}});case 5:e.expiredCotation?e.$router.push("/v2/vendre-ma-voiture/erreur"):e.goNext();case 6:case"end":return t.stop()}}),t)})))()},methods:{goNext:function(){void 0===this.$route.params.id?(this.$store.commit("vehicle/quotation/set_error","modelNotFound"),this.$router.push("/v2/vendre-ma-voiture/erreur")):(this.$store.commit("vehicle/vehicle/set_isValid",!0),this.$store.commit("client/contact/set_isValid",!0),this.$router.push("/v2/vendre-ma-voiture/estimation"))}},head:function(){return{meta:[{content:"no-content"}]}}},m=r(46),component=Object(m.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("b-container",[t("div",{staticClass:"vehicule"},[t("h1",{staticClass:"text-center"},[this._v(this._s(this.$t("modules.commons.vehicle.loadingQuotation")))])])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);