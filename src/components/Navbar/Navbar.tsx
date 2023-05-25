import React, { useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import './Navbar.scss';
import { PathColor } from './types';

const smoothScroll = (id: any) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const currentPathColor: { [key: string]: string } = {
  '/': 'white',
  '/contact': 'contact',
  '/team': '#2e712b',
  '/work': '#4e5b47'
};

const links = ['research', 'event', 'contact'];

const Navbar = () => {
  
  const location = useLocation();
  const isContact = location.pathname === '/contact';

  // change the color of the navbar when the user is on different pages
  const currentPath = (): string | any  => {
    return currentPathColor[location.pathname];
  };

  const backgroundColor = () => {
    if (location.pathname === '/') {
      return 'transparent';
    } else if (location.pathname === '/contact') {
      return 'transparent';
    } else if (location.pathname === '/team') {
      return '#fde6ff';
    } else if (location.pathname === '/work') {
      return 'transparent';
    }
  };

  return (
    <Stack
      sx={{
        width: '100%',
        py: 4,
        transition: '0.4s all ease-in-out',
        position: `${isContact || location.pathname === '/team' ? '' : 'absolute'}`,
        color: `${currentPath()}`,
        backgroundColor: ''
      }}
      flexDirection="row"
      justifyContent="space-between"
    >
      <Box sx={{ ml: 4 }}>
        <Link to="/">
          <Typography fontWeight="800" sx={{ fontWeight: '500' }} variant="h6">
            Lab37
          </Typography>
        </Link>
      </Box>
      <Stack
        sx={{
          fontWeight: 500,
          fontSize: '1.2rem',
          mr: 13,
          flexDirection: { xs: 'column', md: 'row' },
          rowGap: { xs: 1.5 },
          justifyContent: { xs: 'flex-end', md: '' },
          cursor: 'pointer'
        }}
        columnGap="4.5rem"
      >
        {location.pathname !== '/team' ? (
          links.map((link, key) => (
            <Box className="active-link" key={key}>
              <a className="active-link-content" onClick={() => smoothScroll(`#${link}`)}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </Box>
          ))
        ) : (
          links.map((link, key) => (
            <Box className="active-link" key={key}>
              <Link className="active-link-content" to={`/${link}`}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            </Box>
          ))
        )}
        <Link to="/team">Our Team</Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
