import Navbar from './components/navbar';
import { ComputerPartList } from './components/computerPartList';
import './App.css'
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      {location.pathname === '/' ? <ComputerPartList /> : (
        <Outlet/>
      )}
      
    </div>
  );
}

export default App;