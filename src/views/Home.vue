<template>
  <div id="home"
    class="main">
    <div class="module1">
      <div class="leftCtn">
        <transition name="slide-fade-left">
          <img v-show="animation"
            :src="require('../assets/image/公司简介图@2x.png')" />
        </transition>
      </div>
      <div class="rightCtn">
        <transition name="slide-fade-right">
          <div class="top"
            v-show="animation">
            <span class="line1">公司简介</span>
            <span class="line2">ABOUT US</span>
            <span class="line3"></span>
          </div>
        </transition>
        <transition name="slide-fade-right">
          <div class="middle"
            v-show="animation">
            <span class="content">织为云—协同织造云平台是一款为传统针纺企业提供数字化、智能化解决方案的工业互联网系统，隶属于杭州织慧科技有限公司（简称织慧科技），位于杭州桐庐县。目前公司致力于中小型企业数字化软件的研究与开发。公司以纺织工业业务为起点，运用工业互联网、云计算、小程序、大数据分析等技术为企业数字化、智能化管理提供一站式解决方案。公司以实现行业区域性的协同智能制造为目标，不断提升公司的研发水平和业务能力，深耕传统产业的数字化改造，以扩大公司在行业的品牌影响力。</span>
          </div>
        </transition>
        <transition name="slide-fade-right">
          <div class="bottom"
            v-show="animation">
            <div class="btn"
              @click="$router.push('/index/aboutUs')">了解更多
              <i class="el-icon-right"></i>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="module2"
      ref="module2">
      <transition name="slide-fade-left">
        <div v-show="animation2"
          class="once blue double">
          <div class="line1">服务内容</div>
          <div class="line2">Service Content</div>
          <div class="line3"></div>
          <div class="line4">
            公司以纺织工业业务为起点，运用工业互联网、云计算、小程序、大数据分析等技术为企业数字化、智能化管理提供一站式解决方案。
          </div>
        </div>
      </transition>
      <transition name="slide-fade-top">
        <div v-show="animation2"
          class="once green">
          <img class="icon"
            :src="require('../assets/image/服务内容-数字化产品库@2x.png')">
          <div class="title">数字化产品库</div>
          <div class="line"></div>
          <div class="text">线上电子编码和线下产品标签结合，建立数字产品库</div>
        </div>
      </transition>
      <transition name="slide-fade-top">
        <div v-show="animation2"
          class="once gray">
          <img class="icon"
            :src="require('../assets/image/服务内容-工艺在线设计@2x.png')">
          <div class="title">电子工艺设计</div>
          <div class="line"></div>
          <div class="text">系统自动计算工艺信息，渲染仿真工艺图，减少产品打样成本</div>
        </div>
      </transition>
      <transition name="slide-fade-top">
        <div v-show="animation2"
          class="once green">
          <img class="icon"
            :src="require('../assets/image/服务内容-生产管理@2x.png')">
          <div class="title">生产管理</div>
          <div class="line"></div>
          <div class="text">在线制定生产计划，快速安排生产任务</div>
        </div>
      </transition>
      <transition name="slide-fade-bottom">
        <div v-show="animation2"
          class="once gray">
          <img class="icon"
            :src="require('../assets/image/服务内容-物料仓储@2x.png')">
          <div class="title">物料仓储管理</div>
          <div class="line"></div>
          <div class="text">物料库存数据实时监控，避免物料浪费和滞存</div>
        </div>
      </transition>
      <transition name="slide-fade-bottom">
        <div v-show="animation2"
          class="once green">
          <img class="icon"
            :src="require('../assets/image/服务内容-织造执行@2x.png')">
          <div class="title">织造执行</div>
          <div class="line"></div>
          <div class="text">采用PLC数据采集，接入传统织造机器，实时采集产品生产数据</div>
        </div>
      </transition>
      <transition name="slide-fade-bottom">
        <div v-show="animation2"
          class="once gray">
          <div class="big"
            @click="$router.push('/index/product')">MORE
            <span class="el-icon-right"></span>
          </div>
        </div>
      </transition>
    </div>
    <div class="module3">
      <div class="middle">
        <div class="top">
          <div class="line1">产品亮点</div>
          <div class="line2">云端协同 智慧织造</div>
        </div>
        <div class="center">
          <div class="once">
            <img :src="require('../assets/image/产品亮点-可视化数据图表@2x.png')" />
            <div class="text">
              <span>可视化数据图表</span>
              <span>数据自动汇总</span>
              <span>多维度数据解读</span>
            </div>
          </div>
          <div class="once">
            <img :src="require('../assets/image/产品亮点-实时监测生产情况@2x.png')" />
            <div class="text">
              <span>实时监测生产情况</span>
              <span>订单到期提前预警</span>
              <span>进度消息即时通知</span>
            </div>
          </div>
          <div class="once">
            <img :src="require('../assets/image/产品亮点—层级分工@2x.png')" />
            <div class="text">
              <span>层级责任分工明确</span>
              <span>生产异常快速响应</span>
              <span>灵活规划生产排期</span>
            </div>
          </div>
          <div class="once">
            <img :src="require('../assets/image/产品亮点—库存清算@2x.png')" />
            <div class="text">
              <span>工厂库存清算</span>
              <span>员工工资清算</span>
              <span>订单财务清算</span>
            </div>
          </div>
        </div>
        <div class="bottom">
          <a class="btn"
            href="#write">免费试用</a>
        </div>
      </div>
    </div>
    <div class="module4">
      <div class="middle">
        <div class="top">
          <div class="line1">使用效果</div>
          <div class="line2">提升产能 缩短周期</div>
        </div>
        <div class="center">
          <div class="once">
            <img :src="require('../assets/image/使用效果—生产效率@2x.png')" />
            <div class="line1">生产效率提升</div>
            <div class="line2">34%</div>
          </div>
          <div class="once">
            <img :src="require('../assets/image/使用效果——人工成本@2x.png')" />
            <div class="line1">人工成本降低</div>
            <div class="line2">60%</div>
          </div>
          <div class="once">
            <img :src="require('../assets/image/使用效果—生产周期@2x.png')" />
            <div class="line1">生产周期缩短</div>
            <div class="line2">53%</div>
          </div>
          <div class="once"
            style="justify-content: space-around;">
            <div class="line">
              <div class="number">80%</div>
              <div class="length orange"
                style="width:80%"></div>
              <div class="text">减少纸张使用成本</div>
            </div>
            <div class="line">
              <div class="number">50%</div>
              <div class="length green"
                style="width:50%"></div>
              <div class="text">降低次品率及次品成本</div>
            </div>
            <div class="line">
              <div class="number">34%</div>
              <div class="length blue"
                style="width:34%"></div>
              <div class="text">降低原料库存堆积</div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <a class="btn"
            href="#write">免费试用</a>
        </div>
      </div>
    </div>
    <div class="module5">
      <div class="middle">
        <div class="top">
          <div class="line1">服务流程</div>
        </div>
        <div class="center">
          <div class="line"></div>
          <div class="once">
            <img :src="require('../assets/image/购买产品@2x.png')" />
            <div class="rect"></div>
            <div class="text">购买产品</div>
          </div>
          <div class="once">
            <img :src="require('../assets/image/提交需求@2x.png')" />
            <div class="rect"></div>
            <div class="text">提交需求</div>
          </div>
          <div class="once">
            <img :src="require('../assets/image/适配工厂服务@2x.png')" />
            <div class="rect"></div>
            <div class="text">适配工厂服务</div>
          </div>
          <div class="once">
            <img :src="require('../assets/image/上门培训@2x.png')" />
            <div class="rect"></div>
            <div class="text">上门培训</div>
          </div>
          <div class="once">
            <img :src="require('../assets/image/系统实施@2x.png')" />
            <div class="rect"></div>
            <div class="text">系统实施</div>
          </div>
        </div>
        <div class="bottom">
          <a class="btn"
            href="#write">免费试用</a>
        </div>
      </div>
    </div>
    <div class="module6"
      id="write">
      <div class="bigTitle">
        <div class="middle">
          <div class="line1">填写试用申请表</div>
          <div class="line2">请您花几分钟时间填写，方便我们工作人员与您联系</div>
        </div>
      </div>
      <div class="contentCtn">
        <div class="middle">
          <div class="leftCtn">
            <el-input class="inputs"
              v-model="name"
              placeholder="姓名"></el-input>
            <el-input class="inputs"
              v-model="company"
              placeholder="公司/组织"></el-input>
            <el-input class="inputs"
              v-model="telephone"
              placeholder="手机号码"></el-input>
            <el-input class="inputs"
              v-model="email"
              placeholder="邮箱"></el-input>
            <div class="btn"
              @click="$message.success('提交成功')">提交试用申请</div>
          </div>
          <div class="line"></div>
          <div class="rightCtn">
            <img :src="require('../assets/image/二维码.png')" />
            <span class="text">扫码关注我们</span>
            <span class="text">获取更多行业信息</span>
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
      animation: true,
      animation2: true,
      name: '',
      company: '',
      telephone: '',
      email: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.animation = true
    }, 200)
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll, true)
    })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (ev) {
      if (document.documentElement.clientHeight - this.$refs.module2.getBoundingClientRect().top > 200) {
        this.animation2 = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/less/home.less";
@import "~@/assets/less/animation.less";
</style>
