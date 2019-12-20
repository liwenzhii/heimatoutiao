<template>
<div class="slideBgc" style="width: 230px">
    <div style="text-align: center; padding: 10px 0; background-color: #2e2f32">
        <img src="../../../assets/img/logo_admin.png" style="height: 35px">
    </div>
  <el-menu style="width:231px" background-color="#353b4e" text-color="#adafb5" >
      <el-menu-item>
          <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index='1'>
          <span slot="title">内容管理</span>
              <el-menu-item>发布文章</el-menu-item>
              <el-menu-item>内容列表</el-menu-item>
              <el-menu-item>评论列表</el-menu-item>
              <el-menu-item>素材管理</el-menu-item>
          </el-submenu>
      <el-submenu index='2'>
          <span slot="title">粉丝管理</span>
          <el-menu-item>图文数据</el-menu-item>
          <el-menu-item>粉丝画像</el-menu-item>
          <el-menu-item>粉丝概况</el-menu-item>
          <el-menu-item>粉丝列表</el-menu-item>
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
        height: 100vh;
        background-color:#323745;
        overflow: hidden;
    }

</style>
