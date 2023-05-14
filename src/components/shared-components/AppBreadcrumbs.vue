<template>
  <nav class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li v-for="(item, idx) in list" :key="idx" class="breadcrumbs__item">
        <component class="breadcrumbs__text" :is="idx === list.length - 1 ? 'div' : 'nuxt-link'" :to="item.link">
          {{ item.name }}
        </component>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "AppBreadcrumbs",
    props: {
      list: {
        type: Array
      }
    }
  }
</script>

<style scoped lang="scss">
  .breadcrumbs {
    $self: &;
    &__list {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
    }
    &__text {
      display: block;
      max-width: 180px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition: .3s;
      &:hover {
        color: $color-text;
      }
    }
    &__item {
      position: relative;
      color: rgba(24, 24, 24, 0.4);
      font-weight: 500;
      line-height: rem(22px);
      margin-right: 25px;

      &:last-child {
        &::before {
          display: none;
        }
        #{$self}__text:hover {
          color: inherit;
        }
      }

      &::before {
        content: '»';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: calc(100% + 5px);
      }
    }
  }
</style>
