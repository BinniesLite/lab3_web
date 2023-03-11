import React, { useReducer, SyntheticEvent } from 'react'
import { makeStyles } from '@mui/styles';
// Generate a functional component called Contact
import Wrapper from '../../layout/Wrapper'

import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';


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

function reducer(state: any, action: any) {
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
  const [success, setSuccess] = React.useState(false);
  const { name, email, message, error } = state;

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (name && email && message) {
      dispatch({ type: 'updateError', payload: false });
      

      try {
        const response = await fetch('http://localhost:3000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message })
        });
        
        if (response.status === 200) {
          setSuccess(true);
        }
      }
      catch (error) {
        console.log(error);
      }
    } else {
      dispatch({ type: 'updateError', payload: true });
      console.log(error);
    }


  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    dispatch({ type: `update${name.charAt(0).toUpperCase() + name.slice(1)}`, payload: value });
  };

  return (
    <Stack sx={{ mb: '5rem', paddingBottom: 4 }} justifyContent="center" alignItems="center" minHeight="inherit" width='100%'>

      <h1 style={{ padding: '3rem 0', marginTop: '5rem' }}>Contact Us</h1>
      <Stack my={2} onSubmit={handleSubmit} width={{ xs: '80%', md: '40%' }} rowGap={5} component="form">
        {success ? <h2>Thank you for your message!</h2> : (<> 
        <TextField
          name="name"
          value={name}
          onChange={(e) => handleChange(e)}
          required
          label="Your Name"
          className={useStyles().root}
        />
          <TextField
            name="email"
            value={email}
            onChange={handleChange}
            required
            label="Your Email"
            className={useStyles().root}
          />
          <TextField
            name="message"
            value={message}
            onChange={handleChange}
            label="Your Message"
            className={useStyles().root}
            rows={4}
            multiline
          />
          <button className='button-secondary' type="submit">Send</button></>)}
      </Stack>

    </Stack>
  )
}

export default Wrapper(Contact, 'contact');