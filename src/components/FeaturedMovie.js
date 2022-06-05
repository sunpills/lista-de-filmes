import React from 'react';
import './FeaturedMovie.css';

export default () => {
    return (
        <section className="featured">
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--info">
                        <div className="header-title"><h2>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h2></div>
                    </div>
                        <div className="header-subtitle">Filtre por:</div>
                    <div className="featured--buttons">
                        <a href='/' className="featured--watchbutton">Ação</a>
                        <a href='/' className="featured--watchbutton">Aventura</a>
                        <a href='/' className="featured--watchbutton">Animação</a>
                        <a href='/' className="featured--watchbutton">Comédia</a>
                        <a href='/' className="featured--watchbutton">Crime</a>
                        <a href='/' className="featured--watchbutton">Documentário</a>
                        <a href='/' className="featured--watchbutton">Drama</a>
                        <a href='/' className="featured--watchbutton">Família</a>
                        <a href='/' className="featured--watchbutton">Fantasia</a>
                        <a href='/' className="featured--watchbutton">História</a>
                        <a href='/' className="featured--watchbutton">Terror</a>
                        <a href='/' className="featured--watchbutton">Música</a>
                        <a href='/' className="featured--watchbutton">Mistério</a>
                        <a href='/' className="featured--watchbutton">Romance</a>
                        <a href='/' className="featured--watchbutton">Ficção científica</a>
                        <a href='/' className="featured--watchbutton">Cinema TV</a>
                        <a href='/' className="featured--watchbutton">Thriller</a>
                        <a href='/' className="featured--watchbutton">Guerra</a>
                        <a href='/' className="featured--watchbutton">Faroeste</a>
                    </div>
                </div>
            </div>
        </section>
    );
}