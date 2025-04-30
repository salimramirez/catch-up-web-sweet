<script>
export default {
  name: "laureate-item",
  props: {
    laureate: {
      type: Object,
      required: true
    }
  },
  computed: {
    fullName() {
      return `${this.laureate.firstname} ${this.laureate.surname}`;
    }
  }
};
</script>

<template>
  <pv-card class="mb-3">
    <template #body>
      <h3 class="font-bold text-lg">{{ fullName }}</h3>
    </template>

    <template #subtitle>
      <span>Born: {{ laureate.born }} · Gender: {{ laureate.gender }}</span>
    </template>

    <template #content>
      <p><strong>Number of Prizes:</strong> {{ laureate.prizes.length }}</p>
    </template>
  </pv-card>
</template>

<style scoped>

</style>