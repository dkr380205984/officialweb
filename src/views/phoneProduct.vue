<template>
  <div id="phoneProduct">
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
    <div class="module">
      <div class="imgCtn">
        <img :src="require('../assets/image/产品概览-报价单管理@2x.png')" />
      </div>
      <div class="textCtn">
        <div class="title">报价单管理</div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">报价单据统一管理，实时查询</span>
        </div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">减少业务员之间沟通成本，报价信息交流更快更便捷</span>
        </div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">报价审核即时通知，业务交付更快，上下游对接更方便</span>
        </div>
      </div>
    </div>
    <div class="module bgGray">
      <div class="imgCtn">
        <img :src="require('../assets/image/产品概览-订单追溯@2x.png')" />
      </div>
      <div class="textCtn">
        <div class="title">订单追溯</div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">对订单进行生产管理 包括物料设计、物料调拨、生产计划、半成品加工、质量检验、装箱出库等流程，追踪订单的具体生产状况。</span>
        </div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">结合数字大屏、系统、交互图表帮助企业清晰准确的掌握每个订单的生产进度。</span>
        </div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">在传统的织造机器上加装数据采集器，实时的采集产品织造过程中的生产数据且同步到系统中，方便企业实时的获得产品的生产数据。</span>
        </div>
      </div>
    </div>
    <div class="module">
      <div class="imgCtn">
        <img :src="require('../assets/image/产品概览-物料追溯@2x.png')" />
      </div>
      <div class="textCtn">
        <div class="title">物料追溯</div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">对工厂的物料进行数字化的仓储管理包括物料的订购、加工、入库与出库，提供实时的库存记录查询。</span>
        </div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">每笔订单物料使用情况可追溯，物料使用精准，库存管理更高效。</span>
        </div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">物料数据清晰可见，帮助企业往后订购物料中更明确，最大化物料使用效率，减少库存积压。</span>
        </div>
      </div>
    </div>
    <div class="module bgGray">
      <div class="imgCtn">
        <img :src="require('../assets/image/产品概览-工艺在线设计@2x.png')" />
      </div>
      <div class="textCtn">
        <div class="title">工艺在线设计</div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">输入产品工艺信息，在线设计工艺单，缩短产品设计周期。</span>
        </div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">系统自动计算工艺，渲染仿真工艺图，减少样品打样成本。</span>
        </div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">根据工艺单计算产品物料信息，系统自动生成产品配料单。</span>
        </div>
      </div>
    </div>
    <div class="module">
      <div class="imgCtn">
        <img :src="require('../assets/image/产品概览——生产计划@2x.png')" />
      </div>
      <div class="textCtn">
        <div class="title">生产计划</div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">在线制定生产计划，快速安排生产任务</span>
        </div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">可视化订单图表，根据实际情况优化排产计划，提高生产效率</span>
        </div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">结合数字大屏，帮助工厂精准掌控每个订单生产进度</span>
        </div>
      </div>
    </div>
    <div class="module bgGray">
      <div class="imgCtn">
        <img :src="require('../assets/image/产品概览——织造执行@2x.png')" />
      </div>
      <div class="textCtn">
        <div class="title">织造执行</div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">采用PLC数据采集，接入传统织造机器，实时采集产品生产数据</span>
        </div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">支持对织造机器的远程操作</span>
        </div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">生产数据同步到系统中，掌握工厂车间实时生产动态</span>
        </div>
      </div>
    </div>
    <div class="module">
      <div class="imgCtn">
        <img :src="require('../assets/image/产品概览——财务统计@2x.png')" />
      </div>
      <div class="textCtn">
        <div class="title">财务统计</div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">统计工厂总产值，追溯每个订单具体财务情况，包括产品数量、物料使用、织造加工成本等。</span>
        </div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">统计工厂物料使用情况，记录所有纱线订购来源、纱线单价，关联相关订单。</span>
        </div>
        <div class="line">
          <div class="circle"></div>
          <span class="text">统计所有合作公司财务往来，方便工厂年底进行财务结算。</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import "~@/assets/less/phoneProduct.less";
</style>
