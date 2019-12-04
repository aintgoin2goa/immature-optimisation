<template>
    <section class="varients">
        <Card
            v-for="varient of varients"
            v-bind:key="varient.id"
            v-bind:name="varient.name"
            v-bind:id="varient.id"
            v-bind:start="varient.start"
        ></Card>
        <Results />
    </section>
</template>

<style lang="scss">
.varients {
    display: grid;
    grid-template-columns: 25vw 75vw;
    grid-template-rows: 25% 25% 25% 25%;
    height: 90vh;
}
</style>

<script>
import Card from './VarientCard';
import Results from './Results';
import { vanilla, worker, wasm, gpu } from '../varients/';
export default {
    data: () => ({
        varients: [
            {
                name: 'Vanilla',
                start: vanilla,
                id: 'vanilla',
            },
            {
                name: 'Worker',
                id: 'worker',
                start: worker,
            },
            {
                name: 'WASM',
                id: 'wasm',
                start: wasm,
            },
            {
                name: 'GPU',
                id: 'gpu',
                start: gpu,
            },
        ],
    }),
    components: {
        Card,
        Results,
    },
};
</script>
