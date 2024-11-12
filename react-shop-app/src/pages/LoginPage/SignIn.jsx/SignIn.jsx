import React, { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../../firebase';

const SignIn = () => {
  const navigate = useNavigate();
  const[firebaseError,setFirebaseError]= useState("");
  const auth = getAuth(app);

  const handleLogin = (email,password) =>{
    signInWithEmailAndPassword(auth,email,password)
    .then(user =>{
      navigate('/')
    })
    .catch(error =>{
        return error && setFirebaseError("이메일 비번 잘못됨");
      })
    }

  return (
   <Form title={"로그인"} 
  getDataForm={handleLogin}
  firebaseError={firebaseError}/>
  )
}

export default SignIn;