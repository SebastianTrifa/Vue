<template>
  <div>
    <div class="section content-title-group">
      <h2 class="title">Edit Films</h2>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{{ film.name }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
              <label class="label" for="id">Id</label>
              <label class="input" name="id" readonly>{{ film.id }}</label>
            </div>
            <div class="field">
              <label class="label" for="name">Name</label>
              <input class="input" name="name" v-model="film.name" />
            </div>
            <div class="field">
              <label class="label" for="runtime">Runtime</label>
              <input class="input" name="runtime" v-model="film.runtime" />
            </div>
            <div class="field">
              <label class="label" for="director">Director</label>
              <input
                class="input"
                name="director"
                v-model="film.director"
              />
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <button
            class="link card-footer-item cancel-button"
            @click="cancelFilm()"
          >
            <i class="fas fa-undo"></i>
            <span>Cancel</span>
          </button>
          <button class="link card-footer-item" @click="saveFilm()">
            <i class="fas fa-save"></i>
            <span>Save</span>
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { dataService } from '../shared';

export default {
  name: 'FilmDetail',
  props: {
    id: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      film: {},
    };
  },
  async created() {
    this.film = await dataService.getFilm(this.id);
  },

  methods: {
    cancelFilm() {
      this.$router.push({ name: 'films' });
    },
    async saveFilm() {
      await dataService.updateFilm(this.film);
      this.$router.push({ name: 'films' });
    },
  },
};
</script>
