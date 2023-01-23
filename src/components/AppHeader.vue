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

            <!-- logo e navbar -->

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
                                <li v-for="(item, index) in navbar" :key="index" >
                                    <a :href="item.url" class="item.active ? 'active : ''">
                                        {{ item.label }}
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <!-- jumbotron -->

            <div class="row">
                <div class="col-30">
                    <div class="first-line">
                        <div class="hr"></div>
                        <h4>always the best way you need it</h4>
                    </div>
                    <h1>THE BEST BUSINESS CONSULTING</h1>
                    <div class="third-line">
                        <button class="button">
                            read more
                        </button>
                        <i class="fa-regular fa-circle-play"></i>
                    </div>

                </div>

                <div class="col-70">
                    <div class="jumbo">
                        <img src="../../public/img/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg" alt="jumbo">
                    </div>

                </div>
            </div>
            
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

    // logo e navbar
    .row-header{
        @include flex;
        @include align-center;
        @include justify-between;
        padding: 20px 0 20px 0;

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
                    padding: 13px;

                    a{
                        text-decoration: none;
                        color: #AAAAAA;

                        &.active, &:hover{
                            color: white;
                            border-top: 2px solid white;
                            padding-top: 30px;
                        }
                    }
                }
            }
        }
    }

    // jumbotron

    .container-100{
        .row{
            @include flex;
            width: 100%;
            height: 100%;

            .col-30{
                width: 30%;
                background-color: #1F1E38;
                height: 1000px;

                .first-line{
                    @include flex;
                    
                    .hr{
                       border-bottom: 2px solid #39FFBF;
                       width: 40px;
                       margin-right: 30px;
                          
                    }

                    h4{
                        @include upperCase;
                        color: rgb(254, 230, 230);
                        font-weight: 200;
                    }
                }

                h1{
                    color: white;
                    font-size: 80px;
                    line-height: 75px;
                    padding: 30px 0 40px 0;
                }

                .third-line{
                    @include flex;
                    @include align-center;

                    button{
                        padding: 15px 35px 15px 35px;
                        background-color: #39FFBF;
                        @include upperCase;
                        font-weight: 100;
                    }

                    i{
                        color: #39FFBF;

                        .fa-circle-play{
                            padding: 60px;
                        }
                    }
                }

                

            }

            .col-70{
                width: 70%;
                background-color: blue;
                height: 300px;

                .jumbo{
                    img{
                        width: 100%;
                        height: 1000px;
                        object-fit: cover;
                        object-position: top
                    }

                }
            }
        }
    }


    
</style>