<template>
  <div class="home-blog">
    <div class="hero" :style="{ ...bgImageStyle }">
      <div>
        <ModuleTransition delay="0.04">
          <universe :title="$title" :description="$description"></universe>
        </ModuleTransition>
        <ModuleTransition delay="0.04">
          <!-- <h1 v-if="recoShowModule && $frontmatter.heroText !== null">
            {{ $frontmatter.heroText || $title || 'vuePress-theme-reco' }}
          </h1> -->
           <h1 class="wihte-forever" v-if="recoShowModule && $frontmatter.heroText !== null">
            {{ 'Blogs & Docs' }}
          </h1>
        </ModuleTransition>
        <div class="animate seven wihte-forever">
          <!-- <span v-for="str in $description.split(',')" :key="str">{{str}}</span> -->
          <span>今</span>
          <span>天</span>
          <span>不</span>
          <span>做</span>
          <span>的</span>
          <span>事</span>
          <span>&nbsp;</span>
          <span>明</span>
          <span>天</span>
          <span>你</span>
          <span>更</span>
          <span>不</span>
          <span>会</span>
          <span>做</span>
        </div>

        <ModuleTransition delay="0.08">
          <p v-if="recoShowModule && $frontmatter.tagline !== null" class="description wihte-forever">
            {{ "What you won't do today you won't do tomorrow" }}
          </p>
        </ModuleTransition> 
      </div>
    </div>

    <ModuleTransition delay="0.16">
      <div v-show="recoShowModule" class="home-blog-wrapper">
        <div class="blog-list">
          <!-- 博客列表 -->
          <note-abstract
            :data="$recoPosts"
            :currentPage="currentPage"
          ></note-abstract>
          <!-- 分页 -->
          <pagation
            class="pagation"
            :total="$recoPosts.length"
            :currentPage="currentPage"
            @getCurrentPage="getCurrentPage"
          />
        </div>
        <div class="info-wrapper">
          <PersonalInfo />
          <h4>
            <i class="iconfont reco-category"></i> {{ homeBlogCfg.category }}
          </h4>
          <ul class="category-wrapper">
            <li
              class="category-item"
              v-for="(item, index) in this.$categories.list"
              :key="index"
            >
              <router-link :to="item.path">
                <span class="category-name">{{ item.name }}</span>
                <span
                  class="post-num"
                  :style="{ backgroundColor: getOneColor() }"
                  >{{ item.pages.length }}</span
                >
              </router-link>
            </li>
          </ul>
          <hr />
          <h4 v-if="$tags.list.length !== 0">
            <i class="iconfont reco-tag"></i> {{ homeBlogCfg.tag }}
          </h4>
          <TagList @getCurrentTag="getPagesByTags" />
          <h4
            v-if="
              $themeConfig.friendLink && $themeConfig.friendLink.length !== 0
            "
          >
            <i class="iconfont reco-friend"></i> {{ homeBlogCfg.friendLink }}
          </h4>
          <FriendLink />
        </div>
      </div>
    </ModuleTransition>

    <ModuleTransition delay="0.24">
      <!-- <Content v-show="recoShowModule" class="home-center" custom /> -->
    </ModuleTransition>
  </div>
</template>

<script>
import TagList from "@theme/components/TagList";
import FriendLink from "@theme/components/FriendLink";
import NoteAbstract from "@theme/components/NoteAbstract";
import pagination from "@theme/mixins/pagination";
import ModuleTransition from "@theme/components/ModuleTransition";
import PersonalInfo from "@theme/components/PersonalInfo";
import { getOneColor } from "@theme/helpers/other";
import moduleTransitonMixin from "@theme/mixins/moduleTransiton";
import universe from "@theme/components/universe";

export default {
  mixins: [pagination, moduleTransitonMixin],
  components: {
    NoteAbstract,
    TagList,
    FriendLink,
    ModuleTransition,
    PersonalInfo,
    universe,
  },
  data() {
    return {
      recoShow: false,
      currentPage: 1,
      tags: [],
    };
  },
  computed: {
    homeBlogCfg() {
      return this.$recoLocales.homeBlog;
    },
    actionLink() {
      const { actionLink: link, actionText: text } = this.$frontmatter;

      return {
        link,
        text,
      };
    },
    heroImageStyle() {
      return this.$frontmatter.heroImageStyle || {};
    },
    bgImageStyle() {
      const initBgImageStyle = {
        textAlign: "center",
        overflow: "hidden",
        height: "100vh",
        //     background: `
        //       url(${this.$frontmatter.bgImage
        // ? this.$withBase(this.$frontmatter.bgImage)
        // : require('../images/home-bg.jpeg')}) center/cover no-repeat
        // `
      };
      const { bgImageStyle } = this.$frontmatter;

      return bgImageStyle
        ? { ...initBgImageStyle, ...bgImageStyle }
        : initBgImageStyle;
    },
    heroHeight() {
      return document.querySelector(".hero").clientHeight;
    },
  },
  mounted() {
    this.recoShow = true;
    this._setPage(this._getStoragePage());
  },
  methods: {
    // 获取当前页码
    getCurrentPage(page) {
      this._setPage(page);
      setTimeout(() => {
        window.scrollTo(0, this.heroHeight);
      }, 100);
    },
    // 根据分类获取页面数据
    getPages() {
      let pages = this.$site.pages;
      pages = pages.filter((item) => {
        const { home, date } = item.frontmatter;
        return !(home == true || date === undefined);
      });
      // reverse()是为了按时间最近排序排序
      this.pages = pages.length == 0 ? [] : pages;
    },
    getPagesByTags(tagInfo) {
      this.$router.push({ path: tagInfo.path });
    },
    _setPage(page) {
      this.currentPage = page;
      this.$page.currentPage = page;
      this._setStoragePage(page);
    },
    getOneColor,
  },
};
</script>

<style lang="stylus">
.home-blog {
  padding: 0;
  margin: 0px auto;

  .hero {
    margin: $navbarHeight auto 0;
    position: relative;
    box-sizing: border-box;
    padding: 0 20px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    #canvas {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }

    .animate {
        margin: 1.8rem auto;
      font-size: 1.6rem;
      line-height: 1.3;
      font-weight: bold;
      color:var(--background-color);
    }

    .animate span {
      display: inline-block;
    }
    .animate span:nth-of-type(2) {
      animation-delay: 0.05s;
    }

    .animate span:nth-of-type(3) {
      animation-delay: 0.1s;
    }

    .animate span:nth-of-type(4) {
      animation-delay: 0.15s;
    }

    .animate span:nth-of-type(5) {
      animation-delay: 0.2s;
    }

    .animate span:nth-of-type(6) {
      animation-delay: 0.25s;
    }

    .animate span:nth-of-type(7) {
      animation-delay: 0.3s;
    }

    .animate span:nth-of-type(8) {
      animation-delay: 0.35s;
    }

    .animate span:nth-of-type(9) {
      animation-delay: 0.4s;
    }

    .animate span:nth-of-type(10) {
      animation-delay: 0.45s;
    }

    .animate span:nth-of-type(11) {
      animation-delay: 0.5s;
    }

    .animate span:nth-of-type(12) {
      animation-delay: 0.55s;
    }

    .animate span:nth-of-type(13) {
      animation-delay: 0.6s;
    }

    .animate span:nth-of-type(14) {
      animation-delay: 0.65s;
    }

    .animate span:nth-of-type(15) {
      animation-delay: 0.7s;
    }

    .animate span:nth-of-type(16) {
      animation-delay: 0.75s;
    }

    .animate span:nth-of-type(17) {
      animation-delay: 0.8s;
    }

    .animate span:nth-of-type(18) {
      animation-delay: 0.85s;
    }

    .animate span:nth-of-type(19) {
      animation-delay: 0.9s;
    }

    .animate span:nth-of-type(20) {
      animation-delay: 0.95s;
    }

    /* Animation Seven */
    .seven span {
      color:var(--background-color);
      opacity: 0;
      transform: translate(-150px, 0) scale(0.3);
      animation: leftRight 0.5s forwards;
      font-weight: bold;
    }
    .wihte-forever span{
      color:#fff !important;
    }
    @keyframes leftRight {
      40% {
        transform: translate(50px, 0) scale(0.7);
        opacity: 1;
        color: $accentColor;
      }

      60% {
        color: $accentColor;
      }

      80% {
        transform: translate(0) scale(2);
        opacity: 0;
      }

      100% {
        transform: translate(0) scale(1);
        opacity: 1;
      }
    }

    h1 {
      display: block;
      margin: 0 auto 1.8rem;
      font-size: 2.5rem;
      color: var(--background-color);
    }



    .description {
      width: 100%;
      margin: 1.8rem auto;
      font-size: 1.6rem;
      line-height: 1.3;
      font-weight: bold;
      color: var(--background-color);
    }
    .wihte-forever{
      color:#fff !important;
    }
  }

  .home-blog-wrapper {
    display: flex;
    align-items: flex-start;
    margin: 20px auto 0;
    padding: 0 20px;
    max-width: $homePageWidth;

    .blog-list {
      flex: auto;
      width: 0;

      .abstract-wrapper {
        .abstract-item:last-child {
          margin-bottom: 0px;
        }
      }
    }

    .info-wrapper {
      position: -webkit-sticky;
      position: sticky;
      top: 70px;
      overflow: hidden;
      transition: all 0.3s;
      margin-left: 15px;
      flex: 0 0 300px;
      height: auto;
      box-shadow: var(--box-shadow);
      border-radius: $borderRadius;
      box-sizing: border-box;
      padding: 0 15px;
      background: var(--background-color);

      &:hover {
        box-shadow: var(--box-shadow-hover);
      }

      h4 {
        color: var(--text-color);
      }

      .category-wrapper {
        list-style: none;
        padding-left: 0;

        .category-item {
          margin-bottom: 0.4rem;
          padding: 0.4rem 0.8rem;
          transition: all 0.5s;
          border-radius: $borderRadius;
          box-shadow: var(--box-shadow);
          background-color: var(--background-color);

          &:hover {
            transform: scale(1.04);

            a {
              color: $accentColor;
            }
          }

          a {
            display: flex;
            justify-content: space-between;
            color: var(--text-color);

            .post-num {
              width: 1.6rem;
              height: 1.6rem;
              text-align: center;
              line-height: 1.6rem;
              border-radius: $borderRadius;
              background: #eee;
              font-size: 13px;
              color: #fff;
            }
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .home-blog {
    .hero {
      // height 450px
      height: 100vh;

      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 0 auto 1.8rem;
        font-size: 2rem;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .home-blog-wrapper {
      display: block !important;

      .blog-list {
        width: auto;
      }

      .info-wrapper {
        // display none!important
        margin-left: 0;

        .personal-info-wrapper {
          display: none;
        }
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home-blog {
    .hero {
      // height 450px
      height: 100vh;

      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 0 auto 1.8rem;
        font-size: 2rem;
      }

      h1, .description, .action {
        // margin: 1.2rem auto;
      }

      .description {
        font-size: 1.2rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .home-blog-wrapper {
      display: block !important;

      .blog-list {
        width: auto;
      }

      .info-wrapper {
        // display none!important
        margin-left: 0;

        .personal-info-wrapper {
          display: none;
        }
      }
    }
  }
}
</style>
