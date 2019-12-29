<template>
  <el-card>
      <common slot="header">
          <template slot="title">账户信息</template>
      </common>
      <el-upload class="accountPic" action="22" :show-file-list='false' :http-request = 'uploading'>
          <img :src="formData.photo" alt="" class="xixi">
      </el-upload>
      <el-form style="margin-left: 80px; margin-top: 50px;
      width: 35%; text-align: right"
      :model="formData" :rules="rules" ref= 'myForm'>
          <el-form-item label="用户名" prop="name">
              <el-input v-model="formData.name" style="width: 80%;"></el-input>
          </el-form-item>
          <el-form-item label="简介" prop="intro">
              <el-input v-model="formData.intro" style="width: 80%; "></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
              <el-input v-model="formData.email" style="width: 80%; "></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="mobile">
              <el-input disabled v-model="formData.mobile" style="width: 80%; "></el-input>
          </el-form-item>
          <el-form-item label="" style="margin-right: 80%">
              <el-button @click="checkoutForm">保存信息</el-button>
          </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
import eventBus from '../../components/publish/eventBus'
export default {
  data () {
    return {
      formData: {
        name: '',
        intro: '',
        photo: '',
        email: '',
        mobile: ''
      },
      rules: {
        name: [{ required: true, message: '用户名不能为空' }, { min: 3, max: 8, message: '用户名3-8字' }],
        intro: [{ required: true, message: '简介不能为空' }, { min: 3, max: 200, message: '用户名3-200字' }],
        email: [{ required: true, message: '邮箱不能为空' }, { pattern: /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
          message: '邮箱格式不正确' }]
      }
    }
  },
  methods: {
    async uploading (params) {
      let file = params.file
      let formdt = new FormData()
      formdt.append('photo', file)
      await this.$http({
        url: '/user/photo',
        method: 'patch',
        data: formdt
      })
      this.$message({
        message: '上传头像成功',
        type: 'success'
      })
      eventBus.$emit('same')
      this.getPersonage()
    },
    async getPersonage () {
      let res = await this.$http({
        url: '/user/profile'
      })
      this.formData = res.data
    },
    checkoutForm () {
      this.$refs.myForm.validate(async (isOk) => {
        if (isOk) {
          await this.$http({
            url: '/user/profile',
            method: 'patch',
            data: this.formData
          })
          this.$message({
            message: '保存成功',
            type: 'success'
          })
          eventBus.$emit('same')
        }
      })
    }
  },
  mounted () {
    this.getPersonage()
  }

}
</script>

<style>
     .accountPic {
         height: 220px;
         width: 220px;
         border-radius: 15px;
         overflow: hidden;
         position: absolute;
         right: 200px;
         top: 180px
    }
    .xixi {
        width: 100%;
        height: 100%
    }
</style>
