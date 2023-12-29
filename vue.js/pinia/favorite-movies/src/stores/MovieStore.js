import { defineStore } from "pinia";

// Определяем Store, передаю в объект уникальный айди в виде строки
// а также параметры{options}
export const useMovieStore = defineStore('MovieStore', {
    // state функция которая возвращает в себе какие то значения
    // доступ к нему можно получить с любого компонента куда импортируется данныц стор
    state: () => ({
        movies: [
            {
              id: 1,
              original_title: "Spider-Man",
              overview:
                "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
              poster_path: "/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
              release_date: "2002-05-01",
              isWatched: false,
            },
            {
              id: 2,
              original_title: "The Batman",
              overview:
                "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
              poster_path: "/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
              release_date: "2022-03-01",
              isWatched: true,
            },
          ],
        activeTab: 2,
    }),
    // getters - геттеры, объект с функциями, которые забирают из стора определенные/нужные нам данные
    getters: {
        watchedMovies() {
            return this.movies.filter( el => el.isWatched);
        },
        totalMoviesCount() {
            return this.movies.length;
        }
    },
    // actions объект с функциями-методами для изменения состояния
    actions: {
        setActiveTab(id) {
            this.activeTab = id;
        },
        toggleWatched(id) {
            const idx = this.movies.findIndex(el => el.id === id);
            this.movies[idx].isWatched = !this.movies[idx].isWatched;
        },
        deleteMovie(id) {
            this.movies = this.movies.filter(el => el.id !== id);
        }
    }
})