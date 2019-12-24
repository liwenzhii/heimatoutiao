<template>
  <div>
      <el-card v-loading = "loading">
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
        <el-row style="height: 80px" type="flex" justify="center" align="middle">
          <el-pagination
            background
            layout="prev, pager, next"
            :total= "page.total"
            :page-size =  "page.pageSize"
            :current-page = 'page.currentPage'
            @current-change = "changePage"
            >
          </el-pagination>
        </el-row>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      list: [],
      page: {
        total: 0,
        pageSize: 10,
        currentPage: 1
      }
    }
  },
  methods: {
    changePage (newPage) {
      this.loading = true
      this.page.currentPage = newPage
      this.getList()
    },
    formatterBool (row, column, cellValue, index) {
      return row.comment_status ? '打开' : '关闭'
    },
    getList () {
      this.loading = true
      this.$http({
        url: '/articles',
        params: {
          response_type: 'comment',
          page: this.page.currentPage,
          per_page: this.page.pageSize
        }
      }).then((res) => {
        this.loading = false
        this.list = res.data.results
        this.page.total = res.data.total_count
      })
    },
    putComment (row) {
      this.loading = true
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
            this.loading = false
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.getList()
          })
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
