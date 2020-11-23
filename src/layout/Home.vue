<template>
  <div>
    <el-container class="total-Container">
      <el-aside width="300px">
        <el-container class="aside-container">
          <el-header><div>中国电信</div></el-header>
          <el-main>
            <!-- <el-container>
              <el-header><div class="menu-header">菜单管理</div> </el-header>
              <el-main class="menu-main">
                <el-scrollbar wrap-class="scrollbar-wrapper">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                >
                    <el-submenu index="1">
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                      </template>
                      <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                      </el-menu-item-group>
                      <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                      </el-menu-item-group>
                      <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                      </el-submenu>
                      <el-submenu index="1-5">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-5-1">选项1</el-menu-item>
                      </el-submenu>
                      <el-submenu index="1-6">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-6-1">选项1</el-menu-item>
                      </el-submenu>
                      <el-submenu index="1-6">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-6-1">选项1</el-menu-item>
                      </el-submenu>
                    </el-submenu>
                    <el-menu-item index="2">
                      <i class="el-icon-menu"></i>
                      <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                      <i class="el-icon-document"></i>
                      <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                      <i class="el-icon-setting"></i>
                      <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
                              </el-scrollbar>
              </el-main>
            </el-container> -->
           <Sidebar></Sidebar>
          </el-main>
        </el-container>
      </el-aside>
      <el-main>
        <el-container>
          <el-header height="120px"><div>header</div></el-header>
          <el-main>
            <TabBar></TabBar>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Sidebar from './Sidebar'
import TabBar from './TabBar'
export default {
  data () {
    return {
      datalist: [{ name: 'hhh', children: [{ name: 'fff', children: null }, { name: 'fff', children: null }] }, { name: 'hhh', children: [{ name: 'fff', children: null }, { name: 'fff', children: null }] }],
      count: 100
    }
  },
  components: {
    TabBar,
    Sidebar
  },
  methods: {
    load () {
      this.count += 2
    }
  }
}
</script>

<style lang="scss" scoped >
.total-Container{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.el-container{
  height: 100%;
}
.el-header{
  padding: 0;
}
.menu-header {
  background: rgb(51, 64, 65);
  padding: 0;
  text-align: center;
  height: 100%;
  width: 100%;
  font-size: 16px;
  color: white;
}
.el-aside{
  height: 100%;
}
.el-main {
  padding: 0;
  height: calc(100% - 60px);
}
</style>
