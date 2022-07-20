import React from "react";
import './Book.css';

const GetAllBooks = (props) => {

    const { _id, bookName, authorName, description, price, available, image } = props.book;

        return (
            <div className="card">
                <img src={image} alt="bookName" />
                <h3>{bookName}</h3>
                <article>By {authorName}</article>
                <p>{description}</p>
                <h6>Rs.{price}</h6>
                <h6>Available: {available}</h6>       
            </div>
        )
    }

    export default GetAllBooks;