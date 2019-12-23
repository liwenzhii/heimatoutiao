<template>
  <div>
      <el-card>
        <common slot="header">
          <template slot="title">评论列表</template>
        </common>
        <el-table :data="list">
          <el-table-column prop="title" width="552" label="标题"></el-table-column>
          <el-table-column :formatter="formatterBool" prop="comment_status" label="评论状态"></el-table-column>
          <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
          <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
          <el-table-column  label="操作" width="200" slot-scope="obj">
            <el-button size="small">修改</el-button>
            <el-button size="small">打开评论{{obj.row}}</el-button>
          </el-table-column>
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
    formatterBool (row, column, cellValue, index) {
      console.log(row)
      return row.comment_status ? '打开' : '关闭'
    },
    getList () {
      this.$http({
        url: '/articles',
        params: {
          response_type: 'comment'
        }
      }).then((res) => {
        this.list = res.data.results
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
