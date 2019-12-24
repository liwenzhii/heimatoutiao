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
          <el-radio-group v-model="formDate.status">
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
          <el-select v-model="formDate.channel_id">
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
        <div class="sectHeader">共找到62289条符合条件的内容</div>
    </el-row>
    <el-row type="flex" justify="space-between">
        <el-col :span="12">
            <el-row type="flex" align="middle">
            <img src="../../assets/img/hh.png" class = "updateImages">
            <span style="display: inline-block; margin-left: 15px">
                <div  class="comment">hdhdh回电话电话</div>
                <el-tag>已发表</el-tag>
                <div class="comment">2019-12-12  16:16:16</div>
            </span>

            </el-row>
        </el-col>
        <el-col :span="4">
            <el-row type="flex" justify="end">
                <span class='putIcon'><i class="el-icon-edit"></i>
                    修改</span>
                <span class='deleteIcon'><i class="el-icon-delete"></i>
                    删除</span>
            </el-row>
        </el-col>
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
      list: []
    }
  },
  methods: {
    getChannels () {
      this.$http({
        url: '/channels'
      }).then((res) => {
        this.list = res.data.channels
        console.log(res)
      })
    }
  },
  created () {
    this.getChannels()
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
        margin-right: 15px
    }
    .deleteIcon {
        margin-top: 15px;
        font-size: 14px;
    }
</style>
