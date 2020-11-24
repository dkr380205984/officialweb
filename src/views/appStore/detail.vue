<template>
  <div id="storeDetail">
    <div class="page__container">
      <div class="imgCtn">
        <div class="left">
          <div class="left_image_control">
            <template v-if="image.length > 0">
              <img class="left_image"
                v-for="(itemImg,indexImg) in image"
                :class="{'active':indexImg === activeIndex}"
                @click="activeIndex = indexImg"
                :key="indexImg"
                :src="itemImg || noPic"
                alt=""
                srcset="" />
            </template>
            <template v-else>
              <img class="left_image active"
                :src="noPic"
                alt=""
                srcset="" />
            </template>
          </div>
        </div>
        <div class="right">
          <span class="title">织为云—{{titleCom}}</span>
          <!-- <img :src="image[activeIndex] || noPic"
            class="img"
            alt=""
            srcset=""> -->
          <el-image class="img"
            :src="image[activeIndex] || noPic"
            :preview-src-list="image">
          </el-image>
        </div>
      </div>
      <div class="infoCtn">
        <span class="title">系统基本介绍</span>
        <span class="textContent"
          v-html="info"></span>
      </div>
      <div class="charCtn">
        <span class="title">系统特点</span>
        <div class="char__box">
          <div class="char__item"
            v-for="(itemChar,indexChar) in characteristic"
            :key="indexChar">
            <img :src="noPic"
              alt=""
              class="icon">
            <span class="name">数据安全</span>
            <span class="text">{{itemChar.info}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_fixed_container">
      <span class="btn blue"
        @click="openUrl">试用系统</span>
      <span class="btn orange"
        @click="buyConsult">购买咨询</span>
    </div>
  </div>
</template>

<script>
import { getterTypeName, getterTypeImage, getterTypeInfo, getterTypeChar, getterTypeUrl } from './index.js'
export default {
  data () {
    return {
      noPic: require('@/assets/image/noPic.jpg'),
      activeIndex: 0,
      title: '',
      image: [],
      info: '',
      characteristic: []
    }
  },
  methods: {
    openUrl () {
      const url = getterTypeUrl(Number(this.$route.params.systemType))
      if (url) {
        window.open(url)
      } else {
        this.$message.warning('出现了一点意外！！！')
      }
    },
    buyConsult () {
      this.$alert('咨询热线：188-8888-8888', '购买咨询', {
        confirmButtonText: '确定'
      })
    }
  },
  created () {
    this.title = getterTypeName(Number(this.$route.params.systemType))
    this.image = getterTypeImage(Number(this.$route.params.systemType))
    this.info = getterTypeInfo(Number(this.$route.params.systemType))
    this.characteristic = getterTypeChar(Number(this.$route.params.systemType))
  },
  computed: {
    titleCom () {
      return this.title && this.title.split('<br />').join('')
    }
  }
}
</script>

<style scoped lang='less'>
@import "./detail.less";
</style>
