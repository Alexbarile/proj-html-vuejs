<script>
export default {
    props:{
        name: Object
    },
    data() {
        return {
            visibility: true
        }
    },
}
</script>

<template>
    <div class="cardName animate__animated animate__zoomIn" >
        <div class="info">
            <p>{{ name.description }}</p>
            <h4>{{ name.name }}</h4>
            <h6>{{ name.agency }}</h6>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

    .cardName{
        width: calc(100% / 3);
        @include flex;
        @include justify-center;
        background-color: white;

        .info{
            padding: 60px;
            width: 75%;

            p{
                font-size: 13px;
                color: $lightgray;
                margin-bottom: 40px;
            }

            h4{
                margin-bottom: 20px;
            }

            h6{
                color: $lightgray;
            }

            &:hover{
                background-image: url('../../public/img/oliver-ragfelt-488196-2.jpg');
                background-size: cover;
            }
        }
        .info:hover h4{
            color: white;
        }
    }
</style>