import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';

function App() {
  return (
    // className='max-w-[1440px] mx-auto'
    <div >
      <RouterProvider router={routes} ></RouterProvider>

    </div >
  );
}

export default App;
