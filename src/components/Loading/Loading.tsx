import React, { useState, useEffect } from 'react';
import { Backdrop } from '@mui/material';

interface LoadingProps {
    children: React.ReactNode;
}


function Loading({ children }: LoadingProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <div>
      <Backdrop open={loading} style={{ zIndex: 9999, backgroundColor: 'white', opacity: loading ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
      </Backdrop>
      {!loading && children}
    </div>
  );
}

export default Loading;