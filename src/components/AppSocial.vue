<script>
export default {
    props:{
        social: Object
    },
}
</script>

<template>
    <div class="social">
        <a href="#null"><i :class="social.icon"></i></a>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

    .social{
        
        a{
            color: white;
            padding: 10px;
        }
    }
</style>