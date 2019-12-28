<template>
  <div>
    <el-row type="flex" justify="space-between" style="height: 60px" align="middle">
      <el-col :span="8">
        <span :class="fold ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="foldOrOpen"></span>
        江苏传智播客教育科技股份有限公司
      </el-col>
      <el-col :span="6">
        <el-row type="flex" justify="end" align="middle">
          <div>
            <img :src = "userInfo.photo" class="userPic" />
          </div>
          <el-dropdown @command='handleCommand'>
            <span> {{userInfo.name}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command='personImformation' >个人信息</el-dropdown-item>
              <el-dropdown-item command='address'>Git地址</el-dropdown-item>
              <el-dropdown-item command='quit'>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import eventBus from '../publish/eventBus'
export default {
  data () {
    return {
      fold: false,
      userInfo: {},
      picAddress: require('../../assets/img/F201111281505181366600000.jpg')
    }
  },
  created () {
    this.render()
    eventBus.$on('same', () => {
      this.render()
    })
  },
  methods: {
    foldOrOpen () {
      this.fold = !this.fold
      eventBus.$emit('closeOrOpen')
    },
    render () {
      this.$http({
        url: '/user/profile'

      }).then(res => {
        this.userInfo = res.data
      })
    },
    handleCommand (command) {
      if (command === 'address') {
        window.location.href = 'https://github.com/liwenzhii/heimatoutiao.git'
      } else if (command === 'quit') {
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      } else if (command === 'personImformation') {
        this.$router.push('/home/account')
      }
    }
  }
}
</script>

<style >
.picWrod {
  margin-right: 10px;
  font-size: 20px;
}
.userPic {
  height: 40px;
  width: 40px;
  border-radius: 7px;
  margin-right: 10px;
}
</style>
