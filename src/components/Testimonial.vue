<template>
  <hooper :settings="hooperSettings">
    <slide v-for="(tesimonial, i) in testimonialContent" :key="i">
      <ul>
        <li class="item">
          <div class="texts">
            <p>
              {{ tesimonial.desc }}
            </p>
            <div class="author">
              <div class="image">
                <div
                  class="main"
                  :style="{ backgroundImage: 'url(' + tesimonial.imgSrc + ')' }"
                ></div>
              </div>
              <div class="short">
                <h3 class="author">
                  <span>{{ tesimonial.name }}</span>
                </h3>
                <h3 class="job">
                  <span>{{ tesimonial.designation }}</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </slide>
  </hooper>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      testimonialContent: [
        /*{
          name: "Person navn",
          designation: "Firma",
          imgSrc: require("@/assets/img/testimonial/1.jpg"),
          desc: `....................................................................................
          ....................................................................................
          ....................................................................................`,
        },*/
      ],
      hooperSettings: {
        infiniteScroll: true,
        wheelControl: false,
        autoPlay: true,
        mouseDrag: false,
        transition: 600,
        playSpeed: 3500,
        itemsToShow: 1,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.hooper{
  height: unset !important;
}
</style>
