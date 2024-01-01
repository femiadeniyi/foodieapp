import React, { useState }from 'react';
import {BsCart2} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";
import{
	Box,
	Drawer,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

export default function Navbar(){
	const [openMenu, setOpenMenu] = useState(false);
		const menuOptions =[
          {
          	text:"Home",
          	icon:<HomeIcon/>
          },

          {
          	text:"About",
          	icon:<InfoIcon/>
          },

          {
          	text:"Testimonial",
          	icon:<CommentRoundedIcon/>
          },

          {
          	text:"Contact",
          	icon:<PhoneRoundedIcon/>
          },

          {
          	text:"cart",
          	icon:<ShoppingCartRoundedIcon/>
          },
		];
	return(
		 
          <nav>
            <div className="nav-logo-container">
              <img src="./Logo.svg" alt=""/>
            </div>

            <div className="navbar-links-container">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Testimonial</a>
              <a href="">Contact</a>
              <a href="">
                 <BsCart2 className="navbar-cart-icon"/>
              </a>

              <button className="primary-button">Bookings Now</button>
            </div>

            <div className="navbar-menu-container">
              <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
            </div>

            <Drawer open={openMenu} onClose={()=> setOpenMenu(false)}
              anchor="right">
              <Box
              sx={{width: 250}}
              role="presentation"
              onClick={() => setOpenMenu(false)}
              onkeyDown={() => setOpenMenu(false)}
              >
               <ListItem>
                 {menuOptions.map((item)=>{
                 	<ListItem key={item.text} disablepadding>
                 	  <ListItemButton>
                 	    <ListItemIcon>{item.icon}</ListItemIcon>
                 	    <ListItemText primary={item.text}/>
                 	  </ListItemButton>
                 	</ListItem>
                 })}
               </ListItem>
               </Box>
            </Drawer>
         </nav>
		)
}