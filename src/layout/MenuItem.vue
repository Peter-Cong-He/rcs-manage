<template>
  <!--v-if解决一开始初始化数据null时报错问题-->
  <el-menu-item  :index="menu.index">
    <i :class="menu.icon"></i>
    <span slot="title" @click="address">{{menu.name}}</span>
    <!-- <router-link tag="span"  slot="title" :to="menu.url">{{menu.name}}</router-link> -->
  </el-menu-item>
</template>
<script>
import { ADDRESS_MUTATION } from '../utils/mutation-types'
import { mapState } from 'vuex'
export default {
  name: 'MenuItem',
  props: ['menu'],
  data () {
    return {
      // 通过ref传值
      // menuItim: null
    }
  },
  computed: {
    ...mapState(['contentUrl'])
  },
  methods: {

    address () {
      this.$store.commit(ADDRESS_MUTATION, this.menu)
      this.$router.push(this.menu.url)
      // this.contentUrl = this.menu.url
      console.log('url', this.menu.url)
      console.log(this.$options, this.$router)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
