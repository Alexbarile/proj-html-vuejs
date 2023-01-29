<script>
export default {
    props:{
        info: Object
    },
}
</script>

<template>
    <div class="cardInfo animate__animated animate__slideInUp">
        <div class="miniature">
            <i :class="info.icon"></i>
        </div>
        <div class="info">
            <h4>{{ info.title }}</h4>
            <h5>{{ info.description }}</h5>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

    .cardInfo{
        width: calc(100% / 2);
        @include flex;
        @include justify-center;
        padding: 40px;

        .miniature{
            margin-right: 30px;
            i{
                padding: 15px;
                background-color: $lightred;
                border-radius: 100%;
                color: white;
                font-size: 25px;
            }
        }

        .info{
            width: 65%;
            h4{
                padding: 20px 0 20px 0;
            }

            h5 {
                font-size: 13px;
                font-weight: 100;
                color: $darkgray
            }
        }
    }
</style>