import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './nav.scss'
const Nav = ()=>{
    const {tap, setTap} = useState(false);
    const left_menu = (num)=>{
        let exist = true;
    }

    return (
        <div className="nav">
            <Link to={"/"}><div className='item'>home</div></Link>
            <Link to={"/chat"}><div className='item'>chat</div></Link>
            <Link to={"/signUp"}><div className='item'>signUp</div></Link>
        </div>
    )
}

export default Nav;