<script>
export default {
    props:{
        img: Object
    },
}
</script>

<template>
    <div class="cardImg">
        <div class="thumb">
            <img :src="img.img" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

    .cardImg{
        width: calc(100% / 3);
        @include flex;
        @include justify-center;
        padding: 10px;

        .thumb{
            img{
                width: 100%;
            }
        }
    }
</style>