<template>
  <div class="alert_box" v-if="alert" :class="alert.type">
    <div>
      <h2 class="alert_title">{{ alert.title  }}</h2>
      <p class="alert_message">{{ alert.message }}</p>
    </div>
    <button class="alert_close_btn" @click.prevent="$emit('closeAlert')"></button>
  </div>
</template>

<script>
export default {
  emits: ['closeAlert'],
  props: ['alert'],
}
</script>