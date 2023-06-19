import React, { useState, useEffect } from 'react';
import { Backdrop } from '@mui/material';
import Box from '@mui/material/Box';
interface LoadingProps {
    children: React.ReactNode;
}


function Loading({ children }: LoadingProps) {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(timer); // Clear the timeout when the component unmounts
  }, []);

  // Why is it still appear after 1.5s
  // Because the loading state is set to false after 1.5s, but the children is still rendered
  // So we need to use conditional rendering
  return (
    <>

      {loading ? (
        <Backdrop

          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 100 }}
          open={loading}
        >
          {/* Make the Box white and cover the whole screen it should also have like a fade out effect */}
          <Box sx={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            {/* <CircularProgress color="inherit" /> */}
          </Box>
          
          
        </Backdrop>
      ) : (
        children
      )}
    </>
  );




}

export default Loading;