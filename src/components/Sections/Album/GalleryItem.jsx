import { Link } from "react-router-dom";
import Images from "../../../common/Images/Images";

const GalleryItem = ({ item, albumType, user, onDelete }) => {
  const location = item.location.split("/").pop();

  return (
    <div className="gallery">
      <Images gallery={item.images} isStatic={true} />
      {user?.email && (
        <div className="gallery__btns">
          <Link to={`/decoration/${albumType}/${encodeURIComponent(location)}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={() => onDelete(item.location)}>Delete</button>
        </div>
      )}
      <div className="gallery__text">
        <p>{item.folder}</p>
      </div>
    </div>
  );
};

export default GalleryItem; 