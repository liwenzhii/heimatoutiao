<template>
  <el-card>
      <common slot="header">
          <template slot="title">素材管理</template>
      </common>
      <el-tabs  type="card" v-model="activeName">
          <el-tab-pane label="全部素材"  name="all">
              <!-- 放全部素材 -->
          </el-tab-pane>
          <el-tab-pane label="收藏素材"  name="collect">
              <!-- 放收藏素材 -->
          </el-tab-pane>
      </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'collect'
    }
  }
}
</script>

<style>

</style>
