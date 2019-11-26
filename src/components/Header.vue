<template>
  <header class="header" :style="{backgroundImage:getImgUrl(imgName)}">
    <div class="cover-wrap">
      <h1 class="title can-not-select" v-text="hTitle"></h1>
      <hr />
      <p class="describe can-not-select" v-text="describe"></p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    imgName: {
      type: String,
      default: 'home.jpg'
    },
    hTitle: {
      type: String,
      default: 'UTA \' s Blog'
    },
    describe: {
      type: String,
      default: '分享前端技术，学习前端知识！'
    },
  },
  data() {
    return {
    }
  },
  methods: {
    getImgUrl(imgName) {
      return 'url(' + require(`@/assets/img/${imgName}`) + ')'
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 200px;
  min-height: 200px;
  background-size: cover;
  background-position: 50%;
  // background-image: url("~@/assets/img/home.jpg");

  @include fct();

  .cover-wrap {
    color: $font-color-base;
    line-height: 1.5;
    margin-top: 2rem;

    .title {
      font-size: 2rem;
      text-align: center;
      font-weight: $font-weight-base * 1.5;
    }

    hr {
      width: 120px;
      margin: 20px auto 15px;
      background-color: $font-color-base;
    }

    .describe {
      font-size: 1rem;
      padding: 0 20px;
      line-height: 1.5rem;
    }
  }
}

// width > 769
@media only screen and (min-width: 768px) {
  .header {
    height: 350px;
    min-height: 350px;
  }
}
</style>