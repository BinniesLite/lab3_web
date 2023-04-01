import React, {useState} from 'react';  
import { Stack, Box, Typography } from '@mui/material';

import './Navbar.scss'; 

import { Link, useLocation } from 'react-router-dom';
import { smoothScroll } from '../../utils/scroll';


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
            return '#2e712b'
        } else if (location.pathname === '/work') {
            return '#4e5b47'
        }
    }    

    const backgroundColor = () => {
        if (location.pathname === '/') {
            return 'transparent'
        } else if (location.pathname === '/contact') {
            return 'transparent'
        } else if (location.pathname === '/team') {
            return '#fde6ff'
        } else if (location.pathname === '/work') {
            return 'transparent'
        }
    }

    return (
        <Stack sx={{width: '100%', 
        py: 4, 
        transition: '0.4s all ease-in-out', 
        position: `${isContact || location.pathname === "/team" ? '' : 'absolute'}`,
        color: `${currentPath()}`,
        backgroundColor: `${backgroundColor()}`,
        }} flexDirection="row" justifyContent="space-between" >
            <Box sx={{ml: 4, }}>
                <Link to="/">
                    <Typography fontWeight="800"  sx={{fontWeigth: '500'}} variant="h6">Lab37</Typography>
                </Link>
            </Box>
            <Stack sx={{fontWeight: 500,
                fontSize: '1.2rem',
                mr: 13, 
                flexDirection: {xs: 'column', md: 'row'}, 
                rowGap: {xs: 1.5}, 
                justifyContent: {xs: 'flex-end', md: ''} } } 
                columnGap="4rem">
                
                {location.pathname === '/contact'  ? <Link to="/">Home</Link> : 
                    (
                        <>
                        <Link to="/"><a href="">Home</a></Link>
                    <Link to="/events">Events</Link>
                    <Link to="/work"><a href="">Research</a></Link>
                    <Link to="/team"><a  href="">Our Team</a></Link>
                    <a onClick={() => smoothScroll('contact')} href="#">Contact</a>
                    </>

                    )
                }
            </Stack>
        </Stack>
        )
}

export default Navbar;