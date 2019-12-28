<template>
  <el-container>
      <el-aside  style='transition: all 0.5s;'  :style="{ width: fold ? '60px' : '230px'}">
          <slidebar></slidebar>
      </el-aside>
      <el-container>
          <el-header >
              <headers></headers>
          </el-header>
          <el-main style="padding:0">
            <router-view></router-view>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>
import eventBus from '../../components/publish/eventBus'
export default {
  data () {
    return {
      fold: false
    }
  },

  created () {
    eventBus.$on('closeOrOpen', () => {
      this.fold = !this.fold
    })
  }
}
</script>

<style>
 .el-menu {
    border-right: none!important;
  }
</style>
