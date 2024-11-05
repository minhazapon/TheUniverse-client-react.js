import { NavLink } from "react-router-dom";
import './css file/Universe.css'




const Nav = () => {

    const navz = <>
    
       <li className="  the  " ><NavLink to='/' >HOME</NavLink></li>
       <li className="  the  " ><NavLink to='/page' >PAGE</NavLink></li>
       <li className="  the  " ><NavLink to='/ourMenu' >OUR OFFER</NavLink></li>
       <li className="  the  " ><NavLink to='/galleries' >GALLERIES</NavLink></li>
       <li className="  the  " ><NavLink to='/blog' >BLOG</NavLink></li>
       <li className="  the  " ><NavLink to='/shop' >SHOP</NavLink></li>
       
    
    </>



    return (
        <div>

<div className="navbar bg-base-100 fixed shadow p-5 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navz}
      </ul>
    </div>
   
    <div className=" flex items-center gap-2 ">
    <img className=" h-[60px] " src="https://cdn-icons-gif.flaticon.com/11616/11616389.gif" alt="" />   
     <a  className=" universe  text-4xl">TheUniverse</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navz}
    </ul>
  </div>
  {/* <div className="navbar-end">
      <img className=" h-[40px] " src="https://cdn-icons-png.flaticon.com/128/1000/1000997.png" alt="" />
  </div> */}
 
</div>

  
            
        </div>
    );
};

export default Nav;