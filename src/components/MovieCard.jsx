import './MovieCard.css';

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img className="poster-image" src={imagesURL + movie.poster_path} alt={movie.title} />
        </div>
    );
};

export default MovieCard;
