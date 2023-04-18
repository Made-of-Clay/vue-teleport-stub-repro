<template>
  <div class="row">
    <p>Outside the Teleport</p>
    <div>
      count outside: <span class="count">{{ count }}</span>
    </div>
    <button id="increment" @click="count++">Increment</button>
    <Teleport to="body">
      <p>Inside the Teleport</p>
      <div>
        count inside: <span class="count">{{ count }}</span>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'HelloWorld'
}
</script>

<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    default: ''
  }
})
const count = ref(0)
</script>

<style lang="scss" scoped>
h1.msg {
  color: $gray-900;
}
</style>
