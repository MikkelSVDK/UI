<template>
  <div class="home-four">
    <Header />

    <Slider />

    <div class="section" id="about">
      <div class="about">
        <div class="container">
          <About />
        </div>
      </div>
    </div>

    <div class="section" id="portfolio">
      <div class="portfolio">
        <Portfolio />
      </div>
    </div>

    <div class="section">
      <div class="testimonials">
        <div class="container">
          <div class="testimonials_inner">
            <div class="left" v-scroll-reveal="{ delay: 50 }">
              <div class="title">
                <span>Testimonials</span>
                <h3>What clients say about<br />my work</h3>
              </div>
            </div>

            <div class="right" v-scroll-reveal="{ delay: 150 }">
              <Testimonial />
            </div>
          </div>
        </div>
      </div>
    </div>

    <CallToActions />

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Slider from "../components/Slider";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import CallToActions from "../components/CallToActions";
import Footer from "../components/Footer";
export default {
  components: {
    Header,
    Slider,
    About,
    Portfolio,
    Testimonial,
    CallToActions,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
  .testimonials{
    background-image: linear-gradient(#f9f9f9,#f9f9f9,#f9f9f9,#f9f9f9,#f9f9f9,#f9f9f9,#f9f9f9,#f9f9f9,#f9f9f9,#f9f9f9,#fff);
  }
</style>
