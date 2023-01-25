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
        <div class="info">
            <div class="date-name">
                <h5>{{ bigcard.date }}</h5>
                <h5>{{ bigcard.subname }}</h5>
            </div>
            <h3>{{ bigcard.title }}</h3>
            <p>{{ bigcard.description }}</p>
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
        
        position: relative;
        

        .big{
            img{
                width: 100%;
            }
        }
    }
    .info{
        background-color: white;
        position: absolute;
        bottom: -80px;
        right: 10px;
        width: 75%;
        padding: 50px 175px 45px 65px;

        .date-name{
            @include flex;
            
            h5{
                padding: 0px 20px 20px 0px;
                color: $darkgray;
            } 
        }

        p{
            font-size: 13px;
            color: $lightgray;
            padding: 30px 0 20px 0;
        }
    }
</style>