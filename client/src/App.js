import { useState } from 'react';
import { Header, NavComponent, Footer } from "./components";
import { Home, Contact } from "./pages";
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') return <Home />;
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header />
      <NavComponent currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}