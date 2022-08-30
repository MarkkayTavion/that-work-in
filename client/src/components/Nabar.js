import React from 'react';
import { Link } from 'react-router-dom';
import {BiDumbbell} from "react-icons/bi"

const Navbar = () => (

    <div className='link-container'>
      <Link className='link' to="/">Home</Link>
      <Link className='logo' to="/">
        <BiDumbbell /> 
      </Link>
      <a className='link' href="#exercises">Exercises</a>
    </div>
);

export default Navbar;