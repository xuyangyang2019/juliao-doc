<template>
  <div class="base-page">
    <Header :imgName="'work.jpg'" :hTitle="'My Works'" :describe="'学习过程中的作品 & 轮子！'" />
    <main class="content">work</main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'

import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";


export default {
  name: 'Work',
  data() {
    return {
      bgImg: '~@/assets/img/work.jpg'
    }
  },
  components: {
    Footer,
    Header
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
        document.title = '首页'
      }
    }
  },
  mounted() {
    // this.tweenJS();
    document.title = '首页'
    document.addEventListener('visibilitychange', this.changeTitle, false)
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  line-height: 1.2;
}
</style>