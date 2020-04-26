<template>
  <div>
    <main>
      <!-- Loading 这里太慢先取消掉-->
      <loading v-if="isLoading"></loading>
      <!-- Loading end -->

      <section
        class="home-section home-parallax home-fade home-full-height bg-dark bg-dark-30"
        id="home"
        style="background-image: url('static/images/blog_bg.jpg');"
      >
        <div class="titan-caption">
          <div class="caption-content">
            <div class="font-alt mb-30 titan-title-size-4">Error 404</div>
            <div class="font-alt">
              The requested URL was not found on this server.
              <br />That is all we know.
            </div>
            <div class="font-alt mt-30">
              <a class="btn btn-border-w btn-round" href="index.html">Back to home page</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Loading from "@/components/laoding/laoding";

$(document).ready(function() {
  /* ---------------------------------------------- /*
         * Initialization General Scripts for all pages
         /* ---------------------------------------------- */

  var homeSection = $(".home-section");

  buildHomeSection(homeSection);

  $(window).resize(function() {
    buildHomeSection(homeSection);
  });

  $(window).scroll(function() {
    effectsHomeSection(homeSection, this);
  });

  /* ---------------------------------------------- /*
         * Home section height
         /* ---------------------------------------------- */

  function buildHomeSection(homeSection) {
    if (homeSection.length > 0) {
      if (homeSection.hasClass("home-full-height")) {
        homeSection.height($(window).height());
      } else {
        homeSection.height($(window).height() * 0.85);
      }
    }
  }

  /* ---------------------------------------------- /*
         * Home section effects
         /* ---------------------------------------------- */

  function effectsHomeSection(homeSection, scrollTopp) {
    if (homeSection.length > 0) {
      var homeSHeight = homeSection.height();
      var topScroll = $(document).scrollTop();
      if (
        homeSection.hasClass("home-parallax") &&
        $(scrollTopp).scrollTop() <= homeSHeight
      ) {
        homeSection.css("top", topScroll * 0.55);
      }
      if (
        homeSection.hasClass("home-fade") &&
        $(scrollTopp).scrollTop() <= homeSHeight
      ) {
        var caption = $(".caption-content");
        caption.css("opacity", 1 - (topScroll / homeSection.height()) * 1);
      }
    }
  }
});

// ----------------------------------->
export default {
  data() {
    return {
      isLoading: true
    };
  },

  components: {
    // navbar,
    Loading
  },

  methods: {
    loadPageData: function() {
      var that = this;
      setTimeout(function() {
        that.isLoading = false;
      }, 350);
      // axios 请求页面数据 .then 中将状态值修改  this.isLoading = false
    }
  },

  beforeCreate: function() {
    console.log("1-beforeCreate 初始化之后");
  },
  created: function() {
    console.log("2-created 创建完成");
  },
  beforeMount: function() {
    console.log("3-beforeMount 挂载之前");
  },
  mounted: function() {
    console.log("4-mounted 被创建");
    this.loadPageData();
  },
  beforeUpdate: function() {
    console.log("5-beforeUpdate 数据更新前");
  },
  updated: function() {
    console.log("6-updated 被更新后");
  },
  activated: function() {
    console.log("7-activated");
  },
  deactivated: function() {
    console.log("8-deactivated");
  },
  beforeDestroy: function() {
    console.log("9-beforeDestroy 销毁之前");
  },
  destroyed: function() {
    console.log("10-destroyed 销毁之后");
  }
};
</script>

<style scoped>
</style>