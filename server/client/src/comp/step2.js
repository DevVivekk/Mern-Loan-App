import React, {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Step2 = ({steptwo}) => {

    useEffect(()=>{
        steptwo();
    },[steptwo])

    const navigate = useNavigate()
    const back=()=>{
        navigate('/steps/step1')
    }
    

    //handling and saving input forms

    const [user,setUser] = useState({businessname:"",gst:"",address:""})

    const handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user,[name]:value})
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        const {businessname,gst,address} = user;
        const res = await fetch('/poststep2',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({businessname,gst,address})
        })
        if(res.status===201){
            window.alert('Success')
            navigate('/steps/step3')
        }else{
            window.alert('Please fill correctly!!')
        }
        
    }

  return (
    <div className='step1' style={{"position":"absolute","top":"10rem"}}>
    <div className='step-1box'>
    <h1 style={{"fontSize":"4rem","fontFamily":"monospace"}}>STEP:2</h1>
    <p style={{"fontSize":"2rem","fontFamily":"sans-serif"}}>Enter your business details.</p>
    </div>
    <div className='step-1box'>
        <form method='POST'>
            <label>Enter your business name</label><br/><br/>
            <input name='businessname' value={user.businessname} onChange={handleChange} type='text' /><br/><br/><br/>

            <label>Enter your GST no.</label><br/><br/>
            <input name='gst' value={user.gst} onChange={handleChange} type='text'  /><br/><br/><br/>

            <label>Enter your address</label><br/><br/>
            <input name='address' value={user.address} onChange={handleChange} type='text'  /><br/><br/><br/>

            <div>
            <button onClick={back} style={{"width":"10rem","height":"4rem","backgroundColor":"purple"}}>back</button>
            <button onClick={handleSubmit} style={{"width":"10rem","height":"4rem","marginLeft":"1.7rem"}}>Next Step</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Step2