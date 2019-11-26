<template>
  <div id="nav">
    <img class="logo" src="~@/assets/img/logo.png" alt />
    <!-- pc -->
    <ul v-if="$store.getters.ua === 'pc'" class="tags">
      <li
        class="pc-tags-item can-not-select"
        :class="{chose:$route.name === tagsMap[index]}"
        v-for="(tag, index) in tags"
        :key="'pc'+index"
        v-text="tag"
        @click="()=>{$router.push({name:tagsMap[index]})}"
      ></li>
      <!-- <li
        class="pc-tags-item"
        :class="{chose:$route.name === tagsMap[index]}"
        v-for="(tag, index) in tags"
        :key="'pc'+index"
      >
        <router-link :to="'/'+tagsMap[index]" v-text="tag"></router-link>
      </li>-->
    </ul>
    <!-- mp -->
    <div v-else class="tags" @click="showTags">
      <i class="fa fa-bars mp-tags-icon" aria-hidden="true"></i>
    </div>
    <ul v-if="$store.getters.ua === 'mp' && showTagsMp" class="mp-tags-items" @click="showTags">
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
  height: 60px;
  line-height: 60px;
  font-size: $font-size-md;
  z-index: 10;
  @include modalbg();
  @include fct();
  justify-content: space-between;

  .logo {
    height: 48px;
    margin-left: 5%;
    width: auto;
  }

  .tags {
    display: flex;
    color: white;
    margin-right: 5%;

    .pc-tags-item {
      width: 60px;
      text-align: center;
      cursor: pointer;
      &:hover {
        color: #4bbcfb;
      }
    }

    .mp-tags-icon {
      font-size: $font-size-base * 2;
    }

    .chose {
      &:hover {
        color: #42b983;
      }
      color: #42b983;
    }
  }

  .mp-tags-items {
    position: fixed;
    width: 100%;
    top: 60px;
    .mp-tags-item {
      background: $color-important;
      width: 100%;
      height: 40px;
      line-height: 40px;
      color: white;
      text-align: center;
    }

    .chose {
      color: #42b983;
    }
  }

  // a {
  //   border: solid red 1px;
  //   font-weight: bold;
  //   color: #2c3e50;

  //   &.router-link-exact-active {
  //     color: #42b983;
  //   }
  // }
}
</style>
