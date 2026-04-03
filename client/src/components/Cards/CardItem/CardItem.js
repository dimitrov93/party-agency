import React from 'react'

const CardItem = (props) => {
    return (
        <div className="card__items">
          <div className="card__img">
            {/* <img src={props.imgSrc} alt="" /> */}
          </div>
          <div className="card__text">
            <p>{props.text}</p>
          </div>
        </div>
      );
}

export default CardItem