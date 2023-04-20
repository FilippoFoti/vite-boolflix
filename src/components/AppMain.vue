<script>
import AppCard from "./AppCard.vue";
import { store } from "../store";

export default {
    name: "AppMain",
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <main>
        <div class="container">
            <h2>Film</h2>
            <div class="row">
                <div class="col" v-for="movie in store.movies">
                    <AppCard :movie="movie" />
                </div>
            </div>
        </div>
        <div class="container">
            <h2>Serie TV</h2>
            <div class="row">
                <div class="col" v-for="movie in store.series">
                    <AppCard :movie="movie"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

main {
    // height: 100vh;
    padding: 80px 0;

    .container {
        max-width: 1200px;
        width: 90%;
        margin: 0 auto;
        // height: 50vh;

        h2 {
            padding: 40px 0;
            font-size: 2rem;
            color: $second;
            font-weight: bold;
        }

        .row {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;

            .col {
                width: calc(100% / 4 - 15px);
                border: 1px solid $third;
                // height: 400px;
            }
        }
    }
}
</style>