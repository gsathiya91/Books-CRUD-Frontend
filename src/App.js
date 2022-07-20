import React from 'react';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AboutUs from './components/AboutUs';
import AddBook from './components/AddBook';
import GetBooks from './components/Books';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import 'react-toastify/dist/ReactToastify.css';
import GetBookById from './components/BookById';
import AllBooks from './components/AllBooks';

function App() {
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/getallbooks" element={<GetBooks />} />
          <Route path="/addnewbook" element={<AddBook />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/getbook/:id" element={<GetBookById />} />
        </Routes>
      </main>
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
