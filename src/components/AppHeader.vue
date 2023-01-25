<script>

export default {
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
                    <div class="info">
                        <div class="first-line">
                            <div class="hr"></div>
                            <h4>always the best way you need it</h4>
                        </div>
                        <h1>THE BEST BUSINESS CONSULTING</h1>
                        <div class="third-line">
                            <button class="button">
                                <a href="#null">read more</a>
                            </button>
                            <a href="#null"><i class="fa-solid fa-play"></i></a>
                        </div>
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

    .container-80{
        position: absolute;
        z-index: 1;
        left: 200px
    }
    
    .row-header{
        @include flex;
        @include align-center;
        @include justify-between;
        padding: 20px 0 20px 0;

        .logo{
            img{
                width: 100px;
                cursor: pointer
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
                        color: $lightgray;
                        transition: 1s;

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
            position: relative;
            z-index: 0;

            .col-30{
                width: 30%;
                background-color: $darkblue;
                height: 1000px;
                @include flex;
                flex-direction: column;
                @include align-center;
                @include justify-center;
                position: relative;

                .info{
                    position: absolute;
                    left: 170px
                }

                .first-line{
                    @include flex;
                    
                    .hr{
                       border-bottom: 2px solid $lightyellow;
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
                        padding: 15px 40px 15px 40px;
                        background-color: $lightyellow;
                        @include upperCase;
                        font-weight: 100;
                        margin-right: 30px;
                        transition: 1s;

                        &:hover{
                            background-color: $lightred;
                        }

                        a{
                            text-decoration: none;
                            color: #333333;
                            transition: 1s;
                        }
                    }

                    &:hover a{
                        color: white;
                    }

                    i{
                        color: $lightyellow;
                        border-radius: 50%;
                        border: 1px solid white;
                        padding: 18px;
                    }
                }
            }

            .col-70{
                width: 70%;

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