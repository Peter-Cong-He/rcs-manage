<template>
  <el-tabs v-model="$store.state.editableTabsValue" type="card" closable  @tab-remove="removeTab">
      <el-tab-pane
            v-for="(item) in $store.state.editableTabs"
            :key="item.id"
            :label="item.title"
            :name="item.name"
        >
             <!-- <router-view></router-view> -->
      </el-tab-pane>
  </el-tabs>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    // ...mapState(['editableTabsValue', 'contentUrl'])
    ...mapState({
      editableTabsValue: state => state.editableTabsValue,
      options (state) {
        return this.state.contentUrl
      }
    })
  },
  beforeCreate: function () {
    // console.log('beforeCreate', this.contentUrl)
    // this.$router.push(this.contentUrl)
  },
  mounted () {

  },
  methods: {
    removeTab () {
    }
  }
}
</script>
