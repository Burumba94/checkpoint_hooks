import React from 'React';

const MovieCard = ({ title, description, posterUrl, rating }) => {
    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={posterUrl} alt={title} />
            <p>Classement : {rating} </p>
        </div>
    );
};