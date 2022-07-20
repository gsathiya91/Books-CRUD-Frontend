import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function AddBook() {
  
    const [books, setBooks]=useState({
        bookName:"",
        authorName:"",
        description:"",
        price:"",
        available:"",
        image:""
    });
    const navigate = useNavigate();
    
    const handleChange = (e)=>{
        setBooks((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://bookstoreusingcrud.herokuapp.com/addnew`, {
                bookName:String(books.bookName),
                authorName:String(books.authorName),
                description:String(books.description),
                price:Number(books.price),
                available:String(books.available),
                image:String(books.image)
            })
            response.data && navigate("/getallbooks");
            toast.success(response.data);
        } catch (err) {
            toast.error(err.response.data);
        }
    };
    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <Box className="box">
                    <TextField
                        label="Book Name"
                        variant="outlined"
                        required
                        name="bookName"
                        value={books.bookName}
                        onChange={handleChange} /><br />
                    <TextField
                       
                        label="Author Name"
                        variant="outlined"
                        required
                        name="authorName"
                        value={books.authorName}
                        onChange={handleChange} /><br />
                    <TextField
                      
                        label="Description"
                        variant="outlined"
                        required
                        name="description"
                        value={books.description}
                        onChange={handleChange} /><br />
                    <TextField
                        
                        label="Price"
                        variant="outlined"
                        required
                        name="price"
                        value={books.price}
                        onChange={handleChange} /><br />
                    <TextField
                        type="number"
                      
                        label="Available"
                        variant="outlined"
                        required
                        name="available"
                        value={books.available}
                        onChange={handleChange} /><br />
                    <TextField
                       
                        label="Image Url"
                        variant="outlined"
                        required
                        name="image"
                        value={books.image}
                        onChange={handleChange} /><br />
                    <Button
                        type="submit"
                        class="btn btn-success">Add Book</Button>
                </Box>
            </form>
        </div>
    )
}

export default AddBook;