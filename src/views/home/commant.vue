<template>
  <div>
      <el-card>
        <common slot="header">
          <template slot="title">评论列表</template>
        </common>
        <el-table :data="list">
          <el-table-column prop="" width="652" label="标题"></el-table-column>
          <el-table-column  label="评论状态"></el-table-column>
          <el-table-column  label="总评论数"></el-table-column>
          <el-table-column  label="粉丝评论数"></el-table-column>
          <el-table-column  label="操作"></el-table-column>
        </el-table>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getList () {
      this.$http({
        url: '/articles',
        params: {
          response_type: 'comment'
        }
      }).then((res) => {
        this.list = res.data.resluts
        console.log(res)
      })
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style>

</style>
