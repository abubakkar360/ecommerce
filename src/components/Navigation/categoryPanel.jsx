
import * as React from 'react';
import '../../../src/index.css';
import '../Navigation/categoryPanel.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'; 
import image1 from '../../assets/img/image.png'
import image2 from '../../assets/img/AkashiWoodenSofaSet.jpg'
import image3 from '../../assets/img/Wooden-Cabinet.jpg'
import image4 from '../../assets/img/warddrobe-furniture-1.jpg'
import image5 from '../../assets/img/waredrobe.jpg'
import image6 from '../../assets/img/wooden-showcase.jpg'


import { IoMdClose } from "react-icons/io";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Backdrop } from '@mui/material';


  

  export default function CategoryPanel(props) {
    const toggleDrawer = (newOpen) =>()=>{
      props.setIsOpenCatPanel(newOpen)
    }


  const DrawerList = (
    <div className='relative'>
      
    
    <Box className="" sx={{ width: 250, overflow: 'visible', position:'relative'}} role="presentation">
      <h3 className='p-4 text-[18px] font-[500] flex items-center justify-between'>Shop By Category <IoMdClose className=' !cursor-pointer hover:!bg-black !rounded-[50%] hover:!text-white hover:!rotate-[90deg] !duration-500 ' onClick={toggleDrawer(false)}/></h3>
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
  <div className="scroll !overflow-visible">

      <ul className='w-full flex-col justify-center items-center'>
        <li className=' !px-4  '> 
          
           <div className='flex justify-between items-center border-b-1 border-[#e5e5e5] cursor-pointer '  >
            
          <Button disableRipple sx={{backgroundColor:'transparent','&:hover': {backgroundColor:'transparent'}}} className='w-full !py-3 !px-0 !justify-start !capitalize !text-[#373737] '> Our store 
          </Button> < FaRegSquarePlus /> 
           </div> 
          
          <div className="absolute top-14 left-full first wrapper grid grid-cols-3 gap-2 min-w-[500px] !z-50 rounded ">
            <ul>
              <li><Link className='link' to={'Electronics'}>Electronics</Link></li>
              <li><Link className = 'link' to={'Zubehor'}>Zubehor</Link></li>
              <li><Link className = 'link' to={'Laptop'}>Laptop</Link></li>
              <li><Link className = 'link' to={'Desktop'}>Desktop</Link></li>
              <li><Link className = 'link' to={'Cameras'}>Cameras</Link></li>
            </ul>
            <ul>
              <li><Link className = 'link' to={'Fashion & style'}>Fashion & style</Link></li>
              <li><Link className = 'link' to={'Boys'}>Boys</Link></li>
              <li><Link className = 'link' to={'T-shirt'}>T-shirt</Link></li>
              <li><Link className = 'link' to={'Jeans'}>Jeans</Link></li>
              <li><Link className = 'link' to={'Footwear'}>Footwear</Link></li>
            </ul>
            <ul>
              <li><Link className = 'link' to={'Books & music'}>Books & music</Link></li>
              <li><Link className = 'link' to={'Riyadus salehin'}>Riyadus salehin</Link></li>
              <li><Link className = 'link' to={'Hijaber kotha'}>Hijaber kotha</Link></li>
              <li><Link className = 'link' to={'Non-fictions Books'}>Non-fictions Books</Link></li>
              <li><Link className = 'link' to={'Nobel'}>Nobel</Link></li>
            </ul>
            <ul>
              <li><Link className = 'link' to={'Furniture'}>Furniture</Link></li>
              <li><Link className = 'link' to={'Sofa'}>Sofa</Link></li>
              <li><Link className = 'link' to={'Chair'}>Chair</Link></li>
              <li><Link className = 'link' to={'Table'}>Table</Link></li>
              <li><Link className = 'link' to={'Almari'}>Almari</Link></li>
            </ul>
            <ul>
              <li><Link className = 'link' to={'Cosmetics'}>Cosmetics</Link></li>
              <li><Link className = 'link' to={'Fitness'}>Fitness</Link></li>
              <li><Link className = 'link' to={'Fragrances'}>Fragrances</Link></li>
              <li><Link className = 'link' to={'Hair'}>Hair</Link></li>
              <li><Link className = 'link' to={'Ayush'}>Ayush</Link></li>
            </ul>
            <ul>
              <li><Link className = 'link' to={'Groceries'}>Groceries</Link></li>
              <li><Link className = 'link' to={'Garlic'}>Garlic</Link></li>
              <li><Link className = 'link' to={'Dairy'}>Dairy</Link></li>
              <li><Link className = 'link' to={'Snacks'}>Snacks</Link></li>
              <li><Link className = 'link' to={'Fruits'}>Fruits</Link></li>
            </ul> 
          </div>
          </li>
        
        <li className='!mx-4 flex justify-between items-center border-b-1 border-[#e5e5e5]'> 
          <Button className='w-full !py-3 !px-0 !justify-start !capitalize !text-[#373737] '> Barrate 
          </Button> </li>
        
        <li className='relative !px-4 '>
          <div className='flex justify-between items-center border-b-1 border-[#e5e5e5] cursor-pointer'>
          <Button disableRipple sx={{backgroundColor:'transparent','&:hover': {backgroundColor:'transparent'}}} className='w-full !py-3 !px-0 !justify-start !capitalize !text-[#373737] '> Furniture 
          </Button> <FaRegSquarePlus /> 
            </div> 
          
          <div className="container wrapper absolute top-0 left-full  grid grid-cols-2 gap-5 rounded zIndex-50 min-w-[650px]">
            
              <h4 className='col-span-2 flex justify-center font-[500]'>Best selling</h4>
            
            <div className=" sub-container flex justify-center items-center gap-3  max-w-auto rounded">
              <Link>
                <Tooltip title="New" placement='right-end'>
                    <img className='max-w-[150px] max-h-[150px] rounded' src={image1} alt=""/>
                </Tooltip> 
              </Link>
              <div className="inner-container">
              <Link className='link'>Modern cabinet with nice design</Link>
              <p className='text-[red]'>Price: 44000 tk</p>

              </div>
            </div>
            <div className=" sub-container flex justify-center items-center gap-3 min-w-[300px] rounded">
              <Link>
                <Tooltip title="New" placement='right-end'>
                  <img className='max-w-[150px] max-h-[150px] rounded' src={image2} alt=""/>
                </Tooltip>
              </Link>
              <div className="inner-container">
              <Link className='link'>Modern Sofa set with foreign design</Link>
              <p className='text-[red]'>Price: 84000 tk</p>

              </div>
            </div>
            <div className=" sub-container flex justify-center items-center gap-3 min-h-[150px] max-w-auto rounded">
              <Link className=''> 
                <Tooltip title="New" placement='right-end'>
                  <img className='max-w-[150px] max-h-[150px] rounded min-h-[100%]' src={image3} alt=""/>
                </Tooltip>
              </Link>
              <div className="inner-container">
              <Link className='link'>Modern cabinet with nice design</Link>
              <p className='text-[red]'>Price: 44000 tk</p>

              </div>
            </div>
            <div className=" sub-container flex justify-center items-center gap-3 min-w-[300px] rounded">
              <Link className='min-h-[150px]'>
                <Tooltip title="New" placement='right-end'>
                  <img className='max-w-[150px] max-h-[150px] rounded min-h-[100%] ' src={image4} alt=""/>
                </Tooltip> 
              </Link>
              <div className="inner-container">
              <Link className='link'>Modern cabinet with nice design</Link>
              <p className='text-[red]'>Price: 44000 tk</p>

              </div>
            </div>
            <div className=" sub-container flex justify-center items-center gap-3  max-w-auto rounded">
              <Link>
                <Tooltip title="New" placement='right-end'>
                  <img className='max-w-[150px] max-h-[150px] rounded' src={image5} alt=""/>
                </Tooltip> 
              </Link>
              <div className="inner-container">
              <Link className='link'>Modern cabinet with nice design</Link>
              <p className='text-[red]'>Price: 44000 tk</p>

              </div>
            </div>
            <div className=" sub-container flex justify-center items-center gap-3 min-w-[300px] rounded">
              <Link>
                <Tooltip title="New" placement='right-end'>
                  <img className='max-w-[150px] max-h-[150px] rounded' src={image6} alt=""/>
                </Tooltip> 
              </Link>
              <div className="inner-container">
              <Link className='link'>Modern cabinet with nice design</Link>
              <p className='text-[red]'>Price: 44000 tk</p>

              </div>
            </div>
          </div>
        
        </li>
        
        <li className='!mx-4 flex justify-between items-center border-b-1 border-[#e5e5e5]'> 
          <Button className='w-full !py-3 !px-0 !justify-start !capitalize !text-[#373737] '> Fragrances 
          </Button> </li>
        
        <li className='!mx-4 flex justify-between items-center border-b-1 border-[#e5e5e5]'> 
          <Button className='w-full !py-3 !px-0 !justify-start !capitalize !text-[#373737] '> Kids rooms 
          </Button> </li>
        
        <li className='relative !px-4 '>
          <div className='flex justify-between items-center border-b-1 border-[#e5e5e5] cursor-pointer'>
          <Button disableRipple sx={{backgroundColor:'transparent','&:hover': {backgroundColor:'transparent'}}} className='w-full !py-3 !px-0 !justify-start !capitalize !text-[#373737] '> Books and Music 
          </Button> <FaRegSquarePlus /> 
          </div> 
          <div className="absolute top-0 left-full second wrapper grid  gap-2 min-w-[200px] !z-50 rounded">

            <ul className=''>
              <li><Link className = 'link' to={'exam central'}>exam central</Link></li>
              <li><Link className = 'link' to={'fiction books'}>fiction books</Link></li>
              <li><Link className = 'link' to={'non-fiction books'}>non-fiction books</Link></li>
              <li><Link className = 'link' to={'children books'}>children books</Link></li>
            </ul> 
          </div>
        </li>
        
        <li className='!mx-4 flex justify-between items-center border-b-1 border-[#e5e5e5]'> 
          <Button className='w-full !py-3 !px-0 !justify-start !capitalize !text-[#373737] '> Bedrooms 
          </Button> </li>
        
        <li className='!mx-4 flex justify-between items-center border-b-1 border-[#e5e5e5]'> 
          <Button className='w-full !py-3 !px-0 !justify-start !capitalize !text-[#373737] '> Cameras 
          </Button> </li>
        
        <li className='!mx-4 flex justify-between items-center border-b-1 border-[#e5e5e5]'> 
          <Button className='w-full !py-3 !px-0 !justify-start !capitalize !text-[#373737] '> Laptops 
          </Button> </li>
      </ul>

  </div>
    </Box>
    </div>
  );

  return (
    <div>
      
      <Drawer open={props.isOpenCatPanel} slotProps={{ paper: {
      sx: {
        overflow: 'visible', 
        backgroundColor: 'white',
        boxShadow: 'none',
      },
    }, backdrop:{
      sx:{
        // background:'transparent',
        zIndex:'-50 importent'
      }
    }
  }
  } onClose={toggleDrawer(false)} >
        {DrawerList}
      </Drawer>
    </div>
  );
}