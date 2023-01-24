<script>
import {store} from '../store';
import AppInfo from './AppInfo.vue';

export default {
    components:{
        AppInfo,
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
            <div class="container-80">
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




            <!-- QUARTA SEZIONE -->





            <!-- QUINTA SEZIONE -->





            <!-- SESTA SEZIONE -->




            





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

    .container-80{

        .row{
            @include flex;
            @include wrap;
            margin-bottom: 80px;
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
                border: none;
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





    // QUARTA SEZIONE





    // QUINTA SEZIONE




    // SESTA SEZIONE



    
    


    
</style>