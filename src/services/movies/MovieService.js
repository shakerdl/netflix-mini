import axios from "axios";

const getMovie = async (id) => {
    try {
        const res = await axios.get("/movies/find/" + id, {
        headers: {
            token: process.env.REACT_APP_API_TOKEN,
        },
        });
        debugger
        return res.data;
    } catch (err) {
        console.log("Error:", id)
        console.log("there is no video for this movie",err);
    }
}




const MovieService = {
    getMovie
}

export default MovieService;