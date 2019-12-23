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
          <el-table-column  label="操作" width="200" >
            <template slot-scope="obj">
            <el-button size="small">修改</el-button>
            <el-button size="small" @click="putComment(obj.row)">{{obj.row.comment_status ? "关闭评论" : '打开评论'}}</el-button>

            </template>
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
    },
    putComment (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`你确定要${mess}这条评论吗？`).then(() => {
        this.$http({
          url: '/comments/status',
          method: 'put',
          params: {
            article_id: row.id.toString()
          },
          data: {
            allow_comment: !row.comment_status
          }
        })
          .then(() => {
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.getList()
          })
          .catch(() => {
            this.$message({
              type: 'warning',
              message: '操作失败'
            })
          })
        console.log('你好')
      })
      console.log(row)
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style>

</style>
