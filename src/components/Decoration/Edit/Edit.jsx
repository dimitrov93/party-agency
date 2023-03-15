import React, { useEffect, useState } from "react";
import axios from "axios";
import * as URL from "../../../utils/apiConfig";
import { useNavigate, useParams } from "react-router-dom";
import './edit.css'

const Edit = () => {
  const [title, setTitle] = useState("");
    const { albumType, id } = useParams();
    const navigate = useNavigate()
    
    useEffect(() => {
      axios.get(`${URL.BASE_URL}/images/${albumType}/${id}`)
      .then(res => {
        setTitle(res.data.title)
      })
    }, [id, albumType])
    
    const onUpdate = (e) => {
        try {
            axios.put(`${URL.BASE_URL}/images/${albumType}/${id}/edit`, {title: title})  
                .then(res => {
                    navigate(`/decoration/${albumType}`)
                })     
        } catch (error) {
            console.log(error);
        }
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
      };
  return (
    <div className="container">
      <div className="edit__ctn">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          />
      <button className="edit__btn" onClick={onUpdate} >Update</button>
      </div>

    </div>
  );
};

export default Edit;
