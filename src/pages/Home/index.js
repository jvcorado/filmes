import { Container, MovieList, Movie } from "../Home/styles";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { APIKey } from "../../config/key"

function Home(){

    //estado uma variavel que esta sempre atualizando
    const [movies, SetMovies] = useState([]) //var e function
    const image_path = "https://image.tmdb.org/t/p/w500/"

    useEffect(()=>{
        //CONSUMIR API

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=31ee191576523caf442f8a868bd8f945&language=en-US&page=1')
        .then(response => response.json())
        .then(data => SetMovies(data.results))
    },[])//ARRAY DE DEPENDENCIA

    return(
        <Container>
            <h1>The Movies</h1>
            <MovieList>
                {movies.map(movie =>{
                    return(
                        <Movie key = {movie.id}>
                            <Link to={`/details/${movie.id}`}>
                                <img src={`${image_path}${movie.poster_path}`} alt={movie.title}/>
                            </Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )   
}

export default Home;