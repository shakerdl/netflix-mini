import config from "../../config"

const MoviesId = [458156,320288,373571]
// 1. https://www.themoviedb.org/movie/458156-john-wick-chapter-3
// 2. https://www.themoviedb.org/movie/320288-dark-phoenix
// 3. https://www.themoviedb.org/movie/373571-godzilla-king-of-the-monsters

// TODO: move ID and URL to monogoDB

const API_URL = "https://api.themoviedb.org/3/"
const fetch = [
    fetch(`${API_URL}movie/${MoviesId[0]}?api_key=${config.NETFLIX_MINI_API_KEY}`),
    

]









// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err)),