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
    <h3 v-if="!store.movies.length">Inizia la tua ricerca..</h3>
    <main v-else>
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
                    <AppCard :movie="movie" />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

h3 {
    color: white;
    text-align: center;
    font-size: 2.5rem;
    padding-top: 120px;
}

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

        // STYLE SCROLLBAR -----------------------------------------------------------------------------------
        .row::-webkit-scrollbar {
            background-color: transparent;
            border-radius: 10px;
            height: 8px;
        }
        .row::-webkit-scrollbar-track {
            background-color: transparent;
            border-radius: 10px;
        }

        .row::-webkit-scrollbar-thumb {
            background-color: $third;
            border-radius: 10px;
        }

        // /STYLE SCROLLBAR -----------------------------------------------------------------------------------

        .row {
            display: flex;
            // flex-wrap: wrap;
            gap: 20px;
            width: 100%;
            overflow-x: scroll;
            white-space: nowrap;
            padding-bottom: 2px;

            .col {
                width: calc(100% / 5 - 20px);
                min-width: 13vw;
                border: 1px solid $third;
                white-space: normal;
                // height: 400px;
            }
        }
    }
}</style>