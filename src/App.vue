<script setup lang="ts">
import bridge from '@vkontakte/vk-bridge'
import { onMounted, ref } from 'vue'

const user = ref()

onMounted(async () => {
  try {
    user.value = await bridge.send('VKWebAppGetUserInfo')
    console.log(user.value)
  } catch (e) {
    console.error(e)
  }
})
</script>

<template>
  <div class="app">
    <template v-if="user">
      <h1>ваш акк в вк взломан, кидайте тыщу ване на карту и мы забудем об этом инцеденте</h1>

      <h2>вот пруфы, ваше фио и фотокарточка</h2>

      <h3>{{ user.first_name }} {{ user.last_name }}</h3>
      <img :src="user.photo_200" alt="" class="app__avatar" />
    </template>
  </div>
</template>

<style scoped>
.app {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  &__avatar {
    width: 50px;
    height: 50px;
    display: block;
  }
}
</style>
