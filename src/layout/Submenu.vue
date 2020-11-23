<template>
  <!-- v-if=menuitem解决初始化报错问题 -->
  <el-submenu  :index="menu.index">
    <template slot="title">
      <i :class="menu.icon"></i>
      <span>{{menu.name}}</span>
    </template>
      <component  v-for="item in menu.childrenMenuItem" :key="item.id" :is="item.endItem==true?'MenuItem':'Submenu'" :menu="item" ></component>
  </el-submenu>
</template>
<script>
import MenuItem from './MenuItem'
export default {
  name: 'Submenu',
  props: ['menu'],
  data () {
    return {
      // 不能使用ref传值
    }
  },
  components: {
    MenuItem
    // eslint-disable-next-line no-undef
  }
}
</script>
