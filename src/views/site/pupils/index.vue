<template>
  <section class="section py-30">
    <div class="container">
      <div class="section__top mb-30" data-aos="fade-right">
        <app-text
          :size="isMobile ? 18 : 30"
          :line-height="isMobile ? 28 : 36"
          weight="700"
        >
          O'quvchilar ishlari
        </app-text>
      </div>
      <div class="videos">
        <div class="item" v-for="(item, i) in list" :key="i">
          <iframe
            width="100%"
            height="330"
            :src="'https://www.youtube.com/embed/' + item.title"
            title="YouTube video player"
            frameborder="0"
            allow
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AppPupils",
  components: {},
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async getVideos() {
      try {
        await this.$api
          .get("video/")
          .then((data) => {
            if (!data.error && data) {
              this.list = data;
            }
          })
          .catch((error) => {
            console.log("Error on getting News" + ": " + error);
          })
          .finally(() => {});
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.getVideos();
  },
};
</script>
<style lang="scss" scoped>
.videos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  .item {
    max-width: 650px;
    width: 100%;
    margin: 20px;
  }
}
</style>
