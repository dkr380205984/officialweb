<template>
  <div id="appStore">
    <div class="container">
      <div class="client__info">
        <div class="left">
          <img :src="image.main || noPic"
            alt=""
            class="img">
        </div>
        <div class="right">
          <span class="client__name">杭州织慧科技有限公司</span>
          <span class="title">织为云<br />协同织造云平台</span>
          <span class="btn"
            @click="$router.push(`/systemStore/detail/1`)">查看更多</span>
        </div>
      </div>
    </div>
    <div class="container flex2">
      <div class="flex__2__item"
        v-for="item in flex2Data"
        :key="item">
        <div class="item__info">
          <img :src="getterTypeIcon(item) || noPic"
            class="img" />
        </div>
        <div class="item__info">
          <span class="name"
            v-html="getterTypeName(item)"></span>
          <span class="btn"
            @click="$router.push(`/systemStore/detail/${item}`)">查看更多</span>
        </div>
      </div>
    </div>
    <span class="bottom_info_title">工业云APP商城</span>
    <div class="container flex4">
      <div class="flex__4__item"
        v-for="item in flex4Data"
        :key="item">
        <img :src="getterTypeIcon(item) || noPic"
          class="img" />
        <span class="name"
          v-html="getterTypeName(item)"></span>
        <div class="go__detail__container">
          <div class="btn orange"
            v-if="getterTypeStatus(item) === 1">开发中</div>
          <div class="btn"
            v-if="getterTypeStatus(item) === 2"
            @click="$router.push(`/systemStore/detail/${item}`)">查看详情</div>
          <div class="btn orange"
            v-if="getterTypeStatus(item) === 3">设计中</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getterTypeIcon, getterTypeName, getterTypeStatus } from './index.js'
export default {
  data () {
    return {
      noPic: require('@/assets/image/noPic.jpg'),
      flex2Data: [1, 2],
      flex4Data: [3, 4, 5, 6, 7, 8, 9, 11],
      image: {
        main: require('@/assets/image/appStore/homePage/织为云协同织造云平台.png')
      }
    }
  },
  methods: {
    getterTypeIcon,
    getterTypeName,
    getterTypeStatus
  },
  created () {
  }
}
</script>

<style scoped lang='less'>
@import "./index.less";
</style>
