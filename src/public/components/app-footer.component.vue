<script>
export default {
  name: "app-footer"
}
</script>

<template>
  <pv-toolbar>
    <template #center>
      <div class="flex flex-column align-items-center text-center">
        <span>{{ $t('footer.copyright') }}</span>
        <span>{{ $t('footer.author') }}</span>
      </div>
    </template>
  </pv-toolbar>

</template>

<style scoped>
span {
  font-size: 0.9rem;
  line-height: 1.6;
}
</style>