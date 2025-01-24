import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineFileAdd } from "react-icons/ai";

const AddButton = ({ pathname }) => {
  
  return (
    <div className="hidden_content">
      <Link to={`${pathname}/add`}>
        <button className="hidden__btn">
          <AiOutlineFileAdd />
        </button>
      </Link>
    </div>
  );
};

export default AddButton; 