import React, { useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';

import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';



const smoothScroll = (id: string): void => {
    const element = document.querySelector(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });

    }
};





const links = ['event', 'project', 'contact']

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
        <Stack sx={{
            width: '100%',
            py: 4,
            transition: '0.4s all ease-in-out',
            position: `${isContact || location.pathname === "/team" ? '' : 'absolute'}`,
            color: `${currentPath()}`,
            backgroundColor: `${backgroundColor()}`,
        }} flexDirection="row" justifyContent="space-between" >
            <Box sx={{ ml: 4, }}>
                <Link to="/">
                    <Typography fontWeight="800" sx={{ fontWeigth: '500' }} variant="h6">Lab37</Typography>
                </Link>
            </Box>
            <Stack sx={{
                fontWeight: 500,
                fontSize: '1.2rem',
                mr: 13,
                flexDirection: { xs: 'column', md: 'row' },
                rowGap: { xs: 1.5 },
                justifyContent: { xs: 'flex-end', md: '' },
                cursor: 'pointer',

            }
            }

                columnGap="4rem">

                {
                    location.pathname !== '/team' ?
                    links.map((link, key) => (
                        <a key={key} onClick={() => smoothScroll(`#${link}`)}>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
                    )) 
                    :
                    <Link to="/">Home</Link>
                    
                }   
                <Link to="/team">Our Team</Link>
            </Stack>
        </Stack>
    )
}

export default Navbar;