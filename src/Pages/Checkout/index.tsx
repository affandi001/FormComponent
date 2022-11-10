import React from 'react'
import './index.scss'
import Form from '../../Components/CheckoutForm'
import card1 from '../../Assets/Visa.png'
import card2 from '../../Assets/MasterCard.png'
import card3 from '../../Assets/Discover.png'
import card4 from '../../Assets/American.png'
import card5 from '../../Assets/PayPal.png'


function Index () {
  return (
    <>
      <div className='body'>
        <div className=''>
          <h1 className='Selectpayment'>Select Payment Method</h1>
        </div>
        <div className='main'>
        <div className='box'>
            <div>
              <p className='p1'>Credit Card</p>
            </div>
            <div className='creditcards'>
              <img src={card1} alt='' width={50} height={32} />
             
              <img src={card2} alt='' width={50} height={32} />
            
              <img src={card3} alt='' width={50} height={32} />
              
              <img src={card4} alt='' width={50} height={32} />
              </div>
        </div>
        <div className='box-2'>
            <div>
              <p className='p1'>PayPal</p>
            </div>
            <div className='creditcards'>
              <img src={card5} alt='' width={50} height={32} />
      
              </div>
        </div>
        </div>
        <div className=''>
          <Form />
        </div>
      </div>
    </>
  )
}

export default Index
