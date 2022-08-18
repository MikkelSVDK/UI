<template>
  <div class="about_inner">
    <div class="left">
      <div class="image">
        <div
          class="main"
          v-scroll-reveal="{ delay: 20 }"
          :style="{ backgroundImage: 'url(' + aboutImg + ')' }"
        ></div>
      </div>
    </div>

    <div class="right">
      <div class="title">
        <span v-scroll-reveal="{ delay: 20 }">About Me</span>
        <h3 v-scroll-reveal="{ delay: 40 }">
          Creative Independent Web Developer based in Denmark 
        </h3>
      </div>
      <div class="text" v-scroll-reveal="{ delay: 60 }">
        <p>
          I'm a Creative Independent Web Developer, and I'm very passionate and dedicated to my work. 
          With 7 years experience as a web developer, I have acquired the skills and knowledge necessary to make your project a success. 
          I enjoy every step of the design process, from discussion to collaboration.
        </p>
      </div>
      <!--<div class="button" v-scroll-reveal="{ delay: 80 }">
        <a :href="cv" download>
          Download CV
        </a>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutImg: require("@/assets/img/me.png"),
      //cv: require("@/assets/img/resume/resume.jpg"),
    };
  },
};
</script>
