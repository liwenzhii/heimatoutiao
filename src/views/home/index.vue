<template>
  <el-container>
      <el-aside style="width: 230px">
          <slidebar></slidebar>
      </el-aside>
      <el-container>
          <el-header >
              <headers></headers>
          </el-header>
          <el-main >这是主题</el-main>
      </el-container>
  </el-container>
</template>

<script>
import slidebar from '../../components/silebar/slide/index'
import headers from '../../components/headers/headers'
export default {
  components: {
    slidebar,
    headers
  }
}
</script>

<style>

</style>
