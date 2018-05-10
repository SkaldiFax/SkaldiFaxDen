<template>
    <div class="NotePage">
        <div class="NotePage-frame">
            <note-page-navigation />
            <note-page-content />
        </div>
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
    .NotePage {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100vw;
        /* 3em to compensate for the header size */
        height: calc(100vh - 3em - 5em);
        padding-top: 5em;
    }

    .NotePage-frame {
        display: flex;
        flex-direction: row;

        max-width: 1000px;
        width: 100%;
        height: 100%;
    }
</style>
