<template>
  <div>
    <el-card>
      <common slot="header">
        <template slot="title">内容列表</template>
      </common>
      <el-row style="border-bottom: 1px dashed black; height: 50px;" type="flex" align="middle">全部图文</el-row>
      <el-row type="flex" style="height: 60px" align="middle">
        <el-col :span="2">
          <span>文章状态</span>
        </el-col>
        <el-col :span="10">
          <el-radio-group v-model="formDate.status" @change="searchArticle">
            <el-radio :label="5">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>
      <el-row type="flex" align="middle" style="height: 80px">
        <el-col :span="2">频道列表</el-col>
        <el-col :span="5">
          <el-select v-model="formDate.channel_id" @change="searchArticle">
            <el-option v-for="item in list"
            :key="item.id"
            :label="item.name"
            :value="item.id"></el-option>
          </el-select>
        </el-col>
      </el-row>
    <el-row type="flex" align="middle">
        <el-col :span="2">时间选择</el-col>
        <el-col :span="8">
             <el-date-picker
                 @change="searchArticle"
                value-format='yyyy-MM-dd'
                v-model="formDate.dataRange"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
               >
            </el-date-picker>
        </el-col>
    </el-row>
    <el-row>
        <div class="sectHeader">共找到{{page.total}}条符合条件的内容</div>
    </el-row>
    <el-row v-for="item in articleList" :key="item.id.toString()" type="flex" justify="space-between" style="padding: 20px 0; border-bottom: 1px dashed #ccc">
        <el-col :span="12">
            <el-row type="flex" align="middle">
            <img :src="item.cover.images.length ? item.cover.images[0] : defaultImg" class = "updateImages">
            <span style="display: inline-block; margin-left: 15px">
                <div  class="comment">{{item.title}}</div>
                <el-tag :type="item.status | filterType">{{item.status | filterNum}}</el-tag>
                <div class="comment">{{item.pubdate}}</div>
            </span>

            </el-row>
        </el-col>
        <el-col :span="4">
            <el-row type="flex" justify="end" >
                <span class='putIcon'  @click="putArticle"><i class="el-icon-edit"></i>
                    修改</span>
                <span class='deleteIcon' @click = 'deleteArticle(item.id)'><i class="el-icon-delete" ></i>
                    删除</span>
            </el-row>
        </el-col>
    </el-row>
    <el-row type="flex" style="height: 80px" justify="center" align="middle">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="page.total"
        :page-size='page.pageSize'
        :current-page='page.currentPage'
        @current-change = 'changePage'
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
      formDate: {
        status: 5,
        channel_id: null,
        dataRange: []
      },
      list: [],
      articleList: [],
      defaultImg: require('../../assets/img/hh.png'),
      page: {
        total: 0,
        pageSize: 10,
        currentPage: 1
      }
    }
  },
  methods: {
    putArticle () {
      this.$router.push('/home/publish')
    },
    deleteArticle (id) {
      console.log(id.toString())
      // debugger

      this.$confirm('你去定要删除吗？').then(() => {
        this.$http({
          method: 'delete',
          url: `/articles/${id.toString()}`
        }).then((res) => {
          console.log(res)
          this.$message({
            message: '删除成功',
            type: 'success'

          })
          this.getSearchArticle()
        }).catch(() => {

        })
      })
    },
    getChannels () {
      this.$http({
        url: '/channels'
      }).then((res) => {
        this.list = res.data.channels
      })
    },
    getArticle (params) {
      this.$http({
        url: '/articles',
        params
      }).then((res) => {
        this.articleList = res.data.results
        this.page.total = res.data.total_count
        console.log(this.articleList)
      })
    },
    searchArticle () {
      this.page.currentPage = 1
      this.getSearchArticle()
    },
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getSearchArticle()
    },
    getSearchArticle () {
      let params = {
        page: this.page.currentPage,
        per_page: this.formDate.pageSize,
        status: this.formDate.status === 5 ? null : this.formDate.status,
        channel_id: this.formDate.channel_id,
        begin_pubdate: this.formDate.dataRange.length ? this.formDate.dataRange[0] : null,
        end_pubdate: this.formDate.dataRange.length > 1 ? this.formDate.dataRange[1] : null
      }
      this.getArticle(params)
    }
  },
  filters: {
    filterNum (value) {
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核失败'
        default:
          break
      }
    },
    filterType (value) {
      switch (value) {
        case 0:
          return 'info'
        case 1:
          return 'danger'
        case 2:
          return ''
        case 3:
          return 'warning'
        default:
          break
      }
    }
  },
  created () {
    this.getChannels()
    this.getArticle()
  }
}
</script>

<style scoped>
    .sectHeader {
        height: 60px;
        line-height: 60px;
        border-bottom: 1px dashed #666;
        margin-top: 50px
    }
    .updateImages {
        width: 170px;
        height: 130px;
        border-radius: 7px;
    }
    .comment {
        margin: 15px 0;
    }
    .putIcon {
        margin-top: 15px;
        font-size: 14px;
        margin-right: 15px;
        cursor: pointer;
    }
    .deleteIcon {
        margin-top: 15px;
        font-size: 14px;
        cursor: pointer;
    }
</style>
