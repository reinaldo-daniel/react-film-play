import './MovieCard.css';

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie }) => {
    var maxCaracter = 70;
    
    const limitCaracter = (overview) => {
        return overview.length >= maxCaracter 
            ? overview.slice(0, maxCaracter)+'...'
            : overview; 
    }

    return (
        <div className="movie-card">
            <img className="poster-image" src={imagesURL + movie.poster_path} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{limitCaracter(movie.overview)}</p>
        </div>
    );
};

export default MovieCard;
