<template>
  <div>

<main>

      <!-- Loading 这里太慢先取消掉-->
      <loading v-if="isLoading"></loading>
      <!-- Loading end -->


      <!-- navbar 头部导航 -->
      <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="index.html">Titan</a>
          </div>
          <div class="collapse navbar-collapse" id="custom-collapse">
            <ul class="nav navbar-nav navbar-right">


              <li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Pages</a>
                <ul class="dropdown-menu">
                  <li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">About</a>
                    <ul class="dropdown-menu">
                      <li><a href="about1.html">About 1</a></li>
                      <li><a href="about2.html">About 2</a></li>
                      <li><a href="about3.html">About 3</a></li>
                      <li><a href="about4.html">About 4</a></li>
                      <li><a href="about5.html">About 5</a></li>
                    </ul>
                  </li>
                  <li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Services</a>
                    <ul class="dropdown-menu">
                      <li><a href="service1.html">Service 1</a></li>
                      <li><a href="service2.html">Service 2</a></li>
                      <li><a href="service3.html">Service 3</a></li>
                    </ul>
                  </li>
                  <li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Masonry</a>
                    <ul class="dropdown-menu">
                      <li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Boxed</a>
                        <ul class="dropdown-menu">
                          <li><a href="portfolio_masonry_boxed_col_2.html"><i class="fa fa-bolt"></i> 2 Columns</a></li>
                          <li><a href="portfolio_masonry_boxed_col_3.html"><i class="fa fa-link fa-sm"></i> 3 Columns</a></li>
                          <li><a href="portfolio_masonry_boxed_col_4.html"><i class="fa fa-tasks"></i> 4 Columns</a></li>
                        </ul>
                      </li>
                      <li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Full Width</a>
                        <ul class="dropdown-menu">
                          <li><a href="portfolio_masonry_full_width_col_2.html">2 Columns</a></li>
                          <li><a href="portfolio_masonry_full_width_col_3.html">3 Columns</a></li>
                          <li><a href="portfolio_masonry_full_width_col_4.html">4 Columns</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="login_register.html">Login / Register</a></li>
                  <li><a href="faq.html">FAQ</a></li>
                  <li><a href="404.html">Page 404</a></li>
                </ul>
              </li>

              <li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Features</a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="alerts-and-wells.html"><i class="fa fa-bolt"></i> Alerts and Wells</a></li>
                  <li><a href="buttons.html"><i class="fa fa-link fa-sm"></i> Buttons</a></li>
                  <li><a href="tabs_and_accordions.html"><i class="fa fa-tasks"></i> Tabs &amp; Accordions</a></li>
                  <li><a href="content_box.html"><i class="fa fa-list-alt"></i> Contents Box</a></li>
                  <li><a href="forms.html"><i class="fa fa-check-square-o"></i> Forms</a></li>
                  <li><a href="icons.html"><i class="fa fa-star"></i> Icons</a></li>
                  <li><a href="progress-bars.html"><i class="fa fa-server"></i> Progress Bars</a></li>
                  <li><a href="typography.html"><i class="fa fa-font"></i> Typography</a></li>
                </ul>
              </li>

              <li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Shop</a>
                <ul class="dropdown-menu" role="menu">
                  <li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Product</a>
                    <ul class="dropdown-menu">
                      <li><a href="shop_product_col_3.html">3 columns</a></li>
                      <li><a href="shop_product_col_4.html">4 columns</a></li>
                    </ul>
                  </li>
                  <li><a href="shop_single_product.html">Single Product</a></li>
                  <li><a href="shop_checkout.html">Checkout</a></li>
                </ul>
              </li>

              <li class="dropdown"><a class="dropdown-toggle" href="documentation.html" data-toggle="dropdown">Documentation</a>
                <ul class="dropdown-menu">
                  <li><a href="documentation.html#contact">Contact Form</a></li>
                  <li><a href="documentation.html#reservation">Reservation Form</a></li>
                  <li><a href="documentation.html#mailchimp">Mailchimp</a></li>
                  <li><a href="documentation.html#gmap">Google Map</a></li>
                  <li><a href="documentation.html#plugin">Plugins</a></li>
                  <li><a href="documentation.html#changelog">Changelog</a></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <!-- navbar 头部导航 end -->


      <div class="main">

        <!-- 顶部大图 -->
        <section class="module bg-dark-60 blog-page-header" style="background-image: url('static/images/blog_bg.jpg');">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <h2 class="module-title font-alt">Blog Standard</h2>
                <div class="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
              </div>
            </div>
          </div>
        </section>
        <!-- 顶部大图 end -->

        <!-- 主体内容 -->
        <section class="module">
          <div class="container">
            <div class="row">
              <div class="col-sm-8">





              <div @click="clickArticle(index,item.id)" v-for="(item,index) in articleList" :key="index">


                    <router-link v-if="item.typeState == 1"  :to="{path: '/indexList/details', query:{}}" tag="div" class="">
                <div class="post post-shadow" >
                  <div v-show="item.image != ''" class="post-thumbnail"><a href="#"><img :src="item.image" alt="Blog-post Thumbnail"/></a></div>
                  <div class="post-header font-alt">


                    <h2 class="post-title"><a>{{item.title}}</a></h2>
                    

                    <div class="post-meta">By&nbsp;<a href="#">{{item.author}}</a>| {{item.lastTime}} | {{item.CommentsNum}} Comments | <a href="#">Photography, </a><a href="#">Web Design</a>
                    </div>
                  </div>
                  <div class="post-entry">
                    <p>{{item.introduce}}</p>
                  </div>
                  <div class="post-more"><a class="more-link" href="#">Read more</a></div>
                </div>
                  </router-link>

                <div class="post" v-else-if="item.typeState == 2">
                  <div class="post-quote">
                    <blockquote class="font-serif">
                      <p>&quot; {{item.introduce}} &quot;</p>
                      <p class="font-inc font-uppercase">- {{item.author}}</p>
                    </blockquote>
                  </div>
                </div>


</div>



                <!-- 分页 -->
                <div class="pagination font-alt"><a href="#"><i class="fa fa-angle-left"></i></a><a class="active" href="#">1</a><a href="#">2</a><a href="#">3</a><a href="#">4</a><a href="#"><i class="fa fa-angle-right"></i></a></div>
                <!-- 分页 end -->


              </div>



              <div class="col-sm-4 col-md-3 col-md-offset-1 sidebar">
                <div class="widget">
                  <form role="form">
                    <div class="search-box">
                      <input class="form-control" type="text" placeholder="Search..."/>
                      <button class="search-btn" type="submit"><i class="fa fa-search"></i></button>
                    </div>
                  </form>
                </div>
                <div class="widget">
                  <h5 class="widget-title font-alt">Blog Categories</h5>
                  <ul class="icon-list" v-for="(item,index) in blogCategories" :key="index">
                    <li><a href="#">{{item.articleType}} - {{item.articleNum}}</a></li>

                  </ul>
                </div>
                <div class="widget">
                  <h5 class="widget-title font-alt">Popular Posts</h5>
                  <ul class="widget-posts">
                    <li class="clearfix">
                      <div class="widget-posts-image"><a href="#"><img src="static/images/rp-1.jpg" alt="Post Thumbnail"/></a></div>
                      <div class="widget-posts-body">
                        <div class="widget-posts-title"><a href="#">Designer Desk Essentials</a></div>
                        <div class="widget-posts-meta">23 january</div>
                      </div>
                    </li>
                    <li class="clearfix">
                      <div class="widget-posts-image"><a href="#"><img src="static/images/rp-2.jpg" alt="Post Thumbnail"/></a></div>
                      <div class="widget-posts-body">
                        <div class="widget-posts-title"><a href="#">Realistic Business Card Mockup</a></div>
                        <div class="widget-posts-meta">15 February</div>
                      </div>
                    </li>
                    <li class="clearfix">
                      <div class="widget-posts-image"><a href="#"><img src="static/images/rp-3.jpg" alt="Post Thumbnail"/></a></div>
                      <div class="widget-posts-body">
                        <div class="widget-posts-title"><a href="#">Eco bag Mockup</a></div>
                        <div class="widget-posts-meta">21 February</div>
                      </div>
                    </li>
                    <li class="clearfix">
                      <div class="widget-posts-image"><a href="#"><img src="static/images/rp-4.jpg" alt="Post Thumbnail"/></a></div>
                      <div class="widget-posts-body">
                        <div class="widget-posts-title"><a href="#">Bottle Mockup</a></div>
                        <div class="widget-posts-meta">2 March</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="widget">
                  <h5 class="widget-title font-alt">Tag</h5>
                  <div class="tags font-serif"><a href="#" rel="tag">Blog</a><a href="#" rel="tag">Photo</a><a href="#" rel="tag">Video</a><a href="#" rel="tag">Image</a><a href="#" rel="tag">Minimal</a><a href="#" rel="tag">Post</a><a href="#" rel="tag">Theme</a><a href="#" rel="tag">Ideas</a><a href="#" rel="tag">Tags</a><a href="#" rel="tag">Bootstrap</a><a href="#" rel="tag">Popular</a><a href="#" rel="tag">English</a>
                  </div>
                </div>
                <div class="widget">
                  <h5 class="widget-title font-alt">Text</h5>The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.
                </div>
                <div class="widget">
                  <h5 class="widget-title font-alt">Recent Comments</h5>
                  <ul class="icon-list">
                    <li>Maria on <a href="#">Designer Desk Essentials</a></li>
                    <li>John on <a href="#">Realistic Business Card Mockup</a></li>
                    <li>Andy on <a href="#">Eco bag Mockup</a></li>
                    <li>Jack on <a href="#">Bottle Mockup</a></li>
                    <li>Mark on <a href="#">Our trip to the Alps</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- 主体内容 end -->

        <div class="module-small bg-dark">
          <div class="container">
            <div class="row">
              <div class="col-sm-3">
                <div class="widget">
                  <h5 class="widget-title font-alt">About Titan</h5>
                  <p>The languages only differ in their grammar, their pronunciation and their most common words.</p>
                  <p>Phone: +1 234 567 89 10</p>Fax: +1 234 567 89 10
                  <p>Email:<a href="#">somecompany@example.com</a></p>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="widget">
                  <h5 class="widget-title font-alt">Recent Comments</h5>
                  <ul class="icon-list">
                    <li>Maria on <a href="#">Designer Desk Essentials</a></li>
                    <li>John on <a href="#">Realistic Business Card Mockup</a></li>
                    <li>Andy on <a href="#">Eco bag Mockup</a></li>
                    <li>Jack on <a href="#">Bottle Mockup</a></li>
                    <li>Mark on <a href="#">Our trip to the Alps</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="widget">
                  <h5 class="widget-title font-alt">Blog Categories</h5>
                  <ul class="icon-list">
                    <li><a href="#">Photography - 7</a></li>
                    <li><a href="#">Web Design - 3</a></li>
                    <li><a href="#">Illustration - 12</a></li>
                    <li><a href="#">Marketing - 1</a></li>
                    <li><a href="#">Wordpress - 16</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="widget">
                  <h5 class="widget-title font-alt">Popular Posts</h5>
                  <ul class="widget-posts">
                    <li class="clearfix">
                      <div class="widget-posts-image"><a href="#"><img src="static/images/rp-1.jpg" alt="Post Thumbnail"/></a></div>
                      <div class="widget-posts-body">
                        <div class="widget-posts-title"><a href="#">Designer Desk Essentials</a></div>
                        <div class="widget-posts-meta">23 january</div>
                      </div>
                    </li>
                    <li class="clearfix">
                      <div class="widget-posts-image"><a href="#"><img src="static/images/rp-2.jpg" alt="Post Thumbnail"/></a></div>
                      <div class="widget-posts-body">
                        <div class="widget-posts-title"><a href="#">Realistic Business Card Mockup</a></div>
                        <div class="widget-posts-meta">15 February</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="divider-d">
        <footer class="footer bg-dark">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <p class="copyright font-alt">&copy; 2017&nbsp;<a href="index.html">TitaN</a>, All Rights Reserved</p>
              </div>
              <div class="col-sm-6">
                <div class="footer-social-links"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-dribbble"></i></a><a href="#"><i class="fa fa-skype"></i></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div class="scroll-up"><a href="#totop"><i class="fa fa-angle-double-up"></i></a></div>
    </main>

  </div>
</template>

<script>
import Loading from "@/components/laoding/laoding";
import indexList from "@/json/indexList"; //数据文件
// import navbar from 'src/components/navbar/navbar'

// ---------------------------------------------------->
export default {
  data() {
    return {
      indexList: [],//首页总数据
      articleList: [],//文章列表数据
      blogCategories:[],//文章类型数据
      popularPosts:[],//热门文章
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
    console.log(indexList);
    this.indexList = indexList.data.data;

    var datalist = indexList.data.data.articleList;
    for (let i = 0; i < datalist.length; i++) {
      const listI = datalist[i];
      listI.lastTime = timestampToTime(listI.LastModifyTime);
    }
    this.articleList = datalist;

    this.blogCategories = indexList.data.data.blogCategories;
    
    console.log(this.blogCategories);
  },
  beforeMount: function() {
    console.log("3-beforeMount 挂载之前");
  },
  mounted: function() {
    console.log("4-mounted 被创建");
    this.loadPageData();






// --------------------------jq--------------------->
// --------------------------jq--------------------->

/* ---------------------------------------------- /*
         * Scroll top
         /* ---------------------------------------------- */

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(".scroll-up").fadeIn();
    } else {
      $(".scroll-up").fadeOut();
    }
  });

  $('a[href="#totop"]').click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  /* ---------------------------------------------- /*
   * Initialization General Scripts for all pages
  /* ---------------------------------------------- */

  var homeSection = $(".home-section"),
    navbar = $(".navbar-custom"),
    navHeight = navbar.height(),
    width = Math.max($(window).width(), window.innerWidth),
    mobileTest = false;

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    mobileTest = true;
  }

  navbarAnimation(navbar, homeSection, navHeight);
  navbarSubmenu(width);
  hoverDropdown(width, mobileTest);

  $(window).resize(function() {
    var width = Math.max($(window).width(), window.innerWidth);
    hoverDropdown(width, mobileTest);
  });

  /* ---------------------------------------------- /*
         * Transparent navbar animation
         /* ---------------------------------------------- */

  function navbarAnimation(navbar, homeSection, navHeight) {
    var topScroll = $(window).scrollTop();
    if (navbar.length > 0 && homeSection.length > 0) {
      if (topScroll >= navHeight) {
        navbar.removeClass("navbar-transparent");
      } else {
        navbar.addClass("navbar-transparent");
      }
    }
  }

  /* ---------------------------------------------- /*
         * Navbar submenu
         /* ---------------------------------------------- */

  function navbarSubmenu(width) {
    if (width > 767) {
      $(".navbar-custom .navbar-nav > li.dropdown").hover(function() {
        var MenuLeftOffset = $(".dropdown-menu", $(this)).offset().left;
        var Menu1LevelWidth = $(".dropdown-menu", $(this)).width();
        if (width - MenuLeftOffset < Menu1LevelWidth * 2) {
          $(this)
            .children(".dropdown-menu")
            .addClass("leftauto");
        } else {
          $(this)
            .children(".dropdown-menu")
            .removeClass("leftauto");
        }
        if ($(".dropdown", $(this)).length > 0) {
          var Menu2LevelWidth = $(".dropdown-menu", $(this)).width();
          if (width - MenuLeftOffset - Menu1LevelWidth < Menu2LevelWidth) {
            $(this)
              .children(".dropdown-menu")
              .addClass("left-side");
          } else {
            $(this)
              .children(".dropdown-menu")
              .removeClass("left-side");
          }
        }
      });
    }
  }

  /* ---------------------------------------------- /*
         * Navbar hover dropdown on desctop
         /* ---------------------------------------------- */

  function hoverDropdown(width, mobileTest) {
    if (width > 767 && mobileTest !== true) {
      $(
        ".navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown"
      ).removeClass("open");
      var delay = 0;
      var setTimeoutConst;
      $(
        ".navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown"
      ).hover(
        function() {
          var $this = $(this);
          setTimeoutConst = setTimeout(function() {
            $this.addClass("open");
            $this.find(".dropdown-toggle").addClass("disabled");
          }, delay);
        },
        function() {
          clearTimeout(setTimeoutConst);
          $(this).removeClass("open");
          $(this)
            .find(".dropdown-toggle")
            .removeClass("disabled");
        }
      );
    } else {
      $(
        ".navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown"
      ).unbind("mouseenter mouseleave");
      $(".navbar-custom [data-toggle=dropdown]")
        .not(".binded")
        .addClass("binded")
        .on("click", function(event) {
          event.preventDefault();
          event.stopPropagation();
          $(this)
            .parent()
            .siblings()
            .removeClass("open");
          $(this)
            .parent()
            .siblings()
            .find("[data-toggle=dropdown]")
            .parent()
            .removeClass("open");
          $(this)
            .parent()
            .toggleClass("open");
        });
    }
  }

  /* ---------------------------------------------- /*
         * Navbar collapse on click
         /* ---------------------------------------------- */

  $(document).on("click", ".navbar-collapse.in", function(e) {
    if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
      $(this).collapse("hide");
    }
  });

  /*===============================================================
         Working Contact Form  //联系页面
         ================================================================*/

  $("#contactForm").submit(function(e) {
    e.preventDefault();
    var $ = jQuery;

    var postData = $(this).serializeArray(),
      formURL = $(this).attr("action"),
      $cfResponse = $("#contactFormResponse"),
      $cfsubmit = $("#cfsubmit"),
      cfsubmitText = $cfsubmit.text();

    $cfsubmit.text("Sending...");

    $.ajax({
      url: formURL,
      type: "POST",
      data: postData,
      success: function(data) {
        $cfResponse.html(data);
        $cfsubmit.text(cfsubmitText);
        $("#contactForm input[name=name]").val("");
        $("#contactForm input[name=email]").val("");
        $("#contactForm textarea[name=message]").val("");
      },
      error: function(data) {
        alert("Error occurd! Please try again");
      }
    });

    return false;
  });

// --------------------------jq--------------------->
// --------------------------jq--------------------->



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

function timestampToTime(timestamp) {
  var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + "年";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "月";
  var D = date.getDate() + "日";
  // var h = date.getHours() + ':';
  // var m = date.getMinutes() + ':';
  // var s = date.getSeconds();
  return Y + M + D;
}

// --------------------------jq--------------------->
// --------------------------jq--------------------->
  // 如果jq代码放这里不重载页面将不会执行，推测应该是spa项目只会document一次，重复无效
// $(document).ready(function() {

// });
// --------------------------jq--------------------->
// --------------------------jq--------------------->
</script>

<style scoped>
</style>