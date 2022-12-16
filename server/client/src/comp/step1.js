import React, {  useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Step = ({idone}) => {

    useEffect(()=>{
        idone();
    },[idone])
    
    const navigate = useNavigate()
    const back=()=>{
        navigate('/')
    }



    //handling and saving input forms

    const [user,setUser] = useState({firstname:"",lastname:"",age:"",mobile:""})

    const handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value})
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(user);
        const {firstname,lastname,age,mobile} = user;
        const res = await fetch('/poststep1',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({firstname,lastname,age,mobile})
        })
        if(res.status===201){
            window.alert('Success')
            navigate('/steps/step2')
        }else{
            window.alert('Please fill correctly!!')
        }
        
    }
  return (
    <div className='step1' style={{"position":"absolute","top":"10rem"}}>
    <div className='step-1box'>
    <h1 style={{"fontSize":"4rem","fontFamily":"monospace"}}>STEP:1</h1>
    <p style={{"fontSize":"2rem","fontFamily":"sans-serif"}}>Enter your personal details.</p>
    </div>
    <div className='step-1box'>
        <form method='POST'>
            <label>Enter your FirstName</label><br/><br/>
            <input name='firstname' value={user.firstname} onChange={handleChange} type='text' plaeholder='Enter your firstname' /><br/><br/><br/>

            <label>Enter your Lastname</label><br/><br/>
            <input name='lastname' value={user.lastname} onChange={handleChange} type='text' plaeholder='Enter your lastname' /><br/><br/><br/>

            <label>Enter your Age</label><br/><br/>
            <input name='age' value={user.age} onChange={handleChange} type='number' plaeholder='Enter your age' /><br/><br/><br/>

            <label>Enter your Mobile Number</label><br/><br/>
            <input name='mobile' value={user.mobile} onChange={handleChange} type='number' plaeholder='Enter your mobile no.' /><br /><br /><br/><br/><br/>
            <div>
            <button onClick={back} style={{"width":"10rem","height":"4rem","backgroundColor":"purple"}}>back</button>
            <button onClick={handleSubmit} style={{"width":"10rem","height":"4rem","marginLeft":"1.7rem"}}>Next Step</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Step