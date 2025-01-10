import React, { useEffect, useState } from "react";
import axios from "axios";
import * as URL from "../../../utils/apiConfig";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import './edit.css'

const Edit = () => {
  const [title, setTitle] = useState("");
    const { albumType } = useParams();
    const navigate = useNavigate()
    const location = useLocation();
    const decodedLocation = decodeURIComponent(location.pathname).split('/');
    const type = decodedLocation[1]
    const album = decodedLocation[2]
    const oldAlbumName = decodedLocation[3]

    useEffect(() => {
      axios.get(`${URL.BASE_URL}/uploads/images/${type}/${album}/${oldAlbumName}/`, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      })
      .then(res => {
        setTitle(res.data[0].folder)
      })
    }, [album, oldAlbumName, type])
    
    const onUpdate = (e) => {
        try {
            axios.put(`${URL.BASE_URL}/uploads/images/${type}/${album}/${oldAlbumName}/`, {newAlbumName: title})  
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
        <label htmlFor="title">Име на темата:</label>
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
