import SearchBar from "../searchBar/SearchBar";
import style from './Nav.module.css';
import { Link } from "react-router-dom";

const Navs = (props)=>{

    
    return(
        <div className={style.navStyle}>
            <div className={style.contenedor_home}><Link to="/favorites"><button className={style.button_home}>FAVORITES</button></Link></div>
            <div className={style.contenedor_about}><Link to="/about"><button className={style.button_about}>ABOUT</button></Link></div>
            <div className={style.contenedor_home}><Link to="/home"><button className={style.button_home}>HOME</button></Link></div>
            

            <SearchBar onSearch={props.onSearch} />
        </div >
        
    )
}

export default Navs

