<template>
  <div class>
    <h1>模块C</h1>
    <div>
      <p>vuex使用：{{name}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  computed: {
    ...mapState('moduleC', ['name'])
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="" scoped>
</style>