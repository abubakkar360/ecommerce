import React from 'react'
import { Link } from 'react-router-dom'
import'../Register-Login/style.css'
import Badge from '@mui/material/Badge';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import { IoIosHeartEmpty,IoIosGitCompare } from "react-icons/io";
// import MailIcon from '@mui/icons-material/Mail';
// import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FaCartPlus } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';


const LogIn = () => {
  const StyledBadge = styled(Badge)`
  
  font-size:22px;
  padding: 5px;
  &:hover {
    
  };
  cursor:pointer;
  
`;
  

  return (
    <>
      <ul className="flex justify-between">
        <li className='list-none pl-10'>
          <Link to={'/logIn'} className='link transition text-[15px] !font-[500]'>Login</Link> / &nbsp;
          <Link to={'/register'} className='link transition text-[15px] !font-[500]'>Register</Link>
        </li>
        <li className=''>
           <Stack spacing={3} direction="row">
              <Tooltip title="compare">
                <StyledBadge badgeContent={4} color="success" classes={{badge:'my-custom-badge-class bg'}}>
                  <IoIosGitCompare color="action" className=''/>
                </StyledBadge>
              </Tooltip>
              <Tooltip title="likes">
                <StyledBadge badgeContent={10} color="secondary" classes={{badge:'my-custom-badge-class bg'}}>
                  <IoIosHeartEmpty color="action" className='' />
                </StyledBadge>
              </Tooltip>
              <Tooltip title="Add to cart">
                <StyledBadge badgeContent={4} color="success" classes={{badge:'my-custom-badge-class bg'}}>
                  <FaCartPlus color="action" className=''/>
                </StyledBadge>
              </Tooltip>
          </Stack>
        </li>
      </ul>
    </>
  )
}

export default LogIn
