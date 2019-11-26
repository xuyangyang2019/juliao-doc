<template>
  <div class="base-page">
    <!--  -->
    <Header :imgName="'home.jpg'" :hTitle="'UTA \' s Blog'" :describe="'分享前端技术，学习前端知识！'" />

    <!--  -->
    <p class="content-title">全部文章</p>

    <!--  -->
    <main class="content">
      <div class="article-list">
        <div class="article-item" v-for="(article, index) in articles" :key="index">
          <img class="article-img" :src="article.img" alt />
          <div class="article-title" v-text="article.title"></div>
          <div class="article-desc" v-text="article.desc"></div>
          <div class="article-tags">
            <i class="fa fa-tags" aria-hidden="true"></i>
            <div v-text="article.tags"></div>
          </div>
        </div>
      </div>
      <!-- aside -->
      <aside class="pc-aside">
        <div class="search-box">
          <input type="search" name id="search" placeholder="Search..." v-focus />
          <i class="fa fa-search search-icon" aria-hidden="true"></i>
        </div>
        <div>归档</div>
        <div>文章标签</div>
      </aside>
      <aside class="mp-aside">
        <div class="to-top">🚀</div>
      </aside>
    </main>

    <!-- 翻页 -->
    <div class="paginatortion">
      <div class="paginatortion-arrow">
        <i class="fa fa-chevron-left paginatortion-icon" aria-hidden="true"></i>
      </div>
      <div class="paginatortion-num">
        <span v-text="currentPage" class="forward"></span>
        /
        <span v-text="maxPage" class="backward"></span>
        <!-- {{currentPage}}/{{maxPage}} -->
      </div>
      <div class="paginatortion-arrow">
        <i class="fa fa-chevron-right paginatortion-icon" aria-hidden="true"></i>
      </div>
      <input type="text" id="page-jump" v-model="page" />
      <label for="page-jump" class="page-jump-btn">跳转</label>
    </div>
    <!--  -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex'

import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";


export default {
  name: 'Home',
  data() {
    return {
      page: 1,
      currentPage: 1,
      maxPage: 100,
      articles: [
        {
          img: 'https://i.loli.net/2019/08/30/gD5e1XTOZFmLtIV.jpg',
          title: 'JS知识点再次梳理',
          desc: '又到校招时间点，又要开始准备一波面试了。通过熟悉使用到手写简单代码，所以这里的代码会尽量精简，只会实现基础功能，不去讨论过多的容错以及其他的完善。如果要追求完美，请留言讨论。',
          tags: ['面试准备', 'JAVASCRIPT'],
          createdTime: '1',
          modifiedTime: '2'
        },
        {
          img: 'https://i.loli.net/2019/08/30/gD5e1XTOZFmLtIV.jpg',
          title: 'JS知识点再次梳理',
          desc: '又到校招时间点，又要开始准备一波面试了。通过熟悉使用到手写简单代码，所以这里的代码会尽量精简，只会实现基础功能，不去讨论过多的容错以及其他的完善。如果要追求完美，请留言讨论。',
          tags: ['面试准备', 'JAVASCRIPT'],
          createdTime: '1',
          modifiedTime: '2'
        },
        {
          img: 'https://i.loli.net/2019/08/30/gD5e1XTOZFmLtIV.jpg',
          title: 'JS知识点再次梳理',
          desc: '又到校招时间点，又要开始准备一波面试了。通过熟悉使用到手写简单代码，所以这里的代码会尽量精简，只会实现基础功能，不去讨论过多的容错以及其他的完善。如果要追求完美，请留言讨论。',
          tags: ['面试准备', 'JAVASCRIPT'],
          createdTime: '1',
          modifiedTime: '2'
        },
        {
          img: 'https://i.loli.net/2019/08/30/gD5e1XTOZFmLtIV.jpg',
          title: 'JS知识点再次梳理',
          desc: '又到校招时间点，又要开始准备一波面试了。通过熟悉使用到手写简单代码，所以这里的代码会尽量精简，只会实现基础功能，不去讨论过多的容错以及其他的完善。如果要追求完美，请留言讨论。',
          tags: ['面试准备', 'JAVASCRIPT'],
          createdTime: '1',
          modifiedTime: '2'
        },
        {
          img: 'https://i.loli.net/2019/08/30/gD5e1XTOZFmLtIV.jpg',
          title: 'JS知识点再次梳理',
          desc: '又到校招时间点，又要开始准备一波面试了。通过熟悉使用到手写简单代码，所以这里的代码会尽量精简，只会实现基础功能，不去讨论过多的容错以及其他的完善。如果要追求完美，请留言讨论。',
          tags: ['面试准备', 'JAVASCRIPT'],
          createdTime: '1',
          modifiedTime: '2'
        },
        {
          img: 'https://i.loli.net/2019/08/30/gD5e1XTOZFmLtIV.jpg',
          title: 'JS知识点再次梳理',
          desc: '又到校招时间点，又要开始准备一波面试了。通过熟悉使用到手写简单代码，所以这里的代码会尽量精简，只会实现基础功能，不去讨论过多的容错以及其他的完善。如果要追求完美，请留言讨论。',
          tags: ['面试准备', 'JAVASCRIPT'],
          createdTime: '1',
          modifiedTime: '2'
        }

      ]
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
    document.title = '首页'
    document.addEventListener('visibilitychange', this.changeTitle, false)
  }
}
</script>

<style lang="scss" scoped>
.content-title {
  @include sc(1.5rem, $color-important);
  @include fct();
  justify-content: flex-start;
  margin: 0.5rem 1rem;
  font-weight: $font-weight-base * 2;
}

.content {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-left: 1rem;
  margin-right: 1rem;

  .article-list {
    flex: auto;
    display: flex;
    flex-wrap: wrap;
    .article-item {
      .article-img {
        max-width: 100%;
      }
      .article-title {
        font-size: 1.2rem;
        margin: 0.5rem 0;
        color: $color-common;
      }
      .article-desc {
        @include ellipsis(3, 1.5);
        @include sc(0.8rem, $color-desc);
        margin: 0.5rem 0;
      }
      .article-tags {
        display: flex;
        font-size: 0.8rem;
        margin: 0.5rem 0;
        align-items: center;
      }
    }
  }

  .pc-aside {
    display: none;
    min-width: 300px;
    max-width: 300px;
    margin-left: 1rem;
    flex-direction: column;
    .search-box {
      @include fct();
      height: 2.5rem;
      min-height: 2.5rem;
      border-radius: 1.25rem;
      background: #f1f3f5;
      transition: border 0.3s;
      border: none;
      &:hover {
        border: solid $color-important 2px;
      }

      #search {
        background: inherit;
        border: none;
        &:focus {
          outline: none;
        }
      }
    }
    .search-box-focused {
      border: solid $color-important 2px;
    }
  }
  .mp-aside {
    position: fixed;
    bottom: 3rem;
    right: 1rem;
    // border: solid red 1px;
    .to-top {
      @include fct();
      background: rgba($color: #000000, $alpha: 0.1);
      border: solid red 1px;
      height: 2rem;
      width: 2rem;
      border-radius: 1rem;
      transform: rotate(-45deg);
    }
  }
}

.paginatortion {
  max-width: 100%;
  align-self: center;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  @include fct();
  font-size: 1rem;
  font-weight: $font-weight-base;
  color: $color-important;
  .paginatortion-arrow {
    @include fct();
    width: 2rem;
    height: 2rem;
    border: solid $color-important 2px;
    cursor: pointer;
  }
  .paginatortion-num {
    margin: 0 0.5rem;
    min-width: 5rem;
    display: flex;
    justify-content: space-around;
    .forward {
      min-width: 2rem;
      text-align: end;
    }
    .backward {
      min-width: 2rem;
      text-align: start;
    }
  }
  #page-jump {
    width: 2.5rem;
    height: 2rem;
    line-height: 2rem;
    margin: 0 0.5rem;
    border: none;
    text-align: center;
    border-bottom: solid $color-important 2px;
    &:focus {
      outline: none;
      border: 1px solid $color-common;
    }
  }
  .page-jump-btn {
    width: 4rem;
    height: 2rem;
    color: white;
    cursor: pointer;
    background: $color-important;
    @include fct();
  }
}

// mp
@media screen and (min-width: 320px) and(max-width:480px) {}

@media screen and (min-width: 480px) and(max-width:640px) {}

// 平板
@media screen and (min-width: 640px) and(max-width:768px) {
  .article-list {
    justify-content: space-between;
    .article-item {
      max-width: 48%;
    }
  }
}

@media screen and (min-width: 768px) and(max-width:960px) {
  .article-list {
    justify-content: space-between;
    .article-item {
      max-width: 48.5%;
    }
  }
}

//pc

@media screen and (min-width: 960px) {
  .content {
    flex-direction: row;
    justify-content: space-evenly;

    .article-list {
      justify-content: space-between;
    }

    .pc-aside {
      display: flex;
    }
  }
}

@media screen and (min-width: 960px) and(max-width:1140px) {
  .content {
    .article-list {
      .article-item {
        max-width: 48.5%;
      }
    }
  }
}

@media screen and (min-width: 1140px) and(max-width:1280px) {
  .content {
    .article-list {
      .article-item {
        max-width: 33%;
      }
    }
  }
}

@media screen and (min-width: 1300px) {
  .content-title {
    min-width: 1300px;
    max-width: 1300px;
    align-self: center;
  }
  .content {
    max-width: 1300px;
    align-self: center;
  }
}

@media screen and (min-width: 1280px) and(max-width:1440px) {
  .content {
    .article-list {
      .article-item {
        max-width: 33%;
      }
    }
  }
}

@media screen and (min-width: 1440px) and(max-width:1600px) {
  .content {
    .article-list {
      .article-item {
        max-width: 33%;
      }
    }
  }
}

@media screen and (min-width: 1600px) and(max-width:1920px) {
  .content {
    .article-list {
      .article-item {
        max-width: 33%;
      }
    }
  }
}
</style>