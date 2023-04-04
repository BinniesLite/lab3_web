// // create test file
// import * as React from 'react';
// import { render, screen } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import App from './App';

// test('renders learn react link', () => {
//     const client = new QueryClient();
//     render(
//         <QueryClientProvider client={client}>
//         <Router>
//             <App />
//         </Router>
//         </QueryClientProvider>
//     );
//     const linkElement = screen.getByText(/Lab37/i);
//     expect(linkElement).toBeInTheDocument();
//     });
// // run test
// // npm test