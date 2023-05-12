import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

import "./Navbar.css";

const Navbar = ({ isScrolled }) => {
    const [active, setMode] = useState(false);
    const [widthWindow, setWidthWindow] = useState(window.innerWidth);

    useEffect(() => {
        const updateWidthWindow = () => {
            setWidthWindow(window.innerWidth);
        };
    
        window.addEventListener('resize', updateWidthWindow);
    
        return () => {
            window.removeEventListener('resize', updateWidthWindow);
        };
    }, []);

    const ToggleMode = () => {
        setMode(!active);
    }

    const backgroundStyle = () => {
        return {
            background: active 
                ? "rgba(0, 0, 0, 0.800)" 
                : isScrolled
                    ? "black" 
                    : "rgba(0, 0, 0, 0.600)",
          };
    };

    return (
        <>
            <header style={backgroundStyle()} className={active ? 'menuActive' : ''}>
                <Link to={'/'} className={`logo ${active ? 'disableClass' : ''}`}>
                    FilmPlay
                </Link>

                <nav className={active ? 'showNav' : ''}>
                    <Link>Filmes</Link>
                    <Link>Séries</Link>
                    <Link>Programas de TV</Link>
                    <Link>Pessoas</Link>
                </nav>

                <Link to={'/'}>
                    <div className="contato">
                        Contato
                    </div>
                </Link>

                {widthWindow < 768
                    ? (
                        <div className={active ? 'icon' : ''}>
                            <Icon
                                type={active ? 'closeIcon' : 'menuIcon'}
                                size={43}
                                className={'menuIcon'}
                                color={'white'}
                                cursor={'pointer'}
                                onClick={ToggleMode}
                            />
                        </div>
                    )
                    : null
                }
            </header>
        </>
    );
};

export default Navbar;
