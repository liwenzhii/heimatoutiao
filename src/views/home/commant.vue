<template>
  <div>
    <el-card>
      <common slot="header">
        <template slot="title">评论列表</template>
      </common>

      <el-table :data="list">
        <el-table-column prop="title" width="600" label="标题"></el-table-column>
        <el-table-column prop="comment_status" :formatter="formatBool" label="评论状态"></el-table-column>
        <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
        <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="obj" >
            <el-button type="text" size='small'>修改</el-button>
            <el-button type="text" size='small' @click="openOrClose(obj.row)">{{ obj.row.comment_status ? '关闭状态' : '打开状态'}}</el-button>
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
    getComment () {
      this.$http({
        url: 'articles',
        params: {
          response_type: 'comment'
        }
      }).then(res => {
        this.list = res.data.results
        console.log(res.data.results)
      })
    },
    formatBool (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    },

    openOrClose (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`你确定要${mess}评论吗？`).then(() => {
        this.$http({
          url: '/comments/status',
          method: 'put',
          params: {

            article_id: row.id.toString()
          },
          data: {
            allow_comment: !row.comment_status
          }
        }).then(() => {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.getComment()
        })
      })
    }

  },

  created () {
    this.getComment()
  }
}
</script>

<style>
</style>
