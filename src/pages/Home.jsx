import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import Carousel from "../components/Carousel";
import "./Home.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const carousel = useRef();
    const [widthCarousel, setWidthCarousel] = useState(0);
    const [topMovies, setTopMovies] = useState([]);
    const [newMovies, setNewMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    const getUpcomingMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setUpcomingMovies(data.results);
    };

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
    };

    const getNewMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setNewMovies(data.results);
    };

    useEffect(() => {
        setWidthCarousel(carousel.current?.scrollWidth - carousel.current?.offsetWidth);

        const popularUrl = `${moviesURL}popular?${apiKey}&language=pt-BR`;
        const newUrl = `${moviesURL}now_playing?${apiKey}&language=pt-BR`;
        const upcoming = `${moviesURL}upcoming?${apiKey}&language=pt-BR`;

        getUpcomingMovies(upcoming);
        getTopRatedMovies(popularUrl);
        getNewMovies(newUrl);
    }, []);

    useEffect(() => {
        setWidthCarousel(
          carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0
        );
      }, [upcomingMovies]);

    return (
        <div className="container">
            <div className="banner" />
            
            <div className="conteudo">
                <div className="teste">
                    <Carousel
                        title={'Filmes populares:'}
                        reference={carousel}
                        size={widthCarousel}
                        array={topMovies}   
                    />

                    <Carousel
                        title={'Lançados recentemente:'}
                        reference={carousel}
                        size={widthCarousel}
                        array={newMovies}   
                    />

                    <Carousel
                        title={'Próximos filmes á serem lançados:'}
                        reference={carousel}
                        size={widthCarousel}
                        array={upcomingMovies}   
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
