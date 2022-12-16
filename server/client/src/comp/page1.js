import React from 'react'
import { useNavigate } from 'react-router-dom';
import Loan from '../media/loan.jpg'
const Page1 = () => {
  const navigate = useNavigate();
  const nav = ()=>{
    navigate('/steps/step1')
  }
  return (
    <div className='homepage'>
    <div className='box-1'>
    <h1  style={{"marginTop":"4rem","fontSize":"2rem","fontFamily":"arial"}}>Loan App</h1>
    <h1 style={{"marginTop":"8rem","fontFamily":"sans-serif","fontSize":"4.6rem"}}>We are India's top emerging and continuously growing Loan Provider.</h1>
    <p style={{"marginTop":"7rem","fontFamily":"arial","fontSize":"2rem","wordSpacing":"0.5rem"}}>No paperworks, get fast loan from the comfort of your home. Get loan in three easy steps..Bringing a change in
    everyones life.</p> <br/><br/><br />
    <button onClick={nav}>Complete 3 easy steps</button>
    </div>
    <div className='box-1'>
        <img src={Loan} style={{"width":"40rem","height":"40rem","borderRadius":"4rem","marginTop":"4rem","marginLeft":"5rem"}} alt='img' />
    </div>
    </div>
  )
}

export default Page1