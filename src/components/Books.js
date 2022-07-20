import React, { useEffect, useState } from "react";
import axios from 'axios';
import AllBooks from "./AllBooks";
import "./Book.css";

function GetBooks() {

    const URL = "https://bookstoreusingcrud.herokuapp.com/get";

    const [books, setBooks] = useState([]);

    const getAllBooks = async () => {
        const res = await axios.get(URL);
        setBooks(res.data.books);
    };

    useEffect(() => {
        getAllBooks();
    }, []);

    return (
        <div>
            <ul className="list">
                {books && books.map((book, i)=>(
                   <li className="book" key={i}>
                    <AllBooks book={book} />
                   </li>
                ))}
            </ul>
        </div>

    )
};

export default GetBooks;
