<script>
import {store} from '../store';
import AppInfo from './AppInfo.vue';
import AppImg from './AppImg.vue';
import AppName from './AppName.vue';
import AppBigCard from './AppBigCard.vue';

export default {
    components:{
        AppInfo,
        AppImg,
        AppName,
        AppBigCard,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <main>
        <div class="container-100">

            <!-- PRIMA SEZIONE -->

            <div class="container-100-end">
                <div class="container-85-end">
                    <div class="row">
                        <div class="col">
                            <h4>Our consultants can help you</h4>
                        </div>
                        <div class="col-line">
                            <div class="hr"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-80-first">
                <div class="row">
                    <AppInfo v-for="(item, index) in store.cardInfo" :key="index" :info="item"></AppInfo>
                </div>
            </div>

            <!-- SECONDA SEZIONE -->

            <div class="container-100">
                <div class="row">
                    <div class="col-60">
                        <div class="bg">
                            <img src="../../public/img/business-people-working-together-on-project-and-5FHSKBL.jpg" alt="business-people">
                        </div>
                    </div>
                    <div class="col-40">
                        <div class="info">
                            <div class="first-line">
                                <div class="hr"></div>
                                <h4>about us</h4>
                            </div>
                            <h1>WE MAKE YOUR STRATEGY WORK</h1>
                            <p>When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown plants are noticed when I hear the buzz of the little world among the stalks,and grow familiar indescribable forms of the insects .and flies, then I feel the presence of the Almighty.</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-85">
                        <div class="info">
                            <h2>WE HELP TO DELIVER THE BUSINESS CASE</h2>
                            <p>When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand unknown</p>
                        </div>
                        <button><a href="#null">get started</a></button>
                    </div>
                    <div class="col-15"></div>
                </div>
            </div>

            <!-- TERZA SEZIONE -->

            <div class="container-100">
                <div class="bg-blue">
                    <div class="container-80-third">
                        <div class="row">
                            <div class="col">
                                <div class="info">
                                    <div class="first-line">
                                        <div class="hr"></div>
                                        <h4>project</h4>
                                    </div>
                                    <h1>OUR EXPERT TRUSTED CONSULTANTS HELP CLIENTS</h1>
                                </div>
                            </div>
                            <div class="col">
                                <a href="#null"><i class="fa-solid fa-arrow-left"></i></a>
                                <a href="#null"><i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="row">
                            <AppImg v-for="(item, index) in store.cardImg" :key="index" :img="item"></AppImg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- QUARTA SEZIONE -->

            <div class="container-100">
                <div class="bg-blue">
                    <div class="container-80-fourth">
                        <div class="row">
                            <div class="col">
                                <div class="info">
                                    <div class="first-line">
                                        <h4>testimonial</h4>
                                        <div class="hr"></div>
                                    </div>
                                    <div class="h1">
                                        <h1>WHAT'S THE CUSTOMER SAY ABOUT OUR WORK</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <AppName v-for="(item, index) in store.cardName" :key="index" :name="item"></AppName>
                        </div>
                    </div>
                </div>
            </div>

            <!-- QUINTA SEZIONE -->

            <div class="container-100">
                <div class="bg-blue">
                    <div class="container-80">
                        <div class="row">
                            <div class="col">
                                <div class="info">
                                    <div class="first-line">
                                        <div class="hr"></div>
                                        <h4>blog</h4>
                                    </div>
                                    <h1>THE RECENT NEWS YOU MUST READ IT</h1>
                                </div>
                            </div>
                            <div class="col">
                                <button class="button">
                                    <a href="#null">view all</a>
                                </button>
                            </div>
                        </div>

                        <div class="row-bottom">
                            <AppBigCard v-for="(item, index) in store.cardBigCard" :key="index" :bigcard="item"></AppBigCard>
                        </div>
                    </div>
                </div>
            </div>

            <!-- SESTA SEZIONE -->

            <div class="container-100">
                <div class="bg">
                    <div class="row">
                        <div class="col">
                            <h1>LET'S TALK ABOUT WORK</h1>
                            <p>A wonderful serenity has taken possession Far far <br> away, behind the word mountains.</p>
                            <button><a href="#null">get started</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;


    // PRIMA SEZIONE

    .container-85-end{
        width: 85%;
        margin: 70px 0 70px 0;
        
        .row{
            @include flex;
            @include align-center;
            width: 100%;

            .col{
                h4{
                    font-size: 23px;
                    @include upperCase;
                }
            }

            .col-line{
                @include flex;
                justify-content: flex-end;
                width: 65%;

                .hr{
                    border-bottom: 2px solid $lightyellow;
                    width: 95%;
                }
            }
        }
    }

    .container-80-first{
        margin: 0 auto;
        margin-bottom: 80px;
        width: 80%;
        
        .row{
            @include flex;
            @include wrap;
        }
    }

    // SECONDA SEZIONE

    .row{
        @include flex;
        width: 100%;
        height: 100%;

        .col-60{
            width: 60%;
            
            .bg{
                img{
                    width: 100%;
                    height: 650px;
                    object-fit: cover;
                    object-position: top
                }
            }
        }

        .col-40{
            width: 40%;
            height: 650px;
            background-color: $darkblue;
            @include flex;
            flex-direction: column;
            @include align-center;
            @include justify-center;

            .info{
                margin-left: 50px;
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
                font-size: 45px;
                line-height: 55px;
                padding: 30px 0 40px 0;
            }

            p{
                width: 80%;
                font-size: 13px;
                color: $darkgray
            }
        }
    }

    .row{
        .col-85{
            width: 85%;
            height: 250px;
            background-color: $lightyellow;
            @include flex;
            @include align-center;
            @include justify-center;
            position: relative;

            .info{
                @include flex;
                @include align-center;
                @include justify-center;

                h2{
                    width: 30%;
                    line-height: 35px;
                }

                p{
                  width: 35%;
                  font-size: 13px;
                  color: $darkgray;
                }

                h2, p{
                    padding: 40px;
                }
            }

            button{
                position: absolute;
                bottom: 0;
                right: 0;
                padding: 15px 40px 15px 40px;
                background-color: $lightred;
                @include upperCase;
                font-weight: 100;
                transition: 1s;

                &:hover{
                    background-color: $darkblue;
                }

                a{
                    text-decoration: none;
                    color: white; 
                }
            }
        }
        .col-15{
            width: 15%;
            background-color: $darkblue;
        }
    }

    // TERZA SEZIONE

    .container-100{
        .bg-blue{
            width: 100%;
            background-color: $darkblue;

            .container-80-third{
                width: 80%;
                margin: 0 auto;
                padding: 180px 0 100px 0;
               
                .row{
                    padding: 25px 0 25px 0;
                    @include flex;
                    @include align-center;
                    @include justify-between;

                    .col{
                        .info{
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
                                font-size: 40px;
                                line-height: 55px;
                                width: 75%;
                                padding-top: 20px;
                            }
                        }

                        a{
                            color: rgb(254, 230, 230);
                            padding: 5px;

                            i{
                                padding: 15px;
                                background-color: rgba(255, 255, 255, 0.1);
                                transition: 1s;

                                &:hover{
                                    background-color: $lightyellow;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // QUARTA SEZIONE

    .container-100{
        .bg-blue{
            
            .container-80-fourth{
                width: 80%;
                margin: 0 auto;
                padding-bottom: 180px;

                .row{
                    @include flex;
                    @include align-center;
                    justify-content: flex-end;
                    padding-top: 40px;

                    .col{
                        .info{
                            
                            .first-line{
                                @include flex;
                                justify-content: flex-end;

                                .hr{
                                    border-bottom: 2px solid $lightyellow;
                                    width: 40px;
                                    margin-left: 30px;
                                }

                                h4{
                                    @include upperCase;
                                    color: rgb(254, 230, 230);
                                    font-weight: 200;
                                }
                            }

                            .h1{
                                display: flex;
                                justify-content: flex-end;

                                h1{
                                    color: white;
                                    font-size: 40px;
                                    line-height: 55px;
                                    width: 75%;
                                    padding-top: 20px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // QUINTA SEZIONE

    .container-100{
        .bg-blue{
            .container-80{
                .row{
                    padding: 25px 0 25px 0;
                    @include flex;
                    @include align-center;
                    @include justify-between;

                    .col{
                        .info{
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
                                font-size: 40px;
                                line-height: 55px;
                                padding-top: 20px;
                            }
                        }
                        button{
                            padding: 15px 40px 15px 40px;
                            background-color: $lightyellow;
                            @include upperCase;
                            font-weight: 100;
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
                    }
                }

                .row-bottom{
                    padding-bottom: 200px;
                    @include flex;
                    @include align-center;
                    @include justify-between;
                }
            }
        }
    }

    // SESTA SEZIONE

    .bg{
        background-image: url('../../public/img/business-people-working-together-on-project-and-B3MZ4TX.jpg');
        background-size: cover;
        height: 350px;
        
        .row{
            @include flex;
            @include align-center;
            @include justify-center;
            width: 100%;

            .col{
                text-align: center;

                h1{
                    font-size: 40px;
                    color: white;
                    margin-bottom: 20px;
                }

                p{
                    color: rgba(255, 255, 255, 0.7);
                    margin-bottom: 20px;
                }

                button{
                    padding: 15px 40px 15px 40px;
                    background-color: $darkblue;
                    @include upperCase;
                    font-weight: 100;
                    transition: 1s;

                    &:hover{
                        background-color: $lightyellow;
                    }

                    a{
                        text-decoration: none;
                        color: white;
                        transition: 1s;
                    }
                }

                &:hover a{
                    color: black;
                }
            }
        }
    } 
</style>