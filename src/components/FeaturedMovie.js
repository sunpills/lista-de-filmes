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
                        <a href='/watch/${item.id}' className="featured--watchbutton">Ação</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Aventura</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Animação</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Comédia</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Crime</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Documentário</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Drama</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Família</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Fantasia</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">História</a>
                        <br></br><br></br>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Terror</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Música</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Mistério</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Romance</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Ficção científica</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Cinema TV</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Thriller</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Guerra</a>
                        <a href='/watch/${item.id}' className="featured--watchbutton">Faroeste</a>
                    </div>
                </div>
            </div>
        </section>
    );
}