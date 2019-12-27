<template>
<div class="coverPicContainer">
  <div v-for="(item, index) in imageList"  :key="index"  class="coverPic" @click="sunNum(index)">
      <img :src="item ? item : defaultImg" class="imgs" @click="isShow">
  </div>
        <el-dialog :visible = 'isVisible' :before-close="handleClose">
            <select-image @returnData="reception"></select-image>
        </el-dialog>
</div>

</template>

<script>
export default {

  props: ['imageList'],
  data () {
    return {

      defaultImg: require('../../assets/img/pic_bg.png'),
      isVisible: false,
      coverIndex: -1
    }
  },
  methods: {
    sunNum (index) {
      // alert('444')
      this.coverIndex = index
    },
    reception (params) {
      // console.log(params, index)
      this.$emit('returnParams', params, this.coverIndex)
      this.handleClose()
    },
    isShow () {
      this.isVisible = true
    },
    handleClose (done) {
      this.isVisible = false
    }

  }
}
</script>

<style scoped  lang = 'less'>
    .coverPicContainer {
         /* display: flex; */
        display: inline-block;
        border: 1px solid rgb(173, 168, 168);
        margin-left: 50px
    }
    .coverPic {
        float: left;
        margin: 10px
    }
    .imgs {
        width: 200px;
        height: 200px;
        vertical-align: middle;

    }
</style>
