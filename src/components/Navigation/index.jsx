import React, { useState } from 'react'
import Button from '@mui/material/Button';

import'../Navigation/style.css';
import'../../../src/index.css';
import { RiMenu2Fill } from 'react-icons/ri';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import CategoryPanel from './categoryPanel';
const Navigation = () => {

    const [isOpenCatPanel,setIsOpenCatPanel] = useState(false);

    const openCatPanel = () =>{
        setIsOpenCatPanel(true);
    }
    
  
  return (
    <>
    
      <nav className='py-2'>
        <div className="container flex  items-center gap-5">
            <div className="col_1 w-[20%] border-r-1 border-[#e5e5e5] ">
                <Button className='!text-black gap-2 flex justify-between w-full' onClick={openCatPanel}>
                        <RiMenu2Fill className='text-[1rem]'/>
                        shop by categories
                        <FaAngleDown className='ml-auto font-bold text-[1rem]'/>
                    </Button>
            </div>
            <div className="col_2 w-[60%]">
                <ul className='flex items-center gap-2' >
                    <li className="list-none "> 
                        <Link to='' className='link transition !text-black'>
                        <Button>Home</Button>
                        </Link>
                    </li>
                    <li className="list-none "> 
                        <Link to='/electronics' className='link transition !text-black'>
                        <Button>electronics</Button>
                        </Link>
                    </li>
                    <li className="list-none "> 
                        <Link to='/fashion' className='link transition !text-black'>
                        <Button>fashion</Button>
                        </Link>
                    </li>
                    <li className="list-none "> 
                        <Link to='/bags' className='link transition !text-black'>
                        <Button>bags</Button>
                        </Link>
                    </li>
                    <li className="list-none "> 
                        <Link to='/all-brands' className='link transition !text-black'>
                        <Button>footwear</Button>
                        </Link>
                    </li>
                    <li className="list-none "> 
                        <Link to='/groceries' className='link transition !text-black'>
                        <Button>groceries</Button>
                        </Link>
                    </li>
                    
                    <li className="list-none "> 
                        <Link to='/beauty' className='link transition !text-black'>
                        <Button>beauty</Button>
                        </Link>
                    </li>
                    <li className="list-none "> 
                        <Link to='/wellness' className='link transition !text-black'>
                        <Button>wellness</Button>
                        </Link>
                    </li>
                    <li className="list-none "> 
                        <Link to='/jwellery' className='link transition !text-black'>
                        <Button>jwellery</Button>
                        </Link>
                    </li>
                    
                </ul>
            </div>
            <div className="col-3 w-[20%]">
                <p className='text-[14px] font-[500] flex items-center gap-3'><BsFillRocketTakeoffFill className='text-[18px] ml-[auto]'/>Free International Delivery</p>
            </div>

        </div>
      </nav>
      {/* categoryPanel  */}
      <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel} />
    </>
  )
}

export default Navigation
