<template>
<div class="slideBgc" style='transition: all 0.5s' :style="{width: fold  ? '60px': '230px'  }">
    <div style="text-align: center; padding: 10px 0; background-color: #2e2f32">
        <img :src= "fold ? defaultImgTwo : defaultImg"   style="height: 35px">
    </div>
  <el-menu router :style="{ width: fold ? '60px' : '230px'}"
  background-color="#353b4e" text-color="#adafb5" :collapse = 'fold' style='transition: all 0.5s'>

      <el-menu-item index="/home">
          <i class="el-icon-video-camera"></i>
          <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index='1'>
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>内容管理</span>
        </template>
              <el-menu-item index="/home/publish">发布文章</el-menu-item>
              <el-menu-item index="/home/articles">内容列表</el-menu-item>
              <el-menu-item index="/home/commant">评论列表</el-menu-item>
              <el-menu-item index="/home/material">素材管理</el-menu-item>
          </el-submenu>
      <el-submenu index='2'>
        <template  slot="title">
          <i class="el-icon-s-goods"></i>
          <span>粉丝管理</span>
        </template>
          <el-menu-item index="/home/picture">图文数据</el-menu-item>
          <el-menu-item index="/home/fansinfo">粉丝画像</el-menu-item>
          <el-menu-item index="/home/fanslife">粉丝概况</el-menu-item>
          <el-menu-item index="/home/fanslist">粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item index='/home/account'>
          <i class="el-icon-upload"></i>

          <span slot="title">账户信息</span>
      </el-menu-item>
  </el-menu>
  </div>
</template>

<script>
import eventBus from '../../publish/eventBus'

export default {
  data () {
    return {
      fold: false,
      defaultImg: require('../../../assets/img/logo_admin.png'),
      defaultImgTwo: require('../../../assets/img/toutiao.png')
    }
  },
  created () {
    eventBus.$on('closeOrOpen', () => {
      this.fold = !this.fold
    })
  }
}
</script>

<style scoped lang='less'>
    .slideBgc {
        height:100%;
        background-color:#323745;
        overflow: hidden;
    }

</style>
