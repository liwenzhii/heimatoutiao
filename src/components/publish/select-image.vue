<template>
   <el-tabs v-model="material" >
        <el-tab-pane label="素材库" name="material">
            <!-- 发送请求获取素材 -->
            <div class="cardContainer">
                <el-card v-for="item in list" :key="item.id" class="imagesContainer">
                    <img :src="item.url ? item.url : defaultImg"  class="materialImg" @click="sendPic(item.url)">
                </el-card>
            </div>
             <el-row justify="center" type="flex" align="middle" style="height: 80px">
        <el-pagination
            background
            layout="prev, pager, next"
            :total= 'page.total'
            :page-size="page.pageSize"
            :current-page="page.currentPage"
            @current-change = 'changePage'>
        </el-pagination>
        </el-row>
        </el-tab-pane>
        <el-tab-pane label="上传图片" name="uploadImg">
            <el-upload class="addContainer" action="ff"
            :show-file-list = 'false' :http-request = 'uploadImg'>
                <i class="el-icon-plus addEle"></i>
            </el-upload>
        </el-tab-pane>

    </el-tabs>
</template>

<script>
export default {
  data () {
    return {
      material: 'material',
      list: [],
      defaultImg: require('../../assets/img/hh.png'),
      page: {
        total: 0,
        pageSize: 8,
        currentPage: 1
      }
    }
  },
  methods: {
    sendPic (url) {
      this.$emit('returnData', url)
    },
    uploadImg (params) {
      let file = params.file
      let formdt = new FormData()
      formdt.append('image', file)
      this.$http({
        url: '/user/images',
        method: 'post',
        data: formdt
      }).then((res) => {
        this.$emit('returnData', res.data.url)
      })
    },
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getUserPic()
    },
    getUserPic () {
      this.$http({
        url: '/user/images',
        params: {
          collect: false,
          page: this.page.currentPage,
          per_page: this.page.pageSize
        }
      }).then((res) => {
        this.list = res.data.results
        this.page.total = res.data.total_count
      })
    }
  },
  created () {
    this.getUserPic()
  }
}
</script>

<style>
    .cardContainer {
        display: flex;
        flex-wrap: wrap
    }
    .imagesContainer {
        width: 180px;
        height: 200px;
        margin: 20px 10px;
    }
    .materialImg {
        width: 100%;
        height: 100%
    }
    .addContainer {
        height: 400px;
        line-height: 400px;
        text-align: center;
    }
    .addEle {
        font-size: 100px;
        color: #ccc
    }
</style>
