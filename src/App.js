// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Navigation, Footer } from "./components";
import { Home, Contact, NotFound } from "./pages";
import { Buttons, Drumkit, Guitar, Clock, Camera, ViewCounter, VariableStyle } from "./pages/projects";
import './App.css';

export default function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/drumkit" element={<Drumkit />} />
          <Route path="/guitar" element={<Guitar />} />
          <Route path="/clock" element={<Clock />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/viewcounter" element={<ViewCounter />} />
          <Route path="/variablestyle" element={<VariableStyle />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<NotFound />} />
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