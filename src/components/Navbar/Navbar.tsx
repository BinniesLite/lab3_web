import React, {useState} from 'react';  
import { Stack, Box, Typography } from '@mui/material';
import logo from '../../assets/logo.png';
import './Navbar.scss'; 

import { Link } from 'react-router-dom';


const links = ['Home', 'Project', 'About']

const Navbar = () => {
    const [active, setActive] = useState(links[0]);
    
    return (
        <Stack sx={{width: '100%', my: 3, transition: '0.7s all ease-in', position: 'absolute'}} flexDirection="row" justifyContent="space-between" >
            <Box sx={{ml: 4}}>
                <Link to="/">
                    <Typography sx={{fontWeigth: '800'}} variant="body1">MahdiLab</Typography>
                </Link>
            </Box>
            <Stack sx={{fontWeight: 700, mr: 13, flexDirection: {xs: 'column', md: 'row'}, rowGap: {xs: 0.8} }} columnGap="4rem">
                {links.map((link, key) => (
                    <a className={`${active === link && 'active-link'}`} 
                    key={key} 
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setActive(link)}
                    >
                {link}
                </a>))}
                    <Link to="/contact">Contact</Link>
            </Stack>
        </Stack>
        )
}

export default Navbar;