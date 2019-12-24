<template>
<div class="slideBgc" style="width: 230px">
    <div style="text-align: center; padding: 10px 0; background-color: #2e2f32">
        <img src="../../../assets/img/logo_admin.png" style="height: 35px">
    </div>
  <el-menu router style="width:231px" background-color="#353b4e" text-color="#adafb5" >
      <el-menu-item index="/home">
          <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index='1'>
          <span slot="title">内容管理</span>
              <el-menu-item index="/home/publish">发布文章</el-menu-item>
              <el-menu-item index="/home/articles">内容列表</el-menu-item>
              <el-menu-item index="/home/commant">评论列表</el-menu-item>
              <el-menu-item index="/home/material">素材管理</el-menu-item>
          </el-submenu>
      <el-submenu index='2'>
          <span slot="title">粉丝管理</span>
          <el-menu-item index="/home/picture">图文数据</el-menu-item>
          <el-menu-item index="/home/fansinfo">粉丝画像</el-menu-item>
          <el-menu-item index="/home/fanslife">粉丝概况</el-menu-item>
          <el-menu-item index="/home/fanslist">粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item>
          <span slot="title">账户信息</span>
      </el-menu-item>
  </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
    .slideBgc {
<<<<<<< HEAD
        height: 100%;
=======
        height:100%;
>>>>>>> 8c99508d94c2cdfd24e455a5f02bd7a4c1597d76
        background-color:#323745;
        overflow: hidden;
    }

</style>
