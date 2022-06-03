import React, { useState } from "react";
import './MovieRow.css';
// import { NavigateBeforeIcon, NavigateNextIcon } from '@mui/icons-material';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                       <div key={key} className="movieRow--item">
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}