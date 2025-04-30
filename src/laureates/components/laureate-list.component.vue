<script>
import LaureateItem from './laureate-item.component.vue';

export default {
  name: 'laureate-list',
  components: {
    LaureateItem
  },
  props: {
    laureates: {
      type: Array,
      required: true
    }
  }
};
</script>

<template>
  <div class="grid gap-3">
    <div
        v-for="laureate in laureates"
        :key="laureate.id"
        class="col-12 md:col-6 lg:col-3"
    >
      <laureate-item :laureate="laureate" />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>