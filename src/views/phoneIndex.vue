<template>
  <div id="phoneIndex">
    <div class="phoneHead"
      :class="{'show':showNav}">
      <div class="showHead">
        <div class="iconCtn">
          <i :class="{'el-icon-s-unfold':!showNav,'el-icon-s-fold':showNav}"
            @click="showNav=!showNav"></i>
        </div>
        <div class="title">
          <img class="logo"
            :src="require('../assets/image/logoP.png')" />
          <span>织慧科技</span>
        </div>
        <div class="btn"
          @click="$router.push('/index/phone/phoneProduct')">获取产品演示</div>
      </div>
      <div class="hiddenHead">
        <div class="btn"
          @click="$router.push('/index/phone/phoneHome')">
          <span>首页</span>
        </div>
        <div class="btn"
          @click="$router.push('/index/phone/phoneAboutUs')">
          <span>公司简介</span>
        </div>
        <div class="btn"
          @click="$router.push('/index/phone/phoneProduct')">
          <span>产品概述</span>
        </div>
      </div>
    </div>
    <div class="phoneBody">
      <router-view />
    </div>
    <div class="bottomInfo">
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
              <span>0671-5546-8857</span>
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
              <div class="title">官方微信小程序</div>
              <img :src="require('../assets/image/二维码.png')" />
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
      lines: ['rgba(116,177,255,1)', 'rgba(116,177,255,0.8)', 'rgba(116,177,255,0.6)'],
      showNav: false
    }
  },
  mounted () {
    document.documentElement.style.fontSize = ((document.documentElement.clientWidth || window.innerWidth) / 54) + 'px'
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
    this.boHeight = this.$refs.canvas.height / 6
    this.posHeight = this.$refs.canvas.height / 1.4
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
@import "~@/assets/less/phoneIndex.less";
</style>
