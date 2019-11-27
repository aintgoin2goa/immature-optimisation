<template>
    <section class="header">
        <h1 class="header__title">{{ title }}</h1>
    </section>
</template>

<style lang="scss">
@import '../sass/colors';
@import '../sass/dimensions';
.header {
    width: 100%;
    padding: padding(1);
    min-height: 10vw;
    background: linear-gradient(to right, $dark-1, $mid);
    display: flex;
    align-items: center;
}

.header__title {
    font-size: 60px;
    margin: 0;
    color: white;
    text-transform: uppercase;
    text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.7);
}
</style>

<script>
export default {
    data() {
        return {
            title: 'Immature Optimisation',
        };
    },
};
</script>
