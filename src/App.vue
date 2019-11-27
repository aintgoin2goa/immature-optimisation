<template>
    <div>
        <Heading></Heading>
        <VarientCards></VarientCards>
    </div>
</template>

<style lang="scss">
body,
html {
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
}

* {
    box-sizing: border-box;
}
</style>

<script>
import Heading from './components/Heading.vue';
import VarientCards from './components/VarientCards.vue';

export default {
    components: {
        Heading,
        VarientCards,
    },
    data() {
        return {};
    },
};
</script>
