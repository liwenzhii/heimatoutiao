<template>
<div class="coverPicContainer">
  <div v-for="(item, index) in imageList"  :key="index"  class="coverPic">
    <div style="text-align: center; margin-top: 15px">点击上传图片</div>
      <img src="./../../assets/img/pic_bg.png" alt="" class="imgs">
  </div>
</div>

</template>

<script>
export default {

  props: ['imageList']

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
    }
    .imgs {
        width: 200px;
        height: 200px;
        vertical-align: middle;

    }
</style>
