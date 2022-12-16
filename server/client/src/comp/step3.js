import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Step3 = ({stepthree}) => {

    useEffect(()=>{
        stepthree();
    },[stepthree])


    const navigate = useNavigate()
    const back=()=>{
        navigate('/steps/step2')
    }

    //handling and saving input forms

    const [user,setUser] = useState({loanamount:"",interestrate:"",loantenure:""})

    const handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value})
    }
    const handleSubmit=async(e)=>{
            e.preventDefault();
            const {loanamount,interestrate,loantenure} = user;
            const res = await fetch('/poststep3',{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({loanamount,interestrate,loantenure})
            })
            if(res.status===201){
                window.alert('Thanks your response have been successfully recorded!')
                navigate('/')
            }else{
                window.alert('Please fill correctly!!')
            }
            
        }
    
    
   
  return (
    <div className='step1' style={{"position":"absolute","top":"10rem"}}>
    <div className='step-1box'>
    <h1 style={{"fontSize":"4rem","fontFamily":"monospace"}}>STEP:3</h1>
    <p style={{"fontSize":"2rem","fontFamily":"sans-serif"}}>Enter your loan application details.</p>
    </div>
    <div className='step-1box'>
        <form>
            <label>Enter your loan amount</label><br/><br/>
            <input type='text' name='loanamount' value={user.loanamount} onChange={handleChange} /><br/><br/><br/>

            <label>Enter your interest rate</label><br/><br/>
            <input type='text'  name='interestrate' value={user.interestrate} onChange={handleChange}  /><br/><br/><br/>

            <label>Enter your loan tenure</label><br/><br/>
            <input type='number' name='loantenure' value={user.loantenure} onChange={handleChange}  /><br/><br/><br/><br/>
            <div>
            <button onClick={back} style={{"width":"10rem","height":"4rem","backgroundColor":"purple"}}>back</button>
            <button onClick={handleSubmit} style={{"width":"14rem","height":"5rem","marginLeft":"1.7rem"}}>Submit Details</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Step3