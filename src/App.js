// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Navigation, Footer } from "./components";
import { Home, Project1, Contact } from "./pages";
import './App.css';

export default function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// export default function App() {
//   const [currentPage, setCurrentPage] = useState('Home');

//   const renderPage = () => {
//     if (currentPage === 'Home') {
//       return <Home />;
//     }
//     if (currentPage === 'Portfolio') {
//       return <Project1 />;
//     }
//     return <Contact />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div className="App">
//       <Header />
//       <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
//       {renderPage()}
//       <Footer />
//     </div>
//   );
// }