<template>
  <div class="home">
    <!-- header -->
    <header class="header can-not-select">
      <div class="layout">
        <div class="logo">
          <img class="logo-img" src="@/assets/img/logo.png" alt="聚播科技" />
          <p class="logo-tip">SDK 使用指南</p>
        </div>
        <ul class="nav">
          <li class="tag" v-for="(tag, index) in tags" :key="index">
            <a class="a" :href="tag.url" target="_blank" v-text="tag.name"></a>
          </li>
        </ul>
      </div>
    </header>
    <!-- content  -->
    <main class="content">
      <!-- aside -->
      <aside class="aside">
        <div class="search">
          <input type="search" name id />
        </div>
        <ul class="layouts">
          <li class="layout" v-for="(layout, index) in layouts" :key="index">
            <p v-text="layout"></p>
          </li>
        </ul>
      </aside>
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
      tags: [
        { url: 'http://www.yunlauncher.com/', name: '官方网站' },
        { url: 'http://www.yunlauncher.com/', name: '在线体验' },
        { url: 'http://www.yunlauncher.com/', name: '商务合作' },
        { url: 'http://www.yunlauncher.com/', name: 'GitBook' },
      ],
      layouts: [
        '★【顺序必看一】ECO返利系统简介',
        '★【必看】新手入门教程',
        '★【重点】返利手机调试',
        '★【必看】免ROOT版本安装视频',
        '如何首单自定绑定',
        '杀熟分佣方案',
        '普通分佣方案',
        '自动提现视频及效果',
        '客服系统教程及群发系统教程',
        '新手模式设置',
        '七牛云教程',
        '数据迁移',
        '朋友圈发送教程及视频',
        '导购域名设置文档',
        '中间页设置文档',
        '自定义回复文档',
        '新手模式文档',
        '拼多多授权教程',
        '京东授权教程',
        '微信公众号模块',
        'ipad登录教程',
        '安全中心用途',
        '冻结佣金设置',
        '子账号设置',
        '拉群设置',
        '维权订单上传',
        '免单系统教程',
        '群返利教程',
        '自动通过好友发送拉群链接教程',
        '给eco后台被封设备微信账号下的用户强制推送消息教程',
        '自动重启设置教程',
        '如何停止后台群发',
        '手机如何设置消息延迟回复'

      ],
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
  background: #563d7c;
  display: flex;
  align-items: center;
  .layout {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 300px;
      display: flex;
      align-items: center;
      .logo-img {
        width: 30px;
        height: 30px;
        margin-left: 20px;
      }
      .logo-tip {
        color: #cbbde2;
        margin-left: 20px;
      }
    }
    .nav {
      display: flex;
      margin-right: 20px;
      .tag {
        margin: 0 5px;
        cursor: pointer;
        &:hover {
          color: aquamarine;
        }
      }
    }
  }
}

.content {
  flex: auto;
  width: 100%;
  display: flex;
  overflow: hidden;

  .aside {
    width: 300px;
    height: 100%;
    max-height: 100%;
    max-width: 300px;

    .search {
      height: 80px;
      min-height: 80px;
    }

    .layouts {
      flex: auto;
      max-height: 100%;
      overflow-y: scroll;
      margin-bottom: 20px;
      // height: 600px;
      .layout {
        border: solid black 1px;
        margin: 5px 0;
      }
    }
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