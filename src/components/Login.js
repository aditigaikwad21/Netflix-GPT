import React, { useRef, useState } from 'react'
import Header from "./Header"
import  {checkValidData} from "../utils/validate"
import {createUserWithEmailAndPassword , signInWithEmailAndPassword ,updateProfile  } from "firebase/auth";
import {auth} from "../utils/firebase"
import {  useNavigate } from 'react-router-dom';
import { background_img } from '../utils/constants';

const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);
    
    const [errorMessage , seterrorMessage] = useState(null);
    const navigate = useNavigate();

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const email = useRef(null);
    const password= useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        //Validate Form Data
        let msg;
        if(isSignInForm)
        {
          msg = checkValidData(email.current.value,password.current.value,'','No');
        }
        else
        {
          msg = checkValidData(email.current.value,password.current.value,name.current.value,'Yes');
        }
        seterrorMessage(msg);

        if(msg) return;

        if(!isSignInForm)
        {
          //Sign UP
          createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
    
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://occ-0-2164-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABR5WxwO19q-4rcGnkqCq8kg_SROF_8BgJ_xOscgE0CfvjOBSUED5bX6rWHZqYN2Su3xi5HZSV3FfyMi9K6rjG6z56gBBz0I.png?r=573"
          }).then(() => {
          
          }).catch((error) => {
            seterrorMessage(errorMessage);
          });
        
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode +"--"+ errorMessage);
          });
        }
        else
        {
          //Sign IN
          signInWithEmailAndPassword(auth,email.current.value,password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
           
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode +"--"+ errorMessage);
          });
        }
    }

  return (
    <div>
          <Header />
          <div className="absolute" >
          <img src={background_img} alt="Background-img"/>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
            
          {!isSignInForm && (<input ref={name} type="Full Name" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' />)}
            
            <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800' />

            <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-800' />
            
            <p className="text-red-500 font-bold text-lg px-2">{errorMessage}</p>
            <button onClick={handleButtonClick} className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'} </button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? 'New to Netflix? Sign Up Now.' : 'Already Registered? Sign In Now.'}
            </p>
          </form>
    </div>
 
  )
}

export default Login