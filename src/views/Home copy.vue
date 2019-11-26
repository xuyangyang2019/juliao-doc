<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="openDialog" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- iconfont -->
    <p @click="handleUrl">
      iconfont:
      <i class="iconfont icon-weibo"></i>
      font-awesome:
      <i class="fa fa-user"></i>
      <!-- LoadingCircle -->
      <loading-circle />
    </p>
    <!-- vuex -->
    <p @click="SetTip('xuyy')">
      vuex示例：
      {{tip}}
    </p>
    <!-- 过滤器 -->
    <p>
      vue过滤器：
      <br />
      时间戳：{{1544179366 | timeFilter}}
      <br />
      手机格式化：{{15311959057 | formatPhone}}
      <br />
      银行卡格式化：{{123123123123132 | formatBank}}
      <br />
      千分位分隔符：{{5000039 | toThousands}}
    </p>
    <!-- 高精度计算 -->
    <p>
      浮点数运算：
      0.1+0.2={{number | formatFloat(2)}}
    </p>

    <!-- 补间动画 -->
    <div>补间动画：{{num | formatFloat}}</div>

    <!-- 弹框 -->
    <p @click="handleToast">Toast插件</p>
    <Dialog :isVisible="isVisible" :showMask="true" @close="closeDialog">
      <div>点击背景 关闭！</div>
    </Dialog>

    <!-- 计数器 -->
    <count-down
      v-on:start_callback="timeStart()"
      v-on:end_callback="timeEnd()"
      :startTime="'4100829240'"
      :endTime="'4101002040'"
      :tipText="'距开始还有'"
      :tipTextEnd="'距结束还有'"
      :endText="'距结束还有 0天 00:00:00'"
      :dayTxt="'天'"
      :hourTxt="':'"
      :minutesTxt="':'"
      :secondsTxt="''"
    ></count-down>
    <p>
      发送验证码：
      <button @click="startCountdown">
        <CountDown2 v-if="counting" :time="6000" @end="handleCountdownEnd">
          <template slot-scope="props">{{ props.totalSeconds }} 秒后重试</template>
        </CountDown2>
        <span v-else>获取验证码</span>
      </button>
    </p>
    <!-- 国际化 -->
    <p @click="handleLang">
      i18n国际化：
      {{$t('home.name', {name: 'Jelly'})}}
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'
import LoadingCircle from '@/icons/animate/LoadingCircle'

// 高精度计算
import NP from "number-precision";
// 补间动画
import TWEEN from "tween.js";

// dialog
import Dialog from "@/components/Dialog";
import CountDown from "@/components/CountDown.vue";
import CountDown2 from "@/components/CountDown";

export default {
  name: 'home',
  data() {
    return {
      num: 0,
      isVisible: false,
      counting: false

    }
  },
  components: {
    CountDown,
    CountDown2,
    Dialog,
    HelloWorld,
    LoadingCircle
  },
  computed: {
    ...mapGetters({
      tip: 'tip'
    }),
    number() {
      console.log('浮点计算')
      return NP.plus(0.1, 0.2);
    }
  },
  methods: {
    // ...mapActions("user", ["changeUserInfo", "getRank"]),
    ...mapActions({
      SetTip: 'SetTip'
    }),
    // 用于清空hash路由中间卡着的不必要的信息，如：/?sdfdsf#/
    handleUrl() {
      history.pushState(
        {},
        null,
        // eslint-disable-next-line no-useless-escape
        location.href.replace(/\/\?(.*?)\#\//, "/#/")
      );
    },
    // changeTip(val) {
    //   this.SetTip(val)
    // },
    // dialog
    openDialog() {
      console.log('openDialog')
      this.isVisible = true;
    },
    closeDialog() {
      console.log('closeDialog')
      this.isVisible = false;
    },
    // toast
    handleToast() {
      this.$toast("Hello Vue Plugin", "success");
    },
    // 补间动画
    tweenJS() {
      let frameHandler;
      function animate(time) {
        frameHandler = requestAnimationFrame(animate);
        TWEEN.update(time); // time表示多长时间执行一次
      }
      // 创建补间动画
      let that = this;
      // eslint-disable-next-line no-unused-vars
      let tween = new TWEEN.Tween({ num: 0 })
        .to({ num: 2000 }, 3000)
        .easing(TWEEN.Easing.Linear.None)
        .onUpdate(function () {
          // 这里不要用箭头函数，这里的this指向Tween实例
          that.num = this.num.toFixed(0);
        })
        .onComplete(() => {
          // Make sure to clean up after ourselves.
          cancelAnimationFrame(frameHandler);
        })
        .start();

      // 开始补间动画
      animate();
    },
    timeStart() { },
    timeEnd() { },
    startCountdown: function () {
      this.counting = true;
    },
    handleCountdownEnd: function () {
      this.counting = false;
    },
    handleLang() {
      this.$i18n.locale = this.$i18n.locale === "zh-CN" ? "en-US" : "zh-CN";
    },
  },
  mounted() {
    this.tweenJS();
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-flow: column;
  align-items: center;
  // justify-content: center;
  text-align: center;
  line-height: 1.2;
}
</style>