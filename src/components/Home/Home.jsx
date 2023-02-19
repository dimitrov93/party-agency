import React from 'react'
import './home.css'
import logo from '../../assets/logo.png'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'

const Home = () => {
  return (
    <div className="container">
        <article className='article'>
          <div className='article__left'>
          <img src={pic1} alt="" className='article__logo left' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est nostrum maxime explicabo officiis non?</p>
          </div>

          <div className="article__right">
          <img src={pic2} alt="" className='article__logo right' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est nostrum maxime explicabo officiis non?</p>
          </div>
        </article>



    </div>
  )
}

export default Home