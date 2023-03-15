import React from 'react'
import './decoration.css'
import img from '../../assets/logo6.png'
import {Link} from 'react-router-dom'

const Decoration = () => {
  return (
    <div className='container'>

        <div className="list__cards">
            <div className="list__card">
                <img src={img} alt="" className="list__img" />
                <h4 className="list__title">Рожден ден</h4>
                <Link to={'/decoration/birthday'}>
                <button className='green__btn'>Разгледай</button>
                </Link>
            </div>

            <div className="list__card">
                <img src={img} alt="" className="list__img" />
                <h4 className="list__title">Кръщене</h4>
                <Link to={'/decoration/baptism'} >
                <button className='green__btn'>Разгледай</button>
                </Link>
            </div>

            <div className="list__card">
                <img src={img} alt="" className="list__img" />
                <h4 className="list__title">Сватба</h4>
                <Link to={'/decoration/wedding'} >
                <button className='green__btn'>Разгледай</button>
                </Link>
            </div>

            <div className="list__card">
                <img src={img} alt="" className="list__img" />
                <h4 className="list__title">Абитуриентски бал</h4>
                <Link to={'/decoration/prom'}>
                <button className='green__btn'>Разгледай</button>
                </Link>
            </div>

            <div className="list__card">
                <img src={img} alt="" className="list__img" />
                <h4 className="list__title">Юбилей</h4>
                <Link to={'/decoration/anniversary'}>
                <button className='green__btn'>Разгледай</button>
                </Link>
            </div>

            <div className="list__card">
                <img src={img} alt="" className="list__img" />
                <h4 className="list__title">Корпоративни</h4>
                <button className='green__btn'>Разгледай</button>
            </div>

        </div>
    
    </div>
  )
}

export default Decoration