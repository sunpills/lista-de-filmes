/* eslint-disable import/no-anonymous-default-export */
import React, { } from "react";
import './MovieRow.css';
import Moment from 'moment'
import { Link } from 'react-router-dom';

export default ({ items }) => {
    const formatDate = Moment().format("DD MM YY");

    return (<div className="movieRow" >
        <div className="movieRow--listarea">
            <div className="movieRow--list" > {items.results.length > 0 && items.results.map((item, key) => (
                <ul key={key} className="movieRow--item" >
                    <li><img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                       <h3 className="movie-title">{item.original_title}</h3>
                       <p>{Moment(item.release_date).format("DD MMM YY")}</p></li>
                       <path fill-rule="evenodd" clip-rule="evenodd" d="M340.044 85.2682C341.507 85.0006 342.863 84.6363 344.226 84.5446C344.951 84.495 345.79 84.5669 346.391 85.2087C347.251 86.1306 348.041 85.8258 348.917 85.7961C350.655 85.7391 352.398 85.9919 354.131 86.262C354.441 86.3116 354.72 87.0575 355.132 87.6523C354.432 90.75 353.001 91.3572 351.504 91.6819C350.765 91.8405 349.978 91.5654 349.274 91.9198C345.819 93.6496 342.304 93.3447 338.789 93.2977C331.506 93.201 324.222 93.1093 316.938 93.1093C307.386 93.1068 297.83 92.9036 288.283 93.3125C275.714 93.8553 263.156 95.1514 250.588 95.6693C238.508 96.1674 226.503 98.6531 214.452 99.8352C212.075 100.068 209.674 100.078 207.305 99.7088C205.701 99.4635 205.119 96.1352 206.175 93.771C206.526 92.9804 207.208 92.4501 207.773 92.3138C209.143 91.9842 210.537 92.0412 211.914 91.7884C221.176 90.0859 230.435 88.3437 239.695 86.6139C239.821 86.5891 239.944 86.5296 240.07 86.5172C247.961 85.7787 255.853 85.0377 263.744 84.3091C273.393 83.4195 283.042 82.5347 292.691 81.6599C293.317 81.6029 293.959 81.4865 294.574 81.6574C299.709 83.0899 304.843 81.6401 309.976 81.7665C313.108 81.8433 316.247 80.8372 319.371 81.997C319.617 82.0887 319.881 82.215 320.12 82.1382C325.497 80.453 330.894 82.5496 336.278 81.826C337.859 81.6128 339.328 82.1234 340.044 85.2682Z" fill="url(#paint0_linear)"></path>
                </ul>
            ))
            } </div>
        </div>
    </div>
    );
}