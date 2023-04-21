<script>
// import { store } from "../store";

export default {
    name: "AppDetails",
    // data() {
    //     return {
    //         store
    //     }
    // }
}
</script>

<template>
    <div class="container">
        <ul>
            <li>
                <span>Attori: </span>
            </li>
            <li>
                <span>Generi: </span>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.container {
    padding-top: 5px;

    ul {
        list-style-type: none;

        li {
            color: white;
            padding: 5px 0;
            font-size: 1rem;

            span {
                font-weight: bold;
            }
        }
    }
}

</style>