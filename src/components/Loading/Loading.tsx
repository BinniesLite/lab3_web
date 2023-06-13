import React, { useState, useEffect } from 'react';
import { Backdrop } from '@mui/material';

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

          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <h1>Loading...</h1>
        </Backdrop>
      ) : (
        children
      )}
    </>
  );
  



}

export default Loading;