<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store';

export default{
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter></AppFooter>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;

</style>
