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
                <div class="container-85">
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
        </div>
        
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

    // PRIMA SEZIONE

    .container-85{
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
                display: flex;
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
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;

            // .col{
            //     width: 50%;
            //     display: flex;
            //     justify-content: center;
            // }
        }
    }
    
</style>