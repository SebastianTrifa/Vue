<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">Films</h2>
          <ul>
            <li v-for="film in films" :key="film.id">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div :key="film.name" class="name">
                      {{ film.name }}
                    </div>
                    <div class="director">{{ film.director }}</div>
                  </div>
                </div>
                <footer class="card-footer">
                  <router-link
                    tag="button"
                    class="link card-footer-item"
                    :to="{ name: 'film-detail', params: { id: film.id } }"
                  >
                    <i class="fas fa-check"></i>
                    <span>Select</span>
                  </router-link>
                </footer>
              </div>
            </li>
          </ul>
        </div>
        <div class="notification is-info" v-show="message">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { dataService } from '../shared';

export default {
  name: 'Films',
  data() {
    return {
      films: [],
      message: '',
    };
  },
  async created() {
    await this.loadFilms();
  },
  methods: {
    async loadFilms() {
      this.films = [];
      this.message = 'getting the films, please be patient';

      this.films = await dataService.getFilms();

      this.message = '';
    },
  },
};
</script>
