<template>
    <section class="varients">
        <div v-for="varient of varients" v-bind:key="varient.id">
            <Card v-bind:name="varient.name" v-bind:id="varient.id" />
        </div>
    </section>
</template>

<style lang="scss">
.varients > div {
    display: grid;
    grid-template-columns: 25vw 75vw;
    grid-template-rows: 25% 25% 25% 25%;
    height: 90vh;
}
</style>

<script>
import Card from './VarientCard';
import { vanilla } from '../varients/';
export default {
    data: () => ({
        varients: [
            {
                name: 'Vanilla',
                start: vanilla,
                id: 'vanilla',
            },
        ],
    }),
    components: {
        Card,
    },
};
</script>
