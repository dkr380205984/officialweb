<template>
  <div id="index">
    <div v-if="$route.name==='首页' ||$route.name==='关于我们'||$route.name==='产品简介'"
      class="header"
      :class="{'bgHome':$route.name==='首页' , 'bgUs':$route.name==='关于我们', 'bgPro':$route.name==='产品简介'}">
      <div class="navCtn">
        <div class="leftCtn">
          <i class="logo">
            <img :src="require('../assets/image/logo.png')" />
          </i>
          <span class="name">织慧科技</span>
        </div>
        <div class="rightCtn">
          <span class="nav"
            :class="{'active':$route.name==='首页','unactive':$route.name!=='首页'}"
            @click="$router.push('/index/home')">首页</span>
          <span class="nav"
            :class="{'active':$route.name==='产品简介','unactive':$route.name!=='产品简介'}"
            @click="$router.push('/index/product')">产品简介</span>
          <span class="nav"
            :class="{'active':$route.name==='关于我们','unactive':$route.name!=='关于我们'}"
            @click="$router.push('/index/aboutUs')">关于我们</span>
          <span class="nav"
            :class="{'active':$route.name==='homePage','unactive':$route.name!=='homePage'}"
            @click="$router.push('/systemStore/homePage')">织慧商城</span>
          <span class="nav button"
            @click="$router.push('/index/product')">获取产品演示</span>
        </div>
      </div>
      <div class="otherInfo">
        <template v-if="$route.name==='首页'">
          <div class="container">
            <div class="bigText">协同织造</div>
            <div class="contentText">织为云—协同织造云平台是一款为传统针纺企业提供数字化、智能化解决方案的工业互联网系统</div>
            <div class="buttonCtn">
              <a class="bt bt1"
                href="#write">免费试用</a>
              <div class="bt bt2"
                @click="$router.push('/index/product')">查看产品详情</div>
            </div>
          </div>
        </template>
        <template v-if="$route.name==='产品简介'">
          <div class="container">
            <div class="bigText font65">织为云协同制造平台</div>
            <div class="contentText font38">解决制造难题痛点</div>
            <div class="flexCtn">
              <div class="once">
                <img :src="require('../assets/image/产品概览——icon-1@2x.png')" />
                <div class="text">
                  <span>工厂数据不透明</span>
                  <span>部门间沟通效率低下</span>
                </div>
              </div>
              <div class="once">
                <img :src="require('../assets/image/产品概览——icon-2@2x.png')" />
                <div class="text">
                  <span>物料使用情况不明确</span>
                  <span>物料积压浪费严重</span>
                </div>
              </div>
              <div class="once">
                <img :src="require('../assets/image/产品概览——icon-3@2x.png')" />
                <div class="text">
                  <span>生产数据更新不及时</span>
                  <span>订单无法按时按质交期</span>
                </div>
              </div>
              <div class="once">
                <img :src="require('../assets/image/产品概览——icon-4@2x.png')" />
                <div class="text">
                  <span>手写工单繁多难整理</span>
                  <span>订单数据无法追溯</span>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-if="$route.name==='关于我们'">
          <div class="container">
            <div class="bigText font68">公司简介</div>
            <div class="contentText font24">杭州织慧科技有限公司（简称织慧科技），位于杭州桐庐县。目前公司致力于中小型企业数字化软件的研究与开发。公司以纺织工业业务为起点，运用工业互联网、云计算、小程序、大数据分析等技术为企业数字化、智能化管理提供一站式解决方案。公司以实现行业区域性的协同智能制造为目标，不断提升公司的研发水平和业务能力，深耕传统产业的数字化改造，以扩大公司在行业的品牌影响力。公司拥有多项软件著作专利，在2020年被入选为杭州市第二批数字工程服务机构。旗下的织为云—协同织造云平台是一款为传统针纺企业提供数字化、智能化解决方案的SAAS系统。</div>
          </div>
        </template>
      </div>
    </div>
    <div class="body">
      <router-view />
    </div>
    <div class="bottomInfo"
      v-if="$route.name==='首页' ||$route.name==='关于我们'||$route.name==='产品简介'">
      <div class="canvas">
        <canvas ref="canvas"
          width="100%"
          height="150"></canvas>
      </div>
      <div class="content">
        <div class="middle">
          <div class="leftCtn">
            <div class="title">联系我们</div>
            <div class="line">
              <i class="el-icon-message"></i>
              <span>Zhoukai992@gmail.com</span>
            </div>
            <div class="line">
              <i class="el-icon-phone-outline"></i>
              <span>150-6871-5652</span>
            </div>
            <div class="line">
              <i class="el-icon-position"></i>
              <span>杭州市桐庐县桐庐科技孵化园B座3楼</span>
            </div>
          </div>
          <div class="middleLine"></div>
          <div class="rightCtn">
            <div class="once">
              <div class="title">织慧科技</div>
              <div class="title">官方微信小程序</div>
              <img :src="require('../assets/image/二维码.png')" />
            </div>
            <div class="once">
              <div class="title">织慧科技</div>
              <div class="title">官方公众号</div>
              <img :src="require('../assets/image/公众号.jpg')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      canvas: '',
      ctx: '',
      boHeight: '',
      posHeight: '',
      step: 0,
      lines: ['rgba(116,177,255,1)', 'rgba(116,177,255,0.8)', 'rgba(116,177,255,0.6)']
    }
  },
  mounted () {
    this.canvas = this.$refs.canvas
    this.ctx = this.canvas.getContext('2d')
    this.$refs.canvas.width = this.$refs.canvas.parentNode.offsetWidth
    this.$refs.canvas.height = 150
    window.requestAnimFrame = (function () {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60)
        }
    })()
    this.boHeight = this.$refs.canvas.height / 2.4
    this.posHeight = this.$refs.canvas.height / 1.2
    window.addEventListener('resize', () => {
      this.$refs.canvas.width = this.$refs.canvas.parentNode.offsetWidth
    })
    this.loop()
  },
  methods: {
    loop (flag) {
      this.ctx.save()

      this.ctx.clearRect(0, 0, this.canvas.width, 150)
      this.step++
      for (var j = this.lines.length - 1; j >= 0; j--) {
        this.ctx.fillStyle = this.lines[j]
        var angle = (this.step + j * 450) * Math.PI / 180
        var deltaHeight = Math.sin(angle) * this.boHeight
        var deltaHeightRight = Math.cos(angle) * this.boHeight
        this.ctx.beginPath()
        this.ctx.moveTo(0, this.posHeight + deltaHeight)
        this.ctx.bezierCurveTo(this.canvas.width / 2, this.posHeight + deltaHeight - this.boHeight, this.canvas.width / 2, this.posHeight + deltaHeightRight - this.boHeight, this.canvas.width, this.posHeight + deltaHeightRight)
        this.ctx.lineTo(this.canvas.width, this.canvas.height)
        this.ctx.lineTo(0, this.canvas.height)
        this.ctx.lineTo(0, this.posHeight + deltaHeight)
        this.ctx.closePath()
        this.ctx.fill()
      }

      this.ctx.restore()
      window.requestAnimFrame(this.loop)
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/less/index.less";
</style>
