<template>
    <div class="results">
        <h2 class="results__title">Results</h2>
        <table class="results__table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Runs</th>
                    <th>Min</th>
                    <th>Max</th>
                    <th>Average</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="result in results()" v-bind:key="result.name">
                    <td>{{result.name}}</td>
                    <td>{{result.runs}}</td>
                    <td>{{result.min}}ms</td>
                    <td>{{result.max}}ms</td>
                    <td>{{result.average}}ms</td>
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

interface CombinedResult {
    name: string;
    runs: number;
    min: number;
    max: number;
    average: number;
}

const getTimes = (name: string) =>
    store.results.filter(r => r.name === name).map(r => r.time);

export default Vue.extend({
    data: () => ({
        store,
    }),
    methods: {
        results: function(): CombinedResult[] {
            const resultNames = this.names();
            const combinedResults = resultNames.map(name => {
                return {
                    name,
                    min: this.min(name),
                    max: this.max(name),
                    runs: this.count(name),
                    average: this.average(name),
                };
            });
            return combinedResults.sort(function(
                a: CombinedResult,
                b: CombinedResult,
            ): number {
                return a.average - b.average;
            });
        },
        names: function() {
            const names = store.results.map(r => r.name);
            return [...new Set(names)];
        },
        count: function(name: string): number {
            return store.results.filter(r => r.name === name).length;
        },
        min: function(name: string): number {
            return Math.min(...getTimes(name));
        },
        max: function(name: string): number {
            return Math.max(...getTimes(name));
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