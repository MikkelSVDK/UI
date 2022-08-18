<template>
  <div
    class="talk bg_image_props"
    :style="{ backgroundImage: 'url(' + imgSrc + ')' }"
    id="contact"
  >
    <div class="shape">
      <img
        class="svg"
        src="@/assets/img/svg/paper.svg"
        alt="partners brand"
      />
    </div>

    <div class="background" id="talk">
      <a class="player"></a>
      <div class="overlay"></div>
    </div>

    <div class="talk_inner">
      <div class="text" v-scroll-reveal="{ delay: 100 }">
        <h3>Let's work together!</h3>
      </div>
      <div v-scroll-reveal="{ delay: 200 }">
        <button class="white-fill-bg" @click="showModal" style="margin-bottom: 8px;">
          Make an enquiry
        </button>
      </div>
    </div>

    <transition name="fade">
      <div
        :class="{ 'modal-mask': isActive }"
        id="modal"
        @click="closeModal"
        v-if="isVisible"
      >
        <div class="modal-dialog modal-dialog-centered " @click.stop>
          <div class="modal-content calltoactions-content">

            <div class="mobalbox_contact">
              <div class="box_inner">
                <div class="title">
                  <h3>Get in Touch</h3>
                </div>

                <Contact />

                <div class="short_info">
                  <ul>

                    <li>
                      <div class="list_inner">
                        <i class="fa-solid fa-phone"></i>
                        <p>
                          <a href="tel:+4542225300">+45 42 255 300</a>
                        </p>
                      </div>
                    </li>

                    <li>
                      <div class="list_inner" style="padding: 47px 15px;">
                        <i class="fa-solid fa-share-nodes"></i>

                        <Social />
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Contact from "./partials/Contact.vue";
import Social from "./partials/Social.vue";
export default {
  components: {
    Contact,
    Social,
  },
  data() {
    return {
      imgSrc: require("@/assets/img/background.png"),
      isActive: false,
      isVisible: false,
    };
  },
  methods: {
    showModal: function() {
      this.isActive = true;
      this.isVisible = true;
    },
    closeModal: function() {
      this.isActive = false;
      this.isVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  .shape{
    background: transparent;
  }
  .list_inner > i {
    color: #fff;
    font-size: 25px;
  }
</style>
