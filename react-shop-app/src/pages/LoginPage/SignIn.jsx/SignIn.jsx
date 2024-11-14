import React, { useState } from 'react'
import Form from '../../../components/form/Form'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/user/user.slice';
import { setUserId } from '../../../store/cart/cart.slice';

const SignIn = () => {
  const navigate = useNavigate();
  const[firebaseError,setFirebaseError]= useState("");
  
  const auth = getAuth(app);
  const dispatch = useDispatch();
  
  const handleLogin = (email,password) =>{
    signInWithEmailAndPassword(auth,email,password)
    .then(userCredential =>{
      dispatch(setUser({
        email:userCredential.user.email,
        token:userCredential.user.refreshToken,
        id: userCredential.user.uid
      }))
      dispatch(setUserId(userCredential.user.uid));
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