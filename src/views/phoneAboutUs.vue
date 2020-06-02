<template>
  <div id="phoneAboutUs">
    <div class="container">
      <div class="bigText">公司简介</div>
      <div class="contentText">织为云—协同织造云平台是一款为传统针纺企业提供数字化、智能化解决方案的工业互联网系统，隶属于杭州织慧科技有限公司（简称织慧科技），位于杭州桐庐县。目前公司致力于中小型企业数字化软件的研究与开发。公司以纺织工业业务为起点，运用工业互联网、云计算、小程序、大数据分析等技术为企业数字化、智能化管理提供一站式解决方案。公司以实现行业区域性的协同智能制造为目标，不断提升公司的研发水平和业务能力，深耕传统产业的数字化改造，以扩大公司在行业的品牌影响力。</div>
    </div>
    <div class="module1">
      <div class="top">相关证书</div>
      <div class="bottom">
        <el-carousel :interval="5000"
          indicator-position="none"
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
    if (!flag) {
      this.$router.push('/index/aboutUs')
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/less/phoneAboutUs.less";
</style>
