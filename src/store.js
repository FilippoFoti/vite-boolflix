import { reactive } from "vue";

export const store = reactive({
    apiKey:"1a0d4d0120433f3df5316f7a976a1293",
    apiUrlMovie: "https://api.themoviedb.org/3/search/movie",
    apiUrlTv: "https://api.themoviedb.org/3/search/tv",
    curSearch: "",
})