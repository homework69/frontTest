<template>
  <div class="wrapper">
    <Sidebar/>
    <Dragondrop/>
    <Footer/>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
import Dragondrop from '@/components/Dragondrop.vue'
</script>

<style lang="scss" scoped>
.wrapper{
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 70px;
  gap: 24px;
  height: 100vh;
}
</style>