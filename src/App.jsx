import Navbar from './components/navbar';
import { ComputerPartList } from './components/computerPartList';
import Pagination from './components/Pagination';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(40);

  return (
    <div>
      <Navbar />
      {location.pathname === '/' ? (
        <div>
          <Pagination
            currentPage={currentPage} 
            pageSize={pageSize} 
            setCurrentPage={setCurrentPage} 
            setPageSize={setPageSize}
          />
          <ComputerPartList currentPage={currentPage} pageSize={pageSize}/>
        </div>
      ) : (
        <Outlet/>
      )}
      
    </div>
  );
}

export default App;