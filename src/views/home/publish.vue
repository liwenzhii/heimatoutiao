<template>
  <div>
      <el-card>
          <common slot="header">
              <template slot="title">发布文章</template>
          </common>
          <el-form style="margin-left: 30px">
            <el-form-item label="标题">
                <el-input style="width: 35%" placeholder="输入名称"></el-input>
            </el-form-item>
            <el-form-item label="内容">
                <el-input type="textarea" style="width: 60%" :rows="5"></el-input>
            </el-form-item>
            <el-form-item label="封面">
                 <el-radio-group v-model="radio">
                    <el-radio :label="3">备选项</el-radio>
                    <el-radio :label="6">备选项</el-radio>
                    <el-radio :label="9">备选项</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="频道">
                <el-select v-model="value">
                    <el-option :value = 'item.id' :label="item.name" v-for="item in channelList" :key="item.id" ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary">发表</el-button>
                <el-button>存入草稿</el-button>
            </el-form-item>
        </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: 3,
      value: '',
      channelList: []
    }
  },
  methods: {
    getchannel () {
      this.$http({
        url: '/channels'
      }).then((res) => {
        this.channelList = res.data.channels
      })
    }
  },
  created () {
    this.getchannel()
  }
}
</script>

<style>

</style>
