<script>
export default {
    props:{
        name: Object
    },
}
</script>

<template>
    <div class="cardName">
        
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

    .cardName{
        width: calc(100% / 3);
        @include flex;
        @include justify-center;
        padding: 40px;

        
    }
</style>