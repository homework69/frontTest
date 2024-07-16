<template>
    <aside class="sidebar">
        <div class="sidebar-block">
            <div class="sidebar-block__img">
                <img src="@/assets/img/sidebar.png" alt="">
            </div>
            <h3 class="sidebar-block__title">
                Описание к картинке
            </h3>
            <p class="sidebar-block__descr">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, odit!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, odit!
            </p>
        </div>
    </aside>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.sidebar{
    padding: 18px 14px 24px 14px;
    border: 1px solid #4d4d4d;
    border-radius: 12px;
    &-block{
        text-align: center;
        &__title{
            font-size: 25px;
            color: white;
            padding: 5px;
            background: linear-gradient(90deg, #3c3c3c 0%, #444 51.04%, #333 100%);
            border-radius: 8px;
            margin-top: 20px;
            margin-bottom: 24px;
        }
        &__descr{
            color: white;
            font-size: 18px;
            max-width: 250px;
            width: 100%;
            margin: 0 auto;
        }
    }
}
</style>