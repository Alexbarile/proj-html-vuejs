<script>
import {store} from '../store';

export default {
    data() {
        return {
            store,
            activeItem: 0,
            navbar: [
                {
                    label: 'HOME',
                    url: '#',
                    active: true,
                },
                {
                    label: 'ABOUT',
                    url: '#',
                    active: false,
                },
                {
                    label: 'PROJECTS',
                    url: '#',
                    active: false,
                },
                {
                    label: 'SERVICES',
                    url: '#',
                    active: false,
                },
                {
                    label: 'BLOG',
                    url: '#',
                    active: false,
                },
                {
                    label: 'CONTACT',
                    url: '#',
                    active: false,
                },
            ]
        }
    },
}

</script>

<template>
    <footer>
        <div class="container-100">
            
        </div>
        
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;
    
</style>