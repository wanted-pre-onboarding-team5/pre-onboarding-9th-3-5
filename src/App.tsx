import { BrowserRouter } from 'react-router-dom';

import { MixedChart } from './components/MixedChart';

export default function App() {
  return (
    <BrowserRouter>
      <MixedChart />
    </BrowserRouter>
  );
}
