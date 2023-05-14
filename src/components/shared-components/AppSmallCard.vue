<template>

  <!--  Add active class to app small card in order to show green borders in card-->
  <div class="app-small-card " @click="clickMe">
    <div class="app-small-card__icon">
      <img :src="photo" alt="">
    </div>

    <AppText
        size="16"
        line-height="26"
        weight="700"
    >
      {{ title }}
    </AppText>
  </div>
</template>

<script>
export default {
  name: "AppSmallCard",
  props: {
    title: String,
    photo: String
  },
  methods: {
    clickMe(event) {
      this.$emit('click', event.target.value)
    },
  }
}
</script>

<style lang="scss" scoped>

@import "../../assets/styles/abstracts/variables";

.app-small-card {
  padding: 20px 40px;
  border-radius: 15px;
  border: 1px solid $border-color;
  display: flex;
  align-items: center;

  &.active {
    border-color: $color-secondary;
  }

  &__icon {
    max-width: 26px;
    max-height: 26px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;
    margin-right: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}

.app-small-card:hover {
  border-color: $color-secondary;
}

</style>
