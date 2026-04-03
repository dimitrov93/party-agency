import React from 'react'
import { useAuthContext } from "../../../context/AuthContext";
import Images from '../../../common/Images/Images';
import { Link } from 'react-router-dom';


const FooterContainer = ({data, isLoading}) => {
    const { user } = useAuthContext();
    return (
        <div className="card__footer__container gallery">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              <Images gallery={data[0].images} isStatic={true} />
              <div className="gallery__text">
                <p>{data[0].folder}</p>
              </div>
              {user.email && (
                <div className="gallery__btns">
                  <Link>
                    <button>Edit</button>
                  </Link>
                  <button>Delete</button>
                </div>
              )}
            </>
          )}
        </div>
      );
    
}

export default FooterContainer