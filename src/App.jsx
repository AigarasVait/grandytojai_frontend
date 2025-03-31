import Navbar from './components/generic/navbar';
import { ComputerPartList } from './components/computer_part/computerPartList';
import Pagination from './components/generic/Pagination';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { SearchBar } from './components/generic/searchBar';

function App() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(40);
  const [searchValue, setSearchValue] = useState();

  return (
    <div>
      <Navbar />
      {location.pathname === '/' ? (
        <div>
          <SearchBar setSearchValue={setSearchValue} />
          <Pagination
            currentPage={currentPage} 
            pageSize={pageSize}
            searchValue={searchValue}
            setCurrentPage={setCurrentPage} 
            setPageSize={setPageSize}
            />
          <ComputerPartList currentPage={currentPage} pageSize={pageSize} searchValue={searchValue} />
        </div>
      ) : (
        <Outlet/>
      )}  
    </div>
  );
}

export default App;