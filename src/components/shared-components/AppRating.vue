<template>
  <div class="rating">
    <div class="rating__numb">
      4.4
    </div>

    <div class="rating__main">

      <RatingStars :value="value"/>

    </div>

    <div class="rating__amount">(1200)</div>
  </div>
</template>

<script>
  import RatingStars from "./RatingStars";

  export default {
    name: "AppRating",
    components: {RatingStars},
    props: {
      value: null
    }
  }
</script>

<style lang="scss" scoped>

  @import "../../assets/styles/abstracts/variables";

  .rating {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    &__numb {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: $color-gold;
      margin-right: 10px;
    }

    &__main {
      margin-right: 10px;
    }

    &__amount {
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      color: $color-text
    }
  }

</style>
