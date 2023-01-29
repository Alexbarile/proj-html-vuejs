<script>
export default {
    props:{
        img: Object
    },
}
</script>

<template>
    <div class="cardImg animate__animated animate__fadeIn">
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
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;

            img{
                width: 100%;
                display: block;
                transform: scale(1);
                transition: all 1s linear;

                &:hover{
                    transform: scale(1.2);
                }
            }
        }
    }
</style>