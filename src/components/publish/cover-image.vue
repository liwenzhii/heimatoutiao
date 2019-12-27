<template>
<div class="coverPicContainer">
  <div v-for="(item, index) in imageList"  :key="index"  class="coverPic" @click="sunNum(index)">
      <img :src="item ? item : defaultImg" class="imgs" @click="isShow">
        <el-dialog :visible = 'isVisible' :before-close="handleClose">
            <select-image @returnData="reception(index)"></select-image>
        </el-dialog>
  </div>
</div>

</template>

<script>
export default {

  props: ['imageList'],
  data () {
    return {

      defaultImg: require('../../assets/img/pic_bg.png'),
      isVisible: false,
      coverIndex: null
    }
  },
  methods: {
    sunNum (index) {
      this.coverIndex = index
    },
    reception (params, index) {
      console.log(params, index)
      this.$emit('returnParams', params, this.coverIndex)
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
