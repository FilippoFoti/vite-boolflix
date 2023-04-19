<script>
export default {
    name: "AppCArd",
}
</script>

<template>
    <div class="card">
        <figure>
            <img src="" alt="Copertina">
        </figure>
        <ul>
            <li><span>Titolo:</span> {{  }}</li>
            <li><span>Titolo Originale:</span> {{  }}</li>
            <li><span>Lingua:</span> {{  }}</li>
            <li><span>Voto:</span> {{  }}</li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.card {
    color: $second;
    height: 400px;
    width: 100%;

    ul {
        list-style-type: none;
        width: 95%;
        margin: 0 auto;
        padding-top: 30px;

        li {

            span {
                font-weight: bold;
            }
        }
    }
}
</style>