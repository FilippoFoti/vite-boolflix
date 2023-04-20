<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store";
import axios from "axios";

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    performSearch() {
      if (this.store.curSearch) {
        this.getMovies();
        this.getSeries();
      }
    },
    getMovies() {
      axios.get(`${this.store.apiBaseUrl}/search/movie`, {
        params: {
          api_key: this.store.apiKey,
          query: this.store.curSearch
        }
      }).then((resp) => {
        this.store.movies = resp.data.results;
      }).catch(err => {
        console.log(err);
      })
    },
    getSeries() {
      axios.get(`${this.store.apiBaseUrl}/search/tv`, {
        params: {
          api_key: this.store.apiKey,
          query: this.store.curSearch
        }
      }).then((resp) => {
        this.store.series = resp.data.results;
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<template>
  <AppHeader @search="performSearch" />
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss"
</style>