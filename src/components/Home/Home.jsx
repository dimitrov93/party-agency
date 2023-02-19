import React from 'react'
import './home.css'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'

const Home = () => {
  return (
    <div className="container">
      <h1 className='home__title'>Party agency “Fairy tale”</h1>
        <article className='article'>

          <div className='article__left slide-in-left'>
          <img src={pic1} alt="" className='article__logo left' />
            <div className='article__header'>
              <h2>Добре дошли!</h2>
              <h3>Ние сме тук да сбъднем Вашия мечтан празник!</h3>
            </div>
          </div>

          <div className="article__right slide-in-right">
          <img src={pic2} alt="" className='article__logo right ' />
            <div className='article__header'>
              <h3>Направете всеки Вас спомен красив!</h3>
            </div>
          </div>

          <div className="article__left slide-in-bottom">
          <img src={pic3} alt="" className='article__logo '  />
            <div className='article__header'>
              <h3>Нека напишем вашата незабравима приказка заедно!</h3>
            </div>
          </div>



        </article>
    </div>
  )
}

export default Home