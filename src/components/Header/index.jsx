import React from 'react'
import { Link } from 'react-router-dom' 
import logo from '../../assets/img/classyshop.jpg'
import Search from '../Search'
import LogIn from '../Register-Login'
import Navigation from '../Navigation'


export default function Header() {
  return (
    <>
      <header>
        <div className="top-strip w-[100%] mx-auto border-b-2 border-color">
          <div className="container flex justify-between py-[6px] ">
            <div className="left w-[60%] ">
              <span className='roboto-font'>Get up to 50% off new season styles, limited time only</span>
            </div>
            <ul className="right flex capitalize w-[40%] justify-end gap-10">
              <li className='link transition roboto-font'>
                <Link to="/help-center">Help center</Link>  
              </li>
              <li className='link transition roboto-font'>
                <Link to="/order-tracking">order tracking</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-fluid border-b-2 border-color">
          <div className="container header w-[100%] mx-auto py-5 ">
            <div className="flex justify-between items-center">
              <div className="col1">
              <Link className="logo w-[25%] m-[0]" to={"/"}><img src={logo} alt="logo here..."/></Link>
              </div>
              <div className="col2 w-[45%]">
              <Search/>
              </div>
              <div className="col3 w-[30%]">
              <LogIn/>
              </div>
            </div>
          </div>
        </div>
        <Navigation/>
      </header>
    </>
  )
};
