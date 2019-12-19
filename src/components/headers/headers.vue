<template>
  <div>
    <el-row type="flex" justify="space-between" style="height: 60px" align="middle">
      <el-col :span="8">
        <span class="el-icon-s-fold picWrod"></span>
        江苏传智播客教育科技股份有限公司
      </el-col>
      <el-col :span="6">
        <el-row type="flex" justify="end" align="middle">
          <div>
            <img src="../../assets/img/F201111281505181366600000.jpg" class="userPic" />
          </div>
          <el-dropdown >

            <span> 艾因斯坦
            <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item >个人信息</el-dropdown-item>
              <el-dropdown-item >Git地址</el-dropdown-item>
              <el-dropdown-item >退出</el-dropdown-item>

            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    getFormation () {
      alert('niaho')
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
