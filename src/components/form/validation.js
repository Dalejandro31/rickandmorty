export default function Validation(userData,errors,setErrors){
    //validar email
    if(!userData.email) setErrors({...errors,email:"debe completar este campo"});
    else if(userData.email.length >35) setErrors({...errors,email:"el email no debe superar 35 caracteres"});
    else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)){
        setErrors({...errors,email:""});
    }else{
        setErrors({...errors,email:"email invalido"});
    }
    //validar password
    if(userData.password.length <6 || userData.password.length>10){
        setErrors({...errors,password:"longitud de password invalida"});
    }else if(!/\d/.test(userData.password)){
        setErrors({...errors,password:"debe contener al menos un numero"});

    }else{
        setErrors({...errors,password:""});

    }
    

};