import { motion } from "framer-motion";

import MovieCard from "../components/MovieCard";

const Carousel = ({reference, size, array}) => {
    return(
        <>
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
        </>
    )
}

export default Carousel;
