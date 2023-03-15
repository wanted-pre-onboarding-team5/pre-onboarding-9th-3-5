import { CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

export function App() {
  return (
    <Container maxWidth='xl'>
      <CssBaseline />
      <RouterProvider router={router} />
    </Container>
  );
}
