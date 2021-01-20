<template>
  <el-container class="home_container">
<!--    头信息-->
    <el-header >
     <div class="menubtns">
       <el-menu
           :default-active="activeIndex2"
           class="el-menu-demo"
           mode="horizontal"
           @select="handleSelect"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b"
       >
         <el-menu-item index="1">首页</el-menu-item>
         <el-menu-item index="2">购物车</el-menu-item>
         <el-menu-item index="3">收藏</el-menu-item>
         <el-menu-item index="4">卖了换钱</el-menu-item>
         <el-menu-item index="5">个人中心</el-menu-item>
         <el-menu-item index="6">登录/注册</el-menu-item>
       </el-menu>
     </div>
<!--轮播图-->
<div>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
</div>
    </el-header>

    <el-main>

      <!--        路由占位符-->
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "home"
}
</script>

<style lang="less" scoped >
.home_container{
  height: 100%;
}

.el-header{

  background-color: #373d41;
height: 300px;
}

.menubtns{
  width:600px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>