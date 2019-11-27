<template>
    <div class="results">
        <h2 class="results__title">Results</h2>
        <table class="results__table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Result</th>
                    <th>Time</th>
                    <th>Diff</th>
                    <th>Average</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(result, index) in store.results" v-bind:key="index">
                    <td>{{result.name}}</td>
                    <td>{{result.result}}</td>
                    <td>{{result.time}}ms</td>
                    <td>{{diff(result.time)}}ms</td>
                    <td>{{average(result.name)}}ms</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="scss">
@import '../sass/colors';
.results {
    grid-row: 1 / 4;
    grid-column: 2;
}
.results__title {
    font-size: 1.8em;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    padding: 15px;
    background-color: $light-2;
}
.results__table {
    width: 100%;
    border: 1px sold $dark-1;
    border-collapse: collapse;
    & th {
        background-color: $mid;
        color: white;
    }
    & th,
    & td {
        border: 1px solid $dark-1;
        padding: 1em;
    }
    & tr:nth-child(even) {
        background-color: lighten($light-1, 10%);
    }
}
</style>
<script lang="ts">
import Vue from 'vue';
import store from '../lib/store';
export default Vue.extend({
    data: () => ({
        store,
    }),
    methods: {
        diff: function(current: number): number {
            return store.results[0].time - current;
        },
        average: function(name: string): number {
            const times = store.results
                .filter(r => r.name === name)
                .map(r => r.time);
            const total = times.reduce((p, c) => p + c, 0);
            return Math.round(total / times.length);
        },
    },
});
</script>