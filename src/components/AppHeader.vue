<script>
import { store } from "../store";

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
    emits: [
        "search"
    ]
}
</script>

<template>
    <header>
        <div class="container">
            <figure>
                <img src="../assets/img/logo-boolflix.png" alt="">
            </figure>
            <nav>
                <input type="text" placeholder="Cerca in Bollflix.." @keyup.enter="$emit('search')" v-model.trim="store.curSearch">
                <!-- <button>Cerca &nbsp; <i class="fa-solid fa-magnifying-glass"></i></button> -->
            </nav>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

header {
    height: 80px;
    width: 100%;
    position: fixed;
    z-index: 999;
    background-color: black;

    .container {
        height: 80px;
        padding: 0 30px;
        @include flex(center, space-between, row);

        img {
            width: 150px;
        }

        nav {
            @include flex(center, center, row);
            gap: 20px;

            input {
                padding: 8px 6px;
                border-radius: 10px;
                font-size: 1.1rem;
                font-weight: bold;
                outline: 0;
                color: $first;
            }

            button {
                padding: 8px 13px;
                border-radius: 10px;
                background-color: $second;
                color: $background;
                font-size: 1.1rem;
                font-weight: bold;
                @include flex(center, center, row);

            }
        }
    }
}
</style>