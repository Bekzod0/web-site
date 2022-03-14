import React,{useState,useRef} from 'react'
import emailjs from 'emailjs-com'
export const Mailer = () => {
  function sendEmail(e)
  {
    e.preventDefault();
    emailjs.sendForm(
      'service_wmk2n2h',
      'template_h2bjxft',
       e.target,
       'user_LaX7CUKxTdsFUTjyuKdOR'
    ).then  (res =>{
      console.log(res);
    }).catch(err => console.log(err));
  }
  const[inputValue, setInputValue]=useState("")
  const inputref=useRef(null)
  const onhandleClik=()=>{
    setInputValue('')
  }
  const onhandlechange=(Event)=>{
    setInputValue(Event.value)
  }
  return (
  <div className='beko'>
  <form onSubmit={sendEmail}>
    <h1 >Registratsiya</h1>
  <div className='box'>
  <label htmlFor="">Mail</label>
  <input type="email" name='name' value={inputValue} onChange={onhandlechange}/>
  </div>
  <div className='box1'>
  <label htmlFor="">Passwor</label>
  <input type="password" name='name'value={inputValue} onChange={onhandlechange}/>
  </div> 
  <div className='box2'>
  <label htmlFor="">Message</label>
  <textarea name="Message" id=""cols="30" rows="10"value={inputValue} onChange={onhandlechange}></textarea>
  </div>     
  <input className='box3' type="Submit" value='send' onClick={onhandleClik}/>   
  </form>
  </div>
  )
}