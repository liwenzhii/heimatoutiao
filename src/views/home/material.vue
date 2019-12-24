<template>
  <div>
    <el-card v-loading = 'loading'>
        <el-row type="flex" justify="end" >
            <el-upload action :show-file-list = 'false' :http-request = 'updateImg'>
                <el-button  type="primary" style="margin-right: 20px">点击上传</el-button>
            </el-upload>
        </el-row>
      <common slot="header">
        <template slot="title">素材管理</template>
      </common>
      <el-tabs v-model="activeName" @tab-click="handleClick" style="margin-left: 20px">
        <el-tab-pane label="全部素材" name="all">
          <div class="picAllBox">
            <el-card v-for="item in list" :key="item.id" class="picCard">
              <div class="picContainer">
                <img :src="item.url" class="updataImg" />
              </div>
              <el-row class="smIcon">
                <i class="wordIcon el-icon-star-on" style=""></i>
                <i class="wordIcon el-icon-delete-solid"></i>
              </el-row>
            </el-card>
          </div>
          <el-row type="flex" justify="center" style="height: 80px" align="middle">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="page.total"
              :page-size="page.pageSize"
              :current-page="page.currentPage"
              @current-change="changePage"
            ></el-pagination>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="收藏素材" name="collect">
            <div class="picAllBox">
            <el-card v-for="item in list" :key="item.id" class="picCard">
              <div class="picContainer">
                <img :src="item.url" class="updataImg" />
              </div>
            </el-card>
          </div>
          <el-row type="flex" justify="center" style="height: 80px" align="middle">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="page.total"
              :page-size="page.pageSize"
              :current-page="page.currentPage"
              @current-change="changePage"
            ></el-pagination>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollect: '',
      loading: false,
      activeName: 'all',
      list: [],
      page: {
        total: 0,
        pageSize: 8,
        currentPage: 1
      }
    }
  },
  methods: {
    updateImg (params) {
      this.loading = true
      let updatePic = params.file
      let formdt = new FormData()
      formdt.append('image', updatePic)
      this.$http({
        url: '/user/images',
        method: 'post',
        data: formdt
      }).then((res) => {
        this.loading = false
        this.gitAllPic()
        console.log(res)
      })
    },
    handleClick () {
      this.loading = true
      this.page.currentPage = 1
      this.gitAllPic()
    },
    changePage (newPage) {
      this.loading = true
      this.page.currentPage = newPage
      this.gitAllPic()
    },
    gitAllPic () {
      this.loading = true
      this.$http({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect',
          page: this.page.currentPage,
          per_page: this.page.pageSize
        }
      }).then(res => {
        setTimeout(() => {
          this.loading = false
        }, 120)
        this.list = res.data.results
        this.page.total = res.data.total_count
        this.isCollect = res.data.is_collect
        console.log(this.isCollect)
      })
    }
  },
  created () {
    this.gitAllPic()
  }
}
</script>

<style scoped>
.el-card__body {
  padding: 0;
}
.picAllBox {
  display: flex;
  flex-wrap: wrap;
}
.picCard {
  width: 220px;
  border-radius: 8px 8px 5px 5px;
  margin: 20px 40px;
}
.picContainer {
  width: 100%;
  height: 220px;
}
.updataImg {
  width: 100%;
  height: 100%;
}
.smIcon {
  height: 35px;
  background-color: #f3f4f5;
  border-radius: 0 0 5px 5px;
  font-size: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.wordIcon {
  cursor: pointer;

}
</style>
