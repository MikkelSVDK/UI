<template>
  <div>
    <scroll-fixed-header :fixed.sync="fixed" :threshold="56">
      <div class="topbar">
        <div class="topbar_inner">
          <div class="logo">
            <router-link to="/">
              <img src="@/assets/img/logo/default.png" alt="partners brand" />
            </router-link>
          </div>
          <!-- End logo -->
          <div class="menu">
            <scrollactive
              class="anchor_nav"
              bezier-easing-value=".5,0,.35,1"
              :offset="95"
              :duration="100"
              :alwaysTrack="true"
            >
              <a href="#home" class="scrollactive-item">Home</a>
              <a href="#about" class="scrollactive-item">About</a>
              <a href="#portfolio" class="scrollactive-item">Portfolio</a>
              <a
                class="white-fill-bg btn-outline btn_sm scrollactive-item"
                href="#contact"
              >
                Let's Work Together!
              </a>
            </scrollactive>
          </div>
          <!-- End menu -->
        </div>
      </div>
      <!--  End topbar -->
    </scroll-fixed-header>

    <!-- Start shane mobile menu -->
    <div class="mobile_menu">
      <div class="topbar_inner">
        <div class="container bigger">
          <div class="topbar_in">
            <div class="logo">
              <router-link to="/">
                <img
                  src="@/assets/img/logo/default.png"
                  alt="partners brand"
                />
              </router-link>
            </div>
            <!-- End logo -->
            <div class="my_trigger">
              <div
                class="hamburger hamburger--collapse-r"
                :class="{ 'is-active': active }"
              >
                <div
                  class="hamburger-box"
                  @click="active = !active"
                  :aria-pressed="active ? 'true' : 'false'"
                >
                  <div class="hamburger-inner"></div>
                </div>
              </div>
              <!-- End hamburger menu -->
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown" :class="{ active: active }">
        <div class="container">
          <span
            class="close_menu"
            @click="active = !active"
            :aria-pressed="active ? 'true' : 'false'"
          >
            close
          </span>
          <div class="dropdown_inner">
            <ul class="anchor_nav">
              <li class="current">
                <a href="#home" @click="active = !active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" @click="active = !active">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" @click="active = !active">
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  class="white-fill-bg btn-outline btn_sm"
                  href="#contact"
                   @click="active = !active"
                >
                  Let's Work Together!
                </a>
              </li>
            </ul>
            <div class="social-menu">
              <Social />
            </div>
            <!-- End social share -->
          </div>
        </div>
        <!-- End container -->
      </div>
    </div>
    <!-- End shane mobile menu -->
  </div>
</template>

<script>
import Social from "@/components/Social.vue";
export default {
  components: {
    Social,
  },
  data() {
    return {
      active: false,
      fixed: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
