import React, { useState, useEffect } from 'react';
import { Backdrop } from '@mui/material';

interface LoadingProps {
    children: React.ReactNode;
}


function Loading({ children }: LoadingProps) {
  const [loading, setLoading] = useState(true);


  setTimeout(() => setLoading(false), 1300);

  return (
    <div>
      <Backdrop onClick={() => setLoading(false)} open={loading} style={{ zIndex: 9999, backgroundColor: 'white', opacity: loading ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
      </Backdrop>
      {!loading && children}
    </div>
  );
}

export default Loading;