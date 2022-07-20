import React from "react";
import { Button } from "@mui/material";
import './Book.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AllBooks = (props) => {

    const { _id, bookName, authorName, description, price, available, image } = props.book;

    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`https://bookstoreusingcrud.herokuapp.com/delete/${_id}`)
          
          response.data && navigate("/")
           
            toast.success(response.data);
        } catch (err) {
            toast.error(err.response.data);
        }
    };
        return (
            <div className="card">
                <img src={image} alt="bookName" />
                <h3>{bookName}</h3>
                <article>By {authorName}</article>
                <p>{description}</p>
                <h6>Rs.{price}</h6>
                <h6>Available: {available}</h6>
                <div>
                    <Button LinkComponent={Link} to={`/getbook/${_id}`} class="btn btn-success edit">Edit</Button>&nbsp;&nbsp;
                    <Button class="btn btn-danger" onClick={handleDelete}>Delete</Button>
                </div>
            </div>
        )
    }

    export default AllBooks;