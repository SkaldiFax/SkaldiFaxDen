<template>
    <div class="NotePageContent">
        <h1>Notes and stuff</h1>
        <p v-for="(paragraph, index) in paragraphs" :key="index">
            {{ paragraph }}
        </p>
        <p class="code">
            const findTheBestKitten = (kittens) => {
                let bestKitten = {
                    index: 0,
                    score: 0
                }
                kittens.forEach((kitten, i) => {
                    const kittenScore = kitten.evaluate();        
                    if (kittenScore > bestKitten.score) {
                    bestKitten.index = i;
                        bestKitten.score = kittenScore;	
                    }
                });
                return kittens[bestKitten.index];
            };
        </p>
        <p v-for="(paragraph, index) in paragraphs" :key="index">
            {{ paragraph }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'NotePageContent',
        data: () => {
            return {
                section: 'Upper Confidence Boundary (UCB)',
                paragraphs: [
                    'Praesent ultrices vehicula purus nec fermentum. Praesent sed tellus malesuada, euismod massa quis, elementum justo. Nulla sed quam volutpat, porttitor magna id, volutpat est. Curabitur aliquet quis quam nec euismod. Proin porttitor ornare egestas. Suspendisse consequat lectus lacus, in venenatis tortor sollicitudin a. Donec tempor id erat id vehicula. Maecenas sed pellentesque eros, ut laoreet sapien. Nunc varius in mi eu iaculis. In id sapien lorem. Vivamus nec bibendum ex, ac feugiat arcu. Pellentesque rutrum tempor diam, id suscipit elit.',
                    'Sed ullamcorper mattis sapien vitae ultrices. Integer sodales lorem urna, quis tempor est posuere in. Nam lacinia vehicula nisl, a maximus nibh mollis ac. Mauris ac egestas mauris, a commodo lorem. Nunc hendrerit aliquam tellus, id fermentum ex accumsan quis. Etiam commodo lorem at ligula scelerisque, sed tincidunt quam sagittis. Fusce ultrices risus ligula, sit amet sodales libero semper eget. Aliquam dignissim purus nec placerat ultrices. Suspendisse quis gravida metus. Sed molestie bibendum nisi nec congue. Suspendisse nunc dui, vestibulum efficitur faucibus non, placerat nec magna. Nunc nec feugiat ante. Sed quis felis eu felis blandit sollicitudin. Ut tincidunt sodales lectus nec cursus. Aenean ante lacus, elementum sit amet enim eu, commodo dictum lectus. Vestibulum id venenatis velit. Nam in facilisis nunc, vitae convallis tortor. Phasellus vitae tortor eu turpis finibus imperdiet at vitae mauris. Vestibulum ac eros ullamcorper, egestas quam a, mattis nunc. Morbi accumsan nulla leo, id ultrices leo dictum commodo. Nullam sed viverra urna. In felis diam, consequat at luctus vel, laoreet et nisl. Duis feugiat, turpis et sodales porta, velit diam viverra enim, facilisis consectetur nulla arcu quis tortor. Praesent at mattis ex. Vivamus in est semper, tincidunt leo id, laoreet enim. Ut ornare eleifend ipsum, a dapibus nunc condimentum a.'
                ]
            };
        }
    };
</script>

<style scoped>
    .NotePageContent {
        flex-grow: 1;

        margin-left: 3em;
        padding-bottom: 3em;

        overflow-y: auto;
    }

    h1 {
        margin: 0 0 0.6em 0;

        font-size: 3em;
        line-height: 1em;
        font-family: 'Francois One', sans-serif;
        font-weight: normal;
    }
    
    p {
        margin: 0;
        font-size: 1em;
        line-height: 1.75em;
    }
    
    p + p {
        margin-top: 1.8em;
    }

    p.code {
        padding: 2em 3em;

        background-color: #153137;
        border-radius: 1em;
        color: #dddddd;
        font-family: 'Space Mono', monospace;
        font-size: 0.8em;
    }
</style>
