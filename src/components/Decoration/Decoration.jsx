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
                <Link to={'/decoration/bday'}>
                <button className='green__btn'>Разгледай</button>
                </Link>
            </div>

            <div className="list__card">
                <img src={img} alt="" className="list__img" />
                <Link to={'/decoration/baptism'} >
                <h4 className="list__title">Кръщене</h4>
                <button className='green__btn'>Разгледай</button>
                </Link>
            </div>

            <div className="list__card">
                <img src={img} alt="" className="list__img" />
                <Link to={'/decoration/wedding'} >
                <h4 className="list__title">Сватба</h4>
                <button className='green__btn'>Разгледай</button>
                </Link>
            </div>

            <div className="list__card">
                <img src={img} alt="" className="list__img" />
                <Link to={'/decoration/prom'}>
                <h4 className="list__title">Абитуриентски бал</h4>
                <button className='green__btn'>Разгледай</button>
                </Link>
            </div>

            <div className="list__card">
                <img src={img} alt="" className="list__img" />
                <Link to={'/decoration/anniversary'}>
                <h4 className="list__title">Ябилей</h4>
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