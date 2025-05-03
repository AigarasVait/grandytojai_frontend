import Navbar from './components/generic/navbar';
import ScrollToTop from './components/generic/ScrollToTop';
import { ComputerPartCategoryList } from './components/computer_part/computerPartCategoryList';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import { Footer } from './components/generic/footer';


function App() {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(40);
  const [searchValue, setSearchValue] = useState();

  const renderCategoryList = (category) => {
    return (
      <ComputerPartCategoryList
        currentPage={currentPage}
        pageSize={20}
        category={category}
      />
    );
  };

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      {location.pathname === '/' ? (
        <div>
          <div className='buffer'></div>

          <div className="part-container-text">
          Vaizdo plokštės (GPU)
          <Link to="/category/gpu">Žiūrėti visus</Link>
          </div>
          <div className="part-container">
            {renderCategoryList('gpu')}
          </div>

          <div className="part-container-text">
          Procesoriai (CPU)
          <Link to="/category/cpu">Žiūrėti visus</Link>
          </div>
          <div className="part-container">
            {renderCategoryList('cpu')}
          </div>

          <div className="part-container-text">
          Pagrindinės plokštės ir priedai
          <Link to="/category/motherboard">Žiūrėti visus</Link>
          </div>
          <div className="part-container">
            {renderCategoryList('motherboard')}
          </div>

          <div className="part-container-text">
          Aušintuvai
          <Link to="/category/cooler">Žiūrėti visus</Link>
          </div>
          <div className="part-container">
            {renderCategoryList('cooler')}
          </div>

          <div className="part-container-text">
          Operatyvioji atmintis (RAM)
          <Link to="/category/ram">Žiūrėti visus</Link>
          </div>
          <div className="part-container">
            {renderCategoryList('ram')}
          </div>

          <div className="part-container-text">
          SDD ir HDD
          <Link to="/category/ssd">Žiūrėti visus</Link>
          </div>
          <div className="part-container">
            {renderCategoryList('ssd')}
          </div>

          <div className="part-container-text">
          Kompiuterių korpusai
          <Link to="/category/case">Žiūrėti visus</Link>
          </div>
          <div className="part-container">
            {renderCategoryList('case')}
          </div>

          <div className="part-container-text">
          Priedai
          <Link to="/category/o">Žiūrėti visus</Link>
          </div>
          <div className="part-container">
            {renderCategoryList('o')}
          </div>




          <div className="footer-container">
            <Footer></Footer>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default App;