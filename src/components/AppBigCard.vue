<script>
export default {
    props:{
        bigcard: Object
    },
}
</script>

<template>
    <div class="cardBigCard">
        <div class="big">
            <img :src="bigcard.img" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

    .cardBigCard{
        width: calc(100% / 2);
        @include flex;
        @include justify-center;
        padding: 10px;
        text-align: center;
        

        .big{
            img{
                width: 100%;
            }
        }
    }
</style>