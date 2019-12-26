<template>
  <div>
      <el-card>
          <common slot="header">
              <template slot="title">发布文章</template>
          </common>
          <el-form style="margin-left: 30px" :model="formData" :rules="rules" ref="all">
            <el-form-item label="标题" prop="title">
                <el-input  v-model="formData.title" style="width: 35%" placeholder="输入名称"></el-input>
            </el-form-item>
            <el-form-item label="内容" prop="content" style="margin-top: 50px">
                <quill-editor  v-model="formData.content" style="width: 80%; margin-left: 52px;"></quill-editor>
            </el-form-item>
            <el-form-item label="封面" prop="type">
                 <el-radio-group v-model="formData.cover.type">
                    <el-radio :label="1">单图</el-radio>
                    <el-radio :label="3">三图</el-radio>
                    <el-radio :label="0">无图</el-radio>
                    <el-radio :label="-1">自动</el-radio>
                </el-radio-group>
            </el-form-item>
            <cover-image :imageList = 'formData.cover.images'></cover-image>
            <el-form-item label="频道" prop="channel_id" class="channels" >
                <el-select v-model="formData.channel_id">
                    <el-option :value = 'item.id' :label="item.name" v-for="item in channelList" :key="item.id" ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item  style="margin-left: 50px; margin-top: 30px">
                <el-button type="primary" @click="checkout()">发表</el-button>
                <el-button @click="checkout(true)">存入草稿</el-button>
            </el-form-item>
        </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      channelList: [],
      formData: {
        title: '',
        content: '',
        channel_id: '',
        cover: {
          type: 0,
          images: []
        }
      },
      rules: {
        title: [{ required: true, message: '标题不能为空' },
          { min: 5, max: 20, message: '标题字符为5-20' }],
        content: [{ required: true, message: '内容不能为空' },
          { min: 5, max: 500, message: '内容字符为5-500' }],
        channel_id: [{ required: true, message: '频道不能为空' }]
      }
    }
  },

  methods: {
    articleFormation (id) {
      this.$http({
        url: `/articles/${id}`
      }).then((res) => {
        console.log(res)
        this.formData = res.data
      })
    },
    issue (draft, id) {
      this.$http({
        url: id ? `/articles/${id}` : '/articles',
        method: id ? 'put' : 'post',
        params: { draft },
        data: this.formData
      }).then(() => {
        this.$router.push('/home/articles')
      })
    },
    checkout (draft) {
      this.$refs.all.validate(isOk => {
        if (isOk) {
          let { id } = this.$route.params
          this.issue(draft, id)
        }
      })
    },
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
    let { id } = this.$route.params
    id && this.articleFormation(id)
  },
  watch: {
    $route: function (to, form) {
      if (Object.keys(to.params).length) {
        // 修改页面
      } else {
        // 发布页面
        this.formData = {
          title: '',
          content: '',
          channel_id: '',
          cover: {
            type: 0,
            images: []
          }
        }
      }
    },
    'formData.cover.type': function () {
      console.log(this.formData.cover.type)
      if (this.formData.cover.type === 0 || this.formData.cover.type === -1) {
        this.formData.cover.images = []
      } else if (this.formData.cover.type === 1) {
        this.formData.cover.images = ['']
      } else if (this.formData.cover.type === 3) {
        this.formData.cover.images = ['', '', '']
      }
    }
  }

}
</script>

<style>

.ql-editor {
  height: 300px
}
.channels {
  margin-top: 30px;
  border-bottom: 1px solid rgb(241, 220, 220);
  padding-bottom: 20px
}
</style>
