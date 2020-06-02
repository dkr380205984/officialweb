<template>
  <div id="aboutUs"
    class="main">
    <div class="module1">
      <div class="top">相关证书</div>
      <div class="bottom">
        <el-carousel :interval="5000"
          height="470px"
          type="card">
          <el-carousel-item v-for="(item,index) in picArr"
            :key="index">
            <img class="rotateImg"
              :src="item" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      picArr: [require('../assets/image/证书1.jpg'), require('../assets/image/证书2.jpg'), require('../assets/image/证书3.jpg')]
    }
  },
  created () {
    const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    if (flag) {
      this.$router.push('/index/phone/phoneAboutUs')
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/less/aboutUs.less";
@import "~@/assets/less/animation.less";
</style>
