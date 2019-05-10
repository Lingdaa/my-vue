<template>
  <div id="home">
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" height="230px">
      </van-swipe-item>
    </van-swipe>
    <ul class="goodsList">
      <li
        @load="getProductItems()"
        v-bind="loading"
        v-for="(item, index) in goodsList"
        :key="index"
      >
        <van-card
          tag="热销"
          :price="item.price"
          :desc="item.desc"
          :title="item.productName"
          :thumb="item.productImg"
          :origin-price="item.originPrice"
        >
          <div slot="footer" class="footer">
            <van-icon name="add-o" size="28px" class="addToShopCard" @click="skushow=true"/>
          </div>
        </van-card>
      </li>
    </ul>
    <van-sku
      v-model="skushow"
      :sku="sku"
      :goods="goods"
      :goods-id="skuData.goodsId"
      :hide-stock="sku.hide_stock"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
      :close-on-click-overlay="true"
    />
  </div>
</template>
<script>
import axios from "axios";
import qs from "qs";

export default {
  created: function() {
    this.getProductItems();
  },
  data() {
    return {
      value: "",
      loading: false, // 是否处于加载状态
      skushow: false,
      onSearch: "",
      images: [
        "./static/homeImg/a1.jpg",
        "./static/homeImg/a2.jpg",
        "./static/homeImg/a3.jpg"
      ],
      goodsList: [
        {
          productImg: "./static/productImg/danhuangsu-logo.png",
          productName: "蛋黄酥",
          originPrice: "54",
          price: "39",
          desc: "每一口都是纯纯的酥香味儿~",
          buyCount: "0"
        },
        {
          productImg: "./static/productImg/haiyadan-logo.png",
          productName: "海鸭蛋",
          originPrice: "52",
          price: "39",
          desc: "广西红海岸边的海鸭生的蛋蛋，每一个都爆油！",
          buyCount: "0"
        },
        {
          productImg: "./static/productImg/hetao-logo.png",
          productName: "糖炒纸皮核桃",
          originPrice: "39",
          price: "36",
          desc: "无添加剂，肉肉饱满，香酥无比",
          buyCount: "0"
        },
        {
          productImg: "./static/productImg/mangguogan-logo.png",
          productName: "芒果干",
          originPrice: "74",
          price: "66",
          desc: "一斤芒果干要牺牲五斤的鲜芒果哦！每一片芒果干都带着满满的诚意",
          buyCount: "0"
        }
      ],
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "规格", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "2盒 每盒6个", // skuValueName：规格值名称
                imgUrl: "./static/productImg/mangguogan-logo.png" // 规格类目图片，只有第一个规格类目可以定义图片
              }
            ],
            k_s: "s2" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 5400, // 价格（单位分）
            s1: "30349", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "30349", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "54.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 30349, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 商品标题
        title: "蛋黄酥",
        // 默认商品 sku 缩略图
        picture: "./static/productImg/danhuangsu-logo.png"
      },
      skuData: {
        // 商品 id
        goodsId: "946755",
        // 选择的商品数量
        selectedNum: 1,
        // 选择的 sku 组合
        selectedSkuComb: {
          id: 2257,
          price: 100,
          s1: "30349",
          stock_num: 111
        }
      }
    };
  },
  methods: {
    onBuyClicked(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
    },
    onAddCartClicked() {},
    getProductItems() {
      // var that = this;
      alert(11);
      this.$http({
        method: 'get',
        url: '/product/getList',
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded'
        },
        params: {

        }
      }).then((response) => {
        alert(2);
      });

      // axios.get("/product/getList").then(function(res) {
      //   alert(2);
      //   var data = JSON.stringify(res);

      //   // 返回的数据都在res.data里面
      //   for (let i = 0; i < data.length; i++) {
      //     that.goodsList[i].productImg =
      //       "./static/productImg/danhuangsu-logo.png";
      //     that.goodsList[i].productName = data.cName;
      //     that.goodsList[i].originPrice = "1000";
      //     that.goodsList[i].price = data.dPrice;
      //     that.goodsList[i].desc = "我是描述哈哈哈哈哈哈哈";
      //   }
      // })
      // .catch(function(err) {
      //   console.log(err);
      // });
    }
  }
};
</script>

<style>
.pic img {
  width: 80px;
  float: left;
  margin-left: 10px;
  margin-top: 5px;
}
.goodsList li {
  width: 100%;
  height: 130px;
  font-family: "YouYuan";
  border-bottom: 2px solid rgb(187, 187, 187);
}
.goodsList {
  margin-bottom: 60px;
  margin-top: 5px;
}
.van-card {
  font-size: 17px;
}
.footer .van-button {
  font-size: 16px;
}
.footer {
  height: 30px;
}
.van-stepper {
  float: left;
  margin-left: 60%;
}
.addToShopCard {
  float: right;
}
</style>
