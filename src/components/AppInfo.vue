<script>
export default {
    props:{
        info: Object
    },
    
}
</script>

<template>
    <div class="cardInfo">
        <h4>{{ info.description }}</h4>
        
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
    
</style>