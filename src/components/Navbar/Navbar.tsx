import React, {useState} from 'react';  
import { Stack, Box, Typography } from '@mui/material';

import './Navbar.scss'; 

import { Link, useLocation } from 'react-router-dom';



const links = ['Home', 'Project', 'About']

const Navbar = () => {
    const [active, setActive] = useState(links[0]);

    const location = useLocation();
    
    const isContact = location.pathname === '/contact';
    return (
        <Stack sx={{width: '100%', my: 3, transition: '0.7s all ease-in', position: `absolute`}} flexDirection="row" justifyContent="space-between" >
            <Box sx={{ml: 4, color: `${isContact || location.pathname === "/team" ? 'black' : 'white'}`}}>
                <Link to="/">
                    <Typography sx={{fontWeigth: '800'}} variant="body1">MahdiLab</Typography>
                </Link>
            </Box>
            <Stack sx={{fontWeight: 700, mr: 13, flexDirection: {xs: 'column', md: 'row'}, rowGap: {xs: 1.5}}} columnGap="4rem">
                
                {location.pathname === '/contact'  ? <Link to="/">Home</Link> : 
                    (
                        <>
                {links.map((link, key) => (
                    <a style={{color: `${isContact || location.pathname === "/team" ? 'black' : 'white'}`}} className={`${active === link && 'active-link'}`} 
                        key={key} 
                        href={`#${link.toLowerCase()}`}
                        onClick={() => setActive(link)}
                    >
                {link}
                </a>))}
                    <Link to="/contact"><a style={{color: 'white'}} href="">Contact</a></Link>
                    <Link to="/team"><a style={{color: 'white'}} href="">Our Team</a></Link>
                        </>

                    )
                }
            </Stack>
        </Stack>
        )
}

export default Navbar;