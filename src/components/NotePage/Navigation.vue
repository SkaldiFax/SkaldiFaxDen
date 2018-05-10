<template>
    <nav class="NotePageNavigation">
        <div class="header">
            <h3>Machine Learning</h3>
            <h2>Algorithms</h2>
        </div>
        <ul>
            <li v-for="(section, index) in sections" :key="index" :class="{ selected: selectedSection === index }">
                {{ section }}
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'NotePageNavigation',
        data: () => {
            return {
                sections: [
                    'Upper Confidence Boundary (UCB)',
                    'Notes and stuff',
                    'Selection of an optimal parameter for normal distributions',
                    'Efficient potato farming',
                    'Appendix'
                ],
                selectedSection: 1
            };
        }
    }
</script>

<style scoped>
    .NotePageNavigation {
        flex-shrink: 0;

        width: 18em;
        border-right: 1px solid rgba(0, 0, 0, 0.3);

        text-align: right;
    }

    .header {
        padding-right: 1em;
    }

    h3 {
        margin: 0;

        color: rgba(0, 0, 0, 0.3);
        font-size: 1em;
        font-weight: normal;
    }

    h2 {
        margin: 0;

        font-size: 1.5em;
        font-weight: bold;
    }

    ul {
        list-style: none;
    }

    li {
        font-size: 1em;
        line-height: 1.25em;

        padding: 0.5em 1em 0.5em 0;
    }

    li:hover {
        background: linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
    }

    li.selected {
        background: linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
    }
</style>
