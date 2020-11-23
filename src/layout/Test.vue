<template>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <p>{{item.name}}</p>
        <Test v-if="item.children" :list="item.children"></Test>
      </li>
    </ul>
</template>
<script>
import Test from './Test'
export default {
  name: 'Test',
  props: ['list'],
  components: {
    Test: Test
  }
}
</script>
