<template>
  <div id="app">
    <div class="content">
      <router-view></router-view>
    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">
        <router-link to="/home">主页</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="apps-o">
        <router-link to="/categories">分类</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">
        <router-link to="/shoppingCart">购物车</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="manager-o">
        <router-link to="/me">我</router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
