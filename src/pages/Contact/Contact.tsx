import React, {useReducer, SyntheticEvent} from 'react'
import { makeStyles } from '@mui/styles';
// Generate a functional component called Contact
import Wrapper from '../../layout/Wrapper'

import Stack from '@mui/material/Stack';
import { TextField} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';

import styles from './Contact.module.scss'



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#000',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#000',
    },
    '& .MuiInputLabel-root': {
      color: '#000',
    },
  },
}));
// create a reducer for the initial state


const initialState = {
  name: '',
  email: '',
  message: '',
  error: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'updateName':
      return { ...state, name: action.payload };
    case 'updateEmail':
      return { ...state, email: action.payload };
    case 'updateMessage':
      return { ...state, message: action.payload };
    case 'updateError':
      return { ...state, error: action.payload };
    default:
      return state;
  }

}

const Contact = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { name, email, message, error } = state;

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (name && email && message) {
      dispatch({ type: 'updateError', payload: false });
      console.log('success');
    } else {
      dispatch({ type: 'updateError', payload: true });
      console.log(errorx);
    }
    

  };

  const handleChange = (e: SyntheticEvent) => {
    const { name, value } = e.target;
    dispatch({ type: `update${name}`, payload: value });
  };

  return (
    <Stack sx={{mb: '5rem', paddingBottom: 4}} justifyContent="center" alignItems="center" minHeight="inherit" width='100%'>
      
      <h1 style={{padding: '3rem 0', marginTop: '5rem'}}>Contact Us</h1>
        <Stack my={2} width={{xs: '80%', md: '40%'}} rowGap={5} component="form">
          <TextField
            required
            label="Your Name"
            className={useStyles().root}
          />
          <TextField
            required
            label="Your Email"
            className={useStyles().root}
          />
          <TextField 
            label="Your Message"
            className={useStyles().root}
            rows={4}
            multiline
          />

          
          <button className='button-secondary' type="submit">Send</button>
        </Stack>
     
    </Stack>
  )
}

export default Wrapper(Contact, 'contact');