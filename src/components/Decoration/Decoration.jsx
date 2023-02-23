import React from 'react'
import './decoration.css'
import img from '../../assets/logo4.png'
import img2 from '../../assets/logo2.png'
import img3 from '../../assets/logo3.png'
import {Link} from 'react-router-dom'

const Decoration = () => {
  return (
    <div className='container'>

        <div className="list__cards">
            <div className="list__card">
                <img src={img} alt="" className="list__img" />
                <h4 className="list__title">Рожден ден</h4>
                <Link to={'/decoration/bday'}>
                <button className='green__btn'>Разгледай</button>
                </Link>
            </div>

            <div className="list__card">
                <img src={img2} alt="" className="list__img" />
                <Link to={'/decoration/baptism'} >
                <h4 className="list__title">Кръщене</h4>
                <button className='green__btn'>Разгледай</button>
                </Link>
            </div>

            <div className="list__card">
                <img src={img3} alt="" className="list__img" />
                <h4 className="list__title">Сватба</h4>
                <button className='green__btn'>Разгледай</button>
            </div>

            <div className="list__card">
                <img src={img} alt="" className="list__img" />
                <h4 className="list__title">Погача</h4>
                <button className='green__btn'>Разгледай</button>
            </div>

            <div className="list__card">
                <img src={img2} alt="" className="list__img" />
                <h4 className="list__title">Ябилей</h4>
                <button className='green__btn'>Разгледай</button>
            </div>

            <div className="list__card">
                <img src={img3} alt="" className="list__img" />
                <h4 className="list__title">Корпоративни</h4>
                <button className='green__btn'>Разгледай</button>
            </div>

        </div>
        



    </div>
  )
}

export default Decoration