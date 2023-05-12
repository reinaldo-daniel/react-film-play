import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import MovieCard from "../components/MovieCard";
import './Carousel.css'

const Carousel = ({reference, size, array, title}) => {
    return(
        <div className="componente">
           <div className="labelCarousel">
                <h2>{title}</h2>
                <Link className="verMais">Ver Mais</Link>
           </div>
            <motion.div 
                ref={reference} 
                className="carousel" 
                whileTap={{ cursor: "grabbing" }}
            >
                <motion.div 
                    className="inner" 
                    drag="x"
                    initial={{ x: 200 }}
                    animate={{ x: 0 }} 
                    dragConstraints={{ 
                        right: 0, 
                        left: -size 
                    }}
                >
                    {array.map(
                        (movie) => 
                                <MovieCard 
                                    key={movie.id}
                                    movie={movie}
                                />
                    )}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Carousel;
