<template>
    <div id="app">
        <page-header />
        <router-view />
    </div>
</template>

<script>
    import PageHeader from './components/PageHeader.vue';

    export default {
      name: 'App',
      components: {
          PageHeader
      }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Cabin|Francois+One|Space+Mono');

    body {
        margin: 0;

        background-image: url("./assets/background.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        font-family: Cabin, sans-serif;
        font-size: 16px;
    }
</style>
