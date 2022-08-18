<template>
  <div class="share">
    <span>Share:</span>
    <ul class="social">
      <li v-for="(social, i) in socialList" :key="i">
        <a :href="social.href" target="_blank" rel="noreferrer">
          <i :class=social.icon></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialList: [
        {
          href: "https://www.youtube.com/channel/UC9X0yGl-fri3X2HsYfiEI8Q",
          icon: "fa-brands fa-youtube",
        },
        {
          href: "https://github.com/MikkelSVDK",
          icon: "fa-brands fa-github",
        },
        {
          href: "https://www.linkedin.com/in/mikkel-s-vesterg%C3%A5rd-4ab828175/",
          icon: "fa-brands fa-linkedin",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  li > a {
    text-decoration: none;
    color: #fff;
    font-size: 30px;
  }
</style>