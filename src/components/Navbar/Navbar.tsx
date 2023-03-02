import React, {useState} from 'react';  
import { Stack, Box, Typography } from '@mui/material';

import './Navbar.scss'; 

import { Link, useLocation } from 'react-router-dom';



const links = ['About']

const Navbar = () => {
    const [active, setActive] = useState(links[0]);

    const location = useLocation();
    
    const isContact = location.pathname === '/contact';

    // change the color of the navbar when the user is on the different pages
    const currentPath = () => {
        if (location.pathname === '/') {
            return 'white'
        } else if (location.pathname === '/contact') {
            return 'contact'
        } else if (location.pathname === '/team') {
            return 'team'
        } else if (location.pathname === '/work') {
            return '#4e5b47'
        }
    }    

    return (
        <Stack sx={{width: '100%', 
        my: 3, 
        transition: '0.3s all ease-in', 
        position: `${isContact || location.pathname === "/team" ? '' : 'absolute'}`
        ,
        color: `${currentPath()}`

        }} flexDirection="row" justifyContent="space-between" >
            <Box sx={{ml: 4, }}>
                <Link to="/">
                    <Typography sx={{fontWeigth: '800'}} variant="body1">MahdiLab</Typography>
                </Link>
            </Box>
            <Stack sx={{fontWeight: 700, 
                mr: 13, 
                flexDirection: {xs: 'column', md: 'row'}, 
                rowGap: {xs: 1.5}, 
                justifyContent: {xs: 'flex-end', md: ''} } } 
                columnGap="4rem">
                
                {location.pathname === '/contact'  ? <Link to="/">Home</Link> : 
                    (
                        <>
                        <Link to="/"><a href="">Home</a></Link>
                {links.map((link, key) => (
                    <a style={{}} className={`${active === link && 'active-link'}`} 
                        key={key} 
                        href={`#${link.toLowerCase()}`}
                        onClick={() => setActive(link)}
                    >
                {link}
                </a>))}
                    <Link to="/work"><a href="">Research</a></Link>
                    <Link to="/team"><a  href="">Our Team</a></Link>
                    </>

                    )
                }
            </Stack>
        </Stack>
        )
}

export default Navbar;