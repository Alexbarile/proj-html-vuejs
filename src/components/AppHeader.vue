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
    <header>
        <div class="container-100">
            <div class="container-80">
                <div class="row-header">
                    <div class="col">
                        <div class="logo">
                            <img src="../../public/img/logotype.png" alt="logo-type-red">
                        </div>
                    </div>
                    <div class="col">
                        <nav>
                            <ul>
                                <li v-for="(item, index) in navbar" :key="index" @click="selectedItem(index)" :class="(activeItem === index) ? 'active' : ''">
                                    <a :href="item.url">
                                        {{ item.label }}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
            
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

    .row-header{
        @include flex;
        @include align-center;
        @include justify-between;
        padding-top: 20px;

        .logo{
            img{
                width: 100px;
            }
        }

        .col{
            ul{
                @include flex;
                list-style-type: none;

                li{
                    padding: 10px;
                    
                    a{
                        text-decoration: none;
                        color: #AAAAAA;
                    }
                }
            }
        }
    }


    
</style>