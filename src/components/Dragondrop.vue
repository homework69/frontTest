<template>
  <div class="drop">
    <div class="drop__item" 
    v-for="(el, index) in dropElements" 
    :key="index"
    :draggable="dropElements[index].img != '' ? true : false"
    @dragstart="dragstart($event,index)"
    @dragover="dragover($event, index)"
    @drop="drop(index)"
    @dragend="dragend(index)"
    >
        <div class="drop__img" ref="items" @click="openDescr(el.img, index)">
            <img v-if="el.img != ''" :src="el.img" alt="">
            <span v-if="el.numberEl">{{ el.numberEl }}</span>
        </div>
       
    </div>
    <div class="drop-modal" :class="{'active': isModalOpen}">
        <img :src="dropModal" alt="">
        <div class="drop-modal__content">
            <h3>Заголовок описание</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, rerum!</p>
        </div>
        <span @click="isModalOpen = false">X</span>
        <button @click="delElement(dropModal)">Удалить предмет</button>
    </div>

  </div>
</template>

<script setup>
import draggable from 'vuedraggable';
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue';
import img1 from '@/assets/img/img-1.png';
import img2 from '@/assets/img/img-2.png';
import img3 from '@/assets/img/img-3.png';

const draggedItem = ref(null)
const items = ref(null)
const dropModal = ref(null)
const isModalOpen = ref(false)

const dropElements = ref([
  { img: img1, numberEl: '2' },
  { img: img2, numberEl: '4' },
  { img: img3, numberEl: '5' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
  { img: '' },
]);

const dragstart = (el,index) => {
    draggedItem.value = index
}
const dragover = (event, index) =>{
    event.preventDefault() 
}
const drop = (index) => {
    const droppedItem = dropElements.value.splice(draggedItem.value, 1)[0]
    dropElements.value.splice(index, 0, droppedItem)
    draggedItem.value = null
    localStorage.setItem(localStorageKey, JSON.stringify(dropElements.value))

}
 const dragend = (index) => {
    draggedItem.value = null
 }
 
 const openDescr = (el,index) => {
   if (items.value[index].querySelector('img')) {
    for (const key in items.value) {
        items.value[key].style.background = ''
    }
    items.value[index].style.background = '#2f2f2f'
    isModalOpen.value = true
   }
   dropModal.value = el
   
 }
 const delElement = (els) => {
    for (let i = 0; i < dropElements.value.length; i++) {
        if (dropElements.value[i].img == els) {
            dropElements.value.splice(i, 1)
        }
        
    }
    localStorage.setItem(localStorageKey, JSON.stringify(dropElements.value))
 } 
 const localStorageKey = 'dropElements';
 onMounted(() => {
    // Проверяем, есть ли данные в localStorage
    if(localStorage.getItem(localStorageKey)) {
        // Если есть, загружаем их
        dropElements.value = JSON.parse(localStorage.getItem(localStorageKey));
    }
});
onBeforeUnmount(() => {
    // Сохраняем данные в localStorage
    localStorage.setItem(localStorageKey, JSON.stringify(dropElements.value));
});
</script>

<style lang="scss" scoped>

.drop {
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(5,1fr);
  grid-template-rows: repeat(5,1fr);
  overflow: hidden;
  position: relative;
  &-modal{
    position: absolute;
    top: 0;
    right: -100%;
    width: 40%;
    bottom: 0;
    z-index: 999;
    backdrop-filter: blur(16px);
    background: rgba(38, 38, 38, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: .3s;
    &.active{
        right: 0;  
    }
    & button{
        padding: 11px 57px;
        background: #f88;
        border-radius: 8px;
        color: white;
        margin-top: 20px;
        cursor: pointer;
        border: none;
    }
    &__content{
        max-width: 300px;
        width: 100%;
        margin-top: 50px;
        text-align: center;
        color: white;
        & h3{
            margin-bottom: 10px;
        }
    }
    & span{
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 30px;
        color: white;
        cursor: pointer;
    }
    & img{
        width: 130px;
        height: 130px;
    }
  }
  &__img{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    & span{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 16px;
        height: 16px;
        border: 1px solid #4d4d4d;
        border-radius: 6px 0 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.4;
        color: #fff;
        font-size: 10px;

    }
  }
  &__item{
    border: 1px solid #4d4d4d;
   
    & img {
       width: 54px;
       height: 54px;
     }
  }
}
</style>
