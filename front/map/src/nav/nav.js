import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './nav.scss'
import {useSelector} from 'react-redux'
const Nav = ()=>{
    const {user} = useSelector(state=>state.user);


    return (
        <div className="nav">
            <Link to={"/"}><div className='item'>home</div></Link>
            <Link to={"/chat"}><div className='item'>chat</div></Link>
            {user ? <Link to={"/logout"}><div className='item'>logout</div></Link>
            :
            <Link to={"/signUp"}><div className='item'>signUp</div></Link> }
        </div>
    )
}

export default Nav;