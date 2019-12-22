<template>
  <el-card>
      <common slot="header">
          <template slot="title">素材管理</template>
      </common>
      <el-tabs  type="card" v-model="activeName" @tab-click="changeTab">
          <el-tab-pane label="全部素材"  name="all">
              <!-- 放全部素材 -->
              <div class="uaerAllPic">
                  <el-card v-for="item in list" :key = 'item.id' class="userPicture" >
                      <div class="imgPicBox">
                      <img :src="item.url" alt="" class="imgPic" >

                      </div>
                      <div class="icon">
                          <i class="el-icon-star-on"></i>
                          <i class="el-icon-delete-solid"></i>
                      </div>
                  </el-card>
              </div>
          </el-tab-pane>
          <el-tab-pane label="收藏素材"  name="collect">
              <!-- 放收藏素材 -->
              <div class="uaerAllPic">
                  <el-card v-for="item in list" :key = 'item.id' class="userPicture" >
                      <div class="imgPicBox">
                      <img :src="item.url" alt="" class="imgPic" >

                      </div>

                  </el-card>
              </div>
          </el-tab-pane>
      </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: []
    }
  },
  methods: {
    changeTab () {
      this.getPic()
    },
    getPic () {
      this.$http({
        url: 'user/images',
        params: {
          collect: this.activeName === 'collect'
        }
      }).then((res) => {
        this.list = res.data.results
        console.log(this.list)
      })
    }
  },
  created () {
    this.getPic()
  }
}
</script>

<style>
    .uaerAllPic {
        display: flex;
        flex-wrap: wrap
    }
     .userPicture{
         width: 230px;
        padding: 0;
         margin: 25px 35px;

     }
     .imgPicBox {
        width: 190px;
        height: 190px;
        border-radius: 8px;
        overflow: hidden;
     }
    .imgPic{
       width: 100%;
       height: 100%;

    }
    .icon  {
        width: 230px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 15px;
        font-size: 18px;
        background-color: #f4f5f6;
        height: 45px;
        line-height: 45px;
        margin-bottom: -20px;
        margin-left: -20px

    }
</style>
