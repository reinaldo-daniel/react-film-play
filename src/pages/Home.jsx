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

        getTopRatedMovies(popularUrl);
        getNewMovies(newUrl);
    }, []);

    useEffect(() => {
        setWidthCarousel(
          carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0
        );
      }, [topMovies]);

    console.log(newMovies);

    return (
        <div className="container">
            <div className="banner" />
            <div className="conteudo">
                <div className="labelCarousel">
                    <h2 className="title">Melhores filmes:</h2>
                    <Link className="verMais">Ver Mais</Link>
                </div>
                <div className="teste">
                    <Carousel
                        reference={carousel}
                        size={widthCarousel}
                        array={topMovies}   
                    />
                </div>
                <Carousel
                        reference={carousel}
                        size={widthCarousel}
                        array={topMovies}   
                />
                <Carousel
                        reference={carousel}
                        size={widthCarousel}
                        array={topMovies}   
                />
            </div>
        </div>
    );
};

export default Home;
