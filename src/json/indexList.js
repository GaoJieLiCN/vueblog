var indexData = 
    {

      // BY MARK STONE
      // 23 NOVEMBER 
      // 3 COMMENTS 
      // PHOTOGRAPHY
      // WEB DESIGN

        "data": {
          "articleList": [{
            "id":'001',//文章id
            "typeState":'1',//文章类型---1为普通文章，2为经典语录
            "title": "Our trip to the Alps",//标题
            "author":'Mark Stone',//作者
            "introduce":'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',//文章简介
            "image": "static/images/post-1.jpg",//封面图
            "CreationTime":'1584331604',//创建时间
            "LastModifyTime":'1587017204',//最后修改时间
            "CommentsNum":'3',//评论数量
            "tallyList":[
              {"tallyName":'PHOTOGRAPHY'},
              {"tallyName":'WEB DESIGN'},
            ],//标签
          },{
            "id":'002',//文章id
            "typeState":'1',//文章类型---1为普通文章，2为经典语录
            "title": "Mark Stone",//标题
            "author":'Mark Stone',//作者
            "introduce":'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',//文章简介
            "image": "",//封面图
            "CreationTime":'1584331604',//创建时间
            "LastModifyTime":'1587017204',//最后修改时间
            "CommentsNum":'1',//评论数量
            "tallyList":[
              {"tallyName":'Marketing'},
              {"tallyName":'WEB DESIGN'},
            ],//标签
          },{
            "id":'003',//文章id
            "typeState":'2',//文章类型---1为普通文章，2为经典语录
            "title": "",//标题
            "author":'- Thomas Anderson',//作者
            "introduce":'The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.',//文章简介
            "image": "",//封面图
            "CreationTime":'',//创建时间
            "LastModifyTime":'',//最后修改时间
            "CommentsNum":'',//评论数量
            "tallyList":[],//标签
          },{
            "id":'004',//文章id
            "typeState":'1',//文章类型---1为普通文章，2为经典语录
            "title": "POST WITH VIDEO",//标题
            "author":'Mr Li',//作者
            "introduce":'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',//文章简介
            "image": "",//封面图
            "CreationTime":'1584331604',//创建时间
            "LastModifyTime":'1587017204',//最后修改时间
            "CommentsNum":'1',//评论数量
            "tallyList":[
              {"tallyName":'Marketing'},
              {"tallyName":'WEB DESIGN'},
            ],//标签
          },{
            "id":'005',//文章id
            "typeState":'1',//文章类型---1为普通文章，2为经典语录
            "title": "Post with slideshow",//标题
            "author":'Mr Li',//作者
            "introduce":'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.',//文章简介
            "image": "static/images/post-1.jpg",//封面图
            "CreationTime":'1584331604',//创建时间
            "LastModifyTime":'1587017204',//最后修改时间
            "CommentsNum":'1',//评论数量
            "tallyList":[
              {"tallyName":'Marketing'},
              {"tallyName":'WEB DESIGN'},
            ],//标签
          }],


          "blogCategories": [{
            "articleType":'Photography',
            "articleNum":'7'
          },{
            "articleType":'Web Design',
            "articleNum":'3'
          },{
            "articleType":'Illustration',
            "articleNum":'12'
          },{
            "articleType":'Marketing',
            "articleNum":'0'
          },{
            "articleType":'Wordpress',
            "articleNum":'10'
          }],

          "popularPosts": [{
            "articleType":'Photography',
            "articleNum":'7'
          }],


          "floorName": {
            "floor3": "营养奶品",
            "floor2": "新鲜水果",
            "floor1": "休闲食品"
          },
        },
      }


export default {
    data:indexData
}