<template>
  <footer class="footer">
    <p class="copy">All rights reserved 2019 Uta ' s Blog !</p>
    <p class="copy">©蜀ICP备18023961号-1</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  min-height: 3rem;
  @include fct();
  flex-direction: column;
  background: $color-important;

  .copy {
    color: $font-color-base;
    line-height: 1.5rem;
    font-weight: $font-weight-base * 1.5;

    // @include sc($font-size-lg, white);
    // line-height: $font-size-lg * 1.5;
  }
}
</style>