<template>
  <div class="bgc">
    <el-card class="carbox">
        <div style="text-align: center">
            <img src="../../assets/img/logo_index.png" alt="" id="picLogo">
        </div>
        <el-form :model="formData" :rules="loginRule" ref="myForm">
            <el-form-item prop="phone">
                <el-input v-model="formData.phone" placeholder="请输入手机号" style="margin-top: 10px"></el-input>
            </el-form-item>
             <el-form-item prop="code">
                <el-input v-model='formData.code' placeholder="请输入验证码" style="width: 65%" id="Vcode" ></el-input>
                <el-button type='info' style="float: right">获取验证码</el-button>
            </el-form-item>
            <el-form-item prop="check">
                <el-checkbox v-model="formData.check">是否同意我侵犯你的权益</el-checkbox>
            </el-form-item>
             <el-form-item>
                <el-button type='info' style="width: 100%" @click="submitKey">登陆</el-button>
            </el-form-item>
        </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        phone: '',
        code: '',
        check: false
      },
      loginRule: {
        phone: [{ required: true, message: '请输入手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '输入格式不正确' }],
        code: [{ required: true, message: '请输入验证码' }, {
          pattern: /^\d{6}$/, message: '验证码错误'
        }],
        check: [{ validator: function (rule, value, callback) {
          if (value) {
            callback()
          } else {
            callback(new Error('请确认你的选择'))
          }
        } }]
      }
    }
  },
  methods: {
    submitKey () {
      this.$refs.myForm.validate(function (isOk) {
        if (isOk) {
          console.log(isOk)
        }
      })
    }
  }
}
</script>

<style lang='less' scope>
.bgc {
  height: 100vh;
  background:  url("../../assets/img/F201111281505181366600000.jpg");
  background-size: contain;
  opacity: 0.7;
}
.carbox {
    width: 470px;
    height: 320px;
    position: relative;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%)
}
#picLogo {
    width: 180px;
}

</style>
