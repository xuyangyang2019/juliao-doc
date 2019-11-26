<template>
  <div id="nav">
    <div class="nva-layout">
      <img class="logo" src="~@/assets/img/logo.png" alt />
      <!-- pc -->
      <ul class="pc-tags">
        <li
          class="pc-tags-item can-not-select"
          :class="{chose:$route.name === tagsMap[index]}"
          v-for="(tag, index) in tags"
          :key="'pc'+index"
          v-text="tag"
          @click="()=>{$router.push({name:tagsMap[index]})}"
        ></li>
      </ul>

      <!-- mp -->
      <div class="mp-tags" @click="showTags">
        <i class="fa fa-bars mp-tags-icon" aria-hidden="true"></i>
      </div>
      <ul v-show="showTagsMp" class="mp-tags-items" @click="showTags">
        <li
          class="mp-tags-item"
          :class="{chose:$route.name === tagsMap[index]}"
          v-for="(tag, index) in tags"
          :key="'mp'+index"
          v-text="tag"
          @click="()=>{$router.push({name:tagsMap[index]})}"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      showTagsMp: false,
      tags: ['首页', '作品', '归档', '关于'],
      tagsMap: ['home', 'work', 'archives', 'about']
    }
  },
  methods: {
    // 显示mp bar
    showTags() {
      this.showTagsMp = !this.showTagsMp
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  @include modalbg();
  z-index: 10;
  @include fct();
  .nva-layout {
    @include fct();
    width: 100%;
    max-width: 1300px;
    justify-content: space-between;

    .logo {
      height: 48px;
      margin-left: 5%;
      width: auto;
    }

    .pc-tags {
      display: none;
      margin-right: 5%;
      color: $font-color-base;

      .pc-tags-item {
        width: 60px;
        text-align: center;
        cursor: pointer;
        &:hover {
          color: #4bbcfb;
        }
      }

      .chose {
        &:hover {
          color: #42b983;
        }
        color: #42b983;
      }
    }

    .mp-tags {
      display: flex;
      display: hidden;
      color: $font-color-base;
      margin-right: 5%;
      font-size: 1.5rem;
    }

    .mp-tags-items {
      position: fixed;
      width: 100%;
      top: 3rem;
      font-size: 1rem;
      .mp-tags-item {
        background: $color-important;
        width: 100%;
        height: 30px;
        line-height: 30px;
        color: $font-color-base;
        text-align: center;
      }

      .chose {
        color: #42b983;
      }
    }

    @media only screen and (min-width: 768px) {
      .mp-tags {
        display: none;
      }

      .pc-tags {
        display: flex;
      }
    }
  }
}
</style>
