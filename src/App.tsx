import { RouterProvider } from 'react-router-dom';

import FilterProvider from './context/FilterProvider';
import { router } from './router';

const App = () => {
  return (
    <FilterProvider>
      <RouterProvider router={router} />
    </FilterProvider>
  );
};

export default App;
