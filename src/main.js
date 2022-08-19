import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import CoolLightBox from "vue-cool-lightbox";
import ScrollFixedHeader from "vuejs-scroll-fixed-header";
import VueScrollactive from "vue-scrollactive";
import VueParticles from "vue-particles";
import BackTop from "@mlqt/vue-back-top";
import VueScrollReveal from "vue-scroll-reveal";
import { VueReCaptcha } from "vue-recaptcha-v3";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
import "./assets/scss/style.scss";

Vue.use(CoolLightBox);
Vue.use(BackTop);
Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal",
  duration: 1500,
  scale: 1,
  distance: "100px",
  mobile: true,
});
Vue.use(ScrollFixedHeader);
Vue.use(VueParticles);
Vue.use(VueScrollactive);
Vue.config.productionTip = false;

Vue.use(VueReCaptcha, { siteKey: '6Lf7ao0hAAAAAC3MPb-ttCZ0-cZr6-rPTjsd3HSs' })

new Vue({
  methods: {
    async recaptcha() {
      await this.$recaptchaLoaded()

      return await this.$recaptcha('message');
    }
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
