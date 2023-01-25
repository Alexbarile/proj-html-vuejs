<script>
import AppSocial from './AppSocial.vue';

export default {
    components: {
        AppSocial,
    },
    data() {
        return {
            activeItem: 0,
            navbar: [
                {
                    label: 'HOME',
                    url: '#null',
                    active: true,
                },
                {
                    label: 'ABOUT',
                    url: '#null',
                    active: false,
                },
                {
                    label: 'PROJECTS',
                    url: '#null',
                    active: false,
                },
                {
                    label: 'SERVICES',
                    url: '#null',
                    active: false,
                },
                {
                    label: 'BLOG',
                    url: '#null',
                    active: false,
                },
                {
                    label: 'CONTACT',
                    url: '#null',
                    active: false,
                },
            ],
            social:[
                {
                    icon: 'fa-brands fa-instagram',
                },
                {
                    icon: 'fa-brands fa-linkedin-in',
                },
                {
                    icon: 'fa-brands fa-facebook-f',
                },
                {
                    icon: 'fa-brands fa-twitter',
                },
            ]
        }
    },
}
</script>

<template>
    <footer>
        <div class="bg-darkblue">
            <div class="container-80">

                <!-- prima riga -->

                <div class="row">
                    <div class="col">
                        <div class="logo">
                            <img src="../../public/img/logotype-2-300x50.png" alt="logo-type">
                        </div>
                    </div>
                    <div class="col">
                        <nav>
                            <ul>
                                <li v-for="(item, index) in navbar" :key="index" >
                                    <a :href="item.url" class="item.active ? 'active : ''">
                                        {{ item.label }}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col">
                        <div class="social">
                            <AppSocial v-for="(item, index) in social" :key="index" :social="item"></AppSocial>
                        </div>
                    </div>
                </div>

                <div class="hr"></div>

                <!-- seconda riga -->

                <div class="row">
                    <div class="col">
                        <h5>Terms of use <br> Privacy Environmental Policy</h5>
                    </div>
                    <div class="col">
                        <h5>Copyright © 2023 Phlox Consulting. All Rights Reserved.</h5>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

    .bg-darkblue{
        width: 100%;
        background-color: $darkblue;

        .container-80{

            // prima riga
            .row{
                @include flex;
                @include align-center;
                @include justify-between;
                widows: 100%;
                padding: 70px 0 70px 0;

                .col{
                    @include flex;
                    @include align-center;

                    .logo{
                        img{
                            width: 150px;
                        }
                    }

                    ul{
                        @include flex;
                        list-style-type: none;

                        li{
                            padding: 13px;

                            a{
                                text-decoration: none;
                                color: $darkgray;
                                transition: 0.5s;

                                &:hover{
                                    color: $lightred;
                                }
                            }
                        }
                    }
                }
                .col{
                    .social{
                        @include flex;
                    }
                }
            }

            .hr{
                border-bottom: 0.5px solid $darkgray;
            }

            // seconda riga

            .row{
                .col{
                    h5{
                        color: $darkgray;
                        font-weight: 200;
                    }
                }
            }
        }
    }
</style>