<template>
  <div class="home">
    <!-- header -->
    <header class="header">
      <div class="layout">
        <div class="logo">
          <img class="logo-img" src="@/assets/img/logo.png" alt="聚播科技" />
          <p class="white">SDK 使用指南</p>
        </div>
        <ul class="nav">
          <!-- <li class="tag" v-for="(tag, index) in tags" :key="index" v-text="tag"></li> -->
        </ul>
      </div>
    </header>
    <!-- content  -->
    <main class="content">
      <!-- aside -->
      <aside class="aside"></aside>
      <!-- main -->
      <div class="main"></div>
    </main>
    <!-- <Footer /> -->
    <!-- <footer class="footer">
      <p class="copy">2016-2019 聚播科技版权所有</p>
      <p class="copy">©浙ICP备13012843号-1</p>
    </footer>-->
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      tags: ['官方网站', '在线体验', '商务合作', 'GitBook'],
      articles: [
        {
          id: '1',
          title: '★【顺序必看一】ECO返利系统简介',
          content: '',
          layout: '★【顺序必看一】ECO返利系统简介'
        },
        {
          id: '2',
          title: '★【顺序必看一】ECO返利系统简介',
          content: '',
          layout: '★【顺序必看一】ECO返利系统简介'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      tip: 'tip',
      ua: 'ua'
    }),
  },
  methods: {
    // ...mapActions("user", ["changeUserInfo", "getRank"]),
    ...mapActions({
      SetTip: 'SetTip'
    }),
    // 切换标签页后，改变title
    changeTitle() {
      if (document.hidden) {
        document.title = '去吧，皮卡丘！'
      } else {
        document.title = '说明文档'
      }
    }
  },
  directives: {
    // 验证码输入框获取焦点以及失去焦点时value值得变化以及父元素样式的变化
    'focus': {
      inserted: function (el) {
        var parent = el.parentNode
        el.onfocus = function () {
          parent.className = 'search-box search-box-focused'
        }
        el.onblur = function () {
          parent.className = 'search-box '
        }
      }
    }
  },
  mounted() {
    // this.tweenJS();
    document.title = '说明文档'
    // document.addEventListener('visibilitychange', this.changeTitle, false)
  }
}
</script>

<style lang="scss" scoped>
.home {
  border: solid red 1px;
  display: flex;
  height: 100%;
  flex-direction: column;
}

.header {
  width: 100%;
  // height: 3rem;
  // line-height: 3rem;
  height: 60px;
  min-height: 60px;
  background: black;

  display: flex;
  align-items: center;

  // border: solid gray 1px;
  .layout {
    display: flex;
    border: solid red 1px;
    align-items: center;
    .logo {
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .logo-img {
        width: 30px;
        height: 30px;
      }
    }
  }
}

.content {
  flex: auto;
  width: 100%;
  display: flex;
  border: solid yellow 1px;

  .aside {
    width: 300px;
    max-width: 300px;
    border: solid red 1px;
  }

  .main {
    flex: auto;
    border: solid black 1px;
  }
}

// mp
// @media screen and (min-width: 320px) and(max-width:480px) {
// }

// @media screen and (min-width: 480px) and(max-width:640px) {
// }

// // 平板
// @media screen and (min-width: 640px) and(max-width:768px) {
//   .article-list {
//     justify-content: space-between;
//     .article-item {
//       max-width: 48%;
//     }
//   }
// }

// @media screen and (min-width: 768px) and(max-width:960px) {
//   .article-list {
//     justify-content: space-between;
//     .article-item {
//       max-width: 48.5%;
//     }
//   }
// }

// //pc

// @media screen and (min-width: 960px) {
//   .content {
//     flex-direction: row;
//     justify-content: space-evenly;

//     .article-list {
//       justify-content: space-between;
//     }

//     .pc-aside {
//       display: flex;
//     }
//   }
// }

// @media screen and (min-width: 960px) and(max-width:1140px) {
//   .content {
//     .article-list {
//       .article-item {
//         max-width: 48.5%;
//       }
//     }
//   }
// }

// @media screen and (min-width: 1140px) and(max-width:1280px) {
//   .content {
//     .article-list {
//       .article-item {
//         max-width: 33%;
//       }
//     }
//   }
// }

// @media screen and (min-width: 1300px) {
//   .content-title {
//     min-width: 1300px;
//     max-width: 1300px;
//     align-self: center;
//   }
//   .content {
//     max-width: 1300px;
//     align-self: center;
//   }
// }

// @media screen and (min-width: 1280px) and(max-width:1440px) {
//   .content {
//     .article-list {
//       .article-item {
//         max-width: 33%;
//       }
//     }
//   }
// }

// @media screen and (min-width: 1440px) and(max-width:1600px) {
//   .content {
//     .article-list {
//       .article-item {
//         max-width: 33%;
//       }
//     }
//   }
// }

// @media screen and (min-width: 1600px) and(max-width:1920px) {
//   .content {
//     .article-list {
//       .article-item {
//         max-width: 33%;
//       }
//     }
//   }
// }
</style>