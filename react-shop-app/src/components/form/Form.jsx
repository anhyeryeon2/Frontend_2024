import React from 'react'
import styles from '../form/form.module.scss'
import { useForm } from 'react-hook-form'
const Form = ({title}) => {

    const {register,handleSubmit,formState:{errors},reset}=useForm({mode:"onBlur"})

    const onSubmit=({email,password})=>{
        reset();
    }
    const userEmail={
        required:"필수 필드입니다.",
        // pattern:{
        //     value:
        //     '^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
        // }
    };

    const userPassword={
        required:"필수 필드입니다.",
        minLength:{
            value:4,
            message:"최소 4자 입니다.",
        },
    };

    return (
    <form onSubmit={handleSubmit(onsubmit)} className={styles.form}>
        <div>
            <input
            type="email"
            placeholder='E-mail'
            {...register("email",userEmail)}
            />
            {errors?.email && (<div>
                <span className={styles.form_error}>{errors?.email?.message}</span>
            </div>)}
        </div>

        <div>
            <input type='password' 
            placeholder='Password'
            {...register("password",userPassword)}/>
            {errors?.password && (<div>
                <span className={styles.form_error}>{errors?.password?.message}</span>
            </div>)}
        </div>
        <button type="submit">{title}</button>
        <span className={styles.form_error}></span>
    </form>
  )
}

export default Form