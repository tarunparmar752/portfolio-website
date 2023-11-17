import { useRef, useState } from 'react';
import './contact.scss'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

const variants = {
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}

export default function Contact() {
  const formRef = useRef();
  const [error,setError] =useState(false)
  const [success,setSuccess] =useState(false)

   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_m39pr5g",
         "template_bdqqp29",
         formRef.current,
         "iPS5Po5aCGK4Xm2Iw"
       )
       .then(
         (result) => {
           setSuccess(true)
         },
         (error) => {
           setError(true)
         }
       );
   };


  return (
    <div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Contact</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hello@react.dev</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>hello street new york</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91-7018340792</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form onSubmit={sendEmail} ref={formRef}>
          <input type="text" required placeholder="Name" name='name'/>
          <input type="email" required placeholder="Email" name='email'/>
          <textarea placeholder="Message" cols="30" rows="8" name='message'/>
          <button>Submit</button>
          {error && 'Error'}
          {success && 'Success'}
        </form>
      </div>
    </div>
  );
}
