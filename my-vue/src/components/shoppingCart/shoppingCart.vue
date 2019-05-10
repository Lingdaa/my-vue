<template>
  <div id="app">
    <van-nav-bar title="购物车" right-text="管理" @click-right="onClickRight"/>
    <van-swipe-cell :right-width="65"  v-for="(item, key) in shopdata" :key="key">
      <label :for="item.id" class="carts-checked ml-8">
        <!-- <input type="checkbox"  v-model="i.isChecked" :checked="i.isChecked" :id="i.item.id" @click="seleceOne(key)">-->
        <van-checkbox v-model="item.isChecked" :id="item.id" />
      </label>
      <van-cell-group>
        <van-card class="shoppingCard"
          :num="item.total"
          :thumb="item.imageURL"
          :price="item.price "
          :title="item.title"
          :desc="item.desc"
        >
        </van-card>
        <van-stepper v-model="item.total" class="totalChange"/>
      </van-cell-group>
      <span class="shopDelate" slot="right" @click="deleteCartItem(page,i.id,key)">删除</span>
    </van-swipe-cell>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked: true,
      shopdata: [
        {
          id: '1',
          isChecked: false,
          desc: '规格：2盒 每盒12个',
          total: '3',
          title: '蛋黄酥',
          price: '54',
          imageURL: './static/productImg/danhuangsu-logo.png'
        },
        {
          id: '2',
          isChecked: false,
          desc: '规格：2盒 每盒12个',
          total: '3',
          title: '蛋黄酥',
          price: '54',
          imageURL: './static/productImg/danhuangsu-logo.png'
        }
      ]
    }
  },
  methods: {
    onClickRight () {

    }
  }
}
</script>

<style lang="less">
.shoppingCard {
  width: 100%;
  height: 65px;
  font-size: 17px;
}
.van-cell-group {
  float: right;
  width: 90%;
  height: 100px;
  border-bottom:2px solid rgb(187, 187, 187);
}
.van-checkbox {
  float: left;
  margin-left: 3%;
  margin-top: 36px;
}
.totalChange {
  float: right;
}
.shopDelate {
  color: red;
  line-height: 100px;
  text-align: center;
  margin-left: 10px;
}
</style>
