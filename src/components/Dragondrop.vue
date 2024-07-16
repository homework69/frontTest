<template>
  <div class="drop">
    <div class="drop__item" v-for="(el, index) in dropElements" :key="index">
        <img v-if="el.img != ''" :src="el.img" alt="">
    </div>
  </div>
</template>

<script setup>
// import draggable from '@/vuedraggable';
import { ref } from 'vue';
import img1 from "@/assets/img/img-1.png";
import img2 from "@/assets/img/img-2.png";
import img3 from "@/assets/img/img-3.png";

const dropElements = ref([
    {img: img1, numberEl: '2'},
    {img: img2, numberEl: '4'},
    {img: img3, numberEl: '5'},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
])


</script>

<style lang="scss" scoped>
.drop {
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  overflow: hidden;
  &__item {
    border: 1px solid #4d4d4d;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      width: 54px;
      height: 54px;
    }
  }
}
</style>
