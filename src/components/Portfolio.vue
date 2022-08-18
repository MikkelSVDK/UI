<template>
  <div class="container">
    <div
      class="positon-relative"
      v-scroll-reveal="{ delay: 50, distance: '20px' }"
    >
      <div class="title">
        <div class="title_flex">
          <div class="left">
            <span>Portfolio</span>
            <h3>Creative Portfolio</h3>
          </div>
        </div>
      </div>
      <!-- End title -->
      <div class="portfolio_filter">
        <ul>
          <li>
            <a
              v-on:click="activetab = 'all'"
              :class="[activetab === 'all' ? 'active' : '']"
              >All</a
            >
          </li>
          <li v-for="(tab, i) in Object.keys(this.portfolio)" :key="i">
            <a
              v-on:click="activetab = tab"
              :class="[activetab === tab ? 'active' : '']"
              >{{tab}}</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="tabcontent">
      <div class="portfolio_list">
        <ul class="gallery_zoom">
          <li v-for="(project, i) in (activetab == 'all' ? fullPortfolio() : portfolio[activetab])" :key="i" :style="project.type == 'App' ? { width: '33.333%' } : {}">
            <div class="inner">
              <a :href="project.href" target="_blank">
                <div class="entry portfolio_animation_wrap">
                  <img class="image" :src="project.thumb" alt="Portfolio" :style="project.type == 'App' ? { height: '500px' } : {}" />
                </div>
                <div class="mobile_title">
                  <h3>{{ project.name }}</h3>
                  <span>{{ project.type }}</span>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      activetab: 'all',
      portfolio: {
        Websites: [
          {
            href: "https://mcskripts.net/",
            thumb: require("@/assets/img/portfolio/mcskripts.png"),
            name: "McSkripts",
            type: "Website",
          },
          {
            href: "https://potionhost.dk/",
            thumb: require("@/assets/img/portfolio/potionhost.png"),
            name: "Potionhost",
            type: "Website",
          },
        ],
        /*Apps: [
          {
            href: "https://ryslingeforsamlingshus.dk/",
            thumb: require("@/assets/img/portfolio/1.jpg"),
            name: "Ryslinge forsamlingshus",
            type: "App",
          },
        ]*/
      },
    };
  },
  methods: {
    fullPortfolio(){
      let arr = [];
      for (const key in this.portfolio) {
        const projects = this.portfolio[key];
        for (let i = 0; i < projects.length; i++) {
          const project = projects[i];
          arr.push(project)
        }
      }
      return arr;
    }
  }
};
</script>

<style lang="scss" scoped></style>
