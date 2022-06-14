import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { APIKey } from "../../config/key";
import { Container } from "./styles";

const Details = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
            .then(response => response.json())
            .then(data => {
                const movie = {
                    id,
                    title: data.title,
                    sinopse: data.overview,
                    image: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
                    releaseDate: data.release_date
                }

                setMovie(movie)

            })
    }, [id])

    return (
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.title} />

                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>{movie.sinopse}</span>
                    <span className="release-date">Data de lançamento: {movie.releaseDate}</span>
                    <Link to='/'><button type="button">Menu Principal</button></Link>
                </div>
            </div>
        </Container>
    )
}

export default Details;