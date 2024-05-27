
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import { Home } from './pages/Home';
import Category from './components/category';
import Recipe from './pages/recipe';

function NoMath() {
  let location = useLocation();
  return (
    <div className="grey" >
      <h1 >Ops!</h1>
      <h3 >Error has occurred</h3>
      <h5 >Does not exist: {location.pathname}</h5>
    </div>
  );
};

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='container content'>
          <Routes>
            <Route path='*' element={<NoMath />} />
            <Route path='/' element={<Home />} />
            <Route path='Contact/' element={<Contact />} />
            <Route path='About/' element={<About />} />
            <Route path='Category/:name' element={<Category />} />
            <Route path='meal/:id' element={<Recipe />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}