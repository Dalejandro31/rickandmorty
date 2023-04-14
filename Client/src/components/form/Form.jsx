import { useState } from "react"
import Validation from "./validation";
import style from './Form.module.css'



export default function Form({login}){

    const [userData,setUserData]=useState({
        email:"",
        password:"",
    })

    const [errors,setErrors]=useState({
        email:"",
        password:"",
    })

    function handleChange(event){
        const property= event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        Validation({...userData, [property]: value}, errors,setErrors);
    }

    function submitHandler(event){
        event.preventDefault();
        login(userData)
    }

    return(
        <div className={style.contenedor_padre} >
            <form onSubmit={submitHandler} className={style.contenedor_hijo}>
                <div className={style.label_1}>
                    <label htmlFor="email">EMAIL</label>
                    <p><input className={style.input_user} type="text"  name="email" value={userData.email} onChange={handleChange}/></p>
                    <p>{errors.email}</p>
                </div>

                <div className={style.label_2}>
                    <label htmlFor="password">PASSWORD</label>
                    <p><input className={style.input_password} type="text" name="password" value={userData.password} onChange={handleChange}/></p>
                    
                </div>
                <button type="submit" className={style.Button_submit}>Submit</button>

            </form>

        </div>
            

    )
}