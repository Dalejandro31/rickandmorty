import SearchBar from "../searchBar/SearchBar";
import style from './Nav.module.css';
import { Link } from "react-router-dom";

const Navs = (props)=>{

    const handleLogout = () => {
        props.onLogout();
    }

    
    return(
        <div className={style.navStyle}>
            <div className={style.contenedor_favorite}><Link to="/favorites"><button className={style.button_home}>FAVORITES</button></Link></div>
            <div className={style.contenedor_about}><Link to="/about"><button className={style.button_about}>ABOUT</button></Link></div>            
            <div className={style.contenedor_home}><Link to="/home"><button className={style.button_home}>HOME</button></Link></div>
            <div className={style.contenedorSearch}><SearchBar onSearch={props.onSearch} /></div>
            <div className={style.contenedor_logout}><button className={style.button_logout} onClick={handleLogout}>Logout</button></div>

            

           
        </div >
        
    )
}

export default Navs

