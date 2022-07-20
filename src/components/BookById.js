import axios from "axios";
import { Box, Button, FormLabel, Input, TextField } from '@mui/material';
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function GetBookById() {

    const [books, setBooks] = useState({});

    const id = useParams().id;

    const navigate = useNavigate();

    useEffect(() => {
        getBookById();
    }, [id])

    const getBookById = async () => {
        const response = await axios.get(`https://bookstoreusingcrud.herokuapp.com/get/${id}`)
        setBooks(response.data.book);
    }

    const handleChange = (e) => {
        setBooks((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://bookstoreusingcrud.herokuapp.com/update/${id}`, {
               bookName:String(books.bookName),
                authorName:String(books.authorName),
                description:String(books.description),
                price:Number(books.price),
                available:String(books.available),
                image:String(books.image)
            });
            response.data && navigate("/getallbooks");
            toast.success(response.data);
        } catch (err) {
            toast.error(err.response.data);
        }
    };


    return (
        <div className="container">
            {books && (<form className="form" onSubmit={handleSubmit}>
                <Box className="box">
                    <div class="form-group">
                        <label>Book Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Book Name"
                            required
                            name="bookName"
                            value={books.bookName}
                            onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <label>Author Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Author Name"
                            required
                            name="authorName"
                            value={books.authorName}
                            onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Description"
                            required
                            name="description"
                            value={books.description}
                            onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Price"
                            required
                            name="price"
                            value={books.price}
                            onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <label>Available</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Available"
                            required
                            name="available"
                            value={books.available}
                            onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <label>Image Url</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Image Url"
                            required
                            name="image"
                            value={books.image}
                            onChange={handleChange} />
                    </div>

                    <Button
                        type="submit"
                        class="btn btn-success update">Update Book</Button>
                </Box>
            </form>)}
        </div>
    )
}

export default GetBookById;