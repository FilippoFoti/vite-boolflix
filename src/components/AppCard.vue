<script>
import { store } from "../store";
// import LangFlag from "vue-lang-code-flags";

export default {
    name: "AppCard",
    // components: {
    //     LangFlag
    // },
    props: [
        "movie"
    ],
    data() {
        return {
            store,
            flagsAvailable: { 
                cn: "cn.png",
                de: "de.jpg",
                fr: "fr.png",
                it: "it.jpg",
                jp: "jp.png",
                kr: "kr.png",
                pt: "pt.jpg",
                rs: "rs.jpg",
                es: "sp.jpg",
                en: "uk.jpg",
                us: "us.png",
            }
        }
    },
    computed: {
        votes() {
            return parseInt(this.movie.vote_average / 2)
        }
    },
    methods: {
        getImgPath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
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
            <!-- <li><span>Lingua:</span><lang-flag v-if="movie.original_language" :iso="`${ movie.original_language }`"/></li> -->
            <li v-if="!flagsAvailable[movie.original_language]"><span>Lingua:</span> {{ movie.original_language }}</li>
            <li v-else><span>Lingua:</span><img :src="getImgPath(`../assets/flag/${flagsAvailable[movie.original_language]}`)" alt=""></li>
            <li><span>Voto:</span> <span v-for="i in store.stars"><i :class="(i <= votes ? 'fa-solid fa-star' : 'fa-regular fa-star')"></i></span></li>
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
        height: 400px;

        img {
            height: 100%;
            width: 100%;
        }
    }

    ul {
        list-style-type: none;
        width: 100%;
        height: 100%;
        padding: 40px 20px;
        position: absolute;
        top: 0;
        opacity: 0;
        background-color: rgba( 0, 0, 0, 0.8);
        font-size: 1.3rem;

        li {
            padding: 5px 0;

            span {
                font-weight: bold;

                i {
                    color: rgba(255, 189, 0, 1);
                }
            }

            img {
                width: 25px;
            }
        }

        &:hover {
            opacity: 1;
        }

    }
}
</style>