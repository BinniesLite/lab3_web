import React from 'react'
import Section from '../../components/Section'
// Generate a functional component called Contact
import Wrapper from '../../layout/Wrapper'

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import styles from './Contact.module.scss'


const Contact = () => {

  return (
    <Stack sx={{mt: {xs: '13rem', md: '1rem'}}} justifyContent="center" alignItems="center" minHeight="inherit" width='100%'>
      <h1 style={{marginTop: '2.4rem'}}>Contact</h1>
      <Stack width="40%" flexDirection={{xs: 'column', md: 'row'}} justifyContent={'flex-start'}>
       
        <Stack my={2} rowGap={5} component="form">
          <p className={styles['input-container']}>
            <input 
              autoComplete='name' 
              className={styles['input-field']} 
              id="text" 
              name="text" 
              placeholder="Your name" type="text" />
            <label for="text" className={styles['input-label']}>Name</label>
          </p>
          <p className={styles['input-container']}>
            <input 
              autoComplete='name' 
              className={styles['input-field']} 
              id="text" 
              name="text" 
              placeholder="Your email" type="text" />
            <label for="text" className={styles['input-label']}>Email </label>
          </p>
          <p className={styles['input-container']}>
          <textarea 
              autoComplete='name' 
              className={styles['input-field']} 
              id="text" 
              name="text" 
              placeholder="Message us" />
            <label for="text" className={styles['input-label']}>Message</label>
          </p>
          
          <button className='button-secondary' type="submit">Send</button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Wrapper(Contact, 'contact');