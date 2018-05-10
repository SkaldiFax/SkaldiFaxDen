<template>
    <div class="PageHeader">
        <div class="header" />
        <div class="blocker" />
    </div>
</template>

<script>
    import NotePageNavigation from './NotePage/Navigation.vue';
    import NotePageContent from './NotePage/Content.vue';

    export default {
        name: 'NotePage',
        components: {
            NotePageNavigation,
            NotePageContent
        }
    };
</script>

<style scoped>
    .header {
        position: fixed;
        width: 100vw;
        height: 3em;

        background-color: black;
    }

    .blocker {
        width: 100vw;
        height: 3em;
    }
</style>
