import React, { useEffect, useState } from "react";
import axios from "axios";
import * as URL from "../../../utils/apiConfig";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [title, setTitle] = useState("");
    const { albumType, id } = useParams();
    const navigate = useNavigate()
    
    useEffect(() => {
      axios.get(`${URL.BASE_URL}/images/${albumType}/${id}`)
      .then(res => {
        setTitle(res.data.title)
      })
    }, [])
    
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
      <div >
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          />
      </div>
      <button onClick={onUpdate} >Update</button>

    </div>
  );
};

export default Edit;
