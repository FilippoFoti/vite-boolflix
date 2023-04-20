<script>
import { store } from "../store"

export default {
    name: "AppCard",
    props: [
        "movie"
    ],
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="card">
        <figure>
            <img :src="`${store.imgPath}${movie.poster_path}`" alt="Copertina non disponibile">
        </figure>
        <ul>
            <li v-if="movie.title"><span>Titolo:</span> {{ movie.title }}</li>
            <li v-else><span>Name:</span> {{ movie.name }}</li>
            <li v-if="movie.original_title"><span>Titolo Originale:</span> {{ movie.original_title }}</li>
            <li><span>Lingua:</span> {{ movie.original_language }}</li>
            <li><span>Voto:</span> {{ movie.vote_average }}</li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.card {
    color: $second;
    width: 100%;
    // height: 400px;
    position: relative;

    figure {
        height: 350px;

        img {
            height: 100%;
            width: 100%;
        }
    }

    ul {
        list-style-type: none;
        width: 100%;
        height: 100%;
        padding: 30px 10px;
        position: absolute;
        top: 0;
        opacity: 0;
        background-color: rgba( 0, 0, 0, 0.8);

        li {

            span {
                font-weight: bold;
            }
        }

        &:hover {
            opacity: 1;
        }
    }
}
</style>