<template>
  <div id="app">
    <Layout>
      <!-- <Nav /> -->
      <router-view />
    </Layout>
  </div>
</template>

<script>
import Layout from "@/layouts";
// 导航栏
// import Nav from "@/components/Nav.vue";

export default {
  name: "App",
  data() {
    return {
      screenWidth: document.documentElement.clientWidth
    }
  },
  components: {
    Layout,
    // Nav,
  },
  methods: {
    // 是手机返回true
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    },
    getRem(pwidth, prem) {
      var html = document.getElementsByTagName("html")[0];
      var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
      let size = oWidth / pwidth * prem
      if (size > 20) {
        size = 20
      } else if (size < 10) {
        size = 10
      }
      html.style.fontSize = size + "px";
    }
  },
  mounted() {
    // pc 还是 mp
    if (this._isMobile()) {
      // 手机端
      this.$store.dispatch('SetUa', 'mp')
      // this.$router.replace('/m_index');
    } else {
      this.$store.dispatch('SetUa', 'pc')
    }
    // 窗口大小
    window.onresize = () => {
      this.screenWidth = document.documentElement.clientWidth
      this.getRem(375, 16)
    },
      window.onload = () => {
        this.getRem(375, 16)
      }
  }
};
</script>

<style lang="scss">
@import "./style/normalize.scss";
@import "./style/reset.scss";
// @import "./style/common.scss";
@import "~@/assets/iconfont/iconfont.css";
@import "~@/assets/font-awesome/css/font-awesome.css";

#app {
  // font-size: $font-size-base;
  color: $color-common;
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "SF UI Text",
    "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
  height: 100%;
}
</style>
