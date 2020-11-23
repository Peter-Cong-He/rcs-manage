<template>
    <el-container>
      <el-header><span>菜单管理</span> </el-header>
      <el-main class="menu-main">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <el-menu
            default-active="2"
            class="el-menu-vertical"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            v-if="menulist"
          >
            <component  v-for="item in menulist"  :key="item.id" :is="item.endItem==true?'MenuItem':'Submenu'" :menu="item"></component>
          </el-menu>
        </el-scrollbar>
      </el-main>
    </el-container>
</template>
<script>
import MenuItem from './MenuItem'
import Submenu from './Submenu'
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['menulist'])
  },
  components: {
    MenuItem,
    Submenu
  },
  created () {
  },
  mounted () {
    this.$store.dispatch('getMenuAction')
  }
}
</script>
<style lang="scss" scoped>
.el-menu {
  border-right: none;
  height: 100%;
}
.el-header{
  padding: 0;
  background: rgb(51, 64, 65);
  text-align: center;
  height: 100%;
  width: 100%;
  font-size: 16px;
  color: white;
}
.el-scrollbar{
  height: 100%;
}
.el-container {
 height: calc(100% - 60px);
  border: solid 1px rgb(153, 0, 255);
  margin: 0px;
}
.el-main {
  width: 100%;
  height: calc(100% - 60px);
  /deep/.el-scrollbar__wrap {
    overflow-x: hidden;
  }
  padding: 0;
}
</style>
